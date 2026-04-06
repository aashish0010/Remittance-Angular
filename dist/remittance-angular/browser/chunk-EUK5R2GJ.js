import {
  ExportService
} from "./chunk-FDFRARSK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-D3SW2Q36.js";
import {
  NotificationService
} from "./chunk-3AICMGEY.js";
import "./chunk-TLG473HR.js";
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
  Subject,
  debounceTime,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EU7HC72Q.js";
import "./chunk-S5KMCARS.js";

// src/app/pages/admin/routing/routing.component.ts
function RoutingComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "circle", 16)(3, "path", 17);
    \u0275\u0275elementEnd()();
  }
}
function RoutingComponent_div_17_tr_26__svg_path_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 65);
  }
}
function RoutingComponent_div_17_tr_26__svg_path_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 66);
  }
}
function RoutingComponent_div_17_tr_26_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 67);
    \u0275\u0275listener("click", function RoutingComponent_div_17_tr_26_ng_container_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteConfirmId = c_r4.id);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 57);
    \u0275\u0275element(3, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function RoutingComponent_div_17_tr_26_span_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 69)(1, "span", 70);
    \u0275\u0275text(2, "Delete?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 71);
    \u0275\u0275listener("click", function RoutingComponent_div_17_tr_26_span_30_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.deleteCorridor(c_r4);
      return \u0275\u0275resetView(ctx_r1.deleteConfirmId = null);
    });
    \u0275\u0275text(4, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 72);
    \u0275\u0275listener("click", function RoutingComponent_div_17_tr_26_span_30_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteConfirmId = null);
    });
    \u0275\u0275text(6, "No");
    \u0275\u0275elementEnd()();
  }
}
function RoutingComponent_div_17_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 46)(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 50)(12, "span", 51);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 50)(15, "span", 52);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 50)(18, "div", 53)(19, "button", 54);
    \u0275\u0275listener("click", function RoutingComponent_div_17_tr_26_Template_button_click_19_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditCorridor(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 4);
    \u0275\u0275element(21, "path", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 56);
    \u0275\u0275listener("click", function RoutingComponent_div_17_tr_26_Template_button_click_22_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPartnerManagement(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 57);
    \u0275\u0275element(24, "path", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 59);
    \u0275\u0275listener("click", function RoutingComponent_div_17_tr_26_Template_button_click_25_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCorridor(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 60);
    \u0275\u0275template(27, RoutingComponent_div_17_tr_26__svg_path_27_Template, 1, 0, "path", 61)(28, RoutingComponent_div_17_tr_26__svg_path_28_Template, 1, 0, "path", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, RoutingComponent_div_17_tr_26_ng_container_29_Template, 4, 0, "ng-container", 63)(30, RoutingComponent_div_17_tr_26_span_30_Template, 7, 0, "span", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.sendingAgentName || "All");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.sourceCountry);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.sourceCurrency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.destinationCountry);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.destinationCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((c_r4.payoutPartners == null ? null : c_r4.payoutPartners.length) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", c_r4.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(9);
    \u0275\u0275attribute("aria-label", c_r4.isActive ? "Deactivate corridor" : "Activate corridor");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r4.isActive ? "text-green-600 dark:text-green-400" : "text-surface-400 dark:text-surface-500");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deleteConfirmId !== c_r4.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deleteConfirmId === c_r4.id);
  }
}
function RoutingComponent_div_17_div_28__svg_path_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 65);
  }
}
function RoutingComponent_div_17_div_28__svg_path_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 66);
  }
}
function RoutingComponent_div_17_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "span", 75);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 76)(7, "div", 77)(8, "span", 78);
    \u0275\u0275text(9, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 79);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 77)(13, "span", 78);
    \u0275\u0275text(14, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 79);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 77)(18, "span", 78);
    \u0275\u0275text(19, "Partners");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 80);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 81)(23, "button", 82);
    \u0275\u0275listener("click", function RoutingComponent_div_17_div_28_Template_button_click_23_listener() {
      const c_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditCorridor(c_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 83);
    \u0275\u0275element(25, "path", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "button", 85);
    \u0275\u0275listener("click", function RoutingComponent_div_17_div_28_Template_button_click_26_listener() {
      const c_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPartnerManagement(c_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 83);
    \u0275\u0275element(28, "path", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "button", 87);
    \u0275\u0275listener("click", function RoutingComponent_div_17_div_28_Template_button_click_29_listener() {
      const c_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCorridor(c_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 88);
    \u0275\u0275template(31, RoutingComponent_div_17_div_28__svg_path_31_Template, 1, 0, "path", 61)(32, RoutingComponent_div_17_div_28__svg_path_32_Template, 1, 0, "path", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "button", 89);
    \u0275\u0275listener("click", function RoutingComponent_div_17_div_28_Template_button_click_33_listener() {
      const c_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCorridor(c_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 83);
    \u0275\u0275element(35, "path", 90);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r8.sourceCountry, " \u2192 ", c_r8.destinationCountry, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r8.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r8.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r8.sendingAgentName || "All");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", c_r8.sourceCurrency, " \u2192 ", c_r8.destinationCurrency, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((c_r8.payoutPartners == null ? null : c_r8.payoutPartners.length) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", c_r8.isActive ? "text-green-600 dark:text-green-400" : "text-surface-400 dark:text-surface-500");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r8.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r8.isActive);
  }
}
function RoutingComponent_div_17_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1, " No corridors found. ");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 20);
    \u0275\u0275element(3, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RoutingComponent_div_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchDebounce.next($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 23)(6, "table", 24)(7, "thead")(8, "tr", 25)(9, "th", 26);
    \u0275\u0275text(10, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 26);
    \u0275\u0275text(12, "Source Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 26);
    \u0275\u0275text(14, "Source Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 26);
    \u0275\u0275text(16, "Dest Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 26);
    \u0275\u0275text(18, "Dest Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 26);
    \u0275\u0275text(20, "Partners");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 26);
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 26);
    \u0275\u0275text(24, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, RoutingComponent_div_17_tr_26_Template, 31, 14, "tr", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 28);
    \u0275\u0275template(28, RoutingComponent_div_17_div_28_Template, 36, 11, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, RoutingComponent_div_17_div_29_Template, 2, 0, "div", 30);
    \u0275\u0275elementStart(30, "div", 31)(31, "span", 32);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 33)(34, "label", 32);
    \u0275\u0275text(35, "Rows:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 34);
    \u0275\u0275listener("ngModelChange", function RoutingComponent_div_17_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275elementStart(37, "option", 35);
    \u0275\u0275text(38, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 36);
    \u0275\u0275text(40, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 37);
    \u0275\u0275text(42, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 38);
    \u0275\u0275text(44, "100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "button", 39);
    \u0275\u0275listener("click", function RoutingComponent_div_17_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToFirstPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 40);
    \u0275\u0275element(47, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "button", 39);
    \u0275\u0275listener("click", function RoutingComponent_div_17_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPreviousPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 40);
    \u0275\u0275element(50, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(51, "span", 43);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 39);
    \u0275\u0275listener("click", function RoutingComponent_div_17_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToNextPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 40);
    \u0275\u0275element(55, "path", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "button", 39);
    \u0275\u0275listener("click", function RoutingComponent_div_17_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLastPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(57, "svg", 40);
    \u0275\u0275element(58, "path", 45);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.corridors);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.corridors);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.corridors.length && !ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r1.corridors.length ? ctx_r1.pageIndex * ctx_r1.pageSize + 1 : 0, "\u2013", ctx_r1.pageIndex * ctx_r1.pageSize + ctx_r1.corridors.length, " of ", ctx_r1.totalCount, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.pageIndex + 1, " of ", ctx_r1.totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
  }
}
function RoutingComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function RoutingComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCorridorPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_19_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.corridorFormError);
  }
}
function RoutingComponent_div_19_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r11 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r11.businessName);
  }
}
function RoutingComponent_div_19_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275property("value", c_r12.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r12.name);
  }
}
function RoutingComponent_div_19_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    \u0275\u0275property("value", c_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r13);
  }
}
function RoutingComponent_div_19_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("value", c_r14.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14.name);
  }
}
function RoutingComponent_div_19_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275property("value", c_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r15);
  }
}
function RoutingComponent_div_19__svg_svg_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 118);
    \u0275\u0275element(1, "circle", 16)(2, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_19__svg_svg_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 119);
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "div", 95)(3, "h3", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 97);
    \u0275\u0275listener("click", function RoutingComponent_div_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCorridorPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 98);
    \u0275\u0275element(7, "path", 99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 100);
    \u0275\u0275template(9, RoutingComponent_div_19_div_9_Template, 2, 1, "div", 101);
    \u0275\u0275elementStart(10, "div", 102)(11, "div", 103)(12, "label", 104);
    \u0275\u0275text(13, "Sending Agent (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 105);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_19_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.sendingAgentId, $event) || (ctx_r1.corridorForm.sendingAgentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 106);
    \u0275\u0275text(16, "All (Global)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, RoutingComponent_div_19_option_17_Template, 2, 2, "option", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "label", 104);
    \u0275\u0275text(20, "Source Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 108);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_19_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.sourceCountry, $event) || (ctx_r1.corridorForm.sourceCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 109);
    \u0275\u0275text(23, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, RoutingComponent_div_19_option_24_Template, 2, 2, "option", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 104);
    \u0275\u0275text(27, "Source Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 108);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_19_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.sourceCurrency, $event) || (ctx_r1.corridorForm.sourceCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 109);
    \u0275\u0275text(30, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, RoutingComponent_div_19_option_31_Template, 2, 2, "option", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 104);
    \u0275\u0275text(34, "Destination Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 108);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_19_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.destinationCountry, $event) || (ctx_r1.corridorForm.destinationCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(36, "option", 109);
    \u0275\u0275text(37, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, RoutingComponent_div_19_option_38_Template, 2, 2, "option", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "label", 104);
    \u0275\u0275text(41, "Destination Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 108);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_19_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.destinationCurrency, $event) || (ctx_r1.corridorForm.destinationCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(43, "option", 109);
    \u0275\u0275text(44, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, RoutingComponent_div_19_option_45_Template, 2, 2, "option", 110);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 111)(47, "button", 112);
    \u0275\u0275listener("click", function RoutingComponent_div_19_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCorridorPopup());
    });
    \u0275\u0275text(48, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 113);
    \u0275\u0275listener("click", function RoutingComponent_div_19_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCorridor());
    });
    \u0275\u0275template(50, RoutingComponent_div_19__svg_svg_50_Template, 3, 0, "svg", 114)(51, RoutingComponent_div_19__svg_svg_51_Template, 2, 0, "svg", 115);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditingCorridor ? "Edit Corridor" : "Create Corridor");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.corridorFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.corridorForm.sendingAgentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sendingAgents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.corridorForm.sourceCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.corridorForm.sourceCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.corridorForm.destinationCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.corridorForm.destinationCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.savingCorridor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingCorridor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.savingCorridor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingCorridor ? "Update" : "Create", " ");
  }
}
function RoutingComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function RoutingComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_21_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 131)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 132);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_18_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.partnerMessage = "");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 4);
    \u0275\u0275element(5, "path", 99);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.partnerSeverity === "success" ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400" : ctx_r1.partnerSeverity === "error" ? "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400" : "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.partnerMessage);
  }
}
function RoutingComponent_div_21_div_19_tr_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 150);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mode_r20);
  }
}
function RoutingComponent_div_21_div_19_tr_14__svg_path_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 65);
  }
}
function RoutingComponent_div_21_div_19_tr_14__svg_path_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 66);
  }
}
function RoutingComponent_div_21_div_19_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 141)(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 50)(4, "div", 142);
    \u0275\u0275template(5, RoutingComponent_div_21_div_19_tr_14_span_5_Template, 2, 1, "span", 143);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 50)(7, "span", 144);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 145)(10, "div", 146)(11, "button", 147);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_19_tr_14_Template_button_click_11_listener() {
      const p_r21 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditPartner(p_r21));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 4);
    \u0275\u0275element(13, "path", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "button", 148);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_19_tr_14_Template_button_click_14_listener() {
      const p_r21 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePartner(p_r21));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 60);
    \u0275\u0275template(16, RoutingComponent_div_21_div_19_tr_14__svg_path_16_Template, 1, 0, "path", 61)(17, RoutingComponent_div_21_div_19_tr_14__svg_path_17_Template, 1, 0, "path", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 149);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_19_tr_14_Template_button_click_18_listener() {
      const p_r21 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePartner(p_r21));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 57);
    \u0275\u0275element(20, "path", 68);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const p_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r21.payoutAgentName);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", p_r21.paymentModeNames);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", p_r21.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r21.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("title", p_r21.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r21.isActive ? "text-green-600 dark:text-green-400" : "text-surface-400 dark:text-surface-500");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r21.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r21.isActive);
  }
}
function RoutingComponent_div_21_div_19_div_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 150);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mode_r23);
  }
}
function RoutingComponent_div_21_div_19_div_16__svg_path_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 65);
  }
}
function RoutingComponent_div_21_div_19_div_16__svg_path_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 66);
  }
}
function RoutingComponent_div_21_div_19_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 151)(2, "span", 75);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 144);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 152)(7, "span", 153);
    \u0275\u0275text(8, "Payment Modes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 142);
    \u0275\u0275template(10, RoutingComponent_div_21_div_19_div_16_span_10_Template, 2, 1, "span", 143);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 154)(12, "button", 155);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_19_div_16_Template_button_click_12_listener() {
      const p_r24 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditPartner(p_r24));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 83);
    \u0275\u0275element(14, "path", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 156);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_19_div_16_Template_button_click_15_listener() {
      const p_r24 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePartner(p_r24));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 88);
    \u0275\u0275template(17, RoutingComponent_div_21_div_19_div_16__svg_path_17_Template, 1, 0, "path", 61)(18, RoutingComponent_div_21_div_19_div_16__svg_path_18_Template, 1, 0, "path", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 157);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_19_div_16_Template_button_click_19_listener() {
      const p_r24 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePartner(p_r24));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 83);
    \u0275\u0275element(21, "path", 90);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r24 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r24.payoutAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r24.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r24.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", p_r24.paymentModeNames);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", p_r24.isActive ? "text-green-600 dark:text-green-400" : "text-surface-400 dark:text-surface-500");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r24.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r24.isActive);
  }
}
function RoutingComponent_div_21_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 134)(2, "table", 24)(3, "thead", 135)(4, "tr", 25)(5, "th", 136);
    \u0275\u0275text(6, "Payout Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 136);
    \u0275\u0275text(8, "Payment Modes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 137);
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 138);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, RoutingComponent_div_21_div_19_tr_14_Template, 21, 8, "tr", 139);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 140);
    \u0275\u0275template(16, RoutingComponent_div_21_div_19_div_16_Template, 22, 7, "div", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.partnerCorridor.payoutPartners);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.partnerCorridor.payoutPartners);
  }
}
function RoutingComponent_div_21_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275text(1, " No payout partners configured yet. ");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 120)(2, "div", 121)(3, "div")(4, "h3", 122);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 123);
    \u0275\u0275element(6, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Payout Partners ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "p", 124);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 125)(11, "button", 126);
    \u0275\u0275listener("click", function RoutingComponent_div_21_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddPartner());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 4);
    \u0275\u0275element(13, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Add Partner ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 127);
    \u0275\u0275listener("click", function RoutingComponent_div_21_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 98);
    \u0275\u0275element(17, "path", 99);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(18, RoutingComponent_div_21_div_18_Template, 6, 2, "div", 128)(19, RoutingComponent_div_21_div_19_Template, 17, 2, "div", 129)(20, RoutingComponent_div_21_div_20_Template, 2, 0, "div", 130);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate4(" ", ctx_r1.partnerCorridor.sourceCountry, " (", ctx_r1.partnerCorridor.sourceCurrency, ") \u2192 ", ctx_r1.partnerCorridor.destinationCountry, " (", ctx_r1.partnerCorridor.destinationCurrency, ") ");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.partnerMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.partnerCorridor.payoutPartners == null ? null : ctx_r1.partnerCorridor.payoutPartners.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.partnerCorridor.payoutPartners == null ? null : ctx_r1.partnerCorridor.payoutPartners.length));
  }
}
function RoutingComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275listener("click", function RoutingComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerForm());
    });
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_23_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.partnerFormError);
  }
}
function RoutingComponent_div_23_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r27 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r27.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r27.businessName);
  }
}
function RoutingComponent_div_23_label_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 170)(1, "input", 171);
    \u0275\u0275listener("change", function RoutingComponent_div_23_label_21_Template_input_change_1_listener() {
      const pm_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePaymentMode(pm_r29.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 172);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pm_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isPaymentModeSelected(pm_r29.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pm_r29.name);
  }
}
function RoutingComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 161)(2, "div", 95)(3, "h3", 162);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 97);
    \u0275\u0275listener("click", function RoutingComponent_div_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 98);
    \u0275\u0275element(7, "path", 99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 100);
    \u0275\u0275template(9, RoutingComponent_div_23_div_9_Template, 2, 1, "div", 163);
    \u0275\u0275elementStart(10, "div")(11, "label", 104);
    \u0275\u0275text(12, "Payout Agent *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 108);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_23_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.partnerForm.payoutAgentId, $event) || (ctx_r1.partnerForm.payoutAgentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 164);
    \u0275\u0275text(15, "Select Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, RoutingComponent_div_23_option_16_Template, 2, 2, "option", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 165);
    \u0275\u0275text(19, "Payment Modes *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 166);
    \u0275\u0275template(21, RoutingComponent_div_23_label_21_Template, 4, 2, "label", 167);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 111)(23, "button", 112);
    \u0275\u0275listener("click", function RoutingComponent_div_23_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerForm());
    });
    \u0275\u0275text(24, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 168);
    \u0275\u0275listener("click", function RoutingComponent_div_23_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePartner());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 4);
    \u0275\u0275element(27, "path", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Save Partner ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditingPartner ? "Edit Partner" : "Add Partner");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.partnerFormError);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.partnerForm.payoutAgentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.payoutAgents);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
  }
}
function emptyCorridorForm() {
  return { sendingAgentId: null, sourceCountry: "", sourceCurrency: "", destinationCountry: "", destinationCurrency: "" };
}
function emptyPartnerForm() {
  return { payoutAgentId: null, paymentModeIds: [] };
}
var RoutingComponent = class _RoutingComponent {
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.corridors = [];
    this.displayedColumns = [
      "sendingAgent",
      "sourceCountry",
      "sourceCurrency",
      "destCountry",
      "destCurrency",
      "partners",
      "status",
      "actions"
    ];
    this.searchString = "";
    this.loading = true;
    this.deleteConfirmId = null;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.pageSizeOptions = [10, 20, 50, 100];
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
    this.sendingAgents = [];
    this.payoutAgents = [];
    this.countries = [];
    this.currencies = [];
    this.paymentMethods = [];
    this.showCorridorPopup = false;
    this.isEditingCorridor = false;
    this.editingCorridorId = 0;
    this.savingCorridor = false;
    this.corridorFormError = "";
    this.corridorForm = emptyCorridorForm();
    this.showPartnerPopup = false;
    this.partnerCorridor = null;
    this.partnerMessage = "";
    this.partnerSeverity = "info";
    this.showPartnerForm = false;
    this.isEditingPartner = false;
    this.editingPartnerId = 0;
    this.partnerFormError = "";
    this.partnerForm = emptyPartnerForm();
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.searchString = s;
      this.pageIndex = 0;
      this.loadCorridors();
    });
    this.loadAgents();
    this.loadReferenceData();
    this.loadCorridors();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ---------------------------------------------------------------------------
  // Reference data
  // ---------------------------------------------------------------------------
  loadReferenceData() {
    this.api.getCountries().subscribe((r) => {
      if (r?.success && r.data)
        this.countries = r.data;
    });
    this.api.getCurrencies().subscribe((r) => {
      if (r?.success && r.data)
        this.currencies = r.data;
    });
    this.api.getPaymentMethods().subscribe((r) => {
      if (r?.success && r.data)
        this.paymentMethods = r.data;
    });
  }
  loadAgents() {
    this.api.getAgents().subscribe((r) => {
      if (r?.success && r.data) {
        this.sendingAgents = r.data.filter((a) => a.agentType === "SendingAgent");
        this.payoutAgents = r.data.filter((a) => a.agentType === "PayoutAgent");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Corridors CRUD
  // ---------------------------------------------------------------------------
  loadCorridors() {
    this.loading = true;
    this.api.getCorridorsPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.corridors = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.corridors = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load corridors.");
        }
        this.loading = false;
      },
      error: () => {
        this.corridors = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  // Custom pagination helpers
  get totalPages() {
    return Math.ceil(this.totalCount / this.pageSize) || 1;
  }
  goToFirstPage() {
    this.pageIndex = 0;
    this.loadCorridors();
  }
  goToPreviousPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.loadCorridors();
    }
  }
  goToNextPage() {
    if (this.pageIndex < this.totalPages - 1) {
      this.pageIndex++;
      this.loadCorridors();
    }
  }
  goToLastPage() {
    this.pageIndex = this.totalPages - 1;
    this.loadCorridors();
  }
  onPageSizeChange(newSize) {
    this.pageSize = Number(newSize);
    this.pageIndex = 0;
    this.loadCorridors();
  }
  exportData(format) {
    this.exportService.export("api/admin/routing/export", { search: this.searchString }, format);
  }
  // ---------------------------------------------------------------------------
  // Corridor Create / Edit popup
  // ---------------------------------------------------------------------------
  openCreateCorridor() {
    this.corridorForm = emptyCorridorForm();
    this.isEditingCorridor = false;
    this.editingCorridorId = 0;
    this.corridorFormError = "";
    this.showCorridorPopup = true;
  }
  openEditCorridor(c) {
    this.corridorForm = {
      sendingAgentId: c.sendingAgentId ?? null,
      sourceCountry: c.sourceCountry,
      sourceCurrency: c.sourceCurrency,
      destinationCountry: c.destinationCountry,
      destinationCurrency: c.destinationCurrency
    };
    this.isEditingCorridor = true;
    this.editingCorridorId = c.id;
    this.corridorFormError = "";
    this.showCorridorPopup = true;
  }
  closeCorridorPopup() {
    this.showCorridorPopup = false;
  }
  saveCorridor() {
    this.corridorFormError = "";
    const f = this.corridorForm;
    if (!f.sourceCountry || !f.sourceCurrency || !f.destinationCountry || !f.destinationCurrency) {
      this.corridorFormError = "All country and currency fields are required.";
      return;
    }
    this.savingCorridor = true;
    const dto = {
      sendingAgentId: f.sendingAgentId,
      sourceCountry: f.sourceCountry,
      sourceCurrency: f.sourceCurrency,
      destinationCountry: f.destinationCountry,
      destinationCurrency: f.destinationCurrency
    };
    const obs = this.isEditingCorridor ? this.api.updateCorridor(this.editingCorridorId, dto) : this.api.createCorridor(dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.isEditingCorridor ? "Corridor updated." : "Corridor created.");
          this.showCorridorPopup = false;
          this.loadCorridors();
        } else {
          this.corridorFormError = res?.message || "Failed.";
        }
        this.savingCorridor = false;
      },
      error: () => {
        this.corridorFormError = "Server error.";
        this.savingCorridor = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Toggle / Delete corridor
  // ---------------------------------------------------------------------------
  toggleCorridor(c) {
    this.api.toggleCorridor(c.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success(`Corridor ${c.isActive ? "deactivated" : "activated"}.`);
        this.loadCorridors();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  deleteCorridor(c) {
    this.api.deleteCorridor(c.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Corridor deleted.");
        this.loadCorridors();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Partner Management popup
  // ---------------------------------------------------------------------------
  openPartnerManagement(corridor) {
    this.partnerCorridor = corridor;
    this.partnerMessage = "";
    this.showPartnerForm = false;
    this.showPartnerPopup = true;
  }
  closePartnerPopup() {
    this.showPartnerPopup = false;
  }
  // ---------------------------------------------------------------------------
  // Partner CRUD
  // ---------------------------------------------------------------------------
  openAddPartner() {
    this.partnerForm = emptyPartnerForm();
    this.isEditingPartner = false;
    this.editingPartnerId = 0;
    this.partnerFormError = "";
    this.showPartnerForm = true;
  }
  openEditPartner(p) {
    this.partnerForm = {
      payoutAgentId: p.payoutAgentId,
      paymentModeIds: [...p.paymentModeIds]
    };
    this.isEditingPartner = true;
    this.editingPartnerId = p.id;
    this.partnerFormError = "";
    this.showPartnerForm = true;
  }
  closePartnerForm() {
    this.showPartnerForm = false;
  }
  savePartner() {
    this.partnerFormError = "";
    if (!this.partnerForm.payoutAgentId) {
      this.partnerFormError = "Payout Agent is required.";
      return;
    }
    if (!this.partnerForm.paymentModeIds.length) {
      this.partnerFormError = "Select at least one payment mode.";
      return;
    }
    const dto = {
      paymentCorridorId: this.partnerCorridor?.id,
      payoutAgentId: this.partnerForm.payoutAgentId,
      paymentModeIds: this.partnerForm.paymentModeIds
    };
    const done = (msg) => {
      this.partnerMessage = msg;
      this.partnerSeverity = "success";
      this.showPartnerForm = false;
      this.refreshPartnerCorridor();
    };
    if (this.isEditingPartner) {
      this.api.updateCorridorPartner(this.editingPartnerId, dto).subscribe((r) => {
        if (r?.success)
          done("Partner updated.");
        else
          this.partnerFormError = r?.message || "Failed.";
      });
    } else {
      this.api.addCorridorPartner(dto).subscribe((r) => {
        if (r?.success)
          done("Partner added.");
        else
          this.partnerFormError = r?.message || "Failed.";
      });
    }
  }
  togglePartner(p) {
    this.api.toggleCorridorPartner(p.id).subscribe((r) => {
      if (r?.success) {
        this.partnerMessage = `Partner ${p.isActive ? "deactivated" : "activated"}.`;
        this.partnerSeverity = "success";
        this.refreshPartnerCorridor();
      } else {
        this.partnerMessage = r?.message || "Failed.";
        this.partnerSeverity = "error";
      }
    });
  }
  deletePartner(p) {
    this.api.deleteCorridorPartner(p.id).subscribe((r) => {
      if (r?.success) {
        this.partnerMessage = "Partner deleted.";
        this.partnerSeverity = "success";
        this.refreshPartnerCorridor();
      } else {
        this.partnerMessage = r?.message || "Failed.";
        this.partnerSeverity = "error";
      }
    });
  }
  isPaymentModeSelected(modeId) {
    return this.partnerForm.paymentModeIds.includes(modeId);
  }
  togglePaymentMode(modeId) {
    const idx = this.partnerForm.paymentModeIds.indexOf(modeId);
    if (idx >= 0) {
      this.partnerForm.paymentModeIds.splice(idx, 1);
    } else {
      this.partnerForm.paymentModeIds.push(modeId);
    }
  }
  refreshPartnerCorridor() {
    this.api.getCorridorsPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe((r) => {
      if (r?.success && r.data) {
        this.corridors = r.data.items;
        this.totalCount = r.data.totalCount;
        if (this.partnerCorridor) {
          this.partnerCorridor = this.corridors.find((c) => c.id === this.partnerCorridor.id) ?? null;
        }
      }
    });
  }
  static {
    this.\u0275fac = function RoutingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutingComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoutingComponent, selectors: [["app-routing"]], decls: 24, vars: 8, consts: [[1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-800", "text-surface-700", "dark:text-surface-200", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition", "text-sm", "font-medium", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-brand-600", "text-white", "hover:bg-brand-700", "transition", "text-sm", "font-medium", "shadow-sm", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], ["class", "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "relative", "mb-4", "max-w-md"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search corridors...", 1, "w-full", "pl-10", "pr-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "border-b", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-300"], ["scope", "col", 1, "px-4", "py-3", "font-semibold"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], [1, "md:hidden", "space-y-4"], ["class", "border border-surface-200 dark:border-surface-700 rounded-xl bg-white dark:bg-surface-800 p-4", 4, "ngFor", "ngForOf"], ["class", "text-center py-12 text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "mt-4", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-2"], [1, "px-2", "py-1", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "text-sm", "outline-none", "focus:ring-2", "focus:ring-brand-500", 3, "ngModelChange", "ngModel"], ["value", "10"], ["value", "20"], ["value", "50"], ["value", "100"], [1, "p-1.5", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "disabled:opacity-40", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4", "text-surface-600", "dark:text-surface-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 19l-7-7 7-7m8 14l-7-7 7-7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], [1, "text-sm", "text-surface-700", "dark:text-surface-300", "px-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5l7 7-7 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 5l7 7-7 7M5 5l7 7-7 7"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100", "font-medium"], [1, "px-4", "py-3", "text-surface-700", "dark:text-surface-300"], [1, "px-4", "py-3", "text-surface-700", "dark:text-surface-300", "font-medium"], [1, "px-4", "py-3"], [1, "inline-flex", "items-center", "justify-center", "w-6", "h-6", "rounded-full", "bg-blue-100", "text-blue-700", "dark:bg-blue-900/40", "dark:text-blue-400", "text-xs", "font-bold"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "text-xs", "font-medium", "rounded-full", 3, "ngClass"], [1, "flex", "items-center", "gap-1"], ["aria-label", "Edit corridor", 1, "p-1.5", "rounded-md", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["aria-label", "Manage payout partners", 1, "p-1.5", "rounded-md", "text-purple-600", "hover:bg-purple-50", "dark:hover:bg-purple-900/20", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "p-1.5", "rounded-md", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 3, "ngClass"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z", 4, "ngIf"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z", 4, "ngIf"], [4, "ngIf"], ["class", "inline-flex items-center gap-1.5 text-xs", 4, "ngIf"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"], ["aria-label", "Delete corridor", 1, "p-1.5", "rounded-md", "text-danger-500", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs"], [1, "text-danger-700", "dark:text-danger-400", "font-medium"], [1, "px-2", "py-0.5", "bg-danger-600", "hover:bg-danger-700", "text-white", "rounded-lg", "text-xs", "font-medium", "transition-colors", 3, "click"], [1, "px-2", "py-0.5", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "rounded-lg", "text-xs", "font-medium", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-xl", "bg-white", "dark:bg-surface-800", "p-4"], [1, "flex", "items-center", "justify-between", "mb-3", "border-b", "border-surface-100", "dark:border-surface-700", "pb-3"], [1, "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "space-y-2", "text-sm", "mb-4"], [1, "flex", "justify-between"], [1, "text-surface-500", "dark:text-surface-400"], [1, "font-medium", "text-surface-900", "dark:text-surface-100"], [1, "inline-flex", "items-center", "justify-center", "w-5", "h-5", "rounded-full", "bg-blue-100", "text-blue-700", "dark:bg-blue-900/40", "dark:text-blue-400", "text-xs", "font-bold"], [1, "flex", "items-center", "justify-end", "gap-2", "border-t", "border-surface-100", "dark:border-surface-700", "pt-3"], [1, "p-2", "rounded", "bg-surface-50", "text-brand-600", "dark:bg-surface-700", "dark:text-brand-400", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "p-2", "rounded", "bg-surface-50", "text-purple-600", "dark:bg-surface-700", "dark:text-purple-400", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "p-2", "rounded", "bg-surface-50", "dark:bg-surface-700", "transition", 3, "click", "ngClass"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "p-2", "rounded", "bg-red-50", "text-red-600", "dark:bg-red-900/20", "dark:text-red-400", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-center", "py-12", "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "fixed", "inset-0", "z-50", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-lg", "pointer-events-auto", "max-h-[90vh]", "overflow-y-auto"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "p-1", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-surface-400", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6", "space-y-4"], ["class", "px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "sm:col-span-2"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], [1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["required", "", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-lg", "transition-colors", 3, "click"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-lg", "hover:bg-brand-700", "transition-colors", "disabled:opacity-50", "shadow-sm", 3, "click", "disabled"], ["class", "animate-spin w-4 h-4", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 4, "ngIf"], [1, "px-4", "py-3", "bg-red-50", "dark:bg-red-900/20", "text-red-700", "dark:text-red-400", "text-sm", "rounded-lg"], [3, "value"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-4xl", "pointer-events-auto", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-700", "gap-3"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100", "flex", "items-center", "gap-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-5", "h-5", "text-purple-600"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mt-1"], [1, "flex", "items-center", "gap-3"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-lg", "hover:bg-brand-700", "transition-colors", "shadow-sm", 3, "click"], [1, "p-1.5", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-surface-400", "transition", 3, "click"], ["class", "mx-6 mt-4 p-3 rounded-lg text-sm flex items-center justify-between", 3, "ngClass", 4, "ngIf"], ["class", "flex-1 overflow-y-auto p-6", 4, "ngIf"], ["class", "p-12 text-center text-surface-500 dark:text-surface-400", 4, "ngIf"], [1, "mx-6", "mt-4", "p-3", "rounded-lg", "text-sm", "flex", "items-center", "justify-between", 3, "ngClass"], [1, "p-1", "opacity-70", "hover:opacity-100", 3, "click"], [1, "flex-1", "overflow-y-auto", "p-6"], [1, "hidden", "md:block", "overflow-x-auto", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700"], [1, "bg-surface-50", "dark:bg-surface-900/50"], [1, "px-4", "py-3", "font-semibold"], [1, "px-4", "py-3", "font-semibold", "w-24"], [1, "px-4", "py-3", "font-semibold", "w-28", "text-right"], ["class", "border-b last:border-0 border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], [1, "md:hidden", "space-y-3"], [1, "border-b", "last:border-0", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "flex", "flex-wrap", "gap-1.5"], ["class", "inline-flex px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800/50 dark:text-blue-300", 4, "ngFor", "ngForOf"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "text-xs", "font-medium", "rounded-full", 3, "ngClass"], [1, "px-4", "py-3", "text-right"], [1, "flex", "items-center", "justify-end", "gap-1"], ["title", "Edit", 1, "p-1", "rounded", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", 3, "click"], [1, "p-1", "rounded", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click", "title"], ["title", "Delete", 1, "p-1", "rounded", "text-red-500", "hover:bg-red-50", "dark:hover:bg-red-900/20", "transition", 3, "click"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-medium", "bg-blue-50", "text-blue-700", "border", "border-blue-200", "dark:bg-blue-900/20", "dark:border-blue-800/50", "dark:text-blue-300"], [1, "flex", "justify-between", "items-start", "mb-2"], [1, "mb-4"], [1, "block", "text-xs", "text-surface-500", "dark:text-surface-400", "mb-1.5"], [1, "flex", "items-center", "justify-end", "gap-2", "pt-3", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "p-1.5", "rounded", "bg-surface-50", "text-brand-600", "dark:bg-surface-700", "dark:text-brand-400", 3, "click"], [1, "p-1.5", "rounded", "bg-surface-50", "dark:bg-surface-700", 3, "click", "ngClass"], [1, "p-1.5", "rounded", "bg-red-50", "text-red-600", "dark:bg-red-900/20", "dark:text-red-400", 3, "click"], [1, "p-12", "text-center", "text-surface-500", "dark:text-surface-400"], [1, "fixed", "inset-0", "z-[60]", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "inset-0", "z-[60]", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-sm", "pointer-events-auto", "max-h-[90vh]", "overflow-y-auto"], [1, "text-base", "font-semibold", "text-surface-900", "dark:text-surface-100"], ["class", "px-3 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg", 4, "ngIf"], ["disabled", "", 3, "ngValue"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-2"], [1, "space-y-2", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "p-3", "max-h-48", "overflow-y-auto", "bg-surface-50", "dark:bg-surface-900/30"], ["class", "flex items-center gap-2 cursor-pointer group", 4, "ngFor", "ngForOf"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-lg", "hover:bg-brand-700", "transition-colors", "shadow-sm", 3, "click"], [1, "px-3", "py-2", "bg-red-50", "dark:bg-red-900/20", "text-red-700", "dark:text-red-400", "text-sm", "rounded-lg"], [1, "flex", "items-center", "gap-2", "cursor-pointer", "group"], ["type", "checkbox", 1, "w-4", "h-4", "text-brand-600", "bg-white", "dark:bg-surface-800", "border-surface-300", "dark:border-surface-600", "rounded", "focus:ring-brand-500", "cursor-pointer", 3, "change", "checked"], [1, "text-sm", "text-surface-700", "dark:text-surface-300", "group-hover:text-surface-900", "dark:group-hover:text-surface-100", "transition-colors"]], template: function RoutingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Payment Corridor Routing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function RoutingComponent_Template_button_click_4_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(5, "svg", 4);
        \u0275\u0275element(6, "path", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function RoutingComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 4);
        \u0275\u0275element(10, "path", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function RoutingComponent_Template_button_click_12_listener() {
          return ctx.openCreateCorridor();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 4);
        \u0275\u0275element(14, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Add Corridor ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, RoutingComponent_div_16_Template, 4, 0, "div", 8)(17, RoutingComponent_div_17_Template, 59, 14, "div", 9)(18, RoutingComponent_div_18_Template, 1, 0, "div", 10)(19, RoutingComponent_div_19_Template, 53, 17, "div", 11)(20, RoutingComponent_div_20_Template, 1, 0, "div", 10)(21, RoutingComponent_div_21_Template, 21, 7, "div", 11)(22, RoutingComponent_div_22_Template, 1, 0, "div", 12)(23, RoutingComponent_div_23_Template, 29, 6, "div", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCorridorPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCorridorPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPartnerPopup && ctx.partnerCorridor);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPartnerPopup && ctx.partnerCorridor);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPartnerForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPartnerForm);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=routing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutingComponent, [{
    type: Component,
    args: [{ selector: "app-routing", standalone: true, imports: [
      CommonModule,
      FormsModule
    ], template: `<!-- Page Header -->
<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
  <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">Payment Corridor Routing</h2>
  <div class="flex flex-wrap items-center gap-2">
    <button (click)="exportData('excel')" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm font-medium">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
      Excel
    </button>
    <button (click)="exportData('csv')" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm font-medium">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
      CSV
    </button>
    <button (click)="openCreateCorridor()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition text-sm font-medium shadow-sm">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
      Add Corridor
    </button>
  </div>
</div>

<!-- Loading -->
<div *ngIf="loading" class="flex items-center justify-center py-20">
  <svg class="animate-spin h-10 w-10 text-brand-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
</div>

<!-- Search + Table -->
<div *ngIf="!loading" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
  <div class="relative mb-4 max-w-md">
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    <input type="text" placeholder="Search corridors..." [(ngModel)]="searchString" (ngModelChange)="searchDebounce.next($event)"
      class="w-full pl-10 pr-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
  </div>

  <!-- Desktop / Tablet: scrollable table -->
  <div class="hidden md:block overflow-x-auto">
    <table class="w-full text-sm text-left">
      <thead>
        <tr class="border-b border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-300">
          <th scope="col" class="px-4 py-3 font-semibold">Sending Agent</th>
          <th scope="col" class="px-4 py-3 font-semibold">Source Country</th>
          <th scope="col" class="px-4 py-3 font-semibold">Source Currency</th>
          <th scope="col" class="px-4 py-3 font-semibold">Dest Country</th>
          <th scope="col" class="px-4 py-3 font-semibold">Dest Currency</th>
          <th scope="col" class="px-4 py-3 font-semibold">Partners</th>
          <th scope="col" class="px-4 py-3 font-semibold">Status</th>
          <th scope="col" class="px-4 py-3 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let c of corridors" class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100 font-medium">{{ c.sendingAgentName || 'All' }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ c.sourceCountry }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300 font-medium">{{ c.sourceCurrency }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ c.destinationCountry }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300 font-medium">{{ c.destinationCurrency }}</td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 text-xs font-bold">{{ c.payoutPartners?.length || 0 }}</span>
          </td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full" [ngClass]="c.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">
              {{ c.isActive ? 'Active' : 'Inactive' }}
            </span>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-1">
              <button aria-label="Edit corridor" (click)="openEditCorridor(c)" class="p-1.5 rounded-md text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
              <button aria-label="Manage payout partners" (click)="openPartnerManagement(c)" class="p-1.5 rounded-md text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg></button>
              <button [attr.aria-label]="c.isActive ? 'Deactivate corridor' : 'Activate corridor'" (click)="toggleCorridor(c)" class="p-1.5 rounded-md hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" [ngClass]="c.isActive ? 'text-green-600 dark:text-green-400' : 'text-surface-400 dark:text-surface-500'"><path *ngIf="c.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/><path *ngIf="!c.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"/></svg></button>
              <!-- Delete with inline confirmation -->
              <ng-container *ngIf="deleteConfirmId !== c.id">
                <button aria-label="Delete corridor" (click)="deleteConfirmId = c.id" class="p-1.5 rounded-md text-danger-500 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
              </ng-container>
              <span *ngIf="deleteConfirmId === c.id" class="inline-flex items-center gap-1.5 text-xs">
                <span class="text-danger-700 dark:text-danger-400 font-medium">Delete?</span>
                <button (click)="deleteCorridor(c); deleteConfirmId = null" class="px-2 py-0.5 bg-danger-600 hover:bg-danger-700 text-white rounded-lg text-xs font-medium transition-colors">Yes</button>
                <button (click)="deleteConfirmId = null" class="px-2 py-0.5 border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 rounded-lg text-xs font-medium hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">No</button>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Mobile: card layout -->
  <div class="md:hidden space-y-4">
    <div *ngFor="let c of corridors" class="border border-surface-200 dark:border-surface-700 rounded-xl bg-white dark:bg-surface-800 p-4">
      <div class="flex items-center justify-between mb-3 border-b border-surface-100 dark:border-surface-700 pb-3">
        <span class="font-semibold text-surface-900 dark:text-surface-100">{{ c.sourceCountry }} &rarr; {{ c.destinationCountry }}</span>
        <span class="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full" [ngClass]="c.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">
          {{ c.isActive ? 'Active' : 'Inactive' }}
        </span>
      </div>
      <div class="space-y-2 text-sm mb-4">
        <div class="flex justify-between"><span class="text-surface-500 dark:text-surface-400">Sending Agent</span><span class="font-medium text-surface-900 dark:text-surface-100">{{ c.sendingAgentName || 'All' }}</span></div>
        <div class="flex justify-between"><span class="text-surface-500 dark:text-surface-400">Currency</span><span class="font-medium text-surface-900 dark:text-surface-100">{{ c.sourceCurrency }} &rarr; {{ c.destinationCurrency }}</span></div>
        <div class="flex justify-between"><span class="text-surface-500 dark:text-surface-400">Partners</span><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 text-xs font-bold">{{ c.payoutPartners?.length || 0 }}</span></div>
      </div>
      <div class="flex items-center justify-end gap-2 border-t border-surface-100 dark:border-surface-700 pt-3">
        <button (click)="openEditCorridor(c)" class="p-2 rounded bg-surface-50 text-brand-600 dark:bg-surface-700 dark:text-brand-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
        <button (click)="openPartnerManagement(c)" class="p-2 rounded bg-surface-50 text-purple-600 dark:bg-surface-700 dark:text-purple-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg></button>
        <button (click)="toggleCorridor(c)" class="p-2 rounded bg-surface-50 dark:bg-surface-700 transition" [ngClass]="c.isActive ? 'text-green-600 dark:text-green-400' : 'text-surface-400 dark:text-surface-500'"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path *ngIf="c.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/><path *ngIf="!c.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"/></svg></button>
        <button (click)="deleteCorridor(c)" class="p-2 rounded bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
      </div>
    </div>
  </div>

  <div *ngIf="!corridors.length && !loading" class="text-center py-12 text-surface-400 dark:text-surface-500 text-sm">
    No corridors found.
  </div>

  <!-- Pagination -->
  <div class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
    <span class="text-sm text-surface-500 dark:text-surface-400">
      Showing {{ corridors.length ? pageIndex * pageSize + 1 : 0 }}&ndash;{{ pageIndex * pageSize + corridors.length }} of {{ totalCount }}
    </span>
    <div class="flex items-center gap-2">
      <label class="text-sm text-surface-500 dark:text-surface-400">Rows:</label>
      <select [ngModel]="pageSize" (ngModelChange)="onPageSizeChange($event)" class="px-2 py-1 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 text-sm outline-none focus:ring-2 focus:ring-brand-500">
        <option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option>
      </select>
      <button (click)="goToFirstPage()" [disabled]="pageIndex === 0" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg>
      </button>
      <button (click)="goToPreviousPage()" [disabled]="pageIndex === 0" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <span class="text-sm text-surface-700 dark:text-surface-300 px-2">Page {{ pageIndex + 1 }} of {{ totalPages }}</span>
      <button (click)="goToNextPage()" [disabled]="pageIndex >= totalPages - 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>
      <button (click)="goToLastPage()" [disabled]="pageIndex >= totalPages - 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>
      </button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Create / Edit Corridor Popup                                  -->
<!-- ============================================================ -->
<div *ngIf="showCorridorPopup" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeCorridorPopup()"></div>
<div *ngIf="showCorridorPopup" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-lg pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">{{ isEditingCorridor ? 'Edit Corridor' : 'Create Corridor' }}</h3>
      <button (click)="closeCorridorPopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>

    <div class="p-6 space-y-4">
      <div *ngIf="corridorFormError" class="px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ corridorFormError }}</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Sending Agent (optional)</label>
          <select [(ngModel)]="corridorForm.sendingAgentId" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option [ngValue]="null">All (Global)</option>
            <option *ngFor="let a of sendingAgents" [ngValue]="a.id">{{ a.businessName }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Source Country *</label>
          <select [(ngModel)]="corridorForm.sourceCountry" required class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option value="" disabled>Select</option><option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Source Currency *</label>
          <select [(ngModel)]="corridorForm.sourceCurrency" required class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option value="" disabled>Select</option><option *ngFor="let c of currencies" [value]="c">{{ c }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Destination Country *</label>
          <select [(ngModel)]="corridorForm.destinationCountry" required class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option value="" disabled>Select</option><option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Destination Currency *</label>
          <select [(ngModel)]="corridorForm.destinationCurrency" required class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option value="" disabled>Select</option><option *ngFor="let c of currencies" [value]="c">{{ c }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeCorridorPopup()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition-colors">Cancel</button>
      <button (click)="saveCorridor()" [disabled]="savingCorridor" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-50 shadow-sm">
        <svg *ngIf="savingCorridor" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
        <svg *ngIf="!savingCorridor" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        {{ isEditingCorridor ? 'Update' : 'Create' }}
      </button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Payout Partners Management Popup                              -->
<!-- ============================================================ -->
<div *ngIf="showPartnerPopup && partnerCorridor" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closePartnerPopup()"></div>
<div *ngIf="showPartnerPopup && partnerCorridor" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-4xl pointer-events-auto max-h-[90vh] flex flex-col">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700 gap-3">
      <div>
        <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 flex items-center gap-2">
          <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          Payout Partners
        </h3>
        <p class="text-sm text-surface-500 dark:text-surface-400 mt-1">
          {{ partnerCorridor.sourceCountry }} ({{ partnerCorridor.sourceCurrency }}) &rarr; {{ partnerCorridor.destinationCountry }} ({{ partnerCorridor.destinationCurrency }})
        </p>
      </div>
      <div class="flex items-center gap-3">
        <button (click)="openAddPartner()" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg> Add Partner
        </button>
        <button (click)="closePartnerPopup()" class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
      </div>
    </div>

    <div *ngIf="partnerMessage" class="mx-6 mt-4 p-3 rounded-lg text-sm flex items-center justify-between"
         [ngClass]="partnerSeverity === 'success' ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' : (partnerSeverity === 'error' ? 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400' : 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400')">
      <span>{{ partnerMessage }}</span>
      <button (click)="partnerMessage = ''" class="p-1 opacity-70 hover:opacity-100"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>

    <div class="flex-1 overflow-y-auto p-6" *ngIf="partnerCorridor.payoutPartners?.length">
      <!-- Desktop: partner table -->
      <div class="hidden md:block overflow-x-auto rounded-xl border border-surface-200 dark:border-surface-700">
        <table class="w-full text-sm text-left">
          <thead class="bg-surface-50 dark:bg-surface-900/50">
            <tr class="border-b border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-300">
              <th class="px-4 py-3 font-semibold">Payout Agent</th>
              <th class="px-4 py-3 font-semibold">Payment Modes</th>
              <th class="px-4 py-3 font-semibold w-24">Status</th>
              <th class="px-4 py-3 font-semibold w-28 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of partnerCorridor.payoutPartners" class="border-b last:border-0 border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
              <td class="px-4 py-3 text-surface-900 dark:text-surface-100 font-medium">{{ p.payoutAgentName }}</td>
              <td class="px-4 py-3">
                <div class="flex flex-wrap gap-1.5">
                  <span *ngFor="let mode of p.paymentModeNames" class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800/50 dark:text-blue-300">{{ mode }}</span>
                </div>
              </td>
              <td class="px-4 py-3">
                <span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full" [ngClass]="p.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">
                  {{ p.isActive ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end gap-1">
                  <button title="Edit" (click)="openEditPartner(p)" class="p-1 rounded text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
                  <button [title]="p.isActive ? 'Deactivate' : 'Activate'" (click)="togglePartner(p)" class="p-1 rounded hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" [ngClass]="p.isActive ? 'text-green-600 dark:text-green-400' : 'text-surface-400 dark:text-surface-500'"><path *ngIf="p.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/><path *ngIf="!p.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"/></svg></button>
                  <button title="Delete" (click)="deletePartner(p)" class="p-1 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile: partner cards -->
      <div class="md:hidden space-y-3">
        <div *ngFor="let p of partnerCorridor.payoutPartners" class="border border-surface-200 dark:border-surface-700 rounded-xl bg-white dark:bg-surface-800 p-4">
          <div class="flex justify-between items-start mb-2">
            <span class="font-semibold text-surface-900 dark:text-surface-100">{{ p.payoutAgentName }}</span>
            <span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full" [ngClass]="p.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">
              {{ p.isActive ? 'Active' : 'Inactive' }}
            </span>
          </div>
          <div class="mb-4">
            <span class="block text-xs text-surface-500 dark:text-surface-400 mb-1.5">Payment Modes</span>
            <div class="flex flex-wrap gap-1.5">
              <span *ngFor="let mode of p.paymentModeNames" class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800/50 dark:text-blue-300">{{ mode }}</span>
            </div>
          </div>
          <div class="flex items-center justify-end gap-2 pt-3 border-t border-surface-100 dark:border-surface-700">
            <button (click)="openEditPartner(p)" class="p-1.5 rounded bg-surface-50 text-brand-600 dark:bg-surface-700 dark:text-brand-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
            <button (click)="togglePartner(p)" class="p-1.5 rounded bg-surface-50 dark:bg-surface-700" [ngClass]="p.isActive ? 'text-green-600 dark:text-green-400' : 'text-surface-400 dark:text-surface-500'"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path *ngIf="p.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/><path *ngIf="!p.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"/></svg></button>
            <button (click)="deletePartner(p)" class="p-1.5 rounded bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="!partnerCorridor.payoutPartners?.length" class="p-12 text-center text-surface-500 dark:text-surface-400">
      No payout partners configured yet.
    </div>
  </div>
</div>

<!-- Partner Add/Edit Form -->
<div *ngIf="showPartnerForm" class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" (click)="closePartnerForm()"></div>
<div *ngIf="showPartnerForm" class="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-sm pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">{{ isEditingPartner ? 'Edit Partner' : 'Add Partner' }}</h3>
      <button (click)="closePartnerForm()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>

    <div class="p-6 space-y-4">
      <div *ngIf="partnerFormError" class="px-3 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ partnerFormError }}</div>

      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Payout Agent *</label>
        <select [(ngModel)]="partnerForm.payoutAgentId" required class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
          <option [ngValue]="null" disabled>Select Agent</option>
          <option *ngFor="let a of payoutAgents" [ngValue]="a.id">{{ a.businessName }}</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-2">Payment Modes *</label>
        <div class="space-y-2 border border-surface-200 dark:border-surface-700 rounded-lg p-3 max-h-48 overflow-y-auto bg-surface-50 dark:bg-surface-900/30">
          <label *ngFor="let pm of paymentMethods" class="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" [checked]="isPaymentModeSelected(pm.id)" (change)="togglePaymentMode(pm.id)" class="w-4 h-4 text-brand-600 bg-white dark:bg-surface-800 border-surface-300 dark:border-surface-600 rounded focus:ring-brand-500 cursor-pointer" />
            <span class="text-sm text-surface-700 dark:text-surface-300 group-hover:text-surface-900 dark:group-hover:text-surface-100 transition-colors">{{ pm.name }}</span>
          </label>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closePartnerForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition-colors">Cancel</button>
      <button (click)="savePartner()" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-sm">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        Save Partner
      </button>
    </div>
  </div>
</div>`, styles: ["/* src/app/pages/admin/routing/routing.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=routing.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoutingComponent, { className: "RoutingComponent", filePath: "src/app/pages/admin/routing/routing.component.ts", lineNumber: 45 });
})();
export {
  RoutingComponent
};
//# sourceMappingURL=chunk-EUK5R2GJ.js.map
