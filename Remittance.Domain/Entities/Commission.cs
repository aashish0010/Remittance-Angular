namespace Remittance.Domain.Entities;

public class Commission
{
    public long Id { get; set; }
    public long TransactionId { get; set; }
    public Transaction Transaction { get; set; } = null!;
    public decimal TotalCommission { get; set; }
    public decimal AgentPayout { get; set; }
    public decimal CompanyRevenue { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
