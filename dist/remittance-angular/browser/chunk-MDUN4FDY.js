import {
  ExportService
} from "./chunk-FDFRARSK.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-ZQKQC2T6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-D3SW2Q36.js";
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EU7HC72Q.js";
import "./chunk-S5KMCARS.js";

// src/app/pages/agent/transactions/agent-transactions.component.ts
function AgentTransactionsComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "circle", 33)(3, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5, "Loading transactions...");
    \u0275\u0275elementEnd()();
  }
}
function AgentTransactionsComponent_div_44_tr_23_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_44_tr_23_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const tx_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.releaseTransaction(tx_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "path", 65);
    \u0275\u0275elementEnd()();
  }
}
function AgentTransactionsComponent_div_44_tr_23_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_44_tr_23_button_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const tx_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rejectTransaction(tx_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "path", 67);
    \u0275\u0275elementEnd()();
  }
}
function AgentTransactionsComponent_div_44_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 45)(1, "td", 46)(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 46)(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 46)(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 46)(11, "span", 50);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 51);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 46)(17, "span", 52);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 51);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 46)(23, "span", 53);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 46)(27, "span", 54);
    \u0275\u0275element(28, "span", 55);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td", 56);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 46)(34, "div", 57)(35, "button", 58);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_44_tr_23_Template_button_click_35_listener() {
      const tx_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewDetail(tx_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 59);
    \u0275\u0275element(37, "path", 60)(38, "path", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, AgentTransactionsComponent_div_44_tr_23_button_39_Template, 3, 0, "button", 62)(40, AgentTransactionsComponent_div_44_tr_23_button_40_Template, 3, 0, "button", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tx_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r2.referenceNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r2.senderName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r2.receiverName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 13, tx_r2.sendAmount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r2.sendCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 16, tx_r2.receiveAmount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r2.receiveCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 19, tx_r2.agentCommission, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(tx_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(tx_r2.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 22, tx_r2.createdAt, "MMM dd, HH:mm"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", tx_r2.status === "OnHold");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tx_r2.status === "OnHold");
  }
}
function AgentTransactionsComponent_div_44_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 70);
    \u0275\u0275element(3, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5, "No transactions found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 72);
    \u0275\u0275text(7, "Try adjusting your search or filter");
    \u0275\u0275elementEnd()();
  }
}
function AgentTransactionsComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "table", 37)(2, "thead")(3, "tr", 38)(4, "th", 39);
    \u0275\u0275text(5, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 40);
    \u0275\u0275text(7, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 40);
    \u0275\u0275text(9, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 40);
    \u0275\u0275text(11, "Send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 40);
    \u0275\u0275text(13, "Receive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 39);
    \u0275\u0275text(15, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 40);
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 40);
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 41);
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody", 42);
    \u0275\u0275template(23, AgentTransactionsComponent_div_44_tr_23_Template, 41, 25, "tr", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, AgentTransactionsComponent_div_44_div_24_Template, 8, 0, "div", 44);
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
function AgentTransactionsComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "span");
    \u0275\u0275text(3, "Rows per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 75);
    \u0275\u0275listener("ngModelChange", function AgentTransactionsComponent_div_45_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange({ pageIndex: 0, pageSize: $event, length: ctx_r2.totalCount, previousPageIndex: ctx_r2.pageIndex }));
    });
    \u0275\u0275elementStart(5, "option", 76);
    \u0275\u0275text(6, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 76);
    \u0275\u0275text(8, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 76);
    \u0275\u0275text(10, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 76);
    \u0275\u0275text(12, "100");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "span", 77);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 78)(16, "button", 79);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_45_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange({ pageIndex: 0, pageSize: ctx_r2.pageSize, length: ctx_r2.totalCount, previousPageIndex: ctx_r2.pageIndex }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 80);
    \u0275\u0275element(18, "path", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 82);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_45_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange({ pageIndex: ctx_r2.pageIndex - 1, pageSize: ctx_r2.pageSize, length: ctx_r2.totalCount, previousPageIndex: ctx_r2.pageIndex }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 80);
    \u0275\u0275element(21, "path", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 84);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_45_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange({ pageIndex: ctx_r2.pageIndex + 1, pageSize: ctx_r2.pageSize, length: ctx_r2.totalCount, previousPageIndex: ctx_r2.pageIndex }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 80);
    \u0275\u0275element(24, "path", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 86);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_45_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange({ pageIndex: ctx_r2.Math.ceil(ctx_r2.totalCount / ctx_r2.pageSize) - 1, pageSize: ctx_r2.pageSize, length: ctx_r2.totalCount, previousPageIndex: ctx_r2.pageIndex }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 80);
    \u0275\u0275element(27, "path", 87);
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
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r2.pageIndex * ctx_r2.pageSize + 1, "\u2013", (ctx_r2.pageIndex + 1) * ctx_r2.pageSize > ctx_r2.totalCount ? ctx_r2.totalCount : (ctx_r2.pageIndex + 1) * ctx_r2.pageSize, " of ", ctx_r2.totalCount, " ");
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
function AgentTransactionsComponent_div_46_div_58_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.receiverBranchName);
  }
}
function AgentTransactionsComponent_div_46_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "p", 114);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 115);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AgentTransactionsComponent_div_46_div_58_p_5_Template, 2, 1, "p", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.receiverBankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.receiverBranchName);
  }
}
function AgentTransactionsComponent_div_46_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "p", 114);
    \u0275\u0275text(2, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 127);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.receiverAccountNumber);
  }
}
function AgentTransactionsComponent_div_46_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "span", 35);
    \u0275\u0275text(2, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 128);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.paymentMethodName);
  }
}
function AgentTransactionsComponent_div_46_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "span", 35);
    \u0275\u0275text(2, "Payout Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 128);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.payoutMethodName);
  }
}
function AgentTransactionsComponent_div_46_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "span", 35);
    \u0275\u0275text(2, "Payout Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 128);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.payoutAgentName);
  }
}
function AgentTransactionsComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_46_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 89);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_46_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 90)(3, "div", 91)(4, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 93);
    \u0275\u0275element(6, "path", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "h3", 95);
    \u0275\u0275text(9, "Transaction Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 96);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 24)(13, "span", 54);
    \u0275\u0275element(14, "span", 55);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 97);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_46_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 98);
    \u0275\u0275element(18, "path", 99);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 100)(20, "div", 101)(21, "div", 102)(22, "p", 103);
    \u0275\u0275text(23, "You Send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 104);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementStart(27, "span", 105);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 106);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 107);
    \u0275\u0275element(31, "path", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 102)(33, "p", 103);
    \u0275\u0275text(34, "Receiver Gets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 109);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementStart(38, "span", 110);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div")(41, "p", 111);
    \u0275\u0275text(42, "Parties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 112)(44, "div", 113)(45, "p", 114);
    \u0275\u0275text(46, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 115);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 116);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 113)(52, "p", 114);
    \u0275\u0275text(53, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 115);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p", 116);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, AgentTransactionsComponent_div_46_div_58_Template, 6, 2, "div", 117)(59, AgentTransactionsComponent_div_46_div_59_Template, 5, 1, "div", 117);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div")(61, "p", 111);
    \u0275\u0275text(62, "Financial Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 118)(64, "div", 119)(65, "span", 35);
    \u0275\u0275text(66, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 120);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 119)(71, "span", 35);
    \u0275\u0275text(72, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 120);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 121)(77, "span", 122);
    \u0275\u0275text(78, "My Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 123);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(82, AgentTransactionsComponent_div_46_div_82_Template, 5, 1, "div", 124)(83, AgentTransactionsComponent_div_46_div_83_Template, 5, 1, "div", 124)(84, AgentTransactionsComponent_div_46_div_84_Template, 5, 1, "div", 124);
    \u0275\u0275elementStart(85, "div", 119)(86, "span", 35);
    \u0275\u0275text(87, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span", 125);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "date");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.referenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(ctx_r2.selectedTransaction.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(ctx_r2.selectedTransaction.status), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 20, ctx_r2.selectedTransaction.sendAmount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.sendCurrency);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(37, 23, ctx_r2.selectedTransaction.receiveAmount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.receiveCurrency);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.senderCountry);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.receiverName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedTransaction.receiverCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.receiverBankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.receiverAccountNumber);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 26, ctx_r2.selectedTransaction.exchangeRateApplied, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 29, ctx_r2.selectedTransaction.totalCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 32, ctx_r2.selectedTransaction.agentCommission, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.paymentMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.payoutMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTransaction.payoutAgentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 35, ctx_r2.selectedTransaction.createdAt, "dd/MM/yyyy HH:mm"));
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
      case "PendingApproval":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      default:
        return "bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "OnHold":
        return "On Hold";
      case "PendingApproval":
        return "Pending Approval";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentTransactionsComponent, selectors: [["app-agent-transactions"]], decls: 47, vars: 6, consts: [[1, "space-y-5"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "tracking-tight", "text-surface-900", "dark:text-surface-50"], [1, "mt-0.5", "text-sm", "text-surface-500", "dark:text-surface-400"], ["routerLink", "/agent/send", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-brand-600", "hover:bg-brand-700", "text-white", "text-sm", "font-semibold", "shadow-sm", "transition-all", "duration-150", "active:scale-95"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4.5v15m7.5-7.5h-15"], [1, "rounded-2xl", "border", "border-surface-100", "dark:border-surface-800", "bg-white", "dark:bg-surface-900", "shadow-sm", "overflow-hidden"], [1, "flex", "flex-wrap", "items-center", "gap-3", "px-5", "py-4", "border-b", "border-surface-100", "dark:border-surface-800"], [1, "relative", "min-w-[220px]", "flex-1", "basis-[260px]"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "h-4", "w-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"], ["type", "search", "placeholder", "Search by name or reference...", 1, "w-full", "pl-9", "pr-4", "py-2.5", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "focus:ring-2", "focus:ring-brand-500/40", "focus:border-brand-500", "dark:focus:border-brand-400", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "relative", "shrink-0"], [1, "appearance-none", "w-40", "pl-3", "pr-8", "py-2.5", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500/40", "focus:border-brand-500", "dark:focus:border-brand-400", "outline-none", "transition", "text-sm", "font-medium", "cursor-pointer", 3, "ngModelChange", "ngModel"], ["value", "All"], ["value", "OnHold"], ["value", "Compliance"], ["value", "Pending"], ["value", "Completed"], ["value", "Cancelled"], ["fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "pointer-events-none", "absolute", "right-2.5", "top-1/2", "-translate-y-1/2", "h-4", "w-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 8.25l-7.5 7.5-7.5-7.5"], [1, "flex-1"], [1, "flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-2", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-400", "hover:bg-surface-50", "dark:hover:bg-surface-800", "hover:text-surface-800", "dark:hover:text-surface-200", "transition-all", "duration-150", "text-sm", "font-medium", "active:scale-95", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"], ["class", "flex flex-col items-center justify-center py-20 gap-3", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "flex flex-wrap items-center justify-between gap-4 px-5 py-4 border-t border-surface-100 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-800/30", 4, "ngIf"], ["class", "fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in", 3, "click", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-3"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "text-sm"], [1, "bg-surface-50/70", "dark:bg-surface-800/50"], [1, "px-5", "py-3", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "whitespace-nowrap"], [1, "px-5", "py-3", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500"], [1, "px-5", "py-3", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "text-center"], [1, "divide-y", "divide-surface-50", "dark:divide-surface-800"], ["class", "hover:bg-surface-50/70 dark:hover:bg-surface-800/40 transition-colors duration-100 group", 4, "ngFor", "ngForOf"], ["class", "flex flex-col items-center justify-center py-16 text-center", 4, "ngIf"], [1, "hover:bg-surface-50/70", "dark:hover:bg-surface-800/40", "transition-colors", "duration-100", "group"], [1, "px-5", "py-4", "whitespace-nowrap"], [1, "font-mono", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "bg-surface-100", "dark:bg-surface-800", "px-2", "py-0.5", "rounded-md"], [1, "text-[13px]", "font-medium", "text-surface-800", "dark:text-surface-200"], [1, "text-[13px]", "text-surface-700", "dark:text-surface-300"], [1, "text-[13px]", "tabular-nums", "font-semibold", "text-surface-800", "dark:text-surface-200"], [1, "text-xs", "text-surface-400", "dark:text-surface-500", "ml-1"], [1, "text-[13px]", "tabular-nums", "text-surface-700", "dark:text-surface-300"], [1, "text-[13px]", "tabular-nums", "font-semibold", "text-success-600", "dark:text-success-400"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-current", "opacity-80"], [1, "px-5", "py-4", "whitespace-nowrap", "text-xs", "tabular-nums", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "justify-center", "gap-1"], ["title", "View Details", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "text-brand-600", "dark:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/30", "transition-all", "duration-150", "active:scale-90", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.75", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], ["title", "Release to Pending", "class", "inline-flex items-center justify-center h-8 w-8 rounded-lg text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/30 transition-all duration-150 active:scale-90", 3, "click", 4, "ngIf"], ["title", "Reject", "class", "inline-flex items-center justify-center h-8 w-8 rounded-lg text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/30 transition-all duration-150 active:scale-90", 3, "click", 4, "ngIf"], ["title", "Release to Pending", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "text-success-600", "dark:text-success-400", "hover:bg-success-50", "dark:hover:bg-success-900/30", "transition-all", "duration-150", "active:scale-90", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["title", "Reject", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "text-danger-600", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/30", "transition-all", "duration-150", "active:scale-90", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "text-center"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-surface-100", "dark:bg-surface-800", "mb-4"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "h-7", "w-7", "text-surface-400"], [1, "text-sm", "font-semibold", "text-surface-700", "dark:text-surface-300"], [1, "text-xs", "text-surface-400", "dark:text-surface-500", "mt-1"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "px-5", "py-4", "border-t", "border-surface-100", "dark:border-surface-800", "bg-surface-50/50", "dark:bg-surface-800/30"], [1, "flex", "items-center", "gap-2", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "px-2", "py-1", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "text-sm", "outline-none", "focus:ring-2", "focus:ring-brand-500/40", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "text-sm", "tabular-nums", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-1"], ["title", "First page", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-400", "hover:bg-white", "dark:hover:bg-surface-800", "transition", "disabled:opacity-30", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2.5", "stroke", "currentColor", 1, "h-3.5", "w-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"], ["title", "Previous page", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-400", "hover:bg-white", "dark:hover:bg-surface-800", "transition", "disabled:opacity-30", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 19.5 8.25 12l7.5-7.5"], ["title", "Next page", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-400", "hover:bg-white", "dark:hover:bg-surface-800", "transition", "disabled:opacity-30", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m8.25 4.5 7.5 7.5-7.5 7.5"], ["title", "Last page", 1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-400", "hover:bg-white", "dark:hover:bg-surface-800", "transition", "disabled:opacity-30", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"], [1, "fixed", "inset-0", "z-[10000]", "flex", "items-center", "justify-center", "p-4", "bg-black/50", "backdrop-blur-sm", "animate-fade-in", 3, "click"], [1, "relative", "bg-white", "dark:bg-surface-900", "rounded-2xl", "shadow-2xl", "shadow-black/20", "w-full", "max-w-[560px]", "max-h-[90vh]", "overflow-y-auto", "animate-slide-up", 3, "click"], [1, "sticky", "top-0", "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-800", "bg-white", "dark:bg-surface-900", "rounded-t-2xl", "z-10"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-brand-50", "dark:bg-brand-950/50"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "h-5", "w-5", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"], [1, "text-[15px]", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "font-mono", "text-surface-400", "dark:text-surface-500"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-xl", "text-surface-400", "hover:text-surface-700", "hover:bg-surface-100", "dark:hover:bg-surface-800", "transition-all", "duration-150", "active:scale-90", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18 18 6M6 6l12 12"], [1, "p-6", "space-y-5"], [1, "flex", "items-center", "gap-4", "p-4", "rounded-xl", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-100", "dark:border-surface-700"], [1, "text-center", "min-w-0", "flex-1"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "mb-0.5"], [1, "text-xl", "font-bold", "tabular-nums", "text-surface-900", "dark:text-surface-50", "truncate"], [1, "text-sm", "font-semibold", "text-surface-500"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-white", "dark:bg-surface-700", "border", "border-surface-200", "dark:border-surface-600", "shrink-0", "shadow-sm"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"], [1, "text-xl", "font-bold", "tabular-nums", "text-success-600", "dark:text-success-400", "truncate"], [1, "text-sm", "font-semibold", "text-success-500"], [1, "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "mb-3"], [1, "grid", "grid-cols-2", "gap-3"], [1, "p-3", "rounded-xl", "bg-surface-50", "dark:bg-surface-800"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "mb-1"], [1, "text-sm", "font-semibold", "text-surface-800", "dark:text-surface-200"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mt-0.5"], ["class", "p-3 rounded-xl bg-surface-50 dark:bg-surface-800", 4, "ngIf"], [1, "rounded-xl", "border", "border-surface-100", "dark:border-surface-700", "divide-y", "divide-surface-100", "dark:divide-surface-700", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-4", "py-3"], [1, "text-sm", "tabular-nums", "font-semibold", "text-surface-800", "dark:text-surface-200"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "bg-success-50/50", "dark:bg-success-900/10"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "text-sm", "tabular-nums", "font-bold", "text-success-600", "dark:text-success-400"], ["class", "flex items-center justify-between px-4 py-3", 4, "ngIf"], [1, "text-sm", "tabular-nums", "text-surface-800", "dark:text-surface-200"], ["class", "text-xs text-surface-500 dark:text-surface-400 mt-0.5", 4, "ngIf"], [1, "text-sm", "font-mono", "font-semibold", "text-surface-800", "dark:text-surface-200"], [1, "text-sm", "font-medium", "text-surface-800", "dark:text-surface-200"]], template: function AgentTransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "View and manage your transfer history");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 5);
        \u0275\u0275element(9, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " New Transaction ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 10);
        \u0275\u0275element(15, "path", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(16, "input", 12);
        \u0275\u0275listener("ngModelChange", function AgentTransactionsComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.searchDebounce.next($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 13)(18, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function AgentTransactionsComponent_Template_select_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AgentTransactionsComponent_Template_select_ngModelChange_18_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(19, "option", 15);
        \u0275\u0275text(20, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "option", 16);
        \u0275\u0275text(22, "On Hold");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 17);
        \u0275\u0275text(24, "Compliance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 18);
        \u0275\u0275text(26, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 19);
        \u0275\u0275text(28, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 20);
        \u0275\u0275text(30, "Cancelled");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 21);
        \u0275\u0275element(32, "path", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(33, "div", 23);
        \u0275\u0275elementStart(34, "div", 24)(35, "button", 25);
        \u0275\u0275listener("click", function AgentTransactionsComponent_Template_button_click_35_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 5);
        \u0275\u0275element(37, "path", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(39, "button", 25);
        \u0275\u0275listener("click", function AgentTransactionsComponent_Template_button_click_39_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(40, "svg", 5);
        \u0275\u0275element(41, "path", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " CSV ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(43, AgentTransactionsComponent_div_43_Template, 6, 0, "div", 27)(44, AgentTransactionsComponent_div_44_Template, 25, 2, "div", 28)(45, AgentTransactionsComponent_div_45_Template, 28, 12, "div", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(46, AgentTransactionsComponent_div_46_Template, 91, 38, "div", 30);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngModel", ctx.search);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
        \u0275\u0275advance(25);
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
    ], template: `<div class="space-y-5">

  <!-- Page Header -->
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-50">Transactions</h1>
      <p class="mt-0.5 text-sm text-surface-500 dark:text-surface-400">View and manage your transfer history</p>
    </div>
    <a routerLink="/agent/send"
       class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm transition-all duration-150 active:scale-95">
      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
      </svg>
      New Transaction
    </a>
  </div>

  <!-- Card -->
  <div class="rounded-2xl border border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 shadow-sm overflow-hidden">

    <!-- Toolbar -->
    <div class="flex flex-wrap items-center gap-3 px-5 py-4 border-b border-surface-100 dark:border-surface-800">

      <!-- Search -->
      <div class="relative min-w-[220px] flex-1 basis-[260px]">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-surface-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
        </svg>
        <input type="search"
               placeholder="Search by name or reference..."
               [ngModel]="search"
               (ngModelChange)="searchDebounce.next($event)"
               class="w-full pl-9 pr-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 dark:placeholder-surface-500 focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 dark:focus:border-brand-400 outline-none transition text-sm" />
      </div>

      <!-- Status Filter -->
      <div class="relative shrink-0">
        <select [(ngModel)]="statusFilter"
                (ngModelChange)="applyFilter()"
                class="appearance-none w-40 pl-3 pr-8 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 dark:focus:border-brand-400 outline-none transition text-sm font-medium cursor-pointer">
          <option value="All">All Status</option>
          <option value="OnHold">On Hold</option>
          <option value="Compliance">Compliance</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <svg class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-surface-400" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
        </svg>
      </div>

      <div class="flex-1"></div>

      <!-- Export Buttons -->
      <div class="flex items-center gap-2">
        <button (click)="exportData('excel')"
                class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-800 dark:hover:text-surface-200 transition-all duration-150 text-sm font-medium active:scale-95">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
          </svg>
          Excel
        </button>
        <button (click)="exportData('csv')"
                class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-800 dark:hover:text-surface-200 transition-all duration-150 text-sm font-medium active:scale-95">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
          </svg>
          CSV
        </button>
      </div>
    </div>

    <!-- Loading Spinner -->
    <div *ngIf="loading" class="flex flex-col items-center justify-center py-20 gap-3">
      <svg class="animate-spin h-8 w-8 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span class="text-sm text-surface-500 dark:text-surface-400">Loading transactions...</span>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto" *ngIf="!loading">
      <table class="w-full text-left text-sm">
        <thead>
          <tr class="bg-surface-50/70 dark:bg-surface-800/50">
            <th class="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 whitespace-nowrap">Reference</th>
            <th class="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Sender</th>
            <th class="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Receiver</th>
            <th class="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Send</th>
            <th class="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Receive</th>
            <th class="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 whitespace-nowrap">Service Charge</th>
            <th class="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Status</th>
            <th class="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Date</th>
            <th class="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-surface-50 dark:divide-surface-800">
          <tr *ngFor="let tx of transactions"
              class="hover:bg-surface-50/70 dark:hover:bg-surface-800/40 transition-colors duration-100 group">
            <td class="px-5 py-4 whitespace-nowrap">
              <span class="font-mono text-xs font-medium text-surface-600 dark:text-surface-400 bg-surface-100 dark:bg-surface-800 px-2 py-0.5 rounded-md">{{ tx.referenceNumber }}</span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <span class="text-[13px] font-medium text-surface-800 dark:text-surface-200">{{ tx.senderName }}</span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <span class="text-[13px] text-surface-700 dark:text-surface-300">{{ tx.receiverName }}</span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <span class="text-[13px] tabular-nums font-semibold text-surface-800 dark:text-surface-200">{{ tx.sendAmount | number:'1.2-2' }}</span>
              <span class="text-xs text-surface-400 dark:text-surface-500 ml-1">{{ tx.sendCurrency }}</span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <span class="text-[13px] tabular-nums text-surface-700 dark:text-surface-300">{{ tx.receiveAmount | number:'1.2-2' }}</span>
              <span class="text-xs text-surface-400 dark:text-surface-500 ml-1">{{ tx.receiveCurrency }}</span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <span class="text-[13px] tabular-nums font-semibold text-success-600 dark:text-success-400">{{ tx.agentCommission | number:'1.2-2' }}</span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold" [ngClass]="getStatusClass(tx.status)">
                <span class="h-1.5 w-1.5 rounded-full bg-current opacity-80"></span>
                {{ getStatusLabel(tx.status) }}
              </span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap text-xs tabular-nums text-surface-500 dark:text-surface-400">{{ tx.createdAt | date:'MMM dd, HH:mm' }}</td>
            <td class="px-5 py-4 whitespace-nowrap">
              <div class="flex items-center justify-center gap-1">
                <!-- View Details -->
                <button title="View Details"
                        (click)="viewDetail(tx)"
                        class="inline-flex items-center justify-center h-8 w-8 rounded-lg text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-all duration-150 active:scale-90">
                  <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                </button>

                <!-- Release (OnHold only) -->
                <button *ngIf="tx.status === 'OnHold'"
                        title="Release to Pending"
                        (click)="releaseTransaction(tx)"
                        class="inline-flex items-center justify-center h-8 w-8 rounded-lg text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/30 transition-all duration-150 active:scale-90">
                  <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </button>

                <!-- Reject (OnHold only) -->
                <button *ngIf="tx.status === 'OnHold'"
                        title="Reject"
                        (click)="rejectTransaction(tx)"
                        class="inline-flex items-center justify-center h-8 w-8 rounded-lg text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/30 transition-all duration-150 active:scale-90">
                  <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Empty State -->
      <div *ngIf="transactions.length === 0 && !loading"
           class="flex flex-col items-center justify-center py-16 text-center">
        <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-100 dark:bg-surface-800 mb-4">
          <svg class="h-7 w-7 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
          </svg>
        </div>
        <p class="text-sm font-semibold text-surface-700 dark:text-surface-300">No transactions found</p>
        <p class="text-xs text-surface-400 dark:text-surface-500 mt-1">Try adjusting your search or filter</p>
      </div>
    </div>

    <!-- Pagination -->
    <div *ngIf="!loading && totalCount > 0"
         class="flex flex-wrap items-center justify-between gap-4 px-5 py-4 border-t border-surface-100 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-800/30">

      <div class="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
        <span>Rows per page:</span>
        <select [ngModel]="pageSize"
                (ngModelChange)="onPageChange({ pageIndex: 0, pageSize: $event, length: totalCount, previousPageIndex: pageIndex })"
                class="px-2 py-1 rounded-lg border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 text-sm outline-none focus:ring-2 focus:ring-brand-500/40">
          <option [ngValue]="10">10</option>
          <option [ngValue]="20">20</option>
          <option [ngValue]="50">50</option>
          <option [ngValue]="100">100</option>
        </select>
      </div>

      <span class="text-sm tabular-nums text-surface-500 dark:text-surface-400">
        {{ pageIndex * pageSize + 1 }}\u2013{{ (pageIndex + 1) * pageSize > totalCount ? totalCount : (pageIndex + 1) * pageSize }} of {{ totalCount }}
      </span>

      <div class="flex items-center gap-1">
        <button title="First page"
                [disabled]="pageIndex === 0"
                (click)="onPageChange({ pageIndex: 0, pageSize: pageSize, length: totalCount, previousPageIndex: pageIndex })"
                class="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-400 hover:bg-white dark:hover:bg-surface-800 transition disabled:opacity-30 disabled:cursor-not-allowed">
          <svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"/>
          </svg>
        </button>
        <button title="Previous page"
                [disabled]="pageIndex === 0"
                (click)="onPageChange({ pageIndex: pageIndex - 1, pageSize: pageSize, length: totalCount, previousPageIndex: pageIndex })"
                class="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-400 hover:bg-white dark:hover:bg-surface-800 transition disabled:opacity-30 disabled:cursor-not-allowed">
          <svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
          </svg>
        </button>
        <button title="Next page"
                [disabled]="(pageIndex + 1) * pageSize >= totalCount"
                (click)="onPageChange({ pageIndex: pageIndex + 1, pageSize: pageSize, length: totalCount, previousPageIndex: pageIndex })"
                class="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-400 hover:bg-white dark:hover:bg-surface-800 transition disabled:opacity-30 disabled:cursor-not-allowed">
          <svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
          </svg>
        </button>
        <button title="Last page"
                [disabled]="(pageIndex + 1) * pageSize >= totalCount"
                (click)="onPageChange({ pageIndex: Math.ceil(totalCount / pageSize) - 1, pageSize: pageSize, length: totalCount, previousPageIndex: pageIndex })"
                class="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-400 hover:bg-white dark:hover:bg-surface-800 transition disabled:opacity-30 disabled:cursor-not-allowed">
          <svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"/>
          </svg>
        </button>
      </div>
    </div>

  </div>
</div>

<!-- \u2500\u2500\u2500 Transaction Detail Modal \u2500\u2500\u2500 -->
<div *ngIf="selectedTransaction"
     class="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
     (click)="closeDetail()">

  <div class="relative bg-white dark:bg-surface-900 rounded-2xl shadow-2xl shadow-black/20 w-full max-w-[560px] max-h-[90vh] overflow-y-auto animate-slide-up"
       (click)="$event.stopPropagation()">

    <!-- Modal Header -->
    <div class="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900 rounded-t-2xl z-10">
      <div class="flex items-center gap-3">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/50">
          <svg class="h-5 w-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"/>
          </svg>
        </div>
        <div>
          <h3 class="text-[15px] font-bold text-surface-900 dark:text-surface-100">Transaction Details</h3>
          <p class="text-xs font-mono text-surface-400 dark:text-surface-500">{{ selectedTransaction.referenceNumber }}</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold" [ngClass]="getStatusClass(selectedTransaction.status)">
          <span class="h-1.5 w-1.5 rounded-full bg-current opacity-80"></span>
          {{ getStatusLabel(selectedTransaction.status) }}
        </span>
        <button (click)="closeDetail()"
                class="flex h-8 w-8 items-center justify-center rounded-xl text-surface-400 hover:text-surface-700 hover:bg-surface-100 dark:hover:bg-surface-800 transition-all duration-150 active:scale-90">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="p-6 space-y-5">

      <!-- Transfer Summary Banner -->
      <div class="flex items-center gap-4 p-4 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-100 dark:border-surface-700">
        <div class="text-center min-w-0 flex-1">
          <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-0.5">You Send</p>
          <p class="text-xl font-bold tabular-nums text-surface-900 dark:text-surface-50 truncate">{{ selectedTransaction.sendAmount | number:'1.2-2' }} <span class="text-sm font-semibold text-surface-500">{{ selectedTransaction.sendCurrency }}</span></p>
        </div>
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-surface-700 border border-surface-200 dark:border-surface-600 shrink-0 shadow-sm">
          <svg class="h-4 w-4 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
          </svg>
        </div>
        <div class="text-center min-w-0 flex-1">
          <p class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-0.5">Receiver Gets</p>
          <p class="text-xl font-bold tabular-nums text-success-600 dark:text-success-400 truncate">{{ selectedTransaction.receiveAmount | number:'1.2-2' }} <span class="text-sm font-semibold text-success-500">{{ selectedTransaction.receiveCurrency }}</span></p>
        </div>
      </div>

      <!-- Parties -->
      <div>
        <p class="text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-3">Parties</p>
        <div class="grid grid-cols-2 gap-3">
          <div class="p-3 rounded-xl bg-surface-50 dark:bg-surface-800">
            <p class="text-[10px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-1">Sender</p>
            <p class="text-sm font-semibold text-surface-800 dark:text-surface-200">{{ selectedTransaction.senderName }}</p>
            <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">{{ selectedTransaction.senderCountry }}</p>
          </div>
          <div class="p-3 rounded-xl bg-surface-50 dark:bg-surface-800">
            <p class="text-[10px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-1">Receiver</p>
            <p class="text-sm font-semibold text-surface-800 dark:text-surface-200">{{ selectedTransaction.receiverName }}</p>
            <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">{{ selectedTransaction.receiverCountry }}</p>
          </div>
          <div class="p-3 rounded-xl bg-surface-50 dark:bg-surface-800" *ngIf="selectedTransaction.receiverBankName">
            <p class="text-[10px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-1">Bank</p>
            <p class="text-sm font-semibold text-surface-800 dark:text-surface-200">{{ selectedTransaction.receiverBankName }}</p>
            <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5" *ngIf="selectedTransaction.receiverBranchName">{{ selectedTransaction.receiverBranchName }}</p>
          </div>
          <div class="p-3 rounded-xl bg-surface-50 dark:bg-surface-800" *ngIf="selectedTransaction.receiverAccountNumber">
            <p class="text-[10px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-1">Account Number</p>
            <p class="text-sm font-mono font-semibold text-surface-800 dark:text-surface-200">{{ selectedTransaction.receiverAccountNumber }}</p>
          </div>
        </div>
      </div>

      <!-- Financial Details -->
      <div>
        <p class="text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-3">Financial Details</p>
        <div class="rounded-xl border border-surface-100 dark:border-surface-700 divide-y divide-surface-100 dark:divide-surface-700 overflow-hidden">
          <div class="flex items-center justify-between px-4 py-3">
            <span class="text-sm text-surface-500 dark:text-surface-400">Exchange Rate</span>
            <span class="text-sm tabular-nums font-semibold text-surface-800 dark:text-surface-200">{{ selectedTransaction.exchangeRateApplied | number:'1.4-4' }}</span>
          </div>
          <div class="flex items-center justify-between px-4 py-3">
            <span class="text-sm text-surface-500 dark:text-surface-400">Total Service Charge</span>
            <span class="text-sm tabular-nums font-semibold text-surface-800 dark:text-surface-200">{{ selectedTransaction.totalCommission | number:'1.2-2' }}</span>
          </div>
          <div class="flex items-center justify-between px-4 py-3 bg-success-50/50 dark:bg-success-900/10">
            <span class="text-sm font-medium text-surface-700 dark:text-surface-300">My Service Charge</span>
            <span class="text-sm tabular-nums font-bold text-success-600 dark:text-success-400">{{ selectedTransaction.agentCommission | number:'1.2-2' }}</span>
          </div>
          <div class="flex items-center justify-between px-4 py-3" *ngIf="selectedTransaction.paymentMethodName">
            <span class="text-sm text-surface-500 dark:text-surface-400">Payment Method</span>
            <span class="text-sm font-medium text-surface-800 dark:text-surface-200">{{ selectedTransaction.paymentMethodName }}</span>
          </div>
          <div class="flex items-center justify-between px-4 py-3" *ngIf="selectedTransaction.payoutMethodName">
            <span class="text-sm text-surface-500 dark:text-surface-400">Payout Method</span>
            <span class="text-sm font-medium text-surface-800 dark:text-surface-200">{{ selectedTransaction.payoutMethodName }}</span>
          </div>
          <div class="flex items-center justify-between px-4 py-3" *ngIf="selectedTransaction.payoutAgentName">
            <span class="text-sm text-surface-500 dark:text-surface-400">Payout Partner</span>
            <span class="text-sm font-medium text-surface-800 dark:text-surface-200">{{ selectedTransaction.payoutAgentName }}</span>
          </div>
          <div class="flex items-center justify-between px-4 py-3">
            <span class="text-sm text-surface-500 dark:text-surface-400">Date</span>
            <span class="text-sm tabular-nums text-surface-800 dark:text-surface-200">{{ selectedTransaction.createdAt | date:'dd/MM/yyyy HH:mm' }}</span>
          </div>
        </div>
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
//# sourceMappingURL=chunk-MDUN4FDY.js.map
