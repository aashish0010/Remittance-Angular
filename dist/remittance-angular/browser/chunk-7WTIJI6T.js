import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
  MatSidenavModule,
  MatToolbar,
  MatToolbarModule
} from "./chunk-3J3DVNWG.js";
import {
  MatListModule
} from "./chunk-O5ZS5GGX.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-A5422WZE.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-ZMWNDU6W.js";
import "./chunk-ZVT67ZIY.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-RTKH6WOT.js";
import "./chunk-57Y34HEX.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-KDE7SEZO.js";
import "./chunk-4DSKJDZB.js";
import {
  MatFormField,
  MatPrefix,
  MatSuffix
} from "./chunk-E4MJAOS2.js";
import {
  ApiService
} from "./chunk-VYOOPMBG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgModel
} from "./chunk-AVOWLGE4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-IRXVSIUW.js";
import {
  AuthStateService
} from "./chunk-MKKXXFYO.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-DBW47J2B.js";
import {
  Component,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J3ROLHMS.js";

// src/app/core/services/idle-timeout.service.ts
var IdleTimeoutService = class _IdleTimeoutService {
  get showWarning() {
    return this._showWarning;
  }
  get remainingSeconds() {
    return this._remainingSeconds;
  }
  constructor(auth, router, zone) {
    this.auth = auth;
    this.router = router;
    this.zone = zone;
    this.IDLE_TIMEOUT_MS = 15 * 60 * 1e3;
    this.WARNING_AT_MS = 12 * 60 * 1e3;
    this.destroy$ = new Subject();
    this._showWarning = false;
    this._remainingSeconds = 0;
  }
  /**
   * Call this once from the root layout (admin/agent/customer) after login.
   */
  start() {
    this.stop();
    this.zone.runOutsideAngular(() => {
      const activity$ = merge(fromEvent(document, "mousemove"), fromEvent(document, "mousedown"), fromEvent(document, "keydown"), fromEvent(document, "touchstart"), fromEvent(document, "scroll"));
      this.timerSub = activity$.pipe(tap(() => this.dismissWarning()), switchMap(() => timer(this.WARNING_AT_MS)), takeUntil(this.destroy$)).subscribe(() => {
        this.zone.run(() => this.showTimeoutWarning());
      });
      this.warningSub = timer(this.WARNING_AT_MS).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.zone.run(() => this.showTimeoutWarning());
      });
    });
  }
  showTimeoutWarning() {
    this._showWarning = true;
    this._remainingSeconds = Math.floor((this.IDLE_TIMEOUT_MS - this.WARNING_AT_MS) / 1e3);
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
      return new (__ngFactoryType__ || _IdleTimeoutService)(\u0275\u0275inject(AuthStateService), \u0275\u0275inject(Router), \u0275\u0275inject(NgZone));
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
  }], () => [{ type: AuthStateService }, { type: Router }, { type: NgZone }], null);
})();

