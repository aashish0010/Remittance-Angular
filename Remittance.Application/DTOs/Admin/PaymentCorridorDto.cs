namespace Remittance.Application.DTOs.Admin;

public class PaymentCorridorDto
{
    public int Id { get; set; }
    public int? SendingAgentId { get; set; }
    public string? SendingAgentName { get; set; }
    public string SourceCountry { get; set; } = string.Empty;
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCountry { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<CorridorPayoutPartnerDto> PayoutPartners { get; set; } = new();
}

public class CorridorPayoutPartnerDto
{
    public int Id { get; set; }
    public int PaymentCorridorId { get; set; }
    public int PayoutAgentId { get; set; }
    public string PayoutAgentName { get; set; } = string.Empty;
    public List<int> PaymentModeIds { get; set; } = new();
    public List<string> PaymentModeNames { get; set; } = new();
    public bool IsActive { get; set; }
}

public class CreatePaymentCorridorDto
{
    public int? SendingAgentId { get; set; }
    public string SourceCountry { get; set; } = string.Empty;
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCountry { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
}

public class CreateCorridorPayoutPartnerDto
{
    public int PaymentCorridorId { get; set; }
    public int PayoutAgentId { get; set; }
    public List<int> PaymentModeIds { get; set; } = new();
}
