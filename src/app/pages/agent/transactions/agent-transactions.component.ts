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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
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
    MatProgressSpinnerModule,
    MatChipsModule,
    MatPaginatorModule,
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
  error = '';
  search = '';

  displayedColumns: string[] = [
    'referenceNumber',
    'sender',
    'receiver',
    'sendAmount',
    'receiveAmount',
    'commission',
    'status',
    'createdAt',
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
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadTransactions();
  }

  private loadTransactions(): void {
    this.loading = true;
    this.error = '';

    this.api.getAgentTransactions().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.transactions = res.data;
          this.applyFilter();
        } else {
          this.transactions = [];
          this.filteredTransactions = [];
          this.error = res?.message || 'Failed to load transactions.';
        }
        this.loading = false;
      },
      error: (err) => {
        this.transactions = [];
        this.filteredTransactions = [];
        this.error = `Could not connect to server: ${err.message || 'Unknown error'}`;
        this.loading = false;
      },
    });
  }

  applyFilter(): void {
    const term = this.search.toLowerCase().trim();
    if (!term) {
      this.filteredTransactions = [...this.transactions];
    } else {
      this.filteredTransactions = this.transactions.filter(
        (tx) =>
          tx.referenceNumber.toLowerCase().includes(term) ||
          tx.senderName.toLowerCase().includes(term) ||
          tx.receiverName.toLowerCase().includes(term),
      );
    }
    this.pageIndex = 0;
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'Pending':
        return 'status-pending';
      case 'Approved':
        return 'status-processing';
      case 'Cancelled':
      case 'Failed':
        return 'status-failed';
      default:
        return 'status-default';
    }
  }
}
