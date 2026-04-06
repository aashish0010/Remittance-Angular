using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Common;
using Remittance.API.Helpers;
using Remittance.Domain.Entities;
using Remittance.Domain.Interfaces;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/settings")]
[Authorize]
[MenuPermission("/admin/settings")]
public class AdminSettingsController : ControllerBase
{
    private readonly IRepository<SystemSetting> _settingRepo;
    private readonly IUnitOfWork _unitOfWork;

    public AdminSettingsController(
        IRepository<SystemSetting> settingRepo,
        IUnitOfWork unitOfWork)
    {
        _settingRepo = settingRepo;
        _unitOfWork = unitOfWork;
    }

    /// <summary>
    /// Returns all settings as a flat key→value dictionary.
    /// </summary>
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var all = await _settingRepo.GetAllAsync();
        var dict = all.ToDictionary(s => s.Key, s => s.Value);
        return Ok(ApiResponse<Dictionary<string, string>>.Ok(dict));
    }

    /// <summary>
    /// Upsert a batch of key→value settings (one section at a time).
    /// </summary>
    [HttpPost("batch")]
    public async Task<IActionResult> BatchSave([FromBody] Dictionary<string, string> settings)
    {
        if (settings == null || settings.Count == 0)
            return BadRequest(ApiResponse<object>.Fail("No settings provided."));

        var allExisting = await _settingRepo.GetAllAsync();
        var existingMap = allExisting.ToDictionary(s => s.Key, s => s);

        foreach (var (key, value) in settings)
        {
            if (string.IsNullOrWhiteSpace(key)) continue;

            if (existingMap.TryGetValue(key, out var existing))
            {
                existing.Value = value ?? string.Empty;
                existing.UpdatedAt = DateTime.UtcNow;
                await _settingRepo.UpdateAsync(existing);
            }
            else
            {
                await _settingRepo.AddAsync(new SystemSetting
                {
                    Key = key,
                    Value = value ?? string.Empty,
                    Description = GetSettingDescription(key)
                });
            }
        }

        await _unitOfWork.SaveChangesAsync();
        return Ok(ApiResponse<bool>.Ok(true, "Settings saved successfully."));
    }

    /// <summary>
    /// Returns default values for all settings (used on first-time setup).
    /// </summary>
    [HttpGet("defaults")]
    public IActionResult GetDefaults()
    {
        return Ok(ApiResponse<Dictionary<string, string>>.Ok(DefaultSettings));
    }

    // ── Helpers ──────────────────────────────────────────────────────────

    private static string GetSettingDescription(string key)
    {
        var prefix = key.Contains('.') ? key[..key.IndexOf('.')] : key;
        return prefix switch
        {
            "general"     => "General company information",
            "kyc"         => "Customer & KYC settings",
            "transaction" => "Transaction settings",
            "compliance"  => "Compliance & limits",
            "rate"        => "Exchange rate settings",
            "fee"         => "Fee & commission settings",
            "payout"      => "Payout & delivery settings",
            "payment"     => "Payment collection settings",
            "branch"      => "Branch & agent settings",
            "user"        => "User & role settings",
            "report"      => "Reporting & analytics settings",
            "integration" => "Integration settings",
            "receipt"     => "Receipt & document settings",
            "system"      => "System & maintenance settings",
            _             => string.Empty
        };
    }

    public static readonly Dictionary<string, string> DefaultSettings = new()
    {
        // General
        ["general.companyName"]    = "",
        ["general.supportEmail"]   = "",
        ["general.defaultCurrency"] = "USD",

        // Customer / KYC
        ["kyc.enabled"]                  = "true",
        ["kyc.skipDocumentUpload"]       = "false",
        ["kyc.requireEmailVerification"] = "false",
        ["kyc.mandatoryIdTypes"]         = "Passport,DriverLicense",
        ["kyc.minimumAge"]               = "18",
        ["kyc.maxAge"]                   = "99",
        ["kyc.duplicateCheck"]           = "true",
        ["kyc.reverificationPeriod"]     = "365",

        // Transaction
        ["transaction.numberPrefix"]             = "TXN",
        ["transaction.requirePurpose"]           = "false",
        ["transaction.requireSourceOfFunds"]     = "false",
        ["transaction.allowQuickSend"]           = "true",
        ["transaction.cancellationAllowed"]      = "true",
        ["transaction.cancellationWindow"]       = "60",
        ["transaction.requireManagerApproval"]   = "false",
        ["transaction.managerApprovalThreshold"] = "5000",
        ["transaction.autoComplete"]             = "false",

        // Compliance & Limits
        ["compliance.singleTransactionLimit"] = "0",
        ["compliance.dailyLimit"]             = "0",
        ["compliance.structuringDetection"]   = "false",
        ["compliance.structuringWindow"]      = "7",
        ["compliance.structuringAmount"]      = "9000",

        // Exchange Rate
        ["rate.applyMargin"]   = "true",
        ["rate.defaultMargin"] = "0",
        ["rate.rounding"]      = "2",
        ["rate.lockDuration"]  = "60",

        // Agent & Commission
        ["fee.agentCommissionEnabled"]   = "true",
        ["branch.agentTransactionLimit"] = "0",
        ["branch.agentDailyLimit"]       = "0",
        ["payout.availableMethods"]      = "CashPickup,BankDeposit",

        // User & Security
        ["user.passwordPolicy"]         = "Strong",
        ["user.sessionTimeout"]         = "30",
        ["user.maxLoginAttempts"]       = "5",
        ["user.lockoutDurationMinutes"] = "30",

        // System & Maintenance
        ["system.maintenanceMode"]    = "false",
        ["system.maintenanceMessage"] = "System is under maintenance. Please try again later.",
    };
}
