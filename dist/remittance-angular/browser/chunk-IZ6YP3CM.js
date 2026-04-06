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
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-WBW3ZP3W.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
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

// src/app/pages/admin/reports/transaction-report/transaction-report.component.ts
var _c0 = (a0, a1, a2, a3, a4) => ({ "bg-warning-100 text-warning-800 dark:bg-warning-900/30 dark:text-warning-300": a0, "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300": a1, "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300": a2, "bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300": a3, "bg-danger-100 text-danger-800 dark:bg-danger-900/30 dark:text-danger-300": a4 });
function TransactionReportComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
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
function TransactionReportComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 3)(2, "div", 31)(3, "div")(4, "p", 32);
    \u0275\u0275text(5, "Total Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 33);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 35);
    \u0275\u0275element(11, "path", 36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 3)(13, "div", 31)(14, "div")(15, "p", 32);
    \u0275\u0275text(16, "Send Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 37);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 39);
    \u0275\u0275element(22, "path", 40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "div", 3)(24, "div", 31)(25, "div")(26, "p", 32);
    \u0275\u0275text(27, "Receive Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 41);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 43);
    \u0275\u0275element(33, "path", 44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "div", 3)(35, "div", 31)(36, "div")(37, "p", 32);
    \u0275\u0275text(38, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 45);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 47);
    \u0275\u0275element(44, "path", 36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, ctx_r1.reportData.totalCount));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 6, ctx_r1.reportData.totalSendVolume, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 9, ctx_r1.reportData.totalReceiveVolume, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 12, ctx_r1.reportData.totalCommission, "1.2-2"));
  }
}
function TransactionReportComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "circle", 50)(3, "path", 51);
    \u0275\u0275elementEnd()();
  }
}
function TransactionReportComponent_div_56_ng_container_4_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 72)(1, "td", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 74);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 75);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 76);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 77);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 78)(17, "span", 79);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 80);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.referenceNumber);
    \u0275\u0275advance();
    \u0275\u0275property("title", row_r4.senderCountry);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.senderName);
    \u0275\u0275advance();
    \u0275\u0275property("title", row_r4.receiverCountry);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.receiverName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(9, 13, row_r4.sendAmount, "1.2-2"), " ", row_r4.sendCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(12, 16, row_r4.receiveAmount, "1.2-2"), " ", row_r4.receiveCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 19, row_r4.totalCommission, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(25, _c0, row_r4.status === "Pending", row_r4.status === "OnHold", row_r4.status === "Compliance", row_r4.status === "Completed", row_r4.status === "Cancelled"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 22, row_r4.createdAt, "mediumDate"));
  }
}
function TransactionReportComponent_div_56_ng_container_4_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", size_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r5);
  }
}
function TransactionReportComponent_div_56_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 56)(2, "table", 57)(3, "thead", 58)(4, "tr")(5, "th", 59);
    \u0275\u0275text(6, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 59);
    \u0275\u0275text(8, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 59);
    \u0275\u0275text(10, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 60);
    \u0275\u0275text(12, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 60);
    \u0275\u0275text(14, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 60);
    \u0275\u0275text(16, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 59);
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 59);
    \u0275\u0275text(20, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody", 61);
    \u0275\u0275template(22, TransactionReportComponent_div_56_ng_container_4_tr_22_Template, 22, 31, "tr", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 63)(24, "div", 64)(25, "span");
    \u0275\u0275text(26, "Rows per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 65);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionReportComponent_div_56_ng_container_4_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TransactionReportComponent_div_56_ng_container_4_Template_select_ngModelChange_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange());
    });
    \u0275\u0275template(28, TransactionReportComponent_div_56_ng_container_4_option_28_Template, 2, 2, "option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 64)(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 66)(33, "button", 67);
    \u0275\u0275listener("click", function TransactionReportComponent_div_56_ng_container_4_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToFirst());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 19);
    \u0275\u0275element(35, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "button", 67);
    \u0275\u0275listener("click", function TransactionReportComponent_div_56_ng_container_4_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPrevious());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 19);
    \u0275\u0275element(38, "path", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "button", 67);
    \u0275\u0275listener("click", function TransactionReportComponent_div_56_ng_container_4_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToNext());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 19);
    \u0275\u0275element(41, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "button", 67);
    \u0275\u0275listener("click", function TransactionReportComponent_div_56_ng_container_4_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToLast());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 19);
    \u0275\u0275element(44, "path", 71);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.pagedData);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageSizeOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", ctx_r1.rangeStart, "\u2013", ctx_r1.rangeEnd, " of ", ctx_r1.reportData.totalCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex >= ctx_r1.totalPages - 1);
  }
}
function TransactionReportComponent_div_56_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "p", 82);
    \u0275\u0275text(2, "No transactions found for the selected criteria.");
    \u0275\u0275elementEnd()();
  }
}
function TransactionReportComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "h2", 54);
    \u0275\u0275text(3, "Transactions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, TransactionReportComponent_div_56_ng_container_4_Template, 45, 10, "ng-container", 55)(5, TransactionReportComponent_div_56_ng_template_5_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emptyState_r6 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.reportData.transactions.length > 0)("ngIfElse", emptyState_r6);
  }
}
var TransactionReportComponent = class _TransactionReportComponent {
  constructor(api, notify, exportService) {
    this.api = api;
    this.notify = notify;
    this.exportService = exportService;
    this.Math = Math;
    this.startDate = null;
    this.endDate = null;
    this.agents = [];
    this.reportData = null;
    this.loading = false;
    this.pageSize = 25;
    this.pageIndex = 0;
    this.pageSizeOptions = [10, 25, 50, 100];
  }
  ngOnInit() {
    this.loadAgents();
  }
  get pagedData() {
    if (!this.reportData?.transactions)
      return [];
    const start = this.pageIndex * this.pageSize;
    return this.reportData.transactions.slice(start, start + this.pageSize);
  }
  get totalPages() {
    if (!this.reportData)
      return 0;
    return Math.ceil(this.reportData.totalCount / this.pageSize);
  }
  get rangeStart() {
    return this.reportData ? this.pageIndex * this.pageSize + 1 : 0;
  }
  get rangeEnd() {
    if (!this.reportData)
      return 0;
    return Math.min((this.pageIndex + 1) * this.pageSize, this.reportData.totalCount);
  }
  onPageSizeChange() {
    this.pageIndex = 0;
  }
  goToFirst() {
    this.pageIndex = 0;
  }
  goToPrevious() {
    if (this.pageIndex > 0)
      this.pageIndex--;
  }
  goToNext() {
    if (this.pageIndex < this.totalPages - 1)
      this.pageIndex++;
  }
  goToLast() {
    this.pageIndex = this.totalPages - 1;
  }
  loadAgents() {
    this.api.getReportAgentsList().subscribe({
      next: (res) => {
        if (res.success) {
          this.agents = res.data ?? [];
        }
      }
    });
  }
  loadReport() {
    this.loading = true;
    this.pageIndex = 0;
    const params = {};
    if (this.startDate)
      params.startDate = this.formatDate(this.startDate);
    if (this.endDate)
      params.endDate = this.formatDate(this.endDate);
    if (this.agentId)
      params.agentId = this.agentId;
    if (this.status)
      params.status = this.status;
    this.api.getTransactionReport(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.reportData = res.data;
        } else {
          this.notify.error("Failed to load transaction report");
        }
      },
      error: () => {
        this.loading = false;
        this.notify.error("Failed to load transaction report");
      }
    });
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
    if (this.agentId)
      params.agentId = this.agentId;
    if (this.status)
      params.status = this.status;
    this.exportService.export("api/admin/reports/transactions/export", params, format);
  }
  static {
    this.\u0275fac = function TransactionReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TransactionReportComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionReportComponent, selectors: [["app-transaction-report"]], decls: 57, vars: 17, consts: [["emptyState", ""], [1, "space-y-6", "animate-fade-in"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "flex-wrap", "items-end", "gap-4"], [1, "flex", "flex-col", "gap-1.5", "min-w-[180px]"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], ["appendTo", "body", "dateFormat", "dd/mm/yy", "placeholder", "DD/MM/YYYY", "styleClass", "w-full", "inputStyleClass", "w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors", 3, "ngModelChange", "ngModel", "showIcon", "showClear"], [1, "flex", "flex-col", "gap-1.5", "min-w-[200px]"], [1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "gap-1.5", "min-w-[160px]"], ["value", "Pending"], ["value", "OnHold"], ["value", "Compliance"], ["value", "Completed"], ["value", "Cancelled"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "rounded-xl", "bg-brand-600", "text-white", "font-medium", "hover:bg-brand-700", "focus:ring-2", "focus:ring-brand-500", "focus:ring-offset-2", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "shadow-sm", 3, "click", "disabled"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "w-5", "h-5"], ["fill-rule", "evenodd", "d", "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z", "clip-rule", "evenodd"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "rounded-xl", "text-surface-700", "dark:text-surface-300", "font-medium", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition-colors", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "text-surface-700", "dark:text-surface-300", "font-medium", "hover:bg-surface-50", "dark:hover:bg-surface-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], ["d", "M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"], ["d", "M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"], ["class", "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up", 4, "ngIf"], ["class", "flex justify-center py-12", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft animate-slide-up", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4", "animate-slide-up"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-medium", "text-surface-500", "dark:text-surface-400"], [1, "mt-1", "text-2xl", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "p-3", "rounded-xl", "bg-brand-50", "dark:bg-brand-900/30"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "w-6", "h-6", "text-brand-600", "dark:text-brand-400"], ["fill-rule", "evenodd", "d", "M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.75 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z", "clip-rule", "evenodd"], [1, "mt-1", "text-2xl", "font-bold", "text-success-600", "dark:text-success-400"], [1, "p-3", "rounded-xl", "bg-success-50", "dark:bg-success-900/30"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "w-6", "h-6", "text-success-600", "dark:text-success-400"], ["fill-rule", "evenodd", "d", "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z", "clip-rule", "evenodd"], [1, "mt-1", "text-2xl", "font-bold", "text-warning-600", "dark:text-warning-400"], [1, "p-3", "rounded-xl", "bg-warning-50", "dark:bg-warning-900/30"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "w-6", "h-6", "text-warning-600", "dark:text-warning-400"], ["fill-rule", "evenodd", "d", "M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z", "clip-rule", "evenodd"], [1, "mt-1", "text-2xl", "font-bold", "text-purple-600", "dark:text-purple-400"], [1, "p-3", "rounded-xl", "bg-purple-50", "dark:bg-purple-900/30"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "w-6", "h-6", "text-purple-600", "dark:text-purple-400"], [1, "flex", "justify-center", "py-12"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft", "animate-slide-up"], [1, "p-6"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [4, "ngIf", "ngIfElse"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "bg-surface-50", "dark:bg-surface-700/50"], ["scope", "col", 1, "px-4", "py-3", "text-left", "font-semibold", "text-surface-600", "dark:text-surface-300"], ["scope", "col", 1, "px-4", "py-3", "text-right", "font-semibold", "text-surface-600", "dark:text-surface-300"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "px-4", "py-3", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "flex", "items-center", "gap-2", "text-sm", "text-surface-600", "dark:text-surface-400"], [1, "px-2", "py-1", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "text-sm", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-1"], [1, "p-1.5", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-30", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M4.21 5.23a.75.75 0 011.06-.02l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.04-1.08L8.168 10 4.23 6.29a.75.75 0 01-.02-1.06zm6 0a.75.75 0 011.06-.02l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.04-1.08L14.168 10 10.23 6.29a.75.75 0 01-.02-1.06z", "clip-rule", "evenodd"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-700/30", "transition-colors"], [1, "px-4", "py-3", "font-mono", "text-sm", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100", 3, "title"], [1, "px-4", "py-3", "text-right", "font-mono", "text-success-600", "dark:text-success-400"], [1, "px-4", "py-3", "text-right", "font-mono", "text-brand-600", "dark:text-brand-400"], [1, "px-4", "py-3", "text-right", "font-mono", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-400"], [1, "px-6", "pb-6"], [1, "text-surface-500", "dark:text-surface-400", "text-center", "py-8"]], template: function TransactionReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
        \u0275\u0275text(2, "Transaction Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "label", 6);
        \u0275\u0275text(7, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p-datepicker", 7);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionReportComponent_Template_p_datepicker_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
        \u0275\u0275text(11, "End Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p-datepicker", 7);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionReportComponent_Template_p_datepicker_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8)(14, "label", 6);
        \u0275\u0275text(15, "Agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionReportComponent_Template_select_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.agentId, $event) || (ctx.agentId = $event);
          return $event;
        });
        \u0275\u0275elementStart(17, "option", 10);
        \u0275\u0275text(18, "All Agents");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, TransactionReportComponent_option_19_Template, 2, 2, "option", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 12)(21, "label", 6);
        \u0275\u0275text(22, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionReportComponent_Template_select_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
          return $event;
        });
        \u0275\u0275elementStart(24, "option", 10);
        \u0275\u0275text(25, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "option", 13);
        \u0275\u0275text(27, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "option", 14);
        \u0275\u0275text(29, "OnHold");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "option", 15);
        \u0275\u0275text(31, "Compliance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "option", 16);
        \u0275\u0275text(33, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "option", 17);
        \u0275\u0275text(35, "Cancelled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "button", 18);
        \u0275\u0275listener("click", function TransactionReportComponent_Template_button_click_36_listener() {
          return ctx.loadReport();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 19);
        \u0275\u0275element(38, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, " Generate Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(40, "button", 21);
        \u0275\u0275listener("click", function TransactionReportComponent_Template_button_click_40_listener() {
          ctx.startDate = null;
          ctx.endDate = null;
          ctx.agentId = void 0;
          ctx.status = void 0;
          return ctx.reportData = null;
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 22);
        \u0275\u0275element(42, "path", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, " Clear Filters ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(44, "button", 24);
        \u0275\u0275listener("click", function TransactionReportComponent_Template_button_click_44_listener() {
          return ctx.exportReport("excel");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(45, "svg", 19);
        \u0275\u0275element(46, "path", 25)(47, "path", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(49, "button", 24);
        \u0275\u0275listener("click", function TransactionReportComponent_Template_button_click_49_listener() {
          return ctx.exportReport("csv");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(50, "svg", 19);
        \u0275\u0275element(51, "path", 25)(52, "path", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275text(53, " CSV ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(54, TransactionReportComponent_div_54_Template, 45, 15, "div", 27)(55, TransactionReportComponent_div_55_Template, 4, 0, "div", 28)(56, TransactionReportComponent_div_56_Template, 7, 2, "div", 29);
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
        \u0275\u0275property("ngValue", void 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.agents);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", void 0);
        \u0275\u0275advance(12);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", !ctx.reportData);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", !ctx.reportData);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.reportData);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reportData && !ctx.loading);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, DatePicker], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=transaction-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionReportComponent, [{
    type: Component,
    args: [{ selector: "app-transaction-report", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DecimalPipe,
      DatePipe,
      DatePicker
    ], template: `<div class="space-y-6 animate-fade-in">
  <h1 class="text-2xl font-bold text-surface-900 dark:text-surface-100">Transaction Report</h1>

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
          <option [ngValue]="undefined">All Agents</option>
          <option *ngFor="let agent of agents" [ngValue]="agent.id">{{ agent.businessName }}</option>
        </select>
      </div>

      <!-- Status -->
      <div class="flex flex-col gap-1.5 min-w-[160px]">
        <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Status</label>
        <select [(ngModel)]="status"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors">
          <option [ngValue]="undefined">All</option>
          <option value="Pending">Pending</option>
          <option value="OnHold">OnHold</option>
          <option value="Compliance">Compliance</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <!-- Buttons -->
      <button (click)="loadReport()" [disabled]="loading"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm">
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"/></svg>
        Generate Report
      </button>
      <button (click)="startDate = null; endDate = null; agentId = undefined; status = undefined; reportData = null"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-surface-700 dark:text-surface-300 font-medium hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors text-sm">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        Clear Filters
      </button>
      <button (click)="exportReport('excel')" [disabled]="!reportData"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 font-medium hover:bg-surface-50 dark:hover:bg-surface-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"/><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"/></svg>
        Excel
      </button>
      <button (click)="exportReport('csv')" [disabled]="!reportData"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 font-medium hover:bg-surface-50 dark:hover:bg-surface-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"/><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"/></svg>
        CSV
      </button>
    </div>
  </div>

  <!-- Summary Cards -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up" *ngIf="reportData">
    <!-- Total Transactions -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-surface-500 dark:text-surface-400">Total Transactions</p>
          <p class="mt-1 text-2xl font-bold text-brand-600 dark:text-brand-400">{{ reportData.totalCount | number }}</p>
        </div>
        <div class="p-3 rounded-xl bg-brand-50 dark:bg-brand-900/30">
          <svg class="w-6 h-6 text-brand-600 dark:text-brand-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.75 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clip-rule="evenodd"/></svg>
        </div>
      </div>
    </div>

    <!-- Send Volume -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-surface-500 dark:text-surface-400">Send Volume</p>
          <p class="mt-1 text-2xl font-bold text-success-600 dark:text-success-400">{{ reportData.totalSendVolume | number:'1.2-2' }}</p>
        </div>
        <div class="p-3 rounded-xl bg-success-50 dark:bg-success-900/30">
          <svg class="w-6 h-6 text-success-600 dark:text-success-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd"/></svg>
        </div>
      </div>
    </div>

    <!-- Receive Volume -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-surface-500 dark:text-surface-400">Receive Volume</p>
          <p class="mt-1 text-2xl font-bold text-warning-600 dark:text-warning-400">{{ reportData.totalReceiveVolume | number:'1.2-2' }}</p>
        </div>
        <div class="p-3 rounded-xl bg-warning-50 dark:bg-warning-900/30">
          <svg class="w-6 h-6 text-warning-600 dark:text-warning-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd"/></svg>
        </div>
      </div>
    </div>

    <!-- Total Service Charge -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-surface-500 dark:text-surface-400">Total Service Charge</p>
          <p class="mt-1 text-2xl font-bold text-purple-600 dark:text-purple-400">{{ reportData.totalCommission | number:'1.2-2' }}</p>
        </div>
        <div class="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/30">
          <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.75 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clip-rule="evenodd"/></svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading -->
  <div class="flex justify-center py-12" *ngIf="loading">
    <svg class="animate-spin h-10 w-10 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div>

  <!-- Transactions Table -->
  <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft animate-slide-up" *ngIf="reportData && !loading">
    <div class="p-6">
      <h2 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Transactions</h2>
    </div>

    <ng-container *ngIf="reportData.transactions.length > 0; else emptyState">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-surface-50 dark:bg-surface-700/50">
            <tr>
              <th scope="col" class="px-4 py-3 text-left font-semibold text-surface-600 dark:text-surface-300">Reference</th>
              <th scope="col" class="px-4 py-3 text-left font-semibold text-surface-600 dark:text-surface-300">Sender</th>
              <th scope="col" class="px-4 py-3 text-left font-semibold text-surface-600 dark:text-surface-300">Receiver</th>
              <th scope="col" class="px-4 py-3 text-right font-semibold text-surface-600 dark:text-surface-300">Send Amount</th>
              <th scope="col" class="px-4 py-3 text-right font-semibold text-surface-600 dark:text-surface-300">Receive Amount</th>
              <th scope="col" class="px-4 py-3 text-right font-semibold text-surface-600 dark:text-surface-300">Service Charge</th>
              <th scope="col" class="px-4 py-3 text-left font-semibold text-surface-600 dark:text-surface-300">Status</th>
              <th scope="col" class="px-4 py-3 text-left font-semibold text-surface-600 dark:text-surface-300">Date</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
            <tr *ngFor="let row of pagedData" class="hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors">
              <td class="px-4 py-3 font-mono text-sm text-surface-900 dark:text-surface-100">{{ row.referenceNumber }}</td>
              <td class="px-4 py-3 text-surface-900 dark:text-surface-100" [title]="row.senderCountry">{{ row.senderName }}</td>
              <td class="px-4 py-3 text-surface-900 dark:text-surface-100" [title]="row.receiverCountry">{{ row.receiverName }}</td>
              <td class="px-4 py-3 text-right font-mono text-success-600 dark:text-success-400">{{ row.sendAmount | number:'1.2-2' }} {{ row.sendCurrency }}</td>
              <td class="px-4 py-3 text-right font-mono text-brand-600 dark:text-brand-400">{{ row.receiveAmount | number:'1.2-2' }} {{ row.receiveCurrency }}</td>
              <td class="px-4 py-3 text-right font-mono text-surface-900 dark:text-surface-100">{{ row.totalCommission | number:'1.2-2' }}</td>
              <td class="px-4 py-3">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  [ngClass]="{
                    'bg-warning-100 text-warning-800 dark:bg-warning-900/30 dark:text-warning-300': row.status === 'Pending',
                    'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300': row.status === 'OnHold',
                    'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300': row.status === 'Compliance',
                    'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300': row.status === 'Completed',
                    'bg-danger-100 text-danger-800 dark:bg-danger-900/30 dark:text-danger-300': row.status === 'Cancelled'
                  }">
                  {{ row.status }}
                </span>
              </td>
              <td class="px-4 py-3 text-surface-600 dark:text-surface-400">{{ row.createdAt | date:'mediumDate' }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex flex-wrap items-center justify-between gap-4 px-4 py-3 border-t border-surface-200 dark:border-surface-700">
        <div class="flex items-center gap-2 text-sm text-surface-600 dark:text-surface-400">
          <span>Rows per page:</span>
          <select [(ngModel)]="pageSize" (ngModelChange)="onPageSizeChange()"
            class="px-2 py-1 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors">
            <option *ngFor="let size of pageSizeOptions" [ngValue]="size">{{ size }}</option>
          </select>
        </div>
        <div class="flex items-center gap-2 text-sm text-surface-600 dark:text-surface-400">
          <span>{{ rangeStart }}\u2013{{ rangeEnd }} of {{ reportData.totalCount }}</span>
          <div class="flex items-center gap-1">
            <button (click)="goToFirst()" [disabled]="pageIndex === 0"
              class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z" clip-rule="evenodd"/></svg>
            </button>
            <button (click)="goToPrevious()" [disabled]="pageIndex === 0"
              class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"/></svg>
            </button>
            <button (click)="goToNext()" [disabled]="pageIndex >= totalPages - 1"
              class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"/></svg>
            </button>
            <button (click)="goToLast()" [disabled]="pageIndex >= totalPages - 1"
              class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.21 5.23a.75.75 0 011.06-.02l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.04-1.08L8.168 10 4.23 6.29a.75.75 0 01-.02-1.06zm6 0a.75.75 0 011.06-.02l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.04-1.08L14.168 10 10.23 6.29a.75.75 0 01-.02-1.06z" clip-rule="evenodd"/></svg>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-template #emptyState>
      <div class="px-6 pb-6">
        <p class="text-surface-500 dark:text-surface-400 text-center py-8">No transactions found for the selected criteria.</p>
      </div>
    </ng-template>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/reports/transaction-report/transaction-report.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=transaction-report.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionReportComponent, { className: "TransactionReportComponent", filePath: "src/app/pages/admin/reports/transaction-report/transaction-report.component.ts", lineNumber: 53 });
})();
export {
  TransactionReportComponent
};
//# sourceMappingURL=chunk-IZ6YP3CM.js.map
