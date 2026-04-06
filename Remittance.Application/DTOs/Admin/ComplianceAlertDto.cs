namespace Remittance.Application.DTOs.Admin;

public class ComplianceAlertDto
{
    public long Id { get; set; }
    public long TransactionId { get; set; }
    public string ReferenceNumber { get; set; } = string.Empty;
    public string AlertType { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool IsResolved { get; set; }
    public string? Resolution { get; set; }
    public string? ResolvedByUserId { get; set; }
    public DateTime? ResolvedAt { get; set; }
    public DateTime CreatedAt { get; set; }
    // Transaction details
    public string SenderName { get; set; } = string.Empty;
    public string? SenderCountry { get; set; }
    public string ReceiverName { get; set; } = string.Empty;
    public string? ReceiverCountry { get; set; }
    public string? ReceiverBankName { get; set; }
    public string? ReceiverAccountNumber { get; set; }
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = string.Empty;
    public decimal ReceiveAmount { get; set; }
    public string ReceiveCurrency { get; set; } = string.Empty;
    public decimal ExchangeRateApplied { get; set; }
    public decimal TotalCommission { get; set; }
    public string? PaymentMethodName { get; set; }
    public string? PayoutMethodName { get; set; }
    public string? SendingAgentName { get; set; }
    public string? PayoutAgentName { get; set; }
    public string TransactionStatus { get; set; } = string.Empty;
}
