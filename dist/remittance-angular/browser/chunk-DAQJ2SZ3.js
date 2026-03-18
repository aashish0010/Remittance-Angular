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
  NgModel,
  NumberValueAccessor
} from "./chunk-5RGUSOA3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-BPDBYDBO.js";
import {
  CommonModule,
  DecimalPipe,
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

// src/app/pages/admin/exchange-rates/exchange-rates.component.ts
function ExchangeRatesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_8_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Payout Agent");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_8_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.agentName);
  }
}
function ExchangeRatesComponent_mat_card_8_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Source Currency");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_8_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.sourceCurrency);
  }
}
function ExchangeRatesComponent_mat_card_8_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Dest. Currency");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_8_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.destinationCurrency);
  }
}
function ExchangeRatesComponent_mat_card_8_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Rate");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_8_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
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
function ExchangeRatesComponent_mat_card_8_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Margin");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_8_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
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
function ExchangeRatesComponent_mat_card_8_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_8_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 30);
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
function ExchangeRatesComponent_mat_card_8_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_8_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 28)(1, "button", 31);
    \u0275\u0275listener("click", function ExchangeRatesComponent_mat_card_8_td_26_Template_button_click_1_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(r_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon", 32);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275listener("click", function ExchangeRatesComponent_mat_card_8_td_26_Template_button_click_4_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditPopup(r_r10));
    });
    \u0275\u0275elementStart(5, "mat-icon", 32);
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 34);
    \u0275\u0275listener("click", function ExchangeRatesComponent_mat_card_8_td_26_Template_button_click_7_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteRate(r_r10));
    });
    \u0275\u0275elementStart(8, "mat-icon", 35);
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function ExchangeRatesComponent_mat_card_8_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function ExchangeRatesComponent_mat_card_8_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function ExchangeRatesComponent_mat_card_8_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " No exchange rates found. ");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_mat_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 9)(1, "mat-form-field", 10)(2, "mat-icon", 11);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_mat_card_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExchangeRatesComponent_mat_card_8_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 13);
    \u0275\u0275elementContainerStart(6, 14);
    \u0275\u0275template(7, ExchangeRatesComponent_mat_card_8_th_7_Template, 2, 0, "th", 15)(8, ExchangeRatesComponent_mat_card_8_td_8_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 17);
    \u0275\u0275template(10, ExchangeRatesComponent_mat_card_8_th_10_Template, 2, 0, "th", 15)(11, ExchangeRatesComponent_mat_card_8_td_11_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 18);
    \u0275\u0275template(13, ExchangeRatesComponent_mat_card_8_th_13_Template, 2, 0, "th", 15)(14, ExchangeRatesComponent_mat_card_8_td_14_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 19);
    \u0275\u0275template(16, ExchangeRatesComponent_mat_card_8_th_16_Template, 2, 0, "th", 15)(17, ExchangeRatesComponent_mat_card_8_td_17_Template, 3, 4, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 21);
    \u0275\u0275template(19, ExchangeRatesComponent_mat_card_8_th_19_Template, 2, 0, "th", 15)(20, ExchangeRatesComponent_mat_card_8_td_20_Template, 3, 4, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 22);
    \u0275\u0275template(22, ExchangeRatesComponent_mat_card_8_th_22_Template, 2, 0, "th", 15)(23, ExchangeRatesComponent_mat_card_8_td_23_Template, 3, 2, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 23);
    \u0275\u0275template(25, ExchangeRatesComponent_mat_card_8_th_25_Template, 2, 0, "th", 15)(26, ExchangeRatesComponent_mat_card_8_td_26_Template, 10, 0, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(27, ExchangeRatesComponent_mat_card_8_tr_27_Template, 1, 0, "tr", 24)(28, ExchangeRatesComponent_mat_card_8_tr_28_Template, 1, 0, "tr", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ExchangeRatesComponent_mat_card_8_div_29_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.filteredRates);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredRates.length && !ctx_r1.loading);
  }
}
function ExchangeRatesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "h3");
    \u0275\u0275text(3, "Exchange Rate Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 43)(8, "div", 44)(9, "span", 45);
    \u0275\u0275text(10, "Payout Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 44)(14, "span", 45);
    \u0275\u0275text(15, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 44)(19, "span", 45);
    \u0275\u0275text(20, "Source Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 44)(24, "span", 45);
    \u0275\u0275text(25, "Destination Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 44)(29, "span", 45);
    \u0275\u0275text(30, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 46);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 44)(35, "span", 45);
    \u0275\u0275text(36, "Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 44)(41, "span", 45);
    \u0275\u0275text(42, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 30);
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
function ExchangeRatesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function ExchangeRatesComponent_div_12_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 61);
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
function ExchangeRatesComponent_div_12_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 61);
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
function ExchangeRatesComponent_div_12_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 61);
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
function ExchangeRatesComponent_div_12_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 61);
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
function ExchangeRatesComponent_div_12_mat_spinner_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 62);
  }
}
function ExchangeRatesComponent_div_12_mat_icon_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function ExchangeRatesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 41)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, ExchangeRatesComponent_div_12_div_7_Template, 2, 1, "div", 48);
    \u0275\u0275elementStart(8, "div", 49)(9, "mat-form-field", 50)(10, "mat-label");
    \u0275\u0275text(11, "Payout Agent *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_12_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.agentId, $event) || (ctx_r1.form.agentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(13, ExchangeRatesComponent_div_12_mat_option_13_Template, 2, 2, "mat-option", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 50)(15, "mat-label");
    \u0275\u0275text(16, "Payout Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_12_Template_mat_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.country, $event) || (ctx_r1.form.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(18, ExchangeRatesComponent_div_12_mat_option_18_Template, 2, 2, "mat-option", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 53)(20, "mat-label");
    \u0275\u0275text(21, "Source Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_12_Template_mat_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sourceCurrency, $event) || (ctx_r1.form.sourceCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(23, ExchangeRatesComponent_div_12_mat_option_23_Template, 2, 2, "mat-option", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-form-field", 53)(25, "mat-label");
    \u0275\u0275text(26, "Destination Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_12_Template_mat_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destinationCurrency, $event) || (ctx_r1.form.destinationCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(28, ExchangeRatesComponent_div_12_mat_option_28_Template, 2, 2, "mat-option", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-form-field", 53)(30, "mat-label");
    \u0275\u0275text(31, "Rate *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_12_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.rate, $event) || (ctx_r1.form.rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-form-field", 53)(34, "mat-label");
    \u0275\u0275text(35, "Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeRatesComponent_div_12_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.margin, $event) || (ctx_r1.form.margin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 55)(38, "button", 56);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_12_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormPopup());
    });
    \u0275\u0275elementStart(39, "mat-icon");
    \u0275\u0275text(40, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 57);
    \u0275\u0275listener("click", function ExchangeRatesComponent_div_12_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRate());
    });
    \u0275\u0275template(43, ExchangeRatesComponent_div_12_mat_spinner_43_Template, 1, 0, "mat-spinner", 58)(44, ExchangeRatesComponent_div_12_mat_icon_44_Template, 2, 0, "mat-icon", 59);
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
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.rates = [];
    this.filteredRates = [];
    this.agents = [];
    this.countries = [];
    this.currencies = [];
    this.displayedColumns = ["agentName", "sourceCurrency", "destinationCurrency", "rate", "margin", "isActive", "actions"];
    this.searchString = "";
    this.loading = true;
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
    this.loadRates();
  }
  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadRates() {
    this.loading = true;
    this.api.getRates().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.rates = res.data;
          this.applyFilter();
        } else {
          this.rates = [];
          this.filteredRates = [];
          this.notify.error(res?.message || "Failed to load rates.");
        }
        this.loading = false;
      },
      error: () => {
        this.rates = [];
        this.filteredRates = [];
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
  applyFilter() {
    const s = this.searchString.toLowerCase();
    this.filteredRates = !s ? [...this.rates] : this.rates.filter((r) => r.agentName.toLowerCase().includes(s) || r.sourceCurrency.toLowerCase().includes(s) || r.destinationCurrency.toLowerCase().includes(s) || (r.country || "").toLowerCase().includes(s));
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
      return new (__ngFactoryType__ || _ExchangeRatesComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExchangeRatesComponent, selectors: [["app-exchange-rates"]], decls: 13, vars: 6, consts: [[1, "page-header"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search rates...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "agentName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sourceCurrency"], ["matColumnDef", "destinationCurrency"], ["matColumnDef", "rate"], ["mat-cell", "", "class", "text-bold", 4, "matCellDef"], ["matColumnDef", "margin"], ["matColumnDef", "isActive"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "text-bold"], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "text-bold"], [1, "popup", "popup-lg"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-grid"], ["appearance", "outline", 1, "full-width"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], [3, "value"], ["diameter", "18", 1, "inline-spinner"]], template: function ExchangeRatesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Exchange Rate Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 1);
        \u0275\u0275listener("click", function ExchangeRatesComponent_Template_button_click_3_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Add Rate ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ExchangeRatesComponent_div_7_Template, 2, 0, "div", 2)(8, ExchangeRatesComponent_mat_card_8_Template, 30, 5, "mat-card", 3)(9, ExchangeRatesComponent_div_9_Template, 1, 0, "div", 4)(10, ExchangeRatesComponent_div_10_Template, 45, 14, "div", 5)(11, ExchangeRatesComponent_div_11_Template, 1, 0, "div", 4)(12, ExchangeRatesComponent_div_12_Template, 46, 16, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatChipsModule, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n  font-size: 20px;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 14px;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n.alert-banner.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.inline-alert[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 40px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 14px;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 300px;\n  margin-bottom: 6px;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.data-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.data-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 6px 12px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.chip.chip-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-md[_ngcontent-%COMP%] {\n  width: 560px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-lg[_ngcontent-%COMP%] {\n  width: 680px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n}\n.popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.inline-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .popup[_ngcontent-%COMP%] {\n    padding: 14px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=exchange-rates.component.css.map */"] });
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
      DecimalPipe
    ], template: `<!-- Page Header -->\r
<div class="page-header">\r
  <h2>Exchange Rate Management</h2>\r
  <button mat-raised-button color="primary" (click)="openCreatePopup()">\r
    <mat-icon>add</mat-icon> Add Rate\r
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
    <input matInput placeholder="Search rates..." [(ngModel)]="searchString" (ngModelChange)="applyFilter()" />\r
  </mat-form-field>\r
\r
  <table mat-table [dataSource]="filteredRates" class="data-table">\r
    <!-- Payout Agent -->\r
    <ng-container matColumnDef="agentName">\r
      <th mat-header-cell *matHeaderCellDef>Payout Agent</th>\r
      <td mat-cell *matCellDef="let r">{{ r.agentName }}</td>\r
    </ng-container>\r
\r
    <!-- Source Currency -->\r
    <ng-container matColumnDef="sourceCurrency">\r
      <th mat-header-cell *matHeaderCellDef>Source Currency</th>\r
      <td mat-cell *matCellDef="let r">{{ r.sourceCurrency }}</td>\r
    </ng-container>\r
\r
    <!-- Destination Currency -->\r
    <ng-container matColumnDef="destinationCurrency">\r
      <th mat-header-cell *matHeaderCellDef>Dest. Currency</th>\r
      <td mat-cell *matCellDef="let r">{{ r.destinationCurrency }}</td>\r
    </ng-container>\r
\r
    <!-- Rate -->\r
    <ng-container matColumnDef="rate">\r
      <th mat-header-cell *matHeaderCellDef>Rate</th>\r
      <td mat-cell *matCellDef="let r" class="text-bold">{{ r.rate | number:'1.4-4' }}</td>\r
    </ng-container>\r
\r
    <!-- Margin -->\r
    <ng-container matColumnDef="margin">\r
      <th mat-header-cell *matHeaderCellDef>Margin</th>\r
      <td mat-cell *matCellDef="let r">{{ r.margin | number:'1.2-2' }}</td>\r
    </ng-container>\r
\r
    <!-- Active -->\r
    <ng-container matColumnDef="isActive">\r
      <th mat-header-cell *matHeaderCellDef>Active</th>\r
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
        <button mat-icon-button matTooltip="View Details" (click)="viewDetail(r)">\r
          <mat-icon color="primary">visibility</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Edit" (click)="openEditPopup(r)">\r
          <mat-icon color="primary">edit</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deleteRate(r)">\r
          <mat-icon color="warn">delete</mat-icon>\r
        </button>\r
      </td>\r
    </ng-container>\r
\r
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
  </table>\r
\r
  <div *ngIf="!filteredRates.length && !loading" class="empty-state">\r
    No exchange rates found.\r
  </div>\r
</mat-card>\r
\r
<!-- Detail Popup -->\r
<div *ngIf="showDetail && detailRate" class="overlay" (click)="closeDetail()"></div>\r
<div *ngIf="showDetail && detailRate" class="popup popup-md">\r
  <div class="popup-header">\r
    <h3>Exchange Rate Details</h3>\r
    <button mat-icon-button (click)="closeDetail()"><mat-icon>close</mat-icon></button>\r
  </div>\r
  <div class="detail-grid">\r
    <div class="detail-item"><span class="detail-label">Payout Agent</span><span>{{ detailRate.agentName }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Country</span><span>{{ detailRate.country || '-' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Source Currency</span><span>{{ detailRate.sourceCurrency\r
        }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Destination Currency</span><span>{{\r
        detailRate.destinationCurrency }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Rate</span><span class="text-bold">{{ detailRate.rate |\r
        number:'1.4-4' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Margin</span><span>{{ detailRate.margin | number:'1.2-2'\r
        }}</span></div>\r
    <div class="detail-item">\r
      <span class="detail-label">Status</span>\r
      <span class="chip" [ngClass]="detailRate.isActive ? 'chip-success' : 'chip-default'">\r
        {{ detailRate.isActive ? 'Active' : 'Inactive' }}\r
      </span>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Create / Edit Rate Popup -->\r
<div *ngIf="showFormPopup" class="overlay" (click)="closeFormPopup()"></div>\r
<div *ngIf="showFormPopup" class="popup popup-lg">\r
  <div class="popup-header">\r
    <h3>{{ isEditing ? 'Edit Exchange Rate' : 'Add New Exchange Rate' }}</h3>\r
    <button mat-icon-button (click)="closeFormPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="formError" class="alert-banner alert-error inline-alert">{{ formError }}</div>\r
\r
  <div class="form-grid">\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Payout Agent *</mat-label>\r
      <mat-select [(ngModel)]="form.agentId">\r
        <mat-option *ngFor="let a of agents" [value]="a.id">{{ a.businessName }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Payout Country</mat-label>\r
      <mat-select [(ngModel)]="form.country">\r
        <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Source Currency *</mat-label>\r
      <mat-select [(ngModel)]="form.sourceCurrency">\r
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Destination Currency *</mat-label>\r
      <mat-select [(ngModel)]="form.destinationCurrency">\r
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Rate *</mat-label>\r
      <input matInput type="number" [(ngModel)]="form.rate" />\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Margin</mat-label>\r
      <input matInput type="number" [(ngModel)]="form.margin" />\r
    </mat-form-field>\r
  </div>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeFormPopup()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="saveRate()" [disabled]="saving">\r
      <mat-spinner *ngIf="saving" diameter="18" class="inline-spinner"></mat-spinner>\r
      <mat-icon *ngIf="!saving">save</mat-icon>\r
      {{ isEditing ? 'Save Changes' : 'Add Rate' }}\r
    </button>\r
  </div>\r
</div>`, styles: ["/* src/app/pages/admin/exchange-rates/exchange-rates.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.page-header h2 {\n  font-weight: 700;\n  margin: 0;\n  font-size: 20px;\n}\n.alert-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 14px;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n.alert-banner.alert-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.inline-alert {\n  margin-bottom: 10px;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 40px 0;\n}\n.table-card {\n  border-radius: 10px;\n  padding: 14px;\n}\n.search-field {\n  width: 300px;\n  margin-bottom: 6px;\n}\n.search-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.data-table {\n  width: 100%;\n}\n.data-table th.mat-mdc-header-cell {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.data-table td.mat-mdc-cell {\n  font-size: 13px;\n  padding: 6px 12px;\n}\n.empty-state {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.chip.chip-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-bold {\n  font-weight: 600;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.popup {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-md {\n  width: 560px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-lg {\n  width: 680px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.popup-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n}\n.popup-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.detail-grid .detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-grid .detail-item.full-width {\n  grid-column: 1/-1;\n}\n.detail-label {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.form-grid .full-width {\n  grid-column: 1/-1;\n}\n@media (max-width: 600px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.full-width {\n  width: 100%;\n}\n.inline-spinner {\n  display: inline-block;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .search-field {\n    width: 100%;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n  .popup {\n    padding: 14px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=exchange-rates.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExchangeRatesComponent, { className: "ExchangeRatesComponent", filePath: "src/app/pages/admin/exchange-rates/exchange-rates.component.ts", lineNumber: 49 });
})();
export {
  ExchangeRatesComponent
};
//# sourceMappingURL=chunk-DAQJ2SZ3.js.map
