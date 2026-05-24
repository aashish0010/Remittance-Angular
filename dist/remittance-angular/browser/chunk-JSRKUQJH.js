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
  DatePipe,
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
} from "./chunk-FTA5WDSR.js";
import "./chunk-ZNC4SKHB.js";

// src/app/pages/admin/user-management/users/users.component.ts
var _c0 = (a0) => ({ "opacity-50": a0 });
var _c1 = (a0, a1, a2) => ({ "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400": a0, "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400": a1, "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400": a2 });
function UsersComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function UsersComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New User ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_8_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
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
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "label", 15);
    \u0275\u0275text(4, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 17);
    \u0275\u0275element(7, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "input", 19);
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
    \u0275\u0275elementStart(9, "div", 20)(10, "label", 15);
    \u0275\u0275text(11, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_8_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterRole, $event) || (ctx_r1.filterRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 22);
    \u0275\u0275text(14, "All Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, UsersComponent_div_8_option_15_Template, 2, 2, "option", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 24)(17, "label", 15);
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_8_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterStatus, $event) || (ctx_r1.filterStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 22);
    \u0275\u0275text(21, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 25);
    \u0275\u0275text(23, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 26);
    \u0275\u0275text(25, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 27)(27, "button", 28);
    \u0275\u0275listener("click", function UsersComponent_div_8_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(28, " Filter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 29);
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
function UsersComponent_div_9_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1, "Email cannot be changed after account creation.");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_9__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 53)(2, "path", 54);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_9__svg_svg_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 55);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_9_button_29__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 58);
    \u0275\u0275element(1, "path", 59);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_9_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function UsersComponent_div_9_button_29_Template_button_click_0_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRole(r_r7.id));
    });
    \u0275\u0275template(1, UsersComponent_div_9_button_29__svg_svg_1_Template, 2, 0, "svg", 57);
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
    \u0275\u0275elementStart(0, "div", 12)(1, "h3", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "div")(5, "label", 15);
    \u0275\u0275text(6, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_9_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formFullName, $event) || (ctx_r1.formFullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "label", 15);
    \u0275\u0275text(10, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_9_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formEmail, $event) || (ctx_r1.formEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, UsersComponent_div_9_p_12_Template, 2, 0, "p", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "label", 15);
    \u0275\u0275text(15, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_9_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPhone, $event) || (ctx_r1.formPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16)(21, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_9_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPassword, $event) || (ctx_r1.formPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 37);
    \u0275\u0275listener("click", function UsersComponent_div_9_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPassword = !ctx_r1.showPassword);
    });
    \u0275\u0275template(23, UsersComponent_div_9__svg_svg_23_Template, 3, 0, "svg", 38)(24, UsersComponent_div_9__svg_svg_24_Template, 2, 0, "svg", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 39)(26, "label", 40);
    \u0275\u0275text(27, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 41);
    \u0275\u0275template(29, UsersComponent_div_9_button_29_Template, 3, 4, "button", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 39)(31, "label", 43)(32, "div", 16)(33, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_9_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formIsActive, $event) || (ctx_r1.formIsActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "div", 45)(35, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 47);
    \u0275\u0275text(37, "Active");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 48)(39, "button", 49);
    \u0275\u0275listener("click", function UsersComponent_div_9_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(40, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 50);
    \u0275\u0275listener("click", function UsersComponent_div_9_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275text(42);
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
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !!ctx_r1.editingId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "New Password (leave blank to keep)" : "Password *");
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPassword);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.showPassword ? "Hide password" : "Show password");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPassword);
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
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 64);
    \u0275\u0275element(2, "circle", 65)(3, "path", 66);
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_10_div_2_tr_19_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
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
    \u0275\u0275elementStart(0, "svg", 93);
    \u0275\u0275element(1, "path", 101);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_10_div_2_tr_19_ng_container_23__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 93);
    \u0275\u0275element(1, "path", 102);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_10_div_2_tr_19_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 91)(2, "button", 92);
    \u0275\u0275listener("click", function UsersComponent_div_10_div_2_tr_19_ng_container_23_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEdit(user_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 93);
    \u0275\u0275element(4, "path", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 95);
    \u0275\u0275listener("click", function UsersComponent_div_10_div_2_tr_19_ng_container_23_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(user_r10));
    });
    \u0275\u0275template(7, UsersComponent_div_10_div_2_tr_19_ng_container_23__svg_svg_7_Template, 2, 0, "svg", 96)(8, UsersComponent_div_10_div_2_tr_19_ng_container_23__svg_svg_8_Template, 2, 0, "svg", 96);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 97);
    \u0275\u0275listener("click", function UsersComponent_div_10_div_2_tr_19_ng_container_23_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openIpWhitelist(user_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 93);
    \u0275\u0275element(12, "path", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " IPs ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "button", 99);
    \u0275\u0275listener("click", function UsersComponent_div_10_div_2_tr_19_ng_container_23_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteUser(user_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 93);
    \u0275\u0275element(16, "path", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Delete ");
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
    \u0275\u0275elementStart(0, "span", 103);
    \u0275\u0275text(1, " Super Admin ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_10_div_2_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 75)(1, "td", 76)(2, "div", 77)(3, "div", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 80);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 81);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 76)(12, "div", 82);
    \u0275\u0275template(13, UsersComponent_div_10_div_2_tr_19_span_13_Template, 2, 6, "span", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 76)(15, "div", 27);
    \u0275\u0275element(16, "span", 84);
    \u0275\u0275elementStart(17, "span", 85);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td", 86);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 87);
    \u0275\u0275template(23, UsersComponent_div_10_div_2_tr_19_ng_container_23_Template, 18, 4, "ng-container", 88)(24, UsersComponent_div_10_div_2_tr_19_span_24_Template, 2, 0, "span", 89);
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
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1, " No users found. ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "table", 68)(2, "thead", 69)(3, "tr", 70)(4, "th", 71);
    \u0275\u0275text(5, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 71);
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 71);
    \u0275\u0275text(9, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 71);
    \u0275\u0275text(11, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 71);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 71);
    \u0275\u0275text(15, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 72);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, UsersComponent_div_10_div_2_tr_19_Template, 25, 17, "tr", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, UsersComponent_div_10_div_2_div_20_Template, 2, 0, "div", 74);
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
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275template(1, UsersComponent_div_10_div_1_Template, 4, 0, "div", 61)(2, UsersComponent_div_10_div_2_Template, 21, 2, "div", 62);
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
function UsersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function UsersComponent_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeIpWhitelist());
    });
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_12_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.ipWhitelistError);
  }
}
function UsersComponent_div_12_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 121);
    \u0275\u0275element(2, "circle", 65)(3, "path", 66);
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_12_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275text(1, " No IPs whitelisted \u2014 access allowed from any IP. ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_12_div_18_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 126)(1, "div", 127);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 128);
    \u0275\u0275element(3, "path", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 130);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 131);
    \u0275\u0275listener("click", function UsersComponent_div_12_div_18_li_3_Template_button_click_6_listener() {
      const ip_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeIp(ip_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 58);
    \u0275\u0275element(8, "path", 100);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ip_r14 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ip_r14);
  }
}
function UsersComponent_div_12_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, UsersComponent_div_12_div_18_div_1_Template, 2, 0, "div", 122);
    \u0275\u0275elementStart(2, "ul", 123);
    \u0275\u0275template(3, UsersComponent_div_12_div_18_li_3_Template, 9, 1, "li", 124);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ipWhitelistEntries.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.ipWhitelistEntries);
  }
}
function UsersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107)(2, "div")(3, "h3", 108);
    \u0275\u0275text(4, "IP Whitelist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 109);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 110);
    \u0275\u0275listener("click", function UsersComponent_div_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeIpWhitelist());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 111);
    \u0275\u0275element(9, "path", 112);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "p", 113);
    \u0275\u0275text(11, " When at least one IP is listed, this user can only log in from those addresses. Leave empty to allow login from any IP. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 114)(13, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_12_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newIpAddress, $event) || (ctx_r1.newIpAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function UsersComponent_div_12_Template_input_keyup_enter_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addIp());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 116);
    \u0275\u0275listener("click", function UsersComponent_div_12_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addIp());
    });
    \u0275\u0275text(15, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, UsersComponent_div_12_div_16_Template, 2, 1, "div", 117)(17, UsersComponent_div_12_div_17_Template, 4, 0, "div", 118)(18, UsersComponent_div_12_div_18_Template, 4, 2, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.ipWhitelistUser == null ? null : ctx_r1.ipWhitelistUser.fullName);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newIpAddress);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.ipWhitelistError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ipWhitelistLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.ipWhitelistLoading);
  }
}
var UsersComponent = class _UsersComponent {
  constructor(api, confirmDelete) {
    this.api = api;
    this.confirmDelete = confirmDelete;
    this.users = [];
    this.allRoles = [];
    this.loading = false;
    this.showPassword = false;
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
    this.showIpWhitelist = false;
    this.ipWhitelistUser = null;
    this.ipWhitelistEntries = [];
    this.ipWhitelistLoading = false;
    this.newIpAddress = "";
    this.ipWhitelistError = "";
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
        this.users = res.data.filter((u) => !this.isSystemAdmin(u));
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
    this.confirmDelete.confirm(user.fullName).then(() => {
      this.api.deleteAdminUser(user.id).subscribe((res) => {
        if (res?.success)
          this.loadUsers();
      });
    }).catch(() => {
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
  // ── IP Whitelist ──────────────────────────────────────────────────────────
  openIpWhitelist(user) {
    this.ipWhitelistUser = user;
    this.newIpAddress = "";
    this.ipWhitelistError = "";
    this.showIpWhitelist = true;
    this.loadIpWhitelist(user.id);
  }
  closeIpWhitelist() {
    this.showIpWhitelist = false;
    this.ipWhitelistUser = null;
    this.ipWhitelistEntries = [];
  }
  loadIpWhitelist(userId) {
    this.ipWhitelistLoading = true;
    this.api.getUserIpWhitelist(userId).subscribe({
      next: (res) => {
        this.ipWhitelistEntries = res?.success && res.data ? res.data : [];
        this.ipWhitelistLoading = false;
      },
      error: () => {
        this.ipWhitelistEntries = [];
        this.ipWhitelistLoading = false;
      }
    });
  }
  addIp() {
    const ip = this.newIpAddress.trim();
    this.ipWhitelistError = "";
    if (!ip)
      return;
    const ipPattern = /^(\d{1,3}\.){3}\d{1,3}(\/\d{1,2})?$/;
    if (!ipPattern.test(ip)) {
      this.ipWhitelistError = "Invalid IP address format. Use e.g. 192.168.1.1 or 192.168.1.0/24";
      return;
    }
    if (!this.ipWhitelistUser)
      return;
    this.api.addUserIpWhitelist(this.ipWhitelistUser.id, ip).subscribe({
      next: (res) => {
        if (res?.success) {
          this.newIpAddress = "";
          this.loadIpWhitelist(this.ipWhitelistUser.id);
        } else {
          this.ipWhitelistError = res?.message || "Failed to add IP.";
        }
      },
      error: () => {
        this.ipWhitelistError = "Server error.";
      }
    });
  }
  removeIp(ip) {
    if (!this.ipWhitelistUser)
      return;
    this.api.removeUserIpWhitelist(this.ipWhitelistUser.id, ip).subscribe({
      next: (res) => {
        if (res?.success)
          this.loadIpWhitelist(this.ipWhitelistUser.id);
      }
    });
  }
  static {
    this.\u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ConfirmDeleteService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 13, vars: 6, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm", 3, "click", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden", 4, "ngIf"], ["class", "fixed inset-0 bg-black/50 z-50", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "class", "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] w-full max-w-lg rounded-2xl bg-white dark:bg-surface-800 shadow-xl p-6", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-brand-600", "text-white", "rounded-xl", "text-sm", "font-medium", "hover:bg-brand-700", "transition-colors", "shadow-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "flex-col", "sm:flex-row", "items-end", "gap-4", "flex-wrap"], [1, "flex-1", "min-w-[180px]"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-1"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Name, email or phone", 1, "w-full", "pl-10", "pr-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "flex-1", "min-w-[160px]"], [1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex-1", "min-w-[140px]"], ["value", "active"], ["value", "inactive"], [1, "flex", "items-center", "gap-2"], [1, "px-4", "py-2.5", "bg-brand-600", "text-white", "rounded-xl", "text-sm", "font-medium", "hover:bg-brand-700", "transition-colors", 3, "click"], [1, "px-4", "py-2.5", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-xl", "text-sm", "font-medium", "transition-colors", 3, "click"], [3, "value"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], ["type", "text", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", "disabled:opacity-60", "disabled:cursor-not-allowed", "disabled:bg-surface-100", "dark:disabled:bg-surface-800", 3, "ngModelChange", "ngModel", "disabled"], ["class", "mt-1 text-xs text-surface-400 dark:text-surface-500", 4, "ngIf"], [1, "w-full", "px-4", "py-2.5", "pr-10", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-surface-400", "hover:text-surface-600", "dark:hover:text-surface-300", "transition-colors", 3, "click"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "sm:col-span-2"], [1, "block", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "mb-2"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", "class", "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "inline-flex", "items-center", "gap-3", "cursor-pointer"], ["type", "checkbox", 1, "peer", "sr-only", 3, "ngModelChange", "ngModel"], [1, "w-11", "h-6", "bg-surface-300", "dark:bg-surface-600", "rounded-full", "peer-checked:bg-brand-600", "transition-colors"], [1, "absolute", "left-0.5", "top-0.5", "w-5", "h-5", "bg-white", "rounded-full", "shadow", "transition-transform", "peer-checked:translate-x-5"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "flex", "items-center", "justify-end", "gap-3", "mt-6", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "px-4", "py-2.5", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-xl", "transition-colors", 3, "click"], [1, "px-5", "py-2.5", "text-sm", "font-medium", "bg-brand-600", "text-white", "rounded-xl", "hover:bg-brand-700", "transition-colors", "shadow-sm", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "mt-1", "text-xs", "text-surface-400", "dark:text-surface-500"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "border", "text-sm", "font-medium", "transition-colors", 3, "click", "ngClass"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft", "overflow-hidden"], ["class", "flex justify-center p-12", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "flex", "justify-center", "p-12"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "whitespace-nowrap"], [1, "bg-surface-50", "dark:bg-surface-700/50"], [1, "border-b", "border-surface-200", "dark:border-surface-700", "text-surface-600", "dark:text-surface-300"], ["scope", "col", 1, "px-4", "py-3", "font-semibold"], ["scope", "col", 1, "px-4", "py-3", "font-semibold", "text-right"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-center py-12 text-surface-500 dark:text-surface-400", 4, "ngIf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors", 3, "ngClass"], [1, "px-4", "py-3"], [1, "flex", "items-center", "gap-3"], [1, "w-9", "h-9", "rounded-full", "bg-brand-600", "text-white", "flex", "items-center", "justify-center", "font-semibold", "text-sm", "shrink-0"], [1, "font-medium", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-300", "truncate", "max-w-[200px]"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-300"], [1, "flex", "flex-wrap", "gap-1"], ["class", "inline-flex px-2 py-0.5 rounded-full text-xs font-medium", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "w-2", "h-2", "rounded-full", 3, "ngClass"], [1, "text-sm", 3, "ngClass"], [1, "px-4", "py-3", "text-surface-500", "dark:text-surface-400", "text-xs"], [1, "px-4", "py-3", "text-right"], [4, "ngIf"], ["class", "inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-warning-50 text-warning-700 dark:bg-warning-900/20 dark:text-warning-400", 4, "ngIf"], [1, "inline-flex", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "flex", "items-center", "justify-end", "gap-1"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-brand-600", "dark:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-3.5", "h-3.5"], ["d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition-colors", 3, "click", "ngClass"], ["class", "w-3.5 h-3.5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 4, "ngIf"], ["title", "Manage IP Whitelist", 1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"], ["aria-label", "Delete user", 1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-md", "text-xs", "font-medium", "text-danger-500", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "inline-flex", "px-2.5", "py-1", "rounded-full", "text-xs", "font-medium", "bg-warning-50", "text-warning-700", "dark:bg-warning-900/20", "dark:text-warning-400"], [1, "text-center", "py-12", "text-surface-500", "dark:text-surface-400"], [1, "fixed", "inset-0", "bg-black/50", "z-50", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "fixed", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-[51]", "w-full", "max-w-lg", "rounded-2xl", "bg-white", "dark:bg-surface-800", "shadow-xl", "p-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mt-0.5"], [1, "p-1.5", "rounded-md", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-surface-500", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mb-4", "bg-surface-50", "dark:bg-surface-700", "rounded-lg", "px-3", "py-2"], [1, "flex", "gap-2", "mb-4"], ["type", "text", "placeholder", "e.g. 192.168.1.1 or 10.0.0.0/24", 1, "flex-1", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "px-4", "py-2", "rounded-lg", "bg-brand-600", "text-white", "text-sm", "font-medium", "hover:bg-brand-700", "transition-colors", 3, "click"], ["class", "mb-3 text-xs text-danger-600 dark:text-danger-400", 4, "ngIf"], ["class", "flex justify-center py-6", 4, "ngIf"], [1, "mb-3", "text-xs", "text-danger-600", "dark:text-danger-400"], [1, "flex", "justify-center", "py-6"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-6", "w-6", "text-brand-600"], ["class", "text-center py-6 text-sm text-surface-400 dark:text-surface-500", 4, "ngIf"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "flex items-center justify-between py-2.5", 4, "ngFor", "ngForOf"], [1, "text-center", "py-6", "text-sm", "text-surface-400", "dark:text-surface-500"], [1, "flex", "items-center", "justify-between", "py-2.5"], [1, "flex", "items-center", "gap-2.5"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-4", "h-4", "text-success-500", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "text-sm", "font-mono", "text-surface-900", "dark:text-surface-100"], [1, "p-1.5", "rounded-md", "text-danger-500", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition", 3, "click"]], template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        \u0275\u0275text(4, "Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Manage admin panel users and role assignments");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, UsersComponent_button_7_Template, 4, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, UsersComponent_div_8_Template, 31, 4, "div", 5)(9, UsersComponent_div_9_Template, 43, 16, "div", 5)(10, UsersComponent_div_10_Template, 3, 2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, UsersComponent_div_11_Template, 1, 0, "div", 7)(12, UsersComponent_div_12_Template, 19, 5, "div", 8);
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
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showIpWhitelist);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showIpWhitelist);
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
        <p *ngIf="!!editingId" class="mt-1 text-xs text-surface-400 dark:text-surface-500">Email cannot be changed after account creation.</p>
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">Phone Number</label>
        <input type="text" [(ngModel)]="formPhone"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
      </div>
      <div>
        <label class="block text-xs font-medium text-surface-600 dark:text-surface-400 mb-1">{{ editingId ? 'New Password (leave blank to keep)' : 'Password *' }}</label>
        <div class="relative">
          <input [type]="showPassword ? 'text' : 'password'" [(ngModel)]="formPassword"
            class="w-full px-4 py-2.5 pr-10 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none" />
          <button type="button" (click)="showPassword = !showPassword"
            [attr.aria-label]="showPassword ? 'Hide password' : 'Show password'"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600 dark:hover:text-surface-300 transition-colors">
            <!-- Eye icon (show) -->
            <svg *ngIf="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <!-- Eye-slash icon (hide) -->
            <svg *ngIf="showPassword" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          </button>
        </div>
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
            <th scope="col" class="px-4 py-3 font-semibold">User</th>
            <th scope="col" class="px-4 py-3 font-semibold">Email</th>
            <th scope="col" class="px-4 py-3 font-semibold">Phone</th>
            <th scope="col" class="px-4 py-3 font-semibold">Roles</th>
            <th scope="col" class="px-4 py-3 font-semibold">Status</th>
            <th scope="col" class="px-4 py-3 font-semibold">Created</th>
            <th scope="col" class="px-4 py-3 font-semibold text-right">Actions</th>
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
                  <!-- IP Whitelist -->
                  <button (click)="openIpWhitelist(user)" title="Manage IP Whitelist"
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                    </svg>
                    IPs
                  </button>
                  <!-- Delete with SweetAlert2 confirmation -->
                  <button (click)="deleteUser(user)"
                    aria-label="Delete user"
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

