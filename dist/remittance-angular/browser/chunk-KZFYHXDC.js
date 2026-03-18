import {
  SearchableSelectDirective
} from "./chunk-SPE5Y2T4.js";
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
  RequiredValidator
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7WRAX6BO.js";

// src/app/pages/admin/routing/routing.component.ts
var _c0 = () => ["payoutAgent", "paymentModes", "status", "actions"];
function RoutingComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function RoutingComponent_div_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearMessage());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "alert-" + ctx_r1.messageSeverity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.message);
  }
}
function RoutingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_9_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Sending Agent");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_9_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.sendingAgentName || "All");
  }
}
function RoutingComponent_mat_card_9_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Source Country");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_9_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.sourceCountry);
  }
}
function RoutingComponent_mat_card_9_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Source Currency");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_9_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.sourceCurrency);
  }
}
function RoutingComponent_mat_card_9_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Dest Country");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_9_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7.destinationCountry);
  }
}
function RoutingComponent_mat_card_9_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Dest Currency");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_9_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r8.destinationCurrency);
  }
}
function RoutingComponent_mat_card_9_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Partners");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_9_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((c_r9.payoutPartners == null ? null : c_r9.payoutPartners.length) || 0);
  }
}
function RoutingComponent_mat_card_9_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_9_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r10.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r10.isActive ? "Active" : "Inactive", " ");
  }
}
function RoutingComponent_mat_card_9_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_9_td_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 36)(1, "button", 39);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_9_td_30_Template_button_click_1_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditCorridor(c_r12));
    });
    \u0275\u0275elementStart(2, "mat-icon", 40);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_9_td_30_Template_button_click_4_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPartnerManagement(c_r12));
    });
    \u0275\u0275elementStart(5, "mat-icon", 42);
    \u0275\u0275text(6, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 43);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_9_td_30_Template_button_click_7_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCorridor(c_r12));
    });
    \u0275\u0275elementStart(8, "mat-icon", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 45);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_9_td_30_Template_button_click_10_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCorridor(c_r12));
    });
    \u0275\u0275elementStart(11, "mat-icon", 46);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", c_r12.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r12.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r12.isActive ? "toggle_on" : "toggle_off");
  }
}
function RoutingComponent_mat_card_9_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 47);
  }
}
function RoutingComponent_mat_card_9_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function RoutingComponent_mat_card_9_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "span", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 52)(7, "div", 53)(8, "span", 54);
    \u0275\u0275text(9, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 53)(13, "span", 54);
    \u0275\u0275text(14, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 53)(18, "span", 54);
    \u0275\u0275text(19, "Partners");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 37);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 55)(23, "button", 39);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_9_div_34_Template_button_click_23_listener() {
      const c_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditCorridor(c_r14));
    });
    \u0275\u0275elementStart(24, "mat-icon", 40);
    \u0275\u0275text(25, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 41);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_9_div_34_Template_button_click_26_listener() {
      const c_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPartnerManagement(c_r14));
    });
    \u0275\u0275elementStart(27, "mat-icon", 42);
    \u0275\u0275text(28, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 43);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_9_div_34_Template_button_click_29_listener() {
      const c_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCorridor(c_r14));
    });
    \u0275\u0275elementStart(30, "mat-icon", 44);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 45);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_9_div_34_Template_button_click_32_listener() {
      const c_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCorridor(c_r14));
    });
    \u0275\u0275elementStart(33, "mat-icon", 46);
    \u0275\u0275text(34, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r14.sourceCountry, " \u2192 ", c_r14.destinationCountry, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r14.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r14.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r14.sendingAgentName || "All");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", c_r14.sourceCurrency, " \u2192 ", c_r14.destinationCurrency, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((c_r14.payoutPartners == null ? null : c_r14.payoutPartners.length) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("matTooltip", c_r14.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r14.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14.isActive ? "toggle_on" : "toggle_off");
  }
}
function RoutingComponent_mat_card_9_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " No corridors found. ");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 14)(1, "mat-form-field", 15)(2, "mat-icon", 16);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_mat_card_9_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RoutingComponent_mat_card_9_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 18)(6, "table", 19);
    \u0275\u0275elementContainerStart(7, 20);
    \u0275\u0275template(8, RoutingComponent_mat_card_9_th_8_Template, 2, 0, "th", 21)(9, RoutingComponent_mat_card_9_td_9_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 23);
    \u0275\u0275template(11, RoutingComponent_mat_card_9_th_11_Template, 2, 0, "th", 21)(12, RoutingComponent_mat_card_9_td_12_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 24);
    \u0275\u0275template(14, RoutingComponent_mat_card_9_th_14_Template, 2, 0, "th", 21)(15, RoutingComponent_mat_card_9_td_15_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 25);
    \u0275\u0275template(17, RoutingComponent_mat_card_9_th_17_Template, 2, 0, "th", 21)(18, RoutingComponent_mat_card_9_td_18_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 26);
    \u0275\u0275template(20, RoutingComponent_mat_card_9_th_20_Template, 2, 0, "th", 21)(21, RoutingComponent_mat_card_9_td_21_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(22, 27);
    \u0275\u0275template(23, RoutingComponent_mat_card_9_th_23_Template, 2, 0, "th", 21)(24, RoutingComponent_mat_card_9_td_24_Template, 3, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(25, 28);
    \u0275\u0275template(26, RoutingComponent_mat_card_9_th_26_Template, 2, 0, "th", 21)(27, RoutingComponent_mat_card_9_td_27_Template, 3, 2, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(28, 29);
    \u0275\u0275template(29, RoutingComponent_mat_card_9_th_29_Template, 2, 0, "th", 21)(30, RoutingComponent_mat_card_9_td_30_Template, 13, 3, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(31, RoutingComponent_mat_card_9_tr_31_Template, 1, 0, "tr", 30)(32, RoutingComponent_mat_card_9_tr_32_Template, 1, 0, "tr", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 32);
    \u0275\u0275template(34, RoutingComponent_mat_card_9_div_34_Template, 35, 11, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, RoutingComponent_mat_card_9_div_35_Template, 2, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r1.filteredCorridors);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredCorridors);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredCorridors.length && !ctx_r1.loading);
  }
}
function RoutingComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function RoutingComponent_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCorridorPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.corridorFormError);
  }
}
function RoutingComponent_div_11_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r17 = ctx.$implicit;
    \u0275\u0275property("value", a_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r17.businessName);
  }
}
function RoutingComponent_div_11_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 64);
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
function RoutingComponent_div_11_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275property("value", c_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r19);
  }
}
function RoutingComponent_div_11_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r20 = ctx.$implicit;
    \u0275\u0275property("value", c_r20.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r20.name);
  }
}
function RoutingComponent_div_11_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    \u0275\u0275property("value", c_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r21);
  }
}
function RoutingComponent_div_11_mat_spinner_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 74);
  }
}
function RoutingComponent_div_11_mat_icon_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function RoutingComponent_div_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCorridorPopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, RoutingComponent_div_11_div_7_Template, 2, 1, "div", 60);
    \u0275\u0275elementStart(8, "div", 61)(9, "mat-form-field", 62)(10, "mat-label");
    \u0275\u0275text(11, "Sending Agent (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_11_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.sendingAgentId, $event) || (ctx_r1.corridorForm.sendingAgentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "mat-option", 64);
    \u0275\u0275text(14, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, RoutingComponent_div_11_mat_option_15_Template, 2, 2, "mat-option", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 66)(17, "mat-label");
    \u0275\u0275text(18, "Source Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_11_Template_mat_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.sourceCountry, $event) || (ctx_r1.corridorForm.sourceCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, RoutingComponent_div_11_mat_option_20_Template, 2, 2, "mat-option", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 66)(22, "mat-label");
    \u0275\u0275text(23, "Source Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_11_Template_mat_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.sourceCurrency, $event) || (ctx_r1.corridorForm.sourceCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(25, RoutingComponent_div_11_mat_option_25_Template, 2, 2, "mat-option", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 66)(27, "mat-label");
    \u0275\u0275text(28, "Destination Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_11_Template_mat_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.destinationCountry, $event) || (ctx_r1.corridorForm.destinationCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(30, RoutingComponent_div_11_mat_option_30_Template, 2, 2, "mat-option", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 66)(32, "mat-label");
    \u0275\u0275text(33, "Destination Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_11_Template_mat_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.destinationCurrency, $event) || (ctx_r1.corridorForm.destinationCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(35, RoutingComponent_div_11_mat_option_35_Template, 2, 2, "mat-option", 65);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 68)(37, "button", 69);
    \u0275\u0275listener("click", function RoutingComponent_div_11_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCorridorPopup());
    });
    \u0275\u0275elementStart(38, "mat-icon");
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 70);
    \u0275\u0275listener("click", function RoutingComponent_div_11_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCorridor());
    });
    \u0275\u0275template(42, RoutingComponent_div_11_mat_spinner_42_Template, 1, 0, "mat-spinner", 71)(43, RoutingComponent_div_11_mat_icon_43_Template, 2, 0, "mat-icon", 72);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingCorridor ? "Edit Corridor" : "Create Corridor");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.corridorFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.corridorForm.sendingAgentId);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sendingAgents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.corridorForm.sourceCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.corridorForm.sourceCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.corridorForm.destinationCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.corridorForm.destinationCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.savingCorridor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingCorridor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.savingCorridor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingCorridor ? "Update" : "Create", " ");
  }
}
function RoutingComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function RoutingComponent_div_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function RoutingComponent_div_13_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.partnerMessage = "");
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "alert-" + ctx_r1.partnerSeverity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.partnerMessage);
  }
}
function RoutingComponent_div_13_div_15_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Payout Agent");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_13_div_15_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r25.payoutAgentName);
  }
}
function RoutingComponent_div_13_div_15_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Payment Modes");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_13_div_15_td_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r26 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mode_r26);
  }
}
function RoutingComponent_div_13_div_15_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275template(1, RoutingComponent_div_13_div_15_td_7_span_1_Template, 2, 1, "span", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r27 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", p_r27.paymentModeNames);
  }
}
function RoutingComponent_div_13_div_15_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_13_div_15_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r28 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r28.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r28.isActive ? "Active" : "Inactive", " ");
  }
}
function RoutingComponent_div_13_div_15_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_13_div_15_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 36)(1, "button", 39);
    \u0275\u0275listener("click", function RoutingComponent_div_13_div_15_td_13_Template_button_click_1_listener() {
      const p_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditPartner(p_r30));
    });
    \u0275\u0275elementStart(2, "mat-icon", 40);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function RoutingComponent_div_13_div_15_td_13_Template_button_click_4_listener() {
      const p_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePartner(p_r30));
    });
    \u0275\u0275elementStart(5, "mat-icon", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 45);
    \u0275\u0275listener("click", function RoutingComponent_div_13_div_15_td_13_Template_button_click_7_listener() {
      const p_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePartner(p_r30));
    });
    \u0275\u0275elementStart(8, "mat-icon", 46);
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r30 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", p_r30.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r30.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r30.isActive ? "toggle_on" : "toggle_off");
  }
}
function RoutingComponent_div_13_div_15_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 47);
  }
}
function RoutingComponent_div_13_div_15_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function RoutingComponent_div_13_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "table", 83);
    \u0275\u0275elementContainerStart(2, 84);
    \u0275\u0275template(3, RoutingComponent_div_13_div_15_th_3_Template, 2, 0, "th", 21)(4, RoutingComponent_div_13_div_15_td_4_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 85);
    \u0275\u0275template(6, RoutingComponent_div_13_div_15_th_6_Template, 2, 0, "th", 21)(7, RoutingComponent_div_13_div_15_td_7_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 28);
    \u0275\u0275template(9, RoutingComponent_div_13_div_15_th_9_Template, 2, 0, "th", 21)(10, RoutingComponent_div_13_div_15_td_10_Template, 3, 2, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 29);
    \u0275\u0275template(12, RoutingComponent_div_13_div_15_th_12_Template, 2, 0, "th", 21)(13, RoutingComponent_div_13_div_15_td_13_Template, 10, 3, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(14, RoutingComponent_div_13_div_15_tr_14_Template, 1, 0, "tr", 30)(15, RoutingComponent_div_13_div_15_tr_15_Template, 1, 0, "tr", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.partnerCorridor.payoutPartners);
    \u0275\u0275advance(13);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(4, _c0));
  }
}
function RoutingComponent_div_13_div_16_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r32 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mode_r32);
  }
}
function RoutingComponent_div_13_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "span", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 52)(7, "div", 53)(8, "span", 54);
    \u0275\u0275text(9, "Payment Modes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275template(11, RoutingComponent_div_13_div_16_div_1_span_11_Template, 2, 1, "span", 86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 55)(13, "button", 39);
    \u0275\u0275listener("click", function RoutingComponent_div_13_div_16_div_1_Template_button_click_13_listener() {
      const p_r33 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditPartner(p_r33));
    });
    \u0275\u0275elementStart(14, "mat-icon", 40);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 43);
    \u0275\u0275listener("click", function RoutingComponent_div_13_div_16_div_1_Template_button_click_16_listener() {
      const p_r33 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePartner(p_r33));
    });
    \u0275\u0275elementStart(17, "mat-icon", 44);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 45);
    \u0275\u0275listener("click", function RoutingComponent_div_13_div_16_div_1_Template_button_click_19_listener() {
      const p_r33 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePartner(p_r33));
    });
    \u0275\u0275elementStart(20, "mat-icon", 46);
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r33 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r33.payoutAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r33.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r33.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", p_r33.paymentModeNames);
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", p_r33.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r33.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r33.isActive ? "toggle_on" : "toggle_off");
  }
}
function RoutingComponent_div_13_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275template(1, RoutingComponent_div_13_div_16_div_1_Template, 22, 7, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.partnerCorridor.payoutPartners);
  }
}
function RoutingComponent_div_13_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1, " No payout partners configured yet. ");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 59)(2, "h3")(3, "mat-icon", 76);
    \u0275\u0275text(4, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 11);
    \u0275\u0275listener("click", function RoutingComponent_div_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, RoutingComponent_div_13_div_9_Template, 6, 2, "div", 77);
    \u0275\u0275elementStart(10, "div", 78)(11, "button", 1);
    \u0275\u0275listener("click", function RoutingComponent_div_13_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddPartner());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Add Partner ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, RoutingComponent_div_13_div_15_Template, 16, 5, "div", 79)(16, RoutingComponent_div_13_div_16_Template, 2, 1, "div", 80)(17, RoutingComponent_div_13_div_17_Template, 2, 0, "div", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate4(" Payout Partners \u2014 ", ctx_r1.partnerCorridor.sourceCountry, " (", ctx_r1.partnerCorridor.sourceCurrency, ") \u2192 ", ctx_r1.partnerCorridor.destinationCountry, " (", ctx_r1.partnerCorridor.destinationCurrency, ") ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.partnerMessage);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.partnerCorridor.payoutPartners == null ? null : ctx_r1.partnerCorridor.payoutPartners.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.partnerCorridor.payoutPartners == null ? null : ctx_r1.partnerCorridor.payoutPartners.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.partnerCorridor.payoutPartners == null ? null : ctx_r1.partnerCorridor.payoutPartners.length));
  }
}
function RoutingComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275listener("click", function RoutingComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerForm());
    });
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.partnerFormError);
  }
}
function RoutingComponent_div_15_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r36 = ctx.$implicit;
    \u0275\u0275property("value", a_r36.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r36.businessName);
  }
}
function RoutingComponent_div_15_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r37 = ctx.$implicit;
    \u0275\u0275property("value", pm_r37.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r37.name);
  }
}
function RoutingComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 59)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function RoutingComponent_div_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerForm());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, RoutingComponent_div_15_div_7_Template, 2, 1, "div", 60);
    \u0275\u0275elementStart(8, "mat-form-field", 62)(9, "mat-label");
    \u0275\u0275text(10, "Payout Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_15_Template_mat_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.partnerForm.payoutAgentId, $event) || (ctx_r1.partnerForm.payoutAgentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(12, RoutingComponent_div_15_mat_option_12_Template, 2, 2, "mat-option", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 92)(14, "mat-label");
    \u0275\u0275text(15, "Payment Modes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-select", 93);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_15_Template_mat_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.partnerForm.paymentModeIds, $event) || (ctx_r1.partnerForm.paymentModeIds = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(17, RoutingComponent_div_15_mat_option_17_Template, 2, 2, "mat-option", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 68)(19, "button", 69);
    \u0275\u0275listener("click", function RoutingComponent_div_15_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerForm());
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 1);
    \u0275\u0275listener("click", function RoutingComponent_div_15_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePartner());
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Save ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingPartner ? "Edit Partner" : "Add Partner");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.partnerFormError);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.partnerForm.payoutAgentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.payoutAgents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.partnerForm.paymentModeIds);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
  }
}
function emptyCorridorForm() {
  return { sendingAgentId: null, sourceCountry: "", sourceCurrency: "", destinationCountry: "", destinationCurrency: "" };
}
function emptyPartnerForm() {
  return { payoutAgentId: null, paymentModeIds: [] };
}
var RoutingComponent = class _RoutingComponent {
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.corridors = [];
    this.filteredCorridors = [];
    this.displayedColumns = [
      "sendingAgent",
      "sourceCountry",
      "sourceCurrency",
      "destCountry",
      "destCurrency",
      "partners",
      "status",
      "actions"
    ];
    this.searchString = "";
    this.loading = true;
    this.message = "";
    this.messageSeverity = "info";
    this.sendingAgents = [];
    this.payoutAgents = [];
    this.countries = [];
    this.currencies = [];
    this.paymentMethods = [];
    this.showCorridorPopup = false;
    this.isEditingCorridor = false;
    this.editingCorridorId = 0;
    this.savingCorridor = false;
    this.corridorFormError = "";
    this.corridorForm = emptyCorridorForm();
    this.showPartnerPopup = false;
    this.partnerCorridor = null;
    this.partnerMessage = "";
    this.partnerSeverity = "info";
    this.showPartnerForm = false;
    this.isEditingPartner = false;
    this.editingPartnerId = 0;
    this.partnerFormError = "";
    this.partnerForm = emptyPartnerForm();
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadAgents();
    this.loadReferenceData();
    this.loadCorridors();
  }
  // ---------------------------------------------------------------------------
  // Reference data
  // ---------------------------------------------------------------------------
  loadReferenceData() {
    this.api.getCountries().subscribe((r) => {
      if (r?.success && r.data)
        this.countries = r.data;
    });
    this.api.getCurrencies().subscribe((r) => {
      if (r?.success && r.data)
        this.currencies = r.data;
    });
    this.api.getPaymentMethods().subscribe((r) => {
      if (r?.success && r.data)
        this.paymentMethods = r.data;
    });
  }
  loadAgents() {
    this.api.getAgents().subscribe((r) => {
      if (r?.success && r.data) {
        this.sendingAgents = r.data.filter((a) => a.agentType === "SendingAgent");
        this.payoutAgents = r.data.filter((a) => a.agentType === "PayoutAgent");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Corridors CRUD
  // ---------------------------------------------------------------------------
  loadCorridors() {
    this.loading = true;
    this.api.getCorridors().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.corridors = res.data;
          this.applyFilter();
        } else {
          this.corridors = [];
          this.filteredCorridors = [];
          this.message = res?.message || "Failed to load corridors.";
          this.messageSeverity = "error";
        }
        this.loading = false;
      },
      error: () => {
        this.corridors = [];
        this.filteredCorridors = [];
        this.message = "Could not connect to server.";
        this.messageSeverity = "error";
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const s = this.searchString.toLowerCase();
    this.filteredCorridors = !s ? [...this.corridors] : this.corridors.filter((c) => (c.sendingAgentName || "").toLowerCase().includes(s) || c.sourceCountry.toLowerCase().includes(s) || c.destinationCountry.toLowerCase().includes(s) || c.sourceCurrency.toLowerCase().includes(s) || c.destinationCurrency.toLowerCase().includes(s));
  }
  clearMessage() {
    this.message = "";
  }
  // ---------------------------------------------------------------------------
  // Corridor Create / Edit popup
  // ---------------------------------------------------------------------------
  openCreateCorridor() {
    this.corridorForm = emptyCorridorForm();
    this.isEditingCorridor = false;
    this.editingCorridorId = 0;
    this.corridorFormError = "";
    this.showCorridorPopup = true;
  }
  openEditCorridor(c) {
    this.corridorForm = {
      sendingAgentId: c.sendingAgentId ?? null,
      sourceCountry: c.sourceCountry,
      sourceCurrency: c.sourceCurrency,
      destinationCountry: c.destinationCountry,
      destinationCurrency: c.destinationCurrency
    };
    this.isEditingCorridor = true;
    this.editingCorridorId = c.id;
    this.corridorFormError = "";
    this.showCorridorPopup = true;
  }
  closeCorridorPopup() {
    this.showCorridorPopup = false;
  }
  saveCorridor() {
    this.corridorFormError = "";
    const f = this.corridorForm;
    if (!f.sourceCountry || !f.sourceCurrency || !f.destinationCountry || !f.destinationCurrency) {
      this.corridorFormError = "All country and currency fields are required.";
      return;
    }
    this.savingCorridor = true;
    const dto = {
      sendingAgentId: f.sendingAgentId,
      sourceCountry: f.sourceCountry,
      sourceCurrency: f.sourceCurrency,
      destinationCountry: f.destinationCountry,
      destinationCurrency: f.destinationCurrency
    };
    const obs = this.isEditingCorridor ? this.api.updateCorridor(this.editingCorridorId, dto) : this.api.createCorridor(dto);
    obs.subscribe({
      next: (res) => {
        if (res?.success) {
          this.message = this.isEditingCorridor ? "Corridor updated." : "Corridor created.";
          this.messageSeverity = "success";
          this.showCorridorPopup = false;
          this.loadCorridors();
        } else {
          this.corridorFormError = res?.message || "Failed.";
        }
        this.savingCorridor = false;
      },
      error: () => {
        this.corridorFormError = "Server error.";
        this.savingCorridor = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Toggle / Delete corridor
  // ---------------------------------------------------------------------------
  toggleCorridor(c) {
    this.api.toggleCorridor(c.id).subscribe((r) => {
      if (r?.success) {
        this.message = `Corridor ${c.isActive ? "deactivated" : "activated"}.`;
        this.messageSeverity = "success";
        this.loadCorridors();
      } else {
        this.message = r?.message || "Failed.";
        this.messageSeverity = "error";
      }
    });
  }
  deleteCorridor(c) {
    this.api.deleteCorridor(c.id).subscribe((r) => {
      if (r?.success) {
        this.message = "Corridor deleted.";
        this.messageSeverity = "success";
        this.loadCorridors();
      } else {
        this.message = r?.message || "Failed.";
        this.messageSeverity = "error";
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Partner Management popup
  // ---------------------------------------------------------------------------
  openPartnerManagement(corridor) {
    this.partnerCorridor = corridor;
    this.partnerMessage = "";
    this.showPartnerForm = false;
    this.showPartnerPopup = true;
  }
  closePartnerPopup() {
    this.showPartnerPopup = false;
  }
  // ---------------------------------------------------------------------------
  // Partner CRUD
  // ---------------------------------------------------------------------------
  openAddPartner() {
    this.partnerForm = emptyPartnerForm();
    this.isEditingPartner = false;
    this.editingPartnerId = 0;
    this.partnerFormError = "";
    this.showPartnerForm = true;
  }
  openEditPartner(p) {
    this.partnerForm = {
      payoutAgentId: p.payoutAgentId,
      paymentModeIds: [...p.paymentModeIds]
    };
    this.isEditingPartner = true;
    this.editingPartnerId = p.id;
    this.partnerFormError = "";
    this.showPartnerForm = true;
  }
  closePartnerForm() {
    this.showPartnerForm = false;
  }
  savePartner() {
    this.partnerFormError = "";
    if (!this.partnerForm.payoutAgentId) {
      this.partnerFormError = "Payout Agent is required.";
      return;
    }
    if (!this.partnerForm.paymentModeIds.length) {
      this.partnerFormError = "Select at least one payment mode.";
      return;
    }
    const dto = {
      paymentCorridorId: this.partnerCorridor?.id,
      payoutAgentId: this.partnerForm.payoutAgentId,
      paymentModeIds: this.partnerForm.paymentModeIds
    };
    const done = (msg) => {
      this.partnerMessage = msg;
      this.partnerSeverity = "success";
      this.showPartnerForm = false;
      this.refreshPartnerCorridor();
    };
    if (this.isEditingPartner) {
      this.api.updateCorridorPartner(this.editingPartnerId, dto).subscribe((r) => {
        if (r?.success)
          done("Partner updated.");
        else
          this.partnerFormError = r?.message || "Failed.";
      });
    } else {
      this.api.addCorridorPartner(dto).subscribe((r) => {
        if (r?.success)
          done("Partner added.");
        else
          this.partnerFormError = r?.message || "Failed.";
      });
    }
  }
  togglePartner(p) {
    this.api.toggleCorridorPartner(p.id).subscribe((r) => {
      if (r?.success) {
        this.partnerMessage = `Partner ${p.isActive ? "deactivated" : "activated"}.`;
        this.partnerSeverity = "success";
        this.refreshPartnerCorridor();
      } else {
        this.partnerMessage = r?.message || "Failed.";
        this.partnerSeverity = "error";
      }
    });
  }
  deletePartner(p) {
    this.api.deleteCorridorPartner(p.id).subscribe((r) => {
      if (r?.success) {
        this.partnerMessage = "Partner deleted.";
        this.partnerSeverity = "success";
        this.refreshPartnerCorridor();
      } else {
        this.partnerMessage = r?.message || "Failed.";
        this.partnerSeverity = "error";
      }
    });
  }
  refreshPartnerCorridor() {
    this.api.getCorridors().subscribe((r) => {
      if (r?.success && r.data) {
        this.corridors = r.data;
        this.applyFilter();
        if (this.partnerCorridor) {
          this.partnerCorridor = this.corridors.find((c) => c.id === this.partnerCorridor.id) ?? null;
        }
      }
    });
  }
  static {
    this.\u0275fac = function RoutingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutingComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoutingComponent, selectors: [["app-routing"]], decls: 16, vars: 9, consts: [[1, "page-header"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "alert-banner", 3, "ngClass", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "popup popup-xl", 4, "ngIf"], ["class", "overlay overlay-upper", 3, "click", 4, "ngIf"], ["class", "popup popup-md popup-upper", 4, "ngIf"], [1, "alert-banner", 3, "ngClass"], ["mat-icon-button", "", 3, "click"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search corridors...", 3, "ngModelChange", "ngModel"], [1, "table-scroll-wrapper"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "sendingAgent"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sourceCountry"], ["matColumnDef", "sourceCurrency"], ["matColumnDef", "destCountry"], ["matColumnDef", "destCurrency"], ["matColumnDef", "partners"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "mobile-cards"], ["class", "mobile-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", "chip-info"], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Manage Partners", 3, "click"], [1, "text-tertiary"], ["mat-icon-button", "", 3, "click", "matTooltip"], [3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "mobile-card"], [1, "mobile-card-header"], [1, "mobile-card-title"], [1, "mobile-card-body"], [1, "mobile-card-row"], [1, "mobile-card-label"], [1, "mobile-card-actions"], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-grid"], ["appearance", "outline", 1, "full-width"], ["searchable", "", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["searchable", "", "required", "", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], ["diameter", "18", 1, "inline-spinner"], [1, "popup", "popup-xl"], [1, "header-icon"], ["class", "alert-banner inline-alert", 3, "ngClass", 4, "ngIf"], [1, "popup-toolbar"], ["class", "table-scroll-wrapper", 4, "ngIf"], ["class", "mobile-cards mobile-cards-inner", 4, "ngIf"], ["class", "empty-state-info", 4, "ngIf"], [1, "alert-banner", "inline-alert", 3, "ngClass"], ["mat-table", "", 1, "inner-table", 3, "dataSource"], ["matColumnDef", "payoutAgent"], ["matColumnDef", "paymentModes"], ["class", "chip chip-info mode-chip", 4, "ngFor", "ngForOf"], [1, "chip", "chip-info", "mode-chip"], [1, "mobile-cards", "mobile-cards-inner"], [1, "empty-state-info"], [1, "overlay", "overlay-upper", 3, "click"], [1, "popup", "popup-md", "popup-upper"], ["appearance", "outline", 1, "full-width", "mt-16"], ["searchable", "", "multiple", "", "required", "", 3, "ngModelChange", "ngModel"]], template: function RoutingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Payment Corridor Routing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 1);
        \u0275\u0275listener("click", function RoutingComponent_Template_button_click_3_listener() {
          return ctx.openCreateCorridor();
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Add Corridor ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, RoutingComponent_div_7_Template, 6, 2, "div", 2)(8, RoutingComponent_div_8_Template, 2, 0, "div", 3)(9, RoutingComponent_mat_card_9_Template, 36, 6, "mat-card", 4)(10, RoutingComponent_div_10_Template, 1, 0, "div", 5)(11, RoutingComponent_div_11_Template, 45, 17, "div", 6)(12, RoutingComponent_div_12_Template, 1, 0, "div", 5)(13, RoutingComponent_div_13_Template, 18, 8, "div", 7)(14, RoutingComponent_div_14_Template, 1, 0, "div", 8)(15, RoutingComponent_div_15_Template, 27, 6, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.message);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCorridorPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCorridorPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPartnerPopup && ctx.partnerCorridor);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPartnerPopup && ctx.partnerCorridor);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPartnerForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPartnerForm);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner, SearchableSelectDirective], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert-banner.alert-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.alert-banner.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.alert-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.alert-banner.alert-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.alert-banner.inline-alert[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 16px;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 320px;\n  max-width: 100%;\n  margin-bottom: 8px;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.table-scroll-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.data-table[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 700px;\n}\n.data-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.inner-table[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n  min-width: 500px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 14px;\n}\n.empty-state-info[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: rgba(0, 0, 0, 0.5);\n  background: #e3f2fd;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 20px;\n}\n.chip.chip-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-tertiary[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.chip.chip-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.mode-chip[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  margin-bottom: 2px;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #2e7d32 !important;\n}\n.text-error[_ngcontent-%COMP%] {\n  color: #c62828 !important;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #e65100 !important;\n}\n.text-tertiary[_ngcontent-%COMP%] {\n  color: #7b1fa2 !important;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n}\n.overlay.overlay-upper[_ngcontent-%COMP%] {\n  z-index: 10010;\n}\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-md[_ngcontent-%COMP%] {\n  width: 600px;\n  max-width: calc(100vw - 32px);\n}\n.popup.popup-xl[_ngcontent-%COMP%] {\n  width: 950px;\n  max-width: calc(100vw - 32px);\n}\n.popup.popup-upper[_ngcontent-%COMP%] {\n  z-index: 10011;\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  gap: 8px;\n}\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: wrap;\n  word-break: break-word;\n}\n.header-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-right: 4px;\n}\n.popup-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n.popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n  flex-wrap: wrap;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.inline-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.mobile-cards[_ngcontent-%COMP%] {\n  display: none;\n}\n.mobile-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 14px;\n  margin-bottom: 12px;\n  background: #fff;\n  transition: box-shadow 0.2s ease;\n}\n.mobile-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.mobile-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  gap: 8px;\n}\n.mobile-card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #0f172a;\n}\n.mobile-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.mobile-card-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  color: #334155;\n  gap: 8px;\n}\n.mobile-card-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.mobile-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 2px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 8px;\n}\n@media (max-width: 1024px) {\n  .popup[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .table-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .popup[_ngcontent-%COMP%] {\n    padding: 16px;\n    left: 50%;\n    width: calc(100vw - 24px) !important;\n    max-width: calc(100vw - 24px) !important;\n  }\n  .popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 640px) {\n  .table-scroll-wrapper[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-cards[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .mobile-cards-inner[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=routing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutingComponent, [{
    type: Component,
    args: [{ selector: "app-routing", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCardModule,
      MatProgressSpinnerModule,
      SearchableSelectDirective
    ], template: `<!-- Page Header -->\r
<div class="page-header">\r
  <h2>Payment Corridor Routing</h2>\r
  <button mat-raised-button color="primary" (click)="openCreateCorridor()">\r
    <mat-icon>add</mat-icon> Add Corridor\r
  </button>\r
</div>\r
\r
<!-- Alert Message -->\r
<div *ngIf="message" class="alert-banner" [ngClass]="'alert-' + messageSeverity">\r
  <span>{{ message }}</span>\r
  <button mat-icon-button (click)="clearMessage()"><mat-icon>close</mat-icon></button>\r
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
    <input matInput placeholder="Search corridors..." [(ngModel)]="searchString" (ngModelChange)="applyFilter()" />\r
  </mat-form-field>\r
\r
  <!-- Desktop / Tablet: scrollable table -->\r
  <div class="table-scroll-wrapper">\r
    <table mat-table [dataSource]="filteredCorridors" class="data-table">\r
      <ng-container matColumnDef="sendingAgent">\r
        <th mat-header-cell *matHeaderCellDef>Sending Agent</th>\r
        <td mat-cell *matCellDef="let c">{{ c.sendingAgentName || 'All' }}</td>\r
      </ng-container>\r
\r
      <ng-container matColumnDef="sourceCountry">\r
        <th mat-header-cell *matHeaderCellDef>Source Country</th>\r
        <td mat-cell *matCellDef="let c">{{ c.sourceCountry }}</td>\r
      </ng-container>\r
\r
      <ng-container matColumnDef="sourceCurrency">\r
        <th mat-header-cell *matHeaderCellDef>Source Currency</th>\r
        <td mat-cell *matCellDef="let c">{{ c.sourceCurrency }}</td>\r
      </ng-container>\r
\r
      <ng-container matColumnDef="destCountry">\r
        <th mat-header-cell *matHeaderCellDef>Dest Country</th>\r
        <td mat-cell *matCellDef="let c">{{ c.destinationCountry }}</td>\r
      </ng-container>\r
\r
      <ng-container matColumnDef="destCurrency">\r
        <th mat-header-cell *matHeaderCellDef>Dest Currency</th>\r
        <td mat-cell *matCellDef="let c">{{ c.destinationCurrency }}</td>\r
      </ng-container>\r
\r
      <ng-container matColumnDef="partners">\r
        <th mat-header-cell *matHeaderCellDef>Partners</th>\r
        <td mat-cell *matCellDef="let c">\r
          <span class="chip chip-info">{{ c.payoutPartners?.length || 0 }}</span>\r
        </td>\r
      </ng-container>\r
\r
      <ng-container matColumnDef="status">\r
        <th mat-header-cell *matHeaderCellDef>Status</th>\r
        <td mat-cell *matCellDef="let c">\r
          <span class="chip" [ngClass]="c.isActive ? 'chip-success' : 'chip-default'">\r
            {{ c.isActive ? 'Active' : 'Inactive' }}\r
          </span>\r
        </td>\r
      </ng-container>\r
\r
      <ng-container matColumnDef="actions">\r
        <th mat-header-cell *matHeaderCellDef>Actions</th>\r
        <td mat-cell *matCellDef="let c">\r
          <button mat-icon-button matTooltip="Edit" (click)="openEditCorridor(c)">\r
            <mat-icon color="primary">edit</mat-icon>\r
          </button>\r
          <button mat-icon-button matTooltip="Manage Partners" (click)="openPartnerManagement(c)">\r
            <mat-icon class="text-tertiary">people</mat-icon>\r
          </button>\r
          <button mat-icon-button [matTooltip]="c.isActive ? 'Deactivate' : 'Activate'" (click)="toggleCorridor(c)">\r
            <mat-icon [ngClass]="c.isActive ? 'text-success' : ''">{{ c.isActive ? 'toggle_on' : 'toggle_off'\r
              }}</mat-icon>\r
          </button>\r
          <button mat-icon-button matTooltip="Delete" (click)="deleteCorridor(c)">\r
            <mat-icon color="warn">delete</mat-icon>\r
          </button>\r
        </td>\r
      </ng-container>\r
\r
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
    </table>\r
  </div>\r
\r
  <!-- Mobile: card layout -->\r
  <div class="mobile-cards">\r
    <div *ngFor="let c of filteredCorridors" class="mobile-card">\r
      <div class="mobile-card-header">\r
        <span class="mobile-card-title">{{ c.sourceCountry }} &rarr; {{ c.destinationCountry }}</span>\r
        <span class="chip" [ngClass]="c.isActive ? 'chip-success' : 'chip-default'">\r
          {{ c.isActive ? 'Active' : 'Inactive' }}\r
        </span>\r
      </div>\r
      <div class="mobile-card-body">\r
        <div class="mobile-card-row">\r
          <span class="mobile-card-label">Sending Agent</span>\r
          <span>{{ c.sendingAgentName || 'All' }}</span>\r
        </div>\r
        <div class="mobile-card-row">\r
          <span class="mobile-card-label">Currency</span>\r
          <span>{{ c.sourceCurrency }} &rarr; {{ c.destinationCurrency }}</span>\r
        </div>\r
        <div class="mobile-card-row">\r
          <span class="mobile-card-label">Partners</span>\r
          <span class="chip chip-info">{{ c.payoutPartners?.length || 0 }}</span>\r
        </div>\r
      </div>\r
      <div class="mobile-card-actions">\r
        <button mat-icon-button matTooltip="Edit" (click)="openEditCorridor(c)">\r
          <mat-icon color="primary">edit</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Manage Partners" (click)="openPartnerManagement(c)">\r
          <mat-icon class="text-tertiary">people</mat-icon>\r
        </button>\r
        <button mat-icon-button [matTooltip]="c.isActive ? 'Deactivate' : 'Activate'" (click)="toggleCorridor(c)">\r
          <mat-icon [ngClass]="c.isActive ? 'text-success' : ''">{{ c.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deleteCorridor(c)">\r
          <mat-icon color="warn">delete</mat-icon>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="!filteredCorridors.length && !loading" class="empty-state">\r
    No corridors found.\r
  </div>\r
</mat-card>\r
\r
<!-- ============================================================ -->\r
<!-- Create / Edit Corridor Popup                                  -->\r
<!-- ============================================================ -->\r
<div *ngIf="showCorridorPopup" class="overlay" (click)="closeCorridorPopup()"></div>\r
<div *ngIf="showCorridorPopup" class="popup popup-md">\r
  <div class="popup-header">\r
    <h3>{{ isEditingCorridor ? 'Edit Corridor' : 'Create Corridor' }}</h3>\r
    <button mat-icon-button (click)="closeCorridorPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="corridorFormError" class="alert-banner alert-error inline-alert">{{ corridorFormError }}</div>\r
\r
  <div class="form-grid">\r
    <!-- Sending Agent -->\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Sending Agent (optional)</mat-label>\r
      <mat-select searchable [(ngModel)]="corridorForm.sendingAgentId">\r
        <mat-option [value]="null">All</mat-option>\r
        <mat-option *ngFor="let a of sendingAgents" [value]="a.id">{{ a.businessName }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Source Country -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Source Country *</mat-label>\r
      <mat-select searchable [(ngModel)]="corridorForm.sourceCountry" required>\r
        <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Source Currency -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Source Currency *</mat-label>\r
      <mat-select searchable [(ngModel)]="corridorForm.sourceCurrency" required>\r
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Destination Country -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Destination Country *</mat-label>\r
      <mat-select searchable [(ngModel)]="corridorForm.destinationCountry" required>\r
        <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <!-- Destination Currency -->\r
    <mat-form-field appearance="outline">\r
      <mat-label>Destination Currency *</mat-label>\r
      <mat-select searchable [(ngModel)]="corridorForm.destinationCurrency" required>\r
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
  </div>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeCorridorPopup()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="saveCorridor()" [disabled]="savingCorridor">\r
      <mat-spinner *ngIf="savingCorridor" diameter="18" class="inline-spinner"></mat-spinner>\r
      <mat-icon *ngIf="!savingCorridor">save</mat-icon> {{ isEditingCorridor ? 'Update' : 'Create' }}\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Payout Partners Management Popup                              -->\r
<!-- ============================================================ -->\r
<div *ngIf="showPartnerPopup && partnerCorridor" class="overlay" (click)="closePartnerPopup()"></div>\r
<div *ngIf="showPartnerPopup && partnerCorridor" class="popup popup-xl">\r
  <div class="popup-header">\r
    <h3>\r
      <mat-icon class="header-icon">people</mat-icon>\r
      Payout Partners &mdash; {{ partnerCorridor.sourceCountry }} ({{ partnerCorridor.sourceCurrency }})\r
      &rarr; {{ partnerCorridor.destinationCountry }} ({{ partnerCorridor.destinationCurrency }})\r
    </h3>\r
    <button mat-icon-button (click)="closePartnerPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="partnerMessage" class="alert-banner inline-alert" [ngClass]="'alert-' + partnerSeverity">\r
    <span>{{ partnerMessage }}</span>\r
    <button mat-icon-button (click)="partnerMessage = ''"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div class="popup-toolbar">\r
    <button mat-raised-button color="primary" (click)="openAddPartner()">\r
      <mat-icon>add</mat-icon> Add Partner\r
    </button>\r
  </div>\r
\r
  <!-- Desktop: partner table -->\r
  <div class="table-scroll-wrapper" *ngIf="partnerCorridor.payoutPartners?.length">\r
    <table mat-table [dataSource]="partnerCorridor.payoutPartners" class="inner-table">\r
      <ng-container matColumnDef="payoutAgent">\r
        <th mat-header-cell *matHeaderCellDef>Payout Agent</th>\r
        <td mat-cell *matCellDef="let p">{{ p.payoutAgentName }}</td>\r
      </ng-container>\r
\r
      <ng-container matColumnDef="paymentModes">\r
        <th mat-header-cell *matHeaderCellDef>Payment Modes</th>\r
        <td mat-cell *matCellDef="let p">\r
          <span *ngFor="let mode of p.paymentModeNames" class="chip chip-info mode-chip">{{ mode }}</span>\r
        </td>\r
      </ng-container>\r
\r
      <ng-container matColumnDef="status">\r
        <th mat-header-cell *matHeaderCellDef>Status</th>\r
        <td mat-cell *matCellDef="let p">\r
          <span class="chip" [ngClass]="p.isActive ? 'chip-success' : 'chip-default'">\r
            {{ p.isActive ? 'Active' : 'Inactive' }}\r
          </span>\r
        </td>\r
      </ng-container>\r
\r
      <ng-container matColumnDef="actions">\r
        <th mat-header-cell *matHeaderCellDef>Actions</th>\r
        <td mat-cell *matCellDef="let p">\r
          <button mat-icon-button matTooltip="Edit" (click)="openEditPartner(p)">\r
            <mat-icon color="primary">edit</mat-icon>\r
          </button>\r
          <button mat-icon-button [matTooltip]="p.isActive ? 'Deactivate' : 'Activate'" (click)="togglePartner(p)">\r
            <mat-icon [ngClass]="p.isActive ? 'text-success' : ''">{{ p.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>\r
          </button>\r
          <button mat-icon-button matTooltip="Delete" (click)="deletePartner(p)">\r
            <mat-icon color="warn">delete</mat-icon>\r
          </button>\r
        </td>\r
      </ng-container>\r
\r
      <tr mat-header-row *matHeaderRowDef="['payoutAgent','paymentModes','status','actions']"></tr>\r
      <tr mat-row *matRowDef="let row; columns: ['payoutAgent','paymentModes','status','actions'];"></tr>\r
    </table>\r
  </div>\r
\r
  <!-- Mobile: partner cards -->\r
  <div class="mobile-cards mobile-cards-inner" *ngIf="partnerCorridor.payoutPartners?.length">\r
    <div *ngFor="let p of partnerCorridor.payoutPartners" class="mobile-card">\r
      <div class="mobile-card-header">\r
        <span class="mobile-card-title">{{ p.payoutAgentName }}</span>\r
        <span class="chip" [ngClass]="p.isActive ? 'chip-success' : 'chip-default'">\r
          {{ p.isActive ? 'Active' : 'Inactive' }}\r
        </span>\r
      </div>\r
      <div class="mobile-card-body">\r
        <div class="mobile-card-row">\r
          <span class="mobile-card-label">Payment Modes</span>\r
          <span>\r
            <span *ngFor="let mode of p.paymentModeNames" class="chip chip-info mode-chip">{{ mode }}</span>\r
          </span>\r
        </div>\r
      </div>\r
      <div class="mobile-card-actions">\r
        <button mat-icon-button matTooltip="Edit" (click)="openEditPartner(p)">\r
          <mat-icon color="primary">edit</mat-icon>\r
        </button>\r
        <button mat-icon-button [matTooltip]="p.isActive ? 'Deactivate' : 'Activate'" (click)="togglePartner(p)">\r
          <mat-icon [ngClass]="p.isActive ? 'text-success' : ''">{{ p.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deletePartner(p)">\r
          <mat-icon color="warn">delete</mat-icon>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="!partnerCorridor.payoutPartners?.length" class="empty-state-info">\r
    No payout partners configured yet.\r
  </div>\r
</div>\r
\r
<!-- Partner Add/Edit Form -->\r
<div *ngIf="showPartnerForm" class="overlay overlay-upper" (click)="closePartnerForm()"></div>\r
<div *ngIf="showPartnerForm" class="popup popup-md popup-upper">\r
  <div class="popup-header">\r
    <h3>{{ isEditingPartner ? 'Edit Partner' : 'Add Partner' }}</h3>\r
    <button mat-icon-button (click)="closePartnerForm()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="partnerFormError" class="alert-banner alert-error inline-alert">{{ partnerFormError }}</div>\r
\r
  <mat-form-field appearance="outline" class="full-width">\r
    <mat-label>Payout Agent</mat-label>\r
    <mat-select searchable [(ngModel)]="partnerForm.payoutAgentId" required>\r
      <mat-option *ngFor="let a of payoutAgents" [value]="a.id">{{ a.businessName }}</mat-option>\r
    </mat-select>\r
  </mat-form-field>\r
\r
  <mat-form-field appearance="outline" class="full-width mt-16">\r
    <mat-label>Payment Modes</mat-label>\r
    <mat-select searchable [(ngModel)]="partnerForm.paymentModeIds" multiple required>\r
      <mat-option *ngFor="let pm of paymentMethods" [value]="pm.id">{{ pm.name }}</mat-option>\r
    </mat-select>\r
  </mat-form-field>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closePartnerForm()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="savePartner()">\r
      <mat-icon>save</mat-icon> Save\r
    </button>\r
  </div>\r
</div>`, styles: ["/* src/app/pages/admin/routing/routing.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-header h2 {\n  font-weight: 700;\n  margin: 0;\n}\n.alert-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert-banner.alert-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.alert-banner.alert-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.alert-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.alert-banner.alert-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.alert-banner.inline-alert {\n  margin-bottom: 12px;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card {\n  border-radius: 12px;\n  padding: 16px;\n}\n.search-field {\n  width: 320px;\n  max-width: 100%;\n  margin-bottom: 8px;\n}\n.search-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.table-scroll-wrapper {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.data-table,\n.inner-table {\n  width: 100%;\n  min-width: 700px;\n}\n.data-table th.mat-mdc-header-cell,\n.inner-table th.mat-mdc-header-cell {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n  white-space: nowrap;\n}\n.data-table td.mat-mdc-cell,\n.inner-table td.mat-mdc-cell {\n  white-space: nowrap;\n}\n.inner-table {\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n  min-width: 500px;\n}\n.empty-state {\n  text-align: center;\n  padding: 32px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 14px;\n}\n.empty-state-info {\n  text-align: center;\n  padding: 24px;\n  color: rgba(0, 0, 0, 0.5);\n  background: #e3f2fd;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 20px;\n}\n.chip.chip-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-tertiary {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.chip.chip-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.mode-chip {\n  margin-right: 4px;\n  margin-bottom: 2px;\n}\n.text-success {\n  color: #2e7d32 !important;\n}\n.text-error {\n  color: #c62828 !important;\n}\n.text-warning {\n  color: #e65100 !important;\n}\n.text-tertiary {\n  color: #7b1fa2 !important;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n}\n.overlay.overlay-upper {\n  z-index: 10010;\n}\n.popup {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-md {\n  width: 600px;\n  max-width: calc(100vw - 32px);\n}\n.popup.popup-xl {\n  width: 950px;\n  max-width: calc(100vw - 32px);\n}\n.popup.popup-upper {\n  z-index: 10011;\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  gap: 8px;\n}\n.popup-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: wrap;\n  word-break: break-word;\n}\n.header-icon {\n  font-size: 22px;\n  margin-right: 4px;\n}\n.popup-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n.popup-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n  flex-wrap: wrap;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-grid .full-width {\n  grid-column: 1/-1;\n}\n@media (max-width: 600px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.full-width {\n  width: 100%;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.inline-spinner {\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.mobile-cards {\n  display: none;\n}\n.mobile-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 14px;\n  margin-bottom: 12px;\n  background: #fff;\n  transition: box-shadow 0.2s ease;\n}\n.mobile-card:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.mobile-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  gap: 8px;\n}\n.mobile-card-title {\n  font-weight: 600;\n  font-size: 14px;\n  color: #0f172a;\n}\n.mobile-card-body {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.mobile-card-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  color: #334155;\n  gap: 8px;\n}\n.mobile-card-label {\n  font-weight: 500;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.mobile-card-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 2px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 8px;\n}\n@media (max-width: 1024px) {\n  .popup {\n    left: 50%;\n  }\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-header button {\n    align-self: flex-start;\n  }\n  .search-field {\n    width: 100%;\n  }\n  .table-card {\n    padding: 12px;\n  }\n  .popup {\n    padding: 16px;\n    left: 50%;\n    width: calc(100vw - 24px) !important;\n    max-width: calc(100vw - 24px) !important;\n  }\n  .popup-header h3 {\n    font-size: 16px;\n  }\n}\n@media (max-width: 640px) {\n  .table-scroll-wrapper {\n    display: none;\n  }\n  .mobile-cards {\n    display: block;\n  }\n  .mobile-cards-inner {\n    display: block;\n  }\n}\n/*# sourceMappingURL=routing.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoutingComponent, { className: "RoutingComponent", filePath: "src/app/pages/admin/routing/routing.component.ts", lineNumber: 62 });
})();
export {
  RoutingComponent
};
//# sourceMappingURL=chunk-KZFYHXDC.js.map
