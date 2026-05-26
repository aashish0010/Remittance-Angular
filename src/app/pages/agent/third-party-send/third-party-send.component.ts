import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { Subject, takeUntil } from 'rxjs';

import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { AppSettingsService } from '../../../core/services/app-settings.service';
import { ThirdPartySendStore } from './third-party-send.store';
import { CustomerModel, ReceiverModel } from '../../../core/models/customer.models';
import { AgentFieldMappingModel, AgentBankModel, AgentLocationModel } from '../../../core/models/agent.models';

@Component({
  selector: 'app-third-party-send',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DecimalPipe],
  providers: [ThirdPartySendStore],
  templateUrl: './third-party-send.component.html',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-8px)', maxHeight: '0px' }),
        animate('220ms cubic-bezier(0.4,0,0.2,1)', style({ opacity: 1, transform: 'translateY(0)', maxHeight: '600px' }))
      ]),
      transition(':leave', [
        animate('160ms cubic-bezier(0.4,0,1,1)', style({ opacity: 0, transform: 'translateY(-4px)', maxHeight: '0px' }))
      ])
    ]),
  ]
})
export class ThirdPartySendComponent implements OnInit, OnDestroy {
  readonly store = inject(ThirdPartySendStore);
  private api = inject(ApiService);
  private auth = inject(AuthStateService);
  private notify = inject(NotificationService);
  readonly appSettings = inject(AppSettingsService);
  private router = inject(Router);
  private destroy$ = new Subject<void>();

  // ── Customer / Receiver lists ─────────────────────────────────────────────
  customers: CustomerModel[] = [];
  filteredCustomers: CustomerModel[] = [];
  customerSearch = '';
  showCustomerDropdown = false;

  receivers: ReceiverModel[] = [];
  filteredReceivers: ReceiverModel[] = [];
  receiverSearch = '';
  showReceiverDropdown = false;

  // ── Missing field forms ───────────────────────────────────────────────────
  showMissingCustomerForm = false;
  showMissingReceiverForm = false;
  missingCustomerData: Record<string, any> = {};
  missingReceiverData: Record<string, any> = {};
  savingMissingCustomer = false;
  savingMissingReceiver = false;

  // ── Reference data ────────────────────────────────────────────────────────
  countries: any[] = [];
  idTypes: any[] = [];
  paymentMethods: any[] = [];
  selectedPaymentMethodId: number | null = null;

  // ── Payout location infrastructure ───────────────────────────────────────
  payoutBanks: AgentBankModel[] = [];
  payoutCashLocations: AgentBankModel[] = [];
  payoutLocations: AgentLocationModel[] = [];

  // ── Payout account ────────────────────────────────────────────────────────
  transactionPayoutDetails: {
    bankName: string | null; bankCode: string | null; bankId: number | null;
    accountNumber: string | null; branchName: string | null;
    branchCode: string | null; branchId: number | null;
  } = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
  selectedSavedDetail: any = null;
  savedPayoutDetails: any[] = [];
  showPayoutSwapPanel = false;
  showCashSwapPanel = false;
  showCashSavedPanel = false;
  showNewAccountForm = false;

  // ── Branch popup ──────────────────────────────────────────────────────────
  showBranchPopup = false;
  allBranches: any[] = [];
  filteredBranches: any[] = [];
  branchSearch = '';
  branchBankName = '';
  branchContext: 'form' | 'txn' = 'form';
  branchSearchLoading = false;
  branchSearchDone = false;
  selectedBankHasBranches = false;
  selectedBankIdForBranch: number | null = null;

  // ── Compliance ────────────────────────────────────────────────────────────
  purpose = '';
  sourceOfFunds = '';
  relationship = '';
  purposeOptions: string[] = ['Family Support', 'Education', 'Medical', 'Business', 'Savings', 'Other'];
  sourceOptions: string[] = ['Salary', 'Savings', 'Business Income', 'Pension', 'Other'];
  relationshipOptions: string[] = ['Spouse', 'Parent', 'Child', 'Sibling', 'Friend', 'Self', 'Other'];

  // ── PIN dialog ────────────────────────────────────────────────────────────
  showPinDialog = false;
  hasPin = false;
  pinInput = '';
  pinConfirm = '';
  pinError = '';

