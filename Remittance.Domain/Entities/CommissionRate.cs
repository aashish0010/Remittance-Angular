using Remittance.Domain.Interfaces;
namespace Remittance.Domain.Entities;

public class CommissionRate : ISoftDeletable
{
    public int Id { get; set; }
    public int? AgentId { get; set; }
    public Agent? Agent { get; set; }
    public int PayoutAgentId { get; set; }
    public Agent PayoutAgent { get; set; } = null!;
    public string? SourceCountry { get; set; }
    public string? DestinationCountry { get; set; }
    public string? PaymentMethod { get; set; }
    public string? SourceCurrency { get; set; }
    public string? DestinationCurrency { get; set; }
    public decimal MinAmount { get; set; }
    public decimal MaxAmount { get; set; }
    public decimal CommissionPercent { get; set; }
    public decimal? FlatFee { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }
}
