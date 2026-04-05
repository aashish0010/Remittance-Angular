import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface CompanyInfo {
  companyName: string;
  supportEmail: string;
  defaultCurrency: string;
}

/**
 * Loaded at app bootstrap via APP_INITIALIZER (before login).
 * Provides public company branding for the login page and both portals.
 * No auth token required — hits /api/public/company.
 */
@Injectable({ providedIn: 'root' })
export class PublicSettingsService {
  private info: CompanyInfo = {
    companyName: '',
    supportEmail: '',
    defaultCurrency: 'USD',
  };

  constructor(private http: HttpClient) {}

  async load(): Promise<void> {
    try {
      const res: any = await firstValueFrom(
        this.http.get(`${environment.apiUrl}api/public/company`)
      );
      if (res?.success && res.data) {
        this.info = { ...this.info, ...res.data };
      }
    } catch {
      // Keep defaults if API is unreachable — app still boots normally
    }
  }

  get companyName(): string     { return this.info.companyName; }
  get supportEmail(): string    { return this.info.supportEmail; }
  get defaultCurrency(): string { return this.info.defaultCurrency; }
}
