using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Agent;
using Remittance.Application.DTOs.Common;
using Remittance.Application.DTOs.Customer;
using Remittance.Application.Interfaces;
using Remittance.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Remittance.API.Controllers.Customer;

[ApiController]
[Route("api/customer")]
[Authorize(Roles = "Customer")]
public class CustomerController : ControllerBase
{
    private readonly ITransactionService _transactionService;
    private readonly IExchangeRateService _rateService;
    private readonly ApplicationDbContext _context;

    public CustomerController(
        ITransactionService transactionService,
        IExchangeRateService rateService,
        ApplicationDbContext context)
    {
        _transactionService = transactionService;
        _rateService = rateService;
        _context = context;
    }

    [HttpGet("transactions")]
    public async Task<IActionResult> GetTransactions()
    {
        var customerId = await GetCustomerIdAsync();
        if (customerId == null) return BadRequest("Customer profile not found.");

        var transactions = (await _context.Transactions
            .Where(t => t.CustomerId == customerId.Value)
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync())
            .Select(t => new CustomerTransactionDto
            {
                Id = t.Id,
                ReferenceNumber = t.ReferenceNumber,
                ReceiverName = t.ReceiverName,
                ReceiverCountry = t.ReceiverCountry,
                SendAmount = t.SendAmount,
                SendCurrency = t.SendCurrency,
                ReceiveAmount = t.ReceiveAmount,
                ReceiveCurrency = t.ReceiveCurrency,
                Status = t.Status.ToString(),
                CreatedAt = t.CreatedAt
            })
            .ToList();

        return Ok(ApiResponse<List<CustomerTransactionDto>>.Ok(transactions));
    }

    [HttpPost("transactions/send")]
    public async Task<IActionResult> SendTransaction([FromBody] SendTransactionDto dto)
    {
        var customerId = await GetCustomerIdAsync();
        if (customerId == null) return BadRequest("Customer profile not found.");

        var customer = await _context.Customers.FindAsync(customerId.Value);
        if (customer != null && !customer.IsKycVerified)
            return BadRequest(ApiResponse<string>.Fail("KYC verification required before sending transactions."));

        var result = await _transactionService.SendCustomerTransactionAsync(dto, customerId.Value);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("rates")]
    [AllowAnonymous]
    public async Task<IActionResult> GetRate([FromQuery] string sourceCurrency, [FromQuery] string destinationCurrency,
        [FromQuery] int payoutPartnerId = 0, [FromQuery] string? country = null)
    {
        var result = await _rateService.GetCurrentRateAsync(sourceCurrency, destinationCurrency, payoutPartnerId, country);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    private async Task<int?> GetCustomerIdAsync()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(userId)) return null;

        var customer = await _context.Customers.FirstOrDefaultAsync(c => c.UserId == userId);
        return customer?.Id;
    }
}
