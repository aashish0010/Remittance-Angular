using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class ReceiverService : IReceiverService
{
    private readonly IRepository<Receiver> _receiverRepo;
    private readonly IRepository<Customer> _customerRepo;
    private readonly IUnitOfWork _unitOfWork;

    public ReceiverService(
        IRepository<Receiver> receiverRepo,
        IRepository<Customer> customerRepo,
        IUnitOfWork unitOfWork)
    {
        _receiverRepo = receiverRepo;
        _customerRepo = customerRepo;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResponse<List<ReceiverDto>>> GetAllReceiversAsync()
    {
        var receivers = await _receiverRepo.GetAllAsync();
        var dtos = new List<ReceiverDto>();
        foreach (var r in receivers)
        {
            var customer = await _customerRepo.GetByIdAsync(r.CustomerId);
            dtos.Add(MapDto(r, customer?.FullName ?? ""));
        }
        return ApiResponse<List<ReceiverDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<List<ReceiverDto>>> GetReceiversByCustomerAsync(int customerId)
    {
        var customer = await _customerRepo.GetByIdAsync(customerId);
        if (customer == null)
            return ApiResponse<List<ReceiverDto>>.Fail("Customer not found.");

        var receivers = await _receiverRepo.FindAsync(r => r.CustomerId == customerId);
        var dtos = receivers.Select(r => MapDto(r, customer.FullName)).ToList();
        return ApiResponse<List<ReceiverDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<ReceiverDto>> CreateReceiverAsync(CreateReceiverDto dto)
    {
        var customer = await _customerRepo.GetByIdAsync(dto.CustomerId);
        if (customer == null)
            return ApiResponse<ReceiverDto>.Fail("Customer not found.");

        var receiver = new Receiver
        {
            CustomerId = dto.CustomerId,
            FullName = dto.FullName,
            Phone = dto.Phone,
            Email = dto.Email,
            Country = dto.Country,
            City = dto.City,
            BankName = dto.BankName,
            BankCode = dto.BankCode,
            AccountNumber = dto.AccountNumber,
            BranchName = dto.BranchName,
            BranchCode = dto.BranchCode,
            BankId = dto.BankId,
            BranchId = dto.BranchId,
            Relationship = dto.Relationship
        };

        await _receiverRepo.AddAsync(receiver);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<ReceiverDto>.Ok(MapDto(receiver, customer.FullName), "Receiver created.");
    }

    public async Task<ApiResponse<ReceiverDto>> UpdateReceiverAsync(int id, CreateReceiverDto dto)
    {
        var receiver = await _receiverRepo.GetByIdAsync(id);
        if (receiver == null)
            return ApiResponse<ReceiverDto>.Fail("Receiver not found.");

        receiver.FullName = dto.FullName;
        receiver.Phone = dto.Phone;
        receiver.Email = dto.Email;
        receiver.Country = dto.Country;
        receiver.City = dto.City;
        receiver.BankName = dto.BankName;
        receiver.BankCode = dto.BankCode;
        receiver.AccountNumber = dto.AccountNumber;
        receiver.BranchName = dto.BranchName;
        receiver.BranchCode = dto.BranchCode;
        receiver.BankId = dto.BankId;
        receiver.BranchId = dto.BranchId;
        receiver.Relationship = dto.Relationship;
        receiver.UpdatedAt = DateTime.UtcNow;

        await _receiverRepo.UpdateAsync(receiver);
        await _unitOfWork.SaveChangesAsync();

        var customer = await _customerRepo.GetByIdAsync(receiver.CustomerId);
        return ApiResponse<ReceiverDto>.Ok(MapDto(receiver, customer?.FullName ?? ""), "Receiver updated.");
    }

    public async Task<ApiResponse<bool>> DeleteReceiverAsync(int id)
    {
        var receiver = await _receiverRepo.GetByIdAsync(id);
        if (receiver == null)
            return ApiResponse<bool>.Fail("Receiver not found.");

        await _receiverRepo.DeleteAsync(receiver);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Receiver deleted.");
    }

    public async Task<ApiResponse<ReceiverDto>> ToggleReceiverStatusAsync(int id)
    {
        var receiver = await _receiverRepo.GetByIdAsync(id);
        if (receiver == null)
            return ApiResponse<ReceiverDto>.Fail("Receiver not found.");

        receiver.IsActive = !receiver.IsActive;
        receiver.UpdatedAt = DateTime.UtcNow;
        await _receiverRepo.UpdateAsync(receiver);
        await _unitOfWork.SaveChangesAsync();

        var customer = await _customerRepo.GetByIdAsync(receiver.CustomerId);
        var status = receiver.IsActive ? "enabled" : "disabled";
        return ApiResponse<ReceiverDto>.Ok(MapDto(receiver, customer?.FullName ?? ""), $"Receiver {status}.");
    }

    private static ReceiverDto MapDto(Receiver r, string customerName) => new()
    {
        Id = r.Id,
        CustomerId = r.CustomerId,
        CustomerName = customerName,
        FullName = r.FullName,
        Phone = r.Phone,
        Email = r.Email,
        Country = r.Country,
        City = r.City,
        BankName = r.BankName,
        BankCode = r.BankCode,
        AccountNumber = r.AccountNumber,
        BranchName = r.BranchName,
        BranchCode = r.BranchCode,
        BankId = r.BankId,
        BranchId = r.BranchId,
        Relationship = r.Relationship,
        IsActive = r.IsActive,
        CreatedAt = r.CreatedAt
    };
}
