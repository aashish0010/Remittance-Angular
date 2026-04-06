using System.Text.Json;
using Remittance.Application.Interfaces;

namespace Remittance.API.Middleware;

/// <summary>
/// Returns 503 for all API requests when system.maintenanceMode = "true".
/// Auth endpoints (/api/auth/) and the settings endpoint are always allowed through
/// so admins can still log in and turn maintenance mode off.
/// </summary>
public class MaintenanceMiddleware
{
    private readonly RequestDelegate _next;

    public MaintenanceMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context, ISettingsService settings)
    {
        // Always allow auth and settings through so admins can log in and disable maintenance
        var path = context.Request.Path.Value ?? "";
        var isExempt = path.StartsWith("/api/auth", StringComparison.OrdinalIgnoreCase)
                    || path.StartsWith("/api/admin/settings", StringComparison.OrdinalIgnoreCase)
                    || path.StartsWith("/api/reference", StringComparison.OrdinalIgnoreCase)
                    || path.StartsWith("/api/public", StringComparison.OrdinalIgnoreCase)
                    || !path.StartsWith("/api", StringComparison.OrdinalIgnoreCase);

        if (!isExempt)
        {
            var maintenanceOn = await settings.GetBoolAsync("system.maintenanceMode", false);
            if (maintenanceOn)
            {
                var message = await settings.GetAsync(
                    "system.maintenanceMessage",
                    "System is under maintenance. Please try again later.");

                context.Response.StatusCode = 503;
                context.Response.ContentType = "application/json";
                await context.Response.WriteAsync(JsonSerializer.Serialize(new
                {
                    success = false,
                    message,
                    errors = Array.Empty<string>()
                }));
                return;
            }
        }

        await _next(context);
    }
}
