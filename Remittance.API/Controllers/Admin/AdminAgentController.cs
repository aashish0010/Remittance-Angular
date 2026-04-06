using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.API.Helpers;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/agents")]
[Authorize]
[MenuPermission("/admin/agents")]
public class AdminAgentController : ControllerBase
{
    private readonly IAgentManagementService _agentService;

    public AdminAgentController(IAgentManagementService agentService)
    {
        _agentService = agentService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await _agentService.GetAllAgentsAsync();
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateAgentDto dto)
    {
        var result = await _agentService.CreateAgentAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/approve")]
    public async Task<IActionResult> Approve(int id)
    {
        var result = await _agentService.ApproveAgentAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/reject")]
    public async Task<IActionResult> Reject(int id)
    {
        var result = await _agentService.RejectAgentAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/limits")]
    public async Task<IActionResult> UpdateLimits(int id, [FromBody] decimal newCreditLimit)
    {
        var result = await _agentService.UpdateAgentLimitsAsync(id, newCreditLimit);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] UpdateAgentDto dto)
    {
        var result = await _agentService.UpdateAgentAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _agentService.DeleteAgentAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/block")]
    public async Task<IActionResult> Block(int id)
    {
        var result = await _agentService.BlockAgentAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/unblock")]
    public async Task<IActionResult> Unblock(int id)
    {
        var result = await _agentService.UnblockAgentAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("paged")]
    public async Task<IActionResult> GetPaged([FromQuery] PagedRequest request)
    {
        var result = await _agentService.GetAllAgentsAsync();
        if (!result.Success || result.Data == null)
            return Ok(ApiResponse<PagedResult<AgentDto>>.Fail(result.Message));

        IEnumerable<AgentDto> query = result.Data;

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(x =>
                (x.BusinessName?.ToLower().Contains(search) == true) ||
                (x.FullName?.ToLower().Contains(search) == true) ||
                (x.Email?.ToLower().Contains(search) == true) ||
                (x.Country?.ToLower().Contains(search) == true) ||
                (x.City?.ToLower().Contains(search) == true));
        }

        var totalCount = query.Count();
        var items = query
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        var paged = new PagedResult<AgentDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        };
        return Ok(ApiResponse<PagedResult<AgentDto>>.Ok(paged));
    }

    [HttpGet("export")]
    public async Task<IActionResult> Export([FromQuery] string format = "excel", [FromQuery] string? search = null)
    {
        var result = await _agentService.GetAllAgentsAsync();
        if (!result.Success || result.Data == null)
            return BadRequest(ApiResponse<object>.Fail(result.Message));

        IEnumerable<AgentDto> query = result.Data;

        if (!string.IsNullOrEmpty(search))
        {
            var s = search.ToLower();
            query = query.Where(x =>
                (x.BusinessName?.ToLower().Contains(s) == true) ||
                (x.FullName?.ToLower().Contains(s) == true) ||
                (x.Email?.ToLower().Contains(s) == true) ||
                (x.Country?.ToLower().Contains(s) == true));
        }

        var data = query.Select(x => new
        {
            x.Id, x.BusinessName, x.FullName, x.Email, x.PhoneNumber,
            x.Country, x.City, x.AgentType, x.Status, x.FundingType,
            x.CreditLimit, x.CurrentBalance, x.IsApproved, x.IsActive, x.CreatedAt
        }).ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "agents.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "Agents");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "agents.xlsx");
    }
}
