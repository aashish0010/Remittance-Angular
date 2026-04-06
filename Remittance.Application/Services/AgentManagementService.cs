using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Agent;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class AgentManagementService : IAgentManagementService
{
    private readonly IRepository<Domain.Entities.Agent> _agentRepo;
    private readonly IRepository<Domain.Entities.ApplicationUser> _userRepo;
    private readonly IRepository<Domain.Entities.Role> _roleRepo;
    private readonly IRepository<Domain.Entities.UserRole> _userRoleRepo;
    private readonly IUnitOfWork _unitOfWork;

    public AgentManagementService(
        IRepository<Domain.Entities.Agent> agentRepo,
        IRepository<Domain.Entities.ApplicationUser> userRepo,
        IRepository<Domain.Entities.Role> roleRepo,
        IRepository<Domain.Entities.UserRole> userRoleRepo,
        IUnitOfWork unitOfWork)
    {
        _agentRepo = agentRepo;
        _userRepo = userRepo;
        _roleRepo = roleRepo;
        _userRoleRepo = userRoleRepo;
        _unitOfWork = unitOfWork;
    }

    private static AgentDto MapToDto(Domain.Entities.Agent agent) => new()
    {
        Id = agent.Id,
        UserId = agent.UserId,
        FullName = agent.FullName,
        Email = agent.Email,
        PhoneNumber = agent.PhoneNumber,
        BusinessName = agent.BusinessName,
        LicenseNumber = agent.LicenseNumber,
        Address = agent.Address,
        Country = agent.Country,
        City = agent.City,
        Currency = agent.Currency,
        FundingType = agent.FundingType.ToString(),
        AgentType = agent.AgentType.ToString(),
        Status = agent.Status.ToString(),
        CreditLimit = agent.CreditLimit,
        CurrentBalance = agent.CurrentBalance,
        IsApproved = agent.IsApproved,
        IsActive = agent.IsActive,
        CreatedAt = agent.CreatedAt
    };

    public async Task<ApiResponse<List<AgentDto>>> GetAllAgentsAsync()
    {
        var agents = await _agentRepo.GetAllAsync();
        var dtos = agents.Select(MapToDto).ToList();
        return ApiResponse<List<AgentDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<AgentDto>> CreateAgentAsync(CreateAgentDto dto)
    {
        var agentType = Enum.TryParse<AgentType>(dto.AgentType, out var parsedType)
            ? parsedType
            : AgentType.SendingAgent;

        // Link to existing user by email if one exists
        string? userId = null;
        if (!string.IsNullOrEmpty(dto.Email))
        {
            var existingUser = (await _userRepo.FindAsync(u => u.Email == dto.Email)).FirstOrDefault();
            userId = existingUser?.Id;
        }

        var agent = new Domain.Entities.Agent
        {
            UserId = userId,
            FullName = dto.FullName,
            Email = dto.Email,
            PhoneNumber = dto.PhoneNumber,
            BusinessName = dto.BusinessName,
            LicenseNumber = dto.LicenseNumber,
            Country = dto.Country,
            City = dto.City,
            Address = dto.Address,
            Currency = dto.Currency,
            FundingType = Enum.TryParse<FundingType>(dto.FundingType ?? "", out var ft) ? ft : FundingType.PreFunding,
            AgentType = agentType,
            Status = AgentStatus.Pending,
            CreditLimit = dto.CreditLimit,
            IsApproved = false
        };

        await _agentRepo.AddAsync(agent);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentDto>.Ok(MapToDto(agent), "Agent created successfully.");
    }

    public async Task<ApiResponse<AgentDto>> ApproveAgentAsync(int agentId)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<AgentDto>.Fail("Agent not found.");

        agent.IsApproved = true;
        agent.Status = AgentStatus.Approved;
        agent.UpdatedAt = DateTime.UtcNow;
        await _agentRepo.UpdateAsync(agent);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentDto>.Ok(MapToDto(agent), "Agent approved.");
    }

    public async Task<ApiResponse<AgentDto>> RejectAgentAsync(int agentId)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<AgentDto>.Fail("Agent not found.");

        agent.IsApproved = false;
        agent.Status = AgentStatus.Rejected;
        agent.IsActive = false;
        agent.UpdatedAt = DateTime.UtcNow;
        await _agentRepo.UpdateAsync(agent);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentDto>.Ok(MapToDto(agent), "Agent rejected.");
    }

    public async Task<ApiResponse<AgentBalanceDto>> GetAgentBalanceAsync(int agentId)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<AgentBalanceDto>.Fail("Agent not found.");

        return ApiResponse<AgentBalanceDto>.Ok(new AgentBalanceDto
        {
            AgentId = agent.Id,
            BusinessName = agent.BusinessName,
            CreditLimit = agent.CreditLimit,
            CurrentBalance = agent.CurrentBalance
        });
    }

    public async Task<ApiResponse<AgentDto>> UpdateAgentAsync(int agentId, UpdateAgentDto dto)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<AgentDto>.Fail("Agent not found.");

        var agentType = Enum.TryParse<AgentType>(dto.AgentType, out var parsedType)
            ? parsedType
            : agent.AgentType;

        agent.BusinessName = dto.BusinessName;
        agent.LicenseNumber = dto.LicenseNumber;
        agent.Address = dto.Address;
        agent.Country = dto.Country;
        agent.City = dto.City;
        agent.AgentType = agentType;
        agent.Currency = dto.Currency;
        agent.FundingType = Enum.TryParse<FundingType>(dto.FundingType, out var ft) ? ft : agent.FundingType;
        agent.CreditLimit = dto.CreditLimit;
        if (!string.IsNullOrEmpty(dto.FullName)) agent.FullName = dto.FullName;
        if (!string.IsNullOrEmpty(dto.Email)) agent.Email = dto.Email;
        if (!string.IsNullOrEmpty(dto.PhoneNumber)) agent.PhoneNumber = dto.PhoneNumber;
        agent.UpdatedAt = DateTime.UtcNow;

        await _agentRepo.UpdateAsync(agent);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentDto>.Ok(MapToDto(agent), "Agent updated.");
    }

    public async Task<ApiResponse<bool>> DeleteAgentAsync(int agentId)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<bool>.Fail("Agent not found.");

        await _agentRepo.DeleteAsync(agent);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Agent deleted.");
    }

    public async Task<ApiResponse<AgentDto>> BlockAgentAsync(int agentId)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<AgentDto>.Fail("Agent not found.");

        agent.Status = AgentStatus.Blocked;
        agent.IsActive = false;
        agent.UpdatedAt = DateTime.UtcNow;
        await _agentRepo.UpdateAsync(agent);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentDto>.Ok(MapToDto(agent), "Agent blocked.");
    }

    public async Task<ApiResponse<AgentDto>> UnblockAgentAsync(int agentId)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<AgentDto>.Fail("Agent not found.");

        agent.Status = AgentStatus.Approved;
        agent.IsActive = true;
        agent.UpdatedAt = DateTime.UtcNow;
        await _agentRepo.UpdateAsync(agent);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentDto>.Ok(MapToDto(agent), "Agent unblocked.");
    }

    public async Task<ApiResponse<AgentDto>> UpdateAgentLimitsAsync(int agentId, decimal newCreditLimit)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<AgentDto>.Fail("Agent not found.");

        agent.CreditLimit = newCreditLimit;
        agent.UpdatedAt = DateTime.UtcNow;
        await _agentRepo.UpdateAsync(agent);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentDto>.Ok(MapToDto(agent), "Agent credit limit updated.");
    }
}
