import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatNativeDateModule
} from "./chunk-3R4NSCNF.js";
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
  ɵɵProvidersFeature,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BKSYICRS.js";

// src/app/pages/admin/reports/commission-report/commission-report.component.ts
function CommissionReportComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
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
function CommissionReportComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 17);
    \u0275\u0275elementEnd();
  }
}
function CommissionReportComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-card", 19)(2, "mat-card-content")(3, "div", 20)(4, "div", 21)(5, "span", 22);
    \u0275\u0275text(6, "Total Earnings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-icon", 24);
    \u0275\u0275text(11, "account_balance_wallet");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "mat-card", 25)(13, "mat-card-content")(14, "div", 20)(15, "div", 21)(16, "span", 22);
    \u0275\u0275text(17, "Total Reversed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 26);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-icon", 27);
    \u0275\u0275text(22, "undo");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 2, ctx_r2.report.totalEarnings, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 5, ctx_r2.report.totalReversed, "1.2-2"));
  }
}
function CommissionReportComponent_mat_card_40_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 47);
    \u0275\u0275text(1, "Agent Name");
    \u0275\u0275elementEnd();
  }
}
function CommissionReportComponent_mat_card_40_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.agentName);
  }
}
function CommissionReportComponent_mat_card_40_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 47);
    \u0275\u0275text(1, "Agent Type");
    \u0275\u0275elementEnd();
  }
}
function CommissionReportComponent_mat_card_40_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.agentType);
  }
}
function CommissionReportComponent_mat_card_40_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Sending Service Charge");
    \u0275\u0275elementEnd();
  }
}
function CommissionReportComponent_mat_card_40_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r6.sendingCommission, "1.2-2"), " ");
  }
}
function CommissionReportComponent_mat_card_40_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Payout Service Charge");
    \u0275\u0275elementEnd();
  }
}
function CommissionReportComponent_mat_card_40_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r7.payoutCommission, "1.2-2"), " ");
  }
}
function CommissionReportComponent_mat_card_40_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Total Earnings");
    \u0275\u0275elementEnd();
  }
}
function CommissionReportComponent_mat_card_40_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r8.totalEarnings, "1.2-2"), " ");
  }
}
function CommissionReportComponent_mat_card_40_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Transaction Count");
    \u0275\u0275elementEnd();
  }
}
function CommissionReportComponent_mat_card_40_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r9.transactionCount, " ");
  }
}
function CommissionReportComponent_mat_card_40_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function CommissionReportComponent_mat_card_40_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function CommissionReportComponent_mat_card_40_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " No commission data found for the selected period. ");
    \u0275\u0275elementEnd();
  }
}
function CommissionReportComponent_mat_card_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 28)(1, "mat-card-content")(2, "h3", 29);
    \u0275\u0275text(3, "Agent Service Charge Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "table", 31);
    \u0275\u0275elementContainerStart(6, 32);
    \u0275\u0275template(7, CommissionReportComponent_mat_card_40_th_7_Template, 2, 0, "th", 33)(8, CommissionReportComponent_mat_card_40_td_8_Template, 2, 1, "td", 34);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 35);
    \u0275\u0275template(10, CommissionReportComponent_mat_card_40_th_10_Template, 2, 0, "th", 33)(11, CommissionReportComponent_mat_card_40_td_11_Template, 2, 1, "td", 34);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 36);
    \u0275\u0275template(13, CommissionReportComponent_mat_card_40_th_13_Template, 2, 0, "th", 37)(14, CommissionReportComponent_mat_card_40_td_14_Template, 3, 4, "td", 38);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 39);
    \u0275\u0275template(16, CommissionReportComponent_mat_card_40_th_16_Template, 2, 0, "th", 37)(17, CommissionReportComponent_mat_card_40_td_17_Template, 3, 4, "td", 38);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 40);
    \u0275\u0275template(19, CommissionReportComponent_mat_card_40_th_19_Template, 2, 0, "th", 37)(20, CommissionReportComponent_mat_card_40_td_20_Template, 3, 4, "td", 41);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 42);
    \u0275\u0275template(22, CommissionReportComponent_mat_card_40_th_22_Template, 2, 0, "th", 37)(23, CommissionReportComponent_mat_card_40_td_23_Template, 2, 1, "td", 43);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(24, CommissionReportComponent_mat_card_40_tr_24_Template, 1, 0, "tr", 44)(25, CommissionReportComponent_mat_card_40_tr_25_Template, 1, 0, "tr", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, CommissionReportComponent_mat_card_40_div_26_Template, 2, 0, "div", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("dataSource", ctx_r2.report.agentSummaries);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.report.agentSummaries.length);
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
    this.startDateObj = null;
    this.endDateObj = null;
    this.agentId = null;
    this.loading = false;
    this.report = null;
    this.displayedColumns = [
      "agentName",
      "agentType",
      "sendingCommission",
      "payoutCommission",
      "totalEarnings",
      "transactionCount"
    ];
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
    this.endDateObj = today;
    this.startDateObj = thirtyDaysAgo;
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
      startDate: this.formatDate(this.startDateObj),
      endDate: this.formatDate(this.endDateObj)
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
      startDate: this.formatDate(this.startDateObj),
      endDate: this.formatDate(this.endDateObj)
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommissionReportComponent, selectors: [["app-commission-report"]], features: [\u0275\u0275ProvidersFeature([DecimalPipe, DatePipe])], decls: 41, vars: 15, consts: [["startPicker", ""], ["endPicker", ""], [1, "page-title"], [1, "filters-card"], [1, "filters-row"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "matDatepicker", "ngModel"], ["matIconSuffix", "", 3, "for"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "filter-btn", 3, "click", "disabled"], ["mat-stroked-button", "", 3, "click", "disabled"], ["class", "loading-container", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf"], ["class", "data-card", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "stats-grid"], [1, "stat-card", "stat-teal"], [1, "stat-inner"], [1, "stat-text"], [1, "stat-label"], [1, "stat-value", "stat-value-teal"], [1, "stat-icon", "stat-icon-teal"], [1, "stat-card", "stat-red"], [1, "stat-value", "stat-value-red"], [1, "stat-icon", "stat-icon-red"], [1, "data-card"], [1, "section-title"], [1, "table-responsive"], ["mat-table", "", 1, "report-table", 3, "dataSource"], ["matColumnDef", "agentName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "agentType"], ["matColumnDef", "sendingCommission"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right mono-text text-teal", 4, "matCellDef"], ["matColumnDef", "payoutCommission"], ["matColumnDef", "totalEarnings"], ["mat-cell", "", "class", "text-right mono-text text-green", 4, "matCellDef"], ["matColumnDef", "transactionCount"], ["mat-cell", "", "class", "text-right mono-text", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-text", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right", "mono-text", "text-teal"], ["mat-cell", "", 1, "text-right", "mono-text", "text-green"], ["mat-cell", "", 1, "text-right", "mono-text"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-text"]], template: function CommissionReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "h2", 2);
        \u0275\u0275text(1, "Commission Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-card", 3)(3, "mat-card-content")(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
        \u0275\u0275text(7, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CommissionReportComponent_Template_input_ngModelChange_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.startDateObj, $event) || (ctx.startDateObj = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "mat-datepicker-toggle", 7)(10, "mat-datepicker", null, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-form-field", 5)(13, "mat-label");
        \u0275\u0275text(14, "End Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CommissionReportComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.endDateObj, $event) || (ctx.endDateObj = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "mat-datepicker-toggle", 7)(17, "mat-datepicker", null, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-form-field", 5)(20, "mat-label");
        \u0275\u0275text(21, "Agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CommissionReportComponent_Template_mat_select_ngModelChange_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.agentId, $event) || (ctx.agentId = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(23, "mat-option", 9);
        \u0275\u0275text(24, "All Agents");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, CommissionReportComponent_mat_option_25_Template, 2, 2, "mat-option", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "button", 11);
        \u0275\u0275listener("click", function CommissionReportComponent_Template_button_click_26_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.loadReport());
        });
        \u0275\u0275elementStart(27, "mat-icon");
        \u0275\u0275text(28, "assessment");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " Generate ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 12);
        \u0275\u0275listener("click", function CommissionReportComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportReport("excel"));
        });
        \u0275\u0275elementStart(31, "mat-icon");
        \u0275\u0275text(32, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 12);
        \u0275\u0275listener("click", function CommissionReportComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportReport("csv"));
        });
        \u0275\u0275elementStart(35, "mat-icon");
        \u0275\u0275text(36, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " CSV ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(38, CommissionReportComponent_div_38_Template, 2, 0, "div", 13)(39, CommissionReportComponent_div_39_Template, 23, 8, "div", 14)(40, CommissionReportComponent_mat_card_40_Template, 27, 4, "mat-card", 15);
      }
      if (rf & 2) {
        const startPicker_r10 = \u0275\u0275reference(11);
        const endPicker_r11 = \u0275\u0275reference(18);
        \u0275\u0275advance(8);
        \u0275\u0275property("matDatepicker", startPicker_r10);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDateObj);
        \u0275\u0275advance();
        \u0275\u0275property("for", startPicker_r10);
        \u0275\u0275advance(6);
        \u0275\u0275property("matDatepicker", endPicker_r11);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDateObj);
        \u0275\u0275advance();
        \u0275\u0275property("for", endPicker_r11);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.agentId);
        \u0275\u0275advance();
        \u0275\u0275property("value", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.agents);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.report);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.report);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.report);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.report);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatCardModule, MatCard, MatCardContent, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatProgressSpinnerModule, MatProgressSpinner, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatNativeDateModule], styles: ['\n\n.report-page[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n.stat-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue[_ngcontent-%COMP%] {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-value-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-green[_ngcontent-%COMP%] {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-value-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-orange[_ngcontent-%COMP%] {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-value-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-red[_ngcontent-%COMP%] {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-value-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-value-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-teal[_ngcontent-%COMP%] {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-value-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-indigo[_ngcontent-%COMP%] {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-value-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-pink[_ngcontent-%COMP%] {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-value-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-amber[_ngcontent-%COMP%] {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-value-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-cyan[_ngcontent-%COMP%] {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-value-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-lime[_ngcontent-%COMP%] {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-value-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-brown[_ngcontent-%COMP%] {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.stat-value-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.data-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.report-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #ed6c02;\n}\n.status-onhold[_ngcontent-%COMP%] {\n  background: #9e9e9e;\n}\n.status-compliance[_ngcontent-%COMP%] {\n  background: #7b1fa2;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.balance-form-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.balance-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 160px;\n}\n.dark-mode[_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  background: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .balance-form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=commission-report.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommissionReportComponent, [{
    type: Component,
    args: [{ selector: "app-commission-report", standalone: true, imports: [
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
      MatDatepickerModule,
      MatNativeDateModule
    ], providers: [DecimalPipe, DatePipe], template: `<!-- Page Title -->
<h2 class="page-title">Commission Report</h2>

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
          <mat-option [value]="null">All Agents</mat-option>
          <mat-option *ngFor="let agent of agents" [value]="agent.id">
            {{ agent.businessName }}
          </mat-option>
        </mat-select>
      </mat-form-field>

      <button mat-raised-button color="primary" class="filter-btn" (click)="loadReport()" [disabled]="loading">
        <mat-icon>assessment</mat-icon>
        Generate
      </button>
      <button mat-stroked-button (click)="exportReport('excel')" [disabled]="!report">
        <mat-icon>download</mat-icon> Excel
      </button>
      <button mat-stroked-button (click)="exportReport('csv')" [disabled]="!report">
        <mat-icon>download</mat-icon> CSV
      </button>
    </div>
  </mat-card-content>
</mat-card>

<!-- Loading -->
<div *ngIf="loading" class="loading-container">
  <mat-spinner diameter="40"></mat-spinner>
</div>

<!-- Summary Cards -->
<div *ngIf="!loading && report" class="stats-grid">
  <mat-card class="stat-card stat-teal">
    <mat-card-content>
      <div class="stat-inner">
        <div class="stat-text">
          <span class="stat-label">Total Earnings</span>
          <span class="stat-value stat-value-teal">{{ report.totalEarnings | number:'1.2-2' }}</span>
        </div>
        <mat-icon class="stat-icon stat-icon-teal">account_balance_wallet</mat-icon>
      </div>
    </mat-card-content>
  </mat-card>

  <mat-card class="stat-card stat-red">
    <mat-card-content>
      <div class="stat-inner">
        <div class="stat-text">
          <span class="stat-label">Total Reversed</span>
          <span class="stat-value stat-value-red">{{ report.totalReversed | number:'1.2-2' }}</span>
        </div>
        <mat-icon class="stat-icon stat-icon-red">undo</mat-icon>
      </div>
    </mat-card-content>
  </mat-card>
</div>

<!-- Agent Summaries Table -->
<mat-card *ngIf="!loading && report" class="data-card">
  <mat-card-content>
    <h3 class="section-title">Agent Service Charge Breakdown</h3>

    <div class="table-responsive">
      <table mat-table [dataSource]="report.agentSummaries" class="report-table">

        <ng-container matColumnDef="agentName">
          <th mat-header-cell *matHeaderCellDef>Agent Name</th>
          <td mat-cell *matCellDef="let row">{{ row.agentName }}</td>
        </ng-container>

        <ng-container matColumnDef="agentType">
          <th mat-header-cell *matHeaderCellDef>Agent Type</th>
          <td mat-cell *matCellDef="let row">{{ row.agentType }}</td>
        </ng-container>

        <ng-container matColumnDef="sendingCommission">
          <th mat-header-cell *matHeaderCellDef class="text-right">Sending Service Charge</th>
          <td mat-cell *matCellDef="let row" class="text-right mono-text text-teal">
            {{ row.sendingCommission | number:'1.2-2' }}
          </td>
        </ng-container>

        <ng-container matColumnDef="payoutCommission">
          <th mat-header-cell *matHeaderCellDef class="text-right">Payout Service Charge</th>
          <td mat-cell *matCellDef="let row" class="text-right mono-text text-teal">
            {{ row.payoutCommission | number:'1.2-2' }}
          </td>
        </ng-container>

        <ng-container matColumnDef="totalEarnings">
          <th mat-header-cell *matHeaderCellDef class="text-right">Total Earnings</th>
          <td mat-cell *matCellDef="let row" class="text-right mono-text text-green">
            {{ row.totalEarnings | number:'1.2-2' }}
          </td>
        </ng-container>

        <ng-container matColumnDef="transactionCount">
          <th mat-header-cell *matHeaderCellDef class="text-right">Transaction Count</th>
          <td mat-cell *matCellDef="let row" class="text-right mono-text">
            {{ row.transactionCount }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>

    <div *ngIf="!report.agentSummaries.length" class="empty-text">
      No commission data found for the selected period.
    </div>
  </mat-card-content>
</mat-card>`, styles: ['/* src/app/pages/admin/reports/commission-report/commission-report.component.scss */\n.report-page {\n  padding: 0;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card mat-card-content {\n  padding: 20px !important;\n}\n.filters-row {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row mat-form-field {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row .filter-btn {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card mat-card-content {\n  padding: 16px !important;\n}\n.stat-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue {\n  color: #1976d2;\n}\n.stat-value-blue {\n  color: #1976d2;\n}\n.stat-green {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green {\n  color: #2e7d32;\n}\n.stat-value-green {\n  color: #2e7d32;\n}\n.stat-orange {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange {\n  color: #ed6c02;\n}\n.stat-value-orange {\n  color: #ed6c02;\n}\n.stat-red {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red {\n  color: #d32f2f;\n}\n.stat-value-red {\n  color: #d32f2f;\n}\n.stat-purple {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple {\n  color: #7b1fa2;\n}\n.stat-value-purple {\n  color: #7b1fa2;\n}\n.stat-teal {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal {\n  color: #00897b;\n}\n.stat-value-teal {\n  color: #00897b;\n}\n.stat-indigo {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo {\n  color: #3949ab;\n}\n.stat-value-indigo {\n  color: #3949ab;\n}\n.stat-pink {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink {\n  color: #c2185b;\n}\n.stat-value-pink {\n  color: #c2185b;\n}\n.stat-amber {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber {\n  color: #ff8f00;\n}\n.stat-value-amber {\n  color: #ff8f00;\n}\n.stat-cyan {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan {\n  color: #0097a7;\n}\n.stat-value-cyan {\n  color: #0097a7;\n}\n.stat-lime {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime {\n  color: #689f38;\n}\n.stat-value-lime {\n  color: #689f38;\n}\n.stat-brown {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown {\n  color: #5d4037;\n}\n.stat-value-brown {\n  color: #5d4037;\n}\n.data-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card mat-card-content {\n  padding: 20px !important;\n}\n.section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive {\n  overflow-x: auto;\n}\n.report-table {\n  width: 100%;\n}\n.report-table .mat-mdc-header-cell {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table .mat-mdc-cell {\n  font-size: 0.875rem;\n}\n.report-table .mat-mdc-row:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right {\n  text-align: right;\n}\n.text-green {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed {\n  background: #2e7d32;\n}\n.status-pending {\n  background: #ed6c02;\n}\n.status-onhold {\n  background: #9e9e9e;\n}\n.status-compliance {\n  background: #7b1fa2;\n}\n.status-cancelled {\n  background: #d32f2f;\n}\n.status-failed {\n  background: #d32f2f;\n}\n.balance-form-card {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card mat-card-content {\n  padding: 24px !important;\n}\n.balance-form-row {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row mat-form-field {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row .submit-btn {\n  height: 56px;\n  min-width: 160px;\n}\n:host-context(.dark-mode) .page-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .stat-value {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .section-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .empty-text {\n  color: #64748b;\n}\n:host-context(.dark-mode) .stat-card,\n:host-context(.dark-mode) .filters-card,\n:host-context(.dark-mode) .data-card,\n:host-context(.dark-mode) .balance-form-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .stat-card:hover,\n:host-context(.dark-mode) .filters-card:hover,\n:host-context(.dark-mode) .data-card:hover,\n:host-context(.dark-mode) .balance-form-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n:host-context(.dark-mode) .balance-form-card {\n  border-color: #3b82f6;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-header-cell {\n  color: #94a3b8;\n  background: #334155;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-row:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row {\n    flex-direction: column;\n  }\n  .balance-form-row {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=commission-report.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: ExportService }, { type: DecimalPipe }, { type: DatePipe }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommissionReportComponent, { className: "CommissionReportComponent", filePath: "src/app/pages/admin/reports/commission-report/commission-report.component.ts", lineNumber: 39 });
})();
export {
  CommissionReportComponent
};
//# sourceMappingURL=chunk-W43DUNYG.js.map
