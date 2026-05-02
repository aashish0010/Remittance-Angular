import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePicker } from 'primeng/datepicker';
import { z } from 'zod';
import { Subject, debounceTime, takeUntil } from 'rxjs';

import { NotificationService } from '../../../core/services/notification.service';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { AppSettingsService } from '../../../core/services/app-settings.service';

import { SendMoneyStore, StepDirection } from './send-money.store';
import { AgentBankModel, AgentLocationModel, PaymentMethodModel } from '../../../core/models/agent.models';
import { CustomerModel, ReceiverModel } from '../../../core/models/customer.models';
import { PaymentCorridorModel, CorridorPayoutPartnerModel } from '../../../core/models/routing.models';
import { TransactionResult, ComplianceViolation, CalculateTransferRequest } from '../../../core/models/transaction.models';
import { CountryInfo } from '../../../core/models/common.models';

const CustomerFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').max(100),
  phone: z.string().min(1, 'Phone is required').max(20),
  email: z.union([z.string().email('Invalid email'), z.literal(''), z.null(), z.undefined()]).optional(),
  dateOfBirth: z.union([z.date(), z.string(), z.null()]).optional(),
  gender: z.string().nullish(),
  nationality: z.string().min(1, 'Nationality is required'),
  country: z.string().min(1, 'Country is required'),
  city: z.string().nullish(),
  state: z.string().nullish(),
  postalCode: z.string().nullish(),
  address: z.string().nullish(),
  idDocumentType: z.string().min(1, 'Document type is required'),
  idDocumentNumber: z.string().min(1, 'Document number is required'),
  docIssueDate: z.union([z.date(), z.string(), z.null()]).optional(),
  docExpiryDate: z.union([z.date(), z.string(), z.null()]).optional(),
  docIssuingCountry: z.string().nullish(),
});

const ReceiverFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').max(100),
  phone: z.string().min(1, 'Phone is required').max(20),
  email: z.union([z.string().email('Invalid email'), z.literal(''), z.null(), z.undefined()]).optional(),
  country: z.string().nullish(),
  city: z.string().nullish(),
  bankName: z.string().nullish(),
  bankCode: z.string().nullish(),
  accountNumber: z.string().nullish(),
  branchName: z.string().nullish(),
  branchCode: z.string().nullish(),
  bankId: z.number().nullish(),
  branchId: z.number().nullish(),
  relationship: z.string().nullish(),
});

@Component({
  selector: 'app-send-money',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DecimalPipe, DatePicker],
  providers: [SendMoneyStore],
  templateUrl: './send-money.component.html',
  styleUrl: './send-money.component.scss',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)', maxHeight: '0px' }),
        animate('220ms cubic-bezier(0.4,0,0.2,1)', style({ opacity: 1, transform: 'translateY(0)', maxHeight: '500px' }))
      ]),
      transition(':leave', [
        animate('160ms cubic-bezier(0.4,0,1,1)', style({ opacity: 0, transform: 'translateY(-6px)', maxHeight: '0px' }))
      ])
    ]),
    trigger('fadeSlideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('200ms 40ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(4px)' }))
      ])
    ]),
    trigger('staggerList', [
      transition(':enter', [
        query('.stagger-item', [
          style({ opacity: 0, transform: 'translateX(-8px)' }),
          stagger(50, animate('180ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })))
        ], { optional: true })
      ])
    ]),
    trigger('swapIconRotate', [
      state('closed', style({ transform: 'rotate(0deg)' })),
      state('open', style({ transform: 'rotate(180deg)' })),
      transition('closed <=> open', animate('200ms ease-in-out'))
    ])
  ]
})
export class SendMoneyComponent implements OnInit, OnDestroy {
  readonly store = inject(SendMoneyStore);
  private api = inject(ApiService);
  private auth = inject(AuthStateService);
  private notify = inject(NotificationService);
  readonly appSettings = inject(AppSettingsService);
  router = inject(Router);

  // ── Ref data ──────────────────────────────────────────────────────────────
  agentProfile: any = null;
  private currentQuoteId: string | null = null;
  agentBalance: any = null;
  countries: CountryInfo[] = [];
  paymentMethods: PaymentMethodModel[] = [];
  allCorridors: PaymentCorridorModel[] = [];
  idTypes: any[] = [];

  // ── Customers / Receivers ─────────────────────────────────────────────────
  customers: CustomerModel[] = [];
  filteredCustomers: CustomerModel[] = [];
  customerSearch = '';
  receivers: ReceiverModel[] = [];
  filteredReceivers: ReceiverModel[] = [];
  receiverSearch = '';

  // ── UI state ──────────────────────────────────────────────────────────────
  showCustomerDropdown = false;
  showCreateCustomer = false;
  showCreateReceiver = false;
  showBranchPopup = false;
  showMissingCustomerForm = false;
  showMissingReceiverForm = false;

  // Animation
  stepAnimClass = '';
  subStepAnimClass = '';
  animating = false;

