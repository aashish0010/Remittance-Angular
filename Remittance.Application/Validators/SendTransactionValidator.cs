using FluentValidation;
using Remittance.Application.DTOs.Agent;

namespace Remittance.Application.Validators;

public class SendTransactionValidator : AbstractValidator<SendTransactionDto>
{
    public SendTransactionValidator()
    {
        RuleFor(x => x.SenderName)
            .NotEmpty().WithMessage("Sender name is required.")
            .MaximumLength(100).WithMessage("Sender name must not exceed 100 characters.");

        RuleFor(x => x.SenderPhone)
            .NotEmpty().WithMessage("Sender phone is required.");

        RuleFor(x => x.SenderCountry)
            .NotEmpty().WithMessage("Sender country is required.");

        RuleFor(x => x.ReceiverName)
            .NotEmpty().WithMessage("Receiver name is required.")
            .MaximumLength(100).WithMessage("Receiver name must not exceed 100 characters.");

        RuleFor(x => x.ReceiverPhone)
            .NotEmpty().WithMessage("Receiver phone is required.");

        RuleFor(x => x.ReceiverCountry)
            .NotEmpty().WithMessage("Receiver country is required.");

        RuleFor(x => x.SendAmount)
            .GreaterThan(0).WithMessage("Send amount must be greater than zero.")
            .LessThanOrEqualTo(50000).WithMessage("Send amount must not exceed 50,000.");

        RuleFor(x => x.SendCurrency)
            .NotEmpty().WithMessage("Send currency is required.")
            .MaximumLength(3).WithMessage("Currency code must be 3 characters.");

        RuleFor(x => x.ReceiveCurrency)
            .NotEmpty().WithMessage("Receive currency is required.")
            .MaximumLength(3).WithMessage("Currency code must be 3 characters.");
    }
}
