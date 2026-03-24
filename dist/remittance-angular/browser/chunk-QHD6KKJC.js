import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-IXW56OZ7.js";
import {
  ExportService
} from "./chunk-BWFLUKJM.js";
import {
  MatChipsModule
} from "./chunk-IHTO5KXG.js";
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
} from "./chunk-NVO6BOJL.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-6JH6Y4IN.js";
import {
  MatOption
} from "./chunk-4RZM2DGZ.js";
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
  NotificationService
} from "./chunk-474OV5BS.js";
import "./chunk-P4ZST5AN.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WB3VPGLQ.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-JCOTY37K.js";
import "./chunk-UIJ624TU.js";
import {
  MatFormField,
  MatLabel,
  MatPrefix
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
  NumberValueAccessor
} from "./chunk-WDVIFEQ7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MK4SB477.js";
import {
  AuthStateService
} from "./chunk-GPY2JV2J.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-MZ37WZKD.js";
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
  ɵɵpipe,
  ɵɵpipeBind2,
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
} from "./chunk-BKSYICRS.js";

// src/app/pages/admin/exchange-rates/exchange-rates.component.ts
var _c0 = () => [10, 20, 50];
function ExchangeRatesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_17_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Payout Agent");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_17_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.agentName);
  }
}
function ExchangeRatesComponent_mat_card_17_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Source Currency");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_17_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.sourceCurrency);
  }
}
function ExchangeRatesComponent_mat_card_17_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Dest. Currency");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_17_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.destinationCurrency);
  }
}
function ExchangeRatesComponent_mat_card_17_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Rate");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_17_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, r_r6.rate, "1.4-4"));
  }
}
function ExchangeRatesComponent_mat_card_17_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Margin");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_17_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, r_r7.margin, "1.2-2"));
  }
}
function ExchangeRatesComponent_mat_card_17_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_17_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", r_r8.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r8.isActive ? "Active" : "Inactive", " ");
  }
}
function ExchangeRatesComponent_mat_card_17_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_17_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 31)(1, "button", 34);
    \u0275\u0275listener("click", function ExchangeRatesComponent_mat_card_17_td_26_Template_button_click_1_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(r_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon", 35);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275listener("click", function ExchangeRatesComponent_mat_card_17_td_26_Template_button_click_4_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditPopup(r_r10));
    });
    \u0275\u0275elementStart(5, "mat-icon", 35);
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function ExchangeRatesComponent_mat_card_17_td_26_Template_button_click_7_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteRate(r_r10));
    });
    \u0275\u0275elementStart(8, "mat-icon", 38);
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function ExchangeRatesComponent_mat_card_17_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 39);
  }
}
function ExchangeRatesComponent_mat_card_17_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 40);
  }
}
function ExchangeRatesComponent_mat_card_17_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " No exchange rates found. ");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 11)(1, "mat-form-field", 12)(2, "mat-icon", 13);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_mat_card_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExchangeRatesComponent_mat_card_17_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 15);
    \u0275\u0275elementContainerStart(6, 16);
    \u0275\u0275template(7, ExchangeRatesComponent_mat_card_17_th_7_Template, 2, 0, "th", 17)(8, ExchangeRatesComponent_mat_card_17_td_8_Template, 2, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 19);
    \u0275\u0275template(10, ExchangeRatesComponent_mat_card_17_th_10_Template, 2, 0, "th", 17)(11, ExchangeRatesComponent_mat_card_17_td_11_Template, 2, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 20);
    \u0275\u0275template(13, ExchangeRatesComponent_mat_card_17_th_13_Template, 2, 0, "th", 17)(14, ExchangeRatesComponent_mat_card_17_td_14_Template, 2, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 21);
    \u0275\u0275template(16, ExchangeRatesComponent_mat_card_17_th_16_Template, 2, 0, "th", 17)(17, ExchangeRatesComponent_mat_card_17_td_17_Template, 3, 4, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 23);
    \u0275\u0275template(19, ExchangeRatesComponent_mat_card_17_th_19_Template, 2, 0, "th", 17)(20, ExchangeRatesComponent_mat_card_17_td_20_Template, 3, 4, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 24);
    \u0275\u0275template(22, ExchangeRatesComponent_mat_card_17_th_22_Template, 2, 0, "th", 17)(23, ExchangeRatesComponent_mat_card_17_td_23_Template, 3, 2, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 25);
    \u0275\u0275template(25, ExchangeRatesComponent_mat_card_17_th_25_Template, 2, 0, "th", 17)(26, ExchangeRatesComponent_mat_card_17_td_26_Template, 10, 0, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(27, ExchangeRatesComponent_mat_card_17_tr_27_Template, 1, 0, "tr", 26)(28, ExchangeRatesComponent_mat_card_17_tr_28_Template, 1, 0, "tr", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ExchangeRatesComponent_mat_card_17_div_29_Template, 2, 0, "div", 28);
    \u0275\u0275elementStart(30, "mat-paginator", 29);
    \u0275\u0275listener("page", function ExchangeRatesComponent_mat_card_17_Template_mat_paginator_page_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.rates);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.rates.length && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r1.totalCount)("pageIndex", ctx_r1.pageIndex)("pageSize", ctx_r1.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(9, _c0));
  }
}
function ExchangeRatesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "h3");
    \u0275\u0275text(3, "Exchange Rate Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 45);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 46)(8, "div", 47)(9, "span", 48);
    \u0275\u0275text(10, "Payout Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 47)(14, "span", 48);
    \u0275\u0275text(15, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 47)(19, "span", 48);
    \u0275\u0275text(20, "Source Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 47)(24, "span", 48);
    \u0275\u0275text(25, "Destination Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 47)(29, "span", 48);
    \u0275\u0275text(30, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 49);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 47)(35, "span", 48);
    \u0275\u0275text(36, "Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 47)(41, "span", 48);
    \u0275\u0275text(42, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 33);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.detailRate.agentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailRate.country || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailRate.sourceCurrency);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailRate.destinationCurrency);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 8, ctx_r1.detailRate.rate, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 11, ctx_r1.detailRate.margin, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.detailRate.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailRate.isActive ? "Active" : "Inactive", " ");
  }
}
function ExchangeRatesComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function ExchangeRatesComponent_div_21_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r15 = ctx.$implicit;
    \u0275\u0275property("value", a_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r15.businessName);
  }
}
function ExchangeRatesComponent_div_21_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("value", c_r16.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16.name);
  }
}
function ExchangeRatesComponent_div_21_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    \u0275\u0275property("value", c_r17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r17);
  }
}
function ExchangeRatesComponent_div_21_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    \u0275\u0275property("value", c_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r18);
  }
}
function ExchangeRatesComponent_div_21_mat_spinner_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 65);
  }
}
function ExchangeRatesComponent_div_21_mat_icon_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 44)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 45);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, ExchangeRatesComponent_div_21_div_7_Template, 2, 1, "div", 51);
    \u0275\u0275elementStart(8, "div", 52)(9, "mat-form-field", 53)(10, "mat-label");
    \u0275\u0275text(11, "Payout Agent *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.agentId, $event) || (ctx_r1.form.agentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(13, ExchangeRatesComponent_div_21_mat_option_13_Template, 2, 2, "mat-option", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 53)(15, "mat-label");
    \u0275\u0275text(16, "Payout Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_mat_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.country, $event) || (ctx_r1.form.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(18, ExchangeRatesComponent_div_21_mat_option_18_Template, 2, 2, "mat-option", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 56)(20, "mat-label");
    \u0275\u0275text(21, "Source Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_mat_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCurrency, $event) || (ctx_r1.form.sourceCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(23, ExchangeRatesComponent_div_21_mat_option_23_Template, 2, 2, "mat-option", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-form-field", 56)(25, "mat-label");
    \u0275\u0275text(26, "Destination Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_mat_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCurrency, $event) || (ctx_r1.form.destinationCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(28, ExchangeRatesComponent_div_21_mat_option_28_Template, 2, 2, "mat-option", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-form-field", 56)(30, "mat-label");
    \u0275\u0275text(31, "Rate *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.rate, $event) || (ctx_r1.form.rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-form-field", 56)(34, "mat-label");
    \u0275\u0275text(35, "Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_21_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.margin, $event) || (ctx_r1.form.margin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 58)(38, "button", 59);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_21_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(39, "mat-icon");
    \u0275\u0275text(40, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 60);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_21_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRate());
    });
    \u0275\u0275template(43, ExchangeRatesComponent_div_21_mat_spinner_43_Template, 1, 0, "mat-spinner", 61)(44, ExchangeRatesComponent_div_21_mat_icon_44_Template, 2, 0, "mat-icon", 62);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Exchange Rate" : "Add New Exchange Rate");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.agentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.agents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sourceCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destinationCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.rate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.margin);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Save Changes" : "Add Rate", " ");
  }
}
function emptyForm() {
  return {
    agentId: null,
    country: "",
    sourceCurrency: "",
    destinationCurrency: "",
    rate: 0,
    margin: 0
  };
}
var ExchangeRatesComponent = class _ExchangeRatesComponent {
  constructor(api, exportService, auth, notify) {
    this.api = api;
    this.exportService = exportService;
    this.auth = auth;
    this.notify = notify;
    this.rates = [];
    this.agents = [];
    this.countries = [];
    this.currencies = [];
    this.displayedColumns = ["agentName", "sourceCurrency", "destinationCurrency", "rate", "margin", "isActive", "actions"];
    this.searchString = "";
    this.loading = true;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchSubject = new Subject();
    this.destroy$ = new Subject();
    this.showDetail = false;
    this.detailRate = null;
    this.showFormPopup = false;
    this.isEditing = false;
    this.editingId = 0;
    this.saving = false;
    this.formError = "";
    this.form = emptyForm();
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadAgents();
    this.loadCountries();
    this.loadCurrencies();
    this.searchSubject.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(() => {
      this.pageIndex = 0;
      this.loadRates();
    });
    this.loadRates();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadRates() {
    this.loading = true;
    this.api.getRatesPaged({
      page: this.pageIndex + 1,
      pageSize: this.pageSize,
      search: this.searchString
    }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.rates = res.data.items ?? [];
          this.totalCount = res.data.totalCount ?? 0;
        } else {
          this.rates = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load rates.");
        }
        this.loading = false;
      },
      error: () => {
        this.rates = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  loadAgents() {
    this.api.getAgents().subscribe((res) => {
      if (res?.success && res.data) {
        this.agents = res.data.filter((a) => a.agentType === "PayoutAgent");
      }
    });
  }
  loadCountries() {
    this.api.getCountries().subscribe((r) => {
      if (r?.success && r.data)
        this.countries = r.data;
    });
  }
  loadCurrencies() {
    this.api.getCurrencies().subscribe((res) => {
      if (res?.success && res.data) {
        this.currencies = res.data;
      }
    });
  }
  onSearchChange() {
    this.searchSubject.next(this.searchString);
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadRates();
  }
  exportData(format) {
    this.exportService.export("api/admin/rates/export", { search: this.searchString }, format);
  }
  // ---------------------------------------------------------------------------
  // Detail
  // ---------------------------------------------------------------------------
  viewDetail(rate) {
    this.detailRate = rate;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
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
  openEditPopup(rate) {
    this.isEditing = true;
    this.editingId = rate.id;
    this.form = {
      agentId: rate.agentId,
      country: rate.country || "",
      sourceCurrency: rate.sourceCurrency,
      destinationCurrency: rate.destinationCurrency,
      rate: rate.rate,
      margin: rate.margin || 0
    };
    this.formError = "";
    this.showFormPopup = true;
  }
  closeFormPopup() {
    this.showFormPopup = false;
  }
  saveRate() {
    this.formError = "";
    const f = this.form;
    if (!f.agentId) {
      this.formError = "Please select a payout agent.";
      return;
    }
    if (!f.sourceCurrency || !f.destinationCurrency) {
      this.formError = "Source and Destination currencies are required.";
      return;
    }
    if (f.rate <= 0) {
      this.formError = "Rate must be greater than zero.";
      return;
    }
    this.saving = true;
    const dto = {
      agentId: f.agentId,
      country: f.country || null,
      sourceCurrency: f.sourceCurrency,
      destinationCurrency: f.destinationCurrency,
      rate: f.rate,
      margin: f.margin || 0
    };
    const obs = this.isEditing ? this.api.updateRate(this.editingId, dto) : this.api.createRate(dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.isEditing ? "Exchange rate updated." : "Exchange rate created.");
          this.showFormPopup = false;
          this.loadRates();
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
  deleteRate(rate) {
    this.api.deleteRate(rate.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Exchange rate deleted.");
        this.loadRates();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function ExchangeRatesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExchangeRatesComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExchangeRatesComponent, selectors: [["app-exchange-rates"]], decls: 22, vars: 6, consts: [[1, "page-header"], [1, "header-actions"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search rates...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "agentName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sourceCurrency"], ["matColumnDef", "destinationCurrency"], ["matColumnDef", "rate"], ["mat-cell", "", "class", "text-bold", 4, "matCellDef"], ["matColumnDef", "margin"], ["matColumnDef", "isActive"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["showFirstLastButtons", "", 3, "page", "length", "pageIndex", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "text-bold"], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "text-bold"], [1, "popup", "popup-lg"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-grid"], ["appearance", "outline", 1, "full-width"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], [3, "value"], ["diameter", "18", 1, "inline-spinner"]], template: function ExchangeRatesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Exchange Rate Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
        \u0275\u0275listener("click", function ExchangeRatesComponent_Template_button_click_4_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 2);
        \u0275\u0275listener("click", function ExchangeRatesComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 3);
        \u0275\u0275listener("click", function ExchangeRatesComponent_Template_button_click_12_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275elementStart(13, "mat-icon");
        \u0275\u0275text(14, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Add Rate ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, ExchangeRatesComponent_div_16_Template, 2, 0, "div", 4)(17, ExchangeRatesComponent_mat_card_17_Template, 31, 10, "mat-card", 5)(18, ExchangeRatesComponent_div_18_Template, 1, 0, "div", 6)(19, ExchangeRatesComponent_div_19_Template, 45, 14, "div", 7)(20, ExchangeRatesComponent_div_20_Template, 1, 0, "div", 6)(21, ExchangeRatesComponent_div_21_Template, 46, 16, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailRate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailRate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFormPopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatChipsModule, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner, MatPaginatorModule, MatPaginator], styles: ["\n\n/*# sourceMappingURL=exchange-rates.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExchangeRatesComponent, [{
    type: Component,
    args: [{ selector: "app-exchange-rates", standalone: true, imports: [
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
      DecimalPipe
    ], template: `<!-- Page Header -->
<div class="page-header">
  <h2>Exchange Rate Management</h2>
  <div class="header-actions">
    <button mat-raised-button (click)="exportData('excel')">
      <mat-icon>download</mat-icon> Excel
    </button>
    <button mat-raised-button (click)="exportData('csv')">
      <mat-icon>download</mat-icon> CSV
    </button>
    <button mat-raised-button color="primary" (click)="openCreatePopup()">
      <mat-icon>add</mat-icon> Add Rate
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
    <input matInput placeholder="Search rates..." [(ngModel)]="searchString" (ngModelChange)="onSearchChange()" />
  </mat-form-field>

  <table mat-table [dataSource]="rates" class="data-table">
    <!-- Payout Agent -->
    <ng-container matColumnDef="agentName">
      <th mat-header-cell *matHeaderCellDef>Payout Agent</th>
      <td mat-cell *matCellDef="let r">{{ r.agentName }}</td>
    </ng-container>

    <!-- Source Currency -->
    <ng-container matColumnDef="sourceCurrency">
      <th mat-header-cell *matHeaderCellDef>Source Currency</th>
      <td mat-cell *matCellDef="let r">{{ r.sourceCurrency }}</td>
    </ng-container>

    <!-- Destination Currency -->
    <ng-container matColumnDef="destinationCurrency">
      <th mat-header-cell *matHeaderCellDef>Dest. Currency</th>
      <td mat-cell *matCellDef="let r">{{ r.destinationCurrency }}</td>
    </ng-container>

    <!-- Rate -->
    <ng-container matColumnDef="rate">
      <th mat-header-cell *matHeaderCellDef>Rate</th>
      <td mat-cell *matCellDef="let r" class="text-bold">{{ r.rate | number:'1.4-4' }}</td>
    </ng-container>

    <!-- Margin -->
    <ng-container matColumnDef="margin">
      <th mat-header-cell *matHeaderCellDef>Margin</th>
      <td mat-cell *matCellDef="let r">{{ r.margin | number:'1.2-2' }}</td>
    </ng-container>

    <!-- Active -->
    <ng-container matColumnDef="isActive">
      <th mat-header-cell *matHeaderCellDef>Active</th>
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
        <button mat-icon-button matTooltip="View Details" (click)="viewDetail(r)">
          <mat-icon color="primary">visibility</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Edit" (click)="openEditPopup(r)">
          <mat-icon color="primary">edit</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Delete" (click)="deleteRate(r)">
          <mat-icon color="warn">delete</mat-icon>
        </button>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  <div *ngIf="!rates.length && !loading" class="empty-state">
    No exchange rates found.
  </div>

  <mat-paginator
    [length]="totalCount"
    [pageIndex]="pageIndex"
    [pageSize]="pageSize"
    [pageSizeOptions]="[10, 20, 50]"
    (page)="onPageChange($event)"
    showFirstLastButtons>
  </mat-paginator>
</mat-card>

<!-- Detail Popup -->
<div *ngIf="showDetail && detailRate" class="overlay" (click)="closeDetail()"></div>
<div *ngIf="showDetail && detailRate" class="popup popup-md">
  <div class="popup-header">
    <h3>Exchange Rate Details</h3>
    <button mat-icon-button (click)="closeDetail()"><mat-icon>close</mat-icon></button>
  </div>
  <div class="detail-grid">
    <div class="detail-item"><span class="detail-label">Payout Agent</span><span>{{ detailRate.agentName }}</span></div>
    <div class="detail-item"><span class="detail-label">Country</span><span>{{ detailRate.country || '-' }}</span></div>
    <div class="detail-item"><span class="detail-label">Source Currency</span><span>{{ detailRate.sourceCurrency
        }}</span></div>
    <div class="detail-item"><span class="detail-label">Destination Currency</span><span>{{
        detailRate.destinationCurrency }}</span></div>
    <div class="detail-item"><span class="detail-label">Rate</span><span class="text-bold">{{ detailRate.rate |
        number:'1.4-4' }}</span></div>
    <div class="detail-item"><span class="detail-label">Margin</span><span>{{ detailRate.margin | number:'1.2-2'
        }}</span></div>
    <div class="detail-item">
      <span class="detail-label">Status</span>
      <span class="chip" [ngClass]="detailRate.isActive ? 'chip-success' : 'chip-default'">
        {{ detailRate.isActive ? 'Active' : 'Inactive' }}
      </span>
    </div>
  </div>
</div>

<!-- Create / Edit Rate Popup -->
<div *ngIf="showFormPopup" class="overlay" (click)="closeFormPopup()"></div>
<div *ngIf="showFormPopup" class="popup popup-lg">
  <div class="popup-header">
    <h3>{{ isEditing ? 'Edit Exchange Rate' : 'Add New Exchange Rate' }}</h3>
    <button mat-icon-button (click)="closeFormPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="formError" class="alert-banner alert-error inline-alert">{{ formError }}</div>

  <div class="form-grid">
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Payout Agent *</mat-label>
      <mat-select [(ngModel)]="form.agentId">
        <mat-option *ngFor="let a of agents" [value]="a.id">{{ a.businessName }}</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Payout Country</mat-label>
      <mat-select [(ngModel)]="form.country">
        <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Source Currency *</mat-label>
      <mat-select [(ngModel)]="form.sourceCurrency">
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Destination Currency *</mat-label>
      <mat-select [(ngModel)]="form.destinationCurrency">
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Rate *</mat-label>
      <input matInput type="number" [(ngModel)]="form.rate" />
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Margin</mat-label>
      <input matInput type="number" [(ngModel)]="form.margin" />
    </mat-form-field>
  </div>

  <div class="popup-actions">
    <button mat-button (click)="closeFormPopup()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="saveRate()" [disabled]="saving">
      <mat-spinner *ngIf="saving" diameter="18" class="inline-spinner"></mat-spinner>
      <mat-icon *ngIf="!saving">save</mat-icon>
      {{ isEditing ? 'Save Changes' : 'Add Rate' }}
    </button>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/exchange-rates/exchange-rates.component.scss */\n/*# sourceMappingURL=exchange-rates.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: ExportService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExchangeRatesComponent, { className: "ExchangeRatesComponent", filePath: "src/app/pages/admin/exchange-rates/exchange-rates.component.ts", lineNumber: 54 });
})();
export {
  ExchangeRatesComponent
};
//# sourceMappingURL=chunk-QHD6KKJC.js.map
