using FluentValidation;
using FluentValidation.AspNetCore;
using MudBlazor.Services;
using Remittance.Application.Validators;
using Remittance.Infrastructure;
using Remittance.Web.Client.Pages;
using Remittance.Web.Client.Services;
using Remittance.Web.Components;

var builder = WebApplication.CreateBuilder(args);

// --- Blazor UI services ---
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents()
    .AddInteractiveWebAssemblyComponents();

builder.Services.AddMudServices();
builder.Services.AddServerSideBlazor().AddCircuitOptions(o => o.DetailedErrors = true);

// HttpClient for server-side Blazor (calls API on the same host)
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped(sp =>
{
    var accessor = sp.GetRequiredService<IHttpContextAccessor>();
    var request = accessor.HttpContext?.Request;
    var baseUrl = request != null
        ? $"{request.Scheme}://{request.Host}"
        : "https://localhost:7299";
    return new HttpClient { BaseAddress = new Uri(baseUrl) };
});
builder.Services.AddScoped<AuthStateService>();
builder.Services.AddScoped<ApiService>();

// --- API services (merged from Remittance.API) ---
builder.Services.AddControllers()
    .AddApplicationPart(typeof(Remittance.API.Controllers.Auth.AuthController).Assembly);
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddValidatorsFromAssemblyContaining<LoginRequestValidator>();
builder.Services.AddOpenApi();
builder.Services.AddInfrastructure(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseWebAssemblyDebugging();
    app.MapOpenApi();
}
else
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.UseAntiforgery();
app.MapStaticAssets();

// Map API controllers
app.MapControllers();

// Map Blazor components
app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode()
    .AddInteractiveWebAssemblyRenderMode()
    .AddAdditionalAssemblies(typeof(Remittance.Web.Client._Imports).Assembly);

// Seed default data
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<Remittance.Infrastructure.Data.ApplicationDbContext>();
    await Remittance.Infrastructure.Data.DbSeeder.SeedAsync(context);
}

app.Run();
