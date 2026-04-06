using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using Remittance.Application.DTOs.Agent;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.API.Helpers;
using Remittance.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Remittance.API.Controllers.Agent;

[ApiController]
[Route("api/agent")]
[Authorize(Roles = "Agent")]
public class AgentController : ControllerBase
{
    private readonly ITransactionService _transactionService;
    private readonly IAgentManagementService _agentService;
    private readonly IExchangeRateService _rateService;
    private readonly ICustomerManagementService _customerService;
    private readonly IReceiverService _receiverService;
    private readonly IPaymentCorridorService _corridorService;
    private readonly ICommissionService _commissionService;
    private readonly IAgentBankService _bankService;
    private readonly IAgentLocationService _locationService;
    private readonly ApplicationDbContext _context;

    public AgentController(
        ITransactionService transactionService,
        IAgentManagementService agentService,
        IExchangeRateService rateService,
        ICustomerManagementService customerService,
        IReceiverService receiverService,
        IPaymentCorridorService corridorService,
        ICommissionService commissionService,
        IAgentBankService bankService,
        IAgentLocationService locationService,
        ApplicationDbContext context)
    {
        _transactionService = transactionService;
        _agentService = agentService;
        _rateService = rateService;
        _customerService = customerService;
        _receiverService = receiverService;
        _corridorService = corridorService;
        _commissionService = commissionService;
        _bankService = bankService;
        _locationService = locationService;
        _context = context;
    }


    [HttpGet("profile")]
    public async Task<IActionResult> GetProfile()
    {
        var agentId = await GetAgentIdAsync();
        if (agentId == null) return Ok(new { success = false, message = "Agent profile not found. Please contact your administrator." });

        var agent = await _context.Agents.FindAsync(agentId.Value);
        if (agent == null) return Ok(new { success = false, message = "Agent profile not found. Please contact your administrator." });

        return Ok(new
        {
            success = true,
            data = new
            {
                id = agent.Id,
                fullName = agent.FullName,
                businessName = agent.BusinessName,
                country = agent.Country,
                city = agent.City,
                currency = agent.Currency,
                email = agent.Email,
                phoneNumber = agent.PhoneNumber,
                agentType = agent.AgentType.ToString(),
            }
        });
    }

    [HttpGet("balance")]
    public async Task<IActionResult> GetBalance()
    {
        var agentId = await GetAgentIdAsync();
        if (agentId == null) return Ok(new { success = false, message = "Agent profile not found. Please contact your administrator." });

        var result = await _agentService.GetAgentBalanceAsync(agentId.Value);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPost("transactions/calculate")]
    public async Task<IActionResult> CalculateTransfer([FromBody] CalculateTransferDto dto)
    {
        var agentId = await GetAgentIdAsync();
        if (agentId == null) return Ok(new { success = false, message = "Agent profile not found. Please contact your administrator." });

        // Set sending agent ID from logged-in agent
        dto.SendingAgentId = agentId.Value;

        var result = await _transactionService.CalculateTransferAsync(dto);
        return result.Success ? Ok(result) : Ok(new { success = false, message = result.Message });
    }

    /// <summary>
    /// Lock the current exchange rate for 60 seconds.
    /// Returns a quoteId that must be passed to the send endpoint.
    /// </summary>
    [HttpPost("rates/quote")]
    public async Task<IActionResult> CreateRateQuote([FromBody] CreateQuoteRequest request)
    {
        var result = await _rateService.CreateQuoteAsync(
            request.SourceCurrency, request.DestinationCurrency,
            request.PayoutPartnerId, request.Country);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPost("transactions/send")]
    [EnableRateLimiting("transaction")]
    public async Task<IActionResult> SendTransaction([FromBody] SendTransactionDto dto)
    {
        var agentId = await GetAgentIdAsync();
        if (agentId == null) return Ok(new { success = false, message = "Agent profile not found. Please contact your administrator." });

        var result = await _transactionService.SendTransactionAsync(dto, agentId.Value);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("transactions")]
    public async Task<IActionResult> GetTransactions()
    {
        var agentId = await GetAgentIdAsync();
        if (agentId == null) return Ok(new { success = false, message = "Agent profile not found. Please contact your administrator." });

        var result = await _transactionService.GetAgentTransactionsAsync(agentId.Value);
        return Ok(result);
    }

