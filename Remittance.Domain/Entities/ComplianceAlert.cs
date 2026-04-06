namespace Remittance.Domain.Entities;

public class ComplianceAlert
{
    public long Id { get; set; }
    public long TransactionId { get; set; }
    public Transaction Transaction { get; set; } = null!;
    public string AlertType { get; set; } = string.Empty; // AML, Fraud, Threshold
    public string Description { get; set; } = string.Empty;
    public bool IsResolved { get; set; }
    public string? ResolvedByUserId { get; set; }
    public DateTime? ResolvedAt { get; set; }
    public string? Resolution { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
