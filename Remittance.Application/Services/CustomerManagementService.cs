using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class CustomerManagementService : ICustomerManagementService
{
    private readonly IRepository<Customer> _customerRepo;
    private readonly IRepository<CustomerDocument> _docRepo;
    private readonly IRepository<ApplicationUser> _userRepo;
    private readonly IRepository<SanctionedCountry> _sanctionedCountryRepo;
    private readonly ISettingsService _settings;
    private readonly IUnitOfWork _unitOfWork;

    public CustomerManagementService(
        IRepository<Customer> customerRepo,
        IRepository<CustomerDocument> docRepo,
        IRepository<ApplicationUser> userRepo,
        IRepository<SanctionedCountry> sanctionedCountryRepo,
        ISettingsService settings,
        IUnitOfWork unitOfWork)
    {
        _customerRepo = customerRepo;
        _docRepo = docRepo;
        _userRepo = userRepo;
        _sanctionedCountryRepo = sanctionedCountryRepo;
        _settings = settings;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResponse<List<CustomerDto>>> GetAllCustomersAsync()
    {
        var customers = await _customerRepo.GetAllAsync();
        var dtos = new List<CustomerDto>();

        foreach (var c in customers)
        {
            var docs = await _docRepo.FindAsync(d => d.CustomerId == c.Id);
            dtos.Add(MapDto(c, docs.ToList()));
        }

        return ApiResponse<List<CustomerDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<CustomerDto>> GetCustomerByIdAsync(int id)
    {
        var customer = await _customerRepo.GetByIdAsync(id);
        if (customer == null)
            return ApiResponse<CustomerDto>.Fail("Customer not found.");

        var docs = await _docRepo.FindAsync(d => d.CustomerId == id);
        return ApiResponse<CustomerDto>.Ok(MapDto(customer, docs.ToList()));
    }

    public async Task<ApiResponse<CustomerDto>> CreateCustomerAsync(CreateCustomerDto dto)
    {
        try
        {
            if (dto.DateOfBirth.HasValue && dto.DateOfBirth.Value.Date > DateTime.UtcNow.Date)
                return ApiResponse<CustomerDto>.Fail("Date of birth cannot be a future date.");

            if (!string.IsNullOrEmpty(dto.Email))
            {
                var existingUsers = await _userRepo.FindAsync(u => u.Email == dto.Email);
                if (existingUsers.Any())
                    return ApiResponse<CustomerDto>.Fail("A user with this email already exists.");
            }

            // ── KYC settings ─────────────────────────────────────────────────
            var duplicateCheck     = await _settings.GetBoolAsync("kyc.duplicateCheck", false);
            var mandatoryIdTypes   = await _settings.GetAsync("kyc.mandatoryIdTypes", "");
            var skipDocumentUpload = await _settings.GetBoolAsync("kyc.skipDocumentUpload", false);

            // Duplicate customer check — by ID document number or by full name + DOB
            if (duplicateCheck)
            {
                if (!string.IsNullOrEmpty(dto.IdDocumentNumber))
                {
                    var dupeById = await _customerRepo.FindAsync(c => c.IdDocumentNumber == dto.IdDocumentNumber);
                    if (dupeById.Any())
                        return ApiResponse<CustomerDto>.Fail("A customer with this ID document number already exists.");
                }
                else if (dto.DateOfBirth.HasValue)
                {
                    var nameNorm = dto.FullName.Trim().ToLower();
                    var dupeByName = await _customerRepo.FindAsync(c =>
                        c.FullName.ToLower() == nameNorm && c.DateOfBirth == dto.DateOfBirth);
                    if (dupeByName.Any())
                        return ApiResponse<CustomerDto>.Fail("A customer with the same name and date of birth already exists.");
                }
            }

            // Mandatory ID types check
            if (!string.IsNullOrWhiteSpace(mandatoryIdTypes) && !skipDocumentUpload)
            {
                var required = mandatoryIdTypes.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
                if (required.Length > 0 && string.IsNullOrEmpty(dto.IdDocumentType))
                    return ApiResponse<CustomerDto>.Fail($"An ID document is required. Accepted types: {string.Join(", ", required)}.");
                if (required.Length > 0 && !required.Any(r => r.Equals(dto.IdDocumentType, StringComparison.OrdinalIgnoreCase)))
                    return ApiResponse<CustomerDto>.Fail($"ID document type '{dto.IdDocumentType}' is not accepted. Accepted types: {string.Join(", ", required)}.");
            }

            // Auto-calculate risk rating based on customer's country
            var riskRating = await CalculateCountryRiskRatingAsync(dto.Country);

            var customer = new Customer
            {
                FullName = dto.FullName,
                Email = dto.Email,
                Phone = dto.Phone,
                DateOfBirth = dto.DateOfBirth.HasValue ? DateTime.SpecifyKind(dto.DateOfBirth.Value, DateTimeKind.Utc) : null,
                Gender = dto.Gender,
                Nationality = dto.Nationality,
                Country = dto.Country,
                City = dto.City,
                State = dto.State,
                PostalCode = dto.PostalCode,
                Address = dto.Address,
                IdDocumentType = dto.IdDocumentType,
                IdDocumentNumber = dto.IdDocumentNumber,
                IsKycVerified = false,
                KycLevel = KycLevel.None,
                RiskRating = riskRating
            };

            await _customerRepo.AddAsync(customer);
            await _unitOfWork.SaveChangesAsync();

            if (!string.IsNullOrEmpty(dto.IdDocumentType) && !string.IsNullOrEmpty(dto.IdDocumentNumber))
            {
                var doc = new CustomerDocument
                {
                    CustomerId = customer.Id,
                    DocumentType = dto.IdDocumentType,
                    DocumentNumber = dto.IdDocumentNumber,
                    IssueDate = dto.DocIssueDate.HasValue ? DateTime.SpecifyKind(dto.DocIssueDate.Value, DateTimeKind.Utc) : null,
                    ExpiryDate = dto.DocExpiryDate.HasValue ? DateTime.SpecifyKind(dto.DocExpiryDate.Value, DateTimeKind.Utc) : null,
                    IssuingCountry = dto.DocIssuingCountry,
                    IsVerified = false
                };
                await _docRepo.AddAsync(doc);
                await _unitOfWork.SaveChangesAsync();
            }

            var docs = await _docRepo.FindAsync(d => d.CustomerId == customer.Id);
            return ApiResponse<CustomerDto>.Ok(MapDto(customer, docs.ToList()), "Customer created.");
        }
        catch (Exception ex)
        {
            return ApiResponse<CustomerDto>.Fail($"Failed to create customer: {ex.InnerException?.Message ?? ex.Message}");
        }
    }

    public async Task<ApiResponse<CustomerDto>> UpdateCustomerAsync(int id, CreateCustomerDto dto)
    {
        var customer = await _customerRepo.GetByIdAsync(id);
        if (customer == null)
            return ApiResponse<CustomerDto>.Fail("Customer not found.");

        if (dto.DateOfBirth.HasValue && dto.DateOfBirth.Value.Date > DateTime.UtcNow.Date)
            return ApiResponse<CustomerDto>.Fail("Date of birth cannot be a future date.");

        customer.FullName = dto.FullName;
        customer.Email = dto.Email;
        customer.Phone = dto.Phone;
        customer.DateOfBirth = dto.DateOfBirth.HasValue ? DateTime.SpecifyKind(dto.DateOfBirth.Value, DateTimeKind.Utc) : null;
        customer.Gender = dto.Gender;
        customer.Nationality = dto.Nationality;
        customer.Country = dto.Country;
        customer.City = dto.City;
        customer.State = dto.State;
        customer.PostalCode = dto.PostalCode;
        customer.Address = dto.Address;
        customer.IdDocumentType = dto.IdDocumentType;
        customer.IdDocumentNumber = dto.IdDocumentNumber;
        customer.UpdatedAt = DateTime.UtcNow;

        // Re-calculate risk rating if country changed
        customer.RiskRating = await CalculateCountryRiskRatingAsync(dto.Country);

        await _customerRepo.UpdateAsync(customer);

        var user = !string.IsNullOrEmpty(customer.UserId) ? await _userRepo.GetByIdAsync(customer.UserId) : null;
        if (user != null)
        {
            user.FullName = dto.FullName;
            if (!string.IsNullOrEmpty(dto.Phone)) user.PhoneNumber = dto.Phone;
            await _userRepo.UpdateAsync(user);
        }

        await _unitOfWork.SaveChangesAsync();

        var docs = await _docRepo.FindAsync(d => d.CustomerId == customer.Id);
        return ApiResponse<CustomerDto>.Ok(MapDto(customer, docs.ToList()), "Customer updated.");
    }

    public async Task<ApiResponse<CustomerDto>> ApproveKycAsync(int customerId)
    {
        var customer = await _customerRepo.GetByIdAsync(customerId);
        if (customer == null)
            return ApiResponse<CustomerDto>.Fail("Customer not found.");

        customer.IsKycVerified = true;
        // Auto-set to Basic if no level set yet
        if (customer.KycLevel == KycLevel.None)
            customer.KycLevel = KycLevel.Basic;
        customer.KycVerifiedAt = DateTime.UtcNow;
        customer.UpdatedAt = DateTime.UtcNow;
        await _customerRepo.UpdateAsync(customer);
        await _unitOfWork.SaveChangesAsync();

        var docs = await _docRepo.FindAsync(d => d.CustomerId == customerId);
        return ApiResponse<CustomerDto>.Ok(MapDto(customer, docs.ToList()), "KYC approved.");
    }

    public async Task<ApiResponse<CustomerDto>> RejectKycAsync(int customerId)
    {
        var customer = await _customerRepo.GetByIdAsync(customerId);
        if (customer == null)
            return ApiResponse<CustomerDto>.Fail("Customer not found.");

        customer.IsKycVerified = false;
        customer.KycLevel = KycLevel.None;
        customer.UpdatedAt = DateTime.UtcNow;
        await _customerRepo.UpdateAsync(customer);
        await _unitOfWork.SaveChangesAsync();

        var docs = await _docRepo.FindAsync(d => d.CustomerId == customerId);
        return ApiResponse<CustomerDto>.Ok(MapDto(customer, docs.ToList()), "KYC rejected.");
    }

    public async Task<ApiResponse<CustomerDto>> SetKycLevelAsync(int customerId, string kycLevel, string approvedByUserId)
    {
        var customer = await _customerRepo.GetByIdAsync(customerId);
        if (customer == null)
            return ApiResponse<CustomerDto>.Fail("Customer not found.");

        if (!Enum.TryParse<KycLevel>(kycLevel, out var level))
            return ApiResponse<CustomerDto>.Fail("Invalid KYC level. Use: None, Basic, Enhanced, Full.");

        customer.KycLevel = level;
        customer.IsKycVerified = level >= KycLevel.Basic;
        customer.KycVerifiedBy = approvedByUserId;
        customer.KycVerifiedAt = DateTime.UtcNow;
        customer.UpdatedAt = DateTime.UtcNow;
        await _customerRepo.UpdateAsync(customer);
        await _unitOfWork.SaveChangesAsync();

        var docs = await _docRepo.FindAsync(d => d.CustomerId == customerId);
        return ApiResponse<CustomerDto>.Ok(MapDto(customer, docs.ToList()), $"KYC level set to {level}.");
    }

    public async Task<ApiResponse<bool>> DeleteCustomerAsync(int id)
    {
        var customer = await _customerRepo.GetByIdAsync(id);
        if (customer == null)
            return ApiResponse<bool>.Fail("Customer not found.");

        await _customerRepo.DeleteAsync(customer);
        await _unitOfWork.SaveChangesAsync();
        return ApiResponse<bool>.Ok(true, "Customer deleted.");
    }

    public async Task<ApiResponse<CustomerDto>> ToggleCustomerStatusAsync(int id)
    {
        var customer = await _customerRepo.GetByIdAsync(id);
        if (customer == null)
            return ApiResponse<CustomerDto>.Fail("Customer not found.");

        customer.IsActive = !customer.IsActive;
        customer.UpdatedAt = DateTime.UtcNow;
        await _customerRepo.UpdateAsync(customer);
        await _unitOfWork.SaveChangesAsync();

        var docs = await _docRepo.FindAsync(d => d.CustomerId == id);
        var status = customer.IsActive ? "enabled" : "disabled";
        return ApiResponse<CustomerDto>.Ok(MapDto(customer, docs.ToList()), $"Customer {status}.");
    }

    /// <summary>
    /// Returns the per-transaction limit for a given KYC tier.
    /// None=0 (blocked), Basic=1000, Enhanced=5000, Full=unlimited (decimal.MaxValue)
    /// </summary>
    public static decimal GetKycTransactionLimit(KycLevel level) => level switch
    {
        KycLevel.None => 0m,
        KycLevel.Basic => 1_000m,
        KycLevel.Enhanced => 5_000m,
        KycLevel.Full => decimal.MaxValue,
        _ => 0m
    };

    /// <summary>
    /// Returns the daily aggregate limit for a given KYC tier.
    /// None=0, Basic=3000, Enhanced=15000, Full=unlimited
    /// </summary>
    public static decimal GetKycDailyLimit(KycLevel level) => level switch
    {
        KycLevel.None => 0m,
        KycLevel.Basic => 3_000m,
        KycLevel.Enhanced => 15_000m,
        KycLevel.Full => decimal.MaxValue,
        _ => 0m
    };

    private async Task<string> CalculateCountryRiskRatingAsync(string country)
    {
        if (string.IsNullOrWhiteSpace(country)) return "Low";

        // Check if the customer's country is in the sanctioned countries list
        var sanctionedCountries = await _sanctionedCountryRepo.FindAsync(
            sc => sc.IsActive && (sc.CountryCode.ToUpper() == country.ToUpper() || sc.CountryName.ToUpper() == country.ToUpper()));

        var match = sanctionedCountries.FirstOrDefault();
        if (match == null) return "Low";

        // Map sanctioned country risk level to customer risk rating
        return match.RiskLevel switch
        {
            "Blocked" => "High",   // Customer from blocked country gets High risk
            "High" => "High",
            "Medium" => "Medium",
            "Low" => "Low",
            _ => "Low"
        };
    }

    private static CustomerDto MapDto(Customer c, List<CustomerDocument> docs) => new()
    {
        Id = c.Id,
        UserId = c.UserId,
        FullName = c.FullName,
        Email = c.Email,
        Phone = c.Phone,
        DateOfBirth = c.DateOfBirth,
        Gender = c.Gender,
        Nationality = c.Nationality,
        Country = c.Country,
        City = c.City,
        State = c.State,
        PostalCode = c.PostalCode,
        Address = c.Address,
        IdDocumentType = c.IdDocumentType,
        IdDocumentNumber = c.IdDocumentNumber,
        IsKycVerified = c.IsKycVerified,
        KycLevel = c.KycLevel.ToString(),
        KycVerifiedAt = c.KycVerifiedAt,
        KycVerifiedBy = c.KycVerifiedBy,
        RiskRating = c.RiskRating,
        IsActive = c.IsActive,
        CreatedAt = c.CreatedAt,
        Documents = docs.Select(d => new CustomerDocumentDto
        {
            Id = d.Id,
            DocumentType = d.DocumentType,
            DocumentNumber = d.DocumentNumber,
            IssueDate = d.IssueDate,
            ExpiryDate = d.ExpiryDate,
            IssuingCountry = d.IssuingCountry,
            IsVerified = d.IsVerified
        }).ToList()
    };
}
