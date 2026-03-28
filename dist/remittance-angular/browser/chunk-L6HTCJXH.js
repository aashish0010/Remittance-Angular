import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-6I2CTDTD.js";
import {
  ApiService
} from "./chunk-2NPUZHRJ.js";
import "./chunk-MP5DRVCF.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-FEHYQLJK.js";
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
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
} from "./chunk-XQC2OG7J.js";

// src/app/pages/admin/user-management/users/users.component.ts
var _c0 = (a0) => ({ "opacity-50": a0 });
var _c1 = (a0, a1, a2) => ({ "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400": a0, "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400": a1, "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400": a2 });
function UsersComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function UsersComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New User ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_8_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275property("value", r_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.name);
  }
}
function UsersComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "label", 13);
    \u0275\u0275text(4, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 15);
    \u0275\u0275element(7, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_8_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function UsersComponent_div_8_Template_input_keyup_enter_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 18)(10, "label", 13);
    \u0275\u0275text(11, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_8_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterRole, $event) || (ctx_r1.filterRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 20);
    \u0275\u0275text(14, "All Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, UsersComponent_div_8_option_15_Template, 2, 2, "option", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 22)(17, "label", 13);
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_8_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterStatus, $event) || (ctx_r1.filterStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 20);
    \u0275\u0275text(21, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 23);
    \u0275\u0275text(23, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 24);
    \u0275\u0275text(25, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 25)(27, "button", 26);
    \u0275\u0275listener("click", function UsersComponent_div_8_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(28, " Filter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 27);
    \u0275\u0275listener("click", function UsersComponent_div_8_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(30, " Clear ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterRole);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.allRoles);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterStatus);
  }
}
function UsersComponent_div_9_button_24__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 48);
    \u0275\u0275element(1, "path", 49);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_9_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function UsersComponent_div_9_button_24_Template_button_click_0_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRole(r_r7.id));
    });
    \u0275\u0275template(1, UsersComponent_div_9_button_24__svg_svg_1_Template, 2, 0, "svg", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.isRoleSelected(r_r7.id) ? "bg-brand-50 text-brand-700 border-brand-300 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-700" : "bg-white text-surface-600 border-surface-300 dark:bg-surface-700 dark:text-surface-400 dark:border-surface-600 hover:border-surface-400 dark:hover:border-surface-500");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRoleSelected(r_r7.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", r_r7.name, " (", r_r7.portal, ") ");
  }
}
function UsersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h3", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "div")(5, "label", 13);
    \u0275\u0275text(6, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_9_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formFullName, $event) || (ctx_r1.formFullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "label", 13);
    \u0275\u0275text(10, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_9_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formEmail, $event) || (ctx_r1.formEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 13);
    \u0275\u0275text(14, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_9_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPhone, $event) || (ctx_r1.formPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_9_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPassword, $event) || (ctx_r1.formPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 34)(21, "label", 35);
    \u0275\u0275text(22, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 36);
    \u0275\u0275template(24, UsersComponent_div_9_button_24_Template, 3, 4, "button", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 34)(26, "label", 38)(27, "div", 14)(28, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_9_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formIsActive, $event) || (ctx_r1.formIsActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "div", 40)(30, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 42);
    \u0275\u0275text(32, "Active");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 43)(34, "button", 44);
    \u0275\u0275listener("click", function UsersComponent_div_9_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(35, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 45);
    \u0275\u0275listener("click", function UsersComponent_div_9_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "Edit User" : "Create User");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formFullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formEmail);
    \u0275\u0275property("disabled", !!ctx_r1.editingId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "New Password (leave blank to keep)" : "Password *");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPassword);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.allRoles);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formIsActive);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx_r1.formFullName.trim() || !ctx_r1.formEmail.trim() || !ctx_r1.editingId && !ctx_r1.formPassword.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId ? "Update" : "Create", " ");
  }
}
function UsersComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 54);
    \u0275\u0275element(2, "circle", 55)(3, "path", 56);
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_10_div_2_tr_19_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c1, r_r8.portal.toLowerCase() === "admin", r_r8.portal.toLowerCase() === "agent", r_r8.portal.toLowerCase() === "customer"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r8.name, " ");
  }
}
function UsersComponent_div_10_div_2_tr_19_ng_container_23__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 83);
    \u0275\u0275element(1, "path", 89);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_10_div_2_tr_19_ng_container_23__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 83);
    \u0275\u0275element(1, "path", 90);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_10_div_2_tr_19_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 81)(2, "button", 82);
    \u0275\u0275listener("click", function UsersComponent_div_10_div_2_tr_19_ng_container_23_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEdit(user_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 83);
    \u0275\u0275element(4, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 85);
    \u0275\u0275listener("click", function UsersComponent_div_10_div_2_tr_19_ng_container_23_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(user_r10));
    });
    \u0275\u0275template(7, UsersComponent_div_10_div_2_tr_19_ng_container_23__svg_svg_7_Template, 2, 0, "svg", 86)(8, UsersComponent_div_10_div_2_tr_19_ng_container_23__svg_svg_8_Template, 2, 0, "svg", 86);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 87);
    \u0275\u0275listener("click", function UsersComponent_div_10_div_2_tr_19_ng_container_23_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteUser(user_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 83);
    \u0275\u0275element(12, "path", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Delete ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", user_r10.isActive ? "text-warning-600 dark:text-warning-400" : "text-success-600 dark:text-success-400");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r10.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r10.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r10.isActive ? "Disable" : "Enable", " ");
  }
}
function UsersComponent_div_10_div_2_tr_19_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1, " Super Admin ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_10_div_2_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 65)(1, "td", 66)(2, "div", 67)(3, "div", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 70);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 71);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 66)(12, "div", 72);
    \u0275\u0275template(13, UsersComponent_div_10_div_2_tr_19_span_13_Template, 2, 6, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 66)(15, "div", 25);
    \u0275\u0275element(16, "span", 74);
    \u0275\u0275elementStart(17, "span", 75);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td", 76);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 77);
    \u0275\u0275template(23, UsersComponent_div_10_div_2_tr_19_ng_container_23_Template, 14, 4, "ng-container", 78)(24, UsersComponent_div_10_div_2_tr_19_span_24_Template, 2, 0, "span", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c0, !user_r10.isActive));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", user_r10.fullName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r10.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r10.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r10.phoneNumber || "-");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", user_r10.roles);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", user_r10.isActive ? "bg-success-500" : "bg-surface-300 dark:bg-surface-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", user_r10.isActive ? "text-success-700 dark:text-success-400" : "text-surface-500 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r10.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 12, user_r10.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isSystemAdmin(user_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSystemAdmin(user_r10));
  }
}
function UsersComponent_div_10_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1, " No users found. ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "table", 58)(2, "thead", 59)(3, "tr", 60)(4, "th", 61);
    \u0275\u0275text(5, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 61);
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 61);
    \u0275\u0275text(9, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 61);
    \u0275\u0275text(11, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 61);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 61);
    \u0275\u0275text(15, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 62);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, UsersComponent_div_10_div_2_tr_19_Template, 25, 17, "tr", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, UsersComponent_div_10_div_2_div_20_Template, 2, 0, "div", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.users.length === 0);
  }
}
function UsersComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, UsersComponent_div_10_div_1_Template, 4, 0, "div", 51)(2, UsersComponent_div_10_div_2_Template, 21, 2, "div", 52);
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
var UsersComponent = class _UsersComponent {
  constructor(api) {
    this.api = api;
    this.users = [];
    this.allRoles = [];
    this.loading = false;
    this.searchQuery = "";
    this.filterRole = "";
    this.filterStatus = "";
    this.showForm = false;
    this.editingId = null;
    this.formFullName = "";
    this.formEmail = "";
    this.formPhone = "";
    this.formPassword = "";
    this.formIsActive = true;
    this.formRoleIds = [];
  }
  ngOnInit() {
    this.loadUsers();
    this.loadRoles();
  }
  loadUsers() {
    this.loading = true;
    const params = {};
    if (this.searchQuery.trim())
      params.search = this.searchQuery.trim();
    if (this.filterRole)
      params.role = this.filterRole;
    if (this.filterStatus === "active")
      params.isActive = true;
    if (this.filterStatus === "inactive")
      params.isActive = false;
    this.api.getAdminUsers(params).subscribe((res) => {
      this.loading = false;
      if (res?.success && res.data) {
        this.users = res.data;
      }
    });
  }
  loadRoles() {
    this.api.getRoles().subscribe((res) => {
      if (res?.success && res.data) {
        this.allRoles = res.data.filter((r) => r.roleType !== "SystemAdmin" && r.portal === "Admin");
      }
    });
  }
  applyFilters() {
    this.loadUsers();
  }
  clearFilters() {
    this.searchQuery = "";
    this.filterRole = "";
    this.filterStatus = "";
    this.loadUsers();
  }
  openCreate() {
    this.editingId = null;
    this.formFullName = "";
    this.formEmail = "";
    this.formPhone = "";
    this.formPassword = "";
    this.formIsActive = true;
    this.formRoleIds = [];
    this.showForm = true;
  }
  openEdit(user) {
    if (user.roles.some((r) => r.name === "SystemAdmin"))
      return;
    this.editingId = user.id;
    this.formFullName = user.fullName;
    this.formEmail = user.email;
    this.formPhone = user.phoneNumber;
    this.formPassword = "";
    this.formIsActive = user.isActive;
    this.formRoleIds = user.roles.map((r) => r.id);
    this.showForm = true;
  }
  cancelForm() {
    this.showForm = false;
  }
  saveUser() {
    if (this.editingId) {
      const dto = {
        fullName: this.formFullName,
        email: this.formEmail,
        phoneNumber: this.formPhone,
        roleIds: this.formRoleIds,
        isActive: this.formIsActive
      };
      if (this.formPassword.trim())
        dto.password = this.formPassword;
      this.api.updateAdminUser(this.editingId, dto).subscribe((res) => {
        if (res?.success) {
          this.showForm = false;
          this.loadUsers();
        }
      });
    } else {
      const dto = {
        fullName: this.formFullName,
        email: this.formEmail,
        password: this.formPassword,
        phoneNumber: this.formPhone,
        roleIds: this.formRoleIds,
        isActive: this.formIsActive
      };
      this.api.createAdminUser(dto).subscribe((res) => {
        if (res?.success) {
          this.showForm = false;
          this.loadUsers();
        }
      });
    }
  }
  toggleStatus(user) {
    if (user.roles.some((r) => r.name === "SystemAdmin"))
      return;
    this.api.toggleUserStatus(user.id).subscribe((res) => {
      if (res?.success)
        this.loadUsers();
    });
  }
  deleteUser(user) {
    if (user.roles.some((r) => r.name === "SystemAdmin"))
      return;
    if (!confirm(`Delete user "${user.fullName}"? This cannot be undone.`))
      return;
    this.api.deleteAdminUser(user.id).subscribe((res) => {
      if (res?.success)
        this.loadUsers();
    });
  }
  isSystemAdmin(user) {
    return user.roles.some((r) => r.name === "SystemAdmin");
  }
  toggleRole(roleId) {
    const idx = this.formRoleIds.indexOf(roleId);
    if (idx >= 0)
      this.formRoleIds.splice(idx, 1);
    else
      this.formRoleIds.push(roleId);
  }
  isRoleSelected(roleId) {
    return this.formRoleIds.includes(roleId);
  }
  getRoleNames(user) {
    return user.roles.map((r) => r.name).join(", ");
  }
  static {
    this.\u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 11, vars: 4, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm", 3, "click", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-brand-600", "text-white", "rounded-xl", "text-sm", "font-medium", "hover:bg-brand-700", "transition-colors", "shadow-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "flex-col", "sm:flex-row", "items-end", "gap-4", "flex-wrap"], [1, "flex-1", "min-w-[180px]"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Name, email or phone", 1, "w-full", "pl-10", "pr-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "flex-1", "min-w-[160px]"], [1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex-1", "min-w-[140px]"], ["value", "active"], ["value", "inactive"], [1, "flex", "items-center", "gap-2"], [1, "px-4", "py-2.5", "bg-brand-600", "text-white", "rounded-xl", "text-sm", "font-medium", "hover:bg-brand-700", "transition-colors", 3, "click"], [1, "px-4", "py-2.5", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-xl", "text-sm", "font-medium", "transition-colors", 3, "click"], [3, "value"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], ["type", "text", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", "disabled:opacity-60", "disabled:cursor-not-allowed", "disabled:bg-surface-100", "dark:disabled:bg-surface-800", 3, "ngModelChange", "ngModel", "disabled"], ["type", "password", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], [1, "sm:col-span-2"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-2"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", "class", "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "inline-flex", "items-center", "gap-3", "cursor-pointer"], ["type", "checkbox", 1, "peer", "sr-only", 3, "ngModelChange", "ngModel"], [1, "w-11", "h-6", "bg-surface-300", "dark:bg-surface-600", "rounded-full", "peer-checked:bg-brand-600", "transition-colors"], [1, "absolute", "left-0.5", "top-0.5", "w-5", "h-5", "bg-white", "rounded-full", "shadow", "transition-transform", "peer-checked:translate-x-5"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "flex", "items-center", "justify-end", "gap-3", "mt-6", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "px-4", "py-2.5", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-xl", "transition-colors", 3, "click"], [1, "px-5", "py-2.5", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-xl", "hover:bg-brand-700", "transition-colors", "shadow-sm", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "border", "text-sm", "font-medium", "transition-colors", 3, "click", "ngClass"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft", "overflow-hidden"], ["class", "flex justify-center p-12", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "flex", "justify-center", "p-12"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "whitespace-nowrap"], [1, "bg-surface-50", "dark:bg-surface-700/50"], [1, "border-b", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-300"], [1, "px-4", "py-3", "font-semibold"], [1, "px-4", "py-3", "font-semibold", "text-right"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-center py-12 text-surface-500 dark:text-surface-400", 4, "ngIf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors", 3, "ngClass"], [1, "px-4", "py-3"], [1, "flex", "items-center", "gap-3"], [1, "w-9", "h-9", "rounded-full", "bg-brand-600", "text-white", "flex", "items-center", "justify-center", "font-semibold", "text-sm", "shrink-0"], [1, "font-medium", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-300", "truncate", "max-w-[200px]"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-300"], [1, "flex", "flex-wrap", "gap-1"], ["class", "inline-flex px-2 py-0.5 rounded-full text-xs font-medium", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "w-2", "h-2", "rounded-full", 3, "ngClass"], [1, "text-sm", 3, "ngClass"], [1, "px-4", "py-3", "text-surface-500", "dark:text-surface-400", "text-xs"], [1, "px-4", "py-3", "text-right"], [4, "ngIf"], ["class", "inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-warning-50 text-warning-700 dark:bg-warning-900/20 dark:text-warning-400", 4, "ngIf"], [1, "inline-flex", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "flex", "items-center", "justify-end", "gap-1"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-brand-600", "dark:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-3.5", "h-3.5"], ["d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition-colors", 3, "click", "ngClass"], ["class", "w-3.5 h-3.5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-danger-500", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "inline-flex", "px-2.5", "py-1", "rounded-full", "text-xs", "font-medium", "bg-warning-50", "text-warning-700", "dark:bg-warning-900/20", "dark:text-warning-400"], [1, "text-center", "py-12", "text-surface-500", "dark:text-surface-400"]], template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        \u0275\u0275text(4, "Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Manage admin panel users and role assignments");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, UsersComponent_button_7_Template, 4, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, UsersComponent_div_8_Template, 31, 4, "div", 5)(9, UsersComponent_div_9_Template, 38, 11, "div", 5)(10, UsersComponent_div_10_Template, 3, 2, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", !ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showForm);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=users.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DatePipe
    ], template: `<div class="flex flex-col gap-6">
  <!-- Header -->
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">Users</h2>
      <p class="text-sm text-surface-500 dark:text-surface-400 mt-1">Manage admin panel users and role assignments</p>
    </div>
    <button *ngIf="!showForm" (click)="openCreate()"
      class="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
      </svg>
      New User
    </button>
  </div>

  <!-- Filters -->
  <div *ngIf="!showForm" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
    <div class="flex flex-col sm:flex-row items-end gap-4 flex-wrap">
      <div class="flex-1 min-w-[180px]">
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Search</label>
        <div class="relative">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input type="text" [(ngModel)]="searchQuery" placeholder="Name, email or phone" (keyup.enter)="applyFilters()"
            class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
        </div>
      </div>
      <div class="flex-1 min-w-[160px]">
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Role</label>
        <select [(ngModel)]="filterRole"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none">
          <option value="">All Roles</option>
          <option *ngFor="let r of allRoles" [value]="r.name">{{ r.name }}</option>
        </select>
      </div>
      <div class="flex-1 min-w-[140px]">
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Status</label>
        <select [(ngModel)]="filterStatus"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none">
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div class="flex items-center gap-2">
        <button (click)="applyFilters()"
          class="px-4 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-medium hover:bg-brand-700 transition-colors">
          Filter
        </button>
        <button (click)="clearFilters()"
          class="px-4 py-2.5 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-xl text-sm font-medium transition-colors">
          Clear
        </button>
      </div>
    </div>
  </div>

  <!-- User Form -->
  <div *ngIf="showForm" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-6">{{ editingId ? 'Edit User' : 'Create User' }}</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Full Name *</label>
        <input type="text" [(ngModel)]="formFullName"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Email *</label>
        <input type="email" [(ngModel)]="formEmail" [disabled]="!!editingId"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-surface-100 dark:disabled:bg-surface-800" />
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Phone Number</label>
        <input type="text" [(ngModel)]="formPhone"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">{{ editingId ? 'New Password (leave blank to keep)' : 'Password *' }}</label>
        <input type="password" [(ngModel)]="formPassword"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
      </div>
      <div class="sm:col-span-2">
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-2">Roles</label>
        <div class="flex flex-wrap gap-2">
          <button *ngFor="let r of allRoles" (click)="toggleRole(r.id)" type="button"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors"
            [ngClass]="isRoleSelected(r.id)
              ? 'bg-brand-50 text-brand-700 border-brand-300 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-700'
              : 'bg-white text-surface-600 border-surface-300 dark:bg-surface-700 dark:text-surface-400 dark:border-surface-600 hover:border-surface-400 dark:hover:border-surface-500'">
            <svg *ngIf="isRoleSelected(r.id)" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
            {{ r.name }} ({{ r.portal }})
          </button>
        </div>
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
      <button (click)="saveUser()"
        [disabled]="!formFullName.trim() || !formEmail.trim() || (!editingId && !formPassword.trim())"
        class="px-5 py-2.5 text-sm font-medium bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
        {{ editingId ? 'Update' : 'Create' }}
      </button>
    </div>
  </div>

  <!-- Users Table -->
  <div *ngIf="!showForm" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden">
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
            <th class="px-4 py-3 font-semibold">User</th>
            <th class="px-4 py-3 font-semibold">Email</th>
            <th class="px-4 py-3 font-semibold">Phone</th>
            <th class="px-4 py-3 font-semibold">Roles</th>
            <th class="px-4 py-3 font-semibold">Status</th>
            <th class="px-4 py-3 font-semibold">Created</th>
            <th class="px-4 py-3 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users"
            class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors"
            [ngClass]="{ 'opacity-50': !user.isActive }">
            <td class="px-4 py-3">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center font-semibold text-sm shrink-0">
                  {{ user.fullName.charAt(0).toUpperCase() }}
                </div>
                <span class="font-medium text-surface-900 dark:text-surface-100">{{ user.fullName }}</span>
              </div>
            </td>
            <td class="px-4 py-3 text-surface-600 dark:text-surface-300 truncate max-w-[200px]">{{ user.email }}</td>
            <td class="px-4 py-3 text-surface-600 dark:text-surface-300">{{ user.phoneNumber || '-' }}</td>
            <td class="px-4 py-3">
              <div class="flex flex-wrap gap-1">
                <span *ngFor="let r of user.roles"
                  class="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
                  [ngClass]="{
                    'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400': r.portal.toLowerCase() === 'admin',
                    'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400': r.portal.toLowerCase() === 'agent',
                    'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400': r.portal.toLowerCase() === 'customer'
                  }">
                  {{ r.name }}
                </span>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full" [ngClass]="user.isActive ? 'bg-success-500' : 'bg-surface-300 dark:bg-surface-600'"></span>
                <span class="text-sm" [ngClass]="user.isActive ? 'text-success-700 dark:text-success-400' : 'text-surface-500 dark:text-surface-400'">
                  {{ user.isActive ? 'Active' : 'Inactive' }}
                </span>
              </div>
            </td>
            <td class="px-4 py-3 text-surface-500 dark:text-surface-400 text-xs">{{ user.createdAt | date:'mediumDate' }}</td>
            <td class="px-4 py-3 text-right">
              <ng-container *ngIf="!isSystemAdmin(user)">
                <div class="flex items-center justify-end gap-1">
                  <button (click)="openEdit(user)"
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                    Edit
                  </button>
                  <button (click)="toggleStatus(user)"
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
                    [ngClass]="user.isActive ? 'text-warning-600 dark:text-warning-400' : 'text-success-600 dark:text-success-400'">
                    <svg *ngIf="user.isActive" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                    </svg>
                    <svg *ngIf="!user.isActive" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {{ user.isActive ? 'Disable' : 'Enable' }}
                  </button>
                  <button (click)="deleteUser(user)"
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-danger-500 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition-colors">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                    Delete
                  </button>
                </div>
              </ng-container>
              <span *ngIf="isSystemAdmin(user)"
                class="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-warning-50 text-warning-700 dark:bg-warning-900/20 dark:text-warning-400">
                Super Admin
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div *ngIf="users.length === 0" class="text-center py-12 text-surface-500 dark:text-surface-400">
        No users found.
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/user-management/users/users.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=users.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/pages/admin/user-management/users/users.component.ts", lineNumber: 33 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-L6HTCJXH.js.map
