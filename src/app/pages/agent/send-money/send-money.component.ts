import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { z } from 'zod';
import { NotificationService } from '../../../core/services/notification.service';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { SendTransactionModel, TransactionResult, CalculateTransferRequest, ComplianceViolation } from '../../../core/models/transaction.models';
import { CountryInfo } from '../../../core/models/common.models';
import { AgentModel, PaymentMethodModel, AgentBankModel, AgentBankBranchModel, AgentLocationModel } from '../../../core/models/agent.models';
import { CustomerModel, ReceiverModel } from '../../../core/models/customer.models';
import { PaymentCorridorModel, CorridorPayoutPartnerModel } from '../../../core/models/routing.models';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SendMoneyStore } from './send-money.store';

// ---------------------------------------------------------------------------
// Zod Schemas
// ---------------------------------------------------------------------------
export const CustomerFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').max(100, 'Max 100 characters'),
  phone: z.string().min(1, 'Phone is required').max(20, 'Max 20 characters'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  dateOfBirth: z.string().optional().or(z.literal('')),
  gender: z.string().optional().or(z.literal('')),
  nationality: z.string().min(1, 'Nationality is required'),
  country: z.string().min(1, 'Country is required'),
  city: z.string().optional().or(z.literal('')),
  state: z.string().optional().or(z.literal('')),
  postalCode: z.string().optional().or(z.literal('')),
  address: z.string().optional().or(z.literal('')),
  idDocumentType: z.string().min(1, 'Document type is required'),
  idDocumentNumber: z.string().min(1, 'Document number is required'),
  docIssueDate: z.string().optional().or(z.literal('')),
  docExpiryDate: z.string().optional().or(z.literal('')),
  docIssuingCountry: z.string().optional().or(z.literal('')),
});

export const ReceiverFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').max(100, 'Max 100 characters'),
  phone: z.string().min(1, 'Phone is required').max(20, 'Max 20 characters'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  country: z.string().optional().or(z.literal('')),
  city: z.string().optional().or(z.literal('')),
  bankName: z.string().optional().or(z.literal('')),
  bankCode: z.string().optional().or(z.literal('')),
  accountNumber: z.string().optional().or(z.literal('')),
  branchName: z.string().optional().or(z.literal('')),
  branchCode: z.string().optional().or(z.literal('')),
  bankId: z.number().nullable().optional(),
  branchId: z.number().nullable().optional(),
  relationship: z.string().optional().or(z.literal('')),
});

export type CustomerFormValue = z.infer<typeof CustomerFormSchema>;
export type ReceiverFormValue = z.infer<typeof ReceiverFormSchema>;

@Component({
  selector: 'app-send-money',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DecimalPipe,
  ],
  providers: [SendMoneyStore],
  templateUrl: './send-money.component.html',
  styleUrl: './send-money.component.scss',
})
export class SendMoneyComponent implements OnInit {
  readonly store = inject(SendMoneyStore);

  // Step tracking (kept as local properties that sync with store)
  get step(): number { return this.store.currentStep(); }
  set step(v: number) { this.store.setStep(v); }

  submitting = false;
  successResult: TransactionResult | null = null;

  // Transaction PIN
  showPinDialog = false;
  pinMode: 'set' | 'verify' = 'verify';
  pinInput = '';
  pinConfirm = '';
  pinError = '';
  pinLoading = false;

  // Agent profile & balance
  agentProfile: AgentModel | null = null;
  agentBalanceZero = false;
  balanceWarning = '';
  agentAvailableBalance: number | null = null;

  // KYC / DOB warnings
  kycWarning = '';
  dobWarning = '';

  // Reference data
  countries: CountryInfo[] = [];
  paymentMethods: PaymentMethodModel[] = [];
  allCorridors: PaymentCorridorModel[] = [];

  // Step 1: Customer
  customers: CustomerModel[] = [];
  filteredCustomers: CustomerModel[] = [];
  customerSearch = '';
  selectedCustomerId: number | null = null;
  selectedCustomer: CustomerModel | null = null;
  showCreateCustomer = false;
  customerFormError = '';
  savingCustomer = false;

  // Customer Reactive Form
  // Document upload
  frontImageFile: File | null = null;
  backImageFile: File | null = null;
  frontImagePreview: string | null = null;
  backImagePreview: string | null = null;

  customerForm = new FormGroup({
    fullName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl(''),
    gender: new FormControl(''),
    nationality: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl(''),
    address: new FormControl(''),
    idDocumentType: new FormControl(''),
    idDocumentNumber: new FormControl(''),
    docIssueDate: new FormControl(''),
    docExpiryDate: new FormControl(''),
    docIssuingCountry: new FormControl(''),
  });
  customerFormErrors: Record<string, string> = {};

