using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Remittance.API.Helpers;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Infrastructure.Data;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/reports")]
[Authorize]
[MenuPermission("/admin/reports/transactions")]
public class AdminReportController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public AdminReportController(ApplicationDbContext context)
    {
        _context = context;
    }

    private static DateTime ToUtc(DateTime dt)
        => dt.Kind == DateTimeKind.Unspecified ? DateTime.SpecifyKind(dt, DateTimeKind.Utc) : dt.ToUniversalTime();

    // -----------------------------------------------------------------------
    // Agent Statement Report
    // -----------------------------------------------------------------------
    [HttpGet("agent-statement")]
    public async Task<IActionResult> GetAgentStatement(
        [FromQuery] int? agentId,
        [FromQuery] DateTime? startDate,
        [FromQuery] DateTime? endDate)
    {
        var start = startDate.HasValue ? ToUtc(startDate.Value) : DateTime.UtcNow.AddMonths(-1);
        var end = endDate.HasValue ? ToUtc(endDate.Value) : DateTime.UtcNow;
        end = end.Date.AddDays(1); // include full end day
        end = DateTime.SpecifyKind(end, DateTimeKind.Utc);

        // Get agent info
        Domain.Entities.Agent? agent = null;
        if (agentId.HasValue)
            agent = await _context.Agents.FindAsync(agentId.Value);

        // Transactions query
        var txQuery = _context.Transactions
            .Where(t => t.CreatedAt >= start && t.CreatedAt < end);

        if (agentId.HasValue)
            txQuery = txQuery.Where(t => t.AgentId == agentId.Value || t.PayoutAgentId == agentId.Value);

        var transactions = await txQuery.ToListAsync();

        var sentTx = agentId.HasValue
            ? transactions.Where(t => t.AgentId == agentId.Value).ToList()
            : transactions;

        var payoutTx = agentId.HasValue
            ? transactions.Where(t => t.PayoutAgentId == agentId.Value).ToList()
            : new List<Transaction>();

        // Counts by status
        var totalSent = sentTx.Count;
        var completedCount = sentTx.Count(t => t.Status == TransactionStatus.Completed);
        var cancelledCount = sentTx.Count(t => t.Status == TransactionStatus.Cancelled);
        var pendingCount = sentTx.Count(t => t.Status == TransactionStatus.Pending);
        var onHoldCount = sentTx.Count(t => t.Status == TransactionStatus.OnHold);
        var complianceCount = sentTx.Count(t => t.Status == TransactionStatus.Compliance);

        // Financial calculations (non-cancelled only)
        var activeTx = sentTx.Where(t => t.Status != TransactionStatus.Cancelled).ToList();
        var totalSendVolume = activeTx.Sum(t => t.SendAmount);
        var totalReceiveVolume = activeTx.Sum(t => t.ReceiveAmount);

        // Commission breakdown
        var agentCommission = activeTx.Sum(t => t.AgentCommission);
        var payoutAgentCommission = payoutTx
            .Where(t => t.Status != TransactionStatus.Cancelled)
            .Sum(t => t.PayoutAgentCommission);
        var companyCommission = activeTx.Sum(t => t.CompanyCommission);
        var totalCommission = activeTx.Sum(t => t.TotalCommission);

        // FX Gain: margin * sendAmount per transaction (approximate from ExchangeRate margin)
        // We compute from the difference between market rate and applied rate
        var fxGain = 0m;
        foreach (var tx in activeTx)
        {
            if (tx.ExchangeRateApplied > 0 && tx.SendAmount > 0)
            {
                // Find the rate record to get margin
                var rate = await _context.ExchangeRates
                    .Where(r => r.SourceCurrency == tx.SendCurrency
                        && r.DestinationCurrency == tx.ReceiveCurrency
                        && r.IsActive)
                    .FirstOrDefaultAsync();
                if (rate?.Margin != null && rate.Margin > 0)
                {
                    fxGain += tx.SendAmount * rate.Margin.Value;
                }
            }
        }
        fxGain = Math.Round(fxGain, 2);

        var netRevenue = companyCommission + fxGain;

        // Agent balance info
        decimal creditLimit = 0, currentBalance = 0, availableBalance = 0;
        if (agent != null)
        {
            creditLimit = agent.CreditLimit;
            currentBalance = agent.CurrentBalance;
            availableBalance = agent.CreditLimit - agent.CurrentBalance;
        }

        // Ledger entries (credits/debits given to agent)
        var ledgerQuery = _context.AgentLedgerEntries
            .Where(le => le.CreatedAt >= start && le.CreatedAt < end);
        if (agentId.HasValue)
            ledgerQuery = ledgerQuery.Where(le => le.AgentId == agentId.Value);

        var ledgerEntries = await ledgerQuery.OrderByDescending(le => le.CreatedAt).ToListAsync();
        var totalCreditsGiven = ledgerEntries.Where(le => le.EntryType == "Credit").Sum(le => le.Amount);
        var totalDebits = ledgerEntries.Where(le => le.EntryType == "Debit").Sum(le => le.Amount);

        return Ok(new
        {
            success = true,
            data = new
            {
                agentId = agent?.Id,
                agentName = agent?.BusinessName ?? "All Agents",
                startDate = start,
                endDate = end.AddDays(-1),

                // Balance
                creditLimit,
                currentBalance,
                availableBalance,

                // Transaction counts
                totalTransactionsSent = totalSent,
                completedCount,
                cancelledCount,
                pendingCount,
                onHoldCount,
                complianceCount,

                // Volumes
                totalSendVolume,
                totalReceiveVolume,

                // Commission
                agentCommission,
                payoutAgentCommission,
                companyCommission,
                totalCommission,

                // Credits & Debits
                creditGiven = totalCreditsGiven,
                debitGiven = totalDebits,

                // Revenue
                fxGain,
                netRevenue,

                // Ledger entries
                ledgerEntries = ledgerEntries.Select(le => new
                {
                    le.Id,
                    le.AgentId,
                    le.TransactionId,
                    le.EntryType,
                    le.Amount,
                    le.BalanceAfter,
                    le.Description,
                    le.CreatedAt
                })
            }
        });
    }

    // -----------------------------------------------------------------------
    // Credit/Debit Agent Balance (Journal Voucher)
    // -----------------------------------------------------------------------
    [HttpPost("agent-balance-entry")]
    public async Task<IActionResult> CreateBalanceEntry([FromBody] CreateBalanceEntryDto dto)
    {
        var agent = await _context.Agents.FindAsync(dto.AgentId);
        if (agent == null) return BadRequest(new { success = false, message = "Agent not found." });

        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "";

        if (dto.EntryType == "Credit")
        {
            agent.CurrentBalance -= dto.Amount; // Credit reduces used balance (increases available)
        }
        else if (dto.EntryType == "Debit")
        {
            agent.CurrentBalance += dto.Amount; // Debit increases used balance
        }
        else
        {
            return BadRequest(new { success = false, message = "EntryType must be 'Credit' or 'Debit'." });
        }

        agent.UpdatedAt = DateTime.UtcNow;

        var entry = new AgentLedgerEntry
        {
            AgentId = dto.AgentId,
            EntryType = dto.EntryType,
            Amount = dto.Amount,
            BalanceAfter = agent.CurrentBalance,
            Description = dto.Description,
            CreatedByUserId = userId
        };

        _context.AgentLedgerEntries.Add(entry);
        await _context.SaveChangesAsync();

        return Ok(new
        {
            success = true,
            message = $"{dto.EntryType} of {dto.Amount} applied successfully.",
            data = new
            {
                entry.Id,
                entry.AgentId,
                entry.EntryType,
                entry.Amount,
                entry.BalanceAfter,
                entry.Description,
                entry.CreatedAt,
                agentCurrentBalance = agent.CurrentBalance,
                agentAvailableBalance = agent.CreditLimit - agent.CurrentBalance
            }
        });
    }

    // -----------------------------------------------------------------------
    // Transaction Report
    // -----------------------------------------------------------------------
    [HttpGet("transactions")]
    public async Task<IActionResult> GetTransactionReport(
        [FromQuery] DateTime? startDate,
        [FromQuery] DateTime? endDate,
        [FromQuery] int? agentId,
        [FromQuery] string? status,
        [FromQuery] string? country)
    {
        var start = startDate.HasValue ? ToUtc(startDate.Value) : DateTime.UtcNow.AddMonths(-1);
        var end = endDate.HasValue ? ToUtc(endDate.Value) : DateTime.UtcNow;
        end = DateTime.SpecifyKind(end.Date.AddDays(1), DateTimeKind.Utc);

        var query = _context.Transactions
            .Where(t => t.CreatedAt >= start && t.CreatedAt < end);

        if (agentId.HasValue)
            query = query.Where(t => t.AgentId == agentId.Value || t.PayoutAgentId == agentId.Value);
        if (!string.IsNullOrEmpty(status) && Enum.TryParse<TransactionStatus>(status, out var st))
            query = query.Where(t => t.Status == st);
        if (!string.IsNullOrEmpty(country))
            query = query.Where(t => t.SenderCountry == country || t.ReceiverCountry == country);

        var transactions = await query.OrderByDescending(t => t.CreatedAt).ToListAsync();

        return Ok(new
        {
            success = true,
            data = new
            {
                totalCount = transactions.Count,
                totalSendVolume = transactions.Where(t => t.Status != TransactionStatus.Cancelled).Sum(t => t.SendAmount),
                totalReceiveVolume = transactions.Where(t => t.Status != TransactionStatus.Cancelled).Sum(t => t.ReceiveAmount),
                totalCommission = transactions.Where(t => t.Status != TransactionStatus.Cancelled).Sum(t => t.TotalCommission),
                transactions = transactions.Select(t => new
                {
                    t.Id,
                    t.ReferenceNumber,
                    t.SenderName,
                    t.SenderCountry,
                    t.ReceiverName,
                    t.ReceiverCountry,
                    t.SendAmount,
                    t.SendCurrency,
                    t.ReceiveAmount,
                    t.ReceiveCurrency,
                    t.ExchangeRateApplied,
                    t.TotalCommission,
                    t.AgentCommission,
                    t.PayoutAgentCommission,
                    t.CompanyCommission,
                    Status = t.Status.ToString(),
                    t.SendingAgentName,
                    t.PayoutAgentName,
                    t.PaymentMethodName,
                    t.PayoutMethodName,
                    t.CreatedAt,
                    t.CompletedAt
                })
            }
        });
    }

    // -----------------------------------------------------------------------
    // Commission Report
    // -----------------------------------------------------------------------
    [HttpGet("commissions")]
    public async Task<IActionResult> GetCommissionReport(
        [FromQuery] DateTime? startDate,
        [FromQuery] DateTime? endDate,
        [FromQuery] int? agentId)
    {
        var start = startDate.HasValue ? ToUtc(startDate.Value) : DateTime.UtcNow.AddMonths(-1);
        var end = endDate.HasValue ? ToUtc(endDate.Value) : DateTime.UtcNow;
        end = DateTime.SpecifyKind(end.Date.AddDays(1), DateTimeKind.Utc);

        var earningsQuery = _context.AgentEarnings
            .Where(e => e.CreatedAt >= start && e.CreatedAt < end);

        if (agentId.HasValue)
            earningsQuery = earningsQuery.Where(e => e.AgentId == agentId.Value);

        var earnings = await earningsQuery.ToListAsync();

        // Group by agent
        var agentIds = earnings.Select(e => e.AgentId).Distinct().ToList();
        var agents = await _context.Agents.Where(a => agentIds.Contains(a.Id)).ToListAsync();

        var agentSummaries = agentIds.Select(aid =>
        {
            var agentEarnings = earnings.Where(e => e.AgentId == aid).ToList();
            var ag = agents.FirstOrDefault(a => a.Id == aid);
            return new
            {
                agentId = aid,
                agentName = ag?.BusinessName ?? "Unknown",
                agentType = ag?.AgentType.ToString() ?? "",
                totalEarnings = agentEarnings.Where(e => !e.IsReversed).Sum(e => e.Amount),
                reversedAmount = agentEarnings.Where(e => e.IsReversed).Sum(e => e.Amount),
                netEarnings = agentEarnings.Where(e => !e.IsReversed).Sum(e => e.Amount),
                sendingCommission = agentEarnings.Where(e => e.EarningType == "SendingCommission" && !e.IsReversed).Sum(e => e.Amount),
                payoutCommission = agentEarnings.Where(e => e.EarningType == "PayoutCommission" && !e.IsReversed).Sum(e => e.Amount),
                transactionCount = agentEarnings.Where(e => !e.IsReversed).Select(e => e.TransactionId).Distinct().Count()
            };
        }).OrderByDescending(a => a.totalEarnings).ToList();

        return Ok(new
        {
            success = true,
            data = new
            {
                totalEarnings = earnings.Where(e => !e.IsReversed).Sum(e => e.Amount),
                totalReversed = earnings.Where(e => e.IsReversed).Sum(e => e.Amount),
                agentSummaries
            }
        });
    }

    // -----------------------------------------------------------------------
    // Revenue Report
    // -----------------------------------------------------------------------
    [HttpGet("revenue")]
    public async Task<IActionResult> GetRevenueReport(
        [FromQuery] DateTime? startDate,
        [FromQuery] DateTime? endDate)
    {
        var start = startDate.HasValue ? ToUtc(startDate.Value) : DateTime.UtcNow.AddMonths(-1);
        var end = endDate.HasValue ? ToUtc(endDate.Value) : DateTime.UtcNow;
        end = DateTime.SpecifyKind(end.Date.AddDays(1), DateTimeKind.Utc);

        var transactions = await _context.Transactions
            .Where(t => t.CreatedAt >= start && t.CreatedAt < end && t.Status != TransactionStatus.Cancelled)
            .ToListAsync();

        var companyCommission = transactions.Sum(t => t.CompanyCommission);
        var totalCommission = transactions.Sum(t => t.TotalCommission);
        var agentCommission = transactions.Sum(t => t.AgentCommission);
        var payoutCommission = transactions.Sum(t => t.PayoutAgentCommission);
        var totalVolume = transactions.Sum(t => t.SendAmount);

        // FX Gain estimation
        var fxGain = 0m;
        var rates = await _context.ExchangeRates.Where(r => r.IsActive).ToListAsync();
        foreach (var tx in transactions)
        {
            var rate = rates.FirstOrDefault(r =>
                r.SourceCurrency == tx.SendCurrency && r.DestinationCurrency == tx.ReceiveCurrency);
            if (rate?.Margin > 0)
                fxGain += tx.SendAmount * rate.Margin.Value;
        }
        fxGain = Math.Round(fxGain, 2);

        // Group by month
        var monthlyBreakdown = transactions
            .GroupBy(t => new { t.CreatedAt.Year, t.CreatedAt.Month })
            .Select(g => new
            {
                year = g.Key.Year,
                month = g.Key.Month,
                transactionCount = g.Count(),
                volume = g.Sum(t => t.SendAmount),
                totalCommission = g.Sum(t => t.TotalCommission),
                companyCommission = g.Sum(t => t.CompanyCommission),
                agentCommission = g.Sum(t => t.AgentCommission),
                payoutCommission = g.Sum(t => t.PayoutAgentCommission)
            })
            .OrderBy(m => m.year).ThenBy(m => m.month)
            .ToList();

        // Group by corridor (country pair)
        var corridorBreakdown = transactions
            .GroupBy(t => $"{t.SenderCountry} → {t.ReceiverCountry}")
            .Select(g => new
            {
                corridor = g.Key,
                transactionCount = g.Count(),
                volume = g.Sum(t => t.SendAmount),
                commission = g.Sum(t => t.CompanyCommission)
            })
            .OrderByDescending(c => c.volume)
            .ToList();

        return Ok(new
        {
            success = true,
            data = new
            {
                totalVolume,
                totalCommission,
                companyCommission,
                agentCommission,
                payoutCommission,
                fxGain,
                netRevenue = companyCommission + fxGain,
                transactionCount = transactions.Count,
                monthlyBreakdown,
                corridorBreakdown
            }
        });
    }

    // -----------------------------------------------------------------------
    // Settlement Report
    // -----------------------------------------------------------------------
    [HttpGet("settlement")]
    public async Task<IActionResult> GetSettlementReport(
        [FromQuery] DateTime? startDate,
        [FromQuery] DateTime? endDate)
    {
        var start = startDate.HasValue ? ToUtc(startDate.Value) : DateTime.UtcNow.AddMonths(-1);
        var end = endDate.HasValue ? ToUtc(endDate.Value) : DateTime.UtcNow;
        end = DateTime.SpecifyKind(end.Date.AddDays(1), DateTimeKind.Utc);

        var agents = await _context.Agents.Where(a => a.IsActive).ToListAsync();
        var transactions = await _context.Transactions
            .Where(t => t.CreatedAt >= start && t.CreatedAt < end && t.Status != TransactionStatus.Cancelled)
            .ToListAsync();

        var earnings = await _context.AgentEarnings
            .Where(e => e.CreatedAt >= start && e.CreatedAt < end && !e.IsReversed)
            .ToListAsync();

        var ledger = await _context.AgentLedgerEntries
            .Where(le => le.CreatedAt >= start && le.CreatedAt < end)
            .ToListAsync();

        var settlements = agents.Select(a =>
        {
            var agentTx = transactions.Where(t => t.AgentId == a.Id).ToList();
            var payoutTx = transactions.Where(t => t.PayoutAgentId == a.Id).ToList();
            var agentEarnings = earnings.Where(e => e.AgentId == a.Id).Sum(e => e.Amount);
            var credits = ledger.Where(le => le.AgentId == a.Id && le.EntryType == "Credit").Sum(le => le.Amount);
            var debits = ledger.Where(le => le.AgentId == a.Id && le.EntryType == "Debit").Sum(le => le.Amount);
            var sendVolume = agentTx.Sum(t => t.SendAmount);

            return new
            {
                agentId = a.Id,
                agentName = a.BusinessName,
                agentType = a.AgentType.ToString(),
                creditLimit = a.CreditLimit,
                currentBalance = a.CurrentBalance,
                availableBalance = a.CreditLimit - a.CurrentBalance,
                transactionsSent = agentTx.Count,
                transactionsAsPayout = payoutTx.Count,
                sendVolume,
                commissionEarned = agentEarnings,
                creditsReceived = credits,
                debitsApplied = debits,
                netPosition = credits - debits - sendVolume + agentEarnings
            };
        })
        .OrderByDescending(s => s.sendVolume)
        .ToList();

        return Ok(new
        {
            success = true,
            data = new
            {
                totalAgents = settlements.Count,
                totalSendVolume = settlements.Sum(s => s.sendVolume),
                totalCommissionPaid = settlements.Sum(s => s.commissionEarned),
                settlements
            }
        });
    }

    // -----------------------------------------------------------------------
    // Agents List (for dropdown filter)
    // -----------------------------------------------------------------------
    [HttpGet("agents-list")]
    public async Task<IActionResult> GetAgentsList()
    {
        var agents = await _context.Agents
            .Where(a => a.IsActive)
            .Select(a => new { a.Id, a.BusinessName, agentType = a.AgentType.ToString() })
            .OrderBy(a => a.BusinessName)
            .ToListAsync();

        return Ok(new { success = true, data = agents });
    }

    // -----------------------------------------------------------------------
    // Export: Transaction Report
    // -----------------------------------------------------------------------
    [HttpGet("transactions/export")]
    public async Task<IActionResult> ExportTransactionReport(
        [FromQuery] string format = "excel",
        [FromQuery] DateTime? startDate = null,
        [FromQuery] DateTime? endDate = null,
        [FromQuery] int? agentId = null,
        [FromQuery] string? status = null,
        [FromQuery] string? country = null)
    {
        var start = startDate.HasValue ? ToUtc(startDate.Value) : DateTime.UtcNow.AddMonths(-1);
        var end = endDate.HasValue ? ToUtc(endDate.Value) : DateTime.UtcNow;
        end = DateTime.SpecifyKind(end.Date.AddDays(1), DateTimeKind.Utc);

        var query = _context.Transactions
            .Where(t => t.CreatedAt >= start && t.CreatedAt < end);

        if (agentId.HasValue)
            query = query.Where(t => t.AgentId == agentId.Value || t.PayoutAgentId == agentId.Value);
        if (!string.IsNullOrEmpty(status) && Enum.TryParse<TransactionStatus>(status, out var st))
            query = query.Where(t => t.Status == st);
        if (!string.IsNullOrEmpty(country))
            query = query.Where(t => t.SenderCountry == country || t.ReceiverCountry == country);

        var transactions = await query.OrderByDescending(t => t.CreatedAt).ToListAsync();

        var data = transactions.Select(t => new
        {
            t.Id, t.ReferenceNumber, t.SenderName, t.SenderCountry,
            t.ReceiverName, t.ReceiverCountry, t.SendAmount, t.SendCurrency,
            t.ReceiveAmount, t.ReceiveCurrency, t.ExchangeRateApplied,
            t.TotalCommission, t.AgentCommission, t.PayoutAgentCommission,
            t.CompanyCommission, Status = t.Status.ToString(),
            t.SendingAgentName, t.PayoutAgentName, t.PaymentMethodName,
            t.PayoutMethodName, t.CreatedAt, t.CompletedAt
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "transaction-report.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "TransactionReport");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "transaction-report.xlsx");
    }

    // -----------------------------------------------------------------------
    // Export: Commission Report
    // -----------------------------------------------------------------------
    [HttpGet("commissions/export")]
    public async Task<IActionResult> ExportCommissionReport(
        [FromQuery] string format = "excel",
        [FromQuery] DateTime? startDate = null,
        [FromQuery] DateTime? endDate = null,
        [FromQuery] int? agentId = null)
    {
        var start = startDate.HasValue ? ToUtc(startDate.Value) : DateTime.UtcNow.AddMonths(-1);
        var end = endDate.HasValue ? ToUtc(endDate.Value) : DateTime.UtcNow;
        end = DateTime.SpecifyKind(end.Date.AddDays(1), DateTimeKind.Utc);

        var earningsQuery = _context.AgentEarnings
            .Where(e => e.CreatedAt >= start && e.CreatedAt < end);

        if (agentId.HasValue)
            earningsQuery = earningsQuery.Where(e => e.AgentId == agentId.Value);

        var earnings = await earningsQuery.ToListAsync();
        var agentIds = earnings.Select(e => e.AgentId).Distinct().ToList();
        var agents = await _context.Agents.Where(a => agentIds.Contains(a.Id)).ToListAsync();

        var data = agentIds.Select(aid =>
        {
            var agentEarnings = earnings.Where(e => e.AgentId == aid).ToList();
            var ag = agents.FirstOrDefault(a => a.Id == aid);
            return new
            {
                AgentId = aid,
                AgentName = ag?.BusinessName ?? "Unknown",
                AgentType = ag?.AgentType.ToString() ?? "",
                TotalEarnings = agentEarnings.Where(e => !e.IsReversed).Sum(e => e.Amount),
                ReversedAmount = agentEarnings.Where(e => e.IsReversed).Sum(e => e.Amount),
                NetEarnings = agentEarnings.Where(e => !e.IsReversed).Sum(e => e.Amount),
                SendingCommission = agentEarnings.Where(e => e.EarningType == "SendingCommission" && !e.IsReversed).Sum(e => e.Amount),
                PayoutCommission = agentEarnings.Where(e => e.EarningType == "PayoutCommission" && !e.IsReversed).Sum(e => e.Amount),
                TransactionCount = agentEarnings.Where(e => !e.IsReversed).Select(e => e.TransactionId).Distinct().Count()
            };
        }).OrderByDescending(a => a.TotalEarnings).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "commission-report.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "CommissionReport");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "commission-report.xlsx");
    }

    // -----------------------------------------------------------------------
    // Export: Settlement Report
    // -----------------------------------------------------------------------
    [HttpGet("settlement/export")]
    public async Task<IActionResult> ExportSettlementReport(
        [FromQuery] string format = "excel",
        [FromQuery] DateTime? startDate = null,
        [FromQuery] DateTime? endDate = null)
    {
        var start = startDate.HasValue ? ToUtc(startDate.Value) : DateTime.UtcNow.AddMonths(-1);
        var end = endDate.HasValue ? ToUtc(endDate.Value) : DateTime.UtcNow;
        end = DateTime.SpecifyKind(end.Date.AddDays(1), DateTimeKind.Utc);

        var agents = await _context.Agents.Where(a => a.IsActive).ToListAsync();
        var transactions = await _context.Transactions
            .Where(t => t.CreatedAt >= start && t.CreatedAt < end && t.Status != TransactionStatus.Cancelled)
            .ToListAsync();

        var earningsData = await _context.AgentEarnings
            .Where(e => e.CreatedAt >= start && e.CreatedAt < end && !e.IsReversed)
            .ToListAsync();

        var ledger = await _context.AgentLedgerEntries
            .Where(le => le.CreatedAt >= start && le.CreatedAt < end)
            .ToListAsync();

        var data = agents.Select(a =>
        {
            var agentTx = transactions.Where(t => t.AgentId == a.Id).ToList();
            var payoutTx = transactions.Where(t => t.PayoutAgentId == a.Id).ToList();
            var agentEarnings = earningsData.Where(e => e.AgentId == a.Id).Sum(e => e.Amount);
            var credits = ledger.Where(le => le.AgentId == a.Id && le.EntryType == "Credit").Sum(le => le.Amount);
            var debits = ledger.Where(le => le.AgentId == a.Id && le.EntryType == "Debit").Sum(le => le.Amount);
            var sendVolume = agentTx.Sum(t => t.SendAmount);

            return new
            {
                AgentId = a.Id,
                AgentName = a.BusinessName,
                AgentType = a.AgentType.ToString(),
                CreditLimit = a.CreditLimit,
                CurrentBalance = a.CurrentBalance,
                AvailableBalance = a.CreditLimit - a.CurrentBalance,
                TransactionsSent = agentTx.Count,
                TransactionsAsPayout = payoutTx.Count,
                SendVolume = sendVolume,
                CommissionEarned = agentEarnings,
                CreditsReceived = credits,
                DebitsApplied = debits,
                NetPosition = credits - debits - sendVolume + agentEarnings
            };
        }).OrderByDescending(s => s.SendVolume).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "settlement-report.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "SettlementReport");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "settlement-report.xlsx");
    }

    // -----------------------------------------------------------------------
    // Export: Revenue Report
    // -----------------------------------------------------------------------
    [HttpGet("revenue/export")]
    public async Task<IActionResult> ExportRevenueReport(
        [FromQuery] string format = "excel",
        [FromQuery] DateTime? startDate = null,
        [FromQuery] DateTime? endDate = null)
    {
        var start = startDate.HasValue ? ToUtc(startDate.Value) : DateTime.UtcNow.AddMonths(-1);
        var end = endDate.HasValue ? ToUtc(endDate.Value) : DateTime.UtcNow;
        end = DateTime.SpecifyKind(end.Date.AddDays(1), DateTimeKind.Utc);

        var transactions = await _context.Transactions
            .Where(t => t.CreatedAt >= start && t.CreatedAt < end && t.Status != TransactionStatus.Cancelled)
            .ToListAsync();

        var data = transactions
            .GroupBy(t => new { t.CreatedAt.Year, t.CreatedAt.Month })
            .Select(g => new
            {
                Year = g.Key.Year,
                Month = g.Key.Month,
                TransactionCount = g.Count(),
                Volume = g.Sum(t => t.SendAmount),
                TotalCommission = g.Sum(t => t.TotalCommission),
                CompanyCommission = g.Sum(t => t.CompanyCommission),
                AgentCommission = g.Sum(t => t.AgentCommission),
                PayoutCommission = g.Sum(t => t.PayoutAgentCommission)
            })
            .OrderBy(m => m.Year).ThenBy(m => m.Month)
            .ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "revenue-report.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "RevenueReport");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "revenue-report.xlsx");
    }

    // -----------------------------------------------------------------------
    // Export: Agent Statement Report
    // -----------------------------------------------------------------------
    [HttpGet("agent-statement/export")]
    public async Task<IActionResult> ExportAgentStatement(
        [FromQuery] string format = "excel",
        [FromQuery] int? agentId = null,
        [FromQuery] DateTime? startDate = null,
        [FromQuery] DateTime? endDate = null)
    {
        var start = startDate.HasValue ? ToUtc(startDate.Value) : DateTime.UtcNow.AddMonths(-1);
        var end = endDate.HasValue ? ToUtc(endDate.Value) : DateTime.UtcNow;
        end = end.Date.AddDays(1);
        end = DateTime.SpecifyKind(end, DateTimeKind.Utc);

        var ledgerQuery = _context.AgentLedgerEntries
            .Where(le => le.CreatedAt >= start && le.CreatedAt < end);
        if (agentId.HasValue)
            ledgerQuery = ledgerQuery.Where(le => le.AgentId == agentId.Value);

        var ledgerEntries = await ledgerQuery.OrderByDescending(le => le.CreatedAt).ToListAsync();

        var data = ledgerEntries.Select(le => new
        {
            le.Id, le.AgentId, le.TransactionId, le.EntryType,
            le.Amount, le.BalanceAfter, le.Description, le.CreatedAt
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "agent-statement.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "AgentStatement");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "agent-statement.xlsx");
    }
}

public class CreateBalanceEntryDto
{
    public int AgentId { get; set; }
    public string EntryType { get; set; } = string.Empty; // "Credit" or "Debit"
    public decimal Amount { get; set; }
    public string? Description { get; set; }
}
