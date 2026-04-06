using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using Remittance.Domain.Enums;
using Remittance.Infrastructure.Data;

namespace Remittance.API.Helpers;

/// <summary>
/// Checks that the current user has permission for the specified menu URL and action.
/// SystemAdmin role always passes. Usage: [MenuPermission("/admin/agents", "Read")]
/// </summary>
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false)]
public class MenuPermissionAttribute : TypeFilterAttribute
{
    public MenuPermissionAttribute(string menuUrl, string action = "Read")
        : base(typeof(MenuPermissionFilter))
    {
        Arguments = new object[] { menuUrl, action };
    }
}

public class MenuPermissionFilter : IAsyncAuthorizationFilter
{
    private readonly string _menuUrl;
    private readonly string _action;
    private readonly ApplicationDbContext _context;

    public MenuPermissionFilter(string menuUrl, string action, ApplicationDbContext context)
    {
        _menuUrl = menuUrl;
        _action = action;
        _context = context;
    }

    public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
    {
        var userId = context.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(userId))
        {
            context.Result = new UnauthorizedResult();
            return;
        }

        // SystemAdmin always passes
        var isSystemAdmin = await _context.UserRoles
            .AnyAsync(ur => ur.UserId == userId && ur.Role.RoleType == RoleType.SystemAdmin);

        if (isSystemAdmin) return;

        // Check if user has the required permission for this menu
        var hasPermission = await _context.RolePermissions
            .AnyAsync(rp =>
                _context.UserRoles.Any(ur => ur.UserId == userId && ur.RoleId == rp.RoleId) &&
                rp.Permission.Menu.Url == _menuUrl &&
                rp.Permission.ActionName == _action &&
                rp.Permission.IsActive &&
                rp.Permission.Menu.IsActive);

        if (!hasPermission)
        {
            context.Result = new ObjectResult(new { success = false, message = "Access denied. You don't have permission for this action." })
            {
                StatusCode = 403
            };
        }
    }
}
