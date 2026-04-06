using Remittance.Domain.Interfaces;
namespace Remittance.Domain.Entities;

public class CorridorPayoutPartner : ISoftDeletable
{
    public int Id { get; set; }
    public int PaymentCorridorId { get; set; }
    public PaymentCorridor PaymentCorridor { get; set; } = null!;
    public int PayoutAgentId { get; set; }
    public Agent PayoutAgent { get; set; } = null!;
    public string PaymentModeIds { get; set; } = string.Empty;
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }
}
