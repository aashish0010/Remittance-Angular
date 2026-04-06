namespace Remittance.Application.DTOs.Agent;

public class AgentBalanceDto
{
    public int AgentId { get; set; }
    public string BusinessName { get; set; } = string.Empty;
    public decimal CreditLimit { get; set; }
    public decimal CurrentBalance { get; set; }
    public decimal AvailableBalance => CreditLimit - CurrentBalance;
}
