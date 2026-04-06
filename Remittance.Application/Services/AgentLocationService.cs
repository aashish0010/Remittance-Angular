using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class AgentLocationService : IAgentLocationService
{
    private readonly IRepository<AgentPaymentMethod> _paymentMethodRepo;
    private readonly IRepository<AgentLocation> _locationRepo;
    private readonly IRepository<AgentLocationBranch> _branchRepo;
    private readonly IRepository<AgentLocationUser> _userRepo;
    private readonly IRepository<Agent> _agentRepo;
    private readonly IRepository<ApplicationUser> _appUserRepo;
    private readonly IRepository<Role> _roleRepo;
    private readonly IRepository<UserRole> _userRoleRepo;
    private readonly IUnitOfWork _unitOfWork;

    public AgentLocationService(
        IRepository<AgentPaymentMethod> paymentMethodRepo,
        IRepository<AgentLocation> locationRepo,
        IRepository<AgentLocationBranch> branchRepo,
        IRepository<AgentLocationUser> userRepo,
        IRepository<Agent> agentRepo,
        IRepository<ApplicationUser> appUserRepo,
        IRepository<Role> roleRepo,
        IRepository<UserRole> userRoleRepo,
        IUnitOfWork unitOfWork)
    {
        _paymentMethodRepo = paymentMethodRepo;
        _locationRepo = locationRepo;
        _branchRepo = branchRepo;
        _userRepo = userRepo;
        _agentRepo = agentRepo;
        _appUserRepo = appUserRepo;
        _roleRepo = roleRepo;
        _userRoleRepo = userRoleRepo;
        _unitOfWork = unitOfWork;
    }

    private static AgentLocationUserDto MapUserDto(AgentLocationUser u) => new()
    {
        Id = u.Id,
        AgentLocationId = u.AgentLocationId,
        FullName = u.FullName,
        Email = u.Email,
        UserName = u.UserName,
        Phone = u.Phone,
        Role = u.Role,
        IsDefault = u.IsDefault,
        IsActive = u.IsActive,
        CreatedAt = u.CreatedAt
    };

    public async Task<ApiResponse<List<PaymentMethodDto>>> GetPaymentMethodsAsync()
    {
        var methods = await _paymentMethodRepo.GetAllAsync();
        var dtos = methods.Select(m => new PaymentMethodDto
        {
            Id = m.Id,
            Name = m.Name,
            IsActive = m.IsActive
        }).ToList();

        return ApiResponse<List<PaymentMethodDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<List<AgentLocationDto>>> GetLocationsForAgentAsync(int agentId)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<List<AgentLocationDto>>.Fail("Agent not found.");

        var locations = await _locationRepo.FindAsync(l => l.AgentId == agentId);
        var paymentMethods = await _paymentMethodRepo.GetAllAsync();
        var pmLookup = paymentMethods.ToDictionary(p => p.Id, p => p.Name);

        var dtos = new List<AgentLocationDto>();
        foreach (var l in locations.OrderByDescending(l => l.CreatedAt))
        {
            var branches = await _branchRepo.FindAsync(b => b.AgentLocationId == l.Id);
            var users = await _userRepo.FindAsync(u => u.AgentLocationId == l.Id);
            dtos.Add(new AgentLocationDto
            {
                Id = l.Id,
                AgentId = l.AgentId,
                AgentName = agent.BusinessName,
                PaymentMethodId = l.PaymentMethodId,
                PaymentMethodName = pmLookup.GetValueOrDefault(l.PaymentMethodId, "Unknown"),
                LocationName = l.LocationName,
                LocationCode = l.LocationCode,
                Country = l.Country,
                City = l.City,
                Address = l.Address,
                ContactPhone = l.ContactPhone,
                ContactEmail = l.ContactEmail,
                OperatingHours = l.OperatingHours,
                AdditionalInfo = l.AdditionalInfo,
                IsActive = l.IsActive,
                CreatedAt = l.CreatedAt,
                Branches = branches.Select(b => new AgentLocationBranchDto
                {
                    Id = b.Id,
                    AgentLocationId = b.AgentLocationId,
                    BranchName = b.BranchName,
                    BranchCode = b.BranchCode,
                    Address = b.Address,
                    ContactPhone = b.ContactPhone,
                    IsActive = b.IsActive,
                    CreatedAt = b.CreatedAt
                }).ToList(),
                Users = users.OrderByDescending(u => u.IsDefault).ThenBy(u => u.CreatedAt).Select(MapUserDto).ToList()
            });
        }

        return ApiResponse<List<AgentLocationDto>>.Ok(dtos);
    }

    private AgentLocationDto MapLocationDto(AgentLocation location, string agentName, string pmName, List<AgentLocationBranchDto>? branches = null, List<AgentLocationUserDto>? users = null)
    {
        return new AgentLocationDto
        {
            Id = location.Id,
            AgentId = location.AgentId,
            AgentName = agentName,
            PaymentMethodId = location.PaymentMethodId,
            PaymentMethodName = pmName,
            LocationName = location.LocationName,
            LocationCode = location.LocationCode,
            Country = location.Country,
            City = location.City,
            Address = location.Address,
            ContactPhone = location.ContactPhone,
            ContactEmail = location.ContactEmail,
            OperatingHours = location.OperatingHours,
            AdditionalInfo = location.AdditionalInfo,
            IsActive = location.IsActive,
            CreatedAt = location.CreatedAt,
            Branches = branches ?? new(),
            Users = users ?? new()
        };
    }

    public async Task<ApiResponse<AgentLocationDto>> CreateLocationAsync(CreateAgentLocationDto dto)
    {
        var agent = await _agentRepo.GetByIdAsync(dto.AgentId);
        if (agent == null)
            return ApiResponse<AgentLocationDto>.Fail("Agent not found.");

        var pm = await _paymentMethodRepo.GetByIdAsync(dto.PaymentMethodId);
        if (pm == null)
            return ApiResponse<AgentLocationDto>.Fail("Payment method not found.");

        var location = new AgentLocation
        {
            AgentId = dto.AgentId,
            PaymentMethodId = dto.PaymentMethodId,
            LocationName = dto.LocationName,
            LocationCode = dto.LocationCode,
            Country = dto.Country,
            City = dto.City,
            Address = dto.Address,
            ContactPhone = dto.ContactPhone,
            ContactEmail = dto.ContactEmail,
            OperatingHours = dto.OperatingHours,
            AdditionalInfo = dto.AdditionalInfo
        };

        await _locationRepo.AddAsync(location);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentLocationDto>.Ok(MapLocationDto(location, agent.BusinessName, pm.Name), "Location created successfully.");
    }

    public async Task<ApiResponse<AgentLocationDto>> UpdateLocationAsync(int locationId, UpdateAgentLocationDto dto)
    {
        var location = await _locationRepo.GetByIdAsync(locationId);
        if (location == null)
            return ApiResponse<AgentLocationDto>.Fail("Location not found.");

        var pm = await _paymentMethodRepo.GetByIdAsync(dto.PaymentMethodId);
        if (pm == null)
            return ApiResponse<AgentLocationDto>.Fail("Payment method not found.");

        var agent = await _agentRepo.GetByIdAsync(location.AgentId);

        location.PaymentMethodId = dto.PaymentMethodId;
        location.LocationName = dto.LocationName;
        location.LocationCode = dto.LocationCode;
        location.Country = dto.Country;
        location.City = dto.City;
        location.Address = dto.Address;
        location.ContactPhone = dto.ContactPhone;
        location.ContactEmail = dto.ContactEmail;
        location.OperatingHours = dto.OperatingHours;
        location.AdditionalInfo = dto.AdditionalInfo;
        location.UpdatedAt = DateTime.UtcNow;

        await _locationRepo.UpdateAsync(location);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentLocationDto>.Ok(MapLocationDto(location, agent?.BusinessName ?? "", pm.Name), "Location updated successfully.");
    }

    public async Task<ApiResponse<bool>> DeleteLocationAsync(int locationId)
    {
        var location = await _locationRepo.GetByIdAsync(locationId);
        if (location == null)
            return ApiResponse<bool>.Fail("Location not found.");

        // Delete users first
        var users = await _userRepo.FindAsync(u => u.AgentLocationId == locationId);
        foreach (var u in users)
            await _userRepo.DeleteAsync(u);

        // Delete branches
        var branches = await _branchRepo.FindAsync(b => b.AgentLocationId == locationId);
        foreach (var b in branches)
            await _branchRepo.DeleteAsync(b);

        await _locationRepo.DeleteAsync(location);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Location deleted.");
    }

    public async Task<ApiResponse<bool>> ToggleLocationAsync(int locationId)
    {
        var location = await _locationRepo.GetByIdAsync(locationId);
        if (location == null)
            return ApiResponse<bool>.Fail("Location not found.");

        location.IsActive = !location.IsActive;
        location.UpdatedAt = DateTime.UtcNow;
        await _locationRepo.UpdateAsync(location);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, location.IsActive ? "Location activated." : "Location deactivated.");
    }

    // ---- Branches ----

    public async Task<ApiResponse<AgentLocationBranchDto>> CreateBranchAsync(CreateBranchDto dto)
    {
        var location = await _locationRepo.GetByIdAsync(dto.AgentLocationId);
        if (location == null)
            return ApiResponse<AgentLocationBranchDto>.Fail("Location not found.");

        var branch = new AgentLocationBranch
        {
            AgentLocationId = dto.AgentLocationId,
            BranchName = dto.BranchName,
            BranchCode = dto.BranchCode,
            Address = dto.Address,
            ContactPhone = dto.ContactPhone
        };

        await _branchRepo.AddAsync(branch);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentLocationBranchDto>.Ok(new AgentLocationBranchDto
        {
            Id = branch.Id,
            AgentLocationId = branch.AgentLocationId,
            BranchName = branch.BranchName,
            BranchCode = branch.BranchCode,
            Address = branch.Address,
            ContactPhone = branch.ContactPhone,
            IsActive = branch.IsActive,
            CreatedAt = branch.CreatedAt
        }, "Branch added.");
    }

    public async Task<ApiResponse<AgentLocationBranchDto>> UpdateBranchAsync(int branchId, UpdateBranchDto dto)
    {
        var branch = await _branchRepo.GetByIdAsync(branchId);
        if (branch == null)
            return ApiResponse<AgentLocationBranchDto>.Fail("Branch not found.");

        branch.BranchName = dto.BranchName;
        branch.BranchCode = dto.BranchCode;
        branch.Address = dto.Address;
        branch.ContactPhone = dto.ContactPhone;

        await _branchRepo.UpdateAsync(branch);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentLocationBranchDto>.Ok(new AgentLocationBranchDto
        {
            Id = branch.Id,
            AgentLocationId = branch.AgentLocationId,
            BranchName = branch.BranchName,
            BranchCode = branch.BranchCode,
            Address = branch.Address,
            ContactPhone = branch.ContactPhone,
            IsActive = branch.IsActive,
            CreatedAt = branch.CreatedAt
        }, "Branch updated.");
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

    // ---- Location Users ----

    public async Task<ApiResponse<AgentLocationUserDto>> CreateUserAsync(CreateAgentLocationUserDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.Password))
            return ApiResponse<AgentLocationUserDto>.Fail("Password is required.");

        var location = await _locationRepo.GetByIdAsync(dto.AgentLocationId);
        if (location == null)
            return ApiResponse<AgentLocationUserDto>.Fail("Location not found.");

        // Check email uniqueness in ApplicationUser
        var existingAppUsers = await _appUserRepo.FindAsync(u => u.Email == dto.Email);
        if (existingAppUsers.Any())
            return ApiResponse<AgentLocationUserDto>.Fail("A user with this email already exists.");

        // If this is first user or marked as default, ensure only one default
        var existingUsers = await _userRepo.FindAsync(u => u.AgentLocationId == dto.AgentLocationId);
        var isDefault = dto.IsDefault || !existingUsers.Any();

        if (isDefault)
        {
            foreach (var eu in existingUsers.Where(u => u.IsDefault))
            {
                eu.IsDefault = false;
                await _userRepo.UpdateAsync(eu);
            }
        }

        var passwordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password);

        // Create ApplicationUser for login
        var appUser = new ApplicationUser
        {
            FullName = dto.FullName,
            Email = dto.Email,
            UserName = dto.UserName ?? dto.Email,
            PasswordHash = passwordHash,
            PhoneNumber = dto.Phone ?? string.Empty
        };
        await _appUserRepo.AddAsync(appUser);
        await _unitOfWork.SaveChangesAsync();

        // Assign Agent role
        var agentRole = (await _roleRepo.FindAsync(r => r.RoleType == RoleType.Agent && r.Portal == PortalType.Agent)).FirstOrDefault();
        if (agentRole != null)
        {
            await _userRoleRepo.AddAsync(new UserRole { UserId = appUser.Id, RoleId = agentRole.Id });
            await _unitOfWork.SaveChangesAsync();
        }

        // Create AgentLocationUser linked to ApplicationUser
        var user = new AgentLocationUser
        {
            AgentLocationId = dto.AgentLocationId,
            UserId = appUser.Id,
            FullName = dto.FullName,
            Email = dto.Email,
            UserName = dto.UserName,
            PasswordHash = passwordHash,
            Phone = dto.Phone,
            Role = dto.Role,
            IsDefault = isDefault
        };

        await _userRepo.AddAsync(user);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentLocationUserDto>.Ok(MapUserDto(user), "User added.");
    }

    public async Task<ApiResponse<AgentLocationUserDto>> UpdateUserAsync(int userId, UpdateAgentLocationUserDto dto)
    {
        var user = await _userRepo.GetByIdAsync(userId);
        if (user == null)
            return ApiResponse<AgentLocationUserDto>.Fail("User not found.");

        // Handle default toggle
        if (dto.IsDefault && !user.IsDefault)
        {
            var others = await _userRepo.FindAsync(u => u.AgentLocationId == user.AgentLocationId && u.IsDefault);
            foreach (var o in others)
            {
                o.IsDefault = false;
                await _userRepo.UpdateAsync(o);
            }
        }

        user.FullName = dto.FullName;
        user.Email = dto.Email;
        user.UserName = dto.UserName;
        if (!string.IsNullOrEmpty(dto.Password))
            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password);
        user.Phone = dto.Phone;
        user.Role = dto.Role;
        user.IsDefault = dto.IsDefault;
        user.UpdatedAt = DateTime.UtcNow;

        await _userRepo.UpdateAsync(user);

        // Also update linked ApplicationUser
        if (!string.IsNullOrEmpty(user.UserId))
        {
            var appUser = await _appUserRepo.GetByIdAsync(user.UserId);
            if (appUser != null)
            {
                appUser.FullName = dto.FullName;
                appUser.Email = dto.Email;
                appUser.UserName = dto.UserName ?? dto.Email;
                appUser.PhoneNumber = dto.Phone ?? string.Empty;
                if (!string.IsNullOrEmpty(dto.Password))
                    appUser.PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password);
                appUser.UpdatedAt = DateTime.UtcNow;
                await _appUserRepo.UpdateAsync(appUser);
            }
        }

        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<AgentLocationUserDto>.Ok(MapUserDto(user), "User updated.");
    }

    public async Task<ApiResponse<bool>> DeleteUserAsync(int userId)
    {
        var user = await _userRepo.GetByIdAsync(userId);
        if (user == null)
            return ApiResponse<bool>.Fail("User not found.");

        // Deactivate linked ApplicationUser
        if (!string.IsNullOrEmpty(user.UserId))
        {
            var appUser = await _appUserRepo.GetByIdAsync(user.UserId);
            if (appUser != null)
            {
                appUser.IsActive = false;
                appUser.UpdatedAt = DateTime.UtcNow;
                await _appUserRepo.UpdateAsync(appUser);
            }
        }

        await _userRepo.DeleteAsync(user);
        await _unitOfWork.SaveChangesAsync();

        // If deleted user was default, promote next user
        if (user.IsDefault)
        {
            var remaining = await _userRepo.FindAsync(u => u.AgentLocationId == user.AgentLocationId);
            var next = remaining.OrderBy(u => u.CreatedAt).FirstOrDefault();
            if (next != null)
            {
                next.IsDefault = true;
                await _userRepo.UpdateAsync(next);
                await _unitOfWork.SaveChangesAsync();
            }
        }

        return ApiResponse<bool>.Ok(true, "User deleted.");
    }
}
