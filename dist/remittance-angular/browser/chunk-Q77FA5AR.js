import {
  RouterLink,
  RouterModule
} from "./chunk-KYKM2GTY.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-37IS6HQJ.js";
import {
  MatChipsModule
} from "./chunk-VUXSNQV7.js";
import "./chunk-YGDTJNE7.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-N4KLCW3D.js";
import "./chunk-RYR4NCTK.js";
import "./chunk-4ICNUTBP.js";
import "./chunk-7GR7IV7E.js";
import "./chunk-NNRSADKN.js";
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
} from "./chunk-NF2W6NXA.js";
import {
  ApiService,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-IPUKUTHA.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-SKGBRZ6H.js";
import {
  AuthStateService
} from "./chunk-T6M7P6K3.js";
import "./chunk-3TORE4W6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatAnchor,
  MatButtonModule,
  NgControlStatus,
  NgModel
} from "./chunk-5RGUSOA3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-BPDBYDBO.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf
} from "./chunk-Y4TRFXTA.js";
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7WRAX6BO.js";

// src/app/pages/agent/transactions/agent-transactions.component.ts
var _c0 = () => [5, 10, 25, 50];
function AgentTransactionsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AgentTransactionsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_19_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Reference");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_19_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r2.referenceNumber);
  }
}
function AgentTransactionsComponent_div_19_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Sender");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_19_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r3.senderName);
  }
}
function AgentTransactionsComponent_div_19_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Receiver");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_19_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r4.receiverName);
  }
}
function AgentTransactionsComponent_div_19_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Send");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_19_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, tx_r5.sendAmount, "1.2-2"), " ", tx_r5.sendCurrency, " ");
  }
}
function AgentTransactionsComponent_div_19_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Receive");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_19_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, tx_r6.receiveAmount, "1.2-2"), " ", tx_r6.receiveCurrency, " ");
  }
}
function AgentTransactionsComponent_div_19_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "My Commission");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_19_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, tx_r7.agentCommission, "1.2-2"));
  }
}
function AgentTransactionsComponent_div_19_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_19_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getStatusClass(tx_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tx_r8.status, " ");
  }
}
function AgentTransactionsComponent_div_19_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_19_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
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
function AgentTransactionsComponent_div_19_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function AgentTransactionsComponent_div_19_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function AgentTransactionsComponent_div_19_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " No transactions found. ");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "table", 17);
    \u0275\u0275elementContainerStart(2, 18);
    \u0275\u0275template(3, AgentTransactionsComponent_div_19_th_3_Template, 2, 0, "th", 19)(4, AgentTransactionsComponent_div_19_td_4_Template, 3, 1, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 21);
    \u0275\u0275template(6, AgentTransactionsComponent_div_19_th_6_Template, 2, 0, "th", 19)(7, AgentTransactionsComponent_div_19_td_7_Template, 2, 1, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 22);
    \u0275\u0275template(9, AgentTransactionsComponent_div_19_th_9_Template, 2, 0, "th", 19)(10, AgentTransactionsComponent_div_19_td_10_Template, 2, 1, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 23);
    \u0275\u0275template(12, AgentTransactionsComponent_div_19_th_12_Template, 2, 0, "th", 19)(13, AgentTransactionsComponent_div_19_td_13_Template, 3, 5, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 24);
    \u0275\u0275template(15, AgentTransactionsComponent_div_19_th_15_Template, 2, 0, "th", 19)(16, AgentTransactionsComponent_div_19_td_16_Template, 3, 5, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 25);
    \u0275\u0275template(18, AgentTransactionsComponent_div_19_th_18_Template, 2, 0, "th", 19)(19, AgentTransactionsComponent_div_19_td_19_Template, 4, 4, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 26);
    \u0275\u0275template(21, AgentTransactionsComponent_div_19_th_21_Template, 2, 0, "th", 19)(22, AgentTransactionsComponent_div_19_td_22_Template, 3, 2, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(23, 27);
    \u0275\u0275template(24, AgentTransactionsComponent_div_19_th_24_Template, 2, 0, "th", 19)(25, AgentTransactionsComponent_div_19_td_25_Template, 3, 4, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(26, AgentTransactionsComponent_div_19_tr_26_Template, 1, 0, "tr", 28)(27, AgentTransactionsComponent_div_19_tr_27_Template, 1, 0, "tr", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AgentTransactionsComponent_div_19_div_28_Template, 2, 0, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r0.pagedTransactions);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredTransactions.length === 0 && !ctx_r0.loading);
  }
}
function AgentTransactionsComponent_mat_paginator_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-paginator", 39);
    \u0275\u0275listener("page", function AgentTransactionsComponent_mat_paginator_20_Template_mat_paginator_page_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("length", ctx_r0.filteredTransactions.length)("pageSize", ctx_r0.pageSize)("pageIndex", ctx_r0.pageIndex)("pageSizeOptions", \u0275\u0275pureFunction0(4, _c0));
  }
}
var AgentTransactionsComponent = class _AgentTransactionsComponent {
  get pagedTransactions() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredTransactions.slice(start, start + this.pageSize);
  }
  constructor(api, auth) {
    this.api = api;
    this.auth = auth;
    this.transactions = [];
    this.filteredTransactions = [];
    this.loading = true;
    this.error = "";
    this.search = "";
    this.displayedColumns = [
      "referenceNumber",
      "sender",
      "receiver",
      "sendAmount",
      "receiveAmount",
      "commission",
      "status",
      "createdAt"
    ];
    this.pageSize = 10;
    this.pageIndex = 0;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadTransactions();
  }
  loadTransactions() {
    this.loading = true;
    this.error = "";
    this.api.getAgentTransactions().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.transactions = res.data;
          this.applyFilter();
        } else {
          this.transactions = [];
          this.filteredTransactions = [];
          this.error = res?.message || "Failed to load transactions.";
        }
        this.loading = false;
      },
      error: (err) => {
        this.transactions = [];
        this.filteredTransactions = [];
        this.error = `Could not connect to server: ${err.message || "Unknown error"}`;
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const term = this.search.toLowerCase().trim();
    if (!term) {
      this.filteredTransactions = [...this.transactions];
    } else {
      this.filteredTransactions = this.transactions.filter((tx) => tx.referenceNumber.toLowerCase().includes(term) || tx.senderName.toLowerCase().includes(term) || tx.receiverName.toLowerCase().includes(term));
    }
    this.pageIndex = 0;
  }
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
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
    this.\u0275fac = function AgentTransactionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentTransactionsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentTransactionsComponent, selectors: [["app-agent-transactions"]], decls: 21, vars: 5, consts: [[1, "agent-transactions"], [1, "page-title"], ["class", "error-alert", 4, "ngIf"], ["appearance", "outlined", 1, "transactions-card"], [1, "toolbar"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", 3, "ngModelChange", "ngModel"], [1, "spacer"], ["mat-flat-button", "", "color", "primary", "routerLink", "/agent/send"], ["class", "loading-container", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page", 4, "ngIf"], [1, "error-alert"], [1, "loading-container"], ["diameter", "40"], [1, "table-responsive"], ["mat-table", "", 1, "transactions-table", 3, "dataSource"], ["matColumnDef", "referenceNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sender"], ["matColumnDef", "receiver"], ["matColumnDef", "sendAmount"], ["matColumnDef", "receiveAmount"], ["matColumnDef", "commission"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-text", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "mono-text"], [1, "commission-text"], [1, "status-chip", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-text"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"]], template: function AgentTransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "My Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, AgentTransactionsComponent_div_3_Template, 5, 1, "div", 2);
        \u0275\u0275elementStart(4, "mat-card", 3)(5, "mat-card-content")(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-icon", 6);
        \u0275\u0275text(9, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-label");
        \u0275\u0275text(11, "Search transactions...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function AgentTransactionsComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AgentTransactionsComponent_Template_input_ngModelChange_12_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(13, "span", 8);
        \u0275\u0275elementStart(14, "a", 9)(15, "mat-icon");
        \u0275\u0275text(16, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " New Transaction ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, AgentTransactionsComponent_div_18_Template, 2, 0, "div", 10)(19, AgentTransactionsComponent_div_19_Template, 29, 4, "div", 11)(20, AgentTransactionsComponent_mat_paginator_20_Template, 1, 5, "mat-paginator", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredTransactions.length > 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgIf,
      DecimalPipe,
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterModule,
      RouterLink,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatAnchor,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatChipsModule,
      MatPaginatorModule,
      MatPaginator
    ], styles: ['\n\n.agent-transactions[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.error-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.875rem;\n}\n.error-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.transactions-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n.transactions-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-field[_ngcontent-%COMP%] {\n  min-width: 280px;\n  flex: 0 1 360px;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.transactions-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.commission-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.empty-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 0;\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background-color: #ed6c02;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background-color: #0288d1;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background-color: #d32f2f;\n}\n.status-default[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n}\n@media (max-width: 600px) {\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    min-width: 100%;\n    flex: 1;\n  }\n  .spacer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=agent-transactions.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentTransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-agent-transactions", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatCardModule,
      MatTableModule,
      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatChipsModule,
      MatPaginatorModule,
      DecimalPipe,
      DatePipe
    ], template: `<div class="agent-transactions">\r
  <h2 class="page-title">My Transactions</h2>\r
\r
  <!-- Error Alert -->\r
  <div *ngIf="error" class="error-alert">\r
    <mat-icon>error_outline</mat-icon>\r
    <span>{{ error }}</span>\r
  </div>\r
\r
  <mat-card class="transactions-card" appearance="outlined">\r
    <mat-card-content>\r
      <!-- Toolbar: Search + New Transaction -->\r
      <div class="toolbar">\r
        <mat-form-field appearance="outline" class="search-field">\r
          <mat-icon matPrefix>search</mat-icon>\r
          <mat-label>Search transactions...</mat-label>\r
          <input matInput [(ngModel)]="search" (ngModelChange)="applyFilter()" />\r
        </mat-form-field>\r
        <span class="spacer"></span>\r
        <a mat-flat-button color="primary" routerLink="/agent/send">\r
          <mat-icon>add</mat-icon>\r
          New Transaction\r
        </a>\r
      </div>\r
\r
      <!-- Loading -->\r
      <div *ngIf="loading" class="loading-container">\r
        <mat-spinner diameter="40"></mat-spinner>\r
      </div>\r
\r
      <!-- Table -->\r
      <div class="table-responsive" *ngIf="!loading">\r
        <table mat-table [dataSource]="pagedTransactions" class="transactions-table">\r
          <!-- Reference Number -->\r
          <ng-container matColumnDef="referenceNumber">\r
            <th mat-header-cell *matHeaderCellDef>Reference</th>\r
            <td mat-cell *matCellDef="let tx">\r
              <span class="mono-text">{{ tx.referenceNumber }}</span>\r
            </td>\r
          </ng-container>\r
\r
          <!-- Sender -->\r
          <ng-container matColumnDef="sender">\r
            <th mat-header-cell *matHeaderCellDef>Sender</th>\r
            <td mat-cell *matCellDef="let tx">{{ tx.senderName }}</td>\r
          </ng-container>\r
\r
          <!-- Receiver -->\r
          <ng-container matColumnDef="receiver">\r
            <th mat-header-cell *matHeaderCellDef>Receiver</th>\r
            <td mat-cell *matCellDef="let tx">{{ tx.receiverName }}</td>\r
          </ng-container>\r
\r
          <!-- Send Amount -->\r
          <ng-container matColumnDef="sendAmount">\r
            <th mat-header-cell *matHeaderCellDef>Send</th>\r
            <td mat-cell *matCellDef="let tx">\r
              {{ tx.sendAmount | number:'1.2-2' }} {{ tx.sendCurrency }}\r
            </td>\r
          </ng-container>\r
\r
          <!-- Receive Amount -->\r
          <ng-container matColumnDef="receiveAmount">\r
            <th mat-header-cell *matHeaderCellDef>Receive</th>\r
            <td mat-cell *matCellDef="let tx">\r
              {{ tx.receiveAmount | number:'1.2-2' }} {{ tx.receiveCurrency }}\r
            </td>\r
          </ng-container>\r
\r
          <!-- Commission -->\r
          <ng-container matColumnDef="commission">\r
            <th mat-header-cell *matHeaderCellDef>My Commission</th>\r
            <td mat-cell *matCellDef="let tx">\r
              <span class="commission-text">{{ tx.agentCommission | number:'1.2-2' }}</span>\r
            </td>\r
          </ng-container>\r
\r
          <!-- Status -->\r
          <ng-container matColumnDef="status">\r
            <th mat-header-cell *matHeaderCellDef>Status</th>\r
            <td mat-cell *matCellDef="let tx">\r
              <span class="status-chip" [ngClass]="getStatusClass(tx.status)">\r
                {{ tx.status }}\r
              </span>\r
            </td>\r
          </ng-container>\r
\r
          <!-- Date -->\r
          <ng-container matColumnDef="createdAt">\r
            <th mat-header-cell *matHeaderCellDef>Date</th>\r
            <td mat-cell *matCellDef="let tx">\r
              {{ tx.createdAt | date:'MMM dd, HH:mm' }}\r
            </td>\r
          </ng-container>\r
\r
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
        </table>\r
\r
        <!-- Empty State -->\r
        <div *ngIf="filteredTransactions.length === 0 && !loading" class="empty-text">\r
          No transactions found.\r
        </div>\r
      </div>\r
\r
      <!-- Paginator -->\r
      <mat-paginator *ngIf="filteredTransactions.length > 0"\r
                     [length]="filteredTransactions.length"\r
                     [pageSize]="pageSize"\r
                     [pageIndex]="pageIndex"\r
                     [pageSizeOptions]="[5, 10, 25, 50]"\r
                     (page)="onPageChange($event)"\r
                     showFirstLastButtons>\r
      </mat-paginator>\r
    </mat-card-content>\r
  </mat-card>\r
</div>\r
`, styles: ['/* src/app/pages/agent/transactions/agent-transactions.component.scss */\n.agent-transactions {\n  padding: 0;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.error-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.875rem;\n}\n.error-alert mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.transactions-card {\n  border-radius: 12px !important;\n}\n.transactions-card mat-card-content {\n  padding: 24px !important;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-field {\n  min-width: 280px;\n  flex: 0 1 360px;\n}\n.spacer {\n  flex: 1;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-responsive {\n  overflow-x: auto;\n}\n.transactions-table {\n  width: 100%;\n}\n.transactions-table .mat-mdc-header-cell {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.transactions-table .mat-mdc-cell {\n  font-size: 0.875rem;\n}\n.transactions-table .mat-mdc-row:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.commission-text {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.empty-text {\n  text-align: center;\n  padding: 32px 0;\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed {\n  background-color: #2e7d32;\n}\n.status-pending {\n  background-color: #ed6c02;\n}\n.status-processing {\n  background-color: #0288d1;\n}\n.status-failed {\n  background-color: #d32f2f;\n}\n.status-default {\n  background-color: #9e9e9e;\n}\n@media (max-width: 600px) {\n  .toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-field {\n    min-width: 100%;\n    flex: 1;\n  }\n  .spacer {\n    display: none;\n  }\n}\n/*# sourceMappingURL=agent-transactions.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentTransactionsComponent, { className: "AgentTransactionsComponent", filePath: "src/app/pages/agent/transactions/agent-transactions.component.ts", lineNumber: 40 });
})();
export {
  AgentTransactionsComponent
};
//# sourceMappingURL=chunk-Q77FA5AR.js.map
