using Remittance.Domain.Interfaces;
using Remittance.Domain.Enums;

namespace Remittance.Domain.Entities;

public class ComplianceRule : ISoftDeletable
{
    public int Id { get; set; }
    public string RuleName { get; set; } = string.Empty;
    public ComplianceRuleType RuleType { get; set; }
    public decimal? ThresholdAmount { get; set; }
    public int? TimePeriodDays { get; set; }
    public int? MaxTransactionCount { get; set; }
    public string? SourceCountry { get; set; }
    public string? DestinationCountry { get; set; }
    public ComplianceAction Action { get; set; } = ComplianceAction.Flag;
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }
}
