import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatNativeDateModule
} from "./chunk-3R4NSCNF.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-IXW56OZ7.js";
import {
  ExportService
} from "./chunk-BWFLUKJM.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-NVO6BOJL.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-6JH6Y4IN.js";
import {
  MatOption
} from "./chunk-4RZM2DGZ.js";
import "./chunk-IOMUWKJD.js";
import "./chunk-Q6H4NCRS.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-4T44KS6V.js";
import "./chunk-BE35DT6E.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-GT44UNPC.js";
import {
  NotificationService
} from "./chunk-474OV5BS.js";
import "./chunk-P4ZST5AN.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WB3VPGLQ.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-JCOTY37K.js";
import "./chunk-UIJ624TU.js";
import {
  MatFormField,
  MatLabel,
  MatSuffix
} from "./chunk-ZCHVZ7GG.js";
import {
  ApiService
} from "./chunk-2RUHVO6L.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButton,
  MatButtonModule,
  NgControlStatus,
  NgModel
} from "./chunk-WDVIFEQ7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MK4SB477.js";
import "./chunk-GPY2JV2J.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-MZ37WZKD.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BKSYICRS.js";

// src/app/pages/admin/reports/transaction-report/transaction-report.component.ts
var _c0 = () => [10, 25, 50, 100];
function TransactionReportComponent_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agent_r2 = ctx.$implicit;
    \u0275\u0275property("value", agent_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", agent_r2.businessName, " ");
  }
}
function TransactionReportComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "mat-card", 24)(2, "mat-card-content")(3, "div", 25)(4, "div", 26)(5, "span", 27);
    \u0275\u0275text(6, "Total Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-icon", 29);
    \u0275\u0275text(11, "receipt_long");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "mat-card", 30)(13, "mat-card-content")(14, "div", 25)(15, "div", 26)(16, "span", 27);
    \u0275\u0275text(17, "Send Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 31);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-icon", 32);
    \u0275\u0275text(22, "arrow_upward");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "mat-card", 33)(24, "mat-card-content")(25, "div", 25)(26, "div", 26)(27, "span", 27);
    \u0275\u0275text(28, "Receive Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 34);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "mat-icon", 35);
    \u0275\u0275text(33, "arrow_downward");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "mat-card", 36)(35, "mat-card-content")(36, "div", 25)(37, "div", 26)(38, "span", 27);
    \u0275\u0275text(39, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 37);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "mat-icon", 38);
    \u0275\u0275text(44, "payments");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, ctx_r2.reportData.totalCount));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 6, ctx_r2.reportData.totalSendVolume, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 9, ctx_r2.reportData.totalReceiveVolume, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 12, ctx_r2.reportData.totalCommission, "1.2-2"));
  }
}
function TransactionReportComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "mat-spinner", 40);
    \u0275\u0275elementEnd();
  }
}
function TransactionReportComponent_mat_card_57_div_4_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 64);
    \u0275\u0275text(1, "Reference");
    \u0275\u0275elementEnd();
  }
}
function TransactionReportComponent_mat_card_57_div_4_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 65)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.referenceNumber);
  }
}
function TransactionReportComponent_mat_card_57_div_4_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 64);
    \u0275\u0275text(1, "Sender");
    \u0275\u0275elementEnd();
  }
}
function TransactionReportComponent_mat_card_57_div_4_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275property("matTooltip", row_r6.senderCountry);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.senderName, " ");
  }
}
function TransactionReportComponent_mat_card_57_div_4_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 64);
    \u0275\u0275text(1, "Receiver");
    \u0275\u0275elementEnd();
  }
}
function TransactionReportComponent_mat_card_57_div_4_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275property("matTooltip", row_r7.receiverCountry);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.receiverName, " ");
  }
}
function TransactionReportComponent_mat_card_57_div_4_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 68);
    \u0275\u0275text(1, "Send Amount");
    \u0275\u0275elementEnd();
  }
}
function TransactionReportComponent_mat_card_57_div_4_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 69);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, row_r8.sendAmount, "1.2-2"), " ", row_r8.sendCurrency, " ");
  }
}
function TransactionReportComponent_mat_card_57_div_4_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 68);
    \u0275\u0275text(1, "Receive Amount");
    \u0275\u0275elementEnd();
  }
}
function TransactionReportComponent_mat_card_57_div_4_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 70);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, row_r9.receiveAmount, "1.2-2"), " ", row_r9.receiveCurrency, " ");
  }
}
function TransactionReportComponent_mat_card_57_div_4_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 68);
    \u0275\u0275text(1, "Service Charge");
    \u0275\u0275elementEnd();
  }
}
function TransactionReportComponent_mat_card_57_div_4_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 71);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r10.totalCommission, "1.2-2"), " ");
  }
}
function TransactionReportComponent_mat_card_57_div_4_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 64);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function TransactionReportComponent_mat_card_57_div_4_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 65)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("status-chip status-", row_r11.status.toLowerCase(), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r11.status, " ");
  }
}
function TransactionReportComponent_mat_card_57_div_4_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 64);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function TransactionReportComponent_mat_card_57_div_4_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r12.createdAt, "mediumDate"), " ");
  }
}
function TransactionReportComponent_mat_card_57_div_4_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 72);
  }
}
function TransactionReportComponent_mat_card_57_div_4_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 73);
  }
}
function TransactionReportComponent_mat_card_57_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "table", 45);
    \u0275\u0275elementContainerStart(2, 46);
    \u0275\u0275template(3, TransactionReportComponent_mat_card_57_div_4_th_3_Template, 2, 0, "th", 47)(4, TransactionReportComponent_mat_card_57_div_4_td_4_Template, 3, 1, "td", 48);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 49);
    \u0275\u0275template(6, TransactionReportComponent_mat_card_57_div_4_th_6_Template, 2, 0, "th", 47)(7, TransactionReportComponent_mat_card_57_div_4_td_7_Template, 2, 2, "td", 50);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 51);
    \u0275\u0275template(9, TransactionReportComponent_mat_card_57_div_4_th_9_Template, 2, 0, "th", 47)(10, TransactionReportComponent_mat_card_57_div_4_td_10_Template, 2, 2, "td", 50);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 52);
    \u0275\u0275template(12, TransactionReportComponent_mat_card_57_div_4_th_12_Template, 2, 0, "th", 53)(13, TransactionReportComponent_mat_card_57_div_4_td_13_Template, 3, 5, "td", 54);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 55);
    \u0275\u0275template(15, TransactionReportComponent_mat_card_57_div_4_th_15_Template, 2, 0, "th", 53)(16, TransactionReportComponent_mat_card_57_div_4_td_16_Template, 3, 5, "td", 56);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 57);
    \u0275\u0275template(18, TransactionReportComponent_mat_card_57_div_4_th_18_Template, 2, 0, "th", 53)(19, TransactionReportComponent_mat_card_57_div_4_td_19_Template, 3, 4, "td", 58);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 59);
    \u0275\u0275template(21, TransactionReportComponent_mat_card_57_div_4_th_21_Template, 2, 0, "th", 47)(22, TransactionReportComponent_mat_card_57_div_4_td_22_Template, 3, 4, "td", 48);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(23, 60);
    \u0275\u0275template(24, TransactionReportComponent_mat_card_57_div_4_th_24_Template, 2, 0, "th", 47)(25, TransactionReportComponent_mat_card_57_div_4_td_25_Template, 3, 4, "td", 48);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(26, TransactionReportComponent_mat_card_57_div_4_tr_26_Template, 1, 0, "tr", 61)(27, TransactionReportComponent_mat_card_57_div_4_tr_27_Template, 1, 0, "tr", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-paginator", 63);
    \u0275\u0275listener("page", function TransactionReportComponent_mat_card_57_div_4_Template_mat_paginator_page_28_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r2.pagedData);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r2.reportData.totalCount)("pageSize", ctx_r2.pageSize)("pageIndex", ctx_r2.pageIndex)("pageSizeOptions", \u0275\u0275pureFunction0(7, _c0));
  }
}
function TransactionReportComponent_mat_card_57_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 74);
    \u0275\u0275text(1, "No transactions found for the selected criteria.");
    \u0275\u0275elementEnd();
  }
}
function TransactionReportComponent_mat_card_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 41)(1, "mat-card-content")(2, "h2", 42);
    \u0275\u0275text(3, "Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TransactionReportComponent_mat_card_57_div_4_Template, 29, 8, "div", 43)(5, TransactionReportComponent_mat_card_57_ng_template_5_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emptyState_r13 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.reportData.transactions.length > 0)("ngIfElse", emptyState_r13);
  }
}
var TransactionReportComponent = class _TransactionReportComponent {
  constructor(api, notify, exportService) {
    this.api = api;
    this.notify = notify;
    this.exportService = exportService;
    this.startDateObj = null;
    this.endDateObj = null;
    this.agents = [];
    this.reportData = null;
    this.loading = false;
    this.pageSize = 25;
    this.pageIndex = 0;
    this.displayedColumns = [
      "referenceNumber",
      "senderName",
      "receiverName",
      "sendAmount",
      "receiveAmount",
      "commission",
      "status",
      "createdAt"
    ];
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
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
  formatDate(d) {
    if (!d)
      return "";
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
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
    if (this.startDateObj)
      params.startDate = this.formatDate(this.startDateObj);
    if (this.endDateObj)
      params.endDate = this.formatDate(this.endDateObj);
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
  exportReport(format) {
    const params = {};
    if (this.startDateObj)
      params.startDate = this.formatDate(this.startDateObj);
    if (this.endDateObj)
      params.endDate = this.formatDate(this.endDateObj);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionReportComponent, selectors: [["app-transaction-report"]], decls: 58, vars: 17, consts: [["startPicker", ""], ["endPicker", ""], ["emptyState", ""], [1, "report-page"], [1, "page-title"], [1, "filters-card"], [1, "filters-row"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "matDatepicker", "ngModel"], ["matIconSuffix", "", 3, "for"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "Pending"], ["value", "OnHold"], ["value", "Compliance"], ["value", "Completed"], ["value", "Cancelled"], ["mat-raised-button", "", "color", "primary", 1, "filter-btn", 3, "click", "disabled"], ["mat-stroked-button", "", 3, "click", "disabled"], ["class", "stats-grid", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "data-card", 4, "ngIf"], [1, "stats-grid"], [1, "stat-card", "stat-blue"], [1, "stat-inner"], [1, "stat-text"], [1, "stat-label"], [1, "stat-value", "stat-value-blue"], [1, "stat-icon", "stat-icon-blue"], [1, "stat-card", "stat-green"], [1, "stat-value", "stat-value-green"], [1, "stat-icon", "stat-icon-green"], [1, "stat-card", "stat-orange"], [1, "stat-value", "stat-value-orange"], [1, "stat-icon", "stat-icon-orange"], [1, "stat-card", "stat-purple"], [1, "stat-value", "stat-value-purple"], [1, "stat-icon", "stat-icon-purple"], [1, "loading-container"], ["diameter", "40"], [1, "data-card"], [1, "section-title"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "table-responsive"], ["mat-table", "", 1, "report-table", 3, "dataSource"], ["matColumnDef", "referenceNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "senderName"], ["mat-cell", "", 3, "matTooltip", 4, "matCellDef"], ["matColumnDef", "receiverName"], ["matColumnDef", "sendAmount"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right text-green mono-text", 4, "matCellDef"], ["matColumnDef", "receiveAmount"], ["mat-cell", "", "class", "text-right text-teal mono-text", 4, "matCellDef"], ["matColumnDef", "commission"], ["mat-cell", "", "class", "text-right mono-text", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "mono-text"], ["mat-cell", "", 3, "matTooltip"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right", "text-green", "mono-text"], ["mat-cell", "", 1, "text-right", "text-teal", "mono-text"], ["mat-cell", "", 1, "text-right", "mono-text"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-text"]], template: function TransactionReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "h1", 4);
        \u0275\u0275text(2, "Transaction Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-card", 5)(4, "mat-card-content")(5, "div", 6)(6, "mat-form-field", 7)(7, "mat-label");
        \u0275\u0275text(8, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionReportComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.startDateObj, $event) || (ctx.startDateObj = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-datepicker-toggle", 9)(11, "mat-datepicker", null, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 7)(14, "mat-label");
        \u0275\u0275text(15, "End Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionReportComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.endDateObj, $event) || (ctx.endDateObj = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "mat-datepicker-toggle", 9)(18, "mat-datepicker", null, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 7)(21, "mat-label");
        \u0275\u0275text(22, "Agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionReportComponent_Template_mat_select_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.agentId, $event) || (ctx.agentId = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(24, "mat-option", 11);
        \u0275\u0275text(25, "All Agents");
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, TransactionReportComponent_mat_option_26_Template, 2, 2, "mat-option", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "mat-form-field", 7)(28, "mat-label");
        \u0275\u0275text(29, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionReportComponent_Template_mat_select_ngModelChange_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(31, "mat-option", 11);
        \u0275\u0275text(32, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-option", 13);
        \u0275\u0275text(34, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-option", 14);
        \u0275\u0275text(36, "OnHold");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-option", 15);
        \u0275\u0275text(38, "Compliance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-option", 16);
        \u0275\u0275text(40, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "mat-option", 17);
        \u0275\u0275text(42, "Cancelled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "button", 18);
        \u0275\u0275listener("click", function TransactionReportComponent_Template_button_click_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.loadReport());
        });
        \u0275\u0275elementStart(44, "mat-icon");
        \u0275\u0275text(45, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " Generate ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 19);
        \u0275\u0275listener("click", function TransactionReportComponent_Template_button_click_47_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportReport("excel"));
        });
        \u0275\u0275elementStart(48, "mat-icon");
        \u0275\u0275text(49, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 19);
        \u0275\u0275listener("click", function TransactionReportComponent_Template_button_click_51_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportReport("csv"));
        });
        \u0275\u0275elementStart(52, "mat-icon");
        \u0275\u0275text(53, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " CSV ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(55, TransactionReportComponent_div_55_Template, 45, 15, "div", 20)(56, TransactionReportComponent_div_56_Template, 2, 0, "div", 21)(57, TransactionReportComponent_mat_card_57_Template, 7, 2, "mat-card", 22);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const startPicker_r14 = \u0275\u0275reference(12);
        const endPicker_r15 = \u0275\u0275reference(19);
        \u0275\u0275advance(9);
        \u0275\u0275property("matDatepicker", startPicker_r14);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDateObj);
        \u0275\u0275advance();
        \u0275\u0275property("for", startPicker_r14);
        \u0275\u0275advance(6);
        \u0275\u0275property("matDatepicker", endPicker_r15);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDateObj);
        \u0275\u0275advance();
        \u0275\u0275property("for", endPicker_r15);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.agentId);
        \u0275\u0275advance();
        \u0275\u0275property("value", void 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.agents);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.status);
        \u0275\u0275advance();
        \u0275\u0275property("value", void 0);
        \u0275\u0275advance(12);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.reportData);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.reportData);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.reportData);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reportData && !ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatCardModule, MatCard, MatCardContent, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatProgressSpinnerModule, MatProgressSpinner, MatPaginatorModule, MatPaginator, MatTooltipModule, MatTooltip, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatNativeDateModule], styles: ['\n\n.report-page[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n.stat-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue[_ngcontent-%COMP%] {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-value-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-green[_ngcontent-%COMP%] {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-value-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-orange[_ngcontent-%COMP%] {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-value-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-red[_ngcontent-%COMP%] {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-value-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-value-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-teal[_ngcontent-%COMP%] {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-value-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-indigo[_ngcontent-%COMP%] {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-value-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-pink[_ngcontent-%COMP%] {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-value-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-amber[_ngcontent-%COMP%] {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-value-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-cyan[_ngcontent-%COMP%] {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-value-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-lime[_ngcontent-%COMP%] {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-value-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-brown[_ngcontent-%COMP%] {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.stat-value-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.data-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.report-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #ed6c02;\n}\n.status-onhold[_ngcontent-%COMP%] {\n  background: #9e9e9e;\n}\n.status-compliance[_ngcontent-%COMP%] {\n  background: #7b1fa2;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.balance-form-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.balance-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 160px;\n}\n.dark-mode[_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  background: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .balance-form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=transaction-report.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionReportComponent, [{
    type: Component,
    args: [{ selector: "app-transaction-report", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatPaginatorModule,
      MatTooltipModule,
      MatDatepickerModule,
      MatNativeDateModule,
      DecimalPipe,
      DatePipe
    ], template: `<div class="report-page">
  <h1 class="page-title">Transaction Report</h1>

  <!-- Filters -->
  <mat-card class="filters-card">
    <mat-card-content>
      <div class="filters-row">
        <mat-form-field appearance="outline">
          <mat-label>Start Date</mat-label>
          <input matInput [matDatepicker]="startPicker" [(ngModel)]="startDateObj" />
          <mat-datepicker-toggle matIconSuffix [for]="startPicker"></mat-datepicker-toggle>
          <mat-datepicker #startPicker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>End Date</mat-label>
          <input matInput [matDatepicker]="endPicker" [(ngModel)]="endDateObj" />
          <mat-datepicker-toggle matIconSuffix [for]="endPicker"></mat-datepicker-toggle>
          <mat-datepicker #endPicker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Agent</mat-label>
          <mat-select [(ngModel)]="agentId">
            <mat-option [value]="undefined">All Agents</mat-option>
            <mat-option *ngFor="let agent of agents" [value]="agent.id">
              {{ agent.businessName }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Status</mat-label>
          <mat-select [(ngModel)]="status">
            <mat-option [value]="undefined">All</mat-option>
            <mat-option value="Pending">Pending</mat-option>
            <mat-option value="OnHold">OnHold</mat-option>
            <mat-option value="Compliance">Compliance</mat-option>
            <mat-option value="Completed">Completed</mat-option>
            <mat-option value="Cancelled">Cancelled</mat-option>
          </mat-select>
        </mat-form-field>

        <button mat-raised-button color="primary" class="filter-btn" (click)="loadReport()" [disabled]="loading">
          <mat-icon>search</mat-icon>
          Generate
        </button>
        <button mat-stroked-button (click)="exportReport('excel')" [disabled]="!reportData">
          <mat-icon>download</mat-icon> Excel
        </button>
        <button mat-stroked-button (click)="exportReport('csv')" [disabled]="!reportData">
          <mat-icon>download</mat-icon> CSV
        </button>
      </div>
    </mat-card-content>
  </mat-card>

  <!-- Summary Cards -->
  <div class="stats-grid" *ngIf="reportData">
    <mat-card class="stat-card stat-blue">
      <mat-card-content>
        <div class="stat-inner">
          <div class="stat-text">
            <span class="stat-label">Total Transactions</span>
            <span class="stat-value stat-value-blue">{{ reportData.totalCount | number }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-blue">receipt_long</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card class="stat-card stat-green">
      <mat-card-content>
        <div class="stat-inner">
          <div class="stat-text">
            <span class="stat-label">Send Volume</span>
            <span class="stat-value stat-value-green">{{ reportData.totalSendVolume | number:'1.2-2' }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-green">arrow_upward</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card class="stat-card stat-orange">
      <mat-card-content>
        <div class="stat-inner">
          <div class="stat-text">
            <span class="stat-label">Receive Volume</span>
            <span class="stat-value stat-value-orange">{{ reportData.totalReceiveVolume | number:'1.2-2' }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-orange">arrow_downward</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card class="stat-card stat-purple">
      <mat-card-content>
        <div class="stat-inner">
          <div class="stat-text">
            <span class="stat-label">Total Service Charge</span>
            <span class="stat-value stat-value-purple">{{ reportData.totalCommission | number:'1.2-2' }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-purple">payments</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>
  </div>

  <!-- Loading -->
  <div class="loading-container" *ngIf="loading">
    <mat-spinner diameter="40"></mat-spinner>
  </div>

  <!-- Transactions Table -->
  <mat-card class="data-card" *ngIf="reportData && !loading">
    <mat-card-content>
      <h2 class="section-title">Transactions</h2>

      <div class="table-responsive" *ngIf="reportData.transactions.length > 0; else emptyState">
        <table mat-table [dataSource]="pagedData" class="report-table">
          <!-- Reference -->
          <ng-container matColumnDef="referenceNumber">
            <th mat-header-cell *matHeaderCellDef>Reference</th>
            <td mat-cell *matCellDef="let row">
              <span class="mono-text">{{ row.referenceNumber }}</span>
            </td>
          </ng-container>

          <!-- Sender -->
          <ng-container matColumnDef="senderName">
            <th mat-header-cell *matHeaderCellDef>Sender</th>
            <td mat-cell *matCellDef="let row" [matTooltip]="row.senderCountry">
              {{ row.senderName }}
            </td>
          </ng-container>

          <!-- Receiver -->
          <ng-container matColumnDef="receiverName">
            <th mat-header-cell *matHeaderCellDef>Receiver</th>
            <td mat-cell *matCellDef="let row" [matTooltip]="row.receiverCountry">
              {{ row.receiverName }}
            </td>
          </ng-container>

          <!-- Send Amount -->
          <ng-container matColumnDef="sendAmount">
            <th mat-header-cell *matHeaderCellDef class="text-right">Send Amount</th>
            <td mat-cell *matCellDef="let row" class="text-right text-green mono-text">
              {{ row.sendAmount | number:'1.2-2' }} {{ row.sendCurrency }}
            </td>
          </ng-container>

          <!-- Receive Amount -->
          <ng-container matColumnDef="receiveAmount">
            <th mat-header-cell *matHeaderCellDef class="text-right">Receive Amount</th>
            <td mat-cell *matCellDef="let row" class="text-right text-teal mono-text">
              {{ row.receiveAmount | number:'1.2-2' }} {{ row.receiveCurrency }}
            </td>
          </ng-container>

          <!-- Commission -->
          <ng-container matColumnDef="commission">
            <th mat-header-cell *matHeaderCellDef class="text-right">Service Charge</th>
            <td mat-cell *matCellDef="let row" class="text-right mono-text">
              {{ row.totalCommission | number:'1.2-2' }}
            </td>
          </ng-container>

          <!-- Status -->
          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef>Status</th>
            <td mat-cell *matCellDef="let row">
              <span class="status-chip status-{{ row.status.toLowerCase() }}">
                {{ row.status }}
              </span>
            </td>
          </ng-container>

          <!-- Date -->
          <ng-container matColumnDef="createdAt">
            <th mat-header-cell *matHeaderCellDef>Date</th>
            <td mat-cell *matCellDef="let row">
              {{ row.createdAt | date:'mediumDate' }}
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>

        <mat-paginator
          [length]="reportData.totalCount"
          [pageSize]="pageSize"
          [pageIndex]="pageIndex"
          [pageSizeOptions]="[10, 25, 50, 100]"
          (page)="onPageChange($event)"
          showFirstLastButtons>
        </mat-paginator>
      </div>

      <ng-template #emptyState>
        <p class="empty-text">No transactions found for the selected criteria.</p>
      </ng-template>
    </mat-card-content>
  </mat-card>
</div>
`, styles: ['/* src/app/pages/admin/reports/transaction-report/transaction-report.component.scss */\n.report-page {\n  padding: 0;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card mat-card-content {\n  padding: 20px !important;\n}\n.filters-row {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row mat-form-field {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row .filter-btn {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card mat-card-content {\n  padding: 16px !important;\n}\n.stat-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue {\n  color: #1976d2;\n}\n.stat-value-blue {\n  color: #1976d2;\n}\n.stat-green {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green {\n  color: #2e7d32;\n}\n.stat-value-green {\n  color: #2e7d32;\n}\n.stat-orange {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange {\n  color: #ed6c02;\n}\n.stat-value-orange {\n  color: #ed6c02;\n}\n.stat-red {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red {\n  color: #d32f2f;\n}\n.stat-value-red {\n  color: #d32f2f;\n}\n.stat-purple {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple {\n  color: #7b1fa2;\n}\n.stat-value-purple {\n  color: #7b1fa2;\n}\n.stat-teal {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal {\n  color: #00897b;\n}\n.stat-value-teal {\n  color: #00897b;\n}\n.stat-indigo {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo {\n  color: #3949ab;\n}\n.stat-value-indigo {\n  color: #3949ab;\n}\n.stat-pink {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink {\n  color: #c2185b;\n}\n.stat-value-pink {\n  color: #c2185b;\n}\n.stat-amber {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber {\n  color: #ff8f00;\n}\n.stat-value-amber {\n  color: #ff8f00;\n}\n.stat-cyan {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan {\n  color: #0097a7;\n}\n.stat-value-cyan {\n  color: #0097a7;\n}\n.stat-lime {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime {\n  color: #689f38;\n}\n.stat-value-lime {\n  color: #689f38;\n}\n.stat-brown {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown {\n  color: #5d4037;\n}\n.stat-value-brown {\n  color: #5d4037;\n}\n.data-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card mat-card-content {\n  padding: 20px !important;\n}\n.section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive {\n  overflow-x: auto;\n}\n.report-table {\n  width: 100%;\n}\n.report-table .mat-mdc-header-cell {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table .mat-mdc-cell {\n  font-size: 0.875rem;\n}\n.report-table .mat-mdc-row:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right {\n  text-align: right;\n}\n.text-green {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed {\n  background: #2e7d32;\n}\n.status-pending {\n  background: #ed6c02;\n}\n.status-onhold {\n  background: #9e9e9e;\n}\n.status-compliance {\n  background: #7b1fa2;\n}\n.status-cancelled {\n  background: #d32f2f;\n}\n.status-failed {\n  background: #d32f2f;\n}\n.balance-form-card {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card mat-card-content {\n  padding: 24px !important;\n}\n.balance-form-row {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row mat-form-field {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row .submit-btn {\n  height: 56px;\n  min-width: 160px;\n}\n:host-context(.dark-mode) .page-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .stat-value {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .section-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .empty-text {\n  color: #64748b;\n}\n:host-context(.dark-mode) .stat-card,\n:host-context(.dark-mode) .filters-card,\n:host-context(.dark-mode) .data-card,\n:host-context(.dark-mode) .balance-form-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .stat-card:hover,\n:host-context(.dark-mode) .filters-card:hover,\n:host-context(.dark-mode) .data-card:hover,\n:host-context(.dark-mode) .balance-form-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n:host-context(.dark-mode) .balance-form-card {\n  border-color: #3b82f6;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-header-cell {\n  color: #94a3b8;\n  background: #334155;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-row:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row {\n    flex-direction: column;\n  }\n  .balance-form-row {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=transaction-report.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionReportComponent, { className: "TransactionReportComponent", filePath: "src/app/pages/admin/reports/transaction-report/transaction-report.component.ts", lineNumber: 74 });
})();
export {
  TransactionReportComponent
};
//# sourceMappingURL=chunk-UVMXG7V2.js.map
