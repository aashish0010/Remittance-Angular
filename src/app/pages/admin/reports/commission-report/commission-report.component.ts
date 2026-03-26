import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../../core/services/api.service';
import { ExportService } from '../../../../core/services/export.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-commission-report',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [DecimalPipe, DatePipe],
  templateUrl: './commission-report.component.html',
  styleUrls: ['./commission-report.component.scss'],
})
export class CommissionReportComponent implements OnInit {
  agents: { id: number; businessName: string; agentType: string }[] = [];
  startDate: string = '';
  endDate: string = '';
  agentId: number | null = null;
  loading = false;

  report: {
    totalEarnings: number;
    totalReversed: number;
    agentSummaries: any[];
  } | null = null;

  constructor(
    private api: ApiService,
    private notification: NotificationService,
    private exportService: ExportService,
    private decimalPipe: DecimalPipe,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.setDefaultDates();
    this.loadAgents();
    this.loadReport();
  }

  private setDefaultDates(): void {
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    this.endDate = this.toDateString(today);
    this.startDate = this.toDateString(thirtyDaysAgo);
  }

  private toDateString(d: Date): string {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  loadAgents(): void {
    this.api.getReportAgentsList().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.agents = res.data;
        }
      },
      error: () => this.notification.error('Failed to load agents list.'),
    });
  }

  loadReport(): void {
    this.loading = true;
    const params: { startDate?: string; endDate?: string; agentId?: number } = {
      startDate: this.startDate,
      endDate: this.endDate,
    };
    if (this.agentId) {
      params.agentId = this.agentId;
    }
    this.api.getCommissionReport(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data) {
          this.report = res.data;
        } else {
          this.report = null;
          if (res.message) {
            this.notification.warn(res.message);
          }
        }
      },
      error: () => {
        this.loading = false;
        this.notification.error('Failed to load commission report.');
      },
    });
  }

  exportReport(format: string): void {
    const params: any = {
      startDate: this.startDate,
      endDate: this.endDate,
    };
    if (this.agentId) params.agentId = this.agentId;
    this.exportService.export('api/admin/reports/commissions/export', params, format as any);
  }
}
