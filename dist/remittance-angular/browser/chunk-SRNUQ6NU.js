import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-D3SW2Q36.js";
import {
  ApiService
} from "./chunk-JPFLOAIK.js";
import "./chunk-LDWTK5YJ.js";
import "./chunk-R63TWOS6.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-WBW3ZP3W.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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

// src/app/pages/admin/user-management/roles/roles.component.ts
var _c0 = () => ["Read", "Write", "Approve", "Delete"];
var _c1 = (a0) => ({ "opacity-50": a0 });
var _c2 = (a0, a1, a2) => ({ "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400": a0, "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400": a1, "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400": a2 });
function RolesComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function RolesComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New Role ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h3", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div")(5, "label", 13);
    \u0275\u0275text(6, "Role Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_8_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formName, $event) || (ctx_r1.formName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "label", 13);
    \u0275\u0275text(10, "Portal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_8_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPortal, $event) || (ctx_r1.formPortal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 16);
    \u0275\u0275text(13, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 17);
    \u0275\u0275text(15, "Agent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 18)(17, "label", 13);
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_8_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formDescription, $event) || (ctx_r1.formDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 18)(21, "label", 19)(22, "div", 20)(23, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_8_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formIsActive, $event) || (ctx_r1.formIsActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "div", 22)(25, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 24);
    \u0275\u0275text(27, "Active");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 25)(29, "button", 26);
    \u0275\u0275listener("click", function RolesComponent_div_8_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(30, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 27);
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
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "Edit Role" : "Create Role");
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
function RolesComponent_div_9_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r5);
  }
}
function RolesComponent_div_9_div_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 42)(1, "label", 43)(2, "input", 44);
    \u0275\u0275listener("change", function RolesComponent_div_9_div_12_span_5_Template_input_change_2_listener() {
      const perm_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePerm(perm_r8.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 46);
    \u0275\u0275element(5, "path", 47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const perm_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isPermSelected(perm_r8.id));
  }
}
function RolesComponent_div_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 39);
    \u0275\u0275element(3, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RolesComponent_div_9_div_12_span_5_Template, 6, 1, "span", 41);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 42)(7, "label", 43)(8, "input", 44);
    \u0275\u0275listener("change", function RolesComponent_div_9_div_12_Template_input_change_8_listener() {
      const menu_r9 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAllMenuPerms(menu_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 46);
    \u0275\u0275element(11, "path", 47);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", menu_r9.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", menu_r9.permissions);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isAllMenuPermsSelected(menu_r9));
  }
}
function RolesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h3", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4, "Select which menu actions this role can access.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30)(6, "div", 31)(7, "span", 32);
    \u0275\u0275text(8, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, RolesComponent_div_9_span_9_Template, 2, 1, "span", 33);
    \u0275\u0275elementStart(10, "span", 34);
    \u0275\u0275text(11, "All");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, RolesComponent_div_9_div_12_Template, 12, 3, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 25)(14, "button", 26);
    \u0275\u0275listener("click", function RolesComponent_div_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelPermissions());
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 36);
    \u0275\u0275listener("click", function RolesComponent_div_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePermissions());
    });
    \u0275\u0275text(17, " Save Permissions ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Assign Permissions \u2014 ", ctx_r1.permRoleName, "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filteredMenus);
  }
}
function RolesComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 53);
    \u0275\u0275element(2, "circle", 54)(3, "path", 55);
    \u0275\u0275elementEnd()();
  }
}
function RolesComponent_div_10_div_2_tr_17_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r10.description);
  }
}
function RolesComponent_div_10_div_2_tr_17_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 79)(2, "button", 80);
    \u0275\u0275listener("click", function RolesComponent_div_10_div_2_tr_17_ng_container_19_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const role_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEdit(role_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 81);
    \u0275\u0275element(4, "path", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 83);
    \u0275\u0275listener("click", function RolesComponent_div_10_div_2_tr_17_ng_container_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const role_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPermissions(role_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 81);
    \u0275\u0275element(7, "path", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 85);
    \u0275\u0275listener("click", function RolesComponent_div_10_div_2_tr_17_ng_container_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const role_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteRole(role_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 81);
    \u0275\u0275element(10, "path", 86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", role_r10.userCount > 0);
  }
}
function RolesComponent_div_10_div_2_tr_17_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1, " System ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_10_div_2_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 65)(1, "td", 66)(2, "div", 67)(3, "span", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RolesComponent_div_10_div_2_tr_17_span_5_Template, 2, 1, "span", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 66)(7, "span", 70);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 71);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 71);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 66)(14, "div", 72);
    \u0275\u0275element(15, "span", 73);
    \u0275\u0275elementStart(16, "span", 74);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td", 75);
    \u0275\u0275template(19, RolesComponent_div_10_div_2_tr_17_ng_container_19_Template, 11, 1, "ng-container", 76)(20, RolesComponent_div_10_div_2_tr_17_span_20_Template, 2, 0, "span", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r10 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c1, !role_r10.isActive));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(role_r10.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r10.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(14, _c2, role_r10.portal === "Admin", role_r10.portal === "Agent", role_r10.portal === "Customer"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r10.portal, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r10.userCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r10.permissionCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", role_r10.isActive ? "bg-success-500" : "bg-surface-300 dark:bg-surface-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", role_r10.isActive ? "text-success-700 dark:text-success-400" : "text-surface-500 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r10.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", role_r10.roleType !== "SystemAdmin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r10.roleType === "SystemAdmin");
  }
}
function RolesComponent_div_10_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1, " No roles found. ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "table", 57)(2, "thead", 58)(3, "tr", 59)(4, "th", 60);
    \u0275\u0275text(5, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 60);
    \u0275\u0275text(7, "Portal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 61);
    \u0275\u0275text(9, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 61);
    \u0275\u0275text(11, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 60);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 62);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, RolesComponent_div_10_div_2_tr_17_Template, 21, 18, "tr", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, RolesComponent_div_10_div_2_div_18_Template, 2, 0, "div", 64);
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
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, RolesComponent_div_10_div_1_Template, 4, 0, "div", 50)(2, RolesComponent_div_10_div_2_Template, 19, 2, "div", 51);
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
var RolesComponent = class _RolesComponent {
  constructor(api) {
    this.api = api;
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
    if (!confirm(`Delete role "${role.name}"? This cannot be undone.`))
      return;
    this.api.deleteRole(role.id).subscribe((res) => {
      if (res?.success)
        this.loadRoles();
    });
  }
  // ── Permission Management ──
  openPermissions(role) {
    if (role.roleType === "SystemAdmin")
      return;
    this.permRoleId = role.id;
    this.permRoleName = role.name;
    this.permPortalFilter = role.portal;
    this.showPermissions = true;
    this.showForm = false;
    this.selectedPermIds.clear();
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
      if (allSelected) {
        this.selectedPermIds.delete(p.id);
      } else {
        this.selectedPermIds.add(p.id);
      }
    });
  }
  isAllMenuPermsSelected(menu) {
    return menu.permissions.length > 0 && menu.permissions.every((p) => this.selectedPermIds.has(p.id));
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
  cancelPermissions() {
    this.showPermissions = false;
  }
  get filteredMenus() {
    return this.menus.filter((m) => m.portal === this.permPortalFilter);
  }
  static {
    this.\u0275fac = function RolesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RolesComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesComponent, selectors: [["app-roles"]], decls: 11, vars: 4, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm", 3, "click", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-brand-600", "text-white", "rounded-xl", "text-sm", "font-medium", "hover:bg-brand-700", "transition-colors", "shadow-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], ["type", "text", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], ["value", "Admin"], ["value", "Agent"], [1, "sm:col-span-2"], [1, "inline-flex", "items-center", "gap-3", "cursor-pointer"], [1, "relative"], ["type", "checkbox", 1, "peer", "sr-only", 3, "ngModelChange", "ngModel"], [1, "w-11", "h-6", "bg-surface-300", "dark:bg-surface-600", "rounded-full", "peer-checked:bg-brand-600", "transition-colors"], [1, "absolute", "left-0.5", "top-0.5", "w-5", "h-5", "bg-white", "rounded-full", "shadow", "transition-transform", "peer-checked:translate-x-5"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "flex", "items-center", "justify-end", "gap-3", "mt-6", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "px-4", "py-2.5", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-xl", "transition-colors", 3, "click"], [1, "px-5", "py-2.5", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-xl", "hover:bg-brand-700", "transition-colors", "shadow-sm", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-2"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mb-4"], [1, "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "overflow-hidden"], [1, "flex", "items-center", "px-4", "py-3", "bg-surface-50", "dark:bg-surface-700/50", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "flex-[2]", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-600", "dark:text-surface-300"], ["class", "flex-[0.6] text-center text-xs font-semibold uppercase tracking-wider text-surface-600 dark:text-surface-300", 4, "ngFor", "ngForOf"], [1, "flex-[0.6]", "text-center", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-600", "dark:text-surface-300"], ["class", "flex items-center px-4 py-3 border-b border-surface-100 dark:border-surface-700 last:border-b-0 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], [1, "px-5", "py-2.5", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-xl", "hover:bg-brand-700", "transition-colors", "shadow-sm", 3, "click"], [1, "flex", "items-center", "px-4", "py-3", "border-b", "border-surface-100", "dark:border-surface-700", "last:border-b-0", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "flex-[2]", "flex", "items-center", "gap-2", "text-sm", "font-medium", "text-surface-900", "dark:text-surface-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 6h16M4 12h16M4 18h16"], ["class", "flex-[0.6] flex justify-center", 4, "ngFor", "ngForOf"], [1, "flex-[0.6]", "flex", "justify-center"], [1, "relative", "inline-flex", "items-center", "cursor-pointer"], ["type", "checkbox", 1, "peer", "sr-only", 3, "change", "checked"], [1, "w-5", "h-5", "rounded", "border-2", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "peer-checked:bg-purple-600", "peer-checked:border-purple-600", "flex", "items-center", "justify-center", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "3", 1, "w-3", "h-3", "text-white", "hidden", "peer-checked:block"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], [1, "w-5", "h-5", "rounded", "border-2", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "peer-checked:bg-brand-600", "peer-checked:border-brand-600", "flex", "items-center", "justify-center", "transition-colors"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft", "overflow-hidden"], ["class", "flex justify-center p-12", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "flex", "justify-center", "p-12"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "whitespace-nowrap"], [1, "bg-surface-50", "dark:bg-surface-700/50"], [1, "border-b", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-300"], ["scope", "col", 1, "px-4", "py-3", "font-semibold"], ["scope", "col", 1, "px-4", "py-3", "font-semibold", "text-center"], ["scope", "col", 1, "px-4", "py-3", "font-semibold", "text-right"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-center py-12 text-surface-500 dark:text-surface-400", 4, "ngIf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors", 3, "ngClass"], [1, "px-4", "py-3"], [1, "flex", "flex-col"], [1, "font-medium", "text-surface-900", "dark:text-surface-100"], ["class", "text-xs text-surface-500 dark:text-surface-400", 4, "ngIf"], [1, "inline-flex", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "px-4", "py-3", "text-center", "text-surface-700", "dark:text-surface-300"], [1, "flex", "items-center", "gap-2"], [1, "w-2", "h-2", "rounded-full", 3, "ngClass"], [1, "text-sm", 3, "ngClass"], [1, "px-4", "py-3", "text-right"], [4, "ngIf"], ["class", "inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-warning-50 text-warning-700 dark:bg-warning-900/20 dark:text-warning-400", 4, "ngIf"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "justify-end", "gap-1"], ["aria-label", "Edit", 1, "p-1.5", "rounded-lg", "text-brand-600", "dark:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4"], ["d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["aria-label", "Permissions", 1, "p-1.5", "rounded-lg", "text-surface-600", "dark:text-surface-400", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["aria-label", "Delete", 1, "p-1.5", "rounded-lg", "text-danger-500", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition-colors", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "inline-flex", "px-2.5", "py-1", "rounded-full", "text-xs", "font-medium", "bg-warning-50", "text-warning-700", "dark:bg-warning-900/20", "dark:text-warning-400"], [1, "text-center", "py-12", "text-surface-500", "dark:text-surface-400"]], template: function RolesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        \u0275\u0275text(4, "Roles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Create roles and assign menu permissions");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, RolesComponent_button_7_Template, 4, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, RolesComponent_div_8_Template, 33, 7, "div", 5)(9, RolesComponent_div_9_Template, 18, 4, "div", 5)(10, RolesComponent_div_10_Template, 3, 2, "div", 6);
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
  <!-- Header -->
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">Roles</h2>
      <p class="text-sm text-surface-500 dark:text-surface-400 mt-1">Create roles and assign menu permissions</p>
    </div>
    <button *ngIf="!showForm && !showPermissions" (click)="openCreate()"
      class="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
      </svg>
      New Role
    </button>
  </div>

  <!-- Role Form -->
  <div *ngIf="showForm" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-6">{{ editingId ? 'Edit Role' : 'Create Role' }}</h3>
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
        class="px-5 py-2.5 text-sm font-medium bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
        {{ editingId ? 'Update' : 'Create' }}
      </button>
    </div>
  </div>

  <!-- Permission Assignment -->
  <div *ngIf="showPermissions" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">Assign Permissions &mdash; {{ permRoleName }}</h3>
    <p class="text-sm text-surface-500 dark:text-surface-400 mb-4">Select which menu actions this role can access.</p>

    <div class="rounded-xl border border-surface-200 dark:border-surface-700 overflow-hidden">
      <!-- Header row -->
      <div class="flex items-center px-4 py-3 bg-surface-50 dark:bg-surface-700/50 border-b border-surface-200 dark:border-surface-700">
        <span class="flex-[2] text-xs font-semibold uppercase tracking-wider text-surface-600 dark:text-surface-300">Menu</span>
        <span *ngFor="let a of ['Read','Write','Approve','Delete']" class="flex-[0.6] text-center text-xs font-semibold uppercase tracking-wider text-surface-600 dark:text-surface-300">{{ a }}</span>
        <span class="flex-[0.6] text-center text-xs font-semibold uppercase tracking-wider text-surface-600 dark:text-surface-300">All</span>
      </div>

      <!-- Menu rows -->
      <div *ngFor="let menu of filteredMenus"
        class="flex items-center px-4 py-3 border-b border-surface-100 dark:border-surface-700 last:border-b-0 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
        <span class="flex-[2] flex items-center gap-2 text-sm font-medium text-surface-900 dark:text-surface-100">
          <svg class="w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          {{ menu.name }}
        </span>
        <span *ngFor="let perm of menu.permissions" class="flex-[0.6] flex justify-center">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" [checked]="isPermSelected(perm.id)" (change)="togglePerm(perm.id)" class="peer sr-only" />
            <div class="w-5 h-5 rounded border-2 border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 peer-checked:bg-brand-600 peer-checked:border-brand-600 flex items-center justify-center transition-colors">
              <svg class="w-3 h-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
          </label>
        </span>
        <span class="flex-[0.6] flex justify-center">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" [checked]="isAllMenuPermsSelected(menu)" (change)="toggleAllMenuPerms(menu)" class="peer sr-only" />
            <div class="w-5 h-5 rounded border-2 border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 peer-checked:bg-purple-600 peer-checked:border-purple-600 flex items-center justify-center transition-colors">
              <svg class="w-3 h-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
          </label>
        </span>
      </div>
    </div>

    <div class="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-surface-200 dark:border-surface-700">
      <button (click)="cancelPermissions()"
        class="px-4 py-2.5 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-xl transition-colors">
        Cancel
      </button>
      <button (click)="savePermissions()"
        class="px-5 py-2.5 text-sm font-medium bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-colors shadow-sm">
        Save Permissions
      </button>
    </div>
  </div>

  <!-- Roles Table -->
  <div *ngIf="!showForm && !showPermissions" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden">
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
                <span class="w-2 h-2 rounded-full" [ngClass]="role.isActive ? 'bg-success-500' : 'bg-surface-300 dark:bg-surface-600'"></span>
                <span class="text-sm" [ngClass]="role.isActive ? 'text-success-700 dark:text-success-400' : 'text-surface-500 dark:text-surface-400'">
                  {{ role.isActive ? 'Active' : 'Inactive' }}
                </span>
              </div>
            </td>
            <td class="px-4 py-3 text-right">
              <ng-container *ngIf="role.roleType !== 'SystemAdmin'">
                <div class="flex items-center justify-end gap-1">
                  <button aria-label="Edit" (click)="openEdit(role)"
                    class="p-1.5 rounded-lg text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                  </button>
                  <button aria-label="Permissions" (click)="openPermissions(role)"
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
              <span *ngIf="role.roleType === 'SystemAdmin'"
                class="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-warning-50 text-warning-700 dark:bg-warning-900/20 dark:text-warning-400">
                System
              </span>
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
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesComponent, { className: "RolesComponent", filePath: "src/app/pages/admin/user-management/roles/roles.component.ts", lineNumber: 33 });
})();
export {
  RolesComponent
};
//# sourceMappingURL=chunk-SRNUQ6NU.js.map
