import {
  ExportService
} from "./chunk-DU4FVJ3R.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-FTNGEOQD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-6I2CTDTD.js";
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
  Subject,
  debounceTime,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XQC2OG7J.js";

// src/app/pages/agent/transactions/agent-transactions.component.ts
function AgentTransactionsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "circle", 27)(3, "path", 28);
    \u0275\u0275elementEnd()();
  }
}
function AgentTransactionsComponent_div_36_tr_23_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_36_tr_23_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const tx_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.releaseTransaction(tx_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 52);
    \u0275\u0275elementEnd()();
  }
}
function AgentTransactionsComponent_div_36_tr_23_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_36_tr_23_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const tx_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rejectTransaction(tx_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 54);
    \u0275\u0275elementEnd()();
  }
}
function AgentTransactionsComponent_div_36_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 39);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 40);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 41)(17, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 43);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 44)(23, "button", 45);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_36_tr_23_Template_button_click_23_listener() {
      const tx_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewDetail(tx_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 46);
    \u0275\u0275element(25, "path", 47)(26, "path", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, AgentTransactionsComponent_div_36_tr_23_button_27_Template, 3, 0, "button", 49)(28, AgentTransactionsComponent_div_36_tr_23_button_28_Template, 3, 0, "button", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r2.referenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r2.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r2.receiverName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(9, 13, tx_r2.sendAmount, "1.2-2"), " ", tx_r2.sendCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(12, 16, tx_r2.receiveAmount, "1.2-2"), " ", tx_r2.receiveCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 19, tx_r2.agentCommission, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(tx_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(tx_r2.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 22, tx_r2.createdAt, "MMM dd, HH:mm"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", tx_r2.status === "OnHold");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tx_r2.status === "OnHold");
  }
}
function AgentTransactionsComponent_div_36_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " No transactions found. ");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "table", 30)(2, "thead")(3, "tr", 31)(4, "th", 32);
    \u0275\u0275text(5, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 32);
    \u0275\u0275text(7, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 32);
    \u0275\u0275text(9, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 32);
    \u0275\u0275text(11, "Send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 32);
    \u0275\u0275text(13, "Receive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 32);
    \u0275\u0275text(15, "My Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 32);
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 32);
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 33);
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody", 34);
    \u0275\u0275template(23, AgentTransactionsComponent_div_36_tr_23_Template, 29, 25, "tr", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, AgentTransactionsComponent_div_36_div_24_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r2.transactions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.transactions.length === 0 && !ctx_r2.loading);
  }
}
function AgentTransactionsComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "span");
    \u0275\u0275text(3, "Rows per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 58);
    \u0275\u0275listener("ngModelChange", function AgentTransactionsComponent_div_37_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange({ pageIndex: 0, pageSize: $event, length: ctx_r2.totalCount, previousPageIndex: ctx_r2.pageIndex }));
    });
    \u0275\u0275elementStart(5, "option", 59);
    \u0275\u0275text(6, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 59);
    \u0275\u0275text(8, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 59);
    \u0275\u0275text(10, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 59);
    \u0275\u0275text(12, "100");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 60)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 60)(17, "button", 61);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_37_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange({ pageIndex: 0, pageSize: ctx_r2.pageSize, length: ctx_r2.totalCount, previousPageIndex: ctx_r2.pageIndex }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 17);
    \u0275\u0275element(19, "path", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "button", 63);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_37_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange({ pageIndex: ctx_r2.pageIndex - 1, pageSize: ctx_r2.pageSize, length: ctx_r2.totalCount, previousPageIndex: ctx_r2.pageIndex }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 17);
    \u0275\u0275element(22, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 65);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_37_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange({ pageIndex: ctx_r2.pageIndex + 1, pageSize: ctx_r2.pageSize, length: ctx_r2.totalCount, previousPageIndex: ctx_r2.pageIndex }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 17);
    \u0275\u0275element(25, "path", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "button", 67);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_37_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange({ pageIndex: ctx_r2.Math.ceil(ctx_r2.totalCount / ctx_r2.pageSize) - 1, pageSize: ctx_r2.pageSize, length: ctx_r2.totalCount, previousPageIndex: ctx_r2.pageIndex }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 17);
    \u0275\u0275element(28, "path", 68);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 100);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("", ctx_r2.pageIndex * ctx_r2.pageSize + 1, "\u2013", (ctx_r2.pageIndex + 1) * ctx_r2.pageSize > ctx_r2.totalCount ? ctx_r2.totalCount : (ctx_r2.pageIndex + 1) * ctx_r2.pageSize, " of ", ctx_r2.totalCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (ctx_r2.pageIndex + 1) * ctx_r2.pageSize >= ctx_r2.totalCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (ctx_r2.pageIndex + 1) * ctx_r2.pageSize >= ctx_r2.totalCount);
  }
}
function AgentTransactionsComponent_div_38_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "span", 78);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.receiverBankName);
  }
}
function AgentTransactionsComponent_div_38_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "span", 78);
    \u0275\u0275text(2, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.receiverAccountNumber);
  }
}
function AgentTransactionsComponent_div_38_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "span", 78);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.receiverBranchName);
  }
}
function AgentTransactionsComponent_div_38_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "span", 78);
    \u0275\u0275text(2, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.paymentMethodName);
  }
}
function AgentTransactionsComponent_div_38_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "span", 78);
    \u0275\u0275text(2, "Payout Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.payoutMethodName);
  }
}
function AgentTransactionsComponent_div_38_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "span", 78);
    \u0275\u0275text(2, "Payout Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.payoutAgentName);
  }
}
function AgentTransactionsComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 70);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_38_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 71)(3, "h3", 72);
    \u0275\u0275text(4, "Transaction Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 73);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_38_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 74);
    \u0275\u0275element(7, "path", 75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 76)(9, "div", 77)(10, "span", 78);
    \u0275\u0275text(11, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 79);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 77)(15, "span", 78);
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 80);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 77)(20, "span", 78);
    \u0275\u0275text(21, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 81);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 77)(25, "span", 78);
    \u0275\u0275text(26, "Sender Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 81);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 77)(30, "span", 78);
    \u0275\u0275text(31, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 81);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 77)(35, "span", 78);
    \u0275\u0275text(36, "Receiver Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 81);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, AgentTransactionsComponent_div_38_div_39_Template, 5, 1, "div", 82)(40, AgentTransactionsComponent_div_38_div_40_Template, 5, 1, "div", 82)(41, AgentTransactionsComponent_div_38_div_41_Template, 5, 1, "div", 82);
    \u0275\u0275elementStart(42, "div", 77)(43, "span", 78);
    \u0275\u0275text(44, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 81);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(48, "hr", 83);
    \u0275\u0275elementStart(49, "div", 76)(50, "div", 77)(51, "span", 78);
    \u0275\u0275text(52, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 84);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 77)(57, "span", 78);
    \u0275\u0275text(58, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 84);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 77)(63, "span", 78);
    \u0275\u0275text(64, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 81);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 77)(69, "span", 78);
    \u0275\u0275text(70, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 81);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 77)(75, "span", 78);
    \u0275\u0275text(76, "My Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 85);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(80, AgentTransactionsComponent_div_38_div_80_Template, 5, 1, "div", 82)(81, AgentTransactionsComponent_div_38_div_81_Template, 5, 1, "div", 82)(82, AgentTransactionsComponent_div_38_div_82_Template, 5, 1, "div", 82);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.referenceNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(ctx_r2.selectedTransaction.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(ctx_r2.selectedTransaction.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.senderCountry);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.receiverName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.receiverCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.receiverBankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.receiverAccountNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.receiverBranchName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 21, ctx_r2.selectedTransaction.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(55, 24, ctx_r2.selectedTransaction.sendAmount, "1.2-2"), " ", ctx_r2.selectedTransaction.sendCurrency, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(61, 27, ctx_r2.selectedTransaction.receiveAmount, "1.2-2"), " ", ctx_r2.selectedTransaction.receiveCurrency, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 30, ctx_r2.selectedTransaction.exchangeRateApplied, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 33, ctx_r2.selectedTransaction.totalCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 36, ctx_r2.selectedTransaction.agentCommission, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.paymentMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.payoutMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.payoutAgentName);
  }
}
var AgentTransactionsComponent = class _AgentTransactionsComponent {
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.transactions = [];
    this.loading = true;
    this.search = "";
    this.statusFilter = "All";
    this.selectedTransaction = null;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
    this.Math = Math;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.search = s;
      this.pageIndex = 0;
      this.loadTransactions();
    });
    this.loadTransactions();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadTransactions() {
    this.loading = true;
    this.api.getAgentTransactionsPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.search }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.transactions = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.transactions = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load transactions.");
        }
        this.loading = false;
      },
      error: (err) => {
        this.transactions = [];
        this.totalCount = 0;
        this.notify.error(`Could not connect to server: ${err.message || "Unknown error"}`);
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.pageIndex = 0;
    this.loadTransactions();
  }
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadTransactions();
  }
  exportData(format) {
    this.exportService.export("api/agent/transactions/export", { search: this.search }, format);
  }
  releaseTransaction(tx) {
    this.api.releaseTransaction(tx.id).subscribe({
      next: (res) => {
        if (res?.success) {
          tx.status = "Pending";
          this.notify.success(`Transaction ${tx.referenceNumber} released to Pending.`);
        } else {
          this.notify.error(res?.message || "Failed to release transaction.");
        }
      },
      error: () => {
        this.notify.error("Error releasing transaction.");
      }
    });
  }
  rejectTransaction(tx) {
    this.api.rejectTransaction(tx.id).subscribe({
      next: (res) => {
        if (res?.success) {
          tx.status = "Cancelled";
          this.notify.warn(`Transaction ${tx.referenceNumber} rejected.`);
        } else {
          this.notify.error(res?.message || "Failed to reject transaction.");
        }
      },
      error: () => {
        this.notify.error("Error rejecting transaction.");
      }
    });
  }
  viewDetail(tx) {
    this.selectedTransaction = tx;
  }
  closeDetail() {
    this.selectedTransaction = null;
  }
  getStatusClass(status) {
    switch (status) {
      case "Completed":
        return "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400";
      case "Pending":
        return "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400";
      case "Approved":
      case "Processing":
        return "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400";
      case "Cancelled":
      case "Failed":
        return "bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400";
      case "OnHold":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "Compliance":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      default:
        return "bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "OnHold":
        return "On Hold";
      default:
        return status;
    }
  }
  static {
    this.\u0275fac = function AgentTransactionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentTransactionsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentTransactionsComponent, selectors: [["app-agent-transactions"]], decls: 39, vars: 6, consts: [[1, "block"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-100", "mb-6"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "flex-wrap", "items-center", "gap-4", "mb-4"], [1, "relative", "min-w-[240px]", "flex-1", "basis-[300px]"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "h-4", "w-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"], ["type", "text", "placeholder", "Search transactions...", 1, "w-full", "pl-10", "pr-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "w-40", "shrink-0", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["value", "All"], ["value", "OnHold"], ["value", "Compliance"], ["value", "Pending"], ["value", "Completed"], ["value", "Cancelled"], [1, "flex-1"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition", "text-sm", "font-medium", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"], ["routerLink", "/agent/send", 1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "text-white", "font-medium", "text-sm", "transition", "shadow-sm"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4.5v15m7.5-7.5h-15"], ["class", "flex justify-center py-12", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700 text-sm text-surface-600 dark:text-surface-400", 4, "ngIf"], ["class", "fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], [1, "flex", "justify-center", "py-12"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "text-sm"], [1, "border-b", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-900/50"], [1, "px-4", "py-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-500", "dark:text-surface-400"], [1, "px-4", "py-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-500", "dark:text-surface-400", "text-center"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-700/50 transition-colors", 4, "ngFor", "ngForOf"], ["class", "text-center py-8 text-sm text-surface-500 dark:text-surface-400", 4, "ngIf"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-700/50", "transition-colors"], [1, "px-4", "py-3", "font-mono", "text-xs"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "font-semibold", "text-success-600", "dark:text-success-400"], [1, "px-4", "py-3"], [1, "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-400"], [1, "px-4", "py-3", "text-center", "whitespace-nowrap"], ["title", "View Details", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "text-brand-600", "dark:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/30", "transition", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], ["title", "Release to Pending", "class", "inline-flex items-center justify-center h-8 w-8 rounded-lg text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/30 transition", 3, "click", 4, "ngIf"], ["title", "Reject", "class", "inline-flex items-center justify-center h-8 w-8 rounded-lg text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/30 transition", 3, "click", 4, "ngIf"], ["title", "Release to Pending", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "text-success-600", "dark:text-success-400", "hover:bg-success-50", "dark:hover:bg-success-900/30", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["title", "Reject", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "text-danger-600", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/30", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "text-center", "py-8", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "mt-4", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700", "text-sm", "text-surface-600", "dark:text-surface-400"], [1, "flex", "items-center", "gap-2"], [1, "px-2", "py-1", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "text-sm", "outline-none", "focus:ring-2", "focus:ring-brand-500", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "flex", "items-center", "gap-1"], ["title", "First page", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"], ["title", "Previous page", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 19.5 8.25 12l7.5-7.5"], ["title", "Next page", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m8.25 4.5 7.5 7.5-7.5 7.5"], ["title", "Last page", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"], [1, "fixed", "inset-0", "z-[10000]", "flex", "items-center", "justify-center", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-2xl", "p-6", "w-[600px]", "max-w-[95vw]", "max-h-[90vh]", "overflow-y-auto", 3, "click"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "text-surface-500", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18 18 6M6 6l12 12"], [1, "grid", "grid-cols-2", "gap-4"], [1, "flex", "flex-col", "gap-0.5"], [1, "text-xs", "uppercase", "tracking-wide", "text-surface-500", "dark:text-surface-400"], [1, "text-sm", "font-mono", "text-surface-900", "dark:text-surface-100"], [1, "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "self-start", 3, "ngClass"], [1, "text-sm", "text-surface-900", "dark:text-surface-100"], ["class", "flex flex-col gap-0.5", 4, "ngIf"], [1, "my-4", "border-surface-200", "dark:border-surface-700"], [1, "text-sm", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "text-sm", "font-semibold", "text-success-600", "dark:text-success-400"]], template: function AgentTransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "My Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 5);
        \u0275\u0275element(7, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "input", 7);
        \u0275\u0275listener("ngModelChange", function AgentTransactionsComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.searchDebounce.next($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function AgentTransactionsComponent_Template_select_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AgentTransactionsComponent_Template_select_ngModelChange_9_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(10, "option", 9);
        \u0275\u0275text(11, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "option", 10);
        \u0275\u0275text(13, "On Hold");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "option", 11);
        \u0275\u0275text(15, "Compliance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "option", 12);
        \u0275\u0275text(17, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 13);
        \u0275\u0275text(19, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 14);
        \u0275\u0275text(21, "Cancelled");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(22, "span", 15);
        \u0275\u0275elementStart(23, "button", 16);
        \u0275\u0275listener("click", function AgentTransactionsComponent_Template_button_click_23_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 17);
        \u0275\u0275element(25, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(27, "button", 16);
        \u0275\u0275listener("click", function AgentTransactionsComponent_Template_button_click_27_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(28, "svg", 17);
        \u0275\u0275element(29, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "a", 19);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 17);
        \u0275\u0275element(33, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " New Transaction ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(35, AgentTransactionsComponent_div_35_Template, 4, 0, "div", 21)(36, AgentTransactionsComponent_div_36_Template, 25, 2, "div", 22)(37, AgentTransactionsComponent_div_37_Template, 29, 12, "div", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, AgentTransactionsComponent_div_38_Template, 83, 39, "div", 24);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
        \u0275\u0275advance(26);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.totalCount > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedTransaction);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=agent-transactions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentTransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-agent-transactions", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      DecimalPipe,
      DatePipe
    ], template: `<div class="block">
  <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-6">My Transactions</h2>

  <!-- Card -->
  <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">

    <!-- Toolbar -->
    <div class="flex flex-wrap items-center gap-4 mb-4">
      <!-- Search -->
      <div class="relative min-w-[240px] flex-1 basis-[300px]">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-surface-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
        </svg>
        <input type="text"
               placeholder="Search transactions..."
               [ngModel]="search"
               (ngModelChange)="searchDebounce.next($event)"
               class="w-full pl-10 pr-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 dark:placeholder-surface-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
      </div>

      <!-- Status Filter -->
      <select [(ngModel)]="statusFilter"
              (ngModelChange)="applyFilter()"
              class="w-40 shrink-0 px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
        <option value="All">All</option>
        <option value="OnHold">On Hold</option>
        <option value="Compliance">Compliance</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <span class="flex-1"></span>

      <!-- Export Buttons -->
      <button (click)="exportData('excel')"
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm font-medium">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
        </svg>
        Excel
      </button>
      <button (click)="exportData('csv')"
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm font-medium">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
        </svg>
        CSV
      </button>

      <!-- New Transaction -->
      <a routerLink="/agent/send"
         class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm transition shadow-sm">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
        New Transaction
      </a>
    </div>

    <!-- Loading Spinner -->
    <div *ngIf="loading" class="flex justify-center py-12">
      <svg class="animate-spin h-8 w-8 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto" *ngIf="!loading">
      <table class="w-full text-left text-sm">
        <thead>
          <tr class="border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50">
            <th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">Reference</th>
            <th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">Sender</th>
            <th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">Receiver</th>
            <th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">Send</th>
            <th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">Receive</th>
            <th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">My Service Charge</th>
            <th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">Status</th>
            <th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">Date</th>
            <th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400 text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
          <tr *ngFor="let tx of transactions"
              class="hover:bg-surface-50 dark:hover:bg-surface-700/50 transition-colors">
            <td class="px-4 py-3 font-mono text-xs">{{ tx.referenceNumber }}</td>
            <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ tx.senderName }}</td>
            <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ tx.receiverName }}</td>
            <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ tx.sendAmount | number:'1.2-2' }} {{ tx.sendCurrency }}</td>
            <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ tx.receiveAmount | number:'1.2-2' }} {{ tx.receiveCurrency }}</td>
            <td class="px-4 py-3 font-semibold text-success-600 dark:text-success-400">{{ tx.agentCommission | number:'1.2-2' }}</td>
            <td class="px-4 py-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-medium" [ngClass]="getStatusClass(tx.status)">
                {{ getStatusLabel(tx.status) }}
              </span>
            </td>
            <td class="px-4 py-3 text-surface-600 dark:text-surface-400">{{ tx.createdAt | date:'MMM dd, HH:mm' }}</td>
            <td class="px-4 py-3 text-center whitespace-nowrap">
              <!-- View Details -->
              <button title="View Details"
                      (click)="viewDetail(tx)"
                      class="inline-flex items-center justify-center h-8 w-8 rounded-lg text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/30 transition">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
              </button>

              <!-- Release (OnHold only) -->
              <button *ngIf="tx.status === 'OnHold'"
                      title="Release to Pending"
                      (click)="releaseTransaction(tx)"
                      class="inline-flex items-center justify-center h-8 w-8 rounded-lg text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/30 transition">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              </button>

              <!-- Reject (OnHold only) -->
              <button *ngIf="tx.status === 'OnHold'"
                      title="Reject"
                      (click)="rejectTransaction(tx)"
                      class="inline-flex items-center justify-center h-8 w-8 rounded-lg text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/30 transition">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Empty State -->
      <div *ngIf="transactions.length === 0 && !loading"
           class="text-center py-8 text-sm text-surface-500 dark:text-surface-400">
        No transactions found.
      </div>
    </div>

    <!-- Pagination -->
    <div *ngIf="!loading && totalCount > 0"
         class="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700 text-sm text-surface-600 dark:text-surface-400">
      <div class="flex items-center gap-2">
        <span>Rows per page:</span>
        <select [ngModel]="pageSize"
                (ngModelChange)="onPageChange({ pageIndex: 0, pageSize: $event, length: totalCount, previousPageIndex: pageIndex })"
                class="px-2 py-1 rounded-md border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 text-sm outline-none focus:ring-2 focus:ring-brand-500">
          <option [ngValue]="10">10</option>
          <option [ngValue]="20">20</option>
          <option [ngValue]="50">50</option>
          <option [ngValue]="100">100</option>
        </select>
      </div>

      <div class="flex items-center gap-1">
        <span>{{ pageIndex * pageSize + 1 }}&ndash;{{ (pageIndex + 1) * pageSize > totalCount ? totalCount : (pageIndex + 1) * pageSize }} of {{ totalCount }}</span>
      </div>

      <div class="flex items-center gap-1">
        <!-- First Page -->
        <button title="First page"
                [disabled]="pageIndex === 0"
                (click)="onPageChange({ pageIndex: 0, pageSize: pageSize, length: totalCount, previousPageIndex: pageIndex })"
                class="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-surface-300 dark:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-700 transition disabled:opacity-40 disabled:cursor-not-allowed">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"/>
          </svg>
        </button>
        <!-- Previous Page -->
        <button title="Previous page"
                [disabled]="pageIndex === 0"
                (click)="onPageChange({ pageIndex: pageIndex - 1, pageSize: pageSize, length: totalCount, previousPageIndex: pageIndex })"
                class="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-surface-300 dark:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-700 transition disabled:opacity-40 disabled:cursor-not-allowed">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
          </svg>
        </button>
        <!-- Next Page -->
        <button title="Next page"
                [disabled]="(pageIndex + 1) * pageSize >= totalCount"
                (click)="onPageChange({ pageIndex: pageIndex + 1, pageSize: pageSize, length: totalCount, previousPageIndex: pageIndex })"
                class="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-surface-300 dark:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-700 transition disabled:opacity-40 disabled:cursor-not-allowed">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
          </svg>
        </button>
        <!-- Last Page -->
        <button title="Last page"
                [disabled]="(pageIndex + 1) * pageSize >= totalCount"
                (click)="onPageChange({ pageIndex: Math.ceil(totalCount / pageSize) - 1, pageSize: pageSize, length: totalCount, previousPageIndex: pageIndex })"
                class="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-surface-300 dark:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-700 transition disabled:opacity-40 disabled:cursor-not-allowed">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"/>
          </svg>
        </button>
      </div>
    </div>

  </div>
</div>

<!-- Transaction Detail Overlay -->
<div *ngIf="selectedTransaction"
     class="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm"
     (click)="closeDetail()">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-2xl p-6 w-[600px] max-w-[95vw] max-h-[90vh] overflow-y-auto"
       (click)="$event.stopPropagation()">

    <!-- Header -->
    <div class="flex items-center justify-between mb-5">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Transaction Details</h3>
      <button (click)="closeDetail()"
              class="inline-flex items-center justify-center h-8 w-8 rounded-lg text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Detail Grid: General -->
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Reference</span>
        <span class="text-sm font-mono text-surface-900 dark:text-surface-100">{{ selectedTransaction.referenceNumber }}</span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Status</span>
        <span class="px-2.5 py-0.5 rounded-full text-xs font-medium self-start" [ngClass]="getStatusClass(selectedTransaction.status)">
          {{ getStatusLabel(selectedTransaction.status) }}
        </span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Sender</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.senderName }}</span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Sender Country</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.senderCountry }}</span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Receiver</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.receiverName }}</span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Receiver Country</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.receiverCountry }}</span>
      </div>
      <div class="flex flex-col gap-0.5" *ngIf="selectedTransaction.receiverBankName">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Bank</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.receiverBankName }}</span>
      </div>
      <div class="flex flex-col gap-0.5" *ngIf="selectedTransaction.receiverAccountNumber">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Account Number</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.receiverAccountNumber }}</span>
      </div>
      <div class="flex flex-col gap-0.5" *ngIf="selectedTransaction.receiverBranchName">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Branch</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.receiverBranchName }}</span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Date</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.createdAt | date:'dd/MM/yyyy HH:mm' }}</span>
      </div>
    </div>

    <!-- Divider -->
    <hr class="my-4 border-surface-200 dark:border-surface-700" />

    <!-- Detail Grid: Financial -->
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Send Amount</span>
        <span class="text-sm font-bold text-surface-900 dark:text-surface-100">
          {{ selectedTransaction.sendAmount | number:'1.2-2' }} {{ selectedTransaction.sendCurrency }}
        </span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Receive Amount</span>
        <span class="text-sm font-bold text-surface-900 dark:text-surface-100">
          {{ selectedTransaction.receiveAmount | number:'1.2-2' }} {{ selectedTransaction.receiveCurrency }}
        </span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Exchange Rate</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.exchangeRateApplied | number:'1.4-4' }}</span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Total Service Charge</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.totalCommission | number:'1.2-2' }}</span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">My Service Charge</span>
        <span class="text-sm font-semibold text-success-600 dark:text-success-400">{{ selectedTransaction.agentCommission | number:'1.2-2' }}</span>
      </div>
      <div class="flex flex-col gap-0.5" *ngIf="selectedTransaction.paymentMethodName">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Payment Method</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.paymentMethodName }}</span>
      </div>
      <div class="flex flex-col gap-0.5" *ngIf="selectedTransaction.payoutMethodName">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Payout Method</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.payoutMethodName }}</span>
      </div>
      <div class="flex flex-col gap-0.5" *ngIf="selectedTransaction.payoutAgentName">
        <span class="text-xs uppercase tracking-wide text-surface-500 dark:text-surface-400">Payout Partner</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.payoutAgentName }}</span>
      </div>
    </div>

  </div>
</div>
`, styles: ["/* src/app/pages/agent/transactions/agent-transactions.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=agent-transactions.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentTransactionsComponent, { className: "AgentTransactionsComponent", filePath: "src/app/pages/agent/transactions/agent-transactions.component.ts", lineNumber: 26 });
})();
export {
  AgentTransactionsComponent
};
//# sourceMappingURL=chunk-JAAYD6PI.js.map
