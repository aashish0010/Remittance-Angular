using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Agent;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.API.Helpers;
using Remittance.Domain.Enums;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/transactions")]
[Authorize]
[MenuPermission("/admin/transactions")]
public class AdminTransactionsController : ControllerBase
{
    private readonly ITransactionService _transactionService;

    public AdminTransactionsController(ITransactionService transactionService)
    {
        _transactionService = transactionService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await _transactionService.GetAllTransactionsAsync();
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(long id)
    {
        var result = await _transactionService.GetTransactionByIdAsync(id);
        return result.Success ? Ok(result) : NotFound(result);
    }

    [HttpPut("{id}/approve")]
    public async Task<IActionResult> Approve(long id)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "";
        var result = await _transactionService.ApproveTransactionAsync(id, userId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/complete")]
    public async Task<IActionResult> Complete(long id)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "";
        var result = await _transactionService.CompleteTransactionAsync(id, userId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/cancel")]
    public async Task<IActionResult> Cancel(long id)
    {
        var result = await _transactionService.CancelTransactionAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/status")]
    public async Task<IActionResult> UpdateStatus(long id, [FromBody] TransactionStatus status)
    {
        var result = await _transactionService.UpdateStatusAsync(id, status);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("paged")]
    public async Task<IActionResult> GetPaged([FromQuery] PagedRequest request)
    {
        var result = await _transactionService.GetAllTransactionsAsync();
        if (!result.Success || result.Data == null)
            return Ok(ApiResponse<PagedResult<TransactionResultDto>>.Fail(result.Message));

        IEnumerable<TransactionResultDto> query = result.Data;

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(x =>
                (x.ReferenceNumber?.ToLower().Contains(search) == true) ||
                (x.SenderName?.ToLower().Contains(search) == true) ||
                (x.ReceiverName?.ToLower().Contains(search) == true) ||
                (x.SenderCountry?.ToLower().Contains(search) == true) ||
                (x.ReceiverCountry?.ToLower().Contains(search) == true) ||
                (x.Status?.ToLower().Contains(search) == true));
        }

        var totalCount = query.Count();
        var items = query
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        var paged = new PagedResult<TransactionResultDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        };
        return Ok(ApiResponse<PagedResult<TransactionResultDto>>.Ok(paged));
    }

    [HttpGet("export")]
    public async Task<IActionResult> Export([FromQuery] string format = "excel", [FromQuery] string? search = null)
    {
        var result = await _transactionService.GetAllTransactionsAsync();
        if (!result.Success || result.Data == null)
            return BadRequest(ApiResponse<object>.Fail(result.Message));

        IEnumerable<TransactionResultDto> query = result.Data;

        if (!string.IsNullOrEmpty(search))
        {
            var s = search.ToLower();
            query = query.Where(x =>
                (x.ReferenceNumber?.ToLower().Contains(s) == true) ||
                (x.SenderName?.ToLower().Contains(s) == true) ||
                (x.ReceiverName?.ToLower().Contains(s) == true) ||
                (x.Status?.ToLower().Contains(s) == true));
        }

        var data = query.Select(x => new
        {
            x.Id, x.ReferenceNumber, x.SenderName, x.SenderCountry,
            x.ReceiverName, x.ReceiverCountry, x.SendAmount, x.SendCurrency,
            x.ReceiveAmount, x.ReceiveCurrency, x.ExchangeRateApplied,
            x.TotalCommission, x.AgentCommission, x.PayoutAgentCommission,
            x.CompanyCommission, x.Status, x.SendingAgentName, x.PayoutAgentName,
            x.PaymentMethodName, x.PayoutMethodName, x.CreatedAt, x.CompletedAt
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "transactions.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "Transactions");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "transactions.xlsx");
    }
}
