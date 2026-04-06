import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, fromEvent, merge, timer, Subscription } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { AuthStateService } from './auth-state.service';
import { AppSettingsService } from './app-settings.service';

/**
 * Tracks user activity (mouse, keyboard, touch, scroll) and auto-logs out
 * after a period of inactivity.
 *
 * - Timeout: driven by user.sessionTimeout setting (default 15 min)
 * - Warning: shown 3 minutes before logout (or at 80% of timeout if < 4 min total)
 * - Resets on any user interaction
 */
@Injectable({ providedIn: 'root' })
export class IdleTimeoutService implements OnDestroy {
  // Set at start() time from settings; stored so showTimeoutWarning() can use them
  private _idleTimeoutMs = 15 * 60 * 1000;
  private _warningAtMs   = 12 * 60 * 1000;

  private destroy$ = new Subject<void>();
  private timerSub?: Subscription;
  private warningSub?: Subscription;
  private _showWarning = false;
  private _remainingSeconds = 0;
  private countdownInterval?: ReturnType<typeof setInterval>;

  get showWarning(): boolean { return this._showWarning; }
  get remainingSeconds(): number { return this._remainingSeconds; }

  constructor(
    private auth: AuthStateService,
    private router: Router,
    private zone: NgZone,
    private appSettings: AppSettingsService,
  ) {}

  /**
   * Call this once from the root layout (admin/agent/customer) after login.
   * Reads user.sessionTimeout from AppSettingsService (defaults to 15 min).
   */
  start(): void {
    this.stop();

    // Compute timeouts from settings (uses cached value or default)
    const timeoutMinutes = this.appSettings.sessionTimeoutMinutes;
    this._idleTimeoutMs = timeoutMinutes * 60 * 1000;
    // Warning shown 3 minutes before logout; at least 1 minute of warning time
    const warningLeadMs = Math.min(3 * 60 * 1000, Math.floor(this._idleTimeoutMs * 0.2));
    this._warningAtMs = Math.max(this._idleTimeoutMs - warningLeadMs, 0);

    // Run outside Angular zone to avoid triggering change detection on every mouse move
    this.zone.runOutsideAngular(() => {
      const activity$ = merge(
        fromEvent(document, 'mousemove'),
        fromEvent(document, 'mousedown'),
        fromEvent(document, 'keydown'),
        fromEvent(document, 'touchstart'),
        fromEvent(document, 'scroll')
      );

      // Each activity event resets the timer
      this.timerSub = activity$.pipe(
        tap(() => this.dismissWarning()),
        switchMap(() => timer(this._warningAtMs)),
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.zone.run(() => this.showTimeoutWarning());
      });

      // Start initial timer (in case user doesn't move at all)
      this.warningSub = timer(this._warningAtMs).pipe(
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.zone.run(() => this.showTimeoutWarning());
      });
    });
  }

  private showTimeoutWarning(): void {
    this._showWarning = true;
    this._remainingSeconds = Math.floor((this._idleTimeoutMs - this._warningAtMs) / 1000);

    this.countdownInterval = setInterval(() => {
      this._remainingSeconds--;
      if (this._remainingSeconds <= 0) {
        this.forceLogout();
      }
    }, 1000);
  }

  dismissWarning(): void {
    this._showWarning = false;
    this._remainingSeconds = 0;
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = undefined;
    }
  }

  extendSession(): void {
    this.dismissWarning();
    // Restart the idle timer
    this.stop();
    this.start();
  }

  private forceLogout(): void {
    this.dismissWarning();
    this.stop();
    this.auth.logout();
    this.router.navigate(['/auth/login'], {
      queryParams: { reason: 'timeout' }
    });
  }

  stop(): void {
    this.dismissWarning();
    this.timerSub?.unsubscribe();
    this.warningSub?.unsubscribe();
    this.timerSub = undefined;
    this.warningSub = undefined;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.stop();
  }
}
