import {
  SearchableSelectDirective
} from "./chunk-VOSK6FN3.js";
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
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-KZMFZGET.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-6JH6Y4IN.js";
import {
  MatOption
} from "./chunk-4RZM2DGZ.js";
import "./chunk-IOMUWKJD.js";
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
  NumberValueAccessor,
  RequiredValidator
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
  DecimalPipe,
  NgClass,
  NgForOf,
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

// src/app/pages/admin/commissions/commissions.component.ts
var _c0 = () => [10, 20, 50];
function CommissionsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 9);
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Sending Agent");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.agentName || "All");
  }
}
function CommissionsComponent_mat_card_17_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Payout Agent");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.payoutAgentName);
  }
}
function CommissionsComponent_mat_card_17_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Source Country");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.sourceCountry || "-");
  }
}
function CommissionsComponent_mat_card_17_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Dest Country");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.destinationCountry || "-");
  }
}
function CommissionsComponent_mat_card_17_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Currency Pair");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((c_r7.sourceCurrency || "-") + " / " + (c_r7.destinationCurrency || "-"));
  }
}
function CommissionsComponent_mat_card_17_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Amount Range");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(2, 2, c_r8.minAmount, "1.2-2"), " - ", \u0275\u0275pipeBind2(3, 5, c_r8.maxAmount, "1.2-2"), "");
  }
}
function CommissionsComponent_mat_card_17_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Service Charge");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_td_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, c_r9.commissionPercent, "1.2-2"), "%");
  }
}
function CommissionsComponent_mat_card_17_td_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, c_r9.flatFee, "1.2-2"), " (Flat)");
  }
}
function CommissionsComponent_mat_card_17_td_26_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275template(1, CommissionsComponent_mat_card_17_td_26_span_1_Template, 3, 4, "span", 32)(2, CommissionsComponent_mat_card_17_td_26_span_2_Template, 3, 4, "span", 32)(3, CommissionsComponent_mat_card_17_td_26_span_3_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r9.commissionPercent > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r9.commissionPercent <= 0 && (c_r9.flatFee || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r9.commissionPercent <= 0 && (c_r9.flatFee || 0) <= 0);
  }
}
function CommissionsComponent_mat_card_17_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r10.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r10.isActive ? "Active" : "Inactive", " ");
  }
}
function CommissionsComponent_mat_card_17_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 31)(1, "button", 34);
    \u0275\u0275listener("click", function CommissionsComponent_mat_card_17_td_32_Template_button_click_1_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(c_r12));
    });
    \u0275\u0275elementStart(2, "mat-icon", 35);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275listener("click", function CommissionsComponent_mat_card_17_td_32_Template_button_click_4_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCommission(c_r12));
    });
    \u0275\u0275elementStart(5, "mat-icon", 37);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function CommissionsComponent_mat_card_17_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 38);
  }
}
function CommissionsComponent_mat_card_17_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 39);
  }
}
function CommissionsComponent_mat_card_17_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1, " No commissions found. ");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 10)(1, "mat-form-field", 11)(2, "mat-icon", 12);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_mat_card_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CommissionsComponent_mat_card_17_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 14);
    \u0275\u0275elementContainerStart(6, 15);
    \u0275\u0275template(7, CommissionsComponent_mat_card_17_th_7_Template, 2, 0, "th", 16)(8, CommissionsComponent_mat_card_17_td_8_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 18);
    \u0275\u0275template(10, CommissionsComponent_mat_card_17_th_10_Template, 2, 0, "th", 16)(11, CommissionsComponent_mat_card_17_td_11_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 19);
    \u0275\u0275template(13, CommissionsComponent_mat_card_17_th_13_Template, 2, 0, "th", 16)(14, CommissionsComponent_mat_card_17_td_14_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 20);
    \u0275\u0275template(16, CommissionsComponent_mat_card_17_th_16_Template, 2, 0, "th", 16)(17, CommissionsComponent_mat_card_17_td_17_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 21);
    \u0275\u0275template(19, CommissionsComponent_mat_card_17_th_19_Template, 2, 0, "th", 16)(20, CommissionsComponent_mat_card_17_td_20_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 22);
    \u0275\u0275template(22, CommissionsComponent_mat_card_17_th_22_Template, 2, 0, "th", 16)(23, CommissionsComponent_mat_card_17_td_23_Template, 4, 8, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 23);
    \u0275\u0275template(25, CommissionsComponent_mat_card_17_th_25_Template, 2, 0, "th", 16)(26, CommissionsComponent_mat_card_17_td_26_Template, 4, 3, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(27, 24);
    \u0275\u0275template(28, CommissionsComponent_mat_card_17_th_28_Template, 2, 0, "th", 16)(29, CommissionsComponent_mat_card_17_td_29_Template, 3, 2, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(30, 25);
    \u0275\u0275template(31, CommissionsComponent_mat_card_17_th_31_Template, 2, 0, "th", 16)(32, CommissionsComponent_mat_card_17_td_32_Template, 7, 0, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(33, CommissionsComponent_mat_card_17_tr_33_Template, 1, 0, "tr", 26)(34, CommissionsComponent_mat_card_17_tr_34_Template, 1, 0, "tr", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, CommissionsComponent_mat_card_17_div_35_Template, 2, 0, "div", 28);
    \u0275\u0275elementStart(36, "mat-paginator", 29);
    \u0275\u0275listener("page", function CommissionsComponent_mat_card_17_Template_mat_paginator_page_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.commissions);
    \u0275\u0275advance(28);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.commissions.length && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r1.totalCount)("pageIndex", ctx_r1.pageIndex)("pageSize", ctx_r1.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(9, _c0));
  }
}
function CommissionsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function CommissionsComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_div_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function CommissionsComponent_div_19_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r15 = ctx.$implicit;
    \u0275\u0275property("value", a_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r15.businessName);
  }
}
function CommissionsComponent_div_19_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r16 = ctx.$implicit;
    \u0275\u0275property("value", a_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r16.businessName);
  }
}
function CommissionsComponent_div_19_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    \u0275\u0275property("value", c_r17.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r17.name);
  }
}
function CommissionsComponent_div_19_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    \u0275\u0275property("value", c_r18.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r18.name);
  }
}
function CommissionsComponent_div_19_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r19 = ctx.$implicit;
    \u0275\u0275property("value", pm_r19.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r19.name);
  }
}
function CommissionsComponent_div_19_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r20 = ctx.$implicit;
    \u0275\u0275property("value", c_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r20);
  }
}
function CommissionsComponent_div_19_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    \u0275\u0275property("value", c_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r21);
  }
}
function CommissionsComponent_div_19_mat_form_field_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 47)(1, "mat-label");
    \u0275\u0275text(2, "Service Charge Percent *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_mat_form_field_62_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.commissionPercent, $event) || (ctx_r1.form.commissionPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.commissionPercent);
  }
}
function CommissionsComponent_div_19_mat_form_field_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 47)(1, "mat-label");
    \u0275\u0275text(2, "Flat Fee *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_mat_form_field_63_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.flatFee, $event) || (ctx_r1.form.flatFee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.flatFee);
  }
}
function CommissionsComponent_div_19_mat_spinner_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 66);
  }
}
function CommissionsComponent_div_19_mat_icon_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 44);
    \u0275\u0275listener("click", function CommissionsComponent_div_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CommissionsComponent_div_19_div_7_Template, 2, 1, "div", 45);
    \u0275\u0275elementStart(8, "div", 46)(9, "mat-form-field", 47)(10, "mat-label");
    \u0275\u0275text(11, "Sending Agent (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.agentId, $event) || (ctx_r1.form.agentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "mat-option", 49);
    \u0275\u0275text(14, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CommissionsComponent_div_19_mat_option_15_Template, 2, 2, "mat-option", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 47)(17, "mat-label");
    \u0275\u0275text(18, "Payout Agent *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_mat_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.payoutAgentId, $event) || (ctx_r1.form.payoutAgentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, CommissionsComponent_div_19_mat_option_20_Template, 2, 2, "mat-option", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 47)(22, "mat-label");
    \u0275\u0275text(23, "Source Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_mat_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCountry, $event) || (ctx_r1.form.sourceCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(25, CommissionsComponent_div_19_mat_option_25_Template, 2, 2, "mat-option", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 47)(27, "mat-label");
    \u0275\u0275text(28, "Destination Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_mat_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCountry, $event) || (ctx_r1.form.destinationCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(30, CommissionsComponent_div_19_mat_option_30_Template, 2, 2, "mat-option", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 47)(32, "mat-label");
    \u0275\u0275text(33, "Select Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_mat_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.paymentMethod, $event) || (ctx_r1.form.paymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(35, CommissionsComponent_div_19_mat_option_35_Template, 2, 2, "mat-option", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "mat-form-field", 47)(37, "mat-label");
    \u0275\u0275text(38, "Source Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_mat_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCurrency, $event) || (ctx_r1.form.sourceCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(40, CommissionsComponent_div_19_mat_option_40_Template, 2, 2, "mat-option", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "mat-form-field", 47)(42, "mat-label");
    \u0275\u0275text(43, "Destination Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_mat_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCurrency, $event) || (ctx_r1.form.destinationCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(45, CommissionsComponent_div_19_mat_option_45_Template, 2, 2, "mat-option", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "mat-form-field", 47)(47, "mat-label");
    \u0275\u0275text(48, "Min Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.minAmount, $event) || (ctx_r1.form.minAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "mat-form-field", 47)(51, "mat-label");
    \u0275\u0275text(52, "Max Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.maxAmount, $event) || (ctx_r1.form.maxAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "mat-form-field", 47)(55, "mat-label");
    \u0275\u0275text(56, "Service Charge Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "mat-select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_mat_select_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.commissionType, $event) || (ctx_r1.form.commissionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(58, "mat-option", 55);
    \u0275\u0275text(59, "Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "mat-option", 56);
    \u0275\u0275text(61, "Flat Fee");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(62, CommissionsComponent_div_19_mat_form_field_62_Template, 4, 1, "mat-form-field", 57)(63, CommissionsComponent_div_19_mat_form_field_63_Template, 4, 1, "mat-form-field", 57);
    \u0275\u0275elementStart(64, "div", 58)(65, "mat-slide-toggle", 59);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_19_Template_mat_slide_toggle_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.isActive, $event) || (ctx_r1.form.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(66, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 60)(68, "button", 61);
    \u0275\u0275listener("click", function CommissionsComponent_div_19_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementStart(69, "mat-icon");
    \u0275\u0275text(70, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 62);
    \u0275\u0275listener("click", function CommissionsComponent_div_19_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCommission());
    });
    \u0275\u0275template(73, CommissionsComponent_div_19_mat_spinner_73_Template, 1, 0, "mat-spinner", 63)(74, CommissionsComponent_div_19_mat_icon_74_Template, 2, 0, "mat-icon", 32);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Service Charge" : "Create Service Charge");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.agentId);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sendingAgents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.payoutAgentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.payoutAgents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sourceCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destinationCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.paymentMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sourceCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destinationCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.minAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.maxAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.commissionType);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.form.commissionType === "Percentage");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.commissionType === "Flat");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.isActive);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Update" : "Create", " ");
  }
}
function emptyForm() {
  return {
    agentId: null,
    payoutAgentId: null,
    sourceCountry: "",
    destinationCountry: "",
    paymentMethod: "",
    sourceCurrency: "",
    destinationCurrency: "",
    minAmount: 0,
    maxAmount: 0,
    commissionPercent: 0,
    flatFee: 0,
    commissionType: "Percentage",
    isActive: true
  };
}
var CommissionsComponent = class _CommissionsComponent {
  constructor(api, exportService, auth, notify) {
    this.api = api;
    this.exportService = exportService;
    this.auth = auth;
    this.notify = notify;
    this.commissions = [];
    this.displayedColumns = [
      "sendingAgent",
      "payoutAgent",
      "sourceCountry",
      "destCountry",
      "currencyPair",
      "amountRange",
      "commission",
      "status",
      "actions"
    ];
    this.searchString = "";
    this.loading = true;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchSubject = new Subject();
    this.destroy$ = new Subject();
    this.sendingAgents = [];
    this.payoutAgents = [];
    this.countries = [];
    this.currencies = [];
    this.paymentMethods = [];
    this.showPopup = false;
    this.isEditing = false;
    this.editingId = 0;
    this.saving = false;
    this.formError = "";
    this.form = emptyForm();
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadAgents();
    this.loadReferenceData();
    this.searchSubject.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(() => {
      this.pageIndex = 0;
      this.loadCommissions();
    });
    this.loadCommissions();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ---------------------------------------------------------------------------
  // Reference data
  // ---------------------------------------------------------------------------
  loadReferenceData() {
    this.api.getCountries().subscribe((r) => {
      if (r?.success && r.data)
        this.countries = r.data;
    });
    this.api.getCurrencies().subscribe((r) => {
      if (r?.success && r.data)
        this.currencies = r.data;
    });
    this.api.getPaymentMethods().subscribe((r) => {
      if (r?.success && r.data)
        this.paymentMethods = r.data;
    });
  }
  loadAgents() {
    this.api.getAgents().subscribe((r) => {
      if (r?.success && r.data) {
        this.sendingAgents = r.data.filter((a) => a.agentType === "SendingAgent");
        this.payoutAgents = r.data.filter((a) => a.agentType === "PayoutAgent");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Commissions CRUD
  // ---------------------------------------------------------------------------
  loadCommissions() {
    this.loading = true;
    this.api.getCommissionsPaged({
      page: this.pageIndex + 1,
      pageSize: this.pageSize,
      search: this.searchString
    }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.commissions = res.data.items ?? [];
          this.totalCount = res.data.totalCount ?? 0;
        } else {
          this.commissions = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load commissions.");
        }
        this.loading = false;
      },
      error: () => {
        this.commissions = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  onSearchChange() {
    this.searchSubject.next(this.searchString);
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCommissions();
  }
  exportData(format) {
    this.exportService.export("api/admin/commissions/export", { search: this.searchString }, format);
  }
  // ---------------------------------------------------------------------------
  // Create / Edit popup
  // ---------------------------------------------------------------------------
  openCreate() {
    this.form = emptyForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = "";
    this.showPopup = true;
  }
  openEdit(c) {
    const isFlat = (c.flatFee ?? 0) > 0 && c.commissionPercent <= 0;
    this.form = {
      agentId: c.agentId ?? null,
      payoutAgentId: c.payoutAgentId,
      sourceCountry: c.sourceCountry || "",
      destinationCountry: c.destinationCountry || "",
      paymentMethod: c.paymentMethod || "",
      sourceCurrency: c.sourceCurrency || "",
      destinationCurrency: c.destinationCurrency || "",
      minAmount: c.minAmount,
      maxAmount: c.maxAmount,
      commissionPercent: c.commissionPercent,
      flatFee: c.flatFee ?? 0,
      commissionType: isFlat ? "Flat" : "Percentage",
      isActive: c.isActive
    };
    this.isEditing = true;
    this.editingId = c.id;
    this.formError = "";
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }
  saveCommission() {
    this.formError = "";
    if (!this.form.payoutAgentId) {
      this.formError = "Payout Agent is required.";
      return;
    }
    if (!this.form.commissionType) {
      this.formError = "Commission Type is required.";
      return;
    }
    if (this.form.commissionType === "Percentage") {
      if (!this.form.commissionPercent || this.form.commissionPercent <= 0) {
        this.formError = "Commission Percent must be greater than 0.";
        return;
      }
      this.form.flatFee = 0;
    } else if (this.form.commissionType === "Flat") {
      if (!this.form.flatFee || this.form.flatFee <= 0) {
        this.formError = "Flat Fee must be greater than 0.";
        return;
      }
      this.form.commissionPercent = 0;
    }
    this.saving = true;
    const dto = {
      agentId: this.form.agentId,
      payoutAgentId: this.form.payoutAgentId,
      sourceCountry: this.form.sourceCountry || null,
      destinationCountry: this.form.destinationCountry || null,
      paymentMethod: this.form.paymentMethod || null,
      sourceCurrency: this.form.sourceCurrency || null,
      destinationCurrency: this.form.destinationCurrency || null,
      minAmount: this.form.minAmount,
      maxAmount: this.form.maxAmount,
      commissionPercent: this.form.commissionPercent,
      flatFee: this.form.flatFee,
      isActive: this.form.isActive
    };
    const obs = this.isEditing ? this.api.updateCommission(this.editingId, dto) : this.api.createCommission(dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.isEditing ? "Commission updated." : "Commission created.");
          this.showPopup = false;
          this.loadCommissions();
        } else {
          this.formError = res?.message || "Failed.";
        }
        this.saving = false;
      },
      error: () => {
        this.formError = "Server error.";
        this.saving = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Delete
  // ---------------------------------------------------------------------------
  deleteCommission(c) {
    this.api.deleteCommission(c.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Commission deleted.");
        this.loadCommissions();
      } else {
        this.notify.error(r?.message || "Failed to delete commission.");
      }
    });
  }
  static {
    this.\u0275fac = function CommissionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommissionsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommissionsComponent, selectors: [["app-commissions"]], decls: 20, vars: 4, consts: [[1, "page-header"], [1, "header-actions"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search commissions...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "sendingAgent"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "payoutAgent"], ["matColumnDef", "sourceCountry"], ["matColumnDef", "destCountry"], ["matColumnDef", "currencyPair"], ["matColumnDef", "amountRange"], ["matColumnDef", "commission"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["showFirstLastButtons", "", 3, "page", "length", "pageIndex", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-lg"], [1, "popup-header"], ["mat-icon-button", "", 3, "click"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-grid"], ["appearance", "outline"], ["searchable", "", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["searchable", "", "required", "", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], ["required", "", 3, "ngModelChange", "ngModel"], ["value", "Percentage"], ["value", "Flat"], ["appearance", "outline", 4, "ngIf"], [1, "toggle-container"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], ["matInput", "", "type", "number", "required", "", 3, "ngModelChange", "ngModel"], ["diameter", "18", 1, "inline-spinner"]], template: function CommissionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Service Charge Configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
        \u0275\u0275listener("click", function CommissionsComponent_Template_button_click_4_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 2);
        \u0275\u0275listener("click", function CommissionsComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 3);
        \u0275\u0275listener("click", function CommissionsComponent_Template_button_click_12_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(13, "mat-icon");
        \u0275\u0275text(14, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Add Service Charge ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, CommissionsComponent_div_16_Template, 2, 0, "div", 4)(17, CommissionsComponent_mat_card_17_Template, 37, 10, "mat-card", 5)(18, CommissionsComponent_div_18_Template, 1, 0, "div", 6)(19, CommissionsComponent_div_19_Template, 76, 27, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatSlideToggleModule, MatSlideToggle, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner, MatPaginatorModule, MatPaginator, SearchableSelectDirective], styles: ["\n\n.data-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=commissions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommissionsComponent, [{
    type: Component,
    args: [{ selector: "app-commissions", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatPaginatorModule,
      DecimalPipe,
      SearchableSelectDirective
    ], template: `<!-- Page Header -->
<div class="page-header">
  <h2>Service Charge Configuration</h2>
  <div class="header-actions">
    <button mat-raised-button (click)="exportData('excel')">
      <mat-icon>download</mat-icon> Excel
    </button>
    <button mat-raised-button (click)="exportData('csv')">
      <mat-icon>download</mat-icon> CSV
    </button>
    <button mat-raised-button color="primary" (click)="openCreate()">
      <mat-icon>add</mat-icon> Add Service Charge
    </button>
  </div>
</div>

<!-- Loading -->
<div *ngIf="loading" class="loading-container">
  <mat-spinner diameter="40"></mat-spinner>
</div>

<!-- Search + Table -->
<mat-card *ngIf="!loading" class="table-card">
  <mat-form-field appearance="outline" class="search-field">
    <mat-icon matPrefix>search</mat-icon>
    <input matInput placeholder="Search commissions..." [(ngModel)]="searchString" (ngModelChange)="onSearchChange()" />
  </mat-form-field>

  <table mat-table [dataSource]="commissions" class="data-table">
    <!-- Sending Agent -->
    <ng-container matColumnDef="sendingAgent">
      <th mat-header-cell *matHeaderCellDef>Sending Agent</th>
      <td mat-cell *matCellDef="let c">{{ c.agentName || 'All' }}</td>
    </ng-container>

    <!-- Payout Agent -->
    <ng-container matColumnDef="payoutAgent">
      <th mat-header-cell *matHeaderCellDef>Payout Agent</th>
      <td mat-cell *matCellDef="let c">{{ c.payoutAgentName }}</td>
    </ng-container>

    <!-- Source Country -->
    <ng-container matColumnDef="sourceCountry">
      <th mat-header-cell *matHeaderCellDef>Source Country</th>
      <td mat-cell *matCellDef="let c">{{ c.sourceCountry || '-' }}</td>
    </ng-container>

    <!-- Dest Country -->
    <ng-container matColumnDef="destCountry">
      <th mat-header-cell *matHeaderCellDef>Dest Country</th>
      <td mat-cell *matCellDef="let c">{{ c.destinationCountry || '-' }}</td>
    </ng-container>

    <!-- Currency Pair -->
    <ng-container matColumnDef="currencyPair">
      <th mat-header-cell *matHeaderCellDef>Currency Pair</th>
      <td mat-cell *matCellDef="let c">{{ (c.sourceCurrency || '-') + ' / ' + (c.destinationCurrency || '-') }}</td>
    </ng-container>

    <!-- Amount Range -->
    <ng-container matColumnDef="amountRange">
      <th mat-header-cell *matHeaderCellDef>Amount Range</th>
      <td mat-cell *matCellDef="let c">{{ c.minAmount | number:'1.2-2' }} - {{ c.maxAmount | number:'1.2-2' }}</td>
    </ng-container>

    <!-- Commission (single column) -->
    <ng-container matColumnDef="commission">
      <th mat-header-cell *matHeaderCellDef>Service Charge</th>
      <td mat-cell *matCellDef="let c">
        <span *ngIf="c.commissionPercent > 0">{{ c.commissionPercent | number:'1.2-2' }}%</span>
        <span *ngIf="c.commissionPercent <= 0 && (c.flatFee || 0) > 0">{{ c.flatFee | number:'1.2-2' }} (Flat)</span>
        <span *ngIf="c.commissionPercent <= 0 && (c.flatFee || 0) <= 0">-</span>
      </td>
    </ng-container>

    <!-- Status -->
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef>Status</th>
      <td mat-cell *matCellDef="let c">
        <span class="chip" [ngClass]="c.isActive ? 'chip-success' : 'chip-default'">
          {{ c.isActive ? 'Active' : 'Inactive' }}
        </span>
      </td>
    </ng-container>

    <!-- Actions -->
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let c">
        <button mat-icon-button matTooltip="Edit" (click)="openEdit(c)">
          <mat-icon color="primary">edit</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Delete" (click)="deleteCommission(c)">
          <mat-icon color="warn">delete</mat-icon>
        </button>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  <div *ngIf="!commissions.length && !loading" class="empty-state">
    No commissions found.
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

<!-- ============================================================ -->
<!-- Create / Edit Service Charge Popup                                -->
<!-- ============================================================ -->
<div *ngIf="showPopup" class="overlay" (click)="closePopup()"></div>
<div *ngIf="showPopup" class="popup popup-lg">
  <div class="popup-header">
    <h3>{{ isEditing ? 'Edit Service Charge' : 'Create Service Charge' }}</h3>
    <button mat-icon-button (click)="closePopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="formError" class="alert-banner alert-error inline-alert">{{ formError }}</div>

  <div class="form-grid">
    <!-- Sending Agent (optional) -->
    <mat-form-field appearance="outline">
      <mat-label>Sending Agent (optional)</mat-label>
      <mat-select searchable [(ngModel)]="form.agentId">
        <mat-option [value]="null">All</mat-option>
        <mat-option *ngFor="let a of sendingAgents" [value]="a.id">{{ a.businessName }}</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Payout Agent (required) -->
    <mat-form-field appearance="outline">
      <mat-label>Payout Agent *</mat-label>
      <mat-select searchable [(ngModel)]="form.payoutAgentId" required>
        <mat-option *ngFor="let a of payoutAgents" [value]="a.id">{{ a.businessName }}</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Source Country -->
    <mat-form-field appearance="outline">
      <mat-label>Source Country</mat-label>
      <mat-select [(ngModel)]="form.sourceCountry">
        <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Destination Country -->
    <mat-form-field appearance="outline">
      <mat-label>Destination Country</mat-label>
      <mat-select [(ngModel)]="form.destinationCountry">
        <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Select Payment Method -->
    <mat-form-field appearance="outline">
      <mat-label>Select Payment Method</mat-label>
      <mat-select [(ngModel)]="form.paymentMethod">
        <mat-option *ngFor="let pm of paymentMethods" [value]="pm.name">{{ pm.name }}</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Source Currency -->
    <mat-form-field appearance="outline">
      <mat-label>Source Currency</mat-label>
      <mat-select [(ngModel)]="form.sourceCurrency">
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Destination Currency -->
    <mat-form-field appearance="outline">
      <mat-label>Destination Currency</mat-label>
      <mat-select [(ngModel)]="form.destinationCurrency">
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Min Amount -->
    <mat-form-field appearance="outline">
      <mat-label>Min Amount</mat-label>
      <input matInput type="number" [(ngModel)]="form.minAmount" />
    </mat-form-field>

    <!-- Max Amount -->
    <mat-form-field appearance="outline">
      <mat-label>Max Amount</mat-label>
      <input matInput type="number" [(ngModel)]="form.maxAmount" />
    </mat-form-field>

    <!-- Service Charge Type -->
    <mat-form-field appearance="outline">
      <mat-label>Service Charge Type *</mat-label>
      <mat-select [(ngModel)]="form.commissionType" required>
        <mat-option value="Percentage">Percentage</mat-option>
        <mat-option value="Flat">Flat Fee</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Service Charge Percent (only when type is Percentage) -->
    <mat-form-field appearance="outline" *ngIf="form.commissionType === 'Percentage'">
      <mat-label>Service Charge Percent *</mat-label>
      <input matInput type="number" [(ngModel)]="form.commissionPercent" required />
    </mat-form-field>

    <!-- Flat Fee (only when type is Flat) -->
    <mat-form-field appearance="outline" *ngIf="form.commissionType === 'Flat'">
      <mat-label>Flat Fee *</mat-label>
      <input matInput type="number" [(ngModel)]="form.flatFee" required />
    </mat-form-field>

    <!-- IsActive -->
    <div class="toggle-container">
      <mat-slide-toggle [(ngModel)]="form.isActive" color="primary">Active</mat-slide-toggle>
    </div>
  </div>

  <div class="popup-actions">
    <button mat-button (click)="closePopup()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="saveCommission()" [disabled]="saving">
      <mat-spinner *ngIf="saving" diameter="18" class="inline-spinner"></mat-spinner>
      <mat-icon *ngIf="!saving">save</mat-icon> {{ isEditing ? 'Update' : 'Create' }}
    </button>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/commissions/commissions.component.scss */\n.data-table th.mat-mdc-header-cell {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=commissions.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: ExportService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommissionsComponent, { className: "CommissionsComponent", filePath: "src/app/pages/admin/commissions/commissions.component.ts", lineNumber: 83 });
})();
export {
  CommissionsComponent
};
//# sourceMappingURL=chunk-QPJEHA7C.js.map
