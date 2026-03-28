import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-FTNGEOQD.js";
import {
  NotificationService
} from "./chunk-U44UDHMQ.js";
import "./chunk-VTD77X6G.js";
import {
  ApiService
} from "./chunk-2NPUZHRJ.js";
import "./chunk-MP5DRVCF.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf
} from "./chunk-FEHYQLJK.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-XQC2OG7J.js";

// src/app/pages/admin/transaction-detail/transaction-detail.component.ts
function TransactionDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 4);
    \u0275\u0275element(2, "circle", 5)(3, "path", 6);
    \u0275\u0275elementEnd()();
  }
}
function TransactionDetailComponent_ng_container_2_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.purpose);
  }
}
function TransactionDetailComponent_ng_container_2_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.notes);
  }
}
function TransactionDetailComponent_ng_container_2_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderPhone);
  }
}
function TransactionDetailComponent_ng_container_2_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderEmail);
  }
}
function TransactionDetailComponent_ng_container_2_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "ID Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderIdType);
  }
}
function TransactionDetailComponent_ng_container_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "ID Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderIdNumber);
  }
}
function TransactionDetailComponent_ng_container_2_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverPhone);
  }
}
function TransactionDetailComponent_ng_container_2_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverEmail);
  }
}
function TransactionDetailComponent_ng_container_2_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverBankName);
  }
}
function TransactionDetailComponent_ng_container_2_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverAccountNumber);
  }
}
function TransactionDetailComponent_ng_container_2_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverBranchName);
  }
}
function TransactionDetailComponent_ng_container_2_div_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.sendingAgentName);
  }
}
function TransactionDetailComponent_ng_container_2_div_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Payout Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.payoutAgentName);
  }
}
function TransactionDetailComponent_ng_container_2_div_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.paymentMethodName);
  }
}
function TransactionDetailComponent_ng_container_2_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Payout Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.payoutMethodName);
  }
}
function TransactionDetailComponent_ng_container_2_div_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r1.txn.updatedAt, "medium"));
  }
}
function TransactionDetailComponent_ng_container_2_div_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r1.txn.completedAt, "medium"));
  }
}
function TransactionDetailComponent_ng_container_2_div_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Approved By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.approvedByUserId);
  }
}
function TransactionDetailComponent_ng_container_2_div_150_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_150_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approve());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Approve ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_div_150_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_150_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.complete());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "path", 40)(3, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Complete ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_div_150_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_150_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cancel ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_div_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, TransactionDetailComponent_ng_container_2_div_150_button_1_Template, 4, 1, "button", 34)(2, TransactionDetailComponent_ng_container_2_div_150_button_2_Template, 5, 1, "button", 35)(3, TransactionDetailComponent_ng_container_2_div_150_button_3_Template, 4, 1, "button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canApprove());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canComplete());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canCancel());
  }
}
function TransactionDetailComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7)(2, "button", 8);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 9);
    \u0275\u0275element(4, "path", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 11)(6, "h2", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 14)(11, "div", 15)(12, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 9);
    \u0275\u0275element(14, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Transaction Info ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 18)(17, "div", 19)(18, "span", 20);
    \u0275\u0275text(19, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 21);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 19)(23, "span", 20);
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 22);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 19)(28, "span", 20);
    \u0275\u0275text(29, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 23);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, TransactionDetailComponent_ng_container_2_div_33_Template, 5, 1, "div", 24)(34, TransactionDetailComponent_ng_container_2_div_34_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 15)(36, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 9);
    \u0275\u0275element(38, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Sender Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "div", 18)(41, "div", 19)(42, "span", 20);
    \u0275\u0275text(43, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 23);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, TransactionDetailComponent_ng_container_2_div_46_Template, 5, 1, "div", 24)(47, TransactionDetailComponent_ng_container_2_div_47_Template, 5, 1, "div", 24);
    \u0275\u0275elementStart(48, "div", 19)(49, "span", 20);
    \u0275\u0275text(50, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 23);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, TransactionDetailComponent_ng_container_2_div_53_Template, 5, 1, "div", 24)(54, TransactionDetailComponent_ng_container_2_div_54_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 15)(56, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(57, "svg", 9);
    \u0275\u0275element(58, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, " Receiver Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(60, "div", 18)(61, "div", 19)(62, "span", 20);
    \u0275\u0275text(63, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 23);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(66, TransactionDetailComponent_ng_container_2_div_66_Template, 5, 1, "div", 24)(67, TransactionDetailComponent_ng_container_2_div_67_Template, 5, 1, "div", 24);
    \u0275\u0275elementStart(68, "div", 19)(69, "span", 20);
    \u0275\u0275text(70, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 23);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(73, TransactionDetailComponent_ng_container_2_div_73_Template, 5, 1, "div", 24)(74, TransactionDetailComponent_ng_container_2_div_74_Template, 5, 1, "div", 24)(75, TransactionDetailComponent_ng_container_2_div_75_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 15)(77, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(78, "svg", 9);
    \u0275\u0275element(79, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, " Financial Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(81, "div", 18)(82, "div", 19)(83, "span", 20);
    \u0275\u0275text(84, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 27);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 19)(89, "span", 20);
    \u0275\u0275text(90, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 23);
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 19)(95, "span", 20);
    \u0275\u0275text(96, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "span", 28);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(100, "hr", 29);
    \u0275\u0275elementStart(101, "div", 19)(102, "span", 20);
    \u0275\u0275text(103, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "span", 23);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 19)(108, "span", 20);
    \u0275\u0275text(109, "Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "span", 23);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 19)(114, "span", 20);
    \u0275\u0275text(115, "Payout Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "span", 23);
    \u0275\u0275text(117);
    \u0275\u0275pipe(118, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "div", 19)(120, "span", 20);
    \u0275\u0275text(121, "Company Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "span", 23);
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(125, "div", 15)(126, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(127, "svg", 9);
    \u0275\u0275element(128, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(129, " Agent Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(130, "div", 18);
    \u0275\u0275template(131, TransactionDetailComponent_ng_container_2_div_131_Template, 5, 1, "div", 24)(132, TransactionDetailComponent_ng_container_2_div_132_Template, 5, 1, "div", 24)(133, TransactionDetailComponent_ng_container_2_div_133_Template, 5, 1, "div", 24)(134, TransactionDetailComponent_ng_container_2_div_134_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 15)(136, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(137, "svg", 9);
    \u0275\u0275element(138, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(139, " Timeline ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(140, "div", 18)(141, "div", 19)(142, "span", 20);
    \u0275\u0275text(143, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "span", 23);
    \u0275\u0275text(145);
    \u0275\u0275pipe(146, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(147, TransactionDetailComponent_ng_container_2_div_147_Template, 6, 4, "div", 24)(148, TransactionDetailComponent_ng_container_2_div_148_Template, 6, 4, "div", 24)(149, TransactionDetailComponent_ng_container_2_div_149_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(150, TransactionDetailComponent_ng_container_2_div_150_Template, 4, 3, "div", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.txn.referenceNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(ctx_r1.txn.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(ctx_r1.txn.status));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.txn.referenceNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(ctx_r1.txn.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(ctx_r1.txn.status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 43, ctx_r1.txn.createdAt, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.txn.purpose);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.notes);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.senderPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.senderEmail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.senderIdType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.senderIdNumber);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.receiverPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.receiverEmail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.receiverBankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.receiverAccountNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.receiverBranchName);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(87, 46, ctx_r1.txn.sendAmount, "1.2-2"), " ", ctx_r1.txn.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("1 ", ctx_r1.txn.sendCurrency, " = ", \u0275\u0275pipeBind2(93, 49, ctx_r1.txn.exchangeRateApplied, "1.4-4"), " ", ctx_r1.txn.receiveCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(99, 52, ctx_r1.txn.receiveAmount, "1.2-2"), " ", ctx_r1.txn.receiveCurrency, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(106, 55, ctx_r1.txn.totalCommission, "1.2-2"), " ", ctx_r1.txn.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(112, 58, ctx_r1.txn.agentCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(118, 61, ctx_r1.txn.payoutAgentCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(124, 64, ctx_r1.txn.companyCommission, "1.2-2"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.txn.sendingAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.payoutAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.paymentMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.payoutMethodName);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(146, 67, ctx_r1.txn.createdAt, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.txn.updatedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.completedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.approvedByUserId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canApprove() || ctx_r1.canComplete() || ctx_r1.canCancel());
  }
}
var TransactionDetailComponent = class _TransactionDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.api = inject(ApiService);
    this.notify = inject(NotificationService);
    this.txn = null;
    this.loading = true;
    this.actionLoading = false;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id)
      this.loadTransaction(id);
  }
  loadTransaction(id) {
    this.loading = true;
    this.api.getTransactionDetail(id).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.txn = res.data;
        } else {
          this.notify.error(res?.message || "Transaction not found.");
        }
        this.loading = false;
      },
      error: () => {
        this.notify.error("Failed to load transaction.");
        this.loading = false;
      }
    });
  }
  goBack() {
    this.router.navigate(["/admin/transactions"]);
  }
  approve() {
    if (!this.txn)
      return;
    this.actionLoading = true;
    this.api.approveTransaction(this.txn.id).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.txn = res.data;
          this.notify.success("Transaction approved.");
        } else {
          this.notify.error(res?.message || "Failed.");
        }
        this.actionLoading = false;
      },
      error: () => {
        this.notify.error("Server error.");
        this.actionLoading = false;
      }
    });
  }
  complete() {
    if (!this.txn)
      return;
    this.actionLoading = true;
    this.api.completeTransaction(this.txn.id).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.txn = res.data;
          this.notify.success("Transaction completed.");
        } else {
          this.notify.error(res?.message || "Failed.");
        }
        this.actionLoading = false;
      },
      error: () => {
        this.notify.error("Server error.");
        this.actionLoading = false;
      }
    });
  }
  cancel() {
    if (!this.txn)
      return;
    this.actionLoading = true;
    this.api.cancelTransaction(this.txn.id).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.txn = res.data;
          this.notify.success("Transaction cancelled.");
        } else {
          this.notify.error(res?.message || "Failed.");
        }
        this.actionLoading = false;
      },
      error: () => {
        this.notify.error("Server error.");
        this.actionLoading = false;
      }
    });
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
      case "OnHold":
        return "bg-warning-50 text-warning-600 dark:bg-warning-900/20 dark:text-warning-300";
      case "Failed":
        return "bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400";
      case "Cancelled":
        return "bg-surface-200 text-surface-600 dark:bg-surface-700 dark:text-surface-300";
      case "Compliance":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      default:
        return "";
    }
  }
  getStatusLabel(status) {
    if (status === "OnHold")
      return "On Hold";
    if (status === "Compliance")
      return "Under Review";
    return status;
  }
  canApprove() {
    return this.txn?.status === "Pending";
  }
  canComplete() {
    return this.txn?.status === "Pending" || this.txn?.status === "Approved";
  }
  canCancel() {
    return !!this.txn && this.txn.status !== "Completed" && this.txn.status !== "Cancelled" && this.txn.status !== "Failed";
  }
  static {
    this.\u0275fac = function TransactionDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TransactionDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionDetailComponent, selectors: [["app-transaction-detail"]], decls: 3, vars: 2, consts: [[1, "max-w-6xl"], ["class", "flex items-center justify-center py-16", 4, "ngIf"], [4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-16"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "h-10", "w-10", "animate-spin", "text-brand-600", "dark:text-brand-400"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "flex", "items-center", "gap-3", "mb-6"], ["title", "Back to Transactions", 1, "inline-flex", "items-center", "justify-center", "w-10", "h-10", "rounded-xl", "text-surface-500", "hover:text-surface-900", "hover:bg-surface-100", "dark:text-surface-400", "dark:hover:text-surface-100", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "w-5", "h-5"], ["fill-rule", "evenodd", "d", "M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z", "clip-rule", "evenodd"], [1, "flex", "items-center", "gap-4"], [1, "text-xl", "font-semibold", "text-surface-900", "dark:text-surface-100", "m-0"], [1, "px-3", "py-1", "rounded-full", "text-xs", "font-semibold", "uppercase", "tracking-wide", 3, "ngClass"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "xl:grid-cols-3", "gap-4", "mb-6"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "items-center", "gap-2", "text-sm", "font-semibold", "text-brand-600", "dark:text-brand-400", "mb-4"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", "clip-rule", "evenodd"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between", "items-baseline", "py-1", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "text-surface-900", "dark:text-surface-100", "font-medium", "text-sm", "font-mono"], [1, "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "text-surface-900", "dark:text-surface-100", "font-medium", "text-sm"], ["class", "flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700", 4, "ngIf"], ["d", "M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"], ["fill-rule", "evenodd", "d", "M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z", "clip-rule", "evenodd"], [1, "text-brand-700", "dark:text-brand-400", "font-bold", "text-base"], [1, "text-success-700", "dark:text-success-400", "font-bold", "text-base"], [1, "border-surface-200", "dark:border-surface-700", "my-1"], ["fill-rule", "evenodd", "d", "M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5H4zm3-11a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 5.5zm0 3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 8.5zM8.75 11a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z", "clip-rule", "evenodd"], ["class", "flex gap-3 p-4 rounded-2xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50", 4, "ngIf"], [1, "flex", "gap-3", "p-4", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-800/50"], ["class", "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-success-600 text-white hover:bg-success-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-danger-600 text-white hover:bg-danger-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm", 3, "disabled", "click", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-brand-600", "text-white", "hover:bg-brand-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "font-medium", "text-sm", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clip-rule", "evenodd"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-success-600", "text-white", "hover:bg-success-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "font-medium", "text-sm", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M12.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", "clip-rule", "evenodd"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-danger-600", "text-white", "hover:bg-danger-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "font-medium", "text-sm", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", "clip-rule", "evenodd"]], template: function TransactionDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, TransactionDetailComponent_div_1_Template, 4, 0, "div", 1)(2, TransactionDetailComponent_ng_container_2_Template, 151, 70, "ng-container", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.txn && !ctx.loading);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, DecimalPipe, DatePipe, RouterModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=transaction-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionDetailComponent, [{
    type: Component,
    args: [{ selector: "app-transaction-detail", standalone: true, imports: [
      CommonModule,
      RouterModule,
      DecimalPipe,
      DatePipe
    ], template: `<div class="max-w-6xl">
  <!-- Loading -->
  <div *ngIf="loading" class="flex items-center justify-center py-16">
    <svg class="h-10 w-10 animate-spin text-brand-600 dark:text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
  </div>

  <ng-container *ngIf="txn && !loading">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-6">
      <button
        (click)="goBack()"
        class="inline-flex items-center justify-center w-10 h-10 rounded-xl text-surface-500 hover:text-surface-900 hover:bg-surface-100 dark:text-surface-400 dark:hover:text-surface-100 dark:hover:bg-surface-700 transition-colors"
        title="Back to Transactions"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="flex items-center gap-4">
        <h2 class="text-xl font-semibold text-surface-900 dark:text-surface-100 m-0">{{ txn.referenceNumber }}</h2>
        <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide" [ngClass]="getStatusClass(txn.status)">{{ getStatusLabel(txn.status) }}</span>
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">

      <!-- Transaction Info -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <h3 class="flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Transaction Info
        </h3>
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Reference</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm font-mono">{{ txn.referenceNumber }}</span>
          </div>
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Status</span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-medium" [ngClass]="getStatusClass(txn.status)">{{ getStatusLabel(txn.status) }}</span>
          </div>
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Created</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.createdAt | date:'medium' }}</span>
          </div>
          <div *ngIf="txn.purpose" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Purpose</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.purpose }}</span>
          </div>
          <div *ngIf="txn.notes" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Notes</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.notes }}</span>
          </div>
        </div>
      </div>

      <!-- Sender Details -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <h3 class="flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
          </svg>
          Sender Details
        </h3>
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Name</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.senderName }}</span>
          </div>
          <div *ngIf="txn.senderPhone" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Phone</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.senderPhone }}</span>
          </div>
          <div *ngIf="txn.senderEmail" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Email</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.senderEmail }}</span>
          </div>
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Country</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.senderCountry }}</span>
          </div>
          <div *ngIf="txn.senderIdType" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">ID Type</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.senderIdType }}</span>
          </div>
          <div *ngIf="txn.senderIdNumber" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">ID Number</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm font-mono">{{ txn.senderIdNumber }}</span>
          </div>
        </div>
      </div>

      <!-- Receiver Details -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <h3 class="flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
          </svg>
          Receiver Details
        </h3>
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Name</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.receiverName }}</span>
          </div>
          <div *ngIf="txn.receiverPhone" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Phone</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.receiverPhone }}</span>
          </div>
          <div *ngIf="txn.receiverEmail" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Email</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.receiverEmail }}</span>
          </div>
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Country</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.receiverCountry }}</span>
          </div>
          <div *ngIf="txn.receiverBankName" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Bank</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.receiverBankName }}</span>
          </div>
          <div *ngIf="txn.receiverAccountNumber" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Account</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm font-mono">{{ txn.receiverAccountNumber }}</span>
          </div>
          <div *ngIf="txn.receiverBranchName" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Branch</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.receiverBranchName }}</span>
          </div>
        </div>
      </div>

      <!-- Financial Details -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <h3 class="flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clip-rule="evenodd" />
          </svg>
          Financial Details
        </h3>
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Send Amount</span>
            <span class="text-brand-700 dark:text-brand-400 font-bold text-base">{{ txn.sendAmount | number:'1.2-2' }} {{ txn.sendCurrency }}</span>
          </div>
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Exchange Rate</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">1 {{ txn.sendCurrency }} = {{ txn.exchangeRateApplied | number:'1.4-4' }} {{ txn.receiveCurrency }}</span>
          </div>
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Receive Amount</span>
            <span class="text-success-700 dark:text-success-400 font-bold text-base">{{ txn.receiveAmount | number:'1.2-2' }} {{ txn.receiveCurrency }}</span>
          </div>
          <hr class="border-surface-200 dark:border-surface-700 my-1">
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Total Service Charge</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.totalCommission | number:'1.2-2' }} {{ txn.sendCurrency }}</span>
          </div>
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Agent Service Charge</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.agentCommission | number:'1.2-2' }}</span>
          </div>
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Payout Agent Service Charge</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.payoutAgentCommission | number:'1.2-2' }}</span>
          </div>
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Company Service Charge</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.companyCommission | number:'1.2-2' }}</span>
          </div>
        </div>
      </div>

      <!-- Agent Details -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <h3 class="flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5H4zm3-11a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 5.5zm0 3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 8.5zM8.75 11a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" clip-rule="evenodd" />
          </svg>
          Agent Details
        </h3>
        <div class="flex flex-col gap-2">
          <div *ngIf="txn.sendingAgentName" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Sending Agent</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.sendingAgentName }}</span>
          </div>
          <div *ngIf="txn.payoutAgentName" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Payout Agent</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.payoutAgentName }}</span>
          </div>
          <div *ngIf="txn.paymentMethodName" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Payment Method</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.paymentMethodName }}</span>
          </div>
          <div *ngIf="txn.payoutMethodName" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Payout Method</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.payoutMethodName }}</span>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <h3 class="flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
          </svg>
          Timeline
        </h3>
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Created</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.createdAt | date:'medium' }}</span>
          </div>
          <div *ngIf="txn.updatedAt" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Last Updated</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.updatedAt | date:'medium' }}</span>
          </div>
          <div *ngIf="txn.completedAt" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Completed</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.completedAt | date:'medium' }}</span>
          </div>
          <div *ngIf="txn.approvedByUserId" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Approved By</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm font-mono">{{ txn.approvedByUserId }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Action Buttons -->
    <div *ngIf="canApprove() || canComplete() || canCancel()"
         class="flex gap-3 p-4 rounded-2xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
      <button
        *ngIf="canApprove()"
        (click)="approve()"
        [disabled]="actionLoading"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>
        Approve
      </button>
      <button
        *ngIf="canComplete()"
        (click)="complete()"
        [disabled]="actionLoading"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-success-600 text-white hover:bg-success-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          <path fill-rule="evenodd" d="M12.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
        Complete
      </button>
      <button
        *ngIf="canCancel()"
        (click)="cancel()"
        [disabled]="actionLoading"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-danger-600 text-white hover:bg-danger-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
        </svg>
        Cancel
      </button>
    </div>

  </ng-container>
</div>
`, styles: ["/* src/app/pages/admin/transaction-detail/transaction-detail.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=transaction-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionDetailComponent, { className: "TransactionDetailComponent", filePath: "src/app/pages/admin/transaction-detail/transaction-detail.component.ts", lineNumber: 20 });
})();
export {
  TransactionDetailComponent
};
//# sourceMappingURL=chunk-2M4FCF6Q.js.map
