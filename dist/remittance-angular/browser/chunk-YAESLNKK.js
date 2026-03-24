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

// src/app/pages/admin/reports/revenue-report/revenue-report.component.ts
function RevenueReportComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-spinner", 14);
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1, " No monthly data available. ");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_95_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Month");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_95_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatMonth(row_r2.year, row_r2.month));
  }
}
function RevenueReportComponent_ng_container_33_div_95_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 65);
    \u0275\u0275text(1, "Transactions");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_95_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, row_r4.transactionCount));
  }
}
function RevenueReportComponent_ng_container_33_div_95_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 65);
    \u0275\u0275text(1, "Volume");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_95_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r5.volume, "1.2-2"));
  }
}
function RevenueReportComponent_ng_container_33_div_95_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 65);
    \u0275\u0275text(1, "Total Service Charge");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_95_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 67);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r6.totalCommission, "1.2-2"));
  }
}
function RevenueReportComponent_ng_container_33_div_95_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 65);
    \u0275\u0275text(1, "Company Service Charge");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_95_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 68);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r7.companyCommission, "1.2-2"));
  }
}
function RevenueReportComponent_ng_container_33_div_95_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 69);
  }
}
function RevenueReportComponent_ng_container_33_div_95_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 70);
  }
}
function RevenueReportComponent_ng_container_33_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "table", 49);
    \u0275\u0275elementContainerStart(2, 50);
    \u0275\u0275template(3, RevenueReportComponent_ng_container_33_div_95_th_3_Template, 2, 0, "th", 51)(4, RevenueReportComponent_ng_container_33_div_95_td_4_Template, 2, 1, "td", 52);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 53);
    \u0275\u0275template(6, RevenueReportComponent_ng_container_33_div_95_th_6_Template, 2, 0, "th", 54)(7, RevenueReportComponent_ng_container_33_div_95_td_7_Template, 3, 3, "td", 55);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 56);
    \u0275\u0275template(9, RevenueReportComponent_ng_container_33_div_95_th_9_Template, 2, 0, "th", 54)(10, RevenueReportComponent_ng_container_33_div_95_td_10_Template, 3, 4, "td", 55);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 57);
    \u0275\u0275template(12, RevenueReportComponent_ng_container_33_div_95_th_12_Template, 2, 0, "th", 54)(13, RevenueReportComponent_ng_container_33_div_95_td_13_Template, 3, 4, "td", 58);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 59);
    \u0275\u0275template(15, RevenueReportComponent_ng_container_33_div_95_th_15_Template, 2, 0, "th", 54)(16, RevenueReportComponent_ng_container_33_div_95_td_16_Template, 3, 4, "td", 60);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(17, RevenueReportComponent_ng_container_33_div_95_tr_17_Template, 1, 0, "tr", 61)(18, RevenueReportComponent_ng_container_33_div_95_tr_18_Template, 1, 0, "tr", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r2.report.monthlyBreakdown);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.monthlyColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.monthlyColumns);
  }
}
function RevenueReportComponent_ng_container_33_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1, " No corridor data available. ");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_101_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Corridor");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_101_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.corridor);
  }
}
function RevenueReportComponent_ng_container_33_div_101_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 65);
    \u0275\u0275text(1, "Transactions");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_101_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, row_r9.transactionCount));
  }
}
function RevenueReportComponent_ng_container_33_div_101_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 65);
    \u0275\u0275text(1, "Volume");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_101_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r10.volume, "1.2-2"));
  }
}
function RevenueReportComponent_ng_container_33_div_101_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 65);
    \u0275\u0275text(1, "Service Charge");
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_ng_container_33_div_101_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 67);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r11.commission, "1.2-2"));
  }
}
function RevenueReportComponent_ng_container_33_div_101_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 69);
  }
}
function RevenueReportComponent_ng_container_33_div_101_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 70);
  }
}
function RevenueReportComponent_ng_container_33_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "table", 49);
    \u0275\u0275elementContainerStart(2, 71);
    \u0275\u0275template(3, RevenueReportComponent_ng_container_33_div_101_th_3_Template, 2, 0, "th", 51)(4, RevenueReportComponent_ng_container_33_div_101_td_4_Template, 2, 1, "td", 52);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 53);
    \u0275\u0275template(6, RevenueReportComponent_ng_container_33_div_101_th_6_Template, 2, 0, "th", 54)(7, RevenueReportComponent_ng_container_33_div_101_td_7_Template, 3, 3, "td", 55);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 56);
    \u0275\u0275template(9, RevenueReportComponent_ng_container_33_div_101_th_9_Template, 2, 0, "th", 54)(10, RevenueReportComponent_ng_container_33_div_101_td_10_Template, 3, 4, "td", 55);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 72);
    \u0275\u0275template(12, RevenueReportComponent_ng_container_33_div_101_th_12_Template, 2, 0, "th", 54)(13, RevenueReportComponent_ng_container_33_div_101_td_13_Template, 3, 4, "td", 58);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(14, RevenueReportComponent_ng_container_33_div_101_tr_14_Template, 1, 0, "tr", 61)(15, RevenueReportComponent_ng_container_33_div_101_tr_15_Template, 1, 0, "tr", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r2.report.corridorBreakdown);
    \u0275\u0275advance(13);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.corridorColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.corridorColumns);
  }
}
function RevenueReportComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "mat-card", 16)(3, "mat-card-content")(4, "div", 17)(5, "div", 18)(6, "span", 19);
    \u0275\u0275text(7, "Total Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-icon", 21);
    \u0275\u0275text(12, "account_balance_wallet");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "mat-card", 22)(14, "mat-card-content")(15, "div", 17)(16, "div", 18)(17, "span", 19);
    \u0275\u0275text(18, "Transaction Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 23);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-icon", 24);
    \u0275\u0275text(23, "receipt_long");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "mat-card", 25)(25, "mat-card-content")(26, "div", 17)(27, "div", 18)(28, "span", 19);
    \u0275\u0275text(29, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 26);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-icon", 27);
    \u0275\u0275text(34, "payments");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "mat-card", 28)(36, "mat-card-content")(37, "div", 17)(38, "div", 18)(39, "span", 19);
    \u0275\u0275text(40, "Company Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 29);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "mat-icon", 30);
    \u0275\u0275text(45, "business");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "mat-card", 31)(47, "mat-card-content")(48, "div", 17)(49, "div", 18)(50, "span", 19);
    \u0275\u0275text(51, "Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 32);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "mat-icon", 33);
    \u0275\u0275text(56, "support_agent");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "mat-card", 34)(58, "mat-card-content")(59, "div", 17)(60, "div", 18)(61, "span", 19);
    \u0275\u0275text(62, "Payout Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 35);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "mat-icon", 36);
    \u0275\u0275text(67, "send");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "mat-card", 37)(69, "mat-card-content")(70, "div", 17)(71, "div", 18)(72, "span", 19);
    \u0275\u0275text(73, "FX Gain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 38);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "mat-icon", 39);
    \u0275\u0275text(78, "currency_exchange");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "mat-card", 40)(80, "mat-card-content")(81, "div", 17)(82, "div", 18)(83, "span", 19);
    \u0275\u0275text(84, "Net Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 41);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "mat-icon", 42);
    \u0275\u0275text(89, "trending_up");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(90, "mat-card", 43)(91, "mat-card-content")(92, "h2", 44);
    \u0275\u0275text(93, "Monthly Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275template(94, RevenueReportComponent_ng_container_33_div_94_Template, 2, 0, "div", 45)(95, RevenueReportComponent_ng_container_33_div_95_Template, 19, 3, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "mat-card", 43)(97, "mat-card-content")(98, "h2", 44);
    \u0275\u0275text(99, "Corridor Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275template(100, RevenueReportComponent_ng_container_33_div_100_Template, 2, 0, "div", 45)(101, RevenueReportComponent_ng_container_33_div_101_Template, 16, 3, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 12, ctx_r2.report.totalVolume, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 15, ctx_r2.report.transactionCount));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 17, ctx_r2.report.totalCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 20, ctx_r2.report.companyCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 23, ctx_r2.report.agentCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 26, ctx_r2.report.payoutCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 29, ctx_r2.report.fxGain, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 32, ctx_r2.report.netRevenue, "1.2-2"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.report.monthlyBreakdown.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.report.monthlyBreakdown.length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.report.corridorBreakdown.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.report.corridorBreakdown.length > 0);
  }
}
var RevenueReportComponent = class _RevenueReportComponent {
  constructor(api, notification, exportService) {
    this.api = api;
    this.notification = notification;
    this.exportService = exportService;
    this.startDateObj = null;
    this.endDateObj = null;
    this.loading = false;
    this.report = null;
    this.monthlyColumns = ["month", "transactionCount", "volume", "totalCommission", "companyCommission"];
    this.corridorColumns = ["corridor", "transactionCount", "volume", "commission"];
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
  exportReport(format) {
    const params = {};
    if (this.startDateObj)
      params.startDate = this.formatDate(this.startDateObj);
    if (this.endDateObj)
      params.endDate = this.formatDate(this.endDateObj);
    this.exportService.export("api/admin/reports/revenue/export", params, format);
  }
  static {
    this.\u0275fac = function RevenueReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RevenueReportComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevenueReportComponent, selectors: [["app-revenue-report"]], decls: 34, vars: 11, consts: [["startPicker", ""], ["endPicker", ""], [1, "report-page"], [1, "page-title"], [1, "filters-card"], [1, "filters-row"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "matDatepicker", "ngModel"], ["matIconSuffix", "", 3, "for"], ["mat-raised-button", "", "color", "primary", 1, "filter-btn", 3, "click", "disabled"], ["mat-stroked-button", "", 3, "click", "disabled"], ["class", "loading-container", 4, "ngIf"], [4, "ngIf"], [1, "loading-container"], ["diameter", "48"], [1, "stats-grid"], [1, "stat-card", "stat-blue"], [1, "stat-inner"], [1, "stat-text"], [1, "stat-label"], [1, "stat-value", "stat-value-blue"], [1, "stat-icon", "stat-icon-blue"], [1, "stat-card", "stat-indigo"], [1, "stat-value", "stat-value-indigo"], [1, "stat-icon", "stat-icon-indigo"], [1, "stat-card", "stat-green"], [1, "stat-value", "stat-value-green"], [1, "stat-icon", "stat-icon-green"], [1, "stat-card", "stat-teal"], [1, "stat-value", "stat-value-teal"], [1, "stat-icon", "stat-icon-teal"], [1, "stat-card", "stat-orange"], [1, "stat-value", "stat-value-orange"], [1, "stat-icon", "stat-icon-orange"], [1, "stat-card", "stat-purple"], [1, "stat-value", "stat-value-purple"], [1, "stat-icon", "stat-icon-purple"], [1, "stat-card", "stat-amber"], [1, "stat-value", "stat-value-amber"], [1, "stat-icon", "stat-icon-amber"], [1, "stat-card", "stat-cyan"], [1, "stat-value", "stat-value-cyan"], [1, "stat-icon", "stat-icon-cyan"], [1, "data-card"], [1, "section-title"], ["class", "empty-text", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "empty-text"], [1, "table-responsive"], ["mat-table", "", 1, "report-table", 3, "dataSource"], ["matColumnDef", "month"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "transactionCount"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right mono-text", 4, "matCellDef"], ["matColumnDef", "volume"], ["matColumnDef", "totalCommission"], ["mat-cell", "", "class", "text-right mono-text text-green", 4, "matCellDef"], ["matColumnDef", "companyCommission"], ["mat-cell", "", "class", "text-right mono-text text-teal", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right", "mono-text"], ["mat-cell", "", 1, "text-right", "mono-text", "text-green"], ["mat-cell", "", 1, "text-right", "mono-text", "text-teal"], ["mat-header-row", ""], ["mat-row", ""], ["matColumnDef", "corridor"], ["matColumnDef", "commission"]], template: function RevenueReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "h1", 3);
        \u0275\u0275text(2, "Revenue Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-card", 4)(4, "mat-card-content")(5, "div", 5)(6, "mat-form-field", 6)(7, "mat-label");
        \u0275\u0275text(8, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function RevenueReportComponent_Template_input_ngModelChange_9_listener($event) {
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
        \u0275\u0275twoWayListener("ngModelChange", function RevenueReportComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.endDateObj, $event) || (ctx.endDateObj = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "mat-datepicker-toggle", 8)(18, "mat-datepicker", null, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 9);
        \u0275\u0275listener("click", function RevenueReportComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.loadReport());
        });
        \u0275\u0275elementStart(21, "mat-icon");
        \u0275\u0275text(22, "assessment");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Generate ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 10);
        \u0275\u0275listener("click", function RevenueReportComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportReport("excel"));
        });
        \u0275\u0275elementStart(25, "mat-icon");
        \u0275\u0275text(26, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 10);
        \u0275\u0275listener("click", function RevenueReportComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportReport("csv"));
        });
        \u0275\u0275elementStart(29, "mat-icon");
        \u0275\u0275text(30, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " CSV ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(32, RevenueReportComponent_div_32_Template, 2, 0, "div", 11)(33, RevenueReportComponent_ng_container_33_Template, 102, 35, "ng-container", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const startPicker_r12 = \u0275\u0275reference(12);
        const endPicker_r13 = \u0275\u0275reference(19);
        \u0275\u0275advance(9);
        \u0275\u0275property("matDatepicker", startPicker_r12);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDateObj);
        \u0275\u0275advance();
        \u0275\u0275property("for", startPicker_r12);
        \u0275\u0275advance(6);
        \u0275\u0275property("matDatepicker", endPicker_r13);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDateObj);
        \u0275\u0275advance();
        \u0275\u0275property("for", endPicker_r13);
        \u0275\u0275advance(3);
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
    }, dependencies: [CommonModule, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatCardModule, MatCard, MatCardContent, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatProgressSpinnerModule, MatProgressSpinner, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatNativeDateModule], styles: ['\n\n.report-page[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n.stat-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue[_ngcontent-%COMP%] {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-value-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-green[_ngcontent-%COMP%] {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-value-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-orange[_ngcontent-%COMP%] {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-value-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-red[_ngcontent-%COMP%] {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-value-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-value-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-teal[_ngcontent-%COMP%] {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-value-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-indigo[_ngcontent-%COMP%] {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-value-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-pink[_ngcontent-%COMP%] {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-value-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-amber[_ngcontent-%COMP%] {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-value-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-cyan[_ngcontent-%COMP%] {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-value-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-lime[_ngcontent-%COMP%] {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-value-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-brown[_ngcontent-%COMP%] {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.stat-value-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.data-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.report-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #ed6c02;\n}\n.status-onhold[_ngcontent-%COMP%] {\n  background: #9e9e9e;\n}\n.status-compliance[_ngcontent-%COMP%] {\n  background: #7b1fa2;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.balance-form-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.balance-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 160px;\n}\n.dark-mode[_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  background: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .balance-form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=revenue-report.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevenueReportComponent, [{
    type: Component,
    args: [{ selector: "app-revenue-report", standalone: true, imports: [
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
  <h1 class="page-title">Revenue Report</h1>

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

        <button
          mat-raised-button
          color="primary"
          class="filter-btn"
          (click)="loadReport()"
          [disabled]="loading"
        >
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
    <mat-spinner diameter="48"></mat-spinner>
  </div>

  <!-- Report Content -->
  <ng-container *ngIf="report && !loading">
    <!-- Summary Stat Cards -->
    <div class="stats-grid">
      <mat-card class="stat-card stat-blue">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Total Volume</span>
              <span class="stat-value stat-value-blue">{{ report.totalVolume | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-blue">account_balance_wallet</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-indigo">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Transaction Count</span>
              <span class="stat-value stat-value-indigo">{{ report.transactionCount | number }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-indigo">receipt_long</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-green">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Total Service Charge</span>
              <span class="stat-value stat-value-green">{{ report.totalCommission | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-green">payments</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-teal">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Company Service Charge</span>
              <span class="stat-value stat-value-teal">{{ report.companyCommission | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-teal">business</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-orange">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Agent Service Charge</span>
              <span class="stat-value stat-value-orange">{{ report.agentCommission | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-orange">support_agent</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-purple">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Payout Service Charge</span>
              <span class="stat-value stat-value-purple">{{ report.payoutCommission | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-purple">send</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-amber">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">FX Gain</span>
              <span class="stat-value stat-value-amber">{{ report.fxGain | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-amber">currency_exchange</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-cyan">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Net Revenue</span>
              <span class="stat-value stat-value-cyan">{{ report.netRevenue | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-cyan">trending_up</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>
    </div>

    <!-- Monthly Breakdown -->
    <mat-card class="data-card">
      <mat-card-content>
        <h2 class="section-title">Monthly Breakdown</h2>

        <div *ngIf="report.monthlyBreakdown.length === 0" class="empty-text">
          No monthly data available.
        </div>

        <div class="table-responsive" *ngIf="report.monthlyBreakdown.length > 0">
          <table mat-table [dataSource]="report.monthlyBreakdown" class="report-table">
            <ng-container matColumnDef="month">
              <th mat-header-cell *matHeaderCellDef>Month</th>
              <td mat-cell *matCellDef="let row">{{ formatMonth(row.year, row.month) }}</td>
            </ng-container>

            <ng-container matColumnDef="transactionCount">
              <th mat-header-cell *matHeaderCellDef class="text-right">Transactions</th>
              <td mat-cell *matCellDef="let row" class="text-right mono-text">{{ row.transactionCount | number }}</td>
            </ng-container>

            <ng-container matColumnDef="volume">
              <th mat-header-cell *matHeaderCellDef class="text-right">Volume</th>
              <td mat-cell *matCellDef="let row" class="text-right mono-text">{{ row.volume | number:'1.2-2' }}</td>
            </ng-container>

            <ng-container matColumnDef="totalCommission">
              <th mat-header-cell *matHeaderCellDef class="text-right">Total Service Charge</th>
              <td mat-cell *matCellDef="let row" class="text-right mono-text text-green">{{ row.totalCommission | number:'1.2-2' }}</td>
            </ng-container>

            <ng-container matColumnDef="companyCommission">
              <th mat-header-cell *matHeaderCellDef class="text-right">Company Service Charge</th>
              <td mat-cell *matCellDef="let row" class="text-right mono-text text-teal">{{ row.companyCommission | number:'1.2-2' }}</td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="monthlyColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: monthlyColumns;"></tr>
          </table>
        </div>
      </mat-card-content>
    </mat-card>

    <!-- Corridor Breakdown -->
    <mat-card class="data-card">
      <mat-card-content>
        <h2 class="section-title">Corridor Breakdown</h2>

        <div *ngIf="report.corridorBreakdown.length === 0" class="empty-text">
          No corridor data available.
        </div>

        <div class="table-responsive" *ngIf="report.corridorBreakdown.length > 0">
          <table mat-table [dataSource]="report.corridorBreakdown" class="report-table">
            <ng-container matColumnDef="corridor">
              <th mat-header-cell *matHeaderCellDef>Corridor</th>
              <td mat-cell *matCellDef="let row">{{ row.corridor }}</td>
            </ng-container>

            <ng-container matColumnDef="transactionCount">
              <th mat-header-cell *matHeaderCellDef class="text-right">Transactions</th>
              <td mat-cell *matCellDef="let row" class="text-right mono-text">{{ row.transactionCount | number }}</td>
            </ng-container>

            <ng-container matColumnDef="volume">
              <th mat-header-cell *matHeaderCellDef class="text-right">Volume</th>
              <td mat-cell *matCellDef="let row" class="text-right mono-text">{{ row.volume | number:'1.2-2' }}</td>
            </ng-container>

            <ng-container matColumnDef="commission">
              <th mat-header-cell *matHeaderCellDef class="text-right">Service Charge</th>
              <td mat-cell *matCellDef="let row" class="text-right mono-text text-green">{{ row.commission | number:'1.2-2' }}</td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="corridorColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: corridorColumns;"></tr>
          </table>
        </div>
      </mat-card-content>
    </mat-card>
  </ng-container>
</div>
`, styles: ['/* src/app/pages/admin/reports/revenue-report/revenue-report.component.scss */\n.report-page {\n  padding: 0;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card mat-card-content {\n  padding: 20px !important;\n}\n.filters-row {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row mat-form-field {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row .filter-btn {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card mat-card-content {\n  padding: 16px !important;\n}\n.stat-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue {\n  color: #1976d2;\n}\n.stat-value-blue {\n  color: #1976d2;\n}\n.stat-green {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green {\n  color: #2e7d32;\n}\n.stat-value-green {\n  color: #2e7d32;\n}\n.stat-orange {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange {\n  color: #ed6c02;\n}\n.stat-value-orange {\n  color: #ed6c02;\n}\n.stat-red {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red {\n  color: #d32f2f;\n}\n.stat-value-red {\n  color: #d32f2f;\n}\n.stat-purple {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple {\n  color: #7b1fa2;\n}\n.stat-value-purple {\n  color: #7b1fa2;\n}\n.stat-teal {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal {\n  color: #00897b;\n}\n.stat-value-teal {\n  color: #00897b;\n}\n.stat-indigo {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo {\n  color: #3949ab;\n}\n.stat-value-indigo {\n  color: #3949ab;\n}\n.stat-pink {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink {\n  color: #c2185b;\n}\n.stat-value-pink {\n  color: #c2185b;\n}\n.stat-amber {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber {\n  color: #ff8f00;\n}\n.stat-value-amber {\n  color: #ff8f00;\n}\n.stat-cyan {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan {\n  color: #0097a7;\n}\n.stat-value-cyan {\n  color: #0097a7;\n}\n.stat-lime {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime {\n  color: #689f38;\n}\n.stat-value-lime {\n  color: #689f38;\n}\n.stat-brown {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown {\n  color: #5d4037;\n}\n.stat-value-brown {\n  color: #5d4037;\n}\n.data-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card mat-card-content {\n  padding: 20px !important;\n}\n.section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive {\n  overflow-x: auto;\n}\n.report-table {\n  width: 100%;\n}\n.report-table .mat-mdc-header-cell {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table .mat-mdc-cell {\n  font-size: 0.875rem;\n}\n.report-table .mat-mdc-row:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right {\n  text-align: right;\n}\n.text-green {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed {\n  background: #2e7d32;\n}\n.status-pending {\n  background: #ed6c02;\n}\n.status-onhold {\n  background: #9e9e9e;\n}\n.status-compliance {\n  background: #7b1fa2;\n}\n.status-cancelled {\n  background: #d32f2f;\n}\n.status-failed {\n  background: #d32f2f;\n}\n.balance-form-card {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card mat-card-content {\n  padding: 24px !important;\n}\n.balance-form-row {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row mat-form-field {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row .submit-btn {\n  height: 56px;\n  min-width: 160px;\n}\n:host-context(.dark-mode) .page-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .stat-value {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .section-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .empty-text {\n  color: #64748b;\n}\n:host-context(.dark-mode) .stat-card,\n:host-context(.dark-mode) .filters-card,\n:host-context(.dark-mode) .data-card,\n:host-context(.dark-mode) .balance-form-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .stat-card:hover,\n:host-context(.dark-mode) .filters-card:hover,\n:host-context(.dark-mode) .data-card:hover,\n:host-context(.dark-mode) .balance-form-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n:host-context(.dark-mode) .balance-form-card {\n  border-color: #3b82f6;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-header-cell {\n  color: #94a3b8;\n  background: #334155;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-row:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row {\n    flex-direction: column;\n  }\n  .balance-form-row {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=revenue-report.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevenueReportComponent, { className: "RevenueReportComponent", filePath: "src/app/pages/admin/reports/revenue-report/revenue-report.component.ts", lineNumber: 69 });
})();
export {
  RevenueReportComponent
};
//# sourceMappingURL=chunk-YAESLNKK.js.map
