import {
  MatDialogModule
} from "./chunk-UOLR4U5Z.js";
import {
  MatSortModule
} from "./chunk-JW6HM32E.js";
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
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-J6KJP3FP.js";
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
import "./chunk-IOMUWKJD.js";
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
  NumberValueAccessor,
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
  DatePipe,
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
  ɵɵpureFunction3,
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

// src/app/pages/admin/agent-management/agent-management.component.ts
var _c0 = () => [10, 20, 50, 100];
var _c1 = (a0, a1, a2) => ({ "chip-success": a0, "chip-error": a1, "chip-warning": a2 });
var _c2 = () => ["locationName", "locationCode", "countryCity", "users", "status", "actions"];
var _c3 = () => ["fullName", "email", "userName", "phone", "role", "isDefault", "actions"];
var _c4 = () => ["bankName", "paymentMode", "bankCode", "swiftCode", "branches", "status", "actions"];
var _c5 = () => ["branchName", "branchCode", "swiftCode", "address", "phone", "actions"];
function AgentManagementComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 17);
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_17_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Business Name");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_17_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agent_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(agent_r3.businessName);
  }
}
function AgentManagementComponent_mat_card_17_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_17_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agent_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(agent_r4.country);
  }
}
function AgentManagementComponent_mat_card_17_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_17_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const agent_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", agent_r5.agentType === "SendingAgent" ? "chip-info" : "chip-tertiary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", agent_r5.agentType === "SendingAgent" ? "Sending" : "Payout", " ");
  }
}
function AgentManagementComponent_mat_card_17_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_17_td_17_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 39);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_17_td_17_ng_container_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const agent_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unblockAgent(agent_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 40);
    \u0275\u0275text(3, "lock_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function AgentManagementComponent_mat_card_17_td_17_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 41);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_17_td_17_ng_container_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const agent_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveAgent(agent_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 40);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_17_td_17_ng_container_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const agent_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectAgent(agent_r7));
    });
    \u0275\u0275elementStart(5, "mat-icon", 43);
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function AgentManagementComponent_mat_card_17_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "div", 37)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AgentManagementComponent_mat_card_17_td_17_ng_container_4_Template, 4, 0, "ng-container", 38)(5, AgentManagementComponent_mat_card_17_td_17_ng_container_5_Template, 7, 0, "ng-container", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const agent_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(4, _c1, agent_r7.status === "Approved", agent_r7.status === "Blocked" || agent_r7.status === "Rejected", agent_r7.status !== "Approved" && agent_r7.status !== "Blocked" && agent_r7.status !== "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(agent_r7.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r7.status === "Blocked");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r7.status !== "Approved" && agent_r7.status !== "Blocked" && agent_r7.status !== "Rejected");
  }
}
function AgentManagementComponent_mat_card_17_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_17_td_20_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_17_td_20_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const agent_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openLocationManagement(agent_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 53);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd()();
  }
}
function AgentManagementComponent_mat_card_17_td_20_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_17_td_20_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const agent_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openBankManagement(agent_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 45);
    \u0275\u0275text(2, "account_balance");
    \u0275\u0275elementEnd()();
  }
}
function AgentManagementComponent_mat_card_17_td_20_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_17_td_20_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const agent_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.blockAgent(agent_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 51);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd()();
  }
}
function AgentManagementComponent_mat_card_17_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 35)(1, "button", 44);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_17_td_20_Template_button_click_1_listener() {
      const agent_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(agent_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon", 45);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AgentManagementComponent_mat_card_17_td_20_button_4_Template, 3, 0, "button", 46)(5, AgentManagementComponent_mat_card_17_td_20_button_5_Template, 3, 0, "button", 47)(6, AgentManagementComponent_mat_card_17_td_20_button_6_Template, 3, 0, "button", 48);
    \u0275\u0275elementStart(7, "button", 49);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_17_td_20_Template_button_click_7_listener() {
      const agent_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit(agent_r10));
    });
    \u0275\u0275elementStart(8, "mat-icon", 45);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 50);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_17_td_20_Template_button_click_10_listener() {
      const agent_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteAgent(agent_r10));
    });
    \u0275\u0275elementStart(11, "mat-icon", 51);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const agent_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", agent_r10.agentType === "SendingAgent");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r10.agentType === "PayoutAgent");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r10.status === "Approved");
  }
}
function AgentManagementComponent_mat_card_17_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
function AgentManagementComponent_mat_card_17_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 57);
  }
}
function AgentManagementComponent_mat_card_17_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1, " No agents found. ");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-form-field", 19)(2, "mat-icon", 20);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_mat_card_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AgentManagementComponent_mat_card_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchDebounce.next($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 22);
    \u0275\u0275elementContainerStart(6, 23);
    \u0275\u0275template(7, AgentManagementComponent_mat_card_17_th_7_Template, 2, 0, "th", 24)(8, AgentManagementComponent_mat_card_17_td_8_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 26);
    \u0275\u0275template(10, AgentManagementComponent_mat_card_17_th_10_Template, 2, 0, "th", 24)(11, AgentManagementComponent_mat_card_17_td_11_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 27);
    \u0275\u0275template(13, AgentManagementComponent_mat_card_17_th_13_Template, 2, 0, "th", 24)(14, AgentManagementComponent_mat_card_17_td_14_Template, 3, 2, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 28);
    \u0275\u0275template(16, AgentManagementComponent_mat_card_17_th_16_Template, 2, 0, "th", 24)(17, AgentManagementComponent_mat_card_17_td_17_Template, 6, 8, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 29);
    \u0275\u0275template(19, AgentManagementComponent_mat_card_17_th_19_Template, 2, 0, "th", 24)(20, AgentManagementComponent_mat_card_17_td_20_Template, 13, 3, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(21, AgentManagementComponent_mat_card_17_tr_21_Template, 1, 0, "tr", 30)(22, AgentManagementComponent_mat_card_17_tr_22_Template, 1, 0, "tr", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-paginator", 32);
    \u0275\u0275listener("page", function AgentManagementComponent_mat_card_17_Template_mat_paginator_page_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, AgentManagementComponent_mat_card_17_div_24_Template, 2, 0, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.agents);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r1.totalCount)("pageSize", ctx_r1.pageSize)("pageIndex", ctx_r1.pageIndex)("pageSizeOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.agents.length && !ctx_r1.loading);
  }
}
function AgentManagementComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function AgentManagementComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_19_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 65)(2, "span", 66);
    \u0275\u0275text(3, "Funding Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 65)(7, "span", 66);
    \u0275\u0275text(8, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 68);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 65)(13, "span", 66);
    \u0275\u0275text(14, "Current Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 68);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.fundingType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 3, ctx_r1.detailAgent.creditLimit, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 6, ctx_r1.detailAgent.currentBalance, "1.2-2"));
  }
}
function AgentManagementComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "h3")(3, "mat-icon", 62);
    \u0275\u0275text(4, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Agent Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function AgentManagementComponent_div_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 64)(10, "div", 65)(11, "span", 66);
    \u0275\u0275text(12, "Business Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 65)(16, "span", 66);
    \u0275\u0275text(17, "Contact Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 65)(21, "span", 66);
    \u0275\u0275text(22, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 65)(26, "span", 66);
    \u0275\u0275text(27, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 65)(31, "span", 66);
    \u0275\u0275text(32, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 65)(36, "span", 66);
    \u0275\u0275text(37, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 65)(41, "span", 66);
    \u0275\u0275text(42, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, AgentManagementComponent_div_19_ng_container_45_Template, 18, 9, "ng-container", 38);
    \u0275\u0275elementStart(46, "div", 65)(47, "span", 66);
    \u0275\u0275text(48, "License Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 65)(52, "span", 66);
    \u0275\u0275text(53, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 36);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 67)(57, "span", 66);
    \u0275\u0275text(58, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 65)(62, "span", 66);
    \u0275\u0275text(63, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.businessName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.agentType === "SendingAgent" ? "Sending Agent" : "Payout Agent");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.detailAgent.country, " - ", ctx_r1.detailAgent.city, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.currency || ctx_r1.getCurrencyForCountry(ctx_r1.detailAgent.country));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailAgent.agentType === "SendingAgent");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.licenseNumber || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(17, _c1, ctx_r1.detailAgent.status === "Approved", ctx_r1.detailAgent.status === "Blocked", ctx_r1.detailAgent.status !== "Approved" && ctx_r1.detailAgent.status !== "Blocked"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.address || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 14, ctx_r1.detailAgent.createdAt, "yyyy-MM-dd"));
  }
}
function AgentManagementComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function AgentManagementComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreatePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_21_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.createError);
  }
}
function AgentManagementComponent_div_21_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 89);
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
function AgentManagementComponent_div_21_mat_option_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 89);
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
function AgentManagementComponent_div_21_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-form-field", 78)(2, "mat-label");
    \u0275\u0275text(3, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_ng_container_69_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.creditLimit, $event) || (ctx_r1.newAgent.creditLimit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 78)(6, "mat-label");
    \u0275\u0275text(7, "Funding Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 91);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_ng_container_69_Template_mat_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.fundingType, $event) || (ctx_r1.newAgent.fundingType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "mat-option", 92);
    \u0275\u0275text(10, "PreFunding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 93);
    \u0275\u0275text(12, "PostFunding");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.creditLimit);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.fundingType);
  }
}
function AgentManagementComponent_div_21_mat_spinner_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 94);
  }
}
function AgentManagementComponent_div_21_mat_icon_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "person_add");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 61)(2, "h3")(3, "mat-icon", 62);
    \u0275\u0275text(4, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Create New Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function AgentManagementComponent_div_21_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreatePopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_21_div_9_Template, 2, 1, "div", 70);
    \u0275\u0275elementStart(10, "div", 71)(11, "mat-form-field", 72)(12, "mat-label");
    \u0275\u0275text(13, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_mat_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.agentType, $event) || (ctx_r1.newAgent.agentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "mat-option", 74);
    \u0275\u0275text(16, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 75);
    \u0275\u0275text(18, "Payout Agent");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 71)(20, "h4", 76);
    \u0275\u0275text(21, "Company Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 77)(23, "mat-form-field", 78)(24, "mat-label");
    \u0275\u0275text(25, "Business Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.businessName, $event) || (ctx_r1.newAgent.businessName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 78)(28, "mat-label");
    \u0275\u0275text(29, "License Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.licenseNumber, $event) || (ctx_r1.newAgent.licenseNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 72)(32, "mat-label");
    \u0275\u0275text(33, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.address, $event) || (ctx_r1.newAgent.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 71)(36, "h4", 76);
    \u0275\u0275text(37, "Authorized Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 77)(39, "mat-form-field", 78)(40, "mat-label");
    \u0275\u0275text(41, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.fullName, $event) || (ctx_r1.newAgent.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "mat-form-field", 78)(44, "mat-label");
    \u0275\u0275text(45, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.email, $event) || (ctx_r1.newAgent.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "mat-form-field", 78)(48, "mat-label");
    \u0275\u0275text(49, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.phone, $event) || (ctx_r1.newAgent.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 71)(52, "h4", 76);
    \u0275\u0275text(53, "Accounting Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 77)(55, "mat-form-field", 78)(56, "mat-label");
    \u0275\u0275text(57, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-select", 82);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_mat_select_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.country, $event) || (ctx_r1.newAgent.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(59, AgentManagementComponent_div_21_mat_option_59_Template, 2, 2, "mat-option", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "mat-form-field", 78)(61, "mat-label");
    \u0275\u0275text(62, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.city, $event) || (ctx_r1.newAgent.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "mat-form-field", 78)(65, "mat-label");
    \u0275\u0275text(66, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "mat-select", 82);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_mat_select_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.currency, $event) || (ctx_r1.newAgent.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(68, AgentManagementComponent_div_21_mat_option_68_Template, 2, 2, "mat-option", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, AgentManagementComponent_div_21_ng_container_69_Template, 13, 2, "ng-container", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 84)(71, "button", 85);
    \u0275\u0275listener("click", function AgentManagementComponent_div_21_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreatePopup());
    });
    \u0275\u0275elementStart(72, "mat-icon");
    \u0275\u0275text(73, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 86);
    \u0275\u0275listener("click", function AgentManagementComponent_div_21_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createAgent());
    });
    \u0275\u0275template(76, AgentManagementComponent_div_21_mat_spinner_76_Template, 1, 0, "mat-spinner", 87)(77, AgentManagementComponent_div_21_mat_icon_77_Template, 2, 0, "mat-icon", 38);
    \u0275\u0275text(78, " Create Agent ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.createError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.agentType);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.businessName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.licenseNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.address);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.phone);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.currency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newAgent.agentType === "SendingAgent");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.creating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.creating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.creating);
  }
}
function AgentManagementComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function AgentManagementComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_23_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editError);
  }
}
function AgentManagementComponent_div_23_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r23 = ctx.$implicit;
    \u0275\u0275property("value", c_r23.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r23.name);
  }
}
function AgentManagementComponent_div_23_mat_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r24 = ctx.$implicit;
    \u0275\u0275property("value", c_r24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r24);
  }
}
function AgentManagementComponent_div_23_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-form-field", 78)(2, "mat-label");
    \u0275\u0275text(3, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_ng_container_58_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.creditLimit, $event) || (ctx_r1.editAgent.creditLimit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 78)(6, "mat-label");
    \u0275\u0275text(7, "Funding Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 91);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_ng_container_58_Template_mat_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.fundingType, $event) || (ctx_r1.editAgent.fundingType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "mat-option", 92);
    \u0275\u0275text(10, "PreFunding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 93);
    \u0275\u0275text(12, "PostFunding");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.creditLimit);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.fundingType);
  }
}
function AgentManagementComponent_div_23_mat_spinner_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 94);
  }
}
function AgentManagementComponent_div_23_mat_icon_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 61)(2, "h3")(3, "mat-icon", 62);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Edit Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function AgentManagementComponent_div_23_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_23_div_9_Template, 2, 1, "div", 70);
    \u0275\u0275elementStart(10, "div", 71)(11, "h4", 76);
    \u0275\u0275text(12, "Company Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 77)(14, "mat-form-field", 78)(15, "mat-label");
    \u0275\u0275text(16, "Business Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.businessName, $event) || (ctx_r1.editAgent.businessName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 78)(19, "mat-label");
    \u0275\u0275text(20, "License Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.licenseNumber, $event) || (ctx_r1.editAgent.licenseNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-form-field", 72)(23, "mat-label");
    \u0275\u0275text(24, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.address, $event) || (ctx_r1.editAgent.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 71)(27, "h4", 76);
    \u0275\u0275text(28, "Authorized Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 77)(30, "div", 95)(31, "span", 66);
    \u0275\u0275text(32, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 95)(36, "span", 66);
    \u0275\u0275text(37, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 71)(41, "h4", 76);
    \u0275\u0275text(42, "Accounting Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 77)(44, "mat-form-field", 78)(45, "mat-label");
    \u0275\u0275text(46, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-select", 91);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_mat_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.country, $event) || (ctx_r1.editAgent.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(48, AgentManagementComponent_div_23_mat_option_48_Template, 2, 2, "mat-option", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "mat-form-field", 78)(50, "mat-label");
    \u0275\u0275text(51, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.city, $event) || (ctx_r1.editAgent.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "mat-form-field", 78)(54, "mat-label");
    \u0275\u0275text(55, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-select", 91);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_mat_select_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.currency, $event) || (ctx_r1.editAgent.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(57, AgentManagementComponent_div_23_mat_option_57_Template, 2, 2, "mat-option", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, AgentManagementComponent_div_23_ng_container_58_Template, 13, 2, "ng-container", 38);
    \u0275\u0275elementStart(59, "mat-form-field", 78)(60, "mat-label");
    \u0275\u0275text(61, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "mat-select", 91);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_mat_select_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.agentType, $event) || (ctx_r1.editAgent.agentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(63, "mat-option", 74);
    \u0275\u0275text(64, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "mat-option", 75);
    \u0275\u0275text(66, "Payout Agent");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 84)(68, "button", 85);
    \u0275\u0275listener("click", function AgentManagementComponent_div_23_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditPopup());
    });
    \u0275\u0275elementStart(69, "mat-icon");
    \u0275\u0275text(70, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 86);
    \u0275\u0275listener("click", function AgentManagementComponent_div_23_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateAgent());
    });
    \u0275\u0275template(73, AgentManagementComponent_div_23_mat_spinner_73_Template, 1, 0, "mat-spinner", 87)(74, AgentManagementComponent_div_23_mat_icon_74_Template, 2, 0, "mat-icon", 38);
    \u0275\u0275text(75, " Save Changes ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.editError);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.businessName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.licenseNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.address);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.editAgentFullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.editAgentEmail);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.currency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editAgent.agentType === "SendingAgent");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.agentType);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.updating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.updating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.updating);
  }
}
function AgentManagementComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function AgentManagementComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_25_table_14_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Location");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_25_table_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r28 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r28.locationName);
  }
}
function AgentManagementComponent_div_25_table_14_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Code");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_25_table_14_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r29.locationCode || "-");
  }
}
function AgentManagementComponent_div_25_table_14_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Country / City");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_25_table_14_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r30 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", loc_r30.country || "-", " / ", loc_r30.city || "-", "");
  }
}
function AgentManagementComponent_div_25_table_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Users");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_25_table_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "span", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loc_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r31.users.length);
  }
}
function AgentManagementComponent_div_25_table_14_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_25_table_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loc_r32 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", loc_r32.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r32.isActive ? "Active" : "Inactive");
  }
}
function AgentManagementComponent_div_25_table_14_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_25_table_14_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 35)(1, "button", 106);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_table_14_td_18_Template_button_click_1_listener() {
      const loc_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openUserManagement(loc_r34));
    });
    \u0275\u0275elementStart(2, "mat-icon", 45);
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 49);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_table_14_td_18_Template_button_click_4_listener() {
      const loc_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openLocationForm(loc_r34));
    });
    \u0275\u0275elementStart(5, "mat-icon", 107);
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 108);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_table_14_td_18_Template_button_click_7_listener() {
      const loc_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleLocation(loc_r34.id));
    });
    \u0275\u0275elementStart(8, "mat-icon", 109);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 50);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_table_14_td_18_Template_button_click_10_listener() {
      const loc_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteLocation(loc_r34.id));
    });
    \u0275\u0275elementStart(11, "mat-icon", 51);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loc_r34 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", loc_r34.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", loc_r34.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r34.isActive ? "toggle_on" : "toggle_off");
  }
}
function AgentManagementComponent_div_25_table_14_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
function AgentManagementComponent_div_25_table_14_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 57);
  }
}
function AgentManagementComponent_div_25_table_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 100);
    \u0275\u0275elementContainerStart(1, 101);
    \u0275\u0275template(2, AgentManagementComponent_div_25_table_14_th_2_Template, 2, 0, "th", 24)(3, AgentManagementComponent_div_25_table_14_td_3_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 102);
    \u0275\u0275template(5, AgentManagementComponent_div_25_table_14_th_5_Template, 2, 0, "th", 24)(6, AgentManagementComponent_div_25_table_14_td_6_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 103);
    \u0275\u0275template(8, AgentManagementComponent_div_25_table_14_th_8_Template, 2, 0, "th", 24)(9, AgentManagementComponent_div_25_table_14_td_9_Template, 2, 2, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 104);
    \u0275\u0275template(11, AgentManagementComponent_div_25_table_14_th_11_Template, 2, 0, "th", 24)(12, AgentManagementComponent_div_25_table_14_td_12_Template, 3, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 28);
    \u0275\u0275template(14, AgentManagementComponent_div_25_table_14_th_14_Template, 2, 0, "th", 24)(15, AgentManagementComponent_div_25_table_14_td_15_Template, 3, 2, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 29);
    \u0275\u0275template(17, AgentManagementComponent_div_25_table_14_th_17_Template, 2, 0, "th", 24)(18, AgentManagementComponent_div_25_table_14_td_18_Template, 13, 3, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(19, AgentManagementComponent_div_25_table_14_tr_19_Template, 1, 0, "tr", 30)(20, AgentManagementComponent_div_25_table_14_tr_20_Template, 1, 0, "tr", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dataSource", ctx_r1.agentLocations);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(3, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(4, _c2));
  }
}
function AgentManagementComponent_div_25_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275text(1, "No locations configured yet.");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 61)(2, "h3")(3, "mat-icon", 62);
    \u0275\u0275text(4, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 97)(10, "button", 3);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openLocationForm(null));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Location ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AgentManagementComponent_div_25_table_14_Template, 21, 5, "table", 98)(15, AgentManagementComponent_div_25_div_15_Template, 2, 0, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Locations \u2014 ", ctx_r1.locationAgent == null ? null : ctx_r1.locationAgent.businessName, "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.agentLocations.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.agentLocations.length);
  }
}
function AgentManagementComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275listener("click", function AgentManagementComponent_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_27_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.locationFormError);
  }
}
function AgentManagementComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 61)(2, "h3")(3, "mat-icon", 62);
    \u0275\u0275text(4, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function AgentManagementComponent_div_27_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationForm());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_27_div_9_Template, 2, 1, "div", 70);
    \u0275\u0275elementStart(10, "div", 77)(11, "mat-form-field", 78)(12, "mat-label");
    \u0275\u0275text(13, "Location Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locName, $event) || (ctx_r1.locName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 78)(16, "mat-label");
    \u0275\u0275text(17, "Location Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locCode, $event) || (ctx_r1.locCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 78)(20, "mat-label");
    \u0275\u0275text(21, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locCountry, $event) || (ctx_r1.locCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 78)(24, "mat-label");
    \u0275\u0275text(25, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locCity, $event) || (ctx_r1.locCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 72)(28, "mat-label");
    \u0275\u0275text(29, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locAddress, $event) || (ctx_r1.locAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 78)(32, "mat-label");
    \u0275\u0275text(33, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locPhone, $event) || (ctx_r1.locPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "mat-form-field", 78)(36, "mat-label");
    \u0275\u0275text(37, "Contact Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locEmail, $event) || (ctx_r1.locEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "mat-form-field", 72)(40, "mat-label");
    \u0275\u0275text(41, "Operating Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locHours, $event) || (ctx_r1.locHours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 84)(44, "button", 85);
    \u0275\u0275listener("click", function AgentManagementComponent_div_27_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationForm());
    });
    \u0275\u0275elementStart(45, "mat-icon");
    \u0275\u0275text(46, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 3);
    \u0275\u0275listener("click", function AgentManagementComponent_div_27_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveLocation());
    });
    \u0275\u0275elementStart(49, "mat-icon");
    \u0275\u0275text(50, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingLocationId != null ? "Edit Location" : "Add New Location", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.locationFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locCountry);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locCity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locAddress);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locHours);
  }
}
function AgentManagementComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275listener("click", function AgentManagementComponent_div_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_table_14_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Full Name");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_table_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r39 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r39.fullName);
  }
}
function AgentManagementComponent_div_29_table_14_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_table_14_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r40 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r40.email);
  }
}
function AgentManagementComponent_div_29_table_14_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Username");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_table_14_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r41 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r41.userName || "-");
  }
}
function AgentManagementComponent_div_29_table_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_table_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r42 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r42.phone || "-");
  }
}
function AgentManagementComponent_div_29_table_14_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Role");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_table_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r43 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r43.role || "-");
  }
}
function AgentManagementComponent_div_29_table_14_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_table_14_td_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 122);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_table_14_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275template(1, AgentManagementComponent_div_29_table_14_td_18_span_1_Template, 2, 0, "span", 121);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r44 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r44.isDefault);
  }
}
function AgentManagementComponent_div_29_table_14_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_table_14_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 35)(1, "button", 49);
    \u0275\u0275listener("click", function AgentManagementComponent_div_29_table_14_td_21_Template_button_click_1_listener() {
      const u_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openUserForm(u_r46));
    });
    \u0275\u0275elementStart(2, "mat-icon", 45);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 50);
    \u0275\u0275listener("click", function AgentManagementComponent_div_29_table_14_td_21_Template_button_click_4_listener() {
      const u_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteUser(u_r46.id));
    });
    \u0275\u0275elementStart(5, "mat-icon", 51);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function AgentManagementComponent_div_29_table_14_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
