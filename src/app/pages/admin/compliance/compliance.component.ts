import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { ExportService } from '../../../core/services/export.service';
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
export class ComplianceComponent implements OnInit, OnDestroy {
  alerts: ComplianceAlertModel[] = [];
  displayedColumns = [
    'reference', 'sender', 'receiver', 'amount', 'alertType', 'txnStatus', 'alertStatus', 'created', 'actions',
  ];
  loading = true;
  searchText = '';

  filterMode: 'all' | 'open' | 'resolved' | 'rejected' = 'all';

  // Server-side pagination
  pageIndex = 0;
  pageSize = 20;
  totalCount = 0;
  searchDebounce = new Subject<string>();
  private destroy$ = new Subject<void>();

  showResolvePopup = false;
  resolveAlertTarget: ComplianceAlertModel | null = null;
  resolutionText = '';

  selectedAlert: ComplianceAlertModel | null = null;

  get openCount(): number { return this.alerts.filter(a => !a.isResolved).length; }
  get resolvedCount(): number { return this.alerts.filter(a => a.isResolved && a.resolution !== 'Rejected').length; }
  get rejectedCount(): number { return this.alerts.filter(a => a.isResolved && a.resolution === 'Rejected').length; }

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
    private exportService: ExportService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(s => {
      this.searchText = s;
      this.pageIndex = 0;
      this.loadAlerts();
    });
    this.loadAlerts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getResolvedParam(): boolean | undefined {
    switch (this.filterMode) {
      case 'open': return false;
      case 'resolved': return true;
      case 'rejected': return true;
      default: return undefined;
    }
  }

  loadAlerts(): void {
    this.loading = true;
    const resolved = this.getResolvedParam();
    this.api.getAlertsPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchText }, resolved).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.alerts = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.alerts = [];
          this.totalCount = 0;
          this.notify.error(res?.message || 'Failed to load alerts.');
        }
        this.loading = false;
      },
      error: () => {
        this.alerts = [];
        this.totalCount = 0;
        this.notify.error('Could not connect to server.');
        this.loading = false;
      },
    });
  }

  onFilterChange(): void {
    this.pageIndex = 0;
    this.loadAlerts();
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadAlerts();
  }

  exportData(format: string): void {
    this.exportService.export('api/admin/compliance/alerts/export', { search: this.searchText, resolved: this.getResolvedParam() }, format as any);
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

  rejectAlert(alert: ComplianceAlertModel): void {
    this.api.rejectAlert(alert.id).subscribe(r => {
      if (r?.success) {
        this.notify.warn('Alert rejected and transaction cancelled.');
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
