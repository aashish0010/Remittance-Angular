using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Remittance.Application.Interfaces;
using Remittance.Application.Services;
using Remittance.Domain.Interfaces;
using Remittance.Infrastructure.Data;
using Remittance.Infrastructure.Identity;
using Remittance.Infrastructure.Repositories;

namespace Remittance.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        // Database
        // SECURITY: EnableSensitiveDataLogging must NEVER be called here.
        // EF Core SQL parameter values can contain hashed PINs, document paths,
        // and other sensitive fields. EnableDetailedErrors is safe (exception text only).
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));

        // Repositories
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        services.AddScoped<IUnitOfWork>(sp => sp.GetRequiredService<ApplicationDbContext>());

        // JWT
        var jwtSettings = configuration.GetSection("JwtSettings");
        services.Configure<JwtSettings>(jwtSettings);
        services.AddScoped<JwtTokenService>();

        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = jwtSettings["Issuer"],
                ValidAudience = jwtSettings["Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(jwtSettings["SecretKey"]!)),
                ClockSkew = TimeSpan.Zero
            };

            // SECURITY: explicitly control what is logged on auth events.
            // The framework's default handlers can emit token-related detail at Debug
            // level. We replace them with redacted messages so that even if the log
            // level is lowered in an environment, tokens never appear in Fly.io logs.
            options.Events = new JwtBearerEvents
            {
                OnAuthenticationFailed = context =>
                {
                    var logger = context.HttpContext.RequestServices
                        .GetRequiredService<ILogger<JwtBearerEvents>>();
                    // Log failure reason (exception type) only — never the raw token.
                    logger.LogWarning(
                        "JWT authentication failed: {Reason}",
                        context.Exception.GetType().Name);
                    return Task.CompletedTask;
                },
                OnChallenge = context =>
                {
                    // Suppress the default framework log that can include the
                    // 'error_description' field, which may reference token claims.
                    context.HandleResponse();
                    if (!context.Response.HasStarted)
                    {
                        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                        context.Response.ContentType = "application/json";
                        return context.Response.WriteAsync(
                            "{\"success\":false,\"message\":\"Unauthorized.\"}");
                    }
                    return Task.CompletedTask;
                }
            };
        });

        services.AddAuthorization();

        // Services
        services.AddScoped<IAuthService, AuthService>();
        services.AddScoped<IExchangeRateService, ExchangeRateService>();
        services.AddScoped<ICommissionService, CommissionService>();
        services.AddScoped<ITransactionService, TransactionService>();
        services.AddScoped<IAgentManagementService, AgentManagementService>();
        services.AddScoped<IComplianceService, ComplianceService>();
        services.AddScoped<IAccountingService, AccountingService>();
        services.AddScoped<ICustomerManagementService, CustomerManagementService>();
        services.AddScoped<IReceiverService, ReceiverService>();
        services.AddScoped<IAgentLocationService, AgentLocationService>();
        services.AddScoped<IAgentBankService, AgentBankService>();
        services.AddScoped<IPaymentCorridorService, PaymentCorridorService>();
        services.AddScoped<IDashboardService, DashboardService>();
        services.AddScoped<IAgentCommissionService, AgentCommissionService>();
        services.AddScoped<ISanctionsScreeningService, SanctionsScreeningService>();
        services.AddScoped<ISettingsService, SettingsService>();

        return services;
    }
}
