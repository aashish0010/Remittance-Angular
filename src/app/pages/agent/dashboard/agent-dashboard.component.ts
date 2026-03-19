import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AgentBalance } from '../../../core/models/agent.models';
import { TransactionResult } from '../../../core/models/transaction.models';

@Component({
  selector: 'app-agent-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './agent-dashboard.component.html',
  styleUrl: './agent-dashboard.component.scss',
})
export class AgentDashboardComponent implements OnInit {
  balance: AgentBalance = {
    agentId: 0,
    businessName: '',
    creditLimit: 0,
    currentBalance: 0,
    availableBalance: 0,
  };
  transactions: TransactionResult[] = [];
  recentTransactions: TransactionResult[] = [];
  loading = true;

  get totalCommission(): number {
    return this.transactions
      .filter(tx => tx.status !== 'Cancelled' && tx.status !== 'Failed')
      .reduce((sum, tx) => sum + (tx.agentCommission || 0), 0);
  }

  transactionColumns: string[] = [
    'referenceNumber',
    'sender',
    'receiver',
    'sendAmount',
    'receiveAmount',
    'commission',
    'status',
    'createdAt',
  ];

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadData();
  }

  private loadData(): void {
    this.loading = true;

    this.api.getAgentBalance().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.balance = res.data;
        } else {
          this.notify.error(res?.message || 'Failed to load balance.');
        }
      },
      error: (err) => {
        this.notify.error(err?.error?.message || 'Error loading balance. Please contact your administrator.');
      },
    });

    this.api.getAgentTransactions().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.transactions = res.data;
          this.recentTransactions = res.data.slice(0, 5);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
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
