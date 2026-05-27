import { Injectable } from '@angular/core';
import { Analytics, getAnalytics, isSupported, logEvent } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ErrorTrackingService {
  private analytics: Analytics | null = null;
  private initialized = false;

  async init(): Promise<void> {
    if (this.initialized) return;
    this.initialized = true;

    try {
      const supported = await isSupported();
      if (!supported) return;
      const app = initializeApp(environment.firebase);
      this.analytics = getAnalytics(app);
    } catch {
      // Firebase init failure must not crash the app
    }
  }

  trackError(error: Error | string, context?: Record<string, string>): void {
    if (!this.analytics) return;
    const message = error instanceof Error ? error.message : error;
    logEvent(this.analytics, 'app_error', {
      error_message: message.substring(0, 100),
      error_stack: error instanceof Error ? (error.stack?.substring(0, 150) ?? '') : '',
      ...context,
    });
  }

  trackHttpError(status: number, url: string, method: string): void {
    if (!this.analytics) return;
    const endpoint = url.replace(environment.apiUrl, '').split('?')[0].substring(0, 100);
    logEvent(this.analytics, 'http_error', {
      status_code: String(status),
      endpoint,
      method,
    });
  }

  trackTransactionError(errorCode: string, corridor: string): void {
    if (!this.analytics) return;
    logEvent(this.analytics, 'transaction_error', { error_code: errorCode, corridor });
  }

  trackEvent(eventName: string, params?: Record<string, string>): void {
    if (!this.analytics) return;
    logEvent(this.analytics, eventName, params);
  }
}
