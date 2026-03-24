import {
  MatChipsModule
} from "./chunk-MIGO47T2.js";
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
} from "./chunk-IHZVJAJK.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-ZMWNDU6W.js";
import {
  NotificationService
} from "./chunk-IMXIMGZJ.js";
import "./chunk-BEKM3RIS.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-COXUGWJY.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-SKYCJQIS.js";
import "./chunk-4DSKJDZB.js";
import "./chunk-E4MJAOS2.js";
import {
  ApiService
} from "./chunk-VYOOPMBG.js";
import {
  MatAnchor,
  MatButtonModule
} from "./chunk-AVOWLGE4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-IRXVSIUW.js";
import {
  AuthStateService
} from "./chunk-MKKXXFYO.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-DBW47J2B.js";
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-J3ROLHMS.js";

// src/app/pages/admin/dashboard/admin-dashboard.component.ts
var _c0 = () => ({ status: "Pending" });
var _c1 = () => ({ status: "Processing" });
var _c2 = () => ({ status: "Completed" });
var _c3 = () => ({ status: "OnHold" });
var _c4 = () => ({ status: "Cancelled" });
var _c5 = () => ({ status: "Failed" });
var _c6 = (a0) => ["/admin/transactions", a0];
function AdminDashboardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 5);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dashboard.pendingAgents, " pending approval ");
  }
}
function AdminDashboardComponent_ng_container_4_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, " No pending approvals ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, " Requires attention ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, " All clear ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_div_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " No transactions yet. ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_div_134_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 69);
    \u0275\u0275text(1, "Reference");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_div_134_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 70)(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(txn_r2.referenceNumber);
  }
}
function AdminDashboardComponent_ng_container_4_div_134_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 69);
    \u0275\u0275text(1, "Sender");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_div_134_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r3.senderName);
  }
}
function AdminDashboardComponent_ng_container_4_div_134_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 69);
    \u0275\u0275text(1, "Receiver");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_div_134_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r4.receiverName);
  }
}
function AdminDashboardComponent_ng_container_4_div_134_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 69);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_div_134_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 70);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, txn_r5.sendAmount, "1.2-2"), " ", txn_r5.sendCurrency, " ");
  }
}
function AdminDashboardComponent_ng_container_4_div_134_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 69);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_div_134_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 70)(1, "span", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getStatusClass(txn_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", txn_r6.status, " ");
  }
}
function AdminDashboardComponent_ng_container_4_div_134_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 69);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_div_134_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 70);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, txn_r7.createdAt, "MMM dd, HH:mm"), " ");
  }
}
function AdminDashboardComponent_ng_container_4_div_134_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 73);
  }
}
function AdminDashboardComponent_ng_container_4_div_134_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 74);
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c6, row_r8.id));
  }
}
function AdminDashboardComponent_ng_container_4_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "table", 58);
    \u0275\u0275elementContainerStart(2, 59);
    \u0275\u0275template(3, AdminDashboardComponent_ng_container_4_div_134_th_3_Template, 2, 0, "th", 60)(4, AdminDashboardComponent_ng_container_4_div_134_td_4_Template, 3, 1, "td", 61);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 62);
    \u0275\u0275template(6, AdminDashboardComponent_ng_container_4_div_134_th_6_Template, 2, 0, "th", 60)(7, AdminDashboardComponent_ng_container_4_div_134_td_7_Template, 2, 1, "td", 61);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 63);
    \u0275\u0275template(9, AdminDashboardComponent_ng_container_4_div_134_th_9_Template, 2, 0, "th", 60)(10, AdminDashboardComponent_ng_container_4_div_134_td_10_Template, 2, 1, "td", 61);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 64);
    \u0275\u0275template(12, AdminDashboardComponent_ng_container_4_div_134_th_12_Template, 2, 0, "th", 60)(13, AdminDashboardComponent_ng_container_4_div_134_td_13_Template, 3, 5, "td", 61);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 65);
    \u0275\u0275template(15, AdminDashboardComponent_ng_container_4_div_134_th_15_Template, 2, 0, "th", 60)(16, AdminDashboardComponent_ng_container_4_div_134_td_16_Template, 3, 2, "td", 61);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 66);
    \u0275\u0275template(18, AdminDashboardComponent_ng_container_4_div_134_th_18_Template, 2, 0, "th", 60)(19, AdminDashboardComponent_ng_container_4_div_134_td_19_Template, 3, 4, "td", 61);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, AdminDashboardComponent_ng_container_4_div_134_tr_20_Template, 1, 0, "tr", 67)(21, AdminDashboardComponent_ng_container_4_div_134_tr_21_Template, 1, 3, "tr", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r0.dashboard.recentTransactions);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.transactionColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.transactionColumns);
  }
}
function AdminDashboardComponent_ng_container_4_div_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " No active rates configured. ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_4_div_141_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "span", 78)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 79);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rate_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", rate_r9.sourceCurrency, " \u2192 ", rate_r9.destinationCurrency, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, rate_r9.rate, "1.2-2"));
  }
}
function AdminDashboardComponent_ng_container_4_div_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, AdminDashboardComponent_ng_container_4_div_141_div_1_Template, 7, 6, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.dashboard.activeExchangeRates);
  }
}
function AdminDashboardComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "mat-card", 7)(3, "mat-card-content")(4, "div", 8)(5, "div", 9)(6, "span", 10);
    \u0275\u0275text(7, "Total Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-icon", 13);
    \u0275\u0275text(14, "receipt_long");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "mat-card", 14)(16, "mat-card-content")(17, "div", 8)(18, "div", 9)(19, "span", 10);
    \u0275\u0275text(20, "Service Charge Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 11);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 12);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-icon", 15);
    \u0275\u0275text(26, "trending_up");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "mat-card", 16)(28, "mat-card-content")(29, "div", 8)(30, "div", 9)(31, "span", 10);
    \u0275\u0275text(32, "Active Agents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 11);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, AdminDashboardComponent_ng_container_4_span_35_Template, 2, 1, "span", 17)(36, AdminDashboardComponent_ng_container_4_span_36_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-icon", 19);
    \u0275\u0275text(38, "people");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "mat-card", 20)(40, "mat-card-content")(41, "div", 8)(42, "div", 9)(43, "span", 10);
    \u0275\u0275text(44, "Compliance Alerts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 11);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, AdminDashboardComponent_ng_container_4_span_47_Template, 2, 0, "span", 21)(48, AdminDashboardComponent_ng_container_4_span_48_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-icon", 22);
    \u0275\u0275text(50, "warning");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(51, "div", 23)(52, "mat-card", 24)(53, "mat-card-content")(54, "div", 8)(55, "div", 9)(56, "span", 10);
    \u0275\u0275text(57, "Total Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 25);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "mat-icon", 26);
    \u0275\u0275text(61, "account_balance");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(62, "mat-card", 24)(63, "mat-card-content")(64, "div", 8)(65, "div", 9)(66, "span", 10);
    \u0275\u0275text(67, "Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 25);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "mat-icon", 27);
    \u0275\u0275text(72, "person_add");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "mat-card", 24)(74, "mat-card-content")(75, "div", 8)(76, "div", 9)(77, "span", 10);
    \u0275\u0275text(78, "Active Corridors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 25);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "mat-icon", 28);
    \u0275\u0275text(82, "alt_route");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(83, "mat-card", 24)(84, "mat-card-content")(85, "div", 8)(86, "div", 9)(87, "span", 10);
    \u0275\u0275text(88, "This Month Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 25);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "mat-icon", 26);
    \u0275\u0275text(92, "calendar_month");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(93, "mat-card", 29)(94, "mat-card-content")(95, "h3", 30);
    \u0275\u0275text(96, "Transaction Status Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 31)(98, "a", 32)(99, "span", 33);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "span", 34);
    \u0275\u0275text(102, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "a", 32)(104, "span", 35);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 34);
    \u0275\u0275text(107, "Processing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "a", 32)(109, "span", 36);
    \u0275\u0275text(110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "span", 34);
    \u0275\u0275text(112, "Completed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "a", 32)(114, "span", 37);
    \u0275\u0275text(115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "span", 34);
    \u0275\u0275text(117, "On Hold");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "a", 32)(119, "span", 38);
    \u0275\u0275text(120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "span", 34);
    \u0275\u0275text(122, "Cancelled");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "a", 32)(124, "span", 39);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "span", 34);
    \u0275\u0275text(127, "Failed");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(128, "div", 40)(129, "mat-card", 41)(130, "mat-card-content")(131, "h3", 30);
    \u0275\u0275text(132, "Recent Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(133, AdminDashboardComponent_ng_container_4_div_133_Template, 2, 0, "div", 42)(134, AdminDashboardComponent_ng_container_4_div_134_Template, 22, 3, "div", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 44)(136, "mat-card", 45)(137, "mat-card-content")(138, "h3", 30);
    \u0275\u0275text(139, "Active Exchange Rates");
    \u0275\u0275elementEnd();
    \u0275\u0275template(140, AdminDashboardComponent_ng_container_4_div_140_Template, 2, 0, "div", 42)(141, AdminDashboardComponent_ng_container_4_div_141_Template, 2, 1, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "mat-card", 47)(143, "mat-card-content")(144, "h3", 30);
    \u0275\u0275text(145, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "div", 48)(147, "a", 49)(148, "mat-icon");
    \u0275\u0275text(149, "currency_exchange");
    \u0275\u0275elementEnd();
    \u0275\u0275text(150, " Update Rates ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "a", 50)(152, "mat-icon");
    \u0275\u0275text(153, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(154, " Add New Agent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "a", 51)(156, "mat-icon");
    \u0275\u0275text(157, "security");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, " View Alerts ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "a", 52)(160, "mat-icon");
    \u0275\u0275text(161, "alt_route");
    \u0275\u0275elementEnd();
    \u0275\u0275text(162, " Manage Routing ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 32, ctx_r0.dashboard.totalTransactions));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.monthChangeClass(ctx_r0.dashboard.transactionsThisMonth, ctx_r0.dashboard.transactionsLastMonth));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.monthChangeText(ctx_r0.dashboard.transactionsThisMonth, ctx_r0.dashboard.transactionsLastMonth), " this month ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.dashboard.totalCommissionRevenue));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.monthChangeClass(ctx_r0.dashboard.commissionThisMonth, ctx_r0.dashboard.commissionLastMonth));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.monthChangeText(ctx_r0.dashboard.commissionThisMonth, ctx_r0.dashboard.commissionLastMonth), " this month ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.dashboard.activeAgents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.dashboard.pendingAgents > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.dashboard.pendingAgents === 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.dashboard.unresolvedAlerts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.dashboard.unresolvedAlerts > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.dashboard.unresolvedAlerts === 0);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.dashboard.totalVolume));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 34, ctx_r0.dashboard.totalCustomers));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.dashboard.activeCorridors);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.dashboard.volumeThisMonth));
    \u0275\u0275advance(8);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(36, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dashboard.pendingTransactions);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(37, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dashboard.processingTransactions);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(38, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dashboard.completedTransactions);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(39, _c3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dashboard.onHoldTransactions);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(40, _c4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dashboard.cancelledTransactions);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(41, _c5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dashboard.failedTransactions);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.dashboard.recentTransactions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.dashboard.recentTransactions.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.dashboard.activeExchangeRates.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.dashboard.activeExchangeRates.length > 0);
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.dashboard = null;
    this.loading = true;
    this.transactionColumns = [
      "referenceNumber",
      "senderName",
      "receiverName",
      "amount",
      "status",
      "createdAt"
    ];
    this.rateColumns = ["currencyPair", "rate"];
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadDashboard();
  }
  loadDashboard() {
    this.loading = true;
    this.api.getDashboard().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.dashboard = res.data;
        } else {
          this.notify.error(res?.message || "Failed to load dashboard data.");
        }
        this.loading = false;
      },
      error: (err) => {
        this.notify.error("Error loading dashboard.");
        this.loading = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  formatCurrency(amount) {
    if (amount >= 1e6)
      return "$" + (amount / 1e6).toFixed(1) + "M";
    if (amount >= 1e3)
      return "$" + (amount / 1e3).toFixed(1) + "K";
    return "$" + amount.toFixed(2);
  }
  monthChangeText(current, previous) {
    if (previous === 0)
      return current > 0 ? "+100%" : "0%";
    const pct = (current - previous) / previous * 100;
    return pct >= 0 ? `+${pct.toFixed(1)}%` : `${pct.toFixed(1)}%`;
  }
  monthChangeClass(current, previous) {
    return current >= previous ? "change-positive" : "change-negative";
  }
  getStatusClass(status) {
    switch (status) {
      case "Completed":
        return "status-completed";
      case "Pending":
        return "status-pending";
      case "Processing":
      case "Approved":
        return "status-processing";
      case "OnHold":
        return "status-onhold";
      case "Failed":
        return "status-failed";
      case "Cancelled":
        return "status-cancelled";
      default:
        return "status-default";
    }
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 5, vars: 2, consts: [[1, "admin-dashboard"], [1, "page-title"], ["class", "loading-container", 4, "ngIf"], [4, "ngIf"], [1, "loading-container"], ["diameter", "48"], [1, "stat-cards-grid"], ["appearance", "outlined", "routerLink", "/admin/transactions", 1, "stat-card", "stat-card-blue", "clickable-card"], [1, "stat-card-inner"], [1, "stat-card-text"], [1, "stat-label"], [1, "stat-value"], [1, "stat-subtitle", 3, "ngClass"], [1, "stat-icon", "stat-icon-blue"], ["appearance", "outlined", "routerLink", "/admin/reports/commissions", 1, "stat-card", "stat-card-green", "clickable-card"], [1, "stat-icon", "stat-icon-green"], ["appearance", "outlined", "routerLink", "/admin/agents", 1, "stat-card", "stat-card-orange", "clickable-card"], ["class", "stat-subtitle", "style", "color: #1976d2;", 4, "ngIf"], ["class", "stat-subtitle change-positive", 4, "ngIf"], [1, "stat-icon", "stat-icon-orange"], ["appearance", "outlined", "routerLink", "/admin/compliance", 1, "stat-card", "stat-card-purple", "clickable-card"], ["class", "stat-subtitle", "style", "color: #ed6c02;", 4, "ngIf"], [1, "stat-icon", "stat-icon-warning"], [1, "stat-cards-grid", "secondary-stats"], ["appearance", "outlined", 1, "secondary-card"], [1, "stat-value", "secondary-value"], [1, "stat-icon-sm", "stat-icon-blue"], [1, "stat-icon-sm", 2, "color", "#757575"], [1, "stat-icon-sm", 2, "color", "#9c27b0"], ["appearance", "outlined", 1, "status-breakdown-card"], [1, "section-title"], [1, "status-chips-row"], ["routerLink", "/admin/transactions", 1, "status-chip-item", "clickable-chip", 3, "queryParams"], [1, "status-chip", "status-pending"], [1, "status-chip-label"], [1, "status-chip", "status-processing"], [1, "status-chip", "status-completed"], [1, "status-chip", "status-onhold"], [1, "status-chip", "status-cancelled"], [1, "status-chip", "status-failed"], [1, "bottom-grid"], ["appearance", "outlined", 1, "bottom-left-card"], ["class", "empty-text", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "bottom-right-column"], ["appearance", "outlined", 1, "exchange-rates-card"], ["class", "rates-list", 4, "ngIf"], ["appearance", "outlined", 1, "quick-actions-card"], [1, "quick-actions-list"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/admin/rates", 1, "quick-action-btn"], ["mat-stroked-button", "", "routerLink", "/admin/agents", 1, "quick-action-btn"], ["mat-stroked-button", "", "color", "warn", "routerLink", "/admin/compliance", 1, "quick-action-btn"], ["mat-stroked-button", "", "routerLink", "/admin/routing", 1, "quick-action-btn"], [1, "stat-subtitle", 2, "color", "#1976d2"], [1, "stat-subtitle", "change-positive"], [1, "stat-subtitle", 2, "color", "#ed6c02"], [1, "empty-text"], [1, "table-responsive"], ["mat-table", "", 1, "transactions-table", 3, "dataSource"], ["matColumnDef", "referenceNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "senderName"], ["matColumnDef", "receiverName"], ["matColumnDef", "amount"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "clickable-row", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "mono-text"], [1, "status-chip", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable-row", 3, "routerLink"], [1, "rates-list"], ["class", "rate-item", 4, "ngFor", "ngForOf"], [1, "rate-item"], [1, "rate-pair"], [1, "rate-value"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Admin Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, AdminDashboardComponent_div_3_Template, 2, 0, "div", 2)(4, AdminDashboardComponent_ng_container_4_Template, 163, 42, "ng-container", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dashboard);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, MatCardModule, MatCard, MatCardContent, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatIconModule, MatIcon, MatButtonModule, MatAnchor, MatProgressSpinnerModule, MatProgressSpinner, MatChipsModule], styles: ['\n\n.admin-dashboard[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.error-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.875rem;\n}\n.error-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stat-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12) !important;\n  transform: translateY(-2px);\n}\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.stat-card-blue[_ngcontent-%COMP%] {\n  border-left-color: #1976d2 !important;\n}\n.stat-card-green[_ngcontent-%COMP%] {\n  border-left-color: #2e7d32 !important;\n}\n.stat-card-purple[_ngcontent-%COMP%] {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-card-orange[_ngcontent-%COMP%] {\n  border-left-color: #ed6c02 !important;\n}\n.stat-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-card-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.2;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.change-positive[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.change-negative[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n.stat-icon-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-icon-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-icon-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-icon-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-icon-warning[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.secondary-stats[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.secondary-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  transition: box-shadow 0.2s ease;\n}\n.secondary-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1) !important;\n}\n.secondary-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n.secondary-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n.stat-icon-sm[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.status-breakdown-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.status-breakdown-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.status-chips-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n.status-chip-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-chip-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.7);\n}\n.status-pending[_ngcontent-%COMP%] {\n  background-color: #ed6c02;\n  color: #fff;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background-color: #0288d1;\n  color: #fff;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n  color: #fff;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #757575;\n  color: #fff;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background-color: #d32f2f;\n  color: #fff;\n}\n.status-onhold[_ngcontent-%COMP%] {\n  background-color: #424242;\n  color: #fff;\n}\n.status-default[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n  color: #fff;\n}\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 24px;\n}\n.bottom-left-card[_ngcontent-%COMP%], \n.exchange-rates-card[_ngcontent-%COMP%], \n.quick-actions-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n.bottom-left-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], \n.exchange-rates-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], \n.quick-actions-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.transactions-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.bottom-right-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.rates-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.rate-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n}\n.rate-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rate-pair[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.rate-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #2e7d32;\n}\n.quick-actions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.quick-action-btn[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  text-align: left;\n}\n.quick-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.dark-mode[_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .error-alert[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .error-alert[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: rgba(220, 38, 38, 0.3);\n  color: #fca5a5;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n.dark-mode[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .secondary-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .secondary-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .secondary-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .secondary-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3) !important;\n}\n.dark-mode[_nghost-%COMP%]   .status-breakdown-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-breakdown-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .status-chip-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-chip-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .bottom-left-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .bottom-left-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .exchange-rates-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .exchange-rates-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .quick-actions-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .quick-actions-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  background: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.dark-mode[_nghost-%COMP%]   .rate-item[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rate-item[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_nghost-%COMP%]   .rate-pair[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rate-pair[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .rate-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rate-value[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n@media (max-width: 1200px) {\n  .stat-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .bottom-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.clickable-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.clickable-chip[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  transition: opacity 0.15s, transform 0.15s;\n}\n.clickable-chip[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n  transform: scale(1.05);\n}\n.clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media (max-width: 600px) {\n  .stat-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .status-chips-row[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatCardModule,
      MatTableModule,
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      MatChipsModule,
      DecimalPipe,
      DatePipe
    ], template: `<div class="admin-dashboard">
  <h2 class="page-title">Admin Dashboard</h2>

  <!-- Loading Spinner -->
  <div *ngIf="loading" class="loading-container">
    <mat-spinner diameter="48"></mat-spinner>
  </div>

  <ng-container *ngIf="dashboard">
    <!-- ---- Summary Cards ---- -->
    <div class="stat-cards-grid">
      <!-- Total Transactions -->
      <mat-card class="stat-card stat-card-blue clickable-card" appearance="outlined" routerLink="/admin/transactions">
        <mat-card-content>
          <div class="stat-card-inner">
            <div class="stat-card-text">
              <span class="stat-label">Total Transactions</span>
              <span class="stat-value">{{ dashboard.totalTransactions | number }}</span>
              <span class="stat-subtitle" [ngClass]="monthChangeClass(dashboard.transactionsThisMonth, dashboard.transactionsLastMonth)">
                {{ monthChangeText(dashboard.transactionsThisMonth, dashboard.transactionsLastMonth) }} this month
              </span>
            </div>
            <mat-icon class="stat-icon stat-icon-blue">receipt_long</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Service Charge Revenue -->
      <mat-card class="stat-card stat-card-green clickable-card" appearance="outlined" routerLink="/admin/reports/commissions">
        <mat-card-content>
          <div class="stat-card-inner">
            <div class="stat-card-text">
              <span class="stat-label">Service Charge Revenue</span>
              <span class="stat-value">{{ formatCurrency(dashboard.totalCommissionRevenue) }}</span>
              <span class="stat-subtitle" [ngClass]="monthChangeClass(dashboard.commissionThisMonth, dashboard.commissionLastMonth)">
                {{ monthChangeText(dashboard.commissionThisMonth, dashboard.commissionLastMonth) }} this month
              </span>
            </div>
            <mat-icon class="stat-icon stat-icon-green">trending_up</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Active Agents -->
      <mat-card class="stat-card stat-card-orange clickable-card" appearance="outlined" routerLink="/admin/agents">
        <mat-card-content>
          <div class="stat-card-inner">
            <div class="stat-card-text">
              <span class="stat-label">Active Agents</span>
              <span class="stat-value">{{ dashboard.activeAgents }}</span>
              <span class="stat-subtitle" *ngIf="dashboard.pendingAgents > 0" style="color: #1976d2;">
                {{ dashboard.pendingAgents }} pending approval
              </span>
              <span class="stat-subtitle change-positive" *ngIf="dashboard.pendingAgents === 0">
                No pending approvals
              </span>
            </div>
            <mat-icon class="stat-icon stat-icon-orange">people</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Compliance Alerts -->
      <mat-card class="stat-card stat-card-purple clickable-card" appearance="outlined" routerLink="/admin/compliance">
        <mat-card-content>
          <div class="stat-card-inner">
            <div class="stat-card-text">
              <span class="stat-label">Compliance Alerts</span>
              <span class="stat-value">{{ dashboard.unresolvedAlerts }}</span>
              <span class="stat-subtitle" *ngIf="dashboard.unresolvedAlerts > 0" style="color: #ed6c02;">
                Requires attention
              </span>
              <span class="stat-subtitle change-positive" *ngIf="dashboard.unresolvedAlerts === 0">
                All clear
              </span>
            </div>
            <mat-icon class="stat-icon stat-icon-warning">warning</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>
    </div>

    <!-- ---- Secondary Stats Row ---- -->
    <div class="stat-cards-grid secondary-stats">
      <mat-card class="secondary-card" appearance="outlined">
        <mat-card-content>
          <div class="stat-card-inner">
            <div class="stat-card-text">
              <span class="stat-label">Total Volume</span>
              <span class="stat-value secondary-value">{{ formatCurrency(dashboard.totalVolume) }}</span>
            </div>
            <mat-icon class="stat-icon-sm stat-icon-blue">account_balance</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="secondary-card" appearance="outlined">
        <mat-card-content>
          <div class="stat-card-inner">
            <div class="stat-card-text">
              <span class="stat-label">Customers</span>
              <span class="stat-value secondary-value">{{ dashboard.totalCustomers | number }}</span>
            </div>
            <mat-icon class="stat-icon-sm" style="color: #757575;">person_add</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="secondary-card" appearance="outlined">
        <mat-card-content>
          <div class="stat-card-inner">
            <div class="stat-card-text">
              <span class="stat-label">Active Corridors</span>
              <span class="stat-value secondary-value">{{ dashboard.activeCorridors }}</span>
            </div>
            <mat-icon class="stat-icon-sm" style="color: #9c27b0;">alt_route</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="secondary-card" appearance="outlined">
        <mat-card-content>
          <div class="stat-card-inner">
            <div class="stat-card-text">
              <span class="stat-label">This Month Volume</span>
              <span class="stat-value secondary-value">{{ formatCurrency(dashboard.volumeThisMonth) }}</span>
            </div>
            <mat-icon class="stat-icon-sm stat-icon-blue">calendar_month</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>
    </div>

    <!-- ---- Transaction Status Breakdown ---- -->
    <mat-card class="status-breakdown-card" appearance="outlined">
      <mat-card-content>
        <h3 class="section-title">Transaction Status Overview</h3>
        <div class="status-chips-row">
          <a class="status-chip-item clickable-chip" routerLink="/admin/transactions" [queryParams]="{status: 'Pending'}">
            <span class="status-chip status-pending">{{ dashboard.pendingTransactions }}</span>
            <span class="status-chip-label">Pending</span>
          </a>
          <a class="status-chip-item clickable-chip" routerLink="/admin/transactions" [queryParams]="{status: 'Processing'}">
            <span class="status-chip status-processing">{{ dashboard.processingTransactions }}</span>
            <span class="status-chip-label">Processing</span>
          </a>
          <a class="status-chip-item clickable-chip" routerLink="/admin/transactions" [queryParams]="{status: 'Completed'}">
            <span class="status-chip status-completed">{{ dashboard.completedTransactions }}</span>
            <span class="status-chip-label">Completed</span>
          </a>
          <a class="status-chip-item clickable-chip" routerLink="/admin/transactions" [queryParams]="{status: 'OnHold'}">
            <span class="status-chip status-onhold">{{ dashboard.onHoldTransactions }}</span>
            <span class="status-chip-label">On Hold</span>
          </a>
          <a class="status-chip-item clickable-chip" routerLink="/admin/transactions" [queryParams]="{status: 'Cancelled'}">
            <span class="status-chip status-cancelled">{{ dashboard.cancelledTransactions }}</span>
            <span class="status-chip-label">Cancelled</span>
          </a>
          <a class="status-chip-item clickable-chip" routerLink="/admin/transactions" [queryParams]="{status: 'Failed'}">
            <span class="status-chip status-failed">{{ dashboard.failedTransactions }}</span>
            <span class="status-chip-label">Failed</span>
          </a>
        </div>
      </mat-card-content>
    </mat-card>

    <!-- ---- Recent Transactions + Exchange Rates / Quick Actions ---- -->
    <div class="bottom-grid">
      <!-- Recent Transactions -->
      <mat-card class="bottom-left-card" appearance="outlined">
        <mat-card-content>
          <h3 class="section-title">Recent Transactions</h3>

          <div *ngIf="dashboard.recentTransactions.length === 0" class="empty-text">
            No transactions yet.
          </div>

          <div class="table-responsive" *ngIf="dashboard.recentTransactions.length > 0">
            <table mat-table [dataSource]="dashboard.recentTransactions" class="transactions-table">
              <!-- Reference -->
              <ng-container matColumnDef="referenceNumber">
                <th mat-header-cell *matHeaderCellDef>Reference</th>
                <td mat-cell *matCellDef="let txn">
                  <span class="mono-text">{{ txn.referenceNumber }}</span>
                </td>
              </ng-container>

              <!-- Sender -->
              <ng-container matColumnDef="senderName">
                <th mat-header-cell *matHeaderCellDef>Sender</th>
                <td mat-cell *matCellDef="let txn">{{ txn.senderName }}</td>
              </ng-container>

              <!-- Receiver -->
              <ng-container matColumnDef="receiverName">
                <th mat-header-cell *matHeaderCellDef>Receiver</th>
                <td mat-cell *matCellDef="let txn">{{ txn.receiverName }}</td>
              </ng-container>

              <!-- Amount -->
              <ng-container matColumnDef="amount">
                <th mat-header-cell *matHeaderCellDef>Amount</th>
                <td mat-cell *matCellDef="let txn">
                  {{ txn.sendAmount | number:'1.2-2' }} {{ txn.sendCurrency }}
                </td>
              </ng-container>

              <!-- Status -->
              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef>Status</th>
                <td mat-cell *matCellDef="let txn">
                  <span class="status-chip" [ngClass]="getStatusClass(txn.status)">
                    {{ txn.status }}
                  </span>
                </td>
              </ng-container>

              <!-- Date -->
              <ng-container matColumnDef="createdAt">
                <th mat-header-cell *matHeaderCellDef>Date</th>
                <td mat-cell *matCellDef="let txn">
                  {{ txn.createdAt | date:'MMM dd, HH:mm' }}
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="transactionColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: transactionColumns;" class="clickable-row" [routerLink]="['/admin/transactions', row.id]"></tr>
            </table>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Right column -->
      <div class="bottom-right-column">
        <!-- Active Exchange Rates -->
        <mat-card class="exchange-rates-card" appearance="outlined">
          <mat-card-content>
            <h3 class="section-title">Active Exchange Rates</h3>

            <div *ngIf="dashboard.activeExchangeRates.length === 0" class="empty-text">
              No active rates configured.
            </div>

            <div class="rates-list" *ngIf="dashboard.activeExchangeRates.length > 0">
              <div class="rate-item" *ngFor="let rate of dashboard.activeExchangeRates">
                <span class="rate-pair"><strong>{{ rate.sourceCurrency }} &rarr; {{ rate.destinationCurrency }}</strong></span>
                <span class="rate-value">{{ rate.rate | number:'1.2-2' }}</span>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Quick Actions -->
        <mat-card class="quick-actions-card" appearance="outlined">
          <mat-card-content>
            <h3 class="section-title">Quick Actions</h3>
            <div class="quick-actions-list">
              <a mat-stroked-button color="primary" routerLink="/admin/rates" class="quick-action-btn">
                <mat-icon>currency_exchange</mat-icon>
                Update Rates
              </a>
              <a mat-stroked-button routerLink="/admin/agents" class="quick-action-btn">
                <mat-icon>person_add</mat-icon>
                Add New Agent
              </a>
              <a mat-stroked-button color="warn" routerLink="/admin/compliance" class="quick-action-btn">
                <mat-icon>security</mat-icon>
                View Alerts
              </a>
              <a mat-stroked-button routerLink="/admin/routing" class="quick-action-btn">
                <mat-icon>alt_route</mat-icon>
                Manage Routing
              </a>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  </ng-container>
</div>
`, styles: ['/* src/app/pages/admin/dashboard/admin-dashboard.component.scss */\n.admin-dashboard {\n  padding: 0;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.error-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.875rem;\n}\n.error-alert mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stat-cards-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.stat-card {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12) !important;\n  transform: translateY(-2px);\n}\n.stat-card mat-card-content {\n  padding: 20px !important;\n}\n.stat-card-blue {\n  border-left-color: #1976d2 !important;\n}\n.stat-card-green {\n  border-left-color: #2e7d32 !important;\n}\n.stat-card-purple {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-card-orange {\n  border-left-color: #ed6c02 !important;\n}\n.stat-card-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-card-text {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.stat-value {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.2;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-subtitle {\n  font-size: 0.75rem;\n}\n.change-positive {\n  color: #2e7d32;\n}\n.change-negative {\n  color: #d32f2f;\n}\n.stat-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n.stat-icon-blue {\n  color: #1976d2;\n}\n.stat-icon-green {\n  color: #2e7d32;\n}\n.stat-icon-purple {\n  color: #7b1fa2;\n}\n.stat-icon-orange {\n  color: #ed6c02;\n}\n.stat-icon-warning {\n  color: #ed6c02;\n}\n.secondary-stats {\n  margin-bottom: 24px;\n}\n.secondary-card {\n  border-radius: 12px !important;\n  transition: box-shadow 0.2s ease;\n}\n.secondary-card:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1) !important;\n}\n.secondary-card mat-card-content {\n  padding: 16px !important;\n}\n.secondary-value {\n  font-size: 1.5rem !important;\n}\n.stat-icon-sm {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.status-breakdown-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.status-breakdown-card mat-card-content {\n  padding: 24px !important;\n}\n.section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.status-chips-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n.status-chip-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-chip-label {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.7);\n}\n.status-pending {\n  background-color: #ed6c02;\n  color: #fff;\n}\n.status-processing {\n  background-color: #0288d1;\n  color: #fff;\n}\n.status-completed {\n  background-color: #2e7d32;\n  color: #fff;\n}\n.status-cancelled {\n  background-color: #757575;\n  color: #fff;\n}\n.status-failed {\n  background-color: #d32f2f;\n  color: #fff;\n}\n.status-onhold {\n  background-color: #424242;\n  color: #fff;\n}\n.status-default {\n  background-color: #9e9e9e;\n  color: #fff;\n}\n.bottom-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 24px;\n}\n.bottom-left-card,\n.exchange-rates-card,\n.quick-actions-card {\n  border-radius: 12px !important;\n}\n.bottom-left-card mat-card-content,\n.exchange-rates-card mat-card-content,\n.quick-actions-card mat-card-content {\n  padding: 24px !important;\n}\n.empty-text {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.table-responsive {\n  overflow-x: auto;\n}\n.transactions-table {\n  width: 100%;\n}\n.transactions-table .mat-mdc-header-cell {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.transactions-table .mat-mdc-cell {\n  font-size: 0.875rem;\n}\n.transactions-table .mat-mdc-row:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.bottom-right-column {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.rates-list {\n  display: flex;\n  flex-direction: column;\n}\n.rate-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n}\n.rate-item:last-child {\n  border-bottom: none;\n}\n.rate-pair {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.rate-value {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #2e7d32;\n}\n.quick-actions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.quick-action-btn {\n  justify-content: flex-start !important;\n  text-align: left;\n}\n.quick-action-btn mat-icon {\n  margin-right: 8px;\n}\n:host-context(.dark-mode) .page-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .error-alert {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: rgba(220, 38, 38, 0.3);\n  color: #fca5a5;\n}\n:host-context(.dark-mode) .stat-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .stat-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n:host-context(.dark-mode) .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .stat-value {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .secondary-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .secondary-card:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3) !important;\n}\n:host-context(.dark-mode) .status-breakdown-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .section-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .status-chip-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .bottom-left-card,\n:host-context(.dark-mode) .exchange-rates-card,\n:host-context(.dark-mode) .quick-actions-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .empty-text {\n  color: #64748b;\n}\n:host-context(.dark-mode) .transactions-table .mat-mdc-header-cell {\n  color: #94a3b8;\n  background: #334155;\n}\n:host-context(.dark-mode) .transactions-table .mat-mdc-row:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n:host-context(.dark-mode) .rate-item {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark-mode) .rate-pair {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .rate-value {\n  color: #4ade80;\n}\n@media (max-width: 1200px) {\n  .stat-cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .bottom-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.clickable-card {\n  cursor: pointer;\n}\n.clickable-chip {\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  transition: opacity 0.15s, transform 0.15s;\n}\n.clickable-chip:hover {\n  opacity: 0.85;\n  transform: scale(1.05);\n}\n.clickable-row {\n  cursor: pointer;\n}\n@media (max-width: 600px) {\n  .stat-cards-grid {\n    grid-template-columns: 1fr;\n  }\n  .status-chips-row {\n    gap: 12px;\n  }\n  .stat-value {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/pages/admin/dashboard/admin-dashboard.component.ts", lineNumber: 37 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-PPOPRPJZ.js.map
