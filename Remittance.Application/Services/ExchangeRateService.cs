using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class ExchangeRateService : IExchangeRateService
{
    private readonly IRepository<ExchangeRate> _rateRepo;
    private readonly IRepository<Agent> _agentRepo;
    private readonly IRepository<ExchangeRateQuote> _quoteRepo;
    private readonly ISettingsService _settings;
    private readonly IUnitOfWork _unitOfWork;

    public ExchangeRateService(
        IRepository<ExchangeRate> rateRepo,
        IRepository<Agent> agentRepo,
        IRepository<ExchangeRateQuote> quoteRepo,
        ISettingsService settings,
        IUnitOfWork unitOfWork)
    {
        _rateRepo = rateRepo;
        _agentRepo = agentRepo;
        _quoteRepo = quoteRepo;
        _settings = settings;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResponse<List<ExchangeRateDto>>> GetAllRatesAsync()
    {
        var rates = await _rateRepo.GetAllAsync();
        var agents = await _agentRepo.GetAllAsync();
        var agentMap = agents.ToDictionary(a => a.Id, a => a.BusinessName);

        var dtos = rates.Select(r => new ExchangeRateDto
        {
            Id = r.Id,
            AgentId = r.AgentId,
            AgentName = agentMap.GetValueOrDefault(r.AgentId, "Unknown"),
            Country = r.Country,
            SourceCurrency = r.SourceCurrency,
            DestinationCurrency = r.DestinationCurrency,
            Rate = r.Rate,
            Margin = r.Margin,
            IsActive = r.IsActive
        }).ToList();

        return ApiResponse<List<ExchangeRateDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<ExchangeRateDto>> GetCurrentRateAsync(string sourceCurrency, string destinationCurrency,
        int payoutPartnerId, string? country = null)
    {
        // Find rates for this payout partner + currency pair
        var rates = await _rateRepo.FindAsync(r =>
            r.SourceCurrency == sourceCurrency &&
            r.DestinationCurrency == destinationCurrency &&
            r.AgentId == payoutPartnerId &&
            r.IsActive);

        ExchangeRate? rate = null;

        // Priority 1: Match by country
        if (!string.IsNullOrEmpty(country))
        {
            rate = rates.FirstOrDefault(x => x.Country == country);
        }

        // Priority 2: Fallback to rate with no country (global rate for this partner)
        rate ??= rates.FirstOrDefault(x => string.IsNullOrEmpty(x.Country));

        // Priority 3: Any rate for this partner
        rate ??= rates.FirstOrDefault();

        if (rate == null)
            return ApiResponse<ExchangeRateDto>.Fail("Exchange rate not found for this currency pair.");

        var agent = await _agentRepo.GetByIdAsync(rate.AgentId);

        var applyMargin   = await _settings.GetBoolAsync("rate.applyMargin", true);
        var defaultMargin = await _settings.GetDecimalAsync("rate.defaultMargin", 0);
        var margin        = applyMargin ? (rate.Margin ?? defaultMargin) : 0m;

        return ApiResponse<ExchangeRateDto>.Ok(new ExchangeRateDto
        {
            Id = rate.Id,
            AgentId = rate.AgentId,
            AgentName = agent?.BusinessName ?? "Unknown",
            Country = rate.Country,
            SourceCurrency = rate.SourceCurrency,
            DestinationCurrency = rate.DestinationCurrency,
            Rate = rate.Rate,
            Margin = margin,
            IsActive = rate.IsActive
        });
    }

    public async Task<ApiResponse<ExchangeRateDto>> CreateRateAsync(CreateExchangeRateDto dto, string userId)
    {
        // Validate payout partner (must be PayoutAgent type and Approved)
        var agent = await _agentRepo.GetByIdAsync(dto.AgentId);
        if (agent == null || agent.AgentType != AgentType.PayoutAgent)
            return ApiResponse<ExchangeRateDto>.Fail("Invalid payout partner. Agent must be of type Payout Agent.");
        if (agent.Status != AgentStatus.Approved)
            return ApiResponse<ExchangeRateDto>.Fail("Agent must be approved.");

        // Check for duplicate (same agent + country + source/dest currency)
        var srcUpper = dto.SourceCurrency.ToUpperInvariant();
        var destUpper = dto.DestinationCurrency.ToUpperInvariant();
        var duplicate = await _rateRepo.FindAsync(r =>
            r.AgentId == dto.AgentId &&
            r.Country == dto.Country &&
            r.SourceCurrency == srcUpper &&
            r.DestinationCurrency == destUpper);
        if (duplicate.Any())
            return ApiResponse<ExchangeRateDto>.Fail("An exchange rate with the same payout partner, country, and currency pair already exists.");

        var entity = new ExchangeRate
        {
            AgentId = dto.AgentId,
            Country = dto.Country,
            SourceCurrency = srcUpper,
            DestinationCurrency = destUpper,
            Rate = dto.Rate,
            Margin = dto.Margin,
            CreatedByUserId = userId,
            IsActive = true
        };

        await _rateRepo.AddAsync(entity);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<ExchangeRateDto>.Ok(new ExchangeRateDto
        {
            Id = entity.Id,
            AgentId = entity.AgentId,
            AgentName = agent.BusinessName,
            Country = entity.Country,
            SourceCurrency = entity.SourceCurrency,
            DestinationCurrency = entity.DestinationCurrency,
            Rate = entity.Rate,
            Margin = entity.Margin,
            IsActive = entity.IsActive
        }, "Exchange rate created successfully.");
    }

    public async Task<ApiResponse<ExchangeRateDto>> UpdateRateAsync(int id, CreateExchangeRateDto dto)
    {
        var entity = await _rateRepo.GetByIdAsync(id);
        if (entity == null)
            return ApiResponse<ExchangeRateDto>.Fail("Exchange rate not found.");

        // Validate payout partner (must be PayoutAgent type and Approved)
        var agent = await _agentRepo.GetByIdAsync(dto.AgentId);
        if (agent == null || agent.AgentType != AgentType.PayoutAgent)
            return ApiResponse<ExchangeRateDto>.Fail("Invalid payout partner. Agent must be of type Payout Agent.");
        if (agent.Status != AgentStatus.Approved)
            return ApiResponse<ExchangeRateDto>.Fail("Agent must be approved.");

        // Check for duplicate (excluding self)
        var srcUpper = dto.SourceCurrency.ToUpperInvariant();
        var destUpper = dto.DestinationCurrency.ToUpperInvariant();
        var duplicate = await _rateRepo.FindAsync(r =>
            r.Id != id &&
            r.AgentId == dto.AgentId &&
            r.Country == dto.Country &&
            r.SourceCurrency == srcUpper &&
            r.DestinationCurrency == destUpper);
        if (duplicate.Any())
            return ApiResponse<ExchangeRateDto>.Fail("An exchange rate with the same payout partner, country, and currency pair already exists.");

        entity.AgentId = dto.AgentId;
        entity.Country = dto.Country;
        entity.SourceCurrency = srcUpper;
        entity.DestinationCurrency = destUpper;
        entity.Rate = dto.Rate;
        entity.Margin = dto.Margin;


        await _rateRepo.UpdateAsync(entity);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<ExchangeRateDto>.Ok(new ExchangeRateDto
        {
            Id = entity.Id,
            AgentId = entity.AgentId,
            AgentName = agent.BusinessName,
            Country = entity.Country,
            SourceCurrency = entity.SourceCurrency,
            DestinationCurrency = entity.DestinationCurrency,
            Rate = entity.Rate,
            Margin = entity.Margin,
            IsActive = entity.IsActive
        }, "Exchange rate updated.");
    }

    public async Task<ApiResponse<bool>> DeleteRateAsync(int id)
    {
        var entity = await _rateRepo.GetByIdAsync(id);
        if (entity == null)
            return ApiResponse<bool>.Fail("Exchange rate not found.");

        await _rateRepo.DeleteAsync(entity);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<bool>.Ok(true, "Exchange rate deleted.");
    }

    public async Task<decimal> CalculateConversionAsync(string sourceCurrency, string destinationCurrency, decimal amount)
    {
        // Fallback: find any active rate for this currency pair
        var rates = await _rateRepo.FindAsync(r =>
            r.SourceCurrency == sourceCurrency &&
            r.DestinationCurrency == destinationCurrency &&
            r.IsActive);

        var rate = rates.FirstOrDefault();
        if (rate == null)
            throw new InvalidOperationException($"No active exchange rate for {sourceCurrency} -> {destinationCurrency}");

        return amount * (rate.Rate - (rate.Margin ?? 0));
    }

    // ─── Exchange Rate Quote Locking ────────────────────────────────────────

    /// <summary>
    /// Creates a quote that locks the current exchange rate for 60 seconds.
    /// The frontend calls this when showing the calculation, then submits the quoteId with the transaction.
    /// </summary>
    public async Task<ApiResponse<ExchangeRateQuoteDto>> CreateQuoteAsync(
        string sourceCurrency, string destinationCurrency, int payoutPartnerId, string? country = null)
    {
        var rateResult = await GetCurrentRateAsync(sourceCurrency, destinationCurrency, payoutPartnerId, country);
        if (!rateResult.Success || rateResult.Data == null)
            return ApiResponse<ExchangeRateQuoteDto>.Fail(rateResult.Message);

        var rate = rateResult.Data;
        var effectiveRate = rate.Rate - (rate.Margin ?? 0);

        var lockDurationSeconds = await _settings.GetIntAsync("rate.lockDuration", 60);

        var quote = new ExchangeRateQuote
        {
            QuoteId = $"Q{DateTime.UtcNow:yyyyMMddHHmmss}{Guid.NewGuid().ToString()[..6].ToUpper()}",
            ExchangeRateId = rate.Id,
            LockedRate = rate.Rate,
            LockedMargin = rate.Margin ?? 0,
            SourceCurrency = sourceCurrency,
            DestinationCurrency = destinationCurrency,
            ExpiresAt = DateTime.UtcNow.AddSeconds(lockDurationSeconds)
        };

        await _quoteRepo.AddAsync(quote);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<ExchangeRateQuoteDto>.Ok(new ExchangeRateQuoteDto
        {
            QuoteId = quote.QuoteId,
            Rate = quote.LockedRate,
            Margin = quote.LockedMargin,
            EffectiveRate = effectiveRate,
            SourceCurrency = sourceCurrency,
            DestinationCurrency = destinationCurrency,
            ExpiresAt = quote.ExpiresAt,
            ExchangeRateId = quote.ExchangeRateId
        });
    }

    public async Task<ApiResponse<ExchangeRateQuoteDto>> GetQuoteAsync(string quoteId)
    {
        var quotes = await _quoteRepo.FindAsync(q => q.QuoteId == quoteId && !q.IsUsed);
        var quote = quotes.FirstOrDefault();

        if (quote == null)
            return ApiResponse<ExchangeRateQuoteDto>.Fail("Quote not found or already used.");

        if (quote.ExpiresAt < DateTime.UtcNow)
            return ApiResponse<ExchangeRateQuoteDto>.Fail("Quote has expired. Please request a new rate.");

        var effectiveRate = quote.LockedRate - quote.LockedMargin;

        return ApiResponse<ExchangeRateQuoteDto>.Ok(new ExchangeRateQuoteDto
        {
            QuoteId = quote.QuoteId,
            Rate = quote.LockedRate,
            Margin = quote.LockedMargin,
            EffectiveRate = effectiveRate,
            SourceCurrency = quote.SourceCurrency,
            DestinationCurrency = quote.DestinationCurrency,
            ExpiresAt = quote.ExpiresAt,
            ExchangeRateId = quote.ExchangeRateId
        });
    }

    public async Task MarkQuoteUsedAsync(string quoteId, long transactionId)
    {
        var quotes = await _quoteRepo.FindAsync(q => q.QuoteId == quoteId);
        var quote = quotes.FirstOrDefault();
        if (quote != null)
        {
            quote.IsUsed = true;
            quote.TransactionId = transactionId;
            await _quoteRepo.UpdateAsync(quote);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
