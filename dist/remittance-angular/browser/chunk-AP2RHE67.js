import {
  AppSettingsService
} from "./chunk-3AILC626.js";
import {
  DomSanitizer,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-ZQKQC2T6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-D3SW2Q36.js";
import {
  ApiService
} from "./chunk-JPFLOAIK.js";
import {
  AuthStateService
} from "./chunk-LDWTK5YJ.js";
import "./chunk-R63TWOS6.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-WBW3ZP3W.js";
import {
  Component,
  ElementRef,
  HostListener,
  Injectable,
  NgZone,
  Subject,
  fromEvent,
  merge,
  setClassMetadata,
  switchMap,
  takeUntil,
  tap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EU7HC72Q.js";
import "./chunk-S5KMCARS.js";

// src/app/core/services/idle-timeout.service.ts
var IdleTimeoutService = class _IdleTimeoutService {
  get showWarning() {
    return this._showWarning;
  }
  get remainingSeconds() {
    return this._remainingSeconds;
  }
  constructor(auth, router, zone, appSettings) {
    this.auth = auth;
    this.router = router;
    this.zone = zone;
    this.appSettings = appSettings;
    this._idleTimeoutMs = 15 * 60 * 1e3;
    this._warningAtMs = 12 * 60 * 1e3;
    this.destroy$ = new Subject();
    this._showWarning = false;
    this._remainingSeconds = 0;
  }
  /**
   * Call this once from the root layout (admin/agent/customer) after login.
   * Reads user.sessionTimeout from AppSettingsService (defaults to 15 min).
   */
  start() {
    this.stop();
    const timeoutMinutes = this.appSettings.sessionTimeoutMinutes;
    this._idleTimeoutMs = timeoutMinutes * 60 * 1e3;
    const warningLeadMs = Math.min(3 * 60 * 1e3, Math.floor(this._idleTimeoutMs * 0.2));
    this._warningAtMs = Math.max(this._idleTimeoutMs - warningLeadMs, 0);
    this.zone.runOutsideAngular(() => {
      const activity$ = merge(fromEvent(document, "mousemove"), fromEvent(document, "mousedown"), fromEvent(document, "keydown"), fromEvent(document, "touchstart"), fromEvent(document, "scroll"));
      this.timerSub = activity$.pipe(tap(() => this.dismissWarning()), switchMap(() => timer(this._warningAtMs)), takeUntil(this.destroy$)).subscribe(() => {
        this.zone.run(() => this.showTimeoutWarning());
      });
      this.warningSub = timer(this._warningAtMs).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.zone.run(() => this.showTimeoutWarning());
      });
    });
  }
  showTimeoutWarning() {
    this._showWarning = true;
    this._remainingSeconds = Math.floor((this._idleTimeoutMs - this._warningAtMs) / 1e3);
    this.countdownInterval = setInterval(() => {
      this._remainingSeconds--;
      if (this._remainingSeconds <= 0) {
        this.forceLogout();
      }
    }, 1e3);
  }
  dismissWarning() {
    this._showWarning = false;
    this._remainingSeconds = 0;
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = void 0;
    }
  }
  extendSession() {
    this.dismissWarning();
    this.stop();
    this.start();
  }
  forceLogout() {
    this.dismissWarning();
    this.stop();
    this.auth.logout();
    this.router.navigate(["/auth/login"], {
      queryParams: { reason: "timeout" }
    });
  }
  stop() {
    this.dismissWarning();
    this.timerSub?.unsubscribe();
    this.warningSub?.unsubscribe();
    this.timerSub = void 0;
    this.warningSub = void 0;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.stop();
  }
  static {
    this.\u0275fac = function IdleTimeoutService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdleTimeoutService)(\u0275\u0275inject(AuthStateService), \u0275\u0275inject(Router), \u0275\u0275inject(NgZone), \u0275\u0275inject(AppSettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IdleTimeoutService, factory: _IdleTimeoutService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdleTimeoutService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthStateService }, { type: Router }, { type: NgZone }, { type: AppSettingsService }], null);
})();

