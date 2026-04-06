namespace Remittance.Application.Interfaces;

/// <summary>
/// Reads system configuration settings from the SystemSetting table.
/// Values are cached per-request (Scoped lifetime).
/// </summary>
public interface ISettingsService
{
    Task<string>  GetAsync(string key, string defaultValue = "");
    Task<bool>    GetBoolAsync(string key, bool defaultValue = false);
    Task<int>     GetIntAsync(string key, int defaultValue = 0);
    Task<decimal> GetDecimalAsync(string key, decimal defaultValue = 0);

    /// <summary>Returns all settings as a flat key→value dictionary (cached for the request).</summary>
    Task<Dictionary<string, string>> GetAllAsync();
}
