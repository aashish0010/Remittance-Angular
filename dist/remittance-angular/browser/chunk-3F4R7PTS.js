import {
  ExportService
} from "./chunk-DU4FVJ3R.js";
import {
  ActivatedRoute,
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
  ɵɵpureFunction1,
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

// src/app/pages/admin/transactions/admin-transactions.component.ts
var _c0 = (a0) => ({ "bg-surface-50": a0 });
var _c1 = (a0) => ["/admin/transactions", a0];
function AdminTransactionsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "circle", 11)(3, "path", 12);
    \u0275\u0275elementEnd()();
  }
}
function AdminTransactionsComponent_div_13_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_13_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchText = "";
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 4);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd()();
  }
}
function AdminTransactionsComponent_div_13_tr_47_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_13_tr_47_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const txn_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.completeTransaction(txn_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 61);
    \u0275\u0275element(2, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Complete ");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_div_13_tr_47_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_13_tr_47_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const txn_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelTransaction(txn_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 61);
    \u0275\u0275element(2, "path", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cancel ");
    \u0275\u0275elementEnd();
  }
}
function AdminTransactionsComponent_div_13_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 51)(1, "td", 52)(2, "a", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 54);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 54);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 54);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 54);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 55)(21, "span", 56);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 57);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 58)(27, "div", 59)(28, "button", 60);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_13_tr_47_Template_button_click_28_listener() {
      const txn_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(txn_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 61);
    \u0275\u0275element(30, "path", 62)(31, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, AdminTransactionsComponent_div_13_tr_47_button_33_Template, 4, 0, "button", 64)(34, AdminTransactionsComponent_div_13_tr_47_button_34_Template, 4, 0, "button", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const txn_r5 = ctx.$implicit;
    const odd_r8 = ctx.odd;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(31, _c0, odd_r8));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(33, _c1, txn_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r5.referenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(txn_r5.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(txn_r5.receiverName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(10, 16, txn_r5.sendAmount, "1.2-2"), " ", txn_r5.sendCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 19, txn_r5.receiveAmount, "1.2-2"), " ", txn_r5.receiveCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 22, txn_r5.exchangeRateApplied, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 25, txn_r5.totalCommission, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(txn_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(txn_r5.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 28, txn_r5.createdAt, "MMM dd, HH:mm"));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", txn_r5.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", txn_r5.status === "Pending" || txn_r5.status === "Completed");
  }
}
function AdminTransactionsComponent_div_13_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 70);
    \u0275\u0275text(2, " No transactions found. ");
    \u0275\u0275elementEnd()();
  }
}
function AdminTransactionsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 16);
    \u0275\u0275element(4, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function AdminTransactionsComponent_div_13_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminTransactionsComponent_div_13_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminTransactionsComponent_div_13_button_6_Template, 3, 0, "button", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function AdminTransactionsComponent_div_13_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminTransactionsComponent_div_13_Template_select_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusChange());
    });
    \u0275\u0275elementStart(8, "option", 21);
    \u0275\u0275text(9, "All Statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 22);
    \u0275\u0275text(11, "On Hold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 23);
    \u0275\u0275text(13, "Compliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 24);
    \u0275\u0275text(15, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 25);
    \u0275\u0275text(17, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 26);
    \u0275\u0275text(19, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 27);
    \u0275\u0275text(21, "Failed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 28)(23, "table", 29)(24, "thead")(25, "tr", 30)(26, "th", 31);
    \u0275\u0275text(27, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 31);
    \u0275\u0275text(29, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 31);
    \u0275\u0275text(31, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 31);
    \u0275\u0275text(33, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 31);
    \u0275\u0275text(35, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 31);
    \u0275\u0275text(37, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 31);
    \u0275\u0275text(39, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 31);
    \u0275\u0275text(41, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 31);
    \u0275\u0275text(43, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 32);
    \u0275\u0275text(45, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "tbody", 33);
    \u0275\u0275template(47, AdminTransactionsComponent_div_13_tr_47_Template, 35, 35, "tr", 34)(48, AdminTransactionsComponent_div_13_tr_48_Template, 3, 0, "tr", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 36)(50, "div", 37);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 2)(53, "select", 38);
    \u0275\u0275listener("ngModelChange", function AdminTransactionsComponent_div_13_Template_select_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: 0, pageSize: $event }));
    });
    \u0275\u0275elementStart(54, "option", 39);
    \u0275\u0275text(55, "10 / page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 39);
    \u0275\u0275text(57, "20 / page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 39);
    \u0275\u0275text(59, "50 / page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "button", 40);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_13_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: 0, pageSize: ctx_r1.pageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(61, "svg", 4);
    \u0275\u0275element(62, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(63, "button", 42);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_13_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: ctx_r1.pageIndex - 1, pageSize: ctx_r1.pageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(64, "svg", 4);
    \u0275\u0275element(65, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(66, "span", 44);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "button", 45);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_13_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: ctx_r1.pageIndex + 1, pageSize: ctx_r1.pageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(70, "svg", 4);
    \u0275\u0275element(71, "path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(72, "button", 47);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_13_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: ctx_r1.totalCount === 0 ? 0 : ctx_r1.Math.ceil(ctx_r1.totalCount / ctx_r1.pageSize) - 1, pageSize: ctx_r1.pageSize }));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(73, "svg", 4);
    \u0275\u0275element(74, "path", 48);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchText);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance(40);
    \u0275\u0275property("ngForOf", ctx_r1.transactions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.transactions.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r1.transactions.length === 0 ? 0 : ctx_r1.pageIndex * ctx_r1.pageSize + 1, "\u2013", ctx_r1.pageIndex * ctx_r1.pageSize + ctx_r1.transactions.length, " of ", ctx_r1.totalCount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Page ", ctx_r1.pageIndex + 1, " of ", ctx_r1.totalCount === 0 ? 1 : \u0275\u0275pipeBind2(68, 18, (ctx_r1.totalCount + ctx_r1.pageSize - 1) / ctx_r1.pageSize, "1.0-0"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", (ctx_r1.pageIndex + 1) * ctx_r1.pageSize >= ctx_r1.totalCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (ctx_r1.pageIndex + 1) * ctx_r1.pageSize >= ctx_r1.totalCount);
  }
}
function AdminTransactionsComponent_div_14_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 78);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
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
    \u0275\u0275elementStart(0, "div")(1, "span", 78);
    \u0275\u0275text(2, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
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
    \u0275\u0275elementStart(0, "div")(1, "span", 78);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
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
    \u0275\u0275elementStart(0, "div")(1, "span", 78);
    \u0275\u0275text(2, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
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
    \u0275\u0275elementStart(0, "div")(1, "span", 78);
    \u0275\u0275text(2, "Payout Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
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
    \u0275\u0275elementStart(0, "div")(1, "span", 78);
    \u0275\u0275text(2, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
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
    \u0275\u0275elementStart(0, "div")(1, "span", 78);
    \u0275\u0275text(2, "Payout Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
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
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 72);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4, "Transaction Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AdminTransactionsComponent_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 77)(9, "div")(10, "span", 78);
    \u0275\u0275text(11, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 79);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "span", 78);
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 80);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "span", 78);
    \u0275\u0275text(21, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 81);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "span", 78);
    \u0275\u0275text(26, "Sender Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 81);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "span", 78);
    \u0275\u0275text(31, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 81);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "span", 78);
    \u0275\u0275text(36, "Receiver Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 81);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, AdminTransactionsComponent_div_14_div_39_Template, 5, 1, "div", 35)(40, AdminTransactionsComponent_div_14_div_40_Template, 5, 1, "div", 35)(41, AdminTransactionsComponent_div_14_div_41_Template, 5, 1, "div", 35);
    \u0275\u0275elementStart(42, "div")(43, "span", 78);
    \u0275\u0275text(44, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 81);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(48, "hr", 82);
    \u0275\u0275elementStart(49, "div", 83)(50, "div")(51, "span", 78);
    \u0275\u0275text(52, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 84);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div")(57, "span", 78);
    \u0275\u0275text(58, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 84);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div")(63, "span", 78);
    \u0275\u0275text(64, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 81);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div")(69, "span", 78);
    \u0275\u0275text(70, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 81);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div")(75, "span", 78);
    \u0275\u0275text(76, "Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 81);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div")(81, "span", 78);
    \u0275\u0275text(82, "Payout Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 81);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div")(87, "span", 78);
    \u0275\u0275text(88, "Company Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 81);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(92, AdminTransactionsComponent_div_14_div_92_Template, 5, 1, "div", 35)(93, AdminTransactionsComponent_div_14_div_93_Template, 5, 1, "div", 35)(94, AdminTransactionsComponent_div_14_div_94_Template, 5, 1, "div", 35)(95, AdminTransactionsComponent_div_14_div_95_Template, 5, 1, "div", 35);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 24, ctx_r1.selectedTransaction.createdAt, "dd/MM/yyyy HH:mm"));
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
    this.Math = Math;
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
        return "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400";
      case "Processing":
      case "Approved":
        return "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400";
      case "Completed":
        return "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400";
      case "Cancelled":
        return "bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400";
      case "Failed":
        return "bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400";
      case "OnHold":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "Compliance":
        return "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400";
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
    this.\u0275fac = function AdminTransactionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminTransactionsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminTransactionsComponent, selectors: [["app-admin-transactions"]], decls: 15, vars: 3, consts: [[1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-700", "dark:text-surface-200", "hover:bg-surface-50", "dark:hover:bg-surface-600", "transition", "text-sm", "font-medium", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"], ["class", "flex items-center justify-center py-24", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-24"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft"], [1, "flex", "flex-col", "sm:flex-row", "gap-3", "p-4", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "relative", "flex-1"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "h-4", "w-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"], ["type", "text", "placeholder", "Search by reference, sender, receiver...", 1, "w-full", "pl-10", "pr-9", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "dark:placeholder-surface-500", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["class", "absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-surface-400 hover:text-surface-600 dark:hover:text-surface-300 transition", "title", "Clear search", 3, "click", 4, "ngIf"], [1, "w-full", "sm:w-44", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["value", "All"], ["value", "OnHold"], ["value", "Compliance"], ["value", "Pending"], ["value", "Completed"], ["value", "Cancelled"], ["value", "Failed"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "text-sm"], [1, "border-b", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-800/50"], [1, "px-4", "py-3", "font-semibold", "text-surface-600", "dark:text-surface-400", "text-xs", "tracking-wide"], [1, "px-4", "py-3", "font-semibold", "text-surface-600", "dark:text-surface-400", "text-xs", "tracking-wide", "text-center"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "hover:bg-brand-50/40 dark:hover:bg-surface-700/50 transition-colors", 3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "px-4", "py-3", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "px-2", "py-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "text-sm", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["title", "First page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-600", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"], ["title", "Previous page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-600", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 19.5 8.25 12l7.5-7.5"], [1, "text-sm", "text-surface-700", "dark:text-surface-300", "px-2"], ["title", "Next page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-600", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m8.25 4.5 7.5 7.5-7.5 7.5"], ["title", "Last page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-600", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"], ["title", "Clear search", 1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "p-0.5", "rounded", "text-surface-400", "hover:text-surface-600", "dark:hover:text-surface-300", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18 18 6M6 6l12 12"], [1, "hover:bg-brand-50/40", "dark:hover:bg-surface-700/50", "transition-colors", 3, "ngClass"], [1, "px-4", "py-3", "font-mono", "text-xs"], [1, "text-brand-600", "dark:text-brand-400", "hover:underline", 3, "routerLink"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3"], [1, "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "whitespace-nowrap", 3, "ngClass"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100", "whitespace-nowrap"], [1, "px-4", "py-3", "text-center", "whitespace-nowrap"], [1, "inline-flex", "items-center", "gap-1"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-brand-600", "dark:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "h-3.5", "w-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], ["class", "inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20 transition", 3, "click", 4, "ngIf"], ["class", "inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition", 3, "click", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-success-600", "dark:text-success-400", "hover:bg-success-50", "dark:hover:bg-success-900/20", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-danger-600", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["colspan", "10", 1, "px-4", "py-12", "text-center", "text-surface-400", "dark:text-surface-500", "italic"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "relative", "w-full", "max-w-2xl", "mx-4", "max-h-[90vh]", "overflow-y-auto", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft", 3, "click"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "p-1.5", "rounded-lg", "text-surface-400", "hover:text-surface-600", "dark:hover:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "h-5", "w-5"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "mb-6"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "mb-1"], [1, "text-sm", "font-mono", "text-surface-900", "dark:text-surface-100"], [1, "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "text-sm", "text-surface-900", "dark:text-surface-100"], [1, "border-surface-200", "dark:border-surface-700", "mb-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100"]], template: function AdminTransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Transaction Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function AdminTransactionsComponent_Template_button_click_4_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(5, "svg", 4);
        \u0275\u0275element(6, "path", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function AdminTransactionsComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 4);
        \u0275\u0275element(10, "path", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, AdminTransactionsComponent_div_12_Template, 4, 0, "div", 6)(13, AdminTransactionsComponent_div_13_Template, 75, 21, "div", 7)(14, AdminTransactionsComponent_div_14_Template, 96, 48, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedTransaction);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=admin-transactions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-transactions", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      DecimalPipe,
      DatePipe
    ], template: `<!-- Page Header -->
<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
  <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100">Transaction Management</h2>
  <div class="flex items-center gap-2">
    <button
      (click)="exportData('excel')"
      class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-600 transition text-sm font-medium"
    >
      <!-- Download icon -->
      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      Excel
    </button>
    <button
      (click)="exportData('csv')"
      class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-600 transition text-sm font-medium"
    >
      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      CSV
    </button>
  </div>
</div>

<!-- Loading Spinner -->
<div *ngIf="loading" class="flex items-center justify-center py-24">
  <svg class="animate-spin h-10 w-10 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>
</div>

<!-- Transactions Table Card -->
<div *ngIf="!loading" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft">
  <!-- Toolbar: Search + Status Filter -->
  <div class="flex flex-col sm:flex-row gap-3 p-4 border-b border-surface-200 dark:border-surface-700">
    <!-- Search Field -->
    <div class="relative flex-1">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-surface-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input
        type="text"
        [(ngModel)]="searchText"
        (ngModelChange)="onSearchChange()"
        placeholder="Search by reference, sender, receiver..."
        class="w-full pl-10 pr-9 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 dark:placeholder-surface-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"
      />
      <button
        *ngIf="searchText"
        (click)="searchText = ''; onSearchChange()"
        class="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-surface-400 hover:text-surface-600 dark:hover:text-surface-300 transition"
        title="Clear search"
      >
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Status Filter -->
    <select
      [(ngModel)]="statusFilter"
      (ngModelChange)="onStatusChange()"
      class="w-full sm:w-44 px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"
    >
      <option value="All">All Statuses</option>
      <option value="OnHold">On Hold</option>
      <option value="Compliance">Compliance</option>
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
      <option value="Cancelled">Cancelled</option>
      <option value="Failed">Failed</option>
    </select>
  </div>

  <!-- Table -->
  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm">
      <thead>
        <tr class="border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-400 text-xs tracking-wide">Reference</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-400 text-xs tracking-wide">Sender</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-400 text-xs tracking-wide">Receiver</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-400 text-xs tracking-wide">Send Amount</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-400 text-xs tracking-wide">Receive Amount</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-400 text-xs tracking-wide">Rate</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-400 text-xs tracking-wide">Service Charge</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-400 text-xs tracking-wide">Status</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-400 text-xs tracking-wide">Date</th>
          <th class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-400 text-xs tracking-wide text-center">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
        <tr
          *ngFor="let txn of transactions; let odd = odd"
          class="hover:bg-brand-50/40 dark:hover:bg-surface-700/50 transition-colors"
          [ngClass]="{ 'bg-surface-50': odd }"
        >
          <td class="px-4 py-3 font-mono text-xs">
            <a [routerLink]="['/admin/transactions', txn.id]" class="text-brand-600 dark:text-brand-400 hover:underline">{{ txn.referenceNumber }}</a>
          </td>
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ txn.senderName }}</td>
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ txn.receiverName }}</td>
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ txn.sendAmount | number:'1.2-2' }} {{ txn.sendCurrency }}</td>
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ txn.receiveAmount | number:'1.2-2' }} {{ txn.receiveCurrency }}</td>
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ txn.exchangeRateApplied | number:'1.2-2' }}</td>
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100">{{ txn.totalCommission | number:'1.2-2' }}</td>
          <td class="px-4 py-3">
            <span
              class="px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap"
              [ngClass]="getStatusClass(txn.status)"
            >
              {{ getStatusLabel(txn.status) }}
            </span>
          </td>
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100 whitespace-nowrap">{{ txn.createdAt | date:'MMM dd, HH:mm' }}</td>
          <td class="px-4 py-3 text-center whitespace-nowrap">
            <div class="inline-flex items-center gap-1">
              <!-- View Details -->
              <button
                (click)="viewDetail(txn)"
                class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition">
                <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                View
              </button>

              <!-- Pending: Complete -->
              <button
                *ngIf="txn.status === 'Pending'"
                (click)="completeTransaction(txn)"
                class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20 transition">
                <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Complete
              </button>

              <!-- Pending/Completed: Cancel -->
              <button
                *ngIf="txn.status === 'Pending' || txn.status === 'Completed'"
                (click)="cancelTransaction(txn)"
                class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition">
                <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Cancel
              </button>
            </div>
          </td>
        </tr>

        <!-- No data row -->
        <tr *ngIf="transactions.length === 0">
          <td colspan="10" class="px-4 py-12 text-center text-surface-400 dark:text-surface-500 italic">
            No transactions found.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <div class="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-surface-200 dark:border-surface-700">
    <div class="text-sm text-surface-500 dark:text-surface-400">
      Showing {{ transactions.length === 0 ? 0 : pageIndex * pageSize + 1 }}\u2013{{ pageIndex * pageSize + transactions.length }} of {{ totalCount }}
    </div>
    <div class="flex items-center gap-2">
      <!-- Page Size Selector -->
      <select
        [ngModel]="pageSize"
        (ngModelChange)="onPageChange({ pageIndex: 0, pageSize: $event })"
        class="px-2 py-1.5 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
      >
        <option [ngValue]="10">10 / page</option>
        <option [ngValue]="20">20 / page</option>
        <option [ngValue]="50">50 / page</option>
      </select>

      <!-- First Page -->
      <button
        (click)="onPageChange({ pageIndex: 0, pageSize: pageSize })"
        [disabled]="pageIndex === 0"
        class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
        title="First page"
      >
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </button>

      <!-- Previous Page -->
      <button
        (click)="onPageChange({ pageIndex: pageIndex - 1, pageSize: pageSize })"
        [disabled]="pageIndex === 0"
        class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
        title="Previous page"
      >
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <span class="text-sm text-surface-700 dark:text-surface-300 px-2">
        Page {{ pageIndex + 1 }} of {{ totalCount === 0 ? 1 : (totalCount + pageSize - 1) / pageSize | number:'1.0-0' }}
      </span>

      <!-- Next Page -->
      <button
        (click)="onPageChange({ pageIndex: pageIndex + 1, pageSize: pageSize })"
        [disabled]="(pageIndex + 1) * pageSize >= totalCount"
        class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
        title="Next page"
      >
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <!-- Last Page -->
      <button
        (click)="onPageChange({ pageIndex: totalCount === 0 ? 0 : Math.ceil(totalCount / pageSize) - 1, pageSize: pageSize })"
        [disabled]="(pageIndex + 1) * pageSize >= totalCount"
        class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
        title="Last page"
      >
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
</div>

<!-- Transaction Detail Overlay -->
<div
  *ngIf="selectedTransaction"
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
  (click)="closeDetail()"
>
  <div
    class="relative w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft"
    (click)="$event.stopPropagation()"
  >
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Transaction Details</h3>
      <button
        (click)="closeDetail()"
        class="p-1.5 rounded-lg text-surface-400 hover:text-surface-600 dark:hover:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 transition"
      >
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Detail Grid - Top Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Reference</span>
        <span class="text-sm font-mono text-surface-900 dark:text-surface-100">{{ selectedTransaction.referenceNumber }}</span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Status</span>
        <span
          class="px-2.5 py-0.5 rounded-full text-xs font-medium"
          [ngClass]="getStatusClass(selectedTransaction.status)"
        >
          {{ getStatusLabel(selectedTransaction.status) }}
        </span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Sender</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.senderName }}</span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Sender Country</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.senderCountry }}</span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Receiver</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.receiverName }}</span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Receiver Country</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.receiverCountry }}</span>
      </div>
      <div *ngIf="selectedTransaction.receiverBankName">
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Bank</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.receiverBankName }}</span>
      </div>
      <div *ngIf="selectedTransaction.receiverAccountNumber">
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Account Number</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.receiverAccountNumber }}</span>
      </div>
      <div *ngIf="selectedTransaction.receiverBranchName">
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Branch</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.receiverBranchName }}</span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Date</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.createdAt | date:'dd/MM/yyyy HH:mm' }}</span>
      </div>
    </div>

    <hr class="border-surface-200 dark:border-surface-700 mb-6" />

    <!-- Detail Grid - Financial Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Send Amount</span>
        <span class="text-sm font-semibold text-surface-900 dark:text-surface-100">
          {{ selectedTransaction.sendAmount | number:'1.2-2' }} {{ selectedTransaction.sendCurrency }}
        </span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Receive Amount</span>
        <span class="text-sm font-semibold text-surface-900 dark:text-surface-100">
          {{ selectedTransaction.receiveAmount | number:'1.2-2' }} {{ selectedTransaction.receiveCurrency }}
        </span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Exchange Rate</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.exchangeRateApplied | number:'1.4-4' }}</span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Total Service Charge</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.totalCommission | number:'1.2-2' }}</span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Agent Service Charge</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.agentCommission | number:'1.2-2' }}</span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Payout Agent Service Charge</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.payoutAgentCommission | number:'1.2-2' }}</span>
      </div>
      <div>
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Company Service Charge</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.companyCommission | number:'1.2-2' }}</span>
      </div>
      <div *ngIf="selectedTransaction.paymentMethodName">
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Payment Method</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.paymentMethodName }}</span>
      </div>
      <div *ngIf="selectedTransaction.payoutMethodName">
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Payout Method</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.payoutMethodName }}</span>
      </div>
      <div *ngIf="selectedTransaction.sendingAgentName">
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Sending Agent</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.sendingAgentName }}</span>
      </div>
      <div *ngIf="selectedTransaction.payoutAgentName">
        <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Payout Partner</span>
        <span class="text-sm text-surface-900 dark:text-surface-100">{{ selectedTransaction.payoutAgentName }}</span>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/transactions/admin-transactions.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=admin-transactions.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: ExportService }, { type: AuthStateService }, { type: NotificationService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminTransactionsComponent, { className: "AdminTransactionsComponent", filePath: "src/app/pages/admin/transactions/admin-transactions.component.ts", lineNumber: 26 });
})();
export {
  AdminTransactionsComponent
};
//# sourceMappingURL=chunk-3F4R7PTS.js.map
