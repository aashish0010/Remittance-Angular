import { Component, inject } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ApiService } from '../../../../core/services/api.service';
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
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './settlement-report.component.html',
  styleUrls: ['./settlement-report.component.scss']
})
export class SettlementReportComponent {
  private api = inject(ApiService);
  private notification = inject(NotificationService);

  startDateObj: Date | null = null;
  endDateObj: Date | null = null;
  loading = false;

  totalAgents = 0;
  totalSendVolume = 0;
  totalCommissionPaid = 0;
  settlements: Settlement[] = [];

  displayedColumns: string[] = [
    'agentName',
    'agentType',
    'creditLimit',
    'currentBalance',
    'availableBalance',
    'transactionsSent',
    'transactionsAsPayout',
    'sendVolume',
    'commissionEarned',
    'creditsReceived',
    'debitsApplied'
  ];

  private formatDate(d: Date | null): string {
    if (!d) return '';
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  loadReport(): void {
    this.loading = true;
    const params: { startDate?: string; endDate?: string } = {};
    if (this.startDateObj) params.startDate = this.formatDate(this.startDateObj);
    if (this.endDateObj) params.endDate = this.formatDate(this.endDateObj);

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
}
