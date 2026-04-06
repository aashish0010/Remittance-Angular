namespace Remittance.Application.DTOs.Admin;

public class AgentBankDto
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public string AgentName { get; set; } = string.Empty;
    public int? PaymentMethodId { get; set; }
    public string? PaymentMethodName { get; set; }
    public string BankName { get; set; } = string.Empty;
    public string? BankCode { get; set; }
    public string? SwiftCode { get; set; }
    public string? RoutingNumber { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public string? ContactEmail { get; set; }
    public string? AdditionalInfo { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<AgentBankBranchDto> Branches { get; set; } = new();
}

public class AgentBankBranchDto
{
    public int Id { get; set; }
    public int AgentBankId { get; set; }
    public string BranchName { get; set; } = string.Empty;
    public string? BranchCode { get; set; }
    public string? SwiftCode { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateAgentBankDto
{
    public int AgentId { get; set; }
    public int? PaymentMethodId { get; set; }
    public string BankName { get; set; } = string.Empty;
    public string? BankCode { get; set; }
    public string? SwiftCode { get; set; }
    public string? RoutingNumber { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public string? ContactEmail { get; set; }
    public string? AdditionalInfo { get; set; }
}

public class UpdateAgentBankDto
{
    public int? PaymentMethodId { get; set; }
    public string BankName { get; set; } = string.Empty;
    public string? BankCode { get; set; }
    public string? SwiftCode { get; set; }
    public string? RoutingNumber { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public string? ContactEmail { get; set; }
    public string? AdditionalInfo { get; set; }
}

public class CreateAgentBankBranchDto
{
    public int AgentBankId { get; set; }
    public string BranchName { get; set; } = string.Empty;
    public string? BranchCode { get; set; }
    public string? SwiftCode { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
}

public class UpdateAgentBankBranchDto
{
    public string BranchName { get; set; } = string.Empty;
    public string? BranchCode { get; set; }
    public string? SwiftCode { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
}