  // ── New customer form ─────────────────────────────────────────────────────
  showCreateCustomer = false;
  customerForm = new FormGroup({
    fullName: new FormControl(''), phone: new FormControl(''), email: new FormControl(''),
    nationality: new FormControl(''), country: new FormControl(''), idDocumentType: new FormControl(''), idDocumentNumber: new FormControl(''),
    gender: new FormControl(''), dateOfBirth: new FormControl(''),
    address: new FormControl(''), city: new FormControl(''), postalCode: new FormControl(''),
    occupation: new FormControl(''),
  });
  customerFormErrors: Record<string, string> = {};
  savingCustomer = false;

  // ── New receiver form ─────────────────────────────────────────────────────
  showCreateReceiver = false;
  showExtraReceiverFields = false;
  receiverForm = new FormGroup({
    fullName: new FormControl(''), phone: new FormControl(''), email: new FormControl(''),
    country: new FormControl(''), city: new FormControl(''), relationship: new FormControl(''),
    bankName: new FormControl(''), bankCode: new FormControl(''), accountNumber: new FormControl(''),
    branchName: new FormControl(''), branchCode: new FormControl(''),
    bankId: new FormControl<number | null>(null), branchId: new FormControl<number | null>(null),
    gender: new FormControl(''), address: new FormControl(''), postalCode: new FormControl(''),
    nationality: new FormControl(''),
    occupation: new FormControl(''),
    dateOfBirth: new FormControl(''),
    idDocumentType: new FormControl(''),
    idDocumentNumber: new FormControl(''),
  });
  receiverFormErrors: Record<string, string> = {};
  savingReceiver = false;

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation()?.extras?.state
      ?? (history.state ?? {});

    if (!nav?.partner) {
      this.router.navigate(['/agent/send']);
      return;
    }

    this.store.initFromNavState({
      sendAmount: nav.sendAmount,
      receiveAmount: nav.receiveAmount,
      exchangeRate: nav.exchangeRate,
      serviceCharge: nav.serviceCharge,
      totalPayable: nav.totalPayable,
      sendCurrency: nav.sendCurrency,
      receiveCurrency: nav.receiveCurrency,
      receiverCountry: nav.receiverCountry,
      receiverCountryIso2: nav.receiverCountryIso2 ?? '',
      receiverCountryIso3: nav.receiverCountryIso3 ?? '',
      senderCountry: nav.senderCountry ?? '',
      quoteId: nav.quoteId,
      partner: nav.partner,
      paymentMethodId: nav.paymentMethodId,
      paymentMethodName: nav.paymentMethodName,
      payoutModeId: nav.payoutModeId,
      serviceOptionCode: nav.serviceOptionCode ?? null,
      serviceOptionRoutingCode: nav.serviceOptionRoutingCode ?? null,
      payoutType: nav.payoutType ?? null,
      fieldMappings: nav.fieldMappings ?? [],
    });

    this.loadData(nav.partner.payoutAgentId);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Data loading ──────────────────────────────────────────────────────────
  loadData(payoutPartnerId: number): void {
    // Use serviceOptionCode (MG code like "BANK_DEPOSIT") and ISO3 — matches what AutoSeedFieldMappingsAsync stores
    const serviceOptionCode = this.store.serviceOptionCode() ?? undefined;
    const country = this.store.receiverCountryIso3() || this.store.receiverCountry() || undefined;
    this.api.getAgentFieldMappings(payoutPartnerId, serviceOptionCode, country)
      .pipe(takeUntil(this.destroy$))
      .subscribe((r: any) => {
        if (r.success) this.store.setFieldMappings(r.data ?? []);
      });

    // 2. Load reference data (countries + ID types)
    this.api.getCountries()
      .pipe(takeUntil(this.destroy$))
      .subscribe((r: any) => { if (r.success) this.countries = r.data ?? []; });
    this.api.getReferenceSetupFields('IdType')
      .pipe(takeUntil(this.destroy$))
      .subscribe((r: any) => { if (r.success) this.idTypes = r.data ?? []; });
    this.api.getAgentPaymentMethods()
      .pipe(takeUntil(this.destroy$))
      .subscribe((r: any) => { if (r.success) this.paymentMethods = r.data ?? []; });

    // 3. Load customers
    this.api.getAgentCustomers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((r: any) => {
        if (r.success) {
          this.customers = r.data ?? [];
          this.filteredCustomers = this.customers;
        }
      });

    // 4. Load payout location infrastructure for this partner + payment method
    this.loadPayoutInfrastructure(payoutPartnerId, this.store.paymentMethodName());
  }

