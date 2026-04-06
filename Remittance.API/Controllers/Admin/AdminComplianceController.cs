using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.API.Helpers;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/compliance")]
[Authorize]
[MenuPermission("/admin/compliance")]
public class AdminComplianceController : ControllerBase
{
    private readonly IComplianceService _complianceService;

    public AdminComplianceController(IComplianceService complianceService)
    {
        _complianceService = complianceService;
    }

    // Alerts
    [HttpGet("alerts")]
    public async Task<IActionResult> GetAlerts([FromQuery] bool? resolved)
    {
        var result = await _complianceService.GetAlertsAsync(resolved);
        return Ok(result);
    }

    [HttpPut("alerts/{id}/resolve")]
    public async Task<IActionResult> ResolveAlert(long id, [FromBody] string resolution)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "";
        var result = await _complianceService.ResolveAlertAsync(id, resolution, userId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("alerts/{id}/reject")]
    public async Task<IActionResult> RejectAlert(long id)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "";
        var result = await _complianceService.RejectAlertAsync(id, userId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("alerts/{id}/release")]
    public async Task<IActionResult> ReleaseTransaction(long id)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "";
        var result = await _complianceService.ReleaseTransactionAsync(id, userId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    // Rules
    [HttpGet("rules")]
    public async Task<IActionResult> GetRules()
    {
        var result = await _complianceService.GetRulesAsync();
        return Ok(result);
    }

    [HttpPost("rules")]
    public async Task<IActionResult> CreateRule([FromBody] CreateComplianceRuleDto dto)
    {
        var result = await _complianceService.CreateRuleAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("rules/{id}")]
    public async Task<IActionResult> UpdateRule(int id, [FromBody] CreateComplianceRuleDto dto)
    {
        var result = await _complianceService.UpdateRuleAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("rules/{id}")]
    public async Task<IActionResult> DeleteRule(int id)
    {
        var result = await _complianceService.DeleteRuleAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("rules")]
    public async Task<IActionResult> DeleteAllRules()
    {
        var result = await _complianceService.DeleteAllRulesAsync();
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("rules/{id}/toggle")]
    public async Task<IActionResult> ToggleRule(int id)
    {
        var result = await _complianceService.ToggleRuleAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("alerts/paged")]
    public async Task<IActionResult> GetAlertsPaged([FromQuery] PagedRequest request, [FromQuery] bool? resolved = null)
    {
        var result = await _complianceService.GetAlertsAsync(resolved);
        if (!result.Success || result.Data == null)
            return Ok(ApiResponse<PagedResult<ComplianceAlertDto>>.Fail(result.Message));

        IEnumerable<ComplianceAlertDto> query = result.Data;

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(x =>
                (x.ReferenceNumber?.ToLower().Contains(search) == true) ||
                (x.AlertType?.ToLower().Contains(search) == true) ||
                (x.SenderName?.ToLower().Contains(search) == true) ||
                (x.ReceiverName?.ToLower().Contains(search) == true) ||
                (x.Description?.ToLower().Contains(search) == true));
        }

        var totalCount = query.Count();
        var items = query
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        var paged = new PagedResult<ComplianceAlertDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        };
        return Ok(ApiResponse<PagedResult<ComplianceAlertDto>>.Ok(paged));
    }

    [HttpGet("alerts/export")]
    public async Task<IActionResult> ExportAlerts([FromQuery] string format = "excel", [FromQuery] bool? resolved = null, [FromQuery] string? search = null)
    {
        var result = await _complianceService.GetAlertsAsync(resolved);
        if (!result.Success || result.Data == null)
            return BadRequest(ApiResponse<object>.Fail(result.Message));

        IEnumerable<ComplianceAlertDto> query = result.Data;

        if (!string.IsNullOrEmpty(search))
        {
            var s = search.ToLower();
            query = query.Where(x =>
                (x.ReferenceNumber?.ToLower().Contains(s) == true) ||
                (x.AlertType?.ToLower().Contains(s) == true) ||
                (x.SenderName?.ToLower().Contains(s) == true) ||
                (x.ReceiverName?.ToLower().Contains(s) == true));
        }

        var data = query.Select(x => new
        {
            x.Id, x.TransactionId, x.ReferenceNumber, x.AlertType, x.Description,
            x.IsResolved, x.Resolution, x.ResolvedAt, x.SenderName, x.SenderCountry,
            x.ReceiverName, x.ReceiverCountry, x.SendAmount, x.SendCurrency,
            x.ReceiveAmount, x.ReceiveCurrency, x.TransactionStatus, x.CreatedAt
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "compliance-alerts.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "ComplianceAlerts");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "compliance-alerts.xlsx");
    }
}
