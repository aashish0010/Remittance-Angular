using Remittance.Domain.Enums;

namespace Remittance.Domain.Entities;

public class Transaction
{
    public long Id { get; set; }
    public string ReferenceNumber { get; set; } = string.Empty;

    // Sender
    public string SenderName { get; set; } = string.Empty;
    public string SenderPhone { get; set; } = string.Empty;
    public string? SenderEmail { get; set; }
    public string? SenderIdType { get; set; }
    public string? SenderIdNumber { get; set; }
    public string SenderCountry { get; set; } = string.Empty;

    // Receiver
    public string ReceiverName { get; set; } = string.Empty;
    public string ReceiverPhone { get; set; } = string.Empty;
    public string? ReceiverEmail { get; set; }
    public string ReceiverCountry { get; set; } = string.Empty;
    public string? ReceiverBankName { get; set; }
    public string? ReceiverBankCode { get; set; }
    public string? ReceiverAccountNumber { get; set; }
    public string? ReceiverBranchName { get; set; }
    public string? ReceiverBranchCode { get; set; }
    public int? ReceiverBankId { get; set; }
    public int? ReceiverBranchId { get; set; }

    // Amounts
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = string.Empty;
    public decimal ExchangeRateApplied { get; set; }
    public decimal ReceiveAmount { get; set; }
    public string ReceiveCurrency { get; set; } = string.Empty;

    // Commission
    public decimal TotalCommission { get; set; }
    public decimal AgentCommission { get; set; }
    public decimal PayoutAgentCommission { get; set; }
    public decimal CompanyCommission { get; set; }

    // Transaction Info
    public TransactionStatus Status { get; set; } = TransactionStatus.Pending;
    public PaymentMethod PaymentMethod { get; set; }
    public PaymentMethod PayoutMethod { get; set; }
    public string? PaymentMethodName { get; set; }
    public string? PayoutMethodName { get; set; }
    public string? Purpose { get; set; }
    public string? Notes { get; set; }

    // Agent details (denormalized for record-keeping)
    public string? SendingAgentName { get; set; }
    public string? PayoutAgentName { get; set; }

    // Relationships
    public int? AgentId { get; set; }
    public Agent? Agent { get; set; }

    public int? PayoutAgentId { get; set; }
    public Agent? PayoutAgent { get; set; }
    public int? CustomerId { get; set; }
    public Customer? Customer { get; set; }
    public int? ReceiverId { get; set; }
    public Receiver? Receiver { get; set; }
    public string? ApprovedByUserId { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
    public DateTime? CompletedAt { get; set; }
}
