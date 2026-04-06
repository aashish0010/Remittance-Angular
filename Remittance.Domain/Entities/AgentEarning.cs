namespace Remittance.Domain.Entities;

public class AgentEarning
{
    public long Id { get; set; }
    public int AgentId { get; set; }
    public Agent? Agent { get; set; }
    public long TransactionId { get; set; }
    public Transaction? Transaction { get; set; }
    public string EarningType { get; set; } = string.Empty; // "SendingCommission", "PayoutCommission"
    public decimal Amount { get; set; }
    public bool IsReversed { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? ReversedAt { get; set; }
}