  // ── Calculator state ──────────────────────────────────────────────────────
  senderCountry = '';
  senderCurrency = '';
  receiverCountry = '';
  receiverCurrency = '';
  sendAmountInput = 0;
  receiveAmount = 0;
  exchangeRate = 0;
  serviceCharge = 0;
  totalPayable = 0;
  loadingCalc = false;
  calcError = '';
  matchedPartners: CorridorPayoutPartnerModel[] = [];
  selectedPartnerLocal: CorridorPayoutPartnerModel | null = null;
  selectedPayoutModeId: number | null = null;
  payoutBanks: AgentBankModel[] = [];
  payoutLocations: AgentLocationModel[] = [];
  payoutCashLocations: AgentBankModel[] = [];
  selectedPaymentMethodId: number | null = null;
  transactionPayoutDetails: {
    bankName: string | null; bankCode: string | null; bankId: number | null;
    accountNumber: string | null; branchName: string | null;
    branchCode: string | null; branchId: number | null;
  } = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
  savedPayoutDetails: any[] = [];
  selectedSavedDetail: any | null = null;
  showPayoutSwapPanel: boolean = false;
  showNewAccountForm: boolean = false;
  complianceViolations: ComplianceViolation[] = [];

  // ── Customer form ─────────────────────────────────────────────────────────
  customerForm = new FormGroup({
    fullName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl<Date | null>(null),
    gender: new FormControl(''),
    nationality: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl(''),
    address: new FormControl(''),
    idDocumentType: new FormControl(''),
    idDocumentNumber: new FormControl(''),
    docIssueDate: new FormControl<Date | null>(null),
    docExpiryDate: new FormControl<Date | null>(null),
    docIssuingCountry: new FormControl(''),
  });
  customerFormErrors: Record<string, string> = {};
  customerFrontFile: File | null = null;
  customerBackFile: File | null = null;
  customerFrontPreview: string | null = null;
  customerBackPreview: string | null = null;
  savingCustomer = false;

  // ── Receiver form ─────────────────────────────────────────────────────────
  receiverForm = new FormGroup({
    fullName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    bankName: new FormControl(''),
    bankCode: new FormControl(''),
    accountNumber: new FormControl(''),
    branchName: new FormControl(''),
    branchCode: new FormControl(''),
    bankId: new FormControl<number | null>(null),
    branchId: new FormControl<number | null>(null),
    relationship: new FormControl(''),
  });
  receiverFormErrors: Record<string, string> = {};
  savingReceiver = false;

  // ── Missing fields (third-party) ──────────────────────────────────────────
  missingCustomerData: Record<string, string> = {};
  missingReceiverData: Record<string, string> = {};
  savingMissingCustomer = false;
  savingMissingReceiver = false;

  // ── Branch popup ──────────────────────────────────────────────────────────
  branchSearch = '';
  branchBankName = '';
  allBranches: any[] = [];
  filteredBranches: any[] = [];
  branchContext: 'form' | 'txn' = 'form';

  // ── Compliance ────────────────────────────────────────────────────────────
  purpose = '';
  sourceOfFunds = '';
  relationship = '';
  purposes: any[] = [];
  sourcesOfFund: any[] = [];
  relationships: any[] = [];

  // ── PIN ───────────────────────────────────────────────────────────────────
  lockingRate = false;
  showPinDialog = false;
  pinMode: 'set' | 'verify' = 'verify';
  pinInput = '';
  pinConfirm = '';
  pinError = '';

  // ── Debounce ──────────────────────────────────────────────────────────────
  private calcSubject = new Subject<void>();
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.calcSubject.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(() => {
      this.calculateViaBackend();
    });
    this.loadInitialData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Initial data load ─────────────────────────────────────────────────────
  private loadInitialData(): void {
    this.api.getAgentProfile().subscribe((r: any) => {
      if (r.success) {
        this.agentProfile = r.data;
        this.senderCountry = r.data?.country ?? '';
        this.senderCurrency = r.data?.currency ?? '';
        this.findRoute();
      }
    });
    this.api.getAgentBalance().subscribe((r: any) => {
      if (r.success) {
        this.agentBalance = r.data;
        this.store.setAgentBalanceZero(!r.data || r.data.availableBalance <= 0);
      }
    });
    this.api.getCountries().subscribe((r: any) => {
      if (r.success) this.countries = r.data ?? [];
    });
    this.api.getAgentPaymentMethods().subscribe((r: any) => {
      if (r.success) this.paymentMethods = r.data ?? [];
    });
    this.api.getAgentCorridors().subscribe((r: any) => {
      if (r.success) this.allCorridors = r.data ?? [];
    });
    this.api.getAgentCustomers().subscribe((r: any) => {
      if (r.success) {
        this.customers = r.data ?? [];
        this.filteredCustomers = this.customers;
      }
    });
    this.api.getReferenceSetupFields('IdType').subscribe((r: any) => {
      if (r.success) this.idTypes = r.data ?? [];
    });
    this.api.getReferenceSetupFields('Purpose').subscribe((r: any) => {
      if (r.success) this.purposes = r.data ?? [];
    });
    this.api.getReferenceSetupFields('SourceOfFund').subscribe((r: any) => {
      if (r.success) this.sourcesOfFund = r.data ?? [];
    });
    this.api.getReferenceSetupFields('Relationship').subscribe((r: any) => {
      if (r.success) this.relationships = r.data ?? [];
    });
  }

  // ── Step navigation ───────────────────────────────────────────────────────
  goToStep(step: number, direction: StepDirection = 'forward'): void {
    if (this.animating) return;
    this.animating = true;
    const exitClass = direction === 'forward' ? 'slide-out-left' : 'slide-out-right';
    const enterClass = direction === 'forward' ? 'slide-in-right' : 'slide-in-left';
    this.stepAnimClass = exitClass;
    setTimeout(() => {
      this.store.setStep(step, direction);
      this.stepAnimClass = enterClass;
      setTimeout(() => {
        this.stepAnimClass = '';
        this.animating = false;
      }, 300);
    }, 250);
  }

