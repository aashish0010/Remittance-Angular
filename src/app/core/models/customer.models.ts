export interface CustomerModel {
  id: number;
  fullName: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  nationality?: string;
  country: string;
  city?: string;
  state?: string;
  postalCode?: string;
  address?: string;
  idDocumentType?: string;
  idDocumentNumber?: string;
  isKycVerified: boolean;
  createdAt: string;
  documents: CustomerDocumentModel[];
}

export interface CustomerDocumentModel {
  id: number;
  documentType: string;
  documentNumber: string;
  issueDate?: string;
  expiryDate?: string;
  issuingCountry?: string;
  isVerified: boolean;
}

export interface ReceiverModel {
  id: number;
  customerId: number;
  customerName: string;
  fullName: string;
  phone: string;
  email?: string;
  country: string;
  city?: string;
  bankName?: string;
  bankCode?: string;
  accountNumber?: string;
  branchName?: string;
  branchCode?: string;
  bankId?: number;
  branchId?: number;
  relationship?: string;
  isActive: boolean;
  createdAt: string;
}
