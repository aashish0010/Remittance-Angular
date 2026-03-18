import {
  MatChipsModule
} from "./chunk-VUXSNQV7.js";
import {
  NotificationService
} from "./chunk-YVJ6TWB2.js";
import "./chunk-S5Y76ZQA.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-N4KLCW3D.js";
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
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule
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
  NgIf
} from "./chunk-Y4TRFXTA.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7WRAX6BO.js";

// src/app/pages/admin/customer-report/customer-report.component.ts
function CustomerReportComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-spinner", 16);
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Full Name");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.fullName);
  }
}
function CustomerReportComponent_mat_card_32_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.email || "-");
  }
}
function CustomerReportComponent_mat_card_32_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.phone || "-");
  }
}
function CustomerReportComponent_mat_card_32_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.country);
  }
}
function CustomerReportComponent_mat_card_32_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "KYC");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "span", 36);
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
function CustomerReportComponent_mat_card_32_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Created");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
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
function CustomerReportComponent_mat_card_32_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_26_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function CustomerReportComponent_mat_card_32_td_26_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const c_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveKyc(c_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 42);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function CustomerReportComponent_mat_card_32_td_26_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function CustomerReportComponent_mat_card_32_td_26_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const c_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectKyc(c_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 44);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function CustomerReportComponent_mat_card_32_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 35)(1, "button", 37);
    \u0275\u0275listener("click", function CustomerReportComponent_mat_card_32_td_26_Template_button_click_1_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(c_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon", 38);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CustomerReportComponent_mat_card_32_td_26_button_4_Template, 3, 0, "button", 39)(5, CustomerReportComponent_mat_card_32_td_26_button_5_Template, 3, 0, "button", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !c_r10.isKycVerified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r10.isKycVerified);
  }
}
function CustomerReportComponent_mat_card_32_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 45);
  }
}
function CustomerReportComponent_mat_card_32_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 46);
  }
}
function CustomerReportComponent_mat_card_32_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1, " No customers found. ");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 17)(1, "mat-form-field", 18)(2, "mat-icon", 19);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerReportComponent_mat_card_32_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CustomerReportComponent_mat_card_32_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 21);
    \u0275\u0275elementContainerStart(6, 22);
    \u0275\u0275template(7, CustomerReportComponent_mat_card_32_th_7_Template, 2, 0, "th", 23)(8, CustomerReportComponent_mat_card_32_td_8_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 25);
    \u0275\u0275template(10, CustomerReportComponent_mat_card_32_th_10_Template, 2, 0, "th", 23)(11, CustomerReportComponent_mat_card_32_td_11_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 26);
    \u0275\u0275template(13, CustomerReportComponent_mat_card_32_th_13_Template, 2, 0, "th", 23)(14, CustomerReportComponent_mat_card_32_td_14_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 27);
    \u0275\u0275template(16, CustomerReportComponent_mat_card_32_th_16_Template, 2, 0, "th", 23)(17, CustomerReportComponent_mat_card_32_td_17_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 28);
    \u0275\u0275template(19, CustomerReportComponent_mat_card_32_th_19_Template, 2, 0, "th", 23)(20, CustomerReportComponent_mat_card_32_td_20_Template, 3, 2, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 29);
    \u0275\u0275template(22, CustomerReportComponent_mat_card_32_th_22_Template, 2, 0, "th", 23)(23, CustomerReportComponent_mat_card_32_td_23_Template, 3, 4, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 30);
    \u0275\u0275template(25, CustomerReportComponent_mat_card_32_th_25_Template, 2, 0, "th", 23)(26, CustomerReportComponent_mat_card_32_td_26_Template, 6, 2, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(27, CustomerReportComponent_mat_card_32_tr_27_Template, 1, 0, "tr", 31)(28, CustomerReportComponent_mat_card_32_tr_28_Template, 1, 0, "tr", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, CustomerReportComponent_mat_card_32_div_29_Template, 2, 0, "div", 33);
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
function CustomerReportComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function CustomerReportComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "h3")(3, "mat-icon", 51);
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Customer Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 52);
    \u0275\u0275listener("click", function CustomerReportComponent_div_34_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 53)(10, "div", 54)(11, "span", 55);
    \u0275\u0275text(12, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 54)(16, "span", 55);
    \u0275\u0275text(17, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 54)(21, "span", 55);
    \u0275\u0275text(22, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 54)(26, "span", 55);
    \u0275\u0275text(27, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 54)(31, "span", 55);
    \u0275\u0275text(32, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 54)(36, "span", 55);
    \u0275\u0275text(37, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 54)(41, "span", 55);
    \u0275\u0275text(42, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 54)(46, "span", 55);
    \u0275\u0275text(47, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 54)(51, "span", 55);
    \u0275\u0275text(52, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 54)(56, "span", 55);
    \u0275\u0275text(57, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 56)(61, "span", 55);
    \u0275\u0275text(62, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 54)(66, "span", 55);
    \u0275\u0275text(67, "Document Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span");
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 54)(71, "span", 55);
    \u0275\u0275text(72, "Document Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 54)(76, "span", 55);
    \u0275\u0275text(77, "KYC Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 36);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 54)(81, "span", 55);
    \u0275\u0275text(82, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span");
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 16, ctx_r1.detailCustomer.createdAt, "yyyy-MM-dd"));
  }
}
var CustomerReportComponent = class _CustomerReportComponent {
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.customers = [];
    this.filteredCustomers = [];
    this.displayedColumns = ["fullName", "email", "phone", "country", "kyc", "createdAt", "actions"];
    this.searchString = "";
    this.loading = true;
    this.totalCustomers = 0;
    this.kycVerified = 0;
    this.kycPending = 0;
    this.showDetail = false;
    this.detailCustomer = null;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadCustomers();
  }
  loadCustomers() {
    this.loading = true;
    this.api.getCustomers().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.customers = res.data;
          this.computeStats();
          this.applyFilter();
        } else {
          this.customers = [];
          this.filteredCustomers = [];
        }
        this.loading = false;
      },
      error: () => {
        this.customers = [];
        this.filteredCustomers = [];
        this.loading = false;
      }
    });
  }
  computeStats() {
    this.totalCustomers = this.customers.length;
    this.kycVerified = this.customers.filter((c) => c.isKycVerified).length;
    this.kycPending = this.customers.filter((c) => !c.isKycVerified).length;
  }
  applyFilter() {
    const s = this.searchString.toLowerCase();
    this.filteredCustomers = !s ? [...this.customers] : this.customers.filter((c) => c.fullName.toLowerCase().includes(s) || (c.email || "").toLowerCase().includes(s) || (c.phone || "").toLowerCase().includes(s) || c.country.toLowerCase().includes(s));
  }
  // Detail
  viewDetail(customer) {
    this.detailCustomer = customer;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
  }
  // KYC Actions
  approveKyc(customer) {
    this.api.approveKyc(customer.id).subscribe((r) => {
      if (r?.success) {
        customer.isKycVerified = true;
        this.computeStats();
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
        this.computeStats();
        this.notify.warn(`KYC rejected for '${customer.fullName}'.`);
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function CustomerReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerReportComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerReportComponent, selectors: [["app-customer-report"]], decls: 35, vars: 7, consts: [[1, "page-header"], [1, "stat-cards"], [1, "stat-card"], [1, "stat-icon", "stat-icon-blue"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "stat-icon-green"], [1, "stat-value", "text-green"], [1, "stat-icon", "stat-icon-orange"], [1, "stat-value", "text-orange"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search customers...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "fullName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "phone"], ["matColumnDef", "country"], ["matColumnDef", "kyc"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Approve KYC", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Reject KYC", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Approve KYC", 3, "click"], [1, "text-success"], ["mat-icon-button", "", "matTooltip", "Reject KYC", 3, "click"], [1, "text-error"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], [1, "header-icon"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-item", "full-width"]], template: function CustomerReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Customer Report");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "mat-icon");
        \u0275\u0275text(7, "people");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "span", 5);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 6);
        \u0275\u0275text(12, "Total Customers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 2)(14, "div", 7)(15, "mat-icon");
        \u0275\u0275text(16, "verified_user");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 4)(18, "span", 8);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 6);
        \u0275\u0275text(21, "KYC Verified");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 2)(23, "div", 9)(24, "mat-icon");
        \u0275\u0275text(25, "hourglass_empty");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 4)(27, "span", 10);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 6);
        \u0275\u0275text(30, "KYC Pending");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(31, CustomerReportComponent_div_31_Template, 2, 0, "div", 11)(32, CustomerReportComponent_mat_card_32_Template, 30, 5, "mat-card", 12)(33, CustomerReportComponent_div_33_Template, 1, 0, "div", 13)(34, CustomerReportComponent_div_34_Template, 86, 19, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.totalCustomers);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.kycVerified);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.kycPending);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailCustomer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailCustomer);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatChipsModule, MatFormFieldModule, MatFormField, MatPrefix, MatInputModule, MatInput, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  margin: 0;\n}\n.stat-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  border-radius: 10px;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stat-icon.stat-icon-blue[_ngcontent-%COMP%] {\n  background: #1a56db;\n}\n.stat-icon.stat-icon-green[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.stat-icon.stat-icon-orange[_ngcontent-%COMP%] {\n  background: #ea580c;\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #111827;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 500;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.text-orange[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 320px;\n  margin-bottom: 8px;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.data-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 8px 12px;\n}\n.data-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 8px 12px;\n  color: #374151;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.chip.chip-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #2e7d32 !important;\n}\n.text-error[_ngcontent-%COMP%] {\n  color: #c62828 !important;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n.popup.popup-md[_ngcontent-%COMP%] {\n  width: 600px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #1565c0;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .popup[_ngcontent-%COMP%] {\n    padding: 16px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=customer-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerReportComponent, [{
    type: Component,
    args: [{ selector: "app-customer-report", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatChipsModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatProgressSpinnerModule,
      DatePipe
    ], template: `<!-- Page Header -->\r
<div class="page-header">\r
  <h2>Customer Report</h2>\r
</div>\r
\r
<!-- Summary Cards -->\r
<div class="stat-cards">\r
  <div class="stat-card">\r
    <div class="stat-icon stat-icon-blue"><mat-icon>people</mat-icon></div>\r
    <div class="stat-info">\r
      <span class="stat-value">{{ totalCustomers }}</span>\r
      <span class="stat-label">Total Customers</span>\r
    </div>\r
  </div>\r
  <div class="stat-card">\r
    <div class="stat-icon stat-icon-green"><mat-icon>verified_user</mat-icon></div>\r
    <div class="stat-info">\r
      <span class="stat-value text-green">{{ kycVerified }}</span>\r
      <span class="stat-label">KYC Verified</span>\r
    </div>\r
  </div>\r
  <div class="stat-card">\r
    <div class="stat-icon stat-icon-orange"><mat-icon>hourglass_empty</mat-icon></div>\r
    <div class="stat-info">\r
      <span class="stat-value text-orange">{{ kycPending }}</span>\r
      <span class="stat-label">KYC Pending</span>\r
    </div>\r
  </div>\r
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
    <ng-container matColumnDef="fullName">\r
      <th mat-header-cell *matHeaderCellDef>Full Name</th>\r
      <td mat-cell *matCellDef="let c">{{ c.fullName }}</td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="email">\r
      <th mat-header-cell *matHeaderCellDef>Email</th>\r
      <td mat-cell *matCellDef="let c">{{ c.email || '-' }}</td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="phone">\r
      <th mat-header-cell *matHeaderCellDef>Phone</th>\r
      <td mat-cell *matCellDef="let c">{{ c.phone || '-' }}</td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="country">\r
      <th mat-header-cell *matHeaderCellDef>Country</th>\r
      <td mat-cell *matCellDef="let c">{{ c.country }}</td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="kyc">\r
      <th mat-header-cell *matHeaderCellDef>KYC</th>\r
      <td mat-cell *matCellDef="let c">\r
        <span class="chip" [ngClass]="c.isKycVerified ? 'chip-success' : 'chip-warning'">\r
          {{ c.isKycVerified ? 'Verified' : 'Pending' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="createdAt">\r
      <th mat-header-cell *matHeaderCellDef>Created</th>\r
      <td mat-cell *matCellDef="let c">{{ c.createdAt | date:'yyyy-MM-dd' }}</td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let c">\r
        <button mat-icon-button matTooltip="View Details" (click)="viewDetail(c)">\r
          <mat-icon color="primary">visibility</mat-icon>\r
        </button>\r
        <button *ngIf="!c.isKycVerified" mat-icon-button matTooltip="Approve KYC" (click)="approveKyc(c)">\r
          <mat-icon class="text-success">check_circle</mat-icon>\r
        </button>\r
        <button *ngIf="c.isKycVerified" mat-icon-button matTooltip="Reject KYC" (click)="rejectKyc(c)">\r
          <mat-icon class="text-error">cancel</mat-icon>\r
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
    <h3><mat-icon class="header-icon">person</mat-icon> Customer Details</h3>\r
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
`, styles: ["/* src/app/pages/admin/customer-report/customer-report.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header h2 {\n  font-weight: 700;\n  font-size: 20px;\n  margin: 0;\n}\n.stat-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.stat-card {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  border-radius: 10px;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.stat-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon mat-icon {\n  color: #fff;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stat-icon.stat-icon-blue {\n  background: #1a56db;\n}\n.stat-icon.stat-icon-green {\n  background: #16a34a;\n}\n.stat-icon.stat-icon-orange {\n  background: #ea580c;\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.stat-value {\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #111827;\n}\n.stat-label {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 500;\n}\n.text-green {\n  color: #16a34a;\n}\n.text-orange {\n  color: #ea580c;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card {\n  border-radius: 10px;\n  padding: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n}\n.search-field {\n  width: 320px;\n  margin-bottom: 8px;\n}\n.search-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table {\n  width: 100%;\n}\n.data-table th.mat-mdc-header-cell {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 8px 12px;\n}\n.data-table td.mat-mdc-cell {\n  font-size: 13px;\n  padding: 8px 12px;\n  color: #374151;\n}\n.empty-state {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.chip.chip-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-success {\n  color: #2e7d32 !important;\n}\n.text-error {\n  color: #c62828 !important;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.popup {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n.popup.popup-md {\n  width: 600px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.popup-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.header-icon {\n  font-size: 22px;\n  color: #1565c0;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n}\n.detail-grid .detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-grid .detail-item.full-width {\n  grid-column: 1/-1;\n}\n.detail-label {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .search-field {\n    width: 100%;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n  .stat-cards {\n    grid-template-columns: 1fr;\n  }\n  .popup {\n    padding: 16px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=customer-report.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerReportComponent, { className: "CustomerReportComponent", filePath: "src/app/pages/admin/customer-report/customer-report.component.ts", lineNumber: 29 });
})();
export {
  CustomerReportComponent
};
//# sourceMappingURL=chunk-5H4T5NO6.js.map