  nextStep(): void {
    this.goToStep(this.store.currentStep() + 1, 'forward');
  }

  prevStep(): void {
    if (this.store.currentStep() > 0) {
      this.goToStep(this.store.currentStep() - 1, 'backward');
    }
  }

  goToSubStep(sub: 'customer' | 'receiver', direction: StepDirection = 'forward'): void {
    if (this.animating) return;
    this.animating = true;
    const exitClass = direction === 'forward' ? 'slide-out-left' : 'slide-out-right';
    const enterClass = direction === 'forward' ? 'slide-in-right' : 'slide-in-left';
    this.subStepAnimClass = exitClass;
    setTimeout(() => {
      this.store.setCustomerSubStep(sub, direction);
      this.subStepAnimClass = enterClass;
      setTimeout(() => {
        this.subStepAnimClass = '';
        this.animating = false;
      }, 300);
    }, 250);
  }

  // ── Calculator ────────────────────────────────────────────────────────────
  onAmountChange(): void {
    this.store.setSendAmount(this.sendAmountInput);
    if (this.sendAmountInput > 0 && this.senderCurrency && this.receiverCurrency && this.selectedPaymentMethodId) {
      this.calcSubject.next();
    }
  }

  onReceiverCountryChange(): void {
    const found = this.countries.find(c => c.name === this.receiverCountry);
    this.receiverCurrency = found?.currency ?? '';
    this.findRoute();
    this.onAmountChange();
  }

  onPaymentMethodChange(): void {
    this.payoutBanks = [];
    this.payoutCashLocations = [];
    this.payoutLocations = [];
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
    this.savedPayoutDetails = [];
    this.selectedSavedDetail = null;
    this.showPayoutSwapPanel = false;
    this.showNewAccountForm = false;
    this.store.setSelectedPaymentMethodId(this.selectedPaymentMethodId);
    this.findRoute();
    this.onAmountChange();
    this.loadReceiverPaymentDetail();
  }

  private findRoute(): void {
    if (!this.senderCountry || !this.receiverCountry || !this.senderCurrency || !this.receiverCurrency) return;

    const corridor = this.allCorridors.find(c =>
      c.sourceCountry === this.senderCountry &&
      c.destinationCountry === this.receiverCountry &&
      c.sourceCurrency === this.senderCurrency &&
      c.destinationCurrency === this.receiverCurrency
    );

    if (!corridor) {
      this.store.setRouteState(null, null, null);
      this.matchedPartners = [];
      this.currentQuoteId = null;
      this.calcError = 'No route found for this corridor.';
      return;
    }

    this.matchedPartners = corridor.payoutPartners?.filter((p: any) => p.isActive) ?? [];
    const partner = this.matchedPartners[0] ?? null;

    const payoutModes: number[] = partner?.paymentModeIds ?? [];
    const payoutModeId = payoutModes[0] ?? null;

    this.selectedPayoutModeId = payoutModeId;
    this.selectedPartnerLocal = partner;
    this.store.setRouteState(corridor, partner, payoutModeId);
    this.store.setSelectedPaymentMethodId(this.selectedPaymentMethodId);
    this.calcError = '';

    if (partner) {
      this.loadPayoutInfrastructure(partner.payoutAgentId);
    } else if ((this.isCashTransfer() || this.isWalletTransfer()) && this.agentProfile?.id) {
      this.loadPayoutInfrastructure(this.agentProfile.id);
    }
  }

  private loadPayoutInfrastructure(agentId: number): void {
    const methodName = this.resolvedPaymentMethodName();
    if (methodName.includes('bank')) {
      this.api.getAgentBanksForPayout(agentId).subscribe((r: any) => {
        if (r.success) this.payoutBanks = r.data ?? [];
      });
    } else if (methodName.includes('cash') || methodName.includes('pickup')) {
      this.api.getAgentCashLocations(agentId).subscribe((r: any) => {
        if (r.success) this.payoutCashLocations = r.data ?? [];
      });
    } else if (methodName.includes('wallet') || methodName.includes('mobile')) {
      this.api.getAgentWalletLocations(agentId).subscribe((r: any) => {
        if (r.success) this.payoutLocations = r.data ?? [];
      });
    } else {
      this.api.getAgentLocationsForPayout(agentId).subscribe((r: any) => {
        if (r.success) this.payoutLocations = r.data ?? [];
      });
    }
  }

