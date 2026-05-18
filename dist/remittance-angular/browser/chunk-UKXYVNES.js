import {
  AppSettingsService
} from "./chunk-RZBKGWZI.js";
import {
  NotificationService
} from "./chunk-B6XI4CW2.js";
import "./chunk-LQZAMWD2.js";
import {
  SeoService
} from "./chunk-VA5RCFF2.js";
import {
  ApiService
} from "./chunk-UHRNEUWT.js";
import {
  AuthStateService
} from "./chunk-AGDJ7TMO.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-ZX3UFU5L.js";
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
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WEHJLEZR.js";
import "./chunk-ZNC4SKHB.js";

// src/app/pages/agent/dashboard/agent-dashboard.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function AgentDashboardComponent__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 10)(2, "path", 11);
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Send Money ");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_ng_container_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27);
    \u0275\u0275element(3, "div", 28)(4, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 30);
    \u0275\u0275elementEnd()();
  }
}
function AgentDashboardComponent_ng_container_12_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 32)(2, "div", 28)(3, "div", 33);
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275template(2, AgentDashboardComponent_ng_container_12_div_2_Template, 6, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18);
    \u0275\u0275element(5, "div", 19);
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275element(7, "div", 21)(8, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275element(10, "div", 23);
    \u0275\u0275template(11, AgentDashboardComponent_ng_container_12_div_11_Template, 4, 0, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0));
  }
}
function AgentDashboardComponent_ng_container_13_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "div", 37)(3, "p", 38);
    \u0275\u0275text(4, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 41);
    \u0275\u0275element(9, "path", 89);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatAmount(ctx_r0.totalCommission));
  }
}
function AgentDashboardComponent_ng_container_13_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "p", 57);
    \u0275\u0275text(2, "This Month's Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "p", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 61);
    \u0275\u0275element(8, "path", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "p", 63);
    \u0275\u0275text(10, "earned this calendar month");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatAmount(ctx_r0.monthlyCommission));
  }
}
function AgentDashboardComponent_ng_container_13_a_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 92)(1, "div", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 9);
    \u0275\u0275element(3, "path", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Send Money Now");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 94);
    \u0275\u0275element(7, "path", 81);
    \u0275\u0275elementEnd()();
  }
}
function AgentDashboardComponent_ng_container_13_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 97);
    \u0275\u0275element(3, "path", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 98);
    \u0275\u0275text(5, "No transactions yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 63);
    \u0275\u0275text(7, "Your recent transfers will appear here");
    \u0275\u0275elementEnd()();
  }
}
function AgentDashboardComponent_ng_container_13_div_102_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105)(1, "td", 106)(2, "span", 107);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 108)(5, "div", 109)(6, "span", 110);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 111);
    \u0275\u0275element(9, "path", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 113);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "td", 106)(13, "div", 114)(14, "span", 115);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 116);
    \u0275\u0275text(18, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 117);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td", 106)(23, "span", 118);
    \u0275\u0275element(24, "span", 119);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 120);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r2.referenceNumber);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(tx_r2.senderName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(tx_r2.receiverName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(16, 10, tx_r2.sendAmount, "1.2-2"), " ", tx_r2.sendCurrency, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(21, 13, tx_r2.receiveAmount, "1.2-2"), " ", tx_r2.receiveCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getStatusClass(tx_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tx_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 16, tx_r2.createdAt, "MMM dd, HH:mm"));
  }
}
function AgentDashboardComponent_ng_container_13_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "table", 100)(2, "thead")(3, "tr", 101)(4, "th", 102);
    \u0275\u0275text(5, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 102);
    \u0275\u0275text(7, "Sender \u2192 Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 102);
    \u0275\u0275text(9, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 102);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 102);
    \u0275\u0275text(13, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody", 103);
    \u0275\u0275template(15, AgentDashboardComponent_ng_container_13_div_102_tr_15_Template, 29, 19, "tr", 104);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.recentTransactions);
  }
}
function AgentDashboardComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "div", 35)(3, "div", 36)(4, "div", 37)(5, "p", 38);
    \u0275\u0275text(6, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 41);
    \u0275\u0275element(11, "path", 42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 35)(13, "div", 36)(14, "div", 37)(15, "p", 38);
    \u0275\u0275text(16, "Used Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 43);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 41);
    \u0275\u0275element(21, "path", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 46)(23, "div", 47);
    \u0275\u0275element(24, "div", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 35)(26, "div", 36)(27, "div", 37)(28, "p", 38);
    \u0275\u0275text(29, "Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 49);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 41);
    \u0275\u0275element(34, "path", 51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(35, AgentDashboardComponent_ng_container_13_div_35_Template, 10, 1, "div", 52);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div", 35)(37, "div", 36)(38, "div", 37)(39, "p", 38);
    \u0275\u0275text(40, "Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 39);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 41);
    \u0275\u0275element(45, "path", 54);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "div", 55)(47, "div", 56)(48, "p", 57);
    \u0275\u0275text(49, "Today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 58)(51, "p", 59);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 61);
    \u0275\u0275element(55, "path", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "p", 63);
    \u0275\u0275text(57, "transactions sent today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 56)(59, "p", 57);
    \u0275\u0275text(60, "Completion Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 58)(62, "p", 64);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(65, "svg", 61);
    \u0275\u0275element(66, "path", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(67, "div", 67);
    \u0275\u0275element(68, "div", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, AgentDashboardComponent_ng_container_13_div_69_Template, 11, 1, "div", 69);
    \u0275\u0275elementStart(70, "div", 56)(71, "p", 57);
    \u0275\u0275text(72, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 58)(74, "p", 64);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(77, "svg", 61);
    \u0275\u0275element(78, "path", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(79, "p", 63);
    \u0275\u0275text(80, "pending / processing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 71)(82, "div", 72)(83, "h3", 73);
    \u0275\u0275text(84, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 74);
    \u0275\u0275template(86, AgentDashboardComponent_ng_container_13_a_86_Template, 8, 0, "a", 75);
    \u0275\u0275elementStart(87, "a", 76)(88, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(89, "svg", 78);
    \u0275\u0275element(90, "path", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(91, "span");
    \u0275\u0275text(92, "View All Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(93, "svg", 80);
    \u0275\u0275element(94, "path", 81);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(95, "div", 82)(96, "div", 83)(97, "h3", 84);
    \u0275\u0275text(98, "Recent Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "a", 85);
    \u0275\u0275text(100, " View all \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(101, AgentDashboardComponent_ng_container_13_div_101_Template, 8, 0, "div", 86)(102, AgentDashboardComponent_ng_container_13_div_102_Template, 16, 1, "div", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.formatAmount(ctx_r0.balance.creditLimit));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.formatAmount(ctx_r0.balance.currentBalance));
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r0.balance.creditLimit > 0 ? ctx_r0.balance.currentBalance / ctx_r0.balance.creditLimit * 100 : 0, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.formatAmount(ctx_r0.balance.availableBalance));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.appSettings.agentCommissionEnabled);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.transactions.length);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.todayCount);
    \u0275\u0275advance(10);
    \u0275\u0275classMap(ctx_r0.completionRate >= 80 ? "text-success-600 dark:text-success-400" : ctx_r0.completionRate >= 50 ? "text-warning-600 dark:text-warning-400" : "text-danger-600 dark:text-danger-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.completionRate, "%");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.completionRate >= 80 ? "bg-success-50 dark:bg-success-900/20 text-success-600 dark:text-success-400" : ctx_r0.completionRate >= 50 ? "bg-warning-50 dark:bg-warning-900/20 text-warning-600 dark:text-warning-400" : "bg-danger-50 dark:bg-danger-900/20 text-danger-600 dark:text-danger-400");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r0.completionRate >= 80 ? "bg-success-500" : ctx_r0.completionRate >= 50 ? "bg-warning-500" : "bg-danger-500");
    \u0275\u0275styleProp("width", ctx_r0.completionRate, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.appSettings.agentCommissionEnabled);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r0.pendingCount > 0 ? "text-amber-600 dark:text-amber-400" : "text-surface-900 dark:text-surface-50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pendingCount);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.pendingCount > 0 ? "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400" : "bg-surface-100 dark:bg-surface-800 text-surface-500 dark:text-surface-400");
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.appSettings.allowQuickSend);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r0.recentTransactions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recentTransactions.length > 0);
  }
}
var AgentDashboardComponent = class _AgentDashboardComponent {
  get totalCommission() {
    return this.transactions.filter((tx) => tx.status !== "Cancelled" && tx.status !== "Failed").reduce((sum, tx) => sum + (tx.agentCommission || 0), 0);
  }
  get todayCount() {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return this.transactions.filter((tx) => new Date(tx.createdAt) >= today).length;
  }
  get monthlyCommission() {
    const now = /* @__PURE__ */ new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    return this.transactions.filter((tx) => tx.status !== "Cancelled" && tx.status !== "Failed" && new Date(tx.createdAt) >= startOfMonth).reduce((sum, tx) => sum + (tx.agentCommission || 0), 0);
  }
  get completionRate() {
    const eligible = this.transactions.filter((tx) => tx.status !== "Cancelled" && tx.status !== "Failed");
    if (eligible.length === 0)
      return 0;
    return Math.round(eligible.filter((tx) => tx.status === "Completed").length / eligible.length * 100);
  }
  get pendingCount() {
    return this.transactions.filter((tx) => ["Pending", "OnHold", "Compliance", "PendingApproval", "PendingPayout", "ProcessingAtPartner"].includes(tx.status)).length;
  }
  constructor(api, auth, notify, appSettings, seo) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.appSettings = appSettings;
    this.seo = seo;
    this.balance = {
      agentId: 0,
      businessName: "",
      creditLimit: 0,
      currentBalance: 0,
      availableBalance: 0
    };
    this.transactions = [];
    this.recentTransactions = [];
    this.loading = true;
    this.transactionColumns = [
      "referenceNumber",
      "sender",
      "receiver",
      "sendAmount",
      "receiveAmount",
      "commission",
      "status",
      "createdAt"
    ];
    this.showFullAmounts = false;
  }
  ngOnInit() {
    this.seo.setPage("Agent Dashboard", "View your balance, process transactions, and track commissions from the agent portal.");
    this.appSettings.load();
    this.auth.loadFromSession();
    this.loadData();
  }
  loadData() {
    this.loading = true;
    this.api.getAgentBalance().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.balance = res.data;
        } else {
          this.notify.error(res?.message || "Failed to load balance.");
        }
      },
      error: (err) => {
        this.notify.error(err?.error?.message || "Error loading balance. Please contact your administrator.");
      }
    });
    this.api.getAgentTransactions().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.transactions = res.data;
          this.recentTransactions = res.data.slice(0, 5);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  formatAmount(amount) {
    if (this.showFullAmounts) {
      return "$" + amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    if (amount >= 1e6) {
      const v = amount / 1e6;
      return "$" + (Number.isInteger(v * 100) ? v.toFixed(2) : v.toFixed(2).replace(/\.?0+$/, "")) + "M";
    }
    if (amount >= 1e3) {
      const v = amount / 1e3;
      return "$" + v.toFixed(2).replace(/\.?0+$/, "") + "K";
    }
    return "$" + amount.toFixed(2);
  }
  getStatusClass(status) {
    switch (status) {
      case "Completed":
        return "bg-success-100 text-success-700";
      case "Pending":
        return "bg-warning-100 text-warning-700";
      case "PendingPayout":
      case "ProcessingAtPartner":
        return "bg-brand-100 text-brand-700";
      case "Cancelled":
        return "bg-surface-100 text-surface-500";
      case "Failed":
        return "bg-danger-100 text-danger-700";
      default:
        return "bg-surface-100 text-surface-500";
    }
  }
  static {
    this.\u0275fac = function AgentDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(AppSettingsService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentDashboardComponent, selectors: [["app-agent-dashboard"]], decls: 14, vars: 8, consts: [[1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "tracking-tight", "text-surface-900", "dark:text-surface-50"], [1, "mt-0.5", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-2"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "text-surface-500", "dark:text-surface-400", "hover:text-surface-700", "dark:hover:text-surface-200", "hover:border-surface-300", "dark:hover:border-surface-600", "transition-all", "duration-150", 3, "click", "title"], ["class", "h-4 w-4", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 4, "ngIf"], ["routerLink", "/agent/send", "class", "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm transition-all duration-150 active:scale-95 no-underline", 4, "ngIf"], [4, "ngIf"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"], ["routerLink", "/agent/send", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-brand-600", "hover:bg-brand-700", "text-white", "text-sm", "font-semibold", "shadow-sm", "transition-all", "duration-150", "active:scale-95", "no-underline"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-5", "gap-4"], ["class", "rounded-2xl border border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 p-5 shadow-sm animate-pulse", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-5"], [1, "rounded-2xl", "border", "border-surface-100", "dark:border-surface-800", "bg-white", "dark:bg-surface-900", "p-6", "shadow-sm", "animate-pulse"], [1, "h-4", "w-28", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "mb-5"], [1, "space-y-3"], [1, "h-11", "w-full", "rounded-xl", "bg-surface-100", "dark:bg-surface-800"], [1, "lg:col-span-2", "rounded-2xl", "border", "border-surface-100", "dark:border-surface-800", "bg-white", "dark:bg-surface-900", "p-6", "shadow-sm", "animate-pulse"], [1, "h-4", "w-36", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "mb-5"], ["class", "flex items-center gap-4 py-3 border-b border-surface-50 dark:border-surface-800", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "border", "border-surface-100", "dark:border-surface-800", "bg-white", "dark:bg-surface-900", "p-5", "shadow-sm", "animate-pulse"], [1, "flex", "items-start", "justify-between"], [1, "space-y-3", "flex-1"], [1, "h-3", "w-24", "rounded-full", "bg-surface-100", "dark:bg-surface-800"], [1, "h-7", "w-20", "rounded-lg", "bg-surface-100", "dark:bg-surface-800"], [1, "h-11", "w-11", "rounded-xl", "bg-surface-100", "dark:bg-surface-800", "shrink-0"], [1, "flex", "items-center", "gap-4", "py-3", "border-b", "border-surface-50", "dark:border-surface-800"], [1, "h-3", "w-20", "rounded-full", "bg-surface-100", "dark:bg-surface-800"], [1, "h-3", "w-20", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "ml-auto"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-5", "gap-4", "animate-fade-in"], [1, "group", "rounded-2xl", "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "p-5", "shadow-sm", "hover:shadow-md", "transition-all", "duration-200", "hover:-translate-y-0.5"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "space-y-1", "min-w-0"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500"], [1, "text-2xl", "font-bold", "tabular-nums", "text-surface-900", "dark:text-surface-50"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-brand-50", "dark:bg-brand-950/50", "text-brand-600", "dark:text-brand-400", "shrink-0", "group-hover:scale-110", "transition-transform", "duration-200"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"], [1, "text-2xl", "font-bold", "tabular-nums", "text-warning-600", "dark:text-warning-400"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-warning-50", "dark:bg-warning-900/20", "text-warning-600", "dark:text-warning-400", "shrink-0", "group-hover:scale-110", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"], [1, "mt-3"], [1, "h-1.5", "w-full", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "overflow-hidden"], [1, "h-full", "rounded-full", "bg-warning-500", "transition-all", "duration-500"], [1, "text-2xl", "font-bold", "tabular-nums", "text-success-600", "dark:text-success-400"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-success-50", "dark:bg-success-900/20", "text-success-600", "dark:text-success-400", "shrink-0", "group-hover:scale-110", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"], ["class", "group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5", 4, "ngIf"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-surface-100", "dark:bg-surface-800", "text-surface-600", "dark:text-surface-400", "shrink-0", "group-hover:scale-110", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-4", "animate-fade-in"], [1, "rounded-2xl", "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "p-4", "shadow-sm"], [1, "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "mb-2"], [1, "flex", "items-end", "justify-between"], [1, "text-3xl", "font-bold", "tabular-nums", "text-surface-900", "dark:text-surface-50"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-sky-50", "dark:bg-sky-900/20", "text-sky-600", "dark:text-sky-400", "shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"], [1, "text-xs", "text-surface-400", "dark:text-surface-500", "mt-1"], [1, "text-3xl", "font-bold", "tabular-nums"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "mt-2", "h-1.5", "w-full", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-700"], ["class", "rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-4 shadow-sm", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-5", "animate-slide-up"], [1, "rounded-2xl", "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "p-6", "shadow-sm"], [1, "text-sm", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "mb-4"], [1, "space-y-2"], ["routerLink", "/agent/send", "class", "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold\n                    text-white bg-brand-600 hover:bg-brand-700\n                    transition-all duration-150 no-underline shadow-sm active:scale-[0.98]", 4, "ngIf"], ["routerLink", "/agent/transactions", 1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "text-sm", "font-semibold", "text-surface-700", "dark:text-surface-300", "bg-surface-50", "dark:bg-surface-800", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition-all", "duration-150", "no-underline", "active:scale-[0.98]"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-surface-200", "dark:bg-surface-700", "shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "text-surface-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "ml-auto", "opacity-40"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m8.25 4.5 7.5 7.5-7.5 7.5"], [1, "lg:col-span-2", "rounded-2xl", "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "shadow-sm", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-800"], [1, "text-sm", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500"], ["routerLink", "/agent/transactions", 1, "text-xs", "font-semibold", "text-brand-600", "dark:text-brand-400", "hover:text-brand-700", "dark:hover:text-brand-300", "transition-colors"], ["class", "flex flex-col items-center justify-center py-14 px-6 text-center", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "text-2xl", "font-bold", "tabular-nums", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "text-3xl", "font-bold", "tabular-nums", "text-brand-600", "dark:text-brand-400"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-brand-50", "dark:bg-brand-950/50", "text-brand-600", "dark:text-brand-400", "shrink-0"], ["routerLink", "/agent/send", 1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "text-sm", "font-semibold", "text-white", "bg-brand-600", "hover:bg-brand-700", "transition-all", "duration-150", "no-underline", "shadow-sm", "active:scale-[0.98]"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-white/20", "shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "ml-auto", "opacity-70"], [1, "flex", "flex-col", "items-center", "justify-center", "py-14", "px-6", "text-center"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-surface-100", "dark:bg-surface-800", "mb-4"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "h-7", "w-7", "text-surface-400"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "bg-surface-50/70", "dark:bg-surface-800/50"], [1, "px-5", "py-3", "text-left", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500"], [1, "divide-y", "divide-surface-50", "dark:divide-surface-800"], ["class", "hover:bg-surface-50/70 dark:hover:bg-surface-800/40 transition-colors duration-100", 4, "ngFor", "ngForOf"], [1, "hover:bg-surface-50/70", "dark:hover:bg-surface-800/40", "transition-colors", "duration-100"], [1, "px-5", "py-3.5", "whitespace-nowrap"], [1, "font-mono", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "bg-surface-100", "dark:bg-surface-800", "px-2", "py-0.5", "rounded-md"], [1, "px-5", "py-3.5"], [1, "flex", "items-center", "gap-1.5", "text-[13px]"], [1, "font-medium", "text-surface-800", "dark:text-surface-200", "truncate", "max-w-[80px]"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-3", "w-3", "text-surface-400", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"], [1, "text-surface-600", "dark:text-surface-400", "truncate", "max-w-[80px]"], [1, "text-[13px]"], [1, "font-semibold", "tabular-nums", "text-surface-800", "dark:text-surface-200"], [1, "text-surface-400", "dark:text-surface-500", "mx-1"], [1, "text-surface-500", "dark:text-surface-400", "tabular-nums"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-current", "opacity-80"], [1, "px-5", "py-3.5", "whitespace-nowrap", "text-xs", "tabular-nums", "text-surface-500", "dark:text-surface-400"]], template: function AgentDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function AgentDashboardComponent_Template_button_click_8_listener() {
          return ctx.showFullAmounts = !ctx.showFullAmounts;
        });
        \u0275\u0275template(9, AgentDashboardComponent__svg_svg_9_Template, 3, 0, "svg", 6)(10, AgentDashboardComponent__svg_svg_10_Template, 2, 0, "svg", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, AgentDashboardComponent_a_11_Template, 4, 0, "a", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, AgentDashboardComponent_ng_container_12_Template, 12, 4, "ng-container", 8)(13, AgentDashboardComponent_ng_container_13_Template, 103, 26, "ng-container", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.balance.businessName);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.showFullAmounts ? "Show abbreviated (K/M)" : "Show full numbers");
        \u0275\u0275attribute("aria-label", ctx.showFullAmounts ? "Show abbreviated amounts" : "Show full amounts");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showFullAmounts);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFullAmounts);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.appSettings.allowQuickSend);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=agent-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-agent-dashboard", standalone: true, imports: [
      CommonModule,
      RouterModule,
      DecimalPipe,
      DatePipe
    ], template: `<!-- Agent Dashboard -->\r
<div class="space-y-6">\r
\r
  <!-- Page Header -->\r
  <div class="flex items-center justify-between">\r
    <div>\r
      <h1 class="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-50">Dashboard</h1>\r
      <p class="mt-0.5 text-sm text-surface-500 dark:text-surface-400">{{ balance.businessName }}</p>\r
    </div>\r
    <div class="flex items-center gap-2">\r
      <!-- Toggle full / abbreviated amounts -->\r
      <button (click)="showFullAmounts = !showFullAmounts"\r
              [attr.aria-label]="showFullAmounts ? 'Show abbreviated amounts' : 'Show full amounts'"\r
              [title]="showFullAmounts ? 'Show abbreviated (K/M)' : 'Show full numbers'"\r
              class="flex h-9 w-9 items-center justify-center rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-200 hover:border-surface-300 dark:hover:border-surface-600 transition-all duration-150">\r
        <!-- Eye open \u2014 currently showing abbreviated, click to see full -->\r
        <svg *ngIf="!showFullAmounts" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>\r
        </svg>\r
        <!-- Eye off \u2014 currently showing full, click to abbreviate -->\r
        <svg *ngIf="showFullAmounts" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>\r
        </svg>\r
      </button>\r
      <a *ngIf="appSettings.allowQuickSend" routerLink="/agent/send"\r
         class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm transition-all duration-150 active:scale-95 no-underline">\r
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>\r
        </svg>\r
        Send Money\r
      </a>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500\u2500 Loading Skeleton \u2500\u2500\u2500 -->\r
  <ng-container *ngIf="loading">\r
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">\r
      <div *ngFor="let i of [1,2,3,4,5]"\r
           class="rounded-2xl border border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 p-5 shadow-sm animate-pulse">\r
        <div class="flex items-start justify-between">\r
          <div class="space-y-3 flex-1">\r
            <div class="h-3 w-24 rounded-full bg-surface-100 dark:bg-surface-800"></div>\r
            <div class="h-7 w-20 rounded-lg bg-surface-100 dark:bg-surface-800"></div>\r
          </div>\r
          <div class="h-11 w-11 rounded-xl bg-surface-100 dark:bg-surface-800 shrink-0"></div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">\r
      <div class="rounded-2xl border border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 p-6 shadow-sm animate-pulse">\r
        <div class="h-4 w-28 rounded-full bg-surface-100 dark:bg-surface-800 mb-5"></div>\r
        <div class="space-y-3">\r
          <div class="h-11 w-full rounded-xl bg-surface-100 dark:bg-surface-800"></div>\r
          <div class="h-11 w-full rounded-xl bg-surface-100 dark:bg-surface-800"></div>\r
        </div>\r
      </div>\r
      <div class="lg:col-span-2 rounded-2xl border border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 p-6 shadow-sm animate-pulse">\r
        <div class="h-4 w-36 rounded-full bg-surface-100 dark:bg-surface-800 mb-5"></div>\r
        <div *ngFor="let i of [1,2,3,4,5]" class="flex items-center gap-4 py-3 border-b border-surface-50 dark:border-surface-800">\r
          <div class="h-3 w-20 rounded-full bg-surface-100 dark:bg-surface-800"></div>\r
          <div class="h-3 w-24 rounded-full bg-surface-100 dark:bg-surface-800"></div>\r
          <div class="h-3 w-20 rounded-full bg-surface-100 dark:bg-surface-800 ml-auto"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </ng-container>\r
\r
  <!-- \u2500\u2500\u2500 Content \u2500\u2500\u2500 -->\r
  <ng-container *ngIf="!loading">\r
\r
    <!-- Stat Cards -->\r
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 animate-fade-in">\r
\r
      <!-- Credit Limit -->\r
      <div class="group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">\r
        <div class="flex items-start justify-between gap-3">\r
          <div class="space-y-1 min-w-0">\r
            <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Credit Limit</p>\r
            <p class="text-2xl font-bold tabular-nums text-surface-900 dark:text-surface-50">{{ formatAmount(balance.creditLimit) }}</p>\r
          </div>\r
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 shrink-0 group-hover:scale-110 transition-transform duration-200">\r
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"/>\r
            </svg>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Used Balance -->\r
      <div class="group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">\r
        <div class="flex items-start justify-between gap-3">\r
          <div class="space-y-1 min-w-0">\r
            <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Used Balance</p>\r
            <p class="text-2xl font-bold tabular-nums text-warning-600 dark:text-warning-400">{{ formatAmount(balance.currentBalance) }}</p>\r
          </div>\r
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-warning-50 dark:bg-warning-900/20 text-warning-600 dark:text-warning-400 shrink-0 group-hover:scale-110 transition-transform duration-200">\r
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"/>\r
            </svg>\r
          </div>\r
        </div>\r
        <!-- Usage bar -->\r
        <div class="mt-3">\r
          <div class="h-1.5 w-full rounded-full bg-surface-100 dark:bg-surface-800 overflow-hidden">\r
            <div class="h-full rounded-full bg-warning-500 transition-all duration-500"\r
                 [style.width.%]="balance.creditLimit > 0 ? (balance.currentBalance / balance.creditLimit * 100) : 0"></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Available Balance -->\r
      <div class="group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">\r
        <div class="flex items-start justify-between gap-3">\r
          <div class="space-y-1 min-w-0">\r
            <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Available</p>\r
            <p class="text-2xl font-bold tabular-nums text-success-600 dark:text-success-400">{{ formatAmount(balance.availableBalance) }}</p>\r
          </div>\r
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-success-50 dark:bg-success-900/20 text-success-600 dark:text-success-400 shrink-0 group-hover:scale-110 transition-transform duration-200">\r
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/>\r
            </svg>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Total Service Charge -->\r
      <div *ngIf="appSettings.agentCommissionEnabled"\r
           class="group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">\r
        <div class="flex items-start justify-between gap-3">\r
          <div class="space-y-1 min-w-0">\r
            <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Service Charge</p>\r
            <p class="text-2xl font-bold tabular-nums text-brand-600 dark:text-brand-400">{{ formatAmount(totalCommission) }}</p>\r
          </div>\r
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 shrink-0 group-hover:scale-110 transition-transform duration-200">\r
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>\r
            </svg>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Total Transactions -->\r
      <div class="group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">\r
        <div class="flex items-start justify-between gap-3">\r
          <div class="space-y-1 min-w-0">\r
            <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Transactions</p>\r
            <p class="text-2xl font-bold tabular-nums text-surface-900 dark:text-surface-50">{{ transactions.length }}</p>\r
          </div>\r
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 shrink-0 group-hover:scale-110 transition-transform duration-200">\r
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"/>\r
            </svg>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <!-- KPI Row -->\r
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">\r
\r
      <!-- Today's Transactions -->\r
      <div class="rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-4 shadow-sm">\r
        <p class="text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-2">Today</p>\r
        <div class="flex items-end justify-between">\r
          <p class="text-3xl font-bold tabular-nums text-surface-900 dark:text-surface-50">{{ todayCount }}</p>\r
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 shrink-0">\r
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>\r
            </svg>\r
          </div>\r
        </div>\r
        <p class="text-xs text-surface-400 dark:text-surface-500 mt-1">transactions sent today</p>\r
      </div>\r
\r
      <!-- Completion Rate -->\r
      <div class="rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-4 shadow-sm">\r
        <p class="text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-2">Completion Rate</p>\r
        <div class="flex items-end justify-between">\r
          <p class="text-3xl font-bold tabular-nums" [class]="completionRate >= 80 ? 'text-success-600 dark:text-success-400' : completionRate >= 50 ? 'text-warning-600 dark:text-warning-400' : 'text-danger-600 dark:text-danger-400'">{{ completionRate }}%</p>\r
          <div class="flex h-9 w-9 items-center justify-center rounded-xl shrink-0"\r
               [class]="completionRate >= 80 ? 'bg-success-50 dark:bg-success-900/20 text-success-600 dark:text-success-400' : completionRate >= 50 ? 'bg-warning-50 dark:bg-warning-900/20 text-warning-600 dark:text-warning-400' : 'bg-danger-50 dark:bg-danger-900/20 text-danger-600 dark:text-danger-400'">\r
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="mt-2 h-1.5 w-full rounded-full bg-surface-100 dark:bg-surface-800 overflow-hidden">\r
          <div class="h-full rounded-full transition-all duration-700"\r
               [class]="completionRate >= 80 ? 'bg-success-500' : completionRate >= 50 ? 'bg-warning-500' : 'bg-danger-500'"\r
               [style.width.%]="completionRate"></div>\r
        </div>\r
      </div>\r
\r
      <!-- Monthly Commission -->\r
      <div class="rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-4 shadow-sm" *ngIf="appSettings.agentCommissionEnabled">\r
        <p class="text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-2">This Month's Commission</p>\r
        <div class="flex items-end justify-between">\r
          <p class="text-3xl font-bold tabular-nums text-brand-600 dark:text-brand-400">{{ formatAmount(monthlyCommission) }}</p>\r
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 shrink-0">\r
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/>\r
            </svg>\r
          </div>\r
        </div>\r
        <p class="text-xs text-surface-400 dark:text-surface-500 mt-1">earned this calendar month</p>\r
      </div>\r
\r
      <!-- Pending Actions -->\r
      <div class="rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-4 shadow-sm">\r
        <p class="text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-2">In Progress</p>\r
        <div class="flex items-end justify-between">\r
          <p class="text-3xl font-bold tabular-nums" [class]="pendingCount > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-surface-900 dark:text-surface-50'">{{ pendingCount }}</p>\r
          <div class="flex h-9 w-9 items-center justify-center rounded-xl shrink-0"\r
               [class]="pendingCount > 0 ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400' : 'bg-surface-100 dark:bg-surface-800 text-surface-500 dark:text-surface-400'">\r
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>\r
            </svg>\r
          </div>\r
        </div>\r
        <p class="text-xs text-surface-400 dark:text-surface-500 mt-1">pending / processing</p>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Bottom Grid -->\r
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 animate-slide-up">\r
\r
      <!-- Quick Actions -->\r
      <div class="rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-6 shadow-sm">\r
        <h3 class="text-sm font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-4">Quick Actions</h3>\r
        <div class="space-y-2">\r
          <a *ngIf="appSettings.allowQuickSend" routerLink="/agent/send"\r
             class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold\r
                    text-white bg-brand-600 hover:bg-brand-700\r
                    transition-all duration-150 no-underline shadow-sm active:scale-[0.98]">\r
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 shrink-0">\r
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>\r
              </svg>\r
            </div>\r
            <span>Send Money Now</span>\r
            <svg class="h-4 w-4 ml-auto opacity-70" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>\r
            </svg>\r
          </a>\r
          <a routerLink="/agent/transactions"\r
             class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold\r
                    text-surface-700 dark:text-surface-300 bg-surface-50 dark:bg-surface-800\r
                    hover:bg-surface-100 dark:hover:bg-surface-700 transition-all duration-150 no-underline active:scale-[0.98]">\r
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-200 dark:bg-surface-700 shrink-0">\r
              <svg class="h-4 w-4 text-surface-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>\r
              </svg>\r
            </div>\r
            <span>View All Transactions</span>\r
            <svg class="h-4 w-4 ml-auto opacity-40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
\r
      <!-- Recent Transactions -->\r
      <div class="lg:col-span-2 rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 shadow-sm overflow-hidden">\r
        <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-800">\r
          <h3 class="text-sm font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Recent Transactions</h3>\r
          <a routerLink="/agent/transactions"\r
             class="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors">\r
            View all \u2192\r
          </a>\r
        </div>\r
\r
        <!-- Empty state -->\r
        <div *ngIf="recentTransactions.length === 0" class="flex flex-col items-center justify-center py-14 px-6 text-center">\r
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-100 dark:bg-surface-800 mb-4">\r
            <svg class="h-7 w-7 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"/>\r
            </svg>\r
          </div>\r
          <p class="text-sm font-medium text-surface-700 dark:text-surface-300">No transactions yet</p>\r
          <p class="text-xs text-surface-400 dark:text-surface-500 mt-1">Your recent transfers will appear here</p>\r
        </div>\r
\r
        <!-- Table -->\r
        <div *ngIf="recentTransactions.length > 0" class="overflow-x-auto">\r
          <table class="w-full text-sm">\r
            <thead>\r
              <tr class="bg-surface-50/70 dark:bg-surface-800/50">\r
                <th class="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Reference</th>\r
                <th class="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Sender \u2192 Receiver</th>\r
                <th class="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Amount</th>\r
                <th class="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Status</th>\r
                <th class="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Date</th>\r
              </tr>\r
            </thead>\r
            <tbody class="divide-y divide-surface-50 dark:divide-surface-800">\r
              <tr *ngFor="let tx of recentTransactions"\r
                  class="hover:bg-surface-50/70 dark:hover:bg-surface-800/40 transition-colors duration-100">\r
                <td class="px-5 py-3.5 whitespace-nowrap">\r
                  <span class="font-mono text-xs font-medium text-surface-600 dark:text-surface-400 bg-surface-100 dark:bg-surface-800 px-2 py-0.5 rounded-md">{{ tx.referenceNumber }}</span>\r
                </td>\r
                <td class="px-5 py-3.5">\r
                  <div class="flex items-center gap-1.5 text-[13px]">\r
                    <span class="font-medium text-surface-800 dark:text-surface-200 truncate max-w-[80px]">{{ tx.senderName }}</span>\r
                    <svg class="h-3 w-3 text-surface-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>\r
                    </svg>\r
                    <span class="text-surface-600 dark:text-surface-400 truncate max-w-[80px]">{{ tx.receiverName }}</span>\r
                  </div>\r
                </td>\r
                <td class="px-5 py-3.5 whitespace-nowrap">\r
                  <div class="text-[13px]">\r
                    <span class="font-semibold tabular-nums text-surface-800 dark:text-surface-200">{{ tx.sendAmount | number:'1.2-2' }} {{ tx.sendCurrency }}</span>\r
                    <span class="text-surface-400 dark:text-surface-500 mx-1">\u2192</span>\r
                    <span class="text-surface-500 dark:text-surface-400 tabular-nums">{{ tx.receiveAmount | number:'1.2-2' }} {{ tx.receiveCurrency }}</span>\r
                  </div>\r
                </td>\r
                <td class="px-5 py-3.5 whitespace-nowrap">\r
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"\r
                        [ngClass]="getStatusClass(tx.status)">\r
                    <span class="h-1.5 w-1.5 rounded-full bg-current opacity-80"></span>\r
                    {{ tx.status }}\r
                  </span>\r
                </td>\r
                <td class="px-5 py-3.5 whitespace-nowrap text-xs tabular-nums text-surface-500 dark:text-surface-400">{{ tx.createdAt | date:'MMM dd, HH:mm' }}</td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
  </ng-container>\r
</div>\r
`, styles: ["/* src/app/pages/agent/dashboard/agent-dashboard.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=agent-dashboard.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: AppSettingsService }, { type: SeoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentDashboardComponent, { className: "AgentDashboardComponent", filePath: "src/app/pages/agent/dashboard/agent-dashboard.component.ts", lineNumber: 24 });
})();
export {
  AgentDashboardComponent
};
//# sourceMappingURL=chunk-UKXYVNES.js.map
