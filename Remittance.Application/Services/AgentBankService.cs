using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Interfaces;
using System.Linq;

namespace Remittance.Application.Services;

public class AgentBankService : IAgentBankService
{
    private readonly IRepository<AgentBank> _bankRepo;
    private readonly IRepository<AgentBankBranch> _branchRepo;
    private readonly IRepository<Agent> _agentRepo;
    private readonly IRepository<AgentPaymentMethod> _paymentMethodRepo;
    private readonly IUnitOfWork _unitOfWork;

    public AgentBankService(
        IRepository<AgentBank> bankRepo,
        IRepository<AgentBankBranch> branchRepo,
        IRepository<Agent> agentRepo,
        IRepository<AgentPaymentMethod> paymentMethodRepo,
        IUnitOfWork unitOfWork)
    {
        _bankRepo = bankRepo;
        _branchRepo = branchRepo;
        _agentRepo = agentRepo;
        _paymentMethodRepo = paymentMethodRepo;
        _unitOfWork = unitOfWork;
    }

    private static AgentBankBranchDto MapBranchDto(AgentBankBranch b) => new()
    {
        Id = b.Id,
        AgentBankId = b.AgentBankId,
        BranchName = b.BranchName,
        BranchCode = b.BranchCode,
        SwiftCode = b.SwiftCode,
        Address = b.Address,
        ContactPhone = b.ContactPhone,
        IsActive = b.IsActive,
        CreatedAt = b.CreatedAt
    };

    private AgentBankDto MapBankDto(AgentBank bank, string agentName, string? paymentMethodName = null, List<AgentBankBranchDto>? branches = null) => new()
    {
        Id = bank.Id,
        AgentId = bank.AgentId,
        AgentName = agentName,
        PaymentMethodId = bank.PaymentMethodId,
        PaymentMethodName = paymentMethodName,
        BankName = bank.BankName,
        BankCode = bank.BankCode,
        SwiftCode = bank.SwiftCode,
        RoutingNumber = bank.RoutingNumber,
        Country = bank.Country,
        City = bank.City,
        Address = bank.Address,
        ContactPhone = bank.ContactPhone,
        ContactEmail = bank.ContactEmail,
        AdditionalInfo = bank.AdditionalInfo,
        IsActive = bank.IsActive,
        CreatedAt = bank.CreatedAt,
        Branches = branches ?? new()
    };

    public async Task<ApiResponse<List<AgentBankDto>>> GetBanksForAgentAsync(int agentId)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<List<AgentBankDto>>.Fail("Agent not found.");

        var banks = await _bankRepo.FindAsync(b => b.AgentId == agentId);
        var paymentMethods = await _paymentMethodRepo.GetAllAsync();
        var pmLookup = paymentMethods.ToDictionary(p => p.Id, p => p.Name);
        var dtos = new List<AgentBankDto>();

        foreach (var bank in banks.OrderByDescending(b => b.CreatedAt))
        {
            var branches = await _branchRepo.FindAsync(br => br.AgentBankId == bank.Id);
            var pmName = bank.PaymentMethodId.HasValue && pmLookup.ContainsKey(bank.PaymentMethodId.Value)
                ? pmLookup[bank.PaymentMethodId.Value] : null;
            dtos.Add(MapBankDto(bank, agent.BusinessName, pmName, branches.Select(MapBranchDto).ToList()));
        }

        return ApiResponse<List<AgentBankDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<AgentBankDto>> CreateBankAsync(CreateAgentBankDto dto)
    {
        var agent = await _agentRepo.GetByIdAsync(dto.AgentId);
        if (agent == null)
            return ApiResponse<AgentBankDto>.Fail("Agent not found.");

        var bank = new AgentBank
        {
            AgentId = dto.AgentId,
            PaymentMethodId = dto.PaymentMethodId,
            BankName = dto.BankName,
            BankCode = dto.BankCode,
            SwiftCode = dto.SwiftCode,
            RoutingNumber = dto.RoutingNumber,
            Country = dto.Country,
            City = dto.City,
            Address = dto.Address,
            ContactPhone = dto.ContactPhone,
            ContactEmail = dto.ContactEmail,
            AdditionalInfo = dto.AdditionalInfo
        };

        await _bankRepo.AddAsync(bank);
        await _unitOfWork.SaveChangesAsync();

        string? pmName = null;
        if (bank.PaymentMethodId.HasValue)
        {
            var pm = await _paymentMethodRepo.GetByIdAsync(bank.PaymentMethodId.Value);
            pmName = pm?.Name;
        }
        return ApiResponse<AgentBankDto>.Ok(MapBankDto(bank, agent.BusinessName, pmName), "Bank created successfully.");
    }

