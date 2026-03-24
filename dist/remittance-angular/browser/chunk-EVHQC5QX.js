import {
  SearchableSelectDirective
} from "./chunk-NEZ2ARFB.js";
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
} from "./chunk-IHZVJAJK.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-YTSILK5X.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-AD4S7CLJ.js";
import {
  MatOption
} from "./chunk-AGEK5EEG.js";
import "./chunk-DBWLSMJ7.js";
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
  MatPrefix
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
  NgModel,
  NumberValueAccessor,
  RequiredValidator
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
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-DBW47J2B.js";
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
} from "./chunk-J3ROLHMS.js";

// src/app/pages/admin/compliance-setup/compliance-setup.component.ts
var _c0 = (a0, a1) => ({ "chip-error": a0, "chip-tertiary": a1 });
function ComplianceSetupComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_8_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Rule Name");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_8_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.ruleName);
  }
}
function ComplianceSetupComponent_mat_card_8_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_8_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.ruleType);
  }
}
function ComplianceSetupComponent_mat_card_8_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Threshold / Params");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_8_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getThresholdDisplay(r_r5));
  }
}
function ComplianceSetupComponent_mat_card_8_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Countries");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_8_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCountriesDisplay(r_r6));
  }
}
function ComplianceSetupComponent_mat_card_8_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_8_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c0, r_r7.action === "Block", r_r7.action === "Review"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.action);
  }
}
function ComplianceSetupComponent_mat_card_8_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_8_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", r_r8.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r8.isActive ? "Active" : "Inactive", " ");
  }
}
function ComplianceSetupComponent_mat_card_8_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_8_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 26)(1, "button", 29);
    \u0275\u0275listener("click", function ComplianceSetupComponent_mat_card_8_td_26_Template_button_click_1_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(r_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon", 30);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function ComplianceSetupComponent_mat_card_8_td_26_Template_button_click_4_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRule(r_r10));
    });
    \u0275\u0275elementStart(5, "mat-icon", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 33);
    \u0275\u0275listener("click", function ComplianceSetupComponent_mat_card_8_td_26_Template_button_click_7_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteRule(r_r10));
    });
    \u0275\u0275elementStart(8, "mat-icon", 34);
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", r_r10.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", r_r10.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r10.isActive ? "toggle_on" : "toggle_off");
  }
}
function ComplianceSetupComponent_mat_card_8_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ComplianceSetupComponent_mat_card_8_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function ComplianceSetupComponent_mat_card_8_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " No compliance rules found. ");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_mat_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 8)(1, "mat-form-field", 9)(2, "mat-icon", 10);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_mat_card_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ComplianceSetupComponent_mat_card_8_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 12);
    \u0275\u0275elementContainerStart(6, 13);
    \u0275\u0275template(7, ComplianceSetupComponent_mat_card_8_th_7_Template, 2, 0, "th", 14)(8, ComplianceSetupComponent_mat_card_8_td_8_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 16);
    \u0275\u0275template(10, ComplianceSetupComponent_mat_card_8_th_10_Template, 2, 0, "th", 14)(11, ComplianceSetupComponent_mat_card_8_td_11_Template, 3, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 17);
    \u0275\u0275template(13, ComplianceSetupComponent_mat_card_8_th_13_Template, 2, 0, "th", 14)(14, ComplianceSetupComponent_mat_card_8_td_14_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 18);
    \u0275\u0275template(16, ComplianceSetupComponent_mat_card_8_th_16_Template, 2, 0, "th", 14)(17, ComplianceSetupComponent_mat_card_8_td_17_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 19);
    \u0275\u0275template(19, ComplianceSetupComponent_mat_card_8_th_19_Template, 2, 0, "th", 14)(20, ComplianceSetupComponent_mat_card_8_td_20_Template, 3, 5, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 20);
    \u0275\u0275template(22, ComplianceSetupComponent_mat_card_8_th_22_Template, 2, 0, "th", 14)(23, ComplianceSetupComponent_mat_card_8_td_23_Template, 3, 2, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 21);
    \u0275\u0275template(25, ComplianceSetupComponent_mat_card_8_th_25_Template, 2, 0, "th", 14)(26, ComplianceSetupComponent_mat_card_8_td_26_Template, 10, 3, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(27, ComplianceSetupComponent_mat_card_8_tr_27_Template, 1, 0, "tr", 22)(28, ComplianceSetupComponent_mat_card_8_tr_28_Template, 1, 0, "tr", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ComplianceSetupComponent_mat_card_8_div_29_Template, 2, 0, "div", 24);
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
function ComplianceSetupComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_div_10_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function ComplianceSetupComponent_div_10_mat_form_field_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 46)(1, "mat-label");
    \u0275\u0275text(2, "Threshold Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_mat_form_field_33_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r13);
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
function ComplianceSetupComponent_div_10_mat_form_field_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 46)(1, "mat-label");
    \u0275\u0275text(2, "Time Period (Days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_mat_form_field_34_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
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
function ComplianceSetupComponent_div_10_mat_form_field_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 46)(1, "mat-label");
    \u0275\u0275text(2, "Max Transaction Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_mat_form_field_35_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r15);
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
function ComplianceSetupComponent_div_10_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("value", c_r16.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16.name);
  }
}
function ComplianceSetupComponent_div_10_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
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
function ComplianceSetupComponent_div_10_mat_spinner_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 66);
  }
}
function ComplianceSetupComponent_div_10_mat_icon_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, ComplianceSetupComponent_div_10_div_7_Template, 2, 1, "div", 42);
    \u0275\u0275elementStart(8, "div", 43)(9, "mat-form-field", 44)(10, "mat-label");
    \u0275\u0275text(11, "Rule Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.ruleName, $event) || (ctx_r1.form.ruleName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 46)(14, "mat-label");
    \u0275\u0275text(15, "Rule Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_mat_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.ruleType, $event) || (ctx_r1.form.ruleType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "mat-option", 48);
    \u0275\u0275text(18, "Amount Threshold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 49);
    \u0275\u0275text(20, "Frequency Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 50);
    \u0275\u0275text(22, "Country Restriction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 51);
    \u0275\u0275text(24, "Name Screening");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "mat-form-field", 46)(26, "mat-label");
    \u0275\u0275text(27, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_mat_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.action, $event) || (ctx_r1.form.action = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "mat-option", 52);
    \u0275\u0275text(30, "Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-option", 53);
    \u0275\u0275text(32, "Block");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, ComplianceSetupComponent_div_10_mat_form_field_33_Template, 4, 1, "mat-form-field", 54)(34, ComplianceSetupComponent_div_10_mat_form_field_34_Template, 4, 1, "mat-form-field", 54)(35, ComplianceSetupComponent_div_10_mat_form_field_35_Template, 4, 1, "mat-form-field", 54);
    \u0275\u0275elementStart(36, "mat-form-field", 46)(37, "mat-label");
    \u0275\u0275text(38, "Source Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_mat_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCountry, $event) || (ctx_r1.form.sourceCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(40, ComplianceSetupComponent_div_10_mat_option_40_Template, 2, 2, "mat-option", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "mat-form-field", 46)(42, "mat-label");
    \u0275\u0275text(43, "Destination Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_mat_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCountry, $event) || (ctx_r1.form.destinationCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(45, ComplianceSetupComponent_div_10_mat_option_45_Template, 2, 2, "mat-option", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 56)(47, "mat-slide-toggle", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_mat_slide_toggle_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.isActive, $event) || (ctx_r1.form.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(48, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 58)(50, "button", 59);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_10_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementStart(51, "mat-icon");
    \u0275\u0275text(52, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 60);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_10_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRule());
    });
    \u0275\u0275template(55, ComplianceSetupComponent_div_10_mat_spinner_55_Template, 1, 0, "mat-spinner", 61)(56, ComplianceSetupComponent_div_10_mat_icon_56_Template, 2, 0, "mat-icon", 62);
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
          this.notify.error(res?.message || "Failed to load rules.");
        }
        this.loading = false;
      },
      error: () => {
        this.rules = [];
        this.filteredRules = [];
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const s = this.searchString.toLowerCase();
    this.filteredRules = !s ? [...this.rules] : this.rules.filter((r) => r.ruleName.toLowerCase().includes(s) || r.ruleType.toLowerCase().includes(s) || r.action.toLowerCase().includes(s));
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
          this.notify.success(this.isEditing ? "Rule updated." : "Rule created.");
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
        this.notify.success(`Rule '${rule.ruleName}' ${rule.isActive ? "deactivated" : "activated"}.`);
        this.loadRules();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  deleteRule(rule) {
    this.api.deleteComplianceRule(rule.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Rule deleted.");
        this.loadRules();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function ComplianceSetupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComplianceSetupComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplianceSetupComponent, selectors: [["app-compliance-setup"]], decls: 11, vars: 4, consts: [[1, "page-header"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search rules...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "ruleName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ruleType"], ["matColumnDef", "threshold"], ["matColumnDef", "countries"], ["matColumnDef", "action"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", "chip-info"], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "primary"], ["mat-icon-button", "", 3, "click", "matTooltip"], [3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-lg"], [1, "popup-header"], ["mat-icon-button", "", 3, "click"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-grid"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "required", "", 3, "ngModelChange", "ngModel"], ["appearance", "outline"], [3, "ngModelChange", "ngModel"], ["value", "AmountThreshold"], ["value", "FrequencyLimit"], ["value", "CountryRestriction"], ["value", "NameScreening"], ["value", "Review"], ["value", "Block"], ["appearance", "outline", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "toggle-container"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [3, "value"], ["diameter", "18", 1, "inline-spinner"]], template: function ComplianceSetupComponent_Template(rf, ctx) {
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
        \u0275\u0275template(7, ComplianceSetupComponent_div_7_Template, 2, 0, "div", 2)(8, ComplianceSetupComponent_mat_card_8_Template, 30, 5, "mat-card", 3)(9, ComplianceSetupComponent_div_9_Template, 1, 0, "div", 4)(10, ComplianceSetupComponent_div_10_Template, 58, 17, "div", 5);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatSlideToggleModule, MatSlideToggle, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n/*# sourceMappingURL=compliance-setup.component.css.map */"] });
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
    ], template: `<!-- Page Header -->
<div class="page-header">
  <h2>Compliance Rule Setup</h2>
  <button mat-raised-button color="primary" (click)="openCreate()">
    <mat-icon>add</mat-icon> Add Rule
  </button>
</div>

<!-- Loading -->
<div *ngIf="loading" class="loading-container">
  <mat-spinner diameter="40"></mat-spinner>
</div>

<!-- Search + Table -->
<mat-card *ngIf="!loading" class="table-card">
  <mat-form-field appearance="outline" class="search-field">
    <mat-icon matPrefix>search</mat-icon>
    <input matInput placeholder="Search rules..." [(ngModel)]="searchString" (ngModelChange)="applyFilter()" />
  </mat-form-field>

  <table mat-table [dataSource]="filteredRules" class="data-table">
    <!-- Rule Name -->
    <ng-container matColumnDef="ruleName">
      <th mat-header-cell *matHeaderCellDef>Rule Name</th>
      <td mat-cell *matCellDef="let r">{{ r.ruleName }}</td>
    </ng-container>

    <!-- Type -->
    <ng-container matColumnDef="ruleType">
      <th mat-header-cell *matHeaderCellDef>Type</th>
      <td mat-cell *matCellDef="let r">
        <span class="chip chip-info">{{ r.ruleType }}</span>
      </td>
    </ng-container>

    <!-- Threshold / Params -->
    <ng-container matColumnDef="threshold">
      <th mat-header-cell *matHeaderCellDef>Threshold / Params</th>
      <td mat-cell *matCellDef="let r">{{ getThresholdDisplay(r) }}</td>
    </ng-container>

    <!-- Countries -->
    <ng-container matColumnDef="countries">
      <th mat-header-cell *matHeaderCellDef>Countries</th>
      <td mat-cell *matCellDef="let r">{{ getCountriesDisplay(r) }}</td>
    </ng-container>

    <!-- Action -->
    <ng-container matColumnDef="action">
      <th mat-header-cell *matHeaderCellDef>Action</th>
      <td mat-cell *matCellDef="let r">
        <span class="chip" [ngClass]="{
          'chip-error': r.action === 'Block',
          'chip-tertiary': r.action === 'Review'
        }">{{ r.action }}</span>
      </td>
    </ng-container>

    <!-- Status -->
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef>Status</th>
      <td mat-cell *matCellDef="let r">
        <span class="chip" [ngClass]="r.isActive ? 'chip-success' : 'chip-default'">
          {{ r.isActive ? 'Active' : 'Inactive' }}
        </span>
      </td>
    </ng-container>

    <!-- Actions -->
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let r">
        <button mat-icon-button matTooltip="Edit" (click)="openEdit(r)">
          <mat-icon color="primary">edit</mat-icon>
        </button>
        <button mat-icon-button [matTooltip]="r.isActive ? 'Deactivate' : 'Activate'" (click)="toggleRule(r)">
          <mat-icon [ngClass]="r.isActive ? 'text-success' : ''">{{ r.isActive ? 'toggle_on' : 'toggle_off'
            }}</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Delete" (click)="deleteRule(r)">
          <mat-icon color="warn">delete</mat-icon>
        </button>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  <div *ngIf="!filteredRules.length && !loading" class="empty-state">
    No compliance rules found.
  </div>
</mat-card>

<!-- ============================================================ -->
<!-- Create / Edit Rule Popup                                      -->
<!-- ============================================================ -->
<div *ngIf="showPopup" class="overlay" (click)="closePopup()"></div>
<div *ngIf="showPopup" class="popup popup-lg">
  <div class="popup-header">
    <h3>{{ isEditing ? 'Edit Rule' : 'Create Rule' }}</h3>
    <button mat-icon-button (click)="closePopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="formError" class="alert-banner alert-error inline-alert">{{ formError }}</div>

  <div class="form-grid">
    <!-- Rule Name -->
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Rule Name *</mat-label>
      <input matInput [(ngModel)]="form.ruleName" required />
    </mat-form-field>

    <!-- Rule Type -->
    <mat-form-field appearance="outline">
      <mat-label>Rule Type</mat-label>
      <mat-select [(ngModel)]="form.ruleType">
        <mat-option value="AmountThreshold">Amount Threshold</mat-option>
        <mat-option value="FrequencyLimit">Frequency Limit</mat-option>
        <mat-option value="CountryRestriction">Country Restriction</mat-option>
        <mat-option value="NameScreening">Name Screening</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Action -->
    <mat-form-field appearance="outline">
      <mat-label>Action</mat-label>
      <mat-select [(ngModel)]="form.action">
        <mat-option value="Review">Review</mat-option>
        <mat-option value="Block">Block</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Threshold Amount (conditional) -->
    <mat-form-field *ngIf="showThresholdAmount" appearance="outline">
      <mat-label>Threshold Amount</mat-label>
      <input matInput type="number" [(ngModel)]="form.thresholdAmount" />
    </mat-form-field>

    <!-- Time Period Days (conditional) -->
    <mat-form-field *ngIf="showTimePeriod" appearance="outline">
      <mat-label>Time Period (Days)</mat-label>
      <input matInput type="number" [(ngModel)]="form.timePeriodDays" />
    </mat-form-field>

    <!-- Max Transaction Count (conditional) -->
    <mat-form-field *ngIf="showMaxTransactionCount" appearance="outline">
      <mat-label>Max Transaction Count</mat-label>
      <input matInput type="number" [(ngModel)]="form.maxTransactionCount" />
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

    <!-- IsActive -->
    <div class="toggle-container">
      <mat-slide-toggle [(ngModel)]="form.isActive" color="primary">Active</mat-slide-toggle>
    </div>
  </div>

  <div class="popup-actions">
    <button mat-button (click)="closePopup()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="saveRule()" [disabled]="saving">
      <mat-spinner *ngIf="saving" diameter="18" class="inline-spinner"></mat-spinner>
      <mat-icon *ngIf="!saving">save</mat-icon> {{ isEditing ? 'Update' : 'Create' }}
    </button>
  </div>
</div>`, styles: ["/* src/app/pages/admin/compliance-setup/compliance-setup.component.scss */\n/*# sourceMappingURL=compliance-setup.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplianceSetupComponent, { className: "ComplianceSetupComponent", filePath: "src/app/pages/admin/compliance-setup/compliance-setup.component.ts", lineNumber: 69 });
})();
export {
  ComplianceSetupComponent
};
//# sourceMappingURL=chunk-EVHQC5QX.js.map
