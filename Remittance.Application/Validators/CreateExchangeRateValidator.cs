using FluentValidation;
using Remittance.Application.DTOs.Admin;

namespace Remittance.Application.Validators;

public class CreateExchangeRateValidator : AbstractValidator<CreateExchangeRateDto>
{
    public CreateExchangeRateValidator()
    {
        RuleFor(x => x.SourceCurrency)
            .NotEmpty().WithMessage("Source currency is required.")
            .MaximumLength(3).WithMessage("Currency code must be 3 characters.");

        RuleFor(x => x.DestinationCurrency)
            .NotEmpty().WithMessage("Destination currency is required.")
            .MaximumLength(3).WithMessage("Currency code must be 3 characters.");

        RuleFor(x => x.Rate)
            .GreaterThan(0).WithMessage("Exchange rate must be greater than zero.");

        //RuleFor(x => x.EffectiveFrom)
        //    .NotEmpty().WithMessage("Effective from date is required.");

        RuleFor(x => x)
            .Must(x => x.SourceCurrency != x.DestinationCurrency)
            .WithMessage("Source and destination currencies must be different.");
    }
}
