import {
  AppSettingsService
} from "./chunk-3AILC626.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-ZQKQC2T6.js";
import "./chunk-R63TWOS6.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-WBW3ZP3W.js";
import {
  Component,
  HostListener,
  setClassMetadata,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresolveDocument,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EU7HC72Q.js";
import "./chunk-S5KMCARS.js";

// src/app/layouts/agent-layout/agent-layout.component.ts
function AgentLayoutComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 39);
    \u0275\u0275element(2, "span", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 41);
    \u0275\u0275element(4, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("d", item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function AgentLayoutComponent_ng_container_13_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 39);
    \u0275\u0275element(1, "span", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 14);
    \u0275\u0275element(3, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r2.route);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("d", item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function AgentLayoutComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AgentLayoutComponent_ng_container_13_a_3_Template, 6, 3, "a", 45);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const section_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", section_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getItemsForSection(section_r3));
  }
}
function AgentLayoutComponent__svg_svg_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 47);
    \u0275\u0275elementEnd();
  }
}
function AgentLayoutComponent__svg_svg_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 48);
    \u0275\u0275elementEnd();
  }
}
function AgentLayoutComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51);
    \u0275\u0275text(3, "A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 52)(5, "div", 53);
    \u0275\u0275text(6, "Agent User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 54);
    \u0275\u0275text(8, "Sending Agent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "div", 55);
    \u0275\u0275elementStart(10, "button", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 57);
    \u0275\u0275element(12, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " My Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(14, "div", 55);
    \u0275\u0275elementStart(15, "a", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 60);
    \u0275\u0275element(17, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Sign Out ");
    \u0275\u0275elementEnd()();
  }
}
var AgentLayoutComponent = class _AgentLayoutComponent {
  constructor(appSettings) {
    this.appSettings = appSettings;
    this.isDarkMode = false;
    this.sidenavOpened = true;
    this.showUserMenu = false;
    this.navItems = [
      { label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", route: "/agent/dashboard" },
      { label: "Send Money", icon: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5", route: "/agent/send", section: "Operations" },
      { label: "My Transactions", icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z", route: "/agent/transactions", section: "Operations" }
    ];
  }
  ngOnInit() {
    this.appSettings.load();
    this.isDarkMode = localStorage.getItem("darkMode") === "true";
    this.applyBodyClass();
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
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".user-menu-wrapper")) {
      this.showUserMenu = false;
    }
  }
  get sections() {
    const seen = /* @__PURE__ */ new Set();
    return this.navItems.filter((i) => i.section && !seen.has(i.section) && seen.add(i.section)).map((i) => i.section);
  }
  getItemsForSection(section) {
    return this.navItems.filter((i) => i.section === section);
  }
  get topLevelItems() {
    return this.navItems.filter((i) => !i.section);
  }
  applyBodyClass() {
    document.body.classList.toggle("dark-mode", this.isDarkMode);
  }
  static {
    this.\u0275fac = function AgentLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentLayoutComponent)(\u0275\u0275directiveInject(AppSettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentLayoutComponent, selectors: [["app-agent-layout"]], hostBindings: function AgentLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AgentLayoutComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 51, vars: 16, consts: [[1, "flex", "h-screen", "bg-surface-50", "dark:bg-surface-950"], [1, "fixed", "inset-y-0", "left-0", "z-30", "flex", "flex-col", "bg-white", "dark:bg-surface-900", "border-r", "border-surface-100", "dark:border-surface-800", "transition-all", "duration-300", "ease-in-out", "shadow-sm"], [1, "flex", "h-16", "items-center", "gap-3", "px-5", "border-b", "border-surface-100", "dark:border-surface-800", "shrink-0"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-gradient-to-br", "from-brand-500", "to-brand-700", "text-white", "shadow-sm", "shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"], [1, "flex", "flex-col", "overflow-hidden"], [1, "text-[13px]", "font-bold", "text-surface-900", "dark:text-surface-100", "truncate", "tracking-tight"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-widest", "text-brand-500", "dark:text-brand-400"], [1, "flex", "flex-1", "flex-col", "overflow-y-auto", "px-3", "py-4", "gap-0.5"], [4, "ngFor", "ngForOf"], [1, "flex-1"], [1, "mt-4", "pt-3", "border-t", "border-surface-100", "dark:border-surface-800"], ["routerLink", "/", 1, "flex", "items-center", "gap-3", "rounded-xl", "px-3", "py-2.5", "text-[13px]", "font-medium", "text-danger-600", "dark:text-danger-400", "transition-all", "duration-150", "hover:bg-danger-50", "dark:hover:bg-danger-900/20"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "h-[18px]", "w-[18px]", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"], [1, "flex", "flex-1", "flex-col", "min-w-0", "transition-all", "duration-300", "ease-in-out"], [1, "sticky", "top-0", "z-20", "flex", "h-16", "items-center", "gap-3", "border-b", "border-surface-100", "dark:border-surface-800", "bg-white/90", "dark:bg-surface-900/90", "px-4", "backdrop-blur-md"], ["aria-label", "Toggle menu", 1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "text-surface-500", "dark:text-surface-400", "transition-all", "duration-150", "hover:bg-surface-100", "dark:hover:bg-surface-800", "active:scale-95", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "text-surface-500", "dark:text-surface-400", "transition-all", "duration-150", "hover:bg-surface-100", "dark:hover:bg-surface-800", "active:scale-95", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "class", "h-[18px] w-[18px]", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 4, "ngIf"], [1, "relative"], ["aria-label", "Notifications", 1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "text-surface-500", "dark:text-surface-400", "transition-all", "duration-150", "hover:bg-surface-100", "dark:hover:bg-surface-800", "active:scale-95"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "h-[18px]", "w-[18px]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"], [1, "absolute", "top-1.5", "right-1.5", "h-2", "w-2", "rounded-full", "bg-brand-500", "ring-2", "ring-white", "dark:ring-surface-900"], [1, "h-5", "w-px", "bg-surface-200", "dark:bg-surface-700", "mx-1"], [1, "user-menu-wrapper", "relative"], ["aria-label", "Open user menu", 1, "flex", "items-center", "gap-2.5", "rounded-xl", "px-2.5", "py-1.5", "transition-all", "duration-150", "hover:bg-surface-100", "dark:hover:bg-surface-800", "active:scale-95", 3, "click"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-gradient-to-br", "from-brand-400", "to-brand-600", "text-xs", "font-bold", "text-white", "shadow-sm", "shrink-0"], [1, "hidden", "sm:flex", "flex-col", "items-start"], [1, "text-[13px]", "font-semibold", "text-surface-800", "dark:text-surface-200", "leading-tight"], [1, "text-[10px]", "text-surface-400", "dark:text-surface-500", "leading-tight"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "h-3.5", "w-3.5", "text-surface-400", "ml-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 8.25l-7.5 7.5-7.5-7.5"], ["class", "absolute right-0 top-full mt-2 w-56 rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 py-1.5 shadow-xl shadow-surface-900/10 dark:shadow-surface-950/40 animate-fade-in", 4, "ngIf"], [1, "flex-1", "overflow-y-auto", "bg-surface-50", "dark:bg-surface-950", "p-6"], [1, "mx-auto", "max-w-7xl"], ["routerLinkActive", "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 font-semibold", 1, "group", "relative", "flex", "items-center", "gap-3", "rounded-xl", "px-3", "py-2.5", "text-[13px]", "font-medium", "text-surface-600", "dark:text-surface-400", "transition-all", "duration-150", "hover:bg-surface-50", "dark:hover:bg-surface-800", "hover:text-surface-900", "dark:hover:text-surface-200", 3, "routerLink"], ["routerLinkActive", "!opacity-100", 1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "w-1", "h-5", "bg-brand-600", "dark:bg-brand-400", "rounded-r-full", "opacity-0", "transition-opacity", "duration-150", "[a.active_&]:opacity-100"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "h-[18px]", "w-[18px]", "shrink-0", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round"], [1, "truncate"], [1, "mt-5", "mb-1", "px-3", "text-[10px]", "font-bold", "uppercase", "tracking-widest", "text-surface-400", "dark:text-surface-500"], ["routerLinkActive", "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 font-semibold", "class", "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-surface-600 dark:text-surface-400 transition-all duration-150 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-200", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "!opacity-100", 1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "w-1", "h-5", "bg-brand-600", "dark:bg-brand-400", "rounded-r-full", "opacity-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"], [1, "absolute", "right-0", "top-full", "mt-2", "w-56", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "py-1.5", "shadow-xl", "shadow-surface-900/10", "dark:shadow-surface-950/40", "animate-fade-in"], [1, "flex", "items-center", "gap-3", "px-4", "py-3"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-gradient-to-br", "from-brand-400", "to-brand-600", "text-sm", "font-bold", "text-white", "shadow-sm", "shrink-0"], [1, "overflow-hidden"], [1, "text-[13px]", "font-semibold", "text-surface-900", "dark:text-surface-100", "truncate"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "truncate"], [1, "mx-3", "my-1", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "flex", "w-full", "items-center", "gap-3", "px-4", "py-2", "text-[13px]", "text-surface-700", "dark:text-surface-300", "transition-colors", "hover:bg-surface-50", "dark:hover:bg-surface-700/60", "rounded-lg", "mx-0"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "h-4", "w-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"], ["routerLink", "/", 1, "flex", "w-full", "items-center", "gap-3", "px-4", "py-2", "text-[13px]", "text-danger-600", "dark:text-danger-400", "transition-colors", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "rounded-lg"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "h-4", "w-4"]], template: function AgentLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4);
        \u0275\u0275element(5, "path", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
        \u0275\u0275text(8, "RemitAgent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 8);
        \u0275\u0275text(10, "Agent Portal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "nav", 9);
        \u0275\u0275template(12, AgentLayoutComponent_ng_container_12_Template, 7, 3, "ng-container", 10)(13, AgentLayoutComponent_ng_container_13_Template, 4, 2, "ng-container", 10);
        \u0275\u0275element(14, "div", 11);
        \u0275\u0275elementStart(15, "div", 12)(16, "a", 13);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 14);
        \u0275\u0275element(18, "path", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20, "Sign Out");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(21, "div", 16)(22, "header", 17)(23, "button", 18);
        \u0275\u0275listener("click", function AgentLayoutComponent_Template_button_click_23_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 4);
        \u0275\u0275element(25, "path", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(26, "div", 11);
        \u0275\u0275elementStart(27, "button", 20);
        \u0275\u0275listener("click", function AgentLayoutComponent_Template_button_click_27_listener() {
          return ctx.toggleDarkMode();
        });
        \u0275\u0275template(28, AgentLayoutComponent__svg_svg_28_Template, 2, 0, "svg", 21)(29, AgentLayoutComponent__svg_svg_29_Template, 2, 0, "svg", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 22)(31, "button", 23);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 24);
        \u0275\u0275element(33, "path", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(34, "span", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(35, "div", 27);
        \u0275\u0275elementStart(36, "div", 28)(37, "button", 29);
        \u0275\u0275listener("click", function AgentLayoutComponent_Template_button_click_37_listener() {
          return ctx.toggleUserMenu();
        });
        \u0275\u0275elementStart(38, "div", 30);
        \u0275\u0275text(39, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 31)(41, "span", 32);
        \u0275\u0275text(42, "Agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 33);
        \u0275\u0275text(44, "Sending Agent");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(45, "svg", 34);
        \u0275\u0275element(46, "path", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(47, AgentLayoutComponent_div_47_Template, 19, 0, "div", 36);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(48, "main", 37)(49, "div", 38);
        \u0275\u0275element(50, "router-outlet");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("dark", ctx.isDarkMode);
        \u0275\u0275advance();
        \u0275\u0275classProp("w-64", ctx.sidenavOpened)("w-0", !ctx.sidenavOpened)("overflow-hidden", !ctx.sidenavOpened);
        \u0275\u0275advance(11);
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
        \u0275\u0275advance(18);
        \u0275\u0275property("ngIf", ctx.showUserMenu);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  font-family: "Inter", sans-serif;\n}\n.layout-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.layout-container[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 56px;\n}\n.app-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  height: 56px;\n  background: #ffffff !important;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 0 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  color: #111827 !important;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n  margin-right: 4px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: #1a56db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  letter-spacing: -0.3px;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.toolbar-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  color: #111827 !important;\n}\n.toolbar-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.user-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px !important;\n  border-radius: 8px !important;\n  color: #111827 !important;\n  height: 40px;\n}\n.user-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.user-chevron[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #9ca3af;\n}\n.menu-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.menu-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.menu-user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-user-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.logout-item[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.logout-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.app-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  background: #ffffff !important;\n  border-right: 1px solid #e5e7eb !important;\n  display: flex;\n  flex-direction: column;\n}\n.nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 8px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.nav-section[_ngcontent-%COMP%] {\n  padding: 18px 16px 6px 20px;\n}\n.nav-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #9ca3af;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 20px;\n  margin: 1px 10px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13.5px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.nav-item--active[_ngcontent-%COMP%] {\n  background: #ebf0ff !important;\n  color: #1a56db !important;\n}\n.nav-item--active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a56db !important;\n}\n.nav-item--active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #1a56db;\n  border-radius: 0 3px 3px 0;\n}\n.nav-item--sub[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n.nav-item--danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.nav-item--danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.nav-item--danger[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: color 0.15s;\n}\n.nav-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-bottom[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 8px;\n}\n.main-content[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: calc(100vh - 56px);\n  max-width: 1440px;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-toolbar[_ngcontent-%COMP%] {\n  background: #1e293b !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n.dark-mode[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .user-chevron[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .toolbar-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%] {\n  color: #f1f5f9 !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%] {\n  background: #111827 !important;\n  border-right-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #f9fafb;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%] {\n  background: rgba(26, 86, 219, 0.15) !important;\n  color: #93c5fd !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #93c5fd !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--danger[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.15);\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-bottom[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  background: #0f172a !important;\n}\n@media (max-width: 768px) {\n  .brand-sub[_ngcontent-%COMP%], \n   .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=agent-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-agent-layout", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="flex h-screen bg-surface-50 dark:bg-surface-950" [class.dark]="isDarkMode">

  <!-- Sidebar -->
  <aside
    class="fixed inset-y-0 left-0 z-30 flex flex-col bg-white dark:bg-surface-900 border-r border-surface-100 dark:border-surface-800 transition-all duration-300 ease-in-out shadow-sm"
    [class.w-64]="sidenavOpened" [class.w-0]="!sidenavOpened" [class.overflow-hidden]="!sidenavOpened">

    <!-- Brand -->
    <div class="flex h-16 items-center gap-3 px-5 border-b border-surface-100 dark:border-surface-800 shrink-0">
      <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      </div>
      <div class="flex flex-col overflow-hidden">
        <span class="text-[13px] font-bold text-surface-900 dark:text-surface-100 truncate tracking-tight">RemitAgent</span>
        <span class="text-[10px] font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">Agent Portal</span>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex flex-1 flex-col overflow-y-auto px-3 py-4 gap-0.5">

      <!-- Top-level items -->
      <ng-container *ngFor="let item of topLevelItems">
        <a [routerLink]="item.route"
           routerLinkActive="bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 font-semibold"
           class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-surface-600 dark:text-surface-400 transition-all duration-150 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-200">
          <span class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-brand-600 dark:bg-brand-400 rounded-r-full opacity-0 transition-opacity duration-150 [a.active_&]:opacity-100" routerLinkActive="!opacity-100"></span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.icon" />
          </svg>
          <span class="truncate">{{ item.label }}</span>
        </a>
      </ng-container>

      <!-- Sections -->
      <ng-container *ngFor="let section of sections">
        <p class="mt-5 mb-1 px-3 text-[10px] font-bold uppercase tracking-widest text-surface-400 dark:text-surface-500">
          {{ section }}
        </p>
        <a *ngFor="let item of getItemsForSection(section)"
           [routerLink]="item.route"
           routerLinkActive="bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 font-semibold"
           class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-surface-600 dark:text-surface-400 transition-all duration-150 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-200">
          <span class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-brand-600 dark:bg-brand-400 rounded-r-full opacity-0" routerLinkActive="!opacity-100"></span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.icon" />
          </svg>
          <span class="truncate">{{ item.label }}</span>
        </a>
      </ng-container>

      <div class="flex-1"></div>

      <!-- Sign Out -->
      <div class="mt-4 pt-3 border-t border-surface-100 dark:border-surface-800">
        <a routerLink="/"
           class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-danger-600 dark:text-danger-400 transition-all duration-150 hover:bg-danger-50 dark:hover:bg-danger-900/20">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
          <span>Sign Out</span>
        </a>
      </div>
    </nav>
  </aside>

  <!-- Main area -->
  <div class="flex flex-1 flex-col min-w-0 transition-all duration-300 ease-in-out" [class.ml-64]="sidenavOpened">

    <!-- Top bar -->
    <header class="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-surface-100 dark:border-surface-800 bg-white/90 dark:bg-surface-900/90 px-4 backdrop-blur-md">

      <!-- Hamburger -->
      <button (click)="toggleDrawer()"
              aria-label="Toggle menu"
              class="flex h-9 w-9 items-center justify-center rounded-xl text-surface-500 dark:text-surface-400 transition-all duration-150 hover:bg-surface-100 dark:hover:bg-surface-800 active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <div class="flex-1"></div>

      <!-- Dark mode toggle -->
      <button (click)="toggleDarkMode()"
              class="flex h-9 w-9 items-center justify-center rounded-xl text-surface-500 dark:text-surface-400 transition-all duration-150 hover:bg-surface-100 dark:hover:bg-surface-800 active:scale-95"
              [attr.aria-label]="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
        <svg *ngIf="!isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
        <svg *ngIf="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      </button>

      <!-- Notifications -->
      <div class="relative">
        <button aria-label="Notifications"
                class="flex h-9 w-9 items-center justify-center rounded-xl text-surface-500 dark:text-surface-400 transition-all duration-150 hover:bg-surface-100 dark:hover:bg-surface-800 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
          <!-- Notification dot -->
          <span class="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-brand-500 ring-2 ring-white dark:ring-surface-900"></span>
        </button>
      </div>

      <div class="h-5 w-px bg-surface-200 dark:bg-surface-700 mx-1"></div>

      <!-- User menu -->
      <div class="user-menu-wrapper relative">
        <button (click)="toggleUserMenu()"
                aria-label="Open user menu"
                class="flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 transition-all duration-150 hover:bg-surface-100 dark:hover:bg-surface-800 active:scale-95">
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-xs font-bold text-white shadow-sm shrink-0">A</div>
          <div class="hidden sm:flex flex-col items-start">
            <span class="text-[13px] font-semibold text-surface-800 dark:text-surface-200 leading-tight">Agent</span>
            <span class="text-[10px] text-surface-400 dark:text-surface-500 leading-tight">Sending Agent</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-surface-400 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        <!-- Dropdown -->
        <div *ngIf="showUserMenu"
             class="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 py-1.5 shadow-xl shadow-surface-900/10 dark:shadow-surface-950/40 animate-fade-in">
          <div class="flex items-center gap-3 px-4 py-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-white shadow-sm shrink-0">A</div>
            <div class="overflow-hidden">
              <div class="text-[13px] font-semibold text-surface-900 dark:text-surface-100 truncate">Agent User</div>
              <div class="text-xs text-surface-500 dark:text-surface-400 truncate">Sending Agent</div>
            </div>
          </div>
          <div class="mx-3 my-1 border-t border-surface-100 dark:border-surface-700"></div>
          <button class="flex w-full items-center gap-3 px-4 py-2 text-[13px] text-surface-700 dark:text-surface-300 transition-colors hover:bg-surface-50 dark:hover:bg-surface-700/60 rounded-lg mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            My Profile
          </button>
          <div class="mx-3 my-1 border-t border-surface-100 dark:border-surface-700"></div>
          <a routerLink="/"
             class="flex w-full items-center gap-3 px-4 py-2 text-[13px] text-danger-600 dark:text-danger-400 transition-colors hover:bg-danger-50 dark:hover:bg-danger-900/20 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            Sign Out
          </a>
        </div>
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-1 overflow-y-auto bg-surface-50 dark:bg-surface-950 p-6">
      <div class="mx-auto max-w-7xl">
        <router-outlet></router-outlet>
      </div>
    </main>
  </div>
</div>
`, styles: ['/* src/app/layouts/agent-layout/agent-layout.component.scss */\n:host {\n  display: block;\n  height: 100vh;\n  font-family: "Inter", sans-serif;\n}\n.layout-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.layout-container {\n  flex: 1;\n  margin-top: 56px;\n}\n.app-toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  height: 56px;\n  background: #ffffff !important;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 0 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  color: #111827 !important;\n}\n.menu-btn {\n  color: #6b7280 !important;\n  margin-right: 4px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-logo {\n  width: 34px;\n  height: 34px;\n  background: #1a56db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-logo mat-icon {\n  color: #fff;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.brand-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.brand-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  letter-spacing: -0.3px;\n}\n.brand-sub {\n  font-size: 10px;\n  color: #9ca3af;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.spacer {\n  flex: 1;\n}\n.toolbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.toolbar-btn {\n  color: #6b7280 !important;\n}\n.toolbar-btn:hover {\n  background: #f8fafc !important;\n  color: #111827 !important;\n}\n.toolbar-divider {\n  width: 1px;\n  height: 24px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.user-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px !important;\n  border-radius: 8px !important;\n  color: #111827 !important;\n  height: 40px;\n}\n.user-btn:hover {\n  background: #f8fafc !important;\n}\n.user-avatar {\n  width: 30px;\n  height: 30px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.user-chevron {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #9ca3af;\n}\n.menu-user-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.menu-avatar {\n  width: 38px;\n  height: 38px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.menu-user-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-user-role {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.logout-item {\n  color: #dc2626 !important;\n}\n.logout-item mat-icon {\n  color: #dc2626 !important;\n}\n.app-sidenav {\n  width: 250px;\n  background: #ffffff !important;\n  border-right: 1px solid #e5e7eb !important;\n  display: flex;\n  flex-direction: column;\n}\n.nav-list {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 8px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.nav-section {\n  padding: 18px 16px 6px 20px;\n}\n.nav-section-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #9ca3af;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 20px;\n  margin: 1px 10px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13.5px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  position: relative;\n}\n.nav-item:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item:hover .nav-icon mat-icon {\n  color: #111827;\n}\n.nav-item--active {\n  background: #ebf0ff !important;\n  color: #1a56db !important;\n}\n.nav-item--active .nav-icon mat-icon {\n  color: #1a56db !important;\n}\n.nav-item--active::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #1a56db;\n  border-radius: 0 3px 3px 0;\n}\n.nav-item--sub {\n  padding-left: 24px;\n}\n.nav-item--danger {\n  color: #dc2626;\n}\n.nav-item--danger:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.nav-item--danger .nav-icon mat-icon {\n  color: #dc2626 !important;\n}\n.nav-icon {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: color 0.15s;\n}\n.nav-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-spacer {\n  flex: 1;\n}\n.nav-bottom {\n  padding: 8px 0;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 8px;\n}\n.main-content {\n  background: #f8fafc !important;\n}\n.content-wrapper {\n  padding: 24px;\n  min-height: calc(100vh - 56px);\n  max-width: 1440px;\n}\n.dark-mode .app-toolbar {\n  background: #1e293b !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode .brand-name,\n.dark-mode .user-name {\n  color: #f1f5f9;\n}\n.dark-mode .brand-sub,\n.dark-mode .user-chevron {\n  color: #64748b;\n}\n.dark-mode .toolbar-btn {\n  color: #94a3b8 !important;\n}\n.dark-mode .toolbar-divider {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode .user-btn {\n  color: #f1f5f9 !important;\n}\n.dark-mode .user-btn:hover {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode .app-sidenav {\n  background: #111827 !important;\n  border-right-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode .nav-section-label {\n  color: #6b7280;\n}\n.dark-mode .nav-item {\n  color: #d1d5db;\n}\n.dark-mode .nav-item:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #f9fafb;\n}\n.dark-mode .nav-item--active {\n  background: rgba(26, 86, 219, 0.15) !important;\n  color: #93c5fd !important;\n}\n.dark-mode .nav-item--active .nav-icon mat-icon {\n  color: #93c5fd !important;\n}\n.dark-mode .nav-item--danger {\n  color: #fca5a5;\n}\n.dark-mode .nav-item--danger:hover {\n  background: rgba(220, 38, 38, 0.15);\n}\n.dark-mode .nav-icon mat-icon {\n  color: #9ca3af;\n}\n.dark-mode .nav-bottom {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode .main-content {\n  background: #0f172a !important;\n}\n@media (max-width: 768px) {\n  .brand-sub,\n  .user-name {\n    display: none;\n  }\n  .content-wrapper {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=agent-layout.component.css.map */\n'] }]
  }], () => [{ type: AppSettingsService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentLayoutComponent, { className: "AgentLayoutComponent", filePath: "src/app/layouts/agent-layout/agent-layout.component.ts", lineNumber: 20 });
})();
export {
  AgentLayoutComponent
};
//# sourceMappingURL=chunk-ZRJ7QTZ2.js.map
