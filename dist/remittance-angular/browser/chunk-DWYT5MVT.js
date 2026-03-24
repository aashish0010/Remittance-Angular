import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-JA2POLDW.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-YTSILK5X.js";
import {
  ActivatedRoute
} from "./chunk-ZMWNDU6W.js";
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
  MatLabel
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
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-AVOWLGE4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-IRXVSIUW.js";
import "./chunk-MKKXXFYO.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-DBW47J2B.js";
import {
  Component,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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

// src/app/pages/admin/setup-fields/setup-fields.component.ts
function SetupFieldsComponent_mat_card_3_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_3_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startAddSetting());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add Setting ");
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_mat_card_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_mat_card_3_div_5_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r4 = ctx.$implicit;
    \u0275\u0275property("value", k_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r4);
  }
}
function SetupFieldsComponent_mat_card_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "mat-form-field", 16)(3, "mat-label");
    \u0275\u0275text(4, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_3_div_5_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.settingForm.key, $event) || (ctx_r1.settingForm.key = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SetupFieldsComponent_mat_card_3_div_5_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSettingKeySelected($event));
    });
    \u0275\u0275template(6, SetupFieldsComponent_mat_card_3_div_5_mat_option_6_Template, 2, 2, "mat-option", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 16)(8, "mat-label");
    \u0275\u0275text(9, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_3_div_5_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.settingForm.value, $event) || (ctx_r1.settingForm.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-form-field", 16)(12, "mat-label");
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_3_div_5_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.settingForm.description, $event) || (ctx_r1.settingForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 20)(16, "button", 21);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_3_div_5_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveSetting());
    });
    \u0275\u0275text(17, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 22);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_3_div_5_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelSettingEdit());
    });
    \u0275\u0275text(19, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settingForm.key);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.availableSettingKeys);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settingForm.value);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settingForm.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingSetting);
  }
}
function SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 29)(8, "button", 33);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditSetting(row_r6));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 34);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteSetting(row_r6));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.description || "-");
  }
}
function SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "mat-form-field", 16)(3, "mat-label");
    \u0275\u0275text(4, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 16)(7, "mat-label");
    \u0275\u0275text(8, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_2_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.settingForm.value, $event) || (ctx_r1.settingForm.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 16)(11, "mat-label");
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.settingForm.description, $event) || (ctx_r1.settingForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 20)(15, "button", 21);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveSetting());
    });
    \u0275\u0275text(16, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 22);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelSettingEdit());
    });
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.settingForm.key);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settingForm.value);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settingForm.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingSetting);
  }
}
function SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4, "Delete this setting?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 29)(6, "button", 37);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.executeDelete());
    });
    \u0275\u0275text(7, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 22);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(9, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.key);
  }
}
function SetupFieldsComponent_mat_card_3_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_1_Template, 14, 3, "ng-container", 32)(2, SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_2_Template, 19, 4, "ng-container", 32)(3, SetupFieldsComponent_mat_card_3_div_6_div_10_ng_container_3_Template, 10, 1, "ng-container", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("value-row--editing", ctx_r1.editingSettingId === row_r6.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingSettingId !== row_r6.id && !ctx_r1.isConfirmingDelete("setting", row_r6.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingSettingId === row_r6.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isConfirmingDelete("setting", row_r6.id));
  }
}
function SetupFieldsComponent_mat_card_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 28);
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, SetupFieldsComponent_mat_card_3_div_6_div_10_Template, 4, 5, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.systemSettings);
  }
}
function SetupFieldsComponent_mat_card_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " No settings configured. ");
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275template(3, SetupFieldsComponent_mat_card_3_button_3_Template, 4, 0, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SetupFieldsComponent_mat_card_3_div_4_Template, 2, 0, "div", 7)(5, SetupFieldsComponent_mat_card_3_div_5_Template, 20, 5, "div", 8)(6, SetupFieldsComponent_mat_card_3_div_6_Template, 11, 1, "div", 9)(7, SetupFieldsComponent_mat_card_3_div_7_Template, 2, 0, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.addingSetting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingSettings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addingSetting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingSettings && ctx_r1.systemSettings.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingSettings && ctx_r1.systemSettings.length === 0 && !ctx_r1.addingSetting);
  }
}
function SetupFieldsComponent_mat_card_4_mat_tab_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_mat_tab_2_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startAddSetupField());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add New ");
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_mat_card_4_mat_tab_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_mat_card_4_mat_tab_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "mat-form-field", 16)(3, "mat-label");
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_5_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.setupFieldForm.code, $event) || (ctx_r1.setupFieldForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 16)(7, "mat-label");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_5_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.setupFieldForm.name, $event) || (ctx_r1.setupFieldForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 16)(11, "mat-label");
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_5_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.setupFieldForm.description, $event) || (ctx_r1.setupFieldForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 43)(15, "mat-label");
    \u0275\u0275text(16, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_5_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.setupFieldForm.sortOrder, $event) || (ctx_r1.setupFieldForm.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-slide-toggle", 17);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_5_Template_mat_slide_toggle_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.setupFieldForm.isActive, $event) || (ctx_r1.setupFieldForm.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(19, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "button", 21);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_5_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveSetupField());
    });
    \u0275\u0275text(22, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 22);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_5_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelSetupFieldEdit());
    });
    \u0275\u0275text(24, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.setupFieldForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.setupFieldForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.setupFieldForm.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.setupFieldForm.sortOrder);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.setupFieldForm.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.savingSetupField);
  }
}
function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 46)(10, "span", 47);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 29)(13, "button", 33);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startEditSetupField(row_r13));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 34);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteSetupField(row_r13));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-active", row_r13.isActive)("badge-inactive", !row_r13.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r13.isActive ? "Active" : "Inactive", " ");
  }
}
function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "mat-form-field", 16)(3, "mat-label");
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.setupFieldForm.code, $event) || (ctx_r1.setupFieldForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 16)(7, "mat-label");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_2_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.setupFieldForm.name, $event) || (ctx_r1.setupFieldForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 16)(11, "mat-label");
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.setupFieldForm.description, $event) || (ctx_r1.setupFieldForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 43)(15, "mat-label");
    \u0275\u0275text(16, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_2_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.setupFieldForm.sortOrder, $event) || (ctx_r1.setupFieldForm.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-slide-toggle", 17);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_2_Template_mat_slide_toggle_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.setupFieldForm.isActive, $event) || (ctx_r1.setupFieldForm.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(19, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "button", 21);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_2_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveSetupField());
    });
    \u0275\u0275text(22, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 22);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_2_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.cancelSetupFieldEdit());
    });
    \u0275\u0275text(24, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.setupFieldForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.setupFieldForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.setupFieldForm.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.setupFieldForm.sortOrder);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.setupFieldForm.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.savingSetupField);
  }
}
function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4, "Delete this item?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 29)(6, "button", 37);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.executeDelete());
    });
    \u0275\u0275text(7, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 22);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(9, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.name);
  }
}
function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_1_Template, 19, 9, "ng-container", 32)(2, SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_2_Template, 25, 6, "ng-container", 32)(3, SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_ng_container_3_Template, 10, 1, "ng-container", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("value-row--editing", ctx_r1.editingSetupFieldId === row_r13.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingSetupFieldId !== row_r13.id && !ctx_r1.isConfirmingDelete("setupField", row_r13.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingSetupFieldId === row_r13.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isConfirmingDelete("setupField", row_r13.id));
  }
}
function SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 27);
    \u0275\u0275text(3, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 28);
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 45);
    \u0275\u0275text(9, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 29);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_div_14_Template, 4, 5, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.setupFields);
  }
}
function SetupFieldsComponent_mat_card_4_mat_tab_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, ' No items configured. Click "Add New" to get started. ');
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_mat_card_4_mat_tab_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 42)(1, "div", 4)(2, "div", 5);
    \u0275\u0275template(3, SetupFieldsComponent_mat_card_4_mat_tab_2_button_3_Template, 4, 0, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SetupFieldsComponent_mat_card_4_mat_tab_2_div_4_Template, 2, 0, "div", 7)(5, SetupFieldsComponent_mat_card_4_mat_tab_2_div_5_Template, 25, 6, "div", 8)(6, SetupFieldsComponent_mat_card_4_mat_tab_2_div_6_Template, 15, 1, "div", 9)(7, SetupFieldsComponent_mat_card_4_mat_tab_2_div_7_Template, 2, 0, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", tab_r16.label);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.addingSetupField);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingSetupFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addingSetupField);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingSetupFields && ctx_r1.setupFields.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingSetupFields && ctx_r1.setupFields.length === 0 && !ctx_r1.addingSetupField);
  }
}
function SetupFieldsComponent_mat_card_4_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startAddDocType());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add New ");
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_mat_card_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_mat_card_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "mat-form-field", 16)(3, "mat-label");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_div_8_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.docTypeForm.name, $event) || (ctx_r1.docTypeForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 16)(7, "mat-label");
    \u0275\u0275text(8, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_div_8_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.docTypeForm.code, $event) || (ctx_r1.docTypeForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 43)(11, "mat-label");
    \u0275\u0275text(12, "Sides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_div_8_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.docTypeForm.requiredSides, $event) || (ctx_r1.docTypeForm.requiredSides = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 43)(15, "mat-label");
    \u0275\u0275text(16, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_div_8_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.docTypeForm.sortOrder, $event) || (ctx_r1.docTypeForm.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-slide-toggle", 17);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_div_8_Template_mat_slide_toggle_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.docTypeForm.isActive, $event) || (ctx_r1.docTypeForm.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(19, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "button", 21);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_div_8_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveDocType());
    });
    \u0275\u0275text(22, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 22);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_div_8_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelDocTypeEdit());
    });
    \u0275\u0275text(24, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docTypeForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docTypeForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docTypeForm.requiredSides);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docTypeForm.sortOrder);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docTypeForm.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.savingDocType);
  }
}
function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 46)(10, "span", 47);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 29)(13, "button", 33);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r19);
      const row_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditDocType(row_r20));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 34);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r19);
      const row_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteDocType(row_r20));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.requiredSides);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-active", row_r20.isActive)("badge-inactive", !row_r20.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r20.isActive ? "Active" : "Inactive", " ");
  }
}
function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "mat-form-field", 16)(3, "mat-label");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.docTypeForm.name, $event) || (ctx_r1.docTypeForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 16)(7, "mat-label");
    \u0275\u0275text(8, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_2_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.docTypeForm.code, $event) || (ctx_r1.docTypeForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 43)(11, "mat-label");
    \u0275\u0275text(12, "Sides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.docTypeForm.requiredSides, $event) || (ctx_r1.docTypeForm.requiredSides = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 43)(15, "mat-label");
    \u0275\u0275text(16, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_2_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.docTypeForm.sortOrder, $event) || (ctx_r1.docTypeForm.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-slide-toggle", 17);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_2_Template_mat_slide_toggle_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.docTypeForm.isActive, $event) || (ctx_r1.docTypeForm.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(19, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "button", 21);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_2_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveDocType());
    });
    \u0275\u0275text(22, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 22);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_2_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelDocTypeEdit());
    });
    \u0275\u0275text(24, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docTypeForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docTypeForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docTypeForm.requiredSides);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docTypeForm.sortOrder);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docTypeForm.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.savingDocType);
  }
}
function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4, "Delete this item?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 29)(6, "button", 37);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.executeDelete());
    });
    \u0275\u0275text(7, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 22);
    \u0275\u0275listener("click", function SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(9, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.name);
  }
}
function SetupFieldsComponent_mat_card_4_div_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_1_Template, 19, 9, "ng-container", 32)(2, SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_2_Template, 25, 6, "ng-container", 32)(3, SetupFieldsComponent_mat_card_4_div_9_div_14_ng_container_3_Template, 10, 1, "ng-container", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("value-row--editing", ctx_r1.editingDocTypeId === row_r20.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingDocTypeId !== row_r20.id && !ctx_r1.isConfirmingDelete("docType", row_r20.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingDocTypeId === row_r20.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isConfirmingDelete("docType", row_r20.id));
  }
}
function SetupFieldsComponent_mat_card_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7, "Sides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 45);
    \u0275\u0275text(9, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 29);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, SetupFieldsComponent_mat_card_4_div_9_div_14_Template, 4, 5, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.documentTypes);
  }
}
function SetupFieldsComponent_mat_card_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " No document types configured. ");
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_mat_card_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 3)(1, "mat-tab-group", 39);
    \u0275\u0275listener("selectedIndexChange", function SetupFieldsComponent_mat_card_4_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange($event));
    });
    \u0275\u0275template(2, SetupFieldsComponent_mat_card_4_mat_tab_2_Template, 8, 6, "mat-tab", 40);
    \u0275\u0275elementStart(3, "mat-tab", 41)(4, "div", 4)(5, "div", 5);
    \u0275\u0275template(6, SetupFieldsComponent_mat_card_4_button_6_Template, 4, 0, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SetupFieldsComponent_mat_card_4_div_7_Template, 2, 0, "div", 7)(8, SetupFieldsComponent_mat_card_4_div_8_Template, 25, 6, "div", 8)(9, SetupFieldsComponent_mat_card_4_div_9_Template, 15, 1, "div", 9)(10, SetupFieldsComponent_mat_card_4_div_10_Template, 2, 0, "div", 10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("selectedIndex", ctx_r1.activeTabIndex);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.setupTabs);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.addingDocType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingDocTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addingDocType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingDocTypes && ctx_r1.documentTypes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingDocTypes && ctx_r1.documentTypes.length === 0 && !ctx_r1.addingDocType);
  }
}
var SETUP_TABS = [
  { label: "Payment Types", category: "PaymentType" },
  { label: "ID Types", category: "IdType" },
  { label: "Purposes", category: "Purpose" },
  { label: "Source of Fund", category: "SourceOfFund" },
  { label: "Countries", category: "Country" },
  { label: "Currencies", category: "Currency" }
];
function emptySetupField(category) {
  return { id: 0, category, code: "", name: "", description: "", isActive: true, sortOrder: 0 };
}
function emptyDocumentType() {
  return { id: 0, name: "", code: "", requiredSides: 1, isActive: true, sortOrder: 0 };
}
function emptySystemSetting() {
  return { id: 0, key: "", value: "", description: "" };
}
var SetupFieldsComponent = class _SetupFieldsComponent {
  constructor(api, notify, route) {
    this.api = api;
    this.notify = notify;
    this.route = route;
    this.mode = "setup";
    this.pageTitle = "Setup";
    this.setupTabs = SETUP_TABS;
    this.activeTabIndex = 0;
    this.setupFields = [];
    this.loadingSetupFields = false;
    this.editingSetupFieldId = null;
    this.addingSetupField = false;
    this.setupFieldForm = emptySetupField("");
    this.savingSetupField = false;
    this.documentTypes = [];
    this.loadingDocTypes = false;
    this.editingDocTypeId = null;
    this.addingDocType = false;
    this.docTypeForm = emptyDocumentType();
    this.savingDocType = false;
    this.systemSettings = [];
    this.loadingSettings = false;
    this.editingSettingId = null;
    this.addingSetting = false;
    this.settingForm = emptySystemSetting();
    this.savingSetting = false;
    this.predefinedSettingKeys = [
      "MinRegistrationAge",
      "MaxRegistrationAge",
      "MaxDailyTransactionAmount",
      "MaxSingleTransactionAmount",
      "DefaultCurrency",
      "SessionTimeoutMinutes",
      "PasswordMinLength",
      "RequireEmailVerification",
      "MaintenanceMode",
      "SupportEmail"
    ];
    this.confirmDeleteId = null;
    this.confirmDeleteType = null;
  }
  ngOnInit() {
    const path = this.route.snapshot.routeConfig?.path || "";
    if (path === "static-values") {
      this.mode = "static";
      this.pageTitle = "Static Values";
      this.activeTabIndex = 0;
    } else {
      this.mode = "setup";
      this.pageTitle = "Setup";
      this.activeTabIndex = 0;
    }
    this.loadCurrentTabData();
  }
  // ---------------------------------------------------------------------------
  // Tab change
  // ---------------------------------------------------------------------------
  onTabChange(index) {
    this.activeTabIndex = index;
    this.cancelAllEditing();
    this.loadCurrentTabData();
  }
  loadCurrentTabData() {
    if (this.mode === "static") {
      this.loadSystemSettings();
    } else {
      if (this.activeTabIndex <= 5) {
        this.loadSetupFields(this.setupTabs[this.activeTabIndex].category);
      } else if (this.activeTabIndex === 6) {
        this.loadDocumentTypes();
      }
    }
  }
  cancelAllEditing() {
    this.editingSetupFieldId = null;
    this.addingSetupField = false;
    this.editingDocTypeId = null;
    this.addingDocType = false;
    this.editingSettingId = null;
    this.addingSetting = false;
    this.confirmDeleteId = null;
    this.confirmDeleteType = null;
  }
  // ---------------------------------------------------------------------------
  // Setup Fields CRUD
  // ---------------------------------------------------------------------------
  get currentCategory() {
    return this.activeTabIndex <= 5 ? this.setupTabs[this.activeTabIndex].category : "";
  }
  loadSetupFields(category) {
    this.loadingSetupFields = true;
    this.api.getSetupFields(category).subscribe({
      next: (res) => {
        this.setupFields = res?.success && res.data ? res.data : [];
        if (!res?.success)
          this.notify.error(res?.message || "Failed to load setup fields.");
        this.loadingSetupFields = false;
      },
      error: () => {
        this.setupFields = [];
        this.notify.error("Could not connect to server.");
        this.loadingSetupFields = false;
      }
    });
  }
  startAddSetupField() {
    this.cancelAllEditing();
    this.addingSetupField = true;
    this.setupFieldForm = emptySetupField(this.currentCategory);
  }
  startEditSetupField(item) {
    this.cancelAllEditing();
    this.editingSetupFieldId = item.id;
    this.setupFieldForm = __spreadValues({}, item);
  }
  cancelSetupFieldEdit() {
    this.editingSetupFieldId = null;
    this.addingSetupField = false;
  }
  saveSetupField() {
    if (!this.setupFieldForm.code?.trim() || !this.setupFieldForm.name?.trim()) {
      this.notify.error("Code and Name are required.");
      return;
    }
    this.savingSetupField = true;
    const dto = {
      category: this.currentCategory,
      code: this.setupFieldForm.code.trim(),
      name: this.setupFieldForm.name.trim(),
      description: this.setupFieldForm.description?.trim() || "",
      isActive: this.setupFieldForm.isActive,
      sortOrder: this.setupFieldForm.sortOrder || 0
    };
    const obs = this.addingSetupField ? this.api.createSetupField(dto) : this.api.updateSetupField(this.editingSetupFieldId, dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.addingSetupField ? "Field created." : "Field updated.");
          this.cancelSetupFieldEdit();
          this.loadSetupFields(this.currentCategory);
        } else {
          this.notify.error(res?.message || "Failed to save.");
        }
        this.savingSetupField = false;
      },
      error: () => {
        this.notify.error("Server error.");
        this.savingSetupField = false;
      }
    });
  }
  confirmDeleteSetupField(item) {
    this.confirmDeleteId = item.id;
    this.confirmDeleteType = "setupField";
  }
  deleteSetupField(id) {
    this.api.deleteSetupField(id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Field deleted.");
          this.loadSetupFields(this.currentCategory);
        } else {
          this.notify.error(res?.message || "Failed to delete.");
        }
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      },
      error: () => {
        this.notify.error("Server error.");
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Document Types CRUD
  // ---------------------------------------------------------------------------
  loadDocumentTypes() {
    this.loadingDocTypes = true;
    this.api.getDocumentTypes().subscribe({
      next: (res) => {
        this.documentTypes = res?.success && res.data ? res.data : [];
        if (!res?.success)
          this.notify.error(res?.message || "Failed to load document types.");
        this.loadingDocTypes = false;
      },
      error: () => {
        this.documentTypes = [];
        this.notify.error("Could not connect to server.");
        this.loadingDocTypes = false;
      }
    });
  }
  startAddDocType() {
    this.cancelAllEditing();
    this.addingDocType = true;
    this.docTypeForm = emptyDocumentType();
  }
  startEditDocType(item) {
    this.cancelAllEditing();
    this.editingDocTypeId = item.id;
    this.docTypeForm = __spreadValues({}, item);
  }
  cancelDocTypeEdit() {
    this.editingDocTypeId = null;
    this.addingDocType = false;
  }
  saveDocType() {
    if (!this.docTypeForm.name?.trim() || !this.docTypeForm.code?.trim()) {
      this.notify.error("Name and Code are required.");
      return;
    }
    this.savingDocType = true;
    const dto = {
      name: this.docTypeForm.name.trim(),
      code: this.docTypeForm.code.trim(),
      requiredSides: this.docTypeForm.requiredSides || 1,
      isActive: this.docTypeForm.isActive,
      sortOrder: this.docTypeForm.sortOrder || 0
    };
    const obs = this.addingDocType ? this.api.createDocumentType(dto) : this.api.updateDocumentType(this.editingDocTypeId, dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.addingDocType ? "Document type created." : "Document type updated.");
          this.cancelDocTypeEdit();
          this.loadDocumentTypes();
        } else {
          this.notify.error(res?.message || "Failed to save.");
        }
        this.savingDocType = false;
      },
      error: () => {
        this.notify.error("Server error.");
        this.savingDocType = false;
      }
    });
  }
  confirmDeleteDocType(item) {
    this.confirmDeleteId = item.id;
    this.confirmDeleteType = "docType";
  }
  deleteDocType(id) {
    this.api.deleteDocumentType(id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Document type deleted.");
          this.loadDocumentTypes();
        } else {
          this.notify.error(res?.message || "Failed to delete.");
        }
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      },
      error: () => {
        this.notify.error("Server error.");
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // System Settings CRUD
  // ---------------------------------------------------------------------------
  loadSystemSettings() {
    this.loadingSettings = true;
    this.api.getSystemSettings().subscribe({
      next: (res) => {
        this.systemSettings = res?.success && res.data ? res.data : [];
        if (!res?.success)
          this.notify.error(res?.message || "Failed to load settings.");
        this.loadingSettings = false;
      },
      error: () => {
        this.systemSettings = [];
        this.notify.error("Could not connect to server.");
        this.loadingSettings = false;
      }
    });
  }
  startAddSetting() {
    this.cancelAllEditing();
    this.addingSetting = true;
    this.settingForm = emptySystemSetting();
  }
  startEditSetting(item) {
    this.cancelAllEditing();
    this.editingSettingId = item.id;
    this.settingForm = __spreadValues({}, item);
  }
  cancelSettingEdit() {
    this.editingSettingId = null;
    this.addingSetting = false;
  }
  saveSetting() {
    if (!this.settingForm.key?.trim() || !this.settingForm.value?.trim()) {
      this.notify.error("Key and Value are required.");
      return;
    }
    this.savingSetting = true;
    const dto = {
      id: this.addingSetting ? 0 : this.editingSettingId,
      key: this.settingForm.key.trim(),
      value: this.settingForm.value.trim(),
      description: this.settingForm.description?.trim() || ""
    };
    this.api.saveSystemSetting(dto).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.addingSetting ? "Setting created." : "Setting updated.");
          this.cancelSettingEdit();
          this.loadSystemSettings();
        } else {
          this.notify.error(res?.message || "Failed to save.");
        }
        this.savingSetting = false;
      },
      error: () => {
        this.notify.error("Server error.");
        this.savingSetting = false;
      }
    });
  }
  confirmDeleteSetting(item) {
    this.confirmDeleteId = item.id;
    this.confirmDeleteType = "setting";
  }
  deleteSetting(id) {
    this.api.deleteSystemSetting(id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Setting deleted.");
          this.loadSystemSettings();
        } else {
          this.notify.error(res?.message || "Failed to delete.");
        }
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      },
      error: () => {
        this.notify.error("Server error.");
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Delete confirmation helpers
  // ---------------------------------------------------------------------------
  isConfirmingDelete(type, id) {
    return this.confirmDeleteType === type && this.confirmDeleteId === id;
  }
  cancelDelete() {
    this.confirmDeleteId = null;
    this.confirmDeleteType = null;
  }
  executeDelete() {
    if (!this.confirmDeleteId || !this.confirmDeleteType)
      return;
    const id = this.confirmDeleteId;
    switch (this.confirmDeleteType) {
      case "setupField":
        this.deleteSetupField(id);
        break;
      case "docType":
        this.deleteDocType(id);
        break;
      case "setting":
        this.deleteSetting(id);
        break;
    }
  }
  // ---------------------------------------------------------------------------
  // Utility: available predefined keys (filter out already used ones)
  // ---------------------------------------------------------------------------
  get availableSettingKeys() {
    const usedKeys = new Set(this.systemSettings.map((s) => s.key));
    if (this.editingSettingId !== null) {
      usedKeys.delete(this.settingForm.key);
    }
    return this.predefinedSettingKeys.filter((k) => !usedKeys.has(k));
  }
  getDefaultValueForKey(key) {
    const defaults = {
      MinRegistrationAge: "16",
      MaxRegistrationAge: "99",
      MaxDailyTransactionAmount: "10000",
      MaxSingleTransactionAmount: "5000",
      DefaultCurrency: "USD",
      SessionTimeoutMinutes: "30",
      PasswordMinLength: "8",
      RequireEmailVerification: "true",
      MaintenanceMode: "false",
      SupportEmail: "support@example.com"
    };
    return defaults[key] || "";
  }
  onSettingKeySelected(key) {
    if (!this.settingForm.value) {
      this.settingForm.value = this.getDefaultValueForKey(key);
    }
  }
  static {
    this.\u0275fac = function SetupFieldsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupFieldsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupFieldsComponent, selectors: [["app-setup-fields"]], decls: 5, vars: 3, consts: [[1, "setup-fields-page"], [1, "page-title"], ["appearance", "outlined", 4, "ngIf"], ["appearance", "outlined"], [1, "tab-content"], [1, "tab-toolbar"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "loading-row", 4, "ngIf"], ["class", "value-row value-row--add", 4, "ngIf"], ["class", "value-list", 4, "ngIf"], ["class", "empty-text", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "loading-row"], ["diameter", "32"], [1, "value-row", "value-row--add"], [1, "value-row__form"], ["appearance", "outline"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "ngModelChange", "ngModel"], [1, "value-row__actions"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["mat-button", "", 3, "click"], [3, "value"], [1, "value-list"], [1, "value-row", "value-row--header"], [1, "col-name"], [1, "col-code"], [1, "col-desc"], [1, "col-actions"], ["class", "value-row", 3, "value-row--editing", 4, "ngFor", "ngForOf"], [1, "value-row"], [4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "matTooltip", "Delete", "color", "warn", 3, "click"], ["matInput", "", "disabled", "", 3, "value"], [1, "confirm-text"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "empty-text"], ["animationDuration", "200ms", 3, "selectedIndexChange", "selectedIndex"], [3, "label", 4, "ngFor", "ngForOf"], ["label", "Document Types"], [3, "label"], ["appearance", "outline", 1, "narrow-field"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [1, "col-sort"], [1, "col-status"], [1, "badge"], ["matInput", "", "type", "number", "min", "1", "max", "4", 3, "ngModelChange", "ngModel"]], template: function SetupFieldsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, SetupFieldsComponent_mat_card_3_Template, 8, 5, "mat-card", 2)(4, SetupFieldsComponent_mat_card_4_Template, 11, 7, "mat-card", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "static");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "setup");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, MatCardModule, MatCard, MatTabsModule, MatTab, MatTabGroup, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatSlideToggleModule, MatSlideToggle, MatProgressSpinnerModule, MatProgressSpinner, MatTooltipModule, MatTooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.setup-fields-page[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 16px 0;\n}\n.tab-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n.loading-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 32px;\n}\n.value-list[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.value-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n  gap: 12px;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 13px;\n  min-height: 44px;\n}\n.value-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.value-row--header[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  min-height: 38px;\n}\n.value-row--add[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: stretch;\n  padding: 16px;\n  margin-bottom: 12px;\n  background: #f0f7ff;\n  border: 1px dashed #93c5fd;\n  border-radius: 8px;\n}\n.value-row--editing[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 14px 16px;\n}\n.value-row[_ngcontent-%COMP%]:hover:not(.value-row--header):not(.value-row--add):not(.value-row--editing) {\n  background: #fafafa;\n}\n.col-code[_ngcontent-%COMP%] {\n  flex: 0 0 100px;\n  min-width: 80px;\n  font-family: monospace;\n  color: #6b7280;\n}\n.col-name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.col-desc[_ngcontent-%COMP%] {\n  flex: 1.5;\n  min-width: 100px;\n  color: #6b7280;\n}\n.col-sort[_ngcontent-%COMP%] {\n  flex: 0 0 60px;\n  text-align: center;\n  color: #6b7280;\n}\n.col-status[_ngcontent-%COMP%] {\n  flex: 0 0 80px;\n  text-align: center;\n}\n.col-actions[_ngcontent-%COMP%] {\n  flex: 0 0 90px;\n  text-align: right;\n  white-space: nowrap;\n}\n.value-row__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n.value-row__form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n}\n.value-row__form[_ngcontent-%COMP%]   .narrow-field[_ngcontent-%COMP%] {\n  flex: 0 0 80px;\n  min-width: 80px;\n}\n.value-row__form[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.value-row__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background: #fbe9e7;\n  color: #c62828;\n}\n.confirm-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: #c62828;\n}\n.empty-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 16px;\n  color: #999;\n  font-size: 14px;\n}\n.dark-mode[_nghost-%COMP%]   .setup-fields-page[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .setup-fields-page[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .value-list[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .value-list[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .value-row[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .value-row[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_nghost-%COMP%]   .value-row--header[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .value-row--header[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .value-row--add[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .value-row--add[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.08);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .value-row--editing[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .value-row--editing[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.06);\n}\n.dark-mode[_nghost-%COMP%]   .value-row[_ngcontent-%COMP%]:hover:not(.value-row--header):not(.value-row--add):not(.value-row--editing), .dark-mode   [_nghost-%COMP%]   .value-row[_ngcontent-%COMP%]:hover:not(.value-row--header):not(.value-row--add):not(.value-row--editing) {\n  background: rgba(255, 255, 255, 0.03);\n}\n.dark-mode[_nghost-%COMP%]   .col-code[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .col-code[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .col-name[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .col-name[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .col-desc[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .col-desc[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .col-sort[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .col-sort[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .badge-active[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .badge-active[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 50, 0.2);\n  color: #4ade80;\n}\n.dark-mode[_nghost-%COMP%]   .badge-inactive[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .badge-inactive[_ngcontent-%COMP%] {\n  background: rgba(198, 40, 40, 0.2);\n  color: #fca5a5;\n}\n.dark-mode[_nghost-%COMP%]   .confirm-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .confirm-text[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.dark-mode[_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n@media (max-width: 768px) {\n  .value-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .value-row[_ngcontent-%COMP%]   .col-desc[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .value-row[_ngcontent-%COMP%]   .col-sort[_ngcontent-%COMP%] {\n    flex: 0 0 40px;\n  }\n}\n/*# sourceMappingURL=setup-fields.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupFieldsComponent, [{
    type: Component,
    args: [{ selector: "app-setup-fields", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatCardModule,
      MatTabsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      MatSlideToggleModule,
      MatProgressSpinnerModule,
      MatTooltipModule
    ], template: `<div class="setup-fields-page">
  <h2 class="page-title">{{ pageTitle }}</h2>

  <!-- STATIC VALUES MODE: System Settings only -->
  <mat-card appearance="outlined" *ngIf="mode === 'static'">
    <div class="tab-content">
      <div class="tab-toolbar">
        <button mat-raised-button color="primary" (click)="startAddSetting()" *ngIf="!addingSetting">
          <mat-icon>add</mat-icon> Add Setting
        </button>
      </div>

      <div *ngIf="loadingSettings" class="loading-row"><mat-spinner diameter="32"></mat-spinner></div>

      <!-- Add New Row -->
      <div class="value-row value-row--add" *ngIf="addingSetting">
        <div class="value-row__form">
          <mat-form-field appearance="outline">
            <mat-label>Key</mat-label>
            <mat-select [(ngModel)]="settingForm.key" (ngModelChange)="onSettingKeySelected($event)">
              <mat-option *ngFor="let k of availableSettingKeys" [value]="k">{{ k }}</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Value</mat-label>
            <input matInput [(ngModel)]="settingForm.value">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Description</mat-label>
            <input matInput [(ngModel)]="settingForm.description">
          </mat-form-field>
        </div>
        <div class="value-row__actions">
          <button mat-raised-button color="primary" (click)="saveSetting()" [disabled]="savingSetting">Save</button>
          <button mat-button (click)="cancelSettingEdit()">Cancel</button>
        </div>
      </div>

      <!-- Rows List -->
      <div class="value-list" *ngIf="!loadingSettings && systemSettings.length > 0">
        <div class="value-row value-row--header">
          <span class="col-name">Key</span>
          <span class="col-code">Value</span>
          <span class="col-desc">Description</span>
          <span class="col-actions">Actions</span>
        </div>

        <div *ngFor="let row of systemSettings" class="value-row" [class.value-row--editing]="editingSettingId === row.id">

          <ng-container *ngIf="editingSettingId !== row.id && !isConfirmingDelete('setting', row.id)">
            <span class="col-name">{{ row.key }}</span>
            <span class="col-code">{{ row.value }}</span>
            <span class="col-desc">{{ row.description || '-' }}</span>
            <span class="col-actions">
              <button mat-icon-button matTooltip="Edit" (click)="startEditSetting(row)"><mat-icon>edit</mat-icon></button>
              <button mat-icon-button matTooltip="Delete" color="warn" (click)="confirmDeleteSetting(row)"><mat-icon>delete</mat-icon></button>
            </span>
          </ng-container>

          <ng-container *ngIf="editingSettingId === row.id">
            <div class="value-row__form">
              <mat-form-field appearance="outline">
                <mat-label>Key</mat-label>
                <input matInput [value]="settingForm.key" disabled>
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Value</mat-label>
                <input matInput [(ngModel)]="settingForm.value">
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Description</mat-label>
                <input matInput [(ngModel)]="settingForm.description">
              </mat-form-field>
            </div>
            <div class="value-row__actions">
              <button mat-raised-button color="primary" (click)="saveSetting()" [disabled]="savingSetting">Save</button>
              <button mat-button (click)="cancelSettingEdit()">Cancel</button>
            </div>
          </ng-container>

          <ng-container *ngIf="isConfirmingDelete('setting', row.id)">
            <span class="col-name">{{ row.key }}</span>
            <span class="confirm-text">Delete this setting?</span>
            <span class="col-actions">
              <button mat-raised-button color="warn" (click)="executeDelete()">Yes</button>
              <button mat-button (click)="cancelDelete()">No</button>
            </span>
          </ng-container>
        </div>
      </div>

      <div *ngIf="!loadingSettings && systemSettings.length === 0 && !addingSetting" class="empty-text">
        No settings configured.
      </div>
    </div>
  </mat-card>

  <!-- SETUP MODE: Setup Fields + Document Types -->
  <mat-card appearance="outlined" *ngIf="mode === 'setup'">
    <mat-tab-group (selectedIndexChange)="onTabChange($event)" [selectedIndex]="activeTabIndex" animationDuration="200ms">

      <!-- Setup Field Tabs (0-5) -->
      <mat-tab *ngFor="let tab of setupTabs; let i = index" [label]="tab.label">
        <div class="tab-content">
          <div class="tab-toolbar">
            <button mat-raised-button color="primary" (click)="startAddSetupField()" *ngIf="!addingSetupField">
              <mat-icon>add</mat-icon> Add New
            </button>
          </div>

          <div *ngIf="loadingSetupFields" class="loading-row">
            <mat-spinner diameter="32"></mat-spinner>
          </div>

          <!-- Add New Row -->
          <div class="value-row value-row--add" *ngIf="addingSetupField">
            <div class="value-row__form">
              <mat-form-field appearance="outline">
                <mat-label>Code</mat-label>
                <input matInput [(ngModel)]="setupFieldForm.code">
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Name</mat-label>
                <input matInput [(ngModel)]="setupFieldForm.name">
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Description</mat-label>
                <input matInput [(ngModel)]="setupFieldForm.description">
              </mat-form-field>
              <mat-form-field appearance="outline" class="narrow-field">
                <mat-label>Sort</mat-label>
                <input matInput type="number" [(ngModel)]="setupFieldForm.sortOrder">
              </mat-form-field>
              <mat-slide-toggle [(ngModel)]="setupFieldForm.isActive">Active</mat-slide-toggle>
            </div>
            <div class="value-row__actions">
              <button mat-raised-button color="primary" (click)="saveSetupField()" [disabled]="savingSetupField">Save</button>
              <button mat-button (click)="cancelSetupFieldEdit()">Cancel</button>
            </div>
          </div>

          <!-- Rows List -->
          <div class="value-list" *ngIf="!loadingSetupFields && setupFields.length > 0">
            <!-- Header -->
            <div class="value-row value-row--header">
              <span class="col-code">Code</span>
              <span class="col-name">Name</span>
              <span class="col-desc">Description</span>
              <span class="col-sort">Sort</span>
              <span class="col-status">Status</span>
              <span class="col-actions">Actions</span>
            </div>

            <div *ngFor="let row of setupFields" class="value-row" [class.value-row--editing]="editingSetupFieldId === row.id">

              <!-- View Mode -->
              <ng-container *ngIf="editingSetupFieldId !== row.id && !isConfirmingDelete('setupField', row.id)">
                <span class="col-code">{{ row.code }}</span>
                <span class="col-name">{{ row.name }}</span>
                <span class="col-desc">{{ row.description || '-' }}</span>
                <span class="col-sort">{{ row.sortOrder }}</span>
                <span class="col-status">
                  <span class="badge" [class.badge-active]="row.isActive" [class.badge-inactive]="!row.isActive">
                    {{ row.isActive ? 'Active' : 'Inactive' }}
                  </span>
                </span>
                <span class="col-actions">
                  <button mat-icon-button matTooltip="Edit" (click)="startEditSetupField(row)"><mat-icon>edit</mat-icon></button>
                  <button mat-icon-button matTooltip="Delete" color="warn" (click)="confirmDeleteSetupField(row)"><mat-icon>delete</mat-icon></button>
                </span>
              </ng-container>

              <!-- Edit Mode -->
              <ng-container *ngIf="editingSetupFieldId === row.id">
                <div class="value-row__form">
                  <mat-form-field appearance="outline">
                    <mat-label>Code</mat-label>
                    <input matInput [(ngModel)]="setupFieldForm.code">
                  </mat-form-field>
                  <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput [(ngModel)]="setupFieldForm.name">
                  </mat-form-field>
                  <mat-form-field appearance="outline">
                    <mat-label>Description</mat-label>
                    <input matInput [(ngModel)]="setupFieldForm.description">
                  </mat-form-field>
                  <mat-form-field appearance="outline" class="narrow-field">
                    <mat-label>Sort</mat-label>
                    <input matInput type="number" [(ngModel)]="setupFieldForm.sortOrder">
                  </mat-form-field>
                  <mat-slide-toggle [(ngModel)]="setupFieldForm.isActive">Active</mat-slide-toggle>
                </div>
                <div class="value-row__actions">
                  <button mat-raised-button color="primary" (click)="saveSetupField()" [disabled]="savingSetupField">Save</button>
                  <button mat-button (click)="cancelSetupFieldEdit()">Cancel</button>
                </div>
              </ng-container>

              <!-- Delete Confirm -->
              <ng-container *ngIf="isConfirmingDelete('setupField', row.id)">
                <span class="col-name">{{ row.name }}</span>
                <span class="confirm-text">Delete this item?</span>
                <span class="col-actions">
                  <button mat-raised-button color="warn" (click)="executeDelete()">Yes</button>
                  <button mat-button (click)="cancelDelete()">No</button>
                </span>
              </ng-container>
            </div>
          </div>

          <div *ngIf="!loadingSetupFields && setupFields.length === 0 && !addingSetupField" class="empty-text">
            No items configured. Click "Add New" to get started.
          </div>
        </div>
      </mat-tab>

      <!-- Document Types Tab (index 6) -->
      <mat-tab label="Document Types">
        <div class="tab-content">
          <div class="tab-toolbar">
            <button mat-raised-button color="primary" (click)="startAddDocType()" *ngIf="!addingDocType">
              <mat-icon>add</mat-icon> Add New
            </button>
          </div>

          <div *ngIf="loadingDocTypes" class="loading-row"><mat-spinner diameter="32"></mat-spinner></div>

          <!-- Add New Row -->
          <div class="value-row value-row--add" *ngIf="addingDocType">
            <div class="value-row__form">
              <mat-form-field appearance="outline">
                <mat-label>Name</mat-label>
                <input matInput [(ngModel)]="docTypeForm.name">
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Code</mat-label>
                <input matInput [(ngModel)]="docTypeForm.code">
              </mat-form-field>
              <mat-form-field appearance="outline" class="narrow-field">
                <mat-label>Sides</mat-label>
                <input matInput type="number" [(ngModel)]="docTypeForm.requiredSides" min="1" max="4">
              </mat-form-field>
              <mat-form-field appearance="outline" class="narrow-field">
                <mat-label>Sort</mat-label>
                <input matInput type="number" [(ngModel)]="docTypeForm.sortOrder">
              </mat-form-field>
              <mat-slide-toggle [(ngModel)]="docTypeForm.isActive">Active</mat-slide-toggle>
            </div>
            <div class="value-row__actions">
              <button mat-raised-button color="primary" (click)="saveDocType()" [disabled]="savingDocType">Save</button>
              <button mat-button (click)="cancelDocTypeEdit()">Cancel</button>
            </div>
          </div>

          <!-- Rows List -->
          <div class="value-list" *ngIf="!loadingDocTypes && documentTypes.length > 0">
            <div class="value-row value-row--header">
              <span class="col-name">Name</span>
              <span class="col-code">Code</span>
              <span class="col-sort">Sides</span>
              <span class="col-sort">Sort</span>
              <span class="col-status">Status</span>
              <span class="col-actions">Actions</span>
            </div>

            <div *ngFor="let row of documentTypes" class="value-row" [class.value-row--editing]="editingDocTypeId === row.id">

              <ng-container *ngIf="editingDocTypeId !== row.id && !isConfirmingDelete('docType', row.id)">
                <span class="col-name">{{ row.name }}</span>
                <span class="col-code">{{ row.code }}</span>
                <span class="col-sort">{{ row.requiredSides }}</span>
                <span class="col-sort">{{ row.sortOrder }}</span>
                <span class="col-status">
                  <span class="badge" [class.badge-active]="row.isActive" [class.badge-inactive]="!row.isActive">
                    {{ row.isActive ? 'Active' : 'Inactive' }}
                  </span>
                </span>
                <span class="col-actions">
                  <button mat-icon-button matTooltip="Edit" (click)="startEditDocType(row)"><mat-icon>edit</mat-icon></button>
                  <button mat-icon-button matTooltip="Delete" color="warn" (click)="confirmDeleteDocType(row)"><mat-icon>delete</mat-icon></button>
                </span>
              </ng-container>

              <ng-container *ngIf="editingDocTypeId === row.id">
                <div class="value-row__form">
                  <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput [(ngModel)]="docTypeForm.name">
                  </mat-form-field>
                  <mat-form-field appearance="outline">
                    <mat-label>Code</mat-label>
                    <input matInput [(ngModel)]="docTypeForm.code">
                  </mat-form-field>
                  <mat-form-field appearance="outline" class="narrow-field">
                    <mat-label>Sides</mat-label>
                    <input matInput type="number" [(ngModel)]="docTypeForm.requiredSides" min="1" max="4">
                  </mat-form-field>
                  <mat-form-field appearance="outline" class="narrow-field">
                    <mat-label>Sort</mat-label>
                    <input matInput type="number" [(ngModel)]="docTypeForm.sortOrder">
                  </mat-form-field>
                  <mat-slide-toggle [(ngModel)]="docTypeForm.isActive">Active</mat-slide-toggle>
                </div>
                <div class="value-row__actions">
                  <button mat-raised-button color="primary" (click)="saveDocType()" [disabled]="savingDocType">Save</button>
                  <button mat-button (click)="cancelDocTypeEdit()">Cancel</button>
                </div>
              </ng-container>

              <ng-container *ngIf="isConfirmingDelete('docType', row.id)">
                <span class="col-name">{{ row.name }}</span>
                <span class="confirm-text">Delete this item?</span>
                <span class="col-actions">
                  <button mat-raised-button color="warn" (click)="executeDelete()">Yes</button>
                  <button mat-button (click)="cancelDelete()">No</button>
                </span>
              </ng-container>
            </div>
          </div>

          <div *ngIf="!loadingDocTypes && documentTypes.length === 0 && !addingDocType" class="empty-text">
            No document types configured.
          </div>
        </div>
      </mat-tab>

    </mat-tab-group>
  </mat-card>
</div>
`, styles: ["/* src/app/pages/admin/setup-fields/setup-fields.component.scss */\n:host {\n  display: block;\n}\n.setup-fields-page .page-title {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.tab-content {\n  padding: 16px 0;\n}\n.tab-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n.loading-row {\n  display: flex;\n  justify-content: center;\n  padding: 32px;\n}\n.value-list {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.value-row {\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n  gap: 12px;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 13px;\n  min-height: 44px;\n}\n.value-row:last-child {\n  border-bottom: none;\n}\n.value-row--header {\n  background: #f9fafb;\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  min-height: 38px;\n}\n.value-row--add {\n  flex-direction: column;\n  align-items: stretch;\n  padding: 16px;\n  margin-bottom: 12px;\n  background: #f0f7ff;\n  border: 1px dashed #93c5fd;\n  border-radius: 8px;\n}\n.value-row--editing {\n  background: #eff6ff;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 14px 16px;\n}\n.value-row:hover:not(.value-row--header):not(.value-row--add):not(.value-row--editing) {\n  background: #fafafa;\n}\n.col-code {\n  flex: 0 0 100px;\n  min-width: 80px;\n  font-family: monospace;\n  color: #6b7280;\n}\n.col-name {\n  flex: 1;\n  min-width: 120px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.col-desc {\n  flex: 1.5;\n  min-width: 100px;\n  color: #6b7280;\n}\n.col-sort {\n  flex: 0 0 60px;\n  text-align: center;\n  color: #6b7280;\n}\n.col-status {\n  flex: 0 0 80px;\n  text-align: center;\n}\n.col-actions {\n  flex: 0 0 90px;\n  text-align: right;\n  white-space: nowrap;\n}\n.value-row__form {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n.value-row__form mat-form-field {\n  flex: 1;\n  min-width: 140px;\n}\n.value-row__form .narrow-field {\n  flex: 0 0 80px;\n  min-width: 80px;\n}\n.value-row__form ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.value-row__actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.badge-active {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-inactive {\n  background: #fbe9e7;\n  color: #c62828;\n}\n.confirm-text {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: #c62828;\n}\n.empty-text {\n  text-align: center;\n  padding: 40px 16px;\n  color: #999;\n  font-size: 14px;\n}\n:host-context(.dark-mode) .setup-fields-page .page-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .value-list {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark-mode) .value-row {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark-mode) .value-row--header {\n  background: #334155;\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .value-row--add {\n  background: rgba(59, 130, 246, 0.08);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n:host-context(.dark-mode) .value-row--editing {\n  background: rgba(59, 130, 246, 0.06);\n}\n:host-context(.dark-mode) .value-row:hover:not(.value-row--header):not(.value-row--add):not(.value-row--editing) {\n  background: rgba(255, 255, 255, 0.03);\n}\n:host-context(.dark-mode) .col-code {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .col-name {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .col-desc {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .col-sort {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .badge-active {\n  background: rgba(46, 125, 50, 0.2);\n  color: #4ade80;\n}\n:host-context(.dark-mode) .badge-inactive {\n  background: rgba(198, 40, 40, 0.2);\n  color: #fca5a5;\n}\n:host-context(.dark-mode) .confirm-text {\n  color: #fca5a5;\n}\n:host-context(.dark-mode) .empty-text {\n  color: #64748b;\n}\n@media (max-width: 768px) {\n  .value-row {\n    flex-wrap: wrap;\n  }\n  .value-row .col-desc {\n    display: none;\n  }\n  .value-row .col-sort {\n    flex: 0 0 40px;\n  }\n}\n/*# sourceMappingURL=setup-fields.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupFieldsComponent, { className: "SetupFieldsComponent", filePath: "src/app/pages/admin/setup-fields/setup-fields.component.ts", lineNumber: 106 });
})();
export {
  SetupFieldsComponent
};
//# sourceMappingURL=chunk-DWYT5MVT.js.map
