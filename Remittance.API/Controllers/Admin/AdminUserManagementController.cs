using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Remittance.Application.DTOs.Common;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Infrastructure.Data;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/user-management")]
[Authorize]
public class AdminUserManagementController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public AdminUserManagementController(ApplicationDbContext context)
    {
        _context = context;
    }

    // ── Helper: verify caller is SystemAdmin ──
    private async Task<bool> IsSystemAdmin()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(userId)) return false;
        return await _context.UserRoles
            .AnyAsync(ur => ur.UserId == userId && ur.Role.RoleType == RoleType.SystemAdmin);
    }

    // =====================================================================
    // ROLES
    // =====================================================================

    [HttpGet("roles")]
    public async Task<IActionResult> GetRoles()
    {
        if (!await IsSystemAdmin())
            return Forbid();

        var roles = await _context.Roles
            .Include(r => r.UserRoles)
            .Include(r => r.RolePermissions)
            .OrderBy(r => r.Id)
            .Select(r => new
            {
                r.Id,
                r.Name,
                r.Description,
                RoleType = r.RoleType.ToString(),
                Portal = r.Portal.ToString(),
                r.IsActive,
                r.CreatedAt,
                UserCount = r.UserRoles.Count,
                PermissionCount = r.RolePermissions.Count
            })
            .ToListAsync();

        return Ok(ApiResponse<object>.Ok(roles));
    }

    [HttpGet("roles/{id}")]
    public async Task<IActionResult> GetRole(int id)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        var role = await _context.Roles
            .Include(r => r.RolePermissions)
            .ThenInclude(rp => rp.Permission)
            .ThenInclude(p => p.Menu)
            .FirstOrDefaultAsync(r => r.Id == id);

        if (role == null)
            return NotFound(ApiResponse<object>.Fail("Role not found."));

        var result = new
        {
            role.Id,
            role.Name,
            role.Description,
            RoleType = role.RoleType.ToString(),
            Portal = role.Portal.ToString(),
            role.IsActive,
            role.CreatedAt,
            Permissions = role.RolePermissions.Select(rp => new
            {
                rp.PermissionId,
                rp.Permission.ActionName,
                MenuId = rp.Permission.Menu.Id,
                MenuName = rp.Permission.Menu.Name
            }).ToList()
        };

        return Ok(ApiResponse<object>.Ok(result));
    }

    public class CreateRoleDto
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string Portal { get; set; } = "Admin"; // Admin or Agent
        public bool IsActive { get; set; } = true;
    }

    [HttpPost("roles")]
    public async Task<IActionResult> CreateRole([FromBody] CreateRoleDto dto)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        if (string.IsNullOrWhiteSpace(dto.Name))
            return BadRequest(ApiResponse<object>.Fail("Role name is required."));

        // Cannot create SystemAdmin via API
        if (dto.Name.Equals("SystemAdmin", StringComparison.OrdinalIgnoreCase))
            return BadRequest(ApiResponse<object>.Fail("Cannot create SystemAdmin role."));

        if (await _context.Roles.AnyAsync(r => r.Name == dto.Name))
            return BadRequest(ApiResponse<object>.Fail("Role name already exists."));

        var portal = Enum.TryParse<PortalType>(dto.Portal, true, out var pt) ? pt : PortalType.Admin;

        var role = new Role
        {
            Name = dto.Name,
            Description = dto.Description,
            RoleType = RoleType.Admin, // custom roles default to Admin type
            Portal = portal,
            IsActive = dto.IsActive
        };

        _context.Roles.Add(role);
        await _context.SaveChangesAsync();

        return Ok(ApiResponse<object>.Ok(new { role.Id, role.Name }, "Role created."));
    }

    [HttpPut("roles/{id}")]
    public async Task<IActionResult> UpdateRole(int id, [FromBody] CreateRoleDto dto)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        var role = await _context.Roles.FindAsync(id);
        if (role == null)
            return NotFound(ApiResponse<object>.Fail("Role not found."));

        // Protect SystemAdmin
        if (role.RoleType == RoleType.SystemAdmin)
            return BadRequest(ApiResponse<object>.Fail("Cannot modify SystemAdmin role."));

        if (!string.IsNullOrWhiteSpace(dto.Name) && dto.Name != role.Name)
        {
            if (await _context.Roles.AnyAsync(r => r.Name == dto.Name && r.Id != id))
                return BadRequest(ApiResponse<object>.Fail("Role name already exists."));
            role.Name = dto.Name;
        }

        role.Description = dto.Description ?? role.Description;
        role.IsActive = dto.IsActive;
        if (Enum.TryParse<PortalType>(dto.Portal, true, out var pt))
            role.Portal = pt;

        await _context.SaveChangesAsync();
        return Ok(ApiResponse<object>.Ok(new { role.Id, role.Name }, "Role updated."));
    }

    [HttpDelete("roles/{id}")]
    public async Task<IActionResult> DeleteRole(int id)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        var role = await _context.Roles
            .Include(r => r.UserRoles)
            .FirstOrDefaultAsync(r => r.Id == id);

        if (role == null)
            return NotFound(ApiResponse<object>.Fail("Role not found."));

        if (role.RoleType == RoleType.SystemAdmin)
            return BadRequest(ApiResponse<object>.Fail("Cannot delete SystemAdmin role."));

        if (role.UserRoles.Any())
            return BadRequest(ApiResponse<object>.Fail($"Role has {role.UserRoles.Count} users assigned. Remove users first."));

        // Remove role permissions
        var rps = await _context.RolePermissions.Where(rp => rp.RoleId == id).ToListAsync();
        _context.RolePermissions.RemoveRange(rps);
        _context.Roles.Remove(role);
        await _context.SaveChangesAsync();

        return Ok(ApiResponse<bool>.Ok(true, "Role deleted."));
    }

    // =====================================================================
    // MENU & PERMISSIONS (read-only for assignment)
    // =====================================================================

    [HttpGet("menus")]
    public async Task<IActionResult> GetMenus([FromQuery] string? portal = null)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        var query = _context.Menus
            .Include(m => m.Permissions)
            .Where(m => m.IsActive);

        if (!string.IsNullOrEmpty(portal) && Enum.TryParse<PortalType>(portal, true, out var pt))
            query = query.Where(m => m.Portal == pt);

        var menus = await query
            .OrderBy(m => m.Portal)
            .ThenBy(m => m.DisplayOrder)
            .Select(m => new
            {
                m.Id,
                m.Name,
                m.Icon,
                m.Url,
                m.ParentId,
                m.DisplayOrder,
                Portal = m.Portal.ToString(),
                Permissions = m.Permissions.Where(p => p.IsActive).Select(p => new
                {
                    p.Id,
                    p.ActionName
                }).ToList()
            })
            .ToListAsync();

        return Ok(ApiResponse<object>.Ok(menus));
    }

    // =====================================================================
    // ROLE → PERMISSION ASSIGNMENT
    // =====================================================================

    public class AssignPermissionsDto
    {
        public List<int> PermissionIds { get; set; } = new();
    }

    [HttpPut("roles/{roleId}/permissions")]
    public async Task<IActionResult> AssignPermissions(int roleId, [FromBody] AssignPermissionsDto dto)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        var role = await _context.Roles.FindAsync(roleId);
        if (role == null)
            return NotFound(ApiResponse<object>.Fail("Role not found."));

        if (role.RoleType == RoleType.SystemAdmin)
            return BadRequest(ApiResponse<object>.Fail("Cannot modify SystemAdmin permissions."));

        // Remove existing
        var existing = await _context.RolePermissions.Where(rp => rp.RoleId == roleId).ToListAsync();
        _context.RolePermissions.RemoveRange(existing);

        // Add new
        foreach (var pid in dto.PermissionIds.Distinct())
        {
            _context.RolePermissions.Add(new RolePermission
            {
                RoleId = roleId,
                PermissionId = pid
            });
        }

        await _context.SaveChangesAsync();
        return Ok(ApiResponse<object>.Ok(new { count = dto.PermissionIds.Count }, $"Assigned {dto.PermissionIds.Count} permissions to role."));
    }

    // =====================================================================
    // USERS
    // =====================================================================

    [HttpGet("users")]
    public async Task<IActionResult> GetUsers([FromQuery] string? search = null, [FromQuery] string? role = null, [FromQuery] bool? isActive = null)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        var query = _context.Users
            .Include(u => u.UserRoles)
            .ThenInclude(ur => ur.Role)
            .AsQueryable();

        if (!string.IsNullOrWhiteSpace(search))
        {
            var s = search.ToLower();
            query = query.Where(u => u.FullName.ToLower().Contains(s) || u.Email.ToLower().Contains(s) || u.PhoneNumber.Contains(s));
        }

        if (!string.IsNullOrWhiteSpace(role))
            query = query.Where(u => u.UserRoles.Any(ur => ur.Role.Name == role));

        if (isActive.HasValue)
            query = query.Where(u => u.IsActive == isActive.Value);

        var users = await query
            .OrderByDescending(u => u.CreatedAt)
            .Select(u => new
            {
                u.Id,
                u.FullName,
                u.Email,
                u.PhoneNumber,
                u.IsActive,
                u.CreatedAt,
                u.UpdatedAt,
                Roles = u.UserRoles.Select(ur => new
                {
                    ur.Role.Id,
                    ur.Role.Name,
                    Portal = ur.Role.Portal.ToString()
                }).ToList()
            })
            .ToListAsync();

        return Ok(ApiResponse<object>.Ok(users));
    }

    [HttpGet("users/{id}")]
    public async Task<IActionResult> GetUser(string id)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        var user = await _context.Users
            .Include(u => u.UserRoles)
            .ThenInclude(ur => ur.Role)
            .FirstOrDefaultAsync(u => u.Id == id);

        if (user == null)
            return NotFound(ApiResponse<object>.Fail("User not found."));

        return Ok(ApiResponse<object>.Ok(new
        {
            user.Id,
            user.FullName,
            user.Email,
            user.PhoneNumber,
            user.IsActive,
            user.CreatedAt,
            user.UpdatedAt,
            Roles = user.UserRoles.Select(ur => new
            {
                ur.Role.Id,
                ur.Role.Name,
                Portal = ur.Role.Portal.ToString()
            }).ToList()
        }));
    }

    public class CreateUserDto
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public List<int> RoleIds { get; set; } = new();
        public bool IsActive { get; set; } = true;
    }

    [HttpPost("users")]
    public async Task<IActionResult> CreateUser([FromBody] CreateUserDto dto)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        if (string.IsNullOrWhiteSpace(dto.Email) || string.IsNullOrWhiteSpace(dto.Password))
            return BadRequest(ApiResponse<object>.Fail("Email and password are required."));

        if (await _context.Users.AnyAsync(u => u.Email == dto.Email))
            return BadRequest(ApiResponse<object>.Fail("Email already exists."));

        // Prevent creating SystemAdmin users
        var systemAdminRoleId = await _context.Roles
            .Where(r => r.RoleType == RoleType.SystemAdmin)
            .Select(r => r.Id)
            .FirstOrDefaultAsync();

        if (dto.RoleIds.Contains(systemAdminRoleId))
            return BadRequest(ApiResponse<object>.Fail("Cannot assign SystemAdmin role to new users."));

        var user = new ApplicationUser
        {
            FullName = dto.FullName,
            Email = dto.Email,
            UserName = dto.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),
            PhoneNumber = dto.PhoneNumber,
            IsActive = dto.IsActive
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        // Assign roles
        foreach (var roleId in dto.RoleIds.Distinct())
        {
            if (await _context.Roles.AnyAsync(r => r.Id == roleId))
            {
                _context.UserRoles.Add(new UserRole { UserId = user.Id, RoleId = roleId });
            }
        }
        await _context.SaveChangesAsync();

        return Ok(ApiResponse<object>.Ok(new { user.Id, user.Email }, "User created."));
    }

    public class UpdateUserDto
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string? Password { get; set; } // null = don't change
        public List<int> RoleIds { get; set; } = new();
        public bool IsActive { get; set; } = true;
    }

    [HttpPut("users/{id}")]
    public async Task<IActionResult> UpdateUser(string id, [FromBody] UpdateUserDto dto)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        var user = await _context.Users
            .Include(u => u.UserRoles)
            .FirstOrDefaultAsync(u => u.Id == id);

        if (user == null)
            return NotFound(ApiResponse<object>.Fail("User not found."));

        // Prevent modifying SystemAdmin user's core data by non-SystemAdmin check already done above
        var isTargetSystemAdmin = user.UserRoles.Any(ur => ur.Role != null && ur.Role.RoleType == RoleType.SystemAdmin);
        // Load role info for existing user roles
        if (!isTargetSystemAdmin)
        {
            var userRoleIds = user.UserRoles.Select(ur => ur.RoleId).ToList();
            isTargetSystemAdmin = await _context.Roles.AnyAsync(r => userRoleIds.Contains(r.Id) && r.RoleType == RoleType.SystemAdmin);
        }

        // Prevent adding SystemAdmin role
        var systemAdminRoleId = await _context.Roles
            .Where(r => r.RoleType == RoleType.SystemAdmin)
            .Select(r => r.Id)
            .FirstOrDefaultAsync();

        if (!isTargetSystemAdmin && dto.RoleIds.Contains(systemAdminRoleId))
            return BadRequest(ApiResponse<object>.Fail("Cannot assign SystemAdmin role."));

        // Update basic info
        user.FullName = dto.FullName;
        if (!string.IsNullOrWhiteSpace(dto.Email) && dto.Email != user.Email)
        {
            if (await _context.Users.AnyAsync(u => u.Email == dto.Email && u.Id != id))
                return BadRequest(ApiResponse<object>.Fail("Email already exists."));
            user.Email = dto.Email;
            user.UserName = dto.Email;
        }
        user.PhoneNumber = dto.PhoneNumber;
        user.IsActive = dto.IsActive;
        user.UpdatedAt = DateTime.UtcNow;

        if (!string.IsNullOrWhiteSpace(dto.Password))
            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password);

        // Update roles (skip SystemAdmin role changes)
        if (!isTargetSystemAdmin)
        {
            var existingRoles = await _context.UserRoles.Where(ur => ur.UserId == id).ToListAsync();
            _context.UserRoles.RemoveRange(existingRoles);

            foreach (var roleId in dto.RoleIds.Distinct())
            {
                if (roleId != systemAdminRoleId && await _context.Roles.AnyAsync(r => r.Id == roleId))
                {
                    _context.UserRoles.Add(new UserRole { UserId = id, RoleId = roleId });
                }
            }
        }

        await _context.SaveChangesAsync();
        return Ok(ApiResponse<object>.Ok(new { user.Id, user.Email }, "User updated."));
    }

    [HttpPut("users/{id}/toggle-status")]
    public async Task<IActionResult> ToggleUserStatus(string id)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        var user = await _context.Users.FindAsync(id);
        if (user == null)
            return NotFound(ApiResponse<object>.Fail("User not found."));

        // Don't deactivate SystemAdmin
        var isSystemAdminUser = await _context.UserRoles
            .AnyAsync(ur => ur.UserId == id && ur.Role.RoleType == RoleType.SystemAdmin);
        if (isSystemAdminUser && user.IsActive)
            return BadRequest(ApiResponse<object>.Fail("Cannot deactivate SystemAdmin user."));

        user.IsActive = !user.IsActive;
        user.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return Ok(ApiResponse<object>.Ok(new { user.IsActive }, user.IsActive ? "User activated." : "User deactivated."));
    }

    [HttpDelete("users/{id}")]
    public async Task<IActionResult> DeleteUser(string id)
    {
        if (!await IsSystemAdmin())
            return Forbid();

        var user = await _context.Users.FindAsync(id);
        if (user == null)
            return NotFound(ApiResponse<object>.Fail("User not found."));

        var isSystemAdminUser = await _context.UserRoles
            .AnyAsync(ur => ur.UserId == id && ur.Role.RoleType == RoleType.SystemAdmin);
        if (isSystemAdminUser)
            return BadRequest(ApiResponse<object>.Fail("Cannot delete SystemAdmin user."));

        // Remove user roles
        var urs = await _context.UserRoles.Where(ur => ur.UserId == id).ToListAsync();
        _context.UserRoles.RemoveRange(urs);

        // Remove refresh tokens
        var tokens = await _context.RefreshTokens.Where(t => t.UserId == id).ToListAsync();
        _context.RefreshTokens.RemoveRange(tokens);

        _context.Users.Remove(user);
        await _context.SaveChangesAsync();

        return Ok(ApiResponse<bool>.Ok(true, "User deleted."));
    }
}
