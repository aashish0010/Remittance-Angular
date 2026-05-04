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
import { SignalRService } from '../../../core/services/signalr.service';
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
  actionLoadingId: number | null = null;

  pageIndex = 0;
  pageSize = 20;
  totalCount = 0;

  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(
    private api: ApiService,
    private exportService: ExportService,
    private auth: AuthStateService,
    private notify: NotificationService,
    private route: ActivatedRoute,
    private signalR: SignalRService,
    public appSettings: AppSettingsService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
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

    // Start SignalR and patch rows in-place on status updates
    this.signalR.startConnection();
    this.signalR.transactionStatusUpdated$.pipe(
      takeUntil(this.destroy$),
    ).subscribe(update => {
      const idx = this.transactions.findIndex(t => t.id === update.id);
      if (idx !== -1) {
        this.transactions[idx] = {
          ...this.transactions[idx],
          status: update.status,
          partnerReferenceId: update.partnerReferenceId,
          lastPartnerError: update.lastPartnerError,
        };
        this.transactions = [...this.transactions];
      }
      if (this.selectedTransaction?.id === update.id) {
        this.selectedTransaction = {
          ...this.selectedTransaction,
          status: update.status,
          partnerReferenceId: update.partnerReferenceId,
          lastPartnerError: update.lastPartnerError,
        };
      }
    });
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
    this.actionLoadingId = txn.id;
    this.api.confirmPayout(txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(`Payout queued for ${txn.referenceNumber}.`);
          const idx = this.transactions.findIndex(t => t.id === txn.id);
          if (idx !== -1) {
            this.transactions[idx] = { ...this.transactions[idx], status: 'PendingPayout' };
            this.transactions = [...this.transactions];
          }
        } else {
          this.notify.error(res?.message || 'Failed to queue payout.');
        }
        this.actionLoadingId = null;
      },
      error: () => {
        this.notify.error('Error triggering payout.');
        this.actionLoadingId = null;
      },
    });
  }

  confirmPayout(txn: TransactionResult): void {
    this.actionLoadingId = txn.id;
    this.api.confirmPayout(txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(`Payout queued for ${txn.referenceNumber}.`);
          const idx = this.transactions.findIndex(t => t.id === txn.id);
          if (idx !== -1) {
            this.transactions[idx] = { ...this.transactions[idx], status: 'PendingPayout' };
            this.transactions = [...this.transactions];
          }
        } else {
          this.notify.error(res?.message || 'Failed to queue payout.');
        }
        this.actionLoadingId = null;
      },
      error: () => {
        this.notify.error('Error queuing payout.');
        this.actionLoadingId = null;
      },
    });
  }

  cancelTransaction(txn: TransactionResult): void {
    this.actionLoadingId = txn.id;
    this.api.cancelTransaction(txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.warn(`Transaction ${txn.referenceNumber} cancelled.`);
          this.loadTransactions();
        } else {
          this.notify.error(res?.message || 'Failed to cancel transaction.');
        }
        this.actionLoadingId = null;
      },
      error: () => {
        this.notify.error('Error cancelling transaction.');
        this.actionLoadingId = null;
      },
    });
  }

  viewDetail(txn: TransactionResult): void {
    this.selectedTransaction = txn;
  }

  closeDetail(): void {
    this.selectedTransaction = null;
  }

  canConfirmPayout(status: string): boolean {
    return status === 'Pending';
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending': return 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400';
      case 'Completed': return 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400';
      case 'Cancelled':
      case 'Failed': return 'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400';
      case 'OnHold': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Compliance': return 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400';
      case 'PendingApproval': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'PendingPayout': return 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400';
      case 'ProcessingAtPartner': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400';
      default: return 'bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400';
    }
  }

  trackById(_index: number, item: TransactionResult): number {
    return item.id;
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'OnHold': return 'On Hold';
      case 'PendingApproval': return 'Pending Approval';
      case 'PendingPayout': return 'Pending Payout';
      case 'ProcessingAtPartner': return 'At Partner';
      default: return status;
    }
  }
}
