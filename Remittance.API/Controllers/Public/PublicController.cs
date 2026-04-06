using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;

namespace Remittance.API.Controllers.Public;

/// <summary>
/// Unauthenticated endpoints — safe for pre-login use (login page branding, etc.).
/// </summary>
[ApiController]
[Route("api/public")]
[AllowAnonymous]
public class PublicController : ControllerBase
{
    private readonly ISettingsService _settings;

    public PublicController(ISettingsService settings)
    {
        _settings = settings;
    }

    /// <summary>
    /// Returns public company branding info.
    /// Called at app bootstrap (before login) so the login page and both portals
    /// can display the company name, support contact, and default currency.
    /// </summary>
    [HttpGet("company")]
    public async Task<IActionResult> GetCompanyInfo()
    {
        var info = new
        {
            companyName     = await _settings.GetAsync("general.companyName", ""),
            supportEmail    = await _settings.GetAsync("general.supportEmail", ""),
            defaultCurrency = await _settings.GetAsync("general.defaultCurrency", "USD"),
        };
        return Ok(ApiResponse<object>.Ok(info));
    }
}
