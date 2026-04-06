using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class ComplianceService : IComplianceService
{
    private readonly IRepository<ComplianceAlert> _alertRepo;
    private readonly IRepository<Transaction> _transRepo;
    private readonly IRepository<ComplianceRule> _ruleRepo;
    private readonly IRepository<Domain.Entities.Agent> _agentRepo;
    private readonly IRepository<AgentEarning> _earningRepo;
    private readonly IUnitOfWork _unitOfWork;

    public ComplianceService(
        IRepository<ComplianceAlert> alertRepo,
        IRepository<Transaction> transRepo,
        IRepository<ComplianceRule> ruleRepo,
        IRepository<Domain.Entities.Agent> agentRepo,
        IRepository<AgentEarning> earningRepo,
        IUnitOfWork unitOfWork)
    {
        _alertRepo = alertRepo;
        _transRepo = transRepo;
        _ruleRepo = ruleRepo;
        _agentRepo = agentRepo;
        _earningRepo = earningRepo;
        _unitOfWork = unitOfWork;
    }

    /// <summary>
    /// Checks all active compliance rules against a transaction before sending.
    /// Returns list of violations. If any violation has Action=Block, the transaction must not proceed.
    /// </summary>
    public async Task<ApiResponse<List<ComplianceViolationDto>>> CheckComplianceAsync(ComplianceCheckRequest request)
    {
        var rules = await _ruleRepo.FindAsync(r => r.IsActive);
        var violations = new List<ComplianceViolationDto>();

        foreach (var rule in rules)
        {
            string? violation = await EvaluateRuleAsync(rule, request);
            if (violation != null)
            {
                violations.Add(new ComplianceViolationDto
                {
                    RuleName = rule.RuleName,
                    RuleType = rule.RuleType.ToString(),
                    Action = rule.Action.ToString(),
                    Description = violation
                });
            }
        }

        return ApiResponse<List<ComplianceViolationDto>>.Ok(violations);
    }

    private async Task<string?> EvaluateRuleAsync(ComplianceRule rule, ComplianceCheckRequest request)
    {
        return rule.RuleType switch
        {
            ComplianceRuleType.AmountThreshold => EvaluateAmountThreshold(rule, request),
            ComplianceRuleType.FrequencyLimit => await EvaluateFrequencyLimit(rule, request),
            ComplianceRuleType.CountryRestriction => EvaluateCountryRestriction(rule, request),
            ComplianceRuleType.NameScreening => EvaluateNameScreening(rule, request),
            _ => null
        };
    }

    private static string? EvaluateAmountThreshold(ComplianceRule rule, ComplianceCheckRequest request)
    {
        if (!rule.ThresholdAmount.HasValue) return null;

        // Country filter — skip if rule specifies a country that doesn't match
        if (!string.IsNullOrEmpty(rule.SourceCountry) && rule.SourceCountry != request.SenderCountry) return null;
        if (!string.IsNullOrEmpty(rule.DestinationCountry) && rule.DestinationCountry != request.ReceiverCountry) return null;

        if (request.SendAmount >= rule.ThresholdAmount.Value)
            return $"Transaction amount {request.SendAmount} {request.SendCurrency} exceeds threshold of {rule.ThresholdAmount.Value} {request.SendCurrency}.";

        return null;
    }

    private async Task<string?> EvaluateFrequencyLimit(ComplianceRule rule, ComplianceCheckRequest request)
    {
        if (!rule.TimePeriodDays.HasValue || !rule.MaxTransactionCount.HasValue) return null;

        // Country filter
        if (!string.IsNullOrEmpty(rule.SourceCountry) && rule.SourceCountry != request.SenderCountry) return null;
        if (!string.IsNullOrEmpty(rule.DestinationCountry) && rule.DestinationCountry != request.ReceiverCountry) return null;

        var since = DateTime.UtcNow.AddDays(-rule.TimePeriodDays.Value);

        // Count recent non-cancelled transactions by the same sender
        IEnumerable<Transaction> recentTx;
        if (request.CustomerId.HasValue && request.CustomerId.Value > 0)
        {
            recentTx = await _transRepo.FindAsync(t =>
                t.CustomerId == request.CustomerId.Value &&
                t.CreatedAt >= since &&
                t.Status != TransactionStatus.Cancelled);
        }
        else if (request.AgentId.HasValue && request.AgentId.Value > 0)
        {
            recentTx = await _transRepo.FindAsync(t =>
                t.AgentId == request.AgentId.Value &&
                t.SenderName == request.SenderName &&
                t.CreatedAt >= since &&
                t.Status != TransactionStatus.Cancelled);
        }
        else
        {
            return null;
        }

        var count = recentTx.Count();
        if (count >= rule.MaxTransactionCount.Value)
            return $"Sender has {count} transaction(s) in the last {rule.TimePeriodDays.Value} day(s), exceeding the limit of {rule.MaxTransactionCount.Value}.";

        return null;
    }

    private static string? EvaluateCountryRestriction(ComplianceRule rule, ComplianceCheckRequest request)
    {
        bool sourceMatch = !string.IsNullOrEmpty(rule.SourceCountry) && rule.SourceCountry == request.SenderCountry;
        bool destMatch = !string.IsNullOrEmpty(rule.DestinationCountry) && rule.DestinationCountry == request.ReceiverCountry;

        // If both specified, both must match
        if (!string.IsNullOrEmpty(rule.SourceCountry) && !string.IsNullOrEmpty(rule.DestinationCountry))
        {
            if (sourceMatch && destMatch)
                return $"Transfers from {request.SenderCountry} to {request.ReceiverCountry} are restricted.";
            return null;
        }

        if (sourceMatch)
            return $"Transfers from {request.SenderCountry} are restricted.";
        if (destMatch)
            return $"Transfers to {request.ReceiverCountry} are restricted.";

        return null;
    }

    private static string? EvaluateNameScreening(ComplianceRule rule, ComplianceCheckRequest request)
    {
        var screenTerm = rule.RuleName.ToLowerInvariant();
        if (!string.IsNullOrEmpty(request.SenderName) && request.SenderName.ToLowerInvariant().Contains(screenTerm))
            return $"Sender name \"{request.SenderName}\" matched screening rule \"{rule.RuleName}\".";
        if (!string.IsNullOrEmpty(request.ReceiverName) && request.ReceiverName.ToLowerInvariant().Contains(screenTerm))
            return $"Receiver name \"{request.ReceiverName}\" matched screening rule \"{rule.RuleName}\".";

        return null;
    }

    public async Task CreateAlertsAsync(long transactionId, List<ComplianceViolationDto> violations)
    {
        foreach (var v in violations)
        {
            var alert = new ComplianceAlert
            {
                TransactionId = transactionId,
                AlertType = v.RuleType,
                Description = v.Description,
                IsResolved = false
            };
            await _alertRepo.AddAsync(alert);
        }
        await _unitOfWork.SaveChangesAsync();
    }

    public async Task<ApiResponse<List<ComplianceAlertDto>>> GetAlertsAsync(bool? resolved = null)
    {
        IEnumerable<ComplianceAlert> alerts;
        if (resolved.HasValue)
            alerts = await _alertRepo.FindAsync(a => a.IsResolved == resolved.Value);
        else
            alerts = await _alertRepo.GetAllAsync();

        var dtos = new List<ComplianceAlertDto>();
        foreach (var alert in alerts.OrderByDescending(a => a.CreatedAt))
        {
            var transaction = await _transRepo.GetByIdAsync(alert.TransactionId);
            dtos.Add(MapAlertDto(alert, transaction));
        }

        return ApiResponse<List<ComplianceAlertDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<ComplianceAlertDto>> ResolveAlertAsync(long alertId, string resolution, string resolvedByUserId)
    {
        var alert = await _alertRepo.GetByIdAsync(alertId);
        if (alert == null)
            return ApiResponse<ComplianceAlertDto>.Fail("Alert not found.");

        alert.IsResolved = true;
        alert.Resolution = resolution;
        alert.ResolvedByUserId = resolvedByUserId;
        alert.ResolvedAt = DateTime.UtcNow;
        await _alertRepo.UpdateAsync(alert);

        // Also release the transaction to Pending
        var transaction = await _transRepo.GetByIdAsync(alert.TransactionId);
        if (transaction != null && (transaction.Status == TransactionStatus.OnHold || transaction.Status == TransactionStatus.Compliance))
        {
            transaction.Status = TransactionStatus.Pending;
            transaction.UpdatedAt = DateTime.UtcNow;
            await _transRepo.UpdateAsync(transaction);
        }

        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<ComplianceAlertDto>.Ok(MapAlertDto(alert, transaction), "Alert resolved and transaction released.");
    }

    public async Task<ApiResponse<ComplianceAlertDto>> RejectAlertAsync(long alertId, string resolvedByUserId)
    {
        var alert = await _alertRepo.GetByIdAsync(alertId);
        if (alert == null)
            return ApiResponse<ComplianceAlertDto>.Fail("Alert not found.");

        alert.IsResolved = true;
        alert.Resolution = "Rejected";
        alert.ResolvedByUserId = resolvedByUserId;
        alert.ResolvedAt = DateTime.UtcNow;
        await _alertRepo.UpdateAsync(alert);

        // Cancel the transaction and refund agent balance
        var transaction = await _transRepo.GetByIdAsync(alert.TransactionId);
        if (transaction != null && transaction.Status != TransactionStatus.Cancelled)
        {
            // Refund agent balance if applicable
            if (transaction.AgentId.HasValue)
            {
                var agent = await _agentRepo.GetByIdAsync(transaction.AgentId.Value);
                if (agent != null)
                {
                    agent.CurrentBalance -= (transaction.SendAmount + transaction.TotalCommission);
                    await _agentRepo.UpdateAsync(agent);
                }
            }

            // Reverse agent earnings
            var earnings = await _earningRepo.FindAsync(e => e.TransactionId == alert.TransactionId && !e.IsReversed);
            foreach (var earning in earnings)
            {
                earning.IsReversed = true;
                earning.ReversedAt = DateTime.UtcNow;
                await _earningRepo.UpdateAsync(earning);
            }

            transaction.Status = TransactionStatus.Cancelled;
            // Zero out commissions on rejection
            transaction.AgentCommission = 0;
            transaction.PayoutAgentCommission = 0;
            transaction.CompanyCommission = 0;
            transaction.TotalCommission = 0;
            transaction.UpdatedAt = DateTime.UtcNow;
            await _transRepo.UpdateAsync(transaction);
        }

        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<ComplianceAlertDto>.Ok(MapAlertDto(alert, transaction), "Alert rejected and transaction cancelled.");
    }

    public async Task<ApiResponse<ComplianceAlertDto>> ReleaseTransactionAsync(long alertId, string resolvedByUserId)
    {
        var alert = await _alertRepo.GetByIdAsync(alertId);
        if (alert == null)
            return ApiResponse<ComplianceAlertDto>.Fail("Alert not found.");

        alert.IsResolved = true;
        alert.Resolution = "Released";
        alert.ResolvedByUserId = resolvedByUserId;
        alert.ResolvedAt = DateTime.UtcNow;
        await _alertRepo.UpdateAsync(alert);

        var transaction = await _transRepo.GetByIdAsync(alert.TransactionId);
        if (transaction != null && (transaction.Status == TransactionStatus.OnHold || transaction.Status == TransactionStatus.Compliance))
        {
            transaction.Status = TransactionStatus.Pending;
            await _transRepo.UpdateAsync(transaction);
        }

        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<ComplianceAlertDto>.Ok(MapAlertDto(alert, transaction), "Transaction released.");
    }

    private static ComplianceAlertDto MapAlertDto(ComplianceAlert alert, Transaction? t) => new()
    {
        Id = alert.Id,
        TransactionId = alert.TransactionId,
        ReferenceNumber = t?.ReferenceNumber ?? "",
        AlertType = alert.AlertType,
        Description = alert.Description,
        IsResolved = alert.IsResolved,
        Resolution = alert.Resolution,
        ResolvedByUserId = alert.ResolvedByUserId,
        ResolvedAt = alert.ResolvedAt,
        CreatedAt = alert.CreatedAt,
        SenderName = t?.SenderName ?? "",
        SenderCountry = t?.SenderCountry,
        ReceiverName = t?.ReceiverName ?? "",
        ReceiverCountry = t?.ReceiverCountry,
        ReceiverBankName = t?.ReceiverBankName,
        ReceiverAccountNumber = t?.ReceiverAccountNumber,
        SendAmount = t?.SendAmount ?? 0,
        SendCurrency = t?.SendCurrency ?? "",
        ReceiveAmount = t?.ReceiveAmount ?? 0,
        ReceiveCurrency = t?.ReceiveCurrency ?? "",
        ExchangeRateApplied = t?.ExchangeRateApplied ?? 0,
        TotalCommission = t?.TotalCommission ?? 0,
        PaymentMethodName = t?.PaymentMethodName,
        PayoutMethodName = t?.PayoutMethodName,
        SendingAgentName = t?.SendingAgentName,
        PayoutAgentName = t?.PayoutAgentName,
        TransactionStatus = t?.Status.ToString() ?? ""
    };

    public async Task<ApiResponse<List<ComplianceRuleDto>>> GetRulesAsync()
    {
        var rules = await _ruleRepo.GetAllAsync();
        var dtos = rules.OrderByDescending(r => r.CreatedAt).Select(MapRuleDto).ToList();
        return ApiResponse<List<ComplianceRuleDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<ComplianceRuleDto>> CreateRuleAsync(CreateComplianceRuleDto dto)
    {
        // Check for duplicate (same RuleName or same RuleType + countries + threshold)
        var ruleType = Enum.TryParse<ComplianceRuleType>(dto.RuleType, out var rtParsed) ? rtParsed : ComplianceRuleType.AmountThreshold;
        var duplicateName = await _ruleRepo.FindAsync(r => r.RuleName == dto.RuleName);
        if (duplicateName.Any())
            return ApiResponse<ComplianceRuleDto>.Fail("A compliance rule with this name already exists.");

        var action = Enum.TryParse<ComplianceAction>(dto.Action, out var caParsed) ? caParsed : ComplianceAction.Flag;
        var duplicateConfig = await _ruleRepo.FindAsync(r =>
            r.RuleType == ruleType &&
            r.SourceCountry == dto.SourceCountry &&
            r.DestinationCountry == dto.DestinationCountry &&
            r.ThresholdAmount == dto.ThresholdAmount &&
            r.Action == action);
        if (duplicateConfig.Any())
            return ApiResponse<ComplianceRuleDto>.Fail("A compliance rule with the same type, countries, threshold, and action already exists.");

        var rule = new ComplianceRule
        {
            RuleName = dto.RuleName,
            RuleType = Enum.TryParse<ComplianceRuleType>(dto.RuleType, out var rt) ? rt : ComplianceRuleType.AmountThreshold,
            ThresholdAmount = dto.ThresholdAmount,
            TimePeriodDays = dto.TimePeriodDays,
            MaxTransactionCount = dto.MaxTransactionCount,
            SourceCountry = dto.SourceCountry,
            DestinationCountry = dto.DestinationCountry,
            Action = Enum.TryParse<ComplianceAction>(dto.Action, out var ca) ? ca : ComplianceAction.Flag,
            IsActive = dto.IsActive
        };

        await _ruleRepo.AddAsync(rule);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<ComplianceRuleDto>.Ok(MapRuleDto(rule), "Rule created.");
    }

    public async Task<ApiResponse<ComplianceRuleDto>> UpdateRuleAsync(int ruleId, CreateComplianceRuleDto dto)
    {
        var rule = await _ruleRepo.GetByIdAsync(ruleId);
        if (rule == null)
            return ApiResponse<ComplianceRuleDto>.Fail("Rule not found.");

        // Check for duplicate name (excluding self)
        var duplicateName = await _ruleRepo.FindAsync(r => r.Id != ruleId && r.RuleName == dto.RuleName);
        if (duplicateName.Any())
            return ApiResponse<ComplianceRuleDto>.Fail("A compliance rule with this name already exists.");

        // Check for duplicate config (excluding self)
        var ruleType = Enum.TryParse<ComplianceRuleType>(dto.RuleType, out var rtParsed) ? rtParsed : ComplianceRuleType.AmountThreshold;
        var action = Enum.TryParse<ComplianceAction>(dto.Action, out var caParsed) ? caParsed : ComplianceAction.Flag;
        var duplicateConfig = await _ruleRepo.FindAsync(r =>
            r.Id != ruleId &&
            r.RuleType == ruleType &&
            r.SourceCountry == dto.SourceCountry &&
            r.DestinationCountry == dto.DestinationCountry &&
            r.ThresholdAmount == dto.ThresholdAmount &&
            r.Action == action);
        if (duplicateConfig.Any())
            return ApiResponse<ComplianceRuleDto>.Fail("A compliance rule with the same type, countries, threshold, and action already exists.");

        rule.RuleName = dto.RuleName;
        rule.RuleType = Enum.TryParse<ComplianceRuleType>(dto.RuleType, out var rt) ? rt : rule.RuleType;
        rule.ThresholdAmount = dto.ThresholdAmount;
        rule.TimePeriodDays = dto.TimePeriodDays;
        rule.MaxTransactionCount = dto.MaxTransactionCount;
        rule.SourceCountry = dto.SourceCountry;
        rule.DestinationCountry = dto.DestinationCountry;
        rule.Action = Enum.TryParse<ComplianceAction>(dto.Action, out var ca) ? ca : rule.Action;
        rule.IsActive = dto.IsActive;
        rule.UpdatedAt = DateTime.UtcNow;

        await _ruleRepo.UpdateAsync(rule);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<ComplianceRuleDto>.Ok(MapRuleDto(rule), "Rule updated.");
    }

    public async Task<ApiResponse<bool>> DeleteRuleAsync(int ruleId)
    {
        var rule = await _ruleRepo.GetByIdAsync(ruleId);
        if (rule == null)
            return ApiResponse<bool>.Fail("Rule not found.");

        await _ruleRepo.DeleteAsync(rule);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Rule deleted.");
    }

    public async Task<ApiResponse<bool>> DeleteAllRulesAsync()
    {
        var all = await _ruleRepo.GetAllAsync();
        foreach (var rule in all)
            await _ruleRepo.DeleteAsync(rule);
        await _unitOfWork.SaveChangesAsync();
        return ApiResponse<bool>.Ok(true, $"{all.Count()} compliance rule(s) deleted.");
    }

    public async Task<ApiResponse<ComplianceRuleDto>> ToggleRuleAsync(int ruleId)
    {
        var rule = await _ruleRepo.GetByIdAsync(ruleId);
        if (rule == null)
            return ApiResponse<ComplianceRuleDto>.Fail("Rule not found.");

        rule.IsActive = !rule.IsActive;
        rule.UpdatedAt = DateTime.UtcNow;
        await _ruleRepo.UpdateAsync(rule);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<ComplianceRuleDto>.Ok(MapRuleDto(rule), $"Rule {(rule.IsActive ? "activated" : "deactivated")}.");
    }

    private static ComplianceRuleDto MapRuleDto(ComplianceRule r) => new()
    {
        Id = r.Id,
        RuleName = r.RuleName,
        RuleType = r.RuleType.ToString(),
        ThresholdAmount = r.ThresholdAmount,
        TimePeriodDays = r.TimePeriodDays,
        MaxTransactionCount = r.MaxTransactionCount,
        SourceCountry = r.SourceCountry,
        DestinationCountry = r.DestinationCountry,
        Action = r.Action.ToString(),
        IsActive = r.IsActive,
        CreatedAt = r.CreatedAt
    };
}
