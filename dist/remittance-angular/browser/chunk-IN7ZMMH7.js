import {
  ExportService
} from "./chunk-FDFRARSK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  DatePipe,
  DecimalPipe,
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
  ɵɵpureFunction3,
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
} from "./chunk-EU7HC72Q.js";
import "./chunk-S5KMCARS.js";

// src/app/pages/admin/accounting/accounting.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400": a0, "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400": a1, "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400": a2 });
function AccountingComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "circle", 14)(3, "path", 15);
    \u0275\u0275elementEnd()();
  }
}
function AccountingComponent_div_13_tr_24_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const a_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", a_r4.commissionMode === "Percentage" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r4.commissionMode === "Percentage" ? \u0275\u0275pipeBind2(3, 2, a_r4.commissionValue, "1.2-2") + "%" : "Flat " + \u0275\u0275pipeBind2(4, 5, a_r4.commissionValue, "1.2-2"), " ");
  }
}
function AccountingComponent_div_13_tr_24_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "Not set");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_13_tr_24_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function AccountingComponent_div_13_tr_24_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const a_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAdjustments(a_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "path", 57);
    \u0275\u0275elementEnd()();
  }
}
function AccountingComponent_div_13_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39)(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 41)(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 41);
    \u0275\u0275template(7, AccountingComponent_div_13_tr_24_ng_container_7_Template, 5, 8, "ng-container", 43)(8, AccountingComponent_div_13_tr_24_span_8_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 45);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 46)(13, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 41)(17, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 41)(20, "div", 47)(21, "button", 48);
    \u0275\u0275listener("click", function AccountingComponent_div_13_tr_24_Template_button_click_21_listener() {
      const a_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(a_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 49);
    \u0275\u0275element(23, "path", 50)(24, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, AccountingComponent_div_13_tr_24_button_25_Template, 3, 0, "button", 52);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "button", 53);
    \u0275\u0275listener("click", function AccountingComponent_div_13_tr_24_Template_button_click_26_listener() {
      const a_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCommissionSetup(a_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 49);
    \u0275\u0275element(28, "path", 54);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", a_r4.agentType === "PayoutAgent" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r4.agentType === "PayoutAgent" ? "Payout" : "Sending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", a_r4.commissionMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !a_r4.commissionMode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 11, a_r4.effectiveCreditLimit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", a_r4.availableBalance >= 0 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 14, a_r4.availableBalance, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(17, _c0, a_r4.status === "Approved", a_r4.status === "Blocked" || a_r4.status === "Rejected", a_r4.status !== "Approved" && a_r4.status !== "Blocked" && a_r4.status !== "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r4.status);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", a_r4.agentType === "SendingAgent");
  }
}
function AccountingComponent_div_13_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1, "No agents found.");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 18);
    \u0275\u0275element(3, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_13_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AccountingComponent_div_13_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchDebounce.next($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21)(6, "table", 22)(7, "thead")(8, "tr", 23)(9, "th", 24);
    \u0275\u0275text(10, "Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 24);
    \u0275\u0275text(12, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 24);
    \u0275\u0275text(14, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 25);
    \u0275\u0275text(16, "Effective Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 25);
    \u0275\u0275text(18, "Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 24);
    \u0275\u0275text(20, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 24);
    \u0275\u0275text(22, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, AccountingComponent_div_13_tr_24_Template, 29, 21, "tr", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, AccountingComponent_div_13_div_25_Template, 2, 0, "div", 27);
    \u0275\u0275elementStart(26, "div", 28)(27, "span", 29);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 2)(30, "label", 29);
    \u0275\u0275text(31, "Rows:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 30);
    \u0275\u0275listener("ngModelChange", function AccountingComponent_div_13_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275elementStart(33, "option", 31);
    \u0275\u0275text(34, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 31);
    \u0275\u0275text(36, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 31);
    \u0275\u0275text(38, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 31);
    \u0275\u0275text(40, "100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "button", 32);
    \u0275\u0275listener("click", function AccountingComponent_div_13_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(0));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 33);
    \u0275\u0275element(43, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "button", 32);
    \u0275\u0275listener("click", function AccountingComponent_div_13_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pageIndex - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 33);
    \u0275\u0275element(46, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "span", 36);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 32);
    \u0275\u0275listener("click", function AccountingComponent_div_13_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pageIndex + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 33);
    \u0275\u0275element(51, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "button", 32);
    \u0275\u0275listener("click", function AccountingComponent_div_13_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.totalPages - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 33);
    \u0275\u0275element(54, "path", 38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.summaries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.summaries.length && !ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r1.summaries.length ? ctx_r1.pageIndex * ctx_r1.pageSize + 1 : 0, "\u2013", ctx_r1.pageIndex * ctx_r1.pageSize + ctx_r1.summaries.length, " of ", ctx_r1.totalCount, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 100);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.pageIndex + 1, " of ", ctx_r1.totalPages || 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
  }
}
function AccountingComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function AccountingComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetailPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_15_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.commissionMode === "Percentage" ? \u0275\u0275pipeBind2(3, 1, ctx_r1.detailAgent.commissionValue, "1.2-2") + "%" : "Flat " + \u0275\u0275pipeBind2(4, 4, ctx_r1.detailAgent.commissionValue, "1.2-2"));
  }
}
function AccountingComponent_div_15_span_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "Not set");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "h3", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 64);
    \u0275\u0275listener("click", function AccountingComponent_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetailPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 65);
    \u0275\u0275element(7, "path", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 67)(9, "div")(10, "span", 68);
    \u0275\u0275text(11, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 69);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "span", 68);
    \u0275\u0275text(16, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 69);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "span", 68);
    \u0275\u0275text(21, "Funding Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 69);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "span", 68);
    \u0275\u0275text(26, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 70);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "span", 68);
    \u0275\u0275text(31, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 70);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(34, "hr", 71);
    \u0275\u0275elementStart(35, "div", 67)(36, "div")(37, "span", 68);
    \u0275\u0275text(38, "Base Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 69);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "span", 68);
    \u0275\u0275text(44, "Effective Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 72);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div")(49, "span", 68);
    \u0275\u0275text(50, "Current Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 69);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div")(55, "span", 68);
    \u0275\u0275text(56, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 70);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div")(61, "span", 68);
    \u0275\u0275text(62, "Active Adjustments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 69);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div")(66, "span", 68);
    \u0275\u0275text(67, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275template(68, AccountingComponent_div_15_ng_container_68_Template, 5, 7, "ng-container", 43)(69, AccountingComponent_div_15_span_69_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.detailAgent.businessName, " \u2014 Setup");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.country);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.currency || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.fundingType || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.detailAgent.agentType === "PayoutAgent" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.agentType === "PayoutAgent" ? "Payout Agent" : "Sending Agent");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(28, _c0, ctx_r1.detailAgent.status === "Approved", ctx_r1.detailAgent.status === "Blocked", ctx_r1.detailAgent.status !== "Approved" && ctx_r1.detailAgent.status !== "Blocked"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.status);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 16, ctx_r1.detailAgent.baseCreditLimit, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 19, ctx_r1.detailAgent.effectiveCreditLimit, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 22, ctx_r1.detailAgent.currentBalance, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.detailAgent.availableBalance >= 0 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 25, ctx_r1.detailAgent.availableBalance, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.activeAdjustments);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.detailAgent.commissionMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.detailAgent.commissionMode);
  }
}
function AccountingComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275listener("click", function AccountingComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.adjustmentFormError);
  }
}
function AccountingComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "div", 62)(3, "h3", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 64);
    \u0275\u0275listener("click", function AccountingComponent_div_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 65);
    \u0275\u0275element(7, "path", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 78);
    \u0275\u0275template(9, AccountingComponent_div_17_div_9_Template, 2, 1, "div", 79);
    \u0275\u0275elementStart(10, "div")(11, "label", 80);
    \u0275\u0275text(12, "Amount (+ increase / - decrease) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_17_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.amount, $event) || (ctx_r1.adjustmentForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "label", 80);
    \u0275\u0275text(16, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 82);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_17_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.durationDays, $event) || (ctx_r1.adjustmentForm.durationDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 83);
    \u0275\u0275text(19, "Permanent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 83);
    \u0275\u0275text(21, "2 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 83);
    \u0275\u0275text(23, "3 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 83);
    \u0275\u0275text(25, "7 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 83);
    \u0275\u0275text(27, "30 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 83);
    \u0275\u0275text(29, "90 Days");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div")(31, "label", 80);
    \u0275\u0275text(32, "Notes (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "textarea", 84);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_17_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.notes, $event) || (ctx_r1.adjustmentForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 85)(35, "button", 86);
    \u0275\u0275listener("click", function AccountingComponent_div_17_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentForm());
    });
    \u0275\u0275text(36, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 87);
    \u0275\u0275listener("click", function AccountingComponent_div_17_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createAdjustment());
    });
    \u0275\u0275text(38, "Save");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Adjust Limit \u2014 ", ctx_r1.adjustmentAgent == null ? null : ctx_r1.adjustmentAgent.businessName, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.adjustmentFormError);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adjustmentForm.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adjustmentForm.durationDays);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 30);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 90);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adjustmentForm.notes);
  }
}
function AccountingComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function AccountingComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_19_div_11_tr_17_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 104);
    \u0275\u0275listener("click", function AccountingComponent_div_19_div_11_tr_17_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const adj_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deactivateAdjustment(adj_r13));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "path", 105);
    \u0275\u0275elementEnd()();
  }
}
function AccountingComponent_div_19_div_11_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 99)(1, "td", 100);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 101);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 101);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 101);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 102)(13, "span", 70);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 102);
    \u0275\u0275template(16, AccountingComponent_div_19_div_11_tr_17_button_16_Template, 3, 0, "button", 103);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const adj_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", adj_r13.amount >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", adj_r13.amount >= 0 ? "+" : "", "", \u0275\u0275pipeBind2(3, 9, adj_r13.amount, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 12, adj_r13.effectiveFrom, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(adj_r13.effectiveTo ? \u0275\u0275pipeBind2(9, 15, adj_r13.effectiveTo, "dd/MM/yyyy") : "Permanent");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(adj_r13.notes || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", adj_r13.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(adj_r13.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", adj_r13.isActive);
  }
}
function AccountingComponent_div_19_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "table", 22)(2, "thead", 95)(3, "tr")(4, "th", 96);
    \u0275\u0275text(5, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 96);
    \u0275\u0275text(7, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 96);
    \u0275\u0275text(9, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 96);
    \u0275\u0275text(11, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 96);
    \u0275\u0275text(13, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 96);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 97);
    \u0275\u0275template(17, AccountingComponent_div_19_div_11_tr_17_Template, 17, 18, "tr", 98);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.adjustments);
  }
}
function AccountingComponent_div_19_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275text(1, "No adjustments found.");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 89)(2, "div", 62)(3, "h3", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 64);
    \u0275\u0275listener("click", function AccountingComponent_div_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 65);
    \u0275\u0275element(7, "path", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 90)(9, "button", 91);
    \u0275\u0275listener("click", function AccountingComponent_div_19_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdjustmentForm());
    });
    \u0275\u0275text(10, "+ Add Adjustment");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AccountingComponent_div_19_div_11_Template, 18, 1, "div", 92)(12, AccountingComponent_div_19_div_12_Template, 2, 0, "div", 93);
    \u0275\u0275elementStart(13, "div", 94)(14, "button", 86);
    \u0275\u0275listener("click", function AccountingComponent_div_19_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentPopup());
    });
    \u0275\u0275text(15, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Adjustment History \u2014 ", ctx_r1.adjustmentAgent == null ? null : ctx_r1.adjustmentAgent.businessName, "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.adjustments.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.adjustments.length);
  }
}
function AccountingComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function AccountingComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCommissionPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_21_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.commissionFormError);
  }
}
function AccountingComponent_div_21__svg_svg_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 111);
    \u0275\u0275element(1, "circle", 14)(2, "path", 15);
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 77)(2, "div", 62)(3, "h3", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 64);
    \u0275\u0275listener("click", function AccountingComponent_div_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCommissionPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 65);
    \u0275\u0275element(7, "path", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 78);
    \u0275\u0275template(9, AccountingComponent_div_21_div_9_Template, 2, 1, "div", 79);
    \u0275\u0275elementStart(10, "div")(11, "label", 80);
    \u0275\u0275text(12, "Service Charge Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 82);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_21_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.commissionForm.commissionType, $event) || (ctx_r1.commissionForm.commissionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 107);
    \u0275\u0275text(15, "Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 108);
    \u0275\u0275text(17, "Flat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div")(19, "label", 80);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_21_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.commissionForm.commissionValue, $event) || (ctx_r1.commissionForm.commissionValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 85)(23, "button", 86);
    \u0275\u0275listener("click", function AccountingComponent_div_21_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCommissionPopup());
    });
    \u0275\u0275text(24, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 109);
    \u0275\u0275listener("click", function AccountingComponent_div_21_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveAgentCommission());
    });
    \u0275\u0275template(26, AccountingComponent_div_21__svg_svg_26_Template, 3, 0, "svg", 110);
    \u0275\u0275text(27, " Save ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Agent Service Charge \u2014 ", ctx_r1.commissionAgent == null ? null : ctx_r1.commissionAgent.businessName, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.commissionFormError);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.commissionForm.commissionType);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.commissionForm.commissionType === "Percentage" ? "Service Charge Percentage (%)" : "Flat Fee Amount");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.commissionForm.commissionValue);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.savingCommission);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingCommission);
  }
}
function emptyAdjustmentForm() {
  return { amount: 0, durationDays: null, notes: "" };
}
function emptyCommissionSetupForm() {
  return { commissionType: "Percentage", commissionValue: 0, isActive: true };
}
var AccountingComponent = class _AccountingComponent {
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.summaries = [];
    this.displayedColumns = ["businessName", "agentType", "commission", "effectiveLimit", "available", "status", "actions"];
    this.searchString = "";
    this.loading = true;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.pageSizeOptions = [10, 20, 50, 100];
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
    this.showDetailPopup = false;
    this.detailAgent = null;
    this.showAdjustmentPopup = false;
    this.adjustmentAgent = null;
    this.adjustments = [];
    this.showAdjustmentForm = false;
    this.adjustmentFormError = "";
    this.adjustmentForm = emptyAdjustmentForm();
    this.showCommissionPopup = false;
    this.commissionAgent = null;
    this.agentCommission = null;
    this.commissionFormError = "";
    this.commissionForm = emptyCommissionSetupForm();
    this.savingCommission = false;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.searchString = s;
      this.pageIndex = 0;
      this.loadAccountingSummaries();
    });
    this.loadAccountingSummaries();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ---------------------------------------------------------------------------
  // Summaries
  // ---------------------------------------------------------------------------
  loadAccountingSummaries() {
    this.loading = true;
    this.api.getAccountingSummariesPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.summaries = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.summaries = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load data.");
        }
        this.loading = false;
      },
      error: () => {
        this.summaries = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  onPageChange(page) {
    this.pageIndex = page;
    this.loadAccountingSummaries();
  }
  onPageSizeChange(size) {
    this.pageSize = size;
    this.pageIndex = 0;
    this.loadAccountingSummaries();
  }
  get totalPages() {
    return Math.ceil(this.totalCount / this.pageSize) || 1;
  }
  exportData(format) {
    this.exportService.export("api/admin/accounting/agents/export", { search: this.searchString }, format);
  }
  // ---------------------------------------------------------------------------
  // Detail popup
  // ---------------------------------------------------------------------------
  viewDetail(agent) {
    this.detailAgent = agent;
    this.showDetailPopup = true;
  }
  closeDetailPopup() {
    this.showDetailPopup = false;
  }
  // ---------------------------------------------------------------------------
  // Adjustments popup
  // ---------------------------------------------------------------------------
  openAdjustments(agent) {
    this.adjustmentAgent = agent;
    this.showAdjustmentForm = false;
    this.loadAdjustments(agent.agentId);
    this.showAdjustmentPopup = true;
  }
  closeAdjustmentPopup() {
    this.showAdjustmentPopup = false;
  }
  loadAdjustments(agentId) {
    this.api.getAgentAdjustments(agentId).subscribe((r) => {
      if (r?.success && r.data)
        this.adjustments = r.data;
      else
        this.adjustments = [];
    });
  }
  openAdjustmentForm() {
    this.adjustmentForm = emptyAdjustmentForm();
    this.adjustmentFormError = "";
    this.showAdjustmentForm = true;
  }
  closeAdjustmentForm() {
    this.showAdjustmentForm = false;
  }
  createAdjustment() {
    this.adjustmentFormError = "";
    const f = this.adjustmentForm;
    if (!f.amount) {
      this.adjustmentFormError = "Amount cannot be zero.";
      return;
    }
    const dto = {
      agentId: this.adjustmentAgent?.agentId,
      amount: f.amount,
      durationDays: f.durationDays,
      notes: f.notes || null
    };
    this.api.createAdjustment(dto).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Adjustment created.");
        this.showAdjustmentForm = false;
        if (this.adjustmentAgent)
          this.loadAdjustments(this.adjustmentAgent.agentId);
        this.loadAccountingSummaries();
      } else {
        this.adjustmentFormError = r?.message || "Failed.";
      }
    });
  }
  deactivateAdjustment(adj) {
    this.api.deactivateAdjustment(adj.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Adjustment deactivated.");
        if (this.adjustmentAgent)
          this.loadAdjustments(this.adjustmentAgent.agentId);
        this.loadAccountingSummaries();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Commission Setup popup
  // ---------------------------------------------------------------------------
  openCommissionSetup(agent) {
    this.commissionAgent = agent;
    this.commissionFormError = "";
    this.agentCommission = null;
    this.commissionForm = emptyCommissionSetupForm();
    this.loadAgentCommission(agent.agentId);
    this.showCommissionPopup = true;
  }
  closeCommissionPopup() {
    this.showCommissionPopup = false;
  }
  loadAgentCommission(agentId) {
    this.api.getAgentCommission(agentId).subscribe((r) => {
      if (r?.success && r.data) {
        this.agentCommission = r.data;
        this.commissionForm = {
          commissionType: r.data.commissionType,
          commissionValue: r.data.commissionValue,
          isActive: r.data.isActive
        };
      } else {
        this.agentCommission = null;
        this.commissionForm = emptyCommissionSetupForm();
      }
    });
  }
  saveAgentCommission() {
    this.commissionFormError = "";
    if (this.commissionForm.commissionValue <= 0) {
      this.commissionFormError = "Commission value must be greater than zero.";
      return;
    }
    if (this.commissionForm.commissionType === "Percentage" && this.commissionForm.commissionValue > 100) {
      this.commissionFormError = "Percentage cannot exceed 100%.";
      return;
    }
    this.savingCommission = true;
    const dto = {
      agentId: this.commissionAgent?.agentId,
      commissionType: this.commissionForm.commissionType,
      commissionValue: this.commissionForm.commissionValue,
      isActive: this.commissionForm.isActive
    };
    this.api.saveAgentCommission(dto).subscribe({
      next: (r) => {
        if (r?.success) {
          this.notify.success("Commission configuration saved.");
          if (r.data)
            this.agentCommission = r.data;
          this.loadAccountingSummaries();
        } else {
          this.commissionFormError = r?.message || "Failed.";
        }
        this.savingCommission = false;
      },
      error: () => {
        this.commissionFormError = "Server error.";
        this.savingCommission = false;
      }
    });
  }
  deleteAgentCommission() {
    if (!this.commissionAgent)
      return;
    this.api.deleteAgentCommission(this.commissionAgent.agentId).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Commission configuration deleted.");
        this.agentCommission = null;
        this.commissionForm = emptyCommissionSetupForm();
        this.loadAccountingSummaries();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function AccountingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountingComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountingComponent, selectors: [["app-accounting"]], decls: 22, vars: 10, consts: [[1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-800", "text-surface-700", "dark:text-surface-200", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition", "text-sm", "font-medium", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "class", "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], ["class", "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "class", "fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "relative", "mb-4", "max-w-md"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search agents...", 1, "w-full", "pl-10", "pr-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "border-b", "border-surface-200", "dark:border-surface-700"], ["scope", "col", 1, "px-4", "py-3", "font-semibold", "text-surface-600", "dark:text-surface-300"], ["scope", "col", 1, "px-4", "py-3", "font-semibold", "text-surface-600", "dark:text-surface-300", "text-right"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], ["class", "text-center py-12 text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "mt-4", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "px-2", "py-1", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "text-sm", "outline-none", "focus:ring-2", "focus:ring-brand-500", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "p-1.5", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "disabled:opacity-40", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-surface-600", "dark:text-surface-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 19l-7-7 7-7m8 14l-7-7 7-7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "text-sm", "text-surface-700", "dark:text-surface-300", "px-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 5l7 7-7 7M5 5l7 7-7 7"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100", "font-medium"], [1, "px-4", "py-3"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [4, "ngIf"], ["class", "text-surface-400 dark:text-surface-500", 4, "ngIf"], [1, "px-4", "py-3", "text-right", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-right"], [1, "flex", "items-center", "gap-0.5"], ["aria-label", "View Details", 1, "p-1.5", "rounded", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["aria-label", "Adjust Limit", "class", "p-1.5 rounded text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20", 3, "click", 4, "ngIf"], ["aria-label", "Commission", 1, "p-1.5", "rounded", "text-purple-600", "hover:bg-purple-50", "dark:hover:bg-purple-900/20", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-surface-400", "dark:text-surface-500"], ["aria-label", "Adjust Limit", 1, "p-1.5", "rounded", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"], [1, "text-center", "py-12", "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "fixed", "inset-0", "z-50", "bg-black/50", "backdrop-blur-sm", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-lg", "pointer-events-auto", "max-h-[90vh]", "overflow-y-auto"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "text-base", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "p-1", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-surface-400", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "grid", "grid-cols-2", "gap-x-6", "gap-y-3", "p-6", "text-sm"], [1, "block", "text-xs", "text-surface-400", "mb-0.5"], [1, "text-surface-900", "dark:text-surface-100"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "text-xs", "font-medium", "rounded-full", 3, "ngClass"], [1, "border-surface-100", "dark:border-surface-700"], [1, "text-surface-900", "dark:text-surface-100", "font-semibold"], ["class", "text-surface-400", 4, "ngIf"], [1, "text-surface-400"], [1, "fixed", "inset-0", "z-[60]", "bg-black/50", "backdrop-blur-sm", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "fixed", "inset-0", "z-[60]", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "pointer-events-auto", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "space-y-4"], ["class", "px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg", 4, "ngIf"], [1, "block", "text-xs", "font-medium", "text-surface-500", "mb-1"], ["type", "number", 1, "w-full", "px-3", "py-2", "text-sm", "bg-white", "dark:bg-surface-700", "border", "border-surface-200", "dark:border-surface-600", "rounded-lg", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-3", "py-2", "text-sm", "bg-white", "dark:bg-surface-700", "border", "border-surface-200", "dark:border-surface-600", "rounded-lg", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["rows", "2", 1, "w-full", "px-3", "py-2", "text-sm", "bg-white", "dark:bg-surface-700", "border", "border-surface-200", "dark:border-surface-600", "rounded-lg", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-lg", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "bg-brand-600", "hover:bg-brand-700", "text-white", "rounded-lg", 3, "click"], [1, "px-4", "py-2", "bg-red-50", "dark:bg-red-900/20", "text-red-700", "dark:text-red-400", "text-sm", "rounded-lg"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-3xl", "pointer-events-auto", "max-h-[90vh]", "overflow-y-auto"], [1, "px-6", "py-3"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-2", "text-sm", "font-semibold", "bg-brand-600", "hover:bg-brand-700", "text-white", "rounded-lg", "transition-colors", 3, "click"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "px-6 py-8 text-center text-sm text-surface-400 border-t border-dashed border-surface-200 dark:border-surface-700", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "px-6", "py-4", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "text-xs", "uppercase", "tracking-wider", "text-surface-500", "bg-surface-50", "dark:bg-surface-900/50", "border-y", "border-surface-200", "dark:border-surface-700"], ["scope", "col", 1, "px-4", "py-2.5"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-750", 4, "ngFor", "ngForOf"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-750"], [1, "px-4", "py-2.5", "font-semibold", 3, "ngClass"], [1, "px-4", "py-2.5", "text-surface-600", "dark:text-surface-300"], [1, "px-4", "py-2.5"], ["aria-label", "Deactivate", "class", "p-1.5 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20", 3, "click", 4, "ngIf"], ["aria-label", "Deactivate", 1, "p-1.5", "rounded", "text-red-500", "hover:bg-red-50", "dark:hover:bg-red-900/20", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"], [1, "px-6", "py-8", "text-center", "text-sm", "text-surface-400", "border-t", "border-dashed", "border-surface-200", "dark:border-surface-700"], ["value", "Percentage"], ["value", "Flat"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "text-sm", "font-semibold", "bg-brand-600", "hover:bg-brand-700", "text-white", "rounded-lg", "shadow-sm", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["class", "animate-spin w-4 h-4", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"]], template: function AccountingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Setup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function AccountingComponent_Template_button_click_4_listener() {
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
        \u0275\u0275listener("click", function AccountingComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 4);
        \u0275\u0275element(10, "path", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, AccountingComponent_div_12_Template, 4, 0, "div", 6)(13, AccountingComponent_div_13_Template, 55, 17, "div", 7)(14, AccountingComponent_div_14_Template, 1, 0, "div", 8)(15, AccountingComponent_div_15_Template, 70, 32, "div", 9)(16, AccountingComponent_div_16_Template, 1, 0, "div", 10)(17, AccountingComponent_div_17_Template, 39, 11, "div", 11)(18, AccountingComponent_div_18_Template, 1, 0, "div", 8)(19, AccountingComponent_div_19_Template, 16, 3, "div", 9)(20, AccountingComponent_div_20_Template, 1, 0, "div", 8)(21, AccountingComponent_div_21_Template, 28, 7, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetailPopup && ctx.detailAgent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetailPopup && ctx.detailAgent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAdjustmentForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAdjustmentForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAdjustmentPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAdjustmentPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCommissionPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCommissionPopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=accounting.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountingComponent, [{
    type: Component,
    args: [{ selector: "app-accounting", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DecimalPipe,
      DatePipe
    ], template: `<!-- Page Header -->
<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
  <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">Setup</h2>
  <div class="flex items-center gap-2">
    <button (click)="exportData('excel')" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm font-medium">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
      Excel
    </button>
    <button (click)="exportData('csv')" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm font-medium">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
      CSV
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
    <input type="text" placeholder="Search agents..." [(ngModel)]="searchString" (ngModelChange)="searchDebounce.next($event)"
      class="w-full pl-10 pr-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left">
      <thead>
        <tr class="border-b border-surface-200 dark:border-surface-700">
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Agent</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Type</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Service Charge</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300 text-right">Effective Limit</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300 text-right">Available</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Status</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let a of summaries" class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100 font-medium">{{ a.businessName }}</td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" [ngClass]="a.agentType === 'PayoutAgent' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'">
              {{ a.agentType === 'PayoutAgent' ? 'Payout' : 'Sending' }}
            </span>
          </td>
          <td class="px-4 py-3">
            <ng-container *ngIf="a.commissionMode">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" [ngClass]="a.commissionMode === 'Percentage' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'">
                {{ a.commissionMode === 'Percentage' ? (a.commissionValue | number:'1.2-2') + '%' : 'Flat ' + (a.commissionValue | number:'1.2-2') }}
              </span>
            </ng-container>
            <span *ngIf="!a.commissionMode" class="text-surface-400 dark:text-surface-500">Not set</span>
          </td>
          <td class="px-4 py-3 text-right font-semibold text-surface-900 dark:text-surface-100">{{ a.effectiveCreditLimit | number:'1.2-2' }}</td>
          <td class="px-4 py-3 text-right">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" [ngClass]="a.availableBalance >= 0 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'">
              {{ a.availableBalance | number:'1.2-2' }}
            </span>
          </td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" [ngClass]="{
              'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400': a.status === 'Approved',
              'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400': a.status === 'Blocked' || a.status === 'Rejected',
              'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400': a.status !== 'Approved' && a.status !== 'Blocked' && a.status !== 'Rejected'
            }">{{ a.status }}</span>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-0.5">
              <button aria-label="View Details" (click)="viewDetail(a)" class="p-1.5 rounded text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg></button>
              <button *ngIf="a.agentType === 'SendingAgent'" aria-label="Adjust Limit" (click)="openAdjustments(a)" class="p-1.5 rounded text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/></svg></button>
              <button aria-label="Commission" (click)="openCommissionSetup(a)" class="p-1.5 rounded text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div *ngIf="!summaries.length && !loading" class="text-center py-12 text-surface-400 dark:text-surface-500 text-sm">No agents found.</div>

  <!-- Pagination -->
  <div class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
    <span class="text-sm text-surface-500 dark:text-surface-400">
      Showing {{ summaries.length ? pageIndex * pageSize + 1 : 0 }}&ndash;{{ pageIndex * pageSize + summaries.length }} of {{ totalCount }}
    </span>
    <div class="flex items-center gap-2">
      <label class="text-sm text-surface-500 dark:text-surface-400">Rows:</label>
      <select [ngModel]="pageSize" (ngModelChange)="onPageSizeChange($event)" class="px-2 py-1 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 text-sm outline-none focus:ring-2 focus:ring-brand-500">
        <option [value]="10">10</option><option [value]="20">20</option><option [value]="50">50</option><option [value]="100">100</option>
      </select>
      <button (click)="onPageChange(0)" [disabled]="pageIndex === 0" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg>
      </button>
      <button (click)="onPageChange(pageIndex - 1)" [disabled]="pageIndex === 0" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <span class="text-sm text-surface-700 dark:text-surface-300 px-2">Page {{ pageIndex + 1 }} of {{ totalPages || 1 }}</span>
      <button (click)="onPageChange(pageIndex + 1)" [disabled]="pageIndex >= totalPages - 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>
      <button (click)="onPageChange(totalPages - 1)" [disabled]="pageIndex >= totalPages - 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>
      </button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Agent Detail Popup                                            -->
<!-- ============================================================ -->
<div *ngIf="showDetailPopup && detailAgent" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeDetailPopup()"></div>
<div *ngIf="showDetailPopup && detailAgent" role="dialog" aria-modal="true" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-lg pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">{{ detailAgent.businessName }} \u2014 Setup</h3>
      <button (click)="closeDetailPopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="grid grid-cols-2 gap-x-6 gap-y-3 p-6 text-sm">
      <div><span class="block text-xs text-surface-400 mb-0.5">Country</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.country }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Currency</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.currency || '-' }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Funding Type</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.fundingType || '-' }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Agent Type</span>
        <span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full" [ngClass]="detailAgent.agentType === 'PayoutAgent' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'">{{ detailAgent.agentType === 'PayoutAgent' ? 'Payout Agent' : 'Sending Agent' }}</span>
      </div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Status</span>
        <span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full" [ngClass]="{'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400': detailAgent.status === 'Approved','bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400': detailAgent.status === 'Blocked','bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400': detailAgent.status !== 'Approved' && detailAgent.status !== 'Blocked'}">{{ detailAgent.status }}</span>
      </div>
    </div>
    <hr class="border-surface-100 dark:border-surface-700" />
    <div class="grid grid-cols-2 gap-x-6 gap-y-3 p-6 text-sm">
      <div><span class="block text-xs text-surface-400 mb-0.5">Base Credit Limit</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.baseCreditLimit | number:'1.2-2' }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Effective Credit Limit</span><span class="text-surface-900 dark:text-surface-100 font-semibold">{{ detailAgent.effectiveCreditLimit | number:'1.2-2' }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Current Balance</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.currentBalance | number:'1.2-2' }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Available Balance</span>
        <span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full" [ngClass]="detailAgent.availableBalance >= 0 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'">{{ detailAgent.availableBalance | number:'1.2-2' }}</span>
      </div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Active Adjustments</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.activeAdjustments }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Service Charge</span>
        <ng-container *ngIf="detailAgent.commissionMode"><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.commissionMode === 'Percentage' ? (detailAgent.commissionValue | number:'1.2-2') + '%' : 'Flat ' + (detailAgent.commissionValue | number:'1.2-2') }}</span></ng-container>
        <span *ngIf="!detailAgent.commissionMode" class="text-surface-400">Not set</span>
      </div>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Adjust Limit Popup                                            -->
<!-- ============================================================ -->
<div *ngIf="showAdjustmentForm" class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" (click)="closeAdjustmentForm()"></div>
<div *ngIf="showAdjustmentForm" role="dialog" aria-modal="true" class="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-md pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Adjust Limit \u2014 {{ adjustmentAgent?.businessName }}</h3>
      <button (click)="closeAdjustmentForm()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-4">
      <div *ngIf="adjustmentFormError" class="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ adjustmentFormError }}</div>
      <div><label class="block text-xs font-medium text-surface-500 mb-1">Amount (+ increase / - decrease) *</label><input type="number" [(ngModel)]="adjustmentForm.amount" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-700 border border-surface-200 dark:border-surface-600 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
      <div><label class="block text-xs font-medium text-surface-500 mb-1">Duration</label>
        <select [(ngModel)]="adjustmentForm.durationDays" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-700 border border-surface-200 dark:border-surface-600 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30">
          <option [ngValue]="null">Permanent</option><option [ngValue]="2">2 Days</option><option [ngValue]="3">3 Days</option><option [ngValue]="7">7 Days</option><option [ngValue]="30">30 Days</option><option [ngValue]="90">90 Days</option>
        </select>
      </div>
      <div><label class="block text-xs font-medium text-surface-500 mb-1">Notes (optional)</label><textarea rows="2" [(ngModel)]="adjustmentForm.notes" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-700 border border-surface-200 dark:border-surface-600 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"></textarea></div>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeAdjustmentForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg">Cancel</button>
      <button (click)="createAdjustment()" class="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg">Save</button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Adjustment History Popup                                       -->
<!-- ============================================================ -->
<div *ngIf="showAdjustmentPopup" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeAdjustmentPopup()"></div>
<div *ngIf="showAdjustmentPopup" role="dialog" aria-modal="true" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-3xl pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Adjustment History \u2014 {{ adjustmentAgent?.businessName }}</h3>
      <button (click)="closeAdjustmentPopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="px-6 py-3"><button (click)="openAdjustmentForm()" class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-colors">+ Add Adjustment</button></div>
    <div *ngIf="adjustments.length" class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="text-xs uppercase tracking-wider text-surface-500 bg-surface-50 dark:bg-surface-900/50 border-y border-surface-200 dark:border-surface-700">
          <tr><th scope="col" class="px-4 py-2.5">Amount</th><th scope="col" class="px-4 py-2.5">From</th><th scope="col" class="px-4 py-2.5">To</th><th scope="col" class="px-4 py-2.5">Notes</th><th scope="col" class="px-4 py-2.5">Active</th><th scope="col" class="px-4 py-2.5">Actions</th></tr>
        </thead>
        <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
          <tr *ngFor="let adj of adjustments" class="hover:bg-surface-50 dark:hover:bg-surface-750">
            <td class="px-4 py-2.5 font-semibold" [ngClass]="adj.amount >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'">{{ adj.amount >= 0 ? '+' : '' }}{{ adj.amount | number:'1.2-2' }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ adj.effectiveFrom | date:'dd/MM/yyyy' }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ adj.effectiveTo ? (adj.effectiveTo | date:'dd/MM/yyyy') : 'Permanent' }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ adj.notes || '-' }}</td>
            <td class="px-4 py-2.5"><span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full" [ngClass]="adj.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">{{ adj.isActive ? 'Active' : 'Inactive' }}</span></td>
            <td class="px-4 py-2.5">
              <button *ngIf="adj.isActive" aria-label="Deactivate" (click)="deactivateAdjustment(adj)" class="p-1.5 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div *ngIf="!adjustments.length" class="px-6 py-8 text-center text-sm text-surface-400 border-t border-dashed border-surface-200 dark:border-surface-700">No adjustments found.</div>
    <div class="flex items-center justify-end px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeAdjustmentPopup()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg">Close</button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Commission Setup Popup                                        -->
<!-- ============================================================ -->
<div *ngIf="showCommissionPopup" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeCommissionPopup()"></div>
<div *ngIf="showCommissionPopup" role="dialog" aria-modal="true" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-md pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Agent Service Charge \u2014 {{ commissionAgent?.businessName }}</h3>
      <button (click)="closeCommissionPopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-4">
      <div *ngIf="commissionFormError" class="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ commissionFormError }}</div>
      <div><label class="block text-xs font-medium text-surface-500 mb-1">Service Charge Type *</label>
        <select [(ngModel)]="commissionForm.commissionType" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-700 border border-surface-200 dark:border-surface-600 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"><option value="Percentage">Percentage</option><option value="Flat">Flat</option></select>
      </div>
      <div><label class="block text-xs font-medium text-surface-500 mb-1">{{ commissionForm.commissionType === 'Percentage' ? 'Service Charge Percentage (%)' : 'Flat Fee Amount' }}</label><input type="number" [(ngModel)]="commissionForm.commissionValue" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-700 border border-surface-200 dark:border-surface-600 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeCommissionPopup()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg">Cancel</button>
      <button (click)="saveAgentCommission()" [disabled]="savingCommission" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg shadow-sm transition-colors disabled:opacity-50">
        <svg *ngIf="savingCommission" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
        Save
      </button>
    </div>
  </div>
</div>`, styles: ["/* src/app/pages/admin/accounting/accounting.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=accounting.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountingComponent, { className: "AccountingComponent", filePath: "src/app/pages/admin/accounting/accounting.component.ts", lineNumber: 44 });
})();
export {
  AccountingComponent
};
//# sourceMappingURL=chunk-IN7ZMMH7.js.map
