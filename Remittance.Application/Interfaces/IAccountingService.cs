using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface IAccountingService
{
    Task<ApiResponse<List<AgentAccountingSummaryDto>>> GetAgentAccountingSummariesAsync();
    Task<ApiResponse<List<AgentLimitAdjustmentDto>>> GetAdjustmentsForAgentAsync(int agentId);
    Task<ApiResponse<AgentLimitAdjustmentDto>> CreateAdjustmentAsync(CreateAgentLimitAdjustmentDto dto, string createdByUserId);
    Task<ApiResponse<bool>> DeactivateAdjustmentAsync(long adjustmentId);
}
