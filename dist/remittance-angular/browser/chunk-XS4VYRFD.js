import {
  SearchableSelectDirective
} from "./chunk-VOSK6FN3.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-IXW56OZ7.js";
import {
  ExportService
} from "./chunk-BWFLUKJM.js";
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
  RequiredValidator
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
} from "./chunk-BKSYICRS.js";

// src/app/pages/admin/routing/routing.component.ts
var _c0 = () => [10, 20, 50, 100];
var _c1 = () => [];
var _c2 = () => ["payoutAgent", "paymentModes", "status", "actions"];
function RoutingComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_17_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Sending Agent");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_17_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.sendingAgentName || "All");
  }
}
function RoutingComponent_mat_card_17_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Source Country");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_17_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.sourceCountry);
  }
}
function RoutingComponent_mat_card_17_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Source Currency");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_17_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.sourceCurrency);
  }
}
function RoutingComponent_mat_card_17_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Dest Country");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_17_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.destinationCountry);
  }
}
function RoutingComponent_mat_card_17_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Dest Currency");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_17_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7.destinationCurrency);
  }
}
function RoutingComponent_mat_card_17_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Partners");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_17_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((c_r8.payoutPartners == null ? null : c_r8.payoutPartners.length) || 0);
  }
}
function RoutingComponent_mat_card_17_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_17_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r9.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r9.isActive ? "Active" : "Inactive", " ");
  }
}
function RoutingComponent_mat_card_17_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_17_td_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 36)(1, "button", 39);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_17_td_30_Template_button_click_1_listener() {
      const c_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditCorridor(c_r11));
    });
    \u0275\u0275elementStart(2, "mat-icon", 40);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_17_td_30_Template_button_click_4_listener() {
      const c_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPartnerManagement(c_r11));
    });
    \u0275\u0275elementStart(5, "mat-icon", 42);
    \u0275\u0275text(6, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 43);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_17_td_30_Template_button_click_7_listener() {
      const c_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCorridor(c_r11));
    });
    \u0275\u0275elementStart(8, "mat-icon", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 45);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_17_td_30_Template_button_click_10_listener() {
      const c_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCorridor(c_r11));
    });
    \u0275\u0275elementStart(11, "mat-icon", 46);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", c_r11.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r11.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r11.isActive ? "toggle_on" : "toggle_off");
  }
}
function RoutingComponent_mat_card_17_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 47);
  }
}
function RoutingComponent_mat_card_17_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function RoutingComponent_mat_card_17_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
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
    \u0275\u0275listener("click", function RoutingComponent_mat_card_17_div_34_Template_button_click_23_listener() {
      const c_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditCorridor(c_r13));
    });
    \u0275\u0275elementStart(24, "mat-icon", 40);
    \u0275\u0275text(25, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 41);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_17_div_34_Template_button_click_26_listener() {
      const c_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPartnerManagement(c_r13));
    });
    \u0275\u0275elementStart(27, "mat-icon", 42);
    \u0275\u0275text(28, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 43);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_17_div_34_Template_button_click_29_listener() {
      const c_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCorridor(c_r13));
    });
    \u0275\u0275elementStart(30, "mat-icon", 44);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 45);
    \u0275\u0275listener("click", function RoutingComponent_mat_card_17_div_34_Template_button_click_32_listener() {
      const c_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCorridor(c_r13));
    });
    \u0275\u0275elementStart(33, "mat-icon", 46);
    \u0275\u0275text(34, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r13.sourceCountry, " \u2192 ", c_r13.destinationCountry, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r13.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r13.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r13.sendingAgentName || "All");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", c_r13.sourceCurrency, " \u2192 ", c_r13.destinationCurrency, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((c_r13.payoutPartners == null ? null : c_r13.payoutPartners.length) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("matTooltip", c_r13.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r13.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r13.isActive ? "toggle_on" : "toggle_off");
  }
}
function RoutingComponent_mat_card_17_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " No corridors found. ");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_mat_card_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 13)(1, "mat-form-field", 14)(2, "mat-icon", 15);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_mat_card_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RoutingComponent_mat_card_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchDebounce.next($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 17)(6, "table", 18);
    \u0275\u0275elementContainerStart(7, 19);
    \u0275\u0275template(8, RoutingComponent_mat_card_17_th_8_Template, 2, 0, "th", 20)(9, RoutingComponent_mat_card_17_td_9_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 22);
    \u0275\u0275template(11, RoutingComponent_mat_card_17_th_11_Template, 2, 0, "th", 20)(12, RoutingComponent_mat_card_17_td_12_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 23);
    \u0275\u0275template(14, RoutingComponent_mat_card_17_th_14_Template, 2, 0, "th", 20)(15, RoutingComponent_mat_card_17_td_15_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 24);
    \u0275\u0275template(17, RoutingComponent_mat_card_17_th_17_Template, 2, 0, "th", 20)(18, RoutingComponent_mat_card_17_td_18_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 25);
    \u0275\u0275template(20, RoutingComponent_mat_card_17_th_20_Template, 2, 0, "th", 20)(21, RoutingComponent_mat_card_17_td_21_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(22, 26);
    \u0275\u0275template(23, RoutingComponent_mat_card_17_th_23_Template, 2, 0, "th", 20)(24, RoutingComponent_mat_card_17_td_24_Template, 3, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(25, 27);
    \u0275\u0275template(26, RoutingComponent_mat_card_17_th_26_Template, 2, 0, "th", 20)(27, RoutingComponent_mat_card_17_td_27_Template, 3, 2, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(28, 28);
    \u0275\u0275template(29, RoutingComponent_mat_card_17_th_29_Template, 2, 0, "th", 20)(30, RoutingComponent_mat_card_17_td_30_Template, 13, 3, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(31, RoutingComponent_mat_card_17_tr_31_Template, 1, 0, "tr", 29)(32, RoutingComponent_mat_card_17_tr_32_Template, 1, 0, "tr", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 31);
    \u0275\u0275template(34, RoutingComponent_mat_card_17_div_34_Template, 35, 11, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, RoutingComponent_mat_card_17_div_35_Template, 2, 0, "div", 33);
    \u0275\u0275elementStart(36, "mat-paginator", 34);
    \u0275\u0275listener("page", function RoutingComponent_mat_card_17_Template_mat_paginator_page_36_listener($event) {
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
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r1.corridors);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.corridors);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.corridors.length && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r1.totalCount)("pageSize", ctx_r1.pageSize)("pageIndex", ctx_r1.pageIndex)("pageSizeOptions", \u0275\u0275pureFunction0(10, _c0));
  }
}
function RoutingComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function RoutingComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCorridorPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.corridorFormError);
  }
}
function RoutingComponent_div_19_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r16 = ctx.$implicit;
    \u0275\u0275property("value", a_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r16.businessName);
  }
}
function RoutingComponent_div_19_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
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
function RoutingComponent_div_19_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
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
function RoutingComponent_div_19_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275property("value", c_r19.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r19.name);
  }
}
function RoutingComponent_div_19_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r20 = ctx.$implicit;
    \u0275\u0275property("value", c_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r20);
  }
}
function RoutingComponent_div_19_mat_spinner_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 75);
  }
}
function RoutingComponent_div_19_mat_icon_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 60);
    \u0275\u0275listener("click", function RoutingComponent_div_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCorridorPopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, RoutingComponent_div_19_div_7_Template, 2, 1, "div", 61);
    \u0275\u0275elementStart(8, "div", 62)(9, "mat-form-field", 63)(10, "mat-label");
    \u0275\u0275text(11, "Sending Agent (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 64);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_19_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.sendingAgentId, $event) || (ctx_r1.corridorForm.sendingAgentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "mat-option", 65);
    \u0275\u0275text(14, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, RoutingComponent_div_19_mat_option_15_Template, 2, 2, "mat-option", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 67)(17, "mat-label");
    \u0275\u0275text(18, "Source Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-select", 68);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_19_Template_mat_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.sourceCountry, $event) || (ctx_r1.corridorForm.sourceCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, RoutingComponent_div_19_mat_option_20_Template, 2, 2, "mat-option", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 67)(22, "mat-label");
    \u0275\u0275text(23, "Source Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-select", 68);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_19_Template_mat_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.sourceCurrency, $event) || (ctx_r1.corridorForm.sourceCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(25, RoutingComponent_div_19_mat_option_25_Template, 2, 2, "mat-option", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 67)(27, "mat-label");
    \u0275\u0275text(28, "Destination Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-select", 68);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_19_Template_mat_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.destinationCountry, $event) || (ctx_r1.corridorForm.destinationCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(30, RoutingComponent_div_19_mat_option_30_Template, 2, 2, "mat-option", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 67)(32, "mat-label");
    \u0275\u0275text(33, "Destination Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-select", 68);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_19_Template_mat_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.corridorForm.destinationCurrency, $event) || (ctx_r1.corridorForm.destinationCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(35, RoutingComponent_div_19_mat_option_35_Template, 2, 2, "mat-option", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 69)(37, "button", 70);
    \u0275\u0275listener("click", function RoutingComponent_div_19_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCorridorPopup());
    });
    \u0275\u0275elementStart(38, "mat-icon");
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 71);
    \u0275\u0275listener("click", function RoutingComponent_div_19_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCorridor());
    });
    \u0275\u0275template(42, RoutingComponent_div_19_mat_spinner_42_Template, 1, 0, "mat-spinner", 72)(43, RoutingComponent_div_19_mat_icon_43_Template, 2, 0, "mat-icon", 73);
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
function RoutingComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function RoutingComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_21_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 60);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r23);
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
function RoutingComponent_div_21_div_15_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Payout Agent");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_21_div_15_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r24.payoutAgentName);
  }
}
function RoutingComponent_div_21_div_15_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Payment Modes");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_21_div_15_td_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mode_r25);
  }
}
function RoutingComponent_div_21_div_15_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275template(1, RoutingComponent_div_21_div_15_td_7_span_1_Template, 2, 1, "span", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r26 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", p_r26.paymentModeNames);
  }
}
function RoutingComponent_div_21_div_15_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_21_div_15_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r27 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r27.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r27.isActive ? "Active" : "Inactive", " ");
  }
}
function RoutingComponent_div_21_div_15_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_21_div_15_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 36)(1, "button", 39);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_15_td_13_Template_button_click_1_listener() {
      const p_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditPartner(p_r29));
    });
    \u0275\u0275elementStart(2, "mat-icon", 40);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_15_td_13_Template_button_click_4_listener() {
      const p_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePartner(p_r29));
    });
    \u0275\u0275elementStart(5, "mat-icon", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 45);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_15_td_13_Template_button_click_7_listener() {
      const p_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePartner(p_r29));
    });
    \u0275\u0275elementStart(8, "mat-icon", 46);
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r29 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", p_r29.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r29.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r29.isActive ? "toggle_on" : "toggle_off");
  }
}
function RoutingComponent_div_21_div_15_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 47);
  }
}
function RoutingComponent_div_21_div_15_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function RoutingComponent_div_21_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "table", 84);
    \u0275\u0275elementContainerStart(2, 85);
    \u0275\u0275template(3, RoutingComponent_div_21_div_15_th_3_Template, 2, 0, "th", 20)(4, RoutingComponent_div_21_div_15_td_4_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 86);
    \u0275\u0275template(6, RoutingComponent_div_21_div_15_th_6_Template, 2, 0, "th", 20)(7, RoutingComponent_div_21_div_15_td_7_Template, 2, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 27);
    \u0275\u0275template(9, RoutingComponent_div_21_div_15_th_9_Template, 2, 0, "th", 20)(10, RoutingComponent_div_21_div_15_td_10_Template, 3, 2, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 28);
    \u0275\u0275template(12, RoutingComponent_div_21_div_15_th_12_Template, 2, 0, "th", 20)(13, RoutingComponent_div_21_div_15_td_13_Template, 10, 3, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(14, RoutingComponent_div_21_div_15_tr_14_Template, 1, 0, "tr", 29)(15, RoutingComponent_div_21_div_15_tr_15_Template, 1, 0, "tr", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", (tmp_2_0 = ctx_r1.partnerCorridor.payoutPartners) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance(13);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(5, _c2));
  }
}
function RoutingComponent_div_21_div_16_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r31 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mode_r31);
  }
}
function RoutingComponent_div_21_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
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
    \u0275\u0275template(11, RoutingComponent_div_21_div_16_div_1_span_11_Template, 2, 1, "span", 87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 55)(13, "button", 39);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_16_div_1_Template_button_click_13_listener() {
      const p_r32 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditPartner(p_r32));
    });
    \u0275\u0275elementStart(14, "mat-icon", 40);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 43);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_16_div_1_Template_button_click_16_listener() {
      const p_r32 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePartner(p_r32));
    });
    \u0275\u0275elementStart(17, "mat-icon", 44);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 45);
    \u0275\u0275listener("click", function RoutingComponent_div_21_div_16_div_1_Template_button_click_19_listener() {
      const p_r32 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePartner(p_r32));
    });
    \u0275\u0275elementStart(20, "mat-icon", 46);
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r32 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r32.payoutAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r32.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r32.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", p_r32.paymentModeNames);
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", p_r32.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r32.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r32.isActive ? "toggle_on" : "toggle_off");
  }
}
function RoutingComponent_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, RoutingComponent_div_21_div_16_div_1_Template, 22, 7, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.partnerCorridor.payoutPartners);
  }
}
function RoutingComponent_div_21_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1, " No payout partners configured yet. ");
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 59)(2, "h3")(3, "mat-icon", 77);
    \u0275\u0275text(4, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function RoutingComponent_div_21_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, RoutingComponent_div_21_div_9_Template, 6, 2, "div", 78);
    \u0275\u0275elementStart(10, "div", 79)(11, "button", 3);
    \u0275\u0275listener("click", function RoutingComponent_div_21_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddPartner());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Add Partner ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, RoutingComponent_div_21_div_15_Template, 16, 6, "div", 80)(16, RoutingComponent_div_21_div_16_Template, 2, 1, "div", 81)(17, RoutingComponent_div_21_div_17_Template, 2, 0, "div", 82);
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
function RoutingComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function RoutingComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerForm());
    });
    \u0275\u0275elementEnd();
  }
}
function RoutingComponent_div_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.partnerFormError);
  }
}
function RoutingComponent_div_23_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r35 = ctx.$implicit;
    \u0275\u0275property("value", a_r35.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r35.businessName);
  }
}
function RoutingComponent_div_23_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r36 = ctx.$implicit;
    \u0275\u0275property("value", pm_r36.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r36.name);
  }
}
function RoutingComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 59)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 60);
    \u0275\u0275listener("click", function RoutingComponent_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerForm());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, RoutingComponent_div_23_div_7_Template, 2, 1, "div", 61);
    \u0275\u0275elementStart(8, "mat-form-field", 63)(9, "mat-label");
    \u0275\u0275text(10, "Payout Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 68);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_23_Template_mat_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.partnerForm.payoutAgentId, $event) || (ctx_r1.partnerForm.payoutAgentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(12, RoutingComponent_div_23_mat_option_12_Template, 2, 2, "mat-option", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 93)(14, "mat-label");
    \u0275\u0275text(15, "Payment Modes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-select", 94);
    \u0275\u0275twoWayListener("ngModelChange", function RoutingComponent_div_23_Template_mat_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.partnerForm.paymentModeIds, $event) || (ctx_r1.partnerForm.paymentModeIds = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(17, RoutingComponent_div_23_mat_option_17_Template, 2, 2, "mat-option", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 69)(19, "button", 70);
    \u0275\u0275listener("click", function RoutingComponent_div_23_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePartnerForm());
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 3);
    \u0275\u0275listener("click", function RoutingComponent_div_23_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r34);
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
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.corridors = [];
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
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
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
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.searchString = s;
      this.pageIndex = 0;
      this.loadCorridors();
    });
    this.loadAgents();
    this.loadReferenceData();
    this.loadCorridors();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
    this.api.getCorridorsPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.corridors = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.corridors = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load corridors.");
        }
        this.loading = false;
      },
      error: () => {
        this.corridors = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCorridors();
  }
  exportData(format) {
    this.exportService.export("api/admin/routing/export", { search: this.searchString }, format);
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
          this.notify.success(this.isEditingCorridor ? "Corridor updated." : "Corridor created.");
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
        this.notify.success(`Corridor ${c.isActive ? "deactivated" : "activated"}.`);
        this.loadCorridors();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  deleteCorridor(c) {
    this.api.deleteCorridor(c.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Corridor deleted.");
        this.loadCorridors();
      } else {
        this.notify.error(r?.message || "Failed.");
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
    this.api.getCorridorsPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe((r) => {
      if (r?.success && r.data) {
        this.corridors = r.data.items;
        this.totalCount = r.data.totalCount;
        if (this.partnerCorridor) {
          this.partnerCorridor = this.corridors.find((c) => c.id === this.partnerCorridor.id) ?? null;
        }
      }
    });
  }
  static {
    this.\u0275fac = function RoutingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutingComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoutingComponent, selectors: [["app-routing"]], decls: 24, vars: 8, consts: [[1, "page-header"], [1, "header-actions"], ["mat-stroked-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "popup popup-xl", 4, "ngIf"], ["class", "overlay overlay-upper", 3, "click", 4, "ngIf"], ["class", "popup popup-md popup-upper", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search corridors...", 3, "ngModelChange", "ngModel"], [1, "table-scroll-wrapper"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "sendingAgent"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sourceCountry"], ["matColumnDef", "sourceCurrency"], ["matColumnDef", "destCountry"], ["matColumnDef", "destCurrency"], ["matColumnDef", "partners"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "mobile-cards"], ["class", "mobile-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", "chip-info"], [1, "chip", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Manage Partners", 3, "click"], [1, "text-tertiary"], ["mat-icon-button", "", 3, "click", "matTooltip"], [3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "mobile-card"], [1, "mobile-card-header"], [1, "mobile-card-title"], [1, "mobile-card-body"], [1, "mobile-card-row"], [1, "mobile-card-label"], [1, "mobile-card-actions"], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], ["mat-icon-button", "", 3, "click"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-grid"], ["appearance", "outline", 1, "full-width"], ["searchable", "", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["searchable", "", "required", "", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], ["diameter", "18", 1, "inline-spinner"], [1, "popup", "popup-xl"], [1, "header-icon"], ["class", "alert-banner inline-alert", 3, "ngClass", 4, "ngIf"], [1, "popup-toolbar"], ["class", "table-scroll-wrapper", 4, "ngIf"], ["class", "mobile-cards mobile-cards-inner", 4, "ngIf"], ["class", "empty-state-info", 4, "ngIf"], [1, "alert-banner", "inline-alert", 3, "ngClass"], ["mat-table", "", 1, "inner-table", 3, "dataSource"], ["matColumnDef", "payoutAgent"], ["matColumnDef", "paymentModes"], ["class", "chip chip-info mode-chip", 4, "ngFor", "ngForOf"], [1, "chip", "chip-info", "mode-chip"], [1, "mobile-cards", "mobile-cards-inner"], [1, "empty-state-info"], [1, "overlay", "overlay-upper", 3, "click"], [1, "popup", "popup-md", "popup-upper"], ["appearance", "outline", 1, "full-width", "mt-16"], ["searchable", "", "multiple", "", "required", "", 3, "ngModelChange", "ngModel"]], template: function RoutingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Payment Corridor Routing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
        \u0275\u0275listener("click", function RoutingComponent_Template_button_click_4_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 2);
        \u0275\u0275listener("click", function RoutingComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 3);
        \u0275\u0275listener("click", function RoutingComponent_Template_button_click_12_listener() {
          return ctx.openCreateCorridor();
        });
        \u0275\u0275elementStart(13, "mat-icon");
        \u0275\u0275text(14, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Add Corridor ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, RoutingComponent_div_16_Template, 2, 0, "div", 4)(17, RoutingComponent_mat_card_17_Template, 37, 11, "mat-card", 5)(18, RoutingComponent_div_18_Template, 1, 0, "div", 6)(19, RoutingComponent_div_19_Template, 45, 17, "div", 7)(20, RoutingComponent_div_20_Template, 1, 0, "div", 6)(21, RoutingComponent_div_21_Template, 18, 8, "div", 8)(22, RoutingComponent_div_22_Template, 1, 0, "div", 9)(23, RoutingComponent_div_23_Template, 27, 6, "div", 10);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner, MatPaginatorModule, MatPaginator, SearchableSelectDirective], styles: ["\n\n.table-scroll-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.data-table[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%] {\n  min-width: 700px;\n}\n.data-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.inner-table[_ngcontent-%COMP%] {\n  min-width: 500px;\n}\n.mode-chip[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  margin-bottom: 2px;\n}\n.mobile-cards[_ngcontent-%COMP%] {\n  display: none;\n}\n.mobile-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 14px;\n  margin-bottom: 12px;\n  background: #fff;\n  transition: box-shadow 0.2s ease;\n}\n.mobile-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.mobile-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  gap: 8px;\n}\n.mobile-card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #0f172a;\n}\n.mobile-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.mobile-card-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  color: #334155;\n  gap: 8px;\n}\n.mobile-card-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.mobile-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 2px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 8px;\n}\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.dark-mode[_nghost-%COMP%]   .mobile-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .mobile-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .mobile-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .mobile-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .mobile-card-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .mobile-card-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .mobile-card-row[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .mobile-card-row[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.dark-mode[_nghost-%COMP%]   .mobile-card-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .mobile-card-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .mobile-card-actions[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .mobile-card-actions[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n@media (max-width: 1024px) {\n  .popup[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n}\n@media (max-width: 768px) {\n  .popup[_ngcontent-%COMP%] {\n    width: calc(100vw - 24px) !important;\n    max-width: calc(100vw - 24px) !important;\n  }\n}\n@media (max-width: 640px) {\n  .table-scroll-wrapper[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-cards[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=routing.component.css.map */"] });
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
      MatPaginatorModule,
      SearchableSelectDirective
    ], template: `<!-- Page Header -->
<div class="page-header">
  <h2>Payment Corridor Routing</h2>
  <div class="header-actions">
    <button mat-stroked-button (click)="exportData('excel')">
      <mat-icon>download</mat-icon> Excel
    </button>
    <button mat-stroked-button (click)="exportData('csv')">
      <mat-icon>download</mat-icon> CSV
    </button>
    <button mat-raised-button color="primary" (click)="openCreateCorridor()">
      <mat-icon>add</mat-icon> Add Corridor
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
    <input matInput placeholder="Search corridors..." [(ngModel)]="searchString" (ngModelChange)="searchDebounce.next($event)" />
  </mat-form-field>

  <!-- Desktop / Tablet: scrollable table -->
  <div class="table-scroll-wrapper">
    <table mat-table [dataSource]="corridors" class="data-table">
      <ng-container matColumnDef="sendingAgent">
        <th mat-header-cell *matHeaderCellDef>Sending Agent</th>
        <td mat-cell *matCellDef="let c">{{ c.sendingAgentName || 'All' }}</td>
      </ng-container>

      <ng-container matColumnDef="sourceCountry">
        <th mat-header-cell *matHeaderCellDef>Source Country</th>
        <td mat-cell *matCellDef="let c">{{ c.sourceCountry }}</td>
      </ng-container>

      <ng-container matColumnDef="sourceCurrency">
        <th mat-header-cell *matHeaderCellDef>Source Currency</th>
        <td mat-cell *matCellDef="let c">{{ c.sourceCurrency }}</td>
      </ng-container>

      <ng-container matColumnDef="destCountry">
        <th mat-header-cell *matHeaderCellDef>Dest Country</th>
        <td mat-cell *matCellDef="let c">{{ c.destinationCountry }}</td>
      </ng-container>

      <ng-container matColumnDef="destCurrency">
        <th mat-header-cell *matHeaderCellDef>Dest Currency</th>
        <td mat-cell *matCellDef="let c">{{ c.destinationCurrency }}</td>
      </ng-container>

      <ng-container matColumnDef="partners">
        <th mat-header-cell *matHeaderCellDef>Partners</th>
        <td mat-cell *matCellDef="let c">
          <span class="chip chip-info">{{ c.payoutPartners?.length || 0 }}</span>
        </td>
      </ng-container>

      <ng-container matColumnDef="status">
        <th mat-header-cell *matHeaderCellDef>Status</th>
        <td mat-cell *matCellDef="let c">
          <span class="chip" [ngClass]="c.isActive ? 'chip-success' : 'chip-default'">
            {{ c.isActive ? 'Active' : 'Inactive' }}
          </span>
        </td>
      </ng-container>

      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef>Actions</th>
        <td mat-cell *matCellDef="let c">
          <button mat-icon-button matTooltip="Edit" (click)="openEditCorridor(c)">
            <mat-icon color="primary">edit</mat-icon>
          </button>
          <button mat-icon-button matTooltip="Manage Partners" (click)="openPartnerManagement(c)">
            <mat-icon class="text-tertiary">people</mat-icon>
          </button>
          <button mat-icon-button [matTooltip]="c.isActive ? 'Deactivate' : 'Activate'" (click)="toggleCorridor(c)">
            <mat-icon [ngClass]="c.isActive ? 'text-success' : ''">{{ c.isActive ? 'toggle_on' : 'toggle_off'
              }}</mat-icon>
          </button>
          <button mat-icon-button matTooltip="Delete" (click)="deleteCorridor(c)">
            <mat-icon color="warn">delete</mat-icon>
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </div>

  <!-- Mobile: card layout -->
  <div class="mobile-cards">
    <div *ngFor="let c of corridors" class="mobile-card">
      <div class="mobile-card-header">
        <span class="mobile-card-title">{{ c.sourceCountry }} &rarr; {{ c.destinationCountry }}</span>
        <span class="chip" [ngClass]="c.isActive ? 'chip-success' : 'chip-default'">
          {{ c.isActive ? 'Active' : 'Inactive' }}
        </span>
      </div>
      <div class="mobile-card-body">
        <div class="mobile-card-row">
          <span class="mobile-card-label">Sending Agent</span>
          <span>{{ c.sendingAgentName || 'All' }}</span>
        </div>
        <div class="mobile-card-row">
          <span class="mobile-card-label">Currency</span>
          <span>{{ c.sourceCurrency }} &rarr; {{ c.destinationCurrency }}</span>
        </div>
        <div class="mobile-card-row">
          <span class="mobile-card-label">Partners</span>
          <span class="chip chip-info">{{ c.payoutPartners?.length || 0 }}</span>
        </div>
      </div>
      <div class="mobile-card-actions">
        <button mat-icon-button matTooltip="Edit" (click)="openEditCorridor(c)">
          <mat-icon color="primary">edit</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Manage Partners" (click)="openPartnerManagement(c)">
          <mat-icon class="text-tertiary">people</mat-icon>
        </button>
        <button mat-icon-button [matTooltip]="c.isActive ? 'Deactivate' : 'Activate'" (click)="toggleCorridor(c)">
          <mat-icon [ngClass]="c.isActive ? 'text-success' : ''">{{ c.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Delete" (click)="deleteCorridor(c)">
          <mat-icon color="warn">delete</mat-icon>
        </button>
      </div>
    </div>
  </div>

  <div *ngIf="!corridors.length && !loading" class="empty-state">
    No corridors found.
  </div>

  <mat-paginator [length]="totalCount" [pageSize]="pageSize" [pageIndex]="pageIndex"
    [pageSizeOptions]="[10, 20, 50, 100]" (page)="onPageChange($event)" showFirstLastButtons>
  </mat-paginator>
</mat-card>

<!-- ============================================================ -->
<!-- Create / Edit Corridor Popup                                  -->
<!-- ============================================================ -->
<div *ngIf="showCorridorPopup" class="overlay" (click)="closeCorridorPopup()"></div>
<div *ngIf="showCorridorPopup" class="popup popup-md">
  <div class="popup-header">
    <h3>{{ isEditingCorridor ? 'Edit Corridor' : 'Create Corridor' }}</h3>
    <button mat-icon-button (click)="closeCorridorPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="corridorFormError" class="alert-banner alert-error inline-alert">{{ corridorFormError }}</div>

  <div class="form-grid">
    <!-- Sending Agent -->
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Sending Agent (optional)</mat-label>
      <mat-select searchable [(ngModel)]="corridorForm.sendingAgentId">
        <mat-option [value]="null">All</mat-option>
        <mat-option *ngFor="let a of sendingAgents" [value]="a.id">{{ a.businessName }}</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Source Country -->
    <mat-form-field appearance="outline">
      <mat-label>Source Country *</mat-label>
      <mat-select searchable [(ngModel)]="corridorForm.sourceCountry" required>
        <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Source Currency -->
    <mat-form-field appearance="outline">
      <mat-label>Source Currency *</mat-label>
      <mat-select searchable [(ngModel)]="corridorForm.sourceCurrency" required>
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Destination Country -->
    <mat-form-field appearance="outline">
      <mat-label>Destination Country *</mat-label>
      <mat-select searchable [(ngModel)]="corridorForm.destinationCountry" required>
        <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Destination Currency -->
    <mat-form-field appearance="outline">
      <mat-label>Destination Currency *</mat-label>
      <mat-select searchable [(ngModel)]="corridorForm.destinationCurrency" required>
        <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>
      </mat-select>
    </mat-form-field>
  </div>

  <div class="popup-actions">
    <button mat-button (click)="closeCorridorPopup()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="saveCorridor()" [disabled]="savingCorridor">
      <mat-spinner *ngIf="savingCorridor" diameter="18" class="inline-spinner"></mat-spinner>
      <mat-icon *ngIf="!savingCorridor">save</mat-icon> {{ isEditingCorridor ? 'Update' : 'Create' }}
    </button>
  </div>
</div>

<!-- ============================================================ -->
<!-- Payout Partners Management Popup                              -->
<!-- ============================================================ -->
<div *ngIf="showPartnerPopup && partnerCorridor" class="overlay" (click)="closePartnerPopup()"></div>
<div *ngIf="showPartnerPopup && partnerCorridor" class="popup popup-xl">
  <div class="popup-header">
    <h3>
      <mat-icon class="header-icon">people</mat-icon>
      Payout Partners &mdash; {{ partnerCorridor.sourceCountry }} ({{ partnerCorridor.sourceCurrency }})
      &rarr; {{ partnerCorridor.destinationCountry }} ({{ partnerCorridor.destinationCurrency }})
    </h3>
    <button mat-icon-button (click)="closePartnerPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="partnerMessage" class="alert-banner inline-alert" [ngClass]="'alert-' + partnerSeverity">
    <span>{{ partnerMessage }}</span>
    <button mat-icon-button (click)="partnerMessage = ''"><mat-icon>close</mat-icon></button>
  </div>

  <div class="popup-toolbar">
    <button mat-raised-button color="primary" (click)="openAddPartner()">
      <mat-icon>add</mat-icon> Add Partner
    </button>
  </div>

  <!-- Desktop: partner table -->
  <div class="table-scroll-wrapper" *ngIf="partnerCorridor.payoutPartners?.length">
    <table mat-table [dataSource]="partnerCorridor.payoutPartners ?? []" class="inner-table">
      <ng-container matColumnDef="payoutAgent">
        <th mat-header-cell *matHeaderCellDef>Payout Agent</th>
        <td mat-cell *matCellDef="let p">{{ p.payoutAgentName }}</td>
      </ng-container>

      <ng-container matColumnDef="paymentModes">
        <th mat-header-cell *matHeaderCellDef>Payment Modes</th>
        <td mat-cell *matCellDef="let p">
          <span *ngFor="let mode of p.paymentModeNames" class="chip chip-info mode-chip">{{ mode }}</span>
        </td>
      </ng-container>

      <ng-container matColumnDef="status">
        <th mat-header-cell *matHeaderCellDef>Status</th>
        <td mat-cell *matCellDef="let p">
          <span class="chip" [ngClass]="p.isActive ? 'chip-success' : 'chip-default'">
            {{ p.isActive ? 'Active' : 'Inactive' }}
          </span>
        </td>
      </ng-container>

      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef>Actions</th>
        <td mat-cell *matCellDef="let p">
          <button mat-icon-button matTooltip="Edit" (click)="openEditPartner(p)">
            <mat-icon color="primary">edit</mat-icon>
          </button>
          <button mat-icon-button [matTooltip]="p.isActive ? 'Deactivate' : 'Activate'" (click)="togglePartner(p)">
            <mat-icon [ngClass]="p.isActive ? 'text-success' : ''">{{ p.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>
          </button>
          <button mat-icon-button matTooltip="Delete" (click)="deletePartner(p)">
            <mat-icon color="warn">delete</mat-icon>
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="['payoutAgent','paymentModes','status','actions']"></tr>
      <tr mat-row *matRowDef="let row; columns: ['payoutAgent','paymentModes','status','actions'];"></tr>
    </table>
  </div>

  <!-- Mobile: partner cards -->
  <div class="mobile-cards mobile-cards-inner" *ngIf="partnerCorridor.payoutPartners?.length">
    <div *ngFor="let p of partnerCorridor.payoutPartners" class="mobile-card">
      <div class="mobile-card-header">
        <span class="mobile-card-title">{{ p.payoutAgentName }}</span>
        <span class="chip" [ngClass]="p.isActive ? 'chip-success' : 'chip-default'">
          {{ p.isActive ? 'Active' : 'Inactive' }}
        </span>
      </div>
      <div class="mobile-card-body">
        <div class="mobile-card-row">
          <span class="mobile-card-label">Payment Modes</span>
          <span>
            <span *ngFor="let mode of p.paymentModeNames" class="chip chip-info mode-chip">{{ mode }}</span>
          </span>
        </div>
      </div>
      <div class="mobile-card-actions">
        <button mat-icon-button matTooltip="Edit" (click)="openEditPartner(p)">
          <mat-icon color="primary">edit</mat-icon>
        </button>
        <button mat-icon-button [matTooltip]="p.isActive ? 'Deactivate' : 'Activate'" (click)="togglePartner(p)">
          <mat-icon [ngClass]="p.isActive ? 'text-success' : ''">{{ p.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Delete" (click)="deletePartner(p)">
          <mat-icon color="warn">delete</mat-icon>
        </button>
      </div>
    </div>
  </div>

  <div *ngIf="!partnerCorridor.payoutPartners?.length" class="empty-state-info">
    No payout partners configured yet.
  </div>
</div>

<!-- Partner Add/Edit Form -->
<div *ngIf="showPartnerForm" class="overlay overlay-upper" (click)="closePartnerForm()"></div>
<div *ngIf="showPartnerForm" class="popup popup-md popup-upper">
  <div class="popup-header">
    <h3>{{ isEditingPartner ? 'Edit Partner' : 'Add Partner' }}</h3>
    <button mat-icon-button (click)="closePartnerForm()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="partnerFormError" class="alert-banner alert-error inline-alert">{{ partnerFormError }}</div>

  <mat-form-field appearance="outline" class="full-width">
    <mat-label>Payout Agent</mat-label>
    <mat-select searchable [(ngModel)]="partnerForm.payoutAgentId" required>
      <mat-option *ngFor="let a of payoutAgents" [value]="a.id">{{ a.businessName }}</mat-option>
    </mat-select>
  </mat-form-field>

  <mat-form-field appearance="outline" class="full-width mt-16">
    <mat-label>Payment Modes</mat-label>
    <mat-select searchable [(ngModel)]="partnerForm.paymentModeIds" multiple required>
      <mat-option *ngFor="let pm of paymentMethods" [value]="pm.id">{{ pm.name }}</mat-option>
    </mat-select>
  </mat-form-field>

  <div class="popup-actions">
    <button mat-button (click)="closePartnerForm()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="savePartner()">
      <mat-icon>save</mat-icon> Save
    </button>
  </div>
</div>`, styles: ["/* src/app/pages/admin/routing/routing.component.scss */\n.table-scroll-wrapper {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.data-table,\n.inner-table {\n  min-width: 700px;\n}\n.data-table th.mat-mdc-header-cell,\n.inner-table th.mat-mdc-header-cell {\n  white-space: nowrap;\n}\n.data-table td.mat-mdc-cell,\n.inner-table td.mat-mdc-cell {\n  white-space: nowrap;\n}\n.inner-table {\n  min-width: 500px;\n}\n.mode-chip {\n  margin-right: 4px;\n  margin-bottom: 2px;\n}\n.mobile-cards {\n  display: none;\n}\n.mobile-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 14px;\n  margin-bottom: 12px;\n  background: #fff;\n  transition: box-shadow 0.2s ease;\n}\n.mobile-card:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.mobile-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  gap: 8px;\n}\n.mobile-card-title {\n  font-weight: 600;\n  font-size: 14px;\n  color: #0f172a;\n}\n.mobile-card-body {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.mobile-card-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  color: #334155;\n  gap: 8px;\n}\n.mobile-card-label {\n  font-weight: 500;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.mobile-card-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 2px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 8px;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n:host-context(.dark-mode) .mobile-card {\n  background: #1e293b;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark-mode) .mobile-card:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n:host-context(.dark-mode) .mobile-card-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .mobile-card-row {\n  color: #cbd5e1;\n}\n:host-context(.dark-mode) .mobile-card-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .mobile-card-actions {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n@media (max-width: 1024px) {\n  .popup {\n    left: 50%;\n  }\n}\n@media (max-width: 768px) {\n  .popup {\n    width: calc(100vw - 24px) !important;\n    max-width: calc(100vw - 24px) !important;\n  }\n}\n@media (max-width: 640px) {\n  .table-scroll-wrapper {\n    display: none;\n  }\n  .mobile-cards {\n    display: block;\n  }\n}\n/*# sourceMappingURL=routing.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoutingComponent, { className: "RoutingComponent", filePath: "src/app/pages/admin/routing/routing.component.ts", lineNumber: 67 });
})();
export {
  RoutingComponent
};
//# sourceMappingURL=chunk-XS4VYRFD.js.map
