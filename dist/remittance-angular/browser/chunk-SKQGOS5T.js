import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-GAAPRGBK.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-37IS6HQJ.js";
import {
  MatChipsModule
} from "./chunk-VUXSNQV7.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-YGDTJNE7.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-N4KLCW3D.js";
import "./chunk-RYR4NCTK.js";
import "./chunk-4ICNUTBP.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-7GR7IV7E.js";
import "./chunk-NNRSADKN.js";
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
  MatTableDataSource,
  MatTableModule
} from "./chunk-NF2W6NXA.js";
import {
  ApiService,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSuffix
} from "./chunk-IPUKUTHA.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-SKGBRZ6H.js";
import {
  AuthStateService
} from "./chunk-T6M7P6K3.js";
import "./chunk-3TORE4W6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButtonModule,
  MatIconButton,
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
  ViewChild,
  setClassMetadata,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7WRAX6BO.js";

// src/app/pages/admin/transactions/admin-transactions.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "alert-success": a0, "alert-error": a1, "alert-warning": a2, "alert-info": a3 });
var _c1 = () => [10, 25, 50];
function AdminTransactionsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissMessage());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(2, _c0, ctx_r1.messageType === "success", ctx_r1.messageType === "error", ctx_r1.messageType === "warning", ctx_r1.messageType === "info"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.message);
  }
}
function AdminTransactionsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function AdminTransactionsComponent_mat_card_4_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchText = "";
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "clear");
    \u0275\u0275elementEnd()();
  }
}
function AdminTransactionsComponent_mat_card_4_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Reference Number");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_4_td_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r5.referenceNumber);
  }
}
function AdminTransactionsComponent_mat_card_4_th_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Sender");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_4_td_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r6.senderName);
  }
}
function AdminTransactionsComponent_mat_card_4_th_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Receiver");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_4_td_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r7.receiverName);
  }
}
function AdminTransactionsComponent_mat_card_4_th_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Send Amount");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_4_td_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, txn_r8.sendAmount, "1.2-2"), " ", txn_r8.sendCurrency, " ");
  }
}
function AdminTransactionsComponent_mat_card_4_th_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Receive Amount");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_4_td_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, txn_r9.receiveAmount, "1.2-2"), " ", txn_r9.receiveCurrency, " ");
  }
}
function AdminTransactionsComponent_mat_card_4_th_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Rate");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_4_td_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, txn_r10.exchangeRateApplied, "1.4-4"));
  }
}
function AdminTransactionsComponent_mat_card_4_th_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Commission");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_4_td_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, txn_r11.totalCommission, "1.2-2"));
  }
}
function AdminTransactionsComponent_mat_card_4_th_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_4_td_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(txn_r12.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", txn_r12.status, " ");
  }
}
function AdminTransactionsComponent_mat_card_4_th_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_4_td_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, txn_r13.createdAt, "MMM dd, HH:mm"));
  }
}
function AdminTransactionsComponent_mat_card_4_th_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_mat_card_4_td_60_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function AdminTransactionsComponent_mat_card_4_td_60_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const txn_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveTransaction(txn_r15));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AdminTransactionsComponent_mat_card_4_td_60_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function AdminTransactionsComponent_mat_card_4_td_60_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const txn_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelTransaction(txn_r15));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function AdminTransactionsComponent_mat_card_4_td_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 48)(1, "button", 51);
    \u0275\u0275listener("click", function AdminTransactionsComponent_mat_card_4_td_60_Template_button_click_1_listener() {
      const txn_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(txn_r15));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AdminTransactionsComponent_mat_card_4_td_60_button_4_Template, 3, 0, "button", 52)(5, AdminTransactionsComponent_mat_card_4_td_60_button_5_Template, 3, 0, "button", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r15 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", txn_r15.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", txn_r15.status === "Pending" || txn_r15.status === "Processing");
  }
}
function AdminTransactionsComponent_mat_card_4_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
function AdminTransactionsComponent_mat_card_4_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 57);
  }
}
function AdminTransactionsComponent_mat_card_4_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 58)(1, "td", 59);
    \u0275\u0275text(2, " No transactions found. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.displayedColumns.length);
  }
}
function AdminTransactionsComponent_mat_card_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 9)(1, "div", 10)(2, "mat-form-field", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-label");
    \u0275\u0275text(6, "Search by reference, sender, receiver...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AdminTransactionsComponent_mat_card_4_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminTransactionsComponent_mat_card_4_Template_input_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminTransactionsComponent_mat_card_4_button_8_Template, 3, 0, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 15)(10, "mat-label");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AdminTransactionsComponent_mat_card_4_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminTransactionsComponent_mat_card_4_Template_mat_select_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementStart(13, "mat-option", 17);
    \u0275\u0275text(14, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 18);
    \u0275\u0275text(16, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 19);
    \u0275\u0275text(18, "Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 20);
    \u0275\u0275text(20, "Processing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 21);
    \u0275\u0275text(22, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 22);
    \u0275\u0275text(24, "On Hold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-option", 23);
    \u0275\u0275text(26, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-option", 24);
    \u0275\u0275text(28, "Failed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 25)(30, "table", 26);
    \u0275\u0275elementContainerStart(31, 27);
    \u0275\u0275template(32, AdminTransactionsComponent_mat_card_4_th_32_Template, 2, 0, "th", 28)(33, AdminTransactionsComponent_mat_card_4_td_33_Template, 2, 1, "td", 29);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(34, 30);
    \u0275\u0275template(35, AdminTransactionsComponent_mat_card_4_th_35_Template, 2, 0, "th", 28)(36, AdminTransactionsComponent_mat_card_4_td_36_Template, 2, 1, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(37, 32);
    \u0275\u0275template(38, AdminTransactionsComponent_mat_card_4_th_38_Template, 2, 0, "th", 28)(39, AdminTransactionsComponent_mat_card_4_td_39_Template, 2, 1, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(40, 33);
    \u0275\u0275template(41, AdminTransactionsComponent_mat_card_4_th_41_Template, 2, 0, "th", 28)(42, AdminTransactionsComponent_mat_card_4_td_42_Template, 3, 5, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(43, 34);
    \u0275\u0275template(44, AdminTransactionsComponent_mat_card_4_th_44_Template, 2, 0, "th", 28)(45, AdminTransactionsComponent_mat_card_4_td_45_Template, 3, 5, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(46, 35);
    \u0275\u0275template(47, AdminTransactionsComponent_mat_card_4_th_47_Template, 2, 0, "th", 28)(48, AdminTransactionsComponent_mat_card_4_td_48_Template, 3, 4, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(49, 36);
    \u0275\u0275template(50, AdminTransactionsComponent_mat_card_4_th_50_Template, 2, 0, "th", 28)(51, AdminTransactionsComponent_mat_card_4_td_51_Template, 3, 4, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(52, 37);
    \u0275\u0275template(53, AdminTransactionsComponent_mat_card_4_th_53_Template, 2, 0, "th", 28)(54, AdminTransactionsComponent_mat_card_4_td_54_Template, 3, 2, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(55, 38);
    \u0275\u0275template(56, AdminTransactionsComponent_mat_card_4_th_56_Template, 2, 0, "th", 28)(57, AdminTransactionsComponent_mat_card_4_td_57_Template, 3, 4, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(58, 39);
    \u0275\u0275template(59, AdminTransactionsComponent_mat_card_4_th_59_Template, 2, 0, "th", 40)(60, AdminTransactionsComponent_mat_card_4_td_60_Template, 6, 2, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(61, AdminTransactionsComponent_mat_card_4_tr_61_Template, 1, 0, "tr", 41)(62, AdminTransactionsComponent_mat_card_4_tr_62_Template, 1, 0, "tr", 42)(63, AdminTransactionsComponent_mat_card_4_tr_63_Template, 3, 1, "tr", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(64, "mat-paginator", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchText);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance(18);
    \u0275\u0275property("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(31);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(7, _c1));
  }
}
function AdminTransactionsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "h3");
    \u0275\u0275text(4, "Transaction Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 63);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 64)(9, "div", 65)(10, "span", 66);
    \u0275\u0275text(11, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 67);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 65)(15, "span", 66);
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 49);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 65)(20, "span", 66);
    \u0275\u0275text(21, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 68);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 65)(25, "span", 66);
    \u0275\u0275text(26, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 68);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 65)(30, "span", 66);
    \u0275\u0275text(31, "Receiver Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 68);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 65)(35, "span", 66);
    \u0275\u0275text(36, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 68);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(40, "hr", 69);
    \u0275\u0275elementStart(41, "div", 64)(42, "div", 65)(43, "span", 66);
    \u0275\u0275text(44, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 70);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 65)(49, "span", 66);
    \u0275\u0275text(50, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 70);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 65)(55, "span", 66);
    \u0275\u0275text(56, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 68);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 65)(61, "span", 66);
    \u0275\u0275text(62, "Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 68);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 65)(67, "span", 66);
    \u0275\u0275text(68, "Agent Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 68);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.referenceNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(ctx_r1.selectedTransaction.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedTransaction.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.receiverName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.receiverCountry);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 14, ctx_r1.selectedTransaction.createdAt, "yyyy-MM-dd HH:mm"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(47, 17, ctx_r1.selectedTransaction.sendAmount, "1.2-2"), " ", ctx_r1.selectedTransaction.sendCurrency, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(53, 20, ctx_r1.selectedTransaction.receiveAmount, "1.2-2"), " ", ctx_r1.selectedTransaction.receiveCurrency, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 23, ctx_r1.selectedTransaction.exchangeRateApplied, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 26, ctx_r1.selectedTransaction.totalCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 29, ctx_r1.selectedTransaction.agentCommission, "1.2-2"));
  }
}
var AdminTransactionsComponent = class _AdminTransactionsComponent {
  constructor(api, auth) {
    this.api = api;
    this.auth = auth;
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
    this.dataSource = new MatTableDataSource([]);
    this.transactions = [];
    this.loading = true;
    this.message = "";
    this.messageType = "info";
    this.searchText = "";
    this.statusFilter = "All";
    this.selectedTransaction = null;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadTransactions();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  loadTransactions() {
    this.loading = true;
    this.api.getTransactions().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.transactions = res.data;
          this.dataSource.data = res.data;
          this.dataSource.filterPredicate = this.createFilter();
        } else {
          this.transactions = [];
          this.dataSource.data = [];
          this.message = res?.message || "Failed to load transactions. Please ensure you are logged in.";
          this.messageType = "error";
        }
        this.loading = false;
      },
      error: () => {
        this.transactions = [];
        this.dataSource.data = [];
        this.message = "Could not connect to server.";
        this.messageType = "error";
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const filterValue = JSON.stringify({
      text: this.searchText.trim().toLowerCase(),
      status: this.statusFilter
    });
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  createFilter() {
    return (data, filter) => {
      const parsed = JSON.parse(filter);
      const text = parsed.text;
      const status = parsed.status;
      const matchesStatus = status === "All" || data.status === status;
      const matchesText = !text || data.referenceNumber.toLowerCase().includes(text) || data.senderName.toLowerCase().includes(text) || (data.receiverName?.toLowerCase().includes(text) ?? false);
      return matchesStatus && matchesText;
    };
  }
  approveTransaction(txn) {
    this.api.approveTransaction(txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          txn.status = "Approved";
          this.message = `Transaction ${txn.referenceNumber} approved.`;
          this.messageType = "success";
        } else {
          this.message = res?.message || "Failed to approve transaction.";
          this.messageType = "error";
        }
      },
      error: () => {
        this.message = "Error approving transaction.";
        this.messageType = "error";
      }
    });
  }
  cancelTransaction(txn) {
    this.api.cancelTransaction(txn.id).subscribe({
      next: (res) => {
        if (res?.success) {
          txn.status = "Cancelled";
          this.message = `Transaction ${txn.referenceNumber} cancelled.`;
          this.messageType = "warning";
        } else {
          this.message = res?.message || "Failed to cancel transaction.";
          this.messageType = "error";
        }
      },
      error: () => {
        this.message = "Error cancelling transaction.";
        this.messageType = "error";
      }
    });
  }
  viewDetail(txn) {
    this.selectedTransaction = txn;
  }
  closeDetail() {
    this.selectedTransaction = null;
  }
  dismissMessage() {
    this.message = "";
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
      default:
        return "status-default";
    }
  }
  static {
    this.\u0275fac = function AdminTransactionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminTransactionsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminTransactionsComponent, selectors: [["app-admin-transactions"]], viewQuery: function AdminTransactionsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5);
        \u0275\u0275viewQuery(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 6, vars: 4, consts: [[1, "page-title"], ["class", "alert-message", 3, "ngClass", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", "appearance", "outlined", 4, "ngIf"], ["class", "detail-overlay", 3, "click", 4, "ngIf"], [1, "alert-message", 3, "ngClass"], ["mat-icon-button", "", 1, "alert-close", 3, "click"], [1, "loading-container"], ["diameter", "48"], ["appearance", "outlined", 1, "table-card"], [1, "table-toolbar"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "status-filter"], [3, "ngModelChange", "ngModel"], ["value", "All"], ["value", "Pending"], ["value", "Approved"], ["value", "Processing"], ["value", "Completed"], ["value", "OnHold"], ["value", "Cancelled"], ["value", "Failed"], [1, "table-container"], ["mat-table", "", "matSort", "", 1, "transactions-table", 3, "dataSource"], ["matColumnDef", "referenceNumber"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "ref-cell", 4, "matCellDef"], ["matColumnDef", "senderName"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "receiverName"], ["matColumnDef", "sendAmount"], ["matColumnDef", "receiveAmount"], ["matColumnDef", "exchangeRate"], ["matColumnDef", "commission"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row no-data-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "ref-cell"], ["mat-cell", ""], [1, "status-chip", 3, "ngClass"], ["mat-header-cell", ""], ["mat-icon-button", "", "matTooltip", "View Details", "color", "primary", 3, "click"], ["mat-icon-button", "", "matTooltip", "Approve", "color", "primary", "class", "action-approve", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Cancel", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Approve", "color", "primary", 1, "action-approve", 3, "click"], ["mat-icon-button", "", "matTooltip", "Cancel", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row", "no-data-row"], [1, "mat-cell"], [1, "detail-overlay", 3, "click"], [1, "detail-popup", 3, "click"], [1, "detail-header"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value", "ref-cell"], [1, "detail-value"], [1, "detail-divider"], [1, "detail-value", "detail-bold"]], template: function AdminTransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Transaction Management");
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, AdminTransactionsComponent_div_2_Template, 6, 7, "div", 1)(3, AdminTransactionsComponent_div_3_Template, 2, 0, "div", 2)(4, AdminTransactionsComponent_mat_card_4_Template, 65, 8, "mat-card", 3)(5, AdminTransactionsComponent_div_5_Template, 72, 32, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.message);
        \u0275\u0275advance();
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
      MatSort,
      MatSortHeader,
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
      MatIconButton,
      MatTooltipModule,
      MatTooltip,
      MatChipsModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatCardModule,
      MatCard
    ], styles: ['\n\n.page-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 16px;\n  font-size: 1.5rem;\n}\n.alert-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.875rem;\n}\n.alert-message.alert-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n}\n.alert-message.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n  border: 1px solid #ef9a9a;\n}\n.alert-message.alert-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n  border: 1px solid #ffcc80;\n}\n.alert-message.alert-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n  border: 1px solid #90caf9;\n}\n.alert-message[_ngcontent-%COMP%]   .alert-close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: 8px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 64px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  padding: 16px 16px 0;\n  flex-wrap: wrap;\n}\n.table-toolbar[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 260px;\n}\n.table-toolbar[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%] {\n  width: 160px;\n  flex-shrink: 0;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.transactions-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.transactions-table[_ngcontent-%COMP%]   .ref-cell[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.85rem;\n}\n.transactions-table[_ngcontent-%COMP%]   .mat-column-actions[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-align: center;\n  width: 130px;\n}\n.no-data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: rgba(0, 0, 0, 0.54);\n  font-style: italic;\n}\n.action-approve[_ngcontent-%COMP%] {\n  color: #2e7d32 !important;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n  white-space: nowrap;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #880e4f;\n}\n.status-onhold[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.status-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.detail-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.detail-popup[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  width: 550px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n  z-index: 10001;\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.detail-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.25rem;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(0, 0, 0, 0.54);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.938rem;\n}\n.detail-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.detail-divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  margin: 16px 0;\n}\n/*# sourceMappingURL=admin-transactions.component.css.map */'] });
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
      DecimalPipe,
      DatePipe
    ], template: `<!-- Page Header -->\r
<h2 class="page-title">Transaction Management</h2>\r
\r
<!-- Alert Message -->\r
<div\r
  *ngIf="message"\r
  class="alert-message"\r
  [ngClass]="{\r
    'alert-success': messageType === 'success',\r
    'alert-error': messageType === 'error',\r
    'alert-warning': messageType === 'warning',\r
    'alert-info': messageType === 'info'\r
  }"\r
>\r
  <span>{{ message }}</span>\r
  <button mat-icon-button (click)="dismissMessage()" class="alert-close">\r
    <mat-icon>close</mat-icon>\r
  </button>\r
</div>\r
\r
<!-- Loading Spinner -->\r
<div *ngIf="loading" class="loading-container">\r
  <mat-spinner diameter="48"></mat-spinner>\r
</div>\r
\r
<!-- Transactions Table -->\r
<mat-card *ngIf="!loading" class="table-card" appearance="outlined">\r
  <!-- Toolbar: Search + Status Filter -->\r
  <div class="table-toolbar">\r
    <mat-form-field appearance="outline" class="search-field">\r
      <mat-icon matPrefix>search</mat-icon>\r
      <mat-label>Search by reference, sender, receiver...</mat-label>\r
      <input\r
        matInput\r
        [(ngModel)]="searchText"\r
        (ngModelChange)="applyFilter()"\r
        placeholder="Search..."\r
      />\r
      <button\r
        *ngIf="searchText"\r
        mat-icon-button\r
        matSuffix\r
        (click)="searchText = ''; applyFilter()"\r
      >\r
        <mat-icon>clear</mat-icon>\r
      </button>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline" class="status-filter">\r
      <mat-label>Status</mat-label>\r
      <mat-select [(ngModel)]="statusFilter" (ngModelChange)="applyFilter()">\r
        <mat-option value="All">All</mat-option>\r
        <mat-option value="Pending">Pending</mat-option>\r
        <mat-option value="Approved">Approved</mat-option>\r
        <mat-option value="Processing">Processing</mat-option>\r
        <mat-option value="Completed">Completed</mat-option>\r
        <mat-option value="OnHold">On Hold</mat-option>\r
        <mat-option value="Cancelled">Cancelled</mat-option>\r
        <mat-option value="Failed">Failed</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
  </div>\r
\r
  <div class="table-container">\r
    <table\r
      mat-table\r
      [dataSource]="dataSource"\r
      matSort\r
      class="transactions-table"\r
    >\r
      <!-- Reference Number -->\r
      <ng-container matColumnDef="referenceNumber">\r
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Reference Number</th>\r
        <td mat-cell *matCellDef="let txn" class="ref-cell">{{ txn.referenceNumber }}</td>\r
      </ng-container>\r
\r
      <!-- Sender -->\r
      <ng-container matColumnDef="senderName">\r
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Sender</th>\r
        <td mat-cell *matCellDef="let txn">{{ txn.senderName }}</td>\r
      </ng-container>\r
\r
      <!-- Receiver -->\r
      <ng-container matColumnDef="receiverName">\r
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Receiver</th>\r
        <td mat-cell *matCellDef="let txn">{{ txn.receiverName }}</td>\r
      </ng-container>\r
\r
      <!-- Send Amount -->\r
      <ng-container matColumnDef="sendAmount">\r
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Send Amount</th>\r
        <td mat-cell *matCellDef="let txn">\r
          {{ txn.sendAmount | number:'1.2-2' }} {{ txn.sendCurrency }}\r
        </td>\r
      </ng-container>\r
\r
      <!-- Receive Amount -->\r
      <ng-container matColumnDef="receiveAmount">\r
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Receive Amount</th>\r
        <td mat-cell *matCellDef="let txn">\r
          {{ txn.receiveAmount | number:'1.2-2' }} {{ txn.receiveCurrency }}\r
        </td>\r
      </ng-container>\r
\r
      <!-- Exchange Rate -->\r
      <ng-container matColumnDef="exchangeRate">\r
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Rate</th>\r
        <td mat-cell *matCellDef="let txn">{{ txn.exchangeRateApplied | number:'1.4-4' }}</td>\r
      </ng-container>\r
\r
      <!-- Commission -->\r
      <ng-container matColumnDef="commission">\r
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Commission</th>\r
        <td mat-cell *matCellDef="let txn">{{ txn.totalCommission | number:'1.2-2' }}</td>\r
      </ng-container>\r
\r
      <!-- Status -->\r
      <ng-container matColumnDef="status">\r
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r
        <td mat-cell *matCellDef="let txn">\r
          <span class="status-chip" [ngClass]="getStatusClass(txn.status)">\r
            {{ txn.status }}\r
          </span>\r
        </td>\r
      </ng-container>\r
\r
      <!-- Date -->\r
      <ng-container matColumnDef="createdAt">\r
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\r
        <td mat-cell *matCellDef="let txn">{{ txn.createdAt | date:'MMM dd, HH:mm' }}</td>\r
      </ng-container>\r
\r
      <!-- Actions -->\r
      <ng-container matColumnDef="actions">\r
        <th mat-header-cell *matHeaderCellDef>Actions</th>\r
        <td mat-cell *matCellDef="let txn">\r
          <button\r
            mat-icon-button\r
            matTooltip="View Details"\r
            color="primary"\r
            (click)="viewDetail(txn)"\r
          >\r
            <mat-icon>visibility</mat-icon>\r
          </button>\r
          <button\r
            *ngIf="txn.status === 'Pending'"\r
            mat-icon-button\r
            matTooltip="Approve"\r
            color="primary"\r
            class="action-approve"\r
            (click)="approveTransaction(txn)"\r
          >\r
            <mat-icon>check_circle</mat-icon>\r
          </button>\r
          <button\r
            *ngIf="txn.status === 'Pending' || txn.status === 'Processing'"\r
            mat-icon-button\r
            matTooltip="Cancel"\r
            color="warn"\r
            (click)="cancelTransaction(txn)"\r
          >\r
            <mat-icon>cancel</mat-icon>\r
          </button>\r
        </td>\r
      </ng-container>\r
\r
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
\r
      <!-- No data row -->\r
      <tr class="mat-row no-data-row" *matNoDataRow>\r
        <td class="mat-cell" [attr.colspan]="displayedColumns.length">\r
          No transactions found.\r
        </td>\r
      </tr>\r
    </table>\r
  </div>\r
\r
  <mat-paginator\r
    [pageSizeOptions]="[10, 25, 50]"\r
    showFirstLastButtons\r
  ></mat-paginator>\r
</mat-card>\r
\r
<!-- Transaction Detail Overlay -->\r
<div *ngIf="selectedTransaction" class="detail-overlay" (click)="closeDetail()">\r
  <div class="detail-popup" (click)="$event.stopPropagation()">\r
    <div class="detail-header">\r
      <h3>Transaction Details</h3>\r
      <button mat-icon-button (click)="closeDetail()">\r
        <mat-icon>close</mat-icon>\r
      </button>\r
    </div>\r
\r
    <div class="detail-grid">\r
      <div class="detail-item">\r
        <span class="detail-label">Reference</span>\r
        <span class="detail-value ref-cell">{{ selectedTransaction.referenceNumber }}</span>\r
      </div>\r
      <div class="detail-item">\r
        <span class="detail-label">Status</span>\r
        <span class="status-chip" [ngClass]="getStatusClass(selectedTransaction.status)">\r
          {{ selectedTransaction.status }}\r
        </span>\r
      </div>\r
      <div class="detail-item">\r
        <span class="detail-label">Sender</span>\r
        <span class="detail-value">{{ selectedTransaction.senderName }}</span>\r
      </div>\r
      <div class="detail-item">\r
        <span class="detail-label">Receiver</span>\r
        <span class="detail-value">{{ selectedTransaction.receiverName }}</span>\r
      </div>\r
      <div class="detail-item">\r
        <span class="detail-label">Receiver Country</span>\r
        <span class="detail-value">{{ selectedTransaction.receiverCountry }}</span>\r
      </div>\r
      <div class="detail-item">\r
        <span class="detail-label">Date</span>\r
        <span class="detail-value">{{ selectedTransaction.createdAt | date:'yyyy-MM-dd HH:mm' }}</span>\r
      </div>\r
    </div>\r
\r
    <hr class="detail-divider" />\r
\r
    <div class="detail-grid">\r
      <div class="detail-item">\r
        <span class="detail-label">Send Amount</span>\r
        <span class="detail-value detail-bold">\r
          {{ selectedTransaction.sendAmount | number:'1.2-2' }} {{ selectedTransaction.sendCurrency }}\r
        </span>\r
      </div>\r
      <div class="detail-item">\r
        <span class="detail-label">Receive Amount</span>\r
        <span class="detail-value detail-bold">\r
          {{ selectedTransaction.receiveAmount | number:'1.2-2' }} {{ selectedTransaction.receiveCurrency }}\r
        </span>\r
      </div>\r
      <div class="detail-item">\r
        <span class="detail-label">Exchange Rate</span>\r
        <span class="detail-value">{{ selectedTransaction.exchangeRateApplied | number:'1.4-4' }}</span>\r
      </div>\r
      <div class="detail-item">\r
        <span class="detail-label">Commission</span>\r
        <span class="detail-value">{{ selectedTransaction.totalCommission | number:'1.2-2' }}</span>\r
      </div>\r
      <div class="detail-item">\r
        <span class="detail-label">Agent Commission</span>\r
        <span class="detail-value">{{ selectedTransaction.agentCommission | number:'1.2-2' }}</span>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/pages/admin/transactions/admin-transactions.component.scss */\n.page-title {\n  font-weight: 700;\n  margin-bottom: 16px;\n  font-size: 1.5rem;\n}\n.alert-message {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.875rem;\n}\n.alert-message.alert-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n}\n.alert-message.alert-error {\n  background: #ffebee;\n  color: #c62828;\n  border: 1px solid #ef9a9a;\n}\n.alert-message.alert-warning {\n  background: #fff3e0;\n  color: #e65100;\n  border: 1px solid #ffcc80;\n}\n.alert-message.alert-info {\n  background: #e3f2fd;\n  color: #1565c0;\n  border: 1px solid #90caf9;\n}\n.alert-message .alert-close {\n  flex-shrink: 0;\n  margin-left: 8px;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 64px 0;\n}\n.table-card {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.table-toolbar {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  padding: 16px 16px 0;\n  flex-wrap: wrap;\n}\n.table-toolbar .search-field {\n  flex: 1;\n  min-width: 260px;\n}\n.table-toolbar .status-filter {\n  width: 160px;\n  flex-shrink: 0;\n}\n.table-container {\n  overflow-x: auto;\n}\n.transactions-table {\n  width: 100%;\n}\n.transactions-table .ref-cell {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.85rem;\n}\n.transactions-table .mat-column-actions {\n  white-space: nowrap;\n  text-align: center;\n  width: 130px;\n}\n.no-data-row td {\n  text-align: center;\n  padding: 32px 16px;\n  color: rgba(0, 0, 0, 0.54);\n  font-style: italic;\n}\n.action-approve {\n  color: #2e7d32 !important;\n}\n.status-chip {\n  display: inline-block;\n  padding: 2px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n  white-space: nowrap;\n}\n.status-pending {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-processing {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-completed {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-cancelled {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-failed {\n  background: #fce4ec;\n  color: #880e4f;\n}\n.status-onhold {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.status-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.detail-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.detail-popup {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  width: 550px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n  z-index: 10001;\n}\n.detail-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.detail-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.25rem;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label {\n  font-size: 0.75rem;\n  color: rgba(0, 0, 0, 0.54);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-value {\n  font-size: 0.938rem;\n}\n.detail-bold {\n  font-weight: 700;\n}\n.detail-divider {\n  border: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  margin: 16px 0;\n}\n/*# sourceMappingURL=admin-transactions.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminTransactionsComponent, { className: "AdminTransactionsComponent", filePath: "src/app/pages/admin/transactions/admin-transactions.component.ts", lineNumber: 44 });
})();
export {
  AdminTransactionsComponent
};
//# sourceMappingURL=chunk-SKQGOS5T.js.map
