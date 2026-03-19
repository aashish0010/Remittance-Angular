import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
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
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './admin-transactions.component.html',
  styleUrl: './admin-transactions.component.scss',
})
export class AdminTransactionsComponent implements OnInit {
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

  dataSource = new MatTableDataSource<TransactionResult>([]);
  transactions: TransactionResult[] = [];
  loading = true;
  message = '';
  messageType: 'success' | 'error' | 'warning' | 'info' = 'info';
  searchText = '';
  statusFilter = 'All';
  selectedTransaction: TransactionResult | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadTransactions();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadTransactions(): void {
    this.loading = true;
    this.api.getTransactions().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.transactions = res.data;
          this.dataSource.data = res.data;
          this.dataSource.filterPredicate = this.createFilter();
        } else {
          this.transactions = [];
          this.dataSource.data = [];
          this.message = res?.message || 'Failed to load transactions.';
          this.messageType = 'error';
        }
        this.loading = false;
      },
      error: () => {
        this.transactions = [];
        this.dataSource.data = [];
        this.message = 'Could not connect to server.';
        this.messageType = 'error';
        this.loading = false;
      },
    });
  }

  applyFilter(): void {
    const filterValue = JSON.stringify({
      text: this.searchText.trim().toLowerCase(),
      status: this.statusFilter,
    });
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private createFilter(): (data: TransactionResult, filter: string) => boolean {
    return (data: TransactionResult, filter: string): boolean => {
      const parsed = JSON.parse(filter);
      const text = parsed.text as string;
      const status = parsed.status as string;

      const matchesStatus = status === 'All' || data.status === status;
      const matchesText =
        !text ||
        data.referenceNumber.toLowerCase().includes(text) ||
        data.senderName.toLowerCase().includes(text) ||
        (data.receiverName?.toLowerCase().includes(text) ?? false);

      return matchesStatus && matchesText;
    };
  }

  completeTransaction(txn: TransactionResult): void {
    this.api.completeTransaction(txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          txn.status = 'Completed';
          this.message = `Transaction ${txn.referenceNumber} completed.`;
          this.messageType = 'success';
        } else {
          this.message = res?.message || 'Failed to complete transaction.';
          this.messageType = 'error';
        }
      },
      error: () => {
        this.message = 'Error completing transaction.';
        this.messageType = 'error';
      },
    });
  }

  cancelTransaction(txn: TransactionResult): void {
    this.api.cancelTransaction(txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          txn.status = 'Cancelled';
          this.message = `Transaction ${txn.referenceNumber} cancelled.`;
          this.messageType = 'warning';
        } else {
          this.message = res?.message || 'Failed to cancel transaction.';
          this.messageType = 'error';
        }
      },
      error: () => {
        this.message = 'Error cancelling transaction.';
        this.messageType = 'error';
      },
    });
  }

  viewDetail(txn: TransactionResult): void {
    this.selectedTransaction = txn;
  }

  closeDetail(): void {
    this.selectedTransaction = null;
  }

  dismissMessage(): void {
    this.message = '';
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
