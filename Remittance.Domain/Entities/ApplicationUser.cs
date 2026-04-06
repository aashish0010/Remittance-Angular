namespace Remittance.Domain.Entities;

public class ApplicationUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string UserName { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Login lockout tracking — driven by auth.maxLoginAttempts + auth.lockoutDurationMinutes settings
    public int FailedLoginAttempts { get; set; }
    public DateTime? LockoutEnd { get; set; }

    // Transaction PIN — separate from login password, required to authorize money movement
    public string? TransactionPinHash { get; set; }
    public int TransactionPinFailedAttempts { get; set; }
    public DateTime? TransactionPinLockedUntil { get; set; }

    // Suspicious activity — set when refresh token reuse is detected (possible token theft).
    // Cleared automatically on the next successful login after warning the user.
    public bool IsSuspiciousActivity { get; set; }
    public DateTime? SuspiciousActivityAt { get; set; }

    public ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
}
