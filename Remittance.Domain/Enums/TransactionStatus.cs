namespace Remittance.Domain.Enums;

public enum TransactionStatus
{
    Pending = 0,
    Approved = 1,
    Processing = 2,
    Completed = 3,
    Cancelled = 4,
    Failed = 5,
    OnHold = 6,
    Compliance = 7,
    PendingApproval = 8
}