  onPaymentMethodChange(): void {
    const pm = this.paymentMethods.find(m => m.id === Number(this.selectedPaymentMethodId));
    if (!pm) return;
    this.store.initFromNavState({ paymentMethodId: pm.id, paymentMethodName: pm.name });
    const agentId = this.store.partner()?.payoutAgentId;
    if (agentId) this.loadPayoutInfrastructure(agentId, pm.name);
    // Reload saved payout details for new method type
    const rv = this.store.selectedReceiver();
    if (rv) this.loadReceiverPayoutDetails(rv);
  }

  private loadPayoutInfrastructure(agentId: number, _methodName: string): void {
    this.payoutBanks = [];
    this.payoutCashLocations = [];
    this.payoutLocations = [];

    if (this.isCashTransfer() && !this.isMgCashTransfer()) {
      this.api.getAgentCashLocations(agentId)
        .pipe(takeUntil(this.destroy$))
        .subscribe((r: any) => { if (r.success) this.payoutCashLocations = r.data ?? []; });
    } else if (this.isWalletTransfer()) {
      this.api.getAgentWalletLocations(agentId)
        .pipe(takeUntil(this.destroy$))
        .subscribe((r: any) => { if (r.success) this.payoutLocations = r.data ?? []; });
    } else {
      // Default: bank transfer (covers bank, deposit, direct, wire, eft, unknown)
      this.api.getAgentBanksForPayout(agentId, this.store.receiverCountryIso3() || this.store.receiverCountry() || undefined)
        .pipe(takeUntil(this.destroy$))
        .subscribe((r: any) => { if (r.success) this.payoutBanks = r.data ?? []; });
    }
  }

  // ── Customer search / select ──────────────────────────────────────────────
  filterCustomers(): void {
    const q = this.customerSearch.toLowerCase();
    this.filteredCustomers = q
      ? this.customers.filter(c => c.fullName.toLowerCase().includes(q) || (c.phone ?? '').includes(q))
      : this.customers;
    this.showCustomerDropdown = true;
  }

  hideCustomerDropdown(): void {
    setTimeout(() => { this.showCustomerDropdown = false; }, 200);
  }

