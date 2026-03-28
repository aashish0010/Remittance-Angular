import {
  ExportService
} from "./chunk-DU4FVJ3R.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XQC2OG7J.js";

// src/app/pages/admin/exchange-rates/exchange-rates.component.ts
function ExchangeRatesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "circle", 15)(3, "path", 16);
    \u0275\u0275elementEnd()();
  }
}
function ExchangeRatesComponent_div_17_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 42)(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 44)(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 46);
    \u0275\u0275element(7, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "td", 48);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 49);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 50);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 44)(19, "span", 51);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 44)(22, "div", 33)(23, "button", 52);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_17_tr_25_Template_button_click_23_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(r_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 53);
    \u0275\u0275element(25, "path", 54)(26, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "button", 52);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_17_tr_25_Template_button_click_28_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditPopup(r_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 53);
    \u0275\u0275element(30, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "button", 57);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_17_tr_25_Template_button_click_32_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteRate(r_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 53);
    \u0275\u0275element(34, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.agentName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r4.sourceCurrency, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r4.destinationCurrency, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, r_r4.rate, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 11, r_r4.margin, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 14, r_r4.rate - (r_r4.margin || 0), "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", r_r4.isActive ? "bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-400" : "bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4.isActive ? "Active" : "Inactive", " ");
  }
}
function ExchangeRatesComponent_div_17_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, " No exchange rates found. ");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 19);
    \u0275\u0275element(3, "circle", 20)(4, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_17_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExchangeRatesComponent_div_17_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "table", 24)(8, "thead")(9, "tr", 25)(10, "th", 26);
    \u0275\u0275text(11, "Payout Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 26);
    \u0275\u0275text(13, "Corridor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 26);
    \u0275\u0275text(17, "Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 26);
    \u0275\u0275text(19, "Customer Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 26);
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 26);
    \u0275\u0275text(23, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, ExchangeRatesComponent_div_17_tr_25_Template, 36, 17, "tr", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, ExchangeRatesComponent_div_17_div_26_Template, 2, 0, "div", 28);
    \u0275\u0275elementStart(27, "div", 29)(28, "span", 30);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 2)(31, "label", 30);
    \u0275\u0275text(32, "Rows:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 31);
    \u0275\u0275listener("ngModelChange", function ExchangeRatesComponent_div_17_Template_select_ngModelChange_33_listener($event) {
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
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 33)(41, "button", 34);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_17_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(0));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 4);
    \u0275\u0275element(43, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "button", 36);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_17_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pageIndex - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 4);
    \u0275\u0275element(46, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "button", 38);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_17_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pageIndex + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(48, "svg", 4);
    \u0275\u0275element(49, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "button", 40);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_17_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 4);
    \u0275\u0275element(52, "path", 41);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.rates);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.rates.length && !ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r1.totalCount, " total \xB7 Page ", ctx_r1.pageIndex + 1, " of ", ctx_r1.totalPages || 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
  }
}
function ExchangeRatesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "h3", 63);
    \u0275\u0275text(3, "Exchange Rate Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 64);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 65);
    \u0275\u0275element(6, "path", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 67)(8, "div", 68)(9, "span", 69);
    \u0275\u0275text(10, "Payout Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 70);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 68)(14, "span", 69);
    \u0275\u0275text(15, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 70);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 68)(19, "span", 69);
    \u0275\u0275text(20, "Source Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 70);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 68)(24, "span", 69);
    \u0275\u0275text(25, "Destination Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 70);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 68)(29, "span", 69);
    \u0275\u0275text(30, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 71);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 68)(35, "span", 69);
    \u0275\u0275text(36, "Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 70);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 72)(41, "span", 69);
    \u0275\u0275text(42, "Customer Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 73);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 72)(47, "span", 69);
    \u0275\u0275text(48, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 51);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.detailRate.agentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailRate.country || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailRate.sourceCurrency);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailRate.destinationCurrency);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 9, ctx_r1.detailRate.rate, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 12, ctx_r1.detailRate.margin, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 15, ctx_r1.detailRate.rate - (ctx_r1.detailRate.margin || 0), "1.4-4"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.detailRate.isActive ? "bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-400" : "bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailRate.isActive ? "Active" : "Inactive", " ");
  }
}
function ExchangeRatesComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_div_21_div_7_Template(rf, ctx) {
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
function ExchangeRatesComponent_div_21_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r9.businessName);
  }
}
function ExchangeRatesComponent_div_21_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275property("value", c_r10.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r10.name);
  }
}
function ExchangeRatesComponent_div_21_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("value", c_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r11);
  }
}
function ExchangeRatesComponent_div_21_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275property("value", c_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r12);
  }
}
function ExchangeRatesComponent_div_21__svg_svg_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 92);
    \u0275\u0275element(1, "circle", 15)(2, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_div_21__svg_svg_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 93);
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 62)(2, "h3", 63);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 64);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 65);
    \u0275\u0275element(6, "path", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, ExchangeRatesComponent_div_21_div_7_Template, 2, 1, "div", 75);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 76)(9, "div", 77)(10, "label", 78);
    \u0275\u0275text(11, "Payout Agent *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 79);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.agentId, $event) || (ctx_r1.form.agentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 80);
    \u0275\u0275text(14, "Select agent");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ExchangeRatesComponent_div_21_option_15_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 77)(17, "label", 78);
    \u0275\u0275text(18, "Payout Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 79);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.country, $event) || (ctx_r1.form.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExchangeRatesComponent_div_21_Template_select_ngModelChange_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCountryChange());
    });
    \u0275\u0275elementStart(20, "option", 82);
    \u0275\u0275text(21, "-- Select Country --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ExchangeRatesComponent_div_21_option_22_Template, 2, 2, "option", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 78);
    \u0275\u0275text(25, "Source Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 79);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCurrency, $event) || (ctx_r1.form.sourceCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 84);
    \u0275\u0275text(28, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ExchangeRatesComponent_div_21_option_29_Template, 2, 2, "option", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "label", 78);
    \u0275\u0275text(32, "Destination Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 79);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCurrency, $event) || (ctx_r1.form.destinationCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(34, "option", 84);
    \u0275\u0275text(35, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ExchangeRatesComponent_div_21_option_36_Template, 2, 2, "option", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "label", 78);
    \u0275\u0275text(39, "Rate *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.rate, $event) || (ctx_r1.form.rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "label", 78);
    \u0275\u0275text(43, "Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.margin, $event) || (ctx_r1.form.margin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 86)(46, "button", 3);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_21_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275text(47, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 87);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_21_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRate());
    });
    \u0275\u0275template(49, ExchangeRatesComponent_div_21__svg_svg_49_Template, 3, 0, "svg", 88)(50, ExchangeRatesComponent_div_21__svg_svg_50_Template, 2, 0, "svg", 89);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Exchange Rate" : "Add New Exchange Rate");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.agentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.agents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.country);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sourceCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destinationCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.rate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.margin);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Save Changes" : "Add Rate", " ");
  }
}
function emptyForm() {
  return {
    agentId: null,
    country: "",
    sourceCurrency: "",
    destinationCurrency: "",
    rate: 0,
    margin: 0
  };
}
var ExchangeRatesComponent = class _ExchangeRatesComponent {
  get totalPages() {
    return Math.ceil(this.totalCount / this.pageSize) || 1;
  }
  constructor(api, exportService, auth, notify) {
    this.api = api;
    this.exportService = exportService;
    this.auth = auth;
    this.notify = notify;
    this.rates = [];
    this.agents = [];
    this.countries = [];
    this.currencies = [];
    this.searchString = "";
    this.loading = true;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchSubject = new Subject();
    this.destroy$ = new Subject();
    this.showDetail = false;
    this.detailRate = null;
    this.showFormPopup = false;
    this.isEditing = false;
    this.editingId = 0;
    this.saving = false;
    this.formError = "";
    this.form = emptyForm();
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadAgents();
    this.loadCountries();
    this.loadCurrencies();
    this.searchSubject.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(() => {
      this.pageIndex = 0;
      this.loadRates();
    });
    this.loadRates();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadRates() {
    this.loading = true;
    this.api.getRatesPaged({
      page: this.pageIndex + 1,
      pageSize: this.pageSize,
      search: this.searchString
    }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.rates = res.data.items ?? [];
          this.totalCount = res.data.totalCount ?? 0;
        } else {
          this.rates = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load rates.");
        }
        this.loading = false;
      },
      error: () => {
        this.rates = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  loadAgents() {
    this.api.getAgents().subscribe((res) => {
      if (res?.success && res.data) {
        this.agents = res.data.filter((a) => a.agentType === "PayoutAgent");
      }
    });
  }
  loadCountries() {
    this.api.getCountries().subscribe((r) => {
      if (r?.success && r.data)
        this.countries = r.data;
    });
  }
  loadCurrencies() {
    this.api.getCurrencies().subscribe((res) => {
      if (res?.success && res.data) {
        this.currencies = res.data;
      }
    });
  }
  onSearchChange() {
    this.searchSubject.next(this.searchString);
  }
  // Pagination helpers
  goToPage(index) {
    if (index < 0 || index >= this.totalPages)
      return;
    this.pageIndex = index;
    this.loadRates();
  }
  onPageSizeChange(newSize) {
    this.pageSize = +newSize;
    this.pageIndex = 0;
    this.loadRates();
  }
  exportData(format) {
    this.exportService.export("api/admin/rates/export", { search: this.searchString }, format);
  }
  // ---------------------------------------------------------------------------
  // Detail
  // ---------------------------------------------------------------------------
  viewDetail(rate) {
    this.detailRate = rate;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
  }
  // ---------------------------------------------------------------------------
  // Create / Edit
  // ---------------------------------------------------------------------------
  onCountryChange() {
    const country = this.countries.find((c) => c.name === this.form.country);
    if (country?.currency) {
      this.form.destinationCurrency = country.currency;
    }
  }
  openCreatePopup() {
    this.form = emptyForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = "";
    this.showFormPopup = true;
  }
  openEditPopup(rate) {
    this.isEditing = true;
    this.editingId = rate.id;
    this.form = {
      agentId: rate.agentId,
      country: rate.country || "",
      sourceCurrency: rate.sourceCurrency,
      destinationCurrency: rate.destinationCurrency,
      rate: rate.rate,
      margin: rate.margin || 0
    };
    this.formError = "";
    this.showFormPopup = true;
  }
  closeFormPopup() {
    this.showFormPopup = false;
  }
  saveRate() {
    this.formError = "";
    const f = this.form;
    if (!f.agentId) {
      this.formError = "Please select a payout agent.";
      return;
    }
    if (!f.sourceCurrency || !f.destinationCurrency) {
      this.formError = "Source and Destination currencies are required.";
      return;
    }
    if (f.rate <= 0) {
      this.formError = "Rate must be greater than zero.";
      return;
    }
    this.saving = true;
    const dto = {
      agentId: f.agentId,
      country: f.country || null,
      sourceCurrency: f.sourceCurrency,
      destinationCurrency: f.destinationCurrency,
      rate: f.rate,
      margin: f.margin || 0
    };
    const obs = this.isEditing ? this.api.updateRate(this.editingId, dto) : this.api.createRate(dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.isEditing ? "Exchange rate updated." : "Exchange rate created.");
          this.showFormPopup = false;
          this.loadRates();
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
  deleteRate(rate) {
    this.api.deleteRate(rate.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Exchange rate deleted.");
        this.loadRates();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function ExchangeRatesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExchangeRatesComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExchangeRatesComponent, selectors: [["app-exchange-rates"]], decls: 22, vars: 6, consts: [[1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-700", "dark:text-surface-200", "hover:bg-surface-50", "dark:hover:bg-surface-600", "transition", "text-sm", "font-medium", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "text-white", "transition", "text-sm", "font-medium", "shadow-sm", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "relative", "mb-5"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["cx", "11", "cy", "11", "r", "8"], ["stroke-linecap", "round", "d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search rates...", 1, "w-full", "pl-9", "pr-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "border-b", "border-surface-200", "dark:border-surface-700", "text-surface-500", "dark:text-surface-400", "text-xs", "tracking-wide"], [1, "px-4", "py-3", "font-semibold"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], ["class", "text-center py-10 text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "mt-5", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "px-2", "py-1", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "text-xs", "outline-none", "focus:ring-2", "focus:ring-brand-500", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "flex", "items-center", "gap-1"], ["title", "First page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 19l-7-7 7-7m8 14l-7-7 7-7"], ["title", "Previous page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], ["title", "Next page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5l7 7-7 7"], ["title", "Last page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 5l7 7-7 7M5 5l7 7-7 7"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100", "font-medium"], [1, "px-4", "py-3"], [1, "inline-flex", "items-center", "gap-1.5", "text-surface-800", "dark:text-surface-200", "font-medium"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 7l5 5-5 5M6 12h12"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100", "font-semibold"], [1, "px-4", "py-3", "text-surface-700", "dark:text-surface-300"], [1, "px-4", "py-3", "text-brand-600", "dark:text-brand-400", "font-semibold"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-brand-600", "dark:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-danger-600", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-center", "py-10", "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "fixed", "inset-0", "z-40", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "z-50", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "w-full", "max-w-md", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "p-1.5", "rounded-lg", "text-surface-400", "hover:text-surface-600", "dark:hover:text-surface-200", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "grid", "grid-cols-2", "gap-4"], [1, "space-y-1"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400"], [1, "block", "text-sm", "text-surface-900", "dark:text-surface-100"], [1, "block", "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "space-y-1", "col-span-2"], [1, "block", "text-sm", "font-semibold", "text-brand-600", "dark:text-brand-400"], [1, "fixed", "z-50", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "w-full", "max-w-lg", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], ["class", "mb-4 px-4 py-3 rounded-lg bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 text-sm", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "sm:col-span-2"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], [1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "", "disabled", ""], ["type", "number", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "mt-6", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "text-white", "transition", "text-sm", "font-medium", "shadow-sm", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["class", "animate-spin h-4 w-4", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "mb-4", "px-4", "py-3", "rounded-lg", "bg-danger-50", "dark:bg-danger-900/20", "border", "border-danger-200", "dark:border-danger-800", "text-danger-700", "dark:text-danger-400", "text-sm"], [3, "ngValue"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"]], template: function ExchangeRatesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Exchange Rate Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function ExchangeRatesComponent_Template_button_click_4_listener() {
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
        \u0275\u0275listener("click", function ExchangeRatesComponent_Template_button_click_8_listener() {
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
        \u0275\u0275listener("click", function ExchangeRatesComponent_Template_button_click_12_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 4);
        \u0275\u0275element(14, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Add Rate ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, ExchangeRatesComponent_div_16_Template, 4, 0, "div", 8)(17, ExchangeRatesComponent_div_17_Template, 53, 14, "div", 9)(18, ExchangeRatesComponent_div_18_Template, 1, 0, "div", 10)(19, ExchangeRatesComponent_div_19_Template, 51, 18, "div", 11)(20, ExchangeRatesComponent_div_20_Template, 1, 0, "div", 10)(21, ExchangeRatesComponent_div_21_Template, 52, 17, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailRate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailRate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=exchange-rates.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExchangeRatesComponent, [{
    type: Component,
    args: [{ selector: "app-exchange-rates", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DecimalPipe
    ], template: `<!-- Page Header -->
<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
  <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100">Exchange Rate Management</h2>
  <div class="flex items-center gap-2">
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
    <button (click)="openCreatePopup()"
      class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition text-sm font-medium shadow-sm">
      <!-- plus icon -->
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      Add Rate
    </button>
  </div>
</div>

<!-- Loading -->
<div *ngIf="loading" class="flex items-center justify-center py-20">
  <svg class="animate-spin h-10 w-10 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
  </svg>
</div>

<!-- Search + Table -->
<div *ngIf="!loading"
  class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">

  <!-- Search -->
  <div class="relative mb-5">
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor"
      stroke-width="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path stroke-linecap="round" d="m21 21-4.35-4.35" />
    </svg>
    <input type="text" placeholder="Search rates..." [(ngModel)]="searchString" (ngModelChange)="onSearchChange()"
      class="w-full pl-9 pr-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
  </div>

  <!-- Table -->
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left">
      <thead>
        <tr
          class="border-b border-surface-200 dark:border-surface-700 text-surface-500 dark:text-surface-400 text-xs tracking-wide">
          <th class="px-4 py-3 font-semibold">Payout Agent</th>
          <th class="px-4 py-3 font-semibold">Corridor</th>
          <th class="px-4 py-3 font-semibold">Rate</th>
          <th class="px-4 py-3 font-semibold">Margin</th>
          <th class="px-4 py-3 font-semibold">Customer Rate</th>
          <th class="px-4 py-3 font-semibold">Status</th>
          <th class="px-4 py-3 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let r of rates"
          class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100 font-medium">{{ r.agentName }}</td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center gap-1.5 text-surface-800 dark:text-surface-200 font-medium">
              {{ r.sourceCurrency }}
              <svg class="w-3.5 h-3.5 text-surface-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
              {{ r.destinationCurrency }}
            </span>
          </td>
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100 font-semibold">{{ r.rate | number:'1.2-2' }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ r.margin | number:'1.2-2' }}</td>
          <td class="px-4 py-3 text-brand-600 dark:text-brand-400 font-semibold">{{ r.rate - (r.margin || 0) | number:'1.2-2' }}</td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" [ngClass]="r.isActive
                ? 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-400'
                : 'bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400'">
              {{ r.isActive ? 'Active' : 'Inactive' }}
            </span>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-1">
              <button (click)="viewDetail(r)"
                class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View
              </button>
              <button (click)="openEditPopup(r)"
                class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit
              </button>
              <button (click)="deleteRate(r)"
                class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Empty state -->
  <div *ngIf="!rates.length && !loading" class="text-center py-10 text-surface-400 dark:text-surface-500 text-sm">
    No exchange rates found.
  </div>

  <!-- Pagination -->
  <div
    class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-5 pt-4 border-t border-surface-200 dark:border-surface-700">
    <span class="text-xs text-surface-500 dark:text-surface-400">
      {{ totalCount }} total &middot; Page {{ pageIndex + 1 }} of {{ totalPages || 1 }}
    </span>
    <div class="flex items-center gap-2">
      <label class="text-xs text-surface-500 dark:text-surface-400">Rows:</label>
      <select [ngModel]="pageSize" (ngModelChange)="onPageSizeChange($event)"
        class="px-2 py-1 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 text-xs outline-none focus:ring-2 focus:ring-brand-500">
        <option [value]="10">10</option>
        <option [value]="20">20</option>
        <option [value]="50">50</option>
      </select>
      <div class="flex items-center gap-1">
        <button (click)="goToPage(0)" [disabled]="pageIndex === 0" title="First page"
          class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
        <button (click)="goToPage(pageIndex - 1)" [disabled]="pageIndex === 0" title="Previous page"
          class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button (click)="goToPage(pageIndex + 1)" [disabled]="pageIndex >= totalPages - 1" title="Next page"
          class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button (click)="goToPage(totalPages - 1)" [disabled]="pageIndex >= totalPages - 1" title="Last page"
          class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Detail Popup -->
<div *ngIf="showDetail && detailRate" class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" (click)="closeDetail()">
</div>
<div *ngIf="showDetail && detailRate"
  class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
  <div class="flex items-center justify-between mb-5">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Exchange Rate Details</h3>
    <button (click)="closeDetail()"
      class="p-1.5 rounded-lg text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="space-y-1">
      <span class="block text-xs font-medium text-surface-500 dark:text-surface-400">Payout Agent</span>
      <span class="block text-sm text-surface-900 dark:text-surface-100">{{ detailRate.agentName }}</span>
    </div>
    <div class="space-y-1">
      <span class="block text-xs font-medium text-surface-500 dark:text-surface-400">Country</span>
      <span class="block text-sm text-surface-900 dark:text-surface-100">{{ detailRate.country || '-' }}</span>
    </div>
    <div class="space-y-1">
      <span class="block text-xs font-medium text-surface-500 dark:text-surface-400">Source Currency</span>
      <span class="block text-sm text-surface-900 dark:text-surface-100">{{ detailRate.sourceCurrency }}</span>
    </div>
    <div class="space-y-1">
      <span class="block text-xs font-medium text-surface-500 dark:text-surface-400">Destination Currency</span>
      <span class="block text-sm text-surface-900 dark:text-surface-100">{{ detailRate.destinationCurrency }}</span>
    </div>
    <div class="space-y-1">
      <span class="block text-xs font-medium text-surface-500 dark:text-surface-400">Rate</span>
      <span class="block text-sm font-semibold text-surface-900 dark:text-surface-100">{{ detailRate.rate |
        number:'1.4-4' }}</span>
    </div>
    <div class="space-y-1">
      <span class="block text-xs font-medium text-surface-500 dark:text-surface-400">Margin</span>
      <span class="block text-sm text-surface-900 dark:text-surface-100">{{ detailRate.margin | number:'1.2-2' }}</span>
    </div>
    <div class="space-y-1 col-span-2">
      <span class="block text-xs font-medium text-surface-500 dark:text-surface-400">Customer Rate</span>
      <span class="block text-sm font-semibold text-brand-600 dark:text-brand-400">{{ detailRate.rate - (detailRate.margin || 0) | number:'1.4-4' }}</span>
    </div>
    <div class="space-y-1 col-span-2">
      <span class="block text-xs font-medium text-surface-500 dark:text-surface-400">Status</span>
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" [ngClass]="detailRate.isActive
          ? 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-400'
          : 'bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400'">
        {{ detailRate.isActive ? 'Active' : 'Inactive' }}
      </span>
    </div>
  </div>
</div>

<!-- Create / Edit Rate Popup -->
<div *ngIf="showFormPopup" class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" (click)="closeFormPopup()"></div>
<div *ngIf="showFormPopup"
  class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
  <div class="flex items-center justify-between mb-5">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">{{ isEditing ? 'Edit Exchange Rate' : 'Add
      New Exchange Rate' }}</h3>
    <button (click)="closeFormPopup()"
      class="p-1.5 rounded-lg text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <!-- Error banner -->
  <div *ngIf="formError"
    class="mb-4 px-4 py-3 rounded-lg bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 text-sm">
    {{ formError }}
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <!-- Payout Agent -->
    <div class="sm:col-span-2">
      <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Payout Agent *</label>
      <select [(ngModel)]="form.agentId"
        class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
        <option [ngValue]="null" disabled>Select agent</option>
        <option *ngFor="let a of agents" [ngValue]="a.id">{{ a.businessName }}</option>
      </select>
    </div>

    <!-- Payout Country -->
    <div class="sm:col-span-2">
      <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Payout Country</label>
      <select [(ngModel)]="form.country" (ngModelChange)="onCountryChange()"
        class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
        <option value="">-- Select Country --</option>
        <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
      </select>
    </div>

    <!-- Source Currency -->
    <div>
      <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Source Currency *</label>
      <select [(ngModel)]="form.sourceCurrency"
        class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
        <option value="" disabled>Select</option>
        <option *ngFor="let c of currencies" [value]="c">{{ c }}</option>
      </select>
    </div>

    <!-- Destination Currency -->
    <div>
      <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Destination Currency
        *</label>
      <select [(ngModel)]="form.destinationCurrency"
        class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
        <option value="" disabled>Select</option>
        <option *ngFor="let c of currencies" [value]="c">{{ c }}</option>
      </select>
    </div>

    <!-- Rate -->
    <div>
      <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Rate *</label>
      <input type="number" [(ngModel)]="form.rate"
        class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
    </div>

    <!-- Margin -->
    <div>
      <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Margin</label>
      <input type="number" [(ngModel)]="form.margin"
        class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
    </div>
  </div>

  <!-- Actions -->
  <div class="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-surface-200 dark:border-surface-700">
    <button (click)="closeFormPopup()"
      class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-600 transition text-sm font-medium">
      Cancel
    </button>
    <button (click)="saveRate()" [disabled]="saving"
      class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition text-sm font-medium shadow-sm disabled:opacity-60 disabled:cursor-not-allowed">
      <!-- spinner -->
      <svg *ngIf="saving" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      <!-- save icon -->
      <svg *ngIf="!saving" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      {{ isEditing ? 'Save Changes' : 'Add Rate' }}
    </button>
  </div>
</div>`, styles: ["/* src/app/pages/admin/exchange-rates/exchange-rates.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=exchange-rates.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: ExportService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExchangeRatesComponent, { className: "ExchangeRatesComponent", filePath: "src/app/pages/admin/exchange-rates/exchange-rates.component.ts", lineNumber: 39 });
})();
export {
  ExchangeRatesComponent
};
//# sourceMappingURL=chunk-I53CYFTY.js.map
