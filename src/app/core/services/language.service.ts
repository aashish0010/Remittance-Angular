import { Injectable, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

export interface Language {
  code: string;
  label: string;
  nativeLabel: string;
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private transloco = inject(TranslocoService);

  readonly availableLanguages: Language[] = [
    { code: 'en', label: 'English', nativeLabel: 'English' },
    { code: 'ne', label: 'Nepali', nativeLabel: 'नेपाली' },
  ];

  private readonly STORAGE_KEY = 'app_language';

  /** Call once on app startup to restore the user's saved language preference. */
  init(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved && this.availableLanguages.some(l => l.code === saved)) {
      this.transloco.setActiveLang(saved);
    }
  }

  setLanguage(code: string): void {
    this.transloco.setActiveLang(code);
    localStorage.setItem(this.STORAGE_KEY, code);
  }

  getActiveLang(): string {
    return this.transloco.getActiveLang();
  }

  getActiveLanguage(): Language {
    const code = this.getActiveLang();
    return this.availableLanguages.find(l => l.code === code) ?? this.availableLanguages[0];
  }
}
