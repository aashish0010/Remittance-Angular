using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.API.Helpers;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/commissions")]
[Authorize]
[MenuPermission("/admin/commissions")]
public class AdminCommissionsController : ControllerBase
{
    private readonly ICommissionService _commissionService;

    public AdminCommissionsController(ICommissionService commissionService)
    {
        _commissionService = commissionService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await _commissionService.GetAllRatesAsync();
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateCommissionRateDto dto)
    {
        var result = await _commissionService.CreateRateAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] CreateCommissionRateDto dto)
    {
        var result = await _commissionService.UpdateRateAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _commissionService.DeleteRateAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("paged")]
    public async Task<IActionResult> GetPaged([FromQuery] PagedRequest request)
    {
        var result = await _commissionService.GetAllRatesAsync();
        if (!result.Success || result.Data == null)
            return Ok(ApiResponse<PagedResult<CommissionRateDto>>.Fail(result.Message));

        IEnumerable<CommissionRateDto> query = result.Data;

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(x =>
                (x.AgentName?.ToLower().Contains(search) == true) ||
                (x.PayoutAgentName?.ToLower().Contains(search) == true) ||
                (x.SourceCountry?.ToLower().Contains(search) == true) ||
                (x.DestinationCountry?.ToLower().Contains(search) == true) ||
                (x.PaymentMethod?.ToLower().Contains(search) == true));
        }

        var totalCount = query.Count();
        var items = query
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        var paged = new PagedResult<CommissionRateDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        };
        return Ok(ApiResponse<PagedResult<CommissionRateDto>>.Ok(paged));
    }

    [HttpGet("export")]
    public async Task<IActionResult> Export([FromQuery] string format = "excel", [FromQuery] string? search = null)
    {
        var result = await _commissionService.GetAllRatesAsync();
        if (!result.Success || result.Data == null)
            return BadRequest(ApiResponse<object>.Fail(result.Message));

        IEnumerable<CommissionRateDto> query = result.Data;

        if (!string.IsNullOrEmpty(search))
        {
            var s = search.ToLower();
            query = query.Where(x =>
                (x.AgentName?.ToLower().Contains(s) == true) ||
                (x.PayoutAgentName?.ToLower().Contains(s) == true) ||
                (x.SourceCountry?.ToLower().Contains(s) == true) ||
                (x.DestinationCountry?.ToLower().Contains(s) == true));
        }

        var data = query.Select(x => new
        {
            x.Id, x.AgentName, x.PayoutAgentName, x.SourceCountry, x.DestinationCountry,
            x.PaymentMethod, x.SourceCurrency, x.DestinationCurrency,
            x.MinAmount, x.MaxAmount, x.CommissionPercent, x.FlatFee, x.IsActive
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "commissions.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "Commissions");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "commissions.xlsx");
    }
}
