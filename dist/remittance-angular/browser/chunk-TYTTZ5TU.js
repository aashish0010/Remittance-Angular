import {
  RouterLink,
  RouterModule
} from "./chunk-FTNGEOQD.js";
import {
  NotificationService
} from "./chunk-U44UDHMQ.js";
import "./chunk-VTD77X6G.js";
import {
  ApiService
} from "./chunk-2NPUZHRJ.js";
import {
  AuthStateService
} from "./chunk-MP5DRVCF.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-XQC2OG7J.js";

// src/app/pages/agent/dashboard/agent-dashboard.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function AgentDashboardComponent_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "div", 15)(3, "div", 16);
    \u0275\u0275elementEnd()();
  }
}
function AgentDashboardComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275template(2, AgentDashboardComponent_ng_container_6_div_2_Template, 4, 0, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7);
    \u0275\u0275element(5, "div", 8)(6, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10);
    \u0275\u0275element(8, "div", 11)(9, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function AgentDashboardComponent_ng_container_7_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, " No transactions yet. ");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_ng_container_7_div_73_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 57)(1, "td", 58)(2, "span", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 60);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 60);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 58)(15, "span", 61);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 58)(19, "span", 62);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 63);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r1.referenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r1.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", tx_r1.receiverName, " (", tx_r1.receiverCountry, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(10, 12, tx_r1.sendAmount, "1.2-2"), " ", tx_r1.sendCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 15, tx_r1.receiveAmount, "1.2-2"), " ", tx_r1.receiveCurrency, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 18, tx_r1.agentCommission, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(tx_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tx_r1.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 21, tx_r1.createdAt, "MMM dd, HH:mm"));
  }
}
function AgentDashboardComponent_ng_container_7_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "table", 53)(2, "thead")(3, "tr", 54)(4, "th", 55);
    \u0275\u0275text(5, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 55);
    \u0275\u0275text(7, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 55);
    \u0275\u0275text(9, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 55);
    \u0275\u0275text(11, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 55);
    \u0275\u0275text(13, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 55);
    \u0275\u0275text(15, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 55);
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 55);
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, AgentDashboardComponent_ng_container_7_div_73_tr_21_Template, 24, 24, "tr", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.recentTransactions);
  }
}
function AgentDashboardComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "div", 20)(5, "p", 21);
    \u0275\u0275text(6, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 22);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 24);
    \u0275\u0275element(12, "path", 25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 26)(14, "div", 19)(15, "div", 20)(16, "p", 21);
    \u0275\u0275text(17, "Used Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 22);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 24);
    \u0275\u0275element(23, "path", 28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 29)(25, "div", 19)(26, "div", 20)(27, "p", 21);
    \u0275\u0275text(28, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 30);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 24);
    \u0275\u0275element(34, "path", 32);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "div", 33)(36, "div", 19)(37, "div", 20)(38, "p", 21);
    \u0275\u0275text(39, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 34);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 24);
    \u0275\u0275element(45, "path", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "div", 36)(47, "div", 19)(48, "div", 20)(49, "p", 21);
    \u0275\u0275text(50, "Total Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p", 22);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 24);
    \u0275\u0275element(55, "path", 38);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "div", 39)(57, "div", 40)(58, "h3", 41);
    \u0275\u0275text(59, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 42)(61, "a", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 44);
    \u0275\u0275element(63, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Send Money Now ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "a", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 44);
    \u0275\u0275element(67, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " View All Transactions ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(69, "div", 48)(70, "h3", 41);
    \u0275\u0275text(71, "Recent Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(72, AgentDashboardComponent_ng_container_7_div_72_Template, 2, 0, "div", 49)(73, AgentDashboardComponent_ng_container_7_div_73_Template, 22, 1, "div", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 7, ctx_r1.balance.creditLimit, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 10, ctx_r1.balance.currentBalance, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 13, ctx_r1.balance.availableBalance, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 16, ctx_r1.totalCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.transactions.length);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx_r1.recentTransactions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.recentTransactions.length > 0);
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
        return "bg-success-100 text-success-700";
      case "Pending":
        return "bg-warning-100 text-warning-700";
      case "Approved":
      case "Processing":
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
      return new (__ngFactoryType__ || _AgentDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentDashboardComponent, selectors: [["app-agent-dashboard"]], decls: 8, vars: 3, consts: [[1, "space-y-6"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-50"], [1, "mt-1", "text-sm", "text-surface-500", "dark:text-surface-400"], [4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-5", "gap-4"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "animate-pulse"], [1, "h-4", "w-32", "rounded", "bg-surface-200", "dark:bg-surface-700", "mb-4"], [1, "h-10", "w-full", "rounded", "bg-surface-200", "dark:bg-surface-700"], [1, "lg:col-span-2", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "animate-pulse"], [1, "h-4", "w-40", "rounded", "bg-surface-200", "dark:bg-surface-700", "mb-4"], [1, "h-40", "rounded-xl", "bg-surface-200", "dark:bg-surface-700"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5"], [1, "space-y-3", "animate-pulse"], [1, "h-3", "w-24", "rounded", "bg-surface-200", "dark:bg-surface-700"], [1, "h-8", "w-20", "rounded", "bg-surface-200", "dark:bg-surface-700"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-5", "gap-4", "animate-fade-in"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5", "border-l-4", "!border-l-brand-600", "shadow-soft", "hover:shadow-elevated", "transition-all", "duration-200", "hover:-translate-y-0.5"], [1, "flex", "items-center", "justify-between"], [1, "space-y-1"], [1, "text-sm", "font-medium", "text-surface-500", "dark:text-surface-400"], [1, "text-3xl", "font-bold", "text-surface-900", "dark:text-surface-50"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-brand-50", "dark:bg-brand-950", "text-brand-600", "dark:text-brand-400"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5", "border-l-4", "!border-l-warning-600", "shadow-soft", "hover:shadow-elevated", "transition-all", "duration-200", "hover:-translate-y-0.5"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-warning-50", "dark:bg-warning-700/20", "text-warning-600", "dark:text-warning-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5", "border-l-4", "!border-l-success-600", "shadow-soft", "hover:shadow-elevated", "transition-all", "duration-200", "hover:-translate-y-0.5"], [1, "text-3xl", "font-bold", "text-success-600", "dark:text-success-400"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-success-50", "dark:bg-success-700/20", "text-success-600", "dark:text-success-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5", "border-l-4", "!border-l-brand-500", "shadow-soft", "hover:shadow-elevated", "transition-all", "duration-200", "hover:-translate-y-0.5"], [1, "text-3xl", "font-bold", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5", "border-l-4", "!border-l-danger-600", "shadow-soft", "hover:shadow-elevated", "transition-all", "duration-200", "hover:-translate-y-0.5"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-danger-50", "dark:bg-danger-700/20", "text-danger-600", "dark:text-danger-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6", "animate-slide-up"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-50", "mb-4"], [1, "space-y-2"], ["routerLink", "/agent/send", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-xl", "text-sm", "font-medium", "text-white", "bg-brand-600", "hover:bg-brand-700", "dark:bg-brand-600", "dark:hover:bg-brand-500", "transition-colors", "no-underline", "shadow-soft"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"], ["routerLink", "/agent/transactions", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-xl", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "bg-surface-50", "dark:bg-surface-700", "hover:bg-surface-100", "dark:hover:bg-surface-600", "transition-colors", "no-underline"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"], [1, "lg:col-span-2", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], ["class", "text-sm text-surface-500 dark:text-surface-400 py-8 text-center", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "py-8", "text-center"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-surface-200", "dark:border-surface-700"], [1, "px-3", "py-3", "text-left", "text-xs", "font-semibold", "text-surface-500", "dark:text-surface-400", "uppercase", "tracking-wider", "bg-surface-50", "dark:bg-surface-800/50"], ["class", "border-b border-surface-100 dark:border-surface-700/50\n                         hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors", 4, "ngFor", "ngForOf"], [1, "border-b", "border-surface-100", "dark:border-surface-700/50", "hover:bg-surface-50", "dark:hover:bg-surface-700/30", "transition-colors"], [1, "px-3", "py-3", "whitespace-nowrap"], [1, "font-mono", "text-xs", "text-surface-700", "dark:text-surface-300"], [1, "px-3", "py-3", "whitespace-nowrap", "text-surface-700", "dark:text-surface-300"], [1, "font-semibold", "text-brand-600", "dark:text-brand-400"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "px-3", "py-3", "whitespace-nowrap", "text-surface-500", "dark:text-surface-400"]], template: function AgentDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
        \u0275\u0275text(3, "Agent Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, AgentDashboardComponent_ng_container_6_Template, 10, 2, "ng-container", 3)(7, AgentDashboardComponent_ng_container_7_Template, 74, 19, "ng-container", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.balance.businessName);
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
    ], template: `<!-- Agent Dashboard -->
<div class="space-y-6">

  <!-- Page Header -->
  <div>
    <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-50">Agent Dashboard</h2>
    <p class="mt-1 text-sm text-surface-500 dark:text-surface-400">{{ balance.businessName }}</p>
  </div>

  <!-- Loading Skeleton -->
  <ng-container *ngIf="loading">
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
      <div *ngFor="let i of [1,2,3,4,5]"
           class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5">
        <div class="space-y-3 animate-pulse">
          <div class="h-3 w-24 rounded bg-surface-200 dark:bg-surface-700"></div>
          <div class="h-8 w-20 rounded bg-surface-200 dark:bg-surface-700"></div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 animate-pulse">
        <div class="h-4 w-32 rounded bg-surface-200 dark:bg-surface-700 mb-4"></div>
        <div class="h-10 w-full rounded bg-surface-200 dark:bg-surface-700"></div>
      </div>
      <div class="lg:col-span-2 rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 animate-pulse">
        <div class="h-4 w-40 rounded bg-surface-200 dark:bg-surface-700 mb-4"></div>
        <div class="h-40 rounded-xl bg-surface-200 dark:bg-surface-700"></div>
      </div>
    </div>
  </ng-container>

  <ng-container *ngIf="!loading">

    <!-- Stat Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 animate-fade-in">

      <!-- Credit Limit -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5
                  border-l-4 !border-l-brand-600
                  shadow-soft hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5">
        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <p class="text-sm font-medium text-surface-500 dark:text-surface-400">Credit Limit</p>
            <p class="text-3xl font-bold text-surface-900 dark:text-surface-50">{{ balance.creditLimit | number:'1.2-2' }}</p>
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Used Balance -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5
                  border-l-4 !border-l-warning-600
                  shadow-soft hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5">
        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <p class="text-sm font-medium text-surface-500 dark:text-surface-400">Used Balance</p>
            <p class="text-3xl font-bold text-surface-900 dark:text-surface-50">{{ balance.currentBalance | number:'1.2-2' }}</p>
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-warning-50 dark:bg-warning-700/20 text-warning-600 dark:text-warning-400">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Available Balance -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5
                  border-l-4 !border-l-success-600
                  shadow-soft hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5">
        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <p class="text-sm font-medium text-surface-500 dark:text-surface-400">Available Balance</p>
            <p class="text-3xl font-bold text-success-600 dark:text-success-400">{{ balance.availableBalance | number:'1.2-2' }}</p>
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-success-50 dark:bg-success-700/20 text-success-600 dark:text-success-400">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Service Charge -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5
                  border-l-4 !border-l-brand-500
                  shadow-soft hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5">
        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <p class="text-sm font-medium text-surface-500 dark:text-surface-400">Total Service Charge</p>
            <p class="text-3xl font-bold text-brand-600 dark:text-brand-400">{{ totalCommission | number:'1.2-2' }}</p>
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Transactions -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5
                  border-l-4 !border-l-danger-600
                  shadow-soft hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5">
        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <p class="text-sm font-medium text-surface-500 dark:text-surface-400">Total Transactions</p>
            <p class="text-3xl font-bold text-surface-900 dark:text-surface-50">{{ transactions.length }}</p>
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-danger-50 dark:bg-danger-700/20 text-danger-600 dark:text-danger-400">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"/>
            </svg>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom Grid: Quick Actions + Recent Transactions -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up">

      <!-- Quick Actions (1/3) -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-4">Quick Actions</h3>
        <div class="space-y-2">
          <a routerLink="/agent/send"
             class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                    text-white bg-brand-600 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-500
                    transition-colors no-underline shadow-soft">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
            </svg>
            Send Money Now
          </a>
          <a routerLink="/agent/transactions"
             class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                    text-surface-700 dark:text-surface-300 bg-surface-50 dark:bg-surface-700
                    hover:bg-surface-100 dark:hover:bg-surface-600 transition-colors no-underline">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
            </svg>
            View All Transactions
          </a>
        </div>
      </div>

      <!-- Recent Transactions (2/3) -->
      <div class="lg:col-span-2 rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-4">Recent Transactions</h3>

        <div *ngIf="recentTransactions.length === 0" class="text-sm text-surface-500 dark:text-surface-400 py-8 text-center">
          No transactions yet.
        </div>

        <div *ngIf="recentTransactions.length > 0" class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-surface-200 dark:border-surface-700">
                <th class="px-3 py-3 text-left text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider bg-surface-50 dark:bg-surface-800/50">Reference</th>
                <th class="px-3 py-3 text-left text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider bg-surface-50 dark:bg-surface-800/50">Sender</th>
                <th class="px-3 py-3 text-left text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider bg-surface-50 dark:bg-surface-800/50">Receiver</th>
                <th class="px-3 py-3 text-left text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider bg-surface-50 dark:bg-surface-800/50">Send Amount</th>
                <th class="px-3 py-3 text-left text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider bg-surface-50 dark:bg-surface-800/50">Receive Amount</th>
                <th class="px-3 py-3 text-left text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider bg-surface-50 dark:bg-surface-800/50">Service Charge</th>
                <th class="px-3 py-3 text-left text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider bg-surface-50 dark:bg-surface-800/50">Status</th>
                <th class="px-3 py-3 text-left text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider bg-surface-50 dark:bg-surface-800/50">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let tx of recentTransactions"
                  class="border-b border-surface-100 dark:border-surface-700/50
                         hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors">
                <td class="px-3 py-3 whitespace-nowrap">
                  <span class="font-mono text-xs text-surface-700 dark:text-surface-300">{{ tx.referenceNumber }}</span>
                </td>
                <td class="px-3 py-3 whitespace-nowrap text-surface-700 dark:text-surface-300">{{ tx.senderName }}</td>
                <td class="px-3 py-3 whitespace-nowrap text-surface-700 dark:text-surface-300">{{ tx.receiverName }} ({{ tx.receiverCountry }})</td>
                <td class="px-3 py-3 whitespace-nowrap text-surface-700 dark:text-surface-300">{{ tx.sendAmount | number:'1.2-2' }} {{ tx.sendCurrency }}</td>
                <td class="px-3 py-3 whitespace-nowrap text-surface-700 dark:text-surface-300">{{ tx.receiveAmount | number:'1.2-2' }} {{ tx.receiveCurrency }}</td>
                <td class="px-3 py-3 whitespace-nowrap">
                  <span class="font-semibold text-brand-600 dark:text-brand-400">{{ tx.agentCommission | number:'1.2-2' }}</span>
                </td>
                <td class="px-3 py-3 whitespace-nowrap">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
                        [ngClass]="getStatusClass(tx.status)">
                    {{ tx.status }}
                  </span>
                </td>
                <td class="px-3 py-3 whitespace-nowrap text-surface-500 dark:text-surface-400">{{ tx.createdAt | date:'MMM dd, HH:mm' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

  </ng-container>
</div>
`, styles: ["/* src/app/pages/agent/dashboard/agent-dashboard.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=agent-dashboard.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentDashboardComponent, { className: "AgentDashboardComponent", filePath: "src/app/pages/agent/dashboard/agent-dashboard.component.ts", lineNumber: 22 });
})();
export {
  AgentDashboardComponent
};
//# sourceMappingURL=chunk-TYTTZ5TU.js.map
