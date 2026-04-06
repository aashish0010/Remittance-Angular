namespace Remittance.Application.DTOs.Admin;

public class ExchangeRateDto
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public string AgentName { get; set; } = string.Empty;
    public string? Country { get; set; }
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public decimal Rate { get; set; }
    public decimal? Margin { get; set; }
    public DateTime EffectiveFrom { get; set; }
    public DateTime? EffectiveTo { get; set; }
    public bool IsActive { get; set; }
}

public class CreateExchangeRateDto
{
    public int AgentId { get; set; }
    public string? Country { get; set; }
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public decimal Rate { get; set; }
    public decimal? Margin { get; set; }
}

/// <summary>
/// Represents a locked exchange rate quote with a time window.
/// The customer sees this rate and it's guaranteed for the duration.
/// </summary>
public class ExchangeRateQuoteDto
{
    public string QuoteId { get; set; } = string.Empty;
    public decimal Rate { get; set; }
    public decimal Margin { get; set; }
    public decimal EffectiveRate { get; set; }
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public DateTime ExpiresAt { get; set; }
    public int ExchangeRateId { get; set; }
}
