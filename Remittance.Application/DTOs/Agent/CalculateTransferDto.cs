using Remittance.Application.DTOs.Admin;

namespace Remittance.Application.DTOs.Agent;

public class CalculateTransferDto
{
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = string.Empty;
    public string ReceiveCurrency { get; set; } = string.Empty;
    public string SenderCountry { get; set; } = string.Empty;
    public string ReceiverCountry { get; set; } = string.Empty;
    public int? PaymentMethodId { get; set; }
    public string? PaymentMethodName { get; set; }
    public int? PayoutPartnerId { get; set; }
    public int? SendingAgentId { get; set; }
    public string? SenderName { get; set; }
    public string? ReceiverName { get; set; }
    public int? CustomerId { get; set; }
}

public class TransferCalculationResultDto
{
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = string.Empty;
    public decimal ReceiveAmount { get; set; }
    public string ReceiveCurrency { get; set; } = string.Empty;
    public decimal ExchangeRate { get; set; }
    public decimal ServiceCharge { get; set; }
    public decimal TotalPayable { get; set; }
    public decimal? AgentAvailableBalance { get; set; }
    public string? BalanceWarning { get; set; }
    public List<ComplianceViolationDto> ComplianceViolations { get; set; } = new();
}

public class CreateQuoteRequest
{
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public int PayoutPartnerId { get; set; }
    public string? Country { get; set; }
}
