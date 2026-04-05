import {
  AppSettingsService
} from "./chunk-3AILC626.js";
import {
  SeoService
} from "./chunk-6TDC4W4Q.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-ZQKQC2T6.js";
import {
  NotificationService
} from "./chunk-3AICMGEY.js";
import "./chunk-TLG473HR.js";
import {
  ApiService
} from "./chunk-JPFLOAIK.js";
import {
  AuthStateService
} from "./chunk-LDWTK5YJ.js";
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
} from "./chunk-EU7HC72Q.js";
import "./chunk-S5KMCARS.js";

// src/app/pages/agent/dashboard/agent-dashboard.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function AgentDashboardComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Send Money ");
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21);
    \u0275\u0275element(3, "div", 22)(4, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 24);
    \u0275\u0275elementEnd()();
  }
}
function AgentDashboardComponent_ng_container_8_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 26)(2, "div", 22)(3, "div", 27);
    \u0275\u0275elementEnd();
  }
}
function AgentDashboardComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275template(2, AgentDashboardComponent_ng_container_8_div_2_Template, 6, 0, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12);
    \u0275\u0275element(5, "div", 13);
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275element(7, "div", 15)(8, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275element(10, "div", 17);
    \u0275\u0275template(11, AgentDashboardComponent_ng_container_8_div_11_Template, 4, 0, "div", 18);
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
function AgentDashboardComponent_ng_container_9_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "p", 32);
    \u0275\u0275text(4, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 67);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 35);
    \u0275\u0275element(10, "path", 68);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 1, ctx_r0.totalCommission, "1.2-2"));
  }
}
function AgentDashboardComponent_ng_container_9_a_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 69)(1, "div", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 7);
    \u0275\u0275element(3, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Send Money Now");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 71);
    \u0275\u0275element(7, "path", 60);
    \u0275\u0275elementEnd()();
  }
}
function AgentDashboardComponent_ng_container_9_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 74);
    \u0275\u0275element(3, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 75);
    \u0275\u0275text(5, "No transactions yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 76);
    \u0275\u0275text(7, "Your recent transfers will appear here");
    \u0275\u0275elementEnd()();
  }
}
function AgentDashboardComponent_ng_container_9_div_70_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 83)(1, "td", 84)(2, "span", 85);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 86)(5, "div", 87)(6, "span", 88);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 89);
    \u0275\u0275element(9, "path", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 91);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "td", 84)(13, "div", 92)(14, "span", 93);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 94);
    \u0275\u0275text(18, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 95);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td", 84)(23, "span", 96);
    \u0275\u0275element(24, "span", 97);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 98);
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
function AgentDashboardComponent_ng_container_9_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "table", 78)(2, "thead")(3, "tr", 79)(4, "th", 80);
    \u0275\u0275text(5, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 80);
    \u0275\u0275text(7, "Sender \u2192 Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 80);
    \u0275\u0275text(9, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 80);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 80);
    \u0275\u0275text(13, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody", 81);
    \u0275\u0275template(15, AgentDashboardComponent_ng_container_9_div_70_tr_15_Template, 29, 19, "tr", 82);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.recentTransactions);
  }
}
function AgentDashboardComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 28)(2, "div", 29)(3, "div", 30)(4, "div", 31)(5, "p", 32);
    \u0275\u0275text(6, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 33);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 35);
    \u0275\u0275element(12, "path", 36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 29)(14, "div", 30)(15, "div", 31)(16, "p", 32);
    \u0275\u0275text(17, "Used Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 37);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 35);
    \u0275\u0275element(23, "path", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 40)(25, "div", 41);
    \u0275\u0275element(26, "div", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 29)(28, "div", 30)(29, "div", 31)(30, "p", 32);
    \u0275\u0275text(31, "Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 43);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 35);
    \u0275\u0275element(37, "path", 45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(38, AgentDashboardComponent_ng_container_9_div_38_Template, 11, 4, "div", 46);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 29)(40, "div", 30)(41, "div", 31)(42, "p", 32);
    \u0275\u0275text(43, "Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 47);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 35);
    \u0275\u0275element(48, "path", 49);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "div", 50)(50, "div", 51)(51, "h3", 52);
    \u0275\u0275text(52, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 53);
    \u0275\u0275template(54, AgentDashboardComponent_ng_container_9_a_54_Template, 8, 0, "a", 54);
    \u0275\u0275elementStart(55, "a", 55)(56, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(57, "svg", 57);
    \u0275\u0275element(58, "path", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "View All Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(61, "svg", 59);
    \u0275\u0275element(62, "path", 60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(63, "div", 61)(64, "div", 62)(65, "h3", 63);
    \u0275\u0275text(66, "Recent Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "a", 64);
    \u0275\u0275text(68, " View all \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, AgentDashboardComponent_ng_container_9_div_69_Template, 8, 0, "div", 65)(70, AgentDashboardComponent_ng_container_9_div_70_Template, 16, 1, "div", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 10, ctx_r0.balance.creditLimit, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 13, ctx_r0.balance.currentBalance, "1.2-2"));
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("width", ctx_r0.balance.creditLimit > 0 ? ctx_r0.balance.currentBalance / ctx_r0.balance.creditLimit * 100 : 0, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 16, ctx_r0.balance.availableBalance, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.appSettings.agentCommissionEnabled);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.transactions.length);
    \u0275\u0275advance(9);
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
      return new (__ngFactoryType__ || _AgentDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(AppSettingsService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentDashboardComponent, selectors: [["app-agent-dashboard"]], decls: 10, vars: 4, consts: [[1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "tracking-tight", "text-surface-900", "dark:text-surface-50"], [1, "mt-0.5", "text-sm", "text-surface-500", "dark:text-surface-400"], ["routerLink", "/agent/send", "class", "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm transition-all duration-150 active:scale-95", 4, "ngIf"], [4, "ngIf"], ["routerLink", "/agent/send", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-brand-600", "hover:bg-brand-700", "text-white", "text-sm", "font-semibold", "shadow-sm", "transition-all", "duration-150", "active:scale-95"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-5", "gap-4"], ["class", "rounded-2xl border border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 p-5 shadow-sm animate-pulse", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-5"], [1, "rounded-2xl", "border", "border-surface-100", "dark:border-surface-800", "bg-white", "dark:bg-surface-900", "p-6", "shadow-sm", "animate-pulse"], [1, "h-4", "w-28", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "mb-5"], [1, "space-y-3"], [1, "h-11", "w-full", "rounded-xl", "bg-surface-100", "dark:bg-surface-800"], [1, "lg:col-span-2", "rounded-2xl", "border", "border-surface-100", "dark:border-surface-800", "bg-white", "dark:bg-surface-900", "p-6", "shadow-sm", "animate-pulse"], [1, "h-4", "w-36", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "mb-5"], ["class", "flex items-center gap-4 py-3 border-b border-surface-50 dark:border-surface-800", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "border", "border-surface-100", "dark:border-surface-800", "bg-white", "dark:bg-surface-900", "p-5", "shadow-sm", "animate-pulse"], [1, "flex", "items-start", "justify-between"], [1, "space-y-3", "flex-1"], [1, "h-3", "w-24", "rounded-full", "bg-surface-100", "dark:bg-surface-800"], [1, "h-7", "w-20", "rounded-lg", "bg-surface-100", "dark:bg-surface-800"], [1, "h-11", "w-11", "rounded-xl", "bg-surface-100", "dark:bg-surface-800", "shrink-0"], [1, "flex", "items-center", "gap-4", "py-3", "border-b", "border-surface-50", "dark:border-surface-800"], [1, "h-3", "w-20", "rounded-full", "bg-surface-100", "dark:bg-surface-800"], [1, "h-3", "w-20", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "ml-auto"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-5", "gap-4", "animate-fade-in"], [1, "group", "rounded-2xl", "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "p-5", "shadow-sm", "hover:shadow-md", "transition-all", "duration-200", "hover:-translate-y-0.5"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "space-y-1", "min-w-0"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500"], [1, "text-2xl", "font-bold", "tabular-nums", "text-surface-900", "dark:text-surface-50", "truncate"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-brand-50", "dark:bg-brand-950/50", "text-brand-600", "dark:text-brand-400", "shrink-0", "group-hover:scale-110", "transition-transform", "duration-200"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"], [1, "text-2xl", "font-bold", "tabular-nums", "text-warning-600", "dark:text-warning-400", "truncate"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-warning-50", "dark:bg-warning-900/20", "text-warning-600", "dark:text-warning-400", "shrink-0", "group-hover:scale-110", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"], [1, "mt-3"], [1, "h-1.5", "w-full", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "overflow-hidden"], [1, "h-full", "rounded-full", "bg-warning-500", "transition-all", "duration-500"], [1, "text-2xl", "font-bold", "tabular-nums", "text-success-600", "dark:text-success-400", "truncate"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-success-50", "dark:bg-success-900/20", "text-success-600", "dark:text-success-400", "shrink-0", "group-hover:scale-110", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"], ["class", "group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5", 4, "ngIf"], [1, "text-2xl", "font-bold", "tabular-nums", "text-surface-900", "dark:text-surface-50"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-surface-100", "dark:bg-surface-800", "text-surface-600", "dark:text-surface-400", "shrink-0", "group-hover:scale-110", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-5", "animate-slide-up"], [1, "rounded-2xl", "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "p-6", "shadow-sm"], [1, "text-sm", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "mb-4"], [1, "space-y-2"], ["routerLink", "/agent/send", "class", "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold\n                    text-white bg-brand-600 hover:bg-brand-700\n                    transition-all duration-150 no-underline shadow-sm active:scale-[0.98]", 4, "ngIf"], ["routerLink", "/agent/transactions", 1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "text-sm", "font-semibold", "text-surface-700", "dark:text-surface-300", "bg-surface-50", "dark:bg-surface-800", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition-all", "duration-150", "no-underline", "active:scale-[0.98]"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-surface-200", "dark:bg-surface-700", "shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "text-surface-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "ml-auto", "opacity-40"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m8.25 4.5 7.5 7.5-7.5 7.5"], [1, "lg:col-span-2", "rounded-2xl", "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "shadow-sm", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-800"], [1, "text-sm", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500"], ["routerLink", "/agent/transactions", 1, "text-xs", "font-semibold", "text-brand-600", "dark:text-brand-400", "hover:text-brand-700", "dark:hover:text-brand-300", "transition-colors"], ["class", "flex flex-col items-center justify-center py-14 px-6 text-center", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "text-2xl", "font-bold", "tabular-nums", "text-brand-600", "dark:text-brand-400", "truncate"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["routerLink", "/agent/send", 1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "text-sm", "font-semibold", "text-white", "bg-brand-600", "hover:bg-brand-700", "transition-all", "duration-150", "no-underline", "shadow-sm", "active:scale-[0.98]"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-white/20", "shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "ml-auto", "opacity-70"], [1, "flex", "flex-col", "items-center", "justify-center", "py-14", "px-6", "text-center"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-surface-100", "dark:bg-surface-800", "mb-4"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "h-7", "w-7", "text-surface-400"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "text-xs", "text-surface-400", "dark:text-surface-500", "mt-1"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "bg-surface-50/70", "dark:bg-surface-800/50"], [1, "px-5", "py-3", "text-left", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500"], [1, "divide-y", "divide-surface-50", "dark:divide-surface-800"], ["class", "hover:bg-surface-50/70 dark:hover:bg-surface-800/40 transition-colors duration-100", 4, "ngFor", "ngForOf"], [1, "hover:bg-surface-50/70", "dark:hover:bg-surface-800/40", "transition-colors", "duration-100"], [1, "px-5", "py-3.5", "whitespace-nowrap"], [1, "font-mono", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "bg-surface-100", "dark:bg-surface-800", "px-2", "py-0.5", "rounded-md"], [1, "px-5", "py-3.5"], [1, "flex", "items-center", "gap-1.5", "text-[13px]"], [1, "font-medium", "text-surface-800", "dark:text-surface-200", "truncate", "max-w-[80px]"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-3", "w-3", "text-surface-400", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"], [1, "text-surface-600", "dark:text-surface-400", "truncate", "max-w-[80px]"], [1, "text-[13px]"], [1, "font-semibold", "tabular-nums", "text-surface-800", "dark:text-surface-200"], [1, "text-surface-400", "dark:text-surface-500", "mx-1"], [1, "text-surface-500", "dark:text-surface-400", "tabular-nums"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-current", "opacity-80"], [1, "px-5", "py-3.5", "whitespace-nowrap", "text-xs", "tabular-nums", "text-surface-500", "dark:text-surface-400"]], template: function AgentDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, AgentDashboardComponent_a_7_Template, 4, 0, "a", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, AgentDashboardComponent_ng_container_8_Template, 12, 4, "ng-container", 5)(9, AgentDashboardComponent_ng_container_9_Template, 71, 19, "ng-container", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.balance.businessName);
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
    ], template: `<!-- Agent Dashboard -->
<div class="space-y-6">

  <!-- Page Header -->
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-50">Dashboard</h1>
      <p class="mt-0.5 text-sm text-surface-500 dark:text-surface-400">{{ balance.businessName }}</p>
    </div>
    <a *ngIf="appSettings.allowQuickSend" routerLink="/agent/send"
       class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm transition-all duration-150 active:scale-95">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
      </svg>
      Send Money
    </a>
  </div>

  <!-- \u2500\u2500\u2500 Loading Skeleton \u2500\u2500\u2500 -->
  <ng-container *ngIf="loading">
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
      <div *ngFor="let i of [1,2,3,4,5]"
           class="rounded-2xl border border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 p-5 shadow-sm animate-pulse">
        <div class="flex items-start justify-between">
          <div class="space-y-3 flex-1">
            <div class="h-3 w-24 rounded-full bg-surface-100 dark:bg-surface-800"></div>
            <div class="h-7 w-20 rounded-lg bg-surface-100 dark:bg-surface-800"></div>
          </div>
          <div class="h-11 w-11 rounded-xl bg-surface-100 dark:bg-surface-800 shrink-0"></div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div class="rounded-2xl border border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 p-6 shadow-sm animate-pulse">
        <div class="h-4 w-28 rounded-full bg-surface-100 dark:bg-surface-800 mb-5"></div>
        <div class="space-y-3">
          <div class="h-11 w-full rounded-xl bg-surface-100 dark:bg-surface-800"></div>
          <div class="h-11 w-full rounded-xl bg-surface-100 dark:bg-surface-800"></div>
        </div>
      </div>
      <div class="lg:col-span-2 rounded-2xl border border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 p-6 shadow-sm animate-pulse">
        <div class="h-4 w-36 rounded-full bg-surface-100 dark:bg-surface-800 mb-5"></div>
        <div *ngFor="let i of [1,2,3,4,5]" class="flex items-center gap-4 py-3 border-b border-surface-50 dark:border-surface-800">
          <div class="h-3 w-20 rounded-full bg-surface-100 dark:bg-surface-800"></div>
          <div class="h-3 w-24 rounded-full bg-surface-100 dark:bg-surface-800"></div>
          <div class="h-3 w-20 rounded-full bg-surface-100 dark:bg-surface-800 ml-auto"></div>
        </div>
      </div>
    </div>
  </ng-container>

  <!-- \u2500\u2500\u2500 Content \u2500\u2500\u2500 -->
  <ng-container *ngIf="!loading">

    <!-- Stat Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 animate-fade-in">

      <!-- Credit Limit -->
      <div class="group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1 min-w-0">
            <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Credit Limit</p>
            <p class="text-2xl font-bold tabular-nums text-surface-900 dark:text-surface-50 truncate">{{ balance.creditLimit | number:'1.2-2' }}</p>
          </div>
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 shrink-0 group-hover:scale-110 transition-transform duration-200">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Used Balance -->
      <div class="group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1 min-w-0">
            <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Used Balance</p>
            <p class="text-2xl font-bold tabular-nums text-warning-600 dark:text-warning-400 truncate">{{ balance.currentBalance | number:'1.2-2' }}</p>
          </div>
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-warning-50 dark:bg-warning-900/20 text-warning-600 dark:text-warning-400 shrink-0 group-hover:scale-110 transition-transform duration-200">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"/>
            </svg>
          </div>
        </div>
        <!-- Usage bar -->
        <div class="mt-3">
          <div class="h-1.5 w-full rounded-full bg-surface-100 dark:bg-surface-800 overflow-hidden">
            <div class="h-full rounded-full bg-warning-500 transition-all duration-500"
                 [style.width.%]="balance.creditLimit > 0 ? (balance.currentBalance / balance.creditLimit * 100) : 0"></div>
          </div>
        </div>
      </div>

      <!-- Available Balance -->
      <div class="group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1 min-w-0">
            <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Available</p>
            <p class="text-2xl font-bold tabular-nums text-success-600 dark:text-success-400 truncate">{{ balance.availableBalance | number:'1.2-2' }}</p>
          </div>
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-success-50 dark:bg-success-900/20 text-success-600 dark:text-success-400 shrink-0 group-hover:scale-110 transition-transform duration-200">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Service Charge -->
      <div *ngIf="appSettings.agentCommissionEnabled"
           class="group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1 min-w-0">
            <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Service Charge</p>
            <p class="text-2xl font-bold tabular-nums text-brand-600 dark:text-brand-400 truncate">{{ totalCommission | number:'1.2-2' }}</p>
          </div>
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 shrink-0 group-hover:scale-110 transition-transform duration-200">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Transactions -->
      <div class="group rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1 min-w-0">
            <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Transactions</p>
            <p class="text-2xl font-bold tabular-nums text-surface-900 dark:text-surface-50">{{ transactions.length }}</p>
          </div>
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 shrink-0 group-hover:scale-110 transition-transform duration-200">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"/>
            </svg>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 animate-slide-up">

      <!-- Quick Actions -->
      <div class="rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 p-6 shadow-sm">
        <h3 class="text-sm font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-4">Quick Actions</h3>
        <div class="space-y-2">
          <a *ngIf="appSettings.allowQuickSend" routerLink="/agent/send"
             class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold
                    text-white bg-brand-600 hover:bg-brand-700
                    transition-all duration-150 no-underline shadow-sm active:scale-[0.98]">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 shrink-0">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
              </svg>
            </div>
            <span>Send Money Now</span>
            <svg class="h-4 w-4 ml-auto opacity-70" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
            </svg>
          </a>
          <a routerLink="/agent/transactions"
             class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold
                    text-surface-700 dark:text-surface-300 bg-surface-50 dark:bg-surface-800
                    hover:bg-surface-100 dark:hover:bg-surface-700 transition-all duration-150 no-underline active:scale-[0.98]">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-200 dark:bg-surface-700 shrink-0">
              <svg class="h-4 w-4 text-surface-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
              </svg>
            </div>
            <span>View All Transactions</span>
            <svg class="h-4 w-4 ml-auto opacity-40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Recent Transactions -->
      <div class="lg:col-span-2 rounded-2xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 shadow-sm overflow-hidden">
        <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-800">
          <h3 class="text-sm font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Recent Transactions</h3>
          <a routerLink="/agent/transactions"
             class="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors">
            View all \u2192
          </a>
        </div>

        <!-- Empty state -->
        <div *ngIf="recentTransactions.length === 0" class="flex flex-col items-center justify-center py-14 px-6 text-center">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-100 dark:bg-surface-800 mb-4">
            <svg class="h-7 w-7 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"/>
            </svg>
          </div>
          <p class="text-sm font-medium text-surface-700 dark:text-surface-300">No transactions yet</p>
          <p class="text-xs text-surface-400 dark:text-surface-500 mt-1">Your recent transfers will appear here</p>
        </div>

        <!-- Table -->
        <div *ngIf="recentTransactions.length > 0" class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-surface-50/70 dark:bg-surface-800/50">
                <th class="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Reference</th>
                <th class="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Sender \u2192 Receiver</th>
                <th class="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Amount</th>
                <th class="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Status</th>
                <th class="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Date</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-50 dark:divide-surface-800">
              <tr *ngFor="let tx of recentTransactions"
                  class="hover:bg-surface-50/70 dark:hover:bg-surface-800/40 transition-colors duration-100">
                <td class="px-5 py-3.5 whitespace-nowrap">
                  <span class="font-mono text-xs font-medium text-surface-600 dark:text-surface-400 bg-surface-100 dark:bg-surface-800 px-2 py-0.5 rounded-md">{{ tx.referenceNumber }}</span>
                </td>
                <td class="px-5 py-3.5">
                  <div class="flex items-center gap-1.5 text-[13px]">
                    <span class="font-medium text-surface-800 dark:text-surface-200 truncate max-w-[80px]">{{ tx.senderName }}</span>
                    <svg class="h-3 w-3 text-surface-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </svg>
                    <span class="text-surface-600 dark:text-surface-400 truncate max-w-[80px]">{{ tx.receiverName }}</span>
                  </div>
                </td>
                <td class="px-5 py-3.5 whitespace-nowrap">
                  <div class="text-[13px]">
                    <span class="font-semibold tabular-nums text-surface-800 dark:text-surface-200">{{ tx.sendAmount | number:'1.2-2' }} {{ tx.sendCurrency }}</span>
                    <span class="text-surface-400 dark:text-surface-500 mx-1">\u2192</span>
                    <span class="text-surface-500 dark:text-surface-400 tabular-nums">{{ tx.receiveAmount | number:'1.2-2' }} {{ tx.receiveCurrency }}</span>
                  </div>
                </td>
                <td class="px-5 py-3.5 whitespace-nowrap">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                        [ngClass]="getStatusClass(tx.status)">
                    <span class="h-1.5 w-1.5 rounded-full bg-current opacity-80"></span>
                    {{ tx.status }}
                  </span>
                </td>
                <td class="px-5 py-3.5 whitespace-nowrap text-xs tabular-nums text-surface-500 dark:text-surface-400">{{ tx.createdAt | date:'MMM dd, HH:mm' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

  </ng-container>
</div>
`, styles: ["/* src/app/pages/agent/dashboard/agent-dashboard.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=agent-dashboard.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: AppSettingsService }, { type: SeoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentDashboardComponent, { className: "AgentDashboardComponent", filePath: "src/app/pages/agent/dashboard/agent-dashboard.component.ts", lineNumber: 24 });
})();
export {
  AgentDashboardComponent
};
//# sourceMappingURL=chunk-ACTMK2JV.js.map
