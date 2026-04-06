using Remittance.Domain.Interfaces;
namespace Remittance.Domain.Entities;

public class AgentBank : ISoftDeletable
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public Agent Agent { get; set; } = null!;
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
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    public ICollection<AgentBankBranch> Branches { get; set; } = new List<AgentBankBranch>();
}
