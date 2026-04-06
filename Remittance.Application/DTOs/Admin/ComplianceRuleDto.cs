namespace Remittance.Application.DTOs.Admin;

public class ComplianceRuleDto
{
    public int Id { get; set; }
    public string RuleName { get; set; } = string.Empty;
    public string RuleType { get; set; } = string.Empty;
    public decimal? ThresholdAmount { get; set; }
    public int? TimePeriodDays { get; set; }
    public int? MaxTransactionCount { get; set; }
    public string? SourceCountry { get; set; }
    public string? DestinationCountry { get; set; }
    public string Action { get; set; } = string.Empty;
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateComplianceRuleDto
{
    public string RuleName { get; set; } = string.Empty;
    public string RuleType { get; set; } = "AmountThreshold";
    public decimal? ThresholdAmount { get; set; }
    public int? TimePeriodDays { get; set; }
    public int? MaxTransactionCount { get; set; }
    public string? SourceCountry { get; set; }
    public string? DestinationCountry { get; set; }
    public string Action { get; set; } = "Flag";
    public bool IsActive { get; set; } = true;
}

/// <summary>
/// Request object for pre-send compliance checking.
/// </summary>
public class ComplianceCheckRequest
{
    public decimal SendAmount { get; set; }
    public string SenderCountry { get; set; } = string.Empty;
    public string ReceiverCountry { get; set; } = string.Empty;
    public string SenderName { get; set; } = string.Empty;
    public string ReceiverName { get; set; } = string.Empty;
    public string SendCurrency { get; set; } = string.Empty;
    public int? CustomerId { get; set; }
    public int? AgentId { get; set; }
}

/// <summary>
/// Describes a single compliance violation found during pre-send check.
/// </summary>
public class ComplianceViolationDto
{
    public string RuleName { get; set; } = string.Empty;
    public string RuleType { get; set; } = string.Empty;
    public string Action { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}