// src/app/layouts/admin-layout/admin-layout.component.ts
var _c0 = (a0, a1) => ({ "w-64": a0, "w-0 lg:w-16": a1 });
var _c1 = (a0, a1) => ({ "lg:ml-64": a0, "lg:ml-16": a1 });
function AdminLayoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 51);
    \u0275\u0275element(2, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.appSettings.maintenanceMessage);
  }
}
function AdminLayoutComponent__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 53);
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 54);
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 58)(5, "div", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 60);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "div", 61);
    \u0275\u0275elementStart(10, "a", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 63);
    \u0275\u0275element(12, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " My Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(14, "div", 61);
    \u0275\u0275elementStart(15, "a", 65);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_37_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.logout();
      return \u0275\u0275resetView(ctx_r0.showUserMenu = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 66);
    \u0275\u0275element(17, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Sign Out ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.userInitial, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.userRoleName);
  }
}
function AdminLayoutComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleDrawer());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hidden", !ctx_r0.sidenavOpened);
  }
}
function AdminLayoutComponent_div_40_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_40_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 74);
    \u0275\u0275element(2, "path", 75);
    \u0275\u0275elementEnd()();
  }
}
function AdminLayoutComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 69);
    \u0275\u0275element(3, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function AdminLayoutComponent_div_40_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchQuery, $event) || (ctx_r0.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminLayoutComponent_div_40_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminLayoutComponent_div_40_button_5_Template, 3, 0, "button", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.searchQuery);
  }
}
function AdminLayoutComponent_div_41_a_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.section);
  }
}
function AdminLayoutComponent_div_41_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 78);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_41_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 79);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span", 80);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminLayoutComponent_div_41_a_1_span_4_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", item_r7.route);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.getIconSvg(item_r7.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.section);
  }
}
function AdminLayoutComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275template(1, AdminLayoutComponent_div_41_a_1_Template, 5, 4, "a", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredNavItems);
  }
}
function AdminLayoutComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 74);
    \u0275\u0275element(2, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No pages found ");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "Dashboard");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_ng_container_47_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r8, " ");
  }
}
function AdminLayoutComponent_ng_container_47_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 88);
  }
}
function AdminLayoutComponent_ng_container_47_a_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r9.label);
  }
}
function AdminLayoutComponent_ng_container_47_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 89);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 39);
    \u0275\u0275template(2, AdminLayoutComponent_ng_container_47_a_3_span_2_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", item_r9.route)("title", !ctx_r0.sidenavOpened ? item_r9.label : "");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.getIconSvg(item_r9.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sidenavOpened);
  }
}
function AdminLayoutComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminLayoutComponent_ng_container_47_p_1_Template, 2, 1, "p", 84)(2, AdminLayoutComponent_ng_container_47_div_2_Template, 1, 0, "div", 85)(3, AdminLayoutComponent_ng_container_47_a_3_Template, 3, 4, "a", 86);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const section_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sidenavOpened);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.sidenavOpened);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.getItemsForSection(section_r8));
  }
}
function AdminLayoutComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign Out");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 93);
    \u0275\u0275element(4, "path", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 95);
    \u0275\u0275text(6, "Session Timeout Warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 96);
    \u0275\u0275text(8, " Your session will expire in ");
    \u0275\u0275elementStart(9, "strong", 97);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " seconds due to inactivity. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 98)(13, "button", 99);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_57_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.idleTimeout.extendSession());
    });
    \u0275\u0275text(14, " Stay Logged In ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 100);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_57_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275text(16, " Sign Out ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.idleTimeout.remainingSeconds);
  }
}
var ALL_NAV_ITEMS = [
  { label: "Dashboard", icon: "dashboard", route: "/admin/dashboard" },
  { label: "Agents", icon: "people_outline", route: "/admin/agents", section: "Agent Management" },
  { label: "Agent Setup", icon: "tune", route: "/admin/accounting", section: "Agent Management" },
  { label: "Register", icon: "person_add_alt", route: "/admin/customer-register", section: "Customers" },
  { label: "Report", icon: "assessment", route: "/admin/customer-report", section: "Customers" },
  { label: "Receivers", icon: "contact_phone", route: "/admin/receivers", section: "Operations" },
  { label: "Exchange Rates", icon: "currency_exchange", route: "/admin/rates", section: "Operations" },
  { label: "Service Charges", icon: "payments", route: "/admin/commissions", section: "Operations" },
  { label: "Routing", icon: "alt_route", route: "/admin/routing", section: "Operations" },
  { label: "Transactions", icon: "receipt_long", route: "/admin/transactions", section: "Operations" },
  { label: "Compliance Setup", icon: "tune", route: "/admin/compliance-setup", section: "Compliance" },
  { label: "Alerts", icon: "security", route: "/admin/compliance", section: "Compliance" },
  { label: "Sanctions", icon: "gavel", route: "/admin/sanctions", section: "Compliance" },
  { label: "Static Values", icon: "dataset", route: "/admin/static-values", section: "System" },
  { label: "Settings", icon: "settings_cog", route: "/admin/settings", section: "System" },
  { label: "Agent Statement", icon: "account_balance", route: "/admin/reports/agent-statement", section: "Reports" },
  { label: "Transaction Report", icon: "summarize", route: "/admin/reports/transactions", section: "Reports" },
  { label: "Commission Report", icon: "paid", route: "/admin/reports/commissions", section: "Reports" },
  { label: "Revenue Report", icon: "trending_up", route: "/admin/reports/revenue", section: "Reports" },
  { label: "Settlement Report", icon: "handshake", route: "/admin/reports/settlement", section: "Reports" },
  { label: "Roles", icon: "badge", route: "/admin/user-management/roles", section: "User Management" },
  { label: "Users", icon: "group", route: "/admin/user-management/users", section: "User Management" }
];
var ICON_SVG = {
  "dashboard": `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/>`,
  "people_outline": `<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>`,
  "tune": `<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>`,
  "person_add_alt": `<path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"/>`,
  "assessment": `<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>`,
  "contact_phone": `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>`,
  "currency_exchange": `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/>`,
  "payments": `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"/>`,
  "alt_route": `<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>`,
  "receipt_long": `<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>`,
  "security": `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>`,
  "gavel": `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"/>`,
  "dataset": `<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/>`,
  "account_balance": `<path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"/>`,
  "summarize": `<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>`,
  "paid": `<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>`,
  "trending_up": `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>`,
  "handshake": `<path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3.15a1.575 1.575 0 0 0 3.15 0v-3.15Zm7.5 0a1.575 1.575 0 1 0-3.15 0v3.15a1.575 1.575 0 0 0 3.15 0v-3.15ZM15 12.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9.75 3h13.5a2.25 2.25 0 0 1 2.25 2.25v.75a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18.75V18a2.25 2.25 0 0 1 2.25-2.25Z"/>`,
  "badge": `<path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"/>`,
  "group": `<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>`,
  "settings_cog": `<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>`
};
var AdminLayoutComponent = class _AdminLayoutComponent {
  constructor(auth, api, router, elRef, sanitizer, idleTimeout, appSettings) {
    this.auth = auth;
    this.api = api;
    this.router = router;
    this.elRef = elRef;
    this.sanitizer = sanitizer;
    this.idleTimeout = idleTimeout;
    this.appSettings = appSettings;
    this.isDarkMode = false;
    this.drawerOpen = true;
    this.sidenavOpened = true;
    this.searchQuery = "";
    this.showUserMenu = false;
    this.navItems = [];
    this.filteredNavItems = [];
    this.userName = "Admin";
    this.userInitial = "A";
    this.userRoleName = "Admin";
  }
  ngOnInit() {
    this.appSettings.load();
    this.idleTimeout.start();
    this.isDarkMode = localStorage.getItem("darkMode") === "true";
    this.applyBodyClass();
    this.filteredNavItems = [];
    const state = this.auth.snapshot;
    this.userName = state.fullName || "Admin";
    this.userInitial = this.userName.charAt(0).toUpperCase();
    this.userRoleName = state.roles.includes("SystemAdmin") ? "Super Admin" : state.roles[0] || "Admin";
    this.sub = this.auth.authState$.subscribe((s) => {
      this.buildNavItems(s.roles, s.privileges);
    });
    if (this.auth.privileges.length === 0 && this.auth.isAuthenticated) {
      this.api.getPrivileges().subscribe((res) => {
        if (res?.success && res.data) {
          this.auth.setPrivileges(res.data);
        }
      });
    }
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.idleTimeout.stop();
  }
  /** Close user dropdown when clicking outside */
  onDocumentClick(event) {
    if (this.showUserMenu) {
      const target = event.target;
      const userMenuEl = this.elRef.nativeElement.querySelector(".user-menu-container");
      if (userMenuEl && !userMenuEl.contains(target)) {
        this.showUserMenu = false;
      }
    }
  }
  getIconSvg(iconName) {
    const svg = ICON_SVG[iconName] || ICON_SVG["dashboard"];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  buildNavItems(roles, privileges) {
    const isSystemAdmin = roles.includes("SystemAdmin");
    if (isSystemAdmin) {
      this.navItems = [...ALL_NAV_ITEMS];
    } else if (privileges.length > 0) {
      const allowedUrls = new Set(privileges.map((p) => p.url));
      this.navItems = ALL_NAV_ITEMS.filter((item) => allowedUrls.has(item.route));
    } else {
      this.navItems = [];
    }
  }
  // Get unique ordered sections for the template
  get sections() {
    const seen = /* @__PURE__ */ new Set();
    const result = [];
    for (const item of this.navItems) {
      if (item.section && !seen.has(item.section)) {
        seen.add(item.section);
        result.push(item.section);
      }
    }
    return result;
  }
  getItemsForSection(section) {
    return this.navItems.filter((item) => item.section === section);
  }
  toggleDrawer() {
    this.sidenavOpened = !this.sidenavOpened;
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem("darkMode", String(this.isDarkMode));
    this.applyBodyClass();
  }
  onSearchChange() {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) {
      this.filteredNavItems = [];
      return;
    }
    this.filteredNavItems = this.navItems.filter((item) => item.label.toLowerCase().includes(q) || (item.section || "").toLowerCase().includes(q));
  }
  clearSearch() {
    this.searchQuery = "";
    this.filteredNavItems = [];
  }
  logout() {
    this.idleTimeout.stop();
    this.auth.logout();
    this.router.navigate(["/auth/login"]);
  }
  applyBodyClass() {
    document.body.classList.toggle("dark-mode", this.isDarkMode);
    document.documentElement.classList.toggle("dark", this.isDarkMode);
  }
  static {
    this.\u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminLayoutComponent)(\u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(IdleTimeoutService), \u0275\u0275directiveInject(AppSettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AdminLayoutComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 58, vars: 34, consts: [[1, "layout-wrapper"], ["class", "fixed top-0 left-0 right-0 z-[60] bg-warning-600 text-white text-sm font-medium flex items-center justify-center gap-2 px-4 py-2", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "right-0", "z-50", "h-16", "bg-white/95", "dark:bg-surface-950/95", "border-b", "border-surface-100", "dark:border-surface-800/40/60", "backdrop-blur-md", "flex", "items-center", "px-4", "gap-2"], ["aria-label", "Toggle menu", 1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "text-surface-500", "dark:text-surface-400", "hover:bg-surface-100", "dark:hover:bg-surface-800", "hover:text-surface-900", "dark:hover:text-surface-100", "transition-all", "duration-150", "active:scale-95", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"], [1, "flex", "items-center", "gap-2.5"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-gradient-to-br", "from-brand-500", "to-brand-700", "text-white", "shadow-sm", "shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-[18px]", "h-[18px]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"], [1, "flex", "flex-col", "leading-none", "overflow-hidden"], [1, "text-[13px]", "font-bold", "text-surface-900", "dark:text-surface-100", "tracking-tight", "truncate"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-widest", "text-brand-500", "dark:text-brand-400", "mt-0.5"], [1, "flex-1"], [1, "flex", "items-center", "gap-1"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "text-surface-500", "dark:text-surface-400", "hover:bg-surface-100", "dark:hover:bg-surface-800", "hover:text-surface-900", "dark:hover:text-surface-100", "transition-all", "duration-150", "active:scale-95", 3, "click"], ["class", "w-[18px] h-[18px]", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "relative"], ["aria-label", "Notifications", 1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "text-surface-500", "dark:text-surface-400", "hover:bg-surface-100", "dark:hover:bg-surface-800", "hover:text-surface-900", "dark:hover:text-surface-100", "transition-all", "duration-150", "active:scale-95"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "w-[18px]", "h-[18px]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"], [1, "absolute", "top-1.5", "right-1.5", "h-2", "w-2", "rounded-full", "bg-brand-500", "ring-2", "ring-white", "dark:ring-surface-950"], [1, "h-5", "w-px", "bg-surface-200", "dark:bg-surface-700", "mx-1"], [1, "relative", "user-menu-container"], [1, "flex", "items-center", "gap-2.5", "rounded-xl", "px-2.5", "py-1.5", "transition-all", "duration-150", "hover:bg-surface-100", "dark:hover:bg-surface-800", "active:scale-95", 3, "click"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-gradient-to-br", "from-brand-400", "to-brand-600", "text-xs", "font-bold", "text-white", "shadow-sm", "shrink-0"], [1, "hidden", "sm:flex", "flex-col", "items-start"], [1, "text-[13px]", "font-semibold", "text-surface-800", "dark:text-surface-200", "leading-tight"], [1, "text-[10px]", "text-surface-400", "dark:text-surface-500", "leading-tight"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "hidden", "sm:block", "h-3.5", "w-3.5", "text-surface-400", "ml-0.5", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 8.25l-7.5 7.5-7.5-7.5"], ["class", "absolute right-0 top-full mt-2 w-56 rounded-2xl border border-surface-200 dark:border-surface-700/50/50 bg-white dark:bg-surface-900 py-1.5 shadow-xl shadow-surface-900/10 dark:shadow-black/40 animate-fade-in z-50", 4, "ngIf"], ["class", "fixed inset-0 z-30 bg-black/50 backdrop-blur-xs lg:hidden transition-opacity", 3, "hidden", "click", 4, "ngIf"], [1, "fixed", "top-16", "bottom-0", "left-0", "z-40", "bg-white", "dark:bg-surface-950", "border-r", "border-surface-100", "dark:border-surface-800/40/40", "flex", "flex-col", "transition-all", "duration-300", "ease-in-out", "overflow-hidden", "shadow-sm", "dark:shadow-none", 3, "ngClass"], ["class", "px-3 pt-3 pb-1 flex-shrink-0", 4, "ngIf"], ["class", "px-2 py-1 border-b border-surface-100 dark:border-surface-800/40", 4, "ngIf"], ["class", "flex items-center gap-2 px-5 py-4 text-sm text-surface-400", 4, "ngIf"], [1, "flex", "flex-col", "flex-1", "overflow-y-auto", "overflow-x-hidden", "py-2"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active-link", 1, "nav-link", "flex", "items-center", "gap-2.5", "px-3", "py-2.5", "mx-1", "my-0.5", "rounded-xl", "text-[13px]", "font-medium", "text-surface-600", "dark:text-surface-500", "hover:bg-surface-50", "dark:hover:bg-surface-900", "hover:text-surface-900", "dark:hover:text-surface-100", "transition-all", "duration-150", "relative"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-[18px]", "h-[18px]", "flex-shrink-0", 3, "innerHTML"], ["class", "truncate", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "border-t", "border-surface-100", "dark:border-surface-800/40", "mt-2", "pt-2", "pb-2"], [1, "flex", "items-center", "gap-2.5", "px-3", "py-2.5", "mx-1", "rounded-xl", "text-[13px]", "font-medium", "text-danger-600", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition-all", "duration-150", "cursor-pointer", 3, "click", "title"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "w-[18px]", "h-[18px]", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"], [4, "ngIf"], [1, "pt-16", "transition-all", "duration-300", "ease-in-out", "min-h-screen", "bg-surface-50", "dark:bg-surface-900", 3, "ngClass"], [1, "p-6", "max-w-[1440px]", "mx-auto"], ["class", "fixed inset-0 z-[99999] bg-black/60 backdrop-blur-sm flex items-center justify-center", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "right-0", "z-[60]", "bg-warning-600", "text-white", "text-sm", "font-medium", "flex", "items-center", "justify-center", "gap-2", "px-4", "py-2"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"], [1, "absolute", "right-0", "top-full", "mt-2", "w-56", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700/50/50", "bg-white", "dark:bg-surface-900", "py-1.5", "shadow-xl", "shadow-surface-900/10", "dark:shadow-black/40", "animate-fade-in", "z-50"], [1, "flex", "items-center", "gap-3", "px-4", "py-3"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-gradient-to-br", "from-brand-400", "to-brand-600", "text-sm", "font-bold", "text-white", "shadow-sm", "shrink-0"], [1, "overflow-hidden"], [1, "text-[13px]", "font-semibold", "text-surface-900", "dark:text-surface-100", "truncate"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "truncate"], [1, "mx-3", "my-1", "border-t", "border-surface-100", "dark:border-surface-700/50"], [1, "flex", "w-full", "items-center", "gap-3", "px-4", "py-2", "text-[13px]", "text-surface-700", "dark:text-surface-300", "transition-colors", "hover:bg-surface-50", "dark:hover:bg-surface-800/60", "cursor-pointer"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"], [1, "flex", "w-full", "items-center", "gap-3", "px-4", "py-2", "text-[13px]", "text-danger-600", "dark:text-danger-400", "transition-colors", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "h-4", "w-4"], [1, "fixed", "inset-0", "z-30", "bg-black/50", "backdrop-blur-xs", "lg:hidden", "transition-opacity", 3, "click"], [1, "px-3", "pt-3", "pb-1", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"], ["type", "text", "placeholder", "Search pages...  Ctrl+K", "autocomplete", "off", 1, "w-full", "bg-surface-50", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800/40/60", "rounded-xl", "pl-9", "pr-8", "py-2", "text-sm", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-400/50", "transition", 3, "ngModelChange", "ngModel"], ["aria-label", "Clear search", "class", "absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-surface-400 hover:text-surface-600 dark:hover:text-surface-300", 3, "click", 4, "ngIf"], ["aria-label", "Clear search", 1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "p-0.5", "rounded", "text-surface-400", "hover:text-surface-600", "dark:hover:text-surface-300", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18 18 6M6 6l12 12"], [1, "px-2", "py-1", "border-b", "border-surface-100", "dark:border-surface-800/40"], ["class", "flex items-center gap-2.5 px-3 py-2 mx-1 my-0.5 rounded-xl text-[13px] font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-900 hover:text-surface-900 dark:hover:text-surface-100 transition-all duration-150 cursor-pointer", "routerLinkActive", "!bg-brand-50 !dark:bg-brand-900/20 !text-brand-700 !dark:text-brand-400", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "!bg-brand-50 !dark:bg-brand-900/20 !text-brand-700 !dark:text-brand-400", 1, "flex", "items-center", "gap-2.5", "px-3", "py-2", "mx-1", "my-0.5", "rounded-xl", "text-[13px]", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-900", "hover:text-surface-900", "dark:hover:text-surface-100", "transition-all", "duration-150", "cursor-pointer", 3, "click", "routerLink"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "w-[18px]", "h-[18px]", "flex-shrink-0", 3, "innerHTML"], [1, "truncate"], ["class", "ml-auto text-[10px] uppercase tracking-wider text-surface-400 dark:text-surface-500", 4, "ngIf"], [1, "ml-auto", "text-[10px]", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500"], [1, "flex", "items-center", "gap-2", "px-5", "py-4", "text-sm", "text-surface-400"], ["class", "text-[10px] font-bold uppercase tracking-widest text-surface-400 dark:text-surface-600 px-3 pt-5 pb-1", 4, "ngIf"], ["class", "border-t border-surface-100 dark:border-surface-800/40 mx-3 my-2", 4, "ngIf"], ["class", "nav-link flex items-center gap-2.5 px-3 py-2.5 mx-1 my-0.5 rounded-xl text-[13px] font-medium text-surface-600 dark:text-surface-500 hover:bg-surface-50 dark:hover:bg-surface-900 hover:text-surface-900 dark:hover:text-surface-100 transition-all duration-150 relative", "routerLinkActive", "active-link", 3, "routerLink", "title", 4, "ngFor", "ngForOf"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-widest", "text-surface-400", "dark:text-surface-600", "px-3", "pt-5", "pb-1"], [1, "border-t", "border-surface-100", "dark:border-surface-800/40", "mx-3", "my-2"], ["routerLinkActive", "active-link", 1, "nav-link", "flex", "items-center", "gap-2.5", "px-3", "py-2.5", "mx-1", "my-0.5", "rounded-xl", "text-[13px]", "font-medium", "text-surface-600", "dark:text-surface-500", "hover:bg-surface-50", "dark:hover:bg-surface-900", "hover:text-surface-900", "dark:hover:text-surface-100", "transition-all", "duration-150", "relative", 3, "routerLink", "title"], [1, "fixed", "inset-0", "z-[99999]", "bg-black/60", "backdrop-blur-sm", "flex", "items-center", "justify-center"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "px-10", "py-8", "max-w-[420px]", "w-[90%]", "text-center", "shadow-dialog", "animate-slide-up"], [1, "mb-4"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "mx-auto", "text-warning-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "text-xl", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-2"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mb-6", "leading-relaxed"], [1, "text-danger-500", "text-lg"], [1, "flex", "gap-3", "justify-center"], [1, "px-5", "py-2.5", "bg-brand-600", "hover:bg-brand-700", "text-white", "text-sm", "font-semibold", "rounded-xl", "transition-all", "duration-150", "shadow-sm", "active:scale-95", 3, "click"], [1, "px-5", "py-2.5", "border", "border-surface-200", "dark:border-surface-600", "text-surface-700", "dark:text-surface-300", "text-sm", "font-semibold", "rounded-xl", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition-all", "duration-150", "active:scale-95", 3, "click"]], template: function AdminLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AdminLayoutComponent_div_1_Template, 5, 1, "div", 1);
        \u0275\u0275elementStart(2, "header", 2)(3, "button", 3);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_3_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4);
        \u0275\u0275element(5, "path", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 8);
        \u0275\u0275element(9, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "div", 10)(11, "span", 11);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 12);
        \u0275\u0275text(14, "Management Portal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(15, "div", 13);
        \u0275\u0275elementStart(16, "div", 14)(17, "button", 15);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_17_listener() {
          return ctx.toggleDarkMode();
        });
        \u0275\u0275template(18, AdminLayoutComponent__svg_svg_18_Template, 2, 0, "svg", 16)(19, AdminLayoutComponent__svg_svg_19_Template, 2, 0, "svg", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 17)(21, "button", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(22, "svg", 19);
        \u0275\u0275element(23, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(24, "span", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(25, "div", 22);
        \u0275\u0275elementStart(26, "div", 23)(27, "button", 24);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_27_listener() {
          return ctx.showUserMenu = !ctx.showUserMenu;
        });
        \u0275\u0275elementStart(28, "div", 25);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 26)(31, "span", 27);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 28);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(35, "svg", 29);
        \u0275\u0275element(36, "path", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(37, AdminLayoutComponent_div_37_Template, 19, 3, "div", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(38, AdminLayoutComponent_div_38_Template, 1, 2, "div", 32);
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(39, "aside", 33);
        \u0275\u0275template(40, AdminLayoutComponent_div_40_Template, 6, 2, "div", 34)(41, AdminLayoutComponent_div_41_Template, 2, 1, "div", 35)(42, AdminLayoutComponent_div_42_Template, 4, 0, "div", 36);
        \u0275\u0275elementStart(43, "nav", 37)(44, "a", 38);
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(45, "svg", 39);
        \u0275\u0275template(46, AdminLayoutComponent_span_46_Template, 2, 0, "span", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275template(47, AdminLayoutComponent_ng_container_47_Template, 4, 3, "ng-container", 41);
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(48, "div", 13);
        \u0275\u0275elementStart(49, "div", 42)(50, "a", 43);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_50_listener() {
          return ctx.logout();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(51, "svg", 44);
        \u0275\u0275element(52, "path", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275template(53, AdminLayoutComponent_span_53_Template, 2, 0, "span", 46);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(54, "main", 47)(55, "div", 48);
        \u0275\u0275element(56, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(57, AdminLayoutComponent_div_57_Template, 17, 1, "div", 49);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("dark", ctx.isDarkMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.appSettings.maintenanceMode);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.appSettings.companyName || "RemitAdmin");
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-label", ctx.isDarkMode ? "Switch to light mode" : "Switch to dark mode");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isDarkMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isDarkMode);
        \u0275\u0275advance(8);
        \u0275\u0275attribute("aria-label", "Open account menu for " + ctx.userName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.userInitial, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userRoleName);
        \u0275\u0275advance();
        \u0275\u0275classProp("rotate-180", ctx.showUserMenu);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showUserMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sidenavOpened);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c0, ctx.sidenavOpened, !ctx.sidenavOpened));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sidenavOpened);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sidenavOpened && ctx.searchQuery && ctx.filteredNavItems.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sidenavOpened && ctx.searchQuery && ctx.filteredNavItems.length === 0);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.searchQuery ? "none" : "");
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", ctx.getIconSvg("dashboard"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sidenavOpened);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.sections);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", !ctx.sidenavOpened ? "Sign Out" : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.sidenavOpened);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c1, ctx.sidenavOpened, !ctx.sidenavOpened));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.idleTimeout.showWarning);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  font-family: "Inter", sans-serif;\n}\n.nav-link.active-link[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-weight: 600;\n}\n.nav-link.active-link[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #2563eb;\n  border-radius: 0 3px 3px 0;\n}\n.dark[_nghost-%COMP%]   .nav-link.active-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .nav-link.active-link[_ngcontent-%COMP%], \n.dark[_ngcontent-%COMP%]   .nav-link.active-link[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.15);\n  color: #bfdbfe;\n}\n.dark[_nghost-%COMP%]   .nav-link.active-link[_ngcontent-%COMP%]::before, .dark   [_nghost-%COMP%]   .nav-link.active-link[_ngcontent-%COMP%]::before, \n.dark[_ngcontent-%COMP%]   .nav-link.active-link[_ngcontent-%COMP%]::before {\n  background: #93c5fd;\n}\n.layout-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.layout-container[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 56px;\n}\n.app-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  height: 56px;\n  background: #ffffff !important;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 0 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  color: #111827 !important;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n  margin-right: 4px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: #1a56db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  letter-spacing: -0.3px;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.toolbar-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  color: #111827 !important;\n}\n.toolbar-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.user-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px !important;\n  border-radius: 8px !important;\n  color: #111827 !important;\n  height: 40px;\n}\n.user-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.user-chevron[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #9ca3af;\n}\n.menu-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.menu-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.menu-user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-user-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.logout-item[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.logout-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.app-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  background: #ffffff !important;\n  border-right: 1px solid #e5e7eb !important;\n  display: flex;\n  flex-direction: column;\n}\n.nav-search[_ngcontent-%COMP%] {\n  padding: 10px 12px 0;\n}\n.nav-search-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nav-search-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav-search-field[_ngcontent-%COMP%]   .mdc-notched-outline__leading[_ngcontent-%COMP%], \n.nav-search-field[_ngcontent-%COMP%]   .mdc-notched-outline__notch[_ngcontent-%COMP%], \n.nav-search-field[_ngcontent-%COMP%]   .mdc-notched-outline__trailing[_ngcontent-%COMP%] {\n  border-color: #e5e7eb !important;\n}\n.nav-search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.nav-search-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #9ca3af;\n}\n.search-results[_ngcontent-%COMP%] {\n  padding: 4px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-no-results[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n.search-no-results[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nav-search-section[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 10px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 8px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.nav-section[_ngcontent-%COMP%] {\n  padding: 18px 16px 6px 20px;\n}\n.nav-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #9ca3af;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 20px;\n  margin: 1px 10px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13.5px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.nav-item--active[_ngcontent-%COMP%] {\n  background: #ebf0ff !important;\n  color: #1a56db !important;\n}\n.nav-item--active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a56db !important;\n}\n.nav-item--active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #1a56db;\n  border-radius: 0 3px 3px 0;\n}\n.nav-item--sub[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n.nav-item--danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.nav-item--danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.nav-item--danger[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: color 0.15s;\n}\n.nav-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-bottom[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 8px;\n}\n.main-content[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: calc(100vh - 56px);\n  max-width: 1440px;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-toolbar[_ngcontent-%COMP%] {\n  background: #1e293b !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n.dark-mode[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .user-chevron[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .toolbar-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%] {\n  color: #f1f5f9 !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%] {\n  background: #111827 !important;\n  border-right-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #f9fafb;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%] {\n  background: rgba(26, 86, 219, 0.15) !important;\n  color: #93c5fd !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #93c5fd !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--danger[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.15);\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-bottom[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_ngcontent-%COMP%]   .search-no-results[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-search-section[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dark-mode[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  background: #0f172a !important;\n}\n@media (max-width: 768px) {\n  .brand-sub[_ngcontent-%COMP%], \n   .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.timeout-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 99999;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(4px);\n}\n.timeout-dialog[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 32px 40px;\n  max-width: 420px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n.timeout-dialog[_ngcontent-%COMP%]   .timeout-icon[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.timeout-dialog[_ngcontent-%COMP%]   .timeout-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #f59e0b;\n}\n.timeout-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n}\n.timeout-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.timeout-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 18px;\n}\n.timeout-dialog[_ngcontent-%COMP%]   .timeout-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.dark-mode[_ngcontent-%COMP%]   .timeout-dialog[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_ngcontent-%COMP%]   .timeout-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_ngcontent-%COMP%]   .timeout-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=admin-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-admin-layout", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule
    ], template: `<div class="layout-wrapper" [class.dark]="isDarkMode">

  <!-- \u2500\u2500 Maintenance Mode Banner (system.maintenanceMode = true) \u2500\u2500 -->
  <div *ngIf="appSettings.maintenanceMode"
       class="fixed top-0 left-0 right-0 z-[60] bg-warning-600 text-white text-sm font-medium flex items-center justify-center gap-2 px-4 py-2">
    <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
    </svg>
    <span>{{ appSettings.maintenanceMessage }}</span>
  </div>

  <!-- \u2500\u2500 Top Bar \u2500\u2500 -->
  <header class="fixed top-0 left-0 right-0 z-50 h-16 bg-white/95 dark:bg-surface-950/95 border-b border-surface-100 dark:border-surface-800/40/60 backdrop-blur-md flex items-center px-4 gap-2">

    <!-- Hamburger -->
    <button
      (click)="toggleDrawer()"
      class="flex h-9 w-9 items-center justify-center rounded-xl text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100 transition-all duration-150 active:scale-95"
      aria-label="Toggle menu">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
      </svg>
    </button>

    <!-- Brand -->
    <div class="flex items-center gap-2.5">
      <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm shrink-0">
        <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/>
        </svg>
      </div>
      <div class="flex flex-col leading-none overflow-hidden">
        <span class="text-[13px] font-bold text-surface-900 dark:text-surface-100 tracking-tight truncate">{{ appSettings.companyName || 'RemitAdmin' }}</span>
        <span class="text-[10px] font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400 mt-0.5">Management Portal</span>
      </div>
    </div>

    <!-- Spacer -->
    <div class="flex-1"></div>

    <!-- Right actions -->
    <div class="flex items-center gap-1">
      <!-- Dark mode toggle -->
      <button
        (click)="toggleDarkMode()"
        class="flex h-9 w-9 items-center justify-center rounded-xl text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100 transition-all duration-150 active:scale-95"
        [attr.aria-label]="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
        <!-- Sun icon -->
        <svg *ngIf="isDarkMode" class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
        </svg>
        <!-- Moon icon -->
        <svg *ngIf="!isDarkMode" class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
        </svg>
      </button>

      <!-- Notifications -->
      <div class="relative">
        <button
          class="flex h-9 w-9 items-center justify-center rounded-xl text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100 transition-all duration-150 active:scale-95"
          aria-label="Notifications">
          <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
          </svg>
          <!-- Badge -->
          <span class="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-brand-500 ring-2 ring-white dark:ring-surface-950"></span>
        </button>
      </div>

      <!-- Divider -->
      <div class="h-5 w-px bg-surface-200 dark:bg-surface-700 mx-1"></div>

      <!-- User menu -->
      <div class="relative user-menu-container">
        <button
          (click)="showUserMenu = !showUserMenu"
          [attr.aria-label]="'Open account menu for ' + userName"
          class="flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 transition-all duration-150 hover:bg-surface-100 dark:hover:bg-surface-800 active:scale-95">
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-xs font-bold text-white shadow-sm shrink-0">
            {{ userInitial }}
          </div>
          <div class="hidden sm:flex flex-col items-start">
            <span class="text-[13px] font-semibold text-surface-800 dark:text-surface-200 leading-tight">{{ userName }}</span>
            <span class="text-[10px] text-surface-400 dark:text-surface-500 leading-tight">{{ userRoleName }}</span>
          </div>
          <svg class="hidden sm:block h-3.5 w-3.5 text-surface-400 ml-0.5 transition-transform" [class.rotate-180]="showUserMenu" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
          </svg>
        </button>

        <!-- Dropdown -->
        <div
          *ngIf="showUserMenu"
          class="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-surface-200 dark:border-surface-700/50/50 bg-white dark:bg-surface-900 py-1.5 shadow-xl shadow-surface-900/10 dark:shadow-black/40 animate-fade-in z-50">
          <!-- User info -->
          <div class="flex items-center gap-3 px-4 py-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-white shadow-sm shrink-0">
              {{ userInitial }}
            </div>
            <div class="overflow-hidden">
              <div class="text-[13px] font-semibold text-surface-900 dark:text-surface-100 truncate">{{ userName }}</div>
              <div class="text-xs text-surface-500 dark:text-surface-400 truncate">{{ userRoleName }}</div>
            </div>
          </div>
          <div class="mx-3 my-1 border-t border-surface-100 dark:border-surface-700/50"></div>
          <!-- Menu items -->
          <a class="flex w-full items-center gap-3 px-4 py-2 text-[13px] text-surface-700 dark:text-surface-300 transition-colors hover:bg-surface-50 dark:hover:bg-surface-800/60 cursor-pointer">
            <svg class="h-4 w-4 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
            </svg>
            My Profile
          </a>
          <div class="mx-3 my-1 border-t border-surface-100 dark:border-surface-700/50"></div>
          <a
            (click)="logout(); showUserMenu = false"
            class="flex w-full items-center gap-3 px-4 py-2 text-[13px] text-danger-600 dark:text-danger-400 transition-colors hover:bg-danger-50 dark:hover:bg-danger-900/20 cursor-pointer">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/>
            </svg>
            Sign Out
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- \u2500\u2500 Mobile Backdrop \u2500\u2500 -->
  <div
    *ngIf="sidenavOpened"
    (click)="toggleDrawer()"
    class="fixed inset-0 z-30 bg-black/50 backdrop-blur-xs lg:hidden transition-opacity"
    [class.hidden]="!sidenavOpened">
  </div>

  <!-- \u2500\u2500 Sidebar \u2500\u2500 -->
  <aside
    class="fixed top-16 bottom-0 left-0 z-40 bg-white dark:bg-surface-950 border-r border-surface-100 dark:border-surface-800/40/40 flex flex-col transition-all duration-300 ease-in-out overflow-hidden shadow-sm dark:shadow-none"
    [ngClass]="{
      'w-64': sidenavOpened,
      'w-0 lg:w-16': !sidenavOpened
    }">

    <!-- Search Box (only when expanded) -->
    <div *ngIf="sidenavOpened" class="px-3 pt-3 pb-1 flex-shrink-0">
      <div class="relative">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
        </svg>
        <input
          type="text"
          [(ngModel)]="searchQuery"
          (ngModelChange)="onSearchChange()"
          placeholder="Search pages...  Ctrl+K"
          autocomplete="off"
          class="w-full bg-surface-50 dark:bg-surface-900 border border-surface-100 dark:border-surface-800/40/60 rounded-xl pl-9 pr-8 py-2 text-sm text-surface-900 dark:text-surface-100 placeholder-surface-400 dark:placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400/50 transition" />
        <button
          *ngIf="searchQuery"
          (click)="clearSearch()"
          aria-label="Clear search"
          class="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-surface-400 hover:text-surface-600 dark:hover:text-surface-300">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Search Results -->
    <div *ngIf="sidenavOpened && searchQuery && filteredNavItems.length > 0" class="px-2 py-1 border-b border-surface-100 dark:border-surface-800/40">
      <a *ngFor="let item of filteredNavItems"
        class="flex items-center gap-2.5 px-3 py-2 mx-1 my-0.5 rounded-xl text-[13px] font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-900 hover:text-surface-900 dark:hover:text-surface-100 transition-all duration-150 cursor-pointer"
        [routerLink]="item.route" routerLinkActive="!bg-brand-50 !dark:bg-brand-900/20 !text-brand-700 !dark:text-brand-400"
        (click)="clearSearch()">
        <svg class="w-[18px] h-[18px] flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24" [innerHTML]="getIconSvg(item.icon)"></svg>
        <span class="truncate">{{ item.label }}</span>
        <span *ngIf="item.section" class="ml-auto text-[10px] uppercase tracking-wider text-surface-400 dark:text-surface-500">{{ item.section }}</span>
      </a>
    </div>
    <div *ngIf="sidenavOpened && searchQuery && filteredNavItems.length === 0" class="flex items-center gap-2 px-5 py-4 text-sm text-surface-400">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
      </svg>
      No pages found
    </div>

    <!-- Dynamic Navigation -->
    <nav class="flex flex-col flex-1 overflow-y-auto overflow-x-hidden py-2" [style.display]="searchQuery ? 'none' : ''">

      <!-- Dashboard (always first, no section) -->
      <a class="nav-link flex items-center gap-2.5 px-3 py-2.5 mx-1 my-0.5 rounded-xl text-[13px] font-medium text-surface-600 dark:text-surface-500 hover:bg-surface-50 dark:hover:bg-surface-900 hover:text-surface-900 dark:hover:text-surface-100 transition-all duration-150 relative"
        routerLink="/admin/dashboard" routerLinkActive="active-link">
        <svg class="w-[18px] h-[18px] flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" [innerHTML]="getIconSvg('dashboard')"></svg>
        <span *ngIf="sidenavOpened" class="truncate">Dashboard</span>
      </a>

      <!-- Dynamic sections based on user privileges -->
      <ng-container *ngFor="let section of sections">
        <p *ngIf="sidenavOpened" class="text-[10px] font-bold uppercase tracking-widest text-surface-400 dark:text-surface-600 px-3 pt-5 pb-1">
          {{ section }}
        </p>
        <div *ngIf="!sidenavOpened" class="border-t border-surface-100 dark:border-surface-800/40 mx-3 my-2"></div>
        <a *ngFor="let item of getItemsForSection(section)"
          class="nav-link flex items-center gap-2.5 px-3 py-2.5 mx-1 my-0.5 rounded-xl text-[13px] font-medium text-surface-600 dark:text-surface-500 hover:bg-surface-50 dark:hover:bg-surface-900 hover:text-surface-900 dark:hover:text-surface-100 transition-all duration-150 relative"
          [routerLink]="item.route" routerLinkActive="active-link"
          [title]="!sidenavOpened ? item.label : ''">
          <svg class="w-[18px] h-[18px] flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" [innerHTML]="getIconSvg(item.icon)"></svg>
          <span *ngIf="sidenavOpened" class="truncate">{{ item.label }}</span>
        </a>
      </ng-container>

      <!-- Spacer -->
      <div class="flex-1"></div>

      <!-- Sign Out -->
      <div class="border-t border-surface-100 dark:border-surface-800/40 mt-2 pt-2 pb-2">
        <a
          (click)="logout()"
          class="flex items-center gap-2.5 px-3 py-2.5 mx-1 rounded-xl text-[13px] font-medium text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition-all duration-150 cursor-pointer"
          [title]="!sidenavOpened ? 'Sign Out' : ''">
          <svg class="w-[18px] h-[18px] flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/>
          </svg>
          <span *ngIf="sidenavOpened">Sign Out</span>
        </a>
      </div>
    </nav>
  </aside>

  <!-- \u2500\u2500 Main Content \u2500\u2500 -->
  <main
    class="pt-16 transition-all duration-300 ease-in-out min-h-screen bg-surface-50 dark:bg-surface-900"
    [ngClass]="{
      'lg:ml-64': sidenavOpened,
      'lg:ml-16': !sidenavOpened
    }">
    <div class="p-6 max-w-[1440px] mx-auto">
      <router-outlet></router-outlet>
    </div>
  </main>

  <!-- \u2500\u2500 Session Timeout Warning Overlay \u2500\u2500 -->
  <div
    *ngIf="idleTimeout.showWarning"
    class="fixed inset-0 z-[99999] bg-black/60 backdrop-blur-sm flex items-center justify-center">
    <div class="bg-white dark:bg-surface-800 rounded-2xl px-10 py-8 max-w-[420px] w-[90%] text-center shadow-dialog animate-slide-up">
      <!-- Timer icon -->
      <div class="mb-4">
        <svg class="w-12 h-12 mx-auto text-warning-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">Session Timeout Warning</h3>
      <p class="text-sm text-surface-500 dark:text-surface-400 mb-6 leading-relaxed">
        Your session will expire in
        <strong class="text-danger-500 text-lg">{{ idleTimeout.remainingSeconds }}</strong>
        seconds due to inactivity.
      </p>
      <div class="flex gap-3 justify-center">
        <button
          (click)="idleTimeout.extendSession()"
          class="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-all duration-150 shadow-sm active:scale-95">
          Stay Logged In
        </button>
        <button
          (click)="logout()"
          class="px-5 py-2.5 border border-surface-200 dark:border-surface-600 text-surface-700 dark:text-surface-300 text-sm font-semibold rounded-xl hover:bg-surface-50 dark:hover:bg-surface-700 transition-all duration-150 active:scale-95">
          Sign Out
        </button>
      </div>
    </div>
  </div>

</div>
`, styles: ['/* src/app/layouts/admin-layout/admin-layout.component.scss */\n:host {\n  display: block;\n  height: 100vh;\n  font-family: "Inter", sans-serif;\n}\n.nav-link.active-link {\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-weight: 600;\n}\n.nav-link.active-link::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #2563eb;\n  border-radius: 0 3px 3px 0;\n}\n:host-context(.dark) .nav-link.active-link,\n.dark .nav-link.active-link {\n  background: rgba(37, 99, 235, 0.15);\n  color: #bfdbfe;\n}\n:host-context(.dark) .nav-link.active-link::before,\n.dark .nav-link.active-link::before {\n  background: #93c5fd;\n}\n.layout-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.layout-container {\n  flex: 1;\n  margin-top: 56px;\n}\n.app-toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  height: 56px;\n  background: #ffffff !important;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 0 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  color: #111827 !important;\n}\n.menu-btn {\n  color: #6b7280 !important;\n  margin-right: 4px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-logo {\n  width: 34px;\n  height: 34px;\n  background: #1a56db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-logo mat-icon {\n  color: #fff;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.brand-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.brand-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  letter-spacing: -0.3px;\n}\n.brand-sub {\n  font-size: 10px;\n  color: #9ca3af;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.spacer {\n  flex: 1;\n}\n.toolbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.toolbar-btn {\n  color: #6b7280 !important;\n}\n.toolbar-btn:hover {\n  background: #f8fafc !important;\n  color: #111827 !important;\n}\n.toolbar-divider {\n  width: 1px;\n  height: 24px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.user-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px !important;\n  border-radius: 8px !important;\n  color: #111827 !important;\n  height: 40px;\n}\n.user-btn:hover {\n  background: #f8fafc !important;\n}\n.user-avatar {\n  width: 30px;\n  height: 30px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.user-chevron {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #9ca3af;\n}\n.menu-user-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.menu-avatar {\n  width: 38px;\n  height: 38px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.menu-user-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-user-role {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.logout-item {\n  color: #dc2626 !important;\n}\n.logout-item mat-icon {\n  color: #dc2626 !important;\n}\n.app-sidenav {\n  width: 250px;\n  background: #ffffff !important;\n  border-right: 1px solid #e5e7eb !important;\n  display: flex;\n  flex-direction: column;\n}\n.nav-search {\n  padding: 10px 12px 0;\n}\n.nav-search-field {\n  width: 100%;\n}\n.nav-search-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.nav-search-field .mdc-notched-outline__leading,\n.nav-search-field .mdc-notched-outline__notch,\n.nav-search-field .mdc-notched-outline__trailing {\n  border-color: #e5e7eb !important;\n}\n.nav-search-field input {\n  font-size: 13px;\n}\n.nav-search-field mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #9ca3af;\n}\n.search-results {\n  padding: 4px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-no-results {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n.search-no-results mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nav-search-section {\n  margin-left: auto;\n  font-size: 10px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.nav-list {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 8px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.nav-section {\n  padding: 18px 16px 6px 20px;\n}\n.nav-section-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #9ca3af;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 20px;\n  margin: 1px 10px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13.5px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  position: relative;\n}\n.nav-item:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item:hover .nav-icon mat-icon {\n  color: #111827;\n}\n.nav-item--active {\n  background: #ebf0ff !important;\n  color: #1a56db !important;\n}\n.nav-item--active .nav-icon mat-icon {\n  color: #1a56db !important;\n}\n.nav-item--active::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #1a56db;\n  border-radius: 0 3px 3px 0;\n}\n.nav-item--sub {\n  padding-left: 24px;\n}\n.nav-item--danger {\n  color: #dc2626;\n}\n.nav-item--danger:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.nav-item--danger .nav-icon mat-icon {\n  color: #dc2626 !important;\n}\n.nav-icon {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: color 0.15s;\n}\n.nav-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-spacer {\n  flex: 1;\n}\n.nav-bottom {\n  padding: 8px 0;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 8px;\n}\n.main-content {\n  background: #f8fafc !important;\n}\n.content-wrapper {\n  padding: 24px;\n  min-height: calc(100vh - 56px);\n  max-width: 1440px;\n}\n.dark-mode .app-toolbar {\n  background: #1e293b !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode .brand-name,\n.dark-mode .user-name {\n  color: #f1f5f9;\n}\n.dark-mode .brand-sub,\n.dark-mode .user-chevron {\n  color: #64748b;\n}\n.dark-mode .toolbar-btn {\n  color: #94a3b8 !important;\n}\n.dark-mode .toolbar-divider {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode .user-btn {\n  color: #f1f5f9 !important;\n}\n.dark-mode .user-btn:hover {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode .app-sidenav {\n  background: #111827 !important;\n  border-right-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode .nav-section-label {\n  color: #6b7280;\n}\n.dark-mode .nav-item {\n  color: #d1d5db;\n}\n.dark-mode .nav-item:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #f9fafb;\n}\n.dark-mode .nav-item--active {\n  background: rgba(26, 86, 219, 0.15) !important;\n  color: #93c5fd !important;\n}\n.dark-mode .nav-item--active .nav-icon mat-icon {\n  color: #93c5fd !important;\n}\n.dark-mode .nav-item--danger {\n  color: #fca5a5;\n}\n.dark-mode .nav-item--danger:hover {\n  background: rgba(220, 38, 38, 0.15);\n}\n.dark-mode .nav-icon mat-icon {\n  color: #9ca3af;\n}\n.dark-mode .nav-bottom {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode .search-results {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode .search-no-results {\n  color: #6b7280;\n}\n.dark-mode .nav-search-section {\n  color: #6b7280;\n}\n.dark-mode .main-content {\n  background: #0f172a !important;\n}\n@media (max-width: 768px) {\n  .brand-sub,\n  .user-name {\n    display: none;\n  }\n  .content-wrapper {\n    padding: 16px;\n  }\n}\n.timeout-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 99999;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(4px);\n}\n.timeout-dialog {\n  background: #fff;\n  border-radius: 16px;\n  padding: 32px 40px;\n  max-width: 420px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: slideUp 0.3s ease;\n}\n.timeout-dialog .timeout-icon {\n  margin-bottom: 16px;\n}\n.timeout-dialog .timeout-icon mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #f59e0b;\n}\n.timeout-dialog h3 {\n  margin: 0 0 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n}\n.timeout-dialog p {\n  margin: 0 0 24px;\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.timeout-dialog p strong {\n  color: #ef4444;\n  font-size: 18px;\n}\n.timeout-dialog .timeout-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.dark-mode .timeout-dialog {\n  background: #1e293b;\n}\n.dark-mode .timeout-dialog h3 {\n  color: #e2e8f0;\n}\n.dark-mode .timeout-dialog p {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=admin-layout.component.css.map */\n'] }]
  }], () => [{ type: AuthStateService }, { type: ApiService }, { type: Router }, { type: ElementRef }, { type: DomSanitizer }, { type: IdleTimeoutService }, { type: AppSettingsService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/layouts/admin-layout/admin-layout.component.ts", lineNumber: 81 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-AP2RHE67.js.map
