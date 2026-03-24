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
import "./chunk-4RZM2DGZ.js";
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
  NgIf
} from "./chunk-MZ37WZKD.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BKSYICRS.js";

// src/app/pages/admin/reports/settlement-report/settlement-report.component.ts
function SettlementReportComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-card", 16)(2, "mat-card-content")(3, "div", 17)(4, "div", 18)(5, "span", 19);
    \u0275\u0275text(6, "Active Agents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-icon", 21);
    \u0275\u0275text(11, "groups");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "mat-card", 22)(13, "mat-card-content")(14, "div", 17)(15, "div", 18)(16, "span", 19);
    \u0275\u0275text(17, "Total Send Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 23);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-icon", 24);
    \u0275\u0275text(22, "trending_up");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "mat-card", 25)(24, "mat-card-content")(25, "div", 17)(26, "div", 18)(27, "span", 19);
    \u0275\u0275text(28, "Total Service Charge Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 26);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "mat-icon", 27);
    \u0275\u0275text(33, "payments");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, ctx_r1.totalAgents));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 5, ctx_r1.totalSendVolume, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 8, ctx_r1.totalCommissionPaid, "1.2-2"));
  }
}
function SettlementReportComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "mat-spinner", 29);
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1, "Agent Name");
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.agentName);
  }
}
function SettlementReportComponent_mat_card_34_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.agentType);
  }
}
function SettlementReportComponent_mat_card_34_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, "Credit Limit");
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r5.creditLimit, "1.2-2"));
  }
}
function SettlementReportComponent_mat_card_34_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, "Current Balance");
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r6.currentBalance, "1.2-2"));
  }
}
function SettlementReportComponent_mat_card_34_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, "Available");
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r7.availableBalance, "1.2-2"));
  }
}
function SettlementReportComponent_mat_card_34_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, "Txns Sent");
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, row_r8.transactionsSent));
  }
}
function SettlementReportComponent_mat_card_34_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, "Txns as Payout");
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, row_r9.transactionsAsPayout));
  }
}
function SettlementReportComponent_mat_card_34_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, "Send Volume");
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r10.sendVolume, "1.2-2"));
  }
}
function SettlementReportComponent_mat_card_34_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, "Service Charge Earned");
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r11.commissionEarned, "1.2-2"));
  }
}
function SettlementReportComponent_mat_card_34_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, "Credits");
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r12.creditsReceived, "1.2-2"));
  }
}
function SettlementReportComponent_mat_card_34_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, "Debits");
    \u0275\u0275elementEnd();
  }
}
function SettlementReportComponent_mat_card_34_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r13.debitsApplied, "1.2-2"));
  }
}
function SettlementReportComponent_mat_card_34_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 61);
  }
}
function SettlementReportComponent_mat_card_34_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 62);
  }
}
function SettlementReportComponent_mat_card_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 30)(1, "mat-card-content")(2, "h2", 31);
    \u0275\u0275text(3, "Agent Settlements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32)(5, "table", 33);
    \u0275\u0275elementContainerStart(6, 34);
    \u0275\u0275template(7, SettlementReportComponent_mat_card_34_th_7_Template, 2, 0, "th", 35)(8, SettlementReportComponent_mat_card_34_td_8_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 37);
    \u0275\u0275template(10, SettlementReportComponent_mat_card_34_th_10_Template, 2, 0, "th", 35)(11, SettlementReportComponent_mat_card_34_td_11_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 38);
    \u0275\u0275template(13, SettlementReportComponent_mat_card_34_th_13_Template, 2, 0, "th", 39)(14, SettlementReportComponent_mat_card_34_td_14_Template, 3, 4, "td", 40);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 41);
    \u0275\u0275template(16, SettlementReportComponent_mat_card_34_th_16_Template, 2, 0, "th", 39)(17, SettlementReportComponent_mat_card_34_td_17_Template, 3, 4, "td", 40);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 42);
    \u0275\u0275template(19, SettlementReportComponent_mat_card_34_th_19_Template, 2, 0, "th", 39)(20, SettlementReportComponent_mat_card_34_td_20_Template, 3, 4, "td", 40);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 43);
    \u0275\u0275template(22, SettlementReportComponent_mat_card_34_th_22_Template, 2, 0, "th", 39)(23, SettlementReportComponent_mat_card_34_td_23_Template, 3, 3, "td", 40);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 44);
    \u0275\u0275template(25, SettlementReportComponent_mat_card_34_th_25_Template, 2, 0, "th", 39)(26, SettlementReportComponent_mat_card_34_td_26_Template, 3, 3, "td", 40);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(27, 45);
    \u0275\u0275template(28, SettlementReportComponent_mat_card_34_th_28_Template, 2, 0, "th", 39)(29, SettlementReportComponent_mat_card_34_td_29_Template, 3, 4, "td", 46);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(30, 47);
    \u0275\u0275template(31, SettlementReportComponent_mat_card_34_th_31_Template, 2, 0, "th", 39)(32, SettlementReportComponent_mat_card_34_td_32_Template, 3, 4, "td", 48);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(33, 49);
    \u0275\u0275template(34, SettlementReportComponent_mat_card_34_th_34_Template, 2, 0, "th", 39)(35, SettlementReportComponent_mat_card_34_td_35_Template, 3, 4, "td", 46);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(36, 50);
    \u0275\u0275template(37, SettlementReportComponent_mat_card_34_th_37_Template, 2, 0, "th", 39)(38, SettlementReportComponent_mat_card_34_td_38_Template, 3, 4, "td", 51);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(39, SettlementReportComponent_mat_card_34_tr_39_Template, 1, 0, "tr", 52)(40, SettlementReportComponent_mat_card_34_tr_40_Template, 1, 0, "tr", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("dataSource", ctx_r1.settlements);
    \u0275\u0275advance(34);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
function SettlementReportComponent_p_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, " No settlement data available. Select a date range and click Generate. ");
    \u0275\u0275elementEnd();
  }
}
var SettlementReportComponent = class _SettlementReportComponent {
  constructor() {
    this.api = inject(ApiService);
    this.exportService = inject(ExportService);
    this.notification = inject(NotificationService);
    this.startDateObj = null;
    this.endDateObj = null;
    this.loading = false;
    this.totalAgents = 0;
    this.totalSendVolume = 0;
    this.totalCommissionPaid = 0;
    this.settlements = [];
    this.displayedColumns = [
      "agentName",
      "agentType",
      "creditLimit",
      "currentBalance",
      "availableBalance",
      "transactionsSent",
      "transactionsAsPayout",
      "sendVolume",
      "commissionEarned",
      "creditsReceived",
      "debitsApplied"
    ];
  }
  formatDate(d) {
    if (!d)
      return "";
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  loadReport() {
    this.loading = true;
    const params = {};
    if (this.startDateObj)
      params.startDate = this.formatDate(this.startDateObj);
    if (this.endDateObj)
      params.endDate = this.formatDate(this.endDateObj);
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
    if (this.startDateObj)
      params.startDate = this.formatDate(this.startDateObj);
    if (this.endDateObj)
      params.endDate = this.formatDate(this.endDateObj);
    this.exportService.export("api/admin/reports/settlement/export", params, format);
  }
  static {
    this.\u0275fac = function SettlementReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettlementReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettlementReportComponent, selectors: [["app-settlement-report"]], decls: 36, vars: 13, consts: [["startPicker", ""], ["endPicker", ""], [1, "report-page"], [1, "page-title"], [1, "filters-card"], [1, "filters-row"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "matDatepicker", "ngModel"], ["matIconSuffix", "", 3, "for"], ["mat-raised-button", "", "color", "primary", 1, "filter-btn", 3, "click", "disabled"], ["mat-stroked-button", "", 3, "click", "disabled"], ["class", "stats-grid", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "data-card", 4, "ngIf"], ["class", "empty-text", 4, "ngIf"], [1, "stats-grid"], [1, "stat-card", "stat-blue"], [1, "stat-inner"], [1, "stat-text"], [1, "stat-label"], [1, "stat-value", "stat-value-blue"], [1, "stat-icon", "stat-icon-blue"], [1, "stat-card", "stat-green"], [1, "stat-value", "stat-value-green"], [1, "stat-icon", "stat-icon-green"], [1, "stat-card", "stat-orange"], [1, "stat-value", "stat-value-orange"], [1, "stat-icon", "stat-icon-orange"], [1, "loading-container"], ["diameter", "48"], [1, "data-card"], [1, "section-title"], [1, "table-responsive"], ["mat-table", "", 1, "report-table", 3, "dataSource"], ["matColumnDef", "agentName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "agentType"], ["matColumnDef", "creditLimit"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right mono-text", 4, "matCellDef"], ["matColumnDef", "currentBalance"], ["matColumnDef", "availableBalance"], ["matColumnDef", "transactionsSent"], ["matColumnDef", "transactionsAsPayout"], ["matColumnDef", "sendVolume"], ["mat-cell", "", "class", "text-right mono-text text-green", 4, "matCellDef"], ["matColumnDef", "commissionEarned"], ["mat-cell", "", "class", "text-right mono-text text-teal", 4, "matCellDef"], ["matColumnDef", "creditsReceived"], ["matColumnDef", "debitsApplied"], ["mat-cell", "", "class", "text-right mono-text text-red", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right", "mono-text"], ["mat-cell", "", 1, "text-right", "mono-text", "text-green"], ["mat-cell", "", 1, "text-right", "mono-text", "text-teal"], ["mat-cell", "", 1, "text-right", "mono-text", "text-red"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-text"]], template: function SettlementReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "h1", 3);
        \u0275\u0275text(2, "Settlement Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-card", 4)(4, "mat-card-content")(5, "div", 5)(6, "mat-form-field", 6)(7, "mat-label");
        \u0275\u0275text(8, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function SettlementReportComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.startDateObj, $event) || (ctx.startDateObj = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-datepicker-toggle", 8)(11, "mat-datepicker", null, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 6)(14, "mat-label");
        \u0275\u0275text(15, "End Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function SettlementReportComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.endDateObj, $event) || (ctx.endDateObj = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "mat-datepicker-toggle", 8)(18, "mat-datepicker", null, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 9);
        \u0275\u0275listener("click", function SettlementReportComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.loadReport());
        });
        \u0275\u0275elementStart(21, "mat-icon");
        \u0275\u0275text(22, "assessment");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Generate ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 10);
        \u0275\u0275listener("click", function SettlementReportComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportReport("excel"));
        });
        \u0275\u0275elementStart(25, "mat-icon");
        \u0275\u0275text(26, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 10);
        \u0275\u0275listener("click", function SettlementReportComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportReport("csv"));
        });
        \u0275\u0275elementStart(29, "mat-icon");
        \u0275\u0275text(30, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " CSV ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(32, SettlementReportComponent_div_32_Template, 34, 11, "div", 11)(33, SettlementReportComponent_div_33_Template, 2, 0, "div", 12)(34, SettlementReportComponent_mat_card_34_Template, 41, 3, "mat-card", 13)(35, SettlementReportComponent_p_35_Template, 2, 0, "p", 14);
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
        \u0275\u0275advance(3);
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
    }, dependencies: [CommonModule, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatCardModule, MatCard, MatCardContent, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatProgressSpinnerModule, MatProgressSpinner, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatNativeDateModule], styles: ['\n\n.report-page[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n.stat-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue[_ngcontent-%COMP%] {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-value-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-green[_ngcontent-%COMP%] {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-value-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-orange[_ngcontent-%COMP%] {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-value-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-red[_ngcontent-%COMP%] {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-value-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-value-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-teal[_ngcontent-%COMP%] {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-value-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-indigo[_ngcontent-%COMP%] {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-value-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-pink[_ngcontent-%COMP%] {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-value-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-amber[_ngcontent-%COMP%] {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-value-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-cyan[_ngcontent-%COMP%] {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-value-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-lime[_ngcontent-%COMP%] {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-value-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-brown[_ngcontent-%COMP%] {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.stat-value-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.data-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.report-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #ed6c02;\n}\n.status-onhold[_ngcontent-%COMP%] {\n  background: #9e9e9e;\n}\n.status-compliance[_ngcontent-%COMP%] {\n  background: #7b1fa2;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.balance-form-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.balance-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 160px;\n}\n.dark-mode[_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  background: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .balance-form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=settlement-report.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettlementReportComponent, [{
    type: Component,
    args: [{ selector: "app-settlement-report", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatDatepickerModule,
      MatNativeDateModule,
      DecimalPipe,
      DatePipe
    ], template: `<div class="report-page">
  <h1 class="page-title">Settlement Report</h1>

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

        <button mat-raised-button color="primary" class="filter-btn" (click)="loadReport()" [disabled]="loading">
          <mat-icon>assessment</mat-icon>
          Generate
        </button>
        <button mat-stroked-button (click)="exportReport('excel')" [disabled]="settlements.length === 0">
          <mat-icon>download</mat-icon> Excel
        </button>
        <button mat-stroked-button (click)="exportReport('csv')" [disabled]="settlements.length === 0">
          <mat-icon>download</mat-icon> CSV
        </button>
      </div>
    </mat-card-content>
  </mat-card>

  <!-- Summary Cards -->
  <div class="stats-grid" *ngIf="!loading && settlements.length > 0">
    <mat-card class="stat-card stat-blue">
      <mat-card-content>
        <div class="stat-inner">
          <div class="stat-text">
            <span class="stat-label">Active Agents</span>
            <span class="stat-value stat-value-blue">{{ totalAgents | number }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-blue">groups</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card class="stat-card stat-green">
      <mat-card-content>
        <div class="stat-inner">
          <div class="stat-text">
            <span class="stat-label">Total Send Volume</span>
            <span class="stat-value stat-value-green">{{ totalSendVolume | number:'1.2-2' }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-green">trending_up</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card class="stat-card stat-orange">
      <mat-card-content>
        <div class="stat-inner">
          <div class="stat-text">
            <span class="stat-label">Total Service Charge Paid</span>
            <span class="stat-value stat-value-orange">{{ totalCommissionPaid | number:'1.2-2' }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-orange">payments</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>
  </div>

  <!-- Loading -->
  <div class="loading-container" *ngIf="loading">
    <mat-spinner diameter="48"></mat-spinner>
  </div>

  <!-- Data Table -->
  <mat-card class="data-card" *ngIf="!loading && settlements.length > 0">
    <mat-card-content>
      <h2 class="section-title">Agent Settlements</h2>
      <div class="table-responsive">
        <table mat-table [dataSource]="settlements" class="report-table">

          <!-- Agent Name -->
          <ng-container matColumnDef="agentName">
            <th mat-header-cell *matHeaderCellDef>Agent Name</th>
            <td mat-cell *matCellDef="let row">{{ row.agentName }}</td>
          </ng-container>

          <!-- Type -->
          <ng-container matColumnDef="agentType">
            <th mat-header-cell *matHeaderCellDef>Type</th>
            <td mat-cell *matCellDef="let row">{{ row.agentType }}</td>
          </ng-container>

          <!-- Credit Limit -->
          <ng-container matColumnDef="creditLimit">
            <th mat-header-cell *matHeaderCellDef class="text-right">Credit Limit</th>
            <td mat-cell *matCellDef="let row" class="text-right mono-text">{{ row.creditLimit | number:'1.2-2' }}</td>
          </ng-container>

          <!-- Current Balance -->
          <ng-container matColumnDef="currentBalance">
            <th mat-header-cell *matHeaderCellDef class="text-right">Current Balance</th>
            <td mat-cell *matCellDef="let row" class="text-right mono-text">{{ row.currentBalance | number:'1.2-2' }}</td>
          </ng-container>

          <!-- Available -->
          <ng-container matColumnDef="availableBalance">
            <th mat-header-cell *matHeaderCellDef class="text-right">Available</th>
            <td mat-cell *matCellDef="let row" class="text-right mono-text">{{ row.availableBalance | number:'1.2-2' }}</td>
          </ng-container>

          <!-- Txns Sent -->
          <ng-container matColumnDef="transactionsSent">
            <th mat-header-cell *matHeaderCellDef class="text-right">Txns Sent</th>
            <td mat-cell *matCellDef="let row" class="text-right mono-text">{{ row.transactionsSent | number }}</td>
          </ng-container>

          <!-- Txns as Payout -->
          <ng-container matColumnDef="transactionsAsPayout">
            <th mat-header-cell *matHeaderCellDef class="text-right">Txns as Payout</th>
            <td mat-cell *matCellDef="let row" class="text-right mono-text">{{ row.transactionsAsPayout | number }}</td>
          </ng-container>

          <!-- Send Volume -->
          <ng-container matColumnDef="sendVolume">
            <th mat-header-cell *matHeaderCellDef class="text-right">Send Volume</th>
            <td mat-cell *matCellDef="let row" class="text-right mono-text text-green">{{ row.sendVolume | number:'1.2-2' }}</td>
          </ng-container>

          <!-- Service Charge Earned -->
          <ng-container matColumnDef="commissionEarned">
            <th mat-header-cell *matHeaderCellDef class="text-right">Service Charge Earned</th>
            <td mat-cell *matCellDef="let row" class="text-right mono-text text-teal">{{ row.commissionEarned | number:'1.2-2' }}</td>
          </ng-container>

          <!-- Credits -->
          <ng-container matColumnDef="creditsReceived">
            <th mat-header-cell *matHeaderCellDef class="text-right">Credits</th>
            <td mat-cell *matCellDef="let row" class="text-right mono-text text-green">{{ row.creditsReceived | number:'1.2-2' }}</td>
          </ng-container>

          <!-- Debits -->
          <ng-container matColumnDef="debitsApplied">
            <th mat-header-cell *matHeaderCellDef class="text-right">Debits</th>
            <td mat-cell *matCellDef="let row" class="text-right mono-text text-red">{{ row.debitsApplied | number:'1.2-2' }}</td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </div>
    </mat-card-content>
  </mat-card>

  <!-- Empty State -->
  <p class="empty-text" *ngIf="!loading && settlements.length === 0">
    No settlement data available. Select a date range and click Generate.
  </p>
</div>
`, styles: ['/* src/app/pages/admin/reports/settlement-report/settlement-report.component.scss */\n.report-page {\n  padding: 0;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card mat-card-content {\n  padding: 20px !important;\n}\n.filters-row {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row mat-form-field {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row .filter-btn {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card mat-card-content {\n  padding: 16px !important;\n}\n.stat-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue {\n  color: #1976d2;\n}\n.stat-value-blue {\n  color: #1976d2;\n}\n.stat-green {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green {\n  color: #2e7d32;\n}\n.stat-value-green {\n  color: #2e7d32;\n}\n.stat-orange {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange {\n  color: #ed6c02;\n}\n.stat-value-orange {\n  color: #ed6c02;\n}\n.stat-red {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red {\n  color: #d32f2f;\n}\n.stat-value-red {\n  color: #d32f2f;\n}\n.stat-purple {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple {\n  color: #7b1fa2;\n}\n.stat-value-purple {\n  color: #7b1fa2;\n}\n.stat-teal {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal {\n  color: #00897b;\n}\n.stat-value-teal {\n  color: #00897b;\n}\n.stat-indigo {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo {\n  color: #3949ab;\n}\n.stat-value-indigo {\n  color: #3949ab;\n}\n.stat-pink {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink {\n  color: #c2185b;\n}\n.stat-value-pink {\n  color: #c2185b;\n}\n.stat-amber {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber {\n  color: #ff8f00;\n}\n.stat-value-amber {\n  color: #ff8f00;\n}\n.stat-cyan {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan {\n  color: #0097a7;\n}\n.stat-value-cyan {\n  color: #0097a7;\n}\n.stat-lime {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime {\n  color: #689f38;\n}\n.stat-value-lime {\n  color: #689f38;\n}\n.stat-brown {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown {\n  color: #5d4037;\n}\n.stat-value-brown {\n  color: #5d4037;\n}\n.data-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card mat-card-content {\n  padding: 20px !important;\n}\n.section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive {\n  overflow-x: auto;\n}\n.report-table {\n  width: 100%;\n}\n.report-table .mat-mdc-header-cell {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table .mat-mdc-cell {\n  font-size: 0.875rem;\n}\n.report-table .mat-mdc-row:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right {\n  text-align: right;\n}\n.text-green {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed {\n  background: #2e7d32;\n}\n.status-pending {\n  background: #ed6c02;\n}\n.status-onhold {\n  background: #9e9e9e;\n}\n.status-compliance {\n  background: #7b1fa2;\n}\n.status-cancelled {\n  background: #d32f2f;\n}\n.status-failed {\n  background: #d32f2f;\n}\n.balance-form-card {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card mat-card-content {\n  padding: 24px !important;\n}\n.balance-form-row {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row mat-form-field {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row .submit-btn {\n  height: 56px;\n  min-width: 160px;\n}\n:host-context(.dark-mode) .page-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .stat-value {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .section-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .empty-text {\n  color: #64748b;\n}\n:host-context(.dark-mode) .stat-card,\n:host-context(.dark-mode) .filters-card,\n:host-context(.dark-mode) .data-card,\n:host-context(.dark-mode) .balance-form-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .stat-card:hover,\n:host-context(.dark-mode) .filters-card:hover,\n:host-context(.dark-mode) .data-card:hover,\n:host-context(.dark-mode) .balance-form-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n:host-context(.dark-mode) .balance-form-card {\n  border-color: #3b82f6;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-header-cell {\n  color: #94a3b8;\n  background: #334155;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-row:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row {\n    flex-direction: column;\n  }\n  .balance-form-row {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=settlement-report.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettlementReportComponent, { className: "SettlementReportComponent", filePath: "src/app/pages/admin/reports/settlement-report/settlement-report.component.ts", lineNumber: 54 });
})();
export {
  SettlementReportComponent
};
//# sourceMappingURL=chunk-EGGBKBEF.js.map
