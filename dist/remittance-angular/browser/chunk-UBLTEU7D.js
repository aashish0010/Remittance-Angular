import {
  MatDividerModule
} from "./chunk-A5422WZE.js";
import {
  MatDialogModule
} from "./chunk-ZRBUB2QD.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-YOD3WZCJ.js";
import {
  MatChipsModule
} from "./chunk-MIGO47T2.js";
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
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-COXUGWJY.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
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
  NgControlStatus,
  NgModel,
  RequiredValidator
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
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/pages/admin/user-management/roles/roles.component.ts
var _c0 = () => ["Read", "Write", "Approve", "Delete"];
function RolesComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function RolesComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New Role ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_mat_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 8)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content")(5, "div", 9)(6, "mat-form-field", 10)(7, "mat-label");
    \u0275\u0275text(8, "Role Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_mat_card_8_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formName, $event) || (ctx_r1.formName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 10)(11, "mat-label");
    \u0275\u0275text(12, "Portal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_mat_card_8_Template_mat_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPortal, $event) || (ctx_r1.formPortal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "mat-option", 13);
    \u0275\u0275text(15, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-option", 14);
    \u0275\u0275text(17, "Agent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "mat-form-field", 15)(19, "mat-label");
    \u0275\u0275text(20, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_mat_card_8_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formDescription, $event) || (ctx_r1.formDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-slide-toggle", 17);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_mat_card_8_Template_mat_slide_toggle_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formIsActive, $event) || (ctx_r1.formIsActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(23, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "mat-card-actions", 18)(25, "button", 19);
    \u0275\u0275listener("click", function RolesComponent_mat_card_8_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 20);
    \u0275\u0275listener("click", function RolesComponent_mat_card_8_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRole());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "Edit Role" : "Create Role");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPortal);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formDescription);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formIsActive);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.formName.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId ? "Update" : "Create", " ");
  }
}
function RolesComponent_mat_card_9_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r5);
  }
}
function RolesComponent_mat_card_9_div_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 27)(1, "mat-checkbox", 32);
    \u0275\u0275listener("change", function RolesComponent_mat_card_9_div_14_span_5_Template_mat_checkbox_change_1_listener() {
      const perm_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePerm(perm_r8.id));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perm_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isPermSelected(perm_r8.id));
  }
}
function RolesComponent_mat_card_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 25)(2, "mat-icon", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RolesComponent_mat_card_9_div_14_span_5_Template, 2, 1, "span", 26);
    \u0275\u0275elementStart(6, "span", 27)(7, "mat-checkbox", 31);
    \u0275\u0275listener("change", function RolesComponent_mat_card_9_div_14_Template_mat_checkbox_change_7_listener() {
      const menu_r9 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAllMenuPerms(menu_r9));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(menu_r9.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", menu_r9.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", menu_r9.permissions);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isAllMenuPermsSelected(menu_r9));
  }
}
function RolesComponent_mat_card_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 21)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content")(5, "p", 22);
    \u0275\u0275text(6, "Select which menu actions this role can access.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 23)(8, "div", 24)(9, "span", 25);
    \u0275\u0275text(10, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, RolesComponent_mat_card_9_span_11_Template, 2, 1, "span", 26);
    \u0275\u0275elementStart(12, "span", 27);
    \u0275\u0275text(13, "All");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, RolesComponent_mat_card_9_div_14_Template, 8, 4, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-card-actions", 18)(16, "button", 19);
    \u0275\u0275listener("click", function RolesComponent_mat_card_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelPermissions());
    });
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 7);
    \u0275\u0275listener("click", function RolesComponent_mat_card_9_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePermissions());
    });
    \u0275\u0275text(19, "Save Permissions");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Assign Permissions \u2014 ", ctx_r1.permRoleName, "");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filteredMenus);
  }
}
function RolesComponent_mat_card_10_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "mat-progress-spinner", 46);
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_mat_card_10_div_16_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r10.description);
  }
}
function RolesComponent_mat_card_10_div_16_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 52);
    \u0275\u0275listener("click", function RolesComponent_mat_card_10_div_16_ng_container_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const role_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(role_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 53);
    \u0275\u0275listener("click", function RolesComponent_mat_card_10_div_16_ng_container_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const role_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPermissions(role_r10));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "security");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 54);
    \u0275\u0275listener("click", function RolesComponent_mat_card_10_div_16_ng_container_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const role_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteRole(role_r10));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", role_r10.userCount > 0);
  }
}
function RolesComponent_mat_card_10_div_16_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "System");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_mat_card_10_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 36)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RolesComponent_mat_card_10_div_16_small_4_Template, 2, 1, "small", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37)(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 40);
    \u0275\u0275element(13, "span", 50);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 41);
    \u0275\u0275template(16, RolesComponent_mat_card_10_div_16_ng_container_16_Template, 10, 1, "ng-container", 48)(17, RolesComponent_mat_card_10_div_16_span_17_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r10 = ctx.$implicit;
    \u0275\u0275classProp("role-row--inactive", !role_r10.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r10.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r10.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("portal-" + role_r10.portal.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r10.portal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r10.userCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r10.permissionCount);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", role_r10.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r10.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", role_r10.roleType !== "SystemAdmin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r10.roleType === "SystemAdmin");
  }
}
function RolesComponent_mat_card_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " No roles found. ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_mat_card_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 33)(1, "div", 34)(2, "div", 35)(3, "span", 36);
    \u0275\u0275text(4, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6, "Portal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 38);
    \u0275\u0275text(8, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 39);
    \u0275\u0275text(10, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 40);
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 41);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, RolesComponent_mat_card_10_div_15_Template, 2, 0, "div", 42)(16, RolesComponent_mat_card_10_div_16_Template, 18, 14, "div", 43)(17, RolesComponent_mat_card_10_div_17_Template, 2, 0, "div", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.roles.length === 0);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesComponent, selectors: [["app-roles"]], decls: 11, vars: 4, consts: [[1, "page-container"], [1, "page-header"], [1, "subtitle"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], ["class", "form-card perm-card", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "form-card"], [1, "form-grid"], ["appearance", "outline"], ["matInput", "", "required", "", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "Admin"], ["value", "Agent"], ["appearance", "outline", 1, "full-width"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["color", "primary", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click", "disabled"], [1, "form-card", "perm-card"], [1, "perm-hint"], [1, "perm-grid"], [1, "perm-menu-row", "perm-menu-row--header"], [1, "perm-menu-name"], ["class", "perm-action", 4, "ngFor", "ngForOf"], [1, "perm-action"], ["class", "perm-menu-row", 4, "ngFor", "ngForOf"], [1, "perm-menu-row"], [1, "menu-icon"], ["color", "accent", 3, "change", "checked"], ["color", "primary", 3, "change", "checked"], [1, "table-card"], [1, "role-table"], [1, "role-row", "role-row--header"], [1, "col-name"], [1, "col-portal"], [1, "col-users"], [1, "col-perms"], [1, "col-status"], [1, "col-actions"], ["class", "loading-row", 4, "ngIf"], ["class", "role-row", 3, "role-row--inactive", 4, "ngFor", "ngForOf"], ["class", "empty-row", 4, "ngIf"], [1, "loading-row"], ["mode", "indeterminate", "diameter", "32"], [1, "role-row"], [4, "ngIf"], [1, "portal-badge"], [1, "status-dot"], ["class", "system-badge", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "matTooltip", "Permissions", 3, "click"], ["mat-icon-button", "", "matTooltip", "Delete", "color", "warn", 3, "click", "disabled"], [1, "system-badge"], [1, "empty-row"]], template: function RolesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Roles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Create roles and assign menu permissions");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, RolesComponent_button_7_Template, 4, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, RolesComponent_mat_card_8_Template, 29, 7, "mat-card", 4)(9, RolesComponent_mat_card_9_Template, 20, 4, "mat-card", 5)(10, RolesComponent_mat_card_10_Template, 18, 3, "mat-card", 6);
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
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
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
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatCheckboxModule,
      MatCheckbox,
      MatChipsModule,
      MatDialogModule,
      MatTooltipModule,
      MatTooltip,
      MatDividerModule,
      MatSlideToggleModule,
      MatSlideToggle,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 24px 16px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #666;\n  font-size: 0.875rem;\n}\n.form-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n  margin-top: 12px;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.role-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.role-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n  gap: 8px;\n}\n.role-row--header[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  font-weight: 600;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  color: #666;\n}\n.role-row--inactive[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.role-row[_ngcontent-%COMP%]:hover:not(.role-row--header) {\n  background: #fafafa;\n}\n.col-name[_ngcontent-%COMP%] {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.col-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.col-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 0.75rem;\n}\n.col-portal[_ngcontent-%COMP%] {\n  flex: 0.8;\n}\n.col-users[_ngcontent-%COMP%], \n.col-perms[_ngcontent-%COMP%] {\n  flex: 0.6;\n  text-align: center;\n}\n.col-status[_ngcontent-%COMP%] {\n  flex: 0.8;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.col-actions[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  justify-content: flex-end;\n}\n.portal-badge[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.portal-badge.portal-admin[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.portal-badge.portal-agent[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.portal-badge.portal-customer[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ccc;\n  display: inline-block;\n}\n.status-dot.active[_ngcontent-%COMP%] {\n  background: #4caf50;\n}\n.system-badge[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  background: #fff3e0;\n  color: #e65100;\n}\n.loading-row[_ngcontent-%COMP%], \n.empty-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 32px;\n  color: #888;\n}\n.perm-hint[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.85rem;\n  margin-bottom: 12px;\n}\n.perm-grid[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.perm-menu-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-bottom: 1px solid #eee;\n}\n.perm-menu-row--header[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  font-weight: 600;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  color: #666;\n}\n.perm-menu-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.perm-menu-row[_ngcontent-%COMP%]:hover:not(.perm-menu-row--header) {\n  background: #fafafa;\n}\n.perm-menu-name[_ngcontent-%COMP%] {\n  flex: 2;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.perm-menu-name[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #666;\n}\n.perm-action[_ngcontent-%COMP%] {\n  flex: 0.6;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n.dark-mode[_nghost-%COMP%]   .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.dark-mode[_nghost-%COMP%]   .role-row[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .role-row[_ngcontent-%COMP%] {\n  border-color: #333;\n}\n.dark-mode[_nghost-%COMP%]   .role-row--header[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .role-row--header[_ngcontent-%COMP%] {\n  background: #1e1e1e;\n  color: #aaa;\n}\n.dark-mode[_nghost-%COMP%]   .role-row[_ngcontent-%COMP%]:hover:not(.role-row--header), .dark-mode   [_nghost-%COMP%]   .role-row[_ngcontent-%COMP%]:hover:not(.role-row--header) {\n  background: #252525;\n}\n.dark-mode[_nghost-%COMP%]   .col-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .col-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #888;\n}\n.dark-mode[_nghost-%COMP%]   .perm-grid[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .perm-grid[_ngcontent-%COMP%] {\n  border-color: #333;\n}\n.dark-mode[_nghost-%COMP%]   .perm-menu-row[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .perm-menu-row[_ngcontent-%COMP%] {\n  border-color: #333;\n}\n.dark-mode[_nghost-%COMP%]   .perm-menu-row--header[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .perm-menu-row--header[_ngcontent-%COMP%] {\n  background: #1e1e1e;\n}\n.dark-mode[_nghost-%COMP%]   .perm-menu-row[_ngcontent-%COMP%]:hover:not(.perm-menu-row--header), .dark-mode   [_nghost-%COMP%]   .perm-menu-row[_ngcontent-%COMP%]:hover:not(.perm-menu-row--header) {\n  background: #252525;\n}\n.dark-mode[_nghost-%COMP%]   .perm-hint[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .perm-hint[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n/*# sourceMappingURL=roles.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesComponent, [{
    type: Component,
    args: [{ selector: "app-roles", standalone: true, imports: [
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
      MatDialogModule,
      MatTooltipModule,
      MatDividerModule,
      MatSlideToggleModule,
      MatProgressSpinnerModule
    ], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1>Roles</h1>
      <p class="subtitle">Create roles and assign menu permissions</p>
    </div>
    <button mat-flat-button color="primary" (click)="openCreate()" *ngIf="!showForm && !showPermissions">
      <mat-icon>add</mat-icon> New Role
    </button>
  </div>

  <!-- \u2500\u2500 Role Form \u2500\u2500 -->
  <mat-card *ngIf="showForm" class="form-card">
    <mat-card-header>
      <mat-card-title>{{ editingId ? 'Edit Role' : 'Create Role' }}</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <div class="form-grid">
        <mat-form-field appearance="outline">
          <mat-label>Role Name</mat-label>
          <input matInput [(ngModel)]="formName" required />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Portal</mat-label>
          <mat-select [(ngModel)]="formPortal">
            <mat-option value="Admin">Admin</mat-option>
            <mat-option value="Agent">Agent</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Description</mat-label>
          <input matInput [(ngModel)]="formDescription" />
        </mat-form-field>

        <mat-slide-toggle [(ngModel)]="formIsActive" color="primary">Active</mat-slide-toggle>
      </div>
    </mat-card-content>
    <mat-card-actions align="end">
      <button mat-button (click)="cancelForm()">Cancel</button>
      <button mat-flat-button color="primary" (click)="saveRole()" [disabled]="!formName.trim()">
        {{ editingId ? 'Update' : 'Create' }}
      </button>
    </mat-card-actions>
  </mat-card>

  <!-- \u2500\u2500 Permission Assignment \u2500\u2500 -->
  <mat-card *ngIf="showPermissions" class="form-card perm-card">
    <mat-card-header>
      <mat-card-title>Assign Permissions \u2014 {{ permRoleName }}</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <p class="perm-hint">Select which menu actions this role can access.</p>

      <div class="perm-grid">
        <div class="perm-menu-row perm-menu-row--header">
          <span class="perm-menu-name">Menu</span>
          <span class="perm-action" *ngFor="let a of ['Read','Write','Approve','Delete']">{{ a }}</span>
          <span class="perm-action">All</span>
        </div>

        <div class="perm-menu-row" *ngFor="let menu of filteredMenus">
          <span class="perm-menu-name">
            <mat-icon class="menu-icon">{{ menu.icon }}</mat-icon>
            {{ menu.name }}
          </span>
          <span class="perm-action" *ngFor="let perm of menu.permissions">
            <mat-checkbox
              [checked]="isPermSelected(perm.id)"
              (change)="togglePerm(perm.id)"
              color="primary">
            </mat-checkbox>
          </span>
          <span class="perm-action">
            <mat-checkbox
              [checked]="isAllMenuPermsSelected(menu)"
              (change)="toggleAllMenuPerms(menu)"
              color="accent">
            </mat-checkbox>
          </span>
        </div>
      </div>
    </mat-card-content>
    <mat-card-actions align="end">
      <button mat-button (click)="cancelPermissions()">Cancel</button>
      <button mat-flat-button color="primary" (click)="savePermissions()">Save Permissions</button>
    </mat-card-actions>
  </mat-card>

  <!-- \u2500\u2500 Roles Table \u2500\u2500 -->
  <mat-card *ngIf="!showForm && !showPermissions" class="table-card">
    <div class="role-table">
      <div class="role-row role-row--header">
        <span class="col-name">Role</span>
        <span class="col-portal">Portal</span>
        <span class="col-users">Users</span>
        <span class="col-perms">Permissions</span>
        <span class="col-status">Status</span>
        <span class="col-actions">Actions</span>
      </div>

      <div *ngIf="loading" class="loading-row">
        <mat-progress-spinner mode="indeterminate" diameter="32"></mat-progress-spinner>
      </div>

      <div class="role-row" *ngFor="let role of roles" [class.role-row--inactive]="!role.isActive">
        <span class="col-name">
          <strong>{{ role.name }}</strong>
          <small *ngIf="role.description">{{ role.description }}</small>
        </span>
        <span class="col-portal">
          <span class="portal-badge" [class]="'portal-' + role.portal.toLowerCase()">{{ role.portal }}</span>
        </span>
        <span class="col-users">{{ role.userCount }}</span>
        <span class="col-perms">{{ role.permissionCount }}</span>
        <span class="col-status">
          <span class="status-dot" [class.active]="role.isActive"></span>
          {{ role.isActive ? 'Active' : 'Inactive' }}
        </span>
        <span class="col-actions">
          <ng-container *ngIf="role.roleType !== 'SystemAdmin'">
            <button mat-icon-button matTooltip="Edit" (click)="openEdit(role)">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button matTooltip="Permissions" (click)="openPermissions(role)">
              <mat-icon>security</mat-icon>
            </button>
            <button mat-icon-button matTooltip="Delete" color="warn" (click)="deleteRole(role)"
              [disabled]="role.userCount > 0">
              <mat-icon>delete</mat-icon>
            </button>
          </ng-container>
          <span *ngIf="role.roleType === 'SystemAdmin'" class="system-badge">System</span>
        </span>
      </div>

      <div *ngIf="!loading && roles.length === 0" class="empty-row">
        No roles found.
      </div>
    </div>
  </mat-card>
</div>
`, styles: ["/* src/app/pages/admin/user-management/roles/roles.component.scss */\n.page-container {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 24px 16px;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header .subtitle {\n  margin: 4px 0 0;\n  color: #666;\n  font-size: 0.875rem;\n}\n.form-card {\n  margin-bottom: 20px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n  margin-top: 12px;\n}\n.form-grid .full-width {\n  grid-column: 1/-1;\n}\n.table-card {\n  padding: 0;\n}\n.role-table {\n  width: 100%;\n}\n.role-row {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n  gap: 8px;\n}\n.role-row--header {\n  background: #f5f5f5;\n  font-weight: 600;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  color: #666;\n}\n.role-row--inactive {\n  opacity: 0.6;\n}\n.role-row:hover:not(.role-row--header) {\n  background: #fafafa;\n}\n.col-name {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.col-name strong {\n  font-size: 0.9rem;\n}\n.col-name small {\n  color: #888;\n  font-size: 0.75rem;\n}\n.col-portal {\n  flex: 0.8;\n}\n.col-users,\n.col-perms {\n  flex: 0.6;\n  text-align: center;\n}\n.col-status {\n  flex: 0.8;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.col-actions {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  justify-content: flex-end;\n}\n.portal-badge {\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.portal-badge.portal-admin {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.portal-badge.portal-agent {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.portal-badge.portal-customer {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ccc;\n  display: inline-block;\n}\n.status-dot.active {\n  background: #4caf50;\n}\n.system-badge {\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  background: #fff3e0;\n  color: #e65100;\n}\n.loading-row,\n.empty-row {\n  display: flex;\n  justify-content: center;\n  padding: 32px;\n  color: #888;\n}\n.perm-hint {\n  color: #666;\n  font-size: 0.85rem;\n  margin-bottom: 12px;\n}\n.perm-grid {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.perm-menu-row {\n  display: flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-bottom: 1px solid #eee;\n}\n.perm-menu-row--header {\n  background: #f5f5f5;\n  font-weight: 600;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  color: #666;\n}\n.perm-menu-row:last-child {\n  border-bottom: none;\n}\n.perm-menu-row:hover:not(.perm-menu-row--header) {\n  background: #fafafa;\n}\n.perm-menu-name {\n  flex: 2;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.perm-menu-name .menu-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #666;\n}\n.perm-action {\n  flex: 0.6;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n:host-context(.dark-mode) .page-header .subtitle {\n  color: #aaa;\n}\n:host-context(.dark-mode) .role-row {\n  border-color: #333;\n}\n:host-context(.dark-mode) .role-row--header {\n  background: #1e1e1e;\n  color: #aaa;\n}\n:host-context(.dark-mode) .role-row:hover:not(.role-row--header) {\n  background: #252525;\n}\n:host-context(.dark-mode) .col-name small {\n  color: #888;\n}\n:host-context(.dark-mode) .perm-grid {\n  border-color: #333;\n}\n:host-context(.dark-mode) .perm-menu-row {\n  border-color: #333;\n}\n:host-context(.dark-mode) .perm-menu-row--header {\n  background: #1e1e1e;\n}\n:host-context(.dark-mode) .perm-menu-row:hover:not(.perm-menu-row--header) {\n  background: #252525;\n}\n:host-context(.dark-mode) .perm-hint {\n  color: #aaa;\n}\n/*# sourceMappingURL=roles.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesComponent, { className: "RolesComponent", filePath: "src/app/pages/admin/user-management/roles/roles.component.ts", lineNumber: 51 });
})();
export {
  RolesComponent
};
//# sourceMappingURL=chunk-UBLTEU7D.js.map
