import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-IXW56OZ7.js";
import {
  ExportService
} from "./chunk-BWFLUKJM.js";
import {
  MatChipsModule
} from "./chunk-IHTO5KXG.js";
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
import {
  RouterLink,
  RouterModule
} from "./chunk-32GPHBG7.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-6JH6Y4IN.js";
import {
  MatOption
} from "./chunk-4RZM2DGZ.js";
import "./chunk-Q6H4NCRS.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-4T44KS6V.js";
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
  MatPrefix
} from "./chunk-ZCHVZ7GG.js";
import {
  ApiService
} from "./chunk-2RUHVO6L.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgModel
} from "./chunk-WDVIFEQ7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MK4SB477.js";
import {
  AuthStateService
} from "./chunk-GPY2JV2J.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf
} from "./chunk-MZ37WZKD.js";
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
} from "./chunk-BKSYICRS.js";

// src/app/pages/agent/transactions/agent-transactions.component.ts
var _c0 = () => [10, 20, 50, 100];
function AgentTransactionsComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_42_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Reference");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_42_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r1.referenceNumber);
  }
}
function AgentTransactionsComponent_div_42_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Sender");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_42_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r2.senderName);
  }
}
function AgentTransactionsComponent_div_42_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Receiver");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_42_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r3.receiverName);
  }
}
function AgentTransactionsComponent_div_42_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Send");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_42_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
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
function AgentTransactionsComponent_div_42_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Receive");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_42_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
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
function AgentTransactionsComponent_div_42_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "My Service Charge");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_42_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42)(1, "span", 44);
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
function AgentTransactionsComponent_div_42_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_42_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r7 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r7.getStatusClass(tx_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r7.getStatusLabel(tx_r7.status), " ");
  }
}
function AgentTransactionsComponent_div_42_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_42_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
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
function AgentTransactionsComponent_div_42_th_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_42_td_28_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_42_td_28_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const tx_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.releaseTransaction(tx_r11));
    });
    \u0275\u0275elementStart(1, "mat-icon", 52);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AgentTransactionsComponent_div_42_td_28_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_42_td_28_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const tx_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.rejectTransaction(tx_r11));
    });
    \u0275\u0275elementStart(1, "mat-icon", 54);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function AgentTransactionsComponent_div_42_td_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 46)(1, "button", 47);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_42_td_28_Template_button_click_1_listener() {
      const tx_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.viewDetail(tx_r11));
    });
    \u0275\u0275elementStart(2, "mat-icon", 48);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AgentTransactionsComponent_div_42_td_28_button_4_Template, 3, 0, "button", 49)(5, AgentTransactionsComponent_div_42_td_28_button_5_Template, 3, 0, "button", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", tx_r11.status === "OnHold");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tx_r11.status === "OnHold");
  }
}
function AgentTransactionsComponent_div_42_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 55);
  }
}
function AgentTransactionsComponent_div_42_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
function AgentTransactionsComponent_div_42_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " No transactions found. ");
    \u0275\u0275elementEnd();
  }
}
function AgentTransactionsComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "table", 25);
    \u0275\u0275elementContainerStart(2, 26);
    \u0275\u0275template(3, AgentTransactionsComponent_div_42_th_3_Template, 2, 0, "th", 27)(4, AgentTransactionsComponent_div_42_td_4_Template, 3, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 29);
    \u0275\u0275template(6, AgentTransactionsComponent_div_42_th_6_Template, 2, 0, "th", 27)(7, AgentTransactionsComponent_div_42_td_7_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 30);
    \u0275\u0275template(9, AgentTransactionsComponent_div_42_th_9_Template, 2, 0, "th", 27)(10, AgentTransactionsComponent_div_42_td_10_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 31);
    \u0275\u0275template(12, AgentTransactionsComponent_div_42_th_12_Template, 2, 0, "th", 27)(13, AgentTransactionsComponent_div_42_td_13_Template, 3, 5, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 32);
    \u0275\u0275template(15, AgentTransactionsComponent_div_42_th_15_Template, 2, 0, "th", 27)(16, AgentTransactionsComponent_div_42_td_16_Template, 3, 5, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 33);
    \u0275\u0275template(18, AgentTransactionsComponent_div_42_th_18_Template, 2, 0, "th", 27)(19, AgentTransactionsComponent_div_42_td_19_Template, 4, 4, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 34);
    \u0275\u0275template(21, AgentTransactionsComponent_div_42_th_21_Template, 2, 0, "th", 27)(22, AgentTransactionsComponent_div_42_td_22_Template, 3, 2, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(23, 35);
    \u0275\u0275template(24, AgentTransactionsComponent_div_42_th_24_Template, 2, 0, "th", 27)(25, AgentTransactionsComponent_div_42_td_25_Template, 3, 4, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(26, 36);
    \u0275\u0275template(27, AgentTransactionsComponent_div_42_th_27_Template, 2, 0, "th", 27)(28, AgentTransactionsComponent_div_42_td_28_Template, 6, 2, "td", 37);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(29, AgentTransactionsComponent_div_42_tr_29_Template, 1, 0, "tr", 38)(30, AgentTransactionsComponent_div_42_tr_30_Template, 1, 0, "tr", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, AgentTransactionsComponent_div_42_div_31_Template, 2, 0, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r7.transactions);
    \u0275\u0275advance(28);
    \u0275\u0275property("matHeaderRowDef", ctx_r7.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r7.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.transactions.length === 0 && !ctx_r7.loading);
  }
}
function AgentTransactionsComponent_div_44_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 64);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r7.selectedTransaction.receiverBankName);
  }
}
function AgentTransactionsComponent_div_44_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 64);
    \u0275\u0275text(2, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r7.selectedTransaction.receiverAccountNumber);
  }
}
function AgentTransactionsComponent_div_44_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 64);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r7.selectedTransaction.receiverBranchName);
  }
}
function AgentTransactionsComponent_div_44_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 64);
    \u0275\u0275text(2, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r7.selectedTransaction.paymentMethodName);
  }
}
function AgentTransactionsComponent_div_44_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 64);
    \u0275\u0275text(2, "Payout Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r7.selectedTransaction.payoutMethodName);
  }
}
function AgentTransactionsComponent_div_44_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 64);
    \u0275\u0275text(2, "Payout Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r7.selectedTransaction.payoutAgentName);
  }
}
function AgentTransactionsComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_44_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_44_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "h3");
    \u0275\u0275text(4, "Transaction Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function AgentTransactionsComponent_div_44_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.closeDetail());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 62)(9, "div", 63)(10, "span", 64);
    \u0275\u0275text(11, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 65);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 63)(15, "span", 64);
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 45);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 63)(20, "span", 64);
    \u0275\u0275text(21, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 66);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 63)(25, "span", 64);
    \u0275\u0275text(26, "Sender Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 66);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 63)(30, "span", 64);
    \u0275\u0275text(31, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 66);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 63)(35, "span", 64);
    \u0275\u0275text(36, "Receiver Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 66);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, AgentTransactionsComponent_div_44_div_39_Template, 5, 1, "div", 67)(40, AgentTransactionsComponent_div_44_div_40_Template, 5, 1, "div", 67)(41, AgentTransactionsComponent_div_44_div_41_Template, 5, 1, "div", 67);
    \u0275\u0275elementStart(42, "div", 63)(43, "span", 64);
    \u0275\u0275text(44, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 66);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(48, "hr", 68);
    \u0275\u0275elementStart(49, "div", 62)(50, "div", 63)(51, "span", 64);
    \u0275\u0275text(52, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 69);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 63)(57, "span", 64);
    \u0275\u0275text(58, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 69);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 63)(63, "span", 64);
    \u0275\u0275text(64, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 66);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 63)(69, "span", 64);
    \u0275\u0275text(70, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 66);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 63)(75, "span", 64);
    \u0275\u0275text(76, "My Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 70);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(80, AgentTransactionsComponent_div_44_div_80_Template, 5, 1, "div", 67)(81, AgentTransactionsComponent_div_44_div_81_Template, 5, 1, "div", 67)(82, AgentTransactionsComponent_div_44_div_82_Template, 5, 1, "div", 67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r7.selectedTransaction.referenceNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r7.getStatusClass(ctx_r7.selectedTransaction.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r7.getStatusLabel(ctx_r7.selectedTransaction.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r7.selectedTransaction.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r7.selectedTransaction.senderCountry);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r7.selectedTransaction.receiverName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r7.selectedTransaction.receiverCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.selectedTransaction.receiverBankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.selectedTransaction.receiverAccountNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.selectedTransaction.receiverBranchName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 21, ctx_r7.selectedTransaction.createdAt, "yyyy-MM-dd HH:mm"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(55, 24, ctx_r7.selectedTransaction.sendAmount, "1.2-2"), " ", ctx_r7.selectedTransaction.sendCurrency, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(61, 27, ctx_r7.selectedTransaction.receiveAmount, "1.2-2"), " ", ctx_r7.selectedTransaction.receiveCurrency, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 30, ctx_r7.selectedTransaction.exchangeRateApplied, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 33, ctx_r7.selectedTransaction.totalCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 36, ctx_r7.selectedTransaction.agentCommission, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r7.selectedTransaction.paymentMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.selectedTransaction.payoutMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.selectedTransaction.payoutAgentName);
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
    this.displayedColumns = [
      "referenceNumber",
      "sender",
      "receiver",
      "sendAmount",
      "receiveAmount",
      "commission",
      "status",
      "createdAt",
      "actions"
    ];
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
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
        return "status-completed";
      case "Pending":
        return "status-pending";
      case "Approved":
      case "Processing":
        return "status-processing";
      case "Cancelled":
      case "Failed":
        return "status-failed";
      case "OnHold":
        return "status-onhold";
      case "Compliance":
        return "status-compliance";
      default:
        return "status-default";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentTransactionsComponent, selectors: [["app-agent-transactions"]], decls: 45, vars: 10, consts: [[1, "agent-transactions"], [1, "page-title"], ["appearance", "outlined", 1, "transactions-card"], [1, "toolbar"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", 3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "status-filter"], [3, "ngModelChange", "ngModel"], ["value", "All"], ["value", "OnHold"], ["value", "Compliance"], ["value", "Pending"], ["value", "Completed"], ["value", "Cancelled"], [1, "spacer"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", "routerLink", "/agent/send"], ["class", "loading-container", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["class", "detail-overlay", 3, "click", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-responsive"], ["mat-table", "", 1, "transactions-table", 3, "dataSource"], ["matColumnDef", "referenceNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sender"], ["matColumnDef", "receiver"], ["matColumnDef", "sendAmount"], ["matColumnDef", "receiveAmount"], ["matColumnDef", "commission"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "actions-cell", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-text", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "mono-text"], [1, "commission-text"], [1, "status-chip", 3, "ngClass"], ["mat-cell", "", 1, "actions-cell"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], [1, "action-view"], ["mat-icon-button", "", "matTooltip", "Release to Pending", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Reject", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Release to Pending", 3, "click"], [1, "action-approve"], ["mat-icon-button", "", "matTooltip", "Reject", 3, "click"], [1, "action-reject"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-text"], [1, "detail-overlay", 3, "click"], [1, "detail-popup", 3, "click"], [1, "detail-header"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value", "mono-text"], [1, "detail-value"], ["class", "detail-item", 4, "ngIf"], [1, "detail-divider"], [1, "detail-value", "detail-bold"], [1, "detail-value", "commission-text"]], template: function AgentTransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "My Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-card", 2)(4, "mat-card-content")(5, "div", 3)(6, "mat-form-field", 4)(7, "mat-icon", 5);
        \u0275\u0275text(8, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-label");
        \u0275\u0275text(10, "Search transactions...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function AgentTransactionsComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AgentTransactionsComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.searchDebounce.next($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "mat-form-field", 7)(13, "mat-label");
        \u0275\u0275text(14, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function AgentTransactionsComponent_Template_mat_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AgentTransactionsComponent_Template_mat_select_ngModelChange_15_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(16, "mat-option", 9);
        \u0275\u0275text(17, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-option", 10);
        \u0275\u0275text(19, "On Hold");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-option", 11);
        \u0275\u0275text(21, "Compliance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-option", 12);
        \u0275\u0275text(23, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-option", 13);
        \u0275\u0275text(25, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 14);
        \u0275\u0275text(27, "Cancelled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(28, "span", 15);
        \u0275\u0275elementStart(29, "button", 16);
        \u0275\u0275listener("click", function AgentTransactionsComponent_Template_button_click_29_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275elementStart(30, "mat-icon");
        \u0275\u0275text(31, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 16);
        \u0275\u0275listener("click", function AgentTransactionsComponent_Template_button_click_33_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275elementStart(34, "mat-icon");
        \u0275\u0275text(35, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "a", 17)(38, "mat-icon");
        \u0275\u0275text(39, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " New Transaction ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, AgentTransactionsComponent_div_41_Template, 2, 0, "div", 18)(42, AgentTransactionsComponent_div_42_Template, 32, 4, "div", 19);
        \u0275\u0275elementStart(43, "mat-paginator", 20);
        \u0275\u0275listener("page", function AgentTransactionsComponent_Template_mat_paginator_page_43_listener($event) {
          return ctx.onPageChange($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(44, AgentTransactionsComponent_div_44_Template, 83, 39, "div", 21);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
        \u0275\u0275advance(26);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("length", ctx.totalCount)("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex)("pageSizeOptions", \u0275\u0275pureFunction0(9, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedTransaction);
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
      MatButton,
      MatIconButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatChipsModule,
      MatPaginatorModule,
      MatPaginator,
      MatTooltipModule,
      MatTooltip
    ], styles: ['\n\n.agent-transactions[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.alert-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.875rem;\n}\n.alert-message.alert-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n}\n.alert-message.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n  border: 1px solid #ef9a9a;\n}\n.alert-message.alert-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n  border: 1px solid #ffcc80;\n}\n.alert-message[_ngcontent-%COMP%]   .alert-close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: 8px;\n}\n.error-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.875rem;\n}\n.error-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.transactions-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n.transactions-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-field[_ngcontent-%COMP%] {\n  min-width: 240px;\n  flex: 1 1 300px;\n}\n.status-filter[_ngcontent-%COMP%] {\n  width: 160px;\n  flex-shrink: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.transactions-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-column-actions[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-align: center;\n  width: 140px;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.mono-text[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.commission-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.empty-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 0;\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.action-view[_ngcontent-%COMP%] {\n  color: #1565c0;\n}\n.action-approve[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.action-reject[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-onhold[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.status-compliance[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.detail-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.detail-popup[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  width: 600px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n  z-index: 10001;\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.detail-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.25rem;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(0, 0, 0, 0.54);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.938rem;\n}\n.detail-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.detail-divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  margin: 16px 0;\n}\n.dark-mode[_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .alert-message.alert-success[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .alert-message.alert-success[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 50, 0.15);\n  color: #4ade80;\n  border-color: rgba(46, 125, 50, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .alert-message.alert-error[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .alert-message.alert-error[_ngcontent-%COMP%] {\n  background: rgba(198, 40, 40, 0.15);\n  color: #fca5a5;\n  border-color: rgba(198, 40, 40, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .alert-message.alert-warning[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .alert-message.alert-warning[_ngcontent-%COMP%] {\n  background: rgba(230, 81, 0, 0.15);\n  color: #fb923c;\n  border-color: rgba(230, 81, 0, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .error-alert[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .error-alert[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: rgba(220, 38, 38, 0.3);\n  color: #fca5a5;\n}\n.dark-mode[_nghost-%COMP%]   .transactions-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .transactions-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  background: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .transactions-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.dark-mode[_nghost-%COMP%]   .commission-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .commission-text[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.dark-mode[_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .action-view[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .action-view[_ngcontent-%COMP%] {\n  color: #60a5fa;\n}\n.dark-mode[_nghost-%COMP%]   .action-approve[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .action-approve[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.dark-mode[_nghost-%COMP%]   .action-reject[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .action-reject[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.dark-mode[_nghost-%COMP%]   .status-pending[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-pending[_ngcontent-%COMP%] {\n  background: rgba(230, 81, 0, 0.2);\n  color: #fb923c;\n}\n.dark-mode[_nghost-%COMP%]   .status-processing[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-processing[_ngcontent-%COMP%] {\n  background: rgba(21, 101, 192, 0.2);\n  color: #60a5fa;\n}\n.dark-mode[_nghost-%COMP%]   .status-completed[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-completed[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 50, 0.2);\n  color: #4ade80;\n}\n.dark-mode[_nghost-%COMP%]   .status-failed[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-failed[_ngcontent-%COMP%] {\n  background: rgba(198, 40, 40, 0.2);\n  color: #fca5a5;\n}\n.dark-mode[_nghost-%COMP%]   .status-onhold[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-onhold[_ngcontent-%COMP%] {\n  background: rgba(106, 27, 154, 0.2);\n  color: #c084fc;\n}\n.dark-mode[_nghost-%COMP%]   .status-compliance[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-compliance[_ngcontent-%COMP%] {\n  background: rgba(245, 127, 23, 0.2);\n  color: #fbbf24;\n}\n.dark-mode[_nghost-%COMP%]   .status-default[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-default[_ngcontent-%COMP%] {\n  background: rgba(97, 97, 97, 0.2);\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .detail-popup[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .detail-popup[_ngcontent-%COMP%] {\n  background: #1e293b;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n}\n.dark-mode[_nghost-%COMP%]   .detail-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .detail-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .detail-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .detail-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .detail-divider[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .detail-divider[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.08);\n}\n@media (max-width: 600px) {\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    min-width: 100%;\n    flex: 1;\n  }\n  .status-filter[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .spacer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=agent-transactions.component.css.map */'] });
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
      MatSelectModule,
      MatProgressSpinnerModule,
      MatChipsModule,
      MatPaginatorModule,
      MatTooltipModule,
      DecimalPipe,
      DatePipe
    ], template: `<div class="agent-transactions">
  <h2 class="page-title">My Transactions</h2>

  <mat-card class="transactions-card" appearance="outlined">
    <mat-card-content>
      <!-- Toolbar -->
      <div class="toolbar">
        <mat-form-field appearance="outline" class="search-field">
          <mat-icon matPrefix>search</mat-icon>
          <mat-label>Search transactions...</mat-label>
          <input matInput [(ngModel)]="search" (ngModelChange)="searchDebounce.next($event)" />
        </mat-form-field>
        <mat-form-field appearance="outline" class="status-filter">
          <mat-label>Status</mat-label>
          <mat-select [(ngModel)]="statusFilter" (ngModelChange)="applyFilter()">
            <mat-option value="All">All</mat-option>
            <mat-option value="OnHold">On Hold</mat-option>
            <mat-option value="Compliance">Compliance</mat-option>
            <mat-option value="Pending">Pending</mat-option>
            <mat-option value="Completed">Completed</mat-option>
            <mat-option value="Cancelled">Cancelled</mat-option>
          </mat-select>
        </mat-form-field>
        <span class="spacer"></span>
        <button mat-stroked-button (click)="exportData('excel')">
          <mat-icon>download</mat-icon> Excel
        </button>
        <button mat-stroked-button (click)="exportData('csv')">
          <mat-icon>download</mat-icon> CSV
        </button>
        <a mat-flat-button color="primary" routerLink="/agent/send">
          <mat-icon>add</mat-icon>
          New Transaction
        </a>
      </div>

      <!-- Loading -->
      <div *ngIf="loading" class="loading-container">
        <mat-spinner diameter="40"></mat-spinner>
      </div>

      <!-- Table -->
      <div class="table-responsive" *ngIf="!loading">
        <table mat-table [dataSource]="transactions" class="transactions-table">
          <!-- Reference Number -->
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
            <td mat-cell *matCellDef="let tx">{{ tx.receiverName }}</td>
          </ng-container>

          <!-- Send Amount -->
          <ng-container matColumnDef="sendAmount">
            <th mat-header-cell *matHeaderCellDef>Send</th>
            <td mat-cell *matCellDef="let tx">
              {{ tx.sendAmount | number:'1.2-2' }} {{ tx.sendCurrency }}
            </td>
          </ng-container>

          <!-- Receive Amount -->
          <ng-container matColumnDef="receiveAmount">
            <th mat-header-cell *matHeaderCellDef>Receive</th>
            <td mat-cell *matCellDef="let tx">
              {{ tx.receiveAmount | number:'1.2-2' }} {{ tx.receiveCurrency }}
            </td>
          </ng-container>

          <!-- Commission -->
          <ng-container matColumnDef="commission">
            <th mat-header-cell *matHeaderCellDef>My Service Charge</th>
            <td mat-cell *matCellDef="let tx">
              <span class="commission-text">{{ tx.agentCommission | number:'1.2-2' }}</span>
            </td>
          </ng-container>

          <!-- Status -->
          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef>Status</th>
            <td mat-cell *matCellDef="let tx">
              <span class="status-chip" [ngClass]="getStatusClass(tx.status)">
                {{ getStatusLabel(tx.status) }}
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

          <!-- Actions -->
          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef>Actions</th>
            <td mat-cell *matCellDef="let tx" class="actions-cell">
              <!-- View Details (always) -->
              <button mat-icon-button matTooltip="View Details" (click)="viewDetail(tx)">
                <mat-icon class="action-view">visibility</mat-icon>
              </button>

              <!-- Process/Release (OnHold only \u2014 Compliance goes through Compliance Alerts) -->
              <button
                *ngIf="tx.status === 'OnHold'"
                mat-icon-button
                matTooltip="Release to Pending"
                (click)="releaseTransaction(tx)"
              >
                <mat-icon class="action-approve">check_circle</mat-icon>
              </button>

              <!-- Reject (OnHold only) -->
              <button
                *ngIf="tx.status === 'OnHold'"
                mat-icon-button
                matTooltip="Reject"
                (click)="rejectTransaction(tx)"
              >
                <mat-icon class="action-reject">cancel</mat-icon>
              </button>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>

        <!-- Empty State -->
        <div *ngIf="transactions.length === 0 && !loading" class="empty-text">
          No transactions found.
        </div>
      </div>

      <!-- Paginator -->
      <mat-paginator [length]="totalCount"
                     [pageSize]="pageSize"
                     [pageIndex]="pageIndex"
                     [pageSizeOptions]="[10, 20, 50, 100]"
                     (page)="onPageChange($event)"
                     showFirstLastButtons>
      </mat-paginator>
    </mat-card-content>
  </mat-card>
</div>

<!-- Transaction Detail Overlay -->
<div *ngIf="selectedTransaction" class="detail-overlay" (click)="closeDetail()">
  <div class="detail-popup" (click)="$event.stopPropagation()">
    <div class="detail-header">
      <h3>Transaction Details</h3>
      <button mat-icon-button (click)="closeDetail()">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <div class="detail-grid">
      <div class="detail-item">
        <span class="detail-label">Reference</span>
        <span class="detail-value mono-text">{{ selectedTransaction.referenceNumber }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Status</span>
        <span class="status-chip" [ngClass]="getStatusClass(selectedTransaction.status)">
          {{ getStatusLabel(selectedTransaction.status) }}
        </span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Sender</span>
        <span class="detail-value">{{ selectedTransaction.senderName }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Sender Country</span>
        <span class="detail-value">{{ selectedTransaction.senderCountry }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Receiver</span>
        <span class="detail-value">{{ selectedTransaction.receiverName }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Receiver Country</span>
        <span class="detail-value">{{ selectedTransaction.receiverCountry }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedTransaction.receiverBankName">
        <span class="detail-label">Bank</span>
        <span class="detail-value">{{ selectedTransaction.receiverBankName }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedTransaction.receiverAccountNumber">
        <span class="detail-label">Account Number</span>
        <span class="detail-value">{{ selectedTransaction.receiverAccountNumber }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedTransaction.receiverBranchName">
        <span class="detail-label">Branch</span>
        <span class="detail-value">{{ selectedTransaction.receiverBranchName }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Date</span>
        <span class="detail-value">{{ selectedTransaction.createdAt | date:'yyyy-MM-dd HH:mm' }}</span>
      </div>
    </div>

    <hr class="detail-divider" />

    <div class="detail-grid">
      <div class="detail-item">
        <span class="detail-label">Send Amount</span>
        <span class="detail-value detail-bold">
          {{ selectedTransaction.sendAmount | number:'1.2-2' }} {{ selectedTransaction.sendCurrency }}
        </span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Receive Amount</span>
        <span class="detail-value detail-bold">
          {{ selectedTransaction.receiveAmount | number:'1.2-2' }} {{ selectedTransaction.receiveCurrency }}
        </span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Exchange Rate</span>
        <span class="detail-value">{{ selectedTransaction.exchangeRateApplied | number:'1.4-4' }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Total Service Charge</span>
        <span class="detail-value">{{ selectedTransaction.totalCommission | number:'1.2-2' }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">My Service Charge</span>
        <span class="detail-value commission-text">{{ selectedTransaction.agentCommission | number:'1.2-2' }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedTransaction.paymentMethodName">
        <span class="detail-label">Payment Method</span>
        <span class="detail-value">{{ selectedTransaction.paymentMethodName }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedTransaction.payoutMethodName">
        <span class="detail-label">Payout Method</span>
        <span class="detail-value">{{ selectedTransaction.payoutMethodName }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedTransaction.payoutAgentName">
        <span class="detail-label">Payout Partner</span>
        <span class="detail-value">{{ selectedTransaction.payoutAgentName }}</span>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/pages/agent/transactions/agent-transactions.component.scss */\n.agent-transactions {\n  padding: 0;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.alert-message {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.875rem;\n}\n.alert-message.alert-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n}\n.alert-message.alert-error {\n  background: #ffebee;\n  color: #c62828;\n  border: 1px solid #ef9a9a;\n}\n.alert-message.alert-warning {\n  background: #fff3e0;\n  color: #e65100;\n  border: 1px solid #ffcc80;\n}\n.alert-message .alert-close {\n  flex-shrink: 0;\n  margin-left: 8px;\n}\n.error-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.875rem;\n}\n.error-alert mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.transactions-card {\n  border-radius: 12px !important;\n}\n.transactions-card mat-card-content {\n  padding: 24px !important;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-field {\n  min-width: 240px;\n  flex: 1 1 300px;\n}\n.status-filter {\n  width: 160px;\n  flex-shrink: 0;\n}\n.spacer {\n  flex: 1;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-responsive {\n  overflow-x: auto;\n}\n.transactions-table {\n  width: 100%;\n}\n.transactions-table .mat-mdc-header-cell {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.transactions-table .mat-mdc-cell {\n  font-size: 0.875rem;\n}\n.transactions-table .mat-mdc-row:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.transactions-table .mat-column-actions {\n  white-space: nowrap;\n  text-align: center;\n  width: 140px;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.mono-text {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.commission-text {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.empty-text {\n  text-align: center;\n  padding: 32px 0;\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.action-view {\n  color: #1565c0;\n}\n.action-approve {\n  color: #2e7d32;\n}\n.action-reject {\n  color: #d32f2f;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.status-completed {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-pending {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-processing {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-failed {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-onhold {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.status-compliance {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.detail-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.detail-popup {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  width: 600px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n  z-index: 10001;\n}\n.detail-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.detail-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.25rem;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label {\n  font-size: 0.75rem;\n  color: rgba(0, 0, 0, 0.54);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-value {\n  font-size: 0.938rem;\n}\n.detail-bold {\n  font-weight: 700;\n}\n.detail-divider {\n  border: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  margin: 16px 0;\n}\n:host-context(.dark-mode) .page-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .alert-message.alert-success {\n  background: rgba(46, 125, 50, 0.15);\n  color: #4ade80;\n  border-color: rgba(46, 125, 50, 0.3);\n}\n:host-context(.dark-mode) .alert-message.alert-error {\n  background: rgba(198, 40, 40, 0.15);\n  color: #fca5a5;\n  border-color: rgba(198, 40, 40, 0.3);\n}\n:host-context(.dark-mode) .alert-message.alert-warning {\n  background: rgba(230, 81, 0, 0.15);\n  color: #fb923c;\n  border-color: rgba(230, 81, 0, 0.3);\n}\n:host-context(.dark-mode) .error-alert {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: rgba(220, 38, 38, 0.3);\n  color: #fca5a5;\n}\n:host-context(.dark-mode) .transactions-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .transactions-table .mat-mdc-header-cell {\n  color: #94a3b8;\n  background: #334155;\n}\n:host-context(.dark-mode) .transactions-table .mat-mdc-row:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n:host-context(.dark-mode) .commission-text {\n  color: #4ade80;\n}\n:host-context(.dark-mode) .empty-text {\n  color: #64748b;\n}\n:host-context(.dark-mode) .action-view {\n  color: #60a5fa;\n}\n:host-context(.dark-mode) .action-approve {\n  color: #4ade80;\n}\n:host-context(.dark-mode) .action-reject {\n  color: #f87171;\n}\n:host-context(.dark-mode) .status-pending {\n  background: rgba(230, 81, 0, 0.2);\n  color: #fb923c;\n}\n:host-context(.dark-mode) .status-processing {\n  background: rgba(21, 101, 192, 0.2);\n  color: #60a5fa;\n}\n:host-context(.dark-mode) .status-completed {\n  background: rgba(46, 125, 50, 0.2);\n  color: #4ade80;\n}\n:host-context(.dark-mode) .status-failed {\n  background: rgba(198, 40, 40, 0.2);\n  color: #fca5a5;\n}\n:host-context(.dark-mode) .status-onhold {\n  background: rgba(106, 27, 154, 0.2);\n  color: #c084fc;\n}\n:host-context(.dark-mode) .status-compliance {\n  background: rgba(245, 127, 23, 0.2);\n  color: #fbbf24;\n}\n:host-context(.dark-mode) .status-default {\n  background: rgba(97, 97, 97, 0.2);\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .detail-popup {\n  background: #1e293b;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n}\n:host-context(.dark-mode) .detail-header h3 {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .detail-label {\n  color: #64748b;\n}\n:host-context(.dark-mode) .detail-value {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .detail-divider {\n  border-top-color: rgba(255, 255, 255, 0.08);\n}\n@media (max-width: 600px) {\n  .toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-field {\n    min-width: 100%;\n    flex: 1;\n  }\n  .status-filter {\n    width: 100%;\n  }\n  .spacer {\n    display: none;\n  }\n}\n/*# sourceMappingURL=agent-transactions.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentTransactionsComponent, { className: "AgentTransactionsComponent", filePath: "src/app/pages/agent/transactions/agent-transactions.component.ts", lineNumber: 48 });
})();
export {
  AgentTransactionsComponent
};
//# sourceMappingURL=chunk-X5WE3VWA.js.map
