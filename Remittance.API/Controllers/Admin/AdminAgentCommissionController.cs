using Microsoft.AspNetCore.Authorization;
using Remittance.API.Helpers;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.Interfaces;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/agent-commissions")]
[Authorize]
[MenuPermission("/admin/commissions")]
public class AdminAgentCommissionController : ControllerBase
{
    private readonly IAgentCommissionService _service;

    public AdminAgentCommissionController(IAgentCommissionService service)
    {
        _service = service;
    }

    [HttpGet("{agentId}")]
    public async Task<IActionResult> GetByAgent(int agentId)
    {
        var result = await _service.GetByAgentIdAsync(agentId);
        return result.Success ? Ok(result) : NotFound(result);
    }

    [HttpPost]
    public async Task<IActionResult> CreateOrUpdate([FromBody] CreateAgentCommissionDto dto)
    {
        var result = await _service.CreateOrUpdateAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("{agentId}")]
    public async Task<IActionResult> Delete(int agentId)
    {
        var result = await _service.DeleteAsync(agentId);
        return result.Success ? Ok(result) : BadRequest(result);
    }
}
