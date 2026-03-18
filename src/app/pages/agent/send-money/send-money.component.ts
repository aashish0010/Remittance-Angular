import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { SendTransactionModel, TransactionResult, CalculateTransferRequest } from '../../../core/models/transaction.models';
import { CountryInfo } from '../../../core/models/common.models';
import { AgentModel, PaymentMethodModel, AgentBankModel, AgentBankBranchModel, AgentLocationModel } from '../../../core/models/agent.models';
import { CustomerModel, ReceiverModel } from '../../../core/models/customer.models';
import { PaymentCorridorModel, CorridorPayoutPartnerModel } from '../../../core/models/routing.models';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SearchableSelectDirective } from '../../../shared/searchable-select.directive';

@Component({
  selector: 'app-send-money',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatDatepickerModule,
    DecimalPipe,
    SearchableSelectDirective,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './send-money.component.html',
  styleUrl: './send-money.component.scss',
})
export class SendMoneyComponent implements OnInit {
  // Step tracking
  step = 0;
  submitting = false;
  error = '';
  successResult: TransactionResult | null = null;

  // Agent profile
  agentProfile: AgentModel | null = null;

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
  newCustomer = this.emptyCustomerForm();
  customerFormError = '';
  savingCustomer = false;

  // Step 2: Amount & Calculation
  sendAmount = 0;
  senderCountry = '';
  senderCurrency = '';
  receiverCountry = '';
  receiverCurrency = '';
  selectedPaymentMethodId: number | null = null;

  // Route matching (internal — not exposed to user as "routing")
  matchedCorridor: PaymentCorridorModel | null = null;
  matchedPartners: CorridorPayoutPartnerModel[] = [];
  selectedPartnerId: number | null = null;
  selectedPartner: CorridorPayoutPartnerModel | null = null;
  availablePayoutModes: PaymentMethodModel[] = [];
  selectedPayoutModeId: number | null = null;
  routeError = '';

  // Calculation results (from backend)
  exchangeRate = 0;
  serviceCharge = 0;
  totalPayable = 0;
  receiveAmount = 0;
  loadingCalc = false;
  calculationDone = false;
  calcError = '';

  // Step 3: Receiver
  receivers: ReceiverModel[] = [];
  filteredReceivers: ReceiverModel[] = [];
  receiverSearch = '';
  selectedReceiverId: number | null = null;
  selectedReceiver: ReceiverModel | null = null;
  showCreateReceiver = false;
  newReceiver = this.emptyReceiverForm();
  receiverFormError = '';
  savingReceiver = false;

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

  idTypes = ['Passport', 'National ID', 'Driver License'];

  private calcTrigger$ = new Subject<void>();

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadReferenceData();