  private calculateViaBackend(): void {
    if (!this.store.selectedPartner() || !this.selectedPaymentMethodId || this.sendAmountInput <= 0) return;
    this.loadingCalc = true;
    this.complianceViolations = [];
    this.store.setCalculationDone(false);

    const dto: any = {
      sendAmount: this.sendAmountInput,
      sendCurrency: this.senderCurrency,
      receiveCurrency: this.receiverCurrency,
      senderCountry: this.senderCountry,
      receiverCountry: this.receiverCountry,
      paymentMethodId: this.selectedPaymentMethodId ?? 0,
      paymentMethodName: this.paymentMethods.find(m => m.id === this.selectedPaymentMethodId)?.name ?? '',
      payoutPartnerId: this.store.selectedPartner()!.payoutAgentId,
    };

    this.api.calculateTransfer(dto).subscribe({
      next: (r: any) => {
        this.loadingCalc = false;
        if (r.success && r.data) {
          this.receiveAmount = r.data.receiveAmount;
          this.exchangeRate = r.data.exchangeRate;
          this.serviceCharge = r.data.serviceCharge;
          this.totalPayable = r.data.totalPayable;
          this.currentQuoteId = r.data.quoteId ?? null;
          this.complianceViolations = r.data.complianceViolations ?? [];

          const blocked = this.complianceViolations.some((v: ComplianceViolation) => v.action === 'Block');
          this.store.setComplianceBlocked(blocked);
          this.store.setBalanceWarning(r.data.balanceWarning ?? '');
          this.store.setCalculationDone(true);
          this.calcError = '';

          // Fetch field mappings after corridor resolved
          const payoutAgentId = this.store.selectedPartner()!.payoutAgentId;
          this.api.getAgentFieldMappings(payoutAgentId).subscribe((mr: any) => {
            if (mr.success) this.store.setFieldMappings(mr.data ?? []);
          });
        } else {
          this.calcError = r.message ?? 'Calculation failed.';
          this.complianceViolations = [];
          this.receiveAmount = 0;
          this.exchangeRate = 0;
          this.serviceCharge = 0;
          this.totalPayable = 0;
          this.currentQuoteId = null;
          this.store.setComplianceBlocked(false);
          this.store.setCalculationDone(false);
        }
      },
      error: () => {
        this.loadingCalc = false;
        this.calcError = 'Calculation error. Please try again.';
        this.complianceViolations = [];
        this.receiveAmount = 0;
        this.exchangeRate = 0;
        this.serviceCharge = 0;
        this.totalPayable = 0;
        this.currentQuoteId = null;
        this.store.setComplianceBlocked(false);
      },
    });
  }

  proceedFromCalculator(): void {
    if (!this.store.canProceedStep0()) return;
    this.api.getAgentCustomers().subscribe((r: any) => {
      if (r.success) {
        this.customers = r.data ?? [];
        this.filteredCustomers = this.customers;
      }
    });
    this.goToStep(1, 'forward');
  }

  // ── Payout mode helpers ───────────────────────────────────────────────────
  private resolvedPaymentMethodName(): string {
    // Use Number() to handle string coercion from ngModel, fall back to store signal
    const id = Number(this.selectedPaymentMethodId ?? this.store.selectedPaymentMethodId());
    if (!id) return '';
    return (this.paymentMethods.find(m => m.id === id)?.name ?? '').toLowerCase();
  }

  isBankTransfer(): boolean {
    return this.resolvedPaymentMethodName().includes('bank');
  }

  isCashTransfer(): boolean {
    const n = this.resolvedPaymentMethodName();
    return n.includes('cash') || n.includes('pickup');
  }

  isWalletTransfer(): boolean {
    const n = this.resolvedPaymentMethodName();
    return n.includes('wallet') || n.includes('mobile');
  }

  // ── Customer search/select ────────────────────────────────────────────────
  hideCustomerDropdownDelayed(): void {
    setTimeout(() => { this.showCustomerDropdown = false; }, 200);
  }

  filterCustomers(): void {
    const q = this.customerSearch.toLowerCase();
    this.filteredCustomers = q
      ? this.customers.filter(c => c.fullName.toLowerCase().includes(q) || (c.phone ?? '').toLowerCase().includes(q))
      : this.customers;
    this.showCustomerDropdown = true;
  }

  selectCustomer(c: CustomerModel): void {
    this.store.setSelectedCustomer(c);
    this.customerSearch = c.fullName;
    this.showCustomerDropdown = false;
    this.showCreateCustomer = false;

    if (this.appSettings.kycEnabled && !c.isKycVerified) {
      this.store.setKycWarning('Customer KYC not verified. Proceed with caution.');
    } else {
      this.store.setKycWarning('');
    }

    if (c.dateOfBirth) {
      const age = Math.floor((Date.now() - new Date(c.dateOfBirth).getTime()) / 31557600000);
      if (age < (this.appSettings.minimumAge ?? 18)) {
        this.store.setDobWarning(`Customer is under ${this.appSettings.minimumAge ?? 18} years old.`);
      } else {
        this.store.setDobWarning('');
      }
    }

    this.checkMissingCustomerFields(c);
    this.api.getAgentReceiversByCustomer(c.id).subscribe((r: any) => {
      if (r.success) {
        this.receivers = r.data ?? [];
        this.filteredReceivers = this.receivers;
      }
    });
  }

  clearSelectedCustomer(): void {
    this.store.setSelectedCustomer(null);
    this.store.setSelectedReceiver(null);
    this.customerSearch = '';
    this.receivers = [];
    this.filteredReceivers = [];
    this.showMissingCustomerForm = false;
  }

  toggleCreateCustomer(): void {
    this.showCreateCustomer = !this.showCreateCustomer;
    if (this.showCreateCustomer) {
      this.customerForm.reset();
      this.customerFormErrors = {};
    }
  }

  // ── Missing fields logic ──────────────────────────────────────────────────
  private checkMissingCustomerFields(c: CustomerModel): void {
    if (this.store.apiType() !== 'thirdParty') {
      this.store.setMissingCustomerFields([]);
      return;
    }
    const data = c as any;
    const missing = this.store.customerMappings().filter(m => m.isRequired && !data[m.ourColumn]);
    this.store.setMissingCustomerFields(missing);
    if (missing.length > 0) {
      this.missingCustomerData = {};
      this.showMissingCustomerForm = true;
    }
  }

