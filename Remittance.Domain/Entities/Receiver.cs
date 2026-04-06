using Remittance.Domain.Interfaces;
namespace Remittance.Domain.Entities;

public class Receiver : ISoftDeletable
{
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public Customer Customer { get; set; } = null!;
    public string FullName { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string? Email { get; set; }
    public string Country { get; set; } = string.Empty;
    public string? City { get; set; }
    public string? BankName { get; set; }
    public string? BankCode { get; set; }
    public string? AccountNumber { get; set; }
    public string? BranchName { get; set; }
    public string? BranchCode { get; set; }
    public int? BankId { get; set; }
    public int? BranchId { get; set; }
    public string? Relationship { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Soft delete
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }
}
