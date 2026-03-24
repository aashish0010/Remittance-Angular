import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-IXW56OZ7.js";
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
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-JZTA2E7Q.js";
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
  NgModel
} from "./chunk-WDVIFEQ7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MK4SB477.js";
import "./chunk-GPY2JV2J.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-MZ37WZKD.js";
import {
  Component,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BKSYICRS.js";

// src/app/pages/admin/sanctions/sanctions.component.ts
var _c0 = () => [10, 20, 50];
function SanctionsComponent_mat_spinner_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 32);
  }
}
function SanctionsComponent_table_63_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Name");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_63_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.name);
  }
}
function SanctionsComponent_table_63_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_63_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.entryType);
  }
}
function SanctionsComponent_table_63_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Source");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_63_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.listSource);
  }
}
function SanctionsComponent_table_63_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Aliases");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_63_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.aliases || "-");
  }
}
function SanctionsComponent_table_63_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Nationality");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_63_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.nationality || "-");
  }
}
function SanctionsComponent_table_63_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_63_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("active", row_r6.isActive)("inactive", !row_r6.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.isActive ? "Active" : "Inactive", " ");
  }
}
function SanctionsComponent_table_63_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Added");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_63_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r7.createdAt, "mediumDate"));
  }
}
function SanctionsComponent_table_63_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_63_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 47)(1, "button", 51);
    \u0275\u0275listener("click", function SanctionsComponent_table_63_td_24_Template_button_click_1_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.openEntryForm(row_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 52);
    \u0275\u0275listener("click", function SanctionsComponent_table_63_td_24_Template_button_click_4_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.toggleEntry(row_r9));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function SanctionsComponent_table_63_td_24_Template_button_click_7_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.deleteEntry(row_r9));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", row_r9.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.isActive ? "toggle_on" : "toggle_off");
  }
}
function SanctionsComponent_table_63_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function SanctionsComponent_table_63_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 55);
  }
}
function SanctionsComponent_table_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 33);
    \u0275\u0275elementContainerStart(1, 34);
    \u0275\u0275template(2, SanctionsComponent_table_63_th_2_Template, 2, 0, "th", 35)(3, SanctionsComponent_table_63_td_3_Template, 3, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 37);
    \u0275\u0275template(5, SanctionsComponent_table_63_th_5_Template, 2, 0, "th", 35)(6, SanctionsComponent_table_63_td_6_Template, 3, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 38);
    \u0275\u0275template(8, SanctionsComponent_table_63_th_8_Template, 2, 0, "th", 35)(9, SanctionsComponent_table_63_td_9_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 39);
    \u0275\u0275template(11, SanctionsComponent_table_63_th_11_Template, 2, 0, "th", 35)(12, SanctionsComponent_table_63_td_12_Template, 3, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 40);
    \u0275\u0275template(14, SanctionsComponent_table_63_th_14_Template, 2, 0, "th", 35)(15, SanctionsComponent_table_63_td_15_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 41);
    \u0275\u0275template(17, SanctionsComponent_table_63_th_17_Template, 2, 0, "th", 35)(18, SanctionsComponent_table_63_td_18_Template, 3, 5, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 42);
    \u0275\u0275template(20, SanctionsComponent_table_63_th_20_Template, 2, 0, "th", 35)(21, SanctionsComponent_table_63_td_21_Template, 3, 4, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(22, 43);
    \u0275\u0275template(23, SanctionsComponent_table_63_th_23_Template, 2, 0, "th", 35)(24, SanctionsComponent_table_63_td_24_Template, 10, 2, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(25, SanctionsComponent_table_63_tr_25_Template, 1, 0, "tr", 44)(26, SanctionsComponent_table_63_tr_26_Template, 1, 0, "tr", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r9.entries);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r9.entryColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r9.entryColumns);
  }
}
function SanctionsComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "mat-icon");
    \u0275\u0275text(2, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No sanction entries found");
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_mat_spinner_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 32);
  }
}
function SanctionsComponent_table_76_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Code");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_76_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.countryCode);
  }
}
function SanctionsComponent_table_76_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_76_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r12.countryName);
  }
}
function SanctionsComponent_table_76_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Sanction Type");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_76_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("full-sanction", row_r13.sanctionType === "Full")("partial-sanction", row_r13.sanctionType === "Partial");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r13.sanctionType, " ");
  }
}
function SanctionsComponent_table_76_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Risk Level");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_76_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("risk-blocked", row_r14.riskLevel === "Blocked")("risk-high", row_r14.riskLevel === "High")("risk-medium", row_r14.riskLevel === "Medium")("risk-low", row_r14.riskLevel === "Low");
    \u0275\u0275property("matTooltip", ctx_r9.getRiskLevelDescription(row_r14.riskLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r14.riskLevel, " ");
  }
}
function SanctionsComponent_table_76_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Source");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_76_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r15.listSource);
  }
}
function SanctionsComponent_table_76_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_76_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("active", row_r16.isActive)("inactive", !row_r16.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r16.isActive ? "Active" : "Inactive", " ");
  }
}
function SanctionsComponent_table_76_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Added");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_76_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r17.createdAt, "mediumDate"));
  }
}
function SanctionsComponent_table_76_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_76_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 47)(1, "button", 51);
    \u0275\u0275listener("click", function SanctionsComponent_table_76_td_24_Template_button_click_1_listener() {
      const row_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.openCountryForm(row_r19));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 52);
    \u0275\u0275listener("click", function SanctionsComponent_table_76_td_24_Template_button_click_4_listener() {
      const row_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.toggleCountry(row_r19));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function SanctionsComponent_table_76_td_24_Template_button_click_7_listener() {
      const row_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.deleteCountry(row_r19));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", row_r19.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r19.isActive ? "toggle_on" : "toggle_off");
  }
}
function SanctionsComponent_table_76_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function SanctionsComponent_table_76_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 55);
  }
}
function SanctionsComponent_table_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 33);
    \u0275\u0275elementContainerStart(1, 57);
    \u0275\u0275template(2, SanctionsComponent_table_76_th_2_Template, 2, 0, "th", 35)(3, SanctionsComponent_table_76_td_3_Template, 3, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 58);
    \u0275\u0275template(5, SanctionsComponent_table_76_th_5_Template, 2, 0, "th", 35)(6, SanctionsComponent_table_76_td_6_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 59);
    \u0275\u0275template(8, SanctionsComponent_table_76_th_8_Template, 2, 0, "th", 35)(9, SanctionsComponent_table_76_td_9_Template, 3, 5, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 60);
    \u0275\u0275template(11, SanctionsComponent_table_76_th_11_Template, 2, 0, "th", 35)(12, SanctionsComponent_table_76_td_12_Template, 3, 10, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 38);
    \u0275\u0275template(14, SanctionsComponent_table_76_th_14_Template, 2, 0, "th", 35)(15, SanctionsComponent_table_76_td_15_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 41);
    \u0275\u0275template(17, SanctionsComponent_table_76_th_17_Template, 2, 0, "th", 35)(18, SanctionsComponent_table_76_td_18_Template, 3, 5, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 42);
    \u0275\u0275template(20, SanctionsComponent_table_76_th_20_Template, 2, 0, "th", 35)(21, SanctionsComponent_table_76_td_21_Template, 3, 4, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(22, 43);
    \u0275\u0275template(23, SanctionsComponent_table_76_th_23_Template, 2, 0, "th", 35)(24, SanctionsComponent_table_76_td_24_Template, 10, 2, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(25, SanctionsComponent_table_76_tr_25_Template, 1, 0, "tr", 44)(26, SanctionsComponent_table_76_tr_26_Template, 1, 0, "tr", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r9.countries);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r9.countryColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r9.countryColumns);
  }
}
function SanctionsComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "mat-icon");
    \u0275\u0275text(2, "public_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No sanctioned countries configured");
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_mat_spinner_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 32);
  }
}
function SanctionsComponent_table_87_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Screened Name");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_87_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r20.screenedName);
  }
}
function SanctionsComponent_table_87_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_87_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21.screenedType);
  }
}
function SanctionsComponent_table_87_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_87_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("status-clear", row_r22.status === "Clear")("status-potential", row_r22.status === "PotentialMatch")("status-confirmed", row_r22.status === "ConfirmedMatch")("status-false", row_r22.status === "FalsePositive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r22.status, " ");
  }
}
function SanctionsComponent_table_87_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Matched Against");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_87_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r23.matchedName || "-");
  }
}
function SanctionsComponent_table_87_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Score");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_87_td_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("high-score", row_r24.matchScore >= 0.8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r9.getScorePercent(row_r24.matchScore), " ");
  }
}
function SanctionsComponent_table_87_td_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_87_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275template(1, SanctionsComponent_table_87_td_15_span_1_Template, 2, 3, "span", 70)(2, SanctionsComponent_table_87_td_15_span_2_Template, 2, 0, "span", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r24.matchScore);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r24.matchScore);
  }
}
function SanctionsComponent_table_87_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Transaction");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_87_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r25.transactionId || "-");
  }
}
function SanctionsComponent_table_87_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_87_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r26.createdAt, "short"));
  }
}
function SanctionsComponent_table_87_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function SanctionsComponent_table_87_td_24_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function SanctionsComponent_table_87_td_24_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const row_r28 = \u0275\u0275nextContext().$implicit;
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.openReviewForm(row_r28));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "rate_review");
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_table_87_td_24_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", "Reviewed by " + row_r28.reviewedBy + (row_r28.reviewNotes ? ": " + row_r28.reviewNotes : ""));
  }
}
function SanctionsComponent_table_87_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275template(1, SanctionsComponent_table_87_td_24_button_1_Template, 3, 0, "button", 73)(2, SanctionsComponent_table_87_td_24_span_2_Template, 3, 1, "span", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r28 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r28.status === "PotentialMatch" && !row_r28.reviewedBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r28.reviewedBy);
  }
}
function SanctionsComponent_table_87_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function SanctionsComponent_table_87_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 55);
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    \u0275\u0275classProp("match-row", row_r29.status === "PotentialMatch" || row_r29.status === "ConfirmedMatch");
  }
}
function SanctionsComponent_table_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 33);
    \u0275\u0275elementContainerStart(1, 62);
    \u0275\u0275template(2, SanctionsComponent_table_87_th_2_Template, 2, 0, "th", 35)(3, SanctionsComponent_table_87_td_3_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 63);
    \u0275\u0275template(5, SanctionsComponent_table_87_th_5_Template, 2, 0, "th", 35)(6, SanctionsComponent_table_87_td_6_Template, 3, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 64);
    \u0275\u0275template(8, SanctionsComponent_table_87_th_8_Template, 2, 0, "th", 35)(9, SanctionsComponent_table_87_td_9_Template, 3, 9, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 65);
    \u0275\u0275template(11, SanctionsComponent_table_87_th_11_Template, 2, 0, "th", 35)(12, SanctionsComponent_table_87_td_12_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 66);
    \u0275\u0275template(14, SanctionsComponent_table_87_th_14_Template, 2, 0, "th", 35)(15, SanctionsComponent_table_87_td_15_Template, 3, 2, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 67);
    \u0275\u0275template(17, SanctionsComponent_table_87_th_17_Template, 2, 0, "th", 35)(18, SanctionsComponent_table_87_td_18_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 42);
    \u0275\u0275template(20, SanctionsComponent_table_87_th_20_Template, 2, 0, "th", 35)(21, SanctionsComponent_table_87_td_21_Template, 3, 4, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(22, 43);
    \u0275\u0275template(23, SanctionsComponent_table_87_th_23_Template, 2, 0, "th", 35)(24, SanctionsComponent_table_87_td_24_Template, 3, 2, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(25, SanctionsComponent_table_87_tr_25_Template, 1, 0, "tr", 44)(26, SanctionsComponent_table_87_tr_26_Template, 1, 2, "tr", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r9.screenings);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r9.screeningColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r9.screeningColumns);
  }
}
function SanctionsComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "mat-icon");
    \u0275\u0275text(2, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No screening results yet");
    \u0275\u0275elementEnd()();
  }
}
function SanctionsComponent_div_90_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r31 = ctx.$implicit;
    \u0275\u0275property("value", t_r31);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r31);
  }
}
function SanctionsComponent_div_90_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r32 = ctx.$implicit;
    \u0275\u0275property("value", s_r32);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r32);
  }
}
function SanctionsComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275listener("click", function SanctionsComponent_div_90_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.closeEntryForm());
    });
    \u0275\u0275elementStart(1, "div", 78);
    \u0275\u0275listener("click", function SanctionsComponent_div_90_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r30);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 79)(5, "mat-form-field", 80)(6, "mat-label");
    \u0275\u0275text(7, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_90_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.entryForm.name, $event) || (ctx_r9.entryForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 82)(10, "mat-label");
    \u0275\u0275text(11, "Entry Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_90_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.entryForm.entryType, $event) || (ctx_r9.entryForm.entryType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(13, SanctionsComponent_div_90_mat_option_13_Template, 2, 2, "mat-option", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 82)(15, "mat-label");
    \u0275\u0275text(16, "List Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_90_Template_mat_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.entryForm.listSource, $event) || (ctx_r9.entryForm.listSource = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(18, SanctionsComponent_div_90_mat_option_18_Template, 2, 2, "mat-option", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 80)(20, "mat-label");
    \u0275\u0275text(21, "Aliases (comma-separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_90_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.entryForm.aliases, $event) || (ctx_r9.entryForm.aliases = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 82)(24, "mat-label");
    \u0275\u0275text(25, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_90_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.entryForm.nationality, $event) || (ctx_r9.entryForm.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 80)(28, "mat-label");
    \u0275\u0275text(29, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "textarea", 87);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_90_Template_textarea_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.entryForm.remarks, $event) || (ctx_r9.entryForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 88)(32, "button", 21);
    \u0275\u0275listener("click", function SanctionsComponent_div_90_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.closeEntryForm());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 22);
    \u0275\u0275listener("click", function SanctionsComponent_div_90_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.saveEntry());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r9.editingEntry ? "Edit" : "Add", " Sanction Entry");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.entryForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.entryForm.entryType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r9.entryTypes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.entryForm.listSource);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r9.listSources);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.entryForm.aliases);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.entryForm.nationality);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.entryForm.remarks);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r9.editingEntry ? "Update" : "Create");
  }
}
function SanctionsComponent_div_91_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r34 = ctx.$implicit;
    \u0275\u0275property("value", c_r34.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r34.name);
  }
}
function SanctionsComponent_div_91_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r35 = ctx.$implicit;
    \u0275\u0275property("value", t_r35);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r35);
  }
}
function SanctionsComponent_div_91_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r36 = ctx.$implicit;
    \u0275\u0275property("value", r_r36);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r36);
  }
}
function SanctionsComponent_div_91_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r37 = ctx.$implicit;
    \u0275\u0275property("value", s_r37);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r37);
  }
}
function SanctionsComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275listener("click", function SanctionsComponent_div_91_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.closeCountryForm());
    });
    \u0275\u0275elementStart(1, "div", 78);
    \u0275\u0275listener("click", function SanctionsComponent_div_91_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r33);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 79)(5, "mat-form-field", 80)(6, "mat-label");
    \u0275\u0275text(7, "Select Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 90);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_91_Template_mat_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.countryForm.countryName, $event) || (ctx_r9.countryForm.countryName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SanctionsComponent_div_91_Template_mat_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.onCountrySelected($event));
    });
    \u0275\u0275template(9, SanctionsComponent_div_91_mat_option_9_Template, 2, 2, "mat-option", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 82)(11, "mat-label");
    \u0275\u0275text(12, "Sanction Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_91_Template_mat_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.countryForm.sanctionType, $event) || (ctx_r9.countryForm.sanctionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(14, SanctionsComponent_div_91_mat_option_14_Template, 2, 2, "mat-option", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 82)(16, "mat-label");
    \u0275\u0275text(17, "Risk Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_91_Template_mat_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.countryForm.riskLevel, $event) || (ctx_r9.countryForm.riskLevel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(19, SanctionsComponent_div_91_mat_option_19_Template, 2, 2, "mat-option", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 82)(21, "mat-label");
    \u0275\u0275text(22, "List Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_91_Template_mat_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.countryForm.listSource, $event) || (ctx_r9.countryForm.listSource = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(24, SanctionsComponent_div_91_mat_option_24_Template, 2, 2, "mat-option", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-form-field", 80)(26, "mat-label");
    \u0275\u0275text(27, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "textarea", 87);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_91_Template_textarea_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.countryForm.remarks, $event) || (ctx_r9.countryForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 88)(30, "button", 21);
    \u0275\u0275listener("click", function SanctionsComponent_div_91_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.closeCountryForm());
    });
    \u0275\u0275text(31, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 22);
    \u0275\u0275listener("click", function SanctionsComponent_div_91_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.saveCountry());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r9.editingCountry ? "Edit" : "Add", " Sanctioned Country");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.countryForm.countryName);
    \u0275\u0275property("disabled", !!ctx_r9.editingCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r9.referenceCountries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.countryForm.sanctionType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r9.sanctionTypes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.countryForm.riskLevel);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r9.riskLevels);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.countryForm.listSource);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r9.listSources);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.countryForm.remarks);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r9.editingCountry ? "Update" : "Add");
  }
}
function SanctionsComponent_div_92_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "p")(2, "strong");
    \u0275\u0275text(3, "Screened:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7, "Matched:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "strong");
    \u0275\u0275text(11, "Score:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r9.reviewingScreening.screenedName, " (", ctx_r9.reviewingScreening.screenedType, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r9.reviewingScreening.matchedName, " (", ctx_r9.reviewingScreening.matchedListSource, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r9.getScorePercent(ctx_r9.reviewingScreening.matchScore), "");
  }
}
function SanctionsComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275listener("click", function SanctionsComponent_div_92_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.closeReviewForm());
    });
    \u0275\u0275elementStart(1, "div", 91);
    \u0275\u0275listener("click", function SanctionsComponent_div_92_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r38);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Review Screening Match");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SanctionsComponent_div_92_div_4_Template, 13, 5, "div", 92);
    \u0275\u0275elementStart(5, "div", 79)(6, "mat-form-field", 80)(7, "mat-label");
    \u0275\u0275text(8, "Decision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_92_Template_mat_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.reviewForm.status, $event) || (ctx_r9.reviewForm.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "mat-option", 93);
    \u0275\u0275text(11, "Confirmed Match");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 94);
    \u0275\u0275text(13, "False Positive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "mat-form-field", 80)(15, "mat-label");
    \u0275\u0275text(16, "Review Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 95);
    \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_div_92_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.reviewForm.reviewNotes, $event) || (ctx_r9.reviewForm.reviewNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 88)(19, "button", 21);
    \u0275\u0275listener("click", function SanctionsComponent_div_92_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.closeReviewForm());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 22);
    \u0275\u0275listener("click", function SanctionsComponent_div_92_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.submitReview());
    });
    \u0275\u0275text(22, "Submit Review");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r9.reviewingScreening);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.reviewForm.status);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.reviewForm.reviewNotes);
  }
}
var SanctionsComponent = class _SanctionsComponent {
  constructor(api, notify) {
    this.api = api;
    this.notify = notify;
    this.destroy$ = new Subject();
    this.dashboard = {};
    this.activeTab = 0;
    this.entries = [];
    this.entriesTotalCount = 0;
    this.entriesPage = 1;
    this.entriesPageSize = 20;
    this.entriesSearch = "";
    this.loadingEntries = false;
    this.countries = [];
    this.loadingCountries = false;
    this.screenings = [];
    this.screeningsTotalCount = 0;
    this.screeningsPage = 1;
    this.screeningsPageSize = 20;
    this.screeningsSearch = "";
    this.loadingScreenings = false;
    this.showEntryForm = false;
    this.editingEntry = null;
    this.entryForm = {
      name: "",
      entryType: "Individual",
      listSource: "Custom",
      aliases: "",
      nationality: "",
      remarks: ""
    };
    this.showCountryForm = false;
    this.editingCountry = null;
    this.countryForm = {
      countryCode: "",
      countryName: "",
      sanctionType: "Full",
      riskLevel: "Blocked",
      listSource: "Custom",
      remarks: ""
    };
    this.showReviewForm = false;
    this.reviewingScreening = null;
    this.reviewForm = {
      status: "FalsePositive",
      reviewNotes: ""
    };
    this.entryTypes = ["Individual", "Organization", "Vessel", "Aircraft"];
    this.listSources = ["OFAC-SDN", "UN", "EU", "Custom"];
    this.sanctionTypes = ["Full", "Partial"];
    this.riskLevels = ["Blocked", "High", "Medium", "Low"];
    this.referenceCountries = [];
    this.entryColumns = ["name", "entryType", "listSource", "aliases", "nationality", "isActive", "createdAt", "actions"];
    this.countryColumns = ["countryCode", "countryName", "sanctionType", "riskLevel", "listSource", "isActive", "createdAt", "actions"];
    this.screeningColumns = ["screenedName", "screenedType", "status", "matchedName", "matchScore", "transactionId", "createdAt", "actions"];
  }
  ngOnInit() {
    this.loadDashboard();
    this.loadEntries();
    this.loadCountries();
    this.loadScreenings();
    this.loadReferenceCountries();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.searchTimer)
      clearTimeout(this.searchTimer);
  }
  // ---- Reference Countries ----
  loadReferenceCountries() {
    this.api.getCountries().pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res?.success && res.data) {
        this.referenceCountries = res.data;
      }
    });
  }
  onCountrySelected(countryName) {
    this.countryForm.countryName = countryName;
    this.countryForm.countryCode = countryName;
  }
  // ---- Dashboard ----
  loadDashboard() {
    this.api.getSanctionsDashboard().pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res?.success)
        this.dashboard = res.data || {};
    });
  }
  // ---- Entries ----
  loadEntries() {
    this.loadingEntries = true;
    this.api.getSanctionEntriesPaged({ page: this.entriesPage, pageSize: this.entriesPageSize, search: this.entriesSearch }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.entries = res.data.items || [];
          this.entriesTotalCount = res.data.totalCount || 0;
        }
        this.loadingEntries = false;
      },
      error: () => this.loadingEntries = false
    });
  }
  onEntriesSearch() {
    if (this.searchTimer)
      clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.entriesPage = 1;
      this.loadEntries();
    }, 400);
  }
  onEntriesPage(event) {
    this.entriesPage = event.pageIndex + 1;
    this.entriesPageSize = event.pageSize;
    this.loadEntries();
  }
  openEntryForm(entry) {
    this.editingEntry = entry || null;
    if (entry) {
      this.entryForm = {
        name: entry.name,
        entryType: entry.entryType,
        listSource: entry.listSource,
        aliases: entry.aliases || "",
        nationality: entry.nationality || "",
        remarks: entry.remarks || ""
      };
    } else {
      this.entryForm = { name: "", entryType: "Individual", listSource: "Custom", aliases: "", nationality: "", remarks: "" };
    }
    this.showEntryForm = true;
  }
  closeEntryForm() {
    this.showEntryForm = false;
    this.editingEntry = null;
  }
  saveEntry() {
    if (!this.entryForm.name.trim()) {
      this.notify.error("Name is required");
      return;
    }
    const obs = this.editingEntry ? this.api.updateSanctionEntry(this.editingEntry.id, this.entryForm) : this.api.createSanctionEntry(this.entryForm);
    obs.pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.editingEntry ? "Entry updated" : "Entry created");
          this.closeEntryForm();
          this.loadEntries();
          this.loadDashboard();
        } else {
          this.notify.error(res?.message || "Failed");
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  toggleEntry(entry) {
    this.api.toggleSanctionEntry(entry.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(`Entry ${res.data ? "activated" : "deactivated"}`);
          this.loadEntries();
          this.loadDashboard();
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  deleteEntry(entry) {
    if (!confirm(`Delete sanction entry "${entry.name}"?`))
      return;
    this.api.deleteSanctionEntry(entry.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Entry deleted");
          this.loadEntries();
          this.loadDashboard();
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  // ---- Countries ----
  loadCountries() {
    this.loadingCountries = true;
    this.api.getSanctionedCountries().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success)
          this.countries = res.data || [];
        this.loadingCountries = false;
      },
      error: () => this.loadingCountries = false
    });
  }
  openCountryForm(country) {
    this.editingCountry = country || null;
    if (country) {
      this.countryForm = {
        countryCode: country.countryCode,
        countryName: country.countryName,
        sanctionType: country.sanctionType,
        riskLevel: country.riskLevel || "Blocked",
        listSource: country.listSource,
        remarks: country.remarks || ""
      };
    } else {
      this.countryForm = { countryCode: "", countryName: "", sanctionType: "Full", riskLevel: "Blocked", listSource: "Custom", remarks: "" };
    }
    this.showCountryForm = true;
  }
  closeCountryForm() {
    this.showCountryForm = false;
    this.editingCountry = null;
  }
  saveCountry() {
    if (!this.countryForm.countryCode.trim() || !this.countryForm.countryName.trim()) {
      this.notify.error("Country code and name are required");
      return;
    }
    const obs = this.editingCountry ? this.api.updateSanctionedCountry(this.editingCountry.id, this.countryForm) : this.api.createSanctionedCountry(this.countryForm);
    obs.pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(this.editingCountry ? "Country updated" : "Country added");
          this.closeCountryForm();
          this.loadCountries();
          this.loadDashboard();
        } else {
          this.notify.error(res?.message || "Failed");
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  toggleCountry(country) {
    this.api.toggleSanctionedCountry(country.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(`Country ${res.data ? "activated" : "deactivated"}`);
          this.loadCountries();
          this.loadDashboard();
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  deleteCountry(country) {
    if (!confirm(`Remove "${country.countryName}" from sanctioned countries?`))
      return;
    this.api.deleteSanctionedCountry(country.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Country removed");
          this.loadCountries();
          this.loadDashboard();
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  // ---- Screening Results ----
  loadScreenings() {
    this.loadingScreenings = true;
    this.api.getScreeningResultsPaged({ page: this.screeningsPage, pageSize: this.screeningsPageSize, search: this.screeningsSearch }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.screenings = res.data.items || [];
          this.screeningsTotalCount = res.data.totalCount || 0;
        }
        this.loadingScreenings = false;
      },
      error: () => this.loadingScreenings = false
    });
  }
  onScreeningsSearch() {
    if (this.searchTimer)
      clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.screeningsPage = 1;
      this.loadScreenings();
    }, 400);
  }
  onScreeningsPage(event) {
    this.screeningsPage = event.pageIndex + 1;
    this.screeningsPageSize = event.pageSize;
    this.loadScreenings();
  }
  openReviewForm(screening) {
    this.reviewingScreening = screening;
    this.reviewForm = { status: "FalsePositive", reviewNotes: "" };
    this.showReviewForm = true;
  }
  closeReviewForm() {
    this.showReviewForm = false;
    this.reviewingScreening = null;
  }
  submitReview() {
    if (!this.reviewingScreening)
      return;
    this.api.reviewScreeningResult(this.reviewingScreening.id, this.reviewForm).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Review submitted");
          this.closeReviewForm();
          this.loadScreenings();
          this.loadDashboard();
        } else {
          this.notify.error(res?.message || "Failed");
        }
      },
      error: (err) => this.notify.error(err?.error?.message || "Failed")
    });
  }
  getStatusColor(status) {
    switch (status) {
      case "Clear":
        return "accent";
      case "PotentialMatch":
        return "warn";
      case "ConfirmedMatch":
        return "warn";
      case "FalsePositive":
        return "primary";
      default:
        return "";
    }
  }
  getScorePercent(score) {
    if (score == null)
      return "-";
    return (score * 100).toFixed(0) + "%";
  }
  exportEntries(format) {
    this.api.exportSanctionEntries(format).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = format === "csv" ? "sanction-entries.csv" : "sanction-entries.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
  getRiskLevelDescription(level) {
    switch (level) {
      case "Blocked":
        return "Transactions blocked completely";
      case "High":
        return "Transactions flagged for compliance review";
      case "Medium":
        return "Transactions flagged for compliance review";
      case "Low":
        return "Transactions allowed normally";
      default:
        return "";
    }
  }
  onTabChange(index) {
    this.activeTab = index;
  }
  static {
    this.\u0275fac = function SanctionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SanctionsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SanctionsComponent, selectors: [["app-sanctions"]], decls: 93, vars: 29, consts: [[1, "sanctions-page"], [1, "page-title"], [1, "dashboard-cards"], [1, "stat-card"], [1, "card-inner"], [1, "stat-icon", "entries"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "countries"], [1, "stat-icon", "screenings"], [1, "stat-card", "warn"], [1, "stat-icon", "pending"], [3, "selectedIndexChange", "selectedIndex"], ["label", "Sanctioned Persons"], [1, "tab-content"], [1, "tab-toolbar"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search entries...", 3, "ngModelChange", "ngModel"], [1, "toolbar-actions"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "table-container"], ["diameter", "36", "class", "center-spinner", 4, "ngIf"], ["mat-table", "", 3, "dataSource", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["label", "Sanctioned Countries"], ["label", "Screening Results"], ["matInput", "", "placeholder", "Search screenings...", 3, "ngModelChange", "ngModel"], ["class", "dialog-overlay", 3, "click", 4, "ngIf"], ["diameter", "36", 1, "center-spinner"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "entryType"], ["matColumnDef", "listSource"], ["matColumnDef", "aliases"], ["matColumnDef", "nationality"], ["matColumnDef", "isActive"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", "type-chip"], [1, "aliases-text"], [1, "chip"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", 3, "click", "matTooltip"], ["mat-icon-button", "", "matTooltip", "Delete", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], ["matColumnDef", "countryCode"], ["matColumnDef", "countryName"], ["matColumnDef", "sanctionType"], ["matColumnDef", "riskLevel"], [1, "chip", "risk-chip", 3, "matTooltip"], ["matColumnDef", "screenedName"], ["matColumnDef", "screenedType"], ["matColumnDef", "status"], ["matColumnDef", "matchedName"], ["matColumnDef", "matchScore"], ["matColumnDef", "transactionId"], ["mat-row", "", 3, "match-row", 4, "matRowDef", "matRowDefColumns"], [1, "chip", "status-chip"], ["class", "score", 3, "high-score", 4, "ngIf"], [4, "ngIf"], [1, "score"], ["mat-icon-button", "", "matTooltip", "Review", 3, "click", 4, "ngIf"], ["class", "reviewed-badge", 3, "matTooltip", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Review", 3, "click"], [1, "reviewed-badge", 3, "matTooltip"], [1, "dialog-overlay", 3, "click"], [1, "dialog-content", 3, "click"], [1, "form-grid"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "placeholder", "Full name or organization", 3, "ngModelChange", "ngModel"], ["appearance", "outline"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "e.g. AKA Name 1, AKA Name 2", 3, "ngModelChange", "ngModel"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "dialog-actions"], [3, "value"], [3, "ngModelChange", "ngModel", "disabled"], [1, "dialog-content", "review-dialog", 3, "click"], ["class", "review-info", 4, "ngIf"], ["value", "ConfirmedMatch"], ["value", "FalsePositive"], ["matInput", "", "rows", "3", "placeholder", "Reason for decision...", 3, "ngModelChange", "ngModel"], [1, "review-info"]], template: function SanctionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Sanctions Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "mat-card", 3)(5, "div", 4)(6, "div", 5)(7, "mat-icon");
        \u0275\u0275text(8, "person_search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "span", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 8);
        \u0275\u0275text(13, "Sanctioned Persons");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "mat-card", 3)(15, "div", 4)(16, "div", 9)(17, "mat-icon");
        \u0275\u0275text(18, "public_off");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 6)(20, "span", 7);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 8);
        \u0275\u0275text(23, "Sanctioned Countries");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "mat-card", 3)(25, "div", 4)(26, "div", 10)(27, "mat-icon");
        \u0275\u0275text(28, "verified_user");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 6)(30, "span", 7);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 8);
        \u0275\u0275text(33, "Total Screenings");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "mat-card", 11)(35, "div", 4)(36, "div", 12)(37, "mat-icon");
        \u0275\u0275text(38, "warning");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 6)(40, "span", 7);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "span", 8);
        \u0275\u0275text(43, "Pending Review");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(44, "mat-tab-group", 13);
        \u0275\u0275listener("selectedIndexChange", function SanctionsComponent_Template_mat_tab_group_selectedIndexChange_44_listener($event) {
          return ctx.onTabChange($event);
        });
        \u0275\u0275elementStart(45, "mat-tab", 14)(46, "div", 15)(47, "div", 16)(48, "mat-form-field", 17)(49, "mat-icon", 18);
        \u0275\u0275text(50, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_Template_input_ngModelChange_51_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.entriesSearch, $event) || (ctx.entriesSearch = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SanctionsComponent_Template_input_ngModelChange_51_listener() {
          return ctx.onEntriesSearch();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 20)(53, "button", 21);
        \u0275\u0275listener("click", function SanctionsComponent_Template_button_click_53_listener() {
          return ctx.exportEntries("excel");
        });
        \u0275\u0275elementStart(54, "mat-icon");
        \u0275\u0275text(55, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " Export ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "button", 22);
        \u0275\u0275listener("click", function SanctionsComponent_Template_button_click_57_listener() {
          return ctx.openEntryForm();
        });
        \u0275\u0275elementStart(58, "mat-icon");
        \u0275\u0275text(59, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " Add Entry ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 23);
        \u0275\u0275template(62, SanctionsComponent_mat_spinner_62_Template, 1, 0, "mat-spinner", 24)(63, SanctionsComponent_table_63_Template, 27, 3, "table", 25)(64, SanctionsComponent_div_64_Template, 5, 0, "div", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "mat-paginator", 27);
        \u0275\u0275listener("page", function SanctionsComponent_Template_mat_paginator_page_65_listener($event) {
          return ctx.onEntriesPage($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "mat-tab", 28)(67, "div", 15)(68, "div", 16);
        \u0275\u0275element(69, "div");
        \u0275\u0275elementStart(70, "button", 22);
        \u0275\u0275listener("click", function SanctionsComponent_Template_button_click_70_listener() {
          return ctx.openCountryForm();
        });
        \u0275\u0275elementStart(71, "mat-icon");
        \u0275\u0275text(72, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(73, " Add Country ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 23);
        \u0275\u0275template(75, SanctionsComponent_mat_spinner_75_Template, 1, 0, "mat-spinner", 24)(76, SanctionsComponent_table_76_Template, 27, 3, "table", 25)(77, SanctionsComponent_div_77_Template, 5, 0, "div", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "mat-tab", 29)(79, "div", 15)(80, "div", 16)(81, "mat-form-field", 17)(82, "mat-icon", 18);
        \u0275\u0275text(83, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "input", 30);
        \u0275\u0275twoWayListener("ngModelChange", function SanctionsComponent_Template_input_ngModelChange_84_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.screeningsSearch, $event) || (ctx.screeningsSearch = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SanctionsComponent_Template_input_ngModelChange_84_listener() {
          return ctx.onScreeningsSearch();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(85, "div", 23);
        \u0275\u0275template(86, SanctionsComponent_mat_spinner_86_Template, 1, 0, "mat-spinner", 24)(87, SanctionsComponent_table_87_Template, 27, 3, "table", 25)(88, SanctionsComponent_div_88_Template, 5, 0, "div", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "mat-paginator", 27);
        \u0275\u0275listener("page", function SanctionsComponent_Template_mat_paginator_page_89_listener($event) {
          return ctx.onScreeningsPage($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(90, SanctionsComponent_div_90_Template, 36, 10, "div", 31)(91, SanctionsComponent_div_91_Template, 34, 12, "div", 31)(92, SanctionsComponent_div_92_Template, 23, 3, "div", 31);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.dashboard.activeSanctionEntries || 0);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.dashboard.activeSanctionedCountries || 0);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.dashboard.totalScreenings || 0);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.dashboard.pendingReview || 0);
        \u0275\u0275advance(3);
        \u0275\u0275property("selectedIndex", ctx.activeTab);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.entriesSearch);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.loadingEntries);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingEntries);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingEntries && ctx.entries.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("length", ctx.entriesTotalCount)("pageSize", ctx.entriesPageSize)("pageIndex", ctx.entriesPage - 1)("pageSizeOptions", \u0275\u0275pureFunction0(27, _c0));
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.loadingCountries);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingCountries);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingCountries && ctx.countries.length === 0);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.screeningsSearch);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loadingScreenings);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingScreenings);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingScreenings && ctx.screenings.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("length", ctx.screeningsTotalCount)("pageSize", ctx.screeningsPageSize)("pageIndex", ctx.screeningsPage - 1)("pageSizeOptions", \u0275\u0275pureFunction0(28, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEntryForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCountryForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showReviewForm);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTabsModule, MatTab, MatTabGroup, MatCardModule, MatCard, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatChipsModule, MatTooltipModule, MatTooltip, MatPaginatorModule, MatPaginator, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.sanctions-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  color: #1a1a2e;\n}\n.dashboard-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border: 1px solid #e8e8e8;\n  box-shadow: none !important;\n  overflow: hidden;\n}\n.stat-card[_ngcontent-%COMP%]     .mdc-card {\n  padding: 0 !important;\n}\n.stat-card[_ngcontent-%COMP%]     .mat-mdc-card-content, \n.stat-card[_ngcontent-%COMP%]     mat-card-content {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.stat-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n}\n.stat-card.warn[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n}\n.stat-icon.entries[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.stat-icon.countries[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #c62828;\n}\n.stat-icon.screenings[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.stat-icon.pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #1a1a2e;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #666;\n  margin-top: 2px;\n  line-height: 1.2;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 16px 0;\n}\n.tab-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 320px;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid #e8e8e8;\n  min-height: 120px;\n  position: relative;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.center-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  font-size: 13px;\n}\n.mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.match-row[_ngcontent-%COMP%] {\n  background: #fff8e1 !important;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.chip.active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.inactive[_ngcontent-%COMP%] {\n  background: #fafafa;\n  color: #999;\n}\n.chip.full-sanction[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.partial-sanction[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.type-chip[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-chip.status-clear[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-chip.status-potential[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-chip.status-confirmed[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-chip.status-false[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.risk-chip.risk-blocked[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n  font-weight: 600;\n}\n.risk-chip.risk-high[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n  font-weight: 600;\n}\n.risk-chip.risk-medium[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.risk-chip.risk-low[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.score[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.score.high-score[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.aliases-text[_ngcontent-%COMP%] {\n  max-width: 200px;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.reviewed-badge[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.reviewed-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 16px;\n  color: #999;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 28px;\n  width: 520px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.2s ease;\n}\n.dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.review-dialog[_ngcontent-%COMP%] {\n  width: 480px;\n}\n.review-info[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.review-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px 16px;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.dark-mode[_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: #1e1e2d !important;\n  border-color: #2d2d3d;\n}\n.dark-mode[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n.dark-mode[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.dark-mode[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  border-color: #2d2d3d;\n}\n.dark-mode[_nghost-%COMP%]   .match-row[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .match-row[_ngcontent-%COMP%] {\n  background: #2d2a1e !important;\n}\n.dark-mode[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%] {\n  background: #1e1e2d;\n  color: #e0e0e0;\n}\n.dark-mode[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n.dark-mode[_nghost-%COMP%]   .review-info[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .review-info[_ngcontent-%COMP%] {\n  background: #2d2d3d;\n}\n.dark-mode[_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  color: #666;\n}\n.dark-mode[_nghost-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n/*# sourceMappingURL=sanctions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SanctionsComponent, [{
    type: Component,
    args: [{ selector: "app-sanctions", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      MatTabsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatChipsModule,
      MatTooltipModule,
      MatPaginatorModule,
      MatProgressSpinnerModule
    ], template: `<div class="sanctions-page">\r
  <h2 class="page-title">Sanctions Management</h2>\r
\r
  <!-- Dashboard Cards -->\r
  <div class="dashboard-cards">\r
    <mat-card class="stat-card">\r
      <div class="card-inner">\r
        <div class="stat-icon entries"><mat-icon>person_search</mat-icon></div>\r
        <div class="stat-info">\r
          <span class="stat-value">{{ dashboard.activeSanctionEntries || 0 }}</span>\r
          <span class="stat-label">Sanctioned Persons</span>\r
        </div>\r
      </div>\r
    </mat-card>\r
    <mat-card class="stat-card">\r
      <div class="card-inner">\r
        <div class="stat-icon countries"><mat-icon>public_off</mat-icon></div>\r
        <div class="stat-info">\r
          <span class="stat-value">{{ dashboard.activeSanctionedCountries || 0 }}</span>\r
          <span class="stat-label">Sanctioned Countries</span>\r
        </div>\r
      </div>\r
    </mat-card>\r
    <mat-card class="stat-card">\r
      <div class="card-inner">\r
        <div class="stat-icon screenings"><mat-icon>verified_user</mat-icon></div>\r
        <div class="stat-info">\r
          <span class="stat-value">{{ dashboard.totalScreenings || 0 }}</span>\r
          <span class="stat-label">Total Screenings</span>\r
        </div>\r
      </div>\r
    </mat-card>\r
    <mat-card class="stat-card warn">\r
      <div class="card-inner">\r
        <div class="stat-icon pending"><mat-icon>warning</mat-icon></div>\r
        <div class="stat-info">\r
          <span class="stat-value">{{ dashboard.pendingReview || 0 }}</span>\r
          <span class="stat-label">Pending Review</span>\r
        </div>\r
      </div>\r
    </mat-card>\r
  </div>\r
\r
  <!-- Tabs -->\r
  <mat-tab-group (selectedIndexChange)="onTabChange($event)" [selectedIndex]="activeTab">\r
\r
    <!-- Tab 1: Sanctioned Persons/Entities -->\r
    <mat-tab label="Sanctioned Persons">\r
      <div class="tab-content">\r
        <div class="tab-toolbar">\r
          <mat-form-field appearance="outline" class="search-field">\r
            <mat-icon matPrefix>search</mat-icon>\r
            <input matInput placeholder="Search entries..." [(ngModel)]="entriesSearch" (ngModelChange)="onEntriesSearch()">\r
          </mat-form-field>\r
          <div class="toolbar-actions">\r
            <button mat-stroked-button (click)="exportEntries('excel')">\r
              <mat-icon>download</mat-icon> Export\r
            </button>\r
            <button mat-flat-button color="primary" (click)="openEntryForm()">\r
              <mat-icon>add</mat-icon> Add Entry\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="table-container">\r
          <mat-spinner *ngIf="loadingEntries" diameter="36" class="center-spinner"></mat-spinner>\r
          <table mat-table [dataSource]="entries" *ngIf="!loadingEntries">\r
            <ng-container matColumnDef="name">\r
              <th mat-header-cell *matHeaderCellDef>Name</th>\r
              <td mat-cell *matCellDef="let row">\r
                <strong>{{ row.name }}</strong>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="entryType">\r
              <th mat-header-cell *matHeaderCellDef>Type</th>\r
              <td mat-cell *matCellDef="let row">\r
                <span class="chip type-chip">{{ row.entryType }}</span>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="listSource">\r
              <th mat-header-cell *matHeaderCellDef>Source</th>\r
              <td mat-cell *matCellDef="let row">{{ row.listSource }}</td>\r
            </ng-container>\r
            <ng-container matColumnDef="aliases">\r
              <th mat-header-cell *matHeaderCellDef>Aliases</th>\r
              <td mat-cell *matCellDef="let row">\r
                <span class="aliases-text">{{ row.aliases || '-' }}</span>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="nationality">\r
              <th mat-header-cell *matHeaderCellDef>Nationality</th>\r
              <td mat-cell *matCellDef="let row">{{ row.nationality || '-' }}</td>\r
            </ng-container>\r
            <ng-container matColumnDef="isActive">\r
              <th mat-header-cell *matHeaderCellDef>Status</th>\r
              <td mat-cell *matCellDef="let row">\r
                <span class="chip" [class.active]="row.isActive" [class.inactive]="!row.isActive">\r
                  {{ row.isActive ? 'Active' : 'Inactive' }}\r
                </span>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="createdAt">\r
              <th mat-header-cell *matHeaderCellDef>Added</th>\r
              <td mat-cell *matCellDef="let row">{{ row.createdAt | date:'mediumDate' }}</td>\r
            </ng-container>\r
            <ng-container matColumnDef="actions">\r
              <th mat-header-cell *matHeaderCellDef>Actions</th>\r
              <td mat-cell *matCellDef="let row">\r
                <button mat-icon-button matTooltip="Edit" (click)="openEntryForm(row)">\r
                  <mat-icon>edit</mat-icon>\r
                </button>\r
                <button mat-icon-button [matTooltip]="row.isActive ? 'Deactivate' : 'Activate'" (click)="toggleEntry(row)">\r
                  <mat-icon>{{ row.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>\r
                </button>\r
                <button mat-icon-button matTooltip="Delete" color="warn" (click)="deleteEntry(row)">\r
                  <mat-icon>delete</mat-icon>\r
                </button>\r
              </td>\r
            </ng-container>\r
            <tr mat-header-row *matHeaderRowDef="entryColumns"></tr>\r
            <tr mat-row *matRowDef="let row; columns: entryColumns;"></tr>\r
          </table>\r
          <div *ngIf="!loadingEntries && entries.length === 0" class="empty-state">\r
            <mat-icon>person_search</mat-icon>\r
            <p>No sanction entries found</p>\r
          </div>\r
        </div>\r
        <mat-paginator\r
          [length]="entriesTotalCount"\r
          [pageSize]="entriesPageSize"\r
          [pageIndex]="entriesPage - 1"\r
          [pageSizeOptions]="[10, 20, 50]"\r
          (page)="onEntriesPage($event)"\r
          showFirstLastButtons>\r
        </mat-paginator>\r
      </div>\r
    </mat-tab>\r
\r
    <!-- Tab 2: Sanctioned Countries -->\r
    <mat-tab label="Sanctioned Countries">\r
      <div class="tab-content">\r
        <div class="tab-toolbar">\r
          <div></div>\r
          <button mat-flat-button color="primary" (click)="openCountryForm()">\r
            <mat-icon>add</mat-icon> Add Country\r
          </button>\r
        </div>\r
\r
        <div class="table-container">\r
          <mat-spinner *ngIf="loadingCountries" diameter="36" class="center-spinner"></mat-spinner>\r
          <table mat-table [dataSource]="countries" *ngIf="!loadingCountries">\r
            <ng-container matColumnDef="countryCode">\r
              <th mat-header-cell *matHeaderCellDef>Code</th>\r
              <td mat-cell *matCellDef="let row">\r
                <strong>{{ row.countryCode }}</strong>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="countryName">\r
              <th mat-header-cell *matHeaderCellDef>Country</th>\r
              <td mat-cell *matCellDef="let row">{{ row.countryName }}</td>\r
            </ng-container>\r
            <ng-container matColumnDef="sanctionType">\r
              <th mat-header-cell *matHeaderCellDef>Sanction Type</th>\r
              <td mat-cell *matCellDef="let row">\r
                <span class="chip" [class.full-sanction]="row.sanctionType === 'Full'" [class.partial-sanction]="row.sanctionType === 'Partial'">\r
                  {{ row.sanctionType }}\r
                </span>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="riskLevel">\r
              <th mat-header-cell *matHeaderCellDef>Risk Level</th>\r
              <td mat-cell *matCellDef="let row">\r
                <span class="chip risk-chip"\r
                  [class.risk-blocked]="row.riskLevel === 'Blocked'"\r
                  [class.risk-high]="row.riskLevel === 'High'"\r
                  [class.risk-medium]="row.riskLevel === 'Medium'"\r
                  [class.risk-low]="row.riskLevel === 'Low'"\r
                  [matTooltip]="getRiskLevelDescription(row.riskLevel)">\r
                  {{ row.riskLevel }}\r
                </span>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="listSource">\r
              <th mat-header-cell *matHeaderCellDef>Source</th>\r
              <td mat-cell *matCellDef="let row">{{ row.listSource }}</td>\r
            </ng-container>\r
            <ng-container matColumnDef="isActive">\r
              <th mat-header-cell *matHeaderCellDef>Status</th>\r
              <td mat-cell *matCellDef="let row">\r
                <span class="chip" [class.active]="row.isActive" [class.inactive]="!row.isActive">\r
                  {{ row.isActive ? 'Active' : 'Inactive' }}\r
                </span>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="createdAt">\r
              <th mat-header-cell *matHeaderCellDef>Added</th>\r
              <td mat-cell *matCellDef="let row">{{ row.createdAt | date:'mediumDate' }}</td>\r
            </ng-container>\r
            <ng-container matColumnDef="actions">\r
              <th mat-header-cell *matHeaderCellDef>Actions</th>\r
              <td mat-cell *matCellDef="let row">\r
                <button mat-icon-button matTooltip="Edit" (click)="openCountryForm(row)">\r
                  <mat-icon>edit</mat-icon>\r
                </button>\r
                <button mat-icon-button [matTooltip]="row.isActive ? 'Deactivate' : 'Activate'" (click)="toggleCountry(row)">\r
                  <mat-icon>{{ row.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>\r
                </button>\r
                <button mat-icon-button matTooltip="Delete" color="warn" (click)="deleteCountry(row)">\r
                  <mat-icon>delete</mat-icon>\r
                </button>\r
              </td>\r
            </ng-container>\r
            <tr mat-header-row *matHeaderRowDef="countryColumns"></tr>\r
            <tr mat-row *matRowDef="let row; columns: countryColumns;"></tr>\r
          </table>\r
          <div *ngIf="!loadingCountries && countries.length === 0" class="empty-state">\r
            <mat-icon>public_off</mat-icon>\r
            <p>No sanctioned countries configured</p>\r
          </div>\r
        </div>\r
      </div>\r
    </mat-tab>\r
\r
    <!-- Tab 3: Screening Results -->\r
    <mat-tab label="Screening Results">\r
      <div class="tab-content">\r
        <div class="tab-toolbar">\r
          <mat-form-field appearance="outline" class="search-field">\r
            <mat-icon matPrefix>search</mat-icon>\r
            <input matInput placeholder="Search screenings..." [(ngModel)]="screeningsSearch" (ngModelChange)="onScreeningsSearch()">\r
          </mat-form-field>\r
        </div>\r
\r
        <div class="table-container">\r
          <mat-spinner *ngIf="loadingScreenings" diameter="36" class="center-spinner"></mat-spinner>\r
          <table mat-table [dataSource]="screenings" *ngIf="!loadingScreenings">\r
            <ng-container matColumnDef="screenedName">\r
              <th mat-header-cell *matHeaderCellDef>Screened Name</th>\r
              <td mat-cell *matCellDef="let row">{{ row.screenedName }}</td>\r
            </ng-container>\r
            <ng-container matColumnDef="screenedType">\r
              <th mat-header-cell *matHeaderCellDef>Type</th>\r
              <td mat-cell *matCellDef="let row">\r
                <span class="chip type-chip">{{ row.screenedType }}</span>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="status">\r
              <th mat-header-cell *matHeaderCellDef>Status</th>\r
              <td mat-cell *matCellDef="let row">\r
                <span class="chip status-chip"\r
                  [class.status-clear]="row.status === 'Clear'"\r
                  [class.status-potential]="row.status === 'PotentialMatch'"\r
                  [class.status-confirmed]="row.status === 'ConfirmedMatch'"\r
                  [class.status-false]="row.status === 'FalsePositive'">\r
                  {{ row.status }}\r
                </span>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="matchedName">\r
              <th mat-header-cell *matHeaderCellDef>Matched Against</th>\r
              <td mat-cell *matCellDef="let row">{{ row.matchedName || '-' }}</td>\r
            </ng-container>\r
            <ng-container matColumnDef="matchScore">\r
              <th mat-header-cell *matHeaderCellDef>Score</th>\r
              <td mat-cell *matCellDef="let row">\r
                <span *ngIf="row.matchScore" class="score" [class.high-score]="row.matchScore >= 0.8">\r
                  {{ getScorePercent(row.matchScore) }}\r
                </span>\r
                <span *ngIf="!row.matchScore">-</span>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="transactionId">\r
              <th mat-header-cell *matHeaderCellDef>Transaction</th>\r
              <td mat-cell *matCellDef="let row">{{ row.transactionId || '-' }}</td>\r
            </ng-container>\r
            <ng-container matColumnDef="createdAt">\r
              <th mat-header-cell *matHeaderCellDef>Date</th>\r
              <td mat-cell *matCellDef="let row">{{ row.createdAt | date:'short' }}</td>\r
            </ng-container>\r
            <ng-container matColumnDef="actions">\r
              <th mat-header-cell *matHeaderCellDef>Actions</th>\r
              <td mat-cell *matCellDef="let row">\r
                <button mat-icon-button matTooltip="Review" (click)="openReviewForm(row)"\r
                  *ngIf="row.status === 'PotentialMatch' && !row.reviewedBy">\r
                  <mat-icon>rate_review</mat-icon>\r
                </button>\r
                <span *ngIf="row.reviewedBy" class="reviewed-badge" [matTooltip]="'Reviewed by ' + row.reviewedBy + (row.reviewNotes ? ': ' + row.reviewNotes : '')">\r
                  <mat-icon>check_circle</mat-icon>\r
                </span>\r
              </td>\r
            </ng-container>\r
            <tr mat-header-row *matHeaderRowDef="screeningColumns"></tr>\r
            <tr mat-row *matRowDef="let row; columns: screeningColumns;"\r
              [class.match-row]="row.status === 'PotentialMatch' || row.status === 'ConfirmedMatch'"></tr>\r
          </table>\r
          <div *ngIf="!loadingScreenings && screenings.length === 0" class="empty-state">\r
            <mat-icon>verified_user</mat-icon>\r
            <p>No screening results yet</p>\r
          </div>\r
        </div>\r
        <mat-paginator\r
          [length]="screeningsTotalCount"\r
          [pageSize]="screeningsPageSize"\r
          [pageIndex]="screeningsPage - 1"\r
          [pageSizeOptions]="[10, 20, 50]"\r
          (page)="onScreeningsPage($event)"\r
          showFirstLastButtons>\r
        </mat-paginator>\r
      </div>\r
    </mat-tab>\r
  </mat-tab-group>\r
</div>\r
\r
<!-- Entry Form Dialog -->\r
<div class="dialog-overlay" *ngIf="showEntryForm" (click)="closeEntryForm()">\r
  <div class="dialog-content" (click)="$event.stopPropagation()">\r
    <h3>{{ editingEntry ? 'Edit' : 'Add' }} Sanction Entry</h3>\r
    <div class="form-grid">\r
      <mat-form-field appearance="outline" class="full-width">\r
        <mat-label>Name *</mat-label>\r
        <input matInput [(ngModel)]="entryForm.name" placeholder="Full name or organization">\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Entry Type</mat-label>\r
        <mat-select [(ngModel)]="entryForm.entryType">\r
          <mat-option *ngFor="let t of entryTypes" [value]="t">{{ t }}</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>List Source</mat-label>\r
        <mat-select [(ngModel)]="entryForm.listSource">\r
          <mat-option *ngFor="let s of listSources" [value]="s">{{ s }}</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline" class="full-width">\r
        <mat-label>Aliases (comma-separated)</mat-label>\r
        <input matInput [(ngModel)]="entryForm.aliases" placeholder="e.g. AKA Name 1, AKA Name 2">\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Nationality</mat-label>\r
        <input matInput [(ngModel)]="entryForm.nationality">\r
      </mat-form-field>\r
      <mat-form-field appearance="outline" class="full-width">\r
        <mat-label>Remarks</mat-label>\r
        <textarea matInput [(ngModel)]="entryForm.remarks" rows="2"></textarea>\r
      </mat-form-field>\r
    </div>\r
    <div class="dialog-actions">\r
      <button mat-stroked-button (click)="closeEntryForm()">Cancel</button>\r
      <button mat-flat-button color="primary" (click)="saveEntry()">{{ editingEntry ? 'Update' : 'Create' }}</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Country Form Dialog -->\r
<div class="dialog-overlay" *ngIf="showCountryForm" (click)="closeCountryForm()">\r
  <div class="dialog-content" (click)="$event.stopPropagation()">\r
    <h3>{{ editingCountry ? 'Edit' : 'Add' }} Sanctioned Country</h3>\r
    <div class="form-grid">\r
      <mat-form-field appearance="outline" class="full-width">\r
        <mat-label>Select Country *</mat-label>\r
        <mat-select [(ngModel)]="countryForm.countryName" (ngModelChange)="onCountrySelected($event)"\r
          [disabled]="!!editingCountry">\r
          <mat-option *ngFor="let c of referenceCountries" [value]="c.name">{{ c.name }}</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Sanction Type</mat-label>\r
        <mat-select [(ngModel)]="countryForm.sanctionType">\r
          <mat-option *ngFor="let t of sanctionTypes" [value]="t">{{ t }}</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Risk Level</mat-label>\r
        <mat-select [(ngModel)]="countryForm.riskLevel">\r
          <mat-option *ngFor="let r of riskLevels" [value]="r">{{ r }}</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>List Source</mat-label>\r
        <mat-select [(ngModel)]="countryForm.listSource">\r
          <mat-option *ngFor="let s of listSources" [value]="s">{{ s }}</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline" class="full-width">\r
        <mat-label>Remarks</mat-label>\r
        <textarea matInput [(ngModel)]="countryForm.remarks" rows="2"></textarea>\r
      </mat-form-field>\r
    </div>\r
    <div class="dialog-actions">\r
      <button mat-stroked-button (click)="closeCountryForm()">Cancel</button>\r
      <button mat-flat-button color="primary" (click)="saveCountry()">{{ editingCountry ? 'Update' : 'Add' }}</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Review Form Dialog -->\r
<div class="dialog-overlay" *ngIf="showReviewForm" (click)="closeReviewForm()">\r
  <div class="dialog-content review-dialog" (click)="$event.stopPropagation()">\r
    <h3>Review Screening Match</h3>\r
    <div class="review-info" *ngIf="reviewingScreening">\r
      <p><strong>Screened:</strong> {{ reviewingScreening.screenedName }} ({{ reviewingScreening.screenedType }})</p>\r
      <p><strong>Matched:</strong> {{ reviewingScreening.matchedName }} ({{ reviewingScreening.matchedListSource }})</p>\r
      <p><strong>Score:</strong> {{ getScorePercent(reviewingScreening.matchScore) }}</p>\r
    </div>\r
    <div class="form-grid">\r
      <mat-form-field appearance="outline" class="full-width">\r
        <mat-label>Decision</mat-label>\r
        <mat-select [(ngModel)]="reviewForm.status">\r
          <mat-option value="ConfirmedMatch">Confirmed Match</mat-option>\r
          <mat-option value="FalsePositive">False Positive</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline" class="full-width">\r
        <mat-label>Review Notes</mat-label>\r
        <textarea matInput [(ngModel)]="reviewForm.reviewNotes" rows="3" placeholder="Reason for decision..."></textarea>\r
      </mat-form-field>\r
    </div>\r
    <div class="dialog-actions">\r
      <button mat-stroked-button (click)="closeReviewForm()">Cancel</button>\r
      <button mat-flat-button color="primary" (click)="submitReview()">Submit Review</button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/admin/sanctions/sanctions.component.scss */\n.sanctions-page {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  color: #1a1a2e;\n}\n.dashboard-cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.stat-card {\n  border-radius: 8px !important;\n  border: 1px solid #e8e8e8;\n  box-shadow: none !important;\n  overflow: hidden;\n}\n.stat-card ::ng-deep .mdc-card {\n  padding: 0 !important;\n}\n.stat-card ::ng-deep .mat-mdc-card-content,\n.stat-card ::ng-deep mat-card-content {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.stat-card .card-inner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n}\n.stat-card.warn .stat-icon {\n  background: #fff3e0;\n  color: #e65100;\n}\n.stat-icon {\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n}\n.stat-icon.entries {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.stat-icon.countries {\n  background: #fce4ec;\n  color: #c62828;\n}\n.stat-icon.screenings {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.stat-icon.pending {\n  background: #fff3e0;\n  color: #e65100;\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.stat-value {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #1a1a2e;\n}\n.stat-label {\n  font-size: 11px;\n  color: #666;\n  margin-top: 2px;\n  line-height: 1.2;\n}\n.tab-content {\n  padding: 16px 0;\n}\n.tab-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.search-field {\n  width: 320px;\n}\n.search-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.table-container {\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid #e8e8e8;\n  min-height: 120px;\n  position: relative;\n}\ntable {\n  width: 100%;\n}\n.center-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-header-cell {\n  font-weight: 600;\n  color: #555;\n  font-size: 13px;\n}\n.mat-mdc-cell {\n  font-size: 13px;\n}\n.match-row {\n  background: #fff8e1 !important;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.chip.active {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.inactive {\n  background: #fafafa;\n  color: #999;\n}\n.chip.full-sanction {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.partial-sanction {\n  background: #fff3e0;\n  color: #e65100;\n}\n.type-chip {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-chip.status-clear {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-chip.status-potential {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-chip.status-confirmed {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-chip.status-false {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.risk-chip.risk-blocked {\n  background: #ffebee;\n  color: #c62828;\n  font-weight: 600;\n}\n.risk-chip.risk-high {\n  background: #fff3e0;\n  color: #e65100;\n  font-weight: 600;\n}\n.risk-chip.risk-medium {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.risk-chip.risk-low {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.score {\n  font-weight: 600;\n}\n.score.high-score {\n  color: #c62828;\n}\n.aliases-text {\n  max-width: 200px;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.reviewed-badge {\n  color: #2e7d32;\n}\n.reviewed-badge mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 16px;\n  color: #999;\n}\n.empty-state mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n}\n.empty-state p {\n  font-size: 14px;\n}\n.dialog-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fadeIn 0.15s ease;\n}\n.dialog-content {\n  background: white;\n  border-radius: 16px;\n  padding: 28px;\n  width: 520px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: slideUp 0.2s ease;\n}\n.dialog-content h3 {\n  margin: 0 0 20px 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.review-dialog {\n  width: 480px;\n}\n.review-info {\n  background: #f5f5f5;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.review-info p {\n  margin: 4px 0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px 16px;\n}\n.form-grid .full-width {\n  grid-column: 1/-1;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n:host-context(.dark-mode) .page-title {\n  color: #e0e0e0;\n}\n:host-context(.dark-mode) .stat-card {\n  background: #1e1e2d !important;\n  border-color: #2d2d3d;\n}\n:host-context(.dark-mode) .stat-value {\n  color: #e0e0e0;\n}\n:host-context(.dark-mode) .stat-label {\n  color: #aaa;\n}\n:host-context(.dark-mode) .table-container {\n  border-color: #2d2d3d;\n}\n:host-context(.dark-mode) .match-row {\n  background: #2d2a1e !important;\n}\n:host-context(.dark-mode) .dialog-content {\n  background: #1e1e2d;\n  color: #e0e0e0;\n}\n:host-context(.dark-mode) .dialog-content h3 {\n  color: #e0e0e0;\n}\n:host-context(.dark-mode) .review-info {\n  background: #2d2d3d;\n}\n:host-context(.dark-mode) .empty-state {\n  color: #666;\n}\n:host-context(.dark-mode) .mat-mdc-header-cell {\n  color: #aaa;\n}\n/*# sourceMappingURL=sanctions.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SanctionsComponent, { className: "SanctionsComponent", filePath: "src/app/pages/admin/sanctions/sanctions.component.ts", lineNumber: 32 });
})();
export {
  SanctionsComponent
};
//# sourceMappingURL=chunk-74KSMEOU.js.map
