using System.Net;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json;
using Remittance.Web.Client.Models;

namespace Remittance.Web.Client.Services;

public class ApiService
{
    private readonly HttpClient _http;
    private readonly AuthStateService _auth;
    private TaskCompletionSource<bool>? _refreshTcs;
    private readonly SemaphoreSlim _refreshLock = new(1, 1);

    private static readonly JsonSerializerOptions _jsonOptions = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public ApiService(HttpClient http, AuthStateService auth)
    {
        _http = http;
        _auth = auth;
    }

    private void SetAuthHeader()
    {
        if (_auth.IsAuthenticated)
            _http.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _auth.Token);
        else
            _http.DefaultRequestHeaders.Authorization = null;
    }

    private async Task<bool> TryRefreshTokenAsync()
    {
        if (string.IsNullOrEmpty(_auth.RefreshToken))
            return false;

        // If a refresh is already in progress, wait for it
        await _refreshLock.WaitAsync();
        if (_refreshTcs != null)
        {
            _refreshLock.Release();
            return await _refreshTcs.Task;
        }

        _refreshTcs = new TaskCompletionSource<bool>();
        _refreshLock.Release();

        try
        {
            // Clear auth header so expired token doesn't interfere
            _http.DefaultRequestHeaders.Authorization = null;
            var response = await _http.PostAsJsonAsync("api/auth/refresh", new { refreshToken = _auth.RefreshToken });
            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadFromJsonAsync<ApiResponse<LoginResponse>>();
                if (result?.Success == true && result.Data != null)
                {
                    await _auth.UpdateTokensAsync(result.Data.Token, result.Data.RefreshToken);
                    _refreshTcs.TrySetResult(true);
                    return true;
                }
            }
            _refreshTcs.TrySetResult(false);
            return false;
        }
        catch
        {
            _refreshTcs.TrySetResult(false);
            return false;
        }
        finally
        {
            await _refreshLock.WaitAsync();
            _refreshTcs = null;
            _refreshLock.Release();
        }
    }

    private async Task<ApiResponse<T>?> HandleResponse<T>(HttpResponseMessage response)
    {
        if (response.StatusCode == HttpStatusCode.Unauthorized)
        {
            if (await TryRefreshTokenAsync())
                return null; // Signal to retry
            return new ApiResponse<T> { Success = false, Message = "Session expired. Please log in again." };
        }
        if (response.StatusCode == HttpStatusCode.Forbidden)
        {
            return new ApiResponse<T> { Success = false, Message = "Access denied. Insufficient permissions." };
        }

        var content = await response.Content.ReadAsStringAsync();

        if (!response.IsSuccessStatusCode)
        {
            // Try to parse as ApiResponse first
            try
            {
                var apiResp = JsonSerializer.Deserialize<ApiResponse<T>>(content, _jsonOptions);
                if (apiResp != null && !string.IsNullOrEmpty(apiResp.Message))
                    return apiResp;
            }
            catch { /* Not ApiResponse format */ }

            // Try to parse as ValidationProblemDetails (FluentValidation auto-validation)
            try
            {
                var problem = JsonSerializer.Deserialize<ValidationProblemResponse>(content, _jsonOptions);
                if (problem?.Errors != null && problem.Errors.Count > 0)
                {
                    var messages = problem.Errors.SelectMany(e => e.Value).ToList();
                    return new ApiResponse<T> { Success = false, Message = string.Join(" ", messages) };
                }
                if (!string.IsNullOrEmpty(problem?.Title))
                    return new ApiResponse<T> { Success = false, Message = problem.Title };
            }
            catch { /* Not ProblemDetails format */ }

            return new ApiResponse<T> { Success = false, Message = $"Server error ({(int)response.StatusCode})." };
        }

        // Success response
        try
        {
            return JsonSerializer.Deserialize<ApiResponse<T>>(content, _jsonOptions);
        }
        catch
        {
            return new ApiResponse<T> { Success = false, Message = "Unexpected response format." };
        }
    }

    private class ValidationProblemResponse
    {
        public string? Title { get; set; }
        public int? Status { get; set; }
        public Dictionary<string, string[]>? Errors { get; set; }
    }

    private async Task<ApiResponse<T>?> GetWithRetryAsync<T>(string url)
    {
        SetAuthHeader();
        var response = await _http.GetAsync(url);
        var result = await HandleResponse<T>(response);
        if (result == null && response.StatusCode == HttpStatusCode.Unauthorized)
        {
            SetAuthHeader();
            response = await _http.GetAsync(url);
            return await HandleResponse<T>(response);
        }
        return result;
    }

    private async Task<ApiResponse<T>?> PostWithRetryAsync<T>(string url, object? body)
    {
        SetAuthHeader();
        var response = body != null
            ? await _http.PostAsJsonAsync(url, body)
            : await _http.PostAsync(url, null);
        var result = await HandleResponse<T>(response);
        if (result == null && response.StatusCode == HttpStatusCode.Unauthorized)
        {
            SetAuthHeader();
            response = body != null
                ? await _http.PostAsJsonAsync(url, body)
                : await _http.PostAsync(url, null);
            return await HandleResponse<T>(response);
        }
        return result;
    }

    private async Task<ApiResponse<T>?> PutWithRetryAsync<T>(string url, object? body = null)
    {
        SetAuthHeader();
        var response = body != null
            ? await _http.PutAsJsonAsync(url, body)
            : await _http.PutAsync(url, null);
        var result = await HandleResponse<T>(response);
        if (result == null && response.StatusCode == HttpStatusCode.Unauthorized)
        {
            SetAuthHeader();
            response = body != null
                ? await _http.PutAsJsonAsync(url, body)
                : await _http.PutAsync(url, null);
            return await HandleResponse<T>(response);
        }
        return result;
    }

    private async Task<ApiResponse<T>?> DeleteWithRetryAsync<T>(string url)
    {
        SetAuthHeader();
        var response = await _http.DeleteAsync(url);
        var result = await HandleResponse<T>(response);
        if (result == null && response.StatusCode == HttpStatusCode.Unauthorized)
        {
            SetAuthHeader();
            response = await _http.DeleteAsync(url);
            return await HandleResponse<T>(response);
        }
        return result;
    }

    // Auth
    public async Task<ApiResponse<LoginResponse>?> LoginAsync(string email, string password)
    {
        var response = await _http.PostAsJsonAsync("api/auth/login", new { email, password });
        return await response.Content.ReadFromJsonAsync<ApiResponse<LoginResponse>>();
    }

    // Agents
    public async Task<ApiResponse<List<AgentModel>>?> GetAgentsAsync()
        => await GetWithRetryAsync<List<AgentModel>>("api/admin/agents");

    public async Task<ApiResponse<AgentModel>?> CreateAgentAsync(object dto)
        => await PostWithRetryAsync<AgentModel>("api/admin/agents", dto);

    public async Task<ApiResponse<AgentModel>?> ApproveAgentAsync(int id)
        => await PutWithRetryAsync<AgentModel>($"api/admin/agents/{id}/approve");

    public async Task<ApiResponse<AgentModel>?> RejectAgentAsync(int id)
        => await PutWithRetryAsync<AgentModel>($"api/admin/agents/{id}/reject");

    public async Task<ApiResponse<AgentModel>?> BlockAgentAsync(int id)
        => await PutWithRetryAsync<AgentModel>($"api/admin/agents/{id}/block");

    public async Task<ApiResponse<AgentModel>?> UnblockAgentAsync(int id)
        => await PutWithRetryAsync<AgentModel>($"api/admin/agents/{id}/unblock");

    public async Task<ApiResponse<AgentModel>?> UpdateAgentAsync(int id, object dto)
        => await PutWithRetryAsync<AgentModel>($"api/admin/agents/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteAgentAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/agents/{id}");

    // Exchange Rates
    public async Task<ApiResponse<List<ExchangeRateModel>>?> GetRatesAsync()
        => await GetWithRetryAsync<List<ExchangeRateModel>>("api/admin/rates");

    public async Task<ApiResponse<ExchangeRateModel>?> CreateRateAsync(object dto)
        => await PostWithRetryAsync<ExchangeRateModel>("api/admin/rates", dto);

    public async Task<ApiResponse<ExchangeRateModel>?> UpdateRateAsync(int id, object dto)
        => await PutWithRetryAsync<ExchangeRateModel>($"api/admin/rates/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteRateAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/rates/{id}");

    // Commissions
    public async Task<ApiResponse<List<CommissionRateModel>>?> GetCommissionsAsync()
        => await GetWithRetryAsync<List<CommissionRateModel>>("api/admin/commissions");

    public async Task<ApiResponse<CommissionRateModel>?> CreateCommissionAsync(object dto)
        => await PostWithRetryAsync<CommissionRateModel>("api/admin/commissions", dto);

    public async Task<ApiResponse<CommissionRateModel>?> UpdateCommissionAsync(int id, object dto)
        => await PutWithRetryAsync<CommissionRateModel>($"api/admin/commissions/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteCommissionAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/commissions/{id}");

    // Agent Commission (per-agent commission config)
    public async Task<ApiResponse<AgentCommissionModel>?> GetAgentCommissionAsync(int agentId)
        => await GetWithRetryAsync<AgentCommissionModel>($"api/admin/agent-commissions/{agentId}");

    public async Task<ApiResponse<AgentCommissionModel>?> SaveAgentCommissionAsync(object dto)
        => await PostWithRetryAsync<AgentCommissionModel>("api/admin/agent-commissions", dto);

    public async Task<ApiResponse<bool>?> DeleteAgentCommissionAsync(int agentId)
        => await DeleteWithRetryAsync<bool>($"api/admin/agent-commissions/{agentId}");

    // Agent Limits
    public async Task<ApiResponse<AgentModel>?> UpdateAgentLimitsAsync(int id, decimal newCreditLimit)
        => await PutWithRetryAsync<AgentModel>($"api/admin/agents/{id}/limits", newCreditLimit);

    // Transactions
    public async Task<ApiResponse<List<TransactionResult>>?> GetTransactionsAsync()
        => await GetWithRetryAsync<List<TransactionResult>>("api/admin/transactions");

    public async Task<ApiResponse<TransactionResult>?> ApproveTransactionAsync(long id)
        => await PutWithRetryAsync<TransactionResult>($"api/admin/transactions/{id}/approve");

    public async Task<ApiResponse<TransactionResult>?> CancelTransactionAsync(long id)
        => await PutWithRetryAsync<TransactionResult>($"api/admin/transactions/{id}/cancel");

    // Compliance
    public async Task<ApiResponse<List<ComplianceAlertModel>>?> GetAlertsAsync(bool? resolved = null)
    {
        var url = resolved.HasValue ? $"api/admin/compliance/alerts?resolved={resolved}" : "api/admin/compliance/alerts";
        return await GetWithRetryAsync<List<ComplianceAlertModel>>(url);
    }

    public async Task<ApiResponse<ComplianceAlertModel>?> ResolveAlertAsync(long id, string resolution)
        => await PutWithRetryAsync<ComplianceAlertModel>($"api/admin/compliance/alerts/{id}/resolve", resolution);

    public async Task<ApiResponse<ComplianceAlertModel>?> ReleaseAlertAsync(long id)
        => await PutWithRetryAsync<ComplianceAlertModel>($"api/admin/compliance/alerts/{id}/release");

    // Compliance Rules
    public async Task<ApiResponse<List<ComplianceRuleModel>>?> GetComplianceRulesAsync()
        => await GetWithRetryAsync<List<ComplianceRuleModel>>("api/admin/compliance/rules");

    public async Task<ApiResponse<ComplianceRuleModel>?> CreateComplianceRuleAsync(object dto)
        => await PostWithRetryAsync<ComplianceRuleModel>("api/admin/compliance/rules", dto);

    public async Task<ApiResponse<ComplianceRuleModel>?> UpdateComplianceRuleAsync(int id, object dto)
        => await PutWithRetryAsync<ComplianceRuleModel>($"api/admin/compliance/rules/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteComplianceRuleAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/compliance/rules/{id}");

    public async Task<ApiResponse<ComplianceRuleModel>?> ToggleComplianceRuleAsync(int id)
        => await PutWithRetryAsync<ComplianceRuleModel>($"api/admin/compliance/rules/{id}/toggle");

    // Accounting
    public async Task<ApiResponse<List<AgentAccountingSummary>>?> GetAccountingSummariesAsync()
        => await GetWithRetryAsync<List<AgentAccountingSummary>>("api/admin/accounting/agents");

    public async Task<ApiResponse<List<AgentLimitAdjustmentModel>>?> GetAgentAdjustmentsAsync(int agentId)
        => await GetWithRetryAsync<List<AgentLimitAdjustmentModel>>($"api/admin/accounting/agents/{agentId}/adjustments");

    public async Task<ApiResponse<AgentLimitAdjustmentModel>?> CreateAdjustmentAsync(object dto)
        => await PostWithRetryAsync<AgentLimitAdjustmentModel>("api/admin/accounting/adjustments", dto);

    public async Task<ApiResponse<bool>?> DeactivateAdjustmentAsync(long id)
        => await PutWithRetryAsync<bool>($"api/admin/accounting/adjustments/{id}/deactivate");

    // Customers
    public async Task<ApiResponse<List<CustomerModel>>?> GetCustomersAsync()
        => await GetWithRetryAsync<List<CustomerModel>>("api/admin/customers");

    public async Task<ApiResponse<CustomerModel>?> CreateCustomerAsync(object dto)
        => await PostWithRetryAsync<CustomerModel>("api/admin/customers", dto);

    public async Task<ApiResponse<CustomerModel>?> UpdateCustomerAsync(int id, object dto)
        => await PutWithRetryAsync<CustomerModel>($"api/admin/customers/{id}", dto);

    public async Task<ApiResponse<CustomerModel>?> ApproveKycAsync(int id)
        => await PutWithRetryAsync<CustomerModel>($"api/admin/customers/{id}/kyc-approve");

    public async Task<ApiResponse<CustomerModel>?> RejectKycAsync(int id)
        => await PutWithRetryAsync<CustomerModel>($"api/admin/customers/{id}/kyc-reject");

    public async Task<ApiResponse<bool>?> DeleteCustomerAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/customers/{id}");

    // Receivers
    public async Task<ApiResponse<List<ReceiverModel>>?> GetReceiversAsync()
        => await GetWithRetryAsync<List<ReceiverModel>>("api/admin/receivers");

    public async Task<ApiResponse<List<ReceiverModel>>?> GetReceiversByCustomerAsync(int customerId)
        => await GetWithRetryAsync<List<ReceiverModel>>($"api/admin/receivers/by-customer/{customerId}");

    public async Task<ApiResponse<ReceiverModel>?> CreateReceiverAsync(object dto)
        => await PostWithRetryAsync<ReceiverModel>("api/admin/receivers", dto);

    public async Task<ApiResponse<ReceiverModel>?> UpdateReceiverAsync(int id, object dto)
        => await PutWithRetryAsync<ReceiverModel>($"api/admin/receivers/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteReceiverAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/receivers/{id}");

    // Agent Portal
    public async Task<ApiResponse<AgentBalance>?> GetAgentBalanceAsync()
        => await GetWithRetryAsync<AgentBalance>("api/agent/balance");

    public async Task<ApiResponse<List<TransactionResult>>?> GetAgentTransactionsAsync()
        => await GetWithRetryAsync<List<TransactionResult>>("api/agent/transactions");

    public async Task<ApiResponse<TransactionResult>?> SendTransactionAsync(SendTransactionModel model)
        => await PostWithRetryAsync<TransactionResult>("api/agent/transactions/send", model);

    public async Task<ApiResponse<ExchangeRateModel>?> GetCurrentRateAsync(string sourceCurrency, string destinationCurrency)
        => await GetWithRetryAsync<ExchangeRateModel>($"api/agent/rates/current?sourceCurrency={sourceCurrency}&destinationCurrency={destinationCurrency}");

    // Customer Portal
    public async Task<ApiResponse<List<TransactionResult>>?> GetCustomerTransactionsAsync()
        => await GetWithRetryAsync<List<TransactionResult>>("api/customer/transactions");

    // Agent Locations
    public async Task<ApiResponse<List<PaymentMethodModel>>?> GetPaymentMethodsAsync()
        => await GetWithRetryAsync<List<PaymentMethodModel>>("api/admin/agent-locations/payment-methods");

    public async Task<ApiResponse<List<AgentLocationModel>>?> GetAgentLocationsAsync(int agentId)
        => await GetWithRetryAsync<List<AgentLocationModel>>($"api/admin/agent-locations/agent/{agentId}");

    public async Task<ApiResponse<AgentLocationModel>?> CreateAgentLocationAsync(object dto)
        => await PostWithRetryAsync<AgentLocationModel>("api/admin/agent-locations", dto);

    public async Task<ApiResponse<AgentLocationModel>?> UpdateAgentLocationAsync(int id, object dto)
        => await PutWithRetryAsync<AgentLocationModel>($"api/admin/agent-locations/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteAgentLocationAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/agent-locations/{id}");

    public async Task<ApiResponse<bool>?> ToggleAgentLocationAsync(int id)
        => await PutWithRetryAsync<bool>($"api/admin/agent-locations/{id}/toggle");

    public async Task<ApiResponse<AgentLocationBranchModel>?> CreateBranchAsync(object dto)
        => await PostWithRetryAsync<AgentLocationBranchModel>("api/admin/agent-locations/branches", dto);

    public async Task<ApiResponse<AgentLocationBranchModel>?> UpdateBranchAsync(int id, object dto)
        => await PutWithRetryAsync<AgentLocationBranchModel>($"api/admin/agent-locations/branches/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteBranchAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/agent-locations/branches/{id}");

    // Agent Location Users
    public async Task<ApiResponse<AgentLocationUserModel>?> CreateLocationUserAsync(CreateLocationUserRequest dto)
        => await PostWithRetryAsync<AgentLocationUserModel>("api/admin/agent-locations/users", dto);

    public async Task<ApiResponse<AgentLocationUserModel>?> UpdateLocationUserAsync(int id, UpdateLocationUserRequest dto)
        => await PutWithRetryAsync<AgentLocationUserModel>($"api/admin/agent-locations/users/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteLocationUserAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/agent-locations/users/{id}");

    // Agent Banks (Payout Agents)
    public async Task<ApiResponse<List<AgentBankModel>>?> GetAgentBanksAsync(int agentId)
        => await GetWithRetryAsync<List<AgentBankModel>>($"api/admin/agent-banks/agent/{agentId}");

    public async Task<ApiResponse<AgentBankModel>?> CreateAgentBankAsync(object dto)
        => await PostWithRetryAsync<AgentBankModel>("api/admin/agent-banks", dto);

    public async Task<ApiResponse<AgentBankModel>?> UpdateAgentBankAsync(int id, object dto)
        => await PutWithRetryAsync<AgentBankModel>($"api/admin/agent-banks/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteAgentBankAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/agent-banks/{id}");

    public async Task<ApiResponse<bool>?> ToggleAgentBankAsync(int id)
        => await PutWithRetryAsync<bool>($"api/admin/agent-banks/{id}/toggle");

    // Agent Bank Branches
    public async Task<ApiResponse<AgentBankBranchModel>?> CreateBankBranchAsync(object dto)
        => await PostWithRetryAsync<AgentBankBranchModel>("api/admin/agent-banks/branches", dto);

    public async Task<ApiResponse<AgentBankBranchModel>?> UpdateBankBranchAsync(int id, object dto)
        => await PutWithRetryAsync<AgentBankBranchModel>($"api/admin/agent-banks/branches/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteBankBranchAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/agent-banks/branches/{id}");

    // Dashboard
    public async Task<ApiResponse<DashboardModel>?> GetDashboardAsync()
        => await GetWithRetryAsync<DashboardModel>("api/admin/dashboard");

    // Payment Corridors (Routing)
    public async Task<ApiResponse<List<PaymentCorridorModel>>?> GetCorridorsAsync()
        => await GetWithRetryAsync<List<PaymentCorridorModel>>("api/admin/routing");

    public async Task<ApiResponse<PaymentCorridorModel>?> CreateCorridorAsync(object dto)
        => await PostWithRetryAsync<PaymentCorridorModel>("api/admin/routing", dto);

    public async Task<ApiResponse<PaymentCorridorModel>?> UpdateCorridorAsync(int id, object dto)
        => await PutWithRetryAsync<PaymentCorridorModel>($"api/admin/routing/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteCorridorAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/routing/{id}");

    public async Task<ApiResponse<bool>?> ToggleCorridorAsync(int id)
        => await PutWithRetryAsync<bool>($"api/admin/routing/{id}/toggle");

    public async Task<ApiResponse<CorridorPayoutPartnerModel>?> AddCorridorPartnerAsync(object dto)
        => await PostWithRetryAsync<CorridorPayoutPartnerModel>("api/admin/routing/partners", dto);

    public async Task<ApiResponse<CorridorPayoutPartnerModel>?> UpdateCorridorPartnerAsync(int id, object dto)
        => await PutWithRetryAsync<CorridorPayoutPartnerModel>($"api/admin/routing/partners/{id}", dto);

    public async Task<ApiResponse<bool>?> DeleteCorridorPartnerAsync(int id)
        => await DeleteWithRetryAsync<bool>($"api/admin/routing/partners/{id}");

    public async Task<ApiResponse<bool>?> ToggleCorridorPartnerAsync(int id)
        => await PutWithRetryAsync<bool>($"api/admin/routing/partners/{id}/toggle");

    // Reference Data
    public async Task<ApiResponse<List<CountryInfo>>?> GetCountriesAsync()
        => await GetWithRetryAsync<List<CountryInfo>>("api/reference/countries");

    public async Task<ApiResponse<List<string>>?> GetCurrenciesAsync()
        => await GetWithRetryAsync<List<string>>("api/reference/currencies");
}
