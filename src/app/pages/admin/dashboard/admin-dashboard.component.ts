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
import {
  DashboardModel,
  RecentTransactionModel,
  ActiveExchangeRateModel,
} from '../../../core/models/dashboard.models';

@Component({
  selector: 'app-admin-dashboard',
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
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  dashboard: DashboardModel | null = null;
  loading = true;
  error = '';

  transactionColumns: string[] = [
    'referenceNumber',
    'senderName',
    'receiverName',
    'amount',
    'status',
    'createdAt',
  ];

  rateColumns: string[] = ['currencyPair', 'rate'];

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadDashboard();
  }

  private loadDashboard(): void {
    this.loading = true;
    this.error = '';
    this.api.getDashboard().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.dashboard = res.data;
        } else {
          this.error = res?.message || 'Failed to load dashboard data.';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error loading dashboard.';
        this.loading = false;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  formatCurrency(amount: number): string {
    if (amount >= 1_000_000) return '$' + (amount / 1_000_000).toFixed(1) + 'M';
    if (amount >= 1_000) return '$' + (amount / 1_000).toFixed(1) + 'K';
    return '$' + amount.toFixed(2);
  }

  monthChangeText(current: number, previous: number): string {
    if (previous === 0) return current > 0 ? '+100%' : '0%';
    const pct = ((current - previous) / previous) * 100;
    return pct >= 0 ? `+${pct.toFixed(1)}%` : `${pct.toFixed(1)}%`;
  }

  monthChangeClass(current: number, previous: number): string {
    return current >= previous ? 'change-positive' : 'change-negative';
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'Pending':
        return 'status-pending';
      case 'Processing':
      case 'Approved':
        return 'status-processing';
      case 'OnHold':
        return 'status-onhold';
      case 'Failed':
        return 'status-failed';
      case 'Cancelled':
        return 'status-cancelled';
      default:
        return 'status-default';
    }
  }
}
