using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class CommissionService : ICommissionService
{
    private readonly IRepository<CommissionRate> _commRepo;
    private readonly IRepository<Agent> _agentRepo;
    private readonly IUnitOfWork _unitOfWork;

    public CommissionService(IRepository<CommissionRate> commRepo, IRepository<Agent> agentRepo, IUnitOfWork unitOfWork)
    {
        _commRepo = commRepo;
        _agentRepo = agentRepo;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResponse<List<CommissionRateDto>>> GetAllRatesAsync()
    {
        var rates = await _commRepo.GetAllAsync();
        var agents = await _agentRepo.GetAllAsync();
        var agentMap = agents.ToDictionary(a => a.Id, a => a.BusinessName);

        var dtos = rates.Select(r => new CommissionRateDto
        {
            Id = r.Id,
            AgentId = r.AgentId,
            AgentName = r.AgentId.HasValue && agentMap.TryGetValue(r.AgentId.Value, out var name) ? name : null,
            PayoutAgentId = r.PayoutAgentId,
            PayoutAgentName = agentMap.GetValueOrDefault(r.PayoutAgentId, "Unknown"),
            SourceCountry = r.SourceCountry,
            DestinationCountry = r.DestinationCountry,
            PaymentMethod = r.PaymentMethod,
            SourceCurrency = r.SourceCurrency,
            DestinationCurrency = r.DestinationCurrency,
            MinAmount = r.MinAmount,
            MaxAmount = r.MaxAmount,
            CommissionPercent = r.CommissionPercent,
            FlatFee = r.FlatFee,
            IsActive = r.IsActive
        }).ToList();

        return ApiResponse<List<CommissionRateDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<CommissionRateDto>> CreateRateAsync(CreateCommissionRateDto dto)
    {
        // Validate sending agent if specified (must be SendingAgent and Approved)
        if (dto.AgentId.HasValue)
        {
            var agent = await _agentRepo.GetByIdAsync(dto.AgentId.Value);
            if (agent == null || agent.AgentType != AgentType.SendingAgent)
                return ApiResponse<CommissionRateDto>.Fail("Invalid agent. Agent must be of type Sending Agent.");
            if (agent.Status != AgentStatus.Approved)
                return ApiResponse<CommissionRateDto>.Fail("Sending agent must be approved.");
        }

        // Validate payout agent (mandatory, must be PayoutAgent and Approved)
        var payoutAgent = await _agentRepo.GetByIdAsync(dto.PayoutAgentId);
        if (payoutAgent == null || payoutAgent.AgentType != AgentType.PayoutAgent)
            return ApiResponse<CommissionRateDto>.Fail("Invalid payout partner. Agent must be of type Payout Agent.");
        if (payoutAgent.Status != AgentStatus.Approved)
            return ApiResponse<CommissionRateDto>.Fail("Payout partner must be approved.");

        // Check for duplicate (all fields except commission mode/value)
        var duplicate = await _commRepo.FindAsync(r =>
            r.AgentId == dto.AgentId &&
            r.PayoutAgentId == dto.PayoutAgentId &&
            r.SourceCountry == dto.SourceCountry &&
            r.DestinationCountry == dto.DestinationCountry &&
            r.SourceCurrency == dto.SourceCurrency &&
            r.DestinationCurrency == dto.DestinationCurrency &&
            r.PaymentMethod == dto.PaymentMethod &&
            r.MinAmount == dto.MinAmount &&
            r.MaxAmount == dto.MaxAmount);
        if (duplicate.Any())
            return ApiResponse<CommissionRateDto>.Fail("A commission rate with the same configuration already exists.");

        var entity = new CommissionRate
        {
            AgentId = dto.AgentId,
            PayoutAgentId = dto.PayoutAgentId,
            SourceCountry = dto.SourceCountry,
            DestinationCountry = dto.DestinationCountry,
            PaymentMethod = dto.PaymentMethod,
            SourceCurrency = dto.SourceCurrency,
            DestinationCurrency = dto.DestinationCurrency,
            MinAmount = dto.MinAmount,
            MaxAmount = dto.MaxAmount,
            CommissionPercent = dto.CommissionPercent,
            FlatFee = dto.FlatFee,
            IsActive = true
        };

        await _commRepo.AddAsync(entity);
        await _unitOfWork.SaveChangesAsync();

        string? agentName = null;
        if (entity.AgentId.HasValue)
        {
            var agent = await _agentRepo.GetByIdAsync(entity.AgentId.Value);
            agentName = agent?.BusinessName;
        }

        return ApiResponse<CommissionRateDto>.Ok(new CommissionRateDto
        {
            Id = entity.Id,
            AgentId = entity.AgentId,
            AgentName = agentName,
            PayoutAgentId = entity.PayoutAgentId,
            PayoutAgentName = payoutAgent.BusinessName,
            SourceCountry = entity.SourceCountry,
            DestinationCountry = entity.DestinationCountry,
            PaymentMethod = entity.PaymentMethod,
            SourceCurrency = entity.SourceCurrency,
            DestinationCurrency = entity.DestinationCurrency,
            MinAmount = entity.MinAmount,
            MaxAmount = entity.MaxAmount,
            CommissionPercent = entity.CommissionPercent,
            FlatFee = entity.FlatFee,
            IsActive = entity.IsActive
        }, "Commission rate created.");
    }

    public async Task<ApiResponse<CommissionRateDto>> UpdateRateAsync(int id, CreateCommissionRateDto dto)
    {
        var entity = await _commRepo.GetByIdAsync(id);
        if (entity == null)
            return ApiResponse<CommissionRateDto>.Fail("Commission rate not found.");

        // Validate sending agent if specified (must be SendingAgent and Approved)
        if (dto.AgentId.HasValue)
        {
            var agent = await _agentRepo.GetByIdAsync(dto.AgentId.Value);
            if (agent == null || agent.AgentType != AgentType.SendingAgent)
                return ApiResponse<CommissionRateDto>.Fail("Invalid agent. Agent must be of type Sending Agent.");
            if (agent.Status != AgentStatus.Approved)
                return ApiResponse<CommissionRateDto>.Fail("Sending agent must be approved.");
        }

        // Validate payout agent (mandatory, must be PayoutAgent and Approved)
        var payoutAgent = await _agentRepo.GetByIdAsync(dto.PayoutAgentId);
        if (payoutAgent == null || payoutAgent.AgentType != AgentType.PayoutAgent)
            return ApiResponse<CommissionRateDto>.Fail("Invalid payout partner. Agent must be of type Payout Agent.");
        if (payoutAgent.Status != AgentStatus.Approved)
            return ApiResponse<CommissionRateDto>.Fail("Payout partner must be approved.");

        // Check for duplicate (excluding self, all fields except commission mode/value)
        var duplicate = await _commRepo.FindAsync(r =>
            r.Id != id &&
            r.AgentId == dto.AgentId &&
            r.PayoutAgentId == dto.PayoutAgentId &&
            r.SourceCountry == dto.SourceCountry &&
            r.DestinationCountry == dto.DestinationCountry &&
            r.SourceCurrency == dto.SourceCurrency &&
            r.DestinationCurrency == dto.DestinationCurrency &&
            r.PaymentMethod == dto.PaymentMethod &&
            r.MinAmount == dto.MinAmount &&
            r.MaxAmount == dto.MaxAmount);
        if (duplicate.Any())
            return ApiResponse<CommissionRateDto>.Fail("A commission rate with the same configuration already exists.");

        entity.AgentId = dto.AgentId;
        entity.PayoutAgentId = dto.PayoutAgentId;
        entity.SourceCountry = dto.SourceCountry;
        entity.DestinationCountry = dto.DestinationCountry;
        entity.PaymentMethod = dto.PaymentMethod;
        entity.SourceCurrency = dto.SourceCurrency;
        entity.DestinationCurrency = dto.DestinationCurrency;
        entity.MinAmount = dto.MinAmount;
        entity.MaxAmount = dto.MaxAmount;
        entity.CommissionPercent = dto.CommissionPercent;
        entity.FlatFee = dto.FlatFee;
        entity.UpdatedAt = DateTime.UtcNow;

        await _commRepo.UpdateAsync(entity);
        await _unitOfWork.SaveChangesAsync();

        string? agentName = null;
        if (entity.AgentId.HasValue)
        {
            var agent = await _agentRepo.GetByIdAsync(entity.AgentId.Value);
            agentName = agent?.BusinessName;
        }

        return ApiResponse<CommissionRateDto>.Ok(new CommissionRateDto
        {
            Id = entity.Id,
            AgentId = entity.AgentId,
            AgentName = agentName,
            PayoutAgentId = entity.PayoutAgentId,
            PayoutAgentName = payoutAgent.BusinessName,
            SourceCountry = entity.SourceCountry,
            DestinationCountry = entity.DestinationCountry,
            PaymentMethod = entity.PaymentMethod,
            SourceCurrency = entity.SourceCurrency,
            DestinationCurrency = entity.DestinationCurrency,
            MinAmount = entity.MinAmount,
            MaxAmount = entity.MaxAmount,
            CommissionPercent = entity.CommissionPercent,
            FlatFee = entity.FlatFee,
            IsActive = entity.IsActive
        }, "Commission rate updated.");
    }

    public async Task<ApiResponse<bool>> DeleteRateAsync(int id)
    {
        var entity = await _commRepo.GetByIdAsync(id);
        if (entity == null)
            return ApiResponse<bool>.Fail("Commission rate not found.");

        await _commRepo.DeleteAsync(entity);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Commission rate deleted.");
    }

    /// <summary>
    /// Find the best-matching commission rate using specificity scoring.
    /// CommissionRate fields: AgentId (sending agent), PayoutAgentId (payout partner),
    /// SourceCountry, DestinationCountry, SourceCurrency, DestinationCurrency,
    /// PaymentMethod, MinAmount, MaxAmount.
    /// Null fields in the rate = "applies to all" (wildcard).
    /// Non-null fields that don't match = disqualified.
    /// </summary>
    public async Task<decimal> CalculateCommissionAsync(
        decimal sendAmount,
        string? sourceCountry,
        string? destinationCountry,
        string? sourceCurrency = null,
        string? destinationCurrency = null,
        string? paymentMethod = null,
        int? sendingAgentId = null,
        int? payoutAgentId = null)
    {
        // Step 1: Get all active rates in the amount range
        var rates = await _commRepo.FindAsync(r =>
            r.IsActive &&
            r.MinAmount <= sendAmount &&
            r.MaxAmount >= sendAmount);

        if (!rates.Any())
            return 0;

        // Step 2: Score each rate by specificity — disqualify mismatches
        var scored = new List<(CommissionRate rate, int score)>();

        foreach (var r in rates)
        {
            var score = 0;
            var disqualified = false;

            // Sending agent (AgentId in CommissionRate = sending agent)
            if (r.AgentId.HasValue)
            {
                if (sendingAgentId.HasValue && r.AgentId.Value == sendingAgentId.Value)
                    score += 10;
                else
                { disqualified = true; continue; }
            }

            // Payout agent
            if (r.PayoutAgentId > 0)
            {
                if (payoutAgentId.HasValue && r.PayoutAgentId == payoutAgentId.Value)
                    score += 10;
                else
                { disqualified = true; continue; }
            }

            // Source country
            if (!string.IsNullOrEmpty(r.SourceCountry))
            {
                if (r.SourceCountry == sourceCountry)
                    score += 8;
                else
                { disqualified = true; continue; }
            }

            // Destination country
            if (!string.IsNullOrEmpty(r.DestinationCountry))
            {
                if (r.DestinationCountry == destinationCountry)
                    score += 8;
                else
                { disqualified = true; continue; }
            }

            // Source currency
            if (!string.IsNullOrEmpty(r.SourceCurrency))
            {
                if (r.SourceCurrency == sourceCurrency)
                    score += 5;
                else
                { disqualified = true; continue; }
            }

            // Destination currency
            if (!string.IsNullOrEmpty(r.DestinationCurrency))
            {
                if (r.DestinationCurrency == destinationCurrency)
                    score += 5;
                else
                { disqualified = true; continue; }
            }

            // Payment method
            if (!string.IsNullOrEmpty(r.PaymentMethod))
            {
                if (r.PaymentMethod == paymentMethod)
                    score += 3;
                else
                { disqualified = true; continue; }
            }

            if (!disqualified)
                scored.Add((r, score));
        }

        if (!scored.Any())
            return 0;

        // Step 3: Pick the highest scoring (most specific) match
        var best = scored.OrderByDescending(x => x.score).First().rate;

        var totalCommission = (sendAmount * best.CommissionPercent / 100) + (best.FlatFee ?? 0);
        return Math.Round(totalCommission, 2);
    }
}
