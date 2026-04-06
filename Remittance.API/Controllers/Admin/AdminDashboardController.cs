using Microsoft.AspNetCore.Authorization;
using Remittance.API.Helpers;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.Interfaces;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/dashboard")]
[Authorize]
[MenuPermission("/admin/dashboard")]
public class AdminDashboardController : ControllerBase
{
    private readonly IDashboardService _service;

    public AdminDashboardController(IDashboardService service) => _service = service;

    [HttpGet]
    public async Task<IActionResult> Get() => Ok(await _service.GetDashboardAsync());
}
