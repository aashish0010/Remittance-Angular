using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface IComplianceService
{
    // Pre-send compliance check — returns list of violations (empty = passed)
    Task<ApiResponse<List<ComplianceViolationDto>>> CheckComplianceAsync(ComplianceCheckRequest request);

    // Persist compliance alerts for a transaction with non-blocking violations
    Task CreateAlertsAsync(long transactionId, List<ComplianceViolationDto> violations);

    Task<ApiResponse<List<ComplianceAlertDto>>> GetAlertsAsync(bool? resolved = null);
    Task<ApiResponse<ComplianceAlertDto>> ResolveAlertAsync(long alertId, string resolution, string resolvedByUserId);
    Task<ApiResponse<ComplianceAlertDto>> RejectAlertAsync(long alertId, string resolvedByUserId);
    Task<ApiResponse<ComplianceAlertDto>> ReleaseTransactionAsync(long alertId, string resolvedByUserId);

    Task<ApiResponse<List<ComplianceRuleDto>>> GetRulesAsync();
    Task<ApiResponse<ComplianceRuleDto>> CreateRuleAsync(CreateComplianceRuleDto dto);
    Task<ApiResponse<ComplianceRuleDto>> UpdateRuleAsync(int ruleId, CreateComplianceRuleDto dto);
    Task<ApiResponse<bool>> DeleteRuleAsync(int ruleId);
    Task<ApiResponse<bool>> DeleteAllRulesAsync();
    Task<ApiResponse<ComplianceRuleDto>> ToggleRuleAsync(int ruleId);
}
