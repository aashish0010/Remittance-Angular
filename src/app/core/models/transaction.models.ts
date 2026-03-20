export interface TransactionResult {
  id: number;
  referenceNumber: string;
  senderName: string;
  senderCountry?: string;
  senderPhone?: string;
  senderEmail?: string;
  senderIdType?: string;
  senderIdNumber?: string;
  receiverName: string;
  receiverCountry: string;
  receiverPhone?: string;
  receiverEmail?: string;
  receiverBankName?: string;
  receiverBankCode?: string;
  receiverAccountNumber?: string;
  receiverBranchName?: string;
  receiverBranchCode?: string;
  receiverBankId?: number;
  receiverBranchId?: number;
  sendAmount: number;
  sendCurrency: string;
  receiveAmount: number;
  receiveCurrency: string;
  exchangeRateApplied: number;
  totalCommission: number;
  agentCommission: number;
  payoutAgentCommission: number;
  companyCommission: number;
  status: string;
  paymentMethod: number;
  payoutMethod: number;
  paymentMethodName?: string;
  payoutMethodName?: string;
  sendingAgentName?: string;
  payoutAgentName?: string;
  purpose?: string;
  notes?: string;
  customerId?: number;
  receiverId?: number;
  agentId?: number;
  payoutAgentId?: number;
  approvedByUserId?: string;
  createdAt: string;
  updatedAt?: string;
  completedAt?: string;
}

export interface CalculateTransferRequest {
  sendAmount: number;
  sendCurrency: string;
  receiveCurrency: string;
  senderCountry: string;
  receiverCountry: string;
  paymentMethodId?: number;
  paymentMethodName?: string;
  payoutPartnerId?: number;
  sendingAgentId?: number;
  senderName?: string;
  receiverName?: string;
  customerId?: number;
}

export interface ComplianceViolation {
  ruleName: string;
  ruleType: string;
  action: string;
  description: string;
}

export interface TransferCalculationResult {
  sendAmount: number;
  sendCurrency: string;
  receiveAmount: number;
  receiveCurrency: string;
  exchangeRate: number;
  serviceCharge: number;
  totalPayable: number;
  agentAvailableBalance?: number;
  balanceWarning?: string;
  complianceViolations: ComplianceViolation[];
}

export interface SendTransactionModel {
  senderName: string;
  senderPhone: string;
  senderEmail?: string;
  senderIdType?: string;
  senderIdNumber?: string;
  senderCountry: string;
  receiverName: string;
  receiverPhone: string;
  receiverEmail?: string;
  receiverCountry: string;
  receiverBankName?: string;
  receiverBankCode?: string;
  receiverAccountNumber?: string;
  receiverBranchName?: string;
  receiverBranchCode?: string;
  receiverBankId?: number;
  receiverBranchId?: number;
  sendAmount: number;
  sendCurrency: string;
  receiveCurrency: string;
  paymentMethod: number;
  payoutMethod: number;
  paymentMethodName?: string;
  payoutMethodName?: string;
  payoutPartnerId?: number;
  customerId?: number;
  receiverId?: number;
  purpose?: string;
}
