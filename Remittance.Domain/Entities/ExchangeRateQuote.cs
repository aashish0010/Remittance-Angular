namespace Remittance.Domain.Entities;

/// <summary>
/// Locks an exchange rate for a time window so the customer gets the rate they agreed to.
/// </summary>
public class ExchangeRateQuote
{
    public long Id { get; set; }
    public string QuoteId { get; set; } = string.Empty;
    public int ExchangeRateId { get; set; }
    public ExchangeRate ExchangeRate { get; set; } = null!;
    public decimal LockedRate { get; set; }
    public decimal LockedMargin { get; set; }
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime ExpiresAt { get; set; }
    public bool IsUsed { get; set; }
    public long? TransactionId { get; set; }
}
