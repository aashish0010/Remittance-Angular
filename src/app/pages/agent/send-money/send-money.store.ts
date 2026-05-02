import { computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { CustomerModel, ReceiverModel } from '../../../core/models/customer.models';
import { TransactionResult, ComplianceViolation } from '../../../core/models/transaction.models';
import { PaymentCorridorModel, CorridorPayoutPartnerModel } from '../../../core/models/routing.models';
import { PaymentMethodModel, AgentFieldMappingModel } from '../../../core/models/agent.models';

export type ApiType = 'normal' | 'thirdParty' | 'unknown';
export type CustomerSubStep = 'customer' | 'receiver';
export type StepDirection = 'forward' | 'backward';

export type SendMoneyState = {
  // Step navigation
  currentStep: number;
  stepDirection: StepDirection;
  customerSubStep: CustomerSubStep;

  // API type (resolved after calculation)
  apiType: ApiType;
  fieldMappings: AgentFieldMappingModel[];

  // Customer / Receiver
  selectedCustomer: CustomerModel | null;
  selectedReceiver: ReceiverModel | null;
  missingCustomerFields: AgentFieldMappingModel[];
  missingReceiverFields: AgentFieldMappingModel[];

  // Calculation state
  calculationDone: boolean;
  complianceBlocked: boolean;
  balanceWarning: string;
  agentBalanceZero: boolean;
  kycWarning: string;
  dobWarning: string;

  // Route / partner
  matchedCorridor: PaymentCorridorModel | null;
  selectedPartner: CorridorPayoutPartnerModel | null;
  selectedPayoutModeId: number | null;
  selectedPaymentMethodId: number | null;
  sendAmount: number;

  // Submission
  successResult: TransactionResult | null;
  submitting: boolean;
};

const initialState: SendMoneyState = {
  currentStep: 0,
  stepDirection: 'forward',
  customerSubStep: 'customer',
  apiType: 'unknown',
  fieldMappings: [],
  selectedCustomer: null,
  selectedReceiver: null,
  missingCustomerFields: [],
  missingReceiverFields: [],
  calculationDone: false,
  complianceBlocked: false,
  balanceWarning: '',
  agentBalanceZero: false,
  kycWarning: '',
  dobWarning: '',
  matchedCorridor: null,
  selectedPartner: null,
  selectedPayoutModeId: null,
  selectedPaymentMethodId: null,
  sendAmount: 0,
  successResult: null,
  submitting: false,
};

export const SendMoneyStore = signalStore(
  withState<SendMoneyState>(initialState),
  withComputed((state) => ({
    canProceedStep0: computed(() => {
      return state.calculationDone()
        && !state.complianceBlocked()
        && state.sendAmount() > 0
        && !!state.selectedPartner()
        && !!state.selectedPayoutModeId()
        && !!state.selectedPaymentMethodId()
        && !state.agentBalanceZero();
    }),
    canProceedCustomer: computed(() => {
      return !!state.selectedCustomer() && state.missingCustomerFields().length === 0;
    }),
    canProceedReceiver: computed(() => {
      return !!state.selectedReceiver() && state.missingReceiverFields().length === 0;
    }),
    canProceedStep1: computed(() => {
      return !!state.selectedCustomer()
        && !state.kycWarning()
        && !state.dobWarning()
        && state.missingCustomerFields().length === 0
        && !!state.selectedReceiver()
        && state.missingReceiverFields().length === 0;
    }),
    canProceedStep2: computed(() => true),
    isComplete: computed(() => {
      return state.currentStep() === 3 && !!state.successResult();
    }),
    customerMappings: computed(() =>
      state.fieldMappings().filter(m => m.tableName === 'Customer')
    ),
    receiverMappings: computed(() =>
      state.fieldMappings().filter(m => m.tableName === 'Receiver')
    ),
  })),
  withMethods((store) => ({
    setStep(step: number, direction: StepDirection = 'forward'): void {
      patchState(store, { currentStep: step, stepDirection: direction });
    },
    nextStep(): void {
      patchState(store, { currentStep: store.currentStep() + 1, stepDirection: 'forward' });
    },
    prevStep(): void {
      if (store.currentStep() > 0) {
        patchState(store, { currentStep: store.currentStep() - 1, stepDirection: 'backward' });
      }
    },
    setCustomerSubStep(sub: CustomerSubStep, direction: StepDirection = 'forward'): void {
      patchState(store, { customerSubStep: sub, stepDirection: direction });
    },
    setApiType(type: ApiType): void {
      patchState(store, { apiType: type });
    },
    setFieldMappings(mappings: AgentFieldMappingModel[]): void {
      patchState(store, {
        fieldMappings: mappings,
        apiType: mappings.length > 0 ? 'thirdParty' : 'normal',
      });
    },
    setSelectedCustomer(customer: CustomerModel | null): void {
      patchState(store, { selectedCustomer: customer, missingCustomerFields: [] });
    },
    setSelectedReceiver(receiver: ReceiverModel | null): void {
      patchState(store, { selectedReceiver: receiver, missingReceiverFields: [] });
    },
    setMissingCustomerFields(fields: AgentFieldMappingModel[]): void {
      patchState(store, { missingCustomerFields: fields });
    },
    setMissingReceiverFields(fields: AgentFieldMappingModel[]): void {
      patchState(store, { missingReceiverFields: fields });
    },
    setCalculationDone(done: boolean): void {
      patchState(store, { calculationDone: done });
    },
    setComplianceBlocked(blocked: boolean): void {
      patchState(store, { complianceBlocked: blocked });
    },
    setBalanceWarning(warning: string): void {
      patchState(store, { balanceWarning: warning });
    },
    setAgentBalanceZero(zero: boolean): void {
      patchState(store, { agentBalanceZero: zero });
    },
    setKycWarning(warning: string): void {
      patchState(store, { kycWarning: warning });
    },
    setDobWarning(warning: string): void {
      patchState(store, { dobWarning: warning });
    },
    setRouteState(
      corridor: PaymentCorridorModel | null,
      partner: CorridorPayoutPartnerModel | null,
      payoutModeId: number | null
    ): void {
      patchState(store, {
        matchedCorridor: corridor,
        selectedPartner: partner,
        selectedPayoutModeId: payoutModeId,
      });
    },
    setSelectedPaymentMethodId(id: number | null): void {
      patchState(store, { selectedPaymentMethodId: id });
    },
    setSendAmount(amount: number): void {
      patchState(store, { sendAmount: amount });
    },
    setSubmitting(submitting: boolean): void {
      patchState(store, { submitting });
    },
    setSuccessResult(result: TransactionResult | null): void {
      patchState(store, {
        successResult: result,
        currentStep: result ? 3 : store.currentStep(),
        stepDirection: 'forward',
      });
    },
    reset(): void {
      patchState(store, { ...initialState });
    },
  }))
);
