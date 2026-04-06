using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Remittance.Application.DTOs.Auth;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Infrastructure.Data;

namespace Remittance.Infrastructure.Identity;

public class AuthService : IAuthService
{
    private readonly ApplicationDbContext _context;
    private readonly JwtTokenService _jwtService;
    private readonly JwtSettings _jwtSettings;
    private readonly ISettingsService _settings;

    public AuthService(ApplicationDbContext context, JwtTokenService jwtService, IOptions<JwtSettings> jwtSettings, ISettingsService settings)
    {
        _context = context;
        _jwtService = jwtService;
        _jwtSettings = jwtSettings.Value;
        _settings = settings;
    }

    public async Task<ApiResponse<LoginResponseDto>> LoginAsync(LoginRequestDto request)
    {
        var user = await _context.Users
            .Include(u => u.UserRoles)
            .ThenInclude(ur => ur.Role)
            .FirstOrDefaultAsync(u => u.Email == request.Email && u.IsActive);

        if (user == null)
            return ApiResponse<LoginResponseDto>.Fail("Invalid email or password.");

        var maxLoginAttempts       = await _settings.GetIntAsync("user.maxLoginAttempts", 5);
        var lockoutDurationMinutes = await _settings.GetIntAsync("user.lockoutDurationMinutes", 30);

        // Check if account is locked out
        if (user.LockoutEnd.HasValue && user.LockoutEnd > DateTime.UtcNow)
        {
            var remaining = Math.Ceiling((user.LockoutEnd.Value - DateTime.UtcNow).TotalMinutes);
            return ApiResponse<LoginResponseDto>.Fail($"Account is locked due to too many failed attempts. Try again in {remaining} minute(s).");
        }

        // Reset expired lockout
        if (user.LockoutEnd.HasValue && user.LockoutEnd <= DateTime.UtcNow)
        {
            user.FailedLoginAttempts = 0;
            user.LockoutEnd = null;
        }

        if (!BCryptVerify(request.Password, user.PasswordHash))
        {
            user.FailedLoginAttempts++;
            if (maxLoginAttempts > 0 && user.FailedLoginAttempts >= maxLoginAttempts)
            {
                user.LockoutEnd = DateTime.UtcNow.AddMinutes(lockoutDurationMinutes);
                await _context.SaveChangesAsync();
                return ApiResponse<LoginResponseDto>.Fail($"Too many failed attempts. Account locked for {lockoutDurationMinutes} minute(s).");
            }
            await _context.SaveChangesAsync();
            var attemptsLeft = maxLoginAttempts > 0 ? $" {maxLoginAttempts - user.FailedLoginAttempts} attempt(s) remaining." : "";
            return ApiResponse<LoginResponseDto>.Fail($"Invalid email or password.{attemptsLeft}");
        }

        // Success — reset lockout counters
        user.FailedLoginAttempts = 0;
        user.LockoutEnd = null;

        // ── Suspicious activity detected on a prior session ─────────────────
        // A previous refresh token was reused (possible token theft). The entire
        // token family was already revoked at detection time. Now that the user has
        // re-authenticated with their password, clear the flag and surface a warning
        // so the frontend can display a security banner.
        string? securityAlertMessage = null;
        if (user.IsSuspiciousActivity)
        {
            securityAlertMessage =
                "Suspicious activity was detected on your account: a session token was used more than once. " +
                "All previous sessions have been terminated. If this was not you, please change your password immediately.";
            user.IsSuspiciousActivity = false;
            user.SuspiciousActivityAt = null;
        }

        return await GenerateTokenResponse(user, securityAlertMessage: securityAlertMessage);
    }

