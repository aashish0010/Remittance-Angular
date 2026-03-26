import { Component } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../../core/services/api.service';
import { ExportService } from '../../../../core/services/export.service';
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

  constructor(
    private api: ApiService,
    private notification: NotificationService,
    private exportService: ExportService,
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

  exportReport(format: string): void {
    const params: any = {};
    if (this.startDate) params.startDate = this.startDate;
    if (this.endDate) params.endDate = this.endDate;
    this.exportService.export('api/admin/reports/revenue/export', params, format as any);
  }
}
