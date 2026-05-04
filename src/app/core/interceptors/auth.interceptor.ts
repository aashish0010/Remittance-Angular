import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError, BehaviorSubject, filter, take, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthStateService } from '../services/auth-state.service';
import { ApiResponse, LoginResponse } from '../models/auth.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authState = inject(AuthStateService);
  const router = inject(Router);
  const http = inject(HttpClient);

  // Skip auth header for login and refresh endpoints
  const isAuthEndpoint = req.url.includes('/auth/login') || req.url.includes('/auth/refresh');

  let authReq = req;
  if (authState.isAuthenticated && !isAuthEndpoint) {
    authReq = addToken(req, authState.token);
  }

  // Attach idempotency key to all state-mutating requests so the server can
  // replay the original response on duplicate retries (network timeouts, etc.)
  if ((req.method === 'POST' || req.method === 'PUT') && !isAuthEndpoint) {
    const existing = authReq.headers.get('Idempotency-Key');
    if (!existing) {
      authReq = authReq.clone({
        setHeaders: { 'Idempotency-Key': crypto.randomUUID() }
      });
    }
  }

  return next(authReq).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401 && !isAuthEndpoint) {
        return handle401Error(authReq, next, authState, router, http);
      }
      return throwError(() => error);
    })
  );
};

function addToken(request: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
}

function handle401Error(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
  authState: AuthStateService,
  router: Router,
  http: HttpClient
): Observable<any> {
  if (!isRefreshing) {
    isRefreshing = true;
    refreshTokenSubject.next(null);

    const currentRefreshToken = authState.refreshToken;
    if (!currentRefreshToken) {
      isRefreshing = false;
      // Guard: only logout if the user hasn't already re-authenticated
      if (!authState.isAuthenticated) {
        authState.logout();
        router.navigate(['/auth/login']);
      }
      return throwError(() => new HttpErrorResponse({ status: 401 }));
    }

    return http.post<ApiResponse<LoginResponse>>(
      `${environment.apiUrl}api/auth/refresh`,
      { refreshToken: currentRefreshToken }
    ).pipe(
      switchMap((response) => {
        isRefreshing = false;
        if (response?.success && response.data) {
          authState.updateTokens(response.data.token, response.data.refreshToken);
          refreshTokenSubject.next(response.data.token);
          return next(addToken(request, response.data.token));
        }
        // Guard: only logout if the user hasn't already re-authenticated
        if (!authState.isAuthenticated) {
          authState.logout();
          router.navigate(['/auth/login']);
        } else {
          refreshTokenSubject.next(authState.token);
        }
        return throwError(() => new HttpErrorResponse({ status: 401 }));
      }),
      catchError((err) => {
        isRefreshing = false;
        // Guard: only logout if the user hasn't already re-authenticated.
        // Without this guard, a stale refresh attempt that fails after the user
        // re-logs in (e.g. after session timeout) would incorrectly log them out again.
        if (!authState.isAuthenticated) {
          authState.logout();
          router.navigate(['/auth/login']);
        } else {
          // Unblock any requests that were queued waiting for the refresh
          refreshTokenSubject.next(authState.token);
        }
        return throwError(() => err);
      })
    );
  }

  // Another request is already refreshing the token; wait for it.
  // If the user has already been logged out (e.g. idle timeout fired while refresh was in
  // progress), fail fast instead of hanging forever on refreshTokenSubject.
  if (!authState.isAuthenticated) {
    return throwError(() => new HttpErrorResponse({ status: 401 }));
  }
  return refreshTokenSubject.pipe(
    filter(token => token !== null),
    take(1),
    switchMap((token) => next(addToken(request, token!)))
  );
}
