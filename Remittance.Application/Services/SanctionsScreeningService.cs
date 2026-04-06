using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

public class SanctionsScreeningService : ISanctionsScreeningService
{
    private readonly IRepository<SanctionsScreeningResult> _screeningRepo;
    private readonly IRepository<SanctionEntry> _entryRepo;
    private readonly IRepository<SanctionedCountry> _countryRepo;
    private readonly IUnitOfWork _unitOfWork;

    // In-memory cache (refreshed from DB)
    private static readonly object _lock = new();
    private static List<CachedEntry> _sanctionsList = new();
    private static Dictionary<string, CachedCountry> _sanctionedCountries = new(StringComparer.OrdinalIgnoreCase);
    private static DateTime _lastRefresh = DateTime.MinValue;

    public SanctionsScreeningService(
        IRepository<SanctionsScreeningResult> screeningRepo,
        IRepository<SanctionEntry> entryRepo,
        IRepository<SanctionedCountry> countryRepo,
        IUnitOfWork unitOfWork)
    {
        _screeningRepo = screeningRepo;
        _entryRepo = entryRepo;
        _countryRepo = countryRepo;
        _unitOfWork = unitOfWork;
    }

    #region Screening

    public async Task<ApiResponse<ScreeningResultDto>> ScreenNameAsync(
        string name, string screenedType, long? transactionId = null, int? customerId = null)
    {
        await EnsureListLoadedAsync();

        var result = MatchAgainstList(name);

        var record = new SanctionsScreeningResult
        {
            ScreenedName = name,
            ScreenedType = screenedType,
            Status = result.IsMatch ? ScreeningStatus.PotentialMatch : ScreeningStatus.Clear,
            MatchedName = result.MatchedName,
            MatchedListSource = result.ListSource,
            MatchScore = result.MatchScore,
            TransactionId = transactionId,
            CustomerId = customerId
        };

        await _screeningRepo.AddAsync(record);
        await _unitOfWork.SaveChangesAsync();

        result.Status = record.Status.ToString();
        result.BlockReason = result.IsMatch ? "Name Match" : null;
        return ApiResponse<ScreeningResultDto>.Ok(result);
    }

    public async Task<ApiResponse<List<ScreeningResultDto>>> ScreenTransactionAsync(
        string senderName, string receiverName,
        string? senderCountry = null, string? receiverCountry = null,
        long? transactionId = null, int? customerId = null)
    {
        await EnsureListLoadedAsync();
        var results = new List<ScreeningResultDto>();

        // 1. Check sanctioned countries first
        if (!string.IsNullOrEmpty(senderCountry))
        {
            var senderCountryResult = await CheckCountryAsync(senderCountry, "Sender Country", transactionId, customerId);
            if (senderCountryResult != null)
                results.Add(senderCountryResult);
        }

        if (!string.IsNullOrEmpty(receiverCountry))
        {
            var receiverCountryResult = await CheckCountryAsync(receiverCountry, "Receiver Country", transactionId, customerId);
            if (receiverCountryResult != null)
                results.Add(receiverCountryResult);
        }

        // 2. Screen sender and receiver names
        var senderResult = await ScreenNameAsync(senderName, "Sender", transactionId, customerId);
        if (senderResult.Data != null)
            results.Add(senderResult.Data);

        var receiverResult = await ScreenNameAsync(receiverName, "Receiver", transactionId);
        if (receiverResult.Data != null)
            results.Add(receiverResult.Data);

        return ApiResponse<List<ScreeningResultDto>>.Ok(results);
    }

    public async Task<ApiResponse<bool>> IsCountrySanctionedAsync(string countryCode)
    {
        await EnsureListLoadedAsync();
        bool isSanctioned;
        lock (_lock)
        {
            isSanctioned = _sanctionedCountries.ContainsKey(countryCode);
        }
        return ApiResponse<bool>.Ok(isSanctioned);
    }

    public string? GetCountryRiskLevel(string countryCode)
    {
        lock (_lock)
        {
            return _sanctionedCountries.TryGetValue(countryCode, out var cached) ? cached.RiskLevel : null;
        }
    }

