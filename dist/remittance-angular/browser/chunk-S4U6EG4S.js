import {
  DatePicker
} from "./chunk-P27FYE4L.js";
import {
  SearchableSelectDirective
} from "./chunk-SRMAZKMQ.js";
import "./chunk-2JJTUUN4.js";
import "./chunk-3CFLOBS2.js";
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
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-FEHYQLJK.js";
import {
  Component,
  Subject,
  __async,
  debounceTime,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/pages/admin/customer-register/customer-register.component.ts
var _c0 = () => ["Personal", "Contact", "Documents"];
function CustomerRegisterComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "circle", 17)(3, "path", 18);
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_div_17_tr_26_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_17_tr_26_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveKyc(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 4);
    \u0275\u0275element(2, "path", 65);
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_div_17_tr_26_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_17_tr_26_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectKyc(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 4);
    \u0275\u0275element(2, "path", 67);
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_div_17_tr_26__svg_svg_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 68);
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_17_tr_26__svg_svg_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 65);
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_17_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 44)(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 46);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 47)(10, "span", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 47)(13, "span", 48);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 49);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 47)(19, "div", 50)(20, "button", 51);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_17_tr_26_Template_button_click_20_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 4);
    \u0275\u0275element(22, "path", 52)(23, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 54);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_17_tr_26_Template_button_click_24_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDocuments(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 4);
    \u0275\u0275element(26, "path", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 56);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_17_tr_26_Template_button_click_27_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditPopup(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 4);
    \u0275\u0275element(29, "path", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, CustomerRegisterComponent_div_17_tr_26_button_30_Template, 3, 0, "button", 58)(31, CustomerRegisterComponent_div_17_tr_26_button_31_Template, 3, 0, "button", 59);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "button", 60);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_17_tr_26_Template_button_click_32_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCustomerStatus(c_r4));
    });
    \u0275\u0275template(33, CustomerRegisterComponent_div_17_tr_26__svg_svg_33_Template, 2, 0, "svg", 61)(34, CustomerRegisterComponent_div_17_tr_26__svg_svg_34_Template, 2, 0, "svg", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 62);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_17_tr_26_Template_button_click_35_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCustomer(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 4);
    \u0275\u0275element(37, "path", 63);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.email || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.phone || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.country);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", c_r4.isKycVerified ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.isKycVerified ? "Verified" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", c_r4.isActive ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.isActive ? "Active" : "Disabled", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 15, c_r4.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", !c_r4.isKycVerified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.isKycVerified);
    \u0275\u0275advance();
    \u0275\u0275property("title", c_r4.isActive ? "Disable" : "Enable")("ngClass", c_r4.isActive ? "hover:bg-warning-50 dark:hover:bg-warning-900/20 text-warning-600 dark:text-warning-400" : "hover:bg-success-50 dark:hover:bg-success-900/20 text-success-600 dark:text-success-400");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r4.isActive);
  }
}
function CustomerRegisterComponent_div_17_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1, " No customers found. ");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 21);
    \u0275\u0275element(3, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CustomerRegisterComponent_div_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchDebounce.next($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24)(6, "table", 25)(7, "thead")(8, "tr", 26)(9, "th", 27);
    \u0275\u0275text(10, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 27);
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 27);
    \u0275\u0275text(14, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 27);
    \u0275\u0275text(16, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 27);
    \u0275\u0275text(18, "KYC Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 27);
    \u0275\u0275text(20, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 27);
    \u0275\u0275text(22, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 27);
    \u0275\u0275text(24, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, CustomerRegisterComponent_div_17_tr_26_Template, 38, 18, "tr", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 29)(28, "span", 30);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 2)(31, "label", 30);
    \u0275\u0275text(32, "Rows:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 31);
    \u0275\u0275listener("ngModelChange", function CustomerRegisterComponent_div_17_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275elementStart(34, "option", 32);
    \u0275\u0275text(35, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 32);
    \u0275\u0275text(37, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 32);
    \u0275\u0275text(39, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 32);
    \u0275\u0275text(41, "100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "button", 33);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_17_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(0));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 34);
    \u0275\u0275element(44, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "button", 36);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_17_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pageIndex - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 34);
    \u0275\u0275element(47, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "span", 38);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 39);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_17_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pageIndex + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 34);
    \u0275\u0275element(52, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "button", 41);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_17_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 34);
    \u0275\u0275element(55, "path", 42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(56, CustomerRegisterComponent_div_17_div_56_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.customers);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r1.customers.length ? ctx_r1.pageIndex * ctx_r1.pageSize + 1 : 0, "\u2013", ctx_r1.pageIndex * ctx_r1.pageSize + ctx_r1.customers.length, " of ", ctx_r1.totalCount, " ");
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
    \u0275\u0275textInterpolate2(" Page ", ctx_r1.pageIndex + 1, " of ", ctx_r1.totalPages || 1, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.customers.length && !ctx_r1.loading);
  }
}
function CustomerRegisterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "h3", 73);
    \u0275\u0275text(3, "Customer Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 74);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 75);
    \u0275\u0275element(6, "path", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 77)(8, "div")(9, "span", 78);
    \u0275\u0275text(10, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 79);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "span", 78);
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 79);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "span", 78);
    \u0275\u0275text(20, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 79);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "span", 78);
    \u0275\u0275text(25, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 79);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div")(29, "span", 78);
    \u0275\u0275text(30, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 79);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "span", 78);
    \u0275\u0275text(35, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 79);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "span", 78);
    \u0275\u0275text(40, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 79);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "span", 78);
    \u0275\u0275text(45, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 79);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div")(49, "span", 78);
    \u0275\u0275text(50, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 79);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div")(54, "span", 78);
    \u0275\u0275text(55, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 79);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 80)(59, "span", 78);
    \u0275\u0275text(60, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 79);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div")(64, "span", 78);
    \u0275\u0275text(65, "Document Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 79);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div")(69, "span", 78);
    \u0275\u0275text(70, "Document Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 79);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div")(74, "span", 78);
    \u0275\u0275text(75, "KYC Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 48);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div")(79, "span", 78);
    \u0275\u0275text(80, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 79);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.email || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.phone || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.dateOfBirth || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.gender || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.nationality || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.country);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.city || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.state || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.postalCode || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.address || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.idDocumentType || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.idDocumentNumber || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.detailCustomer.isKycVerified ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailCustomer.isKycVerified ? "Verified" : "Pending", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 16, ctx_r1.detailCustomer.createdAt, "dd/MM/yyyy"));
  }
}
function CustomerRegisterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formError, " ");
  }
}
function CustomerRegisterComponent_div_21_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_button_9_Template_button_click_0_listener() {
      const tab_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activeTab = tab_r12);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.activeTab === tab_r12 ? "border-brand-600 text-brand-600 dark:text-brand-400 dark:border-brand-400" : "border-transparent text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r12, " ");
  }
}
function CustomerRegisterComponent_div_21_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 77)(2, "div")(3, "label", 93);
    \u0275\u0275text(4, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_10_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.fullName, $event) || (ctx_r1.form.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 93);
    \u0275\u0275text(8, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-datepicker", 95);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_10_Template_p_datepicker_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateOfBirth, $event) || (ctx_r1.form.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "label", 93);
    \u0275\u0275text(12, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 96);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_10_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.gender, $event) || (ctx_r1.form.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 97);
    \u0275\u0275text(15, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 98);
    \u0275\u0275text(17, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 99);
    \u0275\u0275text(19, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div")(21, "label", 93);
    \u0275\u0275text(22, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_10_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nationality, $event) || (ctx_r1.form.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateOfBirth);
    \u0275\u0275property("maxDate", ctx_r1.maxDobDate)("showIcon", true)("showClear", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.gender);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nationality);
  }
}
function CustomerRegisterComponent_div_21_div_11_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275property("value", c_r15.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r15.name);
  }
}
function CustomerRegisterComponent_div_21_div_11_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("value", c_r16.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16.name);
  }
}
function CustomerRegisterComponent_div_21_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 77)(2, "div")(3, "label", 93);
    \u0275\u0275text(4, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_11_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 93);
    \u0275\u0275text(8, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_11_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "label", 93);
    \u0275\u0275text(12, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 96);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_11_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.country, $event) || (ctx_r1.form.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 101);
    \u0275\u0275text(15, "Select country");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CustomerRegisterComponent_div_21_div_11_option_16_Template, 2, 2, "option", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 93);
    \u0275\u0275text(19, "Contact Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 96);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_11_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contactCountry, $event) || (ctx_r1.form.contactCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 103);
    \u0275\u0275text(22, "-- None --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, CustomerRegisterComponent_div_21_div_11_option_23_Template, 2, 2, "option", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "label", 93);
    \u0275\u0275text(26, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_11_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.city, $event) || (ctx_r1.form.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div")(29, "label", 93);
    \u0275\u0275text(30, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_11_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.state, $event) || (ctx_r1.form.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 93);
    \u0275\u0275text(34, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_11_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.postalCode, $event) || (ctx_r1.form.postalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 80)(37, "label", 93);
    \u0275\u0275text(38, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_11_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.address, $event) || (ctx_r1.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.country);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.contactCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.state);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.postalCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.address);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 115);
    \u0275\u0275element(2, "circle", 17)(3, "path", 18);
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_div_21_div_12_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 75);
    \u0275\u0275element(2, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No documents uploaded yet.");
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No: ", doc_r18.documentNumber, "");
  }
}
function CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", doc_r18.issuingCountry, "");
  }
}
function CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const doc_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r18.frontImagePath));
    });
    \u0275\u0275element(1, "img", 126);
    \u0275\u0275elementStart(2, "span", 127);
    \u0275\u0275text(3, "Front");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r18.frontImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const doc_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r18.backImagePath));
    });
    \u0275\u0275element(1, "img", 128);
    \u0275\u0275elementStart(2, "span", 127);
    \u0275\u0275text(3, "Back");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r18.backImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 120)(2, "strong", 79);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 121);
    \u0275\u0275template(7, CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_span_7_Template, 2, 1, "span", 122)(8, CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_span_8_Template, 2, 1, "span", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 123);
    \u0275\u0275template(10, CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_div_10_Template, 4, 1, "div", 124)(11, CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_div_11_Template, 4, 1, "div", 124);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r18 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r18.documentType);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", doc_r18.isVerified ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r18.isVerified ? "Verified" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r18.documentNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r18.issuingCountry);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r18.frontImagePath);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r18.backImagePath);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275template(1, CustomerRegisterComponent_div_21_div_12_div_1_div_6_div_1_Template, 12, 7, "div", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.existingDocs);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 105)(2, "span", 106);
    \u0275\u0275text(3, "Existing Documents");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CustomerRegisterComponent_div_21_div_12_div_1_div_4_Template, 4, 0, "div", 112)(5, CustomerRegisterComponent_div_21_div_12_div_1_div_5_Template, 5, 0, "div", 109)(6, CustomerRegisterComponent_div_21_div_12_div_1_div_6_Template, 2, 1, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loadingExistingDocs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingExistingDocs && ctx_r1.existingDocs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingExistingDocs && ctx_r1.existingDocs.length > 0);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 75);
    \u0275\u0275element(2, "path", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1('Click "Add Document" to upload ', ctx_r1.isEditing ? "additional" : "identification", " documents.");
  }
}
function CustomerRegisterComponent_div_21_div_12_div_10_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dt_r24 = ctx.$implicit;
    \u0275\u0275property("value", dt_r24.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dt_r24.name);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_10_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r25 = ctx.$implicit;
    \u0275\u0275property("value", c_r25.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r25.name);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_10_img_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 145);
  }
  if (rf & 2) {
    const doc_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", doc_r23.frontPreview, \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_10_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(doc_r23.frontImage.name);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_10_div_44_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 145);
  }
  if (rf & 2) {
    const doc_r23 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", doc_r23.backPreview, \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_10_div_44_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r23 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(doc_r23.backImage.name);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_10_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "label", 139);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 4);
    \u0275\u0275element(3, "path", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Back Side ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 141);
    \u0275\u0275listener("change", function CustomerRegisterComponent_div_21_div_12_div_10_div_44_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r26);
      const doc_r23 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileSelected(doc_r23, "back", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CustomerRegisterComponent_div_21_div_12_div_10_div_44_img_6_Template, 1, 1, "img", 142)(7, CustomerRegisterComponent_div_21_div_12_div_10_div_44_span_7_Template, 2, 1, "span", 143);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", doc_r23.backPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r23.backImage);
  }
}
function CustomerRegisterComponent_div_21_div_12_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 131)(2, "span", 132);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 133);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_div_12_div_10_Template_button_click_4_listener() {
      const i_r22 = \u0275\u0275restoreView(_r21).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeDocumentRow(i_r22));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 4);
    \u0275\u0275element(6, "path", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 134)(8, "div")(9, "label", 93);
    \u0275\u0275text(10, "Document Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 96);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_12_div_10_Template_select_ngModelChange_11_listener($event) {
      const doc_r23 = \u0275\u0275restoreView(_r21).$implicit;
      \u0275\u0275twoWayBindingSet(doc_r23.documentType, $event) || (doc_r23.documentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CustomerRegisterComponent_div_21_div_12_div_10_Template_select_ngModelChange_11_listener() {
      const doc_r23 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDocTypeChange(doc_r23));
    });
    \u0275\u0275elementStart(12, "option", 101);
    \u0275\u0275text(13, "Select type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CustomerRegisterComponent_div_21_div_12_div_10_option_14_Template, 2, 2, "option", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 93);
    \u0275\u0275text(17, "Document Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_12_div_10_Template_input_ngModelChange_18_listener($event) {
      const doc_r23 = \u0275\u0275restoreView(_r21).$implicit;
      \u0275\u0275twoWayBindingSet(doc_r23.documentNumber, $event) || (doc_r23.documentNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 93);
    \u0275\u0275text(21, "Issuing Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 96);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_12_div_10_Template_select_ngModelChange_22_listener($event) {
      const doc_r23 = \u0275\u0275restoreView(_r21).$implicit;
      \u0275\u0275twoWayBindingSet(doc_r23.issuingCountry, $event) || (doc_r23.issuingCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 103);
    \u0275\u0275text(24, "Select country");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, CustomerRegisterComponent_div_21_div_12_div_10_option_25_Template, 2, 2, "option", 102);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 135)(27, "div")(28, "label", 93);
    \u0275\u0275text(29, "Issue Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p-datepicker", 95);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_12_div_10_Template_p_datepicker_ngModelChange_30_listener($event) {
      const doc_r23 = \u0275\u0275restoreView(_r21).$implicit;
      \u0275\u0275twoWayBindingSet(doc_r23.issueDate, $event) || (doc_r23.issueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "label", 93);
    \u0275\u0275text(33, "Expiry Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p-datepicker", 136);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_12_div_10_Template_p_datepicker_ngModelChange_34_listener($event) {
      const doc_r23 = \u0275\u0275restoreView(_r21).$implicit;
      \u0275\u0275twoWayBindingSet(doc_r23.expiryDate, $event) || (doc_r23.expiryDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 137)(36, "div", 138)(37, "label", 139);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 4);
    \u0275\u0275element(39, "path", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Front Side ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "input", 141);
    \u0275\u0275listener("change", function CustomerRegisterComponent_div_21_div_12_div_10_Template_input_change_41_listener($event) {
      const doc_r23 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileSelected(doc_r23, "front", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, CustomerRegisterComponent_div_21_div_12_div_10_img_42_Template, 1, 1, "img", 142)(43, CustomerRegisterComponent_div_21_div_12_div_10_span_43_Template, 2, 1, "span", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, CustomerRegisterComponent_div_21_div_12_div_10_div_44_Template, 8, 2, "div", 144);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r23 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Document ", i_r22 + 1, "");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", doc_r23.documentType);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.documentTypeConfigs);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", doc_r23.documentNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", doc_r23.issuingCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", doc_r23.issueDate);
    \u0275\u0275property("maxDate", ctx_r1.today)("showIcon", true)("showClear", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", doc_r23.expiryDate);
    \u0275\u0275property("minDate", ctx_r1.today)("showIcon", true)("showClear", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", doc_r23.frontPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r23.frontImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r23.requiredSides >= 2);
  }
}
function CustomerRegisterComponent_div_21_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275template(1, CustomerRegisterComponent_div_21_div_12_div_1_Template, 7, 3, "div", 104);
    \u0275\u0275elementStart(2, "div", 105)(3, "span", 106);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 107);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addDocumentRow());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 4);
    \u0275\u0275element(7, "path", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Add Document ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, CustomerRegisterComponent_div_21_div_12_div_9_Template, 5, 1, "div", 109)(10, CustomerRegisterComponent_div_21_div_12_div_10_Template, 45, 17, "div", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditing);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Upload Additional Documents" : "Upload identification documents");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.documentUploads.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.documentUploads);
  }
}
function CustomerRegisterComponent_div_21__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 147);
    \u0275\u0275element(1, "circle", 17)(2, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_21__svg_svg_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 148);
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 72)(2, "h3", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 74);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 75);
    \u0275\u0275element(6, "path", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CustomerRegisterComponent_div_21_div_7_Template, 2, 1, "div", 82);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 83);
    \u0275\u0275template(9, CustomerRegisterComponent_div_21_button_9_Template, 2, 2, "button", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CustomerRegisterComponent_div_21_div_10_Template, 24, 7, "div", 85)(11, CustomerRegisterComponent_div_21_div_11_Template, 40, 10, "div", 85)(12, CustomerRegisterComponent_div_21_div_12_Template, 11, 4, "div", 85);
    \u0275\u0275elementStart(13, "div", 86)(14, "button", 87);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 4);
    \u0275\u0275element(16, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 88);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCustomer());
    });
    \u0275\u0275template(19, CustomerRegisterComponent_div_21__svg_svg_19_Template, 3, 0, "svg", 89)(20, CustomerRegisterComponent_div_21__svg_svg_20_Template, 2, 0, "svg", 61);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Customer" : "Register New Customer");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "Personal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "Contact");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "Documents");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving || ctx_r1.uploadingDocs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving || ctx_r1.uploadingDocs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving && !ctx_r1.uploadingDocs);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.uploadingDocs ? "Uploading Documents..." : ctx_r1.isEditing ? "Save Changes" : "Register Customer", " ");
  }
}
function CustomerRegisterComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDocViewer());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 152);
    \u0275\u0275element(2, "circle", 17)(3, "path", 18);
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_div_23_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 75);
    \u0275\u0275element(2, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No documents uploaded for this customer.");
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_div_23_div_9_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No: ", doc_r29.documentNumber, "");
  }
}
function CustomerRegisterComponent_div_23_div_9_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", doc_r29.issuingCountry, "");
  }
}
function CustomerRegisterComponent_div_23_div_9_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_23_div_9_div_1_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const doc_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r29.frontImagePath));
    });
    \u0275\u0275element(1, "img", 126);
    \u0275\u0275elementStart(2, "span", 127);
    \u0275\u0275text(3, "Front");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r29.frontImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_23_div_9_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_23_div_9_div_1_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const doc_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r29.backImagePath));
    });
    \u0275\u0275element(1, "img", 128);
    \u0275\u0275elementStart(2, "span", 127);
    \u0275\u0275text(3, "Back");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r29.backImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_23_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 120)(2, "strong", 79);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 121);
    \u0275\u0275template(7, CustomerRegisterComponent_div_23_div_9_div_1_span_7_Template, 2, 1, "span", 122)(8, CustomerRegisterComponent_div_23_div_9_div_1_span_8_Template, 2, 1, "span", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 123);
    \u0275\u0275template(10, CustomerRegisterComponent_div_23_div_9_div_1_div_10_Template, 4, 1, "div", 124)(11, CustomerRegisterComponent_div_23_div_9_div_1_div_11_Template, 4, 1, "div", 124);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r29 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r29.documentType);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", doc_r29.isVerified ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r29.isVerified ? "Verified" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r29.documentNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r29.issuingCountry);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r29.frontImagePath);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r29.backImagePath);
  }
}
function CustomerRegisterComponent_div_23_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275template(1, CustomerRegisterComponent_div_23_div_9_div_1_Template, 12, 7, "div", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.customerDocs);
  }
}
function CustomerRegisterComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 72)(2, "h3", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 74);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDocViewer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 75);
    \u0275\u0275element(6, "path", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CustomerRegisterComponent_div_23_div_7_Template, 4, 0, "div", 149)(8, CustomerRegisterComponent_div_23_div_8_Template, 5, 0, "div", 150)(9, CustomerRegisterComponent_div_23_div_9_Template, 2, 1, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Documents \u2014 ", ctx_r1.docViewerCustomer == null ? null : ctx_r1.docViewerCustomer.fullName, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loadingDocs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingDocs && ctx_r1.customerDocs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingDocs && ctx_r1.customerDocs.length > 0);
  }
}
function CustomerRegisterComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImagePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 155)(1, "button", 156);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImagePopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 75);
    \u0275\u0275element(3, "path", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(4, "img", 157);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.docImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function emptyForm() {
  return {
    fullName: "",
    dateOfBirth: null,
    gender: "Male",
    nationality: "",
    email: "",
    phone: "",
    country: "",
    contactCountry: "",
    city: "",
    state: "",
    postalCode: "",
    address: ""
  };
}
var CustomerRegisterComponent = class _CustomerRegisterComponent {
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.customers = [];
    this.displayedColumns = ["fullName", "email", "phone", "country", "kyc", "createdAt", "actions"];
    this.searchString = "";
    this.loading = true;
    this.countries = [];
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
    this.showDetail = false;
    this.detailCustomer = null;
    this.showFormPopup = false;
    this.isEditing = false;
    this.editingId = 0;
    this.saving = false;
    this.formError = "";
    this.form = emptyForm();
    this.documentUploads = [];
    this.documentTypeConfigs = [];
    this.uploadingDocs = false;
    this.existingDocs = [];
    this.loadingExistingDocs = false;
    this.showDocViewer = false;
    this.docViewerCustomer = null;
    this.customerDocs = [];
    this.loadingDocs = false;
    this.docImageUrl = "";
    this.showImagePopup = false;
    this.activeTab = "Personal";
    this.safeNamePattern = /^[\p{L}\s\-'.]+$/u;
    this.safePhonePattern = /^[\d\s\+\-()]+$/;
    this.safeAddressPattern = /^[\p{L}\d\s\-'.,/#]+$/u;
    this.safePostalCodePattern = /^[\p{L}\d\s\-]+$/u;
    this.today = /* @__PURE__ */ new Date();
    this.maxDobDate = (() => {
      const d = /* @__PURE__ */ new Date();
      d.setFullYear(d.getFullYear() - 16);
      return d;
    })();
    this.minExpiryDate = /* @__PURE__ */ new Date();
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.searchString = s;
      this.pageIndex = 0;
      this.loadCustomers();
    });
    this.loadCustomers();
    this.loadCountries();
    this.loadDocumentTypeConfigs();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadCustomers() {
    this.loading = true;
    this.api.getCustomersPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.customers = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.customers = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load customers.");
        }
        this.loading = false;
      },
      error: () => {
        this.customers = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  loadCountries() {
    this.api.getCountries().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.countries = res.data;
        }
      },
      error: () => {
        this.notify.warn("Could not load countries list.");
      }
    });
  }
  get totalPages() {
    return Math.ceil(this.totalCount / this.pageSize) || 1;
  }
  goToPage(page) {
    if (page < 0 || page >= this.totalPages)
      return;
    this.pageIndex = page;
    this.loadCustomers();
  }
  onPageSizeChange(size) {
    this.pageSize = +size;
    this.pageIndex = 0;
    this.loadCustomers();
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCustomers();
  }
  exportData(format) {
    this.exportService.export("api/admin/customers/export", { search: this.searchString }, format);
  }
  // ---------------------------------------------------------------------------
  // Detail
  // ---------------------------------------------------------------------------
  viewDetail(customer) {
    this.detailCustomer = customer;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
  }
  // ---------------------------------------------------------------------------
  // Create / Edit popup
  // ---------------------------------------------------------------------------
  openCreatePopup() {
    this.form = emptyForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = "";
    this.documentUploads = [];
    this.existingDocs = [];
    this.showFormPopup = true;
  }
  openEditPopup(customer) {
    this.isEditing = true;
    this.editingId = customer.id;
    this.form = {
      fullName: customer.fullName,
      dateOfBirth: customer.dateOfBirth ? new Date(customer.dateOfBirth) : null,
      gender: customer.gender || "Male",
      nationality: customer.nationality || "",
      email: customer.email || "",
      phone: customer.phone || "",
      country: customer.country,
      contactCountry: customer.contactCountry || "",
      city: customer.city || "",
      state: customer.state || "",
      postalCode: customer.postalCode || "",
      address: customer.address || ""
    };
    this.formError = "";
    this.documentUploads = [];
    this.existingDocs = [];
    this.showFormPopup = true;
    this.loadExistingDocs(customer.id);
  }
  loadExistingDocs(customerId) {
    this.loadingExistingDocs = true;
    this.api.getCustomerDocuments(customerId).subscribe({
      next: (res) => {
        this.existingDocs = res?.success && res.data ? res.data : [];
        this.loadingExistingDocs = false;
      },
      error: () => {
        this.existingDocs = [];
        this.loadingExistingDocs = false;
      }
    });
  }
  closeFormPopup() {
    this.showFormPopup = false;
  }
  formatDate(d) {
    if (!d)
      return null;
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  validateSpecialChars(value, pattern, fieldName) {
    if (value && !pattern.test(value)) {
      return `${fieldName} contains invalid special characters.`;
    }
    return null;
  }
  onCountryChange() {
  }
  saveCustomer() {
    this.formError = "";
    const f = this.form;
    if (!f.fullName || !f.country) {
      this.formError = "Full Name and Country are required.";
      return;
    }
    if (!f.nationality) {
      this.formError = "Nationality is required.";
      return;
    }
    const checks = [
      this.validateSpecialChars(f.fullName, this.safeNamePattern, "Full Name"),
      this.validateSpecialChars(f.phone, this.safePhonePattern, "Phone"),
      this.validateSpecialChars(f.nationality, this.safeNamePattern, "Nationality"),
      this.validateSpecialChars(f.city, this.safeNamePattern, "City"),
      this.validateSpecialChars(f.state, this.safeNamePattern, "State"),
      this.validateSpecialChars(f.postalCode, this.safePostalCodePattern, "Postal Code"),
      this.validateSpecialChars(f.address, this.safeAddressPattern, "Address")
    ];
    const firstError = checks.find((e) => e !== null);
    if (firstError) {
      this.formError = firstError;
      return;
    }
    if (f.dateOfBirth && f.dateOfBirth > this.maxDobDate) {
      this.formError = "Customer must be at least 16 years old.";
      this.activeTab = "Personal";
      return;
    }
    const now = /* @__PURE__ */ new Date();
    for (const doc of this.documentUploads) {
      if (doc.issueDate && doc.issueDate >= now) {
        this.formError = "Document issue date must be in the past.";
        this.activeTab = "Documents";
        return;
      }
      if (doc.expiryDate && doc.expiryDate <= now) {
        this.formError = "Document expiry date must be in the future.";
        this.activeTab = "Documents";
        return;
      }
    }
    if (!this.isEditing) {
      const hasValidDoc = this.documentUploads.some((d) => d.documentType && d.documentNumber && d.frontImage);
      if (!hasValidDoc) {
        this.formError = "At least one document with type, number, and front image is required.";
        this.activeTab = "Documents";
        return;
      }
    }
    if (this.isEditing && this.existingDocs.length === 0) {
      const hasValidDoc = this.documentUploads.some((d) => d.documentType && d.documentNumber && d.frontImage);
      if (!hasValidDoc) {
        this.formError = "At least one document with type, number, and front image is required.";
        this.activeTab = "Documents";
        return;
      }
    }
    this.saving = true;
    const dto = {
      fullName: f.fullName,
      dateOfBirth: this.formatDate(f.dateOfBirth),
      gender: f.gender || null,
      nationality: f.nationality || null,
      email: f.email || null,
      phone: f.phone || null,
      country: f.country,
      contactCountry: f.contactCountry || null,
      city: f.city || null,
      state: f.state || null,
      postalCode: f.postalCode || null,
      address: f.address || null
    };
    const obs = this.isEditing ? this.api.updateCustomer(this.editingId, dto) : this.api.createCustomer(dto);
    obs.subscribe({
      next: (res) => __async(this, null, function* () {
        if (res?.success) {
          const customerId = res.data?.id || this.editingId;
          if (this.documentUploads.length > 0 && customerId) {
            try {
              this.uploadingDocs = true;
              yield this.uploadDocuments(customerId);
              this.notify.success(this.isEditing ? "Customer updated with documents." : "Customer created with documents.");
            } catch {
              this.notify.warn("Customer saved but some documents failed to upload.");
            }
            this.uploadingDocs = false;
          } else {
            this.notify.success(this.isEditing ? "Customer updated." : "Customer created.");
          }
          this.showFormPopup = false;
          this.loadCustomers();
        } else {
          this.formError = res?.message || "Failed.";
        }
        this.saving = false;
      }),
      error: () => {
        this.formError = "Server error.";
        this.saving = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Document Type Configs
  // ---------------------------------------------------------------------------
  loadDocumentTypeConfigs() {
    this.api.getReferenceDocumentTypes().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.documentTypeConfigs = res.data.map((d) => ({
            name: d.name,
            requiredSides: d.requiredSides || 1
          }));
        }
      },
      error: () => {
        this.notify.warn("Could not load document types.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Document Upload helpers
  // ---------------------------------------------------------------------------
  addDocumentRow() {
    this.documentUploads.push({
      documentType: "",
      documentNumber: "",
      requiredSides: 1,
      issuingCountry: "",
      issueDate: null,
      expiryDate: null,
      frontImage: null,
      backImage: null,
      frontPreview: null,
      backPreview: null
    });
  }
  removeDocumentRow(index) {
    this.documentUploads.splice(index, 1);
  }
  onDocTypeChange(doc) {
    const config = this.documentTypeConfigs.find((d) => d.name === doc.documentType);
    if (config) {
      doc.requiredSides = config.requiredSides;
    }
  }
  onFileSelected(doc, side, event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    if (side === "front") {
      doc.frontImage = file;
      doc.frontPreview = URL.createObjectURL(file);
    } else {
      doc.backImage = file;
      doc.backPreview = URL.createObjectURL(file);
    }
  }
  uploadDocuments(customerId) {
    return __async(this, null, function* () {
      for (const doc of this.documentUploads) {
        if (!doc.documentType || !doc.frontImage)
          continue;
        const formData = new FormData();
        formData.append("customerId", customerId.toString());
        formData.append("documentType", doc.documentType);
        formData.append("documentNumber", doc.documentNumber);
        formData.append("requiredSides", doc.requiredSides.toString());
        formData.append("issuingCountry", doc.issuingCountry || "");
        const issueDateStr = this.formatDate(doc.issueDate);
        const expiryDateStr = this.formatDate(doc.expiryDate);
        if (issueDateStr)
          formData.append("issueDate", issueDateStr);
        if (expiryDateStr)
          formData.append("expiryDate", expiryDateStr);
        formData.append("frontImage", doc.frontImage);
        if (doc.backImage && doc.requiredSides >= 2) {
          formData.append("backImage", doc.backImage);
        }
        yield this.api.uploadDocument(formData).toPromise();
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Document Viewer
  // ---------------------------------------------------------------------------
  viewDocuments(customer) {
    this.docViewerCustomer = customer;
    this.showDocViewer = true;
    this.loadingDocs = true;
    this.customerDocs = [];
    this.api.getCustomerDocuments(customer.id).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.customerDocs = res.data;
        }
        this.loadingDocs = false;
      },
      error: () => {
        this.loadingDocs = false;
      }
    });
  }
  closeDocViewer() {
    this.showDocViewer = false;
    this.docViewerCustomer = null;
  }
  getDocImageFullUrl(path) {
    if (!path)
      return "";
    const base = this.api.getBaseUrl().replace(/\/$/, "");
    return `${base}${path}`;
  }
  openImagePopup(path) {
    this.docImageUrl = this.getDocImageFullUrl(path);
    this.showImagePopup = true;
  }
  closeImagePopup() {
    this.showImagePopup = false;
    this.docImageUrl = "";
  }
  // ---------------------------------------------------------------------------
  // KYC
  // ---------------------------------------------------------------------------
  approveKyc(customer) {
    this.api.approveKyc(customer.id).subscribe((r) => {
      if (r?.success) {
        customer.isKycVerified = true;
        this.notify.success(`KYC approved for '${customer.fullName}'.`);
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  rejectKyc(customer) {
    this.api.rejectKyc(customer.id).subscribe((r) => {
      if (r?.success) {
        customer.isKycVerified = false;
        this.notify.warn(`KYC rejected for '${customer.fullName}'.`);
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Toggle Status
  // ---------------------------------------------------------------------------
  toggleCustomerStatus(customer) {
    this.api.toggleCustomerStatus(customer.id).subscribe((r) => {
      if (r?.success) {
        const status = customer.isActive ? "disabled" : "enabled";
        this.notify.success(`Customer '${customer.fullName}' ${status}.`);
        this.loadCustomers();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Delete
  // ---------------------------------------------------------------------------
  deleteCustomer(customer) {
    this.api.deleteCustomer(customer.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success(`Customer '${customer.fullName}' deleted.`);
        this.loadCustomers();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function CustomerRegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerRegisterComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerRegisterComponent, selectors: [["app-customer-register"]], decls: 26, vars: 10, consts: [[1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-800", "text-surface-700", "dark:text-surface-200", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition", "text-sm", "font-medium", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-brand-600", "text-white", "hover:bg-brand-700", "transition", "text-sm", "font-medium", "shadow-sm", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "fixed inset-0 bg-black/50 z-[1000]", 3, "click", 4, "ngIf"], ["class", "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-surface-800 shadow-xl p-6", 4, "ngIf"], ["class", "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-surface-800 shadow-xl p-6", 4, "ngIf"], ["class", "fixed inset-0 bg-black/60 z-[1002]", 3, "click", 4, "ngIf"], ["class", "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1003] bg-white dark:bg-surface-800 rounded-xl p-3 shadow-2xl max-w-[90vw] max-h-[90vh]", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "relative", "mb-4", "max-w-md"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search customers...", 1, "w-full", "pl-10", "pr-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "border-b", "border-surface-200", "dark:border-surface-700"], [1, "px-4", "py-3", "font-semibold", "text-surface-600", "dark:text-surface-300"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "mt-4", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "px-2", "py-1", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "text-sm", "outline-none", "focus:ring-2", "focus:ring-brand-500", 3, "ngModelChange", "ngModel"], [3, "value"], ["title", "First page", 1, "p-1.5", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "disabled:opacity-40", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-surface-600", "dark:text-surface-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 19l-7-7 7-7m8 14l-7-7 7-7"], ["title", "Previous page", 1, "p-1.5", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "disabled:opacity-40", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "text-sm", "text-surface-700", "dark:text-surface-300", "px-2"], ["title", "Next page", 1, "p-1.5", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "disabled:opacity-40", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], ["title", "Last page", 1, "p-1.5", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "disabled:opacity-40", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 5l7 7-7 7M5 5l7 7-7 7"], ["class", "text-center py-12 text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100", "font-medium"], [1, "px-4", "py-3", "text-surface-700", "dark:text-surface-300"], [1, "px-4", "py-3"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-400"], [1, "flex", "items-center", "gap-1"], ["title", "View Details", 1, "p-1.5", "rounded-md", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-brand-600", "dark:text-brand-400", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["title", "Documents", 1, "p-1.5", "rounded-md", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-surface-500", "dark:text-surface-400", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"], ["title", "Edit", 1, "p-1.5", "rounded-md", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-brand-600", "dark:text-brand-400", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Approve KYC", "class", "p-1.5 rounded-md hover:bg-success-50 dark:hover:bg-success-900/20 text-success-600 dark:text-success-400 transition", 3, "click", 4, "ngIf"], ["title", "Reject KYC", "class", "p-1.5 rounded-md hover:bg-danger-50 dark:hover:bg-danger-900/20 text-danger-600 dark:text-danger-400 transition", 3, "click", 4, "ngIf"], [1, "p-1.5", "rounded-md", "transition", 3, "click", "title", "ngClass"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["title", "Delete", 1, "p-1.5", "rounded-md", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "text-danger-600", "dark:text-danger-400", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], ["title", "Approve KYC", 1, "p-1.5", "rounded-md", "hover:bg-success-50", "dark:hover:bg-success-900/20", "text-success-600", "dark:text-success-400", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], ["title", "Reject KYC", 1, "p-1.5", "rounded-md", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "text-danger-600", "dark:text-danger-400", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"], [1, "text-center", "py-12", "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "fixed", "inset-0", "bg-black/50", "z-[1000]", 3, "click"], [1, "fixed", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-[1001]", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto", "rounded-2xl", "bg-white", "dark:bg-surface-800", "shadow-xl", "p-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "p-1.5", "rounded-md", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-surface-500", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "mb-0.5"], [1, "text-sm", "text-surface-900", "dark:text-surface-100"], [1, "sm:col-span-2"], [1, "fixed", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-[1001]", "w-full", "max-w-3xl", "max-h-[90vh]", "overflow-y-auto", "rounded-2xl", "bg-white", "dark:bg-surface-800", "shadow-xl", "p-6"], ["class", "mb-4 px-4 py-2.5 rounded-lg bg-danger-50 dark:bg-danger-900/20 text-danger-700 dark:text-danger-400 text-sm", 4, "ngIf"], [1, "flex", "border-b", "border-surface-200", "dark:border-surface-700", "mb-4"], ["class", "px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "py-3", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "gap-3", "mt-4", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition", "text-sm", "font-medium", 3, "click"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-brand-600", "text-white", "hover:bg-brand-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition", "text-sm", "font-medium", "shadow-sm", 3, "click", "disabled"], ["class", "animate-spin h-4 w-4", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "mb-4", "px-4", "py-2.5", "rounded-lg", "bg-danger-50", "dark:bg-danger-900/20", "text-danger-700", "dark:text-danger-400", "text-sm"], [1, "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "border-b-2", "-mb-px", 3, "click", "ngClass"], [1, "py-3"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], ["type", "text", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["dateFormat", "dd/mm/yy", "placeholder", "DD/MM/YYYY", "styleClass", "w-full", "inputStyleClass", "w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm", 3, "ngModelChange", "ngModel", "maxDate", "showIcon", "showClear"], [1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["type", "email", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", ""], ["class", "mb-4", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "border", "border-brand-600", "text-brand-600", "dark:text-brand-400", "dark:border-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", "text-sm", "font-medium", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["class", "flex items-center justify-center gap-2 py-6 text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], ["class", "rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-750 p-4 mb-3", 4, "ngFor", "ngForOf"], [1, "mb-4"], ["class", "flex items-center justify-center py-4", 4, "ngIf"], ["class", "grid grid-cols-1 gap-3", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-4"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-6", "w-6", "text-brand-600"], [1, "flex", "items-center", "justify-center", "gap-2", "py-6", "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "grid", "grid-cols-1", "gap-3"], ["class", "rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-750 p-4", 4, "ngFor", "ngForOf"], [1, "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-750", "p-4"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mb-2"], [4, "ngIf"], [1, "flex", "gap-3"], ["class", "text-center cursor-pointer", 3, "click", 4, "ngIf"], [1, "text-center", "cursor-pointer", 3, "click"], ["alt", "Front", 1, "w-[120px]", "h-[80px]", "object-cover", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "hover:scale-105", "hover:shadow-lg", "transition-transform", 3, "src"], [1, "block", "text-[11px]", "text-surface-500", "dark:text-surface-400", "mt-1"], ["alt", "Back", 1, "w-[120px]", "h-[80px]", "object-cover", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "hover:scale-105", "hover:shadow-lg", "transition-transform", 3, "src"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"], [1, "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-750", "p-4", "mb-3"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-sm", "font-semibold", "text-surface-700", "dark:text-surface-200"], ["title", "Remove", 1, "p-1.5", "rounded-md", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "text-danger-600", "dark:text-danger-400", "transition", 3, "click"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-3", "mb-3"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-3", "mb-3"], ["dateFormat", "dd/mm/yy", "placeholder", "DD/MM/YYYY", "styleClass", "w-full", "inputStyleClass", "w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm", 3, "ngModelChange", "ngModel", "minDate", "showIcon", "showClear"], [1, "flex", "gap-4", "mt-2"], [1, "flex", "items-center", "gap-2.5"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-2", "bg-brand-600", "text-white", "rounded-lg", "cursor-pointer", "text-xs", "font-medium", "hover:bg-brand-700", "transition"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["class", "w-12 h-12 object-cover rounded-md border border-surface-200 dark:border-surface-600", 3, "src", 4, "ngIf"], ["class", "text-xs text-surface-500 dark:text-surface-400 max-w-[120px] truncate", 4, "ngIf"], ["class", "flex items-center gap-2.5", 4, "ngIf"], [1, "w-12", "h-12", "object-cover", "rounded-md", "border", "border-surface-200", "dark:border-surface-600", 3, "src"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "max-w-[120px]", "truncate"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"], ["class", "flex items-center justify-center py-8", 4, "ngIf"], ["class", "flex items-center justify-center gap-2 py-10 text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-8"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-600"], [1, "flex", "items-center", "justify-center", "gap-2", "py-10", "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "fixed", "inset-0", "bg-black/60", "z-[1002]", 3, "click"], [1, "fixed", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-[1003]", "bg-white", "dark:bg-surface-800", "rounded-xl", "p-3", "shadow-2xl", "max-w-[90vw]", "max-h-[90vh]"], [1, "absolute", "top-2", "right-2", "z-10", "p-1.5", "rounded-full", "bg-black/50", "text-white", "hover:bg-black/70", "transition", 3, "click"], ["alt", "Document Image", 1, "block", "max-w-[80vw]", "max-h-[80vh]", "rounded-md", 3, "src"]], template: function CustomerRegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Customer Registration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function CustomerRegisterComponent_Template_button_click_4_listener() {
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
        \u0275\u0275listener("click", function CustomerRegisterComponent_Template_button_click_8_listener() {
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
        \u0275\u0275listener("click", function CustomerRegisterComponent_Template_button_click_12_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 4);
        \u0275\u0275element(14, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Register Customer ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, CustomerRegisterComponent_div_16_Template, 4, 0, "div", 8)(17, CustomerRegisterComponent_div_17_Template, 57, 17, "div", 9)(18, CustomerRegisterComponent_div_18_Template, 1, 0, "div", 10)(19, CustomerRegisterComponent_div_19_Template, 84, 19, "div", 11)(20, CustomerRegisterComponent_div_20_Template, 1, 0, "div", 10)(21, CustomerRegisterComponent_div_21_Template, 22, 11, "div", 12)(22, CustomerRegisterComponent_div_22_Template, 1, 0, "div", 10)(23, CustomerRegisterComponent_div_23_Template, 10, 4, "div", 12)(24, CustomerRegisterComponent_div_24_Template, 1, 0, "div", 13)(25, CustomerRegisterComponent_div_25_Template, 5, 1, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailCustomer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailCustomer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDocViewer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDocViewer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showImagePopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showImagePopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePicker], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=customer-register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerRegisterComponent, [{
    type: Component,
    args: [{ selector: "app-customer-register", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DatePipe,
      SearchableSelectDirective,
      DatePicker
    ], template: `<!-- Page Header -->
<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
  <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">Customer Registration</h2>
  <div class="flex items-center gap-2">
    <button (click)="exportData('excel')"
      class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm font-medium">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
      Excel
    </button>
    <button (click)="exportData('csv')"
      class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm font-medium">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
      CSV
    </button>
    <button (click)="openCreatePopup()"
      class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition text-sm font-medium shadow-sm">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
      Register Customer
    </button>
  </div>
</div>

<!-- Loading -->
<div *ngIf="loading" class="flex items-center justify-center py-20">
  <svg class="animate-spin h-10 w-10 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>
</div>

<!-- Search + Table -->
<div *ngIf="!loading" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
  <!-- Search -->
  <div class="relative mb-4 max-w-md">
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    <input type="text" placeholder="Search customers..."
      [(ngModel)]="searchString" (ngModelChange)="searchDebounce.next($event)"
      class="w-full pl-10 pr-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
  </div>

  <!-- Table -->
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left">
      <thead>
        <tr class="border-b border-surface-200 dark:border-surface-700">
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Full Name</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Email</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Phone</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Country</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">KYC Status</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Status</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Created</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let c of customers"
          class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100 font-medium">{{ c.fullName }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ c.email || '-' }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ c.phone || '-' }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ c.country }}</td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
              [ngClass]="c.isKycVerified
                ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
                : 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400'">
              {{ c.isKycVerified ? 'Verified' : 'Pending' }}
            </span>
          </td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
              [ngClass]="c.isActive
                ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
                : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">
              {{ c.isActive ? 'Active' : 'Disabled' }}
            </span>
          </td>
          <td class="px-4 py-3 text-surface-600 dark:text-surface-400">{{ c.createdAt | date:'dd/MM/yyyy' }}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-1">
              <button title="View Details" (click)="viewDetail(c)"
                class="p-1.5 rounded-md hover:bg-surface-100 dark:hover:bg-surface-700 text-brand-600 dark:text-brand-400 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </button>
              <button title="Documents" (click)="viewDocuments(c)"
                class="p-1.5 rounded-md hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-500 dark:text-surface-400 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"/></svg>
              </button>
              <button title="Edit" (click)="openEditPopup(c)"
                class="p-1.5 rounded-md hover:bg-surface-100 dark:hover:bg-surface-700 text-brand-600 dark:text-brand-400 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              </button>
              <button *ngIf="!c.isKycVerified" title="Approve KYC" (click)="approveKyc(c)"
                class="p-1.5 rounded-md hover:bg-success-50 dark:hover:bg-success-900/20 text-success-600 dark:text-success-400 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </button>
              <button *ngIf="c.isKycVerified" title="Reject KYC" (click)="rejectKyc(c)"
                class="p-1.5 rounded-md hover:bg-danger-50 dark:hover:bg-danger-900/20 text-danger-600 dark:text-danger-400 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </button>
              <button [title]="c.isActive ? 'Disable' : 'Enable'" (click)="toggleCustomerStatus(c)"
                class="p-1.5 rounded-md transition"
                [ngClass]="c.isActive
                  ? 'hover:bg-warning-50 dark:hover:bg-warning-900/20 text-warning-600 dark:text-warning-400'
                  : 'hover:bg-success-50 dark:hover:bg-success-900/20 text-success-600 dark:text-success-400'">
                <svg *ngIf="c.isActive" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
                <svg *ngIf="!c.isActive" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </button>
              <button title="Delete" (click)="deleteCustomer(c)"
                class="p-1.5 rounded-md hover:bg-danger-50 dark:hover:bg-danger-900/20 text-danger-600 dark:text-danger-400 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <div class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
    <span class="text-sm text-surface-500 dark:text-surface-400">
      Showing {{ customers.length ? pageIndex * pageSize + 1 : 0 }}&ndash;{{ pageIndex * pageSize + customers.length }} of {{ totalCount }}
    </span>
    <div class="flex items-center gap-2">
      <label class="text-sm text-surface-500 dark:text-surface-400">Rows:</label>
      <select [ngModel]="pageSize" (ngModelChange)="onPageSizeChange($event)"
        class="px-2 py-1 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 text-sm outline-none focus:ring-2 focus:ring-brand-500">
        <option [value]="10">10</option>
        <option [value]="20">20</option>
        <option [value]="50">50</option>
        <option [value]="100">100</option>
      </select>
      <button (click)="goToPage(0)" [disabled]="pageIndex === 0" title="First page"
        class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg>
      </button>
      <button (click)="goToPage(pageIndex - 1)" [disabled]="pageIndex === 0" title="Previous page"
        class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <span class="text-sm text-surface-700 dark:text-surface-300 px-2">
        Page {{ pageIndex + 1 }} of {{ totalPages || 1 }}
      </span>
      <button (click)="goToPage(pageIndex + 1)" [disabled]="pageIndex >= totalPages - 1" title="Next page"
        class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>
      <button (click)="goToPage(totalPages - 1)" [disabled]="pageIndex >= totalPages - 1" title="Last page"
        class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-4 h-4 text-surface-600 dark:text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>
      </button>
    </div>
  </div>

  <!-- Empty state -->
  <div *ngIf="!customers.length && !loading" class="text-center py-12 text-surface-400 dark:text-surface-500 text-sm">
    No customers found.
  </div>
</div>

<!-- ============================================================ -->
<!-- Detail Popup                                                  -->
<!-- ============================================================ -->
<div *ngIf="showDetail && detailCustomer" class="fixed inset-0 bg-black/50 z-[1000]" (click)="closeDetail()"></div>
<div *ngIf="showDetail && detailCustomer"
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-surface-800 shadow-xl p-6">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Customer Details</h3>
    <button (click)="closeDetail()" class="p-1.5 rounded-md hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-500 transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Full Name</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.fullName }}</span></div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Email</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.email || '-' }}</span></div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Phone</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.phone || '-' }}</span></div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Date of Birth</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.dateOfBirth || '-' }}</span></div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Gender</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.gender || '-' }}</span></div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Nationality</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.nationality || '-' }}</span></div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Country</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.country }}</span></div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">City</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.city || '-' }}</span></div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">State</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.state || '-' }}</span></div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Postal Code</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.postalCode || '-' }}</span></div>
    <div class="sm:col-span-2"><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Address</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.address || '-' }}</span></div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Document Type</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.idDocumentType || '-' }}</span></div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Document Number</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.idDocumentNumber || '-' }}</span></div>
    <div>
      <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">KYC Status</span>
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
        [ngClass]="detailCustomer.isKycVerified
          ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
          : 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400'">
        {{ detailCustomer.isKycVerified ? 'Verified' : 'Pending' }}
      </span>
    </div>
    <div><span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-0.5">Created</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.createdAt | date:'dd/MM/yyyy' }}</span></div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Create / Edit Customer Popup                                  -->
<!-- ============================================================ -->
<div *ngIf="showFormPopup" class="fixed inset-0 bg-black/50 z-[1000]" (click)="closeFormPopup()"></div>
<div *ngIf="showFormPopup"
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-surface-800 shadow-xl p-6">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">{{ isEditing ? 'Edit Customer' : 'Register New Customer' }}</h3>
    <button (click)="closeFormPopup()" class="p-1.5 rounded-md hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-500 transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  </div>

  <div *ngIf="formError" class="mb-4 px-4 py-2.5 rounded-lg bg-danger-50 dark:bg-danger-900/20 text-danger-700 dark:text-danger-400 text-sm">
    {{ formError }}
  </div>

  <!-- Tab Buttons -->
  <div class="flex border-b border-surface-200 dark:border-surface-700 mb-4">
    <button *ngFor="let tab of ['Personal', 'Contact', 'Documents']"
      (click)="activeTab = tab"
      class="px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px"
      [ngClass]="activeTab === tab
        ? 'border-brand-600 text-brand-600 dark:text-brand-400 dark:border-brand-400'
        : 'border-transparent text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-300'">
      {{ tab }}
    </button>
  </div>

  <!-- Tab 1: Personal -->
  <div *ngIf="activeTab === 'Personal'" class="py-3">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Full Name *</label>
        <input type="text" [(ngModel)]="form.fullName"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Date of Birth</label>
        <p-datepicker [(ngModel)]="form.dateOfBirth" [maxDate]="maxDobDate" dateFormat="dd/mm/yy"
          [showIcon]="true" [showClear]="true" placeholder="DD/MM/YYYY"
          styleClass="w-full"
          inputStyleClass="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Gender</label>
        <select [(ngModel)]="form.gender"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Nationality</label>
        <input type="text" [(ngModel)]="form.nationality"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>
    </div>
  </div>

  <!-- Tab 2: Contact -->
  <div *ngIf="activeTab === 'Contact'" class="py-3">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Email</label>
        <input type="email" [(ngModel)]="form.email"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Phone</label>
        <input type="text" [(ngModel)]="form.phone"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Country *</label>
        <select [(ngModel)]="form.country"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
          <option value="" disabled>Select country</option>
          <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Contact Country</label>
        <select [(ngModel)]="form.contactCountry"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
          <option value="">-- None --</option>
          <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">City</label>
        <input type="text" [(ngModel)]="form.city"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">State</label>
        <input type="text" [(ngModel)]="form.state"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Postal Code</label>
        <input type="text" [(ngModel)]="form.postalCode"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>
      <div class="sm:col-span-2">
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Address</label>
        <input type="text" [(ngModel)]="form.address"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>
    </div>
  </div>

  <!-- Tab 3: Documents -->
  <div *ngIf="activeTab === 'Documents'" class="py-3">
    <!-- Existing Documents (shown when editing) -->
    <div *ngIf="isEditing" class="mb-4">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-medium text-surface-500 dark:text-surface-400">Existing Documents</span>
      </div>
      <div *ngIf="loadingExistingDocs" class="flex items-center justify-center py-4">
        <svg class="animate-spin h-6 w-6 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
      </div>
      <div *ngIf="!loadingExistingDocs && existingDocs.length === 0" class="flex items-center justify-center gap-2 py-6 text-surface-400 dark:text-surface-500 text-sm">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"/></svg>
        <span>No documents uploaded yet.</span>
      </div>
      <div *ngIf="!loadingExistingDocs && existingDocs.length > 0" class="grid grid-cols-1 gap-3">
        <div *ngFor="let doc of existingDocs" class="rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-750 p-4">
          <div class="flex items-center justify-between mb-1">
            <strong class="text-sm text-surface-900 dark:text-surface-100">{{ doc.documentType }}</strong>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
              [ngClass]="doc.isVerified
                ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
                : 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400'">
              {{ doc.isVerified ? 'Verified' : 'Pending' }}
            </span>
          </div>
          <div class="text-xs text-surface-500 dark:text-surface-400 mb-2">
            <span *ngIf="doc.documentNumber">No: {{ doc.documentNumber }}</span>
            <span *ngIf="doc.issuingCountry"> &middot; {{ doc.issuingCountry }}</span>
          </div>
          <div class="flex gap-3">
            <div *ngIf="doc.frontImagePath" class="text-center cursor-pointer" (click)="openImagePopup(doc.frontImagePath)">
              <img [src]="getDocImageFullUrl(doc.frontImagePath)" alt="Front"
                class="w-[120px] h-[80px] object-cover rounded-md border border-surface-300 dark:border-surface-600 hover:scale-105 hover:shadow-lg transition-transform" />
              <span class="block text-[11px] text-surface-500 dark:text-surface-400 mt-1">Front</span>
            </div>
            <div *ngIf="doc.backImagePath" class="text-center cursor-pointer" (click)="openImagePopup(doc.backImagePath)">
              <img [src]="getDocImageFullUrl(doc.backImagePath)" alt="Back"
                class="w-[120px] h-[80px] object-cover rounded-md border border-surface-300 dark:border-surface-600 hover:scale-105 hover:shadow-lg transition-transform" />
              <span class="block text-[11px] text-surface-500 dark:text-surface-400 mt-1">Back</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Upload New Documents -->
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs font-medium text-surface-500 dark:text-surface-400">{{ isEditing ? 'Upload Additional Documents' : 'Upload identification documents' }}</span>
      <button (click)="addDocumentRow()"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-600 text-brand-600 dark:text-brand-400 dark:border-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition text-sm font-medium">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        Add Document
      </button>
    </div>

    <div *ngIf="documentUploads.length === 0" class="flex items-center justify-center gap-2 py-6 text-surface-400 dark:text-surface-500 text-sm">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
      <span>Click "Add Document" to upload {{ isEditing ? 'additional' : 'identification' }} documents.</span>
    </div>

    <div *ngFor="let doc of documentUploads; let i = index"
      class="rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-750 p-4 mb-3">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-semibold text-surface-700 dark:text-surface-200">Document {{ i + 1 }}</span>
        <button title="Remove" (click)="removeDocumentRow(i)"
          class="p-1.5 rounded-md hover:bg-danger-50 dark:hover:bg-danger-900/20 text-danger-600 dark:text-danger-400 transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Document Type</label>
          <select [(ngModel)]="doc.documentType" (ngModelChange)="onDocTypeChange(doc)"
            class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option value="" disabled>Select type</option>
            <option *ngFor="let dt of documentTypeConfigs" [value]="dt.name">{{ dt.name }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Document Number</label>
          <input type="text" [(ngModel)]="doc.documentNumber"
            class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Issuing Country</label>
          <select [(ngModel)]="doc.issuingCountry"
            class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option value="">Select country</option>
            <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Issue Date</label>
          <p-datepicker [(ngModel)]="doc.issueDate" [maxDate]="today" dateFormat="dd/mm/yy"
            [showIcon]="true" [showClear]="true" placeholder="DD/MM/YYYY"
            styleClass="w-full"
            inputStyleClass="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Expiry Date</label>
          <p-datepicker [(ngModel)]="doc.expiryDate" [minDate]="today" dateFormat="dd/mm/yy"
            [showIcon]="true" [showClear]="true" placeholder="DD/MM/YYYY"
            styleClass="w-full"
            inputStyleClass="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
      </div>

      <div class="flex gap-4 mt-2">
        <div class="flex items-center gap-2.5">
          <label class="inline-flex items-center gap-1.5 px-3 py-2 bg-brand-600 text-white rounded-lg cursor-pointer text-xs font-medium hover:bg-brand-700 transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            Front Side
            <input type="file" accept="image/*" (change)="onFileSelected(doc, 'front', $event)" hidden />
          </label>
          <img *ngIf="doc.frontPreview" [src]="doc.frontPreview" class="w-12 h-12 object-cover rounded-md border border-surface-200 dark:border-surface-600" />
          <span *ngIf="doc.frontImage" class="text-xs text-surface-500 dark:text-surface-400 max-w-[120px] truncate">{{ doc.frontImage.name }}</span>
        </div>
        <div *ngIf="doc.requiredSides >= 2" class="flex items-center gap-2.5">
          <label class="inline-flex items-center gap-1.5 px-3 py-2 bg-brand-600 text-white rounded-lg cursor-pointer text-xs font-medium hover:bg-brand-700 transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            Back Side
            <input type="file" accept="image/*" (change)="onFileSelected(doc, 'back', $event)" hidden />
          </label>
          <img *ngIf="doc.backPreview" [src]="doc.backPreview" class="w-12 h-12 object-cover rounded-md border border-surface-200 dark:border-surface-600" />
          <span *ngIf="doc.backImage" class="text-xs text-surface-500 dark:text-surface-400 max-w-[120px] truncate">{{ doc.backImage.name }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Popup Actions -->
  <div class="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
    <button (click)="closeFormPopup()"
      class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm font-medium">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      Cancel
    </button>
    <button (click)="saveCustomer()" [disabled]="saving || uploadingDocs"
      class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition text-sm font-medium shadow-sm">
      <svg *ngIf="saving || uploadingDocs" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
      <svg *ngIf="!saving && !uploadingDocs" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
      {{ uploadingDocs ? 'Uploading Documents...' : (isEditing ? 'Save Changes' : 'Register Customer') }}
    </button>
  </div>
</div>

<!-- ============================================================ -->
<!-- Document Viewer Popup                                         -->
<!-- ============================================================ -->
<div *ngIf="showDocViewer" class="fixed inset-0 bg-black/50 z-[1000]" (click)="closeDocViewer()"></div>
<div *ngIf="showDocViewer"
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-surface-800 shadow-xl p-6">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Documents &mdash; {{ docViewerCustomer?.fullName }}</h3>
    <button (click)="closeDocViewer()" class="p-1.5 rounded-md hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-500 transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  </div>

  <div *ngIf="loadingDocs" class="flex items-center justify-center py-8">
    <svg class="animate-spin h-8 w-8 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
  </div>

  <div *ngIf="!loadingDocs && customerDocs.length === 0" class="flex items-center justify-center gap-2 py-10 text-surface-400 dark:text-surface-500 text-sm">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"/></svg>
    <span>No documents uploaded for this customer.</span>
  </div>

  <div *ngIf="!loadingDocs && customerDocs.length > 0" class="grid grid-cols-1 gap-3">
    <div *ngFor="let doc of customerDocs" class="rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-750 p-4">
      <div class="flex items-center justify-between mb-1">
        <strong class="text-sm text-surface-900 dark:text-surface-100">{{ doc.documentType }}</strong>
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
          [ngClass]="doc.isVerified
            ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
            : 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400'">
          {{ doc.isVerified ? 'Verified' : 'Pending' }}
        </span>
      </div>
      <div class="text-xs text-surface-500 dark:text-surface-400 mb-2">
        <span *ngIf="doc.documentNumber">No: {{ doc.documentNumber }}</span>
        <span *ngIf="doc.issuingCountry"> &middot; {{ doc.issuingCountry }}</span>
      </div>
      <div class="flex gap-3">
        <div *ngIf="doc.frontImagePath" class="text-center cursor-pointer" (click)="openImagePopup(doc.frontImagePath)">
          <img [src]="getDocImageFullUrl(doc.frontImagePath)" alt="Front"
            class="w-[120px] h-[80px] object-cover rounded-md border border-surface-300 dark:border-surface-600 hover:scale-105 hover:shadow-lg transition-transform" />
          <span class="block text-[11px] text-surface-500 dark:text-surface-400 mt-1">Front</span>
        </div>
        <div *ngIf="doc.backImagePath" class="text-center cursor-pointer" (click)="openImagePopup(doc.backImagePath)">
          <img [src]="getDocImageFullUrl(doc.backImagePath)" alt="Back"
            class="w-[120px] h-[80px] object-cover rounded-md border border-surface-300 dark:border-surface-600 hover:scale-105 hover:shadow-lg transition-transform" />
          <span class="block text-[11px] text-surface-500 dark:text-surface-400 mt-1">Back</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Image Full View Popup                                         -->
<!-- ============================================================ -->
<div *ngIf="showImagePopup" class="fixed inset-0 bg-black/60 z-[1002]" (click)="closeImagePopup()"></div>
<div *ngIf="showImagePopup"
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1003] bg-white dark:bg-surface-800 rounded-xl p-3 shadow-2xl max-w-[90vw] max-h-[90vh]">
  <button (click)="closeImagePopup()"
    class="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
  </button>
  <img [src]="docImageUrl" alt="Document Image" class="block max-w-[80vw] max-h-[80vh] rounded-md" />
</div>
`, styles: ["/* src/app/pages/admin/customer-register/customer-register.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=customer-register.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerRegisterComponent, { className: "CustomerRegisterComponent", filePath: "src/app/pages/admin/customer-register/customer-register.component.ts", lineNumber: 59 });
})();
export {
  CustomerRegisterComponent
};
//# sourceMappingURL=chunk-S4U6EG4S.js.map