    [HttpPut("transactions/{id}/release")]
    public async Task<IActionResult> ReleaseTransaction(long id)
    {
        var agentId = await GetAgentIdAsync();
        if (agentId == null) return Ok(new { success = false, message = "Agent profile not found." });

        var result = await _transactionService.ReleaseTransactionAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("transactions/{id}/reject")]
    public async Task<IActionResult> RejectTransaction(long id)
    {
        var agentId = await GetAgentIdAsync();
        if (agentId == null) return Ok(new { success = false, message = "Agent profile not found." });

        var result = await _transactionService.CancelTransactionAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("rates/current")]
    public async Task<IActionResult> GetCurrentRate([FromQuery] string sourceCurrency, [FromQuery] string destinationCurrency,
        [FromQuery] int payoutPartnerId, [FromQuery] string? country = null)
    {
        var result = await _rateService.GetCurrentRateAsync(sourceCurrency, destinationCurrency, payoutPartnerId, country);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("customers")]
    public async Task<IActionResult> GetCustomers()
    {
        var result = await _customerService.GetAllCustomersAsync();
        return Ok(result);
    }

    [HttpPost("customers")]
    public async Task<IActionResult> CreateCustomer([FromBody] Application.DTOs.Admin.CreateCustomerDto dto)
    {
        var result = await _customerService.CreateCustomerAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("receivers/by-customer/{customerId}")]
    public async Task<IActionResult> GetReceiversByCustomer(int customerId)
    {
        var result = await _receiverService.GetReceiversByCustomerAsync(customerId);
        return Ok(result);
    }

    [HttpPost("receivers")]
    public async Task<IActionResult> CreateReceiver([FromBody] Application.DTOs.Admin.CreateReceiverDto dto)
    {
        var result = await _receiverService.CreateReceiverAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("corridors")]
    public async Task<IActionResult> GetCorridors()
    {
        var result = await _corridorService.GetAllCorridorsAsync();
        return Ok(result);
    }
    [HttpGet("banks/agent/{agentId}")]
    public async Task<IActionResult> GetBanksForAgent(int agentId)
    {
        var result = await _bankService.GetBanksForAgentAsync(agentId);
        return Ok(result);
    }
    [HttpGet("locations/agent/{agentId}")]
    public async Task<IActionResult> GetLocationsForAgent(int agentId)
    {
        var result = await _locationService.GetLocationsForAgentAsync(agentId);
        return Ok(result);
    }
    [HttpGet("payment-methods")]
    public async Task<IActionResult> GetPaymentMethods()
    {
        var result = await _locationService.GetPaymentMethodsAsync();
        return Ok(result);
    }

    [HttpGet("earnings")]
    public async Task<IActionResult> GetEarnings()
    {
        var agentId = await GetAgentIdAsync();
        if (agentId == null) return Ok(new { success = false, message = "Agent profile not found." });

        var earnings = await _context.AgentEarnings
            .Where(e => e.AgentId == agentId.Value && !e.IsReversed)
            .OrderByDescending(e => e.CreatedAt)
            .ToListAsync();

        var totalEarnings = earnings.Sum(e => e.Amount);

        return Ok(new
        {
            success = true,
            data = new
            {
                totalEarnings,
                earnings = earnings.Select(e => new
                {
                    e.Id,
                    e.TransactionId,
                    e.EarningType,
                    e.Amount,
                    e.CreatedAt
                })
            }
        });
    }

    [HttpGet("transactions/paged")]
    public async Task<IActionResult> GetTransactionsPaged([FromQuery] PagedRequest request)
    {
        var agentId = await GetAgentIdAsync();
        if (agentId == null) return Ok(new { success = false, message = "Agent profile not found. Please contact your administrator." });

        var result = await _transactionService.GetAgentTransactionsAsync(agentId.Value);
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

    [HttpGet("transactions/export")]
    public async Task<IActionResult> ExportTransactions([FromQuery] string format = "excel", [FromQuery] string? search = null)
    {
        var agentId = await GetAgentIdAsync();
        if (agentId == null) return Ok(new { success = false, message = "Agent profile not found. Please contact your administrator." });

        var result = await _transactionService.GetAgentTransactionsAsync(agentId.Value);
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
            x.TotalCommission, x.AgentCommission, x.Status,
            x.PaymentMethodName, x.PayoutMethodName, x.CreatedAt, x.CompletedAt
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "agent-transactions.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "AgentTransactions");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "agent-transactions.xlsx");
    }

    private async Task<int?> GetAgentIdAsync()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(userId)) return null;

        // 1. Direct match: Agent.UserId
        var agent = await _context.Agents.FirstOrDefaultAsync(a => a.UserId == userId);
        if (agent != null) return agent.Id;

        // 2. Indirect match: AgentLocationUser → AgentLocation → Agent
        var locationUser = await _context.AgentLocationUsers
            .Include(u => u.AgentLocation)
            .FirstOrDefaultAsync(u => u.UserId == userId && u.IsActive);

        return locationUser?.AgentLocation?.AgentId;
    }
}
