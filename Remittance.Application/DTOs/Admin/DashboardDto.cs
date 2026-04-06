namespace Remittance.Application.DTOs.Admin;

public class DashboardDto
{
    // Summary cards
    public int TotalTransactions { get; set; }
    public int TransactionsThisMonth { get; set; }
    public int TransactionsLastMonth { get; set; }
    public decimal TotalVolume { get; set; }
    public decimal VolumeThisMonth { get; set; }
    public decimal VolumeLastMonth { get; set; }
    public decimal TotalCommissionRevenue { get; set; }
    public decimal CommissionThisMonth { get; set; }
    public decimal CommissionLastMonth { get; set; }
    public int ActiveAgents { get; set; }
    public int PendingAgents { get; set; }
    public int UnresolvedAlerts { get; set; }
    public int ActiveCorridors { get; set; }
    public int TotalCustomers { get; set; }

    // Transaction status breakdown
    public int PendingTransactions { get; set; }
    public int ProcessingTransactions { get; set; }
    public int CompletedTransactions { get; set; }
    public int CancelledTransactions { get; set; }
    public int FailedTransactions { get; set; }
    public int OnHoldTransactions { get; set; }

    // Recent transactions
    public List<RecentTransactionDto> RecentTransactions { get; set; } = new();

    // Active exchange rates
    public List<ActiveExchangeRateDto> ActiveExchangeRates { get; set; } = new();
}

public class RecentTransactionDto
{
    public string ReferenceNumber { get; set; } = string.Empty;
    public string SenderName { get; set; } = string.Empty;
    public string ReceiverName { get; set; } = string.Empty;
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}

public class ActiveExchangeRateDto
{
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public decimal Rate { get; set; }
}
