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
  DatePipe,
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
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7WRAX6BO.js";

// src/app/pages/admin/compliance-setup/compliance-setup.component.ts
var _c0 = (a0, a1) => ({ "chip-error": a0, "chip-tertiary": a1 });
function ComplianceSetupComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 8);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearMessage());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "alert-" + ctx_r1.messageSeverity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.message);
  }
}
function ComplianceSetupComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_9_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Rule Name");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_9_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.ruleName);
  }
}
function ComplianceSetupComponent_mat_card_9_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_9_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.ruleType);
  }
}
function ComplianceSetupComponent_mat_card_9_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Threshold / Params");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_9_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getThresholdDisplay(r_r6));
  }
}
function ComplianceSetupComponent_mat_card_9_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Countries");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_9_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCountriesDisplay(r_r7));
  }
}
function ComplianceSetupComponent_mat_card_9_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_9_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29)(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c0, r_r8.action === "Block", r_r8.action === "Review"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r8.action);
  }
}
function ComplianceSetupComponent_mat_card_9_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_9_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29)(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", r_r9.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r9.isActive ? "Active" : "Inactive", " ");
  }
}
function ComplianceSetupComponent_mat_card_9_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_9_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 29)(1, "button", 32);
    \u0275\u0275listener("click", function ComplianceSetupComponent_mat_card_9_td_26_Template_button_click_1_listener() {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(r_r11));
    });
    \u0275\u0275elementStart(2, "mat-icon", 33);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function ComplianceSetupComponent_mat_card_9_td_26_Template_button_click_4_listener() {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRule(r_r11));
    });
    \u0275\u0275elementStart(5, "mat-icon", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 36);
    \u0275\u0275listener("click", function ComplianceSetupComponent_mat_card_9_td_26_Template_button_click_7_listener() {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteRule(r_r11));
    });
    \u0275\u0275elementStart(8, "mat-icon", 37);
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", r_r11.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", r_r11.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r11.isActive ? "toggle_on" : "toggle_off");
  }
}
function ComplianceSetupComponent_mat_card_9_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 38);
  }
}
function ComplianceSetupComponent_mat_card_9_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 39);
  }
}
function ComplianceSetupComponent_mat_card_9_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1, " No compliance rules found. ");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 11)(1, "mat-form-field", 12)(2, "mat-icon", 13);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_mat_card_9_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ComplianceSetupComponent_mat_card_9_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 15);
    \u0275\u0275elementContainerStart(6, 16);
    \u0275\u0275template(7, ComplianceSetupComponent_mat_card_9_th_7_Template, 2, 0, "th", 17)(8, ComplianceSetupComponent_mat_card_9_td_8_Template, 2, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 19);
    \u0275\u0275template(10, ComplianceSetupComponent_mat_card_9_th_10_Template, 2, 0, "th", 17)(11, ComplianceSetupComponent_mat_card_9_td_11_Template, 3, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 20);
    \u0275\u0275template(13, ComplianceSetupComponent_mat_card_9_th_13_Template, 2, 0, "th", 17)(14, ComplianceSetupComponent_mat_card_9_td_14_Template, 2, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 21);
    \u0275\u0275template(16, ComplianceSetupComponent_mat_card_9_th_16_Template, 2, 0, "th", 17)(17, ComplianceSetupComponent_mat_card_9_td_17_Template, 2, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 22);
    \u0275\u0275template(19, ComplianceSetupComponent_mat_card_9_th_19_Template, 2, 0, "th", 17)(20, ComplianceSetupComponent_mat_card_9_td_20_Template, 3, 5, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 23);
    \u0275\u0275template(22, ComplianceSetupComponent_mat_card_9_th_22_Template, 2, 0, "th", 17)(23, ComplianceSetupComponent_mat_card_9_td_23_Template, 3, 2, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 24);
    \u0275\u0275template(25, ComplianceSetupComponent_mat_card_9_th_25_Template, 2, 0, "th", 17)(26, ComplianceSetupComponent_mat_card_9_td_26_Template, 10, 3, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(27, ComplianceSetupComponent_mat_card_9_tr_27_Template, 1, 0, "tr", 25)(28, ComplianceSetupComponent_mat_card_9_tr_28_Template, 1, 0, "tr", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ComplianceSetupComponent_mat_card_9_div_29_Template, 2, 0, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.filteredRules);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredRules.length && !ctx_r1.loading);
  }
}
function ComplianceSetupComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function ComplianceSetupComponent_div_11_mat_form_field_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 48)(1, "mat-label");
    \u0275\u0275text(2, "Threshold Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_11_mat_form_field_33_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.thresholdAmount, $event) || (ctx_r1.form.thresholdAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.thresholdAmount);
  }
}
function ComplianceSetupComponent_div_11_mat_form_field_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 48)(1, "mat-label");
    \u0275\u0275text(2, "Time Period (Days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_11_mat_form_field_34_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.timePeriodDays, $event) || (ctx_r1.form.timePeriodDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.timePeriodDays);
  }
}
function ComplianceSetupComponent_div_11_mat_form_field_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 48)(1, "mat-label");
    \u0275\u0275text(2, "Max Transaction Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_11_mat_form_field_35_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.maxTransactionCount, $event) || (ctx_r1.form.maxTransactionCount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.maxTransactionCount);
  }
}
function ComplianceSetupComponent_div_11_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 67);
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
function ComplianceSetupComponent_div_11_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 67);
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
function ComplianceSetupComponent_div_11_mat_spinner_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 68);
  }
}
function ComplianceSetupComponent_div_11_mat_icon_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, ComplianceSetupComponent_div_11_div_7_Template, 2, 1, "div", 44);
    \u0275\u0275elementStart(8, "div", 45)(9, "mat-form-field", 46)(10, "mat-label");
    \u0275\u0275text(11, "Rule Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_11_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.ruleName, $event) || (ctx_r1.form.ruleName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 48)(14, "mat-label");
    \u0275\u0275text(15, "Rule Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_11_Template_mat_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.ruleType, $event) || (ctx_r1.form.ruleType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "mat-option", 50);
    \u0275\u0275text(18, "Amount Threshold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 51);
    \u0275\u0275text(20, "Frequency Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 52);
    \u0275\u0275text(22, "Country Restriction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 53);
    \u0275\u0275text(24, "Name Screening");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "mat-form-field", 48)(26, "mat-label");
    \u0275\u0275text(27, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_11_Template_mat_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.action, $event) || (ctx_r1.form.action = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "mat-option", 54);
    \u0275\u0275text(30, "Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-option", 55);
    \u0275\u0275text(32, "Block");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, ComplianceSetupComponent_div_11_mat_form_field_33_Template, 4, 1, "mat-form-field", 56)(34, ComplianceSetupComponent_div_11_mat_form_field_34_Template, 4, 1, "mat-form-field", 56)(35, ComplianceSetupComponent_div_11_mat_form_field_35_Template, 4, 1, "mat-form-field", 56);
    \u0275\u0275elementStart(36, "mat-form-field", 48)(37, "mat-label");
    \u0275\u0275text(38, "Source Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_11_Template_mat_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCountry, $event) || (ctx_r1.form.sourceCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(40, ComplianceSetupComponent_div_11_mat_option_40_Template, 2, 2, "mat-option", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "mat-form-field", 48)(42, "mat-label");
    \u0275\u0275text(43, "Destination Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_11_Template_mat_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCountry, $event) || (ctx_r1.form.destinationCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(45, ComplianceSetupComponent_div_11_mat_option_45_Template, 2, 2, "mat-option", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 58)(47, "mat-slide-toggle", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_11_Template_mat_slide_toggle_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.isActive, $event) || (ctx_r1.form.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(48, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 60)(50, "button", 61);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_11_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementStart(51, "mat-icon");
    \u0275\u0275text(52, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 62);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_11_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRule());
    });
    \u0275\u0275template(55, ComplianceSetupComponent_div_11_mat_spinner_55_Template, 1, 0, "mat-spinner", 63)(56, ComplianceSetupComponent_div_11_mat_icon_56_Template, 2, 0, "mat-icon", 64);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Rule" : "Create Rule");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.ruleName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.ruleType);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.action);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.showThresholdAmount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showTimePeriod);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showMaxTransactionCount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sourceCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destinationCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
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
function emptyRuleForm() {
  return {
    ruleName: "",
    ruleType: "AmountThreshold",
    thresholdAmount: null,
    timePeriodDays: null,
    maxTransactionCount: null,
    sourceCountry: "",
    destinationCountry: "",
    action: "Flag",
    isActive: true
  };
}
var ComplianceSetupComponent = class _ComplianceSetupComponent {
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.rules = [];
    this.filteredRules = [];
    this.displayedColumns = [
      "ruleName",
      "ruleType",
      "threshold",
      "countries",
      "action",
      "status",
      "actions"
    ];
    this.searchString = "";
    this.loading = true;
    this.message = "";
    this.messageSeverity = "info";
    this.countries = [];
    this.showPopup = false;
    this.isEditing = false;
    this.editingId = 0;
    this.saving = false;
    this.formError = "";
    this.form = emptyRuleForm();
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadCountries();
    this.loadRules();
  }
  loadCountries() {
    this.api.getCountries().subscribe((r) => {
      if (r?.success && r.data)
        this.countries = r.data;
    });
  }
  // ---------------------------------------------------------------------------
  // Rules CRUD
  // ---------------------------------------------------------------------------
  loadRules() {
    this.loading = true;
    this.api.getComplianceRules().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.rules = res.data;
          this.applyFilter();
        } else {
          this.rules = [];
          this.filteredRules = [];
          this.message = res?.message || "Failed to load rules.";
          this.messageSeverity = "error";
        }
        this.loading = false;
      },
      error: () => {
        this.rules = [];
        this.filteredRules = [];
        this.message = "Could not connect to server.";
        this.messageSeverity = "error";
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const s = this.searchString.toLowerCase();
    this.filteredRules = !s ? [...this.rules] : this.rules.filter((r) => r.ruleName.toLowerCase().includes(s) || r.ruleType.toLowerCase().includes(s) || r.action.toLowerCase().includes(s));
  }
  clearMessage() {
    this.message = "";
  }
  // ---------------------------------------------------------------------------
  // Threshold / Params display helper
  // ---------------------------------------------------------------------------
  getThresholdDisplay(rule) {
    const parts = [];
    if (rule.thresholdAmount != null)
      parts.push(`Amount: ${rule.thresholdAmount}`);
    if (rule.timePeriodDays != null)
      parts.push(`Period: ${rule.timePeriodDays}d`);
    if (rule.maxTransactionCount != null)
      parts.push(`Max Txn: ${rule.maxTransactionCount}`);
    return parts.length ? parts.join(", ") : "-";
  }
  getCountriesDisplay(rule) {
    const parts = [];
    if (rule.sourceCountry)
      parts.push(`From: ${rule.sourceCountry}`);
    if (rule.destinationCountry)
      parts.push(`To: ${rule.destinationCountry}`);
    return parts.length ? parts.join(", ") : "Any";
  }
  // ---------------------------------------------------------------------------
  // Create / Edit popup
  // ---------------------------------------------------------------------------
  openCreate() {
    this.form = emptyRuleForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = "";
    this.showPopup = true;
  }
  openEdit(rule) {
    this.form = {
      ruleName: rule.ruleName,
      ruleType: rule.ruleType,
      thresholdAmount: rule.thresholdAmount ?? null,
      timePeriodDays: rule.timePeriodDays ?? null,
      maxTransactionCount: rule.maxTransactionCount ?? null,
      sourceCountry: rule.sourceCountry || "",
      destinationCountry: rule.destinationCountry || "",
      action: rule.action,
      isActive: rule.isActive
    };
    this.isEditing = true;
    this.editingId = rule.id;
    this.formError = "";
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }
  // Conditional field visibility
  get showThresholdAmount() {
    return this.form.ruleType === "AmountThreshold";
  }
  get showTimePeriod() {
    return this.form.ruleType === "FrequencyLimit";
  }
  get showMaxTransactionCount() {
    return this.form.ruleType === "FrequencyLimit";
  }
  saveRule() {
    this.formError = "";
    if (!this.form.ruleName?.trim()) {
      this.formError = "Rule Name is required.";
      return;
    }
    this.saving = true;
    const dto = {
      ruleName: this.form.ruleName,
      ruleType: this.form.ruleType,
      thresholdAmount: this.form.thresholdAmount,
      timePeriodDays: this.form.timePeriodDays,
      maxTransactionCount: this.form.maxTransactionCount,
      sourceCountry: this.form.sourceCountry || null,
      destinationCountry: this.form.destinationCountry || null,
      action: this.form.action,
      isActive: this.form.isActive
    };
    const obs = this.isEditing ? this.api.updateComplianceRule(this.editingId, dto) : this.api.createComplianceRule(dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.message = this.isEditing ? "Rule updated." : "Rule created.";
          this.messageSeverity = "success";
          this.showPopup = false;
          this.loadRules();
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
  // Toggle / Delete
  // ---------------------------------------------------------------------------
  toggleRule(rule) {
    this.api.toggleComplianceRule(rule.id).subscribe((r) => {
      if (r?.success) {
        this.message = `Rule '${rule.ruleName}' ${rule.isActive ? "deactivated" : "activated"}.`;
        this.messageSeverity = "success";
        this.loadRules();
      } else {
        this.message = r?.message || "Failed.";
        this.messageSeverity = "error";
      }
    });
  }
  deleteRule(rule) {
    this.api.deleteComplianceRule(rule.id).subscribe((r) => {
      if (r?.success) {
        this.message = "Rule deleted.";
        this.messageSeverity = "success";
        this.loadRules();
      } else {
        this.message = r?.message || "Failed.";
        this.messageSeverity = "error";
      }
    });
  }
  static {
    this.\u0275fac = function ComplianceSetupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComplianceSetupComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplianceSetupComponent, selectors: [["app-compliance-setup"]], decls: 12, vars: 5, consts: [[1, "page-header"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "alert-banner", 3, "ngClass", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], [1, "alert-banner", 3, "ngClass"], ["mat-icon-button", "", 3, "click"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search rules...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "ruleName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ruleType"], ["matColumnDef", "threshold"], ["matColumnDef", "countries"], ["matColumnDef", "action"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", "chip-info"], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "primary"], ["mat-icon-button", "", 3, "click", "matTooltip"], [3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-lg"], [1, "popup-header"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-grid"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "required", "", 3, "ngModelChange", "ngModel"], ["appearance", "outline"], [3, "ngModelChange", "ngModel"], ["value", "AmountThreshold"], ["value", "FrequencyLimit"], ["value", "CountryRestriction"], ["value", "NameScreening"], ["value", "Review"], ["value", "Block"], ["appearance", "outline", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "toggle-container"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [3, "value"], ["diameter", "18", 1, "inline-spinner"]], template: function ComplianceSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Compliance Rule Setup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 1);
        \u0275\u0275listener("click", function ComplianceSetupComponent_Template_button_click_3_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Add Rule ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ComplianceSetupComponent_div_7_Template, 6, 2, "div", 2)(8, ComplianceSetupComponent_div_8_Template, 2, 0, "div", 3)(9, ComplianceSetupComponent_mat_card_9_Template, 30, 5, "mat-card", 4)(10, ComplianceSetupComponent_div_10_Template, 1, 0, "div", 5)(11, ComplianceSetupComponent_div_11_Template, 58, 17, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.message);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatSlideToggleModule, MatSlideToggle, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert-banner.alert-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.alert-banner.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.alert-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.alert-banner.alert-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.alert-banner.inline-alert[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 16px;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 320px;\n  margin-bottom: 8px;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.data-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 14px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 20px;\n}\n.chip.chip-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-tertiary[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.chip.chip-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #2e7d32 !important;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n}\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-lg[_ngcontent-%COMP%] {\n  width: 750px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 18px;\n}\n.popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.toggle-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 0;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.inline-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .popup[_ngcontent-%COMP%] {\n    padding: 16px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=compliance-setup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComplianceSetupComponent, [{
    type: Component,
    args: [{ selector: "app-compliance-setup", standalone: true, imports: [
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
      DatePipe,
      SearchableSelectDirective
    ], template: `<!-- Page Header -->\r
<div class="page-header">\r
  <h2>Compliance Rule Setup</h2>\r
  <button mat-raised-button color="primary" (click)="openCreate()">\r
    <mat-icon>add</mat-icon> Add Rule\r
  </button>\r
</div>\r
\r
<!-- Alert Message -->\r
<div *ngIf="message" class="alert-banner" [ngClass]="'alert-' + messageSeverity">\r
  <span>{{ message }}</span>\r
  <button mat-icon-button (click)="clearMessage()"><mat-icon>close</mat-icon></button>\r
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
    <input matInput placeholder="Search rules..." [(ngModel)]="searchString" (ngModelChange)="applyFilter()" />\r
  </mat-form-field>\r
\r
  <table mat-table [dataSource]="filteredRules" class="data-table">\r
    <!-- Rule Name -->\r
    <ng-container matColumnDef="ruleName">\r
      <th mat-header-cell *matHeaderCellDef>Rule Name</th>\r
      <td mat-cell *matCellDef="let r">{{ r.ruleName }}</td>\r
    </ng-container>\r
\r
    <!-- Type -->\r
    <ng-container matColumnDef="ruleType">\r
      <th mat-header-cell *matHeaderCellDef>Type</th>\r
      <td mat-cell *matCellDef="let r">\r
        <span class="chip chip-info">{{ r.ruleType }}</span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Threshold / Params -->\r
    <ng-container matColumnDef="threshold">\r
      <th mat-header-cell *matHeaderCellDef>Threshold / Params</th>\r
      <td mat-cell *matCellDef="let r">{{ getThresholdDisplay(r) }}</td>\r
    </ng-container>\r
\r
    <!-- Countries -->\r
    <ng-container matColumnDef="countries">\r
      <th mat-header-cell *matHeaderCellDef>Countries</th>\r
      <td mat-cell *matCellDef="let r">{{ getCountriesDisplay(r) }}</td>\r
    </ng-container>\r
\r
    <!-- Action -->\r
    <ng-container matColumnDef="action">\r
      <th mat-header-cell *matHeaderCellDef>Action</th>\r
      <td mat-cell *matCellDef="let r">\r
        <span class="chip" [ngClass]="{\r
          'chip-error': r.action === 'Block',\r
          'chip-tertiary': r.action === 'Review'\r
        }">{{ r.action }}</span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Status -->\r
    <ng-container matColumnDef="status">\r
      <th mat-header-cell *matHeaderCellDef>Status</th>\r
      <td mat-cell *matCellDef="let r">\r
        <span class="chip" [ngClass]="r.isActive ? 'chip-success' : 'chip-default'">\r
          {{ r.isActive ? 'Active' : 'Inactive' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Actions -->\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let r">\r
        <button mat-icon-button matTooltip="Edit" (click)="openEdit(r)">\r
          <mat-icon color="primary">edit</mat-icon>\r
        </button>\r
        <button mat-icon-button [matTooltip]="r.isActive ? 'Deactivate' : 'Activate'" (click)="toggleRule(r)">\r
          <mat-icon [ngClass]="r.isActive ? 'text-success' : ''">{{ r.isActive ? 'toggle_on' : 'toggle_off'\r
            }}</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deleteRule(r)">\r
          <mat-icon color="warn">delete</mat-icon>\r
        </button>\r
      </td>\r
    </ng-container>\r
\r
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
  </table>\r
\r
  <div *ngIf="!filteredRules.length && !loading" class="empty-state">\r
    No compliance rules found.\r
  </div>\r
</mat-card>\r
\r
<!-- ============================================================ -->\r
<!-- Create / Edit Rule Popup                                      -->\r
<!-- ============================================================ -->\r
<div *ngIf="showPopup" class="overlay" (click)="closePopup()"></div>\r
<div *ngIf="showPopup" class="popup popup-lg">\r
  <div class="popup-header">\r
    <h3>{{ isEditing ? 'Edit Rule' : 'Create Rule' }}</h3>\r
    <button mat-icon-button (click)="closePopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="formError" class="alert-banner alert-error inline-alert">{{ formError }}</div>\r
\r
  <div class="form-grid">\r
    <!-- Rule Name -->\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Rule Name *</mat-label>\r
      <input matInput [(ngModel)]="form.ruleName" required />\r
    </mat-form-field>\r
\r
    <!-- Rule Type -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Rule Type</mat-label>\r
      <mat-select [(ngModel)]="form.ruleType">\r
        <mat-option value="AmountThreshold">Amount Threshold</mat-option>\r
        <mat-option value="FrequencyLimit">Frequency Limit</mat-option>\r
        <mat-option value="CountryRestriction">Country Restriction</mat-option>\r
        <mat-option value="NameScreening">Name Screening</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Action -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Action</mat-label>\r
      <mat-select [(ngModel)]="form.action">\r
        <mat-option value="Review">Review</mat-option>\r
        <mat-option value="Block">Block</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Threshold Amount (conditional) -->\r
    <mat-form-field *ngIf="showThresholdAmount" appearance="outline">\r
      <mat-label>Threshold Amount</mat-label>\r
      <input matInput type="number" [(ngModel)]="form.thresholdAmount" />\r
    </mat-form-field>\r
\r
    <!-- Time Period Days (conditional) -->\r
    <mat-form-field *ngIf="showTimePeriod" appearance="outline">\r
      <mat-label>Time Period (Days)</mat-label>\r
      <input matInput type="number" [(ngModel)]="form.timePeriodDays" />\r
    </mat-form-field>\r
\r
    <!-- Max Transaction Count (conditional) -->\r
    <mat-form-field *ngIf="showMaxTransactionCount" appearance="outline">\r
      <mat-label>Max Transaction Count</mat-label>\r
      <input matInput type="number" [(ngModel)]="form.maxTransactionCount" />\r
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
    <!-- IsActive -->\r
    <div class="toggle-container">\r
      <mat-slide-toggle [(ngModel)]="form.isActive" color="primary">Active</mat-slide-toggle>\r
    </div>\r
  </div>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closePopup()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="saveRule()" [disabled]="saving">\r
      <mat-spinner *ngIf="saving" diameter="18" class="inline-spinner"></mat-spinner>\r
      <mat-icon *ngIf="!saving">save</mat-icon> {{ isEditing ? 'Update' : 'Create' }}\r
    </button>\r
  </div>\r
</div>`, styles: ["/* src/app/pages/admin/compliance-setup/compliance-setup.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h2 {\n  font-weight: 700;\n  margin: 0;\n}\n.alert-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert-banner.alert-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.alert-banner.alert-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.alert-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.alert-banner.alert-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.alert-banner.inline-alert {\n  margin-bottom: 12px;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card {\n  border-radius: 12px;\n  padding: 16px;\n}\n.search-field {\n  width: 320px;\n  margin-bottom: 8px;\n}\n.search-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table {\n  width: 100%;\n}\n.data-table th.mat-mdc-header-cell {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n}\n.empty-state {\n  text-align: center;\n  padding: 32px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 14px;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 20px;\n}\n.chip.chip-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-tertiary {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.chip.chip-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-success {\n  color: #2e7d32 !important;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n}\n.popup {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-lg {\n  width: 750px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.popup-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 18px;\n}\n.popup-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-grid .full-width {\n  grid-column: 1/-1;\n}\n@media (max-width: 600px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.toggle-container {\n  display: flex;\n  align-items: center;\n  padding: 8px 0;\n}\n.full-width {\n  width: 100%;\n}\n.inline-spinner {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .search-field {\n    width: 100%;\n  }\n  .popup {\n    padding: 16px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=compliance-setup.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplianceSetupComponent, { className: "ComplianceSetupComponent", filePath: "src/app/pages/admin/compliance-setup/compliance-setup.component.ts", lineNumber: 69 });
})();
export {
  ComplianceSetupComponent
};
//# sourceMappingURL=chunk-RGM22BJY.js.map
