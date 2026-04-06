namespace Remittance.Application.DTOs.Auth;

public class SetTransactionPinDto
{
    public string Pin { get; set; } = string.Empty;
}

public class VerifyTransactionPinDto
{
    public string Pin { get; set; } = string.Empty;
}
