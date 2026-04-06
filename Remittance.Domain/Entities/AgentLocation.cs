using Remittance.Domain.Interfaces;
namespace Remittance.Domain.Entities;

public class AgentLocation : ISoftDeletable
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public Agent Agent { get; set; } = null!;
    public int PaymentMethodId { get; set; }
    public AgentPaymentMethod PaymentMethod { get; set; } = null!;
    public string LocationName { get; set; } = string.Empty;
    public string? LocationCode { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public string? ContactEmail { get; set; }
    public string? OperatingHours { get; set; }
    public string? AdditionalInfo { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    public ICollection<AgentLocationBranch> Branches { get; set; } = new List<AgentLocationBranch>();
    public ICollection<AgentLocationUser> Users { get; set; } = new List<AgentLocationUser>();
}
