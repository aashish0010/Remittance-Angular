import { Component, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { ApiService } from '../../../../core/services/api.service';
import { ExportService } from '../../../../core/services/export.service';
import { NotificationService } from '../../../../core/services/notification.service';

interface Settlement {
  agentId: number;
  agentName: string;
  agentType: string;
  creditLimit: number;
  currentBalance: number;
  availableBalance: number;
  transactionsSent: number;
  transactionsAsPayout: number;
  sendVolume: number;
  commissionEarned: number;
  creditsReceived: number;
  debitsApplied: number;
  netPosition: number;
}

@Component({
  selector: 'app-settlement-report',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DecimalPipe,
    DatePicker
  ],
  templateUrl: './settlement-report.component.html',
  styleUrls: ['./settlement-report.component.scss']
})
export class SettlementReportComponent {
  private api = inject(ApiService);
  private exportService = inject(ExportService);
  private notification = inject(NotificationService);

  startDate: Date | null = null;
  endDate: Date | null = null;
  loading = false;

  totalAgents = 0;
  totalSendVolume = 0;
  totalCommissionPaid = 0;
  settlements: Settlement[] = [];

  private formatDate(d: Date | null): string {
    if (!d) return '';
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  loadReport(): void {
    this.loading = true;
    const params: { startDate?: string; endDate?: string } = {};
    if (this.startDate) params.startDate = this.formatDate(this.startDate);
    if (this.endDate) params.endDate = this.formatDate(this.endDate);

    this.api.getSettlementReport(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data) {
          this.totalAgents = res.data.totalAgents;
          this.totalSendVolume = res.data.totalSendVolume;
          this.totalCommissionPaid = res.data.totalCommissionPaid;
          this.settlements = res.data.settlements || [];
        } else {
          this.notification.error('Failed to load settlement report.');
        }
      },
      error: () => {
        this.loading = false;
        this.notification.error('An error occurred while loading the report.');
      }
    });
  }

  exportReport(format: string): void {
    const params: any = {};
    if (this.startDate) params.startDate = this.formatDate(this.startDate);
    if (this.endDate) params.endDate = this.formatDate(this.endDate);
    this.exportService.export('api/admin/reports/settlement/export', params, format as any);
  }
}
