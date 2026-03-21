import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { ExportService } from '../../../core/services/export.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { TransactionResult } from '../../../core/models/transaction.models';

@Component({
  selector: 'app-admin-transactions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatCardModule,
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

  onPageChange(event: PageEvent): void {
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
      case 'Pending': return 'status-pending';
      case 'Processing':
      case 'Approved': return 'status-processing';
      case 'Completed': return 'status-completed';
      case 'Cancelled': return 'status-cancelled';
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
