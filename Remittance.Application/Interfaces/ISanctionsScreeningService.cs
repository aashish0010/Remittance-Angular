using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public class ScreeningResultDto
{
    public bool IsMatch { get; set; }
    public string ScreenedName { get; set; } = string.Empty;
    public string? MatchedName { get; set; }
    public string? ListSource { get; set; }
    public double MatchScore { get; set; }
    public string Status { get; set; } = "Clear";
    public string? BlockReason { get; set; } // "Name Match" or "Sanctioned Country"
    public string? RiskLevel { get; set; } // Blocked, High, Medium, Low (for country-based results)
    public bool RequiresReview { get; set; } // True for High-risk country transactions
}

public interface ISanctionsScreeningService
{
    // Screening
    Task<ApiResponse<ScreeningResultDto>> ScreenNameAsync(string name, string screenedType, long? transactionId = null, int? customerId = null);
    Task<ApiResponse<List<ScreeningResultDto>>> ScreenTransactionAsync(string senderName, string receiverName, string? senderCountry = null, string? receiverCountry = null, long? transactionId = null, int? customerId = null);
    Task<ApiResponse<bool>> IsCountrySanctionedAsync(string countryCode);

    // Sanction Entry CRUD
    Task<ApiResponse<List<SanctionEntryDto>>> GetAllSanctionEntriesAsync();
    Task<ApiResponse<SanctionEntryDto>> GetSanctionEntryByIdAsync(int id);
    Task<ApiResponse<SanctionEntryDto>> CreateSanctionEntryAsync(CreateSanctionEntryDto dto, string userId);
    Task<ApiResponse<SanctionEntryDto>> UpdateSanctionEntryAsync(int id, CreateSanctionEntryDto dto);
    Task<ApiResponse<bool>> DeleteSanctionEntryAsync(int id);
    Task<ApiResponse<bool>> ToggleSanctionEntryAsync(int id);

    // Sanctioned Country CRUD
    Task<ApiResponse<List<SanctionedCountryDto>>> GetAllSanctionedCountriesAsync();
    Task<ApiResponse<SanctionedCountryDto>> CreateSanctionedCountryAsync(CreateSanctionedCountryDto dto, string userId);
    Task<ApiResponse<SanctionedCountryDto>> UpdateSanctionedCountryAsync(int id, CreateSanctionedCountryDto dto);
    Task<ApiResponse<bool>> DeleteSanctionedCountryAsync(int id);
    Task<ApiResponse<bool>> ToggleSanctionedCountryAsync(int id);

    // Screening Results Review
    Task<ApiResponse<List<ScreeningResultAdminDto>>> GetScreeningResultsAsync();
    Task<ApiResponse<ScreeningResultAdminDto>> ReviewScreeningResultAsync(long id, ReviewScreeningDto dto, string userId);

    // Dashboard
    Task<ApiResponse<SanctionsDashboardDto>> GetDashboardAsync();

    // Refresh in-memory list from DB
    Task RefreshSanctionsListAsync();
}
