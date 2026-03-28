import {
  environment
} from "./chunk-MP5DRVCF.js";
import {
  HttpClient
} from "./chunk-FEHYQLJK.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-XQC2OG7J.js";

// src/app/core/services/export.service.ts
var ExportService = class _ExportService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.apiUrl;
  }
  export(endpoint, params = {}, format = "excel") {
    const queryParams = new URLSearchParams();
    queryParams.set("format", format);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== void 0 && value !== "") {
        queryParams.set(key, String(value));
      }
    });
    const url = `${this.baseUrl}${endpoint}?${queryParams.toString()}`;
    this.http.get(url, { responseType: "blob", withCredentials: true }).subscribe({
      next: (blob) => {
        const ext = format === "csv" ? "csv" : "xlsx";
        const contentType = format === "csv" ? "text/csv" : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        const file = new Blob([blob], { type: contentType });
        const downloadUrl = URL.createObjectURL(file);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = `${endpoint.split("/").pop()}-export.${ext}`;
        a.click();
        URL.revokeObjectURL(downloadUrl);
      },
      error: () => {
        console.error("Export failed");
      }
    });
  }
  static {
    this.\u0275fac = function ExportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExportService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExportService, factory: _ExportService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ExportService
};
//# sourceMappingURL=chunk-DU4FVJ3R.js.map
