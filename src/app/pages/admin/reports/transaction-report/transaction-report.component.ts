import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ApiService } from '../../../../core/services/api.service';
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
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTooltipModule,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.scss'],
})
export class TransactionReportComponent implements OnInit {
  // Filters
  startDate = '';
  endDate = '';
  agentId?: number;
  status?: string;

  // Data
  agents: { id: number; businessName: string; agentType: string }[] = [];
  reportData: TransactionReportData | null = null;
  loading = false;

  // Pagination
  pageSize = 25;
  pageIndex = 0;

  displayedColumns: string[] = [
    'referenceNumber',
    'senderName',
    'receiverName',
    'sendAmount',
    'receiveAmount',
    'commission',
    'status',
    'createdAt',
  ];

  constructor(
    private api: ApiService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  get pagedData(): TransactionRow[] {
    if (!this.reportData?.transactions) return [];
    const start = this.pageIndex * this.pageSize;
    return this.reportData.transactions.slice(start, start + this.pageSize);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
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
}
