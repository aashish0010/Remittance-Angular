import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { ApiService } from '../../../../core/services/api.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-agent-statement',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePicker,
  ],
  providers: [DecimalPipe, DatePipe],
  templateUrl: './agent-statement.component.html',
  styleUrls: ['./agent-statement.component.scss'],
})
export class AgentStatementComponent implements OnInit {
  agents: { id: number; businessName: string; agentType: string }[] = [];
  selectedAgentId: number = 0;
  startDateObj: Date | null = null;
  endDateObj: Date | null = null;
  loading = false;

  report: any = null;
  ledgerEntries: any[] = [];
  displayedColumns: string[] = ['createdAt', 'entryType', 'amount', 'balanceAfter', 'description'];

  balanceEntry = {
    agentId: 0,
    entryType: 'Credit',
    amount: 0,
    description: '',
  };

  submittingEntry = false;

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
    const params: any = { startDate: this.formatDate(this.startDateObj), endDate: this.formatDate(this.endDateObj) };
    if (this.selectedAgentId) {
      params.agentId = this.selectedAgentId;
    }
    this.api.getAgentStatement(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data) {
          this.report = res.data;
          this.ledgerEntries = res.data.ledgerEntries || [];
        } else {
          this.report = null;
          this.ledgerEntries = [];
          if (res.message) {
            this.notification.warn(res.message);
          }
        }
      },
      error: () => {
        this.loading = false;
        this.notification.error('Failed to load agent statement.');
      },
    });
  }

  submitBalanceEntry(): void {
    if (!this.selectedAgentId) {
      this.notification.warn('Please select an agent first.');
      return;
    }
    if (!this.balanceEntry.amount || this.balanceEntry.amount <= 0) {
      this.notification.warn('Please enter a valid amount.');
      return;
    }

    this.submittingEntry = true;
    const dto = {
      agentId: this.selectedAgentId,
      entryType: this.balanceEntry.entryType,
      amount: this.balanceEntry.amount,
      description: this.balanceEntry.description || undefined,
    };

    this.api.createBalanceEntry(dto).subscribe({
      next: (res) => {
        this.submittingEntry = false;
        if (res.success) {
          this.notification.success(res.message || 'Balance entry created successfully.');
          this.balanceEntry = { agentId: 0, entryType: 'Credit', amount: 0, description: '' };
          this.loadReport();
        } else {
          this.notification.error(res.message || 'Failed to create balance entry.');
        }
      },
      error: () => {
        this.submittingEntry = false;
        this.notification.error('Failed to create balance entry.');
      },
    });
  }
}
