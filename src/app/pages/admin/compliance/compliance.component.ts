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
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
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
    MatPaginatorModule,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './compliance.component.html',
  styleUrl: './compliance.component.scss',
})
export class ComplianceComponent implements OnInit {
  alerts: ComplianceAlertModel[] = [];
  filteredAlerts: ComplianceAlertModel[] = [];
  displayedColumns = [
    'reference', 'sender', 'receiver', 'amount', 'alertType', 'txnStatus', 'alertStatus', 'created', 'actions',
  ];
  loading = true;
  searchText = '';

  filterMode: 'all' | 'open' | 'resolved' = 'all';

  pageSize = 10;
  pageIndex = 0;
  get pagedAlerts(): ComplianceAlertModel[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredAlerts.slice(start, start + this.pageSize);
  }

  showResolvePopup = false;
  resolveAlertTarget: ComplianceAlertModel | null = null;
  resolutionText = '';

  selectedAlert: ComplianceAlertModel | null = null;

  get openCount(): number { return this.alerts.filter(a => !a.isResolved).length; }
  get resolvedCount(): number { return this.alerts.filter(a => a.isResolved).length; }

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadAlerts();
  }

  loadAlerts(): void {
    this.loading = true;
    let resolved: boolean | undefined;
    if (this.filterMode === 'open') resolved = false;
    else if (this.filterMode === 'resolved') resolved = true;

    this.api.getAlerts(resolved).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.alerts = res.data;
          this.applySearch();
        } else {
          this.alerts = [];
          this.filteredAlerts = [];
          this.notify.error(res?.message || 'Failed to load alerts.');
        }
        this.loading = false;
      },
      error: () => {
        this.alerts = [];
        this.filteredAlerts = [];
        this.notify.error('Could not connect to server.');
        this.loading = false;
      },
    });
  }

  onFilterChange(): void { this.loadAlerts(); }

  applySearch(): void {
    const term = this.searchText.toLowerCase().trim();
    if (!term) {
      this.filteredAlerts = [...this.alerts];
    } else {
      this.filteredAlerts = this.alerts.filter(a =>
        a.referenceNumber.toLowerCase().includes(term) ||
        a.senderName.toLowerCase().includes(term) ||
        a.receiverName?.toLowerCase().includes(term) ||
        a.alertType.toLowerCase().includes(term)
      );
    }
    this.pageIndex = 0;
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  viewDetail(alert: ComplianceAlertModel): void { this.selectedAlert = alert; }
  closeDetail(): void { this.selectedAlert = null; }

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
    if (!resolution) { this.notify.warn('Please enter resolution notes.'); return; }

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

  releaseAlert(alert: ComplianceAlertModel): void {
    this.api.releaseAlert(alert.id).subscribe(r => {
      if (r?.success) {
        this.notify.success('Transaction released to Pending.');
        this.loadAlerts();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  getTxnStatusClass(status: string): string {
    switch (status) {
      case 'Completed': return 'chip-success';
      case 'Pending': return 'chip-warning';
      case 'OnHold': return 'chip-info';
      case 'Compliance': return 'chip-compliance';
      case 'Cancelled': case 'Failed': return 'chip-error';
      default: return 'chip-default';
    }
  }

  getTxnStatusLabel(status: string): string {
    return status === 'OnHold' ? 'On Hold' : status;
  }
}
