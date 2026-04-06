using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface IAgentBankService
{
    Task<ApiResponse<List<AgentBankDto>>> GetBanksForAgentAsync(int agentId);
    Task<ApiResponse<AgentBankDto>> CreateBankAsync(CreateAgentBankDto dto);
    Task<ApiResponse<AgentBankDto>> UpdateBankAsync(int bankId, UpdateAgentBankDto dto);
    Task<ApiResponse<bool>> DeleteBankAsync(int bankId);
    Task<ApiResponse<bool>> ToggleBankAsync(int bankId);
    Task<ApiResponse<AgentBankBranchDto>> CreateBranchAsync(CreateAgentBankBranchDto dto);
    Task<ApiResponse<AgentBankBranchDto>> UpdateBranchAsync(int branchId, UpdateAgentBankBranchDto dto);
    Task<ApiResponse<bool>> DeleteBranchAsync(int branchId);
}
