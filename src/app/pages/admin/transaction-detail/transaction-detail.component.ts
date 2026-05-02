import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AppSettingsService } from '../../../core/services/app-settings.service';
import { SignalRService } from '../../../core/services/signalr.service';
import { TransactionResult, PayoutIntegrationLog } from '../../../core/models/transaction.models';

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.scss',
})
export class TransactionDetailComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private api = inject(ApiService);
  private notify = inject(NotificationService);
  private signalR = inject(SignalRService);
  readonly appSettings = inject(AppSettingsService);

  txn: TransactionResult | null = null;
  loading = true;
  actionLoading = false;
  integrationLogs: PayoutIntegrationLog[] = [];
  logsLoading = false;
  showLogs = false;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.loadTransaction(id);

    this.signalR.startConnection();
    this.signalR.transactionStatusUpdated$.pipe(
      takeUntil(this.destroy$),
    ).subscribe(update => {
      if (this.txn && update.id === this.txn.id) {
        this.txn = {
          ...this.txn,
          status: update.status,
          partnerReferenceId: update.partnerReferenceId,
          lastPartnerError: update.lastPartnerError,
        };
        if (this.showLogs) this.loadIntegrationLogs(this.txn.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadTransaction(id: number): void {
    this.loading = true;
    this.api.getTransactionDetail(id).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.txn = res.data;
          if (this.isPayoutStatus(res.data.status)) {
            this.loadIntegrationLogs(id);
          }
        } else {
          this.notify.error(res?.message || 'Transaction not found.');
        }
        this.loading = false;
      },
      error: () => {
        this.notify.error('Failed to load transaction.');
        this.loading = false;
      },
    });
  }

  loadIntegrationLogs(id: number): void {
    this.logsLoading = true;
    this.api.getIntegrationLogs(id).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.integrationLogs = res.data;
          this.showLogs = true;
        }
        this.logsLoading = false;
      },
      error: () => { this.logsLoading = false; },
    });
  }

  toggleLogs(): void {
    if (!this.showLogs && this.txn) {
      this.loadIntegrationLogs(this.txn.id);
    } else {
      this.showLogs = !this.showLogs;
    }
  }

  isPayoutStatus(status: string): boolean {
    return ['PendingPayout', 'ProcessingAtPartner', 'PaidOut', 'FailedAtPartner'].includes(status);
  }

  goBack(): void {
    this.router.navigate(['/admin/transactions']);
  }

  approve(): void {
    if (!this.txn) return;
    this.actionLoading = true;
    this.api.approveTransaction(this.txn.id).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.txn = res.data;
          this.notify.success('Transaction approved.');
        } else {
          this.notify.error(res?.message || 'Failed.');
        }
        this.actionLoading = false;
      },
      error: () => { this.notify.error('Server error.'); this.actionLoading = false; },
    });
  }

  complete(): void {
    if (!this.txn) return;
    this.actionLoading = true;
    this.api.completeTransaction(this.txn.id).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.txn = res.data;
          this.notify.success('Transaction completed.');
        } else {
          this.notify.error(res?.message || 'Failed.');
        }
        this.actionLoading = false;
      },
      error: () => { this.notify.error('Server error.'); this.actionLoading = false; },
    });
  }

  confirmPayout(): void {
    if (!this.txn) return;
    this.actionLoading = true;
    this.api.confirmPayout(this.txn.id).subscribe({
      next: res => {
        if (res?.success) {
          this.txn = { ...this.txn!, status: 'PendingPayout' };
          this.notify.success('Payout queued — processing in background.');
        } else {
          this.notify.error(res?.message || 'Failed.');
        }
        this.actionLoading = false;
      },
      error: () => { this.notify.error('Server error.'); this.actionLoading = false; },
    });
  }

  retryPayout(): void {
    if (!this.txn) return;
    this.actionLoading = true;
    this.api.retryPayout(this.txn.id).subscribe({
      next: res => {
        if (res?.success) {
          this.txn = { ...this.txn!, status: 'PendingPayout', lastPartnerError: undefined };
          this.notify.success('Retry queued.');
          this.loadIntegrationLogs(this.txn!.id);
        } else {
          this.notify.error(res?.message || 'Failed.');
        }
        this.actionLoading = false;
      },
      error: () => { this.notify.error('Server error.'); this.actionLoading = false; },
    });
  }

  markPaid(): void {
    if (!this.txn) return;
    this.actionLoading = true;
    this.api.markTransactionPaid(this.txn.id).subscribe({
      next: res => {
        if (res?.success) {
          this.txn = { ...this.txn!, status: 'PaidOut' };
          this.notify.success('Transaction marked as paid.');
          this.loadIntegrationLogs(this.txn!.id);
        } else {
          this.notify.error(res?.message || 'Failed.');
        }
        this.actionLoading = false;
      },
      error: () => { this.notify.error('Server error.'); this.actionLoading = false; },
    });
  }

  cancel(): void {
    if (!this.txn) return;
    this.actionLoading = true;
    this.api.cancelTransaction(this.txn.id).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.txn = res.data;
          this.notify.success('Transaction cancelled.');
        } else {
          this.notify.error(res?.message || 'Failed.');
        }
        this.actionLoading = false;
      },
      error: () => { this.notify.error('Server error.'); this.actionLoading = false; },
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed': return 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400';
      case 'PaidOut': return 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400';
      case 'Pending': return 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400';
      case 'Approved': case 'Processing': return 'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400';
      case 'PendingPayout': return 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400';
      case 'ProcessingAtPartner': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400';
      case 'FailedAtPartner': return 'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400';
      case 'OnHold': return 'bg-warning-50 text-warning-600 dark:bg-warning-900/20 dark:text-warning-300';
      case 'Failed': return 'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400';
      case 'Cancelled': return 'bg-surface-200 text-surface-600 dark:bg-surface-700 dark:text-surface-300';
      case 'Compliance': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'PendingApproval': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default: return '';
    }
  }

  getStatusLabel(status: string): string {
    if (status === 'OnHold') return 'On Hold';
    if (status === 'Compliance') return 'Under Review';
    if (status === 'PendingApproval') return 'Pending Approval';
    if (status === 'PendingPayout') return 'Pending Payout';
    if (status === 'ProcessingAtPartner') return 'Processing at Partner';
    if (status === 'PaidOut') return 'Paid Out';
    if (status === 'FailedAtPartner') return 'Failed at Partner';
    return status;
  }

  getLogEventClass(event: string): string {
    switch (event) {
      case 'SUBMIT': return 'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400';
      case 'WEBHOOK': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'POLL': return 'bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-300';
      case 'MANUAL_OVERRIDE': return 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400';
      default: return 'bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-300';
    }
  }

  canApprove(): boolean { return this.txn?.status === 'Pending' || this.txn?.status === 'PendingApproval'; }
  canComplete(): boolean { return this.txn?.status === 'Pending' || this.txn?.status === 'Approved'; }
  canConfirmPayout(): boolean { return this.txn?.status === 'Approved' || this.txn?.status === 'Processing'; }
  canRetryPayout(): boolean { return this.txn?.status === 'FailedAtPartner'; }
  canMarkPaid(): boolean {
    return !!this.txn && this.txn.status !== 'PaidOut' && this.txn.status !== 'Completed' && this.txn.status !== 'Cancelled';
  }
  canCancel(): boolean {
    return this.appSettings.cancellationAllowed
      && !!this.txn
      && this.txn.status !== 'Completed'
      && this.txn.status !== 'Cancelled'
      && this.txn.status !== 'Failed'
      && this.txn.status !== 'PaidOut';
  }
}
