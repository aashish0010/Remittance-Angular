import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { ExportService } from '../../../core/services/export.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { CommissionRateModel } from '../../../core/models/commission.models';
import { AgentModel, PaymentMethodModel } from '../../../core/models/agent.models';
import { CountryInfo } from '../../../core/models/common.models';
import { SearchableSelectDirective } from '../../../shared/searchable-select.directive';

interface CommissionForm {
  agentId: number | null;
  payoutAgentId: number | null;
  sourceCountry: string;
  destinationCountry: string;
  paymentMethod: string;
  sourceCurrency: string;
  destinationCurrency: string;
  minAmount: number;
  maxAmount: number;
  commissionPercent: number;
  flatFee: number;
  commissionType: string;
  isActive: boolean;
}

function emptyForm(): CommissionForm {
  return {
    agentId: null,
    payoutAgentId: null,
    sourceCountry: '',
    destinationCountry: '',
    paymentMethod: '',
    sourceCurrency: '',
    destinationCurrency: '',
    minAmount: 0,
    maxAmount: 0,
    commissionPercent: 0,
    flatFee: 0,
    commissionType: 'Percentage',
    isActive: true,
  };
}

@Component({
  selector: 'app-commissions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DecimalPipe,
    SearchableSelectDirective,
  ],
  templateUrl: './commissions.component.html',
  styleUrl: './commissions.component.scss',
})
export class CommissionsComponent implements OnInit, OnDestroy {
  Math = Math;

  commissions: CommissionRateModel[] = [];
  displayedColumns = [
    'sendingAgent', 'payoutAgent', 'sourceCountry', 'destCountry',
    'currencyPair', 'amountRange', 'commission', 'status', 'actions',
  ];
  searchString = '';
  loading = true;

  // Server-side pagination
  pageIndex = 0;
  pageSize = 20;
  totalCount = 0;

  // Server-side search with debounce
  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  // Reference data
  sendingAgents: AgentModel[] = [];
  payoutAgents: AgentModel[] = [];
  countries: CountryInfo[] = [];
  currencies: string[] = [];
  paymentMethods: PaymentMethodModel[] = [];

  // Popup
  showPopup = false;
  isEditing = false;
  editingId = 0;
  saving = false;
  formError = '';
  form: CommissionForm = emptyForm();

  constructor(
    private api: ApiService,
    private exportService: ExportService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadAgents();
    this.loadReferenceData();

    this.searchSubject.pipe(
      debounceTime(400),
      takeUntil(this.destroy$),
    ).subscribe(() => {
      this.pageIndex = 0;
      this.loadCommissions();
    });

    this.loadCommissions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ---------------------------------------------------------------------------
  // Reference data
  // ---------------------------------------------------------------------------
  private loadReferenceData(): void {
    this.api.getCountries().subscribe(r => { if (r?.success && r.data) this.countries = r.data; });
    this.api.getCurrencies().subscribe(r => { if (r?.success && r.data) this.currencies = r.data; });
    this.api.getPaymentMethods().subscribe(r => { if (r?.success && r.data) this.paymentMethods = r.data; });
  }

  loadAgents(): void {
    this.api.getAgents().subscribe(r => {
      if (r?.success && r.data) {
        this.sendingAgents = r.data.filter(a => a.agentType === 'SendingAgent');
        this.payoutAgents = r.data.filter(a => a.agentType === 'PayoutAgent');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Commissions CRUD
  // ---------------------------------------------------------------------------
  loadCommissions(): void {
    this.loading = true;
    this.api.getCommissionsPaged({
      page: this.pageIndex + 1,
      pageSize: this.pageSize,
      search: this.searchString,
    }).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.commissions = res.data.items ?? [];
          this.totalCount = res.data.totalCount ?? 0;
        } else {
          this.commissions = [];
          this.totalCount = 0;
          this.notify.error(res?.message || 'Failed to load commissions.');
        }
        this.loading = false;
      },
      error: () => {
        this.commissions = [];
        this.totalCount = 0;
        this.notify.error('Could not connect to server.');
        this.loading = false;
      },
    });
  }

  onSearchChange(): void {
    this.searchSubject.next(this.searchString);
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.pageIndex = 0;
    this.loadCommissions();
  }

  goToPage(index: number): void {
    this.pageIndex = index;
    this.loadCommissions();
  }

  onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCommissions();
  }

