import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthStateService } from './auth-state.service';
import { ApiResponse, LoginResponse } from '../models/auth.models';
import { AgentModel, AgentBalance, AgentAccountingSummary, AgentLimitAdjustmentModel, AgentCommissionModel, AgentLocationModel, AgentLocationBranchModel, AgentLocationUserModel, CreateLocationUserRequest, UpdateLocationUserRequest, AgentBankModel, AgentBankBranchModel, PaymentMethodModel, AgentEarningsResponse, AgentListItem } from '../models/agent.models';
import { ExchangeRateModel } from '../models/exchange-rate.models';
import { CommissionRateModel } from '../models/commission.models';
import { ComplianceAlertModel, ComplianceRuleModel } from '../models/compliance.models';
import { TransactionResult, SendTransactionModel, CalculateTransferRequest, TransferCalculationResult } from '../models/transaction.models';
import { DashboardModel } from '../models/dashboard.models';
import { PaymentCorridorModel, CorridorPayoutPartnerModel } from '../models/routing.models';
import { CountryInfo, PagedRequest, PagedResult } from '../models/common.models';
import { CustomerModel, ReceiverModel } from '../models/customer.models';

interface ValidationProblemResponse {
  title?: string;
  status?: number;
  errors?: Record<string, string[]>;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private auth: AuthStateService
  ) {}

  // ---------------------------------------------------------------------------
  // Internal helpers
  // ---------------------------------------------------------------------------

  getBaseUrl(): string {
    return this.baseUrl;
  }

  private url(path: string): string {
    return `${this.baseUrl}${path}`;
  }

  private handleError<T>(error: any): Observable<ApiResponse<T>> {
    if (error?.status === 403) {
      return of({ success: false, message: 'Access denied. Insufficient permissions.', data: null, errors: [] });
    }

    const body = error?.error;

    // Try ApiResponse format
    if (body && typeof body === 'object' && 'message' in body && body.message) {
      return of({ success: false, message: body.message, data: null, errors: body.errors || [] });
    }

    // Try ValidationProblemDetails format
    if (body && typeof body === 'object' && 'errors' in body) {
      const problem = body as ValidationProblemResponse;
      if (problem.errors && Object.keys(problem.errors).length > 0) {
        const messages = Object.values(problem.errors).flat();
        return of({ success: false, message: messages.join(' '), data: null, errors: messages });
      }
      if (problem.title) {
        return of({ success: false, message: problem.title, data: null, errors: [] });
      }
    }

    const status = error?.status || 0;
    return of({ success: false, message: `Server error (${status}).`, data: null, errors: [] });
  }

  private get<T>(path: string): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(this.url(path)).pipe(
      catchError(err => this.handleError<T>(err))
    );
  }

  private post<T>(path: string, body?: any): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(this.url(path), body ?? null).pipe(
      catchError(err => this.handleError<T>(err))
    );
  }

  private put<T>(path: string, body?: any): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(this.url(path), body ?? null).pipe(
      catchError(err => this.handleError<T>(err))
    );
  }

  private delete<T>(path: string): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(this.url(path)).pipe(
      catchError(err => this.handleError<T>(err))
    );
  }

  // ---------------------------------------------------------------------------
  // Auth
  // ---------------------------------------------------------------------------

  login(email: string, password: string): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(this.url('api/auth/login'), { email, password }).pipe(
      catchError(err => this.handleError<LoginResponse>(err))
    );
  }

  refreshToken(refreshToken: string): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(this.url('api/auth/refresh'), { refreshToken }).pipe(
      catchError(err => this.handleError<LoginResponse>(err))
    );
  }

  // ---------------------------------------------------------------------------
  // Agents
  // ---------------------------------------------------------------------------

  getAgents(): Observable<ApiResponse<AgentModel[]>> {
    return this.get<AgentModel[]>('api/admin/agents');
  }

  createAgent(dto: any): Observable<ApiResponse<AgentModel>> {
    return this.post<AgentModel>('api/admin/agents', dto);
  }

  approveAgent(id: number): Observable<ApiResponse<AgentModel>> {
    return this.put<AgentModel>(`api/admin/agents/${id}/approve`);
  }

  rejectAgent(id: number): Observable<ApiResponse<AgentModel>> {
    return this.put<AgentModel>(`api/admin/agents/${id}/reject`);
  }

  blockAgent(id: number): Observable<ApiResponse<AgentModel>> {
    return this.put<AgentModel>(`api/admin/agents/${id}/block`);
  }

  unblockAgent(id: number): Observable<ApiResponse<AgentModel>> {
    return this.put<AgentModel>(`api/admin/agents/${id}/unblock`);
  }

  updateAgent(id: number, dto: any): Observable<ApiResponse<AgentModel>> {
    return this.put<AgentModel>(`api/admin/agents/${id}`, dto);
  }

  deleteAgent(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/agents/${id}`);
  }

  // ---------------------------------------------------------------------------
  // Exchange Rates
  // ---------------------------------------------------------------------------

  getRates(): Observable<ApiResponse<ExchangeRateModel[]>> {
    return this.get<ExchangeRateModel[]>('api/admin/rates');
  }

  createRate(dto: any): Observable<ApiResponse<ExchangeRateModel>> {
    return this.post<ExchangeRateModel>('api/admin/rates', dto);
  }

  updateRate(id: number, dto: any): Observable<ApiResponse<ExchangeRateModel>> {
    return this.put<ExchangeRateModel>(`api/admin/rates/${id}`, dto);
  }

  deleteRate(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/rates/${id}`);
  }

  // ---------------------------------------------------------------------------
  // Commissions
  // ---------------------------------------------------------------------------

  getCommissions(): Observable<ApiResponse<CommissionRateModel[]>> {
    return this.get<CommissionRateModel[]>('api/admin/commissions');
  }

  createCommission(dto: any): Observable<ApiResponse<CommissionRateModel>> {
    return this.post<CommissionRateModel>('api/admin/commissions', dto);
  }

  updateCommission(id: number, dto: any): Observable<ApiResponse<CommissionRateModel>> {
    return this.put<CommissionRateModel>(`api/admin/commissions/${id}`, dto);
  }

  deleteCommission(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/commissions/${id}`);
  }

  // ---------------------------------------------------------------------------
  // Agent Commission
  // ---------------------------------------------------------------------------

  getAgentCommission(agentId: number): Observable<ApiResponse<AgentCommissionModel>> {
    return this.get<AgentCommissionModel>(`api/admin/agent-commissions/${agentId}`);
  }

  saveAgentCommission(dto: any): Observable<ApiResponse<AgentCommissionModel>> {
    return this.post<AgentCommissionModel>('api/admin/agent-commissions', dto);
  }

  deleteAgentCommission(agentId: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/agent-commissions/${agentId}`);
  }

  // ---------------------------------------------------------------------------
  // Agent Limits
  // ---------------------------------------------------------------------------

  updateAgentLimits(id: number, newCreditLimit: number): Observable<ApiResponse<AgentModel>> {
    return this.put<AgentModel>(`api/admin/agents/${id}/limits`, newCreditLimit);
  }

  // ---------------------------------------------------------------------------
  // Transactions
  // ---------------------------------------------------------------------------

  getTransactions(): Observable<ApiResponse<TransactionResult[]>> {
    return this.get<TransactionResult[]>('api/admin/transactions');
  }

  approveTransaction(id: number): Observable<ApiResponse<TransactionResult>> {
    return this.put<TransactionResult>(`api/admin/transactions/${id}/approve`);
  }

  cancelTransaction(id: number): Observable<ApiResponse<TransactionResult>> {
    return this.put<TransactionResult>(`api/admin/transactions/${id}/cancel`);
  }

  completeTransaction(id: number): Observable<ApiResponse<TransactionResult>> {
    return this.put<TransactionResult>(`api/admin/transactions/${id}/complete`);
  }

  // Agent transaction actions
  releaseTransaction(id: number): Observable<ApiResponse<TransactionResult>> {
    return this.put<TransactionResult>(`api/agent/transactions/${id}/release`);
  }

  rejectTransaction(id: number): Observable<ApiResponse<TransactionResult>> {
    return this.put<TransactionResult>(`api/agent/transactions/${id}/reject`);
  }

  // ---------------------------------------------------------------------------
  // Compliance
  // ---------------------------------------------------------------------------

  getAlerts(resolved?: boolean): Observable<ApiResponse<ComplianceAlertModel[]>> {
    const url = resolved !== undefined && resolved !== null
      ? `api/admin/compliance/alerts?resolved=${resolved}`
      : 'api/admin/compliance/alerts';
    return this.get<ComplianceAlertModel[]>(url);
  }

  resolveAlert(id: number, resolution: string): Observable<ApiResponse<ComplianceAlertModel>> {
    return this.http.put<ApiResponse<ComplianceAlertModel>>(
      this.url(`api/admin/compliance/alerts/${id}/resolve`),
      JSON.stringify(resolution),
      { headers: { 'Content-Type': 'application/json' } }
    ).pipe(catchError(err => this.handleError<ComplianceAlertModel>(err)));
  }

  rejectAlert(id: number): Observable<ApiResponse<ComplianceAlertModel>> {
    return this.put<ComplianceAlertModel>(`api/admin/compliance/alerts/${id}/reject`);
  }

  // ---------------------------------------------------------------------------
  // Compliance Rules
  // ---------------------------------------------------------------------------

  getComplianceRules(): Observable<ApiResponse<ComplianceRuleModel[]>> {
    return this.get<ComplianceRuleModel[]>('api/admin/compliance/rules');
  }

  createComplianceRule(dto: any): Observable<ApiResponse<ComplianceRuleModel>> {
    return this.post<ComplianceRuleModel>('api/admin/compliance/rules', dto);
  }

  updateComplianceRule(id: number, dto: any): Observable<ApiResponse<ComplianceRuleModel>> {
    return this.put<ComplianceRuleModel>(`api/admin/compliance/rules/${id}`, dto);
  }

  deleteComplianceRule(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/compliance/rules/${id}`);
  }

  toggleComplianceRule(id: number): Observable<ApiResponse<ComplianceRuleModel>> {
    return this.put<ComplianceRuleModel>(`api/admin/compliance/rules/${id}/toggle`);
  }

  // ---------------------------------------------------------------------------
  // Accounting
  // ---------------------------------------------------------------------------

  getAccountingSummaries(): Observable<ApiResponse<AgentAccountingSummary[]>> {
    return this.get<AgentAccountingSummary[]>('api/admin/accounting/agents');
  }

  getAgentAdjustments(agentId: number): Observable<ApiResponse<AgentLimitAdjustmentModel[]>> {
    return this.get<AgentLimitAdjustmentModel[]>(`api/admin/accounting/agents/${agentId}/adjustments`);
  }

  createAdjustment(dto: any): Observable<ApiResponse<AgentLimitAdjustmentModel>> {
    return this.post<AgentLimitAdjustmentModel>('api/admin/accounting/adjustments', dto);
  }

  deactivateAdjustment(id: number): Observable<ApiResponse<boolean>> {
    return this.put<boolean>(`api/admin/accounting/adjustments/${id}/deactivate`);
  }

  // ---------------------------------------------------------------------------
  // Customers
  // ---------------------------------------------------------------------------

  getCustomers(): Observable<ApiResponse<CustomerModel[]>> {
    return this.get<CustomerModel[]>('api/admin/customers');
  }

  createCustomer(dto: any): Observable<ApiResponse<CustomerModel>> {
    return this.post<CustomerModel>('api/admin/customers', dto);
  }

  updateCustomer(id: number, dto: any): Observable<ApiResponse<CustomerModel>> {
    return this.put<CustomerModel>(`api/admin/customers/${id}`, dto);
  }

  approveKyc(id: number): Observable<ApiResponse<CustomerModel>> {
    return this.put<CustomerModel>(`api/admin/customers/${id}/kyc-approve`);
  }

  rejectKyc(id: number): Observable<ApiResponse<CustomerModel>> {
    return this.put<CustomerModel>(`api/admin/customers/${id}/kyc-reject`);
  }

  deleteCustomer(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/customers/${id}`);
  }

  // ---------------------------------------------------------------------------
  // Receivers
  // ---------------------------------------------------------------------------

  getReceivers(): Observable<ApiResponse<ReceiverModel[]>> {
    return this.get<ReceiverModel[]>('api/admin/receivers');
  }

  getReceiversByCustomer(customerId: number): Observable<ApiResponse<ReceiverModel[]>> {
    return this.get<ReceiverModel[]>(`api/admin/receivers/by-customer/${customerId}`);
  }

  createReceiver(dto: any): Observable<ApiResponse<ReceiverModel>> {
    return this.post<ReceiverModel>('api/admin/receivers', dto);
  }

  updateReceiver(id: number, dto: any): Observable<ApiResponse<ReceiverModel>> {
    return this.put<ReceiverModel>(`api/admin/receivers/${id}`, dto);
  }

  deleteReceiver(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/receivers/${id}`);
  }

  // ---------------------------------------------------------------------------
  // Agent Portal
  // ---------------------------------------------------------------------------

  getAgentProfile(): Observable<ApiResponse<AgentModel>> {
    return this.get<AgentModel>('api/agent/profile');
  }

  getAgentBalance(): Observable<ApiResponse<AgentBalance>> {
    return this.get<AgentBalance>('api/agent/balance');
  }

  getAgentTransactions(): Observable<ApiResponse<TransactionResult[]>> {
    return this.get<TransactionResult[]>('api/agent/transactions');
  }

  getAgentEarnings(): Observable<ApiResponse<AgentEarningsResponse>> {
    return this.get<AgentEarningsResponse>('api/agent/earnings');
  }

  calculateTransfer(dto: CalculateTransferRequest): Observable<ApiResponse<TransferCalculationResult>> {
    return this.post<TransferCalculationResult>('api/agent/transactions/calculate', dto);
  }

  sendTransaction(model: SendTransactionModel): Observable<ApiResponse<TransactionResult>> {
    return this.post<TransactionResult>('api/agent/transactions/send', model);
  }

  getCurrentRate(sourceCurrency: string, destinationCurrency: string): Observable<ApiResponse<ExchangeRateModel>> {
    return this.get<ExchangeRateModel>(`api/agent/rates/current?sourceCurrency=${sourceCurrency}&destinationCurrency=${destinationCurrency}`);
  }

  // Agent: Customers
  getAgentCustomers(): Observable<ApiResponse<CustomerModel[]>> {
    return this.get<CustomerModel[]>('api/agent/customers');
  }

  createAgentCustomer(dto: any): Observable<ApiResponse<CustomerModel>> {
    return this.post<CustomerModel>('api/agent/customers', dto);
  }

  // Agent: Receivers
  getAgentReceiversByCustomer(customerId: number): Observable<ApiResponse<ReceiverModel[]>> {
    return this.get<ReceiverModel[]>(`api/agent/receivers/by-customer/${customerId}`);
  }

  createAgentReceiver(dto: any): Observable<ApiResponse<ReceiverModel>> {
    return this.post<ReceiverModel>('api/agent/receivers', dto);
  }

  // Agent: Routing (corridors)
  getAgentCorridors(): Observable<ApiResponse<PaymentCorridorModel[]>> {
    return this.get<PaymentCorridorModel[]>('api/agent/corridors');
  }

  // Agent: Exchange Rates (all active rates for lookup)
  getAgentRates(): Observable<ApiResponse<ExchangeRateModel[]>> {
    return this.get<ExchangeRateModel[]>('api/agent/rates');
  }

  // Agent: Commission Rates (all active for lookup)
  getAgentCommissions(): Observable<ApiResponse<CommissionRateModel[]>> {
    return this.get<CommissionRateModel[]>('api/agent/commissions');
  }

  // Agent: Banks for a payout agent
  getAgentBanksForPayout(agentId: number): Observable<ApiResponse<AgentBankModel[]>> {
    return this.get<AgentBankModel[]>(`api/agent/banks/agent/${agentId}`);
  }

  // Agent: Locations for a payout agent
  getAgentLocationsForPayout(agentId: number): Observable<ApiResponse<AgentLocationModel[]>> {
    return this.get<AgentLocationModel[]>(`api/agent/locations/agent/${agentId}`);
  }

  // ---------------------------------------------------------------------------
  // Customer Portal
  // ---------------------------------------------------------------------------

  getCustomerTransactions(): Observable<ApiResponse<TransactionResult[]>> {
    return this.get<TransactionResult[]>('api/customer/transactions');
  }

  // ---------------------------------------------------------------------------
  // Agent Locations
  // ---------------------------------------------------------------------------

  getPaymentMethods(): Observable<ApiResponse<PaymentMethodModel[]>> {
    return this.get<PaymentMethodModel[]>('api/admin/agent-locations/payment-methods');
  }

  getAgentPaymentMethods(): Observable<ApiResponse<PaymentMethodModel[]>> {
    return this.get<PaymentMethodModel[]>('api/agent/payment-methods');
  }

  getAgentLocations(agentId: number): Observable<ApiResponse<AgentLocationModel[]>> {
    return this.get<AgentLocationModel[]>(`api/admin/agent-locations/agent/${agentId}`);
  }

  createAgentLocation(dto: any): Observable<ApiResponse<AgentLocationModel>> {
    return this.post<AgentLocationModel>('api/admin/agent-locations', dto);
  }

  updateAgentLocation(id: number, dto: any): Observable<ApiResponse<AgentLocationModel>> {
    return this.put<AgentLocationModel>(`api/admin/agent-locations/${id}`, dto);
  }

  deleteAgentLocation(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/agent-locations/${id}`);
  }

  toggleAgentLocation(id: number): Observable<ApiResponse<boolean>> {
    return this.put<boolean>(`api/admin/agent-locations/${id}/toggle`);
  }

  createBranch(dto: any): Observable<ApiResponse<AgentLocationBranchModel>> {
    return this.post<AgentLocationBranchModel>('api/admin/agent-locations/branches', dto);
  }

  updateBranch(id: number, dto: any): Observable<ApiResponse<AgentLocationBranchModel>> {
    return this.put<AgentLocationBranchModel>(`api/admin/agent-locations/branches/${id}`, dto);
  }

  deleteBranch(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/agent-locations/branches/${id}`);
  }

  // ---------------------------------------------------------------------------
  // Agent Location Users
  // ---------------------------------------------------------------------------

  createLocationUser(dto: CreateLocationUserRequest): Observable<ApiResponse<AgentLocationUserModel>> {
    return this.post<AgentLocationUserModel>('api/admin/agent-locations/users', dto);
  }

  updateLocationUser(id: number, dto: UpdateLocationUserRequest): Observable<ApiResponse<AgentLocationUserModel>> {
    return this.put<AgentLocationUserModel>(`api/admin/agent-locations/users/${id}`, dto);
  }

  deleteLocationUser(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/agent-locations/users/${id}`);
  }

  // ---------------------------------------------------------------------------
  // Agent Banks
  // ---------------------------------------------------------------------------

  getAgentBanks(agentId: number): Observable<ApiResponse<AgentBankModel[]>> {
    return this.get<AgentBankModel[]>(`api/admin/agent-banks/agent/${agentId}`);
  }

  createAgentBank(dto: any): Observable<ApiResponse<AgentBankModel>> {
    return this.post<AgentBankModel>('api/admin/agent-banks', dto);
  }

  updateAgentBank(id: number, dto: any): Observable<ApiResponse<AgentBankModel>> {
    return this.put<AgentBankModel>(`api/admin/agent-banks/${id}`, dto);
  }

  deleteAgentBank(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/agent-banks/${id}`);
  }

  toggleAgentBank(id: number): Observable<ApiResponse<boolean>> {
    return this.put<boolean>(`api/admin/agent-banks/${id}/toggle`);
  }

  createBankBranch(dto: any): Observable<ApiResponse<AgentBankBranchModel>> {
    return this.post<AgentBankBranchModel>('api/admin/agent-banks/branches', dto);
  }

  updateBankBranch(id: number, dto: any): Observable<ApiResponse<AgentBankBranchModel>> {
    return this.put<AgentBankBranchModel>(`api/admin/agent-banks/branches/${id}`, dto);
  }

  deleteBankBranch(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/agent-banks/branches/${id}`);
  }

  // ---------------------------------------------------------------------------
  // Dashboard
  // ---------------------------------------------------------------------------

  getDashboard(): Observable<ApiResponse<DashboardModel>> {
    return this.get<DashboardModel>('api/admin/dashboard');
  }

  // ---------------------------------------------------------------------------
  // Payment Corridors
  // ---------------------------------------------------------------------------

  getCorridors(): Observable<ApiResponse<PaymentCorridorModel[]>> {
    return this.get<PaymentCorridorModel[]>('api/admin/routing');
  }

  createCorridor(dto: any): Observable<ApiResponse<PaymentCorridorModel>> {
    return this.post<PaymentCorridorModel>('api/admin/routing', dto);
  }

  updateCorridor(id: number, dto: any): Observable<ApiResponse<PaymentCorridorModel>> {
    return this.put<PaymentCorridorModel>(`api/admin/routing/${id}`, dto);
  }

  deleteCorridor(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/routing/${id}`);
  }

  toggleCorridor(id: number): Observable<ApiResponse<boolean>> {
    return this.put<boolean>(`api/admin/routing/${id}/toggle`);
  }

  addCorridorPartner(dto: any): Observable<ApiResponse<CorridorPayoutPartnerModel>> {
    return this.post<CorridorPayoutPartnerModel>('api/admin/routing/partners', dto);
  }

  updateCorridorPartner(id: number, dto: any): Observable<ApiResponse<CorridorPayoutPartnerModel>> {
    return this.put<CorridorPayoutPartnerModel>(`api/admin/routing/partners/${id}`, dto);
  }

  deleteCorridorPartner(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/routing/partners/${id}`);
  }

  toggleCorridorPartner(id: number): Observable<ApiResponse<boolean>> {
    return this.put<boolean>(`api/admin/routing/partners/${id}/toggle`);
  }

  // ---------------------------------------------------------------------------
  // Reference Data
  // ---------------------------------------------------------------------------

  getCountries(): Observable<ApiResponse<CountryInfo[]>> {
    return this.get<CountryInfo[]>('api/reference/countries');
  }

  getCurrencies(): Observable<ApiResponse<string[]>> {
    return this.get<string[]>('api/reference/currencies');
  }

  // ---------------------------------------------------------------------------
  // Reports
  // ---------------------------------------------------------------------------

  getReportAgentsList(): Observable<ApiResponse<AgentListItem[]>> {
    return this.get<AgentListItem[]>('api/admin/reports/agents-list');
  }

  getAgentStatement(params: { agentId?: number; startDate?: string; endDate?: string }): Observable<ApiResponse<any>> {
    const q = new URLSearchParams();
    if (params.agentId) q.set('agentId', params.agentId.toString());
    if (params.startDate) q.set('startDate', params.startDate);
    if (params.endDate) q.set('endDate', params.endDate);
    return this.get<any>(`api/admin/reports/agent-statement?${q.toString()}`);
  }

  createBalanceEntry(dto: { agentId: number; entryType: string; amount: number; description?: string }): Observable<ApiResponse<any>> {
    return this.post<any>('api/admin/reports/agent-balance-entry', dto);
  }

  getTransactionReport(params: { startDate?: string; endDate?: string; agentId?: number; status?: string; country?: string }): Observable<ApiResponse<any>> {
    const q = new URLSearchParams();
    if (params.startDate) q.set('startDate', params.startDate);
    if (params.endDate) q.set('endDate', params.endDate);
    if (params.agentId) q.set('agentId', params.agentId.toString());
    if (params.status) q.set('status', params.status);
    if (params.country) q.set('country', params.country);
    return this.get<any>(`api/admin/reports/transactions?${q.toString()}`);
  }

  getCommissionReport(params: { startDate?: string; endDate?: string; agentId?: number }): Observable<ApiResponse<any>> {
    const q = new URLSearchParams();
    if (params.startDate) q.set('startDate', params.startDate);
    if (params.endDate) q.set('endDate', params.endDate);
    if (params.agentId) q.set('agentId', params.agentId.toString());
    return this.get<any>(`api/admin/reports/commissions?${q.toString()}`);
  }

  getRevenueReport(params: { startDate?: string; endDate?: string }): Observable<ApiResponse<any>> {
    const q = new URLSearchParams();
    if (params.startDate) q.set('startDate', params.startDate);
    if (params.endDate) q.set('endDate', params.endDate);
    return this.get<any>(`api/admin/reports/revenue?${q.toString()}`);
  }

  getSettlementReport(params: { startDate?: string; endDate?: string }): Observable<ApiResponse<any>> {
    const q = new URLSearchParams();
    if (params.startDate) q.set('startDate', params.startDate);
    if (params.endDate) q.set('endDate', params.endDate);
    return this.get<any>(`api/admin/reports/settlement?${q.toString()}`);
  }

  // ---------------------------------------------------------------------------
  // Setup Fields
  // ---------------------------------------------------------------------------

  getSetupFields(category?: string): Observable<ApiResponse<any[]>> {
    const q = category ? `?category=${category}` : '';
    return this.get<any[]>(`api/admin/setup-fields${q}`);
  }

  createSetupField(dto: any): Observable<ApiResponse<any>> {
    return this.post<any>('api/admin/setup-fields', dto);
  }

  updateSetupField(id: number, dto: any): Observable<ApiResponse<any>> {
    return this.put<any>(`api/admin/setup-fields/${id}`, dto);
  }

  deleteSetupField(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/setup-fields/${id}`);
  }

  getDocumentTypeConfigs(): Observable<ApiResponse<any[]>> {
    return this.get<any[]>('api/admin/setup-fields/document-types');
  }
  getDocumentTypes(): Observable<ApiResponse<any[]>> { return this.getDocumentTypeConfigs(); }

  createDocumentTypeConfig(dto: any): Observable<ApiResponse<any>> {
    return this.post<any>('api/admin/setup-fields/document-types', dto);
  }
  createDocumentType(dto: any): Observable<ApiResponse<any>> { return this.createDocumentTypeConfig(dto); }

  updateDocumentTypeConfig(id: number, dto: any): Observable<ApiResponse<any>> {
    return this.put<any>(`api/admin/setup-fields/document-types/${id}`, dto);
  }
  updateDocumentType(id: number, dto: any): Observable<ApiResponse<any>> { return this.updateDocumentTypeConfig(id, dto); }

  deleteDocumentTypeConfig(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/setup-fields/document-types/${id}`);
  }
  deleteDocumentType(id: number): Observable<ApiResponse<boolean>> { return this.deleteDocumentTypeConfig(id); }

  getSystemSettings(): Observable<ApiResponse<any[]>> {
    return this.get<any[]>('api/admin/setup-fields/settings');
  }

  saveSystemSetting(dto: any): Observable<ApiResponse<boolean>> {
    return this.post<boolean>('api/admin/setup-fields/settings', dto);
  }

  deleteSystemSetting(id: number): Observable<ApiResponse<boolean>> {
    return this.delete<boolean>(`api/admin/setup-fields/settings/${id}`);
  }

  // Reference data (dynamic)
  getReferenceSetupFields(category?: string): Observable<ApiResponse<any[]>> {
    const q = category ? `?category=${category}` : '';
    return this.get<any[]>(`api/reference/setup-fields${q}`);
  }

  getReferenceDocumentTypes(): Observable<ApiResponse<any[]>> {
    return this.get<any[]>('api/reference/document-types');
  }

  getReferenceSettings(): Observable<ApiResponse<any[]>> {
    return this.get<any[]>('api/reference/settings');
  }

  // ---------------------------------------------------------------------------
  // Transaction Detail
  // ---------------------------------------------------------------------------

  getTransactionDetail(id: number): Observable<ApiResponse<TransactionResult>> {
    return this.get<TransactionResult>(`api/admin/transactions/${id}`);
  }

  getAgentTransactionDetail(id: number): Observable<ApiResponse<TransactionResult>> {
    return this.get<TransactionResult>(`api/agent/transactions/${id}`);
  }

  // ---------------------------------------------------------------------------
  // Document Upload
  // ---------------------------------------------------------------------------

  uploadDocument(formData: FormData): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(this.url('api/documents/upload'), formData).pipe(
      catchError(err => this.handleError<any>(err))
    );
  }

  getCustomerDocuments(customerId: number): Observable<ApiResponse<any[]>> {
    return this.get<any[]>(`api/documents/${customerId}`);
  }

  // ---------------------------------------------------------------------------
  // Pagination helpers
  // ---------------------------------------------------------------------------

  private buildPagedQuery(base: string, request: PagedRequest, extra?: Record<string, any>): string {
    const params = new URLSearchParams();
    params.set('page', String(request.page));
    params.set('pageSize', String(request.pageSize));
    if (request.sortBy) params.set('sortBy', request.sortBy);
    if (request.sortDirection) params.set('sortDirection', request.sortDirection);
    if (request.search) params.set('search', request.search);
    if (extra) {
      Object.entries(extra).forEach(([k, v]) => {
        if (v !== null && v !== undefined && v !== '') params.set(k, String(v));
      });
    }
    return `${base}?${params.toString()}`;
  }

  // ---------------------------------------------------------------------------
  // Paged endpoints
  // ---------------------------------------------------------------------------

  getCustomersPaged(request: PagedRequest): Observable<ApiResponse<PagedResult<any>>> {
    return this.get<PagedResult<any>>(this.buildPagedQuery('api/admin/customers/paged', request));
  }

  getAgentsPaged(request: PagedRequest): Observable<ApiResponse<PagedResult<any>>> {
    return this.get<PagedResult<any>>(this.buildPagedQuery('api/admin/agents/paged', request));
  }

  getTransactionsPaged(request: PagedRequest): Observable<ApiResponse<PagedResult<any>>> {
    return this.get<PagedResult<any>>(this.buildPagedQuery('api/admin/transactions/paged', request));
  }

  getRatesPaged(request: PagedRequest): Observable<ApiResponse<PagedResult<any>>> {
    return this.get<PagedResult<any>>(this.buildPagedQuery('api/admin/rates/paged', request));
  }

  getCommissionsPaged(request: PagedRequest): Observable<ApiResponse<PagedResult<any>>> {
    return this.get<PagedResult<any>>(this.buildPagedQuery('api/admin/commissions/paged', request));
  }

  getAlertsPaged(request: PagedRequest, resolved?: boolean): Observable<ApiResponse<PagedResult<any>>> {
    const extra: any = {};
    if (resolved !== undefined) extra.resolved = resolved;
    return this.get<PagedResult<any>>(this.buildPagedQuery('api/admin/compliance/alerts/paged', request, extra));
  }

  getReceiversPaged(request: PagedRequest): Observable<ApiResponse<PagedResult<any>>> {
    return this.get<PagedResult<any>>(this.buildPagedQuery('api/admin/receivers/paged', request));
  }

  getCorridorsPaged(request: PagedRequest): Observable<ApiResponse<PagedResult<any>>> {
    return this.get<PagedResult<any>>(this.buildPagedQuery('api/admin/routing/paged', request));
  }

  getAccountingSummariesPaged(request: PagedRequest): Observable<ApiResponse<PagedResult<any>>> {
    return this.get<PagedResult<any>>(this.buildPagedQuery('api/admin/accounting/agents/paged', request));
  }

  getSetupFieldsPaged(category: string, request: PagedRequest): Observable<ApiResponse<PagedResult<any>>> {
    return this.get<PagedResult<any>>(this.buildPagedQuery('api/admin/setup-fields/paged', request, { category }));
  }

  getAgentTransactionsPaged(request: PagedRequest): Observable<ApiResponse<PagedResult<any>>> {
    return this.get<PagedResult<any>>(this.buildPagedQuery('api/agent/transactions/paged', request));
  }
}
