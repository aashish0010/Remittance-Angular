using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.API.Helpers;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/sanctions")]
[Authorize]
[MenuPermission("/admin/sanctions")]
public class AdminSanctionsController : ControllerBase
{
    private readonly ISanctionsScreeningService _sanctionsService;

    public AdminSanctionsController(ISanctionsScreeningService sanctionsService)
    {
        _sanctionsService = sanctionsService;
    }

    // Dashboard
    [HttpGet("dashboard")]
    public async Task<IActionResult> GetDashboard()
    {
        var result = await _sanctionsService.GetDashboardAsync();
        return Ok(result);
    }

    // ==================== Sanction Entries ====================

    [HttpGet("entries")]
    public async Task<IActionResult> GetAllEntries()
    {
        var result = await _sanctionsService.GetAllSanctionEntriesAsync();
        return Ok(result);
    }

    [HttpGet("entries/{id}")]
    public async Task<IActionResult> GetEntryById(int id)
    {
        var result = await _sanctionsService.GetSanctionEntryByIdAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPost("entries")]
    public async Task<IActionResult> CreateEntry([FromBody] CreateSanctionEntryDto dto)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "";
        var result = await _sanctionsService.CreateSanctionEntryAsync(dto, userId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("entries/{id}")]
    public async Task<IActionResult> UpdateEntry(int id, [FromBody] CreateSanctionEntryDto dto)
    {
        var result = await _sanctionsService.UpdateSanctionEntryAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("entries/{id}")]
    public async Task<IActionResult> DeleteEntry(int id)
    {
        var result = await _sanctionsService.DeleteSanctionEntryAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("entries/{id}/toggle")]
    public async Task<IActionResult> ToggleEntry(int id)
    {
        var result = await _sanctionsService.ToggleSanctionEntryAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    // Paged entries
    [HttpGet("entries/paged")]
    public async Task<IActionResult> GetPagedEntries([FromQuery] PagedRequest request)
    {
        var result = await _sanctionsService.GetAllSanctionEntriesAsync();
        if (!result.Success || result.Data == null)
            return Ok(ApiResponse<PagedResult<SanctionEntryDto>>.Fail(result.Message));

        IEnumerable<SanctionEntryDto> query = result.Data;

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(x =>
                x.Name.ToLower().Contains(search) ||
                (x.Aliases?.ToLower().Contains(search) == true) ||
                (x.Nationality?.ToLower().Contains(search) == true) ||
                x.EntryType.ToLower().Contains(search) ||
                x.ListSource.ToLower().Contains(search));
        }

        var totalCount = query.Count();
        var items = query
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        return Ok(ApiResponse<PagedResult<SanctionEntryDto>>.Ok(new PagedResult<SanctionEntryDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        }));
    }

    // ==================== Sanctioned Countries ====================

    [HttpGet("countries")]
    public async Task<IActionResult> GetAllCountries()
    {
        var result = await _sanctionsService.GetAllSanctionedCountriesAsync();
        return Ok(result);
    }

    [HttpPost("countries")]
    public async Task<IActionResult> CreateCountry([FromBody] CreateSanctionedCountryDto dto)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "";
        var result = await _sanctionsService.CreateSanctionedCountryAsync(dto, userId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("countries/{id}")]
    public async Task<IActionResult> UpdateCountry(int id, [FromBody] CreateSanctionedCountryDto dto)
    {
        var result = await _sanctionsService.UpdateSanctionedCountryAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("countries/{id}")]
    public async Task<IActionResult> DeleteCountry(int id)
    {
        var result = await _sanctionsService.DeleteSanctionedCountryAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("countries/{id}/toggle")]
    public async Task<IActionResult> ToggleCountry(int id)
    {
        var result = await _sanctionsService.ToggleSanctionedCountryAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    // ==================== Screening Results ====================

    [HttpGet("screenings")]
    public async Task<IActionResult> GetScreeningResults()
    {
        var result = await _sanctionsService.GetScreeningResultsAsync();
        return Ok(result);
    }

    [HttpGet("screenings/paged")]
    public async Task<IActionResult> GetPagedScreenings([FromQuery] PagedRequest request)
    {
        var result = await _sanctionsService.GetScreeningResultsAsync();
        if (!result.Success || result.Data == null)
            return Ok(ApiResponse<PagedResult<ScreeningResultAdminDto>>.Fail(result.Message));

        IEnumerable<ScreeningResultAdminDto> query = result.Data;

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(x =>
                x.ScreenedName.ToLower().Contains(search) ||
                (x.MatchedName?.ToLower().Contains(search) == true) ||
                x.Status.ToLower().Contains(search));
        }

        var totalCount = query.Count();
        var items = query
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        return Ok(ApiResponse<PagedResult<ScreeningResultAdminDto>>.Ok(new PagedResult<ScreeningResultAdminDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        }));
    }

    [HttpPut("screenings/{id}/review")]
    public async Task<IActionResult> ReviewScreening(long id, [FromBody] ReviewScreeningDto dto)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "";
        var result = await _sanctionsService.ReviewScreeningResultAsync(id, dto, userId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    // ==================== Export ====================

    [HttpGet("entries/export")]
    public async Task<IActionResult> ExportEntries([FromQuery] string format = "excel")
    {
        var result = await _sanctionsService.GetAllSanctionEntriesAsync();
        if (!result.Success || result.Data == null)
            return BadRequest(ApiResponse<object>.Fail(result.Message));

        var data = result.Data.Select(x => new
        {
            x.Id, x.Name, x.EntryType, x.ListSource, x.Aliases,
            x.Nationality, x.IsActive, x.CreatedAt
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "sanction-entries.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "Sanction Entries");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "sanction-entries.xlsx");
    }
}
