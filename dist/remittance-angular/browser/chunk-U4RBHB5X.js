import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-FTNGEOQD.js";
import {
  FormsModule
} from "./chunk-6I2CTDTD.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-FEHYQLJK.js";
import {
  Component,
  ElementRef,
  HostListener,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XQC2OG7J.js";

// src/app/layouts/customer-layout/customer-layout.component.ts
var _c0 = (a0, a1) => ({ "w-64": a0, "w-0 lg:w-16": a1 });
var _c1 = (a0, a1) => ({ "lg:ml-64": a0, "lg:ml-16": a1 });
function CustomerLayoutComponent__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function CustomerLayoutComponent__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "path", 37);
    \u0275\u0275elementEnd();
  }
}
function CustomerLayoutComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 43);
    \u0275\u0275text(9, "Customer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 44)(11, "a", 45);
    \u0275\u0275listener("click", function CustomerLayoutComponent_div_28_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showUserMenu = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 46);
    \u0275\u0275element(13, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " My Profile ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 47)(16, "a", 48);
    \u0275\u0275listener("click", function CustomerLayoutComponent_div_28_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.logout();
      return \u0275\u0275resetView(ctx_r1.showUserMenu = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 46);
    \u0275\u0275element(18, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Sign Out ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.userInitial, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.userName);
  }
}
function CustomerLayoutComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function CustomerLayoutComponent_div_29_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDrawer());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerLayoutComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, " Menu ");
    \u0275\u0275elementEnd();
  }
}
function CustomerLayoutComponent_a_33_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function CustomerLayoutComponent_a_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 52);
    \u0275\u0275template(2, CustomerLayoutComponent_a_33_span_2_Template, 2, 1, "span", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r4.route)("title", !ctx_r1.sidenavOpened ? item_r4.label : "");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r4.svgPath, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sidenavOpened);
  }
}
function CustomerLayoutComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign Out");
    \u0275\u0275elementEnd();
  }
}
var NAV_ITEMS = [
  {
    label: "Dashboard",
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/>',
    route: "/customer/dashboard"
  },
  {
    label: "Send Money",
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>',
    route: "/customer/send"
  },
  {
    label: "My Transactions",
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>',
    route: "/customer/transactions"
  }
];
var CustomerLayoutComponent = class _CustomerLayoutComponent {
  constructor(elRef) {
    this.elRef = elRef;
    this.isDarkMode = false;
    this.sidenavOpened = false;
    this.showUserMenu = false;
    this.navItems = NAV_ITEMS;
    this.userName = "Customer";
    this.userInitial = "C";
  }
  ngOnInit() {
    this.isDarkMode = localStorage.getItem("darkMode") === "true";
    this.applyBodyClass();
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      this.sidenavOpened = true;
    }
  }
  /** Close user dropdown when clicking outside */
  onDocumentClick(event) {
    if (this.showUserMenu) {
      const target = event.target;
      const menuEl = this.elRef.nativeElement.querySelector(".user-menu-container");
      if (menuEl && !menuEl.contains(target)) {
        this.showUserMenu = false;
      }
    }
  }
  toggleDrawer() {
    this.sidenavOpened = !this.sidenavOpened;
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem("darkMode", String(this.isDarkMode));
    this.applyBodyClass();
  }
  logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  applyBodyClass() {
    document.body.classList.toggle("dark-mode", this.isDarkMode);
    document.documentElement.classList.toggle("dark", this.isDarkMode);
  }
  static {
    this.\u0275fac = function CustomerLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerLayoutComponent)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerLayoutComponent, selectors: [["app-customer-layout"]], hostBindings: function CustomerLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CustomerLayoutComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 43, vars: 23, consts: [[1, "layout-wrapper"], [1, "fixed", "top-0", "left-0", "right-0", "z-50", "h-16", "bg-white", "dark:bg-surface-900", "border-b", "border-surface-200", "dark:border-surface-700/50", "shadow-soft", "flex", "items-center", "px-4", "gap-2"], ["aria-label", "Toggle menu", 1, "p-2", "rounded-lg", "text-surface-500", "hover:text-surface-900", "dark:text-surface-400", "dark:hover:text-surface-100", "hover:bg-surface-100", "dark:hover:bg-surface-800", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"], [1, "flex", "items-center", "gap-2.5"], [1, "w-8", "h-8", "bg-brand-600", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"], [1, "flex", "flex-col", "leading-none"], [1, "text-[15px]", "font-bold", "text-surface-900", "dark:text-surface-100", "tracking-tight"], [1, "text-[10px]", "font-medium", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "mt-0.5"], [1, "flex-1"], [1, "flex", "items-center", "gap-1"], [1, "p-2", "rounded-lg", "text-surface-500", "hover:text-surface-900", "dark:text-surface-400", "dark:hover:text-surface-100", "hover:bg-surface-100", "dark:hover:bg-surface-800", "transition-colors", 3, "click", "title"], ["class", "w-5 h-5", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "w-px", "h-6", "bg-surface-200", "dark:bg-surface-700", "mx-2"], [1, "relative", "user-menu-container"], [1, "flex", "items-center", "gap-2", "px-2", "py-1.5", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-800", "transition-colors", 3, "click"], [1, "w-8", "h-8", "bg-brand-600", "rounded-full", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold", "flex-shrink-0"], [1, "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100", "hidden", "md:block"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-surface-400", "hidden", "md:block", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m19.5 8.25-7.5 7.5-7.5-7.5"], ["class", "absolute right-0 mt-2 w-56 bg-white dark:bg-surface-800 rounded-xl shadow-elevated border border-surface-200 dark:border-surface-700 py-1 animate-slide-up z-50", 4, "ngIf"], ["class", "fixed inset-0 z-30 bg-black/50 backdrop-blur-xs lg:hidden transition-opacity", 3, "click", 4, "ngIf"], [1, "fixed", "top-16", "bottom-0", "left-0", "z-40", "bg-white", "dark:bg-surface-900", "border-r", "border-surface-200", "dark:border-surface-700/50", "flex", "flex-col", "transition-all", "duration-300", "overflow-hidden", 3, "ngClass"], [1, "flex", "flex-col", "flex-1", "overflow-y-auto", "overflow-x-hidden", "py-2"], ["class", "text-[10px] font-semibold uppercase tracking-widest text-surface-400 dark:text-surface-500 px-5 pt-4 pb-1", 4, "ngIf"], ["class", "nav-link flex items-center gap-2.5 px-5 py-2 mx-2 my-0.5 rounded-lg text-[13.5px] font-medium text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors relative", "routerLinkActive", "active-link", 3, "routerLink", "title", 4, "ngFor", "ngForOf"], [1, "border-t", "border-surface-100", "dark:border-surface-700/50", "mt-2", "pt-2", "pb-2"], [1, "flex", "items-center", "gap-2.5", "px-5", "py-2", "mx-2", "rounded-lg", "text-[13.5px]", "font-medium", "text-danger-600", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-600/10", "transition-colors", "cursor-pointer", 3, "click", "title"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-[18px]", "h-[18px]", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"], [4, "ngIf"], [1, "pt-16", "transition-all", "duration-300", "min-h-screen", "bg-surface-50", "dark:bg-surface-900/50", 3, "ngClass"], [1, "p-6", "max-w-[1440px]", "animate-fade-in"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"], [1, "absolute", "right-0", "mt-2", "w-56", "bg-white", "dark:bg-surface-800", "rounded-xl", "shadow-elevated", "border", "border-surface-200", "dark:border-surface-700", "py-1", "animate-slide-up", "z-50"], [1, "px-4", "py-3", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "bg-brand-600", "rounded-full", "flex", "items-center", "justify-center", "text-white", "text-sm", "font-bold", "flex-shrink-0"], [1, "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "text-surface-400"], [1, "py-1"], ["routerLink", "/customer/profile", 1, "flex", "items-center", "gap-3", "px-4", "py-2", "text-sm", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition-colors", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "border-t", "border-surface-100", "dark:border-surface-700", "py-1"], [1, "flex", "items-center", "gap-3", "px-4", "py-2", "text-sm", "text-danger-600", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-600/10", "transition-colors", "cursor-pointer", 3, "click"], [1, "fixed", "inset-0", "z-30", "bg-black/50", "backdrop-blur-xs", "lg:hidden", "transition-opacity", 3, "click"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-widest", "text-surface-400", "dark:text-surface-500", "px-5", "pt-4", "pb-1"], ["routerLinkActive", "active-link", 1, "nav-link", "flex", "items-center", "gap-2.5", "px-5", "py-2", "mx-2", "my-0.5", "rounded-lg", "text-[13.5px]", "font-medium", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-800", "transition-colors", "relative", 3, "routerLink", "title"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-[18px]", "h-[18px]", "flex-shrink-0", 3, "innerHTML"], ["class", "truncate", 4, "ngIf"], [1, "truncate"]], template: function CustomerLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
        \u0275\u0275listener("click", function CustomerLayoutComponent_Template_button_click_2_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "path", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 7);
        \u0275\u0275element(8, "path", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "div", 9)(10, "span", 10);
        \u0275\u0275text(11, "RemitPortal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 11);
        \u0275\u0275text(13, "Customer Portal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(14, "div", 12);
        \u0275\u0275elementStart(15, "div", 13)(16, "button", 14);
        \u0275\u0275listener("click", function CustomerLayoutComponent_Template_button_click_16_listener() {
          return ctx.toggleDarkMode();
        });
        \u0275\u0275template(17, CustomerLayoutComponent__svg_svg_17_Template, 2, 0, "svg", 15)(18, CustomerLayoutComponent__svg_svg_18_Template, 2, 0, "svg", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "div", 16);
        \u0275\u0275elementStart(20, "div", 17)(21, "button", 18);
        \u0275\u0275listener("click", function CustomerLayoutComponent_Template_button_click_21_listener() {
          return ctx.showUserMenu = !ctx.showUserMenu;
        });
        \u0275\u0275elementStart(22, "div", 19);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 20);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 21);
        \u0275\u0275element(27, "path", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, CustomerLayoutComponent_div_28_Template, 20, 2, "div", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(29, CustomerLayoutComponent_div_29_Template, 1, 0, "div", 24);
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(30, "aside", 25)(31, "nav", 26);
        \u0275\u0275template(32, CustomerLayoutComponent_div_32_Template, 2, 0, "div", 27)(33, CustomerLayoutComponent_a_33_Template, 3, 4, "a", 28);
        \u0275\u0275element(34, "div", 12);
        \u0275\u0275elementStart(35, "div", 29)(36, "a", 30);
        \u0275\u0275listener("click", function CustomerLayoutComponent_Template_a_click_36_listener() {
          return ctx.logout();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 31);
        \u0275\u0275element(38, "path", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, CustomerLayoutComponent_span_39_Template, 2, 0, "span", 33);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(40, "main", 34)(41, "div", 35);
        \u0275\u0275element(42, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("dark", ctx.isDarkMode);
        \u0275\u0275advance(16);
        \u0275\u0275property("title", ctx.isDarkMode ? "Light mode" : "Dark mode");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isDarkMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isDarkMode);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.userInitial, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance();
        \u0275\u0275classProp("rotate-180", ctx.showUserMenu);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showUserMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sidenavOpened);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(17, _c0, ctx.sidenavOpened, !ctx.sidenavOpened));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.sidenavOpened);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", !ctx.sidenavOpened ? "Sign Out" : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.sidenavOpened);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(20, _c1, ctx.sidenavOpened, !ctx.sidenavOpened));
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.active-link[_ngcontent-%COMP%] {\n  background-color: var(--tw-brand-50, #eff6ff) !important;\n  color: var(--tw-brand-700, #1d4ed8) !important;\n}\n.active-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--tw-brand-600, #2563eb) !important;\n}\n.active-link[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: var(--tw-brand-600, #2563eb);\n  border-radius: 0 3px 3px 0;\n}\n.dark[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%] {\n  background-color: rgba(59, 130, 246, 0.15) !important;\n  color: var(--tw-brand-400, #60a5fa) !important;\n}\n.dark[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--tw-brand-400, #60a5fa) !important;\n}\n/*# sourceMappingURL=customer-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-customer-layout", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule
    ], template: `<div class="layout-wrapper" [class.dark]="isDarkMode">

  <!-- \u2500\u2500 Top Bar \u2500\u2500 -->
  <header class="fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700/50 shadow-soft flex items-center px-4 gap-2">

    <!-- Hamburger -->
    <button
      (click)="toggleDrawer()"
      class="p-2 rounded-lg text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
      aria-label="Toggle menu">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
      </svg>
    </button>

    <!-- Brand -->
    <div class="flex items-center gap-2.5">
      <div class="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
        </svg>
      </div>
      <div class="flex flex-col leading-none">
        <span class="text-[15px] font-bold text-surface-900 dark:text-surface-100 tracking-tight">RemitPortal</span>
        <span class="text-[10px] font-medium uppercase tracking-wider text-surface-400 dark:text-surface-500 mt-0.5">Customer Portal</span>
      </div>
    </div>

    <!-- Spacer -->
    <div class="flex-1"></div>

    <!-- Right actions -->
    <div class="flex items-center gap-1">
      <!-- Dark mode toggle -->
      <button
        (click)="toggleDarkMode()"
        class="p-2 rounded-lg text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
        [title]="isDarkMode ? 'Light mode' : 'Dark mode'">
        <!-- Sun icon (dark mode active) -->
        <svg *ngIf="isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
        </svg>
        <!-- Moon icon (light mode active) -->
        <svg *ngIf="!isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
        </svg>
      </button>

      <!-- Divider -->
      <div class="w-px h-6 bg-surface-200 dark:bg-surface-700 mx-2"></div>

      <!-- User menu -->
      <div class="relative user-menu-container">
        <button
          (click)="showUserMenu = !showUserMenu"
          class="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors">
          <div class="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {{ userInitial }}
          </div>
          <span class="text-sm font-semibold text-surface-900 dark:text-surface-100 hidden md:block">{{ userName }}</span>
          <svg class="w-4 h-4 text-surface-400 hidden md:block transition-transform" [class.rotate-180]="showUserMenu" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
          </svg>
        </button>

        <!-- Dropdown -->
        <div
          *ngIf="showUserMenu"
          class="absolute right-0 mt-2 w-56 bg-white dark:bg-surface-800 rounded-xl shadow-elevated border border-surface-200 dark:border-surface-700 py-1 animate-slide-up z-50">
          <!-- User info -->
          <div class="px-4 py-3 border-b border-surface-100 dark:border-surface-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {{ userInitial }}
              </div>
              <div>
                <div class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ userName }}</div>
                <div class="text-xs text-surface-400">Customer</div>
              </div>
            </div>
          </div>
          <!-- Menu items -->
          <div class="py-1">
            <a routerLink="/customer/profile" (click)="showUserMenu = false"
              class="flex items-center gap-3 px-4 py-2 text-sm text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
              </svg>
              My Profile
            </a>
          </div>
          <div class="border-t border-surface-100 dark:border-surface-700 py-1">
            <a
              (click)="logout(); showUserMenu = false"
              class="flex items-center gap-3 px-4 py-2 text-sm text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-600/10 transition-colors cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/>
              </svg>
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- \u2500\u2500 Mobile Backdrop \u2500\u2500 -->
  <div
    *ngIf="sidenavOpened"
    (click)="toggleDrawer()"
    class="fixed inset-0 z-30 bg-black/50 backdrop-blur-xs lg:hidden transition-opacity">
  </div>

  <!-- \u2500\u2500 Sidebar \u2500\u2500 -->
  <aside
    class="fixed top-16 bottom-0 left-0 z-40 bg-white dark:bg-surface-900 border-r border-surface-200 dark:border-surface-700/50 flex flex-col transition-all duration-300 overflow-hidden"
    [ngClass]="{
      'w-64': sidenavOpened,
      'w-0 lg:w-16': !sidenavOpened
    }">

    <!-- Nav Links -->
    <nav class="flex flex-col flex-1 overflow-y-auto overflow-x-hidden py-2">

      <!-- Section label -->
      <div *ngIf="sidenavOpened" class="text-[10px] font-semibold uppercase tracking-widest text-surface-400 dark:text-surface-500 px-5 pt-4 pb-1">
        Menu
      </div>

      <a *ngFor="let item of navItems"
        class="nav-link flex items-center gap-2.5 px-5 py-2 mx-2 my-0.5 rounded-lg text-[13.5px] font-medium text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors relative"
        [routerLink]="item.route" routerLinkActive="active-link"
        [title]="!sidenavOpened ? item.label : ''">
        <svg class="w-[18px] h-[18px] flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" [innerHTML]="item.svgPath"></svg>
        <span *ngIf="sidenavOpened" class="truncate">{{ item.label }}</span>
      </a>

      <!-- Spacer -->
      <div class="flex-1"></div>

      <!-- Sign Out -->
      <div class="border-t border-surface-100 dark:border-surface-700/50 mt-2 pt-2 pb-2">
        <a
          (click)="logout()"
          class="flex items-center gap-2.5 px-5 py-2 mx-2 rounded-lg text-[13.5px] font-medium text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-600/10 transition-colors cursor-pointer"
          [title]="!sidenavOpened ? 'Sign Out' : ''">
          <svg class="w-[18px] h-[18px] flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/>
          </svg>
          <span *ngIf="sidenavOpened">Sign Out</span>
        </a>
      </div>
    </nav>
  </aside>

  <!-- \u2500\u2500 Main Content \u2500\u2500 -->
  <main
    class="pt-16 transition-all duration-300 min-h-screen bg-surface-50 dark:bg-surface-900/50"
    [ngClass]="{
      'lg:ml-64': sidenavOpened,
      'lg:ml-16': !sidenavOpened
    }">
    <div class="p-6 max-w-[1440px] animate-fade-in">
      <router-outlet></router-outlet>
    </div>
  </main>

</div>
`, styles: ['/* src/app/layouts/customer-layout/customer-layout.component.scss */\n:host {\n  display: block;\n}\n.active-link {\n  background-color: var(--tw-brand-50, #eff6ff) !important;\n  color: var(--tw-brand-700, #1d4ed8) !important;\n}\n.active-link svg {\n  color: var(--tw-brand-600, #2563eb) !important;\n}\n.active-link::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: var(--tw-brand-600, #2563eb);\n  border-radius: 0 3px 3px 0;\n}\n.dark .active-link {\n  background-color: rgba(59, 130, 246, 0.15) !important;\n  color: var(--tw-brand-400, #60a5fa) !important;\n}\n.dark .active-link svg {\n  color: var(--tw-brand-400, #60a5fa) !important;\n}\n/*# sourceMappingURL=customer-layout.component.css.map */\n'] }]
  }], () => [{ type: ElementRef }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerLayoutComponent, { className: "CustomerLayoutComponent", filePath: "src/app/layouts/customer-layout/customer-layout.component.ts", lineNumber: 41 });
})();
export {
  CustomerLayoutComponent
};
//# sourceMappingURL=chunk-U4RBHB5X.js.map