function AgentManagementComponent_div_29_table_14_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 57);
  }
}
function AgentManagementComponent_div_29_table_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 100);
    \u0275\u0275elementContainerStart(1, 115);
    \u0275\u0275template(2, AgentManagementComponent_div_29_table_14_th_2_Template, 2, 0, "th", 24)(3, AgentManagementComponent_div_29_table_14_td_3_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 116);
    \u0275\u0275template(5, AgentManagementComponent_div_29_table_14_th_5_Template, 2, 0, "th", 24)(6, AgentManagementComponent_div_29_table_14_td_6_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 117);
    \u0275\u0275template(8, AgentManagementComponent_div_29_table_14_th_8_Template, 2, 0, "th", 24)(9, AgentManagementComponent_div_29_table_14_td_9_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 118);
    \u0275\u0275template(11, AgentManagementComponent_div_29_table_14_th_11_Template, 2, 0, "th", 24)(12, AgentManagementComponent_div_29_table_14_td_12_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 119);
    \u0275\u0275template(14, AgentManagementComponent_div_29_table_14_th_14_Template, 2, 0, "th", 24)(15, AgentManagementComponent_div_29_table_14_td_15_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 120);
    \u0275\u0275template(17, AgentManagementComponent_div_29_table_14_th_17_Template, 2, 0, "th", 24)(18, AgentManagementComponent_div_29_table_14_td_18_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 29);
    \u0275\u0275template(20, AgentManagementComponent_div_29_table_14_th_20_Template, 2, 0, "th", 24)(21, AgentManagementComponent_div_29_table_14_td_21_Template, 7, 0, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(22, AgentManagementComponent_div_29_table_14_tr_22_Template, 1, 0, "tr", 30)(23, AgentManagementComponent_div_29_table_14_tr_23_Template, 1, 0, "tr", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dataSource", ctx_r1.userLocation.users);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(3, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(4, _c3));
  }
}
function AgentManagementComponent_div_29_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275text(1, 'No users yet. Click "Add User" to add one.');
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 61)(2, "h3")(3, "mat-icon", 62);
    \u0275\u0275text(4, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function AgentManagementComponent_div_29_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 97)(10, "button", 3);
    \u0275\u0275listener("click", function AgentManagementComponent_div_29_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUserForm(null));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add User");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AgentManagementComponent_div_29_table_14_Template, 24, 5, "table", 98)(15, AgentManagementComponent_div_29_div_15_Template, 2, 0, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Users \u2014 ", ctx_r1.userLocation.locationName, "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.userLocation.users.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.userLocation.users.length);
  }
}
function AgentManagementComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function AgentManagementComponent_div_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r47);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_31_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.userFormError);
  }
}
function AgentManagementComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 61)(2, "h3")(3, "mat-icon", 62);
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function AgentManagementComponent_div_31_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserForm());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_31_div_9_Template, 2, 1, "div", 70);
    \u0275\u0275elementStart(10, "div", 77)(11, "mat-form-field", 78)(12, "mat-label");
    \u0275\u0275text(13, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userFullName, $event) || (ctx_r1.userFullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 78)(16, "mat-label");
    \u0275\u0275text(17, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userEmail, $event) || (ctx_r1.userEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 78)(20, "mat-label");
    \u0275\u0275text(21, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userUserName, $event) || (ctx_r1.userUserName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 78)(24, "mat-label");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userPassword, $event) || (ctx_r1.userPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 78)(28, "mat-label");
    \u0275\u0275text(29, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userPhone, $event) || (ctx_r1.userPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 78)(32, "mat-label");
    \u0275\u0275text(33, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_mat_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userRole, $event) || (ctx_r1.userRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(35, "mat-option", 126);
    \u0275\u0275text(36, "Operator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-option", 127);
    \u0275\u0275text(38, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-option", 128);
    \u0275\u0275text(40, "Cashier");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "mat-checkbox", 129);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_mat_checkbox_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userIsDefault, $event) || (ctx_r1.userIsDefault = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(42, "Default User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 84)(44, "button", 85);
    \u0275\u0275listener("click", function AgentManagementComponent_div_31_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserForm());
    });
    \u0275\u0275elementStart(45, "mat-icon");
    \u0275\u0275text(46, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 3);
    \u0275\u0275listener("click", function AgentManagementComponent_div_31_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275elementStart(49, "mat-icon");
    \u0275\u0275text(50, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingUserId != null ? "Edit User" : "Add User", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.userFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userFullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userUserName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingUserId != null ? "New Password (leave blank to keep)" : "Password *");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userRole);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userIsDefault);
  }
}
function AgentManagementComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function AgentManagementComponent_div_32_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_33_table_14_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Bank Name");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_33_table_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r51 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r51.bankName);
  }
}
function AgentManagementComponent_div_33_table_14_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Payment Mode");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_33_table_14_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "span", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r52 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r52.paymentMethodName || "-");
  }
}
function AgentManagementComponent_div_33_table_14_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Code");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_33_table_14_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r53 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r53.bankCode || "-");
  }
}
function AgentManagementComponent_div_33_table_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "SWIFT");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_33_table_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r54 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r54.swiftCode || "-");
  }
}
function AgentManagementComponent_div_33_table_14_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Branches");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_33_table_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "span", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r55 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r55.branches.length);
  }
}
function AgentManagementComponent_div_33_table_14_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_33_table_14_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r56 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", b_r56.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r56.isActive ? "Active" : "Inactive");
  }
}
function AgentManagementComponent_div_33_table_14_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_33_table_14_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 35)(1, "button", 135);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_table_14_td_21_Template_button_click_1_listener() {
      const b_r58 = \u0275\u0275restoreView(_r57).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBankBranchManagement(b_r58));
    });
    \u0275\u0275elementStart(2, "mat-icon", 45);
    \u0275\u0275text(3, "account_tree");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 49);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_table_14_td_21_Template_button_click_4_listener() {
      const b_r58 = \u0275\u0275restoreView(_r57).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBankForm(b_r58));
    });
    \u0275\u0275elementStart(5, "mat-icon", 107);
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 108);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_table_14_td_21_Template_button_click_7_listener() {
      const b_r58 = \u0275\u0275restoreView(_r57).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleBank(b_r58.id));
    });
    \u0275\u0275elementStart(8, "mat-icon", 109);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 50);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_table_14_td_21_Template_button_click_10_listener() {
      const b_r58 = \u0275\u0275restoreView(_r57).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteBank(b_r58.id));
    });
    \u0275\u0275elementStart(11, "mat-icon", 51);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r58 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", b_r58.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", b_r58.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r58.isActive ? "toggle_on" : "toggle_off");
  }
}
function AgentManagementComponent_div_33_table_14_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
function AgentManagementComponent_div_33_table_14_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 57);
  }
}
function AgentManagementComponent_div_33_table_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 100);
    \u0275\u0275elementContainerStart(1, 130);
    \u0275\u0275template(2, AgentManagementComponent_div_33_table_14_th_2_Template, 2, 0, "th", 24)(3, AgentManagementComponent_div_33_table_14_td_3_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 131);
    \u0275\u0275template(5, AgentManagementComponent_div_33_table_14_th_5_Template, 2, 0, "th", 24)(6, AgentManagementComponent_div_33_table_14_td_6_Template, 3, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 132);
    \u0275\u0275template(8, AgentManagementComponent_div_33_table_14_th_8_Template, 2, 0, "th", 24)(9, AgentManagementComponent_div_33_table_14_td_9_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 133);
    \u0275\u0275template(11, AgentManagementComponent_div_33_table_14_th_11_Template, 2, 0, "th", 24)(12, AgentManagementComponent_div_33_table_14_td_12_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 134);
    \u0275\u0275template(14, AgentManagementComponent_div_33_table_14_th_14_Template, 2, 0, "th", 24)(15, AgentManagementComponent_div_33_table_14_td_15_Template, 3, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 28);
    \u0275\u0275template(17, AgentManagementComponent_div_33_table_14_th_17_Template, 2, 0, "th", 24)(18, AgentManagementComponent_div_33_table_14_td_18_Template, 3, 2, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 29);
    \u0275\u0275template(20, AgentManagementComponent_div_33_table_14_th_20_Template, 2, 0, "th", 24)(21, AgentManagementComponent_div_33_table_14_td_21_Template, 13, 3, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(22, AgentManagementComponent_div_33_table_14_tr_22_Template, 1, 0, "tr", 30)(23, AgentManagementComponent_div_33_table_14_tr_23_Template, 1, 0, "tr", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dataSource", ctx_r1.agentBanks);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(3, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(4, _c4));
  }
}
function AgentManagementComponent_div_33_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275text(1, "No banks configured yet.");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 61)(2, "h3")(3, "mat-icon", 62);
    \u0275\u0275text(4, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 97)(10, "button", 3);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBankForm(null));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Bank");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AgentManagementComponent_div_33_table_14_Template, 24, 5, "table", 98)(15, AgentManagementComponent_div_33_div_15_Template, 2, 0, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Banks \u2014 ", ctx_r1.bankAgent == null ? null : ctx_r1.bankAgent.businessName, "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.agentBanks.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.agentBanks.length);
  }
}
function AgentManagementComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275listener("click", function AgentManagementComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_35_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.bankFormError);
  }
}
function AgentManagementComponent_div_35_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r61 = ctx.$implicit;
    \u0275\u0275property("value", pm_r61.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r61.name);
  }
}
function AgentManagementComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 61)(2, "h3")(3, "mat-icon", 62);
    \u0275\u0275text(4, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function AgentManagementComponent_div_35_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankForm());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_35_div_9_Template, 2, 1, "div", 70);
    \u0275\u0275elementStart(10, "div", 77)(11, "mat-form-field", 78)(12, "mat-label");
    \u0275\u0275text(13, "Bank Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankName, $event) || (ctx_r1.bankName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 78)(16, "mat-label");
    \u0275\u0275text(17, "Payment Mode *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 82);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_mat_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankPaymentMethodId, $event) || (ctx_r1.bankPaymentMethodId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(19, AgentManagementComponent_div_35_mat_option_19_Template, 2, 2, "mat-option", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 78)(21, "mat-label");
    \u0275\u0275text(22, "Bank Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankCode, $event) || (ctx_r1.bankCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-form-field", 78)(25, "mat-label");
    \u0275\u0275text(26, "SWIFT Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankSwift, $event) || (ctx_r1.bankSwift = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "mat-form-field", 78)(29, "mat-label");
    \u0275\u0275text(30, "Routing Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankRouting, $event) || (ctx_r1.bankRouting = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "mat-form-field", 78)(33, "mat-label");
    \u0275\u0275text(34, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankCountry, $event) || (ctx_r1.bankCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "mat-form-field", 78)(37, "mat-label");
    \u0275\u0275text(38, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankCity, $event) || (ctx_r1.bankCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "mat-form-field", 72)(41, "mat-label");
    \u0275\u0275text(42, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankAddress, $event) || (ctx_r1.bankAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "mat-form-field", 78)(45, "mat-label");
    \u0275\u0275text(46, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankPhone, $event) || (ctx_r1.bankPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "mat-form-field", 78)(49, "mat-label");
    \u0275\u0275text(50, "Contact Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankEmail, $event) || (ctx_r1.bankEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "mat-form-field", 72)(53, "mat-label");
    \u0275\u0275text(54, "Additional Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "textarea", 136);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_textarea_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankAdditionalInfo, $event) || (ctx_r1.bankAdditionalInfo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 84)(57, "button", 85);
    \u0275\u0275listener("click", function AgentManagementComponent_div_35_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankForm());
    });
    \u0275\u0275elementStart(58, "mat-icon");
    \u0275\u0275text(59, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 3);
    \u0275\u0275listener("click", function AgentManagementComponent_div_35_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveBank());
    });
    \u0275\u0275elementStart(62, "mat-icon");
    \u0275\u0275text(63, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingBankId != null ? "Edit Bank" : "Add New Bank", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.bankFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankPaymentMethodId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankSwift);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankRouting);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankCountry);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankCity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankAddress);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankAdditionalInfo);
  }
}
function AgentManagementComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275listener("click", function AgentManagementComponent_div_36_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_37_table_14_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Branch Name");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_37_table_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r64 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(br_r64.branchName);
  }
}
function AgentManagementComponent_div_37_table_14_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Code");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_37_table_14_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r65 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(br_r65.branchCode || "-");
  }
}
function AgentManagementComponent_div_37_table_14_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "SWIFT");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_37_table_14_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r66 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(br_r66.swiftCode || "-");
  }
}
function AgentManagementComponent_div_37_table_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Address");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_37_table_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r67 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(br_r67.address || "-");
  }
}
function AgentManagementComponent_div_37_table_14_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_37_table_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r68 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(br_r68.contactPhone || "-");
  }
}
function AgentManagementComponent_div_37_table_14_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_37_table_14_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 35)(1, "button", 49);
    \u0275\u0275listener("click", function AgentManagementComponent_div_37_table_14_td_18_Template_button_click_1_listener() {
      const br_r70 = \u0275\u0275restoreView(_r69).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBankBranchForm(br_r70));
    });
    \u0275\u0275elementStart(2, "mat-icon", 45);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 50);
    \u0275\u0275listener("click", function AgentManagementComponent_div_37_table_14_td_18_Template_button_click_4_listener() {
      const br_r70 = \u0275\u0275restoreView(_r69).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteBankBranch(br_r70.id));
    });
    \u0275\u0275elementStart(5, "mat-icon", 51);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function AgentManagementComponent_div_37_table_14_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
