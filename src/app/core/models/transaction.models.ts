export interface TransactionResult {
  id: number;
  referenceNumber: string;
  senderName: string;
  receiverName: string;
  receiverCountry: string;
  sendAmount: number;
  sendCurrency: string;
  receiveAmount: number;
  receiveCurrency: string;
  exchangeRateApplied: number;
  totalCommission: number;
  agentCommission: number;
  status: string;
  createdAt: string;
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
}

export interface TransferCalculationResult {
  sendAmount: number;
  sendCurrency: string;
  receiveAmount: number;
  receiveCurrency: string;
  exchangeRate: number;
  serviceCharge: number;
  totalPayable: number;
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
  receiverAccountNumber?: string;
  sendAmount: number;
  sendCurrency: string;
  receiveCurrency: string;
  paymentMethod: number;
  payoutMethod: number;
  payoutPartnerId?: number;
  purpose?: string;
}
