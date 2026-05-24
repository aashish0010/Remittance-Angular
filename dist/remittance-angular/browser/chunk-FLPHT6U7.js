import {
  ConfirmDeleteService
} from "./chunk-T26TPJH4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-T2QRKSFD.js";
import {
  NotificationService
} from "./chunk-FW7X3ZAO.js";
import "./chunk-ZNZAZTZS.js";
import {
  ApiService
} from "./chunk-JODIW3US.js";
import "./chunk-4HHFE2PJ.js";
import {
  ActivatedRoute
} from "./chunk-MLGMBAGQ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-PBY7YOCP.js";
import {
  Component,
  Subject,
  debounceTime,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FTA5WDSR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ZNC4SKHB.js";

// src/app/pages/admin/agent-banks/agent-banks.component.ts
function AgentBanksComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1.businessName);
  }
}
function AgentBanksComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 21);
    \u0275\u0275element(4, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "p", 23);
    \u0275\u0275text(7, "Select an agent to view bank accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 24);
    \u0275\u0275text(9, "Use the dropdown above to choose an agent, then manage their payout bank accounts and branches.");
    \u0275\u0275elementEnd()()()();
  }
}
function AgentBanksComponent_ng_container_17_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "circle", 47)(3, "path", 48);
    \u0275\u0275elementEnd()();
  }
}
function AgentBanksComponent_ng_container_17_div_43_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.searchString = "";
      return \u0275\u0275resetView(ctx_r2.onSearchChange());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 76);
    \u0275\u0275element(2, "path", 77);
    \u0275\u0275elementEnd()();
  }
}
function AgentBanksComponent_ng_container_17_div_43_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("value", c_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5);
  }
}
function AgentBanksComponent_ng_container_17_div_43_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r6 = ctx.$implicit;
    \u0275\u0275property("value", pm_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r6.name);
  }
}
function AgentBanksComponent_ng_container_17_div_43_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Clear ");
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_ng_container_17_div_43_div_29_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ' for "');
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, '"');
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.searchString);
  }
}
function AgentBanksComponent_ng_container_17_div_43_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "p", 82);
    \u0275\u0275text(2);
    \u0275\u0275template(3, AgentBanksComponent_ng_container_17_div_43_div_29_span_3_Template, 5, 1, "span", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.totalCount, " banks match current filters ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.searchString);
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bank_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bank_r9.bankCode);
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bank_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getPaymentMethodName(bank_r9.paymentMethodId), " ");
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bank_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", bank_r9.city, ", ");
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bank_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bank_r9.country);
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 110)(1, "span", 111);
    \u0275\u0275text(2, "SWIFT");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bank_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", bank_r9.swiftCode, " ");
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 110)(1, "span", 111);
    \u0275\u0275text(2, "ABA");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bank_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", bank_r9.routingNumber, " ");
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bank_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bank_r9.contactPhone);
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bank_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bank_r9.contactEmail);
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51__svg_path_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 39);
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51__svg_path_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 35);
  }
}
function AgentBanksComponent_ng_container_17_div_43_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 83)(1, "td", 84)(2, "div", 4)(3, "div", 85);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 86);
    \u0275\u0275element(5, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div")(7, "p", 87);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AgentBanksComponent_ng_container_17_div_43_tr_51_p_9_Template, 2, 1, "p", 88);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td", 84);
    \u0275\u0275template(11, AgentBanksComponent_ng_container_17_div_43_tr_51_span_11_Template, 2, 1, "span", 89)(12, AgentBanksComponent_ng_container_17_div_43_tr_51_span_12_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 84)(14, "div", 91);
    \u0275\u0275template(15, AgentBanksComponent_ng_container_17_div_43_tr_51_span_15_Template, 2, 1, "span", 13)(16, AgentBanksComponent_ng_container_17_div_43_tr_51_span_16_Template, 2, 1, "span", 13)(17, AgentBanksComponent_ng_container_17_div_43_tr_51_span_17_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 84)(19, "div", 92);
    \u0275\u0275template(20, AgentBanksComponent_ng_container_17_div_43_tr_51_p_20_Template, 4, 1, "p", 93)(21, AgentBanksComponent_ng_container_17_div_43_tr_51_p_21_Template, 4, 1, "p", 93)(22, AgentBanksComponent_ng_container_17_div_43_tr_51_span_22_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 84)(24, "div", 92);
    \u0275\u0275template(25, AgentBanksComponent_ng_container_17_div_43_tr_51_p_25_Template, 2, 1, "p", 94)(26, AgentBanksComponent_ng_container_17_div_43_tr_51_p_26_Template, 2, 1, "p", 95)(27, AgentBanksComponent_ng_container_17_div_43_tr_51_span_27_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 84)(29, "button", 96);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_tr_51_Template_button_click_29_listener() {
      const bank_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openBranchManagement(bank_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 80);
    \u0275\u0275element(31, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "td", 84)(34, "span", 97);
    \u0275\u0275element(35, "span", 98);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td", 84)(38, "div", 99)(39, "button", 100);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_tr_51_Template_button_click_39_listener() {
      const bank_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEditBank(bank_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 76);
    \u0275\u0275element(41, "path", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "button", 102);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_tr_51_Template_button_click_42_listener() {
      const bank_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleBank(bank_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 76);
    \u0275\u0275template(44, AgentBanksComponent_ng_container_17_div_43_tr_51__svg_path_44_Template, 1, 0, "path", 103)(45, AgentBanksComponent_ng_container_17_div_43_tr_51__svg_path_45_Template, 1, 0, "path", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "button", 105);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_tr_51_Template_button_click_46_listener() {
      const bank_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteBank(bank_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 76);
    \u0275\u0275element(48, "path", 106);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_18_0;
    const bank_r9 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(bank_r9.bankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bank_r9.bankCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", bank_r9.paymentMethodId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !bank_r9.paymentMethodId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bank_r9.city);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bank_r9.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !bank_r9.city && !bank_r9.country);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bank_r9.swiftCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bank_r9.routingNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !bank_r9.swiftCode && !bank_r9.routingNumber);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bank_r9.contactPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bank_r9.contactEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !bank_r9.contactPhone && !bank_r9.contactEmail);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ((tmp_17_0 = bank_r9.branches == null ? null : bank_r9.branches.length) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : 0) > 0 ? "bg-violet-50 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/30" : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-600");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (tmp_18_0 = bank_r9.branches == null ? null : bank_r9.branches.length) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : 0, " branch", ((tmp_18_0 = bank_r9.branches == null ? null : bank_r9.branches.length) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : 0) !== 1 ? "es" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", bank_r9.isActive ? "bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-400" : "bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", bank_r9.isActive ? "bg-success-500" : "bg-surface-400 dark:bg-surface-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bank_r9.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", bank_r9.isActive ? "text-surface-500 dark:text-surface-400 hover:text-warning-600 dark:hover:text-warning-400 hover:bg-warning-50 dark:hover:bg-warning-900/20" : "text-surface-500 dark:text-surface-400 hover:text-success-600 dark:hover:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20");
    \u0275\u0275attribute("aria-label", bank_r9.isActive ? "Deactivate bank" : "Activate bank");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", bank_r9.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !bank_r9.isActive);
  }
}
function AgentBanksComponent_ng_container_17_div_43_div_52_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 121);
    \u0275\u0275text(1, ' Click "Add Bank" to add the first bank account for this agent. ');
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_ng_container_17_div_43_div_52_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 122);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_div_52_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(1, "Clear filters");
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_ng_container_17_div_43_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115)(2, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 117);
    \u0275\u0275element(4, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 118);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AgentBanksComponent_ng_container_17_div_43_div_52_p_7_Template, 2, 0, "p", 119)(8, AgentBanksComponent_ng_container_17_div_43_div_52_button_8_Template, 2, 0, "button", 120);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.hasActiveFilters ? "No banks match your filters" : "No bank accounts yet", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.hasActiveFilters);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasActiveFilters);
  }
}
function AgentBanksComponent_ng_container_17_div_43_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123)(1, "span", 124);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 125)(4, "label", 124);
    \u0275\u0275text(5, "Rows:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 126);
    \u0275\u0275listener("ngModelChange", function AgentBanksComponent_ng_container_17_div_43_div_53_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onPageSizeChange($event));
    });
    \u0275\u0275elementStart(7, "option", 78);
    \u0275\u0275text(8, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 78);
    \u0275\u0275text(10, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 78);
    \u0275\u0275text(12, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 78);
    \u0275\u0275text(14, "100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 99)(16, "button", 127);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_div_53_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(0));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 76);
    \u0275\u0275element(18, "path", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 129);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_div_53_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.pageIndex - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 76);
    \u0275\u0275element(21, "path", 130);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 131);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_div_53_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.pageIndex + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 76);
    \u0275\u0275element(24, "path", 132);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 133);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_div_53_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.totalPages - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 76);
    \u0275\u0275element(27, "path", 134);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r2.totalCount, " banks \xB7 Page ", ctx_r2.pageIndex + 1, " of ", ctx_r2.totalPages, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 100);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.pageIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.pageIndex >= ctx_r2.totalPages - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.pageIndex >= ctx_r2.totalPages - 1);
  }
}
function AgentBanksComponent_ng_container_17_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 7);
    \u0275\u0275element(4, "circle", 52)(5, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_ng_container_17_div_43_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.searchString, $event) || (ctx_r2.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AgentBanksComponent_ng_container_17_div_43_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AgentBanksComponent_ng_container_17_div_43_button_7_Template, 3, 0, "button", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 56)(9, "select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_ng_container_17_div_43_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.filterCountry, $event) || (ctx_r2.filterCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AgentBanksComponent_ng_container_17_div_43_Template_select_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onFilterChange());
    });
    \u0275\u0275elementStart(10, "option", 58);
    \u0275\u0275text(11, "All Countries");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AgentBanksComponent_ng_container_17_div_43_option_12_Template, 2, 2, "option", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_ng_container_17_div_43_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.filterPaymentMethodId, $event) || (ctx_r2.filterPaymentMethodId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AgentBanksComponent_ng_container_17_div_43_Template_select_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onFilterChange());
    });
    \u0275\u0275elementStart(14, "option", 58);
    \u0275\u0275text(15, "All Methods");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, AgentBanksComponent_ng_container_17_div_43_option_16_Template, 2, 2, "option", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_ng_container_17_div_43_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.filterStatus, $event) || (ctx_r2.filterStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AgentBanksComponent_ng_container_17_div_43_Template_select_ngModelChange_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onFilterChange());
    });
    \u0275\u0275elementStart(18, "option", 58);
    \u0275\u0275text(19, "All Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 60);
    \u0275\u0275text(21, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 61);
    \u0275\u0275text(23, "Inactive");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, AgentBanksComponent_ng_container_17_div_43_button_24_Template, 4, 0, "button", 62);
    \u0275\u0275elementStart(25, "button", 63);
    \u0275\u0275listener("click", function AgentBanksComponent_ng_container_17_div_43_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openAddBank());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 64);
    \u0275\u0275element(27, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Add Bank ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, AgentBanksComponent_ng_container_17_div_43_div_29_Template, 4, 2, "div", 66);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 67)(31, "table", 68)(32, "thead")(33, "tr", 69)(34, "th", 70);
    \u0275\u0275text(35, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 70);
    \u0275\u0275text(37, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 70);
    \u0275\u0275text(39, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 70);
    \u0275\u0275text(41, "Swift / Routing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 70);
    \u0275\u0275text(43, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 70);
    \u0275\u0275text(45, "Branches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 70);
    \u0275\u0275text(47, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 70);
    \u0275\u0275text(49, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "tbody", 71);
    \u0275\u0275template(51, AgentBanksComponent_ng_container_17_div_43_tr_51_Template, 49, 23, "tr", 72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(52, AgentBanksComponent_ng_container_17_div_43_div_52_Template, 9, 3, "div", 73)(53, AgentBanksComponent_ng_container_17_div_43_div_53_Template, 28, 12, "div", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.searchString);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.uniqueCountries);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterPaymentMethodId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.paymentMethods);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterStatus);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.hasActiveFilters);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.hasActiveFilters);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r2.banks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.banks.length && !ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.totalCount > 0);
  }
}
function AgentBanksComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 25)(2, "div", 26)(3, "div", 27)(4, "div")(5, "p", 28);
    \u0275\u0275text(6, "Total Banks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 31);
    \u0275\u0275element(11, "path", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 26)(13, "div", 27)(14, "div")(15, "p", 28);
    \u0275\u0275text(16, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 32);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 34);
    \u0275\u0275element(21, "path", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 26)(23, "div", 27)(24, "div")(25, "p", 28);
    \u0275\u0275text(26, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 36);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 38);
    \u0275\u0275element(31, "path", 39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 26)(33, "div", 27)(34, "div")(35, "p", 28);
    \u0275\u0275text(36, "Branches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 29);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 41);
    \u0275\u0275element(41, "path", 42);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(42, AgentBanksComponent_ng_container_17_div_42_Template, 4, 0, "div", 43)(43, AgentBanksComponent_ng_container_17_div_43_Template, 54, 12, "div", 44);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.totalActive + ctx_r2.totalInactive);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.totalActive);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.totalInactive);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.totalBranches);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading);
  }
}
function AgentBanksComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275listener("click", function AgentBanksComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeBankModal());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_div_19_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 165);
    \u0275\u0275element(2, "path", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.bankFormError, " ");
  }
}
function AgentBanksComponent_div_19_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r14 = ctx.$implicit;
    \u0275\u0275property("ngValue", pm_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r14.name);
  }
}
function AgentBanksComponent_div_19__svg_svg_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 167);
    \u0275\u0275element(1, "circle", 47)(2, "path", 48);
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_div_19__svg_svg_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 76);
    \u0275\u0275element(1, "path", 168);
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136)(1, "div", 137)(2, "div")(3, "h3", 138);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 139);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 140);
    \u0275\u0275listener("click", function AgentBanksComponent_div_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeBankModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 141);
    \u0275\u0275element(9, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 142);
    \u0275\u0275template(11, AgentBanksComponent_div_19_div_11_Template, 4, 1, "div", 143);
    \u0275\u0275elementStart(12, "div", 144)(13, "div", 145)(14, "label", 146);
    \u0275\u0275text(15, "Bank Name ");
    \u0275\u0275elementStart(16, "span", 147);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 148);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_19_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bankForm.bankName, $event) || (ctx_r2.bankForm.bankName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 146);
    \u0275\u0275text(21, "Payment Method ");
    \u0275\u0275elementStart(22, "span", 147);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "select", 149);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_19_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bankForm.paymentMethodId, $event) || (ctx_r2.bankForm.paymentMethodId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 10);
    \u0275\u0275text(26, "\u2014 Select method \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, AgentBanksComponent_div_19_option_27_Template, 2, 2, "option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div")(29, "label", 146);
    \u0275\u0275text(30, "Bank Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 150);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_19_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bankForm.bankCode, $event) || (ctx_r2.bankForm.bankCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 146);
    \u0275\u0275text(34, "SWIFT / BIC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 151);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_19_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bankForm.swiftCode, $event) || (ctx_r2.bankForm.swiftCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div")(37, "label", 146);
    \u0275\u0275text(38, "Routing / ABA Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 152);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_19_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bankForm.routingNumber, $event) || (ctx_r2.bankForm.routingNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div")(41, "label", 146);
    \u0275\u0275text(42, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_19_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bankForm.country, $event) || (ctx_r2.bankForm.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div")(45, "label", 146);
    \u0275\u0275text(46, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_19_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bankForm.city, $event) || (ctx_r2.bankForm.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 145)(49, "label", 146);
    \u0275\u0275text(50, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 155);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_19_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bankForm.address, $event) || (ctx_r2.bankForm.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div")(53, "label", 146);
    \u0275\u0275text(54, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 156);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_19_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bankForm.contactPhone, $event) || (ctx_r2.bankForm.contactPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div")(57, "label", 146);
    \u0275\u0275text(58, "Contact Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 157);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_19_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bankForm.contactEmail, $event) || (ctx_r2.bankForm.contactEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 145)(61, "label", 146);
    \u0275\u0275text(62, "Additional Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "textarea", 158);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_19_Template_textarea_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bankForm.additionalInfo, $event) || (ctx_r2.bankForm.additionalInfo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 159)(65, "button", 160);
    \u0275\u0275listener("click", function AgentBanksComponent_div_19_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeBankModal());
    });
    \u0275\u0275text(66, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 161);
    \u0275\u0275listener("click", function AgentBanksComponent_div_19_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveBank());
    });
    \u0275\u0275template(68, AgentBanksComponent_div_19__svg_svg_68_Template, 3, 0, "svg", 162)(69, AgentBanksComponent_div_19__svg_svg_69_Template, 2, 0, "svg", 163);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditingBank ? "Edit Bank Account" : "Add Bank Account", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedAgent == null ? null : ctx_r2.selectedAgent.businessName, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.bankFormError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bankForm.bankName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bankForm.paymentMethodId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.paymentMethods);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bankForm.bankCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bankForm.swiftCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bankForm.routingNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bankForm.country);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bankForm.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bankForm.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bankForm.contactPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bankForm.contactEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bankForm.additionalInfo);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.savingBank);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.savingBank);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.savingBank);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditingBank ? "Save Changes" : "Add Bank", " ");
  }
}
function AgentBanksComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275listener("click", function AgentBanksComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeBranchModal());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_div_21_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 175);
    \u0275\u0275listener("click", function AgentBanksComponent_div_21_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openAddBranch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 176);
    \u0275\u0275element(2, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add Branch ");
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_div_21_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.branchFormError, " ");
  }
}
function AgentBanksComponent_div_21_div_15__svg_svg_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 192);
    \u0275\u0275element(1, "circle", 47)(2, "path", 48);
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_div_21_div_15__svg_svg_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 80);
    \u0275\u0275element(1, "path", 168);
    \u0275\u0275elementEnd();
  }
}
function AgentBanksComponent_div_21_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 177)(1, "h4", 178);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AgentBanksComponent_div_21_div_15_div_3_Template, 2, 1, "div", 179);
    \u0275\u0275elementStart(4, "div", 180)(5, "div", 145)(6, "label", 181);
    \u0275\u0275text(7, "Branch Name ");
    \u0275\u0275elementStart(8, "span", 147);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 182);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_21_div_15_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.branchForm.branchName, $event) || (ctx_r2.branchForm.branchName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 181);
    \u0275\u0275text(13, "Branch Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 183);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_21_div_15_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.branchForm.branchCode, $event) || (ctx_r2.branchForm.branchCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 181);
    \u0275\u0275text(17, "SWIFT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 184);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_21_div_15_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.branchForm.swiftCode, $event) || (ctx_r2.branchForm.swiftCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 181);
    \u0275\u0275text(21, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 156);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_21_div_15_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.branchForm.contactPhone, $event) || (ctx_r2.branchForm.contactPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 181);
    \u0275\u0275text(25, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 185);
    \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_div_21_div_15_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.branchForm.address, $event) || (ctx_r2.branchForm.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 186)(28, "button", 187);
    \u0275\u0275listener("click", function AgentBanksComponent_div_21_div_15_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeBranchForm());
    });
    \u0275\u0275text(29, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 188);
    \u0275\u0275listener("click", function AgentBanksComponent_div_21_div_15_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveBranch());
    });
    \u0275\u0275template(31, AgentBanksComponent_div_21_div_15__svg_svg_31_Template, 3, 0, "svg", 189)(32, AgentBanksComponent_div_21_div_15__svg_svg_32_Template, 2, 0, "svg", 190);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditingBranch ? "Edit Branch" : "New Branch", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.branchFormError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.branchForm.branchName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.branchForm.branchCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.branchForm.swiftCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.branchForm.contactPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.branchForm.address);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.savingBranch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.savingBranch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.savingBranch);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditingBranch ? "Save Changes" : "Add Branch", " ");
  }
}
function AgentBanksComponent_div_21_div_16_div_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 209);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", branch_r20.branchCode, " ");
  }
}
function AgentBanksComponent_div_21_div_16_div_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(branch_r20.swiftCode);
  }
}
function AgentBanksComponent_div_21_div_16_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(branch_r20.contactPhone);
  }
}
function AgentBanksComponent_div_21_div_16_div_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(branch_r20.address);
  }
}
function AgentBanksComponent_div_21_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 195)(1, "div", 196)(2, "div", 197);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 198);
    \u0275\u0275element(4, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 199)(6, "div", 200)(7, "p", 201);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AgentBanksComponent_div_21_div_16_div_2_span_9_Template, 2, 1, "span", 202);
    \u0275\u0275elementStart(10, "span", 203);
    \u0275\u0275element(11, "span", 98);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 204);
    \u0275\u0275template(14, AgentBanksComponent_div_21_div_16_div_2_span_14_Template, 2, 1, "span", 88)(15, AgentBanksComponent_div_21_div_16_div_2_span_15_Template, 2, 1, "span", 205)(16, AgentBanksComponent_div_21_div_16_div_2_span_16_Template, 2, 1, "span", 205);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 206)(18, "button", 207);
    \u0275\u0275listener("click", function AgentBanksComponent_div_21_div_16_div_2_Template_button_click_18_listener() {
      const branch_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEditBranch(branch_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 76);
    \u0275\u0275element(20, "path", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 208);
    \u0275\u0275listener("click", function AgentBanksComponent_div_21_div_16_div_2_Template_button_click_21_listener() {
      const branch_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteBranch(branch_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 76);
    \u0275\u0275element(23, "path", 106);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const branch_r20 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(branch_r20.branchName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", branch_r20.branchCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", branch_r20.isActive ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-surface-200 text-surface-600 dark:bg-surface-700 dark:text-surface-400");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", branch_r20.isActive ? "bg-success-500" : "bg-surface-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", branch_r20.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", branch_r20.swiftCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", branch_r20.contactPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", branch_r20.address);
  }
}
function AgentBanksComponent_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 193);
    \u0275\u0275template(2, AgentBanksComponent_div_21_div_16_div_2_Template, 24, 8, "div", 194);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.selectedBank.branches);
  }
}
function AgentBanksComponent_div_21_ng_template_17_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 211)(1, "div", 115)(2, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 117);
    \u0275\u0275element(4, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 118);
    \u0275\u0275text(6, "No branches yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 121);
    \u0275\u0275text(8, 'Click "Add Branch" to add the first branch for this bank.');
    \u0275\u0275elementEnd()()();
  }
}
function AgentBanksComponent_div_21_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AgentBanksComponent_div_21_ng_template_17_div_0_Template, 9, 0, "div", 210);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r2.showBranchForm);
  }
}
function AgentBanksComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 169)(1, "div", 137)(2, "div")(3, "h3", 170);
    \u0275\u0275text(4, "Branch Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 171);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 80);
    \u0275\u0275element(7, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 125);
    \u0275\u0275template(10, AgentBanksComponent_div_21_button_10_Template, 4, 0, "button", 172);
    \u0275\u0275elementStart(11, "button", 140);
    \u0275\u0275listener("click", function AgentBanksComponent_div_21_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeBranchModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 141);
    \u0275\u0275element(13, "path", 77);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 142);
    \u0275\u0275template(15, AgentBanksComponent_div_21_div_15_Template, 34, 11, "div", 173)(16, AgentBanksComponent_div_21_div_16_Template, 3, 1, "div", 174)(17, AgentBanksComponent_div_21_ng_template_17_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noBranches_r21 = \u0275\u0275reference(18);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedBank.bankName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.showBranchForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.showBranchForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedBank.branches && ctx_r2.selectedBank.branches.length > 0)("ngIfElse", noBranches_r21);
  }
}
function emptyBankForm() {
  return {
    agentId: null,
    paymentMethodId: null,
    bankName: "",
    bankCode: null,
    swiftCode: null,
    routingNumber: null,
    country: null,
    city: null,
    address: null,
    contactPhone: null,
    contactEmail: null,
    additionalInfo: null
  };
}
function emptyBranchForm() {
  return { agentBankId: null, branchName: "", branchCode: null, swiftCode: null, address: null, contactPhone: null };
}
var AgentBanksComponent = class _AgentBanksComponent {
  get selectedAgent() {
    return this.agents.find((a) => a.id === this.selectedAgentId) ?? null;
  }
  get uniqueCountries() {
    const set = new Set(this.allBanksCache.map((b) => b.country).filter(Boolean));
    return Array.from(set).sort();
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.totalCount / this.pageSize));
  }
  constructor(api, notify, confirmDelete, route) {
    this.api = api;
    this.notify = notify;
    this.confirmDelete = confirmDelete;
    this.route = route;
    this.Math = Math;
    this.agents = [];
    this.paymentMethods = [];
    this.loadingAgents = true;
    this.selectedAgentId = null;
    this.banks = [];
    this.totalCount = 0;
    this.loading = false;
    this.allBanksCache = [];
    this.searchString = "";
    this.filterCountry = "";
    this.filterPaymentMethodId = "";
    this.filterStatus = "";
    this.searchSubject = new Subject();
    this.destroy$ = new Subject();
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalActive = 0;
    this.totalInactive = 0;
    this.totalBranches = 0;
    this.showBankModal = false;
    this.isEditingBank = false;
    this.editingBankId = null;
    this.bankForm = emptyBankForm();
    this.bankFormError = "";
    this.savingBank = false;
    this.showBranchModal = false;
    this.selectedBank = null;
    this.showBranchForm = false;
    this.isEditingBranch = false;
    this.editingBranchId = null;
    this.branchForm = emptyBranchForm();
    this.branchFormError = "";
    this.savingBranch = false;
  }
  ngOnInit() {
    this.searchSubject.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(() => {
      this.pageIndex = 0;
      this.loadBanks();
    });
    this.api.getAgents().subscribe((r) => {
      if (r?.success && r.data) {
        this.agents = r.data;
        const qpId = this.route.snapshot.queryParamMap.get("agentId");
        if (qpId) {
          this.selectedAgentId = +qpId;
          this.loadBanks();
          this.loadAllBanksForStats();
        }
      }
      this.loadingAgents = false;
    });
    this.api.getPaymentMethods().subscribe((r) => {
      if (r?.success && r.data)
        this.paymentMethods = r.data;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onAgentChange() {
    this.pageIndex = 0;
    this.searchString = "";
    this.filterCountry = "";
    this.filterPaymentMethodId = "";
    this.filterStatus = "";
    this.banks = [];
    this.totalCount = 0;
    this.totalActive = 0;
    this.totalInactive = 0;
    this.totalBranches = 0;
    this.allBanksCache = [];
    if (this.selectedAgentId) {
      this.loadBanks();
      this.loadAllBanksForStats();
    }
  }
  loadAllBanksForStats() {
    if (!this.selectedAgentId)
      return;
    this.api.getAgentBanksPaged(this.selectedAgentId, { page: 1, pageSize: 1e3 }).subscribe((r) => {
      if (r?.success && r.data) {
        const all = r.data.items;
        this.allBanksCache = all;
        this.totalActive = all.filter((b) => b.isActive).length;
        this.totalInactive = all.filter((b) => !b.isActive).length;
        this.totalBranches = all.reduce((acc, b) => acc + (b.branches?.length ?? 0), 0);
      }
    });
  }
  loadBanks() {
    if (!this.selectedAgentId)
      return;
    this.loading = true;
    const isActive = this.filterStatus === "active" ? true : this.filterStatus === "inactive" ? false : null;
    this.api.getAgentBanksPaged(this.selectedAgentId, {
      page: this.pageIndex + 1,
      pageSize: this.pageSize,
      search: this.searchString || void 0,
      country: this.filterCountry || void 0,
      paymentMethodId: this.filterPaymentMethodId ? +this.filterPaymentMethodId : void 0,
      isActive
    }).subscribe({
      next: (r) => {
        if (r?.success && r.data) {
          this.banks = r.data.items;
          this.totalCount = r.data.totalCount;
        } else {
          this.banks = [];
          this.totalCount = 0;
        }
        this.loading = false;
      },
      error: () => {
        this.banks = [];
        this.totalCount = 0;
        this.loading = false;
        this.notify.error("Failed to load banks.");
      }
    });
  }
  onSearchChange() {
    this.searchSubject.next(this.searchString);
  }
  onFilterChange() {
    this.pageIndex = 0;
    this.loadBanks();
  }
  goToPage(page) {
    if (page >= 0 && page < this.totalPages) {
      this.pageIndex = page;
      this.loadBanks();
    }
  }
  onPageSizeChange(size) {
    this.pageSize = +size;
    this.pageIndex = 0;
    this.loadBanks();
  }
  clearFilters() {
    this.searchString = "";
    this.filterCountry = "";
    this.filterPaymentMethodId = "";
    this.filterStatus = "";
    this.pageIndex = 0;
    this.loadBanks();
  }
  get hasActiveFilters() {
    return !!(this.searchString || this.filterCountry || this.filterPaymentMethodId || this.filterStatus);
  }
  // ─── Bank CRUD ────────────────────────────────────────────────────────────
  openAddBank() {
    this.isEditingBank = false;
    this.editingBankId = null;
    this.bankForm = __spreadProps(__spreadValues({}, emptyBankForm()), { agentId: this.selectedAgentId, country: this.selectedAgent?.country ?? null });
    this.bankFormError = "";
    this.showBankModal = true;
  }
  openEditBank(bank) {
    this.isEditingBank = true;
    this.editingBankId = bank.id;
    this.bankForm = {
      agentId: bank.agentId,
      paymentMethodId: bank.paymentMethodId ?? null,
      bankName: bank.bankName,
      bankCode: bank.bankCode ?? null,
      swiftCode: bank.swiftCode ?? null,
      routingNumber: bank.routingNumber ?? null,
      country: bank.country ?? null,
      city: bank.city ?? null,
      address: bank.address ?? null,
      contactPhone: bank.contactPhone ?? null,
      contactEmail: bank.contactEmail ?? null,
      additionalInfo: bank.additionalInfo ?? null
    };
    this.bankFormError = "";
    this.showBankModal = true;
  }
  closeBankModal() {
    this.showBankModal = false;
  }
  saveBank() {
    this.bankFormError = "";
    if (!this.bankForm.bankName?.trim()) {
      this.bankFormError = "Bank name is required.";
      return;
    }
    if (!this.bankForm.paymentMethodId) {
      this.bankFormError = "Payment method is required.";
      return;
    }
    this.savingBank = true;
    const payload = __spreadValues({}, this.bankForm);
    if (this.isEditingBank && this.editingBankId != null) {
      this.api.updateAgentBank(this.editingBankId, payload).subscribe({
        next: (r) => {
          if (r?.success) {
            this.notify.success("Bank updated.");
            this.closeBankModal();
            this.refreshAfterChange();
          } else {
            this.bankFormError = r?.message || "Failed to update bank.";
          }
          this.savingBank = false;
        },
        error: () => {
          this.bankFormError = "Server error.";
          this.savingBank = false;
        }
      });
    } else {
      this.api.createAgentBank(payload).subscribe({
        next: (r) => {
          if (r?.success) {
            this.notify.success("Bank added successfully.");
            this.closeBankModal();
            this.refreshAfterChange();
          } else {
            this.bankFormError = r?.message || "Failed to add bank.";
          }
          this.savingBank = false;
        },
        error: () => {
          this.bankFormError = "Server error.";
          this.savingBank = false;
        }
      });
    }
  }
  toggleBank(bank) {
    this.api.toggleAgentBank(bank.id).subscribe((r) => {
      if (r?.success) {
        bank.isActive = !bank.isActive;
        this.notify.success(bank.isActive ? `${bank.bankName} activated.` : `${bank.bankName} deactivated.`);
        this.loadAllBanksForStats();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  deleteBank(bank) {
    this.confirmDelete.confirm(bank.bankName).then(() => {
      this.api.deleteAgentBank(bank.id).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Bank deleted.");
          this.refreshAfterChange();
        } else {
          this.notify.error(r?.message || "Failed to delete bank.");
        }
      });
    }).catch(() => {
    });
  }
  refreshAfterChange() {
    this.loadBanks();
    this.loadAllBanksForStats();
  }
  // ─── Branch management ────────────────────────────────────────────────────
  openBranchManagement(bank) {
    this.selectedBank = bank;
    this.showBranchForm = false;
    this.showBranchModal = true;
  }
  closeBranchModal() {
    this.showBranchModal = false;
    this.selectedBank = null;
  }
  openAddBranch() {
    this.isEditingBranch = false;
    this.editingBranchId = null;
    this.branchForm = __spreadProps(__spreadValues({}, emptyBranchForm()), { agentBankId: this.selectedBank?.id ?? null });
    this.branchFormError = "";
    this.showBranchForm = true;
  }
  openEditBranch(branch) {
    this.isEditingBranch = true;
    this.editingBranchId = branch.id;
    this.branchForm = {
      agentBankId: branch.agentBankId,
      branchName: branch.branchName,
      branchCode: branch.branchCode ?? null,
      swiftCode: branch.swiftCode ?? null,
      address: branch.address ?? null,
      contactPhone: branch.contactPhone ?? null
    };
    this.branchFormError = "";
    this.showBranchForm = true;
  }
  closeBranchForm() {
    this.showBranchForm = false;
  }
  saveBranch() {
    this.branchFormError = "";
    if (!this.branchForm.branchName?.trim()) {
      this.branchFormError = "Branch name is required.";
      return;
    }
    this.savingBranch = true;
    const payload = __spreadValues({}, this.branchForm);
    if (this.isEditingBranch && this.editingBranchId != null) {
      this.api.updateBankBranch(this.editingBranchId, payload).subscribe({
        next: (r) => {
          if (r?.success) {
            this.notify.success("Branch updated.");
            this.showBranchForm = false;
            this.refreshBanksAndSelectedBank();
          } else {
            this.branchFormError = r?.message || "Failed.";
          }
          this.savingBranch = false;
        },
        error: () => {
          this.branchFormError = "Server error.";
          this.savingBranch = false;
        }
      });
    } else {
      this.api.createBankBranch(payload).subscribe({
        next: (r) => {
          if (r?.success) {
            this.notify.success("Branch added.");
            this.showBranchForm = false;
            this.refreshBanksAndSelectedBank();
          } else {
            this.branchFormError = r?.message || "Failed.";
          }
          this.savingBranch = false;
        },
        error: () => {
          this.branchFormError = "Server error.";
          this.savingBranch = false;
        }
      });
    }
  }
  deleteBranch(branch) {
    this.confirmDelete.confirm(branch.branchName).then(() => {
      this.api.deleteBankBranch(branch.id).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Branch deleted.");
          this.refreshBanksAndSelectedBank();
        } else {
          this.notify.error(r?.message || "Failed.");
        }
      });
    }).catch(() => {
    });
  }
  refreshBanksAndSelectedBank() {
    if (!this.selectedAgentId)
      return;
    this.api.getAgentBanksPaged(this.selectedAgentId, { page: this.pageIndex + 1, pageSize: this.pageSize }).subscribe((r) => {
      if (r?.success && r.data) {
        this.banks = r.data.items;
        this.totalCount = r.data.totalCount;
        if (this.selectedBank) {
          this.selectedBank = this.banks.find((b) => b.id === this.selectedBank.id) ?? this.selectedBank;
        }
      }
    });
    this.loadAllBanksForStats();
  }
  getPaymentMethodName(id) {
    if (!id)
      return "-";
    return this.paymentMethods.find((p) => p.id === id)?.name ?? String(id);
  }
  static {
    this.\u0275fac = function AgentBanksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentBanksComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ConfirmDeleteService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentBanksComponent, selectors: [["app-agent-banks"]], decls: 22, vars: 10, consts: [["noBranches", ""], [1, "flex", "flex-col", "sm:flex-row", "sm:items-start", "sm:justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "mt-1", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-3"], [1, "text-sm", "font-medium", "text-surface-600", "dark:text-surface-400", "whitespace-nowrap"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400", "pointer-events-none"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"], [1, "pl-9", "pr-8", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", "min-w-[220px]", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "rounded-2xl border-2 border-dashed border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-16 text-center", 4, "ngIf"], [4, "ngIf"], ["class", "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "bank-form-title", "class", "fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-2xl", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "branch-modal-title", "class", "fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-2xl", 4, "ngIf"], [3, "ngValue"], [1, "rounded-2xl", "border-2", "border-dashed", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-16", "text-center"], [1, "flex", "flex-col", "items-center", "gap-4"], [1, "w-16", "h-16", "rounded-2xl", "bg-surface-100", "dark:bg-surface-700", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"], [1, "text-base", "font-semibold", "text-surface-700", "dark:text-surface-300"], [1, "mt-1", "text-sm", "text-surface-400", "dark:text-surface-500"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-6"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-4", "shadow-soft"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "uppercase", "tracking-wide"], [1, "mt-1", "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "w-10", "h-10", "rounded-xl", "bg-brand-50", "dark:bg-brand-900/20", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-brand-600", "dark:text-brand-400"], [1, "mt-1", "text-2xl", "font-bold", "text-success-600", "dark:text-success-400"], [1, "w-10", "h-10", "rounded-xl", "bg-success-50", "dark:bg-success-900/20", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-success-600", "dark:text-success-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "mt-1", "text-2xl", "font-bold", "text-surface-600", "dark:text-surface-400"], [1, "w-10", "h-10", "rounded-xl", "bg-surface-100", "dark:bg-surface-700", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-surface-500", "dark:text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"], [1, "w-10", "h-10", "rounded-xl", "bg-violet-50", "dark:bg-violet-900/20", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-violet-600", "dark:text-violet-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-soft"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "gap-3", "p-4", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "relative", "flex-1", "min-w-0"], ["cx", "11", "cy", "11", "r", "8"], ["stroke-linecap", "round", "d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search by bank name, code, city\u2026", 1, "w-full", "pl-9", "pr-9", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["class", "absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 transition", 3, "click", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "active"], ["value", "inactive"], ["class", "inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm", 3, "click", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-xl", "bg-brand-600", "hover:bg-brand-700", "text-white", "transition", "text-sm", "font-medium", "shadow-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], ["class", "px-5 py-2 border-b border-surface-100 dark:border-surface-700 bg-brand-50 dark:bg-brand-900/10", 4, "ngIf"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "bg-surface-50", "dark:bg-surface-900/50", "border-b", "border-surface-200", "dark:border-surface-700", "text-surface-500", "dark:text-surface-400", "text-xs", "tracking-wide", "uppercase"], ["scope", "col", 1, "px-4", "py-3", "font-semibold"], [1, "divide-y", "divide-surface-100", "dark:divide-surface-700/50"], ["class", "hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors group", 4, "ngFor", "ngForOf"], ["class", "text-center py-14", 4, "ngIf"], ["class", "flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 border-t border-surface-200 dark:border-surface-700", 4, "ngIf"], [1, "absolute", "right-2.5", "top-1/2", "-translate-y-1/2", "p-0.5", "rounded", "text-surface-400", "hover:text-surface-600", "dark:hover:text-surface-200", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [3, "value"], [1, "inline-flex", "items-center", "gap-1", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], [1, "px-5", "py-2", "border-b", "border-surface-100", "dark:border-surface-700", "bg-brand-50", "dark:bg-brand-900/10"], [1, "text-xs", "text-brand-700", "dark:text-brand-400"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors", "group"], [1, "px-4", "py-3"], [1, "w-8", "h-8", "rounded-lg", "bg-brand-50", "dark:bg-brand-900/30", "flex", "items-center", "justify-center", "shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-brand-600", "dark:text-brand-400"], [1, "font-semibold", "text-surface-900", "dark:text-surface-100"], ["class", "text-xs text-surface-500 dark:text-surface-400 font-mono", 4, "ngIf"], ["class", "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300", 4, "ngIf"], ["class", "text-surface-400 text-xs", 4, "ngIf"], [1, "text-surface-800", "dark:text-surface-200", "text-sm"], [1, "space-y-0.5"], ["class", "text-xs font-mono text-surface-700 dark:text-surface-300", 4, "ngIf"], ["class", "text-xs text-surface-600 dark:text-surface-400", 4, "ngIf"], ["class", "text-xs text-surface-600 dark:text-surface-400 truncate max-w-[160px]", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-lg", "text-xs", "font-medium", "transition", 3, "click", "ngClass"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full", 3, "ngClass"], [1, "flex", "items-center", "gap-1"], ["aria-label", "Edit bank", 1, "p-1.5", "rounded-lg", "text-surface-500", "dark:text-surface-400", "hover:text-brand-600", "dark:hover:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "p-1.5", "rounded-lg", "transition", 3, "click", "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", 4, "ngIf"], ["aria-label", "Delete bank", 1, "p-1.5", "rounded-lg", "text-surface-500", "dark:text-surface-400", "hover:text-danger-600", "dark:hover:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "font-mono"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-violet-100", "text-violet-800", "dark:bg-violet-900/30", "dark:text-violet-300"], [1, "text-surface-400", "text-xs"], [1, "text-xs", "font-mono", "text-surface-700", "dark:text-surface-300"], [1, "text-surface-400", "dark:text-surface-500", "mr-1"], [1, "text-xs", "text-surface-600", "dark:text-surface-400"], [1, "text-xs", "text-surface-600", "dark:text-surface-400", "truncate", "max-w-[160px]"], [1, "text-center", "py-14"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "w-12", "h-12", "rounded-xl", "bg-surface-100", "dark:bg-surface-700", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-surface-400"], [1, "text-sm", "font-medium", "text-surface-600", "dark:text-surface-400"], ["class", "text-xs text-surface-400 dark:text-surface-500", 4, "ngIf"], ["class", "text-xs text-brand-600 dark:text-brand-400 hover:underline", 3, "click", 4, "ngIf"], [1, "text-xs", "text-surface-400", "dark:text-surface-500"], [1, "text-xs", "text-brand-600", "dark:text-brand-400", "hover:underline", 3, "click"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3", "px-5", "py-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-2"], [1, "px-2", "py-1", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "text-xs", "outline-none", "focus:ring-2", "focus:ring-brand-500", 3, "ngModelChange", "ngModel"], ["aria-label", "First page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 19l-7-7 7-7m8 14l-7-7 7-7"], ["aria-label", "Previous page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], ["aria-label", "Next page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5l7 7-7 7"], ["aria-label", "Last page", 1, "p-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-600", "dark:text-surface-300", "hover:bg-surface-100", "dark:hover:bg-surface-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 5l7 7-7 7M5 5l7 7-7 7"], [1, "fixed", "inset-0", "z-40", "bg-black/60", "backdrop-blur-sm", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "bank-form-title", 1, "fixed", "z-50", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-2xl"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "sticky", "top-0", "bg-white", "dark:bg-surface-800", "z-10"], ["id", "bank-form-title", 1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mt-0.5"], ["aria-label", "Close dialog", 1, "p-1.5", "rounded-lg", "text-surface-400", "hover:text-surface-600", "dark:hover:text-surface-200", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], [1, "p-6"], ["role", "alert", "class", "mb-5 px-4 py-3 rounded-xl bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 text-sm flex items-start gap-2", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "sm:col-span-2"], [1, "block", "text-xs", "font-semibold", "text-surface-600", "dark:text-surface-400", "mb-1.5"], [1, "text-danger-500"], ["type", "text", "placeholder", "e.g. National Bank of Commerce", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. NBC001", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. NBCTZTZ1", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", "font-mono", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. 021000021", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", "font-mono", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Tanzania", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Dar es Salaam", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Street address", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+255 22 211 0000", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "banking@example.com", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Any extra notes or instructions\u2026", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", "resize-none", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "mt-6", "pt-4", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-700", "dark:text-surface-200", "hover:bg-surface-50", "dark:hover:bg-surface-600", "transition", "text-sm", "font-medium", 3, "click"], [1, "inline-flex", "items-center", "gap-1.5", "px-5", "py-2", "rounded-xl", "bg-brand-600", "hover:bg-brand-700", "text-white", "transition", "text-sm", "font-medium", "shadow-sm", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["class", "animate-spin h-4 w-4", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 4, "ngIf"], ["role", "alert", 1, "mb-5", "px-4", "py-3", "rounded-xl", "bg-danger-50", "dark:bg-danger-900/20", "border", "border-danger-200", "dark:border-danger-800", "text-danger-700", "dark:text-danger-400", "text-sm", "flex", "items-start", "gap-2"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mt-0.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "branch-modal-title", 1, "fixed", "z-50", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "w-full", "max-w-3xl", "max-h-[90vh]", "overflow-y-auto", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-2xl"], ["id", "branch-modal-title", 1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mt-0.5", "flex", "items-center", "gap-1.5"], ["class", "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition text-xs font-medium", 3, "click", 4, "ngIf"], ["class", "mb-6 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-900/10 p-5", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "text-white", "transition", "text-xs", "font-medium", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], [1, "mb-6", "rounded-xl", "border", "border-brand-200", "dark:border-brand-800", "bg-brand-50", "dark:bg-brand-900/10", "p-5"], [1, "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-4"], ["role", "alert", "class", "mb-4 px-3 py-2.5 rounded-lg bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 text-xs", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-3"], [1, "block", "text-xs", "font-semibold", "text-surface-600", "dark:text-surface-400", "mb-1"], ["type", "text", "placeholder", "e.g. Main Branch", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. NBC-MAIN", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Branch SWIFT code", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", "font-mono", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Branch address", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:ring-2", "focus:ring-brand-500", "focus:border-brand-500", "outline-none", "transition", "text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-2", "mt-4"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-700", "dark:text-surface-200", "hover:bg-surface-50", "dark:hover:bg-surface-600", "transition", "text-xs", "font-medium", 3, "click"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-1.5", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "text-white", "transition", "text-xs", "font-medium", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["class", "animate-spin h-3.5 w-3.5", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-3.5 h-3.5", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 4, "ngIf"], ["role", "alert", 1, "mb-4", "px-3", "py-2.5", "rounded-lg", "bg-danger-50", "dark:bg-danger-900/20", "border", "border-danger-200", "dark:border-danger-800", "text-danger-700", "dark:text-danger-400", "text-xs"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-3.5", "w-3.5"], [1, "space-y-3"], ["class", "flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/40 hover:bg-surface-100 dark:hover:bg-surface-700/40 transition-colors group", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "gap-3", "p-4", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "bg-surface-50", "dark:bg-surface-900/40", "hover:bg-surface-100", "dark:hover:bg-surface-700/40", "transition-colors", "group"], [1, "flex", "items-start", "gap-3", "flex-1", "min-w-0"], [1, "w-8", "h-8", "rounded-lg", "bg-violet-100", "dark:bg-violet-900/30", "flex", "items-center", "justify-center", "shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-violet-600", "dark:text-violet-400"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-2", "flex-wrap"], [1, "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100"], ["class", "text-xs font-mono px-1.5 py-0.5 rounded bg-surface-200 dark:bg-surface-700 text-surface-600 dark:text-surface-400", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "flex", "flex-wrap", "gap-x-4", "gap-y-0.5", "mt-1"], ["class", "text-xs text-surface-500 dark:text-surface-400", 4, "ngIf"], [1, "flex", "items-center", "gap-1", "shrink-0"], ["aria-label", "Edit branch", 1, "p-1.5", "rounded-lg", "text-surface-500", "dark:text-surface-400", "hover:text-brand-600", "dark:hover:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition", 3, "click"], ["aria-label", "Delete branch", 1, "p-1.5", "rounded-lg", "text-surface-500", "dark:text-surface-400", "hover:text-danger-600", "dark:hover:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition", 3, "click"], [1, "text-xs", "font-mono", "px-1.5", "py-0.5", "rounded", "bg-surface-200", "dark:bg-surface-700", "text-surface-600", "dark:text-surface-400"], ["class", "text-center py-10", 4, "ngIf"], [1, "text-center", "py-10"]], template: function AgentBanksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div")(2, "h2", 2);
        \u0275\u0275text(3, "Agent Bank Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Manage payout bank accounts and branches per agent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "label", 5);
        \u0275\u0275text(8, "Viewing agent:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 7);
        \u0275\u0275element(11, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AgentBanksComponent_Template_select_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedAgentId, $event) || (ctx.selectedAgentId = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AgentBanksComponent_Template_select_ngModelChange_12_listener() {
          return ctx.onAgentChange();
        });
        \u0275\u0275elementStart(13, "option", 10);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, AgentBanksComponent_option_15_Template, 2, 2, "option", 11);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(16, AgentBanksComponent_div_16_Template, 10, 0, "div", 12)(17, AgentBanksComponent_ng_container_17_Template, 44, 6, "ng-container", 13)(18, AgentBanksComponent_div_18_Template, 1, 0, "div", 14)(19, AgentBanksComponent_div_19_Template, 71, 20, "div", 15)(20, AgentBanksComponent_div_20_Template, 1, 0, "div", 14)(21, AgentBanksComponent_div_21_Template, 19, 5, "div", 16);
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedAgentId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.loadingAgents ? "Loading agents\u2026" : "\u2014 Select agent \u2014");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.agents);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedAgentId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedAgentId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBranchModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBranchModal && ctx.selectedBank);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentBanksComponent, [{
    type: Component,
    args: [{ selector: "app-agent-banks", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- Page Header                                                              -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
  <div>
    <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100">Agent Bank Accounts</h2>
    <p class="mt-1 text-sm text-surface-500 dark:text-surface-400">Manage payout bank accounts and branches per agent</p>
  </div>

  <!-- Agent Selector -->
  <div class="flex items-center gap-3">
    <label class="text-sm font-medium text-surface-600 dark:text-surface-400 whitespace-nowrap">Viewing agent:</label>
    <div class="relative">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
      </svg>
      <select [(ngModel)]="selectedAgentId" (ngModelChange)="onAgentChange()"
        class="pl-9 pr-8 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm min-w-[220px]">
        <option [ngValue]="null" disabled>{{ loadingAgents ? 'Loading agents\u2026' : '\u2014 Select agent \u2014' }}</option>
        <option *ngFor="let a of agents" [ngValue]="a.id">{{ a.businessName }}</option>
      </select>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- No Agent Selected Placeholder                                            -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div *ngIf="!selectedAgentId"
  class="rounded-2xl border-2 border-dashed border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-16 text-center">
  <div class="flex flex-col items-center gap-4">
    <div class="w-16 h-16 rounded-2xl bg-surface-100 dark:bg-surface-700 flex items-center justify-center">
      <svg class="w-8 h-8 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"/>
      </svg>
    </div>
    <div>
      <p class="text-base font-semibold text-surface-700 dark:text-surface-300">Select an agent to view bank accounts</p>
      <p class="mt-1 text-sm text-surface-400 dark:text-surface-500">Use the dropdown above to choose an agent, then manage their payout bank accounts and branches.</p>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- Content (Agent Selected)                                                 -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<ng-container *ngIf="selectedAgentId">

  <!-- Stats Cards -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <!-- Total Banks -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-4 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Total Banks</p>
          <p class="mt-1 text-2xl font-bold text-surface-900 dark:text-surface-100">{{ totalActive + totalInactive }}</p>
        </div>
        <div class="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center">
          <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Active -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-4 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Active</p>
          <p class="mt-1 text-2xl font-bold text-success-600 dark:text-success-400">{{ totalActive }}</p>
        </div>
        <div class="w-10 h-10 rounded-xl bg-success-50 dark:bg-success-900/20 flex items-center justify-center">
          <svg class="w-5 h-5 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Inactive -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-4 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Inactive</p>
          <p class="mt-1 text-2xl font-bold text-surface-600 dark:text-surface-400">{{ totalInactive }}</p>
        </div>
        <div class="w-10 h-10 rounded-xl bg-surface-100 dark:bg-surface-700 flex items-center justify-center">
          <svg class="w-5 h-5 text-surface-500 dark:text-surface-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Total Branches -->
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-4 shadow-soft">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Branches</p>
          <p class="mt-1 text-2xl font-bold text-surface-900 dark:text-surface-100">{{ totalBranches }}</p>
        </div>
        <div class="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center">
          <svg class="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex items-center justify-center py-20">
    <svg class="animate-spin h-10 w-10 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
  </div>

  <!-- Banks Table Card -->
  <div *ngIf="!loading"
    class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-soft">

    <!-- Table toolbar -->
    <div class="flex flex-col lg:flex-row lg:items-center gap-3 p-4 border-b border-surface-200 dark:border-surface-700">

      <!-- Search -->
      <div class="relative flex-1 min-w-0">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/>
          <path stroke-linecap="round" d="m21 21-4.35-4.35"/>
        </svg>
        <input type="text" placeholder="Search by bank name, code, city\u2026"
          [(ngModel)]="searchString" (ngModelChange)="onSearchChange()"
          class="w-full pl-9 pr-9 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
        <button *ngIf="searchString" (click)="searchString=''; onSearchChange()"
          class="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Filters row -->
      <div class="flex flex-wrap items-center gap-2">

        <!-- Country filter -->
        <select [(ngModel)]="filterCountry" (ngModelChange)="onFilterChange()"
          class="px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
          <option value="">All Countries</option>
          <option *ngFor="let c of uniqueCountries" [value]="c">{{ c }}</option>
        </select>

        <!-- Payment method filter -->
        <select [(ngModel)]="filterPaymentMethodId" (ngModelChange)="onFilterChange()"
          class="px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
          <option value="">All Methods</option>
          <option *ngFor="let pm of paymentMethods" [value]="pm.id">{{ pm.name }}</option>
        </select>

        <!-- Status filter -->
        <select [(ngModel)]="filterStatus" (ngModelChange)="onFilterChange()"
          class="px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition text-sm">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <!-- Clear filters -->
        <button *ngIf="hasActiveFilters" (click)="clearFilters()"
          class="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition text-sm">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          Clear
        </button>

        <!-- Add Bank -->
        <button (click)="openAddBank()"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white transition text-sm font-medium shadow-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
          Add Bank
        </button>
      </div>
    </div>

    <!-- Results count -->
    <div *ngIf="hasActiveFilters" class="px-5 py-2 border-b border-surface-100 dark:border-surface-700 bg-brand-50 dark:bg-brand-900/10">
      <p class="text-xs text-brand-700 dark:text-brand-400">
        {{ totalCount }} banks match current filters
        <span *ngIf="searchString"> for "<strong>{{ searchString }}</strong>"</span>
      </p>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead>
          <tr class="bg-surface-50 dark:bg-surface-900/50 border-b border-surface-200 dark:border-surface-700 text-surface-500 dark:text-surface-400 text-xs tracking-wide uppercase">
            <th scope="col" class="px-4 py-3 font-semibold">Bank</th>
            <th scope="col" class="px-4 py-3 font-semibold">Payment Method</th>
            <th scope="col" class="px-4 py-3 font-semibold">Location</th>
            <th scope="col" class="px-4 py-3 font-semibold">Swift / Routing</th>
            <th scope="col" class="px-4 py-3 font-semibold">Contact</th>
            <th scope="col" class="px-4 py-3 font-semibold">Branches</th>
            <th scope="col" class="px-4 py-3 font-semibold">Status</th>
            <th scope="col" class="px-4 py-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-surface-100 dark:divide-surface-700/50">
          <tr *ngFor="let bank of banks"
            class="hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors group">

            <!-- Bank Name + Code -->
            <td class="px-4 py-3">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-surface-900 dark:text-surface-100">{{ bank.bankName }}</p>
                  <p *ngIf="bank.bankCode" class="text-xs text-surface-500 dark:text-surface-400 font-mono">{{ bank.bankCode }}</p>
                </div>
              </div>
            </td>

            <!-- Payment Method -->
            <td class="px-4 py-3">
              <span *ngIf="bank.paymentMethodId"
                class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
                {{ getPaymentMethodName(bank.paymentMethodId) }}
              </span>
              <span *ngIf="!bank.paymentMethodId" class="text-surface-400 text-xs">-</span>
            </td>

            <!-- Location -->
            <td class="px-4 py-3">
              <div class="text-surface-800 dark:text-surface-200 text-sm">
                <span *ngIf="bank.city">{{ bank.city }}, </span>
                <span *ngIf="bank.country">{{ bank.country }}</span>
                <span *ngIf="!bank.city && !bank.country" class="text-surface-400 text-xs">\u2014</span>
              </div>
            </td>

            <!-- Swift / Routing -->
            <td class="px-4 py-3">
              <div class="space-y-0.5">
                <p *ngIf="bank.swiftCode" class="text-xs font-mono text-surface-700 dark:text-surface-300">
                  <span class="text-surface-400 dark:text-surface-500 mr-1">SWIFT</span>{{ bank.swiftCode }}
                </p>
                <p *ngIf="bank.routingNumber" class="text-xs font-mono text-surface-700 dark:text-surface-300">
                  <span class="text-surface-400 dark:text-surface-500 mr-1">ABA</span>{{ bank.routingNumber }}
                </p>
                <span *ngIf="!bank.swiftCode && !bank.routingNumber" class="text-surface-400 text-xs">\u2014</span>
              </div>
            </td>

            <!-- Contact -->
            <td class="px-4 py-3">
              <div class="space-y-0.5">
                <p *ngIf="bank.contactPhone" class="text-xs text-surface-600 dark:text-surface-400">{{ bank.contactPhone }}</p>
                <p *ngIf="bank.contactEmail" class="text-xs text-surface-600 dark:text-surface-400 truncate max-w-[160px]">{{ bank.contactEmail }}</p>
                <span *ngIf="!bank.contactPhone && !bank.contactEmail" class="text-surface-400 text-xs">\u2014</span>
              </div>
            </td>

            <!-- Branch count -->
            <td class="px-4 py-3">
              <button (click)="openBranchManagement(bank)"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition"
                [ngClass]="(bank.branches?.length ?? 0) > 0
                  ? 'bg-violet-50 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/30'
                  : 'bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-600'">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
                </svg>
                {{ bank.branches?.length ?? 0 }} branch{{ (bank.branches?.length ?? 0) !== 1 ? 'es' : '' }}
              </button>
            </td>

            <!-- Status -->
            <td class="px-4 py-3">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                [ngClass]="bank.isActive
                  ? 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-400'
                  : 'bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400'">
                <span class="w-1.5 h-1.5 rounded-full"
                  [ngClass]="bank.isActive ? 'bg-success-500' : 'bg-surface-400 dark:bg-surface-500'"></span>
                {{ bank.isActive ? 'Active' : 'Inactive' }}
              </span>
            </td>

            <!-- Actions -->
            <td class="px-4 py-3">
              <div class="flex items-center gap-1">
                <button (click)="openEditBank(bank)" aria-label="Edit bank"
                  class="p-1.5 rounded-lg text-surface-500 dark:text-surface-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </button>
                <button (click)="toggleBank(bank)"
                  [attr.aria-label]="bank.isActive ? 'Deactivate bank' : 'Activate bank'"
                  class="p-1.5 rounded-lg transition"
                  [ngClass]="bank.isActive
                    ? 'text-surface-500 dark:text-surface-400 hover:text-warning-600 dark:hover:text-warning-400 hover:bg-warning-50 dark:hover:bg-warning-900/20'
                    : 'text-surface-500 dark:text-surface-400 hover:text-success-600 dark:hover:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20'">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path *ngIf="bank.isActive" stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"/>
                    <path *ngIf="!bank.isActive" stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </button>
                <button (click)="deleteBank(bank)" aria-label="Delete bank"
                  class="p-1.5 rounded-lg text-surface-500 dark:text-surface-400 hover:text-danger-600 dark:hover:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Empty state -->
    <div *ngIf="!banks.length && !loading" class="text-center py-14">
      <div class="flex flex-col items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-surface-100 dark:bg-surface-700 flex items-center justify-center">
          <svg class="w-6 h-6 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"/>
          </svg>
        </div>
        <p class="text-sm font-medium text-surface-600 dark:text-surface-400">
          {{ hasActiveFilters ? 'No banks match your filters' : 'No bank accounts yet' }}
        </p>
        <p *ngIf="!hasActiveFilters" class="text-xs text-surface-400 dark:text-surface-500">
          Click "Add Bank" to add the first bank account for this agent.
        </p>
        <button *ngIf="hasActiveFilters" (click)="clearFilters()"
          class="text-xs text-brand-600 dark:text-brand-400 hover:underline">Clear filters</button>
      </div>
    </div>

    <!-- Pagination -->
    <div *ngIf="totalCount > 0"
      class="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 border-t border-surface-200 dark:border-surface-700">
      <span class="text-xs text-surface-500 dark:text-surface-400">
        {{ totalCount }} banks &middot; Page {{ pageIndex + 1 }} of {{ totalPages }}
      </span>
      <div class="flex items-center gap-2">
        <label class="text-xs text-surface-500 dark:text-surface-400">Rows:</label>
        <select [ngModel]="pageSize" (ngModelChange)="onPageSizeChange($event)"
          class="px-2 py-1 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 text-xs outline-none focus:ring-2 focus:ring-brand-500">
          <option [value]="10">10</option>
          <option [value]="20">20</option>
          <option [value]="50">50</option>
          <option [value]="100">100</option>
        </select>
        <div class="flex items-center gap-1">
          <button (click)="goToPage(0)" [disabled]="pageIndex === 0" aria-label="First page"
            class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
            </svg>
          </button>
          <button (click)="goToPage(pageIndex - 1)" [disabled]="pageIndex === 0" aria-label="Previous page"
            class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button (click)="goToPage(pageIndex + 1)" [disabled]="pageIndex >= totalPages - 1" aria-label="Next page"
            class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          <button (click)="goToPage(totalPages - 1)" [disabled]="pageIndex >= totalPages - 1" aria-label="Last page"
            class="p-1.5 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div><!-- /banks table card -->

</ng-container>


<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- Bank Form Modal (Add / Edit)                                             -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div *ngIf="showBankModal" class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" (click)="closeBankModal()"></div>
<div *ngIf="showBankModal"
  role="dialog" aria-modal="true" aria-labelledby="bank-form-title"
  class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-2xl">

  <!-- Modal header -->
  <div class="flex items-center justify-between px-6 py-4 border-b border-surface-200 dark:border-surface-700 sticky top-0 bg-white dark:bg-surface-800 z-10">
    <div>
      <h3 id="bank-form-title" class="text-lg font-semibold text-surface-900 dark:text-surface-100">
        {{ isEditingBank ? 'Edit Bank Account' : 'Add Bank Account' }}
      </h3>
      <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">
        {{ selectedAgent?.businessName }}
      </p>
    </div>
    <button (click)="closeBankModal()" aria-label="Close dialog"
      class="p-1.5 rounded-lg text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>

  <div class="p-6">
    <!-- Error banner -->
    <div *ngIf="bankFormError" role="alert"
      class="mb-5 px-4 py-3 rounded-xl bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 text-sm flex items-start gap-2">
      <svg class="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
      </svg>
      {{ bankFormError }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

      <!-- Bank Name -->
      <div class="sm:col-span-2">
        <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1.5">Bank Name <span class="text-danger-500">*</span></label>
        <input type="text" [(ngModel)]="bankForm.bankName" placeholder="e.g. National Bank of Commerce"
          class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
      </div>

      <!-- Payment Method -->
      <div>
        <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1.5">Payment Method <span class="text-danger-500">*</span></label>
        <select [(ngModel)]="bankForm.paymentMethodId"
          class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm">
          <option [ngValue]="null" disabled>\u2014 Select method \u2014</option>
          <option *ngFor="let pm of paymentMethods" [ngValue]="pm.id">{{ pm.name }}</option>
        </select>
      </div>

      <!-- Bank Code -->
      <div>
        <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1.5">Bank Code</label>
        <input type="text" [(ngModel)]="bankForm.bankCode" placeholder="e.g. NBC001"
          class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
      </div>

      <!-- SWIFT Code -->
      <div>
        <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1.5">SWIFT / BIC</label>
        <input type="text" [(ngModel)]="bankForm.swiftCode" placeholder="e.g. NBCTZTZ1"
          class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm font-mono"/>
      </div>

      <!-- Routing Number -->
      <div>
        <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1.5">Routing / ABA Number</label>
        <input type="text" [(ngModel)]="bankForm.routingNumber" placeholder="e.g. 021000021"
          class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm font-mono"/>
      </div>

      <!-- Country -->
      <div>
        <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1.5">Country</label>
        <input type="text" [(ngModel)]="bankForm.country" placeholder="e.g. Tanzania"
          class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
      </div>

      <!-- City -->
      <div>
        <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1.5">City</label>
        <input type="text" [(ngModel)]="bankForm.city" placeholder="e.g. Dar es Salaam"
          class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
      </div>

      <!-- Address -->
      <div class="sm:col-span-2">
        <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1.5">Address</label>
        <input type="text" [(ngModel)]="bankForm.address" placeholder="Street address"
          class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
      </div>

      <!-- Contact Phone -->
      <div>
        <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1.5">Contact Phone</label>
        <input type="text" [(ngModel)]="bankForm.contactPhone" placeholder="+255 22 211 0000"
          class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
      </div>

      <!-- Contact Email -->
      <div>
        <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1.5">Contact Email</label>
        <input type="email" [(ngModel)]="bankForm.contactEmail" placeholder="banking@example.com"
          class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
      </div>

      <!-- Additional Info -->
      <div class="sm:col-span-2">
        <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1.5">Additional Info</label>
        <textarea [(ngModel)]="bankForm.additionalInfo" rows="2" placeholder="Any extra notes or instructions\u2026"
          class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm resize-none"></textarea>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-surface-200 dark:border-surface-700">
      <button (click)="closeBankModal()"
        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-600 transition text-sm font-medium">
        Cancel
      </button>
      <button (click)="saveBank()" [disabled]="savingBank"
        class="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white transition text-sm font-medium shadow-sm disabled:opacity-60 disabled:cursor-not-allowed">
        <svg *ngIf="savingBank" class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        <svg *ngIf="!savingBank" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
        {{ isEditingBank ? 'Save Changes' : 'Add Bank' }}
      </button>
    </div>
  </div>
</div>


<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- Branch Management Modal                                                  -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div *ngIf="showBranchModal" class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" (click)="closeBranchModal()"></div>
<div *ngIf="showBranchModal && selectedBank"
  role="dialog" aria-modal="true" aria-labelledby="branch-modal-title"
  class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-2xl">

  <!-- Modal header -->
  <div class="flex items-center justify-between px-6 py-4 border-b border-surface-200 dark:border-surface-700 sticky top-0 bg-white dark:bg-surface-800 z-10">
    <div>
      <h3 id="branch-modal-title" class="text-lg font-semibold text-surface-900 dark:text-surface-100">Branch Management</h3>
      <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5 flex items-center gap-1.5">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"/>
        </svg>
        {{ selectedBank.bankName }}
      </p>
    </div>
    <div class="flex items-center gap-2">
      <button *ngIf="!showBranchForm" (click)="openAddBranch()"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition text-xs font-medium">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
        </svg>
        Add Branch
      </button>
      <button (click)="closeBranchModal()" aria-label="Close dialog"
        class="p-1.5 rounded-lg text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-700 transition">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </div>

  <div class="p-6">

    <!-- Branch form (inline) -->
    <div *ngIf="showBranchForm"
      class="mb-6 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-900/10 p-5">
      <h4 class="text-sm font-semibold text-surface-900 dark:text-surface-100 mb-4">
        {{ isEditingBranch ? 'Edit Branch' : 'New Branch' }}
      </h4>

      <!-- Branch form error -->
      <div *ngIf="branchFormError" role="alert"
        class="mb-4 px-3 py-2.5 rounded-lg bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 text-xs">
        {{ branchFormError }}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="sm:col-span-2">
          <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1">Branch Name <span class="text-danger-500">*</span></label>
          <input type="text" [(ngModel)]="branchForm.branchName" placeholder="e.g. Main Branch"
            class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
        </div>
        <div>
          <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1">Branch Code</label>
          <input type="text" [(ngModel)]="branchForm.branchCode" placeholder="e.g. NBC-MAIN"
            class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
        </div>
        <div>
          <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1">SWIFT</label>
          <input type="text" [(ngModel)]="branchForm.swiftCode" placeholder="Branch SWIFT code"
            class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm font-mono"/>
        </div>
        <div>
          <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1">Contact Phone</label>
          <input type="text" [(ngModel)]="branchForm.contactPhone" placeholder="+255 22 211 0000"
            class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
        </div>
        <div>
          <label class="block text-xs font-semibold text-surface-600 dark:text-surface-400 mb-1">Address</label>
          <input type="text" [(ngModel)]="branchForm.address" placeholder="Branch address"
            class="w-full px-3 py-2 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-sm"/>
        </div>
      </div>

      <div class="flex items-center justify-end gap-2 mt-4">
        <button (click)="closeBranchForm()"
          class="px-3 py-1.5 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-600 transition text-xs font-medium">
          Cancel
        </button>
        <button (click)="saveBranch()" [disabled]="savingBranch"
          class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition text-xs font-medium disabled:opacity-60 disabled:cursor-not-allowed">
          <svg *ngIf="savingBranch" class="animate-spin h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <svg *ngIf="!savingBranch" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          {{ isEditingBranch ? 'Save Changes' : 'Add Branch' }}
        </button>
      </div>
    </div>

    <!-- Branches list -->
    <div *ngIf="selectedBank.branches && selectedBank.branches.length > 0; else noBranches">
      <div class="space-y-3">
        <div *ngFor="let branch of selectedBank.branches"
          class="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/40 hover:bg-surface-100 dark:hover:bg-surface-700/40 transition-colors group">

          <!-- Branch icon + info -->
          <div class="flex items-start gap-3 flex-1 min-w-0">
            <div class="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center shrink-0">
              <svg class="w-4 h-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2 flex-wrap">
                <p class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ branch.branchName }}</p>
                <span *ngIf="branch.branchCode"
                  class="text-xs font-mono px-1.5 py-0.5 rounded bg-surface-200 dark:bg-surface-700 text-surface-600 dark:text-surface-400">
                  {{ branch.branchCode }}
                </span>
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                  [ngClass]="branch.isActive
                    ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
                    : 'bg-surface-200 text-surface-600 dark:bg-surface-700 dark:text-surface-400'">
                  <span class="w-1.5 h-1.5 rounded-full"
                    [ngClass]="branch.isActive ? 'bg-success-500' : 'bg-surface-400'"></span>
                  {{ branch.isActive ? 'Active' : 'Inactive' }}
                </span>
              </div>
              <div class="flex flex-wrap gap-x-4 gap-y-0.5 mt-1">
                <span *ngIf="branch.swiftCode" class="text-xs text-surface-500 dark:text-surface-400 font-mono">{{ branch.swiftCode }}</span>
                <span *ngIf="branch.contactPhone" class="text-xs text-surface-500 dark:text-surface-400">{{ branch.contactPhone }}</span>
                <span *ngIf="branch.address" class="text-xs text-surface-500 dark:text-surface-400">{{ branch.address }}</span>
              </div>
            </div>
          </div>

          <!-- Branch actions -->
          <div class="flex items-center gap-1 shrink-0">
            <button (click)="openEditBranch(branch)" aria-label="Edit branch"
              class="p-1.5 rounded-lg text-surface-500 dark:text-surface-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </button>
            <button (click)="deleteBranch(branch)" aria-label="Delete branch"
              class="p-1.5 rounded-lg text-surface-500 dark:text-surface-400 hover:text-danger-600 dark:hover:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- No branches -->
    <ng-template #noBranches>
      <div *ngIf="!showBranchForm" class="text-center py-10">
        <div class="flex flex-col items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-surface-100 dark:bg-surface-700 flex items-center justify-center">
            <svg class="w-6 h-6 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
            </svg>
          </div>
          <p class="text-sm font-medium text-surface-600 dark:text-surface-400">No branches yet</p>
          <p class="text-xs text-surface-400 dark:text-surface-500">Click "Add Branch" to add the first branch for this bank.</p>
        </div>
      </div>
    </ng-template>

  </div>
</div>
` }]
  }], () => [{ type: ApiService }, { type: NotificationService }, { type: ConfirmDeleteService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentBanksComponent, { className: "AgentBanksComponent", filePath: "src/app/pages/admin/agent-banks/agent-banks.component.ts", lineNumber: 59 });
})();
export {
  AgentBanksComponent
};
//# sourceMappingURL=chunk-FLPHT6U7.js.map
