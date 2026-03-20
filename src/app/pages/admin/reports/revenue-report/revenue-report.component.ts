import { Component } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../../../core/services/api.service';
import { NotificationService } from '../../../../core/services/notification.service';

interface MonthlyBreakdown {
  year: number;
  month: number;
  transactionCount: number;
  volume: number;
  totalCommission: number;
  companyCommission: number;
  agentCommission: number;
  payoutCommission: number;
}

interface CorridorBreakdown {
  corridor: string;
  transactionCount: number;
  volume: number;
  commission: number;
}

interface RevenueReport {
  totalVolume: number;
  totalCommission: number;
  companyCommission: number;
  agentCommission: number;
  payoutCommission: number;
  fxGain: number;
  netRevenue: number;
  transactionCount: number;
  monthlyBreakdown: MonthlyBreakdown[];
  corridorBreakdown: CorridorBreakdown[];
}

@Component({
  selector: 'app-revenue-report',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './revenue-report.component.html',
  styleUrls: ['./revenue-report.component.scss'],
})
export class RevenueReportComponent {
  startDate = '';
  endDate = '';
  loading = false;
  report: RevenueReport | null = null;

  monthlyColumns = ['month', 'transactionCount', 'volume', 'totalCommission', 'companyCommission'];
  corridorColumns = ['corridor', 'transactionCount', 'volume', 'commission'];

  constructor(
    private api: ApiService,
    private notification: NotificationService
  ) {}

  loadReport(): void {
    this.loading = true;
    const params: { startDate?: string; endDate?: string } = {};
    if (this.startDate) params.startDate = this.startDate;
    if (this.endDate) params.endDate = this.endDate;

    this.api.getRevenueReport(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.report = res.data;
        } else {
          this.notification.error('Failed to load revenue report');
        }
      },
      error: () => {
        this.loading = false;
        this.notification.error('Failed to load revenue report');
      },
    });
  }

  formatMonth(year: number, month: number): string {
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  }
}
