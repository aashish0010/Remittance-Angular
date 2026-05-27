import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { ExportService } from '../../../core/services/export.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { TransactionResult } from '../../../core/models/transaction.models';

@Component({
  selector: 'app-agent-transactions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './agent-transactions.component.html',
  styleUrl: './agent-transactions.component.scss',
})
export class AgentTransactionsComponent implements OnInit, OnDestroy {
  transactions: TransactionResult[] = [];
  loading = true;
  search = '';
  statusFilter = 'All';
  selectedTransaction: TransactionResult | null = null;

  cancelPendingTx: TransactionResult | null = null;
  cancelLoading = false;

  actionLoadingId: number | null = null;

  pageIndex = 0;
  pageSize = 20;
  totalCount = 0;
  searchDebounce = new Subject<string>();
  private destroy$ = new Subject<void>();

  Math = Math;

  cancelableStatuses = ['Pending', 'PendingApproval', 'Compliance', 'OnHold', 'PendingPayout', 'ProcessingAtPartner'];

  detailTab: 'details' | 'logs' = 'details';
  payoutLogs: any[] = [];
  logsLoading = false;

  checkStatusLoading = false;
  checkStatusResult: { isSuccess: boolean; status: string; partnerReferenceId?: string; rawResponse?: string; errorMessage?: string } | null = null;
  showCheckStatusModal = false;

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
    private exportService: ExportService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(s => {
      this.search = s;
      this.pageIndex = 0;
      this.loadTransactions();
    });
    this.loadTransactions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadTransactions(): void {
    this.loading = true;
    this.api.getAgentTransactionsPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.search }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.transactions = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.transactions = [];
          this.totalCount = 0;
          this.notify.error(res?.message || 'Failed to load transactions.');
        }
        this.loading = false;
      },
      error: (err) => {
        this.transactions = [];
        this.totalCount = 0;
        this.notify.error(`Could not connect to server: ${err.message || 'Unknown error'}`);
        this.loading = false;
      },
    });
  }

  applyFilter(): void {
    this.pageIndex = 0;
    this.loadTransactions();
  }

  onPageChange(event: { pageIndex: number; pageSize: number; length: number; previousPageIndex?: number }): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadTransactions();
  }

  exportData(format: string): void {
    this.exportService.export('api/agent/transactions/export', { search: this.search }, format as any);
  }

  releaseTransaction(tx: TransactionResult): void {
    this.api.releaseTransaction(tx.id).subscribe({
      next: (res) => {
        if (res?.success) {
          tx.status = 'Pending';
          this.notify.success(`Transaction ${tx.referenceNumber} released to Pending.`);
        } else {
          this.notify.error(res?.message || 'Failed to release transaction.');
        }
      },
      error: () => this.notify.error('Error releasing transaction.'),
    });
  }

  requestCancelTx(tx: TransactionResult): void {
    this.cancelPendingTx = tx;
  }

  dismissCancelDialog(): void {
    this.cancelPendingTx = null;
  }

  confirmCancelDialog(): void {
    const tx = this.cancelPendingTx;
    if (!tx) return;
    this.cancelLoading = true;
    this.api.rejectTransaction(tx.id).subscribe({
      next: (res) => {
        this.cancelLoading = false;
        this.cancelPendingTx = null;
        if (res?.success) {
          tx.status = 'Cancelled';
          const listed = this.transactions.find(t => t.id === tx.id);
          if (listed) listed.status = 'Cancelled';
          if (this.selectedTransaction?.id === tx.id) {
            this.selectedTransaction = { ...this.selectedTransaction, status: 'Cancelled' };
          }
          this.notify.warn(`Transaction ${tx.referenceNumber} cancelled.`);
        } else {
          this.notify.error(res?.message || 'Failed to cancel transaction.');
        }
      },
      error: () => {
        this.cancelLoading = false;
        this.cancelPendingTx = null;
        this.notify.error('Error cancelling transaction.');
      },
    });
  }

  viewDetail(tx: TransactionResult): void {
    this.selectedTransaction = tx;
    this.detailTab = 'details';
    this.payoutLogs = [];
  }

  closeDetail(): void {
    this.selectedTransaction = null;
    this.detailTab = 'details';
    this.payoutLogs = [];
    this.checkStatusResult = null;
    this.showCheckStatusModal = false;
  }

  switchTab(tab: 'details' | 'logs'): void {
    this.detailTab = tab;
    if (tab === 'logs' && this.selectedTransaction && this.payoutLogs.length === 0) {
      this.logsLoading = true;
      this.api.getAgentTransactionPayoutLogs(this.selectedTransaction.id).subscribe({
        next: (res) => {
          this.payoutLogs = res?.data ?? [];
          this.logsLoading = false;
        },
        error: () => { this.logsLoading = false; },
      });
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed': return 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400';
      case 'Pending': return 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400';
      case 'PendingPayout': return 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400';
      case 'ProcessingAtPartner': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400';
      case 'Cancelled':
      case 'Failed': return 'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400';
      case 'OnHold': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Compliance': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'PendingApproval': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400';
    }
  }

  canCheckStatus(tx: TransactionResult): boolean {
    return tx.status === 'ProcessingAtPartner' && !!tx.partnerReferenceId;
  }

  checkStatus(tx: TransactionResult): void {
    this.checkStatusLoading = true;
    this.checkStatusResult = null;
    this.api.checkAgentPayoutStatus(tx.id).subscribe({
      next: res => {
        this.checkStatusLoading = false;
        if (res?.success && res.data) {
          this.checkStatusResult = res.data;
          this.showCheckStatusModal = true;
          if (res.data.status && res.data.status !== tx.status) {
            tx.status = res.data.status;
            if (this.selectedTransaction?.id === tx.id) {
              this.selectedTransaction = { ...this.selectedTransaction, status: res.data.status };
            }
            const listed = this.transactions.find(t => t.id === tx.id);
            if (listed) listed.status = res.data.status;
          }
        } else {
          this.notify.error(res?.message || 'Check status failed.');
        }
      },
      error: () => { this.checkStatusLoading = false; this.notify.error('Server error.'); },
    });
  }

  closeCheckStatusModal(): void {
    this.showCheckStatusModal = false;
    this.checkStatusResult = null;
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'OnHold': return 'On Hold';
      case 'PendingApproval': return 'Pending Approval';
      case 'PendingPayout': return 'Pending Payout';
      case 'ProcessingAtPartner': return 'Processing';
      default: return status;
    }
  }
}
