namespace Remittance.Application.DTOs.Admin;

public class AgentCommissionDto
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public string AgentName { get; set; } = string.Empty;
    public string CommissionType { get; set; } = "Percentage";
    public decimal CommissionValue { get; set; }
    public bool IsActive { get; set; }
}

public class CreateAgentCommissionDto
{
    public int AgentId { get; set; }
    public string CommissionType { get; set; } = "Percentage";
    public decimal CommissionValue { get; set; }
}
