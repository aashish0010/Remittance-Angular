import {
  Meta,
  Title
} from "./chunk-ZQKQC2T6.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EU7HC72Q.js";

// src/app/core/services/seo.service.ts
var SeoService = class _SeoService {
  constructor(title, meta) {
    this.title = title;
    this.meta = meta;
    this.appName = "RemitAdmin";
  }
  setPage(pageTitle, description) {
    this.title.setTitle(`${pageTitle} | ${this.appName}`);
    if (description) {
      this.meta.updateTag({ name: "description", content: description });
    }
  }
  static {
    this.\u0275fac = function SeoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeoService)(\u0275\u0275inject(Title), \u0275\u0275inject(Meta));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Title }, { type: Meta }], null);
})();

export {
  SeoService
};
//# sourceMappingURL=chunk-6TDC4W4Q.js.map
