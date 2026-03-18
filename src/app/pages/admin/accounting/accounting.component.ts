import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
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
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AgentAccountingSummary, AgentLimitAdjustmentModel, AgentCommissionModel } from '../../../core/models/agent.models';

interface AdjustmentForm {
  amount: number;
  durationDays: number | null;
  notes: string;
}

interface CommissionSetupForm {
  commissionType: string;
  commissionValue: number;
  isActive: boolean;
}

function emptyAdjustmentForm(): AdjustmentForm {
  return { amount: 0, durationDays: null, notes: '' };
}

function emptyCommissionSetupForm(): CommissionSetupForm {
  return { commissionType: 'Percentage', commissionValue: 0, isActive: true };
}

@Component({
  selector: 'app-accounting',
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
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './accounting.component.html',
  styleUrl: './accounting.component.scss',
})
export class AccountingComponent implements OnInit {
  summaries: AgentAccountingSummary[] = [];
  filteredSummaries: AgentAccountingSummary[] = [];
  displayedColumns = ['businessName', 'agentType', 'commission', 'effectiveLimit', 'available', 'status', 'actions'];
  searchString = '';
  loading = true;

  // Detail popup
  showDetailPopup = false;
  detailAgent: AgentAccountingSummary | null = null;

  // Adjustments popup
  showAdjustmentPopup = false;
  adjustmentAgent: AgentAccountingSummary | null = null;
  adjustments: AgentLimitAdjustmentModel[] = [];

  // Adjustment form
  showAdjustmentForm = false;
  adjustmentFormError = '';
  adjustmentForm: AdjustmentForm = emptyAdjustmentForm();

  // Commission setup popup
  showCommissionPopup = false;
  commissionAgent: AgentAccountingSummary | null = null;
  agentCommission: AgentCommissionModel | null = null;
  commissionFormError = '';
  commissionForm: CommissionSetupForm = emptyCommissionSetupForm();
  savingCommission = false;

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadAccountingSummaries();
  }

  // ---------------------------------------------------------------------------
  // Summaries
  // ---------------------------------------------------------------------------
  loadAccountingSummaries(): void {
    this.loading = true;
    this.api.getAccountingSummaries().subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.summaries = res.data;
          this.applyFilter();
        } else {
          this.summaries = [];
          this.filteredSummaries = [];
          this.notify.error(res?.message || 'Failed to load data.');
        }
        this.loading = false;
      },
      error: () => {
        this.summaries = [];
        this.filteredSummaries = [];
        this.notify.error('Could not connect to server.');
        this.loading = false;
      },
    });
  }

  applyFilter(): void {
    const s = this.searchString.toLowerCase();
    this.filteredSummaries = !s
      ? [...this.summaries]
      : this.summaries.filter(a =>
          a.businessName.toLowerCase().includes(s) ||
          a.country.toLowerCase().includes(s)
        );
  }

  // ---------------------------------------------------------------------------
  // Detail popup
  // ---------------------------------------------------------------------------
  viewDetail(agent: AgentAccountingSummary): void {
    this.detailAgent = agent;
    this.showDetailPopup = true;
  }

  closeDetailPopup(): void { this.showDetailPopup = false; }

  // ---------------------------------------------------------------------------
  // Adjustments popup
  // ---------------------------------------------------------------------------
  openAdjustments(agent: AgentAccountingSummary): void {
    this.adjustmentAgent = agent;
    this.showAdjustmentForm = false;
    this.loadAdjustments(agent.agentId);
    this.showAdjustmentPopup = true;
  }

  closeAdjustmentPopup(): void { this.showAdjustmentPopup = false; }

  loadAdjustments(agentId: number): void {
    this.api.getAgentAdjustments(agentId).subscribe(r => {
      if (r?.success && r.data) this.adjustments = r.data;
      else this.adjustments = [];
    });
  }

  openAdjustmentForm(): void {
    this.adjustmentForm = emptyAdjustmentForm();
    this.adjustmentFormError = '';
    this.showAdjustmentForm = true;
  }

  closeAdjustmentForm(): void { this.showAdjustmentForm = false; }

  createAdjustment(): void {
    this.adjustmentFormError = '';
    const f = this.adjustmentForm;
    if (!f.amount) { this.adjustmentFormError = 'Amount cannot be zero.'; return; }

    const dto: any = {
      agentId: this.adjustmentAgent?.agentId,
      amount: f.amount,
      durationDays: f.durationDays,
      notes: f.notes || null,
    };

    this.api.createAdjustment(dto).subscribe(r => {
      if (r?.success) {
        this.notify.success('Adjustment created.');
        this.showAdjustmentForm = false;
        if (this.adjustmentAgent) this.loadAdjustments(this.adjustmentAgent.agentId);
        this.loadAccountingSummaries();
      } else {
        this.adjustmentFormError = r?.message || 'Failed.';
      }
    });
  }

  deactivateAdjustment(adj: AgentLimitAdjustmentModel): void {
    this.api.deactivateAdjustment(adj.id).subscribe(r => {
      if (r?.success) {
        this.notify.success('Adjustment deactivated.');
        if (this.adjustmentAgent) this.loadAdjustments(this.adjustmentAgent.agentId);
        this.loadAccountingSummaries();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Commission Setup popup
  // ---------------------------------------------------------------------------
  openCommissionSetup(agent: AgentAccountingSummary): void {
    this.commissionAgent = agent;
    this.commissionFormError = '';
    this.agentCommission = null;
    this.commissionForm = emptyCommissionSetupForm();
    this.loadAgentCommission(agent.agentId);
    this.showCommissionPopup = true;
  }

  closeCommissionPopup(): void { this.showCommissionPopup = false; }

  loadAgentCommission(agentId: number): void {
    this.api.getAgentCommission(agentId).subscribe(r => {
      if (r?.success && r.data) {
        this.agentCommission = r.data;
        this.commissionForm = {
          commissionType: r.data.commissionType,
          commissionValue: r.data.commissionValue,
          isActive: r.data.isActive,
        };
      } else {
        this.agentCommission = null;
        this.commissionForm = emptyCommissionSetupForm();
      }
    });
  }

  saveAgentCommission(): void {
    this.commissionFormError = '';
    if (this.commissionForm.commissionValue <= 0) {
      this.commissionFormError = 'Commission value must be greater than zero.';
      return;
    }
    if (this.commissionForm.commissionType === 'Percentage' && this.commissionForm.commissionValue > 100) {
      this.commissionFormError = 'Percentage cannot exceed 100%.';
      return;
    }

    this.savingCommission = true;
    const dto: any = {
      agentId: this.commissionAgent?.agentId,
      commissionType: this.commissionForm.commissionType,
      commissionValue: this.commissionForm.commissionValue,
      isActive: this.commissionForm.isActive,
    };

    this.api.saveAgentCommission(dto).subscribe({
      next: r => {
        if (r?.success) {
          this.notify.success('Commission configuration saved.');
          if (r.data) this.agentCommission = r.data;
          this.loadAccountingSummaries();
        } else {
          this.commissionFormError = r?.message || 'Failed.';
        }
        this.savingCommission = false;
      },
      error: () => {
        this.commissionFormError = 'Server error.';
        this.savingCommission = false;
      },
    });
  }

  deleteAgentCommission(): void {
    if (!this.commissionAgent) return;
    this.api.deleteAgentCommission(this.commissionAgent.agentId).subscribe(r => {
      if (r?.success) {
        this.notify.success('Commission configuration deleted.');
        this.agentCommission = null;
        this.commissionForm = emptyCommissionSetupForm();
        this.loadAccountingSummaries();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }
}
