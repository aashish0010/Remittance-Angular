namespace Remittance.Domain.Entities;

public class AgentLimitAdjustment
{
    public long Id { get; set; }
    public int AgentId { get; set; }
    public Agent Agent { get; set; } = null!;
    public decimal Amount { get; set; }
    public DateTime EffectiveFrom { get; set; } = DateTime.UtcNow;
    public DateTime? EffectiveTo { get; set; }
    public string? Notes { get; set; }
    public string CreatedByUserId { get; set; } = string.Empty;
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
