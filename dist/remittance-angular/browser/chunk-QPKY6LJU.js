import {
  ExportService
} from "./chunk-DU4FVJ3R.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-6I2CTDTD.js";
import {
  NotificationService
} from "./chunk-U44UDHMQ.js";
import "./chunk-VTD77X6G.js";
import {
  ApiService
} from "./chunk-2NPUZHRJ.js";
import {
  AuthStateService
} from "./chunk-MP5DRVCF.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-FEHYQLJK.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XQC2OG7J.js";

// src/app/pages/admin/agent-management/agent-management.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400": a0, "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400": a1, "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400": a2 });
function AgentManagementComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "circle", 18)(3, "path", 19);
    \u0275\u0275elementEnd()();
  }
}
function AgentManagementComponent_div_17_tr_21_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 56);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_tr_21_ng_container_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const agent_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unblockAgent(agent_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 4);
    \u0275\u0275element(3, "path", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function AgentManagementComponent_div_17_tr_21_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 58);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_tr_21_ng_container_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const agent_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveAgent(agent_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 4);
    \u0275\u0275element(3, "path", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_tr_21_ng_container_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const agent_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectAgent(agent_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 4);
    \u0275\u0275element(6, "path", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function AgentManagementComponent_div_17_tr_21_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_tr_21_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const agent_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openLocationManagement(agent_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 4);
    \u0275\u0275element(2, "path", 63)(3, "path", 64);
    \u0275\u0275elementEnd()();
  }
}
function AgentManagementComponent_div_17_tr_21_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_tr_21_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const agent_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openBankManagement(agent_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 4);
    \u0275\u0275element(2, "path", 66);
    \u0275\u0275elementEnd()();
  }
}
function AgentManagementComponent_div_17_tr_21_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_tr_21_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const agent_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.blockAgent(agent_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 4);
    \u0275\u0275element(2, "path", 68);
    \u0275\u0275elementEnd()();
  }
}
function AgentManagementComponent_div_17_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 41)(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 41)(9, "div", 43)(10, "span", 42);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AgentManagementComponent_div_17_tr_21_ng_container_12_Template, 4, 0, "ng-container", 44)(13, AgentManagementComponent_div_17_tr_21_ng_container_13_Template, 7, 0, "ng-container", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 41)(15, "div", 45)(16, "button", 46);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_tr_21_Template_button_click_16_listener() {
      const agent_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(agent_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 4);
    \u0275\u0275element(18, "path", 47)(19, "path", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, AgentManagementComponent_div_17_tr_21_button_20_Template, 4, 0, "button", 49)(21, AgentManagementComponent_div_17_tr_21_button_21_Template, 3, 0, "button", 50)(22, AgentManagementComponent_div_17_tr_21_button_22_Template, 3, 0, "button", 51);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 52);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_tr_21_Template_button_click_23_listener() {
      const agent_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit(agent_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 4);
    \u0275\u0275element(25, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "button", 54);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_tr_21_Template_button_click_26_listener() {
      const agent_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteAgent(agent_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 4);
    \u0275\u0275element(28, "path", 55);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const agent_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(agent_r5.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(agent_r5.country);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", agent_r5.agentType === "SendingAgent" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", agent_r5.agentType === "SendingAgent" ? "Sending" : "Payout", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(11, _c0, agent_r5.status === "Approved", agent_r5.status === "Blocked" || agent_r5.status === "Rejected", agent_r5.status !== "Approved" && agent_r5.status !== "Blocked" && agent_r5.status !== "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(agent_r5.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r5.status === "Blocked");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r5.status !== "Approved" && agent_r5.status !== "Blocked" && agent_r5.status !== "Rejected");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", agent_r5.agentType === "SendingAgent");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r5.agentType === "PayoutAgent");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r5.status === "Approved");
  }
}
function AgentManagementComponent_div_17_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1, " No agents found. ");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 23);
    \u0275\u0275element(4, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_17_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AgentManagementComponent_div_17_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchDebounce.next($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 26)(7, "table", 27)(8, "thead", 28)(9, "tr")(10, "th", 29);
    \u0275\u0275text(11, "Business Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 29);
    \u0275\u0275text(13, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 29);
    \u0275\u0275text(15, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 29);
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 29);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody", 30);
    \u0275\u0275template(21, AgentManagementComponent_div_17_tr_21_Template, 29, 15, "tr", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 32)(23, "span", 33);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 34)(26, "button", 35);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: 0, pageSize: ctx_r1.pageSize }));
    });
    \u0275\u0275text(27, "First");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 35);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: ctx_r1.pageIndex - 1, pageSize: ctx_r1.pageSize }));
    });
    \u0275\u0275text(29, "Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 36);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 35);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: ctx_r1.pageIndex + 1, pageSize: ctx_r1.pageSize }));
    });
    \u0275\u0275text(33, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 35);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange({ pageIndex: ctx_r1.Math.ceil(ctx_r1.totalCount / ctx_r1.pageSize) - 1, pageSize: ctx_r1.pageSize }));
    });
    \u0275\u0275text(35, "Last");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(36, AgentManagementComponent_div_17_div_36_Template, 2, 0, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.agents);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("Showing ", ctx_r1.pageIndex * ctx_r1.pageSize + 1, "\u2013", (ctx_r1.pageIndex + 1) * ctx_r1.pageSize > ctx_r1.totalCount ? ctx_r1.totalCount : (ctx_r1.pageIndex + 1) * ctx_r1.pageSize, " of ", ctx_r1.totalCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pageIndex + 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", (ctx_r1.pageIndex + 1) * ctx_r1.pageSize >= ctx_r1.totalCount);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", (ctx_r1.pageIndex + 1) * ctx_r1.pageSize >= ctx_r1.totalCount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.agents.length && !ctx_r1.loading);
  }
}
function AgentManagementComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function AgentManagementComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_19_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "span", 79);
    \u0275\u0275text(3, "Funding Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 81);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "span", 79);
    \u0275\u0275text(8, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 83);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "span", 79);
    \u0275\u0275text(14, "Current Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 83);
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
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4, "Agent Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AgentManagementComponent_div_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 78)(9, "div")(10, "span", 79);
    \u0275\u0275text(11, "Business Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 80);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "span", 79);
    \u0275\u0275text(16, "Contact Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 81);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "span", 79);
    \u0275\u0275text(21, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 81);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "span", 79);
    \u0275\u0275text(26, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 81);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "span", 79);
    \u0275\u0275text(31, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 81);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "span", 79);
    \u0275\u0275text(36, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 81);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "span", 79);
    \u0275\u0275text(41, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 81);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, AgentManagementComponent_div_19_ng_container_44_Template, 18, 9, "ng-container", 44);
    \u0275\u0275elementStart(45, "div")(46, "span", 79);
    \u0275\u0275text(47, "License Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 81);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "span", 79);
    \u0275\u0275text(52, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 42);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 82)(56, "span", 79);
    \u0275\u0275text(57, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 81);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div")(61, "span", 79);
    \u0275\u0275text(62, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 81);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
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
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(17, _c0, ctx_r1.detailAgent.status === "Approved", ctx_r1.detailAgent.status === "Blocked", ctx_r1.detailAgent.status !== "Approved" && ctx_r1.detailAgent.status !== "Blocked"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.address || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 14, ctx_r1.detailAgent.createdAt, "dd/MM/yyyy"));
  }
}
function AgentManagementComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function AgentManagementComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreatePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_21_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.createError);
  }
}
function AgentManagementComponent_div_21_option_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("value", c_r14.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14.name);
  }
}
function AgentManagementComponent_div_21_option_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275property("value", c_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r15);
  }
}
function AgentManagementComponent_div_21_ng_container_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "label", 94);
    \u0275\u0275text(3, "Credit Limit *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 106);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_ng_container_70_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.creditLimit, $event) || (ctx_r1.newAgent.creditLimit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "label", 94);
    \u0275\u0275text(7, "Funding Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_ng_container_70_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.fundingType, $event) || (ctx_r1.newAgent.fundingType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 107);
    \u0275\u0275text(10, "PreFunding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 108);
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
function AgentManagementComponent_div_21__svg_svg_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 109);
    \u0275\u0275element(1, "circle", 18)(2, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 84)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4, "Create New Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AgentManagementComponent_div_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreatePopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 85);
    \u0275\u0275template(9, AgentManagementComponent_div_21_div_9_Template, 2, 1, "div", 86);
    \u0275\u0275elementStart(10, "div")(11, "label", 87);
    \u0275\u0275text(12, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.agentType, $event) || (ctx_r1.newAgent.agentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 89);
    \u0275\u0275text(15, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 90);
    \u0275\u0275text(17, "Payout Agent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 91)(19, "h4", 92);
    \u0275\u0275text(20, "Company Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 93)(22, "div")(23, "label", 94);
    \u0275\u0275text(24, "Business Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.businessName, $event) || (ctx_r1.newAgent.businessName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "label", 94);
    \u0275\u0275text(28, "License Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.licenseNumber, $event) || (ctx_r1.newAgent.licenseNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 95)(31, "label", 94);
    \u0275\u0275text(32, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.address, $event) || (ctx_r1.newAgent.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 91)(35, "h4", 92);
    \u0275\u0275text(36, "Authorized Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 96)(38, "div")(39, "label", 94);
    \u0275\u0275text(40, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.fullName, $event) || (ctx_r1.newAgent.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "label", 94);
    \u0275\u0275text(44, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.email, $event) || (ctx_r1.newAgent.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div")(47, "label", 94);
    \u0275\u0275text(48, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.phone, $event) || (ctx_r1.newAgent.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 91)(51, "h4", 92);
    \u0275\u0275text(52, "Accounting Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 93)(54, "div")(55, "label", 94);
    \u0275\u0275text(56, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_select_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.country, $event) || (ctx_r1.newAgent.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(58, "option", 98);
    \u0275\u0275text(59, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, AgentManagementComponent_div_21_option_60_Template, 2, 2, "option", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div")(62, "label", 94);
    \u0275\u0275text(63, "City *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.city, $event) || (ctx_r1.newAgent.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div")(66, "label", 94);
    \u0275\u0275text(67, "Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_21_Template_select_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.currency, $event) || (ctx_r1.newAgent.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(69, AgentManagementComponent_div_21_option_69_Template, 2, 2, "option", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(70, AgentManagementComponent_div_21_ng_container_70_Template, 13, 2, "ng-container", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 100)(72, "button", 101);
    \u0275\u0275listener("click", function AgentManagementComponent_div_21_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreatePopup());
    });
    \u0275\u0275text(73, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 102);
    \u0275\u0275listener("click", function AgentManagementComponent_div_21_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createAgent());
    });
    \u0275\u0275template(75, AgentManagementComponent_div_21__svg_svg_75_Template, 3, 0, "svg", 103);
    \u0275\u0275text(76, " Create Agent ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.createError);
    \u0275\u0275advance(4);
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
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.currency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newAgent.agentType === "SendingAgent");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.creating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.creating);
  }
}
function AgentManagementComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function AgentManagementComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_23_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editError);
  }
}
function AgentManagementComponent_div_23_option_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 105);
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
function AgentManagementComponent_div_23_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 105);
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
function AgentManagementComponent_div_23_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "label", 94);
    \u0275\u0275text(3, "Credit Limit *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 106);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_ng_container_58_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.creditLimit, $event) || (ctx_r1.editAgent.creditLimit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "label", 94);
    \u0275\u0275text(7, "Funding Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_ng_container_58_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.fundingType, $event) || (ctx_r1.editAgent.fundingType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 107);
    \u0275\u0275text(10, "PreFunding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 108);
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
function AgentManagementComponent_div_23__svg_svg_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 109);
    \u0275\u0275element(1, "circle", 18)(2, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 84)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4, "Edit Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AgentManagementComponent_div_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 85);
    \u0275\u0275template(9, AgentManagementComponent_div_23_div_9_Template, 2, 1, "div", 86);
    \u0275\u0275elementStart(10, "div", 91)(11, "h4", 92);
    \u0275\u0275text(12, "Company Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 93)(14, "div")(15, "label", 94);
    \u0275\u0275text(16, "Business Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.businessName, $event) || (ctx_r1.editAgent.businessName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "label", 94);
    \u0275\u0275text(20, "License Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.licenseNumber, $event) || (ctx_r1.editAgent.licenseNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 95)(23, "label", 94);
    \u0275\u0275text(24, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.address, $event) || (ctx_r1.editAgent.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 91)(27, "h4", 92);
    \u0275\u0275text(28, "Authorized Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 110)(30, "div")(31, "span", 79);
    \u0275\u0275text(32, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 81);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "span", 79);
    \u0275\u0275text(37, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 81);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 91)(41, "h4", 92);
    \u0275\u0275text(42, "Accounting Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 93)(44, "div")(45, "label", 94);
    \u0275\u0275text(46, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.country, $event) || (ctx_r1.editAgent.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(48, AgentManagementComponent_div_23_option_48_Template, 2, 2, "option", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div")(50, "label", 94);
    \u0275\u0275text(51, "City *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.city, $event) || (ctx_r1.editAgent.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div")(54, "label", 94);
    \u0275\u0275text(55, "Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_select_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.currency, $event) || (ctx_r1.editAgent.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(57, AgentManagementComponent_div_23_option_57_Template, 2, 2, "option", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, AgentManagementComponent_div_23_ng_container_58_Template, 13, 2, "ng-container", 44);
    \u0275\u0275elementStart(59, "div")(60, "label", 94);
    \u0275\u0275text(61, "Agent Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_23_Template_select_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.agentType, $event) || (ctx_r1.editAgent.agentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(63, "option", 89);
    \u0275\u0275text(64, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "option", 90);
    \u0275\u0275text(66, "Payout Agent");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(67, "div", 100)(68, "button", 101);
    \u0275\u0275listener("click", function AgentManagementComponent_div_23_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditPopup());
    });
    \u0275\u0275text(69, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "button", 102);
    \u0275\u0275listener("click", function AgentManagementComponent_div_23_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateAgent());
    });
    \u0275\u0275template(71, AgentManagementComponent_div_23__svg_svg_71_Template, 3, 0, "svg", 103);
    \u0275\u0275text(72, " Save Changes ");
    \u0275\u0275elementEnd()()()();
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
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.updating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.updating);
  }
}
function AgentManagementComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function AgentManagementComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_25_div_11_tr_17__svg_path_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 131);
  }
}
function AgentManagementComponent_div_25_div_11_tr_17__svg_path_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 132);
  }
}
function AgentManagementComponent_div_25_div_11_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 119)(1, "td", 120);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 121);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 121);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 117)(8, "span", 122);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 117)(11, "span", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 117)(14, "div", 45)(15, "button", 123);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_div_11_tr_17_Template_button_click_15_listener() {
      const loc_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openUserManagement(loc_r25));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 4);
    \u0275\u0275element(17, "path", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 125);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_div_11_tr_17_Template_button_click_18_listener() {
      const loc_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openLocationForm(loc_r25));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 4);
    \u0275\u0275element(20, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 126);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_div_11_tr_17_Template_button_click_21_listener() {
      const loc_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleLocation(loc_r25.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 127);
    \u0275\u0275template(23, AgentManagementComponent_div_25_div_11_tr_17__svg_path_23_Template, 1, 0, "path", 128)(24, AgentManagementComponent_div_25_div_11_tr_17__svg_path_24_Template, 1, 0, "path", 129);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 130);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_div_11_tr_17_Template_button_click_25_listener() {
      const loc_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteLocation(loc_r25.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 4);
    \u0275\u0275element(27, "path", 55);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const loc_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r25.locationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r25.locationCode || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", loc_r25.country || "-", " / ", loc_r25.city || "-", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(loc_r25.users.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", loc_r25.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r25.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(9);
    \u0275\u0275property("title", loc_r25.isActive ? "Deactivate" : "Activate")("ngClass", loc_r25.isActive ? "text-green-600" : "text-surface-400");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", loc_r25.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !loc_r25.isActive);
  }
}
function AgentManagementComponent_div_25_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 27)(2, "thead", 116)(3, "tr")(4, "th", 117);
    \u0275\u0275text(5, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 117);
    \u0275\u0275text(7, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 117);
    \u0275\u0275text(9, "Country / City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 117);
    \u0275\u0275text(11, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 117);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 117);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 30);
    \u0275\u0275template(17, AgentManagementComponent_div_25_div_11_tr_17_Template, 28, 11, "tr", 118);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.agentLocations);
  }
}
function AgentManagementComponent_div_25_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275text(1, "No locations configured yet.");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 111)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 112)(9, "button", 113);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openLocationForm(null));
    });
    \u0275\u0275text(10, "+ Add Location");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AgentManagementComponent_div_25_div_11_Template, 18, 1, "div", 114)(12, AgentManagementComponent_div_25_div_12_Template, 2, 0, "div", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Locations \u2014 ", ctx_r1.locationAgent == null ? null : ctx_r1.locationAgent.businessName, "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.agentLocations.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.agentLocations.length);
  }
}
function AgentManagementComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275listener("click", function AgentManagementComponent_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_27_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
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
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 72)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AgentManagementComponent_div_27_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 136);
    \u0275\u0275template(9, AgentManagementComponent_div_27_div_9_Template, 2, 1, "div", 86);
    \u0275\u0275elementStart(10, "div", 93)(11, "div")(12, "label", 94);
    \u0275\u0275text(13, "Location Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locName, $event) || (ctx_r1.locName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 94);
    \u0275\u0275text(17, "Location Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locCode, $event) || (ctx_r1.locCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 94);
    \u0275\u0275text(21, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locCountry, $event) || (ctx_r1.locCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 94);
    \u0275\u0275text(25, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locCity, $event) || (ctx_r1.locCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 95)(28, "label", 94);
    \u0275\u0275text(29, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locAddress, $event) || (ctx_r1.locAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "label", 94);
    \u0275\u0275text(33, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locPhone, $event) || (ctx_r1.locPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "label", 94);
    \u0275\u0275text(37, "Contact Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locEmail, $event) || (ctx_r1.locEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 95)(40, "label", 94);
    \u0275\u0275text(41, "Operating Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_27_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locHours, $event) || (ctx_r1.locHours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 100)(44, "button", 138);
    \u0275\u0275listener("click", function AgentManagementComponent_div_27_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationForm());
    });
    \u0275\u0275text(45, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 139);
    \u0275\u0275listener("click", function AgentManagementComponent_div_27_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveLocation());
    });
    \u0275\u0275text(47, "Save");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingLocationId != null ? "Edit Location" : "Add New Location");
    \u0275\u0275advance(5);
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
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275listener("click", function AgentManagementComponent_div_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_div_11_tr_19_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_div_11_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 119)(1, "td", 120);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 121);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 121);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 121);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 121);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 117);
    \u0275\u0275template(12, AgentManagementComponent_div_29_div_11_tr_19_span_12_Template, 2, 0, "span", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 117)(14, "div", 45)(15, "button", 141);
    \u0275\u0275listener("click", function AgentManagementComponent_div_29_div_11_tr_19_Template_button_click_15_listener() {
      const u_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openUserForm(u_r31));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 4);
    \u0275\u0275element(17, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 130);
    \u0275\u0275listener("click", function AgentManagementComponent_div_29_div_11_tr_19_Template_button_click_18_listener() {
      const u_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteUser(u_r31.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 4);
    \u0275\u0275element(20, "path", 55);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const u_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r31.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r31.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r31.userName || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r31.phone || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r31.role || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", u_r31.isDefault);
  }
}
function AgentManagementComponent_div_29_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 27)(2, "thead", 116)(3, "tr")(4, "th", 117);
    \u0275\u0275text(5, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 117);
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 117);
    \u0275\u0275text(9, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 117);
    \u0275\u0275text(11, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 117);
    \u0275\u0275text(13, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 117);
    \u0275\u0275text(15, "Default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 117);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 30);
    \u0275\u0275template(19, AgentManagementComponent_div_29_div_11_tr_19_Template, 21, 6, "tr", 118);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.userLocation.users);
  }
}
function AgentManagementComponent_div_29_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275text(1, 'No users yet. Click "Add User" to add one.');
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 111)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AgentManagementComponent_div_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 112)(9, "button", 113);
    \u0275\u0275listener("click", function AgentManagementComponent_div_29_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUserForm(null));
    });
    \u0275\u0275text(10, "+ Add User");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AgentManagementComponent_div_29_div_11_Template, 20, 1, "div", 114)(12, AgentManagementComponent_div_29_div_12_Template, 2, 0, "div", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Users \u2014 ", ctx_r1.userLocation.locationName, "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.userLocation.users.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.userLocation.users.length);
  }
}
function AgentManagementComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275listener("click", function AgentManagementComponent_div_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_31_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
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
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 72)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AgentManagementComponent_div_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 136);
    \u0275\u0275template(9, AgentManagementComponent_div_31_div_9_Template, 2, 1, "div", 86);
    \u0275\u0275elementStart(10, "div", 93)(11, "div")(12, "label", 94);
    \u0275\u0275text(13, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userFullName, $event) || (ctx_r1.userFullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 94);
    \u0275\u0275text(17, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userEmail, $event) || (ctx_r1.userEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 94);
    \u0275\u0275text(21, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userUserName, $event) || (ctx_r1.userUserName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 94);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userPassword, $event) || (ctx_r1.userPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "label", 94);
    \u0275\u0275text(29, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userPhone, $event) || (ctx_r1.userPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "label", 94);
    \u0275\u0275text(33, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userRole, $event) || (ctx_r1.userRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(35, "option", 146);
    \u0275\u0275text(36, "Operator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 147);
    \u0275\u0275text(38, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 148);
    \u0275\u0275text(40, "Cashier");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "label", 149)(42, "input", 150);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_31_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userIsDefault, $event) || (ctx_r1.userIsDefault = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 151);
    \u0275\u0275text(44, "Default User");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 100)(46, "button", 138);
    \u0275\u0275listener("click", function AgentManagementComponent_div_31_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserForm());
    });
    \u0275\u0275text(47, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 139);
    \u0275\u0275listener("click", function AgentManagementComponent_div_31_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275text(49, "Save");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingUserId != null ? "Edit User" : "Add User");
    \u0275\u0275advance(5);
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
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userIsDefault);
  }
}
function AgentManagementComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function AgentManagementComponent_div_32_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_33_div_11_tr_19__svg_path_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 131);
  }
}
function AgentManagementComponent_div_33_div_11_tr_19__svg_path_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 132);
  }
}
function AgentManagementComponent_div_33_div_11_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 119)(1, "td", 120);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 117)(4, "span", 122);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 121);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 121);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 117)(11, "span", 122);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 117)(14, "span", 42);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 117)(17, "div", 45)(18, "button", 152);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_div_11_tr_19_Template_button_click_18_listener() {
      const b_r37 = \u0275\u0275restoreView(_r36).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBankBranchManagement(b_r37));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 4);
    \u0275\u0275element(20, "path", 153);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 125);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_div_11_tr_19_Template_button_click_21_listener() {
      const b_r37 = \u0275\u0275restoreView(_r36).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBankForm(b_r37));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 4);
    \u0275\u0275element(23, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 126);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_div_11_tr_19_Template_button_click_24_listener() {
      const b_r37 = \u0275\u0275restoreView(_r36).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleBank(b_r37.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 127);
    \u0275\u0275template(26, AgentManagementComponent_div_33_div_11_tr_19__svg_path_26_Template, 1, 0, "path", 128)(27, AgentManagementComponent_div_33_div_11_tr_19__svg_path_27_Template, 1, 0, "path", 129);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "button", 130);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_div_11_tr_19_Template_button_click_28_listener() {
      const b_r37 = \u0275\u0275restoreView(_r36).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteBank(b_r37.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 4);
    \u0275\u0275element(30, "path", 55);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const b_r37 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r37.bankName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r37.paymentMethodName || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r37.bankCode || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r37.swiftCode || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r37.branches.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", b_r37.isActive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r37.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(9);
    \u0275\u0275property("title", b_r37.isActive ? "Deactivate" : "Activate")("ngClass", b_r37.isActive ? "text-green-600" : "text-surface-400");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", b_r37.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !b_r37.isActive);
  }
}
function AgentManagementComponent_div_33_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 27)(2, "thead", 116)(3, "tr")(4, "th", 117);
    \u0275\u0275text(5, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 117);
    \u0275\u0275text(7, "Payment Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 117);
    \u0275\u0275text(9, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 117);
    \u0275\u0275text(11, "SWIFT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 117);
    \u0275\u0275text(13, "Branches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 117);
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 117);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 30);
    \u0275\u0275template(19, AgentManagementComponent_div_33_div_11_tr_19_Template, 31, 11, "tr", 118);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.agentBanks);
  }
}
function AgentManagementComponent_div_33_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275text(1, "No banks configured yet.");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 111)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 112)(9, "button", 113);
    \u0275\u0275listener("click", function AgentManagementComponent_div_33_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBankForm(null));
    });
    \u0275\u0275text(10, "+ Add Bank");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AgentManagementComponent_div_33_div_11_Template, 20, 1, "div", 114)(12, AgentManagementComponent_div_33_div_12_Template, 2, 0, "div", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Banks \u2014 ", ctx_r1.bankAgent == null ? null : ctx_r1.bankAgent.businessName, "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.agentBanks.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.agentBanks.length);
  }
}
function AgentManagementComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275listener("click", function AgentManagementComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_35_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.bankFormError);
  }
}
function AgentManagementComponent_div_35_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 154);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r40 = ctx.$implicit;
    \u0275\u0275property("ngValue", pm_r40.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r40.name);
  }
}
function AgentManagementComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 72)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AgentManagementComponent_div_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 136);
    \u0275\u0275template(9, AgentManagementComponent_div_35_div_9_Template, 2, 1, "div", 86);
    \u0275\u0275elementStart(10, "div", 93)(11, "div")(12, "label", 94);
    \u0275\u0275text(13, "Bank Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankName, $event) || (ctx_r1.bankName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 94);
    \u0275\u0275text(17, "Payment Mode *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankPaymentMethodId, $event) || (ctx_r1.bankPaymentMethodId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 154);
    \u0275\u0275text(20, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AgentManagementComponent_div_35_option_21_Template, 2, 2, "option", 155);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "label", 94);
    \u0275\u0275text(24, "Bank Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankCode, $event) || (ctx_r1.bankCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "label", 94);
    \u0275\u0275text(28, "SWIFT Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankSwift, $event) || (ctx_r1.bankSwift = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "label", 94);
    \u0275\u0275text(32, "Routing Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankRouting, $event) || (ctx_r1.bankRouting = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "label", 94);
    \u0275\u0275text(36, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankCountry, $event) || (ctx_r1.bankCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "label", 94);
    \u0275\u0275text(40, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankCity, $event) || (ctx_r1.bankCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 95)(43, "label", 94);
    \u0275\u0275text(44, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankAddress, $event) || (ctx_r1.bankAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div")(47, "label", 94);
    \u0275\u0275text(48, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankPhone, $event) || (ctx_r1.bankPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "label", 94);
    \u0275\u0275text(52, "Contact Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankEmail, $event) || (ctx_r1.bankEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 95)(55, "label", 94);
    \u0275\u0275text(56, "Additional Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "textarea", 156);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_35_Template_textarea_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankAdditionalInfo, $event) || (ctx_r1.bankAdditionalInfo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 100)(59, "button", 138);
    \u0275\u0275listener("click", function AgentManagementComponent_div_35_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankForm());
    });
    \u0275\u0275text(60, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 139);
    \u0275\u0275listener("click", function AgentManagementComponent_div_35_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveBank());
    });
    \u0275\u0275text(62, "Save");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingBankId != null ? "Edit Bank" : "Add New Bank");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.bankFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankPaymentMethodId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
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
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275listener("click", function AgentManagementComponent_div_36_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_37_div_11_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 119)(1, "td", 120);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 121);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 121);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 121);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 121);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 117)(12, "div", 45)(13, "button", 141);
    \u0275\u0275listener("click", function AgentManagementComponent_div_37_div_11_tr_17_Template_button_click_13_listener() {
      const br_r44 = \u0275\u0275restoreView(_r43).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBankBranchForm(br_r44));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 4);
    \u0275\u0275element(15, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "button", 130);
    \u0275\u0275listener("click", function AgentManagementComponent_div_37_div_11_tr_17_Template_button_click_16_listener() {
      const br_r44 = \u0275\u0275restoreView(_r43).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteBankBranch(br_r44.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 4);
    \u0275\u0275element(18, "path", 55);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const br_r44 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(br_r44.branchName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(br_r44.branchCode || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(br_r44.swiftCode || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(br_r44.address || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(br_r44.contactPhone || "-");
  }
}
function AgentManagementComponent_div_37_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 27)(2, "thead", 116)(3, "tr")(4, "th", 117);
    \u0275\u0275text(5, "Branch Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 117);
    \u0275\u0275text(7, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 117);
    \u0275\u0275text(9, "SWIFT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 117);
    \u0275\u0275text(11, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 117);
    \u0275\u0275text(13, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 117);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 30);
    \u0275\u0275template(17, AgentManagementComponent_div_37_div_11_tr_17_Template, 19, 5, "tr", 118);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.bankBranchBank.branches);
  }
}
function AgentManagementComponent_div_37_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275text(1, "No branches yet.");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 157)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AgentManagementComponent_div_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 112)(9, "button", 113);
    \u0275\u0275listener("click", function AgentManagementComponent_div_37_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBankBranchForm(null));
    });
    \u0275\u0275text(10, "+ Add Branch");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AgentManagementComponent_div_37_div_11_Template, 18, 1, "div", 114)(12, AgentManagementComponent_div_37_div_12_Template, 2, 0, "div", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Branches \u2014 ", ctx_r1.bankBranchBank.bankName, "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.bankBranchBank.branches.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.bankBranchBank.branches.length);
  }
}
function AgentManagementComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275listener("click", function AgentManagementComponent_div_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_39_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
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
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 72)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function AgentManagementComponent_div_39_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 136);
    \u0275\u0275template(9, AgentManagementComponent_div_39_div_9_Template, 2, 1, "div", 86);
    \u0275\u0275elementStart(10, "div", 93)(11, "div")(12, "label", 94);
    \u0275\u0275text(13, "Branch Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_39_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbName, $event) || (ctx_r1.bbName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 94);
    \u0275\u0275text(17, "Branch Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_39_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbCode, $event) || (ctx_r1.bbCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 94);
    \u0275\u0275text(21, "SWIFT Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_39_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbSwift, $event) || (ctx_r1.bbSwift = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 94);
    \u0275\u0275text(25, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_39_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbPhone, $event) || (ctx_r1.bbPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 95)(28, "label", 94);
    \u0275\u0275text(29, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_39_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbAddress, $event) || (ctx_r1.bbAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 100)(32, "button", 138);
    \u0275\u0275listener("click", function AgentManagementComponent_div_39_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchForm());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 139);
    \u0275\u0275listener("click", function AgentManagementComponent_div_39_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveBankBranch());
    });
    \u0275\u0275text(35, "Save");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingBankBranchId != null ? "Edit Branch" : "Add Branch");
    \u0275\u0275advance(5);
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
    this.Math = Math;
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentManagementComponent, selectors: [["app-agent-management"]], decls: 40, vars: 24, consts: [[1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4", "mb-6"], [1, "text-xl", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "flex", "flex-wrap", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-2", "text-sm", "font-medium", "border", "border-surface-300", "dark:border-surface-600", "rounded-lg", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-800", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "text-sm", "font-semibold", "bg-brand-600", "hover:bg-brand-700", "text-white", "rounded-lg", "shadow-sm", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm", 4, "ngIf"], ["class", "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], ["class", "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], ["class", "fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "bg-white", "dark:bg-surface-800", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "shadow-sm"], [1, "p-4", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "relative", "max-w-sm"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"], ["type", "text", "placeholder", "Search agents...", 1, "w-full", "pl-9", "pr-4", "py-2", "text-sm", "bg-surface-50", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", 3, "ngModelChange", "ngModel"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "text-xs", "uppercase", "tracking-wider", "text-surface-500", "dark:text-surface-400", "bg-surface-50", "dark:bg-surface-900/50", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "px-4", "py-3", "font-semibold"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "px-4", "py-3", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-1"], [1, "px-2", "py-1", "text-xs", "rounded", "border", "border-surface-200", "dark:border-surface-700", "disabled:opacity-40", "hover:bg-surface-50", "dark:hover:bg-surface-800", 3, "click", "disabled"], [1, "px-3", "py-1", "text-xs", "font-medium", "text-surface-700", "dark:text-surface-300"], ["class", "flex items-center justify-center py-12 text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-800/50", "transition-colors"], [1, "px-4", "py-3", "font-medium", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-3", "text-surface-600", "dark:text-surface-300"], [1, "px-4", "py-3"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "text-xs", "font-medium", "rounded-full", 3, "ngClass"], [1, "flex", "items-center", "gap-1.5"], [4, "ngIf"], [1, "flex", "items-center", "gap-0.5"], ["title", "View Details", 1, "p-1.5", "rounded-lg", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["title", "Locations", "class", "p-1.5 rounded-lg text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors", 3, "click", 4, "ngIf"], ["title", "Banks", "class", "p-1.5 rounded-lg text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors", 3, "click", 4, "ngIf"], ["title", "Block", "class", "p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors", 3, "click", 4, "ngIf"], ["title", "Edit", 1, "p-1.5", "rounded-lg", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m16.862 4.487 1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"], ["title", "Delete", 1, "p-1.5", "rounded-lg", "text-red-500", "hover:bg-red-50", "dark:hover:bg-red-900/20", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"], ["title", "Unblock", 1, "p-1", "rounded", "text-green-600", "hover:bg-green-50", "dark:hover:bg-green-900/20", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"], ["title", "Approve", 1, "p-1", "rounded", "text-green-600", "hover:bg-green-50", "dark:hover:bg-green-900/20", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["title", "Reject", 1, "p-1", "rounded", "text-red-600", "hover:bg-red-50", "dark:hover:bg-red-900/20", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["title", "Locations", 1, "p-1.5", "rounded-lg", "text-purple-600", "hover:bg-purple-50", "dark:hover:bg-purple-900/20", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"], ["title", "Banks", 1, "p-1.5", "rounded-lg", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"], ["title", "Block", 1, "p-1.5", "rounded-lg", "text-red-500", "hover:bg-red-50", "dark:hover:bg-red-900/20", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"], [1, "flex", "items-center", "justify-center", "py-12", "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "fixed", "inset-0", "z-50", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-lg", "pointer-events-auto", "max-h-[90vh]", "overflow-y-auto"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "text-base", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "p-1", "rounded-lg", "hover:bg-surface-100", "dark:hover:bg-surface-700", "text-surface-400", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "grid", "grid-cols-2", "gap-x-6", "gap-y-3", "p-6", "text-sm"], [1, "block", "text-xs", "text-surface-400", "mb-0.5"], [1, "text-surface-900", "dark:text-surface-100", "font-medium"], [1, "text-surface-900", "dark:text-surface-100"], [1, "col-span-2"], [1, "text-surface-900", "dark:text-surface-100", "font-semibold"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "pointer-events-auto", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "space-y-5"], ["class", "px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg", 4, "ngIf"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "mb-1"], [1, "w-full", "px-3", "py-2", "text-sm", "bg-white", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", 3, "ngModelChange", "ngModel"], ["value", "SendingAgent"], ["value", "PayoutAgent"], [1, "p-4", "rounded-lg", "border", "border-surface-100", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-900/50", "space-y-3"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-surface-400"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-3"], [1, "block", "text-xs", "font-medium", "text-surface-500", "mb-1"], [1, "md:col-span-2"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-3"], ["type", "email", 1, "w-full", "px-3", "py-2", "text-sm", "bg-white", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-surface-100", "dark:border-surface-700"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-lg", "transition-colors", 3, "click"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "text-sm", "font-semibold", "bg-brand-600", "hover:bg-brand-700", "text-white", "rounded-lg", "shadow-sm", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["class", "animate-spin w-4 h-4", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "px-4", "py-2", "bg-red-50", "dark:bg-red-900/20", "text-red-700", "dark:text-red-400", "text-sm", "rounded-lg"], [3, "value"], ["type", "number", 1, "w-full", "px-3", "py-2", "text-sm", "bg-white", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", 3, "ngModelChange", "ngModel"], ["value", "PreFunding"], ["value", "PostFunding"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"], [1, "grid", "grid-cols-2", "gap-3", "text-sm"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-4xl", "pointer-events-auto", "max-h-[90vh]", "overflow-y-auto"], [1, "px-6", "py-3"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-2", "text-sm", "font-semibold", "bg-brand-600", "hover:bg-brand-700", "text-white", "rounded-lg", "transition-colors", 3, "click"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "px-6 py-8 text-center text-sm text-surface-400 border-t border-dashed border-surface-200 dark:border-surface-700", 4, "ngIf"], [1, "text-xs", "uppercase", "tracking-wider", "text-surface-500", "bg-surface-50", "dark:bg-surface-900/50", "border-y", "border-surface-200", "dark:border-surface-700"], [1, "px-4", "py-2.5"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-800/50", 4, "ngFor", "ngForOf"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-800/50"], [1, "px-4", "py-2.5", "font-medium", "text-surface-900", "dark:text-surface-100"], [1, "px-4", "py-2.5", "text-surface-600", "dark:text-surface-300"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "text-xs", "font-medium", "rounded-full", "bg-blue-100", "text-blue-700", "dark:bg-blue-900/30", "dark:text-blue-400"], ["title", "Manage Users", 1, "p-1.5", "rounded", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"], ["title", "Edit", 1, "p-1.5", "rounded", "text-amber-600", "hover:bg-amber-50", "dark:hover:bg-amber-900/20", 3, "click"], [1, "p-1.5", "rounded", "hover:bg-surface-100", "dark:hover:bg-surface-700", 3, "click", "title", "ngClass"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z", 4, "ngIf"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z", 4, "ngIf"], ["title", "Delete", 1, "p-1.5", "rounded", "text-red-500", "hover:bg-red-50", "dark:hover:bg-red-900/20", 3, "click"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"], ["d", "M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"], [1, "px-6", "py-8", "text-center", "text-sm", "text-surface-400", "border-t", "border-dashed", "border-surface-200", "dark:border-surface-700"], [1, "fixed", "inset-0", "z-[60]", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "inset-0", "z-[60]", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], [1, "p-6", "space-y-3"], ["placeholder", "e.g. Mon-Fri 9AM-5PM", 1, "w-full", "px-3", "py-2", "text-sm", "bg-white", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", 3, "ngModelChange", "ngModel"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "rounded-lg", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "bg-brand-600", "hover:bg-brand-700", "text-white", "rounded-lg", 3, "click"], ["class", "inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400", 4, "ngIf"], ["title", "Edit", 1, "p-1.5", "rounded", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", 3, "click"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "text-xs", "font-medium", "rounded-full", "bg-green-100", "text-green-700", "dark:bg-green-900/30", "dark:text-green-400"], [1, "fixed", "inset-0", "z-[70]", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "fixed", "inset-0", "z-[70]", "flex", "items-center", "justify-center", "p-4", "pointer-events-none"], ["type", "password", 1, "w-full", "px-3", "py-2", "text-sm", "bg-white", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", 3, "ngModelChange", "ngModel"], ["value", "Operator"], ["value", "Manager"], ["value", "Cashier"], [1, "flex", "items-center", "gap-2", "mt-2", "cursor-pointer"], ["type", "checkbox", 1, "w-4", "h-4", "rounded", "border-surface-300", "text-brand-600", "focus:ring-brand-500", 3, "ngModelChange", "ngModel"], [1, "text-sm", "text-surface-700", "dark:text-surface-300"], ["title", "Manage Branches", 1, "p-1.5", "rounded", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["rows", "2", 1, "w-full", "px-3", "py-2", "text-sm", "bg-white", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", 3, "ngModelChange", "ngModel"], [1, "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-xl", "w-full", "max-w-3xl", "pointer-events-auto", "max-h-[90vh]", "overflow-y-auto"]], template: function AgentManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Agent Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function AgentManagementComponent_Template_button_click_4_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(5, "svg", 4);
        \u0275\u0275element(6, "path", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function AgentManagementComponent_Template_button_click_8_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 4);
        \u0275\u0275element(10, "path", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function AgentManagementComponent_Template_button_click_12_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 4);
        \u0275\u0275element(14, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " New Agent ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, AgentManagementComponent_div_16_Template, 4, 0, "div", 8)(17, AgentManagementComponent_div_17_Template, 37, 11, "div", 9)(18, AgentManagementComponent_div_18_Template, 1, 0, "div", 10)(19, AgentManagementComponent_div_19_Template, 66, 21, "div", 11)(20, AgentManagementComponent_div_20_Template, 1, 0, "div", 10)(21, AgentManagementComponent_div_21_Template, 77, 16, "div", 11)(22, AgentManagementComponent_div_22_Template, 1, 0, "div", 10)(23, AgentManagementComponent_div_23_Template, 73, 15, "div", 11)(24, AgentManagementComponent_div_24_Template, 1, 0, "div", 10)(25, AgentManagementComponent_div_25_Template, 13, 3, "div", 11)(26, AgentManagementComponent_div_26_Template, 1, 0, "div", 12)(27, AgentManagementComponent_div_27_Template, 48, 10, "div", 13)(28, AgentManagementComponent_div_28_Template, 1, 0, "div", 12)(29, AgentManagementComponent_div_29_Template, 13, 3, "div", 13)(30, AgentManagementComponent_div_30_Template, 1, 0, "div", 14)(31, AgentManagementComponent_div_31_Template, 50, 10, "div", 15)(32, AgentManagementComponent_div_32_Template, 1, 0, "div", 10)(33, AgentManagementComponent_div_33_Template, 13, 3, "div", 11)(34, AgentManagementComponent_div_34_Template, 1, 0, "div", 12)(35, AgentManagementComponent_div_35_Template, 63, 15, "div", 13)(36, AgentManagementComponent_div_36_Template, 1, 0, "div", 12)(37, AgentManagementComponent_div_37_Template, 13, 3, "div", 13)(38, AgentManagementComponent_div_38_Template, 1, 0, "div", 14)(39, AgentManagementComponent_div_39_Template, 36, 7, "div", 15);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n/*# sourceMappingURL=agent-management.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentManagementComponent, [{
    type: Component,
    args: [{ selector: "app-agent-management", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DecimalPipe,
      DatePipe
    ], template: `<!-- Page Header -->
<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
  <h2 class="text-xl font-bold text-surface-900 dark:text-surface-100">Agent Management</h2>
  <div class="flex flex-wrap gap-2">
    <button (click)="exportData('excel')" class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium border border-surface-300 dark:border-surface-600 rounded-lg text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
      Excel
    </button>
    <button (click)="exportData('csv')" class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium border border-surface-300 dark:border-surface-600 rounded-lg text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
      CSV
    </button>
    <button (click)="openCreatePopup()" class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg shadow-sm transition-colors">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"/></svg>
      New Agent
    </button>
  </div>
</div>

<!-- Loading -->
<div *ngIf="loading" class="flex items-center justify-center py-20">
  <svg class="animate-spin h-8 w-8 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
</div>

<!-- Search + Table -->
<div *ngIf="!loading" class="bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm">
  <!-- Search -->
  <div class="p-4 border-b border-surface-100 dark:border-surface-700">
    <div class="relative max-w-sm">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
      <input type="text" placeholder="Search agents..." [(ngModel)]="searchString" (ngModelChange)="searchDebounce.next($event)" class="w-full pl-9 pr-4 py-2 text-sm bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30" />
    </div>
  </div>

  <!-- Table -->
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left">
      <thead class="text-xs uppercase tracking-wider text-surface-500 dark:text-surface-400 bg-surface-50 dark:bg-surface-900/50 border-b border-surface-200 dark:border-surface-700">
        <tr>
          <th class="px-4 py-3 font-semibold">Business Name</th>
          <th class="px-4 py-3 font-semibold">Country</th>
          <th class="px-4 py-3 font-semibold">Type</th>
          <th class="px-4 py-3 font-semibold">Status</th>
          <th class="px-4 py-3 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
        <tr *ngFor="let agent of agents" class="hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors">
          <td class="px-4 py-3 font-medium text-surface-900 dark:text-surface-100">{{ agent.businessName }}</td>
          <td class="px-4 py-3 text-surface-600 dark:text-surface-300">{{ agent.country }}</td>
          <td class="px-4 py-3">
            <span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full" [ngClass]="agent.agentType === 'SendingAgent' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'">
              {{ agent.agentType === 'SendingAgent' ? 'Sending' : 'Payout' }}
            </span>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-1.5">
              <span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full" [ngClass]="{'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400': agent.status === 'Approved','bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400': agent.status === 'Blocked' || agent.status === 'Rejected','bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400': agent.status !== 'Approved' && agent.status !== 'Blocked' && agent.status !== 'Rejected'}">{{ agent.status }}</span>
              <ng-container *ngIf="agent.status === 'Blocked'">
                <button title="Unblock" (click)="unblockAgent(agent)" class="p-1 rounded text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/></svg></button>
              </ng-container>
              <ng-container *ngIf="agent.status !== 'Approved' && agent.status !== 'Blocked' && agent.status !== 'Rejected'">
                <button title="Approve" (click)="approveAgent(agent)" class="p-1 rounded text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></button>
                <button title="Reject" (click)="rejectAgent(agent)" class="p-1 rounded text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg></button>
              </ng-container>
            </div>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-0.5">
              <button title="View Details" (click)="viewDetail(agent)" class="p-1.5 rounded-lg text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg></button>
              <button *ngIf="agent.agentType === 'SendingAgent'" title="Locations" (click)="openLocationManagement(agent)" class="p-1.5 rounded-lg text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg></button>
              <button *ngIf="agent.agentType === 'PayoutAgent'" title="Banks" (click)="openBankManagement(agent)" class="p-1.5 rounded-lg text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"/></svg></button>
              <button *ngIf="agent.status === 'Approved'" title="Block" (click)="blockAgent(agent)" class="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg></button>
              <button title="Edit" (click)="startEdit(agent)" class="p-1.5 rounded-lg text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"/></svg></button>
              <button title="Delete" (click)="deleteAgent(agent)" class="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <div class="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-surface-100 dark:border-surface-700">
    <span class="text-xs text-surface-500 dark:text-surface-400">Showing {{ pageIndex * pageSize + 1 }}\u2013{{ (pageIndex + 1) * pageSize > totalCount ? totalCount : (pageIndex + 1) * pageSize }} of {{ totalCount }}</span>
    <div class="flex items-center gap-1">
      <button [disabled]="pageIndex === 0" (click)="onPageChange({pageIndex: 0, pageSize: pageSize})" class="px-2 py-1 text-xs rounded border border-surface-200 dark:border-surface-700 disabled:opacity-40 hover:bg-surface-50 dark:hover:bg-surface-800">First</button>
      <button [disabled]="pageIndex === 0" (click)="onPageChange({pageIndex: pageIndex - 1, pageSize: pageSize})" class="px-2 py-1 text-xs rounded border border-surface-200 dark:border-surface-700 disabled:opacity-40 hover:bg-surface-50 dark:hover:bg-surface-800">Prev</button>
      <span class="px-3 py-1 text-xs font-medium text-surface-700 dark:text-surface-300">{{ pageIndex + 1 }}</span>
      <button [disabled]="(pageIndex + 1) * pageSize >= totalCount" (click)="onPageChange({pageIndex: pageIndex + 1, pageSize: pageSize})" class="px-2 py-1 text-xs rounded border border-surface-200 dark:border-surface-700 disabled:opacity-40 hover:bg-surface-50 dark:hover:bg-surface-800">Next</button>
      <button [disabled]="(pageIndex + 1) * pageSize >= totalCount" (click)="onPageChange({pageIndex: Math.ceil(totalCount / pageSize) - 1, pageSize: pageSize})" class="px-2 py-1 text-xs rounded border border-surface-200 dark:border-surface-700 disabled:opacity-40 hover:bg-surface-50 dark:hover:bg-surface-800">Last</button>
    </div>
  </div>

  <div *ngIf="!agents.length && !loading" class="flex items-center justify-center py-12 text-surface-400 dark:text-surface-500 text-sm">
    No agents found.
  </div>
</div>

<!-- ============================================================ -->
<!-- Agent Detail Popup                                           -->
<!-- ============================================================ -->
<div *ngIf="showDetail && detailAgent" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeDetail()"></div>
<div *ngIf="showDetail && detailAgent" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-lg pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Agent Details</h3>
      <button (click)="closeDetail()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="grid grid-cols-2 gap-x-6 gap-y-3 p-6 text-sm">
      <div><span class="block text-xs text-surface-400 mb-0.5">Business Name</span><span class="text-surface-900 dark:text-surface-100 font-medium">{{ detailAgent.businessName }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Contact Person</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.fullName }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Email</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.email }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Phone</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.phoneNumber }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Agent Type</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.agentType === 'SendingAgent' ? 'Sending Agent' : 'Payout Agent' }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Country</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.country }} - {{ detailAgent.city }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Currency</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.currency || getCurrencyForCountry(detailAgent.country) }}</span></div>
      <ng-container *ngIf="detailAgent.agentType === 'SendingAgent'">
        <div><span class="block text-xs text-surface-400 mb-0.5">Funding Type</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.fundingType }}</span></div>
        <div><span class="block text-xs text-surface-400 mb-0.5">Credit Limit</span><span class="text-surface-900 dark:text-surface-100 font-semibold">{{ detailAgent.creditLimit | number:'1.2-2' }}</span></div>
        <div><span class="block text-xs text-surface-400 mb-0.5">Current Balance</span><span class="text-surface-900 dark:text-surface-100 font-semibold">{{ detailAgent.currentBalance | number:'1.2-2' }}</span></div>
      </ng-container>
      <div><span class="block text-xs text-surface-400 mb-0.5">License Number</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.licenseNumber || '-' }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Status</span>
        <span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full" [ngClass]="{'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400': detailAgent.status === 'Approved','bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400': detailAgent.status === 'Blocked','bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400': detailAgent.status !== 'Approved' && detailAgent.status !== 'Blocked'}">{{ detailAgent.status }}</span>
      </div>
      <div class="col-span-2"><span class="block text-xs text-surface-400 mb-0.5">Address</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.address || '-' }}</span></div>
      <div><span class="block text-xs text-surface-400 mb-0.5">Created</span><span class="text-surface-900 dark:text-surface-100">{{ detailAgent.createdAt | date:'dd/MM/yyyy' }}</span></div>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Create Agent Popup                                           -->
<!-- ============================================================ -->
<div *ngIf="showCreatePopup" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeCreatePopup()"></div>
<div *ngIf="showCreatePopup" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-2xl pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Create New Agent</h3>
      <button (click)="closeCreatePopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-5">
      <div *ngIf="createError" class="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ createError }}</div>

      <!-- Agent Type -->
      <div>
        <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Agent Type</label>
        <select [(ngModel)]="newAgent.agentType" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30">
          <option value="SendingAgent">Sending Agent</option>
          <option value="PayoutAgent">Payout Agent</option>
        </select>
      </div>

      <!-- Company Info -->
      <div class="p-4 rounded-lg border border-surface-100 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-surface-400">Company Information</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div><label class="block text-xs font-medium text-surface-500 mb-1">Business Name *</label><input [(ngModel)]="newAgent.businessName" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
          <div><label class="block text-xs font-medium text-surface-500 mb-1">License Number</label><input [(ngModel)]="newAgent.licenseNumber" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
          <div class="md:col-span-2"><label class="block text-xs font-medium text-surface-500 mb-1">Address</label><input [(ngModel)]="newAgent.address" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        </div>
      </div>

      <!-- Authorized Person -->
      <div class="p-4 rounded-lg border border-surface-100 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-surface-400">Authorized Person</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div><label class="block text-xs font-medium text-surface-500 mb-1">Full Name *</label><input [(ngModel)]="newAgent.fullName" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
          <div><label class="block text-xs font-medium text-surface-500 mb-1">Email *</label><input type="email" [(ngModel)]="newAgent.email" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
          <div><label class="block text-xs font-medium text-surface-500 mb-1">Phone *</label><input [(ngModel)]="newAgent.phone" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        </div>
      </div>

      <!-- Accounting Details -->
      <div class="p-4 rounded-lg border border-surface-100 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-surface-400">Accounting Details</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div><label class="block text-xs font-medium text-surface-500 mb-1">Country *</label>
            <select [(ngModel)]="newAgent.country" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"><option value="">Select</option><option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option></select></div>
          <div><label class="block text-xs font-medium text-surface-500 mb-1">City *</label><input [(ngModel)]="newAgent.city" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
          <div><label class="block text-xs font-medium text-surface-500 mb-1">Currency *</label>
            <select [(ngModel)]="newAgent.currency" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"><option *ngFor="let c of currencies" [value]="c">{{ c }}</option></select></div>
          <ng-container *ngIf="newAgent.agentType === 'SendingAgent'">
            <div><label class="block text-xs font-medium text-surface-500 mb-1">Credit Limit *</label><input type="number" [(ngModel)]="newAgent.creditLimit" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
            <div><label class="block text-xs font-medium text-surface-500 mb-1">Funding Type *</label>
              <select [(ngModel)]="newAgent.fundingType" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"><option value="PreFunding">PreFunding</option><option value="PostFunding">PostFunding</option></select></div>
          </ng-container>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeCreatePopup()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition-colors">Cancel</button>
      <button (click)="createAgent()" [disabled]="creating" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg shadow-sm transition-colors disabled:opacity-50">
        <svg *ngIf="creating" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
        Create Agent
      </button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Edit Agent Popup                                             -->
<!-- ============================================================ -->
<div *ngIf="showEditPopup" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeEditPopup()"></div>
<div *ngIf="showEditPopup" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-2xl pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Edit Agent</h3>
      <button (click)="closeEditPopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-5">
      <div *ngIf="editError" class="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ editError }}</div>

      <!-- Company Info -->
      <div class="p-4 rounded-lg border border-surface-100 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-surface-400">Company Information</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div><label class="block text-xs font-medium text-surface-500 mb-1">Business Name *</label><input [(ngModel)]="editAgent.businessName" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
          <div><label class="block text-xs font-medium text-surface-500 mb-1">License Number</label><input [(ngModel)]="editAgent.licenseNumber" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
          <div class="md:col-span-2"><label class="block text-xs font-medium text-surface-500 mb-1">Address</label><input [(ngModel)]="editAgent.address" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        </div>
      </div>

      <!-- Authorized Person (read-only) -->
      <div class="p-4 rounded-lg border border-surface-100 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-surface-400">Authorized Person</h4>
        <div class="grid grid-cols-2 gap-3 text-sm">
          <div><span class="block text-xs text-surface-400 mb-0.5">Full Name</span><span class="text-surface-900 dark:text-surface-100">{{ editAgentFullName }}</span></div>
          <div><span class="block text-xs text-surface-400 mb-0.5">Email</span><span class="text-surface-900 dark:text-surface-100">{{ editAgentEmail }}</span></div>
        </div>
      </div>

      <!-- Accounting Details -->
      <div class="p-4 rounded-lg border border-surface-100 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-surface-400">Accounting Details</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div><label class="block text-xs font-medium text-surface-500 mb-1">Country *</label>
            <select [(ngModel)]="editAgent.country" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"><option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option></select></div>
          <div><label class="block text-xs font-medium text-surface-500 mb-1">City *</label><input [(ngModel)]="editAgent.city" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
          <div><label class="block text-xs font-medium text-surface-500 mb-1">Currency *</label>
            <select [(ngModel)]="editAgent.currency" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"><option *ngFor="let c of currencies" [value]="c">{{ c }}</option></select></div>
          <ng-container *ngIf="editAgent.agentType === 'SendingAgent'">
            <div><label class="block text-xs font-medium text-surface-500 mb-1">Credit Limit *</label><input type="number" [(ngModel)]="editAgent.creditLimit" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
            <div><label class="block text-xs font-medium text-surface-500 mb-1">Funding Type *</label>
              <select [(ngModel)]="editAgent.fundingType" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"><option value="PreFunding">PreFunding</option><option value="PostFunding">PostFunding</option></select></div>
          </ng-container>
          <div><label class="block text-xs font-medium text-surface-500 mb-1">Agent Type *</label>
            <select [(ngModel)]="editAgent.agentType" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"><option value="SendingAgent">Sending Agent</option><option value="PayoutAgent">Payout Agent</option></select></div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeEditPopup()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition-colors">Cancel</button>
      <button (click)="updateAgent()" [disabled]="updating" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg shadow-sm transition-colors disabled:opacity-50">
        <svg *ngIf="updating" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
        Save Changes
      </button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Location Management Popup                                    -->
<!-- ============================================================ -->
<div *ngIf="showLocationPopup" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeLocationPopup()"></div>
<div *ngIf="showLocationPopup" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-4xl pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Locations &mdash; {{ locationAgent?.businessName }}</h3>
      <button (click)="closeLocationPopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="px-6 py-3"><button (click)="openLocationForm(null)" class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-colors">+ Add Location</button></div>
    <div *ngIf="agentLocations.length" class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="text-xs uppercase tracking-wider text-surface-500 bg-surface-50 dark:bg-surface-900/50 border-y border-surface-200 dark:border-surface-700">
          <tr><th class="px-4 py-2.5">Location</th><th class="px-4 py-2.5">Code</th><th class="px-4 py-2.5">Country / City</th><th class="px-4 py-2.5">Users</th><th class="px-4 py-2.5">Status</th><th class="px-4 py-2.5">Actions</th></tr>
        </thead>
        <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
          <tr *ngFor="let loc of agentLocations" class="hover:bg-surface-50 dark:hover:bg-surface-800/50">
            <td class="px-4 py-2.5 font-medium text-surface-900 dark:text-surface-100">{{ loc.locationName }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ loc.locationCode || '-' }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ loc.country || '-' }} / {{ loc.city || '-' }}</td>
            <td class="px-4 py-2.5"><span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ loc.users.length }}</span></td>
            <td class="px-4 py-2.5"><span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full" [ngClass]="loc.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">{{ loc.isActive ? 'Active' : 'Inactive' }}</span></td>
            <td class="px-4 py-2.5">
              <div class="flex items-center gap-0.5">
                <button title="Manage Users" (click)="openUserManagement(loc)" class="p-1.5 rounded text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg></button>
                <button title="Edit" (click)="openLocationForm(loc)" class="p-1.5 rounded text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"/></svg></button>
                <button [title]="loc.isActive ? 'Deactivate' : 'Activate'" (click)="toggleLocation(loc.id)" class="p-1.5 rounded hover:bg-surface-100 dark:hover:bg-surface-700" [ngClass]="loc.isActive ? 'text-green-600' : 'text-surface-400'"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path *ngIf="loc.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/><path *ngIf="!loc.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"/></svg></button>
                <button title="Delete" (click)="deleteLocation(loc.id)" class="p-1.5 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div *ngIf="!agentLocations.length" class="px-6 py-8 text-center text-sm text-surface-400 border-t border-dashed border-surface-200 dark:border-surface-700">No locations configured yet.</div>
  </div>
</div>

<!-- Location Add/Edit Form -->
<div *ngIf="showLocationForm" class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" (click)="closeLocationForm()"></div>
<div *ngIf="showLocationForm" class="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-lg pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">{{ editingLocationId != null ? 'Edit Location' : 'Add New Location' }}</h3>
      <button (click)="closeLocationForm()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-3">
      <div *ngIf="locationFormError" class="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ locationFormError }}</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Location Name *</label><input [(ngModel)]="locName" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Location Code</label><input [(ngModel)]="locCode" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Country</label><input [(ngModel)]="locCountry" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">City</label><input [(ngModel)]="locCity" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div class="md:col-span-2"><label class="block text-xs font-medium text-surface-500 mb-1">Address</label><input [(ngModel)]="locAddress" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Contact Phone</label><input [(ngModel)]="locPhone" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Contact Email</label><input [(ngModel)]="locEmail" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div class="md:col-span-2"><label class="block text-xs font-medium text-surface-500 mb-1">Operating Hours</label><input placeholder="e.g. Mon-Fri 9AM-5PM" [(ngModel)]="locHours" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeLocationForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg">Cancel</button>
      <button (click)="saveLocation()" class="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg">Save</button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- User Management Popup                                        -->
<!-- ============================================================ -->
<div *ngIf="showUserPopup && userLocation" class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" (click)="closeUserPopup()"></div>
<div *ngIf="showUserPopup && userLocation" class="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-4xl pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Users &mdash; {{ userLocation.locationName }}</h3>
      <button (click)="closeUserPopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="px-6 py-3"><button (click)="openUserForm(null)" class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-colors">+ Add User</button></div>
    <div *ngIf="userLocation.users.length" class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="text-xs uppercase tracking-wider text-surface-500 bg-surface-50 dark:bg-surface-900/50 border-y border-surface-200 dark:border-surface-700">
          <tr><th class="px-4 py-2.5">Full Name</th><th class="px-4 py-2.5">Email</th><th class="px-4 py-2.5">Username</th><th class="px-4 py-2.5">Phone</th><th class="px-4 py-2.5">Role</th><th class="px-4 py-2.5">Default</th><th class="px-4 py-2.5">Actions</th></tr>
        </thead>
        <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
          <tr *ngFor="let u of userLocation.users" class="hover:bg-surface-50 dark:hover:bg-surface-800/50">
            <td class="px-4 py-2.5 font-medium text-surface-900 dark:text-surface-100">{{ u.fullName }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ u.email }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ u.userName || '-' }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ u.phone || '-' }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ u.role || '-' }}</td>
            <td class="px-4 py-2.5"><span *ngIf="u.isDefault" class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Default</span></td>
            <td class="px-4 py-2.5">
              <div class="flex items-center gap-0.5">
                <button title="Edit" (click)="openUserForm(u)" class="p-1.5 rounded text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"/></svg></button>
                <button title="Delete" (click)="deleteUser(u.id)" class="p-1.5 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div *ngIf="!userLocation.users.length" class="px-6 py-8 text-center text-sm text-surface-400 border-t border-dashed border-surface-200 dark:border-surface-700">No users yet. Click "Add User" to add one.</div>
  </div>
</div>

<!-- User Add/Edit Form -->
<div *ngIf="showUserForm" class="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm" (click)="closeUserForm()"></div>
<div *ngIf="showUserForm" class="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-lg pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">{{ editingUserId != null ? 'Edit User' : 'Add User' }}</h3>
      <button (click)="closeUserForm()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-3">
      <div *ngIf="userFormError" class="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ userFormError }}</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Full Name *</label><input [(ngModel)]="userFullName" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Email *</label><input [(ngModel)]="userEmail" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Username</label><input [(ngModel)]="userUserName" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">{{ editingUserId != null ? 'New Password (leave blank to keep)' : 'Password *' }}</label><input type="password" [(ngModel)]="userPassword" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Phone</label><input [(ngModel)]="userPhone" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Role</label>
          <select [(ngModel)]="userRole" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"><option value="Operator">Operator</option><option value="Manager">Manager</option><option value="Cashier">Cashier</option></select></div>
      </div>
      <label class="flex items-center gap-2 mt-2 cursor-pointer"><input type="checkbox" [(ngModel)]="userIsDefault" class="w-4 h-4 rounded border-surface-300 text-brand-600 focus:ring-brand-500" /><span class="text-sm text-surface-700 dark:text-surface-300">Default User</span></label>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeUserForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg">Cancel</button>
      <button (click)="saveUser()" class="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg">Save</button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Bank Management Popup                                        -->
<!-- ============================================================ -->
<div *ngIf="showBankPopup" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" (click)="closeBankPopup()"></div>
<div *ngIf="showBankPopup" class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-4xl pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Banks &mdash; {{ bankAgent?.businessName }}</h3>
      <button (click)="closeBankPopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="px-6 py-3"><button (click)="openBankForm(null)" class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-colors">+ Add Bank</button></div>
    <div *ngIf="agentBanks.length" class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="text-xs uppercase tracking-wider text-surface-500 bg-surface-50 dark:bg-surface-900/50 border-y border-surface-200 dark:border-surface-700">
          <tr><th class="px-4 py-2.5">Bank Name</th><th class="px-4 py-2.5">Payment Mode</th><th class="px-4 py-2.5">Code</th><th class="px-4 py-2.5">SWIFT</th><th class="px-4 py-2.5">Branches</th><th class="px-4 py-2.5">Status</th><th class="px-4 py-2.5">Actions</th></tr>
        </thead>
        <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
          <tr *ngFor="let b of agentBanks" class="hover:bg-surface-50 dark:hover:bg-surface-800/50">
            <td class="px-4 py-2.5 font-medium text-surface-900 dark:text-surface-100">{{ b.bankName }}</td>
            <td class="px-4 py-2.5"><span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ b.paymentMethodName || '-' }}</span></td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ b.bankCode || '-' }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ b.swiftCode || '-' }}</td>
            <td class="px-4 py-2.5"><span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ b.branches.length }}</span></td>
            <td class="px-4 py-2.5"><span class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full" [ngClass]="b.isActive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400'">{{ b.isActive ? 'Active' : 'Inactive' }}</span></td>
            <td class="px-4 py-2.5">
              <div class="flex items-center gap-0.5">
                <button title="Manage Branches" (click)="openBankBranchManagement(b)" class="p-1.5 rounded text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/></svg></button>
                <button title="Edit" (click)="openBankForm(b)" class="p-1.5 rounded text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"/></svg></button>
                <button [title]="b.isActive ? 'Deactivate' : 'Activate'" (click)="toggleBank(b.id)" class="p-1.5 rounded hover:bg-surface-100 dark:hover:bg-surface-700" [ngClass]="b.isActive ? 'text-green-600' : 'text-surface-400'"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path *ngIf="b.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/><path *ngIf="!b.isActive" d="M17 7H7a5 5 0 000 10h10a5 5 0 000-10zM7 15a3 3 0 110-6 3 3 0 010 6z"/></svg></button>
                <button title="Delete" (click)="deleteBank(b.id)" class="p-1.5 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div *ngIf="!agentBanks.length" class="px-6 py-8 text-center text-sm text-surface-400 border-t border-dashed border-surface-200 dark:border-surface-700">No banks configured yet.</div>
  </div>
</div>

<!-- Bank Add/Edit Form -->
<div *ngIf="showBankForm" class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" (click)="closeBankForm()"></div>
<div *ngIf="showBankForm" class="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-lg pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">{{ editingBankId != null ? 'Edit Bank' : 'Add New Bank' }}</h3>
      <button (click)="closeBankForm()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-3">
      <div *ngIf="bankFormError" class="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ bankFormError }}</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Bank Name *</label><input [(ngModel)]="bankName" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Payment Mode *</label>
          <select [(ngModel)]="bankPaymentMethodId" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"><option [ngValue]="null">Select</option><option *ngFor="let pm of paymentMethods" [ngValue]="pm.id">{{ pm.name }}</option></select></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Bank Code</label><input [(ngModel)]="bankCode" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">SWIFT Code</label><input [(ngModel)]="bankSwift" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Routing Number</label><input [(ngModel)]="bankRouting" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Country</label><input [(ngModel)]="bankCountry" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">City</label><input [(ngModel)]="bankCity" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div class="md:col-span-2"><label class="block text-xs font-medium text-surface-500 mb-1">Address</label><input [(ngModel)]="bankAddress" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Contact Phone</label><input [(ngModel)]="bankPhone" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Contact Email</label><input [(ngModel)]="bankEmail" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div class="md:col-span-2"><label class="block text-xs font-medium text-surface-500 mb-1">Additional Info</label><textarea rows="2" [(ngModel)]="bankAdditionalInfo" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30"></textarea></div>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeBankForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg">Cancel</button>
      <button (click)="saveBank()" class="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg">Save</button>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Bank Branch Management Popup                                 -->
<!-- ============================================================ -->
<div *ngIf="showBankBranchPopup && bankBranchBank" class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" (click)="closeBankBranchPopup()"></div>
<div *ngIf="showBankBranchPopup && bankBranchBank" class="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-3xl pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Branches &mdash; {{ bankBranchBank.bankName }}</h3>
      <button (click)="closeBankBranchPopup()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="px-6 py-3"><button (click)="openBankBranchForm(null)" class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-colors">+ Add Branch</button></div>
    <div *ngIf="bankBranchBank.branches.length" class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="text-xs uppercase tracking-wider text-surface-500 bg-surface-50 dark:bg-surface-900/50 border-y border-surface-200 dark:border-surface-700">
          <tr><th class="px-4 py-2.5">Branch Name</th><th class="px-4 py-2.5">Code</th><th class="px-4 py-2.5">SWIFT</th><th class="px-4 py-2.5">Address</th><th class="px-4 py-2.5">Phone</th><th class="px-4 py-2.5">Actions</th></tr>
        </thead>
        <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
          <tr *ngFor="let br of bankBranchBank.branches" class="hover:bg-surface-50 dark:hover:bg-surface-800/50">
            <td class="px-4 py-2.5 font-medium text-surface-900 dark:text-surface-100">{{ br.branchName }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ br.branchCode || '-' }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ br.swiftCode || '-' }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ br.address || '-' }}</td>
            <td class="px-4 py-2.5 text-surface-600 dark:text-surface-300">{{ br.contactPhone || '-' }}</td>
            <td class="px-4 py-2.5">
              <div class="flex items-center gap-0.5">
                <button title="Edit" (click)="openBankBranchForm(br)" class="p-1.5 rounded text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"/></svg></button>
                <button title="Delete" (click)="deleteBankBranch(br.id)" class="p-1.5 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div *ngIf="!bankBranchBank.branches.length" class="px-6 py-8 text-center text-sm text-surface-400 border-t border-dashed border-surface-200 dark:border-surface-700">No branches yet.</div>
  </div>
</div>

<!-- Branch Add/Edit Form -->
<div *ngIf="showBankBranchForm" class="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm" (click)="closeBankBranchForm()"></div>
<div *ngIf="showBankBranchForm" class="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
  <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-xl w-full max-w-lg pointer-events-auto max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
      <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">{{ editingBankBranchId != null ? 'Edit Branch' : 'Add Branch' }}</h3>
      <button (click)="closeBankBranchForm()" class="p-1 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-6 space-y-3">
      <div *ngIf="bankBranchFormError" class="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg">{{ bankBranchFormError }}</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Branch Name *</label><input [(ngModel)]="bbName" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Branch Code</label><input [(ngModel)]="bbCode" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">SWIFT Code</label><input [(ngModel)]="bbSwift" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div><label class="block text-xs font-medium text-surface-500 mb-1">Contact Phone</label><input [(ngModel)]="bbPhone" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
        <div class="md:col-span-2"><label class="block text-xs font-medium text-surface-500 mb-1">Address</label><input [(ngModel)]="bbAddress" class="w-full px-3 py-2 text-sm bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30" /></div>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-100 dark:border-surface-700">
      <button (click)="closeBankBranchForm()" class="px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg">Cancel</button>
      <button (click)="saveBankBranch()" class="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg">Save</button>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/admin/agent-management/agent-management.component.scss */\n/*# sourceMappingURL=agent-management.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentManagementComponent, { className: "AgentManagementComponent", filePath: "src/app/pages/admin/agent-management/agent-management.component.ts", lineNumber: 72 });
})();
export {
  AgentManagementComponent
};
//# sourceMappingURL=chunk-QPKY6LJU.js.map