// src/app/layouts/admin-layout/admin-layout.component.ts
function AdminLayoutComponent_button_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function AdminLayoutComponent_button_65_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AdminLayoutComponent_div_66_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.section);
  }
}
function AdminLayoutComponent_div_66_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_66_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275elementStart(1, "span", 37)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminLayoutComponent_div_66_a_1_span_6_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r5.route);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.section);
  }
}
function AdminLayoutComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275template(1, AdminLayoutComponent_div_66_a_1_Template, 7, 4, "a", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredNavItems);
  }
}
function AdminLayoutComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "mat-icon");
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No pages found");
    \u0275\u0275elementEnd()();
  }
}
function AdminLayoutComponent_ng_container_75_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 56)(1, "span", 37)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r6.route);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.label);
  }
}
function AdminLayoutComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 53)(2, "span", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AdminLayoutComponent_ng_container_75_a_4_Template, 6, 3, "a", 55);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const section_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(section_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getItemsForSection(section_r7));
  }
}
function AdminLayoutComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div", 59)(3, "mat-icon");
    \u0275\u0275text(4, "timer_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Session Timeout Warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Your session will expire in ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " seconds due to inactivity.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 60)(13, "button", 61);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_87_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.idleTimeout.extendSession());
    });
    \u0275\u0275text(14, " Stay Logged In ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 62);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_87_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(16, " Sign Out ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.idleTimeout.remainingSeconds);
  }
}
var ALL_NAV_ITEMS = [
  { label: "Dashboard", icon: "dashboard", route: "/admin/dashboard" },
  { label: "Agents", icon: "people_outline", route: "/admin/agents", section: "Agent Management" },
  { label: "Setup", icon: "tune", route: "/admin/accounting", section: "Agent Management" },
  { label: "Register", icon: "person_add_alt", route: "/admin/customer-register", section: "Customers" },
  { label: "Report", icon: "assessment", route: "/admin/customer-report", section: "Customers" },
  { label: "Receivers", icon: "contact_phone", route: "/admin/receivers", section: "Operations" },
  { label: "Exchange Rates", icon: "currency_exchange", route: "/admin/rates", section: "Operations" },
  { label: "Service Charges", icon: "payments", route: "/admin/commissions", section: "Operations" },
  { label: "Routing", icon: "alt_route", route: "/admin/routing", section: "Operations" },
  { label: "Transactions", icon: "receipt_long", route: "/admin/transactions", section: "Operations" },
  { label: "Setup", icon: "tune", route: "/admin/compliance-setup", section: "Compliance" },
  { label: "Alerts", icon: "security", route: "/admin/compliance", section: "Compliance" },
  { label: "Static Values", icon: "dataset", route: "/admin/static-values", section: "System" },
  { label: "Agent Statement", icon: "account_balance", route: "/admin/reports/agent-statement", section: "Reports" },
  { label: "Transaction Report", icon: "summarize", route: "/admin/reports/transactions", section: "Reports" },
  { label: "Commission Report", icon: "paid", route: "/admin/reports/commissions", section: "Reports" },
  { label: "Revenue Report", icon: "trending_up", route: "/admin/reports/revenue", section: "Reports" },
  { label: "Settlement Report", icon: "handshake", route: "/admin/reports/settlement", section: "Reports" },
  { label: "Roles", icon: "badge", route: "/admin/user-management/roles", section: "User Management" },
  { label: "Users", icon: "group", route: "/admin/user-management/users", section: "User Management" }
];
var AdminLayoutComponent = class _AdminLayoutComponent {
  constructor(auth, api, router, idleTimeout) {
    this.auth = auth;
    this.api = api;
    this.router = router;
    this.idleTimeout = idleTimeout;
    this.isDarkMode = false;
    this.drawerOpen = true;
    this.sidenavOpened = true;
    this.searchQuery = "";
    this.navItems = [];
    this.filteredNavItems = [];
    this.userName = "Admin";
    this.userInitial = "A";
    this.userRoleName = "Admin";
  }
  ngOnInit() {
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
  }
  static {
    this.\u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminLayoutComponent)(\u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(IdleTimeoutService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 88, vars: 19, consts: [["accountMenu", "matMenu"], ["sidenav", ""], [1, "layout-wrapper"], [1, "app-toolbar"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "menu-btn", 3, "click"], [1, "brand"], [1, "brand-logo"], [1, "brand-text"], [1, "brand-name"], [1, "brand-sub"], [1, "spacer"], [1, "toolbar-actions"], ["mat-icon-button", "", 1, "toolbar-btn", 3, "click", "matTooltip"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "toolbar-btn"], [1, "toolbar-divider"], ["mat-button", "", 1, "user-btn", 3, "matMenuTriggerFor"], [1, "user-avatar"], [1, "user-name"], [1, "user-chevron"], [1, "user-menu"], [1, "menu-user-info"], [1, "menu-avatar"], [1, "menu-user-name"], [1, "menu-user-role"], ["mat-menu-item", ""], ["mat-menu-item", "", 1, "logout-item", 3, "click"], [1, "layout-container"], ["mode", "side", 1, "app-sidenav", 3, "opened"], [1, "nav-search"], ["appearance", "outline", 1, "nav-search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search pages...", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["class", "search-results", 4, "ngIf"], ["class", "search-no-results", 4, "ngIf"], [1, "nav-list"], ["routerLink", "/admin/dashboard", "routerLinkActive", "nav-item--active", 1, "nav-item"], [1, "nav-icon"], [1, "nav-label"], [4, "ngFor", "ngForOf"], [1, "nav-spacer"], [1, "nav-bottom"], [1, "nav-item", "nav-item--danger", 2, "cursor", "pointer", 3, "click"], [1, "main-content"], [1, "content-wrapper"], ["class", "timeout-overlay", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "search-results"], ["class", "nav-item nav-item--sub", "routerLinkActive", "nav-item--active", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "nav-item--active", 1, "nav-item", "nav-item--sub", 3, "click", "routerLink"], ["class", "nav-search-section", 4, "ngIf"], [1, "nav-search-section"], [1, "search-no-results"], [1, "nav-section"], [1, "nav-section-label"], ["class", "nav-item nav-item--sub", "routerLinkActive", "nav-item--active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "nav-item--active", 1, "nav-item", "nav-item--sub", 3, "routerLink"], [1, "timeout-overlay"], [1, "timeout-dialog"], [1, "timeout-icon"], [1, "timeout-actions"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", 3, "click"]], template: function AdminLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "mat-toolbar", 3)(2, "button", 4);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleDrawer());
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "menu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "mat-icon");
        \u0275\u0275text(8, "currency_exchange");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
        \u0275\u0275text(11, "RemitAdmin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13, "Management Portal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(14, "span", 10);
        \u0275\u0275elementStart(15, "div", 11)(16, "button", 12);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleDarkMode());
        });
        \u0275\u0275elementStart(17, "mat-icon");
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "button", 13)(20, "mat-icon");
        \u0275\u0275text(21, "notifications_none");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(22, "div", 14);
        \u0275\u0275elementStart(23, "button", 15)(24, "div", 16);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 17);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-icon", 18);
        \u0275\u0275text(29, "expand_more");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "mat-menu", 19, 0)(32, "div", 20)(33, "div", 21);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div")(36, "div", 22);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 23);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(40, "mat-divider");
        \u0275\u0275elementStart(41, "button", 24)(42, "mat-icon");
        \u0275\u0275text(43, "person_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span");
        \u0275\u0275text(45, "My Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "button", 24)(47, "mat-icon");
        \u0275\u0275text(48, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span");
        \u0275\u0275text(50, "Settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(51, "mat-divider");
        \u0275\u0275elementStart(52, "button", 25);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_52_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275elementStart(53, "mat-icon");
        \u0275\u0275text(54, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span");
        \u0275\u0275text(56, "Sign Out");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "mat-sidenav-container", 26)(58, "mat-sidenav", 27, 1)(60, "div", 28)(61, "mat-form-field", 29)(62, "mat-icon", 30);
        \u0275\u0275text(63, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "input", 31);
        \u0275\u0275twoWayListener("ngModelChange", function AdminLayoutComponent_Template_input_ngModelChange_64_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function AdminLayoutComponent_Template_input_ngModelChange_64_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearchChange());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(65, AdminLayoutComponent_button_65_Template, 3, 0, "button", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(66, AdminLayoutComponent_div_66_Template, 2, 1, "div", 33)(67, AdminLayoutComponent_div_67_Template, 5, 0, "div", 34);
        \u0275\u0275elementStart(68, "nav", 35)(69, "a", 36)(70, "span", 37)(71, "mat-icon");
        \u0275\u0275text(72, "dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "span", 38);
        \u0275\u0275text(74, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(75, AdminLayoutComponent_ng_container_75_Template, 5, 2, "ng-container", 39);
        \u0275\u0275element(76, "div", 40);
        \u0275\u0275elementStart(77, "div", 41)(78, "a", 42);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_78_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275elementStart(79, "span", 37)(80, "mat-icon");
        \u0275\u0275text(81, "logout");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "span", 38);
        \u0275\u0275text(83, "Sign Out");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(84, "mat-sidenav-content", 43)(85, "div", 44);
        \u0275\u0275element(86, "router-outlet");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(87, AdminLayoutComponent_div_87_Template, 17, 1, "div", 45);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const accountMenu_r9 = \u0275\u0275reference(31);
        \u0275\u0275classProp("dark-mode", ctx.isDarkMode);
        \u0275\u0275advance(16);
        \u0275\u0275property("matTooltip", ctx.isDarkMode ? "Light mode" : "Dark mode");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isDarkMode ? "light_mode" : "dark_mode");
        \u0275\u0275advance(5);
        \u0275\u0275property("matMenuTriggerFor", accountMenu_r9);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userInitial);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.userInitial);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userRoleName);
        \u0275\u0275advance(19);
        \u0275\u0275property("opened", ctx.sidenavOpened);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchQuery && ctx.filteredNavItems.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchQuery && ctx.filteredNavItems.length === 0);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.searchQuery ? "none" : "");
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.sections);
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.idleTimeout.showWarning);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      RouterModule,
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatToolbarModule,
      MatToolbar,
      MatSidenavModule,
      MatSidenav,
      MatSidenavContainer,
      MatSidenavContent,
      MatListModule,
      MatDivider,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDividerModule,
      MatTooltipModule,
      MatTooltip,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  font-family: "Inter", sans-serif;\n}\n.layout-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.layout-container[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 56px;\n}\n.app-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  height: 56px;\n  background: #ffffff !important;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 0 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  color: #111827 !important;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n  margin-right: 4px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: #1a56db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  letter-spacing: -0.3px;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.toolbar-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  color: #111827 !important;\n}\n.toolbar-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.user-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px !important;\n  border-radius: 8px !important;\n  color: #111827 !important;\n  height: 40px;\n}\n.user-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.user-chevron[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #9ca3af;\n}\n.menu-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.menu-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.menu-user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-user-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.logout-item[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.logout-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.app-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  background: #ffffff !important;\n  border-right: 1px solid #e5e7eb !important;\n  display: flex;\n  flex-direction: column;\n}\n.nav-search[_ngcontent-%COMP%] {\n  padding: 10px 12px 0;\n}\n.nav-search-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nav-search-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav-search-field[_ngcontent-%COMP%]   .mdc-notched-outline__leading[_ngcontent-%COMP%], \n.nav-search-field[_ngcontent-%COMP%]   .mdc-notched-outline__notch[_ngcontent-%COMP%], \n.nav-search-field[_ngcontent-%COMP%]   .mdc-notched-outline__trailing[_ngcontent-%COMP%] {\n  border-color: #e5e7eb !important;\n}\n.nav-search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.nav-search-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #9ca3af;\n}\n.search-results[_ngcontent-%COMP%] {\n  padding: 4px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-no-results[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n.search-no-results[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nav-search-section[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 10px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 8px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.nav-section[_ngcontent-%COMP%] {\n  padding: 18px 16px 6px 20px;\n}\n.nav-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #9ca3af;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 20px;\n  margin: 1px 10px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13.5px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.nav-item--active[_ngcontent-%COMP%] {\n  background: #ebf0ff !important;\n  color: #1a56db !important;\n}\n.nav-item--active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a56db !important;\n}\n.nav-item--active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #1a56db;\n  border-radius: 0 3px 3px 0;\n}\n.nav-item--sub[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n.nav-item--danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.nav-item--danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.nav-item--danger[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: color 0.15s;\n}\n.nav-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-bottom[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 8px;\n}\n.main-content[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: calc(100vh - 56px);\n  max-width: 1440px;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-toolbar[_ngcontent-%COMP%] {\n  background: #1e293b !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n.dark-mode[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .user-chevron[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .toolbar-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%] {\n  color: #f1f5f9 !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%] {\n  background: #111827 !important;\n  border-right-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #f9fafb;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%] {\n  background: rgba(26, 86, 219, 0.15) !important;\n  color: #93c5fd !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #93c5fd !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--danger[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.15);\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-bottom[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_ngcontent-%COMP%]   .search-no-results[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-search-section[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dark-mode[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  background: #0f172a !important;\n}\n@media (max-width: 768px) {\n  .brand-sub[_ngcontent-%COMP%], \n   .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.timeout-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 99999;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(4px);\n}\n.timeout-dialog[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 32px 40px;\n  max-width: 420px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n.timeout-dialog[_ngcontent-%COMP%]   .timeout-icon[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.timeout-dialog[_ngcontent-%COMP%]   .timeout-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #f59e0b;\n}\n.timeout-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n}\n.timeout-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.timeout-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 18px;\n}\n.timeout-dialog[_ngcontent-%COMP%]   .timeout-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.dark-mode[_ngcontent-%COMP%]   .timeout-dialog[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_ngcontent-%COMP%]   .timeout-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_ngcontent-%COMP%]   .timeout-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=admin-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-admin-layout", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatDividerModule,
      MatTooltipModule,
      MatFormFieldModule,
      MatInputModule
    ], template: `<div class="layout-wrapper" [class.dark-mode]="isDarkMode">

  <!-- \u2500\u2500 Top Bar \u2500\u2500 -->
  <mat-toolbar class="app-toolbar">
    <button mat-icon-button class="menu-btn" (click)="toggleDrawer()" aria-label="Toggle menu">
      <mat-icon>menu</mat-icon>
    </button>

    <!-- Brand -->
    <div class="brand">
      <div class="brand-logo">
        <mat-icon>currency_exchange</mat-icon>
      </div>
      <div class="brand-text">
        <span class="brand-name">RemitAdmin</span>
        <span class="brand-sub">Management Portal</span>
      </div>
    </div>

    <span class="spacer"></span>

    <!-- Right actions -->
    <div class="toolbar-actions">
      <button mat-icon-button class="toolbar-btn" (click)="toggleDarkMode()"
        [matTooltip]="isDarkMode ? 'Light mode' : 'Dark mode'">
        <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>
      </button>

      <button mat-icon-button class="toolbar-btn" matTooltip="Notifications">
        <mat-icon>notifications_none</mat-icon>
      </button>

      <div class="toolbar-divider"></div>

      <button mat-button class="user-btn" [matMenuTriggerFor]="accountMenu">
        <div class="user-avatar">{{ userInitial }}</div>
        <span class="user-name">{{ userName }}</span>
        <mat-icon class="user-chevron">expand_more</mat-icon>
      </button>
    </div>

    <mat-menu #accountMenu="matMenu" class="user-menu">
      <div class="menu-user-info">
        <div class="menu-avatar">{{ userInitial }}</div>
        <div>
          <div class="menu-user-name">{{ userName }}</div>
          <div class="menu-user-role">{{ userRoleName }}</div>
        </div>
      </div>
      <mat-divider></mat-divider>
      <button mat-menu-item>
        <mat-icon>person_outline</mat-icon>
        <span>My Profile</span>
      </button>
      <button mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>Settings</span>
      </button>
      <mat-divider></mat-divider>
      <button mat-menu-item class="logout-item" (click)="logout()">
        <mat-icon>logout</mat-icon>
        <span>Sign Out</span>
      </button>
    </mat-menu>
  </mat-toolbar>

  <!-- \u2500\u2500 Sidenav Container \u2500\u2500 -->
  <mat-sidenav-container class="layout-container">

    <!-- \u2500\u2500 Sidenav \u2500\u2500 -->
    <mat-sidenav #sidenav mode="side" [opened]="sidenavOpened" class="app-sidenav">

      <!-- Search Box -->
      <div class="nav-search">
        <mat-form-field appearance="outline" class="nav-search-field">
          <mat-icon matPrefix>search</mat-icon>
          <input matInput [(ngModel)]="searchQuery" (ngModelChange)="onSearchChange()"
            placeholder="Search pages..." autocomplete="off" />
          <button *ngIf="searchQuery" mat-icon-button matSuffix (click)="clearSearch()">
            <mat-icon>close</mat-icon>
          </button>
        </mat-form-field>
      </div>

      <!-- Search Results -->
      <div *ngIf="searchQuery && filteredNavItems.length > 0" class="search-results">
        <a *ngFor="let item of filteredNavItems" class="nav-item nav-item--sub"
          [routerLink]="item.route" routerLinkActive="nav-item--active" (click)="clearSearch()">
          <span class="nav-icon"><mat-icon>{{ item.icon }}</mat-icon></span>
          <span class="nav-label">{{ item.label }}</span>
          <span *ngIf="item.section" class="nav-search-section">{{ item.section }}</span>
        </a>
      </div>
      <div *ngIf="searchQuery && filteredNavItems.length === 0" class="search-no-results">
        <mat-icon>search_off</mat-icon>
        <span>No pages found</span>
      </div>

      <!-- Dynamic Navigation -->
      <nav class="nav-list" [style.display]="searchQuery ? 'none' : ''">

        <!-- Dashboard (always first, no section) -->
        <a class="nav-item" routerLink="/admin/dashboard" routerLinkActive="nav-item--active">
          <span class="nav-icon"><mat-icon>dashboard</mat-icon></span>
          <span class="nav-label">Dashboard</span>
        </a>

        <!-- Dynamic sections based on user privileges -->
        <ng-container *ngFor="let section of sections">
          <div class="nav-section">
            <span class="nav-section-label">{{ section }}</span>
          </div>
          <a *ngFor="let item of getItemsForSection(section)"
            class="nav-item nav-item--sub"
            [routerLink]="item.route" routerLinkActive="nav-item--active">
            <span class="nav-icon"><mat-icon>{{ item.icon }}</mat-icon></span>
            <span class="nav-label">{{ item.label }}</span>
          </a>
        </ng-container>

        <div class="nav-spacer"></div>

        <div class="nav-bottom">
          <a class="nav-item nav-item--danger" (click)="logout()" style="cursor: pointer">
            <span class="nav-icon"><mat-icon>logout</mat-icon></span>
            <span class="nav-label">Sign Out</span>
          </a>
        </div>

      </nav>
    </mat-sidenav>

    <!-- \u2500\u2500 Main Content \u2500\u2500 -->
    <mat-sidenav-content class="main-content">
      <div class="content-wrapper">
        <router-outlet></router-outlet>
      </div>
    </mat-sidenav-content>

  </mat-sidenav-container>

  <!-- Session Timeout Warning Overlay -->
  <div class="timeout-overlay" *ngIf="idleTimeout.showWarning">
    <div class="timeout-dialog">
      <div class="timeout-icon">
        <mat-icon>timer_off</mat-icon>
      </div>
      <h3>Session Timeout Warning</h3>
      <p>Your session will expire in <strong>{{ idleTimeout.remainingSeconds }}</strong> seconds due to inactivity.</p>
      <div class="timeout-actions">
        <button mat-raised-button color="primary" (click)="idleTimeout.extendSession()">
          Stay Logged In
        </button>
        <button mat-stroked-button (click)="logout()">
          Sign Out
        </button>
      </div>
    </div>
  </div>

</div>
`, styles: ['/* src/app/layouts/admin-layout/admin-layout.component.scss */\n:host {\n  display: block;\n  height: 100vh;\n  font-family: "Inter", sans-serif;\n}\n.layout-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.layout-container {\n  flex: 1;\n  margin-top: 56px;\n}\n.app-toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  height: 56px;\n  background: #ffffff !important;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 0 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  color: #111827 !important;\n}\n.menu-btn {\n  color: #6b7280 !important;\n  margin-right: 4px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-logo {\n  width: 34px;\n  height: 34px;\n  background: #1a56db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-logo mat-icon {\n  color: #fff;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.brand-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.brand-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  letter-spacing: -0.3px;\n}\n.brand-sub {\n  font-size: 10px;\n  color: #9ca3af;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.spacer {\n  flex: 1;\n}\n.toolbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.toolbar-btn {\n  color: #6b7280 !important;\n}\n.toolbar-btn:hover {\n  background: #f8fafc !important;\n  color: #111827 !important;\n}\n.toolbar-divider {\n  width: 1px;\n  height: 24px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.user-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px !important;\n  border-radius: 8px !important;\n  color: #111827 !important;\n  height: 40px;\n}\n.user-btn:hover {\n  background: #f8fafc !important;\n}\n.user-avatar {\n  width: 30px;\n  height: 30px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.user-chevron {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #9ca3af;\n}\n.menu-user-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.menu-avatar {\n  width: 38px;\n  height: 38px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.menu-user-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-user-role {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.logout-item {\n  color: #dc2626 !important;\n}\n.logout-item mat-icon {\n  color: #dc2626 !important;\n}\n.app-sidenav {\n  width: 250px;\n  background: #ffffff !important;\n  border-right: 1px solid #e5e7eb !important;\n  display: flex;\n  flex-direction: column;\n}\n.nav-search {\n  padding: 10px 12px 0;\n}\n.nav-search-field {\n  width: 100%;\n}\n.nav-search-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.nav-search-field .mdc-notched-outline__leading,\n.nav-search-field .mdc-notched-outline__notch,\n.nav-search-field .mdc-notched-outline__trailing {\n  border-color: #e5e7eb !important;\n}\n.nav-search-field input {\n  font-size: 13px;\n}\n.nav-search-field mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #9ca3af;\n}\n.search-results {\n  padding: 4px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-no-results {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n.search-no-results mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nav-search-section {\n  margin-left: auto;\n  font-size: 10px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.nav-list {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 8px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.nav-section {\n  padding: 18px 16px 6px 20px;\n}\n.nav-section-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #9ca3af;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 20px;\n  margin: 1px 10px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13.5px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  position: relative;\n}\n.nav-item:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item:hover .nav-icon mat-icon {\n  color: #111827;\n}\n.nav-item--active {\n  background: #ebf0ff !important;\n  color: #1a56db !important;\n}\n.nav-item--active .nav-icon mat-icon {\n  color: #1a56db !important;\n}\n.nav-item--active::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #1a56db;\n  border-radius: 0 3px 3px 0;\n}\n.nav-item--sub {\n  padding-left: 24px;\n}\n.nav-item--danger {\n  color: #dc2626;\n}\n.nav-item--danger:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.nav-item--danger .nav-icon mat-icon {\n  color: #dc2626 !important;\n}\n.nav-icon {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: color 0.15s;\n}\n.nav-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-spacer {\n  flex: 1;\n}\n.nav-bottom {\n  padding: 8px 0;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 8px;\n}\n.main-content {\n  background: #f8fafc !important;\n}\n.content-wrapper {\n  padding: 24px;\n  min-height: calc(100vh - 56px);\n  max-width: 1440px;\n}\n.dark-mode .app-toolbar {\n  background: #1e293b !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode .brand-name,\n.dark-mode .user-name {\n  color: #f1f5f9;\n}\n.dark-mode .brand-sub,\n.dark-mode .user-chevron {\n  color: #64748b;\n}\n.dark-mode .toolbar-btn {\n  color: #94a3b8 !important;\n}\n.dark-mode .toolbar-divider {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode .user-btn {\n  color: #f1f5f9 !important;\n}\n.dark-mode .user-btn:hover {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode .app-sidenav {\n  background: #111827 !important;\n  border-right-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode .nav-section-label {\n  color: #6b7280;\n}\n.dark-mode .nav-item {\n  color: #d1d5db;\n}\n.dark-mode .nav-item:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #f9fafb;\n}\n.dark-mode .nav-item--active {\n  background: rgba(26, 86, 219, 0.15) !important;\n  color: #93c5fd !important;\n}\n.dark-mode .nav-item--active .nav-icon mat-icon {\n  color: #93c5fd !important;\n}\n.dark-mode .nav-item--danger {\n  color: #fca5a5;\n}\n.dark-mode .nav-item--danger:hover {\n  background: rgba(220, 38, 38, 0.15);\n}\n.dark-mode .nav-icon mat-icon {\n  color: #9ca3af;\n}\n.dark-mode .nav-bottom {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode .search-results {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode .search-no-results {\n  color: #6b7280;\n}\n.dark-mode .nav-search-section {\n  color: #6b7280;\n}\n.dark-mode .main-content {\n  background: #0f172a !important;\n}\n@media (max-width: 768px) {\n  .brand-sub,\n  .user-name {\n    display: none;\n  }\n  .content-wrapper {\n    padding: 16px;\n  }\n}\n.timeout-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 99999;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(4px);\n}\n.timeout-dialog {\n  background: #fff;\n  border-radius: 16px;\n  padding: 32px 40px;\n  max-width: 420px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: slideUp 0.3s ease;\n}\n.timeout-dialog .timeout-icon {\n  margin-bottom: 16px;\n}\n.timeout-dialog .timeout-icon mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #f59e0b;\n}\n.timeout-dialog h3 {\n  margin: 0 0 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n}\n.timeout-dialog p {\n  margin: 0 0 24px;\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.timeout-dialog p strong {\n  color: #ef4444;\n  font-size: 18px;\n}\n.timeout-dialog .timeout-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.dark-mode .timeout-dialog {\n  background: #1e293b;\n}\n.dark-mode .timeout-dialog h3 {\n  color: #e2e8f0;\n}\n.dark-mode .timeout-dialog p {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=admin-layout.component.css.map */\n'] }]
  }], () => [{ type: AuthStateService }, { type: ApiService }, { type: Router }, { type: IdleTimeoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/layouts/admin-layout/admin-layout.component.ts", lineNumber: 73 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-7WTIJI6T.js.map
