using Remittance.Application.Interfaces;
using Remittance.Domain.Entities;
using Remittance.Domain.Interfaces;

namespace Remittance.Application.Services;

/// <summary>
/// Reads SystemSetting records from the database.
/// Caches the full table once per request to avoid repeated round-trips.
/// </summary>
public class SettingsService : ISettingsService
{
    private readonly IRepository<SystemSetting> _repo;
    private Dictionary<string, string>? _cache;

    public SettingsService(IRepository<SystemSetting> repo)
    {
        _repo = repo;
    }

    public async Task<Dictionary<string, string>> GetAllAsync()
    {
        if (_cache == null)
        {
            var all = await _repo.GetAllAsync();
            _cache = all.ToDictionary(s => s.Key, s => s.Value, StringComparer.OrdinalIgnoreCase);
        }
        return _cache;
    }

    public async Task<string> GetAsync(string key, string defaultValue = "")
    {
        var all = await GetAllAsync();
        return all.TryGetValue(key, out var v) && !string.IsNullOrWhiteSpace(v) ? v : defaultValue;
    }

    public async Task<bool> GetBoolAsync(string key, bool defaultValue = false)
    {
        var v = await GetAsync(key);
        if (string.IsNullOrWhiteSpace(v)) return defaultValue;
        return v.Equals("true", StringComparison.OrdinalIgnoreCase) || v == "1";
    }

    public async Task<int> GetIntAsync(string key, int defaultValue = 0)
    {
        var v = await GetAsync(key);
        return int.TryParse(v, out var i) ? i : defaultValue;
    }

    public async Task<decimal> GetDecimalAsync(string key, decimal defaultValue = 0)
    {
        var v = await GetAsync(key);
        return decimal.TryParse(v, System.Globalization.NumberStyles.Any,
            System.Globalization.CultureInfo.InvariantCulture, out var d) ? d : defaultValue;
    }
}