    public async Task<ApiResponse<LoginResponseDto>> RefreshTokenAsync(string refreshToken)
    {
        // Query ALL tokens (including already-revoked ones).
        // We must distinguish between "never existed" and "already rotated out"
        // to detect token-reuse attacks — the two cases look identical if we
        // filter on IsRevoked = false.
        var stored = await _context.RefreshTokens
            .Include(rt => rt.User)
            .ThenInclude(u => u.UserRoles)
            .ThenInclude(ur => ur.Role)
            .FirstOrDefaultAsync(rt => rt.Token == refreshToken);

        // Token does not exist in the database at all — plain invalid request.
        if (stored == null)
            return ApiResponse<LoginResponseDto>.Fail("Invalid refresh token.");

        // ── Refresh token reuse detected ────────────────────────────────────
        // The token exists but is already revoked. This means it was presented
        // AFTER it had already been rotated out, which indicates one of:
        //   (a) An attacker stole the old token and is replaying it, or
        //   (b) The client retried with a stale token after a network failure.
        //
        // Per OWASP refresh token rotation guidelines, both scenarios require the
        // same response: revoke the entire token family and force re-login.
        // The legitimate user will see a security warning on their next login.
        if (stored.IsRevoked)
        {
            await InvalidateTokenFamilyAsync(stored.FamilyId, stored.UserId);
            return ApiResponse<LoginResponseDto>.Fail(
                "Security alert: this session has been invalidated due to suspicious activity. Please log in again.");
        }

        // Normal expiry check on a valid, non-revoked token
        if (stored.ExpiresAt < DateTime.UtcNow)
        {
            stored.IsRevoked = true;
            await _context.SaveChangesAsync();
            return ApiResponse<LoginResponseDto>.Fail("Refresh token expired. Please login again.");
        }

        // ── Rotate token ────────────────────────────────────────────────────
        // Mark the current token as used and record what replaced it for the
        // audit trail. The new token inherits the same FamilyId so the chain
        // can still be fully revoked if reuse is detected in a future rotation.
        var newTokenValue = GenerateTokenValue();
        stored.IsRevoked = true;
        stored.ReplacedByToken = newTokenValue;
        // SaveChangesAsync is called inside GenerateTokenResponse so the revocation
        // of the old token and the insert of the new token commit together.

        return await GenerateTokenResponse(stored.User, familyId: stored.FamilyId, tokenValue: newTokenValue);
    }

    /// <summary>
    /// Revokes every token in the compromised family and flags the user account.
    /// Called when reuse of an already-rotated refresh token is detected.
    /// </summary>
    private async Task InvalidateTokenFamilyAsync(string familyId, string userId)
    {
        // Revoke all tokens in the family — this ensures that whichever party
        // (legitimate user or attacker) holds the currently active token in the
        // family can no longer use it to issue new access tokens.
        var familyTokens = await _context.RefreshTokens
            .Where(rt => rt.FamilyId == familyId)
            .ToListAsync();

        foreach (var token in familyTokens)
        {
            token.IsRevoked = true;
            token.IsCompromised = true;
        }

        var user = await _context.Users.FindAsync(userId);
        if (user is not null)
        {
            user.IsSuspiciousActivity = true;
            user.SuspiciousActivityAt = DateTime.UtcNow;
        }

        await _context.SaveChangesAsync();
    }

