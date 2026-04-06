using Remittance.Domain.Enums;

namespace Remittance.Domain.Entities;

public class SanctionsScreeningResult
{
    public long Id { get; set; }
    public string ScreenedName { get; set; } = string.Empty;
    public string ScreenedType { get; set; } = string.Empty; // Sender, Receiver
    public ScreeningStatus Status { get; set; } = ScreeningStatus.Clear;
    public string? MatchedName { get; set; }
    public string? MatchedListSource { get; set; } // OFAC-SDN, UN, EU, etc.
    public double? MatchScore { get; set; }
    public long? TransactionId { get; set; }
    public int? CustomerId { get; set; }
    public string? ReviewedBy { get; set; }
    public DateTime? ReviewedAt { get; set; }
    public string? ReviewNotes { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
