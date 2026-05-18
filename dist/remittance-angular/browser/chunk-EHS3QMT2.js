import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  setClassMetadata,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/pages/agent/reports/my-statement/my-statement.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function MyStatementComponent__svg_svg_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 47);
    \u0275\u0275element(1, "circle", 48)(2, "path", 49);
    \u0275\u0275elementEnd();
  }
}
function MyStatementComponent__svg_svg_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "path", 50);
    \u0275\u0275elementEnd();
  }
}
function MyStatementComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function MyStatementComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.summary.currency, " ", \u0275\u0275pipeBind2(2, 2, ctx_r0.summary.totalSent, "1.2-2"), "");
  }
}
function MyStatementComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function MyStatementComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.summary.currency, " ", \u0275\u0275pipeBind2(2, 2, ctx_r0.summary.commissionEarned, "1.2-2"), "");
  }
}
function MyStatementComponent_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function MyStatementComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.summary.currency, " ", \u0275\u0275pipeBind2(2, 2, ctx_r0.summary.balance, "1.2-2"), "");
  }
}
function MyStatementComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function MyStatementComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.summary.transactionCount));
  }
}
function MyStatementComponent_span_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.totalCount, " ", ctx_r0.totalCount === 1 ? "entry" : "entries", " ");
  }
}
function MyStatementComponent_div_83_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 55);
  }
}
function MyStatementComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, MyStatementComponent_div_83_div_1_Template, 1, 0, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function MyStatementComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 58);
    \u0275\u0275element(3, "path", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 60);
    \u0275\u0275text(5, "No entries found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 61);
    \u0275\u0275text(7, " No transactions in the selected date range. Try adjusting your filters. ");
    \u0275\u0275elementEnd()();
  }
}
function MyStatementComponent_div_85_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 70)(1, "td", 71);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 72)(5, "span", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 74);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 75);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 76);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 77);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const odd_r3 = ctx.odd;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", odd_r3 ? "bg-surface-50 dark:bg-surface-800/20" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 13, entry_r2.date, "dd MMM yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getTypeClass(entry_r2.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r2.type, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", entry_r2.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r2.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", entry_r2.reference || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getTypeClass(entry_r2.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r0.getAmountSign(entry_r2.type), "", ctx_r0.summary.currency, " ", \u0275\u0275pipeBind2(13, 16, entry_r2.amount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.summary.currency, " ", \u0275\u0275pipeBind2(16, 19, entry_r2.balanceAfter, "1.2-2"), " ");
  }
}
function MyStatementComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "table", 63)(2, "thead")(3, "tr", 64)(4, "th", 65);
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 66);
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 66);
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 66);
    \u0275\u0275text(11, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 67);
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 68);
    \u0275\u0275text(15, "Balance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, MyStatementComponent_div_85_tr_17_Template, 17, 22, "tr", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.paginatedEntries);
  }
}
function MyStatementComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79)(4, "button", 80);
    \u0275\u0275listener("click", function MyStatementComponent_div_86_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.prevPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 81);
    \u0275\u0275element(6, "path", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 80);
    \u0275\u0275listener("click", function MyStatementComponent_div_86_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275text(9, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 81);
    \u0275\u0275element(11, "path", 83);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Page ", ctx_r0.currentPage, " of ", ctx_r0.totalPages, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
var MyStatementComponent = class _MyStatementComponent {
  get totalPages() {
    return Math.ceil(this.totalCount / this.pageSize) || 1;
  }
  get paginatedEntries() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.entries.slice(start, start + this.pageSize);
  }
  constructor(api, notify) {
    this.api = api;
    this.notify = notify;
    this.startDate = "";
    this.endDate = "";
    this.loading = false;
    this.exporting = false;
    this.hasLoaded = false;
    this.summary = {
      totalSent: 0,
      commissionEarned: 0,
      balance: 0,
      transactionCount: 0,
      currency: "USD"
    };
    this.entries = [];
    this.currentPage = 1;
    this.pageSize = 20;
    this.totalCount = 0;
  }
  ngOnInit() {
    const today = /* @__PURE__ */ new Date();
    const past = /* @__PURE__ */ new Date();
    past.setDate(today.getDate() - 30);
    this.endDate = this.formatDate(today);
    this.startDate = this.formatDate(past);
    this.loadStatement();
  }
  formatDate(d) {
    return d.toISOString().split("T")[0];
  }
  loadStatement() {
    this.loading = true;
    this.hasLoaded = false;
    this.api.getMyStatement({ startDate: this.startDate, endDate: this.endDate }).subscribe({
      next: (res) => {
        this.loading = false;
        this.hasLoaded = true;
        if (res?.success && res.data) {
          const d = res.data;
          this.summary = {
            totalSent: d.totalSent ?? 0,
            commissionEarned: d.commissionEarned ?? 0,
            balance: d.balance ?? 0,
            transactionCount: d.transactionCount ?? 0,
            currency: d.currency ?? "USD"
          };
          this.entries = d.entries ?? [];
          this.totalCount = this.entries.length;
          this.currentPage = 1;
        } else {
          this.notify.error(res?.message || "Failed to load statement.");
        }
      },
      error: () => {
        this.loading = false;
        this.hasLoaded = true;
        this.notify.error("Failed to load statement. Please try again.");
      }
    });
  }
  onDateChange() {
    if (this.startDate && this.endDate && this.startDate <= this.endDate) {
      this.loadStatement();
    }
  }
  setQuickRange(days) {
    const today = /* @__PURE__ */ new Date();
    const past = /* @__PURE__ */ new Date();
    past.setDate(today.getDate() - days);
    this.endDate = this.formatDate(today);
    this.startDate = this.formatDate(past);
    this.loadStatement();
  }
  setThisMonth() {
    const today = /* @__PURE__ */ new Date();
    const first = new Date(today.getFullYear(), today.getMonth(), 1);
    this.startDate = this.formatDate(first);
    this.endDate = this.formatDate(today);
    this.loadStatement();
  }
  prevPage() {
    if (this.currentPage > 1)
      this.currentPage--;
  }
  nextPage() {
    if (this.currentPage < this.totalPages)
      this.currentPage++;
  }
  exportCsv() {
    if (!this.entries.length)
      return;
    const headers = ["Date", "Type", "Description", "Amount", "Balance After", "Reference"];
    const rows = this.entries.map((e) => [
      e.date,
      e.type,
      `"${e.description}"`,
      e.amount.toFixed(2),
      e.balanceAfter.toFixed(2),
      e.reference
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `my-statement-${this.startDate}-to-${this.endDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  getTypeClass(type) {
    const t = (type || "").toLowerCase();
    if (t === "credit" || t === "commission")
      return "text-success-600 dark:text-success-400";
    if (t === "debit" || t === "transfer")
      return "text-danger-600 dark:text-danger-400";
    return "text-surface-600 dark:text-surface-300";
  }
  getAmountSign(type) {
    const t = (type || "").toLowerCase();
    if (t === "credit" || t === "commission")
      return "+";
    if (t === "debit" || t === "transfer")
      return "-";
    return "";
  }
  static {
    this.\u0275fac = function MyStatementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyStatementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyStatementComponent, selectors: [["app-my-statement"]], decls: 87, vars: 19, consts: [[1, "min-h-full", "bg-surface-50", "dark:bg-surface-950", "p-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-white"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mt-0.5"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "rounded-xl", "text-sm", "font-medium", "bg-brand-600", "hover:bg-brand-700", "active:bg-brand-800", "text-white", "shadow-sm", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"], [1, "bg-white", "dark:bg-surface-900", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "shadow-sm", "p-4", "mb-6"], [1, "flex", "flex-wrap", "items-end", "gap-4"], [1, "flex", "flex-wrap", "gap-2"], [1, "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "self-center", "mr-1"], [1, "px-3", "py-1.5", "rounded-lg", "text-xs", "font-medium", "bg-surface-100", "dark:bg-surface-800", "hover:bg-brand-50", "dark:hover:bg-brand-900/30", "text-surface-600", "dark:text-surface-300", "hover:text-brand-600", "dark:hover:text-brand-400", "border", "border-surface-200", "dark:border-surface-700", "transition-colors", 3, "click"], [1, "flex", "flex-wrap", "items-end", "gap-3", "ml-auto"], [1, "flex", "flex-col", "gap-1"], [1, "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400"], ["type", "date", 1, "px-3", "py-2", "rounded-xl", "text-sm", "border", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-800", "text-surface-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "change", "ngModel"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "text-sm", "font-medium", "bg-brand-600", "hover:bg-brand-700", "text-white", "shadow-sm", "transition-colors", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["class", "w-4 h-4 animate-spin", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-6"], [1, "bg-white", "dark:bg-surface-900", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "shadow-sm", "p-5"], [1, "flex", "items-start", "justify-between", "mb-3"], [1, "w-10", "h-10", "rounded-xl", "bg-brand-50", "dark:bg-brand-900/30", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-white", "tabular-nums"], ["class", "text-surface-400", 4, "ngIf"], [4, "ngIf"], [1, "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "mt-1"], [1, "w-10", "h-10", "rounded-xl", "bg-success-50", "dark:bg-success-900/30", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-success-600", "dark:text-success-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"], [1, "text-2xl", "font-bold", "text-success-600", "dark:text-success-400", "tabular-nums"], [1, "w-10", "h-10", "rounded-xl", "bg-warning-50", "dark:bg-warning-900/30", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-warning-600", "dark:text-warning-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"], [1, "w-10", "h-10", "rounded-xl", "bg-purple-50", "dark:bg-purple-900/30", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-purple-600", "dark:text-purple-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"], [1, "bg-white", "dark:bg-surface-900", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "shadow-sm", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold", "text-surface-900", "dark:text-white"], ["class", "text-xs text-surface-500 dark:text-surface-400", 4, "ngIf"], ["class", "p-6 space-y-3", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-16 text-center px-6", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "px-6 py-4 border-t border-surface-200 dark:border-surface-700\n             flex items-center justify-between", 4, "ngIf"], ["fill", "none", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8H4z", 1, "opacity-75"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z"], [1, "text-surface-400"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "p-6", "space-y-3"], ["class", "h-10 rounded-lg bg-surface-100 dark:bg-surface-800 animate-pulse", 4, "ngFor", "ngForOf"], [1, "h-10", "rounded-lg", "bg-surface-100", "dark:bg-surface-800", "animate-pulse"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "text-center", "px-6"], [1, "w-16", "h-16", "rounded-2xl", "bg-surface-100", "dark:bg-surface-800", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mt-1"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-surface-200", "dark:border-surface-700"], [1, "text-left", "px-6", "py-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-500", "dark:text-surface-400"], [1, "text-left", "px-4", "py-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-500", "dark:text-surface-400"], [1, "text-right", "px-4", "py-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-500", "dark:text-surface-400"], [1, "text-right", "px-6", "py-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-500", "dark:text-surface-400"], ["class", "border-b border-surface-100 dark:border-surface-800 last:border-0\n                   hover:bg-brand-50/40 dark:hover:bg-brand-900/10 transition-colors", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "border-b", "border-surface-100", "dark:border-surface-800", "last:border-0", "hover:bg-brand-50/40", "dark:hover:bg-brand-900/10", "transition-colors", 3, "ngClass"], [1, "px-6", "py-3.5", "whitespace-nowrap", "text-surface-600", "dark:text-surface-300", "tabular-nums"], [1, "px-4", "py-3.5", "whitespace-nowrap"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-current/10", 3, "ngClass"], [1, "px-4", "py-3.5", "text-surface-700", "dark:text-surface-200", "max-w-xs", "truncate", 3, "title"], [1, "px-4", "py-3.5", "whitespace-nowrap", "text-surface-400", "dark:text-surface-500", "font-mono", "text-xs"], [1, "px-4", "py-3.5", "whitespace-nowrap", "text-right", "tabular-nums", "font-medium", 3, "ngClass"], [1, "px-6", "py-3.5", "whitespace-nowrap", "text-right", "tabular-nums", "text-surface-900", "dark:text-white", "font-semibold"], [1, "px-6", "py-4", "border-t", "border-surface-200", "dark:border-surface-700", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2"], [1, "flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "text-xs", "font-medium", "border", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-800", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 19.5L8.25 12l7.5-7.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8.25 4.5l7.5 7.5-7.5 7.5"]], template: function MyStatementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "My Statement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, " Your personal account ledger and financial summary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function MyStatementComponent_Template_button_click_7_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 5);
        \u0275\u0275element(9, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Export CSV ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "span", 10);
        \u0275\u0275text(15, "Quick:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 11);
        \u0275\u0275listener("click", function MyStatementComponent_Template_button_click_16_listener() {
          return ctx.setQuickRange(7);
        });
        \u0275\u0275text(17, " Last 7 days ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function MyStatementComponent_Template_button_click_18_listener() {
          return ctx.setQuickRange(30);
        });
        \u0275\u0275text(19, " Last 30 days ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 11);
        \u0275\u0275listener("click", function MyStatementComponent_Template_button_click_20_listener() {
          return ctx.setThisMonth();
        });
        \u0275\u0275text(21, " This month ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 11);
        \u0275\u0275listener("click", function MyStatementComponent_Template_button_click_22_listener() {
          return ctx.setQuickRange(90);
        });
        \u0275\u0275text(23, " Last 90 days ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 12)(25, "div", 13)(26, "label", 14);
        \u0275\u0275text(27, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function MyStatementComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
          return $event;
        });
        \u0275\u0275listener("change", function MyStatementComponent_Template_input_change_28_listener() {
          return ctx.onDateChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 13)(30, "label", 14);
        \u0275\u0275text(31, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function MyStatementComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
          return $event;
        });
        \u0275\u0275listener("change", function MyStatementComponent_Template_input_change_32_listener() {
          return ctx.onDateChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "button", 16);
        \u0275\u0275listener("click", function MyStatementComponent_Template_button_click_33_listener() {
          return ctx.loadStatement();
        });
        \u0275\u0275template(34, MyStatementComponent__svg_svg_34_Template, 3, 0, "svg", 17)(35, MyStatementComponent__svg_svg_35_Template, 2, 0, "svg", 18);
        \u0275\u0275text(36, " Apply ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 19)(38, "div", 20)(39, "div", 21)(40, "div", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 23);
        \u0275\u0275element(42, "path", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "div", 25);
        \u0275\u0275template(44, MyStatementComponent_span_44_Template, 2, 0, "span", 26)(45, MyStatementComponent_span_45_Template, 3, 5, "span", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 28);
        \u0275\u0275text(47, "Total Sent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 20)(49, "div", 21)(50, "div", 29);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(51, "svg", 30);
        \u0275\u0275element(52, "path", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(53, "div", 32);
        \u0275\u0275template(54, MyStatementComponent_span_54_Template, 2, 0, "span", 27)(55, MyStatementComponent_span_55_Template, 3, 5, "span", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 28);
        \u0275\u0275text(57, "Commission Earned");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 20)(59, "div", 21)(60, "div", 33);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(61, "svg", 34);
        \u0275\u0275element(62, "path", 35);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(63, "div", 25);
        \u0275\u0275template(64, MyStatementComponent_span_64_Template, 2, 0, "span", 27)(65, MyStatementComponent_span_65_Template, 3, 5, "span", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 28);
        \u0275\u0275text(67, "Current Balance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 20)(69, "div", 21)(70, "div", 36);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(71, "svg", 37);
        \u0275\u0275element(72, "path", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(73, "div", 25);
        \u0275\u0275template(74, MyStatementComponent_span_74_Template, 2, 0, "span", 27)(75, MyStatementComponent_span_75_Template, 3, 3, "span", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 28);
        \u0275\u0275text(77, "Transactions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 39)(79, "div", 40)(80, "h2", 41);
        \u0275\u0275text(81, "Transaction Ledger");
        \u0275\u0275elementEnd();
        \u0275\u0275template(82, MyStatementComponent_span_82_Template, 2, 2, "span", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275template(83, MyStatementComponent_div_83_Template, 2, 2, "div", 43)(84, MyStatementComponent_div_84_Template, 8, 0, "div", 44)(85, MyStatementComponent_div_85_Template, 18, 1, "div", 45)(86, MyStatementComponent_div_86_Template, 12, 4, "div", 46);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", !ctx.entries.length);
        \u0275\u0275advance(21);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", !ctx.loading && ctx.totalCount);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.hasLoaded && !ctx.entries.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.entries.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.totalPages > 1);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n/*# sourceMappingURL=my-statement.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyStatementComponent, [{
    type: Component,
    args: [{ selector: "app-my-statement", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="min-h-full bg-surface-50 dark:bg-surface-950 p-6">

  <!-- Page Header -->
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
    <div>
      <h1 class="text-2xl font-bold text-surface-900 dark:text-white">My Statement</h1>
      <p class="text-sm text-surface-500 dark:text-surface-400 mt-0.5">
        Your personal account ledger and financial summary
      </p>
    </div>

    <!-- Export -->
    <button
      (click)="exportCsv()"
      [disabled]="!entries.length"
      class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
             bg-brand-600 hover:bg-brand-700 active:bg-brand-800
             text-white shadow-sm transition-colors
             disabled:opacity-50 disabled:cursor-not-allowed">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
      </svg>
      Export CSV
    </button>
  </div>

  <!-- Date Range Filter -->
  <div class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-700
              shadow-sm p-4 mb-6">
    <div class="flex flex-wrap items-end gap-4">

      <!-- Quick filters -->
      <div class="flex flex-wrap gap-2">
        <span class="text-xs font-medium text-surface-500 dark:text-surface-400 self-center mr-1">Quick:</span>
        <button (click)="setQuickRange(7)"
          class="px-3 py-1.5 rounded-lg text-xs font-medium
                 bg-surface-100 dark:bg-surface-800 hover:bg-brand-50 dark:hover:bg-brand-900/30
                 text-surface-600 dark:text-surface-300 hover:text-brand-600 dark:hover:text-brand-400
                 border border-surface-200 dark:border-surface-700
                 transition-colors">
          Last 7 days
        </button>
        <button (click)="setQuickRange(30)"
          class="px-3 py-1.5 rounded-lg text-xs font-medium
                 bg-surface-100 dark:bg-surface-800 hover:bg-brand-50 dark:hover:bg-brand-900/30
                 text-surface-600 dark:text-surface-300 hover:text-brand-600 dark:hover:text-brand-400
                 border border-surface-200 dark:border-surface-700
                 transition-colors">
          Last 30 days
        </button>
        <button (click)="setThisMonth()"
          class="px-3 py-1.5 rounded-lg text-xs font-medium
                 bg-surface-100 dark:bg-surface-800 hover:bg-brand-50 dark:hover:bg-brand-900/30
                 text-surface-600 dark:text-surface-300 hover:text-brand-600 dark:hover:text-brand-400
                 border border-surface-200 dark:border-surface-700
                 transition-colors">
          This month
        </button>
        <button (click)="setQuickRange(90)"
          class="px-3 py-1.5 rounded-lg text-xs font-medium
                 bg-surface-100 dark:bg-surface-800 hover:bg-brand-50 dark:hover:bg-brand-900/30
                 text-surface-600 dark:text-surface-300 hover:text-brand-600 dark:hover:text-brand-400
                 border border-surface-200 dark:border-surface-700
                 transition-colors">
          Last 90 days
        </button>
      </div>

      <!-- Custom date range -->
      <div class="flex flex-wrap items-end gap-3 ml-auto">
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-surface-500 dark:text-surface-400">From</label>
          <input type="date" [(ngModel)]="startDate" (change)="onDateChange()"
            class="px-3 py-2 rounded-xl text-sm border border-surface-200 dark:border-surface-700
                   bg-surface-50 dark:bg-surface-800 text-surface-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500
                   transition-colors" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-surface-500 dark:text-surface-400">To</label>
          <input type="date" [(ngModel)]="endDate" (change)="onDateChange()"
            class="px-3 py-2 rounded-xl text-sm border border-surface-200 dark:border-surface-700
                   bg-surface-50 dark:bg-surface-800 text-surface-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500
                   transition-colors" />
        </div>
        <button (click)="loadStatement()"
          [disabled]="loading"
          class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                 bg-brand-600 hover:bg-brand-700 text-white shadow-sm transition-colors
                 disabled:opacity-60 disabled:cursor-not-allowed">
          <svg *ngIf="loading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
          </svg>
          <svg *ngIf="!loading" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z"/>
          </svg>
          Apply
        </button>
      </div>
    </div>
  </div>

  <!-- KPI Summary Cards -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

    <!-- Total Sent -->
    <div class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-700
                shadow-sm p-5">
      <div class="flex items-start justify-between mb-3">
        <div class="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/30
                    flex items-center justify-center">
          <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </div>
      </div>
      <div class="text-2xl font-bold text-surface-900 dark:text-white tabular-nums">
        <span *ngIf="loading" class="text-surface-400">\u2014</span>
        <span *ngIf="!loading">{{ summary.currency }} {{ summary.totalSent | number:'1.2-2' }}</span>
      </div>
      <div class="text-xs font-medium text-surface-500 dark:text-surface-400 mt-1">Total Sent</div>
    </div>

    <!-- Commission Earned -->
    <div class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-700
                shadow-sm p-5">
      <div class="flex items-start justify-between mb-3">
        <div class="w-10 h-10 rounded-xl bg-success-50 dark:bg-success-900/30
                    flex items-center justify-center">
          <svg class="w-5 h-5 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
          </svg>
        </div>
      </div>
      <div class="text-2xl font-bold text-success-600 dark:text-success-400 tabular-nums">
        <span *ngIf="loading">\u2014</span>
        <span *ngIf="!loading">{{ summary.currency }} {{ summary.commissionEarned | number:'1.2-2' }}</span>
      </div>
      <div class="text-xs font-medium text-surface-500 dark:text-surface-400 mt-1">Commission Earned</div>
    </div>

    <!-- Current Balance -->
    <div class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-700
                shadow-sm p-5">
      <div class="flex items-start justify-between mb-3">
        <div class="w-10 h-10 rounded-xl bg-warning-50 dark:bg-warning-900/30
                    flex items-center justify-center">
          <svg class="w-5 h-5 text-warning-600 dark:text-warning-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
          </svg>
        </div>
      </div>
      <div class="text-2xl font-bold text-surface-900 dark:text-white tabular-nums">
        <span *ngIf="loading">\u2014</span>
        <span *ngIf="!loading">{{ summary.currency }} {{ summary.balance | number:'1.2-2' }}</span>
      </div>
      <div class="text-xs font-medium text-surface-500 dark:text-surface-400 mt-1">Current Balance</div>
    </div>

    <!-- Transaction Count -->
    <div class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-700
                shadow-sm p-5">
      <div class="flex items-start justify-between mb-3">
        <div class="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30
                    flex items-center justify-center">
          <svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"/>
          </svg>
        </div>
      </div>
      <div class="text-2xl font-bold text-surface-900 dark:text-white tabular-nums">
        <span *ngIf="loading">\u2014</span>
        <span *ngIf="!loading">{{ summary.transactionCount | number }}</span>
      </div>
      <div class="text-xs font-medium text-surface-500 dark:text-surface-400 mt-1">Transactions</div>
    </div>
  </div>

  <!-- Ledger Table -->
  <div class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm overflow-hidden">

    <!-- Table header -->
    <div class="px-6 py-4 border-b border-surface-200 dark:border-surface-700 flex items-center justify-between">
      <h2 class="text-sm font-semibold text-surface-900 dark:text-white">Transaction Ledger</h2>
      <span *ngIf="!loading && totalCount"
        class="text-xs text-surface-500 dark:text-surface-400">
        {{ totalCount }} {{ totalCount === 1 ? 'entry' : 'entries' }}
      </span>
    </div>

    <!-- Loading skeleton -->
    <div *ngIf="loading" class="p-6 space-y-3">
      <div *ngFor="let _ of [1,2,3,4,5]"
        class="h-10 rounded-lg bg-surface-100 dark:bg-surface-800 animate-pulse"></div>
    </div>

    <!-- Empty state -->
    <div *ngIf="!loading && hasLoaded && !entries.length"
      class="flex flex-col items-center justify-center py-16 text-center px-6">
      <div class="w-16 h-16 rounded-2xl bg-surface-100 dark:bg-surface-800 flex items-center justify-center mb-4">
        <svg class="w-8 h-8 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
        </svg>
      </div>
      <p class="text-sm font-medium text-surface-700 dark:text-surface-300">No entries found</p>
      <p class="text-xs text-surface-500 dark:text-surface-400 mt-1">
        No transactions in the selected date range.
        Try adjusting your filters.
      </p>
    </div>

    <!-- Table -->
    <div *ngIf="!loading && entries.length" class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-surface-200 dark:border-surface-700">
            <th class="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider
                       text-surface-500 dark:text-surface-400">Date</th>
            <th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider
                       text-surface-500 dark:text-surface-400">Type</th>
            <th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider
                       text-surface-500 dark:text-surface-400">Description</th>
            <th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider
                       text-surface-500 dark:text-surface-400">Reference</th>
            <th class="text-right px-4 py-3 text-xs font-semibold uppercase tracking-wider
                       text-surface-500 dark:text-surface-400">Amount</th>
            <th class="text-right px-6 py-3 text-xs font-semibold uppercase tracking-wider
                       text-surface-500 dark:text-surface-400">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let entry of paginatedEntries; let odd = odd"
            [ngClass]="odd ? 'bg-surface-50 dark:bg-surface-800/20' : ''"
            class="border-b border-surface-100 dark:border-surface-800 last:border-0
                   hover:bg-brand-50/40 dark:hover:bg-brand-900/10 transition-colors">

            <!-- Date -->
            <td class="px-6 py-3.5 whitespace-nowrap text-surface-600 dark:text-surface-300 tabular-nums">
              {{ entry.date | date:'dd MMM yyyy' }}
            </td>

            <!-- Type badge -->
            <td class="px-4 py-3.5 whitespace-nowrap">
              <span [ngClass]="getTypeClass(entry.type)"
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                       bg-current/10">
                {{ entry.type }}
              </span>
            </td>

            <!-- Description -->
            <td class="px-4 py-3.5 text-surface-700 dark:text-surface-200 max-w-xs truncate"
                [title]="entry.description">
              {{ entry.description }}
            </td>

            <!-- Reference -->
            <td class="px-4 py-3.5 whitespace-nowrap text-surface-400 dark:text-surface-500
                       font-mono text-xs">
              {{ entry.reference || '\u2014' }}
            </td>

            <!-- Amount -->
            <td class="px-4 py-3.5 whitespace-nowrap text-right tabular-nums font-medium"
                [ngClass]="getTypeClass(entry.type)">
              {{ getAmountSign(entry.type) }}{{ summary.currency }} {{ entry.amount | number:'1.2-2' }}
            </td>

            <!-- Balance after -->
            <td class="px-6 py-3.5 whitespace-nowrap text-right tabular-nums
                       text-surface-900 dark:text-white font-semibold">
              {{ summary.currency }} {{ entry.balanceAfter | number:'1.2-2' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div *ngIf="!loading && totalPages > 1"
      class="px-6 py-4 border-t border-surface-200 dark:border-surface-700
             flex items-center justify-between">
      <span class="text-xs text-surface-500 dark:text-surface-400">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
      <div class="flex items-center gap-2">
        <button (click)="prevPage()" [disabled]="currentPage === 1"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                 border border-surface-200 dark:border-surface-700
                 text-surface-600 dark:text-surface-300
                 hover:bg-surface-50 dark:hover:bg-surface-800
                 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
          </svg>
          Prev
        </button>
        <button (click)="nextPage()" [disabled]="currentPage === totalPages"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                 border border-surface-200 dark:border-surface-700
                 text-surface-600 dark:text-surface-300
                 hover:bg-surface-50 dark:hover:bg-surface-800
                 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
          Next
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/agent/reports/my-statement/my-statement.component.scss */\n/*# sourceMappingURL=my-statement.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyStatementComponent, { className: "MyStatementComponent", filePath: "src/app/pages/agent/reports/my-statement/my-statement.component.ts", lineNumber: 31 });
})();
export {
  MyStatementComponent
};
//# sourceMappingURL=chunk-EHS3QMT2.js.map
