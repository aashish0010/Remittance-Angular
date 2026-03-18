export interface AgentModel {
  id: number;
  fullName: string;
  email: string;
  businessName: string;
  country: string;
  city: string;
  agentType: string;
  status: string;
  creditLimit: number;
  currentBalance: number;
  isApproved: boolean;
  isActive: boolean;
  createdAt: string;
  licenseNumber?: string;
  address?: string;
  currency?: string;
  fundingType: string;
  phoneNumber: string;
}

export interface AgentBalance {
  agentId: number;
  businessName: string;
  creditLimit: number;
  currentBalance: number;
  availableBalance: number;
}

export interface AgentAccountingSummary {
  agentId: number;
  businessName: string;
  country: string;
  currency?: string;
  fundingType: string;
  baseCreditLimit: number;
  effectiveCreditLimit: number;
  currentBalance: number;
  availableBalance: number;
  activeAdjustments: number;
  status: string;
  agentType: string;
  commissionMode?: string;
  commissionValue: number;
}

export interface AgentLimitAdjustmentModel {
  id: number;
  agentId: number;
  businessName: string;
  amount: number;
  effectiveFrom: string;
  effectiveTo?: string;
  notes?: string;
  isActive: boolean;
  createdAt: string;
}

export interface AgentCommissionModel {
  id: number;
  agentId: number;
  agentName: string;
  commissionType: string;
  commissionValue: number;
  isActive: boolean;
}

export interface AgentLocationModel {
  id: number;
  agentId: number;
  agentName: string;
  paymentMethodId: number;
  paymentMethodName: string;
  locationName: string;
  locationCode?: string;
  country?: string;
  city?: string;
  address?: string;
  contactPhone?: string;
  contactEmail?: string;
  operatingHours?: string;
  additionalInfo?: string;
  isActive: boolean;
  createdAt: string;
  branches: AgentLocationBranchModel[];
  users: AgentLocationUserModel[];
}

export interface AgentLocationBranchModel {
  id: number;
  agentLocationId: number;
  branchName: string;
  branchCode?: string;
  address?: string;
  contactPhone?: string;
  isActive: boolean;
  createdAt: string;
}

export interface AgentLocationUserModel {
  id: number;
  agentLocationId: number;
  fullName: string;
  email: string;
  userName?: string;
  phone?: string;
  role?: string;
  isDefault: boolean;
  isActive: boolean;
  createdAt: string;
}

export interface CreateLocationUserRequest {
  agentLocationId: number;
  fullName: string;
  email: string;
  userName?: string;
  password?: string;
  phone?: string;
  role?: string;
  isDefault: boolean;
}

export interface UpdateLocationUserRequest {
  fullName: string;
  email: string;
  userName?: string;
  password?: string;
  phone?: string;
  role?: string;
  isDefault: boolean;
}

export interface AgentBankModel {
  id: number;
  agentId: number;
  agentName: string;
  paymentMethodId?: number;
  paymentMethodName?: string;
  bankName: string;
  bankCode?: string;
  swiftCode?: string;
  routingNumber?: string;
  country?: string;
  city?: string;
  address?: string;
  contactPhone?: string;
  contactEmail?: string;
  additionalInfo?: string;
  isActive: boolean;
  createdAt: string;
  branches: AgentBankBranchModel[];
}

export interface AgentBankBranchModel {
  id: number;
  agentBankId: number;
  branchName: string;
  branchCode?: string;
  swiftCode?: string;
  address?: string;
  contactPhone?: string;
  isActive: boolean;
  createdAt: string;
}

export interface PaymentMethodModel {
  id: number;
  name: string;
  isActive: boolean;
}
