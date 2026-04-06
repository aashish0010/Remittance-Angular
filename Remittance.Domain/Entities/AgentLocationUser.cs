using Remittance.Domain.Interfaces;
namespace Remittance.Domain.Entities;

public class AgentLocationUser : ISoftDeletable
{
    public int Id { get; set; }
    public int AgentLocationId { get; set; }
    public AgentLocation AgentLocation { get; set; } = null!;
    public string? UserId { get; set; }
    public ApplicationUser? User { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? UserName { get; set; }
    public string? PasswordHash { get; set; }
    public string? Phone { get; set; }
    public string? Role { get; set; }
    public bool IsDefault { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }
}
