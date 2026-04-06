using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.API.Helpers;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/receivers")]
[Authorize]
[MenuPermission("/admin/receivers")]
public class AdminReceiverController : ControllerBase
{
    private readonly IReceiverService _receiverService;

    public AdminReceiverController(IReceiverService receiverService)
    {
        _receiverService = receiverService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await _receiverService.GetAllReceiversAsync();
        return Ok(result);
    }

    [HttpGet("by-customer/{customerId}")]
    public async Task<IActionResult> GetByCustomer(int customerId)
    {
        var result = await _receiverService.GetReceiversByCustomerAsync(customerId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateReceiverDto dto)
    {
        var result = await _receiverService.CreateReceiverAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] CreateReceiverDto dto)
    {
        var result = await _receiverService.UpdateReceiverAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/toggle-status")]
    public async Task<IActionResult> ToggleStatus(int id)
    {
        var result = await _receiverService.ToggleReceiverStatusAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _receiverService.DeleteReceiverAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("paged")]
    public async Task<IActionResult> GetPaged([FromQuery] PagedRequest request)
    {
        var result = await _receiverService.GetAllReceiversAsync();
        if (!result.Success || result.Data == null)
            return Ok(ApiResponse<PagedResult<ReceiverDto>>.Fail(result.Message));

        IEnumerable<ReceiverDto> query = result.Data;

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(x =>
                (x.FullName?.ToLower().Contains(search) == true) ||
                (x.CustomerName?.ToLower().Contains(search) == true) ||
                (x.Phone?.ToLower().Contains(search) == true) ||
                (x.Country?.ToLower().Contains(search) == true) ||
                (x.BankName?.ToLower().Contains(search) == true) ||
                (x.AccountNumber?.ToLower().Contains(search) == true));
        }

        var totalCount = query.Count();
        var items = query
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        var paged = new PagedResult<ReceiverDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        };
        return Ok(ApiResponse<PagedResult<ReceiverDto>>.Ok(paged));
    }

    [HttpGet("export")]
    public async Task<IActionResult> Export([FromQuery] string format = "excel", [FromQuery] string? search = null)
    {
        var result = await _receiverService.GetAllReceiversAsync();
        if (!result.Success || result.Data == null)
            return BadRequest(ApiResponse<object>.Fail(result.Message));

        IEnumerable<ReceiverDto> query = result.Data;

        if (!string.IsNullOrEmpty(search))
        {
            var s = search.ToLower();
            query = query.Where(x =>
                (x.FullName?.ToLower().Contains(s) == true) ||
                (x.CustomerName?.ToLower().Contains(s) == true) ||
                (x.Phone?.ToLower().Contains(s) == true) ||
                (x.Country?.ToLower().Contains(s) == true));
        }

        var data = query.Select(x => new
        {
            x.Id, x.CustomerId, x.CustomerName, x.FullName, x.Phone, x.Email,
            x.Country, x.City, x.BankName, x.AccountNumber, x.Relationship,
            x.IsActive, x.CreatedAt
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "receivers.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "Receivers");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "receivers.xlsx");
    }
}
