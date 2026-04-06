using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class DashboardService : IDashboardService
{
    private readonly IRepository<Transaction> _transactionRepo;
    private readonly IRepository<Agent> _agentRepo;
    private readonly IRepository<Customer> _customerRepo;
    private readonly IRepository<ComplianceAlert> _alertRepo;
    private readonly IRepository<ExchangeRate> _rateRepo;
    private readonly IRepository<PaymentCorridor> _corridorRepo;

    public DashboardService(
        IRepository<Transaction> transactionRepo,
        IRepository<Agent> agentRepo,
        IRepository<Customer> customerRepo,
        IRepository<ComplianceAlert> alertRepo,
        IRepository<ExchangeRate> rateRepo,
        IRepository<PaymentCorridor> corridorRepo)
    {
        _transactionRepo = transactionRepo;
        _agentRepo = agentRepo;
        _customerRepo = customerRepo;
        _alertRepo = alertRepo;
        _rateRepo = rateRepo;
        _corridorRepo = corridorRepo;
    }

    public async Task<ApiResponse<DashboardDto>> GetDashboardAsync()
    {
        var now = DateTime.UtcNow;
        var startOfMonth = new DateTime(now.Year, now.Month, 1, 0, 0, 0, DateTimeKind.Utc);
        var startOfLastMonth = startOfMonth.AddMonths(-1);

        // Sequential queries — EF Core DbContext is not thread-safe
        var transactions = (await _transactionRepo.GetAllAsync()).ToList();
        var agents = (await _agentRepo.GetAllAsync()).ToList();
        var customers = (await _customerRepo.GetAllAsync()).ToList();
        var unresolvedAlerts = (await _alertRepo.FindAsync(a => !a.IsResolved)).ToList();
        var activeRates = (await _rateRepo.FindAsync(r => r.IsActive)).ToList();
        var activeCorridors = (await _corridorRepo.FindAsync(c => c.IsActive)).ToList();

        var thisMonthTxns = transactions.Where(t => t.CreatedAt >= startOfMonth).ToList();
        var lastMonthTxns = transactions.Where(t => t.CreatedAt >= startOfLastMonth && t.CreatedAt < startOfMonth).ToList();

        var dto = new DashboardDto
        {
            // Summary
            TotalTransactions = transactions.Count,
            TransactionsThisMonth = thisMonthTxns.Count,
            TransactionsLastMonth = lastMonthTxns.Count,
            TotalVolume = transactions.Sum(t => t.SendAmount),
            VolumeThisMonth = thisMonthTxns.Sum(t => t.SendAmount),
            VolumeLastMonth = lastMonthTxns.Sum(t => t.SendAmount),
            TotalCommissionRevenue = transactions.Sum(t => t.TotalCommission),
            CommissionThisMonth = thisMonthTxns.Sum(t => t.TotalCommission),
            CommissionLastMonth = lastMonthTxns.Sum(t => t.TotalCommission),
            ActiveAgents = agents.Count(a => a.IsActive),
            PendingAgents = agents.Count(a => a.Status == AgentStatus.Pending),
            UnresolvedAlerts = unresolvedAlerts.Count,
            ActiveCorridors = activeCorridors.Count,
            TotalCustomers = customers.Count,

            // Status breakdown
            PendingTransactions = transactions.Count(t => t.Status == TransactionStatus.Pending),
            ProcessingTransactions = transactions.Count(t => t.Status == TransactionStatus.Processing || t.Status == TransactionStatus.Approved),
            CompletedTransactions = transactions.Count(t => t.Status == TransactionStatus.Completed),
            CancelledTransactions = transactions.Count(t => t.Status == TransactionStatus.Cancelled),
            FailedTransactions = transactions.Count(t => t.Status == TransactionStatus.Failed),
            OnHoldTransactions = transactions.Count(t => t.Status == TransactionStatus.OnHold),

            // Recent transactions (last 10)
            RecentTransactions = transactions
                .OrderByDescending(t => t.CreatedAt)
                .Take(10)
                .Select(t => new RecentTransactionDto
                {
                    ReferenceNumber = t.ReferenceNumber,
                    SenderName = t.SenderName,
                    ReceiverName = t.ReceiverName,
                    SendAmount = t.SendAmount,
                    SendCurrency = t.SendCurrency,
                    Status = t.Status.ToString(),
                    CreatedAt = t.CreatedAt
                })
                .ToList(),

            // Active exchange rates
            ActiveExchangeRates = activeRates
                .OrderBy(r => r.SourceCurrency)
                .ThenBy(r => r.DestinationCurrency)
                .Select(r => new ActiveExchangeRateDto
                {
                    SourceCurrency = r.SourceCurrency,
                    DestinationCurrency = r.DestinationCurrency,
                    Rate = r.Rate
                })
                .ToList()
        };

        return ApiResponse<DashboardDto>.Ok(dto);
    }
}
