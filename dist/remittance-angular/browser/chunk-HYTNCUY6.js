import {
  external_exports
} from "./chunk-OP5G73ZT.js";
import {
  Router
} from "./chunk-FTNGEOQD.js";
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
} from "./chunk-6I2CTDTD.js";
import {
  ApiService
} from "./chunk-2NPUZHRJ.js";
import {
  AuthStateService
} from "./chunk-MP5DRVCF.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase
} from "./chunk-FEHYQLJK.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
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
} from "./chunk-XQC2OG7J.js";

// src/app/pages/auth/login/login.component.ts
var _c0 = (a0) => ({ "border-danger-400": a0 });
var _c1 = (a0, a1) => ({ "color": a0, "background-color": a1 });
function LoginComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Sign in to continue");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Welcome back, ", ctx_r0.welcomeName, "");
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
function LoginComponent_ng_container_10_p_7_Template(rf, ctx) {
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
function LoginComponent_ng_container_10__svg_svg_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 34);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_10__svg_svg_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 35)(2, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_10_p_16_Template(rf, ctx) {
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
function LoginComponent_ng_container_10_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementContainerEnd();
  }
}
function LoginComponent_ng_container_10_ng_template_26_Template(rf, ctx) {
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
    \u0275\u0275text(5, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 16);
    \u0275\u0275template(7, LoginComponent_ng_container_10_p_7_Template, 2, 1, "p", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "label", 18);
    \u0275\u0275text(10, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19);
    \u0275\u0275element(12, "input", 20);
    \u0275\u0275elementStart(13, "button", 21);
    \u0275\u0275listener("click", function LoginComponent_ng_container_10_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hidePassword = !ctx_r0.hidePassword);
    });
    \u0275\u0275template(14, LoginComponent_ng_container_10__svg_svg_14_Template, 2, 0, "svg", 22)(15, LoginComponent_ng_container_10__svg_svg_15_Template, 3, 0, "svg", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, LoginComponent_ng_container_10_p_16_Template, 2, 1, "p", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 23)(18, "label", 24)(19, "input", 25);
    \u0275\u0275listener("change", function LoginComponent_ng_container_10_Template_input_change_19_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.rememberMe = !ctx_r0.rememberMe);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Remember me");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "a", 26);
    \u0275\u0275text(23, " Forgot password? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 27);
    \u0275\u0275template(25, LoginComponent_ng_container_10_ng_container_25_Template, 2, 0, "ng-container", 28)(26, LoginComponent_ng_container_10_ng_template_26_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const loader_r3 = \u0275\u0275reference(27);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.loginForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c0, ctx_r0.fieldErrors["email"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["email"]);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r0.hidePassword ? "password" : "text")("ngClass", \u0275\u0275pureFunction1(15, _c0, ctx_r0.fieldErrors["password"]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.hidePassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hidePassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["password"]);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r0.rememberMe);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading)("ngIfElse", loader_r3);
  }
}
function LoginComponent_ng_container_11_button_4__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 53);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_11_button_4__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 54);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_11_button_4__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 55);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_11_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function LoginComponent_ng_container_11_button_4_Template_button_click_0_listener() {
      const portal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectPortal(portal_r6));
    });
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275elementContainerStart(2, 46);
    \u0275\u0275template(3, LoginComponent_ng_container_11_button_4__svg_svg_3_Template, 2, 0, "svg", 47)(4, LoginComponent_ng_container_11_button_4__svg_svg_4_Template, 2, 0, "svg", 47)(5, LoginComponent_ng_container_11_button_4__svg_svg_5_Template, 2, 0, "svg", 47);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 48)(7, "span", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 51);
    \u0275\u0275element(12, "path", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const portal_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(7, _c1, portal_r6.color, portal_r6.color + "15"));
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", portal_r6.key);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Admin");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Agent");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Customer");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(portal_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(portal_r6.description);
  }
}
function LoginComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 40);
    \u0275\u0275text(2, "Select your dashboard to continue:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275template(4, LoginComponent_ng_container_11_button_4_Template, 13, 10, "button", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 43);
    \u0275\u0275listener("click", function LoginComponent_ng_container_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.backToLogin());
    });
    \u0275\u0275text(6, " Switch Account ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.availablePortals);
  }
}
var ALL_PORTALS = {
  Admin: {
    key: "Admin",
    label: "Admin Portal",
    description: "Manage agents, rates, compliance & operations",
    icon: "admin_panel_settings",
    route: "/admin/dashboard",
    color: "#1565C0"
  },
  Agent: {
    key: "Agent",
    label: "Agent Portal",
    description: "Send money, view transactions & commissions",
    icon: "storefront",
    route: "/agent/dashboard",
    color: "#2E7D32"
  },
  Customer: {
    key: "Customer",
    label: "Customer Portal",
    description: "Track transfers & manage your account",
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
  constructor(api, auth, router) {
    this.api = api;
    this.auth = auth;
    this.router = router;
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
    this.appName = "Remittance";
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.storedLoginData = null;
  }
  ngOnInit() {
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
          this.errorMessage = res?.message || "Invalid credentials. Please try again.";
          return;
        }
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
  backToLogin() {
    this.showPortalSelection = false;
    this.storedLoginData = null;
    this.availablePortals = [];
    this.errorMessage = "";
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
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 23, vars: 7, consts: [["loader", ""], [1, "flex", "min-h-screen", "items-center", "justify-center", "bg-surface-50", "dark:bg-surface-900", "p-4", "animate-fade-in"], [1, "w-full", "max-w-md", "rounded-2xl", "shadow-elevated", "bg-white", "dark:bg-surface-800", "dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]", "p-8", "sm:p-10", "text-center", "animate-slide-up"], [1, "mb-8"], [1, "mx-auto", "mb-5", "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-brand-100", "dark:bg-brand-900/30", "text-brand-600", "dark:text-brand-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-8", "w-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"], [1, "text-2xl", "font-bold", "tracking-tight", "text-surface-900", "dark:text-surface-100"], ["class", "mt-2 text-sm text-surface-500 dark:text-surface-400", 4, "ngIf"], [4, "ngIf"], [1, "mt-8", "flex", "items-center", "justify-center", "gap-2", "border-t", "border-surface-200", "dark:border-surface-700", "pt-6", "text-xs", "text-surface-400", "dark:text-surface-500"], ["href", "#", 1, "hover:text-brand-600", "dark:hover:text-brand-400", "transition-colors"], [1, "mt-2", "text-sm", "text-surface-500", "dark:text-surface-400"], ["class", "mb-6 flex items-center gap-2 rounded-lg bg-danger-50 dark:bg-danger-500/10 px-4 py-3 text-sm text-danger-600 dark:text-danger-400 animate-slide-down", 4, "ngIf"], [1, "flex", "flex-col", "gap-4", "text-left", 3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1.5"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "you@example.com", 1, "block", "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "bg-white", "dark:bg-surface-700/50", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "border-surface-200", "dark:border-surface-600", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:border-brand-500", "dark:focus:ring-brand-400/30", "dark:focus:border-brand-400", "transition-colors", 3, "ngClass"], ["class", "mt-1.5 text-xs text-danger-500 dark:text-danger-400", 4, "ngIf"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1.5"], [1, "relative"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "block", "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "pr-10", "text-sm", "bg-white", "dark:bg-surface-700/50", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "border-surface-200", "dark:border-surface-600", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:border-brand-500", "dark:focus:ring-brand-400/30", "dark:focus:border-brand-400", "transition-colors", 3, "type", "ngClass"], ["type", "button", "tabindex", "-1", 1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3", "text-surface-400", "hover:text-surface-600", "dark:text-surface-500", "dark:hover:text-surface-300", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "class", "h-5 w-5", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "flex", "items-center", "gap-2", "cursor-pointer", "select-none", "text-surface-600", "dark:text-surface-400"], ["type", "checkbox", 1, "h-4", "w-4", "rounded", "border-surface-300", "dark:border-surface-600", "text-brand-600", "focus:ring-brand-500/40", "dark:bg-surface-700", "transition-colors", 3, "change", "checked"], ["href", "javascript:void(0)", 1, "font-medium", "text-brand-600", "hover:text-brand-500", "dark:text-brand-400", "dark:hover:text-brand-300", "transition-colors"], ["type", "submit", 1, "mt-2", "flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-600", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-brand-700", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:ring-offset-2", "dark:focus:ring-offset-surface-800", "disabled:opacity-60", "disabled:cursor-not-allowed", "transition-all", "duration-150", "ease-in-out", 3, "disabled"], [4, "ngIf", "ngIfElse"], [1, "mb-6", "flex", "items-center", "gap-2", "rounded-lg", "bg-danger-50", "dark:bg-danger-500/10", "px-4", "py-3", "text-sm", "text-danger-600", "dark:text-danger-400", "animate-slide-down"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "flex-shrink-0"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z", "clip-rule", "evenodd"], [1, "mt-1.5", "text-xs", "text-danger-500", "dark:text-danger-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "h-5", "w-5", "animate-spin", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mb-5"], [1, "flex", "flex-col", "gap-3", "mb-6", "animate-slide-up"], ["class", "group flex w-full items-center gap-4 rounded-xl border border-surface-200 dark:border-surface-600\n                 bg-white dark:bg-surface-800 p-4 text-left\n                 hover:border-brand-400 dark:hover:border-brand-500 hover:shadow-soft\n                 hover:-translate-y-0.5\n                 transition-all duration-200 ease-in-out", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "w-full", "rounded-lg", "border", "border-surface-200", "dark:border-surface-600", "px-4", "py-2.5", "text-sm", "font-medium", "text-surface-500", "dark:text-surface-400", "hover:bg-surface-50", "dark:hover:bg-surface-700", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "transition-colors", 3, "click"], [1, "group", "flex", "w-full", "items-center", "gap-4", "rounded-xl", "border", "border-surface-200", "dark:border-surface-600", "bg-white", "dark:bg-surface-800", "p-4", "text-left", "hover:border-brand-400", "dark:hover:border-brand-500", "hover:shadow-soft", "hover:-translate-y-0.5", "transition-all", "duration-200", "ease-in-out", 3, "click"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-lg", "text-lg", 3, "ngStyle"], [3, "ngSwitch"], ["xmlns", "http://www.w3.org/2000/svg", "class", "h-5 w-5", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 4, "ngSwitchCase"], [1, "flex-1", "min-w-0"], [1, "block", "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "block", "text-xs", "text-surface-500", "dark:text-surface-400", "mt-0.5", "truncate"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-5", "w-5", "flex-shrink-0", "text-surface-300", "dark:text-surface-600", "group-hover:text-brand-500", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m8.25 4.5 7.5 7.5-7.5 7.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"]], template: function LoginComponent_Template(rf, ctx) {
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
        \u0275\u0275template(8, LoginComponent_p_8_Template, 2, 0, "p", 8)(9, LoginComponent_p_9_Template, 2, 1, "p", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, LoginComponent_ng_container_10_Template, 28, 17, "ng-container", 9)(11, LoginComponent_ng_container_11_Template, 7, 1, "ng-container", 9);
        \u0275\u0275elementStart(12, "div", 10)(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 11);
        \u0275\u0275text(18, "Privacy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "a", 11);
        \u0275\u0275text(22, "Terms");
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
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule
    ], template: `<div class="flex min-h-screen items-center justify-center bg-surface-50 dark:bg-surface-900 p-4 animate-fade-in">
  <div class="w-full max-w-md rounded-2xl shadow-elevated bg-white dark:bg-surface-800 dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] p-8 sm:p-10 text-center animate-slide-up">

    <!-- Header Section -->
    <div class="mb-8">
      <div class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
        </svg>
      </div>
      <h1 class="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-100">{{ appName }}</h1>
      <p *ngIf="!showPortalSelection" class="mt-2 text-sm text-surface-500 dark:text-surface-400">Sign in to continue</p>
      <p *ngIf="showPortalSelection" class="mt-2 text-sm text-surface-500 dark:text-surface-400">Welcome back, {{ welcomeName }}</p>
    </div>

    <!-- SECTION 1: LOGIN FORM -->
    <ng-container *ngIf="!showPortalSelection">

      <!-- Error Banner -->
      <div *ngIf="errorMessage"
           class="mb-6 flex items-center gap-2 rounded-lg bg-danger-50 dark:bg-danger-500/10 px-4 py-3 text-sm text-danger-600 dark:text-danger-400 animate-slide-down">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
        </svg>
        <span>{{ errorMessage }}</span>
      </div>

      <form [formGroup]="loginForm" (ngSubmit)="login()" class="flex flex-col gap-4 text-left">

        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Email</label>
          <input
            id="email"
            type="email"
            formControlName="email"
            placeholder="you@example.com"
            class="block w-full rounded-lg border px-3.5 py-2.5 text-sm
                   bg-white dark:bg-surface-700/50
                   text-surface-900 dark:text-surface-100
                   placeholder-surface-400 dark:placeholder-surface-500
                   border-surface-200 dark:border-surface-600
                   focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 dark:focus:ring-brand-400/30 dark:focus:border-brand-400
                   transition-colors"
            [ngClass]="{ 'border-danger-400': fieldErrors['email'] }"
          />
          <p *ngIf="fieldErrors['email']" class="mt-1.5 text-xs text-danger-500 dark:text-danger-400">{{ fieldErrors['email'] }}</p>
        </div>

        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Password</label>
          <div class="relative">
            <input
              id="password"
              [type]="hidePassword ? 'password' : 'text'"
              formControlName="password"
              placeholder="Enter your password"
              class="block w-full rounded-lg border px-3.5 py-2.5 pr-10 text-sm
                     bg-white dark:bg-surface-700/50
                     text-surface-900 dark:text-surface-100
                     placeholder-surface-400 dark:placeholder-surface-500
                     border-surface-200 dark:border-surface-600
                     focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 dark:focus:ring-brand-400/30 dark:focus:border-brand-400
                     transition-colors"
              [ngClass]="{ 'border-danger-400': fieldErrors['password'] }"
            />
            <button
              type="button"
              tabindex="-1"
              (click)="hidePassword = !hidePassword"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-surface-400 hover:text-surface-600 dark:text-surface-500 dark:hover:text-surface-300 transition-colors">
              <!-- Eye open -->
              <svg *ngIf="hidePassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              <!-- Eye closed -->
              <svg *ngIf="!hidePassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
          </div>
          <p *ngIf="fieldErrors['password']" class="mt-1.5 text-xs text-danger-500 dark:text-danger-400">{{ fieldErrors['password'] }}</p>
        </div>

        <!-- Remember me / Forgot password -->
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 cursor-pointer select-none text-surface-600 dark:text-surface-400">
            <input
              type="checkbox"
              [checked]="rememberMe"
              (change)="rememberMe = !rememberMe"
              class="h-4 w-4 rounded border-surface-300 dark:border-surface-600 text-brand-600 focus:ring-brand-500/40 dark:bg-surface-700 transition-colors"
            />
            <span>Remember me</span>
          </label>
          <a href="javascript:void(0)" class="font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300 transition-colors">
            Forgot password?
          </a>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          [disabled]="loading"
          class="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white
                 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2 dark:focus:ring-offset-surface-800
                 disabled:opacity-60 disabled:cursor-not-allowed
                 transition-all duration-150 ease-in-out">
          <ng-container *ngIf="!loading; else loader">Sign In</ng-container>
          <ng-template #loader>
            <svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </ng-template>
        </button>
      </form>
    </ng-container>

    <!-- SECTION 2: PORTAL SELECTION -->
    <ng-container *ngIf="showPortalSelection">
      <p class="text-sm text-surface-500 dark:text-surface-400 mb-5">Select your dashboard to continue:</p>

      <div class="flex flex-col gap-3 mb-6 animate-slide-up">
        <button
          *ngFor="let portal of availablePortals"
          (click)="selectPortal(portal)"
          class="group flex w-full items-center gap-4 rounded-xl border border-surface-200 dark:border-surface-600
                 bg-white dark:bg-surface-800 p-4 text-left
                 hover:border-brand-400 dark:hover:border-brand-500 hover:shadow-soft
                 hover:-translate-y-0.5
                 transition-all duration-200 ease-in-out">

          <!-- Portal Icon -->
          <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-lg"
               [ngStyle]="{ 'color': portal.color, 'background-color': portal.color + '15' }">
            <ng-container [ngSwitch]="portal.key">
              <!-- Admin: Shield -->
              <svg *ngSwitchCase="'Admin'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <!-- Agent: Building -->
              <svg *ngSwitchCase="'Agent'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              <!-- Customer: User -->
              <svg *ngSwitchCase="'Customer'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </ng-container>
          </div>

          <!-- Portal Text -->
          <div class="flex-1 min-w-0">
            <span class="block text-sm font-semibold text-surface-900 dark:text-surface-100">{{ portal.label }}</span>
            <span class="block text-xs text-surface-500 dark:text-surface-400 mt-0.5 truncate">{{ portal.description }}</span>
          </div>

          <!-- Chevron -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0 text-surface-300 dark:text-surface-600 group-hover:text-brand-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <button
        type="button"
        (click)="backToLogin()"
        class="w-full rounded-lg border border-surface-200 dark:border-surface-600 px-4 py-2.5 text-sm font-medium
               text-surface-500 dark:text-surface-400
               hover:bg-surface-50 dark:hover:bg-surface-700
               focus:outline-none focus:ring-2 focus:ring-brand-500/40
               transition-colors">
        Switch Account
      </button>
    </ng-container>

    <!-- Footer -->
    <div class="mt-8 flex items-center justify-center gap-2 border-t border-surface-200 dark:border-surface-700 pt-6 text-xs text-surface-400 dark:text-surface-500">
      <span>&copy; {{ currentYear }} {{ appName }}</span>
      <span>&middot;</span>
      <a href="#" class="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Privacy</a>
      <span>&middot;</span>
      <a href="#" class="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Terms</a>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/auth/login/login.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/auth/login/login.component.ts", lineNumber: 62 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-HYTNCUY6.js.map
