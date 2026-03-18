import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-V2JZZKIF.js";
import {
  SearchableSelectDirective
} from "./chunk-SPE5Y2T4.js";
import "./chunk-KZEP64CQ.js";
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
  NumberValueAccessor,
  RequiredValidator
} from "./chunk-5RGUSOA3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-BPDBYDBO.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
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

// src/app/pages/admin/commissions/commissions.component.ts
function CommissionsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Sending Agent");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.agentName || "All");
  }
}
function CommissionsComponent_mat_card_8_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Payout Agent");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.payoutAgentName);
  }
}
function CommissionsComponent_mat_card_8_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Source Country");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.sourceCountry || "-");
  }
}
function CommissionsComponent_mat_card_8_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Dest Country");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.destinationCountry || "-");
  }
}
function CommissionsComponent_mat_card_8_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Currency Pair");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((c_r7.sourceCurrency || "-") + " / " + (c_r7.destinationCurrency || "-"));
  }
}
function CommissionsComponent_mat_card_8_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Amount Range");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
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
function CommissionsComponent_mat_card_8_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Commission");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_td_26_span_1_Template(rf, ctx) {
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
function CommissionsComponent_mat_card_8_td_26_span_2_Template(rf, ctx) {
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
function CommissionsComponent_mat_card_8_td_26_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275template(1, CommissionsComponent_mat_card_8_td_26_span_1_Template, 3, 4, "span", 29)(2, CommissionsComponent_mat_card_8_td_26_span_2_Template, 3, 4, "span", 29)(3, CommissionsComponent_mat_card_8_td_26_span_3_Template, 2, 0, "span", 29);
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
function CommissionsComponent_mat_card_8_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 30);
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
function CommissionsComponent_mat_card_8_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 28)(1, "button", 31);
    \u0275\u0275listener("click", function CommissionsComponent_mat_card_8_td_32_Template_button_click_1_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(c_r12));
    });
    \u0275\u0275elementStart(2, "mat-icon", 32);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275listener("click", function CommissionsComponent_mat_card_8_td_32_Template_button_click_4_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCommission(c_r12));
    });
    \u0275\u0275elementStart(5, "mat-icon", 34);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function CommissionsComponent_mat_card_8_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function CommissionsComponent_mat_card_8_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function CommissionsComponent_mat_card_8_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " No commissions found. ");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_mat_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 8)(1, "mat-form-field", 9)(2, "mat-icon", 10);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_mat_card_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CommissionsComponent_mat_card_8_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 12);
    \u0275\u0275elementContainerStart(6, 13);
    \u0275\u0275template(7, CommissionsComponent_mat_card_8_th_7_Template, 2, 0, "th", 14)(8, CommissionsComponent_mat_card_8_td_8_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 16);
    \u0275\u0275template(10, CommissionsComponent_mat_card_8_th_10_Template, 2, 0, "th", 14)(11, CommissionsComponent_mat_card_8_td_11_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 17);
    \u0275\u0275template(13, CommissionsComponent_mat_card_8_th_13_Template, 2, 0, "th", 14)(14, CommissionsComponent_mat_card_8_td_14_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 18);
    \u0275\u0275template(16, CommissionsComponent_mat_card_8_th_16_Template, 2, 0, "th", 14)(17, CommissionsComponent_mat_card_8_td_17_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 19);
    \u0275\u0275template(19, CommissionsComponent_mat_card_8_th_19_Template, 2, 0, "th", 14)(20, CommissionsComponent_mat_card_8_td_20_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 20);
    \u0275\u0275template(22, CommissionsComponent_mat_card_8_th_22_Template, 2, 0, "th", 14)(23, CommissionsComponent_mat_card_8_td_23_Template, 4, 8, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 21);
    \u0275\u0275template(25, CommissionsComponent_mat_card_8_th_25_Template, 2, 0, "th", 14)(26, CommissionsComponent_mat_card_8_td_26_Template, 4, 3, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(27, 22);
    \u0275\u0275template(28, CommissionsComponent_mat_card_8_th_28_Template, 2, 0, "th", 14)(29, CommissionsComponent_mat_card_8_td_29_Template, 3, 2, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(30, 23);
    \u0275\u0275template(31, CommissionsComponent_mat_card_8_th_31_Template, 2, 0, "th", 14)(32, CommissionsComponent_mat_card_8_td_32_Template, 7, 0, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(33, CommissionsComponent_mat_card_8_tr_33_Template, 1, 0, "tr", 24)(34, CommissionsComponent_mat_card_8_tr_34_Template, 1, 0, "tr", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, CommissionsComponent_mat_card_8_div_35_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.filteredCommissions);
    \u0275\u0275advance(28);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredCommissions.length && !ctx_r1.loading);
  }
}
function CommissionsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function CommissionsComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_div_10_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function CommissionsComponent_div_10_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
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
function CommissionsComponent_div_10_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
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
function CommissionsComponent_div_10_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
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
function CommissionsComponent_div_10_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
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
function CommissionsComponent_div_10_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
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
function CommissionsComponent_div_10_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
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
function CommissionsComponent_div_10_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
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
function CommissionsComponent_div_10_mat_form_field_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 44)(1, "mat-label");
    \u0275\u0275text(2, "Commission Percent *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_mat_form_field_62_Template_input_ngModelChange_3_listener($event) {
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
function CommissionsComponent_div_10_mat_form_field_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 44)(1, "mat-label");
    \u0275\u0275text(2, "Flat Fee *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_mat_form_field_63_Template_input_ngModelChange_3_listener($event) {
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
function CommissionsComponent_div_10_mat_spinner_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 63);
  }
}
function CommissionsComponent_div_10_mat_icon_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function CommissionsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function CommissionsComponent_div_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CommissionsComponent_div_10_div_7_Template, 2, 1, "div", 42);
    \u0275\u0275elementStart(8, "div", 43)(9, "mat-form-field", 44)(10, "mat-label");
    \u0275\u0275text(11, "Sending Agent (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.agentId, $event) || (ctx_r1.form.agentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "mat-option", 46);
    \u0275\u0275text(14, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CommissionsComponent_div_10_mat_option_15_Template, 2, 2, "mat-option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 44)(17, "mat-label");
    \u0275\u0275text(18, "Payout Agent *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_Template_mat_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.payoutAgentId, $event) || (ctx_r1.form.payoutAgentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, CommissionsComponent_div_10_mat_option_20_Template, 2, 2, "mat-option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 44)(22, "mat-label");
    \u0275\u0275text(23, "Source Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_Template_mat_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCountry, $event) || (ctx_r1.form.sourceCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(25, CommissionsComponent_div_10_mat_option_25_Template, 2, 2, "mat-option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 44)(27, "mat-label");
    \u0275\u0275text(28, "Destination Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_Template_mat_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCountry, $event) || (ctx_r1.form.destinationCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(30, CommissionsComponent_div_10_mat_option_30_Template, 2, 2, "mat-option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 44)(32, "mat-label");
    \u0275\u0275text(33, "Select Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_Template_mat_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.paymentMethod, $event) || (ctx_r1.form.paymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(35, CommissionsComponent_div_10_mat_option_35_Template, 2, 2, "mat-option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "mat-form-field", 44)(37, "mat-label");
    \u0275\u0275text(38, "Source Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_Template_mat_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCurrency, $event) || (ctx_r1.form.sourceCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(40, CommissionsComponent_div_10_mat_option_40_Template, 2, 2, "mat-option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "mat-form-field", 44)(42, "mat-label");
    \u0275\u0275text(43, "Destination Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_Template_mat_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCurrency, $event) || (ctx_r1.form.destinationCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(45, CommissionsComponent_div_10_mat_option_45_Template, 2, 2, "mat-option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "mat-form-field", 44)(47, "mat-label");
    \u0275\u0275text(48, "Min Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.minAmount, $event) || (ctx_r1.form.minAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "mat-form-field", 44)(51, "mat-label");
    \u0275\u0275text(52, "Max Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.maxAmount, $event) || (ctx_r1.form.maxAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "mat-form-field", 44)(55, "mat-label");
    \u0275\u0275text(56, "Commission Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "mat-select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_Template_mat_select_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.commissionType, $event) || (ctx_r1.form.commissionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(58, "mat-option", 52);
    \u0275\u0275text(59, "Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "mat-option", 53);
    \u0275\u0275text(61, "Flat Fee");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(62, CommissionsComponent_div_10_mat_form_field_62_Template, 4, 1, "mat-form-field", 54)(63, CommissionsComponent_div_10_mat_form_field_63_Template, 4, 1, "mat-form-field", 54);
    \u0275\u0275elementStart(64, "div", 55)(65, "mat-slide-toggle", 56);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionsComponent_div_10_Template_mat_slide_toggle_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.isActive, $event) || (ctx_r1.form.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(66, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 57)(68, "button", 58);
    \u0275\u0275listener("click", function CommissionsComponent_div_10_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementStart(69, "mat-icon");
    \u0275\u0275text(70, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 59);
    \u0275\u0275listener("click", function CommissionsComponent_div_10_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCommission());
    });
    \u0275\u0275template(73, CommissionsComponent_div_10_mat_spinner_73_Template, 1, 0, "mat-spinner", 60)(74, CommissionsComponent_div_10_mat_icon_74_Template, 2, 0, "mat-icon", 29);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Commission" : "Create Commission");
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
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.commissions = [];
    this.filteredCommissions = [];
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
    this.loadCommissions();
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
    this.api.getCommissions().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.commissions = res.data;
          this.applyFilter();
        } else {
          this.commissions = [];
          this.filteredCommissions = [];
          this.notify.error(res?.message || "Failed to load commissions.");
        }
        this.loading = false;
      },
      error: () => {
        this.commissions = [];
        this.filteredCommissions = [];
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const s = this.searchString.toLowerCase();
    this.filteredCommissions = !s ? [...this.commissions] : this.commissions.filter((c) => (c.agentName || "").toLowerCase().includes(s) || (c.payoutAgentName || "").toLowerCase().includes(s) || (c.sourceCountry || "").toLowerCase().includes(s) || (c.destinationCountry || "").toLowerCase().includes(s) || (c.sourceCurrency || "").toLowerCase().includes(s) || (c.destinationCurrency || "").toLowerCase().includes(s));
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
      return new (__ngFactoryType__ || _CommissionsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommissionsComponent, selectors: [["app-commissions"]], decls: 11, vars: 4, consts: [[1, "page-header"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search commissions...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "sendingAgent"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "payoutAgent"], ["matColumnDef", "sourceCountry"], ["matColumnDef", "destCountry"], ["matColumnDef", "currencyPair"], ["matColumnDef", "amountRange"], ["matColumnDef", "commission"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-lg"], [1, "popup-header"], ["mat-icon-button", "", 3, "click"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-grid"], ["appearance", "outline"], ["searchable", "", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["searchable", "", "required", "", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], ["required", "", 3, "ngModelChange", "ngModel"], ["value", "Percentage"], ["value", "Flat"], ["appearance", "outline", 4, "ngIf"], [1, "toggle-container"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], ["matInput", "", "type", "number", "required", "", 3, "ngModelChange", "ngModel"], ["diameter", "18", 1, "inline-spinner"]], template: function CommissionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Commission Configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 1);
        \u0275\u0275listener("click", function CommissionsComponent_Template_button_click_3_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Add Commission ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, CommissionsComponent_div_7_Template, 2, 0, "div", 2)(8, CommissionsComponent_mat_card_8_Template, 36, 5, "mat-card", 3)(9, CommissionsComponent_div_9_Template, 1, 0, "div", 4)(10, CommissionsComponent_div_10_Template, 76, 27, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatSlideToggleModule, MatSlideToggle, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner, SearchableSelectDirective], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n}\n.alert-banner.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.inline-alert[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 14px;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 300px;\n  margin-bottom: 6px;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.data-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 20px;\n}\n.chip.chip-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-tertiary[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.chip.chip-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n}\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 10px;\n  padding: 22px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-lg[_ngcontent-%COMP%] {\n  width: 700px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n}\n.popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-grid[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.toggle-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 6px 0;\n}\n.inline-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .popup[_ngcontent-%COMP%] {\n    padding: 14px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=commissions.component.css.map */"] });
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
      DecimalPipe,
      SearchableSelectDirective
    ], template: `<!-- Page Header -->\r
<div class="page-header">\r
  <h2>Commission Configuration</h2>\r
  <button mat-raised-button color="primary" (click)="openCreate()">\r
    <mat-icon>add</mat-icon> Add Commission\r
  </button>\r
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
    <input matInput placeholder="Search commissions..." [(ngModel)]="searchString" (ngModelChange)="applyFilter()" />\r
  </mat-form-field>\r
\r
  <table mat-table [dataSource]="filteredCommissions" class="data-table">\r
    <!-- Sending Agent -->\r
    <ng-container matColumnDef="sendingAgent">\r
      <th mat-header-cell *matHeaderCellDef>Sending Agent</th>\r
      <td mat-cell *matCellDef="let c">{{ c.agentName || 'All' }}</td>\r
    </ng-container>\r
\r
    <!-- Payout Agent -->\r
    <ng-container matColumnDef="payoutAgent">\r
      <th mat-header-cell *matHeaderCellDef>Payout Agent</th>\r
      <td mat-cell *matCellDef="let c">{{ c.payoutAgentName }}</td>\r
    </ng-container>\r
\r
    <!-- Source Country -->\r
    <ng-container matColumnDef="sourceCountry">\r
      <th mat-header-cell *matHeaderCellDef>Source Country</th>\r
      <td mat-cell *matCellDef="let c">{{ c.sourceCountry || '-' }}</td>\r
    </ng-container>\r
\r
    <!-- Dest Country -->\r
    <ng-container matColumnDef="destCountry">\r
      <th mat-header-cell *matHeaderCellDef>Dest Country</th>\r
      <td mat-cell *matCellDef="let c">{{ c.destinationCountry || '-' }}</td>\r
    </ng-container>\r
\r
    <!-- Currency Pair -->\r
    <ng-container matColumnDef="currencyPair">\r
      <th mat-header-cell *matHeaderCellDef>Currency Pair</th>\r
      <td mat-cell *matCellDef="let c">{{ (c.sourceCurrency || '-') + ' / ' + (c.destinationCurrency || '-') }}</td>\r
    </ng-container>\r
\r
    <!-- Amount Range -->\r
    <ng-container matColumnDef="amountRange">\r
      <th mat-header-cell *matHeaderCellDef>Amount Range</th>\r
      <td mat-cell *matCellDef="let c">{{ c.minAmount | number:'1.2-2' }} - {{ c.maxAmount | number:'1.2-2' }}</td>\r
    </ng-container>\r
\r
    <!-- Commission (single column) -->\r
    <ng-container matColumnDef="commission">\r
      <th mat-header-cell *matHeaderCellDef>Commission</th>\r
      <td mat-cell *matCellDef="let c">\r
        <span *ngIf="c.commissionPercent > 0">{{ c.commissionPercent | number:'1.2-2' }}%</span>\r
        <span *ngIf="c.commissionPercent <= 0 && (c.flatFee || 0) > 0">{{ c.flatFee | number:'1.2-2' }} (Flat)</span>\r
        <span *ngIf="c.commissionPercent <= 0 && (c.flatFee || 0) <= 0">-</span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Status -->\r
    <ng-container matColumnDef="status">\r
      <th mat-header-cell *matHeaderCellDef>Status</th>\r
      <td mat-cell *matCellDef="let c">\r
        <span class="chip" [ngClass]="c.isActive ? 'chip-success' : 'chip-default'">\r
          {{ c.isActive ? 'Active' : 'Inactive' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Actions -->\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let c">\r
        <button mat-icon-button matTooltip="Edit" (click)="openEdit(c)">\r
          <mat-icon color="primary">edit</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deleteCommission(c)">\r
          <mat-icon color="warn">delete</mat-icon>\r
        </button>\r
      </td>\r
    </ng-container>\r
\r
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
  </table>\r
\r
  <div *ngIf="!filteredCommissions.length && !loading" class="empty-state">\r
    No commissions found.\r
  </div>\r
</mat-card>\r
\r
<!-- ============================================================ -->\r
<!-- Create / Edit Commission Popup                                -->\r
<!-- ============================================================ -->\r
<div *ngIf="showPopup" class="overlay" (click)="closePopup()"></div>\r
<div *ngIf="showPopup" class="popup popup-lg">\r
  <div class="popup-header">\r
    <h3>{{ isEditing ? 'Edit Commission' : 'Create Commission' }}</h3>\r
    <button mat-icon-button (click)="closePopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="formError" class="alert-banner alert-error inline-alert">{{ formError }}</div>\r
\r
  <div class="form-grid">\r
    <!-- Sending Agent (optional) -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Sending Agent (optional)</mat-label>\r
      <mat-select searchable [(ngModel)]="form.agentId">\r
        <mat-option [value]="null">All</mat-option>\r
        <mat-option *ngFor="let a of sendingAgents" [value]="a.id">{{ a.businessName }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Payout Agent (required) -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Payout Agent *</mat-label>\r
      <mat-select searchable [(ngModel)]="form.payoutAgentId" required>\r
        <mat-option *ngFor="let a of payoutAgents" [value]="a.id">{{ a.businessName }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Source Country -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Source Country</mat-label>\r
      <mat-select [(ngModel)]="form.sourceCountry">\r
        <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Destination Country -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Destination Country</mat-label>\r
      <mat-select [(ngModel)]="form.destinationCountry">\r
        <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Select Payment Method -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Select Payment Method</mat-label>\r
      <mat-select [(ngModel)]="form.paymentMethod">\r
        <mat-option *ngFor="let pm of paymentMethods" [value]="pm.name">{{ pm.name }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Source Currency -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Source Currency</mat-label>\r
      <mat-select [(ngModel)]="form.sourceCurrency">\r
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Destination Currency -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Destination Currency</mat-label>\r
      <mat-select [(ngModel)]="form.destinationCurrency">\r
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Min Amount -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Min Amount</mat-label>\r
      <input matInput type="number" [(ngModel)]="form.minAmount" />\r
    </mat-form-field>\r
\r
    <!-- Max Amount -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Max Amount</mat-label>\r
      <input matInput type="number" [(ngModel)]="form.maxAmount" />\r
    </mat-form-field>\r
\r
    <!-- Commission Type -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Commission Type *</mat-label>\r
      <mat-select [(ngModel)]="form.commissionType" required>\r
        <mat-option value="Percentage">Percentage</mat-option>\r
        <mat-option value="Flat">Flat Fee</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Commission Percent (only when type is Percentage) -->\r
    <mat-form-field appearance="outline" *ngIf="form.commissionType === 'Percentage'">\r
      <mat-label>Commission Percent *</mat-label>\r
      <input matInput type="number" [(ngModel)]="form.commissionPercent" required />\r
    </mat-form-field>\r
\r
    <!-- Flat Fee (only when type is Flat) -->\r
    <mat-form-field appearance="outline" *ngIf="form.commissionType === 'Flat'">\r
      <mat-label>Flat Fee *</mat-label>\r
      <input matInput type="number" [(ngModel)]="form.flatFee" required />\r
    </mat-form-field>\r
\r
    <!-- IsActive -->\r
    <div class="toggle-container">\r
      <mat-slide-toggle [(ngModel)]="form.isActive" color="primary">Active</mat-slide-toggle>\r
    </div>\r
  </div>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closePopup()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="saveCommission()" [disabled]="saving">\r
      <mat-spinner *ngIf="saving" diameter="18" class="inline-spinner"></mat-spinner>\r
      <mat-icon *ngIf="!saving">save</mat-icon> {{ isEditing ? 'Update' : 'Create' }}\r
    </button>\r
  </div>\r
</div>`, styles: ["/* src/app/pages/admin/commissions/commissions.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header h2 {\n  font-weight: 700;\n  margin: 0;\n}\n.alert-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n}\n.alert-banner.alert-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.inline-alert {\n  margin-bottom: 10px;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card {\n  border-radius: 10px;\n  padding: 14px;\n}\n.search-field {\n  width: 300px;\n  margin-bottom: 6px;\n}\n.search-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table {\n  width: 100%;\n}\n.data-table th.mat-mdc-header-cell {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n  white-space: nowrap;\n}\n.data-table td.mat-mdc-cell {\n  font-size: 13px;\n}\n.empty-state {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 20px;\n}\n.chip.chip-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-tertiary {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.chip.chip-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n}\n.popup {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 10px;\n  padding: 22px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-lg {\n  width: 700px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.popup-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n}\n.popup-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.form-grid .full-width {\n  grid-column: 1/-1;\n}\n.form-grid ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n@media (max-width: 600px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.toggle-container {\n  display: flex;\n  align-items: center;\n  padding: 6px 0;\n}\n.inline-spinner {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .search-field {\n    width: 100%;\n  }\n  .popup {\n    padding: 14px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=commissions.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommissionsComponent, { className: "CommissionsComponent", filePath: "src/app/pages/admin/commissions/commissions.component.ts", lineNumber: 78 });
})();
export {
  CommissionsComponent
};
//# sourceMappingURL=chunk-KMLF3U4W.js.map
