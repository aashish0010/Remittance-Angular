using Microsoft.AspNetCore.Authorization;
using Remittance.API.Helpers;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.Interfaces;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/agent-banks")]
[Authorize]
[MenuPermission("/admin/agents")]
public class AdminAgentBankController : ControllerBase
{
    private readonly IAgentBankService _bankService;

    public AdminAgentBankController(IAgentBankService bankService)
    {
        _bankService = bankService;
    }

    [HttpGet("agent/{agentId}")]
    public async Task<IActionResult> GetBanksForAgent(int agentId)
    {
        var result = await _bankService.GetBanksForAgentAsync(agentId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPost]
    public async Task<IActionResult> CreateBank([FromBody] CreateAgentBankDto dto)
    {
        var result = await _bankService.CreateBankAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBank(int id, [FromBody] UpdateAgentBankDto dto)
    {
        var result = await _bankService.UpdateBankAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBank(int id)
    {
        var result = await _bankService.DeleteBankAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/toggle")]
    public async Task<IActionResult> ToggleBank(int id)
    {
        var result = await _bankService.ToggleBankAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPost("branches")]
    public async Task<IActionResult> CreateBranch([FromBody] CreateAgentBankBranchDto dto)
    {
        var result = await _bankService.CreateBranchAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("branches/{id}")]
    public async Task<IActionResult> UpdateBranch(int id, [FromBody] UpdateAgentBankBranchDto dto)
    {
        var result = await _bankService.UpdateBranchAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("branches/{id}")]
    public async Task<IActionResult> DeleteBranch(int id)
    {
        var result = await _bankService.DeleteBranchAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }
}
