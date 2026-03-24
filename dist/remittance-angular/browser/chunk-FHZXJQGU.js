import "./chunk-O5ZS5GGX.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-A5422WZE.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-ZMWNDU6W.js";
import "./chunk-ZVT67ZIY.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-RTKH6WOT.js";
import "./chunk-57Y34HEX.js";
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
import {
  ApiService
} from "./chunk-VYOOPMBG.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-AVOWLGE4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-IRXVSIUW.js";
import "./chunk-MKKXXFYO.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf
} from "./chunk-DBW47J2B.js";
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
} from "./chunk-J3ROLHMS.js";

// src/app/pages/admin/transaction-detail/transaction-detail.component.ts
function TransactionDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
function TransactionDetailComponent_ng_container_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
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
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.notes);
  }
}
function TransactionDetailComponent_ng_container_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderPhone);
  }
}
function TransactionDetailComponent_ng_container_2_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderEmail);
  }
}
function TransactionDetailComponent_ng_container_2_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "ID Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderIdType);
  }
}
function TransactionDetailComponent_ng_container_2_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "ID Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.senderIdNumber);
  }
}
function TransactionDetailComponent_ng_container_2_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverPhone);
  }
}
function TransactionDetailComponent_ng_container_2_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverEmail);
  }
}
function TransactionDetailComponent_ng_container_2_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverBankName);
  }
}
function TransactionDetailComponent_ng_container_2_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverAccountNumber);
  }
}
function TransactionDetailComponent_ng_container_2_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.receiverBranchName);
  }
}
function TransactionDetailComponent_ng_container_2_div_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.sendingAgentName);
  }
}
function TransactionDetailComponent_ng_container_2_div_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Payout Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.payoutAgentName);
  }
}
function TransactionDetailComponent_ng_container_2_div_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.paymentMethodName);
  }
}
function TransactionDetailComponent_ng_container_2_div_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Payout Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.payoutMethodName);
  }
}
function TransactionDetailComponent_ng_container_2_div_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
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
function TransactionDetailComponent_ng_container_2_div_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
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
function TransactionDetailComponent_ng_container_2_div_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Approved By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.txn.approvedByUserId);
  }
}
function TransactionDetailComponent_ng_container_2_div_157_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_157_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approve());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Approve ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_div_157_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_157_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.complete());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Complete ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_div_157_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_div_157_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cancel ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
  }
}
function TransactionDetailComponent_ng_container_2_div_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, TransactionDetailComponent_ng_container_2_div_157_button_1_Template, 4, 1, "button", 24)(2, TransactionDetailComponent_ng_container_2_div_157_button_2_Template, 4, 1, "button", 25)(3, TransactionDetailComponent_ng_container_2_div_157_button_3_Template, 4, 1, "button", 26);
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
    \u0275\u0275elementStart(1, "div", 5)(2, "button", 6);
    \u0275\u0275listener("click", function TransactionDetailComponent_ng_container_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7)(6, "h2", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 10)(11, "mat-card", 11)(12, "mat-card-content")(13, "h3", 12)(14, "mat-icon");
    \u0275\u0275text(15, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Transaction Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "span", 15);
    \u0275\u0275text(20, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 16);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 14)(24, "span", 15);
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 17)(27, "span", 18);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 14)(30, "span", 15);
    \u0275\u0275text(31, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 17);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, TransactionDetailComponent_ng_container_2_div_35_Template, 5, 1, "div", 19)(36, TransactionDetailComponent_ng_container_2_div_36_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "mat-card", 11)(38, "mat-card-content")(39, "h3", 12)(40, "mat-icon");
    \u0275\u0275text(41, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Sender Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 13)(44, "div", 14)(45, "span", 15);
    \u0275\u0275text(46, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 17);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, TransactionDetailComponent_ng_container_2_div_49_Template, 5, 1, "div", 19)(50, TransactionDetailComponent_ng_container_2_div_50_Template, 5, 1, "div", 19);
    \u0275\u0275elementStart(51, "div", 14)(52, "span", 15);
    \u0275\u0275text(53, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 17);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(56, TransactionDetailComponent_ng_container_2_div_56_Template, 5, 1, "div", 19)(57, TransactionDetailComponent_ng_container_2_div_57_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "mat-card", 11)(59, "mat-card-content")(60, "h3", 12)(61, "mat-icon");
    \u0275\u0275text(62, "person_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " Receiver Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 13)(65, "div", 14)(66, "span", 15);
    \u0275\u0275text(67, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 17);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(70, TransactionDetailComponent_ng_container_2_div_70_Template, 5, 1, "div", 19)(71, TransactionDetailComponent_ng_container_2_div_71_Template, 5, 1, "div", 19);
    \u0275\u0275elementStart(72, "div", 14)(73, "span", 15);
    \u0275\u0275text(74, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 17);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(77, TransactionDetailComponent_ng_container_2_div_77_Template, 5, 1, "div", 19)(78, TransactionDetailComponent_ng_container_2_div_78_Template, 5, 1, "div", 19)(79, TransactionDetailComponent_ng_container_2_div_79_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "mat-card", 11)(81, "mat-card-content")(82, "h3", 12)(83, "mat-icon");
    \u0275\u0275text(84, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, " Financial Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 13)(87, "div", 14)(88, "span", 15);
    \u0275\u0275text(89, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 20);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 14)(94, "span", 15);
    \u0275\u0275text(95, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span", 17);
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 14)(100, "span", 15);
    \u0275\u0275text(101, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span", 21);
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(105, "mat-divider");
    \u0275\u0275elementStart(106, "div", 14)(107, "span", 15);
    \u0275\u0275text(108, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "span", 17);
    \u0275\u0275text(110);
    \u0275\u0275pipe(111, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 14)(113, "span", 15);
    \u0275\u0275text(114, "Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "span", 17);
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 14)(119, "span", 15);
    \u0275\u0275text(120, "Payout Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "span", 17);
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "div", 14)(125, "span", 15);
    \u0275\u0275text(126, "Company Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "span", 17);
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "number");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(130, "mat-card", 11)(131, "mat-card-content")(132, "h3", 12)(133, "mat-icon");
    \u0275\u0275text(134, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275text(135, " Agent Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 13);
    \u0275\u0275template(137, TransactionDetailComponent_ng_container_2_div_137_Template, 5, 1, "div", 19)(138, TransactionDetailComponent_ng_container_2_div_138_Template, 5, 1, "div", 19)(139, TransactionDetailComponent_ng_container_2_div_139_Template, 5, 1, "div", 19)(140, TransactionDetailComponent_ng_container_2_div_140_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(141, "mat-card", 11)(142, "mat-card-content")(143, "h3", 12)(144, "mat-icon");
    \u0275\u0275text(145, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(146, " Timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "div", 13)(148, "div", 14)(149, "span", 15);
    \u0275\u0275text(150, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "span", 17);
    \u0275\u0275text(152);
    \u0275\u0275pipe(153, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(154, TransactionDetailComponent_ng_container_2_div_154_Template, 6, 4, "div", 19)(155, TransactionDetailComponent_ng_container_2_div_155_Template, 6, 4, "div", 19)(156, TransactionDetailComponent_ng_container_2_div_156_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(157, TransactionDetailComponent_ng_container_2_div_157_Template, 4, 3, "div", 22);
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
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.txn.referenceNumber);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(ctx_r1.txn.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(ctx_r1.txn.status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 43, ctx_r1.txn.createdAt, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.txn.purpose);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.notes);
    \u0275\u0275advance(12);
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
    \u0275\u0275advance(12);
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
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(92, 46, ctx_r1.txn.sendAmount, "1.2-2"), " ", ctx_r1.txn.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("1 ", ctx_r1.txn.sendCurrency, " = ", \u0275\u0275pipeBind2(98, 49, ctx_r1.txn.exchangeRateApplied, "1.4-4"), " ", ctx_r1.txn.receiveCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(104, 52, ctx_r1.txn.receiveAmount, "1.2-2"), " ", ctx_r1.txn.receiveCurrency, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(111, 55, ctx_r1.txn.totalCommission, "1.2-2"), " ", ctx_r1.txn.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(117, 58, ctx_r1.txn.agentCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(123, 61, ctx_r1.txn.payoutAgentCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(129, 64, ctx_r1.txn.companyCommission, "1.2-2"));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.txn.sendingAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.payoutAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.paymentMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.txn.payoutMethodName);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(153, 67, ctx_r1.txn.createdAt, "medium"));
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
        return "status-completed";
      case "Pending":
        return "status-pending";
      case "Approved":
      case "Processing":
        return "status-processing";
      case "OnHold":
        return "status-onhold";
      case "Failed":
        return "status-failed";
      case "Cancelled":
        return "status-cancelled";
      case "Compliance":
        return "status-compliance";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionDetailComponent, selectors: [["app-transaction-detail"]], decls: 3, vars: 2, consts: [[1, "txn-detail-page"], ["class", "loading-container", 4, "ngIf"], [4, "ngIf"], [1, "loading-container"], ["diameter", "48"], [1, "detail-header"], ["mat-icon-button", "", "matTooltip", "Back to Transactions", 3, "click"], [1, "header-info"], [1, "ref-number"], [1, "status-badge", 3, "ngClass"], [1, "detail-grid"], ["appearance", "outlined", 1, "detail-card"], [1, "card-title"], [1, "detail-rows"], [1, "detail-row"], [1, "label"], [1, "value", "mono"], [1, "value"], [1, "status-badge", "sm", 3, "ngClass"], ["class", "detail-row", 4, "ngIf"], [1, "value", "amount-send"], [1, "value", "amount-receive"], ["class", "action-bar", 4, "ngIf"], [1, "action-bar"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"], ["mat-raised-button", "", "color", "warn", 3, "click", "disabled"]], template: function TransactionDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, TransactionDetailComponent_div_1_Template, 2, 0, "div", 1)(2, TransactionDetailComponent_ng_container_2_Template, 158, 70, "ng-container", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.txn && !ctx.loading);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgIf,
      DecimalPipe,
      DatePipe,
      RouterModule,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatDividerModule,
      MatDivider,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.txn-detail-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  padding: 60px;\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.detail-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.detail-header[_ngcontent-%COMP%]   .ref-number[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 14px;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.status-badge.sm[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  font-size: 11px;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-onhold[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: #fbe9e7;\n  color: #c62828;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #efebe9;\n  color: #5d4037;\n}\n.status-compliance[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.detail-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #1a56db;\n}\n.detail-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.detail-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 4px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  font-weight: 500;\n}\n.detail-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #333;\n  font-weight: 500;\n  text-align: right;\n}\n.detail-row[_ngcontent-%COMP%]   .value.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.detail-row[_ngcontent-%COMP%]   .value.amount-send[_ngcontent-%COMP%] {\n  color: #1565c0;\n  font-size: 15px;\n  font-weight: 700;\n}\n.detail-row[_ngcontent-%COMP%]   .value.amount-receive[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-size: 15px;\n  font-weight: 700;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  background: #fafafa;\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=transaction-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionDetailComponent, [{
    type: Component,
    args: [{ selector: "app-transaction-detail", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatDividerModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      DecimalPipe,
      DatePipe
    ], template: `<div class="txn-detail-page">
  <!-- Loading -->
  <div *ngIf="loading" class="loading-container">
    <mat-spinner diameter="48"></mat-spinner>
  </div>

  <ng-container *ngIf="txn && !loading">
    <!-- Header -->
    <div class="detail-header">
      <button mat-icon-button (click)="goBack()" matTooltip="Back to Transactions">
        <mat-icon>arrow_back</mat-icon>
      </button>
      <div class="header-info">
        <h2 class="ref-number">{{ txn.referenceNumber }}</h2>
        <span class="status-badge" [ngClass]="getStatusClass(txn.status)">{{ getStatusLabel(txn.status) }}</span>
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="detail-grid">

      <!-- Transaction Info -->
      <mat-card class="detail-card" appearance="outlined">
        <mat-card-content>
          <h3 class="card-title"><mat-icon>info</mat-icon> Transaction Info</h3>
          <div class="detail-rows">
            <div class="detail-row"><span class="label">Reference</span><span class="value mono">{{ txn.referenceNumber }}</span></div>
            <div class="detail-row"><span class="label">Status</span><span class="value"><span class="status-badge sm" [ngClass]="getStatusClass(txn.status)">{{ getStatusLabel(txn.status) }}</span></span></div>
            <div class="detail-row"><span class="label">Created</span><span class="value">{{ txn.createdAt | date:'medium' }}</span></div>
            <div class="detail-row" *ngIf="txn.purpose"><span class="label">Purpose</span><span class="value">{{ txn.purpose }}</span></div>
            <div class="detail-row" *ngIf="txn.notes"><span class="label">Notes</span><span class="value">{{ txn.notes }}</span></div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Sender Details -->
      <mat-card class="detail-card" appearance="outlined">
        <mat-card-content>
          <h3 class="card-title"><mat-icon>person</mat-icon> Sender Details</h3>
          <div class="detail-rows">
            <div class="detail-row"><span class="label">Name</span><span class="value">{{ txn.senderName }}</span></div>
            <div class="detail-row" *ngIf="txn.senderPhone"><span class="label">Phone</span><span class="value">{{ txn.senderPhone }}</span></div>
            <div class="detail-row" *ngIf="txn.senderEmail"><span class="label">Email</span><span class="value">{{ txn.senderEmail }}</span></div>
            <div class="detail-row"><span class="label">Country</span><span class="value">{{ txn.senderCountry }}</span></div>
            <div class="detail-row" *ngIf="txn.senderIdType"><span class="label">ID Type</span><span class="value">{{ txn.senderIdType }}</span></div>
            <div class="detail-row" *ngIf="txn.senderIdNumber"><span class="label">ID Number</span><span class="value mono">{{ txn.senderIdNumber }}</span></div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Receiver Details -->
      <mat-card class="detail-card" appearance="outlined">
        <mat-card-content>
          <h3 class="card-title"><mat-icon>person_outline</mat-icon> Receiver Details</h3>
          <div class="detail-rows">
            <div class="detail-row"><span class="label">Name</span><span class="value">{{ txn.receiverName }}</span></div>
            <div class="detail-row" *ngIf="txn.receiverPhone"><span class="label">Phone</span><span class="value">{{ txn.receiverPhone }}</span></div>
            <div class="detail-row" *ngIf="txn.receiverEmail"><span class="label">Email</span><span class="value">{{ txn.receiverEmail }}</span></div>
            <div class="detail-row"><span class="label">Country</span><span class="value">{{ txn.receiverCountry }}</span></div>
            <div class="detail-row" *ngIf="txn.receiverBankName"><span class="label">Bank</span><span class="value">{{ txn.receiverBankName }}</span></div>
            <div class="detail-row" *ngIf="txn.receiverAccountNumber"><span class="label">Account</span><span class="value mono">{{ txn.receiverAccountNumber }}</span></div>
            <div class="detail-row" *ngIf="txn.receiverBranchName"><span class="label">Branch</span><span class="value">{{ txn.receiverBranchName }}</span></div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Financial Details -->
      <mat-card class="detail-card" appearance="outlined">
        <mat-card-content>
          <h3 class="card-title"><mat-icon>payments</mat-icon> Financial Details</h3>
          <div class="detail-rows">
            <div class="detail-row"><span class="label">Send Amount</span><span class="value amount-send">{{ txn.sendAmount | number:'1.2-2' }} {{ txn.sendCurrency }}</span></div>
            <div class="detail-row"><span class="label">Exchange Rate</span><span class="value">1 {{ txn.sendCurrency }} = {{ txn.exchangeRateApplied | number:'1.4-4' }} {{ txn.receiveCurrency }}</span></div>
            <div class="detail-row"><span class="label">Receive Amount</span><span class="value amount-receive">{{ txn.receiveAmount | number:'1.2-2' }} {{ txn.receiveCurrency }}</span></div>
            <mat-divider></mat-divider>
            <div class="detail-row"><span class="label">Total Service Charge</span><span class="value">{{ txn.totalCommission | number:'1.2-2' }} {{ txn.sendCurrency }}</span></div>
            <div class="detail-row"><span class="label">Agent Service Charge</span><span class="value">{{ txn.agentCommission | number:'1.2-2' }}</span></div>
            <div class="detail-row"><span class="label">Payout Agent Service Charge</span><span class="value">{{ txn.payoutAgentCommission | number:'1.2-2' }}</span></div>
            <div class="detail-row"><span class="label">Company Service Charge</span><span class="value">{{ txn.companyCommission | number:'1.2-2' }}</span></div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Agent Details -->
      <mat-card class="detail-card" appearance="outlined">
        <mat-card-content>
          <h3 class="card-title"><mat-icon>business</mat-icon> Agent Details</h3>
          <div class="detail-rows">
            <div class="detail-row" *ngIf="txn.sendingAgentName"><span class="label">Sending Agent</span><span class="value">{{ txn.sendingAgentName }}</span></div>
            <div class="detail-row" *ngIf="txn.payoutAgentName"><span class="label">Payout Agent</span><span class="value">{{ txn.payoutAgentName }}</span></div>
            <div class="detail-row" *ngIf="txn.paymentMethodName"><span class="label">Payment Method</span><span class="value">{{ txn.paymentMethodName }}</span></div>
            <div class="detail-row" *ngIf="txn.payoutMethodName"><span class="label">Payout Method</span><span class="value">{{ txn.payoutMethodName }}</span></div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Timeline -->
      <mat-card class="detail-card" appearance="outlined">
        <mat-card-content>
          <h3 class="card-title"><mat-icon>schedule</mat-icon> Timeline</h3>
          <div class="detail-rows">
            <div class="detail-row"><span class="label">Created</span><span class="value">{{ txn.createdAt | date:'medium' }}</span></div>
            <div class="detail-row" *ngIf="txn.updatedAt"><span class="label">Last Updated</span><span class="value">{{ txn.updatedAt | date:'medium' }}</span></div>
            <div class="detail-row" *ngIf="txn.completedAt"><span class="label">Completed</span><span class="value">{{ txn.completedAt | date:'medium' }}</span></div>
            <div class="detail-row" *ngIf="txn.approvedByUserId"><span class="label">Approved By</span><span class="value mono">{{ txn.approvedByUserId }}</span></div>
          </div>
        </mat-card-content>
      </mat-card>

    </div>

    <!-- Action Buttons -->
    <div class="action-bar" *ngIf="canApprove() || canComplete() || canCancel()">
      <button mat-raised-button color="primary" *ngIf="canApprove()" (click)="approve()" [disabled]="actionLoading">
        <mat-icon>check_circle</mat-icon> Approve
      </button>
      <button mat-raised-button color="accent" *ngIf="canComplete()" (click)="complete()" [disabled]="actionLoading">
        <mat-icon>done_all</mat-icon> Complete
      </button>
      <button mat-raised-button color="warn" *ngIf="canCancel()" (click)="cancel()" [disabled]="actionLoading">
        <mat-icon>cancel</mat-icon> Cancel
      </button>
    </div>

  </ng-container>
</div>
`, styles: ['/* src/app/pages/admin/transaction-detail/transaction-detail.component.scss */\n:host {\n  display: block;\n}\n.txn-detail-page {\n  max-width: 1200px;\n}\n.loading-container {\n  padding: 60px;\n}\n.detail-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.detail-header .header-info {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.detail-header .ref-number {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n}\n.status-badge {\n  display: inline-block;\n  padding: 4px 14px;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.status-badge.sm {\n  padding: 2px 10px;\n  font-size: 11px;\n}\n.status-completed {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-pending {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-processing {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-onhold {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-failed {\n  background: #fbe9e7;\n  color: #c62828;\n}\n.status-cancelled {\n  background: #efebe9;\n  color: #5d4037;\n}\n.status-compliance {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.detail-card .card-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #1a56db;\n}\n.detail-card .card-title mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.detail-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 4px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.detail-row .label {\n  font-size: 13px;\n  color: #666;\n  font-weight: 500;\n}\n.detail-row .value {\n  font-size: 13px;\n  color: #333;\n  font-weight: 500;\n  text-align: right;\n}\n.detail-row .value.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.detail-row .value.amount-send {\n  color: #1565c0;\n  font-size: 15px;\n  font-weight: 700;\n}\n.detail-row .value.amount-receive {\n  color: #2e7d32;\n  font-size: 15px;\n  font-weight: 700;\n}\nmat-divider {\n  margin: 8px 0;\n}\n.action-bar {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  background: #fafafa;\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=transaction-detail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionDetailComponent, { className: "TransactionDetailComponent", filePath: "src/app/pages/admin/transaction-detail/transaction-detail.component.ts", lineNumber: 32 });
})();
export {
  TransactionDetailComponent
};
//# sourceMappingURL=chunk-FHZXJQGU.js.map
