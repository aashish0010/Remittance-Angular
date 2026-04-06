namespace Remittance.Domain.Entities;

public class CustomerDocument
{
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public Customer Customer { get; set; } = null!;
    public string DocumentType { get; set; } = string.Empty;
    public string DocumentNumber { get; set; } = string.Empty;
    public DateTime? IssueDate { get; set; }
    public DateTime? ExpiryDate { get; set; }
    public string? IssuingCountry { get; set; }
    public bool IsVerified { get; set; }
    public string? FrontImagePath { get; set; }
    public string? BackImagePath { get; set; }
    public int RequiredSides { get; set; } = 1;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
