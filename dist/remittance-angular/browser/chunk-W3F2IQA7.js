import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-YGDTJNE7.js";
import {
  NotificationService
} from "./chunk-YVJ6TWB2.js";
import "./chunk-S5Y76ZQA.js";
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
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-NF2W6NXA.js";
import {
  ApiService,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule
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
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
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
  setClassMetadata,
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
} from "./chunk-7WRAX6BO.js";

// src/app/pages/admin/accounting/accounting.component.ts
var _c0 = (a0, a1, a2) => ({ "chip-success": a0, "chip-error": a1, "chip-warning": a2 });
var _c1 = () => ["amount", "from", "to", "notes", "active", "adjActions"];
function AccountingComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_4_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Agent");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_4_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.businessName);
  }
}
function AccountingComponent_mat_card_4_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_4_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 33);
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
function AccountingComponent_mat_card_4_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Commission");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_4_td_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 33);
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
function AccountingComponent_mat_card_4_td_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Not set");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_4_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275template(1, AccountingComponent_mat_card_4_td_14_ng_container_1_Template, 5, 8, "ng-container", 34)(2, AccountingComponent_mat_card_4_td_14_span_2_Template, 2, 0, "span", 35);
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
function AccountingComponent_mat_card_4_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1, "Effective Limit");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_4_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38);
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
function AccountingComponent_mat_card_4_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1, "Available");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_4_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 39)(1, "span", 33);
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
function AccountingComponent_mat_card_4_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_4_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c0, a_r8.status === "Approved", a_r8.status === "Blocked" || a_r8.status === "Rejected", a_r8.status !== "Approved" && a_r8.status !== "Blocked" && a_r8.status !== "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r8.status);
  }
}
function AccountingComponent_mat_card_4_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_4_td_26_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function AccountingComponent_mat_card_4_td_26_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const a_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAdjustments(a_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 47);
    \u0275\u0275text(2, "tune");
    \u0275\u0275elementEnd()();
  }
}
function AccountingComponent_mat_card_4_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 40);
    \u0275\u0275listener("click", function AccountingComponent_mat_card_4_td_26_Template_button_click_1_listener() {
      const a_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(a_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AccountingComponent_mat_card_4_td_26_button_4_Template, 3, 0, "button", 41);
    \u0275\u0275elementStart(5, "button", 42);
    \u0275\u0275listener("click", function AccountingComponent_mat_card_4_td_26_Template_button_click_5_listener() {
      const a_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCommissionSetup(a_r10));
    });
    \u0275\u0275elementStart(6, "mat-icon", 43);
    \u0275\u0275text(7, "percent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 44);
    \u0275\u0275listener("click", function AccountingComponent_mat_card_4_td_26_Template_button_click_8_listener() {
      const a_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAdjustments(a_r10));
    });
    \u0275\u0275elementStart(9, "mat-icon", 45);
    \u0275\u0275text(10, "history");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", a_r10.agentType === "SendingAgent");
  }
}
function AccountingComponent_mat_card_4_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function AccountingComponent_mat_card_4_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 49);
  }
}
function AccountingComponent_mat_card_4_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, " No agents found. ");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_mat_card_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 11)(1, "mat-form-field", 12)(2, "mat-icon", 13);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_mat_card_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AccountingComponent_mat_card_4_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 15);
    \u0275\u0275elementContainerStart(6, 16);
    \u0275\u0275template(7, AccountingComponent_mat_card_4_th_7_Template, 2, 0, "th", 17)(8, AccountingComponent_mat_card_4_td_8_Template, 2, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 19);
    \u0275\u0275template(10, AccountingComponent_mat_card_4_th_10_Template, 2, 0, "th", 17)(11, AccountingComponent_mat_card_4_td_11_Template, 3, 2, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 20);
    \u0275\u0275template(13, AccountingComponent_mat_card_4_th_13_Template, 2, 0, "th", 17)(14, AccountingComponent_mat_card_4_td_14_Template, 3, 2, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 21);
    \u0275\u0275template(16, AccountingComponent_mat_card_4_th_16_Template, 2, 0, "th", 22)(17, AccountingComponent_mat_card_4_td_17_Template, 3, 4, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 24);
    \u0275\u0275template(19, AccountingComponent_mat_card_4_th_19_Template, 2, 0, "th", 22)(20, AccountingComponent_mat_card_4_td_20_Template, 4, 5, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 26);
    \u0275\u0275template(22, AccountingComponent_mat_card_4_th_22_Template, 2, 0, "th", 17)(23, AccountingComponent_mat_card_4_td_23_Template, 3, 6, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 27);
    \u0275\u0275template(25, AccountingComponent_mat_card_4_th_25_Template, 2, 0, "th", 17)(26, AccountingComponent_mat_card_4_td_26_Template, 11, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(27, AccountingComponent_mat_card_4_tr_27_Template, 1, 0, "tr", 28)(28, AccountingComponent_mat_card_4_tr_28_Template, 1, 0, "tr", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, AccountingComponent_mat_card_4_div_29_Template, 2, 0, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.filteredSummaries);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredSummaries.length && !ctx_r1.loading);
  }
}
function AccountingComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function AccountingComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetailPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_6_ng_container_69_Template(rf, ctx) {
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
function AccountingComponent_div_6_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Not set");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "h3")(3, "mat-icon", 54);
    \u0275\u0275text(4, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function AccountingComponent_div_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetailPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 56)(10, "div", 57)(11, "span", 58);
    \u0275\u0275text(12, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 57)(16, "span", 58);
    \u0275\u0275text(17, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 57)(21, "span", 58);
    \u0275\u0275text(22, "Funding Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 57)(26, "span", 58);
    \u0275\u0275text(27, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 33);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 57)(31, "span", 58);
    \u0275\u0275text(32, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 33);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(35, "hr", 59);
    \u0275\u0275elementStart(36, "div", 56)(37, "div", 57)(38, "span", 58);
    \u0275\u0275text(39, "Base Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 57)(44, "span", 58);
    \u0275\u0275text(45, "Effective Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 60);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 57)(50, "span", 58);
    \u0275\u0275text(51, "Current Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 57)(56, "span", 58);
    \u0275\u0275text(57, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 33);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 57)(62, "span", 58);
    \u0275\u0275text(63, "Active Adjustments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 57)(67, "span", 58);
    \u0275\u0275text(68, "Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275template(69, AccountingComponent_div_6_ng_container_69_Template, 5, 7, "ng-container", 34)(70, AccountingComponent_div_6_span_70_Template, 2, 0, "span", 35);
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
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(28, _c0, ctx_r1.detailAgent.status === "Approved", ctx_r1.detailAgent.status === "Blocked", ctx_r1.detailAgent.status !== "Approved" && ctx_r1.detailAgent.status !== "Blocked"));
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
function AccountingComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function AccountingComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.adjustmentFormError);
  }
}
function AccountingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 53)(2, "h3")(3, "mat-icon", 54);
    \u0275\u0275text(4, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function AccountingComponent_div_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentForm());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AccountingComponent_div_8_div_9_Template, 2, 1, "div", 63);
    \u0275\u0275elementStart(10, "mat-form-field", 64)(11, "mat-label");
    \u0275\u0275text(12, "Amount (+ increase / - decrease) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_8_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.amount, $event) || (ctx_r1.adjustmentForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 64)(15, "mat-label");
    \u0275\u0275text(16, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_8_Template_mat_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.durationDays, $event) || (ctx_r1.adjustmentForm.durationDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "mat-option", 67);
    \u0275\u0275text(19, "Permanent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-option", 67);
    \u0275\u0275text(21, "2 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-option", 67);
    \u0275\u0275text(23, "3 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-option", 67);
    \u0275\u0275text(25, "7 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-option", 67);
    \u0275\u0275text(27, "30 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-option", 67);
    \u0275\u0275text(29, "90 Days");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "mat-form-field", 64)(31, "mat-label");
    \u0275\u0275text(32, "Notes (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "textarea", 68);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_8_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.notes, $event) || (ctx_r1.adjustmentForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 69)(35, "button", 70);
    \u0275\u0275listener("click", function AccountingComponent_div_8_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentForm());
    });
    \u0275\u0275elementStart(36, "mat-icon");
    \u0275\u0275text(37, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 71);
    \u0275\u0275listener("click", function AccountingComponent_div_8_Template_button_click_39_listener() {
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
function AccountingComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function AccountingComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_10_table_14_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_10_table_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 84);
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
function AccountingComponent_div_10_table_14_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "From");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_10_table_14_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
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
function AccountingComponent_div_10_table_14_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "To");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_10_table_14_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const adj_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(adj_r20.effectiveTo ? \u0275\u0275pipeBind2(2, 1, adj_r20.effectiveTo, "yyyy-MM-dd") : "Permanent");
  }
}
function AccountingComponent_div_10_table_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Notes");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_10_table_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const adj_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(adj_r21.notes || "-");
  }
}
function AccountingComponent_div_10_table_14_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_10_table_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 33);
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
function AccountingComponent_div_10_table_14_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_10_table_14_td_18_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function AccountingComponent_div_10_table_14_td_18_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const adj_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deactivateAdjustment(adj_r24));
    });
    \u0275\u0275elementStart(1, "mat-icon", 87);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd()();
  }
}
function AccountingComponent_div_10_table_14_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275template(1, AccountingComponent_div_10_table_14_td_18_button_1_Template, 3, 0, "button", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const adj_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", adj_r24.isActive);
  }
}
function AccountingComponent_div_10_table_14_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function AccountingComponent_div_10_table_14_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 49);
  }
}
function AccountingComponent_div_10_table_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 77);
    \u0275\u0275elementContainerStart(1, 78);
    \u0275\u0275template(2, AccountingComponent_div_10_table_14_th_2_Template, 2, 0, "th", 17)(3, AccountingComponent_div_10_table_14_td_3_Template, 4, 6, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 79);
    \u0275\u0275template(5, AccountingComponent_div_10_table_14_th_5_Template, 2, 0, "th", 17)(6, AccountingComponent_div_10_table_14_td_6_Template, 3, 4, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 80);
    \u0275\u0275template(8, AccountingComponent_div_10_table_14_th_8_Template, 2, 0, "th", 17)(9, AccountingComponent_div_10_table_14_td_9_Template, 3, 4, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 81);
    \u0275\u0275template(11, AccountingComponent_div_10_table_14_th_11_Template, 2, 0, "th", 17)(12, AccountingComponent_div_10_table_14_td_12_Template, 2, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 82);
    \u0275\u0275template(14, AccountingComponent_div_10_table_14_th_14_Template, 2, 0, "th", 17)(15, AccountingComponent_div_10_table_14_td_15_Template, 3, 2, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 83);
    \u0275\u0275template(17, AccountingComponent_div_10_table_14_th_17_Template, 2, 0, "th", 17)(18, AccountingComponent_div_10_table_14_td_18_Template, 2, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(19, AccountingComponent_div_10_table_14_tr_19_Template, 1, 0, "tr", 28)(20, AccountingComponent_div_10_table_14_tr_20_Template, 1, 0, "tr", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dataSource", ctx_r1.adjustments);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(4, _c1));
  }
}
function AccountingComponent_div_10_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1, " No adjustments found. ");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 53)(2, "h3")(3, "mat-icon", 54);
    \u0275\u0275text(4, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function AccountingComponent_div_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 74)(10, "button", 71);
    \u0275\u0275listener("click", function AccountingComponent_div_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdjustmentForm());
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Adjustment ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AccountingComponent_div_10_table_14_Template, 21, 5, "table", 75)(15, AccountingComponent_div_10_div_15_Template, 2, 0, "div", 76);
    \u0275\u0275elementStart(16, "div", 69)(17, "button", 70);
    \u0275\u0275listener("click", function AccountingComponent_div_10_Template_button_click_17_listener() {
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
function AccountingComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function AccountingComponent_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCommissionPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.commissionFormError);
  }
}
function AccountingComponent_div_12_mat_spinner_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 94);
  }
}
function AccountingComponent_div_12_mat_icon_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function AccountingComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 53)(2, "h3")(3, "mat-icon", 54);
    \u0275\u0275text(4, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function AccountingComponent_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCommissionPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AccountingComponent_div_12_div_9_Template, 2, 1, "div", 63);
    \u0275\u0275elementStart(10, "mat-form-field", 64)(11, "mat-label");
    \u0275\u0275text(12, "Commission Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_12_Template_mat_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.commissionForm.commissionType, $event) || (ctx_r1.commissionForm.commissionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "mat-option", 90);
    \u0275\u0275text(15, "Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-option", 91);
    \u0275\u0275text(17, "Flat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "mat-form-field", 64)(19, "mat-label");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function AccountingComponent_div_12_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.commissionForm.commissionValue, $event) || (ctx_r1.commissionForm.commissionValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 69)(23, "button", 70);
    \u0275\u0275listener("click", function AccountingComponent_div_12_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCommissionPopup());
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 92);
    \u0275\u0275listener("click", function AccountingComponent_div_12_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveAgentCommission());
    });
    \u0275\u0275template(28, AccountingComponent_div_12_mat_spinner_28_Template, 1, 0, "mat-spinner", 93)(29, AccountingComponent_div_12_mat_icon_29_Template, 2, 0, "mat-icon", 34);
    \u0275\u0275text(30, " Save ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Agent Commission \u2014 ", ctx_r1.commissionAgent == null ? null : ctx_r1.commissionAgent.businessName, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.commissionFormError);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.commissionForm.commissionType);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.commissionForm.commissionType === "Percentage" ? "Commission Percentage (%)" : "Flat Fee Amount");
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
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.summaries = [];
    this.filteredSummaries = [];
    this.displayedColumns = ["businessName", "agentType", "commission", "effectiveLimit", "available", "status", "actions"];
    this.searchString = "";
    this.loading = true;
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
    this.loadAccountingSummaries();
  }
  // ---------------------------------------------------------------------------
  // Summaries
  // ---------------------------------------------------------------------------
  loadAccountingSummaries() {
    this.loading = true;
    this.api.getAccountingSummaries().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.summaries = res.data;
          this.applyFilter();
        } else {
          this.summaries = [];
          this.filteredSummaries = [];
          this.notify.error(res?.message || "Failed to load data.");
        }
        this.loading = false;
      },
      error: () => {
        this.summaries = [];
        this.filteredSummaries = [];
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const s = this.searchString.toLowerCase();
    this.filteredSummaries = !s ? [...this.summaries] : this.summaries.filter((a) => a.businessName.toLowerCase().includes(s) || a.country.toLowerCase().includes(s));
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
      return new (__ngFactoryType__ || _AccountingComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountingComponent, selectors: [["app-accounting"]], decls: 13, vars: 10, consts: [[1, "page-header"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "overlay overlay-upper", 3, "click", 4, "ngIf"], ["class", "popup popup-sm popup-upper", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], ["class", "popup popup-sm", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search agents...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "businessName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "agentType"], ["matColumnDef", "commission"], ["matColumnDef", "effectiveLimit"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right text-bold", 4, "matCellDef"], ["matColumnDef", "available"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", 3, "ngClass"], [4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right", "text-bold"], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["mat-icon-button", "", "matTooltip", "Adjust Limit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Commission", 3, "click"], [1, "text-tertiary"], ["mat-icon-button", "", "matTooltip", "History", 3, "click"], [1, "text-info"], ["mat-icon-button", "", "matTooltip", "Adjust Limit", 3, "click"], ["color", "primary"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], [1, "header-icon"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "divider"], [1, "text-bold"], [1, "overlay", "overlay-upper", 3, "click"], [1, "popup", "popup-sm", "popup-upper"], ["class", "form-error", 4, "ngIf"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value"], ["matInput", "", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "form-error"], [1, "popup", "popup-lg"], [1, "popup-toolbar"], ["mat-table", "", "class", "inner-table", 3, "dataSource", 4, "ngIf"], ["class", "empty-state-info", 4, "ngIf"], ["mat-table", "", 1, "inner-table", 3, "dataSource"], ["matColumnDef", "amount"], ["matColumnDef", "from"], ["matColumnDef", "to"], ["matColumnDef", "notes"], ["matColumnDef", "active"], ["matColumnDef", "adjActions"], [1, "text-bold", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Deactivate", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Deactivate", 3, "click"], ["color", "warn"], [1, "empty-state-info"], [1, "popup", "popup-sm"], ["value", "Percentage"], ["value", "Flat"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], ["diameter", "18", 1, "inline-spinner"]], template: function AccountingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Setup");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, AccountingComponent_div_3_Template, 2, 0, "div", 1)(4, AccountingComponent_mat_card_4_Template, 30, 5, "mat-card", 2)(5, AccountingComponent_div_5_Template, 1, 0, "div", 3)(6, AccountingComponent_div_6_Template, 71, 32, "div", 4)(7, AccountingComponent_div_7_Template, 1, 0, "div", 5)(8, AccountingComponent_div_8_Template, 43, 11, "div", 6)(9, AccountingComponent_div_9_Template, 1, 0, "div", 3)(10, AccountingComponent_div_10_Template, 21, 3, "div", 7)(11, AccountingComponent_div_11_Template, 1, 0, "div", 3)(12, AccountingComponent_div_12_Template, 31, 8, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
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
    }, dependencies: [CommonModule, NgClass, NgIf, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  margin: 0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 320px;\n  margin-bottom: 8px;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.data-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 8px 12px;\n}\n.data-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 8px 12px;\n  color: #374151;\n}\n.inner-table[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n}\n.empty-state-info[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: rgba(0, 0, 0, 0.5);\n  background: #f0f4ff;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.chip.chip-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-tertiary[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.chip.chip-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #2e7d32 !important;\n}\n.text-error[_ngcontent-%COMP%] {\n  color: #c62828 !important;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #e65100 !important;\n}\n.text-tertiary[_ngcontent-%COMP%] {\n  color: #7b1fa2 !important;\n}\n.text-info[_ngcontent-%COMP%] {\n  color: #1565c0 !important;\n}\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 12px;\n}\n.form-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.overlay.overlay-upper[_ngcontent-%COMP%] {\n  z-index: 10010;\n}\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n.popup.popup-sm[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-md[_ngcontent-%COMP%] {\n  width: 600px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-lg[_ngcontent-%COMP%] {\n  width: 800px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-upper[_ngcontent-%COMP%] {\n  z-index: 10011;\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #1565c0;\n}\n.popup-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n.popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  margin: 16px 0;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.inline-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .popup[_ngcontent-%COMP%] {\n    padding: 16px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=accounting.component.css.map */"] });
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
      DecimalPipe,
      DatePipe
    ], template: `<!-- Page Header -->\r
<div class="page-header">\r
  <h2>Setup</h2>\r
</div>\r
\r
<!-- Loading -->\r
<div *ngIf="loading" class="loading-container">\r
  <mat-spinner diameter="40"></mat-spinner>\r
</div>\r
\r
<!-- Search + Table -->\r
<mat-card *ngIf="!loading" class="table-card">\r
  <mat-form-field appearance="outline" class="search-field">\r
    <mat-icon matPrefix>search</mat-icon>\r
    <input matInput placeholder="Search agents..." [(ngModel)]="searchString" (ngModelChange)="applyFilter()" />\r
  </mat-form-field>\r
\r
  <table mat-table [dataSource]="filteredSummaries" class="data-table">\r
    <!-- Agent -->\r
    <ng-container matColumnDef="businessName">\r
      <th mat-header-cell *matHeaderCellDef>Agent</th>\r
      <td mat-cell *matCellDef="let a">{{ a.businessName }}</td>\r
    </ng-container>\r
\r
    <!-- Type -->\r
    <ng-container matColumnDef="agentType">\r
      <th mat-header-cell *matHeaderCellDef>Type</th>\r
      <td mat-cell *matCellDef="let a">\r
        <span class="chip" [ngClass]="a.agentType === 'PayoutAgent' ? 'chip-tertiary' : 'chip-info'">\r
          {{ a.agentType === 'PayoutAgent' ? 'Payout' : 'Sending' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Commission -->\r
    <ng-container matColumnDef="commission">\r
      <th mat-header-cell *matHeaderCellDef>Commission</th>\r
      <td mat-cell *matCellDef="let a">\r
        <ng-container *ngIf="a.commissionMode">\r
          <span class="chip" [ngClass]="a.commissionMode === 'Percentage' ? 'chip-info' : 'chip-warning'">\r
            {{ a.commissionMode === 'Percentage' ? (a.commissionValue | number:'1.2-2') + '%' : 'Flat ' + (a.commissionValue | number:'1.2-2') }}\r
          </span>\r
        </ng-container>\r
        <span *ngIf="!a.commissionMode" class="text-muted">Not set</span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Effective Limit -->\r
    <ng-container matColumnDef="effectiveLimit">\r
      <th mat-header-cell *matHeaderCellDef class="text-right">Effective Limit</th>\r
      <td mat-cell *matCellDef="let a" class="text-right text-bold">{{ a.effectiveCreditLimit | number:'1.2-2' }}</td>\r
    </ng-container>\r
\r
    <!-- Available -->\r
    <ng-container matColumnDef="available">\r
      <th mat-header-cell *matHeaderCellDef class="text-right">Available</th>\r
      <td mat-cell *matCellDef="let a" class="text-right">\r
        <span class="chip" [ngClass]="a.availableBalance >= 0 ? 'chip-success' : 'chip-error'">\r
          {{ a.availableBalance | number:'1.2-2' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Status -->\r
    <ng-container matColumnDef="status">\r
      <th mat-header-cell *matHeaderCellDef>Status</th>\r
      <td mat-cell *matCellDef="let a">\r
        <span class="chip" [ngClass]="{\r
          'chip-success': a.status === 'Approved',\r
          'chip-error': a.status === 'Blocked' || a.status === 'Rejected',\r
          'chip-warning': a.status !== 'Approved' && a.status !== 'Blocked' && a.status !== 'Rejected'\r
        }">{{ a.status }}</span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Actions -->\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let a">\r
        <button mat-icon-button matTooltip="View Details" (click)="viewDetail(a)">\r
          <mat-icon>visibility</mat-icon>\r
        </button>\r
        <button *ngIf="a.agentType === 'SendingAgent'" mat-icon-button matTooltip="Adjust Limit" (click)="openAdjustments(a)">\r
          <mat-icon color="primary">tune</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Commission" (click)="openCommissionSetup(a)">\r
          <mat-icon class="text-tertiary">percent</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="History" (click)="openAdjustments(a)">\r
          <mat-icon class="text-info">history</mat-icon>\r
        </button>\r
      </td>\r
    </ng-container>\r
\r
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
  </table>\r
\r
  <div *ngIf="!filteredSummaries.length && !loading" class="empty-state">\r
    No agents found.\r
  </div>\r
</mat-card>\r
\r
<!-- ============================================================ -->\r
<!-- Agent Detail Popup                                            -->\r
<!-- ============================================================ -->\r
<div *ngIf="showDetailPopup && detailAgent" class="overlay" (click)="closeDetailPopup()"></div>\r
<div *ngIf="showDetailPopup && detailAgent" class="popup popup-md">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">settings</mat-icon> {{ detailAgent.businessName }} \u2014 Setup</h3>\r
    <button mat-icon-button (click)="closeDetailPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div class="detail-grid">\r
    <div class="detail-item">\r
      <span class="detail-label">Country</span>\r
      <span>{{ detailAgent.country }}</span>\r
    </div>\r
    <div class="detail-item">\r
      <span class="detail-label">Currency</span>\r
      <span>{{ detailAgent.currency || '-' }}</span>\r
    </div>\r
    <div class="detail-item">\r
      <span class="detail-label">Funding Type</span>\r
      <span>{{ detailAgent.fundingType || '-' }}</span>\r
    </div>\r
    <div class="detail-item">\r
      <span class="detail-label">Agent Type</span>\r
      <span class="chip" [ngClass]="detailAgent.agentType === 'PayoutAgent' ? 'chip-tertiary' : 'chip-info'">\r
        {{ detailAgent.agentType === 'PayoutAgent' ? 'Payout Agent' : 'Sending Agent' }}\r
      </span>\r
    </div>\r
    <div class="detail-item">\r
      <span class="detail-label">Status</span>\r
      <span class="chip" [ngClass]="{\r
        'chip-success': detailAgent.status === 'Approved',\r
        'chip-error': detailAgent.status === 'Blocked',\r
        'chip-warning': detailAgent.status !== 'Approved' && detailAgent.status !== 'Blocked'\r
      }">{{ detailAgent.status }}</span>\r
    </div>\r
  </div>\r
\r
  <hr class="divider" />\r
\r
  <div class="detail-grid">\r
    <div class="detail-item">\r
      <span class="detail-label">Base Credit Limit</span>\r
      <span>{{ detailAgent.baseCreditLimit | number:'1.2-2' }}</span>\r
    </div>\r
    <div class="detail-item">\r
      <span class="detail-label">Effective Credit Limit</span>\r
      <span class="text-bold">{{ detailAgent.effectiveCreditLimit | number:'1.2-2' }}</span>\r
    </div>\r
    <div class="detail-item">\r
      <span class="detail-label">Current Balance</span>\r
      <span>{{ detailAgent.currentBalance | number:'1.2-2' }}</span>\r
    </div>\r
    <div class="detail-item">\r
      <span class="detail-label">Available Balance</span>\r
      <span class="chip" [ngClass]="detailAgent.availableBalance >= 0 ? 'chip-success' : 'chip-error'">\r
        {{ detailAgent.availableBalance | number:'1.2-2' }}\r
      </span>\r
    </div>\r
    <div class="detail-item">\r
      <span class="detail-label">Active Adjustments</span>\r
      <span>{{ detailAgent.activeAdjustments }}</span>\r
    </div>\r
    <div class="detail-item">\r
      <span class="detail-label">Commission</span>\r
      <ng-container *ngIf="detailAgent.commissionMode">\r
        <span>{{ detailAgent.commissionMode === 'Percentage' ? (detailAgent.commissionValue | number:'1.2-2') + '%' : 'Flat ' + (detailAgent.commissionValue | number:'1.2-2') }}</span>\r
      </ng-container>\r
      <span *ngIf="!detailAgent.commissionMode" class="text-muted">Not set</span>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Adjust Limit Popup                                            -->\r
<!-- ============================================================ -->\r
<div *ngIf="showAdjustmentForm" class="overlay overlay-upper" (click)="closeAdjustmentForm()"></div>\r
<div *ngIf="showAdjustmentForm" class="popup popup-sm popup-upper">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">tune</mat-icon> Adjust Limit \u2014 {{ adjustmentAgent?.businessName }}</h3>\r
    <button mat-icon-button (click)="closeAdjustmentForm()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="adjustmentFormError" class="form-error">{{ adjustmentFormError }}</div>\r
\r
  <mat-form-field appearance="outline" class="full-width">\r
    <mat-label>Amount (+ increase / - decrease) *</mat-label>\r
    <input matInput type="number" [(ngModel)]="adjustmentForm.amount" />\r
  </mat-form-field>\r
\r
  <mat-form-field appearance="outline" class="full-width">\r
    <mat-label>Duration</mat-label>\r
    <mat-select [(ngModel)]="adjustmentForm.durationDays">\r
      <mat-option [value]="null">Permanent</mat-option>\r
      <mat-option [value]="2">2 Days</mat-option>\r
      <mat-option [value]="3">3 Days</mat-option>\r
      <mat-option [value]="7">7 Days</mat-option>\r
      <mat-option [value]="30">30 Days</mat-option>\r
      <mat-option [value]="90">90 Days</mat-option>\r
    </mat-select>\r
  </mat-form-field>\r
\r
  <mat-form-field appearance="outline" class="full-width">\r
    <mat-label>Notes (optional)</mat-label>\r
    <textarea matInput rows="2" [(ngModel)]="adjustmentForm.notes"></textarea>\r
  </mat-form-field>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeAdjustmentForm()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="createAdjustment()">\r
      <mat-icon>save</mat-icon> Save\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Adjustment History Popup                                       -->\r
<!-- ============================================================ -->\r
<div *ngIf="showAdjustmentPopup" class="overlay" (click)="closeAdjustmentPopup()"></div>\r
<div *ngIf="showAdjustmentPopup" class="popup popup-lg">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">history</mat-icon> Adjustment History \u2014 {{ adjustmentAgent?.businessName }}</h3>\r
    <button mat-icon-button (click)="closeAdjustmentPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div class="popup-toolbar">\r
    <button mat-raised-button color="primary" (click)="openAdjustmentForm()">\r
      <mat-icon>add</mat-icon> Add Adjustment\r
    </button>\r
  </div>\r
\r
  <table *ngIf="adjustments.length" mat-table [dataSource]="adjustments" class="inner-table">\r
    <ng-container matColumnDef="amount">\r
      <th mat-header-cell *matHeaderCellDef>Amount</th>\r
      <td mat-cell *matCellDef="let adj">\r
        <span [ngClass]="adj.amount >= 0 ? 'text-success' : 'text-error'" class="text-bold">\r
          {{ adj.amount >= 0 ? '+' : '' }}{{ adj.amount | number:'1.2-2' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="from">\r
      <th mat-header-cell *matHeaderCellDef>From</th>\r
      <td mat-cell *matCellDef="let adj">{{ adj.effectiveFrom | date:'yyyy-MM-dd' }}</td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="to">\r
      <th mat-header-cell *matHeaderCellDef>To</th>\r
      <td mat-cell *matCellDef="let adj">{{ adj.effectiveTo ? (adj.effectiveTo | date:'yyyy-MM-dd') : 'Permanent' }}</td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="notes">\r
      <th mat-header-cell *matHeaderCellDef>Notes</th>\r
      <td mat-cell *matCellDef="let adj">{{ adj.notes || '-' }}</td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="active">\r
      <th mat-header-cell *matHeaderCellDef>Active</th>\r
      <td mat-cell *matCellDef="let adj">\r
        <span class="chip" [ngClass]="adj.isActive ? 'chip-success' : 'chip-default'">{{ adj.isActive ? 'Active' : 'Inactive' }}</span>\r
      </td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="adjActions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let adj">\r
        <button *ngIf="adj.isActive" mat-icon-button matTooltip="Deactivate" (click)="deactivateAdjustment(adj)">\r
          <mat-icon color="warn">block</mat-icon>\r
        </button>\r
      </td>\r
    </ng-container>\r
\r
    <tr mat-header-row *matHeaderRowDef="['amount','from','to','notes','active','adjActions']"></tr>\r
    <tr mat-row *matRowDef="let row; columns: ['amount','from','to','notes','active','adjActions'];"></tr>\r
  </table>\r
\r
  <div *ngIf="!adjustments.length" class="empty-state-info">\r
    No adjustments found.\r
  </div>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeAdjustmentPopup()"><mat-icon>close</mat-icon> Close</button>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Commission Setup Popup                                        -->\r
<!-- ============================================================ -->\r
<div *ngIf="showCommissionPopup" class="overlay" (click)="closeCommissionPopup()"></div>\r
<div *ngIf="showCommissionPopup" class="popup popup-sm">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">percent</mat-icon> Agent Commission \u2014 {{ commissionAgent?.businessName }}</h3>\r
    <button mat-icon-button (click)="closeCommissionPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="commissionFormError" class="form-error">{{ commissionFormError }}</div>\r
\r
  <mat-form-field appearance="outline" class="full-width">\r
    <mat-label>Commission Type *</mat-label>\r
    <mat-select [(ngModel)]="commissionForm.commissionType">\r
      <mat-option value="Percentage">Percentage</mat-option>\r
      <mat-option value="Flat">Flat</mat-option>\r
    </mat-select>\r
  </mat-form-field>\r
\r
  <mat-form-field appearance="outline" class="full-width">\r
    <mat-label>{{ commissionForm.commissionType === 'Percentage' ? 'Commission Percentage (%)' : 'Flat Fee Amount' }}</mat-label>\r
    <input matInput type="number" [(ngModel)]="commissionForm.commissionValue" />\r
  </mat-form-field>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeCommissionPopup()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="saveAgentCommission()" [disabled]="savingCommission">\r
      <mat-spinner *ngIf="savingCommission" diameter="18" class="inline-spinner"></mat-spinner>\r
      <mat-icon *ngIf="!savingCommission">save</mat-icon> Save\r
    </button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/admin/accounting/accounting.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header h2 {\n  font-weight: 700;\n  font-size: 20px;\n  margin: 0;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card {\n  border-radius: 10px;\n  padding: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n}\n.search-field {\n  width: 320px;\n  margin-bottom: 8px;\n}\n.search-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table,\n.inner-table {\n  width: 100%;\n}\n.data-table th.mat-mdc-header-cell,\n.inner-table th.mat-mdc-header-cell {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 8px 12px;\n}\n.data-table td.mat-mdc-cell,\n.inner-table td.mat-mdc-cell {\n  font-size: 13px;\n  padding: 8px 12px;\n  color: #374151;\n}\n.inner-table {\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.text-right {\n  text-align: right !important;\n}\n.empty-state {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n}\n.empty-state-info {\n  text-align: center;\n  padding: 24px;\n  color: rgba(0, 0, 0, 0.5);\n  background: #f0f4ff;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.chip.chip-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-tertiary {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.chip.chip-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-success {\n  color: #2e7d32 !important;\n}\n.text-error {\n  color: #c62828 !important;\n}\n.text-warning {\n  color: #e65100 !important;\n}\n.text-tertiary {\n  color: #7b1fa2 !important;\n}\n.text-info {\n  color: #1565c0 !important;\n}\n.text-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 12px;\n}\n.form-error {\n  background: #ffebee;\n  color: #c62828;\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.overlay.overlay-upper {\n  z-index: 10010;\n}\n.popup {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n.popup.popup-sm {\n  width: 500px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-md {\n  width: 600px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-lg {\n  width: 800px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-upper {\n  z-index: 10011;\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.popup-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.header-icon {\n  font-size: 22px;\n  color: #1565c0;\n}\n.popup-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n.popup-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.divider {\n  border: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  margin: 16px 0;\n}\n.full-width {\n  width: 100%;\n}\n.inline-spinner {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .search-field {\n    width: 100%;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n  .popup {\n    padding: 16px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=accounting.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountingComponent, { className: "AccountingComponent", filePath: "src/app/pages/admin/accounting/accounting.component.ts", lineNumber: 60 });
})();
export {
  AccountingComponent
};
//# sourceMappingURL=chunk-W3F2IQA7.js.map