  exportData(format: 'excel' | 'csv'): void {
    this.exportService.export('api/admin/commissions/export', { search: this.searchString }, format);
  }

  // ---------------------------------------------------------------------------
  // Create / Edit popup
  // ---------------------------------------------------------------------------
  openCreate(): void {
    this.form = emptyForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = '';
    this.showPopup = true;
  }

  openEdit(c: CommissionRateModel): void {
    const isFlat = (c.flatFee ?? 0) > 0 && c.commissionPercent <= 0;
    this.form = {
      agentId: c.agentId ?? null,
      payoutAgentId: c.payoutAgentId,
      sourceCountry: c.sourceCountry || '',
      destinationCountry: c.destinationCountry || '',
      paymentMethod: c.paymentMethod || '',
      sourceCurrency: c.sourceCurrency || '',
      destinationCurrency: c.destinationCurrency || '',
      minAmount: c.minAmount,
      maxAmount: c.maxAmount,
      commissionPercent: c.commissionPercent,
      flatFee: c.flatFee ?? 0,
      commissionType: isFlat ? 'Flat' : 'Percentage',
      isActive: c.isActive,
    };
    this.isEditing = true;
    this.editingId = c.id;
    this.formError = '';
    this.showPopup = true;
  }

  closePopup(): void { this.showPopup = false; }

  saveCommission(): void {
    this.formError = '';
    if (!this.form.payoutAgentId) { this.formError = 'Payout Agent is required.'; return; }
    if (!this.form.commissionType) { this.formError = 'Commission Type is required.'; return; }

    // Validate and zero-out the unused field
    if (this.form.commissionType === 'Percentage') {
      if (!this.form.commissionPercent || this.form.commissionPercent <= 0) {
        this.formError = 'Commission Percent must be greater than 0.';
        return;
      }
      this.form.flatFee = 0;
    } else if (this.form.commissionType === 'Flat') {
      if (!this.form.flatFee || this.form.flatFee <= 0) {
        this.formError = 'Flat Fee must be greater than 0.';
        return;
      }
      this.form.commissionPercent = 0;
    }

    this.saving = true;
    const dto: any = {
      agentId: this.form.agentId,
      payoutAgentId: this.form.payoutAgentId,
      sourceCountry: this.form.sourceCountry || null,
      destinationCountry: this.form.destinationCountry || null,
      paymentMethod: this.form.paymentMethod || null,
      sourceCurrency: this.form.sourceCurrency || null,
      destinationCurrency: this.form.destinationCurrency || null,
      minAmount: this.form.minAmount,
      maxAmount: this.form.maxAmount,
      commissionPercent: this.form.commissionPercent,
      flatFee: this.form.flatFee,
      isActive: this.form.isActive,
    };

    const obs = this.isEditing
      ? this.api.updateCommission(this.editingId, dto)
      : this.api.createCommission(dto);

    obs.subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(this.isEditing ? 'Commission updated.' : 'Commission created.');
          this.showPopup = false;
          this.loadCommissions();
        } else {
          this.formError = res?.message || 'Failed.';
        }
        this.saving = false;
      },
      error: () => {
        this.formError = 'Server error.';
        this.saving = false;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Delete
  // ---------------------------------------------------------------------------
  deleteCommission(c: CommissionRateModel): void {
    this.api.deleteCommission(c.id).subscribe(r => {
      if (r?.success) {
        this.notify.success('Commission deleted.');
        this.loadCommissions();
      } else {
        this.notify.error(r?.message || 'Failed to delete commission.');
      }
    });
  }
}
