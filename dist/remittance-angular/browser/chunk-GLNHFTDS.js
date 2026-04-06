import {
  DatePicker
} from "./chunk-5EFJYZR4.js";
import "./chunk-5WEXKBPK.js";
import "./chunk-3CFLOBS2.js";
import {
  external_exports
} from "./chunk-RZ6YVYLJ.js";
import {
  AppSettingsService
} from "./chunk-3AILC626.js";
import {
  Router,
  RouterModule
} from "./chunk-ZQKQC2T6.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-D3SW2Q36.js";
import {
  NotificationService
} from "./chunk-3AICMGEY.js";
import "./chunk-TLG473HR.js";
import {
  ApiService
} from "./chunk-JPFLOAIK.js";
import {
  AuthStateService
} from "./chunk-LDWTK5YJ.js";
import "./chunk-R63TWOS6.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-WBW3ZP3W.js";
import {
  Component,
  DestroyRef,
  Injectable,
  Subject,
  computed,
  debounceTime,
  inject,
  isSignal,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EU7HC72Q.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-S5KMCARS.js";

// node_modules/@ngrx/signals/fesm2022/ngrx-signals.mjs
function toDeepSignal(signal2) {
  const value = untracked(() => signal2());
  if (!isRecord(value)) {
    return signal2;
  }
  return new Proxy(signal2, {
    get(target, prop) {
      if (!(prop in value)) {
        return target[prop];
      }
      if (!isSignal(target[prop])) {
        Object.defineProperty(target, prop, {
          value: computed(() => target()[prop]),
          configurable: true
        });
      }
      return toDeepSignal(target[prop]);
    }
  });
}
var nonRecords = [WeakSet, WeakMap, Promise, Date, Error, RegExp, ArrayBuffer, DataView, Function];
function isRecord(value) {
  if (value === null || typeof value !== "object" || isIterable(value)) {
    return false;
  }
  let proto = Object.getPrototypeOf(value);
  if (proto === Object.prototype) {
    return true;
  }
  while (proto && proto !== Object.prototype) {
    if (nonRecords.includes(proto.constructor)) {
      return false;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return proto === Object.prototype;
}
function isIterable(value) {
  return typeof value?.[Symbol.iterator] === "function";
}
var STATE_WATCHERS = /* @__PURE__ */ new WeakMap();
var STATE_SOURCE = Symbol("STATE_SOURCE");
function patchState(stateSource, ...updaters) {
  stateSource[STATE_SOURCE].update((currentState) => updaters.reduce((nextState, updater) => __spreadValues(__spreadValues({}, nextState), typeof updater === "function" ? updater(nextState) : updater), currentState));
  notifyWatchers(stateSource);
}
function getState(stateSource) {
  return stateSource[STATE_SOURCE]();
}
function getWatchers(stateSource) {
  return STATE_WATCHERS.get(stateSource[STATE_SOURCE]) || [];
}
function notifyWatchers(stateSource) {
  const watchers = getWatchers(stateSource);
  for (const watcher of watchers) {
    const state = untracked(() => getState(stateSource));
    watcher(state);
  }
}
function signalStore(...args) {
  const signalStoreArgs = [...args];
  const config = typeof signalStoreArgs[0] === "function" ? {} : signalStoreArgs.shift();
  const features = signalStoreArgs;
  class SignalStore {
    constructor() {
      const innerStore = features.reduce((store, feature) => feature(store), getInitialInnerStore());
      const {
        stateSignals,
        props,
        methods,
        hooks
      } = innerStore;
      const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, stateSignals), props), methods);
      this[STATE_SOURCE] = innerStore[STATE_SOURCE];
      for (const key of Reflect.ownKeys(storeMembers)) {
        this[key] = storeMembers[key];
      }
      const {
        onInit,
        onDestroy
      } = hooks;
      if (onInit) {
        onInit();
      }
      if (onDestroy) {
        inject(DestroyRef).onDestroy(onDestroy);
      }
    }
    /** @nocollapse */
    static \u0275fac = function SignalStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SignalStore)();
    };
    /** @nocollapse */
    static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: SignalStore,
      factory: SignalStore.\u0275fac,
      providedIn: config.providedIn || null
    });
  }
  (() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalStore, [{
      type: Injectable,
      args: [{
        providedIn: config.providedIn || null
      }]
    }], () => [], null);
  })();
  return SignalStore;
}
function getInitialInnerStore() {
  return {
    [STATE_SOURCE]: signal({}),
    stateSignals: {},
    props: {},
    methods: {},
    hooks: {}
  };
}
function assertUniqueStoreMembers(store, newMemberKeys) {
  if (typeof ngDevMode === "undefined" || !ngDevMode) {
    return;
  }
  const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, store.stateSignals), store.props), store.methods);
  const overriddenKeys = Reflect.ownKeys(storeMembers).filter((memberKey) => newMemberKeys.includes(memberKey));
  if (overriddenKeys.length > 0) {
    console.warn("@ngrx/signals: SignalStore members cannot be overridden.", "Trying to override:", overriddenKeys.map((key) => String(key)).join(", "));
  }
}
function withProps(propsFactory) {
  return (store) => {
    const props = propsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    assertUniqueStoreMembers(store, Reflect.ownKeys(props));
    return __spreadProps(__spreadValues({}, store), {
      props: __spreadValues(__spreadValues({}, store.props), props)
    });
  };
}
function withComputed(signalsFactory) {
  return withProps(signalsFactory);
}
function withMethods(methodsFactory) {
  return (store) => {
    const methods = methodsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    assertUniqueStoreMembers(store, Reflect.ownKeys(methods));
    return __spreadProps(__spreadValues({}, store), {
      methods: __spreadValues(__spreadValues({}, store.methods), methods)
    });
  };
}
function withState(stateOrFactory) {
  return (store) => {
    const state = typeof stateOrFactory === "function" ? stateOrFactory() : stateOrFactory;
    const stateKeys = Reflect.ownKeys(state);
    assertUniqueStoreMembers(store, stateKeys);
    store[STATE_SOURCE].update((currentState) => __spreadValues(__spreadValues({}, currentState), state));
    const stateSignals = stateKeys.reduce((acc, key) => {
      const sliceSignal = computed(() => store[STATE_SOURCE]()[key]);
      return __spreadProps(__spreadValues({}, acc), {
        [key]: toDeepSignal(sliceSignal)
      });
    }, {});
    return __spreadProps(__spreadValues({}, store), {
      stateSignals: __spreadValues(__spreadValues({}, store.stateSignals), stateSignals)
    });
  };
}

