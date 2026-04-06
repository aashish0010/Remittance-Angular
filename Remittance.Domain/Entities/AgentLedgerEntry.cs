namespace Remittance.Domain.Entities;

public class AgentLedgerEntry
{
    public long Id { get; set; }
    public int AgentId { get; set; }
    public Agent? Agent { get; set; }
    public long? TransactionId { get; set; }
    public Transaction? Transaction { get; set; }
    public string EntryType { get; set; } = string.Empty; // "Credit", "Debit", "TransactionDebit", "CancelRefund", "CommissionPayout"
    public decimal Amount { get; set; }
    public decimal BalanceAfter { get; set; }
    public string? Description { get; set; }
    public string? CreatedByUserId { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