  private checkMissingReceiverFields(r: ReceiverModel): void {
    if (this.store.apiType() !== 'thirdParty') {
      this.store.setMissingReceiverFields([]);
      return;
    }
    const data = r as any;
    const missing = this.store.receiverMappings().filter(m => m.isRequired && !data[m.ourColumn]);
    this.store.setMissingReceiverFields(missing);
    if (missing.length > 0) {
      this.missingReceiverData = {};
      this.showMissingReceiverForm = true;
    }
  }

  saveMissingCustomerFields(): void {
    const customer = this.store.selectedCustomer();
    if (!customer) return;
    const missing = this.store.missingCustomerFields();
    if (!missing.every(m => !!this.missingCustomerData[m.ourColumn])) {
      this.notify.error('Please fill all required fields.');
      return;
    }
    this.savingMissingCustomer = true;
    this.api.updateAgentCustomer(customer.id, this.missingCustomerData).subscribe({
      next: (r: any) => {
        this.savingMissingCustomer = false;
        if (r.success) {
          this.store.setSelectedCustomer(r.data);
          this.store.setMissingCustomerFields([]);
          this.showMissingCustomerForm = false;
          this.notify.success('Customer profile updated.');
        } else {
          this.notify.error(r.message ?? 'Update failed.');
        }
      },
      error: () => { this.savingMissingCustomer = false; this.notify.error('Update failed.'); },
    });
  }

  saveMissingReceiverFields(): void {
    const receiver = this.store.selectedReceiver();
    if (!receiver) return;
    const missing = this.store.missingReceiverFields();
    if (!missing.every(m => !!this.missingReceiverData[m.ourColumn])) {
      this.notify.error('Please fill all required fields.');
      return;
    }
    this.savingMissingReceiver = true;
    this.api.updateAgentReceiver(receiver.id, this.missingReceiverData).subscribe({
      next: (r: any) => {
        this.savingMissingReceiver = false;
        if (r.success) {
          this.store.setSelectedReceiver(r.data);
          this.store.setMissingReceiverFields([]);
          this.showMissingReceiverForm = false;
          this.notify.success('Receiver profile updated.');
        } else {
          this.notify.error(r.message ?? 'Update failed.');
        }
      },
      error: () => { this.savingMissingReceiver = false; this.notify.error('Update failed.'); },
    });
  }

  // ── Create customer ───────────────────────────────────────────────────────
  private validateCustomerForm(): boolean {
    const v = this.customerForm.value;
    let schema: z.ZodTypeAny = CustomerFormSchema;
    if (this.store.apiType() === 'thirdParty') {
      const shape: Record<string, z.ZodTypeAny> = {};
      this.store.customerMappings().forEach(m => {
        shape[m.ourColumn] = m.isRequired ? z.string().min(1, `${m.ourColumn} is required`) : z.string().optional();
      });
      schema = z.object(shape);
    }
    const result = schema.safeParse(v);
    if (!result.success) {
      this.customerFormErrors = {};
      (result.error?.issues ?? []).forEach(e => {
        if (e.path[0]) this.customerFormErrors[e.path[0] as string] = e.message;
      });
      return false;
    }
    this.customerFormErrors = {};
    return true;
  }

  saveNewCustomer(): void {
    if (!this.validateCustomerForm()) return;
    this.savingCustomer = true;
    const v = this.customerForm.value;
    const dto: any = {
      fullName: v.fullName, phone: v.phone, email: v.email || null,
      dateOfBirth: v.dateOfBirth, gender: v.gender || null,
      nationality: v.nationality, country: v.country,
      city: v.city || null, state: v.state || null,
      postalCode: v.postalCode || null, address: v.address || null,
      idDocumentType: v.idDocumentType, idDocumentNumber: v.idDocumentNumber,
      docIssueDate: v.docIssueDate, docExpiryDate: v.docExpiryDate,
      docIssuingCountry: v.docIssuingCountry || null,
    };
    this.api.createAgentCustomer(dto).subscribe({
      next: (r: any) => {
        this.savingCustomer = false;
        if (r.success && r.data) {
          this.customers = [r.data, ...this.customers];
          this.filteredCustomers = this.customers;
          this.selectCustomer(r.data);
          this.showCreateCustomer = false;
          if ((this.customerFrontFile || this.customerBackFile) && !this.appSettings.skipDocumentUpload) {
            const fd = new FormData();
            fd.append('customerId', String(r.data.id));
            fd.append('documentType', v.idDocumentType ?? '');
            if (this.customerFrontFile) fd.append('frontImage', this.customerFrontFile);
            if (this.customerBackFile) fd.append('backImage', this.customerBackFile);
            this.api.uploadDocument(fd).subscribe();
          }
        } else {
          this.notify.error(r.message ?? 'Failed to create customer.');
        }
      },
      error: () => { this.savingCustomer = false; this.notify.error('Failed to create customer.'); },
    });
  }

  onFrontFileChange(e: Event): void {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (!f) return;
    this.customerFrontFile = f;
    const rd = new FileReader();
    rd.onload = ev => this.customerFrontPreview = ev.target?.result as string;
    rd.readAsDataURL(f);
  }

  onBackFileChange(e: Event): void {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (!f) return;
    this.customerBackFile = f;
    const rd = new FileReader();
    rd.onload = ev => this.customerBackPreview = ev.target?.result as string;
    rd.readAsDataURL(f);
  }

