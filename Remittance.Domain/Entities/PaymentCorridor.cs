using Remittance.Domain.Interfaces;
namespace Remittance.Domain.Entities;

public class PaymentCorridor : ISoftDeletable
{
    public int Id { get; set; }
    public int? SendingAgentId { get; set; }
    public Agent? SendingAgent { get; set; }
    public string SourceCountry { get; set; } = string.Empty;
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCountry { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    public ICollection<CorridorPayoutPartner> PayoutPartners { get; set; } = new List<CorridorPayoutPartner>();
}
