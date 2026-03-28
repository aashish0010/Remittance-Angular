import {
  DatePicker
} from "./chunk-P27FYE4L.js";
import "./chunk-2JJTUUN4.js";
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
} from "./chunk-6I2CTDTD.js";
import {
  NotificationService
} from "./chunk-U44UDHMQ.js";
import "./chunk-VTD77X6G.js";
import {
  ApiService
} from "./chunk-2NPUZHRJ.js";
import "./chunk-MP5DRVCF.js";
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
} from "./chunk-XQC2OG7J.js";

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
function AgentStatementComponent_ng_container_26_div_178_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h3", 55);
    \u0275\u0275text(2, "Balance Entry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div")(5, "label", 4);
    \u0275\u0275text(6, "Entry Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 6);
    \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_ng_container_26_div_178_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.balanceEntry.entryType, $event) || (ctx_r2.balanceEntry.entryType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 59);
    \u0275\u0275text(9, "Credit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 60);
    \u0275\u0275text(11, "Debit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div")(13, "label", 4);
    \u0275\u0275text(14, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_ng_container_26_div_178_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.balanceEntry.amount, $event) || (ctx_r2.balanceEntry.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 4);
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function AgentStatementComponent_ng_container_26_div_178_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.balanceEntry.description, $event) || (ctx_r2.balanceEntry.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "button", 9);
    \u0275\u0275listener("click", function AgentStatementComponent_ng_container_26_div_178_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitBalanceEntry());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 10);
    \u0275\u0275element(23, "path", 63);
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
function AgentStatementComponent_ng_container_26_table_184_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 70)(1, "td", 71);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 72)(5, "span", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 74);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 75);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 76);
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
function AgentStatementComponent_ng_container_26_table_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 64)(1, "thead", 65)(2, "tr")(3, "th", 66);
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 66);
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 67);
    \u0275\u0275text(8, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 67);
    \u0275\u0275text(10, "Balance After");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 66);
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody", 68);
    \u0275\u0275template(14, AgentStatementComponent_ng_container_26_table_184_tr_14_Template, 15, 16, "tr", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.ledgerEntries);
  }
}
function AgentStatementComponent_ng_container_26_p_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1, " No ledger entries found for the selected period. ");
    \u0275\u0275elementEnd();
  }
}
function AgentStatementComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "div")(5, "span", 22);
    \u0275\u0275text(6, "Final Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 25);
    \u0275\u0275element(12, "path", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 20)(14, "div", 21)(15, "div")(16, "span", 22);
    \u0275\u0275text(17, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 27);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 29);
    \u0275\u0275element(23, "path", 30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 20)(25, "div", 21)(26, "div")(27, "span", 22);
    \u0275\u0275text(28, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 31);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 33);
    \u0275\u0275element(34, "path", 34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "div", 20)(36, "div", 21)(37, "div")(38, "span", 22);
    \u0275\u0275text(39, "Transactions Sent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 23);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 25);
    \u0275\u0275element(45, "path", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "div", 20)(47, "div", 21)(48, "div")(49, "span", 22);
    \u0275\u0275text(50, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 27);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 29);
    \u0275\u0275element(56, "path", 30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(57, "div", 20)(58, "div", 21)(59, "div")(60, "span", 22);
    \u0275\u0275text(61, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 36);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 38);
    \u0275\u0275element(67, "path", 39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(68, "div", 20)(69, "div", 21)(70, "div")(71, "span", 22);
    \u0275\u0275text(72, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 31);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(77, "svg", 33);
    \u0275\u0275element(78, "path", 40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(79, "div", 20)(80, "div", 21)(81, "div")(82, "span", 22);
    \u0275\u0275text(83, "On Hold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 41);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(88, "svg", 43);
    \u0275\u0275element(89, "path", 44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(90, "div", 20)(91, "div", 21)(92, "div")(93, "span", 22);
    \u0275\u0275text(94, "Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 27);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(99, "svg", 29);
    \u0275\u0275element(100, "path", 45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(101, "div", 20)(102, "div", 21)(103, "div")(104, "span", 22);
    \u0275\u0275text(105, "Payout Agent Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 23);
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(110, "svg", 25);
    \u0275\u0275element(111, "path", 46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(112, "div", 20)(113, "div", 21)(114, "div")(115, "span", 22);
    \u0275\u0275text(116, "Our Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "span", 23);
    \u0275\u0275text(118);
    \u0275\u0275pipe(119, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(121, "svg", 25);
    \u0275\u0275element(122, "path", 47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(123, "div", 20)(124, "div", 21)(125, "div")(126, "span", 22);
    \u0275\u0275text(127, "Credit Given");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "span", 27);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(132, "svg", 29);
    \u0275\u0275element(133, "path", 48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(134, "div", 20)(135, "div", 21)(136, "div")(137, "span", 22);
    \u0275\u0275text(138, "Debit Given");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "span", 36);
    \u0275\u0275text(140);
    \u0275\u0275pipe(141, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(143, "svg", 38);
    \u0275\u0275element(144, "path", 49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(145, "div", 20)(146, "div", 21)(147, "div")(148, "span", 22);
    \u0275\u0275text(149, "FX Gain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "span", 23);
    \u0275\u0275text(151);
    \u0275\u0275pipe(152, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(154, "svg", 25);
    \u0275\u0275element(155, "path", 50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(156, "div", 20)(157, "div", 21)(158, "div")(159, "span", 22);
    \u0275\u0275text(160, "Net Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "span", 23);
    \u0275\u0275text(162);
    \u0275\u0275pipe(163, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(165, "svg", 25);
    \u0275\u0275element(166, "path", 51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(167, "div", 20)(168, "div", 21)(169, "div")(170, "span", 22);
    \u0275\u0275text(171, "Total Send Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "span", 27);
    \u0275\u0275text(173);
    \u0275\u0275pipe(174, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(175, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(176, "svg", 29);
    \u0275\u0275element(177, "path", 50);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(178, AgentStatementComponent_ng_container_26_div_178_Template, 25, 5, "div", 52);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(179, "div", 53)(180, "div", 54)(181, "h3", 55);
    \u0275\u0275text(182, "Ledger Entries");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "div", 56);
    \u0275\u0275template(184, AgentStatementComponent_ng_container_26_table_184_Template, 15, 1, "table", 57)(185, AgentStatementComponent_ng_container_26_p_185_Template, 2, 0, "p", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 19, ctx_r2.report.currentBalance, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 22, ctx_r2.report.creditLimit, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 25, ctx_r2.report.availableBalance, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 28, ctx_r2.report.totalTransactionsSent, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 31, ctx_r2.report.completedCount, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 34, ctx_r2.report.cancelledCount, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 37, ctx_r2.report.pendingCount, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(86, 40, ctx_r2.report.onHoldCount, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 43, ctx_r2.report.agentCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 46, ctx_r2.report.payoutAgentCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(119, 49, ctx_r2.report.companyCommission, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(130, 52, ctx_r2.report.creditGiven, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(141, 55, ctx_r2.report.debitGiven, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(152, 58, ctx_r2.report.fxGain, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(163, 61, ctx_r2.report.netRevenue, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(174, 64, ctx_r2.report.totalSendVolume, "1.2-2"));
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
    \u0275\u0275elementStart(0, "p", 78);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentStatementComponent, selectors: [["app-agent-statement"]], features: [\u0275\u0275ProvidersFeature([DecimalPipe, DatePipe])], decls: 28, vars: 13, consts: [[1, "space-y-6"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-6"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4", "items-end"], [1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1.5"], ["dateFormat", "dd/mm/yy", "placeholder", "DD/MM/YYYY", "styleClass", "w-full", "inputStyleClass", "w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-sm outline-none", 3, "ngModelChange", "ngModel", "showIcon", "showClear"], [1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "w-full", "inline-flex", "items-center", "justify-center", "gap-2", "px-6", "py-2.5", "rounded-xl", "bg-brand-600", "hover:bg-brand-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "text-white", "font-medium", "text-sm", "transition-colors", "shadow-sm", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"], ["class", "flex items-center justify-center py-16", 4, "ngIf"], [4, "ngIf"], ["class", "text-center text-sm text-surface-500 dark:text-surface-400 py-10", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-16"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5", "shadow-soft"], [1, "flex", "items-center", "justify-between"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "uppercase", "tracking-wide"], [1, "block", "text-xl", "font-bold", "text-brand-600", "dark:text-brand-400", "mt-1"], [1, "flex-shrink-0", "w-10", "h-10", "rounded-xl", "bg-brand-100", "dark:bg-brand-900/30", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"], [1, "block", "text-xl", "font-bold", "text-success-600", "dark:text-success-400", "mt-1"], [1, "flex-shrink-0", "w-10", "h-10", "rounded-xl", "bg-success-100", "dark:bg-success-900/30", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "text-success-600", "dark:text-success-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "block", "text-xl", "font-bold", "text-warning-600", "dark:text-warning-400", "mt-1"], [1, "flex-shrink-0", "w-10", "h-10", "rounded-xl", "bg-warning-100", "dark:bg-warning-900/30", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "text-warning-600", "dark:text-warning-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"], [1, "block", "text-xl", "font-bold", "text-danger-600", "dark:text-danger-400", "mt-1"], [1, "flex-shrink-0", "w-10", "h-10", "rounded-xl", "bg-danger-100", "dark:bg-danger-900/30", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "text-danger-600", "dark:text-danger-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "block", "text-xl", "font-bold", "text-surface-600", "dark:text-surface-300", "mt-1"], [1, "flex-shrink-0", "w-10", "h-10", "rounded-xl", "bg-surface-100", "dark:bg-surface-700", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "text-surface-600", "dark:text-surface-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft", "overflow-hidden"], [1, "p-6", "pb-0"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-4"], [1, "overflow-x-auto"], ["class", "w-full text-sm text-left", 4, "ngIf"], ["class", "px-6 py-10 text-center text-sm text-surface-500 dark:text-surface-400", 4, "ngIf"], ["value", "Credit"], ["value", "Debit"], ["type", "number", "min", "0", "placeholder", "0.00", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Optional description", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "transition-colors", "text-sm", "outline-none", 3, "ngModelChange", "ngModel"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "w-full", "text-sm", "text-left"], [1, "bg-surface-50", "dark:bg-surface-700/50"], [1, "px-6", "py-3", "text-xs", "font-semibold", "text-surface-600", "dark:text-surface-300", "uppercase", "tracking-wider"], [1, "px-6", "py-3", "text-xs", "font-semibold", "text-surface-600", "dark:text-surface-300", "uppercase", "tracking-wider", "text-right"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-700/30", "transition-colors"], [1, "px-6", "py-3.5", "text-surface-700", "dark:text-surface-300", "whitespace-nowrap"], [1, "px-6", "py-3.5", "whitespace-nowrap"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "px-6", "py-3.5", "text-right", "font-mono", "whitespace-nowrap", 3, "ngClass"], [1, "px-6", "py-3.5", "text-right", "font-mono", "text-surface-700", "dark:text-surface-300", "whitespace-nowrap"], [1, "px-6", "py-3.5", "text-surface-600", "dark:text-surface-400"], [1, "px-6", "py-10", "text-center", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "text-center", "text-sm", "text-surface-500", "dark:text-surface-400", "py-10"]], template: function AgentStatementComponent_Template(rf, ctx) {
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
        \u0275\u0275template(25, AgentStatementComponent_div_25_Template, 4, 0, "div", 12)(26, AgentStatementComponent_ng_container_26_Template, 186, 67, "ng-container", 13)(27, AgentStatementComponent_p_27_Template, 2, 0, "p", 14);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DatePicker], styles: ['\n\n.report-page[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n.stat-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue[_ngcontent-%COMP%] {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-value-blue[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.stat-green[_ngcontent-%COMP%] {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-value-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-orange[_ngcontent-%COMP%] {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-value-orange[_ngcontent-%COMP%] {\n  color: #ed6c02;\n}\n.stat-red[_ngcontent-%COMP%] {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-value-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-value-purple[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n}\n.stat-teal[_ngcontent-%COMP%] {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-value-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n}\n.stat-indigo[_ngcontent-%COMP%] {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-value-indigo[_ngcontent-%COMP%] {\n  color: #3949ab;\n}\n.stat-pink[_ngcontent-%COMP%] {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-value-pink[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n.stat-amber[_ngcontent-%COMP%] {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-value-amber[_ngcontent-%COMP%] {\n  color: #ff8f00;\n}\n.stat-cyan[_ngcontent-%COMP%] {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-value-cyan[_ngcontent-%COMP%] {\n  color: #0097a7;\n}\n.stat-lime[_ngcontent-%COMP%] {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-value-lime[_ngcontent-%COMP%] {\n  color: #689f38;\n}\n.stat-brown[_ngcontent-%COMP%] {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.stat-value-brown[_ngcontent-%COMP%] {\n  color: #5d4037;\n}\n.data-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.report-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal[_ngcontent-%COMP%] {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #ed6c02;\n}\n.status-onhold[_ngcontent-%COMP%] {\n  background: #9e9e9e;\n}\n.status-compliance[_ngcontent-%COMP%] {\n  background: #7b1fa2;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: #d32f2f;\n}\n.balance-form-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.balance-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 160px;\n}\n.dark-mode[_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .data-card[_ngcontent-%COMP%]:hover, \n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n.dark-mode[_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .balance-form-card[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  background: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .report-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .balance-form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=agent-statement.component.css.map */'] });
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
        <p-datepicker
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
        <p-datepicker
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
`, styles: ['/* src/app/pages/admin/reports/agent-statement/agent-statement.component.scss */\n.report-page {\n  padding: 0;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.filters-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.filters-card mat-card-content {\n  padding: 20px !important;\n}\n.filters-row {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-row mat-form-field {\n  flex: 1;\n  min-width: 160px;\n}\n.filters-row .filter-btn {\n  height: 56px;\n  min-width: 120px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  border-radius: 12px !important;\n  border-left: 4px solid transparent !important;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n  transform: translateY(-2px);\n}\n.stat-card mat-card-content {\n  padding: 16px !important;\n}\n.stat-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.stat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.7;\n}\n.stat-blue {\n  border-left-color: #1976d2 !important;\n}\n.stat-icon-blue {\n  color: #1976d2;\n}\n.stat-value-blue {\n  color: #1976d2;\n}\n.stat-green {\n  border-left-color: #2e7d32 !important;\n}\n.stat-icon-green {\n  color: #2e7d32;\n}\n.stat-value-green {\n  color: #2e7d32;\n}\n.stat-orange {\n  border-left-color: #ed6c02 !important;\n}\n.stat-icon-orange {\n  color: #ed6c02;\n}\n.stat-value-orange {\n  color: #ed6c02;\n}\n.stat-red {\n  border-left-color: #d32f2f !important;\n}\n.stat-icon-red {\n  color: #d32f2f;\n}\n.stat-value-red {\n  color: #d32f2f;\n}\n.stat-purple {\n  border-left-color: #7b1fa2 !important;\n}\n.stat-icon-purple {\n  color: #7b1fa2;\n}\n.stat-value-purple {\n  color: #7b1fa2;\n}\n.stat-teal {\n  border-left-color: #00897b !important;\n}\n.stat-icon-teal {\n  color: #00897b;\n}\n.stat-value-teal {\n  color: #00897b;\n}\n.stat-indigo {\n  border-left-color: #3949ab !important;\n}\n.stat-icon-indigo {\n  color: #3949ab;\n}\n.stat-value-indigo {\n  color: #3949ab;\n}\n.stat-pink {\n  border-left-color: #c2185b !important;\n}\n.stat-icon-pink {\n  color: #c2185b;\n}\n.stat-value-pink {\n  color: #c2185b;\n}\n.stat-amber {\n  border-left-color: #ff8f00 !important;\n}\n.stat-icon-amber {\n  color: #ff8f00;\n}\n.stat-value-amber {\n  color: #ff8f00;\n}\n.stat-cyan {\n  border-left-color: #0097a7 !important;\n}\n.stat-icon-cyan {\n  color: #0097a7;\n}\n.stat-value-cyan {\n  color: #0097a7;\n}\n.stat-lime {\n  border-left-color: #689f38 !important;\n}\n.stat-icon-lime {\n  color: #689f38;\n}\n.stat-value-lime {\n  color: #689f38;\n}\n.stat-brown {\n  border-left-color: #5d4037 !important;\n}\n.stat-icon-brown {\n  color: #5d4037;\n}\n.stat-value-brown {\n  color: #5d4037;\n}\n.data-card {\n  border-radius: 12px !important;\n  margin-bottom: 24px;\n}\n.data-card mat-card-content {\n  padding: 20px !important;\n}\n.section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.table-responsive {\n  overflow-x: auto;\n}\n.report-table {\n  width: 100%;\n}\n.report-table .mat-mdc-header-cell {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.7);\n  background: #fafafa;\n}\n.report-table .mat-mdc-cell {\n  font-size: 0.875rem;\n}\n.report-table .mat-mdc-row:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.mono-text {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.text-right {\n  text-align: right;\n}\n.text-green {\n  color: #2e7d32;\n  font-weight: 600;\n}\n.text-red {\n  color: #d32f2f;\n  font-weight: 600;\n}\n.text-teal {\n  color: #00897b;\n  font-weight: 600;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.empty-text {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  padding: 32px 0;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n}\n.status-completed {\n  background: #2e7d32;\n}\n.status-pending {\n  background: #ed6c02;\n}\n.status-onhold {\n  background: #9e9e9e;\n}\n.status-compliance {\n  background: #7b1fa2;\n}\n.status-cancelled {\n  background: #d32f2f;\n}\n.status-failed {\n  background: #d32f2f;\n}\n.balance-form-card {\n  border-radius: 12px !important;\n  border: 2px dashed #1976d2;\n}\n.balance-form-card mat-card-content {\n  padding: 24px !important;\n}\n.balance-form-row {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.balance-form-row mat-form-field {\n  flex: 1;\n  min-width: 140px;\n}\n.balance-form-row .submit-btn {\n  height: 56px;\n  min-width: 160px;\n}\n:host-context(.dark-mode) .page-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .stat-value {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .section-title {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .empty-text {\n  color: #64748b;\n}\n:host-context(.dark-mode) .stat-card,\n:host-context(.dark-mode) .filters-card,\n:host-context(.dark-mode) .data-card,\n:host-context(.dark-mode) .balance-form-card {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .stat-card:hover,\n:host-context(.dark-mode) .filters-card:hover,\n:host-context(.dark-mode) .data-card:hover,\n:host-context(.dark-mode) .balance-form-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;\n}\n:host-context(.dark-mode) .balance-form-card {\n  border-color: #3b82f6;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-header-cell {\n  color: #94a3b8;\n  background: #334155;\n}\n:host-context(.dark-mode) .report-table .mat-mdc-row:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters-row {\n    flex-direction: column;\n  }\n  .balance-form-row {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=agent-statement.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: DecimalPipe }, { type: DatePipe }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentStatementComponent, { className: "AgentStatementComponent", filePath: "src/app/pages/admin/reports/agent-statement/agent-statement.component.ts", lineNumber: 20 });
})();
export {
  AgentStatementComponent
};
//# sourceMappingURL=chunk-WNBFFNKF.js.map
