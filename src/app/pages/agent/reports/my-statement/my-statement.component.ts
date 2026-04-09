import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../../core/services/api.service';
import { NotificationService } from '../../../../core/services/notification.service';

interface StatementSummary {
  totalSent: number;
  commissionEarned: number;
  balance: number;
  transactionCount: number;
  currency: string;
}

interface StatementEntry {
  date: string;
  type: string;
  description: string;
  amount: number;
  balanceAfter: number;
  reference: string;
}

@Component({
  selector: 'app-my-statement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-statement.component.html',
  styleUrls: ['./my-statement.component.scss'],
})
export class MyStatementComponent implements OnInit {

  // ── Date range ────────────────────────────────────────────────────────────
  startDate = '';
  endDate   = '';

  // ── State ─────────────────────────────────────────────────────────────────
  loading  = false;
  exporting = false;
  hasLoaded = false;

  // ── Data ──────────────────────────────────────────────────────────────────
  summary: StatementSummary = {
    totalSent: 0,
    commissionEarned: 0,
    balance: 0,
    transactionCount: 0,
    currency: 'USD',
  };

  entries: StatementEntry[] = [];

  // ── Pagination ────────────────────────────────────────────────────────────
  currentPage = 1;
  pageSize    = 20;
  totalCount  = 0;

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize) || 1;
  }

  get paginatedEntries(): StatementEntry[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.entries.slice(start, start + this.pageSize);
  }

  constructor(
    private api: ApiService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    // Default: last 30 days
    const today = new Date();
    const past  = new Date();
    past.setDate(today.getDate() - 30);

    this.endDate   = this.formatDate(today);
    this.startDate = this.formatDate(past);

    this.loadStatement();
  }

  private formatDate(d: Date): string {
    return d.toISOString().split('T')[0];
  }

  loadStatement(): void {
    this.loading  = true;
    this.hasLoaded = false;

    this.api.getMyStatement({ startDate: this.startDate, endDate: this.endDate }).subscribe({
      next: (res) => {
        this.loading   = false;
        this.hasLoaded = true;

        if (res?.success && res.data) {
          const d = res.data;
          this.summary = {
            totalSent:        d.totalSent        ?? 0,
            commissionEarned: d.commissionEarned ?? 0,
            balance:          d.balance          ?? 0,
            transactionCount: d.transactionCount ?? 0,
            currency:         d.currency         ?? 'USD',
          };
          this.entries    = (d.entries ?? []) as StatementEntry[];
          this.totalCount = this.entries.length;
          this.currentPage = 1;
        } else {
          this.notify.error(res?.message || 'Failed to load statement.');
        }
      },
      error: () => {
        this.loading   = false;
        this.hasLoaded = true;
        this.notify.error('Failed to load statement. Please try again.');
      }
    });
  }

  onDateChange(): void {
    if (this.startDate && this.endDate && this.startDate <= this.endDate) {
      this.loadStatement();
    }
  }

  setQuickRange(days: number): void {
    const today = new Date();
    const past  = new Date();
    past.setDate(today.getDate() - days);
    this.endDate   = this.formatDate(today);
    this.startDate = this.formatDate(past);
    this.loadStatement();
  }

  setThisMonth(): void {
    const today = new Date();
    const first = new Date(today.getFullYear(), today.getMonth(), 1);
    this.startDate = this.formatDate(first);
    this.endDate   = this.formatDate(today);
    this.loadStatement();
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  exportCsv(): void {
    if (!this.entries.length) return;

    const headers = ['Date', 'Type', 'Description', 'Amount', 'Balance After', 'Reference'];
    const rows    = this.entries.map(e => [
      e.date,
      e.type,
      `"${e.description}"`,
      e.amount.toFixed(2),
      e.balanceAfter.toFixed(2),
      e.reference,
    ]);

    const csv  = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `my-statement-${this.startDate}-to-${this.endDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  getTypeClass(type: string): string {
    const t = (type || '').toLowerCase();
    if (t === 'credit' || t === 'commission') return 'text-success-600 dark:text-success-400';
    if (t === 'debit'  || t === 'transfer')   return 'text-danger-600 dark:text-danger-400';
    return 'text-surface-600 dark:text-surface-300';
  }

  getAmountSign(type: string): string {
    const t = (type || '').toLowerCase();
    if (t === 'credit' || t === 'commission') return '+';
    if (t === 'debit'  || t === 'transfer')   return '-';
    return '';
  }
}