    public async Task<ApiResponse<AgentBankDto>> UpdateBankAsync(int bankId, UpdateAgentBankDto dto)
    {
        var bank = await _bankRepo.GetByIdAsync(bankId);
        if (bank == null)
            return ApiResponse<AgentBankDto>.Fail("Bank not found.");

        var agent = await _agentRepo.GetByIdAsync(bank.AgentId);

        bank.PaymentMethodId = dto.PaymentMethodId;
        bank.BankName = dto.BankName;
        bank.BankCode = dto.BankCode;
        bank.SwiftCode = dto.SwiftCode;
        bank.RoutingNumber = dto.RoutingNumber;
        bank.Country = dto.Country;
        bank.City = dto.City;
        bank.Address = dto.Address;
        bank.ContactPhone = dto.ContactPhone;
        bank.ContactEmail = dto.ContactEmail;
        bank.AdditionalInfo = dto.AdditionalInfo;
        bank.UpdatedAt = DateTime.UtcNow;

        await _bankRepo.UpdateAsync(bank);
        await _unitOfWork.SaveChangesAsync();

        var branches = await _branchRepo.FindAsync(br => br.AgentBankId == bank.Id);
        string? updPmName = null;
        if (bank.PaymentMethodId.HasValue)
        {
            var pm = await _paymentMethodRepo.GetByIdAsync(bank.PaymentMethodId.Value);
            updPmName = pm?.Name;
        }
        return ApiResponse<AgentBankDto>.Ok(
            MapBankDto(bank, agent?.BusinessName ?? "", updPmName, branches.Select(MapBranchDto).ToList()),
            "Bank updated successfully.");
    }

    public async Task<ApiResponse<bool>> DeleteBankAsync(int bankId)
    {
        var bank = await _bankRepo.GetByIdAsync(bankId);
        if (bank == null)
            return ApiResponse<bool>.Fail("Bank not found.");

        var branches = await _branchRepo.FindAsync(br => br.AgentBankId == bankId);
        foreach (var b in branches)
            await _branchRepo.DeleteAsync(b);

        await _bankRepo.DeleteAsync(bank);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Bank deleted.");
    }

    public async Task<ApiResponse<bool>> ToggleBankAsync(int bankId)
    {
        var bank = await _bankRepo.GetByIdAsync(bankId);
        if (bank == null)
            return ApiResponse<bool>.Fail("Bank not found.");

        bank.IsActive = !bank.IsActive;
        bank.UpdatedAt = DateTime.UtcNow;
        await _bankRepo.UpdateAsync(bank);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, bank.IsActive ? "Bank activated." : "Bank deactivated.");
    }

    public async Task<ApiResponse<AgentBankBranchDto>> CreateBranchAsync(CreateAgentBankBranchDto dto)
    {
        var bank = await _bankRepo.GetByIdAsync(dto.AgentBankId);
        if (bank == null)
            return ApiResponse<AgentBankBranchDto>.Fail("Bank not found.");

        var branch = new AgentBankBranch
        {
            AgentBankId = dto.AgentBankId,
            BranchName = dto.BranchName,
            BranchCode = dto.BranchCode,
            SwiftCode = dto.SwiftCode,
            Address = dto.Address,
            ContactPhone = dto.ContactPhone
        };

        await _branchRepo.AddAsync(branch);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentBankBranchDto>.Ok(MapBranchDto(branch), "Branch added.");
    }

    public async Task<ApiResponse<AgentBankBranchDto>> UpdateBranchAsync(int branchId, UpdateAgentBankBranchDto dto)
    {
        var branch = await _branchRepo.GetByIdAsync(branchId);
        if (branch == null)
            return ApiResponse<AgentBankBranchDto>.Fail("Branch not found.");

        branch.BranchName = dto.BranchName;
        branch.BranchCode = dto.BranchCode;
        branch.SwiftCode = dto.SwiftCode;
        branch.Address = dto.Address;
        branch.ContactPhone = dto.ContactPhone;

        await _branchRepo.UpdateAsync(branch);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentBankBranchDto>.Ok(MapBranchDto(branch), "Branch updated.");
    }

    public async Task<ApiResponse<bool>> DeleteBranchAsync(int branchId)
    {
        var branch = await _branchRepo.GetByIdAsync(branchId);
        if (branch == null)
            return ApiResponse<bool>.Fail("Branch not found.");

        await _branchRepo.DeleteAsync(branch);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Branch deleted.");
    }
}
