import {
  DatePicker
} from "./chunk-5EFJYZR4.js";
import "./chunk-5WEXKBPK.js";
import "./chunk-3CFLOBS2.js";
import {
  ExportService
} from "./chunk-FDFRARSK.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-D3SW2Q36.js";
import {
  NotificationService
} from "./chunk-3AICMGEY.js";
import "./chunk-TLG473HR.js";
import {
  ApiService
} from "./chunk-JPFLOAIK.js";
import "./chunk-LDWTK5YJ.js";
import "./chunk-R63TWOS6.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-WBW3ZP3W.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EU7HC72Q.js";
import "./chunk-S5KMCARS.js";

// src/app/pages/admin/reports/settlement-report/settlement-report.component.ts
function SettlementReportComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div")(4, "span", 5);
    \u0275\u0275text(5, "Active Agents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 21);
    \u0275\u0275element(11, "path", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 17)(13, "div", 18)(14, "div")(15, "span", 5);
    \u0275\u0275text(16, "Total Send Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 23);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 25);
    \u0275\u0275element(22, "path", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "div", 17)(24, "div", 18)(25, "div")(26, "span", 5);
    \u0275\u0275text(27, "Total Service Charge Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 27);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 29);
    \u0275\u0275element(33, "path", 30);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 3, ctx_r0.totalAgents));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 5, ctx_r0.totalSendVolume, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 8, ctx_r0.totalCommissionPaid, "1.2-2"));
  }
}
function SettlementReportComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "circle", 33)(3, "path", 34);
    \u0275\u0275elementEnd()();
  }
}
function SettlementReportComponent_div_27_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 45)(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 47);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 47);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 47);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 47);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 47);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 48);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 49);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 48);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 50);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.agentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.agentType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, row_r2.creditLimit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 14, row_r2.currentBalance, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 17, row_r2.availableBalance, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 20, row_r2.transactionsSent));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 22, row_r2.transactionsAsPayout));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 24, row_r2.sendVolume, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 27, row_r2.commissionEarned, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 30, row_r2.creditsReceived, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 33, row_r2.debitsApplied, "1.2-2"));
  }
}
function SettlementReportComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "h3", 37);
    \u0275\u0275text(3, "Agent Settlements");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 38)(5, "table", 39)(6, "thead", 40)(7, "tr")(8, "th", 41);
    \u0275\u0275text(9, "Agent Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 41);
    \u0275\u0275text(11, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 42);
    \u0275\u0275text(13, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 42);
    \u0275\u0275text(15, "Current Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 42);
    \u0275\u0275text(17, "Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 42);
    \u0275\u0275text(19, "Txns Sent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 42);
    \u0275\u0275text(21, "Txns as Payout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 42);
    \u0275\u0275text(23, "Send Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 42);
    \u0275\u0275text(25, "Service Charge Earned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 42);
    \u0275\u0275text(27, "Credits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 42);
    \u0275\u0275text(29, "Debits");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tbody", 43);
    \u0275\u0275template(31, SettlementReportComponent_div_27_tr_31_Template, 32, 36, "tr", 44);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(31);
    \u0275\u0275property("ngForOf", ctx_r0.settlements);
  }
}
function SettlementReportComponent_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1, " No settlement data available. Select a date range and click Generate. ");
    \u0275\u0275elementEnd();
  }
}
var SettlementReportComponent = class _SettlementReportComponent {
  constructor() {
    this.api = inject(ApiService);
    this.exportService = inject(ExportService);
    this.notification = inject(NotificationService);
    this.startDate = null;
    this.endDate = null;
    this.loading = false;
    this.totalAgents = 0;
    this.totalSendVolume = 0;
    this.totalCommissionPaid = 0;
    this.settlements = [];
  }
  formatDate(d) {
    if (!d)
      return "";
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  loadReport() {
    this.loading = true;
    const params = {};
    if (this.startDate)
      params.startDate = this.formatDate(this.startDate);
    if (this.endDate)
      params.endDate = this.formatDate(this.endDate);
    this.api.getSettlementReport(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data) {
          this.totalAgents = res.data.totalAgents;
          this.totalSendVolume = res.data.totalSendVolume;
          this.totalCommissionPaid = res.data.totalCommissionPaid;
          this.settlements = res.data.settlements || [];
        } else {
          this.notification.error("Failed to load settlement report.");
        }
      },
      error: () => {
        this.loading = false;
        this.notification.error("An error occurred while loading the report.");
      }
    });
  }
  exportReport(format) {
    const params = {};
    if (this.startDate)
      params.startDate = this.formatDate(this.startDate);
    if (this.endDate)
      params.endDate = this.formatDate(this.endDate);
    this.exportService.export("api/admin/reports/settlement/export", params, format);
  }
  static {
    this.\u0275fac = function SettlementReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettlementReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettlementReportComponent, selectors: [["app-settlement-report"]], decls: 29, vars: 13, consts: [[1, "animate-fade-in"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-6"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft", "mb-6"], [1, "flex", "flex-wrap", "items-end", "gap-4"], [1, "flex-1", "min-w-[160px]"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], ["appendTo", "body", "dateFormat", "dd/mm/yy", "placeholder", "DD/MM/YYYY", "styleClass", "w-full", "inputStyleClass", "w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 transition-colors text-sm", 3, "ngModelChange", "ngModel", "showIcon", "showClear"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "rounded-xl", "bg-brand-600", "text-white", "hover:bg-brand-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "text-sm", "font-medium", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 3v18h18M9 17V9m4 8V5m4 12v-4"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-700", "dark:text-surface-200", "hover:bg-surface-50", "dark:hover:bg-surface-600", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "text-sm", "font-medium", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"], ["class", "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6", 4, "ngIf"], ["class", "flex items-center justify-center py-16", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft", 4, "ngIf"], ["class", "text-center text-surface-500 dark:text-surface-400 py-12 text-sm", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4", "mb-6"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "items-center", "justify-between"], [1, "block", "text-2xl", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "flex", "items-center", "justify-center", "h-12", "w-12", "rounded-xl", "bg-brand-100", "dark:bg-brand-900/30"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-6", "w-6", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"], [1, "block", "text-2xl", "font-bold", "text-success-600", "dark:text-success-400"], [1, "flex", "items-center", "justify-center", "h-12", "w-12", "rounded-xl", "bg-success-100", "dark:bg-success-900/30"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-6", "w-6", "text-success-600", "dark:text-success-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"], [1, "block", "text-2xl", "font-bold", "text-warning-600", "dark:text-warning-400"], [1, "flex", "items-center", "justify-center", "h-12", "w-12", "rounded-xl", "bg-warning-100", "dark:bg-warning-900/30"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-6", "w-6", "text-warning-600", "dark:text-warning-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"], [1, "flex", "items-center", "justify-center", "py-16"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-600", "dark:text-brand-400"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft"], [1, "p-6", "pb-0"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "overflow-x-auto", "p-6", "pt-4"], [1, "w-full", "text-sm"], [1, "bg-surface-50", "dark:bg-surface-700/50"], ["scope", "col", 1, "px-4", "py-3", "text-left", "text-xs", "font-semibold", "text-surface-600", "dark:text-surface-300", "uppercase", "tracking-wider"], ["scope", "col", 1, "px-4", "py-3", "text-right", "text-xs", "font-semibold", "text-surface-600", "dark:text-surface-300", "uppercase", "tracking-wider"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-700/30", "transition-colors"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-right", "font-mono", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-right", "font-mono", "text-success-600", "dark:text-success-400"], [1, "px-4", "py-3", "text-right", "font-mono", "text-brand-600", "dark:text-brand-400"], [1, "px-4", "py-3", "text-right", "font-mono", "text-danger-600", "dark:text-danger-400"], [1, "text-center", "text-surface-500", "dark:text-surface-400", "py-12", "text-sm"]], template: function SettlementReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Settlement Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "label", 5);
        \u0275\u0275text(7, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p-datepicker", 6);
        \u0275\u0275twoWayListener("ngModelChange", function SettlementReportComponent_Template_p_datepicker_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "label", 5);
        \u0275\u0275text(11, "End Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p-datepicker", 6);
        \u0275\u0275twoWayListener("ngModelChange", function SettlementReportComponent_Template_p_datepicker_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function SettlementReportComponent_Template_button_click_13_listener() {
          return ctx.loadReport();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 8);
        \u0275\u0275element(15, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Generate ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "button", 10);
        \u0275\u0275listener("click", function SettlementReportComponent_Template_button_click_17_listener() {
          return ctx.exportReport("excel");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 8);
        \u0275\u0275element(19, "path", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(21, "button", 10);
        \u0275\u0275listener("click", function SettlementReportComponent_Template_button_click_21_listener() {
          return ctx.exportReport("csv");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(22, "svg", 8);
        \u0275\u0275element(23, "path", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " CSV ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(25, SettlementReportComponent_div_25_Template, 34, 11, "div", 12)(26, SettlementReportComponent_div_26_Template, 4, 0, "div", 13)(27, SettlementReportComponent_div_27_Template, 32, 1, "div", 14)(28, SettlementReportComponent_p_28_Template, 2, 0, "p", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
        \u0275\u0275property("showIcon", true)("showClear", true);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
        \u0275\u0275property("showIcon", true)("showClear", true);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.settlements.length === 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.settlements.length === 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.loading && ctx.settlements.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.settlements.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.settlements.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgControlStatus, NgModel, DatePicker], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=settlement-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettlementReportComponent, [{
    type: Component,
    args: [{ selector: "app-settlement-report", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DecimalPipe,
      DatePicker
    ], template: `<div class="animate-fade-in">
  <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100 mb-6">Settlement Report</h2>

  <!-- Filters -->
  <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft mb-6">
    <div class="flex flex-wrap items-end gap-4">
      <!-- Start Date -->
      <div class="flex-1 min-w-[160px]">
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Start Date</label>
        <p-datepicker appendTo="body" [(ngModel)]="startDate" dateFormat="dd/mm/yy" [showIcon]="true" [showClear]="true" placeholder="DD/MM/YYYY" styleClass="w-full" inputStyleClass="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 transition-colors text-sm" />
      </div>

      <!-- End Date -->
      <div class="flex-1 min-w-[160px]">
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">End Date</label>
        <p-datepicker appendTo="body" [(ngModel)]="endDate" dateFormat="dd/mm/yy" [showIcon]="true" [showClear]="true" placeholder="DD/MM/YYYY" styleClass="w-full" inputStyleClass="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 transition-colors text-sm" />
      </div>

      <!-- Generate Button -->
      <button (click)="loadReport()"
              [disabled]="loading"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18M9 17V9m4 8V5m4 12v-4" />
        </svg>
        Generate
      </button>

      <!-- Excel Export -->
      <button (click)="exportReport('excel')"
              [disabled]="settlements.length === 0"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        Excel
      </button>

      <!-- CSV Export -->
      <button (click)="exportReport('csv')"
              [disabled]="settlements.length === 0"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        CSV
      </button>
    </div>
  </div>

  <!-- Summary Cards -->
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6" *ngIf="!loading && settlements.length > 0">
    <!-- Active Agents -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <span class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Active Agents</span>
          <span class="block text-2xl font-bold text-brand-600 dark:text-brand-400">{{ totalAgents | number }}</span>
        </div>
        <div class="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-100 dark:bg-brand-900/30">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Total Send Volume -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <span class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Total Send Volume</span>
          <span class="block text-2xl font-bold text-success-600 dark:text-success-400">{{ totalSendVolume | number:'1.2-2' }}</span>
        </div>
        <div class="flex items-center justify-center h-12 w-12 rounded-xl bg-success-100 dark:bg-success-900/30">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-success-600 dark:text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Total Service Charge Paid -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <span class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Total Service Charge Paid</span>
          <span class="block text-2xl font-bold text-warning-600 dark:text-warning-400">{{ totalCommissionPaid | number:'1.2-2' }}</span>
        </div>
        <div class="flex items-center justify-center h-12 w-12 rounded-xl bg-warning-100 dark:bg-warning-900/30">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-warning-600 dark:text-warning-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading -->
  <div class="flex items-center justify-center py-16" *ngIf="loading">
    <svg class="animate-spin h-8 w-8 text-brand-600 dark:text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div>

  <!-- Data Table -->
  <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft" *ngIf="!loading && settlements.length > 0">
    <div class="p-6 pb-0">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Agent Settlements</h3>
    </div>
    <div class="overflow-x-auto p-6 pt-4">
      <table class="w-full text-sm">
        <thead class="bg-surface-50 dark:bg-surface-700/50">
          <tr>
            <th scope="col" class="px-4 py-3 text-left text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Agent Name</th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Type</th>
            <th scope="col" class="px-4 py-3 text-right text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Credit Limit</th>
            <th scope="col" class="px-4 py-3 text-right text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Current Balance</th>
            <th scope="col" class="px-4 py-3 text-right text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Available</th>
            <th scope="col" class="px-4 py-3 text-right text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Txns Sent</th>
            <th scope="col" class="px-4 py-3 text-right text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Txns as Payout</th>
            <th scope="col" class="px-4 py-3 text-right text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Send Volume</th>
            <th scope="col" class="px-4 py-3 text-right text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Service Charge Earned</th>
            <th scope="col" class="px-4 py-3 text-right text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Credits</th>
            <th scope="col" class="px-4 py-3 text-right text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Debits</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
          <tr *ngFor="let row of settlements" class="hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors">
            <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ row.agentName }}</td>
            <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ row.agentType }}</td>
            <td class="px-4 py-3 text-right font-mono text-surface-900 dark:text-surface-100">{{ row.creditLimit | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-surface-900 dark:text-surface-100">{{ row.currentBalance | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-surface-900 dark:text-surface-100">{{ row.availableBalance | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-surface-900 dark:text-surface-100">{{ row.transactionsSent | number }}</td>
            <td class="px-4 py-3 text-right font-mono text-surface-900 dark:text-surface-100">{{ row.transactionsAsPayout | number }}</td>
            <td class="px-4 py-3 text-right font-mono text-success-600 dark:text-success-400">{{ row.sendVolume | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-brand-600 dark:text-brand-400">{{ row.commissionEarned | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-success-600 dark:text-success-400">{{ row.creditsReceived | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-danger-600 dark:text-danger-400">{{ row.debitsApplied | number:'1.2-2' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Empty State -->
  <p class="text-center text-surface-500 dark:text-surface-400 py-12 text-sm" *ngIf="!loading && settlements.length === 0">
    No settlement data available. Select a date range and click Generate.
  </p>
</div>
`, styles: ["/* src/app/pages/admin/reports/settlement-report/settlement-report.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=settlement-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettlementReportComponent, { className: "SettlementReportComponent", filePath: "src/app/pages/admin/reports/settlement-report/settlement-report.component.ts", lineNumber: 37 });
})();
export {
  SettlementReportComponent
};
//# sourceMappingURL=chunk-54HBIXLU.js.map
