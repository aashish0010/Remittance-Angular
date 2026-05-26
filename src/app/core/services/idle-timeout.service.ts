import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, fromEvent, merge, timer, Subscription } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { AuthStateService } from './auth-state.service';
import { AppSettingsService } from './app-settings.service';

@Injectable({ providedIn: 'root' })
export class IdleTimeoutService implements OnDestroy {
  private readonly WARNING_LEAD_MS = 2 * 60 * 1000; // show warning 2 min before forced logout

  private _idleTimeoutMs = 30 * 60 * 1000;
  private _warningAtMs   = 28 * 60 * 1000;

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
   * Call once from layout ngOnInit after login.
   * Idle threshold: user.sessionTimeout setting (default 30 min).
   * Warning fires at threshold - 2 min; countdown runs to 0 then force-logout.
   */
  start(): void {
    this.stop();

    const timeoutMinutes = Math.max(this.appSettings.sessionTimeoutMinutes || 30, 1);
    this._idleTimeoutMs = timeoutMinutes * 60 * 1000;
    // Warning fires 2 min before the full idle timeout (minimum at time 0)
    this._warningAtMs = Math.max(this._idleTimeoutMs - this.WARNING_LEAD_MS, 0);

    this.zone.runOutsideAngular(() => {
      const activity$ = merge(
        fromEvent(document, 'mousemove'),
        fromEvent(document, 'mousedown'),
        fromEvent(document, 'keydown'),
        fromEvent(document, 'touchstart'),
        fromEvent(document, 'scroll'),
      );

      // Activity resets the timer; if warning is visible, dismiss it
      this.timerSub = activity$.pipe(
        tap(() => { if (this._showWarning) this.dismissWarning(); }),
        switchMap(() => timer(this._warningAtMs)),
        takeUntil(this.destroy$),
      ).subscribe(() => {
        this.zone.run(() => this._triggerWarning());
      });

      // Initial timer — fires if user is idle from the moment they log in
      this.warningSub = timer(this._warningAtMs).pipe(
        takeUntil(this.destroy$),
      ).subscribe(() => {
        this.zone.run(() => this._triggerWarning());
      });
    });
  }

  private _triggerWarning(): void {
    this._showWarning = true;
    this._remainingSeconds = Math.round(this.WARNING_LEAD_MS / 1000);

    // Countdown ticks every second inside Angular zone so CD picks it up
    this.countdownInterval = setInterval(() => {
      this._remainingSeconds--;
      if (this._remainingSeconds <= 0) {
        this._forceLogout();
      }
    }, 1000);
  }

  /** Dismiss warning and reset countdown (safe to call from any zone context). */
  dismissWarning(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = undefined;
    }
    // Always run inside zone so Angular detects the binding change
    this.zone.run(() => {
      this._showWarning = false;
      this._remainingSeconds = 0;
    });
  }

  /** User clicked "Stay Logged In" — dismiss and restart the full idle timer. */
  extendSession(): void {
    this.dismissWarning();
    this.stop();
    this.start();
  }

  private _forceLogout(): void {
    this.dismissWarning();
    this.stop();
    this.auth.logout();
    this.router.navigate(['/auth/login'], { queryParams: { reason: 'timeout' } });
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
