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
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatListModule,
  MatNavList
} from "./chunk-L2QDPUZN.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-KYKM2GTY.js";
import "./chunk-RYR4NCTK.js";
import "./chunk-4ICNUTBP.js";
import "./chunk-NNRSADKN.js";
import "./chunk-3TORE4W6.js";
import {
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

// src/app/layouts/customer-layout/customer-layout.component.ts
var CustomerLayoutComponent = class _CustomerLayoutComponent {
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
    this.\u0275fac = function CustomerLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerLayoutComponent, selectors: [["app-customer-layout"]], decls: 55, vars: 5, consts: [["accountMenu", "matMenu"], ["sidenav", ""], [1, "layout-container"], ["color", "primary", 1, "app-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "portal-icon"], [1, "portal-title"], [1, "spacer"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", "routerLink", "/"], ["mode", "side", 1, "app-sidenav", 3, "opened"], ["mat-list-item", "", "routerLink", "/customer/dashboard", "routerLinkActive", "active-link"], ["matListItemIcon", ""], ["matListItemTitle", ""], ["mat-list-item", "", "routerLink", "/customer/send", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/customer/transactions", "routerLinkActive", "active-link"], [1, "nav-divider"], ["mat-list-item", "", "routerLink", "/"], [1, "main-content"]], template: function CustomerLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-sidenav-container", 2)(1, "mat-toolbar", 3)(2, "button", 4);
        \u0275\u0275listener("click", function CustomerLayoutComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleDrawer());
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "menu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-icon", 5);
        \u0275\u0275text(6, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8, "CUSTOMER PORTAL");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "span", 7);
        \u0275\u0275elementStart(10, "button", 4);
        \u0275\u0275listener("click", function CustomerLayoutComponent_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleDarkMode());
        });
        \u0275\u0275elementStart(11, "mat-icon");
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 8)(14, "mat-icon");
        \u0275\u0275text(15, "account_circle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "mat-menu", null, 0)(18, "button", 9)(19, "mat-icon");
        \u0275\u0275text(20, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span");
        \u0275\u0275text(22, "Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "mat-divider");
        \u0275\u0275elementStart(24, "button", 10)(25, "mat-icon");
        \u0275\u0275text(26, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span");
        \u0275\u0275text(28, "Logout");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "mat-sidenav", 11, 1)(31, "mat-nav-list")(32, "a", 12)(33, "mat-icon", 13);
        \u0275\u0275text(34, "dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 14);
        \u0275\u0275text(36, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "a", 15)(38, "mat-icon", 13);
        \u0275\u0275text(39, "send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 14);
        \u0275\u0275text(41, "Send Money");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "a", 16)(43, "mat-icon", 13);
        \u0275\u0275text(44, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 14);
        \u0275\u0275text(46, "My Transactions");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(47, "mat-divider", 17);
        \u0275\u0275elementStart(48, "a", 18)(49, "mat-icon", 13);
        \u0275\u0275text(50, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 14);
        \u0275\u0275text(52, "Logout");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(53, "mat-sidenav-content", 19);
        \u0275\u0275element(54, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const accountMenu_r2 = \u0275\u0275reference(17);
        \u0275\u0275classProp("dark-mode", ctx.isDarkMode);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.isDarkMode ? "light_mode" : "dark_mode");
        \u0275\u0275advance();
        \u0275\u0275property("matMenuTriggerFor", accountMenu_r2);
        \u0275\u0275advance(16);
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
      MatNavList,
      MatListItem,
      MatListItemIcon,
      MatDivider,
      MatListItemTitle,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatIconButton,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDividerModule
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  font-family:\n    "Inter",\n    "Helvetica",\n    "Arial",\n    sans-serif;\n}\n.layout-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.app-toolbar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #4A148C,\n      #6A1B9A) !important;\n  color: #ffffff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  height: 56px;\n  box-shadow:\n    0 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0 4px 5px 0 rgba(0, 0, 0, 0.14),\n    0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.app-toolbar[_ngcontent-%COMP%]   .portal-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.app-toolbar[_ngcontent-%COMP%]   .portal-title[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 1.25rem;\n}\n.app-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.app-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.app-sidenav[_ngcontent-%COMP%] {\n  width: 260px;\n  margin-top: 56px;\n  background: #FAFAFA;\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n}\n.app-sidenav[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%] {\n  border-radius: 0 24px 24px 0;\n  margin: 2px 8px 2px 0;\n  height: 44px;\n}\n.app-sidenav[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(74, 20, 140, 0.08);\n}\n.app-sidenav[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.app-sidenav[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%] {\n  background-color: rgba(74, 20, 140, 0.12) !important;\n  color: #4A148C;\n}\n.app-sidenav[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4A148C;\n}\n.app-sidenav[_ngcontent-%COMP%]   .nav-divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  min-height: 100vh;\n  padding-top: 72px !important;\n  background: #F5F5F5;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%] {\n  background: #1A1A2E;\n  border-right-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.87);\n}\n.dark-mode[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(206, 147, 216, 0.12);\n}\n.dark-mode[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.54);\n}\n.dark-mode[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%] {\n  background-color: rgba(206, 147, 216, 0.2) !important;\n  color: #CE93D8;\n}\n.dark-mode[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #CE93D8;\n}\n.dark-mode[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  background: #121212;\n}\n/*# sourceMappingURL=customer-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-customer-layout", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatDividerModule
    ], template: `<mat-sidenav-container class="layout-container" [class.dark-mode]="isDarkMode">\r
  <!-- Toolbar -->\r
  <mat-toolbar class="app-toolbar" color="primary">\r
    <button mat-icon-button (click)="toggleDrawer()">\r
      <mat-icon>menu</mat-icon>\r
    </button>\r
    <mat-icon class="portal-icon">person</mat-icon>\r
    <span class="portal-title">CUSTOMER PORTAL</span>\r
    <span class="spacer"></span>\r
    <button mat-icon-button (click)="toggleDarkMode()">\r
      <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>\r
    </button>\r
    <button mat-icon-button [matMenuTriggerFor]="accountMenu">\r
      <mat-icon>account_circle</mat-icon>\r
    </button>\r
    <mat-menu #accountMenu="matMenu">\r
      <button mat-menu-item>\r
        <mat-icon>person</mat-icon>\r
        <span>Profile</span>\r
      </button>\r
      <mat-divider></mat-divider>\r
      <button mat-menu-item routerLink="/">\r
        <mat-icon>logout</mat-icon>\r
        <span>Logout</span>\r
      </button>\r
    </mat-menu>\r
  </mat-toolbar>\r
\r
  <!-- Sidenav -->\r
  <mat-sidenav #sidenav mode="side" [opened]="sidenavOpened" class="app-sidenav">\r
    <mat-nav-list>\r
      <a mat-list-item routerLink="/customer/dashboard" routerLinkActive="active-link">\r
        <mat-icon matListItemIcon>dashboard</mat-icon>\r
        <span matListItemTitle>Dashboard</span>\r
      </a>\r
      <a mat-list-item routerLink="/customer/send" routerLinkActive="active-link">\r
        <mat-icon matListItemIcon>send</mat-icon>\r
        <span matListItemTitle>Send Money</span>\r
      </a>\r
      <a mat-list-item routerLink="/customer/transactions" routerLinkActive="active-link">\r
        <mat-icon matListItemIcon>history</mat-icon>\r
        <span matListItemTitle>My Transactions</span>\r
      </a>\r
\r
      <mat-divider class="nav-divider"></mat-divider>\r
\r
      <a mat-list-item routerLink="/">\r
        <mat-icon matListItemIcon>logout</mat-icon>\r
        <span matListItemTitle>Logout</span>\r
      </a>\r
    </mat-nav-list>\r
  </mat-sidenav>\r
\r
  <!-- Main Content -->\r
  <mat-sidenav-content class="main-content">\r
    <router-outlet></router-outlet>\r
  </mat-sidenav-content>\r
</mat-sidenav-container>\r
`, styles: ['/* src/app/layouts/customer-layout/customer-layout.component.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  font-family:\n    "Inter",\n    "Helvetica",\n    "Arial",\n    sans-serif;\n}\n.layout-container {\n  height: 100vh;\n}\n.app-toolbar {\n  background:\n    linear-gradient(\n      90deg,\n      #4A148C,\n      #6A1B9A) !important;\n  color: #ffffff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  height: 56px;\n  box-shadow:\n    0 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0 4px 5px 0 rgba(0, 0, 0, 0.14),\n    0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.app-toolbar .portal-icon {\n  margin-left: 8px;\n}\n.app-toolbar .portal-title {\n  margin-left: 8px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 1.25rem;\n}\n.app-toolbar .spacer {\n  flex: 1 1 auto;\n}\n.app-toolbar button {\n  color: #ffffff;\n}\n.app-sidenav {\n  width: 260px;\n  margin-top: 56px;\n  background: #FAFAFA;\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n}\n.app-sidenav .mat-mdc-list-item {\n  border-radius: 0 24px 24px 0;\n  margin: 2px 8px 2px 0;\n  height: 44px;\n}\n.app-sidenav .mat-mdc-list-item:hover {\n  background-color: rgba(74, 20, 140, 0.08);\n}\n.app-sidenav .mat-mdc-list-item mat-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n.app-sidenav .active-link {\n  background-color: rgba(74, 20, 140, 0.12) !important;\n  color: #4A148C;\n}\n.app-sidenav .active-link mat-icon {\n  color: #4A148C;\n}\n.app-sidenav .nav-divider {\n  margin: 8px 0;\n}\n.main-content {\n  padding: 16px;\n  min-height: 100vh;\n  padding-top: 72px !important;\n  background: #F5F5F5;\n}\n.dark-mode .app-sidenav {\n  background: #1A1A2E;\n  border-right-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode .app-sidenav .mat-mdc-list-item {\n  color: rgba(255, 255, 255, 0.87);\n}\n.dark-mode .app-sidenav .mat-mdc-list-item:hover {\n  background-color: rgba(206, 147, 216, 0.12);\n}\n.dark-mode .app-sidenav .mat-mdc-list-item mat-icon {\n  color: rgba(255, 255, 255, 0.54);\n}\n.dark-mode .app-sidenav .active-link {\n  background-color: rgba(206, 147, 216, 0.2) !important;\n  color: #CE93D8;\n}\n.dark-mode .app-sidenav .active-link mat-icon {\n  color: #CE93D8;\n}\n.dark-mode .main-content {\n  background: #121212;\n}\n/*# sourceMappingURL=customer-layout.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerLayoutComponent, { className: "CustomerLayoutComponent", filePath: "src/app/layouts/customer-layout/customer-layout.component.ts", lineNumber: 29 });
})();
export {
  CustomerLayoutComponent
};
//# sourceMappingURL=chunk-IFHA5PXQ.js.map
