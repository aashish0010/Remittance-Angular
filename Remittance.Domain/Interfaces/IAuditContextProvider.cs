namespace Remittance.Domain.Interfaces;

public interface IAuditContextProvider
{
    string? UserId { get; }
    string? UserName { get; }
    string? IpAddress { get; }
}
