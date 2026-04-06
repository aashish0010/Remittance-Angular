using Remittance.Domain.Enums;

namespace Remittance.Application.DTOs.Agent;

public class SendTransactionDto
{
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

    // Amount
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = string.Empty;
    public string ReceiveCurrency { get; set; } = string.Empty;

    // Method & Routing
    public PaymentMethod PaymentMethod { get; set; }
    public PaymentMethod PayoutMethod { get; set; }
    public string? PaymentMethodName { get; set; }
    public string? PayoutMethodName { get; set; }
    public int? PayoutPartnerId { get; set; }
    public int? CustomerId { get; set; }
    public int? ReceiverId { get; set; }
    public string? Purpose { get; set; }
    public string? SourceOfFunds { get; set; }
    public string? Notes { get; set; }

    /// <summary>
    /// Optional: locked exchange rate quote ID. If provided, the transaction uses the locked rate.
    /// If not provided, the current live rate is used (backward compatible).
    /// </summary>
    public string? QuoteId { get; set; }
}
