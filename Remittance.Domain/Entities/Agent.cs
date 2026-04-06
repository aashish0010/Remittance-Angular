using Remittance.Domain.Interfaces;
using Remittance.Domain.Enums;

namespace Remittance.Domain.Entities;

public class Agent : ISoftDeletable
{
    public int Id { get; set; }
    public string? UserId { get; set; }
    public ApplicationUser? User { get; set; }
    public string BusinessName { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string? LicenseNumber { get; set; }
    public string Country { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string? Address { get; set; }
    public string? Currency { get; set; }
    public FundingType FundingType { get; set; } = FundingType.PreFunding;
    public AgentType AgentType { get; set; } = AgentType.SendingAgent;
    public AgentStatus Status { get; set; } = AgentStatus.Pending;
    public decimal CreditLimit { get; set; }
    public decimal CurrentBalance { get; set; }
    public bool IsApproved { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Optimistic concurrency — prevents double-spend when two simultaneous transfers hit the same agent
    public uint RowVersion { get; set; }

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    public ICollection<Transaction> SentTransactions { get; set; } = new List<Transaction>();
    public ICollection<Transaction> PayoutTransactions { get; set; } = new List<Transaction>();
    public ICollection<AgentLocation> Locations { get; set; } = new List<AgentLocation>();
    public ICollection<AgentBank> Banks { get; set; } = new List<AgentBank>();
    public ICollection<AgentEarning> Earnings { get; set; } = new List<AgentEarning>();
}
