using Remittance.Domain.Interfaces;
namespace Remittance.Domain.Entities;

public class AgentBankBranch : ISoftDeletable
{
    public int Id { get; set; }
    public int AgentBankId { get; set; }
    public AgentBank AgentBank { get; set; } = null!;
    public string BranchName { get; set; } = string.Empty;
    public string? BranchCode { get; set; }
    public string? SwiftCode { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }
}
