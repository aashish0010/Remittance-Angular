using FluentValidation;
using Remittance.Application.DTOs.Admin;

namespace Remittance.Application.Validators;

public class CreateAgentLimitAdjustmentValidator : AbstractValidator<CreateAgentLimitAdjustmentDto>
{
    public CreateAgentLimitAdjustmentValidator()
    {
        RuleFor(x => x.AgentId)
            .GreaterThan(0).WithMessage("Agent is required.");

        RuleFor(x => x.Amount)
            .NotEqual(0).WithMessage("Adjustment amount cannot be zero.");

        RuleFor(x => x.DurationDays)
            .GreaterThan(0).WithMessage("Duration must be greater than zero days.")
            .When(x => x.DurationDays.HasValue);
    }
}
