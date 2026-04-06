using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface IPaymentCorridorService
{
    Task<ApiResponse<List<PaymentCorridorDto>>> GetAllCorridorsAsync();
    Task<ApiResponse<PaymentCorridorDto>> CreateCorridorAsync(CreatePaymentCorridorDto dto);
    Task<ApiResponse<PaymentCorridorDto>> UpdateCorridorAsync(int id, CreatePaymentCorridorDto dto);
    Task<ApiResponse<bool>> DeleteCorridorAsync(int id);
    Task<ApiResponse<bool>> ToggleCorridorAsync(int id);

    Task<ApiResponse<CorridorPayoutPartnerDto>> AddPayoutPartnerAsync(CreateCorridorPayoutPartnerDto dto);
    Task<ApiResponse<CorridorPayoutPartnerDto>> UpdatePayoutPartnerAsync(int id, CreateCorridorPayoutPartnerDto dto);
    Task<ApiResponse<bool>> RemovePayoutPartnerAsync(int id);
    Task<ApiResponse<bool>> TogglePayoutPartnerAsync(int id);
}
