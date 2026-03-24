import {
  MatSortModule
} from "./chunk-4MG2VR7R.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-M4YJYRUV.js";
import {
  ExportService
} from "./chunk-WHBCS6YY.js";
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
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-IHZVJAJK.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-ZMWNDU6W.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-AD4S7CLJ.js";
import {
  MatOption
} from "./chunk-AGEK5EEG.js";
import "./chunk-ZVT67ZIY.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-RTKH6WOT.js";
import "./chunk-57Y34HEX.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-KDE7SEZO.js";
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
  MatCardModule
} from "./chunk-SKYCJQIS.js";
import "./chunk-4DSKJDZB.js";
import {
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-E4MJAOS2.js";
import {
  ApiService
} from "./chunk-VYOOPMBG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgModel
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
  Subject,
  debounceTime,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction1,
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
} from "./chunk-J3ROLHMS.js";

// src/app/pages/admin/transactions/admin-transactions.component.ts
var _c0 = () => [10, 20, 50];
var _c1 = (a0) => ["/admin/transactions", a0];
function AdminTransactionsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_13_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function AdminTransactionsComponent_mat_card_13_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchText = "";
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "clear");
    \u0275\u0275elementEnd()();
  }
}
function AdminTransactionsComponent_mat_card_13_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Reference");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_13_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "a", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, txn_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r4.referenceNumber);
  }
}
function AdminTransactionsComponent_mat_card_13_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Sender");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_13_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r5.senderName);
  }
}
function AdminTransactionsComponent_mat_card_13_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Receiver");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_13_td_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r6.receiverName);
  }
}
function AdminTransactionsComponent_mat_card_13_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Send Amount");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_13_td_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, txn_r7.sendAmount, "1.2-2"), " ", txn_r7.sendCurrency, " ");
  }
}
function AdminTransactionsComponent_mat_card_13_th_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Receive Amount");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_13_td_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, txn_r8.receiveAmount, "1.2-2"), " ", txn_r8.receiveCurrency, " ");
  }
}
function AdminTransactionsComponent_mat_card_13_th_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Rate");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_13_td_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, txn_r9.exchangeRateApplied, "1.4-4"));
  }
}
function AdminTransactionsComponent_mat_card_13_th_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Service Charge");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_13_td_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, txn_r10.totalCommission, "1.2-2"));
  }
}
function AdminTransactionsComponent_mat_card_13_th_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_13_td_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(txn_r11.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(txn_r11.status), " ");
  }
}
function AdminTransactionsComponent_mat_card_13_th_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_13_td_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, txn_r12.createdAt, "MMM dd, HH:mm"));
  }
}
function AdminTransactionsComponent_mat_card_13_th_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_13_td_58_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function AdminTransactionsComponent_mat_card_13_td_58_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const txn_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.completeTransaction(txn_r14));
    });
    \u0275\u0275elementStart(1, "mat-icon", 57);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AdminTransactionsComponent_mat_card_13_td_58_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function AdminTransactionsComponent_mat_card_13_td_58_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const txn_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelTransaction(txn_r14));
    });
    \u0275\u0275elementStart(1, "mat-icon", 59);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function AdminTransactionsComponent_mat_card_13_td_58_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function AdminTransactionsComponent_mat_card_13_td_58_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const txn_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelTransaction(txn_r14));
    });
    \u0275\u0275elementStart(1, "mat-icon", 59);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function AdminTransactionsComponent_mat_card_13_td_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 50)(1, "button", 51);
    \u0275\u0275listener("click", function AdminTransactionsComponent_mat_card_13_td_58_Template_button_click_1_listener() {
      const txn_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(txn_r14));
    });
    \u0275\u0275elementStart(2, "mat-icon", 52);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AdminTransactionsComponent_mat_card_13_td_58_button_4_Template, 3, 0, "button", 53)(5, AdminTransactionsComponent_mat_card_13_td_58_button_5_Template, 3, 0, "button", 54)(6, AdminTransactionsComponent_mat_card_13_td_58_button_6_Template, 3, 0, "button", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r14 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", txn_r14.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", txn_r14.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", txn_r14.status === "Completed");
  }
}
function AdminTransactionsComponent_mat_card_13_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 61);
  }
}
function AdminTransactionsComponent_mat_card_13_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 62);
  }
}
function AdminTransactionsComponent_mat_card_13_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 63)(1, "td", 64);
    \u0275\u0275text(2, " No transactions found. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.displayedColumns.length);
  }
}
function AdminTransactionsComponent_mat_card_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 9)(1, "div", 10)(2, "mat-form-field", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-label");
    \u0275\u0275text(6, "Search by reference, sender, receiver...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AdminTransactionsComponent_mat_card_13_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminTransactionsComponent_mat_card_13_Template_input_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminTransactionsComponent_mat_card_13_button_8_Template, 3, 0, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 15)(10, "mat-label");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AdminTransactionsComponent_mat_card_13_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminTransactionsComponent_mat_card_13_Template_mat_select_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusChange());
    });
    \u0275\u0275elementStart(13, "mat-option", 17);
    \u0275\u0275text(14, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 18);
    \u0275\u0275text(16, "On Hold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 19);
    \u0275\u0275text(18, "Compliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 20);
    \u0275\u0275text(20, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 21);
    \u0275\u0275text(22, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 22);
    \u0275\u0275text(24, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-option", 23);
    \u0275\u0275text(26, "Failed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 24)(28, "table", 25);
    \u0275\u0275elementContainerStart(29, 26);
    \u0275\u0275template(30, AdminTransactionsComponent_mat_card_13_th_30_Template, 2, 0, "th", 27)(31, AdminTransactionsComponent_mat_card_13_td_31_Template, 3, 4, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(32, 29);
    \u0275\u0275template(33, AdminTransactionsComponent_mat_card_13_th_33_Template, 2, 0, "th", 27)(34, AdminTransactionsComponent_mat_card_13_td_34_Template, 2, 1, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(35, 31);
    \u0275\u0275template(36, AdminTransactionsComponent_mat_card_13_th_36_Template, 2, 0, "th", 27)(37, AdminTransactionsComponent_mat_card_13_td_37_Template, 2, 1, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(38, 32);
    \u0275\u0275template(39, AdminTransactionsComponent_mat_card_13_th_39_Template, 2, 0, "th", 27)(40, AdminTransactionsComponent_mat_card_13_td_40_Template, 3, 5, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(41, 33);
    \u0275\u0275template(42, AdminTransactionsComponent_mat_card_13_th_42_Template, 2, 0, "th", 27)(43, AdminTransactionsComponent_mat_card_13_td_43_Template, 3, 5, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(44, 34);
    \u0275\u0275template(45, AdminTransactionsComponent_mat_card_13_th_45_Template, 2, 0, "th", 27)(46, AdminTransactionsComponent_mat_card_13_td_46_Template, 3, 4, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(47, 35);
    \u0275\u0275template(48, AdminTransactionsComponent_mat_card_13_th_48_Template, 2, 0, "th", 27)(49, AdminTransactionsComponent_mat_card_13_td_49_Template, 3, 4, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(50, 36);
    \u0275\u0275template(51, AdminTransactionsComponent_mat_card_13_th_51_Template, 2, 0, "th", 27)(52, AdminTransactionsComponent_mat_card_13_td_52_Template, 3, 2, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(53, 37);
    \u0275\u0275template(54, AdminTransactionsComponent_mat_card_13_th_54_Template, 2, 0, "th", 27)(55, AdminTransactionsComponent_mat_card_13_td_55_Template, 3, 4, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(56, 38);
    \u0275\u0275template(57, AdminTransactionsComponent_mat_card_13_th_57_Template, 2, 0, "th", 27)(58, AdminTransactionsComponent_mat_card_13_td_58_Template, 7, 3, "td", 39);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(59, AdminTransactionsComponent_mat_card_13_tr_59_Template, 1, 0, "tr", 40)(60, AdminTransactionsComponent_mat_card_13_tr_60_Template, 1, 0, "tr", 41)(61, AdminTransactionsComponent_mat_card_13_tr_61_Template, 3, 1, "tr", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "mat-paginator", 43);
    \u0275\u0275listener("page", function AdminTransactionsComponent_mat_card_13_Template_mat_paginator_page_62_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchText);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance(16);
    \u0275\u0275property("dataSource", ctx_r1.transactions);
    \u0275\u0275advance(31);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r1.totalCount)("pageIndex", ctx_r1.pageIndex)("pageSize", ctx_r1.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(10, _c0));
  }
}
function AdminTransactionsComponent_div_14_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.receiverBankName);
  }
}
function AdminTransactionsComponent_div_14_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.receiverAccountNumber);
  }
}
function AdminTransactionsComponent_div_14_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.receiverBranchName);
  }
}
function AdminTransactionsComponent_div_14_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.paymentMethodName);
  }
}
function AdminTransactionsComponent_div_14_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "Payout Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.payoutMethodName);
  }
}
function AdminTransactionsComponent_div_14_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.sendingAgentName);
  }
}
function AdminTransactionsComponent_div_14_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "Payout Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.payoutAgentName);
  }
}
function AdminTransactionsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "h3");
    \u0275\u0275text(4, "Transaction Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 69)(9, "div", 70)(10, "span", 71);
    \u0275\u0275text(11, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 72);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 70)(15, "span", 71);
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 49);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 70)(20, "span", 71);
    \u0275\u0275text(21, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 73);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 70)(25, "span", 71);
    \u0275\u0275text(26, "Sender Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 73);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 70)(30, "span", 71);
    \u0275\u0275text(31, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 73);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 70)(35, "span", 71);
    \u0275\u0275text(36, "Receiver Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 73);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, AdminTransactionsComponent_div_14_div_39_Template, 5, 1, "div", 74)(40, AdminTransactionsComponent_div_14_div_40_Template, 5, 1, "div", 74)(41, AdminTransactionsComponent_div_14_div_41_Template, 5, 1, "div", 74);
    \u0275\u0275elementStart(42, "div", 70)(43, "span", 71);
    \u0275\u0275text(44, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 73);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(48, "hr", 75);
    \u0275\u0275elementStart(49, "div", 69)(50, "div", 70)(51, "span", 71);
    \u0275\u0275text(52, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 76);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 70)(57, "span", 71);
    \u0275\u0275text(58, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 76);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 70)(63, "span", 71);
    \u0275\u0275text(64, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 73);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 70)(69, "span", 71);
    \u0275\u0275text(70, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 73);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 70)(75, "span", 71);
    \u0275\u0275text(76, "Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 73);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 70)(81, "span", 71);
    \u0275\u0275text(82, "Payout Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 73);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 70)(87, "span", 71);
    \u0275\u0275text(88, "Company Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 73);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(92, AdminTransactionsComponent_div_14_div_92_Template, 5, 1, "div", 74)(93, AdminTransactionsComponent_div_14_div_93_Template, 5, 1, "div", 74)(94, AdminTransactionsComponent_div_14_div_94_Template, 5, 1, "div", 74)(95, AdminTransactionsComponent_div_14_div_95_Template, 5, 1, "div", 74);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.referenceNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(ctx_r1.selectedTransaction.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.selectedTransaction.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.senderCountry);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.receiverName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.receiverCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.receiverBankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.receiverAccountNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.receiverBranchName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 24, ctx_r1.selectedTransaction.createdAt, "yyyy-MM-dd HH:mm"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(55, 27, ctx_r1.selectedTransaction.sendAmount, "1.2-2"), " ", ctx_r1.selectedTransaction.sendCurrency, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(61, 30, ctx_r1.selectedTransaction.receiveAmount, "1.2-2"), " ", ctx_r1.selectedTransaction.receiveCurrency, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 33, ctx_r1.selectedTransaction.exchangeRateApplied, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 36, ctx_r1.selectedTransaction.totalCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 39, ctx_r1.selectedTransaction.agentCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 42, ctx_r1.selectedTransaction.payoutAgentCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 45, ctx_r1.selectedTransaction.companyCommission, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.paymentMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.payoutMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.sendingAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.payoutAgentName);
  }
}
var AdminTransactionsComponent = class _AdminTransactionsComponent {
  constructor(api, exportService, auth, notify, route) {
    this.api = api;
    this.exportService = exportService;
    this.auth = auth;
    this.notify = notify;
    this.route = route;
    this.displayedColumns = [
      "referenceNumber",
      "senderName",
      "receiverName",
      "sendAmount",
      "receiveAmount",
      "exchangeRate",
      "commission",
      "status",
      "createdAt",
      "actions"
    ];
    this.transactions = [];
    this.loading = true;
    this.searchText = "";
    this.statusFilter = "All";
    this.selectedTransaction = null;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchSubject = new Subject();
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.auth.loadFromSession();
    const qStatus = this.route.snapshot.queryParamMap.get("status");
    if (qStatus)
      this.statusFilter = qStatus;
    this.searchSubject.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(() => {
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
    const params = {
      page: this.pageIndex + 1,
      pageSize: this.pageSize,
      search: this.searchText
    };
    if (this.statusFilter && this.statusFilter !== "All") {
      params.status = this.statusFilter;
    }
    this.api.getTransactionsPaged(params).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.transactions = res.data.items ?? [];
          this.totalCount = res.data.totalCount ?? 0;
        } else {
          this.transactions = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load transactions.");
        }
        this.loading = false;
      },
      error: () => {
        this.transactions = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  onSearchChange() {
    this.searchSubject.next(this.searchText);
  }
  onStatusChange() {
    this.pageIndex = 0;
    this.loadTransactions();
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadTransactions();
  }
  exportData(format) {
    this.exportService.export("api/admin/transactions/export", { search: this.searchText }, format);
  }
  completeTransaction(txn) {
    this.api.completeTransaction(txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(`Transaction ${txn.referenceNumber} completed.`);
          this.loadTransactions();
        } else {
          this.notify.error(res?.message || "Failed to complete transaction.");
        }
      },
      error: () => {
        this.notify.error("Error completing transaction.");
      }
    });
  }
  cancelTransaction(txn) {
    this.api.cancelTransaction(txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.warn(`Transaction ${txn.referenceNumber} cancelled.`);
          this.loadTransactions();
        } else {
          this.notify.error(res?.message || "Failed to cancel transaction.");
        }
      },
      error: () => {
        this.notify.error("Error cancelling transaction.");
      }
    });
  }
  viewDetail(txn) {
    this.selectedTransaction = txn;
  }
  closeDetail() {
    this.selectedTransaction = null;
  }
  getStatusClass(status) {
    switch (status) {
      case "Pending":
        return "status-pending";
      case "Processing":
      case "Approved":
        return "status-processing";
      case "Completed":
        return "status-completed";
      case "Cancelled":
        return "status-cancelled";
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
    this.\u0275fac = function AdminTransactionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminTransactionsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminTransactionsComponent, selectors: [["app-admin-transactions"]], decls: 15, vars: 3, consts: [[1, "page-header"], [1, "page-title"], [1, "header-actions"], ["mat-raised-button", "", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", "appearance", "outlined", 4, "ngIf"], ["class", "detail-overlay", 3, "click", 4, "ngIf"], [1, "loading-container"], ["diameter", "48"], ["appearance", "outlined", 1, "table-card"], [1, "table-toolbar"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "status-filter"], [3, "ngModelChange", "ngModel"], ["value", "All"], ["value", "OnHold"], ["value", "Compliance"], ["value", "Pending"], ["value", "Completed"], ["value", "Cancelled"], ["value", "Failed"], [1, "table-container"], ["mat-table", "", 1, "transactions-table", 3, "dataSource"], ["matColumnDef", "referenceNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "ref-cell", 4, "matCellDef"], ["matColumnDef", "senderName"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "receiverName"], ["matColumnDef", "sendAmount"], ["matColumnDef", "receiveAmount"], ["matColumnDef", "exchangeRate"], ["matColumnDef", "commission"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "actions-cell", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row no-data-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "page", "length", "pageIndex", "pageSize", "pageSizeOptions"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "ref-cell"], [1, "ref-link", 3, "routerLink"], ["mat-cell", ""], [1, "status-chip", 3, "ngClass"], ["mat-cell", "", 1, "actions-cell"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], [1, "action-view"], ["mat-icon-button", "", "matTooltip", "Complete", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Cancel", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Cancel Transaction", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Complete", 3, "click"], [1, "action-complete"], ["mat-icon-button", "", "matTooltip", "Cancel", 3, "click"], [1, "action-cancel"], ["mat-icon-button", "", "matTooltip", "Cancel Transaction", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row", "no-data-row"], [1, "mat-cell"], [1, "detail-overlay", 3, "click"], [1, "detail-popup", 3, "click"], [1, "detail-header"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value", "ref-cell"], [1, "detail-value"], ["class", "detail-item", 4, "ngIf"], [1, "detail-divider"], [1, "detail-value", "detail-bold"]], template: function AdminTransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Transaction Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function AdminTransactionsComponent_Template_button_click_4_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function AdminTransactionsComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, AdminTransactionsComponent_div_12_Template, 2, 0, "div", 4)(13, AdminTransactionsComponent_mat_card_13_Template, 63, 11, "mat-card", 5)(14, AdminTransactionsComponent_div_14_Template, 96, 48, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
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
      MatNoDataRow,
      MatPaginatorModule,
      MatPaginator,
      MatSortModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatTooltipModule,
      MatTooltip,
      MatChipsModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatCardModule,
      MatCard,
      RouterModule,
      RouterLink
    ], styles: ['\n\n.alert-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert-message.alert-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n}\n.alert-message.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n  border: 1px solid #ef9a9a;\n}\n.alert-message.alert-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n  border: 1px solid #ffcc80;\n}\n.alert-message.alert-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n  border: 1px solid #90caf9;\n}\n.alert-message[_ngcontent-%COMP%]   .alert-close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: 8px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.transactions-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.transactions-table[_ngcontent-%COMP%]   .ref-cell[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-column-actions[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-align: center;\n  width: 140px;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.no-data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: rgba(0, 0, 0, 0.54);\n  font-style: italic;\n}\n.action-view[_ngcontent-%COMP%] {\n  color: #1565c0;\n}\n.action-complete[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.action-cancel[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 12px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n  white-space: nowrap;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #880e4f;\n}\n.status-onhold[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.status-compliance[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.dark-mode[_nghost-%COMP%]   .alert-message.alert-success[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .alert-message.alert-success[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 50, 0.15);\n  color: #4ade80;\n  border-color: rgba(46, 125, 50, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .alert-message.alert-error[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .alert-message.alert-error[_ngcontent-%COMP%] {\n  background: rgba(198, 40, 40, 0.15);\n  color: #fca5a5;\n  border-color: rgba(198, 40, 40, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .alert-message.alert-warning[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .alert-message.alert-warning[_ngcontent-%COMP%] {\n  background: rgba(230, 81, 0, 0.15);\n  color: #fb923c;\n  border-color: rgba(230, 81, 0, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .alert-message.alert-info[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .alert-message.alert-info[_ngcontent-%COMP%] {\n  background: rgba(21, 101, 192, 0.15);\n  color: #60a5fa;\n  border-color: rgba(21, 101, 192, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .no-data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .no-data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .action-view[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .action-view[_ngcontent-%COMP%] {\n  color: #60a5fa;\n}\n.dark-mode[_nghost-%COMP%]   .action-complete[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .action-complete[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.dark-mode[_nghost-%COMP%]   .action-cancel[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .action-cancel[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.dark-mode[_nghost-%COMP%]   .status-pending[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-pending[_ngcontent-%COMP%] {\n  background: rgba(230, 81, 0, 0.2);\n  color: #fb923c;\n}\n.dark-mode[_nghost-%COMP%]   .status-processing[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-processing[_ngcontent-%COMP%] {\n  background: rgba(21, 101, 192, 0.2);\n  color: #60a5fa;\n}\n.dark-mode[_nghost-%COMP%]   .status-completed[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-completed[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 50, 0.2);\n  color: #4ade80;\n}\n.dark-mode[_nghost-%COMP%]   .status-cancelled[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-cancelled[_ngcontent-%COMP%] {\n  background: rgba(198, 40, 40, 0.2);\n  color: #fca5a5;\n}\n.dark-mode[_nghost-%COMP%]   .status-failed[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-failed[_ngcontent-%COMP%] {\n  background: rgba(136, 14, 79, 0.2);\n  color: #f472b6;\n}\n.dark-mode[_nghost-%COMP%]   .status-onhold[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-onhold[_ngcontent-%COMP%] {\n  background: rgba(106, 27, 154, 0.2);\n  color: #c084fc;\n}\n.dark-mode[_nghost-%COMP%]   .status-compliance[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-compliance[_ngcontent-%COMP%] {\n  background: rgba(245, 127, 23, 0.2);\n  color: #fbbf24;\n}\n.dark-mode[_nghost-%COMP%]   .status-default[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-default[_ngcontent-%COMP%] {\n  background: rgba(97, 97, 97, 0.2);\n  color: #94a3b8;\n}\n/*# sourceMappingURL=admin-transactions.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-transactions", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatIconModule,
      MatButtonModule,
      MatTooltipModule,
      MatChipsModule,
      MatProgressSpinnerModule,
      MatCardModule,
      RouterModule,
      DecimalPipe,
      DatePipe
    ], template: `<!-- Page Header -->
<div class="page-header">
  <h2 class="page-title">Transaction Management</h2>
  <div class="header-actions">
    <button mat-raised-button (click)="exportData('excel')">
      <mat-icon>download</mat-icon> Excel
    </button>
    <button mat-raised-button (click)="exportData('csv')">
      <mat-icon>download</mat-icon> CSV
    </button>
  </div>
</div>

<!-- Loading Spinner -->
<div *ngIf="loading" class="loading-container">
  <mat-spinner diameter="48"></mat-spinner>
</div>

<!-- Transactions Table -->
<mat-card *ngIf="!loading" class="table-card" appearance="outlined">
  <!-- Toolbar -->
  <div class="table-toolbar">
    <mat-form-field appearance="outline" class="search-field">
      <mat-icon matPrefix>search</mat-icon>
      <mat-label>Search by reference, sender, receiver...</mat-label>
      <input matInput [(ngModel)]="searchText" (ngModelChange)="onSearchChange()" placeholder="Search..." />
      <button *ngIf="searchText" mat-icon-button matSuffix (click)="searchText = ''; onSearchChange()">
        <mat-icon>clear</mat-icon>
      </button>
    </mat-form-field>

    <mat-form-field appearance="outline" class="status-filter">
      <mat-label>Status</mat-label>
      <mat-select [(ngModel)]="statusFilter" (ngModelChange)="onStatusChange()">
        <mat-option value="All">All</mat-option>
        <mat-option value="OnHold">On Hold</mat-option>
        <mat-option value="Compliance">Compliance</mat-option>
        <mat-option value="Pending">Pending</mat-option>
        <mat-option value="Completed">Completed</mat-option>
        <mat-option value="Cancelled">Cancelled</mat-option>
        <mat-option value="Failed">Failed</mat-option>
      </mat-select>
    </mat-form-field>
  </div>

  <div class="table-container">
    <table mat-table [dataSource]="transactions" class="transactions-table">
      <!-- Reference Number -->
      <ng-container matColumnDef="referenceNumber">
        <th mat-header-cell *matHeaderCellDef>Reference</th>
        <td mat-cell *matCellDef="let txn" class="ref-cell">
          <a [routerLink]="['/admin/transactions', txn.id]" class="ref-link">{{ txn.referenceNumber }}</a>
        </td>
      </ng-container>

      <!-- Sender -->
      <ng-container matColumnDef="senderName">
        <th mat-header-cell *matHeaderCellDef>Sender</th>
        <td mat-cell *matCellDef="let txn">{{ txn.senderName }}</td>
      </ng-container>

      <!-- Receiver -->
      <ng-container matColumnDef="receiverName">
        <th mat-header-cell *matHeaderCellDef>Receiver</th>
        <td mat-cell *matCellDef="let txn">{{ txn.receiverName }}</td>
      </ng-container>

      <!-- Send Amount -->
      <ng-container matColumnDef="sendAmount">
        <th mat-header-cell *matHeaderCellDef>Send Amount</th>
        <td mat-cell *matCellDef="let txn">
          {{ txn.sendAmount | number:'1.2-2' }} {{ txn.sendCurrency }}
        </td>
      </ng-container>

      <!-- Receive Amount -->
      <ng-container matColumnDef="receiveAmount">
        <th mat-header-cell *matHeaderCellDef>Receive Amount</th>
        <td mat-cell *matCellDef="let txn">
          {{ txn.receiveAmount | number:'1.2-2' }} {{ txn.receiveCurrency }}
        </td>
      </ng-container>

      <!-- Exchange Rate -->
      <ng-container matColumnDef="exchangeRate">
        <th mat-header-cell *matHeaderCellDef>Rate</th>
        <td mat-cell *matCellDef="let txn">{{ txn.exchangeRateApplied | number:'1.4-4' }}</td>
      </ng-container>

      <!-- Commission -->
      <ng-container matColumnDef="commission">
        <th mat-header-cell *matHeaderCellDef>Service Charge</th>
        <td mat-cell *matCellDef="let txn">{{ txn.totalCommission | number:'1.2-2' }}</td>
      </ng-container>

      <!-- Status -->
      <ng-container matColumnDef="status">
        <th mat-header-cell *matHeaderCellDef>Status</th>
        <td mat-cell *matCellDef="let txn">
          <span class="status-chip" [ngClass]="getStatusClass(txn.status)">
            {{ getStatusLabel(txn.status) }}
          </span>
        </td>
      </ng-container>

      <!-- Date -->
      <ng-container matColumnDef="createdAt">
        <th mat-header-cell *matHeaderCellDef>Date</th>
        <td mat-cell *matCellDef="let txn">{{ txn.createdAt | date:'MMM dd, HH:mm' }}</td>
      </ng-container>

      <!-- Actions -->
      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef>Actions</th>
        <td mat-cell *matCellDef="let txn" class="actions-cell">
          <!-- View Details (always) -->
          <button mat-icon-button matTooltip="View Details" (click)="viewDetail(txn)">
            <mat-icon class="action-view">visibility</mat-icon>
          </button>

          <!-- OnHold / Compliance: show status label only (agent must release first) -->

          <!-- Pending: Admin can Complete -->
          <button
            *ngIf="txn.status === 'Pending'"
            mat-icon-button
            matTooltip="Complete"
            (click)="completeTransaction(txn)"
          >
            <mat-icon class="action-complete">check_circle</mat-icon>
          </button>

          <!-- Pending: Admin can Cancel -->
          <button
            *ngIf="txn.status === 'Pending'"
            mat-icon-button
            matTooltip="Cancel"
            (click)="cancelTransaction(txn)"
          >
            <mat-icon class="action-cancel">cancel</mat-icon>
          </button>

          <!-- Completed: Admin can still Cancel -->
          <button
            *ngIf="txn.status === 'Completed'"
            mat-icon-button
            matTooltip="Cancel Transaction"
            (click)="cancelTransaction(txn)"
          >
            <mat-icon class="action-cancel">cancel</mat-icon>
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

      <!-- No data row -->
      <tr class="mat-row no-data-row" *matNoDataRow>
        <td class="mat-cell" [attr.colspan]="displayedColumns.length">
          No transactions found.
        </td>
      </tr>
    </table>
  </div>

  <mat-paginator
    [length]="totalCount"
    [pageIndex]="pageIndex"
    [pageSize]="pageSize"
    [pageSizeOptions]="[10, 20, 50]"
    (page)="onPageChange($event)"
    showFirstLastButtons>
  </mat-paginator>
</mat-card>

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
        <span class="detail-value ref-cell">{{ selectedTransaction.referenceNumber }}</span>
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
        <span class="detail-label">Agent Service Charge</span>
        <span class="detail-value">{{ selectedTransaction.agentCommission | number:'1.2-2' }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Payout Agent Service Charge</span>
        <span class="detail-value">{{ selectedTransaction.payoutAgentCommission | number:'1.2-2' }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Company Service Charge</span>
        <span class="detail-value">{{ selectedTransaction.companyCommission | number:'1.2-2' }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedTransaction.paymentMethodName">
        <span class="detail-label">Payment Method</span>
        <span class="detail-value">{{ selectedTransaction.paymentMethodName }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedTransaction.payoutMethodName">
        <span class="detail-label">Payout Method</span>
        <span class="detail-value">{{ selectedTransaction.payoutMethodName }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedTransaction.sendingAgentName">
        <span class="detail-label">Sending Agent</span>
        <span class="detail-value">{{ selectedTransaction.sendingAgentName }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedTransaction.payoutAgentName">
        <span class="detail-label">Payout Partner</span>
        <span class="detail-value">{{ selectedTransaction.payoutAgentName }}</span>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/pages/admin/transactions/admin-transactions.component.scss */\n.alert-message {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert-message.alert-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n}\n.alert-message.alert-error {\n  background: #ffebee;\n  color: #c62828;\n  border: 1px solid #ef9a9a;\n}\n.alert-message.alert-warning {\n  background: #fff3e0;\n  color: #e65100;\n  border: 1px solid #ffcc80;\n}\n.alert-message.alert-info {\n  background: #e3f2fd;\n  color: #1565c0;\n  border: 1px solid #90caf9;\n}\n.alert-message .alert-close {\n  flex-shrink: 0;\n  margin-left: 8px;\n}\n.table-container {\n  overflow-x: auto;\n}\n.transactions-table {\n  width: 100%;\n}\n.transactions-table .ref-cell {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n}\n.transactions-table .mat-column-actions {\n  white-space: nowrap;\n  text-align: center;\n  width: 140px;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.no-data-row td {\n  text-align: center;\n  padding: 32px 16px;\n  color: rgba(0, 0, 0, 0.54);\n  font-style: italic;\n}\n.action-view {\n  color: #1565c0;\n}\n.action-complete {\n  color: #2e7d32;\n}\n.action-cancel {\n  color: #d32f2f;\n}\n.status-chip {\n  display: inline-block;\n  padding: 2px 12px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n  white-space: nowrap;\n}\n.status-pending {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-processing {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-completed {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-cancelled {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-failed {\n  background: #fce4ec;\n  color: #880e4f;\n}\n.status-onhold {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.status-compliance {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n:host-context(.dark-mode) .alert-message.alert-success {\n  background: rgba(46, 125, 50, 0.15);\n  color: #4ade80;\n  border-color: rgba(46, 125, 50, 0.3);\n}\n:host-context(.dark-mode) .alert-message.alert-error {\n  background: rgba(198, 40, 40, 0.15);\n  color: #fca5a5;\n  border-color: rgba(198, 40, 40, 0.3);\n}\n:host-context(.dark-mode) .alert-message.alert-warning {\n  background: rgba(230, 81, 0, 0.15);\n  color: #fb923c;\n  border-color: rgba(230, 81, 0, 0.3);\n}\n:host-context(.dark-mode) .alert-message.alert-info {\n  background: rgba(21, 101, 192, 0.15);\n  color: #60a5fa;\n  border-color: rgba(21, 101, 192, 0.3);\n}\n:host-context(.dark-mode) .no-data-row td {\n  color: #64748b;\n}\n:host-context(.dark-mode) .action-view {\n  color: #60a5fa;\n}\n:host-context(.dark-mode) .action-complete {\n  color: #4ade80;\n}\n:host-context(.dark-mode) .action-cancel {\n  color: #f87171;\n}\n:host-context(.dark-mode) .status-pending {\n  background: rgba(230, 81, 0, 0.2);\n  color: #fb923c;\n}\n:host-context(.dark-mode) .status-processing {\n  background: rgba(21, 101, 192, 0.2);\n  color: #60a5fa;\n}\n:host-context(.dark-mode) .status-completed {\n  background: rgba(46, 125, 50, 0.2);\n  color: #4ade80;\n}\n:host-context(.dark-mode) .status-cancelled {\n  background: rgba(198, 40, 40, 0.2);\n  color: #fca5a5;\n}\n:host-context(.dark-mode) .status-failed {\n  background: rgba(136, 14, 79, 0.2);\n  color: #f472b6;\n}\n:host-context(.dark-mode) .status-onhold {\n  background: rgba(106, 27, 154, 0.2);\n  color: #c084fc;\n}\n:host-context(.dark-mode) .status-compliance {\n  background: rgba(245, 127, 23, 0.2);\n  color: #fbbf24;\n}\n:host-context(.dark-mode) .status-default {\n  background: rgba(97, 97, 97, 0.2);\n  color: #94a3b8;\n}\n/*# sourceMappingURL=admin-transactions.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: ExportService }, { type: AuthStateService }, { type: NotificationService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminTransactionsComponent, { className: "AdminTransactionsComponent", filePath: "src/app/pages/admin/transactions/admin-transactions.component.ts", lineNumber: 50 });
})();
export {
  AdminTransactionsComponent
};
//# sourceMappingURL=chunk-GSO6LZN4.js.map
