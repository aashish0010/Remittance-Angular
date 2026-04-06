using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class AgentCommissionService : IAgentCommissionService
{
    private readonly IRepository<AgentCommission> _repo;
    private readonly IRepository<Agent> _agentRepo;
    private readonly IUnitOfWork _unitOfWork;

    public AgentCommissionService(IRepository<AgentCommission> repo, IRepository<Agent> agentRepo, IUnitOfWork unitOfWork)
    {
        _repo = repo;
        _agentRepo = agentRepo;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResponse<AgentCommissionDto>> GetByAgentIdAsync(int agentId)
    {
        var items = await _repo.FindAsync(c => c.AgentId == agentId && c.IsActive);
        var commission = items.FirstOrDefault();
        if (commission == null)
            return ApiResponse<AgentCommissionDto>.Fail("No commission configured for this agent.");

        var agent = await _agentRepo.GetByIdAsync(agentId);
        return ApiResponse<AgentCommissionDto>.Ok(new AgentCommissionDto
        {
            Id = commission.Id,
            AgentId = commission.AgentId,
            AgentName = agent?.BusinessName ?? "Unknown",
            CommissionType = commission.CommissionType,
            CommissionValue = commission.CommissionValue,
            IsActive = commission.IsActive
        });
    }

    public async Task<ApiResponse<AgentCommissionDto>> CreateOrUpdateAsync(CreateAgentCommissionDto dto)
    {
        var agent = await _agentRepo.GetByIdAsync(dto.AgentId);
        if (agent == null)
            return ApiResponse<AgentCommissionDto>.Fail("Agent not found.");

        if (dto.CommissionType != "Percentage" && dto.CommissionType != "Flat")
            return ApiResponse<AgentCommissionDto>.Fail("Commission type must be 'Percentage' or 'Flat'.");

        if (dto.CommissionValue <= 0)
            return ApiResponse<AgentCommissionDto>.Fail("Commission value must be greater than zero.");

        if (dto.CommissionType == "Percentage" && dto.CommissionValue > 100)
            return ApiResponse<AgentCommissionDto>.Fail("Percentage cannot exceed 100.");

        // Check if agent already has a commission — update it
        var existing = (await _repo.FindAsync(c => c.AgentId == dto.AgentId && c.IsActive)).FirstOrDefault();
        if (existing != null)
        {
            existing.CommissionType = dto.CommissionType;
            existing.CommissionValue = dto.CommissionValue;
            existing.UpdatedAt = DateTime.UtcNow;
            await _repo.UpdateAsync(existing);
            await _unitOfWork.SaveChangesAsync();

            return ApiResponse<AgentCommissionDto>.Ok(new AgentCommissionDto
            {
                Id = existing.Id,
                AgentId = existing.AgentId,
                AgentName = agent.BusinessName,
                CommissionType = existing.CommissionType,
                CommissionValue = existing.CommissionValue,
                IsActive = existing.IsActive
            }, "Agent commission updated.");
        }

        // Create new
        var entity = new AgentCommission
        {
            AgentId = dto.AgentId,
            CommissionType = dto.CommissionType,
            CommissionValue = dto.CommissionValue
        };

        await _repo.AddAsync(entity);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentCommissionDto>.Ok(new AgentCommissionDto
        {
            Id = entity.Id,
            AgentId = entity.AgentId,
            AgentName = agent.BusinessName,
            CommissionType = entity.CommissionType,
            CommissionValue = entity.CommissionValue,
            IsActive = entity.IsActive
        }, "Agent commission created.");
    }

    public async Task<ApiResponse<bool>> DeleteAsync(int agentId)
    {
        var items = await _repo.FindAsync(c => c.AgentId == agentId && c.IsActive);
        var commission = items.FirstOrDefault();
        if (commission == null)
            return ApiResponse<bool>.Fail("No commission found for this agent.");

        await _repo.DeleteAsync(commission);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Agent commission removed.");
    }
}
