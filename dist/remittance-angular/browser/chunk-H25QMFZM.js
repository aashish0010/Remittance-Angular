import {
  DatePicker
} from "./chunk-5EFJYZR4.js";
import "./chunk-5WEXKBPK.js";
import "./chunk-3CFLOBS2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-D3SW2Q36.js";
import {
  NotificationService
} from "./chunk-3AICMGEY.js";
import "./chunk-TLG473HR.js";
import {
  ApiService
} from "./chunk-JPFLOAIK.js";
import "./chunk-LDWTK5YJ.js";
import "./chunk-R63TWOS6.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-WBW3ZP3W.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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
} from "./chunk-EU7HC72Q.js";
import "./chunk-S5KMCARS.js";

// src/app/pages/admin/reports/agent-statement/agent-statement.component.ts
function AgentStatementComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agent_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", agent_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(agent_r1.businessName);
  }
}
function AgentStatementComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "circle", 17)(3, "path", 18);
    \u0275\u0275elementEnd()();
  }
}
function AgentStatementComponent_ng_container_26_div_194_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h3", 56);
    \u0275\u0275text(2, "Balance Entry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div")(5, "label", 4);
    \u0275\u0275text(6, "Entry Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 6);
    \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_ng_container_26_div_194_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.balanceEntry.entryType, $event) || (ctx_r2.balanceEntry.entryType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 60);
    \u0275\u0275text(9, "Credit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 61);
    \u0275\u0275text(11, "Debit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div")(13, "label", 4);
    \u0275\u0275text(14, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_ng_container_26_div_194_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.balanceEntry.amount, $event) || (ctx_r2.balanceEntry.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 4);
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_ng_container_26_div_194_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.balanceEntry.description, $event) || (ctx_r2.balanceEntry.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "button", 9);
    \u0275\u0275listener("click", function AgentStatementComponent_ng_container_26_div_194_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitBalanceEntry());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 10);
    \u0275\u0275element(23, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.balanceEntry.entryType);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.balanceEntry.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.balanceEntry.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.submittingEntry);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.submittingEntry ? "Submitting..." : "Submit Entry", " ");
  }
}
function AgentStatementComponent_ng_container_26_table_200_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 71)(1, "td", 72);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 73)(5, "span", 74);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 75);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 76);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 77);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, row_r4.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", row_r4.entryType === "Credit" ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.entryType, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", row_r4.entryType === "Credit" ? "text-success-600 dark:text-success-400" : "text-danger-600 dark:text-danger-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 10, row_r4.amount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 13, row_r4.balanceAfter, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.description || "\u2014");
  }
}
function AgentStatementComponent_ng_container_26_table_200_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 65)(1, "thead", 66)(2, "tr")(3, "th", 67);
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 67);
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 68);
    \u0275\u0275text(8, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 68);
    \u0275\u0275text(10, "Balance After");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 67);
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody", 69);
    \u0275\u0275template(14, AgentStatementComponent_ng_container_26_table_200_tr_14_Template, 15, 16, "tr", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.ledgerEntries);
  }
}
function AgentStatementComponent_ng_container_26_p_201_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1, " No ledger entries found for the selected period. ");
    \u0275\u0275elementEnd();
  }
}
function AgentStatementComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 0)(2, "div")(3, "p", 19);
    \u0275\u0275text(4, "Financial Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20)(6, "div", 21)(7, "div", 22)(8, "div")(9, "span", 23);
    \u0275\u0275text(10, "Final Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 24);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 26);
    \u0275\u0275element(16, "path", 27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 21)(18, "div", 22)(19, "div")(20, "span", 23);
    \u0275\u0275text(21, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 28);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 30);
    \u0275\u0275element(27, "path", 31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 21)(29, "div", 22)(30, "div")(31, "span", 23);
    \u0275\u0275text(32, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 32);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 34);
    \u0275\u0275element(38, "path", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 21)(40, "div", 22)(41, "div")(42, "span", 23);
    \u0275\u0275text(43, "Total Send Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 28);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(48, "svg", 30);
    \u0275\u0275element(49, "path", 36);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div")(51, "p", 19);
    \u0275\u0275text(52, "Transaction Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 20)(54, "div", 21)(55, "div", 22)(56, "div")(57, "span", 23);
    \u0275\u0275text(58, "Transactions Sent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 24);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(63, "svg", 26);
    \u0275\u0275element(64, "path", 37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "div", 21)(66, "div", 22)(67, "div")(68, "span", 23);
    \u0275\u0275text(69, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 28);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(74, "svg", 30);
    \u0275\u0275element(75, "path", 31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(76, "div", 21)(77, "div", 22)(78, "div")(79, "span", 23);
    \u0275\u0275text(80, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 38);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(85, "svg", 40);
    \u0275\u0275element(86, "path", 41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(87, "div", 21)(88, "div", 22)(89, "div")(90, "span", 23);
    \u0275\u0275text(91, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 32);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(96, "svg", 34);
    \u0275\u0275element(97, "path", 42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(98, "div", 21)(99, "div", 22)(100, "div")(101, "span", 23);
    \u0275\u0275text(102, "On Hold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span", 43);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(107, "svg", 45);
    \u0275\u0275element(108, "path", 46);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(109, "div")(110, "p", 19);
    \u0275\u0275text(111, "Service Charges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 20)(113, "div", 21)(114, "div", 22)(115, "div")(116, "span", 23);
    \u0275\u0275text(117, "Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "span", 28);
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(122, "svg", 30);
    \u0275\u0275element(123, "path", 47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(124, "div", 21)(125, "div", 22)(126, "div")(127, "span", 23);
    \u0275\u0275text(128, "Payout Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "span", 24);
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(133, "svg", 26);
    \u0275\u0275element(134, "path", 48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(135, "div", 21)(136, "div", 22)(137, "div")(138, "span", 23);
    \u0275\u0275text(139, "Our Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "span", 24);
    \u0275\u0275text(141);
    \u0275\u0275pipe(142, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(144, "svg", 26);
    \u0275\u0275element(145, "path", 49);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(146, "div")(147, "p", 19);
    \u0275\u0275text(148, "Financial Movements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "div", 20)(150, "div", 21)(151, "div", 22)(152, "div")(153, "span", 23);
    \u0275\u0275text(154, "Credit Given");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "span", 28);
    \u0275\u0275text(156);
    \u0275\u0275pipe(157, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(159, "svg", 30);
    \u0275\u0275element(160, "path", 50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(161, "div", 21)(162, "div", 22)(163, "div")(164, "span", 23);
    \u0275\u0275text(165, "Debit Given");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "span", 38);
    \u0275\u0275text(167);
    \u0275\u0275pipe(168, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(169, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(170, "svg", 40);
    \u0275\u0275element(171, "path", 51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(172, "div", 21)(173, "div", 22)(174, "div")(175, "span", 23);
    \u0275\u0275text(176, "FX Gain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "span", 24);
    \u0275\u0275text(178);
    \u0275\u0275pipe(179, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(181, "svg", 26);
    \u0275\u0275element(182, "path", 36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(183, "div", 21)(184, "div", 22)(185, "div")(186, "span", 23);
    \u0275\u0275text(187, "Net Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "span", 24);
    \u0275\u0275text(189);
    \u0275\u0275pipe(190, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(191, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(192, "svg", 26);
    \u0275\u0275element(193, "path", 52);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(194, AgentStatementComponent_ng_container_26_div_194_Template, 25, 5, "div", 53);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(195, "div", 54)(196, "div", 55)(197, "h3", 56);
    \u0275\u0275text(198, "Ledger Entries");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(199, "div", 57);
    \u0275\u0275template(200, AgentStatementComponent_ng_container_26_table_200_Template, 15, 1, "table", 58)(201, AgentStatementComponent_ng_container_26_p_201_Template, 2, 0, "p", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 19, ctx_r2.report.currentBalance, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 22, ctx_r2.report.creditLimit, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 25, ctx_r2.report.availableBalance, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 28, ctx_r2.report.totalSendVolume, "1.2-2"));
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 31, ctx_r2.report.totalTransactionsSent, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 34, ctx_r2.report.completedCount, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 37, ctx_r2.report.cancelledCount, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 40, ctx_r2.report.pendingCount, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 43, ctx_r2.report.onHoldCount, "1.0-0"));
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(120, 46, ctx_r2.report.agentCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(131, 49, ctx_r2.report.payoutAgentCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(142, 52, ctx_r2.report.companyCommission, "1.2-2"));
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(157, 55, ctx_r2.report.creditGiven, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(168, 58, ctx_r2.report.debitGiven, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(179, 61, ctx_r2.report.fxGain, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(190, 64, ctx_r2.report.netRevenue, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.selectedAgentId);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.ledgerEntries.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.ledgerEntries.length === 0);
  }
}
function AgentStatementComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 79);
    \u0275\u0275text(1, " No data available. Please select filters and click Generate. ");
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentStatementComponent, selectors: [["app-agent-statement"]], features: [\u0275\u0275ProvidersFeature([DecimalPipe, DatePipe])], decls: 28, vars: 13, consts: [[1, "space-y-6"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-6"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4", "items-end"], [1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1.5"], ["appendTo", "body", "dateFormat", "dd/mm/yy", "placeholder", "DD/MM/YYYY", "styleClass", "w-full", "inputStyleClass", "w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none", 3, "ngModelChange", "ngModel", "showIcon", "showClear"], [1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "w-full", "inline-flex", "items-center", "justify-center", "gap-2", "px-6", "py-2.5", "rounded-xl", "bg-brand-600", "hover:bg-brand-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "text-white", "font-medium", "text-sm", "transition-colors", "shadow-sm", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"], ["class", "flex items-center justify-center py-16", 4, "ngIf"], [4, "ngIf"], ["class", "text-center text-sm text-surface-500 dark:text-surface-400 py-10", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-16"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-xs", "font-bold", "uppercase", "tracking-widest", "text-surface-400", "dark:text-surface-500", "mb-3"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5", "shadow-soft"], [1, "flex", "items-center", "justify-between"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "uppercase", "tracking-wide"], [1, "block", "text-xl", "font-bold", "text-brand-600", "dark:text-brand-400", "mt-1"], [1, "flex-shrink-0", "w-10", "h-10", "rounded-xl", "bg-brand-100", "dark:bg-brand-900/30", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"], [1, "block", "text-xl", "font-bold", "text-success-600", "dark:text-success-400", "mt-1"], [1, "flex-shrink-0", "w-10", "h-10", "rounded-xl", "bg-success-100", "dark:bg-success-900/30", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "text-success-600", "dark:text-success-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "block", "text-xl", "font-bold", "text-warning-600", "dark:text-warning-400", "mt-1"], [1, "flex-shrink-0", "w-10", "h-10", "rounded-xl", "bg-warning-100", "dark:bg-warning-900/30", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "text-warning-600", "dark:text-warning-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"], [1, "block", "text-xl", "font-bold", "text-danger-600", "dark:text-danger-400", "mt-1"], [1, "flex-shrink-0", "w-10", "h-10", "rounded-xl", "bg-danger-100", "dark:bg-danger-900/30", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "text-danger-600", "dark:text-danger-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "block", "text-xl", "font-bold", "text-surface-600", "dark:text-surface-300", "mt-1"], [1, "flex-shrink-0", "w-10", "h-10", "rounded-xl", "bg-surface-100", "dark:bg-surface-700", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "text-surface-600", "dark:text-surface-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft", "overflow-hidden"], [1, "p-6", "pb-0"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-4"], [1, "overflow-x-auto"], ["class", "w-full text-sm text-left", 4, "ngIf"], ["class", "px-6 py-10 text-center text-sm text-surface-500 dark:text-surface-400", 4, "ngIf"], ["value", "Credit"], ["value", "Debit"], ["type", "number", "min", "0", "placeholder", "0.00", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Optional description", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "w-full", "text-sm", "text-left"], [1, "bg-surface-50", "dark:bg-surface-700/50"], [1, "px-6", "py-3", "text-xs", "font-semibold", "text-surface-600", "dark:text-surface-300", "uppercase", "tracking-wider"], [1, "px-6", "py-3", "text-xs", "font-semibold", "text-surface-600", "dark:text-surface-300", "uppercase", "tracking-wider", "text-right"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-700/30", "transition-colors"], [1, "px-6", "py-3.5", "text-surface-700", "dark:text-surface-300", "whitespace-nowrap"], [1, "px-6", "py-3.5", "whitespace-nowrap"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "px-6", "py-3.5", "text-right", "font-mono", "whitespace-nowrap", 3, "ngClass"], [1, "px-6", "py-3.5", "text-right", "font-mono", "text-surface-700", "dark:text-surface-300", "whitespace-nowrap"], [1, "px-6", "py-3.5", "text-surface-600", "dark:text-surface-400"], [1, "px-6", "py-10", "text-center", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "text-center", "text-sm", "text-surface-500", "dark:text-surface-400", "py-10"]], template: function AgentStatementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Agent Statement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div")(6, "label", 4);
        \u0275\u0275text(7, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p-datepicker", 5);
        \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_Template_p_datepicker_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.startDateObj, $event) || (ctx.startDateObj = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div")(10, "label", 4);
        \u0275\u0275text(11, "End Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p-datepicker", 5);
        \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_Template_p_datepicker_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.endDateObj, $event) || (ctx.endDateObj = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div")(14, "label", 4);
        \u0275\u0275text(15, "Agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_Template_select_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedAgentId, $event) || (ctx.selectedAgentId = $event);
          return $event;
        });
        \u0275\u0275elementStart(17, "option", 7);
        \u0275\u0275text(18, "All Agents");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, AgentStatementComponent_option_19_Template, 2, 2, "option", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div")(21, "button", 9);
        \u0275\u0275listener("click", function AgentStatementComponent_Template_button_click_21_listener() {
          return ctx.loadReport();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(22, "svg", 10);
        \u0275\u0275element(23, "path", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Generate ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(25, AgentStatementComponent_div_25_Template, 4, 0, "div", 12)(26, AgentStatementComponent_ng_container_26_Template, 202, 67, "ng-container", 13)(27, AgentStatementComponent_p_27_Template, 2, 0, "p", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDateObj);
        \u0275\u0275property("showIcon", true)("showClear", true);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDateObj);
        \u0275\u0275property("showIcon", true)("showClear", true);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedAgentId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.agents);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.report);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.report);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DatePicker], styles: ["\n\n/*# sourceMappingURL=agent-statement.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentStatementComponent, [{
    type: Component,
    args: [{ selector: "app-agent-statement", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DatePicker
    ], providers: [DecimalPipe, DatePipe], template: `<div class="space-y-6">
  <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-100 mb-6">Agent Statement</h2>

  <!-- Filters -->
  <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
      <!-- Start Date -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Start Date</label>
        <p-datepicker appendTo="body"
          [(ngModel)]="startDateObj"
          dateFormat="dd/mm/yy"
          [showIcon]="true"
          [showClear]="true"
          placeholder="DD/MM/YYYY"
          styleClass="w-full"
          inputStyleClass="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none"
        />
      </div>

      <!-- End Date -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">End Date</label>
        <p-datepicker appendTo="body"
          [(ngModel)]="endDateObj"
          dateFormat="dd/mm/yy"
          [showIcon]="true"
          [showClear]="true"
          placeholder="DD/MM/YYYY"
          styleClass="w-full"
          inputStyleClass="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none"
        />
      </div>

      <!-- Agent Select -->
      <div>
        <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Agent</label>
        <select
          [(ngModel)]="selectedAgentId"
          class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none"
        >
          <option [ngValue]="0">All Agents</option>
          <option *ngFor="let agent of agents" [ngValue]="agent.id">{{ agent.businessName }}</option>
        </select>
      </div>

      <!-- Generate Button -->
      <div>
        <button
          (click)="loadReport()"
          [disabled]="loading"
          class="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors shadow-sm"
        >
          <!-- Search icon -->
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          Generate
        </button>
      </div>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex items-center justify-center py-16">
    <svg class="animate-spin h-10 w-10 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div>

  <!-- Report Content -->
  <ng-container *ngIf="!loading && report">

    <!-- Stat Cards -->
    <div class="space-y-6">

      <!-- Financial Overview -->
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-3">Financial Overview</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <!-- Final Balance -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Final Balance</span>
                <span class="block text-xl font-bold text-brand-600 dark:text-brand-400 mt-1">{{ report.currentBalance | number:'1.2-2' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Credit Limit -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Credit Limit</span>
                <span class="block text-xl font-bold text-success-600 dark:text-success-400 mt-1">{{ report.creditLimit | number:'1.2-2' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-success-100 dark:bg-success-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-success-600 dark:text-success-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Available Balance -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Available Balance</span>
                <span class="block text-xl font-bold text-warning-600 dark:text-warning-400 mt-1">{{ report.availableBalance | number:'1.2-2' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-warning-100 dark:bg-warning-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-warning-600 dark:text-warning-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Total Send Volume -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Total Send Volume</span>
                <span class="block text-xl font-bold text-success-600 dark:text-success-400 mt-1">{{ report.totalSendVolume | number:'1.2-2' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-success-100 dark:bg-success-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-success-600 dark:text-success-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Transaction Activity -->
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-3">Transaction Activity</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <!-- Transactions Sent -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Transactions Sent</span>
                <span class="block text-xl font-bold text-brand-600 dark:text-brand-400 mt-1">{{ report.totalTransactionsSent | number:'1.0-0' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Completed -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Completed</span>
                <span class="block text-xl font-bold text-success-600 dark:text-success-400 mt-1">{{ report.completedCount | number:'1.0-0' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-success-100 dark:bg-success-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-success-600 dark:text-success-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Cancelled -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Cancelled</span>
                <span class="block text-xl font-bold text-danger-600 dark:text-danger-400 mt-1">{{ report.cancelledCount | number:'1.0-0' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-danger-100 dark:bg-danger-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-danger-600 dark:text-danger-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Pending -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Pending</span>
                <span class="block text-xl font-bold text-warning-600 dark:text-warning-400 mt-1">{{ report.pendingCount | number:'1.0-0' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-warning-100 dark:bg-warning-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-warning-600 dark:text-warning-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- On Hold -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">On Hold</span>
                <span class="block text-xl font-bold text-surface-600 dark:text-surface-300 mt-1">{{ report.onHoldCount | number:'1.0-0' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-surface-100 dark:bg-surface-700 flex items-center justify-center">
                <svg class="w-5 h-5 text-surface-600 dark:text-surface-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Service Charges -->
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-3">Service Charges</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <!-- Agent Service Charge -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Agent Service Charge</span>
                <span class="block text-xl font-bold text-success-600 dark:text-success-400 mt-1">{{ report.agentCommission | number:'1.2-2' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-success-100 dark:bg-success-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-success-600 dark:text-success-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Payout Agent Service Charge -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Payout Agent Service Charge</span>
                <span class="block text-xl font-bold text-brand-600 dark:text-brand-400 mt-1">{{ report.payoutAgentCommission | number:'1.2-2' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Our Service Charge -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Our Service Charge</span>
                <span class="block text-xl font-bold text-brand-600 dark:text-brand-400 mt-1">{{ report.companyCommission | number:'1.2-2' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Financial Movements -->
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-3">Financial Movements</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <!-- Credit Given -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Credit Given</span>
                <span class="block text-xl font-bold text-success-600 dark:text-success-400 mt-1">{{ report.creditGiven | number:'1.2-2' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-success-100 dark:bg-success-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-success-600 dark:text-success-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Debit Given -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Debit Given</span>
                <span class="block text-xl font-bold text-danger-600 dark:text-danger-400 mt-1">{{ report.debitGiven | number:'1.2-2' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-danger-100 dark:bg-danger-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-danger-600 dark:text-danger-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
              </div>
            </div>
          </div>

          <!-- FX Gain -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">FX Gain</span>
                <span class="block text-xl font-bold text-brand-600 dark:text-brand-400 mt-1">{{ report.fxGain | number:'1.2-2' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Net Revenue -->
          <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <span class="block text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Net Revenue</span>
                <span class="block text-xl font-bold text-brand-600 dark:text-brand-400 mt-1">{{ report.netRevenue | number:'1.2-2' }}</span>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Balance Entry Form -->
    <div *ngIf="selectedAgentId" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">Balance Entry</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        <!-- Entry Type -->
        <div>
          <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Entry Type</label>
          <select
            [(ngModel)]="balanceEntry.entryType"
            class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none"
          >
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>

        <!-- Amount -->
        <div>
          <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Amount</label>
          <input
            type="number"
            [(ngModel)]="balanceEntry.amount"
            min="0"
            placeholder="0.00"
            class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none"
          />
        </div>

        <!-- Description -->
        <div>
          <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Description</label>
          <input
            type="text"
            [(ngModel)]="balanceEntry.description"
            placeholder="Optional description"
            class="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none"
          />
        </div>

        <!-- Submit Button -->
        <div>
          <button
            (click)="submitBalanceEntry()"
            [disabled]="submittingEntry"
            class="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors shadow-sm"
          >
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {{ submittingEntry ? 'Submitting...' : 'Submit Entry' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Ledger Entries Table -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft overflow-hidden">
      <div class="p-6 pb-0">
        <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">Ledger Entries</h3>
      </div>
      <div class="overflow-x-auto">
        <table *ngIf="ledgerEntries.length > 0" class="w-full text-sm text-left">
          <thead class="bg-surface-50 dark:bg-surface-700/50">
            <tr>
              <th class="px-6 py-3 text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Date</th>
              <th class="px-6 py-3 text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Type</th>
              <th class="px-6 py-3 text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider text-right">Amount</th>
              <th class="px-6 py-3 text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider text-right">Balance After</th>
              <th class="px-6 py-3 text-xs font-semibold text-surface-600 dark:text-surface-300 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-surface-100 dark:divide-surface-700">
            <tr *ngFor="let row of ledgerEntries" class="hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors">
              <td class="px-6 py-3.5 text-surface-700 dark:text-surface-300 whitespace-nowrap">{{ row.createdAt | date:'dd/MM/yyyy HH:mm' }}</td>
              <td class="px-6 py-3.5 whitespace-nowrap">
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  [ngClass]="row.entryType === 'Credit'
                    ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
                    : 'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400'"
                >
                  {{ row.entryType }}
                </span>
              </td>
              <td
                class="px-6 py-3.5 text-right font-mono whitespace-nowrap"
                [ngClass]="row.entryType === 'Credit'
                  ? 'text-success-600 dark:text-success-400'
                  : 'text-danger-600 dark:text-danger-400'"
              >
                {{ row.amount | number:'1.2-2' }}
              </td>
              <td class="px-6 py-3.5 text-right font-mono text-surface-700 dark:text-surface-300 whitespace-nowrap">
                {{ row.balanceAfter | number:'1.2-2' }}
              </td>
              <td class="px-6 py-3.5 text-surface-600 dark:text-surface-400">{{ row.description || '\\u2014' }}</td>
            </tr>
          </tbody>
        </table>

        <p *ngIf="ledgerEntries.length === 0" class="px-6 py-10 text-center text-sm text-surface-500 dark:text-surface-400">
          No ledger entries found for the selected period.
        </p>
      </div>
    </div>
  </ng-container>

  <!-- No Data -->
  <p *ngIf="!loading && !report" class="text-center text-sm text-surface-500 dark:text-surface-400 py-10">
    No data available. Please select filters and click Generate.
  </p>
</div>
`, styles: ["/* src/app/pages/admin/reports/agent-statement/agent-statement.component.scss */\n/*# sourceMappingURL=agent-statement.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: DecimalPipe }, { type: DatePipe }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentStatementComponent, { className: "AgentStatementComponent", filePath: "src/app/pages/admin/reports/agent-statement/agent-statement.component.ts", lineNumber: 20 });
})();
export {
  AgentStatementComponent
};
//# sourceMappingURL=chunk-H25QMFZM.js.map
