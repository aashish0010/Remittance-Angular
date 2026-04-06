using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class PaymentCorridorService : IPaymentCorridorService
{
    private readonly IRepository<PaymentCorridor> _corridorRepo;
    private readonly IRepository<CorridorPayoutPartner> _partnerRepo;
    private readonly IRepository<Agent> _agentRepo;
    private readonly IRepository<AgentPaymentMethod> _paymentMethodRepo;
    private readonly IUnitOfWork _unitOfWork;

    public PaymentCorridorService(
        IRepository<PaymentCorridor> corridorRepo,
        IRepository<CorridorPayoutPartner> partnerRepo,
        IRepository<Agent> agentRepo,
        IRepository<AgentPaymentMethod> paymentMethodRepo,
        IUnitOfWork unitOfWork)
    {
        _corridorRepo = corridorRepo;
        _partnerRepo = partnerRepo;
        _agentRepo = agentRepo;
        _paymentMethodRepo = paymentMethodRepo;
        _unitOfWork = unitOfWork;
    }

    private static string ToIdString(List<int> ids) => string.Join(",", ids);
    private static List<int> FromIdString(string s) => string.IsNullOrWhiteSpace(s)
        ? new()
        : s.Split(',', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();

    public async Task<ApiResponse<List<PaymentCorridorDto>>> GetAllCorridorsAsync()
    {
        var corridors = await _corridorRepo.GetAllAsync();
        var agents = await _agentRepo.GetAllAsync();
        var agentLookup = agents.ToDictionary(a => a.Id, a => a.BusinessName);
        var paymentMethods = await _paymentMethodRepo.GetAllAsync();
        var pmLookup = paymentMethods.ToDictionary(p => p.Id, p => p.Name);

        var dtos = new List<PaymentCorridorDto>();
        foreach (var c in corridors.OrderByDescending(c => c.CreatedAt))
        {
            var partners = await _partnerRepo.FindAsync(p => p.PaymentCorridorId == c.Id);
            dtos.Add(new PaymentCorridorDto
            {
                Id = c.Id,
                SendingAgentId = c.SendingAgentId,
                SendingAgentName = c.SendingAgentId.HasValue ? agentLookup.GetValueOrDefault(c.SendingAgentId.Value) : null,
                SourceCountry = c.SourceCountry,
                SourceCurrency = c.SourceCurrency,
                DestinationCountry = c.DestinationCountry,
                DestinationCurrency = c.DestinationCurrency,
                IsActive = c.IsActive,
                CreatedAt = c.CreatedAt,
                PayoutPartners = partners.Select(p => MapPartnerDto(p, agentLookup, pmLookup)).ToList()
            });
        }

        return ApiResponse<List<PaymentCorridorDto>>.Ok(dtos);
    }

    private static CorridorPayoutPartnerDto MapPartnerDto(CorridorPayoutPartner p, Dictionary<int, string> agentLookup, Dictionary<int, string> pmLookup)
    {
        var modeIds = FromIdString(p.PaymentModeIds);
        return new CorridorPayoutPartnerDto
        {
            Id = p.Id,
            PaymentCorridorId = p.PaymentCorridorId,
            PayoutAgentId = p.PayoutAgentId,
            PayoutAgentName = agentLookup.GetValueOrDefault(p.PayoutAgentId, "Unknown"),
            PaymentModeIds = modeIds,
            PaymentModeNames = modeIds.Select(id => pmLookup.GetValueOrDefault(id, "Unknown")).ToList(),
            IsActive = p.IsActive
        };
    }

    public async Task<ApiResponse<PaymentCorridorDto>> CreateCorridorAsync(CreatePaymentCorridorDto dto)
    {
        // Validate sending agent if specified
        if (dto.SendingAgentId.HasValue)
        {
            var sendingAgent = await _agentRepo.GetByIdAsync(dto.SendingAgentId.Value);
            if (sendingAgent == null || sendingAgent.AgentType != AgentType.SendingAgent)
                return ApiResponse<PaymentCorridorDto>.Fail("Invalid sending agent.");
            if (sendingAgent.Status != AgentStatus.Approved)
                return ApiResponse<PaymentCorridorDto>.Fail("Sending agent must be approved.");
        }

        // Check for duplicate corridor (same source/destination country+currency must be unique)
        var existing = await _corridorRepo.FindAsync(c =>
            c.SourceCountry == dto.SourceCountry &&
            c.DestinationCountry == dto.DestinationCountry &&
            c.SourceCurrency == dto.SourceCurrency &&
            c.DestinationCurrency == dto.DestinationCurrency);
        if (existing.Any())
            return ApiResponse<PaymentCorridorDto>.Fail("A corridor with the same source and destination country/currency already exists. Use the existing corridor to add payout partners.");

        var corridor = new PaymentCorridor
        {
            SendingAgentId = dto.SendingAgentId,
            SourceCountry = dto.SourceCountry,
            SourceCurrency = dto.SourceCurrency,
            DestinationCountry = dto.DestinationCountry,
            DestinationCurrency = dto.DestinationCurrency
        };

        await _corridorRepo.AddAsync(corridor);
        await _unitOfWork.SaveChangesAsync();

        var agents = await _agentRepo.GetAllAsync();
        var agentLookup = agents.ToDictionary(a => a.Id, a => a.BusinessName);

        return ApiResponse<PaymentCorridorDto>.Ok(new PaymentCorridorDto
        {
            Id = corridor.Id,
            SendingAgentId = corridor.SendingAgentId,
            SendingAgentName = corridor.SendingAgentId.HasValue ? agentLookup.GetValueOrDefault(corridor.SendingAgentId.Value) : null,
            SourceCountry = corridor.SourceCountry,
            SourceCurrency = corridor.SourceCurrency,
            DestinationCountry = corridor.DestinationCountry,
            DestinationCurrency = corridor.DestinationCurrency,
            IsActive = corridor.IsActive,
            CreatedAt = corridor.CreatedAt
        }, "Corridor created.");
    }

    public async Task<ApiResponse<PaymentCorridorDto>> UpdateCorridorAsync(int id, CreatePaymentCorridorDto dto)
    {
        var corridor = await _corridorRepo.GetByIdAsync(id);
        if (corridor == null)
            return ApiResponse<PaymentCorridorDto>.Fail("Corridor not found.");

        if (dto.SendingAgentId.HasValue)
        {
            var sendingAgent = await _agentRepo.GetByIdAsync(dto.SendingAgentId.Value);
            if (sendingAgent == null || sendingAgent.AgentType != AgentType.SendingAgent)
                return ApiResponse<PaymentCorridorDto>.Fail("Invalid sending agent.");
            if (sendingAgent.Status != AgentStatus.Approved)
                return ApiResponse<PaymentCorridorDto>.Fail("Sending agent must be approved.");
        }

        // Check for duplicate (excluding self) — same source/destination country+currency must be unique
        var existing = await _corridorRepo.FindAsync(c =>
            c.Id != id &&
            c.SourceCountry == dto.SourceCountry &&
            c.DestinationCountry == dto.DestinationCountry &&
            c.SourceCurrency == dto.SourceCurrency &&
            c.DestinationCurrency == dto.DestinationCurrency);
        if (existing.Any())
            return ApiResponse<PaymentCorridorDto>.Fail("A corridor with the same source and destination country/currency already exists.");

        corridor.SendingAgentId = dto.SendingAgentId;
        corridor.SourceCountry = dto.SourceCountry;
        corridor.SourceCurrency = dto.SourceCurrency;
        corridor.DestinationCountry = dto.DestinationCountry;
        corridor.DestinationCurrency = dto.DestinationCurrency;
        corridor.UpdatedAt = DateTime.UtcNow;

        await _corridorRepo.UpdateAsync(corridor);
        await _unitOfWork.SaveChangesAsync();

        var agents = await _agentRepo.GetAllAsync();
        var agentLookup = agents.ToDictionary(a => a.Id, a => a.BusinessName);

        return ApiResponse<PaymentCorridorDto>.Ok(new PaymentCorridorDto
        {
            Id = corridor.Id,
            SendingAgentId = corridor.SendingAgentId,
            SendingAgentName = corridor.SendingAgentId.HasValue ? agentLookup.GetValueOrDefault(corridor.SendingAgentId.Value) : null,
            SourceCountry = corridor.SourceCountry,
            SourceCurrency = corridor.SourceCurrency,
            DestinationCountry = corridor.DestinationCountry,
            DestinationCurrency = corridor.DestinationCurrency,
            IsActive = corridor.IsActive,
            CreatedAt = corridor.CreatedAt
        }, "Corridor updated.");
    }

    public async Task<ApiResponse<bool>> DeleteCorridorAsync(int id)
    {
        var corridor = await _corridorRepo.GetByIdAsync(id);
        if (corridor == null)
            return ApiResponse<bool>.Fail("Corridor not found.");

        // Delete partners first (cascade should handle this but be explicit)
        var partners = await _partnerRepo.FindAsync(p => p.PaymentCorridorId == id);
        foreach (var p in partners)
            await _partnerRepo.DeleteAsync(p);

        await _corridorRepo.DeleteAsync(corridor);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Corridor deleted.");
    }

    public async Task<ApiResponse<bool>> ToggleCorridorAsync(int id)
    {
        var corridor = await _corridorRepo.GetByIdAsync(id);
        if (corridor == null)
            return ApiResponse<bool>.Fail("Corridor not found.");

        corridor.IsActive = !corridor.IsActive;
        corridor.UpdatedAt = DateTime.UtcNow;
        await _corridorRepo.UpdateAsync(corridor);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, corridor.IsActive ? "Corridor activated." : "Corridor deactivated.");
    }

    // ---- Payout Partners ----

    public async Task<ApiResponse<CorridorPayoutPartnerDto>> AddPayoutPartnerAsync(CreateCorridorPayoutPartnerDto dto)
    {
        var corridor = await _corridorRepo.GetByIdAsync(dto.PaymentCorridorId);
        if (corridor == null)
            return ApiResponse<CorridorPayoutPartnerDto>.Fail("Corridor not found.");

        var agent = await _agentRepo.GetByIdAsync(dto.PayoutAgentId);
        if (agent == null || agent.AgentType != AgentType.PayoutAgent)
            return ApiResponse<CorridorPayoutPartnerDto>.Fail("Invalid payout agent. Agent must be of type PayoutAgent.");
        if (agent.Status != AgentStatus.Approved)
            return ApiResponse<CorridorPayoutPartnerDto>.Fail("Payout agent must be approved.");

        // Check duplicate
        var existing = await _partnerRepo.FindAsync(p => p.PaymentCorridorId == dto.PaymentCorridorId && p.PayoutAgentId == dto.PayoutAgentId);
        if (existing.Any())
            return ApiResponse<CorridorPayoutPartnerDto>.Fail("This payout agent is already assigned to this corridor.");

        if (!dto.PaymentModeIds.Any())
            return ApiResponse<CorridorPayoutPartnerDto>.Fail("At least one payment mode is required.");

        // Deactivate all existing partners in this corridor (only one active at a time)
        var currentPartners = await _partnerRepo.FindAsync(p => p.PaymentCorridorId == dto.PaymentCorridorId && p.IsActive);
        foreach (var cp in currentPartners)
        {
            cp.IsActive = false;
            await _partnerRepo.UpdateAsync(cp);
        }

        var partner = new CorridorPayoutPartner
        {
            PaymentCorridorId = dto.PaymentCorridorId,
            PayoutAgentId = dto.PayoutAgentId,
            PaymentModeIds = ToIdString(dto.PaymentModeIds)
        };

        await _partnerRepo.AddAsync(partner);
        await _unitOfWork.SaveChangesAsync();

        var agents = await _agentRepo.GetAllAsync();
        var agentLookup = agents.ToDictionary(a => a.Id, a => a.BusinessName);
        var paymentMethods = await _paymentMethodRepo.GetAllAsync();
        var pmLookup = paymentMethods.ToDictionary(p => p.Id, p => p.Name);

        return ApiResponse<CorridorPayoutPartnerDto>.Ok(MapPartnerDto(partner, agentLookup, pmLookup), "Payout partner added.");
    }

    public async Task<ApiResponse<CorridorPayoutPartnerDto>> UpdatePayoutPartnerAsync(int id, CreateCorridorPayoutPartnerDto dto)
    {
        var partner = await _partnerRepo.GetByIdAsync(id);
        if (partner == null)
            return ApiResponse<CorridorPayoutPartnerDto>.Fail("Partner not found.");

        if (!dto.PaymentModeIds.Any())
            return ApiResponse<CorridorPayoutPartnerDto>.Fail("At least one payment mode is required.");

        partner.PaymentModeIds = ToIdString(dto.PaymentModeIds);
        await _partnerRepo.UpdateAsync(partner);
        await _unitOfWork.SaveChangesAsync();

        var agents = await _agentRepo.GetAllAsync();
        var agentLookup = agents.ToDictionary(a => a.Id, a => a.BusinessName);
        var paymentMethods = await _paymentMethodRepo.GetAllAsync();
        var pmLookup = paymentMethods.ToDictionary(p => p.Id, p => p.Name);

        return ApiResponse<CorridorPayoutPartnerDto>.Ok(MapPartnerDto(partner, agentLookup, pmLookup), "Partner updated.");
    }

    public async Task<ApiResponse<bool>> RemovePayoutPartnerAsync(int id)
    {
        var partner = await _partnerRepo.GetByIdAsync(id);
        if (partner == null)
            return ApiResponse<bool>.Fail("Partner not found.");

        await _partnerRepo.DeleteAsync(partner);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Partner removed.");
    }

    public async Task<ApiResponse<bool>> TogglePayoutPartnerAsync(int id)
    {
        var partner = await _partnerRepo.GetByIdAsync(id);
        if (partner == null)
            return ApiResponse<bool>.Fail("Partner not found.");

        var willBeActive = !partner.IsActive;

        // If activating this partner, deactivate all others in the same corridor (only one active at a time)
        if (willBeActive)
        {
            var siblings = await _partnerRepo.FindAsync(p => p.PaymentCorridorId == partner.PaymentCorridorId && p.Id != id && p.IsActive);
            foreach (var s in siblings)
            {
                s.IsActive = false;
                await _partnerRepo.UpdateAsync(s);
            }
        }

        partner.IsActive = willBeActive;
        await _partnerRepo.UpdateAsync(partner);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, partner.IsActive ? "Partner activated. All other partners in this corridor have been deactivated." : "Partner deactivated.");
    }
}
