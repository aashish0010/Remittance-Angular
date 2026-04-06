namespace Remittance.Web.Client.Models;

public class LoginRequest
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}

public class LoginResponse
{
    public string Token { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
    public DateTime Expiration { get; set; }
    public string UserId { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public List<string> Roles { get; set; } = new();
    public string Portal { get; set; } = string.Empty;
    public List<string> AvailablePortals { get; set; } = new();
}

public class ApiResponse<T>
{
    public bool Success { get; set; }
    public string Message { get; set; } = string.Empty;
    public T? Data { get; set; }
    public List<string> Errors { get; set; } = new();
}

public class MenuPrivilege
{
    public int MenuId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Icon { get; set; }
    public string? Url { get; set; }
    public int DisplayOrder { get; set; }
    public List<string> Actions { get; set; } = new();
    public List<MenuPrivilege> Children { get; set; } = new();
}

public class TransactionResult
{
    public long Id { get; set; }
    public string ReferenceNumber { get; set; } = string.Empty;
    public string SenderName { get; set; } = string.Empty;
    public string ReceiverName { get; set; } = string.Empty;
    public string ReceiverCountry { get; set; } = string.Empty;
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = string.Empty;
    public decimal ReceiveAmount { get; set; }
    public string ReceiveCurrency { get; set; } = string.Empty;
    public decimal ExchangeRateApplied { get; set; }
    public decimal TotalCommission { get; set; }
    public decimal AgentCommission { get; set; }
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}

public class ExchangeRateModel
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public string AgentName { get; set; } = string.Empty;
    public string? Country { get; set; }
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public decimal Rate { get; set; }
    public decimal? Margin { get; set; }
    public DateTime EffectiveFrom { get; set; }
    public DateTime? EffectiveTo { get; set; }
    public bool IsActive { get; set; }
}

public class AgentModel
{
    public int Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string BusinessName { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string AgentType { get; set; } = "SendingAgent";
    public string Status { get; set; } = "Pending";
    public decimal CreditLimit { get; set; }
    public decimal CurrentBalance { get; set; }
    public bool IsApproved { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public string? LicenseNumber { get; set; }
    public string? Address { get; set; }
    public string? Currency { get; set; }
    public string FundingType { get; set; } = "PreFunding";
    public string PhoneNumber { get; set; } = string.Empty;
}

public class AgentBalance
{
    public int AgentId { get; set; }
    public string BusinessName { get; set; } = string.Empty;
    public decimal CreditLimit { get; set; }
    public decimal CurrentBalance { get; set; }
    public decimal AvailableBalance { get; set; }
}

public class SendTransactionModel
{
    public string SenderName { get; set; } = string.Empty;
    public string SenderPhone { get; set; } = string.Empty;
    public string? SenderEmail { get; set; }
    public string? SenderIdType { get; set; }
    public string? SenderIdNumber { get; set; }
    public string SenderCountry { get; set; } = string.Empty;
    public string ReceiverName { get; set; } = string.Empty;
    public string ReceiverPhone { get; set; } = string.Empty;
    public string? ReceiverEmail { get; set; }
    public string ReceiverCountry { get; set; } = string.Empty;
    public string? ReceiverBankName { get; set; }
    public string? ReceiverAccountNumber { get; set; }
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = "USD";
    public string ReceiveCurrency { get; set; } = "NPR";
    public int PaymentMethod { get; set; }
    public int PayoutMethod { get; set; }
    public string? Purpose { get; set; }
}

public class CommissionRateModel
{
    public int Id { get; set; }
    public int? AgentId { get; set; }
    public string? AgentName { get; set; }
    public int PayoutAgentId { get; set; }
    public string PayoutAgentName { get; set; } = string.Empty;
    public string? SourceCountry { get; set; }
    public string? DestinationCountry { get; set; }
    public string? PaymentMethod { get; set; }
    public string? SourceCurrency { get; set; }
    public string? DestinationCurrency { get; set; }
    public decimal MinAmount { get; set; }
    public decimal MaxAmount { get; set; }
    public decimal CommissionPercent { get; set; }
    public decimal? FlatFee { get; set; }
    public bool IsActive { get; set; } = true;
}

public class AgentCommissionModel
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public string AgentName { get; set; } = string.Empty;
    public string CommissionType { get; set; } = "Percentage";
    public decimal CommissionValue { get; set; }
    public bool IsActive { get; set; }
}

public class AgentAccountingSummary
{
    public int AgentId { get; set; }
    public string BusinessName { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string? Currency { get; set; }
    public string FundingType { get; set; } = string.Empty;
    public decimal BaseCreditLimit { get; set; }
    public decimal EffectiveCreditLimit { get; set; }
    public decimal CurrentBalance { get; set; }
    public decimal AvailableBalance { get; set; }
    public int ActiveAdjustments { get; set; }
    public string Status { get; set; } = string.Empty;
    public string AgentType { get; set; } = string.Empty;
    public string? CommissionMode { get; set; }
    public decimal CommissionValue { get; set; }
}

public class CountryInfo
{
    public string Name { get; set; } = string.Empty;
    public string Currency { get; set; } = string.Empty;
}

public class AgentLimitAdjustmentModel
{
    public long Id { get; set; }
    public int AgentId { get; set; }
    public string BusinessName { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public DateTime EffectiveFrom { get; set; }
    public DateTime? EffectiveTo { get; set; }
    public string? Notes { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class ComplianceAlertModel
{
    public long Id { get; set; }
    public long TransactionId { get; set; }
    public string ReferenceNumber { get; set; } = string.Empty;
    public string AlertType { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool IsResolved { get; set; }
    public string? Resolution { get; set; }
    public DateTime CreatedAt { get; set; }
    public string SenderName { get; set; } = string.Empty;
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = string.Empty;
    public string TransactionStatus { get; set; } = string.Empty;
}

public class ComplianceRuleModel
{
    public int Id { get; set; }
    public string RuleName { get; set; } = string.Empty;
    public string RuleType { get; set; } = "AmountThreshold";
    public decimal? ThresholdAmount { get; set; }
    public int? TimePeriodDays { get; set; }
    public int? MaxTransactionCount { get; set; }
    public string? SourceCountry { get; set; }
    public string? DestinationCountry { get; set; }
    public string Action { get; set; } = "Flag";
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CustomerModel
{
    public int Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public string? Gender { get; set; }
    public string? Nationality { get; set; }
    public string Country { get; set; } = string.Empty;
    public string? City { get; set; }
    public string? State { get; set; }
    public string? PostalCode { get; set; }
    public string? Address { get; set; }
    public string? IdDocumentType { get; set; }
    public string? IdDocumentNumber { get; set; }
    public bool IsKycVerified { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<CustomerDocumentModel> Documents { get; set; } = new();
}

public class CustomerDocumentModel
{
    public int Id { get; set; }
    public string DocumentType { get; set; } = string.Empty;
    public string DocumentNumber { get; set; } = string.Empty;
    public DateTime? IssueDate { get; set; }
    public DateTime? ExpiryDate { get; set; }
    public string? IssuingCountry { get; set; }
    public bool IsVerified { get; set; }
}

public class PaymentMethodModel
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public bool IsActive { get; set; }
}

public class AgentLocationModel
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public string AgentName { get; set; } = string.Empty;
    public int PaymentMethodId { get; set; }
    public string PaymentMethodName { get; set; } = string.Empty;
    public string LocationName { get; set; } = string.Empty;
    public string? LocationCode { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public string? ContactEmail { get; set; }
    public string? OperatingHours { get; set; }
    public string? AdditionalInfo { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<AgentLocationBranchModel> Branches { get; set; } = new();
    public List<AgentLocationUserModel> Users { get; set; } = new();
}

public class AgentLocationBranchModel
{
    public int Id { get; set; }
    public int AgentLocationId { get; set; }
    public string BranchName { get; set; } = string.Empty;
    public string? BranchCode { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class AgentLocationUserModel
{
    public int Id { get; set; }
    public int AgentLocationId { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? UserName { get; set; }
    public string? Phone { get; set; }
    public string? Role { get; set; }
    public bool IsDefault { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateLocationUserRequest
{
    public int AgentLocationId { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? UserName { get; set; }
    public string? Password { get; set; }
    public string? Phone { get; set; }
    public string? Role { get; set; }
    public bool IsDefault { get; set; }
}

public class UpdateLocationUserRequest
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? UserName { get; set; }
    public string? Password { get; set; }
    public string? Phone { get; set; }
    public string? Role { get; set; }
    public bool IsDefault { get; set; }
}

public class AgentBankModel
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public string AgentName { get; set; } = string.Empty;
    public string BankName { get; set; } = string.Empty;
    public string? BankCode { get; set; }
    public string? SwiftCode { get; set; }
    public string? RoutingNumber { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public string? ContactEmail { get; set; }
    public string? AdditionalInfo { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<AgentBankBranchModel> Branches { get; set; } = new();
}

public class AgentBankBranchModel
{
    public int Id { get; set; }
    public int AgentBankId { get; set; }
    public string BranchName { get; set; } = string.Empty;
    public string? BranchCode { get; set; }
    public string? SwiftCode { get; set; }
    public string? Address { get; set; }
    public string? ContactPhone { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class ReceiverModel
{
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public string CustomerName { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string? Email { get; set; }
    public string Country { get; set; } = string.Empty;
    public string? City { get; set; }
    public string? BankName { get; set; }
    public string? AccountNumber { get; set; }
    public string? Relationship { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class PaymentCorridorModel
{
    public int Id { get; set; }
    public int? SendingAgentId { get; set; }
    public string? SendingAgentName { get; set; }
    public string SourceCountry { get; set; } = string.Empty;
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCountry { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<CorridorPayoutPartnerModel> PayoutPartners { get; set; } = new();
}

public class CorridorPayoutPartnerModel
{
    public int Id { get; set; }
    public int PaymentCorridorId { get; set; }
    public int PayoutAgentId { get; set; }
    public string PayoutAgentName { get; set; } = string.Empty;
    public List<int> PaymentModeIds { get; set; } = new();
    public List<string> PaymentModeNames { get; set; } = new();
    public bool IsActive { get; set; }
}

// Dashboard
public class DashboardModel
{
    public int TotalTransactions { get; set; }
    public int TransactionsThisMonth { get; set; }
    public int TransactionsLastMonth { get; set; }
    public decimal TotalVolume { get; set; }
    public decimal VolumeThisMonth { get; set; }
    public decimal VolumeLastMonth { get; set; }
    public decimal TotalCommissionRevenue { get; set; }
    public decimal CommissionThisMonth { get; set; }
    public decimal CommissionLastMonth { get; set; }
    public int ActiveAgents { get; set; }
    public int PendingAgents { get; set; }
    public int UnresolvedAlerts { get; set; }
    public int ActiveCorridors { get; set; }
    public int TotalCustomers { get; set; }
    public int PendingTransactions { get; set; }
    public int ProcessingTransactions { get; set; }
    public int CompletedTransactions { get; set; }
    public int CancelledTransactions { get; set; }
    public int FailedTransactions { get; set; }
    public int OnHoldTransactions { get; set; }
    public List<RecentTransactionModel> RecentTransactions { get; set; } = new();
    public List<ActiveExchangeRateModel> ActiveExchangeRates { get; set; } = new();
}

public class RecentTransactionModel
{
    public string ReferenceNumber { get; set; } = string.Empty;
    public string SenderName { get; set; } = string.Empty;
    public string ReceiverName { get; set; } = string.Empty;
    public decimal SendAmount { get; set; }
    public string SendCurrency { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}

public class ActiveExchangeRateModel
{
    public string SourceCurrency { get; set; } = string.Empty;
    public string DestinationCurrency { get; set; } = string.Empty;
    public decimal Rate { get; set; }
}
