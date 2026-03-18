import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ExchangeRateModel } from '../../../core/models/exchange-rate.models';
import { AgentModel } from '../../../core/models/agent.models';
import { CountryInfo } from '../../../core/models/common.models';
import { SearchableSelectDirective } from '../../../shared/searchable-select.directive';

interface RateForm {
  agentId: number | null;
  country: string;
  sourceCurrency: string;
  destinationCurrency: string;
  rate: number;
  margin: number;
}

function emptyForm(): RateForm {
  return {
    agentId: null, country: '', sourceCurrency: '', destinationCurrency: '',
    rate: 0, margin: 0,
  };
}

@Component({
  selector: 'app-exchange-rates',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatTableModule, MatButtonModule, MatIconModule,
    MatTooltipModule, MatChipsModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatCardModule, MatProgressSpinnerModule, DecimalPipe,
  ],
  templateUrl: './exchange-rates.component.html',
  styleUrl: './exchange-rates.component.scss',
})
export class ExchangeRatesComponent implements OnInit {
  rates: ExchangeRateModel[] = [];
  filteredRates: ExchangeRateModel[] = [];
  agents: AgentModel[] = [];
  countries: CountryInfo[] = [];
  currencies: string[] = [];
  displayedColumns = ['agentName', 'sourceCurrency', 'destinationCurrency', 'rate', 'margin', 'isActive', 'actions'];
  searchString = '';
  loading = true;

  // Detail popup
  showDetail = false;
  detailRate: ExchangeRateModel | null = null;

  // Form popup
  showFormPopup = false;
  isEditing = false;
  editingId = 0;
  saving = false;
  formError = '';
  form: RateForm = emptyForm();

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadAgents();
    this.loadCountries();
    this.loadCurrencies();
    this.loadRates();
  }

  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadRates(): void {
    this.loading = true;
    this.api.getRates().subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.rates = res.data;
          this.applyFilter();
        } else {
          this.rates = [];
          this.filteredRates = [];
          this.notify.error(res?.message || 'Failed to load rates.');
        }
        this.loading = false;
      },
      error: () => {
        this.rates = [];
        this.filteredRates = [];
        this.notify.error('Could not connect to server.');
        this.loading = false;
      },
    });
  }

  loadAgents(): void {
    this.api.getAgents().subscribe(res => {
      if (res?.success && res.data) {
        this.agents = res.data.filter(a => a.agentType === 'PayoutAgent');
      }
    });
  }

  loadCountries(): void {
    this.api.getCountries().subscribe(r => { if (r?.success && r.data) this.countries = r.data; });
  }

  loadCurrencies(): void {
    this.api.getCurrencies().subscribe(res => {
      if (res?.success && res.data) {
        this.currencies = res.data;
      }
    });
  }

  applyFilter(): void {
    const s = this.searchString.toLowerCase();
    this.filteredRates = !s
      ? [...this.rates]
      : this.rates.filter(r =>
          r.agentName.toLowerCase().includes(s) ||
          r.sourceCurrency.toLowerCase().includes(s) ||
          r.destinationCurrency.toLowerCase().includes(s) ||
          (r.country || '').toLowerCase().includes(s)
        );
  }

  // ---------------------------------------------------------------------------
  // Detail
  // ---------------------------------------------------------------------------
  viewDetail(rate: ExchangeRateModel): void {
    this.detailRate = rate;
    this.showDetail = true;
  }

  closeDetail(): void { this.showDetail = false; }

  // ---------------------------------------------------------------------------
  // Create / Edit
  // ---------------------------------------------------------------------------
  openCreatePopup(): void {
    this.form = emptyForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = '';
    this.showFormPopup = true;
  }

  openEditPopup(rate: ExchangeRateModel): void {
    this.isEditing = true;
    this.editingId = rate.id;
    this.form = {
      agentId: rate.agentId,
      country: rate.country || '',
      sourceCurrency: rate.sourceCurrency,
      destinationCurrency: rate.destinationCurrency,
      rate: rate.rate,
      margin: rate.margin || 0,
    };
    this.formError = '';
    this.showFormPopup = true;
  }

  closeFormPopup(): void { this.showFormPopup = false; }

  saveRate(): void {
    this.formError = '';
    const f = this.form;
    if (!f.agentId) { this.formError = 'Please select a payout agent.'; return; }
    if (!f.sourceCurrency || !f.destinationCurrency) { this.formError = 'Source and Destination currencies are required.'; return; }
    if (f.rate <= 0) { this.formError = 'Rate must be greater than zero.'; return; }

    this.saving = true;
    const dto: any = {
      agentId: f.agentId,
      country: f.country || null,
      sourceCurrency: f.sourceCurrency,
      destinationCurrency: f.destinationCurrency,
      rate: f.rate,
      margin: f.margin || 0,
    };

    const obs = this.isEditing
      ? this.api.updateRate(this.editingId, dto)
      : this.api.createRate(dto);

    obs.subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(this.isEditing ? 'Exchange rate updated.' : 'Exchange rate created.');
          this.showFormPopup = false;
          this.loadRates();
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
  deleteRate(rate: ExchangeRateModel): void {
    this.api.deleteRate(rate.id).subscribe(r => {
      if (r?.success) {
        this.notify.success('Exchange rate deleted.');
        this.loadRates();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }
}
