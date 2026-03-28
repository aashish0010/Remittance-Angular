import {
  ExportService
} from "./chunk-DU4FVJ3R.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-6I2CTDTD.js";
import {
  NotificationService
} from "./chunk-U44UDHMQ.js";
import "./chunk-VTD77X6G.js";
import {
  ApiService
} from "./chunk-2NPUZHRJ.js";
import {
  AuthStateService
} from "./chunk-MP5DRVCF.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-FEHYQLJK.js";
import {
  Component,
  Subject,
  debounceTime,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpureFunction0,
  ɵɵpureFunction5,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XQC2OG7J.js";

// src/app/pages/admin/compliance/compliance.component.ts
var _c0 = () => ["all", "open", "resolved", "rejected"];
var _c1 = (a0, a1, a2, a3, a4) => ({ "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400": a0, "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400": a1, "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400": a2, "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400": a3, "bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400": a4 });
function ComplianceComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 13);
    \u0275\u0275element(3, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 13);
    \u0275\u0275element(8, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 13);
    \u0275\u0275element(13, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.openCount, " Open");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.resolvedCount, " Resolved");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.rejectedCount, " Rejected");
  }
}
function ComplianceComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ComplianceComponent_button_6_Template_button_click_0_listener() {
      const mode_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.filterMode = mode_r3;
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.filterMode === mode_r3 ? "px-4 py-2 text-sm font-medium bg-brand-600 text-white" : "px-4 py-2 text-sm font-medium bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-600 transition");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mode_r3 === "all" ? "All" : mode_r3 === "open" ? "Open" : mode_r3 === "resolved" ? "Resolved" : "Rejected", " ");
  }
}
function ComplianceComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ComplianceComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.searchText = "";
      return \u0275\u0275resetView(ctx_r0.searchDebounce.next(""));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "path", 27);
    \u0275\u0275elementEnd()();
  }
}
function ComplianceComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "circle", 30)(3, "path", 31);
    \u0275\u0275elementEnd()();
  }
}
function ComplianceComponent_div_22_tr_24_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r7.senderCountry);
  }
}
function ComplianceComponent_div_22_tr_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r7.receiverCountry);
  }
}
function ComplianceComponent_div_22_tr_24_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 70);
    \u0275\u0275listener("click", function ComplianceComponent_div_22_tr_24_ng_container_37_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const a_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openResolvePopup(a_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 65);
    \u0275\u0275element(3, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Resolve ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 71);
    \u0275\u0275listener("click", function ComplianceComponent_div_22_tr_24_ng_container_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const a_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.rejectAlert(a_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 65);
    \u0275\u0275element(7, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Reject ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ComplianceComponent_div_22_tr_24_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 65);
    \u0275\u0275element(2, "path", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Notes ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", a_r7.resolution);
  }
}
function ComplianceComponent_div_22_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 54)(1, "td", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 56)(4, "div", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ComplianceComponent_div_22_tr_24_div_6_Template, 2, 1, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 56)(8, "div", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ComplianceComponent_div_22_tr_24_div_10_Template, 2, 1, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 56)(12, "div", 57);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 59);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 56)(19, "span", 60);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 56)(22, "span", 61);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 56)(25, "span", 61);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 62);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 63)(31, "div", 44)(32, "button", 64);
    \u0275\u0275listener("click", function ComplianceComponent_div_22_tr_24_Template_button_click_32_listener() {
      const a_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewDetail(a_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 65);
    \u0275\u0275element(34, "path", 66)(35, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ComplianceComponent_div_22_tr_24_ng_container_37_Template, 9, 0, "ng-container", 68)(38, ComplianceComponent_div_22_tr_24_span_38_Template, 4, 1, "span", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.referenceNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r7.senderName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r7.senderCountry);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r7.receiverName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r7.receiverCountry);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(14, 17, a_r7.sendAmount, "1.2-2"), " ", a_r7.sendCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u2192 ", \u0275\u0275pipeBind2(17, 20, a_r7.receiveAmount, "1.2-2"), " ", a_r7.receiveCurrency, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r7.alertType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(26, _c1, a_r7.transactionStatus === "Completed", a_r7.transactionStatus === "Pending", a_r7.transactionStatus === "OnHold", a_r7.transactionStatus === "Compliance", a_r7.transactionStatus === "Cancelled" || a_r7.transactionStatus === "Failed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTxnStatusLabel(a_r7.transactionStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", a_r7.isResolved ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r7.isResolved ? "Resolved" : "Open", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 23, a_r7.createdAt, "MMM dd, HH:mm"));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !a_r7.isResolved);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r7.isResolved && a_r7.resolution);
  }
}
function ComplianceComponent_div_22_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 75);
    \u0275\u0275element(2, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 77);
    \u0275\u0275text(4, "No compliance alerts found.");
    \u0275\u0275elementEnd()();
  }
}
function ComplianceComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "table", 34)(3, "thead", 35)(4, "tr")(5, "th", 36);
    \u0275\u0275text(6, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 36);
    \u0275\u0275text(8, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 36);
    \u0275\u0275text(10, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 36);
    \u0275\u0275text(12, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 36);
    \u0275\u0275text(14, "Alert Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 36);
    \u0275\u0275text(16, "Txn Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 36);
    \u0275\u0275text(18, "Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 36);
    \u0275\u0275text(20, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 36);
    \u0275\u0275text(22, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody", 37);
    \u0275\u0275template(24, ComplianceComponent_div_22_tr_24_Template, 39, 32, "tr", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, ComplianceComponent_div_22_div_25_Template, 5, 0, "div", 39);
    \u0275\u0275elementStart(26, "div", 40)(27, "div", 41)(28, "span");
    \u0275\u0275text(29, "Rows per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceComponent_div_22_Template_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pageSize, $event) || (ctx_r0.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ComplianceComponent_div_22_Template_select_ngModelChange_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.pageIndex = 0;
      return \u0275\u0275resetView(ctx_r0.loadAlerts());
    });
    \u0275\u0275elementStart(31, "option", 43);
    \u0275\u0275text(32, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 43);
    \u0275\u0275text(34, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 43);
    \u0275\u0275text(36, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 43);
    \u0275\u0275text(38, "100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 44)(42, "button", 45);
    \u0275\u0275listener("click", function ComplianceComponent_div_22_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.pageIndex = 0;
      return \u0275\u0275resetView(ctx_r0.loadAlerts());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 46);
    \u0275\u0275element(44, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "button", 48);
    \u0275\u0275listener("click", function ComplianceComponent_div_22_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.pageIndex = ctx_r0.pageIndex - 1;
      return \u0275\u0275resetView(ctx_r0.loadAlerts());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 46);
    \u0275\u0275element(47, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "button", 50);
    \u0275\u0275listener("click", function ComplianceComponent_div_22_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.pageIndex = ctx_r0.pageIndex + 1;
      return \u0275\u0275resetView(ctx_r0.loadAlerts());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 46);
    \u0275\u0275element(50, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(51, "button", 52);
    \u0275\u0275listener("click", function ComplianceComponent_div_22_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.pageIndex = ctx_r0.Math.ceil(ctx_r0.totalCount / ctx_r0.pageSize) - 1;
      return \u0275\u0275resetView(ctx_r0.loadAlerts());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(52, "svg", 46);
    \u0275\u0275element(53, "path", 53);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r0.alerts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alerts.length === 0 && !ctx_r0.loading);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 100);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", ctx_r0.pageIndex * ctx_r0.pageSize + 1, "\u2013", (ctx_r0.pageIndex + 1) * ctx_r0.pageSize > ctx_r0.totalCount ? ctx_r0.totalCount : (ctx_r0.pageIndex + 1) * ctx_r0.pageSize, " of ", ctx_r0.totalCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (ctx_r0.pageIndex + 1) * ctx_r0.pageSize >= ctx_r0.totalCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (ctx_r0.pageIndex + 1) * ctx_r0.pageSize >= ctx_r0.totalCount);
  }
}
function ComplianceComponent_div_23__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 100);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_div_23__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 101);
    \u0275\u0275element(1, "path", 22);
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_div_23_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 102)(1, "strong");
    \u0275\u0275text(2, "Resolution:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedAlert.resolution, " ");
  }
}
function ComplianceComponent_div_23_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 93);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.receiverBankName);
  }
}
function ComplianceComponent_div_23_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 93);
    \u0275\u0275text(2, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.receiverAccountNumber);
  }
}
function ComplianceComponent_div_23_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 93);
    \u0275\u0275text(2, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.paymentMethodName);
  }
}
function ComplianceComponent_div_23_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 93);
    \u0275\u0275text(2, "Payout Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.payoutMethodName);
  }
}
function ComplianceComponent_div_23_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 93);
    \u0275\u0275text(2, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.sendingAgentName);
  }
}
function ComplianceComponent_div_23_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 93);
    \u0275\u0275text(2, "Payout Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.payoutAgentName);
  }
}
function ComplianceComponent_div_23_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 93);
    \u0275\u0275text(2, "Resolved At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.selectedAlert.resolvedAt, "dd/MM/yyyy HH:mm"));
  }
}
function ComplianceComponent_div_23_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "button", 12);
    \u0275\u0275listener("click", function ComplianceComponent_div_23_div_89_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.openResolvePopup(ctx_r0.selectedAlert);
      return \u0275\u0275resetView(ctx_r0.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 13);
    \u0275\u0275element(3, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Resolve & Release ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 104);
    \u0275\u0275listener("click", function ComplianceComponent_div_23_div_89_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.rejectAlert(ctx_r0.selectedAlert);
      return \u0275\u0275resetView(ctx_r0.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 13);
    \u0275\u0275element(7, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Reject & Cancel ");
    \u0275\u0275elementEnd()();
  }
}
function ComplianceComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function ComplianceComponent_div_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 79);
    \u0275\u0275listener("click", function ComplianceComponent_div_23_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 80)(3, "h3", 81);
    \u0275\u0275text(4, "Transaction & Alert Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 82);
    \u0275\u0275listener("click", function ComplianceComponent_div_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 83);
    \u0275\u0275element(7, "path", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 84)(9, "div", 85);
    \u0275\u0275template(10, ComplianceComponent_div_23__svg_svg_10_Template, 2, 0, "svg", 86)(11, ComplianceComponent_div_23__svg_svg_11_Template, 2, 0, "svg", 87);
    \u0275\u0275elementStart(12, "strong", 88);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 89);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 90);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ComplianceComponent_div_23_p_18_Template, 4, 1, "p", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 92)(20, "div")(21, "span", 93);
    \u0275\u0275text(22, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 94);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "span", 93);
    \u0275\u0275text(27, "Transaction Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 95);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "span", 93);
    \u0275\u0275text(32, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 96);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "span", 93);
    \u0275\u0275text(37, "Sender Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 96);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div")(41, "span", 93);
    \u0275\u0275text(42, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 96);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "span", 93);
    \u0275\u0275text(47, "Receiver Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 96);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, ComplianceComponent_div_23_div_50_Template, 5, 1, "div", 68)(51, ComplianceComponent_div_23_div_51_Template, 5, 1, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "hr", 97);
    \u0275\u0275elementStart(53, "div", 92)(54, "div")(55, "span", 93);
    \u0275\u0275text(56, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 98);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div")(61, "span", 93);
    \u0275\u0275text(62, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 98);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div")(67, "span", 93);
    \u0275\u0275text(68, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 96);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div")(73, "span", 93);
    \u0275\u0275text(74, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 96);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(78, ComplianceComponent_div_23_div_78_Template, 5, 1, "div", 68)(79, ComplianceComponent_div_23_div_79_Template, 5, 1, "div", 68)(80, ComplianceComponent_div_23_div_80_Template, 5, 1, "div", 68)(81, ComplianceComponent_div_23_div_81_Template, 5, 1, "div", 68);
    \u0275\u0275elementStart(82, "div")(83, "span", 93);
    \u0275\u0275text(84, "Alert Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 96);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(88, ComplianceComponent_div_23_div_88_Template, 6, 4, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(89, ComplianceComponent_div_23_div_89_Template, 9, 0, "div", 99);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ctx_r0.selectedAlert.isResolved ? "bg-success-50 border border-success-200 dark:bg-success-900/20 dark:border-success-800" : "bg-warning-50 border border-warning-200 dark:bg-warning-900/20 dark:border-warning-800");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.selectedAlert.isResolved);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.isResolved);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.alertType);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.selectedAlert.isResolved ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedAlert.isResolved ? "Resolved" : "Open", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.isResolved && ctx_r0.selectedAlert.resolution);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.referenceNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(45, _c1, ctx_r0.selectedAlert.transactionStatus === "Completed", ctx_r0.selectedAlert.transactionStatus === "Pending", ctx_r0.selectedAlert.transactionStatus === "OnHold", ctx_r0.selectedAlert.transactionStatus === "Compliance", ctx_r0.selectedAlert.transactionStatus === "Cancelled" || ctx_r0.selectedAlert.transactionStatus === "Failed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTxnStatusLabel(ctx_r0.selectedAlert.transactionStatus), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.senderCountry || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.receiverName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.receiverCountry || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.receiverBankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.receiverAccountNumber);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(59, 30, ctx_r0.selectedAlert.sendAmount, "1.2-2"), " ", ctx_r0.selectedAlert.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(65, 33, ctx_r0.selectedAlert.receiveAmount, "1.2-2"), " ", ctx_r0.selectedAlert.receiveCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 36, ctx_r0.selectedAlert.exchangeRateApplied, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 39, ctx_r0.selectedAlert.totalCommission, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.paymentMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.payoutMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.sendingAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.payoutAgentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 42, ctx_r0.selectedAlert.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.resolvedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selectedAlert.isResolved);
  }
}
function ComplianceComponent_div_24_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "div")(2, "span", 93);
    \u0275\u0275text(3, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 94);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "span", 93);
    \u0275\u0275text(8, "Alert Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 60);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "span", 93);
    \u0275\u0275text(13, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 96);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "span", 93);
    \u0275\u0275text(18, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 96);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.resolveAlertTarget.referenceNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.resolveAlertTarget.alertType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.resolveAlertTarget.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(21, 5, ctx_r0.resolveAlertTarget.sendAmount, "1.2-2"), " ", ctx_r0.resolveAlertTarget.sendCurrency, "");
  }
}
function ComplianceComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function ComplianceComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeResolvePopup());
    });
    \u0275\u0275elementStart(1, "div", 105);
    \u0275\u0275listener("click", function ComplianceComponent_div_24_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 80)(3, "h3", 81);
    \u0275\u0275text(4, "Resolve Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 82);
    \u0275\u0275listener("click", function ComplianceComponent_div_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeResolvePopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 83);
    \u0275\u0275element(7, "path", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, ComplianceComponent_div_24_div_8_Template, 22, 8, "div", 106);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 107)(10, "label", 108);
    \u0275\u0275text(11, "Resolution Notes *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 109);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceComponent_div_24_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.resolutionText, $event) || (ctx_r0.resolutionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 110)(14, "button", 111);
    \u0275\u0275listener("click", function ComplianceComponent_div_24_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeResolvePopup());
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 112);
    \u0275\u0275listener("click", function ComplianceComponent_div_24_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resolveAlert());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 13);
    \u0275\u0275element(18, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Resolve ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.resolveAlertTarget);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.resolutionText);
  }
}
var ComplianceComponent = class _ComplianceComponent {
  get openCount() {
    return this.alerts.filter((a) => !a.isResolved).length;
  }
  get resolvedCount() {
    return this.alerts.filter((a) => a.isResolved && a.resolution !== "Rejected").length;
  }
  get rejectedCount() {
    return this.alerts.filter((a) => a.isResolved && a.resolution === "Rejected").length;
  }
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.alerts = [];
    this.displayedColumns = [
      "reference",
      "sender",
      "receiver",
      "amount",
      "alertType",
      "txnStatus",
      "alertStatus",
      "created",
      "actions"
    ];
    this.loading = true;
    this.searchText = "";
    this.filterMode = "all";
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
    this.showResolvePopup = false;
    this.resolveAlertTarget = null;
    this.resolutionText = "";
    this.selectedAlert = null;
    this.Math = Math;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.searchText = s;
      this.pageIndex = 0;
      this.loadAlerts();
    });
    this.loadAlerts();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getResolvedParam() {
    switch (this.filterMode) {
      case "open":
        return false;
      case "resolved":
        return true;
      case "rejected":
        return true;
      default:
        return void 0;
    }
  }
  loadAlerts() {
    this.loading = true;
    const resolved = this.getResolvedParam();
    this.api.getAlertsPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchText }, resolved).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.alerts = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.alerts = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load alerts.");
        }
        this.loading = false;
      },
      error: () => {
        this.alerts = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  onFilterChange() {
    this.pageIndex = 0;
    this.loadAlerts();
  }
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadAlerts();
  }
  exportData(format) {
    this.exportService.export("api/admin/compliance/alerts/export", { search: this.searchText, resolved: this.getResolvedParam() }, format);
  }
  viewDetail(alert) {
    this.selectedAlert = alert;
  }
  closeDetail() {
    this.selectedAlert = null;
  }
  openResolvePopup(alert) {
    this.resolveAlertTarget = alert;
    this.resolutionText = "";
    this.showResolvePopup = true;
  }
  closeResolvePopup() {
    this.showResolvePopup = false;
    this.resolveAlertTarget = null;
    this.resolutionText = "";
  }
  resolveAlert() {
    if (!this.resolveAlertTarget)
      return;
    const resolution = this.resolutionText.trim();
    if (!resolution) {
      this.notify.warn("Please enter resolution notes.");
      return;
    }
    this.api.resolveAlert(this.resolveAlertTarget.id, resolution).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Alert resolved.");
        this.closeResolvePopup();
        this.loadAlerts();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  rejectAlert(alert) {
    this.api.rejectAlert(alert.id).subscribe((r) => {
      if (r?.success) {
        this.notify.warn("Alert rejected and transaction cancelled.");
        this.loadAlerts();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  getTxnStatusClass(status) {
    switch (status) {
      case "Completed":
        return "chip-success";
      case "Pending":
        return "chip-warning";
      case "OnHold":
        return "chip-info";
      case "Compliance":
        return "chip-compliance";
      case "Cancelled":
      case "Failed":
        return "chip-error";
      default:
        return "chip-default";
    }
  }
  getTxnStatusLabel(status) {
    return status === "OnHold" ? "On Hold" : status;
  }
  static {
    this.\u0275fac = function ComplianceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComplianceComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplianceComponent, selectors: [["app-compliance"]], decls: 25, vars: 9, consts: [[1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-100"], ["class", "flex flex-wrap gap-2", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "items-stretch", "sm:items-center", "gap-3", "mb-4", "flex-wrap"], [1, "inline-flex", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "overflow-hidden"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "relative", "flex-1", "min-w-[200px]", "max-w-md"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"], ["type", "text", "placeholder", "Search alerts...", 1, "w-full", "pl-10", "pr-8", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], ["class", "absolute right-2 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600 dark:hover:text-surface-300", 3, "click", 4, "ngIf"], [1, "flex-1"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-600", "text-sm", "font-medium", "transition", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden", 4, "ngIf"], ["class", "fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-3.5", "py-1.5", "rounded-full", "text-xs", "font-semibold", "bg-warning-100", "text-warning-700", "dark:bg-warning-900/30", "dark:text-warning-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"], [1, "inline-flex", "items-center", "gap-1.5", "px-3.5", "py-1.5", "rounded-full", "text-xs", "font-semibold", "bg-success-100", "text-success-700", "dark:bg-success-900/30", "dark:text-success-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "inline-flex", "items-center", "gap-1.5", "px-3.5", "py-1.5", "rounded-full", "text-xs", "font-semibold", "bg-danger-100", "text-danger-700", "dark:bg-danger-900/30", "dark:text-danger-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [3, "click"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-surface-400", "hover:text-surface-600", "dark:hover:text-surface-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "flex", "items-center", "justify-center", "py-20"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "bg-surface-50", "dark:bg-surface-700/50", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "px-4", "py-3", "font-semibold", "text-surface-600", "dark:text-surface-300"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-700/30 transition", 4, "ngFor", "ngForOf"], ["class", "flex flex-col items-center justify-center py-16 text-surface-400 dark:text-surface-500", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "px-4", "py-3", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "flex", "items-center", "gap-2", "text-sm", "text-surface-600", "dark:text-surface-400"], [1, "px-2", "py-1", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "text-sm", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "flex", "items-center", "gap-1"], ["title", "First page", 1, "p-1.5", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-30", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5", "text-surface-600", "dark:text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"], ["title", "Previous page", 1, "p-1.5", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-30", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 19.5 8.25 12l7.5-7.5"], ["title", "Next page", 1, "p-1.5", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-30", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m8.25 4.5 7.5 7.5-7.5 7.5"], ["title", "Last page", 1, "p-1.5", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-30", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-700/30", "transition"], [1, "px-4", "py-3", "font-mono", "text-xs", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3"], [1, "font-medium", "text-surface-900", "dark:text-surface-100"], ["class", "text-xs text-surface-500 dark:text-surface-400", 4, "ngIf"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "inline-block", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", "bg-warning-100", "text-warning-700", "dark:bg-warning-900/30", "dark:text-warning-400"], [1, "inline-block", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "px-4", "py-3", "text-surface-700", "dark:text-surface-300", "whitespace-nowrap"], [1, "px-4", "py-3", "whitespace-nowrap"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-brand-600", "dark:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], [4, "ngIf"], ["class", "inline-flex items-center gap-1 px-2 py-1 text-xs text-surface-400 dark:text-surface-500", 3, "title", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-success-600", "dark:text-success-400", "hover:bg-success-50", "dark:hover:bg-success-900/20", "transition", 3, "click"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-danger-600", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition", 3, "click"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "text-xs", "text-surface-400", "dark:text-surface-500", 3, "title"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "text-surface-400", "dark:text-surface-500"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-12", "h-12", "mb-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"], [1, "text-sm"], [1, "fixed", "inset-0", "z-[1000]", "flex", "items-center", "justify-center", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-2xl", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto", "m-4", "p-6", 3, "click"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-lg", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "p-1.5", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", "text-surface-500", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5"], [1, "rounded-xl", "p-4", "mb-4", 3, "ngClass"], [1, "flex", "items-center", "gap-2.5", "mb-1.5"], ["class", "w-5 h-5 text-warning-600 dark:text-warning-400", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "w-5 h-5 text-success-600 dark:text-success-400", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "text-sm", "text-surface-900", "dark:text-surface-100", "mr-2"], [1, "inline-block", "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-semibold", 3, "ngClass"], [1, "text-xs", "text-surface-600", "dark:text-surface-400", "mt-1"], ["class", "text-xs text-surface-600 dark:text-surface-400 mt-1.5", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-x-6", "gap-y-3"], [1, "block", "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "text-sm", "font-mono", "text-surface-900", "dark:text-surface-100"], [1, "inline-block", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", "mt-0.5", 3, "ngClass"], [1, "text-sm", "text-surface-900", "dark:text-surface-100"], [1, "my-4", "border-surface-200", "dark:border-surface-700"], [1, "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100"], ["class", "flex justify-end gap-3 mt-5 pt-4 border-t border-surface-200 dark:border-surface-700", 4, "ngIf"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5", "text-warning-600", "dark:text-warning-400"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5", "text-success-600", "dark:text-success-400"], [1, "text-xs", "text-surface-600", "dark:text-surface-400", "mt-1.5"], [1, "flex", "justify-end", "gap-3", "mt-5", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-danger-600", "text-white", "hover:bg-danger-700", "text-sm", "font-medium", "transition", 3, "click"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-2xl", "w-full", "max-w-md", "max-h-[90vh]", "overflow-y-auto", "m-4", "p-6", 3, "click"], ["class", "grid grid-cols-2 gap-3 p-3 mb-4 rounded-xl bg-surface-50 dark:bg-surface-700/50", 4, "ngIf"], [1, "mb-4"], [1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1"], ["rows", "3", "placeholder", "Describe the resolution...", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-3"], [1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-brand-600", "text-white", "hover:bg-brand-700", "text-sm", "font-medium", "transition", 3, "click"], [1, "grid", "grid-cols-2", "gap-3", "p-3", "mb-4", "rounded-xl", "bg-surface-50", "dark:bg-surface-700/50"]], template: function ComplianceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Compliance Alerts");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ComplianceComponent_div_3_Template, 16, 3, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
        \u0275\u0275template(6, ComplianceComponent_button_6_Template, 2, 3, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 7);
        \u0275\u0275element(9, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function ComplianceComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ComplianceComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.searchDebounce.next($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, ComplianceComponent_button_11_Template, 3, 0, "button", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "span", 11);
        \u0275\u0275elementStart(13, "button", 12);
        \u0275\u0275listener("click", function ComplianceComponent_Template_button_click_13_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 13);
        \u0275\u0275element(15, "path", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "button", 12);
        \u0275\u0275listener("click", function ComplianceComponent_Template_button_click_17_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 13);
        \u0275\u0275element(19, "path", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " CSV ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, ComplianceComponent_div_21_Template, 4, 0, "div", 15)(22, ComplianceComponent_div_22_Template, 54, 14, "div", 16)(23, ComplianceComponent_div_23_Template, 90, 51, "div", 17)(24, ComplianceComponent_div_24_Template, 20, 2, "div", 17);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(8, _c0));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchText);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedAlert);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showResolvePopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=compliance.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComplianceComponent, [{
    type: Component,
    args: [{ selector: "app-compliance", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DecimalPipe,
      DatePipe
    ], template: `<!-- Page Header -->
<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
  <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100">Compliance Alerts</h2>
  <div *ngIf="!loading" class="flex flex-wrap gap-2">
    <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400">
      <!-- warning icon -->
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>
      <span>{{ openCount }} Open</span>
    </div>
    <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400">
      <!-- check_circle icon -->
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
      <span>{{ resolvedCount }} Resolved</span>
    </div>
    <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400">
      <!-- cancel icon -->
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
      <span>{{ rejectedCount }} Rejected</span>
    </div>
  </div>
</div>

<!-- Toolbar -->
<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4 flex-wrap">
  <!-- Filter toggle group -->
  <div class="inline-flex rounded-lg border border-surface-300 dark:border-surface-600 overflow-hidden">
    <button *ngFor="let mode of ['all','open','resolved','rejected']"
            (click)="filterMode = $any(mode); onFilterChange()"
            [class]="filterMode === mode
              ? 'px-4 py-2 text-sm font-medium bg-brand-600 text-white'
              : 'px-4 py-2 text-sm font-medium bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-600 transition'">
      {{ mode === 'all' ? 'All' : mode === 'open' ? 'Open' : mode === 'resolved' ? 'Resolved' : 'Rejected' }}
    </button>
  </div>

  <!-- Search -->
  <div class="relative flex-1 min-w-[200px] max-w-md">
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
    <input type="text"
           placeholder="Search alerts..."
           [(ngModel)]="searchText"
           (ngModelChange)="searchDebounce.next($event)"
           class="w-full pl-10 pr-8 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition" />
    <button *ngIf="searchText"
            (click)="searchText = ''; searchDebounce.next('')"
            class="absolute right-2 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600 dark:hover:text-surface-300">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  </div>

  <span class="flex-1"></span>

  <!-- Export buttons -->
  <button (click)="exportData('excel')"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-600 text-sm font-medium transition">
    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
    Excel
  </button>
  <button (click)="exportData('csv')"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-600 text-sm font-medium transition">
    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
    CSV
  </button>
</div>

<!-- Loading -->
<div *ngIf="loading" class="flex items-center justify-center py-20">
  <svg class="animate-spin h-10 w-10 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>
</div>

<!-- Table -->
<div *ngIf="!loading" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden">
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left">
      <thead class="bg-surface-50 dark:bg-surface-700/50 border-b border-surface-200 dark:border-surface-700">
        <tr>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Reference</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Sender</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Receiver</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Amount</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Alert Type</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Txn Status</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Alert</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Created</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
        <tr *ngFor="let a of alerts" class="hover:bg-surface-50 dark:hover:bg-surface-700/30 transition">
          <!-- Reference -->
          <td class="px-4 py-3 font-mono text-xs text-surface-900 dark:text-surface-100">{{ a.referenceNumber }}</td>
          <!-- Sender -->
          <td class="px-4 py-3">
            <div class="font-medium text-surface-900 dark:text-surface-100">{{ a.senderName }}</div>
            <div *ngIf="a.senderCountry" class="text-xs text-surface-500 dark:text-surface-400">{{ a.senderCountry }}</div>
          </td>
          <!-- Receiver -->
          <td class="px-4 py-3">
            <div class="font-medium text-surface-900 dark:text-surface-100">{{ a.receiverName }}</div>
            <div *ngIf="a.receiverCountry" class="text-xs text-surface-500 dark:text-surface-400">{{ a.receiverCountry }}</div>
          </td>
          <!-- Amount -->
          <td class="px-4 py-3">
            <div class="font-medium text-surface-900 dark:text-surface-100">{{ a.sendAmount | number:'1.2-2' }} {{ a.sendCurrency }}</div>
            <div class="text-xs text-surface-500 dark:text-surface-400">&rarr; {{ a.receiveAmount | number:'1.2-2' }} {{ a.receiveCurrency }}</div>
          </td>
          <!-- Alert Type -->
          <td class="px-4 py-3">
            <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400">{{ a.alertType }}</span>
          </td>
          <!-- Txn Status -->
          <td class="px-4 py-3">
            <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold"
                  [ngClass]="{
                    'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400': a.transactionStatus === 'Completed',
                    'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400': a.transactionStatus === 'Pending',
                    'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400': a.transactionStatus === 'OnHold',
                    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400': a.transactionStatus === 'Compliance',
                    'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400': a.transactionStatus === 'Cancelled' || a.transactionStatus === 'Failed'
                  }">
              {{ getTxnStatusLabel(a.transactionStatus) }}
            </span>
          </td>
          <!-- Alert Status -->
          <td class="px-4 py-3">
            <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold"
                  [ngClass]="a.isResolved ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400' : 'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400'">
              {{ a.isResolved ? 'Resolved' : 'Open' }}
            </span>
          </td>
          <!-- Created -->
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300 whitespace-nowrap">{{ a.createdAt | date:'MMM dd, HH:mm' }}</td>
          <!-- Actions -->
          <td class="px-4 py-3 whitespace-nowrap">
            <div class="flex items-center gap-1">
              <button (click)="viewDetail(a)"
                      class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                View
              </button>

              <ng-container *ngIf="!a.isResolved">
                <button (click)="openResolvePopup(a)"
                        class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20 transition">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  Resolve
                </button>
                <button (click)="rejectAlert(a)"
                        class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  Reject
                </button>
              </ng-container>

              <span *ngIf="a.isResolved && a.resolution" [title]="a.resolution"
                    class="inline-flex items-center gap-1 px-2 py-1 text-xs text-surface-400 dark:text-surface-500">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>
                Notes
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Empty state -->
  <div *ngIf="alerts.length === 0 && !loading" class="flex flex-col items-center justify-center py-16 text-surface-400 dark:text-surface-500">
    <svg class="w-12 h-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>
    <p class="text-sm">No compliance alerts found.</p>
  </div>

  <!-- Pagination -->
  <div class="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-surface-200 dark:border-surface-700">
    <div class="flex items-center gap-2 text-sm text-surface-600 dark:text-surface-400">
      <span>Rows per page:</span>
      <select [(ngModel)]="pageSize" (ngModelChange)="pageIndex = 0; loadAlerts()"
              class="px-2 py-1 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none text-sm">
        <option [value]="10">10</option>
        <option [value]="20">20</option>
        <option [value]="50">50</option>
        <option [value]="100">100</option>
      </select>
      <span>{{ pageIndex * pageSize + 1 }}&ndash;{{ (pageIndex + 1) * pageSize > totalCount ? totalCount : (pageIndex + 1) * pageSize }} of {{ totalCount }}</span>
    </div>
    <div class="flex items-center gap-1">
      <button (click)="pageIndex = 0; loadAlerts()" [disabled]="pageIndex === 0"
              class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-30 disabled:cursor-not-allowed transition" title="First page">
        <svg class="w-5 h-5 text-surface-600 dark:text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"/></svg>
      </button>
      <button (click)="pageIndex = pageIndex - 1; loadAlerts()" [disabled]="pageIndex === 0"
              class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-30 disabled:cursor-not-allowed transition" title="Previous page">
        <svg class="w-5 h-5 text-surface-600 dark:text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/></svg>
      </button>
      <button (click)="pageIndex = pageIndex + 1; loadAlerts()" [disabled]="(pageIndex + 1) * pageSize >= totalCount"
              class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-30 disabled:cursor-not-allowed transition" title="Next page">
        <svg class="w-5 h-5 text-surface-600 dark:text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/></svg>
      </button>
      <button (click)="pageIndex = Math.ceil(totalCount / pageSize) - 1; loadAlerts()" [disabled]="(pageIndex + 1) * pageSize >= totalCount"
              class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-30 disabled:cursor-not-allowed transition" title="Last page">
        <svg class="w-5 h-5 text-surface-600 dark:text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"/></svg>
      </button>
    </div>
  </div>
</div>

<!-- Transaction Detail Overlay -->
<div *ngIf="selectedAlert" class="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm" (click)="closeDetail()">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4 p-6" (click)="$event.stopPropagation()">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-bold text-surface-900 dark:text-surface-100">Transaction &amp; Alert Details</h3>
      <button (click)="closeDetail()" class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition text-surface-500">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Alert Info Banner -->
    <div class="rounded-xl p-4 mb-4"
         [ngClass]="selectedAlert.isResolved
           ? 'bg-success-50 border border-success-200 dark:bg-success-900/20 dark:border-success-800'
           : 'bg-warning-50 border border-warning-200 dark:bg-warning-900/20 dark:border-warning-800'">
      <div class="flex items-center gap-2.5 mb-1.5">
        <svg *ngIf="!selectedAlert.isResolved" class="w-5 h-5 text-warning-600 dark:text-warning-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>
        <svg *ngIf="selectedAlert.isResolved" class="w-5 h-5 text-success-600 dark:text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        <strong class="text-sm text-surface-900 dark:text-surface-100 mr-2">{{ selectedAlert.alertType }}</strong>
        <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold"
              [ngClass]="selectedAlert.isResolved ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400' : 'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400'">
          {{ selectedAlert.isResolved ? 'Resolved' : 'Open' }}
        </span>
      </div>
      <p class="text-xs text-surface-600 dark:text-surface-400 mt-1">{{ selectedAlert.description }}</p>
      <p *ngIf="selectedAlert.isResolved && selectedAlert.resolution" class="text-xs text-surface-600 dark:text-surface-400 mt-1.5">
        <strong>Resolution:</strong> {{ selectedAlert.resolution }}
      </p>
    </div>

    <!-- Transaction Details -->
    <div class="grid grid-cols-2 gap-x-6 gap-y-3">
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Reference</span>
        <span class="text-sm font-mono text-surface-900 dark:text-surface-100">{{ selectedAlert.referenceNumber }}</span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Transaction Status</span>
        <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mt-0.5"
              [ngClass]="{
                'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400': selectedAlert.transactionStatus === 'Completed',
                'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400': selectedAlert.transactionStatus === 'Pending',
                'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400': selectedAlert.transactionStatus === 'OnHold',
                'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400': selectedAlert.transactionStatus === 'Compliance',
                'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400': selectedAlert.transactionStatus === 'Cancelled' || selectedAlert.transactionStatus === 'Failed'
              }">
          {{ getTxnStatusLabel(selectedAlert.transactionStatus) }}
        </span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Sender</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.senderName }}</span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Sender Country</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.senderCountry || '\\u2014' }}</span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Receiver</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.receiverName }}</span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Receiver Country</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.receiverCountry || '\\u2014' }}</span>
      </div>
      <div *ngIf="selectedAlert.receiverBankName">
        <span class="block text-xs text-surface-500 dark:text-surface-400">Bank</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.receiverBankName }}</span>
      </div>
      <div *ngIf="selectedAlert.receiverAccountNumber">
        <span class="block text-xs text-surface-500 dark:text-surface-400">Account</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.receiverAccountNumber }}</span>
      </div>
    </div>

    <hr class="my-4 border-surface-200 dark:border-surface-700" />

    <div class="grid grid-cols-2 gap-x-6 gap-y-3">
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Send Amount</span>
        <span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ selectedAlert.sendAmount | number:'1.2-2' }} {{ selectedAlert.sendCurrency }}</span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Receive Amount</span>
        <span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ selectedAlert.receiveAmount | number:'1.2-2' }} {{ selectedAlert.receiveCurrency }}</span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Exchange Rate</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.exchangeRateApplied | number:'1.4-4' }}</span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Total Service Charge</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.totalCommission | number:'1.2-2' }}</span>
      </div>
      <div *ngIf="selectedAlert.paymentMethodName">
        <span class="block text-xs text-surface-500 dark:text-surface-400">Payment Method</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.paymentMethodName }}</span>
      </div>
      <div *ngIf="selectedAlert.payoutMethodName">
        <span class="block text-xs text-surface-500 dark:text-surface-400">Payout Method</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.payoutMethodName }}</span>
      </div>
      <div *ngIf="selectedAlert.sendingAgentName">
        <span class="block text-xs text-surface-500 dark:text-surface-400">Sending Agent</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.sendingAgentName }}</span>
      </div>
      <div *ngIf="selectedAlert.payoutAgentName">
        <span class="block text-xs text-surface-500 dark:text-surface-400">Payout Partner</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.payoutAgentName }}</span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Alert Created</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.createdAt | date:'dd/MM/yyyy HH:mm' }}</span>
      </div>
      <div *ngIf="selectedAlert.resolvedAt">
        <span class="block text-xs text-surface-500 dark:text-surface-400">Resolved At</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedAlert.resolvedAt | date:'dd/MM/yyyy HH:mm' }}</span>
      </div>
    </div>

    <!-- Action Buttons for Open Alerts -->
    <div *ngIf="!selectedAlert.isResolved" class="flex justify-end gap-3 mt-5 pt-4 border-t border-surface-200 dark:border-surface-700">
      <button (click)="openResolvePopup(selectedAlert); closeDetail()"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-600 text-sm font-medium transition">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        Resolve &amp; Release
      </button>
      <button (click)="rejectAlert(selectedAlert); closeDetail()"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-danger-600 text-white hover:bg-danger-700 text-sm font-medium transition">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        Reject &amp; Cancel
      </button>
    </div>
  </div>
</div>

<!-- Resolve Popup Overlay -->
<div *ngIf="showResolvePopup" class="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm" (click)="closeResolvePopup()">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto m-4 p-6" (click)="$event.stopPropagation()">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-bold text-surface-900 dark:text-surface-100">Resolve Alert</h3>
      <button (click)="closeResolvePopup()" class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition text-surface-500">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Info -->
    <div *ngIf="resolveAlertTarget" class="grid grid-cols-2 gap-3 p-3 mb-4 rounded-xl bg-surface-50 dark:bg-surface-700/50">
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Reference</span>
        <span class="text-sm font-mono text-surface-900 dark:text-surface-100">{{ resolveAlertTarget.referenceNumber }}</span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Alert Type</span>
        <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400">{{ resolveAlertTarget.alertType }}</span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Sender</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ resolveAlertTarget.senderName }}</span>
      </div>
      <div>
        <span class="block text-xs text-surface-500 dark:text-surface-400">Amount</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ resolveAlertTarget.sendAmount | number:'1.2-2' }} {{ resolveAlertTarget.sendCurrency }}</span>
      </div>
    </div>

    <!-- Resolution Notes -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Resolution Notes *</label>
      <textarea [(ngModel)]="resolutionText" rows="3" placeholder="Describe the resolution..."
                class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition"></textarea>
    </div>

    <!-- Actions -->
    <div class="flex justify-end gap-3">
      <button (click)="closeResolvePopup()"
              class="px-4 py-2 rounded-lg text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        Cancel
      </button>
      <button (click)="resolveAlert()"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 text-sm font-medium transition">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        Resolve
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/compliance/compliance.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=compliance.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplianceComponent, { className: "ComplianceComponent", filePath: "src/app/pages/admin/compliance/compliance.component.ts", lineNumber: 24 });
})();
export {
  ComplianceComponent
};
//# sourceMappingURL=chunk-CHLLZHVP.js.map