  selectCustomer(c: CustomerModel): void {
    this.store.setSelectedCustomer(c);
    this.customerSearch = c.fullName;
    this.showCustomerDropdown = false;
    this.showCreateCustomer = false;

    if (this.appSettings.kycEnabled && !c.isKycVerified)
      this.store.setKycWarning('Customer KYC not verified. Proceed with caution.');
    else
      this.store.setKycWarning('');

    // Always reset dobWarning first — stale warning from previous customer must not carry over
    this.store.setDobWarning('');
    if (c.dateOfBirth) {
      const age = Math.floor((Date.now() - new Date(c.dateOfBirth).getTime()) / 31557600000);
      if (age < (this.appSettings.minimumAge ?? 18))
        this.store.setDobWarning(`Customer is under ${this.appSettings.minimumAge ?? 18} years old.`);
    }

    this.checkMissingCustomerFields(c);
    this.api.getAgentReceiversByCustomer(c.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((r: any) => {
        if (r.success) { this.receivers = r.data ?? []; this.filteredReceivers = this.receivers; }
      });
  }

  clearCustomer(): void {
    this.store.setSelectedCustomer(null);
    this.store.setSelectedReceiver(null);
    this.store.setKycWarning('');
    this.store.setDobWarning('');
    this.customerSearch = '';
    this.showMissingCustomerForm = false;
    this.receivers = [];
  }

  // ── Receiver search / select ──────────────────────────────────────────────
  filterReceivers(): void {
    const q = this.receiverSearch.toLowerCase();
    this.filteredReceivers = q
      ? this.receivers.filter(r => r.fullName.toLowerCase().includes(q) || (r.phone ?? '').includes(q))
      : this.receivers;
    this.showReceiverDropdown = true;
  }

  hideReceiverDropdown(): void {
    setTimeout(() => { this.showReceiverDropdown = false; }, 200);
  }

  selectReceiver(r: ReceiverModel): void {
    this.store.setSelectedReceiver(r);
    this.receiverSearch = r.fullName;
    this.showReceiverDropdown = false;
    this.showCreateReceiver = false;
    this.checkMissingReceiverFields(r);
    this.loadReceiverPayoutDetails(r);
  }

  clearReceiver(): void {
    this.store.setSelectedReceiver(null);
    this.receiverSearch = '';
    this.showMissingReceiverForm = false;
    this.savedPayoutDetails = [];
    this.selectedSavedDetail = null;
    this.showPayoutSwapPanel = false;
    this.showCashSwapPanel = false;
    this.showCashSavedPanel = false;
    this.showNewAccountForm = false;
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
  }

  private loadReceiverPayoutDetails(r: ReceiverModel): void {
    const isCash = this.isCashTransfer();
    const type = this.isBankTransfer() ? 'bank' : isCash ? 'cash' : 'wallet';
    const agentId = this.store.partner()?.payoutAgentId ?? undefined;

    const fallback = () => {
      this.savedPayoutDetails = [];
      this.selectedSavedDetail = null;
      this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
      if (isCash && !this.isMgCashTransfer()) { this.showCashSwapPanel = true; this.showNewAccountForm = false; }
      else { this.showNewAccountForm = true; }
    };

    this.api.getReceiverPaymentDetails(r.id, type, this.store.receiverCountry(), agentId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          if (!res?.success) { fallback(); return; }
          this.savedPayoutDetails = res.data ?? [];
          if (this.savedPayoutDetails.length > 0) {
            const first = this.savedPayoutDetails[0];
            this.selectedSavedDetail = first;
            this.transactionPayoutDetails = {
              bankName: first.bankName ?? null,
              bankCode: first.bankCode ?? null,
              bankId: first.bankId ?? null,
              accountNumber: first.accountNumber ?? null,
              branchName: first.branchName ?? null,
              branchCode: first.branchCode ?? null,
              branchId: first.branchId ?? null,
            };
            this.showNewAccountForm = false;
            this.showCashSwapPanel = false;
            // Auto-open swap panel when saved detail is incomplete (e.g. missing account number)
            if (this.isBankTransfer() && !(first.accountNumber && (first.bankId || first.bankName))) {
              this.showPayoutSwapPanel = true;
            }
          } else {
            fallback();
          }
        },
        error: () => fallback(),
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

  // ── Missing fields ────────────────────────────────────────────────────────
  private checkMissingCustomerFields(c: CustomerModel): void {
    const data = c as any;
    const missing = this.store.customerMappings().filter(m => {
      const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return m.isRequired && !data[key];
    });
    this.store.setMissingCustomerFields(missing);
    if (missing.length > 0) { this.missingCustomerData = {}; this.showMissingCustomerForm = true; }
    else this.showMissingCustomerForm = false;
  }

  private checkMissingReceiverFields(r: ReceiverModel): void {
    const data = r as any;
    const missing = this.store.receiverMappings().filter(m => {
      const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return m.isRequired && !data[key];
    });
    this.store.setMissingReceiverFields(missing);
    if (missing.length > 0) { this.missingReceiverData = {}; this.showMissingReceiverForm = true; }
    else this.showMissingReceiverForm = false;
  }

  saveMissingCustomerFields(): void {
    const c = this.store.selectedCustomer();
    if (!c) return;
    if (!this.store.missingCustomerFields().every(m => {
      const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return !!this.missingCustomerData[key];
    })) {
      this.notify.error('Please fill all required fields.'); return;
    }
    const addr = (this.missingCustomerData['address'] ?? '').trim();
    if (addr && addr.length <= 5) {
      this.notify.error('Address must be more than 5 characters.'); return;
    }
    // Convert camelCase keys to PascalCase — backend switch expects "Address" not "address"
    const payload: Record<string, string> = {};
    for (const [k, v] of Object.entries(this.missingCustomerData))
      payload[k.charAt(0).toUpperCase() + k.slice(1)] = v;
    this.savingMissingCustomer = true;
    this.api.patchCustomerFields(c.id, payload).subscribe({
      next: (r: any) => {
        this.savingMissingCustomer = false;
        if (r.success) {
          // Merge patched values (camelCase) into existing customer — don't rely on r.data serialization
          const merged: any = { ...c, ...this.missingCustomerData };
          this.store.setSelectedCustomer(merged);
          // Re-check DOB warning with newly saved dateOfBirth
          this.store.setDobWarning('');
          if (merged.dateOfBirth) {
            const age = Math.floor((Date.now() - new Date(merged.dateOfBirth).getTime()) / 31557600000);
            if (age < (this.appSettings.minimumAge ?? 18))
              this.store.setDobWarning(`Customer is under ${this.appSettings.minimumAge ?? 18} years old.`);
          }
          this.store.setMissingCustomerFields([]);
          this.showMissingCustomerForm = false;
          this.goToCustomerSubStep();
        } else this.notify.error(r.message ?? 'Update failed.');
      },
      error: () => { this.savingMissingCustomer = false; this.notify.error('Update failed.'); }
    });
  }

  saveMissingReceiverFields(): void {
    const rv = this.store.selectedReceiver();
    if (!rv) return;
    if (!this.store.missingReceiverFields().every(m => {
      const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return !!this.missingReceiverData[key];
    })) {
      this.notify.error('Please fill all required fields.'); return;
    }
    // Convert camelCase keys to PascalCase — backend switch expects "Address" not "address"
    const payload: Record<string, string> = {};
    for (const [k, v] of Object.entries(this.missingReceiverData))
      payload[k.charAt(0).toUpperCase() + k.slice(1)] = v;
    this.savingMissingReceiver = true;
    this.api.patchReceiverFields(rv.id, payload).subscribe({
      next: (r: any) => {
        this.savingMissingReceiver = false;
        if (r.success) {
          // Merge patched values (camelCase) into existing receiver — don't rely on r.data serialization
          this.store.setSelectedReceiver({ ...rv, ...this.missingReceiverData } as any);
          this.store.setMissingReceiverFields([]);
          this.showMissingReceiverForm = false;
        } else this.notify.error(r.message ?? 'Update failed.');
      },
      error: () => { this.savingMissingReceiver = false; this.notify.error('Update failed.'); }
    });
  }

  private static readonly PHONE_REGEX = /^\+?[\d\s\-().]+$/;

  // ── New customer create ───────────────────────────────────────────────────
  saveNewCustomer(): void {
    const v = this.customerForm.value;
    if (!v.fullName || !v.phone || !v.nationality || !v.country || !v.idDocumentType || !v.idDocumentNumber) {
      this.notify.error('Please fill all required fields.'); return;
    }
    if (v.phone.trim().length < 7) {
      this.notify.error('Phone must be at least 7 digits.'); return;
    }
    if (!ThirdPartySendComponent.PHONE_REGEX.test(v.phone.trim())) {
      this.notify.error('Phone must contain only digits, +, spaces, - or ().'); return;
    }
    if (v.address && v.address.trim().length <= 5) {
      this.notify.error('Address must be more than 5 characters.'); return;
    }
    // Also validate required field mappings
    const missingMapped = this.store.customerMappings()
      .filter(m => {
        const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
        return m.isRequired && !(v as any)[key];
      });
    if (missingMapped.length > 0) {
      this.notify.error(`Required: ${missingMapped.map(m => m.ourColumn).join(', ')}`); return;
    }
    this.savingCustomer = true;
    this.api.createAgentCustomer(v).subscribe({
      next: (r: any) => {
        this.savingCustomer = false;
        if (r.success) {
          this.customers = [r.data, ...this.customers];
          this.selectCustomer(r.data);
          this.showCreateCustomer = false;
          this.customerForm.reset();
        } else this.notify.error(r.message ?? 'Failed to create customer.');
      },
      error: () => { this.savingCustomer = false; this.notify.error('Failed to create customer.'); }
    });
  }

  // ── New receiver create ───────────────────────────────────────────────────
  saveNewReceiver(): void {
    const v = this.receiverForm.value;
    const c = this.store.selectedCustomer();
    if (!v.fullName || !v.phone || !c) {
      this.notify.error('Please fill all required fields.'); return;
    }
    if (v.phone.trim().length < 7) {
      this.notify.error('Phone must be at least 7 digits.'); return;
    }
    if (!ThirdPartySendComponent.PHONE_REGEX.test(v.phone.trim())) {
      this.notify.error('Phone must contain only digits, +, spaces, - or ().'); return;
    }
    // Validate required receiver field mappings (e.g. MG Gender, Nationality, DOB)
    const missingMapped = this.store.receiverMappings()
      .filter(m => {
        const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
        return m.isRequired && !(v as any)[key];
      });
    if (missingMapped.length > 0) {
      this.notify.error(`Required: ${missingMapped.map(m => m.ourColumn).join(', ')}`); return;
    }
    this.savingReceiver = true;
    const payload: any = { ...v, customerId: c.id };
    if (!payload.dateOfBirth) payload.dateOfBirth = null;
    if (!payload.bankId) payload.bankId = null;
    if (!payload.branchId) payload.branchId = null;
    if (!payload.gender) payload.gender = null;
    if (!payload.nationality) payload.nationality = null;
    if (!payload.idDocumentType) payload.idDocumentType = null;
    this.api.createAgentReceiver(payload).subscribe({
      next: (r: any) => {
        this.savingReceiver = false;
        if (r.success) {
          this.receivers = [r.data, ...this.receivers];
          this.selectReceiver(r.data);
          this.showCreateReceiver = false;
          this.showExtraReceiverFields = false;
          this.receiverForm.reset();
        } else this.notify.error(r.message ?? 'Failed to create receiver.');
      },
      error: () => { this.savingReceiver = false; this.notify.error('Failed to create receiver.'); }
    });
  }

  // ── Branch popup ──────────────────────────────────────────────────────────
  openBranchPopup(context: 'form' | 'txn'): void {
    this.branchContext = context;
    this.branchSearch = '';
    this.filteredBranches = [];
    this.branchSearchDone = false;
    this.branchSearchLoading = false;
    this.showBranchPopup = true;
  }

  executeBranchSearch(): void {
    if (this.branchSearch.length < 3 || !this.selectedBankIdForBranch) return;
    this.branchSearchLoading = true;
    this.branchSearchDone = true;
    this.filteredBranches = [];
    this.api.searchAgentBankBranches(this.selectedBankIdForBranch, this.branchSearch).subscribe({
      next: r => { this.filteredBranches = r.data ?? []; this.branchSearchLoading = false; },
      error: () => { this.branchSearchLoading = false; }
    });
  }

  selectBranchTxn(branch: any): void {
    this.transactionPayoutDetails = { ...this.transactionPayoutDetails, branchName: branch.branchName, branchCode: branch.branchCode ?? null, branchId: branch.id };
    this.showBranchPopup = false;
  }

  selectBranch(branch: any): void {
    this.receiverForm.patchValue({ branchName: branch.branchName, branchCode: branch.branchCode ?? '', branchId: branch.id });
    this.showBranchPopup = false;
  }

  filterBranches(): void {
    const q = this.branchSearch.toLowerCase();
    this.filteredBranches = q
      ? this.allBranches.filter(b => b.branchName.toLowerCase().includes(q) || (b.branchCode ?? '').toLowerCase().includes(q))
      : this.allBranches;
  }

  // ── Step navigation ───────────────────────────────────────────────────────
  goToCustomerSubStep(): void {
    this.store.setSubStep('receiver');
  }

  proceedToCompliance(): void {
    if (!this.store.canProceedStep1()) return;
    if (!this.hasValidPayoutAccount()) {
      this.notify.error('Please select or add a payout account before continuing.');
      return;
    }
    this.store.nextStep(); // step 2
  }

  proceedToReview(): void {
    this.store.nextStep(); // step 3
  }

  goBack(): void {
    if (this.store.currentStep() === 0) { this.router.navigate(['/agent/send']); return; }
    this.store.prevStep();
  }

  goToStep(step: number): void {
    this.store.goToStep(step);
  }

  // ── PIN + Submit ──────────────────────────────────────────────────────────
  openPinDialog(): void {
    this.pinInput = ''; this.pinConfirm = ''; this.pinError = '';
    this.api.getTransactionPinStatus().subscribe((r: any) => {
      this.hasPin = r?.data ?? false;
      this.showPinDialog = true;
    });
  }

  submitPin(): void {
    this.pinError = '';
    if (!this.pinInput) { this.pinError = 'Enter PIN.'; return; }
    if (!this.hasPin) {
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
    const partner = this.store.partner()!;
    const sd = this.selectedSavedDetail;
    const pd = this.transactionPayoutDetails;

    const effectiveBankId = sd?.bankId || pd.bankId || (rv as any).bankId || null;
    const resolvedBankCode = sd?.bankCode || pd.bankCode || (rv as any).bankCode
      || (effectiveBankId ? (this.payoutBanks.find(b => b.id === effectiveBankId)?.bankCode || null) : null)
      || null;

    const dto: any = {
      senderName: c.fullName, senderPhone: c.phone, senderEmail: c.email,
      senderIdType: (c as any).idDocumentType, senderIdNumber: (c as any).idDocumentNumber, senderCountry: c.country,
      receiverName: rv.fullName, receiverPhone: rv.phone, receiverEmail: rv.email, receiverCountry: rv.country,
      receiverBankName: sd?.bankName ?? pd.bankName ?? rv.bankName,
      receiverBankCode: resolvedBankCode,
      receiverAccountNumber: sd?.accountNumber ?? pd.accountNumber ?? rv.accountNumber,
      receiverBranchName: sd?.branchName ?? pd.branchName ?? rv.branchName,
      receiverBranchCode: sd?.branchCode ?? pd.branchCode ?? rv.branchCode,
      receiverBankId: sd?.bankId ?? pd.bankId ?? rv.bankId,
      receiverBranchId: sd?.branchId ?? pd.branchId ?? rv.branchId,
      sendAmount: this.store.sendAmount(),
      exchangeRate: this.store.exchangeRate(),
      receiveAmount: this.store.receiveAmount(),
      sendCurrency: this.store.sendCurrency(),
      receiveCurrency: this.store.receiveCurrency(),
      receiverCountryIso2: this.store.receiverCountryIso2(),
      receiverCountryIso3: this.store.receiverCountryIso3(),
      paymentMethod: this.resolvePaymentMethodEnum(this.store.paymentMethodName()),
      paymentMethodName: this.store.paymentMethodName(),
      payoutMethod: this.resolvedPayoutType() === 'bank' ? 1 : this.resolvedPayoutType() === 'wallet' ? 3 : 0,
      payoutMethodName: this.store.paymentMethodName(),
      payoutPartnerId: partner.payoutAgentId,
      customerId: c.id, receiverId: rv.id,
      purpose: this.purpose, sourceOfFunds: this.sourceOfFunds, relationship: this.relationship,
      quoteId: this.store.quoteId(),
      serviceOptionCode: this.store.serviceOptionCode() ?? null,
      serviceOptionRoutingCode: this.store.serviceOptionRoutingCode() ?? null,
    };

    this.api.sendTransaction(dto).subscribe({
      next: (r: any) => {
        this.store.setSubmitting(false);
        if (r.success) this.store.setSuccessResult(r.data);
        else this.notify.error(r.message ?? 'Transaction failed.');
      },
      error: () => { this.store.setSubmitting(false); this.notify.error('Transaction submission failed.'); }
    });
  }

  private resolvePaymentMethodEnum(name: string): number {
    const n = name.toLowerCase();
    if (n.includes('bank')) return 1;
    if (n.includes('card')) return 2;
    if (n.includes('wallet') || n.includes('mobile')) return 3;
    return 0;
  }

  // ── Payout location selection handlers ───────────────────────────────────
  onPayoutBankSelectedTxn(bank: AgentBankModel): void {
    if (!bank) return;
    this.transactionPayoutDetails = {
      ...this.transactionPayoutDetails,
      bankName: bank.bankName,
      bankCode: bank.bankCode ?? null,
      bankId: bank.id,
      branchName: null, branchCode: null, branchId: null,
    };
    this.selectedBankIdForBranch = bank.id;
    this.selectedBankHasBranches = bank.hasBranches ?? (bank.branches?.length > 0);
    if (this.selectedBankHasBranches) {
      this.branchBankName = bank.bankName;
      this.openBranchPopup('txn');
    }
  }

  onCashLocationSelectedTxn(loc: AgentBankModel): void {
    if (!loc) return;
    this.transactionPayoutDetails = {
      bankName: loc.bankName,
      bankCode: loc.bankCode ?? null,
      bankId: loc.id,
      accountNumber: null,
      branchName: null,
      branchCode: null,
      branchId: null,
    };
    this.selectedSavedDetail = null;
    this.showCashSwapPanel = false;
    this.showCashSavedPanel = false;
  }

  toggleCashSwapPanel(): void {
    this.showCashSwapPanel = !this.showCashSwapPanel;
    this.showCashSavedPanel = false;
  }

  toggleCashSavedPanel(): void {
    this.showCashSavedPanel = !this.showCashSavedPanel;
    this.showCashSwapPanel = false;
  }

  selectCashSavedDetail(d: any): void {
    this.selectedSavedDetail = d;
    this.transactionPayoutDetails = {
      bankName: d.bankName ?? null, bankCode: d.bankCode ?? null, bankId: d.bankId ?? d.id ?? null,
      accountNumber: null, branchName: null, branchCode: null, branchId: null,
    };
    this.showCashSwapPanel = false;
    this.showCashSavedPanel = false;
  }

  onLocationSelectedTxn(loc: AgentLocationModel): void {
    if (!loc) return;
    this.transactionPayoutDetails = {
      ...this.transactionPayoutDetails,
      bankName: loc.locationName,
      bankCode: (loc as any).locationCode ?? null,
      bankId: loc.id,
    };
  }

  private resolvedPayoutType(): 'bank' | 'cash' | 'wallet' {
    // Prefer explicit payoutType from MoneyGram service option selection
    const explicit = this.store.payoutType();
    if (explicit) return explicit;
    // Fallback: name-based heuristic for non-MG corridors
    const n = this.store.paymentMethodName().toLowerCase();
    if (n.includes('cash') || n.includes('pickup') || n.includes('will_call') || n.includes('willcall')) return 'cash';
    if (n.includes('wallet') || n.includes('mobile') || n.includes('phone')) return 'wallet';
    return 'bank';
  }
  isBankTransfer(): boolean { return this.resolvedPayoutType() === 'bank'; }
  isCashTransfer(): boolean { return this.resolvedPayoutType() === 'cash'; }
  isWalletTransfer(): boolean { return this.resolvedPayoutType() === 'wallet'; }
  isMgPartner(): boolean { return this.store.partner()?.apiProviderKey === 'moneygram'; }
  isMgCashTransfer(): boolean { return this.isMgPartner() && this.isCashTransfer(); }

  resolveDisplayBankName(bankId: number | null, bankName: string | null): string | null {
    if (bankName) return bankName;
    if (bankId) return this.payoutBanks.find(b => b.id === bankId)?.bankName ?? null;
    return null;
  }

  hasSavedPayoutData(): boolean {
    if (this.selectedSavedDetail) return true;
    const pd = this.transactionPayoutDetails;
    return !!(pd.bankId || pd.bankName || pd.accountNumber);
  }

  hasValidPayoutAccount(): boolean {
    if (this.isBankTransfer()) {
      const sd = this.selectedSavedDetail;
      // Saved detail: needs account number + any bank identity (id OR name OR code)
      if (sd) return !!(sd.accountNumber && (sd.bankId || sd.bankName || sd.bankCode));
      // New entry:
      //   - dropdown path: bankId set → bank fully identified, only accountNumber needed
      //   - text-box path: no bankId → need bankCode + bankName both
      const pd = this.transactionPayoutDetails;
      const effectiveBankName = this.resolveDisplayBankName(pd.bankId, pd.bankName);
      const bankIdentified = !!(pd.bankId || (pd.bankCode && effectiveBankName));
      const bankOk = !!(pd.accountNumber && bankIdentified);
      const branchOk = !this.selectedBankHasBranches || !!pd.branchId;
      return bankOk && branchOk;
    }
    if (this.isCashTransfer()) {
      if (this.isMgCashTransfer()) return true;
      const sd = this.selectedSavedDetail;
      if (sd) return !!(sd.bankId || sd.bankName);
      return !!(this.transactionPayoutDetails.bankId || this.transactionPayoutDetails.bankName);
    }
    if (this.isWalletTransfer()) {
      const sd = this.selectedSavedDetail;
      const hasRoutingCode = !!this.store.serviceOptionRoutingCode();
      // Saved detail: wallet number required; bank code required unless routing code covers it
      if (sd) return !!(sd.accountNumber && (sd.bankCode || hasRoutingCode));
      // New manual entry: wallet number + code required (routing code covers bank code)
      const pd = this.transactionPayoutDetails;
      return !!(pd.accountNumber && (pd.bankCode || hasRoutingCode));
    }
    return true;
  }

  canProceed(): boolean {
    return this.store.canProceedStep1() && this.hasValidPayoutAccount();
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
      <div class="row"><span class="label">Status</span><span class="value">${result.status}</span></div>
      <div class="row"><span class="label">Date</span><span class="value">${new Date(result.createdAt).toLocaleString()}</span></div>
    </body></html>`;
    const w = window.open('', '_blank');
    if (w) { w.document.write(html); w.document.close(); w.print(); }
  }

  startNewTransaction(): void {
    this.store.reset();
    this.router.navigate(['/agent/send']);
  }

  isCustomerFieldRequired(ourColumn: string): boolean {
    return this.store.customerMappings().some(
      m => m.ourColumn.toLowerCase() === ourColumn.toLowerCase() && m.isRequired
    );
  }

  isReceiverFieldRequired(ourColumn: string): boolean {
    return this.store.receiverMappings().some(
      m => m.ourColumn.toLowerCase() === ourColumn.toLowerCase() && m.isRequired
    );
  }

  isReceiverFieldVisible(ourColumn: string): boolean {
    if (this.store.receiverMappings().length === 0) return true;
    return this.store.receiverMappings().some(
      m => m.ourColumn.toLowerCase() === ourColumn.toLowerCase()
    );
  }

  isMissingCustomerField(ourColumn: string): boolean {
    return this.store.missingCustomerFields().some(
      m => m.ourColumn.toLowerCase() === ourColumn.toLowerCase()
    );
  }

  isMissingReceiverField(ourColumn: string): boolean {
    return this.store.missingReceiverFields().some(
      m => m.ourColumn.toLowerCase() === ourColumn.toLowerCase()
    );
  }

  labelFor(field: AgentFieldMappingModel): string {
    return field.ourColumn.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
  }
}
