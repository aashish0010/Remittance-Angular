import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

/**
 * Fires a non-blocking HTTP call on first injection (at app startup).
 * The app renders immediately with fallback values; signals update the
 * template automatically the moment the API responds.
 * No auth token required — hits GET /api/public/company.
 */
@Injectable({ providedIn: 'root' })
export class PublicSettingsService {
  readonly companyName     = signal('');
  readonly supportEmail    = signal('');
  readonly defaultCurrency = signal('USD');

  constructor(private http: HttpClient) {
    this.http.get<any>(`${environment.apiUrl}api/public/company`).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          const d = res.data;
          if (d.companyName)     this.companyName.set(d.companyName);
          if (d.supportEmail)    this.supportEmail.set(d.supportEmail);
          if (d.defaultCurrency) this.defaultCurrency.set(d.defaultCurrency);
        }
      },
      error: () => { /* keep defaults silently */ },
    });
  }
}
