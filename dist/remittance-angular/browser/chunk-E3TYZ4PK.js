import {
  MatDividerModule
} from "./chunk-GFHCDV2J.js";
import {
  MatCheckboxModule
} from "./chunk-J6KJP3FP.js";
import {
  MatChipsModule
} from "./chunk-IHTO5KXG.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-KZMFZGET.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-6JH6Y4IN.js";
import {
  MatOption
} from "./chunk-4RZM2DGZ.js";
import "./chunk-IOMUWKJD.js";
import "./chunk-Q6H4NCRS.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-4T44KS6V.js";
import "./chunk-BE35DT6E.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-GT44UNPC.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WB3VPGLQ.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-JCOTY37K.js";
import "./chunk-UIJ624TU.js";
import {
  MatFormField,
  MatLabel,
  MatSuffix
} from "./chunk-ZCHVZ7GG.js";
import {
  ApiService
} from "./chunk-2RUHVO6L.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgModel,
  RequiredValidator
} from "./chunk-WDVIFEQ7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MK4SB477.js";
import "./chunk-GPY2JV2J.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-MZ37WZKD.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
} from "./chunk-BKSYICRS.js";

// src/app/pages/admin/user-management/users/users.component.ts
function UsersComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function UsersComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New User ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_mat_card_8_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
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
function UsersComponent_mat_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 8)(1, "div", 9)(2, "mat-form-field", 10)(3, "mat-label");
    \u0275\u0275text(4, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_mat_card_8_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function UsersComponent_mat_card_8_Template_input_keyup_enter_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-icon", 12);
    \u0275\u0275text(7, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 10)(9, "mat-label");
    \u0275\u0275text(10, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_mat_card_8_Template_mat_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterRole, $event) || (ctx_r1.filterRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "mat-option", 14);
    \u0275\u0275text(13, "All Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UsersComponent_mat_card_8_mat_option_14_Template, 2, 2, "mat-option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 10)(16, "mat-label");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_mat_card_8_Template_mat_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterStatus, $event) || (ctx_r1.filterStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "mat-option", 14);
    \u0275\u0275text(20, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 16);
    \u0275\u0275text(22, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 17);
    \u0275\u0275text(24, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 7);
    \u0275\u0275listener("click", function UsersComponent_mat_card_8_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(26, "Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 18);
    \u0275\u0275listener("click", function UsersComponent_mat_card_8_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(28, "Clear");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterRole);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.allRoles);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterStatus);
  }
}
function UsersComponent_mat_card_9_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275property("value", r_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", r_r6.name, " (", r_r6.portal, ") ");
  }
}
function UsersComponent_mat_card_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 20)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content")(5, "div", 21)(6, "mat-form-field", 22)(7, "mat-label");
    \u0275\u0275text(8, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_mat_card_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formFullName, $event) || (ctx_r1.formFullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 22)(11, "mat-label");
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_mat_card_9_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formEmail, $event) || (ctx_r1.formEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 22)(15, "mat-label");
    \u0275\u0275text(16, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_mat_card_9_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPhone, $event) || (ctx_r1.formPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 22)(19, "mat-label");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_mat_card_9_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPassword, $event) || (ctx_r1.formPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-form-field", 27)(23, "mat-label");
    \u0275\u0275text(24, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_mat_card_9_Template_mat_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formRoleIds, $event) || (ctx_r1.formRoleIds = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(26, UsersComponent_mat_card_9_mat_option_26_Template, 2, 3, "mat-option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-slide-toggle", 29);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_mat_card_9_Template_mat_slide_toggle_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formIsActive, $event) || (ctx_r1.formIsActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(28, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "mat-card-actions", 30)(30, "button", 18);
    \u0275\u0275listener("click", function UsersComponent_mat_card_9_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(31, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 31);
    \u0275\u0275listener("click", function UsersComponent_mat_card_9_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "Edit User" : "Create User");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formFullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "New Password (leave blank to keep)" : "Password");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPassword);
    \u0275\u0275property("required", !ctx_r1.editingId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formRoleIds);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.allRoles);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formIsActive);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.formFullName.trim() || !ctx_r1.formEmail.trim() || !ctx_r1.editingId && !ctx_r1.formPassword.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId ? "Update" : "Create", " ");
  }
}
function UsersComponent_mat_card_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "mat-progress-spinner", 46);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_mat_card_10_div_18_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275classMap("portal-" + r_r7.portal.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.name);
  }
}
function UsersComponent_mat_card_10_div_18_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 54);
    \u0275\u0275listener("click", function UsersComponent_mat_card_10_div_18_ng_container_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const user_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(user_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 55);
    \u0275\u0275listener("click", function UsersComponent_mat_card_10_div_18_ng_container_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const user_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(user_r9));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 56);
    \u0275\u0275listener("click", function UsersComponent_mat_card_10_div_18_ng_container_20_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const user_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteUser(user_r9));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", user_r9.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r9.isActive ? "block" : "check_circle");
  }
}
function UsersComponent_mat_card_10_div_18_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "Super Admin");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_mat_card_10_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 35)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "span", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 38);
    \u0275\u0275template(12, UsersComponent_mat_card_10_div_18_span_12_Template, 2, 3, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 39);
    \u0275\u0275element(14, "span", 50);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 40);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 41);
    \u0275\u0275template(20, UsersComponent_mat_card_10_div_18_ng_container_20_Template, 10, 2, "ng-container", 51)(21, UsersComponent_mat_card_10_div_18_span_21_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("user-row--inactive", !user_r9.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r9.fullName.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r9.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r9.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r9.phoneNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", user_r9.roles);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", user_r9.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r9.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 13, user_r9.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isSystemAdmin(user_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSystemAdmin(user_r9));
  }
}
function UsersComponent_mat_card_10_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1, " No users found. ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_mat_card_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 32)(1, "div", 33)(2, "div", 34)(3, "span", 35);
    \u0275\u0275text(4, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 37);
    \u0275\u0275text(8, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 38);
    \u0275\u0275text(10, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 39);
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 40);
    \u0275\u0275text(14, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 41);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, UsersComponent_mat_card_10_div_17_Template, 2, 0, "div", 42)(18, UsersComponent_mat_card_10_div_18_Template, 22, 16, "div", 43)(19, UsersComponent_mat_card_10_div_19_Template, 2, 0, "div", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.users.length === 0);
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
  getRoleNames(user) {
    return user.roles.map((r) => r.name).join(", ");
  }
  static {
    this.\u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 11, vars: 4, consts: [[1, "page-container"], [1, "page-header"], [1, "subtitle"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "filter-card", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "filter-card"], [1, "filter-row"], ["appearance", "outline", 1, "filter-field"], ["matInput", "", "placeholder", "Name, email or phone", 3, "ngModelChange", "keyup.enter", "ngModel"], ["matSuffix", ""], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "active"], ["value", "inactive"], ["mat-button", "", 3, "click"], [3, "value"], [1, "form-card"], [1, "form-grid"], ["appearance", "outline"], ["matInput", "", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "email", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "password", 3, "ngModelChange", "ngModel", "required"], ["appearance", "outline", 1, "full-width"], ["multiple", "", 3, "ngModelChange", "ngModel"], ["color", "primary", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-flat-button", "", "color", "primary", 3, "click", "disabled"], [1, "table-card"], [1, "user-table"], [1, "user-row", "user-row--header"], [1, "col-name"], [1, "col-email"], [1, "col-phone"], [1, "col-roles"], [1, "col-status"], [1, "col-date"], [1, "col-actions"], ["class", "loading-row", 4, "ngIf"], ["class", "user-row", 3, "user-row--inactive", 4, "ngFor", "ngForOf"], ["class", "empty-row", 4, "ngIf"], [1, "loading-row"], ["mode", "indeterminate", "diameter", "32"], [1, "user-row"], [1, "user-avatar"], ["class", "role-chip", 3, "class", 4, "ngFor", "ngForOf"], [1, "status-dot"], [4, "ngIf"], ["class", "system-badge", 4, "ngIf"], [1, "role-chip"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", 3, "click", "matTooltip"], ["mat-icon-button", "", "matTooltip", "Delete", "color", "warn", 3, "click"], [1, "system-badge"], [1, "empty-row"]], template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Manage admin panel users and role assignments");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, UsersComponent_button_7_Template, 4, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, UsersComponent_mat_card_8_Template, 29, 4, "mat-card", 4)(9, UsersComponent_mat_card_9_Template, 34, 12, "mat-card", 5)(10, UsersComponent_mat_card_10_Template, 20, 3, "mat-card", 6);
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
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      RequiredValidator,
      NgModel,
      MatCardModule,
      MatCard,
      MatCardActions,
      MatCardContent,
      MatCardHeader,
      MatCardTitle,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatCheckboxModule,
      MatChipsModule,
      MatTooltipModule,
      MatTooltip,
      MatSlideToggleModule,
      MatSlideToggle,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatDividerModule
    ], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px 16px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #666;\n  font-size: 0.875rem;\n}\n.filter-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 12px 16px;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filter-row[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.form-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n  margin-top: 12px;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.user-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.user-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n  gap: 8px;\n}\n.user-row--header[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  font-weight: 600;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  color: #666;\n}\n.user-row--inactive[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.user-row[_ngcontent-%COMP%]:hover:not(.user-row--header) {\n  background: #fafafa;\n}\n.col-name[_ngcontent-%COMP%] {\n  flex: 1.5;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.col-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.col-email[_ngcontent-%COMP%] {\n  flex: 1.5;\n  font-size: 0.85rem;\n  color: #555;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-phone[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.85rem;\n}\n.col-roles[_ngcontent-%COMP%] {\n  flex: 1.5;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.col-status[_ngcontent-%COMP%] {\n  flex: 0.8;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n}\n.col-date[_ngcontent-%COMP%] {\n  flex: 0.8;\n  font-size: 0.8rem;\n  color: #888;\n}\n.col-actions[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  justify-content: flex-end;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #1565c0;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.role-chip[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n.role-chip.portal-admin[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.role-chip.portal-agent[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.role-chip.portal-customer[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ccc;\n  display: inline-block;\n}\n.status-dot.active[_ngcontent-%COMP%] {\n  background: #4caf50;\n}\n.system-badge[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  background: #fff3e0;\n  color: #e65100;\n}\n.loading-row[_ngcontent-%COMP%], \n.empty-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 32px;\n  color: #888;\n}\n.dark-mode[_nghost-%COMP%]   .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.dark-mode[_nghost-%COMP%]   .user-row[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .user-row[_ngcontent-%COMP%] {\n  border-color: #333;\n}\n.dark-mode[_nghost-%COMP%]   .user-row--header[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .user-row--header[_ngcontent-%COMP%] {\n  background: #1e1e1e;\n  color: #aaa;\n}\n.dark-mode[_nghost-%COMP%]   .user-row[_ngcontent-%COMP%]:hover:not(.user-row--header), .dark-mode   [_nghost-%COMP%]   .user-row[_ngcontent-%COMP%]:hover:not(.user-row--header) {\n  background: #252525;\n}\n.dark-mode[_nghost-%COMP%]   .col-email[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .col-email[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.dark-mode[_nghost-%COMP%]   .col-date[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .col-date[_ngcontent-%COMP%] {\n  color: #777;\n}\n.dark-mode[_nghost-%COMP%]   .filter-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .filter-card[_ngcontent-%COMP%] {\n  background: #1e1e1e;\n}\n/*# sourceMappingURL=users.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCheckboxModule,
      MatChipsModule,
      MatTooltipModule,
      MatSlideToggleModule,
      MatProgressSpinnerModule,
      MatDividerModule
    ], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1>Users</h1>
      <p class="subtitle">Manage admin panel users and role assignments</p>
    </div>
    <button mat-flat-button color="primary" (click)="openCreate()" *ngIf="!showForm">
      <mat-icon>person_add</mat-icon> New User
    </button>
  </div>

  <!-- \u2500\u2500 Filters \u2500\u2500 -->
  <mat-card *ngIf="!showForm" class="filter-card">
    <div class="filter-row">
      <mat-form-field appearance="outline" class="filter-field">
        <mat-label>Search</mat-label>
        <input matInput [(ngModel)]="searchQuery" placeholder="Name, email or phone" (keyup.enter)="applyFilters()" />
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>

      <mat-form-field appearance="outline" class="filter-field">
        <mat-label>Role</mat-label>
        <mat-select [(ngModel)]="filterRole">
          <mat-option value="">All Roles</mat-option>
          <mat-option *ngFor="let r of allRoles" [value]="r.name">{{ r.name }}</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field appearance="outline" class="filter-field">
        <mat-label>Status</mat-label>
        <mat-select [(ngModel)]="filterStatus">
          <mat-option value="">All</mat-option>
          <mat-option value="active">Active</mat-option>
          <mat-option value="inactive">Inactive</mat-option>
        </mat-select>
      </mat-form-field>

      <button mat-flat-button color="primary" (click)="applyFilters()">Filter</button>
      <button mat-button (click)="clearFilters()">Clear</button>
    </div>
  </mat-card>

  <!-- \u2500\u2500 User Form \u2500\u2500 -->
  <mat-card *ngIf="showForm" class="form-card">
    <mat-card-header>
      <mat-card-title>{{ editingId ? 'Edit User' : 'Create User' }}</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <div class="form-grid">
        <mat-form-field appearance="outline">
          <mat-label>Full Name</mat-label>
          <input matInput [(ngModel)]="formFullName" required />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Email</mat-label>
          <input matInput [(ngModel)]="formEmail" type="email" required />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Phone Number</mat-label>
          <input matInput [(ngModel)]="formPhone" />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>{{ editingId ? 'New Password (leave blank to keep)' : 'Password' }}</mat-label>
          <input matInput [(ngModel)]="formPassword" type="password" [required]="!editingId" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Roles</mat-label>
          <mat-select [(ngModel)]="formRoleIds" multiple>
            <mat-option *ngFor="let r of allRoles" [value]="r.id">
              {{ r.name }} ({{ r.portal }})
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-slide-toggle [(ngModel)]="formIsActive" color="primary">Active</mat-slide-toggle>
      </div>
    </mat-card-content>
    <mat-card-actions align="end">
      <button mat-button (click)="cancelForm()">Cancel</button>
      <button mat-flat-button color="primary" (click)="saveUser()"
        [disabled]="!formFullName.trim() || !formEmail.trim() || (!editingId && !formPassword.trim())">
        {{ editingId ? 'Update' : 'Create' }}
      </button>
    </mat-card-actions>
  </mat-card>

  <!-- \u2500\u2500 Users Table \u2500\u2500 -->
  <mat-card *ngIf="!showForm" class="table-card">
    <div class="user-table">
      <div class="user-row user-row--header">
        <span class="col-name">User</span>
        <span class="col-email">Email</span>
        <span class="col-phone">Phone</span>
        <span class="col-roles">Roles</span>
        <span class="col-status">Status</span>
        <span class="col-date">Created</span>
        <span class="col-actions">Actions</span>
      </div>

      <div *ngIf="loading" class="loading-row">
        <mat-progress-spinner mode="indeterminate" diameter="32"></mat-progress-spinner>
      </div>

      <div class="user-row" *ngFor="let user of users" [class.user-row--inactive]="!user.isActive">
        <span class="col-name">
          <div class="user-avatar">{{ user.fullName.charAt(0).toUpperCase() }}</div>
          <div>
            <strong>{{ user.fullName }}</strong>
          </div>
        </span>
        <span class="col-email">{{ user.email }}</span>
        <span class="col-phone">{{ user.phoneNumber || '-' }}</span>
        <span class="col-roles">
          <span class="role-chip" *ngFor="let r of user.roles"
            [class]="'portal-' + r.portal.toLowerCase()">{{ r.name }}</span>
        </span>
        <span class="col-status">
          <span class="status-dot" [class.active]="user.isActive"></span>
          {{ user.isActive ? 'Active' : 'Inactive' }}
        </span>
        <span class="col-date">{{ user.createdAt | date:'mediumDate' }}</span>
        <span class="col-actions">
          <ng-container *ngIf="!isSystemAdmin(user)">
            <button mat-icon-button matTooltip="Edit" (click)="openEdit(user)">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button [matTooltip]="user.isActive ? 'Deactivate' : 'Activate'" (click)="toggleStatus(user)">
              <mat-icon>{{ user.isActive ? 'block' : 'check_circle' }}</mat-icon>
            </button>
            <button mat-icon-button matTooltip="Delete" color="warn" (click)="deleteUser(user)">
              <mat-icon>delete</mat-icon>
            </button>
          </ng-container>
          <span *ngIf="isSystemAdmin(user)" class="system-badge">Super Admin</span>
        </span>
      </div>

      <div *ngIf="!loading && users.length === 0" class="empty-row">
        No users found.
      </div>
    </div>
  </mat-card>
