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
} from "./chunk-T2QRKSFD.js";
import {
  ApiService
} from "./chunk-JODIW3US.js";
import "./chunk-4HHFE2PJ.js";
import {
  RouterLink
} from "./chunk-MLGMBAGQ.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-PBY7YOCP.js";
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FTA5WDSR.js";
import "./chunk-ZNC4SKHB.js";

// src/app/pages/auth/forgot-password/forgot-password.component.ts
var _c0 = (a0) => ({ "border-danger-400 dark:border-danger-500": a0 });
function ForgotPasswordComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h1", 10);
    \u0275\u0275text(5, "Check your email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7, " We sent a password reset link to");
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 13)(12, "div", 14)(13, "span", 15);
    \u0275\u0275text(14, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 16);
    \u0275\u0275text(16, "Open the email from Remittance Platform");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "span", 15);
    \u0275\u0275text(19, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 16);
    \u0275\u0275text(21, "Click the ");
    \u0275\u0275elementStart(22, "strong", 17);
    \u0275\u0275text(23, '"Reset Password"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " button");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 14)(26, "span", 15);
    \u0275\u0275text(27, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 16);
    \u0275\u0275text(29, "Create your new password (link valid for ");
    \u0275\u0275elementStart(30, "strong", 17);
    \u0275\u0275text(31, "1 hour");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, ")");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "a", 18);
    \u0275\u0275text(34, " Back to Sign In ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 19);
    \u0275\u0275text(36, " Didn't receive it? ");
    \u0275\u0275elementStart(37, "button", 20);
    \u0275\u0275listener("click", function ForgotPasswordComponent_ng_container_2_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resend());
    });
    \u0275\u0275text(38, " Resend email ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.maskEmail(ctx_r1.submittedEmail));
  }
}
function ForgotPasswordComponent_ng_template_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function ForgotPasswordComponent_ng_template_3_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fieldErrors["email"], " ");
  }
}
function ForgotPasswordComponent_ng_template_3_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " Send Reset Link ");
    \u0275\u0275elementContainerEnd();
  }
}
function ForgotPasswordComponent_ng_template_3_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 41);
    \u0275\u0275element(1, "circle", 42)(2, "path", 43);
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 23);
    \u0275\u0275element(3, "path", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h1", 25);
    \u0275\u0275text(5, "Forgot password?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7, "Enter your email and we'll send you a reset link");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ForgotPasswordComponent_ng_template_3_div_8_Template, 5, 1, "div", 27);
    \u0275\u0275elementStart(9, "form", 28);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_ng_template_3_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(10, "div")(11, "label", 29);
    \u0275\u0275text(12, " Email address ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 30);
    \u0275\u0275template(14, ForgotPasswordComponent_ng_template_3_p_14_Template, 2, 1, "p", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 32);
    \u0275\u0275template(16, ForgotPasswordComponent_ng_template_3_ng_container_16_Template, 2, 0, "ng-container", 4)(17, ForgotPasswordComponent_ng_template_3_ng_template_17_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "a", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 35);
    \u0275\u0275element(22, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Back to sign in ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loader_r4 = \u0275\u0275reference(18);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c0, ctx_r1.fieldErrors["email"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors["email"]);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading)("ngIfElse", loader_r4);
  }
}
var forgotSchema = external_exports.object({
  email: external_exports.string().email("Please enter a valid email address")
});
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(api) {
    this.api = api;
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.form = new FormGroup({
      email: new FormControl("", { nonNullable: true })
    });
    this.fieldErrors = {};
    this.errorMessage = "";
    this.loading = false;
    this.submitted = false;
    this.submittedEmail = "";
  }
  validate() {
    this.fieldErrors = {};
    const result = forgotSchema.safeParse(this.form.getRawValue());
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0];
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
    this.submittedEmail = data.email;
    this.api.forgotPassword(data.email).subscribe({
      next: () => {
        this.loading = false;
        this.submitted = true;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = "Something went wrong. Please try again.";
      }
    });
  }
  resend() {
    this.submitted = false;
    this.form.patchValue({ email: this.submittedEmail });
    this.submit();
  }
  maskEmail(email) {
    const [local, domain] = email.split("@");
    if (!local || !domain)
      return email;
    const visible = local.length > 2 ? local.slice(0, 2) : local[0] ?? "";
    return `${visible}${"*".repeat(Math.max(local.length - 2, 1))}@${domain}`;
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 16, vars: 3, consts: [["formState", ""], ["loader", ""], [1, "flex", "min-h-screen", "items-center", "justify-center", "bg-surface-50", "dark:bg-surface-900", "p-4", "animate-fade-in"], [1, "w-full", "max-w-md", "rounded-2xl", "shadow-elevated", "bg-white", "dark:bg-surface-800", "dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]", "p-8", "sm:p-10", "text-center", "animate-slide-up"], [4, "ngIf", "ngIfElse"], [1, "mt-8", "flex", "items-center", "justify-center", "gap-2", "border-t", "border-surface-200", "dark:border-surface-700", "pt-6", "text-xs", "text-surface-400", "dark:text-surface-500"], ["href", "#", 1, "hover:text-brand-600", "dark:hover:text-brand-400", "transition-colors"], [1, "mx-auto", "mb-5", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-2xl", "bg-success-100", "dark:bg-success-900/30", "text-success-600", "dark:text-success-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-9", "w-9"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"], [1, "text-2xl", "font-bold", "tracking-tight", "text-surface-900", "dark:text-surface-100", "mb-2"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mb-6", "leading-relaxed"], [1, "font-semibold", "text-surface-700", "dark:text-surface-200"], [1, "mb-6", "rounded-xl", "border", "border-surface-100", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-700/40", "p-4", "text-left", "space-y-2.5"], [1, "flex", "items-start", "gap-3"], [1, "flex", "h-5", "w-5", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-brand-100", "dark:bg-brand-900/40", "text-xs", "font-bold", "text-brand-700", "dark:text-brand-300"], [1, "text-sm", "text-surface-600", "dark:text-surface-400"], [1, "text-surface-700", "dark:text-surface-300"], ["routerLink", "/auth/login", 1, "flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-600", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-brand-700", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:ring-offset-2", "dark:focus:ring-offset-surface-800", "transition-all", "duration-150", "mb-4"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], ["type", "button", 1, "font-medium", "text-brand-600", "hover:text-brand-500", "dark:text-brand-400", "dark:hover:text-brand-300", "transition-colors", 3, "click"], [1, "mb-8"], [1, "mx-auto", "mb-5", "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-brand-100", "dark:bg-brand-900/30", "text-brand-600", "dark:text-brand-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-8", "w-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"], [1, "text-2xl", "font-bold", "tracking-tight", "text-surface-900", "dark:text-surface-100"], [1, "mt-2", "text-sm", "text-surface-500", "dark:text-surface-400"], ["class", "mb-5 flex items-center gap-2 rounded-lg bg-danger-50 dark:bg-danger-500/10 px-4 py-3 text-sm text-danger-600 dark:text-danger-400 animate-slide-down", 4, "ngIf"], [1, "flex", "flex-col", "gap-4", "text-left", 3, "ngSubmit", "formGroup"], ["for", "fp-email", 1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1.5"], ["id", "fp-email", "type", "email", "formControlName", "email", "placeholder", "you@example.com", "autocomplete", "email", 1, "block", "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "bg-white", "dark:bg-surface-700/50", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "border-surface-200", "dark:border-surface-600", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:border-brand-500", "dark:focus:ring-brand-400/30", "dark:focus:border-brand-400", "transition-colors", 3, "ngClass"], ["class", "mt-1.5 text-xs text-danger-500 dark:text-danger-400", 4, "ngIf"], ["type", "submit", 1, "mt-2", "flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-600", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-brand-700", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "focus:ring-offset-2", "dark:focus:ring-offset-surface-800", "disabled:opacity-60", "disabled:cursor-not-allowed", "transition-all", "duration-150", "ease-in-out", 3, "disabled"], [1, "mt-5"], ["routerLink", "/auth/login", 1, "inline-flex", "items-center", "gap-1.5", "text-sm", "font-medium", "text-surface-500", "dark:text-surface-400", "hover:text-brand-600", "dark:hover:text-brand-400", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"], [1, "mb-5", "flex", "items-center", "gap-2", "rounded-lg", "bg-danger-50", "dark:bg-danger-500/10", "px-4", "py-3", "text-sm", "text-danger-600", "dark:text-danger-400", "animate-slide-down"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "flex-shrink-0"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z", "clip-rule", "evenodd"], [1, "mt-1.5", "text-xs", "text-danger-500", "dark:text-danger-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "h-5", "w-5", "animate-spin", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275template(2, ForgotPasswordComponent_ng_container_2_Template, 39, 1, "ng-container", 4)(3, ForgotPasswordComponent_ng_template_3_Template, 24, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(5, "div", 5)(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11, "Privacy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 6);
        \u0275\u0275text(15, "Terms");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const formState_r5 = \u0275\u0275reference(4);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.submitted)("ngIfElse", formState_r5);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " Remittance Platform");
      }
    }, dependencies: [CommonModule, NgClass, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="flex min-h-screen items-center justify-center bg-surface-50 dark:bg-surface-900 p-4 animate-fade-in">
  <div class="w-full max-w-md rounded-2xl shadow-elevated bg-white dark:bg-surface-800 dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] p-8 sm:p-10 text-center animate-slide-up">

    <!-- \u2500\u2500 SUCCESS STATE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="submitted; else formState">

      <!-- Envelope Icon -->
      <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-success-100 dark:bg-success-900/30 text-success-600 dark:text-success-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      </div>

      <h1 class="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-100 mb-2">Check your email</h1>
      <p class="text-sm text-surface-500 dark:text-surface-400 mb-6 leading-relaxed">
        We sent a password reset link to<br>
        <span class="font-semibold text-surface-700 dark:text-surface-200">{{ maskEmail(submittedEmail) }}</span>
      </p>

      <!-- Steps hint -->
      <div class="mb-6 rounded-xl border border-surface-100 dark:border-surface-700 bg-surface-50 dark:bg-surface-700/40 p-4 text-left space-y-2.5">
        <div class="flex items-start gap-3">
          <span class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/40 text-xs font-bold text-brand-700 dark:text-brand-300">1</span>
          <span class="text-sm text-surface-600 dark:text-surface-400">Open the email from Remittance Platform</span>
        </div>
        <div class="flex items-start gap-3">
          <span class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/40 text-xs font-bold text-brand-700 dark:text-brand-300">2</span>
          <span class="text-sm text-surface-600 dark:text-surface-400">Click the <strong class="text-surface-700 dark:text-surface-300">"Reset Password"</strong> button</span>
        </div>
        <div class="flex items-start gap-3">
          <span class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/40 text-xs font-bold text-brand-700 dark:text-brand-300">3</span>
          <span class="text-sm text-surface-600 dark:text-surface-400">Create your new password (link valid for <strong class="text-surface-700 dark:text-surface-300">1 hour</strong>)</span>
        </div>
      </div>

      <a routerLink="/auth/login"
         class="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white
                hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2 dark:focus:ring-offset-surface-800
                transition-all duration-150 mb-4">
        Back to Sign In
      </a>

      <p class="text-sm text-surface-500 dark:text-surface-400">
        Didn't receive it?
        <button type="button" (click)="resend()"
                class="font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300 transition-colors">
          Resend email
        </button>
      </p>

    </ng-container>

    <!-- \u2500\u2500 FORM STATE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-template #formState>

      <!-- Lock Icon -->
      <div class="mb-8">
        <div class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-100">Forgot password?</h1>
        <p class="mt-2 text-sm text-surface-500 dark:text-surface-400">Enter your email and we'll send you a reset link</p>
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

        <!-- Email Field -->
        <div>
          <label for="fp-email" class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">
            Email address
          </label>
          <input
            id="fp-email"
            type="email"
            formControlName="email"
            placeholder="you@example.com"
            autocomplete="email"
            class="block w-full rounded-lg border px-3.5 py-2.5 text-sm
                   bg-white dark:bg-surface-700/50
                   text-surface-900 dark:text-surface-100
                   placeholder-surface-400 dark:placeholder-surface-500
                   border-surface-200 dark:border-surface-600
                   focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 dark:focus:ring-brand-400/30 dark:focus:border-brand-400
                   transition-colors"
            [ngClass]="{ 'border-danger-400 dark:border-danger-500': fieldErrors['email'] }"
          />
          <p *ngIf="fieldErrors['email']" class="mt-1.5 text-xs text-danger-500 dark:text-danger-400">
            {{ fieldErrors['email'] }}
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
          <ng-container *ngIf="!loading; else loader">
            Send Reset Link
          </ng-container>
          <ng-template #loader>
            <svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </ng-template>
        </button>

      </form>

      <!-- Back to login -->
      <div class="mt-5">
        <a routerLink="/auth/login"
           class="inline-flex items-center gap-1.5 text-sm font-medium text-surface-500 dark:text-surface-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to sign in
        </a>
      </div>

    </ng-template>

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
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/pages/auth/forgot-password/forgot-password.component.ts", lineNumber: 20 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-DNJ33IZZ.js.map
