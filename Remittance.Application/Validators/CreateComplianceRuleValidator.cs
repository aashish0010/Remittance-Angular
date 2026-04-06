using FluentValidation;
using Remittance.Application.DTOs.Admin;

namespace Remittance.Application.Validators;

public class CreateComplianceRuleValidator : AbstractValidator<CreateComplianceRuleDto>
{
    private static readonly string[] ValidRuleTypes = { "AmountThreshold", "FrequencyLimit", "CountryRestriction", "NameScreening" };
    private static readonly string[] ValidActions = { "Flag", "Block", "Review" };

    public CreateComplianceRuleValidator()
    {
        RuleFor(x => x.RuleName)
            .NotEmpty().WithMessage("Rule name is required.")
            .MaximumLength(200).WithMessage("Rule name must not exceed 200 characters.");

        RuleFor(x => x.RuleType)
            .NotEmpty().WithMessage("Rule type is required.")
            .Must(t => ValidRuleTypes.Contains(t))
            .WithMessage("Rule type must be one of: AmountThreshold, FrequencyLimit, CountryRestriction, NameScreening.");

        RuleFor(x => x.Action)
            .NotEmpty().WithMessage("Action is required.")
            .Must(a => ValidActions.Contains(a))
            .WithMessage("Action must be one of: Flag, Block, Review.");

        RuleFor(x => x.ThresholdAmount)
            .GreaterThan(0).WithMessage("Threshold amount must be greater than zero.")
            .When(x => x.RuleType == "AmountThreshold");

        RuleFor(x => x.MaxTransactionCount)
            .GreaterThan(0).WithMessage("Max transaction count must be greater than zero.")
            .When(x => x.RuleType == "FrequencyLimit");

        RuleFor(x => x.TimePeriodDays)
            .GreaterThan(0).WithMessage("Time period (days) must be greater than zero.")
            .When(x => x.RuleType == "FrequencyLimit");
    }
}
