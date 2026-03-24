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
import "./chunk-JURKDGMK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-AD4S7CLJ.js";
import {
  MatOption
} from "./chunk-AGEK5EEG.js";
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
  MatPrefix
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
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-DBW47J2B.js";
import {
  Component,
  Subject,
  debounceTime,
  setClassMetadata,
  takeUntil,
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

// src/app/pages/admin/receivers/receivers.component.ts
var _c0 = () => [10, 20, 50, 100];
function ReceiversComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_21_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.fullName);
  }
}
function ReceiversComponent_mat_card_21_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Customer Name");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_21_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.customerName);
  }
}
function ReceiversComponent_mat_card_21_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Receiver Name");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_21_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.fullName);
  }
}
function ReceiversComponent_mat_card_21_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_21_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.phone);
  }
}
function ReceiversComponent_mat_card_21_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_21_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.country);
  }
}
function ReceiversComponent_mat_card_21_th_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Bank Name");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_21_td_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r8.bankName || "-");
  }
}
function ReceiversComponent_mat_card_21_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Account");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_21_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r9.accountNumber || "-");
  }
}
function ReceiversComponent_mat_card_21_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_21_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", r_r10.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r10.isActive ? "Active" : "Inactive", " ");
  }
}
function ReceiversComponent_mat_card_21_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_21_td_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 37)(1, "button", 39);
    \u0275\u0275listener("click", function ReceiversComponent_mat_card_21_td_37_Template_button_click_1_listener() {
      const r_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditPopup(r_r12));
    });
    \u0275\u0275elementStart(2, "mat-icon", 40);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function ReceiversComponent_mat_card_21_td_37_Template_button_click_4_listener() {
      const r_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteReceiver(r_r12));
    });
    \u0275\u0275elementStart(5, "mat-icon", 42);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function ReceiversComponent_mat_card_21_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 43);
  }
}
function ReceiversComponent_mat_card_21_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 44);
  }
}
function ReceiversComponent_mat_card_21_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, " No receivers found. ");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 12)(1, "div", 13)(2, "mat-form-field", 14)(3, "mat-label");
    \u0275\u0275text(4, "Filter by Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_mat_card_21_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterCustomerId, $event) || (ctx_r1.filterCustomerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceiversComponent_mat_card_21_Template_mat_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByCustomer());
    });
    \u0275\u0275elementStart(6, "mat-option", 16);
    \u0275\u0275text(7, "All Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ReceiversComponent_mat_card_21_mat_option_8_Template, 2, 2, "mat-option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 18)(10, "mat-icon", 19);
    \u0275\u0275text(11, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_mat_card_21_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceiversComponent_mat_card_21_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchDebounce.next($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "table", 21);
    \u0275\u0275elementContainerStart(14, 22);
    \u0275\u0275template(15, ReceiversComponent_mat_card_21_th_15_Template, 2, 0, "th", 23)(16, ReceiversComponent_mat_card_21_td_16_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 25);
    \u0275\u0275template(18, ReceiversComponent_mat_card_21_th_18_Template, 2, 0, "th", 23)(19, ReceiversComponent_mat_card_21_td_19_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 26);
    \u0275\u0275template(21, ReceiversComponent_mat_card_21_th_21_Template, 2, 0, "th", 23)(22, ReceiversComponent_mat_card_21_td_22_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(23, 27);
    \u0275\u0275template(24, ReceiversComponent_mat_card_21_th_24_Template, 2, 0, "th", 23)(25, ReceiversComponent_mat_card_21_td_25_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(26, 28);
    \u0275\u0275template(27, ReceiversComponent_mat_card_21_th_27_Template, 2, 0, "th", 23)(28, ReceiversComponent_mat_card_21_td_28_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(29, 29);
    \u0275\u0275template(30, ReceiversComponent_mat_card_21_th_30_Template, 2, 0, "th", 23)(31, ReceiversComponent_mat_card_21_td_31_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(32, 30);
    \u0275\u0275template(33, ReceiversComponent_mat_card_21_th_33_Template, 2, 0, "th", 23)(34, ReceiversComponent_mat_card_21_td_34_Template, 3, 2, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(35, 31);
    \u0275\u0275template(36, ReceiversComponent_mat_card_21_th_36_Template, 2, 0, "th", 23)(37, ReceiversComponent_mat_card_21_td_37_Template, 7, 0, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(38, ReceiversComponent_mat_card_21_tr_38_Template, 1, 0, "tr", 32)(39, ReceiversComponent_mat_card_21_tr_39_Template, 1, 0, "tr", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, ReceiversComponent_mat_card_21_div_40_Template, 2, 0, "div", 34);
    \u0275\u0275elementStart(41, "mat-paginator", 35);
    \u0275\u0275listener("page", function ReceiversComponent_mat_card_21_Template_mat_paginator_page_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterCustomerId);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.customers);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.receivers);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.receivers.length && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r1.totalCount)("pageSize", ctx_r1.pageSize)("pageIndex", ctx_r1.pageIndex)("pageSizeOptions", \u0275\u0275pureFunction0(12, _c0));
  }
}
function ReceiversComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function ReceiversComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSearchPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_23_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, " No receivers match your search. ");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_23_div_16_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
  }
}
function ReceiversComponent_div_23_div_16_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r16.bankName);
  }
}
function ReceiversComponent_div_23_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function ReceiversComponent_div_23_div_16_div_1_Template_div_click_0_listener() {
      const r_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectSearchResult(r_r16));
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "span", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 60)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "span", 61);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ReceiversComponent_div_23_div_16_div_1_span_12_Template, 1, 0, "span", 62)(13, ReceiversComponent_div_23_div_16_div_1_span_13_Template, 2, 1, "span", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r16 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r16.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r16.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r16.customerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r16.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r16.bankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r16.bankName);
  }
}
function ReceiversComponent_div_23_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, ReceiversComponent_div_23_div_16_div_1_Template, 14, 6, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.searchResults);
  }
}
function ReceiversComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "h3")(3, "mat-icon", 49);
    \u0275\u0275text(4, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Search Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 50);
    \u0275\u0275listener("click", function ReceiversComponent_div_23_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSearchPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-form-field", 51)(10, "mat-icon", 19);
    \u0275\u0275text(11, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-label");
    \u0275\u0275text(13, "Search by name or mobile number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_23_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceiversComponent_div_23_Template_input_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.performSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ReceiversComponent_div_23_div_15_Template, 2, 0, "div", 34)(16, ReceiversComponent_div_23_div_16_Template, 2, 1, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQuery && !ctx_r1.searchResults.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchResults.length);
  }
}
function ReceiversComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function ReceiversComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function ReceiversComponent_div_25_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275property("value", c_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r19.fullName);
  }
}
function ReceiversComponent_div_25_mat_spinner_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 75);
  }
}
function ReceiversComponent_div_25_mat_icon_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 48)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 50);
    \u0275\u0275listener("click", function ReceiversComponent_div_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, ReceiversComponent_div_25_div_7_Template, 2, 1, "div", 65);
    \u0275\u0275elementStart(8, "div", 66)(9, "mat-form-field", 51)(10, "mat-label");
    \u0275\u0275text(11, "Customer *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.customerId, $event) || (ctx_r1.form.customerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(13, ReceiversComponent_div_25_mat_option_13_Template, 2, 2, "mat-option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 67)(15, "mat-label");
    \u0275\u0275text(16, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.fullName, $event) || (ctx_r1.form.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 67)(19, "mat-label");
    \u0275\u0275text(20, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-form-field", 67)(23, "mat-label");
    \u0275\u0275text(24, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 67)(27, "mat-label");
    \u0275\u0275text(28, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.country, $event) || (ctx_r1.form.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "mat-form-field", 67)(31, "mat-label");
    \u0275\u0275text(32, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.city, $event) || (ctx_r1.form.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "mat-form-field", 67)(35, "mat-label");
    \u0275\u0275text(36, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.bankName, $event) || (ctx_r1.form.bankName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "mat-form-field", 67)(39, "mat-label");
    \u0275\u0275text(40, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.accountNumber, $event) || (ctx_r1.form.accountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "mat-form-field", 51)(43, "mat-label");
    \u0275\u0275text(44, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_25_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.relationship, $event) || (ctx_r1.form.relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 70)(47, "button", 71);
    \u0275\u0275listener("click", function ReceiversComponent_div_25_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(48, "mat-icon");
    \u0275\u0275text(49, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 72);
    \u0275\u0275listener("click", function ReceiversComponent_div_25_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveReceiver());
    });
    \u0275\u0275template(52, ReceiversComponent_div_25_mat_spinner_52_Template, 1, 0, "mat-spinner", 73)(53, ReceiversComponent_div_25_mat_icon_53_Template, 2, 0, "mat-icon", 63);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Receiver" : "Add New Receiver");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.customerId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.customers);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.country);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.bankName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.accountNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.relationship);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Save Changes" : "Add Receiver", " ");
  }
}
function emptyForm() {
  return {
    customerId: null,
    fullName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    bankName: "",
    accountNumber: "",
    relationship: ""
  };
}
var ReceiversComponent = class _ReceiversComponent {
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.receivers = [];
    this.customers = [];
    this.displayedColumns = ["customerName", "fullName", "phone", "country", "bankName", "accountNumber", "status", "actions"];
    this.searchString = "";
    this.loading = true;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
    this.filterCustomerId = null;
    this.showFormPopup = false;
    this.isEditing = false;
    this.editingId = 0;
    this.saving = false;
    this.formError = "";
    this.form = emptyForm();
    this.showSearchPopup = false;
    this.searchQuery = "";
    this.searchResults = [];
    this.searching = false;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.searchString = s;
      this.pageIndex = 0;
      this.loadReceivers();
    });
    this.loadCustomers();
    this.loadReceivers();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadReceivers() {
    this.loading = true;
    this.api.getReceiversPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.receivers = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.receivers = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load receivers.");
        }
        this.loading = false;
      },
      error: () => {
        this.receivers = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  loadCustomers() {
    this.api.getCustomers().subscribe((res) => {
      if (res?.success && res.data) {
        this.customers = res.data;
      }
    });
  }
  filterByCustomer() {
    this.pageIndex = 0;
    this.loadReceivers();
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadReceivers();
  }
  exportData(format) {
    this.exportService.export("api/admin/receivers/export", { search: this.searchString }, format);
  }
  // ---------------------------------------------------------------------------
  // Search Popup
  // ---------------------------------------------------------------------------
  openSearchPopup() {
    this.searchQuery = "";
    this.searchResults = [];
    this.showSearchPopup = true;
  }
  closeSearchPopup() {
    this.showSearchPopup = false;
  }
  performSearch() {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) {
      this.searchResults = [];
      return;
    }
    this.searching = true;
    this.searchResults = this.receivers.filter((r) => r.fullName.toLowerCase().includes(q) || r.phone.toLowerCase().includes(q) || r.customerName.toLowerCase().includes(q));
    this.searching = false;
  }
  selectSearchResult(receiver) {
    this.closeSearchPopup();
    this.openEditPopup(receiver);
  }
  // ---------------------------------------------------------------------------
  // Create / Edit
  // ---------------------------------------------------------------------------
  openCreatePopup() {
    this.form = emptyForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = "";
    this.showFormPopup = true;
  }
  openEditPopup(receiver) {
    this.isEditing = true;
    this.editingId = receiver.id;
    this.form = {
      customerId: receiver.customerId,
      fullName: receiver.fullName,
      phone: receiver.phone,
      email: receiver.email || "",
      country: receiver.country,
      city: receiver.city || "",
      bankName: receiver.bankName || "",
      accountNumber: receiver.accountNumber || "",
      relationship: receiver.relationship || ""
    };
    this.formError = "";
    this.showFormPopup = true;
  }
  closeFormPopup() {
    this.showFormPopup = false;
  }
  saveReceiver() {
    this.formError = "";
    const f = this.form;
    if (!f.customerId) {
      this.formError = "Please select a customer.";
      return;
    }
    if (!f.fullName || !f.phone || !f.country) {
      this.formError = "Full Name, Phone and Country are required.";
      return;
    }
    this.saving = true;
    const dto = {
      customerId: f.customerId,
      fullName: f.fullName,
      phone: f.phone,
      email: f.email || null,
      country: f.country,
      city: f.city || null,
      bankName: f.bankName || null,
      accountNumber: f.accountNumber || null,
      relationship: f.relationship || null
    };
    const obs = this.isEditing ? this.api.updateReceiver(this.editingId, dto) : this.api.createReceiver(dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.isEditing ? "Receiver updated." : "Receiver created.");
          this.showFormPopup = false;
          this.loadReceivers();
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
  // Delete
  // ---------------------------------------------------------------------------
  deleteReceiver(receiver) {
    this.api.deleteReceiver(receiver.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success(`Receiver '${receiver.fullName}' deleted.`);
        this.loadReceivers();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function ReceiversComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReceiversComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceiversComponent, selectors: [["app-receivers"]], decls: 26, vars: 6, consts: [[1, "page-header"], [1, "header-actions"], ["mat-stroked-button", "", 3, "click"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], [1, "filter-row"], ["appearance", "outline", 1, "filter-field"], ["searchable", "", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search receivers...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "customerName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fullName"], ["matColumnDef", "phone"], ["matColumnDef", "country"], ["matColumnDef", "bankName"], ["matColumnDef", "accountNumber"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], [1, "header-icon"], ["mat-icon-button", "", 3, "click"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "placeholder", "Enter name or phone...", 3, "ngModelChange", "ngModel"], ["class", "search-results", 4, "ngIf"], [1, "search-results"], ["class", "search-result-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "search-result-item", 3, "click"], [1, "result-main"], [1, "result-name"], [1, "result-phone"], [1, "result-sub"], [1, "result-dot"], ["class", "result-dot", 4, "ngIf"], [4, "ngIf"], [1, "popup", "popup-lg"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-grid"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "email", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], ["diameter", "18", 1, "inline-spinner"]], template: function ReceiversComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Receiver Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
        \u0275\u0275listener("click", function ReceiversComponent_Template_button_click_4_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 2);
        \u0275\u0275listener("click", function ReceiversComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 3);
        \u0275\u0275listener("click", function ReceiversComponent_Template_button_click_12_listener() {
          return ctx.openSearchPopup();
        });
        \u0275\u0275elementStart(13, "mat-icon");
        \u0275\u0275text(14, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Search Receiver ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 4);
        \u0275\u0275listener("click", function ReceiversComponent_Template_button_click_16_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275elementStart(17, "mat-icon");
        \u0275\u0275text(18, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " Add Receiver ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(20, ReceiversComponent_div_20_Template, 2, 0, "div", 5)(21, ReceiversComponent_mat_card_21_Template, 42, 13, "mat-card", 6)(22, ReceiversComponent_div_22_Template, 1, 0, "div", 7)(23, ReceiversComponent_div_23_Template, 17, 3, "div", 8)(24, ReceiversComponent_div_24_Template, 1, 0, "div", 7)(25, ReceiversComponent_div_25_Template, 55, 16, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showSearchPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showSearchPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatChipsModule, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner, MatPaginatorModule, MatPaginator, SearchableSelectDirective], styles: ['\n\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.filter-field[_ngcontent-%COMP%] {\n  width: 280px;\n}\n.search-results[_ngcontent-%COMP%] {\n  max-height: 360px;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.search-result-item[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  transition: background 0.15s ease;\n}\n.search-result-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.search-result-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.result-main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.result-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: #1e293b;\n}\n.result-phone[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  font-family: "Roboto Mono", monospace;\n}\n.result-sub[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.result-dot[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .search-results[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .search-result-item[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .search-result-item[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_nghost-%COMP%]   .search-result-item[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .search-result-item[_ngcontent-%COMP%]:hover {\n  background: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .result-name[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .result-name[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .result-phone[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .result-phone[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .result-sub[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .result-sub[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .result-dot[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .result-dot[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .filter-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=receivers.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReceiversComponent, [{
    type: Component,
    args: [{ selector: "app-receivers", standalone: true, imports: [
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
      MatPaginatorModule,
      SearchableSelectDirective
    ], template: `<!-- Page Header -->
<div class="page-header">
  <h2>Receiver Management</h2>
  <div class="header-actions">
    <button mat-stroked-button (click)="exportData('excel')">
      <mat-icon>download</mat-icon> Excel
    </button>
    <button mat-stroked-button (click)="exportData('csv')">
      <mat-icon>download</mat-icon> CSV
    </button>
    <button mat-raised-button (click)="openSearchPopup()">
      <mat-icon>search</mat-icon> Search Receiver
    </button>
    <button mat-raised-button color="primary" (click)="openCreatePopup()">
      <mat-icon>person_add</mat-icon> Add Receiver
    </button>
  </div>
</div>

<!-- Loading -->
<div *ngIf="loading" class="loading-container">
  <mat-spinner diameter="40"></mat-spinner>
</div>

<!-- Search + Filter + Table -->
<mat-card *ngIf="!loading" class="table-card">
  <div class="filter-row">
    <mat-form-field appearance="outline" class="filter-field">
      <mat-label>Filter by Customer</mat-label>
      <mat-select searchable [(ngModel)]="filterCustomerId" (ngModelChange)="filterByCustomer()">
        <mat-option [value]="null">All Customers</mat-option>
        <mat-option *ngFor="let c of customers" [value]="c.id">{{ c.fullName }}</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field appearance="outline" class="search-field">
      <mat-icon matPrefix>search</mat-icon>
      <input matInput placeholder="Search receivers..." [(ngModel)]="searchString" (ngModelChange)="searchDebounce.next($event)" />
    </mat-form-field>
  </div>

  <table mat-table [dataSource]="receivers" class="data-table">
    <!-- Customer Name -->
    <ng-container matColumnDef="customerName">
      <th mat-header-cell *matHeaderCellDef>Customer Name</th>
      <td mat-cell *matCellDef="let r">{{ r.customerName }}</td>
    </ng-container>

    <!-- Receiver Name -->
    <ng-container matColumnDef="fullName">
      <th mat-header-cell *matHeaderCellDef>Receiver Name</th>
      <td mat-cell *matCellDef="let r">{{ r.fullName }}</td>
    </ng-container>

    <!-- Phone -->
    <ng-container matColumnDef="phone">
      <th mat-header-cell *matHeaderCellDef>Phone</th>
      <td mat-cell *matCellDef="let r">{{ r.phone }}</td>
    </ng-container>

    <!-- Country -->
    <ng-container matColumnDef="country">
      <th mat-header-cell *matHeaderCellDef>Country</th>
      <td mat-cell *matCellDef="let r">{{ r.country }}</td>
    </ng-container>

    <!-- Bank Name -->
    <ng-container matColumnDef="bankName">
      <th mat-header-cell *matHeaderCellDef>Bank Name</th>
      <td mat-cell *matCellDef="let r">{{ r.bankName || '-' }}</td>
    </ng-container>

    <!-- Account Number -->
    <ng-container matColumnDef="accountNumber">
      <th mat-header-cell *matHeaderCellDef>Account</th>
      <td mat-cell *matCellDef="let r">{{ r.accountNumber || '-' }}</td>
    </ng-container>

    <!-- Status -->
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef>Status</th>
      <td mat-cell *matCellDef="let r">
        <span class="chip" [ngClass]="r.isActive ? 'chip-success' : 'chip-default'">
          {{ r.isActive ? 'Active' : 'Inactive' }}
        </span>
      </td>
    </ng-container>

    <!-- Actions -->
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let r">
        <button mat-icon-button matTooltip="Edit" (click)="openEditPopup(r)">
          <mat-icon color="primary">edit</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Delete" (click)="deleteReceiver(r)">
          <mat-icon color="warn">delete</mat-icon>
        </button>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  <div *ngIf="!receivers.length && !loading" class="empty-state">
    No receivers found.
  </div>

  <mat-paginator [length]="totalCount" [pageSize]="pageSize" [pageIndex]="pageIndex"
    [pageSizeOptions]="[10, 20, 50, 100]" (page)="onPageChange($event)" showFirstLastButtons>
  </mat-paginator>
</mat-card>

<!-- ============================================================ -->
<!-- Search Receiver Popup                                         -->
<!-- ============================================================ -->
<div *ngIf="showSearchPopup" class="overlay" (click)="closeSearchPopup()"></div>
<div *ngIf="showSearchPopup" class="popup popup-md">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">person_search</mat-icon> Search Receiver</h3>
    <button mat-icon-button (click)="closeSearchPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <mat-form-field appearance="outline" class="full-width">
    <mat-icon matPrefix>search</mat-icon>
    <mat-label>Search by name or mobile number</mat-label>
    <input matInput [(ngModel)]="searchQuery" (ngModelChange)="performSearch()" placeholder="Enter name or phone..." />
  </mat-form-field>

  <div *ngIf="searchQuery && !searchResults.length" class="empty-state">
    No receivers match your search.
  </div>

  <div *ngIf="searchResults.length" class="search-results">
    <div class="search-result-item" *ngFor="let r of searchResults" (click)="selectSearchResult(r)">
      <div class="result-main">
        <span class="result-name">{{ r.fullName }}</span>
        <span class="result-phone">{{ r.phone }}</span>
      </div>
      <div class="result-sub">
        <span>{{ r.customerName }}</span>
        <span class="result-dot"></span>
        <span>{{ r.country }}</span>
        <span *ngIf="r.bankName" class="result-dot"></span>
        <span *ngIf="r.bankName">{{ r.bankName }}</span>
      </div>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Create / Edit Receiver Popup                                  -->
<!-- ============================================================ -->
<div *ngIf="showFormPopup" class="overlay" (click)="closeFormPopup()"></div>
<div *ngIf="showFormPopup" class="popup popup-lg">
  <div class="popup-header">
    <h3>{{ isEditing ? 'Edit Receiver' : 'Add New Receiver' }}</h3>
    <button mat-icon-button (click)="closeFormPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="formError" class="alert-banner alert-error inline-alert">{{ formError }}</div>

  <div class="form-grid">
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Customer *</mat-label>
      <mat-select searchable [(ngModel)]="form.customerId">
        <mat-option *ngFor="let c of customers" [value]="c.id">{{ c.fullName }}</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Full Name *</mat-label>
      <input matInput [(ngModel)]="form.fullName" />
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Phone *</mat-label>
      <input matInput [(ngModel)]="form.phone" />
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Email</mat-label>
      <input matInput type="email" [(ngModel)]="form.email" />
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Country *</mat-label>
      <input matInput [(ngModel)]="form.country" />
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>City</mat-label>
      <input matInput [(ngModel)]="form.city" />
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Bank Name</mat-label>
      <input matInput [(ngModel)]="form.bankName" />
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Account Number</mat-label>
      <input matInput [(ngModel)]="form.accountNumber" />
    </mat-form-field>

    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Relationship</mat-label>
      <input matInput [(ngModel)]="form.relationship" />
    </mat-form-field>
  </div>

  <div class="popup-actions">
    <button mat-button (click)="closeFormPopup()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="saveReceiver()" [disabled]="saving">
      <mat-spinner *ngIf="saving" diameter="18" class="inline-spinner"></mat-spinner>
      <mat-icon *ngIf="!saving">save</mat-icon>
      {{ isEditing ? 'Save Changes' : 'Add Receiver' }}
    </button>
  </div>
</div>
`, styles: ['/* src/app/pages/admin/receivers/receivers.component.scss */\n.filter-row {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.filter-field {\n  width: 280px;\n}\n.search-results {\n  max-height: 360px;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.search-result-item {\n  padding: 10px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  transition: background 0.15s ease;\n}\n.search-result-item:last-child {\n  border-bottom: none;\n}\n.search-result-item:hover {\n  background: #f1f5f9;\n}\n.result-main {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.result-name {\n  font-weight: 600;\n  font-size: 13px;\n  color: #1e293b;\n}\n.result-phone {\n  font-size: 13px;\n  color: #475569;\n  font-family: "Roboto Mono", monospace;\n}\n.result-sub {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.result-dot {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.3);\n}\n:host-context(.dark-mode) .search-results {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark-mode) .search-result-item {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark-mode) .search-result-item:hover {\n  background: #334155;\n}\n:host-context(.dark-mode) .result-name {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .result-phone {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .result-sub {\n  color: #64748b;\n}\n:host-context(.dark-mode) .result-dot {\n  background: rgba(255, 255, 255, 0.3);\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n  }\n  .filter-field {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=receivers.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceiversComponent, { className: "ReceiversComponent", filePath: "src/app/pages/admin/receivers/receivers.component.ts", lineNumber: 55 });
})();
export {
  ReceiversComponent
};
//# sourceMappingURL=chunk-XRO2Q6KD.js.map
