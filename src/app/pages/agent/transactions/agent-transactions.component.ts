import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTooltipModule,
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

  displayedColumns: string[] = [
    'referenceNumber',
    'sender',
    'receiver',
    'sendAmount',
    'receiveAmount',
    'commission',
    'status',
    'createdAt',
    'actions',
  ];

  // Server-side pagination
  pageIndex = 0;
  pageSize = 20;
  totalCount = 0;
  searchDebounce = new Subject<string>();
  private destroy$ = new Subject<void>();

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

  onPageChange(event: PageEvent): void {
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
      error: () => {
        this.notify.error('Error releasing transaction.');
      },
    });
  }

  rejectTransaction(tx: TransactionResult): void {
    this.api.rejectTransaction(tx.id).subscribe({
      next: (res) => {
        if (res?.success) {
          tx.status = 'Cancelled';
          this.notify.warn(`Transaction ${tx.referenceNumber} rejected.`);
        } else {
          this.notify.error(res?.message || 'Failed to reject transaction.');
        }
      },
      error: () => {
        this.notify.error('Error rejecting transaction.');
      },
    });
  }

  viewDetail(tx: TransactionResult): void {
    this.selectedTransaction = tx;
  }

  closeDetail(): void {
    this.selectedTransaction = null;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed': return 'status-completed';
      case 'Pending': return 'status-pending';
      case 'Approved':
      case 'Processing': return 'status-processing';
      case 'Cancelled':
      case 'Failed': return 'status-failed';
      case 'OnHold': return 'status-onhold';
      case 'Compliance': return 'status-compliance';
      default: return 'status-default';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'OnHold': return 'On Hold';
      default: return status;
    }
  }
}
