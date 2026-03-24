import {
  MatChipsModule
} from "./chunk-MIGO47T2.js";
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
} from "./chunk-IHZVJAJK.js";
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
  NotificationService
} from "./chunk-IMXIMGZJ.js";
import "./chunk-BEKM3RIS.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-COXUGWJY.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-SKYCJQIS.js";
import "./chunk-4DSKJDZB.js";
import {
  MatFormField,
  MatPrefix
} from "./chunk-E4MJAOS2.js";
import {
  ApiService
} from "./chunk-VYOOPMBG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgModel
} from "./chunk-AVOWLGE4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-IRXVSIUW.js";
import {
  AuthStateService
} from "./chunk-MKKXXFYO.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-DBW47J2B.js";
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J3ROLHMS.js";

// src/app/pages/admin/customer-report/customer-report.component.ts
function CustomerReportComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1, "Full Name");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38);
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
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38);
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
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38);
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
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38);
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
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1, "KYC");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38)(1, "span", 39);
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
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1, "Created");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38);
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
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_td_26_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function CustomerReportComponent_mat_card_32_td_26_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const c_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveKyc(c_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 47);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function CustomerReportComponent_mat_card_32_td_26_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function CustomerReportComponent_mat_card_32_td_26_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const c_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectKyc(c_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 49);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function CustomerReportComponent_mat_card_32_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 38)(1, "button", 40);
    \u0275\u0275listener("click", function CustomerReportComponent_mat_card_32_td_26_Template_button_click_1_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(c_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon", 41);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function CustomerReportComponent_mat_card_32_td_26_Template_button_click_4_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDocuments(c_r10));
    });
    \u0275\u0275elementStart(5, "mat-icon", 43);
    \u0275\u0275text(6, "folder_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CustomerReportComponent_mat_card_32_td_26_button_7_Template, 3, 0, "button", 44)(8, CustomerReportComponent_mat_card_32_td_26_button_8_Template, 3, 0, "button", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !c_r10.isKycVerified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r10.isKycVerified);
  }
}
function CustomerReportComponent_mat_card_32_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 50);
  }
}
function CustomerReportComponent_mat_card_32_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 51);
  }
}
function CustomerReportComponent_mat_card_32_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " No customers found. ");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_mat_card_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 20)(1, "mat-form-field", 21)(2, "mat-icon", 22);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 23);
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
    \u0275\u0275elementStart(5, "table", 24);
    \u0275\u0275elementContainerStart(6, 25);
    \u0275\u0275template(7, CustomerReportComponent_mat_card_32_th_7_Template, 2, 0, "th", 26)(8, CustomerReportComponent_mat_card_32_td_8_Template, 2, 1, "td", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 28);
    \u0275\u0275template(10, CustomerReportComponent_mat_card_32_th_10_Template, 2, 0, "th", 26)(11, CustomerReportComponent_mat_card_32_td_11_Template, 2, 1, "td", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 29);
    \u0275\u0275template(13, CustomerReportComponent_mat_card_32_th_13_Template, 2, 0, "th", 26)(14, CustomerReportComponent_mat_card_32_td_14_Template, 2, 1, "td", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 30);
    \u0275\u0275template(16, CustomerReportComponent_mat_card_32_th_16_Template, 2, 0, "th", 26)(17, CustomerReportComponent_mat_card_32_td_17_Template, 2, 1, "td", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 31);
    \u0275\u0275template(19, CustomerReportComponent_mat_card_32_th_19_Template, 2, 0, "th", 26)(20, CustomerReportComponent_mat_card_32_td_20_Template, 3, 2, "td", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 32);
    \u0275\u0275template(22, CustomerReportComponent_mat_card_32_th_22_Template, 2, 0, "th", 26)(23, CustomerReportComponent_mat_card_32_td_23_Template, 3, 4, "td", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 33);
    \u0275\u0275template(25, CustomerReportComponent_mat_card_32_th_25_Template, 2, 0, "th", 26)(26, CustomerReportComponent_mat_card_32_td_26_Template, 9, 2, "td", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(27, CustomerReportComponent_mat_card_32_tr_27_Template, 1, 0, "tr", 34)(28, CustomerReportComponent_mat_card_32_tr_28_Template, 1, 0, "tr", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, CustomerReportComponent_mat_card_32_div_29_Template, 2, 0, "div", 36);
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
    \u0275\u0275elementStart(0, "div", 53);
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
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "h3")(3, "mat-icon", 56);
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Customer Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 57);
    \u0275\u0275listener("click", function CustomerReportComponent_div_34_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 58)(10, "div", 59)(11, "span", 60);
    \u0275\u0275text(12, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 59)(16, "span", 60);
    \u0275\u0275text(17, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 59)(21, "span", 60);
    \u0275\u0275text(22, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 59)(26, "span", 60);
    \u0275\u0275text(27, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 59)(31, "span", 60);
    \u0275\u0275text(32, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 59)(36, "span", 60);
    \u0275\u0275text(37, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 59)(41, "span", 60);
    \u0275\u0275text(42, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 59)(46, "span", 60);
    \u0275\u0275text(47, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 59)(51, "span", 60);
    \u0275\u0275text(52, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 59)(56, "span", 60);
    \u0275\u0275text(57, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 61)(61, "span", 60);
    \u0275\u0275text(62, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 59)(66, "span", 60);
    \u0275\u0275text(67, "Document Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span");
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 59)(71, "span", 60);
    \u0275\u0275text(72, "Document Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 59)(76, "span", 60);
    \u0275\u0275text(77, "KYC Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 39);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 59)(81, "span", 60);
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
function CustomerReportComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function CustomerReportComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDocViewer());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_div_36_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 65);
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_div_36_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "mat-icon");
    \u0275\u0275text(2, "folder_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No documents uploaded for this customer.");
    \u0275\u0275elementEnd()();
  }
}
function CustomerReportComponent_div_36_div_9_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No: ", doc_r17.documentNumber, "");
  }
}
function CustomerReportComponent_div_36_div_9_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", doc_r17.issuingCountry, "");
  }
}
function CustomerReportComponent_div_36_div_9_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275listener("click", function CustomerReportComponent_div_36_div_9_div_1_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const doc_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r17.frontImagePath));
    });
    \u0275\u0275element(1, "img", 76);
    \u0275\u0275elementStart(2, "span", 77);
    \u0275\u0275text(3, "Front");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r17.frontImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerReportComponent_div_36_div_9_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275listener("click", function CustomerReportComponent_div_36_div_9_div_1_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const doc_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r17.backImagePath));
    });
    \u0275\u0275element(1, "img", 78);
    \u0275\u0275elementStart(2, "span", 77);
    \u0275\u0275text(3, "Back");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r17.backImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerReportComponent_div_36_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 71);
    \u0275\u0275template(7, CustomerReportComponent_div_36_div_9_div_1_span_7_Template, 2, 1, "span", 72)(8, CustomerReportComponent_div_36_div_9_div_1_span_8_Template, 2, 1, "span", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 73);
    \u0275\u0275template(10, CustomerReportComponent_div_36_div_9_div_1_div_10_Template, 4, 1, "div", 74)(11, CustomerReportComponent_div_36_div_9_div_1_div_11_Template, 4, 1, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r17.documentType);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", doc_r17.isVerified ? "chip-success" : "chip-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r17.isVerified ? "Verified" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r17.documentNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r17.issuingCountry);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r17.frontImagePath);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r17.backImagePath);
  }
}
function CustomerReportComponent_div_36_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, CustomerReportComponent_div_36_div_9_div_1_Template, 12, 7, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.customerDocs);
  }
}
function CustomerReportComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 55)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 57);
    \u0275\u0275listener("click", function CustomerReportComponent_div_36_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDocViewer());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CustomerReportComponent_div_36_div_7_Template, 2, 0, "div", 11)(8, CustomerReportComponent_div_36_div_8_Template, 5, 0, "div", 63)(9, CustomerReportComponent_div_36_div_9_Template, 2, 1, "div", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Documents \u2014 ", ctx_r1.docViewerCustomer == null ? null : ctx_r1.docViewerCustomer.fullName, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loadingDocs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingDocs && ctx_r1.customerDocs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingDocs && ctx_r1.customerDocs.length > 0);
  }
}
function CustomerReportComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275listener("click", function CustomerReportComponent_div_37_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImagePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "button", 81);
    \u0275\u0275listener("click", function CustomerReportComponent_div_38_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImagePopup());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "img", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.docImageUrl, \u0275\u0275sanitizeUrl);
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
    this.showDocViewer = false;
    this.docViewerCustomer = null;
    this.customerDocs = [];
    this.loadingDocs = false;
    this.docImageUrl = "";
    this.showImagePopup = false;
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
  // Document Viewer
  viewDocuments(customer) {
    this.docViewerCustomer = customer;
    this.showDocViewer = true;
    this.loadingDocs = true;
    this.customerDocs = [];
    this.api.getCustomerDocuments(customer.id).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.customerDocs = res.data;
        }
        this.loadingDocs = false;
      },
      error: () => {
        this.loadingDocs = false;
      }
    });
  }
  closeDocViewer() {
    this.showDocViewer = false;
    this.docViewerCustomer = null;
  }
  getDocImageFullUrl(path) {
    if (!path)
      return "";
    const base = this.api.getBaseUrl().replace(/\/$/, "");
    return `${base}${path}`;
  }
  openImagePopup(path) {
    this.docImageUrl = this.getDocImageFullUrl(path);
    this.showImagePopup = true;
  }
  closeImagePopup() {
    this.showImagePopup = false;
    this.docImageUrl = "";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerReportComponent, selectors: [["app-customer-report"]], decls: 39, vars: 11, consts: [[1, "page-header"], [1, "stat-cards"], [1, "stat-card"], [1, "stat-icon", "stat-icon-blue"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "stat-icon-green"], [1, "stat-value", "text-green"], [1, "stat-icon", "stat-icon-orange"], [1, "stat-value", "text-orange"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], ["class", "overlay image-overlay", 3, "click", 4, "ngIf"], ["class", "image-popup", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search customers...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "fullName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "phone"], ["matColumnDef", "country"], ["matColumnDef", "kyc"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Documents", 3, "click"], ["color", "accent"], ["mat-icon-button", "", "matTooltip", "Approve KYC", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Reject KYC", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Approve KYC", 3, "click"], [1, "text-success"], ["mat-icon-button", "", "matTooltip", "Reject KYC", 3, "click"], [1, "text-error"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], [1, "header-icon"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-item", "full-width"], [1, "popup", "popup-lg"], ["class", "doc-empty-state", 4, "ngIf"], ["class", "doc-viewer-grid", 4, "ngIf"], ["diameter", "30"], [1, "doc-empty-state"], [1, "doc-viewer-grid"], ["class", "doc-viewer-card", 4, "ngFor", "ngForOf"], [1, "doc-viewer-card"], [1, "doc-viewer-header"], [1, "doc-viewer-info"], [4, "ngIf"], [1, "doc-viewer-images"], ["class", "doc-viewer-img-wrap", 3, "click", 4, "ngIf"], [1, "doc-viewer-img-wrap", 3, "click"], ["alt", "Front", 3, "src"], [1, "doc-img-label"], ["alt", "Back", 3, "src"], [1, "overlay", "image-overlay", 3, "click"], [1, "image-popup"], ["mat-icon-button", "", 1, "image-popup-close", 3, "click"], ["alt", "Document Image", 1, "image-popup-img", 3, "src"]], template: function CustomerReportComponent_Template(rf, ctx) {
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
        \u0275\u0275template(31, CustomerReportComponent_div_31_Template, 2, 0, "div", 11)(32, CustomerReportComponent_mat_card_32_Template, 30, 5, "mat-card", 12)(33, CustomerReportComponent_div_33_Template, 1, 0, "div", 13)(34, CustomerReportComponent_div_34_Template, 86, 19, "div", 14)(35, CustomerReportComponent_div_35_Template, 1, 0, "div", 13)(36, CustomerReportComponent_div_36_Template, 10, 4, "div", 15)(37, CustomerReportComponent_div_37_Template, 1, 0, "div", 16)(38, CustomerReportComponent_div_38_Template, 5, 1, "div", 17);
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
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDocViewer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDocViewer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showImagePopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showImagePopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatChipsModule, MatFormFieldModule, MatFormField, MatPrefix, MatInputModule, MatInput, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.stat-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  border-radius: 10px;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stat-icon.stat-icon-blue[_ngcontent-%COMP%] {\n  background: #1a56db;\n}\n.stat-icon.stat-icon-green[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.stat-icon.stat-icon-orange[_ngcontent-%COMP%] {\n  background: #ea580c;\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #111827;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 500;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.text-orange[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.doc-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n  justify-content: center;\n}\n.doc-empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.doc-viewer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 14px;\n  padding: 8px 0;\n}\n.doc-viewer-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 14px;\n  background: #f8fafc;\n}\n.doc-viewer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.doc-viewer-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.doc-viewer-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 10px;\n}\n.doc-viewer-images[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.doc-viewer-img-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n}\n.doc-viewer-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 6px;\n  border: 1px solid #d1d5db;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.doc-viewer-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.doc-img-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.image-overlay[_ngcontent-%COMP%] {\n  z-index: 10002;\n}\n.image-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10003;\n  background: #fff;\n  border-radius: 10px;\n  padding: 12px;\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);\n  max-width: 90vw;\n  max-height: 90vh;\n}\n.image-popup-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.5) !important;\n  color: #fff !important;\n}\n.image-popup-img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 80vw;\n  max-height: 80vh;\n  border-radius: 6px;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .doc-viewer-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .doc-viewer-card[_ngcontent-%COMP%] {\n  background: #334155;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .doc-viewer-info[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .doc-viewer-info[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .doc-img-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .doc-img-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .image-popup[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .image-popup[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n@media (max-width: 768px) {\n  .stat-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=customer-report.component.css.map */"] });
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
    ], template: `<!-- Page Header -->
<div class="page-header">
  <h2>Customer Report</h2>
</div>

<!-- Summary Cards -->
<div class="stat-cards">
  <div class="stat-card">
    <div class="stat-icon stat-icon-blue"><mat-icon>people</mat-icon></div>
    <div class="stat-info">
      <span class="stat-value">{{ totalCustomers }}</span>
      <span class="stat-label">Total Customers</span>
    </div>
  </div>
  <div class="stat-card">
    <div class="stat-icon stat-icon-green"><mat-icon>verified_user</mat-icon></div>
    <div class="stat-info">
      <span class="stat-value text-green">{{ kycVerified }}</span>
      <span class="stat-label">KYC Verified</span>
    </div>
  </div>
  <div class="stat-card">
    <div class="stat-icon stat-icon-orange"><mat-icon>hourglass_empty</mat-icon></div>
    <div class="stat-info">
      <span class="stat-value text-orange">{{ kycPending }}</span>
      <span class="stat-label">KYC Pending</span>
    </div>
  </div>
</div>

<!-- Loading -->
<div *ngIf="loading" class="loading-container">
  <mat-spinner diameter="40"></mat-spinner>
</div>

<!-- Search + Table -->
<mat-card *ngIf="!loading" class="table-card">
  <mat-form-field appearance="outline" class="search-field">
    <mat-icon matPrefix>search</mat-icon>
    <input matInput placeholder="Search customers..." [(ngModel)]="searchString" (ngModelChange)="applyFilter()" />
  </mat-form-field>

  <table mat-table [dataSource]="filteredCustomers" class="data-table">
    <ng-container matColumnDef="fullName">
      <th mat-header-cell *matHeaderCellDef>Full Name</th>
      <td mat-cell *matCellDef="let c">{{ c.fullName }}</td>
    </ng-container>

    <ng-container matColumnDef="email">
      <th mat-header-cell *matHeaderCellDef>Email</th>
      <td mat-cell *matCellDef="let c">{{ c.email || '-' }}</td>
    </ng-container>

    <ng-container matColumnDef="phone">
      <th mat-header-cell *matHeaderCellDef>Phone</th>
      <td mat-cell *matCellDef="let c">{{ c.phone || '-' }}</td>
    </ng-container>

    <ng-container matColumnDef="country">
      <th mat-header-cell *matHeaderCellDef>Country</th>
      <td mat-cell *matCellDef="let c">{{ c.country }}</td>
    </ng-container>

    <ng-container matColumnDef="kyc">
      <th mat-header-cell *matHeaderCellDef>KYC</th>
      <td mat-cell *matCellDef="let c">
        <span class="chip" [ngClass]="c.isKycVerified ? 'chip-success' : 'chip-warning'">
          {{ c.isKycVerified ? 'Verified' : 'Pending' }}
        </span>
      </td>
    </ng-container>

    <ng-container matColumnDef="createdAt">
      <th mat-header-cell *matHeaderCellDef>Created</th>
      <td mat-cell *matCellDef="let c">{{ c.createdAt | date:'yyyy-MM-dd' }}</td>
    </ng-container>

    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let c">
        <button mat-icon-button matTooltip="View Details" (click)="viewDetail(c)">
          <mat-icon color="primary">visibility</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Documents" (click)="viewDocuments(c)">
          <mat-icon color="accent">folder_open</mat-icon>
        </button>
        <button *ngIf="!c.isKycVerified" mat-icon-button matTooltip="Approve KYC" (click)="approveKyc(c)">
          <mat-icon class="text-success">check_circle</mat-icon>
        </button>
        <button *ngIf="c.isKycVerified" mat-icon-button matTooltip="Reject KYC" (click)="rejectKyc(c)">
          <mat-icon class="text-error">cancel</mat-icon>
        </button>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  <div *ngIf="!filteredCustomers.length && !loading" class="empty-state">
    No customers found.
  </div>
</mat-card>

<!-- ============================================================ -->
<!-- Detail Popup                                                  -->
<!-- ============================================================ -->
<div *ngIf="showDetail && detailCustomer" class="overlay" (click)="closeDetail()"></div>
<div *ngIf="showDetail && detailCustomer" class="popup popup-md">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">person</mat-icon> Customer Details</h3>
    <button mat-icon-button (click)="closeDetail()"><mat-icon>close</mat-icon></button>
  </div>
  <div class="detail-grid">
    <div class="detail-item"><span class="detail-label">Full Name</span><span>{{ detailCustomer.fullName }}</span></div>
    <div class="detail-item"><span class="detail-label">Email</span><span>{{ detailCustomer.email || '-' }}</span></div>
    <div class="detail-item"><span class="detail-label">Phone</span><span>{{ detailCustomer.phone || '-' }}</span></div>
    <div class="detail-item"><span class="detail-label">Date of Birth</span><span>{{ detailCustomer.dateOfBirth || '-' }}</span></div>
    <div class="detail-item"><span class="detail-label">Gender</span><span>{{ detailCustomer.gender || '-' }}</span></div>
    <div class="detail-item"><span class="detail-label">Nationality</span><span>{{ detailCustomer.nationality || '-' }}</span></div>
    <div class="detail-item"><span class="detail-label">Country</span><span>{{ detailCustomer.country }}</span></div>
    <div class="detail-item"><span class="detail-label">City</span><span>{{ detailCustomer.city || '-' }}</span></div>
    <div class="detail-item"><span class="detail-label">State</span><span>{{ detailCustomer.state || '-' }}</span></div>
    <div class="detail-item"><span class="detail-label">Postal Code</span><span>{{ detailCustomer.postalCode || '-' }}</span></div>
    <div class="detail-item full-width"><span class="detail-label">Address</span><span>{{ detailCustomer.address || '-' }}</span></div>
    <div class="detail-item"><span class="detail-label">Document Type</span><span>{{ detailCustomer.idDocumentType || '-' }}</span></div>
    <div class="detail-item"><span class="detail-label">Document Number</span><span>{{ detailCustomer.idDocumentNumber || '-' }}</span></div>
    <div class="detail-item">
      <span class="detail-label">KYC Status</span>
      <span class="chip" [ngClass]="detailCustomer.isKycVerified ? 'chip-success' : 'chip-warning'">
        {{ detailCustomer.isKycVerified ? 'Verified' : 'Pending' }}
      </span>
    </div>
    <div class="detail-item"><span class="detail-label">Created</span><span>{{ detailCustomer.createdAt | date:'yyyy-MM-dd' }}</span></div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Document Viewer Popup                                         -->
<!-- ============================================================ -->
<div *ngIf="showDocViewer" class="overlay" (click)="closeDocViewer()"></div>
<div *ngIf="showDocViewer" class="popup popup-lg">
  <div class="popup-header">
    <h3>Documents &mdash; {{ docViewerCustomer?.fullName }}</h3>
    <button mat-icon-button (click)="closeDocViewer()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="loadingDocs" class="loading-container">
    <mat-spinner diameter="30"></mat-spinner>
  </div>

  <div *ngIf="!loadingDocs && customerDocs.length === 0" class="doc-empty-state">
    <mat-icon>folder_off</mat-icon>
    <span>No documents uploaded for this customer.</span>
  </div>

  <div *ngIf="!loadingDocs && customerDocs.length > 0" class="doc-viewer-grid">
    <div *ngFor="let doc of customerDocs" class="doc-viewer-card">
      <div class="doc-viewer-header">
        <strong>{{ doc.documentType }}</strong>
        <span class="chip" [ngClass]="doc.isVerified ? 'chip-success' : 'chip-warning'">
          {{ doc.isVerified ? 'Verified' : 'Pending' }}
        </span>
      </div>
      <div class="doc-viewer-info">
        <span *ngIf="doc.documentNumber">No: {{ doc.documentNumber }}</span>
        <span *ngIf="doc.issuingCountry"> &middot; {{ doc.issuingCountry }}</span>
      </div>
      <div class="doc-viewer-images">
        <div *ngIf="doc.frontImagePath" class="doc-viewer-img-wrap" (click)="openImagePopup(doc.frontImagePath)">
          <img [src]="getDocImageFullUrl(doc.frontImagePath)" alt="Front" />
          <span class="doc-img-label">Front</span>
        </div>
        <div *ngIf="doc.backImagePath" class="doc-viewer-img-wrap" (click)="openImagePopup(doc.backImagePath)">
          <img [src]="getDocImageFullUrl(doc.backImagePath)" alt="Back" />
          <span class="doc-img-label">Back</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Image Full View Popup -->
<div *ngIf="showImagePopup" class="overlay image-overlay" (click)="closeImagePopup()"></div>
<div *ngIf="showImagePopup" class="image-popup">
  <button mat-icon-button class="image-popup-close" (click)="closeImagePopup()">
    <mat-icon>close</mat-icon>
  </button>
  <img [src]="docImageUrl" alt="Document Image" class="image-popup-img" />
</div>
`, styles: ["/* src/app/pages/admin/customer-report/customer-report.component.scss */\n.stat-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.stat-card {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  border-radius: 10px;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.stat-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon mat-icon {\n  color: #fff;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stat-icon.stat-icon-blue {\n  background: #1a56db;\n}\n.stat-icon.stat-icon-green {\n  background: #16a34a;\n}\n.stat-icon.stat-icon-orange {\n  background: #ea580c;\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.stat-value {\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #111827;\n}\n.stat-label {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 500;\n}\n.text-green {\n  color: #16a34a;\n}\n.text-orange {\n  color: #ea580c;\n}\n.doc-empty-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n  justify-content: center;\n}\n.doc-empty-state mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.doc-viewer-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 14px;\n  padding: 8px 0;\n}\n.doc-viewer-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 14px;\n  background: #f8fafc;\n}\n.doc-viewer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.doc-viewer-header strong {\n  font-size: 14px;\n}\n.doc-viewer-info {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 10px;\n}\n.doc-viewer-images {\n  display: flex;\n  gap: 12px;\n}\n.doc-viewer-img-wrap {\n  text-align: center;\n  cursor: pointer;\n}\n.doc-viewer-img-wrap img {\n  width: 120px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 6px;\n  border: 1px solid #d1d5db;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.doc-viewer-img-wrap img:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.doc-img-label {\n  display: block;\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.image-overlay {\n  z-index: 10002;\n}\n.image-popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10003;\n  background: #fff;\n  border-radius: 10px;\n  padding: 12px;\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);\n  max-width: 90vw;\n  max-height: 90vh;\n}\n.image-popup-close {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.5) !important;\n  color: #fff !important;\n}\n.image-popup-img {\n  display: block;\n  max-width: 80vw;\n  max-height: 80vh;\n  border-radius: 6px;\n}\n:host-context(.dark-mode) .stat-card {\n  background: #1e293b;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark-mode) .stat-value {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .doc-viewer-card {\n  background: #334155;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark-mode) .doc-viewer-info {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .doc-img-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .image-popup {\n  background: #1e293b;\n}\n@media (max-width: 768px) {\n  .stat-cards {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=customer-report.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerReportComponent, { className: "CustomerReportComponent", filePath: "src/app/pages/admin/customer-report/customer-report.component.ts", lineNumber: 29 });
})();
export {
  CustomerReportComponent
};
//# sourceMappingURL=chunk-FOUDD4DE.js.map
