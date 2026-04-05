import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-D3SW2Q36.js";
import {
  NotificationService
} from "./chunk-3AICMGEY.js";
import "./chunk-TLG473HR.js";
import {
  ApiService
} from "./chunk-JPFLOAIK.js";
import {
  AuthStateService
} from "./chunk-LDWTK5YJ.js";
import "./chunk-R63TWOS6.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-WBW3ZP3W.js";
import {
  Component,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EU7HC72Q.js";
import "./chunk-S5KMCARS.js";

// src/app/pages/admin/compliance-setup/compliance-setup.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400": a0, "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400": a1, "bg-surface-100 text-surface-700 dark:bg-surface-700 dark:text-surface-300": a2 });
function ComplianceSetupComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "circle", 11)(3, "path", 12);
    \u0275\u0275elementEnd()();
  }
}
function ComplianceSetupComponent_div_8_tr_24__svg_path_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 39);
  }
}
function ComplianceSetupComponent_div_8_tr_24__svg_path_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 40);
  }
}
function ComplianceSetupComponent_div_8_tr_24_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 41);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_8_tr_24_ng_container_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteConfirmId = r_r4.id);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 42);
    \u0275\u0275element(3, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function ComplianceSetupComponent_div_8_tr_24_span_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 44)(1, "span", 45);
    \u0275\u0275text(2, "Delete?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_8_tr_24_span_26_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.deleteRule(r_r4);
      return \u0275\u0275resetView(ctx_r1.deleteConfirmId = null);
    });
    \u0275\u0275text(4, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_8_tr_24_span_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteConfirmId = null);
    });
    \u0275\u0275text(6, "No");
    \u0275\u0275elementEnd()();
  }
}
function ComplianceSetupComponent_div_8_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 24)(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 26)(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 26)(11, "span", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 26)(14, "span", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 26)(17, "div", 30)(18, "button", 31);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_8_tr_24_Template_button_click_18_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(r_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 3);
    \u0275\u0275element(20, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 33);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_8_tr_24_Template_button_click_21_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRule(r_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 34);
    \u0275\u0275template(23, ComplianceSetupComponent_div_8_tr_24__svg_path_23_Template, 1, 0, "path", 35)(24, ComplianceSetupComponent_div_8_tr_24__svg_path_24_Template, 1, 0, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ComplianceSetupComponent_div_8_tr_24_ng_container_25_Template, 4, 0, "ng-container", 37)(26, ComplianceSetupComponent_div_8_tr_24_span_26_Template, 7, 0, "span", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.ruleName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.ruleType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getThresholdDisplay(r_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCountriesDisplay(r_r4));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(14, _c0, r_r4.action === "Block", r_r4.action === "Review", r_r4.action !== "Block" && r_r4.action !== "Review"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.action);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", r_r4.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", r_r4.isActive ? "Deactivate rule" : "Activate rule");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", r_r4.isActive ? "text-green-600 dark:text-green-400" : "text-surface-400 dark:text-surface-500");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deleteConfirmId !== r_r4.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deleteConfirmId === r_r4.id);
  }
}
function ComplianceSetupComponent_div_8_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " No compliance rules found. ");
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 15);
    \u0275\u0275element(3, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ComplianceSetupComponent_div_8_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 18)(6, "table", 19)(7, "thead")(8, "tr", 20)(9, "th", 21);
    \u0275\u0275text(10, "Rule Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 21);
    \u0275\u0275text(12, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 21);
    \u0275\u0275text(14, "Threshold / Params");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 21);
    \u0275\u0275text(16, "Countries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 21);
    \u0275\u0275text(18, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 21);
    \u0275\u0275text(20, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 21);
    \u0275\u0275text(22, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, ComplianceSetupComponent_div_8_tr_24_Template, 27, 18, "tr", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, ComplianceSetupComponent_div_8_div_25_Template, 2, 0, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.filteredRules);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredRules.length && !ctx_r1.loading);
  }
}
function ComplianceSetupComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_div_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function ComplianceSetupComponent_div_10_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 61);
    \u0275\u0275text(2, "Threshold Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_div_35_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
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
function ComplianceSetupComponent_div_10_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 61);
    \u0275\u0275text(2, "Time Period (Days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_div_36_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
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
function ComplianceSetupComponent_div_10_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 61);
    \u0275\u0275text(2, "Max Transaction Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_div_37_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
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
function ComplianceSetupComponent_div_10_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275property("value", c_r12.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r12.name);
  }
}
function ComplianceSetupComponent_div_10_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    \u0275\u0275property("value", c_r13.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r13.name);
  }
}
function ComplianceSetupComponent_div_10__svg_svg_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 87);
    \u0275\u0275element(1, "circle", 11)(2, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_div_10__svg_svg_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "path", 88);
    \u0275\u0275elementEnd();
  }
}
function ComplianceSetupComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "h3", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 55);
    \u0275\u0275element(7, "path", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 57);
    \u0275\u0275template(9, ComplianceSetupComponent_div_10_div_9_Template, 2, 1, "div", 58);
    \u0275\u0275elementStart(10, "div", 59)(11, "div", 60)(12, "label", 61);
    \u0275\u0275text(13, "Rule Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.ruleName, $event) || (ctx_r1.form.ruleName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 61);
    \u0275\u0275text(17, "Rule Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.ruleType, $event) || (ctx_r1.form.ruleType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 64);
    \u0275\u0275text(20, "Amount Threshold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 65);
    \u0275\u0275text(22, "Frequency Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 66);
    \u0275\u0275text(24, "Country Restriction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 67);
    \u0275\u0275text(26, "Name Screening");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div")(28, "label", 61);
    \u0275\u0275text(29, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.action, $event) || (ctx_r1.form.action = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(31, "option", 68);
    \u0275\u0275text(32, "Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 69);
    \u0275\u0275text(34, "Block");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, ComplianceSetupComponent_div_10_div_35_Template, 4, 1, "div", 37)(36, ComplianceSetupComponent_div_10_div_36_Template, 4, 1, "div", 37)(37, ComplianceSetupComponent_div_10_div_37_Template, 4, 1, "div", 37);
    \u0275\u0275elementStart(38, "div")(39, "label", 61);
    \u0275\u0275text(40, "Source Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCountry, $event) || (ctx_r1.form.sourceCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(42, "option", 70);
    \u0275\u0275text(43, "-- Any --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, ComplianceSetupComponent_div_10_option_44_Template, 2, 2, "option", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "label", 61);
    \u0275\u0275text(47, "Destination Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCountry, $event) || (ctx_r1.form.destinationCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(49, "option", 70);
    \u0275\u0275text(50, "-- Any --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, ComplianceSetupComponent_div_10_option_51_Template, 2, 2, "option", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 72)(53, "label", 73)(54, "div", 74)(55, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceSetupComponent_div_10_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.isActive, $event) || (ctx_r1.form.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "span", 76)(57, "span", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 78);
    \u0275\u0275text(59, "Active");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(60, "div", 79)(61, "button", 80);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_10_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275text(62, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 81);
    \u0275\u0275listener("click", function ComplianceSetupComponent_div_10_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRule());
    });
    \u0275\u0275template(64, ComplianceSetupComponent_div_10__svg_svg_64_Template, 3, 0, "svg", 82)(65, ComplianceSetupComponent_div_10__svg_svg_65_Template, 2, 0, "svg", 83);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Rule" : "Create Rule");
    \u0275\u0275advance(5);
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
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destinationCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.isActive);
    \u0275\u0275advance(8);
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
    this.deleteConfirmId = null;
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplianceSetupComponent, selectors: [["app-compliance-setup"]], decls: 11, vars: 4, consts: [[1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-brand-600", "text-white", "hover:bg-brand-700", "transition", "text-sm", "font-medium", "shadow-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "relative", "mb-4", "max-w-md"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search rules...", 1, "w-full", "pl-10", "pr-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "border-b", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-300"], ["scope", "col", 1, "px-4", "py-3", "font-semibold"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], ["class", "text-center py-12 text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100", "font-medium"], [1, "px-4", "py-3"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "text-xs", "font-medium", "rounded-full", "bg-blue-100", "text-blue-700", "dark:bg-blue-900/30", "dark:text-blue-400"], [1, "px-4", "py-3", "text-surface-700", "dark:text-surface-300"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "text-xs", "font-medium", "rounded-full", 3, "ngClass"], [1, "flex", "items-center", "gap-1"], ["aria-label", "Edit rule", 1, "p-1.5", "rounded-md", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "p-1.5", "rounded-md", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 3, "ngClass"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z", 4, "ngIf"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z", 4, "ngIf"], [4, "ngIf"], ["class", "inline-flex items-center gap-1.5 text-xs", 4, "ngIf"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"], ["aria-label", "Delete rule", 1, "p-1.5", "rounded-md", "text-danger-500", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs"], [1, "text-danger-700", "dark:text-danger-400", "font-medium"], [1, "px-2", "py-0.5", "bg-danger-600", "hover:bg-danger-700", "text-white", "rounded-lg", "text-xs", "font-medium", "transition-colors", 3, "click"], [1, "px-2", "py-0.5", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "rounded-lg", "text-xs", "font-medium", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], [1, "text-center", "py-12", "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "fixed", "inset-0", "z-50", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "rule-form-title", 1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "pointer-events-auto", "max-h-[90vh]", "overflow-y-auto"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-700"], ["id", "rule-form-title", 1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "p-1", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-surface-400", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6", "space-y-4"], ["class", "px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "sm:col-span-2"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], ["type", "text", "required", "", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["value", "AmountThreshold"], ["value", "FrequencyLimit"], ["value", "CountryRestriction"], ["value", "NameScreening"], ["value", "Review"], ["value", "Block"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "sm:col-span-2", "mt-2"], [1, "flex", "items-center", "gap-2", "cursor-pointer"], [1, "relative", "inline-block", "w-10", "h-5", "align-middle", "select-none", "transition", "duration-200", "ease-in"], ["type", "checkbox", 1, "peer", "absolute", "opacity-0", "w-0", "h-0", 3, "ngModelChange", "ngModel"], [1, "block", "w-10", "h-5", "rounded-full", "bg-surface-300", "dark:bg-surface-600", "shadow-inner", "peer-checked:bg-brand-600", "transition-colors"], [1, "absolute", "block", "w-3", "h-3", "mt-1", "ml-1", "rounded-full", "shadow", "inset-y-0", "left-0", "focus-within:shadow-outline", "transition-transform", "duration-200", "ease-in-out", "bg-white", "peer-checked:translate-x-5"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-lg", "transition-colors", 3, "click"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-lg", "hover:bg-brand-700", "transition-colors", "disabled:opacity-50", "shadow-sm", 3, "click", "disabled"], ["class", "animate-spin w-4 h-4", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 4, "ngIf"], [1, "px-4", "py-3", "bg-red-50", "dark:bg-red-900/20", "text-red-700", "dark:text-red-400", "text-sm", "rounded-lg"], ["type", "number", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [3, "value"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"]], template: function ComplianceSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Compliance Rule Setup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275listener("click", function ComplianceSetupComponent_Template_button_click_3_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 3);
        \u0275\u0275element(5, "path", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Add Rule ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ComplianceSetupComponent_div_7_Template, 4, 0, "div", 5)(8, ComplianceSetupComponent_div_8_Template, 26, 3, "div", 6)(9, ComplianceSetupComponent_div_9_Template, 1, 0, "div", 7)(10, ComplianceSetupComponent_div_10_Template, 67, 17, "div", 8);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=compliance-setup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComplianceSetupComponent, [{
    type: Component,
    args: [{ selector: "app-compliance-setup", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DatePipe
    ], template: `<!-- Page Header -->
<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
  <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">Compliance Rule Setup</h2>
  <button (click)="openCreate()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition text-sm font-medium shadow-sm">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
    Add Rule
  </button>
</div>

<!-- Loading -->
<div *ngIf="loading" class="flex items-center justify-center py-20">
  <svg class="animate-spin h-10 w-10 text-brand-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
</div>

<!-- Search + Table -->
<div *ngIf="!loading" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
  <div class="relative mb-4 max-w-md">
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    <input type="text" placeholder="Search rules..." [(ngModel)]="searchString" (ngModelChange)="applyFilter()"
      class="w-full pl-10 pr-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left">
      <thead>
        <tr class="border-b border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-300">
          <th scope="col" class="px-4 py-3 font-semibold">Rule Name</th>
          <th scope="col" class="px-4 py-3 font-semibold">Type</th>
          <th scope="col" class="px-4 py-3 font-semibold">Threshold / Params</th>
          <th scope="col" class="px-4 py-3 font-semibold">Countries</th>
          <th scope="col" class="px-4 py-3 font-semibold">Action</th>
          <th scope="col" class="px-4 py-3 font-semibold">Status</th>
          <th scope="col" class="px-4 py-3 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let r of filteredRules" class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100 font-medium">{{ r.ruleName }}</td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ r.ruleType }}</span>
          </td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ getThresholdDisplay(r) }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ getCountriesDisplay(r) }}</td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full" [ngClass]="{
              'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400': r.action === 'Block',
              'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400': r.action === 'Review',
              'bg-surface-100 text-surface-700 dark:bg-surface-700 dark:text-surface-300': r.action !== 'Block' && r.action !== 'Review'
            }">{{ r.action }}</span>
          </td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full" [ngClass]="r.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">
              {{ r.isActive ? 'Active' : 'Inactive' }}
            </span>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-1">
              <button aria-label="Edit rule" (click)="openEdit(r)" class="p-1.5 rounded-md text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
              <button [attr.aria-label]="r.isActive ? 'Deactivate rule' : 'Activate rule'" (click)="toggleRule(r)" class="p-1.5 rounded-md hover:bg-surface-100 dark:hover:bg-surface-700 transition"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" [ngClass]="r.isActive ? 'text-green-600 dark:text-green-400' : 'text-surface-400 dark:text-surface-500'"><path *ngIf="r.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/><path *ngIf="!r.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"/></svg></button>
              <!-- Delete with inline confirmation -->
              <ng-container *ngIf="deleteConfirmId !== r.id">
                <button aria-label="Delete rule" (click)="deleteConfirmId = r.id" class="p-1.5 rounded-md text-danger-500 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
              </ng-container>
              <span *ngIf="deleteConfirmId === r.id" class="inline-flex items-center gap-1.5 text-xs">
                <span class="text-danger-700 dark:text-danger-400 font-medium">Delete?</span>
                <button (click)="deleteRule(r); deleteConfirmId = null" class="px-2 py-0.5 bg-danger-600 hover:bg-danger-700 text-white rounded-lg text-xs font-medium transition-colors">Yes</button>
                <button (click)="deleteConfirmId = null" class="px-2 py-0.5 border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 rounded-lg text-xs font-medium hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">No</button>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div *ngIf="!filteredRules.length && !loading" class="text-center py-12 text-surface-400 dark:text-surface-500 text-sm">
    No compliance rules found.
  </div>
</div>

<!-- ============================================================ -->
<!-- Create / Edit Rule Popup                                      -->
<!-- ============================================================ -->
<div *ngIf="showPopup" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closePopup()"></div>
<div *ngIf="showPopup" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div role="dialog" aria-modal="true" aria-labelledby="rule-form-title"
    class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-2xl pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 id="rule-form-title" class="text-lg font-semibold text-surface-900 dark:text-surface-100">{{ isEditing ? 'Edit Rule' : 'Create Rule' }}</h3>
      <button (click)="closePopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>

    <div class="p-6 space-y-4">
      <div *ngIf="formError" class="px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ formError }}</div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Rule Name *</label>
          <input type="text" [(ngModel)]="form.ruleName" required class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Rule Type</label>
          <select [(ngModel)]="form.ruleType" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option value="AmountThreshold">Amount Threshold</option>
            <option value="FrequencyLimit">Frequency Limit</option>
            <option value="CountryRestriction">Country Restriction</option>
            <option value="NameScreening">Name Screening</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Action</label>
          <select [(ngModel)]="form.action" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option value="Review">Review</option>
            <option value="Block">Block</option>
          </select>
        </div>
        <div *ngIf="showThresholdAmount">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Threshold Amount</label>
          <input type="number" [(ngModel)]="form.thresholdAmount" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div *ngIf="showTimePeriod">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Time Period (Days)</label>
          <input type="number" [(ngModel)]="form.timePeriodDays" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div *ngIf="showMaxTransactionCount">
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Max Transaction Count</label>
          <input type="number" [(ngModel)]="form.maxTransactionCount" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Source Country</label>
          <select [(ngModel)]="form.sourceCountry" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option value="">-- Any --</option>
            <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Destination Country</label>
          <select [(ngModel)]="form.destinationCountry" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
            <option value="">-- Any --</option>
            <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
          </select>
        </div>
        <div class="sm:col-span-2 mt-2">
          <label class="flex items-center gap-2 cursor-pointer">
            <div class="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" [(ngModel)]="form.isActive" class="peer absolute opacity-0 w-0 h-0" />
              <span class="block w-10 h-5 rounded-full bg-surface-300 dark:bg-surface-600 shadow-inner peer-checked:bg-brand-600 transition-colors"></span>
              <span class="absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-200 ease-in-out bg-white peer-checked:translate-x-5"></span>
            </div>
            <span class="text-sm font-medium text-surface-700 dark:text-surface-300">Active</span>
          </label>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closePopup()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition-colors">Cancel</button>
      <button (click)="saveRule()" [disabled]="saving" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-50 shadow-sm">
        <svg *ngIf="saving" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
        <svg *ngIf="!saving" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        {{ isEditing ? 'Update' : 'Create' }}
      </button>
    </div>
  </div>
</div>`, styles: ["/* src/app/pages/admin/compliance-setup/compliance-setup.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=compliance-setup.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplianceSetupComponent, { className: "ComplianceSetupComponent", filePath: "src/app/pages/admin/compliance-setup/compliance-setup.component.ts", lineNumber: 47 });
})();
export {
  ComplianceSetupComponent
};
//# sourceMappingURL=chunk-TPU7Q4HF.js.map
