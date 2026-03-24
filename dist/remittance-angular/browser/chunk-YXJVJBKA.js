import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatNativeDateModule
} from "./chunk-3R4NSCNF.js";
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
import "./chunk-IOMUWKJD.js";
import "./chunk-Q6H4NCRS.js";
import {
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
  MatCardContent,
  MatCardModule
} from "./chunk-JCOTY37K.js";
import "./chunk-UIJ624TU.js";
import {
  MatFormField,
  MatLabel,
  MatSuffix
} from "./chunk-ZCHVZ7GG.js";
import {
  ApiService
} from "./chunk-2RUHVO6L.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButton,
  MatButtonModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-WDVIFEQ7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MK4SB477.js";
import "./chunk-GPY2JV2J.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-MZ37WZKD.js";
import {
  Component,
  setClassMetadata,
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
  ɵɵreference,
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

// src/app/pages/admin/reports/agent-statement/agent-statement.component.ts
function AgentStatementComponent_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agent_r2 = ctx.$implicit;
    \u0275\u0275property("value", agent_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", agent_r2.businessName, " ");
  }
}
function AgentStatementComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 17);
    \u0275\u0275elementEnd();
  }
}
function AgentStatementComponent_ng_container_32_mat_card_178_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 63)(1, "mat-card-content")(2, "h3", 60);
    \u0275\u0275text(3, "Balance Entry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64)(5, "mat-form-field", 6)(6, "mat-label");
    \u0275\u0275text(7, "Entry Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_ng_container_32_mat_card_178_Template_mat_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.balanceEntry.entryType, $event) || (ctx_r3.balanceEntry.entryType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "mat-option", 65);
    \u0275\u0275text(10, "Credit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 66);
    \u0275\u0275text(12, "Debit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-form-field", 6)(14, "mat-label");
    \u0275\u0275text(15, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_ng_container_32_mat_card_178_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.balanceEntry.amount, $event) || (ctx_r3.balanceEntry.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 6)(18, "mat-label");
    \u0275\u0275text(19, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_ng_container_32_mat_card_178_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.balanceEntry.description, $event) || (ctx_r3.balanceEntry.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 69);
    \u0275\u0275listener("click", function AgentStatementComponent_ng_container_32_mat_card_178_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.submitBalanceEntry());
    });
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.balanceEntry.entryType);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.balanceEntry.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.balanceEntry.description);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.submittingEntry);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.submittingEntry ? "Submitting..." : "Submit Entry", " ");
  }
}
function AgentStatementComponent_ng_container_32_table_184_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 83);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function AgentStatementComponent_ng_container_32_table_184_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 84);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r5.createdAt, "yyyy-MM-dd HH:mm"));
  }
}
function AgentStatementComponent_ng_container_32_table_184_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 83);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function AgentStatementComponent_ng_container_32_table_184_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 84)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", row_r6.entryType === "Credit" ? "status-completed" : "status-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.entryType, " ");
  }
}
function AgentStatementComponent_ng_container_32_table_184_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 86);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function AgentStatementComponent_ng_container_32_table_184_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 87);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275property("ngClass", row_r7.entryType === "Credit" ? "text-green" : "text-red");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, row_r7.amount, "1.2-2"), " ");
  }
}
function AgentStatementComponent_ng_container_32_table_184_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 86);
    \u0275\u0275text(1, "Balance After");
    \u0275\u0275elementEnd();
  }
}
function AgentStatementComponent_ng_container_32_table_184_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 88);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r8.balanceAfter, "1.2-2"), " ");
  }
}
function AgentStatementComponent_ng_container_32_table_184_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 83);
    \u0275\u0275text(1, "Description");
    \u0275\u0275elementEnd();
  }
}
function AgentStatementComponent_ng_container_32_table_184_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.description || "\u2014");
  }
}
function AgentStatementComponent_ng_container_32_table_184_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 89);
  }
}
function AgentStatementComponent_ng_container_32_table_184_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 90);
  }
}
function AgentStatementComponent_ng_container_32_table_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 70);
    \u0275\u0275elementContainerStart(1, 71);
    \u0275\u0275template(2, AgentStatementComponent_ng_container_32_table_184_th_2_Template, 2, 0, "th", 72)(3, AgentStatementComponent_ng_container_32_table_184_td_3_Template, 3, 4, "td", 73);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 74);
    \u0275\u0275template(5, AgentStatementComponent_ng_container_32_table_184_th_5_Template, 2, 0, "th", 72)(6, AgentStatementComponent_ng_container_32_table_184_td_6_Template, 3, 2, "td", 73);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 75);
    \u0275\u0275template(8, AgentStatementComponent_ng_container_32_table_184_th_8_Template, 2, 0, "th", 76)(9, AgentStatementComponent_ng_container_32_table_184_td_9_Template, 3, 5, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 78);
    \u0275\u0275template(11, AgentStatementComponent_ng_container_32_table_184_th_11_Template, 2, 0, "th", 76)(12, AgentStatementComponent_ng_container_32_table_184_td_12_Template, 3, 4, "td", 79);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 80);
    \u0275\u0275template(14, AgentStatementComponent_ng_container_32_table_184_th_14_Template, 2, 0, "th", 72)(15, AgentStatementComponent_ng_container_32_table_184_td_15_Template, 2, 1, "td", 73);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(16, AgentStatementComponent_ng_container_32_table_184_tr_16_Template, 1, 0, "tr", 81)(17, AgentStatementComponent_ng_container_32_table_184_tr_17_Template, 1, 0, "tr", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dataSource", ctx_r3.ledgerEntries);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r3.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r3.displayedColumns);
  }
}
function AgentStatementComponent_ng_container_32_p_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 91);
    \u0275\u0275text(1, "No ledger entries found for the selected period.");
    \u0275\u0275elementEnd();
  }
}
function AgentStatementComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18)(2, "mat-card", 19)(3, "mat-card-content")(4, "div", 20)(5, "div", 21)(6, "span", 22);
    \u0275\u0275text(7, "Final Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-icon", 24);
    \u0275\u0275text(12, "account_balance_wallet");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "mat-card", 25)(14, "mat-card-content")(15, "div", 20)(16, "div", 21)(17, "span", 22);
    \u0275\u0275text(18, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 26);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-icon", 27);
    \u0275\u0275text(23, "credit_score");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "mat-card", 28)(25, "mat-card-content")(26, "div", 20)(27, "div", 21)(28, "span", 22);
    \u0275\u0275text(29, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 29);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-icon", 30);
    \u0275\u0275text(34, "savings");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "mat-card", 31)(36, "mat-card-content")(37, "div", 20)(38, "div", 21)(39, "span", 22);
    \u0275\u0275text(40, "Transactions Sent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 32);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "mat-icon", 33);
    \u0275\u0275text(45, "send");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "mat-card", 25)(47, "mat-card-content")(48, "div", 20)(49, "div", 21)(50, "span", 22);
    \u0275\u0275text(51, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 26);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "mat-icon", 27);
    \u0275\u0275text(56, "check_circle");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "mat-card", 34)(58, "mat-card-content")(59, "div", 20)(60, "div", 21)(61, "span", 22);
    \u0275\u0275text(62, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 35);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "mat-icon", 36);
    \u0275\u0275text(67, "cancel");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "mat-card", 37)(69, "mat-card-content")(70, "div", 20)(71, "div", 21)(72, "span", 22);
    \u0275\u0275text(73, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 38);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "mat-icon", 39);
    \u0275\u0275text(78, "hourglass_empty");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "mat-card", 40)(80, "mat-card-content")(81, "div", 20)(82, "div", 21)(83, "span", 22);
    \u0275\u0275text(84, "On Hold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 41);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "mat-icon", 42);
    \u0275\u0275text(89, "pause_circle");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(90, "mat-card", 43)(91, "mat-card-content")(92, "div", 20)(93, "div", 21)(94, "span", 22);
    \u0275\u0275text(95, "Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span", 44);
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "mat-icon", 45);
    \u0275\u0275text(100, "paid");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(101, "mat-card", 46)(102, "mat-card-content")(103, "div", 20)(104, "div", 21)(105, "span", 22);
    \u0275\u0275text(106, "Payout Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span", 47);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "mat-icon", 48);
    \u0275\u0275text(111, "payments");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(112, "mat-card", 49)(113, "mat-card-content")(114, "div", 20)(115, "div", 21)(116, "span", 22);
    \u0275\u0275text(117, "Our Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "span", 50);
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "mat-icon", 51);
    \u0275\u0275text(122, "corporate_fare");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(123, "mat-card", 52)(124, "mat-card-content")(125, "div", 20)(126, "div", 21)(127, "span", 22);
    \u0275\u0275text(128, "Credit Given");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "span", 53);
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "mat-icon", 54);
    \u0275\u0275text(133, "arrow_downward");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(134, "mat-card", 55)(135, "mat-card-content")(136, "div", 20)(137, "div", 21)(138, "span", 22);
    \u0275\u0275text(139, "Debit Given");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "span", 56);
    \u0275\u0275text(141);
    \u0275\u0275pipe(142, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "mat-icon", 57);
    \u0275\u0275text(144, "arrow_upward");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(145, "mat-card", 31)(146, "mat-card-content")(147, "div", 20)(148, "div", 21)(149, "span", 22);
    \u0275\u0275text(150, "FX Gain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "span", 32);
    \u0275\u0275text(152);
    \u0275\u0275pipe(153, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(154, "mat-icon", 33);
    \u0275\u0275text(155, "currency_exchange");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(156, "mat-card", 19)(157, "mat-card-content")(158, "div", 20)(159, "div", 21)(160, "span", 22);
    \u0275\u0275text(161, "Net Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "span", 23);
    \u0275\u0275text(163);
    \u0275\u0275pipe(164, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "mat-icon", 24);
    \u0275\u0275text(166, "trending_up");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(167, "mat-card", 43)(168, "mat-card-content")(169, "div", 20)(170, "div", 21)(171, "span", 22);
    \u0275\u0275text(172, "Total Send Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "span", 44);
    \u0275\u0275text(174);
    \u0275\u0275pipe(175, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "mat-icon", 45);
    \u0275\u0275text(177, "swap_horiz");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(178, AgentStatementComponent_ng_container_32_mat_card_178_Template, 25, 5, "mat-card", 58);
    \u0275\u0275elementStart(179, "mat-card", 59)(180, "mat-card-content")(181, "h3", 60);
    \u0275\u0275text(182, "Ledger Entries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "div", 61);
    \u0275\u0275template(184, AgentStatementComponent_ng_container_32_table_184_Template, 18, 3, "table", 62)(185, AgentStatementComponent_ng_container_32_p_185_Template, 2, 0, "p", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 19, ctx_r3.report.currentBalance, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 22, ctx_r3.report.creditLimit, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 25, ctx_r3.report.availableBalance, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 28, ctx_r3.report.totalTransactionsSent, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 31, ctx_r3.report.completedCount, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 34, ctx_r3.report.cancelledCount, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 37, ctx_r3.report.pendingCount, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 40, ctx_r3.report.onHoldCount, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(98, 43, ctx_r3.report.agentCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(109, 46, ctx_r3.report.payoutAgentCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(120, 49, ctx_r3.report.companyCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(131, 52, ctx_r3.report.creditGiven, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(142, 55, ctx_r3.report.debitGiven, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(153, 58, ctx_r3.report.fxGain, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(164, 61, ctx_r3.report.netRevenue, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(175, 64, ctx_r3.report.totalSendVolume, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.selectedAgentId);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r3.ledgerEntries.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.ledgerEntries.length === 0);
  }
}
function AgentStatementComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 91);
    \u0275\u0275text(1, "No data available. Please select filters and click Generate.");
    \u0275\u0275elementEnd();
  }
}
var AgentStatementComponent = class _AgentStatementComponent {
  constructor(api, notification, decimalPipe, datePipe) {
    this.api = api;
    this.notification = notification;
    this.decimalPipe = decimalPipe;
    this.datePipe = datePipe;
    this.agents = [];
    this.selectedAgentId = 0;
    this.startDateObj = null;
    this.endDateObj = null;
    this.loading = false;
    this.report = null;
    this.ledgerEntries = [];
    this.displayedColumns = ["createdAt", "entryType", "amount", "balanceAfter", "description"];
    this.balanceEntry = {
      agentId: 0,
      entryType: "Credit",
      amount: 0,
      description: ""
    };
    this.submittingEntry = false;
  }
  ngOnInit() {
    this.setDefaultDates();
    this.loadAgents();
    this.loadReport();
  }
  setDefaultDates() {
    const today = /* @__PURE__ */ new Date();
    const thirtyDaysAgo = /* @__PURE__ */ new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    this.endDateObj = today;
    this.startDateObj = thirtyDaysAgo;
  }
  formatDate(d) {
    if (!d)
      return "";
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  loadAgents() {
    this.api.getReportAgentsList().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.agents = res.data;
        }
      },
      error: () => this.notification.error("Failed to load agents list.")
    });
  }
  loadReport() {
    this.loading = true;
    const params = { startDate: this.formatDate(this.startDateObj), endDate: this.formatDate(this.endDateObj) };
    if (this.selectedAgentId) {
      params.agentId = this.selectedAgentId;
    }
    this.api.getAgentStatement(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data) {
          this.report = res.data;
          this.ledgerEntries = res.data.ledgerEntries || [];
        } else {
          this.report = null;
          this.ledgerEntries = [];
          if (res.message) {
            this.notification.warn(res.message);
          }
        }
      },
      error: () => {
        this.loading = false;
        this.notification.error("Failed to load agent statement.");
      }
    });
  }
  submitBalanceEntry() {
    if (!this.selectedAgentId) {
      this.notification.warn("Please select an agent first.");
      return;
    }
    if (!this.balanceEntry.amount || this.balanceEntry.amount <= 0) {
      this.notification.warn("Please enter a valid amount.");
      return;
    }
    this.submittingEntry = true;
    const dto = {
      agentId: this.selectedAgentId,
      entryType: this.balanceEntry.entryType,
      amount: this.balanceEntry.amount,
      description: this.balanceEntry.description || void 0
    };
    this.api.createBalanceEntry(dto).subscribe({
      next: (res) => {
        this.submittingEntry = false;
        if (res.success) {
          this.notification.success(res.message || "Balance entry created successfully.");
          this.balanceEntry = { agentId: 0, entryType: "Credit", amount: 0, description: "" };
          this.loadReport();
        } else {
          this.notification.error(res.message || "Failed to create balance entry.");
        }
      },
      error: () => {
        this.submittingEntry = false;
        this.notification.error("Failed to create balance entry.");
      }
    });
  }
  static {
    this.\u0275fac = function AgentStatementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentStatementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(DecimalPipe), \u0275\u0275directiveInject(DatePipe));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentStatementComponent, selectors: [["app-agent-statement"]], features: [\u0275\u0275ProvidersFeature([DecimalPipe, DatePipe])], decls: 34, vars: 13, consts: [["startPicker", ""], ["endPicker", ""], [1, "report-page"], [1, "page-title"], [1, "filters-card"], [1, "filters-row"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "matDatepicker", "ngModel"], ["matIconSuffix", "", 3, "for"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "filter-btn", 3, "click", "disabled"], ["class", "loading-container", 4, "ngIf"], [4, "ngIf"], ["class", "empty-text", 4, "ngIf"], [1, "loading-container"], ["diameter", "48"], [1, "stats-grid"], [1, "stat-card", "stat-blue"], [1, "stat-inner"], [1, "stat-text"], [1, "stat-label"], [1, "stat-value", "stat-value-blue"], [1, "stat-icon", "stat-icon-blue"], [1, "stat-card", "stat-green"], [1, "stat-value", "stat-value-green"], [1, "stat-icon", "stat-icon-green"], [1, "stat-card", "stat-orange"], [1, "stat-value", "stat-value-orange"], [1, "stat-icon", "stat-icon-orange"], [1, "stat-card", "stat-indigo"], [1, "stat-value", "stat-value-indigo"], [1, "stat-icon", "stat-icon-indigo"], [1, "stat-card", "stat-red"], [1, "stat-value", "stat-value-red"], [1, "stat-icon", "stat-icon-red"], [1, "stat-card", "stat-amber"], [1, "stat-value", "stat-value-amber"], [1, "stat-icon", "stat-icon-amber"], [1, "stat-card", "stat-purple"], [1, "stat-value", "stat-value-purple"], [1, "stat-icon", "stat-icon-purple"], [1, "stat-card", "stat-teal"], [1, "stat-value", "stat-value-teal"], [1, "stat-icon", "stat-icon-teal"], [1, "stat-card", "stat-pink"], [1, "stat-value", "stat-value-pink"], [1, "stat-icon", "stat-icon-pink"], [1, "stat-card", "stat-cyan"], [1, "stat-value", "stat-value-cyan"], [1, "stat-icon", "stat-icon-cyan"], [1, "stat-card", "stat-lime"], [1, "stat-value", "stat-value-lime"], [1, "stat-icon", "stat-icon-lime"], [1, "stat-card", "stat-brown"], [1, "stat-value", "stat-value-brown"], [1, "stat-icon", "stat-icon-brown"], ["class", "balance-form-card", "style", "margin-bottom: 24px;", 4, "ngIf"], [1, "data-card"], [1, "section-title"], [1, "table-responsive"], ["mat-table", "", "class", "report-table", 3, "dataSource", 4, "ngIf"], [1, "balance-form-card", 2, "margin-bottom", "24px"], [1, "balance-form-row"], ["value", "Credit"], ["value", "Debit"], ["matInput", "", "type", "number", "min", "0", "placeholder", "0.00", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "Optional description", 3, "ngModelChange", "ngModel"], ["mat-raised-button", "", "color", "primary", 1, "submit-btn", 3, "click", "disabled"], ["mat-table", "", 1, "report-table", 3, "dataSource"], ["matColumnDef", "createdAt"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "entryType"], ["matColumnDef", "amount"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right mono-text", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "balanceAfter"], ["mat-cell", "", "class", "text-right mono-text", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "status-chip", 3, "ngClass"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right", "mono-text", 3, "ngClass"], ["mat-cell", "", 1, "text-right", "mono-text"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-text"]], template: function AgentStatementComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "h1", 3);
        \u0275\u0275text(2, "Agent Statement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-card", 4)(4, "mat-card-content")(5, "div", 5)(6, "mat-form-field", 6)(7, "mat-label");
        \u0275\u0275text(8, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.startDateObj, $event) || (ctx.startDateObj = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-datepicker-toggle", 8)(11, "mat-datepicker", null, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 6)(14, "mat-label");
        \u0275\u0275text(15, "End Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.endDateObj, $event) || (ctx.endDateObj = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "mat-datepicker-toggle", 8)(18, "mat-datepicker", null, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 6)(21, "mat-label");
        \u0275\u0275text(22, "Agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_Template_mat_select_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedAgentId, $event) || (ctx.selectedAgentId = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(24, "mat-option", 10);
        \u0275\u0275text(25, "All Agents");
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, AgentStatementComponent_mat_option_26_Template, 2, 2, "mat-option", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "button", 12);
        \u0275\u0275listener("click", function AgentStatementComponent_Template_button_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.loadReport());
        });
        \u0275\u0275elementStart(28, "mat-icon");
        \u0275\u0275text(29, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " Generate ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(31, AgentStatementComponent_div_31_Template, 2, 0, "div", 13)(32, AgentStatementComponent_ng_container_32_Template, 186, 67, "ng-container", 14)(33, AgentStatementComponent_p_33_Template, 2, 0, "p", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const startPicker_r10 = \u0275\u0275reference(12);
        const endPicker_r11 = \u0275\u0275reference(19);
        \u0275\u0275advance(9);
        \u0275\u0275property("matDatepicker", startPicker_r10);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDateObj);
        \u0275\u0275advance();
        \u0275\u0275property("for", startPicker_r10);
        \u0275\u0275advance(6);
        \u0275\u0275property("matDatepicker", endPicker_r11);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDateObj);
        \u0275\u0275advance();
        \u0275\u0275property("for", endPicker_r11);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedAgentId);
        \u0275\u0275advance();
        \u0275\u0275property("value", 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.agents);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.report);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.report);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      DecimalPipe,
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      MinValidator,
      NgModel,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatDatepickerModule,
      MatDatepicker,
      MatDatepickerInput,
      MatDatepickerToggle,
      MatNativeDateModule,
      MatTooltipModule
    ], styles: ['\n\n.report-page[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n.stat-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue[_ngcontent-%COMP%] {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-value-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-green[_ngcontent-%COMP%] {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-value-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-orange[_ngcontent-%COMP%] {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-value-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-red[_ngcontent-%COMP%] {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-value-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-value-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-teal[_ngcontent-%COMP%] {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-value-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-indigo[_ngcontent-%COMP%] {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-value-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-pink[_ngcontent-%COMP%] {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-value-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-amber[_ngcontent-%COMP%] {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-value-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-cyan[_ngcontent-%COMP%] {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-value-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-lime[_ngcontent-%COMP%] {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-value-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-brown[_ngcontent-%COMP%] {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.stat-value-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.data-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.report-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #ed6c02;\n}\n.status-onhold[_ngcontent-%COMP%] {\n  background: #9e9e9e;\n}\n.status-compliance[_ngcontent-%COMP%] {\n  background: #7b1fa2;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.balance-form-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.balance-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 160px;\n}\n.dark-mode[_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  background: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .balance-form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=agent-statement.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentStatementComponent, [{
    type: Component,
    args: [{ selector: "app-agent-statement", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTooltipModule
    ], providers: [DecimalPipe, DatePipe], template: `<div class="report-page">
  <h1 class="page-title">Agent Statement</h1>

  <!-- Filters -->
  <mat-card class="filters-card">
    <mat-card-content>
      <div class="filters-row">
        <mat-form-field appearance="outline">
          <mat-label>Start Date</mat-label>
          <input matInput [matDatepicker]="startPicker" [(ngModel)]="startDateObj" />
          <mat-datepicker-toggle matIconSuffix [for]="startPicker"></mat-datepicker-toggle>
          <mat-datepicker #startPicker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>End Date</mat-label>
          <input matInput [matDatepicker]="endPicker" [(ngModel)]="endDateObj" />
          <mat-datepicker-toggle matIconSuffix [for]="endPicker"></mat-datepicker-toggle>
          <mat-datepicker #endPicker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Agent</mat-label>
          <mat-select [(ngModel)]="selectedAgentId">
            <mat-option [value]="0">All Agents</mat-option>
            <mat-option *ngFor="let agent of agents" [value]="agent.id">
              {{ agent.businessName }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <button mat-raised-button color="primary" class="filter-btn" (click)="loadReport()" [disabled]="loading">
          <mat-icon>search</mat-icon>
          Generate
        </button>
      </div>
    </mat-card-content>
  </mat-card>

  <!-- Loading -->
  <div *ngIf="loading" class="loading-container">
    <mat-spinner diameter="48"></mat-spinner>
  </div>

  <!-- Report Content -->
  <ng-container *ngIf="!loading && report">

    <!-- Stat Cards -->
    <div class="stats-grid">
      <mat-card class="stat-card stat-blue">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Final Balance</span>
              <span class="stat-value stat-value-blue">{{ report.currentBalance | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-blue">account_balance_wallet</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-green">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Credit Limit</span>
              <span class="stat-value stat-value-green">{{ report.creditLimit | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-green">credit_score</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-orange">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Available Balance</span>
              <span class="stat-value stat-value-orange">{{ report.availableBalance | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-orange">savings</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-indigo">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Transactions Sent</span>
              <span class="stat-value stat-value-indigo">{{ report.totalTransactionsSent | number:'1.0-0' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-indigo">send</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-green">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Completed</span>
              <span class="stat-value stat-value-green">{{ report.completedCount | number:'1.0-0' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-green">check_circle</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-red">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Cancelled</span>
              <span class="stat-value stat-value-red">{{ report.cancelledCount | number:'1.0-0' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-red">cancel</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-amber">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Pending</span>
              <span class="stat-value stat-value-amber">{{ report.pendingCount | number:'1.0-0' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-amber">hourglass_empty</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-purple">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">On Hold</span>
              <span class="stat-value stat-value-purple">{{ report.onHoldCount | number:'1.0-0' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-purple">pause_circle</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-teal">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Agent Service Charge</span>
              <span class="stat-value stat-value-teal">{{ report.agentCommission | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-teal">paid</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-pink">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Payout Agent Service Charge</span>
              <span class="stat-value stat-value-pink">{{ report.payoutAgentCommission | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-pink">payments</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-cyan">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Our Service Charge</span>
              <span class="stat-value stat-value-cyan">{{ report.companyCommission | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-cyan">corporate_fare</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-lime">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Credit Given</span>
              <span class="stat-value stat-value-lime">{{ report.creditGiven | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-lime">arrow_downward</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-brown">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Debit Given</span>
              <span class="stat-value stat-value-brown">{{ report.debitGiven | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-brown">arrow_upward</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-indigo">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">FX Gain</span>
              <span class="stat-value stat-value-indigo">{{ report.fxGain | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-indigo">currency_exchange</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-blue">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Net Revenue</span>
              <span class="stat-value stat-value-blue">{{ report.netRevenue | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-blue">trending_up</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="stat-card stat-teal">
        <mat-card-content>
          <div class="stat-inner">
            <div class="stat-text">
              <span class="stat-label">Total Send Volume</span>
              <span class="stat-value stat-value-teal">{{ report.totalSendVolume | number:'1.2-2' }}</span>
            </div>
            <mat-icon class="stat-icon stat-icon-teal">swap_horiz</mat-icon>
          </div>
        </mat-card-content>
      </mat-card>
    </div>

    <!-- Balance Entry Form -->
    <mat-card *ngIf="selectedAgentId" class="balance-form-card" style="margin-bottom: 24px;">
      <mat-card-content>
        <h3 class="section-title">Balance Entry</h3>
        <div class="balance-form-row">
          <mat-form-field appearance="outline">
            <mat-label>Entry Type</mat-label>
            <mat-select [(ngModel)]="balanceEntry.entryType">
              <mat-option value="Credit">Credit</mat-option>
              <mat-option value="Debit">Debit</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Amount</mat-label>
            <input matInput type="number" [(ngModel)]="balanceEntry.amount" min="0" placeholder="0.00" />
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Description</mat-label>
            <input matInput [(ngModel)]="balanceEntry.description" placeholder="Optional description" />
          </mat-form-field>

          <button
            mat-raised-button
            color="primary"
            class="submit-btn"
            (click)="submitBalanceEntry()"
            [disabled]="submittingEntry"
          >
            <mat-icon>add_circle</mat-icon>
            {{ submittingEntry ? 'Submitting...' : 'Submit Entry' }}
          </button>
        </div>
      </mat-card-content>
    </mat-card>

    <!-- Ledger Entries Table -->
    <mat-card class="data-card">
      <mat-card-content>
        <h3 class="section-title">Ledger Entries</h3>
        <div class="table-responsive">
          <table mat-table [dataSource]="ledgerEntries" class="report-table" *ngIf="ledgerEntries.length > 0">
            <ng-container matColumnDef="createdAt">
              <th mat-header-cell *matHeaderCellDef>Date</th>
              <td mat-cell *matCellDef="let row">{{ row.createdAt | date:'yyyy-MM-dd HH:mm' }}</td>
            </ng-container>

            <ng-container matColumnDef="entryType">
              <th mat-header-cell *matHeaderCellDef>Type</th>
              <td mat-cell *matCellDef="let row">
                <span class="status-chip" [ngClass]="row.entryType === 'Credit' ? 'status-completed' : 'status-cancelled'">
                  {{ row.entryType }}
                </span>
              </td>
            </ng-container>

            <ng-container matColumnDef="amount">
              <th mat-header-cell *matHeaderCellDef class="text-right">Amount</th>
              <td mat-cell *matCellDef="let row" class="text-right mono-text"
                  [ngClass]="row.entryType === 'Credit' ? 'text-green' : 'text-red'">
                {{ row.amount | number:'1.2-2' }}
              </td>
            </ng-container>

            <ng-container matColumnDef="balanceAfter">
              <th mat-header-cell *matHeaderCellDef class="text-right">Balance After</th>
              <td mat-cell *matCellDef="let row" class="text-right mono-text">
                {{ row.balanceAfter | number:'1.2-2' }}
              </td>
            </ng-container>

            <ng-container matColumnDef="description">
              <th mat-header-cell *matHeaderCellDef>Description</th>
              <td mat-cell *matCellDef="let row">{{ row.description || '\u2014' }}</td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>

          <p *ngIf="ledgerEntries.length === 0" class="empty-text">No ledger entries found for the selected period.</p>
        </div>
      </mat-card-content>
    </mat-card>
  </ng-container>

  <!-- No Data -->
  <p *ngIf="!loading && !report" class="empty-text">No data available. Please select filters and click Generate.</p>
</div>
`, styles: ['/* src/app/pages/admin/reports/agent-statement/agent-statement.component.scss */\n.report-page {\n  padding: 0;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card mat-card-content {\n  padding: 20px !important;\n}\n.filters-row {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row mat-form-field {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row .filter-btn {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card mat-card-content {\n  padding: 16px !important;\n}\n.stat-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue {\n  color: #1976d2;\n}\n.stat-value-blue {\n  color: #1976d2;\n}\n.stat-green {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green {\n  color: #2e7d32;\n}\n.stat-value-green {\n  color: #2e7d32;\n}\n.stat-orange {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange {\n  color: #ed6c02;\n}\n.stat-value-orange {\n  color: #ed6c02;\n}\n.stat-red {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red {\n  color: #d32f2f;\n}\n.stat-value-red {\n  color: #d32f2f;\n}\n.stat-purple {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple {\n  color: #7b1fa2;\n}\n.stat-value-purple {\n  color: #7b1fa2;\n}\n.stat-teal {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal {\n  color: #00897b;\n}\n.stat-value-teal {\n  color: #00897b;\n}\n.stat-indigo {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo {\n  color: #3949ab;\n}\n.stat-value-indigo {\n  color: #3949ab;\n}\n.stat-pink {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink {\n  color: #c2185b;\n}\n.stat-value-pink {\n  color: #c2185b;\n}\n.stat-amber {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber {\n  color: #ff8f00;\n}\n.stat-value-amber {\n  color: #ff8f00;\n}\n.stat-cyan {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan {\n  color: #0097a7;\n}\n.stat-value-cyan {\n  color: #0097a7;\n}\n.stat-lime {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime {\n  color: #689f38;\n}\n.stat-value-lime {\n  color: #689f38;\n}\n.stat-brown {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown {\n  color: #5d4037;\n}\n.stat-value-brown {\n  color: #5d4037;\n}\n.data-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card mat-card-content {\n  padding: 20px !important;\n}\n.section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive {\n  overflow-x: auto;\n}\n.report-table {\n  width: 100%;\n}\n.report-table .mat-mdc-header-cell {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table .mat-mdc-cell {\n  font-size: 0.875rem;\n}\n.report-table .mat-mdc-row:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right {\n  text-align: right;\n}\n.text-green {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed {\n  background: #2e7d32;\n}\n.status-pending {\n  background: #ed6c02;\n}\n.status-onhold {\n  background: #9e9e9e;\n}\n.status-compliance {\n  background: #7b1fa2;\n}\n.status-cancelled {\n  background: #d32f2f;\n}\n.status-failed {\n  background: #d32f2f;\n}\n.balance-form-card {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card mat-card-content {\n  padding: 24px !important;\n}\n.balance-form-row {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row mat-form-field {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row .submit-btn {\n  height: 56px;\n  min-width: 160px;\n}\n:host-context(.dark-mode) .page-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .stat-value {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .section-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .empty-text {\n  color: #64748b;\n}\n:host-context(.dark-mode) .stat-card,\n:host-context(.dark-mode) .filters-card,\n:host-context(.dark-mode) .data-card,\n:host-context(.dark-mode) .balance-form-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .stat-card:hover,\n:host-context(.dark-mode) .filters-card:hover,\n:host-context(.dark-mode) .data-card:hover,\n:host-context(.dark-mode) .balance-form-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n:host-context(.dark-mode) .balance-form-card {\n  border-color: #3b82f6;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-header-cell {\n  color: #94a3b8;\n  background: #334155;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-row:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row {\n    flex-direction: column;\n  }\n  .balance-form-row {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=agent-statement.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: DecimalPipe }, { type: DatePipe }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentStatementComponent, { className: "AgentStatementComponent", filePath: "src/app/pages/admin/reports/agent-statement/agent-statement.component.ts", lineNumber: 40 });
})();
export {
  AgentStatementComponent
};
//# sourceMappingURL=chunk-YXJVJBKA.js.map
