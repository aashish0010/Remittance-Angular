import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * Loads all SystemSetting key→value pairs from the backend once per session
 * and provides typed getters consumed by components and services.
 *
 * Call `load()` once on app startup (from AdminLayoutComponent.ngOnInit).
 */
@Injectable({ providedIn: 'root' })
export class AppSettingsService {
  private settings: Record<string, string> = {};
  private loaded = false;

  constructor(private http: HttpClient) {}

  async load(): Promise<void> {
    if (this.loaded) return;
    try {
      const res: any = await firstValueFrom(
        this.http.get(`${environment.apiUrl}api/admin/settings`)
      );
      if (res?.success && res.data) {
        this.settings = res.data as Record<string, string>;
      }
      this.loaded = true;
    } catch {
      // On error keep defaults — settings will fall back to default values
      this.loaded = true;
    }
  }

  /** Force a reload from server (call after saving settings). */
  reload(): void {
    this.loaded = false;
  }

  // ── Typed getters ──────────────────────────────────────────────────────────

  getString(key: string, defaultValue = ''): string {
    const v = this.settings[key];
    return v !== undefined && v !== '' ? v : defaultValue;
  }

  getBool(key: string, defaultValue = false): boolean {
    const v = this.settings[key];
    if (v === undefined || v === '') return defaultValue;
    return v === 'true' || v === '1';
  }

  getNumber(key: string, defaultValue = 0): number {
    const v = this.settings[key];
    const n = Number(v);
    return !isNaN(n) && v !== '' ? n : defaultValue;
  }

  // ── Convenience getters for the most-used settings ────────────────────────

  // KYC
  get kycEnabled(): boolean          { return this.getBool('kyc.enabled', true); }
  get skipDocumentUpload(): boolean  { return this.getBool('kyc.skipDocumentUpload', false); }
  get minimumAge(): number           { return this.getNumber('kyc.minimumAge', 18); }

  // Transaction
  get requirePurpose(): boolean         { return this.getBool('transaction.requirePurpose', false); }
  get requireSourceOfFunds(): boolean   { return this.getBool('transaction.requireSourceOfFunds', false); }
  get requireManagerApproval(): boolean { return this.getBool('transaction.requireManagerApproval', false); }
  get managerApprovalThreshold(): number { return this.getNumber('transaction.managerApprovalThreshold', 5000); }
  get allowQuickSend(): boolean         { return this.getBool('transaction.allowQuickSend', true); }
  get cancellationAllowed(): boolean    { return this.getBool('transaction.cancellationAllowed', true); }
  get txnNumberPrefix(): string         { return this.getString('transaction.numberPrefix', 'TXN'); }

  // Fee
  get agentCommissionEnabled(): boolean { return this.getBool('fee.agentCommissionEnabled', true); }

  // Compliance
  get singleTransactionLimit(): number { return this.getNumber('compliance.singleTransactionLimit', 0); }
  get dailyLimit(): number             { return this.getNumber('compliance.dailyLimit', 0); }

  // User / session
  get sessionTimeoutMinutes(): number { return this.getNumber('user.sessionTimeout', 15); }
  get maxLoginAttempts(): number      { return this.getNumber('user.maxLoginAttempts', 5); }

  // System
  get maintenanceMode(): boolean      { return this.getBool('system.maintenanceMode', false); }
  get maintenanceMessage(): string    { return this.getString('system.maintenanceMessage', 'System is under maintenance.'); }
  get companyName(): string           { return this.getString('general.companyName', ''); }

  // Payout
  get availablePayoutMethods(): string[] {
    return this.getString('payout.availableMethods', 'CashPickup,BankDeposit')
      .split(',').map(s => s.trim()).filter(Boolean);
  }
}
