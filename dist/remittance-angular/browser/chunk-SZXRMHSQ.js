import {
  SearchableSelectDirective
} from "./chunk-SRMAZKMQ.js";
import {
  ExportService
} from "./chunk-DU4FVJ3R.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
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

// src/app/pages/admin/commissions/commissions.component.ts
function CommissionsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "circle", 14)(3, "path", 15);
    \u0275\u0275elementEnd()();
  }
}
function CommissionsComponent_div_17_tr_29_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, c_r4.commissionPercent, "1.2-2"), "%");
  }
}
function CommissionsComponent_div_17_tr_29_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, c_r4.flatFee, "1.2-2"), " (Flat)");
  }
}
function CommissionsComponent_div_17_tr_29_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_div_17_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 41)(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 42);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 42);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 42);
    \u0275\u0275template(16, CommissionsComponent_div_17_tr_29_span_16_Template, 3, 4, "span", 43)(17, CommissionsComponent_div_17_tr_29_span_17_Template, 3, 4, "span", 43)(18, CommissionsComponent_div_17_tr_29_span_18_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 44)(20, "span", 45);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 44)(23, "div", 46)(24, "button", 47);
    \u0275\u0275listener("click", function CommissionsComponent_div_17_tr_29_Template_button_click_24_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 4);
    \u0275\u0275element(26, "path", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 49);
    \u0275\u0275listener("click", function CommissionsComponent_div_17_tr_29_Template_button_click_27_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCommission(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 4);
    \u0275\u0275element(29, "path", 50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.agentName || "All");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.payoutAgentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.sourceCountry || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.destinationCountry || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((c_r4.sourceCurrency || "-") + " / " + (c_r4.destinationCurrency || "-"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 12, c_r4.minAmount, "1.2-2"), " - ", \u0275\u0275pipeBind2(14, 15, c_r4.maxAmount, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", c_r4.commissionPercent > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.commissionPercent <= 0 && (c_r4.flatFee || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.commissionPercent <= 0 && (c_r4.flatFee || 0) <= 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", c_r4.isActive ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.isActive ? "Active" : "Inactive", " ");
  }
}
function CommissionsComponent_div_17_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, " No commissions found. ");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 18);
    \u0275\u0275element(3, "circle", 19)(4, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_17_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CommissionsComponent_div_17_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "table", 23)(8, "thead")(9, "tr", 24)(10, "th", 25);
    \u0275\u0275text(11, "Sending Agent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 25);
    \u0275\u0275text(13, "Payout Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 25);
    \u0275\u0275text(15, "Source Country ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 25);
    \u0275\u0275text(17, "Dest Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 25);
    \u0275\u0275text(19, "Currency Pair ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 25);
    \u0275\u0275text(21, "Amount Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 25);
    \u0275\u0275text(23, "Service Charge ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 25);
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 25);
    \u0275\u0275text(27, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275template(29, CommissionsComponent_div_17_tr_29_Template, 30, 18, "tr", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, CommissionsComponent_div_17_div_30_Template, 2, 0, "div", 27);
    \u0275\u0275elementStart(31, "div", 28)(32, "span", 29);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 30)(35, "label", 29);
    \u0275\u0275text(36, "Rows:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 31);
    \u0275\u0275listener("ngModelChange", function CommissionsComponent_div_17_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275elementStart(38, "option", 32);
    \u0275\u0275text(39, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 32);
    \u0275\u0275text(41, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 32);
    \u0275\u0275text(43, "50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "button", 33);
    \u0275\u0275listener("click", function CommissionsComponent_div_17_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(0));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 4);
    \u0275\u0275element(46, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "button", 35);
    \u0275\u0275listener("click", function CommissionsComponent_div_17_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pageIndex - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(48, "svg", 4);
    \u0275\u0275element(49, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "button", 37);
    \u0275\u0275listener("click", function CommissionsComponent_div_17_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pageIndex + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 4);
    \u0275\u0275element(52, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "button", 39);
    \u0275\u0275listener("click", function CommissionsComponent_div_17_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.Math.ceil(ctx_r1.totalCount / ctx_r1.pageSize) - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 4);
    \u0275\u0275element(55, "path", 40);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.commissions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.commissions.length && !ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r1.totalCount, " total \xB7 Page ", ctx_r1.pageIndex + 1, " of ", ctx_r1.totalCount ? ctx_r1.Math.ceil(ctx_r1.totalCount / ctx_r1.pageSize) : 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.Math.ceil(ctx_r1.totalCount / ctx_r1.pageSize) - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.Math.ceil(ctx_r1.totalCount / ctx_r1.pageSize) - 1);
  }
}
function CommissionsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function CommissionsComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_div_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formError, " ");
  }
}
function CommissionsComponent_div_19_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r7.businessName);
  }
}
function CommissionsComponent_div_19_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r8.businessName);
  }
}
function CommissionsComponent_div_19_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r9.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r9.name);
  }
}
function CommissionsComponent_div_19_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r10.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r10.name);
  }
}
function CommissionsComponent_div_19_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r11 = ctx.$implicit;
    \u0275\u0275property("ngValue", pm_r11.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r11.name);
  }
}
function CommissionsComponent_div_19_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r12);
  }
}
function CommissionsComponent_div_19_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r13);
  }
}
function CommissionsComponent_div_19_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 62);
    \u0275\u0275text(2, "Service Charge Percent *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_div_63_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.commissionPercent, $event) || (ctx_r1.form.commissionPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.commissionPercent);
  }
}
function CommissionsComponent_div_19_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 62);
    \u0275\u0275text(2, "Flat Fee *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_div_64_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.flatFee, $event) || (ctx_r1.form.flatFee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.flatFee);
  }
}
function CommissionsComponent_div_19__svg_svg_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "circle", 14)(2, "path", 15);
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_div_19__svg_svg_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 82);
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275listener("click", function CommissionsComponent_div_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 55)(3, "h3", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 57);
    \u0275\u0275listener("click", function CommissionsComponent_div_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 58);
    \u0275\u0275element(7, "path", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, CommissionsComponent_div_19_div_8_Template, 2, 1, "div", 60);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 61)(10, "div")(11, "label", 62);
    \u0275\u0275text(12, "Sending Agent (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.agentId, $event) || (ctx_r1.form.agentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(14, CommissionsComponent_div_19_option_14_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 62);
    \u0275\u0275text(17, "Payout Agent *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 65);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.payoutAgentId, $event) || (ctx_r1.form.payoutAgentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 66);
    \u0275\u0275text(20, "Select payout agent");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, CommissionsComponent_div_19_option_21_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "label", 62);
    \u0275\u0275text(24, "Source Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCountry, $event) || (ctx_r1.form.sourceCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(26, CommissionsComponent_div_19_option_26_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "label", 62);
    \u0275\u0275text(29, "Destination Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCountry, $event) || (ctx_r1.form.destinationCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(31, CommissionsComponent_div_19_option_31_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 62);
    \u0275\u0275text(34, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.paymentMethod, $event) || (ctx_r1.form.paymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(36, CommissionsComponent_div_19_option_36_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "label", 62);
    \u0275\u0275text(39, "Source Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCurrency, $event) || (ctx_r1.form.sourceCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(41, CommissionsComponent_div_19_option_41_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "label", 62);
    \u0275\u0275text(44, "Destination Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_select_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCurrency, $event) || (ctx_r1.form.destinationCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(46, CommissionsComponent_div_19_option_46_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div")(48, "label", 62);
    \u0275\u0275text(49, "Min Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.minAmount, $event) || (ctx_r1.form.minAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div")(52, "label", 62);
    \u0275\u0275text(53, "Max Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.maxAmount, $event) || (ctx_r1.form.maxAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div")(56, "label", 62);
    \u0275\u0275text(57, "Service Charge Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "select", 65);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_select_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.commissionType, $event) || (ctx_r1.form.commissionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(59, "option", 68);
    \u0275\u0275text(60, "Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 69);
    \u0275\u0275text(62, "Flat Fee");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(63, CommissionsComponent_div_19_div_63_Template, 4, 1, "div", 43)(64, CommissionsComponent_div_19_div_64_Template, 4, 1, "div", 43);
    \u0275\u0275elementStart(65, "div", 70)(66, "label", 71)(67, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_input_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.isActive, $event) || (ctx_r1.form.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "div", 73);
    \u0275\u0275elementStart(69, "span", 74);
    \u0275\u0275text(70, "Active");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "div", 75)(72, "button", 3);
    \u0275\u0275listener("click", function CommissionsComponent_div_19_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275text(73, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 76);
    \u0275\u0275listener("click", function CommissionsComponent_div_19_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCommission());
    });
    \u0275\u0275template(75, CommissionsComponent_div_19__svg_svg_75_Template, 3, 0, "svg", 77)(76, CommissionsComponent_div_19__svg_svg_76_Template, 2, 0, "svg", 78);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Edit Service Charge" : "Create Service Charge", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.agentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sendingAgents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.payoutAgentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.payoutAgents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sourceCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destinationCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.paymentMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sourceCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destinationCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.minAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.maxAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.commissionType);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.form.commissionType === "Percentage");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.commissionType === "Flat");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.isActive);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Update" : "Create", " ");
  }
}
function emptyForm() {
  return {
    agentId: null,
    payoutAgentId: null,
    sourceCountry: "",
    destinationCountry: "",
    paymentMethod: "",
    sourceCurrency: "",
    destinationCurrency: "",
    minAmount: 0,
    maxAmount: 0,
    commissionPercent: 0,
    flatFee: 0,
    commissionType: "Percentage",
    isActive: true
  };
}
var CommissionsComponent = class _CommissionsComponent {
  constructor(api, exportService, auth, notify) {
    this.api = api;
    this.exportService = exportService;
    this.auth = auth;
    this.notify = notify;
    this.Math = Math;
    this.commissions = [];
    this.displayedColumns = [
      "sendingAgent",
      "payoutAgent",
      "sourceCountry",
      "destCountry",
      "currencyPair",
      "amountRange",
      "commission",
      "status",
      "actions"
    ];
    this.searchString = "";
    this.loading = true;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchSubject = new Subject();
    this.destroy$ = new Subject();
    this.sendingAgents = [];
    this.payoutAgents = [];
    this.countries = [];
    this.currencies = [];
    this.paymentMethods = [];
    this.showPopup = false;
    this.isEditing = false;
    this.editingId = 0;
    this.saving = false;
    this.formError = "";
    this.form = emptyForm();
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadAgents();
    this.loadReferenceData();
    this.searchSubject.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(() => {
      this.pageIndex = 0;
      this.loadCommissions();
    });
    this.loadCommissions();
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
  // Commissions CRUD
  // ---------------------------------------------------------------------------
  loadCommissions() {
    this.loading = true;
    this.api.getCommissionsPaged({
      page: this.pageIndex + 1,
      pageSize: this.pageSize,
      search: this.searchString
    }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.commissions = res.data.items ?? [];
          this.totalCount = res.data.totalCount ?? 0;
        } else {
          this.commissions = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load commissions.");
        }
        this.loading = false;
      },
      error: () => {
        this.commissions = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  onSearchChange() {
    this.searchSubject.next(this.searchString);
  }
  onPageSizeChange(newSize) {
    this.pageSize = newSize;
    this.pageIndex = 0;
    this.loadCommissions();
  }
  goToPage(index) {
    this.pageIndex = index;
    this.loadCommissions();
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCommissions();
  }
  exportData(format) {
    this.exportService.export("api/admin/commissions/export", { search: this.searchString }, format);
  }
  // ---------------------------------------------------------------------------
  // Create / Edit popup
  // ---------------------------------------------------------------------------
  openCreate() {
    this.form = emptyForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = "";
    this.showPopup = true;
  }
  openEdit(c) {
    const isFlat = (c.flatFee ?? 0) > 0 && c.commissionPercent <= 0;
    this.form = {
      agentId: c.agentId ?? null,
      payoutAgentId: c.payoutAgentId,
      sourceCountry: c.sourceCountry || "",
      destinationCountry: c.destinationCountry || "",
      paymentMethod: c.paymentMethod || "",
      sourceCurrency: c.sourceCurrency || "",
      destinationCurrency: c.destinationCurrency || "",
      minAmount: c.minAmount,
      maxAmount: c.maxAmount,
      commissionPercent: c.commissionPercent,
      flatFee: c.flatFee ?? 0,
      commissionType: isFlat ? "Flat" : "Percentage",
      isActive: c.isActive
    };
    this.isEditing = true;
    this.editingId = c.id;
    this.formError = "";
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }
  saveCommission() {
    this.formError = "";
    if (!this.form.payoutAgentId) {
      this.formError = "Payout Agent is required.";
      return;
    }
    if (!this.form.commissionType) {
      this.formError = "Commission Type is required.";
      return;
    }
    if (this.form.commissionType === "Percentage") {
      if (!this.form.commissionPercent || this.form.commissionPercent <= 0) {
        this.formError = "Commission Percent must be greater than 0.";
        return;
      }
      this.form.flatFee = 0;
    } else if (this.form.commissionType === "Flat") {
      if (!this.form.flatFee || this.form.flatFee <= 0) {
        this.formError = "Flat Fee must be greater than 0.";
        return;
      }
      this.form.commissionPercent = 0;
    }
    this.saving = true;
    const dto = {
      agentId: this.form.agentId,
      payoutAgentId: this.form.payoutAgentId,
      sourceCountry: this.form.sourceCountry || null,
      destinationCountry: this.form.destinationCountry || null,
      paymentMethod: this.form.paymentMethod || null,
      sourceCurrency: this.form.sourceCurrency || null,
      destinationCurrency: this.form.destinationCurrency || null,
      minAmount: this.form.minAmount,
      maxAmount: this.form.maxAmount,
      commissionPercent: this.form.commissionPercent,
      flatFee: this.form.flatFee,
      isActive: this.form.isActive
    };
    const obs = this.isEditing ? this.api.updateCommission(this.editingId, dto) : this.api.createCommission(dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.isEditing ? "Commission updated." : "Commission created.");
          this.showPopup = false;
          this.loadCommissions();
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
  // Delete
  // ---------------------------------------------------------------------------
  deleteCommission(c) {
    this.api.deleteCommission(c.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Commission deleted.");
        this.loadCommissions();
      } else {
        this.notify.error(r?.message || "Failed to delete commission.");
      }
    });
  }
  static {
    this.\u0275fac = function CommissionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommissionsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommissionsComponent, selectors: [["app-commissions"]], decls: 20, vars: 4, consts: [[1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-700", "dark:text-surface-200", "hover:bg-surface-50", "dark:hover:bg-surface-600", "transition", "text-sm", "font-medium", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "text-white", "transition", "text-sm", "font-medium", "shadow-sm", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "relative", "mb-4", "max-w-md"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["cx", "11", "cy", "11", "r", "8"], ["stroke-linecap", "round", "d", "M21 21l-4.35-4.35"], ["type", "text", "placeholder", "Search commissions...", 1, "w-full", "pl-10", "pr-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "border-b", "border-surface-200", "dark:border-surface-700"], [1, "px-3", "py-3", "font-semibold", "text-surface-600", "dark:text-surface-300", "whitespace-nowrap"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], ["class", "py-12 text-center text-surface-500 dark:text-surface-400 text-sm", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "mt-4", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-2"], [1, "px-2", "py-1", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "text-sm", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["title", "First page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 19l-7-7 7-7m8 14l-7-7 7-7"], ["title", "Previous page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], ["title", "Next page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5l7 7-7 7"], ["title", "Last page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 5l7 7-7 7m-8-14l7 7-7 7"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "px-3", "py-3", "text-surface-800", "dark:text-surface-200"], [4, "ngIf"], [1, "px-3", "py-3"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "flex", "items-center", "gap-1"], ["title", "Edit", 1, "p-1.5", "rounded-lg", "text-brand-600", "hover:bg-brand-50", "dark:text-brand-400", "dark:hover:bg-brand-900/20", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Delete", 1, "p-1.5", "rounded-lg", "text-danger-600", "hover:bg-danger-50", "dark:text-danger-400", "dark:hover:bg-danger-900/20", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "py-12", "text-center", "text-surface-500", "dark:text-surface-400", "text-sm"], [1, "fixed", "inset-0", "z-40", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], [1, "pointer-events-auto", "w-full", "max-w-3xl", "max-h-[90vh]", "overflow-y-auto", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-xl", 3, "click"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "p-1.5", "rounded-lg", "text-surface-500", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], ["class", "mx-6 mt-4 px-4 py-3 rounded-lg bg-danger-50 dark:bg-danger-900/30 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 text-sm", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "px-6", "py-5"], [1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1"], [1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["required", "", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], ["type", "number", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["value", "Percentage"], ["value", "Flat"], [1, "flex", "items-center", "gap-3", "sm:col-span-2", "pt-1"], [1, "relative", "inline-flex", "items-center", "cursor-pointer"], ["type", "checkbox", 1, "sr-only", "peer", 3, "ngModelChange", "ngModel"], [1, "w-10", "h-6", "bg-surface-300", "dark:bg-surface-600", "peer-focus:ring-2", "peer-focus:ring-brand-500", "rounded-full", "peer", "peer-checked:bg-brand-600", "transition-colors", "after:content-['']", "after:absolute", "after:top-[2px]", "after:left-[2px]", "after:bg-white", "after:rounded-full", "after:h-5", "after:w-5", "after:transition-all", "peer-checked:after:translate-x-4"], [1, "ml-2", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "inline-flex", "items-center", "gap-1.5", "px-5", "py-2", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "text-white", "transition", "text-sm", "font-medium", "shadow-sm", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["class", "animate-spin h-4 w-4", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "mx-6", "mt-4", "px-4", "py-3", "rounded-lg", "bg-danger-50", "dark:bg-danger-900/30", "border", "border-danger-200", "dark:border-danger-800", "text-danger-700", "dark:text-danger-400", "text-sm"], ["type", "number", "required", "", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"]], template: function CommissionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Service Charge Configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function CommissionsComponent_Template_button_click_4_listener() {
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
        \u0275\u0275listener("click", function CommissionsComponent_Template_button_click_8_listener() {
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
        \u0275\u0275listener("click", function CommissionsComponent_Template_button_click_12_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 4);
        \u0275\u0275element(14, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Add Service Charge ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, CommissionsComponent_div_16_Template, 4, 0, "div", 8)(17, CommissionsComponent_div_17_Template, 56, 14, "div", 9)(18, CommissionsComponent_div_18_Template, 1, 0, "div", 10)(19, CommissionsComponent_div_19_Template, 78, 27, "div", 11);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=commissions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommissionsComponent, [{
    type: Component,
    args: [{ selector: "app-commissions", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DecimalPipe,
      SearchableSelectDirective
    ], template: `<!-- Page Header -->
<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
  <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">Service Charge Configuration</h2>
  <div class="flex flex-wrap items-center gap-2">
    <button (click)="exportData('excel')"
      class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-600 transition text-sm font-medium">
      <!-- download icon -->
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
      </svg>
      Excel
    </button>
    <button (click)="exportData('csv')"
      class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-600 transition text-sm font-medium">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
      </svg>
      CSV
    </button>
    <button (click)="openCreate()"
      class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition text-sm font-medium shadow-sm">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      Add Service Charge
    </button>
  </div>
</div>

<!-- Loading -->
<div *ngIf="loading" class="flex items-center justify-center py-20">
  <svg class="animate-spin h-8 w-8 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
  </svg>
</div>

<!-- Search + Table -->
<div *ngIf="!loading"
  class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
  <!-- Search -->
  <div class="relative mb-4 max-w-md">
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor"
      stroke-width="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path stroke-linecap="round" d="M21 21l-4.35-4.35" />
    </svg>
    <input type="text" placeholder="Search commissions..." [(ngModel)]="searchString" (ngModelChange)="onSearchChange()"
      class="w-full pl-10 pr-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
  </div>

  <!-- Table -->
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left">
      <thead>
        <tr class="border-b border-surface-200 dark:border-surface-700">
          <th class="px-3 py-3 font-semibold text-surface-600 dark:text-surface-300 whitespace-nowrap">Sending Agent
          </th>
          <th class="px-3 py-3 font-semibold text-surface-600 dark:text-surface-300 whitespace-nowrap">Payout Agent</th>
          <th class="px-3 py-3 font-semibold text-surface-600 dark:text-surface-300 whitespace-nowrap">Source Country
          </th>
          <th class="px-3 py-3 font-semibold text-surface-600 dark:text-surface-300 whitespace-nowrap">Dest Country</th>
          <th class="px-3 py-3 font-semibold text-surface-600 dark:text-surface-300 whitespace-nowrap">Currency Pair
          </th>
          <th class="px-3 py-3 font-semibold text-surface-600 dark:text-surface-300 whitespace-nowrap">Amount Range</th>
          <th class="px-3 py-3 font-semibold text-surface-600 dark:text-surface-300 whitespace-nowrap">Service Charge
          </th>
          <th class="px-3 py-3 font-semibold text-surface-600 dark:text-surface-300 whitespace-nowrap">Status</th>
          <th class="px-3 py-3 font-semibold text-surface-600 dark:text-surface-300 whitespace-nowrap">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let c of commissions"
          class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
          <td class="px-3 py-3 text-surface-800 dark:text-surface-200">{{ c.agentName || 'All' }}</td>
          <td class="px-3 py-3 text-surface-800 dark:text-surface-200">{{ c.payoutAgentName }}</td>
          <td class="px-3 py-3 text-surface-800 dark:text-surface-200">{{ c.sourceCountry || '-' }}</td>
          <td class="px-3 py-3 text-surface-800 dark:text-surface-200">{{ c.destinationCountry || '-' }}</td>
          <td class="px-3 py-3 text-surface-800 dark:text-surface-200">{{ (c.sourceCurrency || '-') + ' / ' +
            (c.destinationCurrency || '-') }}</td>
          <td class="px-3 py-3 text-surface-800 dark:text-surface-200">{{ c.minAmount | number:'1.2-2' }} - {{
            c.maxAmount | number:'1.2-2' }}</td>
          <td class="px-3 py-3 text-surface-800 dark:text-surface-200">
            <span *ngIf="c.commissionPercent > 0">{{ c.commissionPercent | number:'1.2-2' }}%</span>
            <span *ngIf="c.commissionPercent <= 0 && (c.flatFee || 0) > 0">{{ c.flatFee | number:'1.2-2' }}
              (Flat)</span>
            <span *ngIf="c.commissionPercent <= 0 && (c.flatFee || 0) <= 0">-</span>
          </td>
          <td class="px-3 py-3">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" [ngClass]="c.isActive
                ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
                : 'bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400'">
              {{ c.isActive ? 'Active' : 'Inactive' }}
            </span>
          </td>
          <td class="px-3 py-3">
            <div class="flex items-center gap-1">
              <button title="Edit" (click)="openEdit(c)"
                class="p-1.5 rounded-lg text-brand-600 hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-900/20 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button title="Delete" (click)="deleteCommission(c)"
                class="p-1.5 rounded-lg text-danger-600 hover:bg-danger-50 dark:text-danger-400 dark:hover:bg-danger-900/20 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Empty state -->
  <div *ngIf="!commissions.length && !loading" class="py-12 text-center text-surface-500 dark:text-surface-400 text-sm">
    No commissions found.
  </div>

  <!-- Pagination -->
  <div
    class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
    <span class="text-sm text-surface-500 dark:text-surface-400">
      {{ totalCount }} total &middot; Page {{ pageIndex + 1 }} of {{ totalCount ? (Math.ceil(totalCount / pageSize)) : 1
      }}
    </span>
    <div class="flex items-center gap-2">
      <label class="text-sm text-surface-500 dark:text-surface-400">Rows:</label>
      <select [ngModel]="pageSize" (ngModelChange)="onPageSizeChange($event)"
        class="px-2 py-1 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition">
        <option [ngValue]="10">10</option>
        <option [ngValue]="20">20</option>
        <option [ngValue]="50">50</option>
      </select>
      <button (click)="goToPage(0)" [disabled]="pageIndex === 0"
        class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
        title="First page">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </button>
      <button (click)="goToPage(pageIndex - 1)" [disabled]="pageIndex === 0"
        class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
        title="Previous page">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button (click)="goToPage(pageIndex + 1)" [disabled]="pageIndex >= Math.ceil(totalCount / pageSize) - 1"
        class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
        title="Next page">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button (click)="goToPage(Math.ceil(totalCount / pageSize) - 1)"
        [disabled]="pageIndex >= Math.ceil(totalCount / pageSize) - 1"
        class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
        title="Last page">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7m-8-14l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Create / Edit Service Charge Popup                           -->
<!-- ============================================================ -->
<div *ngIf="showPopup" class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" (click)="closePopup()"></div>
<div *ngIf="showPopup" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div
    class="pointer-events-auto w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-xl"
    (click)="$event.stopPropagation()">
    <!-- Popup header -->
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-200 dark:border-surface-700">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">
        {{ isEditing ? 'Edit Service Charge' : 'Create Service Charge' }}
      </h3>
      <button (click)="closePopup()"
        class="p-1.5 rounded-lg text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Error banner -->
    <div *ngIf="formError"
      class="mx-6 mt-4 px-4 py-3 rounded-lg bg-danger-50 dark:bg-danger-900/30 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 text-sm">
      {{ formError }}
    </div>

    <!-- Form grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-5">
      <!-- Sending Agent (optional) -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Sending Agent
          (optional)</label>
        <select [(ngModel)]="form.agentId"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
          <option *ngFor="let a of sendingAgents" [ngValue]="a.id">{{ a.businessName }}</option>
        </select>
      </div>

      <!-- Payout Agent (required) -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Payout Agent *</label>
        <select [(ngModel)]="form.payoutAgentId" required
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
          <option [ngValue]="null" disabled>Select payout agent</option>
          <option *ngFor="let a of payoutAgents" [ngValue]="a.id">{{ a.businessName }}</option>
        </select>
      </div>

      <!-- Source Country -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Source Country</label>
        <select [(ngModel)]="form.sourceCountry"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">

          <option *ngFor="let c of countries" [ngValue]="c.name">{{ c.name }}</option>
        </select>
      </div>

      <!-- Destination Country -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Destination Country</label>
        <select [(ngModel)]="form.destinationCountry"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">

          <option *ngFor="let c of countries" [ngValue]="c.name">{{ c.name }}</option>
        </select>
      </div>

      <!-- Payment Method -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Payment Method</label>
        <select [(ngModel)]="form.paymentMethod"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">

          <option *ngFor="let pm of paymentMethods" [ngValue]="pm.name">{{ pm.name }}</option>
        </select>
      </div>

      <!-- Source Currency -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Source Currency</label>
        <select [(ngModel)]="form.sourceCurrency"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">

          <option *ngFor="let c of currencies" [ngValue]="c">{{ c }}</option>
        </select>
      </div>

      <!-- Destination Currency -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Destination
          Currency</label>
        <select [(ngModel)]="form.destinationCurrency"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">

          <option *ngFor="let c of currencies" [ngValue]="c">{{ c }}</option>
        </select>
      </div>

      <!-- Min Amount -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Min Amount</label>
        <input type="number" [(ngModel)]="form.minAmount"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>

      <!-- Max Amount -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Max Amount</label>
        <input type="number" [(ngModel)]="form.maxAmount"
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>

      <!-- Service Charge Type -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Service Charge Type
          *</label>
        <select [(ngModel)]="form.commissionType" required
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
          <option value="Percentage">Percentage</option>
          <option value="Flat">Flat Fee</option>
        </select>
      </div>

      <!-- Service Charge Percent (only when type is Percentage) -->
      <div *ngIf="form.commissionType === 'Percentage'">
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Service Charge Percent
          *</label>
        <input type="number" [(ngModel)]="form.commissionPercent" required
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>

      <!-- Flat Fee (only when type is Flat) -->
      <div *ngIf="form.commissionType === 'Flat'">
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Flat Fee *</label>
        <input type="number" [(ngModel)]="form.flatFee" required
          class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>

      <!-- IsActive toggle -->
      <div class="flex items-center gap-3 sm:col-span-2 pt-1">
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" [(ngModel)]="form.isActive" class="sr-only peer" />
          <div
            class="w-10 h-6 bg-surface-300 dark:bg-surface-600 peer-focus:ring-2 peer-focus:ring-brand-500 rounded-full peer peer-checked:bg-brand-600 transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-4">
          </div>
          <span class="ml-2 text-sm font-medium text-surface-700 dark:text-surface-300">Active</span>
        </label>
      </div>
    </div>

    <!-- Popup actions -->
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-200 dark:border-surface-700">
      <button (click)="closePopup()"
        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-600 transition text-sm font-medium">
        Cancel
      </button>
      <button (click)="saveCommission()" [disabled]="saving"
        class="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition text-sm font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
        <svg *ngIf="saving" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        <svg *ngIf="!saving" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        {{ isEditing ? 'Update' : 'Create' }}
      </button>
    </div>
  </div>
</div>`, styles: ["/* src/app/pages/admin/commissions/commissions.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=commissions.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: ExportService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommissionsComponent, { className: "CommissionsComponent", filePath: "src/app/pages/admin/commissions/commissions.component.ts", lineNumber: 61 });
})();
export {
  CommissionsComponent
};
//# sourceMappingURL=chunk-SZXRMHSQ.js.map
