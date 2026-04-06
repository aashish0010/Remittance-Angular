using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class AccountingService : IAccountingService
{
    private readonly IRepository<Agent> _agentRepo;
    private readonly IRepository<AgentLimitAdjustment> _adjustmentRepo;
    private readonly IRepository<AgentCommission> _agentCommissionRepo;
    private readonly IUnitOfWork _unitOfWork;

    public AccountingService(
        IRepository<Agent> agentRepo,
        IRepository<AgentLimitAdjustment> adjustmentRepo,
        IRepository<AgentCommission> agentCommissionRepo,
        IUnitOfWork unitOfWork)
    {
        _agentRepo = agentRepo;
        _adjustmentRepo = adjustmentRepo;
        _agentCommissionRepo = agentCommissionRepo;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResponse<List<AgentAccountingSummaryDto>>> GetAgentAccountingSummariesAsync()
    {
        var agents = await _agentRepo.GetAllAsync();
        var summaries = new List<AgentAccountingSummaryDto>();

        foreach (var agent in agents)
        {
            var adjustments = await _adjustmentRepo.FindAsync(a =>
                a.AgentId == agent.Id && a.IsActive &&
                a.EffectiveFrom <= DateTime.UtcNow &&
                (a.EffectiveTo == null || a.EffectiveTo > DateTime.UtcNow));

            var activeAdj = adjustments.ToList();
            var totalAdjustment = activeAdj.Sum(a => a.Amount);

            // Look up agent commission from AgentCommission table
            var agentCommissions = await _agentCommissionRepo.FindAsync(c => c.AgentId == agent.Id && c.IsActive);
            var agentComm = agentCommissions.FirstOrDefault();
            string? commMode = agentComm?.CommissionType;
            decimal commValue = agentComm?.CommissionValue ?? 0;

            summaries.Add(new AgentAccountingSummaryDto
            {
                AgentId = agent.Id,
                BusinessName = agent.BusinessName,
                Country = agent.Country,
                Currency = agent.Currency,
                FundingType = agent.FundingType.ToString(),
                BaseCreditLimit = agent.CreditLimit,
                EffectiveCreditLimit = agent.CreditLimit + totalAdjustment,
                CurrentBalance = agent.CurrentBalance,
                ActiveAdjustments = activeAdj.Count,
                Status = agent.Status.ToString(),
                AgentType = agent.AgentType.ToString(),
                CommissionMode = commMode,
                CommissionValue = commValue
            });
        }

        return ApiResponse<List<AgentAccountingSummaryDto>>.Ok(summaries);
    }

    public async Task<ApiResponse<List<AgentLimitAdjustmentDto>>> GetAdjustmentsForAgentAsync(int agentId)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<List<AgentLimitAdjustmentDto>>.Fail("Agent not found.");

        var adjustments = await _adjustmentRepo.FindAsync(a => a.AgentId == agentId);
        var dtos = adjustments.OrderByDescending(a => a.CreatedAt).Select(a => new AgentLimitAdjustmentDto
        {
            Id = a.Id,
            AgentId = a.AgentId,
            BusinessName = agent.BusinessName,
            Amount = a.Amount,
            EffectiveFrom = a.EffectiveFrom,
            EffectiveTo = a.EffectiveTo,
            Notes = a.Notes,
            IsActive = a.IsActive && a.EffectiveFrom <= DateTime.UtcNow && (a.EffectiveTo == null || a.EffectiveTo > DateTime.UtcNow),
            CreatedAt = a.CreatedAt
        }).ToList();

        return ApiResponse<List<AgentLimitAdjustmentDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<AgentLimitAdjustmentDto>> CreateAdjustmentAsync(CreateAgentLimitAdjustmentDto dto, string createdByUserId)
    {
        var agent = await _agentRepo.GetByIdAsync(dto.AgentId);
        if (agent == null)
            return ApiResponse<AgentLimitAdjustmentDto>.Fail("Agent not found.");

        var adjustment = new AgentLimitAdjustment
        {
            AgentId = dto.AgentId,
            Amount = dto.Amount,
            EffectiveFrom = DateTime.UtcNow,
            EffectiveTo = dto.DurationDays.HasValue ? DateTime.UtcNow.AddDays(dto.DurationDays.Value) : null,
            Notes = dto.Notes,
            CreatedByUserId = createdByUserId,
            IsActive = true
        };

        await _adjustmentRepo.AddAsync(adjustment);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentLimitAdjustmentDto>.Ok(new AgentLimitAdjustmentDto
        {
            Id = adjustment.Id,
            AgentId = adjustment.AgentId,
            BusinessName = agent.BusinessName,
            Amount = adjustment.Amount,
            EffectiveFrom = adjustment.EffectiveFrom,
            EffectiveTo = adjustment.EffectiveTo,
            Notes = adjustment.Notes,
            IsActive = adjustment.IsActive,
            CreatedAt = adjustment.CreatedAt
        }, "Limit adjustment created.");
    }

    public async Task<ApiResponse<bool>> DeactivateAdjustmentAsync(long adjustmentId)
    {
        var adjustment = await _adjustmentRepo.GetByIdAsync(adjustmentId);
        if (adjustment == null)
            return ApiResponse<bool>.Fail("Adjustment not found.");

        adjustment.IsActive = false;
        await _adjustmentRepo.UpdateAsync(adjustment);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Adjustment deactivated.");
    }
}
