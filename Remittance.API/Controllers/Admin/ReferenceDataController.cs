using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Common;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/reference")]
[Authorize]
public class ReferenceDataController : ControllerBase
{
    private readonly IRepository<SetupField> _setupFieldRepo;
    private readonly IRepository<DocumentTypeConfig> _docTypeRepo;
    private readonly IRepository<SystemSetting> _settingRepo;

    public ReferenceDataController(
        IRepository<SetupField> setupFieldRepo,
        IRepository<DocumentTypeConfig> docTypeRepo,
        IRepository<SystemSetting> settingRepo)
    {
        _setupFieldRepo = setupFieldRepo;
        _docTypeRepo = docTypeRepo;
        _settingRepo = settingRepo;
    }
    [HttpGet("countries")]
    public async Task<IActionResult> GetCountries()
    {
        var fields = await _setupFieldRepo.FindAsync(f => f.Category == SetupFieldCategory.Country && f.IsActive);
        var result = fields.OrderBy(f => f.SortOrder).ThenBy(f => f.Name)
            .Select(f => new CountryDto(f.Name, f.Description ?? f.Code)).ToList();

        // Fallback: if no countries seeded yet, return a minimal set
        if (result.Count == 0)
        {
            result = new List<CountryDto>
            {
                new("United States", "USD"), new("United Kingdom", "GBP"),
                new("Nepal", "NPR"), new("India", "INR")
            };
        }
        return Ok(ApiResponse<List<CountryDto>>.Ok(result));
    }

    [HttpGet("currencies")]
    public async Task<IActionResult> GetCurrencies()
    {
        var fields = await _setupFieldRepo.FindAsync(f => f.Category == SetupFieldCategory.Currency && f.IsActive);
        var result = fields.OrderBy(f => f.SortOrder).ThenBy(f => f.Name)
            .Select(f => f.Code).ToList();

        // Fallback
        if (result.Count == 0)
        {
            result = new List<string> { "USD", "EUR", "GBP", "INR", "NPR" };
        }
        return Ok(ApiResponse<List<string>>.Ok(result));
    }

    [HttpGet("setup-fields")]
    public async Task<IActionResult> GetSetupFields([FromQuery] string? category)
    {
        IEnumerable<SetupField> fields;
        if (!string.IsNullOrEmpty(category) && Enum.TryParse<SetupFieldCategory>(category, true, out var cat))
            fields = await _setupFieldRepo.FindAsync(f => f.Category == cat && f.IsActive);
        else
            fields = await _setupFieldRepo.FindAsync(f => f.IsActive);

        var result = fields.OrderBy(f => f.Category).ThenBy(f => f.SortOrder).ThenBy(f => f.Name)
            .Select(f => new { f.Id, Category = f.Category.ToString(), f.Code, f.Name, f.Description, f.IsActive });
        return Ok(ApiResponse<object>.Ok(result));
    }

    [HttpGet("document-types")]
    public async Task<IActionResult> GetDocumentTypes()
    {
        var types = await _docTypeRepo.FindAsync(t => t.IsActive);
        var result = types.OrderBy(t => t.SortOrder).ThenBy(t => t.Name)
            .Select(t => new { t.Id, t.Name, t.Code, t.RequiredSides });
        return Ok(ApiResponse<object>.Ok(result));
    }

    [HttpGet("settings")]
    public async Task<IActionResult> GetSettings()
    {
        var settings = await _settingRepo.GetAllAsync();
        var result = settings.Select(s => new { s.Key, s.Value });
        return Ok(ApiResponse<object>.Ok(result));
    }
}
