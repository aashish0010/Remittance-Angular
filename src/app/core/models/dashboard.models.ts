export interface DashboardModel {
  totalTransactions: number;
  transactionsThisMonth: number;
  transactionsLastMonth: number;
  totalVolume: number;
  volumeThisMonth: number;
  volumeLastMonth: number;
  totalCommissionRevenue: number;
  commissionThisMonth: number;
  commissionLastMonth: number;
  activeAgents: number;
  pendingAgents: number;
  unresolvedAlerts: number;
  activeCorridors: number;
  totalCustomers: number;
  pendingTransactions: number;
  onHoldTransactions: number;
  complianceTransactions: number;
  pendingApprovalTransactions: number;
  pendingPayoutTransactions: number;
  processingAtPartnerTransactions: number;
  completedTransactions: number;
  failedTransactions: number;
  cancelledTransactions: number;
  recentTransactions: RecentTransactionModel[];
  activeExchangeRates: ActiveExchangeRateModel[];
}

export interface RecentTransactionModel {
  referenceNumber: string;
  senderName: string;
  receiverName: string;
  sendAmount: number;
  sendCurrency: string;
  status: string;
  createdAt: string;
}

export interface ActiveExchangeRateModel {
  sourceCurrency: string;
  destinationCurrency: string;
  rate: number;
}
