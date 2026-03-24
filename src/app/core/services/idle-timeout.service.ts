import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, fromEvent, merge, timer, Subscription } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { AuthStateService } from './auth-state.service';

/**
 * Tracks user activity (mouse, keyboard, touch, scroll) and auto-logs out
 * after a period of inactivity.
 *
 * - Timeout: 15 minutes of inactivity
 * - Warning: shown at 12 minutes (3 min before logout)
 * - Resets on any user interaction
 */
@Injectable({ providedIn: 'root' })
export class IdleTimeoutService implements OnDestroy {
  private readonly IDLE_TIMEOUT_MS = 15 * 60 * 1000;   // 15 minutes
  private readonly WARNING_AT_MS = 12 * 60 * 1000;     // show warning at 12 min
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
    private zone: NgZone
  ) {}

  /**
   * Call this once from the root layout (admin/agent/customer) after login.
   */
  start(): void {
    this.stop();

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
        switchMap(() => timer(this.WARNING_AT_MS)),
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.zone.run(() => this.showTimeoutWarning());
      });

      // Start initial timer (in case user doesn't move at all)
      this.warningSub = timer(this.WARNING_AT_MS).pipe(
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.zone.run(() => this.showTimeoutWarning());
      });
    });
  }

  private showTimeoutWarning(): void {
    this._showWarning = true;
    this._remainingSeconds = Math.floor((this.IDLE_TIMEOUT_MS - this.WARNING_AT_MS) / 1000);

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
