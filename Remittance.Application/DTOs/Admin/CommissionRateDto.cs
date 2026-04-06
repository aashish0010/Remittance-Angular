namespace Remittance.Application.DTOs.Admin;

public class CommissionRateDto
{
    public int Id { get; set; }
    public int? AgentId { get; set; }
    public string? AgentName { get; set; }
    public int PayoutAgentId { get; set; }
    public string PayoutAgentName { get; set; } = string.Empty;
    public string? SourceCountry { get; set; }
    public string? DestinationCountry { get; set; }
    public string? PaymentMethod { get; set; }
    public string? SourceCurrency { get; set; }
    public string? DestinationCurrency { get; set; }
    public decimal MinAmount { get; set; }
    public decimal MaxAmount { get; set; }
    public decimal CommissionPercent { get; set; }
    public decimal? FlatFee { get; set; }
    public bool IsActive { get; set; }
}

public class CreateCommissionRateDto
{
    public int? AgentId { get; set; }
    public int PayoutAgentId { get; set; }
    public string? SourceCountry { get; set; }
    public string? DestinationCountry { get; set; }
    public string? PaymentMethod { get; set; }
    public string? SourceCurrency { get; set; }
    public string? DestinationCurrency { get; set; }
    public decimal MinAmount { get; set; }
    public decimal MaxAmount { get; set; }
    public decimal CommissionPercent { get; set; }
    public decimal? FlatFee { get; set; }
}