  proceedToReceiver(): void {
    if (!this.store.canProceedCustomer()) return;
    this.goToSubStep('receiver', 'forward');
  }

  // ── Receiver search/select ────────────────────────────────────────────────
  filterReceivers(): void {
    const q = this.receiverSearch.toLowerCase();
    this.filteredReceivers = q
      ? this.receivers.filter(r => r.fullName.toLowerCase().includes(q) || (r.phone ?? '').toLowerCase().includes(q))
      : this.receivers;
  }

  selectReceiver(r: ReceiverModel): void {
    this.store.setSelectedReceiver(r);
    this.showCreateReceiver = false;
    this.checkMissingReceiverFields(r);
    if (r.country) this.receiverCountry = r.country;
    this.savedPayoutDetails = [];
    this.selectedSavedDetail = null;
    this.showPayoutSwapPanel = false;
    this.showNewAccountForm = false;
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
    this.loadReceiverPaymentDetail();
  }

  clearSelectedReceiver(): void {
    this.store.setSelectedReceiver(null);
    this.showMissingReceiverForm = false;
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
    this.savedPayoutDetails = [];
    this.selectedSavedDetail = null;
    this.showPayoutSwapPanel = false;
    this.showNewAccountForm = false;
  }

  toggleCreateReceiver(): void {
    this.showCreateReceiver = !this.showCreateReceiver;
    if (this.showCreateReceiver) {
      this.receiverForm.reset();
      this.receiverFormErrors = {};
    }
  }

  private validateReceiverForm(): boolean {
    const v = this.receiverForm.value;
    let schema: z.ZodTypeAny = ReceiverFormSchema;
    if (this.store.apiType() === 'thirdParty') {
      const shape: Record<string, z.ZodTypeAny> = {};
      this.store.receiverMappings().forEach(m => {
        shape[m.ourColumn] = m.isRequired ? z.string().min(1, `${m.ourColumn} is required`) : z.string().optional();
      });
      schema = z.object(shape);
    }
    const result = schema.safeParse(v);
    if (!result.success) {
      this.receiverFormErrors = {};
      (result.error?.issues ?? []).forEach(e => {
        if (e.path[0]) this.receiverFormErrors[e.path[0] as string] = e.message;
      });
      return false;
    }
    this.receiverFormErrors = {};
    return true;
  }

  saveNewReceiver(): void {
    if (!this.validateReceiverForm()) return;
    this.savingReceiver = true;
    const customer = this.store.selectedCustomer();
    if (!customer) { this.savingReceiver = false; return; }
    const v = this.receiverForm.value;
    const dto: any = {
      customerId: customer.id,
      fullName: v.fullName, phone: v.phone, email: v.email || null,
      country: v.country || null, city: v.city || null,
      bankName: v.bankName || null, bankCode: v.bankCode || null,
      accountNumber: v.accountNumber || null, branchName: v.branchName || null,
      branchCode: v.branchCode || null, bankId: v.bankId || null,
      branchId: v.branchId || null, relationship: v.relationship || null,
    };
    this.api.createAgentReceiver(dto).subscribe({
      next: (r: any) => {
        this.savingReceiver = false;
        if (r.success && r.data) {
          this.receivers = [r.data, ...this.receivers];
          this.filteredReceivers = this.receivers;
          this.selectReceiver(r.data);
          this.showCreateReceiver = false;
        } else {
          this.notify.error(r.message ?? 'Failed to create receiver.');
        }
      },
      error: () => { this.savingReceiver = false; this.notify.error('Failed to create receiver.'); },
    });
  }

  // ── Bank / branch ─────────────────────────────────────────────────────────
  onBankSelected(bank: AgentBankModel): void {
    this.receiverForm.patchValue({ bankName: bank.bankName, bankCode: bank.bankCode ?? '', bankId: bank.id, branchName: '', branchCode: '', branchId: null, accountNumber: '' });
    this.allBranches = bank.branches ?? [];
    this.filteredBranches = bank.branches ?? [];
    if (bank.branches?.length) {
      this.branchBankName = bank.bankName;
      this.branchContext = 'form';
      this.showBranchPopup = true;
    }
  }

  onLocationSelected(location: AgentLocationModel): void {
    this.receiverForm.patchValue({ bankName: location.locationName, bankCode: location.locationCode ?? '', bankId: location.id, accountNumber: '' });
  }

  onCashLocationSelected(bank: AgentBankModel): void {
    this.receiverForm.patchValue({ bankName: bank.bankName, bankCode: bank.bankCode ?? '', bankId: bank.id });
  }

  private loadReceiverPaymentDetail(): void {
    const rv = this.store.selectedReceiver();
    if (!rv) return;
    const methodType = this.isCashTransfer() ? 'cash' : this.isWalletTransfer() ? 'wallet' : 'bank';
    this.api.getReceiverPaymentDetails(rv.id, methodType).subscribe((r: any) => {
      const list: any[] = r?.data ?? [];
      this.savedPayoutDetails = list;
      if (list.length > 0) {
        this.selectedSavedDetail = list[0];
        this.showNewAccountForm = false;
      } else {
        this.selectedSavedDetail = null;
        this.showNewAccountForm = true;
      }
    });
  }

  selectSavedDetail(d: any): void {
    this.selectedSavedDetail = d;
    this.showPayoutSwapPanel = false;
    this.showNewAccountForm = false;
  }

