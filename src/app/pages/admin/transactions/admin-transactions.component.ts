import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { ExportService } from '../../../core/services/export.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AppSettingsService } from '../../../core/services/app-settings.service';
import { TransactionResult } from '../../../core/models/transaction.models';

@Component({
  selector: 'app-admin-transactions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './admin-transactions.component.html',
  styleUrl: './admin-transactions.component.scss',
})
export class AdminTransactionsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'referenceNumber',
    'senderName',
    'receiverName',
    'sendAmount',
    'receiveAmount',
    'exchangeRate',
    'commission',
    'status',
    'createdAt',
    'actions',
  ];

  transactions: TransactionResult[] = [];
  loading = true;
  searchText = '';
  statusFilter = 'All';
  selectedTransaction: TransactionResult | null = null;

  // Server-side pagination
  pageIndex = 0;
  pageSize = 20;
  totalCount = 0;

  // Server-side search with debounce
  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(
    private api: ApiService,
    private exportService: ExportService,
    private auth: AuthStateService,
    private notify: NotificationService,
    private route: ActivatedRoute,
    public appSettings: AppSettingsService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    // Read status from query params (e.g. from dashboard click)
    const qStatus = this.route.snapshot.queryParamMap.get('status');
    if (qStatus) this.statusFilter = qStatus;

    this.searchSubject.pipe(
      debounceTime(400),
      takeUntil(this.destroy$),
    ).subscribe(() => {
      this.pageIndex = 0;
      this.loadTransactions();
    });

    this.loadTransactions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadTransactions(): void {
    this.loading = true;
    const params: any = {
      page: this.pageIndex + 1,
      pageSize: this.pageSize,
      search: this.searchText,
    };
    if (this.statusFilter && this.statusFilter !== 'All') {
      params.status = this.statusFilter;
    }
    this.api.getTransactionsPaged(params).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.transactions = res.data.items ?? [];
          this.totalCount = res.data.totalCount ?? 0;
        } else {
          this.transactions = [];
          this.totalCount = 0;
          this.notify.error(res?.message || 'Failed to load transactions.');
        }
        this.loading = false;
      },
      error: () => {
        this.transactions = [];
        this.totalCount = 0;
        this.notify.error('Could not connect to server.');
        this.loading = false;
      },
    });
  }

  onSearchChange(): void {
    this.searchSubject.next(this.searchText);
  }

  onStatusChange(): void {
    this.pageIndex = 0;
    this.loadTransactions();
  }

  Math = Math;

  onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadTransactions();
  }

  exportData(format: 'excel' | 'csv'): void {
    this.exportService.export('api/admin/transactions/export', { search: this.searchText }, format);
  }

  completeTransaction(txn: TransactionResult): void {
    this.api.completeTransaction(txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(`Transaction ${txn.referenceNumber} completed.`);
          this.loadTransactions();
        } else {
          this.notify.error(res?.message || 'Failed to complete transaction.');
        }
      },
      error: () => {
        this.notify.error('Error completing transaction.');
      },
    });
  }

  cancelTransaction(txn: TransactionResult): void {
    this.api.cancelTransaction(txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.warn(`Transaction ${txn.referenceNumber} cancelled.`);
          this.loadTransactions();
        } else {
          this.notify.error(res?.message || 'Failed to cancel transaction.');
        }
      },
      error: () => {
        this.notify.error('Error cancelling transaction.');
      },
    });
  }

  viewDetail(txn: TransactionResult): void {
    this.selectedTransaction = txn;
  }

  closeDetail(): void {
    this.selectedTransaction = null;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending': return 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400';
      case 'Processing':
      case 'Approved': return 'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400';
      case 'Completed': return 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400';
      case 'Cancelled': return 'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400';
      case 'Failed': return 'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400';
      case 'OnHold': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Compliance': return 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400';
      case 'PendingApproval': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'OnHold': return 'On Hold';
      case 'PendingApproval': return 'Pending Approval';
      default: return status;
    }
  }
}
