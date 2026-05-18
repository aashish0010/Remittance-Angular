import {
  external_exports
} from "./chunk-FU7K6WYO.js";
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
  ApiService
} from "./chunk-UHRNEUWT.js";
import "./chunk-AGDJ7TMO.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-ZX3UFU5L.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-2U2B7PQF.js";
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WEHJLEZR.js";
import "./chunk-ZNC4SKHB.js";

// src/app/pages/auth/reset-password/reset-password.component.ts
var _c0 = (a0) => ({ "border-danger-400 dark:border-danger-500": a0 });
var _c1 = () => [1, 2, 3, 4];
function ResetPasswordComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 7);
    \u0275\u0275element(3, "circle", 8)(4, "path", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6, "Verifying your reset link\u2026");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function ResetPasswordComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 12);
    \u0275\u0275element(3, "path", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h1", 14);
    \u0275\u0275text(5, "Link Expired");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 16);
    \u0275\u0275text(9, " Request a New Link ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 18);
    \u0275\u0275element(12, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Back to sign in ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage || "This password reset link is invalid or has expired. Reset links are only valid for 1 hour.", " ");
  }
}
function ResetPasswordComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 12);
    \u0275\u0275element(3, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h1", 14);
    \u0275\u0275text(5, "Password Reset!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 15);
    \u0275\u0275text(7, " Your password has been reset successfully.");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9, "You can now sign in with your new password. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 22);
    \u0275\u0275text(11, " Sign In Now ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ResetPasswordComponent_ng_container_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 43);
    \u0275\u0275element(2, "path", 44);
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
function ResetPasswordComponent_ng_container_5__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 45);
    \u0275\u0275element(1, "path", 46);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_5__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 45);
    \u0275\u0275element(1, "path", 47)(2, "path", 48);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_5_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors["newPassword"], " ");
  }
}
function ResetPasswordComponent_ng_container_5_ng_container_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 53);
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", i_r3 <= ctx_r0.strengthScore ? ctx_r0.strengthColor : "bg-surface-200 dark:bg-surface-600");
  }
}
function ResetPasswordComponent_ng_container_5_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275template(2, ResetPasswordComponent_ng_container_5_ng_container_20_div_2_Template, 1, 1, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.strengthTextColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.strengthLabel, " password ");
  }
}
function ResetPasswordComponent_ng_container_5__svg_svg_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 45);
    \u0275\u0275element(1, "path", 46);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_5__svg_svg_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 45);
    \u0275\u0275element(1, "path", 47)(2, "path", 48);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_5_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors["confirmPassword"], " ");
  }
}
function ResetPasswordComponent_ng_container_5_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Reset Password");
    \u0275\u0275elementContainerEnd();
  }
}
function ResetPasswordComponent_ng_container_5_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 54);
    \u0275\u0275element(1, "circle", 8)(2, "path", 9);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 25);
    \u0275\u0275element(4, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h1", 27);
    \u0275\u0275text(6, "Create new password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 28);
    \u0275\u0275text(8, "Choose a strong password for your account");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ResetPasswordComponent_ng_container_5_div_9_Template, 5, 1, "div", 29);
    \u0275\u0275elementStart(10, "form", 30);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_ng_container_5_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(11, "div")(12, "label", 31);
    \u0275\u0275text(13, " New password ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 32);
    \u0275\u0275element(15, "input", 33);
    \u0275\u0275elementStart(16, "button", 34);
    \u0275\u0275listener("click", function ResetPasswordComponent_ng_container_5_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hidePassword = !ctx_r0.hidePassword);
    });
    \u0275\u0275template(17, ResetPasswordComponent_ng_container_5__svg_svg_17_Template, 2, 0, "svg", 35)(18, ResetPasswordComponent_ng_container_5__svg_svg_18_Template, 3, 0, "svg", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, ResetPasswordComponent_ng_container_5_p_19_Template, 2, 1, "p", 36)(20, ResetPasswordComponent_ng_container_5_ng_container_20_Template, 5, 4, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "label", 37);
    \u0275\u0275text(23, " Confirm password ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 32);
    \u0275\u0275element(25, "input", 38);
    \u0275\u0275elementStart(26, "button", 34);
    \u0275\u0275listener("click", function ResetPasswordComponent_ng_container_5_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hideConfirm = !ctx_r0.hideConfirm);
    });
    \u0275\u0275template(27, ResetPasswordComponent_ng_container_5__svg_svg_27_Template, 2, 0, "svg", 35)(28, ResetPasswordComponent_ng_container_5__svg_svg_28_Template, 3, 0, "svg", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, ResetPasswordComponent_ng_container_5_p_29_Template, 2, 1, "p", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 39);
    \u0275\u0275template(31, ResetPasswordComponent_ng_container_5_ng_container_31_Template, 2, 0, "ng-container", 40)(32, ResetPasswordComponent_ng_container_5_ng_template_32_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 41)(35, "a", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 18);
    \u0275\u0275element(37, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Back to sign in ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const loader_r4 = \u0275\u0275reference(33);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r0.hidePassword ? "password" : "text")("ngClass", \u0275\u0275pureFunction1(16, _c0, ctx_r0.fieldErrors["newPassword"]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.hidePassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hidePassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["newPassword"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.newPassword.value);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r0.hideConfirm ? "password" : "text")("ngClass", \u0275\u0275pureFunction1(18, _c0, ctx_r0.fieldErrors["confirmPassword"]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.hideConfirm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hideConfirm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["confirmPassword"]);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading)("ngIfElse", loader_r4);
  }
}
var resetSchema = external_exports.object({
  newPassword: external_exports.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: external_exports.string().min(1, "Please confirm your password")
}).refine((d) => d.newPassword === d.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});
var ResetPasswordComponent = class _ResetPasswordComponent {
  constructor(route, router, api) {
    this.route = route;
    this.router = router;
    this.api = api;
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.form = new FormGroup({
      newPassword: new FormControl("", { nonNullable: true }),
      confirmPassword: new FormControl("", { nonNullable: true })
    });
    this.token = "";
    this.fieldErrors = {};
    this.errorMessage = "";
    this.loading = false;
    this.validating = true;
    this.tokenValid = false;
    this.success = false;
    this.hidePassword = true;
    this.hideConfirm = true;
    this.strength = "weak";
    this.strengthScore = 0;
  }
  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get("token") ?? "";
    if (!this.token) {
      this.validating = false;
      this.tokenValid = false;
      return;
    }
    this.api.validateResetToken(this.token).subscribe({
      next: (res) => {
        this.validating = false;
        this.tokenValid = res.success && res.data === true;
        if (!this.tokenValid) {
          this.errorMessage = res.message || "This reset link is invalid or has expired.";
        }
      },
      error: () => {
        this.validating = false;
        this.tokenValid = false;
        this.errorMessage = "This reset link is invalid or has expired.";
      }
    });
    this.form.controls.newPassword.valueChanges.subscribe((val) => {
      this.calcStrength(val);
    });
  }
  calcStrength(password) {
    let score = 0;
    if (password.length >= 8)
      score++;
    if (/[A-Z]/.test(password))
      score++;
    if (/[0-9]/.test(password))
      score++;
    if (/[^A-Za-z0-9]/.test(password))
      score++;
    this.strengthScore = score;
    this.strength = ["weak", "fair", "good", "strong"][score - 1] ?? "weak";
  }
  validate() {
    this.fieldErrors = {};
    const result = resetSchema.safeParse(this.form.getRawValue());
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (!this.fieldErrors[field])
          this.fieldErrors[field] = issue.message;
      }
      return null;
    }
    return result.data;
  }
  submit() {
    this.errorMessage = "";
    const data = this.validate();
    if (!data)
      return;
    this.loading = true;
    this.api.resetPassword(this.token, data.newPassword, data.confirmPassword).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.success = true;
        } else {
          this.errorMessage = res.message || "Failed to reset password. Please try again.";
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage = "Something went wrong. Please try again.";
      }
    });
  }
  get strengthLabel() {
    return this.strengthScore === 0 ? "" : ["Weak", "Fair", "Good", "Strong"][this.strengthScore - 1] ?? "";
  }
  get strengthColor() {
    const map = {
      1: "bg-danger-400",
      2: "bg-warning-400",
      3: "bg-brand-400",
      4: "bg-success-500"
    };
    return map[this.strengthScore] ?? "bg-surface-200 dark:bg-surface-600";
  }
  get strengthTextColor() {
    const map = {
      1: "text-danger-500",
      2: "text-warning-500",
      3: "text-brand-500",
      4: "text-success-600"
    };
    return map[this.strengthScore] ?? "";
  }
  static {
    this.\u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 17, vars: 5, consts: [["loader", ""], [1, "flex", "min-h-screen", "items-center", "justify-center", "bg-surface-50", "dark:bg-surface-900", "p-4", "animate-fade-in"], [1, "w-full", "max-w-md", "rounded-2xl", "shadow-elevated", "bg-white", "dark:bg-surface-800", "dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]", "p-8", "sm:p-10", "text-center", "animate-slide-up"], [4, "ngIf"], [1, "mt-8", "flex", "items-center", "justify-center", "gap-2", "border-t", "border-surface-200", "dark:border-surface-700", "pt-6", "text-xs", "text-surface-400", "dark:text-surface-500"], ["href", "#", 1, "hover:text-brand-600", "dark:hover:text-brand-400", "transition-colors"], [1, "flex", "flex-col", "items-center", "gap-4", "py-8"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "h-10", "w-10", "animate-spin", "text-brand-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "mx-auto", "mb-5", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-2xl", "bg-danger-100", "dark:bg-danger-900/30", "text-danger-600", "dark:text-danger-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-9", "w-9"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"], [1, "text-2xl", "font-bold", "tracking-tight", "text-surface-900", "dark:text-surface-100", "mb-2"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mb-6", "leading-relaxed"], ["routerLink", "/auth/forgot-password", 1, "flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-600", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-brand-700", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:ring-offset-2", "dark:focus:ring-offset-surface-800", "transition-all", "duration-150", "mb-4"], ["routerLink", "/auth/login", 1, "inline-flex", "items-center", "gap-1.5", "text-sm", "font-medium", "text-surface-500", "dark:text-surface-400", "hover:text-brand-600", "dark:hover:text-brand-400", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"], [1, "mx-auto", "mb-5", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-2xl", "bg-success-100", "dark:bg-success-900/30", "text-success-600", "dark:text-success-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["routerLink", "/auth/login", 1, "flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-600", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-brand-700", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:ring-offset-2", "dark:focus:ring-offset-surface-800", "transition-all", "duration-150"], [1, "mb-8"], [1, "mx-auto", "mb-5", "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-brand-100", "dark:bg-brand-900/30", "text-brand-600", "dark:text-brand-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-8", "w-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"], [1, "text-2xl", "font-bold", "tracking-tight", "text-surface-900", "dark:text-surface-100"], [1, "mt-2", "text-sm", "text-surface-500", "dark:text-surface-400"], ["class", "mb-5 flex items-center gap-2 rounded-lg bg-danger-50 dark:bg-danger-500/10 px-4 py-3 text-sm text-danger-600 dark:text-danger-400 animate-slide-down", 4, "ngIf"], [1, "flex", "flex-col", "gap-4", "text-left", 3, "ngSubmit", "formGroup"], ["for", "new-password", 1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1.5"], [1, "relative"], ["id", "new-password", "formControlName", "newPassword", "placeholder", "Minimum 8 characters", "autocomplete", "new-password", 1, "block", "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "pr-10", "text-sm", "bg-white", "dark:bg-surface-700/50", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "border-surface-200", "dark:border-surface-600", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:border-brand-500", "dark:focus:ring-brand-400/30", "dark:focus:border-brand-400", "transition-colors", 3, "type", "ngClass"], ["type", "button", "tabindex", "-1", 1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3", "text-surface-400", "hover:text-surface-600", "dark:text-surface-500", "dark:hover:text-surface-300", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "class", "h-5 w-5", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 4, "ngIf"], ["class", "mt-1.5 text-xs text-danger-500 dark:text-danger-400", 4, "ngIf"], ["for", "confirm-password", 1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1.5"], ["id", "confirm-password", "formControlName", "confirmPassword", "placeholder", "Re-enter your new password", "autocomplete", "new-password", 1, "block", "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "pr-10", "text-sm", "bg-white", "dark:bg-surface-700/50", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "border-surface-200", "dark:border-surface-600", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:border-brand-500", "dark:focus:ring-brand-400/30", "dark:focus:border-brand-400", "transition-colors", 3, "type", "ngClass"], ["type", "submit", 1, "mt-2", "flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-600", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-brand-700", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:ring-offset-2", "dark:focus:ring-offset-surface-800", "disabled:opacity-60", "disabled:cursor-not-allowed", "transition-all", "duration-150", "ease-in-out", 3, "disabled"], [4, "ngIf", "ngIfElse"], [1, "mt-5"], [1, "mb-5", "flex", "items-center", "gap-2", "rounded-lg", "bg-danger-50", "dark:bg-danger-500/10", "px-4", "py-3", "text-sm", "text-danger-600", "dark:text-danger-400", "animate-slide-down"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "flex-shrink-0"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z", "clip-rule", "evenodd"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], [1, "mt-1.5", "text-xs", "text-danger-500", "dark:text-danger-400"], [1, "mt-2.5", "flex", "gap-1"], ["class", "h-1.5 flex-1 rounded-full transition-all duration-300", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mt-1", "text-xs", "font-medium", "transition-colors", 3, "ngClass"], [1, "h-1.5", "flex-1", "rounded-full", "transition-all", "duration-300", 3, "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "h-5", "w-5", "animate-spin", "text-white"]], template: function ResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275template(2, ResetPasswordComponent_ng_container_2_Template, 7, 0, "ng-container", 3)(3, ResetPasswordComponent_ng_container_3_Template, 14, 1, "ng-container", 3)(4, ResetPasswordComponent_ng_container_4_Template, 12, 0, "ng-container", 3)(5, ResetPasswordComponent_ng_container_5_Template, 39, 20, "ng-container", 3);
        \u0275\u0275elementStart(6, "div", 4)(7, "span");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 5);
        \u0275\u0275text(12, "Privacy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 5);
        \u0275\u0275text(16, "Terms");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.validating);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.validating && !ctx.tokenValid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.validating && ctx.tokenValid && ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.validating && ctx.tokenValid && !ctx.success);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " Remittance Platform");
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="flex min-h-screen items-center justify-center bg-surface-50 dark:bg-surface-900 p-4 animate-fade-in">
  <div class="w-full max-w-md rounded-2xl shadow-elevated bg-white dark:bg-surface-800 dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] p-8 sm:p-10 text-center animate-slide-up">

    <!-- \u2500\u2500 VALIDATING TOKEN \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="validating">
      <div class="flex flex-col items-center gap-4 py-8">
        <svg class="h-10 w-10 animate-spin text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="text-sm text-surface-500 dark:text-surface-400">Verifying your reset link\u2026</p>
      </div>
    </ng-container>

    <!-- \u2500\u2500 INVALID / EXPIRED TOKEN \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!validating && !tokenValid">

      <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-danger-100 dark:bg-danger-900/30 text-danger-600 dark:text-danger-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
      </div>

      <h1 class="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-100 mb-2">Link Expired</h1>
      <p class="text-sm text-surface-500 dark:text-surface-400 mb-6 leading-relaxed">
        {{ errorMessage || 'This password reset link is invalid or has expired. Reset links are only valid for 1 hour.' }}
      </p>

      <a routerLink="/auth/forgot-password"
         class="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white
                hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2 dark:focus:ring-offset-surface-800
                transition-all duration-150 mb-4">
        Request a New Link
      </a>

      <a routerLink="/auth/login"
         class="inline-flex items-center gap-1.5 text-sm font-medium text-surface-500 dark:text-surface-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Back to sign in
      </a>

    </ng-container>

    <!-- \u2500\u2500 SUCCESS STATE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!validating && tokenValid && success">

      <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-success-100 dark:bg-success-900/30 text-success-600 dark:text-success-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>

      <h1 class="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-100 mb-2">Password Reset!</h1>
      <p class="text-sm text-surface-500 dark:text-surface-400 mb-6 leading-relaxed">
        Your password has been reset successfully.<br>You can now sign in with your new password.
      </p>

      <a routerLink="/auth/login"
         class="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white
                hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2 dark:focus:ring-offset-surface-800
                transition-all duration-150">
        Sign In Now
      </a>

    </ng-container>

    <!-- \u2500\u2500 RESET FORM \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!validating && tokenValid && !success">

      <div class="mb-8">
        <div class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-100">Create new password</h1>
        <p class="mt-2 text-sm text-surface-500 dark:text-surface-400">Choose a strong password for your account</p>
      </div>

      <!-- Error Banner -->
      <div *ngIf="errorMessage"
           class="mb-5 flex items-center gap-2 rounded-lg bg-danger-50 dark:bg-danger-500/10 px-4 py-3 text-sm text-danger-600 dark:text-danger-400 animate-slide-down">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
        </svg>
        <span>{{ errorMessage }}</span>
      </div>

      <form [formGroup]="form" (ngSubmit)="submit()" class="flex flex-col gap-4 text-left">

        <!-- New Password -->
        <div>
          <label for="new-password" class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">
            New password
          </label>
          <div class="relative">
            <input
              id="new-password"
              [type]="hidePassword ? 'password' : 'text'"
              formControlName="newPassword"
              placeholder="Minimum 8 characters"
              autocomplete="new-password"
              class="block w-full rounded-lg border px-3.5 py-2.5 pr-10 text-sm
                     bg-white dark:bg-surface-700/50
                     text-surface-900 dark:text-surface-100
                     placeholder-surface-400 dark:placeholder-surface-500
                     border-surface-200 dark:border-surface-600
                     focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 dark:focus:ring-brand-400/30 dark:focus:border-brand-400
                     transition-colors"
              [ngClass]="{ 'border-danger-400 dark:border-danger-500': fieldErrors['newPassword'] }"
            />
            <button type="button" tabindex="-1" (click)="hidePassword = !hidePassword"
                    class="absolute inset-y-0 right-0 flex items-center pr-3 text-surface-400 hover:text-surface-600 dark:text-surface-500 dark:hover:text-surface-300 transition-colors">
              <svg *ngIf="hidePassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              <svg *ngIf="!hidePassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
          </div>
          <p *ngIf="fieldErrors['newPassword']" class="mt-1.5 text-xs text-danger-500 dark:text-danger-400">
            {{ fieldErrors['newPassword'] }}
          </p>

          <!-- Password Strength Indicator -->
          <ng-container *ngIf="form.controls.newPassword.value">
            <div class="mt-2.5 flex gap-1">
              <div *ngFor="let i of [1,2,3,4]"
                   class="h-1.5 flex-1 rounded-full transition-all duration-300"
                   [ngClass]="i <= strengthScore ? strengthColor : 'bg-surface-200 dark:bg-surface-600'">
              </div>
            </div>
            <p class="mt-1 text-xs font-medium transition-colors" [ngClass]="strengthTextColor">
              {{ strengthLabel }} password
            </p>
          </ng-container>
        </div>

        <!-- Confirm Password -->
        <div>
          <label for="confirm-password" class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">
            Confirm password
          </label>
          <div class="relative">
            <input
              id="confirm-password"
              [type]="hideConfirm ? 'password' : 'text'"
              formControlName="confirmPassword"
              placeholder="Re-enter your new password"
              autocomplete="new-password"
              class="block w-full rounded-lg border px-3.5 py-2.5 pr-10 text-sm
                     bg-white dark:bg-surface-700/50
                     text-surface-900 dark:text-surface-100
                     placeholder-surface-400 dark:placeholder-surface-500
                     border-surface-200 dark:border-surface-600
                     focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 dark:focus:ring-brand-400/30 dark:focus:border-brand-400
                     transition-colors"
              [ngClass]="{ 'border-danger-400 dark:border-danger-500': fieldErrors['confirmPassword'] }"
            />
            <button type="button" tabindex="-1" (click)="hideConfirm = !hideConfirm"
                    class="absolute inset-y-0 right-0 flex items-center pr-3 text-surface-400 hover:text-surface-600 dark:text-surface-500 dark:hover:text-surface-300 transition-colors">
              <svg *ngIf="hideConfirm" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              <svg *ngIf="!hideConfirm" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
          </div>
          <p *ngIf="fieldErrors['confirmPassword']" class="mt-1.5 text-xs text-danger-500 dark:text-danger-400">
            {{ fieldErrors['confirmPassword'] }}
          </p>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          [disabled]="loading"
          class="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white
                 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2 dark:focus:ring-offset-surface-800
                 disabled:opacity-60 disabled:cursor-not-allowed
                 transition-all duration-150 ease-in-out">
          <ng-container *ngIf="!loading; else loader">Reset Password</ng-container>
          <ng-template #loader>
            <svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </ng-template>
        </button>

      </form>

      <div class="mt-5">
        <a routerLink="/auth/login"
           class="inline-flex items-center gap-1.5 text-sm font-medium text-surface-500 dark:text-surface-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to sign in
        </a>
      </div>

    </ng-container>

    <!-- Footer -->
    <div class="mt-8 flex items-center justify-center gap-2 border-t border-surface-200 dark:border-surface-700 pt-6 text-xs text-surface-400 dark:text-surface-500">
      <span>&copy; {{ currentYear }} Remittance Platform</span>
      <span>&middot;</span>
      <a href="#" class="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Privacy</a>
      <span>&middot;</span>
      <a href="#" class="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Terms</a>
    </div>

  </div>
</div>
` }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/pages/auth/reset-password/reset-password.component.ts", lineNumber: 26 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-T5L5EBB5.js.map