    this.calcTrigger$.pipe(debounceTime(400)).subscribe(() => {
      this.calculateViaBackend();
    });
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
  }

  clearSelectedCustomer(): void {
    this.selectedCustomerId = null;
    this.selectedCustomer = null;
  }

  toggleCreateCustomer(): void {
    this.showCreateCustomer = !this.showCreateCustomer;
    this.customerFormError = '';
    if (this.showCreateCustomer) {
      this.newCustomer = this.emptyCustomerForm();
    }
  }

  saveNewCustomer(): void {
    this.customerFormError = '';
    if (!this.newCustomer.fullName?.trim()) { this.customerFormError = 'Full name is required.'; return; }
    if (!this.newCustomer.phone?.trim()) { this.customerFormError = 'Phone is required.'; return; }
    if (!this.newCustomer.country?.trim()) { this.customerFormError = 'Country is required.'; return; }

    this.savingCustomer = true;
    this.api.createAgentCustomer(this.newCustomer).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.customers.push(res.data);
          this.filteredCustomers = [...this.customers];
          this.selectCustomer(res.data);
          this.showCreateCustomer = false;
          this.snackBar.open('Customer created!', 'Close', { duration: 3000 });
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

  emptyCustomerForm() {
    return {
      fullName: '', email: '', phone: '', dateOfBirth: '', gender: '',
      nationality: '', country: '', city: '', state: '', postalCode: '',
      address: '', idDocumentType: '', idDocumentNumber: '',
      docIssueDate: '', docExpiryDate: '', docIssuingCountry: '',
    };
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
    this.findRoute();
    this.triggerCalculation();
  }

  onAmountChange(): void {
    this.triggerCalculation();
  }

  private triggerCalculation(): void {
    // Reset calculation when inputs change
    this.calculationDone = false;
    this.calcError = '';
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

  /**
   * Call backend to calculate exchange rate, receive amount, service charge, and total payable.
   */
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
    };

    this.api.calculateTransfer(req).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.exchangeRate = res.data.exchangeRate;
          this.receiveAmount = res.data.receiveAmount;
          this.serviceCharge = res.data.serviceCharge;
          this.totalPayable = res.data.totalPayable;
          this.calculationDone = true;
          this.calcError = '';
        } else {
          this.calcError = res?.message || 'Calculation failed.';
          this.calculationDone = false;
        }
        this.loadingCalc = false;
      },
      error: err => {
        this.calcError = err?.error?.message || 'Failed to calculate. Please try again.';
        this.calculationDone = false;
        this.loadingCalc = false;
      },
    });
  }

  /**
   * Auto-find corridor and payout partner based on:
   * - Sender country/currency (from agent profile)
   * - Receiver country/currency (from selection)
   * - Selected payment method
   */
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
    } else {
      this.routeError = `The selected payment method is not available for ${this.receiverCountry}. Please choose a different method.`;
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
      // Must match destination country
      if (r.country !== this.receiverCountry) return false;
      // Must match a bank/location/wallet from the selected payment method's payout partner
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
  }

  clearSelectedReceiver(): void {
    this.selectedReceiverId = null;
    this.selectedReceiver = null;
  }

  toggleCreateReceiver(): void {
    this.showCreateReceiver = !this.showCreateReceiver;
    this.receiverFormError = '';
    if (this.showCreateReceiver) {
      this.newReceiver = this.emptyReceiverForm();
      this.newReceiver.country = this.receiverCountry;
    }
  }

  saveNewReceiver(): void {
    this.receiverFormError = '';
    if (!this.newReceiver.fullName?.trim()) { this.receiverFormError = 'Full name is required.'; return; }
    if (!this.newReceiver.phone?.trim()) { this.receiverFormError = 'Phone is required.'; return; }

    this.savingReceiver = true;
    const dto = { ...this.newReceiver, customerId: this.selectedCustomerId };
    this.api.createAgentReceiver(dto).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.receivers.push(res.data);
          this.filterReceivers();
          this.selectReceiver(res.data);
          this.showCreateReceiver = false;
          this.snackBar.open('Receiver created!', 'Close', { duration: 3000 });
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

  emptyReceiverForm() {
    return {
      fullName: '', phone: '', email: '', country: '', city: '',
      bankName: '', accountNumber: '', relationship: '',
    };
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

  // ---------------------------------------------------------------------------
  // Branch Popup
  // ---------------------------------------------------------------------------

  openBranchPopup(): void {
    const bankName = this.newReceiver.bankName || (this.selectedReceiver?.bankName);
    if (!bankName) return;
    const bank = this.payoutBanks.find(b => b.bankName === bankName);
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
    return !!this.selectedCustomer;
  }

  canProceedStep2(): boolean {
    return this.calculationDone && !!this.selectedPartner && !!this.selectedPayoutModeId && this.sendAmount > 0 && !!this.selectedPaymentMethodId;
  }

  canProceedStep3(): boolean {
    return !!this.selectedReceiver;
  }

  nextStep(): void {
    this.error = '';
    if (this.step === 0 && !this.canProceedStep1()) {
      this.error = 'Please select or create a customer first.';
      return;
    }
    if (this.step === 1 && !this.canProceedStep2()) {
      this.error = 'Please complete all transfer details.';
      return;
    }
    if (this.step === 1) {
      this.loadReceivers();
    }
    if (this.step === 2 && !this.canProceedStep3()) {
      this.error = 'Please select or create a receiver.';
      return;
    }
    this.step++;
  }

  prevStep(): void {
    if (this.step > 0) this.step--;
  }

  // ---------------------------------------------------------------------------
  // Submit Transaction
  // ---------------------------------------------------------------------------

  submitTransaction(): void {
    this.error = '';
    if (!this.selectedCustomer || !this.selectedReceiver || !this.selectedPartner) {
      this.error = 'Missing required data.';
      return;
    }

    this.submitting = true;

    // Resolve bank/location/branch details based on payout method
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

    if (this.isBankTransfer() && selectedBank) {
      // Bank transfer: use bank details
      receiverBankName = receiverBankName || selectedBank.bankName;
      receiverBankCode = selectedBank.bankCode || '';
      if (this.selectedBranch) {
        receiverBranchName = this.selectedBranch.branchName;
        receiverBranchCode = this.selectedBranch.branchCode || '';
      }
    } else if (this.isCashTransfer() && selectedLocation) {
      // Cash pickup: location name → bankName, location code → bankCode
      receiverBankName = receiverBankName || selectedLocation.locationName;
      receiverBankCode = selectedLocation.locationCode || '';
    } else if (this.isWalletTransfer() && selectedLocation) {
      // Wallet/Mobile money: location name → bankName, location code → bankCode
      receiverBankName = receiverBankName || selectedLocation.locationName;
      receiverBankCode = selectedLocation.locationCode || '';
    } else if (selectedBank) {
      // Fallback to bank if available
      receiverBankName = receiverBankName || selectedBank.bankName;
      receiverBankCode = selectedBank.bankCode || '';
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
      sendAmount: this.sendAmount,
      sendCurrency: this.senderCurrency,
      receiveCurrency: this.receiverCurrency,
      paymentMethod: this.selectedPaymentMethodId || 0,
      payoutMethod: this.selectedPayoutModeId || 0,
      paymentMethodName: paymentMethodName,
      payoutMethodName: payoutMethodName,
      payoutPartnerId: this.selectedPartner?.payoutAgentId,
      purpose: '',
    };

    this.api.sendTransaction(model).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.successResult = res.data;
          this.step = 3;
        } else {
          this.error = res?.message || 'Failed to submit transaction.';
        }
        this.submitting = false;
      },
      error: err => {
        this.error = `Error: ${err.message || 'Unknown error'}`;
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
        <tr><td>Status</td><td>${tx.status}</td></tr>
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

  dismissError(): void {
    this.error = '';
  }

  startNewTransaction(): void {
    this.step = 0;
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
    this.error = '';
    this.selectedBranch = null;
    this.showBranchPopup = false;
    if (this.agentProfile) {
      this.senderCountry = this.agentProfile.country;
      this.senderCurrency = this.agentProfile.currency || '';
    }
  }
}
