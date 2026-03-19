import { Component, OnInit } from '@angular/core';
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
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ApiService } from '../../../core/services/api.service';
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
export class AgentTransactionsComponent implements OnInit {
  transactions: TransactionResult[] = [];
  filteredTransactions: TransactionResult[] = [];
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

  // Pagination
  pageSize = 10;
  pageIndex = 0;
  get pagedTransactions(): TransactionResult[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredTransactions.slice(start, start + this.pageSize);
  }

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadTransactions();
  }

  private loadTransactions(): void {
    this.loading = true;

    this.api.getAgentTransactions().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.transactions = res.data;
          this.applyFilter();
        } else {
          this.transactions = [];
          this.filteredTransactions = [];
          this.notify.error(res?.message || 'Failed to load transactions.');
        }
        this.loading = false;
      },
      error: (err) => {
        this.transactions = [];
        this.filteredTransactions = [];
        this.notify.error(`Could not connect to server: ${err.message || 'Unknown error'}`);
        this.loading = false;
      },
    });
  }

  applyFilter(): void {
    const term = this.search.toLowerCase().trim();
    this.filteredTransactions = this.transactions.filter((tx) => {
      const matchesStatus = this.statusFilter === 'All' || tx.status === this.statusFilter;
      const matchesText =
        !term ||
        tx.referenceNumber.toLowerCase().includes(term) ||
        tx.senderName.toLowerCase().includes(term) ||
        tx.receiverName.toLowerCase().includes(term);
      return matchesStatus && matchesText;
    });
    this.pageIndex = 0;
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
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
