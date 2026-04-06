using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.API.Helpers;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/routing")]
[Authorize]
[MenuPermission("/admin/routing")]
public class AdminRoutingController : ControllerBase
{
    private readonly IPaymentCorridorService _service;

    public AdminRoutingController(IPaymentCorridorService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await _service.GetAllCorridorsAsync();
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreatePaymentCorridorDto dto)
    {
        var result = await _service.CreateCorridorAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] CreatePaymentCorridorDto dto)
    {
        var result = await _service.UpdateCorridorAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _service.DeleteCorridorAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/toggle")]
    public async Task<IActionResult> Toggle(int id)
    {
        var result = await _service.ToggleCorridorAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    // Payout Partners
    [HttpPost("partners")]
    public async Task<IActionResult> AddPartner([FromBody] CreateCorridorPayoutPartnerDto dto)
    {
        var result = await _service.AddPayoutPartnerAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("partners/{id}")]
    public async Task<IActionResult> UpdatePartner(int id, [FromBody] CreateCorridorPayoutPartnerDto dto)
    {
        var result = await _service.UpdatePayoutPartnerAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("partners/{id}")]
    public async Task<IActionResult> RemovePartner(int id)
    {
        var result = await _service.RemovePayoutPartnerAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("partners/{id}/toggle")]
    public async Task<IActionResult> TogglePartner(int id)
    {
        var result = await _service.TogglePayoutPartnerAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("paged")]
    public async Task<IActionResult> GetPaged([FromQuery] PagedRequest request)
    {
        var result = await _service.GetAllCorridorsAsync();
        if (!result.Success || result.Data == null)
            return Ok(ApiResponse<PagedResult<PaymentCorridorDto>>.Fail(result.Message));

        IEnumerable<PaymentCorridorDto> query = result.Data;

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(x =>
                (x.SourceCountry?.ToLower().Contains(search) == true) ||
                (x.DestinationCountry?.ToLower().Contains(search) == true) ||
                (x.SourceCurrency?.ToLower().Contains(search) == true) ||
                (x.DestinationCurrency?.ToLower().Contains(search) == true) ||
                (x.SendingAgentName?.ToLower().Contains(search) == true));
        }

        var totalCount = query.Count();
        var items = query
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        var paged = new PagedResult<PaymentCorridorDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        };
        return Ok(ApiResponse<PagedResult<PaymentCorridorDto>>.Ok(paged));
    }

    [HttpGet("export")]
    public async Task<IActionResult> Export([FromQuery] string format = "excel", [FromQuery] string? search = null)
    {
        var result = await _service.GetAllCorridorsAsync();
        if (!result.Success || result.Data == null)
            return BadRequest(ApiResponse<object>.Fail(result.Message));

        IEnumerable<PaymentCorridorDto> query = result.Data;

        if (!string.IsNullOrEmpty(search))
        {
            var s = search.ToLower();
            query = query.Where(x =>
                (x.SourceCountry?.ToLower().Contains(s) == true) ||
                (x.DestinationCountry?.ToLower().Contains(s) == true) ||
                (x.SendingAgentName?.ToLower().Contains(s) == true));
        }

        var data = query.Select(x => new
        {
            x.Id, x.SendingAgentName, x.SourceCountry, x.SourceCurrency,
            x.DestinationCountry, x.DestinationCurrency, x.IsActive, x.CreatedAt
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "corridors.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "Corridors");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "corridors.xlsx");
    }
}
