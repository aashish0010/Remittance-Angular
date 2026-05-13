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
  receiverForm = new FormGroup({
    fullName: new FormControl(''), phone: new FormControl(''), email: new FormControl(''),
    country: new FormControl(''), city: new FormControl(''), relationship: new FormControl(''),
    bankName: new FormControl(''), bankCode: new FormControl(''), accountNumber: new FormControl(''),
    branchName: new FormControl(''), branchCode: new FormControl(''),
    gender: new FormControl(''), address: new FormControl(''), postalCode: new FormControl(''),
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
      fieldMappings: nav.fieldMappings ?? [],
    });

    this.loadData(nav.partner.payoutAgentId, nav.paymentMethodName);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Data loading ──────────────────────────────────────────────────────────
  loadData(payoutPartnerId: number, paymentMethod?: string): void {
    // 1. Reload field mappings filtered by payment method + destination country
    const country = this.store.receiverCountry() || undefined;
    this.api.getAgentFieldMappings(payoutPartnerId, paymentMethod, country)
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
    this.loadPayoutInfrastructure(payoutPartnerId, paymentMethod ?? '');
  }

  private loadPayoutInfrastructure(agentId: number, methodName: string): void {
    const m = methodName.toLowerCase();
    this.payoutBanks = [];
    this.payoutCashLocations = [];
    this.payoutLocations = [];

    if (m.includes('bank')) {
      this.api.getAgentBanksForPayout(agentId, this.store.receiverCountry() || undefined)
        .pipe(takeUntil(this.destroy$))
        .subscribe((r: any) => { if (r.success) this.payoutBanks = r.data ?? []; });
    } else if (m.includes('cash') || m.includes('pickup')) {
      this.api.getAgentCashLocations(agentId)
        .pipe(takeUntil(this.destroy$))
        .subscribe((r: any) => { if (r.success) this.payoutCashLocations = r.data ?? []; });
    } else if (m.includes('wallet') || m.includes('mobile')) {
      this.api.getAgentWalletLocations(agentId)
        .pipe(takeUntil(this.destroy$))
        .subscribe((r: any) => { if (r.success) this.payoutLocations = r.data ?? []; });
    } else {
      this.api.getAgentLocationsForPayout(agentId)
        .pipe(takeUntil(this.destroy$))
        .subscribe((r: any) => { if (r.success) this.payoutLocations = r.data ?? []; });
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

    if (c.dateOfBirth) {
      const age = Math.floor((Date.now() - new Date(c.dateOfBirth).getTime()) / 31557600000);
      this.store.setDobWarning(
        age < (this.appSettings.minimumAge ?? 18)
          ? `Customer is under ${this.appSettings.minimumAge ?? 18} years old.`
          : ''
      );
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
  }

  private loadReceiverPayoutDetails(r: ReceiverModel): void {
    const methodName = this.store.paymentMethodName().toLowerCase();
    const type = methodName.includes('bank') ? 'bank'
      : methodName.includes('cash') ? 'cash' : 'wallet';
    this.api.getReceiverPaymentDetails(r.id, type, this.store.receiverCountry())
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        if (res.success) this.savedPayoutDetails = res.data ?? [];
      });
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
    this.savingMissingCustomer = true;
    this.api.updateAgentCustomer(c.id, this.missingCustomerData).subscribe({
      next: (r: any) => {
        this.savingMissingCustomer = false;
        if (r.success) {
          this.store.setSelectedCustomer(r.data);
          this.store.setMissingCustomerFields([]);
          this.showMissingCustomerForm = false;
          this.notify.success('Customer profile updated.');
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
    this.savingMissingReceiver = true;
    this.api.updateAgentReceiver(rv.id, this.missingReceiverData).subscribe({
      next: (r: any) => {
        this.savingMissingReceiver = false;
        if (r.success) {
          this.store.setSelectedReceiver(r.data);
          this.store.setMissingReceiverFields([]);
          this.showMissingReceiverForm = false;
          this.notify.success('Receiver profile updated.');
        } else this.notify.error(r.message ?? 'Update failed.');
      },
      error: () => { this.savingMissingReceiver = false; this.notify.error('Update failed.'); }
    });
  }

  // ── New customer create ───────────────────────────────────────────────────
  saveNewCustomer(): void {
    const v = this.customerForm.value;
    if (!v.fullName || !v.phone || !v.nationality || !v.country || !v.idDocumentType || !v.idDocumentNumber) {
      this.notify.error('Please fill all required fields.'); return;
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
    this.savingReceiver = true;
    this.api.createAgentReceiver({ ...v, customerId: c.id }).subscribe({
      next: (r: any) => {
        this.savingReceiver = false;
        if (r.success) {
          this.receivers = [r.data, ...this.receivers];
          this.selectReceiver(r.data);
          this.showCreateReceiver = false;
          this.receiverForm.reset();
        } else this.notify.error(r.message ?? 'Failed to create receiver.');
      },
      error: () => { this.savingReceiver = false; this.notify.error('Failed to create receiver.'); }
    });
  }

  // ── Step navigation ───────────────────────────────────────────────────────
  goToCustomerSubStep(): void {
    this.store.setSubStep('receiver');
  }

  proceedToCompliance(): void {
    if (!this.store.canProceedStep1()) return;
    this.store.nextStep(); // step 2
  }

  proceedToReview(): void {
    this.store.nextStep(); // step 3
  }

  goBack(): void {
    if (this.store.currentStep() === 0) { this.router.navigate(['/agent/send']); return; }
    this.store.prevStep();
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
      sendAmount: this.store.sendAmount(),
      exchangeRate: this.store.exchangeRate(),
      receiveAmount: this.store.receiveAmount(),
      sendCurrency: this.store.sendCurrency(),
      receiveCurrency: this.store.receiveCurrency(),
      receiverCountryIso2: this.store.receiverCountryIso2(),
      receiverCountryIso3: this.store.receiverCountryIso3(),
      paymentMethod: this.resolvePaymentMethodEnum(this.store.paymentMethodName()),
      paymentMethodName: this.store.paymentMethodName(),
      payoutMethod: this.resolvePaymentMethodEnum(this.store.paymentMethodName()),
      payoutMethodName: this.store.paymentMethodName(),
      payoutPartnerId: partner.payoutAgentId,
      customerId: c.id, receiverId: rv.id,
      purpose: this.purpose, sourceOfFunds: this.sourceOfFunds, relationship: this.relationship,
      quoteId: this.store.quoteId(),
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
    };
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

  isBankTransfer(): boolean { return this.store.paymentMethodName().toLowerCase().includes('bank'); }
  isCashTransfer(): boolean {
    const n = this.store.paymentMethodName().toLowerCase();
    return n.includes('cash') || n.includes('pickup');
  }
  isWalletTransfer(): boolean {
    const n = this.store.paymentMethodName().toLowerCase();
    return n.includes('wallet') || n.includes('mobile');
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
