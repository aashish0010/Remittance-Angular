namespace Remittance.Domain.Entities;

public class SanctionedCountry
{
    public int Id { get; set; }
    public string CountryCode { get; set; } = string.Empty; // ISO 3166-1 alpha-2 (e.g., "KP", "IR")
    public string CountryName { get; set; } = string.Empty;
    public string SanctionType { get; set; } = "Full"; // Full, Partial
    public string RiskLevel { get; set; } = "Blocked"; // Blocked, High, Medium, Low
    public string ListSource { get; set; } = "OFAC"; // OFAC, UN, EU, Custom
    public string? Remarks { get; set; }
    public bool IsActive { get; set; } = true;
    public string? AddedBy { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}