    private async Task<ScreeningResultDto?> CheckCountryAsync(
        string countryCode, string screenedType, long? transactionId, int? customerId)
    {
        CachedCountry? cachedCountry;
        lock (_lock)
        {
            _sanctionedCountries.TryGetValue(countryCode, out cachedCountry);
        }

        if (cachedCountry == null) return null;

        var riskLevel = cachedCountry.RiskLevel;
        var countryName = cachedCountry.CountryName;

        // Low risk — no action needed
        if (riskLevel == "Low") return null;

        // Determine status and blocking based on risk level
        var isBlocked = riskLevel == "Blocked";
        var requiresReview = riskLevel == "High" || riskLevel == "Medium";
        var status = isBlocked ? ScreeningStatus.PotentialMatch
                   : ScreeningStatus.PotentialMatch; // High/Medium also create a review record

        // Persist the screening record
        var record = new SanctionsScreeningResult
        {
            ScreenedName = $"{countryName} ({countryCode})",
            ScreenedType = screenedType,
            Status = status,
            MatchedName = countryName,
            MatchedListSource = $"Sanctioned Country List ({riskLevel} Risk)",
            MatchScore = 1.0,
            TransactionId = transactionId,
            CustomerId = customerId
        };

        await _screeningRepo.AddAsync(record);
        await _unitOfWork.SaveChangesAsync();

        return new ScreeningResultDto
        {
            IsMatch = isBlocked, // Only block for "Blocked" risk level
            ScreenedName = $"{countryName} ({countryCode})",
            MatchedName = countryName,
            ListSource = $"Sanctioned Country List ({riskLevel} Risk)",
            MatchScore = 1.0,
            Status = "PotentialMatch",
            BlockReason = isBlocked ? "Blocked Country" : null,
            RiskLevel = riskLevel,
            RequiresReview = requiresReview
        };
    }

    #endregion

    #region Sanction Entry CRUD

