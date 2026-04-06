using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface IDashboardService
{
    Task<ApiResponse<DashboardDto>> GetDashboardAsync();
}