<!-- \u2500\u2500 IP Whitelist Dialog \u2500\u2500 -->
<div *ngIf="showIpWhitelist" class="fixed inset-0 bg-black/50 z-50" (click)="closeIpWhitelist()"></div>
<div *ngIf="showIpWhitelist" role="dialog" aria-modal="true"
     class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] w-full max-w-lg rounded-2xl bg-white dark:bg-surface-800 shadow-xl p-6">

  <div class="flex items-center justify-between mb-4">
    <div>
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">IP Whitelist</h3>
      <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">{{ ipWhitelistUser?.fullName }}</p>
    </div>
    <button (click)="closeIpWhitelist()" class="p-1.5 rounded-md hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-500 transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  </div>

  <p class="text-xs text-surface-500 dark:text-surface-400 mb-4 bg-surface-50 dark:bg-surface-700 rounded-lg px-3 py-2">
    When at least one IP is listed, this user can only log in from those addresses. Leave empty to allow login from any IP.
  </p>

  <!-- Add IP -->
  <div class="flex gap-2 mb-4">
    <input type="text" [(ngModel)]="newIpAddress" placeholder="e.g. 192.168.1.1 or 10.0.0.0/24"
           (keyup.enter)="addIp()"
           class="flex-1 px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm" />
    <button (click)="addIp()"
      class="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors">
      Add
    </button>
  </div>
  <div *ngIf="ipWhitelistError" class="mb-3 text-xs text-danger-600 dark:text-danger-400">{{ ipWhitelistError }}</div>

  <!-- Loading -->
  <div *ngIf="ipWhitelistLoading" class="flex justify-center py-6">
    <svg class="animate-spin h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
  </div>

  <!-- IP List -->
  <div *ngIf="!ipWhitelistLoading">
    <div *ngIf="ipWhitelistEntries.length === 0" class="text-center py-6 text-sm text-surface-400 dark:text-surface-500">
      No IPs whitelisted \u2014 access allowed from any IP.
    </div>
    <ul class="divide-y divide-surface-100 dark:divide-surface-700">
      <li *ngFor="let ip of ipWhitelistEntries" class="flex items-center justify-between py-2.5">
        <div class="flex items-center gap-2.5">
          <svg class="w-4 h-4 text-success-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <span class="text-sm font-mono text-surface-900 dark:text-surface-100">{{ ip }}</span>
        </div>
        <button (click)="removeIp(ip)"
          class="p-1.5 rounded-md text-danger-500 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/user-management/users/users.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=users.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: ConfirmDeleteService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/pages/admin/user-management/users/users.component.ts", lineNumber: 34 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-JSRKUQJH.js.map
