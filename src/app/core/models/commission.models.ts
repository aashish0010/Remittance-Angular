export interface CommissionRateModel {
  id: number;
  agentId?: number;
  agentName?: string;
  payoutAgentId: number;
  payoutAgentName: string;
  sourceCountry?: string;
  destinationCountry?: string;
  paymentMethod?: string;
  sourceCurrency?: string;
  destinationCurrency?: string;
  minAmount: number;
  maxAmount: number;
  commissionPercent: number;
  flatFee?: number;
  isActive: boolean;
}
