import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchableSelectDirective } from '../../../shared/searchable-select.directive';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { PaymentCorridorModel, CorridorPayoutPartnerModel } from '../../../core/models/routing.models';
import { AgentModel, PaymentMethodModel } from '../../../core/models/agent.models';
import { CountryInfo } from '../../../core/models/common.models';

interface CorridorForm {
  sendingAgentId: number | null;
  sourceCountry: string;
  sourceCurrency: string;
  destinationCountry: string;
  destinationCurrency: string;
}

interface PartnerForm {
  payoutAgentId: number | null;
  paymentModeIds: number[];
}

function emptyCorridorForm(): CorridorForm {
  return { sendingAgentId: null, sourceCountry: '', sourceCurrency: '', destinationCountry: '', destinationCurrency: '' };
}

function emptyPartnerForm(): PartnerForm {
  return { payoutAgentId: null, paymentModeIds: [] };
}

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    SearchableSelectDirective,
  ],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss',
})
export class RoutingComponent implements OnInit {
  corridors: PaymentCorridorModel[] = [];
  filteredCorridors: PaymentCorridorModel[] = [];
  displayedColumns = [
    'sendingAgent', 'sourceCountry', 'sourceCurrency', 'destCountry',
    'destCurrency', 'partners', 'status', 'actions',
  ];
  searchString = '';
  loading = true;
  // Reference data
  sendingAgents: AgentModel[] = [];
  payoutAgents: AgentModel[] = [];
  countries: CountryInfo[] = [];
  currencies: string[] = [];
  paymentMethods: PaymentMethodModel[] = [];

  // Corridor popup
  showCorridorPopup = false;
  isEditingCorridor = false;
  editingCorridorId = 0;
  savingCorridor = false;
  corridorFormError = '';
  corridorForm: CorridorForm = emptyCorridorForm();

  // Partner management popup
  showPartnerPopup = false;
  partnerCorridor: PaymentCorridorModel | null = null;
  partnerMessage = '';
  partnerSeverity: 'success' | 'error' | 'info' = 'info';

