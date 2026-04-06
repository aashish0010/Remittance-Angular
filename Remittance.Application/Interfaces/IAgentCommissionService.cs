using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface IAgentCommissionService
{
    Task<ApiResponse<AgentCommissionDto>> GetByAgentIdAsync(int agentId);
    Task<ApiResponse<AgentCommissionDto>> CreateOrUpdateAsync(CreateAgentCommissionDto dto);
    Task<ApiResponse<bool>> DeleteAsync(int agentId);
}
