namespace Remittance.Application.DTOs.Agent;

public class TransactionResultDto
{
    public long Id { get; set; }
    public string ReferenceNumber { get; set; } = string.Empty;
    public string SenderName { get; set; } = string.Empty;
    public string? SenderCountry { get; set; }
    public string ReceiverName { get; set; } = string.Empty;
    public string ReceiverCountry { get; set; } = string.Empty;
    public string? ReceiverBankName { get; set; }
    public string? ReceiverBankCode { get; set; }
    public string? ReceiverAccountNumber { get; set; }
    public string? ReceiverBranchName { get; set; }
    public string? ReceiverBranchCode { get; set; }
    public int? ReceiverBankId { get; set; }
    public int? ReceiverBranchId { get; set; }
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = string.Empty;
    public decimal ReceiveAmount { get; set; }
    public string ReceiveCurrency { get; set; } = string.Empty;
    public decimal ExchangeRateApplied { get; set; }
    public decimal TotalCommission { get; set; }
    public decimal AgentCommission { get; set; }
    public decimal PayoutAgentCommission { get; set; }
    public decimal CompanyCommission { get; set; }
    public string Status { get; set; } = string.Empty;
    public int PaymentMethod { get; set; }
    public int PayoutMethod { get; set; }
    public string? PaymentMethodName { get; set; }
    public string? PayoutMethodName { get; set; }
    public string? SendingAgentName { get; set; }
    public string? PayoutAgentName { get; set; }
    public string? Purpose { get; set; }
    public string? Notes { get; set; }
    public string? SenderPhone { get; set; }
    public string? SenderEmail { get; set; }
    public string? SenderIdType { get; set; }
    public string? SenderIdNumber { get; set; }
    public string? ReceiverPhone { get; set; }
    public string? ReceiverEmail { get; set; }
    public int? CustomerId { get; set; }
    public int? ReceiverId { get; set; }
    public int? AgentId { get; set; }
    public int? PayoutAgentId { get; set; }
    public string? ApprovedByUserId { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public DateTime? CompletedAt { get; set; }
}
