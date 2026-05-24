import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState
} from "./chunk-NTA2GFZC.js";
import "./chunk-IFKOM5NQ.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-DV4GKRCI.js";
import {
  AppSettingsService
} from "./chunk-DUD7GDET.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormGroup,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
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
  SlicePipe
} from "./chunk-PBY7YOCP.js";
import {
  Component,
  Subject,
  computed,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
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

// src/app/pages/agent/third-party-send/third-party-send.store.ts
var initialState = {
  currentStep: 0,
  stepDir: "forward",
  subStep: "customer",
  sendAmount: 0,
  receiveAmount: 0,
  exchangeRate: 0,
  serviceCharge: 0,
  totalPayable: 0,
  sendCurrency: "",
  receiveCurrency: "",
  receiverCountry: "",
  receiverCountryIso2: "",
  receiverCountryIso3: "",
  senderCountry: "",
  quoteId: null,
  partner: null,
  paymentMethodId: null,
  paymentMethodName: "",
  payoutModeId: null,
  serviceOptionCode: null,
  serviceOptionRoutingCode: null,
  payoutType: null,
  fieldMappings: [],
  missingCustomerFields: [],
  missingReceiverFields: [],
  selectedCustomer: null,
  selectedReceiver: null,
  kycWarning: "",
  dobWarning: "",
  successResult: null,
  submitting: false
};
var ThirdPartySendStore = signalStore(withState(initialState), withComputed((state) => ({
  customerMappings: computed(() => state.fieldMappings().filter((m) => m.tableName?.toLowerCase() === "customers" || m.tableName?.toLowerCase() === "customer")),
  receiverMappings: computed(() => state.fieldMappings().filter((m) => m.tableName?.toLowerCase() === "receivers" || m.tableName?.toLowerCase() === "receiver")),
  canProceedCustomer: computed(() => !!state.selectedCustomer() && state.missingCustomerFields().length === 0),
  canProceedStep1: computed(() => !!state.selectedCustomer() && !state.dobWarning() && state.missingCustomerFields().length === 0 && !!state.selectedReceiver() && state.missingReceiverFields().length === 0),
  isComplete: computed(() => state.currentStep() === 3 && !!state.successResult())
})), withMethods((store) => ({
  initFromNavState(s) {
    patchState(store, s);
  },
  nextStep() {
    patchState(store, { currentStep: store.currentStep() + 1, stepDir: "forward" });
  },
  prevStep() {
    if (store.currentStep() > 0)
      patchState(store, { currentStep: store.currentStep() - 1, stepDir: "backward" });
  },
  goToStep(step) {
    if (step >= 0 && step < store.currentStep())
      patchState(store, { currentStep: step, stepDir: "backward" });
  },
  setSubStep(sub, dir = "forward") {
    patchState(store, { subStep: sub, stepDir: dir });
  },
  setFieldMappings(mappings) {
    patchState(store, { fieldMappings: mappings });
  },
  setSelectedCustomer(c) {
    patchState(store, { selectedCustomer: c, missingCustomerFields: [] });
  },
  setSelectedReceiver(r) {
    patchState(store, { selectedReceiver: r, missingReceiverFields: [] });
  },
  setMissingCustomerFields(fields) {
    patchState(store, { missingCustomerFields: fields });
  },
  setMissingReceiverFields(fields) {
    patchState(store, { missingReceiverFields: fields });
  },
  setKycWarning(w) {
    patchState(store, { kycWarning: w });
  },
  setDobWarning(w) {
    patchState(store, { dobWarning: w });
  },
  setSubmitting(v) {
    patchState(store, { submitting: v });
  },
  setSuccessResult(r) {
    patchState(store, { successResult: r, currentStep: r ? 3 : store.currentStep() });
  },
  reset() {
    patchState(store, __spreadValues({}, initialState));
  }
})));

// src/app/pages/agent/third-party-send/third-party-send.component.ts
var _c0 = () => [0, 1, 2, 3];
var _c1 = () => ["Summary", "Sender & Receiver", "Payout Details", "Review"];
var _c2 = () => ["Summary", "Sender & Receiver", "Payout", "Review"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.code;
var _forTrack3 = ($index, $item) => $item.value;
function ThirdPartySendComponent_Conditional_1_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(branch_r4.branchCode);
  }
}
function ThirdPartySendComponent_Conditional_1_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(branch_r4.address);
  }
}
function ThirdPartySendComponent_Conditional_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_1_For_11_Template_button_click_0_listener() {
      const branch_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.branchContext === "txn" ? ctx_r1.selectBranchTxn(branch_r4) : ctx_r1.selectBranch(branch_r4));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_1_For_11_Conditional_3_Template, 2, 1, "span", 16)(4, ThirdPartySendComponent_Conditional_1_For_11_Conditional_4_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(branch_r4.branchName);
    \u0275\u0275advance();
    \u0275\u0275conditional(branch_r4.branchCode ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(branch_r4.address ? 4 : -1);
  }
}
function ThirdPartySendComponent_Conditional_1_ForEmpty_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "No branches found");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 4)(2, "div", 5)(3, "h3", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showBranchPopup = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 8);
    \u0275\u0275element(7, "path", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_1_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.branchSearch, $event) || (ctx_r1.branchSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ThirdPartySendComponent_Conditional_1_Template_input_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterBranches());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11);
    \u0275\u0275repeaterCreate(10, ThirdPartySendComponent_Conditional_1_For_11_Template, 5, 3, "button", 12, _forTrack0, false, ThirdPartySendComponent_Conditional_1_ForEmpty_12_Template, 2, 0, "p", 13);
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
function ThirdPartySendComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 19);
    \u0275\u0275element(3, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2", 21);
    \u0275\u0275text(5, "Transaction Submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 22);
    \u0275\u0275text(7, " Reference: ");
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 24)(11, "div", 25)(12, "span", 26);
    \u0275\u0275text(13, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 25)(17, "span", 26);
    \u0275\u0275text(18, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 27);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 25)(22, "span", 26);
    \u0275\u0275text(23, "Amount Sent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 28);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 25)(28, "span", 26);
    \u0275\u0275text(29, "Amount Received");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 29);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 25)(34, "span", 26);
    \u0275\u0275text(35, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 30);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 31)(39, "button", 32);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_2_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadReceipt());
    });
    \u0275\u0275text(40, " Download Receipt ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 33);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_2_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startNewTransaction());
    });
    \u0275\u0275text(42, " New Transaction ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.store.successResult()) == null ? null : tmp_2_0.referenceNumber);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.store.successResult()) == null ? null : tmp_3_0.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.store.successResult()) == null ? null : tmp_4_0.receiverName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(26, 9, (tmp_5_0 = ctx_r1.store.successResult()) == null ? null : tmp_5_0.sendAmount, "1.2-2"), " ", (tmp_5_0 = ctx_r1.store.successResult()) == null ? null : tmp_5_0.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(32, 12, (tmp_6_0 = ctx_r1.store.successResult()) == null ? null : tmp_6_0.receiveAmount, "1.2-2"), " ", (tmp_6_0 = ctx_r1.store.successResult()) == null ? null : tmp_6_0.receiveCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r1.store.successResult()) == null ? null : tmp_7_0.status);
  }
}
function ThirdPartySendComponent_Conditional_3_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 46);
    \u0275\u0275element(1, "path", 49);
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const step_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", step_r8 + 1, " ");
  }
}
function ThirdPartySendComponent_Conditional_3_For_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
  if (rf & 2) {
    const step_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.store.currentStep() > step_r8 ? "bg-indigo-600" : "bg-gray-200 dark:bg-gray-700");
  }
}
function ThirdPartySendComponent_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "button", 45);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_For_9_Template_button_click_2_listener() {
      const step_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToStep(step_r8));
    });
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_For_9_Conditional_3_Template, 2, 0, ":svg:svg", 46)(4, ThirdPartySendComponent_Conditional_3_For_9_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ThirdPartySendComponent_Conditional_3_For_9_Conditional_7_Template, 1, 2, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("flex-1", step_r8 < 3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.store.currentStep() > step_r8 ? "bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer ring-0 hover:ring-4 hover:ring-indigo-100 dark:hover:ring-indigo-900/40" : ctx_r1.store.currentStep() === step_r8 ? "bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-900/40 cursor-default" : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed");
    \u0275\u0275property("disabled", step_r8 >= ctx_r1.store.currentStep())("title", \u0275\u0275pureFunction0(11, _c1)[step_r8]);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.currentStep() > step_r8 ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.store.currentStep() >= step_r8 ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 dark:text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pureFunction0(12, _c2)[step_r8], " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r8 < 3 ? 7 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "h2", 51);
    \u0275\u0275text(2, "Transaction Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "div", 53)(5, "span", 54);
    \u0275\u0275text(6, "You send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 53)(11, "span", 54);
    \u0275\u0275text(12, "Exchange rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 56);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 53)(17, "span", 54);
    \u0275\u0275text(18, "Service charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 56);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 53)(23, "span", 54);
    \u0275\u0275text(24, "Total payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 28);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 57)(29, "span", 58);
    \u0275\u0275text(30, "Receiver gets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 59);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 61);
    \u0275\u0275element(36, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "button", 63);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_10_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.store.nextStep());
    });
    \u0275\u0275text(39, " Continue to Customer & Receiver \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 13, ctx_r1.store.sendAmount(), "1.2-2"), " ", ctx_r1.store.sendCurrency(), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" 1 ", ctx_r1.store.sendCurrency(), " = ", \u0275\u0275pipeBind2(15, 16, ctx_r1.store.exchangeRate(), "1.4-4"), " ", ctx_r1.store.receiveCurrency(), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(21, 19, ctx_r1.store.serviceCharge(), "1.2-2"), " ", ctx_r1.store.sendCurrency(), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(27, 22, ctx_r1.store.totalPayable(), "1.2-2"), " ", ctx_r1.store.sendCurrency(), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(33, 25, ctx_r1.store.receiveAmount(), "1.2-2"), " ", ctx_r1.store.receiveCurrency(), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.store.paymentMethodName(), " ");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 71);
    \u0275\u0275element(2, "path", 49);
    \u0275\u0275elementEnd()();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.store.subStep() === "customer" ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-500");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 69);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 71);
    \u0275\u0275element(2, "path", 49);
    \u0275\u0275elementEnd()();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.store.subStep() === "receiver" ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-500");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 69);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 75);
    \u0275\u0275element(2, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.store.kycWarning(), " ");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Address ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_7_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingCustomerData["address"], $event) || (ctx_r1.missingCustomerData["address"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingCustomerData["address"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "City ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_8_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingCustomerData["city"], $event) || (ctx_r1.missingCustomerData["city"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingCustomerData["city"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Postal Code ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_9_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingCustomerData["postalCode"], $event) || (ctx_r1.missingCustomerData["postalCode"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingCustomerData["postalCode"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Date of Birth ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_10_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingCustomerData["dateOfBirth"], $event) || (ctx_r1.missingCustomerData["dateOfBirth"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingCustomerData["dateOfBirth"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
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
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Nationality ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_11_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingCustomerData["nationality"], $event) || (ctx_r1.missingCustomerData["nationality"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 96);
    \u0275\u0275text(7, "Select nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_11_For_9_Template, 2, 2, "option", 97, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingCustomerData["nationality"]);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.countries);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Gender ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_12_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingCustomerData["gender"], $event) || (ctx_r1.missingCustomerData["gender"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 96);
    \u0275\u0275text(7, "Select gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 98);
    \u0275\u0275text(9, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 99);
    \u0275\u0275text(11, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 100);
    \u0275\u0275text(13, "Other");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingCustomerData["gender"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Occupation ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_13_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingCustomerData["occupation"], $event) || (ctx_r1.missingCustomerData["occupation"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingCustomerData["occupation"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 85);
    \u0275\u0275element(3, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87);
    \u0275\u0275template(7, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_7_Template, 6, 1, "div")(8, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_8_Template, 6, 1, "div")(9, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_9_Template, 6, 1, "div")(10, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_10_Template, 6, 1, "div")(11, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_11_Template, 10, 1, "div")(12, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_12_Template, 14, 1, "div")(13, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Conditional_13_Template, 6, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 88);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveMissingCustomerFields());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.store.missingCustomerFields().length, " additional required field(s) ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isMissingCustomerField("address") ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingCustomerField("city") ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingCustomerField("postalCode") ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingCustomerField("dateOfBirth") ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingCustomerField("nationality") ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingCustomerField("gender") ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingCustomerField("occupation") ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.savingMissingCustomer);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingMissingCustomer ? "Saving..." : "Save & Continue", " ");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79)(4, "p", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 82);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.clearCustomer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 46);
    \u0275\u0275element(10, "path", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Conditional_11_Template, 16, 11, "div", 83);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.store.selectedCustomer().fullName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.store.selectedCustomer().fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.store.selectedCustomer().phone, " \xB7 ", ctx_r1.store.selectedCustomer().country, "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.store.missingCustomerFields().length > 0 && ctx_r1.showMissingCustomerForm ? 11 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 110);
    \u0275\u0275listener("mousedown", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_4_For_2_Template_button_mousedown_0_listener() {
      const c_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.selectCustomer(c_r23));
    });
    \u0275\u0275elementStart(1, "div", 111);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 112);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 113);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r23 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r23.fullName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r23.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r23.phone, " \xB7 ", c_r23.country, "");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275repeaterCreate(1, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_4_For_2_Template, 8, 4, "button", 109, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredCustomers);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r25 = ctx.$implicit;
    \u0275\u0275property("value", c_r25.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r25.name);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r26 = ctx.$implicit;
    \u0275\u0275property("value", c_r26.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r26.name);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r27 = ctx.$implicit;
    \u0275\u0275property("value", t_r27.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r27.name);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "p", 114);
    \u0275\u0275text(2, "New Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 115)(4, "div", 116)(5, "label", 117);
    \u0275\u0275text(6, "Full Name ");
    \u0275\u0275elementStart(7, "span", 90);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "input", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "label", 117);
    \u0275\u0275text(12, "Phone ");
    \u0275\u0275elementStart(13, "span", 90);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 117);
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "label", 117);
    \u0275\u0275text(22, "Country ");
    \u0275\u0275elementStart(23, "span", 90);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "select", 121)(26, "option", 96);
    \u0275\u0275text(27, "Select country");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(28, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_For_29_Template, 2, 2, "option", 97, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "label", 117);
    \u0275\u0275text(32, "Nationality ");
    \u0275\u0275elementStart(33, "span", 90);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "select", 121)(36, "option", 96);
    \u0275\u0275text(37, "Select nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(38, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_For_39_Template, 2, 2, "option", 97, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div")(41, "label", 117);
    \u0275\u0275text(42, "ID Type ");
    \u0275\u0275elementStart(43, "span", 90);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "select", 121)(46, "option", 96);
    \u0275\u0275text(47, "Select ID type");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(48, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_For_49_Template, 2, 2, "option", 97, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "label", 117);
    \u0275\u0275text(52, "ID Number ");
    \u0275\u0275elementStart(53, "span", 90);
    \u0275\u0275text(54, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(55, "input", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 116)(57, "label", 117);
    \u0275\u0275text(58, " Address ");
    \u0275\u0275template(59, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_59_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "input", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div")(62, "label", 117);
    \u0275\u0275text(63, " City ");
    \u0275\u0275template(64, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_64_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div")(67, "label", 117);
    \u0275\u0275text(68, " Postal Code ");
    \u0275\u0275template(69, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_69_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div")(72, "label", 117);
    \u0275\u0275text(73, " Date of Birth ");
    \u0275\u0275template(74, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_74_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div")(77, "label", 117);
    \u0275\u0275text(78, " Gender ");
    \u0275\u0275template(79, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_79_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "select", 121)(81, "option", 96);
    \u0275\u0275text(82, "Select gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "option", 98);
    \u0275\u0275text(84, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "option", 99);
    \u0275\u0275text(86, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "option", 100);
    \u0275\u0275text(88, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "div")(90, "label", 117);
    \u0275\u0275text(91, " Occupation ");
    \u0275\u0275template(92, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Conditional_92_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(93, "input", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "button", 128);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveNewCustomer());
    });
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.fullName);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.phone);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.email);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.country);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.countries);
    \u0275\u0275advance(7);
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.nationality);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.countries);
    \u0275\u0275advance(7);
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.idDocumentType);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.idTypes);
    \u0275\u0275advance(7);
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.idDocumentNumber);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isCustomerFieldRequired("address") ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.address);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isCustomerFieldRequired("city") ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.city);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isCustomerFieldRequired("postalCode") ? 69 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.postalCode);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isCustomerFieldRequired("dateOfBirth") ? 74 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.dateOfBirth);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isCustomerFieldRequired("gender") ? 79 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.gender);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.isCustomerFieldRequired("occupation") ? 92 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.customerForm.controls.occupation);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.savingCustomer);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingCustomer ? "Creating..." : "Create Customer", " ");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerSearch, $event) || (ctx_r1.customerSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.filterCustomers());
    })("focus", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Template_input_focus_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.filterCustomers());
    })("blur", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hideCustomerDropdown());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 104);
    \u0275\u0275element(3, "path", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_4_Template, 3, 0, "div", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 107);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.showCreateCustomer = !ctx_r1.showCreateCustomer);
    });
    \u0275\u0275text(6, " + Create New Customer ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Conditional_7_Template, 96, 22, "div", 108);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerSearch);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showCustomerDropdown && ctx_r1.filteredCustomers.length > 0 ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showCreateCustomer ? 7 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_0_Template, 4, 2, "div", 73)(1, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_1_Template, 12, 5)(2, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Conditional_2_Template, 8, 3);
    \u0275\u0275elementStart(3, "button", 74);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToCustomerSubStep());
    });
    \u0275\u0275text(4, " Next: Select Receiver \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.store.kycWarning() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.selectedCustomer() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.store.selectedCustomer() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.store.canProceedCustomer() ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed");
    \u0275\u0275property("disabled", !ctx_r1.store.canProceedCustomer());
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Address ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_7_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingReceiverData["address"], $event) || (ctx_r1.missingReceiverData["address"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingReceiverData["address"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "City ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_8_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingReceiverData["city"], $event) || (ctx_r1.missingReceiverData["city"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingReceiverData["city"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Postal Code ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_9_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingReceiverData["postalCode"], $event) || (ctx_r1.missingReceiverData["postalCode"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingReceiverData["postalCode"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Gender ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_10_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingReceiverData["gender"], $event) || (ctx_r1.missingReceiverData["gender"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 96);
    \u0275\u0275text(7, "Select gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 98);
    \u0275\u0275text(9, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 99);
    \u0275\u0275text(11, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 100);
    \u0275\u0275text(13, "Other");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingReceiverData["gender"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r36 = ctx.$implicit;
    \u0275\u0275property("value", c_r36.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r36.name);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Nationality ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_11_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingReceiverData["nationality"], $event) || (ctx_r1.missingReceiverData["nationality"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 96);
    \u0275\u0275text(7, "Select nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_11_For_9_Template, 2, 2, "option", 97, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingReceiverData["nationality"]);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.countries);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Date of Birth ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_12_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingReceiverData["dateOfBirth"], $event) || (ctx_r1.missingReceiverData["dateOfBirth"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingReceiverData["dateOfBirth"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Occupation ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 135);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_13_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingReceiverData["occupation"], $event) || (ctx_r1.missingReceiverData["occupation"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingReceiverData["occupation"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_14_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const t_r40 = ctx.$implicit;
    \u0275\u0275property("value", t_r40.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_17_0 = t_r40.label) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : t_r40.value);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "ID Type ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_14_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingReceiverData["idDocumentType"], $event) || (ctx_r1.missingReceiverData["idDocumentType"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 96);
    \u0275\u0275text(7, "Select ID type");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_14_For_9_Template, 2, 2, "option", 97, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingReceiverData["idDocumentType"]);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.idTypes);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "ID Number ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 136);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_15_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.missingReceiverData["idDocumentNumber"], $event) || (ctx_r1.missingReceiverData["idDocumentNumber"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missingReceiverData["idDocumentNumber"]);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 85);
    \u0275\u0275element(3, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87);
    \u0275\u0275template(7, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_7_Template, 6, 1, "div")(8, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_8_Template, 6, 1, "div")(9, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_9_Template, 6, 1, "div")(10, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_10_Template, 14, 1, "div")(11, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_11_Template, 10, 1, "div")(12, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_12_Template, 6, 1, "div")(13, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_13_Template, 6, 1, "div")(14, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_14_Template, 10, 1, "div")(15, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Conditional_15_Template, 6, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 88);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveMissingReceiverFields());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.store.missingReceiverFields().length, " additional required field(s) ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isMissingReceiverField("address") ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingReceiverField("city") ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingReceiverField("postalCode") ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingReceiverField("gender") ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingReceiverField("nationality") ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingReceiverField("dateOfBirth") ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingReceiverField("occupation") ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingReceiverField("idDocumentType") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMissingReceiverField("idDocumentNumber") ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.savingMissingReceiver);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingMissingReceiver ? "Saving..." : "Save & Continue", " ");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 149);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 150);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const bkName_r43 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bkName_r43);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 149);
    \u0275\u0275text(2, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 151);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const bkCode_r44 = \u0275\u0275readContextLet(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bkCode_r44);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 149);
    \u0275\u0275text(2, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 151);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const bkAcc_r45 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\xB7\xB7\xB7\xB7 ", \u0275\u0275pipeBind2(5, 1, bkAcc_r45, -4), "");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 149);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 150);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const bkBranch_r46 = \u0275\u0275readContextLet(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bkBranch_r46);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 137)(1, "div", 140)(2, "div", 141);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 142);
    \u0275\u0275element(4, "path", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 144);
    \u0275\u0275text(6, "Payout Account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 145);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.togglePayoutSwapPanel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 146);
    \u0275\u0275element(9, "path", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Change ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 148);
    \u0275\u0275template(12, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_5_Conditional_12_Template, 5, 1, "div")(13, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_5_Conditional_13_Template, 5, 1, "div")(14, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_5_Conditional_14_Template, 6, 4, "div")(15, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_5_Conditional_15_Template, 5, 1, "div");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const bkName_r43 = \u0275\u0275readContextLet(1);
    const bkCode_r44 = \u0275\u0275readContextLet(2);
    const bkAcc_r45 = \u0275\u0275readContextLet(3);
    const bkBranch_r46 = \u0275\u0275readContextLet(4);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(bkName_r43 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(bkCode_r44 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(bkAcc_r45 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(bkBranch_r46 ? 15 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_6_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 162);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_6_For_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 164);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r49 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r49.accountNumber);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_6_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 160);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_6_For_6_Template_button_click_0_listener() {
      const d_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.selectSavedDetail(d_r49));
    });
    \u0275\u0275elementStart(1, "div", 161);
    \u0275\u0275template(2, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_6_For_6_Conditional_2_Template, 1, 0, "div", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79)(4, "p", 163);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_6_For_6_Conditional_6_Template, 2, 1, "p", 164);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r49 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275classMap((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.id) === d_r49.id ? "bg-indigo-50 dark:bg-indigo-900/25" : "hover:bg-gray-50 dark:hover:bg-gray-800/60");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.id) === d_r49.id ? "border-indigo-500" : "border-gray-300 dark:border-gray-600");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.id) === d_r49.id ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r49.bankName);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r49.accountNumber ? 6 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "div", 152)(2, "p", 153);
    \u0275\u0275text(3, "Saved Accounts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 154);
    \u0275\u0275repeaterCreate(5, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_6_For_6_Template, 7, 7, "button", 155, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 156)(8, "button", 157);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r47);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.useNewPayoutDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 158);
    \u0275\u0275element(10, "path", 159);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Add new account ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.savedPayoutDetails);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bank_r52 = ctx.$implicit;
    \u0275\u0275property("value", bank_r52.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bank_r52.bankName);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 167);
    \u0275\u0275text(2, "Bank ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 169);
    \u0275\u0275listener("change", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_3_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.onPayoutBankSelectedTxn(ctx_r1.payoutBanks[$event.target.selectedIndex - 1]));
    });
    \u0275\u0275elementStart(6, "option", 96);
    \u0275\u0275text(7, "Select bank");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_3_For_9_Template, 2, 2, "option", 97, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.payoutBanks);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 166)(1, "div")(2, "label", 167);
    \u0275\u0275text(3, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 170);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r1 = \u0275\u0275nextContext(7);
      \u0275\u0275twoWayBindingSet(ctx_r1.transactionPayoutDetails.bankName, $event) || (ctx_r1.transactionPayoutDetails.bankName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "label", 167);
    \u0275\u0275text(7, "Bank Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 171);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_4_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r1 = \u0275\u0275nextContext(7);
      \u0275\u0275twoWayBindingSet(ctx_r1.transactionPayoutDetails.bankCode, $event) || (ctx_r1.transactionPayoutDetails.bankCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transactionPayoutDetails.bankName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transactionPayoutDetails.bankCode);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 172)(1, "span", 174);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 175);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_5_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext(8);
      ctx_r1.branchContext = "txn";
      return \u0275\u0275resetView(ctx_r1.showBranchPopup = true);
    });
    \u0275\u0275text(4, " Change ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.transactionPayoutDetails.branchName, " ");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 176);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_5_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r1 = \u0275\u0275nextContext(8);
      ctx_r1.branchContext = "txn";
      return \u0275\u0275resetView(ctx_r1.showBranchPopup = true);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 158);
    \u0275\u0275element(2, "path", 177)(3, "path", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Select Branch ");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 167);
    \u0275\u0275text(2, "Branch ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_5_Conditional_5_Template, 5, 1, "div", 172)(6, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_5_Conditional_6_Template, 5, 0, "button", 173);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.transactionPayoutDetails.branchName ? 5 : 6);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 139)(1, "p", 165);
    \u0275\u0275text(2, "Bank Details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_3_Template, 10, 0, "div")(4, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_4_Template, 9, 2, "div", 166)(5, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Conditional_5_Template, 7, 1, "div");
    \u0275\u0275elementStart(6, "div")(7, "label", 167);
    \u0275\u0275text(8, "Account Number ");
    \u0275\u0275elementStart(9, "span", 90);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 168);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.transactionPayoutDetails.accountNumber, $event) || (ctx_r1.transactionPayoutDetails.accountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.payoutBanks.length > 0 ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allBranches.length > 0 && ctx_r1.branchContext === "txn" ? 5 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transactionPayoutDetails.accountNumber);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1)(2)(3)(4);
    \u0275\u0275template(5, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_5_Template, 16, 4, "div", 137)(6, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_6_Template, 12, 0, "div", 138)(7, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Conditional_7_Template, 12, 3, "div", 139);
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(5);
    const bkRawName_r56 = (ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.bankName) || ctx_r1.transactionPayoutDetails.bankName;
    \u0275\u0275advance();
    \u0275\u0275storeLet(bkRawName_r56 || ctx_r1.resolveDisplayBankName((tmp_6_0 = ctx_r1.transactionPayoutDetails.bankId) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.bankId, null));
    \u0275\u0275advance();
    \u0275\u0275storeLet((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.bankCode) || ctx_r1.transactionPayoutDetails.bankCode);
    \u0275\u0275advance();
    \u0275\u0275storeLet((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.accountNumber) || ctx_r1.transactionPayoutDetails.accountNumber);
    \u0275\u0275advance();
    \u0275\u0275storeLet((ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.branchName) || ctx_r1.transactionPayoutDetails.branchName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasSavedPayoutData() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showPayoutSwapPanel ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showNewAccountForm || !ctx_r1.selectedSavedDetail && ctx_r1.savedPayoutDetails.length === 0 ? 7 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 187);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.store.serviceOptionCode());
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179)(1, "div", 180);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 181);
    \u0275\u0275element(3, "path", 182)(4, "path", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 184);
    \u0275\u0275text(6, "Cash Pickup via MoneyGram");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 185)(8, "p", 186);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_0_Conditional_10_Template, 2, 1, "p", 187);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.store.paymentMethodName() || ctx_r1.store.serviceOptionCode());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.serviceOptionCode() ? 10 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 204);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_2_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.toggleCashSavedPanel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 146);
    \u0275\u0275element(2, "path", 205);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Swap ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275classMap(ctx_r1.showCashSavedPanel ? "flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-600 transition-colors" : "flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 199);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const csCode_r59 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(csCode_r59);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 179)(1, "div", 191)(2, "div", 141);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 192);
    \u0275\u0275element(4, "path", 177)(5, "path", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 184);
    \u0275\u0275text(7, "Cash Pickup Location");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 141);
    \u0275\u0275template(9, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_2_Conditional_9_Template, 4, 2, "button", 193);
    \u0275\u0275elementStart(10, "button", 194);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.toggleCashSwapPanel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 146);
    \u0275\u0275element(12, "path", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Change ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 195)(15, "div", 196);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 197);
    \u0275\u0275element(17, "path", 177)(18, "path", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 198)(20, "p", 150);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_2_Conditional_22_Template, 2, 1, "p", 199);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 200)(24, "span", 201);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 202);
    \u0275\u0275element(26, "path", 203);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Selected ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const csName_r60 = \u0275\u0275readContextLet(0);
    const csCode_r59 = \u0275\u0275readContextLet(1);
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.savedPayoutDetails.length > 0 ? 9 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(csName_r60);
    \u0275\u0275advance();
    \u0275\u0275conditional(csCode_r59 ? 22 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 212);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 162);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_For_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 164);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r62 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r62.bankCode);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_For_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 213);
    \u0275\u0275element(1, "path", 49);
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "button", 211);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_For_11_Template_button_click_1_listener() {
      const d_r62 = \u0275\u0275restoreView(_r61).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.selectCashSavedDetail(d_r62));
    });
    \u0275\u0275template(2, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_For_11_Conditional_2_Template, 1, 0, "div", 212);
    \u0275\u0275elementStart(3, "div", 161);
    \u0275\u0275template(4, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_For_11_Conditional_4_Template, 1, 0, "div", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 79)(6, "p", 163);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_For_11_Conditional_8_Template, 2, 1, "p", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_For_11_Conditional_9_Template, 2, 0, ":svg:svg", 213);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r62 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(8);
    const isSavedActive_r63 = (ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.id) === d_r62.id && !ctx_r1.transactionPayoutDetails.bankId;
    \u0275\u0275advance();
    \u0275\u0275classMap(isSavedActive_r63 ? "bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/25 dark:to-purple-900/20" : "hover:bg-gray-50 dark:hover:bg-gray-800/60");
    \u0275\u0275advance();
    \u0275\u0275conditional(isSavedActive_r63 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(isSavedActive_r63 ? "border-indigo-500" : "border-gray-300 dark:border-gray-600");
    \u0275\u0275advance();
    \u0275\u0275conditional(isSavedActive_r63 ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r62.bankName);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r62.bankCode ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(isSavedActive_r63 ? 9 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188)(1, "div", 206)(2, "div", 141);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 142);
    \u0275\u0275element(4, "path", 207);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 208);
    \u0275\u0275text(6, "Previously Used");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 209);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 154);
    \u0275\u0275repeaterCreate(10, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_For_11_Template, 10, 9, "button", 210, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", ctx_r1.store.receiverCountry(), " \xB7 ", ctx_r1.store.paymentMethodName(), "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.savedPayoutDetails);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 214);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r64);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.showCashSwapPanel = true);
    });
    \u0275\u0275elementStart(1, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 216);
    \u0275\u0275element(3, "path", 177)(4, "path", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 217)(6, "p", 218);
    \u0275\u0275text(7, "Select Cash Pickup Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 219);
    \u0275\u0275text(9, "Required \u2014 tap to choose a payout location");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 220);
    \u0275\u0275element(11, "path", 221);
    \u0275\u0275elementEnd()();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 226);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r65);
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.showCashSwapPanel = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 227);
    \u0275\u0275element(2, "path", 9);
    \u0275\u0275elementEnd()();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 229);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 164);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r67 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r67.bankCode);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 230);
    \u0275\u0275element(1, "path", 203);
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "button", 160);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_For_2_Template_button_click_1_listener() {
      const loc_r67 = \u0275\u0275restoreView(_r66).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(9);
      return \u0275\u0275resetView(ctx_r1.onCashLocationSelectedTxn(loc_r67));
    });
    \u0275\u0275elementStart(2, "div", 161);
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_For_2_Conditional_3_Template, 1, 0, "div", 229);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 79)(5, "p", 163);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_For_2_Conditional_7_Template, 2, 1, "p", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_For_2_Conditional_8_Template, 2, 0, ":svg:svg", 230);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r67 = ctx.$implicit;
    const isSelected_r68 = \u0275\u0275nextContext(9).transactionPayoutDetails.bankId === loc_r67.id;
    \u0275\u0275advance();
    \u0275\u0275classMap(isSelected_r68 ? "bg-emerald-50 dark:bg-emerald-900/25" : "hover:bg-gray-50 dark:hover:bg-gray-800/60");
    \u0275\u0275advance();
    \u0275\u0275classMap(isSelected_r68 ? "border-emerald-500" : "border-gray-300 dark:border-gray-600");
    \u0275\u0275advance();
    \u0275\u0275conditional(isSelected_r68 ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(loc_r67.bankName);
    \u0275\u0275advance();
    \u0275\u0275conditional(loc_r67.bankCode ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(isSelected_r68 ? 8 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_Conditional_3_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 229);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "button", 160);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_Conditional_3_For_5_Template_button_click_1_listener() {
      const d_r70 = \u0275\u0275restoreView(_r69).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(10);
      return \u0275\u0275resetView(ctx_r1.selectCashSavedDetail(d_r70));
    });
    \u0275\u0275elementStart(2, "div", 161);
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_Conditional_3_For_5_Conditional_3_Template, 1, 0, "div", 229);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 79)(5, "p", 163);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r70 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(10);
    const isSaved_r71 = (ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.id) === d_r70.id;
    \u0275\u0275advance();
    \u0275\u0275classMap(isSaved_r71 ? "bg-emerald-50 dark:bg-emerald-900/25" : "hover:bg-gray-50 dark:hover:bg-gray-800/60");
    \u0275\u0275advance();
    \u0275\u0275classMap(isSaved_r71 ? "border-emerald-500" : "border-gray-300 dark:border-gray-600");
    \u0275\u0275advance();
    \u0275\u0275conditional(isSaved_r71 ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r70.bankName);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 231)(1, "p", 232);
    \u0275\u0275text(2, "Previously Used");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 233);
    \u0275\u0275repeaterCreate(4, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_Conditional_3_For_5_Template, 7, 6, "button", 155, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(9);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.savedPayoutDetails);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228);
    \u0275\u0275repeaterCreate(1, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_For_2_Template, 9, 8, "button", 155, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_Conditional_3_Template, 6, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.payoutCashLocations);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.savedPayoutDetails.length > 0 ? 3 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 225);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 234);
    \u0275\u0275element(2, "path", 235);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No cash locations configured. Use Admin \u2192 MoneyGram \u2192 Seed Cash Locations. ");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "div", 222)(2, "p", 153);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 223);
    \u0275\u0275element(4, "path", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Available Locations ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_6_Template, 3, 0, "button", 224);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_7_Template, 4, 1)(8, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Conditional_8_Template, 4, 0, "div", 225);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.showCashSwapPanel ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.payoutCashLocations.length > 0 ? 7 : 8);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 190);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 236);
    \u0275\u0275element(2, "path", 235);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 237);
    \u0275\u0275text(4, "No cash pickup locations configured. Contact admin to seed locations via MoneyGram.");
    \u0275\u0275elementEnd()();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275template(2, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_2_Template, 28, 3, "div", 179)(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_3_Template, 12, 3, "div", 188)(4, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_4_Template, 12, 0, "button", 189)(5, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_5_Template, 9, 3, "div", 138)(6, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Conditional_6_Template, 5, 0, "div", 190);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    const csName_r72 = \u0275\u0275storeLet(ctx_r1.transactionPayoutDetails.bankName || (ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.bankName));
    \u0275\u0275advance();
    \u0275\u0275storeLet(ctx_r1.transactionPayoutDetails.bankCode || (ctx_r1.selectedSavedDetail == null ? null : ctx_r1.selectedSavedDetail.bankCode));
    \u0275\u0275advance();
    \u0275\u0275conditional(csName_r72 && !ctx_r1.showCashSwapPanel ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCashSavedPanel && ctx_r1.savedPayoutDetails.length > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!csName_r72 && !ctx_r1.showCashSwapPanel && ctx_r1.payoutCashLocations.length > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCashSwapPanel || !csName_r72 && ctx_r1.payoutCashLocations.length > 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!csName_r72 && ctx_r1.payoutCashLocations.length === 0 && ctx_r1.savedPayoutDetails.length === 0 ? 6 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_0_Template, 11, 2, "div", 179)(1, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Conditional_1_Template, 7, 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r1.isMgCashTransfer() ? 0 : 1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_14_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r75 = ctx.$implicit;
    \u0275\u0275property("value", loc_r75.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r75.locationName);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 239)(1, "label", 167);
    \u0275\u0275text(2, "Provider ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 169);
    \u0275\u0275listener("change", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_14_Conditional_3_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r74);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onLocationSelectedTxn(ctx_r1.payoutLocations[$event.target.selectedIndex - 1]));
    });
    \u0275\u0275elementStart(6, "option", 96);
    \u0275\u0275text(7, "Select wallet provider");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_14_Conditional_3_For_9_Template, 2, 2, "option", 97, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.payoutLocations);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 240);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 242);
    \u0275\u0275element(2, "path", 235);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No wallet providers configured for this payout route. ");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134)(1, "p", 238);
    \u0275\u0275text(2, "Mobile Wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_14_Conditional_3_Template, 10, 0, "div", 239)(4, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_14_Conditional_4_Template, 4, 0, "p", 240);
    \u0275\u0275elementStart(5, "div")(6, "label", 167);
    \u0275\u0275text(7, "Wallet Number ");
    \u0275\u0275elementStart(8, "span", 90);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 241);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_14_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r73);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.transactionPayoutDetails.accountNumber, $event) || (ctx_r1.transactionPayoutDetails.accountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.payoutLocations.length > 0 ? 3 : 4);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transactionPayoutDetails.accountNumber);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79)(4, "p", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 133);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.clearReceiver());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 46);
    \u0275\u0275element(10, "path", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_11_Template, 18, 13, "div", 83)(12, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_12_Template, 8, 7)(13, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_13_Template, 2, 1)(14, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Conditional_14_Template, 11, 2, "div", 134);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.store.selectedReceiver().fullName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.store.selectedReceiver().fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.store.selectedReceiver().phone, " \xB7 ", ctx_r1.store.selectedReceiver().country, "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.store.missingReceiverFields().length > 0 && ctx_r1.showMissingReceiverForm ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBankTransfer() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCashTransfer() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isWalletTransfer() ? 14 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_5_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r77 = ctx.$implicit;
    \u0275\u0275property("value", m_r77.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r77.name);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 131)(1, "p", 243);
    \u0275\u0275text(2, "Select Payment Method ");
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 244);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_5_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r76);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedPaymentMethodId, $event) || (ctx_r1.selectedPaymentMethodId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_5_Template_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r76);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onPaymentMethodChange());
    });
    \u0275\u0275elementStart(6, "option", 97);
    \u0275\u0275text(7, "Select method");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_5_For_9_Template, 2, 2, "option", 97, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedPaymentMethodId);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.paymentMethods);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 110);
    \u0275\u0275listener("mousedown", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_4_For_2_Template_button_mousedown_0_listener() {
      const r_r80 = \u0275\u0275restoreView(_r79).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.selectReceiver(r_r80));
    });
    \u0275\u0275elementStart(1, "div", 247);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 112);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 113);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r80 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r80.fullName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r80.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r80.phone, " \xB7 ", r_r80.country, "");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275repeaterCreate(1, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_4_For_2_Template, 8, 4, "button", 109, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredReceivers);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r82 = ctx.$implicit;
    \u0275\u0275property("value", c_r82.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r82.name);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_39_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 117);
    \u0275\u0275text(2, " Gender ");
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_39_Conditional_3_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 121)(5, "option", 96);
    \u0275\u0275text(6, "Select gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 98);
    \u0275\u0275text(8, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 99);
    \u0275\u0275text(10, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 100);
    \u0275\u0275text(12, "Other");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isReceiverFieldRequired("gender") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.gender);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_40_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_40_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r83 = ctx.$implicit;
    \u0275\u0275property("value", c_r83.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r83.name);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 117);
    \u0275\u0275text(2, " Nationality ");
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_40_Conditional_3_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 121)(5, "option", 96);
    \u0275\u0275text(6, "Select nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_40_For_8_Template, 2, 2, "option", 97, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isReceiverFieldRequired("nationality") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.nationality);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.countries);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_41_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 117);
    \u0275\u0275text(2, " Date of Birth ");
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_41_Conditional_3_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isReceiverFieldRequired("dateOfBirth") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.dateOfBirth);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_42_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 117);
    \u0275\u0275text(2, " Occupation ");
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_42_Conditional_3_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 252);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isReceiverFieldRequired("occupation") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.occupation);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_43_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_43_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const t_r84 = ctx.$implicit;
    \u0275\u0275property("value", t_r84.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_17_0 = t_r84.label) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : t_r84.value);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 117);
    \u0275\u0275text(2, " ID Type ");
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_43_Conditional_3_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 121)(5, "option", 96);
    \u0275\u0275text(6, "Select ID type");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_43_For_8_Template, 2, 2, "option", 97, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isReceiverFieldRequired("idDocumentType") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.idDocumentType);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.idTypes);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_44_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 117);
    \u0275\u0275text(2, " ID Number ");
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_44_Conditional_3_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 253);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isReceiverFieldRequired("idDocumentNumber") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.idDocumentNumber);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "p", 248);
    \u0275\u0275text(2, "New Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 115)(4, "div", 116)(5, "label", 117);
    \u0275\u0275text(6, "Full Name ");
    \u0275\u0275elementStart(7, "span", 90);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "input", 249);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "label", 117);
    \u0275\u0275text(12, "Phone ");
    \u0275\u0275elementStart(13, "span", 90);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 250);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 117);
    \u0275\u0275text(18, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 121)(20, "option", 96);
    \u0275\u0275text(21, "Select country");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(22, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_For_23_Template, 2, 2, "option", 97, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 116)(25, "label", 117);
    \u0275\u0275text(26, " Address ");
    \u0275\u0275template(27, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_27_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "label", 117);
    \u0275\u0275text(31, " City ");
    \u0275\u0275template(32, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_32_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div")(35, "label", 117);
    \u0275\u0275text(36, " Postal Code ");
    \u0275\u0275template(37, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_37_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_39_Template, 13, 2, "div")(40, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_40_Template, 9, 2, "div")(41, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_41_Template, 5, 2, "div")(42, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_42_Template, 5, 2, "div")(43, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_43_Template, 9, 2, "div")(44, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Conditional_44_Template, 5, 2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 251);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveNewReceiver());
    });
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.fullName);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.phone);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.country);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.countries);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.isReceiverFieldRequired("address") ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.address);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isReceiverFieldRequired("city") ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.city);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isReceiverFieldRequired("postalCode") ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.receiverForm.controls.postalCode);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isReceiverFieldVisible("gender") ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isReceiverFieldVisible("nationality") ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isReceiverFieldVisible("dateOfBirth") ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isReceiverFieldVisible("occupation") ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isReceiverFieldVisible("idDocumentType") ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isReceiverFieldVisible("idDocumentNumber") ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.savingReceiver);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingReceiver ? "Creating..." : "Create Receiver", " ");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "input", 245);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r78);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.receiverSearch, $event) || (ctx_r1.receiverSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r78);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.filterReceivers());
    })("focus", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Template_input_focus_1_listener() {
      \u0275\u0275restoreView(_r78);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.filterReceivers());
    })("blur", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r78);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hideReceiverDropdown());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 104);
    \u0275\u0275element(3, "path", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_4_Template, 3, 0, "div", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 246);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r78);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.showCreateReceiver = !ctx_r1.showCreateReceiver);
    });
    \u0275\u0275text(6, " + Create New Receiver ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Conditional_7_Template, 47, 18, "div", 108);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.receiverSearch);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showReceiverDropdown && ctx_r1.filteredReceivers.length > 0 ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showCreateReceiver ? 7 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Payout account required \u2014 select a saved account or enter bank details. ");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cash pickup location required \u2014 select a payout location. ");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Wallet number required \u2014 select a saved account or enter wallet number. ");
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 242);
    \u0275\u0275element(2, "path", 235);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_7_Conditional_3_Template, 1, 0)(4, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_7_Conditional_4_Template, 1, 0)(5, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_7_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isBankTransfer() ? 3 : ctx_r1.isCashTransfer() ? 4 : ctx_r1.isWalletTransfer() ? 5 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.store.setSubStep("customer", "backward"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 130);
    \u0275\u0275element(2, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Back to customer ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_4_Template, 15, 8)(5, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_5_Template, 10, 2, "div", 131)(6, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_6_Template, 8, 3)(7, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Conditional_7_Template, 6, 1, "div", 132);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 74);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.proceedToCompliance());
    });
    \u0275\u0275text(9, " Continue to Compliance \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.store.selectedReceiver() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.store.paymentMethodName() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.store.selectedReceiver() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.selectedReceiver() && ctx_r1.store.missingReceiverFields().length === 0 && !ctx_r1.hasValidPayoutAccount() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.canProceed() ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed");
    \u0275\u0275property("disabled", !ctx_r1.canProceed());
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 64)(2, "button", 65)(3, "span", 66);
    \u0275\u0275template(4, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_4_Template, 3, 0, "span", 67)(5, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_5_Template, 2, 2, "span", 68);
    \u0275\u0275text(6, " Customer ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_7_Template, 1, 0, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 65)(9, "span", 66);
    \u0275\u0275template(10, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_10_Template, 3, 0, "span", 67)(11, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_11_Template, 2, 2, "span", 68);
    \u0275\u0275text(12, " Receiver ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_13_Template, 1, 0, "div", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 70);
    \u0275\u0275template(15, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_15_Template, 5, 6)(16, ThirdPartySendComponent_Conditional_3_Conditional_11_Conditional_16_Template, 10, 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.store.subStep() === "customer" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 dark:text-gray-500");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.store.selectedCustomer() && ctx_r1.store.missingCustomerFields().length === 0 ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.store.subStep() === "customer" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.store.subStep() === "receiver" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 dark:text-gray-500");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.store.selectedReceiver() && ctx_r1.store.missingReceiverFields().length === 0 ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.store.subStep() === "receiver" ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.store.subStep() === "customer" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.subStep() === "receiver" ? 16 : -1);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_12_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r86 = ctx.$implicit;
    \u0275\u0275property("value", opt_r86);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r86);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_12_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r87 = ctx.$implicit;
    \u0275\u0275property("value", opt_r87);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r87);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_12_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r88 = ctx.$implicit;
    \u0275\u0275property("value", opt_r88);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r88);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "h2", 51);
    \u0275\u0275text(2, "Compliance Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 254)(4, "div")(5, "label", 255);
    \u0275\u0275text(6, "Purpose of Transfer ");
    \u0275\u0275elementStart(7, "span", 90);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "select", 256);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_12_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r85);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.purpose, $event) || (ctx_r1.purpose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 96);
    \u0275\u0275text(11, "Select purpose...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, ThirdPartySendComponent_Conditional_3_Conditional_12_For_13_Template, 2, 2, "option", 97, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "label", 255);
    \u0275\u0275text(16, "Source of Funds ");
    \u0275\u0275elementStart(17, "span", 90);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "select", 256);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_12_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r85);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.sourceOfFunds, $event) || (ctx_r1.sourceOfFunds = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 96);
    \u0275\u0275text(21, "Select source...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(22, ThirdPartySendComponent_Conditional_3_Conditional_12_For_23_Template, 2, 2, "option", 97, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "label", 255);
    \u0275\u0275text(26, "Relationship to Receiver ");
    \u0275\u0275elementStart(27, "span", 90);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "select", 256);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_3_Conditional_12_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r85);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.relationship, $event) || (ctx_r1.relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 96);
    \u0275\u0275text(31, "Select relationship...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(32, ThirdPartySendComponent_Conditional_3_Conditional_12_For_33_Template, 2, 2, "option", 97, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "button", 257);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_12_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r85);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.proceedToReview());
    });
    \u0275\u0275text(35, " Review & Confirm \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.purpose);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.purposeOptions);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sourceOfFunds);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sourceOptions);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.relationship);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.relationshipOptions);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.purpose && ctx_r1.sourceOfFunds && ctx_r1.relationship ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed");
    \u0275\u0275property("disabled", !ctx_r1.purpose || !ctx_r1.sourceOfFunds || !ctx_r1.relationship);
  }
}
function ThirdPartySendComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "h2", 51);
    \u0275\u0275text(2, "Review Transaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 258)(4, "div", 259)(5, "span", 26);
    \u0275\u0275text(6, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 259)(10, "span", 26);
    \u0275\u0275text(11, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 259)(15, "span", 26);
    \u0275\u0275text(16, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 260);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 259)(21, "span", 26);
    \u0275\u0275text(22, "Total Payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 260);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 259)(27, "span", 26);
    \u0275\u0275text(28, "Receiver Gets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 261);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 262)(33, "span", 26);
    \u0275\u0275text(34, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 27);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "button", 263);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Conditional_13_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r89);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPinDialog());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.store.selectedCustomer()) == null ? null : tmp_3_0.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.store.selectedReceiver()) == null ? null : tmp_4_0.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(19, 12, ctx_r1.store.sendAmount(), "1.2-2"), " ", ctx_r1.store.sendCurrency(), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(25, 15, ctx_r1.store.totalPayable(), "1.2-2"), " ", ctx_r1.store.sendCurrency(), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(31, 18, ctx_r1.store.receiveAmount(), "1.2-2"), " ", ctx_r1.store.receiveCurrency(), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.purpose);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.store.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.store.submitting() ? "Submitting..." : "Confirm & Send", " ");
  }
}
function ThirdPartySendComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "button", 35);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 36);
    \u0275\u0275element(3, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div")(5, "h1", 38);
    \u0275\u0275text(6, "Send Money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275repeaterCreate(8, ThirdPartySendComponent_Conditional_3_For_9_Template, 8, 13, "div", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ThirdPartySendComponent_Conditional_3_Conditional_10_Template, 40, 28, "div", 41)(11, ThirdPartySendComponent_Conditional_3_Conditional_11_Template, 17, 11, "div", 42)(12, ThirdPartySendComponent_Conditional_3_Conditional_12_Template, 36, 7, "div", 41)(13, ThirdPartySendComponent_Conditional_3_Conditional_13_Template, 39, 21, "div", 41);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.store.currentStep() === 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.currentStep() === 1 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.currentStep() === 2 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.store.currentStep() === 3 && !ctx_r1.store.successResult() ? 13 : -1);
  }
}
function ThirdPartySendComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 272);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_4_Conditional_7_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r91);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pinConfirm, $event) || (ctx_r1.pinConfirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pinConfirm);
  }
}
function ThirdPartySendComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 269);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pinError);
  }
}
function ThirdPartySendComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 264)(2, "h3", 265);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 266);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 267);
    \u0275\u0275twoWayListener("ngModelChange", function ThirdPartySendComponent_Conditional_4_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r90);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pinInput, $event) || (ctx_r1.pinInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ThirdPartySendComponent_Conditional_4_Conditional_7_Template, 1, 1, "input", 268)(8, ThirdPartySendComponent_Conditional_4_Conditional_8_Template, 2, 1, "p", 269);
    \u0275\u0275elementStart(9, "div", 31)(10, "button", 270);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_4_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r90);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPinDialog = false);
    });
    \u0275\u0275text(11, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 271);
    \u0275\u0275listener("click", function ThirdPartySendComponent_Conditional_4_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r90);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitPin());
    });
    \u0275\u0275text(13, "Confirm");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hasPin ? "Enter Transaction PIN" : "Set Transaction PIN", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hasPin ? "Enter your 4-digit transaction PIN to confirm." : "Set a PIN to secure your transactions.", " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pinInput);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hasPin ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pinError ? 8 : -1);
  }
}
var ThirdPartySendComponent = class _ThirdPartySendComponent {
  constructor() {
    this.store = inject(ThirdPartySendStore);
    this.api = inject(ApiService);
    this.auth = inject(AuthStateService);
    this.notify = inject(NotificationService);
    this.appSettings = inject(AppSettingsService);
    this.router = inject(Router);
    this.destroy$ = new Subject();
    this.customers = [];
    this.filteredCustomers = [];
    this.customerSearch = "";
    this.showCustomerDropdown = false;
    this.receivers = [];
    this.filteredReceivers = [];
    this.receiverSearch = "";
    this.showReceiverDropdown = false;
    this.showMissingCustomerForm = false;
    this.showMissingReceiverForm = false;
    this.missingCustomerData = {};
    this.missingReceiverData = {};
    this.savingMissingCustomer = false;
    this.savingMissingReceiver = false;
    this.countries = [];
    this.idTypes = [];
    this.paymentMethods = [];
    this.selectedPaymentMethodId = null;
    this.payoutBanks = [];
    this.payoutCashLocations = [];
    this.payoutLocations = [];
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
    this.selectedSavedDetail = null;
    this.savedPayoutDetails = [];
    this.showPayoutSwapPanel = false;
    this.showCashSwapPanel = false;
    this.showCashSavedPanel = false;
    this.showNewAccountForm = false;
    this.showBranchPopup = false;
    this.allBranches = [];
    this.filteredBranches = [];
    this.branchSearch = "";
    this.branchBankName = "";
    this.branchContext = "form";
    this.purpose = "";
    this.sourceOfFunds = "";
    this.relationship = "";
    this.purposeOptions = ["Family Support", "Education", "Medical", "Business", "Savings", "Other"];
    this.sourceOptions = ["Salary", "Savings", "Business Income", "Pension", "Other"];
    this.relationshipOptions = ["Spouse", "Parent", "Child", "Sibling", "Friend", "Self", "Other"];
    this.showPinDialog = false;
    this.hasPin = false;
    this.pinInput = "";
    this.pinConfirm = "";
    this.pinError = "";
    this.showCreateCustomer = false;
    this.customerForm = new FormGroup({
      fullName: new FormControl(""),
      phone: new FormControl(""),
      email: new FormControl(""),
      nationality: new FormControl(""),
      country: new FormControl(""),
      idDocumentType: new FormControl(""),
      idDocumentNumber: new FormControl(""),
      gender: new FormControl(""),
      dateOfBirth: new FormControl(""),
      address: new FormControl(""),
      city: new FormControl(""),
      postalCode: new FormControl(""),
      occupation: new FormControl("")
    });
    this.customerFormErrors = {};
    this.savingCustomer = false;
    this.showCreateReceiver = false;
    this.receiverForm = new FormGroup({
      fullName: new FormControl(""),
      phone: new FormControl(""),
      email: new FormControl(""),
      country: new FormControl(""),
      city: new FormControl(""),
      relationship: new FormControl(""),
      bankName: new FormControl(""),
      bankCode: new FormControl(""),
      accountNumber: new FormControl(""),
      branchName: new FormControl(""),
      branchCode: new FormControl(""),
      bankId: new FormControl(null),
      branchId: new FormControl(null),
      gender: new FormControl(""),
      address: new FormControl(""),
      postalCode: new FormControl(""),
      nationality: new FormControl(""),
      occupation: new FormControl(""),
      dateOfBirth: new FormControl(""),
      idDocumentType: new FormControl(""),
      idDocumentNumber: new FormControl("")
    });
    this.receiverFormErrors = {};
    this.savingReceiver = false;
  }
  ngOnInit() {
    const nav = this.router.getCurrentNavigation()?.extras?.state ?? (history.state ?? {});
    if (!nav?.partner) {
      this.router.navigate(["/agent/send"]);
      return;
    }
    this.store.initFromNavState({
      sendAmount: nav.sendAmount,
      receiveAmount: nav.receiveAmount,
      exchangeRate: nav.exchangeRate,
      serviceCharge: nav.serviceCharge,
      totalPayable: nav.totalPayable,
      sendCurrency: nav.sendCurrency,
      receiveCurrency: nav.receiveCurrency,
      receiverCountry: nav.receiverCountry,
      receiverCountryIso2: nav.receiverCountryIso2 ?? "",
      receiverCountryIso3: nav.receiverCountryIso3 ?? "",
      senderCountry: nav.senderCountry ?? "",
      quoteId: nav.quoteId,
      partner: nav.partner,
      paymentMethodId: nav.paymentMethodId,
      paymentMethodName: nav.paymentMethodName,
      payoutModeId: nav.payoutModeId,
      serviceOptionCode: nav.serviceOptionCode ?? null,
      serviceOptionRoutingCode: nav.serviceOptionRoutingCode ?? null,
      payoutType: nav.payoutType ?? null,
      fieldMappings: nav.fieldMappings ?? []
    });
    this.loadData(nav.partner.payoutAgentId);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ── Data loading ──────────────────────────────────────────────────────────
  loadData(payoutPartnerId) {
    const serviceOptionCode = this.store.serviceOptionCode() ?? void 0;
    const country = this.store.receiverCountryIso3() || this.store.receiverCountry() || void 0;
    this.api.getAgentFieldMappings(payoutPartnerId, serviceOptionCode, country).pipe(takeUntil(this.destroy$)).subscribe((r) => {
      if (r.success)
        this.store.setFieldMappings(r.data ?? []);
    });
    this.api.getCountries().pipe(takeUntil(this.destroy$)).subscribe((r) => {
      if (r.success)
        this.countries = r.data ?? [];
    });
    this.api.getReferenceSetupFields("IdType").pipe(takeUntil(this.destroy$)).subscribe((r) => {
      if (r.success)
        this.idTypes = r.data ?? [];
    });
    this.api.getAgentPaymentMethods().pipe(takeUntil(this.destroy$)).subscribe((r) => {
      if (r.success)
        this.paymentMethods = r.data ?? [];
    });
    this.api.getAgentCustomers().pipe(takeUntil(this.destroy$)).subscribe((r) => {
      if (r.success) {
        this.customers = r.data ?? [];
        this.filteredCustomers = this.customers;
      }
    });
    this.loadPayoutInfrastructure(payoutPartnerId, this.store.paymentMethodName());
  }
  onPaymentMethodChange() {
    const pm = this.paymentMethods.find((m) => m.id === Number(this.selectedPaymentMethodId));
    if (!pm)
      return;
    this.store.initFromNavState({ paymentMethodId: pm.id, paymentMethodName: pm.name });
    const agentId = this.store.partner()?.payoutAgentId;
    if (agentId)
      this.loadPayoutInfrastructure(agentId, pm.name);
    const rv = this.store.selectedReceiver();
    if (rv)
      this.loadReceiverPayoutDetails(rv);
  }
  loadPayoutInfrastructure(agentId, _methodName) {
    this.payoutBanks = [];
    this.payoutCashLocations = [];
    this.payoutLocations = [];
    if (this.isCashTransfer() && !this.isMgCashTransfer()) {
      this.api.getAgentCashLocations(agentId).pipe(takeUntil(this.destroy$)).subscribe((r) => {
        if (r.success)
          this.payoutCashLocations = r.data ?? [];
      });
    } else if (this.isWalletTransfer()) {
      this.api.getAgentWalletLocations(agentId).pipe(takeUntil(this.destroy$)).subscribe((r) => {
        if (r.success)
          this.payoutLocations = r.data ?? [];
      });
    } else {
      this.api.getAgentBanksForPayout(agentId, this.store.receiverCountryIso3() || this.store.receiverCountry() || void 0).pipe(takeUntil(this.destroy$)).subscribe((r) => {
        if (r.success)
          this.payoutBanks = r.data ?? [];
      });
    }
  }
  // ── Customer search / select ──────────────────────────────────────────────
  filterCustomers() {
    const q = this.customerSearch.toLowerCase();
    this.filteredCustomers = q ? this.customers.filter((c) => c.fullName.toLowerCase().includes(q) || (c.phone ?? "").includes(q)) : this.customers;
    this.showCustomerDropdown = true;
  }
  hideCustomerDropdown() {
    setTimeout(() => {
      this.showCustomerDropdown = false;
    }, 200);
  }
  selectCustomer(c) {
    this.store.setSelectedCustomer(c);
    this.customerSearch = c.fullName;
    this.showCustomerDropdown = false;
    this.showCreateCustomer = false;
    if (this.appSettings.kycEnabled && !c.isKycVerified)
      this.store.setKycWarning("Customer KYC not verified. Proceed with caution.");
    else
      this.store.setKycWarning("");
    this.store.setDobWarning("");
    if (c.dateOfBirth) {
      const age = Math.floor((Date.now() - new Date(c.dateOfBirth).getTime()) / 315576e5);
      if (age < (this.appSettings.minimumAge ?? 18))
        this.store.setDobWarning(`Customer is under ${this.appSettings.minimumAge ?? 18} years old.`);
    }
    this.checkMissingCustomerFields(c);
    this.api.getAgentReceiversByCustomer(c.id).pipe(takeUntil(this.destroy$)).subscribe((r) => {
      if (r.success) {
        this.receivers = r.data ?? [];
        this.filteredReceivers = this.receivers;
      }
    });
  }
  clearCustomer() {
    this.store.setSelectedCustomer(null);
    this.store.setSelectedReceiver(null);
    this.store.setKycWarning("");
    this.store.setDobWarning("");
    this.customerSearch = "";
    this.showMissingCustomerForm = false;
    this.receivers = [];
  }
  // ── Receiver search / select ──────────────────────────────────────────────
  filterReceivers() {
    const q = this.receiverSearch.toLowerCase();
    this.filteredReceivers = q ? this.receivers.filter((r) => r.fullName.toLowerCase().includes(q) || (r.phone ?? "").includes(q)) : this.receivers;
    this.showReceiverDropdown = true;
  }
  hideReceiverDropdown() {
    setTimeout(() => {
      this.showReceiverDropdown = false;
    }, 200);
  }
  selectReceiver(r) {
    this.store.setSelectedReceiver(r);
    this.receiverSearch = r.fullName;
    this.showReceiverDropdown = false;
    this.showCreateReceiver = false;
    this.checkMissingReceiverFields(r);
    this.loadReceiverPayoutDetails(r);
  }
  clearReceiver() {
    this.store.setSelectedReceiver(null);
    this.receiverSearch = "";
    this.showMissingReceiverForm = false;
    this.savedPayoutDetails = [];
    this.selectedSavedDetail = null;
    this.showPayoutSwapPanel = false;
    this.showCashSwapPanel = false;
    this.showCashSavedPanel = false;
    this.showNewAccountForm = false;
    this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
  }
  loadReceiverPayoutDetails(r) {
    const isCash = this.isCashTransfer();
    const type = this.isBankTransfer() ? "bank" : isCash ? "cash" : "wallet";
    const agentId = this.store.partner()?.payoutAgentId ?? void 0;
    const fallback = () => {
      this.savedPayoutDetails = [];
      this.selectedSavedDetail = null;
      this.transactionPayoutDetails = { bankName: null, bankCode: null, bankId: null, accountNumber: null, branchName: null, branchCode: null, branchId: null };
      if (isCash && !this.isMgCashTransfer()) {
        this.showCashSwapPanel = true;
        this.showNewAccountForm = false;
      } else {
        this.showNewAccountForm = true;
      }
    };
    this.api.getReceiverPaymentDetails(r.id, type, this.store.receiverCountry(), agentId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (!res?.success) {
          fallback();
          return;
        }
        this.savedPayoutDetails = res.data ?? [];
        if (this.savedPayoutDetails.length > 0) {
          const first = this.savedPayoutDetails[0];
          this.selectedSavedDetail = first;
          this.transactionPayoutDetails = {
            bankName: first.bankName ?? null,
            bankCode: first.bankCode ?? null,
            bankId: first.bankId ?? null,
            accountNumber: first.accountNumber ?? null,
            branchName: first.branchName ?? null,
            branchCode: first.branchCode ?? null,
            branchId: first.branchId ?? null
          };
          this.showNewAccountForm = false;
          this.showCashSwapPanel = false;
          if (this.isBankTransfer() && !(first.accountNumber && (first.bankId || first.bankName))) {
            this.showPayoutSwapPanel = true;
          }
        } else {
          fallback();
        }
      },
      error: () => fallback()
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
  // ── Missing fields ────────────────────────────────────────────────────────
  checkMissingCustomerFields(c) {
    const data = c;
    const missing = this.store.customerMappings().filter((m) => {
      const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return m.isRequired && !data[key];
    });
    this.store.setMissingCustomerFields(missing);
    if (missing.length > 0) {
      this.missingCustomerData = {};
      this.showMissingCustomerForm = true;
    } else
      this.showMissingCustomerForm = false;
  }
  checkMissingReceiverFields(r) {
    const data = r;
    const missing = this.store.receiverMappings().filter((m) => {
      const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return m.isRequired && !data[key];
    });
    this.store.setMissingReceiverFields(missing);
    if (missing.length > 0) {
      this.missingReceiverData = {};
      this.showMissingReceiverForm = true;
    } else
      this.showMissingReceiverForm = false;
  }
  saveMissingCustomerFields() {
    const c = this.store.selectedCustomer();
    if (!c)
      return;
    if (!this.store.missingCustomerFields().every((m) => {
      const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return !!this.missingCustomerData[key];
    })) {
      this.notify.error("Please fill all required fields.");
      return;
    }
    const addr = (this.missingCustomerData["address"] ?? "").trim();
    if (addr && addr.length <= 5) {
      this.notify.error("Address must be more than 5 characters.");
      return;
    }
    const payload = {};
    for (const [k, v] of Object.entries(this.missingCustomerData))
      payload[k.charAt(0).toUpperCase() + k.slice(1)] = v;
    this.savingMissingCustomer = true;
    this.api.patchCustomerFields(c.id, payload).subscribe({
      next: (r) => {
        this.savingMissingCustomer = false;
        if (r.success) {
          const merged = __spreadValues(__spreadValues({}, c), this.missingCustomerData);
          this.store.setSelectedCustomer(merged);
          this.store.setDobWarning("");
          if (merged.dateOfBirth) {
            const age = Math.floor((Date.now() - new Date(merged.dateOfBirth).getTime()) / 315576e5);
            if (age < (this.appSettings.minimumAge ?? 18))
              this.store.setDobWarning(`Customer is under ${this.appSettings.minimumAge ?? 18} years old.`);
          }
          this.store.setMissingCustomerFields([]);
          this.showMissingCustomerForm = false;
          this.goToCustomerSubStep();
        } else
          this.notify.error(r.message ?? "Update failed.");
      },
      error: () => {
        this.savingMissingCustomer = false;
        this.notify.error("Update failed.");
      }
    });
  }
  saveMissingReceiverFields() {
    const rv = this.store.selectedReceiver();
    if (!rv)
      return;
    if (!this.store.missingReceiverFields().every((m) => {
      const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return !!this.missingReceiverData[key];
    })) {
      this.notify.error("Please fill all required fields.");
      return;
    }
    const payload = {};
    for (const [k, v] of Object.entries(this.missingReceiverData))
      payload[k.charAt(0).toUpperCase() + k.slice(1)] = v;
    this.savingMissingReceiver = true;
    this.api.patchReceiverFields(rv.id, payload).subscribe({
      next: (r) => {
        this.savingMissingReceiver = false;
        if (r.success) {
          this.store.setSelectedReceiver(__spreadValues(__spreadValues({}, rv), this.missingReceiverData));
          this.store.setMissingReceiverFields([]);
          this.showMissingReceiverForm = false;
        } else
          this.notify.error(r.message ?? "Update failed.");
      },
      error: () => {
        this.savingMissingReceiver = false;
        this.notify.error("Update failed.");
      }
    });
  }
  static {
    this.PHONE_REGEX = /^\+?[\d\s\-().]+$/;
  }
  // ── New customer create ───────────────────────────────────────────────────
  saveNewCustomer() {
    const v = this.customerForm.value;
    if (!v.fullName || !v.phone || !v.nationality || !v.country || !v.idDocumentType || !v.idDocumentNumber) {
      this.notify.error("Please fill all required fields.");
      return;
    }
    if (v.phone.trim().length < 7) {
      this.notify.error("Phone must be at least 7 digits.");
      return;
    }
    if (!_ThirdPartySendComponent.PHONE_REGEX.test(v.phone.trim())) {
      this.notify.error("Phone must contain only digits, +, spaces, - or ().");
      return;
    }
    if (v.address && v.address.trim().length <= 5) {
      this.notify.error("Address must be more than 5 characters.");
      return;
    }
    const missingMapped = this.store.customerMappings().filter((m) => {
      const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return m.isRequired && !v[key];
    });
    if (missingMapped.length > 0) {
      this.notify.error(`Required: ${missingMapped.map((m) => m.ourColumn).join(", ")}`);
      return;
    }
    this.savingCustomer = true;
    this.api.createAgentCustomer(v).subscribe({
      next: (r) => {
        this.savingCustomer = false;
        if (r.success) {
          this.customers = [r.data, ...this.customers];
          this.selectCustomer(r.data);
          this.showCreateCustomer = false;
          this.customerForm.reset();
        } else
          this.notify.error(r.message ?? "Failed to create customer.");
      },
      error: () => {
        this.savingCustomer = false;
        this.notify.error("Failed to create customer.");
      }
    });
  }
  // ── New receiver create ───────────────────────────────────────────────────
  saveNewReceiver() {
    const v = this.receiverForm.value;
    const c = this.store.selectedCustomer();
    if (!v.fullName || !v.phone || !c) {
      this.notify.error("Please fill all required fields.");
      return;
    }
    if (v.phone.trim().length < 7) {
      this.notify.error("Phone must be at least 7 digits.");
      return;
    }
    if (!_ThirdPartySendComponent.PHONE_REGEX.test(v.phone.trim())) {
      this.notify.error("Phone must contain only digits, +, spaces, - or ().");
      return;
    }
    const missingMapped = this.store.receiverMappings().filter((m) => {
      const key = m.ourColumn.charAt(0).toLowerCase() + m.ourColumn.slice(1);
      return m.isRequired && !v[key];
    });
    if (missingMapped.length > 0) {
      this.notify.error(`Required: ${missingMapped.map((m) => m.ourColumn).join(", ")}`);
      return;
    }
    this.savingReceiver = true;
    this.api.createAgentReceiver(__spreadProps(__spreadValues({}, v), { customerId: c.id })).subscribe({
      next: (r) => {
        this.savingReceiver = false;
        if (r.success) {
          this.receivers = [r.data, ...this.receivers];
          this.selectReceiver(r.data);
          this.showCreateReceiver = false;
          this.receiverForm.reset();
        } else
          this.notify.error(r.message ?? "Failed to create receiver.");
      },
      error: () => {
        this.savingReceiver = false;
        this.notify.error("Failed to create receiver.");
      }
    });
  }
  // ── Branch popup ──────────────────────────────────────────────────────────
  selectBranchTxn(branch) {
    this.transactionPayoutDetails = __spreadProps(__spreadValues({}, this.transactionPayoutDetails), { branchName: branch.branchName, branchCode: branch.branchCode ?? null, branchId: branch.id });
    this.showBranchPopup = false;
  }
  selectBranch(branch) {
    this.receiverForm.patchValue({ branchName: branch.branchName, branchCode: branch.branchCode ?? "", branchId: branch.id });
    this.showBranchPopup = false;
  }
  filterBranches() {
    const q = this.branchSearch.toLowerCase();
    this.filteredBranches = q ? this.allBranches.filter((b) => b.branchName.toLowerCase().includes(q) || (b.branchCode ?? "").toLowerCase().includes(q)) : this.allBranches;
  }
  // ── Step navigation ───────────────────────────────────────────────────────
  goToCustomerSubStep() {
    this.store.setSubStep("receiver");
  }
  proceedToCompliance() {
    if (!this.store.canProceedStep1())
      return;
    if (!this.hasValidPayoutAccount()) {
      this.notify.error("Please select or add a payout account before continuing.");
      return;
    }
    this.store.nextStep();
  }
  proceedToReview() {
    this.store.nextStep();
  }
  goBack() {
    if (this.store.currentStep() === 0) {
      this.router.navigate(["/agent/send"]);
      return;
    }
    this.store.prevStep();
  }
  goToStep(step) {
    this.store.goToStep(step);
  }
  // ── PIN + Submit ──────────────────────────────────────────────────────────
  openPinDialog() {
    this.pinInput = "";
    this.pinConfirm = "";
    this.pinError = "";
    this.api.getTransactionPinStatus().subscribe((r) => {
      this.hasPin = r?.data ?? false;
      this.showPinDialog = true;
    });
  }
  submitPin() {
    this.pinError = "";
    if (!this.pinInput) {
      this.pinError = "Enter PIN.";
      return;
    }
    if (!this.hasPin) {
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
    const partner = this.store.partner();
    const sd = this.selectedSavedDetail;
    const pd = this.transactionPayoutDetails;
    const effectiveBankId = sd?.bankId || pd.bankId || rv.bankId || null;
    const resolvedBankCode = sd?.bankCode || pd.bankCode || rv.bankCode || (effectiveBankId ? this.payoutBanks.find((b) => b.id === effectiveBankId)?.bankCode || null : null) || null;
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
      receiverBankCode: resolvedBankCode,
      receiverAccountNumber: sd?.accountNumber ?? pd.accountNumber ?? rv.accountNumber,
      receiverBranchName: sd?.branchName ?? pd.branchName ?? rv.branchName,
      receiverBranchCode: sd?.branchCode ?? pd.branchCode ?? rv.branchCode,
      receiverBankId: sd?.bankId ?? pd.bankId ?? rv.bankId,
      receiverBranchId: sd?.branchId ?? pd.branchId ?? rv.branchId,
      sendAmount: this.store.sendAmount(),
      exchangeRate: this.store.exchangeRate(),
      receiveAmount: this.store.receiveAmount(),
      sendCurrency: this.store.sendCurrency(),
      receiveCurrency: this.store.receiveCurrency(),
      receiverCountryIso2: this.store.receiverCountryIso2(),
      receiverCountryIso3: this.store.receiverCountryIso3(),
      paymentMethod: this.resolvePaymentMethodEnum(this.store.paymentMethodName()),
      paymentMethodName: this.store.paymentMethodName(),
      payoutMethod: this.resolvePaymentMethodEnum(this.store.paymentMethodName()),
      payoutMethodName: this.store.paymentMethodName(),
      payoutPartnerId: partner.payoutAgentId,
      customerId: c.id,
      receiverId: rv.id,
      purpose: this.purpose,
      sourceOfFunds: this.sourceOfFunds,
      relationship: this.relationship,
      quoteId: this.store.quoteId(),
      serviceOptionCode: this.store.serviceOptionCode() ?? null,
      serviceOptionRoutingCode: this.store.serviceOptionRoutingCode() ?? null
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
  // ── Payout location selection handlers ───────────────────────────────────
  onPayoutBankSelectedTxn(bank) {
    if (!bank)
      return;
    this.transactionPayoutDetails = __spreadProps(__spreadValues({}, this.transactionPayoutDetails), {
      bankName: bank.bankName,
      bankCode: bank.bankCode ?? null,
      bankId: bank.id,
      branchName: null,
      branchCode: null,
      branchId: null
    });
    this.allBranches = bank.branches ?? [];
    this.filteredBranches = bank.branches ?? [];
    if (bank.branches?.length) {
      this.branchBankName = bank.bankName;
      this.branchContext = "txn";
      this.showBranchPopup = true;
    }
  }
  onCashLocationSelectedTxn(loc) {
    if (!loc)
      return;
    this.transactionPayoutDetails = {
      bankName: loc.bankName,
      bankCode: loc.bankCode ?? null,
      bankId: loc.id,
      accountNumber: null,
      branchName: null,
      branchCode: null,
      branchId: null
    };
    this.selectedSavedDetail = null;
    this.showCashSwapPanel = false;
    this.showCashSavedPanel = false;
  }
  toggleCashSwapPanel() {
    this.showCashSwapPanel = !this.showCashSwapPanel;
    this.showCashSavedPanel = false;
  }
  toggleCashSavedPanel() {
    this.showCashSavedPanel = !this.showCashSavedPanel;
    this.showCashSwapPanel = false;
  }
  selectCashSavedDetail(d) {
    this.selectedSavedDetail = d;
    this.transactionPayoutDetails = {
      bankName: d.bankName ?? null,
      bankCode: d.bankCode ?? null,
      bankId: d.bankId ?? d.id ?? null,
      accountNumber: null,
      branchName: null,
      branchCode: null,
      branchId: null
    };
    this.showCashSwapPanel = false;
    this.showCashSavedPanel = false;
  }
  onLocationSelectedTxn(loc) {
    if (!loc)
      return;
    this.transactionPayoutDetails = __spreadProps(__spreadValues({}, this.transactionPayoutDetails), {
      bankName: loc.locationName,
      bankCode: loc.locationCode ?? null,
      bankId: loc.id
    });
  }
  resolvedPayoutType() {
    const explicit = this.store.payoutType();
    if (explicit)
      return explicit;
    const n = this.store.paymentMethodName().toLowerCase();
    if (n.includes("cash") || n.includes("pickup") || n.includes("will_call") || n.includes("willcall"))
      return "cash";
    if (n.includes("wallet") || n.includes("mobile") || n.includes("phone"))
      return "wallet";
    return "bank";
  }
  isBankTransfer() {
    return this.resolvedPayoutType() === "bank";
  }
  isCashTransfer() {
    return this.resolvedPayoutType() === "cash";
  }
  isWalletTransfer() {
    return this.resolvedPayoutType() === "wallet";
  }
  isMgPartner() {
    return this.store.partner()?.apiProviderKey === "moneygram";
  }
  isMgCashTransfer() {
    return this.isMgPartner() && this.isCashTransfer();
  }
  resolveDisplayBankName(bankId, bankName) {
    if (bankName)
      return bankName;
    if (bankId)
      return this.payoutBanks.find((b) => b.id === bankId)?.bankName ?? null;
    return null;
  }
  hasSavedPayoutData() {
    if (this.selectedSavedDetail)
      return true;
    const pd = this.transactionPayoutDetails;
    return !!(pd.bankId || pd.bankName || pd.accountNumber);
  }
  hasValidPayoutAccount() {
    if (this.isBankTransfer()) {
      const sd = this.selectedSavedDetail;
      if (sd)
        return !!(sd.accountNumber && (sd.bankId || sd.bankName || sd.bankCode));
      const pd = this.transactionPayoutDetails;
      const effectiveBankName = this.resolveDisplayBankName(pd.bankId, pd.bankName);
      const bankIdentified = !!(pd.bankId || pd.bankCode && effectiveBankName);
      const bankOk = !!(pd.accountNumber && bankIdentified);
      const branchOk = this.allBranches.length === 0 || !!pd.branchId;
      return bankOk && branchOk;
    }
    if (this.isCashTransfer()) {
      if (this.isMgCashTransfer())
        return true;
      const sd = this.selectedSavedDetail;
      if (sd)
        return !!(sd.bankId || sd.bankName);
      return !!(this.transactionPayoutDetails.bankId || this.transactionPayoutDetails.bankName);
    }
    if (this.isWalletTransfer()) {
      const sd = this.selectedSavedDetail;
      if (sd)
        return !!sd.accountNumber;
      const pd = this.transactionPayoutDetails;
      return !!(pd.accountNumber && pd.bankCode);
    }
    return true;
  }
  canProceed() {
    return this.store.canProceedStep1() && this.hasValidPayoutAccount();
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
    this.router.navigate(["/agent/send"]);
  }
  isCustomerFieldRequired(ourColumn) {
    return this.store.customerMappings().some((m) => m.ourColumn.toLowerCase() === ourColumn.toLowerCase() && m.isRequired);
  }
  isReceiverFieldRequired(ourColumn) {
    return this.store.receiverMappings().some((m) => m.ourColumn.toLowerCase() === ourColumn.toLowerCase() && m.isRequired);
  }
  isReceiverFieldVisible(ourColumn) {
    if (this.store.receiverMappings().length === 0)
      return true;
    return this.store.receiverMappings().some((m) => m.ourColumn.toLowerCase() === ourColumn.toLowerCase());
  }
  isMissingCustomerField(ourColumn) {
    return this.store.missingCustomerFields().some((m) => m.ourColumn.toLowerCase() === ourColumn.toLowerCase());
  }
  isMissingReceiverField(ourColumn) {
    return this.store.missingReceiverFields().some((m) => m.ourColumn.toLowerCase() === ourColumn.toLowerCase());
  }
  labelFor(field) {
    return field.ourColumn.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
  }
  static {
    this.\u0275fac = function ThirdPartySendComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThirdPartySendComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThirdPartySendComponent, selectors: [["app-third-party-send"]], features: [\u0275\u0275ProvidersFeature([ThirdPartySendStore])], decls: 5, vars: 4, consts: [[1, "w-full", "px-6"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/50", "backdrop-blur-sm", "p-4"], [1, "bg-white", "dark:bg-gray-900", "rounded-3xl", "shadow-xl", "p-8", "text-center"], [1, "fixed", "inset-0", "z-50", "flex", "items-end", "sm:items-center", "justify-center", "p-4", "bg-black/50", "backdrop-blur-sm"], [1, "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-2xl", "p-6", "w-full", "max-w-md", "shadow-2xl"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "font-semibold", "text-gray-900", "dark:text-gray-100"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-200", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["placeholder", "Search branch...", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-200", "dark:border-gray-600", "text-gray-900", "dark:text-gray-100", "text-sm", "mb-3", "focus:outline-none", "focus:ring-1", "focus:ring-indigo-500/40", 3, "ngModelChange", "ngModel"], [1, "max-h-64", "overflow-y-auto", "space-y-1"], [1, "w-full", "text-left", "px-3", "py-2.5", "rounded-lg", "hover:bg-gray-50", "dark:hover:bg-gray-800", "transition-colors", "text-sm"], [1, "text-gray-400", "dark:text-gray-500", "text-sm", "text-center", "py-4"], [1, "w-full", "text-left", "px-3", "py-2.5", "rounded-lg", "hover:bg-gray-50", "dark:hover:bg-gray-800", "transition-colors", "text-sm", 3, "click"], [1, "text-gray-800", "dark:text-gray-200", "font-medium"], [1, "text-gray-400", "dark:text-gray-500", "ml-2", "font-mono"], [1, "text-gray-400", "dark:text-gray-500", "text-xs", "mt-0.5"], [1, "w-16", "h-16", "bg-emerald-100", "dark:bg-emerald-900/40", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-emerald-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white", "mb-1"], [1, "text-gray-500", "dark:text-gray-400", "mb-6"], [1, "font-semibold", "text-indigo-600"], [1, "bg-gray-50", "dark:bg-gray-800", "rounded-2xl", "p-5", "text-left", "space-y-2", "mb-6", "text-sm"], [1, "flex", "justify-between"], [1, "text-gray-500", "dark:text-gray-400"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "font-semibold", "text-gray-900", "dark:text-white"], [1, "font-semibold", "text-emerald-600"], [1, "font-medium", "text-amber-600"], [1, "flex", "gap-3"], [1, "flex-1", "py-3", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "text-gray-700", "dark:text-gray-300", "font-medium", "hover:bg-gray-50", "dark:hover:bg-gray-800", "transition-colors", "text-sm", 3, "click"], [1, "flex-1", "py-3", "rounded-xl", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "font-semibold", "transition-colors", "text-sm", 3, "click"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "p-2", "rounded-xl", "hover:bg-gray-100", "dark:hover:bg-gray-800", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600", "dark:text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "text-xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "mb-8", "px-2"], [1, "flex", "items-center", 3, "flex-1"], [1, "bg-white", "dark:bg-gray-900", "rounded-3xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-800", "p-6"], [1, "bg-white", "dark:bg-gray-900", "rounded-3xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-800", "overflow-hidden"], [1, "flex", "items-center"], [1, "flex", "flex-col", "items-center", "gap-1"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "text-xs", "font-semibold", "transition-all", 3, "click", "disabled", "title"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "text-[10px]", "font-medium", "hidden", "sm:block", "whitespace-nowrap"], [1, "flex-1", "h-0.5", "mx-1", "rounded", "transition-all", "mb-4", 3, "class"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M5 13l4 4L19 7"], [1, "flex-1", "h-0.5", "mx-1", "rounded", "transition-all", "mb-4"], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-white", "mb-5"], [1, "space-y-3", "mb-6"], [1, "flex", "justify-between", "items-center", "py-2", "border-b", "border-gray-100", "dark:border-gray-800"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "font-bold", "text-gray-900", "dark:text-white", "text-lg"], [1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "flex", "justify-between", "items-center", "py-3", "bg-emerald-50", "dark:bg-emerald-900/20", "rounded-xl", "px-3"], [1, "text-sm", "font-medium", "text-emerald-700", "dark:text-emerald-400"], [1, "font-bold", "text-emerald-700", "dark:text-emerald-400", "text-lg"], [1, "flex", "items-center", "gap-2", "mb-6", "text-xs", "text-gray-500", "dark:text-gray-400", "bg-gray-50", "dark:bg-gray-800", "rounded-xl", "px-3", "py-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "text-indigo-500", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "w-full", "py-3.5", "rounded-2xl", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "font-semibold", "text-sm", "transition-colors", 3, "click"], [1, "flex", "border-b", "border-gray-100", "dark:border-gray-800"], [1, "flex-1", "py-4", "text-sm", "font-semibold", "transition-colors", "relative"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "w-5", "h-5", "rounded-full", "bg-emerald-100", "dark:bg-emerald-900/40", "flex", "items-center", "justify-center"], [1, "w-5", "h-5", "rounded-full", "flex", "items-center", "justify-center", "text-xs", 3, "class"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-0.5", "bg-indigo-600"], [1, "p-6"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "text-emerald-600"], [1, "w-5", "h-5", "rounded-full", "flex", "items-center", "justify-center", "text-xs"], [1, "flex", "items-start", "gap-2", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-700", "rounded-xl", "px-4", "py-3", "mb-4", "text-sm", "text-amber-800", "dark:text-amber-300"], [1, "w-full", "py-3.5", "rounded-2xl", "font-semibold", "text-sm", "transition-all", "mt-2", 3, "click", "disabled"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "shrink-0", "mt-0.5"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "flex", "items-center", "gap-3", "bg-indigo-50", "dark:bg-indigo-900/20", "border", "border-indigo-100", "dark:border-indigo-800", "rounded-2xl", "px-4", "py-3", "mb-4"], [1, "w-9", "h-9", "rounded-full", "bg-indigo-600", "flex", "items-center", "justify-center", "text-white", "font-bold", "text-sm", "shrink-0"], [1, "flex-1", "min-w-0"], [1, "font-semibold", "text-gray-900", "dark:text-white", "text-sm", "truncate"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", "p-1", 3, "click"], [1, "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-700", "rounded-2xl", "p-5", "mb-4"], [1, "flex", "items-center", "gap-2", "mb-4"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "text-amber-500", "shrink-0"], [1, "text-sm", "font-semibold", "text-amber-800", "dark:text-amber-300"], [1, "space-y-3"], [1, "mt-4", "w-full", "py-2.5", "rounded-xl", "bg-amber-500", "hover:bg-amber-600", "disabled:opacity-50", "text-white", "font-semibold", "text-sm", "transition-colors", 3, "click", "disabled"], [1, "block", "text-xs", "font-medium", "text-amber-800", "dark:text-amber-300", "mb-1"], [1, "text-rose-500"], ["type", "text", "placeholder", "Street address", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-amber-200", "dark:border-amber-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-amber-400", "placeholder-gray-400", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "City", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-amber-200", "dark:border-amber-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-amber-400", "placeholder-gray-400", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Postal code", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-amber-200", "dark:border-amber-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-amber-400", "placeholder-gray-400", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-amber-200", "dark:border-amber-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-amber-400", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-amber-200", "dark:border-amber-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-amber-400", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["type", "text", "placeholder", "e.g. Engineer", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-amber-200", "dark:border-amber-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-amber-400", "placeholder-gray-400", 3, "ngModelChange", "ngModel"], [1, "relative", "mb-4"], ["type", "text", "placeholder", "Search customer by name or phone...", 1, "w-full", "pl-10", "pr-4", "py-3", "rounded-2xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", "dark:focus:ring-indigo-600", "placeholder-gray-400", 3, "ngModelChange", "input", "focus", "blur", "ngModel"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-3.5", "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "absolute", "z-20", "w-full", "mt-1", "bg-white", "dark:bg-gray-800", "border", "border-gray-200", "dark:border-gray-700", "rounded-2xl", "shadow-lg", "max-h-56", "overflow-y-auto"], [1, "w-full", "py-2.5", "rounded-2xl", "border", "border-dashed", "border-gray-300", "dark:border-gray-600", "text-sm", "text-gray-500", "dark:text-gray-400", "hover:border-indigo-400", "hover:text-indigo-600", "dark:hover:text-indigo-400", "transition-colors", "mb-4", 3, "click"], [1, "bg-gray-50", "dark:bg-gray-800/60", "rounded-2xl", "p-5", "space-y-3"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-3", "hover:bg-gray-50", "dark:hover:bg-gray-700/60", "transition-colors", "text-left"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-3", "hover:bg-gray-50", "dark:hover:bg-gray-700/60", "transition-colors", "text-left", 3, "mousedown"], [1, "w-8", "h-8", "rounded-full", "bg-indigo-100", "dark:bg-indigo-900/40", "flex", "items-center", "justify-center", "text-indigo-600", "font-bold", "text-sm", "shrink-0"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-400"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-1"], [1, "grid", "grid-cols-2", "gap-3"], [1, "col-span-2"], [1, "block", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-400", "mb-1"], ["type", "text", "placeholder", "John Smith", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], ["type", "tel", "placeholder", "+44...", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], ["type", "email", "placeholder", "john@email.com", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], [1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], ["type", "text", "placeholder", "AB123456", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], ["type", "text", "placeholder", "Street address", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], ["type", "text", "placeholder", "City", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], ["type", "text", "placeholder", "Postal code", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], ["type", "date", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], ["type", "text", "placeholder", "e.g. Engineer", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], [1, "w-full", "py-2.5", "rounded-xl", "bg-indigo-600", "hover:bg-indigo-700", "disabled:opacity-50", "text-white", "font-semibold", "text-sm", "transition-colors", "mt-2", 3, "click", "disabled"], [1, "flex", "items-center", "gap-1", "text-xs", "text-gray-500", "dark:text-gray-400", "hover:text-indigo-600", "mb-4", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], [1, "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-700", "rounded-2xl", "p-4", "mb-4"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "rounded-xl", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-700", "text-xs", "text-amber-700", "dark:text-amber-300"], [1, "text-gray-400", "hover:text-gray-600", "p-1", 3, "click"], [1, "bg-gray-50", "dark:bg-gray-800/60", "rounded-2xl", "p-4", "mb-4"], ["type", "text", "placeholder", "Occupation", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-amber-200", "dark:border-amber-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-amber-400", "placeholder-gray-400", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "ID number", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-amber-200", "dark:border-amber-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-amber-400", "placeholder-gray-400", 3, "ngModelChange", "ngModel"], [1, "rounded-xl", "border", "border-indigo-200", "dark:border-indigo-800/50", "overflow-hidden", "mb-3"], [1, "mb-3", "rounded-2xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-900", "shadow-sm", "overflow-hidden"], [1, "bg-gray-50", "dark:bg-gray-800/60", "rounded-2xl", "p-4", "mb-4", "space-y-3"], [1, "flex", "items-center", "justify-between", "px-3", "py-2", "bg-indigo-50", "dark:bg-indigo-950/50", "border-b", "border-indigo-200", "dark:border-indigo-800/50"], [1, "flex", "items-center", "gap-1.5"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5", "text-indigo-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"], [1, "text-[10px]", "font-bold", "text-indigo-600", "dark:text-indigo-400", "uppercase", "tracking-wider"], [1, "flex", "items-center", "gap-1", "px-2.5", "py-1", "rounded-lg", "text-[11px]", "font-semibold", "text-indigo-600", "dark:text-indigo-400", "bg-white", "dark:bg-gray-800", "border", "border-indigo-200", "dark:border-indigo-700", "hover:bg-indigo-50", "dark:hover:bg-indigo-900/30", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"], [1, "px-3", "py-2.5", "bg-white", "dark:bg-gray-900", "grid", "grid-cols-2", "gap-x-4", "gap-y-1.5"], [1, "text-[10px]", "text-gray-400", "uppercase", "tracking-wide", "font-medium"], [1, "text-xs", "font-semibold", "text-gray-800", "dark:text-gray-200", "truncate"], [1, "text-xs", "font-semibold", "text-gray-800", "dark:text-gray-200", "font-mono"], [1, "px-4", "pt-3", "pb-2", "border-b", "border-gray-100", "dark:border-gray-800"], [1, "text-xs", "font-semibold", "text-gray-500", "dark:text-gray-400", "uppercase", "tracking-wider"], [1, "p-2", "space-y-0.5"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "transition-all", "text-left", 3, "class"], [1, "px-2", "pb-2"], [1, "w-full", "flex", "items-center", "gap-2", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "text-indigo-600", "dark:text-indigo-400", "border", "border-dashed", "border-indigo-300", "dark:border-indigo-700", "hover:bg-indigo-50", "dark:hover:bg-indigo-900/20", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M12 4v16m8-8H4"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "transition-all", "text-left", 3, "click"], [1, "w-4", "h-4", "rounded-full", "border-2", "flex-shrink-0", "flex", "items-center", "justify-center"], [1, "w-2", "h-2", "rounded-full", "bg-indigo-500"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-gray-100", "truncate"], [1, "text-xs", "text-gray-400", "font-mono"], [1, "text-xs", "font-semibold", "text-gray-600", "dark:text-gray-400"], [1, "grid", "grid-cols-2", "gap-2"], [1, "block", "text-xs", "text-gray-500", "dark:text-gray-400", "mb-1"], ["type", "text", "placeholder", "Account number", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "change"], ["type", "text", "placeholder", "Bank name", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "SWIFT/Code", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "w-full", "px-3", "py-2", "rounded-xl", "border-2", "border-dashed", "border-indigo-300", "dark:border-indigo-700", "text-sm", "text-indigo-600", "dark:text-indigo-400", "font-medium", "hover:bg-indigo-50", "dark:hover:bg-indigo-900/20", "transition-colors", "flex", "items-center", "justify-center", "gap-2"], [1, "flex-1", "px-3", "py-2", "rounded-xl", "border", "border-indigo-200", "dark:border-indigo-800", "bg-indigo-50", "dark:bg-indigo-950/50", "text-sm", "font-medium", "text-indigo-700", "dark:text-indigo-300", "truncate"], ["type", "button", 1, "px-3", "py-2", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-400", "hover:bg-gray-50", "dark:hover:bg-gray-800", "transition-colors", "shrink-0", 3, "click"], ["type", "button", 1, "w-full", "px-3", "py-2", "rounded-xl", "border-2", "border-dashed", "border-indigo-300", "dark:border-indigo-700", "text-sm", "text-indigo-600", "dark:text-indigo-400", "font-medium", "hover:bg-indigo-50", "dark:hover:bg-indigo-900/20", "transition-colors", "flex", "items-center", "justify-center", "gap-2", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "rounded-xl", "border", "border-emerald-200", "dark:border-emerald-800/50", "overflow-hidden", "mb-3"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "bg-emerald-50", "dark:bg-emerald-950/50", "border-b", "border-emerald-200", "dark:border-emerald-800/50"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-3.5", "h-3.5", "text-emerald-500", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "text-[10px]", "font-bold", "text-emerald-600", "dark:text-emerald-400", "uppercase", "tracking-wider"], [1, "px-3", "py-2.5", "bg-white", "dark:bg-surface-900"], [1, "text-sm", "font-semibold", "text-surface-800", "dark:text-surface-100"], [1, "text-[10px]", "text-surface-400", "dark:text-surface-500", "uppercase", "tracking-wider", "mt-0.5"], [1, "mb-3", "rounded-2xl", "border", "border-indigo-200", "dark:border-indigo-700/60", "bg-white", "dark:bg-gray-900", "shadow-sm", "overflow-hidden"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "border-2", "border-dashed", "border-rose-300", "dark:border-rose-700", "bg-rose-50/50", "dark:bg-rose-950/20", "hover:border-rose-400", "hover:bg-rose-50", "dark:hover:bg-rose-950/30", "transition-all", "mb-3"], [1, "flex", "items-center", "gap-2.5", "px-4", "py-3", "rounded-xl", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-700", "mb-3"], [1, "flex", "items-center", "justify-between", "px-3", "py-2", "bg-emerald-50", "dark:bg-emerald-950/50", "border-b", "border-emerald-200", "dark:border-emerald-800/50"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5", "text-emerald-500"], [3, "class"], [1, "flex", "items-center", "gap-1", "px-2.5", "py-1", "rounded-lg", "text-[11px]", "font-semibold", "text-emerald-600", "dark:text-emerald-400", "bg-white", "dark:bg-gray-800", "border", "border-emerald-200", "dark:border-emerald-700", "hover:bg-emerald-50", "dark:hover:bg-emerald-900/30", "transition-colors", 3, "click"], [1, "px-3", "py-2.5", "bg-white", "dark:bg-gray-900", "flex", "items-center", "gap-3"], [1, "w-7", "h-7", "rounded-full", "bg-emerald-100", "dark:bg-emerald-900/40", "flex", "items-center", "justify-center", "shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5", "text-emerald-600", "dark:text-emerald-400"], [1, "min-w-0"], [1, "text-[10px]", "text-gray-400", "font-mono", "mt-0.5"], [1, "ml-auto", "shrink-0"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-semibold", "bg-emerald-100", "dark:bg-emerald-900/40", "text-emerald-700", "dark:text-emerald-300"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-2.5", "h-2.5"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], [3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"], [1, "px-4", "pt-3", "pb-2", "border-b", "border-indigo-100", "dark:border-indigo-800/60", "flex", "items-center", "justify-between"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xs", "font-semibold", "text-indigo-600", "dark:text-indigo-400", "uppercase", "tracking-wider"], [1, "text-[10px]", "text-gray-400"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "transition-all", "text-left", "relative", "overflow-hidden", 3, "class"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "transition-all", "text-left", "relative", "overflow-hidden", 3, "click"], [1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "w-0.5", "h-6", "rounded-r-full", "bg-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "text-indigo-500", "shrink-0"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "border-2", "border-dashed", "border-rose-300", "dark:border-rose-700", "bg-rose-50/50", "dark:bg-rose-950/20", "hover:border-rose-400", "hover:bg-rose-50", "dark:hover:bg-rose-950/30", "transition-all", "mb-3", 3, "click"], [1, "w-8", "h-8", "rounded-full", "bg-rose-100", "dark:bg-rose-900/40", "flex", "items-center", "justify-center", "shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "text-rose-500"], [1, "flex-1", "text-left"], [1, "text-sm", "font-semibold", "text-rose-600", "dark:text-rose-400"], [1, "text-xs", "text-rose-400", "dark:text-rose-500"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "text-rose-400", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "px-4", "pt-3", "pb-2", "border-b", "border-gray-100", "dark:border-gray-800", "flex", "items-center", "justify-between"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3", "h-3", "inline", "mr-1", "text-emerald-500"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", "p-1", "rounded-lg", "hover:bg-gray-100", "dark:hover:bg-gray-800", "transition-colors"], [1, "p-4", "flex", "items-center", "gap-2", "text-xs", "text-amber-600", "dark:text-amber-400"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", "p-1", "rounded-lg", "hover:bg-gray-100", "dark:hover:bg-gray-800", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5"], [1, "p-2", "space-y-0.5", "max-h-52", "overflow-y-auto"], [1, "w-2", "h-2", "rounded-full", "bg-emerald-500"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "text-emerald-500", "shrink-0"], [1, "border-t", "border-gray-100", "dark:border-gray-800", "px-4", "pt-2", "pb-1"], [1, "text-[10px]", "text-gray-400", "uppercase", "tracking-wider", "font-semibold", "mb-1"], [1, "px-2", "pb-2", "space-y-0.5"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "text-amber-500", "shrink-0"], [1, "text-xs", "text-amber-700", "dark:text-amber-300"], [1, "text-xs", "font-semibold", "text-gray-600", "dark:text-gray-400", "mb-3"], [1, "mb-3"], [1, "text-xs", "text-amber-600", "dark:text-amber-400", "flex", "items-center", "gap-1.5", "mb-3"], ["type", "text", "placeholder", "Wallet number", 1, "w-full", "px-3", "py-2", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "ngModelChange", "ngModel"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5", "shrink-0"], [1, "text-xs", "font-semibold", "text-amber-700", "dark:text-amber-300", "mb-2"], [1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-amber-300", "dark:border-amber-600", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-amber-400", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Search receiver by name or phone...", 1, "w-full", "pl-10", "pr-4", "py-3", "rounded-2xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", "placeholder-gray-400", 3, "ngModelChange", "input", "focus", "blur", "ngModel"], [1, "w-full", "py-2.5", "rounded-2xl", "border", "border-dashed", "border-gray-300", "dark:border-gray-600", "text-sm", "text-gray-500", "dark:text-gray-400", "hover:border-indigo-400", "hover:text-indigo-600", "transition-colors", "mb-4", 3, "click"], [1, "w-8", "h-8", "rounded-full", "bg-emerald-100", "dark:bg-emerald-900/40", "flex", "items-center", "justify-center", "text-emerald-600", "font-bold", "text-sm", "shrink-0"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], ["type", "text", "placeholder", "Sara Ahmed", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], ["type", "tel", "placeholder", "+977...", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], [1, "w-full", "py-2.5", "rounded-xl", "bg-indigo-600", "hover:bg-indigo-700", "disabled:opacity-50", "text-white", "font-semibold", "text-sm", "transition-colors", 3, "click", "disabled"], ["type", "text", "placeholder", "Occupation", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], ["type", "text", "placeholder", "ID number", 1, "w-full", "px-3", "py-2.5", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "formControl"], [1, "space-y-4"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1.5"], [1, "w-full", "px-3", "py-3", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", 3, "ngModelChange", "ngModel"], [1, "w-full", "mt-6", "py-3.5", "rounded-2xl", "font-semibold", "text-sm", "transition-all", 3, "click", "disabled"], [1, "space-y-3", "text-sm", "mb-6"], [1, "flex", "justify-between", "py-2", "border-b", "border-gray-100", "dark:border-gray-800"], [1, "font-bold", "text-gray-900", "dark:text-white"], [1, "font-bold", "text-emerald-600"], [1, "flex", "justify-between", "py-2"], [1, "w-full", "py-3.5", "rounded-2xl", "bg-indigo-600", "hover:bg-indigo-700", "disabled:opacity-60", "text-white", "font-bold", "text-sm", "transition-colors", 3, "click", "disabled"], [1, "w-full", "max-w-sm", "bg-white", "dark:bg-gray-900", "rounded-3xl", "p-6", "shadow-2xl"], [1, "text-base", "font-bold", "text-gray-900", "dark:text-white", "mb-1"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "mb-5"], ["type", "password", "maxlength", "6", "placeholder", "\u2022\u2022\u2022\u2022", 1, "w-full", "px-4", "py-3", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-gray-50", "dark:bg-gray-800", "text-center", "text-xl", "tracking-widest", "font-bold", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", "mb-3", 3, "ngModelChange", "ngModel"], ["type", "password", "maxlength", "6", "placeholder", "Confirm PIN \u2022\u2022\u2022\u2022", 1, "w-full", "px-4", "py-3", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-gray-50", "dark:bg-gray-800", "text-center", "text-xl", "tracking-widest", "font-bold", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", "mb-3", 3, "ngModel"], [1, "text-xs", "text-rose-500", "mb-3"], [1, "flex-1", "py-3", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "text-sm", "text-gray-600", "dark:text-gray-400", "font-medium", "hover:bg-gray-50", "dark:hover:bg-gray-800", "transition-colors", 3, "click"], [1, "flex-1", "py-3", "rounded-xl", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "font-semibold", "text-sm", "transition-colors", 3, "click"], ["type", "password", "maxlength", "6", "placeholder", "Confirm PIN \u2022\u2022\u2022\u2022", 1, "w-full", "px-4", "py-3", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-gray-50", "dark:bg-gray-800", "text-center", "text-xl", "tracking-widest", "font-bold", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", "mb-3", 3, "ngModelChange", "ngModel"]], template: function ThirdPartySendComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ThirdPartySendComponent_Conditional_1_Template, 13, 3, "div", 1)(2, ThirdPartySendComponent_Conditional_2_Template, 43, 15, "div", 2)(3, ThirdPartySendComponent_Conditional_3_Template, 14, 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, ThirdPartySendComponent_Conditional_4_Template, 14, 6, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showBranchPopup ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.store.isComplete() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.store.isComplete() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPinDialog ? 4 : -1);
      }
    }, dependencies: [CommonModule, SlicePipe, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, ReactiveFormsModule, FormControlDirective], encapsulation: 2, data: { animation: [
      trigger("slideDown", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(-8px)", maxHeight: "0px" }),
          animate("220ms cubic-bezier(0.4,0,0.2,1)", style({ opacity: 1, transform: "translateY(0)", maxHeight: "600px" }))
        ]),
        transition(":leave", [
          animate("160ms cubic-bezier(0.4,0,1,1)", style({ opacity: 0, transform: "translateY(-4px)", maxHeight: "0px" }))
        ])
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThirdPartySendComponent, [{
    type: Component,
    args: [{ selector: "app-third-party-send", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, DecimalPipe], providers: [ThirdPartySendStore], animations: [
      trigger("slideDown", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(-8px)", maxHeight: "0px" }),
          animate("220ms cubic-bezier(0.4,0,0.2,1)", style({ opacity: 1, transform: "translateY(0)", maxHeight: "600px" }))
        ]),
        transition(":leave", [
          animate("160ms cubic-bezier(0.4,0,1,1)", style({ opacity: 0, transform: "translateY(-4px)", maxHeight: "0px" }))
        ])
      ])
    ], template: `<div class="w-full px-6">

  <!-- Branch popup -->
  @if (showBranchPopup) {
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">Select Branch \u2014 {{ branchBankName }}</h3>
          <button (click)="showBranchPopup = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <input [(ngModel)]="branchSearch" (ngModelChange)="filterBranches()" placeholder="Search branch..."
          class="w-full px-3 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm mb-3 focus:outline-none focus:ring-1 focus:ring-indigo-500/40" />
        <div class="max-h-64 overflow-y-auto space-y-1">
          @for (branch of filteredBranches; track branch.id) {
            <button (click)="branchContext === 'txn' ? selectBranchTxn(branch) : selectBranch(branch)"
              class="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm">
              <span class="text-gray-800 dark:text-gray-200 font-medium">{{ branch.branchName }}</span>
              @if (branch.branchCode) { <span class="text-gray-400 dark:text-gray-500 ml-2 font-mono">{{ branch.branchCode }}</span> }
              @if (branch.address) { <div class="text-gray-400 dark:text-gray-500 text-xs mt-0.5">{{ branch.address }}</div> }
            </button>
          }
          @empty {
            <p class="text-gray-400 dark:text-gray-500 text-sm text-center py-4">No branches found</p>
          }
        </div>
      </div>
    </div>
  }

    <!-- Success overlay -->
    @if (store.isComplete()) {
      <div class="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 text-center" @slideDown>
        <div class="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Transaction Submitted</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-6">
          Reference: <span class="font-semibold text-indigo-600">{{ store.successResult()?.referenceNumber }}</span>
        </p>
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 text-left space-y-2 mb-6 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Sender</span>
            <span class="font-medium text-gray-900 dark:text-white">{{ store.successResult()?.senderName }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Receiver</span>
            <span class="font-medium text-gray-900 dark:text-white">{{ store.successResult()?.receiverName }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Amount Sent</span>
            <span class="font-semibold text-gray-900 dark:text-white">{{ store.successResult()?.sendAmount | number:'1.2-2' }} {{ store.successResult()?.sendCurrency }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Amount Received</span>
            <span class="font-semibold text-emerald-600">{{ store.successResult()?.receiveAmount | number:'1.2-2' }} {{ store.successResult()?.receiveCurrency }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Status</span>
            <span class="font-medium text-amber-600">{{ store.successResult()?.status }}</span>
          </div>
        </div>
        <div class="flex gap-3">
          <button (click)="downloadReceipt()" class="flex-1 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm">
            Download Receipt
          </button>
          <button (click)="startNewTransaction()" class="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors text-sm">
            New Transaction
          </button>
        </div>
      </div>
    }

    @if (!store.isComplete()) {
      <!-- Header -->
      <div class="flex items-center gap-3 mb-6">
        <button (click)="goBack()" class="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <div>
          <h1 class="text-xl font-bold text-gray-900 dark:text-white">Send Money</h1>
        </div>
      </div>

      <!-- Step indicator -->
      <div class="flex items-center mb-8 px-2">
        @for (step of [0,1,2,3]; track step) {
          <div class="flex items-center" [class.flex-1]="step < 3">
            <div class="flex flex-col items-center gap-1">
              <button
                [disabled]="step >= store.currentStep()"
                (click)="goToStep(step)"
                [title]="['Summary','Sender & Receiver','Payout Details','Review'][step]"
                class="flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold transition-all"
                [class]="store.currentStep() > step
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer ring-0 hover:ring-4 hover:ring-indigo-100 dark:hover:ring-indigo-900/40'
                  : store.currentStep() === step
                    ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-900/40 cursor-default'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'">
                @if (store.currentStep() > step) {
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                } @else {
                  {{ step + 1 }}
                }
              </button>
              <span class="text-[10px] font-medium hidden sm:block whitespace-nowrap"
                [class]="store.currentStep() >= step ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500'">
                {{ ['Summary','Sender & Receiver','Payout','Review'][step] }}
              </span>
            </div>
            @if (step < 3) {
              <div class="flex-1 h-0.5 mx-1 rounded transition-all mb-4"
                [class]="store.currentStep() > step ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'"></div>
            }
          </div>
        }
      </div>

      <!-- \u2500\u2500\u2500 STEP 0: Calculation Summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      @if (store.currentStep() === 0) {
        <div class="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6" @slideDown>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-5">Transaction Summary</h2>

          <div class="space-y-3 mb-6">
            <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
              <span class="text-sm text-gray-500 dark:text-gray-400">You send</span>
              <span class="font-bold text-gray-900 dark:text-white text-lg">
                {{ store.sendAmount() | number:'1.2-2' }} {{ store.sendCurrency() }}
              </span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
              <span class="text-sm text-gray-500 dark:text-gray-400">Exchange rate</span>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                1 {{ store.sendCurrency() }} = {{ store.exchangeRate() | number:'1.4-4' }} {{ store.receiveCurrency() }}
              </span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
              <span class="text-sm text-gray-500 dark:text-gray-400">Service charge</span>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ store.serviceCharge() | number:'1.2-2' }} {{ store.sendCurrency() }}
              </span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
              <span class="text-sm text-gray-500 dark:text-gray-400">Total payable</span>
              <span class="font-semibold text-gray-900 dark:text-white">
                {{ store.totalPayable() | number:'1.2-2' }} {{ store.sendCurrency() }}
              </span>
            </div>
            <div class="flex justify-between items-center py-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl px-3">
              <span class="text-sm font-medium text-emerald-700 dark:text-emerald-400">Receiver gets</span>
              <span class="font-bold text-emerald-700 dark:text-emerald-400 text-lg">
                {{ store.receiveAmount() | number:'1.2-2' }} {{ store.receiveCurrency() }}
              </span>
            </div>
          </div>

          <div class="flex items-center gap-2 mb-6 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-xl px-3 py-2">
            <svg class="w-3.5 h-3.5 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {{ store.paymentMethodName() }}
          </div>

          <button (click)="store.nextStep()" class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors">
            Continue to Customer & Receiver \u2192
          </button>
        </div>
      }

      <!-- \u2500\u2500\u2500 STEP 1: Customer + Receiver \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      @if (store.currentStep() === 1) {
        <div class="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden" @slideDown>

          <!-- Sub-step tabs -->
          <div class="flex border-b border-gray-100 dark:border-gray-800">
            <button class="flex-1 py-4 text-sm font-semibold transition-colors relative"
              [class]="store.subStep() === 'customer'
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-gray-400 dark:text-gray-500'">
              <span class="flex items-center justify-center gap-2">
                @if (store.selectedCustomer() && store.missingCustomerFields().length === 0) {
                  <span class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                } @else {
                  <span class="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    [class]="store.subStep() === 'customer' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'">1</span>
                }
                Customer
              </span>
              @if (store.subStep() === 'customer') {
                <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
              }
            </button>
            <button class="flex-1 py-4 text-sm font-semibold transition-colors relative"
              [class]="store.subStep() === 'receiver'
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-gray-400 dark:text-gray-500'">
              <span class="flex items-center justify-center gap-2">
                @if (store.selectedReceiver() && store.missingReceiverFields().length === 0) {
                  <span class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                } @else {
                  <span class="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    [class]="store.subStep() === 'receiver' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'">2</span>
                }
                Receiver
              </span>
              @if (store.subStep() === 'receiver') {
                <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
              }
            </button>
          </div>

          <div class="p-6">

            <!-- \u2500\u2500 Customer sub-step \u2500\u2500 -->
            @if (store.subStep() === 'customer') {
              <!-- KYC / DOB warnings -->
              @if (store.kycWarning()) {
                <div class="flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl px-4 py-3 mb-4 text-sm text-amber-800 dark:text-amber-300" @slideDown>
                  <svg class="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  {{ store.kycWarning() }}
                </div>
              }

              <!-- Selected customer card -->
              @if (store.selectedCustomer()) {
                <div class="flex items-center gap-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl px-4 py-3 mb-4">
                  <div class="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {{ store.selectedCustomer()!.fullName.charAt(0).toUpperCase() }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-semibold text-gray-900 dark:text-white text-sm truncate">{{ store.selectedCustomer()!.fullName }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ store.selectedCustomer()!.phone }} \xB7 {{ store.selectedCustomer()!.country }}</p>
                  </div>
                  <button (click)="clearCustomer()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                <!-- Missing required fields card -->
                @if (store.missingCustomerFields().length > 0 && showMissingCustomerForm) {
                  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-5 mb-4" @slideDown>
                    <div class="flex items-center gap-2 mb-4">
                      <svg class="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                      </svg>
                      <p class="text-sm font-semibold text-amber-800 dark:text-amber-300">
                        {{ store.missingCustomerFields().length }} additional required field(s)
                      </p>
                    </div>
                    <div class="space-y-3">
                      @if (isMissingCustomerField('address')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Address <span class="text-rose-500">*</span></label>
                          <input type="text" [(ngModel)]="missingCustomerData['address']" placeholder="Street address"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"/>
                        </div>
                      }
                      @if (isMissingCustomerField('city')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">City <span class="text-rose-500">*</span></label>
                          <input type="text" [(ngModel)]="missingCustomerData['city']" placeholder="City"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"/>
                        </div>
                      }
                      @if (isMissingCustomerField('postalCode')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Postal Code <span class="text-rose-500">*</span></label>
                          <input type="text" [(ngModel)]="missingCustomerData['postalCode']" placeholder="Postal code"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"/>
                        </div>
                      }
                      @if (isMissingCustomerField('dateOfBirth')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Date of Birth <span class="text-rose-500">*</span></label>
                          <input type="date" [(ngModel)]="missingCustomerData['dateOfBirth']"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"/>
                        </div>
                      }
                      @if (isMissingCustomerField('nationality')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Nationality <span class="text-rose-500">*</span></label>
                          <select [(ngModel)]="missingCustomerData['nationality']"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                            <option value="">Select nationality</option>
                            @for (c of countries; track c.name) {
                              <option [value]="c.name">{{ c.name }}</option>
                            }
                          </select>
                        </div>
                      }
                      @if (isMissingCustomerField('gender')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Gender <span class="text-rose-500">*</span></label>
                          <select [(ngModel)]="missingCustomerData['gender']"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      }
                      @if (isMissingCustomerField('occupation')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Occupation <span class="text-rose-500">*</span></label>
                          <input type="text" [(ngModel)]="missingCustomerData['occupation']" placeholder="e.g. Engineer"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"/>
                        </div>
                      }
                    </div>
                    <button (click)="saveMissingCustomerFields()" [disabled]="savingMissingCustomer"
                      class="mt-4 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-semibold text-sm transition-colors">
                      {{ savingMissingCustomer ? 'Saving...' : 'Save & Continue' }}
                    </button>
                  </div>
                }
              }

              <!-- Customer search -->
              @if (!store.selectedCustomer()) {
                <div class="relative mb-4">
                  <input type="text" [(ngModel)]="customerSearch"
                    (input)="filterCustomers()" (focus)="filterCustomers()" (blur)="hideCustomerDropdown()"
                    placeholder="Search customer by name or phone..."
                    class="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 placeholder-gray-400"/>
                  <svg class="absolute left-3 top-3.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  @if (showCustomerDropdown && filteredCustomers.length > 0) {
                    <div class="absolute z-20 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg max-h-56 overflow-y-auto">
                      @for (c of filteredCustomers; track c.id) {
                        <button (mousedown)="selectCustomer(c)" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors text-left">
                          <div class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 font-bold text-sm shrink-0">
                            {{ c.fullName.charAt(0).toUpperCase() }}
                          </div>
                          <div>
                            <p class="text-sm font-medium text-gray-900 dark:text-white">{{ c.fullName }}</p>
                            <p class="text-xs text-gray-400">{{ c.phone }} \xB7 {{ c.country }}</p>
                          </div>
                        </button>
                      }
                    </div>
                  }
                </div>

                <!-- Create new customer toggle -->
                <button (click)="showCreateCustomer = !showCreateCustomer"
                  class="w-full py-2.5 rounded-2xl border border-dashed border-gray-300 dark:border-gray-600 text-sm text-gray-500 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-4">
                  + Create New Customer
                </button>

                @if (showCreateCustomer) {
                  <div class="bg-gray-50 dark:bg-gray-800/60 rounded-2xl p-5 space-y-3" @slideDown>
                    <p class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">New Customer</p>
                    <div class="grid grid-cols-2 gap-3">
                      <div class="col-span-2">
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Full Name <span class="text-rose-500">*</span></label>
                        <input type="text" [formControl]="customerForm.controls.fullName" placeholder="John Smith"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Phone <span class="text-rose-500">*</span></label>
                        <input type="tel" [formControl]="customerForm.controls.phone" placeholder="+44..."
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Email</label>
                        <input type="email" [formControl]="customerForm.controls.email" placeholder="john@email.com"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Country <span class="text-rose-500">*</span></label>
                        <select [formControl]="customerForm.controls.country"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
                          <option value="">Select country</option>
                          @for (c of countries; track c.name) {
                            <option [value]="c.name">{{ c.name }}</option>
                          }
                        </select>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Nationality <span class="text-rose-500">*</span></label>
                        <select [formControl]="customerForm.controls.nationality"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
                          <option value="">Select nationality</option>
                          @for (c of countries; track c.name) {
                            <option [value]="c.name">{{ c.name }}</option>
                          }
                        </select>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">ID Type <span class="text-rose-500">*</span></label>
                        <select [formControl]="customerForm.controls.idDocumentType"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
                          <option value="">Select ID type</option>
                          @for (t of idTypes; track t.code) {
                            <option [value]="t.code">{{ t.name }}</option>
                          }
                        </select>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">ID Number <span class="text-rose-500">*</span></label>
                        <input type="text" [formControl]="customerForm.controls.idDocumentNumber" placeholder="AB123456"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div class="col-span-2">
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Address @if (isCustomerFieldRequired('address')) { <span class="text-rose-500">*</span> }
                        </label>
                        <input type="text" [formControl]="customerForm.controls.address" placeholder="Street address"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          City @if (isCustomerFieldRequired('city')) { <span class="text-rose-500">*</span> }
                        </label>
                        <input type="text" [formControl]="customerForm.controls.city" placeholder="City"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Postal Code @if (isCustomerFieldRequired('postalCode')) { <span class="text-rose-500">*</span> }
                        </label>
                        <input type="text" [formControl]="customerForm.controls.postalCode" placeholder="Postal code"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Date of Birth @if (isCustomerFieldRequired('dateOfBirth')) { <span class="text-rose-500">*</span> }
                        </label>
                        <input type="date" [formControl]="customerForm.controls.dateOfBirth"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Gender @if (isCustomerFieldRequired('gender')) { <span class="text-rose-500">*</span> }
                        </label>
                        <select [formControl]="customerForm.controls.gender"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
                          <option value="">Select gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Occupation @if (isCustomerFieldRequired('occupation')) { <span class="text-rose-500">*</span> }
                        </label>
                        <input type="text" [formControl]="customerForm.controls.occupation" placeholder="e.g. Engineer"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                    </div>
                    <button (click)="saveNewCustomer()" [disabled]="savingCustomer"
                      class="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold text-sm transition-colors mt-2">
                      {{ savingCustomer ? 'Creating...' : 'Create Customer' }}
                    </button>
                  </div>
                }
              }

              <!-- Proceed to receiver -->
              <button (click)="goToCustomerSubStep()"
                [disabled]="!store.canProceedCustomer()"
                class="w-full py-3.5 rounded-2xl font-semibold text-sm transition-all mt-2"
                [class]="store.canProceedCustomer()
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'">
                Next: Select Receiver \u2192
              </button>
            }

            <!-- \u2500\u2500 Receiver sub-step \u2500\u2500 -->
            @if (store.subStep() === 'receiver') {
              <button (click)="store.setSubStep('customer', 'backward')" class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 mb-4 transition-colors">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
                Back to customer
              </button>

              <!-- Selected receiver card -->
              @if (store.selectedReceiver()) {
                <div class="flex items-center gap-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl px-4 py-3 mb-4">
                  <div class="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {{ store.selectedReceiver()!.fullName.charAt(0).toUpperCase() }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-semibold text-gray-900 dark:text-white text-sm truncate">{{ store.selectedReceiver()!.fullName }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ store.selectedReceiver()!.phone }} \xB7 {{ store.selectedReceiver()!.country }}</p>
                  </div>
                  <button (click)="clearReceiver()" class="text-gray-400 hover:text-gray-600 p-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                <!-- Missing receiver fields card -->
                @if (store.missingReceiverFields().length > 0 && showMissingReceiverForm) {
                  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-5 mb-4" @slideDown>
                    <div class="flex items-center gap-2 mb-4">
                      <svg class="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                      </svg>
                      <p class="text-sm font-semibold text-amber-800 dark:text-amber-300">
                        {{ store.missingReceiverFields().length }} additional required field(s)
                      </p>
                    </div>
                    <div class="space-y-3">
                      @if (isMissingReceiverField('address')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Address <span class="text-rose-500">*</span></label>
                          <input type="text" [(ngModel)]="missingReceiverData['address']" placeholder="Street address"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"/>
                        </div>
                      }
                      @if (isMissingReceiverField('city')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">City <span class="text-rose-500">*</span></label>
                          <input type="text" [(ngModel)]="missingReceiverData['city']" placeholder="City"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"/>
                        </div>
                      }
                      @if (isMissingReceiverField('postalCode')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Postal Code <span class="text-rose-500">*</span></label>
                          <input type="text" [(ngModel)]="missingReceiverData['postalCode']" placeholder="Postal code"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"/>
                        </div>
                      }
                      @if (isMissingReceiverField('gender')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Gender <span class="text-rose-500">*</span></label>
                          <select [(ngModel)]="missingReceiverData['gender']"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      }
                      @if (isMissingReceiverField('nationality')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Nationality <span class="text-rose-500">*</span></label>
                          <select [(ngModel)]="missingReceiverData['nationality']"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                            <option value="">Select nationality</option>
                            @for (c of countries; track c.name) {
                              <option [value]="c.name">{{ c.name }}</option>
                            }
                          </select>
                        </div>
                      }
                      @if (isMissingReceiverField('dateOfBirth')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Date of Birth <span class="text-rose-500">*</span></label>
                          <input type="date" [(ngModel)]="missingReceiverData['dateOfBirth']"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"/>
                        </div>
                      }
                      @if (isMissingReceiverField('occupation')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">Occupation <span class="text-rose-500">*</span></label>
                          <input type="text" [(ngModel)]="missingReceiverData['occupation']" placeholder="Occupation"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"/>
                        </div>
                      }
                      @if (isMissingReceiverField('idDocumentType')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">ID Type <span class="text-rose-500">*</span></label>
                          <select [(ngModel)]="missingReceiverData['idDocumentType']"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                            <option value="">Select ID type</option>
                            @for (t of idTypes; track t.value) {
                              <option [value]="t.value">{{ t.label ?? t.value }}</option>
                            }
                          </select>
                        </div>
                      }
                      @if (isMissingReceiverField('idDocumentNumber')) {
                        <div>
                          <label class="block text-xs font-medium text-amber-800 dark:text-amber-300 mb-1">ID Number <span class="text-rose-500">*</span></label>
                          <input type="text" [(ngModel)]="missingReceiverData['idDocumentNumber']" placeholder="ID number"
                            class="w-full px-3 py-2 rounded-xl border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"/>
                        </div>
                      }
                    </div>
                    <button (click)="saveMissingReceiverFields()" [disabled]="savingMissingReceiver"
                      class="mt-4 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-semibold text-sm transition-colors">
                      {{ savingMissingReceiver ? 'Saving...' : 'Save & Continue' }}
                    </button>
                  </div>
                }

                <!-- Payout account (bank/cash/wallet) -->

                <!-- Bank Transfer: saved account summary + swap panel + new form -->
                @if (isBankTransfer()) {
                  @let bkRawName = selectedSavedDetail?.bankName   || transactionPayoutDetails.bankName;
                  @let bkName   = bkRawName || resolveDisplayBankName(transactionPayoutDetails.bankId ?? selectedSavedDetail?.bankId, null);
                  @let bkCode   = selectedSavedDetail?.bankCode   || transactionPayoutDetails.bankCode;
                  @let bkAcc    = selectedSavedDetail?.accountNumber || transactionPayoutDetails.accountNumber;
                  @let bkBranch = selectedSavedDetail?.branchName || transactionPayoutDetails.branchName;

                  @if (hasSavedPayoutData()) {
                    <!-- Summary card -->
                    <div class="rounded-xl border border-indigo-200 dark:border-indigo-800/50 overflow-hidden mb-3">
                      <div class="flex items-center justify-between px-3 py-2 bg-indigo-50 dark:bg-indigo-950/50 border-b border-indigo-200 dark:border-indigo-800/50">
                        <div class="flex items-center gap-1.5">
                          <svg class="w-3.5 h-3.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                          </svg>
                          <span class="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Payout Account</span>
                        </div>
                        <button (click)="togglePayoutSwapPanel()"
                          class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors">
                          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>
                          </svg>
                          Change
                        </button>
                      </div>
                      <div class="px-3 py-2.5 bg-white dark:bg-gray-900 grid grid-cols-2 gap-x-4 gap-y-1.5">
                        @if (bkName) {
                          <div>
                            <p class="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Bank</p>
                            <p class="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">{{ bkName }}</p>
                          </div>
                        }
                        @if (bkCode) {
                          <div>
                            <p class="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Code</p>
                            <p class="text-xs font-semibold text-gray-800 dark:text-gray-200 font-mono">{{ bkCode }}</p>
                          </div>
                        }
                        @if (bkAcc) {
                          <div>
                            <p class="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Account</p>
                            <p class="text-xs font-semibold text-gray-800 dark:text-gray-200 font-mono">\xB7\xB7\xB7\xB7 {{ bkAcc | slice:-4 }}</p>
                          </div>
                        }
                        @if (bkBranch) {
                          <div>
                            <p class="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Branch</p>
                            <p class="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">{{ bkBranch }}</p>
                          </div>
                        }
                      </div>
                    </div>
                  }

                  <!-- Swap panel: saved accounts list -->
                  @if (showPayoutSwapPanel) {
                    <div class="mb-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
                      <div class="px-4 pt-3 pb-2 border-b border-gray-100 dark:border-gray-800">
                        <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Saved Accounts</p>
                      </div>
                      <div class="p-2 space-y-0.5">
                        @for (d of savedPayoutDetails; track d.id) {
                          <button (click)="selectSavedDetail(d)"
                            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left"
                            [class]="selectedSavedDetail?.id === d.id
                              ? 'bg-indigo-50 dark:bg-indigo-900/25'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-800/60'">
                            <div class="w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center"
                              [class]="selectedSavedDetail?.id === d.id ? 'border-indigo-500' : 'border-gray-300 dark:border-gray-600'">
                              @if (selectedSavedDetail?.id === d.id) {
                                <div class="w-2 h-2 rounded-full bg-indigo-500"></div>
                              }
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{{ d.bankName }}</p>
                              @if (d.accountNumber) {
                                <p class="text-xs text-gray-400 font-mono">{{ d.accountNumber }}</p>
                              }
                            </div>
                          </button>
                        }
                      </div>
                      <div class="px-2 pb-2">
                        <button (click)="useNewPayoutDetail()"
                          class="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-dashed border-indigo-300 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/>
                          </svg>
                          Add new account
                        </button>
                      </div>
                    </div>
                  }

                  <!-- New account form (shown when no saved detail or agent clicked "add new") -->
                  @if (showNewAccountForm || (!selectedSavedDetail && savedPayoutDetails.length === 0)) {
                    <div class="bg-gray-50 dark:bg-gray-800/60 rounded-2xl p-4 mb-4 space-y-3">
                      <p class="text-xs font-semibold text-gray-600 dark:text-gray-400">Bank Details</p>
                      @if (payoutBanks.length > 0) {
                        <div>
                          <label class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Bank <span class="text-rose-500">*</span></label>
                          <select (change)="onPayoutBankSelectedTxn(payoutBanks[$any($event.target).selectedIndex - 1])"
                            class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
                            <option value="">Select bank</option>
                            @for (bank of payoutBanks; track bank.id) {
                              <option [value]="bank.id">{{ bank.bankName }}</option>
                            }
                          </select>
                        </div>
                      } @else {
                        <div class="grid grid-cols-2 gap-2">
                          <div>
                            <label class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Bank Name</label>
                            <input type="text" [(ngModel)]="transactionPayoutDetails.bankName" placeholder="Bank name"
                              class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                          </div>
                          <div>
                            <label class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Bank Code</label>
                            <input type="text" [(ngModel)]="transactionPayoutDetails.bankCode" placeholder="SWIFT/Code"
                              class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                          </div>
                        </div>
                      }
                      <!-- Branch (auto-opens popup; shown after a bank with branches is selected) -->
                      @if (allBranches.length > 0 && branchContext === 'txn') {
                        <div>
                          <label class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Branch <span class="text-rose-500">*</span></label>
                          @if (transactionPayoutDetails.branchName) {
                            <div class="flex items-center gap-2">
                              <span class="flex-1 px-3 py-2 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/50 text-sm font-medium text-indigo-700 dark:text-indigo-300 truncate">
                                {{ transactionPayoutDetails.branchName }}
                              </span>
                              <button type="button" (click)="branchContext = 'txn'; showBranchPopup = true"
                                class="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shrink-0">
                                Change
                              </button>
                            </div>
                          } @else {
                            <button type="button" (click)="branchContext = 'txn'; showBranchPopup = true"
                              class="w-full px-3 py-2 rounded-xl border-2 border-dashed border-indigo-300 dark:border-indigo-700 text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors flex items-center justify-center gap-2">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                              </svg>
                              Select Branch
                            </button>
                          }
                        </div>
                      }
                      <div>
                        <label class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Account Number <span class="text-rose-500">*</span></label>
                        <input type="text" [(ngModel)]="transactionPayoutDetails.accountNumber" placeholder="Account number"
                          class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                    </div>
                  }
                }

                <!-- Cash Pickup: pro-max location selector -->
                @if (isCashTransfer()) {

                  <!-- MoneyGram cash: location already selected on step 0, just show static summary -->
                  @if (isMgCashTransfer()) {
                    <div class="rounded-xl border border-emerald-200 dark:border-emerald-800/50 overflow-hidden mb-3">
                      <div class="flex items-center gap-2 px-3 py-2 bg-emerald-50 dark:bg-emerald-950/50 border-b border-emerald-200 dark:border-emerald-800/50">
                        <svg class="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Cash Pickup via MoneyGram</span>
                      </div>
                      <div class="px-3 py-2.5 bg-white dark:bg-surface-900">
                        <p class="text-sm font-semibold text-surface-800 dark:text-surface-100">{{ store.paymentMethodName() || store.serviceOptionCode() }}</p>
                        @if (store.serviceOptionCode()) {
                          <p class="text-[10px] text-surface-400 dark:text-surface-500 uppercase tracking-wider mt-0.5">{{ store.serviceOptionCode() }}</p>
                        }
                      </div>
                    </div>
                  } @else {

                  @let csName = transactionPayoutDetails.bankName || selectedSavedDetail?.bankName;
                  @let csCode = transactionPayoutDetails.bankCode || selectedSavedDetail?.bankCode;

                  <!-- Selected location summary card -->
                  @if (csName && !showCashSwapPanel) {
                    <div class="rounded-xl border border-emerald-200 dark:border-emerald-800/50 overflow-hidden mb-3">
                      <div class="flex items-center justify-between px-3 py-2 bg-emerald-50 dark:bg-emerald-950/50 border-b border-emerald-200 dark:border-emerald-800/50">
                        <div class="flex items-center gap-1.5">
                          <svg class="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                          <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Cash Pickup Location</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <!-- Swap: previously used locations for same partner+country+method -->
                          @if (savedPayoutDetails.length > 0) {
                            <button (click)="toggleCashSavedPanel()"
                              [class]="showCashSavedPanel
                                ? 'flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-600 transition-colors'
                                : 'flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors'">
                              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                              </svg>
                              Swap
                            </button>
                          }
                          <button (click)="toggleCashSwapPanel()"
                            class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors">
                            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>
                            </svg>
                            Change
                          </button>
                        </div>
                      </div>
                      <div class="px-3 py-2.5 bg-white dark:bg-gray-900 flex items-center gap-3">
                        <div class="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center shrink-0">
                          <svg class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                        </div>
                        <div class="min-w-0">
                          <p class="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">{{ csName }}</p>
                          @if (csCode) {
                            <p class="text-[10px] text-gray-400 font-mono mt-0.5">{{ csCode }}</p>
                          }
                        </div>
                        <div class="ml-auto shrink-0">
                          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                            <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            Selected
                          </span>
                        </div>
                      </div>
                    </div>
                  }

                  <!-- Swap panel: previously used locations (same partner + country + payment method) -->
                  @if (showCashSavedPanel && savedPayoutDetails.length > 0) {
                    <div class="mb-3 rounded-2xl border border-indigo-200 dark:border-indigo-700/60 bg-white dark:bg-gray-900 shadow-sm overflow-hidden" @slideDown>
                      <div class="px-4 pt-3 pb-2 border-b border-indigo-100 dark:border-indigo-800/60 flex items-center justify-between">
                        <div class="flex items-center gap-1.5">
                          <svg class="w-3.5 h-3.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <p class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Previously Used</p>
                        </div>
                        <p class="text-[10px] text-gray-400">{{ store.receiverCountry() }} \xB7 {{ store.paymentMethodName() }}</p>
                      </div>
                      <div class="p-2 space-y-0.5">
                        @for (d of savedPayoutDetails; track d.id) {
                          @let isSavedActive = selectedSavedDetail?.id === d.id && !transactionPayoutDetails.bankId;
                          <button (click)="selectCashSavedDetail(d)"
                            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left relative overflow-hidden"
                            [class]="isSavedActive ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/25 dark:to-purple-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-800/60'">
                            @if (isSavedActive) {
                              <div class="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-r-full bg-indigo-500"></div>
                            }
                            <div class="w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center"
                              [class]="isSavedActive ? 'border-indigo-500' : 'border-gray-300 dark:border-gray-600'">
                              @if (isSavedActive) { <div class="w-2 h-2 rounded-full bg-indigo-500"></div> }
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{{ d.bankName }}</p>
                              @if (d.bankCode) {
                                <p class="text-xs text-gray-400 font-mono">{{ d.bankCode }}</p>
                              }
                            </div>
                            @if (isSavedActive) {
                              <svg class="w-4 h-4 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                              </svg>
                            }
                          </button>
                        }
                      </div>
                    </div>
                  }

                  <!-- Not selected state -->
                  @if (!csName && !showCashSwapPanel && payoutCashLocations.length > 0) {
                    <button (click)="showCashSwapPanel = true"
                      class="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 border-dashed border-rose-300 dark:border-rose-700 bg-rose-50/50 dark:bg-rose-950/20 hover:border-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all mb-3">
                      <div class="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div class="flex-1 text-left">
                        <p class="text-sm font-semibold text-rose-600 dark:text-rose-400">Select Cash Pickup Location</p>
                        <p class="text-xs text-rose-400 dark:text-rose-500">Required \u2014 tap to choose a payout location</p>
                      </div>
                      <svg class="w-4 h-4 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  }

                  <!-- Location picker panel -->
                  @if (showCashSwapPanel || (!csName && payoutCashLocations.length > 0)) {
                    <div class="mb-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden" @slideDown>
                      <div class="px-4 pt-3 pb-2 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                        <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          <svg class="w-3 h-3 inline mr-1 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          </svg>
                          Available Locations
                        </p>
                        @if (showCashSwapPanel) {
                          <button (click)="showCashSwapPanel = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                          </button>
                        }
                      </div>
                      @if (payoutCashLocations.length > 0) {
                        <div class="p-2 space-y-0.5 max-h-52 overflow-y-auto">
                          @for (loc of payoutCashLocations; track loc.id) {
                            @let isSelected = transactionPayoutDetails.bankId === loc.id;
                            <button (click)="onCashLocationSelectedTxn(loc)"
                              class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left"
                              [class]="isSelected ? 'bg-emerald-50 dark:bg-emerald-900/25' : 'hover:bg-gray-50 dark:hover:bg-gray-800/60'">
                              <div class="w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center"
                                [class]="isSelected ? 'border-emerald-500' : 'border-gray-300 dark:border-gray-600'">
                                @if (isSelected) {
                                  <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                                }
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{{ loc.bankName }}</p>
                                @if (loc.bankCode) {
                                  <p class="text-xs text-gray-400 font-mono">{{ loc.bankCode }}</p>
                                }
                              </div>
                              @if (isSelected) {
                                <svg class="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                              }
                            </button>
                          }
                        </div>
                        <!-- Saved locations from prior transactions -->
                        @if (savedPayoutDetails.length > 0) {
                          <div class="border-t border-gray-100 dark:border-gray-800 px-4 pt-2 pb-1">
                            <p class="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">Previously Used</p>
                          </div>
                          <div class="px-2 pb-2 space-y-0.5">
                            @for (d of savedPayoutDetails; track d.id) {
                              @let isSaved = selectedSavedDetail?.id === d.id;
                              <button (click)="selectCashSavedDetail(d)"
                                class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left"
                                [class]="isSaved ? 'bg-emerald-50 dark:bg-emerald-900/25' : 'hover:bg-gray-50 dark:hover:bg-gray-800/60'">
                                <div class="w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center"
                                  [class]="isSaved ? 'border-emerald-500' : 'border-gray-300 dark:border-gray-600'">
                                  @if (isSaved) { <div class="w-2 h-2 rounded-full bg-emerald-500"></div> }
                                </div>
                                <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{{ d.bankName }}</p>
                                </div>
                              </button>
                            }
                          </div>
                        }
                      } @else {
                        <div class="p-4 flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400">
                          <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/>
                          </svg>
                          No cash locations configured. Use Admin \u2192 MoneyGram \u2192 Seed Cash Locations.
                        </div>
                      }
                    </div>
                  }

                  <!-- No locations at all -->
                  @if (!csName && payoutCashLocations.length === 0 && savedPayoutDetails.length === 0) {
                    <div class="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 mb-3">
                      <svg class="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/>
                      </svg>
                      <p class="text-xs text-amber-700 dark:text-amber-300">No cash pickup locations configured. Contact admin to seed locations via MoneyGram.</p>
                    </div>
                  }
                  } <!-- end @else for non-MG cash -->
                }

                <!-- Wallet Transfer -->
                @if (isWalletTransfer()) {
                  <div class="bg-gray-50 dark:bg-gray-800/60 rounded-2xl p-4 mb-4">
                    <p class="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3">Mobile Wallet</p>
                    @if (payoutLocations.length > 0) {
                      <div class="mb-3">
                        <label class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Provider <span class="text-rose-500">*</span></label>
                        <select (change)="onLocationSelectedTxn(payoutLocations[$any($event.target).selectedIndex - 1])"
                          class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
                          <option value="">Select wallet provider</option>
                          @for (loc of payoutLocations; track loc.id) {
                            <option [value]="loc.id">{{ loc.locationName }}</option>
                          }
                        </select>
                      </div>
                    } @else {
                      <p class="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5 mb-3">
                        <svg class="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/>
                        </svg>
                        No wallet providers configured for this payout route.
                      </p>
                    }
                    <div>
                      <label class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Wallet Number <span class="text-rose-500">*</span></label>
                      <input type="text" [(ngModel)]="transactionPayoutDetails.accountNumber" placeholder="Wallet number"
                        class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                    </div>
                  </div>
                }
              }

              <!-- Payment method selector (fallback if not passed from calculator) -->
              @if (!store.paymentMethodName()) {
                <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-4 mb-4">
                  <p class="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">Select Payment Method <span class="text-rose-500">*</span></p>
                  <select [(ngModel)]="selectedPaymentMethodId" (ngModelChange)="onPaymentMethodChange()"
                    class="w-full px-3 py-2.5 rounded-xl border border-amber-300 dark:border-amber-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option [value]="null">Select method</option>
                    @for (m of paymentMethods; track m.id) {
                      <option [value]="m.id">{{ m.name }}</option>
                    }
                  </select>
                </div>
              }

              <!-- Receiver search -->
              @if (!store.selectedReceiver()) {
                <div class="relative mb-4">
                  <input type="text" [(ngModel)]="receiverSearch"
                    (input)="filterReceivers()" (focus)="filterReceivers()" (blur)="hideReceiverDropdown()"
                    placeholder="Search receiver by name or phone..."
                    class="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"/>
                  <svg class="absolute left-3 top-3.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  @if (showReceiverDropdown && filteredReceivers.length > 0) {
                    <div class="absolute z-20 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg max-h-56 overflow-y-auto">
                      @for (r of filteredReceivers; track r.id) {
                        <button (mousedown)="selectReceiver(r)" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors text-left">
                          <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 font-bold text-sm shrink-0">
                            {{ r.fullName.charAt(0).toUpperCase() }}
                          </div>
                          <div>
                            <p class="text-sm font-medium text-gray-900 dark:text-white">{{ r.fullName }}</p>
                            <p class="text-xs text-gray-400">{{ r.phone }} \xB7 {{ r.country }}</p>
                          </div>
                        </button>
                      }
                    </div>
                  }
                </div>

                <button (click)="showCreateReceiver = !showCreateReceiver"
                  class="w-full py-2.5 rounded-2xl border border-dashed border-gray-300 dark:border-gray-600 text-sm text-gray-500 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 transition-colors mb-4">
                  + Create New Receiver
                </button>

                @if (showCreateReceiver) {
                  <div class="bg-gray-50 dark:bg-gray-800/60 rounded-2xl p-5 space-y-3" @slideDown>
                    <p class="text-sm font-semibold text-gray-700 dark:text-gray-300">New Receiver</p>
                    <div class="grid grid-cols-2 gap-3">
                      <div class="col-span-2">
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Full Name <span class="text-rose-500">*</span></label>
                        <input type="text" [formControl]="receiverForm.controls.fullName" placeholder="Sara Ahmed"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Phone <span class="text-rose-500">*</span></label>
                        <input type="tel" [formControl]="receiverForm.controls.phone" placeholder="+977..."
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Country</label>
                        <select [formControl]="receiverForm.controls.country"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
                          <option value="">Select country</option>
                          @for (c of countries; track c.name) {
                            <option [value]="c.name">{{ c.name }}</option>
                          }
                        </select>
                      </div>
                      <div class="col-span-2">
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Address @if (isReceiverFieldRequired('address')) { <span class="text-rose-500">*</span> }
                        </label>
                        <input type="text" [formControl]="receiverForm.controls.address" placeholder="Street address"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          City @if (isReceiverFieldRequired('city')) { <span class="text-rose-500">*</span> }
                        </label>
                        <input type="text" [formControl]="receiverForm.controls.city" placeholder="City"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      <div>
                        <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Postal Code @if (isReceiverFieldRequired('postalCode')) { <span class="text-rose-500">*</span> }
                        </label>
                        <input type="text" [formControl]="receiverForm.controls.postalCode" placeholder="Postal code"
                          class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      </div>
                      @if (isReceiverFieldVisible('gender')) {
                        <div>
                          <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                            Gender @if (isReceiverFieldRequired('gender')) { <span class="text-rose-500">*</span> }
                          </label>
                          <select [formControl]="receiverForm.controls.gender"
                            class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      }
                      @if (isReceiverFieldVisible('nationality')) {
                        <div>
                          <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                            Nationality @if (isReceiverFieldRequired('nationality')) { <span class="text-rose-500">*</span> }
                          </label>
                          <select [formControl]="receiverForm.controls.nationality"
                            class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
                            <option value="">Select nationality</option>
                            @for (c of countries; track c.name) {
                              <option [value]="c.name">{{ c.name }}</option>
                            }
                          </select>
                        </div>
                      }
                      @if (isReceiverFieldVisible('dateOfBirth')) {
                        <div>
                          <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                            Date of Birth @if (isReceiverFieldRequired('dateOfBirth')) { <span class="text-rose-500">*</span> }
                          </label>
                          <input type="date" [formControl]="receiverForm.controls.dateOfBirth"
                            class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                        </div>
                      }
                      @if (isReceiverFieldVisible('occupation')) {
                        <div>
                          <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                            Occupation @if (isReceiverFieldRequired('occupation')) { <span class="text-rose-500">*</span> }
                          </label>
                          <input type="text" [formControl]="receiverForm.controls.occupation" placeholder="Occupation"
                            class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                        </div>
                      }
                      @if (isReceiverFieldVisible('idDocumentType')) {
                        <div>
                          <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                            ID Type @if (isReceiverFieldRequired('idDocumentType')) { <span class="text-rose-500">*</span> }
                          </label>
                          <select [formControl]="receiverForm.controls.idDocumentType"
                            class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
                            <option value="">Select ID type</option>
                            @for (t of idTypes; track t.value) {
                              <option [value]="t.value">{{ t.label ?? t.value }}</option>
                            }
                          </select>
                        </div>
                      }
                      @if (isReceiverFieldVisible('idDocumentNumber')) {
                        <div>
                          <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                            ID Number @if (isReceiverFieldRequired('idDocumentNumber')) { <span class="text-rose-500">*</span> }
                          </label>
                          <input type="text" [formControl]="receiverForm.controls.idDocumentNumber" placeholder="ID number"
                            class="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                        </div>
                      }

                    </div>
                    <button (click)="saveNewReceiver()" [disabled]="savingReceiver"
                      class="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold text-sm transition-colors">
                      {{ savingReceiver ? 'Creating...' : 'Create Receiver' }}
                    </button>
                  </div>
                }
              }

              <!-- Payout account required hint -->
              @if (store.selectedReceiver() && store.missingReceiverFields().length === 0 && !hasValidPayoutAccount()) {
                <div class="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 text-xs text-amber-700 dark:text-amber-300">
                  <svg class="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/>
                  </svg>
                  @if (isBankTransfer()) { Payout account required \u2014 select a saved account or enter bank details. }
                  @else if (isCashTransfer()) { Cash pickup location required \u2014 select a payout location. }
                  @else if (isWalletTransfer()) { Wallet number required \u2014 select a saved account or enter wallet number. }
                </div>
              }

              <button (click)="proceedToCompliance()"
                [disabled]="!canProceed()"
                class="w-full py-3.5 rounded-2xl font-semibold text-sm transition-all mt-2"
                [class]="canProceed()
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'">
                Continue to Compliance \u2192
              </button>
            }
          </div>
        </div>
      }

      <!-- \u2500\u2500\u2500 STEP 2: Compliance \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      @if (store.currentStep() === 2) {
        <div class="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6" @slideDown>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-5">Compliance Details</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Purpose of Transfer <span class="text-rose-500">*</span></label>
              <select [(ngModel)]="purpose" class="w-full px-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option value="">Select purpose...</option>
                @for (opt of purposeOptions; track opt) {
                  <option [value]="opt">{{ opt }}</option>
                }
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Source of Funds <span class="text-rose-500">*</span></label>
              <select [(ngModel)]="sourceOfFunds" class="w-full px-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option value="">Select source...</option>
                @for (opt of sourceOptions; track opt) {
                  <option [value]="opt">{{ opt }}</option>
                }
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Relationship to Receiver <span class="text-rose-500">*</span></label>
              <select [(ngModel)]="relationship" class="w-full px-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option value="">Select relationship...</option>
                @for (opt of relationshipOptions; track opt) {
                  <option [value]="opt">{{ opt }}</option>
                }
              </select>
            </div>
          </div>
          <button (click)="proceedToReview()" [disabled]="!purpose || !sourceOfFunds || !relationship"
            class="w-full mt-6 py-3.5 rounded-2xl font-semibold text-sm transition-all"
            [class]="purpose && sourceOfFunds && relationship
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'">
            Review & Confirm \u2192
          </button>
        </div>
      }

      <!-- \u2500\u2500\u2500 STEP 3: Review + Submit \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      @if (store.currentStep() === 3 && !store.successResult()) {
        <div class="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6" @slideDown>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-5">Review Transaction</h2>

          <div class="space-y-3 text-sm mb-6">
            <div class="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <span class="text-gray-500 dark:text-gray-400">Sender</span>
              <span class="font-medium text-gray-900 dark:text-white">{{ store.selectedCustomer()?.fullName }}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <span class="text-gray-500 dark:text-gray-400">Receiver</span>
              <span class="font-medium text-gray-900 dark:text-white">{{ store.selectedReceiver()?.fullName }}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <span class="text-gray-500 dark:text-gray-400">Send Amount</span>
              <span class="font-bold text-gray-900 dark:text-white">{{ store.sendAmount() | number:'1.2-2' }} {{ store.sendCurrency() }}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <span class="text-gray-500 dark:text-gray-400">Total Payable</span>
              <span class="font-bold text-gray-900 dark:text-white">{{ store.totalPayable() | number:'1.2-2' }} {{ store.sendCurrency() }}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <span class="text-gray-500 dark:text-gray-400">Receiver Gets</span>
              <span class="font-bold text-emerald-600">{{ store.receiveAmount() | number:'1.2-2' }} {{ store.receiveCurrency() }}</span>
            </div>
            <div class="flex justify-between py-2">
              <span class="text-gray-500 dark:text-gray-400">Purpose</span>
              <span class="font-medium text-gray-900 dark:text-white">{{ purpose }}</span>
            </div>
          </div>

          <button (click)="openPinDialog()" [disabled]="store.submitting()"
            class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold text-sm transition-colors">
            {{ store.submitting() ? 'Submitting...' : 'Confirm & Send' }}
          </button>
        </div>
      }
    }
  </div>

<!-- PIN Dialog -->
@if (showPinDialog) {
  <div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
    <div class="w-full max-w-sm bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-2xl" @slideDown>
      <h3 class="text-base font-bold text-gray-900 dark:text-white mb-1">
        {{ hasPin ? 'Enter Transaction PIN' : 'Set Transaction PIN' }}
      </h3>
      <p class="text-xs text-gray-500 dark:text-gray-400 mb-5">
        {{ hasPin ? 'Enter your 4-digit transaction PIN to confirm.' : 'Set a PIN to secure your transactions.' }}
      </p>
      <input type="password" [(ngModel)]="pinInput" maxlength="6" placeholder="\u2022\u2022\u2022\u2022"
        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-center text-xl tracking-widest font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-3"/>
      @if (!hasPin) {
        <input type="password" [(ngModel)]="pinConfirm" maxlength="6" placeholder="Confirm PIN \u2022\u2022\u2022\u2022"
          class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-center text-xl tracking-widest font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-3"/>
      }
      @if (pinError) {
        <p class="text-xs text-rose-500 mb-3">{{ pinError }}</p>
      }
      <div class="flex gap-3">
        <button (click)="showPinDialog = false" class="flex-1 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Cancel</button>
        <button (click)="submitPin()" class="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors">Confirm</button>
      </div>
    </div>
  </div>
}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThirdPartySendComponent, { className: "ThirdPartySendComponent", filePath: "src/app/pages/agent/third-party-send/third-party-send.component.ts", lineNumber: 34 });
})();
export {
  ThirdPartySendComponent
};
//# sourceMappingURL=chunk-BMOUOJE3.js.map
