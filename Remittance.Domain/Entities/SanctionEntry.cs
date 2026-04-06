namespace Remittance.Domain.Entities;

public class SanctionEntry
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string EntryType { get; set; } = "Individual"; // Individual, Organization, Vessel, Aircraft
    public string ListSource { get; set; } = "OFAC-SDN"; // OFAC-SDN, UN, EU, Custom
    public string? Aliases { get; set; } // Comma-separated aliases
    public string? Nationality { get; set; }
    public string? Remarks { get; set; }
    public bool IsActive { get; set; } = true;
    public string? AddedBy { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}
