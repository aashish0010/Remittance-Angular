using Remittance.Domain.Interfaces;
namespace Remittance.Domain.Entities;

public class AgentCommission : ISoftDeletable
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public Agent Agent { get; set; } = null!;
    public string CommissionType { get; set; } = "Percentage"; // Percentage or Flat
    public decimal CommissionValue { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }
}
