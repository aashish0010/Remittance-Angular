using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface ICustomerManagementService
{
    Task<ApiResponse<List<CustomerDto>>> GetAllCustomersAsync();
    Task<ApiResponse<CustomerDto>> GetCustomerByIdAsync(int id);
    Task<ApiResponse<CustomerDto>> CreateCustomerAsync(CreateCustomerDto dto);
    Task<ApiResponse<CustomerDto>> UpdateCustomerAsync(int id, CreateCustomerDto dto);
    Task<ApiResponse<CustomerDto>> ApproveKycAsync(int customerId);
    Task<ApiResponse<CustomerDto>> RejectKycAsync(int customerId);
    Task<ApiResponse<CustomerDto>> SetKycLevelAsync(int customerId, string kycLevel, string approvedByUserId);
    Task<ApiResponse<bool>> DeleteCustomerAsync(int id);
    Task<ApiResponse<CustomerDto>> ToggleCustomerStatusAsync(int id);
}
