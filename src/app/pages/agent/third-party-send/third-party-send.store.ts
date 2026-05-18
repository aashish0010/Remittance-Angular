import { computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { CustomerModel, ReceiverModel } from '../../../core/models/customer.models';
import { TransactionResult } from '../../../core/models/transaction.models';
import { CorridorPayoutPartnerModel } from '../../../core/models/routing.models';
import { AgentFieldMappingModel } from '../../../core/models/agent.models';

export type TpSubStep = 'customer' | 'receiver';
export type StepDir = 'forward' | 'backward';

export type ThirdPartySendState = {
  currentStep: number;
  stepDir: StepDir;
  subStep: TpSubStep;

  // Passed from send-money page
  sendAmount: number;
  receiveAmount: number;
  exchangeRate: number;
  serviceCharge: number;
  totalPayable: number;
  sendCurrency: string;
  receiveCurrency: string;
  receiverCountry: string;
  receiverCountryIso2: string;
  receiverCountryIso3: string;
  senderCountry: string;
  quoteId: string | null;
  partner: CorridorPayoutPartnerModel | null;
  paymentMethodId: number | null;
  paymentMethodName: string;
  payoutModeId: number | null;
  serviceOptionCode: string | null;
  serviceOptionRoutingCode: string | null;
  payoutType: 'bank' | 'cash' | 'wallet' | null;

  // Dynamic field mappings
  fieldMappings: AgentFieldMappingModel[];
  missingCustomerFields: AgentFieldMappingModel[];
  missingReceiverFields: AgentFieldMappingModel[];

  // Selections
  selectedCustomer: CustomerModel | null;
  selectedReceiver: ReceiverModel | null;
  kycWarning: string;
  dobWarning: string;

  // Submission
  successResult: TransactionResult | null;
  submitting: boolean;
};

const initialState: ThirdPartySendState = {
  currentStep: 0,
  stepDir: 'forward',
  subStep: 'customer',
  sendAmount: 0,
  receiveAmount: 0,
  exchangeRate: 0,
  serviceCharge: 0,
  totalPayable: 0,
  sendCurrency: '',
  receiveCurrency: '',
  receiverCountry: '',
  receiverCountryIso2: '',
  receiverCountryIso3: '',
  senderCountry: '',
  quoteId: null,
  partner: null,
  paymentMethodId: null,
  paymentMethodName: '',
  payoutModeId: null,
  serviceOptionCode: null,
  serviceOptionRoutingCode: null,
  payoutType: null,
  fieldMappings: [],
  missingCustomerFields: [],
  missingReceiverFields: [],
  selectedCustomer: null,
  selectedReceiver: null,
  kycWarning: '',
  dobWarning: '',
  successResult: null,
  submitting: false,
};

export const ThirdPartySendStore = signalStore(
  withState<ThirdPartySendState>(initialState),
  withComputed((state) => ({
    customerMappings: computed(() => state.fieldMappings().filter(m => m.tableName?.toLowerCase() === 'customers' || m.tableName?.toLowerCase() === 'customer')),
    receiverMappings: computed(() => state.fieldMappings().filter(m => m.tableName?.toLowerCase() === 'receivers' || m.tableName?.toLowerCase() === 'receiver')),
    canProceedCustomer: computed(() =>
      !!state.selectedCustomer() && state.missingCustomerFields().length === 0
    ),
    canProceedStep1: computed(() =>
      !!state.selectedCustomer()
      && !state.kycWarning()
      && !state.dobWarning()
      && state.missingCustomerFields().length === 0
      && !!state.selectedReceiver()
      && state.missingReceiverFields().length === 0
    ),
    isComplete: computed(() => state.currentStep() === 3 && !!state.successResult()),
  })),
  withMethods((store) => ({
    initFromNavState(s: Partial<ThirdPartySendState>): void {
      patchState(store, s);
    },
    nextStep(): void {
      patchState(store, { currentStep: store.currentStep() + 1, stepDir: 'forward' });
    },
    prevStep(): void {
      if (store.currentStep() > 0)
        patchState(store, { currentStep: store.currentStep() - 1, stepDir: 'backward' });
    },
    setSubStep(sub: TpSubStep, dir: StepDir = 'forward'): void {
      patchState(store, { subStep: sub, stepDir: dir });
    },
    setFieldMappings(mappings: AgentFieldMappingModel[]): void {
      patchState(store, { fieldMappings: mappings });
    },
    setSelectedCustomer(c: CustomerModel | null): void {
      patchState(store, { selectedCustomer: c, missingCustomerFields: [] });
    },
    setSelectedReceiver(r: ReceiverModel | null): void {
      patchState(store, { selectedReceiver: r, missingReceiverFields: [] });
    },
    setMissingCustomerFields(fields: AgentFieldMappingModel[]): void {
      patchState(store, { missingCustomerFields: fields });
    },
    setMissingReceiverFields(fields: AgentFieldMappingModel[]): void {
      patchState(store, { missingReceiverFields: fields });
    },
    setKycWarning(w: string): void { patchState(store, { kycWarning: w }); },
    setDobWarning(w: string): void { patchState(store, { dobWarning: w }); },
    setSubmitting(v: boolean): void { patchState(store, { submitting: v }); },
    setSuccessResult(r: TransactionResult | null): void {
      patchState(store, { successResult: r, currentStep: r ? 3 : store.currentStep() });
    },
    reset(): void { patchState(store, { ...initialState }); },
  }))
);