  // Step 2: Amount & Calculation
  sendAmount = 0;
  senderCountry = '';
  senderCurrency = '';
  receiverCountry = '';
  receiverCurrency = '';
  selectedPaymentMethodId: number | null = null;

  // Route matching
  matchedCorridor: PaymentCorridorModel | null = null;
  matchedPartners: CorridorPayoutPartnerModel[] = [];
  selectedPartnerId: number | null = null;
  selectedPartner: CorridorPayoutPartnerModel | null = null;
  availablePayoutModes: PaymentMethodModel[] = [];
  selectedPayoutModeId: number | null = null;
  routeError = '';

  // Calculation results
  exchangeRate = 0;
  serviceCharge = 0;
  totalPayable = 0;
  receiveAmount = 0;
  loadingCalc = false;
  calculationDone = false;
  calcError = '';
  complianceViolations: ComplianceViolation[] = [];
  complianceBlocked = false;

  // Step 3: Receiver
  receivers: ReceiverModel[] = [];
  filteredReceivers: ReceiverModel[] = [];
  receiverSearch = '';
  selectedReceiverId: number | null = null;
  selectedReceiver: ReceiverModel | null = null;
  showCreateReceiver = false;
  receiverFormError = '';
  savingReceiver = false;

  // Receiver Reactive Form
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

  // Payout location data
  payoutBanks: AgentBankModel[] = [];
  payoutLocations: AgentLocationModel[] = [];
  selectedBankId: number | null = null;
  selectedLocationId: number | null = null;

  // Branch popup
  showBranchPopup = false;
  branchBank: AgentBankModel | null = null;
  branchList: AgentBankBranchModel[] = [];
  filteredBranches: AgentBankBranchModel[] = [];
  branchSearch = '';
  selectedBranch: AgentBankBranchModel | null = null;

  idTypes: string[] = [];

  private calcTrigger$ = new Subject<void>();

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private router: Router,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadReferenceData();

