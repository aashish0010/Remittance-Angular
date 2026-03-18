import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatTab,
  MatTabGroup,
  MatTabsModule,
  provideNativeDateAdapter
} from "./chunk-SK6FTGTD.js";
import {
  SearchableSelectDirective
} from "./chunk-SPE5Y2T4.js";
import "./chunk-KZEP64CQ.js";
import {
  MatChipsModule
} from "./chunk-VUXSNQV7.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-YGDTJNE7.js";
import {
  NotificationService
} from "./chunk-YVJ6TWB2.js";
import "./chunk-S5Y76ZQA.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-N4KLCW3D.js";
import "./chunk-RYR4NCTK.js";
import "./chunk-4ICNUTBP.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-7GR7IV7E.js";
import "./chunk-NNRSADKN.js";
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
} from "./chunk-NF2W6NXA.js";
import {
  ApiService,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSuffix
} from "./chunk-IPUKUTHA.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-SKGBRZ6H.js";
import {
  AuthStateService
} from "./chunk-T6M7P6K3.js";
import "./chunk-3TORE4W6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgModel
} from "./chunk-5RGUSOA3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-BPDBYDBO.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-Y4TRFXTA.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7WRAX6BO.js";

// src/app/pages/admin/customer-register/customer-register.component.ts
function CustomerRegisterComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_8_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Full Name");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_8_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.fullName);
  }
}
function CustomerRegisterComponent_mat_card_8_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_8_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.email || "-");
  }
}
function CustomerRegisterComponent_mat_card_8_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_8_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.phone || "-");
  }
}
function CustomerRegisterComponent_mat_card_8_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_8_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.country);
  }
}
function CustomerRegisterComponent_mat_card_8_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "KYC Status");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_8_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30)(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r7.isKycVerified ? "chip-success" : "chip-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r7.isKycVerified ? "Verified" : "Pending", " ");
  }
}
function CustomerRegisterComponent_mat_card_8_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Created");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_8_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, c_r8.createdAt, "yyyy-MM-dd"));
  }
}
function CustomerRegisterComponent_mat_card_8_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_8_td_26_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function CustomerRegisterComponent_mat_card_8_td_26_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const c_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveKyc(c_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 40);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_mat_card_8_td_26_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function CustomerRegisterComponent_mat_card_8_td_26_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const c_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectKyc(c_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 42);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_mat_card_8_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 30)(1, "button", 32);
    \u0275\u0275listener("click", function CustomerRegisterComponent_mat_card_8_td_26_Template_button_click_1_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(c_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon", 33);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function CustomerRegisterComponent_mat_card_8_td_26_Template_button_click_4_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditPopup(c_r10));
    });
    \u0275\u0275elementStart(5, "mat-icon", 33);
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CustomerRegisterComponent_mat_card_8_td_26_button_7_Template, 3, 0, "button", 35)(8, CustomerRegisterComponent_mat_card_8_td_26_button_8_Template, 3, 0, "button", 36);
    \u0275\u0275elementStart(9, "button", 37);
    \u0275\u0275listener("click", function CustomerRegisterComponent_mat_card_8_td_26_Template_button_click_9_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCustomer(c_r10));
    });
    \u0275\u0275elementStart(10, "mat-icon", 38);
    \u0275\u0275text(11, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !c_r10.isKycVerified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r10.isKycVerified);
  }
}
function CustomerRegisterComponent_mat_card_8_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 43);
  }
}
function CustomerRegisterComponent_mat_card_8_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 44);
  }
}
function CustomerRegisterComponent_mat_card_8_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, " No customers found. ");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 12)(1, "mat-form-field", 13)(2, "mat-icon", 14);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_mat_card_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CustomerRegisterComponent_mat_card_8_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 16);
    \u0275\u0275elementContainerStart(6, 17);
    \u0275\u0275template(7, CustomerRegisterComponent_mat_card_8_th_7_Template, 2, 0, "th", 18)(8, CustomerRegisterComponent_mat_card_8_td_8_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 20);
    \u0275\u0275template(10, CustomerRegisterComponent_mat_card_8_th_10_Template, 2, 0, "th", 18)(11, CustomerRegisterComponent_mat_card_8_td_11_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 21);
    \u0275\u0275template(13, CustomerRegisterComponent_mat_card_8_th_13_Template, 2, 0, "th", 18)(14, CustomerRegisterComponent_mat_card_8_td_14_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 22);
    \u0275\u0275template(16, CustomerRegisterComponent_mat_card_8_th_16_Template, 2, 0, "th", 18)(17, CustomerRegisterComponent_mat_card_8_td_17_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 23);
    \u0275\u0275template(19, CustomerRegisterComponent_mat_card_8_th_19_Template, 2, 0, "th", 18)(20, CustomerRegisterComponent_mat_card_8_td_20_Template, 3, 2, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 24);
    \u0275\u0275template(22, CustomerRegisterComponent_mat_card_8_th_22_Template, 2, 0, "th", 18)(23, CustomerRegisterComponent_mat_card_8_td_23_Template, 3, 4, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 25);
    \u0275\u0275template(25, CustomerRegisterComponent_mat_card_8_th_25_Template, 2, 0, "th", 18)(26, CustomerRegisterComponent_mat_card_8_td_26_Template, 12, 2, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(27, CustomerRegisterComponent_mat_card_8_tr_27_Template, 1, 0, "tr", 26)(28, CustomerRegisterComponent_mat_card_8_tr_28_Template, 1, 0, "tr", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, CustomerRegisterComponent_mat_card_8_div_29_Template, 2, 0, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.filteredCustomers);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredCustomers.length && !ctx_r1.loading);
  }
}
function CustomerRegisterComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "h3");
    \u0275\u0275text(3, "Customer Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 49);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 50)(8, "div", 51)(9, "span", 52);
    \u0275\u0275text(10, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 51)(14, "span", 52);
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 51)(19, "span", 52);
    \u0275\u0275text(20, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 51)(24, "span", 52);
    \u0275\u0275text(25, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 51)(29, "span", 52);
    \u0275\u0275text(30, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 51)(34, "span", 52);
    \u0275\u0275text(35, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 51)(39, "span", 52);
    \u0275\u0275text(40, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 51)(44, "span", 52);
    \u0275\u0275text(45, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 51)(49, "span", 52);
    \u0275\u0275text(50, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 51)(54, "span", 52);
    \u0275\u0275text(55, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 53)(59, "span", 52);
    \u0275\u0275text(60, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 51)(64, "span", 52);
    \u0275\u0275text(65, "Document Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 51)(69, "span", 52);
    \u0275\u0275text(70, "Document Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 51)(74, "span", 52);
    \u0275\u0275text(75, "KYC Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 31);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 51)(79, "span", 52);
    \u0275\u0275text(80, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span");
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.email || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.phone || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.dateOfBirth || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.gender || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.nationality || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.country);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.city || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.state || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.postalCode || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.address || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.idDocumentType || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.idDocumentNumber || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.detailCustomer.isKycVerified ? "chip-success" : "chip-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailCustomer.isKycVerified ? "Verified" : "Pending", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 16, ctx_r1.detailCustomer.createdAt, "yyyy-MM-dd"));
  }
}
function CustomerRegisterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function CustomerRegisterComponent_div_12_mat_option_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 84);
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
function CustomerRegisterComponent_div_12_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    \u0275\u0275property("value", c_r18.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r18.name);
  }
}
function CustomerRegisterComponent_div_12_mat_spinner_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 85);
  }
}
function CustomerRegisterComponent_div_12_mat_icon_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 48)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 49);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CustomerRegisterComponent_div_12_div_7_Template, 2, 1, "div", 55);
    \u0275\u0275elementStart(8, "mat-tab-group", 56)(9, "mat-tab", 57)(10, "div", 58)(11, "div", 59)(12, "mat-form-field", 60)(13, "mat-label");
    \u0275\u0275text(14, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.fullName, $event) || (ctx_r1.form.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 60)(17, "mat-label");
    \u0275\u0275text(18, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateOfBirth, $event) || (ctx_r1.form.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "mat-datepicker-toggle", 63)(21, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 60)(24, "mat-label");
    \u0275\u0275text(25, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-select", 64);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_mat_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.gender, $event) || (ctx_r1.form.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "mat-option", 65);
    \u0275\u0275text(28, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-option", 66);
    \u0275\u0275text(30, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-option", 67);
    \u0275\u0275text(32, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "mat-form-field", 60)(34, "mat-label");
    \u0275\u0275text(35, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nationality, $event) || (ctx_r1.form.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(37, "mat-tab", 68)(38, "div", 58)(39, "div", 59)(40, "mat-form-field", 60)(41, "mat-label");
    \u0275\u0275text(42, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "mat-form-field", 60)(45, "mat-label");
    \u0275\u0275text(46, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "mat-form-field", 60)(49, "mat-label");
    \u0275\u0275text(50, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "mat-select", 70);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_mat_select_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.country, $event) || (ctx_r1.form.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(52, CustomerRegisterComponent_div_12_mat_option_52_Template, 2, 2, "mat-option", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "mat-form-field", 60)(54, "mat-label");
    \u0275\u0275text(55, "Contact Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-select", 64);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_mat_select_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contactCountry, $event) || (ctx_r1.form.contactCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(57, "mat-option", 72);
    \u0275\u0275text(58, "-- None --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, CustomerRegisterComponent_div_12_mat_option_59_Template, 2, 2, "mat-option", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "mat-form-field", 60)(61, "mat-label");
    \u0275\u0275text(62, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.city, $event) || (ctx_r1.form.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "mat-form-field", 60)(65, "mat-label");
    \u0275\u0275text(66, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.state, $event) || (ctx_r1.form.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "mat-form-field", 60)(69, "mat-label");
    \u0275\u0275text(70, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.postalCode, $event) || (ctx_r1.form.postalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "mat-form-field", 73)(73, "mat-label");
    \u0275\u0275text(74, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.address, $event) || (ctx_r1.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(76, "mat-tab", 74)(77, "div", 58)(78, "div", 59)(79, "mat-form-field", 60)(80, "mat-label");
    \u0275\u0275text(81, "Document Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "mat-select", 64);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_mat_select_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.idDocumentType, $event) || (ctx_r1.form.idDocumentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(83, "mat-option", 75);
    \u0275\u0275text(84, "Passport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "mat-option", 76);
    \u0275\u0275text(86, "National ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "mat-option", 77);
    \u0275\u0275text(88, "Driver License");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "mat-form-field", 60)(90, "mat-label");
    \u0275\u0275text(91, "Document Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_92_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.idDocumentNumber, $event) || (ctx_r1.form.idDocumentNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "mat-form-field", 60)(94, "mat-label");
    \u0275\u0275text(95, "Issue Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_96_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.issueDate, $event) || (ctx_r1.form.issueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "mat-datepicker-toggle", 63)(98, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "mat-form-field", 60)(101, "mat-label");
    \u0275\u0275text(102, "Expiry Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_12_Template_input_ngModelChange_103_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.expiryDate, $event) || (ctx_r1.form.expiryDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "mat-datepicker-toggle", 63)(105, "mat-datepicker", null, 2);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(107, "div", 78)(108, "button", 79);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_12_Template_button_click_108_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(109, "mat-icon");
    \u0275\u0275text(110, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "button", 80);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_12_Template_button_click_112_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCustomer());
    });
    \u0275\u0275template(113, CustomerRegisterComponent_div_12_mat_spinner_113_Template, 1, 0, "mat-spinner", 81)(114, CustomerRegisterComponent_div_12_mat_icon_114_Template, 2, 0, "mat-icon", 82);
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dobPicker_r19 = \u0275\u0275reference(22);
    const issuePicker_r20 = \u0275\u0275reference(99);
    const expiryPicker_r21 = \u0275\u0275reference(106);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Customer" : "Register New Customer");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", dobPicker_r19);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateOfBirth);
    \u0275\u0275advance();
    \u0275\u0275property("for", dobPicker_r19);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.gender);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nationality);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.contactCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.state);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.postalCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.address);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.idDocumentType);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.idDocumentNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", issuePicker_r20);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.issueDate);
    \u0275\u0275advance();
    \u0275\u0275property("for", issuePicker_r20);
    \u0275\u0275advance(6);
    \u0275\u0275property("matDatepicker", expiryPicker_r21);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.expiryDate);
    \u0275\u0275advance();
    \u0275\u0275property("for", expiryPicker_r21);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Save Changes" : "Register Customer", " ");
  }
}
function emptyForm() {
  return {
    fullName: "",
    dateOfBirth: "",
    gender: "Male",
    nationality: "",
    email: "",
    phone: "",
    country: "",
    contactCountry: "",
    city: "",
    state: "",
    postalCode: "",
    address: "",
    idDocumentType: "Passport",
    idDocumentNumber: "",
    issueDate: "",
    expiryDate: ""
  };
}
var CustomerRegisterComponent = class _CustomerRegisterComponent {
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.customers = [];
    this.filteredCustomers = [];
    this.displayedColumns = ["fullName", "email", "phone", "country", "kyc", "createdAt", "actions"];
    this.searchString = "";
    this.loading = true;
    this.countries = [];
    this.showDetail = false;
    this.detailCustomer = null;
    this.showFormPopup = false;
    this.isEditing = false;
    this.editingId = 0;
    this.saving = false;
    this.formError = "";
    this.form = emptyForm();
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadCustomers();
    this.loadCountries();
  }
  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadCustomers() {
    this.loading = true;
    this.api.getCustomers().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.customers = res.data;
          this.applyFilter();
        } else {
          this.customers = [];
          this.filteredCustomers = [];
          this.notify.error(res?.message || "Failed to load customers.");
        }
        this.loading = false;
      },
      error: () => {
        this.customers = [];
        this.filteredCustomers = [];
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  loadCountries() {
    this.api.getCountries().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.countries = res.data;
        }
      },
      error: () => {
        this.notify.warn("Could not load countries list.");
      }
    });
  }
  applyFilter() {
    const s = this.searchString.toLowerCase();
    this.filteredCustomers = !s ? [...this.customers] : this.customers.filter((c) => c.fullName.toLowerCase().includes(s) || (c.email || "").toLowerCase().includes(s) || (c.phone || "").toLowerCase().includes(s) || c.country.toLowerCase().includes(s));
  }
  // ---------------------------------------------------------------------------
  // Detail
  // ---------------------------------------------------------------------------
  viewDetail(customer) {
    this.detailCustomer = customer;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
  }
  // ---------------------------------------------------------------------------
  // Create / Edit popup
  // ---------------------------------------------------------------------------
  openCreatePopup() {
    this.form = emptyForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = "";
    this.showFormPopup = true;
  }
  openEditPopup(customer) {
    this.isEditing = true;
    this.editingId = customer.id;
    this.form = {
      fullName: customer.fullName,
      dateOfBirth: customer.dateOfBirth || "",
      gender: customer.gender || "Male",
      nationality: customer.nationality || "",
      email: customer.email || "",
      phone: customer.phone || "",
      country: customer.country,
      contactCountry: customer.contactCountry || "",
      city: customer.city || "",
      state: customer.state || "",
      postalCode: customer.postalCode || "",
      address: customer.address || "",
      idDocumentType: customer.idDocumentType || "Passport",
      idDocumentNumber: customer.idDocumentNumber || "",
      issueDate: customer.issueDate || "",
      expiryDate: customer.expiryDate || ""
    };
    this.formError = "";
    this.showFormPopup = true;
  }
  closeFormPopup() {
    this.showFormPopup = false;
  }
  saveCustomer() {
    this.formError = "";
    const f = this.form;
    if (!f.fullName || !f.country) {
      this.formError = "Full Name and Country are required.";
      return;
    }
    this.saving = true;
    const dto = {
      fullName: f.fullName,
      dateOfBirth: f.dateOfBirth || null,
      gender: f.gender || null,
      nationality: f.nationality || null,
      email: f.email || null,
      phone: f.phone || null,
      country: f.country,
      contactCountry: f.contactCountry || null,
      city: f.city || null,
      state: f.state || null,
      postalCode: f.postalCode || null,
      address: f.address || null,
      idDocumentType: f.idDocumentType || null,
      idDocumentNumber: f.idDocumentNumber || null,
      issueDate: f.issueDate || null,
      expiryDate: f.expiryDate || null
    };
    const obs = this.isEditing ? this.api.updateCustomer(this.editingId, dto) : this.api.createCustomer(dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.isEditing ? "Customer updated." : "Customer created.");
          this.showFormPopup = false;
          this.loadCustomers();
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
  // KYC
  // ---------------------------------------------------------------------------
  approveKyc(customer) {
    this.api.approveKyc(customer.id).subscribe((r) => {
      if (r?.success) {
        customer.isKycVerified = true;
        this.notify.success(`KYC approved for '${customer.fullName}'.`);
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  rejectKyc(customer) {
    this.api.rejectKyc(customer.id).subscribe((r) => {
      if (r?.success) {
        customer.isKycVerified = false;
        this.notify.warn(`KYC rejected for '${customer.fullName}'.`);
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Delete
  // ---------------------------------------------------------------------------
  deleteCustomer(customer) {
    this.api.deleteCustomer(customer.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success(`Customer '${customer.fullName}' deleted.`);
        this.loadCustomers();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function CustomerRegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerRegisterComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerRegisterComponent, selectors: [["app-customer-register"]], features: [\u0275\u0275ProvidersFeature([provideNativeDateAdapter()])], decls: 13, vars: 6, consts: [["dobPicker", ""], ["issuePicker", ""], ["expiryPicker", ""], [1, "page-header"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search customers...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "fullName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "phone"], ["matColumnDef", "country"], ["matColumnDef", "kyc"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "matTooltip", "Approve KYC", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Reject KYC", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-icon-button", "", "matTooltip", "Approve KYC", 3, "click"], [1, "text-success"], ["mat-icon-button", "", "matTooltip", "Reject KYC", 3, "click"], [1, "text-error"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-item", "full-width"], [1, "popup", "popup-lg"], ["class", "form-error", 4, "ngIf"], ["animationDuration", "200ms"], ["label", "Personal"], [1, "tab-content"], [1, "form-grid"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "readonly", "", "placeholder", "Select date", 3, "ngModelChange", "matDatepicker", "ngModel"], ["matSuffix", "", 3, "for"], [3, "ngModelChange", "ngModel"], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["label", "Contact"], ["matInput", "", "type", "email", 3, "ngModelChange", "ngModel"], ["searchable", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["value", ""], ["appearance", "outline", 1, "full-width"], ["label", "ID Document"], ["value", "Passport"], ["value", "NationalID"], ["value", "DriverLicense"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [4, "ngIf"], [1, "form-error"], [3, "value"], ["diameter", "18", 1, "inline-spinner"]], template: function CustomerRegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "h2");
        \u0275\u0275text(2, "Customer Registration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 4);
        \u0275\u0275listener("click", function CustomerRegisterComponent_Template_button_click_3_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Register Customer ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, CustomerRegisterComponent_div_7_Template, 2, 0, "div", 5)(8, CustomerRegisterComponent_mat_card_8_Template, 30, 5, "mat-card", 6)(9, CustomerRegisterComponent_div_9_Template, 1, 0, "div", 7)(10, CustomerRegisterComponent_div_10_Template, 84, 19, "div", 8)(11, CustomerRegisterComponent_div_11_Template, 1, 0, "div", 7)(12, CustomerRegisterComponent_div_12_Template, 116, 30, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailCustomer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailCustomer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatChipsModule, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatSuffix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner, MatTabsModule, MatTab, MatTabGroup, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, SearchableSelectDirective], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 14px;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 320px;\n  margin-bottom: 6px;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.data-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 20px;\n}\n.chip.chip-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #2e7d32 !important;\n}\n.text-error[_ngcontent-%COMP%] {\n  color: #c62828 !important;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n}\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-md[_ngcontent-%COMP%] {\n  width: 600px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-lg[_ngcontent-%COMP%] {\n  width: 720px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n}\n.popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n.form-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n  padding: 6px 14px;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 500;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 12px 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-grid[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.inline-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .popup[_ngcontent-%COMP%] {\n    padding: 14px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=customer-register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerRegisterComponent, [{
    type: Component,
    args: [{ selector: "app-customer-register", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatChipsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatTabsModule,
      MatDatepickerModule,
      DatePipe,
      SearchableSelectDirective
    ], providers: [provideNativeDateAdapter()], template: `<!-- Page Header -->\r
<div class="page-header">\r
  <h2>Customer Registration</h2>\r
  <button mat-raised-button color="primary" (click)="openCreatePopup()">\r
    <mat-icon>person_add</mat-icon> Register Customer\r
  </button>\r
</div>\r
\r
<!-- Loading -->\r
<div *ngIf="loading" class="loading-container">\r
  <mat-spinner diameter="40"></mat-spinner>\r
</div>\r
\r
<!-- Search + Table -->\r
<mat-card *ngIf="!loading" class="table-card">\r
  <mat-form-field appearance="outline" class="search-field">\r
    <mat-icon matPrefix>search</mat-icon>\r
    <input matInput placeholder="Search customers..." [(ngModel)]="searchString" (ngModelChange)="applyFilter()" />\r
  </mat-form-field>\r
\r
  <table mat-table [dataSource]="filteredCustomers" class="data-table">\r
    <!-- Full Name -->\r
    <ng-container matColumnDef="fullName">\r
      <th mat-header-cell *matHeaderCellDef>Full Name</th>\r
      <td mat-cell *matCellDef="let c">{{ c.fullName }}</td>\r
    </ng-container>\r
\r
    <!-- Email -->\r
    <ng-container matColumnDef="email">\r
      <th mat-header-cell *matHeaderCellDef>Email</th>\r
      <td mat-cell *matCellDef="let c">{{ c.email || '-' }}</td>\r
    </ng-container>\r
\r
    <!-- Phone -->\r
    <ng-container matColumnDef="phone">\r
      <th mat-header-cell *matHeaderCellDef>Phone</th>\r
      <td mat-cell *matCellDef="let c">{{ c.phone || '-' }}</td>\r
    </ng-container>\r
\r
    <!-- Country -->\r
    <ng-container matColumnDef="country">\r
      <th mat-header-cell *matHeaderCellDef>Country</th>\r
      <td mat-cell *matCellDef="let c">{{ c.country }}</td>\r
    </ng-container>\r
\r
    <!-- KYC Status -->\r
    <ng-container matColumnDef="kyc">\r
      <th mat-header-cell *matHeaderCellDef>KYC Status</th>\r
      <td mat-cell *matCellDef="let c">\r
        <span class="chip" [ngClass]="c.isKycVerified ? 'chip-success' : 'chip-warning'">\r
          {{ c.isKycVerified ? 'Verified' : 'Pending' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Created -->\r
    <ng-container matColumnDef="createdAt">\r
      <th mat-header-cell *matHeaderCellDef>Created</th>\r
      <td mat-cell *matCellDef="let c">{{ c.createdAt | date:'yyyy-MM-dd' }}</td>\r
    </ng-container>\r
\r
    <!-- Actions -->\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let c">\r
        <button mat-icon-button matTooltip="View Details" (click)="viewDetail(c)">\r
          <mat-icon color="primary">visibility</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Edit" (click)="openEditPopup(c)">\r
          <mat-icon color="primary">edit</mat-icon>\r
        </button>\r
        <button *ngIf="!c.isKycVerified" mat-icon-button matTooltip="Approve KYC" (click)="approveKyc(c)">\r
          <mat-icon class="text-success">check_circle</mat-icon>\r
        </button>\r
        <button *ngIf="c.isKycVerified" mat-icon-button matTooltip="Reject KYC" (click)="rejectKyc(c)">\r
          <mat-icon class="text-error">cancel</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deleteCustomer(c)">\r
          <mat-icon color="warn">delete</mat-icon>\r
        </button>\r
      </td>\r
    </ng-container>\r
\r
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
  </table>\r
\r
  <div *ngIf="!filteredCustomers.length && !loading" class="empty-state">\r
    No customers found.\r
  </div>\r
</mat-card>\r
\r
<!-- ============================================================ -->\r
<!-- Detail Popup                                                  -->\r
<!-- ============================================================ -->\r
<div *ngIf="showDetail && detailCustomer" class="overlay" (click)="closeDetail()"></div>\r
<div *ngIf="showDetail && detailCustomer" class="popup popup-md">\r
  <div class="popup-header">\r
    <h3>Customer Details</h3>\r
    <button mat-icon-button (click)="closeDetail()"><mat-icon>close</mat-icon></button>\r
  </div>\r
  <div class="detail-grid">\r
    <div class="detail-item"><span class="detail-label">Full Name</span><span>{{ detailCustomer.fullName }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Email</span><span>{{ detailCustomer.email || '-' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Phone</span><span>{{ detailCustomer.phone || '-' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Date of Birth</span><span>{{ detailCustomer.dateOfBirth || '-' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Gender</span><span>{{ detailCustomer.gender || '-' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Nationality</span><span>{{ detailCustomer.nationality || '-' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Country</span><span>{{ detailCustomer.country }}</span></div>\r
    <div class="detail-item"><span class="detail-label">City</span><span>{{ detailCustomer.city || '-' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">State</span><span>{{ detailCustomer.state || '-' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Postal Code</span><span>{{ detailCustomer.postalCode || '-' }}</span></div>\r
    <div class="detail-item full-width"><span class="detail-label">Address</span><span>{{ detailCustomer.address || '-' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Document Type</span><span>{{ detailCustomer.idDocumentType || '-' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Document Number</span><span>{{ detailCustomer.idDocumentNumber || '-' }}</span></div>\r
    <div class="detail-item">\r
      <span class="detail-label">KYC Status</span>\r
      <span class="chip" [ngClass]="detailCustomer.isKycVerified ? 'chip-success' : 'chip-warning'">\r
        {{ detailCustomer.isKycVerified ? 'Verified' : 'Pending' }}\r
      </span>\r
    </div>\r
    <div class="detail-item"><span class="detail-label">Created</span><span>{{ detailCustomer.createdAt | date:'yyyy-MM-dd' }}</span></div>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Create / Edit Customer Popup                                  -->\r
<!-- ============================================================ -->\r
<div *ngIf="showFormPopup" class="overlay" (click)="closeFormPopup()"></div>\r
<div *ngIf="showFormPopup" class="popup popup-lg">\r
  <div class="popup-header">\r
    <h3>{{ isEditing ? 'Edit Customer' : 'Register New Customer' }}</h3>\r
    <button mat-icon-button (click)="closeFormPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="formError" class="form-error">{{ formError }}</div>\r
\r
  <mat-tab-group animationDuration="200ms">\r
    <!-- Tab 1: Personal -->\r
    <mat-tab label="Personal">\r
      <div class="tab-content">\r
        <div class="form-grid">\r
          <mat-form-field appearance="outline">\r
            <mat-label>Full Name *</mat-label>\r
            <input matInput [(ngModel)]="form.fullName" />\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>Date of Birth</mat-label>\r
            <input matInput [matDatepicker]="dobPicker" [(ngModel)]="form.dateOfBirth" readonly placeholder="Select date" />\r
            <mat-datepicker-toggle matSuffix [for]="dobPicker"></mat-datepicker-toggle>\r
            <mat-datepicker #dobPicker></mat-datepicker>\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>Gender</mat-label>\r
            <mat-select [(ngModel)]="form.gender">\r
              <mat-option value="Male">Male</mat-option>\r
              <mat-option value="Female">Female</mat-option>\r
              <mat-option value="Other">Other</mat-option>\r
            </mat-select>\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>Nationality</mat-label>\r
            <input matInput [(ngModel)]="form.nationality" />\r
          </mat-form-field>\r
        </div>\r
      </div>\r
    </mat-tab>\r
\r
    <!-- Tab 2: Contact -->\r
    <mat-tab label="Contact">\r
      <div class="tab-content">\r
        <div class="form-grid">\r
          <mat-form-field appearance="outline">\r
            <mat-label>Email</mat-label>\r
            <input matInput type="email" [(ngModel)]="form.email" />\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>Phone</mat-label>\r
            <input matInput [(ngModel)]="form.phone" />\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>Country *</mat-label>\r
            <mat-select searchable [(ngModel)]="form.country">\r
              <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>\r
            </mat-select>\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>Contact Country</mat-label>\r
            <mat-select [(ngModel)]="form.contactCountry">\r
              <mat-option value="">-- None --</mat-option>\r
              <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>\r
            </mat-select>\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>City</mat-label>\r
            <input matInput [(ngModel)]="form.city" />\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>State</mat-label>\r
            <input matInput [(ngModel)]="form.state" />\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>Postal Code</mat-label>\r
            <input matInput [(ngModel)]="form.postalCode" />\r
          </mat-form-field>\r
          <mat-form-field appearance="outline" class="full-width">\r
            <mat-label>Address</mat-label>\r
            <input matInput [(ngModel)]="form.address" />\r
          </mat-form-field>\r
        </div>\r
      </div>\r
    </mat-tab>\r
\r
    <!-- Tab 3: ID Document -->\r
    <mat-tab label="ID Document">\r
      <div class="tab-content">\r
        <div class="form-grid">\r
          <mat-form-field appearance="outline">\r
            <mat-label>Document Type</mat-label>\r
            <mat-select [(ngModel)]="form.idDocumentType">\r
              <mat-option value="Passport">Passport</mat-option>\r
              <mat-option value="NationalID">National ID</mat-option>\r
              <mat-option value="DriverLicense">Driver License</mat-option>\r
            </mat-select>\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>Document Number</mat-label>\r
            <input matInput [(ngModel)]="form.idDocumentNumber" />\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>Issue Date</mat-label>\r
            <input matInput [matDatepicker]="issuePicker" [(ngModel)]="form.issueDate" readonly placeholder="Select date" />\r
            <mat-datepicker-toggle matSuffix [for]="issuePicker"></mat-datepicker-toggle>\r
            <mat-datepicker #issuePicker></mat-datepicker>\r
          </mat-form-field>\r
          <mat-form-field appearance="outline">\r
            <mat-label>Expiry Date</mat-label>\r
            <input matInput [matDatepicker]="expiryPicker" [(ngModel)]="form.expiryDate" readonly placeholder="Select date" />\r
            <mat-datepicker-toggle matSuffix [for]="expiryPicker"></mat-datepicker-toggle>\r
            <mat-datepicker #expiryPicker></mat-datepicker>\r
          </mat-form-field>\r
        </div>\r
      </div>\r
    </mat-tab>\r
  </mat-tab-group>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeFormPopup()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="saveCustomer()" [disabled]="saving">\r
      <mat-spinner *ngIf="saving" diameter="18" class="inline-spinner"></mat-spinner>\r
      <mat-icon *ngIf="!saving">save</mat-icon>\r
      {{ isEditing ? 'Save Changes' : 'Register Customer' }}\r
    </button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/admin/customer-register/customer-register.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header h2 {\n  font-weight: 700;\n  margin: 0;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card {\n  border-radius: 10px;\n  padding: 14px;\n}\n.search-field {\n  width: 320px;\n  margin-bottom: 6px;\n}\n.search-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table {\n  width: 100%;\n}\n.data-table th.mat-mdc-header-cell {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n}\n.data-table td.mat-mdc-cell {\n  font-size: 13px;\n}\n.empty-state {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 20px;\n}\n.chip.chip-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-success {\n  color: #2e7d32 !important;\n}\n.text-error {\n  color: #c62828 !important;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n}\n.popup {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-md {\n  width: 600px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-lg {\n  width: 720px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.popup-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n}\n.popup-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n.form-error {\n  background: #ffebee;\n  color: #c62828;\n  padding: 6px 14px;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.detail-grid .detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-grid .detail-item.full-width {\n  grid-column: 1/-1;\n}\n.detail-label {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 500;\n}\n.tab-content {\n  padding: 12px 0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.form-grid .full-width {\n  grid-column: 1/-1;\n}\n.form-grid ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n@media (max-width: 600px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.full-width {\n  width: 100%;\n}\n.inline-spinner {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .search-field {\n    width: 100%;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n  .popup {\n    padding: 14px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=customer-register.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerRegisterComponent, { className: "CustomerRegisterComponent", filePath: "src/app/pages/admin/customer-register/customer-register.component.ts", lineNumber: 64 });
})();
export {
  CustomerRegisterComponent
};
//# sourceMappingURL=chunk-BCR4A3G7.js.map
