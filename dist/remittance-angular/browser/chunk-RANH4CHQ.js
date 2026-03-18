import {
  SearchableSelectDirective
} from "./chunk-SPE5Y2T4.js";
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
  NgClass,
  NgForOf,
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

// src/app/pages/admin/receivers/receivers.component.ts
function ReceiversComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_13_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
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
function ReceiversComponent_mat_card_13_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Customer Name");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_13_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.customerName);
  }
}
function ReceiversComponent_mat_card_13_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Receiver Name");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_13_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.fullName);
  }
}
function ReceiversComponent_mat_card_13_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_13_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.phone);
  }
}
function ReceiversComponent_mat_card_13_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_13_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.country);
  }
}
function ReceiversComponent_mat_card_13_th_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Bank Name");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_13_td_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r8.bankName || "-");
  }
}
function ReceiversComponent_mat_card_13_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Account");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_13_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r9.accountNumber || "-");
  }
}
function ReceiversComponent_mat_card_13_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_13_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "span", 36);
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
function ReceiversComponent_mat_card_13_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_13_td_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 35)(1, "button", 37);
    \u0275\u0275listener("click", function ReceiversComponent_mat_card_13_td_37_Template_button_click_1_listener() {
      const r_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditPopup(r_r12));
    });
    \u0275\u0275elementStart(2, "mat-icon", 38);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function ReceiversComponent_mat_card_13_td_37_Template_button_click_4_listener() {
      const r_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteReceiver(r_r12));
    });
    \u0275\u0275elementStart(5, "mat-icon", 40);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function ReceiversComponent_mat_card_13_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 41);
  }
}
function ReceiversComponent_mat_card_13_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 42);
  }
}
function ReceiversComponent_mat_card_13_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " No receivers found. ");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_mat_card_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 11)(1, "div", 12)(2, "mat-form-field", 13)(3, "mat-label");
    \u0275\u0275text(4, "Filter by Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_mat_card_13_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterCustomerId, $event) || (ctx_r1.filterCustomerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceiversComponent_mat_card_13_Template_mat_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByCustomer());
    });
    \u0275\u0275elementStart(6, "mat-option", 15);
    \u0275\u0275text(7, "All Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ReceiversComponent_mat_card_13_mat_option_8_Template, 2, 2, "mat-option", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 17)(10, "mat-icon", 18);
    \u0275\u0275text(11, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_mat_card_13_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceiversComponent_mat_card_13_Template_input_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "table", 20);
    \u0275\u0275elementContainerStart(14, 21);
    \u0275\u0275template(15, ReceiversComponent_mat_card_13_th_15_Template, 2, 0, "th", 22)(16, ReceiversComponent_mat_card_13_td_16_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 24);
    \u0275\u0275template(18, ReceiversComponent_mat_card_13_th_18_Template, 2, 0, "th", 22)(19, ReceiversComponent_mat_card_13_td_19_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 25);
    \u0275\u0275template(21, ReceiversComponent_mat_card_13_th_21_Template, 2, 0, "th", 22)(22, ReceiversComponent_mat_card_13_td_22_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(23, 26);
    \u0275\u0275template(24, ReceiversComponent_mat_card_13_th_24_Template, 2, 0, "th", 22)(25, ReceiversComponent_mat_card_13_td_25_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(26, 27);
    \u0275\u0275template(27, ReceiversComponent_mat_card_13_th_27_Template, 2, 0, "th", 22)(28, ReceiversComponent_mat_card_13_td_28_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(29, 28);
    \u0275\u0275template(30, ReceiversComponent_mat_card_13_th_30_Template, 2, 0, "th", 22)(31, ReceiversComponent_mat_card_13_td_31_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(32, 29);
    \u0275\u0275template(33, ReceiversComponent_mat_card_13_th_33_Template, 2, 0, "th", 22)(34, ReceiversComponent_mat_card_13_td_34_Template, 3, 2, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(35, 30);
    \u0275\u0275template(36, ReceiversComponent_mat_card_13_th_36_Template, 2, 0, "th", 22)(37, ReceiversComponent_mat_card_13_td_37_Template, 7, 0, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(38, ReceiversComponent_mat_card_13_tr_38_Template, 1, 0, "tr", 31)(39, ReceiversComponent_mat_card_13_tr_39_Template, 1, 0, "tr", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, ReceiversComponent_mat_card_13_div_40_Template, 2, 0, "div", 33);
    \u0275\u0275elementEnd();
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
    \u0275\u0275property("dataSource", ctx_r1.filteredReceivers);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredReceivers.length && !ctx_r1.loading);
  }
}
function ReceiversComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function ReceiversComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSearchPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_15_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " No receivers match your search. ");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_15_div_16_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 59);
  }
}
function ReceiversComponent_div_15_div_16_div_1_span_13_Template(rf, ctx) {
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
function ReceiversComponent_div_15_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function ReceiversComponent_div_15_div_16_div_1_Template_div_click_0_listener() {
      const r_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectSearchResult(r_r16));
    });
    \u0275\u0275elementStart(1, "div", 55)(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 58)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "span", 59);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ReceiversComponent_div_15_div_16_div_1_span_12_Template, 1, 0, "span", 60)(13, ReceiversComponent_div_15_div_16_div_1_span_13_Template, 2, 1, "span", 61);
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
function ReceiversComponent_div_15_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275template(1, ReceiversComponent_div_15_div_16_div_1_Template, 14, 6, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.searchResults);
  }
}
function ReceiversComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "h3")(3, "mat-icon", 47);
    \u0275\u0275text(4, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Search Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 48);
    \u0275\u0275listener("click", function ReceiversComponent_div_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSearchPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-form-field", 49)(10, "mat-icon", 18);
    \u0275\u0275text(11, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-label");
    \u0275\u0275text(13, "Search by name or mobile number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_15_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceiversComponent_div_15_Template_input_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.performSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ReceiversComponent_div_15_div_15_Template, 2, 0, "div", 33)(16, ReceiversComponent_div_15_div_16_Template, 2, 1, "div", 51);
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
function ReceiversComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function ReceiversComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function ReceiversComponent_div_17_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
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
function ReceiversComponent_div_17_mat_spinner_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 73);
  }
}
function ReceiversComponent_div_17_mat_icon_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function ReceiversComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 46)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 48);
    \u0275\u0275listener("click", function ReceiversComponent_div_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, ReceiversComponent_div_17_div_7_Template, 2, 1, "div", 63);
    \u0275\u0275elementStart(8, "div", 64)(9, "mat-form-field", 49)(10, "mat-label");
    \u0275\u0275text(11, "Customer *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_17_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.customerId, $event) || (ctx_r1.form.customerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(13, ReceiversComponent_div_17_mat_option_13_Template, 2, 2, "mat-option", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 65)(15, "mat-label");
    \u0275\u0275text(16, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_17_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.fullName, $event) || (ctx_r1.form.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 65)(19, "mat-label");
    \u0275\u0275text(20, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_17_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-form-field", 65)(23, "mat-label");
    \u0275\u0275text(24, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_17_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 65)(27, "mat-label");
    \u0275\u0275text(28, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_17_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.country, $event) || (ctx_r1.form.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "mat-form-field", 65)(31, "mat-label");
    \u0275\u0275text(32, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_17_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.city, $event) || (ctx_r1.form.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "mat-form-field", 65)(35, "mat-label");
    \u0275\u0275text(36, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_17_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.bankName, $event) || (ctx_r1.form.bankName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "mat-form-field", 65)(39, "mat-label");
    \u0275\u0275text(40, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_17_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.accountNumber, $event) || (ctx_r1.form.accountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "mat-form-field", 49)(43, "mat-label");
    \u0275\u0275text(44, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ReceiversComponent_div_17_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.relationship, $event) || (ctx_r1.form.relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 68)(47, "button", 69);
    \u0275\u0275listener("click", function ReceiversComponent_div_17_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(48, "mat-icon");
    \u0275\u0275text(49, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 70);
    \u0275\u0275listener("click", function ReceiversComponent_div_17_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveReceiver());
    });
    \u0275\u0275template(52, ReceiversComponent_div_17_mat_spinner_52_Template, 1, 0, "mat-spinner", 71)(53, ReceiversComponent_div_17_mat_icon_53_Template, 2, 0, "mat-icon", 61);
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
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.receivers = [];
    this.filteredReceivers = [];
    this.customers = [];
    this.displayedColumns = ["customerName", "fullName", "phone", "country", "bankName", "accountNumber", "status", "actions"];
    this.searchString = "";
    this.loading = true;
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
    this.loadCustomers();
    this.loadReceivers();
  }
  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadReceivers() {
    this.loading = true;
    this.api.getReceivers().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.receivers = res.data;
          this.applyFilter();
        } else {
          this.receivers = [];
          this.filteredReceivers = [];
          this.notify.error(res?.message || "Failed to load receivers.");
        }
        this.loading = false;
      },
      error: () => {
        this.receivers = [];
        this.filteredReceivers = [];
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
  applyFilter() {
    let list = this.receivers;
    if (this.filterCustomerId) {
      list = list.filter((r) => r.customerId === this.filterCustomerId);
    }
    const s = this.searchString.toLowerCase();
    if (s) {
      list = list.filter((r) => r.fullName.toLowerCase().includes(s) || r.customerName.toLowerCase().includes(s) || r.phone.toLowerCase().includes(s) || r.country.toLowerCase().includes(s) || (r.bankName || "").toLowerCase().includes(s));
    }
    this.filteredReceivers = list;
  }
  filterByCustomer() {
    this.applyFilter();
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
      return new (__ngFactoryType__ || _ReceiversComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceiversComponent, selectors: [["app-receivers"]], decls: 18, vars: 6, consts: [[1, "page-header"], [1, "header-actions"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], [1, "filter-row"], ["appearance", "outline", 1, "filter-field"], ["searchable", "", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search receivers...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "customerName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fullName"], ["matColumnDef", "phone"], ["matColumnDef", "country"], ["matColumnDef", "bankName"], ["matColumnDef", "accountNumber"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], [1, "header-icon"], ["mat-icon-button", "", 3, "click"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "placeholder", "Enter name or phone...", 3, "ngModelChange", "ngModel"], ["class", "search-results", 4, "ngIf"], [1, "search-results"], ["class", "search-result-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "search-result-item", 3, "click"], [1, "result-main"], [1, "result-name"], [1, "result-phone"], [1, "result-sub"], [1, "result-dot"], ["class", "result-dot", 4, "ngIf"], [4, "ngIf"], [1, "popup", "popup-lg"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-grid"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "email", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], ["diameter", "18", 1, "inline-spinner"]], template: function ReceiversComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Receiver Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
        \u0275\u0275listener("click", function ReceiversComponent_Template_button_click_4_listener() {
          return ctx.openSearchPopup();
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Search Receiver ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function ReceiversComponent_Template_button_click_8_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " Add Receiver ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, ReceiversComponent_div_12_Template, 2, 0, "div", 4)(13, ReceiversComponent_mat_card_13_Template, 41, 8, "mat-card", 5)(14, ReceiversComponent_div_14_Template, 1, 0, "div", 6)(15, ReceiversComponent_div_15_Template, 17, 3, "div", 7)(16, ReceiversComponent_div_16_Template, 1, 0, "div", 6)(17, ReceiversComponent_div_17_Template, 55, 16, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatChipsModule, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner, SearchableSelectDirective], styles: ['\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n}\n.alert-banner.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.inline-alert[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 14px;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.filter-field[_ngcontent-%COMP%] {\n  width: 280px;\n}\n.filter-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 320px;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.data-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.data-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.chip.chip-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-md[_ngcontent-%COMP%] {\n  width: 560px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-lg[_ngcontent-%COMP%] {\n  width: 700px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #1565c0;\n}\n.popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n.search-results[_ngcontent-%COMP%] {\n  max-height: 360px;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.search-result-item[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  transition: background 0.15s ease;\n}\n.search-result-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.search-result-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.result-main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.result-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: #1e293b;\n}\n.result-phone[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  font-family: "Roboto Mono", monospace;\n}\n.result-sub[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.result-dot[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.3);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-grid[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.inline-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .filter-field[_ngcontent-%COMP%], \n   .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .popup[_ngcontent-%COMP%] {\n    padding: 14px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=receivers.component.css.map */'] });
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
      SearchableSelectDirective
    ], template: `<!-- Page Header -->\r
<div class="page-header">\r
  <h2>Receiver Management</h2>\r
  <div class="header-actions">\r
    <button mat-raised-button (click)="openSearchPopup()">\r
      <mat-icon>search</mat-icon> Search Receiver\r
    </button>\r
    <button mat-raised-button color="primary" (click)="openCreatePopup()">\r
      <mat-icon>person_add</mat-icon> Add Receiver\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- Loading -->\r
<div *ngIf="loading" class="loading-container">\r
  <mat-spinner diameter="40"></mat-spinner>\r
</div>\r
\r
<!-- Search + Filter + Table -->\r
<mat-card *ngIf="!loading" class="table-card">\r
  <div class="filter-row">\r
    <mat-form-field appearance="outline" class="filter-field">\r
      <mat-label>Filter by Customer</mat-label>\r
      <mat-select searchable [(ngModel)]="filterCustomerId" (ngModelChange)="filterByCustomer()">\r
        <mat-option [value]="null">All Customers</mat-option>\r
        <mat-option *ngFor="let c of customers" [value]="c.id">{{ c.fullName }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline" class="search-field">\r
      <mat-icon matPrefix>search</mat-icon>\r
      <input matInput placeholder="Search receivers..." [(ngModel)]="searchString" (ngModelChange)="applyFilter()" />\r
    </mat-form-field>\r
  </div>\r
\r
  <table mat-table [dataSource]="filteredReceivers" class="data-table">\r
    <!-- Customer Name -->\r
    <ng-container matColumnDef="customerName">\r
      <th mat-header-cell *matHeaderCellDef>Customer Name</th>\r
      <td mat-cell *matCellDef="let r">{{ r.customerName }}</td>\r
    </ng-container>\r
\r
    <!-- Receiver Name -->\r
    <ng-container matColumnDef="fullName">\r
      <th mat-header-cell *matHeaderCellDef>Receiver Name</th>\r
      <td mat-cell *matCellDef="let r">{{ r.fullName }}</td>\r
    </ng-container>\r
\r
    <!-- Phone -->\r
    <ng-container matColumnDef="phone">\r
      <th mat-header-cell *matHeaderCellDef>Phone</th>\r
      <td mat-cell *matCellDef="let r">{{ r.phone }}</td>\r
    </ng-container>\r
\r
    <!-- Country -->\r
    <ng-container matColumnDef="country">\r
      <th mat-header-cell *matHeaderCellDef>Country</th>\r
      <td mat-cell *matCellDef="let r">{{ r.country }}</td>\r
    </ng-container>\r
\r
    <!-- Bank Name -->\r
    <ng-container matColumnDef="bankName">\r
      <th mat-header-cell *matHeaderCellDef>Bank Name</th>\r
      <td mat-cell *matCellDef="let r">{{ r.bankName || '-' }}</td>\r
    </ng-container>\r
\r
    <!-- Account Number -->\r
    <ng-container matColumnDef="accountNumber">\r
      <th mat-header-cell *matHeaderCellDef>Account</th>\r
      <td mat-cell *matCellDef="let r">{{ r.accountNumber || '-' }}</td>\r
    </ng-container>\r
\r
    <!-- Status -->\r
    <ng-container matColumnDef="status">\r
      <th mat-header-cell *matHeaderCellDef>Status</th>\r
      <td mat-cell *matCellDef="let r">\r
        <span class="chip" [ngClass]="r.isActive ? 'chip-success' : 'chip-default'">\r
          {{ r.isActive ? 'Active' : 'Inactive' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Actions -->\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let r">\r
        <button mat-icon-button matTooltip="Edit" (click)="openEditPopup(r)">\r
          <mat-icon color="primary">edit</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deleteReceiver(r)">\r
          <mat-icon color="warn">delete</mat-icon>\r
        </button>\r
      </td>\r
    </ng-container>\r
\r
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
  </table>\r
\r
  <div *ngIf="!filteredReceivers.length && !loading" class="empty-state">\r
    No receivers found.\r
  </div>\r
</mat-card>\r
\r
<!-- ============================================================ -->\r
<!-- Search Receiver Popup                                         -->\r
<!-- ============================================================ -->\r
<div *ngIf="showSearchPopup" class="overlay" (click)="closeSearchPopup()"></div>\r
<div *ngIf="showSearchPopup" class="popup popup-md">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">person_search</mat-icon> Search Receiver</h3>\r
    <button mat-icon-button (click)="closeSearchPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <mat-form-field appearance="outline" class="full-width">\r
    <mat-icon matPrefix>search</mat-icon>\r
    <mat-label>Search by name or mobile number</mat-label>\r
    <input matInput [(ngModel)]="searchQuery" (ngModelChange)="performSearch()" placeholder="Enter name or phone..." />\r
  </mat-form-field>\r
\r
  <div *ngIf="searchQuery && !searchResults.length" class="empty-state">\r
    No receivers match your search.\r
  </div>\r
\r
  <div *ngIf="searchResults.length" class="search-results">\r
    <div class="search-result-item" *ngFor="let r of searchResults" (click)="selectSearchResult(r)">\r
      <div class="result-main">\r
        <span class="result-name">{{ r.fullName }}</span>\r
        <span class="result-phone">{{ r.phone }}</span>\r
      </div>\r
      <div class="result-sub">\r
        <span>{{ r.customerName }}</span>\r
        <span class="result-dot"></span>\r
        <span>{{ r.country }}</span>\r
        <span *ngIf="r.bankName" class="result-dot"></span>\r
        <span *ngIf="r.bankName">{{ r.bankName }}</span>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Create / Edit Receiver Popup                                  -->\r
<!-- ============================================================ -->\r
<div *ngIf="showFormPopup" class="overlay" (click)="closeFormPopup()"></div>\r
<div *ngIf="showFormPopup" class="popup popup-lg">\r
  <div class="popup-header">\r
    <h3>{{ isEditing ? 'Edit Receiver' : 'Add New Receiver' }}</h3>\r
    <button mat-icon-button (click)="closeFormPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="formError" class="alert-banner alert-error inline-alert">{{ formError }}</div>\r
\r
  <div class="form-grid">\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Customer *</mat-label>\r
      <mat-select searchable [(ngModel)]="form.customerId">\r
        <mat-option *ngFor="let c of customers" [value]="c.id">{{ c.fullName }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Full Name *</mat-label>\r
      <input matInput [(ngModel)]="form.fullName" />\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Phone *</mat-label>\r
      <input matInput [(ngModel)]="form.phone" />\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Email</mat-label>\r
      <input matInput type="email" [(ngModel)]="form.email" />\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Country *</mat-label>\r
      <input matInput [(ngModel)]="form.country" />\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>City</mat-label>\r
      <input matInput [(ngModel)]="form.city" />\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Bank Name</mat-label>\r
      <input matInput [(ngModel)]="form.bankName" />\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Account Number</mat-label>\r
      <input matInput [(ngModel)]="form.accountNumber" />\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Relationship</mat-label>\r
      <input matInput [(ngModel)]="form.relationship" />\r
    </mat-form-field>\r
  </div>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeFormPopup()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="saveReceiver()" [disabled]="saving">\r
      <mat-spinner *ngIf="saving" diameter="18" class="inline-spinner"></mat-spinner>\r
      <mat-icon *ngIf="!saving">save</mat-icon>\r
      {{ isEditing ? 'Save Changes' : 'Add Receiver' }}\r
    </button>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/pages/admin/receivers/receivers.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header h2 {\n  font-weight: 700;\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.alert-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n}\n.alert-banner.alert-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.inline-alert {\n  margin-bottom: 10px;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card {\n  border-radius: 10px;\n  padding: 14px;\n}\n.filter-row {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.filter-field {\n  width: 280px;\n}\n.filter-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.search-field {\n  width: 320px;\n}\n.search-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table {\n  width: 100%;\n}\n.data-table th.mat-mdc-header-cell {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.data-table td.mat-mdc-cell {\n  font-size: 13px;\n}\n.empty-state {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.chip.chip-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.popup {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-md {\n  width: 560px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-lg {\n  width: 700px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.popup-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.header-icon {\n  font-size: 22px;\n  color: #1565c0;\n}\n.popup-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n.search-results {\n  max-height: 360px;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.search-result-item {\n  padding: 10px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  transition: background 0.15s ease;\n}\n.search-result-item:last-child {\n  border-bottom: none;\n}\n.search-result-item:hover {\n  background: #f1f5f9;\n}\n.result-main {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.result-name {\n  font-weight: 600;\n  font-size: 13px;\n  color: #1e293b;\n}\n.result-phone {\n  font-size: 13px;\n  color: #475569;\n  font-family: "Roboto Mono", monospace;\n}\n.result-sub {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.result-dot {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.3);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.form-grid .full-width {\n  grid-column: 1/-1;\n}\n.form-grid ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n@media (max-width: 600px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.full-width {\n  width: 100%;\n}\n.inline-spinner {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .header-actions {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .filter-row {\n    flex-direction: column;\n  }\n  .filter-field,\n  .search-field {\n    width: 100%;\n  }\n  .popup {\n    padding: 14px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=receivers.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceiversComponent, { className: "ReceiversComponent", filePath: "src/app/pages/admin/receivers/receivers.component.ts", lineNumber: 50 });
})();
export {
  ReceiversComponent
};
//# sourceMappingURL=chunk-RANH4CHQ.js.map
