using System.Threading.RateLimiting;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Remittance.API.Middleware;
using Remittance.Application.Validators;
using Remittance.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// ─── Environment variable overrides for secrets ─────────────────────────────
// In production, set these environment variables instead of using appsettings.json:
//   CONNECTION_STRING, JWT_SECRET_KEY, JWT_ISSUER, JWT_AUDIENCE
var envConnStr = Environment.GetEnvironmentVariable("CONNECTION_STRING");
if (!string.IsNullOrEmpty(envConnStr))
    builder.Configuration["ConnectionStrings:DefaultConnection"] = envConnStr;

var envJwtKey = Environment.GetEnvironmentVariable("JWT_SECRET_KEY");
if (!string.IsNullOrEmpty(envJwtKey))
    builder.Configuration["JwtSettings:SecretKey"] = envJwtKey;

var envJwtIssuer = Environment.GetEnvironmentVariable("JWT_ISSUER");
if (!string.IsNullOrEmpty(envJwtIssuer))
    builder.Configuration["JwtSettings:Issuer"] = envJwtIssuer;

var envJwtAudience = Environment.GetEnvironmentVariable("JWT_AUDIENCE");
if (!string.IsNullOrEmpty(envJwtAudience))
    builder.Configuration["JwtSettings:Audience"] = envJwtAudience;

// Add services
builder.Services.AddControllers();
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddValidatorsFromAssemblyContaining<LoginRequestValidator>();
builder.Services.AddOpenApi();
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<Remittance.Domain.Interfaces.IAuditContextProvider, Remittance.API.Services.HttpAuditContextProvider>();
builder.Services.AddInfrastructure(builder.Configuration);

// ─── Rate limiting ──────────────────────────────────────────────────────────
builder.Services.AddRateLimiter(options =>
{
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;

    // Login: 5 requests per minute per IP
    options.AddPolicy("login", context =>
        RateLimitPartition.GetFixedWindowLimiter(
            context.Connection.RemoteIpAddress?.ToString() ?? "unknown",
            _ => new FixedWindowRateLimiterOptions
            {
                PermitLimit = 5,
                Window = TimeSpan.FromMinutes(1)
            }));

    // Transaction send: 10 requests per minute per user
    options.AddPolicy("transaction", context =>
        RateLimitPartition.GetFixedWindowLimiter(
            context.User.Identity?.Name ?? context.Connection.RemoteIpAddress?.ToString() ?? "unknown",
            _ => new FixedWindowRateLimiterOptions
            {
                PermitLimit = 10,
                Window = TimeSpan.FromMinutes(1)
            }));

    // General API: 100 requests per minute per user/IP
    options.GlobalLimiter = PartitionedRateLimiter.Create<HttpContext, string>(context =>
        RateLimitPartition.GetFixedWindowLimiter(
            context.User.Identity?.Name ?? context.Connection.RemoteIpAddress?.ToString() ?? "unknown",
            _ => new FixedWindowRateLimiterOptions
            {
                PermitLimit = 100,
                Window = TimeSpan.FromMinutes(1)
            }));
});

// CORS for frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowBlazor", policy =>
        policy.WithOrigins("https://localhost:7299","https://remittance-angular-9mtq.vercel.app", "http://localhost:5271","http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// ─── Security headers (CSP, HSTS, X-Frame-Options, etc.) ───────────────────
app.UseMiddleware<SecurityHeadersMiddleware>();

// ─── Maintenance mode — blocks API calls when system.maintenanceMode = true ─
app.UseMiddleware<MaintenanceMiddleware>();

app.UseCors("AllowBlazor");

// Global exception handler — must come after UseCors so CORS headers
// are already written before the error response is produced.
//
// SECURITY: log Method + Path only — NEVER the request body.
// Request bodies may contain transaction PINs, JWT tokens, or document data.
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        var exceptionFeature = context.Features.Get<IExceptionHandlerFeature>();
        if (exceptionFeature is not null)
        {
            var logger = context.RequestServices.GetRequiredService<ILogger<Program>>();
            // Structured fields: exception type + safe request metadata only.
            // Do NOT log: request body, Authorization header, query strings.
            logger.LogError(
                exceptionFeature.Error,
                "Unhandled exception {ExceptionType} on {Method} {Path}",
                exceptionFeature.Error.GetType().Name,
                context.Request.Method,
                context.Request.Path.Value);
        }

        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";
        await context.Response.WriteAsync("{\"success\":false,\"message\":\"An unexpected server error occurred.\"}");
    });
});

app.UseHttpsRedirection();

// ─── Rate limiting middleware ───────────────────────────────────────────────
app.UseRateLimiter();

// Ensure wwwroot and uploads directories exist so static file serving works
var webRootPath = app.Environment.WebRootPath ?? Path.Combine(app.Environment.ContentRootPath, "wwwroot");
var uploadsPath = Path.Combine(webRootPath, "uploads");
Directory.CreateDirectory(uploadsPath);

// Content types for image formats that may not be in the default map
var contentTypeProvider = new FileExtensionContentTypeProvider();
contentTypeProvider.Mappings[".webp"] = "image/webp";
contentTypeProvider.Mappings[".avif"] = "image/avif";

app.UseStaticFiles(new StaticFileOptions { ContentTypeProvider = contentTypeProvider });

// Also serve the uploads folder explicitly (in case WebRootPath was null at startup)
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(uploadsPath),
    RequestPath = "/uploads",
    ContentTypeProvider = contentTypeProvider
});

app.UseAuthentication();
app.UseAuthorization();

// ─── Idempotency middleware — prevents duplicate transactions on retry ──────
app.UseMiddleware<IdempotencyMiddleware>();

app.MapControllers();

// Apply pending migrations and seed default data
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<Remittance.Infrastructure.Data.ApplicationDbContext>();
    await context.Database.MigrateAsync();
    try
    {
        await Remittance.Infrastructure.Data.DbSeeder.SeedAsync(context);
    }
    catch (Exception ex)
    {
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while seeding the database.");
    }
}

app.Run();
