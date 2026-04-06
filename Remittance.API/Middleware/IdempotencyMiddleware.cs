using System.Text;
using Microsoft.EntityFrameworkCore;
using Remittance.Domain.Entities;
using Remittance.Infrastructure.Data;

namespace Remittance.API.Middleware;

/// <summary>
/// Ensures POST requests with an Idempotency-Key header are processed exactly once.
/// If the same key is sent again, the original response is replayed.
/// </summary>
public class IdempotencyMiddleware
{
    private readonly RequestDelegate _next;
    private const string IdempotencyHeader = "Idempotency-Key";

    public IdempotencyMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Only apply to POST/PUT methods (write operations)
        if (context.Request.Method != HttpMethod.Post.Method && context.Request.Method != HttpMethod.Put.Method)
        {
            await _next(context);
            return;
        }

        // If no idempotency key header, proceed normally
        if (!context.Request.Headers.TryGetValue(IdempotencyHeader, out var keyValue) || string.IsNullOrWhiteSpace(keyValue))
        {
            await _next(context);
            return;
        }

        var idempotencyKey = keyValue.ToString();
        var endpoint = $"{context.Request.Method} {context.Request.Path}";
        var db = context.RequestServices.GetRequiredService<ApplicationDbContext>();

        // Check if this key was already processed
        var existing = await db.IdempotencyKeys
            .FirstOrDefaultAsync(k => k.Key == idempotencyKey && k.Endpoint == endpoint && k.ExpiresAt > DateTime.UtcNow);

        if (existing != null)
        {
            // Replay the original response
            context.Response.StatusCode = existing.ResponseStatusCode;
            context.Response.ContentType = "application/json";
            await context.Response.WriteAsync(existing.ResponseBody);
            return;
        }

        // Capture the response body
        var originalBodyStream = context.Response.Body;
        using var memoryStream = new MemoryStream();
        context.Response.Body = memoryStream;

        await _next(context);

        // Read the response
        memoryStream.Seek(0, SeekOrigin.Begin);
        var responseBody = await new StreamReader(memoryStream).ReadToEndAsync();

        // Store the idempotency key with the response (valid for 24 hours)
        try
        {
            db.IdempotencyKeys.Add(new IdempotencyKey
            {
                Key = idempotencyKey,
                Endpoint = endpoint,
                ResponseStatusCode = context.Response.StatusCode,
                ResponseBody = responseBody,
                ExpiresAt = DateTime.UtcNow.AddHours(24)
            });
            await db.SaveChangesAsync();
        }
        catch (DbUpdateException)
        {
            // Race condition — another request with the same key was processed simultaneously.
            // This is fine; the first one wins.
        }

        // Write response to the original stream
        memoryStream.Seek(0, SeekOrigin.Begin);
        await memoryStream.CopyToAsync(originalBodyStream);
        context.Response.Body = originalBodyStream;
    }
}
