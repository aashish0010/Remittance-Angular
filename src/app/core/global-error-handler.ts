import { ErrorHandler, Injectable, inject } from '@angular/core';
import { ErrorTrackingService } from './services/error-tracking.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private tracker = inject(ErrorTrackingService);

  handleError(error: unknown): void {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error('[GlobalErrorHandler]', err);
    this.tracker.trackError(err, { source: 'global_handler' });
  }
}
