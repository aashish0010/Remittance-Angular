using System.Text.RegularExpressions;
using FluentValidation;
using Remittance.Application.DTOs.Admin;

namespace Remittance.Application.Validators;

public class CreateReceiverValidator : AbstractValidator<CreateReceiverDto>
{
    private static readonly Regex SafeNameRegex = new(@"^[\p{L}\s\-'.]+$", RegexOptions.Compiled);
    private static readonly Regex SafePhoneRegex = new(@"^[\d\s\+\-()]+$", RegexOptions.Compiled);
    private static readonly Regex SafeAlphanumRegex = new(@"^[\p{L}\d\s\-]+$", RegexOptions.Compiled);

    public CreateReceiverValidator()
    {
        RuleFor(x => x.CustomerId)
            .GreaterThan(0).WithMessage("Customer is required.");

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

        RuleFor(x => x.Email)
            .EmailAddress().WithMessage("Invalid email format.")
            .When(x => !string.IsNullOrEmpty(x.Email));

        RuleFor(x => x.City)
            .Matches(SafeNameRegex).WithMessage("City contains invalid characters.")
            .When(x => !string.IsNullOrEmpty(x.City));

        RuleFor(x => x.Relationship)
            .Matches(SafeNameRegex).WithMessage("Relationship contains invalid characters.")
            .When(x => !string.IsNullOrEmpty(x.Relationship));

        RuleFor(x => x.AccountNumber)
            .NotEmpty().WithMessage("Account number is required when bank name is provided.")
            .Matches(SafeAlphanumRegex).WithMessage("Account number contains invalid characters.")
            .When(x => !string.IsNullOrEmpty(x.BankName));

        RuleFor(x => x.BankName)
            .NotEmpty().WithMessage("Bank name is required when account number is provided.")
            .Matches(SafeNameRegex).WithMessage("Bank name contains invalid characters.")
            .When(x => !string.IsNullOrEmpty(x.AccountNumber));
    }
}
