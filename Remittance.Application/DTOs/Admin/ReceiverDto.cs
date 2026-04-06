namespace Remittance.Application.DTOs.Admin;

public class ReceiverDto
{
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public string CustomerName { get; set; } = string.Empty;
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
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateReceiverDto
{
    public int CustomerId { get; set; }
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
}
