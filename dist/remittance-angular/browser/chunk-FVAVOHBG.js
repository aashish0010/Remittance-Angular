import {
  ConfirmDeleteService
} from "./chunk-NDZ32ORS.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-BK7GB5PY.js";
import {
  NotificationService
} from "./chunk-B6XI4CW2.js";
import "./chunk-LQZAMWD2.js";
import {
  ApiService
} from "./chunk-UHRNEUWT.js";
import "./chunk-AGDJ7TMO.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-2U2B7PQF.js";
import {
  Component,
  Subject,
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
  ɵɵpipe,
  ɵɵpipeBind1,
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
} from "./chunk-WEHJLEZR.js";
import "./chunk-ZNC4SKHB.js";

// src/app/pages/admin/sanctions/sanctions.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "bg-slate-800 text-white dark:bg-slate-300 dark:text-slate-900": a0, "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400": a1, "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400": a2, "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400": a3 });
function SanctionsComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.activeTab === 0 ? "bg-white/30 text-white" : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dashboard.pendingReview > 99 ? "99+" : ctx_r0.dashboard.pendingReview, " ");
  }
}
function SanctionsComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275element(1, "span", 34)(2, "span", 35);
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_76_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275element(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.flaggedTotalCount, " pending ");
  }
}
function SanctionsComponent_div_76_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 52);
    \u0275\u0275element(2, "circle", 53)(3, "path", 54);
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_76_div_14_tr_21_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.getSourceBadgeClass(row_r4.matchedListSource));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.matchedListSource);
  }
}
function SanctionsComponent_div_76_div_14_tr_21_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_76_div_14_tr_21_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getScorePercent(row_r4.matchScore));
  }
}
function SanctionsComponent_div_76_div_14_tr_21_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_76_div_14_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 62)(1, "td", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 64)(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 64);
    \u0275\u0275template(9, SanctionsComponent_div_76_div_14_tr_21_span_9_Template, 2, 2, "span", 67)(10, SanctionsComponent_div_76_div_14_tr_21_span_10_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 64);
    \u0275\u0275template(12, SanctionsComponent_div_76_div_14_tr_21_span_12_Template, 2, 1, "span", 69)(13, SanctionsComponent_div_76_div_14_tr_21_span_13_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 70);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 71);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 72)(20, "button", 73);
    \u0275\u0275listener("click", function SanctionsComponent_div_76_div_14_tr_21_Template_button_click_20_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openReviewForm(row_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 74);
    \u0275\u0275element(22, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Review ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.screenedName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.screenedType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.matchedName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r4.matchedListSource);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r4.matchedListSource);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r4.matchScore);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r4.matchScore);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.transactionId || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 9, row_r4.createdAt, "short"));
  }
}
function SanctionsComponent_div_76_div_14_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4, "No flagged transactions pending review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 83);
    \u0275\u0275text(6, "All screenings are clear or have been reviewed");
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_76_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "table", 56)(2, "thead")(3, "tr", 57)(4, "th", 58);
    \u0275\u0275text(5, "Screened Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 58);
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 58);
    \u0275\u0275text(9, "Matched Against");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 58);
    \u0275\u0275text(11, "List Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 58);
    \u0275\u0275text(13, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 58);
    \u0275\u0275text(15, "Transaction #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 58);
    \u0275\u0275text(17, "Flagged");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 59);
    \u0275\u0275text(19, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, SanctionsComponent_div_76_div_14_tr_21_Template, 24, 12, "tr", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, SanctionsComponent_div_76_div_14_div_22_Template, 7, 0, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r0.flagged);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.flagged.length === 0);
  }
}
function SanctionsComponent_div_76_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86)(4, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_76_div_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFlaggedPage({ pageIndex: 0, pageSize: ctx_r0.flaggedPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 88);
    \u0275\u0275element(6, "path", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_76_div_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFlaggedPage({ pageIndex: ctx_r0.flaggedPage - 2, pageSize: ctx_r0.flaggedPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 88);
    \u0275\u0275element(9, "path", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 91);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_76_div_15_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFlaggedPage({ pageIndex: ctx_r0.flaggedPage, pageSize: ctx_r0.flaggedPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 88);
    \u0275\u0275element(14, "path", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_76_div_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFlaggedPage({ pageIndex: ctx_r0.flaggedTotalPages - 1, pageSize: ctx_r0.flaggedPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 88);
    \u0275\u0275element(17, "path", 93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Showing ", (ctx_r0.flaggedPage - 1) * ctx_r0.flaggedPageSize + 1, "\u2013", (ctx_r0.flaggedPage - 1) * ctx_r0.flaggedPageSize + ctx_r0.flagged.length, " of ", ctx_r0.flaggedTotalCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.flaggedPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.flaggedPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.flaggedPage, " / ", ctx_r0.flaggedTotalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.flaggedPage >= ctx_r0.flaggedTotalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.flaggedPage >= ctx_r0.flaggedTotalPages);
  }
}
function SanctionsComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div")(3, "h3", 38);
    \u0275\u0275text(4, "Flagged Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6, "Transactions matched against any sanction list (manual or automatic). Review each match and mark as confirmed or false positive.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40);
    \u0275\u0275template(8, SanctionsComponent_div_76_span_8_Template, 3, 1, "span", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 43);
    \u0275\u0275element(11, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_76_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.flaggedSearch, $event) || (ctx_r0.flaggedSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SanctionsComponent_div_76_Template_input_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFlaggedSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, SanctionsComponent_div_76_div_13_Template, 4, 0, "div", 46)(14, SanctionsComponent_div_76_div_14_Template, 23, 2, "div", 47)(15, SanctionsComponent_div_76_div_15_Template, 18, 9, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.flaggedTotalCount > 0);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.flaggedSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingFlagged);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingFlagged);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingFlagged && ctx_r0.flagged.length > 0);
  }
}
function SanctionsComponent_div_77_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 52);
    \u0275\u0275element(2, "circle", 53)(3, "path", 54);
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_77_div_21_tr_21__svg_path_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 117);
  }
}
function SanctionsComponent_div_77_div_21_tr_21__svg_path_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 118);
  }
}
function SanctionsComponent_div_77_div_21_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 103)(1, "td", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 64)(4, "span", 104);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 105);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 106);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 105);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 64)(13, "span", 107);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 71);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 72)(19, "div", 108)(20, "button", 109);
    \u0275\u0275listener("click", function SanctionsComponent_div_77_div_21_tr_21_Template_button_click_20_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openEntryForm(row_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 98);
    \u0275\u0275element(22, "path", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 111);
    \u0275\u0275listener("click", function SanctionsComponent_div_77_div_21_tr_21_Template_button_click_23_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleEntry(row_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 112);
    \u0275\u0275template(25, SanctionsComponent_div_77_div_21_tr_21__svg_path_25_Template, 1, 0, "path", 113)(26, SanctionsComponent_div_77_div_21_tr_21__svg_path_26_Template, 1, 0, "path", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 115);
    \u0275\u0275listener("click", function SanctionsComponent_div_77_div_21_tr_21_Template_button_click_27_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteEntry(row_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 98);
    \u0275\u0275element(29, "path", 116);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r8.entryType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.listSource);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.aliases || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.nationality || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r8.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r8.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 12, row_r8.createdAt, "mediumDate"));
    \u0275\u0275advance(7);
    \u0275\u0275property("title", row_r8.isActive ? "Deactivate" : "Activate")("ngClass", row_r8.isActive ? "text-green-600 dark:text-green-400" : "text-surface-400");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r8.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r8.isActive);
  }
}
function SanctionsComponent_div_77_div_21_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "path", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4, "No manual entries yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 83);
    \u0275\u0275text(6, 'Click "Add Entry" to create your first custom sanction entry');
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_77_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "table", 56)(2, "thead")(3, "tr", 101)(4, "th", 58);
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 58);
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 58);
    \u0275\u0275text(9, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 58);
    \u0275\u0275text(11, "Aliases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 58);
    \u0275\u0275text(13, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 58);
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 58);
    \u0275\u0275text(17, "Added");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 59);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, SanctionsComponent_div_77_div_21_tr_21_Template, 30, 15, "tr", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, SanctionsComponent_div_77_div_21_div_22_Template, 7, 0, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r0.entries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.entries.length === 0);
  }
}
function SanctionsComponent_div_77_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86)(4, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_77_div_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEntriesPage({ pageIndex: 0, pageSize: ctx_r0.entriesPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 88);
    \u0275\u0275element(6, "path", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_77_div_22_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEntriesPage({ pageIndex: ctx_r0.entriesPage - 2, pageSize: ctx_r0.entriesPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 88);
    \u0275\u0275element(9, "path", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 91);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_77_div_22_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEntriesPage({ pageIndex: ctx_r0.entriesPage, pageSize: ctx_r0.entriesPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 88);
    \u0275\u0275element(14, "path", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_77_div_22_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEntriesPage({ pageIndex: ctx_r0.entriesTotalPages - 1, pageSize: ctx_r0.entriesPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 88);
    \u0275\u0275element(17, "path", 93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Showing ", (ctx_r0.entriesPage - 1) * ctx_r0.entriesPageSize + 1, "\u2013", (ctx_r0.entriesPage - 1) * ctx_r0.entriesPageSize + ctx_r0.entries.length, " of ", ctx_r0.entriesTotalCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.entriesPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.entriesPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.entriesPage, " / ", ctx_r0.entriesTotalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.entriesPage >= ctx_r0.entriesTotalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.entriesPage >= ctx_r0.entriesTotalPages);
  }
}
function SanctionsComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div")(3, "h3", 38);
    \u0275\u0275text(4, "Manual Sanction List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6, "Custom entries added by your compliance team. These are screened alongside automatic lists.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 94)(8, "button", 95);
    \u0275\u0275listener("click", function SanctionsComponent_div_77_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportEntries("excel"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 88);
    \u0275\u0275element(10, "path", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Export ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "button", 97);
    \u0275\u0275listener("click", function SanctionsComponent_div_77_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openEntryForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 98);
    \u0275\u0275element(14, "path", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Add Entry ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 43);
    \u0275\u0275element(18, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_77_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entriesSearch, $event) || (ctx_r0.entriesSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SanctionsComponent_div_77_Template_input_ngModelChange_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onEntriesSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, SanctionsComponent_div_77_div_20_Template, 4, 0, "div", 46)(21, SanctionsComponent_div_77_div_21_Template, 23, 2, "div", 47)(22, SanctionsComponent_div_77_div_22_Template, 18, 9, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entriesSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingEntries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingEntries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingEntries && ctx_r0.entries.length > 0);
  }
}
function SanctionsComponent_div_78_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 52);
    \u0275\u0275element(2, "circle", 53)(3, "path", 54);
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_78_div_40_tr_21_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r11.recordType);
  }
}
function SanctionsComponent_div_78_div_40_tr_21_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_78_div_40_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 103)(1, "td", 64)(2, "span", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 137);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 64);
    \u0275\u0275template(7, SanctionsComponent_div_78_div_40_tr_21_span_7_Template, 2, 1, "span", 138)(8, SanctionsComponent_div_78_div_40_tr_21_span_8_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 139);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 105);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 71);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 140);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 71);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getSourceBadgeClass(row_r11.source));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r11.source);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r11.recordType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r11.recordType);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.parseAliasNames(row_r11.aliases));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.parseAliasNames(row_r11.aliases));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.nationality || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.dob || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.programme || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.listedOn || "\u2014");
  }
}
function SanctionsComponent_div_78_div_40_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "path", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4, "No ingested entries found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 83);
    \u0275\u0275text(6, "Run the ingestion worker to populate OFAC, UN, EU and UK lists");
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_78_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "table", 56)(2, "thead")(3, "tr", 101)(4, "th", 58);
    \u0275\u0275text(5, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 58);
    \u0275\u0275text(7, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 58);
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 58);
    \u0275\u0275text(11, "Aliases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 58);
    \u0275\u0275text(13, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 58);
    \u0275\u0275text(15, "DOB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 58);
    \u0275\u0275text(17, "Programme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 58);
    \u0275\u0275text(19, "Listed On");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, SanctionsComponent_div_78_div_40_tr_21_Template, 19, 11, "tr", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, SanctionsComponent_div_78_div_40_div_22_Template, 7, 0, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r0.ingested);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ingested.length === 0);
  }
}
function SanctionsComponent_div_78_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 86)(5, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_78_div_41_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onIngestedPage({ pageIndex: 0, pageSize: ctx_r0.ingestedPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 88);
    \u0275\u0275element(7, "path", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_78_div_41_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onIngestedPage({ pageIndex: ctx_r0.ingestedPage - 2, pageSize: ctx_r0.ingestedPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 88);
    \u0275\u0275element(10, "path", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "span", 91);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_78_div_41_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onIngestedPage({ pageIndex: ctx_r0.ingestedPage, pageSize: ctx_r0.ingestedPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 88);
    \u0275\u0275element(15, "path", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_78_div_41_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onIngestedPage({ pageIndex: ctx_r0.ingestedTotalPages - 1, pageSize: ctx_r0.ingestedPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 88);
    \u0275\u0275element(18, "path", 93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Showing ", (ctx_r0.ingestedPage - 1) * ctx_r0.ingestedPageSize + 1, "\u2013", (ctx_r0.ingestedPage - 1) * ctx_r0.ingestedPageSize + ctx_r0.ingested.length, " of ", \u0275\u0275pipeBind1(3, 9, ctx_r0.ingestedTotalCount), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.ingestedPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.ingestedPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.ingestedPage, " / ", ctx_r0.ingestedTotalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.ingestedPage >= ctx_r0.ingestedTotalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.ingestedPage >= ctx_r0.ingestedTotalPages);
  }
}
function SanctionsComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 120)(2, "div")(3, "h3", 38);
    \u0275\u0275text(4, "Automatic Sanction Lists");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6, "Auto-ingested from official sources. Updated nightly. Read-only \u2014 used in all transaction screenings.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 94)(8, "span", 121);
    \u0275\u0275text(9, "OFAC SDN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 122);
    \u0275\u0275text(11, "OFAC CONS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 123);
    \u0275\u0275text(13, "UN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 124);
    \u0275\u0275text(15, "EU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 125);
    \u0275\u0275text(17, "UK");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 126)(19, "div", 127);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 43);
    \u0275\u0275element(21, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "input", 128);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_78_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ingestedSearch, $event) || (ctx_r0.ingestedSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SanctionsComponent_div_78_Template_input_ngModelChange_22_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onIngestedSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "select", 129);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_78_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ingestedSourceFilter, $event) || (ctx_r0.ingestedSourceFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SanctionsComponent_div_78_Template_select_ngModelChange_23_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onIngestedSourceChange());
    });
    \u0275\u0275elementStart(24, "option", 130);
    \u0275\u0275text(25, "All Sources");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 131);
    \u0275\u0275text(27, "OFAC SDN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 132);
    \u0275\u0275text(29, "OFAC Consolidated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 133);
    \u0275\u0275text(31, "UN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 134);
    \u0275\u0275text(33, "EU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 135);
    \u0275\u0275text(35, "UK FCDO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "span", 136);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, SanctionsComponent_div_78_div_39_Template, 4, 0, "div", 46)(40, SanctionsComponent_div_78_div_40_Template, 23, 2, "div", 47)(41, SanctionsComponent_div_78_div_41_Template, 19, 11, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ingestedSearch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ingestedSourceFilter);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(38, 6, ctx_r0.ingestedTotalCount), " records");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingIngested);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIngested);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIngested && ctx_r0.ingested.length > 0);
  }
}
function SanctionsComponent_div_79_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 52);
    \u0275\u0275element(2, "circle", 53)(3, "path", 54);
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_79_div_12_tr_21__svg_path_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 117);
  }
}
function SanctionsComponent_div_79_div_12_tr_21__svg_path_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 118);
  }
}
function SanctionsComponent_div_79_div_12_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 103)(1, "td", 146);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 147);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 64)(6, "span", 148);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 64)(9, "span", 149);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 105);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 64)(14, "span", 107);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 71);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 72)(20, "div", 108)(21, "button", 109);
    \u0275\u0275listener("click", function SanctionsComponent_div_79_div_12_tr_21_Template_button_click_21_listener() {
      const row_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openCountryForm(row_r15));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 98);
    \u0275\u0275element(23, "path", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 111);
    \u0275\u0275listener("click", function SanctionsComponent_div_79_div_12_tr_21_Template_button_click_24_listener() {
      const row_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleCountry(row_r15));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 112);
    \u0275\u0275template(26, SanctionsComponent_div_79_div_12_tr_21__svg_path_26_Template, 1, 0, "path", 113)(27, SanctionsComponent_div_79_div_12_tr_21__svg_path_27_Template, 1, 0, "path", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "button", 115);
    \u0275\u0275listener("click", function SanctionsComponent_div_79_div_12_tr_21_Template_button_click_28_listener() {
      const row_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteCountry(row_r15));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 98);
    \u0275\u0275element(30, "path", 116);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r15.countryCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r15.countryName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r15.sanctionType === "Full" ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50" : "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r15.sanctionType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.getRiskLevelDescription(row_r15.riskLevel))("ngClass", \u0275\u0275pureFunction4(18, _c0, row_r15.riskLevel === "Blocked", row_r15.riskLevel === "High", row_r15.riskLevel === "Medium", row_r15.riskLevel === "Low"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r15.riskLevel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r15.listSource);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r15.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r15.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 15, row_r15.createdAt, "mediumDate"));
    \u0275\u0275advance(7);
    \u0275\u0275property("title", row_r15.isActive ? "Deactivate" : "Activate")("ngClass", row_r15.isActive ? "text-green-600 dark:text-green-400" : "text-surface-400");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r15.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r15.isActive);
  }
}
function SanctionsComponent_div_79_div_12_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "path", 150);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4, "No sanctioned countries configured");
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_79_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "table", 56)(2, "thead")(3, "tr", 101)(4, "th", 145);
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 58);
    \u0275\u0275text(7, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 58);
    \u0275\u0275text(9, "Sanction Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 58);
    \u0275\u0275text(11, "Risk Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 58);
    \u0275\u0275text(13, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 58);
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 58);
    \u0275\u0275text(17, "Added");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 59);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, SanctionsComponent_div_79_div_12_tr_21_Template, 31, 23, "tr", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, SanctionsComponent_div_79_div_12_div_22_Template, 5, 0, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r0.countries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.countries.length === 0);
  }
}
function SanctionsComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 143)(2, "div")(3, "h3", 38);
    \u0275\u0275text(4, "Sanctioned Countries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6, "Countries where transactions are blocked or flagged by risk level.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 144);
    \u0275\u0275listener("click", function SanctionsComponent_div_79_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openCountryForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 98);
    \u0275\u0275element(9, "path", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Add Country ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, SanctionsComponent_div_79_div_11_Template, 4, 0, "div", 46)(12, SanctionsComponent_div_79_div_12_Template, 23, 2, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r0.loadingCountries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingCountries);
  }
}
function SanctionsComponent_div_80_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 52);
    \u0275\u0275element(2, "circle", 53)(3, "path", 54);
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_80_div_22_tr_23_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r17.matchedName);
  }
}
function SanctionsComponent_div_80_div_22_tr_23_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_80_div_22_tr_23_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.getSourceBadgeClass(row_r17.matchedListSource));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r17.matchedListSource);
  }
}
function SanctionsComponent_div_80_div_22_tr_23_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_80_div_22_tr_23_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 159);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 160);
    \u0275\u0275element(2, "path", 154)(3, "path", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", row_r17.reviewedBy, " ");
  }
}
function SanctionsComponent_div_80_div_22_tr_23_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_80_div_22_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 103)(1, "td", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 64)(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 155);
    \u0275\u0275template(7, SanctionsComponent_div_80_div_22_tr_23_span_7_Template, 2, 1, "span", 156)(8, SanctionsComponent_div_80_div_22_tr_23_span_8_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 64);
    \u0275\u0275template(10, SanctionsComponent_div_80_div_22_tr_23_span_10_Template, 2, 2, "span", 67)(11, SanctionsComponent_div_80_div_22_tr_23_span_11_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 71);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 70);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 64);
    \u0275\u0275template(17, SanctionsComponent_div_80_div_22_tr_23_span_17_Template, 5, 1, "span", 157)(18, SanctionsComponent_div_80_div_22_tr_23_span_18_Template, 2, 0, "span", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 71);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 139);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r17.screenedName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r17.screenedType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r17.matchedName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r17.matchedName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r17.matchedListSource);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r17.matchedListSource);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getScorePercent(row_r17.matchScore));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r17.transactionId || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r17.reviewedBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r17.reviewedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r17.reviewedAt ? \u0275\u0275pipeBind2(21, 13, row_r17.reviewedAt, "short") : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", row_r17.reviewNotes || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r17.reviewNotes || "\u2014");
  }
}
function SanctionsComponent_div_80_div_22_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "path", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4, "No cleared names yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 83);
    \u0275\u0275text(6, 'Review flagged transactions and mark as "False Positive" to populate this list');
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_80_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "table", 56)(2, "thead")(3, "tr", 101)(4, "th", 58);
    \u0275\u0275text(5, "Screened Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 58);
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 58);
    \u0275\u0275text(9, "Matched Against");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 58);
    \u0275\u0275text(11, "List Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 58);
    \u0275\u0275text(13, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 58);
    \u0275\u0275text(15, "Transaction #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 58);
    \u0275\u0275text(17, "Reviewed By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 58);
    \u0275\u0275text(19, "Cleared On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 58);
    \u0275\u0275text(21, "Notes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, SanctionsComponent_div_80_div_22_tr_23_Template, 24, 16, "tr", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, SanctionsComponent_div_80_div_22_div_24_Template, 7, 0, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r0.whitelist);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.whitelist.length === 0);
  }
}
function SanctionsComponent_div_80_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86)(4, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_80_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onWhitelistPage({ pageIndex: 0, pageSize: ctx_r0.whitelistPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 88);
    \u0275\u0275element(6, "path", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_80_div_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onWhitelistPage({ pageIndex: ctx_r0.whitelistPage - 2, pageSize: ctx_r0.whitelistPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 88);
    \u0275\u0275element(9, "path", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 91);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_80_div_23_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onWhitelistPage({ pageIndex: ctx_r0.whitelistPage, pageSize: ctx_r0.whitelistPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 88);
    \u0275\u0275element(14, "path", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 87);
    \u0275\u0275listener("click", function SanctionsComponent_div_80_div_23_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onWhitelistPage({ pageIndex: ctx_r0.whitelistTotalPages - 1, pageSize: ctx_r0.whitelistPageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 88);
    \u0275\u0275element(17, "path", 93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Showing ", (ctx_r0.whitelistPage - 1) * ctx_r0.whitelistPageSize + 1, "\u2013", (ctx_r0.whitelistPage - 1) * ctx_r0.whitelistPageSize + ctx_r0.whitelist.length, " of ", ctx_r0.whitelistTotalCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.whitelistPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.whitelistPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.whitelistPage, " / ", ctx_r0.whitelistTotalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.whitelistPage >= ctx_r0.whitelistTotalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.whitelistPage >= ctx_r0.whitelistTotalPages);
  }
}
function SanctionsComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 120)(2, "div")(3, "h3", 38);
    \u0275\u0275text(4, "Whitelist \u2014 Cleared Names");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6, "Names reviewed and cleared as false positives against ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "any");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " list (manual or automatic). Includes the source list for each cleared match.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 43);
    \u0275\u0275element(12, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "input", 151);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_80_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.whitelistSearch, $event) || (ctx_r0.whitelistSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SanctionsComponent_div_80_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onWhitelistSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 152);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 153);
    \u0275\u0275element(16, "path", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div")(18, "strong");
    \u0275\u0275text(19, "Works with both lists.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, ' The "List Source" column shows whether each cleared match was from a manual entry, OFAC SDN, UN, EU, UK, or another automatic list. Future screenings will still run \u2014 this only records past compliance decisions. ');
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, SanctionsComponent_div_80_div_21_Template, 4, 0, "div", 46)(22, SanctionsComponent_div_80_div_22_Template, 25, 2, "div", 47)(23, SanctionsComponent_div_80_div_23_Template, 18, 9, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.whitelistSearch);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.loadingWhitelist);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingWhitelist);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingWhitelist && ctx_r0.whitelist.length > 0);
  }
}
function SanctionsComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275listener("click", function SanctionsComponent_div_81_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEntryForm());
    });
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_82_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r21 = ctx.$implicit;
    \u0275\u0275property("value", t_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r21);
  }
}
function SanctionsComponent_div_82_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
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
function SanctionsComponent_div_82_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r23 = ctx.$implicit;
    \u0275\u0275property("value", c_r23.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r23.name);
  }
}
function SanctionsComponent_div_82_ng_container_43_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r25 = ctx.$implicit;
    \u0275\u0275property("value", g_r25);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r25);
  }
}
function SanctionsComponent_div_82_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 186)(2, "p", 187);
    \u0275\u0275text(3, "Individual Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 173)(5, "div")(6, "label", 175);
    \u0275\u0275text(7, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 188);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_ng_container_43_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.dateOfBirth, $event) || (ctx_r0.entryForm.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 175);
    \u0275\u0275text(11, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 177);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_ng_container_43_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.gender, $event) || (ctx_r0.entryForm.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 130);
    \u0275\u0275text(14, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SanctionsComponent_div_82_ng_container_43_option_15_Template, 2, 2, "option", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 175);
    \u0275\u0275text(18, "Place of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 189);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_ng_container_43_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.placeOfBirth, $event) || (ctx_r0.entryForm.placeOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "label", 175);
    \u0275\u0275text(22, "ID / Passport Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 190);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_ng_container_43_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.idDocumentNumber, $event) || (ctx_r0.entryForm.idDocumentNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 174)(25, "label", 175);
    \u0275\u0275text(26, "Position / Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 191);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_ng_container_43_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.position, $event) || (ctx_r0.entryForm.position = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.dateOfBirth);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.gender);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.genderOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.placeOfBirth);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.idDocumentNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.position);
  }
}
function SanctionsComponent_div_82_ng_container_44_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r27 = ctx.$implicit;
    \u0275\u0275property("value", c_r27.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r27.name);
  }
}
function SanctionsComponent_div_82_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 186)(2, "p", 187);
    \u0275\u0275text(3, "Organization Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 173)(5, "div")(6, "label", 175);
    \u0275\u0275text(7, "Registration Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 192);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_ng_container_44_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.registrationNumber, $event) || (ctx_r0.entryForm.registrationNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 175);
    \u0275\u0275text(11, "Registration Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 177);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_ng_container_44_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.registrationCountry, $event) || (ctx_r0.entryForm.registrationCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 130);
    \u0275\u0275text(14, "\u2014 Select country \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SanctionsComponent_div_82_ng_container_44_option_15_Template, 2, 2, "option", 178);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.registrationNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.registrationCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.referenceCountries);
  }
}
function SanctionsComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165)(1, "div", 166)(2, "div", 167)(3, "h3", 168);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 169);
    \u0275\u0275listener("click", function SanctionsComponent_div_82_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEntryForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 170);
    \u0275\u0275element(7, "path", 171);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 172)(9, "div", 173)(10, "div", 174)(11, "label", 175);
    \u0275\u0275text(12, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 176);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.name, $event) || (ctx_r0.entryForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "label", 175);
    \u0275\u0275text(16, "Entry Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 177);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.entryType, $event) || (ctx_r0.entryForm.entryType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(18, SanctionsComponent_div_82_option_18_Template, 2, 2, "option", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 175);
    \u0275\u0275text(21, "List Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 177);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.listSource, $event) || (ctx_r0.entryForm.listSource = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(23, SanctionsComponent_div_82_option_23_Template, 2, 2, "option", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 174)(25, "label", 175);
    \u0275\u0275text(26, "Aliases (comma-separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 179);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.aliases, $event) || (ctx_r0.entryForm.aliases = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 174)(29, "label", 175);
    \u0275\u0275text(30, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 177);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_Template_select_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.nationality, $event) || (ctx_r0.entryForm.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(32, "option", 130);
    \u0275\u0275text(33, "\u2014 Select nationality \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, SanctionsComponent_div_82_option_34_Template, 2, 2, "option", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 174)(36, "label", 175);
    \u0275\u0275text(37, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 180);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.address, $event) || (ctx_r0.entryForm.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 174)(40, "label", 175);
    \u0275\u0275text(41, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 181);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_82_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entryForm.remarks, $event) || (ctx_r0.entryForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, SanctionsComponent_div_82_ng_container_43_Template, 28, 6, "ng-container", 156)(44, SanctionsComponent_div_82_ng_container_44_Template, 16, 3, "ng-container", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 182)(46, "button", 183);
    \u0275\u0275listener("click", function SanctionsComponent_div_82_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEntryForm());
    });
    \u0275\u0275text(47, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 184);
    \u0275\u0275listener("click", function SanctionsComponent_div_82_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveEntry());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.editingEntry ? "Edit" : "Add", " Manual Entry");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.entryType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.entryTypes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.listSource);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.listSources);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.aliases);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.nationality);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.referenceCountries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entryForm.remarks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.entryForm.entryType === "Individual");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.entryForm.entryType === "Organization");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.editingEntry ? "Update" : "Create");
  }
}
function SanctionsComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275listener("click", function SanctionsComponent_div_83_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCountryForm());
    });
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_84_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r30 = ctx.$implicit;
    \u0275\u0275property("value", c_r30.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r30.name);
  }
}
function SanctionsComponent_div_84_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r31 = ctx.$implicit;
    \u0275\u0275property("value", t_r31);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r31);
  }
}
function SanctionsComponent_div_84_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r32 = ctx.$implicit;
    \u0275\u0275property("value", r_r32);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r32);
  }
}
function SanctionsComponent_div_84_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r33 = ctx.$implicit;
    \u0275\u0275property("value", s_r33);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r33);
  }
}
function SanctionsComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165)(1, "div", 193)(2, "div", 167)(3, "h3", 168);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 169);
    \u0275\u0275listener("click", function SanctionsComponent_div_84_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCountryForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 170);
    \u0275\u0275element(7, "path", 171);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 172)(9, "div", 173)(10, "div", 174)(11, "label", 175);
    \u0275\u0275text(12, "Select Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 194);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_84_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.countryForm.countryName, $event) || (ctx_r0.countryForm.countryName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SanctionsComponent_div_84_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCountrySelected($event));
    });
    \u0275\u0275template(14, SanctionsComponent_div_84_option_14_Template, 2, 2, "option", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 175);
    \u0275\u0275text(17, "Sanction Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 177);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_84_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.countryForm.sanctionType, $event) || (ctx_r0.countryForm.sanctionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(19, SanctionsComponent_div_84_option_19_Template, 2, 2, "option", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "label", 175);
    \u0275\u0275text(22, "Risk Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 177);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_84_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.countryForm.riskLevel, $event) || (ctx_r0.countryForm.riskLevel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(24, SanctionsComponent_div_84_option_24_Template, 2, 2, "option", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 174)(26, "label", 175);
    \u0275\u0275text(27, "List Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 177);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_84_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.countryForm.listSource, $event) || (ctx_r0.countryForm.listSource = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(29, SanctionsComponent_div_84_option_29_Template, 2, 2, "option", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 174)(31, "label", 175);
    \u0275\u0275text(32, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "textarea", 181);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_84_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.countryForm.remarks, $event) || (ctx_r0.countryForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 182)(35, "button", 183);
    \u0275\u0275listener("click", function SanctionsComponent_div_84_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCountryForm());
    });
    \u0275\u0275text(36, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 184);
    \u0275\u0275listener("click", function SanctionsComponent_div_84_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveCountry());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.editingCountry ? "Edit" : "Add", " Sanctioned Country");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.countryForm.countryName);
    \u0275\u0275property("disabled", !!ctx_r0.editingCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.referenceCountries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.countryForm.sanctionType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.sanctionTypes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.countryForm.riskLevel);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.riskLevels);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.countryForm.listSource);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.listSources);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.countryForm.remarks);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.editingCountry ? "Update" : "Add");
  }
}
function SanctionsComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275listener("click", function SanctionsComponent_div_85_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeReviewForm());
    });
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_div_86_div_9_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 209);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.getSourceBadgeClass(ctx_r0.reviewingScreening.matchedListSource));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.reviewingScreening.matchedListSource);
  }
}
function SanctionsComponent_div_86_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 204)(1, "p")(2, "span", 205);
    \u0275\u0275text(3, "Screened");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 206);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 207);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p")(9, "span", 205);
    \u0275\u0275text(10, "Matched");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 206);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SanctionsComponent_div_86_div_9_span_13_Template, 2, 2, "span", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p")(15, "span", 205);
    \u0275\u0275text(16, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 78);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.reviewingScreening.screenedName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r0.reviewingScreening.screenedType, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.reviewingScreening.matchedName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reviewingScreening.matchedListSource);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getScorePercent(ctx_r0.reviewingScreening.matchScore));
  }
}
function SanctionsComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165)(1, "div", 195)(2, "div", 196)(3, "h3", 197);
    \u0275\u0275text(4, "Review Screening Match");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 198);
    \u0275\u0275listener("click", function SanctionsComponent_div_86_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeReviewForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 170);
    \u0275\u0275element(7, "path", 171);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 199);
    \u0275\u0275template(9, SanctionsComponent_div_86_div_9_Template, 19, 5, "div", 200);
    \u0275\u0275elementStart(10, "div")(11, "label", 175);
    \u0275\u0275text(12, "Decision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 177);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_86_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reviewForm.status, $event) || (ctx_r0.reviewForm.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 201);
    \u0275\u0275text(15, "Confirmed Match \u2014 block transaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 202);
    \u0275\u0275text(17, "False Positive \u2014 clear and whitelist");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div")(19, "label", 175);
    \u0275\u0275text(20, "Review Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 203);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_86_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reviewForm.reviewNotes, $event) || (ctx_r0.reviewForm.reviewNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 182)(23, "button", 183);
    \u0275\u0275listener("click", function SanctionsComponent_div_86_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeReviewForm());
    });
    \u0275\u0275text(24, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 184);
    \u0275\u0275listener("click", function SanctionsComponent_div_86_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitReview());
    });
    \u0275\u0275text(26, "Submit Review");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.reviewingScreening);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reviewForm.status);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reviewForm.reviewNotes);
  }
}
var SanctionsComponent = class _SanctionsComponent {
  constructor(api, notify, confirmDelete) {
    this.api = api;
    this.notify = notify;
    this.confirmDelete = confirmDelete;
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
    this.flagged = [];
    this.flaggedTotalCount = 0;
    this.flaggedPage = 1;
    this.flaggedPageSize = 20;
    this.flaggedSearch = "";
    this.loadingFlagged = false;
    this.ingested = [];
    this.ingestedTotalCount = 0;
    this.ingestedPage = 1;
    this.ingestedPageSize = 50;
    this.ingestedSearch = "";
    this.ingestedSourceFilter = "";
    this.loadingIngested = false;
    this.ingestedSources = ["", "OFAC_SDN", "OFAC_CONS", "UN", "EU", "UK"];
    this.whitelist = [];
    this.whitelistTotalCount = 0;
    this.whitelistPage = 1;
    this.whitelistPageSize = 20;
    this.whitelistSearch = "";
    this.loadingWhitelist = false;
    this.showEntryForm = false;
    this.editingEntry = null;
    this.entryForm = {
      name: "",
      entryType: "Individual",
      listSource: "Custom",
      aliases: "",
      nationality: "",
      remarks: "",
      // Individual-specific
      dateOfBirth: "",
      placeOfBirth: "",
      gender: "",
      position: "",
      idDocumentNumber: "",
      // Organization-specific
      registrationNumber: "",
      registrationCountry: "",
      // All types
      address: ""
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
    this.genderOptions = ["Male", "Female", "Unknown"];
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
    this.loadFlagged();
    this.loadWhitelist();
    this.loadIngested();
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
        remarks: entry.remarks || "",
        dateOfBirth: entry.dateOfBirth ? entry.dateOfBirth.substring(0, 10) : "",
        placeOfBirth: entry.placeOfBirth || "",
        gender: entry.gender || "",
        position: entry.position || "",
        idDocumentNumber: entry.idDocumentNumber || "",
        registrationNumber: entry.registrationNumber || "",
        registrationCountry: entry.registrationCountry || "",
        address: entry.address || ""
      };
    } else {
      this.entryForm = {
        name: "",
        entryType: "Individual",
        listSource: "Custom",
        aliases: "",
        nationality: "",
        remarks: "",
        dateOfBirth: "",
        placeOfBirth: "",
        gender: "",
        position: "",
        idDocumentNumber: "",
        registrationNumber: "",
        registrationCountry: "",
        address: ""
      };
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
    this.confirmDelete.confirm(entry.name).then(() => {
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
    }).catch(() => {
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
    this.confirmDelete.confirm(country.countryName).then(() => {
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
    }).catch(() => {
    });
  }
  // ---- Flagged Transactions (PotentialMatch) ----
  loadFlagged() {
    this.loadingFlagged = true;
    this.api.getScreeningResultsPaged({ page: this.flaggedPage, pageSize: this.flaggedPageSize, search: this.flaggedSearch }, "PotentialMatch").pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.flagged = res.data.items || [];
          this.flaggedTotalCount = res.data.totalCount || 0;
        }
        this.loadingFlagged = false;
      },
      error: () => this.loadingFlagged = false
    });
  }
  onFlaggedSearch() {
    if (this.searchTimer)
      clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.flaggedPage = 1;
      this.loadFlagged();
    }, 400);
  }
  onFlaggedPage(event) {
    this.flaggedPage = event.pageIndex + 1;
    this.flaggedPageSize = event.pageSize;
    this.loadFlagged();
  }
  // ---- Whitelist (FalsePositive) ----
  loadWhitelist() {
    this.loadingWhitelist = true;
    this.api.getScreeningResultsPaged({ page: this.whitelistPage, pageSize: this.whitelistPageSize, search: this.whitelistSearch }, "FalsePositive").pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.whitelist = res.data.items || [];
          this.whitelistTotalCount = res.data.totalCount || 0;
        }
        this.loadingWhitelist = false;
      },
      error: () => this.loadingWhitelist = false
    });
  }
  onWhitelistSearch() {
    if (this.searchTimer)
      clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.whitelistPage = 1;
      this.loadWhitelist();
    }, 400);
  }
  onWhitelistPage(event) {
    this.whitelistPage = event.pageIndex + 1;
    this.whitelistPageSize = event.pageSize;
    this.loadWhitelist();
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
          this.loadFlagged();
          this.loadWhitelist();
          this.loadDashboard();
        } else {
          this.notify.error(res?.message || "Failed");
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  // ---- Ingested Entries ----
  loadIngested() {
    this.loadingIngested = true;
    this.api.getIngestedEntriesPaged({
      page: this.ingestedPage,
      pageSize: this.ingestedPageSize,
      search: this.ingestedSearch || void 0,
      source: this.ingestedSourceFilter || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.ingested = res.data.items || [];
          this.ingestedTotalCount = res.data.totalCount || 0;
        }
        this.loadingIngested = false;
      },
      error: () => this.loadingIngested = false
    });
  }
  onIngestedSearch() {
    if (this.searchTimer)
      clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.ingestedPage = 1;
      this.loadIngested();
    }, 400);
  }
  onIngestedSourceChange() {
    this.ingestedPage = 1;
    this.loadIngested();
  }
  onIngestedPage(event) {
    this.ingestedPage = event.pageIndex + 1;
    this.ingestedPageSize = event.pageSize;
    this.loadIngested();
  }
  get ingestedTotalPages() {
    return Math.ceil(this.ingestedTotalCount / this.ingestedPageSize) || 1;
  }
  getSourceBadgeClass(source) {
    switch (source) {
      case "OFAC_SDN":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800/50";
      case "OFAC_CONS":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800/50";
      case "UN":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800/50";
      case "EU":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/50";
      case "UK":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800/50";
      default:
        return "bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-300";
    }
  }
  parseAliasNames(aliasJson) {
    if (!aliasJson)
      return "-";
    try {
      const arr = JSON.parse(aliasJson);
      return arr.map((a) => a.name).filter(Boolean).join(", ") || "-";
    } catch {
      return "-";
    }
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
  get flaggedTotalPages() {
    return Math.ceil(this.flaggedTotalCount / this.flaggedPageSize) || 1;
  }
  get whitelistTotalPages() {
    return Math.ceil(this.whitelistTotalCount / this.whitelistPageSize) || 1;
  }
  static {
    this.\u0275fac = function SanctionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SanctionsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ConfirmDeleteService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SanctionsComponent, selectors: [["app-sanctions"]], decls: 87, vars: 27, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mt-0.5"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-soft", "p-5", "border", "border-surface-200", "dark:border-surface-700", "flex", "items-center", "gap-4"], [1, "w-11", "h-11", "rounded-xl", "bg-blue-50", "dark:bg-blue-900/20", "text-blue-600", "dark:text-blue-400", "flex", "items-center", "justify-center", "shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "text-xl", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "font-medium", "text-surface-500", "uppercase", "tracking-wider"], [1, "w-11", "h-11", "rounded-xl", "bg-indigo-50", "dark:bg-indigo-900/20", "text-indigo-600", "dark:text-indigo-400", "flex", "items-center", "justify-center", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "w-11", "h-11", "rounded-xl", "bg-green-50", "dark:bg-green-900/20", "text-green-600", "dark:text-green-400", "flex", "items-center", "justify-center", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-soft", "p-5", "border", "border-amber-200", "dark:border-amber-800/50", "flex", "items-center", "gap-4", "relative", "overflow-hidden"], [1, "absolute", "right-0", "top-0", "bottom-0", "w-1", "bg-amber-500"], [1, "w-11", "h-11", "rounded-xl", "bg-amber-50", "dark:bg-amber-900/20", "text-amber-600", "dark:text-amber-400", "flex", "items-center", "justify-center", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], ["role", "tablist", "aria-label", "Sanctions tabs", 1, "bg-white", "dark:bg-surface-800", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "shadow-soft", "p-1.5", "flex", "flex-wrap", "gap-1"], ["role", "tab", 1, "relative", "px-5", "py-2.5", "rounded-lg", "text-sm", "font-medium", "transition-all", "flex-1", "text-center", "flex", "items-center", "justify-center", "gap-2", 3, "click", "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4", "shrink-0"], ["class", "inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold", 3, "ngClass", 4, "ngIf"], ["class", "absolute top-1.5 right-2 flex w-2 h-2", 4, "ngIf"], ["role", "tab", 1, "px-5", "py-2.5", "rounded-lg", "text-sm", "font-medium", "transition-all", "flex-1", "text-center", "flex", "items-center", "justify-center", "gap-2", 3, "click", "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], [1, "hidden", "sm:inline-flex", "items-center", "gap-0.5", "text-xs", "font-medium", "opacity-60"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "shadow-soft", "overflow-hidden"], ["class", "p-6", 4, "ngIf"], ["class", "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], [1, "inline-flex", "items-center", "justify-center", "w-5", "h-5", "rounded-full", "text-xs", "font-bold", 3, "ngClass"], [1, "absolute", "top-1.5", "right-2", "flex", "w-2", "h-2"], [1, "animate-ping", "absolute", "inline-flex", "h-full", "w-full", "rounded-full", "bg-amber-400", "opacity-75"], [1, "relative", "inline-flex", "rounded-full", "w-2", "h-2", "bg-amber-500"], [1, "p-6"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-base", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mt-0.5"], [1, "flex", "items-center", "gap-3", "shrink-0"], ["class", "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 text-sm font-semibold", 4, "ngIf"], [1, "relative", "w-full", "max-w-sm", "mb-5"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search flagged transactions...", 1, "w-full", "pl-10", "pr-3", "py-2", "text-sm", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], ["class", "flex justify-center p-12", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-800/50", "text-amber-700", "dark:text-amber-400", "text-sm", "font-semibold"], [1, "w-2", "h-2", "rounded-full", "bg-amber-500", "animate-pulse"], [1, "flex", "justify-center", "p-12"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "whitespace-nowrap"], [1, "border-y", "border-surface-200", "dark:border-surface-700", "bg-amber-50/60", "dark:bg-amber-900/10", "text-surface-600", "dark:text-surface-300"], [1, "px-4", "py-3", "font-semibold"], [1, "px-4", "py-3", "font-semibold", "text-right"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-amber-50/30 dark:hover:bg-amber-900/5 transition-colors", 4, "ngFor", "ngForOf"], ["class", "flex flex-col items-center justify-center py-14 text-surface-400 dark:text-surface-500", 4, "ngIf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-amber-50/30", "dark:hover:bg-amber-900/5", "transition-colors"], [1, "px-4", "py-3", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-medium", "bg-surface-100", "dark:bg-surface-700", "border", "border-surface-200", "dark:border-surface-600"], [1, "px-4", "py-3", "font-medium", "text-red-700", "dark:text-red-400"], ["class", "inline-flex px-2 py-0.5 rounded text-xs font-bold border", 3, "ngClass", 4, "ngIf"], ["class", "text-surface-400", 4, "ngIf"], ["class", "font-bold text-red-600 dark:text-red-400", 4, "ngIf"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-300", "font-mono", "text-xs"], [1, "px-4", "py-3", "text-surface-500", "text-xs"], [1, "px-4", "py-3", "text-right"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "bg-amber-100", "text-amber-800", "hover:bg-amber-200", "dark:bg-amber-900/30", "dark:text-amber-300", "dark:hover:bg-amber-900/50", "text-xs", "font-semibold", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-bold", "border", 3, "ngClass"], [1, "text-surface-400"], [1, "font-bold", "text-red-600", "dark:text-red-400"], [1, "flex", "flex-col", "items-center", "justify-center", "py-14", "text-surface-400", "dark:text-surface-500"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "mb-3", "opacity-40"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "font-medium"], [1, "text-xs", "mt-1", "opacity-75"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "mt-4", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "text-sm", "text-surface-500"], [1, "flex", "items-center", "gap-2"], [1, "p-1.5", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "disabled:opacity-40", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M11 19l-7-7 7-7m8 14l-7-7 7-7"], ["d", "M15 19l-7-7 7-7"], [1, "text-sm", "px-2"], ["d", "M9 5l7 7-7 7"], ["d", "M13 5l7 7-7 7M5 5l7 7-7 7"], [1, "flex", "items-center", "gap-2", "shrink-0"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-2", "border", "border-surface-300", "dark:border-surface-600", "rounded-lg", "text-sm", "font-medium", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition", "text-surface-700", "dark:text-surface-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "bg-brand-600", "text-white", "rounded-lg", "text-sm", "font-semibold", "hover:bg-brand-700", "transition", "shadow-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], ["type", "text", "placeholder", "Search manual entries...", 1, "w-full", "pl-10", "pr-3", "py-2", "text-sm", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], [1, "border-y", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-900/50", "text-surface-600", "dark:text-surface-300"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-medium", "bg-purple-50", "text-purple-700", "border", "border-purple-200", "dark:bg-purple-900/20", "dark:text-purple-300", "dark:border-purple-800/50"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-300", "text-xs"], [1, "px-4", "py-3", "text-surface-500", "text-xs", "truncate", "max-w-xs"], [1, "inline-flex", "px-2", "py-0.5", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "flex", "items-center", "justify-end", "gap-1"], ["title", "Edit", 1, "p-1.5", "rounded-lg", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", 3, "click"], ["d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "p-1.5", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click", "title", "ngClass"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z", 4, "ngIf"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z", 4, "ngIf"], ["title", "Delete", 1, "p-1.5", "rounded-lg", "text-red-500", "hover:bg-red-50", "dark:hover:bg-red-900/20", "transition", 3, "click"], ["d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4", "mb-5"], [1, "hidden", "lg:inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-bold", "border", "bg-red-100", "text-red-800", "border-red-200", "dark:bg-red-900/30", "dark:text-red-400", "dark:border-red-800/50"], [1, "hidden", "lg:inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-bold", "border", "bg-orange-100", "text-orange-800", "border-orange-200", "dark:bg-orange-900/30", "dark:text-orange-400", "dark:border-orange-800/50"], [1, "hidden", "lg:inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-bold", "border", "bg-blue-100", "text-blue-800", "border-blue-200", "dark:bg-blue-900/30", "dark:text-blue-400", "dark:border-blue-800/50"], [1, "hidden", "lg:inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-bold", "border", "bg-indigo-100", "text-indigo-800", "border-indigo-200", "dark:bg-indigo-900/30", "dark:text-indigo-400", "dark:border-indigo-800/50"], [1, "hidden", "lg:inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-bold", "border", "bg-purple-100", "text-purple-800", "border-purple-200", "dark:bg-purple-900/30", "dark:text-purple-400", "dark:border-purple-800/50"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "gap-3", "mb-5"], [1, "relative", "flex-1", "max-w-sm"], ["type", "text", "placeholder", "Search by name, nationality, programme...", 1, "w-full", "pl-10", "pr-3", "py-2", "text-sm", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], [1, "px-3", "py-2", "text-sm", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "OFAC_SDN"], ["value", "OFAC_CONS"], ["value", "UN"], ["value", "EU"], ["value", "UK"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "whitespace-nowrap", "font-medium"], [1, "px-4", "py-3", "font-semibold", "text-surface-900", "dark:text-surface-100", "max-w-xs"], ["class", "inline-flex px-2 py-0.5 rounded text-xs font-medium bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300", 4, "ngIf"], [1, "px-4", "py-3", "text-surface-500", "text-xs", "max-w-xs", "truncate", 3, "title"], [1, "px-4", "py-3", "text-surface-500", "text-xs", "max-w-xs", "truncate"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-medium", "bg-surface-100", "dark:bg-surface-700", "text-surface-600", "dark:text-surface-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], [1, "flex", "items-center", "justify-between", "gap-4", "mb-6"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "bg-brand-600", "text-white", "rounded-lg", "text-sm", "font-semibold", "hover:bg-brand-700", "transition", "shadow-sm", "shrink-0", 3, "click"], [1, "px-4", "py-3", "font-semibold", "w-24"], [1, "px-4", "py-3", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "font-medium", "text-surface-900", "dark:text-surface-100"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-semibold", "border", 3, "ngClass"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-xs", "font-semibold", 3, "title", "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["type", "text", "placeholder", "Search whitelist...", 1, "w-full", "pl-10", "pr-3", "py-2", "text-sm", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], [1, "flex", "items-start", "gap-3", "p-3.5", "mb-5", "rounded-xl", "bg-green-50", "dark:bg-green-900/10", "border", "border-green-200", "dark:border-green-800/40", "text-xs", "text-green-800", "dark:text-green-400"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "shrink-0", "mt-0.5"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-300"], [4, "ngIf"], ["class", "inline-flex items-center gap-1 text-green-700 dark:text-green-400 text-xs font-medium", 4, "ngIf"], ["class", "text-surface-400 text-xs", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1", "text-green-700", "dark:text-green-400", "text-xs", "font-medium"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "shrink-0"], ["fill", "#fff", "d", "M10 16l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8z"], [1, "text-surface-400", "text-xs"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "fixed", "inset-0", "z-50", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-xl", "pointer-events-auto", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "p-1", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-surface-400", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6", "space-y-4", "overflow-y-auto"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "sm:col-span-2"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], ["type", "text", "placeholder", "Full name or organization", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "e.g. AKA Name 1, AKA Name 2", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Partial address for disambiguation", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-lg", "transition", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "bg-brand-600", "text-white", "rounded-lg", "hover:bg-brand-700", "transition", "shadow-sm", 3, "click"], [3, "value"], [1, "pt-3", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "text-xs", "font-semibold", "text-surface-500", "dark:text-surface-400", "uppercase", "tracking-wider", "mb-3"], ["type", "date", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "City or country", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Passport or national ID", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Minister of Finance", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Company / charity reg. number", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-lg", "pointer-events-auto", "max-h-[90vh]", "flex", "flex-col"], [1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", "disabled:opacity-50", 3, "ngModelChange", "ngModel", "disabled"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "pointer-events-auto", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-amber-200", "dark:border-amber-900/30", "bg-amber-50", "dark:bg-amber-900/10", "rounded-t-2xl"], [1, "text-lg", "font-semibold", "text-amber-800", "dark:text-amber-400"], [1, "p-1", "rounded-lg", "hover:bg-amber-200", "dark:hover:bg-amber-800/50", "text-amber-600", "dark:text-amber-400", "transition", 3, "click"], [1, "p-6", "space-y-4"], ["class", "p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 text-sm space-y-2", 4, "ngIf"], ["value", "ConfirmedMatch"], ["value", "FalsePositive"], ["rows", "3", "placeholder", "Reason for decision...", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "p-4", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-900/50", "text-sm", "space-y-2"], [1, "text-surface-500", "font-medium", "inline-block", "w-20", "text-xs", "uppercase", "tracking-wide"], [1, "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-surface-500", "text-xs"], ["class", "ml-2 inline-flex px-1.5 py-0.5 rounded text-xs font-bold border", 3, "ngClass", 4, "ngIf"], [1, "ml-2", "inline-flex", "px-1.5", "py-0.5", "rounded", "text-xs", "font-bold", "border", 3, "ngClass"]], template: function SanctionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        \u0275\u0275text(4, "Sanctions Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "OFAC \xB7 UN \xB7 EU \xB7 UK \xB7 Custom lists \u2014 screening and review");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 7);
        \u0275\u0275element(11, "path", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "div")(13, "p", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 10);
        \u0275\u0275text(16, "Manual Entries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 5)(18, "div", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(19, "svg", 7);
        \u0275\u0275element(20, "path", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(21, "div")(22, "p", 9);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 10);
        \u0275\u0275text(25, "Sanctioned Countries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 5)(27, "div", 13);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(28, "svg", 7);
        \u0275\u0275element(29, "path", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(30, "div")(31, "p", 9);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p", 10);
        \u0275\u0275text(34, "Total Screenings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 15);
        \u0275\u0275element(36, "div", 16);
        \u0275\u0275elementStart(37, "div", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 7);
        \u0275\u0275element(39, "path", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(40, "div")(41, "p", 9);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p", 10);
        \u0275\u0275text(44, "Pending Review");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "div", 19)(46, "button", 20);
        \u0275\u0275listener("click", function SanctionsComponent_Template_button_click_46_listener() {
          return ctx.onTabChange(0);
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(47, "svg", 21);
        \u0275\u0275element(48, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(49, "span");
        \u0275\u0275text(50, "Flagged");
        \u0275\u0275elementEnd();
        \u0275\u0275template(51, SanctionsComponent_span_51_Template, 2, 2, "span", 22)(52, SanctionsComponent_span_52_Template, 3, 0, "span", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 24);
        \u0275\u0275listener("click", function SanctionsComponent_Template_button_click_53_listener() {
          return ctx.onTabChange(1);
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(54, "svg", 21);
        \u0275\u0275element(55, "path", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(56, "span");
        \u0275\u0275text(57, "Manual List");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "button", 24);
        \u0275\u0275listener("click", function SanctionsComponent_Template_button_click_58_listener() {
          return ctx.onTabChange(2);
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(59, "svg", 21);
        \u0275\u0275element(60, "path", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(61, "span");
        \u0275\u0275text(62, "Auto Lists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "span", 27);
        \u0275\u0275text(64, "OFAC \xB7 UN \xB7 EU \xB7 UK");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "button", 24);
        \u0275\u0275listener("click", function SanctionsComponent_Template_button_click_65_listener() {
          return ctx.onTabChange(3);
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(66, "svg", 21);
        \u0275\u0275element(67, "path", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(68, "span");
        \u0275\u0275text(69, "Countries");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "button", 24);
        \u0275\u0275listener("click", function SanctionsComponent_Template_button_click_70_listener() {
          return ctx.onTabChange(4);
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(71, "svg", 21);
        \u0275\u0275element(72, "path", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(73, "span");
        \u0275\u0275text(74, "Whitelist");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "div", 28);
        \u0275\u0275template(76, SanctionsComponent_div_76_Template, 16, 5, "div", 29)(77, SanctionsComponent_div_77_Template, 23, 4, "div", 29)(78, SanctionsComponent_div_78_Template, 42, 8, "div", 29)(79, SanctionsComponent_div_79_Template, 13, 2, "div", 29)(80, SanctionsComponent_div_80_Template, 24, 4, "div", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(81, SanctionsComponent_div_81_Template, 1, 0, "div", 30)(82, SanctionsComponent_div_82_Template, 50, 14, "div", 31)(83, SanctionsComponent_div_83_Template, 1, 0, "div", 30)(84, SanctionsComponent_div_84_Template, 39, 12, "div", 31)(85, SanctionsComponent_div_85_Template, 1, 0, "div", 30)(86, SanctionsComponent_div_86_Template, 27, 3, "div", 31);
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.dashboard.activeSanctionEntries || 0);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.dashboard.activeSanctionedCountries || 0);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.dashboard.totalScreenings || 0);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.dashboard.pendingReview || 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", ctx.activeTab === 0 ? "bg-amber-500 text-white shadow-sm" : "text-surface-600 dark:text-surface-400 hover:bg-amber-50 dark:hover:bg-amber-900/10 hover:text-amber-700 dark:hover:text-amber-400");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === 0);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.dashboard.pendingReview > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dashboard.pendingReview > 0 && ctx.activeTab !== 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.activeTab === 1 ? "bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400" : "text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === 1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", ctx.activeTab === 2 ? "bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400" : "text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === 2);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngClass", ctx.activeTab === 3 ? "bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400" : "text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === 3);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", ctx.activeTab === 4 ? "bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400" : "text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === 4);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.activeTab === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === 3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === 4);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=sanctions.component.css.map */"] });
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
  <!-- Header -->
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100">Sanctions Management</h2>
      <p class="text-sm text-surface-500 dark:text-surface-400 mt-0.5">OFAC \xB7 UN \xB7 EU \xB7 UK \xB7 Custom lists \u2014 screening and review</p>
    </div>
  </div>

  <!-- Dashboard Cards -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-soft p-5 border border-surface-200 dark:border-surface-700 flex items-center gap-4">
      <div class="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
      </div>
      <div>
        <p class="text-xl font-bold text-surface-900 dark:text-surface-100">{{ dashboard.activeSanctionEntries || 0 }}</p>
        <p class="text-xs font-medium text-surface-500 uppercase tracking-wider">Manual Entries</p>
      </div>
    </div>
    <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-soft p-5 border border-surface-200 dark:border-surface-700 flex items-center gap-4">
      <div class="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <div>
        <p class="text-xl font-bold text-surface-900 dark:text-surface-100">{{ dashboard.activeSanctionedCountries || 0 }}</p>
        <p class="text-xs font-medium text-surface-500 uppercase tracking-wider">Sanctioned Countries</p>
      </div>
    </div>
    <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-soft p-5 border border-surface-200 dark:border-surface-700 flex items-center gap-4">
      <div class="w-11 h-11 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <div>
        <p class="text-xl font-bold text-surface-900 dark:text-surface-100">{{ dashboard.totalScreenings || 0 }}</p>
        <p class="text-xs font-medium text-surface-500 uppercase tracking-wider">Total Screenings</p>
      </div>
    </div>
    <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-soft p-5 border border-amber-200 dark:border-amber-800/50 flex items-center gap-4 relative overflow-hidden">
      <div class="absolute right-0 top-0 bottom-0 w-1 bg-amber-500"></div>
      <div class="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      </div>
      <div>
        <p class="text-xl font-bold text-surface-900 dark:text-surface-100">{{ dashboard.pendingReview || 0 }}</p>
        <p class="text-xs font-medium text-surface-500 uppercase tracking-wider">Pending Review</p>
      </div>
    </div>
  </div>

  <!-- Tab Navigation -->
  <div role="tablist" aria-label="Sanctions tabs" class="bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 shadow-soft p-1.5 flex flex-wrap gap-1">

    <!-- Tab 0: Flagged Transactions \u2014 shown first, highest urgency -->
    <button role="tab" [attr.aria-selected]="activeTab === 0" (click)="onTabChange(0)"
      class="relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 text-center flex items-center justify-center gap-2"
      [ngClass]="activeTab === 0
        ? 'bg-amber-500 text-white shadow-sm'
        : 'text-surface-600 dark:text-surface-400 hover:bg-amber-50 dark:hover:bg-amber-900/10 hover:text-amber-700 dark:hover:text-amber-400'">
      <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      <span>Flagged</span>
      <span *ngIf="dashboard.pendingReview > 0"
        class="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
        [ngClass]="activeTab === 0 ? 'bg-white/30 text-white' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'">
        {{ dashboard.pendingReview > 99 ? '99+' : dashboard.pendingReview }}
      </span>
      <span *ngIf="dashboard.pendingReview > 0 && activeTab !== 0" class="absolute top-1.5 right-2 flex w-2 h-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full w-2 h-2 bg-amber-500"></span>
      </span>
    </button>

    <!-- Tab 1: Manual Sanction List -->
    <button role="tab" [attr.aria-selected]="activeTab === 1" (click)="onTabChange(1)"
      class="px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 text-center flex items-center justify-center gap-2"
      [ngClass]="activeTab === 1
        ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400'
        : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750'">
      <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
      <span>Manual List</span>
    </button>

    <!-- Tab 2: Auto-Ingested Lists -->
    <button role="tab" [attr.aria-selected]="activeTab === 2" (click)="onTabChange(2)"
      class="px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 text-center flex items-center justify-center gap-2"
      [ngClass]="activeTab === 2
        ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400'
        : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750'">
      <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
      <span>Auto Lists</span>
      <span class="hidden sm:inline-flex items-center gap-0.5 text-xs font-medium opacity-60">OFAC \xB7 UN \xB7 EU \xB7 UK</span>
    </button>

    <!-- Tab 3: Sanctioned Countries -->
    <button role="tab" [attr.aria-selected]="activeTab === 3" (click)="onTabChange(3)"
      class="px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 text-center flex items-center justify-center gap-2"
      [ngClass]="activeTab === 3
        ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400'
        : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750'">
      <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <span>Countries</span>
    </button>

    <!-- Tab 4: Whitelist -->
    <button role="tab" [attr.aria-selected]="activeTab === 4" (click)="onTabChange(4)"
      class="px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 text-center flex items-center justify-center gap-2"
      [ngClass]="activeTab === 4
        ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400'
        : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-750'">
      <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      <span>Whitelist</span>
    </button>
  </div>

  <!-- Tab Content Container -->
  <div class="bg-white dark:bg-surface-800 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-soft overflow-hidden">

    <!-- \u2500\u2500\u2500 Tab 0: Flagged Transactions \u2500\u2500\u2500 -->
    <div *ngIf="activeTab === 0" class="p-6">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Flagged Transactions</h3>
          <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">Transactions matched against any sanction list (manual or automatic). Review each match and mark as confirmed or false positive.</p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <span *ngIf="flaggedTotalCount > 0" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 text-sm font-semibold">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            {{ flaggedTotalCount }} pending
          </span>
        </div>
      </div>

      <!-- Search -->
      <div class="relative w-full max-w-sm mb-5">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <input type="text" placeholder="Search flagged transactions..." [(ngModel)]="flaggedSearch" (ngModelChange)="onFlaggedSearch()"
          class="w-full pl-10 pr-3 py-2 text-sm rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition" />
      </div>

      <div *ngIf="loadingFlagged" class="flex justify-center p-12">
        <svg class="animate-spin h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
      </div>

      <div *ngIf="!loadingFlagged" class="overflow-x-auto">
        <table class="w-full text-sm text-left whitespace-nowrap">
          <thead>
            <tr class="border-y border-surface-200 dark:border-surface-700 bg-amber-50/60 dark:bg-amber-900/10 text-surface-600 dark:text-surface-300">
              <th class="px-4 py-3 font-semibold">Screened Name</th>
              <th class="px-4 py-3 font-semibold">Type</th>
              <th class="px-4 py-3 font-semibold">Matched Against</th>
              <th class="px-4 py-3 font-semibold">List Source</th>
              <th class="px-4 py-3 font-semibold">Score</th>
              <th class="px-4 py-3 font-semibold">Transaction #</th>
              <th class="px-4 py-3 font-semibold">Flagged</th>
              <th class="px-4 py-3 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of flagged" class="border-b border-surface-100 dark:border-surface-700 hover:bg-amber-50/30 dark:hover:bg-amber-900/5 transition-colors">
              <td class="px-4 py-3 font-semibold text-surface-900 dark:text-surface-100">{{ row.screenedName }}</td>
              <td class="px-4 py-3"><span class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-surface-100 dark:bg-surface-700 border border-surface-200 dark:border-surface-600">{{ row.screenedType }}</span></td>
              <td class="px-4 py-3 font-medium text-red-700 dark:text-red-400">{{ row.matchedName || '\u2014' }}</td>
              <td class="px-4 py-3">
                <span *ngIf="row.matchedListSource" class="inline-flex px-2 py-0.5 rounded text-xs font-bold border" [ngClass]="getSourceBadgeClass(row.matchedListSource)">{{ row.matchedListSource }}</span>
                <span *ngIf="!row.matchedListSource" class="text-surface-400">\u2014</span>
              </td>
              <td class="px-4 py-3">
                <span *ngIf="row.matchScore" class="font-bold text-red-600 dark:text-red-400">{{ getScorePercent(row.matchScore) }}</span>
                <span *ngIf="!row.matchScore" class="text-surface-400">\u2014</span>
              </td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300 font-mono text-xs">{{ row.transactionId || '\u2014' }}</td>
              <td class="px-4 py-3 text-surface-500 text-xs">{{ row.createdAt | date:'short' }}</td>
              <td class="px-4 py-3 text-right">
                <button (click)="openReviewForm(row)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:bg-amber-900/50 text-xs font-semibold transition-colors">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                  Review
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div *ngIf="flagged.length === 0" class="flex flex-col items-center justify-center py-14 text-surface-400 dark:text-surface-500">
          <svg class="w-12 h-12 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <p class="font-medium">No flagged transactions pending review</p>
          <p class="text-xs mt-1 opacity-75">All screenings are clear or have been reviewed</p>
        </div>
      </div>
      <!-- Flagged Pagination -->
      <div *ngIf="!loadingFlagged && flagged.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
        <span class="text-sm text-surface-500">Showing {{ (flaggedPage - 1) * flaggedPageSize + 1 }}&ndash;{{ (flaggedPage - 1) * flaggedPageSize + flagged.length }} of {{ flaggedTotalCount }}</span>
        <div class="flex items-center gap-2">
          <button (click)="onFlaggedPage({pageIndex: 0, pageSize: flaggedPageSize})" [disabled]="flaggedPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg></button>
          <button (click)="onFlaggedPage({pageIndex: flaggedPage - 2, pageSize: flaggedPageSize})" [disabled]="flaggedPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg></button>
          <span class="text-sm px-2">{{ flaggedPage }} / {{ flaggedTotalPages }}</span>
          <button (click)="onFlaggedPage({pageIndex: flaggedPage, pageSize: flaggedPageSize})" [disabled]="flaggedPage >= flaggedTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>
          <button (click)="onFlaggedPage({pageIndex: flaggedTotalPages - 1, pageSize: flaggedPageSize})" [disabled]="flaggedPage >= flaggedTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg></button>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500\u2500 Tab 1: Manual Sanction List \u2500\u2500\u2500 -->
    <div *ngIf="activeTab === 1" class="p-6">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Manual Sanction List</h3>
          <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">Custom entries added by your compliance team. These are screened alongside automatic lists.</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button (click)="exportEntries('excel')" class="inline-flex items-center gap-1.5 px-3 py-2 border border-surface-300 dark:border-surface-600 rounded-lg text-sm font-medium hover:bg-surface-50 dark:hover:bg-surface-700 transition text-surface-700 dark:text-surface-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Export
          </button>
          <button (click)="openEntryForm()" class="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-semibold hover:bg-brand-700 transition shadow-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
            Add Entry
          </button>
        </div>
      </div>

      <!-- Search -->
      <div class="relative w-full max-w-sm mb-5">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <input type="text" placeholder="Search manual entries..." [(ngModel)]="entriesSearch" (ngModelChange)="onEntriesSearch()"
          class="w-full pl-10 pr-3 py-2 text-sm rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition" />
      </div>

      <div *ngIf="loadingEntries" class="flex justify-center p-12">
        <svg class="animate-spin h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
      </div>

      <div *ngIf="!loadingEntries" class="overflow-x-auto">
        <table class="w-full text-sm text-left whitespace-nowrap">
          <thead>
            <tr class="border-y border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 text-surface-600 dark:text-surface-300">
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
              <td class="px-4 py-3 font-semibold text-surface-900 dark:text-surface-100">{{ row.name }}</td>
              <td class="px-4 py-3"><span class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800/50">{{ row.entryType }}</span></td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300 text-xs">{{ row.listSource }}</td>
              <td class="px-4 py-3 text-surface-500 text-xs truncate max-w-xs">{{ row.aliases || '\u2014' }}</td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300 text-xs">{{ row.nationality || '\u2014' }}</td>
              <td class="px-4 py-3">
                <span class="inline-flex px-2 py-0.5 rounded-full text-xs font-semibold"
                  [ngClass]="row.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">
                  {{ row.isActive ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td class="px-4 py-3 text-surface-500 text-xs">{{ row.createdAt | date:'mediumDate' }}</td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end gap-1">
                  <button title="Edit" (click)="openEntryForm(row)" class="p-1.5 rounded-lg text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></button>
                  <button [title]="row.isActive ? 'Deactivate' : 'Activate'" (click)="toggleEntry(row)" class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition" [ngClass]="row.isActive ? 'text-green-600 dark:text-green-400' : 'text-surface-400'"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path *ngIf="row.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/><path *ngIf="!row.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"/></svg></button>
                  <button title="Delete" (click)="deleteEntry(row)" class="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div *ngIf="entries.length === 0" class="flex flex-col items-center justify-center py-14 text-surface-400 dark:text-surface-500">
          <svg class="w-12 h-12 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
          <p class="font-medium">No manual entries yet</p>
          <p class="text-xs mt-1 opacity-75">Click "Add Entry" to create your first custom sanction entry</p>
        </div>
      </div>
      <!-- Entries Pagination -->
      <div *ngIf="!loadingEntries && entries.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
        <span class="text-sm text-surface-500">Showing {{ (entriesPage - 1) * entriesPageSize + 1 }}&ndash;{{ (entriesPage - 1) * entriesPageSize + entries.length }} of {{ entriesTotalCount }}</span>
        <div class="flex items-center gap-2">
          <button (click)="onEntriesPage({pageIndex: 0, pageSize: entriesPageSize})" [disabled]="entriesPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg></button>
          <button (click)="onEntriesPage({pageIndex: entriesPage - 2, pageSize: entriesPageSize})" [disabled]="entriesPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg></button>
          <span class="text-sm px-2">{{ entriesPage }} / {{ entriesTotalPages }}</span>
          <button (click)="onEntriesPage({pageIndex: entriesPage, pageSize: entriesPageSize})" [disabled]="entriesPage >= entriesTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>
          <button (click)="onEntriesPage({pageIndex: entriesTotalPages - 1, pageSize: entriesPageSize})" [disabled]="entriesPage >= entriesTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg></button>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500\u2500 Tab 2: Auto-Ingested Lists (OFAC / UN / EU / UK) \u2500\u2500\u2500 -->
    <div *ngIf="activeTab === 2" class="p-6">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
        <div>
          <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Automatic Sanction Lists</h3>
          <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">Auto-ingested from official sources. Updated nightly. Read-only \u2014 used in all transaction screenings.</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <!-- Source legend badges -->
          <span class="hidden lg:inline-flex px-2 py-0.5 rounded text-xs font-bold border bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800/50">OFAC SDN</span>
          <span class="hidden lg:inline-flex px-2 py-0.5 rounded text-xs font-bold border bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800/50">OFAC CONS</span>
          <span class="hidden lg:inline-flex px-2 py-0.5 rounded text-xs font-bold border bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50">UN</span>
          <span class="hidden lg:inline-flex px-2 py-0.5 rounded text-xs font-bold border bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-800/50">EU</span>
          <span class="hidden lg:inline-flex px-2 py-0.5 rounded text-xs font-bold border bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800/50">UK</span>
        </div>
      </div>

      <!-- Search + Filter row -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5">
        <div class="relative flex-1 max-w-sm">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input type="text" placeholder="Search by name, nationality, programme..." [(ngModel)]="ingestedSearch" (ngModelChange)="onIngestedSearch()"
            class="w-full pl-10 pr-3 py-2 text-sm rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition" />
        </div>
        <select [(ngModel)]="ingestedSourceFilter" (ngModelChange)="onIngestedSourceChange()"
          class="px-3 py-2 text-sm rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
          <option value="">All Sources</option>
          <option value="OFAC_SDN">OFAC SDN</option>
          <option value="OFAC_CONS">OFAC Consolidated</option>
          <option value="UN">UN</option>
          <option value="EU">EU</option>
          <option value="UK">UK FCDO</option>
        </select>
        <span class="text-sm text-surface-500 dark:text-surface-400 whitespace-nowrap font-medium">{{ ingestedTotalCount | number }} records</span>
      </div>

      <div *ngIf="loadingIngested" class="flex justify-center p-12">
        <svg class="animate-spin h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
      </div>

      <div *ngIf="!loadingIngested" class="overflow-x-auto">
        <table class="w-full text-sm text-left whitespace-nowrap">
          <thead>
            <tr class="border-y border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 text-surface-600 dark:text-surface-300">
              <th class="px-4 py-3 font-semibold">Source</th>
              <th class="px-4 py-3 font-semibold">Full Name</th>
              <th class="px-4 py-3 font-semibold">Type</th>
              <th class="px-4 py-3 font-semibold">Aliases</th>
              <th class="px-4 py-3 font-semibold">Nationality</th>
              <th class="px-4 py-3 font-semibold">DOB</th>
              <th class="px-4 py-3 font-semibold">Programme</th>
              <th class="px-4 py-3 font-semibold">Listed On</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of ingested" class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
              <td class="px-4 py-3">
                <span class="inline-flex px-2 py-0.5 rounded text-xs font-bold border" [ngClass]="getSourceBadgeClass(row.source)">{{ row.source }}</span>
              </td>
              <td class="px-4 py-3 font-semibold text-surface-900 dark:text-surface-100 max-w-xs">{{ row.fullName }}</td>
              <td class="px-4 py-3">
                <span *ngIf="row.recordType" class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300">{{ row.recordType }}</span>
                <span *ngIf="!row.recordType" class="text-surface-400">\u2014</span>
              </td>
              <td class="px-4 py-3 text-surface-500 text-xs max-w-xs truncate" [title]="parseAliasNames(row.aliases)">{{ parseAliasNames(row.aliases) }}</td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300 text-xs">{{ row.nationality || '\u2014' }}</td>
              <td class="px-4 py-3 text-surface-500 text-xs">{{ row.dob || '\u2014' }}</td>
              <td class="px-4 py-3 text-surface-500 text-xs max-w-xs truncate">{{ row.programme || '\u2014' }}</td>
              <td class="px-4 py-3 text-surface-500 text-xs">{{ row.listedOn || '\u2014' }}</td>
            </tr>
          </tbody>
        </table>
        <div *ngIf="ingested.length === 0" class="flex flex-col items-center justify-center py-14 text-surface-400 dark:text-surface-500">
          <svg class="w-12 h-12 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
          <p class="font-medium">No ingested entries found</p>
          <p class="text-xs mt-1 opacity-75">Run the ingestion worker to populate OFAC, UN, EU and UK lists</p>
        </div>
      </div>
      <!-- Ingested Pagination -->
      <div *ngIf="!loadingIngested && ingested.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
        <span class="text-sm text-surface-500">Showing {{ (ingestedPage - 1) * ingestedPageSize + 1 }}&ndash;{{ (ingestedPage - 1) * ingestedPageSize + ingested.length }} of {{ ingestedTotalCount | number }}</span>
        <div class="flex items-center gap-2">
          <button (click)="onIngestedPage({pageIndex: 0, pageSize: ingestedPageSize})" [disabled]="ingestedPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg></button>
          <button (click)="onIngestedPage({pageIndex: ingestedPage - 2, pageSize: ingestedPageSize})" [disabled]="ingestedPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg></button>
          <span class="text-sm px-2">{{ ingestedPage }} / {{ ingestedTotalPages }}</span>
          <button (click)="onIngestedPage({pageIndex: ingestedPage, pageSize: ingestedPageSize})" [disabled]="ingestedPage >= ingestedTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>
          <button (click)="onIngestedPage({pageIndex: ingestedTotalPages - 1, pageSize: ingestedPageSize})" [disabled]="ingestedPage >= ingestedTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg></button>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500\u2500 Tab 3: Sanctioned Countries \u2500\u2500\u2500 -->
    <div *ngIf="activeTab === 3" class="p-6">
      <div class="flex items-center justify-between gap-4 mb-6">
        <div>
          <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Sanctioned Countries</h3>
          <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">Countries where transactions are blocked or flagged by risk level.</p>
        </div>
        <button (click)="openCountryForm()" class="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-semibold hover:bg-brand-700 transition shadow-sm shrink-0">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          Add Country
        </button>
      </div>

      <div *ngIf="loadingCountries" class="flex justify-center p-12">
        <svg class="animate-spin h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
      </div>

      <div *ngIf="!loadingCountries" class="overflow-x-auto">
        <table class="w-full text-sm text-left whitespace-nowrap">
          <thead>
            <tr class="border-y border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 text-surface-600 dark:text-surface-300">
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
              <td class="px-4 py-3 font-medium text-surface-900 dark:text-surface-100">{{ row.countryName }}</td>
              <td class="px-4 py-3">
                <span class="inline-flex px-2 py-0.5 rounded text-xs font-semibold border"
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
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300 text-xs">{{ row.listSource }}</td>
              <td class="px-4 py-3">
                <span class="inline-flex px-2 py-0.5 rounded-full text-xs font-semibold"
                  [ngClass]="row.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">
                  {{ row.isActive ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td class="px-4 py-3 text-surface-500 text-xs">{{ row.createdAt | date:'mediumDate' }}</td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end gap-1">
                  <button title="Edit" (click)="openCountryForm(row)" class="p-1.5 rounded-lg text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></button>
                  <button [title]="row.isActive ? 'Deactivate' : 'Activate'" (click)="toggleCountry(row)" class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition" [ngClass]="row.isActive ? 'text-green-600 dark:text-green-400' : 'text-surface-400'"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path *ngIf="row.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/><path *ngIf="!row.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"/></svg></button>
                  <button title="Delete" (click)="deleteCountry(row)" class="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div *ngIf="countries.length === 0" class="flex flex-col items-center justify-center py-14 text-surface-400 dark:text-surface-500">
          <svg class="w-12 h-12 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <p class="font-medium">No sanctioned countries configured</p>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500\u2500 Tab 4: Whitelist (FalsePositive) \u2500\u2500\u2500 -->
    <div *ngIf="activeTab === 4" class="p-6">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
        <div>
          <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Whitelist \u2014 Cleared Names</h3>
          <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">Names reviewed and cleared as false positives against <strong>any</strong> list (manual or automatic). Includes the source list for each cleared match.</p>
        </div>
      </div>

      <!-- Search -->
      <div class="relative w-full max-w-sm mb-5">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <input type="text" placeholder="Search whitelist..." [(ngModel)]="whitelistSearch" (ngModelChange)="onWhitelistSearch()"
          class="w-full pl-10 pr-3 py-2 text-sm rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition" />
      </div>

      <!-- Source info banner -->
      <div class="flex items-start gap-3 p-3.5 mb-5 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/40 text-xs text-green-800 dark:text-green-400">
        <svg class="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <div>
          <strong>Works with both lists.</strong> The "List Source" column shows whether each cleared match was from a manual entry, OFAC SDN, UN, EU, UK, or another automatic list. Future screenings will still run \u2014 this only records past compliance decisions.
        </div>
      </div>

      <div *ngIf="loadingWhitelist" class="flex justify-center p-12">
        <svg class="animate-spin h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
      </div>

      <div *ngIf="!loadingWhitelist" class="overflow-x-auto">
        <table class="w-full text-sm text-left whitespace-nowrap">
          <thead>
            <tr class="border-y border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 text-surface-600 dark:text-surface-300">
              <th class="px-4 py-3 font-semibold">Screened Name</th>
              <th class="px-4 py-3 font-semibold">Type</th>
              <th class="px-4 py-3 font-semibold">Matched Against</th>
              <th class="px-4 py-3 font-semibold">List Source</th>
              <th class="px-4 py-3 font-semibold">Score</th>
              <th class="px-4 py-3 font-semibold">Transaction #</th>
              <th class="px-4 py-3 font-semibold">Reviewed By</th>
              <th class="px-4 py-3 font-semibold">Cleared On</th>
              <th class="px-4 py-3 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of whitelist" class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
              <td class="px-4 py-3 font-semibold text-surface-900 dark:text-surface-100">{{ row.screenedName }}</td>
              <td class="px-4 py-3"><span class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-surface-100 dark:bg-surface-700 border border-surface-200 dark:border-surface-600">{{ row.screenedType }}</span></td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300">
                <span *ngIf="row.matchedName">{{ row.matchedName }}</span>
                <span *ngIf="!row.matchedName" class="text-surface-400">\u2014</span>
              </td>
              <td class="px-4 py-3">
                <span *ngIf="row.matchedListSource" class="inline-flex px-2 py-0.5 rounded text-xs font-bold border" [ngClass]="getSourceBadgeClass(row.matchedListSource)">{{ row.matchedListSource }}</span>
                <span *ngIf="!row.matchedListSource" class="text-surface-400">\u2014</span>
              </td>
              <td class="px-4 py-3 text-surface-500 text-xs">{{ getScorePercent(row.matchScore) }}</td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-300 font-mono text-xs">{{ row.transactionId || '\u2014' }}</td>
              <td class="px-4 py-3">
                <span *ngIf="row.reviewedBy" class="inline-flex items-center gap-1 text-green-700 dark:text-green-400 text-xs font-medium">
                  <svg class="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path fill="#fff" d="M10 16l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8z"/></svg>
                  {{ row.reviewedBy }}
                </span>
                <span *ngIf="!row.reviewedBy" class="text-surface-400 text-xs">\u2014</span>
              </td>
              <td class="px-4 py-3 text-surface-500 text-xs">{{ row.reviewedAt ? (row.reviewedAt | date:'short') : '\u2014' }}</td>
              <td class="px-4 py-3 text-surface-500 text-xs max-w-xs truncate" [title]="row.reviewNotes || ''">{{ row.reviewNotes || '\u2014' }}</td>
            </tr>
          </tbody>
        </table>
        <div *ngIf="whitelist.length === 0" class="flex flex-col items-center justify-center py-14 text-surface-400 dark:text-surface-500">
          <svg class="w-12 h-12 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          <p class="font-medium">No cleared names yet</p>
          <p class="text-xs mt-1 opacity-75">Review flagged transactions and mark as "False Positive" to populate this list</p>
        </div>
      </div>
      <!-- Whitelist Pagination -->
      <div *ngIf="!loadingWhitelist && whitelist.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
        <span class="text-sm text-surface-500">Showing {{ (whitelistPage - 1) * whitelistPageSize + 1 }}&ndash;{{ (whitelistPage - 1) * whitelistPageSize + whitelist.length }} of {{ whitelistTotalCount }}</span>
        <div class="flex items-center gap-2">
          <button (click)="onWhitelistPage({pageIndex: 0, pageSize: whitelistPageSize})" [disabled]="whitelistPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg></button>
          <button (click)="onWhitelistPage({pageIndex: whitelistPage - 2, pageSize: whitelistPageSize})" [disabled]="whitelistPage === 1" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg></button>
          <span class="text-sm px-2">{{ whitelistPage }} / {{ whitelistTotalPages }}</span>
          <button (click)="onWhitelistPage({pageIndex: whitelistPage, pageSize: whitelistPageSize})" [disabled]="whitelistPage >= whitelistTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>
          <button (click)="onWhitelistPage({pageIndex: whitelistTotalPages - 1, pageSize: whitelistPageSize})" [disabled]="whitelistPage >= whitelistTotalPages" class="p-1.5 rounded-md border border-surface-300 dark:border-surface-600 disabled:opacity-40 hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg></button>
        </div>
      </div>
    </div>

  </div><!-- /Tab Content -->
</div>

<!-- \u2500\u2500\u2500 Entry Form Dialog \u2500\u2500\u2500 -->
<div *ngIf="showEntryForm" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeEntryForm()"></div>
<div *ngIf="showEntryForm" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-xl pointer-events-auto max-h-[90vh] flex flex-col">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">{{ editingEntry ? 'Edit' : 'Add' }} Manual Entry</h3>
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
          <select [(ngModel)]="entryForm.nationality" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
            <option value="">\u2014 Select nationality \u2014</option>
            <option *ngFor="let c of referenceCountries" [value]="c.name">{{ c.name }}</option>
          </select>
        </div>
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Address</label>
          <input type="text" [(ngModel)]="entryForm.address" placeholder="Partial address for disambiguation" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm" />
        </div>
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Remarks</label>
          <textarea [(ngModel)]="entryForm.remarks" rows="2" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm"></textarea>
        </div>
      </div>
      <ng-container *ngIf="entryForm.entryType === 'Individual'">
        <div class="pt-3 border-t border-surface-100 dark:border-surface-700">
          <p class="text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider mb-3">Individual Details</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Date of Birth</label>
              <input type="date" [(ngModel)]="entryForm.dateOfBirth" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm" />
            </div>
            <div>
              <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Gender</label>
              <select [(ngModel)]="entryForm.gender" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
                <option value="">\u2014 Select \u2014</option>
                <option *ngFor="let g of genderOptions" [value]="g">{{ g }}</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Place of Birth</label>
              <input type="text" [(ngModel)]="entryForm.placeOfBirth" placeholder="City or country" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm" />
            </div>
            <div>
              <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">ID / Passport Number</label>
              <input type="text" [(ngModel)]="entryForm.idDocumentNumber" placeholder="Passport or national ID" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm" />
            </div>
            <div class="sm:col-span-2">
              <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Position / Title</label>
              <input type="text" [(ngModel)]="entryForm.position" placeholder="e.g. Minister of Finance" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm" />
            </div>
          </div>
        </div>
      </ng-container>
      <ng-container *ngIf="entryForm.entryType === 'Organization'">
        <div class="pt-3 border-t border-surface-100 dark:border-surface-700">
          <p class="text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider mb-3">Organization Details</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Registration Number</label>
              <input type="text" [(ngModel)]="entryForm.registrationNumber" placeholder="Company / charity reg. number" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm" />
            </div>
            <div>
              <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Registration Country</label>
              <select [(ngModel)]="entryForm.registrationCountry" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
                <option value="">\u2014 Select country \u2014</option>
                <option *ngFor="let c of referenceCountries" [value]="c.name">{{ c.name }}</option>
              </select>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeEntryForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition">Cancel</button>
      <button (click)="saveEntry()" class="px-4 py-2 text-sm font-semibold bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition shadow-sm">{{ editingEntry ? 'Update' : 'Create' }}</button>
    </div>
  </div>
</div>

<!-- \u2500\u2500\u2500 Country Form Dialog \u2500\u2500\u2500 -->
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
      <button (click)="closeCountryForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition">Cancel</button>
      <button (click)="saveCountry()" class="px-4 py-2 text-sm font-semibold bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition shadow-sm">{{ editingCountry ? 'Update' : 'Add' }}</button>
    </div>
  </div>
</div>

<!-- \u2500\u2500\u2500 Review Form Dialog \u2500\u2500\u2500 -->
<div *ngIf="showReviewForm" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeReviewForm()"></div>
<div *ngIf="showReviewForm" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-md pointer-events-auto flex flex-col">
    <div class="flex items-center justify-between px-6 py-4 border-b border-amber-200 dark:border-amber-900/30 bg-amber-50 dark:bg-amber-900/10 rounded-t-2xl">
      <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-400">Review Screening Match</h3>
      <button (click)="closeReviewForm()" class="p-1 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-800/50 text-amber-600 dark:text-amber-400 transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-4">
      <div class="p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 text-sm space-y-2" *ngIf="reviewingScreening">
        <p><span class="text-surface-500 font-medium inline-block w-20 text-xs uppercase tracking-wide">Screened</span> <span class="font-semibold text-surface-900 dark:text-surface-100">{{ reviewingScreening.screenedName }}</span> <span class="text-surface-500 text-xs">({{ reviewingScreening.screenedType }})</span></p>
        <p><span class="text-surface-500 font-medium inline-block w-20 text-xs uppercase tracking-wide">Matched</span> <span class="font-semibold text-surface-900 dark:text-surface-100">{{ reviewingScreening.matchedName }}</span>
          <span *ngIf="reviewingScreening.matchedListSource" class="ml-2 inline-flex px-1.5 py-0.5 rounded text-xs font-bold border" [ngClass]="getSourceBadgeClass(reviewingScreening.matchedListSource)">{{ reviewingScreening.matchedListSource }}</span>
        </p>
        <p><span class="text-surface-500 font-medium inline-block w-20 text-xs uppercase tracking-wide">Score</span> <span class="font-bold text-red-600 dark:text-red-400">{{ getScorePercent(reviewingScreening.matchScore) }}</span></p>
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Decision</label>
        <select [(ngModel)]="reviewForm.status" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
          <option value="ConfirmedMatch">Confirmed Match \u2014 block transaction</option>
          <option value="FalsePositive">False Positive \u2014 clear and whitelist</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Review Notes</label>
        <textarea [(ngModel)]="reviewForm.reviewNotes" rows="3" placeholder="Reason for decision..." class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm"></textarea>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeReviewForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition">Cancel</button>
      <button (click)="submitReview()" class="px-4 py-2 text-sm font-semibold bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition shadow-sm">Submit Review</button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/sanctions/sanctions.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=sanctions.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: ConfirmDeleteService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SanctionsComponent, { className: "SanctionsComponent", filePath: "src/app/pages/admin/sanctions/sanctions.component.ts", lineNumber: 18 });
})();
export {
  SanctionsComponent
};
//# sourceMappingURL=chunk-FVAVOHBG.js.map
