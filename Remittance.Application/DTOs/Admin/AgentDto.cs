namespace Remittance.Application.DTOs.Admin;

public class AgentDto
{
    public int Id { get; set; }
    public string? UserId { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string BusinessName { get; set; } = string.Empty;
    public string? LicenseNumber { get; set; }
    public string Country { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string AgentType { get; set; } = string.Empty;
    public string Status { get; set; } = "Pending";
    public decimal CreditLimit { get; set; }
    public decimal CurrentBalance { get; set; }
    public string? Address { get; set; }
    public string? Currency { get; set; }
    public string FundingType { get; set; } = "PreFunding";
    public string PhoneNumber { get; set; } = string.Empty;
    public bool IsApproved { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateAgentDto
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string BusinessName { get; set; } = string.Empty;
    public string? LicenseNumber { get; set; }
    public string Country { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string AgentType { get; set; } = "SendingAgent";
    public string? Address { get; set; }
    public string? Currency { get; set; }
    public string? FundingType { get; set; }
    public decimal CreditLimit { get; set; }
}

public class UpdateAgentDto
{
    public string BusinessName { get; set; } = string.Empty;
    public string? LicenseNumber { get; set; }
    public string? Address { get; set; }
    public string Country { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string AgentType { get; set; } = "SendingAgent";
    public string? Currency { get; set; }
    public string FundingType { get; set; } = "PreFunding";
    public decimal CreditLimit { get; set; }
    public string? FullName { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
}
