import {
  DatePicker
} from "./chunk-P27FYE4L.js";
import "./chunk-2JJTUUN4.js";
import "./chunk-3CFLOBS2.js";
import {
  ExportService
} from "./chunk-DU4FVJ3R.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
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
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-FEHYQLJK.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
} from "./chunk-XQC2OG7J.js";

// src/app/pages/admin/reports/revenue-report/revenue-report.component.ts
function RevenueReportComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "circle", 16)(3, "path", 17);
    \u0275\u0275elementEnd()();
  }
}
function RevenueReportComponent_ng_container_25_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, " No monthly data available. ");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_25_div_94_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 53)(1, "td", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 55);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 55);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 56);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 56);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatMonth(row_r1.year, row_r1.month));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, row_r1.transactionCount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, row_r1.volume, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 10, row_r1.totalCommission, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 13, row_r1.companyCommission, "1.2-2"));
  }
}
function RevenueReportComponent_ng_container_25_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "table", 46)(2, "thead", 47)(3, "tr")(4, "th", 48);
    \u0275\u0275text(5, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 49);
    \u0275\u0275text(7, "Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 49);
    \u0275\u0275text(9, "Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 49);
    \u0275\u0275text(11, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 50);
    \u0275\u0275text(13, "Company Service Charge");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody", 51);
    \u0275\u0275template(15, RevenueReportComponent_ng_container_25_div_94_tr_15_Template, 15, 16, "tr", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.report.monthlyBreakdown);
  }
}
function RevenueReportComponent_ng_container_25_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, " No corridor data available. ");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_25_div_99_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 53)(1, "td", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 55);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 55);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 56);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.corridor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, row_r3.transactionCount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 6, row_r3.volume, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 9, row_r3.commission, "1.2-2"));
  }
}
function RevenueReportComponent_ng_container_25_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "table", 46)(2, "thead", 47)(3, "tr")(4, "th", 48);
    \u0275\u0275text(5, "Corridor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 49);
    \u0275\u0275text(7, "Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 49);
    \u0275\u0275text(9, "Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 50);
    \u0275\u0275text(11, "Service Charge");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody", 51);
    \u0275\u0275template(13, RevenueReportComponent_ng_container_25_div_99_tr_13_Template, 12, 12, "tr", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.report.corridorBreakdown);
  }
}
function RevenueReportComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "div", 21)(5, "span", 22);
    \u0275\u0275text(6, "Total Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 25);
    \u0275\u0275element(12, "path", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 19)(14, "div", 20)(15, "div", 21)(16, "span", 22);
    \u0275\u0275text(17, "Transaction Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 23);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 25);
    \u0275\u0275element(23, "path", 27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 19)(25, "div", 20)(26, "div", 21)(27, "span", 22);
    \u0275\u0275text(28, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 28);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 30);
    \u0275\u0275element(34, "path", 31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "div", 19)(36, "div", 20)(37, "div", 21)(38, "span", 22);
    \u0275\u0275text(39, "Company Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 28);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 30);
    \u0275\u0275element(45, "path", 32);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "div", 19)(47, "div", 20)(48, "div", 21)(49, "span", 22);
    \u0275\u0275text(50, "Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 33);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 35);
    \u0275\u0275element(56, "path", 36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(57, "div", 19)(58, "div", 20)(59, "div", 21)(60, "span", 22);
    \u0275\u0275text(61, "Payout Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 23);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 25);
    \u0275\u0275element(67, "path", 37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(68, "div", 19)(69, "div", 20)(70, "div", 21)(71, "span", 22);
    \u0275\u0275text(72, "FX Gain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 33);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(77, "svg", 35);
    \u0275\u0275element(78, "path", 38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(79, "div", 19)(80, "div", 20)(81, "div", 21)(82, "span", 22);
    \u0275\u0275text(83, "Net Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 28);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(88, "svg", 30);
    \u0275\u0275element(89, "path", 39);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(90, "div", 1)(91, "h3", 40);
    \u0275\u0275text(92, "Monthly Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275template(93, RevenueReportComponent_ng_container_25_div_93_Template, 2, 0, "div", 41)(94, RevenueReportComponent_ng_container_25_div_94_Template, 16, 1, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 43)(96, "h3", 40);
    \u0275\u0275text(97, "Corridor Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275template(98, RevenueReportComponent_ng_container_25_div_98_Template, 2, 0, "div", 41)(99, RevenueReportComponent_ng_container_25_div_99_Template, 14, 1, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 12, ctx_r1.report.totalVolume, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 15, ctx_r1.report.transactionCount));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 17, ctx_r1.report.totalCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 20, ctx_r1.report.companyCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 23, ctx_r1.report.agentCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 26, ctx_r1.report.payoutCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 29, ctx_r1.report.fxGain, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(86, 32, ctx_r1.report.netRevenue, "1.2-2"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.report.monthlyBreakdown.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.report.monthlyBreakdown.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.report.corridorBreakdown.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.report.corridorBreakdown.length > 0);
  }
}
var RevenueReportComponent = class _RevenueReportComponent {
  constructor(api, notification, exportService) {
    this.api = api;
    this.notification = notification;
    this.exportService = exportService;
    this.startDate = null;
    this.endDate = null;
    this.loading = false;
    this.report = null;
  }
  loadReport() {
    this.loading = true;
    const params = {};
    if (this.startDate)
      params.startDate = this.formatDate(this.startDate);
    if (this.endDate)
      params.endDate = this.formatDate(this.endDate);
    this.api.getRevenueReport(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.report = res.data;
        } else {
          this.notification.error("Failed to load revenue report");
        }
      },
      error: () => {
        this.loading = false;
        this.notification.error("Failed to load revenue report");
      }
    });
  }
  formatMonth(year, month) {
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  }
  formatDate(d) {
    if (!d)
      return "";
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  exportReport(format) {
    const params = {};
    if (this.startDate)
      params.startDate = this.formatDate(this.startDate);
    if (this.endDate)
      params.endDate = this.formatDate(this.endDate);
    this.exportService.export("api/admin/reports/revenue/export", params, format);
  }
  static {
    this.\u0275fac = function RevenueReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RevenueReportComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevenueReportComponent, selectors: [["app-revenue-report"]], decls: 26, vars: 11, consts: [[1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-6"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft", "mb-6"], [1, "flex", "flex-wrap", "items-end", "gap-4"], [1, "flex", "flex-col", "gap-1.5"], ["for", "startDate", 1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], ["dateFormat", "dd/mm/yy", "placeholder", "DD/MM/YYYY", "styleClass", "w-full", "inputStyleClass", "w-48 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors text-sm", 3, "ngModelChange", "ngModel", "showIcon", "showClear"], ["for", "endDate", 1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "rounded-xl", "bg-brand-600", "text-white", "font-medium", "text-sm", "hover:bg-brand-700", "focus:ring-2", "focus:ring-brand-500", "focus:ring-offset-2", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], ["fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-700", "dark:text-surface-300", "font-medium", "text-sm", "hover:bg-surface-50", "dark:hover:bg-surface-600", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"], ["class", "flex justify-center items-center py-16", 4, "ngIf"], [4, "ngIf"], [1, "flex", "justify-center", "items-center", "py-16"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-12", "w-12", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-6"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5", "shadow-soft"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "gap-1"], [1, "text-sm", "font-medium", "text-surface-500", "dark:text-surface-400"], [1, "text-xl", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "flex", "items-center", "justify-center", "w-11", "h-11", "rounded-xl", "bg-brand-50", "dark:bg-brand-900/30"], ["fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"], [1, "text-xl", "font-bold", "text-success-600", "dark:text-success-400"], [1, "flex", "items-center", "justify-center", "w-11", "h-11", "rounded-xl", "bg-success-50", "dark:bg-success-900/30"], ["fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6", "text-success-600", "dark:text-success-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"], [1, "text-xl", "font-bold", "text-warning-600", "dark:text-warning-400"], [1, "flex", "items-center", "justify-center", "w-11", "h-11", "rounded-xl", "bg-warning-50", "dark:bg-warning-900/30"], ["fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6", "text-warning-600", "dark:text-warning-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-4"], ["class", "text-sm text-surface-500 dark:text-surface-400 py-4", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "py-4"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "bg-surface-50", "dark:bg-surface-700/50"], [1, "px-4", "py-3", "font-semibold", "text-surface-700", "dark:text-surface-300", "rounded-tl-xl"], [1, "px-4", "py-3", "font-semibold", "text-surface-700", "dark:text-surface-300", "text-right"], [1, "px-4", "py-3", "font-semibold", "text-surface-700", "dark:text-surface-300", "text-right", "rounded-tr-xl"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-700/30", "transition-colors"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-right", "font-mono", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-right", "font-mono", "text-success-600", "dark:text-success-400"]], template: function RevenueReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Revenue Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "label", 4);
        \u0275\u0275text(6, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p-datepicker", 5);
        \u0275\u0275twoWayListener("ngModelChange", function RevenueReportComponent_Template_p_datepicker_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "label", 6);
        \u0275\u0275text(10, "End Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p-datepicker", 5);
        \u0275\u0275twoWayListener("ngModelChange", function RevenueReportComponent_Template_p_datepicker_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 7);
        \u0275\u0275listener("click", function RevenueReportComponent_Template_button_click_12_listener() {
          return ctx.loadReport();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 8);
        \u0275\u0275element(14, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Generate ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275listener("click", function RevenueReportComponent_Template_button_click_16_listener() {
          return ctx.exportReport("excel");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 8);
        \u0275\u0275element(18, "path", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(20, "button", 10);
        \u0275\u0275listener("click", function RevenueReportComponent_Template_button_click_20_listener() {
          return ctx.exportReport("csv");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 8);
        \u0275\u0275element(22, "path", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " CSV ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(24, RevenueReportComponent_div_24_Template, 4, 0, "div", 12)(25, RevenueReportComponent_ng_container_25_Template, 100, 35, "ng-container", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
        \u0275\u0275property("showIcon", true)("showClear", true);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
        \u0275\u0275property("showIcon", true)("showClear", true);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.report);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.report);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.report && !ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgControlStatus, NgModel, DatePicker], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=revenue-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevenueReportComponent, [{
    type: Component,
    args: [{ selector: "app-revenue-report", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DecimalPipe,
      DatePipe,
      DatePicker
    ], template: `<h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100 mb-6">Revenue Report</h2>

<!-- Filters -->
<div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft mb-6">
  <div class="flex flex-wrap items-end gap-4">
    <!-- Start Date -->
    <div class="flex flex-col gap-1.5">
      <label for="startDate" class="text-sm font-medium text-surface-700 dark:text-surface-300">Start Date</label>
      <p-datepicker
        [(ngModel)]="startDate"
        dateFormat="dd/mm/yy"
        [showIcon]="true"
        [showClear]="true"
        placeholder="DD/MM/YYYY"
        styleClass="w-full"
        inputStyleClass="w-48 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors text-sm"
      />
    </div>

    <!-- End Date -->
    <div class="flex flex-col gap-1.5">
      <label for="endDate" class="text-sm font-medium text-surface-700 dark:text-surface-300">End Date</label>
      <p-datepicker
        [(ngModel)]="endDate"
        dateFormat="dd/mm/yy"
        [showIcon]="true"
        [showClear]="true"
        placeholder="DD/MM/YYYY"
        styleClass="w-full"
        inputStyleClass="w-48 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors text-sm"
      />
    </div>

    <!-- Generate Button -->
    <button
      (click)="loadReport()"
      [disabled]="loading"
      class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white font-medium text-sm hover:bg-brand-700 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      <!-- Chart bar icon -->
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
      Generate
    </button>

    <!-- Excel Export -->
    <button
      (click)="exportReport('excel')"
      [disabled]="!report"
      class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-300 font-medium text-sm hover:bg-surface-50 dark:hover:bg-surface-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      Excel
    </button>

    <!-- CSV Export -->
    <button
      (click)="exportReport('csv')"
      [disabled]="!report"
      class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-300 font-medium text-sm hover:bg-surface-50 dark:hover:bg-surface-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      CSV
    </button>
  </div>
</div>

<!-- Loading Spinner -->
<div *ngIf="loading" class="flex justify-center items-center py-16">
  <svg class="animate-spin h-12 w-12 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
</div>

<!-- Report Content -->
<ng-container *ngIf="report && !loading">
  <!-- Summary Stat Cards -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <!-- Total Volume -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-surface-500 dark:text-surface-400">Total Volume</span>
          <span class="text-xl font-bold text-brand-600 dark:text-brand-400">{{ report.totalVolume | number:'1.2-2' }}</span>
        </div>
        <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-900/30">
          <svg class="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Transaction Count -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-surface-500 dark:text-surface-400">Transaction Count</span>
          <span class="text-xl font-bold text-brand-600 dark:text-brand-400">{{ report.transactionCount | number }}</span>
        </div>
        <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-900/30">
          <svg class="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Total Service Charge -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-surface-500 dark:text-surface-400">Total Service Charge</span>
          <span class="text-xl font-bold text-success-600 dark:text-success-400">{{ report.totalCommission | number:'1.2-2' }}</span>
        </div>
        <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-success-50 dark:bg-success-900/30">
          <svg class="w-6 h-6 text-success-600 dark:text-success-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Company Service Charge -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-surface-500 dark:text-surface-400">Company Service Charge</span>
          <span class="text-xl font-bold text-success-600 dark:text-success-400">{{ report.companyCommission | number:'1.2-2' }}</span>
        </div>
        <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-success-50 dark:bg-success-900/30">
          <svg class="w-6 h-6 text-success-600 dark:text-success-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Agent Service Charge -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-surface-500 dark:text-surface-400">Agent Service Charge</span>
          <span class="text-xl font-bold text-warning-600 dark:text-warning-400">{{ report.agentCommission | number:'1.2-2' }}</span>
        </div>
        <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-warning-50 dark:bg-warning-900/30">
          <svg class="w-6 h-6 text-warning-600 dark:text-warning-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Payout Service Charge -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-surface-500 dark:text-surface-400">Payout Service Charge</span>
          <span class="text-xl font-bold text-brand-600 dark:text-brand-400">{{ report.payoutCommission | number:'1.2-2' }}</span>
        </div>
        <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-900/30">
          <svg class="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </div>
      </div>
    </div>

    <!-- FX Gain -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-surface-500 dark:text-surface-400">FX Gain</span>
          <span class="text-xl font-bold text-warning-600 dark:text-warning-400">{{ report.fxGain | number:'1.2-2' }}</span>
        </div>
        <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-warning-50 dark:bg-warning-900/30">
          <svg class="w-6 h-6 text-warning-600 dark:text-warning-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Net Revenue -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-surface-500 dark:text-surface-400">Net Revenue</span>
          <span class="text-xl font-bold text-success-600 dark:text-success-400">{{ report.netRevenue | number:'1.2-2' }}</span>
        </div>
        <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-success-50 dark:bg-success-900/30">
          <svg class="w-6 h-6 text-success-600 dark:text-success-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Monthly Breakdown -->
  <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft mb-6">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">Monthly Breakdown</h3>

    <div *ngIf="report.monthlyBreakdown.length === 0" class="text-sm text-surface-500 dark:text-surface-400 py-4">
      No monthly data available.
    </div>

    <div *ngIf="report.monthlyBreakdown.length > 0" class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="bg-surface-50 dark:bg-surface-700/50">
          <tr>
            <th class="px-4 py-3 font-semibold text-surface-700 dark:text-surface-300 rounded-tl-xl">Month</th>
            <th class="px-4 py-3 font-semibold text-surface-700 dark:text-surface-300 text-right">Transactions</th>
            <th class="px-4 py-3 font-semibold text-surface-700 dark:text-surface-300 text-right">Volume</th>
            <th class="px-4 py-3 font-semibold text-surface-700 dark:text-surface-300 text-right">Total Service Charge</th>
            <th class="px-4 py-3 font-semibold text-surface-700 dark:text-surface-300 text-right rounded-tr-xl">Company Service Charge</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
          <tr *ngFor="let row of report.monthlyBreakdown" class="hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors">
            <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ formatMonth(row.year, row.month) }}</td>
            <td class="px-4 py-3 text-right font-mono text-surface-900 dark:text-surface-100">{{ row.transactionCount | number }}</td>
            <td class="px-4 py-3 text-right font-mono text-surface-900 dark:text-surface-100">{{ row.volume | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-success-600 dark:text-success-400">{{ row.totalCommission | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-success-600 dark:text-success-400">{{ row.companyCommission | number:'1.2-2' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Corridor Breakdown -->
  <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">Corridor Breakdown</h3>

    <div *ngIf="report.corridorBreakdown.length === 0" class="text-sm text-surface-500 dark:text-surface-400 py-4">
      No corridor data available.
    </div>

    <div *ngIf="report.corridorBreakdown.length > 0" class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="bg-surface-50 dark:bg-surface-700/50">
          <tr>
            <th class="px-4 py-3 font-semibold text-surface-700 dark:text-surface-300 rounded-tl-xl">Corridor</th>
            <th class="px-4 py-3 font-semibold text-surface-700 dark:text-surface-300 text-right">Transactions</th>
            <th class="px-4 py-3 font-semibold text-surface-700 dark:text-surface-300 text-right">Volume</th>
            <th class="px-4 py-3 font-semibold text-surface-700 dark:text-surface-300 text-right rounded-tr-xl">Service Charge</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
          <tr *ngFor="let row of report.corridorBreakdown" class="hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors">
            <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ row.corridor }}</td>
            <td class="px-4 py-3 text-right font-mono text-surface-900 dark:text-surface-100">{{ row.transactionCount | number }}</td>
            <td class="px-4 py-3 text-right font-mono text-surface-900 dark:text-surface-100">{{ row.volume | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-success-600 dark:text-success-400">{{ row.commission | number:'1.2-2' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</ng-container>
`, styles: ["/* src/app/pages/admin/reports/revenue-report/revenue-report.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=revenue-report.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevenueReportComponent, { className: "RevenueReportComponent", filePath: "src/app/pages/admin/reports/revenue-report/revenue-report.component.ts", lineNumber: 53 });
})();
export {
  RevenueReportComponent
};
//# sourceMappingURL=chunk-U4WWXZ4B.js.map