  useNewPayoutDetail(): void {
    this.selectedSavedDetail = null;
    this.showPayoutSwapPanel = false;
    this.showNewAccountForm = true;
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
  }

  togglePayoutSwapPanel(): void {
    this.showPayoutSwapPanel = !this.showPayoutSwapPanel;
  }

  onBankSelectedTxn(bank: AgentBankModel): void {
    this.transactionPayoutDetails = {
      bankName: bank.bankName, bankCode: bank.bankCode ?? null, bankId: bank.id,
      accountNumber: this.transactionPayoutDetails.accountNumber,
      branchName: null, branchCode: null, branchId: null,
    };
    this.allBranches = bank.branches ?? [];
    this.filteredBranches = bank.branches ?? [];
    if (bank.branches?.length) { this.branchBankName = bank.bankName; this.branchContext = 'txn'; this.showBranchPopup = true; }
  }

  onCashLocationSelectedTxn(bank: AgentBankModel): void {
    this.transactionPayoutDetails = {
      bankName: bank.bankName, bankCode: bank.bankCode ?? null, bankId: bank.id,
      accountNumber: null, branchName: null, branchCode: null, branchId: null,
    };
  }

  onLocationSelectedTxn(loc: AgentLocationModel): void {
    this.transactionPayoutDetails = {
      bankName: loc.locationName, bankCode: loc.locationCode ?? null, bankId: loc.id,
      accountNumber: this.transactionPayoutDetails.accountNumber,
      branchName: null, branchCode: null, branchId: null,
    };
  }

  selectBranchTxn(branch: any): void {
    this.transactionPayoutDetails = { ...this.transactionPayoutDetails, branchName: branch.branchName, branchCode: branch.branchCode ?? null, branchId: branch.id };
    this.showBranchPopup = false;
  }

  filterBranches(): void {
    const q = this.branchSearch.toLowerCase();
    this.filteredBranches = q
      ? this.allBranches.filter(b => b.branchName.toLowerCase().includes(q) || (b.branchCode ?? '').toLowerCase().includes(q))
      : this.allBranches;
  }

  selectBranch(branch: any): void {
    this.receiverForm.patchValue({ branchName: branch.branchName, branchCode: branch.branchCode ?? '', branchId: branch.id });
    this.showBranchPopup = false;
  }

  proceedFromCustomerReceiver(): void {
    if (!this.store.canProceedStep1()) return;
    const sd = this.selectedSavedDetail;
    const pd = this.transactionPayoutDetails;
    if (this.isBankTransfer()) {
      const acctNum = sd?.accountNumber ?? pd.accountNumber;
      if (!acctNum) { this.notify.error('Account number is required for bank transfer.'); return; }
    }
    if (this.isWalletTransfer()) {
      const acctNum = sd?.accountNumber ?? pd.accountNumber;
      if (!acctNum) { this.notify.error('Wallet number is required for wallet transfer.'); return; }
    }
    if (this.isCashTransfer()) {
      const loc = sd?.bankName ?? pd.bankName;
      if (!loc) { this.notify.error('Payout location is required for cash payment.'); return; }
    }
    this.goToStep(2, 'forward');
  }

  proceedFromCompliance(): void {
    this.goToStep(3, 'forward');
  }

  // ── Submit / PIN ──────────────────────────────────────────────────────────
  submitTransaction(): void {
    const partner = this.store.selectedPartner();
    if (!partner) return;

    this.lockingRate = true;
    this.api.createRateQuote(
      this.senderCurrency,
      this.receiverCurrency,
      partner.payoutAgentId,
      this.receiverCountry
    ).subscribe({
      next: (r: any) => {
        this.lockingRate = false;
        if (!r.success) {
          this.notify.error(r.message ?? 'Failed to lock exchange rate. Please try again.');
          return;
        }
        this.currentQuoteId = r.data?.quoteId ?? null;
        this.pinInput = '';
        this.pinConfirm = '';
        this.pinError = '';
        this.api.getTransactionPinStatus().subscribe((pr: any) => {
          this.pinMode = pr?.data === true ? 'verify' : 'set';
          this.showPinDialog = true;
        });
      },
      error: () => {
        this.lockingRate = false;
        this.notify.error('Failed to lock exchange rate. Please try again.');
      },
    });
  }

  onPinSubmit(): void {
    this.pinError = '';
    if (!/^\d{4,6}$/.test(this.pinInput)) {
      this.pinError = 'PIN must be 4–6 digits.';
      return;
    }
    if (this.pinMode === 'set') {
      if (this.pinInput !== this.pinConfirm) { this.pinError = 'PINs do not match.'; return; }
      this.api.setTransactionPin(this.pinInput).subscribe((r: any) => {
        if (r?.success) { this.showPinDialog = false; this.executeSendTransaction(); }
        else this.pinError = r?.message ?? 'Failed to set PIN.';
      });
    } else {
      this.api.verifyTransactionPin(this.pinInput).subscribe((r: any) => {
        if (r?.success) { this.showPinDialog = false; this.executeSendTransaction(); }
        else this.pinError = r?.message ?? 'Incorrect PIN.';
      });
    }
  }

