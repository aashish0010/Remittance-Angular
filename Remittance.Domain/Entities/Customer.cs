using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.Domain.Entities;

public class Customer : ISoftDeletable
{
    public int Id { get; set; }
    public string? UserId { get; set; }
    public ApplicationUser? User { get; set; }
    public string FullName { get; set; } = string.Empty;
    public DateTime? DateOfBirth { get; set; }
    public string? Gender { get; set; }
    public string? Nationality { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public string Country { get; set; } = string.Empty;
    public string? City { get; set; }
    public string? State { get; set; }
    public string? PostalCode { get; set; }
    public string? Address { get; set; }
    public string? IdDocumentType { get; set; }
    public string? IdDocumentNumber { get; set; }
    public bool IsKycVerified { get; set; }
    public KycLevel KycLevel { get; set; } = KycLevel.None;
    public DateTime? KycVerifiedAt { get; set; }
    public string? KycVerifiedBy { get; set; }
    public string? RiskRating { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    public ICollection<Transaction> SentTransactions { get; set; } = new List<Transaction>();
    public ICollection<CustomerDocument> Documents { get; set; } = new List<CustomerDocument>();
    public ICollection<Receiver> Receivers { get; set; } = new List<Receiver>();
}