    this.calcTrigger$.pipe(debounceTime(400)).subscribe(() => {
      this.calculateViaBackend();
    });
  }

  // ---------------------------------------------------------------------------
  // Zod Validation Helpers
  // ---------------------------------------------------------------------------

  private validateCustomerForm(): boolean {
    const result = CustomerFormSchema.safeParse(this.customerForm.getRawValue());
    this.customerFormErrors = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (!this.customerFormErrors[field]) {
          this.customerFormErrors[field] = issue.message;
        }
      }
      return false;
    }
    return true;
  }

  private validateReceiverForm(): boolean {
    const result = ReceiverFormSchema.safeParse(this.receiverForm.getRawValue());
    this.receiverFormErrors = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (!this.receiverFormErrors[field]) {
          this.receiverFormErrors[field] = issue.message;
        }
      }
      return false;
    }
    return true;
  }

  // ---------------------------------------------------------------------------
  // Reference Data
  // ---------------------------------------------------------------------------

  private loadReferenceData(): void {
    this.api.getAgentProfile().subscribe(r => {
      if (r?.success && r.data) {
        this.agentProfile = r.data;
        this.senderCountry = r.data.country;
        if (r.data.currency) {
          this.senderCurrency = r.data.currency;
        }
        const available = r.data.creditLimit - r.data.currentBalance;
        if (available <= 0) {
          this.agentBalanceZero = true;
          this.store.setAgentBalanceZero(true);
          this.notify.error('Insufficient balance. Your available balance is 0. Please contact admin to top up.');
        }
      }
    });
    this.api.getCountries().subscribe(r => {
      if (r?.success && r.data) this.countries = r.data;
    });
    this.api.getAgentPaymentMethods().subscribe(r => {
      if (r?.success && r.data) this.paymentMethods = r.data.filter(m => m.isActive);
    });
    this.api.getAgentCorridors().subscribe(r => {
      if (r?.success && r.data) this.allCorridors = r.data.filter(c => c.isActive);
    });
    this.api.getAgentCustomers().subscribe(r => {
      if (r?.success && r.data) {
        this.customers = r.data;
        this.filteredCustomers = [...r.data];
      }
    });
    this.api.getReferenceSetupFields('IdType').subscribe(r => {
      if (r?.success && r.data) {
        this.idTypes = r.data.filter((d: any) => d.isActive).map((d: any) => d.name);
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Step 1: Customer Selection/Creation
  // ---------------------------------------------------------------------------

  filterCustomers(): void {
    const s = this.customerSearch.toLowerCase();
    this.filteredCustomers = !s
      ? [...this.customers]
      : this.customers.filter(c =>
          c.fullName.toLowerCase().includes(s) ||
          (c.email || '').toLowerCase().includes(s) ||
          (c.phone || '').toLowerCase().includes(s)
        );
  }

  selectCustomer(customer: CustomerModel): void {
    this.selectedCustomerId = customer.id;
    this.selectedCustomer = customer;
    this.store.setSelectedCustomer(customer);
    this.kycWarning = '';
    this.dobWarning = '';

    if (!customer.isKycVerified) {
      this.kycWarning = 'This customer has not completed KYC verification. Transaction cannot proceed.';
    }

    if (customer.dateOfBirth) {
      const dob = new Date(customer.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      if (age < 16) {
        this.dobWarning = `Customer is ${age} years old. Must be at least 16 years old to send a transaction.`;
      }
    }

    this.store.setKycWarning(this.kycWarning);
    this.store.setDobWarning(this.dobWarning);
  }

  clearSelectedCustomer(): void {
    this.selectedCustomerId = null;
    this.selectedCustomer = null;
    this.store.setSelectedCustomer(null);
    this.kycWarning = '';
    this.dobWarning = '';
    this.store.setKycWarning('');
    this.store.setDobWarning('');
  }

  toggleCreateCustomer(): void {
    this.showCreateCustomer = !this.showCreateCustomer;
    this.customerFormError = '';
    this.customerFormErrors = {};
    if (this.showCreateCustomer) {
      this.customerForm.reset();
      this.frontImageFile = null;
      this.backImageFile = null;
      this.frontImagePreview = null;
      this.backImagePreview = null;
    }
  }

  onFrontImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.frontImageFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => this.frontImagePreview = e.target?.result as string;
      reader.readAsDataURL(this.frontImageFile);
    }
  }

  onBackImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.backImageFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => this.backImagePreview = e.target?.result as string;
      reader.readAsDataURL(this.backImageFile);
    }
  }

  private uploadDocumentsForCustomer(customerId: number): void {
    const formValue = this.customerForm.getRawValue();
    if (!this.frontImageFile && !this.backImageFile) return;
    if (!formValue.idDocumentType || !formValue.idDocumentNumber) return;

    const formData = new FormData();
    formData.append('customerId', customerId.toString());
    formData.append('documentType', formValue.idDocumentType);
    formData.append('documentNumber', formValue.idDocumentNumber);
    formData.append('requiredSides', this.backImageFile ? '2' : '1');
    if (formValue.docIssuingCountry) {
      formData.append('issuingCountry', formValue.docIssuingCountry);
    }
    if (this.frontImageFile) {
      formData.append('frontImage', this.frontImageFile);
    }
    if (this.backImageFile) {
      formData.append('backImage', this.backImageFile);
    }

    this.api.uploadDocument(formData).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success('Document uploaded successfully.');
        }
      },
      error: () => {
        this.notify.error('Customer created but document upload failed. You can upload later from admin.');
      },
    });
  }

  saveNewCustomer(): void {
    this.customerFormError = '';
    if (!this.validateCustomerForm()) {
      this.customerFormError = 'Please fix the highlighted fields.';
      return;
    }
    if (!this.frontImageFile) {
      this.customerFormError = 'Please upload at least the front image of the ID document.';
      return;
    }

    this.savingCustomer = true;
    const formValue = this.customerForm.getRawValue();
    const newCustomer = {
      fullName: formValue.fullName || '',
      email: formValue.email || '',
      phone: formValue.phone || '',
      dateOfBirth: formValue.dateOfBirth || '',
      gender: formValue.gender || '',
      nationality: formValue.nationality || '',
      country: formValue.country || '',
      city: formValue.city || '',
      state: formValue.state || '',
      postalCode: formValue.postalCode || '',
      address: formValue.address || '',
      idDocumentType: formValue.idDocumentType || '',
      idDocumentNumber: formValue.idDocumentNumber || '',
      docIssueDate: formValue.docIssueDate || '',
      docExpiryDate: formValue.docExpiryDate || '',
      docIssuingCountry: formValue.docIssuingCountry || '',
    };

    this.api.createAgentCustomer(newCustomer).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.customers.push(res.data);
          this.filteredCustomers = [...this.customers];
          this.selectCustomer(res.data);
          this.uploadDocumentsForCustomer(res.data.id);
          this.showCreateCustomer = false;
          this.notify.success('Customer created!');
        } else {
          this.customerFormError = res?.message || 'Failed to create customer.';
        }
        this.savingCustomer = false;
      },
      error: () => {
        this.customerFormError = 'Server error.';
        this.savingCustomer = false;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Step 2: Amount Calculation (backend-driven)
  // ---------------------------------------------------------------------------

  onReceiverCountryChange(): void {
    const country = this.countries.find(c => c.name === this.receiverCountry);
    if (country) {
      this.receiverCurrency = country.currency;
    } else {
      this.receiverCurrency = '';
    }
    this.findRoute();
    this.triggerCalculation();
  }

  onPaymentMethodChange(): void {
    this.store.setSelectedPaymentMethodId(this.selectedPaymentMethodId);
    this.findRoute();
    this.triggerCalculation();
  }

  onAmountChange(): void {
    this.store.setSendAmount(this.sendAmount);
    this.triggerCalculation();
  }

  private triggerCalculation(): void {
    this.calculationDone = false;
    this.store.setCalculationDone(false);
    this.calcError = '';
    this.complianceViolations = [];
    this.complianceBlocked = false;
    this.store.setComplianceBlocked(false);
    this.balanceWarning = '';
    this.store.setBalanceWarning('');
    this.agentAvailableBalance = null;
    if (this.canCalculate()) {
      this.calcTrigger$.next();
    } else {
      this.exchangeRate = 0;
      this.receiveAmount = 0;
      this.serviceCharge = 0;
      this.totalPayable = 0;
    }
  }

  private canCalculate(): boolean {
    return !!(
      this.senderCountry &&
      this.senderCurrency &&
      this.receiverCountry &&
      this.receiverCurrency &&
      this.sendAmount > 0 &&
      this.selectedPartner
    );
  }

  private calculateViaBackend(): void {
    if (!this.canCalculate()) return;

    this.loadingCalc = true;
    this.calcError = '';

    const req: CalculateTransferRequest = {
      sendAmount: this.sendAmount,
      sendCurrency: this.senderCurrency,
      receiveCurrency: this.receiverCurrency,
      senderCountry: this.senderCountry,
      receiverCountry: this.receiverCountry,
      paymentMethodId: this.selectedPaymentMethodId || undefined,
      paymentMethodName: this.getPayoutModeName() || undefined,
      payoutPartnerId: this.selectedPartner?.payoutAgentId || undefined,
      sendingAgentId: this.agentProfile?.id || undefined,
      senderName: this.selectedCustomer?.fullName || undefined,
      customerId: this.selectedCustomerId || undefined,
    };

    this.api.calculateTransfer(req).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.exchangeRate = res.data.exchangeRate;
          this.receiveAmount = res.data.receiveAmount;
          this.serviceCharge = res.data.serviceCharge;
          this.totalPayable = res.data.totalPayable;
          this.complianceViolations = res.data.complianceViolations || [];
          this.complianceBlocked = this.complianceViolations.some(v => v.action === 'Block');
          this.agentAvailableBalance = res.data.agentAvailableBalance ?? null;
          this.balanceWarning = res.data.balanceWarning || '';
          this.calculationDone = true;
          this.calcError = '';
          // Sync to store
          this.store.setCalculationDone(true);
          this.store.setComplianceBlocked(this.complianceBlocked);
          this.store.setBalanceWarning(this.balanceWarning);
        } else {
          this.calcError = res?.message || 'Calculation failed.';
          this.calculationDone = false;
          this.store.setCalculationDone(false);
        }
        this.loadingCalc = false;
      },
      error: err => {
        this.calcError = err?.error?.message || 'Failed to calculate. Please try again.';
        this.calculationDone = false;
        this.store.setCalculationDone(false);
        this.loadingCalc = false;
      },
    });
  }

  private findRoute(): void {
    this.matchedCorridor = null;
    this.matchedPartners = [];
    this.selectedPartnerId = null;
    this.selectedPartner = null;
    this.availablePayoutModes = [];
    this.selectedPayoutModeId = null;
    this.routeError = '';

    if (!this.senderCountry || !this.receiverCountry || !this.senderCurrency || !this.receiverCurrency) return;

    this.matchedCorridor = this.allCorridors.find(c =>
      c.sourceCountry === this.senderCountry &&
      c.destinationCountry === this.receiverCountry &&
      c.sourceCurrency === this.senderCurrency &&
      c.destinationCurrency === this.receiverCurrency
    ) || null;

    if (!this.matchedCorridor) {
      this.routeError = `No transfer route available from ${this.senderCountry} to ${this.receiverCountry}.`;
      return;
    }

    this.matchedPartners = (this.matchedCorridor.payoutPartners ?? []).filter(p => p.isActive);

    if (!this.selectedPaymentMethodId) return;

    const matchingPartner = this.matchedPartners.find(p =>
      p.paymentModeIds.includes(this.selectedPaymentMethodId!)
    );

    if (matchingPartner) {
      this.selectedPartnerId = matchingPartner.id;
      this.selectedPartner = matchingPartner;
      this.selectedPayoutModeId = this.selectedPaymentMethodId;
      this.availablePayoutModes = this.paymentMethods.filter(pm =>
        matchingPartner.paymentModeIds.includes(pm.id)
      );
      // Sync to store
      this.store.setRouteState(this.matchedCorridor, this.selectedPartner, this.selectedPayoutModeId);
    } else {
      this.routeError = `The selected payment method is not available for ${this.receiverCountry}. Please choose a different method.`;
      this.store.setRouteState(null, null, null);
    }
  }

  // ---------------------------------------------------------------------------
  // Step 3: Receiver Selection/Creation
  // ---------------------------------------------------------------------------

  loadReceivers(): void {
    if (!this.selectedCustomerId) return;
    this.api.getAgentReceiversByCustomer(this.selectedCustomerId).subscribe(r => {
      if (r?.success && r.data) {
        this.receivers = r.data.filter(rec => rec.isActive);
        this.filterReceivers();
      }
    });
    if (this.selectedPartner) {
      this.api.getAgentBanksForPayout(this.selectedPartner.payoutAgentId).subscribe(r => {
        if (r?.success && r.data) {
          this.payoutBanks = r.data.filter(b => b.isActive);
          if (this.selectedPayoutModeId) {
            this.payoutBanks = this.payoutBanks.filter(b =>
              !b.paymentMethodId || b.paymentMethodId === this.selectedPayoutModeId
            );
          }
        }
      });
      this.api.getAgentLocationsForPayout(this.selectedPartner.payoutAgentId).subscribe(r => {
        if (r?.success && r.data) {
          this.payoutLocations = r.data.filter(l => l.isActive);
        }
      });
    }
  }

  filterReceivers(): void {
    const s = this.receiverSearch.toLowerCase();
    const bankNames = this.payoutBanks.map(b => b.bankName.toLowerCase());

    let filtered = this.receivers.filter(r => {
      if (r.country !== this.receiverCountry) return false;
      if (bankNames.length && r.bankName) {
        if (!bankNames.includes(r.bankName.toLowerCase())) return false;
      }
      return true;
    });

    if (s) {
      filtered = filtered.filter(r =>
        r.fullName.toLowerCase().includes(s) ||
        (r.phone || '').toLowerCase().includes(s)
      );
    }
    this.filteredReceivers = filtered;
  }

  selectReceiver(receiver: ReceiverModel): void {
    this.selectedReceiverId = receiver.id;
    this.selectedReceiver = receiver;
    this.store.setSelectedReceiver(receiver);
  }

  clearSelectedReceiver(): void {
    this.selectedReceiverId = null;
    this.selectedReceiver = null;
    this.store.setSelectedReceiver(null);
  }

  toggleCreateReceiver(): void {
    this.showCreateReceiver = !this.showCreateReceiver;
    this.receiverFormError = '';
    this.receiverFormErrors = {};
    if (this.showCreateReceiver) {
      this.receiverForm.reset();
      this.receiverForm.patchValue({ country: this.receiverCountry });
    }
  }

  saveNewReceiver(): void {
    this.receiverFormError = '';
    if (!this.validateReceiverForm()) {
      this.receiverFormError = 'Please fix the highlighted fields.';
      return;
    }

    this.savingReceiver = true;
    const formValue = this.receiverForm.getRawValue();

    const newReceiver: any = {
      fullName: formValue.fullName || '',
      phone: formValue.phone || '',
      email: formValue.email || '',
      country: formValue.country || '',
      city: formValue.city || '',
      bankName: formValue.bankName || '',
      bankCode: formValue.bankCode || '',
      accountNumber: formValue.accountNumber || '',
      branchName: formValue.branchName || '',
      branchCode: formValue.branchCode || '',
      bankId: formValue.bankId || null,
      branchId: formValue.branchId || null,
      relationship: formValue.relationship || '',
    };

    // Populate bank/branch IDs from selected payout bank/branch
    const selBank = this.selectedBankId ? this.payoutBanks.find(b => b.id === this.selectedBankId) : null;
    if (selBank) {
      newReceiver.bankCode = selBank.bankCode || '';
      newReceiver.bankId = selBank.id;
    }
    if (this.selectedBranch) {
      newReceiver.branchName = this.selectedBranch.branchName;
      newReceiver.branchCode = this.selectedBranch.branchCode || '';
      newReceiver.branchId = this.selectedBranch.id;
    }
    const dto = { ...newReceiver, customerId: this.selectedCustomerId };
    this.api.createAgentReceiver(dto).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.receivers.push(res.data);
          this.filterReceivers();
          this.selectReceiver(res.data);
          this.showCreateReceiver = false;
          this.notify.success('Receiver created!');
        } else {
          this.receiverFormError = res?.message || 'Failed.';
        }
        this.savingReceiver = false;
      },
      error: () => {
        this.receiverFormError = 'Server error.';
        this.savingReceiver = false;
      },
    });
  }

  getPayoutModeName(): string {
    return this.paymentMethods.find(pm => pm.id === this.selectedPayoutModeId)?.name || '';
  }

  isCashTransfer(): boolean {
    const name = this.getPayoutModeName().toLowerCase();
    return name.includes('cash');
  }

  isBankTransfer(): boolean {
    const name = this.getPayoutModeName().toLowerCase();
    return name.includes('bank');
  }

  isWalletTransfer(): boolean {
    const name = this.getPayoutModeName().toLowerCase();
    return name.includes('wallet') || name.includes('mobile');
  }

  onBankSelected(): void {
    this.selectedBranch = null;
    const bank = this.payoutBanks.find(b => b.id === this.selectedBankId);
    if (bank) {
      this.receiverForm.patchValue({
        bankName: bank.bankName,
        bankCode: bank.bankCode || '',
        bankId: bank.id,
      });
    }
  }

  onLocationSelected(): void {
    const loc = this.payoutLocations.find(l => l.id === this.selectedLocationId);
    if (loc) {
      this.receiverForm.patchValue({
        bankName: loc.locationName,
        bankCode: loc.locationCode || '',
        bankId: loc.id,
      });
    }
  }

  // ---------------------------------------------------------------------------
  // Branch Popup
  // ---------------------------------------------------------------------------

  openBranchPopup(): void {
    const bank = this.selectedBankId
      ? this.payoutBanks.find(b => b.id === this.selectedBankId)
      : null;
    if (!bank) return;
    this.branchBank = bank;
    this.branchList = (bank.branches || []).filter(br => br.isActive);
    this.filteredBranches = [...this.branchList];
    this.branchSearch = '';
    this.showBranchPopup = true;
  }

  filterBranches(): void {
    const s = this.branchSearch.toLowerCase();
    this.filteredBranches = !s
      ? [...this.branchList]
      : this.branchList.filter(br =>
          br.branchName.toLowerCase().includes(s) ||
          (br.branchCode || '').toLowerCase().includes(s) ||
          (br.address || '').toLowerCase().includes(s)
        );
  }

  selectBranch(branch: AgentBankBranchModel): void {
    this.selectedBranch = branch;
    this.showBranchPopup = false;
  }

  closeBranchPopup(): void {
    this.showBranchPopup = false;
  }

  // ---------------------------------------------------------------------------
  // Stepper Navigation
  // ---------------------------------------------------------------------------

  canProceedStep1(): boolean {
    return !!this.selectedCustomer && !this.kycWarning && !this.dobWarning;
  }

  canProceedStep2(): boolean {
    return this.calculationDone && !this.complianceBlocked && !this.balanceWarning
      && !!this.selectedPartner && !!this.selectedPayoutModeId
      && this.sendAmount > 0 && !!this.selectedPaymentMethodId
      && !this.agentBalanceZero;
  }

  canProceedStep3(): boolean {
    return !!this.selectedReceiver;
  }

  nextStep(): void {
    if (this.step === 0 && !this.canProceedStep1()) {
      this.notify.error('Please select or create a customer first.');
      return;
    }
    if (this.step === 1 && !this.canProceedStep2()) {
      this.notify.error('Please complete all transfer details.');
      return;
    }
    if (this.step === 1) {
      this.loadReceivers();
    }
    if (this.step === 2 && !this.canProceedStep3()) {
      this.notify.error('Please select or create a receiver.');
      return;
    }
    this.store.nextStep();
  }

  prevStep(): void {
    this.store.prevStep();
  }

  // ---------------------------------------------------------------------------
  // Submit Transaction
  // ---------------------------------------------------------------------------

  submitTransaction(): void {
    if (!this.selectedCustomer || !this.selectedReceiver || !this.selectedPartner) {
      this.notify.error('Missing required data.');
      return;
    }

    this.submitting = true;
    this.api.getTransactionPinStatus().subscribe({
      next: (res: any) => {
        this.submitting = false;
        const hasPin = res?.data?.hasPin ?? res?.hasPin ?? false;
        if (!hasPin) {
          this.pinMode = 'set';
          this.pinInput = '';
          this.pinConfirm = '';
          this.pinError = '';
          this.showPinDialog = true;
        } else {
          this.pinMode = 'verify';
          this.pinInput = '';
          this.pinError = '';
          this.showPinDialog = true;
        }
      },
      error: () => {
        this.submitting = false;
        this.notify.error('Failed to check PIN status. Please try again.');
      },
    });
  }

  onPinSubmit(): void {
    this.pinError = '';

    if (this.pinMode === 'set') {
      if (!this.pinInput || this.pinInput.length < 4 || this.pinInput.length > 6) {
        this.pinError = 'PIN must be 4-6 digits.';
        return;
      }
      if (!/^\d+$/.test(this.pinInput)) {
        this.pinError = 'PIN must contain only digits.';
        return;
      }
      if (this.pinInput !== this.pinConfirm) {
        this.pinError = 'PINs do not match.';
        return;
      }
      this.pinLoading = true;
      this.api.setTransactionPin(this.pinInput).subscribe({
        next: (res: any) => {
          this.pinLoading = false;
          if (res?.success) {
            this.notify.success('Transaction PIN set successfully.');
            this.pinMode = 'verify';
            this.pinInput = '';
            this.pinError = '';
          } else {
            this.pinError = res?.message || 'Failed to set PIN.';
          }
        },
        error: (err: any) => {
          this.pinLoading = false;
          this.pinError = err?.error?.message || 'Failed to set PIN.';
        },
      });
    } else {
      if (!this.pinInput || this.pinInput.length < 4 || this.pinInput.length > 6) {
        this.pinError = 'Enter your 4-6 digit PIN.';
        return;
      }
      this.pinLoading = true;
      this.api.verifyTransactionPin(this.pinInput).subscribe({
        next: (res: any) => {
          this.pinLoading = false;
          if (res?.success) {
            this.showPinDialog = false;
            this.pinInput = '';
            this.executeSendTransaction();
          } else {
            this.pinError = res?.message || 'Invalid PIN.';
          }
        },
        error: (err: any) => {
          this.pinLoading = false;
          this.pinError = err?.error?.message || 'Invalid PIN. Please try again.';
        },
      });
    }
  }

  closePinDialog(): void {
    this.showPinDialog = false;
    this.pinInput = '';
    this.pinConfirm = '';
    this.pinError = '';
  }

  private executeSendTransaction(): void {
    if (!this.selectedCustomer || !this.selectedReceiver || !this.selectedPartner) {
      return;
    }

    this.submitting = true;

    const selectedBank = this.selectedBankId
      ? this.payoutBanks.find(b => b.id === this.selectedBankId)
      : null;
    const selectedLocation = this.selectedLocationId
      ? this.payoutLocations.find(l => l.id === this.selectedLocationId)
      : null;

    let receiverBankName = this.selectedReceiver.bankName || '';
    let receiverBankCode = '';
    let receiverBranchName = '';
    let receiverBranchCode = '';
    let receiverBankId: number | undefined = undefined;
    let receiverBranchId: number | undefined = undefined;

    if (this.isBankTransfer() && selectedBank) {
      receiverBankName = receiverBankName || selectedBank.bankName;
      receiverBankCode = selectedBank.bankCode || '';
      receiverBankId = selectedBank.id;
      if (this.selectedBranch) {
        receiverBranchName = this.selectedBranch.branchName;
        receiverBranchCode = this.selectedBranch.branchCode || '';
        receiverBranchId = this.selectedBranch.id;
      }
    } else if (this.isCashTransfer() && selectedLocation) {
      receiverBankName = receiverBankName || selectedLocation.locationName;
      receiverBankCode = selectedLocation.locationCode || '';
      receiverBankId = selectedLocation.id;
    } else if (this.isWalletTransfer() && selectedLocation) {
      receiverBankName = receiverBankName || selectedLocation.locationName;
      receiverBankCode = selectedLocation.locationCode || '';
      receiverBankId = selectedLocation.id;
    } else if (selectedBank) {
      receiverBankName = receiverBankName || selectedBank.bankName;
      receiverBankCode = selectedBank.bankCode || '';
      receiverBankId = selectedBank.id;
    }

    if (!receiverBankId && this.selectedReceiver.bankId) {
      receiverBankId = this.selectedReceiver.bankId;
    }
    if (!receiverBankCode && this.selectedReceiver.bankCode) {
      receiverBankCode = this.selectedReceiver.bankCode;
    }
    if (!receiverBranchId && this.selectedReceiver.branchId) {
      receiverBranchId = this.selectedReceiver.branchId;
    }
    if (!receiverBranchName && this.selectedReceiver.branchName) {
      receiverBranchName = this.selectedReceiver.branchName;
    }
    if (!receiverBranchCode && this.selectedReceiver.branchCode) {
      receiverBranchCode = this.selectedReceiver.branchCode;
    }

    const paymentMethodName = this.paymentMethods.find(pm => pm.id === this.selectedPaymentMethodId)?.name || '';
    const payoutMethodName = this.paymentMethods.find(pm => pm.id === this.selectedPayoutModeId)?.name || '';

    const model: SendTransactionModel = {
      senderName: this.selectedCustomer.fullName,
      senderPhone: this.selectedCustomer.phone || '',
      senderEmail: this.selectedCustomer.email,
      senderIdType: this.selectedCustomer.idDocumentType,
      senderIdNumber: this.selectedCustomer.idDocumentNumber,
      senderCountry: this.senderCountry,
      receiverName: this.selectedReceiver.fullName,
      receiverPhone: this.selectedReceiver.phone,
      receiverEmail: this.selectedReceiver.email,
      receiverCountry: this.receiverCountry,
      receiverBankName: receiverBankName,
      receiverBankCode: receiverBankCode,
      receiverAccountNumber: this.selectedReceiver.accountNumber || '',
      receiverBranchName: receiverBranchName,
      receiverBranchCode: receiverBranchCode,
      receiverBankId: receiverBankId,
      receiverBranchId: receiverBranchId,
      sendAmount: this.sendAmount,
      sendCurrency: this.senderCurrency,
      receiveCurrency: this.receiverCurrency,
      paymentMethod: this.selectedPaymentMethodId || 0,
      payoutMethod: this.selectedPayoutModeId || 0,
      paymentMethodName: paymentMethodName,
      payoutMethodName: payoutMethodName,
      payoutPartnerId: this.selectedPartner?.payoutAgentId,
      customerId: this.selectedCustomerId || undefined,
      receiverId: this.selectedReceiverId || undefined,
      purpose: '',
    };

    this.api.sendTransaction(model).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.successResult = res.data;
          this.store.setSuccessResult(res.data);
        } else {
          this.notify.error(res?.message || 'Failed to submit transaction.');
        }
        this.submitting = false;
      },
      error: err => {
        this.notify.error(`Error: ${err.message || 'Unknown error'}`);
        this.submitting = false;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // PDF Receipt
  // ---------------------------------------------------------------------------

  downloadReceipt(): void {
    if (!this.successResult) return;
    const tx = this.successResult;

    const content = `
      <html><head><title>Transaction Receipt</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; color: #333; max-width: 600px; margin: 0 auto; }
        h1 { text-align: center; color: #1a56db; font-size: 22px; margin-bottom: 4px; }
        .subtitle { text-align: center; color: #666; font-size: 13px; margin-bottom: 30px; }
        .ref { text-align: center; font-size: 16px; font-weight: bold; background: #f0f4ff; padding: 10px; border-radius: 8px; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin: 16px 0; }
        td { padding: 8px 12px; border-bottom: 1px solid #eee; font-size: 13px; }
        td:first-child { font-weight: 600; color: #555; width: 40%; }
        .section { font-size: 14px; font-weight: 700; color: #1a56db; padding: 12px 0 4px; border-bottom: 2px solid #1a56db; margin-top: 16px; }
        .amount { font-size: 18px; font-weight: 700; color: #2e7d32; }
        .footer { text-align: center; margin-top: 30px; font-size: 11px; color: #999; }
      </style></head><body>
      <h1>RemitAgent</h1>
      <div class="subtitle">Transaction Receipt</div>
      <div class="ref">Reference: ${tx.referenceNumber}</div>
      <div class="section">Transaction Details</div>
      <table>
        <tr><td>Status</td><td>${this.getStatusLabel(tx.status)}</td></tr>
        <tr><td>Date</td><td>${new Date(tx.createdAt).toLocaleString()}</td></tr>
        <tr><td>Send Amount</td><td class="amount">${tx.sendAmount.toFixed(2)} ${tx.sendCurrency}</td></tr>
        <tr><td>Exchange Rate</td><td>1 ${tx.sendCurrency} = ${tx.exchangeRateApplied.toFixed(4)} ${tx.receiveCurrency}</td></tr>
        <tr><td>Receive Amount</td><td class="amount">${tx.receiveAmount.toFixed(2)} ${tx.receiveCurrency}</td></tr>
        <tr><td>Commission</td><td>${tx.totalCommission.toFixed(2)} ${tx.sendCurrency}</td></tr>
      </table>
      <div class="section">Sender</div>
      <table>
        <tr><td>Name</td><td>${tx.senderName}</td></tr>
      </table>
      <div class="section">Receiver</div>
      <table>
        <tr><td>Name</td><td>${tx.receiverName}</td></tr>
        <tr><td>Country</td><td>${tx.receiverCountry}</td></tr>
      </table>
      <div class="footer">This is a computer-generated receipt. No signature required.</div>
      </body></html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(content);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => printWindow.print(), 500);
    }
  }

  startNewTransaction(): void {
    this.store.reset();
    this.successResult = null;
    this.selectedCustomerId = null;
    this.selectedCustomer = null;
    this.selectedReceiverId = null;
    this.selectedReceiver = null;
    this.sendAmount = 0;
    this.receiverCountry = '';
    this.receiverCurrency = '';
    this.matchedCorridor = null;
    this.matchedPartners = [];
    this.selectedPartnerId = null;
    this.selectedPartner = null;
    this.availablePayoutModes = [];
    this.selectedPayoutModeId = null;
    this.selectedPaymentMethodId = null;
    this.routeError = '';
    this.exchangeRate = 0;
    this.serviceCharge = 0;
    this.totalPayable = 0;
    this.receiveAmount = 0;
    this.calculationDone = false;
    this.calcError = '';
    this.selectedBranch = null;
    this.showBranchPopup = false;
    if (this.agentProfile) {
      this.senderCountry = this.agentProfile.country;
      this.senderCurrency = this.agentProfile.currency || '';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'OnHold': return 'On Hold';
      case 'Compliance': return 'Under Review';
      default: return status;
    }
  }
}
