export interface ComplianceAlertModel {
  id: number;
  transactionId: number;
  referenceNumber: string;
  alertType: string;
  description: string;
  isResolved: boolean;
  resolution?: string;
  resolvedAt?: string;
  createdAt: string;
  senderName: string;
  senderCountry?: string;
  receiverName: string;
  receiverCountry?: string;
  receiverBankName?: string;
  receiverAccountNumber?: string;
  sendAmount: number;
  sendCurrency: string;
  receiveAmount: number;
  receiveCurrency: string;
  exchangeRateApplied: number;
  totalCommission: number;
  paymentMethodName?: string;
  payoutMethodName?: string;
  sendingAgentName?: string;
  payoutAgentName?: string;
  transactionStatus: string;
}

export interface ComplianceRuleModel {
  id: number;
  ruleName: string;
  ruleType: string;
  thresholdAmount?: number;
  timePeriodDays?: number;
  maxTransactionCount?: number;
  sourceCountry?: string;
  destinationCountry?: string;
  action: string;
  isActive: boolean;
  createdAt: string;
}
