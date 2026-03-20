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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ApiService } from '../../../../core/services/api.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-commission-report',
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
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [DecimalPipe, DatePipe],
  templateUrl: './commission-report.component.html',
  styleUrls: ['./commission-report.component.scss'],
})
export class CommissionReportComponent implements OnInit {
  agents: { id: number; businessName: string; agentType: string }[] = [];
  startDateObj: Date | null = null;
  endDateObj: Date | null = null;
  agentId: number | null = null;
  loading = false;

  report: {
    totalEarnings: number;
    totalReversed: number;
    agentSummaries: any[];
  } | null = null;

  displayedColumns: string[] = [
    'agentName',
    'agentType',
    'sendingCommission',
    'payoutCommission',
    'totalEarnings',
    'transactionCount',
  ];

  constructor(
    private api: ApiService,
    private notification: NotificationService,
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
    this.endDateObj = today;
    this.startDateObj = thirtyDaysAgo;
  }

  private formatDate(d: Date | null): string {
    if (!d) return '';
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
      startDate: this.formatDate(this.startDateObj),
      endDate: this.formatDate(this.endDateObj),
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
}
