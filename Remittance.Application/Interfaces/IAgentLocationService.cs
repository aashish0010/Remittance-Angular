using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface IAgentLocationService
{
    Task<ApiResponse<List<PaymentMethodDto>>> GetPaymentMethodsAsync();
    Task<ApiResponse<List<AgentLocationDto>>> GetLocationsForAgentAsync(int agentId);
    Task<ApiResponse<AgentLocationDto>> CreateLocationAsync(CreateAgentLocationDto dto);
    Task<ApiResponse<AgentLocationDto>> UpdateLocationAsync(int locationId, UpdateAgentLocationDto dto);
    Task<ApiResponse<bool>> DeleteLocationAsync(int locationId);
    Task<ApiResponse<bool>> ToggleLocationAsync(int locationId);
    Task<ApiResponse<AgentLocationBranchDto>> CreateBranchAsync(CreateBranchDto dto);
    Task<ApiResponse<AgentLocationBranchDto>> UpdateBranchAsync(int branchId, UpdateBranchDto dto);
    Task<ApiResponse<bool>> DeleteBranchAsync(int branchId);
    Task<ApiResponse<AgentLocationUserDto>> CreateUserAsync(CreateAgentLocationUserDto dto);
    Task<ApiResponse<AgentLocationUserDto>> UpdateUserAsync(int userId, UpdateAgentLocationUserDto dto);
    Task<ApiResponse<bool>> DeleteUserAsync(int userId);
}
