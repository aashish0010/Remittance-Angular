namespace Remittance.Application.DTOs.Admin;

public class CustomerDto
{
    public int Id { get; set; }
    public string UserId { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public string? Gender { get; set; }
    public string? Nationality { get; set; }
    public string Country { get; set; } = string.Empty;
    public string? City { get; set; }
    public string? State { get; set; }
    public string? PostalCode { get; set; }
    public string? Address { get; set; }
    public string? IdDocumentType { get; set; }
    public string? IdDocumentNumber { get; set; }
    public bool IsKycVerified { get; set; }
    public string KycLevel { get; set; } = "None";
    public DateTime? KycVerifiedAt { get; set; }
    public string? KycVerifiedBy { get; set; }
    public string? RiskRating { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<CustomerDocumentDto> Documents { get; set; } = new();
}

public class CustomerDocumentDto
{
    public int Id { get; set; }
    public string DocumentType { get; set; } = string.Empty;
    public string DocumentNumber { get; set; } = string.Empty;
    public DateTime? IssueDate { get; set; }
    public DateTime? ExpiryDate { get; set; }
    public string? IssuingCountry { get; set; }
    public bool IsVerified { get; set; }
}

public class CreateCustomerDto
{
    public string FullName { get; set; } = string.Empty;
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public string? Gender { get; set; }
    public string? Nationality { get; set; }
    public string Country { get; set; } = string.Empty;
    public string? City { get; set; }
    public string? State { get; set; }
    public string? PostalCode { get; set; }
    public string? Address { get; set; }
    public string? IdDocumentType { get; set; }
    public string? IdDocumentNumber { get; set; }
    public DateTime? DocIssueDate { get; set; }
    public DateTime? DocExpiryDate { get; set; }
    public string? DocIssuingCountry { get; set; }
}

public class SetKycLevelDto
{
    public string KycLevel { get; set; } = string.Empty;
}
