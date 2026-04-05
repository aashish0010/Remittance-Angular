import {
  environment
} from "./chunk-R63TWOS6.js";
import {
  HttpClient
} from "./chunk-WBW3ZP3W.js";
import {
  Injectable,
  firstValueFrom,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EU7HC72Q.js";
import {
  __async
} from "./chunk-S5KMCARS.js";

// src/app/core/services/app-settings.service.ts
var AppSettingsService = class _AppSettingsService {
  constructor(http) {
    this.http = http;
    this.settings = {};
    this.loaded = false;
  }
  load() {
    return __async(this, null, function* () {
      if (this.loaded)
        return;
      try {
        const res = yield firstValueFrom(this.http.get(`${environment.apiUrl}api/admin/settings`));
        if (res?.success && res.data) {
          this.settings = res.data;
        }
        this.loaded = true;
      } catch {
        this.loaded = true;
      }
    });
  }
  /** Force a reload from server (call after saving settings). */
  reload() {
    this.loaded = false;
  }
  // ── Typed getters ──────────────────────────────────────────────────────────
  getString(key, defaultValue = "") {
    const v = this.settings[key];
    return v !== void 0 && v !== "" ? v : defaultValue;
  }
  getBool(key, defaultValue = false) {
    const v = this.settings[key];
    if (v === void 0 || v === "")
      return defaultValue;
    return v === "true" || v === "1";
  }
  getNumber(key, defaultValue = 0) {
    const v = this.settings[key];
    const n = Number(v);
    return !isNaN(n) && v !== "" ? n : defaultValue;
  }
  // ── Convenience getters for the most-used settings ────────────────────────
  // KYC
  get kycEnabled() {
    return this.getBool("kyc.enabled", true);
  }
  get skipDocumentUpload() {
    return this.getBool("kyc.skipDocumentUpload", false);
  }
  get minimumAge() {
    return this.getNumber("kyc.minimumAge", 18);
  }
  // Transaction
  get requirePurpose() {
    return this.getBool("transaction.requirePurpose", false);
  }
  get requireSourceOfFunds() {
    return this.getBool("transaction.requireSourceOfFunds", false);
  }
  get requireManagerApproval() {
    return this.getBool("transaction.requireManagerApproval", false);
  }
  get managerApprovalThreshold() {
    return this.getNumber("transaction.managerApprovalThreshold", 5e3);
  }
  get allowQuickSend() {
    return this.getBool("transaction.allowQuickSend", true);
  }
  get cancellationAllowed() {
    return this.getBool("transaction.cancellationAllowed", true);
  }
  get txnNumberPrefix() {
    return this.getString("transaction.numberPrefix", "TXN");
  }
  // Fee
  get agentCommissionEnabled() {
    return this.getBool("fee.agentCommissionEnabled", true);
  }
  // Compliance
  get singleTransactionLimit() {
    return this.getNumber("compliance.singleTransactionLimit", 0);
  }
  get dailyLimit() {
    return this.getNumber("compliance.dailyLimit", 0);
  }
  // User / session
  get sessionTimeoutMinutes() {
    return this.getNumber("user.sessionTimeout", 15);
  }
  get maxLoginAttempts() {
    return this.getNumber("user.maxLoginAttempts", 5);
  }
  // System
  get maintenanceMode() {
    return this.getBool("system.maintenanceMode", false);
  }
  get maintenanceMessage() {
    return this.getString("system.maintenanceMessage", "System is under maintenance.");
  }
  get companyName() {
    return this.getString("general.companyName", "");
  }
  // Payout
  get availablePayoutMethods() {
    return this.getString("payout.availableMethods", "CashPickup,BankDeposit").split(",").map((s) => s.trim()).filter(Boolean);
  }
  static {
    this.\u0275fac = function AppSettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppSettingsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppSettingsService, factory: _AppSettingsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSettingsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AppSettingsService
};
//# sourceMappingURL=chunk-3AILC626.js.map
