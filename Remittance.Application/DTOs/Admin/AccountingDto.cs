namespace Remittance.Application.DTOs.Admin;

public class AgentAccountingSummaryDto
{
    public int AgentId { get; set; }
    public string BusinessName { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string? Currency { get; set; }
    public string FundingType { get; set; } = string.Empty;
    public decimal BaseCreditLimit { get; set; }
    public decimal EffectiveCreditLimit { get; set; }
    public decimal CurrentBalance { get; set; }
    public decimal AvailableBalance => EffectiveCreditLimit - CurrentBalance;
    public int ActiveAdjustments { get; set; }
    public string Status { get; set; } = string.Empty;
    public string AgentType { get; set; } = string.Empty;
    public string? CommissionMode { get; set; }
    public decimal CommissionValue { get; set; }
}

public class AgentLimitAdjustmentDto
{
    public long Id { get; set; }
    public int AgentId { get; set; }
    public string BusinessName { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public DateTime EffectiveFrom { get; set; }
    public DateTime? EffectiveTo { get; set; }
    public string? Notes { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateAgentLimitAdjustmentDto
{
    public int AgentId { get; set; }
    public decimal Amount { get; set; }
    public int? DurationDays { get; set; }
    public string? Notes { get; set; }
}
