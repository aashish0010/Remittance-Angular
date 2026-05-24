import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-T2QRKSFD.js";
import {
  NotificationService
} from "./chunk-FW7X3ZAO.js";
import "./chunk-ZNZAZTZS.js";
import {
  ApiService
} from "./chunk-JODIW3US.js";
import {
  AuthStateService
} from "./chunk-4HHFE2PJ.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FTA5WDSR.js";
import "./chunk-ZNC4SKHB.js";

// src/app/pages/agent/profile/agent-profile.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "text-danger-600 dark:text-danger-400": a0, "text-warning-600 dark:text-warning-400": a1, "text-blue-600 dark:text-blue-400": a2, "text-success-600 dark:text-success-400": a3 });
function AgentProfileComponent__svg_svg_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 49);
    \u0275\u0275element(1, "circle", 50)(2, "path", 51);
    \u0275\u0275elementEnd();
  }
}
function AgentProfileComponent__svg_svg_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 53);
    \u0275\u0275elementEnd();
  }
}
function AgentProfileComponent__svg_svg_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 54)(2, "circle", 55);
    \u0275\u0275elementEnd();
  }
}
function AgentProfileComponent__svg_svg_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 56);
    \u0275\u0275elementEnd();
  }
}
function AgentProfileComponent__svg_svg_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 54)(2, "circle", 55);
    \u0275\u0275elementEnd();
  }
}
function AgentProfileComponent__svg_svg_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 56);
    \u0275\u0275elementEnd();
  }
}
function AgentProfileComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "span", 59);
    \u0275\u0275text(3, "Strength");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 61);
    \u0275\u0275element(7, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(5, _c0, ctx_r0.passwordStrength.label === "Weak", ctx_r0.passwordStrength.label === "Fair", ctx_r0.passwordStrength.label === "Good", ctx_r0.passwordStrength.label === "Strong"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.passwordStrength.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.passwordStrength.width);
    \u0275\u0275property("ngClass", ctx_r0.passwordStrength.color);
  }
}
function AgentProfileComponent__svg_svg_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 54)(2, "circle", 55);
    \u0275\u0275elementEnd();
  }
}
function AgentProfileComponent__svg_svg_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 56);
    \u0275\u0275elementEnd();
  }
}
function AgentProfileComponent_p_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function AgentProfileComponent__svg_svg_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 49);
    \u0275\u0275element(1, "circle", 50)(2, "path", 51);
    \u0275\u0275elementEnd();
  }
}
function AgentProfileComponent__svg_svg_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 39);
    \u0275\u0275elementEnd();
  }
}
var AgentProfileComponent = class _AgentProfileComponent {
  // ── Password strength ────────────────────────────────────────────────────
  get passwordStrength() {
    const p = this.newPassword;
    if (!p)
      return { label: "", color: "", width: "0%" };
    let score = 0;
    if (p.length >= 8)
      score++;
    if (p.length >= 12)
      score++;
    if (/[A-Z]/.test(p))
      score++;
    if (/[0-9]/.test(p))
      score++;
    if (/[^A-Za-z0-9]/.test(p))
      score++;
    if (score <= 1)
      return { label: "Weak", color: "bg-danger-500", width: "25%" };
    if (score <= 2)
      return { label: "Fair", color: "bg-warning-500", width: "50%" };
    if (score <= 3)
      return { label: "Good", color: "bg-blue-500", width: "75%" };
    return { label: "Strong", color: "bg-success-500", width: "100%" };
  }
  get passwordsMatch() {
    return !!this.newPassword && this.newPassword === this.confirmPassword;
  }
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.fullName = "";
    this.email = "";
    this.phoneNumber = "";
    this.userInitial = "A";
    this.userRoleName = "";
    this.savingProfile = false;
    this.currentPassword = "";
    this.newPassword = "";
    this.confirmPassword = "";
    this.showCurrent = false;
    this.showNew = false;
    this.showConfirm = false;
    this.savingPassword = false;
  }
  ngOnInit() {
    const state = this.auth.snapshot;
    this.fullName = state.fullName || "";
    this.email = state.email || "";
    this.userInitial = this.fullName.charAt(0).toUpperCase() || "A";
    this.userRoleName = state.roles[0] || "Sending Agent";
    this.api.getMyProfile().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.fullName = res.data.fullName || this.fullName;
          this.email = res.data.email || this.email;
          this.phoneNumber = res.data.phoneNumber || "";
          this.userInitial = this.fullName.charAt(0).toUpperCase() || "A";
        }
      },
      error: () => {
      }
    });
  }
  saveProfile() {
    if (!this.fullName.trim()) {
      this.notify.warn("Full name is required.");
      return;
    }
    this.savingProfile = true;
    this.api.updateMyProfile({ fullName: this.fullName.trim(), phoneNumber: this.phoneNumber.trim() || void 0 }).subscribe({
      next: (res) => {
        this.savingProfile = false;
        if (res?.success) {
          this.userInitial = this.fullName.charAt(0).toUpperCase();
          this.notify.success("Profile updated successfully.");
        } else {
          this.notify.error(res?.message || "Failed to update profile.");
        }
      },
      error: () => {
        this.savingProfile = false;
        this.notify.error("Failed to update profile. Please try again.");
      }
    });
  }
  changePassword() {
    if (!this.currentPassword) {
      this.notify.warn("Please enter your current password.");
      return;
    }
    if (this.newPassword.length < 6) {
      this.notify.warn("New password must be at least 6 characters.");
      return;
    }
    if (!this.passwordsMatch) {
      this.notify.warn("New password and confirmation do not match.");
      return;
    }
    this.savingPassword = true;
    this.api.changePassword({ currentPassword: this.currentPassword, newPassword: this.newPassword }).subscribe({
      next: (res) => {
        this.savingPassword = false;
        if (res?.success) {
          this.currentPassword = "";
          this.newPassword = "";
          this.confirmPassword = "";
          this.notify.success("Password changed successfully.");
        } else {
          this.notify.error(res?.message || "Failed to change password.");
        }
      },
      error: () => {
        this.savingPassword = false;
        this.notify.error("Failed to change password. Please try again.");
      }
    });
  }
  static {
    this.\u0275fac = function AgentProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentProfileComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentProfileComponent, selectors: [["app-agent-profile"]], decls: 103, vars: 31, consts: [[1, "flex", "flex-col", "gap-6", "w-full", "max-w-5xl"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mt-1"], [1, "inline-flex", "items-center", "px-3", "py-1.5", "rounded-full", "text-xs", "font-semibold", "bg-green-50", "text-green-700", "dark:bg-green-900/20", "dark:text-green-400", "border", "border-green-200", "dark:border-green-800"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-1"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft", "flex", "flex-col", "items-center", "gap-4", "text-center"], [1, "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-full", "bg-gradient-to-br", "from-brand-400", "to-brand-700", "text-3xl", "font-bold", "text-white", "shadow-md", "ring-4", "ring-white", "dark:ring-surface-800"], [1, "text-[15px]", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mt-0.5"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-full", "text-xs", "font-semibold", "bg-green-50", "text-green-700", "dark:bg-green-900/20", "dark:text-green-400", "border", "border-green-200", "dark:border-green-800"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"], [1, "w-full", "divide-y", "divide-surface-100", "dark:divide-surface-700", "border-t", "border-surface-100", "dark:border-surface-700", "pt-4", "mt-2", "text-left"], [1, "flex", "items-center", "justify-between", "py-2.5"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "text-xs", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "inline-flex", "items-center", "gap-1", "text-xs", "font-medium", "text-success-700", "dark:text-success-400"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-success-500"], [1, "lg:col-span-2", "flex", "flex-col", "gap-5"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-700", "flex", "items-center", "gap-3"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-brand-50", "dark:bg-brand-900/20", "text-brand-600", "dark:text-brand-400"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"], [1, "p-6", "flex", "flex-col", "gap-4"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1.5"], ["type", "text", "placeholder", "Your full name", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+1 555 000 0000", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], [1, "sm:col-span-2"], [1, "ml-1", "text-surface-400", "font-normal"], ["type", "email", "readonly", "", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-surface-50", "dark:bg-surface-800/60", "text-surface-500", "dark:text-surface-400", "text-sm", "outline-none", "cursor-not-allowed", 3, "ngModel"], [1, "flex", "justify-end", "pt-2"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-brand-600", "hover:bg-brand-700", "text-white", "text-sm", "font-semibold", "rounded-xl", "transition-all", "duration-150", "shadow-sm", "active:scale-95", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["class", "animate-spin h-4 w-4", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-warning-50", "dark:bg-warning-900/20", "text-warning-600", "dark:text-warning-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"], [1, "relative"], ["placeholder", "Your current password", 1, "w-full", "px-4", "pr-11", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-surface-400", "hover:text-surface-600", "dark:hover:text-surface-300", 3, "click"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 4, "ngIf"], ["placeholder", "Min 8 characters recommended", 1, "w-full", "px-4", "pr-11", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "type", "ngModel"], ["class", "mt-2", 4, "ngIf"], ["placeholder", "Repeat new password", 1, "w-full", "px-4", "pr-11", "py-2.5", "rounded-xl", "border", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "type", "ngModel", "ngClass"], ["class", "mt-1 text-xs text-danger-600 dark:text-danger-400", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-warning-600", "hover:bg-warning-700", "text-white", "text-sm", "font-semibold", "rounded-xl", "transition-all", "duration-150", "shadow-sm", "active:scale-95", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["cx", "12", "cy", "12", "r", "3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"], [1, "mt-2"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "text-[11px]", "text-surface-500", "dark:text-surface-400"], [1, "text-[11px]", "font-medium", 3, "ngClass"], [1, "h-1.5", "w-full", "bg-surface-200", "dark:bg-surface-700", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-300", 3, "ngClass"], [1, "mt-1", "text-xs", "text-danger-600", "dark:text-danger-400"]], template: function AgentProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        \u0275\u0275text(4, "My Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Manage your personal information and account security");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "span", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div")(15, "div", 9);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "span", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(20, "svg", 12);
        \u0275\u0275element(21, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "div", 14)(24, "div", 15)(25, "span", 16);
        \u0275\u0275text(26, "Portal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 17);
        \u0275\u0275text(28, "Agent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15)(30, "span", 16);
        \u0275\u0275text(31, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 18);
        \u0275\u0275element(33, "span", 19);
        \u0275\u0275text(34, " Active ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(35, "div", 20)(36, "div", 21)(37, "div", 22)(38, "div", 23);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(39, "svg", 24);
        \u0275\u0275element(40, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(41, "h3", 9);
        \u0275\u0275text(42, "Personal Information");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 26)(44, "div", 27)(45, "div")(46, "label", 28);
        \u0275\u0275text(47, "Full Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "input", 29);
        \u0275\u0275twoWayListener("ngModelChange", function AgentProfileComponent_Template_input_ngModelChange_48_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.fullName, $event) || (ctx.fullName = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div")(50, "label", 28);
        \u0275\u0275text(51, "Phone Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "input", 30);
        \u0275\u0275twoWayListener("ngModelChange", function AgentProfileComponent_Template_input_ngModelChange_52_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.phoneNumber, $event) || (ctx.phoneNumber = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 31)(54, "label", 28);
        \u0275\u0275text(55, " Email Address ");
        \u0275\u0275elementStart(56, "span", 32);
        \u0275\u0275text(57, "(read-only)");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(58, "input", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 34)(60, "button", 35);
        \u0275\u0275listener("click", function AgentProfileComponent_Template_button_click_60_listener() {
          return ctx.saveProfile();
        });
        \u0275\u0275template(61, AgentProfileComponent__svg_svg_61_Template, 3, 0, "svg", 36)(62, AgentProfileComponent__svg_svg_62_Template, 2, 0, "svg", 37);
        \u0275\u0275text(63);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(64, "div", 21)(65, "div", 22)(66, "div", 38);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(67, "svg", 24);
        \u0275\u0275element(68, "path", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(69, "h3", 9);
        \u0275\u0275text(70, "Change Password");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 26)(72, "div")(73, "label", 28);
        \u0275\u0275text(74, "Current Password *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 40)(76, "input", 41);
        \u0275\u0275twoWayListener("ngModelChange", function AgentProfileComponent_Template_input_ngModelChange_76_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.currentPassword, $event) || (ctx.currentPassword = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 42);
        \u0275\u0275listener("click", function AgentProfileComponent_Template_button_click_77_listener() {
          return ctx.showCurrent = !ctx.showCurrent;
        });
        \u0275\u0275template(78, AgentProfileComponent__svg_svg_78_Template, 3, 0, "svg", 43)(79, AgentProfileComponent__svg_svg_79_Template, 2, 0, "svg", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "div")(81, "label", 28);
        \u0275\u0275text(82, "New Password *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 40)(84, "input", 44);
        \u0275\u0275twoWayListener("ngModelChange", function AgentProfileComponent_Template_input_ngModelChange_84_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newPassword, $event) || (ctx.newPassword = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "button", 42);
        \u0275\u0275listener("click", function AgentProfileComponent_Template_button_click_85_listener() {
          return ctx.showNew = !ctx.showNew;
        });
        \u0275\u0275template(86, AgentProfileComponent__svg_svg_86_Template, 3, 0, "svg", 43)(87, AgentProfileComponent__svg_svg_87_Template, 2, 0, "svg", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(88, AgentProfileComponent_div_88_Template, 8, 10, "div", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div")(90, "label", 28);
        \u0275\u0275text(91, "Confirm New Password *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div", 40)(93, "input", 46);
        \u0275\u0275twoWayListener("ngModelChange", function AgentProfileComponent_Template_input_ngModelChange_93_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "button", 42);
        \u0275\u0275listener("click", function AgentProfileComponent_Template_button_click_94_listener() {
          return ctx.showConfirm = !ctx.showConfirm;
        });
        \u0275\u0275template(95, AgentProfileComponent__svg_svg_95_Template, 3, 0, "svg", 43)(96, AgentProfileComponent__svg_svg_96_Template, 2, 0, "svg", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(97, AgentProfileComponent_p_97_Template, 2, 0, "p", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 34)(99, "button", 48);
        \u0275\u0275listener("click", function AgentProfileComponent_Template_button_click_99_listener() {
          return ctx.changePassword();
        });
        \u0275\u0275template(100, AgentProfileComponent__svg_svg_100_Template, 3, 0, "svg", 36)(101, AgentProfileComponent__svg_svg_101_Template, 2, 0, "svg", 37);
        \u0275\u0275text(102);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", ctx.userRoleName, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.userInitial, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.fullName || "Agent");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.userRoleName, " ");
        \u0275\u0275advance(26);
        \u0275\u0275twoWayProperty("ngModel", ctx.fullName);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.phoneNumber);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.email);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.savingProfile || !ctx.fullName.trim());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.savingProfile);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.savingProfile);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.savingProfile ? "Saving..." : "Save Changes", " ");
        \u0275\u0275advance(13);
        \u0275\u0275property("type", ctx.showCurrent ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.currentPassword);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.showCurrent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCurrent);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.showNew ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.newPassword);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.showNew);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNew);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.newPassword);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.showConfirm ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
        \u0275\u0275property("ngClass", ctx.confirmPassword && !ctx.passwordsMatch ? "border-danger-400 dark:border-danger-500 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-danger-500" : "border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.showConfirm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showConfirm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.confirmPassword && !ctx.passwordsMatch);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.savingPassword || !ctx.currentPassword || !ctx.newPassword || !ctx.passwordsMatch);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.savingPassword);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.savingPassword);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.savingPassword ? "Changing..." : "Change Password", " ");
      }
    }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n/*# sourceMappingURL=agent-profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentProfileComponent, [{
    type: Component,
    args: [{ selector: "app-agent-profile", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="flex flex-col gap-6 w-full max-w-5xl">

  <!-- \u2500\u2500 Page header \u2500\u2500 -->
  <div class="flex items-center justify-between">
    <div>
      <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">My Profile</h2>
      <p class="text-sm text-surface-500 dark:text-surface-400 mt-1">Manage your personal information and account security</p>
    </div>
    <span class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border border-green-200 dark:border-green-800">
      {{ userRoleName }}
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

    <!-- \u2500\u2500 Left: Avatar card \u2500\u2500 -->
    <div class="lg:col-span-1">
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft flex flex-col items-center gap-4 text-center">

        <div
          class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-3xl font-bold text-white shadow-md ring-4 ring-white dark:ring-surface-800">
          {{ userInitial }}
        </div>

        <div>
          <div class="text-[15px] font-semibold text-surface-900 dark:text-surface-100">{{ fullName || 'Agent' }}</div>
          <div class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">{{ email }}</div>
        </div>

        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border border-green-200 dark:border-green-800">
          <svg class="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
          {{ userRoleName }}
        </span>

        <div class="w-full divide-y divide-surface-100 dark:divide-surface-700 border-t border-surface-100 dark:border-surface-700 pt-4 mt-2 text-left">
          <div class="flex items-center justify-between py-2.5">
            <span class="text-xs text-surface-500 dark:text-surface-400">Portal</span>
            <span class="text-xs font-medium text-surface-700 dark:text-surface-300">Agent</span>
          </div>
          <div class="flex items-center justify-between py-2.5">
            <span class="text-xs text-surface-500 dark:text-surface-400">Status</span>
            <span class="inline-flex items-center gap-1 text-xs font-medium text-success-700 dark:text-success-400">
              <span class="h-1.5 w-1.5 rounded-full bg-success-500"></span>
              Active
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 Right: Forms \u2500\u2500 -->
    <div class="lg:col-span-2 flex flex-col gap-5">

      <!-- Personal Information -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden">
        <div class="px-6 py-4 border-b border-surface-100 dark:border-surface-700 flex items-center gap-3">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <h3 class="text-[15px] font-semibold text-surface-900 dark:text-surface-100">Personal Information</h3>
        </div>

        <div class="p-6 flex flex-col gap-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1.5">Full Name *</label>
              <input type="text" [(ngModel)]="fullName" placeholder="Your full name"
                class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 dark:placeholder-surface-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
            </div>
            <div>
              <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1.5">Phone Number</label>
              <input type="tel" [(ngModel)]="phoneNumber" placeholder="+1 555 000 0000"
                class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 dark:placeholder-surface-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
            </div>
            <div class="sm:col-span-2">
              <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1.5">
                Email Address <span class="ml-1 text-surface-400 font-normal">(read-only)</span>
              </label>
              <input type="email" [ngModel]="email" readonly
                class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-surface-50 dark:bg-surface-800/60 text-surface-500 dark:text-surface-400 text-sm outline-none cursor-not-allowed" />
            </div>
          </div>
          <div class="flex justify-end pt-2">
            <button (click)="saveProfile()" [disabled]="savingProfile || !fullName.trim()"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-all duration-150 shadow-sm active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed">
              <svg *ngIf="savingProfile" class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              <svg *ngIf="!savingProfile" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
              </svg>
              {{ savingProfile ? 'Saving...' : 'Save Changes' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Change Password -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden">
        <div class="px-6 py-4 border-b border-surface-100 dark:border-surface-700 flex items-center gap-3">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-warning-50 dark:bg-warning-900/20 text-warning-600 dark:text-warning-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <h3 class="text-[15px] font-semibold text-surface-900 dark:text-surface-100">Change Password</h3>
        </div>

        <div class="p-6 flex flex-col gap-4">
          <!-- Current password -->
          <div>
            <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1.5">Current Password *</label>
            <div class="relative">
              <input [type]="showCurrent ? 'text' : 'password'" [(ngModel)]="currentPassword" placeholder="Your current password"
                class="w-full px-4 pr-11 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 dark:placeholder-surface-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
              <button type="button" (click)="showCurrent = !showCurrent"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600 dark:hover:text-surface-300">
                <svg *ngIf="!showCurrent" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><circle cx="12" cy="12" r="3"/>
                </svg>
                <svg *ngIf="showCurrent" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </button>
            </div>
          </div>

          <!-- New password -->
          <div>
            <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1.5">New Password *</label>
            <div class="relative">
              <input [type]="showNew ? 'text' : 'password'" [(ngModel)]="newPassword" placeholder="Min 8 characters recommended"
                class="w-full px-4 pr-11 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 dark:placeholder-surface-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
              <button type="button" (click)="showNew = !showNew"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600 dark:hover:text-surface-300">
                <svg *ngIf="!showNew" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><circle cx="12" cy="12" r="3"/>
                </svg>
                <svg *ngIf="showNew" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </button>
            </div>
            <div *ngIf="newPassword" class="mt-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] text-surface-500 dark:text-surface-400">Strength</span>
                <span class="text-[11px] font-medium"
                  [ngClass]="{
                    'text-danger-600 dark:text-danger-400':   passwordStrength.label === 'Weak',
                    'text-warning-600 dark:text-warning-400': passwordStrength.label === 'Fair',
                    'text-blue-600 dark:text-blue-400':       passwordStrength.label === 'Good',
                    'text-success-600 dark:text-success-400': passwordStrength.label === 'Strong'
                  }">{{ passwordStrength.label }}</span>
              </div>
              <div class="h-1.5 w-full bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all duration-300" [ngClass]="passwordStrength.color" [style.width]="passwordStrength.width"></div>
              </div>
            </div>
          </div>

          <!-- Confirm password -->
          <div>
            <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1.5">Confirm New Password *</label>
            <div class="relative">
              <input [type]="showConfirm ? 'text' : 'password'" [(ngModel)]="confirmPassword" placeholder="Repeat new password"
                class="w-full px-4 pr-11 py-2.5 rounded-xl border transition-colors text-sm outline-none"
                [ngClass]="confirmPassword && !passwordsMatch
                  ? 'border-danger-400 dark:border-danger-500 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-danger-500'
                  : 'border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500'" />
              <button type="button" (click)="showConfirm = !showConfirm"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600 dark:hover:text-surface-300">
                <svg *ngIf="!showConfirm" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><circle cx="12" cy="12" r="3"/>
                </svg>
                <svg *ngIf="showConfirm" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </button>
            </div>
            <p *ngIf="confirmPassword && !passwordsMatch" class="mt-1 text-xs text-danger-600 dark:text-danger-400">Passwords do not match</p>
          </div>

          <div class="flex justify-end pt-2">
            <button (click)="changePassword()"
              [disabled]="savingPassword || !currentPassword || !newPassword || !passwordsMatch"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-warning-600 hover:bg-warning-700 text-white text-sm font-semibold rounded-xl transition-all duration-150 shadow-sm active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed">
              <svg *ngIf="savingPassword" class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              <svg *ngIf="!savingPassword" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
              </svg>
              {{ savingPassword ? 'Changing...' : 'Change Password' }}
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/agent/profile/agent-profile.component.scss */\n/*# sourceMappingURL=agent-profile.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentProfileComponent, { className: "AgentProfileComponent", filePath: "src/app/pages/agent/profile/agent-profile.component.ts", lineNumber: 15 });
})();
export {
  AgentProfileComponent
};
//# sourceMappingURL=chunk-EQOIKMRG.js.map
