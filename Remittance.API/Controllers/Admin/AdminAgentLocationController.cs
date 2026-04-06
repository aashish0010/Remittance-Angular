using Microsoft.AspNetCore.Authorization;
using Remittance.API.Helpers;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.Interfaces;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/agent-locations")]
[Authorize]
[MenuPermission("/admin/agents")]
public class AdminAgentLocationController : ControllerBase
{
    private readonly IAgentLocationService _locationService;

    public AdminAgentLocationController(IAgentLocationService locationService)
    {
        _locationService = locationService;
    }

    [HttpGet("payment-methods")]
    public async Task<IActionResult> GetPaymentMethods()
    {
        var result = await _locationService.GetPaymentMethodsAsync();
        return Ok(result);
    }

    [HttpGet("agent/{agentId}")]
    public async Task<IActionResult> GetLocationsForAgent(int agentId)
    {
        var result = await _locationService.GetLocationsForAgentAsync(agentId);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPost]
    public async Task<IActionResult> CreateLocation([FromBody] CreateAgentLocationDto dto)
    {
        var result = await _locationService.CreateLocationAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateLocation(int id, [FromBody] UpdateAgentLocationDto dto)
    {
        var result = await _locationService.UpdateLocationAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteLocation(int id)
    {
        var result = await _locationService.DeleteLocationAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("{id}/toggle")]
    public async Task<IActionResult> ToggleLocation(int id)
    {
        var result = await _locationService.ToggleLocationAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPost("branches")]
    public async Task<IActionResult> CreateBranch([FromBody] CreateBranchDto dto)
    {
        var result = await _locationService.CreateBranchAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("branches/{id}")]
    public async Task<IActionResult> UpdateBranch(int id, [FromBody] UpdateBranchDto dto)
    {
        var result = await _locationService.UpdateBranchAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("branches/{id}")]
    public async Task<IActionResult> DeleteBranch(int id)
    {
        var result = await _locationService.DeleteBranchAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPost("users")]
    public async Task<IActionResult> CreateUser([FromBody] CreateAgentLocationUserDto dto)
    {
        var result = await _locationService.CreateUserAsync(dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpPut("users/{id}")]
    public async Task<IActionResult> UpdateUser(int id, [FromBody] UpdateAgentLocationUserDto dto)
    {
        var result = await _locationService.UpdateUserAsync(id, dto);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpDelete("users/{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var result = await _locationService.DeleteUserAsync(id);
        return result.Success ? Ok(result) : BadRequest(result);
    }
}
