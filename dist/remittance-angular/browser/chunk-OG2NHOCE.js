import {
  SearchableSelectDirective
} from "./chunk-AG2AJLJY.js";
import {
  ExportService
} from "./chunk-FDFRARSK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EU7HC72Q.js";
import "./chunk-S5KMCARS.js";

// src/app/pages/admin/receivers/receivers.component.ts
function ReceiversComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "circle", 18)(3, "path", 19);
    \u0275\u0275elementEnd()();
  }
}
function ReceiversComponent_div_21_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.fullName);
  }
}
function ReceiversComponent_div_21_tr_37__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 64);
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_21_tr_37__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 65);
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_21_tr_37_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 66);
    \u0275\u0275listener("click", function ReceiversComponent_div_21_tr_37_ng_container_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const r_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteConfirmId = r_r5.id);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 67);
    \u0275\u0275element(3, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function ReceiversComponent_div_21_tr_37_span_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 69)(1, "span", 70);
    \u0275\u0275text(2, "Delete?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 71);
    \u0275\u0275listener("click", function ReceiversComponent_div_21_tr_37_span_25_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const r_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.deleteReceiver(r_r5);
      return \u0275\u0275resetView(ctx_r1.deleteConfirmId = null);
    });
    \u0275\u0275text(4, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 72);
    \u0275\u0275listener("click", function ReceiversComponent_div_21_tr_37_span_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteConfirmId = null);
    });
    \u0275\u0275text(6, "No");
    \u0275\u0275elementEnd()();
  }
}
function ReceiversComponent_div_21_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 51)(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 54);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 54);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 55)(14, "span", 56);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 55)(17, "div", 57)(18, "button", 58);
    \u0275\u0275listener("click", function ReceiversComponent_div_21_tr_37_Template_button_click_18_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditPopup(r_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 4);
    \u0275\u0275element(20, "path", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 60);
    \u0275\u0275listener("click", function ReceiversComponent_div_21_tr_37_Template_button_click_21_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleReceiverStatus(r_r5));
    });
    \u0275\u0275template(22, ReceiversComponent_div_21_tr_37__svg_svg_22_Template, 2, 0, "svg", 61)(23, ReceiversComponent_div_21_tr_37__svg_svg_23_Template, 2, 0, "svg", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ReceiversComponent_div_21_tr_37_ng_container_24_Template, 4, 0, "ng-container", 62)(25, ReceiversComponent_div_21_tr_37_span_25_Template, 7, 0, "span", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.bankName || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.accountNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", r_r5.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r5.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", r_r5.isActive ? "text-warning-600 hover:bg-warning-50 dark:hover:bg-warning-900/20" : "text-success-600 hover:bg-success-50 dark:hover:bg-success-900/20");
    \u0275\u0275attribute("aria-label", r_r5.isActive ? "Disable receiver" : "Enable receiver");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r5.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r5.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deleteConfirmId !== r_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deleteConfirmId === r_r5.id);
  }
}
function ReceiversComponent_div_21_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, " No receivers found. ");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "label", 23);
    \u0275\u0275text(4, "Filter by Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_21_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterCustomerId, $event) || (ctx_r1.filterCustomerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceiversComponent_div_21_Template_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByCustomer());
    });
    \u0275\u0275elementStart(6, "option", 25);
    \u0275\u0275text(7, "All Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ReceiversComponent_div_21_option_8_Template, 2, 2, "option", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 27)(10, "label", 28);
    \u0275\u0275text(11, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 30);
    \u0275\u0275element(14, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_21_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceiversComponent_div_21_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchDebounce.next($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 33)(17, "table", 34)(18, "thead")(19, "tr", 35)(20, "th", 36);
    \u0275\u0275text(21, "Customer Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 36);
    \u0275\u0275text(23, "Receiver Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 36);
    \u0275\u0275text(25, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 36);
    \u0275\u0275text(27, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 36);
    \u0275\u0275text(29, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 36);
    \u0275\u0275text(31, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 36);
    \u0275\u0275text(33, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 36);
    \u0275\u0275text(35, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody");
    \u0275\u0275template(37, ReceiversComponent_div_21_tr_37_Template, 26, 14, "tr", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, ReceiversComponent_div_21_div_38_Template, 2, 0, "div", 38);
    \u0275\u0275elementStart(39, "div", 39)(40, "span", 40);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 41)(43, "label", 40);
    \u0275\u0275text(44, "Rows:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "select", 42);
    \u0275\u0275listener("ngModelChange", function ReceiversComponent_div_21_Template_select_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: 0, pageSize: $event, length: ctx_r1.totalCount }));
    });
    \u0275\u0275elementStart(46, "option", 43);
    \u0275\u0275text(47, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 43);
    \u0275\u0275text(49, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 43);
    \u0275\u0275text(51, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 43);
    \u0275\u0275text(53, "100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "button", 44);
    \u0275\u0275listener("click", function ReceiversComponent_div_21_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: 0, pageSize: ctx_r1.pageSize, length: ctx_r1.totalCount }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 45);
    \u0275\u0275element(56, "path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(57, "button", 44);
    \u0275\u0275listener("click", function ReceiversComponent_div_21_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: ctx_r1.pageIndex - 1, pageSize: ctx_r1.pageSize, length: ctx_r1.totalCount }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 45);
    \u0275\u0275element(59, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(60, "span", 48);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 44);
    \u0275\u0275listener("click", function ReceiversComponent_div_21_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: ctx_r1.pageIndex + 1, pageSize: ctx_r1.pageSize, length: ctx_r1.totalCount }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(63, "svg", 45);
    \u0275\u0275element(64, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "button", 44);
    \u0275\u0275listener("click", function ReceiversComponent_div_21_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: ctx_r1.totalPages - 1, pageSize: ctx_r1.pageSize, length: ctx_r1.totalCount }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 45);
    \u0275\u0275element(67, "path", 50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterCustomerId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.customers);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.receivers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.receivers.length && !ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r1.receivers.length ? ctx_r1.pageIndex * ctx_r1.pageSize + 1 : 0, "\u2013", ctx_r1.pageIndex * ctx_r1.pageSize + ctx_r1.receivers.length, " of ", ctx_r1.totalCount, " ");
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
    \u0275\u0275textInterpolate2("Page ", ctx_r1.pageIndex + 1, " of ", ctx_r1.totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
  }
}
function ReceiversComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275listener("click", function ReceiversComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSearchPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_23_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1, " No receivers match your search. ");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_23_div_16_div_2_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "span", 102);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 103);
    \u0275\u0275element(4, "path", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", r_r11.bankName, "");
  }
}
function ReceiversComponent_div_23_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("click", function ReceiversComponent_div_23_div_16_div_2_Template_div_click_0_listener() {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectSearchResult(r_r11));
    });
    \u0275\u0275elementStart(1, "div", 95)(2, "span", 96);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 97);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 98)(7, "span", 99);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 100);
    \u0275\u0275element(9, "path", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(11, "span", 102);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ReceiversComponent_div_23_div_16_div_2_ng_container_14_Template, 6, 1, "ng-container", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r11.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", r_r11.customerName, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r11.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r11.bankName);
  }
}
function ReceiversComponent_div_23_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275template(2, ReceiversComponent_div_23_div_16_div_2_Template, 15, 5, "div", 93);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.searchResults);
  }
}
function ReceiversComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "div", 77)(3, "h3", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 79);
    \u0275\u0275element(5, "path", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Search Receiver ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 81);
    \u0275\u0275listener("click", function ReceiversComponent_div_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSearchPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 82);
    \u0275\u0275element(9, "path", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 84)(11, "div", 85);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 86);
    \u0275\u0275element(13, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_23_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceiversComponent_div_23_Template_input_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.performSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ReceiversComponent_div_23_div_15_Template, 2, 0, "div", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ReceiversComponent_div_23_div_16_Template, 3, 1, "div", 89);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQuery && !ctx_r1.searchResults.length && !ctx_r1.searching);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchResults.length);
  }
}
function ReceiversComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function ReceiversComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_25_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function ReceiversComponent_div_25_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14.fullName);
  }
}
function ReceiversComponent_div_25__svg_svg_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 122);
    \u0275\u0275element(1, "circle", 18)(2, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_25__svg_svg_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 123);
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107)(2, "div", 77)(3, "h3", 108);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 81);
    \u0275\u0275listener("click", function ReceiversComponent_div_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 82);
    \u0275\u0275element(7, "path", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 109);
    \u0275\u0275template(9, ReceiversComponent_div_25_div_9_Template, 2, 1, "div", 110);
    \u0275\u0275elementStart(10, "div", 111)(11, "div", 112)(12, "label", 113);
    \u0275\u0275text(13, "Customer *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.customerId, $event) || (ctx_r1.form.customerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 114);
    \u0275\u0275text(16, "Select Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ReceiversComponent_div_25_option_17_Template, 2, 2, "option", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "label", 113);
    \u0275\u0275text(20, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.fullName, $event) || (ctx_r1.form.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "label", 113);
    \u0275\u0275text(24, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "label", 113);
    \u0275\u0275text(28, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "label", 113);
    \u0275\u0275text(32, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.country, $event) || (ctx_r1.form.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "label", 113);
    \u0275\u0275text(36, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.city, $event) || (ctx_r1.form.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "label", 113);
    \u0275\u0275text(40, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.bankName, $event) || (ctx_r1.form.bankName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "label", 113);
    \u0275\u0275text(44, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.accountNumber, $event) || (ctx_r1.form.accountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 112)(47, "label", 113);
    \u0275\u0275text(48, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.relationship, $event) || (ctx_r1.form.relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 117)(51, "button", 118);
    \u0275\u0275listener("click", function ReceiversComponent_div_25_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275text(52, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 119);
    \u0275\u0275listener("click", function ReceiversComponent_div_25_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveReceiver());
    });
    \u0275\u0275template(54, ReceiversComponent_div_25__svg_svg_54_Template, 3, 0, "svg", 120)(55, ReceiversComponent_div_25__svg_svg_55_Template, 2, 0, "svg", 61);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Receiver" : "Add New Receiver");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.customerId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.customers);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.country);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.bankName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.accountNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.relationship);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Save Changes" : "Add Receiver", " ");
  }
}
function emptyForm() {
  return {
    customerId: null,
    fullName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    bankName: "",
    accountNumber: "",
    relationship: ""
  };
}
var ReceiversComponent = class _ReceiversComponent {
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.receivers = [];
    this.customers = [];
    this.displayedColumns = ["customerName", "fullName", "phone", "country", "bankName", "accountNumber", "status", "actions"];
    this.searchString = "";
    this.loading = true;
    this.deleteConfirmId = null;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
    this.filterCustomerId = null;
    this.showFormPopup = false;
    this.isEditing = false;
    this.editingId = 0;
    this.saving = false;
    this.formError = "";
    this.form = emptyForm();
    this.showSearchPopup = false;
    this.searchQuery = "";
    this.searchResults = [];
    this.searching = false;
    this.safeNamePattern = /^[\p{L}\s\-'.]+$/u;
    this.safePhonePattern = /^[\d\s\+\-()]+$/;
    this.safeAlphanumPattern = /^[\p{L}\d\s\-]+$/u;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.searchString = s;
      this.pageIndex = 0;
      this.loadReceivers();
    });
    this.loadCustomers();
    this.loadReceivers();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadReceivers() {
    this.loading = true;
    this.api.getReceiversPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.receivers = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.receivers = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load receivers.");
        }
        this.loading = false;
      },
      error: () => {
        this.receivers = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  loadCustomers() {
    this.api.getCustomers().subscribe((res) => {
      if (res?.success && res.data) {
        this.customers = res.data;
      }
    });
  }
  filterByCustomer() {
    this.pageIndex = 0;
    this.loadReceivers();
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadReceivers();
  }
  exportData(format) {
    this.exportService.export("api/admin/receivers/export", { search: this.searchString }, format);
  }
  // ---------------------------------------------------------------------------
  // Search Popup
  // ---------------------------------------------------------------------------
  openSearchPopup() {
    this.searchQuery = "";
    this.searchResults = [];
    this.showSearchPopup = true;
  }
  closeSearchPopup() {
    this.showSearchPopup = false;
  }
  performSearch() {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) {
      this.searchResults = [];
      return;
    }
    this.searching = true;
    this.searchResults = this.receivers.filter((r) => r.fullName.toLowerCase().includes(q) || r.phone.toLowerCase().includes(q) || r.customerName.toLowerCase().includes(q));
    this.searching = false;
  }
  selectSearchResult(receiver) {
    this.closeSearchPopup();
    this.openEditPopup(receiver);
  }
  // ---------------------------------------------------------------------------
  // Create / Edit
  // ---------------------------------------------------------------------------
  openCreatePopup() {
    this.form = emptyForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = "";
    this.showFormPopup = true;
  }
  openEditPopup(receiver) {
    this.isEditing = true;
    this.editingId = receiver.id;
    this.form = {
      customerId: receiver.customerId,
      fullName: receiver.fullName,
      phone: receiver.phone,
      email: receiver.email || "",
      country: receiver.country,
      city: receiver.city || "",
      bankName: receiver.bankName || "",
      accountNumber: receiver.accountNumber || "",
      relationship: receiver.relationship || ""
    };
    this.formError = "";
    this.showFormPopup = true;
  }
  closeFormPopup() {
    this.showFormPopup = false;
  }
  validateSpecialChars(value, pattern, fieldName) {
    if (value && !pattern.test(value)) {
      return `${fieldName} contains invalid special characters.`;
    }
    return null;
  }
  saveReceiver() {
    this.formError = "";
    const f = this.form;
    if (!f.customerId) {
      this.formError = "Please select a customer.";
      return;
    }
    if (!f.fullName || !f.phone || !f.country) {
      this.formError = "Full Name, Phone and Country are required.";
      return;
    }
    const checks = [
      this.validateSpecialChars(f.fullName, this.safeNamePattern, "Full Name"),
      this.validateSpecialChars(f.phone, this.safePhonePattern, "Phone"),
      this.validateSpecialChars(f.city, this.safeNamePattern, "City"),
      this.validateSpecialChars(f.bankName, this.safeNamePattern, "Bank Name"),
      this.validateSpecialChars(f.accountNumber, this.safeAlphanumPattern, "Account Number"),
      this.validateSpecialChars(f.relationship, this.safeNamePattern, "Relationship")
    ];
    const firstError = checks.find((e) => e !== null);
    if (firstError) {
      this.formError = firstError;
      return;
    }
    this.saving = true;
    const dto = {
      customerId: f.customerId,
      fullName: f.fullName,
      phone: f.phone,
      email: f.email || null,
      country: f.country,
      city: f.city || null,
      bankName: f.bankName || null,
      accountNumber: f.accountNumber || null,
      relationship: f.relationship || null
    };
    const obs = this.isEditing ? this.api.updateReceiver(this.editingId, dto) : this.api.createReceiver(dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.isEditing ? "Receiver updated." : "Receiver created.");
          this.showFormPopup = false;
          this.loadReceivers();
        } else {
          this.formError = res?.message || "Failed.";
        }
        this.saving = false;
      },
      error: () => {
        this.formError = "Server error.";
        this.saving = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Toggle Status
  // ---------------------------------------------------------------------------
  toggleReceiverStatus(receiver) {
    this.api.toggleReceiverStatus(receiver.id).subscribe((r) => {
      if (r?.success) {
        const status = receiver.isActive ? "disabled" : "enabled";
        this.notify.success(`Receiver '${receiver.fullName}' ${status}.`);
        this.loadReceivers();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Delete
  // ---------------------------------------------------------------------------
  deleteReceiver(receiver) {
    this.api.deleteReceiver(receiver.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success(`Receiver '${receiver.fullName}' deleted.`);
        this.loadReceivers();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  get totalPages() {
    return Math.ceil(this.totalCount / this.pageSize) || 1;
  }
  static {
    this.\u0275fac = function ReceiversComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReceiversComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceiversComponent, selectors: [["app-receivers"]], decls: 26, vars: 6, consts: [[1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-800", "text-surface-700", "dark:text-surface-200", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition", "text-sm", "font-medium", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "border", "border-brand-600", "text-brand-600", "dark:text-brand-400", "dark:border-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", "text-sm", "font-medium", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-brand-600", "text-white", "hover:bg-brand-700", "transition", "text-sm", "font-medium", "shadow-sm", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-start justify-center p-4 pt-[10vh] pointer-events-none", 4, "ngIf"], ["class", "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "gap-4", "mb-4"], [1, "w-full", "sm:w-64"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "mb-1"], [1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "w-full", "max-w-md"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "mb-1", "opacity-0", "hidden", "sm:block"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search receivers...", 1, "w-full", "pl-10", "pr-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "border-b", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-300"], ["scope", "col", 1, "px-4", "py-3", "font-semibold"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], ["class", "text-center py-12 text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "mt-4", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-2"], [1, "px-2", "py-1", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "text-sm", "outline-none", "focus:ring-2", "focus:ring-brand-500", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "p-1.5", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "disabled:opacity-40", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4", "text-surface-600", "dark:text-surface-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 19l-7-7 7-7m8 14l-7-7 7-7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], [1, "text-sm", "text-surface-700", "dark:text-surface-300", "px-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5l7 7-7 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 5l7 7-7 7M5 5l7 7-7 7"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100", "font-medium"], [1, "px-4", "py-3", "text-surface-700", "dark:text-surface-300"], [1, "px-4", "py-3"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "text-xs", "font-medium", "rounded-full", 3, "ngClass"], [1, "flex", "items-center", "gap-1"], ["aria-label", "Edit receiver", 1, "p-1.5", "rounded-md", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "p-1.5", "rounded-md", "transition", 3, "click", "ngClass"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 4, "ngIf"], [4, "ngIf"], ["class", "inline-flex items-center gap-1.5 text-xs", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], ["aria-label", "Delete receiver", 1, "p-1.5", "rounded-md", "text-danger-500", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs"], [1, "text-danger-700", "dark:text-danger-400", "font-medium"], [1, "px-2", "py-0.5", "bg-danger-600", "hover:bg-danger-700", "text-white", "rounded-lg", "text-xs", "font-medium", "transition-colors", 3, "click"], [1, "px-2", "py-0.5", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "rounded-lg", "text-xs", "font-medium", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], [1, "text-center", "py-12", "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "fixed", "inset-0", "z-50", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-start", "justify-center", "p-4", "pt-[10vh]", "pointer-events-none"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "pointer-events-auto", "max-h-[80vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100", "flex", "items-center", "gap-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-5", "h-5", "text-brand-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"], [1, "p-1", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-surface-400", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], [1, "relative", "mb-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-surface-400"], ["type", "text", "placeholder", "Search by name or mobile number...", "autofocus", "", 1, "w-full", "pl-11", "pr-4", "py-3", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-surface-50", "dark:bg-surface-700/50", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["class", "py-8 text-center text-surface-500 dark:text-surface-400 text-sm", 4, "ngIf"], ["class", "flex-1 overflow-y-auto px-6 pb-6", 4, "ngIf"], [1, "py-8", "text-center", "text-surface-500", "dark:text-surface-400", "text-sm"], [1, "flex-1", "overflow-y-auto", "px-6", "pb-6"], [1, "space-y-2"], ["class", "cursor-pointer rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-750 p-4 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-md transition-all group", 3, "click", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-750", "p-4", "hover:border-brand-300", "dark:hover:border-brand-700", "hover:shadow-md", "transition-all", "group", 3, "click"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "font-semibold", "text-surface-900", "dark:text-surface-100", "group-hover:text-brand-600", "dark:group-hover:text-brand-400", "transition-colors"], [1, "text-sm", "font-medium", "text-surface-600", "dark:text-surface-300"], [1, "flex", "items-center", "gap-2", "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "font-medium", "text-surface-700", "dark:text-surface-300", "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "w-1", "h-1", "rounded-full", "bg-surface-300", "dark:bg-surface-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-3", "h-3", "inline", "pb-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"], [1, "fixed", "inset-0", "z-[60]", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "inset-0", "z-[60]", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "pointer-events-auto", "max-h-[90vh]", "overflow-y-auto"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "p-6", "space-y-4"], ["class", "px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "sm:col-span-2"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], ["disabled", "", 3, "ngValue"], ["type", "text", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-lg", "transition-colors", 3, "click"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-lg", "hover:bg-brand-700", "transition-colors", "disabled:opacity-50", "shadow-sm", 3, "click", "disabled"], ["class", "animate-spin w-4 h-4", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "px-4", "py-3", "bg-red-50", "dark:bg-red-900/20", "text-red-700", "dark:text-red-400", "text-sm", "rounded-lg"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"]], template: function ReceiversComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Receiver Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function ReceiversComponent_Template_button_click_4_listener() {
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
        \u0275\u0275listener("click", function ReceiversComponent_Template_button_click_8_listener() {
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
        \u0275\u0275listener("click", function ReceiversComponent_Template_button_click_12_listener() {
          return ctx.openSearchPopup();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 4);
        \u0275\u0275element(14, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Search Receiver ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(16, "button", 8);
        \u0275\u0275listener("click", function ReceiversComponent_Template_button_click_16_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 4);
        \u0275\u0275element(18, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " Add Receiver ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(20, ReceiversComponent_div_20_Template, 4, 0, "div", 10)(21, ReceiversComponent_div_21_Template, 68, 20, "div", 11)(22, ReceiversComponent_div_22_Template, 1, 0, "div", 12)(23, ReceiversComponent_div_23_Template, 17, 3, "div", 13)(24, ReceiversComponent_div_24_Template, 1, 0, "div", 14)(25, ReceiversComponent_div_25_Template, 57, 17, "div", 15);
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showSearchPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showSearchPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=receivers.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReceiversComponent, [{
    type: Component,
    args: [{ selector: "app-receivers", standalone: true, imports: [
      CommonModule,
      FormsModule,
      SearchableSelectDirective
    ], template: `<!-- Page Header -->
<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
  <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">Receiver Management</h2>
  <div class="flex flex-wrap items-center gap-2">
    <button (click)="exportData('excel')" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm font-medium">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
      Excel
    </button>
    <button (click)="exportData('csv')" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm font-medium">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
      CSV
    </button>
    <button (click)="openSearchPopup()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-brand-600 text-brand-600 dark:text-brand-400 dark:border-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition text-sm font-medium">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      Search Receiver
    </button>
    <button (click)="openCreatePopup()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition text-sm font-medium shadow-sm">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
      Add Receiver
    </button>
  </div>
</div>

<!-- Loading -->
<div *ngIf="loading" class="flex items-center justify-center py-20">
  <svg class="animate-spin h-10 w-10 text-brand-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
</div>

<!-- Search + Filter + Table -->
<div *ngIf="!loading" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
  <div class="flex flex-col sm:flex-row items-center gap-4 mb-4">
    <div class="w-full sm:w-64">
      <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Filter by Customer</label>
      <select [(ngModel)]="filterCustomerId" (ngModelChange)="filterByCustomer()" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
        <option [ngValue]="null">All Customers</option>
        <option *ngFor="let c of customers" [ngValue]="c.id">{{ c.fullName }}</option>
      </select>
    </div>
    <div class="w-full max-w-md">
      <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1 opacity-0 hidden sm:block">Search</label>
      <div class="relative">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <input type="text" placeholder="Search receivers..." [(ngModel)]="searchString" (ngModelChange)="searchDebounce.next($event)"
          class="w-full pl-10 pr-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>
    </div>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left">
      <thead>
        <tr class="border-b border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-300">
          <th scope="col" class="px-4 py-3 font-semibold">Customer Name</th>
          <th scope="col" class="px-4 py-3 font-semibold">Receiver Name</th>
          <th scope="col" class="px-4 py-3 font-semibold">Phone</th>
          <th scope="col" class="px-4 py-3 font-semibold">Country</th>
          <th scope="col" class="px-4 py-3 font-semibold">Bank Name</th>
          <th scope="col" class="px-4 py-3 font-semibold">Account</th>
          <th scope="col" class="px-4 py-3 font-semibold">Status</th>
          <th scope="col" class="px-4 py-3 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let r of receivers" class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ r.customerName }}</td>
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100 font-medium">{{ r.fullName }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ r.phone }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ r.country }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ r.bankName || '-' }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ r.accountNumber || '-' }}</td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full" [ngClass]="r.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">
              {{ r.isActive ? 'Active' : 'Inactive' }}
            </span>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-1">
              <button aria-label="Edit receiver" (click)="openEditPopup(r)" class="p-1.5 rounded-md text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
              <button [attr.aria-label]="r.isActive ? 'Disable receiver' : 'Enable receiver'" (click)="toggleReceiverStatus(r)"
                class="p-1.5 rounded-md transition"
                [ngClass]="r.isActive ? 'text-warning-600 hover:bg-warning-50 dark:hover:bg-warning-900/20' : 'text-success-600 hover:bg-success-50 dark:hover:bg-success-900/20'">
                <svg *ngIf="r.isActive" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
                <svg *ngIf="!r.isActive" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </button>
              <!-- Delete with inline confirmation -->
              <ng-container *ngIf="deleteConfirmId !== r.id">
                <button aria-label="Delete receiver" (click)="deleteConfirmId = r.id" class="p-1.5 rounded-md text-danger-500 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
              </ng-container>
              <span *ngIf="deleteConfirmId === r.id" class="inline-flex items-center gap-1.5 text-xs">
                <span class="text-danger-700 dark:text-danger-400 font-medium">Delete?</span>
                <button (click)="deleteReceiver(r); deleteConfirmId = null" class="px-2 py-0.5 bg-danger-600 hover:bg-danger-700 text-white rounded-lg text-xs font-medium transition-colors">Yes</button>
                <button (click)="deleteConfirmId = null" class="px-2 py-0.5 border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 rounded-lg text-xs font-medium hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">No</button>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div *ngIf="!receivers.length && !loading" class="text-center py-12 text-surface-400 dark:text-surface-500 text-sm">
    No receivers found.
  </div>

  <!-- Pagination -->
  <div class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
    <span class="text-sm text-surface-500 dark:text-surface-400">
      Showing {{ receivers.length ? pageIndex * pageSize + 1 : 0 }}&ndash;{{ pageIndex * pageSize + receivers.length }} of {{ totalCount }}
    </span>
    <div class="flex items-center gap-2">
      <label class="text-sm text-surface-500 dark:text-surface-400">Rows:</label>
      <select [ngModel]="pageSize" (ngModelChange)="onPageChange({pageIndex: 0, pageSize: $event, length: totalCount})" class="px-2 py-1 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 text-sm outline-none focus:ring-2 focus:ring-brand-500">
        <option [value]="10">10</option><option [value]="20">20</option><option [value]="50">50</option><option [value]="100">100</option>
      </select>
      <button (click)="onPageChange({pageIndex: 0, pageSize: pageSize, length: totalCount})" [disabled]="pageIndex === 0" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg>
      </button>
      <button (click)="onPageChange({pageIndex: pageIndex - 1, pageSize: pageSize, length: totalCount})" [disabled]="pageIndex === 0" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <span class="text-sm text-surface-700 dark:text-surface-300 px-2">Page {{ pageIndex + 1 }} of {{ totalPages }}</span>
      <button (click)="onPageChange({pageIndex: pageIndex + 1, pageSize: pageSize, length: totalCount})" [disabled]="pageIndex >= totalPages - 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>
      <button (click)="onPageChange({pageIndex: totalPages - 1, pageSize: pageSize, length: totalCount})" [disabled]="pageIndex >= totalPages - 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>
      </button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Search Receiver Popup                                         -->
<!-- ============================================================ -->
<div *ngIf="showSearchPopup" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeSearchPopup()"></div>
<div *ngIf="showSearchPopup" class="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[10vh] pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-2xl pointer-events-auto max-h-[80vh] flex flex-col">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 flex items-center gap-2">
        <svg class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
        Search Receiver
      </h3>
      <button (click)="closeSearchPopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>

    <div class="p-6">
      <div class="relative mb-2">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <input type="text" [(ngModel)]="searchQuery" (ngModelChange)="performSearch()" placeholder="Search by name or mobile number..." autofocus
          class="w-full pl-11 pr-4 py-3 rounded-xl border border-surface-300 dark:border-surface-600 bg-surface-50 dark:bg-surface-700/50 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>

      <div *ngIf="searchQuery && !searchResults.length && !searching" class="py-8 text-center text-surface-500 dark:text-surface-400 text-sm">
        No receivers match your search.
      </div>
    </div>

    <div *ngIf="searchResults.length" class="flex-1 overflow-y-auto px-6 pb-6">
      <div class="space-y-2">
        <div *ngFor="let r of searchResults" (click)="selectSearchResult(r)"
          class="cursor-pointer rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-750 p-4 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-md transition-all group">
          <div class="flex items-center justify-between mb-1">
            <span class="font-semibold text-surface-900 dark:text-surface-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{{ r.fullName }}</span>
            <span class="text-sm font-medium text-surface-600 dark:text-surface-300">{{ r.phone }}</span>
          </div>
          <div class="flex items-center gap-2 text-xs text-surface-500 dark:text-surface-400">
            <span class="font-medium text-surface-700 dark:text-surface-300 flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg> {{ r.customerName }}</span>
            <span class="w-1 h-1 rounded-full bg-surface-300 dark:bg-surface-600"></span>
            <span>{{ r.country }}</span>
            <ng-container *ngIf="r.bankName">
              <span class="w-1 h-1 rounded-full bg-surface-300 dark:bg-surface-600"></span>
              <span><svg class="w-3 h-3 inline pb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg> {{ r.bankName }}</span>
            </ng-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Create / Edit Receiver Popup                                  -->
<!-- ============================================================ -->
<div *ngIf="showFormPopup" class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" (click)="closeFormPopup()"></div>
<div *ngIf="showFormPopup" class="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-2xl pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">{{ isEditing ? 'Edit Receiver' : 'Add New Receiver' }}</h3>
      <button (click)="closeFormPopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>

    <div class="p-6 space-y-4">
      <div *ngIf="formError" class="px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ formError }}</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Customer *</label>
          <select [(ngModel)]="form.customerId" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option [ngValue]="null" disabled>Select Customer</option>
            <option *ngFor="let c of customers" [ngValue]="c.id">{{ c.fullName }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Full Name *</label>
          <input type="text" [(ngModel)]="form.fullName" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Phone *</label>
          <input type="text" [(ngModel)]="form.phone" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Email</label>
          <input type="email" [(ngModel)]="form.email" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Country *</label>
          <input type="text" [(ngModel)]="form.country" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">City</label>
          <input type="text" [(ngModel)]="form.city" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Bank Name</label>
          <input type="text" [(ngModel)]="form.bankName" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Account Number</label>
          <input type="text" [(ngModel)]="form.accountNumber" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Relationship</label>
          <input type="text" [(ngModel)]="form.relationship" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeFormPopup()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition-colors">Cancel</button>
      <button (click)="saveReceiver()" [disabled]="saving" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-50 shadow-sm">
        <svg *ngIf="saving" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
        <svg *ngIf="!saving" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        {{ isEditing ? 'Save Changes' : 'Add Receiver' }}
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/receivers/receivers.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=receivers.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceiversComponent, { className: "ReceiversComponent", filePath: "src/app/pages/admin/receivers/receivers.component.ts", lineNumber: 43 });
})();
export {
  ReceiversComponent
};
//# sourceMappingURL=chunk-OG2NHOCE.js.map
