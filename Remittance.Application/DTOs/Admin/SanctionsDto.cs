namespace Remittance.Application.DTOs.Admin;

// Sanction Entry DTOs
public class SanctionEntryDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string EntryType { get; set; } = string.Empty;
    public string ListSource { get; set; } = string.Empty;
    public string? Aliases { get; set; }
    public string? Nationality { get; set; }
    public string? Remarks { get; set; }
    public bool IsActive { get; set; }
    public string? AddedBy { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateSanctionEntryDto
{
    public string Name { get; set; } = string.Empty;
    public string EntryType { get; set; } = "Individual";
    public string ListSource { get; set; } = "Custom";
    public string? Aliases { get; set; }
    public string? Nationality { get; set; }
    public string? Remarks { get; set; }
}

// Sanctioned Country DTOs
public class SanctionedCountryDto
{
    public int Id { get; set; }
    public string CountryCode { get; set; } = string.Empty;
    public string CountryName { get; set; } = string.Empty;
    public string SanctionType { get; set; } = string.Empty;
    public string RiskLevel { get; set; } = string.Empty;
    public string ListSource { get; set; } = string.Empty;
    public string? Remarks { get; set; }
    public bool IsActive { get; set; }
    public string? AddedBy { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateSanctionedCountryDto
{
    public string CountryCode { get; set; } = string.Empty;
    public string CountryName { get; set; } = string.Empty;
    public string SanctionType { get; set; } = "Full";
    public string RiskLevel { get; set; } = "Blocked";
    public string ListSource { get; set; } = "Custom";
    public string? Remarks { get; set; }
}

// Screening Result DTOs for admin review
public class ScreeningResultAdminDto
{
    public long Id { get; set; }
    public string ScreenedName { get; set; } = string.Empty;
    public string ScreenedType { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string? MatchedName { get; set; }
    public string? MatchedListSource { get; set; }
    public double? MatchScore { get; set; }
    public long? TransactionId { get; set; }
    public int? CustomerId { get; set; }
    public string? ReviewedBy { get; set; }
    public DateTime? ReviewedAt { get; set; }
    public string? ReviewNotes { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class ReviewScreeningDto
{
    public string Status { get; set; } = string.Empty; // ConfirmedMatch, FalsePositive
    public string? ReviewNotes { get; set; }
}

// Dashboard/Stats DTO
public class SanctionsDashboardDto
{
    public int TotalSanctionEntries { get; set; }
    public int ActiveSanctionEntries { get; set; }
    public int TotalSanctionedCountries { get; set; }
    public int ActiveSanctionedCountries { get; set; }
    public int TotalScreenings { get; set; }
    public int PotentialMatches { get; set; }
    public int ConfirmedMatches { get; set; }
    public int FalsePositives { get; set; }
    public int PendingReview { get; set; }
}