    public async Task<ApiResponse<List<SanctionEntryDto>>> GetAllSanctionEntriesAsync()
    {
        var entries = await _entryRepo.GetAllAsync();
        var dtos = entries.Select(MapEntryDto).ToList();
        return ApiResponse<List<SanctionEntryDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<SanctionEntryDto>> GetSanctionEntryByIdAsync(int id)
    {
        var entry = await _entryRepo.GetByIdAsync(id);
        if (entry == null)
            return ApiResponse<SanctionEntryDto>.Fail("Sanction entry not found");
        return ApiResponse<SanctionEntryDto>.Ok(MapEntryDto(entry));
    }

    public async Task<ApiResponse<SanctionEntryDto>> CreateSanctionEntryAsync(CreateSanctionEntryDto dto, string userId)
    {
        var entry = new SanctionEntry
        {
            Name = dto.Name.Trim(),
            EntryType = dto.EntryType,
            ListSource = dto.ListSource,
            Aliases = dto.Aliases?.Trim(),
            Nationality = dto.Nationality?.Trim(),
            Remarks = dto.Remarks?.Trim(),
            IsActive = true,
            AddedBy = userId
        };

        await _entryRepo.AddAsync(entry);
        await _unitOfWork.SaveChangesAsync();

        // Refresh cache
        await RefreshSanctionsListAsync();

        return ApiResponse<SanctionEntryDto>.Ok(MapEntryDto(entry));
    }

    public async Task<ApiResponse<SanctionEntryDto>> UpdateSanctionEntryAsync(int id, CreateSanctionEntryDto dto)
    {
        var entry = await _entryRepo.GetByIdAsync(id);
        if (entry == null)
            return ApiResponse<SanctionEntryDto>.Fail("Sanction entry not found");

        entry.Name = dto.Name.Trim();
        entry.EntryType = dto.EntryType;
        entry.ListSource = dto.ListSource;
        entry.Aliases = dto.Aliases?.Trim();
        entry.Nationality = dto.Nationality?.Trim();
        entry.Remarks = dto.Remarks?.Trim();
        entry.UpdatedAt = DateTime.UtcNow;

        await _entryRepo.UpdateAsync(entry);
        await _unitOfWork.SaveChangesAsync();

        await RefreshSanctionsListAsync();

        return ApiResponse<SanctionEntryDto>.Ok(MapEntryDto(entry));
    }

    public async Task<ApiResponse<bool>> DeleteSanctionEntryAsync(int id)
    {
        var entry = await _entryRepo.GetByIdAsync(id);
        if (entry == null)
            return ApiResponse<bool>.Fail("Sanction entry not found");

        await _entryRepo.DeleteAsync(entry);
        await _unitOfWork.SaveChangesAsync();

        await RefreshSanctionsListAsync();

        return ApiResponse<bool>.Ok(true);
    }

    public async Task<ApiResponse<bool>> ToggleSanctionEntryAsync(int id)
    {
        var entry = await _entryRepo.GetByIdAsync(id);
        if (entry == null)
            return ApiResponse<bool>.Fail("Sanction entry not found");

        entry.IsActive = !entry.IsActive;
        entry.UpdatedAt = DateTime.UtcNow;
        await _entryRepo.UpdateAsync(entry);
        await _unitOfWork.SaveChangesAsync();

        await RefreshSanctionsListAsync();

        return ApiResponse<bool>.Ok(entry.IsActive);
    }

    #endregion

    #region Sanctioned Country CRUD

    public async Task<ApiResponse<List<SanctionedCountryDto>>> GetAllSanctionedCountriesAsync()
    {
        var countries = await _countryRepo.GetAllAsync();
        var dtos = countries.Select(MapCountryDto).ToList();
        return ApiResponse<List<SanctionedCountryDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<SanctionedCountryDto>> CreateSanctionedCountryAsync(CreateSanctionedCountryDto dto, string userId)
    {
        // Check if country already exists
        var existing = await _countryRepo.FindAsync(c => c.CountryCode == dto.CountryCode.ToUpper());
        if (existing.Any())
            return ApiResponse<SanctionedCountryDto>.Fail("This country is already in the sanctioned list");

        var country = new SanctionedCountry
        {
            CountryCode = dto.CountryCode.ToUpper().Trim(),
            CountryName = dto.CountryName.Trim(),
            SanctionType = dto.SanctionType,
            RiskLevel = dto.RiskLevel,
            ListSource = dto.ListSource,
            Remarks = dto.Remarks?.Trim(),
            IsActive = true,
            AddedBy = userId
        };

        await _countryRepo.AddAsync(country);
        await _unitOfWork.SaveChangesAsync();

        await RefreshSanctionsListAsync();

        return ApiResponse<SanctionedCountryDto>.Ok(MapCountryDto(country));
    }

    public async Task<ApiResponse<SanctionedCountryDto>> UpdateSanctionedCountryAsync(int id, CreateSanctionedCountryDto dto)
    {
        var country = await _countryRepo.GetByIdAsync(id);
        if (country == null)
            return ApiResponse<SanctionedCountryDto>.Fail("Sanctioned country not found");

        country.CountryCode = dto.CountryCode.ToUpper().Trim();
        country.CountryName = dto.CountryName.Trim();
        country.SanctionType = dto.SanctionType;
        country.RiskLevel = dto.RiskLevel;
        country.ListSource = dto.ListSource;
        country.Remarks = dto.Remarks?.Trim();
        country.UpdatedAt = DateTime.UtcNow;

        await _countryRepo.UpdateAsync(country);
        await _unitOfWork.SaveChangesAsync();

        await RefreshSanctionsListAsync();

        return ApiResponse<SanctionedCountryDto>.Ok(MapCountryDto(country));
    }

    public async Task<ApiResponse<bool>> DeleteSanctionedCountryAsync(int id)
    {
        var country = await _countryRepo.GetByIdAsync(id);
        if (country == null)
            return ApiResponse<bool>.Fail("Sanctioned country not found");

        await _countryRepo.DeleteAsync(country);
        await _unitOfWork.SaveChangesAsync();

        await RefreshSanctionsListAsync();

        return ApiResponse<bool>.Ok(true);
    }

    public async Task<ApiResponse<bool>> ToggleSanctionedCountryAsync(int id)
    {
        var country = await _countryRepo.GetByIdAsync(id);
        if (country == null)
            return ApiResponse<bool>.Fail("Sanctioned country not found");

        country.IsActive = !country.IsActive;
        country.UpdatedAt = DateTime.UtcNow;
        await _countryRepo.UpdateAsync(country);
        await _unitOfWork.SaveChangesAsync();

        await RefreshSanctionsListAsync();

        return ApiResponse<bool>.Ok(country.IsActive);
    }

    #endregion

    #region Screening Results Review

    public async Task<ApiResponse<List<ScreeningResultAdminDto>>> GetScreeningResultsAsync()
    {
        var results = await _screeningRepo.GetAllAsync();
        var dtos = results.OrderByDescending(r => r.CreatedAt).Select(r => new ScreeningResultAdminDto
        {
            Id = r.Id,
            ScreenedName = r.ScreenedName,
            ScreenedType = r.ScreenedType,
            Status = r.Status.ToString(),
            MatchedName = r.MatchedName,
            MatchedListSource = r.MatchedListSource,
            MatchScore = r.MatchScore,
            TransactionId = r.TransactionId,
            CustomerId = r.CustomerId,
            ReviewedBy = r.ReviewedBy,
            ReviewedAt = r.ReviewedAt,
            ReviewNotes = r.ReviewNotes,
            CreatedAt = r.CreatedAt
        }).ToList();

        return ApiResponse<List<ScreeningResultAdminDto>>.Ok(dtos);
    }

    public async Task<ApiResponse<ScreeningResultAdminDto>> ReviewScreeningResultAsync(long id, ReviewScreeningDto dto, string userId)
    {
        var result = await _screeningRepo.GetByIdAsync(id);
        if (result == null)
            return ApiResponse<ScreeningResultAdminDto>.Fail("Screening result not found");

        if (!Enum.TryParse<ScreeningStatus>(dto.Status, true, out var status) ||
            (status != ScreeningStatus.ConfirmedMatch && status != ScreeningStatus.FalsePositive))
            return ApiResponse<ScreeningResultAdminDto>.Fail("Status must be ConfirmedMatch or FalsePositive");

        result.Status = status;
        result.ReviewedBy = userId;
        result.ReviewedAt = DateTime.UtcNow;
        result.ReviewNotes = dto.ReviewNotes;

        await _screeningRepo.UpdateAsync(result);
        await _unitOfWork.SaveChangesAsync();

        return ApiResponse<ScreeningResultAdminDto>.Ok(new ScreeningResultAdminDto
        {
            Id = result.Id,
            ScreenedName = result.ScreenedName,
            ScreenedType = result.ScreenedType,
            Status = result.Status.ToString(),
            MatchedName = result.MatchedName,
            MatchedListSource = result.MatchedListSource,
            MatchScore = result.MatchScore,
            TransactionId = result.TransactionId,
            CustomerId = result.CustomerId,
            ReviewedBy = result.ReviewedBy,
            ReviewedAt = result.ReviewedAt,
            ReviewNotes = result.ReviewNotes,
            CreatedAt = result.CreatedAt
        });
    }

    #endregion

    #region Dashboard

    public async Task<ApiResponse<SanctionsDashboardDto>> GetDashboardAsync()
    {
        var entries = await _entryRepo.GetAllAsync();
        var countries = await _countryRepo.GetAllAsync();
        var screenings = await _screeningRepo.GetAllAsync();

        var dashboard = new SanctionsDashboardDto
        {
            TotalSanctionEntries = entries.Count(),
            ActiveSanctionEntries = entries.Count(e => e.IsActive),
            TotalSanctionedCountries = countries.Count(),
            ActiveSanctionedCountries = countries.Count(c => c.IsActive),
            TotalScreenings = screenings.Count(),
            PotentialMatches = screenings.Count(s => s.Status == ScreeningStatus.PotentialMatch),
            ConfirmedMatches = screenings.Count(s => s.Status == ScreeningStatus.ConfirmedMatch),
            FalsePositives = screenings.Count(s => s.Status == ScreeningStatus.FalsePositive),
            PendingReview = screenings.Count(s => s.Status == ScreeningStatus.PotentialMatch && s.ReviewedBy == null)
        };

        return ApiResponse<SanctionsDashboardDto>.Ok(dashboard);
    }

    #endregion

    #region Cache Management

    public async Task RefreshSanctionsListAsync()
    {
        var entries = await _entryRepo.FindAsync(e => e.IsActive);
        var countries = await _countryRepo.FindAsync(c => c.IsActive);

        lock (_lock)
        {
            _sanctionsList = entries.Select(e => new CachedEntry(e.Name, e.ListSource, e.Aliases)).ToList();

            // Also add built-in entries if DB is empty
            if (!_sanctionsList.Any())
            {
                _sanctionsList = GetBuiltInSanctionsList();
            }

            _sanctionedCountries = new Dictionary<string, CachedCountry>(StringComparer.OrdinalIgnoreCase);
            foreach (var c in countries)
            {
                _sanctionedCountries[c.CountryCode] = new CachedCountry(c.CountryName, c.RiskLevel, c.SanctionType);
            }

            _lastRefresh = DateTime.UtcNow;
        }
    }

    private async Task EnsureListLoadedAsync()
    {
        if (_lastRefresh == DateTime.MinValue || (DateTime.UtcNow - _lastRefresh).TotalHours > 1)
        {
            await RefreshSanctionsListAsync();
        }
    }

    #endregion

    #region Matching Logic

    private static ScreeningResultDto MatchAgainstList(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
            return new ScreeningResultDto { ScreenedName = name, IsMatch = false, MatchScore = 0 };

        var normalizedName = NormalizeName(name);
        ScreeningResultDto? bestMatch = null;
        double bestScore = 0;

        List<CachedEntry> currentList;
        lock (_lock)
        {
            currentList = _sanctionsList.ToList();
        }

        foreach (var entry in currentList)
        {
            // Check main name
            var score = CompareNames(normalizedName, NormalizeName(entry.Name));

            // Check aliases
            if (!string.IsNullOrEmpty(entry.Aliases))
            {
                var aliases = entry.Aliases.Split(',', StringSplitOptions.RemoveEmptyEntries);
                foreach (var alias in aliases)
                {
                    var aliasScore = CompareNames(normalizedName, NormalizeName(alias));
                    score = Math.Max(score, aliasScore);
                }
            }

            if (score > bestScore)
            {
                bestScore = score;
                bestMatch = new ScreeningResultDto
                {
                    ScreenedName = name,
                    IsMatch = score >= 0.80,
                    MatchedName = entry.Name,
                    ListSource = entry.ListSource,
                    MatchScore = Math.Round(score, 4)
                };
            }
        }

        return bestMatch ?? new ScreeningResultDto { ScreenedName = name, IsMatch = false, MatchScore = 0 };
    }

    private static double CompareNames(string normalizedName, string normalizedEntry)
    {
        // Exact match
        if (normalizedName == normalizedEntry) return 1.0;

        // Fuzzy match using Dice coefficient
        var score = DiceCoefficient(normalizedName, normalizedEntry);

        // Also check individual name parts (handles name order variations)
        var nameParts = normalizedName.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        var entryParts = normalizedEntry.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        if (nameParts.Length > 1 && entryParts.Length > 1)
        {
            var partMatchCount = nameParts.Count(np => entryParts.Any(ep => ep == np || DiceCoefficient(np, ep) > 0.85));
            var partScore = (double)partMatchCount / Math.Max(nameParts.Length, entryParts.Length);
            score = Math.Max(score, partScore);
        }

        return score;
    }

    private static string NormalizeName(string name)
    {
        return name.Trim().ToLowerInvariant()
            .Replace("-", " ")
            .Replace(".", " ")
            .Replace(",", " ")
            .Replace("  ", " ");
    }

    private static double DiceCoefficient(string a, string b)
    {
        if (string.IsNullOrEmpty(a) || string.IsNullOrEmpty(b)) return 0;
        if (a == b) return 1.0;

        var bigramsA = GetBigrams(a);
        var bigramsB = GetBigrams(b);

        if (bigramsA.Count == 0 || bigramsB.Count == 0) return 0;

        var intersection = bigramsA.Intersect(bigramsB).Count();
        return (2.0 * intersection) / (bigramsA.Count + bigramsB.Count);
    }

    private static List<string> GetBigrams(string input)
    {
        var bigrams = new List<string>();
        for (int i = 0; i < input.Length - 1; i++)
            bigrams.Add(input.Substring(i, 2));
        return bigrams;
    }

    #endregion

    #region Built-in Data

    private static List<CachedEntry> GetBuiltInSanctionsList()
    {
        return new List<CachedEntry>
        {
            new("AL QAEDA", "OFAC-SDN", "AL-QAIDA, AQ"),
            new("TALIBAN", "OFAC-SDN", null),
            new("ISLAMIC STATE", "OFAC-SDN", "ISIS, ISIL, DAESH"),
            new("HEZBOLLAH", "OFAC-SDN", "HIZBALLAH"),
            new("HAMAS", "OFAC-SDN", null),
            new("BOKO HARAM", "OFAC-SDN", null),
            new("AL SHABAAB", "OFAC-SDN", "AL-SHABAB"),
            new("IRANIAN REVOLUTIONARY GUARD", "OFAC-SDN", "IRGC"),
            new("NORTH KOREA GOVERNMENT", "OFAC-SDN", "DPRK"),
        };
    }

    private record CachedEntry(string Name, string ListSource, string? Aliases);
    private record CachedCountry(string CountryName, string RiskLevel, string SanctionType);

    #endregion

    #region Mapping

    private static SanctionEntryDto MapEntryDto(SanctionEntry e) => new()
    {
        Id = e.Id,
        Name = e.Name,
        EntryType = e.EntryType,
        ListSource = e.ListSource,
        Aliases = e.Aliases,
        Nationality = e.Nationality,
        Remarks = e.Remarks,
        IsActive = e.IsActive,
        AddedBy = e.AddedBy,
        CreatedAt = e.CreatedAt
    };

    private static SanctionedCountryDto MapCountryDto(SanctionedCountry c) => new()
    {
        Id = c.Id,
        CountryCode = c.CountryCode,
        CountryName = c.CountryName,
        SanctionType = c.SanctionType,
        RiskLevel = c.RiskLevel,
        ListSource = c.ListSource,
        Remarks = c.Remarks,
        IsActive = c.IsActive,
        AddedBy = c.AddedBy,
        CreatedAt = c.CreatedAt
    };

    #endregion
}
