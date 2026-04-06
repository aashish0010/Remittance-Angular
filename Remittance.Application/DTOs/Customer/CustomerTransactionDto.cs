namespace Remittance.Application.DTOs.Customer;

public class CustomerTransactionDto
{
    public long Id { get; set; }
    public string ReferenceNumber { get; set; } = string.Empty;
    public string ReceiverName { get; set; } = string.Empty;
    public string ReceiverCountry { get; set; } = string.Empty;
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = string.Empty;
    public decimal ReceiveAmount { get; set; }
    public string ReceiveCurrency { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}