</div>
`, styles: ["/* src/app/pages/admin/user-management/users/users.component.scss */\n.page-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px 16px;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header .subtitle {\n  margin: 4px 0 0;\n  color: #666;\n  font-size: 0.875rem;\n}\n.filter-card {\n  margin-bottom: 16px;\n  padding: 12px 16px;\n}\n.filter-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filter-row .filter-field {\n  flex: 1;\n  min-width: 160px;\n}\n.form-card {\n  margin-bottom: 20px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n  margin-top: 12px;\n}\n.form-grid .full-width {\n  grid-column: 1/-1;\n}\n.table-card {\n  padding: 0;\n}\n.user-table {\n  width: 100%;\n}\n.user-row {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n  gap: 8px;\n}\n.user-row--header {\n  background: #f5f5f5;\n  font-weight: 600;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  color: #666;\n}\n.user-row--inactive {\n  opacity: 0.6;\n}\n.user-row:hover:not(.user-row--header) {\n  background: #fafafa;\n}\n.col-name {\n  flex: 1.5;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.col-name strong {\n  font-size: 0.9rem;\n}\n.col-email {\n  flex: 1.5;\n  font-size: 0.85rem;\n  color: #555;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-phone {\n  flex: 1;\n  font-size: 0.85rem;\n}\n.col-roles {\n  flex: 1.5;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.col-status {\n  flex: 0.8;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n}\n.col-date {\n  flex: 0.8;\n  font-size: 0.8rem;\n  color: #888;\n}\n.col-actions {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  justify-content: flex-end;\n}\n.user-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #1565c0;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.role-chip {\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n.role-chip.portal-admin {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.role-chip.portal-agent {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.role-chip.portal-customer {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ccc;\n  display: inline-block;\n}\n.status-dot.active {\n  background: #4caf50;\n}\n.system-badge {\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  background: #fff3e0;\n  color: #e65100;\n}\n.loading-row,\n.empty-row {\n  display: flex;\n  justify-content: center;\n  padding: 32px;\n  color: #888;\n}\n:host-context(.dark-mode) .page-header .subtitle {\n  color: #aaa;\n}\n:host-context(.dark-mode) .user-row {\n  border-color: #333;\n}\n:host-context(.dark-mode) .user-row--header {\n  background: #1e1e1e;\n  color: #aaa;\n}\n:host-context(.dark-mode) .user-row:hover:not(.user-row--header) {\n  background: #252525;\n}\n:host-context(.dark-mode) .col-email {\n  color: #aaa;\n}\n:host-context(.dark-mode) .col-date {\n  color: #777;\n}\n:host-context(.dark-mode) .filter-card {\n  background: #1e1e1e;\n}\n/*# sourceMappingURL=users.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/pages/admin/user-management/users/users.component.ts", lineNumber: 48 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-E3TYZ4PK.js.map
