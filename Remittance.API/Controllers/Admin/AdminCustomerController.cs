using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.API.Helpers;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/customers")]
[Authorize]
[MenuPermission("/admin/customer-register")]
public class AdminCustomerController : ControllerBase
{
    private readonly ICustomerManagementService _customerService;

    public AdminCustomerController(ICustomerManagementService customerService)
    {
        _customerService = customerService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await _customerService.GetAllCustomersAsync();
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var result = await _customerService.GetCustomerByIdAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateCustomerDto dto)
    {
        var result = await _customerService.CreateCustomerAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] CreateCustomerDto dto)
    {
        var result = await _customerService.UpdateCustomerAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/kyc-approve")]
    public async Task<IActionResult> ApproveKyc(int id)
    {
        var result = await _customerService.ApproveKycAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/kyc-reject")]
    public async Task<IActionResult> RejectKyc(int id)
    {
        var result = await _customerService.RejectKycAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/kyc-level")]
    public async Task<IActionResult> SetKycLevel(int id, [FromBody] SetKycLevelDto dto)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "";
        var result = await _customerService.SetKycLevelAsync(id, dto.KycLevel, userId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/toggle-status")]
    public async Task<IActionResult> ToggleStatus(int id)
    {
        var result = await _customerService.ToggleCustomerStatusAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _customerService.DeleteCustomerAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("paged")]
    public async Task<IActionResult> GetPaged([FromQuery] PagedRequest request)
    {
        var result = await _customerService.GetAllCustomersAsync();
        if (!result.Success || result.Data == null)
            return Ok(ApiResponse<PagedResult<CustomerDto>>.Fail(result.Message));

        IEnumerable<CustomerDto> query = result.Data;

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(x =>
                (x.FullName?.ToLower().Contains(search) == true) ||
                (x.Email?.ToLower().Contains(search) == true) ||
                (x.Phone?.ToLower().Contains(search) == true) ||
                (x.Country?.ToLower().Contains(search) == true));
        }

        var totalCount = query.Count();
        var items = query
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        var paged = new PagedResult<CustomerDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        };
        return Ok(ApiResponse<PagedResult<CustomerDto>>.Ok(paged));
    }

    [HttpGet("export")]
    public async Task<IActionResult> Export([FromQuery] string format = "excel", [FromQuery] string? search = null)
    {
        var result = await _customerService.GetAllCustomersAsync();
        if (!result.Success || result.Data == null)
            return BadRequest(ApiResponse<object>.Fail(result.Message));

        IEnumerable<CustomerDto> query = result.Data;

        if (!string.IsNullOrEmpty(search))
        {
            var s = search.ToLower();
            query = query.Where(x =>
                (x.FullName?.ToLower().Contains(s) == true) ||
                (x.Email?.ToLower().Contains(s) == true) ||
                (x.Phone?.ToLower().Contains(s) == true) ||
                (x.Country?.ToLower().Contains(s) == true));
        }

        var data = query.Select(x => new
        {
            x.Id, x.FullName, x.Email, x.Phone, x.Country, x.City,
            x.Nationality, x.IdDocumentType, x.IdDocumentNumber,
            x.IsKycVerified, x.CreatedAt
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "customers.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "Customers");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "customers.xlsx");
    }
}
