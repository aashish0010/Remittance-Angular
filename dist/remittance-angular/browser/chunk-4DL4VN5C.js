import {
  Router
} from "./chunk-KYKM2GTY.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-E6522ZUU.js";
import "./chunk-KZEP64CQ.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-N4KLCW3D.js";
import {
  ApiService,
  MatFormField,
  MatLabel,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSuffix
} from "./chunk-IPUKUTHA.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-SKGBRZ6H.js";
import {
  AuthStateService
} from "./chunk-T6M7P6K3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-5RGUSOA3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-BPDBYDBO.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-Y4TRFXTA.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7WRAX6BO.js";

// src/app/pages/auth/login/login.component.ts
function LoginComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Sign in to continue");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_p_10_Template(rf, ctx) {
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
function LoginComponent_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "mat-icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_ng_container_11_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementContainerEnd();
  }
}
function LoginComponent_ng_container_11_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 25);
  }
}
function LoginComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LoginComponent_ng_container_11_div_1_Template, 4, 1, "div", 13);
    \u0275\u0275elementStart(2, "form", 14);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_container_11_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.login());
    });
    \u0275\u0275elementStart(3, "mat-form-field", 15)(4, "mat-label");
    \u0275\u0275text(5, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_ng_container_11_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.email, $event) || (ctx_r0.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 15)(8, "mat-label");
    \u0275\u0275text(9, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_ng_container_11_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.password, $event) || (ctx_r0.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 18);
    \u0275\u0275listener("click", function LoginComponent_ng_container_11_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hidePassword = !ctx_r0.hidePassword);
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 19)(15, "mat-checkbox", 20);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_ng_container_11_Template_mat_checkbox_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.rememberMe, $event) || (ctx_r0.rememberMe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(16, "Remember me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 21);
    \u0275\u0275text(18, "Forgot password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 22);
    \u0275\u0275template(20, LoginComponent_ng_container_11_ng_container_20_Template, 2, 0, "ng-container", 23)(21, LoginComponent_ng_container_11_ng_template_21_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const loader_r3 = \u0275\u0275reference(22);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r0.hidePassword ? "password" : "text");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.password);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.hidePassword ? "visibility_off" : "visibility");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.rememberMe);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading)("ngIfElse", loader_r3);
  }
}
function LoginComponent_ng_container_12_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function LoginComponent_ng_container_12_button_4_Template_button_click_0_listener() {
      const portal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectPortal(portal_r6));
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 32)(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-icon", 35);
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const portal_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", portal_r6.color)("background-color", portal_r6.color + "15");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(portal_r6.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(portal_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(portal_r6.description);
  }
}
function LoginComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 26);
    \u0275\u0275text(2, "Select your dashboard to continue:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275template(4, LoginComponent_ng_container_12_button_4_Template, 11, 7, "button", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function LoginComponent_ng_container_12_Template_button_click_5_listener() {
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
var LoginComponent = class _LoginComponent {
  constructor(api, auth, router) {
    this.api = api;
    this.auth = auth;
    this.router = router;
    this.email = "";
    this.password = "";
    this.errorMessage = "";
    this.loading = false;
    this.hidePassword = true;
    this.rememberMe = false;
    this.showPortalSelection = false;
    this.welcomeName = "";
    this.availablePortals = [];
    this.appName = "Remittance";
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.storedLoginData = null;
  }
  login() {
    if (!this.email || !this.password) {
      this.errorMessage = "Please enter your email and password.";
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.api.login(this.email, this.password).subscribe({
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
    this.password = "";
  }
  setAuthAndNavigate(route) {
    const d = this.storedLoginData;
    this.auth.setAuth(d.token, d.refreshToken, d.userId, d.fullName, d.email, d.roles);
    this.router.navigate([route]);
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 24, vars: 7, consts: [["loader", ""], [1, "auth-container"], [1, "auth-card"], [1, "auth-content"], [1, "auth-header"], [1, "brand-logo"], [1, "app-name"], ["class", "subtitle", 4, "ngIf"], [4, "ngIf"], [1, "auth-footer"], [1, "dot"], ["href", "#"], [1, "subtitle"], ["class", "error-banner", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "compact-input"], ["matInput", "", "type", "email", "name", "email", "required", "", "placeholder", "example@domain.com", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "password", "required", "", 3, "ngModelChange", "type", "ngModel"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "tabindex", "-1", 3, "click"], [1, "form-options"], ["name", "rememberMe", "color", "primary", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0)", 1, "link-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "action-btn", 3, "disabled"], [4, "ngIf", "ngIfElse"], [1, "error-banner"], ["diameter", "20", 1, "white-spinner"], [1, "portal-instruction"], [1, "portal-list"], ["class", "portal-item", 3, "click", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "back-btn", 3, "click"], [1, "portal-item", 3, "click"], [1, "portal-icon-box"], [1, "portal-text"], [1, "portal-title"], [1, "portal-desc"], [1, "arrow-icon"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "mat-card-content", 3)(3, "div", 4)(4, "div", 5)(5, "mat-icon");
        \u0275\u0275text(6, "account_balance_wallet");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, LoginComponent_p_9_Template, 2, 0, "p", 7)(10, LoginComponent_p_10_Template, 2, 1, "p", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, LoginComponent_ng_container_11_Template, 23, 9, "ng-container", 8)(12, LoginComponent_ng_container_12_Template, 7, 1, "ng-container", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "span");
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 10);
        \u0275\u0275text(17, "\u2022");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 11);
        \u0275\u0275text(19, "Privacy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 10);
        \u0275\u0275text(21, "\u2022");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a", 11);
        \u0275\u0275text(23, "Terms");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
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
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, MatCardModule, MatCard, MatCardContent, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatCheckboxModule, MatCheckbox], styles: ["\n\n.auth-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  align-items: center;\n  justify-content: center;\n  background-color: #f8fafc;\n  padding: 1rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01) !important;\n  background: #ffffff;\n  padding: 2.5rem 2rem;\n  text-align: center;\n}\n.auth-content[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.auth-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.auth-header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.25rem;\n}\n.auth-header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.auth-header[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.auth-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-top: 0.5rem;\n  font-size: 0.95rem;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.compact-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.compact-input[_ngcontent-%COMP%]     .mat-mdc-form-field-flex {\n  height: 48px;\n  align-items: center;\n  padding-top: 0 !important;\n}\n.compact-input[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.compact-input[_ngcontent-%COMP%]     .mdc-floating-label {\n  top: 50% !important;\n  transform: translateY(-50%);\n}\n.compact-input[_ngcontent-%COMP%]     .mdc-floating-label--float-above {\n  top: 6px !important;\n  transform: translateY(0);\n}\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.85rem;\n  margin-bottom: 0.5rem;\n}\n.form-options[_ngcontent-%COMP%]   .link-btn[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 500;\n}\n.form-options[_ngcontent-%COMP%]   .link-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  border-radius: 8px;\n  font-size: 1rem;\n  background-color: #0f172a;\n  letter-spacing: 0.5px;\n}\n.white-spinner[_ngcontent-%COMP%]     circle {\n  stroke: #fff;\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n  padding: 0.75rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n.portal-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin: 1.5rem 0;\n}\n.portal-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  gap: 1rem;\n  text-align: left;\n}\n.portal-item[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  background-color: rgba(37, 99, 235, 0.02);\n  transform: translateY(-2px);\n}\n.portal-item[_ngcontent-%COMP%]   .portal-icon-box[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.portal-item[_ngcontent-%COMP%]   .portal-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.portal-item[_ngcontent-%COMP%]   .portal-text[_ngcontent-%COMP%]   .portal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n  font-size: 0.95rem;\n}\n.portal-item[_ngcontent-%COMP%]   .portal-text[_ngcontent-%COMP%]   .portal-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.portal-item[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.back-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-color: #e2e8f0;\n  color: #64748b;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-top: 1px solid #e2e8f0;\n  padding-top: 1.5rem;\n  font-size: 0.75rem;\n  color: #64748b;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.auth-footer[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatCheckboxModule
    ], template: `<div class="auth-container">\r
  <mat-card class="auth-card">\r
    <mat-card-content class="auth-content">\r
\r
      <!-- Header Section -->\r
      <div class="auth-header">\r
        <div class="brand-logo">\r
          <mat-icon>account_balance_wallet</mat-icon>\r
        </div>\r
        <h1 class="app-name">{{ appName }}</h1>\r
        <p class="subtitle" *ngIf="!showPortalSelection">Sign in to continue</p>\r
        <p class="subtitle" *ngIf="showPortalSelection">Welcome back, {{ welcomeName }}</p>\r
      </div>\r
\r
      <!-- SECTION 1: LOGIN FORM -->\r
      <ng-container *ngIf="!showPortalSelection">\r
\r
        <div class="error-banner" *ngIf="errorMessage">\r
          <mat-icon>error</mat-icon> {{ errorMessage }}\r
        </div>\r
\r
        <form (ngSubmit)="login()" class="auth-form">\r
          <mat-form-field appearance="outline" subscriptSizing="dynamic" class="compact-input">\r
            <mat-label>Email</mat-label>\r
            <input matInput type="email" [(ngModel)]="email" name="email" required placeholder="example@domain.com">\r
          </mat-form-field>\r
\r
          <mat-form-field appearance="outline" subscriptSizing="dynamic" class="compact-input">\r
            <mat-label>Password</mat-label>\r
            <input matInput [type]="hidePassword ? 'password' : 'text'" [(ngModel)]="password" name="password" required>\r
            <button mat-icon-button matSuffix (click)="hidePassword = !hidePassword" type="button" tabindex="-1">\r
              <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r
            </button>\r
          </mat-form-field>\r
\r
          <div class="form-options">\r
            <mat-checkbox [(ngModel)]="rememberMe" name="rememberMe" color="primary">Remember me</mat-checkbox>\r
            <a href="javascript:void(0)" class="link-btn">Forgot password?</a>\r
          </div>\r
\r
          <button mat-flat-button color="primary" class="action-btn" [disabled]="loading" type="submit">\r
            <ng-container *ngIf="!loading; else loader">Sign In</ng-container>\r
            <ng-template #loader><mat-spinner diameter="20" class="white-spinner"></mat-spinner></ng-template>\r
          </button>\r
        </form>\r
      </ng-container>\r
\r
      <!-- SECTION 2: PORTAL SELECTION -->\r
      <ng-container *ngIf="showPortalSelection">\r
        <p class="portal-instruction">Select your dashboard to continue:</p>\r
\r
        <div class="portal-list">\r
          <button class="portal-item" *ngFor="let portal of availablePortals" (click)="selectPortal(portal)">\r
            <div class="portal-icon-box" [style.color]="portal.color" [style.background-color]="portal.color + '15'">\r
              <mat-icon>{{ portal.icon }}</mat-icon>\r
            </div>\r
            <div class="portal-text">\r
              <span class="portal-title">{{ portal.label }}</span>\r
              <span class="portal-desc">{{ portal.description }}</span>\r
            </div>\r
            <mat-icon class="arrow-icon">chevron_right</mat-icon>\r
          </button>\r
        </div>\r
\r
        <button mat-stroked-button class="back-btn" (click)="backToLogin()">\r
          Switch Account\r
        </button>\r
      </ng-container>\r
\r
    </mat-card-content>\r
\r
    <!-- Simple Footer -->\r
    <div class="auth-footer">\r
      <span>&copy; {{ currentYear }} {{ appName }}</span>\r
      <span class="dot">\u2022</span>\r
      <a href="#">Privacy</a>\r
      <span class="dot">\u2022</span>\r
      <a href="#">Terms</a>\r
    </div>\r
  </mat-card>\r
</div>`, styles: ["/* src/app/pages/auth/login/login.component.scss */\n.auth-container {\n  display: flex;\n  min-height: 100vh;\n  align-items: center;\n  justify-content: center;\n  background-color: #f8fafc;\n  padding: 1rem;\n}\n.auth-card {\n  width: 100%;\n  max-width: 420px;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01) !important;\n  background: #ffffff;\n  padding: 2.5rem 2rem;\n  text-align: center;\n}\n.auth-content {\n  padding: 0 !important;\n}\n.auth-header {\n  margin-bottom: 2rem;\n}\n.auth-header .brand-logo {\n  width: 56px;\n  height: 56px;\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.25rem;\n}\n.auth-header .brand-logo mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.auth-header .app-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.auth-header .subtitle {\n  color: #64748b;\n  margin-top: 0.5rem;\n  font-size: 0.95rem;\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.compact-input {\n  width: 100%;\n}\n.compact-input ::ng-deep .mat-mdc-form-field-flex {\n  height: 48px;\n  align-items: center;\n  padding-top: 0 !important;\n}\n.compact-input ::ng-deep .mat-mdc-text-field-wrapper {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.compact-input ::ng-deep .mdc-floating-label {\n  top: 50% !important;\n  transform: translateY(-50%);\n}\n.compact-input ::ng-deep .mdc-floating-label--float-above {\n  top: 6px !important;\n  transform: translateY(0);\n}\n.form-options {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.85rem;\n  margin-bottom: 0.5rem;\n}\n.form-options .link-btn {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 500;\n}\n.form-options .link-btn:hover {\n  text-decoration: underline;\n}\n.action-btn {\n  width: 100%;\n  height: 46px;\n  border-radius: 8px;\n  font-size: 1rem;\n  background-color: #0f172a;\n  letter-spacing: 0.5px;\n}\n.white-spinner ::ng-deep circle {\n  stroke: #fff;\n}\n.error-banner {\n  background: #fef2f2;\n  color: #ef4444;\n  padding: 0.75rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.error-banner mat-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n.portal-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin: 1.5rem 0;\n}\n.portal-item {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  gap: 1rem;\n  text-align: left;\n}\n.portal-item:hover {\n  border-color: #2563eb;\n  background-color: rgba(37, 99, 235, 0.02);\n  transform: translateY(-2px);\n}\n.portal-item .portal-icon-box {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.portal-item .portal-text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.portal-item .portal-text .portal-title {\n  font-weight: 600;\n  color: #1e293b;\n  font-size: 0.95rem;\n}\n.portal-item .portal-text .portal-desc {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.portal-item .arrow-icon {\n  color: #e2e8f0;\n}\n.back-btn {\n  width: 100%;\n  border-color: #e2e8f0;\n  color: #64748b;\n}\n.auth-footer {\n  margin-top: 2rem;\n  border-top: 1px solid #e2e8f0;\n  padding-top: 1.5rem;\n  font-size: 0.75rem;\n  color: #64748b;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.auth-footer a {\n  color: #64748b;\n  text-decoration: none;\n}\n.auth-footer a:hover {\n  color: #2563eb;\n}\n.auth-footer .dot {\n  margin: 0 8px;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/auth/login/login.component.ts", lineNumber: 68 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-4DL4VN5C.js.map
