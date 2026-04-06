namespace Remittance.Domain.Exceptions;

/// <summary>
/// Thrown when an optimistic concurrency conflict is detected during a save operation.
/// The Application layer catches this to return a user-friendly error without a direct
/// dependency on EF Core's DbUpdateConcurrencyException.
/// </summary>
public class ConcurrencyException : Exception
{
    public ConcurrencyException(string message, Exception? inner = null)
        : base(message, inner) { }
}
