using FluentValidation;
using Remittance.Application.DTOs.Admin;

namespace Remittance.Application.Validators;

public class UpdateAgentValidator : AbstractValidator<UpdateAgentDto>
{
    public UpdateAgentValidator()
    {
        RuleFor(x => x.BusinessName)
            .NotEmpty().WithMessage("Business name is required.")
            .MaximumLength(200).WithMessage("Business name must not exceed 200 characters.");

        RuleFor(x => x.Country)
            .NotEmpty().WithMessage("Country is required.");

        RuleFor(x => x.AgentType)
            .NotEmpty().WithMessage("Agent type is required.")
            .Must(x => x == "SendingAgent" || x == "PayoutAgent")
            .WithMessage("Agent type must be 'SendingAgent' or 'PayoutAgent'.");

        RuleFor(x => x.CreditLimit)
            .GreaterThan(0).WithMessage("Credit limit must be greater than zero.")
            .When(x => x.AgentType == "SendingAgent");

        RuleFor(x => x.FundingType)
            .Must(x => x == "PreFunding" || x == "PostFunding")
            .WithMessage("Funding type must be 'PreFunding' or 'PostFunding'.")
            .When(x => !string.IsNullOrEmpty(x.FundingType));

        RuleFor(x => x.Email)
            .EmailAddress().WithMessage("Invalid email format.")
            .When(x => !string.IsNullOrEmpty(x.Email));
    }
}
