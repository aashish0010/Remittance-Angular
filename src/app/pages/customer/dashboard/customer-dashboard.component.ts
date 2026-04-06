import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-50 m-0">Customer Dashboard</h2>
      <p class="mt-1 text-sm text-surface-500 dark:text-surface-400">Overview of your account and recent activity</p>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/30">
            <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <span class="text-sm font-medium text-surface-500 dark:text-surface-400">Total Sent</span>
        </div>
        <p class="text-2xl font-bold text-surface-900 dark:text-surface-50">--</p>
      </div>

      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-success-50 dark:bg-success-900/30">
            <svg class="w-5 h-5 text-success-600 dark:text-success-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <span class="text-sm font-medium text-surface-500 dark:text-surface-400">Completed</span>
        </div>
        <p class="text-2xl font-bold text-surface-900 dark:text-surface-50">--</p>
      </div>

      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-warning-50 dark:bg-warning-900/30">
            <svg class="w-5 h-5 text-warning-600 dark:text-warning-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <span class="text-sm font-medium text-surface-500 dark:text-surface-400">Pending</span>
        </div>
        <p class="text-2xl font-bold text-surface-900 dark:text-surface-50">--</p>
      </div>
    </div>

    <!-- Under Development Notice -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-8 shadow-soft">
      <div class="flex flex-col items-center text-center max-w-md mx-auto">
        <div class="flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-100 dark:bg-surface-700 mb-5">
          <svg class="w-8 h-8 text-surface-400 dark:text-surface-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.192-.14 1.743" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-2">Dashboard Coming Soon</h3>
        <p class="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-6">
          The Customer Portal is under development. Soon you will be able to view your remittance history, track transfers, and manage your account.
        </p>
        <a routerLink="/customer/send"
           class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition-colors shadow-sm">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
          Send Money
        </a>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class CustomerDashboardComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage('My Dashboard', 'Track your remittance transfers, view transaction history, and manage your account.');
  }
}
