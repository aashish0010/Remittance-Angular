using System.Text.RegularExpressions;
using FluentValidation;
using Remittance.Application.DTOs.Admin;

namespace Remittance.Application.Validators;

public class CreateCustomerValidator : AbstractValidator<CreateCustomerDto>
{
    // Allows letters (unicode), spaces, hyphens, apostrophes, dots, commas — no other special chars
    private static readonly Regex SafeNameRegex = new(@"^[\p{L}\s\-'.]+$", RegexOptions.Compiled);
    // Allows letters, digits, spaces, hyphens, dots, commas, slashes, #
    private static readonly Regex SafeAddressRegex = new(@"^[\p{L}\d\s\-'.,/#]+$", RegexOptions.Compiled);
    // Allows digits, +, -, spaces, parentheses
    private static readonly Regex SafePhoneRegex = new(@"^[\d\s\+\-()]+$", RegexOptions.Compiled);
    // Allows alphanumeric and hyphens for document numbers
    private static readonly Regex SafeDocNumberRegex = new(@"^[\p{L}\d\s\-]+$", RegexOptions.Compiled);
    // Allows alphanumeric for postal codes
    private static readonly Regex SafePostalCodeRegex = new(@"^[\p{L}\d\s\-]+$", RegexOptions.Compiled);

    public CreateCustomerValidator()
    {
        RuleFor(x => x.FullName)
            .NotEmpty().WithMessage("Full name is required.")
            .MaximumLength(150).WithMessage("Full name must not exceed 150 characters.")
            .Matches(SafeNameRegex).WithMessage("Full name contains invalid characters.");

        RuleFor(x => x.Phone)
            .NotEmpty().WithMessage("Phone number is required.")
            .MaximumLength(20).WithMessage("Phone number must not exceed 20 characters.")
            .Matches(SafePhoneRegex).WithMessage("Phone number contains invalid characters.")
            .When(x => !string.IsNullOrEmpty(x.Phone));

        RuleFor(x => x.Country)
            .NotEmpty().WithMessage("Country is required.");

        RuleFor(x => x.Nationality)
            .NotEmpty().WithMessage("Nationality is required.")
            .Matches(SafeNameRegex).WithMessage("Nationality contains invalid characters.")
            .When(x => !string.IsNullOrEmpty(x.Nationality));

        RuleFor(x => x.Email)
            .EmailAddress().WithMessage("Invalid email format.")
            .When(x => !string.IsNullOrEmpty(x.Email));

        RuleFor(x => x.DateOfBirth)
            .LessThan(DateTime.UtcNow).WithMessage("Date of birth must be in the past.")
            .When(x => x.DateOfBirth.HasValue);

        RuleFor(x => x.Gender)
            .Must(g => g == "Male" || g == "Female" || g == "Other")
            .WithMessage("Gender must be 'Male', 'Female', or 'Other'.")
            .When(x => !string.IsNullOrEmpty(x.Gender));

        RuleFor(x => x.City)
            .Matches(SafeNameRegex).WithMessage("City contains invalid characters.")
            .When(x => !string.IsNullOrEmpty(x.City));

        RuleFor(x => x.State)
            .Matches(SafeNameRegex).WithMessage("State contains invalid characters.")
            .When(x => !string.IsNullOrEmpty(x.State));

        RuleFor(x => x.PostalCode)
            .Matches(SafePostalCodeRegex).WithMessage("Postal code contains invalid characters.")
            .When(x => !string.IsNullOrEmpty(x.PostalCode));

        RuleFor(x => x.Address)
            .Matches(SafeAddressRegex).WithMessage("Address contains invalid characters.")
            .When(x => !string.IsNullOrEmpty(x.Address));

        RuleFor(x => x.IdDocumentType)
            .NotEmpty().WithMessage("Document type is required when document number is provided.")
            .When(x => !string.IsNullOrEmpty(x.IdDocumentNumber));

        RuleFor(x => x.IdDocumentNumber)
            .NotEmpty().WithMessage("Document number is required when document type is provided.")
            .Matches(SafeDocNumberRegex).WithMessage("Document number contains invalid characters.")
            .When(x => !string.IsNullOrEmpty(x.IdDocumentType));

        RuleFor(x => x.DocIssueDate)
            .LessThan(DateTime.UtcNow).WithMessage("Document issue date must be in the past.")
            .When(x => x.DocIssueDate.HasValue);

        RuleFor(x => x.DocExpiryDate)
            .GreaterThan(DateTime.UtcNow).WithMessage("Document expiry date must be in the future.")
            .When(x => x.DocExpiryDate.HasValue);
    }
}
