export interface ExchangeRateModel {
  id: number;
  agentId: number;
  agentName: string;
  country?: string;
  sourceCurrency: string;
  destinationCurrency: string;
  rate: number;
  margin?: number;
  effectiveFrom: string;
  effectiveTo?: string;
  isActive: boolean;
}
