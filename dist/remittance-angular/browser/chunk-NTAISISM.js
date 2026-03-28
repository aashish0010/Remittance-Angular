import {
  ActivatedRoute
} from "./chunk-FTNGEOQD.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
import "./chunk-MP5DRVCF.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-FEHYQLJK.js";
import {
  Component,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XQC2OG7J.js";

// src/app/pages/admin/setup-fields/setup-fields.component.ts
function SetupFieldsComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function SetupFieldsComponent_button_5_Template_button_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTabChange(i_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.activeTabIndex === i_r2 ? "px-4 py-2 text-sm font-semibold rounded-lg bg-brand-600 text-white shadow-sm transition" : "px-4 py-2 text-sm font-medium rounded-lg text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700 transition");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r4.label, " ");
  }
}
function SetupFieldsComponent_div_10_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_10_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startAddSetupField());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add New ");
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "circle", 19)(3, "path", 20);
    \u0275\u0275elementEnd()();
  }
}
function SetupFieldsComponent_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "label", 24);
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_10_div_4_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.setupFieldForm.code, $event) || (ctx_r2.setupFieldForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "label", 24);
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_10_div_4_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.setupFieldForm.name, $event) || (ctx_r2.setupFieldForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 23)(11, "label", 24);
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_10_div_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.setupFieldForm.description, $event) || (ctx_r2.setupFieldForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 26)(15, "label", 24);
    \u0275\u0275text(16, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_10_div_4_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.setupFieldForm.sortOrder, $event) || (ctx_r2.setupFieldForm.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 28)(19, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_10_div_4_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.setupFieldForm.isActive, $event) || (ctx_r2.setupFieldForm.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 30);
    \u0275\u0275elementStart(21, "span", 31);
    \u0275\u0275text(22, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 32)(24, "button", 33);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_10_div_4_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveSetupField());
    });
    \u0275\u0275text(25, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 34);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_10_div_4_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelSetupFieldEdit());
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.setupFieldForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.setupFieldForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.setupFieldForm.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.setupFieldForm.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.setupFieldForm.isActive);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.savingSetupField);
  }
}
function SetupFieldsComponent_div_10_div_5_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 41)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 51)(14, "button", 52);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_10_div_5_div_14_ng_container_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startEditSetupField(row_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 15);
    \u0275\u0275element(16, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 54);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_10_div_5_div_14_ng_container_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r7);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.confirmDeleteSetupField(row_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 15);
    \u0275\u0275element(19, "path", 55);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r8.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(row_r8.isActive ? "inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400" : "inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger-100 dark:bg-danger-900/30 text-danger-700 dark:text-danger-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r8.isActive ? "Active" : "Inactive", " ");
  }
}
function SetupFieldsComponent_div_10_div_5_div_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 56)(2, "div", 23)(3, "label", 24);
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_10_div_5_div_14_ng_container_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.setupFieldForm.code, $event) || (ctx_r2.setupFieldForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "label", 24);
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_10_div_5_div_14_ng_container_2_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.setupFieldForm.name, $event) || (ctx_r2.setupFieldForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 23)(11, "label", 24);
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_10_div_5_div_14_ng_container_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.setupFieldForm.description, $event) || (ctx_r2.setupFieldForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 26)(15, "label", 24);
    \u0275\u0275text(16, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_10_div_5_div_14_ng_container_2_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.setupFieldForm.sortOrder, $event) || (ctx_r2.setupFieldForm.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 28)(19, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_10_div_5_div_14_ng_container_2_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.setupFieldForm.isActive, $event) || (ctx_r2.setupFieldForm.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 30);
    \u0275\u0275elementStart(21, "span", 31);
    \u0275\u0275text(22, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 57)(24, "button", 33);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_10_div_5_div_14_ng_container_2_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.saveSetupField());
    });
    \u0275\u0275text(25, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 34);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_10_div_5_div_14_ng_container_2_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelSetupFieldEdit());
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.setupFieldForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.setupFieldForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.setupFieldForm.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.setupFieldForm.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.setupFieldForm.isActive);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.savingSetupField);
  }
}
function SetupFieldsComponent_div_10_div_5_div_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5, "Delete this item?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 60)(7, "button", 61);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_10_div_5_div_14_ng_container_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.executeDelete());
    });
    \u0275\u0275text(8, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_10_div_5_div_14_ng_container_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275text(10, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r8.name);
  }
}
function SetupFieldsComponent_div_10_div_5_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, SetupFieldsComponent_div_10_div_5_div_14_ng_container_1_Template, 20, 7, "ng-container", 45)(2, SetupFieldsComponent_div_10_div_5_div_14_ng_container_2_Template, 28, 6, "ng-container", 45)(3, SetupFieldsComponent_div_10_div_5_div_14_ng_container_3_Template, 11, 1, "ng-container", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.editingSetupFieldId === row_r8.id ? "bg-brand-50/50 dark:bg-brand-900/10 p-4" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingSetupFieldId !== row_r8.id && !ctx_r2.isConfirmingDelete("setupField", row_r8.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingSetupFieldId === row_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isConfirmingDelete("setupField", row_r8.id));
  }
}
function SetupFieldsComponent_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 40);
    \u0275\u0275text(9, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 41);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 42);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, SetupFieldsComponent_div_10_div_5_div_14_Template, 4, 5, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.setupFields);
  }
}
function SetupFieldsComponent_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, ' No items configured. Click "Add New" to get started. ');
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275template(2, SetupFieldsComponent_div_10_button_2_Template, 4, 0, "button", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SetupFieldsComponent_div_10_div_3_Template, 4, 0, "div", 10)(4, SetupFieldsComponent_div_10_div_4_Template, 28, 6, "div", 11)(5, SetupFieldsComponent_div_10_div_5_Template, 15, 1, "div", 12)(6, SetupFieldsComponent_div_10_div_6_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.addingSetupField);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingSetupFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.addingSetupField);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingSetupFields && ctx_r2.setupFields.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingSetupFields && ctx_r2.setupFields.length === 0 && !ctx_r2.addingSetupField);
  }
}
function SetupFieldsComponent_div_11_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_11_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startAddDocType());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add New ");
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "circle", 19)(3, "path", 20);
    \u0275\u0275elementEnd()();
  }
}
function SetupFieldsComponent_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "label", 24);
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_11_div_4_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.docTypeForm.name, $event) || (ctx_r2.docTypeForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "label", 24);
    \u0275\u0275text(8, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_11_div_4_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.docTypeForm.code, $event) || (ctx_r2.docTypeForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 26)(11, "label", 24);
    \u0275\u0275text(12, "Sides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_11_div_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.docTypeForm.requiredSides, $event) || (ctx_r2.docTypeForm.requiredSides = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 26)(15, "label", 24);
    \u0275\u0275text(16, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_11_div_4_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.docTypeForm.sortOrder, $event) || (ctx_r2.docTypeForm.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 28)(19, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_11_div_4_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.docTypeForm.isActive, $event) || (ctx_r2.docTypeForm.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 30);
    \u0275\u0275elementStart(21, "span", 31);
    \u0275\u0275text(22, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 32)(24, "button", 33);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_11_div_4_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveDocType());
    });
    \u0275\u0275text(25, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 34);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_11_div_4_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelDocTypeEdit());
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.docTypeForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.docTypeForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.docTypeForm.requiredSides);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.docTypeForm.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.docTypeForm.isActive);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.savingDocType);
  }
}
function SetupFieldsComponent_div_11_div_5_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 41)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 51)(14, "button", 52);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_11_div_5_div_14_ng_container_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const row_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startEditDocType(row_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 15);
    \u0275\u0275element(16, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 54);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_11_div_5_div_14_ng_container_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r13);
      const row_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.confirmDeleteDocType(row_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 15);
    \u0275\u0275element(19, "path", 55);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.requiredSides);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(row_r14.isActive ? "inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400" : "inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger-100 dark:bg-danger-900/30 text-danger-700 dark:text-danger-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r14.isActive ? "Active" : "Inactive", " ");
  }
}
function SetupFieldsComponent_div_11_div_5_div_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 56)(2, "div", 23)(3, "label", 24);
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_11_div_5_div_14_ng_container_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.docTypeForm.name, $event) || (ctx_r2.docTypeForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "label", 24);
    \u0275\u0275text(8, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_11_div_5_div_14_ng_container_2_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.docTypeForm.code, $event) || (ctx_r2.docTypeForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 26)(11, "label", 24);
    \u0275\u0275text(12, "Sides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_11_div_5_div_14_ng_container_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.docTypeForm.requiredSides, $event) || (ctx_r2.docTypeForm.requiredSides = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 26)(15, "label", 24);
    \u0275\u0275text(16, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_11_div_5_div_14_ng_container_2_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.docTypeForm.sortOrder, $event) || (ctx_r2.docTypeForm.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 28)(19, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_11_div_5_div_14_ng_container_2_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.docTypeForm.isActive, $event) || (ctx_r2.docTypeForm.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 30);
    \u0275\u0275elementStart(21, "span", 31);
    \u0275\u0275text(22, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 57)(24, "button", 33);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_11_div_5_div_14_ng_container_2_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.saveDocType());
    });
    \u0275\u0275text(25, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 34);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_11_div_5_div_14_ng_container_2_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelDocTypeEdit());
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.docTypeForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.docTypeForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.docTypeForm.requiredSides);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.docTypeForm.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.docTypeForm.isActive);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.savingDocType);
  }
}
function SetupFieldsComponent_div_11_div_5_div_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5, "Delete this item?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 60)(7, "button", 61);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_11_div_5_div_14_ng_container_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.executeDelete());
    });
    \u0275\u0275text(8, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_11_div_5_div_14_ng_container_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275text(10, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r14.name);
  }
}
function SetupFieldsComponent_div_11_div_5_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, SetupFieldsComponent_div_11_div_5_div_14_ng_container_1_Template, 20, 7, "ng-container", 45)(2, SetupFieldsComponent_div_11_div_5_div_14_ng_container_2_Template, 28, 6, "ng-container", 45)(3, SetupFieldsComponent_div_11_div_5_div_14_ng_container_3_Template, 11, 1, "ng-container", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.editingDocTypeId === row_r14.id ? "bg-brand-50/50 dark:bg-brand-900/10 p-4" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingDocTypeId !== row_r14.id && !ctx_r2.isConfirmingDelete("docType", row_r14.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingDocTypeId === row_r14.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isConfirmingDelete("docType", row_r14.id));
  }
}
function SetupFieldsComponent_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 38);
    \u0275\u0275text(3, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275text(7, "Sides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 40);
    \u0275\u0275text(9, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 41);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 42);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, SetupFieldsComponent_div_11_div_5_div_14_Template, 4, 5, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.documentTypes);
  }
}
function SetupFieldsComponent_div_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, " No document types configured. ");
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275template(2, SetupFieldsComponent_div_11_button_2_Template, 4, 0, "button", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SetupFieldsComponent_div_11_div_3_Template, 4, 0, "div", 10)(4, SetupFieldsComponent_div_11_div_4_Template, 28, 6, "div", 11)(5, SetupFieldsComponent_div_11_div_5_Template, 15, 1, "div", 12)(6, SetupFieldsComponent_div_11_div_6_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.addingDocType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingDocTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.addingDocType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingDocTypes && ctx_r2.documentTypes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingDocTypes && ctx_r2.documentTypes.length === 0 && !ctx_r2.addingDocType);
  }
}
function SetupFieldsComponent_div_12_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_12_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startAddSetting());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add Setting ");
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "circle", 19)(3, "path", 20);
    \u0275\u0275elementEnd()();
  }
}
function SetupFieldsComponent_div_12_div_4_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r19 = ctx.$implicit;
    \u0275\u0275property("value", k_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r19);
  }
}
function SetupFieldsComponent_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "label", 24);
    \u0275\u0275text(4, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_12_div_4_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.settingForm.key, $event) || (ctx_r2.settingForm.key = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SetupFieldsComponent_div_12_div_4_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSettingKeySelected($event));
    });
    \u0275\u0275elementStart(6, "option", 65);
    \u0275\u0275text(7, "Select key");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SetupFieldsComponent_div_12_div_4_option_8_Template, 2, 2, "option", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 23)(10, "label", 24);
    \u0275\u0275text(11, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_12_div_4_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.settingForm.value, $event) || (ctx_r2.settingForm.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 23)(14, "label", 24);
    \u0275\u0275text(15, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_12_div_4_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.settingForm.description, $event) || (ctx_r2.settingForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 32)(18, "button", 33);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_12_div_4_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveSetting());
    });
    \u0275\u0275text(19, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 34);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_12_div_4_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelSettingEdit());
    });
    \u0275\u0275text(21, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.settingForm.key);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.availableSettingKeys);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.settingForm.value);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.settingForm.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.savingSetting);
  }
}
function SetupFieldsComponent_div_12_div_5_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 51)(9, "button", 52);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_12_div_5_div_10_ng_container_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r20);
      const row_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startEditSetting(row_r21));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 15);
    \u0275\u0275element(11, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "button", 54);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_12_div_5_div_10_ng_container_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r20);
      const row_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.confirmDeleteSetting(row_r21));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 15);
    \u0275\u0275element(14, "path", 55);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r21.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21.description || "-");
  }
}
function SetupFieldsComponent_div_12_div_5_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 56)(2, "div", 23)(3, "label", 24);
    \u0275\u0275text(4, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23)(7, "label", 24);
    \u0275\u0275text(8, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_12_div_5_div_10_ng_container_2_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.settingForm.value, $event) || (ctx_r2.settingForm.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 23)(11, "label", 24);
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SetupFieldsComponent_div_12_div_5_div_10_ng_container_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.settingForm.description, $event) || (ctx_r2.settingForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 57)(15, "button", 33);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_12_div_5_div_10_ng_container_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.saveSetting());
    });
    \u0275\u0275text(16, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 34);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_12_div_5_div_10_ng_container_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelSettingEdit());
    });
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.settingForm.key);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.settingForm.value);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.settingForm.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.savingSetting);
  }
}
function SetupFieldsComponent_div_12_div_5_div_10_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5, "Delete this setting?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 60)(7, "button", 61);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_12_div_5_div_10_ng_container_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.executeDelete());
    });
    \u0275\u0275text(8, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function SetupFieldsComponent_div_12_div_5_div_10_ng_container_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275text(10, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r21.key);
  }
}
function SetupFieldsComponent_div_12_div_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, SetupFieldsComponent_div_12_div_5_div_10_ng_container_1_Template, 15, 3, "ng-container", 45)(2, SetupFieldsComponent_div_12_div_5_div_10_ng_container_2_Template, 19, 4, "ng-container", 45)(3, SetupFieldsComponent_div_12_div_5_div_10_ng_container_3_Template, 11, 1, "ng-container", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.editingSettingId === row_r21.id ? "bg-brand-50/50 dark:bg-brand-900/10 p-4" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingSettingId !== row_r21.id && !ctx_r2.isConfirmingDelete("setting", row_r21.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingSettingId === row_r21.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isConfirmingDelete("setting", row_r21.id));
  }
}
function SetupFieldsComponent_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 38);
    \u0275\u0275text(3, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 68);
    \u0275\u0275text(5, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 42);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, SetupFieldsComponent_div_12_div_5_div_10_Template, 4, 5, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r2.systemSettings);
  }
}
function SetupFieldsComponent_div_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, " No settings configured. ");
    \u0275\u0275elementEnd();
  }
}
function SetupFieldsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275template(2, SetupFieldsComponent_div_12_button_2_Template, 4, 0, "button", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SetupFieldsComponent_div_12_div_3_Template, 4, 0, "div", 10)(4, SetupFieldsComponent_div_12_div_4_Template, 22, 5, "div", 11)(5, SetupFieldsComponent_div_12_div_5_Template, 11, 1, "div", 12)(6, SetupFieldsComponent_div_12_div_6_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.addingSetting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingSettings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.addingSetting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingSettings && ctx_r2.systemSettings.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingSettings && ctx_r2.systemSettings.length === 0 && !ctx_r2.addingSetting);
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
      this.activeTabIndex = 7;
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
    if (this.activeTabIndex <= 5) {
      this.loadSetupFields(this.setupTabs[this.activeTabIndex].category);
    } else if (this.activeTabIndex === 6) {
      this.loadDocumentTypes();
    } else if (this.activeTabIndex === 7) {
      this.loadSystemSettings();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupFieldsComponent, selectors: [["app-setup-fields"]], decls: 13, vars: 9, consts: [[1, "space-y-6"], [1, "text-xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "flex-wrap", "gap-1", "mb-4", "border-b", "border-surface-200", "dark:border-surface-700", "pb-2"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "pt-2", 4, "ngIf"], [1, "pt-2"], [1, "flex", "justify-end", "mb-3"], ["class", "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition", 3, "click", 4, "ngIf"], ["class", "flex justify-center py-8", 4, "ngIf"], ["class", "mb-3 rounded-lg border border-dashed border-brand-300 dark:border-brand-600 bg-brand-50 dark:bg-brand-900/20 p-4", 4, "ngIf"], ["class", "rounded-lg border border-surface-200 dark:border-surface-700 overflow-hidden", 4, "ngIf"], ["class", "text-center py-10 text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "text-white", "text-sm", "font-medium", "transition", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], [1, "flex", "justify-center", "py-8"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z", 1, "opacity-75"], [1, "mb-3", "rounded-lg", "border", "border-dashed", "border-brand-300", "dark:border-brand-600", "bg-brand-50", "dark:bg-brand-900/20", "p-4"], [1, "flex", "flex-wrap", "items-center", "gap-2.5", "w-full"], [1, "flex-1", "min-w-[140px]"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "mb-1"], [1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], [1, "w-20"], ["type", "number", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], [1, "inline-flex", "items-center", "gap-2", "cursor-pointer", "self-end", "pb-1"], ["type", "checkbox", 1, "sr-only", "peer", 3, "ngModelChange", "ngModel"], [1, "relative", "w-9", "h-5", "bg-surface-300", "dark:bg-surface-600", "rounded-full", "peer", "peer-checked:bg-brand-600", "after:content-['']", "after:absolute", "after:top-[2px]", "after:left-[2px]", "after:bg-white", "after:rounded-full", "after:h-4", "after:w-4", "after:transition-all", "peer-checked:after:translate-x-full"], [1, "text-sm", "text-surface-700", "dark:text-surface-300"], [1, "flex", "justify-end", "gap-2", "mt-3"], [1, "px-4", "py-2", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "disabled:opacity-50", "text-white", "text-sm", "font-medium", "transition", 3, "click", "disabled"], [1, "px-4", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-sm", "font-medium", "transition", 3, "click"], [1, "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "overflow-hidden"], [1, "flex", "items-center", "px-4", "py-2.5", "gap-3", "bg-surface-50", "dark:bg-surface-700/50", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-surface-500", "dark:text-surface-400"], [1, "flex-[0_0_100px]", "min-w-[80px]"], [1, "flex-1", "min-w-[120px]"], [1, "flex-[1.5]", "min-w-[100px]"], [1, "flex-[0_0_60px]", "text-center"], [1, "flex-[0_0_80px]", "text-center"], [1, "flex-[0_0_90px]", "text-right"], ["class", "border-b border-surface-100 dark:border-surface-700 last:border-b-0", 3, "class", 4, "ngFor", "ngForOf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "last:border-b-0"], [4, "ngIf"], [1, "flex", "items-center", "px-4", "py-2.5", "gap-3", "text-sm", "hover:bg-surface-50", "dark:hover:bg-surface-700/30", "transition"], [1, "flex-[0_0_100px]", "min-w-[80px]", "font-mono", "text-surface-500", "dark:text-surface-400"], [1, "flex-1", "min-w-[120px]", "font-medium", "text-surface-900", "dark:text-surface-100"], [1, "flex-[1.5]", "min-w-[100px]", "text-surface-500", "dark:text-surface-400"], [1, "flex-[0_0_60px]", "text-center", "text-surface-500", "dark:text-surface-400"], [1, "flex-[0_0_90px]", "text-right", "whitespace-nowrap"], ["title", "Edit", 1, "p-1.5", "rounded-md", "hover:bg-surface-200", "dark:hover:bg-surface-600", "text-surface-500", "dark:text-surface-400", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Delete", 1, "p-1.5", "rounded-md", "hover:bg-danger-100", "dark:hover:bg-danger-900/30", "text-danger-500", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "flex", "flex-wrap", "items-center", "gap-2.5", "w-full", "mb-2"], [1, "flex", "justify-end", "gap-2"], [1, "flex", "items-center", "px-4", "py-2.5", "gap-3", "text-sm"], [1, "flex-1", "text-danger-600", "dark:text-danger-400", "font-medium", "text-sm"], [1, "flex-[0_0_90px]", "text-right", "whitespace-nowrap", "flex", "gap-2", "justify-end"], [1, "px-3", "py-1.5", "rounded-lg", "bg-danger-600", "hover:bg-danger-700", "text-white", "text-sm", "font-medium", "transition", 3, "click"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-sm", "font-medium", "transition", 3, "click"], [1, "text-center", "py-10", "text-surface-400", "dark:text-surface-500", "text-sm"], ["type", "number", "min", "1", "max", "4", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex-[0_0_100px]", "min-w-[80px]", "font-mono"], ["disabled", "", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-surface-100", "dark:bg-surface-600", "text-surface-500", "dark:text-surface-400", "cursor-not-allowed", 3, "value"]], template: function SetupFieldsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275template(5, SetupFieldsComponent_button_5_Template, 2, 3, "button", 4);
        \u0275\u0275elementStart(6, "button", 5);
        \u0275\u0275listener("click", function SetupFieldsComponent_Template_button_click_6_listener() {
          return ctx.onTabChange(6);
        });
        \u0275\u0275text(7, " Document Types ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 5);
        \u0275\u0275listener("click", function SetupFieldsComponent_Template_button_click_8_listener() {
          return ctx.onTabChange(7);
        });
        \u0275\u0275text(9, " System Settings ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, SetupFieldsComponent_div_10_Template, 7, 5, "div", 6)(11, SetupFieldsComponent_div_11_Template, 7, 5, "div", 6)(12, SetupFieldsComponent_div_12_Template, 7, 5, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.setupTabs);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.activeTabIndex === 6 ? "px-4 py-2 text-sm font-semibold rounded-lg bg-brand-600 text-white shadow-sm transition" : "px-4 py-2 text-sm font-medium rounded-lg text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700 transition");
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.activeTabIndex === 7 ? "px-4 py-2 text-sm font-semibold rounded-lg bg-brand-600 text-white shadow-sm transition" : "px-4 py-2 text-sm font-medium rounded-lg text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700 transition");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTabIndex <= 5);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTabIndex === 6);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTabIndex === 7);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=setup-fields.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupFieldsComponent, [{
    type: Component,
    args: [{ selector: "app-setup-fields", standalone: true, imports: [
      CommonModule,
      FormsModule
    ], template: `<div class="space-y-6">
  <h2 class="text-xl font-semibold text-surface-900 dark:text-surface-100">{{ pageTitle }}</h2>

  <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">

    <!-- Horizontal Category Tabs -->
    <div class="flex flex-wrap gap-1 mb-4 border-b border-surface-200 dark:border-surface-700 pb-2">
      <button *ngFor="let tab of setupTabs; let i = index"
              (click)="onTabChange(i)"
              [class]="activeTabIndex === i
                ? 'px-4 py-2 text-sm font-semibold rounded-lg bg-brand-600 text-white shadow-sm transition'
                : 'px-4 py-2 text-sm font-medium rounded-lg text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700 transition'">
        {{ tab.label }}
      </button>
      <button (click)="onTabChange(6)"
              [class]="activeTabIndex === 6
                ? 'px-4 py-2 text-sm font-semibold rounded-lg bg-brand-600 text-white shadow-sm transition'
                : 'px-4 py-2 text-sm font-medium rounded-lg text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700 transition'">
        Document Types
      </button>
      <button (click)="onTabChange(7)"
              [class]="activeTabIndex === 7
                ? 'px-4 py-2 text-sm font-semibold rounded-lg bg-brand-600 text-white shadow-sm transition'
                : 'px-4 py-2 text-sm font-medium rounded-lg text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700 transition'">
        System Settings
      </button>
    </div>

    <!-- ================================================================= -->
    <!-- Setup Field Tabs (0-5)                                            -->
    <!-- ================================================================= -->
    <div *ngIf="activeTabIndex <= 5" class="pt-2">
      <!-- Toolbar -->
      <div class="flex justify-end mb-3">
        <button *ngIf="!addingSetupField"
                (click)="startAddSetupField()"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          Add New
        </button>
      </div>

      <!-- Loading -->
      <div *ngIf="loadingSetupFields" class="flex justify-center py-8">
        <svg class="animate-spin h-8 w-8 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>

      <!-- Add New Row -->
      <div *ngIf="addingSetupField"
           class="mb-3 rounded-lg border border-dashed border-brand-300 dark:border-brand-600 bg-brand-50 dark:bg-brand-900/20 p-4">
        <div class="flex flex-wrap items-center gap-2.5 w-full">
          <div class="flex-1 min-w-[140px]">
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Code</label>
            <input [(ngModel)]="setupFieldForm.code"
                   class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
          </div>
          <div class="flex-1 min-w-[140px]">
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Name</label>
            <input [(ngModel)]="setupFieldForm.name"
                   class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
          </div>
          <div class="flex-1 min-w-[140px]">
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Description</label>
            <input [(ngModel)]="setupFieldForm.description"
                   class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
          </div>
          <div class="w-20">
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Sort</label>
            <input type="number" [(ngModel)]="setupFieldForm.sortOrder"
                   class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
          </div>
          <label class="inline-flex items-center gap-2 cursor-pointer self-end pb-1">
            <input type="checkbox" [(ngModel)]="setupFieldForm.isActive"
                   class="sr-only peer">
            <div class="relative w-9 h-5 bg-surface-300 dark:bg-surface-600 rounded-full peer peer-checked:bg-brand-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
            <span class="text-sm text-surface-700 dark:text-surface-300">Active</span>
          </label>
        </div>
        <div class="flex justify-end gap-2 mt-3">
          <button (click)="saveSetupField()" [disabled]="savingSetupField"
                  class="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white text-sm font-medium transition">Save</button>
          <button (click)="cancelSetupFieldEdit()"
                  class="px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 text-sm font-medium transition">Cancel</button>
        </div>
      </div>

      <!-- Rows List -->
      <div *ngIf="!loadingSetupFields && setupFields.length > 0"
           class="rounded-lg border border-surface-200 dark:border-surface-700 overflow-hidden">
        <!-- Header -->
        <div class="flex items-center px-4 py-2.5 gap-3 bg-surface-50 dark:bg-surface-700/50 text-xs font-semibold uppercase tracking-wide text-surface-500 dark:text-surface-400">
          <span class="flex-[0_0_100px] min-w-[80px]">Code</span>
          <span class="flex-1 min-w-[120px]">Name</span>
          <span class="flex-[1.5] min-w-[100px]">Description</span>
          <span class="flex-[0_0_60px] text-center">Sort</span>
          <span class="flex-[0_0_80px] text-center">Status</span>
          <span class="flex-[0_0_90px] text-right">Actions</span>
        </div>

        <div *ngFor="let row of setupFields"
             class="border-b border-surface-100 dark:border-surface-700 last:border-b-0"
             [class]="editingSetupFieldId === row.id ? 'bg-brand-50/50 dark:bg-brand-900/10 p-4' : ''">

          <!-- View Mode -->
          <ng-container *ngIf="editingSetupFieldId !== row.id && !isConfirmingDelete('setupField', row.id)">
            <div class="flex items-center px-4 py-2.5 gap-3 text-sm hover:bg-surface-50 dark:hover:bg-surface-700/30 transition">
              <span class="flex-[0_0_100px] min-w-[80px] font-mono text-surface-500 dark:text-surface-400">{{ row.code }}</span>
              <span class="flex-1 min-w-[120px] font-medium text-surface-900 dark:text-surface-100">{{ row.name }}</span>
              <span class="flex-[1.5] min-w-[100px] text-surface-500 dark:text-surface-400">{{ row.description || '-' }}</span>
              <span class="flex-[0_0_60px] text-center text-surface-500 dark:text-surface-400">{{ row.sortOrder }}</span>
              <span class="flex-[0_0_80px] text-center">
                <span [class]="row.isActive
                  ? 'inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400'
                  : 'inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger-100 dark:bg-danger-900/30 text-danger-700 dark:text-danger-400'">
                  {{ row.isActive ? 'Active' : 'Inactive' }}
                </span>
              </span>
              <span class="flex-[0_0_90px] text-right whitespace-nowrap">
                <button title="Edit" (click)="startEditSetupField(row)"
                        class="p-1.5 rounded-md hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-500 dark:text-surface-400 transition">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                </button>
                <button title="Delete" (click)="confirmDeleteSetupField(row)"
                        class="p-1.5 rounded-md hover:bg-danger-100 dark:hover:bg-danger-900/30 text-danger-500 transition">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
              </span>
            </div>
          </ng-container>

          <!-- Edit Mode -->
          <ng-container *ngIf="editingSetupFieldId === row.id">
            <div class="flex flex-wrap items-center gap-2.5 w-full mb-2">
              <div class="flex-1 min-w-[140px]">
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Code</label>
                <input [(ngModel)]="setupFieldForm.code"
                       class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
              </div>
              <div class="flex-1 min-w-[140px]">
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Name</label>
                <input [(ngModel)]="setupFieldForm.name"
                       class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
              </div>
              <div class="flex-1 min-w-[140px]">
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Description</label>
                <input [(ngModel)]="setupFieldForm.description"
                       class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
              </div>
              <div class="w-20">
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Sort</label>
                <input type="number" [(ngModel)]="setupFieldForm.sortOrder"
                       class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
              </div>
              <label class="inline-flex items-center gap-2 cursor-pointer self-end pb-1">
                <input type="checkbox" [(ngModel)]="setupFieldForm.isActive"
                       class="sr-only peer">
                <div class="relative w-9 h-5 bg-surface-300 dark:bg-surface-600 rounded-full peer peer-checked:bg-brand-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                <span class="text-sm text-surface-700 dark:text-surface-300">Active</span>
              </label>
            </div>
            <div class="flex justify-end gap-2">
              <button (click)="saveSetupField()" [disabled]="savingSetupField"
                      class="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white text-sm font-medium transition">Save</button>
              <button (click)="cancelSetupFieldEdit()"
                      class="px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 text-sm font-medium transition">Cancel</button>
            </div>
          </ng-container>

          <!-- Delete Confirm -->
          <ng-container *ngIf="isConfirmingDelete('setupField', row.id)">
            <div class="flex items-center px-4 py-2.5 gap-3 text-sm">
              <span class="flex-1 min-w-[120px] font-medium text-surface-900 dark:text-surface-100">{{ row.name }}</span>
              <span class="flex-1 text-danger-600 dark:text-danger-400 font-medium text-sm">Delete this item?</span>
              <span class="flex-[0_0_90px] text-right whitespace-nowrap flex gap-2 justify-end">
                <button (click)="executeDelete()"
                        class="px-3 py-1.5 rounded-lg bg-danger-600 hover:bg-danger-700 text-white text-sm font-medium transition">Yes</button>
                <button (click)="cancelDelete()"
                        class="px-3 py-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 text-sm font-medium transition">No</button>
              </span>
            </div>
          </ng-container>
        </div>
      </div>

      <div *ngIf="!loadingSetupFields && setupFields.length === 0 && !addingSetupField"
           class="text-center py-10 text-surface-400 dark:text-surface-500 text-sm">
        No items configured. Click "Add New" to get started.
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- Document Types Tab (index 6)                                      -->
    <!-- ================================================================= -->
    <div *ngIf="activeTabIndex === 6" class="pt-2">
      <!-- Toolbar -->
      <div class="flex justify-end mb-3">
        <button *ngIf="!addingDocType"
                (click)="startAddDocType()"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          Add New
        </button>
      </div>

      <!-- Loading -->
      <div *ngIf="loadingDocTypes" class="flex justify-center py-8">
        <svg class="animate-spin h-8 w-8 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>

      <!-- Add New Row -->
      <div *ngIf="addingDocType"
           class="mb-3 rounded-lg border border-dashed border-brand-300 dark:border-brand-600 bg-brand-50 dark:bg-brand-900/20 p-4">
        <div class="flex flex-wrap items-center gap-2.5 w-full">
          <div class="flex-1 min-w-[140px]">
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Name</label>
            <input [(ngModel)]="docTypeForm.name"
                   class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
          </div>
          <div class="flex-1 min-w-[140px]">
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Code</label>
            <input [(ngModel)]="docTypeForm.code"
                   class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
          </div>
          <div class="w-20">
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Sides</label>
            <input type="number" [(ngModel)]="docTypeForm.requiredSides" min="1" max="4"
                   class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
          </div>
          <div class="w-20">
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Sort</label>
            <input type="number" [(ngModel)]="docTypeForm.sortOrder"
                   class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
          </div>
          <label class="inline-flex items-center gap-2 cursor-pointer self-end pb-1">
            <input type="checkbox" [(ngModel)]="docTypeForm.isActive"
                   class="sr-only peer">
            <div class="relative w-9 h-5 bg-surface-300 dark:bg-surface-600 rounded-full peer peer-checked:bg-brand-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
            <span class="text-sm text-surface-700 dark:text-surface-300">Active</span>
          </label>
        </div>
        <div class="flex justify-end gap-2 mt-3">
          <button (click)="saveDocType()" [disabled]="savingDocType"
                  class="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white text-sm font-medium transition">Save</button>
          <button (click)="cancelDocTypeEdit()"
                  class="px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 text-sm font-medium transition">Cancel</button>
        </div>
      </div>

      <!-- Rows List -->
      <div *ngIf="!loadingDocTypes && documentTypes.length > 0"
           class="rounded-lg border border-surface-200 dark:border-surface-700 overflow-hidden">
        <!-- Header -->
        <div class="flex items-center px-4 py-2.5 gap-3 bg-surface-50 dark:bg-surface-700/50 text-xs font-semibold uppercase tracking-wide text-surface-500 dark:text-surface-400">
          <span class="flex-1 min-w-[120px]">Name</span>
          <span class="flex-[0_0_100px] min-w-[80px]">Code</span>
          <span class="flex-[0_0_60px] text-center">Sides</span>
          <span class="flex-[0_0_60px] text-center">Sort</span>
          <span class="flex-[0_0_80px] text-center">Status</span>
          <span class="flex-[0_0_90px] text-right">Actions</span>
        </div>

        <div *ngFor="let row of documentTypes"
             class="border-b border-surface-100 dark:border-surface-700 last:border-b-0"
             [class]="editingDocTypeId === row.id ? 'bg-brand-50/50 dark:bg-brand-900/10 p-4' : ''">

          <!-- View -->
          <ng-container *ngIf="editingDocTypeId !== row.id && !isConfirmingDelete('docType', row.id)">
            <div class="flex items-center px-4 py-2.5 gap-3 text-sm hover:bg-surface-50 dark:hover:bg-surface-700/30 transition">
              <span class="flex-1 min-w-[120px] font-medium text-surface-900 dark:text-surface-100">{{ row.name }}</span>
              <span class="flex-[0_0_100px] min-w-[80px] font-mono text-surface-500 dark:text-surface-400">{{ row.code }}</span>
              <span class="flex-[0_0_60px] text-center text-surface-500 dark:text-surface-400">{{ row.requiredSides }}</span>
              <span class="flex-[0_0_60px] text-center text-surface-500 dark:text-surface-400">{{ row.sortOrder }}</span>
              <span class="flex-[0_0_80px] text-center">
                <span [class]="row.isActive
                  ? 'inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400'
                  : 'inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger-100 dark:bg-danger-900/30 text-danger-700 dark:text-danger-400'">
                  {{ row.isActive ? 'Active' : 'Inactive' }}
                </span>
              </span>
              <span class="flex-[0_0_90px] text-right whitespace-nowrap">
                <button title="Edit" (click)="startEditDocType(row)"
                        class="p-1.5 rounded-md hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-500 dark:text-surface-400 transition">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                </button>
                <button title="Delete" (click)="confirmDeleteDocType(row)"
                        class="p-1.5 rounded-md hover:bg-danger-100 dark:hover:bg-danger-900/30 text-danger-500 transition">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
              </span>
            </div>
          </ng-container>

          <!-- Edit -->
          <ng-container *ngIf="editingDocTypeId === row.id">
            <div class="flex flex-wrap items-center gap-2.5 w-full mb-2">
              <div class="flex-1 min-w-[140px]">
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Name</label>
                <input [(ngModel)]="docTypeForm.name"
                       class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
              </div>
              <div class="flex-1 min-w-[140px]">
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Code</label>
                <input [(ngModel)]="docTypeForm.code"
                       class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
              </div>
              <div class="w-20">
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Sides</label>
                <input type="number" [(ngModel)]="docTypeForm.requiredSides" min="1" max="4"
                       class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
              </div>
              <div class="w-20">
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Sort</label>
                <input type="number" [(ngModel)]="docTypeForm.sortOrder"
                       class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
              </div>
              <label class="inline-flex items-center gap-2 cursor-pointer self-end pb-1">
                <input type="checkbox" [(ngModel)]="docTypeForm.isActive"
                       class="sr-only peer">
                <div class="relative w-9 h-5 bg-surface-300 dark:bg-surface-600 rounded-full peer peer-checked:bg-brand-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                <span class="text-sm text-surface-700 dark:text-surface-300">Active</span>
              </label>
            </div>
            <div class="flex justify-end gap-2">
              <button (click)="saveDocType()" [disabled]="savingDocType"
                      class="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white text-sm font-medium transition">Save</button>
              <button (click)="cancelDocTypeEdit()"
                      class="px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 text-sm font-medium transition">Cancel</button>
            </div>
          </ng-container>

          <!-- Delete Confirm -->
          <ng-container *ngIf="isConfirmingDelete('docType', row.id)">
            <div class="flex items-center px-4 py-2.5 gap-3 text-sm">
              <span class="flex-1 min-w-[120px] font-medium text-surface-900 dark:text-surface-100">{{ row.name }}</span>
              <span class="flex-1 text-danger-600 dark:text-danger-400 font-medium text-sm">Delete this item?</span>
              <span class="flex-[0_0_90px] text-right whitespace-nowrap flex gap-2 justify-end">
                <button (click)="executeDelete()"
                        class="px-3 py-1.5 rounded-lg bg-danger-600 hover:bg-danger-700 text-white text-sm font-medium transition">Yes</button>
                <button (click)="cancelDelete()"
                        class="px-3 py-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 text-sm font-medium transition">No</button>
              </span>
            </div>
          </ng-container>
        </div>
      </div>

      <div *ngIf="!loadingDocTypes && documentTypes.length === 0 && !addingDocType"
           class="text-center py-10 text-surface-400 dark:text-surface-500 text-sm">
        No document types configured.
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- System Settings Tab (index 7)                                     -->
    <!-- ================================================================= -->
    <div *ngIf="activeTabIndex === 7" class="pt-2">
      <!-- Toolbar -->
      <div class="flex justify-end mb-3">
        <button *ngIf="!addingSetting"
                (click)="startAddSetting()"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          Add Setting
        </button>
      </div>

      <!-- Loading -->
      <div *ngIf="loadingSettings" class="flex justify-center py-8">
        <svg class="animate-spin h-8 w-8 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>

      <!-- Add New Row -->
      <div *ngIf="addingSetting"
           class="mb-3 rounded-lg border border-dashed border-brand-300 dark:border-brand-600 bg-brand-50 dark:bg-brand-900/20 p-4">
        <div class="flex flex-wrap items-center gap-2.5 w-full">
          <div class="flex-1 min-w-[140px]">
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Key</label>
            <select [(ngModel)]="settingForm.key"
                    (ngModelChange)="onSettingKeySelected($event)"
                    class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
              <option value="" disabled>Select key</option>
              <option *ngFor="let k of availableSettingKeys" [value]="k">{{ k }}</option>
            </select>
          </div>
          <div class="flex-1 min-w-[140px]">
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Value</label>
            <input [(ngModel)]="settingForm.value"
                   class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
          </div>
          <div class="flex-1 min-w-[140px]">
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Description</label>
            <input [(ngModel)]="settingForm.description"
                   class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
          </div>
        </div>
        <div class="flex justify-end gap-2 mt-3">
          <button (click)="saveSetting()" [disabled]="savingSetting"
                  class="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white text-sm font-medium transition">Save</button>
          <button (click)="cancelSettingEdit()"
                  class="px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 text-sm font-medium transition">Cancel</button>
        </div>
      </div>

      <!-- Rows List -->
      <div *ngIf="!loadingSettings && systemSettings.length > 0"
           class="rounded-lg border border-surface-200 dark:border-surface-700 overflow-hidden">
        <!-- Header -->
        <div class="flex items-center px-4 py-2.5 gap-3 bg-surface-50 dark:bg-surface-700/50 text-xs font-semibold uppercase tracking-wide text-surface-500 dark:text-surface-400">
          <span class="flex-1 min-w-[120px]">Key</span>
          <span class="flex-[0_0_100px] min-w-[80px] font-mono">Value</span>
          <span class="flex-[1.5] min-w-[100px]">Description</span>
          <span class="flex-[0_0_90px] text-right">Actions</span>
        </div>

        <div *ngFor="let row of systemSettings"
             class="border-b border-surface-100 dark:border-surface-700 last:border-b-0"
             [class]="editingSettingId === row.id ? 'bg-brand-50/50 dark:bg-brand-900/10 p-4' : ''">

          <!-- View mode -->
          <ng-container *ngIf="editingSettingId !== row.id && !isConfirmingDelete('setting', row.id)">
            <div class="flex items-center px-4 py-2.5 gap-3 text-sm hover:bg-surface-50 dark:hover:bg-surface-700/30 transition">
              <span class="flex-1 min-w-[120px] font-medium text-surface-900 dark:text-surface-100">{{ row.key }}</span>
              <span class="flex-[0_0_100px] min-w-[80px] font-mono text-surface-500 dark:text-surface-400">{{ row.value }}</span>
              <span class="flex-[1.5] min-w-[100px] text-surface-500 dark:text-surface-400">{{ row.description || '-' }}</span>
              <span class="flex-[0_0_90px] text-right whitespace-nowrap">
                <button title="Edit" (click)="startEditSetting(row)"
                        class="p-1.5 rounded-md hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-500 dark:text-surface-400 transition">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                </button>
                <button title="Delete" (click)="confirmDeleteSetting(row)"
                        class="p-1.5 rounded-md hover:bg-danger-100 dark:hover:bg-danger-900/30 text-danger-500 transition">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
              </span>
            </div>
          </ng-container>

          <!-- Edit mode -->
          <ng-container *ngIf="editingSettingId === row.id">
            <div class="flex flex-wrap items-center gap-2.5 w-full mb-2">
              <div class="flex-1 min-w-[140px]">
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Key</label>
                <input [value]="settingForm.key" disabled
                       class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-surface-100 dark:bg-surface-600 text-surface-500 dark:text-surface-400 cursor-not-allowed">
              </div>
              <div class="flex-1 min-w-[140px]">
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Value</label>
                <input [(ngModel)]="settingForm.value"
                       class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
              </div>
              <div class="flex-1 min-w-[140px]">
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Description</label>
                <input [(ngModel)]="settingForm.description"
                       class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition">
              </div>
            </div>
            <div class="flex justify-end gap-2">
              <button (click)="saveSetting()" [disabled]="savingSetting"
                      class="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white text-sm font-medium transition">Save</button>
              <button (click)="cancelSettingEdit()"
                      class="px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 text-sm font-medium transition">Cancel</button>
            </div>
          </ng-container>

          <!-- Delete confirm -->
          <ng-container *ngIf="isConfirmingDelete('setting', row.id)">
            <div class="flex items-center px-4 py-2.5 gap-3 text-sm">
              <span class="flex-1 min-w-[120px] font-medium text-surface-900 dark:text-surface-100">{{ row.key }}</span>
              <span class="flex-1 text-danger-600 dark:text-danger-400 font-medium text-sm">Delete this setting?</span>
              <span class="flex-[0_0_90px] text-right whitespace-nowrap flex gap-2 justify-end">
                <button (click)="executeDelete()"
                        class="px-3 py-1.5 rounded-lg bg-danger-600 hover:bg-danger-700 text-white text-sm font-medium transition">Yes</button>
                <button (click)="cancelDelete()"
                        class="px-3 py-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 text-sm font-medium transition">No</button>
              </span>
            </div>
          </ng-container>
        </div>
      </div>

      <div *ngIf="!loadingSettings && systemSettings.length === 0 && !addingSetting"
           class="text-center py-10 text-surface-400 dark:text-surface-500 text-sm">
        No settings configured.
      </div>
    </div>

  </div>
</div>
`, styles: ["/* src/app/pages/admin/setup-fields/setup-fields.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=setup-fields.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupFieldsComponent, { className: "SetupFieldsComponent", filePath: "src/app/pages/admin/setup-fields/setup-fields.component.ts", lineNumber: 86 });
})();
export {
  SetupFieldsComponent
};
//# sourceMappingURL=chunk-NTAISISM.js.map
