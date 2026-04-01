import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AppSettingsService } from '../../../core/services/app-settings.service';
import { TransactionResult } from '../../../core/models/transaction.models';

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
export class TransactionDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private api = inject(ApiService);
  private notify = inject(NotificationService);
  readonly appSettings = inject(AppSettingsService);

  txn: TransactionResult | null = null;
  loading = true;
  actionLoading = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.loadTransaction(id);
  }

  private loadTransaction(id: number): void {
    this.loading = true;
    this.api.getTransactionDetail(id).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.txn = res.data;
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
      case 'Pending': return 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400';
      case 'Approved': case 'Processing': return 'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400';
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
    return status;
  }

  canApprove(): boolean { return this.txn?.status === 'Pending' || this.txn?.status === 'PendingApproval'; }
  canComplete(): boolean { return this.txn?.status === 'Pending' || this.txn?.status === 'Approved'; }
  canCancel(): boolean {
    return this.appSettings.cancellationAllowed
      && !!this.txn
      && this.txn.status !== 'Completed'
      && this.txn.status !== 'Cancelled'
      && this.txn.status !== 'Failed';
  }
}
