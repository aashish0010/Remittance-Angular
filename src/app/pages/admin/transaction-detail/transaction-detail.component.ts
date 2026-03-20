import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';
import { TransactionResult } from '../../../core/models/transaction.models';

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
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
      case 'Completed': return 'status-completed';
      case 'Pending': return 'status-pending';
      case 'Approved': case 'Processing': return 'status-processing';
      case 'OnHold': return 'status-onhold';
      case 'Failed': return 'status-failed';
      case 'Cancelled': return 'status-cancelled';
      case 'Compliance': return 'status-compliance';
      default: return '';
    }
  }

  getStatusLabel(status: string): string {
    if (status === 'OnHold') return 'On Hold';
    if (status === 'Compliance') return 'Under Review';
    return status;
  }

  canApprove(): boolean { return this.txn?.status === 'Pending'; }
  canComplete(): boolean { return this.txn?.status === 'Pending' || this.txn?.status === 'Approved'; }
  canCancel(): boolean {
    return !!this.txn && this.txn.status !== 'Completed' && this.txn.status !== 'Cancelled' && this.txn.status !== 'Failed';
  }
}
