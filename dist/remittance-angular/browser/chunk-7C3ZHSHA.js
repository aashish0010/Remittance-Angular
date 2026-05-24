import {
  SignalRService
} from "./chunk-XYNHGWF5.js";
import {
  AppSettingsService
} from "./chunk-DUD7GDET.js";
import {
  AuthStateService
} from "./chunk-4HHFE2PJ.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-MLGMBAGQ.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-PBY7YOCP.js";
import {
  Component,
  HostListener,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FTA5WDSR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ZNC4SKHB.js";

// src/app/layouts/agent-layout/agent-layout.component.ts
function AgentLayoutComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function AgentLayoutComponent_ng_container_13_ng_container_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r5.route);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", item_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.label);
  }
}
function AgentLayoutComponent_ng_container_13_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AgentLayoutComponent_ng_container_13_ng_container_6_a_1_Template, 5, 3, "a", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const section_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getItemsForSection(section_r3));
  }
}
function AgentLayoutComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 44);
    \u0275\u0275listener("click", function AgentLayoutComponent_ng_container_13_Template_button_click_1_listener() {
      const section_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleSection(section_r3));
    });
    \u0275\u0275elementStart(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 46);
    \u0275\u0275element(5, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AgentLayoutComponent_ng_container_13_ng_container_6_Template, 2, 1, "ng-container", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const section_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", section_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", !ctx_r3.isSectionExpanded(section_r3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isSectionExpanded(section_r3));
  }
}
function AgentLayoutComponent__svg_svg_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 26);
    \u0275\u0275element(1, "path", 48);
    \u0275\u0275elementEnd();
  }
}
function AgentLayoutComponent__svg_svg_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 26);
    \u0275\u0275element(1, "path", 49);
    \u0275\u0275elementEnd();
  }
}
function AgentLayoutComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.unreadCount > 9 ? "9+" : ctx_r3.unreadCount, " ");
  }
}
function AgentLayoutComponent_div_35_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function AgentLayoutComponent_div_35_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clearNotifications());
    });
    \u0275\u0275text(1, "Clear all");
    \u0275\u0275elementEnd();
  }
}
function AgentLayoutComponent_div_35_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 61);
    \u0275\u0275element(3, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 62)(5, "p", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 64);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", n_r7.status === "Completed" ? "bg-success-100 dark:bg-success-900/30" : n_r7.status === "Failed" ? "bg-danger-100 dark:bg-danger-900/30" : "bg-brand-100 dark:bg-brand-900/30");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", n_r7.status === "Completed" ? "text-success-600 dark:text-success-400" : n_r7.status === "Failed" ? "text-danger-600 dark:text-danger-400" : "text-brand-600 dark:text-brand-400");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(n_r7.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 4, n_r7.time, "HH:mm"));
  }
}
function AgentLayoutComponent_div_35_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 66);
    \u0275\u0275element(2, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 67);
    \u0275\u0275text(4, "No notifications yet");
    \u0275\u0275elementEnd()();
  }
}
function AgentLayoutComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "span", 53);
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AgentLayoutComponent_div_35_button_4_Template, 2, 0, "button", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55);
    \u0275\u0275template(6, AgentLayoutComponent_div_35_div_6_Template, 10, 7, "div", 56)(7, AgentLayoutComponent_div_35_div_7_Template, 5, 0, "div", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.notifications.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.notifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.notifications.length === 0);
  }
}
function AgentLayoutComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "div", 70);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 71)(5, "div", 72);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "div", 74);
    \u0275\u0275elementStart(10, "a", 75);
    \u0275\u0275listener("click", function AgentLayoutComponent_div_48_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showUserMenu = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 76);
    \u0275\u0275element(12, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " My Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(14, "div", 74);
    \u0275\u0275elementStart(15, "a", 78);
    \u0275\u0275listener("click", function AgentLayoutComponent_div_48_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.logout();
      return \u0275\u0275resetView(ctx_r3.showUserMenu = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 79);
    \u0275\u0275element(17, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Sign Out ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.userInitial, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.userRoleName);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/agent/profile");
  }
}
var NAV_ITEMS = [
  // Top-level (no section)
  {
    label: "Dashboard",
    icon: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z",
    route: "/agent/dashboard"
  },
  // Operations
  {
    label: "Send Money",
    icon: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5",
    route: "/agent/send",
    section: "Operations"
  },
  {
    label: "My Transactions",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
    route: "/agent/transactions",
    section: "Operations"
  },
  // Reports
  {
    label: "My Statement",
    icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z",
    route: "/agent/reports/statement",
    section: "Reports"
  },
  // My Account
  {
    label: "Profile & Settings",
    icon: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    route: "/agent/profile",
    section: "My Account"
  }
];
var AgentLayoutComponent = class _AgentLayoutComponent {
  get unreadCount() {
    return this.notifications.filter((n) => !n.read).length;
  }
  constructor(appSettings, auth, router, signalR) {
    this.appSettings = appSettings;
    this.auth = auth;
    this.router = router;
    this.signalR = signalR;
    this.isDarkMode = false;
    this.sidenavOpened = true;
    this.showUserMenu = false;
    this.showNotifications = false;
    this.notifications = [];
    this.destroy$ = new Subject();
    this.userName = "Agent";
    this.userInitial = "A";
    this.userRoleName = "Sending Agent";
    this.sectionExpanded = {};
    this.navItems = NAV_ITEMS;
  }
  ngOnInit() {
    this.appSettings.load();
    this.isDarkMode = localStorage.getItem("darkMode") === "true";
    this.applyBodyClass();
    try {
      const saved = localStorage.getItem("agentNavSections");
      this.sectionExpanded = saved ? JSON.parse(saved) : {};
    } catch {
      this.sectionExpanded = {};
    }
    const state = this.auth.snapshot;
    this.userName = state.fullName || "Agent";
    this.userInitial = this.userName.charAt(0).toUpperCase();
    this.userRoleName = state.roles[0] || "Sending Agent";
    this.signalR.startConnection();
    this.signalR.transactionStatusUpdated$.pipe(takeUntil(this.destroy$)).subscribe((update) => {
      const item = {
        id: update.id,
        status: update.status,
        message: `Transaction #${update.id} \u2192 ${update.status}${update.lastPartnerError ? ": " + update.lastPartnerError : ""}`,
        time: /* @__PURE__ */ new Date(),
        read: false
      };
      this.notifications = [item, ...this.notifications].slice(0, 20);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ── Section collapse/expand ──────────────────────────────────────────────
  toggleSection(section) {
    this.sectionExpanded[section] = !this.isSectionExpanded(section);
    try {
      localStorage.setItem("agentNavSections", JSON.stringify(this.sectionExpanded));
    } catch {
    }
  }
  isSectionExpanded(section) {
    return this.sectionExpanded[section] !== false;
  }
  // ── Navigation helpers ─────────────────────────────────────────────────
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
    return this.navItems.filter((i) => i.section === section);
  }
  get topLevelItems() {
    return this.navItems.filter((i) => !i.section);
  }
  toggleDrawer() {
    this.sidenavOpened = !this.sidenavOpened;
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem("darkMode", String(this.isDarkMode));
    this.applyBodyClass();
  }
  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    if (this.showNotifications) {
      this.notifications = this.notifications.map((n) => __spreadProps(__spreadValues({}, n), { read: true }));
    }
  }
  clearNotifications() {
    this.notifications = [];
    this.showNotifications = false;
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".user-menu-wrapper")) {
      this.showUserMenu = false;
    }
    if (!target.closest(".notifications-wrapper")) {
      this.showNotifications = false;
    }
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/auth/login"]);
  }
  applyBodyClass() {
    document.body.classList.toggle("dark-mode", this.isDarkMode);
    document.documentElement.classList.toggle("dark", this.isDarkMode);
  }
  static {
    this.\u0275fac = function AgentLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentLayoutComponent)(\u0275\u0275directiveInject(AppSettingsService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SignalRService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentLayoutComponent, selectors: [["app-agent-layout"]], hostBindings: function AgentLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AgentLayoutComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 51, vars: 22, consts: [[1, "flex", "h-screen", "bg-surface-50", "dark:bg-surface-950"], [1, "fixed", "inset-y-0", "left-0", "z-30", "flex", "flex-col", "bg-white", "dark:bg-surface-900", "border-r", "border-surface-100", "dark:border-surface-800", "transition-all", "duration-300", "ease-in-out", "shadow-sm", "overflow-hidden"], [1, "flex", "h-16", "items-center", "gap-3", "px-5", "border-b", "border-surface-100", "dark:border-surface-800", "shrink-0"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-gradient-to-br", "from-brand-500", "to-brand-700", "text-white", "shadow-sm", "shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-[18px]", "w-[18px]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"], [1, "flex", "flex-col", "overflow-hidden"], [1, "text-[13px]", "font-bold", "text-surface-900", "dark:text-surface-100", "truncate", "tracking-tight"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-widest", "text-brand-500", "dark:text-brand-400"], [1, "flex", "flex-1", "flex-col", "overflow-y-auto", "px-3", "py-4", "gap-0"], ["routerLinkActive", "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 font-semibold", "class", "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-surface-600 dark:text-surface-400 transition-all duration-150 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-200 mb-0.5", 3, "routerLink", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "flex-1"], [1, "mt-4", "pt-3", "border-t", "border-surface-100", "dark:border-surface-800"], [1, "flex", "items-center", "gap-3", "rounded-xl", "px-3", "py-2.5", "text-[13px]", "font-medium", "text-danger-600", "dark:text-danger-400", "transition-all", "duration-150", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "cursor-pointer", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "h-[18px]", "w-[18px]", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"], [1, "flex", "flex-1", "flex-col", "min-w-0", "transition-all", "duration-300", "ease-in-out"], [1, "sticky", "top-0", "z-20", "flex", "h-16", "items-center", "gap-3", "border-b", "border-surface-100", "dark:border-surface-800", "bg-white/90", "dark:bg-surface-900/90", "px-4", "backdrop-blur-md", "shrink-0"], ["aria-label", "Toggle menu", 1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "text-surface-500", "dark:text-surface-400", "transition-all", "duration-150", "hover:bg-surface-100", "dark:hover:bg-surface-800", "active:scale-95", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "text-surface-500", "dark:text-surface-400", "transition-all", "duration-150", "hover:bg-surface-100", "dark:hover:bg-surface-800", "active:scale-95", 3, "click"], ["class", "h-[18px] w-[18px]", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 4, "ngIf"], [1, "notifications-wrapper", "relative"], ["aria-label", "Notifications", 1, "relative", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "text-surface-500", "dark:text-surface-400", "transition-all", "duration-150", "hover:bg-surface-100", "dark:hover:bg-surface-800", "active:scale-95", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "h-[18px]", "w-[18px]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"], ["class", "absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[9px] font-bold text-white ring-2 ring-white dark:ring-surface-900", 4, "ngIf"], ["class", "absolute right-0 top-11 z-50 w-80 rounded-2xl border border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 shadow-xl shadow-black/10 overflow-hidden animate-fade-in", 4, "ngIf"], [1, "h-5", "w-px", "bg-surface-200", "dark:bg-surface-700", "mx-1"], [1, "user-menu-wrapper", "relative"], ["aria-label", "Open user menu", 1, "flex", "items-center", "gap-2.5", "rounded-xl", "px-2.5", "py-1.5", "transition-all", "duration-150", "hover:bg-surface-100", "dark:hover:bg-surface-800", "active:scale-95", 3, "click"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-gradient-to-br", "from-brand-400", "to-brand-600", "text-xs", "font-bold", "text-white", "shadow-sm", "shrink-0"], [1, "hidden", "sm:flex", "flex-col", "items-start"], [1, "text-[13px]", "font-semibold", "text-surface-800", "dark:text-surface-200", "leading-tight"], [1, "text-[10px]", "text-surface-400", "dark:text-surface-500", "leading-tight"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "h-3.5", "w-3.5", "text-surface-400", "ml-0.5", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 8.25l-7.5 7.5-7.5-7.5"], ["class", "absolute right-0 top-full mt-2 w-56 rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 py-1.5 shadow-xl shadow-surface-900/10 dark:shadow-surface-950/40 z-50", 4, "ngIf"], [1, "flex-1", "overflow-y-auto", "bg-surface-50", "dark:bg-surface-950", "p-6"], ["routerLinkActive", "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 font-semibold", 1, "group", "relative", "flex", "items-center", "gap-3", "rounded-xl", "px-3", "py-2.5", "text-[13px]", "font-medium", "text-surface-600", "dark:text-surface-400", "transition-all", "duration-150", "hover:bg-surface-50", "dark:hover:bg-surface-800", "hover:text-surface-900", "dark:hover:text-surface-200", "mb-0.5", 3, "routerLink"], ["stroke-linecap", "round", "stroke-linejoin", "round"], [1, "truncate"], [1, "flex", "w-full", "items-center", "justify-between", "px-3", "pt-5", "pb-1", "group", "focus:outline-none", 3, "click"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-widest", "text-surface-400", "dark:text-surface-500", "group-hover:text-surface-500", "dark:group-hover:text-surface-400", "transition-colors", "select-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "text-surface-300", "dark:text-surface-600", "group-hover:text-surface-400", "transition-transform", "duration-200"], [4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"], [1, "absolute", "-top-0.5", "-right-0.5", "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", "bg-brand-500", "text-[9px]", "font-bold", "text-white", "ring-2", "ring-white", "dark:ring-surface-900"], [1, "absolute", "right-0", "top-11", "z-50", "w-80", "rounded-2xl", "border", "border-surface-100", "dark:border-surface-800", "bg-white", "dark:bg-surface-900", "shadow-xl", "shadow-black/10", "overflow-hidden", "animate-fade-in"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-b", "border-surface-100", "dark:border-surface-800"], [1, "text-sm", "font-bold", "text-surface-800", "dark:text-surface-200"], ["class", "text-xs text-brand-600 dark:text-brand-400 hover:underline", 3, "click", 4, "ngIf"], [1, "max-h-72", "overflow-y-auto", "divide-y", "divide-surface-50", "dark:divide-surface-800"], ["class", "flex gap-3 px-4 py-3 hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors", 4, "ngFor", "ngForOf"], ["class", "flex flex-col items-center justify-center py-8 text-center", 4, "ngIf"], [1, "text-xs", "text-brand-600", "dark:text-brand-400", "hover:underline", 3, "click"], [1, "flex", "gap-3", "px-4", "py-3", "hover:bg-surface-50", "dark:hover:bg-surface-800/50", "transition-colors"], [1, "mt-0.5", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-full", 3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "h-3.5", "w-3.5", 3, "ngClass"], [1, "min-w-0", "flex-1"], [1, "text-xs", "font-medium", "text-surface-800", "dark:text-surface-200", "leading-snug", "line-clamp-2"], [1, "text-[10px]", "text-surface-400", "dark:text-surface-500", "mt-0.5"], [1, "flex", "flex-col", "items-center", "justify-center", "py-8", "text-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "h-8", "w-8", "text-surface-300", "dark:text-surface-600", "mb-2"], [1, "text-xs", "text-surface-400", "dark:text-surface-500"], [1, "absolute", "right-0", "top-full", "mt-2", "w-56", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "py-1.5", "shadow-xl", "shadow-surface-900/10", "dark:shadow-surface-950/40", "z-50"], [1, "flex", "items-center", "gap-3", "px-4", "py-3"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-gradient-to-br", "from-brand-400", "to-brand-600", "text-sm", "font-bold", "text-white", "shadow-sm", "shrink-0"], [1, "overflow-hidden"], [1, "text-[13px]", "font-semibold", "text-surface-900", "dark:text-surface-100", "truncate"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "truncate"], [1, "mx-3", "my-1", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "flex", "w-full", "items-center", "gap-3", "px-4", "py-2.5", "text-[13px]", "text-surface-700", "dark:text-surface-300", "transition-colors", "hover:bg-surface-50", "dark:hover:bg-surface-700/60", "cursor-pointer", 3, "click", "routerLink"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "h-4", "w-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"], [1, "flex", "w-full", "items-center", "gap-3", "px-4", "py-2.5", "text-[13px]", "text-danger-600", "dark:text-danger-400", "transition-colors", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "cursor-pointer", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "h-4", "w-4"]], template: function AgentLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4);
        \u0275\u0275element(5, "path", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 8);
        \u0275\u0275text(10, " Agent Portal ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "nav", 9);
        \u0275\u0275template(12, AgentLayoutComponent_a_12_Template, 5, 3, "a", 10)(13, AgentLayoutComponent_ng_container_13_Template, 7, 4, "ng-container", 11);
        \u0275\u0275element(14, "div", 12);
        \u0275\u0275elementStart(15, "div", 13)(16, "a", 14);
        \u0275\u0275listener("click", function AgentLayoutComponent_Template_a_click_16_listener() {
          return ctx.logout();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 15);
        \u0275\u0275element(18, "path", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20, "Sign Out");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(21, "div", 17)(22, "header", 18)(23, "button", 19);
        \u0275\u0275listener("click", function AgentLayoutComponent_Template_button_click_23_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 20);
        \u0275\u0275element(25, "path", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(26, "div", 12);
        \u0275\u0275elementStart(27, "button", 22);
        \u0275\u0275listener("click", function AgentLayoutComponent_Template_button_click_27_listener() {
          return ctx.toggleDarkMode();
        });
        \u0275\u0275template(28, AgentLayoutComponent__svg_svg_28_Template, 2, 0, "svg", 23)(29, AgentLayoutComponent__svg_svg_29_Template, 2, 0, "svg", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 24)(31, "button", 25);
        \u0275\u0275listener("click", function AgentLayoutComponent_Template_button_click_31_listener() {
          return ctx.toggleNotifications();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 26);
        \u0275\u0275element(33, "path", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, AgentLayoutComponent_span_34_Template, 2, 1, "span", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, AgentLayoutComponent_div_35_Template, 8, 3, "div", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(36, "div", 30);
        \u0275\u0275elementStart(37, "div", 31)(38, "button", 32);
        \u0275\u0275listener("click", function AgentLayoutComponent_Template_button_click_38_listener() {
          return ctx.toggleUserMenu();
        });
        \u0275\u0275elementStart(39, "div", 33);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 34)(42, "span", 35);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 36);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 37);
        \u0275\u0275element(47, "path", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(48, AgentLayoutComponent_div_48_Template, 19, 4, "div", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(49, "main", 40);
        \u0275\u0275element(50, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("dark", ctx.isDarkMode);
        \u0275\u0275advance();
        \u0275\u0275classProp("w-64", ctx.sidenavOpened)("w-0", !ctx.sidenavOpened);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.appSettings.companyName || "RemitAgent", " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.topLevelItems);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.sections);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("ml-64", ctx.sidenavOpened);
        \u0275\u0275advance(6);
        \u0275\u0275attribute("aria-label", ctx.isDarkMode ? "Switch to light mode" : "Switch to dark mode");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isDarkMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isDarkMode);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.unreadCount > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNotifications);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.userInitial, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userRoleName);
        \u0275\u0275advance();
        \u0275\u0275classProp("rotate-180", ctx.showUserMenu);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showUserMenu);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  font-family: "Inter", sans-serif;\n}\n.layout-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.layout-container[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 56px;\n}\n.app-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  height: 56px;\n  background: #ffffff !important;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 0 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  color: #111827 !important;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n  margin-right: 4px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: #1a56db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  letter-spacing: -0.3px;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.toolbar-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  color: #111827 !important;\n}\n.toolbar-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.user-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px !important;\n  border-radius: 8px !important;\n  color: #111827 !important;\n  height: 40px;\n}\n.user-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.user-chevron[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #9ca3af;\n}\n.menu-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.menu-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.menu-user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-user-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.logout-item[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.logout-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.app-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  background: #ffffff !important;\n  border-right: 1px solid #e5e7eb !important;\n  display: flex;\n  flex-direction: column;\n}\n.nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 8px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.nav-section[_ngcontent-%COMP%] {\n  padding: 18px 16px 6px 20px;\n}\n.nav-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #9ca3af;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 20px;\n  margin: 1px 10px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13.5px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.nav-item--active[_ngcontent-%COMP%] {\n  background: #ebf0ff !important;\n  color: #1a56db !important;\n}\n.nav-item--active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a56db !important;\n}\n.nav-item--active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #1a56db;\n  border-radius: 0 3px 3px 0;\n}\n.nav-item--sub[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n.nav-item--danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.nav-item--danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.nav-item--danger[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: color 0.15s;\n}\n.nav-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-bottom[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 8px;\n}\n.main-content[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: calc(100vh - 56px);\n  max-width: 1440px;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-toolbar[_ngcontent-%COMP%] {\n  background: #1e293b !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n.dark-mode[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .user-chevron[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .toolbar-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%] {\n  color: #f1f5f9 !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%] {\n  background: #111827 !important;\n  border-right-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #f9fafb;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%] {\n  background: rgba(26, 86, 219, 0.15) !important;\n  color: #93c5fd !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #93c5fd !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--danger[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.15);\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-bottom[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  background: #0f172a !important;\n}\n@media (max-width: 768px) {\n  .brand-sub[_ngcontent-%COMP%], \n   .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=agent-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-agent-layout", standalone: true, imports: [CommonModule, RouterModule, DatePipe], template: `<div class="flex h-screen bg-surface-50 dark:bg-surface-950" [class.dark]="isDarkMode">

  <!-- \u2500\u2500 Sidebar \u2500\u2500 -->
  <aside
    class="fixed inset-y-0 left-0 z-30 flex flex-col bg-white dark:bg-surface-900 border-r border-surface-100 dark:border-surface-800 transition-all duration-300 ease-in-out shadow-sm overflow-hidden"
    [class.w-64]="sidenavOpened" [class.w-0]="!sidenavOpened">

    <!-- Brand -->
    <div class="flex h-16 items-center gap-3 px-5 border-b border-surface-100 dark:border-surface-800 shrink-0">
      <div
        class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm shrink-0">
        <svg class="h-[18px] w-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>
      </div>
      <div class="flex flex-col overflow-hidden">
        <span class="text-[13px] font-bold text-surface-900 dark:text-surface-100 truncate tracking-tight">
          {{ appSettings.companyName || 'RemitAgent' }}
        </span>
        <span class="text-[10px] font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">
          Agent Portal
        </span>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex flex-1 flex-col overflow-y-auto px-3 py-4 gap-0">

      <!-- Top-level items (Dashboard) -->
      <a *ngFor="let item of topLevelItems"
        [routerLink]="item.route"
        routerLinkActive="bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 font-semibold"
        class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-surface-600 dark:text-surface-400 transition-all duration-150 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-200 mb-0.5">
        <svg class="h-[18px] w-[18px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.icon" />
        </svg>
        <span class="truncate">{{ item.label }}</span>
      </a>

      <!-- Sections \u2014 collapsible -->
      <ng-container *ngFor="let section of sections">

        <!-- Section header -->
        <button (click)="toggleSection(section)"
          class="flex w-full items-center justify-between px-3 pt-5 pb-1 group focus:outline-none">
          <span
            class="text-[10px] font-bold uppercase tracking-widest text-surface-400 dark:text-surface-500 group-hover:text-surface-500 dark:group-hover:text-surface-400 transition-colors select-none">
            {{ section }}
          </span>
          <svg
            class="w-3 h-3 text-surface-300 dark:text-surface-600 group-hover:text-surface-400 transition-transform duration-200"
            [class.rotate-180]="!isSectionExpanded(section)"
            fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        <!-- Section items -->
        <ng-container *ngIf="isSectionExpanded(section)">
          <a *ngFor="let item of getItemsForSection(section)"
            [routerLink]="item.route"
            routerLinkActive="bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 font-semibold"
            class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-surface-600 dark:text-surface-400 transition-all duration-150 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-200 mb-0.5">
            <svg class="h-[18px] w-[18px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.icon" />
            </svg>
            <span class="truncate">{{ item.label }}</span>
          </a>
        </ng-container>

      </ng-container>

      <div class="flex-1"></div>

      <!-- Sign Out -->
      <div class="mt-4 pt-3 border-t border-surface-100 dark:border-surface-800">
        <a (click)="logout()"
          class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-danger-600 dark:text-danger-400 transition-all duration-150 hover:bg-danger-50 dark:hover:bg-danger-900/20 cursor-pointer">
          <svg class="h-[18px] w-[18px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
          <span>Sign Out</span>
        </a>
      </div>
    </nav>
  </aside>

  <!-- \u2500\u2500 Main area \u2500\u2500 -->
  <div class="flex flex-1 flex-col min-w-0 transition-all duration-300 ease-in-out" [class.ml-64]="sidenavOpened">

    <!-- Top bar -->
    <header
      class="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-surface-100 dark:border-surface-800 bg-white/90 dark:bg-surface-900/90 px-4 backdrop-blur-md shrink-0">

      <!-- Hamburger -->
      <button (click)="toggleDrawer()" aria-label="Toggle menu"
        class="flex h-9 w-9 items-center justify-center rounded-xl text-surface-500 dark:text-surface-400 transition-all duration-150 hover:bg-surface-100 dark:hover:bg-surface-800 active:scale-95">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <div class="flex-1"></div>

      <!-- Dark mode toggle -->
      <button (click)="toggleDarkMode()"
        class="flex h-9 w-9 items-center justify-center rounded-xl text-surface-500 dark:text-surface-400 transition-all duration-150 hover:bg-surface-100 dark:hover:bg-surface-800 active:scale-95"
        [attr.aria-label]="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
        <svg *ngIf="!isDarkMode" class="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
        <svg *ngIf="isDarkMode" class="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      </button>

      <!-- Notifications -->
      <div class="notifications-wrapper relative">
        <button (click)="toggleNotifications()" aria-label="Notifications"
          class="relative flex h-9 w-9 items-center justify-center rounded-xl text-surface-500 dark:text-surface-400 transition-all duration-150 hover:bg-surface-100 dark:hover:bg-surface-800 active:scale-95">
          <svg class="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          <span *ngIf="unreadCount > 0"
            class="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[9px] font-bold text-white ring-2 ring-white dark:ring-surface-900">
            {{ unreadCount > 9 ? '9+' : unreadCount }}
          </span>
        </button>

        <!-- Dropdown -->
        <div *ngIf="showNotifications"
          class="absolute right-0 top-11 z-50 w-80 rounded-2xl border border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 shadow-xl shadow-black/10 overflow-hidden animate-fade-in">
          <div class="flex items-center justify-between px-4 py-3 border-b border-surface-100 dark:border-surface-800">
            <span class="text-sm font-bold text-surface-800 dark:text-surface-200">Notifications</span>
            <button *ngIf="notifications.length > 0" (click)="clearNotifications()"
              class="text-xs text-brand-600 dark:text-brand-400 hover:underline">Clear all</button>
          </div>
          <div class="max-h-72 overflow-y-auto divide-y divide-surface-50 dark:divide-surface-800">
            <div *ngFor="let n of notifications"
              class="flex gap-3 px-4 py-3 hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors">
              <div class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                [ngClass]="n.status === 'Completed' ? 'bg-success-100 dark:bg-success-900/30' : n.status === 'Failed' ? 'bg-danger-100 dark:bg-danger-900/30' : 'bg-brand-100 dark:bg-brand-900/30'">
                <svg class="h-3.5 w-3.5"
                  [ngClass]="n.status === 'Completed' ? 'text-success-600 dark:text-success-400' : n.status === 'Failed' ? 'text-danger-600 dark:text-danger-400' : 'text-brand-600 dark:text-brand-400'"
                  fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs font-medium text-surface-800 dark:text-surface-200 leading-snug line-clamp-2">{{ n.message }}</p>
                <p class="text-[10px] text-surface-400 dark:text-surface-500 mt-0.5">{{ n.time | date:'HH:mm' }}</p>
              </div>
            </div>
            <div *ngIf="notifications.length === 0"
              class="flex flex-col items-center justify-center py-8 text-center">
              <svg class="h-8 w-8 text-surface-300 dark:text-surface-600 mb-2" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
              <p class="text-xs text-surface-400 dark:text-surface-500">No notifications yet</p>
            </div>
          </div>
        </div>
      </div>

      <div class="h-5 w-px bg-surface-200 dark:bg-surface-700 mx-1"></div>

      <!-- User menu -->
      <div class="user-menu-wrapper relative">
        <button (click)="toggleUserMenu()" aria-label="Open user menu"
          class="flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 transition-all duration-150 hover:bg-surface-100 dark:hover:bg-surface-800 active:scale-95">
          <div
            class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-xs font-bold text-white shadow-sm shrink-0">
            {{ userInitial }}
          </div>
          <div class="hidden sm:flex flex-col items-start">
            <span class="text-[13px] font-semibold text-surface-800 dark:text-surface-200 leading-tight">{{ userName }}</span>
            <span class="text-[10px] text-surface-400 dark:text-surface-500 leading-tight">{{ userRoleName }}</span>
          </div>
          <svg class="h-3.5 w-3.5 text-surface-400 ml-0.5 transition-transform"
            [class.rotate-180]="showUserMenu"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        <!-- Dropdown -->
        <div *ngIf="showUserMenu"
          class="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 py-1.5 shadow-xl shadow-surface-900/10 dark:shadow-surface-950/40 z-50">
          <div class="flex items-center gap-3 px-4 py-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-white shadow-sm shrink-0">
              {{ userInitial }}
            </div>
            <div class="overflow-hidden">
              <div class="text-[13px] font-semibold text-surface-900 dark:text-surface-100 truncate">{{ userName }}</div>
              <div class="text-xs text-surface-500 dark:text-surface-400 truncate">{{ userRoleName }}</div>
            </div>
          </div>
          <div class="mx-3 my-1 border-t border-surface-100 dark:border-surface-700"></div>

          <!-- My Profile -->
          <a [routerLink]="'/agent/profile'" (click)="showUserMenu = false"
            class="flex w-full items-center gap-3 px-4 py-2.5 text-[13px] text-surface-700 dark:text-surface-300 transition-colors hover:bg-surface-50 dark:hover:bg-surface-700/60 cursor-pointer">
            <svg class="h-4 w-4 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            My Profile
          </a>

          <div class="mx-3 my-1 border-t border-surface-100 dark:border-surface-700"></div>

          <!-- Sign Out -->
          <a (click)="logout(); showUserMenu = false"
            class="flex w-full items-center gap-3 px-4 py-2.5 text-[13px] text-danger-600 dark:text-danger-400 transition-colors hover:bg-danger-50 dark:hover:bg-danger-900/20 cursor-pointer">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
            Sign Out
          </a>
        </div>
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-1 overflow-y-auto bg-surface-50 dark:bg-surface-950 p-6">
      <router-outlet></router-outlet>
    </main>
  </div>
</div>
`, styles: ['/* src/app/layouts/agent-layout/agent-layout.component.scss */\n:host {\n  display: block;\n  height: 100vh;\n  font-family: "Inter", sans-serif;\n}\n.layout-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.layout-container {\n  flex: 1;\n  margin-top: 56px;\n}\n.app-toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  height: 56px;\n  background: #ffffff !important;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 0 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  color: #111827 !important;\n}\n.menu-btn {\n  color: #6b7280 !important;\n  margin-right: 4px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-logo {\n  width: 34px;\n  height: 34px;\n  background: #1a56db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-logo mat-icon {\n  color: #fff;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.brand-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.brand-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  letter-spacing: -0.3px;\n}\n.brand-sub {\n  font-size: 10px;\n  color: #9ca3af;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.spacer {\n  flex: 1;\n}\n.toolbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.toolbar-btn {\n  color: #6b7280 !important;\n}\n.toolbar-btn:hover {\n  background: #f8fafc !important;\n  color: #111827 !important;\n}\n.toolbar-divider {\n  width: 1px;\n  height: 24px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.user-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px !important;\n  border-radius: 8px !important;\n  color: #111827 !important;\n  height: 40px;\n}\n.user-btn:hover {\n  background: #f8fafc !important;\n}\n.user-avatar {\n  width: 30px;\n  height: 30px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.user-chevron {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #9ca3af;\n}\n.menu-user-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.menu-avatar {\n  width: 38px;\n  height: 38px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.menu-user-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-user-role {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.logout-item {\n  color: #dc2626 !important;\n}\n.logout-item mat-icon {\n  color: #dc2626 !important;\n}\n.app-sidenav {\n  width: 250px;\n  background: #ffffff !important;\n  border-right: 1px solid #e5e7eb !important;\n  display: flex;\n  flex-direction: column;\n}\n.nav-list {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 8px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.nav-section {\n  padding: 18px 16px 6px 20px;\n}\n.nav-section-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #9ca3af;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 20px;\n  margin: 1px 10px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13.5px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  position: relative;\n}\n.nav-item:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item:hover .nav-icon mat-icon {\n  color: #111827;\n}\n.nav-item--active {\n  background: #ebf0ff !important;\n  color: #1a56db !important;\n}\n.nav-item--active .nav-icon mat-icon {\n  color: #1a56db !important;\n}\n.nav-item--active::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #1a56db;\n  border-radius: 0 3px 3px 0;\n}\n.nav-item--sub {\n  padding-left: 24px;\n}\n.nav-item--danger {\n  color: #dc2626;\n}\n.nav-item--danger:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.nav-item--danger .nav-icon mat-icon {\n  color: #dc2626 !important;\n}\n.nav-icon {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: color 0.15s;\n}\n.nav-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-spacer {\n  flex: 1;\n}\n.nav-bottom {\n  padding: 8px 0;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 8px;\n}\n.main-content {\n  background: #f8fafc !important;\n}\n.content-wrapper {\n  padding: 24px;\n  min-height: calc(100vh - 56px);\n  max-width: 1440px;\n}\n.dark-mode .app-toolbar {\n  background: #1e293b !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode .brand-name,\n.dark-mode .user-name {\n  color: #f1f5f9;\n}\n.dark-mode .brand-sub,\n.dark-mode .user-chevron {\n  color: #64748b;\n}\n.dark-mode .toolbar-btn {\n  color: #94a3b8 !important;\n}\n.dark-mode .toolbar-divider {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode .user-btn {\n  color: #f1f5f9 !important;\n}\n.dark-mode .user-btn:hover {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode .app-sidenav {\n  background: #111827 !important;\n  border-right-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode .nav-section-label {\n  color: #6b7280;\n}\n.dark-mode .nav-item {\n  color: #d1d5db;\n}\n.dark-mode .nav-item:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #f9fafb;\n}\n.dark-mode .nav-item--active {\n  background: rgba(26, 86, 219, 0.15) !important;\n  color: #93c5fd !important;\n}\n.dark-mode .nav-item--active .nav-icon mat-icon {\n  color: #93c5fd !important;\n}\n.dark-mode .nav-item--danger {\n  color: #fca5a5;\n}\n.dark-mode .nav-item--danger:hover {\n  background: rgba(220, 38, 38, 0.15);\n}\n.dark-mode .nav-icon mat-icon {\n  color: #9ca3af;\n}\n.dark-mode .nav-bottom {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode .main-content {\n  background: #0f172a !important;\n}\n@media (max-width: 768px) {\n  .brand-sub,\n  .user-name {\n    display: none;\n  }\n  .content-wrapper {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=agent-layout.component.css.map */\n'] }]
  }], () => [{ type: AppSettingsService }, { type: AuthStateService }, { type: Router }, { type: SignalRService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentLayoutComponent, { className: "AgentLayoutComponent", filePath: "src/app/layouts/agent-layout/agent-layout.component.ts", lineNumber: 71 });
})();
export {
  AgentLayoutComponent
};
//# sourceMappingURL=chunk-7C3ZHSHA.js.map
