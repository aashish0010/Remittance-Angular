import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface MenuPrivilege {
  menuId: number;
  name: string;
  icon?: string;
  url?: string;
  displayOrder: number;
  actions: string[];
  children: MenuPrivilege[];
}

export interface AuthState {
  token: string;
  refreshToken: string;
  userId: string;
  fullName: string;
  email: string;
  roles: string[];
  privileges: MenuPrivilege[];
}

const EMPTY_STATE: AuthState = { token: '', refreshToken: '', userId: '', fullName: '', email: '', roles: [], privileges: [] };

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  private state$ = new BehaviorSubject<AuthState>(EMPTY_STATE);

  get snapshot(): AuthState { return this.state$.value; }
  get token(): string { return this.snapshot.token; }
  get refreshToken(): string { return this.snapshot.refreshToken; }
  get isAuthenticated(): boolean { return !!this.snapshot.token; }
  get roles(): string[] { return this.snapshot.roles; }
  get privileges(): MenuPrivilege[] { return this.snapshot.privileges; }
  get isSystemAdmin(): boolean { return this.snapshot.roles.includes('SystemAdmin'); }

  readonly authState$: Observable<AuthState> = this.state$.asObservable();
  readonly isAuthenticated$: Observable<boolean> = this.state$.pipe(map(s => !!s.token));

  setAuth(token: string, refreshToken: string, userId: string, fullName: string, email: string, roles: string[]): void {
    const state: AuthState = { token, refreshToken, userId, fullName, email, roles, privileges: [] };
    localStorage.setItem('auth_token', token);
    localStorage.setItem('auth_refreshToken', refreshToken);
    localStorage.setItem('auth_userId', userId);
    localStorage.setItem('auth_fullName', fullName);
    localStorage.setItem('auth_email', email);
    localStorage.setItem('auth_roles', roles.join(','));
    this.state$.next(state);
  }

  setPrivileges(privileges: MenuPrivilege[]): void {
    localStorage.setItem('auth_privileges', JSON.stringify(privileges));
    this.state$.next({ ...this.snapshot, privileges });
  }

  updateTokens(token: string, refreshToken: string): void {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('auth_refreshToken', refreshToken);
    this.state$.next({ ...this.snapshot, token, refreshToken });
  }

  loadFromSession(): void {
    const token = localStorage.getItem('auth_token') || '';
    if (token) {
      let privileges: MenuPrivilege[] = [];
      try {
        privileges = JSON.parse(localStorage.getItem('auth_privileges') || '[]');
      } catch {}
      const state: AuthState = {
        token,
        refreshToken: localStorage.getItem('auth_refreshToken') || '',
        userId: localStorage.getItem('auth_userId') || '',
        fullName: localStorage.getItem('auth_fullName') || '',
        email: localStorage.getItem('auth_email') || '',
        roles: (localStorage.getItem('auth_roles') || '').split(',').filter(r => r),
        privileges,
      };
      this.state$.next(state);
    }
  }

  hasMenuAccess(url: string): boolean {
    // SystemAdmin has access to everything
    if (this.isSystemAdmin) return true;
    // If no privileges loaded yet, allow (will be filtered once loaded)
    if (this.snapshot.privileges.length === 0) return true;
    return this.snapshot.privileges.some(p => p.url === url);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_refreshToken');
    localStorage.removeItem('auth_userId');
    localStorage.removeItem('auth_fullName');
    localStorage.removeItem('auth_email');
    localStorage.removeItem('auth_roles');
    localStorage.removeItem('auth_privileges');
    this.state$.next(EMPTY_STATE);
  }
}
