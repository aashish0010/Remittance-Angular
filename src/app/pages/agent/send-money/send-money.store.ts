import { computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { CustomerModel, ReceiverModel } from '../../../core/models/customer.models';
import { TransactionResult, ComplianceViolation } from '../../../core/models/transaction.models';
import { PaymentCorridorModel, CorridorPayoutPartnerModel } from '../../../core/models/routing.models';
import { PaymentMethodModel } from '../../../core/models/agent.models';

export type SendMoneyState = {
  currentStep: number;
  selectedCustomer: CustomerModel | null;
  selectedReceiver: ReceiverModel | null;
  calculationDone: boolean;
  complianceBlocked: boolean;
  balanceWarning: string;
  agentBalanceZero: boolean;
  kycWarning: string;
  dobWarning: string;
  matchedCorridor: PaymentCorridorModel | null;
  selectedPartner: CorridorPayoutPartnerModel | null;
  selectedPayoutModeId: number | null;
  selectedPaymentMethodId: number | null;
  sendAmount: number;
  successResult: TransactionResult | null;
  submitting: boolean;
};

const initialState: SendMoneyState = {
  currentStep: 0,
  selectedCustomer: null,
  selectedReceiver: null,
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
  { providedIn: 'scoped' as any },
  withState<SendMoneyState>(initialState),
  withComputed((state) => ({
    canProceedStep1: computed(() => {
      return !!state.selectedCustomer() && !state.kycWarning() && !state.dobWarning();
    }),
    canProceedStep2: computed(() => {
      return state.calculationDone()
        && !state.complianceBlocked()
        && !state.balanceWarning()
        && !!state.selectedPartner()
        && !!state.selectedPayoutModeId()
        && state.sendAmount() > 0
        && !!state.selectedPaymentMethodId()
        && !state.agentBalanceZero();
    }),
    canProceedStep3: computed(() => {
      return !!state.selectedReceiver();
    }),
    isComplete: computed(() => {
      return state.currentStep() === 3 && !!state.successResult();
    }),
  })),
  withMethods((store) => ({
    setStep(step: number): void {
      patchState(store, { currentStep: step });
    },
    nextStep(): void {
      patchState(store, { currentStep: store.currentStep() + 1 });
    },
    prevStep(): void {
      if (store.currentStep() > 0) {
        patchState(store, { currentStep: store.currentStep() - 1 });
      }
    },
    setSelectedCustomer(customer: CustomerModel | null): void {
      patchState(store, { selectedCustomer: customer });
    },
    setSelectedReceiver(receiver: ReceiverModel | null): void {
      patchState(store, { selectedReceiver: receiver });
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
    setRouteState(corridor: PaymentCorridorModel | null, partner: CorridorPayoutPartnerModel | null, payoutModeId: number | null): void {
      patchState(store, { matchedCorridor: corridor, selectedPartner: partner, selectedPayoutModeId: payoutModeId });
    },
    setSelectedPaymentMethodId(id: number | null): void {
      patchState(store, { selectedPaymentMethodId: id });
    },
    setSendAmount(amount: number): void {
      patchState(store, { sendAmount: amount });
    },
    setSubmitting(submitting: boolean): void {
      patchState(store, { submitting: submitting });
    },
    setSuccessResult(result: TransactionResult | null): void {
      patchState(store, { successResult: result, currentStep: result ? 3 : store.currentStep() });
    },
    reset(): void {
      patchState(store, { ...initialState });
    },
  }))
);
