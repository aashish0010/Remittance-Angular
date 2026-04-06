using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.API.Helpers;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/accounting")]
[Authorize]
[MenuPermission("/admin/reports/agent-statement")]
public class AdminAccountingController : ControllerBase
{
    private readonly IAccountingService _accountingService;

    public AdminAccountingController(IAccountingService accountingService)
    {
        _accountingService = accountingService;
    }

    [HttpGet("agents")]
    public async Task<IActionResult> GetAgentSummaries()
    {
        var result = await _accountingService.GetAgentAccountingSummariesAsync();
        return Ok(result);
    }

    [HttpGet("agents/{agentId}/adjustments")]
    public async Task<IActionResult> GetAdjustments(int agentId)
    {
        var result = await _accountingService.GetAdjustmentsForAgentAsync(agentId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPost("adjustments")]
    public async Task<IActionResult> CreateAdjustment([FromBody] CreateAgentLimitAdjustmentDto dto)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "";
        var result = await _accountingService.CreateAdjustmentAsync(dto, userId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("adjustments/{id}/deactivate")]
    public async Task<IActionResult> DeactivateAdjustment(long id)
    {
        var result = await _accountingService.DeactivateAdjustmentAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("agents/paged")]
    public async Task<IActionResult> GetAgentSummariesPaged([FromQuery] PagedRequest request)
    {
        var result = await _accountingService.GetAgentAccountingSummariesAsync();
        if (!result.Success || result.Data == null)
            return Ok(ApiResponse<PagedResult<AgentAccountingSummaryDto>>.Fail(result.Message));

        IEnumerable<AgentAccountingSummaryDto> query = result.Data;

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(x =>
                (x.BusinessName?.ToLower().Contains(search) == true) ||
                (x.Country?.ToLower().Contains(search) == true) ||
                (x.AgentType?.ToLower().Contains(search) == true) ||
                (x.Currency?.ToLower().Contains(search) == true));
        }

        var totalCount = query.Count();
        var items = query
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        var paged = new PagedResult<AgentAccountingSummaryDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        };
        return Ok(ApiResponse<PagedResult<AgentAccountingSummaryDto>>.Ok(paged));
    }

    [HttpGet("agents/export")]
    public async Task<IActionResult> ExportAgentSummaries([FromQuery] string format = "excel", [FromQuery] string? search = null)
    {
        var result = await _accountingService.GetAgentAccountingSummariesAsync();
        if (!result.Success || result.Data == null)
            return BadRequest(ApiResponse<object>.Fail(result.Message));

        IEnumerable<AgentAccountingSummaryDto> query = result.Data;

        if (!string.IsNullOrEmpty(search))
        {
            var s = search.ToLower();
            query = query.Where(x =>
                (x.BusinessName?.ToLower().Contains(s) == true) ||
                (x.Country?.ToLower().Contains(s) == true) ||
                (x.AgentType?.ToLower().Contains(s) == true));
        }

        var data = query.Select(x => new
        {
            x.AgentId, x.BusinessName, x.Country, x.Currency, x.AgentType,
            x.FundingType, x.BaseCreditLimit, x.EffectiveCreditLimit,
            x.CurrentBalance, AvailableBalance = x.AvailableBalance,
            x.ActiveAdjustments, x.Status, x.CommissionMode, x.CommissionValue
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "agent-accounting.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "AgentAccounting");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "agent-accounting.xlsx");
    }
}
