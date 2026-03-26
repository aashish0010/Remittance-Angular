import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-transactions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-50 m-0">My Transactions</h2>
      <p class="mt-1 text-sm text-surface-500 dark:text-surface-400">View and track your remittance history</p>
    </div>

    <!-- Filter Bar Placeholder -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-4 shadow-soft mb-5">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-100 dark:bg-surface-700 text-sm text-surface-500 dark:text-surface-400">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
          </svg>
          <span>Filters coming soon</span>
        </div>
        <div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-100 dark:bg-surface-700 text-sm text-surface-500 dark:text-surface-400">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span>Search coming soon</span>
        </div>
      </div>
    </div>

    <!-- Transaction List Placeholder -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden">
      <!-- Table Header -->
      <div class="hidden sm:grid grid-cols-5 gap-4 px-6 py-3 bg-surface-50 dark:bg-surface-700/50 border-b border-surface-200 dark:border-surface-700">
        <span class="text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider">Date</span>
        <span class="text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider">Recipient</span>
        <span class="text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider">Amount</span>
        <span class="text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider">Status</span>
        <span class="text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider">Reference</span>
      </div>

      <!-- Empty State -->
      <div class="flex flex-col items-center text-center py-16 px-6">
        <div class="flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-100 dark:bg-surface-700 mb-5">
          <svg class="w-8 h-8 text-surface-400 dark:text-surface-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.192-.14 1.743" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-2">Transaction History Coming Soon</h3>
        <p class="text-sm text-surface-500 dark:text-surface-400 leading-relaxed max-w-sm mb-6">
          Customer transaction history is under development. You will be able to view all your past transfers, track pending transactions, and download receipts.
        </p>
        <a routerLink="/customer/send"
           class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition-colors shadow-sm">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Make Your First Transfer
        </a>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class CustomerTransactionsComponent {}