function AgentManagementComponent_div_37_table_14_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 57);
  }
}
function AgentManagementComponent_div_37_table_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 100);
    \u0275\u0275elementContainerStart(1, 138);
    \u0275\u0275template(2, AgentManagementComponent_div_37_table_14_th_2_Template, 2, 0, "th", 24)(3, AgentManagementComponent_div_37_table_14_td_3_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 139);
    \u0275\u0275template(5, AgentManagementComponent_div_37_table_14_th_5_Template, 2, 0, "th", 24)(6, AgentManagementComponent_div_37_table_14_td_6_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 133);
    \u0275\u0275template(8, AgentManagementComponent_div_37_table_14_th_8_Template, 2, 0, "th", 24)(9, AgentManagementComponent_div_37_table_14_td_9_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 140);
    \u0275\u0275template(11, AgentManagementComponent_div_37_table_14_th_11_Template, 2, 0, "th", 24)(12, AgentManagementComponent_div_37_table_14_td_12_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 118);
    \u0275\u0275template(14, AgentManagementComponent_div_37_table_14_th_14_Template, 2, 0, "th", 24)(15, AgentManagementComponent_div_37_table_14_td_15_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 29);
    \u0275\u0275template(17, AgentManagementComponent_div_37_table_14_th_17_Template, 2, 0, "th", 24)(18, AgentManagementComponent_div_37_table_14_td_18_Template, 7, 0, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(19, AgentManagementComponent_div_37_table_14_tr_19_Template, 1, 0, "tr", 30)(20, AgentManagementComponent_div_37_table_14_tr_20_Template, 1, 0, "tr", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dataSource", ctx_r1.bankBranchBank.branches);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(3, _c5));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(4, _c5));
  }
}
function AgentManagementComponent_div_37_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275text(1, "No branches yet.");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 137)(1, "div", 61)(2, "h3")(3, "mat-icon", 62);
    \u0275\u0275text(4, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function AgentManagementComponent_div_37_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r63);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 97)(10, "button", 3);
    \u0275\u0275listener("click", function AgentManagementComponent_div_37_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r63);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBankBranchForm(null));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Branch");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AgentManagementComponent_div_37_table_14_Template, 21, 5, "table", 98)(15, AgentManagementComponent_div_37_div_15_Template, 2, 0, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Branches \u2014 ", ctx_r1.bankBranchBank.bankName, "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.bankBranchBank.branches.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.bankBranchBank.branches.length);
  }
}
function AgentManagementComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function AgentManagementComponent_div_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r71);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_39_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.bankBranchFormError);
  }
}
function AgentManagementComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 61)(2, "h3")(3, "mat-icon", 62);
    \u0275\u0275text(4, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function AgentManagementComponent_div_39_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchForm());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_39_div_9_Template, 2, 1, "div", 70);
    \u0275\u0275elementStart(10, "div", 77)(11, "mat-form-field", 78)(12, "mat-label");
    \u0275\u0275text(13, "Branch Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_39_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbName, $event) || (ctx_r1.bbName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 78)(16, "mat-label");
    \u0275\u0275text(17, "Branch Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_39_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbCode, $event) || (ctx_r1.bbCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 78)(20, "mat-label");
    \u0275\u0275text(21, "SWIFT Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_39_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbSwift, $event) || (ctx_r1.bbSwift = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 78)(24, "mat-label");
    \u0275\u0275text(25, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_39_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbPhone, $event) || (ctx_r1.bbPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 72)(28, "mat-label");
    \u0275\u0275text(29, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_39_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbAddress, $event) || (ctx_r1.bbAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 84)(32, "button", 85);
    \u0275\u0275listener("click", function AgentManagementComponent_div_39_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchForm());
    });
    \u0275\u0275elementStart(33, "mat-icon");
    \u0275\u0275text(34, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 3);
    \u0275\u0275listener("click", function AgentManagementComponent_div_39_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveBankBranch());
    });
    \u0275\u0275elementStart(37, "mat-icon");
    \u0275\u0275text(38, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingBankBranchId != null ? "Edit Branch" : "Add Branch", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.bankBranchFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bbName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bbCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bbSwift);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bbPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bbAddress);
  }
}
function emptyCreateForm() {
  return { fullName: "", email: "", phone: "", businessName: "", agentType: "SendingAgent", country: "", city: "", currency: "USD", creditLimit: 0, licenseNumber: "", address: "", fundingType: "PreFunding" };
}
function emptyEditForm() {
  return { businessName: "", agentType: "SendingAgent", country: "", city: "", creditLimit: 0, licenseNumber: "", address: "", currency: "USD", fundingType: "PreFunding" };
}
var AgentManagementComponent = class _AgentManagementComponent {
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.agents = [];
    this.displayedColumns = ["businessName", "country", "type", "status", "actions"];
    this.searchString = "";
    this.loading = true;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
    this.countries = [];
    this.currencies = [];
    this.paymentMethods = [];
    this.showDetail = false;
    this.detailAgent = null;
    this.showCreatePopup = false;
    this.creating = false;
    this.createError = "";
    this.newAgent = emptyCreateForm();
    this.showEditPopup = false;
    this.updating = false;
    this.editError = "";
    this.editAgentId = 0;
    this.editAgentFullName = "";
    this.editAgentEmail = "";
    this.editAgent = emptyEditForm();
    this.showLocationPopup = false;
    this.showLocationForm = false;
    this.locationAgent = null;
    this.agentLocations = [];
    this.locationFormError = "";
    this.editingLocationId = null;
    this.locName = "";
    this.locCode = null;
    this.locCountry = null;
    this.locCity = null;
    this.locAddress = null;
    this.locPhone = null;
    this.locEmail = null;
    this.locHours = null;
    this.showUserPopup = false;
    this.showUserForm = false;
    this.userLocation = null;
    this.userFormError = "";
    this.editingUserId = null;
    this.userFullName = "";
    this.userEmail = "";
    this.userUserName = null;
    this.userPassword = null;
    this.userPhone = null;
    this.userRole = "Operator";
    this.userIsDefault = false;
    this.showBankPopup = false;
    this.showBankForm = false;
    this.bankAgent = null;
    this.agentBanks = [];
    this.bankFormError = "";
    this.editingBankId = null;
    this.bankName = "";
    this.bankPaymentMethodId = null;
    this.bankCode = null;
    this.bankSwift = null;
    this.bankRouting = null;
    this.bankCountry = null;
    this.bankCity = null;
    this.bankAddress = null;
    this.bankPhone = null;
    this.bankEmail = null;
    this.bankAdditionalInfo = null;
    this.showBankBranchPopup = false;
    this.showBankBranchForm = false;
    this.bankBranchBank = null;
    this.bankBranchFormError = "";
    this.editingBankBranchId = null;
    this.bbName = "";
    this.bbCode = null;
    this.bbSwift = null;
    this.bbAddress = null;
    this.bbPhone = null;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.searchString = s;
      this.pageIndex = 0;
      this.loadAgents();
    });
    this.loadReferenceData();
    this.loadAgents();
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
  }
  getCurrencyForCountry(country) {
    const c = this.countries.find((x) => x.name.toLowerCase() === country?.toLowerCase());
    return c?.currency ?? "USD";
  }
  // ---------------------------------------------------------------------------
  // Agents CRUD
  // ---------------------------------------------------------------------------
  loadAgents() {
    this.loading = true;
    this.api.getAgentsPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.agents = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.agents = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load agents.");
        }
        this.loading = false;
      },
      error: () => {
        this.agents = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadAgents();
  }
  exportData(format) {
    this.exportService.export("api/admin/agents/export", { search: this.searchString }, format);
  }
  // ---------------------------------------------------------------------------
  // Detail
  // ---------------------------------------------------------------------------
  viewDetail(agent) {
    this.detailAgent = agent;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
  }
  // ---------------------------------------------------------------------------
  // Status actions
  // ---------------------------------------------------------------------------
  approveAgent(agent) {
    this.api.approveAgent(agent.id).subscribe((r) => {
      if (r?.success) {
        agent.status = "Approved";
        agent.isApproved = true;
        this.notify.success(`Agent '${agent.businessName}' approved.`);
      } else {
        this.notify.error(r?.message || "Failed to approve agent.");
      }
    });
  }
  rejectAgent(agent) {
    this.api.rejectAgent(agent.id).subscribe((r) => {
      if (r?.success) {
        agent.status = "Rejected";
        agent.isApproved = false;
        agent.isActive = false;
        this.notify.warn(`Agent '${agent.businessName}' rejected.`);
      } else {
        this.notify.error(r?.message || "Failed to reject agent.");
      }
    });
  }
  blockAgent(agent) {
    this.api.blockAgent(agent.id).subscribe((r) => {
      if (r?.success) {
        agent.status = "Blocked";
        agent.isActive = false;
        this.notify.warn(`Agent '${agent.businessName}' blocked.`);
      } else {
        this.notify.error(r?.message || "Failed to block agent.");
      }
    });
  }
  unblockAgent(agent) {
    this.api.unblockAgent(agent.id).subscribe((r) => {
      if (r?.success) {
        agent.status = "Approved";
        agent.isActive = true;
        this.notify.success(`Agent '${agent.businessName}' unblocked.`);
      } else {
        this.notify.error(r?.message || "Failed to unblock agent.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Create Agent
  // ---------------------------------------------------------------------------
  openCreatePopup() {
    this.newAgent = emptyCreateForm();
    this.createError = "";
    this.showCreatePopup = true;
  }
  closeCreatePopup() {
    this.showCreatePopup = false;
    this.newAgent = emptyCreateForm();
  }
  createAgent() {
    this.createError = "";
    const a = this.newAgent;
    const isSending = a.agentType === "SendingAgent";
    if (!a.fullName || !a.email || !a.phone || !a.businessName || !a.country || !a.city) {
      this.createError = "Please fill in all required fields.";
      return;
    }
    if (isSending && a.creditLimit <= 0) {
      this.createError = "Credit limit must be greater than zero.";
      return;
    }
    this.creating = true;
    const dto = {
      fullName: a.fullName,
      email: a.email,
      phoneNumber: a.phone,
      businessName: a.businessName,
      agentType: a.agentType,
      country: a.country,
      city: a.city,
      creditLimit: isSending ? a.creditLimit : 0,
      licenseNumber: a.licenseNumber,
      address: a.address,
      currency: a.currency,
      fundingType: isSending ? a.fundingType : null
    };
    this.api.createAgent(dto).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Agent created successfully!");
          this.newAgent = emptyCreateForm();
          this.showCreatePopup = false;
          this.loadAgents();
        } else {
          this.createError = res?.message || "Failed.";
        }
        this.creating = false;
      },
      error: () => {
        this.createError = "Server error.";
        this.creating = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Edit Agent
  // ---------------------------------------------------------------------------
  startEdit(agent) {
    this.editAgentId = agent.id;
    this.editAgentFullName = agent.fullName;
    this.editAgentEmail = agent.email;
    this.editAgent = {
      businessName: agent.businessName,
      agentType: agent.agentType,
      country: agent.country,
      city: agent.city,
      creditLimit: agent.creditLimit,
      licenseNumber: agent.licenseNumber ?? "",
      address: agent.address ?? "",
      currency: agent.currency ?? this.getCurrencyForCountry(agent.country),
      fundingType: agent.fundingType ?? "PreFunding"
    };
    this.editError = "";
    this.showEditPopup = true;
  }
  closeEditPopup() {
    this.showEditPopup = false;
  }
  updateAgent() {
    this.editError = "";
    const e = this.editAgent;
    if (!e.businessName || !e.country) {
      this.editError = "Please fill in all required fields.";
      return;
    }
    if (e.agentType === "SendingAgent" && e.creditLimit <= 0) {
      this.editError = "Credit limit must be greater than zero.";
      return;
    }
    this.updating = true;
    const dto = {
      businessName: e.businessName,
      country: e.country,
      city: e.city,
      agentType: e.agentType,
      creditLimit: e.creditLimit,
      licenseNumber: e.licenseNumber,
      address: e.address,
      currency: e.currency,
      fundingType: e.fundingType
    };
    this.api.updateAgent(this.editAgentId, dto).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(`Agent '${e.businessName}' updated.`);
          this.showEditPopup = false;
          this.loadAgents();
        } else {
          this.editError = res?.message || "Failed.";
        }
        this.updating = false;
      },
      error: (err) => {
        this.editError = `Error: ${err.message || "Server error"}`;
        this.updating = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Delete Agent
  // ---------------------------------------------------------------------------
  deleteAgent(agent) {
    this.api.deleteAgent(agent.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success(`Agent '${agent.businessName}' deleted.`);
        this.loadAgents();
      } else {
        this.notify.error(r?.message || "Failed to delete agent.");
      }
    });
  }
  // ===========================================================================
  // Location Management
  // ===========================================================================
  openLocationManagement(agent) {
    this.locationAgent = agent;
    this.loadPaymentMethods();
    this.loadAgentLocations(agent.id);
    this.showLocationPopup = true;
  }
  closeLocationPopup() {
    this.showLocationPopup = false;
  }
  loadPaymentMethods() {
    if (this.paymentMethods.length)
      return;
    this.api.getPaymentMethods().subscribe((r) => {
      if (r?.success && r.data)
        this.paymentMethods = r.data;
    });
  }
  loadAgentLocations(agentId) {
    this.api.getAgentLocations(agentId).subscribe((r) => {
      if (r?.success && r.data)
        this.agentLocations = r.data;
      else
        this.agentLocations = [];
    });
  }
  openLocationForm(existing) {
    this.locationFormError = "";
    if (existing) {
      this.editingLocationId = existing.id;
      this.locName = existing.locationName;
      this.locCode = existing.locationCode ?? null;
      this.locCountry = existing.country ?? null;
      this.locCity = existing.city ?? null;
      this.locAddress = existing.address ?? null;
      this.locPhone = existing.contactPhone ?? null;
      this.locEmail = existing.contactEmail ?? null;
      this.locHours = existing.operatingHours ?? null;
    } else {
      this.editingLocationId = null;
      this.locName = "";
      this.locCode = null;
      this.locCountry = this.locationAgent?.country ?? null;
      this.locCity = null;
      this.locAddress = null;
      this.locPhone = null;
      this.locEmail = null;
      this.locHours = null;
    }
    this.showLocationForm = true;
  }
  closeLocationForm() {
    this.showLocationForm = false;
  }
  saveLocation() {
    this.locationFormError = "";
    if (!this.locName?.trim()) {
      this.locationFormError = "Location name is required.";
      return;
    }
    const pmId = this.paymentMethods[0]?.id ?? 1;
    const payload = {
      agentId: this.locationAgent?.id,
      paymentMethodId: pmId,
      locationName: this.locName,
      locationCode: this.locCode,
      country: this.locCountry,
      city: this.locCity,
      address: this.locAddress,
      contactPhone: this.locPhone,
      contactEmail: this.locEmail,
      operatingHours: this.locHours
    };
    if (this.editingLocationId != null) {
      this.api.updateAgentLocation(this.editingLocationId, payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Location updated.");
          this.showLocationForm = false;
          if (this.locationAgent)
            this.loadAgentLocations(this.locationAgent.id);
        } else {
          this.locationFormError = r?.message || "Failed.";
        }
      });
    } else {
      this.api.createAgentLocation(payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Location added.");
          this.showLocationForm = false;
          if (this.locationAgent)
            this.loadAgentLocations(this.locationAgent.id);
        } else {
          this.locationFormError = r?.message || "Failed.";
        }
      });
    }
  }
  toggleLocation(id) {
    this.api.toggleAgentLocation(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success(r.message || "Location toggled.");
        if (this.locationAgent)
          this.loadAgentLocations(this.locationAgent.id);
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  deleteLocation(id) {
    this.api.deleteAgentLocation(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Location deleted.");
        if (this.locationAgent)
          this.loadAgentLocations(this.locationAgent.id);
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  // ===========================================================================
  // User Management (Location Users)
  // ===========================================================================
  openUserManagement(loc) {
    this.userLocation = loc;
    this.showUserPopup = true;
  }
  closeUserPopup() {
    this.showUserPopup = false;
  }
  openUserForm(existing) {
    this.userFormError = "";
    if (existing) {
      this.editingUserId = existing.id;
      this.userFullName = existing.fullName;
      this.userEmail = existing.email;
      this.userUserName = existing.userName ?? null;
      this.userPassword = null;
      this.userPhone = existing.phone ?? null;
      this.userRole = existing.role ?? "Operator";
      this.userIsDefault = existing.isDefault;
    } else {
      this.editingUserId = null;
      this.userFullName = "";
      this.userEmail = "";
      this.userUserName = null;
      this.userPassword = null;
      this.userPhone = null;
      this.userRole = "Operator";
      this.userIsDefault = false;
    }
    this.showUserForm = true;
  }
  closeUserForm() {
    this.showUserForm = false;
  }
  saveUser() {
    this.userFormError = "";
    if (!this.userFullName?.trim()) {
      this.userFormError = "Full name is required.";
      return;
    }
    if (!this.userEmail?.trim()) {
      this.userFormError = "Email is required.";
      return;
    }
    if (this.editingUserId == null && !this.userPassword?.trim()) {
      this.userFormError = "Password is required.";
      return;
    }
    if (this.editingUserId != null) {
      const dto = {
        fullName: this.userFullName,
        email: this.userEmail,
        userName: this.userUserName ?? void 0,
        password: this.userPassword ?? void 0,
        phone: this.userPhone ?? void 0,
        role: this.userRole,
        isDefault: this.userIsDefault
      };
      this.api.updateLocationUser(this.editingUserId, dto).subscribe((r) => {
        if (r?.success) {
          this.notify.success("User updated.");
          this.showUserForm = false;
          this.refreshUserLocation();
        } else {
          this.userFormError = r?.message || "Failed.";
        }
      });
    } else {
      const dto = {
        agentLocationId: this.userLocation?.id ?? 0,
        fullName: this.userFullName,
        email: this.userEmail,
        userName: this.userUserName ?? void 0,
        password: this.userPassword ?? void 0,
        phone: this.userPhone ?? void 0,
        role: this.userRole,
        isDefault: this.userIsDefault
      };
      this.api.createLocationUser(dto).subscribe((r) => {
        if (r?.success) {
          this.notify.success("User added.");
          this.showUserForm = false;
          this.refreshUserLocation();
        } else {
          this.userFormError = r?.message || "Failed.";
        }
      });
    }
  }
  deleteUser(id) {
    this.api.deleteLocationUser(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("User deleted.");
        this.refreshUserLocation();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  refreshUserLocation() {
    if (!this.locationAgent)
      return;
    this.api.getAgentLocations(this.locationAgent.id).subscribe((r) => {
      if (r?.success && r.data) {
        this.agentLocations = r.data;
        if (this.userLocation) {
          this.userLocation = this.agentLocations.find((l) => l.id === this.userLocation.id) ?? null;
        }
      }
    });
  }
  // ===========================================================================
  // Bank Management
  // ===========================================================================
  openBankManagement(agent) {
    this.bankAgent = agent;
    this.loadPaymentMethods();
    this.api.getAgentBanks(agent.id).subscribe((r) => {
      if (r?.success && r.data)
        this.agentBanks = r.data;
      else
        this.agentBanks = [];
      this.showBankPopup = true;
    });
  }
  closeBankPopup() {
    this.showBankPopup = false;
  }
  openBankForm(existing) {
    this.bankFormError = "";
    if (existing) {
      this.editingBankId = existing.id;
      this.bankName = existing.bankName;
      this.bankPaymentMethodId = existing.paymentMethodId ?? null;
      this.bankCode = existing.bankCode ?? null;
      this.bankSwift = existing.swiftCode ?? null;
      this.bankRouting = existing.routingNumber ?? null;
      this.bankCountry = existing.country ?? null;
      this.bankCity = existing.city ?? null;
      this.bankAddress = existing.address ?? null;
      this.bankPhone = existing.contactPhone ?? null;
      this.bankEmail = existing.contactEmail ?? null;
      this.bankAdditionalInfo = existing.additionalInfo ?? null;
    } else {
      this.editingBankId = null;
      this.bankName = "";
      this.bankPaymentMethodId = null;
      this.bankCode = null;
      this.bankSwift = null;
      this.bankRouting = null;
      this.bankCountry = this.bankAgent?.country ?? null;
      this.bankCity = null;
      this.bankAddress = null;
      this.bankPhone = null;
      this.bankEmail = null;
      this.bankAdditionalInfo = null;
    }
    this.showBankForm = true;
  }
  closeBankForm() {
    this.showBankForm = false;
  }
  saveBank() {
    this.bankFormError = "";
    if (!this.bankName?.trim()) {
      this.bankFormError = "Bank name is required.";
      return;
    }
    if (!this.bankPaymentMethodId) {
      this.bankFormError = "Payment mode is required.";
      return;
    }
    const payload = {
      bankName: this.bankName,
      paymentMethodId: this.bankPaymentMethodId,
      bankCode: this.bankCode,
      swiftCode: this.bankSwift,
      routingNumber: this.bankRouting,
      country: this.bankCountry,
      city: this.bankCity,
      address: this.bankAddress,
      contactPhone: this.bankPhone,
      contactEmail: this.bankEmail,
      additionalInfo: this.bankAdditionalInfo
    };
    if (this.editingBankId != null) {
      this.api.updateAgentBank(this.editingBankId, payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Bank updated.");
          this.showBankForm = false;
          this.refreshBanks();
        } else {
          this.bankFormError = r?.message || "Failed.";
        }
      });
    } else {
      payload.agentId = this.bankAgent?.id;
      this.api.createAgentBank(payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Bank added.");
          this.showBankForm = false;
          this.refreshBanks();
        } else {
          this.bankFormError = r?.message || "Failed.";
        }
      });
    }
  }
  toggleBank(id) {
    this.api.toggleAgentBank(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success(r.message || "Bank toggled.");
        this.refreshBanks();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  deleteBank(id) {
    this.api.deleteAgentBank(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Bank deleted.");
        this.refreshBanks();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  refreshBanks() {
    if (!this.bankAgent)
      return;
    this.api.getAgentBanks(this.bankAgent.id).subscribe((r) => {
      if (r?.success && r.data)
        this.agentBanks = r.data;
    });
  }
  // ===========================================================================
  // Bank Branch Management
  // ===========================================================================
  openBankBranchManagement(bank) {
    this.bankBranchBank = bank;
    this.showBankBranchPopup = true;
  }
  closeBankBranchPopup() {
    this.showBankBranchPopup = false;
  }
  openBankBranchForm(existing) {
    this.bankBranchFormError = "";
    if (existing) {
      this.editingBankBranchId = existing.id;
      this.bbName = existing.branchName;
      this.bbCode = existing.branchCode ?? null;
      this.bbSwift = existing.swiftCode ?? null;
      this.bbAddress = existing.address ?? null;
      this.bbPhone = existing.contactPhone ?? null;
    } else {
      this.editingBankBranchId = null;
      this.bbName = "";
      this.bbCode = null;
      this.bbSwift = null;
      this.bbAddress = null;
      this.bbPhone = null;
    }
    this.showBankBranchForm = true;
  }
  closeBankBranchForm() {
    this.showBankBranchForm = false;
  }
  saveBankBranch() {
    this.bankBranchFormError = "";
    if (!this.bbName?.trim()) {
      this.bankBranchFormError = "Branch name is required.";
      return;
    }
    const payload = {
      branchName: this.bbName,
      branchCode: this.bbCode,
      swiftCode: this.bbSwift,
      address: this.bbAddress,
      contactPhone: this.bbPhone
    };
    if (this.editingBankBranchId != null) {
      this.api.updateBankBranch(this.editingBankBranchId, payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Branch updated.");
          this.showBankBranchForm = false;
          this.refreshBankBranches();
        } else {
          this.bankBranchFormError = r?.message || "Failed.";
        }
      });
    } else {
      payload.agentBankId = this.bankBranchBank?.id;
      this.api.createBankBranch(payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Branch added.");
          this.showBankBranchForm = false;
          this.refreshBankBranches();
        } else {
          this.bankBranchFormError = r?.message || "Failed.";
        }
      });
    }
  }
  deleteBankBranch(id) {
    this.api.deleteBankBranch(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Branch deleted.");
        this.refreshBankBranches();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  refreshBankBranches() {
    if (!this.bankAgent)
      return;
    this.api.getAgentBanks(this.bankAgent.id).subscribe((r) => {
      if (r?.success && r.data) {
        this.agentBanks = r.data;
        if (this.bankBranchBank) {
          this.bankBranchBank = this.agentBanks.find((b) => b.id === this.bankBranchBank.id) ?? null;
        }
      }
    });
  }
  static {
    this.\u0275fac = function AgentManagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentManagementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentManagementComponent, selectors: [["app-agent-management"]], decls: 40, vars: 24, consts: [[1, "page-header"], [1, "page-header-actions"], ["mat-stroked-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], ["class", "popup popup-xl", 4, "ngIf"], ["class", "overlay overlay-upper", 3, "click", 4, "ngIf"], ["class", "popup popup-md popup-upper", 4, "ngIf"], ["class", "popup popup-xl popup-upper", 4, "ngIf"], ["class", "overlay overlay-top", 3, "click", 4, "ngIf"], ["class", "popup popup-md popup-top", 4, "ngIf"], ["class", "popup popup-lg popup-upper", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search agents...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "agent-table", 3, "dataSource"], ["matColumnDef", "businessName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "country"], ["matColumnDef", "type"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", 3, "ngClass"], [1, "status-cell"], [4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Unblock", 1, "action-btn", 3, "click"], [1, "text-success"], ["mat-icon-button", "", "matTooltip", "Approve", 1, "action-btn", 3, "click"], ["mat-icon-button", "", "matTooltip", "Reject", 1, "action-btn", 3, "click"], [1, "text-error"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Locations", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Banks", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Block", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-icon-button", "", "matTooltip", "Locations", 3, "click"], [1, "text-tertiary"], ["mat-icon-button", "", "matTooltip", "Banks", 3, "click"], ["mat-icon-button", "", "matTooltip", "Block", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], [1, "header-icon"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-item", "full-width"], [1, "text-bold"], [1, "popup", "popup-lg"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-section"], ["appearance", "outline", 1, "full-width"], [3, "ngModelChange", "ngModel"], ["value", "SendingAgent"], ["value", "PayoutAgent"], [1, "section-title"], [1, "form-grid"], ["appearance", "outline"], ["matInput", "", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "email", "required", "", 3, "ngModelChange", "ngModel"], ["searchable", "", "required", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], [3, "value"], ["matInput", "", "type", "number", "required", "", 3, "ngModelChange", "ngModel"], ["required", "", 3, "ngModelChange", "ngModel"], ["value", "PreFunding"], ["value", "PostFunding"], ["diameter", "18", 1, "inline-spinner"], [1, "readonly-field"], [1, "popup", "popup-xl"], [1, "popup-toolbar"], ["mat-table", "", "class", "inner-table", 3, "dataSource", 4, "ngIf"], ["class", "empty-state-info", 4, "ngIf"], ["mat-table", "", 1, "inner-table", 3, "dataSource"], ["matColumnDef", "locationName"], ["matColumnDef", "locationCode"], ["matColumnDef", "countryCity"], ["matColumnDef", "users"], [1, "chip", "chip-info"], ["mat-icon-button", "", "matTooltip", "Manage Users", 3, "click"], [1, "text-warning"], ["mat-icon-button", "", 3, "click", "matTooltip"], [3, "ngClass"], [1, "empty-state-info"], [1, "overlay", "overlay-upper", 3, "click"], [1, "popup", "popup-md", "popup-upper"], ["matInput", "", "placeholder", "e.g. Mon-Fri 9AM-5PM", 3, "ngModelChange", "ngModel"], [1, "popup", "popup-xl", "popup-upper"], ["matColumnDef", "fullName"], ["matColumnDef", "email"], ["matColumnDef", "userName"], ["matColumnDef", "phone"], ["matColumnDef", "role"], ["matColumnDef", "isDefault"], ["class", "chip chip-success", 4, "ngIf"], [1, "chip", "chip-success"], [1, "overlay", "overlay-top", 3, "click"], [1, "popup", "popup-md", "popup-top"], ["matInput", "", "type", "password", 3, "ngModelChange", "ngModel"], ["value", "Operator"], ["value", "Manager"], ["value", "Cashier"], ["color", "primary", 1, "mb-16", 3, "ngModelChange", "ngModel"], ["matColumnDef", "bankName"], ["matColumnDef", "paymentMode"], ["matColumnDef", "bankCode"], ["matColumnDef", "swiftCode"], ["matColumnDef", "branches"], ["mat-icon-button", "", "matTooltip", "Manage Branches", 3, "click"], ["matInput", "", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "popup", "popup-lg", "popup-upper"], ["matColumnDef", "branchName"], ["matColumnDef", "branchCode"], ["matColumnDef", "address"]], template: function AgentManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Agent Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
        \u0275\u0275listener("click", function AgentManagementComponent_Template_button_click_4_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 2);
        \u0275\u0275listener("click", function AgentManagementComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 3);
        \u0275\u0275listener("click", function AgentManagementComponent_Template_button_click_12_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275elementStart(13, "mat-icon");
        \u0275\u0275text(14, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " New Agent ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, AgentManagementComponent_div_16_Template, 2, 0, "div", 4)(17, AgentManagementComponent_mat_card_17_Template, 25, 10, "mat-card", 5)(18, AgentManagementComponent_div_18_Template, 1, 0, "div", 6)(19, AgentManagementComponent_div_19_Template, 67, 21, "div", 7)(20, AgentManagementComponent_div_20_Template, 1, 0, "div", 6)(21, AgentManagementComponent_div_21_Template, 79, 17, "div", 8)(22, AgentManagementComponent_div_22_Template, 1, 0, "div", 6)(23, AgentManagementComponent_div_23_Template, 76, 16, "div", 8)(24, AgentManagementComponent_div_24_Template, 1, 0, "div", 6)(25, AgentManagementComponent_div_25_Template, 16, 3, "div", 9)(26, AgentManagementComponent_div_26_Template, 1, 0, "div", 10)(27, AgentManagementComponent_div_27_Template, 52, 10, "div", 11)(28, AgentManagementComponent_div_28_Template, 1, 0, "div", 10)(29, AgentManagementComponent_div_29_Template, 16, 3, "div", 12)(30, AgentManagementComponent_div_30_Template, 1, 0, "div", 13)(31, AgentManagementComponent_div_31_Template, 52, 10, "div", 14)(32, AgentManagementComponent_div_32_Template, 1, 0, "div", 6)(33, AgentManagementComponent_div_33_Template, 16, 3, "div", 9)(34, AgentManagementComponent_div_34_Template, 1, 0, "div", 10)(35, AgentManagementComponent_div_35_Template, 65, 14, "div", 11)(36, AgentManagementComponent_div_36_Template, 1, 0, "div", 10)(37, AgentManagementComponent_div_37_Template, 16, 3, "div", 15)(38, AgentManagementComponent_div_38_Template, 1, 0, "div", 13)(39, AgentManagementComponent_div_39_Template, 40, 7, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailAgent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailAgent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCreatePopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCreatePopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showLocationPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showLocationPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showLocationForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showLocationForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showUserPopup && ctx.userLocation);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showUserPopup && ctx.userLocation);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showUserForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showUserForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankBranchPopup && ctx.bankBranchBank);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankBranchPopup && ctx.bankBranchBank);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankBranchForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankBranchForm);
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
      RequiredValidator,
      NgModel,
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
      MatPaginatorModule,
      MatPaginator,
      MatSortModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip,
      MatChipsModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatCheckboxModule,
      MatCheckbox,
      MatCardModule,
      MatCard,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatDialogModule,
      SearchableSelectDirective
    ], styles: ["\n\n.agent-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.status-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 28px !important;\n  height: 28px !important;\n  line-height: 28px !important;\n}\n.action-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  padding: 14px 16px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  background: #fafbfc;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  margin: 0 0 10px;\n  color: rgba(0, 0, 0, 0.65);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.readonly-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 6px 0;\n}\n.inner-table[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.empty-state-info[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px dashed rgba(0, 0, 0, 0.12);\n  margin-top: 8px;\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  margin-top: 4px;\n}\n.dark-mode[_nghost-%COMP%]   .empty-state-info[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-state-info[_ngcontent-%COMP%] {\n  background: rgba(21, 101, 192, 0.1);\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .form-section[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  background: #334155;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n/*# sourceMappingURL=agent-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentManagementComponent, [{
    type: Component,
    args: [{ selector: "app-agent-management", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatChipsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCheckboxModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      DecimalPipe,
      DatePipe,
      SearchableSelectDirective
    ], template: `<!-- Page Header -->
<div class="page-header">
  <h2>Agent Management</h2>
  <div class="page-header-actions">
    <button mat-stroked-button (click)="exportData('excel')">
      <mat-icon>download</mat-icon> Excel
    </button>
    <button mat-stroked-button (click)="exportData('csv')">
      <mat-icon>download</mat-icon> CSV
    </button>
    <button mat-raised-button color="primary" (click)="openCreatePopup()">
      <mat-icon>person_add</mat-icon> New Agent
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
    <input matInput placeholder="Search agents..." [(ngModel)]="searchString" (ngModelChange)="searchDebounce.next($event)" />
  </mat-form-field>

  <table mat-table [dataSource]="agents" class="agent-table">
    <!-- Business Name -->
    <ng-container matColumnDef="businessName">
      <th mat-header-cell *matHeaderCellDef>Business Name</th>
      <td mat-cell *matCellDef="let agent">{{ agent.businessName }}</td>
    </ng-container>

    <!-- Country -->
    <ng-container matColumnDef="country">
      <th mat-header-cell *matHeaderCellDef>Country</th>
      <td mat-cell *matCellDef="let agent">{{ agent.country }}</td>
    </ng-container>

    <!-- Type -->
    <ng-container matColumnDef="type">
      <th mat-header-cell *matHeaderCellDef>Type</th>
      <td mat-cell *matCellDef="let agent">
        <span class="chip" [ngClass]="agent.agentType === 'SendingAgent' ? 'chip-info' : 'chip-tertiary'">
          {{ agent.agentType === 'SendingAgent' ? 'Sending' : 'Payout' }}
        </span>
      </td>
    </ng-container>

    <!-- Status -->
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef>Status</th>
      <td mat-cell *matCellDef="let agent">
        <div class="status-cell">
          <span class="chip" [ngClass]="{
            'chip-success': agent.status === 'Approved',
            'chip-error': agent.status === 'Blocked' || agent.status === 'Rejected',
            'chip-warning': agent.status !== 'Approved' && agent.status !== 'Blocked' && agent.status !== 'Rejected'
          }">{{ agent.status }}</span>

          <ng-container *ngIf="agent.status === 'Blocked'">
            <button mat-icon-button matTooltip="Unblock" class="action-btn" (click)="unblockAgent(agent)">
              <mat-icon class="text-success">lock_open</mat-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="agent.status !== 'Approved' && agent.status !== 'Blocked' && agent.status !== 'Rejected'">
            <button mat-icon-button matTooltip="Approve" class="action-btn" (click)="approveAgent(agent)">
              <mat-icon class="text-success">check_circle</mat-icon>
            </button>
            <button mat-icon-button matTooltip="Reject" class="action-btn" (click)="rejectAgent(agent)">
              <mat-icon class="text-error">cancel</mat-icon>
            </button>
          </ng-container>
        </div>
      </td>
    </ng-container>

    <!-- Actions -->
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let agent">
        <button mat-icon-button matTooltip="View Details" (click)="viewDetail(agent)">
          <mat-icon color="primary">visibility</mat-icon>
        </button>
        <button *ngIf="agent.agentType === 'SendingAgent'" mat-icon-button matTooltip="Locations" (click)="openLocationManagement(agent)">
          <mat-icon class="text-tertiary">location_on</mat-icon>
        </button>
        <button *ngIf="agent.agentType === 'PayoutAgent'" mat-icon-button matTooltip="Banks" (click)="openBankManagement(agent)">
          <mat-icon color="primary">account_balance</mat-icon>
        </button>
        <button *ngIf="agent.status === 'Approved'" mat-icon-button matTooltip="Block" (click)="blockAgent(agent)">
          <mat-icon color="warn">block</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Edit" (click)="startEdit(agent)">
          <mat-icon color="primary">edit</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Delete" (click)="deleteAgent(agent)">
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

  <div *ngIf="!agents.length && !loading" class="empty-state">
    No agents found.
  </div>
</mat-card>

<!-- ============================================================ -->
<!-- Agent Detail Popup                                           -->
<!-- ============================================================ -->
<div *ngIf="showDetail && detailAgent" class="overlay" (click)="closeDetail()"></div>
<div *ngIf="showDetail && detailAgent" class="popup popup-md">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">badge</mat-icon> Agent Details</h3>
    <button mat-icon-button (click)="closeDetail()"><mat-icon>close</mat-icon></button>
  </div>
  <div class="detail-grid">
    <div class="detail-item"><span class="detail-label">Business Name</span><span>{{ detailAgent.businessName }}</span></div>
    <div class="detail-item"><span class="detail-label">Contact Person</span><span>{{ detailAgent.fullName }}</span></div>
    <div class="detail-item"><span class="detail-label">Email</span><span>{{ detailAgent.email }}</span></div>
    <div class="detail-item"><span class="detail-label">Phone</span><span>{{ detailAgent.phoneNumber }}</span></div>
    <div class="detail-item"><span class="detail-label">Agent Type</span><span>{{ detailAgent.agentType === 'SendingAgent' ? 'Sending Agent' : 'Payout Agent' }}</span></div>
    <div class="detail-item"><span class="detail-label">Country</span><span>{{ detailAgent.country }} - {{ detailAgent.city }}</span></div>
    <div class="detail-item"><span class="detail-label">Currency</span><span>{{ detailAgent.currency || getCurrencyForCountry(detailAgent.country) }}</span></div>
    <ng-container *ngIf="detailAgent.agentType === 'SendingAgent'">
      <div class="detail-item"><span class="detail-label">Funding Type</span><span>{{ detailAgent.fundingType }}</span></div>
      <div class="detail-item"><span class="detail-label">Credit Limit</span><span class="text-bold">{{ detailAgent.creditLimit | number:'1.2-2' }}</span></div>
      <div class="detail-item"><span class="detail-label">Current Balance</span><span class="text-bold">{{ detailAgent.currentBalance | number:'1.2-2' }}</span></div>
    </ng-container>
    <div class="detail-item"><span class="detail-label">License Number</span><span>{{ detailAgent.licenseNumber || '-' }}</span></div>
    <div class="detail-item">
      <span class="detail-label">Status</span>
      <span class="chip" [ngClass]="{
        'chip-success': detailAgent.status === 'Approved',
        'chip-error': detailAgent.status === 'Blocked',
        'chip-warning': detailAgent.status !== 'Approved' && detailAgent.status !== 'Blocked'
      }">{{ detailAgent.status }}</span>
    </div>
    <div class="detail-item full-width"><span class="detail-label">Address</span><span>{{ detailAgent.address || '-' }}</span></div>
    <div class="detail-item"><span class="detail-label">Created</span><span>{{ detailAgent.createdAt | date:'yyyy-MM-dd' }}</span></div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Create Agent Popup                                           -->
<!-- ============================================================ -->
<div *ngIf="showCreatePopup" class="overlay" (click)="closeCreatePopup()"></div>
<div *ngIf="showCreatePopup" class="popup popup-lg">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">person_add</mat-icon> Create New Agent</h3>
    <button mat-icon-button (click)="closeCreatePopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="createError" class="alert-banner alert-error inline-alert">{{ createError }}</div>

  <!-- Agent Type -->
  <div class="form-section">
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Agent Type</mat-label>
      <mat-select [(ngModel)]="newAgent.agentType">
        <mat-option value="SendingAgent">Sending Agent</mat-option>
        <mat-option value="PayoutAgent">Payout Agent</mat-option>
      </mat-select>
    </mat-form-field>
  </div>

  <!-- Company Info -->
  <div class="form-section">
    <h4 class="section-title">Company Information</h4>
    <div class="form-grid">
      <mat-form-field appearance="outline">
        <mat-label>Business Name</mat-label>
        <input matInput [(ngModel)]="newAgent.businessName" required />
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>License Number</mat-label>
        <input matInput [(ngModel)]="newAgent.licenseNumber" />
      </mat-form-field>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Address</mat-label>
        <input matInput [(ngModel)]="newAgent.address" />
      </mat-form-field>
    </div>
  </div>

  <!-- Authorized Person -->
  <div class="form-section">
    <h4 class="section-title">Authorized Person</h4>
    <div class="form-grid">
      <mat-form-field appearance="outline">
        <mat-label>Full Name</mat-label>
        <input matInput [(ngModel)]="newAgent.fullName" required />
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Email</mat-label>
        <input matInput type="email" [(ngModel)]="newAgent.email" required />
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Phone</mat-label>
        <input matInput [(ngModel)]="newAgent.phone" required />
      </mat-form-field>
    </div>
  </div>

  <!-- Accounting Details -->
  <div class="form-section">
    <h4 class="section-title">Accounting Details</h4>
    <div class="form-grid">
      <mat-form-field appearance="outline">
        <mat-label>Country</mat-label>
        <mat-select searchable [(ngModel)]="newAgent.country" required>
          <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>City</mat-label>
        <input matInput [(ngModel)]="newAgent.city" required />
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Currency</mat-label>
        <mat-select searchable [(ngModel)]="newAgent.currency" required>
          <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>
        </mat-select>
      </mat-form-field>
      <ng-container *ngIf="newAgent.agentType === 'SendingAgent'">
        <mat-form-field appearance="outline">
          <mat-label>Credit Limit</mat-label>
          <input matInput type="number" [(ngModel)]="newAgent.creditLimit" required />
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Funding Type</mat-label>
          <mat-select [(ngModel)]="newAgent.fundingType" required>
            <mat-option value="PreFunding">PreFunding</mat-option>
            <mat-option value="PostFunding">PostFunding</mat-option>
          </mat-select>
        </mat-form-field>
      </ng-container>
    </div>
  </div>

  <div class="popup-actions">
    <button mat-button (click)="closeCreatePopup()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="createAgent()" [disabled]="creating">
      <mat-spinner *ngIf="creating" diameter="18" class="inline-spinner"></mat-spinner>
      <mat-icon *ngIf="!creating">person_add</mat-icon> Create Agent
    </button>
  </div>
</div>

<!-- ============================================================ -->
<!-- Edit Agent Popup                                             -->
<!-- ============================================================ -->
<div *ngIf="showEditPopup" class="overlay" (click)="closeEditPopup()"></div>
<div *ngIf="showEditPopup" class="popup popup-lg">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">edit</mat-icon> Edit Agent</h3>
    <button mat-icon-button (click)="closeEditPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div *ngIf="editError" class="alert-banner alert-error inline-alert">{{ editError }}</div>

  <!-- Company Info -->
  <div class="form-section">
    <h4 class="section-title">Company Information</h4>
    <div class="form-grid">
      <mat-form-field appearance="outline">
        <mat-label>Business Name</mat-label>
        <input matInput [(ngModel)]="editAgent.businessName" required />
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>License Number</mat-label>
        <input matInput [(ngModel)]="editAgent.licenseNumber" />
      </mat-form-field>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Address</mat-label>
        <input matInput [(ngModel)]="editAgent.address" />
      </mat-form-field>
    </div>
  </div>

  <!-- Authorized Person (read-only) -->
  <div class="form-section">
    <h4 class="section-title">Authorized Person</h4>
    <div class="form-grid">
      <div class="readonly-field">
        <span class="detail-label">Full Name</span>
        <span>{{ editAgentFullName }}</span>
      </div>
      <div class="readonly-field">
        <span class="detail-label">Email</span>
        <span>{{ editAgentEmail }}</span>
      </div>
    </div>
  </div>

  <!-- Accounting Details -->
  <div class="form-section">
    <h4 class="section-title">Accounting Details</h4>
    <div class="form-grid">
      <mat-form-field appearance="outline">
        <mat-label>Country</mat-label>
        <mat-select [(ngModel)]="editAgent.country" required>
          <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>City</mat-label>
        <input matInput [(ngModel)]="editAgent.city" required />
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Currency</mat-label>
        <mat-select [(ngModel)]="editAgent.currency" required>
          <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>
        </mat-select>
      </mat-form-field>
      <ng-container *ngIf="editAgent.agentType === 'SendingAgent'">
        <mat-form-field appearance="outline">
          <mat-label>Credit Limit</mat-label>
          <input matInput type="number" [(ngModel)]="editAgent.creditLimit" required />
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Funding Type</mat-label>
          <mat-select [(ngModel)]="editAgent.fundingType" required>
            <mat-option value="PreFunding">PreFunding</mat-option>
            <mat-option value="PostFunding">PostFunding</mat-option>
          </mat-select>
        </mat-form-field>
      </ng-container>
      <mat-form-field appearance="outline">
        <mat-label>Agent Type</mat-label>
        <mat-select [(ngModel)]="editAgent.agentType" required>
          <mat-option value="SendingAgent">Sending Agent</mat-option>
          <mat-option value="PayoutAgent">Payout Agent</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  </div>

  <div class="popup-actions">
    <button mat-button (click)="closeEditPopup()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="updateAgent()" [disabled]="updating">
      <mat-spinner *ngIf="updating" diameter="18" class="inline-spinner"></mat-spinner>
      <mat-icon *ngIf="!updating">save</mat-icon> Save Changes
    </button>
  </div>
</div>

<!-- ============================================================ -->
<!-- Location Management Popup                                    -->
<!-- ============================================================ -->
<div *ngIf="showLocationPopup" class="overlay" (click)="closeLocationPopup()"></div>
<div *ngIf="showLocationPopup" class="popup popup-xl">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">location_on</mat-icon> Locations &mdash; {{ locationAgent?.businessName }}</h3>
    <button mat-icon-button (click)="closeLocationPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div class="popup-toolbar">
    <button mat-raised-button color="primary" (click)="openLocationForm(null)">
      <mat-icon>add</mat-icon> Add Location
    </button>
  </div>

  <table *ngIf="agentLocations.length" mat-table [dataSource]="agentLocations" class="inner-table">
    <ng-container matColumnDef="locationName">
      <th mat-header-cell *matHeaderCellDef>Location</th>
      <td mat-cell *matCellDef="let loc">{{ loc.locationName }}</td>
    </ng-container>
    <ng-container matColumnDef="locationCode">
      <th mat-header-cell *matHeaderCellDef>Code</th>
      <td mat-cell *matCellDef="let loc">{{ loc.locationCode || '-' }}</td>
    </ng-container>
    <ng-container matColumnDef="countryCity">
      <th mat-header-cell *matHeaderCellDef>Country / City</th>
      <td mat-cell *matCellDef="let loc">{{ loc.country || '-' }} / {{ loc.city || '-' }}</td>
    </ng-container>
    <ng-container matColumnDef="users">
      <th mat-header-cell *matHeaderCellDef>Users</th>
      <td mat-cell *matCellDef="let loc"><span class="chip chip-info">{{ loc.users.length }}</span></td>
    </ng-container>
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef>Status</th>
      <td mat-cell *matCellDef="let loc">
        <span class="chip" [ngClass]="loc.isActive ? 'chip-success' : 'chip-default'">{{ loc.isActive ? 'Active' : 'Inactive' }}</span>
      </td>
    </ng-container>
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let loc">
        <button mat-icon-button matTooltip="Manage Users" (click)="openUserManagement(loc)"><mat-icon color="primary">people</mat-icon></button>
        <button mat-icon-button matTooltip="Edit" (click)="openLocationForm(loc)"><mat-icon class="text-warning">edit</mat-icon></button>
        <button mat-icon-button [matTooltip]="loc.isActive ? 'Deactivate' : 'Activate'" (click)="toggleLocation(loc.id)">
          <mat-icon [ngClass]="loc.isActive ? 'text-success' : ''">{{ loc.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Delete" (click)="deleteLocation(loc.id)"><mat-icon color="warn">delete</mat-icon></button>
      </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="['locationName','locationCode','countryCity','users','status','actions']"></tr>
    <tr mat-row *matRowDef="let row; columns: ['locationName','locationCode','countryCity','users','status','actions'];"></tr>
  </table>

  <div *ngIf="!agentLocations.length" class="empty-state-info">No locations configured yet.</div>
</div>

<!-- ============================================================ -->
<!-- Location Add/Edit Form                                       -->
<!-- ============================================================ -->
<div *ngIf="showLocationForm" class="overlay overlay-upper" (click)="closeLocationForm()"></div>
<div *ngIf="showLocationForm" class="popup popup-md popup-upper">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">location_on</mat-icon> {{ editingLocationId != null ? 'Edit Location' : 'Add New Location' }}</h3>
    <button mat-icon-button (click)="closeLocationForm()"><mat-icon>close</mat-icon></button>
  </div>
  <div *ngIf="locationFormError" class="alert-banner alert-error inline-alert">{{ locationFormError }}</div>
  <div class="form-grid">
    <mat-form-field appearance="outline">
      <mat-label>Location Name *</mat-label>
      <input matInput [(ngModel)]="locName" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Location Code</mat-label>
      <input matInput [(ngModel)]="locCode" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Country</mat-label>
      <input matInput [(ngModel)]="locCountry" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>City</mat-label>
      <input matInput [(ngModel)]="locCity" />
    </mat-form-field>
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Address</mat-label>
      <input matInput [(ngModel)]="locAddress" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Contact Phone</mat-label>
      <input matInput [(ngModel)]="locPhone" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Contact Email</mat-label>
      <input matInput [(ngModel)]="locEmail" />
    </mat-form-field>
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Operating Hours</mat-label>
      <input matInput placeholder="e.g. Mon-Fri 9AM-5PM" [(ngModel)]="locHours" />
    </mat-form-field>
  </div>
  <div class="popup-actions">
    <button mat-button (click)="closeLocationForm()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="saveLocation()"><mat-icon>save</mat-icon> Save</button>
  </div>
</div>

<!-- ============================================================ -->
<!-- User Management Popup                                        -->
<!-- ============================================================ -->
<div *ngIf="showUserPopup && userLocation" class="overlay overlay-upper" (click)="closeUserPopup()"></div>
<div *ngIf="showUserPopup && userLocation" class="popup popup-xl popup-upper">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">people</mat-icon> Users &mdash; {{ userLocation.locationName }}</h3>
    <button mat-icon-button (click)="closeUserPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div class="popup-toolbar">
    <button mat-raised-button color="primary" (click)="openUserForm(null)"><mat-icon>person_add</mat-icon> Add User</button>
  </div>

  <table *ngIf="userLocation.users.length" mat-table [dataSource]="userLocation.users" class="inner-table">
    <ng-container matColumnDef="fullName"><th mat-header-cell *matHeaderCellDef>Full Name</th><td mat-cell *matCellDef="let u">{{ u.fullName }}</td></ng-container>
    <ng-container matColumnDef="email"><th mat-header-cell *matHeaderCellDef>Email</th><td mat-cell *matCellDef="let u">{{ u.email }}</td></ng-container>
    <ng-container matColumnDef="userName"><th mat-header-cell *matHeaderCellDef>Username</th><td mat-cell *matCellDef="let u">{{ u.userName || '-' }}</td></ng-container>
    <ng-container matColumnDef="phone"><th mat-header-cell *matHeaderCellDef>Phone</th><td mat-cell *matCellDef="let u">{{ u.phone || '-' }}</td></ng-container>
    <ng-container matColumnDef="role"><th mat-header-cell *matHeaderCellDef>Role</th><td mat-cell *matCellDef="let u">{{ u.role || '-' }}</td></ng-container>
    <ng-container matColumnDef="isDefault">
      <th mat-header-cell *matHeaderCellDef>Default</th>
      <td mat-cell *matCellDef="let u"><span *ngIf="u.isDefault" class="chip chip-success">Default</span></td>
    </ng-container>
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let u">
        <button mat-icon-button matTooltip="Edit" (click)="openUserForm(u)"><mat-icon color="primary">edit</mat-icon></button>
        <button mat-icon-button matTooltip="Delete" (click)="deleteUser(u.id)"><mat-icon color="warn">delete</mat-icon></button>
      </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="['fullName','email','userName','phone','role','isDefault','actions']"></tr>
    <tr mat-row *matRowDef="let row; columns: ['fullName','email','userName','phone','role','isDefault','actions'];"></tr>
  </table>

  <div *ngIf="!userLocation.users.length" class="empty-state-info">No users yet. Click "Add User" to add one.</div>
</div>

<!-- ============================================================ -->
<!-- User Add/Edit Form                                           -->
<!-- ============================================================ -->
<div *ngIf="showUserForm" class="overlay overlay-top" (click)="closeUserForm()"></div>
<div *ngIf="showUserForm" class="popup popup-md popup-top">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">person</mat-icon> {{ editingUserId != null ? 'Edit User' : 'Add User' }}</h3>
    <button mat-icon-button (click)="closeUserForm()"><mat-icon>close</mat-icon></button>
  </div>
  <div *ngIf="userFormError" class="alert-banner alert-error inline-alert">{{ userFormError }}</div>
  <div class="form-grid">
    <mat-form-field appearance="outline">
      <mat-label>Full Name *</mat-label>
      <input matInput [(ngModel)]="userFullName" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Email *</mat-label>
      <input matInput [(ngModel)]="userEmail" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Username</mat-label>
      <input matInput [(ngModel)]="userUserName" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>{{ editingUserId != null ? 'New Password (leave blank to keep)' : 'Password *' }}</mat-label>
      <input matInput type="password" [(ngModel)]="userPassword" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Phone</mat-label>
      <input matInput [(ngModel)]="userPhone" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Role</mat-label>
      <mat-select [(ngModel)]="userRole">
        <mat-option value="Operator">Operator</mat-option>
        <mat-option value="Manager">Manager</mat-option>
        <mat-option value="Cashier">Cashier</mat-option>
      </mat-select>
    </mat-form-field>
  </div>
  <mat-checkbox [(ngModel)]="userIsDefault" color="primary" class="mb-16">Default User</mat-checkbox>
  <div class="popup-actions">
    <button mat-button (click)="closeUserForm()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="saveUser()"><mat-icon>save</mat-icon> Save</button>
  </div>
</div>

<!-- ============================================================ -->
<!-- Bank Management Popup                                        -->
<!-- ============================================================ -->
<div *ngIf="showBankPopup" class="overlay" (click)="closeBankPopup()"></div>
<div *ngIf="showBankPopup" class="popup popup-xl">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">account_balance</mat-icon> Banks &mdash; {{ bankAgent?.businessName }}</h3>
    <button mat-icon-button (click)="closeBankPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div class="popup-toolbar">
    <button mat-raised-button color="primary" (click)="openBankForm(null)"><mat-icon>add</mat-icon> Add Bank</button>
  </div>

  <table *ngIf="agentBanks.length" mat-table [dataSource]="agentBanks" class="inner-table">
    <ng-container matColumnDef="bankName"><th mat-header-cell *matHeaderCellDef>Bank Name</th><td mat-cell *matCellDef="let b">{{ b.bankName }}</td></ng-container>
    <ng-container matColumnDef="paymentMode"><th mat-header-cell *matHeaderCellDef>Payment Mode</th><td mat-cell *matCellDef="let b"><span class="chip chip-info">{{ b.paymentMethodName || '-' }}</span></td></ng-container>
    <ng-container matColumnDef="bankCode"><th mat-header-cell *matHeaderCellDef>Code</th><td mat-cell *matCellDef="let b">{{ b.bankCode || '-' }}</td></ng-container>
    <ng-container matColumnDef="swiftCode"><th mat-header-cell *matHeaderCellDef>SWIFT</th><td mat-cell *matCellDef="let b">{{ b.swiftCode || '-' }}</td></ng-container>
    <ng-container matColumnDef="branches">
      <th mat-header-cell *matHeaderCellDef>Branches</th>
      <td mat-cell *matCellDef="let b"><span class="chip chip-info">{{ b.branches.length }}</span></td>
    </ng-container>
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef>Status</th>
      <td mat-cell *matCellDef="let b"><span class="chip" [ngClass]="b.isActive ? 'chip-success' : 'chip-default'">{{ b.isActive ? 'Active' : 'Inactive' }}</span></td>
    </ng-container>
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let b">
        <button mat-icon-button matTooltip="Manage Branches" (click)="openBankBranchManagement(b)"><mat-icon color="primary">account_tree</mat-icon></button>
        <button mat-icon-button matTooltip="Edit" (click)="openBankForm(b)"><mat-icon class="text-warning">edit</mat-icon></button>
        <button mat-icon-button [matTooltip]="b.isActive ? 'Deactivate' : 'Activate'" (click)="toggleBank(b.id)">
          <mat-icon [ngClass]="b.isActive ? 'text-success' : ''">{{ b.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Delete" (click)="deleteBank(b.id)"><mat-icon color="warn">delete</mat-icon></button>
      </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="['bankName','paymentMode','bankCode','swiftCode','branches','status','actions']"></tr>
    <tr mat-row *matRowDef="let row; columns: ['bankName','paymentMode','bankCode','swiftCode','branches','status','actions'];"></tr>
  </table>

  <div *ngIf="!agentBanks.length" class="empty-state-info">No banks configured yet.</div>
</div>

<!-- ============================================================ -->
<!-- Bank Add/Edit Form                                           -->
<!-- ============================================================ -->
<div *ngIf="showBankForm" class="overlay overlay-upper" (click)="closeBankForm()"></div>
<div *ngIf="showBankForm" class="popup popup-md popup-upper">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">account_balance</mat-icon> {{ editingBankId != null ? 'Edit Bank' : 'Add New Bank' }}</h3>
    <button mat-icon-button (click)="closeBankForm()"><mat-icon>close</mat-icon></button>
  </div>
  <div *ngIf="bankFormError" class="alert-banner alert-error inline-alert">{{ bankFormError }}</div>
  <div class="form-grid">
    <mat-form-field appearance="outline">
      <mat-label>Bank Name *</mat-label>
      <input matInput [(ngModel)]="bankName" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Payment Mode *</mat-label>
      <mat-select searchable [(ngModel)]="bankPaymentMethodId" required>
        <mat-option *ngFor="let pm of paymentMethods" [value]="pm.id">{{ pm.name }}</mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Bank Code</mat-label>
      <input matInput [(ngModel)]="bankCode" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>SWIFT Code</mat-label>
      <input matInput [(ngModel)]="bankSwift" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Routing Number</mat-label>
      <input matInput [(ngModel)]="bankRouting" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Country</mat-label>
      <input matInput [(ngModel)]="bankCountry" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>City</mat-label>
      <input matInput [(ngModel)]="bankCity" />
    </mat-form-field>
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Address</mat-label>
      <input matInput [(ngModel)]="bankAddress" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Contact Phone</mat-label>
      <input matInput [(ngModel)]="bankPhone" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Contact Email</mat-label>
      <input matInput [(ngModel)]="bankEmail" />
    </mat-form-field>
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Additional Info</mat-label>
      <textarea matInput rows="2" [(ngModel)]="bankAdditionalInfo"></textarea>
    </mat-form-field>
  </div>
  <div class="popup-actions">
    <button mat-button (click)="closeBankForm()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="saveBank()"><mat-icon>save</mat-icon> Save</button>
  </div>
</div>

<!-- ============================================================ -->
<!-- Bank Branch Management Popup                                 -->
<!-- ============================================================ -->
<div *ngIf="showBankBranchPopup && bankBranchBank" class="overlay overlay-upper" (click)="closeBankBranchPopup()"></div>
<div *ngIf="showBankBranchPopup && bankBranchBank" class="popup popup-lg popup-upper">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">account_tree</mat-icon> Branches &mdash; {{ bankBranchBank.bankName }}</h3>
    <button mat-icon-button (click)="closeBankBranchPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <div class="popup-toolbar">
    <button mat-raised-button color="primary" (click)="openBankBranchForm(null)"><mat-icon>add</mat-icon> Add Branch</button>
  </div>

  <table *ngIf="bankBranchBank.branches.length" mat-table [dataSource]="bankBranchBank.branches" class="inner-table">
    <ng-container matColumnDef="branchName"><th mat-header-cell *matHeaderCellDef>Branch Name</th><td mat-cell *matCellDef="let br">{{ br.branchName }}</td></ng-container>
    <ng-container matColumnDef="branchCode"><th mat-header-cell *matHeaderCellDef>Code</th><td mat-cell *matCellDef="let br">{{ br.branchCode || '-' }}</td></ng-container>
    <ng-container matColumnDef="swiftCode"><th mat-header-cell *matHeaderCellDef>SWIFT</th><td mat-cell *matCellDef="let br">{{ br.swiftCode || '-' }}</td></ng-container>
    <ng-container matColumnDef="address"><th mat-header-cell *matHeaderCellDef>Address</th><td mat-cell *matCellDef="let br">{{ br.address || '-' }}</td></ng-container>
    <ng-container matColumnDef="phone"><th mat-header-cell *matHeaderCellDef>Phone</th><td mat-cell *matCellDef="let br">{{ br.contactPhone || '-' }}</td></ng-container>
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let br">
        <button mat-icon-button matTooltip="Edit" (click)="openBankBranchForm(br)"><mat-icon color="primary">edit</mat-icon></button>
        <button mat-icon-button matTooltip="Delete" (click)="deleteBankBranch(br.id)"><mat-icon color="warn">delete</mat-icon></button>
      </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="['branchName','branchCode','swiftCode','address','phone','actions']"></tr>
    <tr mat-row *matRowDef="let row; columns: ['branchName','branchCode','swiftCode','address','phone','actions'];"></tr>
  </table>

  <div *ngIf="!bankBranchBank.branches.length" class="empty-state-info">No branches yet.</div>
</div>

<!-- ============================================================ -->
<!-- Bank Branch Add/Edit Form                                    -->
<!-- ============================================================ -->
<div *ngIf="showBankBranchForm" class="overlay overlay-top" (click)="closeBankBranchForm()"></div>
<div *ngIf="showBankBranchForm" class="popup popup-md popup-top">
  <div class="popup-header">
    <h3><mat-icon class="header-icon">account_tree</mat-icon> {{ editingBankBranchId != null ? 'Edit Branch' : 'Add Branch' }}</h3>
    <button mat-icon-button (click)="closeBankBranchForm()"><mat-icon>close</mat-icon></button>
  </div>
  <div *ngIf="bankBranchFormError" class="alert-banner alert-error inline-alert">{{ bankBranchFormError }}</div>
  <div class="form-grid">
    <mat-form-field appearance="outline">
      <mat-label>Branch Name *</mat-label>
      <input matInput [(ngModel)]="bbName" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Branch Code</mat-label>
      <input matInput [(ngModel)]="bbCode" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>SWIFT Code</mat-label>
      <input matInput [(ngModel)]="bbSwift" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Contact Phone</mat-label>
      <input matInput [(ngModel)]="bbPhone" />
    </mat-form-field>
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Address</mat-label>
      <input matInput [(ngModel)]="bbAddress" />
    </mat-form-field>
  </div>
  <div class="popup-actions">
    <button mat-button (click)="closeBankBranchForm()"><mat-icon>close</mat-icon> Cancel</button>
    <button mat-raised-button color="primary" (click)="saveBankBranch()"><mat-icon>save</mat-icon> Save</button>
  </div>
</div>
`, styles: ["/* src/app/pages/admin/agent-management/agent-management.component.scss */\n.agent-table {\n  width: 100%;\n}\n.status-cell {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.action-btn {\n  width: 28px !important;\n  height: 28px !important;\n  line-height: 28px !important;\n}\n.action-btn .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.form-section {\n  margin-bottom: 14px;\n  padding: 14px 16px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  background: #fafbfc;\n}\n.section-title {\n  font-weight: 600;\n  font-size: 13px;\n  margin: 0 0 10px;\n  color: rgba(0, 0, 0, 0.65);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.readonly-field {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 6px 0;\n}\n.inner-table {\n  margin-top: 4px;\n}\n.empty-state-info {\n  background: #f8fafc;\n  border: 1px dashed rgba(0, 0, 0, 0.12);\n  margin-top: 8px;\n}\n.mb-16 {\n  margin-bottom: 14px;\n  margin-top: 4px;\n}\n:host-context(.dark-mode) .empty-state-info {\n  background: rgba(21, 101, 192, 0.1);\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .section-title {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .form-section {\n  background: #334155;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n/*# sourceMappingURL=agent-management.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentManagementComponent, { className: "AgentManagementComponent", filePath: "src/app/pages/admin/agent-management/agent-management.component.ts", lineNumber: 102 });
})();
export {
  AgentManagementComponent
};
//# sourceMappingURL=chunk-6C7WCLV6.js.map
