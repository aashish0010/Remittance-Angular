import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState
} from "./chunk-NTA2GFZC.js";
import {
  DatePicker
} from "./chunk-ERRAJLJG.js";
import "./chunk-JL6DUPH3.js";
import "./chunk-IFKOM5NQ.js";
import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from "./chunk-DV4GKRCI.js";
import {
  external_exports
} from "./chunk-FU7K6WYO.js";
import {
  AppSettingsService
} from "./chunk-DUD7GDET.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
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
import {
  AuthStateService
} from "./chunk-4HHFE2PJ.js";
import {
  Router
} from "./chunk-MLGMBAGQ.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
  SlicePipe
} from "./chunk-PBY7YOCP.js";
import {
  Component,
  Subject,
  computed,
  debounceTime,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
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

// src/app/pages/agent/send-money/send-money.store.ts
var initialState = {
  currentStep: 0,
  stepDirection: "forward",
  customerSubStep: "customer",
  apiType: "unknown",
  fieldMappings: [],
  selectedCustomer: null,
  selectedReceiver: null,
  missingCustomerFields: [],
  missingReceiverFields: [],
  calculationDone: false,
  complianceBlocked: false,
  balanceWarning: "",
  agentBalanceZero: false,
  kycWarning: "",
  dobWarning: "",
  matchedCorridor: null,
  selectedPartner: null,
  selectedPayoutModeId: null,
  selectedPaymentMethodId: null,
  sendAmount: 0,
  successResult: null,
  submitting: false
};
var SendMoneyStore = signalStore(withState(initialState), withComputed((state2) => ({
  canProceedStep0: computed(() => {
    return state2.calculationDone() && !state2.complianceBlocked() && state2.sendAmount() > 0 && !!state2.selectedPartner() && !!state2.selectedPayoutModeId() && !!state2.selectedPaymentMethodId() && !state2.agentBalanceZero();
  }),
  canProceedCustomer: computed(() => {
    return !!state2.selectedCustomer() && state2.missingCustomerFields().length === 0;
  }),
  canProceedReceiver: computed(() => {
    return !!state2.selectedReceiver() && state2.missingReceiverFields().length === 0;
  }),
  canProceedStep1: computed(() => {
    return !!state2.selectedCustomer() && !state2.dobWarning() && state2.missingCustomerFields().length === 0 && !!state2.selectedReceiver() && state2.missingReceiverFields().length === 0;
  }),
  canProceedStep2: computed(() => true),
  isComplete: computed(() => {
    return state2.currentStep() === 3 && !!state2.successResult();
  }),
  customerMappings: computed(() => state2.fieldMappings().filter((m) => m.tableName === "Customers" || m.tableName === "Customer")),
  receiverMappings: computed(() => state2.fieldMappings().filter((m) => m.tableName === "Receivers" || m.tableName === "Receiver"))
})), withMethods((store) => ({
  setStep(step, direction = "forward") {
    patchState(store, { currentStep: step, stepDirection: direction });
  },
  nextStep() {
    patchState(store, { currentStep: store.currentStep() + 1, stepDirection: "forward" });
  },
  prevStep() {
    if (store.currentStep() > 0) {
      patchState(store, { currentStep: store.currentStep() - 1, stepDirection: "backward" });
    }
  },
  setCustomerSubStep(sub, direction = "forward") {
    patchState(store, { customerSubStep: sub, stepDirection: direction });
  },
  setApiType(type) {
    patchState(store, { apiType: type });
  },
  setFieldMappings(mappings) {
    patchState(store, {
      fieldMappings: mappings,
      apiType: mappings.length > 0 ? "thirdParty" : "normal"
    });
  },
  setSelectedCustomer(customer) {
    patchState(store, { selectedCustomer: customer, missingCustomerFields: [] });
  },
  setSelectedReceiver(receiver) {
    patchState(store, { selectedReceiver: receiver, missingReceiverFields: [] });
  },
  setMissingCustomerFields(fields) {
    patchState(store, { missingCustomerFields: fields });
  },
  setMissingReceiverFields(fields) {
    patchState(store, { missingReceiverFields: fields });
  },
  setCalculationDone(done) {
    patchState(store, { calculationDone: done });
  },
  setComplianceBlocked(blocked) {
    patchState(store, { complianceBlocked: blocked });
  },
  setBalanceWarning(warning) {
    patchState(store, { balanceWarning: warning });
  },
  setAgentBalanceZero(zero) {
    patchState(store, { agentBalanceZero: zero });
  },
  setKycWarning(warning) {
    patchState(store, { kycWarning: warning });
  },
  setDobWarning(warning) {
    patchState(store, { dobWarning: warning });
  },
  setRouteState(corridor, partner, payoutModeId) {
    patchState(store, {
      matchedCorridor: corridor,
      selectedPartner: partner,
      selectedPayoutModeId: payoutModeId
    });
  },
  setSelectedPaymentMethodId(id) {
    patchState(store, { selectedPaymentMethodId: id });
  },
  setSendAmount(amount) {
    patchState(store, { sendAmount: amount });
  },
  setSubmitting(submitting) {
    patchState(store, { submitting });
  },
  setSuccessResult(result) {
    patchState(store, {
      successResult: result,
      currentStep: result ? 3 : store.currentStep(),
      stepDirection: "forward"
    });
  },
  reset() {
    patchState(store, __spreadValues({}, initialState));
  }
})));

// src/app/pages/agent/send-money/send-money.component.ts
var _c0 = () => [0, 1, 2, 3];
var _c1 = () => ["Calculator", "Sender & Receiver", "Compliance", "Confirm"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.serviceOptionCode + $item.serviceOptionRoutingCode;
var _forTrack3 = ($index, $item) => $item.ruleName;
var _forTrack4 = ($index, $item) => $item.ourColumn;
var _forTrack5 = ($index, $item) => $item.code;
function SendMoneyComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Confirm PIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_1_Conditional_11_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pinConfirm, $event) || (ctx_r1.pinConfirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pinConfirm);
  }
}
function SendMoneyComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pinError);
  }
}
function SendMoneyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 19)(2, "h3", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22)(7, "div")(8, "label", 23);
    \u0275\u0275text(9, "PIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_1_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pinInput, $event) || (ctx_r1.pinInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, SendMoneyComponent_Conditional_1_Conditional_11_Template, 4, 1, "div")(12, SendMoneyComponent_Conditional_1_Conditional_12_Template, 2, 1, "p", 25);
    \u0275\u0275elementStart(13, "button", 26);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPinSubmit());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 27);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPinDialog = false);
    });
    \u0275\u0275text(16, " Cancel ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pinMode === "set" ? "Create Transaction PIN" : "Authorize Transfer", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pinMode === "set" ? "Set a 4\u20136 digit PIN for future transactions." : "Enter your PIN to authorize this transfer.", " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pinInput);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pinMode === "set" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pinError ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pinMode === "set" ? "Set PIN & Send" : "Authorize", " ");
  }
}
function SendMoneyComponent_Conditional_2_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(branch_r6.branchCode);
  }
}
function SendMoneyComponent_Conditional_2_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(branch_r6.address);
  }
}
function SendMoneyComponent_Conditional_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_2_For_11_Template_button_click_0_listener() {
      const branch_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.branchContext === "txn" ? ctx_r1.selectBranchTxn(branch_r6) : ctx_r1.selectBranch(branch_r6));
    });
    \u0275\u0275elementStart(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SendMoneyComponent_Conditional_2_For_11_Conditional_3_Template, 2, 1, "span", 39)(4, SendMoneyComponent_Conditional_2_For_11_Conditional_4_Template, 2, 1, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(branch_r6.branchName);
    \u0275\u0275advance();
    \u0275\u0275conditional(branch_r6.branchCode ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(branch_r6.address ? 4 : -1);
  }
}
function SendMoneyComponent_Conditional_2_ForEmpty_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1, "No branches found");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 28)(2, "div", 29)(3, "h3", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showBranchPopup = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 6);
    \u0275\u0275element(7, "path", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_2_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.branchSearch, $event) || (ctx_r1.branchSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_Conditional_2_Template_input_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterBranches());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 34);
    \u0275\u0275repeaterCreate(10, SendMoneyComponent_Conditional_2_For_11_Template, 5, 3, "button", 35, _forTrack0, false, SendMoneyComponent_Conditional_2_ForEmpty_12_Template, 2, 0, "p", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Select Branch \u2014 ", ctx_r1.branchBankName, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.branchSearch);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredBranches);
  }
}
function SendMoneyComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("From: ", ctx_r1.agentProfile.country, " \xB7 ", ctx_r1.agentProfile.businessName, "");
  }
}
function SendMoneyComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Partner API");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p", 41);
    \u0275\u0275text(2, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 42);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(5, 2, ctx_r1.agentBalance.availableBalance, "1.2-2"), " ", (tmp_1_0 = ctx_r1.agentBalance.currency) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ctx_r1.agentProfile == null ? null : ctx_r1.agentProfile.currency, "");
  }
}
function SendMoneyComponent_For_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 44);
    \u0275\u0275element(1, "path", 46);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_For_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const step_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", step_r7 + 1, " ");
  }
}
function SendMoneyComponent_For_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(step_r7 < ctx_r1.store.currentStep() ? "bg-emerald-500" : "bg-brand-600");
    \u0275\u0275styleProp("width", ctx_r1.store.successResult() || step_r7 < ctx_r1.store.currentStep() ? "100%" : "0%");
  }
}
function SendMoneyComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 43)(2, "div");
    \u0275\u0275template(3, SendMoneyComponent_For_17_Conditional_3_Template, 2, 0, ":svg:svg", 44)(4, SendMoneyComponent_For_17_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, SendMoneyComponent_For_17_Conditional_5_Template, 2, 4, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("flex-1", step_r7 < 3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 " + (ctx_r1.store.successResult() || step_r7 < ctx_r1.store.currentStep() ? "bg-emerald-500 text-white" : step_r7 === ctx_r1.store.currentStep() ? "bg-brand-600 text-white ring-4 ring-brand-500/20" : "bg-surface-100 dark:bg-surface-800 text-surface-400 dark:text-surface-500 border border-surface-200 dark:border-surface-700"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.successResult() || step_r7 < ctx_r1.store.currentStep() ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r7 < 3 ? 5 : -1);
  }
}
function SendMoneyComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r8 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("text-[11px] transition-colors " + ($index_r9 === ctx_r1.store.currentStep() ? "text-brand-600 dark:text-brand-400 font-semibold" : "text-surface-400 dark:text-surface-500"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", label_r8, " ");
  }
}
function SendMoneyComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 48)(2, "div", 49)(3, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 51);
    \u0275\u0275element(5, "path", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 53);
    \u0275\u0275text(7, "Transfer Sent!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 55)(11, "div", 56)(12, "p", 57);
    \u0275\u0275text(13, "You sent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 58);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 56)(18, "p", 57);
    \u0275\u0275text(19, "They receive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 59);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 56)(24, "p", 57);
    \u0275\u0275text(25, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 60);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 56)(29, "p", 57);
    \u0275\u0275text(30, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 60);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 61)(34, "button", 62);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_21_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadReceipt());
    });
    \u0275\u0275text(35, " Download Receipt ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 63);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_21_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startNewTransaction());
    });
    \u0275\u0275text(37, " New Transfer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("Ref: ", ctx_r1.appSettings.txnNumberPrefix, "", ctx_r1.store.successResult().referenceNumber, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(16, 8, ctx_r1.store.successResult().sendAmount, "1.2-2"), " ", ctx_r1.store.successResult().sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(22, 11, ctx_r1.store.successResult().receiveAmount, "1.2-2"), " ", ctx_r1.store.successResult().receiveCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.store.successResult().senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.store.successResult().receiverName);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275property("value", c_r12.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r12.name);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Loading options\u2026 ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Select destination first ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_3_Conditional_0_Template, 1, 0)(1, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_3_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.receiverCountryIso3 ? 0 : 1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Choose payout method ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const opt_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" (", opt_r14.destinationCurrencyCode, ") ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_5_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const opt_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", opt_r14.serviceOptionRoutingName, " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 96);
    \u0275\u0275text(1);
    \u0275\u0275template(2, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_5_For_2_Conditional_2_Template, 1, 1)(3, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_5_For_2_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", ctx_r1.mgServiceOptions.indexOf(opt_r14))("selected", (ctx_r1.selectedMgOption == null ? null : ctx_r1.selectedMgOption.serviceOptionCode) === opt_r14.serviceOptionCode && (ctx_r1.selectedMgOption == null ? null : ctx_r1.selectedMgOption.serviceOptionRoutingCode) === opt_r14.serviceOptionRoutingCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r14.serviceOptionName, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r14.destinationCurrencyCode ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r14.serviceOptionRoutingName ? 3 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "optgroup", 88);
    \u0275\u0275repeaterCreate(1, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_5_For_2_Template, 4, 5, "option", 96, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.mgCashOptions);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const opt_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" (", opt_r15.destinationCurrencyCode, ") ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_6_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const opt_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", opt_r15.serviceOptionRoutingName, " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 96);
    \u0275\u0275text(1);
    \u0275\u0275template(2, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_6_For_2_Conditional_2_Template, 1, 1)(3, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_6_For_2_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", ctx_r1.mgServiceOptions.indexOf(opt_r15))("selected", (ctx_r1.selectedMgOption == null ? null : ctx_r1.selectedMgOption.serviceOptionCode) === opt_r15.serviceOptionCode && (ctx_r1.selectedMgOption == null ? null : ctx_r1.selectedMgOption.serviceOptionRoutingCode) === opt_r15.serviceOptionRoutingCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r15.serviceOptionName, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r15.destinationCurrencyCode ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r15.serviceOptionRoutingName ? 3 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "optgroup", 89);
    \u0275\u0275repeaterCreate(1, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_6_For_2_Template, 4, 5, "option", 96, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.mgBankOptions);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_7_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const opt_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" (", opt_r16.destinationCurrencyCode, ") ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const opt_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", opt_r16.serviceOptionRoutingName, " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 96);
    \u0275\u0275text(1);
    \u0275\u0275template(2, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_7_For_2_Conditional_2_Template, 1, 1)(3, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_7_For_2_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", ctx_r1.mgServiceOptions.indexOf(opt_r16))("selected", (ctx_r1.selectedMgOption == null ? null : ctx_r1.selectedMgOption.serviceOptionCode) === opt_r16.serviceOptionCode && (ctx_r1.selectedMgOption == null ? null : ctx_r1.selectedMgOption.serviceOptionRoutingCode) === opt_r16.serviceOptionRoutingCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r16.serviceOptionName, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r16.destinationCurrencyCode ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r16.serviceOptionRoutingName ? 3 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "optgroup", 90);
    \u0275\u0275repeaterCreate(1, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_7_For_2_Template, 4, 5, "option", 96, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.mgWalletOptions);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F4B3} ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F4B5} ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F4F1} ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F3E6} ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("via ", ctx_r1.selectedMgOption.serviceOptionRoutingName, "");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "span", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_16_Conditional_3_Template, 2, 1, "span", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.selectedMgOption.payoutType === "cash" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : ctx_r1.selectedMgOption.payoutType === "wallet" ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedMgOption.payoutType === "cash" ? "Cash Pickup" : ctx_r1.selectedMgOption.payoutType === "wallet" ? "Mobile Wallet" : "Bank Deposit", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedMgOption.serviceOptionRoutingName ? 3 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "select", 86);
    \u0275\u0275listener("change", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Template_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMgOptionSelected(ctx_r1.getMgOptionByIndex(+$event.target.value)));
    });
    \u0275\u0275elementStart(2, "option", 87);
    \u0275\u0275template(3, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_3_Template, 2, 1)(4, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_5_Template, 3, 0, "optgroup", 88)(6, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_6_Template, 3, 0, "optgroup", 89)(7, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_7_Template, 3, 0, "optgroup", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 91);
    \u0275\u0275template(9, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_9_Template, 1, 0)(10, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_10_Template, 1, 0)(11, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_11_Template, 1, 0)(12, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_12_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 93);
    \u0275\u0275element(15, "path", 94);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Conditional_16_Template, 4, 4, "div", 95);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.mgServiceOptions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("selected", !ctx_r1.selectedMgOption);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mgServiceOptions.length === 0 ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.mgCashOptions.length > 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mgBankOptions.length > 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mgWalletOptions.length > 0 ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.selectedMgOption ? 9 : ctx_r1.selectedMgOption.payoutType === "cash" ? 10 : ctx_r1.selectedMgOption.payoutType === "wallet" ? 11 : 12);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.selectedMgOption ? 16 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_14_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r18 = ctx.$implicit;
    \u0275\u0275property("value", m_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r18.name);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "select", 99);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_14_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedPaymentMethodId, $event) || (ctx_r1.selectedPaymentMethodId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_14_Template_select_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPaymentMethodChange());
    });
    \u0275\u0275elementStart(2, "option", 68);
    \u0275\u0275text(3, "Select method");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_14_For_5_Template, 2, 2, "option", 68, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 100);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 93);
    \u0275\u0275element(8, "path", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 93);
    \u0275\u0275element(11, "path", 94);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedPaymentMethodId);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.paymentMethods);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
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
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 102);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_21_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedSendCurrency, $event) || (ctx_r1.selectedSendCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_21_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSendCurrencyChange());
    });
    \u0275\u0275repeaterCreate(1, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_21_For_2_Template, 2, 2, "option", 68, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_21_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.sendAmountInput, $event) || (ctx_r1.sendAmountInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_21_Template_input_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAmountChange());
    })("keydown", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_21_Template_input_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAmountKeyDown($event));
    })("paste", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_21_Template_input_paste_3_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAmountPaste($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedSendCurrency);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.availableSendCurrencies);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sendAmountInput);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_22_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.sendAmountInput, $event) || (ctx_r1.sendAmountInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_22_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAmountChange());
    })("keydown", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_22_Template_input_keydown_2_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAmountKeyDown($event));
    })("paste", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_22_Template_input_paste_2_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAmountPaste($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.senderCurrency || "\xB7\xB7\xB7");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sendAmountInput);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 74);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 44);
    \u0275\u0275element(2, "path", 85);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("w-8 h-8 rounded-full flex items-center justify-center transition-colors " + (ctx_r1.store.calculationDone() ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400" : "bg-surface-100 dark:bg-surface-800 text-surface-400"));
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "span", 106);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" 1 ", ctx_r1.senderCurrency, " = ", \u0275\u0275pipeBind2(3, 3, ctx_r1.exchangeRate, "1.4-4"), " ", ctx_r1.receiverCurrency, " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 107);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 108);
    \u0275\u0275element(3, "path", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 110);
    \u0275\u0275text(5, "Rate may have changed. Recalculate for latest.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 111);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_34_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.calculateViaBackend());
    });
    \u0275\u0275text(7, " Recalculate ");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_35_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "span", 113);
    \u0275\u0275text(2, "Your balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.agentBalance.availableBalance >= ctx_r1.totalPayable ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500 dark:text-rose-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 3, ctx_r1.agentBalance.availableBalance, "1.2-2"), " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 112)(2, "span", 113);
    \u0275\u0275text(3, "Service charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 114);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 115)(8, "span", 116);
    \u0275\u0275text(9, "Total payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 117);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_35_Conditional_13_Template, 6, 6, "div", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 5, ctx_r1.serviceCharge, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(12, 8, ctx_r1.totalPayable, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.agentBalance ? 13 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_36_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r23.description);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_36_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 118);
    \u0275\u0275element(2, "path", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div")(4, "span", 120);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_36_For_2_Conditional_6_Template, 2, 1, "p", 121);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r23 = ctx.$implicit;
    \u0275\u0275classMap("alert-item flex items-start gap-3 p-3 rounded-xl border text-sm " + (v_r23.action === "Block" ? "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800/50 text-rose-700 dark:text-rose-300" : "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(v_r23.ruleName);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r23.description ? 6 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275repeaterCreate(1, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_36_For_2_Template, 7, 4, "div", 16, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.complianceViolations);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 108);
    \u0275\u0275element(2, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.calcError, " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 108);
    \u0275\u0275element(2, "path", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.store.balanceWarning(), " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 65)(2, "div")(3, "label", 23);
    \u0275\u0275text(4, "To Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.receiverCountry, $event) || (ctx_r1.receiverCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Template_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReceiverCountryChange());
    });
    \u0275\u0275elementStart(6, "option", 67);
    \u0275\u0275text(7, "Select country");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, SendMoneyComponent_Conditional_22_Conditional_1_For_9_Template, 2, 2, "option", 68, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "label", 69);
    \u0275\u0275text(12, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_13_Template, 17, 8)(14, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_14_Template, 12, 2, "div", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 71)(16, "div", 72)(17, "div")(18, "label", 69);
    \u0275\u0275text(19, "You send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 70);
    \u0275\u0275template(21, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_21_Template, 4, 2)(22, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_22_Template, 3, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 73);
    \u0275\u0275template(24, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_24_Template, 1, 0, "div", 74)(25, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_25_Template, 3, 2, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "label", 69);
    \u0275\u0275text(28, "They receive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 70)(30, "span", 75);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.receiveAmountInput, $event) || (ctx_r1.receiveAmountInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_1_Template_input_ngModelChange_32_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReceiveAmountChange());
    })("keydown", function SendMoneyComponent_Conditional_22_Conditional_1_Template_input_keydown_32_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAmountKeyDown($event));
    })("paste", function SendMoneyComponent_Conditional_22_Conditional_1_Template_input_paste_32_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAmountPaste($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(33, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_33_Template, 4, 6, "div", 77)(34, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_34_Template, 8, 0, "div", 78)(35, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_35_Template, 14, 11, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_36_Template, 3, 0, "div", 80)(37, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_37_Template, 4, 1, "div", 81)(38, SendMoneyComponent_Conditional_22_Conditional_1_Conditional_38_Template, 4, 1, "div", 82);
    \u0275\u0275elementStart(39, "button", 83);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_1_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.proceedFromCalculator());
    });
    \u0275\u0275text(40, " Continue to Sender & Receiver ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 84);
    \u0275\u0275element(42, "path", 85);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.receiverCountry);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.countries);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.isMoneyGramPartner() ? 13 : 14);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!ctx_r1.isMoneyGramPartner() && ctx_r1.availableSendCurrencies.length > 1 ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loadingCalc ? 24 : 25);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.receiverCurrency || "\xB7\xB7\xB7");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.receiveAmountInput);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.calculationDone() && ctx_r1.exchangeRate > 0 ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rateStale && ctx_r1.store.calculationDone() && ctx_r1.exchangeRate > 0 ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.calculationDone() ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.complianceViolations.length > 0 ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.calcError ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.balanceWarning() ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.canProceedCalc() ? "bg-brand-600 hover:bg-brand-700 text-white shadow-sm" : "bg-surface-100 dark:bg-surface-800 text-surface-400 dark:text-surface-500");
    \u0275\u0275property("disabled", !ctx_r1.canProceedCalc());
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 124);
    \u0275\u0275element(1, "path", 46);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 125);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Conditional_11_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 141);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 143);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Conditional_11_For_8_Template_input_ngModelChange_5_listener($event) {
      const field_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingCustomerData[field_r28.ourColumn], $event) || (ctx_r1.missingCustomerData[field_r28.ourColumn] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", field_r28.ourColumn, " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingCustomerData[field_r28.ourColumn]);
    \u0275\u0275property("placeholder", field_r28.partnerColumn);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 137);
    \u0275\u0275element(3, "path", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4", 138);
    \u0275\u0275text(5, "Partner requires additional details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 139);
    \u0275\u0275repeaterCreate(7, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Conditional_11_For_8_Template, 6, 3, "div", null, _forTrack4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 140);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Conditional_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveMissingCustomerFields());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.store.missingCustomerFields());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingMissingCustomer);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingMissingCustomer ? "Saving..." : "Save & Continue", " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 108);
    \u0275\u0275element(2, "path", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.store.kycWarning(), " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 108);
    \u0275\u0275element(2, "path", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.store.dobWarning(), " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 131);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 132)(4, "p", 133);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 134);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.clearSelectedCustomer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 44);
    \u0275\u0275element(10, "path", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Conditional_11_Template, 11, 2, "div", 135)(12, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Conditional_12_Template, 4, 1, "div", 82)(13, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Conditional_13_Template, 4, 1, "div", 81);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.store.selectedCustomer().fullName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.store.selectedCustomer().fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.store.selectedCustomer().phone, " \xB7 ", ctx_r1.store.selectedCustomer().country, "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.store.missingCustomerFields().length > 0 && ctx_r1.showMissingCustomerForm ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.kycWarning() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.dobWarning() ? 13 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 152);
    \u0275\u0275listener("mousedown", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_5_For_2_Template_button_mousedown_0_listener() {
      const c_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.selectCustomer(c_r31));
    });
    \u0275\u0275elementStart(1, "div", 153);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 154);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r31 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(c_r31.fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r31.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r31.phone);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275repeaterCreate(1, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_5_For_2_Template, 8, 3, "button", 151, _forTrack0);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 0, ctx_r1.filteredCustomers, 0, 8));
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 158);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["fullName"]);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 157);
    \u0275\u0275template(4, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_3_Conditional_4_Template, 2, 1, "p", 158);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.customerFormErrors["fullName"] ? 4 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 158);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["phone"]);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 159);
    \u0275\u0275template(4, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_4_Conditional_4_Template, 2, 1, "p", 158);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.customerFormErrors["phone"] ? 4 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_5_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r33 = ctx.$implicit;
    \u0275\u0275property("value", c_r33.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r33.name);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Nationality *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 160)(4, "option", 67);
    \u0275\u0275text(5, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_5_For_7_Template, 2, 2, "option", 68, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.countries);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_6_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
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
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 161)(4, "option", 67);
    \u0275\u0275text(5, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_6_For_7_Template, 2, 2, "option", 68, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.countries);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_7_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r35 = ctx.$implicit;
    \u0275\u0275property("value", t_r35.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r35.name);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "ID Document Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 162)(4, "option", 67);
    \u0275\u0275text(5, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_7_For_7_Template, 2, 2, "option", 68, _forTrack5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.idTypes);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "ID Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 163);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 174);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275property("src", ctx_r1.customerFrontPreview, \u0275\u0275sanitizeUrl);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 175);
    \u0275\u0275element(1, "path", 177);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 174);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275property("src", ctx_r1.customerBackPreview, \u0275\u0275sanitizeUrl);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 175);
    \u0275\u0275element(1, "path", 177);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 172)(1, "div")(2, "label", 23);
    \u0275\u0275text(3, "ID Front");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 173);
    \u0275\u0275template(5, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Conditional_5_Template, 1, 1, "img", 174)(6, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Conditional_6_Template, 2, 0, ":svg:svg", 175);
    \u0275\u0275elementStart(7, "input", 176);
    \u0275\u0275listener("change", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.onFrontFileChange($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div")(9, "label", 23);
    \u0275\u0275text(10, "ID Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label", 173);
    \u0275\u0275template(12, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Conditional_12_Template, 1, 1, "img", 174)(13, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Conditional_13_Template, 2, 0, ":svg:svg", 175);
    \u0275\u0275elementStart(14, "input", 176);
    \u0275\u0275listener("change", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Template_input_change_14_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.onBackFileChange($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.customerFrontPreview ? 5 : 6);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.customerBackPreview ? 12 : 13);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164)(1, "div")(2, "label", 23);
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "label", 23);
    \u0275\u0275text(7, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 166)(9, "option", 67);
    \u0275\u0275text(10, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 167);
    \u0275\u0275text(12, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 168);
    \u0275\u0275text(14, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 169);
    \u0275\u0275text(16, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "label", 23);
    \u0275\u0275text(19, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "p-datepicker", 170);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "label", 23);
    \u0275\u0275text(23, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 171);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Conditional_25_Template, 15, 2, "div", 172);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(20);
    \u0275\u0275property("maxDate", null);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r1.appSettings.skipDocumentUpload ? 25 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150)(1, "p", 155);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_3_Template, 5, 1, "div")(4, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_4_Template, 5, 1, "div")(5, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_5_Template, 8, 0, "div")(6, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_6_Template, 8, 0, "div")(7, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_7_Template, 8, 0, "div")(8, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_8_Template, 4, 0, "div")(9, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Conditional_9_Template, 26, 2);
    \u0275\u0275elementStart(10, "button", 156);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveNewCustomer());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("formGroup", ctx_r1.customerForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.store.apiType() === "thirdParty" ? "Required Partner Fields" : "Customer Details", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.apiType() !== "thirdParty" || ctx_r1.isFieldShownCustomer("fullName") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.apiType() !== "thirdParty" || ctx_r1.isFieldShownCustomer("phone") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.apiType() !== "thirdParty" || ctx_r1.isFieldShownCustomer("nationality") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.apiType() !== "thirdParty" || ctx_r1.isFieldShownCustomer("country") ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.apiType() !== "thirdParty" || ctx_r1.isFieldShownCustomer("idDocumentType") ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.apiType() !== "thirdParty" || ctx_r1.isFieldShownCustomer("idDocumentNumber") ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.apiType() !== "thirdParty" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.savingCustomer);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingCustomer ? "Saving..." : "Create Customer", " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129)(1, "h3", 145);
    \u0275\u0275text(2, "Select Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "input", 146);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerSearch, $event) || (ctx_r1.customerSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.filterCustomers());
    })("blur", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Template_input_blur_4_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hideCustomerDropdownDelayed());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_5_Template, 4, 4, "div", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 148);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleCreateCustomer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 44);
    \u0275\u0275element(8, "path", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " New Customer ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Conditional_10_Template, 12, 11, "div", 150);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerSearch);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCustomerDropdown && ctx_r1.filteredCustomers.length > 0 ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.showCreateCustomer ? 10 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_1_Template, 14, 7)(2, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Conditional_2_Template, 11, 3, "div", 129);
    \u0275\u0275elementStart(3, "button", 83);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.proceedToReceiver());
    });
    \u0275\u0275text(4, " Next: Select Receiver \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.selectedCustomer() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.store.canProceedCustomer() ? "bg-brand-600 hover:bg-brand-700 text-white shadow-sm" : "bg-surface-100 dark:bg-surface-800 text-surface-400 dark:text-surface-500");
    \u0275\u0275property("disabled", !ctx_r1.store.canProceedCustomer());
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 192);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 193);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const bankName_r40 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bankName_r40);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 192);
    \u0275\u0275text(2, "Bank Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 194);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const bankCode_r41 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bankCode_r41);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 192);
    \u0275\u0275text(2, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 194);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const accNum_r42 = \u0275\u0275readContextLet(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \xB7\xB7\xB7\xB7 ", \u0275\u0275pipeBind2(5, 1, accNum_r42, -4), " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 192);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 193);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const branchName_r43 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(branchName_r43);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 192);
    \u0275\u0275text(2, "Branch Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 194);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const branchCode_r44 = \u0275\u0275readContextLet(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(branchCode_r44);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 192);
    \u0275\u0275text(2, "Payout Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 195);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.receiverCountry);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0)(1)(2)(3)(4);
    \u0275\u0275elementStart(5, "div", 180)(6, "div", 183)(7, "div", 184);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 185);
    \u0275\u0275element(9, "path", 186);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 187);
    \u0275\u0275text(11, "Payout Account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 188);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.togglePayoutSwapPanel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 189);
    \u0275\u0275element(14, "path", 190);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Change ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 191);
    \u0275\u0275template(17, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_17_Template, 5, 1, "div")(18, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_18_Template, 5, 1, "div")(19, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_19_Template, 6, 4, "div")(20, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_20_Template, 5, 1, "div")(21, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_21_Template, 5, 1, "div")(22, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Conditional_22_Template, 5, 1, "div");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    const bankName_r45 = \u0275\u0275storeLet((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.bankName) || ctx_r1.transactionPayoutDetails.bankName);
    \u0275\u0275advance();
    const bankCode_r46 = \u0275\u0275storeLet((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.bankCode) || ctx_r1.transactionPayoutDetails.bankCode);
    \u0275\u0275advance();
    const accNum_r47 = \u0275\u0275storeLet((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.accountNumber) || ctx_r1.transactionPayoutDetails.accountNumber);
    \u0275\u0275advance();
    const branchName_r48 = \u0275\u0275storeLet((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.branchName) || ctx_r1.transactionPayoutDetails.branchName);
    \u0275\u0275advance();
    const branchCode_r49 = \u0275\u0275storeLet((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.branchCode) || ctx_r1.transactionPayoutDetails.branchCode);
    \u0275\u0275advance();
    \u0275\u0275property("@fadeSlideUp", void 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("@swapIconRotate", ctx_r1.showPayoutSwapPanel ? "open" : "closed");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(bankName_r45 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(bankCode_r46 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(accNum_r47 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(branchName_r48 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(branchCode_r49 ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.receiverCountry ? 22 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 206);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 208);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_For_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 210);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r52 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r52.accountNumber);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_For_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 211);
    \u0275\u0275element(1, "path", 46);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 205);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_For_6_Template_button_click_0_listener() {
      const d_r52 = \u0275\u0275restoreView(_r51).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.selectSavedDetail(d_r52));
    });
    \u0275\u0275template(1, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_For_6_Conditional_1_Template, 1, 0, "div", 206);
    \u0275\u0275elementStart(2, "div", 207);
    \u0275\u0275template(3, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_For_6_Conditional_3_Template, 1, 0, "div", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 132)(5, "p", 209);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_For_6_Conditional_7_Template, 2, 1, "p", 210);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_For_6_Conditional_8_Template, 2, 0, ":svg:svg", 211);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r52 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngClass", (ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.id) === d_r52.id ? "bg-gradient-to-r from-brand-50 to-indigo-50 dark:from-brand-900/25 dark:to-indigo-900/20" : "hover:bg-surface-50 dark:hover:bg-surface-800/60");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.id) === d_r52.id ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", (ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.id) === d_r52.id ? "border-brand-500" : "border-surface-300 dark:border-surface-600");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.id) === d_r52.id ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r52.bankName);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r52.accountNumber ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.id) === d_r52.id ? 8 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 181)(1, "div", 196)(2, "p", 197);
    \u0275\u0275text(3, "Payout Accounts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 198);
    \u0275\u0275repeaterCreate(5, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_For_6_Template, 9, 7, "button", 199, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 200)(8, "button", 201);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.useNewPayoutDetail());
    });
    \u0275\u0275elementStart(9, "div", 202);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 203);
    \u0275\u0275element(11, "path", 204);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(12, " Add new account ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("@staggerList", void 0);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.savedPayoutDetails);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_13_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 141);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 143);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_13_For_8_Template_input_ngModelChange_5_listener($event) {
      const field_r55 = \u0275\u0275restoreView(_r54).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingReceiverData[field_r55.ourColumn], $event) || (ctx_r1.missingReceiverData[field_r55.ourColumn] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r55 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", field_r55.ourColumn, " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingReceiverData[field_r55.ourColumn]);
    \u0275\u0275property("placeholder", field_r55.partnerColumn);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 137);
    \u0275\u0275element(3, "path", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4", 138);
    \u0275\u0275text(5, "Partner requires additional receiver details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 139);
    \u0275\u0275repeaterCreate(7, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_13_For_8_Template, 6, 3, "div", null, _forTrack4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 140);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_13_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r53);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveMissingReceiverFields());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.store.missingReceiverFields());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingMissingReceiver);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingMissingReceiver ? "Saving..." : "Save & Continue", " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Conditional_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r58 = ctx.$implicit;
    \u0275\u0275property("value", b_r58.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r58.bankName);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Bank ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 216);
    \u0275\u0275listener("change", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Conditional_7_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onBankSelectedTxn(ctx_r1.payoutBanks[$event.target.selectedIndex - 1]));
    });
    \u0275\u0275elementStart(6, "option", 67);
    \u0275\u0275text(7, "Select bank");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Conditional_7_For_9_Template, 2, 2, "option", 68, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.payoutBanks);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 214);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 217);
    \u0275\u0275element(2, "path", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No banks configured for this payout route. ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 218);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Conditional_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r1 = \u0275\u0275nextContext(6);
      ctx_r1.branchContext = "txn";
      return \u0275\u0275resetView(ctx_r1.showBranchPopup = true);
    });
    \u0275\u0275elementStart(4, "span", 117);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 219);
    \u0275\u0275element(7, "path", 220);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-surface-400", !ctx_r1.transactionPayoutDetails.branchName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.transactionPayoutDetails.branchName || "Select branch");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 182)(1, "div", 123)(2, "div", 212);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 213);
    \u0275\u0275element(4, "path", 186);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h4", 145);
    \u0275\u0275text(6, "New Bank Account");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Conditional_7_Template, 10, 0, "div")(8, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Conditional_8_Template, 4, 0, "p", 214);
    \u0275\u0275elementStart(9, "div")(10, "label", 23);
    \u0275\u0275text(11, "Account Number ");
    \u0275\u0275elementStart(12, "span", 142);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 215);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.transactionPayoutDetails.accountNumber, $event) || (ctx_r1.transactionPayoutDetails.accountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Conditional_15_Template, 8, 3, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("@fadeSlideUp", void 0);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.payoutBanks.length > 0 ? 7 : 8);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transactionPayoutDetails.accountNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allBranches.length > 0 ? 15 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_15_Conditional_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r61 = ctx.$implicit;
    \u0275\u0275property("value", loc_r61.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r61.bankName);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 216);
    \u0275\u0275listener("change", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_15_Conditional_10_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onCashLocationSelectedTxn(ctx_r1.payoutCashLocations[$event.target.selectedIndex - 1]));
    });
    \u0275\u0275elementStart(1, "option", 67);
    \u0275\u0275text(2, "Select cash location");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_15_Conditional_10_For_4_Template, 2, 2, "option", 68, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.payoutCashLocations);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 214);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 217);
    \u0275\u0275element(2, "path", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No cash locations configured for this payout route. ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182)(1, "div", 123)(2, "div", 221);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 222);
    \u0275\u0275element(4, "path", 223)(5, "path", 224);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h4", 145);
    \u0275\u0275text(7, "Payout Location ");
    \u0275\u0275elementStart(8, "span", 142);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_15_Conditional_10_Template, 5, 0, "select", 225)(11, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_15_Conditional_11_Template, 4, 0, "p", 214);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("@fadeSlideUp", void 0);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.payoutCashLocations.length > 0 ? 10 : 11);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_16_Conditional_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r64 = ctx.$implicit;
    \u0275\u0275property("value", loc_r64.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r64.locationName);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Provider ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 216);
    \u0275\u0275listener("change", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_16_Conditional_7_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r63);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onLocationSelectedTxn(ctx_r1.payoutLocations[$event.target.selectedIndex - 1]));
    });
    \u0275\u0275elementStart(6, "option", 67);
    \u0275\u0275text(7, "Select wallet provider");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_16_Conditional_7_For_9_Template, 2, 2, "option", 68, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.payoutLocations);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 214);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 217);
    \u0275\u0275element(2, "path", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No wallet providers configured for this payout route. ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 182)(1, "div", 123)(2, "div", 226);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 227);
    \u0275\u0275element(4, "path", 228);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h4", 145);
    \u0275\u0275text(6, "Wallet Provider");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_16_Conditional_7_Template, 10, 0, "div")(8, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_16_Conditional_8_Template, 4, 0, "p", 214);
    \u0275\u0275elementStart(9, "div")(10, "label", 23);
    \u0275\u0275text(11, "Wallet Number ");
    \u0275\u0275elementStart(12, "span", 142);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 229);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_16_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r62);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.transactionPayoutDetails.accountNumber, $event) || (ctx_r1.transactionPayoutDetails.accountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("@fadeSlideUp", void 0);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.payoutLocations.length > 0 ? 7 : 8);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transactionPayoutDetails.accountNumber);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 179);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 132)(4, "p", 133);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 134);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.clearSelectedReceiver());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 44);
    \u0275\u0275element(10, "path", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_11_Template, 23, 13, "div", 180)(12, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_12_Template, 13, 2, "div", 181)(13, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_13_Template, 11, 2, "div", 135)(14, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_14_Template, 16, 4, "div", 182)(15, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_15_Template, 12, 2, "div", 182)(16, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Conditional_16_Template, 15, 3, "div", 182);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.store.selectedReceiver().fullName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.store.selectedReceiver().fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.store.selectedReceiver().phone);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selectedSavedDetail || ctx_r1.transactionPayoutDetails.bankName || ctx_r1.transactionPayoutDetails.accountNumber ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showPayoutSwapPanel ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.missingReceiverFields().length > 0 && ctx_r1.showMissingReceiverForm ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBankTransfer() && ctx_r1.showNewAccountForm ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCashTransfer() && ctx_r1.showNewAccountForm ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isWalletTransfer() && ctx_r1.showNewAccountForm ? 16 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_4_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const r_r67 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", r_r67.country, " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 234);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_4_For_2_Template_button_click_0_listener() {
      const r_r67 = \u0275\u0275restoreView(_r66).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.selectReceiver(r_r67));
    });
    \u0275\u0275elementStart(1, "div", 153);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 154);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 41);
    \u0275\u0275text(7);
    \u0275\u0275template(8, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_4_For_2_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r67 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(r_r67.fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r67.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r67.phone);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r67.country ? 8 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 231);
    \u0275\u0275repeaterCreate(1, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_4_For_2_Template, 9, 4, "button", 233, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredReceivers);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 232);
    \u0275\u0275text(1, "No receivers yet");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 158);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.receiverFormErrors["fullName"]);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 236);
    \u0275\u0275template(4, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_1_Conditional_4_Template, 2, 1, "p", 158);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.receiverFormErrors["fullName"] ? 4 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 237);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_3_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r69 = ctx.$implicit;
    \u0275\u0275property("value", c_r69.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r69.name);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 161)(4, "option", 67);
    \u0275\u0275text(5, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_3_For_7_Template, 2, 2, "option", 68, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.countries);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 171);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Gender ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 166)(6, "option", 67);
    \u0275\u0275text(7, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 167);
    \u0275\u0275text(9, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 168);
    \u0275\u0275text(11, "Female");
    \u0275\u0275elementEnd()()();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Date of Birth ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 238);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r70 = ctx.$implicit;
    \u0275\u0275property("value", c_r70.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r70.name);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Nationality ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 160)(6, "option", 67);
    \u0275\u0275text(7, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_7_For_9_Template, 2, 2, "option", 68, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.countries);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Occupation ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 239);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Address ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 240);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Postal Code ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 241);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "ID Document Type ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 162)(6, "option", 67);
    \u0275\u0275text(7, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 242);
    \u0275\u0275text(9, "Passport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 243);
    \u0275\u0275text(11, "National ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 244);
    \u0275\u0275text(13, "Driving License");
    \u0275\u0275elementEnd()()();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "ID Document Number ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 163);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r72 = ctx.$implicit;
    const \u0275$index_1327_r73 = ctx.$index;
    \u0275\u0275property("value", \u0275$index_1327_r73);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r72.bankName);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 248);
    \u0275\u0275listener("change", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Conditional_6_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r71);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.onBankSelected(ctx_r1.payoutBanks[$event.target.value]));
    });
    \u0275\u0275elementStart(1, "option", 67);
    \u0275\u0275text(2, "Select bank");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Conditional_6_For_4_Template, 2, 2, "option", 68, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.payoutBanks);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 246);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 249);
    \u0275\u0275element(4, "input", 250);
    \u0275\u0275elementStart(5, "button", 251);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r74);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.showBranchPopup = true);
    });
    \u0275\u0275text(6, " Browse ");
    \u0275\u0275elementEnd()()();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235)(1, "p", 155);
    \u0275\u0275text(2, "Bank Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "label", 23);
    \u0275\u0275text(5, "Bank *");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Conditional_6_Template, 5, 0, "select", 245)(7, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Conditional_7_Template, 1, 0, "input", 246);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "label", 23);
    \u0275\u0275text(10, "Account Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 247);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Conditional_12_Template, 7, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.payoutBanks.length > 0 ? 6 : 7);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.receiverForm.value.bankId && ctx_r1.allBranches.length > 0 ? 12 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_14_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r76 = ctx.$implicit;
    const \u0275$index_1371_r77 = ctx.$index;
    \u0275\u0275property("value", \u0275$index_1371_r77);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r76.bankName);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 253);
    \u0275\u0275listener("change", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_14_Conditional_6_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r75);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.onCashLocationSelected(ctx_r1.payoutCashLocations[$event.target.value]));
    });
    \u0275\u0275elementStart(1, "option", 67);
    \u0275\u0275text(2, "Select payout location");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_14_Conditional_6_For_4_Template, 2, 2, "option", 68, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.payoutCashLocations);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 254);
    \u0275\u0275text(1, "No cash locations configured for this agent.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "input", 255);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235)(1, "p", 155);
    \u0275\u0275text(2, "Payout Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "label", 23);
    \u0275\u0275text(5, "Payout Location");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_14_Conditional_6_Template, 5, 0, "select", 252)(7, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_14_Conditional_7_Template, 3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.payoutCashLocations.length > 0 ? 6 : 7);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_15_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r79 = ctx.$implicit;
    const \u0275$index_1398_r80 = ctx.$index;
    \u0275\u0275property("value", \u0275$index_1398_r80);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r79.locationName);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 253);
    \u0275\u0275listener("change", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_15_Conditional_6_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r78);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.onLocationSelected(ctx_r1.payoutLocations[$event.target.value]));
    });
    \u0275\u0275elementStart(1, "option", 67);
    \u0275\u0275text(2, "Select wallet provider");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_15_Conditional_6_For_4_Template, 2, 2, "option", 68, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.payoutLocations);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 254);
    \u0275\u0275text(1, "No wallet providers configured for this agent.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "input", 257);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235)(1, "p", 155);
    \u0275\u0275text(2, "Wallet Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "label", 23);
    \u0275\u0275text(5, "Wallet Provider");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_15_Conditional_6_Template, 5, 0, "select", 252)(7, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_15_Conditional_7_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "label", 23);
    \u0275\u0275text(10, "Wallet Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 256);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.payoutLocations.length > 0 ? 6 : 7);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 258)(4, "option", 67);
    \u0275\u0275text(5, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 259);
    \u0275\u0275text(7, "Self");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 260);
    \u0275\u0275text(9, "Spouse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 261);
    \u0275\u0275text(11, "Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 262);
    \u0275\u0275text(13, "Child");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 263);
    \u0275\u0275text(15, "Sibling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 264);
    \u0275\u0275text(17, "Friend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 169);
    \u0275\u0275text(19, "Other");
    \u0275\u0275elementEnd()()();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275template(1, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_1_Template, 5, 1, "div")(2, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_2_Template, 4, 0, "div")(3, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_3_Template, 8, 0, "div")(4, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_4_Template, 4, 0, "div")(5, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_5_Template, 12, 0, "div")(6, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_6_Template, 6, 0, "div")(7, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_7_Template, 10, 0, "div")(8, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_8_Template, 6, 0, "div")(9, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_9_Template, 6, 0, "div")(10, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_10_Template, 6, 0, "div")(11, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_11_Template, 14, 0, "div")(12, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_12_Template, 6, 0, "div")(13, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_13_Template, 13, 2, "div", 235)(14, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_14_Template, 8, 1, "div", 235)(15, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_15_Template, 12, 1, "div", 235)(16, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Conditional_16_Template, 20, 0, "div");
    \u0275\u0275elementStart(17, "button", 156);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r68);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveNewReceiver());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("formGroup", ctx_r1.receiverForm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.apiType() !== "thirdParty" || ctx_r1.isFieldShownReceiver("fullName") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.apiType() !== "thirdParty" || ctx_r1.isFieldShownReceiver("phone") ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.apiType() !== "thirdParty" || ctx_r1.isFieldShownReceiver("country") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldShownReceiver("city") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldShownReceiver("gender") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldShownReceiver("dateOfBirth") ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldShownReceiver("nationality") ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldShownReceiver("occupation") ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldShownReceiver("address") ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldShownReceiver("postalCode") ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldShownReceiver("idDocumentType") ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldShownReceiver("idDocumentNumber") ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBankTransfer() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCashTransfer() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isWalletTransfer() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.apiType() !== "thirdParty" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.savingReceiver);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingReceiver ? "Saving..." : "Create Receiver", " ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129)(1, "h3", 145);
    \u0275\u0275text(2, "Select Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 230);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r65);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.receiverSearch, $event) || (ctx_r1.receiverSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Template_input_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r65);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.filterReceivers());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_4_Template, 3, 0, "div", 231)(5, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_5_Template, 2, 0, "p", 232);
    \u0275\u0275elementStart(6, "button", 148);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r65);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleCreateReceiver());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 44);
    \u0275\u0275element(8, "path", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " New Receiver ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Conditional_10_Template, 19, 19, "div", 150);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.receiverSearch);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filteredReceivers.length > 0 ? 4 : 5);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.showCreateReceiver ? 10 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 178);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToSubStep("customer", "backward"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 44);
    \u0275\u0275element(3, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Back to Customer ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_5_Template, 17, 9)(6, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Conditional_6_Template, 11, 3, "div", 129);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 83);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.proceedFromCustomerReceiver());
    });
    \u0275\u0275text(8, " Next: Compliance \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.store.selectedReceiver() ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.canProceedReceiver ? "bg-brand-600 hover:bg-brand-700 text-white shadow-sm" : "bg-surface-100 dark:bg-surface-800 text-surface-400 dark:text-surface-500");
    \u0275\u0275property("disabled", !ctx_r1.canProceedReceiver);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 123)(2, "div");
    \u0275\u0275template(3, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_3_Template, 2, 0, ":svg:svg", 124)(4, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_4_Template, 1, 0, "div", 125);
    \u0275\u0275text(5, " Customer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 126);
    \u0275\u0275element(7, "div", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275element(9, "div");
    \u0275\u0275text(10, " Receiver ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 128);
    \u0275\u0275template(12, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_12_Template, 5, 4, "div", 22)(13, SendMoneyComponent_Conditional_22_Conditional_2_Conditional_13_Template, 9, 4, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("flex items-center gap-1.5 text-xs font-semibold " + (ctx_r1.store.customerSubStep() === "customer" ? "text-brand-600 dark:text-brand-400" : "text-emerald-600 dark:text-emerald-400"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.customerSubStep() === "receiver" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.store.customerSubStep() === "receiver" ? "100%" : "0%");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex items-center gap-1.5 text-xs font-semibold " + (ctx_r1.store.customerSubStep() === "receiver" ? "text-brand-600 dark:text-brand-400" : "text-surface-400 dark:text-surface-500"));
    \u0275\u0275advance();
    \u0275\u0275classMap("w-3.5 h-3.5 rounded-full border-2 " + (ctx_r1.store.customerSubStep() === "receiver" ? "border-brand-500 dark:border-brand-400" : "border-surface-300 dark:border-surface-600"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.subStepAnimClass);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.customerSubStep() === "customer" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.customerSubStep() === "receiver" ? 13 : -1);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 268);
    \u0275\u0275text(1, "No compliance fields required. You can proceed.");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_3_Conditional_12_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r83 = ctx.$implicit;
    \u0275\u0275property("value", p_r83.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r83.name);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Purpose of Remittance ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 269);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_3_Conditional_12_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r82);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.purpose, $event) || (ctx_r1.purpose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 67);
    \u0275\u0275text(7, "Select purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, SendMoneyComponent_Conditional_22_Conditional_3_Conditional_12_For_9_Template, 2, 2, "option", 68, _forTrack5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.purpose);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.purposes);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_3_Conditional_13_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r85 = ctx.$implicit;
    \u0275\u0275property("value", s_r85.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r85.name);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Source of Funds ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 269);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_3_Conditional_13_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r84);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.sourceOfFunds, $event) || (ctx_r1.sourceOfFunds = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 67);
    \u0275\u0275text(7, "Select source");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, SendMoneyComponent_Conditional_22_Conditional_3_Conditional_13_For_9_Template, 2, 2, "option", 68, _forTrack5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sourceOfFunds);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sourcesOfFund);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_3_Conditional_14_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r87 = ctx.$implicit;
    \u0275\u0275property("value", r_r87.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r87.name);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 23);
    \u0275\u0275text(2, "Relationship to Receiver ");
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 269);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Conditional_22_Conditional_3_Conditional_14_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r86);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.relationship, $event) || (ctx_r1.relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 67);
    \u0275\u0275text(7, "Select relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, SendMoneyComponent_Conditional_22_Conditional_3_Conditional_14_For_9_Template, 2, 2, "option", 68, _forTrack5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.relationship);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.relationships);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 178);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 44);
    \u0275\u0275element(3, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 265)(6, "div")(7, "h3", 266);
    \u0275\u0275text(8, "Compliance Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 267);
    \u0275\u0275text(10, "Required for regulatory compliance.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, SendMoneyComponent_Conditional_22_Conditional_3_Conditional_11_Template, 2, 0, "p", 268)(12, SendMoneyComponent_Conditional_22_Conditional_3_Conditional_12_Template, 10, 1, "div")(13, SendMoneyComponent_Conditional_22_Conditional_3_Conditional_13_Template, 10, 1, "div")(14, SendMoneyComponent_Conditional_22_Conditional_3_Conditional_14_Template, 10, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 83);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.proceedFromCompliance());
    });
    \u0275\u0275text(16, " Review & Confirm \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(!ctx_r1.appSettings.requirePurpose && !ctx_r1.appSettings.requireSourceOfFunds && !ctx_r1.appSettings.requireRelationship ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.appSettings.requirePurpose ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.appSettings.requireSourceOfFunds ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.appSettings.requireRelationship ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap((!ctx_r1.appSettings.requirePurpose || ctx_r1.purpose) && (!ctx_r1.appSettings.requireSourceOfFunds || ctx_r1.sourceOfFunds) && (!ctx_r1.appSettings.requireRelationship || ctx_r1.relationship) ? "bg-brand-600 hover:bg-brand-700 text-white shadow-sm" : "bg-surface-100 dark:bg-surface-800 text-surface-400 dark:text-surface-500");
    \u0275\u0275property("disabled", ctx_r1.appSettings.requirePurpose && !ctx_r1.purpose || ctx_r1.appSettings.requireSourceOfFunds && !ctx_r1.sourceOfFunds || ctx_r1.appSettings.requireRelationship && !ctx_r1.relationship);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 272);
    \u0275\u0275text(1, "Partner API");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_4_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 283);
    \u0275\u0275text(2, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 123)(4, "div", 284);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 285);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(ctx_r1.store.selectedCustomer().fullName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.store.selectedCustomer().fullName);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_4_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 283);
    \u0275\u0275text(2, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 123)(4, "div", 286);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 285);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(ctx_r1.store.selectedReceiver().fullName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.store.selectedReceiver().fullName);
  }
}
function SendMoneyComponent_Conditional_22_Conditional_4_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 282);
    \u0275\u0275element(1, "span", 287);
    \u0275\u0275text(2, " Locking rate... ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_4_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 282);
    \u0275\u0275element(1, "span", 287);
    \u0275\u0275text(2, " Processing... ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_Conditional_22_Conditional_4_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Authorize & Send ");
  }
}
function SendMoneyComponent_Conditional_22_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 178);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r88);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 44);
    \u0275\u0275element(3, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 270)(6, "div", 271)(7, "h3", 266);
    \u0275\u0275text(8, "Transfer Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SendMoneyComponent_Conditional_22_Conditional_4_Conditional_9_Template, 2, 0, "span", 272);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 273)(11, "div")(12, "p", 57);
    \u0275\u0275text(13, "You send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 274);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 275);
    \u0275\u0275element(18, "path", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 11)(20, "p", 57);
    \u0275\u0275text(21, "They receive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 276);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 277)(26, "div", 278)(27, "span", 113);
    \u0275\u0275text(28, "Exchange rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 114);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 278)(33, "span", 113);
    \u0275\u0275text(34, "Service charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 114);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 279)(39, "span", 116);
    \u0275\u0275text(40, "Total payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 117);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 280);
    \u0275\u0275template(45, SendMoneyComponent_Conditional_22_Conditional_4_Conditional_45_Template, 8, 2, "div")(46, SendMoneyComponent_Conditional_22_Conditional_4_Conditional_46_Template, 8, 2, "div");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "button", 281);
    \u0275\u0275listener("click", function SendMoneyComponent_Conditional_22_Conditional_4_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r88);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitTransaction());
    });
    \u0275\u0275template(48, SendMoneyComponent_Conditional_22_Conditional_4_Conditional_48_Template, 3, 0, "span", 282)(49, SendMoneyComponent_Conditional_22_Conditional_4_Conditional_49_Template, 3, 0, "span", 282)(50, SendMoneyComponent_Conditional_22_Conditional_4_Conditional_50_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.store.apiType() === "thirdParty" ? 9 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(16, 16, ctx_r1.sendAmountInput, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(24, 19, ctx_r1.receiveAmount, "1.2-2"), " ", ctx_r1.receiverCurrency, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate3("1 ", ctx_r1.senderCurrency, " = ", \u0275\u0275pipeBind2(31, 22, ctx_r1.exchangeRate, "1.4-4"), " ", ctx_r1.receiverCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(37, 25, ctx_r1.serviceCharge, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(43, 28, ctx_r1.totalPayable, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.store.selectedCustomer() ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.selectedReceiver() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.store.submitting() || ctx_r1.lockingRate);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.lockingRate ? 48 : ctx_r1.store.submitting() ? 49 : 50);
  }
}
function SendMoneyComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, SendMoneyComponent_Conditional_22_Conditional_1_Template, 43, 15, "div", 22)(2, SendMoneyComponent_Conditional_22_Conditional_2_Template, 14, 13, "div", 22)(3, SendMoneyComponent_Conditional_22_Conditional_3_Template, 17, 7, "div", 22)(4, SendMoneyComponent_Conditional_22_Conditional_4_Template, 51, 31, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.stepAnimClass);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.currentStep() === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.currentStep() === 1 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.currentStep() === 2 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.currentStep() === 3 && !ctx_r1.store.successResult() ? 4 : -1);
  }
}
var PHONE_REGEX = /^\+?[\d\s\-().]+$/;
var CustomerFormSchema = external_exports.object({
  fullName: external_exports.string().min(1, "Full name is required").max(100),
  phone: external_exports.string().min(7, "Phone must be at least 7 digits").max(20).regex(PHONE_REGEX, "Phone must contain only digits, +, spaces, - or ()"),
  email: external_exports.union([external_exports.string().email("Invalid email"), external_exports.literal(""), external_exports.null(), external_exports.undefined()]).optional(),
  dateOfBirth: external_exports.union([external_exports.date(), external_exports.string(), external_exports.null()]).optional(),
  gender: external_exports.string().nullish(),
  nationality: external_exports.string().min(1, "Nationality is required"),
  country: external_exports.string().min(1, "Country is required"),
  city: external_exports.string().nullish(),
  state: external_exports.string().nullish(),
  postalCode: external_exports.string().nullish(),
  address: external_exports.union([external_exports.string().min(6, "Address must be more than 5 characters"), external_exports.literal(""), external_exports.null(), external_exports.undefined()]).optional(),
  idDocumentType: external_exports.string().min(1, "Document type is required"),
  idDocumentNumber: external_exports.string().min(1, "Document number is required"),
  docIssueDate: external_exports.union([external_exports.date(), external_exports.string(), external_exports.null()]).optional(),
  docExpiryDate: external_exports.union([external_exports.date(), external_exports.string(), external_exports.null()]).optional(),
  docIssuingCountry: external_exports.string().nullish()
});
var ReceiverFormSchema = external_exports.object({
  fullName: external_exports.string().min(1, "Full name is required").max(100),
  phone: external_exports.string().min(7, "Phone must be at least 7 digits").max(20).regex(PHONE_REGEX, "Phone must contain only digits, +, spaces, - or ()"),
  email: external_exports.union([external_exports.string().email("Invalid email"), external_exports.literal(""), external_exports.null(), external_exports.undefined()]).optional(),
  country: external_exports.string().nullish(),
  city: external_exports.string().nullish(),
  bankName: external_exports.string().nullish(),
  bankCode: external_exports.string().nullish(),
  accountNumber: external_exports.string().nullish(),
  branchName: external_exports.string().nullish(),
  branchCode: external_exports.string().nullish(),
  bankId: external_exports.number().nullish(),
  branchId: external_exports.number().nullish(),
  relationship: external_exports.string().nullish(),
  gender: external_exports.string().nullish(),
  dateOfBirth: external_exports.union([external_exports.date(), external_exports.string(), external_exports.null()]).optional(),
  nationality: external_exports.string().nullish(),
  occupation: external_exports.string().nullish(),
  address: external_exports.union([external_exports.string().min(6, "Address must be more than 5 characters"), external_exports.literal(""), external_exports.null(), external_exports.undefined()]).optional(),
  postalCode: external_exports.string().nullish(),
  idDocumentType: external_exports.string().nullish(),
  idDocumentNumber: external_exports.string().nullish()
});
var SendMoneyComponent = class _SendMoneyComponent {
  constructor() {
    this.store = inject(SendMoneyStore);
    this.api = inject(ApiService);
    this.auth = inject(AuthStateService);
    this.notify = inject(NotificationService);
    this.appSettings = inject(AppSettingsService);
    this.router = inject(Router);
    this.agentProfile = null;
    this.currentQuoteId = null;
    this.agentBalance = null;
    this.countries = [];
    this.paymentMethods = [];
    this.allCorridors = [];
    this.idTypes = [];
    this.customers = [];
    this.filteredCustomers = [];
    this.customerSearch = "";
    this.receivers = [];
    this.filteredReceivers = [];
    this.receiverSearch = "";
    this.showCustomerDropdown = false;
    this.showCreateCustomer = false;
    this.showCreateReceiver = false;
    this.showBranchPopup = false;
    this.showMissingCustomerForm = false;
    this.showMissingReceiverForm = false;
    this.stepAnimClass = "";
    this.subStepAnimClass = "";
    this.animating = false;
    this.senderCountry = "";
    this.senderCurrency = "";
    this.receiverCountry = "";
    this.receiverCountryCode = "";
    this.receiverCountryIso2 = "";
    this.receiverCountryIso3 = "";
    this.receiverCurrency = "";
    this.sendAmountInput = "";
    this.receiveAmountInput = "";
    this.receiveAmount = 0;
    this.exchangeRate = 0;
    this.serviceCharge = 0;
    this.totalPayable = 0;
    this.calculationDirection = "send";
    this.loadingCalc = false;
    this.calcError = "";
    this.calcTimestamp = null;
    this.rateStale = false;
    this.RATE_STALE_MS = 6e4;
    this.matchedPartners = [];
    this.selectedPartnerLocal = null;
    this.selectedPayoutModeId = null;
    this.payoutBanks = [];
    this.payoutLocations = [];
    this.payoutCashLocations = [];
    this.selectedPaymentMethodId = null;
    this.mgServiceOptions = [];
    this.selectedMgOption = null;
    this.availableSendCurrencies = [];
    this.selectedSendCurrency = "";
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
    this.savedPayoutDetails = [];
    this.selectedSavedDetail = null;
    this.showPayoutSwapPanel = false;
    this.showNewAccountForm = false;
    this.complianceViolations = [];
    this.customerForm = new FormGroup({
      fullName: new FormControl(""),
      phone: new FormControl(""),
      email: new FormControl(""),
      dateOfBirth: new FormControl(null),
      gender: new FormControl(""),
      nationality: new FormControl(""),
      country: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      postalCode: new FormControl(""),
      address: new FormControl(""),
      idDocumentType: new FormControl(""),
      idDocumentNumber: new FormControl(""),
      docIssueDate: new FormControl(null),
      docExpiryDate: new FormControl(null),
      docIssuingCountry: new FormControl("")
    });
    this.customerFormErrors = {};
    this.customerFrontFile = null;
    this.customerBackFile = null;
    this.customerFrontPreview = null;
    this.customerBackPreview = null;
    this.savingCustomer = false;
    this.receiverForm = new FormGroup({
      fullName: new FormControl(""),
      phone: new FormControl(""),
      email: new FormControl(""),
      country: new FormControl(""),
      city: new FormControl(""),
      bankName: new FormControl(""),
      bankCode: new FormControl(""),
      accountNumber: new FormControl(""),
      branchName: new FormControl(""),
      branchCode: new FormControl(""),
      bankId: new FormControl(null),
      branchId: new FormControl(null),
      relationship: new FormControl(""),
      gender: new FormControl(""),
      dateOfBirth: new FormControl(null),
      nationality: new FormControl(""),
      occupation: new FormControl(""),
      address: new FormControl(""),
      postalCode: new FormControl(""),
      idDocumentType: new FormControl(""),
      idDocumentNumber: new FormControl("")
    });
    this.receiverFormErrors = {};
    this.savingReceiver = false;
    this.missingCustomerData = {};
    this.missingReceiverData = {};
    this.savingMissingCustomer = false;
    this.savingMissingReceiver = false;
    this.branchSearch = "";
    this.branchBankName = "";
    this.allBranches = [];
    this.filteredBranches = [];
    this.branchContext = "form";
    this.purpose = "";
    this.sourceOfFunds = "";
    this.relationship = "";
    this.purposes = [];
    this.sourcesOfFund = [];
    this.relationships = [];
    this.lockingRate = false;
    this.showPinDialog = false;
    this.pinMode = "verify";
    this.pinInput = "";
    this.pinConfirm = "";
    this.pinError = "";
    this._prefillPayout = null;
    this.calcSubject = new Subject();
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.calcSubject.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(() => {
      this.calculateViaBackend();
    });
    this.loadInitialData();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ── Initial data load ─────────────────────────────────────────────────────
  loadInitialData() {
    this.api.getAgentProfile().subscribe((r) => {
      if (r.success) {
        this.agentProfile = r.data;
        this.senderCountry = r.data?.country ?? "";
        this.senderCurrency = r.data?.currency ?? "";
        this.selectedSendCurrency = r.data?.currency ?? "";
        this.initSendCurrencies();
        this.findRoute();
      }
    });
    this.api.getAgentBalance().subscribe((r) => {
      if (r.success) {
        this.agentBalance = r.data;
        this.store.setAgentBalanceZero(!r.data || r.data.availableBalance <= 0);
      }
    });
    this.api.getCountries().subscribe((r) => {
      if (r.success)
        this.countries = r.data ?? [];
    });
    this.api.getAgentPaymentMethods().subscribe((r) => {
      if (r.success)
        this.paymentMethods = r.data ?? [];
    });
    this.api.getAgentCorridors().subscribe((r) => {
      if (r.success)
        this.allCorridors = r.data ?? [];
    });
    this.api.getAgentCustomers().subscribe((r) => {
      if (r.success) {
        this.customers = r.data ?? [];
        this.filteredCustomers = this.customers;
      }
    });
    this.api.getReferenceSetupFields("IdType").subscribe((r) => {
      if (r.success)
        this.idTypes = r.data ?? [];
    });
    this.api.getReferenceSetupFields("Purpose").subscribe((r) => {
      if (r.success)
        this.purposes = r.data ?? [];
    });
    this.api.getReferenceSetupFields("SourceOfFund").subscribe((r) => {
      if (r.success)
        this.sourcesOfFund = r.data ?? [];
    });
    this.api.getReferenceSetupFields("Relationship").subscribe((r) => {
      if (r.success)
        this.relationships = r.data ?? [];
    });
  }
  // ── Step navigation ───────────────────────────────────────────────────────
  goToStep(step, direction = "forward") {
    if (this.animating)
      return;
    this.animating = true;
    const exitClass = direction === "forward" ? "slide-out-left" : "slide-out-right";
    const enterClass = direction === "forward" ? "slide-in-right" : "slide-in-left";
    this.stepAnimClass = exitClass;
    setTimeout(() => {
      this.store.setStep(step, direction);
      this.stepAnimClass = enterClass;
      setTimeout(() => {
        this.stepAnimClass = "";
        this.animating = false;
      }, 300);
    }, 250);
  }
  nextStep() {
    this.goToStep(this.store.currentStep() + 1, "forward");
  }
  prevStep() {
    if (this.store.currentStep() > 0) {
      this.goToStep(this.store.currentStep() - 1, "backward");
    }
  }
  goToSubStep(sub, direction = "forward") {
    if (this.animating)
      return;
    this.animating = true;
    const exitClass = direction === "forward" ? "slide-out-left" : "slide-out-right";
    const enterClass = direction === "forward" ? "slide-in-right" : "slide-in-left";
    this.subStepAnimClass = exitClass;
    setTimeout(() => {
      this.store.setCustomerSubStep(sub, direction);
      this.subStepAnimClass = enterClass;
      setTimeout(() => {
        this.subStepAnimClass = "";
        this.animating = false;
      }, 300);
    }, 250);
  }
  // ── Calculator ────────────────────────────────────────────────────────────
  toNum(v) {
    return typeof v === "number" ? v : parseFloat(String(v)) || 0;
  }
  onAmountKeyDown(e) {
    const ctrl = e.ctrlKey || e.metaKey;
    if (ctrl)
      return;
    const nav = ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Home", "End"];
    if (nav.includes(e.key))
      return;
    if (/^\d$/.test(e.key))
      return;
    if (e.key === "." && !e.target.value.includes("."))
      return;
    e.preventDefault();
  }
  onAmountPaste(e) {
    const text = e.clipboardData?.getData("text") ?? "";
    if (!/^\d*\.?\d*$/.test(text.trim()))
      e.preventDefault();
  }
  onAmountChange() {
    this.calculationDirection = "send";
    this.store.setSendAmount(this.toNum(this.sendAmountInput));
    const isMg = this.isMoneyGramPartner();
    const readyToCalc = isMg ? !!this.store.selectedPartner() && this.toNum(this.sendAmountInput) > 0 && !!this.senderCurrency && !!this.receiverCurrency : this.toNum(this.sendAmountInput) > 0 && !!this.senderCurrency && !!this.receiverCurrency && !!this.selectedPaymentMethodId;
    if (readyToCalc)
      this.calcSubject.next();
  }
  onReceiveAmountChange() {
    this.calculationDirection = "receive";
    const isMg = this.isMoneyGramPartner();
    const readyToCalc = isMg ? !!this.store.selectedPartner() && this.toNum(this.receiveAmountInput) > 0 && !!this.senderCurrency && !!this.receiverCurrency : this.toNum(this.receiveAmountInput) > 0 && !!this.senderCurrency && !!this.receiverCurrency && !!this.selectedPaymentMethodId;
    if (readyToCalc)
      this.calcSubject.next();
  }
  onReceiverCountryChange() {
    const found = this.countries.find((c) => c.name === this.receiverCountry);
    this.receiverCurrency = found?.currency ?? "";
    this.receiverCountryCode = found?.code ?? "";
    this.receiverCountryIso2 = found?.iso2 ?? found?.code ?? "";
    this.receiverCountryIso3 = found?.iso3 ?? "";
    this.initSendCurrencies();
    this.findRoute();
    this.onAmountChange();
  }
  initSendCurrencies() {
    const base = this.senderCurrency || this.agentProfile?.currency || "";
    this.availableSendCurrencies = base && base !== "USD" ? [base, "USD"] : base ? [base] : ["USD"];
    if (!this.selectedSendCurrency || !this.availableSendCurrencies.includes(this.selectedSendCurrency)) {
      this.selectedSendCurrency = base || "USD";
      this.senderCurrency = this.selectedSendCurrency;
    }
  }
  onSendCurrencyChange() {
    this.senderCurrency = this.selectedSendCurrency;
    this.onAmountChange();
  }
  onPaymentMethodChange() {
    this.payoutBanks = [];
    this.payoutCashLocations = [];
    this.payoutLocations = [];
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
    this.savedPayoutDetails = [];
    this.selectedSavedDetail = null;
    this.showPayoutSwapPanel = false;
    this.showNewAccountForm = false;
    this.store.setSelectedPaymentMethodId(this.selectedPaymentMethodId);
    this.findRoute();
    this.onAmountChange();
    this.loadReceiverPaymentDetail();
  }
  findRoute() {
    if (!this.senderCountry || !this.receiverCountry || !this.senderCurrency || !this.receiverCurrency)
      return;
    const corridor = this.allCorridors.find((c) => c.sourceCountry === this.senderCountry && c.destinationCountry === this.receiverCountry && c.sourceCurrency === this.senderCurrency && c.destinationCurrency === this.receiverCurrency);
    if (!corridor) {
      this.store.setRouteState(null, null, null);
      this.matchedPartners = [];
      this.currentQuoteId = null;
      this.calcError = "No route found for this corridor.";
      return;
    }
    this.matchedPartners = corridor.payoutPartners?.filter((p) => p.isActive) ?? [];
    const partner = this.matchedPartners[0] ?? null;
    const payoutModes = partner?.paymentModeIds ?? [];
    const payoutModeId = payoutModes[0] ?? null;
    this.selectedPayoutModeId = payoutModeId;
    this.selectedPartnerLocal = partner;
    this.store.setRouteState(corridor, partner, payoutModeId);
    this.store.setSelectedPaymentMethodId(this.selectedPaymentMethodId);
    this.calcError = "";
    this.mgServiceOptions = [];
    this.selectedMgOption = null;
    if (partner?.apiProviderKey === "moneygram" && this.receiverCountryIso3) {
      this.loadMoneyGramServiceOptions(this.receiverCountryIso3);
    }
    if (partner) {
      this.loadPayoutInfrastructure(partner.payoutAgentId);
    } else if ((this.isCashTransfer() || this.isWalletTransfer()) && this.agentProfile?.id) {
      this.loadPayoutInfrastructure(this.agentProfile.id);
    }
  }
  loadMoneyGramServiceOptions(iso3) {
    this.api.getMoneyGramServiceOptions(iso3).pipe(takeUntil(this.destroy$)).subscribe((r) => {
      if (r.success) {
        this.mgServiceOptions = r.data ?? [];
        if (this.mgServiceOptions.length === 1) {
          this.onMgOptionSelected(this.mgServiceOptions[0]);
        } else if (this.selectedMgOption) {
          const still = this.mgServiceOptions.find((o) => o.serviceOptionCode === this.selectedMgOption.serviceOptionCode && o.serviceOptionRoutingCode === this.selectedMgOption.serviceOptionRoutingCode);
          this.selectedMgOption = still ?? null;
        }
      }
    });
  }
  onMgOptionSelected(option) {
    if (!option)
      return;
    this.selectedMgOption = option;
    if (option.destinationCurrencyCode) {
      this.receiverCurrency = option.destinationCurrencyCode;
    }
    this.calcSubject.next();
  }
  loadMoneyGramPayoutFieldsAndBanks(option) {
    const partner = this.store.selectedPartner();
    if (!partner)
      return;
    const amount = this.toNum(this.sendAmountInput) || void 0;
    this.api.getMoneyGramPayoutFields(option.serviceOptionCode, this.senderCountry, this.receiverCountry, amount, option.serviceOptionRoutingCode ?? void 0).pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (option.payoutType === "bank") {
        this.api.getAgentBanksForPayout(partner.payoutAgentId, this.receiverCountryCode || void 0, void 0, option.serviceOptionRoutingCode ?? void 0).pipe(takeUntil(this.destroy$)).subscribe((r) => {
          if (r.success)
            this.payoutBanks = r.data ?? [];
        });
      }
    });
  }
  getMgOptionByIndex(i) {
    return this.mgServiceOptions[i] ?? null;
  }
  get mgCashOptions() {
    return this.mgServiceOptions.filter((o) => o.payoutType === "cash");
  }
  get mgBankOptions() {
    return this.mgServiceOptions.filter((o) => o.payoutType === "bank");
  }
  get mgWalletOptions() {
    return this.mgServiceOptions.filter((o) => o.payoutType === "wallet");
  }
  isMoneyGramPartner() {
    return this.store.selectedPartner()?.apiProviderKey === "moneygram";
  }
  canProceedCalc() {
    if (this.isMoneyGramPartner()) {
      return this.store.calculationDone() && !this.store.complianceBlocked() && this.store.sendAmount() > 0 && !!this.store.selectedPartner() && !!this.selectedMgOption && !this.store.agentBalanceZero();
    }
    return this.store.canProceedStep0();
  }
  loadPayoutInfrastructure(agentId) {
    const methodName = this.resolvedPaymentMethodName();
    if (methodName.includes("bank")) {
      this.api.getAgentBanksForPayout(agentId, this.receiverCountryCode || void 0, this.selectedPaymentMethodId ?? void 0).subscribe((r) => {
        if (r.success)
          this.payoutBanks = r.data ?? [];
      });
    } else if (methodName.includes("cash") || methodName.includes("pickup")) {
      this.api.getAgentCashLocations(agentId).subscribe((r) => {
        if (r.success)
          this.payoutCashLocations = r.data ?? [];
      });
    } else if (methodName.includes("wallet") || methodName.includes("mobile")) {
      this.api.getAgentWalletLocations(agentId).subscribe((r) => {
        if (r.success)
          this.payoutLocations = r.data ?? [];
      });
    } else {
      this.api.getAgentLocationsForPayout(agentId).subscribe((r) => {
        if (r.success)
          this.payoutLocations = r.data ?? [];
      });
    }
  }
  calculateViaBackend() {
    const partner = this.store.selectedPartner();
    const isSend = this.calculationDirection === "send";
    if (!partner)
      return;
    if (isSend && this.toNum(this.sendAmountInput) <= 0)
      return;
    if (!isSend && this.toNum(this.receiveAmountInput) <= 0)
      return;
    const isMg = partner.apiProviderKey === "moneygram";
    if (!isMg && !this.selectedPaymentMethodId)
      return;
    this.loadingCalc = true;
    this.complianceViolations = [];
    this.store.setCalculationDone(false);
    const dto = {
      sendAmount: isSend ? this.toNum(this.sendAmountInput) : 0,
      receiveAmount: isSend ? void 0 : this.toNum(this.receiveAmountInput),
      calculationDirection: this.calculationDirection,
      sendCurrency: this.senderCurrency,
      receiveCurrency: this.receiverCurrency,
      senderCountry: this.senderCountry,
      receiverCountry: this.receiverCountry,
      receiverCountryIso2: this.receiverCountryIso2,
      receiverCountryIso3: this.receiverCountryIso3,
      paymentMethodId: this.selectedPaymentMethodId ?? 0,
      paymentMethodName: this.paymentMethods.find((m) => m.id === this.selectedPaymentMethodId)?.name ?? "",
      serviceOptionCode: this.selectedMgOption?.serviceOptionCode ?? null,
      serviceOptionRoutingCode: this.selectedMgOption?.serviceOptionRoutingCode ?? null,
      payoutPartnerId: this.store.selectedPartner().payoutAgentId
    };
    this.api.calculateTransfer(dto).subscribe({
      next: (r) => {
        this.loadingCalc = false;
        if (r.success && r.data) {
          if (this.calculationDirection === "receive") {
            this.sendAmountInput = String(r.data.sendAmount ?? "");
            this.store.setSendAmount(r.data.sendAmount);
          }
          this.receiveAmount = r.data.receiveAmount;
          this.receiveAmountInput = String(r.data.receiveAmount ?? "");
          this.exchangeRate = r.data.exchangeRate;
          this.serviceCharge = r.data.serviceCharge;
          this.totalPayable = r.data.totalPayable;
          this.currentQuoteId = r.data.quoteId ?? null;
          this.calcTimestamp = Date.now();
          this.rateStale = false;
          setTimeout(() => {
            this.rateStale = true;
          }, this.RATE_STALE_MS);
          this.complianceViolations = r.data.complianceViolations ?? [];
          const blocked = this.complianceViolations.some((v) => v.action === "Block");
          this.store.setComplianceBlocked(blocked);
          this.store.setBalanceWarning(r.data.balanceWarning ?? "");
          this.store.setCalculationDone(true);
          this.calcError = "";
          const payoutAgentId = this.store.selectedPartner().payoutAgentId;
          this.api.getAgentFieldMappings(payoutAgentId).subscribe((mr) => {
            if (mr.success)
              this.store.setFieldMappings(mr.data ?? []);
          });
          if (partner.apiProviderKey === "moneygram" && this.selectedMgOption) {
            this.loadMoneyGramPayoutFieldsAndBanks(this.selectedMgOption);
          }
        } else {
          this.calcError = r.message ?? "Calculation failed.";
          this.complianceViolations = [];
          this.receiveAmount = 0;
          this.receiveAmountInput = "";
          this.exchangeRate = 0;
          this.serviceCharge = 0;
          this.totalPayable = 0;
          this.currentQuoteId = null;
          this.store.setComplianceBlocked(false);
          this.store.setCalculationDone(false);
        }
      },
      error: () => {
        this.loadingCalc = false;
        this.calcError = "Calculation error. Please try again.";
        this.complianceViolations = [];
        this.receiveAmount = 0;
        this.receiveAmountInput = "";
        this.exchangeRate = 0;
        this.serviceCharge = 0;
        this.totalPayable = 0;
        this.currentQuoteId = null;
        this.store.setComplianceBlocked(false);
      }
    });
  }
  proceedFromCalculator() {
    if (!this.canProceedCalc())
      return;
    if (this.store.apiType() === "thirdParty") {
      const partner = this.store.selectedPartner();
      const pmId = this.store.selectedPaymentMethodId();
      const isMg = partner.apiProviderKey === "moneygram";
      if (!isMg && !pmId) {
        this.notify.error("Please select a payment method before proceeding.");
        return;
      }
      if (isMg && !this.selectedMgOption) {
        this.notify.error("Please select a service option before proceeding.");
        return;
      }
      const mgOpt = this.selectedMgOption;
      const pmName = mgOpt ? mgOpt.serviceOptionName : this.paymentMethods.find((m) => Number(m.id) === Number(pmId))?.name ?? "";
      this.router.navigate(["/agent/third-party-send"], {
        state: {
          sendAmount: this.toNum(this.sendAmountInput),
          receiveAmount: this.receiveAmount,
          exchangeRate: this.exchangeRate,
          serviceCharge: this.serviceCharge,
          totalPayable: this.totalPayable,
          sendCurrency: this.senderCurrency,
          receiveCurrency: this.receiverCurrency,
          receiverCountry: this.receiverCountry,
          receiverCountryIso2: this.receiverCountryIso2,
          receiverCountryIso3: this.receiverCountryIso3,
          senderCountry: this.senderCountry,
          quoteId: this.currentQuoteId,
          partner,
          paymentMethodId: pmId,
          paymentMethodName: pmName,
          serviceOptionCode: mgOpt?.serviceOptionCode ?? null,
          serviceOptionRoutingCode: mgOpt?.serviceOptionRoutingCode ?? null,
          payoutType: mgOpt?.payoutType ?? null,
          payoutModeId: this.store.selectedPayoutModeId(),
          fieldMappings: this.store.fieldMappings()
        }
      });
      return;
    }
    this.api.getAgentCustomers().subscribe((r) => {
      if (r.success) {
        this.customers = r.data ?? [];
        this.filteredCustomers = this.customers;
      }
    });
    this.goToStep(1, "forward");
  }
  // ── Payout mode helpers ───────────────────────────────────────────────────
  resolvedPaymentMethodName() {
    const id = Number(this.selectedPaymentMethodId ?? this.store.selectedPaymentMethodId());
    if (!id)
      return "";
    return (this.paymentMethods.find((m) => m.id === id)?.name ?? "").toLowerCase();
  }
  isBankTransfer() {
    return this.resolvedPaymentMethodName().includes("bank");
  }
  isCashTransfer() {
    const n = this.resolvedPaymentMethodName();
    return n.includes("cash") || n.includes("pickup");
  }
  isWalletTransfer() {
    const n = this.resolvedPaymentMethodName();
    return n.includes("wallet") || n.includes("mobile");
  }
  get isPayoutReady() {
    const sd = this.selectedSavedDetail;
    const pd = this.transactionPayoutDetails;
    if (this.isBankTransfer())
      return !!(sd?.accountNumber ?? pd.accountNumber);
    if (this.isWalletTransfer())
      return !!(sd?.accountNumber ?? pd.accountNumber);
    if (this.isCashTransfer()) {
      if (this.isMoneyGramPartner())
        return true;
      return !!(sd?.bankName ?? pd.bankName);
    }
    return true;
  }
  get canProceedReceiver() {
    return this.store.canProceedStep1() && this.isPayoutReady;
  }
  // ── Customer search/select ────────────────────────────────────────────────
  hideCustomerDropdownDelayed() {
    setTimeout(() => {
      this.showCustomerDropdown = false;
    }, 200);
  }
  filterCustomers() {
    const q = this.customerSearch.toLowerCase();
    this.filteredCustomers = q ? this.customers.filter((c) => c.fullName.toLowerCase().includes(q) || (c.phone ?? "").toLowerCase().includes(q)) : this.customers;
    this.showCustomerDropdown = true;
  }
  selectCustomer(c) {
    this.store.setSelectedCustomer(c);
    this.customerSearch = c.fullName;
    this.showCustomerDropdown = false;
    this.showCreateCustomer = false;
    if (this.appSettings.kycEnabled && !c.isKycVerified) {
      this.store.setKycWarning("Customer KYC not verified. Proceed with caution.");
    } else {
      this.store.setKycWarning("");
    }
    if (c.dateOfBirth) {
      const age = Math.floor((Date.now() - new Date(c.dateOfBirth).getTime()) / 315576e5);
      if (age < (this.appSettings.minimumAge ?? 18)) {
        this.store.setDobWarning(`Customer is under ${this.appSettings.minimumAge ?? 18} years old.`);
      } else {
        this.store.setDobWarning("");
      }
    }
    this.checkMissingCustomerFields(c);
    this.api.getAgentReceiversByCustomer(c.id).subscribe((r) => {
      if (r.success) {
        this.receivers = r.data ?? [];
        this.filteredReceivers = this.receivers;
      }
    });
  }
  clearSelectedCustomer() {
    this.store.setSelectedCustomer(null);
    this.store.setSelectedReceiver(null);
    this.customerSearch = "";
    this.receivers = [];
    this.filteredReceivers = [];
    this.showMissingCustomerForm = false;
  }
  toggleCreateCustomer() {
    this.showCreateCustomer = !this.showCreateCustomer;
    if (this.showCreateCustomer) {
      this.customerForm.reset();
      this.customerFormErrors = {};
    }
  }
  // ── Missing fields logic ──────────────────────────────────────────────────
  checkMissingCustomerFields(c) {
    if (this.store.apiType() !== "thirdParty") {
      this.store.setMissingCustomerFields([]);
      return;
    }
    const data = c;
    const missing = this.store.customerMappings().filter((m) => {
      if (!m.isRequired)
        return false;
      const camelKey = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return !data[camelKey] && !data[m.ourColumn];
    });
    this.store.setMissingCustomerFields(missing);
    if (missing.length > 0) {
      this.missingCustomerData = {};
      this.showMissingCustomerForm = true;
    }
  }
  checkMissingReceiverFields(r) {
    if (this.store.apiType() !== "thirdParty") {
      this.store.setMissingReceiverFields([]);
      return;
    }
    const data = r;
    const missing = this.store.receiverMappings().filter((m) => {
      if (!m.isRequired)
        return false;
      const camelKey = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return !data[camelKey] && !data[m.ourColumn];
    });
    this.store.setMissingReceiverFields(missing);
    if (missing.length > 0) {
      this.missingReceiverData = {};
      this.showMissingReceiverForm = true;
    }
  }
  saveMissingCustomerFields() {
    const customer = this.store.selectedCustomer();
    if (!customer)
      return;
    const missing = this.store.missingCustomerFields();
    if (!missing.every((m) => !!this.missingCustomerData[m.ourColumn])) {
      this.notify.error("Please fill all required fields.");
      return;
    }
    this.savingMissingCustomer = true;
    this.api.updateAgentCustomer(customer.id, this.missingCustomerData).subscribe({
      next: (r) => {
        this.savingMissingCustomer = false;
        if (r.success) {
          this.store.setSelectedCustomer(r.data);
          this.store.setMissingCustomerFields([]);
          this.showMissingCustomerForm = false;
          this.notify.success("Customer profile updated.");
        } else {
          this.notify.error(r.message ?? "Update failed.");
        }
      },
      error: () => {
        this.savingMissingCustomer = false;
        this.notify.error("Update failed.");
      }
    });
  }
  saveMissingReceiverFields() {
    const receiver = this.store.selectedReceiver();
    if (!receiver)
      return;
    const missing = this.store.missingReceiverFields();
    if (!missing.every((m) => !!this.missingReceiverData[m.ourColumn])) {
      this.notify.error("Please fill all required fields.");
      return;
    }
    this.savingMissingReceiver = true;
    this.api.updateAgentReceiver(receiver.id, this.missingReceiverData).subscribe({
      next: (r) => {
        this.savingMissingReceiver = false;
        if (r.success) {
          this.store.setSelectedReceiver(r.data);
          this.store.setMissingReceiverFields([]);
          this.showMissingReceiverForm = false;
          this.notify.success("Receiver profile updated.");
        } else {
          this.notify.error(r.message ?? "Update failed.");
        }
      },
      error: () => {
        this.savingMissingReceiver = false;
        this.notify.error("Update failed.");
      }
    });
  }
  // ── Create customer ───────────────────────────────────────────────────────
  validateCustomerForm() {
    const v = this.customerForm.value;
    let schema = CustomerFormSchema;
    if (this.store.apiType() === "thirdParty") {
      const overrides = {};
      this.store.customerMappings().filter((m) => m.isRequired).forEach((m) => {
        const camelKey = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
        overrides[camelKey] = external_exports.string().min(1, `${m.ourColumn} is required`);
      });
      schema = CustomerFormSchema.extend(overrides);
    }
    const result = schema.safeParse(v);
    if (!result.success) {
      this.customerFormErrors = {};
      (result.error?.issues ?? []).forEach((e) => {
        if (e.path[0])
          this.customerFormErrors[e.path[0]] = e.message;
      });
      return false;
    }
    this.customerFormErrors = {};
    return true;
  }
  saveNewCustomer() {
    if (!this.validateCustomerForm())
      return;
    this.savingCustomer = true;
    const v = this.customerForm.value;
    const dto = {
      fullName: v.fullName,
      phone: v.phone,
      email: v.email || null,
      dateOfBirth: v.dateOfBirth,
      gender: v.gender || null,
      nationality: v.nationality,
      country: v.country,
      city: v.city || null,
      state: v.state || null,
      postalCode: v.postalCode || null,
      address: v.address || null,
      idDocumentType: v.idDocumentType,
      idDocumentNumber: v.idDocumentNumber,
      docIssueDate: v.docIssueDate,
      docExpiryDate: v.docExpiryDate,
      docIssuingCountry: v.docIssuingCountry || null
    };
    this.api.createAgentCustomer(dto).subscribe({
      next: (r) => {
        this.savingCustomer = false;
        if (r.success && r.data) {
          this.customers = [r.data, ...this.customers];
          this.filteredCustomers = this.customers;
          this.selectCustomer(r.data);
          this.showCreateCustomer = false;
          if ((this.customerFrontFile || this.customerBackFile) && !this.appSettings.skipDocumentUpload) {
            const fd = new FormData();
            fd.append("customerId", String(r.data.id));
            fd.append("documentType", v.idDocumentType ?? "");
            if (this.customerFrontFile)
              fd.append("frontImage", this.customerFrontFile);
            if (this.customerBackFile)
              fd.append("backImage", this.customerBackFile);
            this.api.uploadDocument(fd).subscribe();
          }
        } else {
          this.notify.error(r.message ?? "Failed to create customer.");
        }
      },
      error: () => {
        this.savingCustomer = false;
        this.notify.error("Failed to create customer.");
      }
    });
  }
  onFrontFileChange(e) {
    const f = e.target.files?.[0];
    if (!f)
      return;
    this.customerFrontFile = f;
    const rd = new FileReader();
    rd.onload = (ev) => this.customerFrontPreview = ev.target?.result;
    rd.readAsDataURL(f);
  }
  onBackFileChange(e) {
    const f = e.target.files?.[0];
    if (!f)
      return;
    this.customerBackFile = f;
    const rd = new FileReader();
    rd.onload = (ev) => this.customerBackPreview = ev.target?.result;
    rd.readAsDataURL(f);
  }
  proceedToReceiver() {
    if (!this.store.canProceedCustomer())
      return;
    this.goToSubStep("receiver", "forward");
  }
  // ── Receiver search/select ────────────────────────────────────────────────
  filterReceivers() {
    const q = this.receiverSearch.toLowerCase();
    this.filteredReceivers = q ? this.receivers.filter((r) => r.fullName.toLowerCase().includes(q) || (r.phone ?? "").toLowerCase().includes(q)) : this.receivers;
  }
  selectReceiver(r) {
    this.store.setSelectedReceiver(r);
    this.showCreateReceiver = false;
    this.checkMissingReceiverFields(r);
    this.savedPayoutDetails = [];
    this.selectedSavedDetail = null;
    this.showPayoutSwapPanel = false;
    this.showNewAccountForm = false;
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
    this.loadReceiverPaymentDetail();
  }
  clearSelectedReceiver() {
    this.store.setSelectedReceiver(null);
    this.showMissingReceiverForm = false;
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
    this.savedPayoutDetails = [];
    this.selectedSavedDetail = null;
    this.showPayoutSwapPanel = false;
    this.showNewAccountForm = false;
  }
  toggleCreateReceiver() {
    this.showCreateReceiver = !this.showCreateReceiver;
    if (this.showCreateReceiver) {
      this.receiverForm.reset();
      this.receiverFormErrors = {};
      if (this.receiverCountry) {
        this.receiverForm.patchValue({ country: this.receiverCountry });
      }
    }
  }
  validateReceiverForm() {
    const v = this.receiverForm.value;
    let schema = ReceiverFormSchema;
    if (this.store.apiType() === "thirdParty") {
      const overrides = {};
      this.store.receiverMappings().filter((m) => m.isRequired).forEach((m) => {
        const camelKey = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
        overrides[camelKey] = external_exports.string().min(1, `${m.ourColumn} is required`);
      });
      schema = ReceiverFormSchema.extend(overrides);
    }
    const result = schema.safeParse(v);
    if (!result.success) {
      this.receiverFormErrors = {};
      (result.error?.issues ?? []).forEach((e) => {
        if (e.path[0])
          this.receiverFormErrors[e.path[0]] = e.message;
      });
      return false;
    }
    this.receiverFormErrors = {};
    return true;
  }
  saveNewReceiver() {
    if (!this.validateReceiverForm())
      return;
    this.savingReceiver = true;
    const customer = this.store.selectedCustomer();
    if (!customer) {
      this.savingReceiver = false;
      return;
    }
    const v = this.receiverForm.value;
    const dto = {
      customerId: customer.id,
      fullName: v.fullName,
      phone: v.phone,
      email: v.email || null,
      country: v.country || null,
      city: v.city || null,
      bankName: v.bankName || null,
      bankCode: v.bankCode || null,
      accountNumber: v.accountNumber || null,
      branchName: v.branchName || null,
      branchCode: v.branchCode || null,
      bankId: v.bankId || null,
      branchId: v.branchId || null,
      relationship: v.relationship || null,
      gender: v.gender || null,
      dateOfBirth: v.dateOfBirth || null,
      nationality: v.nationality || null,
      occupation: v.occupation || null,
      address: v.address || null,
      postalCode: v.postalCode || null,
      idDocumentType: v.idDocumentType || null,
      idDocumentNumber: v.idDocumentNumber || null
    };
    this.api.createAgentReceiver(dto).subscribe({
      next: (r) => {
        this.savingReceiver = false;
        if (r.success && r.data) {
          this.receivers = [r.data, ...this.receivers];
          this.filteredReceivers = this.receivers;
          if (this.isBankTransfer() && v.accountNumber) {
            this._prefillPayout = {
              bankName: v.bankName || null,
              bankCode: v.bankCode || null,
              bankId: v.bankId || null,
              accountNumber: v.accountNumber || null,
              branchName: v.branchName || null,
              branchCode: v.branchCode || null,
              branchId: v.branchId || null
            };
          } else if (this.isCashTransfer() && v.bankName) {
            this._prefillPayout = {
              bankName: v.bankName || null,
              bankCode: v.bankCode || null,
              bankId: v.bankId || null,
              accountNumber: null,
              branchName: null,
              branchCode: null,
              branchId: null
            };
          } else if (this.isWalletTransfer() && v.accountNumber) {
            this._prefillPayout = {
              bankName: v.bankName || null,
              bankCode: v.bankCode || null,
              bankId: v.bankId || null,
              accountNumber: v.accountNumber || null,
              branchName: null,
              branchCode: null,
              branchId: null
            };
          }
          this.selectReceiver(r.data);
          this.showCreateReceiver = false;
        } else {
          this.notify.error(r.message ?? "Failed to create receiver.");
        }
      },
      error: () => {
        this.savingReceiver = false;
        this.notify.error("Failed to create receiver.");
      }
    });
  }
  // ── Bank / branch ─────────────────────────────────────────────────────────
  onBankSelected(bank) {
    this.receiverForm.patchValue({ bankName: bank.bankName, bankCode: bank.bankCode ?? "", bankId: bank.id, branchName: "", branchCode: "", branchId: null, accountNumber: "" });
    this.allBranches = bank.branches ?? [];
    this.filteredBranches = bank.branches ?? [];
    if (bank.branches?.length) {
      this.branchBankName = bank.bankName;
      this.branchContext = "form";
      this.showBranchPopup = true;
    }
  }
  onLocationSelected(location) {
    this.receiverForm.patchValue({ bankName: location.locationName, bankCode: location.locationCode ?? "", bankId: location.id, accountNumber: "" });
  }
  onCashLocationSelected(bank) {
    this.receiverForm.patchValue({ bankName: bank.bankName, bankCode: bank.bankCode ?? "", bankId: bank.id });
  }
  loadReceiverPaymentDetail() {
    const rv = this.store.selectedReceiver();
    if (!rv)
      return;
    if (this._prefillPayout) {
      this.transactionPayoutDetails = this._prefillPayout;
      this._prefillPayout = null;
      this.selectedSavedDetail = null;
      this.showNewAccountForm = false;
      this.savedPayoutDetails = [];
      return;
    }
    const methodType = this.isCashTransfer() ? "cash" : this.isWalletTransfer() ? "wallet" : "bank";
    this.api.getReceiverPaymentDetails(rv.id, methodType, this.receiverCountry).subscribe((r) => {
      const list = r?.data ?? [];
      this.savedPayoutDetails = list;
      if (list.length > 0) {
        this.selectedSavedDetail = list[0];
        this.showNewAccountForm = false;
      } else {
        this.selectedSavedDetail = null;
        this.showNewAccountForm = true;
      }
    });
  }
  selectSavedDetail(d) {
    this.selectedSavedDetail = d;
    this.showPayoutSwapPanel = false;
    this.showNewAccountForm = false;
  }
  useNewPayoutDetail() {
    this.selectedSavedDetail = null;
    this.showPayoutSwapPanel = false;
    this.showNewAccountForm = true;
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
  }
  togglePayoutSwapPanel() {
    this.showPayoutSwapPanel = !this.showPayoutSwapPanel;
  }
  onBankSelectedTxn(bank) {
    this.transactionPayoutDetails = {
      bankName: bank.bankName,
      bankCode: bank.bankCode ?? null,
      bankId: bank.id,
      accountNumber: this.transactionPayoutDetails.accountNumber,
      branchName: null,
      branchCode: null,
      branchId: null
    };
    this.allBranches = bank.branches ?? [];
    this.filteredBranches = bank.branches ?? [];
    if (bank.branches?.length) {
      this.branchBankName = bank.bankName;
      this.branchContext = "txn";
      this.showBranchPopup = true;
    }
  }
  onCashLocationSelectedTxn(bank) {
    this.transactionPayoutDetails = {
      bankName: bank.bankName,
      bankCode: bank.bankCode ?? null,
      bankId: bank.id,
      accountNumber: null,
      branchName: null,
      branchCode: null,
      branchId: null
    };
  }
  onLocationSelectedTxn(loc) {
    this.transactionPayoutDetails = {
      bankName: loc.locationName,
      bankCode: loc.locationCode ?? null,
      bankId: loc.id,
      accountNumber: this.transactionPayoutDetails.accountNumber,
      branchName: null,
      branchCode: null,
      branchId: null
    };
  }
  selectBranchTxn(branch) {
    this.transactionPayoutDetails = __spreadProps(__spreadValues({}, this.transactionPayoutDetails), { branchName: branch.branchName, branchCode: branch.branchCode ?? null, branchId: branch.id });
    this.showBranchPopup = false;
  }
  filterBranches() {
    const q = this.branchSearch.toLowerCase();
    this.filteredBranches = q ? this.allBranches.filter((b) => b.branchName.toLowerCase().includes(q) || (b.branchCode ?? "").toLowerCase().includes(q)) : this.allBranches;
  }
  selectBranch(branch) {
    this.receiverForm.patchValue({ branchName: branch.branchName, branchCode: branch.branchCode ?? "", branchId: branch.id });
    this.showBranchPopup = false;
  }
  proceedFromCustomerReceiver() {
    if (!this.canProceedReceiver)
      return;
    const sd = this.selectedSavedDetail;
    const pd = this.transactionPayoutDetails;
    if (this.isBankTransfer()) {
      const acctNum = sd?.accountNumber ?? pd.accountNumber;
      if (!acctNum) {
        this.notify.error("Account number is required for bank transfer.");
        return;
      }
    }
    if (this.isWalletTransfer()) {
      const acctNum = sd?.accountNumber ?? pd.accountNumber;
      if (!acctNum) {
        this.notify.error("Wallet number is required for wallet transfer.");
        return;
      }
    }
    if (this.isCashTransfer() && !this.isMoneyGramPartner()) {
      const loc = sd?.bankName ?? pd.bankName;
      if (!loc) {
        this.notify.error("Payout location is required for cash payment.");
        return;
      }
    }
    this.goToStep(2, "forward");
  }
  proceedFromCompliance() {
    this.goToStep(3, "forward");
  }
  // ── Submit / PIN ──────────────────────────────────────────────────────────
  submitTransaction() {
    const partner = this.store.selectedPartner();
    if (!partner)
      return;
    this.lockingRate = true;
    this.api.createRateQuote(this.senderCurrency, this.receiverCurrency, partner.payoutAgentId, this.receiverCountry, this.receiverCountryIso3).subscribe({
      next: (r) => {
        this.lockingRate = false;
        if (!r.success) {
          this.notify.error(r.message ?? "Failed to lock exchange rate. Please try again.");
          return;
        }
        this.currentQuoteId = r.data?.quoteId ?? null;
        this.pinInput = "";
        this.pinConfirm = "";
        this.pinError = "";
        this.api.getTransactionPinStatus().subscribe((pr) => {
          this.pinMode = pr?.data === true ? "verify" : "set";
          this.showPinDialog = true;
        });
      },
      error: () => {
        this.lockingRate = false;
        this.notify.error("Failed to lock exchange rate. Please try again.");
      }
    });
  }
  onPinSubmit() {
    this.pinError = "";
    if (!/^\d{4,6}$/.test(this.pinInput)) {
      this.pinError = "PIN must be 4\u20136 digits.";
      return;
    }
    if (this.pinMode === "set") {
      if (this.pinInput !== this.pinConfirm) {
        this.pinError = "PINs do not match.";
        return;
      }
      this.api.setTransactionPin(this.pinInput).subscribe((r) => {
        if (r?.success) {
          this.showPinDialog = false;
          this.executeSendTransaction();
        } else
          this.pinError = r?.message ?? "Failed to set PIN.";
      });
    } else {
      this.api.verifyTransactionPin(this.pinInput).subscribe((r) => {
        if (r?.success) {
          this.showPinDialog = false;
          this.executeSendTransaction();
        } else
          this.pinError = r?.message ?? "Incorrect PIN.";
      });
    }
  }
  executeSendTransaction() {
    this.store.setSubmitting(true);
    const c = this.store.selectedCustomer();
    const rv = this.store.selectedReceiver();
    const partner = this.store.selectedPartner();
    const sd = this.selectedSavedDetail;
    const pd = this.transactionPayoutDetails;
    const dto = {
      senderName: c.fullName,
      senderPhone: c.phone,
      senderEmail: c.email,
      senderIdType: c.idDocumentType,
      senderIdNumber: c.idDocumentNumber,
      senderCountry: c.country,
      receiverName: rv.fullName,
      receiverPhone: rv.phone,
      receiverEmail: rv.email,
      receiverCountry: rv.country,
      receiverBankName: sd?.bankName ?? pd.bankName ?? rv.bankName,
      receiverBankCode: sd?.bankCode ?? pd.bankCode ?? rv.bankCode,
      receiverAccountNumber: sd?.accountNumber ?? pd.accountNumber ?? rv.accountNumber,
      receiverBranchName: sd?.branchName ?? pd.branchName ?? rv.branchName,
      receiverBranchCode: sd?.branchCode ?? pd.branchCode ?? rv.branchCode,
      receiverBankId: sd?.bankId ?? pd.bankId ?? rv.bankId,
      receiverBranchId: sd?.branchId ?? pd.branchId ?? rv.branchId,
      sendAmount: this.toNum(this.sendAmountInput),
      exchangeRate: this.exchangeRate,
      receiveAmount: this.receiveAmount,
      sendCurrency: this.senderCurrency,
      receiveCurrency: this.receiverCurrency,
      paymentMethod: this.resolvePaymentMethodEnum(this.resolvedPaymentMethodName()),
      paymentMethodName: this.paymentMethods.find((m) => m.id === this.selectedPaymentMethodId)?.name ?? "",
      payoutMethod: this.resolvePaymentMethodEnum(this.paymentMethods.find((m) => m.id === this.selectedPayoutModeId)?.name ?? ""),
      payoutMethodName: this.paymentMethods.find((m) => m.id === this.selectedPayoutModeId)?.name ?? "",
      payoutPartnerId: partner.payoutAgentId,
      receiverCountryIso2: this.receiverCountryIso2,
      receiverCountryIso3: this.receiverCountryIso3,
      customerId: c.id,
      receiverId: rv.id,
      purpose: this.purpose,
      sourceOfFunds: this.sourceOfFunds,
      relationship: this.relationship,
      quoteId: this.currentQuoteId
    };
    this.api.sendTransaction(dto).subscribe({
      next: (r) => {
        this.store.setSubmitting(false);
        if (r.success)
          this.store.setSuccessResult(r.data);
        else
          this.notify.error(r.message ?? "Transaction failed.");
      },
      error: () => {
        this.store.setSubmitting(false);
        this.notify.error("Transaction submission failed.");
      }
    });
  }
  // ── Receipt ───────────────────────────────────────────────────────────────
  downloadReceipt() {
    const result = this.store.successResult();
    if (!result)
      return;
    const prefix = this.appSettings.txnNumberPrefix ?? "TXN";
    const html = `<html><head><style>body{font-family:sans-serif;padding:32px}h2{color:#1e40af}.row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #e5e7eb}.label{color:#6b7280}.value{font-weight:600}</style></head><body>
      <h2>${this.appSettings.companyName ?? "Remittance"} \u2014 Transaction Receipt</h2>
      <div class="row"><span class="label">Reference</span><span class="value">${prefix}${result.referenceNumber}</span></div>
      <div class="row"><span class="label">Sender</span><span class="value">${result.senderName}</span></div>
      <div class="row"><span class="label">Receiver</span><span class="value">${result.receiverName}</span></div>
      <div class="row"><span class="label">Send Amount</span><span class="value">${result.sendAmount} ${result.sendCurrency}</span></div>
      <div class="row"><span class="label">Receive Amount</span><span class="value">${result.receiveAmount} ${result.receiveCurrency}</span></div>
      <div class="row"><span class="label">Exchange Rate</span><span class="value">${result.exchangeRateApplied}</span></div>
      <div class="row"><span class="label">Status</span><span class="value">${result.status}</span></div>
      <div class="row"><span class="label">Date</span><span class="value">${new Date(result.createdAt).toLocaleString()}</span></div>
    </body></html>`;
    const w = window.open("", "_blank");
    if (w) {
      w.document.write(html);
      w.document.close();
      w.print();
    }
  }
  startNewTransaction() {
    this.store.reset();
    this.sendAmountInput = "";
    this.receiveAmountInput = "";
    this.receiveAmount = 0;
    this.exchangeRate = 0;
    this.serviceCharge = 0;
    this.totalPayable = 0;
    this.purpose = "";
    this.sourceOfFunds = "";
    this.relationship = "";
    this.customerSearch = "";
    this.receiverSearch = "";
    this.customers = [];
    this.receivers = [];
    this.complianceViolations = [];
    this.currentQuoteId = null;
    this.selectedSendCurrency = this.senderCurrency;
    this.initSendCurrencies();
    this.loadInitialData();
    this.goToStep(0, "backward");
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  getInitials(name) {
    return (name ?? "").split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  get balancePercent() {
    if (!this.agentBalance?.creditLimit)
      return 0;
    return Math.min(100, (this.agentBalance.creditLimit - this.agentBalance.availableBalance) / this.agentBalance.creditLimit * 100);
  }
  isFieldShownCustomer(col) {
    if (this.store.apiType() !== "thirdParty")
      return true;
    return this.store.customerMappings().some((m) => m.ourColumn.toLowerCase() === col.toLowerCase());
  }
  isFieldShownReceiver(col) {
    if (this.store.apiType() !== "thirdParty")
      return true;
    return this.store.receiverMappings().some((m) => m.ourColumn.toLowerCase() === col.toLowerCase());
  }
  resolvePaymentMethodEnum(name) {
    const n = name.toLowerCase();
    if (n.includes("bank"))
      return 1;
    if (n.includes("card"))
      return 2;
    if (n.includes("wallet") || n.includes("mobile"))
      return 3;
    return 0;
  }
  static {
    this.\u0275fac = function SendMoneyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SendMoneyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SendMoneyComponent, selectors: [["app-send-money"]], features: [\u0275\u0275ProvidersFeature([SendMoneyStore])], decls: 23, vars: 8, consts: [[1, "w-full", "px-6", "pb-8"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/50", "backdrop-blur-sm", "p-4"], [1, "fixed", "inset-0", "z-40", "flex", "items-center", "justify-center", "bg-black/50", "backdrop-blur-sm", "p-4"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "flex", "items-center", "gap-3"], ["aria-label", "Back to dashboard", 1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "text-surface-500", "dark:text-surface-400", "hover:bg-surface-100", "dark:hover:bg-surface-800", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "text-xl", "font-bold", "tracking-tight", "text-surface-900", "dark:text-surface-50"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mt-0.5"], [1, "px-2", "py-0.5", "rounded-full", "bg-violet-100", "dark:bg-violet-900/30", "text-violet-700", "dark:text-violet-300", "text-xs", "font-medium", "border", "border-violet-200", "dark:border-violet-700/50"], [1, "text-right"], [1, "mb-6"], [1, "flex", "items-center"], [1, "flex", "items-center", 3, "flex-1"], [1, "flex", "justify-between", "mt-2"], [3, "class"], [1, "success-overlay"], [1, "step-container", 3, "class"], [1, "pin-dialog", "bg-white", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-2xl", "p-8", "w-full", "max-w-sm", "shadow-2xl"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100", "mb-1"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mb-6"], [1, "space-y-4"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "mb-1"], ["type", "password", "maxlength", "6", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022", 1, "w-full", "px-4", "py-3", "rounded-xl", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-600", "text-surface-900", "dark:text-surface-100", "text-center", "text-2xl", "tracking-[0.5em]", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", 3, "ngModelChange", "ngModel"], [1, "text-rose-500", "dark:text-rose-400", "text-sm"], [1, "w-full", "py-3", "rounded-xl", "bg-brand-600", "hover:bg-brand-700", "text-white", "font-semibold", "transition-all", "active:scale-[0.98]", 3, "click"], [1, "w-full", "py-2", "text-sm", "text-surface-500", "dark:text-surface-400", "hover:text-surface-700", "dark:hover:text-surface-200", "transition-colors", 3, "click"], [1, "branch-popup", "bg-white", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-2xl", "p-6", "w-full", "max-w-md", "shadow-2xl"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-surface-400", "hover:text-surface-600", "dark:hover:text-surface-200", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["placeholder", "Search branch...", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-600", "text-surface-900", "dark:text-surface-100", "text-sm", "mb-3", "focus:outline-none", "focus:ring-1", "focus:ring-brand-500/40", 3, "ngModelChange", "ngModel"], [1, "max-h-64", "overflow-y-auto", "space-y-1"], [1, "w-full", "text-left", "px-3", "py-2.5", "rounded-lg", "hover:bg-surface-50", "dark:hover:bg-surface-800", "transition-colors", "text-sm"], [1, "text-surface-400", "dark:text-surface-500", "text-sm", "text-center", "py-4"], [1, "w-full", "text-left", "px-3", "py-2.5", "rounded-lg", "hover:bg-surface-50", "dark:hover:bg-surface-800", "transition-colors", "text-sm", 3, "click"], [1, "text-surface-800", "dark:text-surface-200", "font-medium"], [1, "text-surface-400", "dark:text-surface-500", "ml-2"], [1, "text-surface-400", "dark:text-surface-500", "text-xs"], [1, "text-xs", "text-surface-400", "dark:text-surface-500"], [1, "text-base", "font-bold", "text-emerald-600", "dark:text-emerald-400"], [1, "relative", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4"], [1, "flex-1", "h-0.5", "mx-1", "overflow-hidden", "rounded-full", "bg-surface-200", "dark:bg-surface-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M5 13l4 4L19 7"], [1, "h-full", "rounded-full", "transition-all", "duration-500"], [1, "success-card", "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "rounded-2xl", "p-8", "shadow-sm"], [1, "flex", "flex-col", "items-center", "mb-6"], [1, "w-16", "h-16", "rounded-full", "bg-emerald-100", "dark:bg-emerald-900/30", "flex", "items-center", "justify-center", "mb-4"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "w-8", "h-8", "text-emerald-600", "dark:text-emerald-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M5 13l4 4L19 7", 1, "checkmark-path"], [1, "text-xl", "font-bold", "text-surface-900", "dark:text-surface-50"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mt-1"], [1, "grid", "grid-cols-2", "gap-3", "mb-6"], [1, "bg-surface-50", "dark:bg-surface-800", "rounded-xl", "p-4"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "text-lg", "font-bold", "text-surface-900", "dark:text-surface-100", "mt-1"], [1, "text-lg", "font-bold", "text-emerald-600", "dark:text-emerald-400", "mt-1"], [1, "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100", "mt-1"], [1, "flex", "gap-3"], [1, "flex-1", "py-3", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "hover:bg-surface-50", "dark:hover:bg-surface-700", "text-surface-700", "dark:text-surface-300", "font-medium", "text-sm", "transition-all", "active:scale-[0.98]", 3, "click"], [1, "flex-1", "py-3", "rounded-xl", "bg-brand-600", "hover:bg-brand-700", "text-white", "font-semibold", "text-sm", "transition-all", "active:scale-[0.98]", 3, "click"], [1, "step-container"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-3"], [1, "w-full", "px-3", "py-2.5", "rounded-xl", "bg-white", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-700", "text-surface-900", "dark:text-surface-100", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "mb-1.5"], [1, "relative"], [1, "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "rounded-2xl", "p-5", "shadow-sm", "space-y-5"], [1, "grid", "grid-cols-[1fr,auto,1fr]", "items-end", "gap-3"], [1, "pb-0.5", "flex", "items-center", "justify-center"], [1, "w-8", "h-8", "rounded-full", "border-2", "border-brand-500/30", "border-t-brand-500", "animate-spin"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-emerald-500", "dark:text-emerald-400", "text-sm", "font-semibold"], ["type", "text", "inputmode", "decimal", "placeholder", "0.00", 1, "w-full", "pl-14", "pr-3", "py-3", "rounded-xl", "bg-emerald-50", "dark:bg-emerald-900/20", "border", "border-emerald-200", "dark:border-emerald-800/50", "text-emerald-700", "dark:text-emerald-400", "text-lg", "font-bold", "focus:outline-none", "focus:ring-2", "focus:ring-emerald-500/40", 3, "ngModelChange", "keydown", "paste", "ngModel"], [1, "flex", "items-center", "justify-center"], [1, "flex", "items-center", "justify-between", "gap-3", "px-3", "py-2.5", "rounded-xl", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-800/50", "text-amber-700", "dark:text-amber-300", "text-xs"], [1, "border-t", "border-surface-100", "dark:border-surface-800", "pt-4", "space-y-2"], [1, "space-y-2"], [1, "flex", "items-center", "gap-2", "p-3", "rounded-xl", "bg-rose-50", "dark:bg-rose-900/20", "border", "border-rose-200", "dark:border-rose-800/50", "text-rose-700", "dark:text-rose-300", "text-sm"], [1, "flex", "items-center", "gap-2", "p-3", "rounded-xl", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-800/50", "text-amber-700", "dark:text-amber-300", "text-sm"], [1, "w-full", "py-4", "rounded-2xl", "font-semibold", "text-base", "transition-all", "active:scale-[0.98]", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "inline", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 8l4 4m0 0l-4 4m4-4H3"], [1, "w-full", "appearance-none", "pl-10", "pr-9", "py-2.5", "rounded-xl", "bg-white", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-700", "text-surface-900", "dark:text-surface-100", "text-sm", "font-medium", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition", 3, "change", "disabled"], ["value", "", 3, "selected"], ["label", "\u2500\u2500 Cash Pickup"], ["label", "\u2500\u2500 Bank Transfer"], ["label", "\u2500\u2500 Mobile Wallet"], [1, "pointer-events-none", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-base"], [1, "pointer-events-none", "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-surface-400"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 9l-7 7-7-7"], [1, "mt-1.5", "flex", "items-center", "gap-1.5"], [3, "value", "selected"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-semibold", "uppercase", "tracking-wide"], [1, "text-[10px]", "text-surface-400", "dark:text-surface-500"], [1, "w-full", "appearance-none", "pl-10", "pr-9", "py-2.5", "rounded-xl", "bg-white", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-700", "text-surface-900", "dark:text-surface-100", "text-sm", "font-medium", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "transition", 3, "ngModelChange", "ngModel"], [1, "pointer-events-none", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"], [1, "absolute", "left-0", "top-0", "h-full", "pl-2", "pr-6", "rounded-l-xl", "bg-surface-100", "dark:bg-surface-700", "border-r", "border-surface-200", "dark:border-surface-600", "text-surface-700", "dark:text-surface-200", "text-sm", "font-semibold", "focus:outline-none", "appearance-none", "cursor-pointer", "z-10", 2, "width", "5.5rem", 3, "ngModelChange", "ngModel"], ["type", "text", "inputmode", "decimal", "placeholder", "0.00", 1, "w-full", "pl-24", "pr-3", "py-3", "rounded-xl", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-700", "text-surface-900", "dark:text-surface-100", "text-lg", "font-bold", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", 3, "ngModelChange", "keydown", "paste", "ngModel"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-surface-400", "dark:text-surface-500", "text-sm", "font-semibold"], ["type", "text", "inputmode", "decimal", "placeholder", "0.00", 1, "w-full", "pl-14", "pr-3", "py-3", "rounded-xl", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-700", "text-surface-900", "dark:text-surface-100", "text-lg", "font-bold", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", 3, "ngModelChange", "keydown", "paste", "ngModel"], [1, "px-3", "py-1", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-700", "text-xs", "text-surface-600", "dark:text-surface-300"], [1, "flex", "items-center", "gap-2", "min-w-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "truncate"], ["type", "button", 1, "flex-shrink-0", "px-2.5", "py-1", "rounded-lg", "bg-amber-100", "dark:bg-amber-800/40", "hover:bg-amber-200", "dark:hover:bg-amber-700/50", "font-medium", "transition-colors", "whitespace-nowrap", 3, "click"], [1, "flex", "justify-between", "text-sm"], [1, "text-surface-500", "dark:text-surface-400"], [1, "text-surface-700", "dark:text-surface-300"], [1, "flex", "justify-between", "text-sm", "font-semibold"], [1, "text-surface-700", "dark:text-surface-200"], [1, "text-surface-900", "dark:text-surface-100"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "flex-shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "font-medium"], [1, "text-xs", "opacity-80", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"], [1, "flex", "items-center", "gap-2"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5"], [1, "w-3.5", "h-3.5", "rounded-full", "border-2", "border-brand-500", "dark:border-brand-400"], [1, "flex-1", "h-0.5", "bg-surface-200", "dark:bg-surface-700", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "bg-brand-500", "transition-all", "duration-300"], [1, "sub-step-container"], [1, "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "rounded-2xl", "p-5", "space-y-3", "shadow-sm"], [1, "selected-card-appear", "bg-white", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-2xl", "p-4", "flex", "items-center", "gap-3", "shadow-sm"], [1, "w-10", "h-10", "rounded-full", "bg-brand-100", "dark:bg-brand-900/30", "flex", "items-center", "justify-center", "text-brand-600", "dark:text-brand-400", "font-bold", "flex-shrink-0", "text-sm"], [1, "flex-1", "min-w-0"], [1, "font-semibold", "text-surface-900", "dark:text-surface-100", "truncate"], [1, "text-surface-400", "hover:text-rose-500", "dark:hover:text-rose-400", "transition-colors", 3, "click"], [1, "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-800/50", "rounded-2xl", "p-5"], [1, "flex", "items-center", "gap-2", "mb-3"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "text-amber-500", "dark:text-amber-400", "flex-shrink-0"], [1, "text-sm", "font-semibold", "text-amber-700", "dark:text-amber-300"], [1, "space-y-3"], [1, "mt-4", "w-full", "py-2.5", "rounded-xl", "bg-amber-500", "hover:bg-amber-400", "text-white", "font-semibold", "text-sm", "transition-all", "disabled:opacity-50", 3, "click", "disabled"], [1, "block", "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400", "mb-1", "capitalize"], [1, "text-rose-500"], ["type", "text", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "bg-white", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-600", "text-surface-900", "dark:text-surface-100", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-amber-500/40", 3, "ngModelChange", "ngModel", "placeholder"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"], [1, "text-sm", "font-semibold", "text-surface-700", "dark:text-surface-200"], ["type", "text", "placeholder", "Search by name or phone...", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-600", "text-surface-900", "dark:text-surface-100", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", 3, "ngModelChange", "blur", "ngModel"], [1, "search-dropdown", "absolute", "top-full", "left-0", "right-0", "mt-1", "bg-white", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-xl", "shadow-xl", "z-10", "max-h-56", "overflow-y-auto"], [1, "flex", "items-center", "gap-2", "text-sm", "text-brand-600", "dark:text-brand-400", "hover:text-brand-700", "dark:hover:text-brand-300", "transition-colors", "font-medium", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "border-t", "border-surface-100", "dark:border-surface-800", "pt-4", "space-y-3", "mt-1", 3, "formGroup"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-3", "hover:bg-surface-50", "dark:hover:bg-surface-800", "text-left", "transition-colors"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-3", "hover:bg-surface-50", "dark:hover:bg-surface-800", "text-left", "transition-colors", 3, "mousedown"], [1, "w-8", "h-8", "rounded-full", "bg-surface-100", "dark:bg-surface-700", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-surface-600", "dark:text-surface-300", "flex-shrink-0"], [1, "text-sm", "text-surface-900", "dark:text-surface-100", "font-medium"], [1, "text-xs", "font-semibold", "text-surface-400", "dark:text-surface-500", "uppercase", "tracking-wide"], [1, "w-full", "py-3", "rounded-xl", "bg-brand-600", "hover:bg-brand-700", "text-white", "font-semibold", "text-sm", "transition-all", "disabled:opacity-50", 3, "click", "disabled"], ["type", "text", "formControlName", "fullName", "placeholder", "Full legal name", 1, "input-field"], [1, "text-rose-500", "text-xs", "mt-1"], ["type", "tel", "formControlName", "phone", "placeholder", "+44 7xxx xxxxxx", 1, "input-field"], ["formControlName", "nationality", 1, "input-field"], ["formControlName", "country", 1, "input-field"], ["formControlName", "idDocumentType", 1, "input-field"], ["type", "text", "formControlName", "idDocumentNumber", "placeholder", "Document number", 1, "input-field"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "email", "formControlName", "email", "placeholder", "email@example.com", 1, "input-field"], ["formControlName", "gender", 1, "input-field"], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["formControlName", "dateOfBirth", "dateFormat", "yy-mm-dd", "styleClass", "input-field w-full", 3, "maxDate"], ["type", "text", "formControlName", "city", "placeholder", "City", 1, "input-field"], [1, "grid", "grid-cols-2", "gap-3", "pt-1"], [1, "flex", "flex-col", "items-center", "justify-center", "h-20", "border-2", "border-dashed", "border-surface-200", "dark:border-surface-700", "rounded-xl", "cursor-pointer", "hover:border-brand-400", "dark:hover:border-brand-500", "transition-colors"], [1, "h-full", "w-full", "object-cover", "rounded-xl", 3, "src"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-6", "h-6", "text-surface-300", "dark:text-surface-600"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "flex", "items-center", "gap-1.5", "text-sm", "text-surface-500", "dark:text-surface-400", "hover:text-surface-700", "dark:hover:text-surface-200", "transition-colors", 3, "click"], [1, "w-10", "h-10", "rounded-full", "bg-violet-100", "dark:bg-violet-900/30", "flex", "items-center", "justify-center", "text-violet-600", "dark:text-violet-400", "font-bold", "flex-shrink-0", "text-sm"], [1, "rounded-xl", "border", "border-brand-200", "dark:border-brand-800/50", "overflow-hidden"], [1, "overflow-hidden", "rounded-2xl", "border", "border-surface-200/70", "dark:border-surface-700/60", "bg-white/95", "dark:bg-surface-900/95", "backdrop-blur-sm", "shadow-xl", "shadow-surface-900/5", "dark:shadow-surface-950/30"], [1, "bg-white", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-2xl", "p-4", "space-y-3", "shadow-sm"], [1, "flex", "items-center", "justify-between", "px-3", "py-2", "bg-brand-50", "dark:bg-brand-950/50", "border-b", "border-brand-200", "dark:border-brand-800/50"], [1, "flex", "items-center", "gap-1.5"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5", "text-brand-500", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"], [1, "text-[10px]", "font-bold", "text-brand-600", "dark:text-brand-400", "uppercase", "tracking-wider"], [1, "flex", "items-center", "gap-1", "px-2.5", "py-1", "rounded-lg", "text-[11px]", "font-semibold", "text-brand-600", "dark:text-brand-400", "bg-white", "dark:bg-surface-800", "border", "border-brand-200", "dark:border-brand-700", "hover:bg-brand-100", "dark:hover:bg-brand-900/40", "transition-colors", "duration-150", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"], [1, "px-3", "py-2.5", "bg-white", "dark:bg-surface-900", "grid", "grid-cols-2", "gap-x-4", "gap-y-1.5"], [1, "text-[10px]", "text-surface-400", "dark:text-surface-500", "uppercase", "tracking-wide", "font-medium"], [1, "text-xs", "font-semibold", "text-surface-800", "dark:text-surface-200", "truncate"], [1, "text-xs", "font-semibold", "text-surface-800", "dark:text-surface-200", "font-mono"], [1, "text-xs", "font-semibold", "text-surface-800", "dark:text-surface-200"], [1, "px-4", "pt-3", "pb-2", "border-b", "border-surface-100", "dark:border-surface-800"], [1, "text-xs", "font-semibold", "text-surface-500", "dark:text-surface-400", "uppercase", "tracking-wider"], [1, "p-2", "space-y-0.5"], [1, "stagger-item", "w-full", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "transition-all", "duration-150", "text-left", "group", "relative", "overflow-hidden", 3, "ngClass"], [1, "px-2", "pb-2"], [1, "w-full", "flex", "items-center", "gap-2.5", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "text-brand-600", "dark:text-brand-400", "border", "border-dashed", "border-brand-300", "dark:border-brand-700", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "hover:border-brand-400", "dark:hover:border-brand-600", "transition-all", "duration-150", "group", 3, "click"], [1, "w-5", "h-5", "rounded-full", "bg-brand-100", "dark:bg-brand-900/40", "flex", "items-center", "justify-center", "group-hover:bg-brand-200", "dark:group-hover:bg-brand-800/50", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3", "h-3", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M12 4v16m8-8H4"], [1, "stagger-item", "w-full", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "transition-all", "duration-150", "text-left", "group", "relative", "overflow-hidden", 3, "click", "ngClass"], [1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "w-0.5", "h-6", "rounded-r-full", "bg-brand-500"], [1, "w-4", "h-4", "rounded-full", "border-2", "flex-shrink-0", "flex", "items-center", "justify-center", "transition-all", "duration-150", 3, "ngClass"], [1, "w-2", "h-2", "rounded-full", "bg-brand-500"], [1, "text-sm", "font-medium", "text-surface-900", "dark:text-surface-100", "truncate"], [1, "text-xs", "text-surface-400", "dark:text-surface-500", "font-mono"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "text-brand-500", "flex-shrink-0"], [1, "w-6", "h-6", "rounded-lg", "bg-brand-100", "dark:bg-brand-900/40", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5", "text-brand-600", "dark:text-brand-400"], [1, "text-xs", "text-amber-600", "dark:text-amber-400", "flex", "items-center", "gap-1.5"], ["type", "text", "placeholder", "Enter account number", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-600", "text-surface-900", "dark:text-surface-100", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "transition-shadow", "duration-150", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-3", "py-2.5", "rounded-xl", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-600", "text-surface-900", "dark:text-surface-100", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "transition-shadow", "duration-150", 3, "change"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5", "flex-shrink-0"], ["type", "button", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-600", "text-left", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "flex", "items-center", "justify-between", "group", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "text-surface-400", "group-hover:text-brand-400", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "w-6", "h-6", "rounded-lg", "bg-emerald-100", "dark:bg-emerald-900/40", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5", "text-emerald-600", "dark:text-emerald-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "w-full", "px-3", "py-2.5", "rounded-xl", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-600", "text-surface-900", "dark:text-surface-100", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "transition-shadow", "duration-150"], [1, "w-6", "h-6", "rounded-lg", "bg-violet-100", "dark:bg-violet-900/40", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5", "text-violet-600", "dark:text-violet-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"], ["type", "text", "placeholder", "Enter wallet number", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-600", "text-surface-900", "dark:text-surface-100", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", "transition-shadow", "duration-150", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Search receivers...", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-600", "text-surface-900", "dark:text-surface-100", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/40", 3, "ngModelChange", "ngModel"], [1, "space-y-1", "max-h-48", "overflow-y-auto"], [1, "text-sm", "text-surface-400", "dark:text-surface-500", "text-center", "py-2"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "hover:bg-surface-50", "dark:hover:bg-surface-800", "text-left", "transition-colors"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "hover:bg-surface-50", "dark:hover:bg-surface-800", "text-left", "transition-colors", 3, "click"], [1, "space-y-3", "pt-1"], ["type", "text", "formControlName", "fullName", 1, "input-field"], ["type", "tel", "formControlName", "phone", 1, "input-field"], ["type", "date", "formControlName", "dateOfBirth", 1, "input-field"], ["type", "text", "formControlName", "occupation", "placeholder", "Occupation", 1, "input-field"], ["type", "text", "formControlName", "address", "placeholder", "Street address", 1, "input-field"], ["type", "text", "formControlName", "postalCode", "placeholder", "Postal code", 1, "input-field"], ["value", "PASSPORT"], ["value", "NATIONAL_ID"], ["value", "DRIVING_LICENSE"], [1, "input-field", "mb-2"], ["type", "text", "formControlName", "bankName", "placeholder", "Bank name", 1, "input-field"], ["type", "text", "formControlName", "accountNumber", "placeholder", "Account number", 1, "input-field"], [1, "input-field", "mb-2", 3, "change"], [1, "flex", "gap-2"], ["type", "text", "formControlName", "branchName", "readonly", "", "placeholder", "Select branch", 1, "input-field", "flex-1"], ["type", "button", 1, "px-3", "py-2.5", "rounded-xl", "bg-surface-100", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-700", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-200", "dark:hover:bg-surface-700", "text-sm", "transition-colors", 3, "click"], [1, "input-field"], [1, "input-field", 3, "change"], [1, "text-xs", "text-amber-500", "dark:text-amber-400", "mb-1"], ["type", "text", "formControlName", "bankName", "placeholder", "Enter payout location name", 1, "input-field"], ["type", "text", "formControlName", "accountNumber", "placeholder", "Wallet number / account", 1, "input-field"], ["type", "text", "formControlName", "bankName", "placeholder", "Enter wallet provider name", 1, "input-field"], ["formControlName", "relationship", 1, "input-field"], ["value", "Self"], ["value", "Spouse"], ["value", "Parent"], ["value", "Child"], ["value", "Sibling"], ["value", "Friend"], [1, "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "rounded-2xl", "p-6", "shadow-sm", "space-y-5"], [1, "text-base", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mt-1"], [1, "text-sm", "text-surface-400", "dark:text-surface-500", "text-center", "py-4"], [1, "input-field", 3, "ngModelChange", "ngModel"], [1, "bg-white", "dark:bg-surface-900", "border", "border-surface-100", "dark:border-surface-800", "rounded-2xl", "p-6", "shadow-sm", "space-y-4"], [1, "flex", "items-center", "justify-between"], [1, "px-2", "py-0.5", "rounded-full", "bg-violet-100", "dark:bg-violet-900/30", "text-violet-700", "dark:text-violet-300", "text-xs", "border", "border-violet-200", "dark:border-violet-700/50"], [1, "flex", "items-center", "justify-between", "py-4", "border-y", "border-surface-100", "dark:border-surface-800"], [1, "text-xl", "font-bold", "text-surface-900", "dark:text-surface-100", "mt-0.5"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-5", "h-5", "text-surface-300", "dark:text-surface-600"], [1, "text-xl", "font-bold", "text-emerald-600", "dark:text-emerald-400", "mt-0.5"], [1, "space-y-2", "text-sm"], [1, "flex", "justify-between"], [1, "flex", "justify-between", "font-semibold", "border-t", "border-surface-100", "dark:border-surface-800", "pt-2", "mt-1"], [1, "border-t", "border-surface-100", "dark:border-surface-800", "pt-4", "grid", "grid-cols-2", "gap-4"], [1, "w-full", "py-4", "rounded-2xl", "font-bold", "text-base", "transition-all", "active:scale-[0.98]", "bg-gradient-to-r", "from-brand-600", "to-brand-500", "hover:from-brand-700", "hover:to-brand-600", "text-white", "shadow-lg", "shadow-brand-500/25", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mb-1.5"], [1, "w-7", "h-7", "rounded-full", "bg-brand-100", "dark:bg-brand-900/30", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-brand-600", "dark:text-brand-400", "flex-shrink-0"], [1, "text-sm", "text-surface-900", "dark:text-surface-100", "font-medium", "truncate"], [1, "w-7", "h-7", "rounded-full", "bg-violet-100", "dark:bg-violet-900/30", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-violet-600", "dark:text-violet-400", "flex-shrink-0"], [1, "w-4", "h-4", "rounded-full", "border-2", "border-white/40", "border-t-white", "animate-spin"]], template: function SendMoneyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, SendMoneyComponent_Conditional_1_Template, 17, 6, "div", 1)(2, SendMoneyComponent_Conditional_2_Template, 13, 3, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "button", 5);
        \u0275\u0275listener("click", function SendMoneyComponent_Template_button_click_5_listener() {
          return ctx.router.navigate(["/agent/dashboard"]);
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 6);
        \u0275\u0275element(7, "path", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "div")(9, "h1", 8);
        \u0275\u0275text(10, "Send Money");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, SendMoneyComponent_Conditional_11_Template, 2, 2, "p", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, SendMoneyComponent_Conditional_12_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, SendMoneyComponent_Conditional_13_Template, 6, 5, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12)(15, "div", 13);
        \u0275\u0275repeaterCreate(16, SendMoneyComponent_For_17_Template, 6, 6, "div", 14, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 15);
        \u0275\u0275repeaterCreate(19, SendMoneyComponent_For_20_Template, 2, 3, "span", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, SendMoneyComponent_Conditional_21_Template, 38, 14, "div", 17)(22, SendMoneyComponent_Conditional_22_Template, 5, 6, "div", 18);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPinDialog ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showBranchPopup ? 2 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.agentProfile ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.store.apiType() === "thirdParty" ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.agentBalance ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(7, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.store.successResult() ? 21 : 22);
      }
    }, dependencies: [CommonModule, NgClass, SlicePipe, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, DatePicker], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.625rem;\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #0f172a;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  outline: none;\n  transition:\n    border-color 0.15s ease,\n    background 0.15s ease,\n    color 0.15s ease;\n  appearance: none;\n  -webkit-appearance: none;\n}\n.input-field[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.input-field[_ngcontent-%COMP%]:focus {\n  border-color: #60a5fa;\n  background: #f8fafc;\n}\n.input-field[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.input-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .input-field[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n  color: #f1f5f9;\n}\n.dark[_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]::placeholder, .dark   [_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.dark[_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]:focus, .dark   [_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]:focus {\n  border-color: #60a5fa;\n  background: #283548;\n}\n.dark[_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #f1f5f9;\n}\n.step-container[_ngcontent-%COMP%], \n.sub-step-container[_ngcontent-%COMP%] {\n  will-change: transform, opacity;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(36px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInLeft {\n  from {\n    transform: translateX(-36px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideOutLeft {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(-36px);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideOutRight {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(36px);\n    opacity: 0;\n  }\n}\n.slide-in-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.slide-in-left[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInLeft 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.slide-out-left[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideOutLeft 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.slide-out-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideOutRight 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_dropdownSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-6px) scaleY(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scaleY(1);\n  }\n}\n.search-dropdown[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dropdownSlide 0.16s ease-out forwards;\n  transform-origin: top center;\n}\n@keyframes _ngcontent-%COMP%_selectedCardIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.selected-card-appear[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_selectedCardIn 0.2s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_alertSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.alert-item[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_alertSlideIn 0.2s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_calcValuePop {\n  0% {\n    transform: scale(1);\n  }\n  40% {\n    transform: scale(1.04);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.calc-value-update[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_calcValuePop 0.25s ease-out;\n}\n@keyframes _ngcontent-%COMP%_overlayFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_successCardBounce {\n  0% {\n    opacity: 0;\n    transform: scale(0.88) translateY(24px);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.02) translateY(-4px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.success-overlay[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_overlayFadeIn 0.25s ease-out forwards;\n}\n.success-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_successCardBounce 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n@keyframes _ngcontent-%COMP%_checkmarkDraw {\n  from {\n    stroke-dashoffset: 60;\n    opacity: 0;\n  }\n  to {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n}\n.checkmark-path[_ngcontent-%COMP%] {\n  stroke-dasharray: 60;\n  stroke-dashoffset: 60;\n  animation: _ngcontent-%COMP%_checkmarkDraw 0.5s ease-out 0.2s forwards;\n}\n@keyframes _ngcontent-%COMP%_pinDialogIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -46%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.pin-dialog[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pinDialogIn 0.22s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_branchPopupIn {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.branch-popup[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_branchPopupIn 0.22s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_stepPulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.35);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);\n  }\n}\n.step-num-active[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_stepPulse 2.2s ease-in-out infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .slide-in-right[_ngcontent-%COMP%], \n   .slide-in-left[_ngcontent-%COMP%], \n   .slide-out-left[_ngcontent-%COMP%], \n   .slide-out-right[_ngcontent-%COMP%], \n   .search-dropdown[_ngcontent-%COMP%], \n   .selected-card-appear[_ngcontent-%COMP%], \n   .alert-item[_ngcontent-%COMP%], \n   .success-overlay[_ngcontent-%COMP%], \n   .success-card[_ngcontent-%COMP%], \n   .pin-dialog[_ngcontent-%COMP%], \n   .branch-popup[_ngcontent-%COMP%], \n   .step-num-active[_ngcontent-%COMP%], \n   .calc-value-update[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: none !important;\n    opacity: 1 !important;\n    transform: none !important;\n  }\n}\n/*# sourceMappingURL=send-money.component.css.map */"], data: { animation: [
      trigger("slideDown", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(-10px)", maxHeight: "0px" }),
          animate("220ms cubic-bezier(0.4,0,0.2,1)", style({ opacity: 1, transform: "translateY(0)", maxHeight: "500px" }))
        ]),
        transition(":leave", [
          animate("160ms cubic-bezier(0.4,0,1,1)", style({ opacity: 0, transform: "translateY(-6px)", maxHeight: "0px" }))
        ])
      ]),
      trigger("fadeSlideUp", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(8px)" }),
          animate("200ms 40ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({ opacity: 0, transform: "translateY(4px)" }))
        ])
      ]),
      trigger("staggerList", [
        transition(":enter", [
          query(".stagger-item", [
            style({ opacity: 0, transform: "translateX(-8px)" }),
            stagger(50, animate("180ms ease-out", style({ opacity: 1, transform: "translateX(0)" })))
          ], { optional: true })
        ])
      ]),
      trigger("swapIconRotate", [
        state("closed", style({ transform: "rotate(0deg)" })),
        state("open", style({ transform: "rotate(180deg)" })),
        transition("closed <=> open", animate("200ms ease-in-out"))
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SendMoneyComponent, [{
    type: Component,
    args: [{ selector: "app-send-money", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, DecimalPipe, DatePicker], providers: [SendMoneyStore], animations: [
      trigger("slideDown", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(-10px)", maxHeight: "0px" }),
          animate("220ms cubic-bezier(0.4,0,0.2,1)", style({ opacity: 1, transform: "translateY(0)", maxHeight: "500px" }))
        ]),
        transition(":leave", [
          animate("160ms cubic-bezier(0.4,0,1,1)", style({ opacity: 0, transform: "translateY(-6px)", maxHeight: "0px" }))
        ])
      ]),
      trigger("fadeSlideUp", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(8px)" }),
          animate("200ms 40ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({ opacity: 0, transform: "translateY(4px)" }))
        ])
      ]),
      trigger("staggerList", [
        transition(":enter", [
          query(".stagger-item", [
            style({ opacity: 0, transform: "translateX(-8px)" }),
            stagger(50, animate("180ms ease-out", style({ opacity: 1, transform: "translateX(0)" })))
          ], { optional: true })
        ])
      ]),
      trigger("swapIconRotate", [
        state("closed", style({ transform: "rotate(0deg)" })),
        state("open", style({ transform: "rotate(180deg)" })),
        transition("closed <=> open", animate("200ms ease-in-out"))
      ])
    ], template: `<!-- Send Money Wizard -->
<div class="w-full px-6 pb-8">

  <!-- \u2500\u2500 PIN Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (showPinDialog) {
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
    <div class="pin-dialog bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-2xl p-8 w-full max-w-sm shadow-2xl">
      <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-1">
        {{ pinMode === 'set' ? 'Create Transaction PIN' : 'Authorize Transfer' }}
      </h3>
      <p class="text-sm text-surface-500 dark:text-surface-400 mb-6">
        {{ pinMode === 'set' ? 'Set a 4\u20136 digit PIN for future transactions.' : 'Enter your PIN to authorize this transfer.' }}
      </p>
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">PIN</label>
          <input type="password" [(ngModel)]="pinInput" maxlength="6" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022"
            class="w-full px-4 py-3 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-center text-2xl tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-brand-500/40" />
        </div>
        @if (pinMode === 'set') {
        <div>
          <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Confirm PIN</label>
          <input type="password" [(ngModel)]="pinConfirm" maxlength="6" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022"
            class="w-full px-4 py-3 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-center text-2xl tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-brand-500/40" />
        </div>
        }
        @if (pinError) {
        <p class="text-rose-500 dark:text-rose-400 text-sm">{{ pinError }}</p>
        }
        <button (click)="onPinSubmit()"
          class="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-all active:scale-[0.98]">
          {{ pinMode === 'set' ? 'Set PIN & Send' : 'Authorize' }}
        </button>
        <button (click)="showPinDialog = false"
          class="w-full py-2 text-sm text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-200 transition-colors">
          Cancel
        </button>
      </div>
    </div>
  </div>
  }

  <!-- \u2500\u2500 Branch Popup \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (showBranchPopup) {
  <div class="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
    <div class="branch-popup bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-semibold text-surface-900 dark:text-surface-100">Select Branch \u2014 {{ branchBankName }}</h3>
        <button (click)="showBranchPopup = false" class="text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <input [(ngModel)]="branchSearch" (ngModelChange)="filterBranches()" placeholder="Search branch..."
        class="w-full px-3 py-2.5 rounded-lg bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-sm mb-3 focus:outline-none focus:ring-1 focus:ring-brand-500/40" />
      <div class="max-h-64 overflow-y-auto space-y-1">
        @for (branch of filteredBranches; track branch.id) {
        <button (click)="branchContext === 'txn' ? selectBranchTxn(branch) : selectBranch(branch)"
          class="w-full text-left px-3 py-2.5 rounded-lg hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors text-sm">
          <span class="text-surface-800 dark:text-surface-200 font-medium">{{ branch.branchName }}</span>
          @if (branch.branchCode) { <span class="text-surface-400 dark:text-surface-500 ml-2">{{ branch.branchCode }}</span> }
          @if (branch.address) { <div class="text-surface-400 dark:text-surface-500 text-xs">{{ branch.address }}</div> }
        </button>
        }
        @empty {
        <p class="text-surface-400 dark:text-surface-500 text-sm text-center py-4">No branches found</p>
        }
      </div>
    </div>
  </div>
  }

  <!-- \u2500\u2500 Page Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="flex items-center justify-between mb-6">
    <div class="flex items-center gap-3">
      <button (click)="router.navigate(['/agent/dashboard'])" aria-label="Back to dashboard"
        class="flex h-9 w-9 items-center justify-center rounded-xl text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <div>
        <h1 class="text-xl font-bold tracking-tight text-surface-900 dark:text-surface-50">Send Money</h1>
        @if (agentProfile) {
        <p class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">From: {{ agentProfile.country }} \xB7 {{ agentProfile.businessName }}</p>
        }
      </div>
      @if (store.apiType() === 'thirdParty') {
      <span class="px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-medium border border-violet-200 dark:border-violet-700/50">Partner API</span>
      }
    </div>
    @if (agentBalance) {
    <div class="text-right">
      <p class="text-xs text-surface-400 dark:text-surface-500">Available Balance</p>
      <p class="text-base font-bold text-emerald-600 dark:text-emerald-400">{{ agentBalance.availableBalance | number:'1.2-2' }} {{ agentBalance.currency ?? agentProfile?.currency }}</p>
    </div>
    }
  </div>

  <!-- \u2500\u2500 Step Progress Bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="mb-6">
    <div class="flex items-center">
      @for (step of [0,1,2,3]; track step) {
      <div class="flex items-center" [class.flex-1]="step < 3">
        <div class="relative flex-shrink-0">
          <div [class]="'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ' +
            (store.successResult() || step < store.currentStep()
              ? 'bg-emerald-500 text-white'
              : step === store.currentStep()
                ? 'bg-brand-600 text-white ring-4 ring-brand-500/20'
                : 'bg-surface-100 dark:bg-surface-800 text-surface-400 dark:text-surface-500 border border-surface-200 dark:border-surface-700')">
            @if (store.successResult() || step < store.currentStep()) {
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            } @else {
            {{ step + 1 }}
            }
          </div>
        </div>
        @if (step < 3) {
        <div class="flex-1 h-0.5 mx-1 overflow-hidden rounded-full bg-surface-200 dark:bg-surface-700">
          <div class="h-full rounded-full transition-all duration-500"
            [style.width]="(store.successResult() || step < store.currentStep()) ? '100%' : '0%'"
            [class]="step < store.currentStep() ? 'bg-emerald-500' : 'bg-brand-600'"></div>
        </div>
        }
      </div>
      }
    </div>
    <div class="flex justify-between mt-2">
      @for (label of ['Calculator','Sender & Receiver','Compliance','Confirm']; track label) {
      <span [class]="'text-[11px] transition-colors ' + ($index === store.currentStep() ? 'text-brand-600 dark:text-brand-400 font-semibold' : 'text-surface-400 dark:text-surface-500')">
        {{ label }}
      </span>
      }
    </div>
  </div>

  <!-- \u2500\u2500 Main wizard area \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->

  <!-- Success overlay -->
  @if (store.successResult()) {
  <div class="success-overlay">
    <div class="success-card bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 rounded-2xl p-8 shadow-sm">
      <div class="flex flex-col items-center mb-6">
        <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
          <svg class="w-8 h-8 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path class="checkmark-path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h2 class="text-xl font-bold text-surface-900 dark:text-surface-50">Transfer Sent!</h2>
        <p class="text-sm text-surface-500 dark:text-surface-400 mt-1">Ref: {{ appSettings.txnNumberPrefix }}{{ store.successResult()!.referenceNumber }}</p>
      </div>
      <div class="grid grid-cols-2 gap-3 mb-6">
        <div class="bg-surface-50 dark:bg-surface-800 rounded-xl p-4">
          <p class="text-xs text-surface-500 dark:text-surface-400">You sent</p>
          <p class="text-lg font-bold text-surface-900 dark:text-surface-100 mt-1">{{ store.successResult()!.sendAmount | number:'1.2-2' }} {{ store.successResult()!.sendCurrency }}</p>
        </div>
        <div class="bg-surface-50 dark:bg-surface-800 rounded-xl p-4">
          <p class="text-xs text-surface-500 dark:text-surface-400">They receive</p>
          <p class="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-1">{{ store.successResult()!.receiveAmount | number:'1.2-2' }} {{ store.successResult()!.receiveCurrency }}</p>
        </div>
        <div class="bg-surface-50 dark:bg-surface-800 rounded-xl p-4">
          <p class="text-xs text-surface-500 dark:text-surface-400">Sender</p>
          <p class="text-sm font-semibold text-surface-900 dark:text-surface-100 mt-1">{{ store.successResult()!.senderName }}</p>
        </div>
        <div class="bg-surface-50 dark:bg-surface-800 rounded-xl p-4">
          <p class="text-xs text-surface-500 dark:text-surface-400">Receiver</p>
          <p class="text-sm font-semibold text-surface-900 dark:text-surface-100 mt-1">{{ store.successResult()!.receiverName }}</p>
        </div>
      </div>
      <div class="flex gap-3">
        <button (click)="downloadReceipt()"
          class="flex-1 py-3 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 hover:bg-surface-50 dark:hover:bg-surface-700 text-surface-700 dark:text-surface-300 font-medium text-sm transition-all active:scale-[0.98]">
          Download Receipt
        </button>
        <button (click)="startNewTransaction()"
          class="flex-1 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-all active:scale-[0.98]">
          New Transfer
        </button>
      </div>
    </div>
  </div>

  } @else {

  <!-- Step container with animation -->
  <div class="step-container" [class]="stepAnimClass">

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <!-- STEP 0: CALCULATOR                                              -->
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (store.currentStep() === 0) {
    <div class="space-y-4">

      <!-- To Country + Payment Method -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">To Country</label>
          <select [(ngModel)]="receiverCountry" (ngModelChange)="onReceiverCountryChange()"
            class="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40">
            <option value="">Select country</option>
            @for (c of countries; track c.name) {
            <option [value]="c.name">{{ c.name }}</option>
            }
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1.5">Payment Method</label>

          @if (isMoneyGramPartner()) {
            <!-- MoneyGram: grouped dropdown -->
            <div class="relative">
              <select (change)="onMgOptionSelected(getMgOptionByIndex(+$any($event.target).value))"
                [disabled]="mgServiceOptions.length === 0"
                class="w-full appearance-none pl-10 pr-9 py-2.5 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition">
                <option value="" [selected]="!selectedMgOption">
                  @if (mgServiceOptions.length === 0) {
                    @if (receiverCountryIso3) { Loading options\u2026 } @else { Select destination first }
                  } @else { Choose payout method }
                </option>
                <!-- Cash group -->
                @if (mgCashOptions.length > 0) {
                  <optgroup label="\u2500\u2500 Cash Pickup">
                    @for (opt of mgCashOptions; track opt.serviceOptionCode + opt.serviceOptionRoutingCode) {
                      <option [value]="mgServiceOptions.indexOf(opt)"
                        [selected]="selectedMgOption?.serviceOptionCode === opt.serviceOptionCode && selectedMgOption?.serviceOptionRoutingCode === opt.serviceOptionRoutingCode">
                        {{ opt.serviceOptionName }}@if (opt.destinationCurrencyCode) { ({{ opt.destinationCurrencyCode }}) }@if (opt.serviceOptionRoutingName) { \u2013 {{ opt.serviceOptionRoutingName }} }
                      </option>
                    }
                  </optgroup>
                }
                <!-- Bank group -->
                @if (mgBankOptions.length > 0) {
                  <optgroup label="\u2500\u2500 Bank Transfer">
                    @for (opt of mgBankOptions; track opt.serviceOptionCode + opt.serviceOptionRoutingCode) {
                      <option [value]="mgServiceOptions.indexOf(opt)"
                        [selected]="selectedMgOption?.serviceOptionCode === opt.serviceOptionCode && selectedMgOption?.serviceOptionRoutingCode === opt.serviceOptionRoutingCode">
                        {{ opt.serviceOptionName }}@if (opt.destinationCurrencyCode) { ({{ opt.destinationCurrencyCode }}) }@if (opt.serviceOptionRoutingName) { \u2013 {{ opt.serviceOptionRoutingName }} }
                      </option>
                    }
                  </optgroup>
                }
                <!-- Wallet group -->
                @if (mgWalletOptions.length > 0) {
                  <optgroup label="\u2500\u2500 Mobile Wallet">
                    @for (opt of mgWalletOptions; track opt.serviceOptionCode + opt.serviceOptionRoutingCode) {
                      <option [value]="mgServiceOptions.indexOf(opt)"
                        [selected]="selectedMgOption?.serviceOptionCode === opt.serviceOptionCode && selectedMgOption?.serviceOptionRoutingCode === opt.serviceOptionRoutingCode">
                        {{ opt.serviceOptionName }}@if (opt.destinationCurrencyCode) { ({{ opt.destinationCurrencyCode }}) }@if (opt.serviceOptionRoutingName) { \u2013 {{ opt.serviceOptionRoutingName }} }
                      </option>
                    }
                  </optgroup>
                }
              </select>
              <!-- Left icon \u2014 payout type indicator -->
              <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base">
                @if (!selectedMgOption) { \u{1F4B3} }
                @else if (selectedMgOption.payoutType === 'cash') { \u{1F4B5} }
                @else if (selectedMgOption.payoutType === 'wallet') { \u{1F4F1} }
                @else { \u{1F3E6} }
              </span>
              <!-- Right chevron -->
              <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-surface-400">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </span>
            </div>
            <!-- Selected option type badge -->
            @if (selectedMgOption) {
              <div class="mt-1.5 flex items-center gap-1.5">
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                  [class]="selectedMgOption.payoutType === 'cash'
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                    : selectedMgOption.payoutType === 'wallet'
                    ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400'
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'">
                  {{ selectedMgOption.payoutType === 'cash' ? 'Cash Pickup' : selectedMgOption.payoutType === 'wallet' ? 'Mobile Wallet' : 'Bank Deposit' }}
                </span>
                @if (selectedMgOption.serviceOptionRoutingName) {
                  <span class="text-[10px] text-surface-400 dark:text-surface-500">via {{ selectedMgOption.serviceOptionRoutingName }}</span>
                }
              </div>
            }

          } @else {
            <div class="relative">
              <select [(ngModel)]="selectedPaymentMethodId" (ngModelChange)="onPaymentMethodChange()"
                class="w-full appearance-none pl-10 pr-9 py-2.5 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/40 transition">
                <option [value]="null">Select method</option>
                @for (m of paymentMethods; track m.id) {
                  <option [value]="m.id">{{ m.name }}</option>
                }
              </select>
              <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-surface-400">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                </svg>
              </span>
              <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-surface-400">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </span>
            </div>
          }
        </div>
      </div>

      <!-- Calculator card -->
      <div class="bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 rounded-2xl p-5 shadow-sm space-y-5">

        <!-- Amount inputs row -->
        <div class="grid grid-cols-[1fr,auto,1fr] items-end gap-3">
          <!-- Send side -->
          <div>
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1.5">You send</label>
            <div class="relative">
              @if (!isMoneyGramPartner() && availableSendCurrencies.length > 1) {
                <select [(ngModel)]="selectedSendCurrency" (ngModelChange)="onSendCurrencyChange()"
                  class="absolute left-0 top-0 h-full pl-2 pr-6 rounded-l-xl bg-surface-100 dark:bg-surface-700 border-r border-surface-200 dark:border-surface-600 text-surface-700 dark:text-surface-200 text-sm font-semibold focus:outline-none appearance-none cursor-pointer z-10"
                  style="width: 5.5rem">
                  @for (c of availableSendCurrencies; track c) {
                    <option [value]="c">{{ c }}</option>
                  }
                </select>
                <input type="text" inputmode="decimal" [(ngModel)]="sendAmountInput" (ngModelChange)="onAmountChange()"
                  (keydown)="onAmountKeyDown($event)" (paste)="onAmountPaste($event)"
                  class="w-full pl-24 pr-3 py-3 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-100 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  placeholder="0.00" />
              } @else {
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 dark:text-surface-500 text-sm font-semibold">{{ senderCurrency || '\xB7\xB7\xB7' }}</span>
                <input type="text" inputmode="decimal" [(ngModel)]="sendAmountInput" (ngModelChange)="onAmountChange()"
                  (keydown)="onAmountKeyDown($event)" (paste)="onAmountPaste($event)"
                  class="w-full pl-14 pr-3 py-3 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-100 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  placeholder="0.00" />
              }
            </div>
          </div>

          <!-- Arrow -->
          <div class="pb-0.5 flex items-center justify-center">
            @if (loadingCalc) {
            <div class="w-8 h-8 rounded-full border-2 border-brand-500/30 border-t-brand-500 animate-spin"></div>
            } @else {
            <div [class]="'w-8 h-8 rounded-full flex items-center justify-center transition-colors ' + (store.calculationDone() ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-surface-100 dark:bg-surface-800 text-surface-400')">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </div>
            }
          </div>

          <!-- Receive side -->
          <div>
            <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1.5">They receive</label>
            <div class="relative">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500 dark:text-emerald-400 text-sm font-semibold">{{ receiverCurrency || '\xB7\xB7\xB7' }}</span>
              <input type="text" inputmode="decimal" [(ngModel)]="receiveAmountInput" (ngModelChange)="onReceiveAmountChange()"
                (keydown)="onAmountKeyDown($event)" (paste)="onAmountPaste($event)"
                class="w-full pl-14 pr-3 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                placeholder="0.00" />
            </div>
          </div>
        </div>

        <!-- Exchange rate badge -->
        @if (store.calculationDone() && exchangeRate > 0) {
        <div class="flex items-center justify-center">
          <span class="px-3 py-1 rounded-full bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-xs text-surface-600 dark:text-surface-300">
            1 {{ senderCurrency }} = {{ exchangeRate | number:'1.4-4' }} {{ receiverCurrency }}
          </span>
        </div>
        }

        <!-- Stale rate warning -->
        @if (rateStale && store.calculationDone() && exchangeRate > 0) {
        <div class="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 text-xs">
          <div class="flex items-center gap-2 min-w-0">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span class="truncate">Rate may have changed. Recalculate for latest.</span>
          </div>
          <button type="button" (click)="calculateViaBackend()"
            class="flex-shrink-0 px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-800/40 hover:bg-amber-200 dark:hover:bg-amber-700/50 font-medium transition-colors whitespace-nowrap">
            Recalculate
          </button>
        </div>
        }

        <!-- Fee breakdown -->
        @if (store.calculationDone()) {
        <div class="border-t border-surface-100 dark:border-surface-800 pt-4 space-y-2">
          <div class="flex justify-between text-sm">
            <span class="text-surface-500 dark:text-surface-400">Service charge</span>
            <span class="text-surface-700 dark:text-surface-300">{{ serviceCharge | number:'1.2-2' }} {{ senderCurrency }}</span>
          </div>
          <div class="flex justify-between text-sm font-semibold">
            <span class="text-surface-700 dark:text-surface-200">Total payable</span>
            <span class="text-surface-900 dark:text-surface-100">{{ totalPayable | number:'1.2-2' }} {{ senderCurrency }}</span>
          </div>
          @if (agentBalance) {
          <div class="flex justify-between text-sm">
            <span class="text-surface-500 dark:text-surface-400">Your balance</span>
            <span [class]="agentBalance.availableBalance >= totalPayable ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'">
              {{ agentBalance.availableBalance | number:'1.2-2' }}
            </span>
          </div>
          }
        </div>
        }

      </div>

      <!-- Compliance violations -->
      @if (complianceViolations.length > 0) {
      <div class="space-y-2">
        @for (v of complianceViolations; track v.ruleName) {
        <div [class]="'alert-item flex items-start gap-3 p-3 rounded-xl border text-sm ' +
          (v.action === 'Block'
            ? 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800/50 text-rose-700 dark:text-rose-300'
            : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300')">
          <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          <div>
            <span class="font-medium">{{ v.ruleName }}</span>
            @if (v.description) { <p class="text-xs opacity-80 mt-0.5">{{ v.description }}</p> }
          </div>
        </div>
        }
      </div>
      }

      <!-- Errors / warnings -->
      @if (calcError) {
      <div class="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50 text-rose-700 dark:text-rose-300 text-sm">
        <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        {{ calcError }}
      </div>
      }
      @if (store.balanceWarning()) {
      <div class="flex items-center gap-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 text-sm">
        <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/></svg>
        {{ store.balanceWarning() }}
      </div>
      }

      <!-- CTA -->
      <button (click)="proceedFromCalculator()"
        [disabled]="!canProceedCalc()"
        class="w-full py-4 rounded-2xl font-semibold text-base transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
        [class]="canProceedCalc() ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm' : 'bg-surface-100 dark:bg-surface-800 text-surface-400 dark:text-surface-500'">
        Continue to Sender & Receiver
        <svg class="w-4 h-4 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </button>

    </div>
    }

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <!-- STEP 1: CUSTOMER + RECEIVER                                      -->
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (store.currentStep() === 1) {
    <div class="space-y-4">

      <!-- Sub-step progress -->
      <div class="flex items-center gap-2">
        <div [class]="'flex items-center gap-1.5 text-xs font-semibold ' + (store.customerSubStep() === 'customer' ? 'text-brand-600 dark:text-brand-400' : 'text-emerald-600 dark:text-emerald-400')">
          @if (store.customerSubStep() === 'receiver') {
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
          } @else {
          <div class="w-3.5 h-3.5 rounded-full border-2 border-brand-500 dark:border-brand-400"></div>
          }
          Customer
        </div>
        <div class="flex-1 h-0.5 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
          <div class="h-full rounded-full bg-brand-500 transition-all duration-300"
            [style.width]="store.customerSubStep() === 'receiver' ? '100%' : '0%'"></div>
        </div>
        <div [class]="'flex items-center gap-1.5 text-xs font-semibold ' + (store.customerSubStep() === 'receiver' ? 'text-brand-600 dark:text-brand-400' : 'text-surface-400 dark:text-surface-500')">
          <div [class]="'w-3.5 h-3.5 rounded-full border-2 ' + (store.customerSubStep() === 'receiver' ? 'border-brand-500 dark:border-brand-400' : 'border-surface-300 dark:border-surface-600')"></div>
          Receiver
        </div>
      </div>

      <!-- Sub-step container -->
      <div class="sub-step-container" [class]="subStepAnimClass">

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500 Customer sub-step \u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (store.customerSubStep() === 'customer') {
        <div class="space-y-4">

          <!-- Selected customer card -->
          @if (store.selectedCustomer()) {
          <div class="selected-card-appear bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
            <div class="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold flex-shrink-0 text-sm">
              {{ getInitials(store.selectedCustomer()!.fullName) }}
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-surface-900 dark:text-surface-100 truncate">{{ store.selectedCustomer()!.fullName }}</p>
              <p class="text-xs text-surface-500 dark:text-surface-400">{{ store.selectedCustomer()!.phone }} \xB7 {{ store.selectedCustomer()!.country }}</p>
            </div>
            <button (click)="clearSelectedCustomer()" class="text-surface-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <!-- Missing fields warning -->
          @if (store.missingCustomerFields().length > 0 && showMissingCustomerForm) {
          <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-5">
            <div class="flex items-center gap-2 mb-3">
              <svg class="w-4 h-4 text-amber-500 dark:text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/></svg>
              <h4 class="text-sm font-semibold text-amber-700 dark:text-amber-300">Partner requires additional details</h4>
            </div>
            <div class="space-y-3">
              @for (field of store.missingCustomerFields(); track field.ourColumn) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1 capitalize">{{ field.ourColumn }} <span class="text-rose-500">*</span></label>
                <input type="text" [(ngModel)]="missingCustomerData[field.ourColumn]" [placeholder]="field.partnerColumn"
                  class="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40" />
              </div>
              }
            </div>
            <button (click)="saveMissingCustomerFields()" [disabled]="savingMissingCustomer"
              class="mt-4 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-all disabled:opacity-50">
              {{ savingMissingCustomer ? 'Saving...' : 'Save & Continue' }}
            </button>
          </div>
          }

          <!-- KYC / DOB warnings -->
          @if (store.kycWarning()) {
          <div class="flex items-center gap-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 text-sm">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/></svg>
            {{ store.kycWarning() }}
          </div>
          }
          @if (store.dobWarning()) {
          <div class="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50 text-rose-700 dark:text-rose-300 text-sm">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
            {{ store.dobWarning() }}
          </div>
          }

          } @else {

          <!-- Customer search -->
          <div class="bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 rounded-2xl p-5 space-y-3 shadow-sm">
            <h3 class="text-sm font-semibold text-surface-700 dark:text-surface-200">Select Customer</h3>
            <div class="relative">
              <input type="text" [(ngModel)]="customerSearch" (ngModelChange)="filterCustomers()"
                (blur)="hideCustomerDropdownDelayed()"
                placeholder="Search by name or phone..."
                class="w-full px-4 py-2.5 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40" />
              @if (showCustomerDropdown && filteredCustomers.length > 0) {
              <div class="search-dropdown absolute top-full left-0 right-0 mt-1 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-xl shadow-xl z-10 max-h-56 overflow-y-auto">
                @for (c of filteredCustomers | slice:0:8; track c.id) {
                <button (mousedown)="selectCustomer(c)" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-50 dark:hover:bg-surface-800 text-left transition-colors">
                  <div class="w-8 h-8 rounded-full bg-surface-100 dark:bg-surface-700 flex items-center justify-center text-xs font-bold text-surface-600 dark:text-surface-300 flex-shrink-0">{{ getInitials(c.fullName) }}</div>
                  <div>
                    <p class="text-sm text-surface-900 dark:text-surface-100 font-medium">{{ c.fullName }}</p>
                    <p class="text-xs text-surface-400 dark:text-surface-500">{{ c.phone }}</p>
                  </div>
                </button>
                }
              </div>
              }
            </div>

            <!-- New customer toggle -->
            <button (click)="toggleCreateCustomer()" class="flex items-center gap-2 text-sm text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors font-medium">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              New Customer
            </button>

            <!-- Create customer form -->
            @if (showCreateCustomer) {
            <div [formGroup]="customerForm" class="border-t border-surface-100 dark:border-surface-800 pt-4 space-y-3 mt-1">
              <p class="text-xs font-semibold text-surface-400 dark:text-surface-500 uppercase tracking-wide">
                {{ store.apiType() === 'thirdParty' ? 'Required Partner Fields' : 'Customer Details' }}
              </p>

              @if (store.apiType() !== 'thirdParty' || isFieldShownCustomer('fullName')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Full Name *</label>
                <input type="text" formControlName="fullName"                  class="input-field" placeholder="Full legal name" />
                @if (customerFormErrors['fullName']) { <p class="text-rose-500 text-xs mt-1">{{ customerFormErrors['fullName'] }}</p> }
              </div>
              }

              @if (store.apiType() !== 'thirdParty' || isFieldShownCustomer('phone')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Phone *</label>
                <input type="tel" formControlName="phone"                  class="input-field" placeholder="+44 7xxx xxxxxx" />
                @if (customerFormErrors['phone']) { <p class="text-rose-500 text-xs mt-1">{{ customerFormErrors['phone'] }}</p> }
              </div>
              }

              @if (store.apiType() !== 'thirdParty' || isFieldShownCustomer('nationality')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Nationality *</label>
                <select formControlName="nationality" class="input-field">
                  <option value="">Select</option>
                  @for (c of countries; track c.name) {
                  <option [value]="c.name">{{ c.name }}</option>
                  }
                </select>
              </div>
              }

              @if (store.apiType() !== 'thirdParty' || isFieldShownCustomer('country')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Country *</label>
                <select formControlName="country" class="input-field">
                  <option value="">Select</option>
                  @for (c of countries; track c.name) {
                  <option [value]="c.name">{{ c.name }}</option>
                  }
                </select>
              </div>
              }

              @if (store.apiType() !== 'thirdParty' || isFieldShownCustomer('idDocumentType')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">ID Document Type *</label>
                <select formControlName="idDocumentType" class="input-field">
                  <option value="">Select</option>
                  @for (t of idTypes; track t.code) {
                  <option [value]="t.code">{{ t.name }}</option>
                  }
                </select>
              </div>
              }

              @if (store.apiType() !== 'thirdParty' || isFieldShownCustomer('idDocumentNumber')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">ID Number *</label>
                <input type="text" formControlName="idDocumentNumber" class="input-field" placeholder="Document number" />
              </div>
              }

              @if (store.apiType() !== 'thirdParty') {
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Email</label>
                  <input type="email" formControlName="email" class="input-field" placeholder="email@example.com" />
                </div>
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Gender</label>
                  <select formControlName="gender" class="input-field">
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Date of Birth</label>
                  <p-datepicker formControlName="dateOfBirth" dateFormat="yy-mm-dd" [maxDate]="$any(null)"
                    styleClass="input-field w-full" />
                </div>
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">City</label>
                  <input type="text" formControlName="city" class="input-field" placeholder="City" />
                </div>
              </div>

              @if (!appSettings.skipDocumentUpload) {
              <div class="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">ID Front</label>
                  <label class="flex flex-col items-center justify-center h-20 border-2 border-dashed border-surface-200 dark:border-surface-700 rounded-xl cursor-pointer hover:border-brand-400 dark:hover:border-brand-500 transition-colors">
                    @if (customerFrontPreview) {
                    <img [src]="customerFrontPreview" class="h-full w-full object-cover rounded-xl" />
                    } @else {
                    <svg class="w-6 h-6 text-surface-300 dark:text-surface-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    }
                    <input type="file" class="hidden" accept="image/*" (change)="onFrontFileChange($event)" />
                  </label>
                </div>
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">ID Back</label>
                  <label class="flex flex-col items-center justify-center h-20 border-2 border-dashed border-surface-200 dark:border-surface-700 rounded-xl cursor-pointer hover:border-brand-400 dark:hover:border-brand-500 transition-colors">
                    @if (customerBackPreview) {
                    <img [src]="customerBackPreview" class="h-full w-full object-cover rounded-xl" />
                    } @else {
                    <svg class="w-6 h-6 text-surface-300 dark:text-surface-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    }
                    <input type="file" class="hidden" accept="image/*" (change)="onBackFileChange($event)" />
                  </label>
                </div>
              </div>
              }
              }

              <button (click)="saveNewCustomer()" [disabled]="savingCustomer"
                class="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-all disabled:opacity-50">
                {{ savingCustomer ? 'Saving...' : 'Create Customer' }}
              </button>
            </div>
            }
          </div>
          }

          <!-- Proceed to receiver -->
          <button (click)="proceedToReceiver()"
            [disabled]="!store.canProceedCustomer()"
            class="w-full py-4 rounded-2xl font-semibold text-base transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
            [class]="store.canProceedCustomer() ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm' : 'bg-surface-100 dark:bg-surface-800 text-surface-400 dark:text-surface-500'">
            Next: Select Receiver \u2192
          </button>
        </div>
        }

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500 Receiver sub-step \u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (store.customerSubStep() === 'receiver') {
        <div class="space-y-4">
          <button (click)="goToSubStep('customer', 'backward')" class="flex items-center gap-1.5 text-sm text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-200 transition-colors">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            Back to Customer
          </button>

          <!-- Selected receiver card -->
          @if (store.selectedReceiver()) {
          <div class="selected-card-appear bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
            <div class="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold flex-shrink-0 text-sm">
              {{ getInitials(store.selectedReceiver()!.fullName) }}
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-surface-900 dark:text-surface-100 truncate">{{ store.selectedReceiver()!.fullName }}</p>
              <p class="text-xs text-surface-500 dark:text-surface-400">{{ store.selectedReceiver()!.phone }}</p>
            </div>
            <button (click)="clearSelectedReceiver()" class="text-surface-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <!-- \u2500\u2500 Payout Account Summary \u2500\u2500 -->
          @if (selectedSavedDetail || transactionPayoutDetails.bankName || transactionPayoutDetails.accountNumber) {
          @let bankName = selectedSavedDetail?.bankName || transactionPayoutDetails.bankName;
          @let bankCode = selectedSavedDetail?.bankCode || transactionPayoutDetails.bankCode;
          @let accNum = selectedSavedDetail?.accountNumber || transactionPayoutDetails.accountNumber;
          @let branchName = selectedSavedDetail?.branchName || transactionPayoutDetails.branchName;
          @let branchCode = selectedSavedDetail?.branchCode || transactionPayoutDetails.branchCode;
          <div @fadeSlideUp class="rounded-xl border border-brand-200 dark:border-brand-800/50 overflow-hidden">
            <!-- header bar -->
            <div class="flex items-center justify-between px-3 py-2 bg-brand-50 dark:bg-brand-950/50 border-b border-brand-200 dark:border-brand-800/50">
              <div class="flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                </svg>
                <span class="text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">Payout Account</span>
              </div>
              <button (click)="togglePayoutSwapPanel()"
                [@swapIconRotate]="showPayoutSwapPanel ? 'open' : 'closed'"
                class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold
                  text-brand-600 dark:text-brand-400
                  bg-white dark:bg-surface-800
                  border border-brand-200 dark:border-brand-700
                  hover:bg-brand-100 dark:hover:bg-brand-900/40
                  transition-colors duration-150">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>
                </svg>
                Change
              </button>
            </div>
            <!-- detail rows -->
            <div class="px-3 py-2.5 bg-white dark:bg-surface-900 grid grid-cols-2 gap-x-4 gap-y-1.5">
              @if (bankName) {
              <div>
                <p class="text-[10px] text-surface-400 dark:text-surface-500 uppercase tracking-wide font-medium">Bank</p>
                <p class="text-xs font-semibold text-surface-800 dark:text-surface-200 truncate">{{ bankName }}</p>
              </div>
              }
              @if (bankCode) {
              <div>
                <p class="text-[10px] text-surface-400 dark:text-surface-500 uppercase tracking-wide font-medium">Bank Code</p>
                <p class="text-xs font-semibold text-surface-800 dark:text-surface-200 font-mono">{{ bankCode }}</p>
              </div>
              }
              @if (accNum) {
              <div>
                <p class="text-[10px] text-surface-400 dark:text-surface-500 uppercase tracking-wide font-medium">Account</p>
                <p class="text-xs font-semibold text-surface-800 dark:text-surface-200 font-mono">
                  \xB7\xB7\xB7\xB7 {{ accNum | slice:-4 }}
                </p>
              </div>
              }
              @if (branchName) {
              <div>
                <p class="text-[10px] text-surface-400 dark:text-surface-500 uppercase tracking-wide font-medium">Branch</p>
                <p class="text-xs font-semibold text-surface-800 dark:text-surface-200 truncate">{{ branchName }}</p>
              </div>
              }
              @if (branchCode) {
              <div>
                <p class="text-[10px] text-surface-400 dark:text-surface-500 uppercase tracking-wide font-medium">Branch Code</p>
                <p class="text-xs font-semibold text-surface-800 dark:text-surface-200 font-mono">{{ branchCode }}</p>
              </div>
              }
              @if (receiverCountry) {
              <div>
                <p class="text-[10px] text-surface-400 dark:text-surface-500 uppercase tracking-wide font-medium">Payout Country</p>
                <p class="text-xs font-semibold text-surface-800 dark:text-surface-200">{{ receiverCountry }}</p>
              </div>
              }
            </div>
          </div>
          }

          <!-- Payout account swap panel -->
          @if (showPayoutSwapPanel) {
          <div @slideDown class="overflow-hidden rounded-2xl border border-surface-200/70 dark:border-surface-700/60
            bg-white/95 dark:bg-surface-900/95 backdrop-blur-sm shadow-xl shadow-surface-900/5 dark:shadow-surface-950/30">
            <div class="px-4 pt-3 pb-2 border-b border-surface-100 dark:border-surface-800">
              <p class="text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider">Payout Accounts</p>
            </div>
            <div @staggerList class="p-2 space-y-0.5">
              @for (d of savedPayoutDetails; track d.id) {
              <button (click)="selectSavedDetail(d)"
                class="stagger-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 text-left group relative overflow-hidden"
                [ngClass]="selectedSavedDetail?.id === d.id
                  ? 'bg-gradient-to-r from-brand-50 to-indigo-50 dark:from-brand-900/25 dark:to-indigo-900/20'
                  : 'hover:bg-surface-50 dark:hover:bg-surface-800/60'">
                @if (selectedSavedDetail?.id === d.id) {
                <div class="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-r-full bg-brand-500"></div>
                }
                <div class="w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-150"
                  [ngClass]="selectedSavedDetail?.id === d.id ? 'border-brand-500' : 'border-surface-300 dark:border-surface-600'">
                  @if (selectedSavedDetail?.id === d.id) {
                  <div class="w-2 h-2 rounded-full bg-brand-500"></div>
                  }
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-surface-900 dark:text-surface-100 truncate">{{ d.bankName }}</p>
                  @if (d.accountNumber) {
                  <p class="text-xs text-surface-400 dark:text-surface-500 font-mono">{{ d.accountNumber }}</p>
                  }
                </div>
                @if (selectedSavedDetail?.id === d.id) {
                <svg class="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                }
              </button>
              }
            </div>
            <div class="px-2 pb-2">
              <button (click)="useNewPayoutDetail()"
                class="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium
                  text-brand-600 dark:text-brand-400
                  border border-dashed border-brand-300 dark:border-brand-700
                  hover:bg-brand-50 dark:hover:bg-brand-900/20
                  hover:border-brand-400 dark:hover:border-brand-600
                  transition-all duration-150 group">
                <div class="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center
                  group-hover:bg-brand-200 dark:group-hover:bg-brand-800/50 transition-colors">
                  <svg class="w-3 h-3 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
                Add new account
              </button>
            </div>
          </div>
          }

          <!-- Missing receiver fields -->
          @if (store.missingReceiverFields().length > 0 && showMissingReceiverForm) {
          <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-5">
            <div class="flex items-center gap-2 mb-3">
              <svg class="w-4 h-4 text-amber-500 dark:text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/></svg>
              <h4 class="text-sm font-semibold text-amber-700 dark:text-amber-300">Partner requires additional receiver details</h4>
            </div>
            <div class="space-y-3">
              @for (field of store.missingReceiverFields(); track field.ourColumn) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1 capitalize">{{ field.ourColumn }} <span class="text-rose-500">*</span></label>
                <input type="text" [(ngModel)]="missingReceiverData[field.ourColumn]" [placeholder]="field.partnerColumn"
                  class="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40" />
              </div>
              }
            </div>
            <button (click)="saveMissingReceiverFields()" [disabled]="savingMissingReceiver"
              class="mt-4 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-all disabled:opacity-50">
              {{ savingMissingReceiver ? 'Saving...' : 'Save & Continue' }}
            </button>
          </div>
          }

          <!-- Payout input form (shown only when no saved account or agent adds new) -->
          @if (isBankTransfer() && showNewAccountForm) {
          <div @fadeSlideUp class="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-2xl p-4 space-y-3 shadow-sm">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-lg bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
              </div>
              <h4 class="text-sm font-semibold text-surface-700 dark:text-surface-200">New Bank Account</h4>
            </div>
            @if (payoutBanks.length > 0) {
            <div>
              <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Bank <span class="text-rose-500">*</span></label>
              <select (change)="onBankSelectedTxn(payoutBanks[$any($event.target).selectedIndex - 1])"
                class="w-full px-3 py-2.5 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 transition-shadow duration-150">
                <option value="">Select bank</option>
                @for (b of payoutBanks; track b.id) {
                <option [value]="b.id">{{ b.bankName }}</option>
                }
              </select>
            </div>
            } @else {
            <p class="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/></svg>
              No banks configured for this payout route.
            </p>
            }
            <div>
              <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Account Number <span class="text-rose-500">*</span></label>
              <input type="text" [(ngModel)]="transactionPayoutDetails.accountNumber" placeholder="Enter account number"
                class="w-full px-3 py-2.5 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 transition-shadow duration-150" />
            </div>
            @if (allBranches.length > 0) {
            <div>
              <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Branch</label>
              <button type="button" (click)="branchContext = 'txn'; showBranchPopup = true"
                class="w-full px-3 py-2.5 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-left text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 flex items-center justify-between group">
                <span [class.text-surface-400]="!transactionPayoutDetails.branchName" class="text-surface-900 dark:text-surface-100">{{ transactionPayoutDetails.branchName || 'Select branch' }}</span>
                <svg class="w-4 h-4 text-surface-400 group-hover:text-brand-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
            }
          </div>
          }

          @if (isCashTransfer() && showNewAccountForm) {
          <div @fadeSlideUp class="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-2xl p-4 space-y-3 shadow-sm">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h4 class="text-sm font-semibold text-surface-700 dark:text-surface-200">Payout Location <span class="text-rose-500">*</span></h4>
            </div>
            @if (payoutCashLocations.length > 0) {
            <select (change)="onCashLocationSelectedTxn(payoutCashLocations[$any($event.target).selectedIndex - 1])"
              class="w-full px-3 py-2.5 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 transition-shadow duration-150">
              <option value="">Select cash location</option>
              @for (loc of payoutCashLocations; track loc.id) {
              <option [value]="loc.id">{{ loc.bankName }}</option>
              }
            </select>
            } @else {
            <p class="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/></svg>
              No cash locations configured for this payout route.
            </p>
            }
          </div>
          }

          @if (isWalletTransfer() && showNewAccountForm) {
          <div @fadeSlideUp class="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-2xl p-4 space-y-3 shadow-sm">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-lg bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              </div>
              <h4 class="text-sm font-semibold text-surface-700 dark:text-surface-200">Wallet Provider</h4>
            </div>
            @if (payoutLocations.length > 0) {
            <div>
              <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Provider <span class="text-rose-500">*</span></label>
              <select (change)="onLocationSelectedTxn(payoutLocations[$any($event.target).selectedIndex - 1])"
                class="w-full px-3 py-2.5 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 transition-shadow duration-150">
                <option value="">Select wallet provider</option>
                @for (loc of payoutLocations; track loc.id) {
                <option [value]="loc.id">{{ loc.locationName }}</option>
                }
              </select>
            </div>
            } @else {
            <p class="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/></svg>
              No wallet providers configured for this payout route.
            </p>
            }
            <div>
              <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Wallet Number <span class="text-rose-500">*</span></label>
              <input type="text" [(ngModel)]="transactionPayoutDetails.accountNumber" placeholder="Enter wallet number"
                class="w-full px-3 py-2.5 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 transition-shadow duration-150" />
            </div>
          </div>
          }

          } @else {

          <!-- Receiver search + list -->
          <div class="bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 rounded-2xl p-5 space-y-3 shadow-sm">
            <h3 class="text-sm font-semibold text-surface-700 dark:text-surface-200">Select Receiver</h3>
            <input type="text" [(ngModel)]="receiverSearch" (ngModelChange)="filterReceivers()"
              placeholder="Search receivers..."
              class="w-full px-4 py-2.5 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-surface-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40" />

            @if (filteredReceivers.length > 0) {
            <div class="space-y-1 max-h-48 overflow-y-auto">
              @for (r of filteredReceivers; track r.id) {
              <button (click)="selectReceiver(r)" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-50 dark:hover:bg-surface-800 text-left transition-colors">
                <div class="w-8 h-8 rounded-full bg-surface-100 dark:bg-surface-700 flex items-center justify-center text-xs font-bold text-surface-600 dark:text-surface-300 flex-shrink-0">{{ getInitials(r.fullName) }}</div>
                <div>
                  <p class="text-sm text-surface-900 dark:text-surface-100 font-medium">{{ r.fullName }}</p>
                  <p class="text-xs text-surface-400 dark:text-surface-500">{{ r.phone }}@if (r.country) { \xB7 {{ r.country }} }</p>
                </div>
              </button>
              }
            </div>
            } @else {
            <p class="text-sm text-surface-400 dark:text-surface-500 text-center py-2">No receivers yet</p>
            }

            <button (click)="toggleCreateReceiver()" class="flex items-center gap-2 text-sm text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors font-medium">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              New Receiver
            </button>

            <!-- Create receiver form -->
            @if (showCreateReceiver) {
            <div [formGroup]="receiverForm" class="border-t border-surface-100 dark:border-surface-800 pt-4 space-y-3 mt-1">
              @if (store.apiType() !== 'thirdParty' || isFieldShownReceiver('fullName')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Full Name *</label>
                <input type="text" formControlName="fullName" class="input-field" />
                @if (receiverFormErrors['fullName']) { <p class="text-rose-500 text-xs mt-1">{{ receiverFormErrors['fullName'] }}</p> }
              </div>
              }
              @if (store.apiType() !== 'thirdParty' || isFieldShownReceiver('phone')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Phone *</label>
                <input type="tel" formControlName="phone" class="input-field" />
              </div>
              }
              @if (store.apiType() !== 'thirdParty' || isFieldShownReceiver('country')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Country</label>
                <select formControlName="country" class="input-field">
                  <option value="">Select</option>
                  @for (c of countries; track c.name) {
                  <option [value]="c.name">{{ c.name }}</option>
                  }
                </select>
              </div>
              }
              @if (isFieldShownReceiver('city')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">City</label>
                <input type="text" formControlName="city" class="input-field" placeholder="City" />
              </div>
              }
              @if (isFieldShownReceiver('gender')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Gender <span class="text-rose-500">*</span></label>
                <select formControlName="gender" class="input-field">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              }
              @if (isFieldShownReceiver('dateOfBirth')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Date of Birth <span class="text-rose-500">*</span></label>
                <input type="date" formControlName="dateOfBirth" class="input-field" />
              </div>
              }
              @if (isFieldShownReceiver('nationality')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Nationality <span class="text-rose-500">*</span></label>
                <select formControlName="nationality" class="input-field">
                  <option value="">Select</option>
                  @for (c of countries; track c.name) {
                  <option [value]="c.name">{{ c.name }}</option>
                  }
                </select>
              </div>
              }
              @if (isFieldShownReceiver('occupation')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Occupation <span class="text-rose-500">*</span></label>
                <input type="text" formControlName="occupation" class="input-field" placeholder="Occupation" />
              </div>
              }
              @if (isFieldShownReceiver('address')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Address <span class="text-rose-500">*</span></label>
                <input type="text" formControlName="address" class="input-field" placeholder="Street address" />
              </div>
              }
              @if (isFieldShownReceiver('postalCode')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Postal Code <span class="text-rose-500">*</span></label>
                <input type="text" formControlName="postalCode" class="input-field" placeholder="Postal code" />
              </div>
              }
              @if (isFieldShownReceiver('idDocumentType')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">ID Document Type <span class="text-rose-500">*</span></label>
                <select formControlName="idDocumentType" class="input-field">
                  <option value="">Select</option>
                  <option value="PASSPORT">Passport</option>
                  <option value="NATIONAL_ID">National ID</option>
                  <option value="DRIVING_LICENSE">Driving License</option>
                </select>
              </div>
              }
              @if (isFieldShownReceiver('idDocumentNumber')) {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">ID Document Number <span class="text-rose-500">*</span></label>
                <input type="text" formControlName="idDocumentNumber" class="input-field" placeholder="Document number" />
              </div>
              }

              <!-- \u2500\u2500 Bank Transfer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
              @if (isBankTransfer()) {
              <div class="space-y-3 pt-1">
                <p class="text-xs font-semibold text-surface-400 dark:text-surface-500 uppercase tracking-wide">Bank Details</p>
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Bank *</label>
                  @if (payoutBanks.length > 0) {
                  <select (change)="onBankSelected(payoutBanks[$any($event.target).value])" class="input-field mb-2">
                    <option value="">Select bank</option>
                    @for (b of payoutBanks; track b.id; let i = $index) {
                    <option [value]="i">{{ b.bankName }}</option>
                    }
                  </select>
                  } @else {
                  <input type="text" formControlName="bankName" class="input-field" placeholder="Bank name" />
                  }
                </div>
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Account Number *</label>
                  <input type="text" formControlName="accountNumber" class="input-field" placeholder="Account number" />
                </div>
                @if (receiverForm.value.bankId && allBranches.length > 0) {
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Branch</label>
                  <div class="flex gap-2">
                    <input type="text" formControlName="branchName" class="input-field flex-1" readonly placeholder="Select branch" />
                    <button type="button" (click)="showBranchPopup = true"
                      class="px-3 py-2.5 rounded-xl bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-700 text-sm transition-colors">
                      Browse
                    </button>
                  </div>
                </div>
                }
              </div>
              }

              <!-- \u2500\u2500 Cash / Pickup \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
              @if (isCashTransfer()) {
              <div class="space-y-3 pt-1">
                <p class="text-xs font-semibold text-surface-400 dark:text-surface-500 uppercase tracking-wide">Payout Info</p>
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Payout Location</label>
                  @if (payoutCashLocations.length > 0) {
                  <select (change)="onCashLocationSelected(payoutCashLocations[$any($event.target).value])" class="input-field">
                    <option value="">Select payout location</option>
                    @for (b of payoutCashLocations; track b.id; let i = $index) {
                    <option [value]="i">{{ b.bankName }}</option>
                    }
                  </select>
                  } @else {
                  <p class="text-xs text-amber-500 dark:text-amber-400 mb-1">No cash locations configured for this agent.</p>
                  <input type="text" formControlName="bankName" class="input-field" placeholder="Enter payout location name" />
                  }
                </div>
              </div>
              }

              <!-- \u2500\u2500 Wallet / Mobile Money \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
              @if (isWalletTransfer()) {
              <div class="space-y-3 pt-1">
                <p class="text-xs font-semibold text-surface-400 dark:text-surface-500 uppercase tracking-wide">Wallet Info</p>
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Wallet Provider</label>
                  @if (payoutLocations.length > 0) {
                  <select (change)="onLocationSelected(payoutLocations[$any($event.target).value])" class="input-field">
                    <option value="">Select wallet provider</option>
                    @for (loc of payoutLocations; track loc.id; let i = $index) {
                    <option [value]="i">{{ loc.locationName }}</option>
                    }
                  </select>
                  } @else {
                  <p class="text-xs text-amber-500 dark:text-amber-400 mb-1">No wallet providers configured for this agent.</p>
                  <input type="text" formControlName="bankName" class="input-field" placeholder="Enter wallet provider name" />
                  }
                </div>
                <div>
                  <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Wallet Number *</label>
                  <input type="text" formControlName="accountNumber" class="input-field" placeholder="Wallet number / account" />
                </div>
              </div>
              }

              @if (store.apiType() !== 'thirdParty') {
              <div>
                <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Relationship</label>
                <select formControlName="relationship" class="input-field">
                  <option value="">Select</option>
                  <option value="Self">Self</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Parent">Parent</option>
                  <option value="Child">Child</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              }

              <button (click)="saveNewReceiver()" [disabled]="savingReceiver"
                class="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-all disabled:opacity-50">
                {{ savingReceiver ? 'Saving...' : 'Create Receiver' }}
              </button>
            </div>
            }
          </div>
          }

          <!-- Proceed from customer+receiver -->
          <button (click)="proceedFromCustomerReceiver()"
            [disabled]="!canProceedReceiver"
            class="w-full py-4 rounded-2xl font-semibold text-base transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
            [class]="canProceedReceiver ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm' : 'bg-surface-100 dark:bg-surface-800 text-surface-400 dark:text-surface-500'">
            Next: Compliance \u2192
          </button>
        </div>
        }

      </div><!-- /sub-step-container -->
    </div>
    }

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <!-- STEP 2: COMPLIANCE                                              -->
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (store.currentStep() === 2) {
    <div class="space-y-4">
      <button (click)="prevStep()" class="flex items-center gap-1.5 text-sm text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-200 transition-colors">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        Back
      </button>

      <div class="bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 rounded-2xl p-6 shadow-sm space-y-5">
        <div>
          <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Compliance Information</h3>
          <p class="text-xs text-surface-500 dark:text-surface-400 mt-1">Required for regulatory compliance.</p>
        </div>

        @if (!appSettings.requirePurpose && !appSettings.requireSourceOfFunds && !appSettings.requireRelationship) {
        <p class="text-sm text-surface-400 dark:text-surface-500 text-center py-4">No compliance fields required. You can proceed.</p>
        }

        @if (appSettings.requirePurpose) {
        <div>
          <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Purpose of Remittance <span class="text-rose-500">*</span></label>
          <select [(ngModel)]="purpose" class="input-field">
            <option value="">Select purpose</option>
            @for (p of purposes; track p.code) {
              <option [value]="p.code">{{ p.name }}</option>
            }
          </select>
        </div>
        }

        @if (appSettings.requireSourceOfFunds) {
        <div>
          <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Source of Funds <span class="text-rose-500">*</span></label>
          <select [(ngModel)]="sourceOfFunds" class="input-field">
            <option value="">Select source</option>
            @for (s of sourcesOfFund; track s.code) {
              <option [value]="s.code">{{ s.name }}</option>
            }
          </select>
        </div>
        }

        @if (appSettings.requireRelationship) {
        <div>
          <label class="block text-xs font-medium text-surface-500 dark:text-surface-400 mb-1">Relationship to Receiver <span class="text-rose-500">*</span></label>
          <select [(ngModel)]="relationship" class="input-field">
            <option value="">Select relationship</option>
            @for (r of relationships; track r.code) {
              <option [value]="r.code">{{ r.name }}</option>
            }
          </select>
        </div>
        }
      </div>

      <button (click)="proceedFromCompliance()"
        [disabled]="(appSettings.requirePurpose && !purpose) || (appSettings.requireSourceOfFunds && !sourceOfFunds) || (appSettings.requireRelationship && !relationship)"
        class="w-full py-4 rounded-2xl font-semibold text-base transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
        [class]="(!appSettings.requirePurpose || purpose) && (!appSettings.requireSourceOfFunds || sourceOfFunds) && (!appSettings.requireRelationship || relationship) ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm' : 'bg-surface-100 dark:bg-surface-800 text-surface-400 dark:text-surface-500'">
        Review & Confirm \u2192
      </button>
    </div>
    }

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <!-- STEP 3: SUMMARY + SUBMIT                                         -->
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (store.currentStep() === 3 && !store.successResult()) {
    <div class="space-y-4">
      <button (click)="prevStep()" class="flex items-center gap-1.5 text-sm text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-200 transition-colors">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        Back
      </button>

      <!-- Transaction summary -->
      <div class="bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 rounded-2xl p-6 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold text-surface-900 dark:text-surface-100">Transfer Summary</h3>
          @if (store.apiType() === 'thirdParty') {
          <span class="px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs border border-violet-200 dark:border-violet-700/50">Partner API</span>
          }
        </div>

        <!-- Amounts -->
        <div class="flex items-center justify-between py-4 border-y border-surface-100 dark:border-surface-800">
          <div>
            <p class="text-xs text-surface-500 dark:text-surface-400">You send</p>
            <p class="text-xl font-bold text-surface-900 dark:text-surface-100 mt-0.5">{{ sendAmountInput | number:'1.2-2' }} {{ senderCurrency }}</p>
          </div>
          <svg class="w-5 h-5 text-surface-300 dark:text-surface-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          <div class="text-right">
            <p class="text-xs text-surface-500 dark:text-surface-400">They receive</p>
            <p class="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{{ receiveAmount | number:'1.2-2' }} {{ receiverCurrency }}</p>
          </div>
        </div>

        <!-- Details -->
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-surface-500 dark:text-surface-400">Exchange rate</span>
            <span class="text-surface-700 dark:text-surface-300">1 {{ senderCurrency }} = {{ exchangeRate | number:'1.4-4' }} {{ receiverCurrency }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-surface-500 dark:text-surface-400">Service charge</span>
            <span class="text-surface-700 dark:text-surface-300">{{ serviceCharge | number:'1.2-2' }} {{ senderCurrency }}</span>
          </div>
          <div class="flex justify-between font-semibold border-t border-surface-100 dark:border-surface-800 pt-2 mt-1">
            <span class="text-surface-700 dark:text-surface-200">Total payable</span>
            <span class="text-surface-900 dark:text-surface-100">{{ totalPayable | number:'1.2-2' }} {{ senderCurrency }}</span>
          </div>
        </div>

        <!-- People -->
        <div class="border-t border-surface-100 dark:border-surface-800 pt-4 grid grid-cols-2 gap-4">
          @if (store.selectedCustomer()) {
          <div>
            <p class="text-xs text-surface-500 dark:text-surface-400 mb-1.5">Sender</p>
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-xs font-bold text-brand-600 dark:text-brand-400 flex-shrink-0">{{ getInitials(store.selectedCustomer()!.fullName) }}</div>
              <p class="text-sm text-surface-900 dark:text-surface-100 font-medium truncate">{{ store.selectedCustomer()!.fullName }}</p>
            </div>
          </div>
          }
          @if (store.selectedReceiver()) {
          <div>
            <p class="text-xs text-surface-500 dark:text-surface-400 mb-1.5">Receiver</p>
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-xs font-bold text-violet-600 dark:text-violet-400 flex-shrink-0">{{ getInitials(store.selectedReceiver()!.fullName) }}</div>
              <p class="text-sm text-surface-900 dark:text-surface-100 font-medium truncate">{{ store.selectedReceiver()!.fullName }}</p>
            </div>
          </div>
          }
        </div>
      </div>

      <!-- Submit button -->
      <button (click)="submitTransaction()"
        [disabled]="store.submitting() || lockingRate"
        class="w-full py-4 rounded-2xl font-bold text-base transition-all active:scale-[0.98] bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white shadow-lg shadow-brand-500/25 disabled:opacity-60 disabled:cursor-not-allowed">
        @if (lockingRate) {
        <span class="flex items-center justify-center gap-2">
          <span class="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin"></span>
          Locking rate...
        </span>
        } @else if (store.submitting()) {
        <span class="flex items-center justify-center gap-2">
          <span class="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin"></span>
          Processing...
        </span>
        } @else {
        Authorize & Send
        }
      </button>
    </div>
    }

  </div><!-- /step-container -->
  }

</div>
`, styles: ["/* src/app/pages/agent/send-money/send-money.component.scss */\n:host {\n  display: block;\n}\n:host a {\n  text-decoration: none;\n  color: inherit;\n}\n.input-field {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.625rem;\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #0f172a;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  outline: none;\n  transition:\n    border-color 0.15s ease,\n    background 0.15s ease,\n    color 0.15s ease;\n  appearance: none;\n  -webkit-appearance: none;\n}\n.input-field::placeholder {\n  color: #94a3b8;\n}\n.input-field:focus {\n  border-color: #60a5fa;\n  background: #f8fafc;\n}\n.input-field:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.input-field option {\n  background: #ffffff;\n  color: #0f172a;\n}\n:host-context(.dark) .input-field {\n  background: #1e293b;\n  border-color: #334155;\n  color: #f1f5f9;\n}\n:host-context(.dark) .input-field::placeholder {\n  color: #64748b;\n}\n:host-context(.dark) .input-field:focus {\n  border-color: #60a5fa;\n  background: #283548;\n}\n:host-context(.dark) .input-field option {\n  background: #1e293b;\n  color: #f1f5f9;\n}\n.step-container,\n.sub-step-container {\n  will-change: transform, opacity;\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(36px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideInLeft {\n  from {\n    transform: translateX(-36px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideOutLeft {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(-36px);\n    opacity: 0;\n  }\n}\n@keyframes slideOutRight {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(36px);\n    opacity: 0;\n  }\n}\n.slide-in-right {\n  animation: slideInRight 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.slide-in-left {\n  animation: slideInLeft 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.slide-out-left {\n  animation: slideOutLeft 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.slide-out-right {\n  animation: slideOutRight 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n@keyframes dropdownSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-6px) scaleY(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scaleY(1);\n  }\n}\n.search-dropdown {\n  animation: dropdownSlide 0.16s ease-out forwards;\n  transform-origin: top center;\n}\n@keyframes selectedCardIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.selected-card-appear {\n  animation: selectedCardIn 0.2s ease-out forwards;\n}\n@keyframes alertSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.alert-item {\n  animation: alertSlideIn 0.2s ease-out forwards;\n}\n@keyframes calcValuePop {\n  0% {\n    transform: scale(1);\n  }\n  40% {\n    transform: scale(1.04);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.calc-value-update {\n  animation: calcValuePop 0.25s ease-out;\n}\n@keyframes overlayFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes successCardBounce {\n  0% {\n    opacity: 0;\n    transform: scale(0.88) translateY(24px);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.02) translateY(-4px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.success-overlay {\n  animation: overlayFadeIn 0.25s ease-out forwards;\n}\n.success-card {\n  animation: successCardBounce 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n@keyframes checkmarkDraw {\n  from {\n    stroke-dashoffset: 60;\n    opacity: 0;\n  }\n  to {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n}\n.checkmark-path {\n  stroke-dasharray: 60;\n  stroke-dashoffset: 60;\n  animation: checkmarkDraw 0.5s ease-out 0.2s forwards;\n}\n@keyframes pinDialogIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -46%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.pin-dialog {\n  animation: pinDialogIn 0.22s ease-out forwards;\n}\n@keyframes branchPopupIn {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.branch-popup {\n  animation: branchPopupIn 0.22s ease-out forwards;\n}\n@keyframes stepPulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.35);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);\n  }\n}\n.step-num-active {\n  animation: stepPulse 2.2s ease-in-out infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .slide-in-right,\n  .slide-in-left,\n  .slide-out-left,\n  .slide-out-right,\n  .search-dropdown,\n  .selected-card-appear,\n  .alert-item,\n  .success-overlay,\n  .success-card,\n  .pin-dialog,\n  .branch-popup,\n  .step-num-active,\n  .calc-value-update {\n    animation: none !important;\n    transition: none !important;\n    opacity: 1 !important;\n    transform: none !important;\n  }\n}\n/*# sourceMappingURL=send-money.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SendMoneyComponent, { className: "SendMoneyComponent", filePath: "src/app/pages/agent/send-money/send-money.component.ts", lineNumber: 110 });
})();
export {
  SendMoneyComponent
};
//# sourceMappingURL=chunk-PBNF4VOT.js.map
