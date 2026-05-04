import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AppSettingsService } from '../../../core/services/app-settings.service';
import { SeoService } from '../../../core/services/seo.service';
import { AgentBalance } from '../../../core/models/agent.models';
import { TransactionResult } from '../../../core/models/transaction.models';

@Component({
  selector: 'app-agent-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
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

  get todayCount(): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.transactions.filter(tx => new Date(tx.createdAt) >= today).length;
  }

  get monthlyCommission(): number {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    return this.transactions
      .filter(tx => tx.status !== 'Cancelled' && tx.status !== 'Failed' && new Date(tx.createdAt) >= startOfMonth)
      .reduce((sum, tx) => sum + (tx.agentCommission || 0), 0);
  }

  get completionRate(): number {
    const eligible = this.transactions.filter(tx => tx.status !== 'Cancelled' && tx.status !== 'Failed');
    if (eligible.length === 0) return 0;
    return Math.round(eligible.filter(tx => tx.status === 'Completed').length / eligible.length * 100);
  }

  get pendingCount(): number {
    return this.transactions.filter(tx =>
      ['Pending', 'OnHold', 'Compliance', 'PendingApproval', 'PendingPayout', 'ProcessingAtPartner'].includes(tx.status)
    ).length;
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
    public appSettings: AppSettingsService,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.seo.setPage('Agent Dashboard', 'View your balance, process transactions, and track commissions from the agent portal.');
    this.appSettings.load();
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

  showFullAmounts = false;

  formatAmount(amount: number): string {
    if (this.showFullAmounts) {
      return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    if (amount >= 1_000_000) {
      const v = amount / 1_000_000;
      return '$' + (Number.isInteger(v * 100) ? v.toFixed(2) : v.toFixed(2).replace(/\.?0+$/, '')) + 'M';
    }
    if (amount >= 1_000) {
      const v = amount / 1_000;
      return '$' + v.toFixed(2).replace(/\.?0+$/, '') + 'K';
    }
    return '$' + amount.toFixed(2);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
        return 'bg-success-100 text-success-700';
      case 'Pending':
        return 'bg-warning-100 text-warning-700';
      case 'PendingPayout':
      case 'ProcessingAtPartner':
        return 'bg-brand-100 text-brand-700';
      case 'Cancelled':
        return 'bg-surface-100 text-surface-500';
      case 'Failed':
        return 'bg-danger-100 text-danger-700';
      default:
        return 'bg-surface-100 text-surface-500';
    }
  }
}
