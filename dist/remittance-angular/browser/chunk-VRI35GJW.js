import {
  SignalRService
} from "./chunk-XYNHGWF5.js";
import {
  AppSettingsService
} from "./chunk-DUD7GDET.js";
import {
  NotificationService
} from "./chunk-FW7X3ZAO.js";
import "./chunk-ZNZAZTZS.js";
import {
  ApiService
} from "./chunk-JODIW3US.js";
import "./chunk-4HHFE2PJ.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-MLGMBAGQ.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-PBY7YOCP.js";
import {
  Component,
  Subject,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-FTA5WDSR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ZNC4SKHB.js";

// src/app/pages/admin/transaction-detail/transaction-detail.component.ts
var _c0 = (a0) => ({ "rotate-180": a0 });
function TransactionDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 4);
    \u0275\u0275element(2, "circle", 5)(3, "path", 6);
    \u0275\u0275elementEnd()();
  }
}
function TransactionDetailComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 49);
    \u0275\u0275text(2, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 51);
    \u0275\u0275element(5, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 53);
    \u0275\u0275text(7, "MG");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.txn.partnerReferenceId);
  }
}
function TransactionDetailComponent_ng_container_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 20);
    \u0275\u0275text(2, "MG Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 58);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_23_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyPayload(ctx_r1.txn.partnerReferenceId));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 59);
    \u0275\u0275element(8, "path", 60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.txn.partnerReferenceId);
  }
}
function TransactionDetailComponent_ng_container_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.purpose);
  }
}
function TransactionDetailComponent_ng_container_2_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.notes);
  }
}
function TransactionDetailComponent_ng_container_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderPhone);
  }
}
function TransactionDetailComponent_ng_container_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderEmail);
  }
}
function TransactionDetailComponent_ng_container_2_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "ID Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderIdType);
  }
}
function TransactionDetailComponent_ng_container_2_div_56_Template(rf, ctx) {
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
function TransactionDetailComponent_ng_container_2_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverPhone);
  }
}
function TransactionDetailComponent_ng_container_2_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverEmail);
  }
}
function TransactionDetailComponent_ng_container_2_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverBankName);
  }
}
function TransactionDetailComponent_ng_container_2_div_76_Template(rf, ctx) {
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
function TransactionDetailComponent_ng_container_2_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverBranchName);
  }
}
function TransactionDetailComponent_ng_container_2_div_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.sendingAgentName);
  }
}
function TransactionDetailComponent_ng_container_2_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Payout Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.payoutAgentName);
  }
}
function TransactionDetailComponent_ng_container_2_div_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.paymentMethodName);
  }
}
function TransactionDetailComponent_ng_container_2_div_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Payout Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.payoutMethodName);
  }
}
function TransactionDetailComponent_ng_container_2_div_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
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
function TransactionDetailComponent_ng_container_2_div_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
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
function TransactionDetailComponent_ng_container_2_div_151_Template(rf, ctx) {
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
function TransactionDetailComponent_ng_container_2_div_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Payout Submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r1.txn.payoutSubmittedAt, "medium"));
  }
}
function TransactionDetailComponent_ng_container_2_div_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Payout Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 61);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r1.txn.payoutCompletedAt, "medium"));
  }
}
function TransactionDetailComponent_ng_container_2_button_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_button_155_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approve());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Approve ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_button_156_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_button_156_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.complete());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Complete ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_button_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_button_157_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmPayout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Confirm Payout ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_button_158_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_button_158_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retryPayout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "path", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Retry Payout ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_button_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_button_159_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markPaid());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mark as Paid ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_button_160_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_button_160_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "path", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cancel ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_div_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 74);
    \u0275\u0275element(2, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div", 76)(4, "p", 77);
    \u0275\u0275text(5, "Partner Integration Error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 78);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.txn.lastPartnerError);
  }
}
function TransactionDetailComponent_ng_container_2_span_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.integrationLogs.length);
  }
}
function TransactionDetailComponent_ng_container_2_div_171_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 84);
    \u0275\u0275element(2, "circle", 5)(3, "path", 6);
    \u0275\u0275elementEnd()();
  }
}
function TransactionDetailComponent_ng_container_2_div_171_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1, " No integration logs yet. ");
    \u0275\u0275elementEnd();
  }
}
function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r12.errorMessage, " ");
  }
}
function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_11_pre_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r12.requestPayload);
  }
}
function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106)(2, "button", 107);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r13);
      const log_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.togglePayload("req_" + log_r12.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 108);
    \u0275\u0275element(4, "path", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " View Request ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 110);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const log_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.copyPayload(log_r12.requestPayload));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 111);
    \u0275\u0275element(8, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Copy ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_11_pre_10_Template, 2, 1, "pre", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("rotate-90", ctx_r1.isPayloadOpen("req_" + log_r12.id));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isPayloadOpen("req_" + log_r12.id));
  }
}
function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_12_pre_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap(log_r12.isSuccess ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50 text-emerald-900 dark:text-emerald-200" : "bg-danger-50 dark:bg-danger-950/30 border-danger-200 dark:border-danger-800/50 text-danger-900 dark:text-danger-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r12.responsePayload);
  }
}
function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106)(2, "button", 114);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const log_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.togglePayload("res_" + log_r12.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 108);
    \u0275\u0275element(4, "path", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " View Response ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 115);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const log_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.copyPayload(log_r12.responsePayload));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 111);
    \u0275\u0275element(8, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Copy ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_12_pre_10_Template, 2, 3, "pre", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(log_r12.isSuccess ? "text-surface-400 dark:text-surface-500 hover:text-emerald-600 dark:hover:text-emerald-400" : "text-surface-400 dark:text-surface-500 hover:text-danger-600 dark:hover:text-danger-400");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-90", ctx_r1.isPayloadOpen("res_" + log_r12.id));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isPayloadOpen("res_" + log_r12.id));
  }
}
function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98);
    \u0275\u0275element(2, "div", 99);
    \u0275\u0275elementStart(3, "div", 76)(4, "div", 100)(5, "span", 101);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 102);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_p_10_Template, 2, 1, "p", 103)(11, TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_11_Template, 11, 3, "div", 104)(12, TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_div_12_Template, 11, 5, "div", 104);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const log_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", log_r12.isSuccess ? "bg-success-400" : "bg-danger-400");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(log_r12.providerKey);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 6, log_r12.createdAt, "MMM dd, HH:mm:ss"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", log_r12.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", log_r12.requestPayload);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", log_r12.responsePayload);
  }
}
function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275template(1, TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_div_1_Template, 13, 9, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r11.logs);
  }
}
function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "button", 88);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_Template_button_click_1_listener() {
      const group_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(group_r11.event));
    });
    \u0275\u0275elementStart(2, "span", 89);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 91);
    \u0275\u0275element(7, "span", 92);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 93);
    \u0275\u0275element(10, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_div_11_Template, 2, 1, "div", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r11 = ctx.$implicit;
    const isLast_r15 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("border-b", !isLast_r15);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getGroupHeaderClass(group_r11.event));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getLogEventClass(group_r11.event));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r11.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", group_r11.logs.length, " ", group_r11.logs.length === 1 ? "entry" : "entries", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", group_r11.logs[0].isSuccess ? "text-success-600 dark:text-success-400" : "text-danger-600 dark:text-danger-400");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", group_r11.logs[0].isSuccess ? "bg-success-500" : "bg-danger-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r11.logs[0].isSuccess ? "OK" : "Failed", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c0, ctx_r1.expandedGroups[group_r11.event]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.expandedGroups[group_r11.event]);
  }
}
function TransactionDetailComponent_ng_container_2_div_171_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, TransactionDetailComponent_ng_container_2_div_171_div_3_div_1_Template, 12, 14, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.logGroups);
  }
}
function TransactionDetailComponent_ng_container_2_div_171_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275template(1, TransactionDetailComponent_ng_container_2_div_171_div_1_Template, 4, 0, "div", 81)(2, TransactionDetailComponent_ng_container_2_div_171_div_2_Template, 2, 0, "div", 82)(3, TransactionDetailComponent_ng_container_2_div_171_div_3_Template, 2, 1, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.logsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.logsLoading && ctx_r1.integrationLogs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.logsLoading && ctx_r1.integrationLogs.length > 0);
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
    \u0275\u0275template(8, TransactionDetailComponent_ng_container_2_ng_container_8_Template, 10, 1, "ng-container", 2);
    \u0275\u0275elementStart(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 14)(12, "div", 15)(13, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 9);
    \u0275\u0275element(15, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Transaction Info ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 18)(18, "div", 19)(19, "span", 20);
    \u0275\u0275text(20, "Reference (PIN)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 21);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, TransactionDetailComponent_ng_container_2_div_23_Template, 9, 1, "div", 22);
    \u0275\u0275elementStart(24, "div", 19)(25, "span", 20);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 23);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 19)(30, "span", 20);
    \u0275\u0275text(31, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 24);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, TransactionDetailComponent_ng_container_2_div_35_Template, 5, 1, "div", 25)(36, TransactionDetailComponent_ng_container_2_div_36_Template, 5, 1, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 15)(38, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 9);
    \u0275\u0275element(40, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Sender Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 18)(43, "div", 19)(44, "span", 20);
    \u0275\u0275text(45, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 24);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, TransactionDetailComponent_ng_container_2_div_48_Template, 5, 1, "div", 25)(49, TransactionDetailComponent_ng_container_2_div_49_Template, 5, 1, "div", 25);
    \u0275\u0275elementStart(50, "div", 19)(51, "span", 20);
    \u0275\u0275text(52, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 24);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, TransactionDetailComponent_ng_container_2_div_55_Template, 5, 1, "div", 25)(56, TransactionDetailComponent_ng_container_2_div_56_Template, 5, 1, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 15)(58, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(59, "svg", 9);
    \u0275\u0275element(60, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " Receiver Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(62, "div", 18)(63, "div", 19)(64, "span", 20);
    \u0275\u0275text(65, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 24);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(68, TransactionDetailComponent_ng_container_2_div_68_Template, 5, 1, "div", 25)(69, TransactionDetailComponent_ng_container_2_div_69_Template, 5, 1, "div", 25);
    \u0275\u0275elementStart(70, "div", 19)(71, "span", 20);
    \u0275\u0275text(72, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 24);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(75, TransactionDetailComponent_ng_container_2_div_75_Template, 5, 1, "div", 25)(76, TransactionDetailComponent_ng_container_2_div_76_Template, 5, 1, "div", 25)(77, TransactionDetailComponent_ng_container_2_div_77_Template, 5, 1, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 15)(79, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(80, "svg", 9);
    \u0275\u0275element(81, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, " Financial Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(83, "div", 18)(84, "div", 19)(85, "span", 20);
    \u0275\u0275text(86, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 28);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 19)(91, "span", 20);
    \u0275\u0275text(92, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 24);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 19)(97, "span", 20);
    \u0275\u0275text(98, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "span", 29);
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(102, "hr", 30);
    \u0275\u0275elementStart(103, "div", 19)(104, "span", 20);
    \u0275\u0275text(105, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 24);
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 19)(110, "span", 20);
    \u0275\u0275text(111, "Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 24);
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 19)(116, "span", 20);
    \u0275\u0275text(117, "Payout Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "span", 24);
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 19)(122, "span", 20);
    \u0275\u0275text(123, "Company Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "span", 24);
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(127, "div", 15)(128, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(129, "svg", 9);
    \u0275\u0275element(130, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(131, " Agent Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(132, "div", 18);
    \u0275\u0275template(133, TransactionDetailComponent_ng_container_2_div_133_Template, 5, 1, "div", 25)(134, TransactionDetailComponent_ng_container_2_div_134_Template, 5, 1, "div", 25)(135, TransactionDetailComponent_ng_container_2_div_135_Template, 5, 1, "div", 25)(136, TransactionDetailComponent_ng_container_2_div_136_Template, 5, 1, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 15)(138, "h3", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(139, "svg", 9);
    \u0275\u0275element(140, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(141, " Timeline ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(142, "div", 18)(143, "div", 19)(144, "span", 20);
    \u0275\u0275text(145, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "span", 24);
    \u0275\u0275text(147);
    \u0275\u0275pipe(148, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(149, TransactionDetailComponent_ng_container_2_div_149_Template, 6, 4, "div", 25)(150, TransactionDetailComponent_ng_container_2_div_150_Template, 6, 4, "div", 25)(151, TransactionDetailComponent_ng_container_2_div_151_Template, 5, 1, "div", 25)(152, TransactionDetailComponent_ng_container_2_div_152_Template, 6, 4, "div", 25)(153, TransactionDetailComponent_ng_container_2_div_153_Template, 6, 4, "div", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(154, "div", 33);
    \u0275\u0275template(155, TransactionDetailComponent_ng_container_2_button_155_Template, 4, 1, "button", 34)(156, TransactionDetailComponent_ng_container_2_button_156_Template, 4, 1, "button", 35)(157, TransactionDetailComponent_ng_container_2_button_157_Template, 4, 1, "button", 36)(158, TransactionDetailComponent_ng_container_2_button_158_Template, 4, 1, "button", 37)(159, TransactionDetailComponent_ng_container_2_button_159_Template, 4, 1, "button", 38)(160, TransactionDetailComponent_ng_container_2_button_160_Template, 4, 1, "button", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(161, TransactionDetailComponent_ng_container_2_div_161_Template, 8, 1, "div", 40);
    \u0275\u0275elementStart(162, "div", 41)(163, "button", 42);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_Template_button_click_163_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLogs());
    });
    \u0275\u0275elementStart(164, "h3", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(165, "svg", 9);
    \u0275\u0275element(166, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275text(167, " Integration Logs ");
    \u0275\u0275template(168, TransactionDetailComponent_ng_container_2_span_168_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "svg", 46);
    \u0275\u0275element(170, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(171, TransactionDetailComponent_ng_container_2_div_171_Template, 4, 3, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.txn.referenceNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.partnerReferenceId);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(ctx_r1.txn.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(ctx_r1.txn.status));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.txn.referenceNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.partnerReferenceId);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(ctx_r1.txn.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(ctx_r1.txn.status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 56, ctx_r1.txn.createdAt, "medium"));
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
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(89, 59, ctx_r1.txn.sendAmount, "1.2-2"), " ", ctx_r1.txn.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("1 ", ctx_r1.txn.sendCurrency, " = ", \u0275\u0275pipeBind2(95, 62, ctx_r1.txn.exchangeRateApplied, "1.4-4"), " ", ctx_r1.txn.receiveCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(101, 65, ctx_r1.txn.receiveAmount, "1.2-2"), " ", ctx_r1.txn.receiveCurrency, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(108, 68, ctx_r1.txn.totalCommission, "1.2-2"), " ", ctx_r1.txn.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(114, 71, ctx_r1.txn.agentCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(120, 74, ctx_r1.txn.payoutAgentCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(126, 77, ctx_r1.txn.companyCommission, "1.2-2"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.txn.sendingAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.payoutAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.paymentMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.payoutMethodName);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(148, 80, ctx_r1.txn.createdAt, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.txn.updatedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.completedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.approvedByUserId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.payoutSubmittedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.payoutCompletedAt);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canApprove());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canComplete());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canConfirmPayout());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canRetryPayout());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canMarkPaid());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canCancel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.lastPartnerError);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.integrationLogs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(83, _c0, ctx_r1.showLogs));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showLogs);
  }
}
var TransactionDetailComponent = class _TransactionDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.api = inject(ApiService);
    this.notify = inject(NotificationService);
    this.signalR = inject(SignalRService);
    this.appSettings = inject(AppSettingsService);
    this.txn = null;
    this.loading = true;
    this.actionLoading = false;
    this.integrationLogs = [];
    this.logsLoading = false;
    this.showLogs = false;
    this.expandedGroups = {};
    this.expandedPayloads = /* @__PURE__ */ new Set();
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id)
      this.loadTransaction(id);
    this.signalR.startConnection();
    this.signalR.transactionStatusUpdated$.pipe(takeUntil(this.destroy$)).subscribe((update) => {
      if (this.txn && update.id === this.txn.id) {
        this.txn = __spreadProps(__spreadValues({}, this.txn), {
          status: update.status,
          partnerReferenceId: update.partnerReferenceId,
          lastPartnerError: update.lastPartnerError
        });
        if (this.showLogs)
          this.loadIntegrationLogs(this.txn.id);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadTransaction(id) {
    this.loading = true;
    this.api.getTransactionDetail(id).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.txn = res.data;
          if (this.isPayoutStatus(res.data.status)) {
            this.loadIntegrationLogs(id);
          }
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
  loadIntegrationLogs(id) {
    this.logsLoading = true;
    this.api.getIntegrationLogs(id).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.integrationLogs = res.data;
          this.showLogs = true;
          this.initExpandedGroups();
        }
        this.logsLoading = false;
      },
      error: () => {
        this.logsLoading = false;
      }
    });
  }
  initExpandedGroups() {
    const groups = new Set(this.integrationLogs.map((l) => this.normalizeEvent(l.event)));
    this.expandedGroups = {};
    for (const g of groups) {
      this.expandedGroups[g] = g !== "CHECK_STATUS";
    }
  }
  normalizeEvent(event) {
    if (event === "SUBMIT")
      return "SEND";
    if (event === "POLL")
      return "CHECK_STATUS";
    return event;
  }
  get logGroups() {
    const order = ["SEND", "COMMIT", "CHECK_STATUS", "WEBHOOK", "MANUAL_OVERRIDE"];
    const labels = {
      "SEND": "Send",
      "COMMIT": "Commit",
      "CHECK_STATUS": "Check Status",
      "WEBHOOK": "Webhook",
      "MANUAL_OVERRIDE": "Manual Override"
    };
    const groupMap = /* @__PURE__ */ new Map();
    for (const log of this.integrationLogs) {
      const key = this.normalizeEvent(log.event);
      if (!groupMap.has(key))
        groupMap.set(key, []);
      groupMap.get(key).push(log);
    }
    const result = [];
    for (const key of order) {
      const logs = groupMap.get(key);
      if (logs?.length) {
        result.push({ event: key, label: labels[key] ?? key, logs });
        groupMap.delete(key);
      }
    }
    for (const [key, logs] of groupMap) {
      if (logs.length)
        result.push({ event: key, label: key, logs });
    }
    return result;
  }
  toggleGroup(event) {
    this.expandedGroups[event] = !this.expandedGroups[event];
  }
  togglePayload(key) {
    if (this.expandedPayloads.has(key))
      this.expandedPayloads.delete(key);
    else
      this.expandedPayloads.add(key);
  }
  isPayloadOpen(key) {
    return this.expandedPayloads.has(key);
  }
  copyPayload(text) {
    navigator.clipboard.writeText(text).then(() => {
      this.notify.success("Copied to clipboard");
    }).catch(() => {
      this.notify.error("Copy failed");
    });
  }
  toggleLogs() {
    if (!this.showLogs && this.txn) {
      this.loadIntegrationLogs(this.txn.id);
    } else {
      this.showLogs = !this.showLogs;
    }
  }
  isPayoutStatus(status) {
    return ["PendingPayout", "ProcessingAtPartner", "Completed", "Failed"].includes(status);
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
  confirmPayout() {
    if (!this.txn)
      return;
    this.actionLoading = true;
    this.api.confirmPayout(this.txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.txn = __spreadProps(__spreadValues({}, this.txn), { status: "PendingPayout" });
          this.notify.success("Payout queued \u2014 processing in background.");
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
  retryPayout() {
    if (!this.txn)
      return;
    this.actionLoading = true;
    this.api.retryPayout(this.txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.txn = __spreadProps(__spreadValues({}, this.txn), { status: "PendingPayout", lastPartnerError: void 0 });
          this.notify.success("Retry queued.");
          this.loadIntegrationLogs(this.txn.id);
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
  markPaid() {
    if (!this.txn)
      return;
    this.actionLoading = true;
    this.api.markTransactionPaid(this.txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.txn = __spreadProps(__spreadValues({}, this.txn), { status: "Completed" });
          this.notify.success("Transaction marked as paid.");
          this.loadIntegrationLogs(this.txn.id);
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
      case "PendingPayout":
        return "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400";
      case "ProcessingAtPartner":
        return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400";
      case "OnHold":
        return "bg-warning-50 text-warning-600 dark:bg-warning-900/20 dark:text-warning-300";
      case "Failed":
        return "bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400";
      case "Cancelled":
        return "bg-surface-200 text-surface-600 dark:bg-surface-700 dark:text-surface-300";
      case "Compliance":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "PendingApproval":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      default:
        return "";
    }
  }
  getStatusLabel(status) {
    if (status === "OnHold")
      return "On Hold";
    if (status === "Compliance")
      return "Under Review";
    if (status === "PendingApproval")
      return "Pending Approval";
    if (status === "PendingPayout")
      return "Pending Payout";
    if (status === "ProcessingAtPartner")
      return "Processing at Partner";
    return status;
  }
  getLogEventClass(event) {
    switch (this.normalizeEvent(event)) {
      case "SEND":
        return "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400";
      case "COMMIT":
        return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400";
      case "CHECK_STATUS":
        return "bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-300";
      case "WEBHOOK":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "MANUAL_OVERRIDE":
        return "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400";
      default:
        return "bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-300";
    }
  }
  getGroupHeaderClass(event) {
    switch (event) {
      case "SEND":
        return "bg-brand-50 dark:bg-brand-900/10";
      case "COMMIT":
        return "bg-indigo-50 dark:bg-indigo-900/10";
      case "CHECK_STATUS":
        return "bg-surface-50 dark:bg-surface-700/20";
      case "WEBHOOK":
        return "bg-purple-50 dark:bg-purple-900/10";
      case "MANUAL_OVERRIDE":
        return "bg-warning-50 dark:bg-warning-900/10";
      default:
        return "bg-surface-50 dark:bg-surface-700/20";
    }
  }
  canApprove() {
    return this.txn?.status === "PendingApproval";
  }
  canComplete() {
    return this.txn?.status === "Pending";
  }
  canConfirmPayout() {
    return this.txn?.status === "Pending";
  }
  canRetryPayout() {
    return this.txn?.status === "Failed";
  }
  canMarkPaid() {
    return !!this.txn && this.txn.status !== "Completed" && this.txn.status !== "Cancelled";
  }
  canCancel() {
    return this.appSettings.cancellationAllowed && !!this.txn && this.txn.status !== "Completed" && this.txn.status !== "Cancelled" && this.txn.status !== "Failed";
  }
  static {
    this.\u0275fac = function TransactionDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TransactionDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionDetailComponent, selectors: [["app-transaction-detail"]], decls: 3, vars: 2, consts: [[1, "w-full"], ["class", "flex items-center justify-center py-16", 4, "ngIf"], [4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-16"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "h-10", "w-10", "animate-spin", "text-brand-600", "dark:text-brand-400"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "flex", "items-center", "gap-3", "mb-6"], ["aria-label", "Back to Transactions", 1, "inline-flex", "items-center", "justify-center", "w-10", "h-10", "rounded-xl", "text-surface-500", "hover:text-surface-900", "hover:bg-surface-100", "dark:text-surface-400", "dark:hover:text-surface-100", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "w-5", "h-5"], ["fill-rule", "evenodd", "d", "M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z", "clip-rule", "evenodd"], [1, "flex", "items-center", "gap-3", "flex-wrap"], [1, "text-xl", "font-semibold", "text-surface-900", "dark:text-surface-100", "m-0", "font-mono"], [1, "px-3", "py-1", "rounded-full", "text-xs", "font-semibold", "uppercase", "tracking-wide", 3, "ngClass"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "xl:grid-cols-3", "gap-4", "mb-6"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "items-center", "gap-2", "text-sm", "font-semibold", "text-brand-600", "dark:text-brand-400", "mb-4"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", "clip-rule", "evenodd"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between", "items-baseline", "py-1", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "text-surface-900", "dark:text-surface-100", "font-medium", "text-sm", "font-mono"], ["class", "flex justify-between items-center py-1 border-b border-surface-100 dark:border-surface-700", 4, "ngIf"], [1, "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "text-surface-900", "dark:text-surface-100", "font-medium", "text-sm"], ["class", "flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700", 4, "ngIf"], ["d", "M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"], ["fill-rule", "evenodd", "d", "M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z", "clip-rule", "evenodd"], [1, "text-brand-700", "dark:text-brand-400", "font-bold", "text-base"], [1, "text-success-700", "dark:text-success-400", "font-bold", "text-base"], [1, "border-surface-200", "dark:border-surface-700", "my-1"], ["fill-rule", "evenodd", "d", "M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5H4zm3-11a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 5.5zm0 3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 8.5zM8.75 11a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z", "clip-rule", "evenodd"], [1, "flex", "flex-wrap", "gap-3", "p-4", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-800/50"], ["class", "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-success-600 text-white hover:bg-success-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-warning-600 text-white hover:bg-warning-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-success-300 dark:border-success-700 bg-white dark:bg-surface-800 text-success-700 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-danger-600 text-white hover:bg-danger-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "rounded-2xl border border-danger-200 dark:border-danger-800 bg-danger-50 dark:bg-danger-900/20 p-4 flex items-start gap-3", 4, "ngIf"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft", "overflow-hidden"], [1, "w-full", "flex", "items-center", "justify-between", "p-6", "hover:bg-surface-50", "dark:hover:bg-surface-700/50", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-2", "text-sm", "font-semibold", "text-brand-600", "dark:text-brand-400"], ["fill-rule", "evenodd", "d", "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z", "clip-rule", "evenodd"], ["class", "ml-1 px-2 py-0.5 text-xs rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "h-5", "w-5", "text-surface-400", "transition-transform", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m19.5 8.25-7.5 7.5-7.5-7.5"], ["class", "border-t border-surface-200 dark:border-surface-700", 4, "ngIf"], [1, "text-surface-400", "dark:text-surface-500", "text-sm", "select-none"], [1, "flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-lg", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-800"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 16", "fill", "currentColor", 1, "w-3.5", "h-3.5", "text-amber-500", "dark:text-amber-400", "shrink-0"], ["d", "M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3ZM2 7.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1ZM3 11a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3Z"], [1, "text-xs", "font-medium", "text-amber-600", "dark:text-amber-400", "select-none"], [1, "text-xs", "font-mono", "font-semibold", "text-amber-700", "dark:text-amber-300"], [1, "flex", "justify-between", "items-center", "py-1", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "flex", "items-center", "gap-1.5"], [1, "text-sm", "font-mono", "font-semibold", "text-amber-700", "dark:text-amber-300"], ["title", "Copy MG Reference", 1, "p-1", "rounded", "text-surface-400", "hover:text-amber-600", "dark:hover:text-amber-400", "hover:bg-amber-50", "dark:hover:bg-amber-900/20", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"], [1, "text-success-700", "dark:text-success-400", "font-medium", "text-sm"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-brand-600", "text-white", "hover:bg-brand-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "font-medium", "text-sm", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clip-rule", "evenodd"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-success-600", "text-white", "hover:bg-success-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "font-medium", "text-sm", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", "clip-rule", "evenodd"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-indigo-600", "text-white", "hover:bg-indigo-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "font-medium", "text-sm", 3, "click", "disabled"], ["d", "M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.114A28.897 28.897 0 003.105 2.289z"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-warning-600", "text-white", "hover:bg-warning-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "font-medium", "text-sm", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z", "clip-rule", "evenodd"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "border", "border-success-300", "dark:border-success-700", "bg-white", "dark:bg-surface-800", "text-success-700", "dark:text-success-400", "hover:bg-success-50", "dark:hover:bg-success-900/20", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "font-medium", "text-sm", 3, "click", "disabled"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-danger-600", "text-white", "hover:bg-danger-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "font-medium", "text-sm", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", "clip-rule", "evenodd"], [1, "rounded-2xl", "border", "border-danger-200", "dark:border-danger-800", "bg-danger-50", "dark:bg-danger-900/20", "p-4", "flex", "items-start", "gap-3"], ["fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "h-5", "w-5", "text-danger-500", "mt-0.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-semibold", "text-danger-700", "dark:text-danger-300"], [1, "text-xs", "text-danger-600", "dark:text-danger-400", "mt-1", "break-words"], [1, "ml-1", "px-2", "py-0.5", "text-xs", "rounded-full", "bg-brand-100", "text-brand-700", "dark:bg-brand-900/30", "dark:text-brand-400"], [1, "border-t", "border-surface-200", "dark:border-surface-700"], ["class", "flex items-center justify-center py-8", 4, "ngIf"], ["class", "px-6 py-8 text-center text-sm text-surface-400 dark:text-surface-500", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-8"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-6", "w-6", "text-brand-500"], [1, "px-6", "py-8", "text-center", "text-sm", "text-surface-400", "dark:text-surface-500"], ["class", "border-surface-100 dark:border-surface-700", 3, "border-b", 4, "ngFor", "ngForOf"], [1, "border-surface-100", "dark:border-surface-700"], [1, "w-full", "flex", "items-center", "gap-2", "px-4", "py-3", "transition-colors", "hover:brightness-95", 3, "click", "ngClass"], [1, "px-2", "py-0.5", "text-xs", "font-semibold", "rounded-full", 3, "ngClass"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-1", "text-xs", "ml-1", 3, "ngClass"], [1, "inline-block", "h-2", "w-2", "rounded-full", 3, "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "h-4", "w-4", "text-surface-400", "transition-transform", "ml-auto", 3, "ngClass"], ["class", "divide-y divide-surface-50 dark:divide-surface-700/50 bg-white dark:bg-surface-800", 4, "ngIf"], [1, "divide-y", "divide-surface-50", "dark:divide-surface-700/50", "bg-white", "dark:bg-surface-800"], ["class", "px-4 py-3 pl-8", 4, "ngFor", "ngForOf"], [1, "px-4", "py-3", "pl-8"], [1, "flex", "items-start", "gap-3"], [1, "mt-1", "h-2", "w-2", "rounded-full", "shrink-0", 3, "ngClass"], [1, "flex", "items-center", "gap-2", "flex-wrap", "mb-1"], [1, "text-xs", "font-mono", "text-surface-500", "dark:text-surface-400"], [1, "ml-auto", "text-xs", "text-surface-400", "dark:text-surface-500", "whitespace-nowrap"], ["class", "text-xs text-danger-600 dark:text-danger-400 mt-1 break-words", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [1, "flex", "items-center", "gap-2"], [1, "flex", "items-center", "gap-1", "text-xs", "text-surface-400", "dark:text-surface-500", "hover:text-indigo-600", "dark:hover:text-indigo-400", "transition-colors", "select-none", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3", "h-3", "transition-transform", "duration-150"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], ["title", "Copy request", 1, "flex", "items-center", "gap-1", "px-1.5", "py-0.5", "rounded", "text-[10px]", "font-medium", "text-surface-400", "dark:text-surface-500", "hover:text-indigo-600", "dark:hover:text-indigo-400", "hover:bg-indigo-50", "dark:hover:bg-indigo-900/20", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3", "h-3"], ["class", "mt-1.5 text-xs bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 p-3 rounded-lg overflow-x-auto text-surface-700 dark:text-surface-300 whitespace-pre-wrap leading-relaxed", 4, "ngIf"], [1, "mt-1.5", "text-xs", "bg-surface-50", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "p-3", "rounded-lg", "overflow-x-auto", "text-surface-700", "dark:text-surface-300", "whitespace-pre-wrap", "leading-relaxed"], [1, "flex", "items-center", "gap-1", "text-xs", "transition-colors", "select-none", 3, "click"], ["title", "Copy response", 1, "flex", "items-center", "gap-1", "px-1.5", "py-0.5", "rounded", "text-[10px]", "font-medium", "text-surface-400", "dark:text-surface-500", "hover:text-emerald-600", "dark:hover:text-emerald-400", "hover:bg-emerald-50", "dark:hover:bg-emerald-900/20", "transition-colors", 3, "click"], ["class", "mt-1.5 text-xs p-3 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed border", 3, "class", 4, "ngIf"], [1, "mt-1.5", "text-xs", "p-3", "rounded-lg", "overflow-x-auto", "whitespace-pre-wrap", "leading-relaxed", "border"]], template: function TransactionDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, TransactionDetailComponent_div_1_Template, 4, 0, "div", 1)(2, TransactionDetailComponent_ng_container_2_Template, 172, 85, "ng-container", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.txn && !ctx.loading);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=transaction-detail.component.css.map */"] });
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
    ], template: `<div class="w-full">
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
        aria-label="Back to Transactions"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="flex items-center gap-3 flex-wrap">
        <h2 class="text-xl font-semibold text-surface-900 dark:text-surface-100 m-0 font-mono">{{ txn.referenceNumber }}</h2>
        <ng-container *ngIf="txn.partnerReferenceId">
          <span class="text-surface-400 dark:text-surface-500 text-sm select-none">|</span>
          <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0">
              <path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3ZM2 7.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1ZM3 11a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3Z" />
            </svg>
            <span class="text-xs font-medium text-amber-600 dark:text-amber-400 select-none">MG</span>
            <span class="text-xs font-mono font-semibold text-amber-700 dark:text-amber-300">{{ txn.partnerReferenceId }}</span>
          </div>
        </ng-container>
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
            <span class="text-sm text-surface-500 dark:text-surface-400">Reference (PIN)</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm font-mono">{{ txn.referenceNumber }}</span>
          </div>
          <div *ngIf="txn.partnerReferenceId" class="flex justify-between items-center py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">MG Reference</span>
            <div class="flex items-center gap-1.5">
              <span class="text-sm font-mono font-semibold text-amber-700 dark:text-amber-300">{{ txn.partnerReferenceId }}</span>
              <button
                (click)="copyPayload(txn.partnerReferenceId!)"
                class="p-1 rounded text-surface-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
                title="Copy MG Reference"
              >
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </button>
            </div>
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
          <div *ngIf="txn.payoutSubmittedAt" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Payout Submitted</span>
            <span class="text-surface-900 dark:text-surface-100 font-medium text-sm">{{ txn.payoutSubmittedAt | date:'medium' }}</span>
          </div>
          <div *ngIf="txn.payoutCompletedAt" class="flex justify-between items-baseline py-1 border-b border-surface-100 dark:border-surface-700">
            <span class="text-sm text-surface-500 dark:text-surface-400">Payout Completed</span>
            <span class="text-success-700 dark:text-success-400 font-medium text-sm">{{ txn.payoutCompletedAt | date:'medium' }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Action Buttons -->
    <div class="flex flex-wrap gap-3 p-4 rounded-2xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
      <!-- Standard actions -->
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
        </svg>
        Complete
      </button>

      <!-- Confirm Payout -->
      <button
        *ngIf="canConfirmPayout()"
        (click)="confirmPayout()"
        [disabled]="actionLoading"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.114A28.897 28.897 0 003.105 2.289z" />
        </svg>
        Confirm Payout
      </button>

      <!-- Retry Payout -->
      <button
        *ngIf="canRetryPayout()"
        (click)="retryPayout()"
        [disabled]="actionLoading"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-warning-600 text-white hover:bg-warning-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd" />
        </svg>
        Retry Payout
      </button>

      <!-- Mark as Paid (manual override) -->
      <button
        *ngIf="canMarkPaid()"
        (click)="markPaid()"
        [disabled]="actionLoading"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-success-300 dark:border-success-700 bg-white dark:bg-surface-800 text-success-700 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>
        Mark as Paid
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

    <!-- Partner Error Banner -->
    <div
      *ngIf="txn.lastPartnerError"
      class="rounded-2xl border border-danger-200 dark:border-danger-800 bg-danger-50 dark:bg-danger-900/20 p-4 flex items-start gap-3"
    >
      <svg class="h-5 w-5 text-danger-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-danger-700 dark:text-danger-300">Partner Integration Error</p>
        <p class="text-xs text-danger-600 dark:text-danger-400 mt-1 break-words">{{ txn.lastPartnerError }}</p>
      </div>
    </div>

    <!-- Integration Logs -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden">
      <!-- Collapsible header -->
      <button
        (click)="toggleLogs()"
        class="w-full flex items-center justify-between p-6 hover:bg-surface-50 dark:hover:bg-surface-700/50 transition-colors"
      >
        <h3 class="flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
          </svg>
          Integration Logs
          <span *ngIf="integrationLogs.length > 0" class="ml-1 px-2 py-0.5 text-xs rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">{{ integrationLogs.length }}</span>
        </h3>
        <svg
          class="h-5 w-5 text-surface-400 transition-transform"
          [ngClass]="{ 'rotate-180': showLogs }"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <!-- Log entries -->
      <div *ngIf="showLogs" class="border-t border-surface-200 dark:border-surface-700">
        <!-- Loading -->
        <div *ngIf="logsLoading" class="flex items-center justify-center py-8">
          <svg class="animate-spin h-6 w-6 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        </div>

        <!-- Empty state -->
        <div *ngIf="!logsLoading && integrationLogs.length === 0" class="px-6 py-8 text-center text-sm text-surface-400 dark:text-surface-500">
          No integration logs yet.
        </div>

        <!-- Grouped logs -->
        <div *ngIf="!logsLoading && integrationLogs.length > 0">
          <div *ngFor="let group of logGroups; let isLast = last"
               [class.border-b]="!isLast"
               class="border-surface-100 dark:border-surface-700">

            <!-- Group header -->
            <button
              (click)="toggleGroup(group.event)"
              class="w-full flex items-center gap-2 px-4 py-3 transition-colors hover:brightness-95"
              [ngClass]="getGroupHeaderClass(group.event)"
            >
              <span class="px-2 py-0.5 text-xs font-semibold rounded-full" [ngClass]="getLogEventClass(group.event)">
                {{ group.label }}
              </span>
              <span class="text-xs text-surface-500 dark:text-surface-400">
                {{ group.logs.length }} {{ group.logs.length === 1 ? 'entry' : 'entries' }}
              </span>
              <span class="flex items-center gap-1 text-xs ml-1"
                    [ngClass]="group.logs[0].isSuccess ? 'text-success-600 dark:text-success-400' : 'text-danger-600 dark:text-danger-400'">
                <span class="inline-block h-2 w-2 rounded-full"
                      [ngClass]="group.logs[0].isSuccess ? 'bg-success-500' : 'bg-danger-500'"></span>
                {{ group.logs[0].isSuccess ? 'OK' : 'Failed' }}
              </span>
              <svg class="h-4 w-4 text-surface-400 transition-transform ml-auto"
                   [ngClass]="{ 'rotate-180': expandedGroups[group.event] }"
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <!-- Group entries -->
            <div *ngIf="expandedGroups[group.event]"
                 class="divide-y divide-surface-50 dark:divide-surface-700/50 bg-white dark:bg-surface-800">
              <div *ngFor="let log of group.logs" class="px-4 py-3 pl-8">
                <div class="flex items-start gap-3">
                  <div class="mt-1 h-2 w-2 rounded-full shrink-0"
                       [ngClass]="log.isSuccess ? 'bg-success-400' : 'bg-danger-400'"></div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 flex-wrap mb-1">
                      <span class="text-xs font-mono text-surface-500 dark:text-surface-400">{{ log.providerKey }}</span>
                      <span class="ml-auto text-xs text-surface-400 dark:text-surface-500 whitespace-nowrap">
                        {{ log.createdAt | date:'MMM dd, HH:mm:ss' }}
                      </span>
                    </div>
                    <p *ngIf="log.errorMessage" class="text-xs text-danger-600 dark:text-danger-400 mt-1 break-words">
                      {{ log.errorMessage }}
                    </p>
                    <!-- Request payload -->
                    <div *ngIf="log.requestPayload" class="mt-2">
                      <div class="flex items-center gap-2">
                        <button (click)="togglePayload('req_' + log.id)"
                          class="flex items-center gap-1 text-xs text-surface-400 dark:text-surface-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors select-none">
                          <svg class="w-3 h-3 transition-transform duration-150"
                            [class.rotate-90]="isPayloadOpen('req_' + log.id)"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                          </svg>
                          View Request
                        </button>
                        <button (click)="copyPayload(log.requestPayload!)"
                          class="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium text-surface-400 dark:text-surface-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                          title="Copy request">
                          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                          </svg>
                          Copy
                        </button>
                      </div>
                      <pre *ngIf="isPayloadOpen('req_' + log.id)"
                        class="mt-1.5 text-xs bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 p-3 rounded-lg overflow-x-auto text-surface-700 dark:text-surface-300 whitespace-pre-wrap leading-relaxed">{{ log.requestPayload }}</pre>
                    </div>

                    <!-- Response payload -->
                    <div *ngIf="log.responsePayload" class="mt-2">
                      <div class="flex items-center gap-2">
                        <button (click)="togglePayload('res_' + log.id)"
                          class="flex items-center gap-1 text-xs transition-colors select-none"
                          [class]="log.isSuccess
                            ? 'text-surface-400 dark:text-surface-500 hover:text-emerald-600 dark:hover:text-emerald-400'
                            : 'text-surface-400 dark:text-surface-500 hover:text-danger-600 dark:hover:text-danger-400'">
                          <svg class="w-3 h-3 transition-transform duration-150"
                            [class.rotate-90]="isPayloadOpen('res_' + log.id)"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                          </svg>
                          View Response
                        </button>
                        <button (click)="copyPayload(log.responsePayload!)"
                          class="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium text-surface-400 dark:text-surface-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                          title="Copy response">
                          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                          </svg>
                          Copy
                        </button>
                      </div>
                      <pre *ngIf="isPayloadOpen('res_' + log.id)"
                        class="mt-1.5 text-xs p-3 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed border"
                        [class]="log.isSuccess
                          ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50 text-emerald-900 dark:text-emerald-200'
                          : 'bg-danger-50 dark:bg-danger-950/30 border-danger-200 dark:border-danger-800/50 text-danger-900 dark:text-danger-200'">{{ log.responsePayload }}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </ng-container>
</div>
`, styles: ["/* src/app/pages/admin/transaction-detail/transaction-detail.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=transaction-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionDetailComponent, { className: "TransactionDetailComponent", filePath: "src/app/pages/admin/transaction-detail/transaction-detail.component.ts", lineNumber: 24 });
})();
export {
  TransactionDetailComponent
};
//# sourceMappingURL=chunk-VRI35GJW.js.map
