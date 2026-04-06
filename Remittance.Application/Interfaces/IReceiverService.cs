using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface IReceiverService
{
    Task<ApiResponse<List<ReceiverDto>>> GetAllReceiversAsync();
    Task<ApiResponse<List<ReceiverDto>>> GetReceiversByCustomerAsync(int customerId);
    Task<ApiResponse<ReceiverDto>> CreateReceiverAsync(CreateReceiverDto dto);
    Task<ApiResponse<ReceiverDto>> UpdateReceiverAsync(int id, CreateReceiverDto dto);
    Task<ApiResponse<bool>> DeleteReceiverAsync(int id);
    Task<ApiResponse<ReceiverDto>> ToggleReceiverStatusAsync(int id);
}