  private executeSendTransaction(): void {
    this.store.setSubmitting(true);
    const c = this.store.selectedCustomer()!;
    const rv = this.store.selectedReceiver()!;
    const partner = this.store.selectedPartner()!;
    const sd = this.selectedSavedDetail;
    const pd = this.transactionPayoutDetails;
    const dto: any = {
      senderName: c.fullName, senderPhone: c.phone, senderEmail: c.email,
      senderIdType: (c as any).idDocumentType, senderIdNumber: (c as any).idDocumentNumber, senderCountry: c.country,
      receiverName: rv.fullName, receiverPhone: rv.phone, receiverEmail: rv.email, receiverCountry: rv.country,
      receiverBankName:      sd?.bankName      ?? pd.bankName      ?? rv.bankName,
      receiverBankCode:      sd?.bankCode      ?? pd.bankCode      ?? rv.bankCode,
      receiverAccountNumber: sd?.accountNumber ?? pd.accountNumber ?? rv.accountNumber,
      receiverBranchName:    sd?.branchName    ?? pd.branchName    ?? rv.branchName,
      receiverBranchCode:    sd?.branchCode    ?? pd.branchCode    ?? rv.branchCode,
      receiverBankId:        sd?.bankId        ?? pd.bankId        ?? rv.bankId,
      receiverBranchId:      sd?.branchId      ?? pd.branchId      ?? rv.branchId,
      sendAmount: this.sendAmountInput, sendCurrency: this.senderCurrency, receiveCurrency: this.receiverCurrency,
      paymentMethod: this.resolvePaymentMethodEnum(this.resolvedPaymentMethodName()),
      paymentMethodName: this.paymentMethods.find(m => m.id === this.selectedPaymentMethodId)?.name ?? '',
      payoutMethod: this.resolvePaymentMethodEnum(this.paymentMethods.find(m => m.id === this.selectedPayoutModeId)?.name ?? ''),
      payoutMethodName: this.paymentMethods.find(m => m.id === this.selectedPayoutModeId)?.name ?? '',
      payoutPartnerId: partner.payoutAgentId,
      customerId: c.id, receiverId: rv.id, purpose: this.purpose, sourceOfFunds: this.sourceOfFunds, relationship: this.relationship,
      quoteId: this.currentQuoteId,
    };
    this.api.sendTransaction(dto).subscribe({
      next: (r: any) => {
        this.store.setSubmitting(false);
        if (r.success) this.store.setSuccessResult(r.data);
        else this.notify.error(r.message ?? 'Transaction failed.');
      },
      error: () => { this.store.setSubmitting(false); this.notify.error('Transaction submission failed.'); },
    });
  }

  // ── Receipt ───────────────────────────────────────────────────────────────
  downloadReceipt(): void {
    const result = this.store.successResult();
    if (!result) return;
    const prefix = this.appSettings.txnNumberPrefix ?? 'TXN';
    const html = `<html><head><style>body{font-family:sans-serif;padding:32px}h2{color:#1e40af}.row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #e5e7eb}.label{color:#6b7280}.value{font-weight:600}</style></head><body>
      <h2>${this.appSettings.companyName ?? 'Remittance'} — Transaction Receipt</h2>
      <div class="row"><span class="label">Reference</span><span class="value">${prefix}${result.referenceNumber}</span></div>
      <div class="row"><span class="label">Sender</span><span class="value">${result.senderName}</span></div>
      <div class="row"><span class="label">Receiver</span><span class="value">${result.receiverName}</span></div>
      <div class="row"><span class="label">Send Amount</span><span class="value">${result.sendAmount} ${result.sendCurrency}</span></div>
      <div class="row"><span class="label">Receive Amount</span><span class="value">${result.receiveAmount} ${result.receiveCurrency}</span></div>
      <div class="row"><span class="label">Exchange Rate</span><span class="value">${result.exchangeRateApplied}</span></div>
      <div class="row"><span class="label">Status</span><span class="value">${result.status}</span></div>
      <div class="row"><span class="label">Date</span><span class="value">${new Date(result.createdAt).toLocaleString()}</span></div>
    </body></html>`;
    const w = window.open('', '_blank');
    if (w) { w.document.write(html); w.document.close(); w.print(); }
  }

  startNewTransaction(): void {
    this.store.reset();
    this.sendAmountInput = 0; this.receiveAmount = 0; this.exchangeRate = 0;
    this.serviceCharge = 0; this.totalPayable = 0;
    this.purpose = ''; this.sourceOfFunds = ''; this.relationship = '';
    this.customerSearch = ''; this.receiverSearch = '';
    this.customers = []; this.receivers = [];
    this.complianceViolations = [];
    this.currentQuoteId = null;
    this.loadInitialData();
    this.goToStep(0, 'backward');
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  getInitials(name: string): string {
    return (name ?? '').split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }

  get balancePercent(): number {
    if (!this.agentBalance?.creditLimit) return 0;
    return Math.min(100, ((this.agentBalance.creditLimit - this.agentBalance.availableBalance) / this.agentBalance.creditLimit) * 100);
  }

  isFieldShownCustomer(col: string): boolean {
    if (this.store.apiType() !== 'thirdParty') return true;
    return this.store.customerMappings().some(m => m.ourColumn === col);
  }

  isFieldShownReceiver(col: string): boolean {
    if (this.store.apiType() !== 'thirdParty') return true;
    return this.store.receiverMappings().some(m => m.ourColumn === col);
  }

  private resolvePaymentMethodEnum(name: string): number {
    const n = name.toLowerCase();
    if (n.includes('bank')) return 1;
    if (n.includes('card')) return 2;
    if (n.includes('wallet') || n.includes('mobile')) return 3;
    return 0;
  }
}
