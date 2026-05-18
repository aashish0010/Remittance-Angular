import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-PF3P4DBX.js";
import {
  external_exports
} from "./chunk-FU7K6WYO.js";
import {
  AppSettingsService
} from "./chunk-RZBKGWZI.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BK7GB5PY.js";
import {
  SeoService
} from "./chunk-VA5RCFF2.js";
import {
  ApiService
} from "./chunk-UHRNEUWT.js";
import {
  AuthStateService,
  environment
} from "./chunk-AGDJ7TMO.js";
import {
  Router,
  RouterLink
} from "./chunk-ZX3UFU5L.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase
} from "./chunk-2U2B7PQF.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WEHJLEZR.js";
import "./chunk-ZNC4SKHB.js";

// src/app/core/services/public-settings.service.ts
var PublicSettingsService = class _PublicSettingsService {
  constructor(http) {
    this.http = http;
    this.companyName = signal("");
    this.supportEmail = signal("");
    this.defaultCurrency = signal("USD");
    this.http.get(`${environment.apiUrl}api/public/company`).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          const d = res.data;
          if (d.companyName)
            this.companyName.set(d.companyName);
          if (d.supportEmail)
            this.supportEmail.set(d.supportEmail);
          if (d.defaultCurrency)
            this.defaultCurrency.set(d.defaultCurrency);
        }
      },
      error: () => {
      }
    });
  }
  static {
    this.\u0275fac = function PublicSettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicSettingsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PublicSettingsService, factory: _PublicSettingsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicSettingsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/auth/login/login.component.ts
var _c0 = (a0) => ({ name: a0 });
var _c1 = (a0) => ({ "border-danger-400": a0 });
var _c2 = (a0, a1) => ({ "color": a0, "background-color": a1 });
function LoginComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "auth.login.subtitle"));
  }
}
function LoginComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "auth.login.welcomeBack", \u0275\u0275pureFunction1(4, _c0, ctx_r0.welcomeName)));
  }
}
function LoginComponent_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function LoginComponent_ng_container_10_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["email"]);
  }
}
function LoginComponent_ng_container_10__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 34);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_10__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 35)(2, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_10_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["password"]);
  }
}
function LoginComponent_ng_container_10_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.isLockedOut ? "auth.login.accountLocked" : "auth.login.signIn"));
  }
}
function LoginComponent_ng_container_10_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "circle", 38)(2, "path", 39);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LoginComponent_ng_container_10_div_1_Template, 5, 1, "div", 13);
    \u0275\u0275elementStart(2, "form", 14);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_container_10_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.login());
    });
    \u0275\u0275elementStart(3, "div")(4, "label", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 16);
    \u0275\u0275template(8, LoginComponent_ng_container_10_p_8_Template, 2, 1, "p", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "label", 18);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 19);
    \u0275\u0275element(14, "input", 20);
    \u0275\u0275elementStart(15, "button", 21);
    \u0275\u0275listener("click", function LoginComponent_ng_container_10_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hidePassword = !ctx_r0.hidePassword);
    });
    \u0275\u0275template(16, LoginComponent_ng_container_10__svg_svg_16_Template, 2, 0, "svg", 22)(17, LoginComponent_ng_container_10__svg_svg_17_Template, 3, 0, "svg", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, LoginComponent_ng_container_10_p_18_Template, 2, 1, "p", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 23)(20, "label", 24)(21, "input", 25);
    \u0275\u0275listener("change", function LoginComponent_ng_container_10_Template_input_change_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.rememberMe = !ctx_r0.rememberMe);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "a", 26);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 27);
    \u0275\u0275template(29, LoginComponent_ng_container_10_ng_container_29_Template, 3, 3, "ng-container", 28)(30, LoginComponent_ng_container_10_ng_template_30_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const loader_r3 = \u0275\u0275reference(31);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.loginForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 17, "auth.login.emailLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c1, ctx_r0.fieldErrors["email"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["email"]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 19, "auth.login.passwordLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r0.hidePassword ? "password" : "text")("ngClass", \u0275\u0275pureFunction1(27, _c1, ctx_r0.fieldErrors["password"]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.hidePassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hidePassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["password"]);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r0.rememberMe);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 21, "auth.login.rememberMe"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 23, "auth.login.forgotPassword"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.loginDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading)("ngIfElse", loader_r3);
  }
}
function LoginComponent_ng_container_11_button_5__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 53);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_11_button_5__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 54);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_11_button_5__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 55);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_11_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function LoginComponent_ng_container_11_button_5_Template_button_click_0_listener() {
      const portal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectPortal(portal_r6));
    });
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275elementContainerStart(2, 46);
    \u0275\u0275template(3, LoginComponent_ng_container_11_button_5__svg_svg_3_Template, 2, 0, "svg", 47)(4, LoginComponent_ng_container_11_button_5__svg_svg_4_Template, 2, 0, "svg", 47)(5, LoginComponent_ng_container_11_button_5__svg_svg_5_Template, 2, 0, "svg", 47);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 48)(7, "span", 49);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 50);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 51);
    \u0275\u0275element(14, "path", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const portal_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(11, _c2, portal_r6.color, portal_r6.color + "15"));
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", portal_r6.key);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Admin");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Agent");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Customer");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, portal_r6.label));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, portal_r6.description));
  }
}
function LoginComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41);
    \u0275\u0275template(5, LoginComponent_ng_container_11_button_5_Template, 15, 14, "button", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 43);
    \u0275\u0275listener("click", function LoginComponent_ng_container_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.backToLogin());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "auth.login.selectPortalSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.availablePortals);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "auth.login.switchAccount"), " ");
  }
}
var ALL_PORTALS = {
  Admin: {
    key: "Admin",
    label: "auth.portals.admin.label",
    description: "auth.portals.admin.description",
    icon: "admin_panel_settings",
    route: "/admin/dashboard",
    color: "#1565C0"
  },
  Agent: {
    key: "Agent",
    label: "auth.portals.agent.label",
    description: "auth.portals.agent.description",
    icon: "storefront",
    route: "/agent/dashboard",
    color: "#2E7D32"
  },
  Customer: {
    key: "Customer",
    label: "auth.portals.customer.label",
    description: "auth.portals.customer.description",
    icon: "person",
    route: "/customer/dashboard",
    color: "#7B1FA2"
  }
};
var loginSchema = external_exports.object({
  email: external_exports.string().email("Please enter a valid email address"),
  password: external_exports.string().min(1, "Password is required")
});
var LoginComponent = class _LoginComponent {
  // UI Configuration — reads from the signal; Angular re-renders when it updates
  get appName() {
    return this.publicSettings.companyName() || "Remittance";
  }
  constructor(api, auth, router, appSettings, publicSettings, seo) {
    this.api = api;
    this.auth = auth;
    this.router = router;
    this.appSettings = appSettings;
    this.publicSettings = publicSettings;
    this.seo = seo;
    this.loginForm = new FormGroup({
      email: new FormControl("", { nonNullable: true }),
      password: new FormControl("", { nonNullable: true })
    });
    this.errorMessage = "";
    this.loading = false;
    this.hidePassword = true;
    this.rememberMe = false;
    this.fieldErrors = {};
    this.showPortalSelection = false;
    this.welcomeName = "";
    this.availablePortals = [];
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.failedAttempts = 0;
    this.isLockedOut = false;
    this.storedLoginData = null;
  }
  ngOnDestroy() {
    if (this.lockoutTimer)
      clearTimeout(this.lockoutTimer);
  }
  ngOnInit() {
    this.seo.setPage("Sign In", "Sign in to RemitAdmin to manage money transfers, agents, compliance, and more.");
    this.loginForm.valueChanges.subscribe(() => {
      this.fieldErrors = {};
    });
  }
  validateForm() {
    const result = loginSchema.safeParse(this.loginForm.getRawValue());
    if (!result.success) {
      this.fieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (!this.fieldErrors[field]) {
          this.fieldErrors[field] = issue.message;
        }
      }
      return null;
    }
    this.fieldErrors = {};
    return result.data;
  }
  login() {
    if (this.isLockedOut)
      return;
    const data = this.validateForm();
    if (!data) {
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.api.login(data.email, data.password).subscribe({
      next: (res) => {
        this.loading = false;
        if (!res?.success || !res.data) {
          this.failedAttempts++;
          const maxAttempts = this.appSettings.maxLoginAttempts;
          const remaining = maxAttempts - this.failedAttempts;
          if (this.failedAttempts >= maxAttempts) {
            this.isLockedOut = true;
            this.errorMessage = `Account locked after ${maxAttempts} failed attempts. Please try again in 5 minutes.`;
            this.lockoutTimer = setTimeout(() => {
              this.isLockedOut = false;
              this.failedAttempts = 0;
              this.errorMessage = "";
            }, 5 * 60 * 1e3);
          } else {
            this.errorMessage = `${res?.message || "Invalid credentials."} ${remaining} attempt${remaining === 1 ? "" : "s"} remaining.`;
          }
          return;
        }
        this.failedAttempts = 0;
        const d = res.data;
        this.storedLoginData = d;
        const portalKeys = d.availablePortals?.length ? d.availablePortals : [d.portal];
        this.availablePortals = portalKeys.filter((p) => ALL_PORTALS[p]).map((p) => ALL_PORTALS[p]);
        if (this.availablePortals.length === 1) {
          this.setAuthAndNavigate(this.availablePortals[0].route);
        } else if (this.availablePortals.length > 1) {
          this.welcomeName = d.fullName;
          this.showPortalSelection = true;
        } else {
          const roles = (d.roles || []).map((r) => r.toLowerCase());
          if (roles.some((r) => r.includes("admin") || r.includes("operations") || r.includes("compliance"))) {
            this.setAuthAndNavigate("/admin/dashboard");
          } else if (roles.some((r) => r.includes("agent"))) {
            this.setAuthAndNavigate("/agent/dashboard");
          } else {
            this.setAuthAndNavigate("/customer/dashboard");
          }
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage = "Unable to connect to server. Please check your connection.";
      }
    });
  }
  selectPortal(portal) {
    this.setAuthAndNavigate(portal.route);
  }
  get loginDisabled() {
    return this.loading || this.isLockedOut;
  }
  backToLogin() {
    this.showPortalSelection = false;
    this.storedLoginData = null;
    this.availablePortals = [];
    this.errorMessage = "";
    this.failedAttempts = 0;
    this.loginForm.patchValue({ password: "" });
  }
  setAuthAndNavigate(route) {
    const d = this.storedLoginData;
    this.auth.setAuth(d.token, d.refreshToken, d.userId, d.fullName, d.email, d.roles);
    this.api.getPrivileges().subscribe((res) => {
      if (res?.success && res.data) {
        this.auth.setPrivileges(res.data);
      }
    });
    this.router.navigate([route]);
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AppSettingsService), \u0275\u0275directiveInject(PublicSettingsService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 25, vars: 13, consts: [["loader", ""], [1, "flex", "min-h-screen", "items-center", "justify-center", "bg-surface-50", "dark:bg-surface-900", "p-4", "animate-fade-in"], [1, "w-full", "max-w-md", "rounded-2xl", "shadow-elevated", "bg-white", "dark:bg-surface-800", "dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]", "p-8", "sm:p-10", "text-center", "animate-slide-up"], [1, "mb-8"], [1, "mx-auto", "mb-5", "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-brand-100", "dark:bg-brand-900/30", "text-brand-600", "dark:text-brand-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-8", "w-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"], [1, "text-2xl", "font-bold", "tracking-tight", "text-surface-900", "dark:text-surface-100"], ["class", "mt-2 text-sm text-surface-500 dark:text-surface-400", 4, "ngIf"], [4, "ngIf"], [1, "mt-8", "flex", "items-center", "justify-center", "gap-2", "border-t", "border-surface-200", "dark:border-surface-700", "pt-6", "text-xs", "text-surface-400", "dark:text-surface-500"], ["href", "#", 1, "hover:text-brand-600", "dark:hover:text-brand-400", "transition-colors"], [1, "mt-2", "text-sm", "text-surface-500", "dark:text-surface-400"], ["class", "mb-6 flex items-center gap-2 rounded-lg bg-danger-50 dark:bg-danger-500/10 px-4 py-3 text-sm text-danger-600 dark:text-danger-400 animate-slide-down", 4, "ngIf"], [1, "flex", "flex-col", "gap-4", "text-left", 3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1.5"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "you@example.com", 1, "block", "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "bg-white", "dark:bg-surface-700/50", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "border-surface-200", "dark:border-surface-600", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:border-brand-500", "dark:focus:ring-brand-400/30", "dark:focus:border-brand-400", "transition-colors", 3, "ngClass"], ["class", "mt-1.5 text-xs text-danger-500 dark:text-danger-400", 4, "ngIf"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1.5"], [1, "relative"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "block", "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "pr-10", "text-sm", "bg-white", "dark:bg-surface-700/50", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "border-surface-200", "dark:border-surface-600", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:border-brand-500", "dark:focus:ring-brand-400/30", "dark:focus:border-brand-400", "transition-colors", 3, "type", "ngClass"], ["type", "button", "tabindex", "-1", 1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3", "text-surface-400", "hover:text-surface-600", "dark:text-surface-500", "dark:hover:text-surface-300", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "class", "h-5 w-5", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "flex", "items-center", "gap-2", "cursor-pointer", "select-none", "text-surface-600", "dark:text-surface-400"], ["type", "checkbox", 1, "h-4", "w-4", "rounded", "border-surface-300", "dark:border-surface-600", "text-brand-600", "focus:ring-brand-500/40", "dark:bg-surface-700", "transition-colors", 3, "change", "checked"], ["routerLink", "/auth/forgot-password", 1, "font-medium", "text-brand-600", "hover:text-brand-500", "dark:text-brand-400", "dark:hover:text-brand-300", "transition-colors"], ["type", "submit", 1, "mt-2", "flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-600", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-brand-700", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:ring-offset-2", "dark:focus:ring-offset-surface-800", "disabled:opacity-60", "disabled:cursor-not-allowed", "transition-all", "duration-150", "ease-in-out", 3, "disabled"], [4, "ngIf", "ngIfElse"], [1, "mb-6", "flex", "items-center", "gap-2", "rounded-lg", "bg-danger-50", "dark:bg-danger-500/10", "px-4", "py-3", "text-sm", "text-danger-600", "dark:text-danger-400", "animate-slide-down"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "flex-shrink-0"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z", "clip-rule", "evenodd"], [1, "mt-1.5", "text-xs", "text-danger-500", "dark:text-danger-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "h-5", "w-5", "animate-spin", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mb-5"], [1, "flex", "flex-col", "gap-3", "mb-6", "animate-slide-up"], ["class", "group flex w-full items-center gap-4 rounded-xl border border-surface-200 dark:border-surface-600\n                 bg-white dark:bg-surface-800 p-4 text-left\n                 hover:border-brand-400 dark:hover:border-brand-500 hover:shadow-soft\n                 hover:-translate-y-0.5\n                 transition-all duration-200 ease-in-out", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "w-full", "rounded-lg", "border", "border-surface-200", "dark:border-surface-600", "px-4", "py-2.5", "text-sm", "font-medium", "text-surface-500", "dark:text-surface-400", "hover:bg-surface-50", "dark:hover:bg-surface-700", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "transition-colors", 3, "click"], [1, "group", "flex", "w-full", "items-center", "gap-4", "rounded-xl", "border", "border-surface-200", "dark:border-surface-600", "bg-white", "dark:bg-surface-800", "p-4", "text-left", "hover:border-brand-400", "dark:hover:border-brand-500", "hover:shadow-soft", "hover:-translate-y-0.5", "transition-all", "duration-200", "ease-in-out", 3, "click"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-lg", "text-lg", 3, "ngStyle"], [3, "ngSwitch"], ["xmlns", "http://www.w3.org/2000/svg", "class", "h-5 w-5", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 4, "ngSwitchCase"], [1, "flex-1", "min-w-0"], [1, "block", "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "block", "text-xs", "text-surface-500", "dark:text-surface-400", "mt-0.5", "truncate"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-5", "w-5", "flex-shrink-0", "text-surface-300", "dark:text-surface-600", "group-hover:text-brand-500", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m8.25 4.5 7.5 7.5-7.5 7.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 5);
        \u0275\u0275element(5, "path", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "h1", 7);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, LoginComponent_p_8_Template, 3, 3, "p", 8)(9, LoginComponent_p_9_Template, 3, 6, "p", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, LoginComponent_ng_container_10_Template, 32, 29, "ng-container", 9)(11, LoginComponent_ng_container_11_Template, 9, 7, "ng-container", 9);
        \u0275\u0275elementStart(12, "div", 10)(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 11);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a", 11);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.appName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showPortalSelection);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPortalSelection);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showPortalSelection);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPortalSelection);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("\xA9 ", ctx.currentYear, " ", ctx.appName, "");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 9, "common.privacy"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 11, "common.terms"));
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      NgStyle,
      NgSwitch,
      NgSwitchCase,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      RouterLink,
      TranslocoModule,
      TranslocoPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterLink,
      TranslocoModule
    ], template: `<div class="flex min-h-screen items-center justify-center bg-surface-50 dark:bg-surface-900 p-4 animate-fade-in">\r
  <div class="w-full max-w-md rounded-2xl shadow-elevated bg-white dark:bg-surface-800 dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] p-8 sm:p-10 text-center animate-slide-up">\r
\r
    <!-- Header Section -->\r
    <div class="mb-8">\r
      <div class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">\r
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />\r
        </svg>\r
      </div>\r
      <h1 class="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-100">{{ appName }}</h1>\r
      <p *ngIf="!showPortalSelection" class="mt-2 text-sm text-surface-500 dark:text-surface-400">{{ 'auth.login.subtitle' | transloco }}</p>\r
      <p *ngIf="showPortalSelection" class="mt-2 text-sm text-surface-500 dark:text-surface-400">{{ 'auth.login.welcomeBack' | transloco: { name: welcomeName } }}</p>\r
    </div>\r
\r
    <!-- SECTION 1: LOGIN FORM -->\r
    <ng-container *ngIf="!showPortalSelection">\r
\r
      <!-- Error Banner -->\r
      <div *ngIf="errorMessage"\r
           class="mb-6 flex items-center gap-2 rounded-lg bg-danger-50 dark:bg-danger-500/10 px-4 py-3 text-sm text-danger-600 dark:text-danger-400 animate-slide-down">\r
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">\r
          <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />\r
        </svg>\r
        <span>{{ errorMessage }}</span>\r
      </div>\r
\r
      <form [formGroup]="loginForm" (ngSubmit)="login()" class="flex flex-col gap-4 text-left">\r
\r
        <!-- Email Field -->\r
        <div>\r
          <label for="email" class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">{{ 'auth.login.emailLabel' | transloco }}</label>\r
          <input\r
            id="email"\r
            type="email"\r
            formControlName="email"\r
            placeholder="you@example.com"\r
            class="block w-full rounded-lg border px-3.5 py-2.5 text-sm\r
                   bg-white dark:bg-surface-700/50\r
                   text-surface-900 dark:text-surface-100\r
                   placeholder-surface-400 dark:placeholder-surface-500\r
                   border-surface-200 dark:border-surface-600\r
                   focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 dark:focus:ring-brand-400/30 dark:focus:border-brand-400\r
                   transition-colors"\r
            [ngClass]="{ 'border-danger-400': fieldErrors['email'] }"\r
          />\r
          <p *ngIf="fieldErrors['email']" class="mt-1.5 text-xs text-danger-500 dark:text-danger-400">{{ fieldErrors['email'] }}</p>\r
        </div>\r
\r
        <!-- Password Field -->\r
        <div>\r
          <label for="password" class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">{{ 'auth.login.passwordLabel' | transloco }}</label>\r
          <div class="relative">\r
            <input\r
              id="password"\r
              [type]="hidePassword ? 'password' : 'text'"\r
              formControlName="password"\r
              placeholder="Enter your password"\r
              class="block w-full rounded-lg border px-3.5 py-2.5 pr-10 text-sm\r
                     bg-white dark:bg-surface-700/50\r
                     text-surface-900 dark:text-surface-100\r
                     placeholder-surface-400 dark:placeholder-surface-500\r
                     border-surface-200 dark:border-surface-600\r
                     focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 dark:focus:ring-brand-400/30 dark:focus:border-brand-400\r
                     transition-colors"\r
              [ngClass]="{ 'border-danger-400': fieldErrors['password'] }"\r
            />\r
            <button\r
              type="button"\r
              tabindex="-1"\r
              (click)="hidePassword = !hidePassword"\r
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-surface-400 hover:text-surface-600 dark:text-surface-500 dark:hover:text-surface-300 transition-colors">\r
              <!-- Eye open -->\r
              <svg *ngIf="hidePassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />\r
              </svg>\r
              <!-- Eye closed -->\r
              <svg *ngIf="!hidePassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />\r
              </svg>\r
            </button>\r
          </div>\r
          <p *ngIf="fieldErrors['password']" class="mt-1.5 text-xs text-danger-500 dark:text-danger-400">{{ fieldErrors['password'] }}</p>\r
        </div>\r
\r
        <!-- Remember me / Forgot password -->\r
        <div class="flex items-center justify-between text-sm">\r
          <label class="flex items-center gap-2 cursor-pointer select-none text-surface-600 dark:text-surface-400">\r
            <input\r
              type="checkbox"\r
              [checked]="rememberMe"\r
              (change)="rememberMe = !rememberMe"\r
              class="h-4 w-4 rounded border-surface-300 dark:border-surface-600 text-brand-600 focus:ring-brand-500/40 dark:bg-surface-700 transition-colors"\r
            />\r
            <span>{{ 'auth.login.rememberMe' | transloco }}</span>\r
          </label>\r
          <a routerLink="/auth/forgot-password" class="font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300 transition-colors">\r
            {{ 'auth.login.forgotPassword' | transloco }}\r
          </a>\r
        </div>\r
\r
        <!-- Submit Button -->\r
        <button\r
          type="submit"\r
          [disabled]="loginDisabled"\r
          class="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white\r
                 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2 dark:focus:ring-offset-surface-800\r
                 disabled:opacity-60 disabled:cursor-not-allowed\r
                 transition-all duration-150 ease-in-out">\r
          <ng-container *ngIf="!loading; else loader">{{ (isLockedOut ? 'auth.login.accountLocked' : 'auth.login.signIn') | transloco }}</ng-container>\r
          <ng-template #loader>\r
            <svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\r
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
            </svg>\r
          </ng-template>\r
        </button>\r
      </form>\r
    </ng-container>\r
\r
    <!-- SECTION 2: PORTAL SELECTION -->\r
    <ng-container *ngIf="showPortalSelection">\r
      <p class="text-sm text-surface-500 dark:text-surface-400 mb-5">{{ 'auth.login.selectPortalSubtitle' | transloco }}</p>\r
\r
      <div class="flex flex-col gap-3 mb-6 animate-slide-up">\r
        <button\r
          *ngFor="let portal of availablePortals"\r
          (click)="selectPortal(portal)"\r
          class="group flex w-full items-center gap-4 rounded-xl border border-surface-200 dark:border-surface-600\r
                 bg-white dark:bg-surface-800 p-4 text-left\r
                 hover:border-brand-400 dark:hover:border-brand-500 hover:shadow-soft\r
                 hover:-translate-y-0.5\r
                 transition-all duration-200 ease-in-out">\r
\r
          <!-- Portal Icon -->\r
          <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-lg"\r
               [ngStyle]="{ 'color': portal.color, 'background-color': portal.color + '15' }">\r
            <ng-container [ngSwitch]="portal.key">\r
              <!-- Admin: Shield -->\r
              <svg *ngSwitchCase="'Admin'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />\r
              </svg>\r
              <!-- Agent: Building -->\r
              <svg *ngSwitchCase="'Agent'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />\r
              </svg>\r
              <!-- Customer: User -->\r
              <svg *ngSwitchCase="'Customer'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />\r
              </svg>\r
            </ng-container>\r
          </div>\r
\r
          <!-- Portal Text -->\r
          <div class="flex-1 min-w-0">\r
            <span class="block text-sm font-semibold text-surface-900 dark:text-surface-100">{{ portal.label | transloco }}</span>\r
            <span class="block text-xs text-surface-500 dark:text-surface-400 mt-0.5 truncate">{{ portal.description | transloco }}</span>\r
          </div>\r
\r
          <!-- Chevron -->\r
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0 text-surface-300 dark:text-surface-600 group-hover:text-brand-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />\r
          </svg>\r
        </button>\r
      </div>\r
\r
      <button\r
        type="button"\r
        (click)="backToLogin()"\r
        class="w-full rounded-lg border border-surface-200 dark:border-surface-600 px-4 py-2.5 text-sm font-medium\r
               text-surface-500 dark:text-surface-400\r
               hover:bg-surface-50 dark:hover:bg-surface-700\r
               focus:outline-none focus:ring-2 focus:ring-brand-500/40\r
               transition-colors">\r
        {{ 'auth.login.switchAccount' | transloco }}\r
      </button>\r
    </ng-container>\r
\r
    <!-- Footer -->\r
    <div class="mt-8 flex items-center justify-center gap-2 border-t border-surface-200 dark:border-surface-700 pt-6 text-xs text-surface-400 dark:text-surface-500">\r
      <span>&copy; {{ currentYear }} {{ appName }}</span>\r
      <span>&middot;</span>\r
      <a href="#" class="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{{ 'common.privacy' | transloco }}</a>\r
      <span>&middot;</span>\r
      <a href="#" class="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{{ 'common.terms' | transloco }}</a>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/auth/login/login.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: Router }, { type: AppSettingsService }, { type: PublicSettingsService }, { type: SeoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/auth/login/login.component.ts", lineNumber: 68 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-QJHYUXB6.js.map
