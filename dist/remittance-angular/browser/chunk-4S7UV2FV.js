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
import "./chunk-MP5DRVCF.js";
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
  ɵɵpureFunction4,
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

// src/app/pages/admin/sanctions/sanctions.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "bg-slate-800 text-white dark:bg-slate-300 dark:text-slate-900": a0, "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400": a1, "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400": a2, "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400": a3 });
var _c1 = (a0, a1, a2, a3) => ({ "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400": a0, "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400": a1, "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400": a2, "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400": a3 });
function SanctionsComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275element(1, "span", 27)(2, "span", 28);
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_51_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "circle", 47)(3, "path", 48);
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_51_div_16_tr_21__svg_path_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 75);
  }
}
function SanctionsComponent_div_51_div_16_tr_21__svg_path_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 76);
  }
}
function SanctionsComponent_div_51_div_16_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 57)(1, "td", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 59)(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 62);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 61);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 59)(13, "span", 63);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 64);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 65)(19, "div", 66)(20, "button", 67);
    \u0275\u0275listener("click", function SanctionsComponent_div_51_div_16_tr_21_Template_button_click_20_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEntryForm(row_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 40);
    \u0275\u0275element(22, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 69);
    \u0275\u0275listener("click", function SanctionsComponent_div_51_div_16_tr_21_Template_button_click_23_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleEntry(row_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 70);
    \u0275\u0275template(25, SanctionsComponent_div_51_div_16_tr_21__svg_path_25_Template, 1, 0, "path", 71)(26, SanctionsComponent_div_51_div_16_tr_21__svg_path_26_Template, 1, 0, "path", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 73);
    \u0275\u0275listener("click", function SanctionsComponent_div_51_div_16_tr_21_Template_button_click_27_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteEntry(row_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 40);
    \u0275\u0275element(29, "path", 74);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.entryType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.listSource);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.aliases || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.nationality || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r4.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 12, row_r4.createdAt, "mediumDate"));
    \u0275\u0275advance(7);
    \u0275\u0275property("title", row_r4.isActive ? "Deactivate" : "Activate")("ngClass", row_r4.isActive ? "text-green-600 dark:text-green-400" : "text-surface-400");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r4.isActive);
  }
}
function SanctionsComponent_div_51_div_16_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, "No sanction entries found");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_51_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "table", 50)(2, "thead", 51)(3, "tr", 52)(4, "th", 53);
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 53);
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 53);
    \u0275\u0275text(9, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 53);
    \u0275\u0275text(11, "Aliases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 53);
    \u0275\u0275text(13, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 53);
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 53);
    \u0275\u0275text(17, "Added");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 54);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, SanctionsComponent_div_51_div_16_tr_21_Template, 30, 15, "tr", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, SanctionsComponent_div_51_div_16_div_22_Template, 2, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.entries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entries.length === 0);
  }
}
function SanctionsComponent_div_51_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "button", 80);
    \u0275\u0275listener("click", function SanctionsComponent_div_51_div_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEntriesPage({ pageIndex: 0, pageSize: ctx_r1.entriesPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 37);
    \u0275\u0275element(6, "path", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 80);
    \u0275\u0275listener("click", function SanctionsComponent_div_51_div_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEntriesPage({ pageIndex: ctx_r1.entriesPage - 2, pageSize: ctx_r1.entriesPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 37);
    \u0275\u0275element(9, "path", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 83);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 80);
    \u0275\u0275listener("click", function SanctionsComponent_div_51_div_17_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEntriesPage({ pageIndex: ctx_r1.entriesPage, pageSize: ctx_r1.entriesPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 37);
    \u0275\u0275element(14, "path", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 80);
    \u0275\u0275listener("click", function SanctionsComponent_div_51_div_17_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEntriesPage({ pageIndex: ctx_r1.entriesTotalPages - 1, pageSize: ctx_r1.entriesPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 37);
    \u0275\u0275element(17, "path", 85);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Showing ", (ctx_r1.entriesPage - 1) * ctx_r1.entriesPageSize + 1, "\u2013", (ctx_r1.entriesPage - 1) * ctx_r1.entriesPageSize + ctx_r1.entries.length, " of ", ctx_r1.entriesTotalCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.entriesPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.entriesPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.entriesPage, " of ", ctx_r1.entriesTotalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.entriesPage >= ctx_r1.entriesTotalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.entriesPage >= ctx_r1.entriesTotalPages);
  }
}
function SanctionsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 32);
    \u0275\u0275element(4, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_51_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.entriesSearch, $event) || (ctx_r1.entriesSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SanctionsComponent_div_51_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEntriesSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35)(7, "button", 36);
    \u0275\u0275listener("click", function SanctionsComponent_div_51_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportEntries("excel"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 37);
    \u0275\u0275element(9, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Export ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "button", 39);
    \u0275\u0275listener("click", function SanctionsComponent_div_51_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEntryForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 40);
    \u0275\u0275element(13, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Add Entry ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, SanctionsComponent_div_51_div_15_Template, 4, 0, "div", 42)(16, SanctionsComponent_div_51_div_16_Template, 23, 2, "div", 43)(17, SanctionsComponent_div_51_div_17_Template, 18, 9, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.entriesSearch);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.loadingEntries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingEntries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingEntries && ctx_r1.entries.length > 0);
  }
}
function SanctionsComponent_div_52_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "circle", 47)(3, "path", 48);
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_52_div_8_tr_21__svg_path_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 75);
  }
}
function SanctionsComponent_div_52_div_8_tr_21__svg_path_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 76);
  }
}
function SanctionsComponent_div_52_div_8_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 57)(1, "td", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 59)(6, "span", 91);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 59)(9, "span", 92);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 61);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 59)(14, "span", 63);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 64);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 65)(20, "div", 66)(21, "button", 67);
    \u0275\u0275listener("click", function SanctionsComponent_div_52_div_8_tr_21_Template_button_click_21_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCountryForm(row_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 40);
    \u0275\u0275element(23, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 69);
    \u0275\u0275listener("click", function SanctionsComponent_div_52_div_8_tr_21_Template_button_click_24_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleCountry(row_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 70);
    \u0275\u0275template(26, SanctionsComponent_div_52_div_8_tr_21__svg_path_26_Template, 1, 0, "path", 71)(27, SanctionsComponent_div_52_div_8_tr_21__svg_path_27_Template, 1, 0, "path", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "button", 73);
    \u0275\u0275listener("click", function SanctionsComponent_div_52_div_8_tr_21_Template_button_click_28_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteCountry(row_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 40);
    \u0275\u0275element(30, "path", 74);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.countryCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.countryName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r8.sanctionType === "Full" ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50" : "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r8.sanctionType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.getRiskLevelDescription(row_r8.riskLevel))("ngClass", \u0275\u0275pureFunction4(18, _c0, row_r8.riskLevel === "Blocked", row_r8.riskLevel === "High", row_r8.riskLevel === "Medium", row_r8.riskLevel === "Low"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r8.riskLevel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.listSource);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r8.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r8.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 15, row_r8.createdAt, "mediumDate"));
    \u0275\u0275advance(7);
    \u0275\u0275property("title", row_r8.isActive ? "Deactivate" : "Activate")("ngClass", row_r8.isActive ? "text-green-600 dark:text-green-400" : "text-surface-400");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r8.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r8.isActive);
  }
}
function SanctionsComponent_div_52_div_8_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, "No sanctioned countries configured");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_52_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "table", 50)(2, "thead", 51)(3, "tr", 52)(4, "th", 88);
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 53);
    \u0275\u0275text(7, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 53);
    \u0275\u0275text(9, "Sanction Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 53);
    \u0275\u0275text(11, "Risk Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 53);
    \u0275\u0275text(13, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 53);
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 53);
    \u0275\u0275text(17, "Added");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 54);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, SanctionsComponent_div_52_div_8_tr_21_Template, 31, 23, "tr", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, SanctionsComponent_div_52_div_8_div_22_Template, 2, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.countries.length === 0);
  }
}
function SanctionsComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 86);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementStart(3, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_52_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCountryForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 40);
    \u0275\u0275element(5, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Add Country ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SanctionsComponent_div_52_div_7_Template, 4, 0, "div", 42)(8, SanctionsComponent_div_52_div_8_Template, 23, 2, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.loadingCountries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingCountries);
  }
}
function SanctionsComponent_div_53_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "circle", 47)(3, "path", 48);
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_53_div_7_tr_21_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", row_r10.matchScore >= 0.8 ? "text-red-600 dark:text-red-400" : "text-surface-700 dark:text-surface-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getScorePercent(row_r10.matchScore), " ");
  }
}
function SanctionsComponent_div_53_div_7_tr_21_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_53_div_7_tr_21_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 105);
    \u0275\u0275listener("click", function SanctionsComponent_div_53_div_7_tr_21_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const row_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openReviewForm(row_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "path", 106);
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_53_div_7_tr_21_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 108);
    \u0275\u0275element(2, "path", 109)(3, "path", 110);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", "Reviewed by " + row_r10.reviewedBy + (row_r10.reviewNotes ? ": " + row_r10.reviewNotes : ""));
  }
}
function SanctionsComponent_div_53_div_7_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 95)(1, "td", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 59)(4, "span", 96);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 59)(7, "span", 97);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 61);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 59);
    \u0275\u0275template(12, SanctionsComponent_div_53_div_7_tr_21_span_12_Template, 2, 2, "span", 98)(13, SanctionsComponent_div_53_div_7_tr_21_span_13_Template, 2, 0, "span", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 100);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 64);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 65)(20, "div", 66);
    \u0275\u0275template(21, SanctionsComponent_div_53_div_7_tr_21_button_21_Template, 3, 0, "button", 101)(22, SanctionsComponent_div_53_div_7_tr_21_span_22_Template, 4, 1, "span", 102);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275property("ngClass", row_r10.status === "PotentialMatch" || row_r10.status === "ConfirmedMatch" ? "bg-amber-50/50 dark:bg-amber-900/10" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.screenedName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r10.screenedType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(15, _c1, row_r10.status === "Clear", row_r10.status === "PotentialMatch", row_r10.status === "ConfirmedMatch", row_r10.status === "FalsePositive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r10.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.matchedName || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r10.matchScore);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r10.matchScore);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.transactionId || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 12, row_r10.createdAt, "short"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r10.status === "PotentialMatch" && !row_r10.reviewedBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r10.reviewedBy);
  }
}
function SanctionsComponent_div_53_div_7_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, "No screening results yet");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_53_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "table", 50)(2, "thead", 51)(3, "tr", 52)(4, "th", 53);
    \u0275\u0275text(5, "Screened Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 53);
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 53);
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 53);
    \u0275\u0275text(11, "Matched Against");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 53);
    \u0275\u0275text(13, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 53);
    \u0275\u0275text(15, "Transaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 53);
    \u0275\u0275text(17, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 54);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, SanctionsComponent_div_53_div_7_tr_21_Template, 23, 20, "tr", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, SanctionsComponent_div_53_div_7_div_22_Template, 2, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.screenings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.screenings.length === 0);
  }
}
function SanctionsComponent_div_53_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "button", 80);
    \u0275\u0275listener("click", function SanctionsComponent_div_53_div_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onScreeningsPage({ pageIndex: 0, pageSize: ctx_r1.screeningsPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 37);
    \u0275\u0275element(6, "path", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 80);
    \u0275\u0275listener("click", function SanctionsComponent_div_53_div_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onScreeningsPage({ pageIndex: ctx_r1.screeningsPage - 2, pageSize: ctx_r1.screeningsPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 37);
    \u0275\u0275element(9, "path", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 83);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 80);
    \u0275\u0275listener("click", function SanctionsComponent_div_53_div_8_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onScreeningsPage({ pageIndex: ctx_r1.screeningsPage, pageSize: ctx_r1.screeningsPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 37);
    \u0275\u0275element(14, "path", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 80);
    \u0275\u0275listener("click", function SanctionsComponent_div_53_div_8_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onScreeningsPage({ pageIndex: ctx_r1.screeningsTotalPages - 1, pageSize: ctx_r1.screeningsPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 37);
    \u0275\u0275element(17, "path", 85);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Showing ", (ctx_r1.screeningsPage - 1) * ctx_r1.screeningsPageSize + 1, "\u2013", (ctx_r1.screeningsPage - 1) * ctx_r1.screeningsPageSize + ctx_r1.screenings.length, " of ", ctx_r1.screeningsTotalCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.screeningsPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.screeningsPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.screeningsPage, " of ", ctx_r1.screeningsTotalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.screeningsPage >= ctx_r1.screeningsTotalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.screeningsPage >= ctx_r1.screeningsTotalPages);
  }
}
function SanctionsComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 86)(2, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 32);
    \u0275\u0275element(4, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_53_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.screeningsSearch, $event) || (ctx_r1.screeningsSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SanctionsComponent_div_53_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onScreeningsSearch());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, SanctionsComponent_div_53_div_6_Template, 4, 0, "div", 42)(7, SanctionsComponent_div_53_div_7_Template, 23, 2, "div", 43)(8, SanctionsComponent_div_53_div_8_Template, 18, 9, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.screeningsSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingScreenings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingScreenings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingScreenings && ctx_r1.screenings.length > 0);
  }
}
function SanctionsComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275listener("click", function SanctionsComponent_div_54_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEntryForm());
    });
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_55_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    \u0275\u0275property("value", t_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r15);
  }
}
function SanctionsComponent_div_55_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    \u0275\u0275property("value", s_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r16);
  }
}
function SanctionsComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 114)(3, "h3", 115);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 116);
    \u0275\u0275listener("click", function SanctionsComponent_div_55_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEntryForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 117);
    \u0275\u0275element(7, "path", 118);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 119)(9, "div", 120)(10, "div", 121)(11, "label", 122);
    \u0275\u0275text(12, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 123);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_55_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.entryForm.name, $event) || (ctx_r1.entryForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "label", 122);
    \u0275\u0275text(16, "Entry Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 124);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_55_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.entryForm.entryType, $event) || (ctx_r1.entryForm.entryType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(18, SanctionsComponent_div_55_option_18_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 122);
    \u0275\u0275text(21, "List Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 124);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_55_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.entryForm.listSource, $event) || (ctx_r1.entryForm.listSource = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(23, SanctionsComponent_div_55_option_23_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 121)(25, "label", 122);
    \u0275\u0275text(26, "Aliases (comma-separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_55_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.entryForm.aliases, $event) || (ctx_r1.entryForm.aliases = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 121)(29, "label", 122);
    \u0275\u0275text(30, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_55_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.entryForm.nationality, $event) || (ctx_r1.entryForm.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 121)(33, "label", 122);
    \u0275\u0275text(34, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "textarea", 128);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_55_Template_textarea_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.entryForm.remarks, $event) || (ctx_r1.entryForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 129)(37, "button", 130);
    \u0275\u0275listener("click", function SanctionsComponent_div_55_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEntryForm());
    });
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 131);
    \u0275\u0275listener("click", function SanctionsComponent_div_55_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEntry());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.editingEntry ? "Edit" : "Add", " Sanction Entry");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.entryForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.entryForm.entryType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.entryTypes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.entryForm.listSource);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.listSources);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.entryForm.aliases);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.entryForm.nationality);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.entryForm.remarks);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.editingEntry ? "Update" : "Create");
  }
}
function SanctionsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275listener("click", function SanctionsComponent_div_56_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCountryForm());
    });
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_57_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275property("value", c_r19.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r19.name);
  }
}
function SanctionsComponent_div_57_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r20 = ctx.$implicit;
    \u0275\u0275property("value", t_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r20);
  }
}
function SanctionsComponent_div_57_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r21 = ctx.$implicit;
    \u0275\u0275property("value", r_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r21);
  }
}
function SanctionsComponent_div_57_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r22 = ctx.$implicit;
    \u0275\u0275property("value", s_r22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r22);
  }
}
function SanctionsComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 114)(3, "h3", 115);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 116);
    \u0275\u0275listener("click", function SanctionsComponent_div_57_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCountryForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 117);
    \u0275\u0275element(7, "path", 118);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 119)(9, "div", 120)(10, "div", 121)(11, "label", 122);
    \u0275\u0275text(12, "Select Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 133);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_57_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.countryForm.countryName, $event) || (ctx_r1.countryForm.countryName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SanctionsComponent_div_57_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCountrySelected($event));
    });
    \u0275\u0275template(14, SanctionsComponent_div_57_option_14_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 122);
    \u0275\u0275text(17, "Sanction Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 124);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_57_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.countryForm.sanctionType, $event) || (ctx_r1.countryForm.sanctionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(19, SanctionsComponent_div_57_option_19_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "label", 122);
    \u0275\u0275text(22, "Risk Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 124);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_57_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.countryForm.riskLevel, $event) || (ctx_r1.countryForm.riskLevel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(24, SanctionsComponent_div_57_option_24_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 121)(26, "label", 122);
    \u0275\u0275text(27, "List Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 124);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_57_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.countryForm.listSource, $event) || (ctx_r1.countryForm.listSource = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(29, SanctionsComponent_div_57_option_29_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 121)(31, "label", 122);
    \u0275\u0275text(32, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "textarea", 128);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_57_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.countryForm.remarks, $event) || (ctx_r1.countryForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 129)(35, "button", 130);
    \u0275\u0275listener("click", function SanctionsComponent_div_57_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCountryForm());
    });
    \u0275\u0275text(36, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 131);
    \u0275\u0275listener("click", function SanctionsComponent_div_57_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCountry());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.editingCountry ? "Edit" : "Add", " Sanctioned Country");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.countryForm.countryName);
    \u0275\u0275property("disabled", !!ctx_r1.editingCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.referenceCountries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.countryForm.sanctionType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sanctionTypes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.countryForm.riskLevel);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.riskLevels);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.countryForm.listSource);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.listSources);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.countryForm.remarks);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.editingCountry ? "Update" : "Add");
  }
}
function SanctionsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275listener("click", function SanctionsComponent_div_58_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReviewForm());
    });
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_59_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "p")(2, "span", 144);
    \u0275\u0275text(3, "Screened:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 145);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p")(8, "span", 144);
    \u0275\u0275text(9, "Matched:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 145);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "span", 144);
    \u0275\u0275text(15, "Score:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 146);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.reviewingScreening.screenedName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.reviewingScreening.screenedType, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.reviewingScreening.matchedName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.reviewingScreening.matchedListSource, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getScorePercent(ctx_r1.reviewingScreening.matchScore));
  }
}
function SanctionsComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 134)(2, "div", 135)(3, "h3", 136);
    \u0275\u0275text(4, "Review Screening Match");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 137);
    \u0275\u0275listener("click", function SanctionsComponent_div_59_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReviewForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 117);
    \u0275\u0275element(7, "path", 118);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 138);
    \u0275\u0275template(9, SanctionsComponent_div_59_div_9_Template, 18, 5, "div", 139);
    \u0275\u0275elementStart(10, "div")(11, "label", 122);
    \u0275\u0275text(12, "Decision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 124);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_59_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reviewForm.status, $event) || (ctx_r1.reviewForm.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 140);
    \u0275\u0275text(15, "Confirmed Match");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 141);
    \u0275\u0275text(17, "False Positive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div")(19, "label", 122);
    \u0275\u0275text(20, "Review Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 142);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_59_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reviewForm.reviewNotes, $event) || (ctx_r1.reviewForm.reviewNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 129)(23, "button", 130);
    \u0275\u0275listener("click", function SanctionsComponent_div_59_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReviewForm());
    });
    \u0275\u0275text(24, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 131);
    \u0275\u0275listener("click", function SanctionsComponent_div_59_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitReview());
    });
    \u0275\u0275text(26, "Submit Review");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.reviewingScreening);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reviewForm.status);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reviewForm.reviewNotes);
  }
}
var SanctionsComponent = class _SanctionsComponent {
  constructor(api, notify) {
    this.api = api;
    this.notify = notify;
    this.destroy$ = new Subject();
    this.dashboard = {};
    this.activeTab = 0;
    this.entries = [];
    this.entriesTotalCount = 0;
    this.entriesPage = 1;
    this.entriesPageSize = 20;
    this.entriesSearch = "";
    this.loadingEntries = false;
    this.countries = [];
    this.loadingCountries = false;
    this.screenings = [];
    this.screeningsTotalCount = 0;
    this.screeningsPage = 1;
    this.screeningsPageSize = 20;
    this.screeningsSearch = "";
    this.loadingScreenings = false;
    this.showEntryForm = false;
    this.editingEntry = null;
    this.entryForm = {
      name: "",
      entryType: "Individual",
      listSource: "Custom",
      aliases: "",
      nationality: "",
      remarks: ""
    };
    this.showCountryForm = false;
    this.editingCountry = null;
    this.countryForm = {
      countryCode: "",
      countryName: "",
      sanctionType: "Full",
      riskLevel: "Blocked",
      listSource: "Custom",
      remarks: ""
    };
    this.showReviewForm = false;
    this.reviewingScreening = null;
    this.reviewForm = {
      status: "FalsePositive",
      reviewNotes: ""
    };
    this.entryTypes = ["Individual", "Organization", "Vessel", "Aircraft"];
    this.listSources = ["OFAC-SDN", "UN", "EU", "Custom"];
    this.sanctionTypes = ["Full", "Partial"];
    this.riskLevels = ["Blocked", "High", "Medium", "Low"];
    this.referenceCountries = [];
    this.entryColumns = ["name", "entryType", "listSource", "aliases", "nationality", "isActive", "createdAt", "actions"];
    this.countryColumns = ["countryCode", "countryName", "sanctionType", "riskLevel", "listSource", "isActive", "createdAt", "actions"];
    this.screeningColumns = ["screenedName", "screenedType", "status", "matchedName", "matchScore", "transactionId", "createdAt", "actions"];
  }
  ngOnInit() {
    this.loadDashboard();
    this.loadEntries();
    this.loadCountries();
    this.loadScreenings();
    this.loadReferenceCountries();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.searchTimer)
      clearTimeout(this.searchTimer);
  }
  // ---- Reference Countries ----
  loadReferenceCountries() {
    this.api.getCountries().pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res?.success && res.data) {
        this.referenceCountries = res.data;
      }
    });
  }
  onCountrySelected(countryName) {
    this.countryForm.countryName = countryName;
    this.countryForm.countryCode = countryName;
  }
  // ---- Dashboard ----
  loadDashboard() {
    this.api.getSanctionsDashboard().pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res?.success)
        this.dashboard = res.data || {};
    });
  }
  // ---- Entries ----
  loadEntries() {
    this.loadingEntries = true;
    this.api.getSanctionEntriesPaged({ page: this.entriesPage, pageSize: this.entriesPageSize, search: this.entriesSearch }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.entries = res.data.items || [];
          this.entriesTotalCount = res.data.totalCount || 0;
        }
        this.loadingEntries = false;
      },
      error: () => this.loadingEntries = false
    });
  }
  onEntriesSearch() {
    if (this.searchTimer)
      clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.entriesPage = 1;
      this.loadEntries();
    }, 400);
  }
  onEntriesPage(event) {
    this.entriesPage = event.pageIndex + 1;
    this.entriesPageSize = event.pageSize;
    this.loadEntries();
  }
  openEntryForm(entry) {
    this.editingEntry = entry || null;
    if (entry) {
      this.entryForm = {
        name: entry.name,
        entryType: entry.entryType,
        listSource: entry.listSource,
        aliases: entry.aliases || "",
        nationality: entry.nationality || "",
        remarks: entry.remarks || ""
      };
    } else {
      this.entryForm = { name: "", entryType: "Individual", listSource: "Custom", aliases: "", nationality: "", remarks: "" };
    }
    this.showEntryForm = true;
  }
  closeEntryForm() {
    this.showEntryForm = false;
    this.editingEntry = null;
  }
  saveEntry() {
    if (!this.entryForm.name.trim()) {
      this.notify.error("Name is required");
      return;
    }
    const obs = this.editingEntry ? this.api.updateSanctionEntry(this.editingEntry.id, this.entryForm) : this.api.createSanctionEntry(this.entryForm);
    obs.pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.editingEntry ? "Entry updated" : "Entry created");
          this.closeEntryForm();
          this.loadEntries();
          this.loadDashboard();
        } else {
          this.notify.error(res?.message || "Failed");
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  toggleEntry(entry) {
    this.api.toggleSanctionEntry(entry.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(`Entry ${res.data ? "activated" : "deactivated"}`);
          this.loadEntries();
          this.loadDashboard();
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  deleteEntry(entry) {
    if (!confirm(`Delete sanction entry "${entry.name}"?`))
      return;
    this.api.deleteSanctionEntry(entry.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Entry deleted");
          this.loadEntries();
          this.loadDashboard();
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  // ---- Countries ----
  loadCountries() {
    this.loadingCountries = true;
    this.api.getSanctionedCountries().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success)
          this.countries = res.data || [];
        this.loadingCountries = false;
      },
      error: () => this.loadingCountries = false
    });
  }
  openCountryForm(country) {
    this.editingCountry = country || null;
    if (country) {
      this.countryForm = {
        countryCode: country.countryCode,
        countryName: country.countryName,
        sanctionType: country.sanctionType,
        riskLevel: country.riskLevel || "Blocked",
        listSource: country.listSource,
        remarks: country.remarks || ""
      };
    } else {
      this.countryForm = { countryCode: "", countryName: "", sanctionType: "Full", riskLevel: "Blocked", listSource: "Custom", remarks: "" };
    }
    this.showCountryForm = true;
  }
  closeCountryForm() {
    this.showCountryForm = false;
    this.editingCountry = null;
  }
  saveCountry() {
    if (!this.countryForm.countryCode.trim() || !this.countryForm.countryName.trim()) {
      this.notify.error("Country code and name are required");
      return;
    }
    const obs = this.editingCountry ? this.api.updateSanctionedCountry(this.editingCountry.id, this.countryForm) : this.api.createSanctionedCountry(this.countryForm);
    obs.pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.editingCountry ? "Country updated" : "Country added");
          this.closeCountryForm();
          this.loadCountries();
          this.loadDashboard();
        } else {
          this.notify.error(res?.message || "Failed");
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  toggleCountry(country) {
    this.api.toggleSanctionedCountry(country.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(`Country ${res.data ? "activated" : "deactivated"}`);
          this.loadCountries();
          this.loadDashboard();
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  deleteCountry(country) {
    if (!confirm(`Remove "${country.countryName}" from sanctioned countries?`))
      return;
    this.api.deleteSanctionedCountry(country.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Country removed");
          this.loadCountries();
          this.loadDashboard();
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  // ---- Screening Results ----
  loadScreenings() {
    this.loadingScreenings = true;
    this.api.getScreeningResultsPaged({ page: this.screeningsPage, pageSize: this.screeningsPageSize, search: this.screeningsSearch }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.screenings = res.data.items || [];
          this.screeningsTotalCount = res.data.totalCount || 0;
        }
        this.loadingScreenings = false;
      },
      error: () => this.loadingScreenings = false
    });
  }
  onScreeningsSearch() {
    if (this.searchTimer)
      clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.screeningsPage = 1;
      this.loadScreenings();
    }, 400);
  }
  onScreeningsPage(event) {
    this.screeningsPage = event.pageIndex + 1;
    this.screeningsPageSize = event.pageSize;
    this.loadScreenings();
  }
  openReviewForm(screening) {
    this.reviewingScreening = screening;
    this.reviewForm = { status: "FalsePositive", reviewNotes: "" };
    this.showReviewForm = true;
  }
  closeReviewForm() {
    this.showReviewForm = false;
    this.reviewingScreening = null;
  }
  submitReview() {
    if (!this.reviewingScreening)
      return;
    this.api.reviewScreeningResult(this.reviewingScreening.id, this.reviewForm).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Review submitted");
          this.closeReviewForm();
          this.loadScreenings();
          this.loadDashboard();
        } else {
          this.notify.error(res?.message || "Failed");
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  getStatusColor(status) {
    switch (status) {
      case "Clear":
        return "accent";
      case "PotentialMatch":
        return "warn";
      case "ConfirmedMatch":
        return "warn";
      case "FalsePositive":
        return "primary";
      default:
        return "";
    }
  }
  getScorePercent(score) {
    if (score == null)
      return "-";
    return (score * 100).toFixed(0) + "%";
  }
  exportEntries(format) {
    this.api.exportSanctionEntries(format).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = format === "csv" ? "sanction-entries.csv" : "sanction-entries.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
  getRiskLevelDescription(level) {
    switch (level) {
      case "Blocked":
        return "Transactions blocked completely";
      case "High":
        return "Transactions flagged for compliance review";
      case "Medium":
        return "Transactions flagged for compliance review";
      case "Low":
        return "Transactions allowed normally";
      default:
        return "";
    }
  }
  onTabChange(index) {
    this.activeTab = index;
  }
  get entriesTotalPages() {
    return Math.ceil(this.entriesTotalCount / this.entriesPageSize) || 1;
  }
  get screeningsTotalPages() {
    return Math.ceil(this.screeningsTotalCount / this.screeningsPageSize) || 1;
  }
  static {
    this.\u0275fac = function SanctionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SanctionsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SanctionsComponent, selectors: [["app-sanctions"]], decls: 60, vars: 17, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-soft", "p-5", "border", "border-surface-200", "dark:border-surface-700", "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "rounded-xl", "bg-blue-50", "dark:bg-blue-900/20", "text-blue-600", "dark:text-blue-400", "flex", "items-center", "justify-center", "shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l3-3m-3 3l-3-3m3 3V15"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "font-medium", "text-surface-500", "uppercase", "tracking-wider"], [1, "w-12", "h-12", "rounded-xl", "bg-red-50", "dark:bg-red-900/20", "text-red-600", "dark:text-red-400", "flex", "items-center", "justify-center", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "w-12", "h-12", "rounded-xl", "bg-green-50", "dark:bg-green-900/20", "text-green-600", "dark:text-green-400", "flex", "items-center", "justify-center", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-soft", "p-5", "border", "border-amber-200", "dark:border-amber-900/30", "flex", "items-center", "gap-4", "relative", "overflow-hidden"], [1, "absolute", "right-0", "top-0", "bottom-0", "w-1", "bg-amber-500"], [1, "w-12", "h-12", "rounded-xl", "bg-amber-50", "dark:bg-amber-900/20", "text-amber-600", "dark:text-amber-400", "flex", "items-center", "justify-center", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "bg-white", "dark:bg-surface-800", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "shadow-soft", "p-1.5", "flex", "flex-wrap", "gap-1"], [1, "px-5", "py-2.5", "rounded-lg", "text-sm", "font-medium", "transition-colors", "flex-1", "text-center", 3, "click", "ngClass"], [1, "px-5", "py-2.5", "rounded-lg", "text-sm", "font-medium", "transition-colors", "flex-1", "text-center", "relative", 3, "click", "ngClass"], ["class", "absolute top-1 right-2 flex w-2 h-2", 4, "ngIf"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "shadow-soft", "overflow-hidden"], ["class", "p-6", 4, "ngIf"], ["class", "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], [1, "absolute", "top-1", "right-2", "flex", "w-2", "h-2"], [1, "animate-ping", "absolute", "inline-flex", "h-full", "w-full", "rounded-full", "bg-amber-400", "opacity-75"], [1, "relative", "inline-flex", "rounded-full", "w-2", "h-2", "bg-amber-500"], [1, "p-6"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "relative", "w-full", "max-w-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search entries...", 1, "w-full", "pl-10", "pr-3", "py-2", "text-sm", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-900", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "border", "border-surface-300", "dark:border-surface-600", "rounded-lg", "text-sm", "font-medium", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "bg-brand-600", "text-white", "rounded-lg", "text-sm", "font-medium", "hover:bg-brand-700", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], ["class", "flex justify-center p-12", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700", 4, "ngIf"], [1, "flex", "justify-center", "p-12"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "whitespace-nowrap"], [1, "bg-surface-50", "dark:bg-surface-800/50"], [1, "border-y", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-300"], [1, "px-4", "py-3", "font-semibold"], [1, "px-4", "py-3", "font-semibold", "text-right"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], ["class", "text-center py-12 text-surface-500", 4, "ngIf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "px-4", "py-3", "font-medium", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-medium", "bg-purple-50", "text-purple-700", "border", "border-purple-200", "dark:bg-purple-900/20", "dark:text-purple-300", "dark:border-purple-800/50"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-300"], [1, "px-4", "py-3", "text-surface-500", "text-xs", "truncate", "max-w-xs"], [1, "inline-flex", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "px-4", "py-3", "text-surface-500"], [1, "px-4", "py-3", "text-right"], [1, "flex", "items-center", "justify-end", "gap-1"], ["title", "Edit", 1, "p-1", "rounded", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", 3, "click"], ["d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "p-1", "rounded", "hover:bg-surface-100", "dark:hover:bg-surface-700", 3, "click", "title", "ngClass"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z", 4, "ngIf"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z", 4, "ngIf"], ["title", "Delete", 1, "p-1", "rounded", "text-red-500", "hover:bg-red-50", "dark:hover:bg-red-900/20", 3, "click"], ["d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"], [1, "text-center", "py-12", "text-surface-500"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "mt-4", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "p-1.5", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "disabled:opacity-40", "hover:bg-surface-100", "transition", 3, "click", "disabled"], ["d", "M11 19l-7-7 7-7m8 14l-7-7 7-7"], ["d", "M15 19l-7-7 7-7"], [1, "text-sm", "px-2"], ["d", "M9 5l7 7-7 7"], ["d", "M13 5l7 7-7 7M5 5l7 7-7 7"], [1, "flex", "items-center", "justify-between", "gap-4", "mb-6"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "bg-brand-600", "text-white", "rounded-lg", "text-sm", "font-medium", "hover:bg-brand-700", "transition", "shadow-sm", 3, "click"], [1, "px-4", "py-3", "font-semibold", "w-24"], [1, "px-4", "py-3", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-medium", "border", 3, "ngClass"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-semibold", 3, "title", "ngClass"], ["type", "text", "placeholder", "Search screenings...", 1, "w-full", "pl-10", "pr-3", "py-2", "text-sm", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-900", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors", 3, "ngClass"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-medium", "border", "border-surface-200", "dark:border-surface-700", "bg-surface-100", "dark:bg-surface-800"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-semibold", 3, "ngClass"], ["class", "font-medium", 3, "ngClass", 4, "ngIf"], ["class", "text-surface-400", 4, "ngIf"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-300", "font-mono", "text-xs"], ["title", "Review", "class", "p-1.5 rounded bg-brand-50 text-brand-600 hover:bg-brand-100 dark:bg-brand-900/20 dark:text-brand-400 dark:hover:bg-brand-900/40 transition", 3, "click", 4, "ngIf"], ["class", "inline-flex text-green-500", 3, "title", 4, "ngIf"], [1, "font-medium", 3, "ngClass"], [1, "text-surface-400"], ["title", "Review", 1, "p-1.5", "rounded", "bg-brand-50", "text-brand-600", "hover:bg-brand-100", "dark:bg-brand-900/20", "dark:text-brand-400", "dark:hover:bg-brand-900/40", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"], [1, "inline-flex", "text-green-500", 3, "title"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["fill", "#fff", "d", "M10 16l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8z"], [1, "fixed", "inset-0", "z-50", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-lg", "pointer-events-auto", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "p-1", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-surface-400", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6", "space-y-4", "overflow-y-auto"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "sm:col-span-2"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], ["type", "text", "placeholder", "Full name or organization", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "e.g. AKA Name 1, AKA Name 2", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-lg", "transition-colors", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-lg", "hover:bg-brand-700", "transition-colors", "shadow-sm", 3, "click"], [3, "value"], [1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", "disabled:opacity-50", 3, "ngModelChange", "ngModel", "disabled"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "pointer-events-auto", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-amber-200", "dark:border-amber-900/30", "bg-amber-50", "dark:bg-amber-900/10", "rounded-t-2xl"], [1, "text-lg", "font-semibold", "text-amber-800", "dark:text-amber-500"], [1, "p-1", "rounded-lg", "hover:bg-amber-200", "dark:hover:bg-amber-800/50", "text-amber-600", "dark:text-amber-400", "transition", 3, "click"], [1, "p-6", "space-y-4"], ["class", "p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 text-sm space-y-2", 4, "ngIf"], ["value", "ConfirmedMatch"], ["value", "FalsePositive"], ["rows", "3", "placeholder", "Reason for decision...", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "p-4", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-900/50", "text-sm", "space-y-2"], [1, "text-surface-500", "dark:text-surface-400", "font-medium", "inline-block", "w-20"], [1, "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "font-bold", "text-red-600", "dark:text-red-400"]], template: function SanctionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Sanctions Management");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 6);
        \u0275\u0275element(8, "path", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "div")(10, "p", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 9);
        \u0275\u0275text(13, "Sanctioned Persons");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 4)(15, "div", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 6);
        \u0275\u0275element(17, "path", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "div")(19, "p", 8);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p", 9);
        \u0275\u0275text(22, "Sanctioned Countries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 4)(24, "div", 12);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(25, "svg", 6);
        \u0275\u0275element(26, "path", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(27, "div")(28, "p", 8);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 9);
        \u0275\u0275text(31, "Total Screenings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 14);
        \u0275\u0275element(33, "div", 15);
        \u0275\u0275elementStart(34, "div", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(35, "svg", 6);
        \u0275\u0275element(36, "path", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(37, "div")(38, "p", 8);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p", 9);
        \u0275\u0275text(41, "Pending Review");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "div", 18)(43, "button", 19);
        \u0275\u0275listener("click", function SanctionsComponent_Template_button_click_43_listener() {
          return ctx.onTabChange(0);
        });
        \u0275\u0275text(44, " Sanctioned Persons ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 19);
        \u0275\u0275listener("click", function SanctionsComponent_Template_button_click_45_listener() {
          return ctx.onTabChange(1);
        });
        \u0275\u0275text(46, " Sanctioned Countries ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 20);
        \u0275\u0275listener("click", function SanctionsComponent_Template_button_click_47_listener() {
          return ctx.onTabChange(2);
        });
        \u0275\u0275text(48, " Screening Results ");
        \u0275\u0275template(49, SanctionsComponent_span_49_Template, 3, 0, "span", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 22);
        \u0275\u0275template(51, SanctionsComponent_div_51_Template, 18, 4, "div", 23)(52, SanctionsComponent_div_52_Template, 9, 2, "div", 23)(53, SanctionsComponent_div_53_Template, 9, 4, "div", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(54, SanctionsComponent_div_54_Template, 1, 0, "div", 24)(55, SanctionsComponent_div_55_Template, 41, 10, "div", 25)(56, SanctionsComponent_div_56_Template, 1, 0, "div", 24)(57, SanctionsComponent_div_57_Template, 39, 12, "div", 25)(58, SanctionsComponent_div_58_Template, 1, 0, "div", 24)(59, SanctionsComponent_div_59_Template, 27, 3, "div", 25);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.dashboard.activeSanctionEntries || 0);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.dashboard.activeSanctionedCountries || 0);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.dashboard.totalScreenings || 0);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.dashboard.pendingReview || 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", ctx.activeTab === 0 ? "bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400" : "text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.activeTab === 1 ? "bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400" : "text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.activeTab === 2 ? "bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400" : "text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.dashboard.pendingReview > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTab === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEntryForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEntryForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCountryForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCountryForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showReviewForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showReviewForm);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=sanctions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SanctionsComponent, [{
    type: Component,
    args: [{ selector: "app-sanctions", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DatePipe
    ], template: `<div class="flex flex-col gap-6">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">Sanctions Management</h2>
  </div>

  <!-- Dashboard Cards -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-soft p-5 border border-surface-200 dark:border-surface-700 flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l3-3m-3 3l-3-3m3 3V15"/></svg>
      </div>
      <div>
        <p class="text-2xl font-bold text-surface-900 dark:text-surface-100">{{ dashboard.activeSanctionEntries || 0 }}</p>
        <p class="text-xs font-medium text-surface-500 uppercase tracking-wider">Sanctioned Persons</p>
      </div>
    </div>
    <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-soft p-5 border border-surface-200 dark:border-surface-700 flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <div>
        <p class="text-2xl font-bold text-surface-900 dark:text-surface-100">{{ dashboard.activeSanctionedCountries || 0 }}</p>
        <p class="text-xs font-medium text-surface-500 uppercase tracking-wider">Sanctioned Countries</p>
      </div>
    </div>
    <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-soft p-5 border border-surface-200 dark:border-surface-700 flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <div>
        <p class="text-2xl font-bold text-surface-900 dark:text-surface-100">{{ dashboard.totalScreenings || 0 }}</p>
        <p class="text-xs font-medium text-surface-500 uppercase tracking-wider">Total Screenings</p>
      </div>
    </div>
    <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-soft p-5 border border-amber-200 dark:border-amber-900/30 flex items-center gap-4 relative overflow-hidden">
      <div class="absolute right-0 top-0 bottom-0 w-1 bg-amber-500"></div>
      <div class="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      </div>
      <div>
        <p class="text-2xl font-bold text-surface-900 dark:text-surface-100">{{ dashboard.pendingReview || 0 }}</p>
        <p class="text-xs font-medium text-surface-500 uppercase tracking-wider">Pending Review</p>
      </div>
    </div>
  </div>

  <!-- Custom Tabs Header -->
  <div class="bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 shadow-soft p-1.5 flex flex-wrap gap-1">
    <button (click)="onTabChange(0)" class="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex-1 text-center"
      [ngClass]="activeTab === 0 ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400' : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750'">
      Sanctioned Persons
    </button>
    <button (click)="onTabChange(1)" class="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex-1 text-center"
      [ngClass]="activeTab === 1 ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400' : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750'">
      Sanctioned Countries
    </button>
    <button (click)="onTabChange(2)" class="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex-1 text-center relative"
      [ngClass]="activeTab === 2 ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400' : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750'">
      Screening Results
      <span *ngIf="dashboard.pendingReview > 0" class="absolute top-1 right-2 flex w-2 h-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full w-2 h-2 bg-amber-500"></span>
      </span>
    </button>
  </div>

  <!-- Content Containers -->
  <div class="bg-white dark:bg-surface-800 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-soft overflow-hidden">
    
    <!-- Tab 0: Sanctioned Persons -->
    <div *ngIf="activeTab === 0" class="p-6">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div class="relative w-full max-w-sm">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input type="text" placeholder="Search entries..." [(ngModel)]="entriesSearch" (ngModelChange)="onEntriesSearch()"
            class="w-full pl-10 pr-3 py-2 text-sm rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition" />
        </div>
        <div class="flex items-center gap-2">
          <button (click)="exportEntries('excel')" class="inline-flex items-center gap-1.5 px-4 py-2 border border-surface-300 dark:border-surface-600 rounded-lg text-sm font-medium hover:bg-surface-50 dark:hover:bg-surface-700 transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg> Export
          </button>
          <button (click)="openEntryForm()" class="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg> Add Entry
          </button>
        </div>
      </div>

      <div *ngIf="loadingEntries" class="flex justify-center p-12"><svg class="animate-spin h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg></div>
      
      <div *ngIf="!loadingEntries" class="overflow-x-auto">
        <table class="w-full text-sm text-left whitespace-nowrap">
          <thead class="bg-surface-50 dark:bg-surface-800/50">
            <tr class="border-y border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-300">
              <th class="px-4 py-3 font-semibold">Name</th>
              <th class="px-4 py-3 font-semibold">Type</th>
              <th class="px-4 py-3 font-semibold">Source</th>
              <th class="px-4 py-3 font-semibold">Aliases</th>
              <th class="px-4 py-3 font-semibold">Nationality</th>
              <th class="px-4 py-3 font-semibold">Status</th>
              <th class="px-4 py-3 font-semibold">Added</th>
              <th class="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of entries" class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
              <td class="px-4 py-3 font-medium text-surface-900 dark:text-surface-100">{{ row.name }}</td>
              <td class="px-4 py-3"><span class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800/50">{{ row.entryType }}</span></td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300">{{ row.listSource }}</td>
              <td class="px-4 py-3 text-surface-500 text-xs truncate max-w-xs">{{ row.aliases || '-' }}</td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300">{{ row.nationality || '-' }}</td>
              <td class="px-4 py-3"><span class="inline-flex px-2 py-0.5 rounded-full text-xs font-medium" [ngClass]="row.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">{{ row.isActive ? 'Active' : 'Inactive' }}</span></td>
              <td class="px-4 py-3 text-surface-500">{{ row.createdAt | date:'mediumDate' }}</td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end gap-1">
                  <button title="Edit" (click)="openEntryForm(row)" class="p-1 rounded text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></button>
                  <button [title]="row.isActive ? 'Deactivate' : 'Activate'" (click)="toggleEntry(row)" class="p-1 rounded hover:bg-surface-100 dark:hover:bg-surface-700" [ngClass]="row.isActive ? 'text-green-600 dark:text-green-400' : 'text-surface-400'"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path *ngIf="row.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/><path *ngIf="!row.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"/></svg></button>
                  <button title="Delete" (click)="deleteEntry(row)" class="p-1 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div *ngIf="entries.length === 0" class="text-center py-12 text-surface-500">No sanction entries found</div>
      </div>
      <!-- Entries Pagination -->
      <div *ngIf="!loadingEntries && entries.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
        <span class="text-sm text-surface-500 dark:text-surface-400">Showing {{ (entriesPage - 1) * entriesPageSize + 1 }}&ndash;{{ (entriesPage - 1) * entriesPageSize + entries.length }} of {{ entriesTotalCount }}</span>
        <div class="flex items-center gap-2">
          <button (click)="onEntriesPage({pageIndex: 0, pageSize: entriesPageSize})" [disabled]="entriesPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg></button>
          <button (click)="onEntriesPage({pageIndex: entriesPage - 2, pageSize: entriesPageSize})" [disabled]="entriesPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg></button>
          <span class="text-sm px-2">Page {{ entriesPage }} of {{ entriesTotalPages }}</span>
          <button (click)="onEntriesPage({pageIndex: entriesPage, pageSize: entriesPageSize})" [disabled]="entriesPage >= entriesTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>
          <button (click)="onEntriesPage({pageIndex: entriesTotalPages - 1, pageSize: entriesPageSize})" [disabled]="entriesPage >= entriesTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg></button>
        </div>
      </div>
    </div>
    
    <!-- Tab 1: Sanctioned Countries -->
    <div *ngIf="activeTab === 1" class="p-6">
      <div class="flex items-center justify-between gap-4 mb-6">
        <div></div>
        <button (click)="openCountryForm()" class="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition shadow-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg> Add Country
        </button>
      </div>

      <div *ngIf="loadingCountries" class="flex justify-center p-12"><svg class="animate-spin h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg></div>
      
      <div *ngIf="!loadingCountries" class="overflow-x-auto">
        <table class="w-full text-sm text-left whitespace-nowrap">
          <thead class="bg-surface-50 dark:bg-surface-800/50">
            <tr class="border-y border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-300">
              <th class="px-4 py-3 font-semibold w-24">Code</th>
              <th class="px-4 py-3 font-semibold">Country</th>
              <th class="px-4 py-3 font-semibold">Sanction Type</th>
              <th class="px-4 py-3 font-semibold">Risk Level</th>
              <th class="px-4 py-3 font-semibold">Source</th>
              <th class="px-4 py-3 font-semibold">Status</th>
              <th class="px-4 py-3 font-semibold">Added</th>
              <th class="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of countries" class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
              <td class="px-4 py-3 font-bold text-surface-900 dark:text-surface-100">{{ row.countryCode }}</td>
              <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ row.countryName }}</td>
              <td class="px-4 py-3">
                <span class="inline-flex px-2 py-0.5 rounded text-xs font-medium border"
                  [ngClass]="row.sanctionType === 'Full' ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50' : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50'">
                  {{ row.sanctionType }}
                </span>
              </td>
              <td class="px-4 py-3">
                <span class="inline-flex px-2 py-0.5 rounded text-xs font-semibold" [title]="getRiskLevelDescription(row.riskLevel)"
                  [ngClass]="{
                    'bg-slate-800 text-white dark:bg-slate-300 dark:text-slate-900': row.riskLevel === 'Blocked',
                    'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400': row.riskLevel === 'High',
                    'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400': row.riskLevel === 'Medium',
                    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400': row.riskLevel === 'Low'
                  }">
                  {{ row.riskLevel }}
                </span>
              </td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300">{{ row.listSource }}</td>
              <td class="px-4 py-3">
                <span class="inline-flex px-2 py-0.5 rounded-full text-xs font-medium" [ngClass]="row.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">
                  {{ row.isActive ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td class="px-4 py-3 text-surface-500">{{ row.createdAt | date:'mediumDate' }}</td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end gap-1">
                  <button title="Edit" (click)="openCountryForm(row)" class="p-1 rounded text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></button>
                  <button [title]="row.isActive ? 'Deactivate' : 'Activate'" (click)="toggleCountry(row)" class="p-1 rounded hover:bg-surface-100 dark:hover:bg-surface-700" [ngClass]="row.isActive ? 'text-green-600 dark:text-green-400' : 'text-surface-400'"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path *ngIf="row.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/><path *ngIf="!row.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"/></svg></button>
                  <button title="Delete" (click)="deleteCountry(row)" class="p-1 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div *ngIf="countries.length === 0" class="text-center py-12 text-surface-500">No sanctioned countries configured</div>
      </div>
    </div>
    <!-- Tab 2: Screening Results -->
    <div *ngIf="activeTab === 2" class="p-6">
      <div class="flex items-center justify-between gap-4 mb-6">
        <div class="relative w-full max-w-sm">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input type="text" placeholder="Search screenings..." [(ngModel)]="screeningsSearch" (ngModelChange)="onScreeningsSearch()"
            class="w-full pl-10 pr-3 py-2 text-sm rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition" />
        </div>
      </div>

      <div *ngIf="loadingScreenings" class="flex justify-center p-12"><svg class="animate-spin h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg></div>
      
      <div *ngIf="!loadingScreenings" class="overflow-x-auto">
        <table class="w-full text-sm text-left whitespace-nowrap">
          <thead class="bg-surface-50 dark:bg-surface-800/50">
            <tr class="border-y border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-300">
              <th class="px-4 py-3 font-semibold">Screened Name</th>
              <th class="px-4 py-3 font-semibold">Type</th>
              <th class="px-4 py-3 font-semibold">Status</th>
              <th class="px-4 py-3 font-semibold">Matched Against</th>
              <th class="px-4 py-3 font-semibold">Score</th>
              <th class="px-4 py-3 font-semibold">Transaction</th>
              <th class="px-4 py-3 font-semibold">Date</th>
              <th class="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of screenings" class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors"
                [ngClass]="row.status === 'PotentialMatch' || row.status === 'ConfirmedMatch' ? 'bg-amber-50/50 dark:bg-amber-900/10' : ''">
              <td class="px-4 py-3 font-medium text-surface-900 dark:text-surface-100">{{ row.screenedName }}</td>
              <td class="px-4 py-3"><span class="inline-flex px-2 py-0.5 rounded text-xs font-medium border border-surface-200 dark:border-surface-700 bg-surface-100 dark:bg-surface-800">{{ row.screenedType }}</span></td>
              <td class="px-4 py-3">
                <span class="inline-flex px-2 py-0.5 rounded text-xs font-semibold"
                  [ngClass]="{
                    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400': row.status === 'Clear',
                    'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400': row.status === 'PotentialMatch',
                    'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400': row.status === 'ConfirmedMatch',
                    'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400': row.status === 'FalsePositive'
                  }">
                  {{ row.status }}
                </span>
              </td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300">{{ row.matchedName || '-' }}</td>
              <td class="px-4 py-3">
                <span *ngIf="row.matchScore" class="font-medium" [ngClass]="row.matchScore >= 0.8 ? 'text-red-600 dark:text-red-400' : 'text-surface-700 dark:text-surface-300'">
                  {{ getScorePercent(row.matchScore) }}
                </span>
                <span *ngIf="!row.matchScore" class="text-surface-400">-</span>
              </td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300 font-mono text-xs">{{ row.transactionId || '-' }}</td>
              <td class="px-4 py-3 text-surface-500">{{ row.createdAt | date:'short' }}</td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end gap-1">
                  <button *ngIf="row.status === 'PotentialMatch' && !row.reviewedBy" title="Review" (click)="openReviewForm(row)" class="p-1.5 rounded bg-brand-50 text-brand-600 hover:bg-brand-100 dark:bg-brand-900/20 dark:text-brand-400 dark:hover:bg-brand-900/40 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                  </button>
                  <span *ngIf="row.reviewedBy" class="inline-flex text-green-500" [title]="'Reviewed by ' + row.reviewedBy + (row.reviewNotes ? ': ' + row.reviewNotes : '')">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path fill="#fff" d="M10 16l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8z"/></svg>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div *ngIf="screenings.length === 0" class="text-center py-12 text-surface-500">No screening results yet</div>
      </div>
      <!-- Screenings Pagination -->
      <div *ngIf="!loadingScreenings && screenings.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
        <span class="text-sm text-surface-500 dark:text-surface-400">Showing {{ (screeningsPage - 1) * screeningsPageSize + 1 }}&ndash;{{ (screeningsPage - 1) * screeningsPageSize + screenings.length }} of {{ screeningsTotalCount }}</span>
        <div class="flex items-center gap-2">
          <button (click)="onScreeningsPage({pageIndex: 0, pageSize: screeningsPageSize})" [disabled]="screeningsPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg></button>
          <button (click)="onScreeningsPage({pageIndex: screeningsPage - 2, pageSize: screeningsPageSize})" [disabled]="screeningsPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg></button>
          <span class="text-sm px-2">Page {{ screeningsPage }} of {{ screeningsTotalPages }}</span>
          <button (click)="onScreeningsPage({pageIndex: screeningsPage, pageSize: screeningsPageSize})" [disabled]="screeningsPage >= screeningsTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>
          <button (click)="onScreeningsPage({pageIndex: screeningsTotalPages - 1, pageSize: screeningsPageSize})" [disabled]="screeningsPage >= screeningsTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg></button>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- Entry Form Dialog -->
<div *ngIf="showEntryForm" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeEntryForm()"></div>
<div *ngIf="showEntryForm" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-lg pointer-events-auto max-h-[90vh] flex flex-col">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">{{ editingEntry ? 'Edit' : 'Add' }} Sanction Entry</h3>
      <button (click)="closeEntryForm()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-4 overflow-y-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Name *</label>
          <input type="text" [(ngModel)]="entryForm.name" placeholder="Full name or organization" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm" />
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Entry Type</label>
          <select [(ngModel)]="entryForm.entryType" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
            <option *ngFor="let t of entryTypes" [value]="t">{{ t }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">List Source</label>
          <select [(ngModel)]="entryForm.listSource" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
            <option *ngFor="let s of listSources" [value]="s">{{ s }}</option>
          </select>
        </div>
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Aliases (comma-separated)</label>
          <input type="text" [(ngModel)]="entryForm.aliases" placeholder="e.g. AKA Name 1, AKA Name 2" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm" />
        </div>
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Nationality</label>
          <input type="text" [(ngModel)]="entryForm.nationality" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm" />
        </div>
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Remarks</label>
          <textarea [(ngModel)]="entryForm.remarks" rows="2" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm"></textarea>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeEntryForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition-colors">Cancel</button>
      <button (click)="saveEntry()" class="px-4 py-2 text-sm font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-sm">{{ editingEntry ? 'Update' : 'Create' }}</button>
    </div>
  </div>
</div>

<!-- Country Form Dialog -->
<div *ngIf="showCountryForm" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeCountryForm()"></div>
<div *ngIf="showCountryForm" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-lg pointer-events-auto max-h-[90vh] flex flex-col">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">{{ editingCountry ? 'Edit' : 'Add' }} Sanctioned Country</h3>
      <button (click)="closeCountryForm()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-4 overflow-y-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Select Country *</label>
          <select [(ngModel)]="countryForm.countryName" (ngModelChange)="onCountrySelected($event)" [disabled]="!!editingCountry" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm disabled:opacity-50">
            <option *ngFor="let c of referenceCountries" [value]="c.name">{{ c.name }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Sanction Type</label>
          <select [(ngModel)]="countryForm.sanctionType" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
            <option *ngFor="let t of sanctionTypes" [value]="t">{{ t }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Risk Level</label>
          <select [(ngModel)]="countryForm.riskLevel" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
            <option *ngFor="let r of riskLevels" [value]="r">{{ r }}</option>
          </select>
        </div>
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">List Source</label>
          <select [(ngModel)]="countryForm.listSource" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
            <option *ngFor="let s of listSources" [value]="s">{{ s }}</option>
          </select>
        </div>
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Remarks</label>
          <textarea [(ngModel)]="countryForm.remarks" rows="2" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm"></textarea>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeCountryForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition-colors">Cancel</button>
      <button (click)="saveCountry()" class="px-4 py-2 text-sm font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-sm">{{ editingCountry ? 'Update' : 'Add' }}</button>
    </div>
  </div>
</div>

<!-- Review Form Dialog -->
<div *ngIf="showReviewForm" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeReviewForm()"></div>
<div *ngIf="showReviewForm" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-md pointer-events-auto flex flex-col">
    <div class="flex items-center justify-between px-6 py-4 border-b border-amber-200 dark:border-amber-900/30 bg-amber-50 dark:bg-amber-900/10 rounded-t-2xl">
      <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-500">Review Screening Match</h3>
      <button (click)="closeReviewForm()" class="p-1 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-800/50 text-amber-600 dark:text-amber-400 transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-4">
      <div class="p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 text-sm space-y-2" *ngIf="reviewingScreening">
        <p><span class="text-surface-500 dark:text-surface-400 font-medium inline-block w-20">Screened:</span> <span class="font-semibold text-surface-900 dark:text-surface-100">{{ reviewingScreening.screenedName }}</span> ({{ reviewingScreening.screenedType }})</p>
        <p><span class="text-surface-500 dark:text-surface-400 font-medium inline-block w-20">Matched:</span> <span class="font-semibold text-surface-900 dark:text-surface-100">{{ reviewingScreening.matchedName }}</span> ({{ reviewingScreening.matchedListSource }})</p>
        <p><span class="text-surface-500 dark:text-surface-400 font-medium inline-block w-20">Score:</span> <span class="font-bold text-red-600 dark:text-red-400">{{ getScorePercent(reviewingScreening.matchScore) }}</span></p>
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Decision</label>
        <select [(ngModel)]="reviewForm.status" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
          <option value="ConfirmedMatch">Confirmed Match</option>
          <option value="FalsePositive">False Positive</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Review Notes</label>
        <textarea [(ngModel)]="reviewForm.reviewNotes" rows="3" placeholder="Reason for decision..." class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm"></textarea>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeReviewForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition-colors">Cancel</button>
      <button (click)="submitReview()" class="px-4 py-2 text-sm font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-sm">Submit Review</button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/sanctions/sanctions.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=sanctions.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SanctionsComponent, { className: "SanctionsComponent", filePath: "src/app/pages/admin/sanctions/sanctions.component.ts", lineNumber: 17 });
})();
export {
  SanctionsComponent
};
//# sourceMappingURL=chunk-4S7UV2FV.js.map
