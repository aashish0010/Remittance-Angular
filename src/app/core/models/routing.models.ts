export interface PaymentCorridorModel {
  id: number;
  sendingAgentId?: number;
  sendingAgentName?: string;
  sourceCountry: string;
  sourceCurrency: string;
  destinationCountry: string;
  destinationCurrency: string;
  isActive: boolean;
  createdAt: string;
  payoutPartners: CorridorPayoutPartnerModel[];
}

export interface CorridorPayoutPartnerModel {
  id: number;
  paymentCorridorId: number;
  payoutAgentId: number;
  payoutAgentName: string;
  paymentModeIds: number[];
  paymentModeNames: string[];
  isActive: boolean;
}
