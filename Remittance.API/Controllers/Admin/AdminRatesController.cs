using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.API.Helpers;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/rates")]
[Authorize]
[MenuPermission("/admin/rates")]
public class AdminRatesController : ControllerBase
{
    private readonly IExchangeRateService _rateService;

    public AdminRatesController(IExchangeRateService rateService)
    {
        _rateService = rateService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await _rateService.GetAllRatesAsync();
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateExchangeRateDto dto)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "";
        var result = await _rateService.CreateRateAsync(dto, userId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] CreateExchangeRateDto dto)
    {
        var result = await _rateService.UpdateRateAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _rateService.DeleteRateAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("paged")]
    public async Task<IActionResult> GetPaged([FromQuery] PagedRequest request)
    {
        var result = await _rateService.GetAllRatesAsync();
        if (!result.Success || result.Data == null)
            return Ok(ApiResponse<PagedResult<ExchangeRateDto>>.Fail(result.Message));

        IEnumerable<ExchangeRateDto> query = result.Data;

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(x =>
                (x.SourceCurrency?.ToLower().Contains(search) == true) ||
                (x.DestinationCurrency?.ToLower().Contains(search) == true) ||
                (x.AgentName?.ToLower().Contains(search) == true) ||
                (x.Country?.ToLower().Contains(search) == true));
        }

        var totalCount = query.Count();
        var items = query
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        var paged = new PagedResult<ExchangeRateDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        };
        return Ok(ApiResponse<PagedResult<ExchangeRateDto>>.Ok(paged));
    }

    [HttpGet("export")]
    public async Task<IActionResult> Export([FromQuery] string format = "excel", [FromQuery] string? search = null)
    {
        var result = await _rateService.GetAllRatesAsync();
        if (!result.Success || result.Data == null)
            return BadRequest(ApiResponse<object>.Fail(result.Message));

        IEnumerable<ExchangeRateDto> query = result.Data;

        if (!string.IsNullOrEmpty(search))
        {
            var s = search.ToLower();
            query = query.Where(x =>
                (x.SourceCurrency?.ToLower().Contains(s) == true) ||
                (x.DestinationCurrency?.ToLower().Contains(s) == true) ||
                (x.AgentName?.ToLower().Contains(s) == true));
        }

        var data = query.Select(x => new
        {
            x.Id, x.AgentName, x.Country, x.SourceCurrency, x.DestinationCurrency,
            x.Rate, x.Margin, x.EffectiveFrom, x.EffectiveTo, x.IsActive
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "exchange-rates.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "ExchangeRates");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "exchange-rates.xlsx");
    }
}
