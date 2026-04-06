using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Agent;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Exceptions;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class TransactionService : ITransactionService
{
    private readonly IRepository<Transaction> _transRepo;
    private readonly IRepository<Domain.Entities.Agent> _agentRepo;
    private readonly IRepository<Commission> _commissionRepo;
    private readonly IRepository<AgentCommission> _agentCommRepo;
    private readonly IRepository<AgentEarning> _earningRepo;
    private readonly IRepository<Customer> _customerRepo;
    private readonly IRepository<AgentLimitAdjustment> _limitAdjRepo;
    private readonly IExchangeRateService _exchangeRateService;
    private readonly ICommissionService _commissionService;
    private readonly IComplianceService _complianceService;
    private readonly ISanctionsScreeningService _sanctionsService;
    private readonly ISettingsService _settings;
    private readonly IUnitOfWork _unitOfWork;

    public TransactionService(
        IRepository<Transaction> transRepo,
        IRepository<Domain.Entities.Agent> agentRepo,
        IRepository<Commission> commissionRepo,
        IRepository<AgentCommission> agentCommRepo,
        IRepository<AgentEarning> earningRepo,
        IRepository<Customer> customerRepo,
        IRepository<AgentLimitAdjustment> limitAdjRepo,
        IExchangeRateService exchangeRateService,
        ICommissionService commissionService,
        IComplianceService complianceService,
        ISanctionsScreeningService sanctionsService,
        ISettingsService settings,
        IUnitOfWork unitOfWork)
    {
        _transRepo = transRepo;
        _agentRepo = agentRepo;
        _commissionRepo = commissionRepo;
        _agentCommRepo = agentCommRepo;
        _earningRepo = earningRepo;
        _customerRepo = customerRepo;
        _limitAdjRepo = limitAdjRepo;
        _exchangeRateService = exchangeRateService;
        _commissionService = commissionService;
        _complianceService = complianceService;
        _sanctionsService = sanctionsService;
        _settings = settings;
        _unitOfWork = unitOfWork;
    }

    /// <summary>
    /// Returns the agent's effective credit limit including any active time-bound adjustments.
    /// Mirrors the same logic in AccountingService so the balance check is consistent with what the UI shows.
    /// </summary>
    private async Task<decimal> GetEffectiveCreditLimitAsync(int agentId, decimal baseCreditLimit)
    {
        var adjustments = await _limitAdjRepo.FindAsync(a =>
            a.AgentId == agentId &&
            a.IsActive &&
            a.EffectiveFrom <= DateTime.UtcNow &&
            (a.EffectiveTo == null || a.EffectiveTo > DateTime.UtcNow));
        return baseCreditLimit + adjustments.Sum(a => a.Amount);
    }

    public async Task<ApiResponse<TransactionResultDto>> SendTransactionAsync(SendTransactionDto dto, int agentId)
    {
        var agent = await _agentRepo.GetByIdAsync(agentId);
        if (agent == null)
            return ApiResponse<TransactionResultDto>.Fail("Agent not found.");

        if (!agent.IsApproved || !agent.IsActive)
            return ApiResponse<TransactionResultDto>.Fail("Agent is not active or approved.");

        // ── Load settings once for this request ─────────────────────────────
        var minAge                  = await _settings.GetIntAsync("kyc.minimumAge", 18);
        var singleTxnLimit          = await _settings.GetDecimalAsync("compliance.singleTransactionLimit", 0);
        var dailyComplianceLimit    = await _settings.GetDecimalAsync("compliance.dailyLimit", 0);
        var requireApproval         = await _settings.GetBoolAsync("transaction.requireManagerApproval", false);
        var approvalThreshold       = await _settings.GetDecimalAsync("transaction.managerApprovalThreshold", 5000);
        var requirePurpose          = await _settings.GetBoolAsync("transaction.requirePurpose", false);
        var requireSourceOfFunds    = await _settings.GetBoolAsync("transaction.requireSourceOfFunds", false);
        var txnPrefix               = await _settings.GetAsync("transaction.numberPrefix", "TXN");
        var structuringEnabled      = await _settings.GetBoolAsync("compliance.structuringDetection", false);
        var structuringWindowDays   = await _settings.GetIntAsync("compliance.structuringWindow", 7);
        var structuringAmount       = await _settings.GetDecimalAsync("compliance.structuringAmount", 9000);
        var agentTxnLimit               = await _settings.GetDecimalAsync("branch.agentTransactionLimit", 0);
        var agentDailyLimit             = await _settings.GetDecimalAsync("branch.agentDailyLimit", 0);
        var rateRounding                = await _settings.GetIntAsync("rate.rounding", 2);
        var kycEnabled                  = await _settings.GetBoolAsync("kyc.enabled", true);
        var kycReverificationDays       = await _settings.GetIntAsync("kyc.reverificationPeriod", 0);

        // ── Global single transaction limit from settings ────────────────────
        if (singleTxnLimit > 0 && dto.SendAmount > singleTxnLimit)
            return ApiResponse<TransactionResultDto>.Fail(
                $"Transaction amount {dto.SendAmount:F2} exceeds the single transaction limit of {singleTxnLimit:F2}.");

        // ── Agent per-transaction limit from branch settings ─────────────────
        if (agentTxnLimit > 0 && dto.SendAmount > agentTxnLimit)
            return ApiResponse<TransactionResultDto>.Fail(
                $"Transaction amount {dto.SendAmount:F2} exceeds the agent transaction limit of {agentTxnLimit:F2}.");

        // ── Agent daily limit from branch settings ────────────────────────────
        if (agentDailyLimit > 0)
        {
            var todayStart = DateTime.UtcNow.Date;
            var agentTodayTxns = await _transRepo.FindAsync(t =>
                t.AgentId == agentId &&
                t.CreatedAt >= todayStart &&
                t.Status != TransactionStatus.Cancelled);
            var agentTodayTotal = agentTodayTxns.Sum(t => t.SendAmount);
            if (agentTodayTotal + dto.SendAmount > agentDailyLimit)
                return ApiResponse<TransactionResultDto>.Fail(
                    $"Agent daily limit exceeded. Today's volume: {agentTodayTotal:F2}, this transaction: {dto.SendAmount:F2}, daily limit: {agentDailyLimit:F2}.");
        }

        // ── Purpose & source of funds validation ─────────────────────────────
        if (requirePurpose && string.IsNullOrWhiteSpace(dto.Purpose))
            return ApiResponse<TransactionResultDto>.Fail("Purpose of remittance is required.");

        if (requireSourceOfFunds && string.IsNullOrWhiteSpace(dto.SourceOfFunds))
            return ApiResponse<TransactionResultDto>.Fail("Source of funds is required.");

        // ── KYC tier validation and DOB check ────────────────────────────────
        if (dto.CustomerId.HasValue)
        {
            var customer = await _customerRepo.GetByIdAsync(dto.CustomerId.Value);
            if (customer != null)
            {
                if (kycEnabled && !customer.IsKycVerified)
                    return ApiResponse<TransactionResultDto>.Fail("KYC verification is required before sending transactions. Please complete KYC for this customer.");

                // Reverification check — KYC expires after the configured period
                if (kycEnabled && kycReverificationDays > 0 && customer.IsKycVerified && customer.KycVerifiedAt.HasValue)
                {
                    var kycAge = (DateTime.UtcNow - customer.KycVerifiedAt.Value).TotalDays;
                    if (kycAge > kycReverificationDays)
                        return ApiResponse<TransactionResultDto>.Fail(
                            $"Customer KYC has expired (verified {(int)kycAge} days ago, reverification required every {kycReverificationDays} days).");
                }

                // KYC tier-based transaction limit
                var perTxnLimit = CustomerManagementService.GetKycTransactionLimit(customer.KycLevel);
                if (dto.SendAmount > perTxnLimit)
                    return ApiResponse<TransactionResultDto>.Fail(
                        $"Transaction amount {dto.SendAmount} exceeds the {customer.KycLevel} KYC tier limit of {perTxnLimit:F2}. Please upgrade KYC level.");

                // KYC tier-based daily aggregate limit (from KYC level)
                var kycDailyLimit = CustomerManagementService.GetKycDailyLimit(customer.KycLevel);
                if (kycDailyLimit < decimal.MaxValue)
                {
                    var todayStart = DateTime.UtcNow.Date;
                    var todayTxns = await _transRepo.FindAsync(t =>
                        t.CustomerId == customer.Id &&
                        t.CreatedAt >= todayStart &&
                        t.Status != TransactionStatus.Cancelled);
                    var todayTotal = todayTxns.Sum(t => t.SendAmount);

                    // Apply the stricter of: KYC tier limit vs compliance settings daily limit
                    var effectiveDailyLimit = dailyComplianceLimit > 0
                        ? Math.Min(kycDailyLimit, dailyComplianceLimit)
                        : kycDailyLimit;

                    if (todayTotal + dto.SendAmount > effectiveDailyLimit)
                        return ApiResponse<TransactionResultDto>.Fail(
                            $"Daily limit exceeded. Today's total: {todayTotal:F2}, this transaction: {dto.SendAmount:F2}, daily limit: {effectiveDailyLimit:F2}.");
                }
                else if (dailyComplianceLimit > 0)
                {
                    // KYC tier has no limit but compliance settings has one
                    var todayStart = DateTime.UtcNow.Date;
                    var todayTxns = await _transRepo.FindAsync(t =>
                        t.CustomerId == customer.Id &&
                        t.CreatedAt >= todayStart &&
                        t.Status != TransactionStatus.Cancelled);
                    var todayTotal = todayTxns.Sum(t => t.SendAmount);
                    if (todayTotal + dto.SendAmount > dailyComplianceLimit)
                        return ApiResponse<TransactionResultDto>.Fail(
                            $"Daily limit exceeded. Today's total: {todayTotal:F2}, this transaction: {dto.SendAmount:F2}, daily limit: {dailyComplianceLimit:F2}.");
                }

                // Minimum age check — reads from settings
                if (customer.DateOfBirth.HasValue)
                {
                    var age = DateTime.UtcNow.Year - customer.DateOfBirth.Value.Year;
                    if (customer.DateOfBirth.Value > DateTime.UtcNow.AddYears(-age)) age--;
                    if (age < minAge)
                        return ApiResponse<TransactionResultDto>.Fail(
                            $"Customer must be at least {minAge} years old to send transactions.");
                }
            }
        }

        // Calculate exchange rate — use locked quote if provided, otherwise live rate
        if (!dto.PayoutPartnerId.HasValue || dto.PayoutPartnerId.Value <= 0)
            return ApiResponse<TransactionResultDto>.Fail("Payout partner is required.");

        decimal exchangeRate;
        decimal receiveAmount;
        string? usedQuoteId = null;

        if (!string.IsNullOrEmpty(dto.QuoteId))
        {
            // Use the locked rate from the quote
            var quoteResult = await _exchangeRateService.GetQuoteAsync(dto.QuoteId);
            if (!quoteResult.Success || quoteResult.Data == null)
                return ApiResponse<TransactionResultDto>.Fail(quoteResult.Message);

            exchangeRate = quoteResult.Data.EffectiveRate;
            receiveAmount = Math.Round(dto.SendAmount * exchangeRate, rateRounding);
            usedQuoteId = dto.QuoteId;
        }
        else
        {
            // Fallback: live rate (backward compatible)
            var rateResult = await _exchangeRateService.GetCurrentRateAsync(
                dto.SendCurrency, dto.ReceiveCurrency,
                dto.PayoutPartnerId.Value, dto.ReceiverCountry);
            if (!rateResult.Success || rateResult.Data == null)
                return ApiResponse<TransactionResultDto>.Fail("No active exchange rate for this currency pair.");

            exchangeRate = rateResult.Data.Rate - (rateResult.Data.Margin ?? 0);
            receiveAmount = Math.Round(dto.SendAmount * exchangeRate, rateRounding);
        }

        // Calculate total commission using full context (PaymentMethodName included)
        var totalComm = await _commissionService.CalculateCommissionAsync(
            dto.SendAmount, dto.SenderCountry, dto.ReceiverCountry,
            dto.SendCurrency, dto.ReceiveCurrency,
            dto.PaymentMethodName, agentId, dto.PayoutPartnerId);

        // Calculate sending agent's commission share from AgentCommissions table
        var agentComm = await CalculateAgentCommissionAsync(agentId, totalComm);

        // Calculate payout agent's commission share from AgentCommissions table
        decimal payoutAgentComm = 0;
        string? payoutAgentName = null;
        if (dto.PayoutPartnerId.HasValue && dto.PayoutPartnerId.Value > 0)
        {
            payoutAgentComm = await CalculateAgentCommissionAsync(dto.PayoutPartnerId.Value, totalComm);
            var payoutAgent = await _agentRepo.GetByIdAsync(dto.PayoutPartnerId.Value);
            payoutAgentName = payoutAgent?.BusinessName;
        }

        // Our commission = total - (sending agent + payout agent)
        var companyComm = totalComm - (agentComm + payoutAgentComm);
        if (companyComm < 0) companyComm = 0;

        // Check agent balance — use effective credit limit (base + active adjustments)
        var totalDebit = dto.SendAmount + totalComm;
        var effectiveCreditLimit = await GetEffectiveCreditLimitAsync(agentId, agent.CreditLimit);
        var availableBalance = effectiveCreditLimit - agent.CurrentBalance;
        if (totalDebit > availableBalance)
            return ApiResponse<TransactionResultDto>.Fail(
                $"Insufficient balance. Required: {totalDebit}, Available: {availableBalance}");

        // AML/Sanctions screening — screen names and countries
        var screeningResult = await _sanctionsService.ScreenTransactionAsync(
            dto.SenderName, dto.ReceiverName, dto.SenderCountry, dto.ReceiverCountry, null, dto.CustomerId);
        var highRiskCountryFlags = new List<ScreeningResultDto>();
        if (screeningResult.Data != null)
        {
            var sanctionsMatch = screeningResult.Data.Where(r => r.IsMatch).ToList();
            if (sanctionsMatch.Any())
            {
                var matchDetails = string.Join("; ", sanctionsMatch.Select(m =>
                    $"{m.BlockReason ?? "Match"}: {m.ScreenedName} matched \"{m.MatchedName}\" on {m.ListSource} (score: {m.MatchScore:P0})"));
                return ApiResponse<TransactionResultDto>.Fail(
                    $"Transaction blocked by AML sanctions screening: {matchDetails}");
            }

            // Collect high/medium risk country flags for compliance alert after transaction creation
            highRiskCountryFlags = screeningResult.Data.Where(r => r.RequiresReview).ToList();
        }

        // Compliance check — block if any rule with Action=Block is violated
        var complianceResult = await _complianceService.CheckComplianceAsync(new ComplianceCheckRequest
        {
            SendAmount = dto.SendAmount,
            SenderCountry = dto.SenderCountry,
            ReceiverCountry = dto.ReceiverCountry,
            SenderName = dto.SenderName,
            ReceiverName = dto.ReceiverName,
            SendCurrency = dto.SendCurrency,
            CustomerId = dto.CustomerId,
            AgentId = agentId
        });
        var hasComplianceViolations = false;
        if (complianceResult.Data != null && complianceResult.Data.Any())
        {
            var blocked = complianceResult.Data.Where(v => v.Action == "Block").ToList();
            if (blocked.Any())
                return ApiResponse<TransactionResultDto>.Fail(
                    $"Transaction blocked by compliance: {string.Join("; ", blocked.Select(v => v.Description))}");

            // Non-blocking violations → flag for compliance review
            hasComplianceViolations = true;
        }

        // ── Structuring detection ─────────────────────────────────────────────
        // Flags transactions where a customer sends multiple amounts just below the
        // reporting threshold within a short window — a classic money-laundering pattern.
        var isStructuringSuspect = false;
        if (structuringEnabled && dto.CustomerId.HasValue && structuringAmount > 0)
        {
            var windowStart = DateTime.UtcNow.AddDays(-structuringWindowDays);
            var recentTxns = await _transRepo.FindAsync(t =>
                t.CustomerId == dto.CustomerId.Value &&
                t.CreatedAt >= windowStart &&
                t.Status != TransactionStatus.Cancelled);
            var windowTotal = recentTxns.Sum(t => t.SendAmount);

            // Flag if the cumulative total in the window approaches or exceeds the structuring amount
            if (windowTotal + dto.SendAmount >= structuringAmount)
            {
                isStructuringSuspect = true;
                hasComplianceViolations = true;
            }
        }

        // Determine initial status
        TransactionStatus initialStatus;
        if (hasComplianceViolations || highRiskCountryFlags.Any())
        {
            initialStatus = TransactionStatus.Compliance;
        }
        else if (requireApproval && dto.SendAmount >= approvalThreshold)
        {
            // Transaction exceeds the manager approval threshold — hold for sign-off
            initialStatus = TransactionStatus.PendingApproval;
        }
        else
        {
            initialStatus = TransactionStatus.OnHold;
        }

        // Create transaction
        var transaction = new Transaction
        {
            ReferenceNumber = GenerateReferenceNumber(txnPrefix),
            SenderName = dto.SenderName,
            SenderPhone = dto.SenderPhone,
            SenderEmail = dto.SenderEmail,
            SenderIdType = dto.SenderIdType,
            SenderIdNumber = dto.SenderIdNumber,
            SenderCountry = dto.SenderCountry,
            ReceiverName = dto.ReceiverName,
            ReceiverPhone = dto.ReceiverPhone,
            ReceiverEmail = dto.ReceiverEmail,
            ReceiverCountry = dto.ReceiverCountry,
            ReceiverBankName = dto.ReceiverBankName,
            ReceiverBankCode = dto.ReceiverBankCode,
            ReceiverAccountNumber = dto.ReceiverAccountNumber,
            ReceiverBranchName = dto.ReceiverBranchName,
            ReceiverBranchCode = dto.ReceiverBranchCode,
            ReceiverBankId = dto.ReceiverBankId,
            ReceiverBranchId = dto.ReceiverBranchId,
            SendAmount = dto.SendAmount,
            SendCurrency = dto.SendCurrency,
            ExchangeRateApplied = exchangeRate,
            ReceiveAmount = receiveAmount,
            ReceiveCurrency = dto.ReceiveCurrency,
            TotalCommission = totalComm,
            AgentCommission = agentComm,
            PayoutAgentCommission = payoutAgentComm,
            CompanyCommission = companyComm,
            Status = initialStatus,
            PaymentMethod = dto.PaymentMethod,
            PayoutMethod = dto.PayoutMethod,
            PaymentMethodName = dto.PaymentMethodName,
            PayoutMethodName = dto.PayoutMethodName,
            Purpose = dto.Purpose,
            Notes = dto.Notes,
            AgentId = agentId,
            SendingAgentName = agent.BusinessName,
            PayoutAgentId = dto.PayoutPartnerId,
            PayoutAgentName = payoutAgentName,
            CustomerId = dto.CustomerId,
            ReceiverId = dto.ReceiverId
        };

        await _transRepo.AddAsync(transaction);

        // Debit agent balance — wrapped in optimistic concurrency retry
        agent.CurrentBalance += totalDebit;
        await _agentRepo.UpdateAsync(agent);

        try
        {
            await _unitOfWork.SaveChangesAsync();
        }
        catch (ConcurrencyException)
        {
            // Another transaction modified this agent's balance simultaneously.
            // This prevents double-spend / overdraw under concurrent load.
            return ApiResponse<TransactionResultDto>.Fail(
                "Another transaction is being processed for this agent. Please try again.");
        }

        // Mark the exchange rate quote as used (if applicable)
        if (!string.IsNullOrEmpty(usedQuoteId))
            await _exchangeRateService.MarkQuoteUsedAsync(usedQuoteId, transaction.Id);

        // Record agent earnings
        if (agentComm > 0)
        {
            await _earningRepo.AddAsync(new AgentEarning
            {
                AgentId = agentId,
                TransactionId = transaction.Id,
                EarningType = "SendingCommission",
                Amount = agentComm
            });
        }
        if (payoutAgentComm > 0 && dto.PayoutPartnerId.HasValue && dto.PayoutPartnerId.Value > 0)
        {
            await _earningRepo.AddAsync(new AgentEarning
            {
                AgentId = dto.PayoutPartnerId.Value,
                TransactionId = transaction.Id,
                EarningType = "PayoutCommission",
                Amount = payoutAgentComm
            });
        }
        await _unitOfWork.SaveChangesAsync();

        // Create compliance alerts if there were non-blocking violations
        if (hasComplianceViolations && complianceResult.Data != null)
        {
            var nonBlocking = complianceResult.Data.Where(v => v.Action != "Block").ToList();
            if (nonBlocking.Any())
                await _complianceService.CreateAlertsAsync(transaction.Id, nonBlocking);
        }

        // Create compliance alerts for high/medium risk country transactions
        if (highRiskCountryFlags.Any())
        {
            var countryAlerts = highRiskCountryFlags.Select(f => new ComplianceViolationDto
            {
                RuleName = "Country Risk",
                RuleType = "CountryRisk",
                Description = $"{f.RiskLevel} risk country: {f.ScreenedName}. Requires compliance review.",
                Action = "Flag"
            }).ToList();
            await _complianceService.CreateAlertsAsync(transaction.Id, countryAlerts);
        }

        // Create structuring alert if detected
        if (isStructuringSuspect)
        {
            await _complianceService.CreateAlertsAsync(transaction.Id, new List<ComplianceViolationDto>
            {
                new()
                {
                    RuleName = "Structuring Detection",
                    RuleType = "Structuring",
                    Description = $"Possible structuring detected: cumulative transactions in the last {structuringWindowDays} day(s) reached or exceeded {structuringAmount:F2}.",
                    Action = "Flag"
                }
            });
        }

        return ApiResponse<TransactionResultDto>.Ok(MapToDto(transaction), "Transaction sent successfully.");
    }

    public async Task<ApiResponse<TransactionResultDto>> SendCustomerTransactionAsync(SendTransactionDto dto, int customerId)
    {
        var txnPrefix       = await _settings.GetAsync("transaction.numberPrefix", "RMT");
        var minAge          = await _settings.GetIntAsync("kyc.minimumAge", 18);
        var rateRounding    = await _settings.GetIntAsync("rate.rounding", 2);

        // KYC and DOB validation for customer flow
        var customer = await _customerRepo.GetByIdAsync(customerId);
        if (customer != null)
        {
            if (!customer.IsKycVerified)
                return ApiResponse<TransactionResultDto>.Fail("KYC verification is required before sending transactions.");

            if (customer.DateOfBirth.HasValue)
            {
                var age = DateTime.UtcNow.Year - customer.DateOfBirth.Value.Year;
                if (customer.DateOfBirth.Value > DateTime.UtcNow.AddYears(-age)) age--;
                if (age < minAge)
                    return ApiResponse<TransactionResultDto>.Fail($"You must be at least {minAge} years old to send transactions.");
            }
        }

        var payoutPartnerId = dto.PayoutPartnerId ?? 0;
        var rateResult = await _exchangeRateService.GetCurrentRateAsync(
            dto.SendCurrency, dto.ReceiveCurrency,
            payoutPartnerId, dto.ReceiverCountry);
        if (!rateResult.Success || rateResult.Data == null)
            return ApiResponse<TransactionResultDto>.Fail("No active exchange rate for this currency pair.");

        var exchangeRate = rateResult.Data.Rate - (rateResult.Data.Margin ?? 0);
        var receiveAmount = Math.Round(dto.SendAmount * exchangeRate, rateRounding);

        var totalComm = await _commissionService.CalculateCommissionAsync(
            dto.SendAmount, dto.SenderCountry, dto.ReceiverCountry,
            dto.SendCurrency, dto.ReceiveCurrency,
            dto.PaymentMethodName, null, dto.PayoutPartnerId);

        // Calculate payout agent's commission share from AgentCommissions table
        decimal payoutAgentComm = 0;
        string? payoutAgentName = null;
        if (dto.PayoutPartnerId.HasValue && dto.PayoutPartnerId.Value > 0)
        {
            payoutAgentComm = await CalculateAgentCommissionAsync(dto.PayoutPartnerId.Value, totalComm);
            var payoutAgent = await _agentRepo.GetByIdAsync(dto.PayoutPartnerId.Value);
            payoutAgentName = payoutAgent?.BusinessName;
        }

        // Our commission = total - payout agent (no sending agent for customer flow)
        var companyComm = totalComm - payoutAgentComm;
        if (companyComm < 0) companyComm = 0;

        // Compliance check — block if any rule with Action=Block is violated
        var complianceResult = await _complianceService.CheckComplianceAsync(new ComplianceCheckRequest
        {
            SendAmount = dto.SendAmount,
            SenderCountry = dto.SenderCountry,
            ReceiverCountry = dto.ReceiverCountry,
            SenderName = dto.SenderName,
            ReceiverName = dto.ReceiverName,
            SendCurrency = dto.SendCurrency,
            CustomerId = customerId
        });
        var hasCustomerComplianceViolations = false;
        if (complianceResult.Data != null && complianceResult.Data.Any())
        {
            var blocked = complianceResult.Data.Where(v => v.Action == "Block").ToList();
            if (blocked.Any())
                return ApiResponse<TransactionResultDto>.Fail(
                    $"Transaction blocked by compliance: {string.Join("; ", blocked.Select(v => v.Description))}");

            hasCustomerComplianceViolations = true;
        }

        var customerInitialStatus = hasCustomerComplianceViolations
            ? TransactionStatus.Compliance
            : TransactionStatus.OnHold;

        var transaction = new Transaction
        {
            ReferenceNumber = GenerateReferenceNumber(txnPrefix),
            SenderName = dto.SenderName,
            SenderPhone = dto.SenderPhone,
            SenderEmail = dto.SenderEmail,
            SenderCountry = dto.SenderCountry,
            ReceiverName = dto.ReceiverName,
            ReceiverPhone = dto.ReceiverPhone,
            ReceiverEmail = dto.ReceiverEmail,
            ReceiverCountry = dto.ReceiverCountry,
            ReceiverBankName = dto.ReceiverBankName,
            ReceiverBankCode = dto.ReceiverBankCode,
            ReceiverAccountNumber = dto.ReceiverAccountNumber,
            ReceiverBranchName = dto.ReceiverBranchName,
            ReceiverBranchCode = dto.ReceiverBranchCode,
            ReceiverBankId = dto.ReceiverBankId,
            ReceiverBranchId = dto.ReceiverBranchId,
            SendAmount = dto.SendAmount,
            SendCurrency = dto.SendCurrency,
            ExchangeRateApplied = exchangeRate,
            ReceiveAmount = receiveAmount,
            ReceiveCurrency = dto.ReceiveCurrency,
            TotalCommission = totalComm,
            PayoutAgentCommission = payoutAgentComm,
            CompanyCommission = companyComm,
            Status = customerInitialStatus,
            PaymentMethod = dto.PaymentMethod,
            PayoutMethod = dto.PayoutMethod,
            PaymentMethodName = dto.PaymentMethodName,
            PayoutMethodName = dto.PayoutMethodName,
            Purpose = dto.Purpose,
            Notes = dto.Notes,
            CustomerId = customerId,
            ReceiverId = dto.ReceiverId,
            PayoutAgentId = dto.PayoutPartnerId,
            PayoutAgentName = payoutAgentName
        };

        await _transRepo.AddAsync(transaction);
        await _unitOfWork.SaveChangesAsync();

        // Record payout agent earnings (no sending agent in customer flow)
        if (payoutAgentComm > 0 && dto.PayoutPartnerId.HasValue && dto.PayoutPartnerId.Value > 0)
        {
            await _earningRepo.AddAsync(new AgentEarning
            {
                AgentId = dto.PayoutPartnerId.Value,
                TransactionId = transaction.Id,
                EarningType = "PayoutCommission",
                Amount = payoutAgentComm
            });
            await _unitOfWork.SaveChangesAsync();
        }

        // Create compliance alerts if there were non-blocking violations
        if (hasCustomerComplianceViolations && complianceResult.Data != null)
        {
            var nonBlocking = complianceResult.Data.Where(v => v.Action != "Block").ToList();
            if (nonBlocking.Any())
                await _complianceService.CreateAlertsAsync(transaction.Id, nonBlocking);
        }

        return ApiResponse<TransactionResultDto>.Ok(MapToDto(transaction), "Transaction sent successfully.");
    }

    public async Task<ApiResponse<List<TransactionResultDto>>> GetAgentTransactionsAsync(int agentId)
    {
        var transactions = await _transRepo.FindAsync(t => t.AgentId == agentId);
        var dtos = transactions.OrderByDescending(t => t.CreatedAt).Select(MapToDto).ToList();
        return ApiResponse<List<TransactionResultDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<List<TransactionResultDto>>> GetAllTransactionsAsync()
    {
        var transactions = await _transRepo.GetAllAsync();
        var dtos = transactions.OrderByDescending(t => t.CreatedAt).Select(MapToDto).ToList();
        return ApiResponse<List<TransactionResultDto>>.Ok(dtos);
    }

    /// <summary>
    /// Agent releases a transaction: OnHold/Compliance → Pending
    /// </summary>
    public async Task<ApiResponse<TransactionResultDto>> ReleaseTransactionAsync(long transactionId)
    {
        var transaction = await _transRepo.GetByIdAsync(transactionId);
        if (transaction == null)
            return ApiResponse<TransactionResultDto>.Fail("Transaction not found.");

        if (transaction.Status != TransactionStatus.OnHold && transaction.Status != TransactionStatus.Compliance)
            return ApiResponse<TransactionResultDto>.Fail("Only On Hold or Compliance transactions can be released.");

        var autoComplete = await _settings.GetBoolAsync("transaction.autoComplete", false);
        if (autoComplete)
        {
            transaction.Status = TransactionStatus.Completed;
            transaction.CompletedAt = DateTime.UtcNow;
        }
        else
        {
            transaction.Status = TransactionStatus.Pending;
        }
        transaction.UpdatedAt = DateTime.UtcNow;
        await _transRepo.UpdateAsync(transaction);
        await _unitOfWork.SaveChangesAsync();

        var releaseMessage = autoComplete ? "Transaction released and auto-completed." : "Transaction released to Pending.";
        return ApiResponse<TransactionResultDto>.Ok(MapToDto(transaction), releaseMessage);
    }

    /// <summary>
    /// Admin completes a pending transaction
    /// </summary>
    public async Task<ApiResponse<TransactionResultDto>> CompleteTransactionAsync(long transactionId, string approvedByUserId)
    {
        var transaction = await _transRepo.GetByIdAsync(transactionId);
        if (transaction == null)
            return ApiResponse<TransactionResultDto>.Fail("Transaction not found.");

        if (transaction.Status != TransactionStatus.Pending)
            return ApiResponse<TransactionResultDto>.Fail("Only pending transactions can be completed.");

        transaction.Status = TransactionStatus.Completed;
        transaction.ApprovedByUserId = approvedByUserId;
        transaction.CompletedAt = DateTime.UtcNow;
        transaction.UpdatedAt = DateTime.UtcNow;
        await _transRepo.UpdateAsync(transaction);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<TransactionResultDto>.Ok(MapToDto(transaction), "Transaction completed.");
    }

    public async Task<ApiResponse<TransactionResultDto>> ApproveTransactionAsync(long transactionId, string approvedByUserId)
    {
        var transaction = await _transRepo.GetByIdAsync(transactionId);
        if (transaction == null)
            return ApiResponse<TransactionResultDto>.Fail("Transaction not found.");

        if (transaction.Status == TransactionStatus.PendingApproval)
        {
            // Manager approval clears the hold — move to OnHold so the standard release flow applies
            transaction.Status = TransactionStatus.OnHold;
            transaction.ApprovedByUserId = approvedByUserId;
            transaction.UpdatedAt = DateTime.UtcNow;
            await _transRepo.UpdateAsync(transaction);
            await _unitOfWork.SaveChangesAsync();
            return ApiResponse<TransactionResultDto>.Ok(MapToDto(transaction), "Transaction approved by manager and moved to On Hold for processing.");
        }

        if (transaction.Status != TransactionStatus.Pending)
            return ApiResponse<TransactionResultDto>.Fail("Only pending or pending-approval transactions can be approved.");

        transaction.Status = TransactionStatus.Approved;
        transaction.ApprovedByUserId = approvedByUserId;
        transaction.UpdatedAt = DateTime.UtcNow;
        await _transRepo.UpdateAsync(transaction);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<TransactionResultDto>.Ok(MapToDto(transaction), "Transaction approved.");
    }

    public async Task<ApiResponse<TransactionResultDto>> CancelTransactionAsync(long transactionId)
    {
        var cancellationAllowed = await _settings.GetBoolAsync("transaction.cancellationAllowed", true);
        if (!cancellationAllowed)
            return ApiResponse<TransactionResultDto>.Fail("Transaction cancellation is disabled by system settings.");

        var transaction = await _transRepo.GetByIdAsync(transactionId);
        if (transaction == null)
            return ApiResponse<TransactionResultDto>.Fail("Transaction not found.");

        if (transaction.Status == TransactionStatus.Cancelled)
            return ApiResponse<TransactionResultDto>.Fail("Transaction is already cancelled.");

        var cancellationWindowMinutes = await _settings.GetIntAsync("transaction.cancellationWindow", 0);
        if (cancellationWindowMinutes > 0)
        {
            var elapsed = DateTime.UtcNow - transaction.CreatedAt;
            if (elapsed.TotalMinutes > cancellationWindowMinutes)
                return ApiResponse<TransactionResultDto>.Fail(
                    $"Cancellation window of {cancellationWindowMinutes} minute(s) has expired.");
        }

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
        var earnings = await _earningRepo.FindAsync(e => e.TransactionId == transactionId && !e.IsReversed);
        foreach (var earning in earnings)
        {
            earning.IsReversed = true;
            earning.ReversedAt = DateTime.UtcNow;
            await _earningRepo.UpdateAsync(earning);
        }

        transaction.Status = TransactionStatus.Cancelled;
        // Zero out commissions on cancellation
        transaction.AgentCommission = 0;
        transaction.PayoutAgentCommission = 0;
        transaction.CompanyCommission = 0;
        transaction.TotalCommission = 0;
        transaction.UpdatedAt = DateTime.UtcNow;
        await _transRepo.UpdateAsync(transaction);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<TransactionResultDto>.Ok(MapToDto(transaction), "Transaction cancelled.");
    }

    public async Task<ApiResponse<TransactionResultDto>> UpdateStatusAsync(long transactionId, TransactionStatus status)
    {
        var transaction = await _transRepo.GetByIdAsync(transactionId);
        if (transaction == null)
            return ApiResponse<TransactionResultDto>.Fail("Transaction not found.");

        transaction.Status = status;
        transaction.UpdatedAt = DateTime.UtcNow;
        if (status == TransactionStatus.Completed)
            transaction.CompletedAt = DateTime.UtcNow;

        await _transRepo.UpdateAsync(transaction);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<TransactionResultDto>.Ok(MapToDto(transaction), $"Transaction status updated to {status}.");
    }

    public async Task<ApiResponse<TransferCalculationResultDto>> CalculateTransferAsync(CalculateTransferDto dto)
    {
        if (dto.SendAmount <= 0)
            return ApiResponse<TransferCalculationResultDto>.Fail("Send amount must be greater than zero.");

        if (string.IsNullOrEmpty(dto.SendCurrency) || string.IsNullOrEmpty(dto.ReceiveCurrency))
            return ApiResponse<TransferCalculationResultDto>.Fail("Both send and receive currencies are required.");

        if (!dto.PayoutPartnerId.HasValue || dto.PayoutPartnerId.Value <= 0)
            return ApiResponse<TransferCalculationResultDto>.Fail("Payout partner is required for calculation.");

        // Get exchange rate: by payout partner + currency pair + country
        var rateResult = await _exchangeRateService.GetCurrentRateAsync(
            dto.SendCurrency, dto.ReceiveCurrency,
            dto.PayoutPartnerId.Value, dto.ReceiverCountry);

        if (!rateResult.Success || rateResult.Data == null)
            return ApiResponse<TransferCalculationResultDto>.Fail("No active exchange rate found for this currency pair and payout partner.");

        var rateRounding = await _settings.GetIntAsync("rate.rounding", 2);
        var exchangeRate = rateResult.Data.Rate - (rateResult.Data.Margin ?? 0);
        var receiveAmount = Math.Round(dto.SendAmount * exchangeRate, rateRounding);

        // Get commission: full specificity scoring
        var serviceCharge = await _commissionService.CalculateCommissionAsync(
            dto.SendAmount,
            dto.SenderCountry,
            dto.ReceiverCountry,
            dto.SendCurrency,
            dto.ReceiveCurrency,
            dto.PaymentMethodName,
            dto.SendingAgentId,
            dto.PayoutPartnerId);

        var totalPayable = Math.Round(dto.SendAmount + serviceCharge, 2);

        // Run compliance check and include violations in the response
        var complianceResult = await _complianceService.CheckComplianceAsync(new ComplianceCheckRequest
        {
            SendAmount = dto.SendAmount,
            SenderCountry = dto.SenderCountry,
            ReceiverCountry = dto.ReceiverCountry,
            SenderName = dto.SenderName ?? "",
            ReceiverName = dto.ReceiverName ?? "",
            SendCurrency = dto.SendCurrency,
            CustomerId = dto.CustomerId,
            AgentId = dto.SendingAgentId
        });

        // Check agent balance and limit (Feature 4)
        decimal? agentAvailableBalance = null;
        string? balanceWarning = null;
        if (dto.SendingAgentId.HasValue && dto.SendingAgentId.Value > 0)
        {
            var calcAgent = await _agentRepo.GetByIdAsync(dto.SendingAgentId.Value);
            if (calcAgent != null)
            {
                var effectiveLimit = await GetEffectiveCreditLimitAsync(dto.SendingAgentId.Value, calcAgent.CreditLimit);
                var available = effectiveLimit - calcAgent.CurrentBalance;
                agentAvailableBalance = available;
                if (totalPayable > available)
                    balanceWarning = $"Insufficient balance. Required: {totalPayable:F2}, Available: {available:F2}";
                else if (totalPayable > effectiveLimit)
                    balanceWarning = $"Transaction exceeds credit limit of {effectiveLimit:F2}";
            }
        }

        return ApiResponse<TransferCalculationResultDto>.Ok(new TransferCalculationResultDto
        {
            SendAmount = dto.SendAmount,
            SendCurrency = dto.SendCurrency,
            ReceiveAmount = receiveAmount,
            ReceiveCurrency = dto.ReceiveCurrency,
            ExchangeRate = exchangeRate,
            ServiceCharge = serviceCharge,
            TotalPayable = totalPayable,
            AgentAvailableBalance = agentAvailableBalance,
            BalanceWarning = balanceWarning,
            ComplianceViolations = complianceResult.Data ?? new()
        });
    }

    /// <summary>
    /// Calculates an agent's commission share from the total commission
    /// using the AgentCommissions table configuration (Percentage or Flat).
    /// </summary>
    private async Task<decimal> CalculateAgentCommissionAsync(int agentId, decimal totalCommission)
    {
        var commissions = await _agentCommRepo.FindAsync(c => c.AgentId == agentId && c.IsActive);
        var config = commissions.FirstOrDefault();
        if (config == null) return 0;

        if (config.CommissionType == "Percentage")
            return Math.Round(totalCommission * config.CommissionValue / 100m, 2);

        // Flat: capped at total commission
        return Math.Min(Math.Round(config.CommissionValue, 2), totalCommission);
    }

    public async Task<ApiResponse<TransactionResultDto>> GetTransactionByIdAsync(long id)
    {
        var transaction = await _transRepo.GetByIdAsync(id);
        if (transaction == null)
            return ApiResponse<TransactionResultDto>.Fail("Transaction not found.");
        return ApiResponse<TransactionResultDto>.Ok(MapToDto(transaction));
    }

    private static string GenerateReferenceNumber(string prefix = "RMT")
        => $"{prefix}{DateTime.UtcNow:yyyyMMdd}{Guid.NewGuid().ToString()[..8].ToUpper()}";

    private static TransactionResultDto MapToDto(Transaction t) => new()
    {
        Id = t.Id,
        ReferenceNumber = t.ReferenceNumber,
        SenderName = t.SenderName,
        SenderCountry = t.SenderCountry,
        ReceiverName = t.ReceiverName,
        ReceiverCountry = t.ReceiverCountry,
        ReceiverBankName = t.ReceiverBankName,
        ReceiverBankCode = t.ReceiverBankCode,
        ReceiverAccountNumber = t.ReceiverAccountNumber,
        ReceiverBranchName = t.ReceiverBranchName,
        ReceiverBranchCode = t.ReceiverBranchCode,
        ReceiverBankId = t.ReceiverBankId,
        ReceiverBranchId = t.ReceiverBranchId,
        SendAmount = t.SendAmount,
        SendCurrency = t.SendCurrency,
        ReceiveAmount = t.ReceiveAmount,
        ReceiveCurrency = t.ReceiveCurrency,
        ExchangeRateApplied = t.ExchangeRateApplied,
        TotalCommission = t.TotalCommission,
        AgentCommission = t.AgentCommission,
        PayoutAgentCommission = t.PayoutAgentCommission,
        CompanyCommission = t.CompanyCommission,
        Status = t.Status.ToString(),
        PaymentMethod = (int)t.PaymentMethod,
        PayoutMethod = (int)t.PayoutMethod,
        PaymentMethodName = t.PaymentMethodName,
        PayoutMethodName = t.PayoutMethodName,
        SendingAgentName = t.SendingAgentName,
        PayoutAgentName = t.PayoutAgentName,
        Purpose = t.Purpose,
        Notes = t.Notes,
        SenderPhone = t.SenderPhone,
        SenderEmail = t.SenderEmail,
        SenderIdType = t.SenderIdType,
        SenderIdNumber = t.SenderIdNumber,
        ReceiverPhone = t.ReceiverPhone,
        ReceiverEmail = t.ReceiverEmail,
        CustomerId = t.CustomerId,
        ReceiverId = t.ReceiverId,
        AgentId = t.AgentId,
        PayoutAgentId = t.PayoutAgentId,
        ApprovedByUserId = t.ApprovedByUserId,
        CreatedAt = t.CreatedAt,
        UpdatedAt = t.UpdatedAt,
        CompletedAt = t.CompletedAt
    };
}
