import {
  AuthStateService
} from "./chunk-LDWTK5YJ.js";
import {
  environment
} from "./chunk-R63TWOS6.js";
import {
  HttpClient
} from "./chunk-WBW3ZP3W.js";
import {
  Injectable,
  catchError,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EU7HC72Q.js";

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
    this.baseUrl = environment.apiUrl;
  }
  // ---------------------------------------------------------------------------
  // Internal helpers
  // ---------------------------------------------------------------------------
  getBaseUrl() {
    return this.baseUrl;
  }
  url(path) {
    return `${this.baseUrl}${path}`;
  }
  handleError(error) {
    if (error?.status === 403) {
      return of({ success: false, message: "Access denied. Insufficient permissions.", data: null, errors: [] });
    }
    const body = error?.error;
    if (body && typeof body === "object" && "message" in body && body.message) {
      return of({ success: false, message: body.message, data: null, errors: body.errors || [] });
    }
    if (body && typeof body === "object" && "errors" in body) {
      const problem = body;
      if (problem.errors && Object.keys(problem.errors).length > 0) {
        const messages = Object.values(problem.errors).flat();
        return of({ success: false, message: messages.join(" "), data: null, errors: messages });
      }
      if (problem.title) {
        return of({ success: false, message: problem.title, data: null, errors: [] });
      }
    }
    const status = error?.status || 0;
    return of({ success: false, message: `Server error (${status}).`, data: null, errors: [] });
  }
  get(path) {
    return this.http.get(this.url(path)).pipe(catchError((err) => this.handleError(err)));
  }
  post(path, body) {
    return this.http.post(this.url(path), body ?? null).pipe(catchError((err) => this.handleError(err)));
  }
  put(path, body) {
    return this.http.put(this.url(path), body ?? null).pipe(catchError((err) => this.handleError(err)));
  }
  delete(path) {
    return this.http.delete(this.url(path)).pipe(catchError((err) => this.handleError(err)));
  }
  // ---------------------------------------------------------------------------
  // Auth
  // ---------------------------------------------------------------------------
  login(email, password) {
    return this.http.post(this.url("api/auth/login"), { email, password }).pipe(catchError((err) => this.handleError(err)));
  }
  refreshToken(refreshToken) {
    return this.http.post(this.url("api/auth/refresh"), { refreshToken }).pipe(catchError((err) => this.handleError(err)));
  }
  // ---------------------------------------------------------------------------
  // Transaction PIN
  // ---------------------------------------------------------------------------
  getTransactionPinStatus() {
    return this.get("api/auth/transaction-pin/status");
  }
  setTransactionPin(pin) {
    return this.post("api/auth/transaction-pin/set", { pin });
  }
  verifyTransactionPin(pin) {
    return this.post("api/auth/transaction-pin/verify", { pin });
  }
  // ---------------------------------------------------------------------------
  // Agents
  // ---------------------------------------------------------------------------
  getAgents() {
    return this.get("api/admin/agents");
  }
  createAgent(dto) {
    return this.post("api/admin/agents", dto);
  }
  approveAgent(id) {
    return this.put(`api/admin/agents/${id}/approve`);
  }
  rejectAgent(id) {
    return this.put(`api/admin/agents/${id}/reject`);
  }
  blockAgent(id) {
    return this.put(`api/admin/agents/${id}/block`);
  }
  unblockAgent(id) {
    return this.put(`api/admin/agents/${id}/unblock`);
  }
  updateAgent(id, dto) {
    return this.put(`api/admin/agents/${id}`, dto);
  }
  deleteAgent(id) {
    return this.delete(`api/admin/agents/${id}`);
  }
  // ---------------------------------------------------------------------------
  // Exchange Rates
  // ---------------------------------------------------------------------------
  getRates() {
    return this.get("api/admin/rates");
  }
  createRate(dto) {
    return this.post("api/admin/rates", dto);
  }
  updateRate(id, dto) {
    return this.put(`api/admin/rates/${id}`, dto);
  }
  deleteRate(id) {
    return this.delete(`api/admin/rates/${id}`);
  }
  // ---------------------------------------------------------------------------
  // Commissions
  // ---------------------------------------------------------------------------
  getCommissions() {
    return this.get("api/admin/commissions");
  }
  createCommission(dto) {
    return this.post("api/admin/commissions", dto);
  }
  updateCommission(id, dto) {
    return this.put(`api/admin/commissions/${id}`, dto);
  }
  deleteCommission(id) {
    return this.delete(`api/admin/commissions/${id}`);
  }
  // ---------------------------------------------------------------------------
  // Agent Commission
  // ---------------------------------------------------------------------------
  getAgentCommission(agentId) {
    return this.get(`api/admin/agent-commissions/${agentId}`);
  }
  saveAgentCommission(dto) {
    return this.post("api/admin/agent-commissions", dto);
  }
  deleteAgentCommission(agentId) {
    return this.delete(`api/admin/agent-commissions/${agentId}`);
  }
  // ---------------------------------------------------------------------------
  // Agent Limits
  // ---------------------------------------------------------------------------
  updateAgentLimits(id, newCreditLimit) {
    return this.put(`api/admin/agents/${id}/limits`, newCreditLimit);
  }
  // ---------------------------------------------------------------------------
  // Transactions
  // ---------------------------------------------------------------------------
  getTransactions() {
    return this.get("api/admin/transactions");
  }
  approveTransaction(id) {
    return this.put(`api/admin/transactions/${id}/approve`);
  }
  cancelTransaction(id) {
    return this.put(`api/admin/transactions/${id}/cancel`);
  }
  completeTransaction(id) {
    return this.put(`api/admin/transactions/${id}/complete`);
  }
  // Agent transaction actions
  releaseTransaction(id) {
    return this.put(`api/agent/transactions/${id}/release`);
  }
  rejectTransaction(id) {
    return this.put(`api/agent/transactions/${id}/reject`);
  }
  // ---------------------------------------------------------------------------
  // Compliance
  // ---------------------------------------------------------------------------
  getAlerts(resolved) {
    const url = resolved !== void 0 && resolved !== null ? `api/admin/compliance/alerts?resolved=${resolved}` : "api/admin/compliance/alerts";
    return this.get(url);
  }
  resolveAlert(id, resolution) {
    return this.http.put(this.url(`api/admin/compliance/alerts/${id}/resolve`), JSON.stringify(resolution), { headers: { "Content-Type": "application/json" } }).pipe(catchError((err) => this.handleError(err)));
  }
  rejectAlert(id) {
    return this.put(`api/admin/compliance/alerts/${id}/reject`);
  }
  // ---------------------------------------------------------------------------
  // Compliance Rules
  // ---------------------------------------------------------------------------
  getComplianceRules() {
    return this.get("api/admin/compliance/rules");
  }
  createComplianceRule(dto) {
    return this.post("api/admin/compliance/rules", dto);
  }
  updateComplianceRule(id, dto) {
    return this.put(`api/admin/compliance/rules/${id}`, dto);
  }
  deleteComplianceRule(id) {
    return this.delete(`api/admin/compliance/rules/${id}`);
  }
  toggleComplianceRule(id) {
    return this.put(`api/admin/compliance/rules/${id}/toggle`);
  }
  // ---------------------------------------------------------------------------
  // Accounting
  // ---------------------------------------------------------------------------
  getAccountingSummaries() {
    return this.get("api/admin/accounting/agents");
  }
  getAgentAdjustments(agentId) {
    return this.get(`api/admin/accounting/agents/${agentId}/adjustments`);
  }
  createAdjustment(dto) {
    return this.post("api/admin/accounting/adjustments", dto);
  }
  deactivateAdjustment(id) {
    return this.put(`api/admin/accounting/adjustments/${id}/deactivate`);
  }
  // ---------------------------------------------------------------------------
  // Customers
  // ---------------------------------------------------------------------------
  getCustomers() {
    return this.get("api/admin/customers");
  }
  createCustomer(dto) {
    return this.post("api/admin/customers", dto);
  }
  updateCustomer(id, dto) {
    return this.put(`api/admin/customers/${id}`, dto);
  }
  approveKyc(id) {
    return this.put(`api/admin/customers/${id}/kyc-approve`);
  }
  rejectKyc(id) {
    return this.put(`api/admin/customers/${id}/kyc-reject`);
  }
  deleteCustomer(id) {
    return this.delete(`api/admin/customers/${id}`);
  }
  toggleCustomerStatus(id) {
    return this.put(`api/admin/customers/${id}/toggle-status`);
  }
  // ---------------------------------------------------------------------------
  // Receivers
  // ---------------------------------------------------------------------------
  getReceivers() {
    return this.get("api/admin/receivers");
  }
  getReceiversByCustomer(customerId) {
    return this.get(`api/admin/receivers/by-customer/${customerId}`);
  }
  createReceiver(dto) {
    return this.post("api/admin/receivers", dto);
  }
  updateReceiver(id, dto) {
    return this.put(`api/admin/receivers/${id}`, dto);
  }
  deleteReceiver(id) {
    return this.delete(`api/admin/receivers/${id}`);
  }
  toggleReceiverStatus(id) {
    return this.put(`api/admin/receivers/${id}/toggle-status`);
  }
  // ---------------------------------------------------------------------------
  // Agent Portal
  // ---------------------------------------------------------------------------
  getAgentProfile() {
    return this.get("api/agent/profile");
  }
  getAgentBalance() {
    return this.get("api/agent/balance");
  }
  getAgentTransactions() {
    return this.get("api/agent/transactions");
  }
  getAgentEarnings() {
    return this.get("api/agent/earnings");
  }
  calculateTransfer(dto) {
    return this.post("api/agent/transactions/calculate", dto);
  }
  sendTransaction(model) {
    return this.post("api/agent/transactions/send", model);
  }
  getCurrentRate(sourceCurrency, destinationCurrency) {
    return this.get(`api/agent/rates/current?sourceCurrency=${sourceCurrency}&destinationCurrency=${destinationCurrency}`);
  }
  // Agent: Customers
  getAgentCustomers() {
    return this.get("api/agent/customers");
  }
  createAgentCustomer(dto) {
    return this.post("api/agent/customers", dto);
  }
  // Agent: Receivers
  getAgentReceiversByCustomer(customerId) {
    return this.get(`api/agent/receivers/by-customer/${customerId}`);
  }
  createAgentReceiver(dto) {
    return this.post("api/agent/receivers", dto);
  }
  // Agent: Routing (corridors)
  getAgentCorridors() {
    return this.get("api/agent/corridors");
  }
  // Agent: Exchange Rates (all active rates for lookup)
  getAgentRates() {
    return this.get("api/agent/rates");
  }
  // Agent: Commission Rates (all active for lookup)
  getAgentCommissions() {
    return this.get("api/agent/commissions");
  }
  // Agent: Banks for a payout agent
  getAgentBanksForPayout(agentId) {
    return this.get(`api/agent/banks/agent/${agentId}`);
  }
  // Agent: Locations for a payout agent
  getAgentLocationsForPayout(agentId) {
    return this.get(`api/agent/locations/agent/${agentId}`);
  }
  // ---------------------------------------------------------------------------
  // Customer Portal
  // ---------------------------------------------------------------------------
  getCustomerTransactions() {
    return this.get("api/customer/transactions");
  }
  // ---------------------------------------------------------------------------
  // Agent Locations
  // ---------------------------------------------------------------------------
  getPaymentMethods() {
    return this.get("api/admin/agent-locations/payment-methods");
  }
  getAgentPaymentMethods() {
    return this.get("api/agent/payment-methods");
  }
  getAgentLocations(agentId) {
    return this.get(`api/admin/agent-locations/agent/${agentId}`);
  }
  createAgentLocation(dto) {
    return this.post("api/admin/agent-locations", dto);
  }
  updateAgentLocation(id, dto) {
    return this.put(`api/admin/agent-locations/${id}`, dto);
  }
  deleteAgentLocation(id) {
    return this.delete(`api/admin/agent-locations/${id}`);
  }
  toggleAgentLocation(id) {
    return this.put(`api/admin/agent-locations/${id}/toggle`);
  }
  createBranch(dto) {
    return this.post("api/admin/agent-locations/branches", dto);
  }
  updateBranch(id, dto) {
    return this.put(`api/admin/agent-locations/branches/${id}`, dto);
  }
  deleteBranch(id) {
    return this.delete(`api/admin/agent-locations/branches/${id}`);
  }
  // ---------------------------------------------------------------------------
  // Agent Location Users
  // ---------------------------------------------------------------------------
  createLocationUser(dto) {
    return this.post("api/admin/agent-locations/users", dto);
  }
  updateLocationUser(id, dto) {
    return this.put(`api/admin/agent-locations/users/${id}`, dto);
  }
  deleteLocationUser(id) {
    return this.delete(`api/admin/agent-locations/users/${id}`);
  }
  // ---------------------------------------------------------------------------
  // Agent Banks
  // ---------------------------------------------------------------------------
  getAgentBanks(agentId) {
    return this.get(`api/admin/agent-banks/agent/${agentId}`);
  }
  createAgentBank(dto) {
    return this.post("api/admin/agent-banks", dto);
  }
  updateAgentBank(id, dto) {
    return this.put(`api/admin/agent-banks/${id}`, dto);
  }
  deleteAgentBank(id) {
    return this.delete(`api/admin/agent-banks/${id}`);
  }
  toggleAgentBank(id) {
    return this.put(`api/admin/agent-banks/${id}/toggle`);
  }
  createBankBranch(dto) {
    return this.post("api/admin/agent-banks/branches", dto);
  }
  updateBankBranch(id, dto) {
    return this.put(`api/admin/agent-banks/branches/${id}`, dto);
  }
  deleteBankBranch(id) {
    return this.delete(`api/admin/agent-banks/branches/${id}`);
  }
  // ---------------------------------------------------------------------------
  // Dashboard
  // ---------------------------------------------------------------------------
  getDashboard() {
    return this.get("api/admin/dashboard");
  }
  // ---------------------------------------------------------------------------
  // Payment Corridors
  // ---------------------------------------------------------------------------
  getCorridors() {
    return this.get("api/admin/routing");
  }
  createCorridor(dto) {
    return this.post("api/admin/routing", dto);
  }
  updateCorridor(id, dto) {
    return this.put(`api/admin/routing/${id}`, dto);
  }
  deleteCorridor(id) {
    return this.delete(`api/admin/routing/${id}`);
  }
  toggleCorridor(id) {
    return this.put(`api/admin/routing/${id}/toggle`);
  }
  addCorridorPartner(dto) {
    return this.post("api/admin/routing/partners", dto);
  }
  updateCorridorPartner(id, dto) {
    return this.put(`api/admin/routing/partners/${id}`, dto);
  }
  deleteCorridorPartner(id) {
    return this.delete(`api/admin/routing/partners/${id}`);
  }
  toggleCorridorPartner(id) {
    return this.put(`api/admin/routing/partners/${id}/toggle`);
  }
  // ---------------------------------------------------------------------------
  // Reference Data
  // ---------------------------------------------------------------------------
  getCountries() {
    return this.get("api/reference/countries");
  }
  getCurrencies() {
    return this.get("api/reference/currencies");
  }
  // ---------------------------------------------------------------------------
  // Reports
  // ---------------------------------------------------------------------------
  getReportAgentsList() {
    return this.get("api/admin/reports/agents-list");
  }
  getAgentStatement(params) {
    const q = new URLSearchParams();
    if (params.agentId)
      q.set("agentId", params.agentId.toString());
    if (params.startDate)
      q.set("startDate", params.startDate);
    if (params.endDate)
      q.set("endDate", params.endDate);
    return this.get(`api/admin/reports/agent-statement?${q.toString()}`);
  }
  createBalanceEntry(dto) {
    return this.post("api/admin/reports/agent-balance-entry", dto);
  }
  getTransactionReport(params) {
    const q = new URLSearchParams();
    if (params.startDate)
      q.set("startDate", params.startDate);
    if (params.endDate)
      q.set("endDate", params.endDate);
    if (params.agentId)
      q.set("agentId", params.agentId.toString());
    if (params.status)
      q.set("status", params.status);
    if (params.country)
      q.set("country", params.country);
    return this.get(`api/admin/reports/transactions?${q.toString()}`);
  }
  getCommissionReport(params) {
    const q = new URLSearchParams();
    if (params.startDate)
      q.set("startDate", params.startDate);
    if (params.endDate)
      q.set("endDate", params.endDate);
    if (params.agentId)
      q.set("agentId", params.agentId.toString());
    return this.get(`api/admin/reports/commissions?${q.toString()}`);
  }
  getRevenueReport(params) {
    const q = new URLSearchParams();
    if (params.startDate)
      q.set("startDate", params.startDate);
    if (params.endDate)
      q.set("endDate", params.endDate);
    return this.get(`api/admin/reports/revenue?${q.toString()}`);
  }
  getSettlementReport(params) {
    const q = new URLSearchParams();
    if (params.startDate)
      q.set("startDate", params.startDate);
    if (params.endDate)
      q.set("endDate", params.endDate);
    return this.get(`api/admin/reports/settlement?${q.toString()}`);
  }
  // ---------------------------------------------------------------------------
  // Setup Fields
  // ---------------------------------------------------------------------------
  getSetupFields(category) {
    const q = category ? `?category=${category}` : "";
    return this.get(`api/admin/setup-fields${q}`);
  }
  createSetupField(dto) {
    return this.post("api/admin/setup-fields", dto);
  }
  updateSetupField(id, dto) {
    return this.put(`api/admin/setup-fields/${id}`, dto);
  }
  deleteSetupField(id) {
    return this.delete(`api/admin/setup-fields/${id}`);
  }
  getDocumentTypeConfigs() {
    return this.get("api/admin/setup-fields/document-types");
  }
  getDocumentTypes() {
    return this.getDocumentTypeConfigs();
  }
  createDocumentTypeConfig(dto) {
    return this.post("api/admin/setup-fields/document-types", dto);
  }
  createDocumentType(dto) {
    return this.createDocumentTypeConfig(dto);
  }
  updateDocumentTypeConfig(id, dto) {
    return this.put(`api/admin/setup-fields/document-types/${id}`, dto);
  }
  updateDocumentType(id, dto) {
    return this.updateDocumentTypeConfig(id, dto);
  }
  deleteDocumentTypeConfig(id) {
    return this.delete(`api/admin/setup-fields/document-types/${id}`);
  }
  deleteDocumentType(id) {
    return this.deleteDocumentTypeConfig(id);
  }
  getSystemSettings() {
    return this.get("api/admin/setup-fields/settings");
  }
  saveSystemSetting(dto) {
    return this.post("api/admin/setup-fields/settings", dto);
  }
  deleteSystemSetting(id) {
    return this.delete(`api/admin/setup-fields/settings/${id}`);
  }
  // ---------------------------------------------------------------------------
  // System Configuration Settings (all 14 sections)
  // ---------------------------------------------------------------------------
  getAllSettings() {
    return this.get("api/admin/settings");
  }
  batchSaveSettings(settings) {
    return this.post("api/admin/settings/batch", settings);
  }
  getSettingDefaults() {
    return this.get("api/admin/settings/defaults");
  }
  // Reference data (dynamic)
  getReferenceSetupFields(category) {
    const q = category ? `?category=${category}` : "";
    return this.get(`api/reference/setup-fields${q}`);
  }
  getReferenceDocumentTypes() {
    return this.get("api/reference/document-types");
  }
  getReferenceSettings() {
    return this.get("api/reference/settings");
  }
  // ---------------------------------------------------------------------------
  // User Management
  // ---------------------------------------------------------------------------
  getRoles() {
    return this.get("api/admin/user-management/roles");
  }
  getRole(id) {
    return this.get(`api/admin/user-management/roles/${id}`);
  }
  createRole(dto) {
    return this.post("api/admin/user-management/roles", dto);
  }
  updateRole(id, dto) {
    return this.put(`api/admin/user-management/roles/${id}`, dto);
  }
  deleteRole(id) {
    return this.delete(`api/admin/user-management/roles/${id}`);
  }
  getMenusForAssignment(portal) {
    const q = portal ? `?portal=${portal}` : "";
    return this.get(`api/admin/user-management/menus${q}`);
  }
  assignPermissions(roleId, permissionIds) {
    return this.put(`api/admin/user-management/roles/${roleId}/permissions`, { permissionIds });
  }
  getAdminUsers(params) {
    const q = new URLSearchParams();
    if (params?.search)
      q.set("search", params.search);
    if (params?.role)
      q.set("role", params.role);
    if (params?.isActive !== void 0)
      q.set("isActive", String(params.isActive));
    const qs = q.toString();
    return this.get(`api/admin/user-management/users${qs ? "?" + qs : ""}`);
  }
  getAdminUser(id) {
    return this.get(`api/admin/user-management/users/${id}`);
  }
  createAdminUser(dto) {
    return this.post("api/admin/user-management/users", dto);
  }
  updateAdminUser(id, dto) {
    return this.put(`api/admin/user-management/users/${id}`, dto);
  }
  toggleUserStatus(id) {
    return this.put(`api/admin/user-management/users/${id}/toggle-status`);
  }
  deleteAdminUser(id) {
    return this.delete(`api/admin/user-management/users/${id}`);
  }
  getPrivileges() {
    return this.get("api/auth/privileges");
  }
  // ---------------------------------------------------------------------------
  // Transaction Detail
  // ---------------------------------------------------------------------------
  getTransactionDetail(id) {
    return this.get(`api/admin/transactions/${id}`);
  }
  getAgentTransactionDetail(id) {
    return this.get(`api/agent/transactions/${id}`);
  }
  // ---------------------------------------------------------------------------
  // Document Upload
  // ---------------------------------------------------------------------------
  uploadDocument(formData) {
    return this.http.post(this.url("api/documents/upload"), formData).pipe(catchError((err) => this.handleError(err)));
  }
  getCustomerDocuments(customerId) {
    return this.get(`api/documents/${customerId}`);
  }
  // ---------------------------------------------------------------------------
  // Pagination helpers
  // ---------------------------------------------------------------------------
  buildPagedQuery(base, request, extra) {
    const params = new URLSearchParams();
    params.set("page", String(request.page));
    params.set("pageSize", String(request.pageSize));
    if (request.sortBy)
      params.set("sortBy", request.sortBy);
    if (request.sortDirection)
      params.set("sortDirection", request.sortDirection);
    if (request.search)
      params.set("search", request.search);
    if (extra) {
      Object.entries(extra).forEach(([k, v]) => {
        if (v !== null && v !== void 0 && v !== "")
          params.set(k, String(v));
      });
    }
    return `${base}?${params.toString()}`;
  }
  // ---------------------------------------------------------------------------
  // Paged endpoints
  // ---------------------------------------------------------------------------
  getCustomersPaged(request) {
    return this.get(this.buildPagedQuery("api/admin/customers/paged", request));
  }
  getAgentsPaged(request) {
    return this.get(this.buildPagedQuery("api/admin/agents/paged", request));
  }
  getTransactionsPaged(request) {
    return this.get(this.buildPagedQuery("api/admin/transactions/paged", request));
  }
  getRatesPaged(request) {
    return this.get(this.buildPagedQuery("api/admin/rates/paged", request));
  }
  getCommissionsPaged(request) {
    return this.get(this.buildPagedQuery("api/admin/commissions/paged", request));
  }
  getAlertsPaged(request, resolved) {
    const extra = {};
    if (resolved !== void 0)
      extra.resolved = resolved;
    return this.get(this.buildPagedQuery("api/admin/compliance/alerts/paged", request, extra));
  }
  getReceiversPaged(request) {
    return this.get(this.buildPagedQuery("api/admin/receivers/paged", request));
  }
  getCorridorsPaged(request) {
    return this.get(this.buildPagedQuery("api/admin/routing/paged", request));
  }
  getAccountingSummariesPaged(request) {
    return this.get(this.buildPagedQuery("api/admin/accounting/agents/paged", request));
  }
  getSetupFieldsPaged(category, request) {
    return this.get(this.buildPagedQuery("api/admin/setup-fields/paged", request, { category }));
  }
  getAgentTransactionsPaged(request) {
    return this.get(this.buildPagedQuery("api/agent/transactions/paged", request));
  }
  // ---------------------------------------------------------------------------
  // Sanctions Management
  // ---------------------------------------------------------------------------
  getSanctionsDashboard() {
    return this.get("api/admin/sanctions/dashboard");
  }
  // Sanction Entries
  getSanctionEntries() {
    return this.get("api/admin/sanctions/entries");
  }
  getSanctionEntriesPaged(request) {
    return this.get(this.buildPagedQuery("api/admin/sanctions/entries/paged", request));
  }
  createSanctionEntry(data) {
    return this.post("api/admin/sanctions/entries", data);
  }
  updateSanctionEntry(id, data) {
    return this.put(`api/admin/sanctions/entries/${id}`, data);
  }
  deleteSanctionEntry(id) {
    return this.delete(`api/admin/sanctions/entries/${id}`);
  }
  toggleSanctionEntry(id) {
    return this.put(`api/admin/sanctions/entries/${id}/toggle`);
  }
  // Sanctioned Countries
  getSanctionedCountries() {
    return this.get("api/admin/sanctions/countries");
  }
  createSanctionedCountry(data) {
    return this.post("api/admin/sanctions/countries", data);
  }
  updateSanctionedCountry(id, data) {
    return this.put(`api/admin/sanctions/countries/${id}`, data);
  }
  deleteSanctionedCountry(id) {
    return this.delete(`api/admin/sanctions/countries/${id}`);
  }
  toggleSanctionedCountry(id) {
    return this.put(`api/admin/sanctions/countries/${id}/toggle`);
  }
  // Screening Results
  getScreeningResultsPaged(request) {
    return this.get(this.buildPagedQuery("api/admin/sanctions/screenings/paged", request));
  }
  reviewScreeningResult(id, data) {
    return this.put(`api/admin/sanctions/screenings/${id}/review`, data);
  }
  exportSanctionEntries(format = "excel") {
    return this.http.get(`${this.baseUrl}/api/admin/sanctions/entries/export?format=${format}`, {
      responseType: "blob"
    });
  }
  static {
    this.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthStateService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: AuthStateService }], null);
})();

export {
  ApiService
};
//# sourceMappingURL=chunk-JPFLOAIK.js.map
