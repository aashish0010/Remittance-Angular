import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ComplianceAlertModel } from '../../../core/models/compliance.models';

@Component({
  selector: 'app-compliance',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './compliance.component.html',
  styleUrl: './compliance.component.scss',
})
export class ComplianceComponent implements OnInit {
  alerts: ComplianceAlertModel[] = [];
  displayedColumns = [
    'reference', 'sender', 'amount', 'alertType', 'description', 'status', 'created', 'actions',
  ];
  loading = true;

  // Filter
  filterMode: 'all' | 'open' | 'resolved' = 'all';

  // Resolution popup
  showResolvePopup = false;
  resolveAlertTarget: ComplianceAlertModel | null = null;
  resolutionText = '';

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadAlerts();
  }

  // ---------------------------------------------------------------------------
  // Load alerts
  // ---------------------------------------------------------------------------
  loadAlerts(): void {
    this.loading = true;
    let resolved: boolean | undefined;
    if (this.filterMode === 'open') resolved = false;
    else if (this.filterMode === 'resolved') resolved = true;

    this.api.getAlerts(resolved).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.alerts = res.data;
        } else {
          this.alerts = [];
          this.notify.error(res?.message || 'Failed to load alerts.');
        }
        this.loading = false;
      },
      error: () => {
        this.alerts = [];
        this.notify.error('Could not connect to server.');
        this.loading = false;
      },
    });
  }

  onFilterChange(): void {
    this.loadAlerts();
  }

  // ---------------------------------------------------------------------------
  // Resolve popup
  // ---------------------------------------------------------------------------
  openResolvePopup(alert: ComplianceAlertModel): void {
    this.resolveAlertTarget = alert;
    this.resolutionText = '';
    this.showResolvePopup = true;
  }

  closeResolvePopup(): void {
    this.showResolvePopup = false;
    this.resolveAlertTarget = null;
    this.resolutionText = '';
  }

  resolveAlert(): void {
    if (!this.resolveAlertTarget) return;
    const resolution = this.resolutionText.trim();
    if (!resolution) {
      this.notify.warn('Please enter a resolution text.');
      return;
    }

    this.api.resolveAlert(this.resolveAlertTarget.id, resolution).subscribe(r => {
      if (r?.success) {
        this.notify.success('Alert resolved.');
        this.closeResolvePopup();
        this.loadAlerts();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Release
  // ---------------------------------------------------------------------------
  releaseAlert(alert: ComplianceAlertModel): void {
    this.api.releaseAlert(alert.id).subscribe(r => {
      if (r?.success) {
        this.notify.success('Transaction released.');
        this.loadAlerts();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }
}
