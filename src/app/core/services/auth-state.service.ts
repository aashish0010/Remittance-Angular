import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface AuthState {
  token: string;
  refreshToken: string;
  userId: string;
  fullName: string;
  email: string;
  roles: string[];
}

const EMPTY_STATE: AuthState = { token: '', refreshToken: '', userId: '', fullName: '', email: '', roles: [] };

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  private state$ = new BehaviorSubject<AuthState>(EMPTY_STATE);

  get snapshot(): AuthState { return this.state$.value; }
  get token(): string { return this.snapshot.token; }
  get refreshToken(): string { return this.snapshot.refreshToken; }
  get isAuthenticated(): boolean { return !!this.snapshot.token; }
  get roles(): string[] { return this.snapshot.roles; }

  readonly authState$: Observable<AuthState> = this.state$.asObservable();
  readonly isAuthenticated$: Observable<boolean> = this.state$.pipe(map(s => !!s.token));

  setAuth(token: string, refreshToken: string, userId: string, fullName: string, email: string, roles: string[]): void {
    const state: AuthState = { token, refreshToken, userId, fullName, email, roles };
    localStorage.setItem('auth_token', token);
    localStorage.setItem('auth_refreshToken', refreshToken);
    localStorage.setItem('auth_userId', userId);
    localStorage.setItem('auth_fullName', fullName);
    localStorage.setItem('auth_email', email);
    localStorage.setItem('auth_roles', roles.join(','));
    this.state$.next(state);
  }

  updateTokens(token: string, refreshToken: string): void {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('auth_refreshToken', refreshToken);
    this.state$.next({ ...this.snapshot, token, refreshToken });
  }

  loadFromSession(): void {
    const token = localStorage.getItem('auth_token') || '';
    if (token) {
      const state: AuthState = {
        token,
        refreshToken: localStorage.getItem('auth_refreshToken') || '',
        userId: localStorage.getItem('auth_userId') || '',
        fullName: localStorage.getItem('auth_fullName') || '',
        email: localStorage.getItem('auth_email') || '',
        roles: (localStorage.getItem('auth_roles') || '').split(',').filter(r => r),
      };
      this.state$.next(state);
    }
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_refreshToken');
    localStorage.removeItem('auth_userId');
    localStorage.removeItem('auth_fullName');
    localStorage.removeItem('auth_email');
    localStorage.removeItem('auth_roles');
    this.state$.next(EMPTY_STATE);
  }
}
