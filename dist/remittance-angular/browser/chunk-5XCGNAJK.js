import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  provideNativeDateAdapter
} from "./chunk-HOC5XL3C.js";
import {
  SearchableSelectDirective
} from "./chunk-NEZ2ARFB.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-M4YJYRUV.js";
import {
  ExportService
} from "./chunk-WHBCS6YY.js";
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
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-JA2POLDW.js";
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
  MatLabel,
  MatPrefix,
  MatSuffix
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
  Subject,
  __async,
  debounceTime,
  setClassMetadata,
  takeUntil,
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
  ɵɵpureFunction0,
  ɵɵreference,
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

// src/app/pages/admin/customer-register/customer-register.component.ts
var _c0 = () => [10, 20, 50, 100];
function CustomerRegisterComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_17_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Full Name");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_17_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.fullName);
  }
}
function CustomerRegisterComponent_mat_card_17_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_17_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.email || "-");
  }
}
function CustomerRegisterComponent_mat_card_17_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_17_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.phone || "-");
  }
}
function CustomerRegisterComponent_mat_card_17_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_17_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.country);
  }
}
function CustomerRegisterComponent_mat_card_17_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "KYC Status");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_17_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33)(1, "span", 34);
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
function CustomerRegisterComponent_mat_card_17_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Created");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_17_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
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
function CustomerRegisterComponent_mat_card_17_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_17_td_26_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function CustomerRegisterComponent_mat_card_17_td_26_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const c_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveKyc(c_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 45);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_mat_card_17_td_26_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function CustomerRegisterComponent_mat_card_17_td_26_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const c_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectKyc(c_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 47);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_mat_card_17_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 33)(1, "button", 35);
    \u0275\u0275listener("click", function CustomerRegisterComponent_mat_card_17_td_26_Template_button_click_1_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(c_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon", 36);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function CustomerRegisterComponent_mat_card_17_td_26_Template_button_click_4_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDocuments(c_r10));
    });
    \u0275\u0275elementStart(5, "mat-icon", 38);
    \u0275\u0275text(6, "folder_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 39);
    \u0275\u0275listener("click", function CustomerRegisterComponent_mat_card_17_td_26_Template_button_click_7_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditPopup(c_r10));
    });
    \u0275\u0275elementStart(8, "mat-icon", 36);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, CustomerRegisterComponent_mat_card_17_td_26_button_10_Template, 3, 0, "button", 40)(11, CustomerRegisterComponent_mat_card_17_td_26_button_11_Template, 3, 0, "button", 41);
    \u0275\u0275elementStart(12, "button", 42);
    \u0275\u0275listener("click", function CustomerRegisterComponent_mat_card_17_td_26_Template_button_click_12_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCustomer(c_r10));
    });
    \u0275\u0275elementStart(13, "mat-icon", 43);
    \u0275\u0275text(14, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", !c_r10.isKycVerified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r10.isKycVerified);
  }
}
function CustomerRegisterComponent_mat_card_17_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function CustomerRegisterComponent_mat_card_17_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 49);
  }
}
function CustomerRegisterComponent_mat_card_17_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, " No customers found. ");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_mat_card_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 14)(1, "mat-form-field", 15)(2, "mat-icon", 16);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_mat_card_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CustomerRegisterComponent_mat_card_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchDebounce.next($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 18);
    \u0275\u0275elementContainerStart(6, 19);
    \u0275\u0275template(7, CustomerRegisterComponent_mat_card_17_th_7_Template, 2, 0, "th", 20)(8, CustomerRegisterComponent_mat_card_17_td_8_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 22);
    \u0275\u0275template(10, CustomerRegisterComponent_mat_card_17_th_10_Template, 2, 0, "th", 20)(11, CustomerRegisterComponent_mat_card_17_td_11_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 23);
    \u0275\u0275template(13, CustomerRegisterComponent_mat_card_17_th_13_Template, 2, 0, "th", 20)(14, CustomerRegisterComponent_mat_card_17_td_14_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 24);
    \u0275\u0275template(16, CustomerRegisterComponent_mat_card_17_th_16_Template, 2, 0, "th", 20)(17, CustomerRegisterComponent_mat_card_17_td_17_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 25);
    \u0275\u0275template(19, CustomerRegisterComponent_mat_card_17_th_19_Template, 2, 0, "th", 20)(20, CustomerRegisterComponent_mat_card_17_td_20_Template, 3, 2, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 26);
    \u0275\u0275template(22, CustomerRegisterComponent_mat_card_17_th_22_Template, 2, 0, "th", 20)(23, CustomerRegisterComponent_mat_card_17_td_23_Template, 3, 4, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 27);
    \u0275\u0275template(25, CustomerRegisterComponent_mat_card_17_th_25_Template, 2, 0, "th", 20)(26, CustomerRegisterComponent_mat_card_17_td_26_Template, 15, 2, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(27, CustomerRegisterComponent_mat_card_17_tr_27_Template, 1, 0, "tr", 28)(28, CustomerRegisterComponent_mat_card_17_tr_28_Template, 1, 0, "tr", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-paginator", 30);
    \u0275\u0275listener("page", function CustomerRegisterComponent_mat_card_17_Template_mat_paginator_page_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, CustomerRegisterComponent_mat_card_17_div_30_Template, 2, 0, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.customers);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r1.totalCount)("pageSize", ctx_r1.pageSize)("pageIndex", ctx_r1.pageIndex)("pageSizeOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.customers.length && !ctx_r1.loading);
  }
}
function CustomerRegisterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "h3");
    \u0275\u0275text(3, "Customer Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 54);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 55)(8, "div", 56)(9, "span", 57);
    \u0275\u0275text(10, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 56)(14, "span", 57);
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 56)(19, "span", 57);
    \u0275\u0275text(20, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 56)(24, "span", 57);
    \u0275\u0275text(25, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 56)(29, "span", 57);
    \u0275\u0275text(30, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 56)(34, "span", 57);
    \u0275\u0275text(35, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 56)(39, "span", 57);
    \u0275\u0275text(40, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 56)(44, "span", 57);
    \u0275\u0275text(45, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 56)(49, "span", 57);
    \u0275\u0275text(50, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 56)(54, "span", 57);
    \u0275\u0275text(55, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 58)(59, "span", 57);
    \u0275\u0275text(60, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 56)(64, "span", 57);
    \u0275\u0275text(65, "Document Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 56)(69, "span", 57);
    \u0275\u0275text(70, "Document Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 56)(74, "span", 57);
    \u0275\u0275text(75, "KYC Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 34);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 56)(79, "span", 57);
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
function CustomerRegisterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function CustomerRegisterComponent_div_21_mat_option_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 92);
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
function CustomerRegisterComponent_div_21_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 92);
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
function CustomerRegisterComponent_div_21_div_78_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275element(1, "mat-spinner", 98);
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_21_div_78_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "mat-icon");
    \u0275\u0275text(2, "folder_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No documents uploaded yet.");
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_div_21_div_78_div_6_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No: ", doc_r19.documentNumber, "");
  }
}
function CustomerRegisterComponent_div_21_div_78_div_6_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", doc_r19.issuingCountry, "");
  }
}
function CustomerRegisterComponent_div_21_div_78_div_6_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_div_78_div_6_div_1_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const doc_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r19.frontImagePath));
    });
    \u0275\u0275element(1, "img", 108);
    \u0275\u0275elementStart(2, "span", 109);
    \u0275\u0275text(3, "Front");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r19.frontImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_21_div_78_div_6_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_div_78_div_6_div_1_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const doc_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r19.backImagePath));
    });
    \u0275\u0275element(1, "img", 110);
    \u0275\u0275elementStart(2, "span", 109);
    \u0275\u0275text(3, "Back");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r19.backImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_21_div_78_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 104);
    \u0275\u0275template(7, CustomerRegisterComponent_div_21_div_78_div_6_div_1_span_7_Template, 2, 1, "span", 90)(8, CustomerRegisterComponent_div_21_div_78_div_6_div_1_span_8_Template, 2, 1, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 105);
    \u0275\u0275template(10, CustomerRegisterComponent_div_21_div_78_div_6_div_1_div_10_Template, 4, 1, "div", 106)(11, CustomerRegisterComponent_div_21_div_78_div_6_div_1_div_11_Template, 4, 1, "div", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r19 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r19.documentType);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", doc_r19.isVerified ? "chip-success" : "chip-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r19.isVerified ? "Verified" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r19.documentNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r19.issuingCountry);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r19.frontImagePath);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r19.backImagePath);
  }
}
function CustomerRegisterComponent_div_21_div_78_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275template(1, CustomerRegisterComponent_div_21_div_78_div_6_div_1_Template, 12, 7, "div", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.existingDocs);
  }
}
function CustomerRegisterComponent_div_21_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 81)(2, "span", 82);
    \u0275\u0275text(3, "Existing Documents");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CustomerRegisterComponent_div_21_div_78_div_4_Template, 2, 0, "div", 94)(5, CustomerRegisterComponent_div_21_div_78_div_5_Template, 5, 0, "div", 95)(6, CustomerRegisterComponent_div_21_div_78_div_6_Template, 2, 1, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loadingExistingDocs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingExistingDocs && ctx_r1.existingDocs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingExistingDocs && ctx_r1.existingDocs.length > 0);
  }
}
function CustomerRegisterComponent_div_21_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "mat-icon");
    \u0275\u0275text(2, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1('Click "Add Document" to upload ', ctx_r1.isEditing ? "additional" : "identification", " documents.");
  }
}
function CustomerRegisterComponent_div_21_div_87_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dt_r25 = ctx.$implicit;
    \u0275\u0275property("value", dt_r25.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dt_r25.name);
  }
}
function CustomerRegisterComponent_div_21_div_87_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r26 = ctx.$implicit;
    \u0275\u0275property("value", c_r26.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r26.name);
  }
}
function CustomerRegisterComponent_div_21_div_87_img_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 124);
  }
  if (rf & 2) {
    const doc_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", doc_r24.frontPreview, \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_21_div_87_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(doc_r24.frontImage.name);
  }
}
function CustomerRegisterComponent_div_21_div_87_div_31_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 124);
  }
  if (rf & 2) {
    const doc_r24 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", doc_r24.backPreview, \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_21_div_87_div_31_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r24 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(doc_r24.backImage.name);
  }
}
function CustomerRegisterComponent_div_21_div_87_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "label", 119)(2, "mat-icon");
    \u0275\u0275text(3, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Back Side ");
    \u0275\u0275elementStart(5, "input", 120);
    \u0275\u0275listener("change", function CustomerRegisterComponent_div_21_div_87_div_31_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r27);
      const doc_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected(doc_r24, "back", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CustomerRegisterComponent_div_21_div_87_div_31_img_6_Template, 1, 1, "img", 121)(7, CustomerRegisterComponent_div_21_div_87_div_31_span_7_Template, 2, 1, "span", 122);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", doc_r24.backPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r24.backImage);
  }
}
function CustomerRegisterComponent_div_21_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "span", 114);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 115);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_div_87_Template_button_click_4_listener() {
      const i_r23 = \u0275\u0275restoreView(_r22).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeDocumentRow(i_r23));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 64)(8, "mat-form-field", 65)(9, "mat-label");
    \u0275\u0275text(10, "Document Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 116);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_87_Template_mat_select_ngModelChange_11_listener($event) {
      const doc_r24 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(doc_r24.documentType, $event) || (doc_r24.documentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function CustomerRegisterComponent_div_21_div_87_Template_mat_select_selectionChange_11_listener() {
      const doc_r24 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDocTypeChange(doc_r24));
    });
    \u0275\u0275template(12, CustomerRegisterComponent_div_21_div_87_mat_option_12_Template, 2, 2, "mat-option", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 65)(14, "mat-label");
    \u0275\u0275text(15, "Document Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_87_Template_input_ngModelChange_16_listener($event) {
      const doc_r24 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(doc_r24.documentNumber, $event) || (doc_r24.documentNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 65)(18, "mat-label");
    \u0275\u0275text(19, "Issuing Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_div_87_Template_mat_select_ngModelChange_20_listener($event) {
      const doc_r24 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(doc_r24.issuingCountry, $event) || (doc_r24.issuingCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(21, CustomerRegisterComponent_div_21_div_87_mat_option_21_Template, 2, 2, "mat-option", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 117)(23, "div", 118)(24, "label", 119)(25, "mat-icon");
    \u0275\u0275text(26, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Front Side ");
    \u0275\u0275elementStart(28, "input", 120);
    \u0275\u0275listener("change", function CustomerRegisterComponent_div_21_div_87_Template_input_change_28_listener($event) {
      const doc_r24 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected(doc_r24, "front", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, CustomerRegisterComponent_div_21_div_87_img_29_Template, 1, 1, "img", 121)(30, CustomerRegisterComponent_div_21_div_87_span_30_Template, 2, 1, "span", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, CustomerRegisterComponent_div_21_div_87_div_31_Template, 8, 2, "div", 123);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r24 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Document ", i_r23 + 1, "");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", doc_r24.documentType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.documentTypeConfigs);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", doc_r24.documentNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", doc_r24.issuingCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", doc_r24.frontPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r24.frontImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r24.requiredSides >= 2);
  }
}
function CustomerRegisterComponent_div_21_mat_spinner_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 126);
  }
}
function CustomerRegisterComponent_div_21_mat_icon_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 53)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 54);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CustomerRegisterComponent_div_21_div_7_Template, 2, 1, "div", 60);
    \u0275\u0275elementStart(8, "mat-tab-group", 61)(9, "mat-tab", 62)(10, "div", 63)(11, "div", 64)(12, "mat-form-field", 65)(13, "mat-label");
    \u0275\u0275text(14, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.fullName, $event) || (ctx_r1.form.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 65)(17, "mat-label");
    \u0275\u0275text(18, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateOfBirth, $event) || (ctx_r1.form.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "mat-datepicker-toggle", 68)(21, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 65)(24, "mat-label");
    \u0275\u0275text(25, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_mat_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.gender, $event) || (ctx_r1.form.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "mat-option", 70);
    \u0275\u0275text(28, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-option", 71);
    \u0275\u0275text(30, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-option", 72);
    \u0275\u0275text(32, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "mat-form-field", 65)(34, "mat-label");
    \u0275\u0275text(35, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nationality, $event) || (ctx_r1.form.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(37, "mat-tab", 73)(38, "div", 63)(39, "div", 64)(40, "mat-form-field", 65)(41, "mat-label");
    \u0275\u0275text(42, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "mat-form-field", 65)(45, "mat-label");
    \u0275\u0275text(46, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "mat-form-field", 65)(49, "mat-label");
    \u0275\u0275text(50, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "mat-select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_mat_select_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.country, $event) || (ctx_r1.form.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(52, CustomerRegisterComponent_div_21_mat_option_52_Template, 2, 2, "mat-option", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "mat-form-field", 65)(54, "mat-label");
    \u0275\u0275text(55, "Contact Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_mat_select_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contactCountry, $event) || (ctx_r1.form.contactCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(57, "mat-option", 77);
    \u0275\u0275text(58, "-- None --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, CustomerRegisterComponent_div_21_mat_option_59_Template, 2, 2, "mat-option", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "mat-form-field", 65)(61, "mat-label");
    \u0275\u0275text(62, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.city, $event) || (ctx_r1.form.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "mat-form-field", 65)(65, "mat-label");
    \u0275\u0275text(66, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_input_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.state, $event) || (ctx_r1.form.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "mat-form-field", 65)(69, "mat-label");
    \u0275\u0275text(70, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.postalCode, $event) || (ctx_r1.form.postalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "mat-form-field", 78)(73, "mat-label");
    \u0275\u0275text(74, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerRegisterComponent_div_21_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.address, $event) || (ctx_r1.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(76, "mat-tab", 79)(77, "div", 63);
    \u0275\u0275template(78, CustomerRegisterComponent_div_21_div_78_Template, 7, 3, "div", 80);
    \u0275\u0275elementStart(79, "div", 81)(80, "span", 82);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 83);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addDocumentRow());
    });
    \u0275\u0275elementStart(83, "mat-icon");
    \u0275\u0275text(84, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, " Add Document ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(86, CustomerRegisterComponent_div_21_div_86_Template, 5, 1, "div", 84)(87, CustomerRegisterComponent_div_21_div_87_Template, 32, 9, "div", 85);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(88, "div", 86)(89, "button", 87);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_Template_button_click_89_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(90, "mat-icon");
    \u0275\u0275text(91, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "button", 88);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_21_Template_button_click_93_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCustomer());
    });
    \u0275\u0275template(94, CustomerRegisterComponent_div_21_mat_spinner_94_Template, 1, 0, "mat-spinner", 89)(95, CustomerRegisterComponent_div_21_mat_icon_95_Template, 2, 0, "mat-icon", 90);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dobPicker_r28 = \u0275\u0275reference(22);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Customer" : "Register New Customer");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", dobPicker_r28);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateOfBirth);
    \u0275\u0275advance();
    \u0275\u0275property("for", dobPicker_r28);
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
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isEditing);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Upload Additional Documents" : "Upload identification documents");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.documentUploads.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.documentUploads);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving || ctx_r1.uploadingDocs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving || ctx_r1.uploadingDocs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving && !ctx_r1.uploadingDocs);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.uploadingDocs ? "Uploading Documents..." : ctx_r1.isEditing ? "Save Changes" : "Register Customer", " ");
  }
}
function CustomerRegisterComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDocViewer());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-spinner", 127);
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_23_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "mat-icon");
    \u0275\u0275text(2, "folder_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No documents uploaded for this customer.");
    \u0275\u0275elementEnd()();
  }
}
function CustomerRegisterComponent_div_23_div_9_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No: ", doc_r31.documentNumber, "");
  }
}
function CustomerRegisterComponent_div_23_div_9_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", doc_r31.issuingCountry, "");
  }
}
function CustomerRegisterComponent_div_23_div_9_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_23_div_9_div_1_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const doc_r31 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r31.frontImagePath));
    });
    \u0275\u0275element(1, "img", 108);
    \u0275\u0275elementStart(2, "span", 109);
    \u0275\u0275text(3, "Front");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r31.frontImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_23_div_9_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_23_div_9_div_1_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const doc_r31 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r31.backImagePath));
    });
    \u0275\u0275element(1, "img", 110);
    \u0275\u0275elementStart(2, "span", 109);
    \u0275\u0275text(3, "Back");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r31.backImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerRegisterComponent_div_23_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 104);
    \u0275\u0275template(7, CustomerRegisterComponent_div_23_div_9_div_1_span_7_Template, 2, 1, "span", 90)(8, CustomerRegisterComponent_div_23_div_9_div_1_span_8_Template, 2, 1, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 105);
    \u0275\u0275template(10, CustomerRegisterComponent_div_23_div_9_div_1_div_10_Template, 4, 1, "div", 106)(11, CustomerRegisterComponent_div_23_div_9_div_1_div_11_Template, 4, 1, "div", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r31 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r31.documentType);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", doc_r31.isVerified ? "chip-success" : "chip-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r31.isVerified ? "Verified" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r31.documentNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r31.issuingCountry);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r31.frontImagePath);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r31.backImagePath);
  }
}
function CustomerRegisterComponent_div_23_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275template(1, CustomerRegisterComponent_div_23_div_9_div_1_Template, 12, 7, "div", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.customerDocs);
  }
}
function CustomerRegisterComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 53)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 54);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDocViewer());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CustomerRegisterComponent_div_23_div_7_Template, 2, 0, "div", 5)(8, CustomerRegisterComponent_div_23_div_8_Template, 5, 0, "div", 84)(9, CustomerRegisterComponent_div_23_div_9_Template, 2, 1, "div", 96);
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
function CustomerRegisterComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImagePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerRegisterComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129)(1, "button", 130);
    \u0275\u0275listener("click", function CustomerRegisterComponent_div_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImagePopup());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "img", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.docImageUrl, \u0275\u0275sanitizeUrl);
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
    address: ""
  };
}
var CustomerRegisterComponent = class _CustomerRegisterComponent {
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.customers = [];
    this.displayedColumns = ["fullName", "email", "phone", "country", "kyc", "createdAt", "actions"];
    this.searchString = "";
    this.loading = true;
    this.countries = [];
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
    this.showDetail = false;
    this.detailCustomer = null;
    this.showFormPopup = false;
    this.isEditing = false;
    this.editingId = 0;
    this.saving = false;
    this.formError = "";
    this.form = emptyForm();
    this.documentUploads = [];
    this.documentTypeConfigs = [];
    this.uploadingDocs = false;
    this.existingDocs = [];
    this.loadingExistingDocs = false;
    this.showDocViewer = false;
    this.docViewerCustomer = null;
    this.customerDocs = [];
    this.loadingDocs = false;
    this.docImageUrl = "";
    this.showImagePopup = false;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.searchString = s;
      this.pageIndex = 0;
      this.loadCustomers();
    });
    this.loadCustomers();
    this.loadCountries();
    this.loadDocumentTypeConfigs();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadCustomers() {
    this.loading = true;
    this.api.getCustomersPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.customers = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.customers = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load customers.");
        }
        this.loading = false;
      },
      error: () => {
        this.customers = [];
        this.totalCount = 0;
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
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCustomers();
  }
  exportData(format) {
    this.exportService.export("api/admin/customers/export", { search: this.searchString }, format);
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
    this.documentUploads = [];
    this.existingDocs = [];
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
      address: customer.address || ""
    };
    this.formError = "";
    this.documentUploads = [];
    this.existingDocs = [];
    this.showFormPopup = true;
    this.loadExistingDocs(customer.id);
  }
  loadExistingDocs(customerId) {
    this.loadingExistingDocs = true;
    this.api.getCustomerDocuments(customerId).subscribe({
      next: (res) => {
        this.existingDocs = res?.success && res.data ? res.data : [];
        this.loadingExistingDocs = false;
      },
      error: () => {
        this.existingDocs = [];
        this.loadingExistingDocs = false;
      }
    });
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
      address: f.address || null
    };
    const obs = this.isEditing ? this.api.updateCustomer(this.editingId, dto) : this.api.createCustomer(dto);
    obs.subscribe({
      next: (res) => __async(this, null, function* () {
        if (res?.success) {
          const customerId = res.data?.id || this.editingId;
          if (this.documentUploads.length > 0 && customerId) {
            try {
              this.uploadingDocs = true;
              yield this.uploadDocuments(customerId);
              this.notify.success(this.isEditing ? "Customer updated with documents." : "Customer created with documents.");
            } catch {
              this.notify.warn("Customer saved but some documents failed to upload.");
            }
            this.uploadingDocs = false;
          } else {
            this.notify.success(this.isEditing ? "Customer updated." : "Customer created.");
          }
          this.showFormPopup = false;
          this.loadCustomers();
        } else {
          this.formError = res?.message || "Failed.";
        }
        this.saving = false;
      }),
      error: () => {
        this.formError = "Server error.";
        this.saving = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Document Type Configs
  // ---------------------------------------------------------------------------
  loadDocumentTypeConfigs() {
    this.api.getReferenceDocumentTypes().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.documentTypeConfigs = res.data.map((d) => ({
            name: d.name,
            requiredSides: d.requiredSides || 1
          }));
        }
      },
      error: () => {
        this.notify.warn("Could not load document types.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Document Upload helpers
  // ---------------------------------------------------------------------------
  addDocumentRow() {
    this.documentUploads.push({
      documentType: "",
      documentNumber: "",
      requiredSides: 1,
      issuingCountry: "",
      frontImage: null,
      backImage: null,
      frontPreview: null,
      backPreview: null
    });
  }
  removeDocumentRow(index) {
    this.documentUploads.splice(index, 1);
  }
  onDocTypeChange(doc) {
    const config = this.documentTypeConfigs.find((d) => d.name === doc.documentType);
    if (config) {
      doc.requiredSides = config.requiredSides;
    }
  }
  onFileSelected(doc, side, event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    if (side === "front") {
      doc.frontImage = file;
      doc.frontPreview = URL.createObjectURL(file);
    } else {
      doc.backImage = file;
      doc.backPreview = URL.createObjectURL(file);
    }
  }
  uploadDocuments(customerId) {
    return __async(this, null, function* () {
      for (const doc of this.documentUploads) {
        if (!doc.documentType || !doc.frontImage)
          continue;
        const formData = new FormData();
        formData.append("customerId", customerId.toString());
        formData.append("documentType", doc.documentType);
        formData.append("documentNumber", doc.documentNumber);
        formData.append("requiredSides", doc.requiredSides.toString());
        formData.append("issuingCountry", doc.issuingCountry || "");
        formData.append("frontImage", doc.frontImage);
        if (doc.backImage && doc.requiredSides >= 2) {
          formData.append("backImage", doc.backImage);
        }
        yield this.api.uploadDocument(formData).toPromise();
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Document Viewer
  // ---------------------------------------------------------------------------
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
      return new (__ngFactoryType__ || _CustomerRegisterComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerRegisterComponent, selectors: [["app-customer-register"]], features: [\u0275\u0275ProvidersFeature([provideNativeDateAdapter()])], decls: 26, vars: 10, consts: [["dobPicker", ""], [1, "page-header"], [1, "page-header-actions"], ["mat-stroked-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], ["class", "overlay image-overlay", 3, "click", 4, "ngIf"], ["class", "image-popup", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search customers...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "fullName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "phone"], ["matColumnDef", "country"], ["matColumnDef", "kyc"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Documents", 3, "click"], ["color", "accent"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "matTooltip", "Approve KYC", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Reject KYC", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-icon-button", "", "matTooltip", "Approve KYC", 3, "click"], [1, "text-success"], ["mat-icon-button", "", "matTooltip", "Reject KYC", 3, "click"], [1, "text-error"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-item", "full-width"], [1, "popup", "popup-lg"], ["class", "form-error", 4, "ngIf"], ["animationDuration", "200ms"], ["label", "Personal"], [1, "tab-content"], [1, "form-grid"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "readonly", "", "placeholder", "Select date", 3, "ngModelChange", "matDatepicker", "ngModel"], ["matSuffix", "", 3, "for"], [3, "ngModelChange", "ngModel"], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["label", "Contact"], ["matInput", "", "type", "email", 3, "ngModelChange", "ngModel"], ["searchable", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["value", ""], ["appearance", "outline", 1, "full-width"], ["label", "Documents"], ["style", "margin-bottom:16px", 4, "ngIf"], [1, "doc-upload-header"], [1, "doc-upload-label"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["class", "doc-empty-state", 4, "ngIf"], ["class", "doc-upload-row", 4, "ngFor", "ngForOf"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [4, "ngIf"], [1, "form-error"], [3, "value"], [2, "margin-bottom", "16px"], ["class", "loading-container", "style", "padding:16px", 4, "ngIf"], ["class", "doc-empty-state", "style", "padding:12px 0", 4, "ngIf"], ["class", "doc-viewer-grid", 4, "ngIf"], [1, "loading-container", 2, "padding", "16px"], ["diameter", "24"], [1, "doc-empty-state", 2, "padding", "12px 0"], [1, "doc-viewer-grid"], ["class", "doc-viewer-card", 4, "ngFor", "ngForOf"], [1, "doc-viewer-card"], [1, "doc-viewer-header"], [1, "doc-viewer-info"], [1, "doc-viewer-images"], ["class", "doc-viewer-img-wrap", 3, "click", 4, "ngIf"], [1, "doc-viewer-img-wrap", 3, "click"], ["alt", "Front", 3, "src"], [1, "doc-img-label"], ["alt", "Back", 3, "src"], [1, "doc-empty-state"], [1, "doc-upload-row"], [1, "doc-upload-row-header"], [1, "doc-row-number"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove", 3, "click"], [3, "ngModelChange", "selectionChange", "ngModel"], [1, "doc-file-row"], [1, "doc-file-item"], [1, "file-upload-btn"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["class", "doc-preview-thumb", 3, "src", 4, "ngIf"], ["class", "doc-file-name", 4, "ngIf"], ["class", "doc-file-item", 4, "ngIf"], [1, "doc-preview-thumb", 3, "src"], [1, "doc-file-name"], ["diameter", "18", 1, "inline-spinner"], ["diameter", "30"], [1, "overlay", "image-overlay", 3, "click"], [1, "image-popup"], ["mat-icon-button", "", 1, "image-popup-close", 3, "click"], ["alt", "Document Image", 1, "image-popup-img", 3, "src"]], template: function CustomerRegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "h2");
        \u0275\u0275text(2, "Customer Registration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function CustomerRegisterComponent_Template_button_click_4_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function CustomerRegisterComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 4);
        \u0275\u0275listener("click", function CustomerRegisterComponent_Template_button_click_12_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275elementStart(13, "mat-icon");
        \u0275\u0275text(14, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Register Customer ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, CustomerRegisterComponent_div_16_Template, 2, 0, "div", 5)(17, CustomerRegisterComponent_mat_card_17_Template, 31, 10, "mat-card", 6)(18, CustomerRegisterComponent_div_18_Template, 1, 0, "div", 7)(19, CustomerRegisterComponent_div_19_Template, 84, 19, "div", 8)(20, CustomerRegisterComponent_div_20_Template, 1, 0, "div", 7)(21, CustomerRegisterComponent_div_21_Template, 97, 26, "div", 9)(22, CustomerRegisterComponent_div_22_Template, 1, 0, "div", 7)(23, CustomerRegisterComponent_div_23_Template, 10, 4, "div", 9)(24, CustomerRegisterComponent_div_24_Template, 1, 0, "div", 10)(25, CustomerRegisterComponent_div_25_Template, 5, 1, "div", 11);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
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
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDocViewer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDocViewer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showImagePopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showImagePopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatChipsModule, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatSuffix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner, MatTabsModule, MatTab, MatTabGroup, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatPaginatorModule, MatPaginator, SearchableSelectDirective], styles: ["\n\n.tab-content[_ngcontent-%COMP%] {\n  padding: 12px 0;\n}\n.doc-upload-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.doc-upload-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.doc-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n  justify-content: center;\n}\n.doc-empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.doc-upload-row[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 14px;\n  margin-bottom: 12px;\n}\n.doc-upload-row-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.doc-row-number[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.doc-file-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-top: 8px;\n}\n.doc-file-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.file-upload-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #1a56db;\n  color: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background 0.15s;\n}\n.file-upload-btn[_ngcontent-%COMP%]:hover {\n  background: #1e429f;\n}\n.file-upload-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.doc-preview-thumb[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n.doc-file-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.doc-viewer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 14px;\n  padding: 8px 0;\n}\n.doc-viewer-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 14px;\n  background: #f8fafc;\n}\n.doc-viewer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.doc-viewer-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.doc-viewer-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 10px;\n}\n.doc-viewer-images[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.doc-viewer-img-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n}\n.doc-viewer-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 6px;\n  border: 1px solid #d1d5db;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.doc-viewer-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.doc-img-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.image-overlay[_ngcontent-%COMP%] {\n  z-index: 10002;\n}\n.image-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10003;\n  background: #fff;\n  border-radius: 10px;\n  padding: 12px;\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);\n  max-width: 90vw;\n  max-height: 90vh;\n}\n.image-popup-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.5) !important;\n  color: #fff !important;\n}\n.image-popup-img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 80vw;\n  max-height: 80vh;\n  border-radius: 6px;\n}\n.dark-mode[_nghost-%COMP%]   .doc-upload-row[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .doc-upload-row[_ngcontent-%COMP%] {\n  background: #334155;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .doc-row-number[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .doc-row-number[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .doc-upload-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .doc-upload-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .doc-empty-state[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .doc-empty-state[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .doc-viewer-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .doc-viewer-card[_ngcontent-%COMP%] {\n  background: #334155;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .doc-viewer-info[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .doc-viewer-info[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .doc-img-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .doc-img-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .image-popup[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .image-popup[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n/*# sourceMappingURL=customer-register.component.css.map */"] });
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
      MatPaginatorModule,
      DatePipe,
      SearchableSelectDirective
    ], providers: [provideNativeDateAdapter()], template: `<!-- Page Header -->
<div class="page-header">
  <h2>Customer Registration</h2>
  <div class="page-header-actions">
    <button mat-stroked-button (click)="exportData('excel')">
      <mat-icon>download</mat-icon> Excel
    </button>
    <button mat-stroked-button (click)="exportData('csv')">
      <mat-icon>download</mat-icon> CSV
    </button>
    <button mat-raised-button color="primary" (click)="openCreatePopup()">
      <mat-icon>person_add</mat-icon> Register Customer
    </button>
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
    <input matInput placeholder="Search customers..." [(ngModel)]="searchString" (ngModelChange)="searchDebounce.next($event)" />
  </mat-form-field>

  <table mat-table [dataSource]="customers" class="data-table">
    <!-- Full Name -->
    <ng-container matColumnDef="fullName">
      <th mat-header-cell *matHeaderCellDef>Full Name</th>
      <td mat-cell *matCellDef="let c">{{ c.fullName }}</td>
    </ng-container>

    <!-- Email -->
    <ng-container matColumnDef="email">
      <th mat-header-cell *matHeaderCellDef>Email</th>
      <td mat-cell *matCellDef="let c">{{ c.email || '-' }}</td>
    </ng-container>

    <!-- Phone -->
    <ng-container matColumnDef="phone">
      <th mat-header-cell *matHeaderCellDef>Phone</th>
      <td mat-cell *matCellDef="let c">{{ c.phone || '-' }}</td>
    </ng-container>

    <!-- Country -->
    <ng-container matColumnDef="country">
      <th mat-header-cell *matHeaderCellDef>Country</th>
      <td mat-cell *matCellDef="let c">{{ c.country }}</td>
    </ng-container>

    <!-- KYC Status -->
    <ng-container matColumnDef="kyc">
      <th mat-header-cell *matHeaderCellDef>KYC Status</th>
      <td mat-cell *matCellDef="let c">
        <span class="chip" [ngClass]="c.isKycVerified ? 'chip-success' : 'chip-warning'">
          {{ c.isKycVerified ? 'Verified' : 'Pending' }}
        </span>
      </td>
    </ng-container>

    <!-- Created -->
    <ng-container matColumnDef="createdAt">
      <th mat-header-cell *matHeaderCellDef>Created</th>
      <td mat-cell *matCellDef="let c">{{ c.createdAt | date:'yyyy-MM-dd' }}</td>
    </ng-container>

    <!-- Actions -->
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let c">
        <button mat-icon-button matTooltip="View Details" (click)="viewDetail(c)">
          <mat-icon color="primary">visibility</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Documents" (click)="viewDocuments(c)">
          <mat-icon color="accent">folder_open</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Edit" (click)="openEditPopup(c)">
          <mat-icon color="primary">edit</mat-icon>
        </button>
        <button *ngIf="!c.isKycVerified" mat-icon-button matTooltip="Approve KYC" (click)="approveKyc(c)">
          <mat-icon class="text-success">check_circle</mat-icon>
        </button>
        <button *ngIf="c.isKycVerified" mat-icon-button matTooltip="Reject KYC" (click)="rejectKyc(c)">
          <mat-icon class="text-error">cancel</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Delete" (click)="deleteCustomer(c)">
          <mat-icon color="warn">delete</mat-icon>
        </button>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  <mat-paginator [length]="totalCount" [pageSize]="pageSize" [pageIndex]="pageIndex"
    [pageSizeOptions]="[10, 20, 50, 100]" (page)="onPageChange($event)" showFirstLastButtons>
  </mat-paginator>

  <div *ngIf="!customers.length && !loading" class="empty-state">
    No customers found.
  </div>
</mat-card>

<!-- ============================================================ -->
<!-- Detail Popup                                                  -->
<!-- ============================================================ -->
<div *ngIf="showDetail && detailCustomer" class="overlay" (click)="closeDetail()"></div>
<div *ngIf="showDetail && detailCustomer" class="popup popup-md">
  <div class="popup-header">
    <h3>Customer Details</h3>
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
<!-- Create / Edit Customer Popup                                  -->
<!-- ============================================================ -->
<div *ngIf="showFormPopup" class="overlay" (click)="closeFormPopup()"></div>
<div *ngIf="showFormPopup" class="popup popup-lg">
  <div class="popup-header">
    <h3>{{ isEditing ? 'Edit Customer' : 'Register New Customer' }}</h3>
    <button mat-icon-button (click)="closeFormPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="formError" class="form-error">{{ formError }}</div>

  <mat-tab-group animationDuration="200ms">
    <!-- Tab 1: Personal -->
    <mat-tab label="Personal">
      <div class="tab-content">
        <div class="form-grid">
          <mat-form-field appearance="outline">
            <mat-label>Full Name *</mat-label>
            <input matInput [(ngModel)]="form.fullName" />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Date of Birth</mat-label>
            <input matInput [matDatepicker]="dobPicker" [(ngModel)]="form.dateOfBirth" readonly placeholder="Select date" />
            <mat-datepicker-toggle matSuffix [for]="dobPicker"></mat-datepicker-toggle>
            <mat-datepicker #dobPicker></mat-datepicker>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Gender</mat-label>
            <mat-select [(ngModel)]="form.gender">
              <mat-option value="Male">Male</mat-option>
              <mat-option value="Female">Female</mat-option>
              <mat-option value="Other">Other</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Nationality</mat-label>
            <input matInput [(ngModel)]="form.nationality" />
          </mat-form-field>
        </div>
      </div>
    </mat-tab>

    <!-- Tab 2: Contact -->
    <mat-tab label="Contact">
      <div class="tab-content">
        <div class="form-grid">
          <mat-form-field appearance="outline">
            <mat-label>Email</mat-label>
            <input matInput type="email" [(ngModel)]="form.email" />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Phone</mat-label>
            <input matInput [(ngModel)]="form.phone" />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Country *</mat-label>
            <mat-select searchable [(ngModel)]="form.country">
              <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Contact Country</mat-label>
            <mat-select [(ngModel)]="form.contactCountry">
              <mat-option value="">-- None --</mat-option>
              <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>City</mat-label>
            <input matInput [(ngModel)]="form.city" />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>State</mat-label>
            <input matInput [(ngModel)]="form.state" />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Postal Code</mat-label>
            <input matInput [(ngModel)]="form.postalCode" />
          </mat-form-field>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Address</mat-label>
            <input matInput [(ngModel)]="form.address" />
          </mat-form-field>
        </div>
      </div>
    </mat-tab>

    <!-- Tab 3: Documents -->
    <mat-tab label="Documents">
      <div class="tab-content">
        <!-- Existing Documents (shown when editing) -->
        <div *ngIf="isEditing" style="margin-bottom:16px">
          <div class="doc-upload-header">
            <span class="doc-upload-label">Existing Documents</span>
          </div>
          <div *ngIf="loadingExistingDocs" class="loading-container" style="padding:16px">
            <mat-spinner diameter="24"></mat-spinner>
          </div>
          <div *ngIf="!loadingExistingDocs && existingDocs.length === 0" class="doc-empty-state" style="padding:12px 0">
            <mat-icon>folder_off</mat-icon>
            <span>No documents uploaded yet.</span>
          </div>
          <div *ngIf="!loadingExistingDocs && existingDocs.length > 0" class="doc-viewer-grid">
            <div *ngFor="let doc of existingDocs" class="doc-viewer-card">
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

        <!-- Upload New Documents -->
        <div class="doc-upload-header">
          <span class="doc-upload-label">{{ isEditing ? 'Upload Additional Documents' : 'Upload identification documents' }}</span>
          <button mat-stroked-button color="primary" (click)="addDocumentRow()">
            <mat-icon>add</mat-icon> Add Document
          </button>
        </div>

        <div *ngIf="documentUploads.length === 0" class="doc-empty-state">
          <mat-icon>upload_file</mat-icon>
          <span>Click "Add Document" to upload {{ isEditing ? 'additional' : 'identification' }} documents.</span>
        </div>

        <div *ngFor="let doc of documentUploads; let i = index" class="doc-upload-row">
          <div class="doc-upload-row-header">
            <span class="doc-row-number">Document {{ i + 1 }}</span>
            <button mat-icon-button color="warn" matTooltip="Remove" (click)="removeDocumentRow(i)">
              <mat-icon>delete</mat-icon>
            </button>
          </div>

          <div class="form-grid">
            <mat-form-field appearance="outline">
              <mat-label>Document Type</mat-label>
              <mat-select [(ngModel)]="doc.documentType" (selectionChange)="onDocTypeChange(doc)">
                <mat-option *ngFor="let dt of documentTypeConfigs" [value]="dt.name">{{ dt.name }}</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Document Number</mat-label>
              <input matInput [(ngModel)]="doc.documentNumber" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Issuing Country</mat-label>
              <mat-select [(ngModel)]="doc.issuingCountry" searchable>
                <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
              </mat-select>
            </mat-form-field>
          </div>

          <div class="doc-file-row">
            <div class="doc-file-item">
              <label class="file-upload-btn">
                <mat-icon>image</mat-icon> Front Side
                <input type="file" accept="image/*" (change)="onFileSelected(doc, 'front', $event)" hidden />
              </label>
              <img *ngIf="doc.frontPreview" [src]="doc.frontPreview" class="doc-preview-thumb" />
              <span *ngIf="doc.frontImage" class="doc-file-name">{{ doc.frontImage.name }}</span>
            </div>
            <div *ngIf="doc.requiredSides >= 2" class="doc-file-item">
              <label class="file-upload-btn">
                <mat-icon>image</mat-icon> Back Side
                <input type="file" accept="image/*" (change)="onFileSelected(doc, 'back', $event)" hidden />
              </label>
              <img *ngIf="doc.backPreview" [src]="doc.backPreview" class="doc-preview-thumb" />
              <span *ngIf="doc.backImage" class="doc-file-name">{{ doc.backImage.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </mat-tab>
  </mat-tab-group>

  <div class="popup-actions">
    <button mat-button (click)="closeFormPopup()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="saveCustomer()" [disabled]="saving || uploadingDocs">
      <mat-spinner *ngIf="saving || uploadingDocs" diameter="18" class="inline-spinner"></mat-spinner>
      <mat-icon *ngIf="!saving && !uploadingDocs">save</mat-icon>
      {{ uploadingDocs ? 'Uploading Documents...' : (isEditing ? 'Save Changes' : 'Register Customer') }}
    </button>
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

<!-- ============================================================ -->
<!-- Image Full View Popup                                         -->
<!-- ============================================================ -->
<div *ngIf="showImagePopup" class="overlay image-overlay" (click)="closeImagePopup()"></div>
<div *ngIf="showImagePopup" class="image-popup">
  <button mat-icon-button class="image-popup-close" (click)="closeImagePopup()">
    <mat-icon>close</mat-icon>
  </button>
  <img [src]="docImageUrl" alt="Document Image" class="image-popup-img" />
</div>
`, styles: ["/* src/app/pages/admin/customer-register/customer-register.component.scss */\n.tab-content {\n  padding: 12px 0;\n}\n.doc-upload-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.doc-upload-label {\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.doc-empty-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n  justify-content: center;\n}\n.doc-empty-state mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.doc-upload-row {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 14px;\n  margin-bottom: 12px;\n}\n.doc-upload-row-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.doc-row-number {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.doc-file-row {\n  display: flex;\n  gap: 16px;\n  margin-top: 8px;\n}\n.doc-file-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.file-upload-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #1a56db;\n  color: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background 0.15s;\n}\n.file-upload-btn:hover {\n  background: #1e429f;\n}\n.file-upload-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.doc-preview-thumb {\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n.doc-file-name {\n  font-size: 12px;\n  color: #6b7280;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.doc-viewer-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 14px;\n  padding: 8px 0;\n}\n.doc-viewer-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 14px;\n  background: #f8fafc;\n}\n.doc-viewer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.doc-viewer-header strong {\n  font-size: 14px;\n}\n.doc-viewer-info {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 10px;\n}\n.doc-viewer-images {\n  display: flex;\n  gap: 12px;\n}\n.doc-viewer-img-wrap {\n  text-align: center;\n  cursor: pointer;\n}\n.doc-viewer-img-wrap img {\n  width: 120px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 6px;\n  border: 1px solid #d1d5db;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.doc-viewer-img-wrap img:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.doc-img-label {\n  display: block;\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.image-overlay {\n  z-index: 10002;\n}\n.image-popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10003;\n  background: #fff;\n  border-radius: 10px;\n  padding: 12px;\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);\n  max-width: 90vw;\n  max-height: 90vh;\n}\n.image-popup-close {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.5) !important;\n  color: #fff !important;\n}\n.image-popup-img {\n  display: block;\n  max-width: 80vw;\n  max-height: 80vh;\n  border-radius: 6px;\n}\n:host-context(.dark-mode) .doc-upload-row {\n  background: #334155;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark-mode) .doc-row-number {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .doc-upload-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .doc-empty-state {\n  color: #64748b;\n}\n:host-context(.dark-mode) .doc-viewer-card {\n  background: #334155;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark-mode) .doc-viewer-info {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .doc-img-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .image-popup {\n  background: #1e293b;\n}\n/*# sourceMappingURL=customer-register.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerRegisterComponent, { className: "CustomerRegisterComponent", filePath: "src/app/pages/admin/customer-register/customer-register.component.ts", lineNumber: 74 });
})();
export {
  CustomerRegisterComponent
};
//# sourceMappingURL=chunk-5XCGNAJK.js.map
