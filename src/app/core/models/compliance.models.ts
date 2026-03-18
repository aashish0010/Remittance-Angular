export interface ComplianceAlertModel {
  id: number;
  transactionId: number;
  referenceNumber: string;
  alertType: string;
  description: string;
  isResolved: boolean;
  resolution?: string;
  createdAt: string;
  senderName: string;
  sendAmount: number;
  sendCurrency: string;
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
