import {
  ConfirmDeleteService
} from "./chunk-T26TPJH4.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-T2QRKSFD.js";
import {
  ApiService
} from "./chunk-JODIW3US.js";
import "./chunk-4HHFE2PJ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-PBY7YOCP.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FTA5WDSR.js";
import "./chunk-ZNC4SKHB.js";

// src/app/pages/admin/user-management/roles/roles.component.ts
var _c0 = (a0, a1) => ({ "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400": a0, "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400": a1 });
var _c1 = () => ["Read", "Write", "Approve", "Delete"];
var _c2 = () => [];
var _c3 = (a0) => ({ "opacity-50": a0 });
var _c4 = (a0, a1, a2) => ({ "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400": a0, "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400": a1, "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400": a2 });
function RolesComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function RolesComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New Role ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "h3", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div")(5, "label", 15);
    \u0275\u0275text(6, "Role Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_8_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formName, $event) || (ctx_r1.formName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "label", 15);
    \u0275\u0275text(10, "Portal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_8_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPortal, $event) || (ctx_r1.formPortal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 18);
    \u0275\u0275text(13, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 19);
    \u0275\u0275text(15, "Agent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 20)(17, "label", 15);
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_8_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formDescription, $event) || (ctx_r1.formDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "label", 21)(22, "div", 22)(23, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_8_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formIsActive, $event) || (ctx_r1.formIsActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "div", 24)(25, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 26);
    \u0275\u0275text(27, "Active");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 27)(29, "button", 28);
    \u0275\u0275listener("click", function RolesComponent_div_8_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(30, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 29);
    \u0275\u0275listener("click", function RolesComponent_div_8_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRole());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId ? "Edit Role" : "Create Role", " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPortal);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formDescription);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formIsActive);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx_r1.formName.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId ? "Update" : "Create", " ");
  }
}
function RolesComponent_div_9_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 44);
    \u0275\u0275element(2, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No menus available for this portal ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_9_div_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, " Partial ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_9_div_14_ng_container_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r7, " ");
  }
}
function RolesComponent_div_9_div_14_ng_container_12_div_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 69)(1, "label", 70)(2, "input", 71);
    \u0275\u0275listener("change", function RolesComponent_div_9_div_14_ng_container_12_div_7_span_6_Template_input_change_2_listener() {
      const perm_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.togglePerm(perm_r10.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 73);
    \u0275\u0275element(5, "path", 74);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const perm_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isPermSelected(perm_r10.id));
  }
}
function RolesComponent_div_9_div_14_ng_container_12_div_7_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "span", 76);
    \u0275\u0275elementContainerEnd();
  }
}
function RolesComponent_div_9_div_14_ng_container_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "span", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 64);
    \u0275\u0275element(3, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, RolesComponent_div_9_div_14_ng_container_12_div_7_span_6_Template, 6, 1, "span", 67)(7, RolesComponent_div_9_div_14_ng_container_12_div_7_ng_container_7_Template, 2, 0, "ng-container", 68);
    \u0275\u0275elementStart(8, "span", 69)(9, "label", 70)(10, "input", 71);
    \u0275\u0275listener("change", function RolesComponent_div_9_div_14_ng_container_12_div_7_Template_input_change_10_listener() {
      const menu_r11 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleAllMenuPerms(menu_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 73);
    \u0275\u0275element(13, "path", 74);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(menu_r11.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", menu_r11.permissions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(4, _c2).constructor(4 - menu_r11.permissions.length));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isAllMenuPermsSelected(menu_r11));
  }
}
function RolesComponent_div_9_div_14_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 57)(2, "span", 58);
    \u0275\u0275text(3, " Menu ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RolesComponent_div_9_div_14_ng_container_12_span_4_Template, 2, 1, "span", 59);
    \u0275\u0275elementStart(5, "span", 60);
    \u0275\u0275text(6, " All ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, RolesComponent_div_9_div_14_ng_container_12_div_7_Template, 14, 5, "div", 61);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", group_r6.menus);
  }
}
function RolesComponent_div_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275listener("click", function RolesComponent_div_9_div_14_Template_div_click_1_listener() {
      const group_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSectionExpand(group_r6.section));
    });
    \u0275\u0275elementStart(2, "label", 48);
    \u0275\u0275listener("click", function RolesComponent_div_9_div_14_Template_label_click_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "input", 49, 0);
    \u0275\u0275listener("change", function RolesComponent_div_9_div_14_Template_input_change_3_listener() {
      const group_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSectionPerms(group_r6.menus));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, RolesComponent_div_9_div_14_span_9_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 53);
    \u0275\u0275element(11, "path", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, RolesComponent_div_9_div_14_ng_container_12_Template, 8, 3, "ng-container", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isSectionAllSelected(group_r6.menus));
    \u0275\u0275attribute("data-indeterminate", ctx_r1.isSectionPartialSelected(group_r6.menus) ? "" : null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", group_r6.section, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", group_r6.menus.length, " menu", group_r6.menus.length !== 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSectionPartialSelected(group_r6.menus));
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", !ctx_r1.isSectionExpanded(group_r6.section));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isSectionExpanded(group_r6.section));
  }
}
function RolesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "div")(4, "h3", 33);
    \u0275\u0275text(5, " Assign Permissions \u2014 ");
    \u0275\u0275elementStart(6, "span", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 5);
    \u0275\u0275text(9, " Check a section to grant all its menus, or expand and select individual menu actions. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 36);
    \u0275\u0275template(13, RolesComponent_div_9_div_13_Template, 4, 0, "div", 37)(14, RolesComponent_div_9_div_14_Template, 13, 9, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 39)(16, "span", 40);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 41)(19, "button", 28);
    \u0275\u0275listener("click", function RolesComponent_div_9_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelPermissions());
    });
    \u0275\u0275text(20, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 42);
    \u0275\u0275listener("click", function RolesComponent_div_9_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePermissions());
    });
    \u0275\u0275text(22, " Save Permissions ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.permRoleName);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c0, ctx_r1.permPortalFilter === "Admin", ctx_r1.permPortalFilter === "Agent"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.permPortalFilter, " Portal ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.menusBySection.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.menusBySection);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.selectedPermIds.size, " permission", ctx_r1.selectedPermIds.size !== 1 ? "s" : "", " selected ");
  }
}
function RolesComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "circle", 81)(3, "path", 82);
    \u0275\u0275elementEnd()();
  }
}
function RolesComponent_div_10_div_2_tr_17_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r12.description);
  }
}
function RolesComponent_div_10_div_2_tr_17_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 105)(2, "button", 106);
    \u0275\u0275listener("click", function RolesComponent_div_10_div_2_tr_17_ng_container_19_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r13);
      const role_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEdit(role_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 107);
    \u0275\u0275element(4, "path", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 109);
    \u0275\u0275listener("click", function RolesComponent_div_10_div_2_tr_17_ng_container_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const role_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPermissions(role_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 107);
    \u0275\u0275element(7, "path", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 111);
    \u0275\u0275listener("click", function RolesComponent_div_10_div_2_tr_17_ng_container_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const role_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteRole(role_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 107);
    \u0275\u0275element(10, "path", 112);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", role_r12.userCount > 0);
  }
}
function RolesComponent_div_10_div_2_tr_17_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, " System ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_10_div_2_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 92)(1, "td", 93)(2, "div", 94)(3, "span", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RolesComponent_div_10_div_2_tr_17_span_5_Template, 2, 1, "span", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 93)(7, "span", 97);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 98);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 98);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 93)(14, "div", 99);
    \u0275\u0275element(15, "span", 100);
    \u0275\u0275elementStart(16, "span", 101);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td", 102);
    \u0275\u0275template(19, RolesComponent_div_10_div_2_tr_17_ng_container_19_Template, 11, 1, "ng-container", 103)(20, RolesComponent_div_10_div_2_tr_17_ng_template_20_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r12 = ctx.$implicit;
    const systemBadge_r14 = \u0275\u0275reference(21);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c3, !role_r12.isActive));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(role_r12.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r12.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(14, _c4, role_r12.portal === "Admin", role_r12.portal === "Agent", role_r12.portal === "Customer"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r12.portal, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r12.userCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r12.permissionCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", role_r12.isActive ? "bg-success-500" : "bg-surface-300 dark:bg-surface-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", role_r12.isActive ? "text-success-700 dark:text-success-400" : "text-surface-500 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r12.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", role_r12.roleType !== "SystemAdmin")("ngIfElse", systemBadge_r14);
  }
}
function RolesComponent_div_10_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275text(1, " No roles found. ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "table", 84)(2, "thead", 85)(3, "tr", 86)(4, "th", 87);
    \u0275\u0275text(5, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 87);
    \u0275\u0275text(7, "Portal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 88);
    \u0275\u0275text(9, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 88);
    \u0275\u0275text(11, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 87);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 89);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, RolesComponent_div_10_div_2_tr_17_Template, 22, 18, "tr", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, RolesComponent_div_10_div_2_div_18_Template, 2, 0, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.roles.length === 0);
  }
}
function RolesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, RolesComponent_div_10_div_1_Template, 4, 0, "div", 77)(2, RolesComponent_div_10_div_2_Template, 19, 2, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
  }
}
var MENU_SECTION_MAP = {
  // Admin portal — Dashboard (top-level, own section)
  "/admin/dashboard": "Dashboard",
  // Admin portal — Transactions
  "/admin/transactions": "Transactions",
  // Admin portal — Agent Management
  "/admin/agents": "Agent Management",
  "/admin/setup": "Agent Management",
  // DB url is /admin/setup
  // Admin portal — Customers
  "/admin/customer-register": "Customers",
  "/admin/customer-report": "Customers",
  // Admin portal — Compliance & AML
  "/admin/compliance-setup": "Compliance & AML",
  "/admin/compliance": "Compliance & AML",
  "/admin/sanctions": "Compliance & AML",
  // Admin portal — Operations
  "/admin/rates": "Operations",
  "/admin/commissions": "Operations",
  "/admin/routing": "Operations",
  "/admin/receivers": "Operations",
  // Admin portal — Reports
  "/admin/reports/transactions": "Reports",
  "/admin/reports/agent-statement": "Reports",
  "/admin/reports/commissions": "Reports",
  "/admin/reports/revenue": "Reports",
  "/admin/reports/settlement": "Reports",
  // Admin portal — User Management
  "/admin/user-management/roles": "User Management",
  "/admin/user-management/users": "User Management",
  // Admin portal — System
  "/admin/static-values": "System",
  "/admin/settings": "System",
  // Agent portal — Dashboard
  "/agent/dashboard": "Dashboard",
  // Agent portal — Operations
  "/agent/send": "Operations",
  "/agent/transactions": "Operations",
  "/agent/commissions": "Operations",
  // My Service Charges
  // Agent portal — Reports
  "/agent/reports/statement": "Reports"
};
var RolesComponent = class _RolesComponent {
  constructor(api, confirmDelete) {
    this.api = api;
    this.confirmDelete = confirmDelete;
    this.roles = [];
    this.menus = [];
    this.loading = false;
    this.showForm = false;
    this.editingId = null;
    this.formName = "";
    this.formDescription = "";
    this.formPortal = "Admin";
    this.formIsActive = true;
    this.showPermissions = false;
    this.permRoleId = null;
    this.permRoleName = "";
    this.permPortalFilter = "Admin";
    this.selectedPermIds = /* @__PURE__ */ new Set();
    this.sectionExpanded = {};
  }
  ngOnInit() {
    this.loadRoles();
  }
  loadRoles() {
    this.loading = true;
    this.api.getRoles().subscribe((res) => {
      this.loading = false;
      if (res?.success && res.data) {
        this.roles = res.data;
      }
    });
  }
  openCreate() {
    this.editingId = null;
    this.formName = "";
    this.formDescription = "";
    this.formPortal = "Admin";
    this.formIsActive = true;
    this.showForm = true;
    this.showPermissions = false;
  }
  openEdit(role) {
    if (role.roleType === "SystemAdmin")
      return;
    this.editingId = role.id;
    this.formName = role.name;
    this.formDescription = role.description || "";
    this.formPortal = role.portal;
    this.formIsActive = role.isActive;
    this.showForm = true;
    this.showPermissions = false;
  }
  cancelForm() {
    this.showForm = false;
  }
  saveRole() {
    const dto = {
      name: this.formName,
      description: this.formDescription,
      portal: this.formPortal,
      isActive: this.formIsActive
    };
    const obs = this.editingId ? this.api.updateRole(this.editingId, dto) : this.api.createRole(dto);
    obs.subscribe((res) => {
      if (res?.success) {
        this.showForm = false;
        this.loadRoles();
      }
    });
  }
  deleteRole(role) {
    if (role.roleType === "SystemAdmin")
      return;
    this.confirmDelete.confirm(role.name).then(() => {
      this.api.deleteRole(role.id).subscribe((res) => {
        if (res?.success)
          this.loadRoles();
      });
    }).catch(() => {
    });
  }
  // ── Permission Management ────────────────────────────────────────────────
  openPermissions(role) {
    if (role.roleType === "SystemAdmin")
      return;
    this.permRoleId = role.id;
    this.permRoleName = role.name;
    this.permPortalFilter = role.portal;
    this.showPermissions = true;
    this.showForm = false;
    this.selectedPermIds.clear();
    this.sectionExpanded = {};
    this.api.getRole(role.id).subscribe((res) => {
      if (res?.success && res.data) {
        (res.data.permissions || []).forEach((p) => this.selectedPermIds.add(p.permissionId));
      }
    });
    this.loadMenus(role.portal);
  }
  loadMenus(portal) {
    this.api.getMenusForAssignment(portal).subscribe((res) => {
      if (res?.success && res.data) {
        this.menus = res.data;
      }
    });
  }
  cancelPermissions() {
    this.showPermissions = false;
  }
  savePermissions() {
    if (!this.permRoleId)
      return;
    this.api.assignPermissions(this.permRoleId, Array.from(this.selectedPermIds)).subscribe((res) => {
      if (res?.success) {
        this.showPermissions = false;
        this.loadRoles();
      }
    });
  }
  // ── Individual permission toggles ─────────────────────────────────────────
  isPermSelected(permId) {
    return this.selectedPermIds.has(permId);
  }
  togglePerm(permId) {
    if (this.selectedPermIds.has(permId)) {
      this.selectedPermIds.delete(permId);
    } else {
      this.selectedPermIds.add(permId);
    }
  }
  toggleAllMenuPerms(menu) {
    const allSelected = menu.permissions.every((p) => this.selectedPermIds.has(p.id));
    menu.permissions.forEach((p) => {
      if (allSelected)
        this.selectedPermIds.delete(p.id);
      else
        this.selectedPermIds.add(p.id);
    });
  }
  isAllMenuPermsSelected(menu) {
    return menu.permissions.length > 0 && menu.permissions.every((p) => this.selectedPermIds.has(p.id));
  }
  // ── Section-level permission helpers ─────────────────────────────────────
  get filteredMenus() {
    return this.menus.filter((m) => m.portal === this.permPortalFilter);
  }
  /** Menus grouped by section for hierarchical display */
  get menusBySection() {
    const grouped = {};
    for (const menu of this.filteredMenus) {
      const section = MENU_SECTION_MAP[menu.url] || "Other";
      if (!grouped[section])
        grouped[section] = [];
      grouped[section].push(menu);
    }
    return Object.entries(grouped).map(([section, menus]) => ({ section, menus }));
  }
  /** All permission IDs for a group of menus */
  getSectionPermIds(menus) {
    return menus.flatMap((m) => m.permissions.map((p) => p.id));
  }
  isSectionAllSelected(menus) {
    const ids = this.getSectionPermIds(menus);
    return ids.length > 0 && ids.every((id) => this.selectedPermIds.has(id));
  }
  isSectionPartialSelected(menus) {
    const ids = this.getSectionPermIds(menus);
    const selected = ids.filter((id) => this.selectedPermIds.has(id));
    return selected.length > 0 && selected.length < ids.length;
  }
  toggleSectionPerms(menus) {
    const allSelected = this.isSectionAllSelected(menus);
    const ids = this.getSectionPermIds(menus);
    ids.forEach((id) => {
      if (allSelected)
        this.selectedPermIds.delete(id);
      else
        this.selectedPermIds.add(id);
    });
  }
  // ── Section UI expand/collapse ────────────────────────────────────────────
  toggleSectionExpand(section) {
    this.sectionExpanded[section] = !this.isSectionExpanded(section);
  }
  isSectionExpanded(section) {
    return this.sectionExpanded[section] !== false;
  }
  // ── Checkbox native indeterminate helper ──────────────────────────────────
  // Called via template ref; Angular doesn't bind indeterminate directly
  setSectionCheckboxRef(el, menus) {
    if (el) {
      el.indeterminate = this.isSectionPartialSelected(menus);
    }
  }
  static {
    this.\u0275fac = function RolesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RolesComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ConfirmDeleteService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesComponent, selectors: [["app-roles"]], decls: 11, vars: 4, consts: [["sectionCheckbox", ""], ["systemBadge", ""], [1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm active:scale-95", 3, "click", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-brand-600", "text-white", "rounded-xl", "text-sm", "font-medium", "hover:bg-brand-700", "transition-colors", "shadow-sm", "active:scale-95", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], ["type", "text", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], ["value", "Admin"], ["value", "Agent"], [1, "sm:col-span-2"], [1, "inline-flex", "items-center", "gap-3", "cursor-pointer"], [1, "relative"], ["type", "checkbox", 1, "peer", "sr-only", 3, "ngModelChange", "ngModel"], [1, "w-11", "h-6", "bg-surface-300", "dark:bg-surface-600", "rounded-full", "peer-checked:bg-brand-600", "transition-colors"], [1, "absolute", "left-0.5", "top-0.5", "w-5", "h-5", "bg-white", "rounded-full", "shadow", "transition-transform", "peer-checked:translate-x-5"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "flex", "items-center", "justify-end", "gap-3", "mt-6", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "px-4", "py-2.5", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-xl", "transition-colors", 3, "click"], [1, "px-5", "py-2.5", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-xl", "hover:bg-brand-700", "transition-colors", "shadow-sm", "disabled:opacity-50", "disabled:cursor-not-allowed", "active:scale-95", 3, "click", "disabled"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft", "overflow-hidden"], [1, "px-6", "py-5", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-brand-600", "dark:text-brand-400"], [1, "inline-flex", "items-center", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700/50"], ["class", "flex items-center justify-center py-12 text-sm text-surface-400 dark:text-surface-500", 4, "ngIf"], ["class", "border-0", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "gap-3", "px-6", "py-4", "border-t", "border-surface-200", "dark:border-surface-700", "bg-surface-50/50", "dark:bg-surface-800/30"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-3"], [1, "px-5", "py-2.5", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-xl", "hover:bg-brand-700", "transition-colors", "shadow-sm", "active:scale-95", 3, "click"], [1, "flex", "items-center", "justify-center", "py-12", "text-sm", "text-surface-400", "dark:text-surface-500"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2", "opacity-50"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"], [1, "border-0"], [1, "flex", "items-center", "gap-3", "px-5", "py-3", "bg-surface-50", "dark:bg-surface-700/30", "cursor-pointer", "select-none", "hover:bg-surface-100", "dark:hover:bg-surface-700/50", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-3", "flex-1", "min-w-0", 3, "click"], ["type", "checkbox", 1, "w-4", "h-4", "accent-brand-600", "rounded", "cursor-pointer", "shrink-0", 3, "change", "checked"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-surface-600", "dark:text-surface-300", "truncate"], [1, "ml-1", "text-[10px]", "font-medium", "text-surface-400", "dark:text-surface-500", "shrink-0"], ["class", "ml-auto mr-4 text-[10px] font-medium text-brand-600 dark:text-brand-400 shrink-0", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-surface-400", "dark:text-surface-500", "shrink-0", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 8.25l-7.5 7.5-7.5-7.5"], [4, "ngIf"], [1, "ml-auto", "mr-4", "text-[10px]", "font-medium", "text-brand-600", "dark:text-brand-400", "shrink-0"], [1, "flex", "items-center", "px-5", "py-2", "pl-12", "bg-surface-50/50", "dark:bg-surface-800/30", "border-b", "border-surface-100", "dark:border-surface-700/50"], [1, "flex-[2]", "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-surface-500", "dark:text-surface-400"], ["class", "flex-[0.7] text-center text-[10px] font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400", 4, "ngFor", "ngForOf"], [1, "flex-[0.7]", "text-center", "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-surface-500", "dark:text-surface-400"], ["class", "flex items-center px-5 py-3 pl-12 border-b border-surface-100 dark:border-surface-700/40 last:border-b-0 hover:bg-surface-50 dark:hover:bg-surface-800/40 transition-colors", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "px-5", "py-3", "pl-12", "border-b", "border-surface-100", "dark:border-surface-700/40", "last:border-b-0", "hover:bg-surface-50", "dark:hover:bg-surface-800/40", "transition-colors"], [1, "flex-[2]", "flex", "items-center", "gap-2", "text-[13px]", "font-medium", "text-surface-800", "dark:text-surface-200", "truncate", "pr-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "1.5", 1, "w-4", "h-4", "text-surface-400", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 6h16M4 12h16M4 18h16"], [1, "truncate"], ["class", "flex-[0.7] flex justify-center", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "flex-[0.7]", "flex", "justify-center"], [1, "relative", "inline-flex", "items-center", "cursor-pointer", "group"], ["type", "checkbox", 1, "peer", "sr-only", 3, "change", "checked"], [1, "w-5", "h-5", "rounded-md", "border-2", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "peer-checked:bg-purple-600", "peer-checked:border-purple-600", "flex", "items-center", "justify-center", "transition-all", "duration-150", "group-hover:border-purple-400"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "3", 1, "w-3", "h-3", "text-white", "opacity-0", "peer-checked:opacity-100", "transition-opacity"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], [1, "w-5", "h-5", "rounded-md", "border-2", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "peer-checked:bg-brand-600", "peer-checked:border-brand-600", "flex", "items-center", "justify-center", "transition-all", "duration-150", "group-hover:border-brand-400"], [1, "flex-[0.7]"], ["class", "flex justify-center p-12", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "flex", "justify-center", "p-12"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "whitespace-nowrap"], [1, "bg-surface-50", "dark:bg-surface-700/50"], [1, "border-b", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-300"], ["scope", "col", 1, "px-4", "py-3", "font-semibold"], ["scope", "col", 1, "px-4", "py-3", "font-semibold", "text-center"], ["scope", "col", 1, "px-4", "py-3", "font-semibold", "text-right"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-center py-12 text-surface-500 dark:text-surface-400", 4, "ngIf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors", 3, "ngClass"], [1, "px-4", "py-3"], [1, "flex", "flex-col"], [1, "font-medium", "text-surface-900", "dark:text-surface-100"], ["class", "text-xs text-surface-500 dark:text-surface-400", 4, "ngIf"], [1, "inline-flex", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "px-4", "py-3", "text-center", "text-surface-700", "dark:text-surface-300"], [1, "flex", "items-center", "gap-2"], [1, "w-2", "h-2", "rounded-full", 3, "ngClass"], [1, "text-sm", 3, "ngClass"], [1, "px-4", "py-3", "text-right"], [4, "ngIf", "ngIfElse"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "justify-end", "gap-1"], ["aria-label", "Edit", 1, "p-1.5", "rounded-lg", "text-brand-600", "dark:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4"], ["d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["aria-label", "Assign permissions", "title", "Assign Permissions", 1, "p-1.5", "rounded-lg", "text-surface-600", "dark:text-surface-400", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["aria-label", "Delete", 1, "p-1.5", "rounded-lg", "text-danger-500", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition-colors", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "inline-flex", "px-2.5", "py-1", "rounded-full", "text-xs", "font-medium", "bg-warning-50", "text-warning-700", "dark:bg-warning-900/20", "dark:text-warning-400"], [1, "text-center", "py-12", "text-surface-500", "dark:text-surface-400"]], template: function RolesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h2", 4);
        \u0275\u0275text(4, "Roles & Rights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 5);
        \u0275\u0275text(6, "Create roles and assign menu permissions by section or individual menu");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, RolesComponent_button_7_Template, 4, 0, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, RolesComponent_div_8_Template, 33, 7, "div", 7)(9, RolesComponent_div_9_Template, 23, 10, "div", 8)(10, RolesComponent_div_10_Template, 3, 2, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", !ctx.showForm && !ctx.showPermissions);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPermissions);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showForm && !ctx.showPermissions);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=roles.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesComponent, [{
    type: Component,
    args: [{ selector: "app-roles", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="flex flex-col gap-6">

  <!-- \u2500\u2500 Header \u2500\u2500 -->
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">Roles & Rights</h2>
      <p class="text-sm text-surface-500 dark:text-surface-400 mt-1">Create roles and assign menu permissions by section or individual menu</p>
    </div>
    <button *ngIf="!showForm && !showPermissions" (click)="openCreate()"
      class="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm active:scale-95">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
      </svg>
      New Role
    </button>
  </div>

  <!-- \u2500\u2500 Role Form \u2500\u2500 -->
  <div *ngIf="showForm"
    class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-6">
      {{ editingId ? 'Edit Role' : 'Create Role' }}
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Role Name *</label>
        <input type="text" [(ngModel)]="formName"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Portal</label>
        <select [(ngModel)]="formPortal"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none">
          <option value="Admin">Admin</option>
          <option value="Agent">Agent</option>
        </select>
      </div>
      <div class="sm:col-span-2">
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Description</label>
        <input type="text" [(ngModel)]="formDescription"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
      </div>
      <div class="sm:col-span-2">
        <label class="inline-flex items-center gap-3 cursor-pointer">
          <div class="relative">
            <input type="checkbox" [(ngModel)]="formIsActive" class="peer sr-only" />
            <div class="w-11 h-6 bg-surface-300 dark:bg-surface-600 rounded-full peer-checked:bg-brand-600 transition-colors"></div>
            <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"></div>
          </div>
          <span class="text-sm font-medium text-surface-700 dark:text-surface-300">Active</span>
        </label>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-surface-200 dark:border-surface-700">
      <button (click)="cancelForm()"
        class="px-4 py-2.5 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-xl transition-colors">
        Cancel
      </button>
      <button (click)="saveRole()" [disabled]="!formName.trim()"
        class="px-5 py-2.5 text-sm font-medium bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed active:scale-95">
        {{ editingId ? 'Update' : 'Create' }}
      </button>
    </div>
  </div>

  <!-- \u2500\u2500 Permission Assignment \u2014 Hierarchical Tree \u2500\u2500 -->
  <div *ngIf="showPermissions"
    class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden">

    <!-- Header -->
    <div class="px-6 py-5 border-b border-surface-200 dark:border-surface-700">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">
            Assign Permissions &mdash;
            <span class="text-brand-600 dark:text-brand-400">{{ permRoleName }}</span>
          </h3>
          <p class="text-sm text-surface-500 dark:text-surface-400 mt-1">
            Check a section to grant all its menus, or expand and select individual menu actions.
          </p>
        </div>
        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
          [ngClass]="{
            'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400': permPortalFilter === 'Admin',
            'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400': permPortalFilter === 'Agent'
          }">
          {{ permPortalFilter }} Portal
        </span>
      </div>
    </div>

    <!-- Tree -->
    <div class="divide-y divide-surface-100 dark:divide-surface-700/50">

      <!-- No menus loaded -->
      <div *ngIf="menusBySection.length === 0"
        class="flex items-center justify-center py-12 text-sm text-surface-400 dark:text-surface-500">
        <svg class="w-5 h-5 mr-2 opacity-50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
        </svg>
        No menus available for this portal
      </div>

      <!-- Section groups -->
      <div *ngFor="let group of menusBySection" class="border-0">

        <!-- \u2500\u2500 Section header row \u2500\u2500 -->
        <div
          class="flex items-center gap-3 px-5 py-3 bg-surface-50 dark:bg-surface-700/30 cursor-pointer select-none hover:bg-surface-100 dark:hover:bg-surface-700/50 transition-colors"
          (click)="toggleSectionExpand(group.section)">

          <!-- Section select-all checkbox -->
          <label class="flex items-center gap-3 flex-1 min-w-0" (click)="$event.stopPropagation()">
            <input #sectionCheckbox type="checkbox"
              [checked]="isSectionAllSelected(group.menus)"
              (change)="toggleSectionPerms(group.menus)"
              class="w-4 h-4 accent-brand-600 rounded cursor-pointer shrink-0"
              [attr.data-indeterminate]="isSectionPartialSelected(group.menus) ? '' : null" />
            <span class="text-xs font-bold uppercase tracking-wider text-surface-600 dark:text-surface-300 truncate">
              {{ group.section }}
            </span>
            <!-- Menu count badge -->
            <span class="ml-1 text-[10px] font-medium text-surface-400 dark:text-surface-500 shrink-0">
              {{ group.menus.length }} menu{{ group.menus.length !== 1 ? 's' : '' }}
            </span>
            <!-- Partial indicator -->
            <span *ngIf="isSectionPartialSelected(group.menus)"
              class="ml-auto mr-4 text-[10px] font-medium text-brand-600 dark:text-brand-400 shrink-0">
              Partial
            </span>
          </label>

          <!-- Chevron -->
          <svg class="w-4 h-4 text-surface-400 dark:text-surface-500 shrink-0 transition-transform duration-200"
            [class.rotate-180]="!isSectionExpanded(group.section)"
            fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
          </svg>
        </div>

        <!-- \u2500\u2500 Menu rows \u2014 collapsible \u2500\u2500 -->
        <ng-container *ngIf="isSectionExpanded(group.section)">

          <!-- Column header (once per section) -->
          <div class="flex items-center px-5 py-2 pl-12 bg-surface-50/50 dark:bg-surface-800/30
                      border-b border-surface-100 dark:border-surface-700/50">
            <span class="flex-[2] text-[10px] font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">
              Menu
            </span>
            <span *ngFor="let a of ['Read','Write','Approve','Delete']"
              class="flex-[0.7] text-center text-[10px] font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">
              {{ a }}
            </span>
            <span class="flex-[0.7] text-center text-[10px] font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">
              All
            </span>
          </div>

          <!-- Individual menu rows -->
          <div *ngFor="let menu of group.menus"
            class="flex items-center px-5 py-3 pl-12 border-b border-surface-100 dark:border-surface-700/40 last:border-b-0 hover:bg-surface-50 dark:hover:bg-surface-800/40 transition-colors">

            <!-- Menu name -->
            <span class="flex-[2] flex items-center gap-2 text-[13px] font-medium text-surface-800 dark:text-surface-200 truncate pr-4">
              <svg class="w-4 h-4 text-surface-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <span class="truncate">{{ menu.name }}</span>
            </span>

            <!-- Per-action checkboxes -->
            <span *ngFor="let perm of menu.permissions" class="flex-[0.7] flex justify-center">
              <label class="relative inline-flex items-center cursor-pointer group">
                <input type="checkbox" [checked]="isPermSelected(perm.id)"
                  (change)="togglePerm(perm.id)" class="peer sr-only" />
                <div
                  class="w-5 h-5 rounded-md border-2 border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 peer-checked:bg-brand-600 peer-checked:border-brand-600 flex items-center justify-center transition-all duration-150 group-hover:border-brand-400">
                  <svg class="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </label>
            </span>

            <!-- Padding for missing action columns (ensure alignment) -->
            <ng-container *ngFor="let pad of [].constructor(4 - menu.permissions.length)">
              <span class="flex-[0.7]"></span>
            </ng-container>

            <!-- "All" checkbox -->
            <span class="flex-[0.7] flex justify-center">
              <label class="relative inline-flex items-center cursor-pointer group">
                <input type="checkbox" [checked]="isAllMenuPermsSelected(menu)"
                  (change)="toggleAllMenuPerms(menu)" class="peer sr-only" />
                <div
                  class="w-5 h-5 rounded-md border-2 border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 peer-checked:bg-purple-600 peer-checked:border-purple-600 flex items-center justify-center transition-all duration-150 group-hover:border-purple-400">
                  <svg class="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </label>
            </span>
          </div>
        </ng-container>

      </div>
    </div>

    <!-- Footer actions -->
    <div class="flex items-center justify-between gap-3 px-6 py-4 border-t border-surface-200 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-800/30">
      <span class="text-sm text-surface-500 dark:text-surface-400">
        {{ selectedPermIds.size }} permission{{ selectedPermIds.size !== 1 ? 's' : '' }} selected
      </span>
      <div class="flex items-center gap-3">
        <button (click)="cancelPermissions()"
          class="px-4 py-2.5 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-xl transition-colors">
          Cancel
        </button>
        <button (click)="savePermissions()"
          class="px-5 py-2.5 text-sm font-medium bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-colors shadow-sm active:scale-95">
          Save Permissions
        </button>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 Roles Table \u2500\u2500 -->
  <div *ngIf="!showForm && !showPermissions"
    class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden">

    <!-- Loading -->
    <div *ngIf="loading" class="flex justify-center p-12">
      <svg class="animate-spin h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
    </div>

    <div *ngIf="!loading" class="overflow-x-auto">
      <table class="w-full text-sm text-left whitespace-nowrap">
        <thead class="bg-surface-50 dark:bg-surface-700/50">
          <tr class="border-b border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-300">
            <th scope="col" class="px-4 py-3 font-semibold">Role</th>
            <th scope="col" class="px-4 py-3 font-semibold">Portal</th>
            <th scope="col" class="px-4 py-3 font-semibold text-center">Users</th>
            <th scope="col" class="px-4 py-3 font-semibold text-center">Permissions</th>
            <th scope="col" class="px-4 py-3 font-semibold">Status</th>
            <th scope="col" class="px-4 py-3 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let role of roles"
            class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors"
            [ngClass]="{ 'opacity-50': !role.isActive }">

            <td class="px-4 py-3">
              <div class="flex flex-col">
                <span class="font-medium text-surface-900 dark:text-surface-100">{{ role.name }}</span>
                <span *ngIf="role.description" class="text-xs text-surface-500 dark:text-surface-400">{{ role.description }}</span>
              </div>
            </td>

            <td class="px-4 py-3">
              <span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium"
                [ngClass]="{
                  'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400': role.portal === 'Admin',
                  'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400': role.portal === 'Agent',
                  'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400': role.portal === 'Customer'
                }">
                {{ role.portal }}
              </span>
            </td>

            <td class="px-4 py-3 text-center text-surface-700 dark:text-surface-300">{{ role.userCount }}</td>
            <td class="px-4 py-3 text-center text-surface-700 dark:text-surface-300">{{ role.permissionCount }}</td>

            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full"
                  [ngClass]="role.isActive ? 'bg-success-500' : 'bg-surface-300 dark:bg-surface-600'"></span>
                <span class="text-sm"
                  [ngClass]="role.isActive ? 'text-success-700 dark:text-success-400' : 'text-surface-500 dark:text-surface-400'">
                  {{ role.isActive ? 'Active' : 'Inactive' }}
                </span>
              </div>
            </td>

            <td class="px-4 py-3 text-right">
              <ng-container *ngIf="role.roleType !== 'SystemAdmin'; else systemBadge">
                <div class="flex items-center justify-end gap-1">
                  <button aria-label="Edit" (click)="openEdit(role)"
                    class="p-1.5 rounded-lg text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                  </button>
                  <button aria-label="Assign permissions" (click)="openPermissions(role)" title="Assign Permissions"
                    class="p-1.5 rounded-lg text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </button>
                  <button aria-label="Delete" (click)="deleteRole(role)" [disabled]="role.userCount > 0"
                    class="p-1.5 rounded-lg text-danger-500 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </button>
                </div>
              </ng-container>
              <ng-template #systemBadge>
                <span class="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-warning-50 text-warning-700 dark:bg-warning-900/20 dark:text-warning-400">
                  System
                </span>
              </ng-template>
            </td>
          </tr>
        </tbody>
      </table>
      <div *ngIf="roles.length === 0" class="text-center py-12 text-surface-500 dark:text-surface-400">
        No roles found.
      </div>
    </div>
  </div>

</div>
`, styles: ["/* src/app/pages/admin/user-management/roles/roles.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=roles.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: ConfirmDeleteService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesComponent, { className: "RolesComponent", filePath: "src/app/pages/admin/user-management/roles/roles.component.ts", lineNumber: 93 });
})();
export {
  RolesComponent
};
//# sourceMappingURL=chunk-WBTQAPEP.js.map