    private async Task<ApiResponse<LoginResponseDto>> GenerateTokenResponse(
        ApplicationUser user,
        string? familyId = null,
        string? tokenValue = null,
        string? securityAlertMessage = null)
    {
        var roles = user.UserRoles.Select(ur => ur.Role.Name).ToList();
        var availablePortals = user.UserRoles
            .Select(ur => ur.Role.Portal.ToString())
            .Distinct()
            .ToList();
        var portal = availablePortals.FirstOrDefault() ?? "Customer";

        var accessToken = _jwtService.GenerateToken(user, roles, portal);

        // Fresh login → start a new family. Token rotation → inherit the family.
        var resolvedFamilyId   = familyId   ?? Guid.NewGuid().ToString("N");
        var resolvedTokenValue = tokenValue ?? GenerateTokenValue();

        var newRefreshToken = new RefreshToken
        {
            UserId    = user.Id,
            Token     = resolvedTokenValue,
            FamilyId  = resolvedFamilyId,
            ExpiresAt = DateTime.UtcNow.AddDays(_jwtSettings.RefreshTokenExpirationDays),
            CreatedAt = DateTime.UtcNow
        };
        await _context.RefreshTokens.AddAsync(newRefreshToken);
        await _context.SaveChangesAsync();

        return ApiResponse<LoginResponseDto>.Ok(new LoginResponseDto
        {
            Token                = accessToken,
            RefreshToken         = newRefreshToken.Token,
            Expiration           = DateTime.UtcNow.AddSeconds(_jwtSettings.ExpirationSeconds),
            UserId               = user.Id,
            FullName             = user.FullName,
            Email                = user.Email,
            Roles                = roles,
            Portal               = portal,
            AvailablePortals     = availablePortals,
            SecurityAlert        = securityAlertMessage is not null,
            SecurityAlertMessage = securityAlertMessage
        });
    }

    private static string GenerateTokenValue()
        => Guid.NewGuid().ToString("N") + Guid.NewGuid().ToString("N");

    public async Task<ApiResponse<string>> RegisterAsync(RegisterRequestDto request)
    {
        if (await _context.Users.AnyAsync(u => u.Email == request.Email))
            return ApiResponse<string>.Fail("Email already registered.");

        // Password policy — driven by user.passwordPolicy: Basic | Medium | Strong
        var passwordPolicy = await _settings.GetAsync("user.passwordPolicy", "Basic");
        var (minLength, requireUppercase, requireNumber, requireSpecial) = passwordPolicy switch
        {
            "Strong" => (10, true, true, true),
            "Medium" => (8,  true, true, false),
            _        => (6,  false, false, false)  // Basic
        };

        if (request.Password.Length < minLength)
            return ApiResponse<string>.Fail($"Password must be at least {minLength} characters.");
        if (requireUppercase && !request.Password.Any(char.IsUpper))
            return ApiResponse<string>.Fail("Password must contain at least one uppercase letter.");
        if (requireNumber && !request.Password.Any(char.IsDigit))
            return ApiResponse<string>.Fail("Password must contain at least one number.");
        if (requireSpecial && !request.Password.Any(c => !char.IsLetterOrDigit(c)))
            return ApiResponse<string>.Fail("Password must contain at least one special character.");

        var user = new ApplicationUser
        {
            FullName = request.FullName,
            Email = request.Email,
            UserName = request.Email,
            PasswordHash = BCryptHash(request.Password),
            PhoneNumber = request.PhoneNumber
        };

        await _context.Users.AddAsync(user);

        // Assign role
        var roleName = request.RoleName ?? "Customer";
        var role = await _context.Roles.FirstOrDefaultAsync(r => r.Name == roleName);
        if (role != null)
        {
            await _context.UserRoles.AddAsync(new UserRole
            {
                UserId = user.Id,
                RoleId = role.Id
            });
        }

        // Link to agent if one exists with same email but no UserId
        var agent = await _context.Agents.FirstOrDefaultAsync(a => a.Email == request.Email && a.UserId == null);
        if (agent != null)
        {
            agent.UserId = user.Id;
        }

        await _context.SaveChangesAsync();

        return ApiResponse<string>.Ok(user.Id, "Registration successful.");
    }

