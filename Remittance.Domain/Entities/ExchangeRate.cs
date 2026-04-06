using Remittance.Domain.Interfaces;
namespace Remittance.Domain.Entities;

public class ExchangeRate : ISoftDeletable
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public Agent Agent { get; set; } = null!;
    public string? Country { get; set; }
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public decimal Rate { get; set; }
    public decimal? Margin { get; set; }
   // public DateTime EffectiveFrom { get; set; }
   // public DateTime? EffectiveTo { get; set; }
    public string? CreatedByUserId { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }
}
