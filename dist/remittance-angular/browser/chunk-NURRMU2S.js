import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-IXW56OZ7.js";
import {
  ExportService
} from "./chunk-BWFLUKJM.js";
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
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
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
  ɵɵpureFunction3,
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

// src/app/pages/admin/accounting/accounting.component.ts
var _c0 = () => [10, 20, 50, 100];
var _c1 = (a0, a1, a2) => ({ "chip-success": a0, "chip-error": a1, "chip-warning": a2 });
var _c2 = () => ["amount", "from", "to", "notes", "active", "adjActions"];
function AccountingComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_13_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Agent");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_13_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.businessName);
  }
}
function AccountingComponent_mat_card_13_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_13_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", a_r4.agentType === "PayoutAgent" ? "chip-tertiary" : "chip-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r4.agentType === "PayoutAgent" ? "Payout" : "Sending", " ");
  }
}
function AccountingComponent_mat_card_13_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Service Charge");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_13_td_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", a_r5.commissionMode === "Percentage" ? "chip-info" : "chip-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r5.commissionMode === "Percentage" ? \u0275\u0275pipeBind2(3, 2, a_r5.commissionValue, "1.2-2") + "%" : "Flat " + \u0275\u0275pipeBind2(4, 5, a_r5.commissionValue, "1.2-2"), " ");
  }
}
function AccountingComponent_mat_card_13_td_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Not set");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_13_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275template(1, AccountingComponent_mat_card_13_td_15_ng_container_1_Template, 5, 8, "ng-container", 38)(2, AccountingComponent_mat_card_13_td_15_span_2_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r5.commissionMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !a_r5.commissionMode);
  }
}
function AccountingComponent_mat_card_13_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Effective Limit");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_13_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, a_r6.effectiveCreditLimit, "1.2-2"));
  }
}
function AccountingComponent_mat_card_13_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Available");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_13_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", a_r7.availableBalance >= 0 ? "chip-success" : "chip-error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, a_r7.availableBalance, "1.2-2"), " ");
  }
}
function AccountingComponent_mat_card_13_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_13_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c1, a_r8.status === "Approved", a_r8.status === "Blocked" || a_r8.status === "Rejected", a_r8.status !== "Approved" && a_r8.status !== "Blocked" && a_r8.status !== "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r8.status);
  }
}
function AccountingComponent_mat_card_13_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_13_td_27_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function AccountingComponent_mat_card_13_td_27_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const a_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAdjustments(a_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 49);
    \u0275\u0275text(2, "tune");
    \u0275\u0275elementEnd()();
  }
}
function AccountingComponent_mat_card_13_td_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 36)(1, "button", 44);
    \u0275\u0275listener("click", function AccountingComponent_mat_card_13_td_27_Template_button_click_1_listener() {
      const a_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(a_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AccountingComponent_mat_card_13_td_27_button_4_Template, 3, 0, "button", 45);
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function AccountingComponent_mat_card_13_td_27_Template_button_click_5_listener() {
      const a_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCommissionSetup(a_r10));
    });
    \u0275\u0275elementStart(6, "mat-icon", 47);
    \u0275\u0275text(7, "percent");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", a_r10.agentType === "SendingAgent");
  }
}
function AccountingComponent_mat_card_13_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 50);
  }
}
function AccountingComponent_mat_card_13_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 51);
  }
}
function AccountingComponent_mat_card_13_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " No agents found. ");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 13)(1, "div", 14)(2, "mat-form-field", 15)(3, "mat-icon", 16);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_mat_card_13_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AccountingComponent_mat_card_13_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchDebounce.next($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "table", 18);
    \u0275\u0275elementContainerStart(7, 19);
    \u0275\u0275template(8, AccountingComponent_mat_card_13_th_8_Template, 2, 0, "th", 20)(9, AccountingComponent_mat_card_13_td_9_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 22);
    \u0275\u0275template(11, AccountingComponent_mat_card_13_th_11_Template, 2, 0, "th", 20)(12, AccountingComponent_mat_card_13_td_12_Template, 3, 2, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 23);
    \u0275\u0275template(14, AccountingComponent_mat_card_13_th_14_Template, 2, 0, "th", 20)(15, AccountingComponent_mat_card_13_td_15_Template, 3, 2, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 24);
    \u0275\u0275template(17, AccountingComponent_mat_card_13_th_17_Template, 2, 0, "th", 25)(18, AccountingComponent_mat_card_13_td_18_Template, 3, 4, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 27);
    \u0275\u0275template(20, AccountingComponent_mat_card_13_th_20_Template, 2, 0, "th", 25)(21, AccountingComponent_mat_card_13_td_21_Template, 4, 5, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(22, 29);
    \u0275\u0275template(23, AccountingComponent_mat_card_13_th_23_Template, 2, 0, "th", 20)(24, AccountingComponent_mat_card_13_td_24_Template, 3, 6, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(25, 30);
    \u0275\u0275template(26, AccountingComponent_mat_card_13_th_26_Template, 2, 0, "th", 20)(27, AccountingComponent_mat_card_13_td_27_Template, 8, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(28, AccountingComponent_mat_card_13_tr_28_Template, 1, 0, "tr", 31)(29, AccountingComponent_mat_card_13_tr_29_Template, 1, 0, "tr", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, AccountingComponent_mat_card_13_div_30_Template, 2, 0, "div", 33);
    \u0275\u0275elementStart(31, "mat-paginator", 34);
    \u0275\u0275listener("page", function AccountingComponent_mat_card_13_Template_mat_paginator_page_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.summaries);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.summaries.length && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r1.totalCount)("pageSize", ctx_r1.pageSize)("pageIndex", ctx_r1.pageIndex)("pageSizeOptions", \u0275\u0275pureFunction0(9, _c0));
  }
}
function AccountingComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function AccountingComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetailPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_15_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.commissionMode === "Percentage" ? \u0275\u0275pipeBind2(3, 1, ctx_r1.detailAgent.commissionValue, "1.2-2") + "%" : "Flat " + \u0275\u0275pipeBind2(4, 4, ctx_r1.detailAgent.commissionValue, "1.2-2"));
  }
}
function AccountingComponent_div_15_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Not set");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "h3")(3, "mat-icon", 56);
    \u0275\u0275text(4, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 57);
    \u0275\u0275listener("click", function AccountingComponent_div_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetailPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 58)(10, "div", 59)(11, "span", 60);
    \u0275\u0275text(12, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 59)(16, "span", 60);
    \u0275\u0275text(17, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 59)(21, "span", 60);
    \u0275\u0275text(22, "Funding Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 59)(26, "span", 60);
    \u0275\u0275text(27, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 37);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 59)(31, "span", 60);
    \u0275\u0275text(32, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 37);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(35, "hr", 61);
    \u0275\u0275elementStart(36, "div", 58)(37, "div", 59)(38, "span", 60);
    \u0275\u0275text(39, "Base Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 59)(44, "span", 60);
    \u0275\u0275text(45, "Effective Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 62);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 59)(50, "span", 60);
    \u0275\u0275text(51, "Current Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 59)(56, "span", 60);
    \u0275\u0275text(57, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 37);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 59)(62, "span", 60);
    \u0275\u0275text(63, "Active Adjustments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 59)(67, "span", 60);
    \u0275\u0275text(68, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275template(69, AccountingComponent_div_15_ng_container_69_Template, 5, 7, "ng-container", 38)(70, AccountingComponent_div_15_span_70_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailAgent.businessName, " \u2014 Setup");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.country);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.currency || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.fundingType || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.detailAgent.agentType === "PayoutAgent" ? "chip-tertiary" : "chip-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailAgent.agentType === "PayoutAgent" ? "Payout Agent" : "Sending Agent", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(28, _c1, ctx_r1.detailAgent.status === "Approved", ctx_r1.detailAgent.status === "Blocked", ctx_r1.detailAgent.status !== "Approved" && ctx_r1.detailAgent.status !== "Blocked"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.status);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 16, ctx_r1.detailAgent.baseCreditLimit, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 19, ctx_r1.detailAgent.effectiveCreditLimit, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 22, ctx_r1.detailAgent.currentBalance, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.detailAgent.availableBalance >= 0 ? "chip-success" : "chip-error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 25, ctx_r1.detailAgent.availableBalance, "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.activeAdjustments);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.detailAgent.commissionMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.detailAgent.commissionMode);
  }
}
function AccountingComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function AccountingComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.adjustmentFormError);
  }
}
function AccountingComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 55)(2, "h3")(3, "mat-icon", 56);
    \u0275\u0275text(4, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 57);
    \u0275\u0275listener("click", function AccountingComponent_div_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentForm());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AccountingComponent_div_17_div_9_Template, 2, 1, "div", 65);
    \u0275\u0275elementStart(10, "mat-form-field", 66)(11, "mat-label");
    \u0275\u0275text(12, "Amount (+ increase / - decrease) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_17_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.amount, $event) || (ctx_r1.adjustmentForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 68)(15, "mat-label");
    \u0275\u0275text(16, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_17_Template_mat_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.durationDays, $event) || (ctx_r1.adjustmentForm.durationDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "mat-option", 70);
    \u0275\u0275text(19, "Permanent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-option", 70);
    \u0275\u0275text(21, "2 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-option", 70);
    \u0275\u0275text(23, "3 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-option", 70);
    \u0275\u0275text(25, "7 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-option", 70);
    \u0275\u0275text(27, "30 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-option", 70);
    \u0275\u0275text(29, "90 Days");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "mat-form-field", 66)(31, "mat-label");
    \u0275\u0275text(32, "Notes (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "textarea", 71);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_17_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.notes, $event) || (ctx_r1.adjustmentForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 72)(35, "button", 73);
    \u0275\u0275listener("click", function AccountingComponent_div_17_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentForm());
    });
    \u0275\u0275elementStart(36, "mat-icon");
    \u0275\u0275text(37, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 74);
    \u0275\u0275listener("click", function AccountingComponent_div_17_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createAdjustment());
    });
    \u0275\u0275elementStart(40, "mat-icon");
    \u0275\u0275text(41, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Save ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Adjust Limit \u2014 ", ctx_r1.adjustmentAgent == null ? null : ctx_r1.adjustmentAgent.businessName, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.adjustmentFormError);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adjustmentForm.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adjustmentForm.durationDays);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 30);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 90);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adjustmentForm.notes);
  }
}
function AccountingComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function AccountingComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_19_table_14_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_19_table_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 87);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const adj_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", adj_r18.amount >= 0 ? "text-success" : "text-error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", adj_r18.amount >= 0 ? "+" : "", "", \u0275\u0275pipeBind2(3, 3, adj_r18.amount, "1.2-2"), " ");
  }
}
function AccountingComponent_div_19_table_14_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "From");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_19_table_14_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const adj_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, adj_r19.effectiveFrom, "yyyy-MM-dd"));
  }
}
function AccountingComponent_div_19_table_14_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "To");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_19_table_14_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const adj_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", adj_r20.effectiveTo ? \u0275\u0275pipeBind2(2, 1, adj_r20.effectiveTo, "yyyy-MM-dd") : "Permanent", " ");
  }
}
function AccountingComponent_div_19_table_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Notes");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_19_table_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const adj_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(adj_r21.notes || "-");
  }
}
function AccountingComponent_div_19_table_14_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_19_table_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const adj_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", adj_r22.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(adj_r22.isActive ? "Active" : "Inactive");
  }
}
function AccountingComponent_div_19_table_14_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_19_table_14_td_18_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function AccountingComponent_div_19_table_14_td_18_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const adj_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deactivateAdjustment(adj_r24));
    });
    \u0275\u0275elementStart(1, "mat-icon", 90);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd()();
  }
}
function AccountingComponent_div_19_table_14_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275template(1, AccountingComponent_div_19_table_14_td_18_button_1_Template, 3, 0, "button", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const adj_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", adj_r24.isActive);
  }
}
function AccountingComponent_div_19_table_14_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 50);
  }
}
function AccountingComponent_div_19_table_14_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 51);
  }
}
function AccountingComponent_div_19_table_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 80);
    \u0275\u0275elementContainerStart(1, 81);
    \u0275\u0275template(2, AccountingComponent_div_19_table_14_th_2_Template, 2, 0, "th", 20)(3, AccountingComponent_div_19_table_14_td_3_Template, 4, 6, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 82);
    \u0275\u0275template(5, AccountingComponent_div_19_table_14_th_5_Template, 2, 0, "th", 20)(6, AccountingComponent_div_19_table_14_td_6_Template, 3, 4, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 83);
    \u0275\u0275template(8, AccountingComponent_div_19_table_14_th_8_Template, 2, 0, "th", 20)(9, AccountingComponent_div_19_table_14_td_9_Template, 3, 4, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 84);
    \u0275\u0275template(11, AccountingComponent_div_19_table_14_th_11_Template, 2, 0, "th", 20)(12, AccountingComponent_div_19_table_14_td_12_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 85);
    \u0275\u0275template(14, AccountingComponent_div_19_table_14_th_14_Template, 2, 0, "th", 20)(15, AccountingComponent_div_19_table_14_td_15_Template, 3, 2, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 86);
    \u0275\u0275template(17, AccountingComponent_div_19_table_14_th_17_Template, 2, 0, "th", 20)(18, AccountingComponent_div_19_table_14_td_18_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(19, AccountingComponent_div_19_table_14_tr_19_Template, 1, 0, "tr", 31)(20, AccountingComponent_div_19_table_14_tr_20_Template, 1, 0, "tr", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dataSource", ctx_r1.adjustments);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(3, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(4, _c2));
  }
}
function AccountingComponent_div_19_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1, " No adjustments found. ");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 55)(2, "h3")(3, "mat-icon", 56);
    \u0275\u0275text(4, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 57);
    \u0275\u0275listener("click", function AccountingComponent_div_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 77)(10, "button", 74);
    \u0275\u0275listener("click", function AccountingComponent_div_19_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdjustmentForm());
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Adjustment ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AccountingComponent_div_19_table_14_Template, 21, 5, "table", 78)(15, AccountingComponent_div_19_div_15_Template, 2, 0, "div", 79);
    \u0275\u0275elementStart(16, "div", 72)(17, "button", 73);
    \u0275\u0275listener("click", function AccountingComponent_div_19_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentPopup());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Adjustment History \u2014 ", ctx_r1.adjustmentAgent == null ? null : ctx_r1.adjustmentAgent.businessName, "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.adjustments.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.adjustments.length);
  }
}
function AccountingComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function AccountingComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCommissionPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_21_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.commissionFormError);
  }
}
function AccountingComponent_div_21_mat_spinner_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 97);
  }
}
function AccountingComponent_div_21_mat_icon_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 55)(2, "h3")(3, "mat-icon", 56);
    \u0275\u0275text(4, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 57);
    \u0275\u0275listener("click", function AccountingComponent_div_21_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCommissionPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AccountingComponent_div_21_div_9_Template, 2, 1, "div", 65);
    \u0275\u0275elementStart(10, "mat-form-field", 66)(11, "mat-label");
    \u0275\u0275text(12, "Service Charge Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_21_Template_mat_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.commissionForm.commissionType, $event) || (ctx_r1.commissionForm.commissionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "mat-option", 93);
    \u0275\u0275text(15, "Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-option", 94);
    \u0275\u0275text(17, "Flat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "mat-form-field", 66)(19, "mat-label");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_21_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.commissionForm.commissionValue, $event) || (ctx_r1.commissionForm.commissionValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 72)(23, "button", 73);
    \u0275\u0275listener("click", function AccountingComponent_div_21_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCommissionPopup());
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 95);
    \u0275\u0275listener("click", function AccountingComponent_div_21_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveAgentCommission());
    });
    \u0275\u0275template(28, AccountingComponent_div_21_mat_spinner_28_Template, 1, 0, "mat-spinner", 96)(29, AccountingComponent_div_21_mat_icon_29_Template, 2, 0, "mat-icon", 38);
    \u0275\u0275text(30, " Save ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Agent Service Charge \u2014 ", ctx_r1.commissionAgent == null ? null : ctx_r1.commissionAgent.businessName, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.commissionFormError);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.commissionForm.commissionType);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.commissionForm.commissionType === "Percentage" ? "Service Charge Percentage (%)" : "Flat Fee Amount");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.commissionForm.commissionValue);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.savingCommission);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingCommission);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.savingCommission);
  }
}
function emptyAdjustmentForm() {
  return { amount: 0, durationDays: null, notes: "" };
}
function emptyCommissionSetupForm() {
  return { commissionType: "Percentage", commissionValue: 0, isActive: true };
}
var AccountingComponent = class _AccountingComponent {
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.summaries = [];
    this.displayedColumns = ["businessName", "agentType", "commission", "effectiveLimit", "available", "status", "actions"];
    this.searchString = "";
    this.loading = true;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
    this.showDetailPopup = false;
    this.detailAgent = null;
    this.showAdjustmentPopup = false;
    this.adjustmentAgent = null;
    this.adjustments = [];
    this.showAdjustmentForm = false;
    this.adjustmentFormError = "";
    this.adjustmentForm = emptyAdjustmentForm();
    this.showCommissionPopup = false;
    this.commissionAgent = null;
    this.agentCommission = null;
    this.commissionFormError = "";
    this.commissionForm = emptyCommissionSetupForm();
    this.savingCommission = false;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.searchString = s;
      this.pageIndex = 0;
      this.loadAccountingSummaries();
    });
    this.loadAccountingSummaries();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ---------------------------------------------------------------------------
  // Summaries
  // ---------------------------------------------------------------------------
  loadAccountingSummaries() {
    this.loading = true;
    this.api.getAccountingSummariesPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.summaries = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.summaries = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load data.");
        }
        this.loading = false;
      },
      error: () => {
        this.summaries = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadAccountingSummaries();
  }
  exportData(format) {
    this.exportService.export("api/admin/accounting/agents/export", { search: this.searchString }, format);
  }
  // ---------------------------------------------------------------------------
  // Detail popup
  // ---------------------------------------------------------------------------
  viewDetail(agent) {
    this.detailAgent = agent;
    this.showDetailPopup = true;
  }
  closeDetailPopup() {
    this.showDetailPopup = false;
  }
  // ---------------------------------------------------------------------------
  // Adjustments popup
  // ---------------------------------------------------------------------------
  openAdjustments(agent) {
    this.adjustmentAgent = agent;
    this.showAdjustmentForm = false;
    this.loadAdjustments(agent.agentId);
    this.showAdjustmentPopup = true;
  }
  closeAdjustmentPopup() {
    this.showAdjustmentPopup = false;
  }
  loadAdjustments(agentId) {
    this.api.getAgentAdjustments(agentId).subscribe((r) => {
      if (r?.success && r.data)
        this.adjustments = r.data;
      else
        this.adjustments = [];
    });
  }
  openAdjustmentForm() {
    this.adjustmentForm = emptyAdjustmentForm();
    this.adjustmentFormError = "";
    this.showAdjustmentForm = true;
  }
  closeAdjustmentForm() {
    this.showAdjustmentForm = false;
  }
  createAdjustment() {
    this.adjustmentFormError = "";
    const f = this.adjustmentForm;
    if (!f.amount) {
      this.adjustmentFormError = "Amount cannot be zero.";
      return;
    }
    const dto = {
      agentId: this.adjustmentAgent?.agentId,
      amount: f.amount,
      durationDays: f.durationDays,
      notes: f.notes || null
    };
    this.api.createAdjustment(dto).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Adjustment created.");
        this.showAdjustmentForm = false;
        if (this.adjustmentAgent)
          this.loadAdjustments(this.adjustmentAgent.agentId);
        this.loadAccountingSummaries();
      } else {
        this.adjustmentFormError = r?.message || "Failed.";
      }
    });
  }
  deactivateAdjustment(adj) {
    this.api.deactivateAdjustment(adj.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Adjustment deactivated.");
        if (this.adjustmentAgent)
          this.loadAdjustments(this.adjustmentAgent.agentId);
        this.loadAccountingSummaries();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Commission Setup popup
  // ---------------------------------------------------------------------------
  openCommissionSetup(agent) {
    this.commissionAgent = agent;
    this.commissionFormError = "";
    this.agentCommission = null;
    this.commissionForm = emptyCommissionSetupForm();
    this.loadAgentCommission(agent.agentId);
    this.showCommissionPopup = true;
  }
  closeCommissionPopup() {
    this.showCommissionPopup = false;
  }
  loadAgentCommission(agentId) {
    this.api.getAgentCommission(agentId).subscribe((r) => {
      if (r?.success && r.data) {
        this.agentCommission = r.data;
        this.commissionForm = {
          commissionType: r.data.commissionType,
          commissionValue: r.data.commissionValue,
          isActive: r.data.isActive
        };
      } else {
        this.agentCommission = null;
        this.commissionForm = emptyCommissionSetupForm();
      }
    });
  }
  saveAgentCommission() {
    this.commissionFormError = "";
    if (this.commissionForm.commissionValue <= 0) {
      this.commissionFormError = "Commission value must be greater than zero.";
      return;
    }
    if (this.commissionForm.commissionType === "Percentage" && this.commissionForm.commissionValue > 100) {
      this.commissionFormError = "Percentage cannot exceed 100%.";
      return;
    }
    this.savingCommission = true;
    const dto = {
      agentId: this.commissionAgent?.agentId,
      commissionType: this.commissionForm.commissionType,
      commissionValue: this.commissionForm.commissionValue,
      isActive: this.commissionForm.isActive
    };
    this.api.saveAgentCommission(dto).subscribe({
      next: (r) => {
        if (r?.success) {
          this.notify.success("Commission configuration saved.");
          if (r.data)
            this.agentCommission = r.data;
          this.loadAccountingSummaries();
        } else {
          this.commissionFormError = r?.message || "Failed.";
        }
        this.savingCommission = false;
      },
      error: () => {
        this.commissionFormError = "Server error.";
        this.savingCommission = false;
      }
    });
  }
  deleteAgentCommission() {
    if (!this.commissionAgent)
      return;
    this.api.deleteAgentCommission(this.commissionAgent.agentId).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Commission configuration deleted.");
        this.agentCommission = null;
        this.commissionForm = emptyCommissionSetupForm();
        this.loadAccountingSummaries();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function AccountingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountingComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountingComponent, selectors: [["app-accounting"]], decls: 22, vars: 10, consts: [[1, "page-header"], [1, "header-actions"], ["mat-stroked-button", "", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "overlay overlay-upper", 3, "click", 4, "ngIf"], ["class", "popup popup-sm popup-upper", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], ["class", "popup popup-sm", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], [1, "table-toolbar"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search agents...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "businessName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "agentType"], ["matColumnDef", "commission"], ["matColumnDef", "effectiveLimit"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right text-bold", 4, "matCellDef"], ["matColumnDef", "available"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", 3, "ngClass"], [4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right", "text-bold"], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["mat-icon-button", "", "matTooltip", "Adjust Limit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Commission", 3, "click"], [1, "text-tertiary"], ["mat-icon-button", "", "matTooltip", "Adjust Limit", 3, "click"], ["color", "primary"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], [1, "header-icon"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "divider"], [1, "text-bold"], [1, "overlay", "overlay-upper", 3, "click"], [1, "popup", "popup-sm", "popup-upper"], ["class", "form-error", 4, "ngIf"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "full-width", "mt-5"], [3, "ngModelChange", "ngModel"], [3, "value"], ["matInput", "", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "form-error"], [1, "popup", "popup-lg"], [1, "popup-toolbar"], ["mat-table", "", "class", "inner-table", 3, "dataSource", 4, "ngIf"], ["class", "empty-state-info", 4, "ngIf"], ["mat-table", "", 1, "inner-table", 3, "dataSource"], ["matColumnDef", "amount"], ["matColumnDef", "from"], ["matColumnDef", "to"], ["matColumnDef", "notes"], ["matColumnDef", "active"], ["matColumnDef", "adjActions"], [1, "text-bold", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Deactivate", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Deactivate", 3, "click"], ["color", "warn"], [1, "empty-state-info"], [1, "popup", "popup-sm"], ["value", "Percentage"], ["value", "Flat"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], ["diameter", "18", 1, "inline-spinner"]], template: function AccountingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Setup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
        \u0275\u0275listener("click", function AccountingComponent_Template_button_click_4_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 2);
        \u0275\u0275listener("click", function AccountingComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, AccountingComponent_div_12_Template, 2, 0, "div", 3)(13, AccountingComponent_mat_card_13_Template, 32, 10, "mat-card", 4)(14, AccountingComponent_div_14_Template, 1, 0, "div", 5)(15, AccountingComponent_div_15_Template, 71, 32, "div", 6)(16, AccountingComponent_div_16_Template, 1, 0, "div", 7)(17, AccountingComponent_div_17_Template, 43, 11, "div", 8)(18, AccountingComponent_div_18_Template, 1, 0, "div", 5)(19, AccountingComponent_div_19_Template, 21, 3, "div", 9)(20, AccountingComponent_div_20_Template, 1, 0, "div", 5)(21, AccountingComponent_div_21_Template, 31, 8, "div", 10);
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetailPopup && ctx.detailAgent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetailPopup && ctx.detailAgent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAdjustmentForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAdjustmentForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAdjustmentPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAdjustmentPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCommissionPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCommissionPopup);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner, MatPaginatorModule, MatPaginator], styles: ["\n\n/*# sourceMappingURL=accounting.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountingComponent, [{
    type: Component,
    args: [{ selector: "app-accounting", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatPaginatorModule,
      DecimalPipe,
      DatePipe
    ], template: `<!-- Page Header -->
<div class="page-header">
  <h2>Setup</h2>
  <div class="header-actions">
    <button mat-stroked-button (click)="exportData('excel')">
      <mat-icon>download</mat-icon> Excel
    </button>
    <button mat-stroked-button (click)="exportData('csv')">
      <mat-icon>download</mat-icon> CSV
    </button>
  </div>
</div>

<!-- Loading -->
<div *ngIf="loading" class="loading-container">
  <mat-spinner diameter="40"></mat-spinner>
</div>

<!-- Search + Table -->
<mat-card *ngIf="!loading" class="table-card">
  <div class="table-toolbar">
    <mat-form-field appearance="outline" class="search-field">
      <mat-icon matPrefix>search</mat-icon>
      <input matInput placeholder="Search agents..." [(ngModel)]="searchString"
        (ngModelChange)="searchDebounce.next($event)" />
    </mat-form-field>
  </div>

  <table mat-table [dataSource]="summaries" class="data-table">
    <!-- Agent -->
    <ng-container matColumnDef="businessName">
      <th mat-header-cell *matHeaderCellDef>Agent</th>
      <td mat-cell *matCellDef="let a">{{ a.businessName }}</td>
    </ng-container>

    <!-- Type -->
    <ng-container matColumnDef="agentType">
      <th mat-header-cell *matHeaderCellDef>Type</th>
      <td mat-cell *matCellDef="let a">
        <span class="chip" [ngClass]="a.agentType === 'PayoutAgent' ? 'chip-tertiary' : 'chip-info'">
          {{ a.agentType === 'PayoutAgent' ? 'Payout' : 'Sending' }}
        </span>
      </td>
    </ng-container>

    <!-- Commission -->
    <ng-container matColumnDef="commission">
      <th mat-header-cell *matHeaderCellDef>Service Charge</th>
      <td mat-cell *matCellDef="let a">
        <ng-container *ngIf="a.commissionMode">
          <span class="chip" [ngClass]="a.commissionMode === 'Percentage' ? 'chip-info' : 'chip-warning'">
            {{ a.commissionMode === 'Percentage' ? (a.commissionValue | number:'1.2-2') + '%' : 'Flat ' +
            (a.commissionValue | number:'1.2-2') }}
          </span>
        </ng-container>
        <span *ngIf="!a.commissionMode" class="text-muted">Not set</span>
      </td>
    </ng-container>

    <!-- Effective Limit -->
    <ng-container matColumnDef="effectiveLimit">
      <th mat-header-cell *matHeaderCellDef class="text-right">Effective Limit</th>
      <td mat-cell *matCellDef="let a" class="text-right text-bold">{{ a.effectiveCreditLimit | number:'1.2-2' }}</td>
    </ng-container>

    <!-- Available -->
    <ng-container matColumnDef="available">
      <th mat-header-cell *matHeaderCellDef class="text-right">Available</th>
      <td mat-cell *matCellDef="let a" class="text-right">
        <span class="chip" [ngClass]="a.availableBalance >= 0 ? 'chip-success' : 'chip-error'">
          {{ a.availableBalance | number:'1.2-2' }}
        </span>
      </td>
    </ng-container>

    <!-- Status -->
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef>Status</th>
      <td mat-cell *matCellDef="let a">
        <span class="chip" [ngClass]="{
          'chip-success': a.status === 'Approved',
          'chip-error': a.status === 'Blocked' || a.status === 'Rejected',
          'chip-warning': a.status !== 'Approved' && a.status !== 'Blocked' && a.status !== 'Rejected'
        }">{{ a.status }}</span>
      </td>
    </ng-container>

    <!-- Actions -->
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let a">
        <button mat-icon-button matTooltip="View Details" (click)="viewDetail(a)">
          <mat-icon>visibility</mat-icon>
        </button>
        <button *ngIf="a.agentType === 'SendingAgent'" mat-icon-button matTooltip="Adjust Limit"
          (click)="openAdjustments(a)">
          <mat-icon color="primary">tune</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Commission" (click)="openCommissionSetup(a)">
          <mat-icon class="text-tertiary">percent</mat-icon>
        </button>
        <!-- <button mat-icon-button matTooltip="History" (click)="openAdjustments(a)">
          <mat-icon class="text-info">history</mat-icon>
        </button> -->
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  <div *ngIf="!summaries.length && !loading" class="empty-state">
    No agents found.
  </div>

  <mat-paginator [length]="totalCount" [pageSize]="pageSize" [pageIndex]="pageIndex"
    [pageSizeOptions]="[10, 20, 50, 100]" (page)="onPageChange($event)" showFirstLastButtons>
  </mat-paginator>
</mat-card>

<!-- ============================================================ -->
<!-- Agent Detail Popup                                            -->
<!-- ============================================================ -->
<div *ngIf="showDetailPopup && detailAgent" class="overlay" (click)="closeDetailPopup()"></div>
<div *ngIf="showDetailPopup && detailAgent" class="popup popup-md">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">settings</mat-icon> {{ detailAgent.businessName }} \u2014 Setup</h3>
    <button mat-icon-button (click)="closeDetailPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div class="detail-grid">
    <div class="detail-item">
      <span class="detail-label">Country</span>
      <span>{{ detailAgent.country }}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Currency</span>
      <span>{{ detailAgent.currency || '-' }}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Funding Type</span>
      <span>{{ detailAgent.fundingType || '-' }}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Agent Type</span>
      <span class="chip" [ngClass]="detailAgent.agentType === 'PayoutAgent' ? 'chip-tertiary' : 'chip-info'">
        {{ detailAgent.agentType === 'PayoutAgent' ? 'Payout Agent' : 'Sending Agent' }}
      </span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Status</span>
      <span class="chip" [ngClass]="{
        'chip-success': detailAgent.status === 'Approved',
        'chip-error': detailAgent.status === 'Blocked',
        'chip-warning': detailAgent.status !== 'Approved' && detailAgent.status !== 'Blocked'
      }">{{ detailAgent.status }}</span>
    </div>
  </div>

  <hr class="divider" />

  <div class="detail-grid">
    <div class="detail-item">
      <span class="detail-label">Base Credit Limit</span>
      <span>{{ detailAgent.baseCreditLimit | number:'1.2-2' }}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Effective Credit Limit</span>
      <span class="text-bold">{{ detailAgent.effectiveCreditLimit | number:'1.2-2' }}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Current Balance</span>
      <span>{{ detailAgent.currentBalance | number:'1.2-2' }}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Available Balance</span>
      <span class="chip" [ngClass]="detailAgent.availableBalance >= 0 ? 'chip-success' : 'chip-error'">
        {{ detailAgent.availableBalance | number:'1.2-2' }}
      </span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Active Adjustments</span>
      <span>{{ detailAgent.activeAdjustments }}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Service Charge</span>
      <ng-container *ngIf="detailAgent.commissionMode">
        <span>{{ detailAgent.commissionMode === 'Percentage' ? (detailAgent.commissionValue | number:'1.2-2') + '%' :
          'Flat ' + (detailAgent.commissionValue | number:'1.2-2') }}</span>
      </ng-container>
      <span *ngIf="!detailAgent.commissionMode" class="text-muted">Not set</span>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Adjust Limit Popup                                            -->
<!-- ============================================================ -->
<div *ngIf="showAdjustmentForm" class="overlay overlay-upper" (click)="closeAdjustmentForm()"></div>
<div *ngIf="showAdjustmentForm" class="popup popup-sm popup-upper">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">tune</mat-icon> Adjust Limit \u2014 {{ adjustmentAgent?.businessName }}</h3>
    <button mat-icon-button (click)="closeAdjustmentForm()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="adjustmentFormError" class="form-error">{{ adjustmentFormError }}</div>

  <mat-form-field appearance="outline" class="full-width">
    <mat-label>Amount (+ increase / - decrease) *</mat-label>
    <input matInput type="number" [(ngModel)]="adjustmentForm.amount" />
  </mat-form-field>

  <mat-form-field appearance="outline" class="full-width mt-5">
    <mat-label>Duration</mat-label>
    <mat-select [(ngModel)]="adjustmentForm.durationDays">
      <mat-option [value]="null">Permanent</mat-option>
      <mat-option [value]="2">2 Days</mat-option>
      <mat-option [value]="3">3 Days</mat-option>
      <mat-option [value]="7">7 Days</mat-option>
      <mat-option [value]="30">30 Days</mat-option>
      <mat-option [value]="90">90 Days</mat-option>
    </mat-select>
  </mat-form-field>

  <mat-form-field appearance="outline" class="full-width">
    <mat-label>Notes (optional)</mat-label>
    <textarea matInput rows="2" [(ngModel)]="adjustmentForm.notes"></textarea>
  </mat-form-field>

  <div class="popup-actions">
    <button mat-button (click)="closeAdjustmentForm()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="createAdjustment()">
      <mat-icon>save</mat-icon> Save
    </button>
  </div>
</div>

<!-- ============================================================ -->
<!-- Adjustment History Popup                                       -->
<!-- ============================================================ -->
<div *ngIf="showAdjustmentPopup" class="overlay" (click)="closeAdjustmentPopup()"></div>
<div *ngIf="showAdjustmentPopup" class="popup popup-lg">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">history</mat-icon> Adjustment History \u2014 {{ adjustmentAgent?.businessName }}</h3>
    <button mat-icon-button (click)="closeAdjustmentPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div class="popup-toolbar">
    <button mat-raised-button color="primary" (click)="openAdjustmentForm()">
      <mat-icon>add</mat-icon> Add Adjustment
    </button>
  </div>

  <table *ngIf="adjustments.length" mat-table [dataSource]="adjustments" class="inner-table">
    <ng-container matColumnDef="amount">
      <th mat-header-cell *matHeaderCellDef>Amount</th>
      <td mat-cell *matCellDef="let adj">
        <span [ngClass]="adj.amount >= 0 ? 'text-success' : 'text-error'" class="text-bold">
          {{ adj.amount >= 0 ? '+' : '' }}{{ adj.amount | number:'1.2-2' }}
        </span>
      </td>
    </ng-container>

    <ng-container matColumnDef="from">
      <th mat-header-cell *matHeaderCellDef>From</th>
      <td mat-cell *matCellDef="let adj">{{ adj.effectiveFrom | date:'yyyy-MM-dd' }}</td>
    </ng-container>

    <ng-container matColumnDef="to">
      <th mat-header-cell *matHeaderCellDef>To</th>
      <td mat-cell *matCellDef="let adj">{{ adj.effectiveTo ? (adj.effectiveTo | date:'yyyy-MM-dd') : 'Permanent' }}
      </td>
    </ng-container>

    <ng-container matColumnDef="notes">
      <th mat-header-cell *matHeaderCellDef>Notes</th>
      <td mat-cell *matCellDef="let adj">{{ adj.notes || '-' }}</td>
    </ng-container>

    <ng-container matColumnDef="active">
      <th mat-header-cell *matHeaderCellDef>Active</th>
      <td mat-cell *matCellDef="let adj">
        <span class="chip" [ngClass]="adj.isActive ? 'chip-success' : 'chip-default'">{{ adj.isActive ? 'Active' :
          'Inactive' }}</span>
      </td>
    </ng-container>

    <ng-container matColumnDef="adjActions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let adj">
        <button *ngIf="adj.isActive" mat-icon-button matTooltip="Deactivate" (click)="deactivateAdjustment(adj)">
          <mat-icon color="warn">block</mat-icon>
        </button>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="['amount','from','to','notes','active','adjActions']"></tr>
    <tr mat-row *matRowDef="let row; columns: ['amount','from','to','notes','active','adjActions'];"></tr>
  </table>

  <div *ngIf="!adjustments.length" class="empty-state-info">
    No adjustments found.
  </div>

  <div class="popup-actions">
    <button mat-button (click)="closeAdjustmentPopup()"><mat-icon>close</mat-icon> Close</button>
  </div>
</div>

<!-- ============================================================ -->
<!-- Commission Setup Popup                                        -->
<!-- ============================================================ -->
<div *ngIf="showCommissionPopup" class="overlay" (click)="closeCommissionPopup()"></div>
<div *ngIf="showCommissionPopup" class="popup popup-sm">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">percent</mat-icon> Agent Service Charge \u2014 {{ commissionAgent?.businessName }}</h3>
    <button mat-icon-button (click)="closeCommissionPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="commissionFormError" class="form-error">{{ commissionFormError }}</div>

  <mat-form-field appearance="outline" class="full-width">
    <mat-label>Service Charge Type *</mat-label>
    <mat-select [(ngModel)]="commissionForm.commissionType">
      <mat-option value="Percentage">Percentage</mat-option>
      <mat-option value="Flat">Flat</mat-option>
    </mat-select>
  </mat-form-field>

  <mat-form-field appearance="outline" class="full-width">
    <mat-label>{{ commissionForm.commissionType === 'Percentage' ? 'Service Charge Percentage (%)' : 'Flat Fee Amount'
      }}</mat-label>
    <input matInput type="number" [(ngModel)]="commissionForm.commissionValue" />
  </mat-form-field>

  <div class="popup-actions">
    <button mat-button (click)="closeCommissionPopup()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="saveAgentCommission()" [disabled]="savingCommission">
      <mat-spinner *ngIf="savingCommission" diameter="18" class="inline-spinner"></mat-spinner>
      <mat-icon *ngIf="!savingCommission">save</mat-icon> Save
    </button>
  </div>
</div>`, styles: ["/* src/app/pages/admin/accounting/accounting.component.scss */\n/*# sourceMappingURL=accounting.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountingComponent, { className: "AccountingComponent", filePath: "src/app/pages/admin/accounting/accounting.component.ts", lineNumber: 64 });
})();
export {
  AccountingComponent
};
//# sourceMappingURL=chunk-NURRMU2S.js.map
