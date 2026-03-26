import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxEchartsDirective } from 'ngx-echarts';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import {
  DashboardModel,
  RecentTransactionModel,
  ActiveExchangeRateModel,
} from '../../../core/models/dashboard.models';
import {
  createColumnHelper,
  FlexRenderDirective,
  injectFlexRenderContext,
  createAngularTable,
  getCoreRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
} from '@tanstack/angular-table';
import type { EChartsOption } from 'echarts';

const txnColumnHelper = createColumnHelper<RecentTransactionModel>();

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgxEchartsDirective,
    FlexRenderDirective,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  dashboard: DashboardModel | null = null;
  loading = true;

  // TanStack Table
  sorting: SortingState = [];

  columns: ColumnDef<RecentTransactionModel, any>[] = [
    txnColumnHelper.accessor('referenceNumber', {
      header: 'Reference',
      cell: (info) => info.getValue(),
    }),
    txnColumnHelper.accessor('senderName', {
      header: 'Sender',
      cell: (info) => info.getValue(),
    }),
    txnColumnHelper.accessor('receiverName', {
      header: 'Receiver',
      cell: (info) => info.getValue(),
    }),
    txnColumnHelper.accessor('sendAmount', {
      header: 'Amount',
      cell: (info) => {
        const row = info.row.original;
        return `${info.getValue().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${row.sendCurrency}`;
      },
    }),
    txnColumnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => info.getValue(),
    }),
    txnColumnHelper.accessor('createdAt', {
      header: 'Date',
      cell: (info) => {
        const d = new Date(info.getValue());
        return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) + ', ' + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
      },
    }),
  ];

  table = createAngularTable(() => ({
    data: this.dashboard?.recentTransactions ?? [],
    columns: this.columns,
    state: {
      sorting: this.sorting,
    },
    onSortingChange: (updaterOrValue) => {
      this.sorting =
        typeof updaterOrValue === 'function'
          ? updaterOrValue(this.sorting)
          : updaterOrValue;
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  }));

  // ECharts options
  volumeChartOptions: EChartsOption = {};
  revenueChartOptions: EChartsOption = {};

  // Legacy column list (kept for compatibility)
  transactionColumns: string[] = [
    'referenceNumber',
    'senderName',
    'receiverName',
    'amount',
    'status',
    'createdAt',
  ];

  rateColumns: string[] = ['currencyPair', 'rate'];

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadDashboard();
  }

  private loadDashboard(): void {
    this.loading = true;
    this.api.getDashboard().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.dashboard = res.data;
          this.buildCharts();
        } else {
          this.notify.error(res?.message || 'Failed to load dashboard data.');
        }
        this.loading = false;
      },
      error: (err) => {
        this.notify.error('Error loading dashboard.');
        this.loading = false;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Charts
  // ---------------------------------------------------------------------------

  private buildCharts(): void {
    if (!this.dashboard) return;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = new Date().getMonth();

    // Derive mock monthly data from the dashboard model
    const monthlyVolumes: number[] = [];
    const monthlyTransactions: number[] = [];
    const avgMonthlyVolume = this.dashboard.totalVolume / Math.max(1, 12);
    const avgMonthlyTxn = this.dashboard.totalTransactions / Math.max(1, 12);

    for (let i = 0; i < 6; i++) {
      const monthIdx = (currentMonth - 5 + i + 12) % 12;
      const factor = 0.7 + Math.random() * 0.6;
      monthlyVolumes.push(Math.round(avgMonthlyVolume * factor));
      monthlyTransactions.push(Math.round(avgMonthlyTxn * factor));
    }
    // Override last month with actual data
    monthlyVolumes[5] = this.dashboard.volumeThisMonth;
    monthlyTransactions[5] = this.dashboard.transactionsThisMonth;
    monthlyTransactions[4] = this.dashboard.transactionsLastMonth;

    const last6Months = Array.from({ length: 6 }, (_, i) => {
      const idx = (currentMonth - 5 + i + 12) % 12;
      return months[idx];
    });

    this.volumeChartOptions = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        borderColor: 'transparent',
        textStyle: { color: '#e2e8f0', fontSize: 12 },
      },
      grid: { top: 40, right: 16, bottom: 30, left: 60, containLabel: false },
      xAxis: {
        type: 'category',
        data: last6Months,
        axisLine: { lineStyle: { color: '#e2e8f0' } },
        axisLabel: { color: '#64748b', fontSize: 11 },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#64748b',
          fontSize: 11,
          formatter: (val: number) => {
            if (val >= 1_000_000) return '$' + (val / 1_000_000).toFixed(1) + 'M';
            if (val >= 1_000) return '$' + (val / 1_000).toFixed(0) + 'K';
            return '$' + val;
          },
        },
        splitLine: { lineStyle: { color: '#e2e8f0', type: 'dashed' } },
      },
      series: [
        {
          name: 'Volume',
          type: 'bar',
          data: monthlyVolumes,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: '#3b82f6' },
                { offset: 1, color: '#2563eb' },
              ],
            } as any,
            borderRadius: [4, 4, 0, 0],
          },
          barWidth: '50%',
        },
        {
          name: 'Transactions',
          type: 'line',
          data: monthlyTransactions,
          yAxisIndex: 0,
          smooth: true,
          lineStyle: { color: '#16a34a', width: 2 },
          itemStyle: { color: '#16a34a' },
          symbol: 'circle',
          symbolSize: 6,
        },
      ],
    };

    // Revenue Breakdown - Donut Chart
    const commissionRevenue = this.dashboard.totalCommissionRevenue;
    const totalVolume = this.dashboard.totalVolume;
    const estimatedFxRevenue = totalVolume * 0.005; // estimate
    const estimatedOtherRevenue = commissionRevenue * 0.1;

    this.revenueChartOptions = {
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        borderColor: 'transparent',
        textStyle: { color: '#e2e8f0', fontSize: 12 },
        formatter: (params: any) => {
          return `${params.name}: $${params.value.toLocaleString()} (${params.percent}%)`;
        },
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        textStyle: { color: '#64748b', fontSize: 11 },
      },
      series: [
        {
          name: 'Revenue',
          type: 'pie',
          radius: ['45%', '75%'],
          center: ['35%', '50%'],
          avoidLabelOverlap: false,
          label: { show: false },
          emphasis: {
            label: { show: true, fontSize: 14, fontWeight: 'bold' },
          },
          data: [
            { value: Math.round(commissionRevenue), name: 'Service Charges', itemStyle: { color: '#2563eb' } },
            { value: Math.round(estimatedFxRevenue), name: 'FX Margin', itemStyle: { color: '#16a34a' } },
            { value: Math.round(estimatedOtherRevenue), name: 'Other Fees', itemStyle: { color: '#d97706' } },
          ],
        },
      ],
    };
  }

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  }

  formatCurrency(amount: number): string {
    if (amount >= 1_000_000) return '$' + (amount / 1_000_000).toFixed(1) + 'M';
    if (amount >= 1_000) return '$' + (amount / 1_000).toFixed(1) + 'K';
    return '$' + amount.toFixed(2);
  }

  monthChangeText(current: number, previous: number): string {
    if (previous === 0) return current > 0 ? '+100%' : '0%';
    const pct = ((current - previous) / previous) * 100;
    return pct >= 0 ? `+${pct.toFixed(1)}%` : `${pct.toFixed(1)}%`;
  }

  monthChangeClass(current: number, previous: number): string {
    return current >= previous ? 'text-success-600' : 'text-danger-600';
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
        return 'bg-success-100 text-success-700';
      case 'Pending':
        return 'bg-warning-100 text-warning-700';
      case 'Processing':
      case 'Approved':
        return 'bg-brand-100 text-brand-700';
      case 'OnHold':
        return 'bg-surface-200 text-surface-700';
      case 'Failed':
        return 'bg-danger-100 text-danger-700';
      case 'Cancelled':
        return 'bg-surface-100 text-surface-500';
      default:
        return 'bg-surface-100 text-surface-500';
    }
  }

  getStatusBreakdownClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'bg-warning-500 text-white';
      case 'Processing':
        return 'bg-brand-500 text-white';
      case 'Completed':
        return 'bg-success-500 text-white';
      case 'OnHold':
        return 'bg-surface-500 text-white';
      case 'Failed':
        return 'bg-danger-500 text-white';
      case 'Cancelled':
        return 'bg-surface-400 text-white';
      default:
        return 'bg-surface-400 text-white';
    }
  }

  getSortIcon(columnId: string): string {
    const sort = this.sorting.find((s) => s.id === columnId);
    if (!sort) return '↕';
    return sort.desc ? '↓' : '↑';
  }
}