  // Partner form
  showPartnerForm = false;
  isEditingPartner = false;
  editingPartnerId = 0;
  partnerFormError = '';
  partnerForm: PartnerForm = emptyPartnerForm();

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadAgents();
    this.loadReferenceData();
    this.loadCorridors();
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
  // Corridors CRUD
  // ---------------------------------------------------------------------------
  loadCorridors(): void {
    this.loading = true;
    this.api.getCorridors().subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.corridors = res.data;
          this.applyFilter();
        } else {
          this.corridors = [];
          this.filteredCorridors = [];
          this.notify.error(res?.message || 'Failed to load corridors.');
        }
        this.loading = false;
      },
      error: () => {
        this.corridors = [];
        this.filteredCorridors = [];
        this.notify.error('Could not connect to server.');
        this.loading = false;
      },
    });
  }

  applyFilter(): void {
    const s = this.searchString.toLowerCase();
    this.filteredCorridors = !s
      ? [...this.corridors]
      : this.corridors.filter(c =>
          (c.sendingAgentName || '').toLowerCase().includes(s) ||
          c.sourceCountry.toLowerCase().includes(s) ||
          c.destinationCountry.toLowerCase().includes(s) ||
          c.sourceCurrency.toLowerCase().includes(s) ||
          c.destinationCurrency.toLowerCase().includes(s)
        );
  }

  // ---------------------------------------------------------------------------
  // Corridor Create / Edit popup
  // ---------------------------------------------------------------------------
  openCreateCorridor(): void {
    this.corridorForm = emptyCorridorForm();
    this.isEditingCorridor = false;
    this.editingCorridorId = 0;
    this.corridorFormError = '';
    this.showCorridorPopup = true;
  }

  openEditCorridor(c: PaymentCorridorModel): void {
    this.corridorForm = {
      sendingAgentId: c.sendingAgentId ?? null,
      sourceCountry: c.sourceCountry,
      sourceCurrency: c.sourceCurrency,
      destinationCountry: c.destinationCountry,
      destinationCurrency: c.destinationCurrency,
    };
    this.isEditingCorridor = true;
    this.editingCorridorId = c.id;
    this.corridorFormError = '';
    this.showCorridorPopup = true;
  }

  closeCorridorPopup(): void { this.showCorridorPopup = false; }

  saveCorridor(): void {
    this.corridorFormError = '';
    const f = this.corridorForm;
    if (!f.sourceCountry || !f.sourceCurrency || !f.destinationCountry || !f.destinationCurrency) {
      this.corridorFormError = 'All country and currency fields are required.';
      return;
    }

    this.savingCorridor = true;
    const dto: any = {
      sendingAgentId: f.sendingAgentId,
      sourceCountry: f.sourceCountry,
      sourceCurrency: f.sourceCurrency,
      destinationCountry: f.destinationCountry,
      destinationCurrency: f.destinationCurrency,
    };

    const obs = this.isEditingCorridor
      ? this.api.updateCorridor(this.editingCorridorId, dto)
      : this.api.createCorridor(dto);

    obs.subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(this.isEditingCorridor ? 'Corridor updated.' : 'Corridor created.');
          this.showCorridorPopup = false;
          this.loadCorridors();
        } else {
          this.corridorFormError = res?.message || 'Failed.';
        }
        this.savingCorridor = false;
      },
      error: () => {
        this.corridorFormError = 'Server error.';
        this.savingCorridor = false;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Toggle / Delete corridor
  // ---------------------------------------------------------------------------
  toggleCorridor(c: PaymentCorridorModel): void {
    this.api.toggleCorridor(c.id).subscribe(r => {
      if (r?.success) {
        this.notify.success(`Corridor ${c.isActive ? 'deactivated' : 'activated'}.`);
        this.loadCorridors();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  deleteCorridor(c: PaymentCorridorModel): void {
    this.api.deleteCorridor(c.id).subscribe(r => {
      if (r?.success) {
        this.notify.success('Corridor deleted.');
        this.loadCorridors();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Partner Management popup
  // ---------------------------------------------------------------------------
  openPartnerManagement(corridor: PaymentCorridorModel): void {
    this.partnerCorridor = corridor;
    this.partnerMessage = '';
    this.showPartnerForm = false;
    this.showPartnerPopup = true;
  }

  closePartnerPopup(): void { this.showPartnerPopup = false; }

  // ---------------------------------------------------------------------------
  // Partner CRUD
  // ---------------------------------------------------------------------------
  openAddPartner(): void {
    this.partnerForm = emptyPartnerForm();
    this.isEditingPartner = false;
    this.editingPartnerId = 0;
    this.partnerFormError = '';
    this.showPartnerForm = true;
  }

  openEditPartner(p: CorridorPayoutPartnerModel): void {
    this.partnerForm = {
      payoutAgentId: p.payoutAgentId,
      paymentModeIds: [...p.paymentModeIds],
    };
    this.isEditingPartner = true;
    this.editingPartnerId = p.id;
    this.partnerFormError = '';
    this.showPartnerForm = true;
  }

  closePartnerForm(): void { this.showPartnerForm = false; }

  savePartner(): void {
    this.partnerFormError = '';
    if (!this.partnerForm.payoutAgentId) { this.partnerFormError = 'Payout Agent is required.'; return; }
    if (!this.partnerForm.paymentModeIds.length) { this.partnerFormError = 'Select at least one payment mode.'; return; }

    const dto: any = {
      paymentCorridorId: this.partnerCorridor?.id,
      payoutAgentId: this.partnerForm.payoutAgentId,
      paymentModeIds: this.partnerForm.paymentModeIds,
    };

    const done = (msg: string) => {
      this.partnerMessage = msg;
      this.partnerSeverity = 'success';
      this.showPartnerForm = false;
      this.refreshPartnerCorridor();
    };

    if (this.isEditingPartner) {
      this.api.updateCorridorPartner(this.editingPartnerId, dto).subscribe(r => {
        if (r?.success) done('Partner updated.');
        else this.partnerFormError = r?.message || 'Failed.';
      });
    } else {
      this.api.addCorridorPartner(dto).subscribe(r => {
        if (r?.success) done('Partner added.');
        else this.partnerFormError = r?.message || 'Failed.';
      });
    }
  }

  togglePartner(p: CorridorPayoutPartnerModel): void {
    this.api.toggleCorridorPartner(p.id).subscribe(r => {
      if (r?.success) {
        this.partnerMessage = `Partner ${p.isActive ? 'deactivated' : 'activated'}.`;
        this.partnerSeverity = 'success';
        this.refreshPartnerCorridor();
      } else {
        this.partnerMessage = r?.message || 'Failed.';
        this.partnerSeverity = 'error';
      }
    });
  }

  deletePartner(p: CorridorPayoutPartnerModel): void {
    this.api.deleteCorridorPartner(p.id).subscribe(r => {
      if (r?.success) {
        this.partnerMessage = 'Partner deleted.';
        this.partnerSeverity = 'success';
        this.refreshPartnerCorridor();
      } else {
        this.partnerMessage = r?.message || 'Failed.';
        this.partnerSeverity = 'error';
      }
    });
  }

  private refreshPartnerCorridor(): void {
    this.api.getCorridors().subscribe(r => {
      if (r?.success && r.data) {
        this.corridors = r.data;
        this.applyFilter();
        if (this.partnerCorridor) {
          this.partnerCorridor = this.corridors.find(c => c.id === this.partnerCorridor!.id) ?? null;
        }
      }
    });
  }
}
