import {
  RouterModule,
  RouterOutlet
} from "./chunk-32GPHBG7.js";
import "./chunk-MZ37WZKD.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-BKSYICRS.js";

// src/app/layouts/login-layout/login-layout.component.ts
var LoginLayoutComponent = class _LoginLayoutComponent {
  ngOnInit() {
    const isDark = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark-mode", isDark);
  }
  static {
    this.\u0275fac = function LoginLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginLayoutComponent, selectors: [["app-login-layout"]], decls: 1, vars: 0, template: function LoginLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterModule, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=login-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-login-layout", standalone: true, imports: [RouterModule], template: "<router-outlet></router-outlet>\n", styles: ["/* src/app/layouts/login-layout/login-layout.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=login-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginLayoutComponent, { className: "LoginLayoutComponent", filePath: "src/app/layouts/login-layout/login-layout.component.ts", lineNumber: 11 });
})();
export {
  LoginLayoutComponent
};
//# sourceMappingURL=chunk-SOC7BOPI.js.map
