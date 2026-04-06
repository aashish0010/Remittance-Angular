using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface ICommissionService
{
    Task<ApiResponse<List<CommissionRateDto>>> GetAllRatesAsync();
    Task<ApiResponse<CommissionRateDto>> CreateRateAsync(CreateCommissionRateDto dto);
    Task<ApiResponse<CommissionRateDto>> UpdateRateAsync(int id, CreateCommissionRateDto dto);
    Task<ApiResponse<bool>> DeleteRateAsync(int id);
    Task<decimal> CalculateCommissionAsync(
        decimal sendAmount,
        string? sourceCountry,
        string? destinationCountry,
        string? sourceCurrency = null,
        string? destinationCurrency = null,
        string? paymentMethod = null,
        int? sendingAgentId = null,
        int? payoutAgentId = null);
}