// src/app/pages/agent/send-money/send-money.store.ts
var initialState = {
  currentStep: 0,
  selectedCustomer: null,
  selectedReceiver: null,
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
var SendMoneyStore = signalStore({ providedIn: "scoped" }, withState(initialState), withComputed((state) => ({
  canProceedStep1: computed(() => {
    return !!state.selectedCustomer() && !state.kycWarning() && !state.dobWarning();
  }),
  canProceedStep2: computed(() => {
    return state.calculationDone() && !state.complianceBlocked() && !state.balanceWarning() && !!state.selectedPartner() && !!state.selectedPayoutModeId() && state.sendAmount() > 0 && !!state.selectedPaymentMethodId() && !state.agentBalanceZero();
  }),
  canProceedStep3: computed(() => {
    return !!state.selectedReceiver();
  }),
  isComplete: computed(() => {
    return state.currentStep() === 3 && !!state.successResult();
  })
})), withMethods((store) => ({
  setStep(step) {
    patchState(store, { currentStep: step });
  },
  nextStep() {
    patchState(store, { currentStep: store.currentStep() + 1 });
  },
  prevStep() {
    if (store.currentStep() > 0) {
      patchState(store, { currentStep: store.currentStep() - 1 });
    }
  },
  setSelectedCustomer(customer) {
    patchState(store, { selectedCustomer: customer });
  },
  setSelectedReceiver(receiver) {
    patchState(store, { selectedReceiver: receiver });
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
    patchState(store, { matchedCorridor: corridor, selectedPartner: partner, selectedPayoutModeId: payoutModeId });
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
    patchState(store, { successResult: result, currentStep: result ? 3 : store.currentStep() });
  },
  reset() {
    patchState(store, __spreadValues({}, initialState));
  }
})));

// src/app/pages/agent/send-money/send-money.component.ts
var _c0 = () => ({ standalone: true });
function SendMoneyComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 137)(1, "div", 138)(2, "div", 139)(3, "div", 140);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 141);
    \u0275\u0275element(5, "path", 142);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 143);
    \u0275\u0275text(7, "Transaction Submitted!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 144);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 145)(11, "div", 146)(12, "div", 147)(13, "p", 148);
    \u0275\u0275text(14, "You Send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 149);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 122);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 150)(21, "div", 151);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 152);
    \u0275\u0275element(23, "path", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "p", 153);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 147)(28, "p", 148);
    \u0275\u0275text(29, "They Get");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 154);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 122);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 155)(36, "div", 156)(37, "span", 157);
    \u0275\u0275text(38, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 158);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 156)(42, "span", 157);
    \u0275\u0275text(43, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 158);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 156)(47, "span", 157);
    \u0275\u0275text(48, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 158);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 159)(52, "span", 157);
    \u0275\u0275text(53, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 160);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 161)(57, "button", 162);
    \u0275\u0275listener("click", function SendMoneyComponent_div_1_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadReceipt());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 163);
    \u0275\u0275element(59, "path", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Receipt ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(61, "button", 165);
    \u0275\u0275listener("click", function SendMoneyComponent_div_1_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startNewTransaction());
    });
    \u0275\u0275text(62, " New Transfer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Ref: ", ctx_r1.successResult.referenceNumber, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 10, ctx_r1.successResult.sendAmount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.successResult.sendCurrency);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 13, ctx_r1.successResult.exchangeRateApplied, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 16, ctx_r1.successResult.receiveAmount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.successResult.receiveCurrency);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.successResult.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.successResult.receiverName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.successResult.receiverCountry);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(ctx_r1.successResult.status));
  }
}
function SendMoneyComponent_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 174);
    \u0275\u0275text(2, "Confirm PIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_2_div_16_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
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
function SendMoneyComponent_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 179);
    \u0275\u0275element(2, "path", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pinError, " ");
  }
}
function SendMoneyComponent_div_2__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 181);
    \u0275\u0275element(1, "circle", 182)(2, "path", 183);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 166);
    \u0275\u0275listener("click", function SendMoneyComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePinDialog());
    });
    \u0275\u0275elementStart(1, "div", 167);
    \u0275\u0275listener("click", function SendMoneyComponent_div_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 168)(3, "div")(4, "h3", 169);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 170);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 171);
    \u0275\u0275listener("click", function SendMoneyComponent_div_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePinDialog());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 163);
    \u0275\u0275element(10, "path", 172);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 173)(12, "div")(13, "label", 174);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_2_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pinInput, $event) || (ctx_r1.pinInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, SendMoneyComponent_div_2_div_16_Template, 4, 1, "div", 12)(17, SendMoneyComponent_div_2_div_17_Template, 4, 1, "div", 176);
    \u0275\u0275elementStart(18, "button", 177);
    \u0275\u0275listener("click", function SendMoneyComponent_div_2_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPinSubmit());
    });
    \u0275\u0275template(19, SendMoneyComponent_div_2__svg_svg_19_Template, 3, 0, "svg", 134);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pinMode === "set" ? "Create Transaction PIN" : "Authorize Transfer", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pinMode === "set" ? "Set a 4\u20136 digit PIN to secure your transactions" : "Enter your PIN to confirm this transfer", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pinMode === "set" ? "New PIN" : "Transaction PIN", " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pinInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pinMode === "set");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pinError);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pinLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pinLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pinLoading ? "Verifying..." : ctx_r1.pinMode === "set" ? "Set PIN & Continue" : "Authorize Transfer", " ");
  }
}
function SendMoneyComponent_div_3_div_17_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Code: ", branch_r7.branchCode, "");
  }
}
function SendMoneyComponent_div_3_div_17_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 201);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(branch_r7.address);
  }
}
function SendMoneyComponent_div_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 196);
    \u0275\u0275listener("click", function SendMoneyComponent_div_3_div_17_Template_div_click_0_listener() {
      const branch_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectBranch(branch_r7));
    });
    \u0275\u0275elementStart(1, "div")(2, "p", 197);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SendMoneyComponent_div_3_div_17_p_4_Template, 2, 1, "p", 198)(5, SendMoneyComponent_div_3_div_17_p_5_Template, 2, 1, "p", 199);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 200);
    \u0275\u0275element(7, "path", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const branch_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(branch_r7.branchName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", branch_r7.branchCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", branch_r7.address);
  }
}
function SendMoneyComponent_div_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275text(1, " No branches found ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275listener("click", function SendMoneyComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBranchPopup());
    });
    \u0275\u0275elementStart(1, "div", 185);
    \u0275\u0275listener("click", function SendMoneyComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 186)(3, "div")(4, "h3", 187);
    \u0275\u0275text(5, "Select Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 188);
    \u0275\u0275listener("click", function SendMoneyComponent_div_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBranchPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 163);
    \u0275\u0275element(10, "path", 172);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 189)(12, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 190);
    \u0275\u0275element(14, "path", 191);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "input", 192);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_3_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.branchSearch, $event) || (ctx_r1.branchSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SendMoneyComponent_div_3_Template_input_input_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterBranches());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 193);
    \u0275\u0275template(17, SendMoneyComponent_div_3_div_17_Template, 8, 3, "div", 194)(18, SendMoneyComponent_div_3_div_18_Template, 2, 0, "div", 195);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.branchBank == null ? null : ctx_r1.branchBank.bankName);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.branchSearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredBranches);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredBranches.length === 0);
  }
}
function SendMoneyComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.senderCurrency, "");
  }
}
function SendMoneyComponent__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 203);
    \u0275\u0275element(1, "path", 204);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 205);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent__svg_svg_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 203);
    \u0275\u0275element(1, "path", 204);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 205);
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent__svg_svg_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 203);
    \u0275\u0275element(1, "path", 204);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 205);
    \u0275\u0275text(1, "3");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 206);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 207);
    \u0275\u0275element(2, "path", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Insufficient Balance ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent__svg_svg_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 209);
    \u0275\u0275element(1, "path", 204);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 210);
    \u0275\u0275listener("click", function SendMoneyComponent_button_53_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateCustomer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 211);
    \u0275\u0275element(2, "path", 212);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New Customer ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 214);
    \u0275\u0275element(2, "path", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.kycWarning, " ");
  }
}
function SendMoneyComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 214);
    \u0275\u0275element(2, "path", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.dobWarning, " ");
  }
}
function SendMoneyComponent_div_57_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.selectedCustomer.idDocumentType, "");
  }
}
function SendMoneyComponent_div_57_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 225);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 226);
    \u0275\u0275element(2, "path", 227);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " KYC ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 216)(1, "div", 217)(2, "div", 218);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 219)(5, "p", 220);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 68);
    \u0275\u0275text(8);
    \u0275\u0275template(9, SendMoneyComponent_div_57_span_9_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 221);
    \u0275\u0275template(11, SendMoneyComponent_div_57_span_11_Template, 4, 0, "span", 222);
    \u0275\u0275elementStart(12, "button", 223);
    \u0275\u0275listener("click", function SendMoneyComponent_div_57_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelectedCustomer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 224);
    \u0275\u0275element(14, "path", 172);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCustomer.fullName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCustomer.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCustomer.phone, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCustomer.idDocumentType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.appSettings.kycEnabled && ctx_r1.selectedCustomer.isKycVerified);
  }
}
function SendMoneyComponent_div_58_div_10_button_8_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 246);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 247);
    \u0275\u0275element(2, "path", 248);
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_58_div_10_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 242);
    \u0275\u0275listener("click", function SendMoneyComponent_div_58_div_10_button_8_Template_button_click_0_listener() {
      const c_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCustomer(c_r13));
    });
    \u0275\u0275elementStart(1, "div", 243);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "p", 244);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SendMoneyComponent_div_58_div_10_button_8_span_8_Template, 3, 0, "span", 245);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r13.fullName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r13.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r13.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.appSettings.kycEnabled && c_r13.isKycVerified);
  }
}
function SendMoneyComponent_div_58_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 235)(1, "div", 236)(2, "p", 237);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 238);
    \u0275\u0275listener("click", function SendMoneyComponent_div_58_div_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showCustomerDropdown = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 239);
    \u0275\u0275element(6, "path", 172);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 240);
    \u0275\u0275template(8, SendMoneyComponent_div_58_div_10_button_8_Template, 9, 4, "button", 241);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredCustomers.length, " result(s) found");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.filteredCustomers);
  }
}
function SendMoneyComponent_div_58_div_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' for "', ctx_r1.customerSearch, '"');
  }
}
function SendMoneyComponent_div_58_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 249)(1, "p", 122);
    \u0275\u0275text(2, "No customers found");
    \u0275\u0275template(3, SendMoneyComponent_div_58_div_11_span_3_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 250);
    \u0275\u0275listener("click", function SendMoneyComponent_div_58_div_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCreateCustomer());
    });
    \u0275\u0275text(5, " + Create new customer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.customerSearch);
  }
}
function SendMoneyComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 228)(2, "div", 229);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 230);
    \u0275\u0275element(4, "path", 191);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 231);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_58_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.customerSearch, $event) || (ctx_r1.customerSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SendMoneyComponent_div_58_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.filterCustomers();
      return \u0275\u0275resetView(ctx_r1.showCustomerDropdown = true);
    })("keyup.enter", function SendMoneyComponent_div_58_Template_input_keyup_enter_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.filterCustomers();
      return \u0275\u0275resetView(ctx_r1.showCustomerDropdown = true);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 232);
    \u0275\u0275listener("click", function SendMoneyComponent_div_58_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.filterCustomers();
      return \u0275\u0275resetView(ctx_r1.showCustomerDropdown = true);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 163);
    \u0275\u0275element(8, "path", 191);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, SendMoneyComponent_div_58_div_10_Template, 9, 2, "div", 233)(11, SendMoneyComponent_div_58_div_11_Template, 6, 1, "div", 234);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerSearch);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.showCustomerDropdown && ctx_r1.filteredCustomers.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCustomerDropdown && ctx_r1.filteredCustomers.length === 0 && ctx_r1.customers.length > 0);
  }
}
function SendMoneyComponent_div_59_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["fullName"]);
  }
}
function SendMoneyComponent_div_59_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["phone"]);
  }
}
function SendMoneyComponent_div_59_option_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 283);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("value", c_r16.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16.name);
  }
}
function SendMoneyComponent_div_59_p_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["nationality"]);
  }
}
function SendMoneyComponent_div_59_option_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 283);
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
function SendMoneyComponent_div_59_p_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["country"]);
  }
}
function SendMoneyComponent_div_59_option_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 283);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r18 = ctx.$implicit;
    \u0275\u0275property("value", t_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r18);
  }
}
function SendMoneyComponent_div_59_p_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["idDocumentType"]);
  }
}
function SendMoneyComponent_div_59_p_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["idDocumentNumber"]);
  }
}
function SendMoneyComponent_div_59_option_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 283);
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
function SendMoneyComponent_div_59_fieldset_122_img_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 290);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.frontImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function SendMoneyComponent_div_59_fieldset_122_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 291);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 292);
    \u0275\u0275element(2, "path", 293);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 294);
    \u0275\u0275text(4, "Upload front");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_59_fieldset_122_img_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 295);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.backImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function SendMoneyComponent_div_59_fieldset_122_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 291);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 292);
    \u0275\u0275element(2, "path", 293);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 294);
    \u0275\u0275text(4, "Upload back");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_59_fieldset_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "fieldset", 271)(1, "legend", 255);
    \u0275\u0275text(2, "Document Images");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 284)(4, "div")(5, "label", 174);
    \u0275\u0275text(6, "Front Side ");
    \u0275\u0275elementStart(7, "span", 40);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 285)(10, "input", 286);
    \u0275\u0275listener("change", function SendMoneyComponent_div_59_fieldset_122_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFrontImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SendMoneyComponent_div_59_fieldset_122_img_11_Template, 1, 1, "img", 287)(12, SendMoneyComponent_div_59_fieldset_122_div_12_Template, 5, 0, "div", 288);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 174);
    \u0275\u0275text(15, "Back Side");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 285)(17, "input", 286);
    \u0275\u0275listener("change", function SendMoneyComponent_div_59_fieldset_122_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBackImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, SendMoneyComponent_div_59_fieldset_122_img_18_Template, 1, 1, "img", 289)(19, SendMoneyComponent_div_59_fieldset_122_div_19_Template, 5, 0, "div", 288);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngClass", ctx_r1.frontImagePreview ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/10" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.frontImagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.frontImagePreview);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.backImagePreview ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/10" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.backImagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.backImagePreview);
  }
}
function SendMoneyComponent_div_59_div_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 296);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.customerFormError, " ");
  }
}
function SendMoneyComponent_div_59__svg_svg_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 181);
    \u0275\u0275element(1, "circle", 182)(2, "path", 183);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 251)(2, "div")(3, "h3", 252);
    \u0275\u0275text(4, "New Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 31);
    \u0275\u0275text(6, "Fill in the details to register");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 253);
    \u0275\u0275listener("click", function SendMoneyComponent_div_59_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateCustomer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 239);
    \u0275\u0275element(9, "path", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Cancel ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "form", 254)(12, "fieldset")(13, "legend", 255);
    \u0275\u0275text(14, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 38)(16, "div", 256)(17, "label", 39);
    \u0275\u0275text(18, "Full Name ");
    \u0275\u0275elementStart(19, "span", 40);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 257);
    \u0275\u0275template(22, SendMoneyComponent_div_59_p_22_Template, 2, 1, "p", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "label", 39);
    \u0275\u0275text(25, "Phone ");
    \u0275\u0275elementStart(26, "span", 40);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "input", 259);
    \u0275\u0275template(29, SendMoneyComponent_div_59_p_29_Template, 2, 1, "p", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "label", 39);
    \u0275\u0275text(32, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 260);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div")(35, "label", 39);
    \u0275\u0275text(36, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "p-datepicker", 261);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div")(39, "label", 39);
    \u0275\u0275text(40, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 262)(42, "option", 42);
    \u0275\u0275text(43, "Select gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 263);
    \u0275\u0275text(45, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 264);
    \u0275\u0275text(47, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 83);
    \u0275\u0275text(49, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div")(51, "label", 39);
    \u0275\u0275text(52, "Nationality ");
    \u0275\u0275elementStart(53, "span", 40);
    \u0275\u0275text(54, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "select", 265)(56, "option", 42);
    \u0275\u0275text(57, "Select nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, SendMoneyComponent_div_59_option_58_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, SendMoneyComponent_div_59_p_59_Template, 2, 1, "p", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div")(61, "label", 39);
    \u0275\u0275text(62, "Country ");
    \u0275\u0275elementStart(63, "span", 40);
    \u0275\u0275text(64, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "select", 266)(66, "option", 42);
    \u0275\u0275text(67, "Select country");
    \u0275\u0275elementEnd();
    \u0275\u0275template(68, SendMoneyComponent_div_59_option_68_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(69, SendMoneyComponent_div_59_p_69_Template, 2, 1, "p", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div")(71, "label", 39);
    \u0275\u0275text(72, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 267);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div")(75, "label", 39);
    \u0275\u0275text(76, "State / Province");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 268);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div")(79, "label", 39);
    \u0275\u0275text(80, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "input", 269);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 256)(83, "label", 39);
    \u0275\u0275text(84, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(85, "input", 270);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "fieldset", 271)(87, "legend", 255);
    \u0275\u0275text(88, "ID Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 38)(90, "div")(91, "label", 39);
    \u0275\u0275text(92, "Document Type ");
    \u0275\u0275elementStart(93, "span", 40);
    \u0275\u0275text(94, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "select", 272)(96, "option", 42);
    \u0275\u0275text(97, "Select type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(98, SendMoneyComponent_div_59_option_98_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(99, SendMoneyComponent_div_59_p_99_Template, 2, 1, "p", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div")(101, "label", 39);
    \u0275\u0275text(102, "Document Number ");
    \u0275\u0275elementStart(103, "span", 40);
    \u0275\u0275text(104, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(105, "input", 273);
    \u0275\u0275template(106, SendMoneyComponent_div_59_p_106_Template, 2, 1, "p", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div")(108, "label", 39);
    \u0275\u0275text(109, "Issue Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(110, "p-datepicker", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div")(112, "label", 39);
    \u0275\u0275text(113, "Expiry Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "p-datepicker", 275);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div", 256)(116, "label", 39);
    \u0275\u0275text(117, "Issuing Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "select", 276)(119, "option", 42);
    \u0275\u0275text(120, "Select country");
    \u0275\u0275elementEnd();
    \u0275\u0275template(121, SendMoneyComponent_div_59_option_121_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(122, SendMoneyComponent_div_59_fieldset_122_Template, 20, 6, "fieldset", 277)(123, SendMoneyComponent_div_59_div_123_Template, 2, 1, "div", 278);
    \u0275\u0275elementStart(124, "div", 279)(125, "button", 280);
    \u0275\u0275listener("click", function SendMoneyComponent_div_59_Template_button_click_125_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateCustomer());
    });
    \u0275\u0275text(126, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "button", 281);
    \u0275\u0275listener("click", function SendMoneyComponent_div_59_Template_button_click_127_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveNewCustomer());
    });
    \u0275\u0275template(128, SendMoneyComponent_div_59__svg_svg_128_Template, 3, 0, "svg", 134);
    \u0275\u0275text(129);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r1.customerForm);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["fullName"] ? "border-red-400 bg-red-50 dark:bg-red-900/20" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["fullName"]);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["phone"] ? "border-red-400 bg-red-50 dark:bg-red-900/20" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["phone"]);
    \u0275\u0275advance(8);
    \u0275\u0275property("maxDate", ctx_r1.maxDobDate)("showIcon", true);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["nationality"] ? "border-red-400" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["nationality"]);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["country"] ? "border-red-400" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["country"]);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["idDocumentType"] ? "border-red-400" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.idTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["idDocumentType"]);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["idDocumentNumber"] ? "border-red-400" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["idDocumentNumber"]);
    \u0275\u0275advance(4);
    \u0275\u0275property("maxDate", ctx_r1.todayDate)("showIcon", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("minDate", ctx_r1.minExpiryDate)("showIcon", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.appSettings.skipDocumentUpload);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.savingCustomer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingCustomer);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingCustomer ? "Saving..." : "Save Customer", " ");
  }
}
function SendMoneyComponent__svg_svg_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 209);
    \u0275\u0275element(1, "path", 204);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_option_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 283);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    \u0275\u0275property("value", c_r21.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r21.name);
  }
}
function SendMoneyComponent_option_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r22 = ctx.$implicit;
    \u0275\u0275property("ngValue", m_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r22.name);
  }
}
function SendMoneyComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 214);
    \u0275\u0275element(2, "path", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.routeError, " ");
  }
}
function SendMoneyComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 297);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 298);
    \u0275\u0275element(2, "circle", 182)(3, "path", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Calculating... ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 299);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 207);
    \u0275\u0275element(2, "path", 227);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Rate confirmed ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent__svg_svg_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 300);
    \u0275\u0275element(1, "path", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.calculationDone ? "text-white" : "text-slate-400");
  }
}
function SendMoneyComponent__svg_svg_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 301);
    \u0275\u0275element(1, "circle", 182)(2, "path", 183);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 302);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.exchangeRate, "1.4-4"), " ");
  }
}
function SendMoneyComponent_div_124_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 308)(1, "span", 157);
    \u0275\u0275text(2, "Your balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 309);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.agentAvailableBalance >= ctx_r1.totalPayable ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 3, ctx_r1.agentAvailableBalance, "1.2-2"), " ", ctx_r1.senderCurrency, " ");
  }
}
function SendMoneyComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 303)(1, "div", 304)(2, "span", 157);
    \u0275\u0275text(3, "Service charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 305);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 304)(8, "span", 157);
    \u0275\u0275text(9, "Total payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 306);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, SendMoneyComponent_div_124_div_13_Template, 6, 6, "div", 307);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 5, ctx_r1.serviceCharge, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(12, 8, ctx_r1.totalPayable, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.agentAvailableBalance !== null);
  }
}
function SendMoneyComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 214);
    \u0275\u0275element(2, "path", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.calcError, " ");
  }
}
function SendMoneyComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 214);
    \u0275\u0275element(2, "path", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.balanceWarning, " ");
  }
}
function SendMoneyComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 214);
    \u0275\u0275element(2, "path", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Amount exceeds single transaction limit of ");
    \u0275\u0275elementStart(5, "strong", 310);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(7, 2, ctx_r1.singleTxnLimit, "1.2-2"), " ", ctx_r1.senderCurrency, "");
  }
}
function SendMoneyComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 214);
    \u0275\u0275element(2, "path", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "This amount requires manager approval (threshold: ");
    \u0275\u0275elementStart(5, "strong", 310);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ")");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(7, 2, ctx_r1.managerApprovalThreshold, "1.2-2"), " ", ctx_r1.senderCurrency, "");
  }
}
function SendMoneyComponent__svg_svg_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 209);
    \u0275\u0275element(1, "path", 204);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "3");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Sending to ", ctx_r1.receiverCountry, "");
  }
}
function SendMoneyComponent_span_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Select destination country first");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_button_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 311);
    \u0275\u0275listener("click", function SendMoneyComponent_button_140_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateReceiver());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 211);
    \u0275\u0275element(2, "path", 212);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New Receiver ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_142_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.selectedReceiver.bankName, "");
  }
}
function SendMoneyComponent_div_142_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.selectedReceiver.accountNumber, "");
  }
}
function SendMoneyComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 312)(1, "div", 217)(2, "div", 313);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 219)(5, "p", 220);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 68);
    \u0275\u0275text(8);
    \u0275\u0275template(9, SendMoneyComponent_div_142_span_9_Template, 2, 1, "span", 12)(10, SendMoneyComponent_div_142_span_10_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 314);
    \u0275\u0275listener("click", function SendMoneyComponent_div_142_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelectedReceiver());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 224);
    \u0275\u0275element(13, "path", 172);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedReceiver.fullName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedReceiver.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedReceiver.phone, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedReceiver.bankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedReceiver.accountNumber);
  }
}
function SendMoneyComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 230);
    \u0275\u0275element(2, "path", 191);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "input", 315);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_143_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.receiverSearch, $event) || (ctx_r1.receiverSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SendMoneyComponent_div_143_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterReceivers());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.receiverSearch);
  }
}
function SendMoneyComponent_div_144_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", r_r27.bankName, "");
  }
}
function SendMoneyComponent_div_144_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 318);
    \u0275\u0275listener("click", function SendMoneyComponent_div_144_div_1_Template_div_click_0_listener() {
      const r_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectReceiver(r_r27));
    });
    \u0275\u0275elementStart(1, "div", 319);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "p", 320);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 68);
    \u0275\u0275text(7);
    \u0275\u0275template(8, SendMoneyComponent_div_144_div_1_span_8_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 321);
    \u0275\u0275element(10, "path", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r27 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r27.fullName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r27.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r27.phone, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r27.bankName);
  }
}
function SendMoneyComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 316);
    \u0275\u0275template(1, SendMoneyComponent_div_144_div_1_Template, 11, 4, "div", 317);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredReceivers);
  }
}
function SendMoneyComponent_div_145_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" for ", ctx_r1.receiverCountry, "");
  }
}
function SendMoneyComponent_div_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 322)(1, "div", 323);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 324);
    \u0275\u0275element(3, "path", 325);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 126);
    \u0275\u0275text(5, "No receivers found");
    \u0275\u0275template(6, SendMoneyComponent_div_145_span_6_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 326);
    \u0275\u0275text(8, "Add a new receiver to proceed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 327);
    \u0275\u0275listener("click", function SendMoneyComponent_div_145_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateReceiver());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 239);
    \u0275\u0275element(11, "path", 212);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Add Receiver ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.receiverCountry);
  }
}
function SendMoneyComponent_div_146_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.receiverFormErrors["fullName"]);
  }
}
function SendMoneyComponent_div_146_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.receiverFormErrors["phone"]);
  }
}
function SendMoneyComponent_div_146_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 283);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r30 = ctx.$implicit;
    \u0275\u0275property("value", c_r30.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r30.name);
  }
}
function SendMoneyComponent_div_146_div_56_div_4_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r32 = ctx.$implicit;
    \u0275\u0275property("ngValue", b_r32.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r32.bankName);
  }
}
function SendMoneyComponent_div_146_div_56_div_4_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.receiverFormErrors["bankName"]);
  }
}
function SendMoneyComponent_div_146_div_56_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256)(1, "label", 39);
    \u0275\u0275text(2, "Bank ");
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 342);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_146_div_56_div_4_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedBankId, $event) || (ctx_r1.selectedBankId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SendMoneyComponent_div_146_div_56_div_4_Template_select_change_5_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onBankSelected());
    });
    \u0275\u0275elementStart(6, "option", 44);
    \u0275\u0275text(7, "Select bank");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SendMoneyComponent_div_146_div_56_div_4_option_8_Template, 2, 2, "option", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SendMoneyComponent_div_146_div_56_div_4_p_9_Template, 2, 1, "p", 258);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedBankId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0))("ngClass", ctx_r1.receiverFormErrors["bankName"] ? "border-red-400 bg-red-50 dark:bg-red-900/20" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.payoutBanks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverFormErrors["bankName"]);
  }
}
function SendMoneyComponent_div_146_div_56_div_5_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.receiverFormErrors["bankName"]);
  }
}
function SendMoneyComponent_div_146_div_56_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 39);
    \u0275\u0275text(2, "Bank Name ");
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 343);
    \u0275\u0275template(6, SendMoneyComponent_div_146_div_56_div_5_p_6_Template, 2, 1, "p", 258);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.receiverFormErrors["bankName"] ? "border-red-400 bg-red-50 dark:bg-red-900/20" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverFormErrors["bankName"]);
  }
}
function SendMoneyComponent_div_146_div_56_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.receiverFormErrors["accountNumber"]);
  }
}
function SendMoneyComponent_div_146_div_56_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256)(1, "label", 39);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 228)(4, "div", 344);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 345);
    \u0275\u0275listener("click", function SendMoneyComponent_div_146_div_56_div_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBranchPopup());
    });
    \u0275\u0275text(7, " Browse ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedBranch ? ctx_r1.selectedBranch.branchName : "No branch selected", " ");
  }
}
function SendMoneyComponent_div_146_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 339)(1, "p", 48);
    \u0275\u0275text(2, "Bank Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38);
    \u0275\u0275template(4, SendMoneyComponent_div_146_div_56_div_4_Template, 10, 7, "div", 340)(5, SendMoneyComponent_div_146_div_56_div_5_Template, 7, 2, "div", 12);
    \u0275\u0275elementStart(6, "div")(7, "label", 39);
    \u0275\u0275text(8, "Account Number ");
    \u0275\u0275elementStart(9, "span", 40);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 341);
    \u0275\u0275template(12, SendMoneyComponent_div_146_div_56_p_12_Template, 2, 1, "p", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SendMoneyComponent_div_146_div_56_div_13_Template, 8, 1, "div", 340);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.payoutBanks.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.payoutBanks.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.receiverFormErrors["accountNumber"] ? "border-red-400 bg-red-50 dark:bg-red-900/20" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverFormErrors["accountNumber"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBankId && ctx_r1.payoutBanks.length > 0);
  }
}
function SendMoneyComponent_div_146_div_57_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r35 = ctx.$implicit;
    \u0275\u0275property("ngValue", l_r35.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r35.locationName);
  }
}
function SendMoneyComponent_div_146_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 346)(1, "p", 48);
    \u0275\u0275text(2, "Pickup Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 347);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_146_div_57_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLocationId, $event) || (ctx_r1.selectedLocationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SendMoneyComponent_div_146_div_57_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLocationSelected());
    });
    \u0275\u0275elementStart(4, "option", 44);
    \u0275\u0275text(5, "Select pickup location");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SendMoneyComponent_div_146_div_57_option_6_Template, 2, 2, "option", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLocationId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.payoutLocations);
  }
}
function SendMoneyComponent_div_146_div_58_div_3_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r37 = ctx.$implicit;
    \u0275\u0275property("ngValue", l_r37.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r37.locationName);
  }
}
function SendMoneyComponent_div_146_div_58_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 39);
    \u0275\u0275text(2, "Provider");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 347);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_146_div_58_div_3_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLocationId, $event) || (ctx_r1.selectedLocationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SendMoneyComponent_div_146_div_58_div_3_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onLocationSelected());
    });
    \u0275\u0275elementStart(4, "option", 44);
    \u0275\u0275text(5, "Select provider");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SendMoneyComponent_div_146_div_58_div_3_option_6_Template, 2, 2, "option", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLocationId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.payoutLocations);
  }
}
function SendMoneyComponent_div_146_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 346)(1, "p", 48);
    \u0275\u0275text(2, "Wallet / Mobile Money");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SendMoneyComponent_div_146_div_58_div_3_Template, 7, 5, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.payoutLocations.length > 0);
  }
}
function SendMoneyComponent_div_146_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 296);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.receiverFormError, " ");
  }
}
function SendMoneyComponent_div_146__svg_svg_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 181);
    \u0275\u0275element(1, "circle", 182)(2, "path", 183);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_146_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 251)(2, "div")(3, "h3", 252);
    \u0275\u0275text(4, "New Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 31);
    \u0275\u0275text(6, "Enter receiver details below");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 253);
    \u0275\u0275listener("click", function SendMoneyComponent_div_146_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateReceiver());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 239);
    \u0275\u0275element(9, "path", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Cancel ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "form", 328)(12, "div", 38)(13, "div", 256)(14, "label", 39);
    \u0275\u0275text(15, "Full Name ");
    \u0275\u0275elementStart(16, "span", 40);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 329);
    \u0275\u0275template(19, SendMoneyComponent_div_146_p_19_Template, 2, 1, "p", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "label", 39);
    \u0275\u0275text(22, "Phone ");
    \u0275\u0275elementStart(23, "span", 40);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "input", 330);
    \u0275\u0275template(26, SendMoneyComponent_div_146_p_26_Template, 2, 1, "p", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div")(28, "label", 39);
    \u0275\u0275text(29, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 331);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div")(32, "label", 39);
    \u0275\u0275text(33, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 332)(35, "option", 42);
    \u0275\u0275text(36, "Select country");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, SendMoneyComponent_div_146_option_37_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "label", 39);
    \u0275\u0275text(40, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 267);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div")(43, "label", 39);
    \u0275\u0275text(44, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "select", 333)(46, "option", 42);
    \u0275\u0275text(47, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 334);
    \u0275\u0275text(49, "Family");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 335);
    \u0275\u0275text(51, "Friend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 79);
    \u0275\u0275text(53, "Business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 83);
    \u0275\u0275text(55, "Other");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(56, SendMoneyComponent_div_146_div_56_Template, 14, 5, "div", 336)(57, SendMoneyComponent_div_146_div_57_Template, 7, 5, "div", 337)(58, SendMoneyComponent_div_146_div_58_Template, 4, 1, "div", 337)(59, SendMoneyComponent_div_146_div_59_Template, 2, 1, "div", 278);
    \u0275\u0275elementStart(60, "div", 279)(61, "button", 280);
    \u0275\u0275listener("click", function SendMoneyComponent_div_146_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateReceiver());
    });
    \u0275\u0275text(62, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 338);
    \u0275\u0275listener("click", function SendMoneyComponent_div_146_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveNewReceiver());
    });
    \u0275\u0275template(64, SendMoneyComponent_div_146__svg_svg_64_Template, 3, 0, "svg", 134);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r1.receiverForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", ctx_r1.receiverFormErrors["fullName"] ? "border-red-400 bg-red-50 dark:bg-red-900/20" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverFormErrors["fullName"]);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.receiverFormErrors["phone"] ? "border-red-400" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverFormErrors["phone"]);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r1.isBankTransfer());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCashTransfer());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isWalletTransfer());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverFormError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.savingReceiver);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingReceiver);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingReceiver ? "Saving..." : "Save Receiver", " ");
  }
}
function SendMoneyComponent__svg_svg_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 209);
    \u0275\u0275element(1, "path", 204);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "4");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_205_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 350);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 214);
    \u0275\u0275element(2, "path", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div")(4, "p", 351);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 352);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r39 * 50, "ms");
    \u0275\u0275property("ngClass", v_r38.action === "Block" ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400" : "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(v_r38.ruleName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r38.description);
  }
}
function SendMoneyComponent_div_205_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 348);
    \u0275\u0275template(1, SendMoneyComponent_div_205_div_1_Template, 8, 5, "div", 349);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.complianceViolations);
  }
}
function SendMoneyComponent__svg_svg_207_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 353);
    \u0275\u0275element(1, "circle", 182)(2, "path", 183);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent__svg_svg_208_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 354);
    \u0275\u0275element(1, "path", 9);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_228_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 355)(2, "span");
    \u0275\u0275text(3, "Credit used");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 356);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 357);
    \u0275\u0275element(9, "div", 358);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 5, ctx_r1.agentProfile.currentBalance, "1.0-0"), " / ", \u0275\u0275pipeBind2(7, 8, ctx_r1.agentProfile.creditLimit, "1.0-0"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.agentProfile.creditLimit > 0 ? ctx_r1.agentProfile.currentBalance / ctx_r1.agentProfile.creditLimit * 100 : 0, "%");
    \u0275\u0275property("ngClass", ctx_r1.agentProfile.currentBalance / ctx_r1.agentProfile.creditLimit > 0.85 ? "bg-red-300" : "bg-white/70");
  }
}
function SendMoneyComponent__svg_svg_237_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 301);
    \u0275\u0275element(1, "circle", 182)(2, "path", 183);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_292_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 359);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.receiverCurrency, "");
  }
}
function SendMoneyComponent_div_293_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 350);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 214);
    \u0275\u0275element(2, "path", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div")(4, "p", 351);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 352);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r40 = ctx.$implicit;
    const i_r41 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r41 * 50, "ms");
    \u0275\u0275property("ngClass", v_r40.action === "Block" ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400" : "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(v_r40.ruleName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r40.description);
  }
}
function SendMoneyComponent_div_293_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 348);
    \u0275\u0275template(1, SendMoneyComponent_div_293_div_1_Template, 8, 5, "div", 349);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.complianceViolations);
  }
}
function SendMoneyComponent_div_294_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 362)(1, "span", 363);
    \u0275\u0275text(2, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 364);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedBranch.branchName);
  }
}
function SendMoneyComponent_div_294_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 368);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 369);
    \u0275\u0275element(2, "path", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Requires manager approval ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_294_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 360)(2, "h3", 48);
    \u0275\u0275text(3, "Transaction Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 361)(5, "div", 362)(6, "span", 363);
    \u0275\u0275text(7, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 364);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 362)(11, "span", 363);
    \u0275\u0275text(12, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 364);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 121)(16, "span", 122);
    \u0275\u0275text(17, "Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 365);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 121)(21, "span", 122);
    \u0275\u0275text(22, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 365);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, SendMoneyComponent_div_294_div_25_Template, 5, 1, "div", 366)(26, SendMoneyComponent_div_294_div_26_Template, 4, 0, "div", 367);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r1.selectedCustomer == null ? null : ctx_r1.selectedCustomer.fullName) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedReceiver.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.receiverCountry);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getPayoutModeName() || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBranch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.needsManagerApproval);
  }
}
function SendMoneyComponent__svg_svg_296_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 181);
    \u0275\u0275element(1, "circle", 182)(2, "path", 183);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent__svg_svg_297_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 224);
    \u0275\u0275element(1, "path", 9);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_p_299_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Select a customer to begin");
    \u0275\u0275elementContainerEnd();
  }
}
function SendMoneyComponent_p_299_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Enter amount & destination to calculate");
    \u0275\u0275elementContainerEnd();
  }
}
function SendMoneyComponent_p_299_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Select or add a receiver");
    \u0275\u0275elementContainerEnd();
  }
}
function SendMoneyComponent_p_299_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Select purpose of remittance");
    \u0275\u0275elementContainerEnd();
  }
}
function SendMoneyComponent_p_299_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Select source of funds");
    \u0275\u0275elementContainerEnd();
  }
}
function SendMoneyComponent_p_299_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 370);
    \u0275\u0275template(1, SendMoneyComponent_p_299_ng_container_1_Template, 2, 0, "ng-container", 12)(2, SendMoneyComponent_p_299_ng_container_2_Template, 2, 0, "ng-container", 12)(3, SendMoneyComponent_p_299_ng_container_3_Template, 2, 0, "ng-container", 12)(4, SendMoneyComponent_p_299_ng_container_4_Template, 2, 0, "ng-container", 12)(5, SendMoneyComponent_p_299_ng_container_5_Template, 2, 0, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedCustomer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCustomer && !ctx_r1.calculationDone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCustomer && ctx_r1.calculationDone && !ctx_r1.selectedReceiver);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCustomer && ctx_r1.calculationDone && ctx_r1.selectedReceiver && !ctx_r1.purpose);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCustomer && ctx_r1.calculationDone && ctx_r1.selectedReceiver && !!ctx_r1.purpose && !ctx_r1.sourceOfFunds);
  }
}
var CustomerFormSchema = external_exports.object({
  fullName: external_exports.string().min(1, "Full name is required").max(100, "Max 100 characters"),
  phone: external_exports.string().min(1, "Phone is required").max(20, "Max 20 characters"),
  email: external_exports.union([external_exports.string().email("Invalid email"), external_exports.literal(""), external_exports.null(), external_exports.undefined()]),
  dateOfBirth: external_exports.union([external_exports.date(), external_exports.string(), external_exports.null()]).optional(),
  gender: external_exports.string().nullish(),
  nationality: external_exports.string().min(1, "Nationality is required"),
  country: external_exports.string().min(1, "Country is required"),
  city: external_exports.string().nullish(),
  state: external_exports.string().nullish(),
  postalCode: external_exports.string().nullish(),
  address: external_exports.string().nullish(),
  idDocumentType: external_exports.string().min(1, "Document type is required"),
  idDocumentNumber: external_exports.string().min(1, "Document number is required"),
  docIssueDate: external_exports.union([external_exports.date(), external_exports.string(), external_exports.null()]).optional(),
  docExpiryDate: external_exports.union([external_exports.date(), external_exports.string(), external_exports.null()]).optional(),
  docIssuingCountry: external_exports.string().nullish()
});
var ReceiverFormSchema = external_exports.object({
  fullName: external_exports.string().min(1, "Full name is required").max(100, "Max 100 characters"),
  phone: external_exports.string().min(1, "Phone is required").max(20, "Max 20 characters"),
  email: external_exports.union([external_exports.string().email("Invalid email"), external_exports.literal(""), external_exports.null(), external_exports.undefined()]),
  country: external_exports.string().nullish(),
  city: external_exports.string().nullish(),
  bankName: external_exports.string().nullish(),
  bankCode: external_exports.string().nullish(),
  accountNumber: external_exports.string().nullish(),
  branchName: external_exports.string().nullish(),
  branchCode: external_exports.string().nullish(),
  bankId: external_exports.number().nullable().optional(),
  branchId: external_exports.number().nullable().optional(),
  relationship: external_exports.string().nullish()
});
var SendMoneyComponent = class _SendMoneyComponent {
  // Step tracking (kept as local properties that sync with store)
  get step() {
    return this.store.currentStep();
  }
  set step(v) {
    this.store.setStep(v);
  }
  get maxDobDate() {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(d.getFullYear() - this.appSettings.minimumAge);
    return d;
  }
  get requirePurpose() {
    return this.appSettings.requirePurpose;
  }
  get requireSourceOfFunds() {
    return this.appSettings.requireSourceOfFunds;
  }
  get requireManagerApproval() {
    return this.appSettings.requireManagerApproval;
  }
  get managerApprovalThreshold() {
    return this.appSettings.managerApprovalThreshold;
  }
  get needsManagerApproval() {
    return this.requireManagerApproval && this.managerApprovalThreshold > 0 && this.sendAmount > this.managerApprovalThreshold;
  }
  get singleTxnLimit() {
    return this.appSettings.singleTransactionLimit;
  }
  get dailyTxnLimit() {
    return this.appSettings.dailyLimit;
  }
  get exceedsSingleLimit() {
    return this.singleTxnLimit > 0 && this.sendAmount > this.singleTxnLimit;
  }
  constructor(api, auth, router, notify, appSettings) {
    this.api = api;
    this.auth = auth;
    this.router = router;
    this.notify = notify;
    this.appSettings = appSettings;
    this.store = inject(SendMoneyStore);
    this.submitting = false;
    this.successResult = null;
    this.showPinDialog = false;
    this.pinMode = "verify";
    this.pinInput = "";
    this.pinConfirm = "";
    this.pinError = "";
    this.pinLoading = false;
    this.agentProfile = null;
    this.agentBalanceZero = false;
    this.balanceWarning = "";
    this.agentAvailableBalance = null;
    this.kycWarning = "";
    this.dobWarning = "";
    this.showCustomerDropdown = false;
    this.todayDate = /* @__PURE__ */ new Date();
    this.minExpiryDate = /* @__PURE__ */ new Date();
    this.countries = [];
    this.paymentMethods = [];
    this.allCorridors = [];
    this.customers = [];
    this.filteredCustomers = [];
    this.customerSearch = "";
    this.selectedCustomerId = null;
    this.selectedCustomer = null;
    this.showCreateCustomer = false;
    this.customerFormError = "";
    this.savingCustomer = false;
    this.frontImageFile = null;
    this.backImageFile = null;
    this.frontImagePreview = null;
    this.backImagePreview = null;
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
    this.sendAmount = 0;
    this.senderCountry = "";
    this.senderCurrency = "";
    this.receiverCountry = "";
    this.receiverCurrency = "";
    this.selectedPaymentMethodId = null;
    this.matchedCorridor = null;
    this.matchedPartners = [];
    this.selectedPartnerId = null;
    this.selectedPartner = null;
    this.availablePayoutModes = [];
    this.selectedPayoutModeId = null;
    this.routeError = "";
    this.exchangeRate = 0;
    this.serviceCharge = 0;
    this.totalPayable = 0;
    this.receiveAmount = 0;
    this.loadingCalc = false;
    this.calculationDone = false;
    this.calcError = "";
    this.complianceViolations = [];
    this.complianceBlocked = false;
    this.receivers = [];
    this.filteredReceivers = [];
    this.receiverSearch = "";
    this.selectedReceiverId = null;
    this.selectedReceiver = null;
    this.showCreateReceiver = false;
    this.receiverFormError = "";
    this.savingReceiver = false;
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
      relationship: new FormControl("")
    });
    this.receiverFormErrors = {};
    this.payoutBanks = [];
    this.payoutLocations = [];
    this.selectedBankId = null;
    this.selectedLocationId = null;
    this.showBranchPopup = false;
    this.branchBank = null;
    this.branchList = [];
    this.filteredBranches = [];
    this.branchSearch = "";
    this.selectedBranch = null;
    this.idTypes = [];
    this.calcTrigger$ = new Subject();
    this.purpose = "";
    this.sourceOfFunds = "";
  }
  ngOnInit() {
    this.appSettings.load();
    this.auth.loadFromSession();
    this.loadReferenceData();
    this.calcTrigger$.pipe(debounceTime(400)).subscribe(() => {
      this.calculateViaBackend();
    });
  }
  // ---------------------------------------------------------------------------
  // Zod Validation Helpers
  // ---------------------------------------------------------------------------
  validateCustomerForm() {
    const result = CustomerFormSchema.safeParse(this.customerForm.getRawValue());
    this.customerFormErrors = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (!this.customerFormErrors[field]) {
          this.customerFormErrors[field] = issue.message;
        }
      }
      return false;
    }
    return true;
  }
  validateReceiverForm() {
    const result = ReceiverFormSchema.safeParse(this.receiverForm.getRawValue());
    this.receiverFormErrors = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (!this.receiverFormErrors[field]) {
          this.receiverFormErrors[field] = issue.message;
        }
      }
      return false;
    }
    return true;
  }
  // ---------------------------------------------------------------------------
  // Reference Data
  // ---------------------------------------------------------------------------
  loadReferenceData() {
    this.api.getAgentProfile().subscribe((r) => {
      if (r?.success && r.data) {
        this.agentProfile = r.data;
        this.senderCountry = r.data.country;
        if (r.data.currency) {
          this.senderCurrency = r.data.currency;
        }
        const available = r.data.creditLimit - r.data.currentBalance;
        if (available <= 0) {
          this.agentBalanceZero = true;
          this.store.setAgentBalanceZero(true);
          this.notify.error("Insufficient balance. Your available balance is 0. Please contact admin to top up.");
        }
      }
    });
    this.api.getCountries().subscribe((r) => {
      if (r?.success && r.data)
        this.countries = r.data;
    });
    this.api.getAgentPaymentMethods().subscribe((r) => {
      if (r?.success && r.data)
        this.paymentMethods = r.data.filter((m) => m.isActive);
    });
    this.api.getAgentCorridors().subscribe((r) => {
      if (r?.success && r.data)
        this.allCorridors = r.data.filter((c) => c.isActive);
    });
    this.api.getAgentCustomers().subscribe((r) => {
      if (r?.success && r.data) {
        this.customers = r.data;
        this.filteredCustomers = [...r.data];
      }
    });
    this.api.getReferenceSetupFields("IdType").subscribe((r) => {
      if (r?.success && r.data) {
        this.idTypes = r.data.filter((d) => d.isActive).map((d) => d.name);
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Step 1: Customer Selection/Creation
  // ---------------------------------------------------------------------------
  filterCustomers() {
    const s = this.customerSearch.toLowerCase();
    this.filteredCustomers = !s ? [...this.customers] : this.customers.filter((c) => c.fullName.toLowerCase().includes(s) || (c.email || "").toLowerCase().includes(s) || (c.phone || "").toLowerCase().includes(s));
  }
  selectCustomer(customer) {
    this.selectedCustomerId = customer.id;
    this.selectedCustomer = customer;
    this.customerSearch = "";
    this.showCustomerDropdown = false;
    this.store.setSelectedCustomer(customer);
    this.kycWarning = "";
    this.dobWarning = "";
    if (this.appSettings.kycEnabled && !customer.isKycVerified) {
      this.kycWarning = "This customer has not completed KYC verification. Transaction cannot proceed.";
    }
    if (customer.dateOfBirth) {
      const dob = new Date(customer.dateOfBirth);
      const today = /* @__PURE__ */ new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < dob.getDate()) {
        age--;
      }
      const minAge = this.appSettings.minimumAge;
      if (age < minAge) {
        this.dobWarning = `Customer is ${age} years old. Must be at least ${minAge} years old to send a transaction.`;
      }
    }
    this.store.setKycWarning(this.kycWarning);
    this.store.setDobWarning(this.dobWarning);
    this.receivers = [];
    this.filteredReceivers = [];
    this.loadReceivers();
  }
  clearSelectedCustomer() {
    this.selectedCustomerId = null;
    this.selectedCustomer = null;
    this.store.setSelectedCustomer(null);
    this.kycWarning = "";
    this.dobWarning = "";
    this.store.setKycWarning("");
    this.store.setDobWarning("");
    this.showCustomerDropdown = false;
    this.receivers = [];
    this.filteredReceivers = [];
  }
  toggleCreateCustomer() {
    this.showCreateCustomer = !this.showCreateCustomer;
    this.customerFormError = "";
    this.customerFormErrors = {};
    if (this.showCreateCustomer) {
      this.customerForm.reset();
      this.frontImageFile = null;
      this.backImageFile = null;
      this.frontImagePreview = null;
      this.backImagePreview = null;
    }
  }
  onFrontImageSelected(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      this.frontImageFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => this.frontImagePreview = e.target?.result;
      reader.readAsDataURL(this.frontImageFile);
    }
  }
  onBackImageSelected(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      this.backImageFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => this.backImagePreview = e.target?.result;
      reader.readAsDataURL(this.backImageFile);
    }
  }
  uploadDocumentsForCustomer(customerId) {
    const formValue = this.customerForm.getRawValue();
    if (!this.frontImageFile && !this.backImageFile)
      return;
    if (!formValue.idDocumentType || !formValue.idDocumentNumber)
      return;
    const formData = new FormData();
    formData.append("customerId", customerId.toString());
    formData.append("documentType", formValue.idDocumentType);
    formData.append("documentNumber", formValue.idDocumentNumber);
    formData.append("requiredSides", this.backImageFile ? "2" : "1");
    if (formValue.docIssuingCountry) {
      formData.append("issuingCountry", formValue.docIssuingCountry);
    }
    if (this.frontImageFile) {
      formData.append("frontImage", this.frontImageFile);
    }
    if (this.backImageFile) {
      formData.append("backImage", this.backImageFile);
    }
    this.api.uploadDocument(formData).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Document uploaded successfully.");
        }
      },
      error: () => {
        this.notify.error("Customer created but document upload failed. You can upload later from admin.");
      }
    });
  }
  formatDate(d) {
    if (!d)
      return "";
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  saveNewCustomer() {
    this.customerFormError = "";
    if (!this.validateCustomerForm()) {
      this.customerFormError = "Please fix the highlighted fields.";
      return;
    }
    if (!this.appSettings.skipDocumentUpload && !this.frontImageFile) {
      this.customerFormError = "Please upload at least the front image of the ID document.";
      return;
    }
    this.savingCustomer = true;
    const formValue = this.customerForm.getRawValue();
    const newCustomer = {
      fullName: formValue.fullName || "",
      email: formValue.email || "",
      phone: formValue.phone || "",
      dateOfBirth: this.formatDate(formValue.dateOfBirth),
      gender: formValue.gender || "",
      nationality: formValue.nationality || "",
      country: formValue.country || "",
      city: formValue.city || "",
      state: formValue.state || "",
      postalCode: formValue.postalCode || "",
      address: formValue.address || "",
      idDocumentType: formValue.idDocumentType || "",
      idDocumentNumber: formValue.idDocumentNumber || "",
      docIssueDate: this.formatDate(formValue.docIssueDate),
      docExpiryDate: this.formatDate(formValue.docExpiryDate),
      docIssuingCountry: formValue.docIssuingCountry || ""
    };
    this.api.createAgentCustomer(newCustomer).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.customers.push(res.data);
          this.filteredCustomers = [...this.customers];
          this.selectCustomer(res.data);
          this.uploadDocumentsForCustomer(res.data.id);
          this.showCreateCustomer = false;
          this.notify.success("Customer created!");
        } else {
          this.customerFormError = res?.message || "Failed to create customer.";
        }
        this.savingCustomer = false;
      },
      error: () => {
        this.customerFormError = "Server error.";
        this.savingCustomer = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Step 2: Amount Calculation (backend-driven)
  // ---------------------------------------------------------------------------
  onReceiverCountryChange() {
    const country = this.countries.find((c) => c.name === this.receiverCountry);
    if (country) {
      this.receiverCurrency = country.currency;
    } else {
      this.receiverCurrency = "";
    }
    this.findRoute();
    this.triggerCalculation();
  }
  onPaymentMethodChange() {
    this.store.setSelectedPaymentMethodId(this.selectedPaymentMethodId);
    this.findRoute();
    this.triggerCalculation();
  }
  onAmountChange() {
    this.store.setSendAmount(this.sendAmount);
    this.triggerCalculation();
  }
  triggerCalculation() {
    this.calculationDone = false;
    this.store.setCalculationDone(false);
    this.calcError = "";
    this.complianceViolations = [];
    this.complianceBlocked = false;
    this.store.setComplianceBlocked(false);
    this.balanceWarning = "";
    this.store.setBalanceWarning("");
    this.agentAvailableBalance = null;
    if (this.canCalculate()) {
      this.calcTrigger$.next();
    } else {
      this.exchangeRate = 0;
      this.receiveAmount = 0;
      this.serviceCharge = 0;
      this.totalPayable = 0;
    }
  }
  canCalculate() {
    return !!(this.senderCountry && this.senderCurrency && this.receiverCountry && this.receiverCurrency && this.sendAmount > 0 && this.selectedPartner);
  }
  calculateViaBackend() {
    if (!this.canCalculate())
      return;
    this.loadingCalc = true;
    this.calcError = "";
    const req = {
      sendAmount: this.sendAmount,
      sendCurrency: this.senderCurrency,
      receiveCurrency: this.receiverCurrency,
      senderCountry: this.senderCountry,
      receiverCountry: this.receiverCountry,
      paymentMethodId: this.selectedPaymentMethodId || void 0,
      paymentMethodName: this.getPayoutModeName() || void 0,
      payoutPartnerId: this.selectedPartner?.payoutAgentId || void 0,
      sendingAgentId: this.agentProfile?.id || void 0,
      senderName: this.selectedCustomer?.fullName || void 0,
      customerId: this.selectedCustomerId || void 0
    };
    this.api.calculateTransfer(req).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.exchangeRate = res.data.exchangeRate;
          this.receiveAmount = res.data.receiveAmount;
          this.serviceCharge = res.data.serviceCharge;
          this.totalPayable = res.data.totalPayable;
          this.complianceViolations = res.data.complianceViolations || [];
          this.complianceBlocked = this.complianceViolations.some((v) => v.action === "Block");
          this.agentAvailableBalance = res.data.agentAvailableBalance ?? null;
          this.balanceWarning = res.data.balanceWarning || "";
          this.calculationDone = true;
          this.calcError = "";
          this.store.setCalculationDone(true);
          this.store.setComplianceBlocked(this.complianceBlocked);
          this.store.setBalanceWarning(this.balanceWarning);
          if (this.selectedCustomerId && this.step < 2 && !this.complianceBlocked && !this.balanceWarning) {
            this.store.setStep(2);
            this.loadReceivers();
          }
        } else {
          this.calcError = res?.message || "Calculation failed.";
          this.calculationDone = false;
          this.store.setCalculationDone(false);
        }
        this.loadingCalc = false;
      },
      error: (err) => {
        this.calcError = err?.error?.message || "Failed to calculate. Please try again.";
        this.calculationDone = false;
        this.store.setCalculationDone(false);
        this.loadingCalc = false;
      }
    });
  }
  findRoute() {
    this.matchedCorridor = null;
    this.matchedPartners = [];
    this.selectedPartnerId = null;
    this.selectedPartner = null;
    this.availablePayoutModes = [];
    this.selectedPayoutModeId = null;
    this.routeError = "";
    if (!this.senderCountry || !this.receiverCountry || !this.senderCurrency || !this.receiverCurrency)
      return;
    this.matchedCorridor = this.allCorridors.find((c) => c.sourceCountry === this.senderCountry && c.destinationCountry === this.receiverCountry && c.sourceCurrency === this.senderCurrency && c.destinationCurrency === this.receiverCurrency) || null;
    if (!this.matchedCorridor) {
      this.routeError = `No transfer route available from ${this.senderCountry} to ${this.receiverCountry}.`;
      return;
    }
    this.matchedPartners = (this.matchedCorridor.payoutPartners ?? []).filter((p) => p.isActive);
    if (!this.selectedPaymentMethodId)
      return;
    const matchingPartner = this.matchedPartners.find((p) => p.paymentModeIds.includes(this.selectedPaymentMethodId));
    if (matchingPartner) {
      this.selectedPartnerId = matchingPartner.id;
      this.selectedPartner = matchingPartner;
      this.selectedPayoutModeId = this.selectedPaymentMethodId;
      const allowedMethods = this.appSettings.availablePayoutMethods;
      this.availablePayoutModes = this.paymentMethods.filter((pm) => matchingPartner.paymentModeIds.includes(pm.id) && (allowedMethods.length === 0 || allowedMethods.some((m) => pm.name.toLowerCase().includes(m.toLowerCase()))));
      this.store.setRouteState(this.matchedCorridor, this.selectedPartner, this.selectedPayoutModeId);
    } else {
      this.routeError = `The selected payment method is not available for ${this.receiverCountry}. Please choose a different method.`;
      this.store.setRouteState(null, null, null);
    }
  }
  // ---------------------------------------------------------------------------
  // Step 3: Receiver Selection/Creation
  // ---------------------------------------------------------------------------
  loadReceivers() {
    if (!this.selectedCustomerId)
      return;
    const loadingForCustomerId = this.selectedCustomerId;
    this.api.getAgentReceiversByCustomer(loadingForCustomerId).subscribe((r) => {
      if (this.selectedCustomerId !== loadingForCustomerId)
        return;
      if (r?.success && r.data) {
        this.receivers = r.data.filter((rec) => rec.isActive);
        this.filterReceivers();
      }
    });
    if (this.selectedPartner) {
      this.api.getAgentBanksForPayout(this.selectedPartner.payoutAgentId).subscribe((r) => {
        if (r?.success && r.data) {
          this.payoutBanks = r.data.filter((b) => b.isActive);
          if (this.selectedPayoutModeId) {
            this.payoutBanks = this.payoutBanks.filter((b) => !b.paymentMethodId || b.paymentMethodId === this.selectedPayoutModeId);
          }
        }
      });
      this.api.getAgentLocationsForPayout(this.selectedPartner.payoutAgentId).subscribe((r) => {
        if (r?.success && r.data) {
          this.payoutLocations = r.data.filter((l) => l.isActive);
        }
      });
    }
  }
  filterReceivers() {
    const s = this.receiverSearch.toLowerCase();
    const bankNames = this.payoutBanks.map((b) => b.bankName.toLowerCase());
    let filtered = this.receivers.filter((r) => {
      if (this.receiverCountry && r.country !== this.receiverCountry)
        return false;
      if (bankNames.length && r.bankName) {
        if (!bankNames.includes(r.bankName.toLowerCase()))
          return false;
      }
      return true;
    });
    if (s) {
      filtered = filtered.filter((r) => r.fullName.toLowerCase().includes(s) || (r.phone || "").toLowerCase().includes(s));
    }
    this.filteredReceivers = filtered;
  }
  selectReceiver(receiver) {
    this.selectedReceiverId = receiver.id;
    this.selectedReceiver = receiver;
    this.store.setSelectedReceiver(receiver);
  }
  clearSelectedReceiver() {
    this.selectedReceiverId = null;
    this.selectedReceiver = null;
    this.store.setSelectedReceiver(null);
  }
  toggleCreateReceiver() {
    this.showCreateReceiver = !this.showCreateReceiver;
    this.receiverFormError = "";
    this.receiverFormErrors = {};
    if (this.showCreateReceiver) {
      this.receiverForm.reset();
      this.receiverForm.patchValue({ country: this.receiverCountry });
    }
  }
  saveNewReceiver() {
    this.receiverFormError = "";
    this.receiverFormErrors = {};
    if (!this.validateReceiverForm()) {
      this.receiverFormError = "Please fix the highlighted fields.";
      return;
    }
    if (this.isBankTransfer()) {
      const fv = this.receiverForm.getRawValue();
      let hasFieldErrors = false;
      if (!this.selectedBankId && !fv.bankName?.trim()) {
        this.receiverFormErrors["bankName"] = "Bank name is required.";
        hasFieldErrors = true;
      }
      if (!fv.accountNumber?.trim()) {
        this.receiverFormErrors["accountNumber"] = "Account number is required.";
        hasFieldErrors = true;
      }
      if (hasFieldErrors) {
        this.receiverFormError = "Please fix the highlighted fields.";
        return;
      }
    }
    if (this.requirePurpose && !this.purpose.trim()) {
      this.receiverFormError = "Purpose of remittance is required.";
      return;
    }
    if (this.requireSourceOfFunds && !this.sourceOfFunds.trim()) {
      this.receiverFormError = "Source of funds is required.";
      return;
    }
    const fvDup = this.receiverForm.getRawValue();
    const dupName = (fvDup.fullName || "").trim().toLowerCase();
    const dupPhone = (fvDup.phone || "").trim();
    const dupAccount = (fvDup.accountNumber || "").trim();
    const dupBankCode = (() => {
      if (this.selectedBankId) {
        return this.payoutBanks.find((b) => b.id === this.selectedBankId)?.bankCode?.trim() || "";
      }
      return (fvDup.bankCode || "").trim();
    })();
    const dupCountry = (fvDup.country || this.receiverCountry || "").trim();
    const isDuplicate = this.receivers.some((r) => {
      const rName = r.fullName.trim().toLowerCase();
      if (rName !== dupName)
        return false;
      if (this.isBankTransfer()) {
        const rAccount = (r.accountNumber || "").trim();
        const rBankCode = (r.bankCode || "").trim();
        return rAccount === dupAccount && rBankCode === dupBankCode;
      } else {
        return (r.country || "").trim() === dupCountry && (r.phone || "").trim() === dupPhone;
      }
    });
    if (isDuplicate) {
      this.receiverFormError = "A receiver with the same details already exists. Please select them from the list instead.";
      return;
    }
    this.savingReceiver = true;
    const formValue = this.receiverForm.getRawValue();
    const newReceiver = {
      fullName: formValue.fullName || "",
      phone: formValue.phone || "",
      email: formValue.email || "",
      country: formValue.country || "",
      city: formValue.city || "",
      bankName: formValue.bankName || "",
      bankCode: formValue.bankCode || "",
      accountNumber: formValue.accountNumber || "",
      branchName: formValue.branchName || "",
      branchCode: formValue.branchCode || "",
      bankId: formValue.bankId || null,
      branchId: formValue.branchId || null,
      relationship: formValue.relationship || ""
    };
    const selBank = this.selectedBankId ? this.payoutBanks.find((b) => b.id === this.selectedBankId) : null;
    if (selBank) {
      newReceiver.bankCode = selBank.bankCode || "";
      newReceiver.bankId = selBank.id;
    }
    if (this.selectedBranch) {
      newReceiver.branchName = this.selectedBranch.branchName;
      newReceiver.branchCode = this.selectedBranch.branchCode || "";
      newReceiver.branchId = this.selectedBranch.id;
    }
    const dto = __spreadProps(__spreadValues({}, newReceiver), { customerId: this.selectedCustomerId });
    this.api.createAgentReceiver(dto).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.receivers.push(res.data);
          this.filterReceivers();
          this.selectReceiver(res.data);
          this.showCreateReceiver = false;
          this.notify.success("Receiver created!");
        } else {
          this.receiverFormError = res?.message || "Failed.";
        }
        this.savingReceiver = false;
      },
      error: () => {
        this.receiverFormError = "Server error.";
        this.savingReceiver = false;
      }
    });
  }
  getPayoutModeName() {
    return this.paymentMethods.find((pm) => pm.id === this.selectedPayoutModeId)?.name || "";
  }
  isCashTransfer() {
    const name = this.getPayoutModeName().toLowerCase();
    return name.includes("cash");
  }
  isBankTransfer() {
    const name = this.getPayoutModeName().toLowerCase();
    return name.includes("bank");
  }
  isWalletTransfer() {
    const name = this.getPayoutModeName().toLowerCase();
    return name.includes("wallet") || name.includes("mobile");
  }
  onBankSelected() {
    this.selectedBranch = null;
    const bank = this.payoutBanks.find((b) => b.id === this.selectedBankId);
    if (bank) {
      this.receiverForm.patchValue({
        bankName: bank.bankName,
        bankCode: bank.bankCode || "",
        bankId: bank.id
      });
    }
  }
  onLocationSelected() {
    const loc = this.payoutLocations.find((l) => l.id === this.selectedLocationId);
    if (loc) {
      this.receiverForm.patchValue({
        bankName: loc.locationName,
        bankCode: loc.locationCode || "",
        bankId: loc.id
      });
    }
  }
  // ---------------------------------------------------------------------------
  // Branch Popup
  // ---------------------------------------------------------------------------
  openBranchPopup() {
    const bank = this.selectedBankId ? this.payoutBanks.find((b) => b.id === this.selectedBankId) : null;
    if (!bank)
      return;
    this.branchBank = bank;
    this.branchList = (bank.branches || []).filter((br) => br.isActive);
    this.filteredBranches = [...this.branchList];
    this.branchSearch = "";
    this.showBranchPopup = true;
  }
  filterBranches() {
    const s = this.branchSearch.toLowerCase();
    this.filteredBranches = !s ? [...this.branchList] : this.branchList.filter((br) => br.branchName.toLowerCase().includes(s) || (br.branchCode || "").toLowerCase().includes(s) || (br.address || "").toLowerCase().includes(s));
  }
  selectBranch(branch) {
    this.selectedBranch = branch;
    this.showBranchPopup = false;
  }
  closeBranchPopup() {
    this.showBranchPopup = false;
  }
  // ---------------------------------------------------------------------------
  // Stepper Navigation
  // ---------------------------------------------------------------------------
  canProceedStep1() {
    return !!this.selectedCustomer && !this.kycWarning && !this.dobWarning;
  }
  canProceedStep2() {
    return this.calculationDone && !this.complianceBlocked && !this.balanceWarning && !!this.selectedPartner && !!this.selectedPayoutModeId && this.sendAmount > 0 && !!this.selectedPaymentMethodId && !this.agentBalanceZero && !this.exceedsSingleLimit;
  }
  canProceedStep3() {
    if (!this.selectedReceiver)
      return false;
    if (!this.purpose.trim())
      return false;
    if (!this.sourceOfFunds.trim())
      return false;
    return true;
  }
  nextStep() {
    if (this.step === 0 && !this.canProceedStep1()) {
      this.notify.error("Please select or create a customer first.");
      return;
    }
    if (this.step === 1 && !this.canProceedStep2()) {
      this.notify.error("Please complete all transfer details.");
      return;
    }
    if (this.step === 1) {
      this.loadReceivers();
    }
    if (this.step === 2 && !this.canProceedStep3()) {
      if (!this.selectedReceiver) {
        this.notify.error("Please select or create a receiver.");
      } else if (this.requirePurpose && !this.purpose.trim()) {
        this.notify.error("Purpose of remittance is required.");
      } else if (this.requireSourceOfFunds && !this.sourceOfFunds.trim()) {
        this.notify.error("Source of funds is required.");
      }
      return;
    }
    this.store.nextStep();
  }
  prevStep() {
    this.store.prevStep();
  }
  // ---------------------------------------------------------------------------
  // Submit Transaction
  // ---------------------------------------------------------------------------
  submitTransaction() {
    if (!this.selectedCustomer || !this.selectedReceiver || !this.selectedPartner) {
      this.notify.error("Missing required data.");
      return;
    }
    this.submitting = true;
    this.api.getTransactionPinStatus().subscribe({
      next: (res) => {
        this.submitting = false;
        const hasPin = res?.data ?? false;
        if (!hasPin) {
          this.pinMode = "set";
          this.pinInput = "";
          this.pinConfirm = "";
          this.pinError = "";
          this.showPinDialog = true;
        } else {
          this.pinMode = "verify";
          this.pinInput = "";
          this.pinError = "";
          this.showPinDialog = true;
        }
      },
      error: () => {
        this.submitting = false;
        this.notify.error("Failed to check PIN status. Please try again.");
      }
    });
  }
  onPinSubmit() {
    this.pinError = "";
    if (this.pinMode === "set") {
      if (!this.pinInput || this.pinInput.length < 4 || this.pinInput.length > 6) {
        this.pinError = "PIN must be 4-6 digits.";
        return;
      }
      if (!/^\d+$/.test(this.pinInput)) {
        this.pinError = "PIN must contain only digits.";
        return;
      }
      if (this.pinInput !== this.pinConfirm) {
        this.pinError = "PINs do not match.";
        return;
      }
      this.pinLoading = true;
      this.api.setTransactionPin(this.pinInput).subscribe({
        next: (res) => {
          this.pinLoading = false;
          if (res?.success) {
            this.notify.success("Transaction PIN set successfully.");
            this.pinMode = "verify";
            this.pinInput = "";
            this.pinError = "";
          } else {
            this.pinError = res?.message || "Failed to set PIN.";
          }
        },
        error: (err) => {
          this.pinLoading = false;
          this.pinError = err?.error?.message || "Failed to set PIN.";
        }
      });
    } else {
      if (!this.pinInput || this.pinInput.length < 4 || this.pinInput.length > 6) {
        this.pinError = "Enter your 4-6 digit PIN.";
        return;
      }
      this.pinLoading = true;
      this.api.verifyTransactionPin(this.pinInput).subscribe({
        next: (res) => {
          this.pinLoading = false;
          if (res?.success) {
            this.showPinDialog = false;
            this.pinInput = "";
            this.executeSendTransaction();
          } else {
            this.pinError = res?.message || "Invalid PIN.";
          }
        },
        error: (err) => {
          this.pinLoading = false;
          this.pinError = err?.error?.message || "Invalid PIN. Please try again.";
        }
      });
    }
  }
  closePinDialog() {
    this.showPinDialog = false;
    this.pinInput = "";
    this.pinConfirm = "";
    this.pinError = "";
  }
  executeSendTransaction() {
    if (!this.selectedCustomer || !this.selectedReceiver || !this.selectedPartner) {
      return;
    }
    this.submitting = true;
    const selectedBank = this.selectedBankId ? this.payoutBanks.find((b) => b.id === this.selectedBankId) : null;
    const selectedLocation = this.selectedLocationId ? this.payoutLocations.find((l) => l.id === this.selectedLocationId) : null;
    let receiverBankName = this.selectedReceiver.bankName || "";
    let receiverBankCode = "";
    let receiverBranchName = "";
    let receiverBranchCode = "";
    let receiverBankId = void 0;
    let receiverBranchId = void 0;
    if (this.isBankTransfer() && selectedBank) {
      receiverBankName = receiverBankName || selectedBank.bankName;
      receiverBankCode = selectedBank.bankCode || "";
      receiverBankId = selectedBank.id;
      if (this.selectedBranch) {
        receiverBranchName = this.selectedBranch.branchName;
        receiverBranchCode = this.selectedBranch.branchCode || "";
        receiverBranchId = this.selectedBranch.id;
      }
    } else if (this.isCashTransfer() && selectedLocation) {
      receiverBankName = receiverBankName || selectedLocation.locationName;
      receiverBankCode = selectedLocation.locationCode || "";
      receiverBankId = selectedLocation.id;
    } else if (this.isWalletTransfer() && selectedLocation) {
      receiverBankName = receiverBankName || selectedLocation.locationName;
      receiverBankCode = selectedLocation.locationCode || "";
      receiverBankId = selectedLocation.id;
    } else if (selectedBank) {
      receiverBankName = receiverBankName || selectedBank.bankName;
      receiverBankCode = selectedBank.bankCode || "";
      receiverBankId = selectedBank.id;
    }
    if (!receiverBankId && this.selectedReceiver.bankId) {
      receiverBankId = this.selectedReceiver.bankId;
    }
    if (!receiverBankCode && this.selectedReceiver.bankCode) {
      receiverBankCode = this.selectedReceiver.bankCode;
    }
    if (!receiverBranchId && this.selectedReceiver.branchId) {
      receiverBranchId = this.selectedReceiver.branchId;
    }
    if (!receiverBranchName && this.selectedReceiver.branchName) {
      receiverBranchName = this.selectedReceiver.branchName;
    }
    if (!receiverBranchCode && this.selectedReceiver.branchCode) {
      receiverBranchCode = this.selectedReceiver.branchCode;
    }
    const paymentMethodName = this.paymentMethods.find((pm) => pm.id === this.selectedPaymentMethodId)?.name || "";
    const payoutMethodName = this.paymentMethods.find((pm) => pm.id === this.selectedPayoutModeId)?.name || "";
    const model = {
      senderName: this.selectedCustomer.fullName,
      senderPhone: this.selectedCustomer.phone || "",
      senderEmail: this.selectedCustomer.email,
      senderIdType: this.selectedCustomer.idDocumentType,
      senderIdNumber: this.selectedCustomer.idDocumentNumber,
      senderCountry: this.senderCountry,
      receiverName: this.selectedReceiver.fullName,
      receiverPhone: this.selectedReceiver.phone,
      receiverEmail: this.selectedReceiver.email,
      receiverCountry: this.receiverCountry,
      receiverBankName,
      receiverBankCode,
      receiverAccountNumber: this.selectedReceiver.accountNumber || "",
      receiverBranchName,
      receiverBranchCode,
      receiverBankId,
      receiverBranchId,
      sendAmount: this.sendAmount,
      sendCurrency: this.senderCurrency,
      receiveCurrency: this.receiverCurrency,
      paymentMethod: this.selectedPaymentMethodId || 0,
      payoutMethod: this.selectedPayoutModeId || 0,
      paymentMethodName,
      payoutMethodName,
      payoutPartnerId: this.selectedPartner?.payoutAgentId,
      customerId: this.selectedCustomerId || void 0,
      receiverId: this.selectedReceiverId || void 0,
      purpose: this.purpose || void 0,
      sourceOfFunds: this.sourceOfFunds || void 0
    };
    this.api.sendTransaction(model).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.successResult = res.data;
          this.store.setSuccessResult(res.data);
        } else {
          this.notify.error(res?.message || "Failed to submit transaction.");
        }
        this.submitting = false;
      },
      error: (err) => {
        this.notify.error(`Error: ${err.message || "Unknown error"}`);
        this.submitting = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // PDF Receipt
  // ---------------------------------------------------------------------------
  downloadReceipt() {
    if (!this.successResult)
      return;
    const tx = this.successResult;
    const content = `
      <html><head><title>${this.appSettings.txnNumberPrefix} Receipt</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; color: #333; max-width: 600px; margin: 0 auto; }
        h1 { text-align: center; color: #1a56db; font-size: 22px; margin-bottom: 4px; text-transform: uppercase; }
        .subtitle { text-align: center; color: #666; font-size: 13px; margin-bottom: 30px; }
        .ref { text-align: center; font-size: 16px; font-weight: bold; background: #f0f4ff; padding: 10px; border-radius: 8px; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin: 16px 0; }
        td { padding: 8px 12px; border-bottom: 1px solid #eee; font-size: 13px; }
        td:first-child { font-weight: 600; color: #555; width: 40%; }
        .section { font-size: 14px; font-weight: 700; color: #1a56db; padding: 12px 0 4px; border-bottom: 2px solid #1a56db; margin-top: 16px; }
        .amount { font-size: 18px; font-weight: 700; color: #2e7d32; }
        .footer { text-align: center; margin-top: 30px; font-size: 11px; color: #999; }
      </style></head><body>
      <h1>${this.appSettings.companyName || "RemitAgent"}</h1>
      <div class="subtitle">${this.appSettings.txnNumberPrefix} Receipt</div>
      <div class="ref">Reference: ${tx.referenceNumber}</div>
      <div class="section">Transaction Details</div>
      <table>
        <tr><td>Status</td><td>${this.getStatusLabel(tx.status)}</td></tr>
        <tr><td>Date</td><td>${new Date(tx.createdAt).toLocaleString()}</td></tr>
        <tr><td>Send Amount</td><td class="amount">${tx.sendAmount.toFixed(2)} ${tx.sendCurrency}</td></tr>
        <tr><td>Exchange Rate</td><td>1 ${tx.sendCurrency} = ${tx.exchangeRateApplied.toFixed(4)} ${tx.receiveCurrency}</td></tr>
        <tr><td>Receive Amount</td><td class="amount">${tx.receiveAmount.toFixed(2)} ${tx.receiveCurrency}</td></tr>
        <tr><td>Commission</td><td>${tx.totalCommission.toFixed(2)} ${tx.sendCurrency}</td></tr>
      </table>
      <div class="section">Sender</div>
      <table>
        <tr><td>Name</td><td>${tx.senderName}</td></tr>
      </table>
      <div class="section">Receiver</div>
      <table>
        <tr><td>Name</td><td>${tx.receiverName}</td></tr>
        <tr><td>Country</td><td>${tx.receiverCountry}</td></tr>
      </table>
      <div class="footer">This is a computer-generated receipt. No signature required.</div>
      </body></html>
    `;
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(content);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => printWindow.print(), 500);
    }
  }
  startNewTransaction() {
    this.store.reset();
    this.successResult = null;
    this.selectedCustomerId = null;
    this.selectedCustomer = null;
    this.selectedReceiverId = null;
    this.selectedReceiver = null;
    this.sendAmount = 0;
    this.receiverCountry = "";
    this.receiverCurrency = "";
    this.matchedCorridor = null;
    this.matchedPartners = [];
    this.selectedPartnerId = null;
    this.selectedPartner = null;
    this.availablePayoutModes = [];
    this.selectedPayoutModeId = null;
    this.selectedPaymentMethodId = null;
    this.routeError = "";
    this.exchangeRate = 0;
    this.serviceCharge = 0;
    this.totalPayable = 0;
    this.receiveAmount = 0;
    this.calculationDone = false;
    this.calcError = "";
    this.selectedBranch = null;
    this.showBranchPopup = false;
    if (this.agentProfile) {
      this.senderCountry = this.agentProfile.country;
      this.senderCurrency = this.agentProfile.currency || "";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "OnHold":
        return "On Hold";
      case "Compliance":
        return "Under Review";
      case "PendingApproval":
        return "Pending Approval";
      default:
        return status;
    }
  }
  static {
    this.\u0275fac = function SendMoneyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SendMoneyComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(AppSettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SendMoneyComponent, selectors: [["app-send-money"]], features: [\u0275\u0275ProvidersFeature([SendMoneyStore])], decls: 300, vars: 130, consts: [[1, "min-h-screen", "bg-slate-50", "dark:bg-slate-950", "pb-20"], ["class", "success-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", 4, "ngIf"], ["class", "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4", 3, "click", 4, "ngIf"], [1, "bg-white", "dark:bg-slate-900", "border-b", "border-slate-100", "dark:border-slate-800", "sticky", "top-0", "z-30", "shadow-sm"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "h-14", "flex", "items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-3"], [1, "w-9", "h-9", "rounded-xl", "bg-gradient-to-br", "from-blue-500", "to-indigo-600", "flex", "items-center", "justify-center", "shadow-sm", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-[18px]", "h-[18px]", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"], [1, "text-sm", "font-bold", "text-slate-900", "dark:text-white", "leading-tight"], [1, "text-xs", "text-slate-500", "dark:text-slate-400", "leading-tight"], [4, "ngIf"], [1, "hidden", "sm:flex", "items-center", "gap-2", "text-xs", "font-medium"], [1, "flex", "items-center", "gap-1.5"], [1, "w-5", "h-5", "rounded-full", "flex", "items-center", "justify-center", "flex-shrink-0", 3, "ngClass"], ["class", "w-3 h-3", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "3", 4, "ngIf"], ["class", "text-[10px] font-bold", 4, "ngIf"], [3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-3", "h-3", "text-slate-300", "dark:text-slate-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5l7 7-7 7"], ["class", "flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-xs font-semibold flex-shrink-0", 4, "ngIf"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "flex", "gap-6", "items-start"], [1, "flex-1", "min-w-0", "flex", "flex-col", "gap-5"], [1, "canvas-section", "bg-white", "dark:bg-slate-900", "rounded-2xl", "border", "border-slate-100", "dark:border-slate-800", "shadow-sm", "overflow-hidden"], [1, "px-5", "py-4", "flex", "items-center", "gap-3.5", "border-b", "border-slate-100", "dark:border-slate-800"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "font-bold", "text-sm", "flex-shrink-0", "transition-all", "duration-200", 3, "ngClass"], ["class", "w-4 h-4", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "3", 4, "ngIf"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-white"], [1, "text-xs", "text-slate-500", "dark:text-slate-400", "mt-0.5"], ["class", "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors flex-shrink-0", 3, "click", 4, "ngIf"], [1, "px-5", "py-5", "space-y-4"], ["class", "flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm", 4, "ngIf"], ["class", "flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-sm", 4, "ngIf"], ["class", "selected-card-appear flex items-center justify-between p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800", 4, "ngIf"], [1, "px-5", "py-5", "space-y-5"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-sm", "font-medium", "text-slate-700", "dark:text-slate-300", "mb-1.5"], [1, "text-red-500"], [1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "overflow-hidden", "border", "border-slate-100", "dark:border-slate-700"], [1, "bg-slate-50", "dark:bg-slate-800/60", "px-5", "py-3", "flex", "items-center", "justify-between", "border-b", "border-slate-100", "dark:border-slate-700"], [1, "text-xs", "font-semibold", "text-slate-500", "dark:text-slate-400", "uppercase", "tracking-wider"], ["class", "flex items-center gap-1.5 text-xs text-blue-500 font-medium", 4, "ngIf"], ["class", "flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold", 4, "ngIf"], [1, "p-5", "bg-white", "dark:bg-slate-900"], [1, "grid", "grid-cols-5", "gap-4", "items-end"], [1, "col-span-2", "space-y-1.5"], [1, "block", "text-xs", "font-semibold", "text-slate-500", "dark:text-slate-400", "uppercase", "tracking-wide"], [1, "relative"], [1, "absolute", "left-3.5", "top-1/2", "-translate-y-1/2", "flex", "items-center", "gap-1.5", "pointer-events-none", "select-none", "z-10"], [1, "text-sm", "font-bold", "text-slate-600", "dark:text-slate-400"], [1, "w-px", "h-5", "bg-slate-200", "dark:bg-slate-700"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", 1, "w-full", "pl-[5rem]", "pr-3", "py-4", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-2xl", "font-bold", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", "tabular-nums", 3, "ngModelChange", "input", "ngModel"], [1, "col-span-1", "flex", "flex-col", "items-center", "justify-center", "gap-2", "pb-1"], [1, "w-10", "h-10", "rounded-full", "flex", "items-center", "justify-center", "transition-all", "duration-200", 3, "ngClass"], ["class", "w-5 h-5 transition-colors", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 3, "ngClass", 4, "ngIf"], ["class", "animate-spin w-4 h-4 text-blue-500", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "text-[11px] font-semibold text-slate-500 dark:text-slate-400 tabular-nums text-center leading-tight", 4, "ngIf"], [1, "text-sm", "font-bold", "transition-colors", 3, "ngClass"], [1, "pl-[5rem]", "pr-3", "py-4", "rounded-xl", "border", "text-2xl", "font-bold", "tabular-nums", "min-h-[60px]", "flex", "items-center", "transition-all", 3, "ngClass"], ["class", "mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-x-6 gap-y-2", 4, "ngIf"], [1, "text-xs", "text-slate-500", "dark:text-slate-400", "mt-0.5", "truncate"], ["class", "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 text-xs font-semibold hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors flex-shrink-0", 3, "click", 4, "ngIf"], ["class", "selected-card-appear flex items-center justify-between p-4 rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800", 4, "ngIf"], ["class", "relative", 4, "ngIf"], ["class", "space-y-2 max-h-56 overflow-y-auto", 4, "ngIf"], ["class", "py-10 text-center", 4, "ngIf"], [1, "px-5", "py-5", "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngModelChange", "ngModel", "ngClass"], ["value", "Family Support"], ["value", "Education"], ["value", "Medical"], ["value", "Business"], ["value", "Investment"], ["value", "Gift"], ["value", "Travel"], ["value", "Other"], ["value", "Salary"], ["value", "Savings"], ["value", "Pension"], [1, "lg:hidden", "space-y-4"], ["class", "space-y-2", 4, "ngIf"], [1, "w-full", "py-4", "rounded-2xl", "font-bold", "text-base", "transition-all", "flex", "items-center", "justify-center", "gap-2.5", 3, "click", "disabled", "ngClass"], ["class", "animate-spin w-5 h-5", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-5 h-5", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 4, "ngIf"], [1, "w-72", "xl:w-80", "flex-shrink-0", "hidden", "lg:block"], [1, "sticky", "top-[57px]", "flex", "flex-col", "gap-4"], [1, "relative", "bg-gradient-to-br", "from-blue-600", "via-blue-700", "to-indigo-700", "rounded-2xl", "p-5", "text-white", "overflow-hidden", "shadow-lg", "shadow-blue-200/50", "dark:shadow-blue-900/40"], [1, "absolute", "-top-6", "-right-6", "w-28", "h-28", "rounded-full", "bg-white/5", "pointer-events-none"], [1, "absolute", "-bottom-4", "-left-4", "w-20", "h-20", "rounded-full", "bg-white/5", "pointer-events-none"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "text-blue-200", "text-xs", "font-semibold", "uppercase", "tracking-wider", "mb-1"], [1, "text-3xl", "font-bold", "tabular-nums", "leading-none"], [1, "text-blue-200", "text-sm", "mt-1.5"], [1, "w-11", "h-11", "rounded-xl", "bg-white/20", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"], [1, "bg-white", "dark:bg-slate-900", "rounded-2xl", "border", "border-slate-100", "dark:border-slate-800", "shadow-sm", "overflow-hidden"], [1, "px-5", "py-3.5", "border-b", "border-slate-100", "dark:border-slate-800", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2"], [1, "w-7", "h-7", "rounded-lg", "bg-blue-100", "dark:bg-blue-900/30", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "text-blue-600", "dark:text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "px-5", "py-4", "space-y-4"], [1, "flex", "items-center", "gap-2", "bg-slate-50", "dark:bg-slate-800/60", "rounded-xl", "p-3"], [1, "flex-1", "text-center"], [1, "text-[10px]", "font-semibold", "text-slate-400", "uppercase", "tracking-wide", "mb-0.5"], [1, "font-bold", "text-sm", "text-slate-800", "dark:text-slate-200"], [1, "text-[11px]", "text-slate-500", "dark:text-slate-400", "truncate"], [1, "flex-shrink-0"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "transition-colors", 3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "transition-colors", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 8l4 4m0 0l-4 4m4-4H3"], [1, "space-y-2.5"], [1, "flex", "justify-between", "items-center"], [1, "text-sm", "text-slate-500", "dark:text-slate-400"], [1, "text-sm", "font-bold", "text-slate-900", "dark:text-white", "tabular-nums"], [1, "text-xs", "font-normal", "text-slate-400"], [1, "text-sm", "font-medium", "text-slate-700", "dark:text-slate-300", "tabular-nums"], [1, "text-sm", "font-medium", "text-slate-600", "dark:text-slate-400"], [1, "text-sm", "font-bold", "text-blue-700", "dark:text-blue-400", "tabular-nums"], [1, "h-px", "bg-slate-100", "dark:bg-slate-800"], [1, "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "text-xl", "font-bold", "tabular-nums", "transition-colors", 3, "ngClass"], ["class", "text-sm font-normal text-slate-400 dark:text-slate-500", 4, "ngIf"], ["class", "bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden", 4, "ngIf"], [1, "w-full", "py-4", "rounded-2xl", "font-bold", "text-sm", "transition-all", "flex", "items-center", "justify-center", "gap-2.5", 3, "click", "disabled", "ngClass"], ["class", "animate-spin w-4 h-4", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 4, "ngIf"], ["class", "text-xs text-center text-slate-400 dark:text-slate-500 -mt-1 px-2 leading-relaxed", 4, "ngIf"], [1, "success-overlay", "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/60", "backdrop-blur-sm", "p-4"], [1, "success-card", "bg-white", "dark:bg-slate-800", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "overflow-hidden"], [1, "bg-gradient-to-br", "from-emerald-500", "to-green-600", "px-8", "pt-10", "pb-6", "text-center", "text-white"], [1, "mx-auto", "mb-4", "w-16", "h-16", "rounded-full", "bg-white/20", "flex", "items-center", "justify-center"], ["viewBox", "0 0 60 60", "fill", "none", 1, "w-10", "h-10"], ["d", "M12 30 L24 42 L48 18", "stroke", "white", "stroke-width", "5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "checkmark-path"], [1, "text-2xl", "font-bold"], [1, "mt-1", "text-emerald-100", "text-sm"], [1, "px-8", "py-6", "space-y-4"], [1, "flex", "items-center", "justify-between", "bg-slate-50", "dark:bg-slate-700/50", "rounded-2xl", "p-4"], [1, "text-center"], [1, "text-xs", "text-slate-500", "dark:text-slate-400", "uppercase", "tracking-wide", "font-medium"], [1, "text-2xl", "font-bold", "text-slate-900", "dark:text-white", "tabular-nums", "mt-1"], [1, "flex", "flex-col", "items-center", "gap-1.5"], [1, "w-10", "h-10", "rounded-full", "bg-blue-50", "dark:bg-blue-900/30", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5", "text-blue-500"], [1, "text-xs", "text-slate-400", "tabular-nums"], [1, "text-2xl", "font-bold", "text-emerald-600", "dark:text-emerald-400", "tabular-nums", "mt-1"], [1, "space-y-0", "text-sm"], [1, "flex", "justify-between", "items-center", "py-2.5", "border-b", "border-slate-100", "dark:border-slate-700"], [1, "text-slate-500", "dark:text-slate-400"], [1, "font-semibold", "text-slate-900", "dark:text-white"], [1, "flex", "justify-between", "items-center", "py-2.5"], [1, "font-semibold", "text-amber-600", "dark:text-amber-400"], [1, "px-8", "pb-8", "flex", "gap-3"], [1, "flex-1", "flex", "items-center", "justify-center", "gap-2", "py-3.5", "rounded-xl", "border-2", "border-blue-500", "text-blue-600", "dark:text-blue-400", "font-semibold", "text-sm", "hover:bg-blue-50", "dark:hover:bg-blue-900/20", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "flex-1", "py-3.5", "rounded-xl", "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "text-sm", "transition-colors", 3, "click"], [1, "fixed", "inset-0", "z-50", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "pin-dialog", "absolute", "top-1/2", "left-1/2", "w-full", "max-w-sm", "bg-white", "dark:bg-slate-800", "rounded-2xl", "shadow-2xl", "overflow-hidden", 3, "click"], [1, "bg-gradient-to-r", "from-blue-600", "to-indigo-600", "px-6", "py-5", "flex", "items-center", "justify-between"], [1, "text-white", "font-bold", "text-lg"], [1, "text-blue-100", "text-xs", "mt-0.5"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "text-white/70", "hover:text-white", "hover:bg-white/10", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "px-6", "py-6", "space-y-4"], [1, "block", "text-sm", "font-medium", "text-slate-700", "dark:text-slate-300", "mb-2"], ["type", "password", "inputmode", "numeric", "maxlength", "6", "placeholder", "\u2022\u2022\u2022\u2022", 1, "w-full", "px-4", "py-4", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "text-slate-900", "dark:text-white", "text-center", "text-2xl", "tracking-[0.5em]", "font-bold", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngModelChange", "ngModel"], ["class", "flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm", 4, "ngIf"], [1, "w-full", "py-3.5", "rounded-xl", "bg-blue-600", "hover:bg-blue-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "text-white", "font-semibold", "text-sm", "transition-colors", "flex", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], [1, "flex", "items-center", "gap-2", "p-3", "rounded-xl", "bg-red-50", "dark:bg-red-900/20", "border", "border-red-200", "dark:border-red-800", "text-red-600", "dark:text-red-400", "text-sm"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "flex-shrink-0"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "fixed", "inset-0", "z-40", "bg-black/50", "backdrop-blur-sm", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "branch-popup", "w-full", "max-w-lg", "bg-white", "dark:bg-slate-800", "rounded-2xl", "shadow-2xl", "overflow-hidden", 3, "click"], [1, "px-6", "py-4", "border-b", "border-slate-100", "dark:border-slate-700", "flex", "items-center", "justify-between"], [1, "font-bold", "text-slate-900", "dark:text-white"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "text-slate-400", "hover:text-slate-600", "hover:bg-slate-100", "dark:hover:text-slate-300", "dark:hover:bg-slate-700", "transition-colors", 3, "click"], [1, "px-4", "pt-4", "pb-2"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-slate-400", "pointer-events-none"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0"], ["type", "text", "placeholder", "Search by name, code or address...", 1, "w-full", "pl-9", "pr-4", "py-2.5", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-slate-50", "dark:bg-slate-700", "text-sm", "text-slate-900", "dark:text-white", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "focus:bg-white", "dark:focus:bg-slate-600", "transition", 3, "ngModelChange", "input", "ngModel"], [1, "overflow-y-auto", "max-h-64", "px-3", "pb-4", "space-y-1"], ["class", "flex items-center justify-between p-3.5 rounded-xl cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-transparent hover:border-blue-200 dark:hover:border-blue-700 transition-all group", 3, "click", 4, "ngFor", "ngForOf"], ["class", "py-10 text-center text-slate-400 dark:text-slate-500 text-sm", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "p-3.5", "rounded-xl", "cursor-pointer", "hover:bg-blue-50", "dark:hover:bg-blue-900/20", "border", "border-transparent", "hover:border-blue-200", "dark:hover:border-blue-700", "transition-all", "group", 3, "click"], [1, "font-semibold", "text-sm", "text-slate-900", "dark:text-white", "group-hover:text-blue-700", "dark:group-hover:text-blue-400"], ["class", "text-xs text-slate-500 dark:text-slate-400 mt-0.5", 4, "ngIf"], ["class", "text-xs text-slate-400 dark:text-slate-500 mt-0.5", 4, "ngIf"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "text-slate-300", "group-hover:text-blue-500", "flex-shrink-0", "transition-colors"], [1, "text-xs", "text-slate-400", "dark:text-slate-500", "mt-0.5"], [1, "py-10", "text-center", "text-slate-400", "dark:text-slate-500", "text-sm"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "3", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], [1, "text-[10px]", "font-bold"], [1, "flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-xl", "bg-red-50", "dark:bg-red-900/20", "border", "border-red-200", "dark:border-red-800", "text-red-700", "dark:text-red-400", "text-xs", "font-semibold", "flex-shrink-0"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3.5", "h-3.5"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "3", 1, "w-4", "h-4"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "bg-blue-50", "dark:bg-blue-900/20", "text-blue-600", "dark:text-blue-400", "text-xs", "font-semibold", "hover:bg-blue-100", "dark:hover:bg-blue-900/40", "transition-colors", "flex-shrink-0", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], [1, "flex", "items-start", "gap-3", "p-4", "rounded-xl", "bg-red-50", "dark:bg-red-900/20", "border", "border-red-200", "dark:border-red-800", "text-red-700", "dark:text-red-400", "text-sm"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "flex-shrink-0", "mt-0.5"], [1, "flex", "items-start", "gap-3", "p-4", "rounded-xl", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-800", "text-amber-700", "dark:text-amber-400", "text-sm"], [1, "selected-card-appear", "flex", "items-center", "justify-between", "p-4", "rounded-xl", "bg-blue-50", "dark:bg-blue-900/20", "border", "border-blue-200", "dark:border-blue-800"], [1, "flex", "items-center", "gap-3", "min-w-0"], [1, "w-11", "h-11", "rounded-full", "bg-gradient-to-br", "from-blue-500", "to-indigo-600", "flex", "items-center", "justify-center", "text-white", "font-bold", "text-base", "flex-shrink-0"], [1, "min-w-0"], [1, "font-semibold", "text-slate-900", "dark:text-white", "text-sm", "truncate"], [1, "flex", "items-center", "gap-2", "flex-shrink-0", "ml-2"], ["class", "hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold", 4, "ngIf"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "text-slate-400", "hover:text-red-500", "hover:bg-red-50", "dark:hover:bg-red-900/20", "transition-all", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-4", "h-4"], [1, "hidden", "sm:inline-flex", "items-center", "gap-1", "px-2.5", "py-1", "rounded-full", "bg-emerald-100", "dark:bg-emerald-900/30", "text-emerald-700", "dark:text-emerald-400", "text-xs", "font-semibold"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3", "h-3"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule", "evenodd"], [1, "flex", "gap-2"], [1, "relative", "flex-1"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "absolute", "left-3.5", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-slate-400", "pointer-events-none"], ["type", "text", "placeholder", "Search by name, phone or email...", 1, "w-full", "pl-10", "pr-4", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-slate-50", "dark:bg-slate-800", "text-sm", "text-slate-900", "dark:text-white", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "focus:bg-white", "dark:focus:bg-slate-700", "transition", 3, "ngModelChange", "input", "keyup.enter", "ngModel"], [1, "flex", "items-center", "gap-1.5", "px-4", "py-3", "rounded-xl", "bg-blue-600", "hover:bg-blue-700", "active:scale-95", "text-white", "text-sm", "font-semibold", "transition-all", "flex-shrink-0", "shadow-sm", 3, "click"], ["class", "search-dropdown relative z-20 w-full mt-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden", 4, "ngIf"], ["class", "relative z-20 w-full mt-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-xl p-6 text-center", 4, "ngIf"], [1, "search-dropdown", "relative", "z-20", "w-full", "mt-2", "bg-white", "dark:bg-slate-800", "rounded-xl", "border", "border-slate-100", "dark:border-slate-700", "shadow-xl", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-4", "pt-3", "pb-2.5", "border-b", "border-slate-50", "dark:border-slate-700"], [1, "text-xs", "font-medium", "text-slate-500", "dark:text-slate-400"], [1, "w-6", "h-6", "flex", "items-center", "justify-center", "text-slate-400", "hover:text-slate-600", "dark:hover:text-slate-300", "rounded", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-3.5", "h-3.5"], [1, "max-h-52", "overflow-y-auto", "divide-y", "divide-slate-50", "dark:divide-slate-700/50"], ["class", "w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-left", 3, "click", 4, "ngFor", "ngForOf"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-3", "hover:bg-blue-50", "dark:hover:bg-blue-900/20", "transition-colors", "text-left", 3, "click"], [1, "w-9", "h-9", "rounded-full", "bg-gradient-to-br", "from-slate-400", "to-slate-600", "flex", "items-center", "justify-center", "text-white", "text-sm", "font-bold", "flex-shrink-0"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-white", "truncate"], ["class", "flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center", 4, "ngIf"], [1, "flex-shrink-0", "w-5", "h-5", "rounded-full", "bg-emerald-100", "dark:bg-emerald-900/40", "flex", "items-center", "justify-center"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3", "h-3", "text-emerald-600", "dark:text-emerald-400"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], [1, "relative", "z-20", "w-full", "mt-2", "bg-white", "dark:bg-slate-800", "rounded-xl", "border", "border-slate-100", "dark:border-slate-700", "shadow-xl", "p-6", "text-center"], [1, "mt-2", "text-sm", "text-blue-600", "dark:text-blue-400", "font-semibold", "hover:underline", 3, "click"], [1, "mb-5", "flex", "items-center", "justify-between"], [1, "font-semibold", "text-slate-900", "dark:text-white", "text-sm"], [1, "flex", "items-center", "gap-1", "text-xs", "text-slate-500", "hover:text-slate-700", "dark:text-slate-400", "dark:hover:text-slate-200", "font-medium", "transition-colors", 3, "click"], [1, "space-y-5", 3, "formGroup"], [1, "text-xs", "font-semibold", "text-slate-500", "dark:text-slate-400", "uppercase", "tracking-wider", "mb-4"], [1, "sm:col-span-2"], ["type", "text", "formControlName", "fullName", "placeholder", "John Doe", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngClass"], ["class", "mt-1.5 text-xs text-red-500 font-medium", 4, "ngIf"], ["type", "tel", "formControlName", "phone", "placeholder", "+1 555 0100", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngClass"], ["type", "email", "formControlName", "email", "placeholder", "john@example.com", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "placeholder-slate-400", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition"], ["formControlName", "dateOfBirth", "dateFormat", "yy-mm-dd", "placeholder", "YYYY-MM-DD", "appendTo", "body", "styleClass", "w-full", 3, "maxDate", "showIcon"], ["formControlName", "gender", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition"], ["value", "Male"], ["value", "Female"], ["formControlName", "nationality", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngClass"], ["formControlName", "country", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngClass"], ["type", "text", "formControlName", "city", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition"], ["type", "text", "formControlName", "state", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition"], ["type", "text", "formControlName", "postalCode", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition"], ["type", "text", "formControlName", "address", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition"], [1, "pt-5", "border-t", "border-slate-100", "dark:border-slate-800"], ["formControlName", "idDocumentType", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngClass"], ["type", "text", "formControlName", "idDocumentNumber", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngClass"], ["formControlName", "docIssueDate", "dateFormat", "yy-mm-dd", "placeholder", "YYYY-MM-DD", "appendTo", "body", "styleClass", "w-full", 3, "maxDate", "showIcon"], ["formControlName", "docExpiryDate", "dateFormat", "yy-mm-dd", "placeholder", "YYYY-MM-DD", "appendTo", "body", "styleClass", "w-full", 3, "minDate", "showIcon"], ["formControlName", "docIssuingCountry", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition"], ["class", "pt-5 border-t border-slate-100 dark:border-slate-800", 4, "ngIf"], ["class", "p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm", 4, "ngIf"], [1, "flex", "gap-3", "pt-2"], ["type", "button", 1, "flex-1", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "text-slate-600", "dark:text-slate-400", "text-sm", "font-semibold", "hover:bg-slate-50", "dark:hover:bg-slate-800", "transition-colors", 3, "click"], ["type", "button", 1, "flex-1", "py-3", "rounded-xl", "bg-blue-600", "hover:bg-blue-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "text-white", "text-sm", "font-semibold", "transition-colors", "flex", "items-center", "justify-center", "gap-2", "shadow-sm", 3, "click", "disabled"], [1, "mt-1.5", "text-xs", "text-red-500", "font-medium"], [3, "value"], [1, "grid", "grid-cols-2", "gap-4"], [1, "relative", "flex", "flex-col", "items-center", "justify-center", "h-32", "rounded-xl", "border-2", "border-dashed", "cursor-pointer", "transition-all", 3, "ngClass"], ["type", "file", "accept", "image/*", 1, "sr-only", 3, "change"], ["alt", "Front ID", "class", "absolute inset-0 w-full h-full object-cover rounded-xl opacity-80", 3, "src", 4, "ngIf"], ["class", "flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500", 4, "ngIf"], ["alt", "Back ID", "class", "absolute inset-0 w-full h-full object-cover rounded-xl opacity-80", 3, "src", 4, "ngIf"], ["alt", "Front ID", 1, "absolute", "inset-0", "w-full", "h-full", "object-cover", "rounded-xl", "opacity-80", 3, "src"], [1, "flex", "flex-col", "items-center", "gap-2", "text-slate-400", "dark:text-slate-500"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-7", "h-7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"], [1, "text-xs", "font-medium"], ["alt", "Back ID", 1, "absolute", "inset-0", "w-full", "h-full", "object-cover", "rounded-xl", "opacity-80", 3, "src"], [1, "p-4", "rounded-xl", "bg-red-50", "dark:bg-red-900/20", "border", "border-red-200", "dark:border-red-800", "text-red-600", "dark:text-red-400", "text-sm"], [1, "flex", "items-center", "gap-1.5", "text-xs", "text-blue-500", "font-medium"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-3.5", "h-3.5"], [1, "flex", "items-center", "gap-1.5", "text-xs", "text-emerald-600", "dark:text-emerald-400", "font-semibold"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5", "transition-colors", 3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4", "text-blue-500"], [1, "text-[11px]", "font-semibold", "text-slate-500", "dark:text-slate-400", "tabular-nums", "text-center", "leading-tight"], [1, "mt-5", "pt-4", "border-t", "border-slate-100", "dark:border-slate-800", "flex", "flex-wrap", "gap-x-6", "gap-y-2"], [1, "flex", "items-center", "gap-2", "text-sm"], [1, "font-semibold", "text-slate-700", "dark:text-slate-300", "tabular-nums"], [1, "font-bold", "text-blue-700", "dark:text-blue-400", "tabular-nums"], ["class", "flex items-center gap-2 text-sm ml-auto", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "text-sm", "ml-auto"], [1, "font-semibold", "tabular-nums", 3, "ngClass"], [1, "tabular-nums"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "bg-violet-50", "dark:bg-violet-900/20", "text-violet-600", "dark:text-violet-400", "text-xs", "font-semibold", "hover:bg-violet-100", "dark:hover:bg-violet-900/40", "transition-colors", "flex-shrink-0", 3, "click"], [1, "selected-card-appear", "flex", "items-center", "justify-between", "p-4", "rounded-xl", "bg-violet-50", "dark:bg-violet-900/20", "border", "border-violet-200", "dark:border-violet-800"], [1, "w-11", "h-11", "rounded-full", "bg-gradient-to-br", "from-violet-500", "to-purple-600", "flex", "items-center", "justify-center", "text-white", "font-bold", "text-base", "flex-shrink-0"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "text-slate-400", "hover:text-red-500", "hover:bg-red-50", "dark:hover:bg-red-900/20", "transition-all", "flex-shrink-0", "ml-2", 3, "click"], ["type", "text", "placeholder", "Search receiver by name or phone...", 1, "w-full", "pl-10", "pr-4", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-slate-50", "dark:bg-slate-800", "text-sm", "text-slate-900", "dark:text-white", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "focus:bg-white", "dark:focus:bg-slate-700", "transition", 3, "ngModelChange", "input", "ngModel"], [1, "space-y-2", "max-h-56", "overflow-y-auto"], ["class", "flex items-center gap-3.5 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-900/10 cursor-pointer transition-all group", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-3.5", "p-4", "rounded-xl", "border", "border-slate-100", "dark:border-slate-800", "hover:border-violet-300", "dark:hover:border-violet-700", "hover:bg-violet-50", "dark:hover:bg-violet-900/10", "cursor-pointer", "transition-all", "group", 3, "click"], [1, "w-10", "h-10", "rounded-full", "bg-gradient-to-br", "from-violet-400", "to-purple-600", "flex", "items-center", "justify-center", "text-white", "text-sm", "font-bold", "flex-shrink-0"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-white", "group-hover:text-violet-700", "dark:group-hover:text-violet-400", "truncate"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "text-slate-300", "group-hover:text-violet-500", "flex-shrink-0", "transition-colors"], [1, "py-10", "text-center"], [1, "w-14", "h-14", "mx-auto", "mb-4", "rounded-2xl", "bg-slate-100", "dark:bg-slate-800", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-7", "h-7", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "text-xs", "text-slate-400", "dark:text-slate-500", "mt-1", "mb-4"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2.5", "rounded-xl", "bg-violet-600", "hover:bg-violet-700", "text-white", "text-sm", "font-semibold", "transition-colors", "shadow-sm", 3, "click"], [1, "space-y-4", 3, "formGroup"], ["type", "text", "formControlName", "fullName", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngClass"], ["type", "tel", "formControlName", "phone", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngClass"], ["type", "email", "formControlName", "email", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition"], ["formControlName", "country", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition"], ["formControlName", "relationship", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition"], ["value", "Family"], ["value", "Friend"], ["class", "pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4", 4, "ngIf"], ["class", "pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3", 4, "ngIf"], ["type", "button", 1, "flex-1", "py-3", "rounded-xl", "bg-violet-600", "hover:bg-violet-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "text-white", "text-sm", "font-semibold", "transition-colors", "flex", "items-center", "justify-center", "gap-2", "shadow-sm", 3, "click", "disabled"], [1, "pt-4", "border-t", "border-slate-100", "dark:border-slate-800", "space-y-4"], ["class", "sm:col-span-2", 4, "ngIf"], ["type", "text", "formControlName", "accountNumber", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngClass"], [1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngModelChange", "change", "ngModel", "ngModelOptions", "ngClass"], ["type", "text", "formControlName", "bankName", 1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "text-sm", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngClass"], [1, "flex-1", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-slate-50", "dark:bg-slate-800", "text-sm", "min-h-[46px]", "flex", "items-center", "text-slate-700", "dark:text-slate-300"], ["type", "button", 1, "px-4", "py-3", "rounded-xl", "border", "border-blue-200", "dark:border-blue-800", "bg-blue-50", "dark:bg-blue-900/20", "text-blue-600", "dark:text-blue-400", "text-sm", "font-semibold", "hover:bg-blue-100", "dark:hover:bg-blue-900/40", "transition-colors", "whitespace-nowrap", 3, "click"], [1, "pt-4", "border-t", "border-slate-100", "dark:border-slate-800", "space-y-3"], [1, "w-full", "px-3.5", "py-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition", 3, "ngModelChange", "change", "ngModel", "ngModelOptions"], [1, "space-y-2"], ["class", "alert-item flex items-start gap-3 p-4 rounded-xl text-sm border", 3, "animation-delay", "ngClass", 4, "ngFor", "ngForOf"], [1, "alert-item", "flex", "items-start", "gap-3", "p-4", "rounded-xl", "text-sm", "border", 3, "ngClass"], [1, "font-semibold"], [1, "text-xs", "opacity-80", "mt-0.5"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-5", "h-5"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-5", "h-5"], [1, "flex", "justify-between", "text-xs", "text-blue-200", "mb-2"], [1, "tabular-nums", "font-medium"], [1, "h-2", "rounded-full", "bg-white/20", "overflow-hidden"], [1, "balance-bar-fill", "h-full", "rounded-full", 3, "ngClass"], [1, "text-sm", "font-normal", "text-slate-400", "dark:text-slate-500"], [1, "px-5", "py-3.5", "border-b", "border-slate-100", "dark:border-slate-800"], [1, "px-5", "py-4", "space-y-3"], [1, "flex", "justify-between", "items-start", "gap-3"], [1, "text-sm", "text-slate-500", "dark:text-slate-400", "shrink-0"], [1, "font-semibold", "text-sm", "text-slate-900", "dark:text-white", "text-right", "truncate"], [1, "font-semibold", "text-sm", "text-slate-900", "dark:text-white"], ["class", "flex justify-between items-start gap-3", 4, "ngIf"], ["class", "flex items-center gap-2 pt-1 text-xs text-amber-600 dark:text-amber-400 font-semibold", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "pt-1", "text-xs", "text-amber-600", "dark:text-amber-400", "font-semibold"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3.5", "h-3.5", "flex-shrink-0"], [1, "text-xs", "text-center", "text-slate-400", "dark:text-slate-500", "-mt-1", "px-2", "leading-relaxed"]], template: function SendMoneyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, SendMoneyComponent_div_1_Template, 63, 19, "div", 1)(2, SendMoneyComponent_div_2_Template, 21, 9, "div", 2)(3, SendMoneyComponent_div_3_Template, 19, 4, "div", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 8);
        \u0275\u0275element(9, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "div")(11, "h1", 10);
        \u0275\u0275text(12, "Send Money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 11);
        \u0275\u0275text(14);
        \u0275\u0275template(15, SendMoneyComponent_span_15_Template, 2, 1, "span", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "div", 15);
        \u0275\u0275template(19, SendMoneyComponent__svg_svg_19_Template, 2, 0, "svg", 16)(20, SendMoneyComponent_span_20_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 18);
        \u0275\u0275text(22, "Customer");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(23, "svg", 19);
        \u0275\u0275element(24, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(25, "div", 14)(26, "div", 15);
        \u0275\u0275template(27, SendMoneyComponent__svg_svg_27_Template, 2, 0, "svg", 16)(28, SendMoneyComponent_span_28_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 18);
        \u0275\u0275text(30, "Transfer");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 19);
        \u0275\u0275element(32, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(33, "div", 14)(34, "div", 15);
        \u0275\u0275template(35, SendMoneyComponent__svg_svg_35_Template, 2, 0, "svg", 16)(36, SendMoneyComponent_span_36_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 18);
        \u0275\u0275text(38, "Receiver");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(39, SendMoneyComponent_div_39_Template, 4, 0, "div", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 22)(41, "div", 23)(42, "div", 24)(43, "section", 25)(44, "div", 26)(45, "div", 27);
        \u0275\u0275template(46, SendMoneyComponent__svg_svg_46_Template, 2, 0, "svg", 28)(47, SendMoneyComponent_span_47_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 29)(49, "h2", 30);
        \u0275\u0275text(50, "Customer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p", 31);
        \u0275\u0275text(52, "Search existing or register a new customer");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(53, SendMoneyComponent_button_53_Template, 4, 0, "button", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 33);
        \u0275\u0275template(55, SendMoneyComponent_div_55_Template, 4, 1, "div", 34)(56, SendMoneyComponent_div_56_Template, 4, 1, "div", 35)(57, SendMoneyComponent_div_57_Template, 15, 5, "div", 36)(58, SendMoneyComponent_div_58_Template, 12, 3, "div", 12)(59, SendMoneyComponent_div_59_Template, 130, 28, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "section", 25)(61, "div", 26)(62, "div", 27);
        \u0275\u0275template(63, SendMoneyComponent__svg_svg_63_Template, 2, 0, "svg", 28)(64, SendMoneyComponent_span_64_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div")(66, "h2", 30);
        \u0275\u0275text(67, "Transfer Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "p", 31);
        \u0275\u0275text(69, "Amount, destination and collection method");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "div", 37)(71, "div", 38)(72, "div")(73, "label", 39);
        \u0275\u0275text(74, "Send To ");
        \u0275\u0275elementStart(75, "span", 40);
        \u0275\u0275text(76, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "select", 41);
        \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Template_select_ngModelChange_77_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.receiverCountry, $event) || (ctx.receiverCountry = $event);
          return $event;
        });
        \u0275\u0275listener("change", function SendMoneyComponent_Template_select_change_77_listener() {
          return ctx.onReceiverCountryChange();
        });
        \u0275\u0275elementStart(78, "option", 42);
        \u0275\u0275text(79, "Select destination country");
        \u0275\u0275elementEnd();
        \u0275\u0275template(80, SendMoneyComponent_option_80_Template, 2, 2, "option", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div")(82, "label", 39);
        \u0275\u0275text(83, "Collection Method ");
        \u0275\u0275elementStart(84, "span", 40);
        \u0275\u0275text(85, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "select", 41);
        \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Template_select_ngModelChange_86_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPaymentMethodId, $event) || (ctx.selectedPaymentMethodId = $event);
          return $event;
        });
        \u0275\u0275listener("change", function SendMoneyComponent_Template_select_change_86_listener() {
          return ctx.onPaymentMethodChange();
        });
        \u0275\u0275elementStart(87, "option", 44);
        \u0275\u0275text(88, "Select method");
        \u0275\u0275elementEnd();
        \u0275\u0275template(89, SendMoneyComponent_option_89_Template, 2, 2, "option", 45);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(90, SendMoneyComponent_div_90_Template, 4, 1, "div", 35);
        \u0275\u0275elementStart(91, "div", 46)(92, "div", 47)(93, "span", 48);
        \u0275\u0275text(94, "Exchange Calculator");
        \u0275\u0275elementEnd();
        \u0275\u0275template(95, SendMoneyComponent_div_95_Template, 5, 0, "div", 49)(96, SendMoneyComponent_div_96_Template, 4, 0, "div", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 51)(98, "div", 52)(99, "div", 53)(100, "label", 54);
        \u0275\u0275text(101, "You Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "div", 55)(103, "div", 56)(104, "span", 57);
        \u0275\u0275text(105);
        \u0275\u0275elementEnd();
        \u0275\u0275element(106, "span", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "input", 59);
        \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Template_input_ngModelChange_107_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sendAmount, $event) || (ctx.sendAmount = $event);
          return $event;
        });
        \u0275\u0275listener("input", function SendMoneyComponent_Template_input_input_107_listener() {
          return ctx.onAmountChange();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "div", 60)(109, "div", 61);
        \u0275\u0275template(110, SendMoneyComponent__svg_svg_110_Template, 2, 1, "svg", 62)(111, SendMoneyComponent__svg_svg_111_Template, 3, 0, "svg", 63);
        \u0275\u0275elementEnd();
        \u0275\u0275template(112, SendMoneyComponent_span_112_Template, 3, 4, "span", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 53)(114, "label", 54);
        \u0275\u0275text(115, "They Receive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 55)(117, "div", 56)(118, "span", 65);
        \u0275\u0275text(119);
        \u0275\u0275elementEnd();
        \u0275\u0275element(120, "span", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "div", 66);
        \u0275\u0275text(122);
        \u0275\u0275pipe(123, "number");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(124, SendMoneyComponent_div_124_Template, 14, 11, "div", 67);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(125, SendMoneyComponent_div_125_Template, 4, 1, "div", 34)(126, SendMoneyComponent_div_126_Template, 4, 1, "div", 34)(127, SendMoneyComponent_div_127_Template, 8, 5, "div", 34)(128, SendMoneyComponent_div_128_Template, 9, 5, "div", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "section", 25)(130, "div", 26)(131, "div", 27);
        \u0275\u0275template(132, SendMoneyComponent__svg_svg_132_Template, 2, 0, "svg", 28)(133, SendMoneyComponent_span_133_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "div", 29)(135, "h2", 30);
        \u0275\u0275text(136, "Receiver");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "p", 68);
        \u0275\u0275template(138, SendMoneyComponent_span_138_Template, 2, 1, "span", 12)(139, SendMoneyComponent_span_139_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(140, SendMoneyComponent_button_140_Template, 4, 0, "button", 69);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "div", 33);
        \u0275\u0275template(142, SendMoneyComponent_div_142_Template, 14, 5, "div", 70)(143, SendMoneyComponent_div_143_Template, 4, 1, "div", 71)(144, SendMoneyComponent_div_144_Template, 2, 1, "div", 72)(145, SendMoneyComponent_div_145_Template, 13, 1, "div", 73)(146, SendMoneyComponent_div_146_Template, 66, 13, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(147, "section", 25)(148, "div", 26)(149, "div", 27);
        \u0275\u0275template(150, SendMoneyComponent__svg_svg_150_Template, 2, 0, "svg", 28)(151, SendMoneyComponent_span_151_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "div")(153, "h2", 30);
        \u0275\u0275text(154, "Compliance Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "p", 31);
        \u0275\u0275text(156, "Purpose & source of funds declaration");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(157, "div", 74)(158, "div")(159, "label", 39);
        \u0275\u0275text(160, " Purpose of Remittance ");
        \u0275\u0275elementStart(161, "span", 40);
        \u0275\u0275text(162, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(163, "select", 75);
        \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Template_select_ngModelChange_163_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.purpose, $event) || (ctx.purpose = $event);
          return $event;
        });
        \u0275\u0275elementStart(164, "option", 42);
        \u0275\u0275text(165, "Select purpose");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "option", 76);
        \u0275\u0275text(167, "Family Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "option", 77);
        \u0275\u0275text(169, "Education");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "option", 78);
        \u0275\u0275text(171, "Medical");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "option", 79);
        \u0275\u0275text(173, "Business");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "option", 80);
        \u0275\u0275text(175, "Investment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "option", 81);
        \u0275\u0275text(177, "Gift");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "option", 82);
        \u0275\u0275text(179, "Travel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "option", 83);
        \u0275\u0275text(181, "Other");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(182, "div")(183, "label", 39);
        \u0275\u0275text(184, " Source of Funds ");
        \u0275\u0275elementStart(185, "span", 40);
        \u0275\u0275text(186, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(187, "select", 75);
        \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_Template_select_ngModelChange_187_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sourceOfFunds, $event) || (ctx.sourceOfFunds = $event);
          return $event;
        });
        \u0275\u0275elementStart(188, "option", 42);
        \u0275\u0275text(189, "Select source");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "option", 84);
        \u0275\u0275text(191, "Salary / Employment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "option", 79);
        \u0275\u0275text(193, "Business Income");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "option", 85);
        \u0275\u0275text(195, "Savings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "option", 80);
        \u0275\u0275text(197, "Investment Returns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "option", 86);
        \u0275\u0275text(199, "Pension / Retirement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "option", 81);
        \u0275\u0275text(201, "Gift / Inheritance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "option", 83);
        \u0275\u0275text(203, "Other");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(204, "div", 87);
        \u0275\u0275template(205, SendMoneyComponent_div_205_Template, 2, 1, "div", 88);
        \u0275\u0275elementStart(206, "button", 89);
        \u0275\u0275listener("click", function SendMoneyComponent_Template_button_click_206_listener() {
          return ctx.submitTransaction();
        });
        \u0275\u0275template(207, SendMoneyComponent__svg_svg_207_Template, 3, 0, "svg", 90)(208, SendMoneyComponent__svg_svg_208_Template, 2, 0, "svg", 91);
        \u0275\u0275text(209);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(210, "aside", 92)(211, "div", 93)(212, "div", 94);
        \u0275\u0275element(213, "div", 95)(214, "div", 96);
        \u0275\u0275elementStart(215, "div", 55)(216, "div", 97)(217, "div")(218, "p", 98);
        \u0275\u0275text(219, "Available Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "p", 99);
        \u0275\u0275text(221);
        \u0275\u0275pipe(222, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "p", 100);
        \u0275\u0275text(224);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(225, "div", 101);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(226, "svg", 102);
        \u0275\u0275element(227, "path", 103);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(228, SendMoneyComponent_div_228_Template, 10, 11, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(229, "div", 104)(230, "div", 105)(231, "div", 106)(232, "div", 107);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(233, "svg", 108);
        \u0275\u0275element(234, "path", 109);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(235, "h3", 30);
        \u0275\u0275text(236, "Live Calculator");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(237, SendMoneyComponent__svg_svg_237_Template, 3, 0, "svg", 63);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(238, "div", 110)(239, "div", 111)(240, "div", 112)(241, "p", 113);
        \u0275\u0275text(242, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(243, "p", 114);
        \u0275\u0275text(244);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(245, "p", 115);
        \u0275\u0275text(246);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(247, "div", 116)(248, "div", 117);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(249, "svg", 118);
        \u0275\u0275element(250, "path", 119);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(251, "div", 112)(252, "p", 113);
        \u0275\u0275text(253, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "p", 114);
        \u0275\u0275text(255);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "p", 115);
        \u0275\u0275text(257);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(258, "div", 120)(259, "div", 121)(260, "span", 122);
        \u0275\u0275text(261, "You Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(262, "span", 123);
        \u0275\u0275text(263);
        \u0275\u0275pipe(264, "number");
        \u0275\u0275elementStart(265, "span", 124);
        \u0275\u0275text(266);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(267, "div", 121)(268, "span", 122);
        \u0275\u0275text(269, "Exchange Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(270, "span", 125);
        \u0275\u0275text(271);
        \u0275\u0275pipe(272, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(273, "div", 121)(274, "span", 122);
        \u0275\u0275text(275, "Service Charge");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(276, "span", 125);
        \u0275\u0275text(277);
        \u0275\u0275pipe(278, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(279, "div", 121)(280, "span", 126);
        \u0275\u0275text(281, "Total Payable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(282, "span", 127);
        \u0275\u0275text(283);
        \u0275\u0275pipe(284, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(285, "div", 128);
        \u0275\u0275elementStart(286, "div", 121)(287, "span", 129);
        \u0275\u0275text(288, "They Receive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(289, "span", 130);
        \u0275\u0275text(290);
        \u0275\u0275pipe(291, "number");
        \u0275\u0275template(292, SendMoneyComponent_span_292_Template, 2, 1, "span", 131);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(293, SendMoneyComponent_div_293_Template, 2, 1, "div", 88)(294, SendMoneyComponent_div_294_Template, 27, 6, "div", 132);
        \u0275\u0275elementStart(295, "button", 133);
        \u0275\u0275listener("click", function SendMoneyComponent_Template_button_click_295_listener() {
          return ctx.submitTransaction();
        });
        \u0275\u0275template(296, SendMoneyComponent__svg_svg_296_Template, 3, 0, "svg", 134)(297, SendMoneyComponent__svg_svg_297_Template, 2, 0, "svg", 135);
        \u0275\u0275text(298);
        \u0275\u0275elementEnd();
        \u0275\u0275template(299, SendMoneyComponent_p_299_Template, 6, 5, "p", 136);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successResult);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPinDialog);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBranchPopup);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1(" ", (ctx.agentProfile == null ? null : ctx.agentProfile.businessName) || "Agent Portal", "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.senderCurrency);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.canProceedStep1() ? "bg-emerald-500 text-white" : "bg-blue-600 text-white");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.canProceedStep1());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.canProceedStep1());
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.canProceedStep1() ? "text-emerald-600 dark:text-emerald-400" : "text-blue-600 dark:text-blue-400");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", ctx.canProceedStep2() ? "bg-emerald-500 text-white" : ctx.canProceedStep1() ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-400");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.canProceedStep2());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.canProceedStep2());
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.canProceedStep2() ? "text-emerald-600 dark:text-emerald-400" : ctx.canProceedStep1() ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", ctx.selectedReceiver ? "bg-emerald-500 text-white" : ctx.canProceedStep1() ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-400");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedReceiver);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedReceiver);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.selectedReceiver ? "text-emerald-600 dark:text-emerald-400" : ctx.step >= 2 ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.agentBalanceZero);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", ctx.canProceedStep1() ? "bg-emerald-500 text-white" : "bg-blue-600 text-white step-num-active");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.canProceedStep1());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.canProceedStep1());
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", !ctx.showCreateCustomer && !ctx.selectedCustomer);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.appSettings.kycEnabled && ctx.kycWarning);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dobWarning);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedCustomer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedCustomer && !ctx.showCreateCustomer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCreateCustomer);
        \u0275\u0275advance();
        \u0275\u0275classProp("section-locked", !ctx.canProceedStep1());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.canProceedStep2() ? "bg-emerald-500 text-white" : ctx.canProceedStep1() ? "bg-blue-600 text-white step-num-active" : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.canProceedStep2());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.canProceedStep2());
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.receiverCountry);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.countries);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedPaymentMethodId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.paymentMethods);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.routeError);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.loadingCalc);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingCalc && ctx.calculationDone);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.senderCurrency);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.sendAmount);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.calculationDone ? "bg-blue-600 shadow-md shadow-blue-200/60 dark:shadow-blue-900" : "bg-slate-100 dark:bg-slate-800");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingCalc);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loadingCalc);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.exchangeRate > 0);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", ctx.calculationDone && ctx.receiveAmount > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.receiverCurrency, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.calculationDone && ctx.receiveAmount > 0 ? "border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400" : "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-300 dark:text-slate-600");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.receiveAmount > 0 ? \u0275\u0275pipeBind2(123, 109, ctx.receiveAmount, "1.2-2") : "0.00", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.calculationDone);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.calcError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.balanceWarning);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.exceedsSingleLimit);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.needsManagerApproval && !ctx.exceedsSingleLimit);
        \u0275\u0275advance();
        \u0275\u0275classProp("section-locked", !ctx.canProceedStep1());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.selectedReceiver ? "bg-emerald-500 text-white" : ctx.canProceedStep1() ? "bg-blue-600 text-white step-num-active" : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedReceiver);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedReceiver);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.receiverCountry);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.receiverCountry);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showCreateReceiver && ctx.canProceedStep1());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.selectedReceiver);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedReceiver && !ctx.showCreateReceiver);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedReceiver && !ctx.showCreateReceiver && ctx.filteredReceivers.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedReceiver && !ctx.showCreateReceiver && ctx.filteredReceivers.length === 0 && ctx.canProceedStep1());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCreateReceiver);
        \u0275\u0275advance();
        \u0275\u0275classProp("section-locked", !ctx.selectedReceiver);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.canProceedStep3() ? "bg-emerald-500 text-white" : ctx.selectedReceiver ? "bg-blue-600 text-white step-num-active" : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.canProceedStep3());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.canProceedStep3());
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.purpose);
        \u0275\u0275property("ngClass", ctx.selectedReceiver && !ctx.purpose ? "border-red-400 bg-red-50 dark:bg-red-900/20" : "border-slate-200 dark:border-slate-700");
        \u0275\u0275advance(24);
        \u0275\u0275twoWayProperty("ngModel", ctx.sourceOfFunds);
        \u0275\u0275property("ngClass", ctx.selectedReceiver && !ctx.sourceOfFunds ? "border-red-400 bg-red-50 dark:bg-red-900/20" : "border-slate-200 dark:border-slate-700");
        \u0275\u0275advance(18);
        \u0275\u0275property("ngIf", ctx.complianceViolations.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.canProceedStep3() || ctx.submitting || ctx.complianceBlocked || ctx.agentBalanceZero || ctx.exceedsSingleLimit)("ngClass", ctx.canProceedStep3() && !ctx.complianceBlocked && !ctx.agentBalanceZero && !ctx.exceedsSingleLimit ? "bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white shadow-lg shadow-blue-200/60 dark:shadow-blue-900/50" : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitting);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.submitting);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.submitting ? "Processing..." : "Submit Transaction", " ");
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1(" ", ctx.agentProfile ? \u0275\u0275pipeBind2(222, 112, ctx.agentProfile.creditLimit - ctx.agentProfile.currentBalance, "1.2-2") : "\u2014", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.senderCurrency);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.agentProfile && ctx.agentProfile.creditLimit > 0);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.loadingCalc);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.senderCurrency || "\u2014");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.senderCountry || "\u2014");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.calculationDone ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-slate-200 dark:bg-slate-700");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.calculationDone ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.receiverCurrency || "\u2014");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.receiverCountry || "\u2014");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.sendAmount > 0 ? \u0275\u0275pipeBind2(264, 115, ctx.sendAmount, "1.2-2") : "\u2014", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.senderCurrency, "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.exchangeRate > 0 ? "1 = " + \u0275\u0275pipeBind2(272, 118, ctx.exchangeRate, "1.4-4") : "\u2014", " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.serviceCharge > 0 ? \u0275\u0275pipeBind2(278, 121, ctx.serviceCharge, "1.2-2") + " " + ctx.senderCurrency : "\u2014", " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.totalPayable > 0 ? \u0275\u0275pipeBind2(284, 124, ctx.totalPayable, "1.2-2") + " " + ctx.senderCurrency : "\u2014", " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", ctx.receiveAmount > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-300 dark:text-slate-600");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.receiveAmount > 0 ? \u0275\u0275pipeBind2(291, 127, ctx.receiveAmount, "1.2-2") : "0.00", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.receiverCurrency);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.complianceViolations.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedReceiver && ctx.calculationDone);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.canProceedStep3() || ctx.submitting || ctx.complianceBlocked || ctx.agentBalanceZero || ctx.exceedsSingleLimit)("ngClass", ctx.canProceedStep3() && !ctx.complianceBlocked && !ctx.agentBalanceZero && !ctx.exceedsSingleLimit ? "bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white shadow-lg shadow-blue-200/60 dark:shadow-blue-900/50" : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitting);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.submitting);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.submitting ? "Processing..." : "Submit Transaction", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.canProceedStep3());
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      DecimalPipe,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      MinValidator,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      RouterModule,
      DatePicker
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.canvas-section[_ngcontent-%COMP%] {\n  transition: opacity 0.3s ease-out, transform 0.3s ease-out;\n  will-change: opacity, transform;\n}\n.section-locked[_ngcontent-%COMP%] {\n  opacity: 0.42;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  filter: grayscale(0.2);\n}\n@keyframes _ngcontent-%COMP%_sectionUnlock {\n  from {\n    opacity: 0.42;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.section-unlocked[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sectionUnlock 0.3s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_stepPulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.35);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);\n  }\n}\n.step-num-active[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_stepPulse 2.2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_dropdownSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-6px) scaleY(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scaleY(1);\n  }\n}\n.search-dropdown[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dropdownSlide 0.16s ease-out forwards;\n  transform-origin: top center;\n}\n@keyframes _ngcontent-%COMP%_calcValuePop {\n  0% {\n    transform: scale(1);\n  }\n  40% {\n    transform: scale(1.04);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.calc-value-update[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_calcValuePop 0.25s ease-out;\n}\n.balance-bar-fill[_ngcontent-%COMP%] {\n  transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes _ngcontent-%COMP%_overlayFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_successCardBounce {\n  0% {\n    opacity: 0;\n    transform: scale(0.88) translateY(24px);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.02) translateY(-4px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.success-overlay[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_overlayFadeIn 0.25s ease-out forwards;\n}\n.success-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_successCardBounce 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n@keyframes _ngcontent-%COMP%_checkmarkDraw {\n  from {\n    stroke-dashoffset: 60;\n    opacity: 0;\n  }\n  to {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n}\n.checkmark-path[_ngcontent-%COMP%] {\n  stroke-dasharray: 60;\n  stroke-dashoffset: 60;\n  animation: _ngcontent-%COMP%_checkmarkDraw 0.5s ease-out 0.2s forwards;\n}\n@keyframes _ngcontent-%COMP%_pinDialogIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -46%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.pin-dialog[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pinDialogIn 0.22s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_branchPopupIn {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.branch-popup[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_branchPopupIn 0.22s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_selectedCardIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.selected-card-appear[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_selectedCardIn 0.2s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_alertSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.alert-item[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_alertSlideIn 0.2s ease-out forwards;\n}\n/*# sourceMappingURL=send-money.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SendMoneyComponent, [{
    type: Component,
    args: [{ selector: "app-send-money", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      DecimalPipe,
      DatePicker
    ], providers: [SendMoneyStore], template: `<!-- =========================================================================
     Send Money \u2014 Professional Redesign
     ========================================================================= -->
<div class="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SUCCESS OVERLAY
       \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="successResult"
       class="success-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
    <div class="success-card bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">

      <div class="bg-gradient-to-br from-emerald-500 to-green-600 px-8 pt-10 pb-6 text-center text-white">
        <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          <svg viewBox="0 0 60 60" class="w-10 h-10" fill="none">
            <path class="checkmark-path" d="M12 30 L24 42 L48 18"
                  stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h2 class="text-2xl font-bold">Transaction Submitted!</h2>
        <p class="mt-1 text-emerald-100 text-sm">Ref: {{ successResult.referenceNumber }}</p>
      </div>

      <div class="px-8 py-6 space-y-4">
        <div class="flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-4">
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium">You Send</p>
            <p class="text-2xl font-bold text-slate-900 dark:text-white tabular-nums mt-1">
              {{ successResult.sendAmount | number:'1.2-2' }}
            </p>
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ successResult.sendCurrency }}</p>
          </div>
          <div class="flex flex-col items-center gap-1.5">
            <div class="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>
            <p class="text-xs text-slate-400 tabular-nums">{{ successResult.exchangeRateApplied | number:'1.4-4' }}</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium">They Get</p>
            <p class="text-2xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums mt-1">
              {{ successResult.receiveAmount | number:'1.2-2' }}
            </p>
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ successResult.receiveCurrency }}</p>
          </div>
        </div>

        <div class="space-y-0 text-sm">
          <div class="flex justify-between items-center py-2.5 border-b border-slate-100 dark:border-slate-700">
            <span class="text-slate-500 dark:text-slate-400">Sender</span>
            <span class="font-semibold text-slate-900 dark:text-white">{{ successResult.senderName }}</span>
          </div>
          <div class="flex justify-between items-center py-2.5 border-b border-slate-100 dark:border-slate-700">
            <span class="text-slate-500 dark:text-slate-400">Receiver</span>
            <span class="font-semibold text-slate-900 dark:text-white">{{ successResult.receiverName }}</span>
          </div>
          <div class="flex justify-between items-center py-2.5 border-b border-slate-100 dark:border-slate-700">
            <span class="text-slate-500 dark:text-slate-400">Country</span>
            <span class="font-semibold text-slate-900 dark:text-white">{{ successResult.receiverCountry }}</span>
          </div>
          <div class="flex justify-between items-center py-2.5">
            <span class="text-slate-500 dark:text-slate-400">Status</span>
            <span class="font-semibold text-amber-600 dark:text-amber-400">{{ getStatusLabel(successResult.status) }}</span>
          </div>
        </div>
      </div>

      <div class="px-8 pb-8 flex gap-3">
        <button (click)="downloadReceipt()"
                class="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Receipt
        </button>
        <button (click)="startNewTransaction()"
                class="flex-1 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors">
          New Transfer
        </button>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       PIN DIALOG
       \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="showPinDialog"
       class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
       (click)="closePinDialog()">
    <div class="pin-dialog absolute top-1/2 left-1/2 w-full max-w-sm bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
         (click)="$event.stopPropagation()">

      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 flex items-center justify-between">
        <div>
          <h3 class="text-white font-bold text-lg">
            {{ pinMode === 'set' ? 'Create Transaction PIN' : 'Authorize Transfer' }}
          </h3>
          <p class="text-blue-100 text-xs mt-0.5">
            {{ pinMode === 'set' ? 'Set a 4\u20136 digit PIN to secure your transactions' : 'Enter your PIN to confirm this transfer' }}
          </p>
        </div>
        <button (click)="closePinDialog()" class="w-8 h-8 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="px-6 py-6 space-y-4">
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            {{ pinMode === 'set' ? 'New PIN' : 'Transaction PIN' }}
          </label>
          <input type="password" inputmode="numeric" maxlength="6"
                 [(ngModel)]="pinInput" placeholder="\u2022\u2022\u2022\u2022"
                 class="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-center text-2xl tracking-[0.5em] font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
        </div>
        <div *ngIf="pinMode === 'set'">
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Confirm PIN</label>
          <input type="password" inputmode="numeric" maxlength="6"
                 [(ngModel)]="pinConfirm" placeholder="\u2022\u2022\u2022\u2022"
                 class="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-center text-2xl tracking-[0.5em] font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
        </div>
        <div *ngIf="pinError"
             class="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
          <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
          </svg>
          {{ pinError }}
        </div>
        <button (click)="onPinSubmit()" [disabled]="pinLoading"
                class="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2">
          <svg *ngIf="pinLoading" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          {{ pinLoading ? 'Verifying...' : (pinMode === 'set' ? 'Set PIN & Continue' : 'Authorize Transfer') }}
        </button>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       BRANCH POPUP
       \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="showBranchPopup"
       class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
       (click)="closeBranchPopup()">
    <div class="branch-popup w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
         (click)="$event.stopPropagation()">

      <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-slate-900 dark:text-white">Select Branch</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{{ branchBank?.bankName }}</p>
        </div>
        <button (click)="closeBranchPopup()" class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:text-slate-300 dark:hover:bg-slate-700 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="px-4 pt-4 pb-2">
        <div class="relative">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0"/>
          </svg>
          <input type="text" [(ngModel)]="branchSearch" (input)="filterBranches()"
                 placeholder="Search by name, code or address..."
                 class="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white dark:focus:bg-slate-600 transition"/>
        </div>
      </div>

      <div class="overflow-y-auto max-h-64 px-3 pb-4 space-y-1">
        <div *ngFor="let branch of filteredBranches"
             (click)="selectBranch(branch)"
             class="flex items-center justify-between p-3.5 rounded-xl cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-transparent hover:border-blue-200 dark:hover:border-blue-700 transition-all group">
          <div>
            <p class="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400">{{ branch.branchName }}</p>
            <p *ngIf="branch.branchCode" class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Code: {{ branch.branchCode }}</p>
            <p *ngIf="branch.address" class="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{{ branch.address }}</p>
          </div>
          <svg class="w-4 h-4 text-slate-300 group-hover:text-blue-500 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
        <div *ngIf="filteredBranches.length === 0"
             class="py-10 text-center text-slate-400 dark:text-slate-500 text-sm">
          No branches found
        </div>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       PAGE HEADER
       \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-30 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">

      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
          <svg class="w-[18px] h-[18px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
          </svg>
        </div>
        <div>
          <h1 class="text-sm font-bold text-slate-900 dark:text-white leading-tight">Send Money</h1>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-tight">
            {{ agentProfile?.businessName || 'Agent Portal' }}<span *ngIf="senderCurrency"> &middot; {{ senderCurrency }}</span>
          </p>
        </div>
      </div>

      <!-- Step progress -->
      <div class="hidden sm:flex items-center gap-2 text-xs font-medium">
        <div class="flex items-center gap-1.5">
          <div class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
               [ngClass]="canProceedStep1() ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white'">
            <svg *ngIf="canProceedStep1()" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <span *ngIf="!canProceedStep1()" class="text-[10px] font-bold">1</span>
          </div>
          <span [ngClass]="canProceedStep1() ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'">Customer</span>
        </div>
        <svg class="w-3 h-3 text-slate-300 dark:text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        <div class="flex items-center gap-1.5">
          <div class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
               [ngClass]="canProceedStep2() ? 'bg-emerald-500 text-white' : (canProceedStep1() ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400')">
            <svg *ngIf="canProceedStep2()" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <span *ngIf="!canProceedStep2()" class="text-[10px] font-bold">2</span>
          </div>
          <span [ngClass]="canProceedStep2() ? 'text-emerald-600 dark:text-emerald-400' : (canProceedStep1() ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500')">Transfer</span>
        </div>
        <svg class="w-3 h-3 text-slate-300 dark:text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        <div class="flex items-center gap-1.5">
          <div class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
               [ngClass]="selectedReceiver ? 'bg-emerald-500 text-white' : (canProceedStep1() ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400')">
            <svg *ngIf="selectedReceiver" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <span *ngIf="!selectedReceiver" class="text-[10px] font-bold">3</span>
          </div>
          <span [ngClass]="selectedReceiver ? 'text-emerald-600 dark:text-emerald-400' : (step >= 2 ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500')">Receiver</span>
        </div>
      </div>

      <!-- Zero balance badge -->
      <div *ngIf="agentBalanceZero"
           class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-xs font-semibold flex-shrink-0">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        Insufficient Balance
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       MAIN CANVAS
       \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex gap-6 items-start">

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
           LEFT COLUMN
           \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="flex-1 min-w-0 flex flex-col gap-5">

        <!-- \u2500\u2500\u2500 SECTION 1: CUSTOMER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <section class="canvas-section bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">

          <div class="px-5 py-4 flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800">
            <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all duration-200"
                 [ngClass]="canProceedStep1() ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white step-num-active'">
              <svg *ngIf="canProceedStep1()" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span *ngIf="!canProceedStep1()">1</span>
            </div>
            <div class="flex-1 min-w-0">
              <h2 class="text-sm font-semibold text-slate-900 dark:text-white">Customer</h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Search existing or register a new customer</p>
            </div>
            <button *ngIf="!showCreateCustomer && !selectedCustomer"
                    (click)="toggleCreateCustomer()"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors flex-shrink-0">
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
              </svg>
              New Customer
            </button>
          </div>

          <div class="px-5 py-5 space-y-4">

            <!-- Warnings -->
            <div *ngIf="appSettings.kycEnabled && kycWarning"
                 class="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
              </svg>
              {{ kycWarning }}
            </div>
            <div *ngIf="dobWarning"
                 class="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-sm">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              {{ dobWarning }}
            </div>

            <!-- Selected Customer card -->
            <div *ngIf="selectedCustomer"
                 class="selected-card-appear flex items-center justify-between p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {{ selectedCustomer.fullName.charAt(0).toUpperCase() }}
                </div>
                <div class="min-w-0">
                  <p class="font-semibold text-slate-900 dark:text-white text-sm truncate">{{ selectedCustomer.fullName }}</p>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {{ selectedCustomer.phone }}<span *ngIf="selectedCustomer.idDocumentType"> &middot; {{ selectedCustomer.idDocumentType }}</span>
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-2 flex-shrink-0 ml-2">
                <span *ngIf="appSettings.kycEnabled && selectedCustomer.isKycVerified"
                      class="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  KYC
                </span>
                <button (click)="clearSelectedCustomer()"
                        class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Search box -->
            <div *ngIf="!selectedCustomer && !showCreateCustomer">
              <div class="flex gap-2">
                <div class="relative flex-1">
                  <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0"/>
                  </svg>
                  <input type="text" [(ngModel)]="customerSearch"
                         (input)="filterCustomers(); showCustomerDropdown = true"
                         (keyup.enter)="filterCustomers(); showCustomerDropdown = true"
                         placeholder="Search by name, phone or email..."
                         class="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white dark:focus:bg-slate-700 transition"/>
                </div>
                <button (click)="filterCustomers(); showCustomerDropdown = true"
                        class="flex items-center gap-1.5 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold transition-all flex-shrink-0 shadow-sm">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0"/>
                  </svg>
                  Search
                </button>
              </div>

              <!-- Dropdown results -->
              <div *ngIf="showCustomerDropdown && filteredCustomers.length > 0"
                   class="search-dropdown relative z-20 w-full mt-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden">
                <div class="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-slate-50 dark:border-slate-700">
                  <p class="text-xs font-medium text-slate-500 dark:text-slate-400">{{ filteredCustomers.length }} result(s) found</p>
                  <button (click)="showCustomerDropdown = false" class="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
                <div class="max-h-52 overflow-y-auto divide-y divide-slate-50 dark:divide-slate-700/50">
                  <button *ngFor="let c of filteredCustomers"
                          (click)="selectCustomer(c)"
                          class="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-left">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {{ c.fullName.charAt(0).toUpperCase() }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-slate-900 dark:text-white truncate">{{ c.fullName }}</p>
                      <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{{ c.phone }}</p>
                    </div>
                    <span *ngIf="appSettings.kycEnabled && c.isKycVerified"
                          class="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                      <svg class="w-3 h-3 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <!-- No results -->
              <div *ngIf="showCustomerDropdown && filteredCustomers.length === 0 && customers.length > 0"
                   class="relative z-20 w-full mt-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-xl p-6 text-center">
                <p class="text-sm text-slate-500 dark:text-slate-400">No customers found<span *ngIf="customerSearch"> for "{{ customerSearch }}"</span></p>
                <button (click)="toggleCreateCustomer()"
                        class="mt-2 text-sm text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  + Create new customer
                </button>
              </div>
            </div>

            <!-- \u2500\u2500 NEW CUSTOMER FORM \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
            <div *ngIf="showCreateCustomer">
              <div class="mb-5 flex items-center justify-between">
                <div>
                  <h3 class="font-semibold text-slate-900 dark:text-white text-sm">New Customer</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Fill in the details to register</p>
                </div>
                <button (click)="toggleCreateCustomer()"
                        class="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium transition-colors">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  Cancel
                </button>
              </div>

              <form [formGroup]="customerForm" class="space-y-5">
                <!-- Personal Info -->
                <fieldset>
                  <legend class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Personal Information</legend>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="sm:col-span-2">
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name <span class="text-red-500">*</span></label>
                      <input type="text" formControlName="fullName" placeholder="John Doe"
                             class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                             [ngClass]="customerFormErrors['fullName'] ? 'border-red-400 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700'"/>
                      <p *ngIf="customerFormErrors['fullName']" class="mt-1.5 text-xs text-red-500 font-medium">{{ customerFormErrors['fullName'] }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone <span class="text-red-500">*</span></label>
                      <input type="tel" formControlName="phone" placeholder="+1 555 0100"
                             class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                             [ngClass]="customerFormErrors['phone'] ? 'border-red-400 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700'"/>
                      <p *ngIf="customerFormErrors['phone']" class="mt-1.5 text-xs text-red-500 font-medium">{{ customerFormErrors['phone'] }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
                      <input type="email" formControlName="email" placeholder="john@example.com"
                             class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Date of Birth</label>
                      <p-datepicker formControlName="dateOfBirth" [maxDate]="maxDobDate"
                                    dateFormat="yy-mm-dd" placeholder="YYYY-MM-DD" [showIcon]="true"
                                    appendTo="body" styleClass="w-full"/>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Gender</label>
                      <select formControlName="gender"
                              class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Nationality <span class="text-red-500">*</span></label>
                      <select formControlName="nationality"
                              class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                              [ngClass]="customerFormErrors['nationality'] ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'">
                        <option value="">Select nationality</option>
                        <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
                      </select>
                      <p *ngIf="customerFormErrors['nationality']" class="mt-1.5 text-xs text-red-500 font-medium">{{ customerFormErrors['nationality'] }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Country <span class="text-red-500">*</span></label>
                      <select formControlName="country"
                              class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                              [ngClass]="customerFormErrors['country'] ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'">
                        <option value="">Select country</option>
                        <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
                      </select>
                      <p *ngIf="customerFormErrors['country']" class="mt-1.5 text-xs text-red-500 font-medium">{{ customerFormErrors['country'] }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">City</label>
                      <input type="text" formControlName="city"
                             class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">State / Province</label>
                      <input type="text" formControlName="state"
                             class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Postal Code</label>
                      <input type="text" formControlName="postalCode"
                             class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
                    </div>
                    <div class="sm:col-span-2">
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Address</label>
                      <input type="text" formControlName="address"
                             class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
                    </div>
                  </div>
                </fieldset>

                <!-- ID Document -->
                <fieldset class="pt-5 border-t border-slate-100 dark:border-slate-800">
                  <legend class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">ID Document</legend>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Document Type <span class="text-red-500">*</span></label>
                      <select formControlName="idDocumentType"
                              class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                              [ngClass]="customerFormErrors['idDocumentType'] ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'">
                        <option value="">Select type</option>
                        <option *ngFor="let t of idTypes" [value]="t">{{ t }}</option>
                      </select>
                      <p *ngIf="customerFormErrors['idDocumentType']" class="mt-1.5 text-xs text-red-500 font-medium">{{ customerFormErrors['idDocumentType'] }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Document Number <span class="text-red-500">*</span></label>
                      <input type="text" formControlName="idDocumentNumber"
                             class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                             [ngClass]="customerFormErrors['idDocumentNumber'] ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'"/>
                      <p *ngIf="customerFormErrors['idDocumentNumber']" class="mt-1.5 text-xs text-red-500 font-medium">{{ customerFormErrors['idDocumentNumber'] }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Issue Date</label>
                      <p-datepicker formControlName="docIssueDate" [maxDate]="todayDate"
                                    dateFormat="yy-mm-dd" placeholder="YYYY-MM-DD" [showIcon]="true"
                                    appendTo="body" styleClass="w-full"/>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Expiry Date</label>
                      <p-datepicker formControlName="docExpiryDate" [minDate]="minExpiryDate"
                                    dateFormat="yy-mm-dd" placeholder="YYYY-MM-DD" [showIcon]="true"
                                    appendTo="body" styleClass="w-full"/>
                    </div>
                    <div class="sm:col-span-2">
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Issuing Country</label>
                      <select formControlName="docIssuingCountry"
                              class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option value="">Select country</option>
                        <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
                      </select>
                    </div>
                  </div>
                </fieldset>

                <!-- Document Images -->
                <fieldset *ngIf="!appSettings.skipDocumentUpload" class="pt-5 border-t border-slate-100 dark:border-slate-800">
                  <legend class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Document Images</legend>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Front Side <span class="text-red-500">*</span></label>
                      <label class="relative flex flex-col items-center justify-center h-32 rounded-xl border-2 border-dashed cursor-pointer transition-all"
                             [ngClass]="frontImagePreview ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/10' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10'">
                        <input type="file" accept="image/*" class="sr-only" (change)="onFrontImageSelected($event)"/>
                        <img *ngIf="frontImagePreview" [src]="frontImagePreview" alt="Front ID"
                             class="absolute inset-0 w-full h-full object-cover rounded-xl opacity-80"/>
                        <div *ngIf="!frontImagePreview" class="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
                          <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                          </svg>
                          <span class="text-xs font-medium">Upload front</span>
                        </div>
                      </label>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Back Side</label>
                      <label class="relative flex flex-col items-center justify-center h-32 rounded-xl border-2 border-dashed cursor-pointer transition-all"
                             [ngClass]="backImagePreview ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/10' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10'">
                        <input type="file" accept="image/*" class="sr-only" (change)="onBackImageSelected($event)"/>
                        <img *ngIf="backImagePreview" [src]="backImagePreview" alt="Back ID"
                             class="absolute inset-0 w-full h-full object-cover rounded-xl opacity-80"/>
                        <div *ngIf="!backImagePreview" class="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
                          <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                          </svg>
                          <span class="text-xs font-medium">Upload back</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <!-- Error & submit -->
                <div *ngIf="customerFormError"
                     class="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                  {{ customerFormError }}
                </div>
                <div class="flex gap-3 pt-2">
                  <button type="button" (click)="toggleCreateCustomer()"
                          class="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    Cancel
                  </button>
                  <button type="button" (click)="saveNewCustomer()" [disabled]="savingCustomer"
                          class="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <svg *ngIf="savingCustomer" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    {{ savingCustomer ? 'Saving...' : 'Save Customer' }}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

        <!-- \u2500\u2500\u2500 SECTION 2: TRANSFER DETAILS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <section class="canvas-section bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
                 [class.section-locked]="!canProceedStep1()">

          <div class="px-5 py-4 flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800">
            <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all duration-200"
                 [ngClass]="canProceedStep2() ? 'bg-emerald-500 text-white' : (canProceedStep1() ? 'bg-blue-600 text-white step-num-active' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500')">
              <svg *ngIf="canProceedStep2()" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span *ngIf="!canProceedStep2()">2</span>
            </div>
            <div>
              <h2 class="text-sm font-semibold text-slate-900 dark:text-white">Transfer Details</h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Amount, destination and collection method</p>
            </div>
          </div>

          <div class="px-5 py-5 space-y-5">

            <!-- Destination + Method -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Send To <span class="text-red-500">*</span></label>
                <select [(ngModel)]="receiverCountry" (change)="onReceiverCountryChange()"
                        class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                  <option value="">Select destination country</option>
                  <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Collection Method <span class="text-red-500">*</span></label>
                <select [(ngModel)]="selectedPaymentMethodId" (change)="onPaymentMethodChange()"
                        class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                  <option [ngValue]="null">Select method</option>
                  <option *ngFor="let m of paymentMethods" [ngValue]="m.id">{{ m.name }}</option>
                </select>
              </div>
            </div>

            <!-- Route error -->
            <div *ngIf="routeError"
                 class="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-sm">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              {{ routeError }}
            </div>

            <!-- \u2500\u2500 AMOUNT HERO PANEL \u2500\u2500 -->
            <div class="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
              <div class="bg-slate-50 dark:bg-slate-800/60 px-5 py-3 flex items-center justify-between border-b border-slate-100 dark:border-slate-700">
                <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Exchange Calculator</span>
                <div *ngIf="loadingCalc" class="flex items-center gap-1.5 text-xs text-blue-500 font-medium">
                  <svg class="animate-spin w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Calculating...
                </div>
                <div *ngIf="!loadingCalc && calculationDone" class="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  Rate confirmed
                </div>
              </div>

              <div class="p-5 bg-white dark:bg-slate-900">
                <div class="grid grid-cols-5 gap-4 items-end">

                  <!-- Send side -->
                  <div class="col-span-2 space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">You Send</label>
                    <div class="relative">
                      <div class="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none select-none z-10">
                        <span class="text-sm font-bold text-slate-600 dark:text-slate-400">{{ senderCurrency }}</span>
                        <span class="w-px h-5 bg-slate-200 dark:bg-slate-700"></span>
                      </div>
                      <input type="number" [(ngModel)]="sendAmount" (input)="onAmountChange()"
                             min="0" step="0.01" placeholder="0.00"
                             class="w-full pl-[5rem] pr-3 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition tabular-nums"/>
                    </div>
                  </div>

                  <!-- Arrow -->
                  <div class="col-span-1 flex flex-col items-center justify-center gap-2 pb-1">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                         [ngClass]="calculationDone ? 'bg-blue-600 shadow-md shadow-blue-200/60 dark:shadow-blue-900' : 'bg-slate-100 dark:bg-slate-800'">
                      <svg *ngIf="!loadingCalc" class="w-5 h-5 transition-colors"
                           [ngClass]="calculationDone ? 'text-white' : 'text-slate-400'"
                           fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                      <svg *ngIf="loadingCalc" class="animate-spin w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                    </div>
                    <span *ngIf="exchangeRate > 0"
                          class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 tabular-nums text-center leading-tight">
                      {{ exchangeRate | number:'1.4-4' }}
                    </span>
                  </div>

                  <!-- Receive side -->
                  <div class="col-span-2 space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">They Receive</label>
                    <div class="relative">
                      <div class="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none select-none z-10">
                        <span class="text-sm font-bold transition-colors"
                              [ngClass]="calculationDone && receiveAmount > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'">
                          {{ receiverCurrency }}
                        </span>
                        <span class="w-px h-5 bg-slate-200 dark:bg-slate-700"></span>
                      </div>
                      <div class="pl-[5rem] pr-3 py-4 rounded-xl border text-2xl font-bold tabular-nums min-h-[60px] flex items-center transition-all"
                           [ngClass]="calculationDone && receiveAmount > 0
                             ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
                             : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-300 dark:text-slate-600'">
                        {{ receiveAmount > 0 ? (receiveAmount | number:'1.2-2') : '0.00' }}
                      </div>
                    </div>
                  </div>

                </div>

                <!-- Charge breakdown -->
                <div *ngIf="calculationDone" class="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-x-6 gap-y-2">
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-slate-500 dark:text-slate-400">Service charge</span>
                    <span class="font-semibold text-slate-700 dark:text-slate-300 tabular-nums">{{ serviceCharge | number:'1.2-2' }} {{ senderCurrency }}</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-slate-500 dark:text-slate-400">Total payable</span>
                    <span class="font-bold text-blue-700 dark:text-blue-400 tabular-nums">{{ totalPayable | number:'1.2-2' }} {{ senderCurrency }}</span>
                  </div>
                  <div *ngIf="agentAvailableBalance !== null" class="flex items-center gap-2 text-sm ml-auto">
                    <span class="text-slate-500 dark:text-slate-400">Your balance</span>
                    <span class="font-semibold tabular-nums"
                          [ngClass]="agentAvailableBalance >= totalPayable ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'">
                      {{ agentAvailableBalance | number:'1.2-2' }} {{ senderCurrency }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Calc error -->
            <div *ngIf="calcError"
                 class="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
              </svg>
              {{ calcError }}
            </div>

            <!-- Balance warning -->
            <div *ngIf="balanceWarning"
                 class="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              {{ balanceWarning }}
            </div>

            <!-- Limit warnings -->
            <div *ngIf="exceedsSingleLimit"
                 class="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              <span>Amount exceeds single transaction limit of <strong class="tabular-nums">{{ singleTxnLimit | number:'1.2-2' }} {{ senderCurrency }}</strong></span>
            </div>

            <div *ngIf="needsManagerApproval && !exceedsSingleLimit"
                 class="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-sm">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              <span>This amount requires manager approval (threshold: <strong class="tabular-nums">{{ managerApprovalThreshold | number:'1.2-2' }} {{ senderCurrency }}</strong>)</span>
            </div>

          </div>
        </section>

        <!-- \u2500\u2500\u2500 SECTION 3: RECEIVER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <section class="canvas-section bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
                 [class.section-locked]="!canProceedStep1()">

          <div class="px-5 py-4 flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800">
            <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all duration-200"
                 [ngClass]="selectedReceiver ? 'bg-emerald-500 text-white' : (canProceedStep1() ? 'bg-blue-600 text-white step-num-active' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500')">
              <svg *ngIf="selectedReceiver" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span *ngIf="!selectedReceiver">3</span>
            </div>
            <div class="flex-1 min-w-0">
              <h2 class="text-sm font-semibold text-slate-900 dark:text-white">Receiver</h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                <span *ngIf="receiverCountry">Sending to {{ receiverCountry }}</span>
                <span *ngIf="!receiverCountry">Select destination country first</span>
              </p>
            </div>
            <button *ngIf="!showCreateReceiver && canProceedStep1()"
                    (click)="toggleCreateReceiver()"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 text-xs font-semibold hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors flex-shrink-0">
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
              </svg>
              New Receiver
            </button>
          </div>

          <div class="px-5 py-5 space-y-4">

            <!-- Selected Receiver card -->
            <div *ngIf="selectedReceiver"
                 class="selected-card-appear flex items-center justify-between p-4 rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-11 h-11 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {{ selectedReceiver.fullName.charAt(0).toUpperCase() }}
                </div>
                <div class="min-w-0">
                  <p class="font-semibold text-slate-900 dark:text-white text-sm truncate">{{ selectedReceiver.fullName }}</p>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {{ selectedReceiver.phone }}
                    <span *ngIf="selectedReceiver.bankName"> &middot; {{ selectedReceiver.bankName }}</span>
                    <span *ngIf="selectedReceiver.accountNumber"> &middot; {{ selectedReceiver.accountNumber }}</span>
                  </p>
                </div>
              </div>
              <button (click)="clearSelectedReceiver()"
                      class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all flex-shrink-0 ml-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Search box -->
            <div *ngIf="!selectedReceiver && !showCreateReceiver" class="relative">
              <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0"/>
              </svg>
              <input type="text" [(ngModel)]="receiverSearch" (input)="filterReceivers()"
                     placeholder="Search receiver by name or phone..."
                     class="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white dark:focus:bg-slate-700 transition"/>
            </div>

            <!-- Receiver list -->
            <div *ngIf="!selectedReceiver && !showCreateReceiver && filteredReceivers.length > 0"
                 class="space-y-2 max-h-56 overflow-y-auto">
              <div *ngFor="let r of filteredReceivers"
                   (click)="selectReceiver(r)"
                   class="flex items-center gap-3.5 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-900/10 cursor-pointer transition-all group">
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {{ r.fullName.charAt(0).toUpperCase() }}
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-400 truncate">{{ r.fullName }}</p>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {{ r.phone }}<span *ngIf="r.bankName"> &middot; {{ r.bankName }}</span>
                  </p>
                </div>
                <svg class="w-4 h-4 text-slate-300 group-hover:text-violet-500 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            <!-- Empty state -->
            <div *ngIf="!selectedReceiver && !showCreateReceiver && filteredReceivers.length === 0 && canProceedStep1()"
                 class="py-10 text-center">
              <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <svg class="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <p class="text-sm font-medium text-slate-600 dark:text-slate-400">No receivers found<span *ngIf="receiverCountry"> for {{ receiverCountry }}</span></p>
              <p class="text-xs text-slate-400 dark:text-slate-500 mt-1 mb-4">Add a new receiver to proceed</p>
              <button (click)="toggleCreateReceiver()"
                      class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition-colors shadow-sm">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                </svg>
                Add Receiver
              </button>
            </div>

            <!-- \u2500\u2500 NEW RECEIVER FORM \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
            <div *ngIf="showCreateReceiver">
              <div class="mb-5 flex items-center justify-between">
                <div>
                  <h3 class="font-semibold text-slate-900 dark:text-white text-sm">New Receiver</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Enter receiver details below</p>
                </div>
                <button (click)="toggleCreateReceiver()"
                        class="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium transition-colors">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  Cancel
                </button>
              </div>

              <form [formGroup]="receiverForm" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="sm:col-span-2">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name <span class="text-red-500">*</span></label>
                    <input type="text" formControlName="fullName"
                           class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                           [ngClass]="receiverFormErrors['fullName'] ? 'border-red-400 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700'"/>
                    <p *ngIf="receiverFormErrors['fullName']" class="mt-1.5 text-xs text-red-500 font-medium">{{ receiverFormErrors['fullName'] }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone <span class="text-red-500">*</span></label>
                    <input type="tel" formControlName="phone"
                           class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                           [ngClass]="receiverFormErrors['phone'] ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'"/>
                    <p *ngIf="receiverFormErrors['phone']" class="mt-1.5 text-xs text-red-500 font-medium">{{ receiverFormErrors['phone'] }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
                    <input type="email" formControlName="email"
                           class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Country</label>
                    <select formControlName="country"
                            class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select country</option>
                      <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">City</label>
                    <input type="text" formControlName="city"
                           class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Relationship</label>
                    <select formControlName="relationship"
                            class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select</option>
                      <option value="Family">Family</option>
                      <option value="Friend">Friend</option>
                      <option value="Business">Business</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <!-- Bank Transfer fields -->
                <div *ngIf="isBankTransfer()" class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bank Details</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div *ngIf="payoutBanks.length > 0" class="sm:col-span-2">
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Bank <span class="text-red-500">*</span></label>
                      <select [(ngModel)]="selectedBankId" [ngModelOptions]="{standalone: true}" (change)="onBankSelected()"
                              class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                              [ngClass]="receiverFormErrors['bankName'] ? 'border-red-400 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700'">
                        <option [ngValue]="null">Select bank</option>
                        <option *ngFor="let b of payoutBanks" [ngValue]="b.id">{{ b.bankName }}</option>
                      </select>
                      <p *ngIf="receiverFormErrors['bankName']" class="mt-1.5 text-xs text-red-500 font-medium">{{ receiverFormErrors['bankName'] }}</p>
                    </div>
                    <div *ngIf="!payoutBanks.length">
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Bank Name <span class="text-red-500">*</span></label>
                      <input type="text" formControlName="bankName"
                             class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                             [ngClass]="receiverFormErrors['bankName'] ? 'border-red-400 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700'"/>
                      <p *ngIf="receiverFormErrors['bankName']" class="mt-1.5 text-xs text-red-500 font-medium">{{ receiverFormErrors['bankName'] }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Account Number <span class="text-red-500">*</span></label>
                      <input type="text" formControlName="accountNumber"
                             class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                             [ngClass]="receiverFormErrors['accountNumber'] ? 'border-red-400 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700'"/>
                      <p *ngIf="receiverFormErrors['accountNumber']" class="mt-1.5 text-xs text-red-500 font-medium">{{ receiverFormErrors['accountNumber'] }}</p>
                    </div>
                    <div *ngIf="selectedBankId && payoutBanks.length > 0" class="sm:col-span-2">
                      <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Branch</label>
                      <div class="flex gap-2">
                        <div class="flex-1 px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm min-h-[46px] flex items-center text-slate-700 dark:text-slate-300">
                          {{ selectedBranch ? selectedBranch.branchName : 'No branch selected' }}
                        </div>
                        <button type="button" (click)="openBranchPopup()"
                                class="px-4 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors whitespace-nowrap">
                          Browse
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Cash Transfer fields -->
                <div *ngIf="isCashTransfer()" class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pickup Location</p>
                  <select [(ngModel)]="selectedLocationId" [ngModelOptions]="{standalone: true}" (change)="onLocationSelected()"
                          class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    <option [ngValue]="null">Select pickup location</option>
                    <option *ngFor="let l of payoutLocations" [ngValue]="l.id">{{ l.locationName }}</option>
                  </select>
                </div>

                <!-- Wallet / Mobile Money fields -->
                <div *ngIf="isWalletTransfer()" class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Wallet / Mobile Money</p>
                  <div *ngIf="payoutLocations.length > 0">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Provider</label>
                    <select [(ngModel)]="selectedLocationId" [ngModelOptions]="{standalone: true}" (change)="onLocationSelected()"
                            class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option [ngValue]="null">Select provider</option>
                      <option *ngFor="let l of payoutLocations" [ngValue]="l.id">{{ l.locationName }}</option>
                    </select>
                  </div>
                </div>

                <!-- Error & submit -->
                <div *ngIf="receiverFormError"
                     class="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                  {{ receiverFormError }}
                </div>
                <div class="flex gap-3 pt-2">
                  <button type="button" (click)="toggleCreateReceiver()"
                          class="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    Cancel
                  </button>
                  <button type="button" (click)="saveNewReceiver()" [disabled]="savingReceiver"
                          class="flex-1 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <svg *ngIf="savingReceiver" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    {{ savingReceiver ? 'Saving...' : 'Save Receiver' }}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

        <!-- \u2500\u2500\u2500 SECTION 4: COMPLIANCE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <section class="canvas-section bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
                 [class.section-locked]="!selectedReceiver">

          <div class="px-5 py-4 flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800">
            <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all duration-200"
                 [ngClass]="canProceedStep3() ? 'bg-emerald-500 text-white' : (selectedReceiver ? 'bg-blue-600 text-white step-num-active' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500')">
              <svg *ngIf="canProceedStep3()" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span *ngIf="!canProceedStep3()">4</span>
            </div>
            <div>
              <h2 class="text-sm font-semibold text-slate-900 dark:text-white">Compliance Information</h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Purpose &amp; source of funds declaration</p>
            </div>
          </div>

          <div class="px-5 py-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Purpose of Remittance <span class="text-red-500">*</span>
              </label>
              <select [(ngModel)]="purpose"
                      class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      [ngClass]="selectedReceiver && !purpose ? 'border-red-400 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700'">
                <option value="">Select purpose</option>
                <option value="Family Support">Family Support</option>
                <option value="Education">Education</option>
                <option value="Medical">Medical</option>
                <option value="Business">Business</option>
                <option value="Investment">Investment</option>
                <option value="Gift">Gift</option>
                <option value="Travel">Travel</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Source of Funds <span class="text-red-500">*</span>
              </label>
              <select [(ngModel)]="sourceOfFunds"
                      class="w-full px-3.5 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      [ngClass]="selectedReceiver && !sourceOfFunds ? 'border-red-400 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700'">
                <option value="">Select source</option>
                <option value="Salary">Salary / Employment</option>
                <option value="Business">Business Income</option>
                <option value="Savings">Savings</option>
                <option value="Investment">Investment Returns</option>
                <option value="Pension">Pension / Retirement</option>
                <option value="Gift">Gift / Inheritance</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </section>

        <!-- \u2500\u2500\u2500 MOBILE SUBMIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="lg:hidden space-y-4">
          <div *ngIf="complianceViolations.length > 0" class="space-y-2">
            <div *ngFor="let v of complianceViolations; let i = index"
                 class="alert-item flex items-start gap-3 p-4 rounded-xl text-sm border"
                 [style.animation-delay.ms]="i * 50"
                 [ngClass]="v.action === 'Block'
                   ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400'
                   : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400'">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              <div>
                <p class="font-semibold">{{ v.ruleName }}</p>
                <p class="text-xs opacity-80 mt-0.5">{{ v.description }}</p>
              </div>
            </div>
          </div>

          <button (click)="submitTransaction()"
                  [disabled]="!canProceedStep3() || submitting || complianceBlocked || agentBalanceZero || exceedsSingleLimit"
                  class="w-full py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2.5"
                  [ngClass]="canProceedStep3() && !complianceBlocked && !agentBalanceZero && !exceedsSingleLimit
                    ? 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white shadow-lg shadow-blue-200/60 dark:shadow-blue-900/50'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'">
            <svg *ngIf="submitting" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            <svg *ngIf="!submitting" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
            </svg>
            {{ submitting ? 'Processing...' : 'Submit Transaction' }}
          </button>
        </div>

      </div><!-- /LEFT COLUMN -->

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
           RIGHT STICKY PANEL
           \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <aside class="w-72 xl:w-80 flex-shrink-0 hidden lg:block">
        <div class="sticky top-[57px] flex flex-col gap-4">

          <!-- BALANCE CARD -->
          <div class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-5 text-white overflow-hidden shadow-lg shadow-blue-200/50 dark:shadow-blue-900/40">
            <div class="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/5 pointer-events-none"></div>
            <div class="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/5 pointer-events-none"></div>
            <div class="relative">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <p class="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">Available Balance</p>
                  <p class="text-3xl font-bold tabular-nums leading-none">
                    {{ agentProfile ? ((agentProfile.creditLimit - agentProfile.currentBalance) | number:'1.2-2') : '\u2014' }}
                  </p>
                  <p class="text-blue-200 text-sm mt-1.5">{{ senderCurrency }}</p>
                </div>
                <div class="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                  </svg>
                </div>
              </div>
              <div *ngIf="agentProfile && agentProfile.creditLimit > 0">
                <div class="flex justify-between text-xs text-blue-200 mb-2">
                  <span>Credit used</span>
                  <span class="tabular-nums font-medium">
                    {{ agentProfile.currentBalance | number:'1.0-0' }} / {{ agentProfile.creditLimit | number:'1.0-0' }}
                  </span>
                </div>
                <div class="h-2 rounded-full bg-white/20 overflow-hidden">
                  <div class="balance-bar-fill h-full rounded-full"
                       [ngClass]="(agentProfile.currentBalance / agentProfile.creditLimit) > 0.85 ? 'bg-red-300' : 'bg-white/70'"
                       [style.width.%]="agentProfile.creditLimit > 0 ? (agentProfile.currentBalance / agentProfile.creditLimit * 100) : 0">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LIVE CALCULATOR -->
          <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <div class="px-5 py-3.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 class="text-sm font-semibold text-slate-900 dark:text-white">Live Calculator</h3>
              </div>
              <svg *ngIf="loadingCalc" class="animate-spin w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
            </div>

            <div class="px-5 py-4 space-y-4">
              <!-- Corridor -->
              <div class="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3">
                <div class="flex-1 text-center">
                  <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">From</p>
                  <p class="font-bold text-sm text-slate-800 dark:text-slate-200">{{ senderCurrency || '\u2014' }}</p>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">{{ senderCountry || '\u2014' }}</p>
                </div>
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                       [ngClass]="calculationDone ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-slate-200 dark:bg-slate-700'">
                    <svg class="w-4 h-4 transition-colors"
                         [ngClass]="calculationDone ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1 text-center">
                  <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">To</p>
                  <p class="font-bold text-sm text-slate-800 dark:text-slate-200">{{ receiverCurrency || '\u2014' }}</p>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">{{ receiverCountry || '\u2014' }}</p>
                </div>
              </div>

              <!-- Breakdown rows -->
              <div class="space-y-2.5">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-slate-500 dark:text-slate-400">You Send</span>
                  <span class="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
                    {{ sendAmount > 0 ? (sendAmount | number:'1.2-2') : '\u2014' }}
                    <span class="text-xs font-normal text-slate-400"> {{ senderCurrency }}</span>
                  </span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-slate-500 dark:text-slate-400">Exchange Rate</span>
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-300 tabular-nums">
                    {{ exchangeRate > 0 ? '1 = ' + (exchangeRate | number:'1.4-4') : '\u2014' }}
                  </span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-slate-500 dark:text-slate-400">Service Charge</span>
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-300 tabular-nums">
                    {{ serviceCharge > 0 ? (serviceCharge | number:'1.2-2') + ' ' + senderCurrency : '\u2014' }}
                  </span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Total Payable</span>
                  <span class="text-sm font-bold text-blue-700 dark:text-blue-400 tabular-nums">
                    {{ totalPayable > 0 ? (totalPayable | number:'1.2-2') + ' ' + senderCurrency : '\u2014' }}
                  </span>
                </div>
                <div class="h-px bg-slate-100 dark:bg-slate-800"></div>
                <div class="flex justify-between items-center">
                  <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">They Receive</span>
                  <span class="text-xl font-bold tabular-nums transition-colors"
                        [ngClass]="receiveAmount > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-300 dark:text-slate-600'">
                    {{ receiveAmount > 0 ? (receiveAmount | number:'1.2-2') : '0.00' }}
                    <span *ngIf="receiverCurrency" class="text-sm font-normal text-slate-400 dark:text-slate-500"> {{ receiverCurrency }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- COMPLIANCE ALERTS -->
          <div *ngIf="complianceViolations.length > 0" class="space-y-2">
            <div *ngFor="let v of complianceViolations; let i = index"
                 class="alert-item flex items-start gap-3 p-4 rounded-xl text-sm border"
                 [style.animation-delay.ms]="i * 50"
                 [ngClass]="v.action === 'Block'
                   ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400'
                   : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400'">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              <div>
                <p class="font-semibold">{{ v.ruleName }}</p>
                <p class="text-xs opacity-80 mt-0.5">{{ v.description }}</p>
              </div>
            </div>
          </div>

          <!-- TRANSACTION SUMMARY -->
          <div *ngIf="selectedReceiver && calculationDone"
               class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <div class="px-5 py-3.5 border-b border-slate-100 dark:border-slate-800">
              <h3 class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Transaction Summary</h3>
            </div>
            <div class="px-5 py-4 space-y-3">
              <div class="flex justify-between items-start gap-3">
                <span class="text-sm text-slate-500 dark:text-slate-400 shrink-0">Sender</span>
                <span class="font-semibold text-sm text-slate-900 dark:text-white text-right truncate">{{ selectedCustomer?.fullName || '\u2014' }}</span>
              </div>
              <div class="flex justify-between items-start gap-3">
                <span class="text-sm text-slate-500 dark:text-slate-400 shrink-0">Receiver</span>
                <span class="font-semibold text-sm text-slate-900 dark:text-white text-right truncate">{{ selectedReceiver.fullName }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-slate-500 dark:text-slate-400">Destination</span>
                <span class="font-semibold text-sm text-slate-900 dark:text-white">{{ receiverCountry }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-slate-500 dark:text-slate-400">Method</span>
                <span class="font-semibold text-sm text-slate-900 dark:text-white">{{ getPayoutModeName() || '\u2014' }}</span>
              </div>
              <div *ngIf="selectedBranch" class="flex justify-between items-start gap-3">
                <span class="text-sm text-slate-500 dark:text-slate-400 shrink-0">Branch</span>
                <span class="font-semibold text-sm text-slate-900 dark:text-white text-right truncate">{{ selectedBranch.branchName }}</span>
              </div>
              <div *ngIf="needsManagerApproval" class="flex items-center gap-2 pt-1 text-xs text-amber-600 dark:text-amber-400 font-semibold">
                <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                Requires manager approval
              </div>
            </div>
          </div>

          <!-- SUBMIT BUTTON -->
          <button (click)="submitTransaction()"
                  [disabled]="!canProceedStep3() || submitting || complianceBlocked || agentBalanceZero || exceedsSingleLimit"
                  class="w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2.5"
                  [ngClass]="canProceedStep3() && !complianceBlocked && !agentBalanceZero && !exceedsSingleLimit
                    ? 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white shadow-lg shadow-blue-200/60 dark:shadow-blue-900/50'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'">
            <svg *ngIf="submitting" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            <svg *ngIf="!submitting" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
            </svg>
            {{ submitting ? 'Processing...' : 'Submit Transaction' }}
          </button>

          <!-- Hint -->
          <p *ngIf="!canProceedStep3()" class="text-xs text-center text-slate-400 dark:text-slate-500 -mt-1 px-2 leading-relaxed">
            <ng-container *ngIf="!selectedCustomer">Select a customer to begin</ng-container>
            <ng-container *ngIf="selectedCustomer && !calculationDone">Enter amount &amp; destination to calculate</ng-container>
            <ng-container *ngIf="selectedCustomer && calculationDone && !selectedReceiver">Select or add a receiver</ng-container>
            <ng-container *ngIf="selectedCustomer && calculationDone && selectedReceiver && !purpose">Select purpose of remittance</ng-container>
            <ng-container *ngIf="selectedCustomer && calculationDone && selectedReceiver && !!purpose && !sourceOfFunds">Select source of funds</ng-container>
          </p>

        </div>
      </aside>

    </div>
  </div>

</div>
`, styles: ["/* src/app/pages/agent/send-money/send-money.component.scss */\n:host {\n  display: block;\n}\n:host a {\n  text-decoration: none;\n  color: inherit;\n}\n.canvas-section {\n  transition: opacity 0.3s ease-out, transform 0.3s ease-out;\n  will-change: opacity, transform;\n}\n.section-locked {\n  opacity: 0.42;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  filter: grayscale(0.2);\n}\n@keyframes sectionUnlock {\n  from {\n    opacity: 0.42;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.section-unlocked {\n  animation: sectionUnlock 0.3s ease-out forwards;\n}\n@keyframes stepPulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.35);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);\n  }\n}\n.step-num-active {\n  animation: stepPulse 2.2s ease-in-out infinite;\n}\n@keyframes dropdownSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-6px) scaleY(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scaleY(1);\n  }\n}\n.search-dropdown {\n  animation: dropdownSlide 0.16s ease-out forwards;\n  transform-origin: top center;\n}\n@keyframes calcValuePop {\n  0% {\n    transform: scale(1);\n  }\n  40% {\n    transform: scale(1.04);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.calc-value-update {\n  animation: calcValuePop 0.25s ease-out;\n}\n.balance-bar-fill {\n  transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes overlayFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes successCardBounce {\n  0% {\n    opacity: 0;\n    transform: scale(0.88) translateY(24px);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.02) translateY(-4px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.success-overlay {\n  animation: overlayFadeIn 0.25s ease-out forwards;\n}\n.success-card {\n  animation: successCardBounce 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n@keyframes checkmarkDraw {\n  from {\n    stroke-dashoffset: 60;\n    opacity: 0;\n  }\n  to {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n}\n.checkmark-path {\n  stroke-dasharray: 60;\n  stroke-dashoffset: 60;\n  animation: checkmarkDraw 0.5s ease-out 0.2s forwards;\n}\n@keyframes pinDialogIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -46%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.pin-dialog {\n  animation: pinDialogIn 0.22s ease-out forwards;\n}\n@keyframes branchPopupIn {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.branch-popup {\n  animation: branchPopupIn 0.22s ease-out forwards;\n}\n@keyframes selectedCardIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.selected-card-appear {\n  animation: selectedCardIn 0.2s ease-out forwards;\n}\n@keyframes alertSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.alert-item {\n  animation: alertSlideIn 0.2s ease-out forwards;\n}\n/*# sourceMappingURL=send-money.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: Router }, { type: NotificationService }, { type: AppSettingsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SendMoneyComponent, { className: "SendMoneyComponent", filePath: "src/app/pages/agent/send-money/send-money.component.ts", lineNumber: 76 });
})();
export {
  CustomerFormSchema,
  ReceiverFormSchema,
  SendMoneyComponent
};
//# sourceMappingURL=chunk-GLNHFTDS.js.map
