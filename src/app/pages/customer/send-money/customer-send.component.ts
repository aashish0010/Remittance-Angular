import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-send',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-50 m-0">Send Money</h2>
      <p class="mt-1 text-sm text-surface-500 dark:text-surface-400">Transfer funds to recipients worldwide</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Send Form Placeholder -->
      <div class="lg:col-span-2 rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-8 shadow-soft">
        <div class="flex flex-col items-center text-center max-w-sm mx-auto py-8">
          <div class="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-900/30 mb-5">
            <svg class="w-8 h-8 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-2">Send Money Feature Coming Soon</h3>
          <p class="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-6">
            Customer send money feature is under development. You will be able to initiate transfers, select recipients, and choose payment methods.
          </p>
          <div class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800">
            <svg class="w-4 h-4 text-warning-600 dark:text-warning-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <span class="text-xs font-medium text-warning-700 dark:text-warning-300">This feature is not yet available</span>
          </div>
        </div>
      </div>

      <!-- Sidebar Info -->
      <div class="space-y-5">
        <!-- Quick Info Card -->
        <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
          <h4 class="text-sm font-semibold text-surface-900 dark:text-surface-50 mb-4">How It Works</h4>
          <div class="space-y-4">
            <div class="flex gap-3">
              <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex-shrink-0">
                <span class="text-xs font-bold text-brand-600 dark:text-brand-400">1</span>
              </div>
              <div>
                <p class="text-sm font-medium text-surface-800 dark:text-surface-200">Enter Amount</p>
                <p class="text-xs text-surface-500 dark:text-surface-400">Choose how much to send</p>
              </div>
            </div>
            <div class="flex gap-3">
              <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex-shrink-0">
                <span class="text-xs font-bold text-brand-600 dark:text-brand-400">2</span>
              </div>
              <div>
                <p class="text-sm font-medium text-surface-800 dark:text-surface-200">Select Recipient</p>
                <p class="text-xs text-surface-500 dark:text-surface-400">Pick from saved contacts or add new</p>
              </div>
            </div>
            <div class="flex gap-3">
              <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex-shrink-0">
                <span class="text-xs font-bold text-brand-600 dark:text-brand-400">3</span>
              </div>
              <div>
                <p class="text-sm font-medium text-surface-800 dark:text-surface-200">Confirm & Send</p>
                <p class="text-xs text-surface-500 dark:text-surface-400">Review details and submit</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Exchange Rate Card -->
        <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
          <h4 class="text-sm font-semibold text-surface-900 dark:text-surface-50 mb-3">Exchange Rates</h4>
          <p class="text-xs text-surface-500 dark:text-surface-400 leading-relaxed">
            Live exchange rates will be displayed here once the feature launches. You will always see the rate before confirming a transfer.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class CustomerSendComponent {}
