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
import "./chunk-LDWTK5YJ.js";
import "./chunk-R63TWOS6.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-WBW3ZP3W.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
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

// src/app/pages/admin/reports/commission-report/commission-report.component.ts
function CommissionReportComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agent_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", agent_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(agent_r1.businessName);
  }
}
function CommissionReportComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "circle", 22)(3, "path", 23);
    \u0275\u0275elementEnd()();
  }
}
function CommissionReportComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 2)(2, "div", 25)(3, "div")(4, "p", 26);
    \u0275\u0275text(5, "Total Earnings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 27);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 29);
    \u0275\u0275element(11, "path", 30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 2)(13, "div", 25)(14, "div")(15, "p", 26);
    \u0275\u0275text(16, "Total Reversed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 31);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 33);
    \u0275\u0275element(22, "path", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 2, ctx_r1.report.totalEarnings, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 5, ctx_r1.report.totalReversed, "1.2-2"));
  }
}
function CommissionReportComponent_div_36_div_4_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 47)(1, "td", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 49);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 49);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 50);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 51);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.agentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.agentType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, row_r3.sendingCommission, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 9, row_r3.payoutCommission, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 12, row_r3.totalEarnings, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.transactionCount);
  }
}
function CommissionReportComponent_div_36_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 41)(2, "thead", 42)(3, "tr")(4, "th", 43);
    \u0275\u0275text(5, "Agent Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 43);
    \u0275\u0275text(7, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 44);
    \u0275\u0275text(9, "Sending Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 44);
    \u0275\u0275text(11, "Payout Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 44);
    \u0275\u0275text(13, "Total Earnings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 44);
    \u0275\u0275text(15, "Transaction Count");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 45);
    \u0275\u0275template(17, CommissionReportComponent_div_36_div_4_tr_17_Template, 16, 15, "tr", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.report.agentSummaries);
  }
}
function CommissionReportComponent_div_36_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "p", 53);
    \u0275\u0275text(2, "No commission data found for the selected period.");
    \u0275\u0275elementEnd()();
  }
}
function CommissionReportComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "h3", 37);
    \u0275\u0275text(3, "Agent Service Charge Breakdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CommissionReportComponent_div_36_div_4_Template, 18, 1, "div", 38)(5, CommissionReportComponent_div_36_div_5_Template, 3, 0, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.report.agentSummaries.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.report.agentSummaries.length);
  }
}
var CommissionReportComponent = class _CommissionReportComponent {
  constructor(api, notification, exportService, decimalPipe, datePipe) {
    this.api = api;
    this.notification = notification;
    this.exportService = exportService;
    this.decimalPipe = decimalPipe;
    this.datePipe = datePipe;
    this.agents = [];
    this.startDate = null;
    this.endDate = null;
    this.agentId = null;
    this.loading = false;
    this.report = null;
  }
  ngOnInit() {
    this.setDefaultDates();
    this.loadAgents();
    this.loadReport();
  }
  setDefaultDates() {
    const today = /* @__PURE__ */ new Date();
    const thirtyDaysAgo = /* @__PURE__ */ new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    this.endDate = today;
    this.startDate = thirtyDaysAgo;
  }
  toDateString(d) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  loadAgents() {
    this.api.getReportAgentsList().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.agents = res.data;
        }
      },
      error: () => this.notification.error("Failed to load agents list.")
    });
  }
  loadReport() {
    this.loading = true;
    const params = {
      startDate: this.startDate ? this.toDateString(this.startDate) : void 0,
      endDate: this.endDate ? this.toDateString(this.endDate) : void 0
    };
    if (this.agentId) {
      params.agentId = this.agentId;
    }
    this.api.getCommissionReport(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data) {
          this.report = res.data;
        } else {
          this.report = null;
          if (res.message) {
            this.notification.warn(res.message);
          }
        }
      },
      error: () => {
        this.loading = false;
        this.notification.error("Failed to load commission report.");
      }
    });
  }
  exportReport(format) {
    const params = {
      startDate: this.startDate ? this.toDateString(this.startDate) : void 0,
      endDate: this.endDate ? this.toDateString(this.endDate) : void 0
    };
    if (this.agentId)
      params.agentId = this.agentId;
    this.exportService.export("api/admin/reports/commissions/export", params, format);
  }
  static {
    this.\u0275fac = function CommissionReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommissionReportComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(DecimalPipe), \u0275\u0275directiveInject(DatePipe));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommissionReportComponent, selectors: [["app-commission-report"]], features: [\u0275\u0275ProvidersFeature([DecimalPipe, DatePipe])], decls: 37, vars: 15, consts: [[1, "space-y-6", "animate-fade-in"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "flex-wrap", "items-end", "gap-4"], [1, "flex", "flex-col", "gap-1.5", "min-w-[180px]"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], ["appendTo", "body", "dateFormat", "dd/mm/yy", "placeholder", "DD/MM/YYYY", "styleClass", "w-full", "inputStyleClass", "w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors", 3, "ngModelChange", "ngModel", "showIcon", "showClear"], [1, "flex", "flex-col", "gap-1.5", "min-w-[200px]"], [1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "rounded-xl", "bg-brand-600", "text-white", "font-medium", "hover:bg-brand-700", "focus:ring-2", "focus:ring-brand-500", "focus:ring-offset-2", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "w-5", "h-5"], ["d", "M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0L4.45 7.628a1 1 0 01-.683.683l-1.944.6a1 1 0 000 1.898l1.944.6a1 1 0 01.683.683l.6 1.944a1 1 0 001.898 0l.6-1.944a1 1 0 01.683-.683l1.944-.6a1 1 0 000-1.898l-1.944-.6a1 1 0 01-.683-.683l-.6-1.944z"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "text-surface-700", "dark:text-surface-300", "font-medium", "hover:bg-surface-50", "dark:hover:bg-surface-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], ["d", "M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"], ["d", "M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"], ["class", "flex justify-center py-12", 4, "ngIf"], ["class", "grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-up", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft animate-slide-up", 4, "ngIf"], [1, "flex", "justify-center", "py-12"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "animate-slide-up"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-medium", "text-surface-500", "dark:text-surface-400"], [1, "mt-1", "text-2xl", "font-bold", "text-success-600", "dark:text-success-400"], [1, "p-3", "rounded-xl", "bg-success-50", "dark:bg-success-900/30"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "w-6", "h-6", "text-success-600", "dark:text-success-400"], ["fill-rule", "evenodd", "d", "M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.75 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z", "clip-rule", "evenodd"], [1, "mt-1", "text-2xl", "font-bold", "text-danger-600", "dark:text-danger-400"], [1, "p-3", "rounded-xl", "bg-danger-50", "dark:bg-danger-900/30"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "w-6", "h-6", "text-danger-600", "dark:text-danger-400"], ["fill-rule", "evenodd", "d", "M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z", "clip-rule", "evenodd"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft", "animate-slide-up"], [1, "p-6"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "px-6 pb-6", 4, "ngIf"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "bg-surface-50", "dark:bg-surface-700/50"], ["scope", "col", 1, "px-4", "py-3", "text-left", "font-semibold", "text-surface-600", "dark:text-surface-300"], ["scope", "col", 1, "px-4", "py-3", "text-right", "font-semibold", "text-surface-600", "dark:text-surface-300"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-700/30", "transition-colors"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-right", "font-mono", "text-brand-600", "dark:text-brand-400"], [1, "px-4", "py-3", "text-right", "font-mono", "text-success-600", "dark:text-success-400"], [1, "px-4", "py-3", "text-right", "font-mono", "text-surface-900", "dark:text-surface-100"], [1, "px-6", "pb-6"], [1, "text-surface-500", "dark:text-surface-400", "text-center", "py-8"]], template: function CommissionReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Commission Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "label", 5);
        \u0275\u0275text(7, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p-datepicker", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CommissionReportComponent_Template_p_datepicker_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "label", 5);
        \u0275\u0275text(11, "End Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p-datepicker", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CommissionReportComponent_Template_p_datepicker_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "label", 5);
        \u0275\u0275text(15, "Agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CommissionReportComponent_Template_select_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.agentId, $event) || (ctx.agentId = $event);
          return $event;
        });
        \u0275\u0275elementStart(17, "option", 9);
        \u0275\u0275text(18, "All Agents");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, CommissionReportComponent_option_19_Template, 2, 2, "option", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 11);
        \u0275\u0275listener("click", function CommissionReportComponent_Template_button_click_20_listener() {
          return ctx.loadReport();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 12);
        \u0275\u0275element(22, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Generate ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "button", 14);
        \u0275\u0275listener("click", function CommissionReportComponent_Template_button_click_24_listener() {
          return ctx.exportReport("excel");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(25, "svg", 12);
        \u0275\u0275element(26, "path", 15)(27, "path", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(29, "button", 14);
        \u0275\u0275listener("click", function CommissionReportComponent_Template_button_click_29_listener() {
          return ctx.exportReport("csv");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(30, "svg", 12);
        \u0275\u0275element(31, "path", 15)(32, "path", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " CSV ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(34, CommissionReportComponent_div_34_Template, 4, 0, "div", 17)(35, CommissionReportComponent_div_35_Template, 23, 8, "div", 18)(36, CommissionReportComponent_div_36_Template, 6, 2, "div", 19);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
        \u0275\u0275property("showIcon", true)("showClear", true);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
        \u0275\u0275property("showIcon", true)("showClear", true);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.agentId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.agents);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.report);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", !ctx.report);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.report);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.report);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, DatePicker], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=commission-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommissionReportComponent, [{
    type: Component,
    args: [{ selector: "app-commission-report", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DatePicker
    ], providers: [DecimalPipe, DatePipe], template: `<div class="space-y-6 animate-fade-in">
  <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100">Commission Report</h2>

  <!-- Filters -->
  <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
    <div class="flex flex-wrap items-end gap-4">
      <!-- Start Date -->
      <div class="flex flex-col gap-1.5 min-w-[180px]">
        <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Start Date</label>
        <p-datepicker appendTo="body" [(ngModel)]="startDate" dateFormat="dd/mm/yy" [showIcon]="true" [showClear]="true" placeholder="DD/MM/YYYY" styleClass="w-full" inputStyleClass="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
      </div>

      <!-- End Date -->
      <div class="flex flex-col gap-1.5 min-w-[180px]">
        <label class="text-sm font-medium text-surface-700 dark:text-surface-300">End Date</label>
        <p-datepicker appendTo="body" [(ngModel)]="endDate" dateFormat="dd/mm/yy" [showIcon]="true" [showClear]="true" placeholder="DD/MM/YYYY" styleClass="w-full" inputStyleClass="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
      </div>

      <!-- Agent -->
      <div class="flex flex-col gap-1.5 min-w-[200px]">
        <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Agent</label>
        <select [(ngModel)]="agentId"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors">
          <option [ngValue]="null">All Agents</option>
          <option *ngFor="let agent of agents" [ngValue]="agent.id">{{ agent.businessName }}</option>
        </select>
      </div>

      <!-- Buttons -->
      <button (click)="loadReport()" [disabled]="loading"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0L4.45 7.628a1 1 0 01-.683.683l-1.944.6a1 1 0 000 1.898l1.944.6a1 1 0 01.683.683l.6 1.944a1 1 0 001.898 0l.6-1.944a1 1 0 01.683-.683l1.944-.6a1 1 0 000-1.898l-1.944-.6a1 1 0 01-.683-.683l-.6-1.944z"/></svg>
        Generate
      </button>
      <button (click)="exportReport('excel')" [disabled]="!report"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 font-medium hover:bg-surface-50 dark:hover:bg-surface-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"/><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"/></svg>
        Excel
      </button>
      <button (click)="exportReport('csv')" [disabled]="!report"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 font-medium hover:bg-surface-50 dark:hover:bg-surface-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"/><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"/></svg>
        CSV
      </button>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex justify-center py-12">
    <svg class="animate-spin h-10 w-10 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div>

  <!-- Summary Cards -->
  <div *ngIf="!loading && report" class="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-up">
    <!-- Total Earnings -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-surface-500 dark:text-surface-400">Total Earnings</p>
          <p class="mt-1 text-2xl font-bold text-success-600 dark:text-success-400">{{ report.totalEarnings | number:'1.2-2' }}</p>
        </div>
        <div class="p-3 rounded-xl bg-success-50 dark:bg-success-900/30">
          <svg class="w-6 h-6 text-success-600 dark:text-success-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.75 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clip-rule="evenodd"/></svg>
        </div>
      </div>
    </div>

    <!-- Total Reversed -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-surface-500 dark:text-surface-400">Total Reversed</p>
          <p class="mt-1 text-2xl font-bold text-danger-600 dark:text-danger-400">{{ report.totalReversed | number:'1.2-2' }}</p>
        </div>
        <div class="p-3 rounded-xl bg-danger-50 dark:bg-danger-900/30">
          <svg class="w-6 h-6 text-danger-600 dark:text-danger-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z" clip-rule="evenodd"/></svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Agent Summaries Table -->
  <div *ngIf="!loading && report" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft animate-slide-up">
    <div class="p-6">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Agent Service Charge Breakdown</h3>
    </div>

    <div class="overflow-x-auto" *ngIf="report.agentSummaries.length > 0">
      <table class="w-full text-sm">
        <thead class="bg-surface-50 dark:bg-surface-700/50">
          <tr>
            <th scope="col" class="px-4 py-3 text-left font-semibold text-surface-600 dark:text-surface-300">Agent Name</th>
            <th scope="col" class="px-4 py-3 text-left font-semibold text-surface-600 dark:text-surface-300">Agent Type</th>
            <th scope="col" class="px-4 py-3 text-right font-semibold text-surface-600 dark:text-surface-300">Sending Service Charge</th>
            <th scope="col" class="px-4 py-3 text-right font-semibold text-surface-600 dark:text-surface-300">Payout Service Charge</th>
            <th scope="col" class="px-4 py-3 text-right font-semibold text-surface-600 dark:text-surface-300">Total Earnings</th>
            <th scope="col" class="px-4 py-3 text-right font-semibold text-surface-600 dark:text-surface-300">Transaction Count</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
          <tr *ngFor="let row of report.agentSummaries" class="hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors">
            <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ row.agentName }}</td>
            <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ row.agentType }}</td>
            <td class="px-4 py-3 text-right font-mono text-brand-600 dark:text-brand-400">{{ row.sendingCommission | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-brand-600 dark:text-brand-400">{{ row.payoutCommission | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-success-600 dark:text-success-400">{{ row.totalEarnings | number:'1.2-2' }}</td>
            <td class="px-4 py-3 text-right font-mono text-surface-900 dark:text-surface-100">{{ row.transactionCount }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div *ngIf="!report.agentSummaries.length" class="px-6 pb-6">
      <p class="text-surface-500 dark:text-surface-400 text-center py-8">No commission data found for the selected period.</p>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/reports/commission-report/commission-report.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=commission-report.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: ExportService }, { type: DecimalPipe }, { type: DatePipe }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommissionReportComponent, { className: "CommissionReportComponent", filePath: "src/app/pages/admin/reports/commission-report/commission-report.component.ts", lineNumber: 21 });
})();
export {
  CommissionReportComponent
};
//# sourceMappingURL=chunk-XDJPTDEN.js.map