    public async Task<ApiResponse<List<MenuPrivilegeDto>>> GetPrivilegesAsync(string userId)
    {
        var userRoles = await _context.UserRoles
            .Where(ur => ur.UserId == userId)
            .Select(ur => ur.RoleId)
            .ToListAsync();

        var rolePermissions = await _context.RolePermissions
            .Where(rp => userRoles.Contains(rp.RoleId))
            .Include(rp => rp.Permission)
            .ThenInclude(p => p.Menu)
            .Where(rp => rp.Permission.Menu.IsActive)
            .ToListAsync();

        // Return flat list of menus with their allowed actions
        var menuPermissions = rolePermissions
            .GroupBy(rp => rp.Permission.Menu)
            .Select(g => new MenuPrivilegeDto
            {
                MenuId = g.Key.Id,
                Name = g.Key.Name,
                Icon = g.Key.Icon,
                Url = g.Key.Url,
                DisplayOrder = g.Key.DisplayOrder,
                Actions = g.Select(rp => rp.Permission.ActionName).Distinct().ToList()
            })
            .OrderBy(m => m.DisplayOrder)
            .ToList();

        return ApiResponse<List<MenuPrivilegeDto>>.Ok(menuPermissions);
    }

    // ─── Transaction PIN ───────────────────────────────────────────────────

    public async Task<ApiResponse<string>> SetTransactionPinAsync(string userId, string pin)
    {
        if (string.IsNullOrWhiteSpace(pin) || pin.Length < 4 || pin.Length > 6 || !pin.All(char.IsDigit))
            return ApiResponse<string>.Fail("PIN must be 4-6 digits.");

        var user = await _context.Users.FindAsync(userId);
        if (user == null)
            return ApiResponse<string>.Fail("User not found.");

        user.TransactionPinHash = BCryptHash(pin);
        user.TransactionPinFailedAttempts = 0;
        user.TransactionPinLockedUntil = null;
        user.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return ApiResponse<string>.Ok("OK", "Transaction PIN set successfully.");
    }

    public async Task<ApiResponse<bool>> VerifyTransactionPinAsync(string userId, string pin)
    {
        var user = await _context.Users.FindAsync(userId);
        if (user == null)
            return ApiResponse<bool>.Fail("User not found.");

        if (string.IsNullOrEmpty(user.TransactionPinHash))
            return ApiResponse<bool>.Fail("Transaction PIN not set. Please set your PIN first.");

        // Check if account is locked
        if (user.TransactionPinLockedUntil.HasValue && user.TransactionPinLockedUntil > DateTime.UtcNow)
        {
            var remaining = (user.TransactionPinLockedUntil.Value - DateTime.UtcNow).TotalMinutes;
            return ApiResponse<bool>.Fail($"PIN is locked due to too many failed attempts. Try again in {Math.Ceiling(remaining)} minutes.");
        }

        // Reset lock if expired
        if (user.TransactionPinLockedUntil.HasValue && user.TransactionPinLockedUntil <= DateTime.UtcNow)
        {
            user.TransactionPinFailedAttempts = 0;
            user.TransactionPinLockedUntil = null;
        }

        if (!BCryptVerify(pin, user.TransactionPinHash))
        {
            user.TransactionPinFailedAttempts++;
            if (user.TransactionPinFailedAttempts >= 3)
            {
                user.TransactionPinLockedUntil = DateTime.UtcNow.AddMinutes(15);
                await _context.SaveChangesAsync();
                return ApiResponse<bool>.Fail("Too many failed attempts. PIN locked for 15 minutes.");
            }
            await _context.SaveChangesAsync();
            return ApiResponse<bool>.Fail($"Invalid PIN. {3 - user.TransactionPinFailedAttempts} attempts remaining.");
        }

        // Success — reset failed attempts
        user.TransactionPinFailedAttempts = 0;
        user.TransactionPinLockedUntil = null;
        await _context.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "PIN verified.");
    }

    public async Task<ApiResponse<bool>> HasTransactionPinAsync(string userId)
    {
        var user = await _context.Users.FindAsync(userId);
        if (user == null)
            return ApiResponse<bool>.Fail("User not found.");

        return ApiResponse<bool>.Ok(!string.IsNullOrEmpty(user.TransactionPinHash));
    }

    private static string BCryptHash(string password)
        => BCrypt.Net.BCrypt.HashPassword(password);

    private static bool BCryptVerify(string password, string hash)
        => BCrypt.Net.BCrypt.Verify(password, hash);
}
