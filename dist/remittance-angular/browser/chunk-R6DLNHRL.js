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
} from "./chunk-BJXUKWI5.js";
import {
  MatDivider,
  MatDividerModule,
  MatListModule
} from "./chunk-L2QDPUZN.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-KYKM2GTY.js";
import "./chunk-RYR4NCTK.js";
import "./chunk-4ICNUTBP.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-7GR7IV7E.js";
import "./chunk-NNRSADKN.js";
import "./chunk-3TORE4W6.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-5RGUSOA3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-BPDBYDBO.js";
import {
  CommonModule
} from "./chunk-Y4TRFXTA.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7WRAX6BO.js";

// src/app/layouts/agent-layout/agent-layout.component.ts
var AgentLayoutComponent = class _AgentLayoutComponent {
  constructor() {
    this.isDarkMode = false;
    this.drawerOpen = true;
    this.sidenavOpened = true;
  }
  toggleDrawer() {
    this.sidenavOpened = !this.sidenavOpened;
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
  static {
    this.\u0275fac = function AgentLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentLayoutComponent, selectors: [["app-agent-layout"]], decls: 88, vars: 6, consts: [["accountMenu", "matMenu"], ["sidenav", ""], [1, "layout-wrapper"], [1, "app-toolbar"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "menu-btn", 3, "click"], [1, "brand"], [1, "brand-logo"], [1, "brand-text"], [1, "brand-name"], [1, "brand-sub"], [1, "spacer"], [1, "toolbar-actions"], ["mat-icon-button", "", 1, "toolbar-btn", 3, "click", "matTooltip"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "toolbar-btn"], [1, "toolbar-divider"], ["mat-button", "", 1, "user-btn", 3, "matMenuTriggerFor"], [1, "user-avatar"], [1, "user-name"], [1, "user-chevron"], [1, "user-menu"], [1, "menu-user-info"], [1, "menu-avatar"], [1, "menu-user-name"], [1, "menu-user-role"], ["mat-menu-item", ""], ["mat-menu-item", "", "routerLink", "/", 1, "logout-item"], [1, "layout-container"], ["mode", "side", 1, "app-sidenav", 3, "opened"], [1, "nav-list"], ["routerLink", "/agent/dashboard", "routerLinkActive", "nav-item--active", 1, "nav-item"], [1, "nav-icon"], [1, "nav-label"], [1, "nav-section"], [1, "nav-section-label"], ["routerLink", "/agent/send", "routerLinkActive", "nav-item--active", 1, "nav-item", "nav-item--sub"], ["routerLink", "/agent/transactions", "routerLinkActive", "nav-item--active", 1, "nav-item", "nav-item--sub"], [1, "nav-spacer"], [1, "nav-bottom"], ["routerLink", "/", 1, "nav-item", "nav-item--danger"], [1, "main-content"], [1, "content-wrapper"]], template: function AgentLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "mat-toolbar", 3)(2, "button", 4);
        \u0275\u0275listener("click", function AgentLayoutComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleDrawer());
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "menu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "mat-icon");
        \u0275\u0275text(8, "store");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
        \u0275\u0275text(11, "RemitAgent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13, "Agent Portal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(14, "span", 10);
        \u0275\u0275elementStart(15, "div", 11)(16, "button", 12);
        \u0275\u0275listener("click", function AgentLayoutComponent_Template_button_click_16_listener() {
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
        \u0275\u0275text(25, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 17);
        \u0275\u0275text(27, "Agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-icon", 18);
        \u0275\u0275text(29, "expand_more");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "mat-menu", 19, 0)(32, "div", 20)(33, "div", 21);
        \u0275\u0275text(34, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div")(36, "div", 22);
        \u0275\u0275text(37, "Agent User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 23);
        \u0275\u0275text(39, "Sending Agent");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(40, "mat-divider");
        \u0275\u0275elementStart(41, "button", 24)(42, "mat-icon");
        \u0275\u0275text(43, "person_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span");
        \u0275\u0275text(45, "My Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(46, "mat-divider");
        \u0275\u0275elementStart(47, "button", 25)(48, "mat-icon");
        \u0275\u0275text(49, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span");
        \u0275\u0275text(51, "Sign Out");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "mat-sidenav-container", 26)(53, "mat-sidenav", 27, 1)(55, "nav", 28)(56, "a", 29)(57, "span", 30)(58, "mat-icon");
        \u0275\u0275text(59, "dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "span", 31);
        \u0275\u0275text(61, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 32)(63, "span", 33);
        \u0275\u0275text(64, "Operations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "a", 34)(66, "span", 30)(67, "mat-icon");
        \u0275\u0275text(68, "send");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "span", 31);
        \u0275\u0275text(70, "Send Money");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "a", 35)(72, "span", 30)(73, "mat-icon");
        \u0275\u0275text(74, "receipt_long");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "span", 31);
        \u0275\u0275text(76, "My Transactions");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(77, "div", 36);
        \u0275\u0275elementStart(78, "div", 37)(79, "a", 38)(80, "span", 30)(81, "mat-icon");
        \u0275\u0275text(82, "logout");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "span", 31);
        \u0275\u0275text(84, "Sign Out");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(85, "mat-sidenav-content", 39)(86, "div", 40);
        \u0275\u0275element(87, "router-outlet");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const accountMenu_r2 = \u0275\u0275reference(31);
        \u0275\u0275classProp("dark-mode", ctx.isDarkMode);
        \u0275\u0275advance(16);
        \u0275\u0275property("matTooltip", ctx.isDarkMode ? "Light mode" : "Dark mode");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isDarkMode ? "light_mode" : "dark_mode");
        \u0275\u0275advance(5);
        \u0275\u0275property("matMenuTriggerFor", accountMenu_r2);
        \u0275\u0275advance(30);
        \u0275\u0275property("opened", ctx.sidenavOpened);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
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
      MatTooltip
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  font-family: "Inter", sans-serif;\n}\n.layout-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.layout-container[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 56px;\n}\n.app-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  height: 56px;\n  background: #ffffff !important;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 0 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  color: #111827 !important;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n  margin-right: 4px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: #1a56db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  letter-spacing: -0.3px;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.toolbar-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  color: #111827 !important;\n}\n.toolbar-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.user-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px !important;\n  border-radius: 8px !important;\n  color: #111827 !important;\n  height: 40px;\n}\n.user-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.user-chevron[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #9ca3af;\n}\n.menu-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.menu-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.menu-user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-user-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.logout-item[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.logout-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.app-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  background: #ffffff !important;\n  border-right: 1px solid #e5e7eb !important;\n  display: flex;\n  flex-direction: column;\n}\n.nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 8px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.nav-section[_ngcontent-%COMP%] {\n  padding: 18px 16px 6px 20px;\n}\n.nav-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #9ca3af;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 20px;\n  margin: 1px 10px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13.5px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.nav-item--active[_ngcontent-%COMP%] {\n  background: #ebf0ff !important;\n  color: #1a56db !important;\n}\n.nav-item--active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a56db !important;\n}\n.nav-item--active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #1a56db;\n  border-radius: 0 3px 3px 0;\n}\n.nav-item--sub[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n.nav-item--danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.nav-item--danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.nav-item--danger[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: color 0.15s;\n}\n.nav-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-bottom[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 8px;\n}\n.main-content[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: calc(100vh - 56px);\n  max-width: 1440px;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-toolbar[_ngcontent-%COMP%] {\n  background: #1e293b !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n.dark-mode[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .user-chevron[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .toolbar-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%] {\n  color: #f1f5f9 !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%] {\n  background: #111827 !important;\n  border-right-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #f9fafb;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%] {\n  background: rgba(26, 86, 219, 0.15) !important;\n  color: #93c5fd !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #93c5fd !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--danger[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-item--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.15);\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark-mode[_ngcontent-%COMP%]   .nav-bottom[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  background: #0f172a !important;\n}\n@media (max-width: 768px) {\n  .brand-sub[_ngcontent-%COMP%], \n   .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=agent-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-agent-layout", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatDividerModule,
      MatTooltipModule
    ], template: `<div class="layout-wrapper" [class.dark-mode]="isDarkMode">\r
\r
  <!-- Top Bar -->\r
  <mat-toolbar class="app-toolbar">\r
    <button mat-icon-button class="menu-btn" (click)="toggleDrawer()" aria-label="Toggle menu">\r
      <mat-icon>menu</mat-icon>\r
    </button>\r
\r
    <div class="brand">\r
      <div class="brand-logo">\r
        <mat-icon>store</mat-icon>\r
      </div>\r
      <div class="brand-text">\r
        <span class="brand-name">RemitAgent</span>\r
        <span class="brand-sub">Agent Portal</span>\r
      </div>\r
    </div>\r
\r
    <span class="spacer"></span>\r
\r
    <div class="toolbar-actions">\r
      <button mat-icon-button class="toolbar-btn" (click)="toggleDarkMode()"\r
        [matTooltip]="isDarkMode ? 'Light mode' : 'Dark mode'">\r
        <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>\r
      </button>\r
\r
      <button mat-icon-button class="toolbar-btn" matTooltip="Notifications">\r
        <mat-icon>notifications_none</mat-icon>\r
      </button>\r
\r
      <div class="toolbar-divider"></div>\r
\r
      <button mat-button class="user-btn" [matMenuTriggerFor]="accountMenu">\r
        <div class="user-avatar">A</div>\r
        <span class="user-name">Agent</span>\r
        <mat-icon class="user-chevron">expand_more</mat-icon>\r
      </button>\r
    </div>\r
\r
    <mat-menu #accountMenu="matMenu" class="user-menu">\r
      <div class="menu-user-info">\r
        <div class="menu-avatar">A</div>\r
        <div>\r
          <div class="menu-user-name">Agent User</div>\r
          <div class="menu-user-role">Sending Agent</div>\r
        </div>\r
      </div>\r
      <mat-divider></mat-divider>\r
      <button mat-menu-item>\r
        <mat-icon>person_outline</mat-icon>\r
        <span>My Profile</span>\r
      </button>\r
      <mat-divider></mat-divider>\r
      <button mat-menu-item class="logout-item" routerLink="/">\r
        <mat-icon>logout</mat-icon>\r
        <span>Sign Out</span>\r
      </button>\r
    </mat-menu>\r
  </mat-toolbar>\r
\r
  <!-- Sidenav Container -->\r
  <mat-sidenav-container class="layout-container">\r
\r
    <mat-sidenav #sidenav mode="side" [opened]="sidenavOpened" class="app-sidenav">\r
      <nav class="nav-list">\r
\r
        <a class="nav-item" routerLink="/agent/dashboard" routerLinkActive="nav-item--active">\r
          <span class="nav-icon"><mat-icon>dashboard</mat-icon></span>\r
          <span class="nav-label">Dashboard</span>\r
        </a>\r
\r
        <div class="nav-section">\r
          <span class="nav-section-label">Operations</span>\r
        </div>\r
        <a class="nav-item nav-item--sub" routerLink="/agent/send" routerLinkActive="nav-item--active">\r
          <span class="nav-icon"><mat-icon>send</mat-icon></span>\r
          <span class="nav-label">Send Money</span>\r
        </a>\r
        <a class="nav-item nav-item--sub" routerLink="/agent/transactions" routerLinkActive="nav-item--active">\r
          <span class="nav-icon"><mat-icon>receipt_long</mat-icon></span>\r
          <span class="nav-label">My Transactions</span>\r
        </a>\r
\r
        <div class="nav-spacer"></div>\r
\r
        <div class="nav-bottom">\r
          <a class="nav-item nav-item--danger" routerLink="/">\r
            <span class="nav-icon"><mat-icon>logout</mat-icon></span>\r
            <span class="nav-label">Sign Out</span>\r
          </a>\r
        </div>\r
\r
      </nav>\r
    </mat-sidenav>\r
\r
    <!-- Main Content -->\r
    <mat-sidenav-content class="main-content">\r
      <div class="content-wrapper">\r
        <router-outlet></router-outlet>\r
      </div>\r
    </mat-sidenav-content>\r
\r
  </mat-sidenav-container>\r
\r
</div>\r
`, styles: ['/* src/app/layouts/agent-layout/agent-layout.component.scss */\n:host {\n  display: block;\n  height: 100vh;\n  font-family: "Inter", sans-serif;\n}\n.layout-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.layout-container {\n  flex: 1;\n  margin-top: 56px;\n}\n.app-toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  height: 56px;\n  background: #ffffff !important;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 0 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  color: #111827 !important;\n}\n.menu-btn {\n  color: #6b7280 !important;\n  margin-right: 4px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-logo {\n  width: 34px;\n  height: 34px;\n  background: #1a56db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-logo mat-icon {\n  color: #fff;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.brand-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.brand-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  letter-spacing: -0.3px;\n}\n.brand-sub {\n  font-size: 10px;\n  color: #9ca3af;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.spacer {\n  flex: 1;\n}\n.toolbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.toolbar-btn {\n  color: #6b7280 !important;\n}\n.toolbar-btn:hover {\n  background: #f8fafc !important;\n  color: #111827 !important;\n}\n.toolbar-divider {\n  width: 1px;\n  height: 24px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.user-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px !important;\n  border-radius: 8px !important;\n  color: #111827 !important;\n  height: 40px;\n}\n.user-btn:hover {\n  background: #f8fafc !important;\n}\n.user-avatar {\n  width: 30px;\n  height: 30px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.user-chevron {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #9ca3af;\n}\n.menu-user-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.menu-avatar {\n  width: 38px;\n  height: 38px;\n  background: #1a56db;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.menu-user-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-user-role {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.logout-item {\n  color: #dc2626 !important;\n}\n.logout-item mat-icon {\n  color: #dc2626 !important;\n}\n.app-sidenav {\n  width: 250px;\n  background: #ffffff !important;\n  border-right: 1px solid #e5e7eb !important;\n  display: flex;\n  flex-direction: column;\n}\n.nav-list {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 8px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.nav-section {\n  padding: 18px 16px 6px 20px;\n}\n.nav-section-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #9ca3af;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 20px;\n  margin: 1px 10px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13.5px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  position: relative;\n}\n.nav-item:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item:hover .nav-icon mat-icon {\n  color: #111827;\n}\n.nav-item--active {\n  background: #ebf0ff !important;\n  color: #1a56db !important;\n}\n.nav-item--active .nav-icon mat-icon {\n  color: #1a56db !important;\n}\n.nav-item--active::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  background: #1a56db;\n  border-radius: 0 3px 3px 0;\n}\n.nav-item--sub {\n  padding-left: 24px;\n}\n.nav-item--danger {\n  color: #dc2626;\n}\n.nav-item--danger:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.nav-item--danger .nav-icon mat-icon {\n  color: #dc2626 !important;\n}\n.nav-icon {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: color 0.15s;\n}\n.nav-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-spacer {\n  flex: 1;\n}\n.nav-bottom {\n  padding: 8px 0;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 8px;\n}\n.main-content {\n  background: #f8fafc !important;\n}\n.content-wrapper {\n  padding: 24px;\n  min-height: calc(100vh - 56px);\n  max-width: 1440px;\n}\n.dark-mode .app-toolbar {\n  background: #1e293b !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode .brand-name,\n.dark-mode .user-name {\n  color: #f1f5f9;\n}\n.dark-mode .brand-sub,\n.dark-mode .user-chevron {\n  color: #64748b;\n}\n.dark-mode .toolbar-btn {\n  color: #94a3b8 !important;\n}\n.dark-mode .toolbar-divider {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode .user-btn {\n  color: #f1f5f9 !important;\n}\n.dark-mode .user-btn:hover {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode .app-sidenav {\n  background: #111827 !important;\n  border-right-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode .nav-section-label {\n  color: #6b7280;\n}\n.dark-mode .nav-item {\n  color: #d1d5db;\n}\n.dark-mode .nav-item:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #f9fafb;\n}\n.dark-mode .nav-item--active {\n  background: rgba(26, 86, 219, 0.15) !important;\n  color: #93c5fd !important;\n}\n.dark-mode .nav-item--active .nav-icon mat-icon {\n  color: #93c5fd !important;\n}\n.dark-mode .nav-item--danger {\n  color: #fca5a5;\n}\n.dark-mode .nav-item--danger:hover {\n  background: rgba(220, 38, 38, 0.15);\n}\n.dark-mode .nav-icon mat-icon {\n  color: #9ca3af;\n}\n.dark-mode .nav-bottom {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode .main-content {\n  background: #0f172a !important;\n}\n@media (max-width: 768px) {\n  .brand-sub,\n  .user-name {\n    display: none;\n  }\n  .content-wrapper {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=agent-layout.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentLayoutComponent, { className: "AgentLayoutComponent", filePath: "src/app/layouts/agent-layout/agent-layout.component.ts", lineNumber: 31 });
})();
export {
  AgentLayoutComponent
};
//# sourceMappingURL=chunk-R6DLNHRL.js.map
