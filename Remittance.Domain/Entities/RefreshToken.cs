namespace Remittance.Domain.Entities;

public class RefreshToken
{
    public long Id { get; set; }
    public string UserId { get; set; } = string.Empty;
    public string Token { get; set; } = string.Empty;

    /// <summary>
    /// Identifies the rotation chain this token belongs to.
    /// Assigned once at login and inherited by every subsequent rotation.
    /// When reuse is detected all tokens sharing this FamilyId are revoked.
    /// </summary>
    public string FamilyId { get; set; } = string.Empty;

    /// <summary>
    /// The token value that superseded this one during rotation.
    /// Null on the currently active token. Provides an audit trail.
    /// </summary>
    public string? ReplacedByToken { get; set; }

    /// <summary>
    /// True when this already-revoked token was presented again —
    /// indicates theft or a replay attack.
    /// </summary>
    public bool IsCompromised { get; set; }

    public DateTime ExpiresAt { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public bool IsRevoked { get; set; }

    public ApplicationUser User { get; set; } = null!;
}
