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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-J3ROLHMS.js";

// src/app/pages/agent/dashboard/agent-dashboard.component.ts
function AgentDashboardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "mat-spinner", 28);
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "mat-spinner", 29);
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " No transactions yet. ");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_div_74_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Reference");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_div_74_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r1.referenceNumber);
  }
}
function AgentDashboardComponent_div_74_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Sender");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_div_74_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r2.senderName);
  }
}
function AgentDashboardComponent_div_74_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Receiver");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_div_74_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", tx_r3.receiverName, " (", tx_r3.receiverCountry, ")");
  }
}
function AgentDashboardComponent_div_74_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Send Amount");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_div_74_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, tx_r4.sendAmount, "1.2-2"), " ", tx_r4.sendCurrency, " ");
  }
}
function AgentDashboardComponent_div_74_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Receive Amount");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_div_74_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, tx_r5.receiveAmount, "1.2-2"), " ", tx_r5.receiveCurrency, " ");
  }
}
function AgentDashboardComponent_div_74_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Service Charge");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_div_74_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, tx_r6.agentCommission, "1.2-2"));
  }
}
function AgentDashboardComponent_div_74_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_div_74_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r7 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r7.getStatusClass(tx_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tx_r7.status, " ");
  }
}
function AgentDashboardComponent_div_74_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_div_74_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, tx_r9.createdAt, "MMM dd, HH:mm"), " ");
  }
}
function AgentDashboardComponent_div_74_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 50);
  }
}
function AgentDashboardComponent_div_74_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 51);
  }
}
function AgentDashboardComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "table", 32);
    \u0275\u0275elementContainerStart(2, 33);
    \u0275\u0275template(3, AgentDashboardComponent_div_74_th_3_Template, 2, 0, "th", 34)(4, AgentDashboardComponent_div_74_td_4_Template, 3, 1, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 36);
    \u0275\u0275template(6, AgentDashboardComponent_div_74_th_6_Template, 2, 0, "th", 34)(7, AgentDashboardComponent_div_74_td_7_Template, 2, 1, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 37);
    \u0275\u0275template(9, AgentDashboardComponent_div_74_th_9_Template, 2, 0, "th", 34)(10, AgentDashboardComponent_div_74_td_10_Template, 2, 2, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 38);
    \u0275\u0275template(12, AgentDashboardComponent_div_74_th_12_Template, 2, 0, "th", 34)(13, AgentDashboardComponent_div_74_td_13_Template, 3, 5, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 39);
    \u0275\u0275template(15, AgentDashboardComponent_div_74_th_15_Template, 2, 0, "th", 34)(16, AgentDashboardComponent_div_74_td_16_Template, 3, 5, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 40);
    \u0275\u0275template(18, AgentDashboardComponent_div_74_th_18_Template, 2, 0, "th", 34)(19, AgentDashboardComponent_div_74_td_19_Template, 4, 4, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 41);
    \u0275\u0275template(21, AgentDashboardComponent_div_74_th_21_Template, 2, 0, "th", 34)(22, AgentDashboardComponent_div_74_td_22_Template, 3, 2, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(23, 42);
    \u0275\u0275template(24, AgentDashboardComponent_div_74_th_24_Template, 2, 0, "th", 34)(25, AgentDashboardComponent_div_74_td_25_Template, 3, 4, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(26, AgentDashboardComponent_div_74_tr_26_Template, 1, 0, "tr", 43)(27, AgentDashboardComponent_div_74_tr_27_Template, 1, 0, "tr", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r7.recentTransactions);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r7.transactionColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r7.transactionColumns);
  }
}
var AgentDashboardComponent = class _AgentDashboardComponent {
  get totalCommission() {
    return this.transactions.filter((tx) => tx.status !== "Cancelled" && tx.status !== "Failed").reduce((sum, tx) => sum + (tx.agentCommission || 0), 0);
  }
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
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
  }
  ngOnInit() {
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
  getStatusClass(status) {
    switch (status) {
      case "Completed":
        return "status-completed";
      case "Pending":
        return "status-pending";
      case "Approved":
        return "status-processing";
      case "Cancelled":
      case "Failed":
        return "status-failed";
      default:
        return "status-default";
    }
  }
  static {
    this.\u0275fac = function AgentDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentDashboardComponent, selectors: [["app-agent-dashboard"]], decls: 75, vars: 22, consts: [[1, "agent-dashboard"], [1, "page-title"], ["class", "loading-container", 4, "ngIf"], [1, "stat-cards-grid"], ["appearance", "outlined", 1, "stat-card", "stat-card-blue"], [1, "stat-card-inner"], [1, "stat-card-text"], [1, "stat-label"], [1, "stat-value"], [1, "stat-icon", "stat-icon-blue"], ["appearance", "outlined", 1, "stat-card", "stat-card-orange"], [1, "stat-icon", "stat-icon-orange"], ["appearance", "outlined", 1, "stat-card", "stat-card-green"], [1, "stat-value", "stat-value-green"], [1, "stat-icon", "stat-icon-green"], ["appearance", "outlined", 1, "stat-card", "stat-card-teal"], [1, "stat-value", "stat-value-teal"], [1, "stat-icon", "stat-icon-teal"], ["appearance", "outlined", 1, "stat-card", "stat-card-purple"], [1, "stat-icon", "stat-icon-purple"], [1, "bottom-grid"], ["appearance", "outlined", 1, "quick-actions-card"], [1, "section-title"], ["mat-flat-button", "", "color", "primary", "routerLink", "/agent/send", 1, "send-money-btn"], ["appearance", "outlined", 1, "recent-transactions-card"], ["class", "empty-text", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "loading-container"], ["diameter", "48"], ["diameter", "32"], [1, "empty-text"], [1, "table-responsive"], ["mat-table", "", 1, "transactions-table", 3, "dataSource"], ["matColumnDef", "referenceNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sender"], ["matColumnDef", "receiver"], ["matColumnDef", "sendAmount"], ["matColumnDef", "receiveAmount"], ["matColumnDef", "commission"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "mono-text"], [1, "commission-text"], [1, "status-chip", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", ""]], template: function AgentDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Agent Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, AgentDashboardComponent_div_3_Template, 2, 0, "div", 2);
        \u0275\u0275elementStart(4, "div", 3)(5, "mat-card", 4)(6, "mat-card-content")(7, "div", 5)(8, "div", 6)(9, "span", 7);
        \u0275\u0275text(10, "Credit Limit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 8);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "mat-icon", 9);
        \u0275\u0275text(15, "account_balance_wallet");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(16, "mat-card", 10)(17, "mat-card-content")(18, "div", 5)(19, "div", 6)(20, "span", 7);
        \u0275\u0275text(21, "Used Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 8);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "mat-icon", 11);
        \u0275\u0275text(26, "trending_down");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-card", 12)(28, "mat-card-content")(29, "div", 5)(30, "div", 6)(31, "span", 7);
        \u0275\u0275text(32, "Available Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 13);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "mat-icon", 14);
        \u0275\u0275text(37, "savings");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "mat-card", 15)(39, "mat-card-content")(40, "div", 5)(41, "div", 6)(42, "span", 7);
        \u0275\u0275text(43, "Total Service Charge");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 16);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "mat-icon", 17);
        \u0275\u0275text(48, "paid");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "mat-card", 18)(50, "mat-card-content")(51, "div", 5)(52, "div", 6)(53, "span", 7);
        \u0275\u0275text(54, "Total Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 8);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "mat-icon", 19);
        \u0275\u0275text(58, "receipt_long");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(59, "div", 20)(60, "mat-card", 21)(61, "mat-card-content")(62, "h3", 22);
        \u0275\u0275text(63);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "a", 23)(65, "mat-icon");
        \u0275\u0275text(66, "send");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " Send Money Now ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "mat-card", 24)(69, "mat-card-content")(70, "h3", 22);
        \u0275\u0275text(71, "Recent Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275template(72, AgentDashboardComponent_div_72_Template, 2, 0, "div", 2)(73, AgentDashboardComponent_div_73_Template, 2, 0, "div", 25)(74, AgentDashboardComponent_div_74_Template, 28, 3, "div", 26);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 10, ctx.balance.creditLimit, "1.2-2"));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 13, ctx.balance.currentBalance, "1.2-2"));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 16, ctx.balance.availableBalance, "1.2-2"));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 19, ctx.totalCommission, "1.2-2"));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.transactions.length);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.balance.businessName);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.recentTransactions.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.recentTransactions.length > 0);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, MatCardModule, MatCard, MatCardContent, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatIconModule, MatIcon, MatButtonModule, MatAnchor, MatProgressSpinnerModule, MatProgressSpinner, MatChipsModule], styles: ['\n\n.agent-dashboard[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.error-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.875rem;\n}\n.error-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stat-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12) !important;\n  transform: translateY(-2px);\n}\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.stat-card-blue[_ngcontent-%COMP%] {\n  border-left-color: #1976d2 !important;\n}\n.stat-card-orange[_ngcontent-%COMP%] {\n  border-left-color: #ed6c02 !important;\n}\n.stat-card-green[_ngcontent-%COMP%] {\n  border-left-color: #2e7d32 !important;\n}\n.stat-card-teal[_ngcontent-%COMP%] {\n  border-left-color: #00897b !important;\n}\n.stat-card-purple[_ngcontent-%COMP%] {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-card-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.2;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-value-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-value-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n.stat-icon-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-icon-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-icon-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-icon-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-icon-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 24px;\n}\n.quick-actions-card[_ngcontent-%COMP%], \n.recent-transactions-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n.quick-actions-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], \n.recent-transactions-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.send-money-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n}\n.send-money-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.transactions-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.commission-text[_ngcontent-%COMP%] {\n  color: #00897b;\n  font-weight: 600;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background-color: #ed6c02;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background-color: #0288d1;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background-color: #d32f2f;\n}\n.status-default[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n}\n.dark-mode[_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .error-alert[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .error-alert[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: rgba(220, 38, 38, 0.3);\n  color: #fca5a5;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n.dark-mode[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .quick-actions-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .quick-actions-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .recent-transactions-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .recent-transactions-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  background: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 1400px) {\n  .stat-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1200px) {\n  .stat-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .bottom-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .stat-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=agent-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-agent-dashboard", standalone: true, imports: [
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
    ], template: `<div class="agent-dashboard">
  <h2 class="page-title">Agent Dashboard</h2>

  <!-- Loading Spinner -->
  <div *ngIf="loading" class="loading-container">
    <mat-spinner diameter="48"></mat-spinner>
  </div>

  <!-- Stat Cards -->
  <div class="stat-cards-grid">
    <!-- Credit Limit -->
    <mat-card class="stat-card stat-card-blue" appearance="outlined">
      <mat-card-content>
        <div class="stat-card-inner">
          <div class="stat-card-text">
            <span class="stat-label">Credit Limit</span>
            <span class="stat-value">{{ balance.creditLimit | number:'1.2-2' }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-blue">account_balance_wallet</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>

    <!-- Used Balance -->
    <mat-card class="stat-card stat-card-orange" appearance="outlined">
      <mat-card-content>
        <div class="stat-card-inner">
          <div class="stat-card-text">
            <span class="stat-label">Used Balance</span>
            <span class="stat-value">{{ balance.currentBalance | number:'1.2-2' }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-orange">trending_down</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>

    <!-- Available Balance -->
    <mat-card class="stat-card stat-card-green" appearance="outlined">
      <mat-card-content>
        <div class="stat-card-inner">
          <div class="stat-card-text">
            <span class="stat-label">Available Balance</span>
            <span class="stat-value stat-value-green">{{ balance.availableBalance | number:'1.2-2' }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-green">savings</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>

    <!-- Total Service Charge -->
    <mat-card class="stat-card stat-card-teal" appearance="outlined">
      <mat-card-content>
        <div class="stat-card-inner">
          <div class="stat-card-text">
            <span class="stat-label">Total Service Charge</span>
            <span class="stat-value stat-value-teal">{{ totalCommission | number:'1.2-2' }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-teal">paid</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>

    <!-- Transactions -->
    <mat-card class="stat-card stat-card-purple" appearance="outlined">
      <mat-card-content>
        <div class="stat-card-inner">
          <div class="stat-card-text">
            <span class="stat-label">Total Transactions</span>
            <span class="stat-value">{{ transactions.length }}</span>
          </div>
          <mat-icon class="stat-icon stat-icon-purple">receipt_long</mat-icon>
        </div>
      </mat-card-content>
    </mat-card>
  </div>

  <!-- Bottom Grid: Quick Actions + Recent Transactions -->
  <div class="bottom-grid">
    <!-- Quick Actions -->
    <mat-card class="quick-actions-card" appearance="outlined">
      <mat-card-content>
        <h3 class="section-title">{{ balance.businessName }}</h3>
        <a mat-flat-button color="primary" routerLink="/agent/send" class="send-money-btn">
          <mat-icon>send</mat-icon>
          Send Money Now
        </a>
      </mat-card-content>
    </mat-card>

    <!-- Recent Transactions -->
    <mat-card class="recent-transactions-card" appearance="outlined">
      <mat-card-content>
        <h3 class="section-title">Recent Transactions</h3>

        <div *ngIf="loading" class="loading-container">
          <mat-spinner diameter="32"></mat-spinner>
        </div>

        <div *ngIf="!loading && recentTransactions.length === 0" class="empty-text">
          No transactions yet.
        </div>

        <div class="table-responsive" *ngIf="!loading && recentTransactions.length > 0">
          <table mat-table [dataSource]="recentTransactions" class="transactions-table">
            <!-- Reference -->
            <ng-container matColumnDef="referenceNumber">
              <th mat-header-cell *matHeaderCellDef>Reference</th>
              <td mat-cell *matCellDef="let tx">
                <span class="mono-text">{{ tx.referenceNumber }}</span>
              </td>
            </ng-container>

            <!-- Sender -->
            <ng-container matColumnDef="sender">
              <th mat-header-cell *matHeaderCellDef>Sender</th>
              <td mat-cell *matCellDef="let tx">{{ tx.senderName }}</td>
            </ng-container>

            <!-- Receiver -->
            <ng-container matColumnDef="receiver">
              <th mat-header-cell *matHeaderCellDef>Receiver</th>
              <td mat-cell *matCellDef="let tx">{{ tx.receiverName }} ({{ tx.receiverCountry }})</td>
            </ng-container>

            <!-- Send Amount -->
            <ng-container matColumnDef="sendAmount">
              <th mat-header-cell *matHeaderCellDef>Send Amount</th>
              <td mat-cell *matCellDef="let tx">
                {{ tx.sendAmount | number:'1.2-2' }} {{ tx.sendCurrency }}
              </td>
            </ng-container>

            <!-- Receive Amount -->
            <ng-container matColumnDef="receiveAmount">
              <th mat-header-cell *matHeaderCellDef>Receive Amount</th>
              <td mat-cell *matCellDef="let tx">
                {{ tx.receiveAmount | number:'1.2-2' }} {{ tx.receiveCurrency }}
              </td>
            </ng-container>

            <!-- Commission -->
            <ng-container matColumnDef="commission">
              <th mat-header-cell *matHeaderCellDef>Service Charge</th>
              <td mat-cell *matCellDef="let tx">
                <span class="commission-text">{{ tx.agentCommission | number:'1.2-2' }}</span>
              </td>
            </ng-container>

            <!-- Status -->
            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Status</th>
              <td mat-cell *matCellDef="let tx">
                <span class="status-chip" [ngClass]="getStatusClass(tx.status)">
                  {{ tx.status }}
                </span>
              </td>
            </ng-container>

            <!-- Date -->
            <ng-container matColumnDef="createdAt">
              <th mat-header-cell *matHeaderCellDef>Date</th>
              <td mat-cell *matCellDef="let tx">
                {{ tx.createdAt | date:'MMM dd, HH:mm' }}
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="transactionColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: transactionColumns;"></tr>
          </table>
        </div>
      </mat-card-content>
    </mat-card>
  </div>
</div>
`, styles: ['/* src/app/pages/agent/dashboard/agent-dashboard.component.scss */\n.agent-dashboard {\n  padding: 0;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.error-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.875rem;\n}\n.error-alert mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stat-cards-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12) !important;\n  transform: translateY(-2px);\n}\n.stat-card mat-card-content {\n  padding: 20px !important;\n}\n.stat-card-blue {\n  border-left-color: #1976d2 !important;\n}\n.stat-card-orange {\n  border-left-color: #ed6c02 !important;\n}\n.stat-card-green {\n  border-left-color: #2e7d32 !important;\n}\n.stat-card-teal {\n  border-left-color: #00897b !important;\n}\n.stat-card-purple {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-card-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-card-text {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.stat-value {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.2;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-value-green {\n  color: #2e7d32;\n}\n.stat-value-teal {\n  color: #00897b;\n}\n.stat-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n.stat-icon-blue {\n  color: #1976d2;\n}\n.stat-icon-orange {\n  color: #ed6c02;\n}\n.stat-icon-green {\n  color: #2e7d32;\n}\n.stat-icon-teal {\n  color: #00897b;\n}\n.stat-icon-purple {\n  color: #7b1fa2;\n}\n.bottom-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 24px;\n}\n.quick-actions-card,\n.recent-transactions-card {\n  border-radius: 12px !important;\n}\n.quick-actions-card mat-card-content,\n.recent-transactions-card mat-card-content {\n  padding: 24px !important;\n}\n.section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.send-money-btn {\n  width: 100%;\n  margin-top: 16px;\n}\n.send-money-btn mat-icon {\n  margin-right: 8px;\n}\n.empty-text {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.table-responsive {\n  overflow-x: auto;\n}\n.transactions-table {\n  width: 100%;\n}\n.transactions-table .mat-mdc-header-cell {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.transactions-table .mat-mdc-cell {\n  font-size: 0.875rem;\n}\n.transactions-table .mat-mdc-row:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.commission-text {\n  color: #00897b;\n  font-weight: 600;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed {\n  background-color: #2e7d32;\n}\n.status-pending {\n  background-color: #ed6c02;\n}\n.status-processing {\n  background-color: #0288d1;\n}\n.status-failed {\n  background-color: #d32f2f;\n}\n.status-default {\n  background-color: #9e9e9e;\n}\n:host-context(.dark-mode) .page-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .error-alert {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: rgba(220, 38, 38, 0.3);\n  color: #fca5a5;\n}\n:host-context(.dark-mode) .stat-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .stat-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n:host-context(.dark-mode) .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .stat-value {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .quick-actions-card,\n:host-context(.dark-mode) .recent-transactions-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .section-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .empty-text {\n  color: #64748b;\n}\n:host-context(.dark-mode) .transactions-table .mat-mdc-header-cell {\n  color: #94a3b8;\n  background: #334155;\n}\n:host-context(.dark-mode) .transactions-table .mat-mdc-row:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 1400px) {\n  .stat-cards-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1200px) {\n  .stat-cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .bottom-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .stat-cards-grid {\n    grid-template-columns: 1fr;\n  }\n  .stat-value {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=agent-dashboard.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentDashboardComponent, { className: "AgentDashboardComponent", filePath: "src/app/pages/agent/dashboard/agent-dashboard.component.ts", lineNumber: 34 });
})();
export {
  AgentDashboardComponent
};
//# sourceMappingURL=chunk-HHPUSQXB.js.map
