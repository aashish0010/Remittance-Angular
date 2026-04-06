using FluentValidation;
using Remittance.Application.DTOs.Admin;

namespace Remittance.Application.Validators;

public class CreateCommissionRateValidator : AbstractValidator<CreateCommissionRateDto>
{
    public CreateCommissionRateValidator()
    {
        RuleFor(x => x.MinAmount)
            .GreaterThanOrEqualTo(0).WithMessage("Minimum amount must be zero or greater.");

        RuleFor(x => x.MaxAmount)
            .GreaterThan(0).WithMessage("Maximum amount must be greater than zero.");

        RuleFor(x => x)
            .Must(x => x.MaxAmount > x.MinAmount)
            .WithMessage("Maximum amount must be greater than minimum amount.");

        RuleFor(x => x.CommissionPercent)
            .InclusiveBetween(0, 100).WithMessage("Commission percent must be between 0 and 100.");

    }
}
