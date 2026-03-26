import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../../../../core/services/api.service';
import { ExportService } from '../../../../core/services/export.service';
import { NotificationService } from '../../../../core/services/notification.service';

interface TransactionRow {
  id: number;
  referenceNumber: string;
  senderName: string;
  senderCountry: string;
  receiverName: string;
  receiverCountry: string;
  sendAmount: number;
  sendCurrency: string;
  receiveAmount: number;
  receiveCurrency: string;
  totalCommission: number;
  agentCommission: number;
  companyCommission: number;
  status: string;
  sendingAgentName: string;
  payoutAgentName: string;
  createdAt: string;
  completedAt: string | null;
}

interface TransactionReportData {
  totalCount: number;
  totalSendVolume: number;
  totalReceiveVolume: number;
  totalCommission: number;
  transactions: TransactionRow[];
}

@Component({
  selector: 'app-transaction-report',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.scss'],
})
export class TransactionReportComponent implements OnInit {
  Math = Math;

  // Filters
  startDate: string = '';
  endDate: string = '';
  agentId?: number;
  status?: string;

  // Data
  agents: { id: number; businessName: string; agentType: string }[] = [];
  reportData: TransactionReportData | null = null;
  loading = false;

  // Pagination
  pageSize = 25;
  pageIndex = 0;
  pageSizeOptions = [10, 25, 50, 100];

  constructor(
    private api: ApiService,
    private notify: NotificationService,
    private exportService: ExportService,
  ) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  get pagedData(): TransactionRow[] {
    if (!this.reportData?.transactions) return [];
    const start = this.pageIndex * this.pageSize;
    return this.reportData.transactions.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    if (!this.reportData) return 0;
    return Math.ceil(this.reportData.totalCount / this.pageSize);
  }

  get rangeStart(): number {
    return this.reportData ? this.pageIndex * this.pageSize + 1 : 0;
  }

  get rangeEnd(): number {
    if (!this.reportData) return 0;
    return Math.min((this.pageIndex + 1) * this.pageSize, this.reportData.totalCount);
  }

  onPageSizeChange(): void {
    this.pageIndex = 0;
  }

  goToFirst(): void {
    this.pageIndex = 0;
  }

  goToPrevious(): void {
    if (this.pageIndex > 0) this.pageIndex--;
  }

  goToNext(): void {
    if (this.pageIndex < this.totalPages - 1) this.pageIndex++;
  }

  goToLast(): void {
    this.pageIndex = this.totalPages - 1;
  }

  loadAgents(): void {
    this.api.getReportAgentsList().subscribe({
      next: (res) => {
        if (res.success) {
          this.agents = res.data ?? [];
        }
      },
    });
  }

  loadReport(): void {
    this.loading = true;
    this.pageIndex = 0;

    const params: any = {};
    if (this.startDate) params.startDate = this.startDate;
    if (this.endDate) params.endDate = this.endDate;
    if (this.agentId) params.agentId = this.agentId;
    if (this.status) params.status = this.status;

    this.api.getTransactionReport(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.reportData = res.data;
        } else {
          this.notify.error('Failed to load transaction report');
        }
      },
      error: () => {
        this.loading = false;
        this.notify.error('Failed to load transaction report');
      },
    });
  }

  exportReport(format: string): void {
    const params: any = {};
    if (this.startDate) params.startDate = this.startDate;
    if (this.endDate) params.endDate = this.endDate;
    if (this.agentId) params.agentId = this.agentId;
    if (this.status) params.status = this.status;
    this.exportService.export('api/admin/reports/transactions/export', params, format as any);
  }
}
