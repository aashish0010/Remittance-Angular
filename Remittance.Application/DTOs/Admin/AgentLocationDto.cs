namespace Remittance.Application.DTOs.Admin;

public class PaymentMethodDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public bool IsActive { get; set; }
}

public class AgentLocationDto
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public string AgentName { get; set; } = string.Empty;
    public int PaymentMethodId { get; set; }
    public string PaymentMethodName { get; set; } = string.Empty;
    public string LocationName { get; set; } = string.Empty;
    public string? LocationCode { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public string? ContactEmail { get; set; }
    public string? OperatingHours { get; set; }
    public string? AdditionalInfo { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<AgentLocationBranchDto> Branches { get; set; } = new();
    public List<AgentLocationUserDto> Users { get; set; } = new();
}

public class AgentLocationBranchDto
{
    public int Id { get; set; }
    public int AgentLocationId { get; set; }
    public string BranchName { get; set; } = string.Empty;
    public string? BranchCode { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateAgentLocationDto
{
    public int AgentId { get; set; }
    public int PaymentMethodId { get; set; }
    public string LocationName { get; set; } = string.Empty;
    public string? LocationCode { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public string? ContactEmail { get; set; }
    public string? OperatingHours { get; set; }
    public string? AdditionalInfo { get; set; }
}

public class UpdateAgentLocationDto
{
    public int PaymentMethodId { get; set; }
    public string LocationName { get; set; } = string.Empty;
    public string? LocationCode { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public string? ContactEmail { get; set; }
    public string? OperatingHours { get; set; }
    public string? AdditionalInfo { get; set; }
}

public class CreateBranchDto
{
    public int AgentLocationId { get; set; }
    public string BranchName { get; set; } = string.Empty;
    public string? BranchCode { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
}

public class UpdateBranchDto
{
    public string BranchName { get; set; } = string.Empty;
    public string? BranchCode { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
}
