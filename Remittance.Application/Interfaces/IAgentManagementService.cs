using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Agent;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface IAgentManagementService
{
    Task<ApiResponse<List<AgentDto>>> GetAllAgentsAsync();
    Task<ApiResponse<AgentDto>> CreateAgentAsync(CreateAgentDto dto);
    Task<ApiResponse<AgentDto>> ApproveAgentAsync(int agentId);
    Task<ApiResponse<AgentDto>> RejectAgentAsync(int agentId);
    Task<ApiResponse<AgentBalanceDto>> GetAgentBalanceAsync(int agentId);
    Task<ApiResponse<AgentDto>> UpdateAgentLimitsAsync(int agentId, decimal newCreditLimit);
    Task<ApiResponse<AgentDto>> UpdateAgentAsync(int agentId, UpdateAgentDto dto);
    Task<ApiResponse<bool>> DeleteAgentAsync(int agentId);
    Task<ApiResponse<AgentDto>> BlockAgentAsync(int agentId);
    Task<ApiResponse<AgentDto>> UnblockAgentAsync(int agentId);
}
