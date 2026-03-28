import {
  DatePicker
} from "./chunk-P27FYE4L.js";
import "./chunk-2JJTUUN4.js";
import "./chunk-3CFLOBS2.js";
import {
  external_exports
} from "./chunk-OP5G73ZT.js";
import {
  Router,
  RouterModule
} from "./chunk-FTNGEOQD.js";
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
  DestroyRef,
  Injectable,
  Subject,
  __spreadProps,
  __spreadValues,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
var _c0 = (a0, a1, a2) => ({ "bg-brand-600 text-white shadow-glow-brand": a0, "bg-success-600 text-white": a1, "bg-surface-200 dark:bg-surface-700 text-surface-500 dark:text-surface-400": a2 });
var _c1 = (a0, a1, a2) => ({ "text-brand-600 dark:text-brand-400 font-semibold": a0, "text-success-600 dark:text-success-400": a1, "text-surface-500 dark:text-surface-400": a2 });
var _c2 = (a0, a1) => ({ "bg-brand-600 text-white shadow-glow-brand": a0, "bg-surface-200 dark:bg-surface-700 text-surface-500 dark:text-surface-400": a1 });
var _c3 = (a0, a1) => ({ "text-brand-600 dark:text-brand-400 font-semibold": a0, "text-surface-500 dark:text-surface-400": a1 });
var _c4 = (a0) => ({ "bg-brand-50 dark:bg-brand-900/20 border-l-[3px] border-l-brand-600": a0 });
var _c5 = () => ({ standalone: true });
function SendMoneyComponent__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "3");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent__svg_svg_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "4");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_29__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_29__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_29_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Your available balance is 0. You cannot send transactions until your balance is topped up. Please contact admin.");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_29_div_12_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedCustomer.phone);
  }
}
function SendMoneyComponent_div_29_div_12_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.selectedCustomer.email, "");
  }
}
function SendMoneyComponent_div_29_div_12_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.selectedCustomer.country, "");
  }
}
function SendMoneyComponent_div_29_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 41);
    \u0275\u0275template(8, SendMoneyComponent_div_29_div_12_span_8_Template, 2, 1, "span", 5)(9, SendMoneyComponent_div_29_div_12_span_9_Template, 2, 1, "span", 5)(10, SendMoneyComponent_div_29_div_12_span_10_Template, 2, 1, "span", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 42);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_div_12_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSelectedCustomer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 43);
    \u0275\u0275element(13, "path", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCustomer.fullName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCustomer.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedCustomer.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCustomer.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCustomer.country);
  }
}
function SendMoneyComponent_div_29_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.kycWarning);
  }
}
function SendMoneyComponent_div_29_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.dobWarning);
  }
}
function SendMoneyComponent_div_29_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.customerFormError, " ");
  }
}
function SendMoneyComponent_div_29_div_15_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["fullName"]);
  }
}
function SendMoneyComponent_div_29_div_15_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["phone"]);
  }
}
function SendMoneyComponent_div_29_div_15_p_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["nationality"]);
  }
}
function SendMoneyComponent_div_29_div_15_option_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("value", c_r5.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.name);
  }
}
function SendMoneyComponent_div_29_div_15_p_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["country"]);
  }
}
function SendMoneyComponent_div_29_div_15_option_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    \u0275\u0275property("value", t_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6);
  }
}
function SendMoneyComponent_div_29_div_15_p_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["idDocumentType"]);
  }
}
function SendMoneyComponent_div_29_div_15_p_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.customerFormErrors["idDocumentNumber"]);
  }
}
function SendMoneyComponent_div_29_div_15_option_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("value", c_r7.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7.name);
  }
}
function SendMoneyComponent_div_29_div_15_div_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "img", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.frontImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function SendMoneyComponent_div_29_div_15_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "img", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.backImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function SendMoneyComponent_div_29_div_15__svg_svg_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 90);
    \u0275\u0275element(1, "circle", 91)(2, "path", 92);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_29_div_15__svg_svg_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_29_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, SendMoneyComponent_div_29_div_15_div_1_Template, 4, 1, "div", 47);
    \u0275\u0275elementStart(2, "form", 48)(3, "div", 49);
    \u0275\u0275text(4, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 50)(6, "div")(7, "label", 51);
    \u0275\u0275text(8, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 52);
    \u0275\u0275template(10, SendMoneyComponent_div_29_div_15_p_10_Template, 2, 1, "p", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "label", 51);
    \u0275\u0275text(13, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 54);
    \u0275\u0275template(15, SendMoneyComponent_div_29_div_15_p_15_Template, 2, 1, "p", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 51);
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "label", 51);
    \u0275\u0275text(22, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-datepicker", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div")(25, "label", 51);
    \u0275\u0275text(26, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 57)(28, "option", 58);
    \u0275\u0275text(29, "Select gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 59);
    \u0275\u0275text(31, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 60);
    \u0275\u0275text(33, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 61);
    \u0275\u0275text(35, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div")(37, "label", 51);
    \u0275\u0275text(38, "Nationality *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 62);
    \u0275\u0275template(40, SendMoneyComponent_div_29_div_15_p_40_Template, 2, 1, "p", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 49);
    \u0275\u0275text(42, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 50)(44, "div")(45, "label", 51);
    \u0275\u0275text(46, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 63)(48, "option", 58);
    \u0275\u0275text(49, "Select country");
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, SendMoneyComponent_div_29_div_15_option_50_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, SendMoneyComponent_div_29_div_15_p_51_Template, 2, 1, "p", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div")(53, "label", 51);
    \u0275\u0275text(54, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div")(57, "label", 51);
    \u0275\u0275text(58, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div")(61, "label", 51);
    \u0275\u0275text(62, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div")(65, "label", 51);
    \u0275\u0275text(66, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 49);
    \u0275\u0275text(69, "Identification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 50)(71, "div")(72, "label", 51);
    \u0275\u0275text(73, "ID Document Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "select", 69)(75, "option", 58);
    \u0275\u0275text(76, "Select type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(77, SendMoneyComponent_div_29_div_15_option_77_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(78, SendMoneyComponent_div_29_div_15_p_78_Template, 2, 1, "p", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div")(80, "label", 51);
    \u0275\u0275text(81, "ID Document Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 70);
    \u0275\u0275template(83, SendMoneyComponent_div_29_div_15_p_83_Template, 2, 1, "p", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div")(85, "label", 51);
    \u0275\u0275text(86, "Issuing Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "select", 71)(88, "option", 58);
    \u0275\u0275text(89, "Select country");
    \u0275\u0275elementEnd();
    \u0275\u0275template(90, SendMoneyComponent_div_29_div_15_option_90_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div")(92, "label", 51);
    \u0275\u0275text(93, "Issue Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "p-datepicker", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div")(96, "label", 51);
    \u0275\u0275text(97, "Expiry Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "p-datepicker", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 49);
    \u0275\u0275text(100, "Document Upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "p", 74);
    \u0275\u0275text(102, "Upload front (required) and back images of the ID document.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 75)(104, "div")(105, "label", 51);
    \u0275\u0275text(106, "Front Image *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 76)(108, "input", 77);
    \u0275\u0275listener("change", function SendMoneyComponent_div_29_div_15_Template_input_change_108_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFrontImageSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(109, SendMoneyComponent_div_29_div_15_div_109_Template, 2, 1, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div")(111, "label", 51);
    \u0275\u0275text(112, "Back Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 76)(114, "input", 77);
    \u0275\u0275listener("change", function SendMoneyComponent_div_29_div_15_Template_input_change_114_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBackImageSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(115, SendMoneyComponent_div_29_div_15_div_115_Template, 2, 1, "div", 78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "div", 79)(117, "button", 80);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_div_15_Template_button_click_117_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCreateCustomer());
    });
    \u0275\u0275text(118, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "button", 29);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_div_15_Template_button_click_119_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveNewCustomer());
    });
    \u0275\u0275template(120, SendMoneyComponent_div_29_div_15__svg_svg_120_Template, 3, 0, "svg", 81)(121, SendMoneyComponent_div_29_div_15__svg_svg_121_Template, 2, 0, "svg", 24);
    \u0275\u0275text(122, " Save Customer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormError);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.customerForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["fullName"] ? "border-danger-400" : "border-surface-300 dark:border-surface-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["fullName"]);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["phone"] ? "border-danger-400" : "border-surface-300 dark:border-surface-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["phone"]);
    \u0275\u0275advance(8);
    \u0275\u0275property("maxDate", ctx_r1.maxDobDate)("showIcon", true)("showClear", true);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["nationality"] ? "border-danger-400" : "border-surface-300 dark:border-surface-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["nationality"]);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["country"] ? "border-danger-400" : "border-surface-300 dark:border-surface-600");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["country"]);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["idDocumentType"] ? "border-danger-400" : "border-surface-300 dark:border-surface-600");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.idTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["idDocumentType"]);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.customerFormErrors["idDocumentNumber"] ? "border-danger-400" : "border-surface-300 dark:border-surface-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormErrors["idDocumentNumber"]);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275property("maxDate", ctx_r1.todayDate)("showIcon", true)("showClear", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("minDate", ctx_r1.todayDate)("showIcon", true)("showClear", true);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.frontImagePreview);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.backImagePreview);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.savingCustomer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingCustomer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.savingCustomer);
  }
}
function SendMoneyComponent_div_29_div_16_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_div_16_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.customerSearch = "";
      return \u0275\u0275resetView(ctx_r1.filterCustomers());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_29_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 103);
    \u0275\u0275element(2, "path", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 105);
    \u0275\u0275text(4, "No customers found. Create a new one above.");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_29_div_16_div_8_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", c_r11.email, "");
  }
}
function SendMoneyComponent_div_29_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_div_16_div_8_Template_div_click_0_listener() {
      const c_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCustomer(c_r11));
    });
    \u0275\u0275elementStart(1, "div", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 108)(4, "div", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 110);
    \u0275\u0275text(7);
    \u0275\u0275template(8, SendMoneyComponent_div_29_div_16_div_8_span_8_Template, 2, 1, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 111);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c4, ctx_r1.selectedCustomerId === c_r11.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r11.fullName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r11.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r11.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r11.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r11.country);
  }
}
function SendMoneyComponent_div_29_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 94);
    \u0275\u0275element(3, "path", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerSearch, $event) || (ctx_r1.customerSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterCustomers());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SendMoneyComponent_div_29_div_16_button_5_Template, 3, 0, "button", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 98);
    \u0275\u0275template(7, SendMoneyComponent_div_29_div_16_div_7_Template, 5, 0, "div", 99)(8, SendMoneyComponent_div_29_div_16_div_8_Template, 11, 8, "div", 100);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerSearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filteredCustomers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredCustomers);
  }
}
function SendMoneyComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "h3", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 21);
    \u0275\u0275element(5, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Select or Create Customer ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 23);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateCustomer());
    });
    \u0275\u0275template(8, SendMoneyComponent_div_29__svg_svg_8_Template, 2, 0, "svg", 24)(9, SendMoneyComponent_div_29__svg_svg_9_Template, 2, 0, "svg", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, SendMoneyComponent_div_29_div_11_Template, 5, 0, "div", 25)(12, SendMoneyComponent_div_29_div_12_Template, 14, 5, "div", 26)(13, SendMoneyComponent_div_29_div_13_Template, 5, 1, "div", 25)(14, SendMoneyComponent_div_29_div_14_Template, 5, 1, "div", 25)(15, SendMoneyComponent_div_29_div_15_Template, 123, 31, "div", 27)(16, SendMoneyComponent_div_29_div_16_Template, 9, 4, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 28)(18, "button", 29);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(19, " Next: Calculate Amount ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 30);
    \u0275\u0275element(21, "path", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.showCreateCustomer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCreateCustomer);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showCreateCustomer ? "Cancel" : "New Customer", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.agentBalanceZero);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCustomer && !ctx_r1.showCreateCustomer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.kycWarning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dobWarning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCreateCustomer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showCreateCustomer && !ctx_r1.selectedCustomer);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canProceedStep1());
  }
}
function SendMoneyComponent_div_30_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    \u0275\u0275property("value", c_r13.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r13.name);
  }
}
function SendMoneyComponent_div_30_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 122);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r14 = ctx.$implicit;
    \u0275\u0275property("ngValue", m_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r14.name);
  }
}
function SendMoneyComponent_div_30_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "path", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.routeError);
  }
}
function SendMoneyComponent_div_30_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "div", 138);
    \u0275\u0275element(2, "div", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 140);
    \u0275\u0275text(4, "Calculating...");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_30_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.calcError);
  }
}
function SendMoneyComponent_div_30_div_52_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 156);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("1 ", ctx_r1.senderCurrency, " = ", \u0275\u0275pipeBind2(2, 3, ctx_r1.exchangeRate, "1.4-4"), " ", ctx_r1.receiverCurrency, "");
  }
}
function SendMoneyComponent_div_30_div_52_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 157);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_30_div_52_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "path", 159);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.balanceWarning);
  }
}
function SendMoneyComponent_div_30_div_52_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "path", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r15 = ctx.$implicit;
    \u0275\u0275property("ngClass", v_r15.action === "Block" ? "bg-danger-50 dark:bg-danger-700/20 text-danger-700 dark:text-danger-400" : "bg-warning-50 dark:bg-warning-700/15 text-warning-700 dark:text-warning-400");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(v_r15.ruleName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(": ", v_r15.description, "");
  }
}
function SendMoneyComponent_div_30_div_52_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160);
    \u0275\u0275template(1, SendMoneyComponent_div_30_div_52_div_34_div_1_Template, 7, 3, "div", 161);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.complianceViolations);
  }
}
function SendMoneyComponent_div_30_div_52_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ready to proceed ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_30_div_52_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "path", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Transaction blocked by compliance rules. Cannot proceed.");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_30_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 142)(2, "span", 143);
    \u0275\u0275text(3, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 144);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "hr", 145);
    \u0275\u0275elementStart(8, "div", 142)(9, "span", 143);
    \u0275\u0275text(10, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SendMoneyComponent_div_30_div_52_span_11_Template, 3, 6, "span", 146)(12, SendMoneyComponent_div_30_div_52_span_12_Template, 2, 0, "span", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 142)(14, "span", 143);
    \u0275\u0275text(15, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 148);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "hr", 145);
    \u0275\u0275elementStart(20, "div", 149)(21, "span");
    \u0275\u0275text(22, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 150);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "hr", 145);
    \u0275\u0275elementStart(27, "div", 151)(28, "span");
    \u0275\u0275text(29, "Customer Pays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, SendMoneyComponent_div_30_div_52_div_33_Template, 5, 1, "div", 152)(34, SendMoneyComponent_div_30_div_52_div_34_Template, 2, 1, "div", 153)(35, SendMoneyComponent_div_30_div_52_div_35_Template, 4, 0, "div", 154)(36, SendMoneyComponent_div_30_div_52_div_36_Template, 5, 0, "div", 155);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 14, ctx_r1.sendAmount, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.exchangeRate > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.exchangeRate === 0 && !ctx_r1.calculationDone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(18, 17, ctx_r1.receiveAmount, "1.2-2"), " ", ctx_r1.receiverCurrency, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(25, 20, ctx_r1.serviceCharge, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(32, 23, ctx_r1.totalPayable, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.balanceWarning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.complianceViolations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.calculationDone && !ctx_r1.complianceBlocked && !ctx_r1.balanceWarning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.complianceBlocked);
  }
}
function SendMoneyComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 112)(2, "div", 18)(3, "h3", 113);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 21);
    \u0275\u0275element(5, "path", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Transfer Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 49);
    \u0275\u0275text(8, "Sending From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 115);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 116);
    \u0275\u0275element(11, "path", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div")(13, "div", 109);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 118);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 49);
    \u0275\u0275text(18, "Sending To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 75)(20, "div")(21, "label", 51);
    \u0275\u0275text(22, "Destination Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 119);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_30_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.receiverCountry, $event) || (ctx_r1.receiverCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_30_Template_select_ngModelChange_23_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReceiverCountryChange());
    });
    \u0275\u0275elementStart(24, "option", 58);
    \u0275\u0275text(25, "Select destination country");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, SendMoneyComponent_div_30_option_26_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "label", 51);
    \u0275\u0275text(29, "Receiver Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 49);
    \u0275\u0275text(32, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 121)(34, "select", 119);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_30_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedPaymentMethodId, $event) || (ctx_r1.selectedPaymentMethodId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_30_Template_select_ngModelChange_34_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPaymentMethodChange());
    });
    \u0275\u0275elementStart(35, "option", 122);
    \u0275\u0275text(36, "Select payment method");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, SendMoneyComponent_div_30_option_37_Template, 2, 2, "option", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, SendMoneyComponent_div_30_div_38_Template, 5, 1, "div", 124);
    \u0275\u0275elementStart(39, "div", 49);
    \u0275\u0275text(40, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 125)(42, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_30_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sendAmount, $event) || (ctx_r1.sendAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_30_Template_input_ngModelChange_42_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAmountChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 127);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 128)(46, "h3", 113);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 21);
    \u0275\u0275element(48, "path", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " Calculation ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, SendMoneyComponent_div_30_div_50_Template, 5, 0, "div", 130)(51, SendMoneyComponent_div_30_div_51_Template, 5, 1, "div", 131)(52, SendMoneyComponent_div_30_div_52_Template, 37, 26, "div", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "div", 132)(54, "button", 133);
    \u0275\u0275listener("click", function SendMoneyComponent_div_30_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 30);
    \u0275\u0275element(56, "path", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(58, "button", 29);
    \u0275\u0275listener("click", function SendMoneyComponent_div_30_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(59, " Next: Select Receiver ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(60, "svg", 30);
    \u0275\u0275element(61, "path", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate((ctx_r1.agentProfile == null ? null : ctx_r1.agentProfile.businessName) || "Agent");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.senderCountry, " \xB7 ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.receiverCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.receiverCurrency || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedPaymentMethodId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.routeError);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sendAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.senderCurrency || "---");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.loadingCalc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.calcError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingCalc && !ctx_r1.calcError);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r1.canProceedStep2());
  }
}
function SendMoneyComponent_div_31__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_31__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_31_div_12_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedReceiver.phone);
  }
}
function SendMoneyComponent_div_31_div_12_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.selectedReceiver.country, "");
  }
}
function SendMoneyComponent_div_31_div_12_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.selectedReceiver.bankName, "");
  }
}
function SendMoneyComponent_div_31_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 171)(1, "div", 38)(2, "div", 172);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 173);
    \u0275\u0275template(8, SendMoneyComponent_div_31_div_12_span_8_Template, 2, 1, "span", 5)(9, SendMoneyComponent_div_31_div_12_span_9_Template, 2, 1, "span", 5)(10, SendMoneyComponent_div_31_div_12_span_10_Template, 2, 1, "span", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 174);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_12_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSelectedReceiver());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 43);
    \u0275\u0275element(13, "path", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedReceiver.fullName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedReceiver.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedReceiver.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedReceiver.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedReceiver.bankName);
  }
}
function SendMoneyComponent_div_31_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.receiverFormError, " ");
  }
}
function SendMoneyComponent_div_31_div_13_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.receiverFormErrors["fullName"]);
  }
}
function SendMoneyComponent_div_31_div_13_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.receiverFormErrors["phone"]);
  }
}
function SendMoneyComponent_div_31_div_13_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
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
function SendMoneyComponent_div_31_div_13_ng_container_48_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 122);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r21 = ctx.$implicit;
    \u0275\u0275property("ngValue", b_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r21.bankName);
  }
}
function SendMoneyComponent_div_31_div_13_ng_container_48_div_19_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.selectedBranch.branchCode, ")");
  }
}
function SendMoneyComponent_div_31_div_13_ng_container_48_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "path", 189);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 182);
    \u0275\u0275text(4, "Branch: ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SendMoneyComponent_div_31_div_13_ng_container_48_div_19_span_7_Template, 2, 1, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 190);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_13_ng_container_48_div_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectedBranch = null);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 30);
    \u0275\u0275element(10, "path", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedBranch.branchName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBranch.branchCode);
  }
}
function SendMoneyComponent_div_31_div_13_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 49);
    \u0275\u0275text(2, "Bank Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 180)(4, "div", 181)(5, "div", 182)(6, "label", 51);
    \u0275\u0275text(7, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 183);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_ng_container_48_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedBankId, $event) || (ctx_r1.selectedBankId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_31_div_13_ng_container_48_Template_select_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onBankSelected());
    });
    \u0275\u0275elementStart(9, "option", 122);
    \u0275\u0275text(10, "Select bank");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SendMoneyComponent_div_31_div_13_ng_container_48_option_11_Template, 2, 2, "option", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 184);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_13_ng_container_48_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBranchPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 43);
    \u0275\u0275element(14, "path", 185);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div")(16, "label", 51);
    \u0275\u0275text(17, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 186);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, SendMoneyComponent_div_31_div_13_ng_container_48_div_19_Template, 11, 2, "div", 187);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedBankId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c5));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.payoutBanks);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.selectedBankId);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.selectedBranch);
  }
}
function SendMoneyComponent_div_31_div_13_ng_container_49_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 122);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r24 = ctx.$implicit;
    \u0275\u0275property("ngValue", l_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r24.locationName);
  }
}
function SendMoneyComponent_div_31_div_13_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 49);
    \u0275\u0275text(2, "Pickup Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 121)(4, "select", 183);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_ng_container_49_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLocationId, $event) || (ctx_r1.selectedLocationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_31_div_13_ng_container_49_Template_select_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onLocationSelected());
    });
    \u0275\u0275elementStart(5, "option", 122);
    \u0275\u0275text(6, "Select location");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SendMoneyComponent_div_31_div_13_ng_container_49_option_7_Template, 2, 2, "option", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLocationId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c5));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.payoutLocations);
  }
}
function SendMoneyComponent_div_31_div_13_ng_container_50_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 122);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r26 = ctx.$implicit;
    \u0275\u0275property("ngValue", l_r26.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r26.locationName);
  }
}
function SendMoneyComponent_div_31_div_13_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 49);
    \u0275\u0275text(2, "Wallet Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 75)(4, "div")(5, "label", 51);
    \u0275\u0275text(6, "Wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 183);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_ng_container_50_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLocationId, $event) || (ctx_r1.selectedLocationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_31_div_13_ng_container_50_Template_select_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onLocationSelected());
    });
    \u0275\u0275elementStart(8, "option", 122);
    \u0275\u0275text(9, "Select wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SendMoneyComponent_div_31_div_13_ng_container_50_option_10_Template, 2, 2, "option", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 51);
    \u0275\u0275text(13, "Wallet Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 191);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLocationId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c5));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.payoutLocations);
  }
}
function SendMoneyComponent_div_31_div_13__svg_svg_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 90);
    \u0275\u0275element(1, "circle", 91)(2, "path", 92);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_31_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, SendMoneyComponent_div_31_div_13_div_1_Template, 4, 1, "div", 47);
    \u0275\u0275elementStart(2, "form", 48)(3, "div", 49);
    \u0275\u0275text(4, "Receiver Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 50)(6, "div")(7, "label", 51);
    \u0275\u0275text(8, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 52);
    \u0275\u0275template(10, SendMoneyComponent_div_31_div_13_p_10_Template, 2, 1, "p", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "label", 51);
    \u0275\u0275text(13, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 54);
    \u0275\u0275template(15, SendMoneyComponent_div_31_div_13_p_15_Template, 2, 1, "p", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 51);
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 49);
    \u0275\u0275text(21, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 50)(23, "div")(24, "label", 51);
    \u0275\u0275text(25, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 175)(27, "option", 58);
    \u0275\u0275text(28, "Select country");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, SendMoneyComponent_div_31_div_13_option_29_Template, 2, 2, "option", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "label", 51);
    \u0275\u0275text(32, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div")(35, "label", 51);
    \u0275\u0275text(36, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 176)(38, "option", 58);
    \u0275\u0275text(39, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 177);
    \u0275\u0275text(41, "Family");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 178);
    \u0275\u0275text(43, "Friend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 179);
    \u0275\u0275text(45, "Business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 61);
    \u0275\u0275text(47, "Other");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(48, SendMoneyComponent_div_31_div_13_ng_container_48_Template, 20, 7, "ng-container", 5)(49, SendMoneyComponent_div_31_div_13_ng_container_49_Template, 8, 5, "ng-container", 5)(50, SendMoneyComponent_div_31_div_13_ng_container_50_Template, 15, 5, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 79)(52, "button", 80);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_13_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCreateReceiver());
    });
    \u0275\u0275text(53, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 29);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_13_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveNewReceiver());
    });
    \u0275\u0275template(55, SendMoneyComponent_div_31_div_13__svg_svg_55_Template, 3, 0, "svg", 81);
    \u0275\u0275text(56, " Save Receiver ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverFormError);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.receiverForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", ctx_r1.receiverFormErrors["fullName"] ? "border-danger-400" : "border-surface-300 dark:border-surface-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverFormErrors["fullName"]);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.receiverFormErrors["phone"] ? "border-danger-400" : "border-surface-300 dark:border-surface-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverFormErrors["phone"]);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r1.isBankTransfer());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCashTransfer());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isWalletTransfer());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.savingReceiver);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingReceiver);
  }
}
function SendMoneyComponent_div_31_div_14_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 194);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_14_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.receiverSearch = "";
      return \u0275\u0275resetView(ctx_r1.filterReceivers());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_31_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 103);
    \u0275\u0275element(2, "path", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 105);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("No receivers found for ", ctx_r1.receiverCountry, ". Create a new one above.");
  }
}
function SendMoneyComponent_div_31_div_14_div_8_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", r_r30.bankName, "");
  }
}
function SendMoneyComponent_div_31_div_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_14_div_8_Template_div_click_0_listener() {
      const r_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectReceiver(r_r30));
    });
    \u0275\u0275elementStart(1, "div", 195);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 108)(4, "div", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 196);
    \u0275\u0275text(7);
    \u0275\u0275template(8, SendMoneyComponent_div_31_div_14_div_8_span_8_Template, 2, 1, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 111);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r30 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c4, ctx_r1.selectedReceiverId === r_r30.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r30.fullName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r30.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r30.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r30.bankName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r30.country);
  }
}
function SendMoneyComponent_div_31_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 94);
    \u0275\u0275element(3, "path", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 192);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_14_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.receiverSearch, $event) || (ctx_r1.receiverSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_31_div_14_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterReceivers());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SendMoneyComponent_div_31_div_14_button_5_Template, 3, 0, "button", 193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 98);
    \u0275\u0275template(7, SendMoneyComponent_div_31_div_14_div_7_Template, 5, 1, "div", 99)(8, SendMoneyComponent_div_31_div_14_div_8_Template, 11, 8, "div", 100);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.receiverSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverSearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filteredReceivers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredReceivers);
  }
}
function SendMoneyComponent_div_31_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 197);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 21);
    \u0275\u0275element(3, "path", 198);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Transaction Summary ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 199)(6, "div")(7, "span", 200);
    \u0275\u0275text(8, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 201);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "span", 200);
    \u0275\u0275text(13, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 201);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "span", 200);
    \u0275\u0275text(18, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 201);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "span", 200);
    \u0275\u0275text(23, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 201);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "span", 200);
    \u0275\u0275text(28, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 201);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "span", 200);
    \u0275\u0275text(34, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 202);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "span", 200);
    \u0275\u0275text(40, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 201);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div")(45, "span", 200);
    \u0275\u0275text(46, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 201);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "span", 200);
    \u0275\u0275text(52, "Payout Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 201);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div")(56, "span", 200);
    \u0275\u0275text(57, "Total Payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 203);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.selectedCustomer == null ? null : ctx_r1.selectedCustomer.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedReceiver.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.senderCountry, " (", ctx_r1.senderCurrency, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.receiverCountry, " (", ctx_r1.receiverCurrency, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(31, 16, ctx_r1.sendAmount, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(37, 19, ctx_r1.receiveAmount, "1.2-2"), " ", ctx_r1.receiverCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 22, ctx_r1.exchangeRate, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(49, 25, ctx_r1.serviceCharge, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getPayoutModeName());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(60, 28, ctx_r1.totalPayable, "1.2-2"), " ", ctx_r1.senderCurrency, "");
  }
}
function SendMoneyComponent_div_31__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 90);
    \u0275\u0275element(1, "circle", 91)(2, "path", 92);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_31__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 204);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "h3", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 21);
    \u0275\u0275element(5, "path", 167)(6, "path", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Select or Create Receiver ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 23);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateReceiver());
    });
    \u0275\u0275template(9, SendMoneyComponent_div_31__svg_svg_9_Template, 2, 0, "svg", 24)(10, SendMoneyComponent_div_31__svg_svg_10_Template, 2, 0, "svg", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, SendMoneyComponent_div_31_div_12_Template, 14, 5, "div", 169)(13, SendMoneyComponent_div_31_div_13_Template, 57, 12, "div", 27)(14, SendMoneyComponent_div_31_div_14_Template, 9, 4, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SendMoneyComponent_div_31_div_15_Template, 61, 31, "div", 170);
    \u0275\u0275elementStart(16, "div", 132)(17, "button", 133);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 30);
    \u0275\u0275element(19, "path", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 29);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitTransaction());
    });
    \u0275\u0275template(22, SendMoneyComponent_div_31__svg_svg_22_Template, 3, 0, "svg", 81)(23, SendMoneyComponent_div_31__svg_svg_23_Template, 2, 0, "svg", 24);
    \u0275\u0275text(24, " Submit Transaction ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r1.showCreateReceiver);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCreateReceiver);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showCreateReceiver ? "Cancel" : "New Receiver", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedReceiver && !ctx_r1.showCreateReceiver);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCreateReceiver);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showCreateReceiver && !ctx_r1.selectedReceiver);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedReceiver);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r1.canProceedStep3() || ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitting);
  }
}
function SendMoneyComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 205)(1, "div", 206);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 207);
    \u0275\u0275element(3, "path", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2", 208);
    \u0275\u0275text(5, "Transaction Submitted!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 209);
    \u0275\u0275text(7, "Reference: ");
    \u0275\u0275elementStart(8, "strong", 210);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 211)(11, "div", 212)(12, "span", 213);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 214);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 212)(17, "span", 213);
    \u0275\u0275text(18, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 201);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 212)(23, "span", 213);
    \u0275\u0275text(24, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 201);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 212)(29, "span", 213);
    \u0275\u0275text(30, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 215);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 212)(35, "span", 213);
    \u0275\u0275text(36, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 201);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 212)(41, "span", 213);
    \u0275\u0275text(42, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 201);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 212)(46, "span", 213);
    \u0275\u0275text(47, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 201);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 212)(51, "span", 213);
    \u0275\u0275text(52, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 201);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 216)(57, "button", 217);
    \u0275\u0275listener("click", function SendMoneyComponent_div_32_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadReceipt());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 30);
    \u0275\u0275element(59, "path", 218);
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Download Receipt ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(61, "button", 219);
    \u0275\u0275listener("click", function SendMoneyComponent_div_32_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startNewTransaction());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 30);
    \u0275\u0275element(63, "path", 220);
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " New Transaction ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.successResult.referenceNumber);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(ctx_r1.successResult.status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(21, 14, ctx_r1.successResult.sendAmount, "1.2-2"), " ", ctx_r1.successResult.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("1 ", ctx_r1.successResult.sendCurrency, " = ", \u0275\u0275pipeBind2(27, 17, ctx_r1.successResult.exchangeRateApplied, "1.4-4"), " ", ctx_r1.successResult.receiveCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(33, 20, ctx_r1.successResult.receiveAmount, "1.2-2"), " ", ctx_r1.successResult.receiveCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(39, 23, ctx_r1.successResult.totalCommission, "1.2-2"), " ", ctx_r1.successResult.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.successResult.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.successResult.receiverName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 26, ctx_r1.successResult.createdAt, "medium"));
  }
}
function SendMoneyComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 221);
    \u0275\u0275listener("click", function SendMoneyComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePinDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_34_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 233);
    \u0275\u0275text(1, "Create a 4-6 digit PIN to authorize transactions.");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_34_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 233);
    \u0275\u0275text(1, "Enter your transaction PIN to confirm this transfer.");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_34_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 234);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "path", 84);
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
function SendMoneyComponent_div_34_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 51);
    \u0275\u0275text(2, "Confirm PIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 235);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_34_div_17_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pinConfirm, $event) || (ctx_r1.pinConfirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SendMoneyComponent_div_34_div_17_Template_input_keydown_enter_3_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPinSubmit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pinConfirm);
  }
}
function SendMoneyComponent_div_34__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 90);
    \u0275\u0275element(1, "circle", 91)(2, "path", 92);
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 222)(1, "div", 223)(2, "h3", 224);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 43);
    \u0275\u0275element(4, "path", 225);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 226);
    \u0275\u0275listener("click", function SendMoneyComponent_div_34_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePinDialog());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 43);
    \u0275\u0275element(8, "path", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 227);
    \u0275\u0275template(10, SendMoneyComponent_div_34_p_10_Template, 2, 0, "p", 228)(11, SendMoneyComponent_div_34_p_11_Template, 2, 0, "p", 228)(12, SendMoneyComponent_div_34_div_12_Template, 4, 1, "div", 229);
    \u0275\u0275elementStart(13, "div")(14, "label", 51);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 230);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_34_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pinInput, $event) || (ctx_r1.pinInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SendMoneyComponent_div_34_Template_input_keydown_enter_16_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPinSubmit());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, SendMoneyComponent_div_34_div_17_Template, 4, 1, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 231)(19, "button", 80);
    \u0275\u0275listener("click", function SendMoneyComponent_div_34_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePinDialog());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 232);
    \u0275\u0275listener("click", function SendMoneyComponent_div_34_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPinSubmit());
    });
    \u0275\u0275template(22, SendMoneyComponent_div_34__svg_svg_22_Template, 3, 0, "svg", 81);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pinMode === "set" ? "Set Transaction PIN" : "Enter Transaction PIN", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.pinMode === "set");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pinMode === "verify");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pinError);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pinMode === "set" ? "New PIN" : "Transaction PIN");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pinInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pinMode === "set");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.pinLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pinLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pinMode === "set" ? "Set PIN" : "Confirm & Send", " ");
  }
}
function SendMoneyComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 236);
    \u0275\u0275listener("click", function SendMoneyComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBranchPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_36_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 194);
    \u0275\u0275listener("click", function SendMoneyComponent_div_36_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.branchSearch = "";
      return \u0275\u0275resetView(ctx_r1.filterBranches());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_36_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 244);
    \u0275\u0275element(2, "path", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 105);
    \u0275\u0275text(4, "No branches found.");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_36_div_17_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r39 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Code: ", br_r39.branchCode, "");
  }
}
function SendMoneyComponent_div_36_div_17_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r39 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", br_r39.address, "");
  }
}
function SendMoneyComponent_div_36_div_17_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r39 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", br_r39.contactPhone, "");
  }
}
function SendMoneyComponent_div_36_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 245);
    \u0275\u0275listener("click", function SendMoneyComponent_div_36_div_17_Template_div_click_0_listener() {
      const br_r39 = \u0275\u0275restoreView(_r38).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectBranch(br_r39));
    });
    \u0275\u0275elementStart(1, "div", 246);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 21);
    \u0275\u0275element(3, "path", 247);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 108)(5, "div", 109);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 196);
    \u0275\u0275template(8, SendMoneyComponent_div_36_div_17_span_8_Template, 2, 1, "span", 5)(9, SendMoneyComponent_div_36_div_17_span_9_Template, 2, 1, "span", 5)(10, SendMoneyComponent_div_36_div_17_span_10_Template, 2, 1, "span", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const br_r39 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c4, (ctx_r1.selectedBranch == null ? null : ctx_r1.selectedBranch.id) === br_r39.id));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(br_r39.branchName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", br_r39.branchCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", br_r39.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", br_r39.contactPhone);
  }
}
function SendMoneyComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 238)(2, "h3", 239);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 21);
    \u0275\u0275element(4, "path", 189);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 226);
    \u0275\u0275listener("click", function SendMoneyComponent_div_36_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBranchPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 43);
    \u0275\u0275element(8, "path", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 240)(10, "div", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 94);
    \u0275\u0275element(12, "path", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "input", 241);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_36_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.branchSearch, $event) || (ctx_r1.branchSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_36_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterBranches());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, SendMoneyComponent_div_36_button_14_Template, 3, 0, "button", 193);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 242);
    \u0275\u0275template(16, SendMoneyComponent_div_36_div_16_Template, 5, 0, "div", 99)(17, SendMoneyComponent_div_36_div_17_Template, 11, 7, "div", 243);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Select Branch \u2014 ", ctx_r1.branchBank == null ? null : ctx_r1.branchBank.bankName, " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.branchSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.branchSearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filteredBranches.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredBranches);
  }
}
var CustomerFormSchema = external_exports.object({
  fullName: external_exports.string().min(1, "Full name is required").max(100, "Max 100 characters"),
  phone: external_exports.string().min(1, "Phone is required").max(20, "Max 20 characters"),
  email: external_exports.string().email("Invalid email").optional().or(external_exports.literal("")),
  dateOfBirth: external_exports.union([external_exports.date(), external_exports.string(), external_exports.null()]).optional(),
  gender: external_exports.string().optional().or(external_exports.literal("")),
  nationality: external_exports.string().min(1, "Nationality is required"),
  country: external_exports.string().min(1, "Country is required"),
  city: external_exports.string().optional().or(external_exports.literal("")),
  state: external_exports.string().optional().or(external_exports.literal("")),
  postalCode: external_exports.string().optional().or(external_exports.literal("")),
  address: external_exports.string().optional().or(external_exports.literal("")),
  idDocumentType: external_exports.string().min(1, "Document type is required"),
  idDocumentNumber: external_exports.string().min(1, "Document number is required"),
  docIssueDate: external_exports.union([external_exports.date(), external_exports.string(), external_exports.null()]).optional(),
  docExpiryDate: external_exports.union([external_exports.date(), external_exports.string(), external_exports.null()]).optional(),
  docIssuingCountry: external_exports.string().optional().or(external_exports.literal(""))
});
var ReceiverFormSchema = external_exports.object({
  fullName: external_exports.string().min(1, "Full name is required").max(100, "Max 100 characters"),
  phone: external_exports.string().min(1, "Phone is required").max(20, "Max 20 characters"),
  email: external_exports.string().email("Invalid email").optional().or(external_exports.literal("")),
  country: external_exports.string().optional().or(external_exports.literal("")),
  city: external_exports.string().optional().or(external_exports.literal("")),
  bankName: external_exports.string().optional().or(external_exports.literal("")),
  bankCode: external_exports.string().optional().or(external_exports.literal("")),
  accountNumber: external_exports.string().optional().or(external_exports.literal("")),
  branchName: external_exports.string().optional().or(external_exports.literal("")),
  branchCode: external_exports.string().optional().or(external_exports.literal("")),
  bankId: external_exports.number().nullable().optional(),
  branchId: external_exports.number().nullable().optional(),
  relationship: external_exports.string().optional().or(external_exports.literal(""))
});
var SendMoneyComponent = class _SendMoneyComponent {
  // Step tracking (kept as local properties that sync with store)
  get step() {
    return this.store.currentStep();
  }
  set step(v) {
    this.store.setStep(v);
  }
  constructor(api, auth, router, notify) {
    this.api = api;
    this.auth = auth;
    this.router = router;
    this.notify = notify;
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
    this.todayDate = /* @__PURE__ */ new Date();
    this.maxDobDate = (() => {
      const d = /* @__PURE__ */ new Date();
      d.setFullYear(d.getFullYear() - 16);
      return d;
    })();
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
  }
  ngOnInit() {
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
    this.store.setSelectedCustomer(customer);
    this.kycWarning = "";
    this.dobWarning = "";
    if (!customer.isKycVerified) {
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
      if (age < 16) {
        this.dobWarning = `Customer is ${age} years old. Must be at least 16 years old to send a transaction.`;
      }
    }
    this.store.setKycWarning(this.kycWarning);
    this.store.setDobWarning(this.dobWarning);
  }
  clearSelectedCustomer() {
    this.selectedCustomerId = null;
    this.selectedCustomer = null;
    this.store.setSelectedCustomer(null);
    this.kycWarning = "";
    this.dobWarning = "";
    this.store.setKycWarning("");
    this.store.setDobWarning("");
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
    if (!this.frontImageFile) {
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
      this.availablePayoutModes = this.paymentMethods.filter((pm) => matchingPartner.paymentModeIds.includes(pm.id));
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
    this.api.getAgentReceiversByCustomer(this.selectedCustomerId).subscribe((r) => {
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
      if (r.country !== this.receiverCountry)
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
    if (!this.validateReceiverForm()) {
      this.receiverFormError = "Please fix the highlighted fields.";
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
    return this.calculationDone && !this.complianceBlocked && !this.balanceWarning && !!this.selectedPartner && !!this.selectedPayoutModeId && this.sendAmount > 0 && !!this.selectedPaymentMethodId && !this.agentBalanceZero;
  }
  canProceedStep3() {
    return !!this.selectedReceiver;
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
      this.notify.error("Please select or create a receiver.");
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
        const hasPin = res?.data?.hasPin ?? res?.hasPin ?? false;
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
      purpose: ""
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
      <html><head><title>Transaction Receipt</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; color: #333; max-width: 600px; margin: 0 auto; }
        h1 { text-align: center; color: #1a56db; font-size: 22px; margin-bottom: 4px; }
        .subtitle { text-align: center; color: #666; font-size: 13px; margin-bottom: 30px; }
        .ref { text-align: center; font-size: 16px; font-weight: bold; background: #f0f4ff; padding: 10px; border-radius: 8px; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin: 16px 0; }
        td { padding: 8px 12px; border-bottom: 1px solid #eee; font-size: 13px; }
        td:first-child { font-weight: 600; color: #555; width: 40%; }
        .section { font-size: 14px; font-weight: 700; color: #1a56db; padding: 12px 0 4px; border-bottom: 2px solid #1a56db; margin-top: 16px; }
        .amount { font-size: 18px; font-weight: 700; color: #2e7d32; }
        .footer { text-align: center; margin-top: 30px; font-size: 11px; color: #999; }
      </style></head><body>
      <h1>RemitAgent</h1>
      <div class="subtitle">Transaction Receipt</div>
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
      default:
        return status;
    }
  }
  static {
    this.\u0275fac = function SendMoneyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SendMoneyComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SendMoneyComponent, selectors: [["app-send-money"]], features: [\u0275\u0275ProvidersFeature([SendMoneyStore])], decls: 37, vars: 63, consts: [[1, "max-w-[1200px]", "space-y-6"], [1, "flex", "items-center", "justify-center", "gap-0", "px-5", "mb-7"], [1, "flex", "flex-col", "items-center", "gap-1.5", "min-w-[70px]", "cursor-default", 3, "click"], [1, "w-9", "h-9", "rounded-full", "flex", "items-center", "justify-center", "text-sm", "font-semibold", "transition-all", 3, "ngClass"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 4, "ngIf"], [4, "ngIf"], [1, "text-xs", "font-medium", 3, "ngClass"], [1, "flex-1", "h-[3px]", "rounded-full", "max-w-[120px]", "mx-1", "mb-5.5", "transition-colors", "duration-300", 3, "ngClass"], [1, "flex", "flex-col", "items-center", "gap-1.5", "min-w-[70px]", "cursor-default"], ["class", "animate-slide-up space-y-5", 4, "ngIf"], ["class", "animate-slide-up", 4, "ngIf"], ["class", "fixed inset-0 z-[1000] bg-black/50 backdrop-blur-xs animate-fade-in", 3, "click", 4, "ngIf"], ["class", "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-[400px] max-w-[90vw] bg-white dark:bg-surface-800 rounded-2xl shadow-dialog animate-slide-up", 4, "ngIf"], ["class", "fixed inset-0 z-[1000] bg-black/40 animate-fade-in", 3, "click", 4, "ngIf"], ["class", "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-[560px] max-w-[90vw] max-h-[80vh] bg-white dark:bg-surface-800 rounded-2xl shadow-dialog flex flex-col overflow-hidden animate-slide-up", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m4.5 12.75 6 6 9-13.5"], [1, "animate-slide-up", "space-y-5"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "flex", "items-center", "gap-2", "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-50"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "text-sm", "font-medium", "rounded-lg", "border", "border-brand-300", "dark:border-brand-700", "text-brand-700", "dark:text-brand-300", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition-colors", 3, "click"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "flex items-center gap-3 p-4 mb-4 rounded-xl bg-danger-50 dark:bg-danger-700/20 border border-danger-200 dark:border-danger-700/40 text-danger-700 dark:text-danger-400 text-sm", 4, "ngIf"], ["class", "flex items-center justify-between p-4 mb-4 rounded-xl bg-success-50 dark:bg-success-700/15 border border-success-200 dark:border-success-700/30", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "pt-2"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "text-sm", "font-semibold", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "text-white", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18 18 6M6 6l12 12"], [1, "flex", "items-center", "gap-3", "p-4", "mb-4", "rounded-xl", "bg-danger-50", "dark:bg-danger-700/20", "border", "border-danger-200", "dark:border-danger-700/40", "text-danger-700", "dark:text-danger-400", "text-sm"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"], [1, "flex", "items-center", "justify-between", "p-4", "mb-4", "rounded-xl", "bg-success-50", "dark:bg-success-700/15", "border", "border-success-200", "dark:border-success-700/30"], [1, "flex", "items-center", "gap-3"], [1, "w-11", "h-11", "rounded-full", "bg-success-600", "text-white", "flex", "items-center", "justify-center", "font-bold", "text-lg", "flex-shrink-0"], [1, "font-semibold", "text-surface-900", "dark:text-surface-50"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mt-0.5"], ["title", "Remove selection", 1, "p-1.5", "rounded-lg", "text-danger-500", "hover:bg-danger-50", "dark:hover:bg-danger-700/20", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513"], [1, "space-y-4"], ["class", "flex items-center gap-2 p-3 rounded-lg bg-danger-50 dark:bg-danger-700/20 text-danger-700 dark:text-danger-400 text-sm", 4, "ngIf"], [3, "formGroup"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-brand-600", "dark:text-brand-400", "mb-3", "pb-1", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-4", "mb-5"], [1, "block", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300", "mb-1"], ["formControlName", "fullName", "type", "text", "placeholder", "Enter full name", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngClass"], ["class", "text-xs text-danger-500 mt-1", 4, "ngIf"], ["formControlName", "phone", "type", "text", "placeholder", "+1 234 567 890", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngClass"], ["formControlName", "email", "type", "email", "placeholder", "email@example.com", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors"], ["formControlName", "dateOfBirth", "dateFormat", "dd/mm/yy", "placeholder", "DD/MM/YYYY", "styleClass", "w-full", "inputStyleClass", "w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors", 3, "maxDate", "showIcon", "showClear"], ["formControlName", "gender", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors"], ["value", ""], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["formControlName", "nationality", "type", "text", "placeholder", "Nationality", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngClass"], ["formControlName", "country", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "city", "type", "text", "placeholder", "City", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors"], ["formControlName", "state", "type", "text", "placeholder", "State / Province", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors"], ["formControlName", "postalCode", "type", "text", "placeholder", "Postal / ZIP code", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors"], ["formControlName", "address", "type", "text", "placeholder", "Street address", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors"], ["formControlName", "idDocumentType", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngClass"], ["formControlName", "idDocumentNumber", "type", "text", "placeholder", "Document number", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngClass"], ["formControlName", "docIssuingCountry", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors"], ["formControlName", "docIssueDate", "dateFormat", "dd/mm/yy", "placeholder", "DD/MM/YYYY", "styleClass", "w-full", "inputStyleClass", "w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors", 3, "maxDate", "showIcon", "showClear"], ["formControlName", "docExpiryDate", "dateFormat", "dd/mm/yy", "placeholder", "DD/MM/YYYY", "styleClass", "w-full", "inputStyleClass", "w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors", 3, "minDate", "showIcon", "showClear"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mb-3"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "mb-5"], [1, "relative"], ["type", "file", "accept", "image/*", 1, "w-full", "px-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "file:mr-3", "file:py-1.5", "file:px-3", "file:rounded-md", "file:border-0", "file:text-xs", "file:font-semibold", "file:bg-brand-50", "file:text-brand-700", "dark:file:bg-brand-900/30", "dark:file:text-brand-300", "hover:file:bg-brand-100", "transition-colors", "cursor-pointer", 3, "change"], ["class", "mt-2", 4, "ngIf"], [1, "flex", "justify-end", "gap-3", "pt-2"], [1, "px-4", "py-2.5", "text-sm", "font-medium", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], ["class", "w-4 h-4 animate-spin", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "p-3", "rounded-lg", "bg-danger-50", "dark:bg-danger-700/20", "text-danger-700", "dark:text-danger-400", "text-sm"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"], [1, "text-xs", "text-danger-500", "mt-1"], [3, "value"], [1, "mt-2"], ["alt", "Front preview", 1, "w-24", "h-16", "object-cover", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", 3, "src"], ["alt", "Back preview", 1, "w-24", "h-16", "object-cover", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", 3, "src"], ["fill", "none", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "relative", "mb-4"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"], ["type", "text", "placeholder", "Search customers by name, email, or phone...", 1, "w-full", "pl-10", "pr-9", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "ngModel"], ["class", "absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-surface-400 hover:text-surface-600 dark:hover:text-surface-300", 3, "click", 4, "ngIf"], [1, "max-h-[400px]", "overflow-y-auto", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700"], ["class", "flex flex-col items-center gap-2 py-10 text-surface-400", 4, "ngIf"], ["class", "flex items-center gap-3 px-4 py-3 cursor-pointer border-b border-surface-100 dark:border-surface-700/50 last:border-b-0 hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "p-1", "rounded", "text-surface-400", "hover:text-surface-600", "dark:hover:text-surface-300", 3, "click"], [1, "flex", "flex-col", "items-center", "gap-2", "py-10", "text-surface-400"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "opacity-50"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "text-sm"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "cursor-pointer", "border-b", "border-surface-100", "dark:border-surface-700/50", "last:border-b-0", "hover:bg-surface-50", "dark:hover:bg-surface-700/30", "transition-colors", 3, "click", "ngClass"], [1, "w-10", "h-10", "rounded-full", "bg-brand-600", "text-white", "flex", "items-center", "justify-center", "font-semibold", "flex-shrink-0"], [1, "flex-1", "min-w-0"], [1, "font-semibold", "text-sm", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "truncate", "mt-0.5"], [1, "text-xs", "font-medium", "px-2.5", "py-1", "rounded-full", "bg-surface-100", "dark:bg-surface-700", "text-surface-500", "whitespace-nowrap"], [1, "grid", "grid-cols-1", "lg:grid-cols-[1.6fr_1fr]", "gap-6", "items-start"], [1, "flex", "items-center", "gap-2", "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-50", "mb-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"], [1, "flex", "items-center", "gap-3", "p-4", "mb-5", "rounded-xl", "bg-brand-50", "dark:bg-brand-900/20", "border", "border-brand-200", "dark:border-brand-700/30"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-7", "h-7", "text-brand-600", "dark:text-brand-400", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mt-0.5"], [1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "ngModel"], ["type", "text", "readonly", "", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "text-sm", "bg-surface-50", "dark:bg-surface-900", "text-surface-500", "cursor-not-allowed", 3, "value"], [1, "mb-5"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "flex items-center gap-2 p-3 mb-4 rounded-lg bg-warning-50 dark:bg-warning-700/15 border border-warning-200 dark:border-warning-700/30 text-warning-700 dark:text-warning-400 text-sm", 4, "ngIf"], [1, "relative", "max-w-[400px]"], ["type", "number", "min", "0", "placeholder", "0.00", 1, "w-full", "px-3", "py-2.5", "pr-16", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-sm", "font-semibold", "text-surface-500"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft", "sticky", "top-20"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"], ["class", "my-3", 4, "ngIf"], ["class", "flex items-center gap-2 p-3 my-2 rounded-lg bg-warning-50 dark:bg-warning-700/15 text-warning-700 dark:text-warning-400 text-sm", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "pt-2"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "text-sm", "font-medium", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"], [1, "flex", "items-center", "gap-2", "p-3", "mb-4", "rounded-lg", "bg-warning-50", "dark:bg-warning-700/15", "border", "border-warning-200", "dark:border-warning-700/30", "text-warning-700", "dark:text-warning-400", "text-sm"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"], [1, "my-3"], [1, "w-full", "h-1.5", "bg-surface-200", "dark:bg-surface-700", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-brand-500", "rounded-full", "animate-pulse-soft", 2, "width", "60%"], [1, "block", "text-center", "text-xs", "text-surface-500", "mt-2"], [1, "flex", "items-center", "gap-2", "p-3", "my-2", "rounded-lg", "bg-warning-50", "dark:bg-warning-700/15", "text-warning-700", "dark:text-warning-400", "text-sm"], [1, "my-3.5"], [1, "block", "text-xs", "text-surface-500", "mb-1"], [1, "block", "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-50"], [1, "border-surface-100", "dark:border-surface-700"], ["class", "block text-base font-semibold text-surface-900 dark:text-surface-50", 4, "ngIf"], ["class", "block text-sm text-surface-400 italic", 4, "ngIf"], [1, "block", "text-2xl", "font-bold", "text-success-600", "dark:text-success-400"], [1, "flex", "justify-between", "items-center", "py-2", "text-sm", "text-surface-700", "dark:text-surface-300"], [1, "font-semibold"], [1, "flex", "justify-between", "items-center", "pt-3", "text-base", "font-bold", "text-surface-900", "dark:text-surface-50"], ["class", "flex items-center gap-2 p-3 mt-3 rounded-lg bg-danger-50 dark:bg-danger-700/20 text-danger-700 dark:text-danger-400 text-sm", 4, "ngIf"], ["class", "mt-3 space-y-2", 4, "ngIf"], ["class", "flex items-center gap-2 mt-4 p-3 rounded-lg bg-success-50 dark:bg-success-700/15 text-success-700 dark:text-success-400 text-sm font-medium", 4, "ngIf"], ["class", "flex items-center gap-2 mt-4 p-3 rounded-lg bg-danger-50 dark:bg-danger-700/20 text-danger-700 dark:text-danger-400 text-sm", 4, "ngIf"], [1, "block", "text-base", "font-semibold", "text-surface-900", "dark:text-surface-50"], [1, "block", "text-sm", "text-surface-400", "italic"], [1, "flex", "items-center", "gap-2", "p-3", "mt-3", "rounded-lg", "bg-danger-50", "dark:bg-danger-700/20", "text-danger-700", "dark:text-danger-400", "text-sm"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6"], [1, "mt-3", "space-y-2"], ["class", "flex items-center gap-2 p-3 rounded-lg text-sm", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2", "p-3", "rounded-lg", "text-sm", 3, "ngClass"], [1, "flex", "items-center", "gap-2", "mt-4", "p-3", "rounded-lg", "bg-success-50", "dark:bg-success-700/15", "text-success-700", "dark:text-success-400", "text-sm", "font-medium"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "flex", "items-center", "gap-2", "mt-4", "p-3", "rounded-lg", "bg-danger-50", "dark:bg-danger-700/20", "text-danger-700", "dark:text-danger-400", "text-sm"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"], ["class", "flex items-center justify-between p-4 mb-4 rounded-xl bg-purple-50 dark:bg-purple-900/15 border border-purple-200 dark:border-purple-700/30", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "p-4", "mb-4", "rounded-xl", "bg-purple-50", "dark:bg-purple-900/15", "border", "border-purple-200", "dark:border-purple-700/30"], [1, "w-11", "h-11", "rounded-full", "bg-purple-600", "text-white", "flex", "items-center", "justify-center", "font-bold", "text-lg", "flex-shrink-0"], [1, "text-sm", "text-surface-500", "mt-0.5"], [1, "p-1.5", "rounded-lg", "text-danger-500", "hover:bg-danger-50", "dark:hover:bg-danger-700/20", "transition-colors", 3, "click"], ["formControlName", "country", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors"], ["formControlName", "relationship", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors"], ["value", "Family"], ["value", "Friend"], ["value", "Business"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "mb-4"], [1, "flex", "gap-2"], [1, "flex-1"], [1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["title", "Select Branch", 1, "mt-6", "p-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-brand-600", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition-colors", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Z"], ["formControlName", "accountNumber", "type", "text", "placeholder", "Account number", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors"], ["class", "flex items-center gap-2 p-3 mb-4 rounded-lg bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-700/30 text-brand-700 dark:text-brand-300 text-sm", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "p-3", "mb-4", "rounded-lg", "bg-brand-50", "dark:bg-brand-900/20", "border", "border-brand-200", "dark:border-brand-700/30", "text-brand-700", "dark:text-brand-300", "text-sm"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21"], [1, "p-1", "rounded", "text-surface-400", "hover:text-surface-600", 3, "click"], ["formControlName", "accountNumber", "type", "text", "placeholder", "Wallet number", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors"], ["type", "text", "placeholder", "Search receivers by name or phone...", 1, "w-full", "pl-10", "pr-9", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "ngModel"], ["class", "absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-surface-400 hover:text-surface-600", 3, "click", 4, "ngIf"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "p-1", "rounded", "text-surface-400", "hover:text-surface-600", 3, "click"], [1, "w-10", "h-10", "rounded-full", "bg-purple-600", "text-white", "flex", "items-center", "justify-center", "font-semibold", "flex-shrink-0"], [1, "text-xs", "text-surface-500", "truncate", "mt-0.5"], [1, "flex", "items-center", "gap-2", "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-50", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-x-6", "gap-y-3.5"], [1, "block", "text-xs", "text-surface-500", "font-medium"], [1, "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "text-sm", "font-semibold", "text-success-600", "dark:text-success-400"], [1, "text-base", "font-bold", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"], [1, "animate-slide-up"], [1, "max-w-[600px]", "mx-auto", "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-10", "shadow-soft", "text-center"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-[72px]", "h-[72px]", "mx-auto", "text-success-500", "mb-4"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-50", "mb-1"], [1, "text-base", "text-surface-500", "mb-7"], [1, "text-brand-600", "dark:text-brand-400", "text-lg"], [1, "text-left", "bg-surface-50", "dark:bg-surface-900", "rounded-xl", "p-5", "mb-7", "divide-y", "divide-surface-100", "dark:divide-surface-700"], [1, "flex", "justify-between", "items-center", "py-2.5"], [1, "text-sm", "text-surface-500", "font-medium"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-full", "text-xs", "font-semibold", "bg-warning-100", "dark:bg-warning-700/20", "text-warning-700", "dark:text-warning-400"], [1, "text-sm", "font-bold", "text-success-600", "dark:text-success-400"], [1, "flex", "items-center", "justify-center", "gap-3"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "text-sm", "font-medium", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-surface-700", "dark:text-surface-300", "hover:bg-surface-50", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "text-sm", "font-semibold", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "text-white", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4.5v15m7.5-7.5h-15"], [1, "fixed", "inset-0", "z-[1000]", "bg-black/50", "backdrop-blur-xs", "animate-fade-in", 3, "click"], [1, "fixed", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-[1001]", "w-[400px]", "max-w-[90vw]", "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-dialog", "animate-slide-up"], [1, "flex", "items-center", "justify-between", "px-6", "pt-5", "pb-3", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "flex", "items-center", "gap-2", "text-lg", "font-semibold", "text-brand-600", "dark:text-brand-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"], [1, "p-1.5", "rounded-lg", "text-surface-400", "hover:text-surface-600", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], [1, "px-6", "py-5", "space-y-4"], ["class", "text-sm text-surface-500 leading-relaxed", 4, "ngIf"], ["class", "flex items-center gap-2 p-3 rounded-lg bg-danger-50 dark:bg-danger-700/20 text-danger-600 dark:text-danger-400 text-sm", 4, "ngIf"], ["type", "password", "maxlength", "6", "placeholder", "Enter PIN", "autocomplete", "off", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "flex", "justify-end", "gap-3", "px-6", "pb-5"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "text-sm", "font-semibold", "rounded-lg", "bg-brand-600", "hover:bg-brand-700", "text-white", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", "min-w-[120px]", "justify-center", 3, "click", "disabled"], [1, "text-sm", "text-surface-500", "leading-relaxed"], [1, "flex", "items-center", "gap-2", "p-3", "rounded-lg", "bg-danger-50", "dark:bg-danger-700/20", "text-danger-600", "dark:text-danger-400", "text-sm"], ["type", "password", "maxlength", "6", "placeholder", "Confirm PIN", "autocomplete", "off", 1, "w-full", "px-3", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "fixed", "inset-0", "z-[1000]", "bg-black/40", "animate-fade-in", 3, "click"], [1, "fixed", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-[1001]", "w-[560px]", "max-w-[90vw]", "max-h-[80vh]", "bg-white", "dark:bg-surface-800", "rounded-2xl", "shadow-dialog", "flex", "flex-col", "overflow-hidden", "animate-slide-up"], [1, "flex", "items-center", "justify-between", "px-5", "py-4", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "flex", "items-center", "gap-2", "text-base", "font-semibold", "text-surface-900", "dark:text-surface-50"], [1, "px-5", "pt-3"], ["type", "text", "placeholder", "Search by name, code, or address...", 1, "w-full", "pl-10", "pr-9", "py-2.5", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "text-sm", "bg-white", "dark:bg-surface-800", "text-surface-900", "dark:text-surface-100", "placeholder-surface-400", "focus:outline-none", "focus:ring-2", "focus:ring-brand-500/30", "focus:border-brand-500", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "flex-1", "overflow-y-auto", "max-h-[400px]", "px-2", "pb-3", "mt-2"], ["class", "flex items-center gap-3 px-3.5 py-3 mx-1 my-0.5 rounded-lg cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "opacity-50"], [1, "flex", "items-center", "gap-3", "px-3.5", "py-3", "mx-1", "my-0.5", "rounded-lg", "cursor-pointer", "hover:bg-surface-50", "dark:hover:bg-surface-700/30", "transition-colors", 3, "click", "ngClass"], [1, "w-9", "h-9", "rounded-lg", "bg-brand-50", "dark:bg-brand-900/20", "flex", "items-center", "justify-center", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"]], template: function SendMoneyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275listener("click", function SendMoneyComponent_Template_div_click_2_listener() {
          return ctx.step > 0 ? ctx.step = 0 : null;
        });
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275template(4, SendMoneyComponent__svg_svg_4_Template, 2, 0, "svg", 4)(5, SendMoneyComponent_span_5_Template, 2, 0, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275text(7, "Customer");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(8, "div", 7);
        \u0275\u0275elementStart(9, "div", 2);
        \u0275\u0275listener("click", function SendMoneyComponent_Template_div_click_9_listener() {
          return ctx.step > 1 ? ctx.step = 1 : null;
        });
        \u0275\u0275elementStart(10, "div", 3);
        \u0275\u0275template(11, SendMoneyComponent__svg_svg_11_Template, 2, 0, "svg", 4)(12, SendMoneyComponent_span_12_Template, 2, 0, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 6);
        \u0275\u0275text(14, "Calculate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(15, "div", 7);
        \u0275\u0275elementStart(16, "div", 2);
        \u0275\u0275listener("click", function SendMoneyComponent_Template_div_click_16_listener() {
          return ctx.step > 2 ? ctx.step = 2 : null;
        });
        \u0275\u0275elementStart(17, "div", 3);
        \u0275\u0275template(18, SendMoneyComponent__svg_svg_18_Template, 2, 0, "svg", 4)(19, SendMoneyComponent_span_19_Template, 2, 0, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 6);
        \u0275\u0275text(21, "Receiver");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(22, "div", 7);
        \u0275\u0275elementStart(23, "div", 8)(24, "div", 3);
        \u0275\u0275template(25, SendMoneyComponent__svg_svg_25_Template, 2, 0, "svg", 4)(26, SendMoneyComponent_span_26_Template, 2, 0, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 6);
        \u0275\u0275text(28, "Done");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(29, SendMoneyComponent_div_29_Template, 22, 10, "div", 9)(30, SendMoneyComponent_div_30_Template, 62, 16, "div", 9)(31, SendMoneyComponent_div_31_Template, 25, 10, "div", 9)(32, SendMoneyComponent_div_32_Template, 65, 29, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, SendMoneyComponent_div_33_Template, 1, 0, "div", 11)(34, SendMoneyComponent_div_34_Template, 24, 10, "div", 12)(35, SendMoneyComponent_div_35_Template, 1, 0, "div", 13)(36, SendMoneyComponent_div_36_Template, 18, 5, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("cursor-pointer", ctx.step > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(33, _c0, ctx.step === 0, ctx.step > 0, ctx.step < 0));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step <= 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(37, _c1, ctx.step === 0, ctx.step > 0, ctx.step < 0));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.step > 0 ? "bg-success-500" : "bg-surface-200 dark:bg-surface-700");
        \u0275\u0275advance();
        \u0275\u0275classProp("cursor-pointer", ctx.step > 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(41, _c0, ctx.step === 1, ctx.step > 1, ctx.step < 1));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step > 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step <= 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(45, _c1, ctx.step === 1, ctx.step > 1, ctx.step < 1));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.step > 1 ? "bg-success-500" : "bg-surface-200 dark:bg-surface-700");
        \u0275\u0275advance();
        \u0275\u0275classProp("cursor-pointer", ctx.step > 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(49, _c0, ctx.step === 2, ctx.step > 2, ctx.step < 2));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step > 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step <= 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(53, _c1, ctx.step === 2, ctx.step > 2, ctx.step < 2));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.step > 2 ? "bg-success-500" : "bg-surface-200 dark:bg-surface-700");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(57, _c2, ctx.step === 3, ctx.step < 3));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step === 3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step < 3);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(60, _c3, ctx.step === 3, ctx.step < 3));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.step === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step === 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step === 3 && ctx.successResult);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPinDialog);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPinDialog);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBranchPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBranchPopup);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      DecimalPipe,
      DatePipe,
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
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.no-underline[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=send-money.component.css.map */"] });
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
    ], providers: [SendMoneyStore], template: `<!-- Agent Send Money \u2014 Tailwind + Reactive Forms -->
<div class="max-w-[1200px] space-y-6">

  <!-- \u2500\u2500 Progress Steps Header \u2500\u2500 -->
  <div class="flex items-center justify-center gap-0 px-5 mb-7">
    <!-- Step 1: Customer -->
    <div class="flex flex-col items-center gap-1.5 min-w-[70px] cursor-default"
         [class.cursor-pointer]="step > 0" (click)="step > 0 ? step = 0 : null">
      <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all"
           [ngClass]="{
             'bg-brand-600 text-white shadow-glow-brand': step === 0,
             'bg-success-600 text-white': step > 0,
             'bg-surface-200 dark:bg-surface-700 text-surface-500 dark:text-surface-400': step < 0
           }">
        <svg *ngIf="step > 0" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
        <span *ngIf="step <= 0">1</span>
      </div>
      <span class="text-xs font-medium"
            [ngClass]="{'text-brand-600 dark:text-brand-400 font-semibold': step === 0, 'text-success-600 dark:text-success-400': step > 0, 'text-surface-500 dark:text-surface-400': step < 0}">Customer</span>
    </div>
    <div class="flex-1 h-[3px] rounded-full max-w-[120px] mx-1 mb-5.5 transition-colors duration-300"
         [ngClass]="step > 0 ? 'bg-success-500' : 'bg-surface-200 dark:bg-surface-700'"></div>

    <!-- Step 2: Calculate -->
    <div class="flex flex-col items-center gap-1.5 min-w-[70px] cursor-default"
         [class.cursor-pointer]="step > 1" (click)="step > 1 ? step = 1 : null">
      <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all"
           [ngClass]="{
             'bg-brand-600 text-white shadow-glow-brand': step === 1,
             'bg-success-600 text-white': step > 1,
             'bg-surface-200 dark:bg-surface-700 text-surface-500 dark:text-surface-400': step < 1
           }">
        <svg *ngIf="step > 1" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
        <span *ngIf="step <= 1">2</span>
      </div>
      <span class="text-xs font-medium"
            [ngClass]="{'text-brand-600 dark:text-brand-400 font-semibold': step === 1, 'text-success-600 dark:text-success-400': step > 1, 'text-surface-500 dark:text-surface-400': step < 1}">Calculate</span>
    </div>
    <div class="flex-1 h-[3px] rounded-full max-w-[120px] mx-1 mb-5.5 transition-colors duration-300"
         [ngClass]="step > 1 ? 'bg-success-500' : 'bg-surface-200 dark:bg-surface-700'"></div>

    <!-- Step 3: Receiver -->
    <div class="flex flex-col items-center gap-1.5 min-w-[70px] cursor-default"
         [class.cursor-pointer]="step > 2" (click)="step > 2 ? step = 2 : null">
      <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all"
           [ngClass]="{
             'bg-brand-600 text-white shadow-glow-brand': step === 2,
             'bg-success-600 text-white': step > 2,
             'bg-surface-200 dark:bg-surface-700 text-surface-500 dark:text-surface-400': step < 2
           }">
        <svg *ngIf="step > 2" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
        <span *ngIf="step <= 2">3</span>
      </div>
      <span class="text-xs font-medium"
            [ngClass]="{'text-brand-600 dark:text-brand-400 font-semibold': step === 2, 'text-success-600 dark:text-success-400': step > 2, 'text-surface-500 dark:text-surface-400': step < 2}">Receiver</span>
    </div>
    <div class="flex-1 h-[3px] rounded-full max-w-[120px] mx-1 mb-5.5 transition-colors duration-300"
         [ngClass]="step > 2 ? 'bg-success-500' : 'bg-surface-200 dark:bg-surface-700'"></div>

    <!-- Step 4: Done -->
    <div class="flex flex-col items-center gap-1.5 min-w-[70px] cursor-default">
      <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all"
           [ngClass]="{
             'bg-brand-600 text-white shadow-glow-brand': step === 3,
             'bg-surface-200 dark:bg-surface-700 text-surface-500 dark:text-surface-400': step < 3
           }">
        <svg *ngIf="step === 3" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
        <span *ngIf="step < 3">4</span>
      </div>
      <span class="text-xs font-medium"
            [ngClass]="{'text-brand-600 dark:text-brand-400 font-semibold': step === 3, 'text-surface-500 dark:text-surface-400': step < 3}">Done</span>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- STEP 0: Customer Selection / Creation                             -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="step === 0" class="animate-slide-up space-y-5">
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <div class="flex items-center justify-between mb-5">
        <h3 class="flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-surface-50">
          <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>
          Select or Create Customer
        </h3>
        <button (click)="toggleCreateCustomer()"
                class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-brand-300 dark:border-brand-700 text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors">
          <svg *ngIf="!showCreateCustomer" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"/></svg>
          <svg *ngIf="showCreateCustomer" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
          {{ showCreateCustomer ? 'Cancel' : 'New Customer' }}
        </button>
      </div>

      <!-- Agent Balance Zero Warning -->
      <div *ngIf="agentBalanceZero" class="flex items-center gap-3 p-4 mb-4 rounded-xl bg-danger-50 dark:bg-danger-700/20 border border-danger-200 dark:border-danger-700/40 text-danger-700 dark:text-danger-400 text-sm">
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"/></svg>
        <span>Your available balance is 0. You cannot send transactions until your balance is topped up. Please contact admin.</span>
      </div>

      <!-- Selected Customer Banner -->
      <div *ngIf="selectedCustomer && !showCreateCustomer"
           class="flex items-center justify-between p-4 mb-4 rounded-xl bg-success-50 dark:bg-success-700/15 border border-success-200 dark:border-success-700/30">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-full bg-success-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">{{ selectedCustomer.fullName.charAt(0) }}</div>
          <div>
            <div class="font-semibold text-surface-900 dark:text-surface-50">{{ selectedCustomer.fullName }}</div>
            <div class="text-sm text-surface-500 dark:text-surface-400 mt-0.5">
              <span *ngIf="selectedCustomer.phone">{{ selectedCustomer.phone }}</span>
              <span *ngIf="selectedCustomer.email"> &middot; {{ selectedCustomer.email }}</span>
              <span *ngIf="selectedCustomer.country"> &middot; {{ selectedCustomer.country }}</span>
            </div>
          </div>
        </div>
        <button (click)="clearSelectedCustomer()" title="Remove selection" class="p-1.5 rounded-lg text-danger-500 hover:bg-danger-50 dark:hover:bg-danger-700/20 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- KYC / DOB Warnings -->
      <div *ngIf="kycWarning" class="flex items-center gap-3 p-4 mb-4 rounded-xl bg-danger-50 dark:bg-danger-700/20 border border-danger-200 dark:border-danger-700/40 text-danger-700 dark:text-danger-400 text-sm">
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>
        <span>{{ kycWarning }}</span>
      </div>
      <div *ngIf="dobWarning" class="flex items-center gap-3 p-4 mb-4 rounded-xl bg-danger-50 dark:bg-danger-700/20 border border-danger-200 dark:border-danger-700/40 text-danger-700 dark:text-danger-400 text-sm">
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513"/></svg>
        <span>{{ dobWarning }}</span>
      </div>

      <!-- \u2500\u2500 Create Customer Form \u2500\u2500 -->
      <div *ngIf="showCreateCustomer" class="space-y-4">
        <div *ngIf="customerFormError" class="flex items-center gap-2 p-3 rounded-lg bg-danger-50 dark:bg-danger-700/20 text-danger-700 dark:text-danger-400 text-sm">
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
          {{ customerFormError }}
        </div>
        <form [formGroup]="customerForm">
          <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Personal Information</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Full Name *</label>
              <input formControlName="fullName" type="text" placeholder="Enter full name" class="w-full px-3 py-2.5 rounded-lg border text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" [ngClass]="customerFormErrors['fullName'] ? 'border-danger-400' : 'border-surface-300 dark:border-surface-600'" />
              <p *ngIf="customerFormErrors['fullName']" class="text-xs text-danger-500 mt-1">{{ customerFormErrors['fullName'] }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Phone *</label>
              <input formControlName="phone" type="text" placeholder="+1 234 567 890" class="w-full px-3 py-2.5 rounded-lg border text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" [ngClass]="customerFormErrors['phone'] ? 'border-danger-400' : 'border-surface-300 dark:border-surface-600'" />
              <p *ngIf="customerFormErrors['phone']" class="text-xs text-danger-500 mt-1">{{ customerFormErrors['phone'] }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Email</label>
              <input formControlName="email" type="email" placeholder="email@example.com" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Date of Birth</label>
              <p-datepicker formControlName="dateOfBirth" [maxDate]="maxDobDate" dateFormat="dd/mm/yy"
                [showIcon]="true" [showClear]="true" placeholder="DD/MM/YYYY"
                styleClass="w-full"
                inputStyleClass="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Gender</label>
              <select formControlName="gender" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors">
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Nationality *</label>
              <input formControlName="nationality" type="text" placeholder="Nationality" class="w-full px-3 py-2.5 rounded-lg border text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" [ngClass]="customerFormErrors['nationality'] ? 'border-danger-400' : 'border-surface-300 dark:border-surface-600'" />
              <p *ngIf="customerFormErrors['nationality']" class="text-xs text-danger-500 mt-1">{{ customerFormErrors['nationality'] }}</p>
            </div>
          </div>
          <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Address</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Country *</label>
              <select formControlName="country" class="w-full px-3 py-2.5 rounded-lg border text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" [ngClass]="customerFormErrors['country'] ? 'border-danger-400' : 'border-surface-300 dark:border-surface-600'">
                <option value="">Select country</option>
                <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
              </select>
              <p *ngIf="customerFormErrors['country']" class="text-xs text-danger-500 mt-1">{{ customerFormErrors['country'] }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">City</label>
              <input formControlName="city" type="text" placeholder="City" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">State</label>
              <input formControlName="state" type="text" placeholder="State / Province" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Postal Code</label>
              <input formControlName="postalCode" type="text" placeholder="Postal / ZIP code" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Address</label>
              <input formControlName="address" type="text" placeholder="Street address" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
            </div>
          </div>
          <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Identification</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">ID Document Type *</label>
              <select formControlName="idDocumentType" class="w-full px-3 py-2.5 rounded-lg border text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" [ngClass]="customerFormErrors['idDocumentType'] ? 'border-danger-400' : 'border-surface-300 dark:border-surface-600'">
                <option value="">Select type</option>
                <option *ngFor="let t of idTypes" [value]="t">{{ t }}</option>
              </select>
              <p *ngIf="customerFormErrors['idDocumentType']" class="text-xs text-danger-500 mt-1">{{ customerFormErrors['idDocumentType'] }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">ID Document Number *</label>
              <input formControlName="idDocumentNumber" type="text" placeholder="Document number" class="w-full px-3 py-2.5 rounded-lg border text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" [ngClass]="customerFormErrors['idDocumentNumber'] ? 'border-danger-400' : 'border-surface-300 dark:border-surface-600'" />
              <p *ngIf="customerFormErrors['idDocumentNumber']" class="text-xs text-danger-500 mt-1">{{ customerFormErrors['idDocumentNumber'] }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Issuing Country</label>
              <select formControlName="docIssuingCountry" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors">
                <option value="">Select country</option>
                <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Issue Date</label>
              <p-datepicker formControlName="docIssueDate" [maxDate]="todayDate" dateFormat="dd/mm/yy"
                [showIcon]="true" [showClear]="true" placeholder="DD/MM/YYYY"
                styleClass="w-full"
                inputStyleClass="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Expiry Date</label>
              <p-datepicker formControlName="docExpiryDate" [minDate]="todayDate" dateFormat="dd/mm/yy"
                [showIcon]="true" [showClear]="true" placeholder="DD/MM/YYYY"
                styleClass="w-full"
                inputStyleClass="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
            </div>
          </div>

          <!-- Document Upload Section -->
          <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Document Upload</div>
          <p class="text-xs text-surface-500 dark:text-surface-400 mb-3">Upload front (required) and back images of the ID document.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Front Image *</label>
              <div class="relative">
                <input type="file" accept="image/*" (change)="onFrontImageSelected($event)" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 dark:file:bg-brand-900/30 dark:file:text-brand-300 hover:file:bg-brand-100 transition-colors cursor-pointer" />
              </div>
              <div *ngIf="frontImagePreview" class="mt-2">
                <img [src]="frontImagePreview" alt="Front preview" class="w-24 h-16 object-cover rounded-lg border border-surface-200 dark:border-surface-700" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Back Image</label>
              <div class="relative">
                <input type="file" accept="image/*" (change)="onBackImageSelected($event)" class="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 dark:file:bg-brand-900/30 dark:file:text-brand-300 hover:file:bg-brand-100 transition-colors cursor-pointer" />
              </div>
              <div *ngIf="backImagePreview" class="mt-2">
                <img [src]="backImagePreview" alt="Back preview" class="w-24 h-16 object-cover rounded-lg border border-surface-200 dark:border-surface-700" />
              </div>
            </div>
          </div>
        </form>
        <div class="flex justify-end gap-3 pt-2">
          <button (click)="toggleCreateCustomer()" class="px-4 py-2.5 text-sm font-medium rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">Cancel</button>
          <button (click)="saveNewCustomer()" [disabled]="savingCustomer" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <svg *ngIf="savingCustomer" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
            <svg *ngIf="!savingCustomer" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
            Save Customer
          </button>
        </div>
      </div>

      <!-- \u2500\u2500 Customer Search & List \u2500\u2500 -->
      <div *ngIf="!showCreateCustomer && !selectedCustomer">
        <div class="relative mb-4">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
          <input type="text" [(ngModel)]="customerSearch" (ngModelChange)="filterCustomers()" placeholder="Search customers by name, email, or phone..." class="w-full pl-10 pr-9 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
          <button *ngIf="customerSearch" (click)="customerSearch = ''; filterCustomers()" class="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-surface-400 hover:text-surface-600 dark:hover:text-surface-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="max-h-[400px] overflow-y-auto rounded-lg border border-surface-200 dark:border-surface-700">
          <div *ngIf="filteredCustomers.length === 0" class="flex flex-col items-center gap-2 py-10 text-surface-400">
            <svg class="w-10 h-10 opacity-50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span class="text-sm">No customers found. Create a new one above.</span>
          </div>
          <div *ngFor="let c of filteredCustomers" class="flex items-center gap-3 px-4 py-3 cursor-pointer border-b border-surface-100 dark:border-surface-700/50 last:border-b-0 hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors" [ngClass]="{'bg-brand-50 dark:bg-brand-900/20 border-l-[3px] border-l-brand-600': selectedCustomerId === c.id}" (click)="selectCustomer(c)">
            <div class="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-semibold flex-shrink-0">{{ c.fullName.charAt(0) }}</div>
            <div class="flex-1 min-w-0">
              <div class="font-semibold text-sm text-surface-900 dark:text-surface-100">{{ c.fullName }}</div>
              <div class="text-xs text-surface-500 dark:text-surface-400 truncate mt-0.5">{{ c.phone }}<span *ngIf="c.email"> &middot; {{ c.email }}</span></div>
            </div>
            <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-100 dark:bg-surface-700 text-surface-500 whitespace-nowrap">{{ c.country }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end pt-2">
      <button (click)="nextStep()" [disabled]="!canProceedStep1()" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        Next: Calculate Amount
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
      </button>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- STEP 1: Amount & Calculation                                      -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="step === 1" class="animate-slide-up space-y-5">
    <div class="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 items-start">
      <!-- Left: Form -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
        <h3 class="flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-surface-50 mb-5">
          <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg>
          Transfer Details
        </h3>
        <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Sending From</div>
        <div class="flex items-center gap-3 p-4 mb-5 rounded-xl bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-700/30">
          <svg class="w-7 h-7 text-brand-600 dark:text-brand-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"/></svg>
          <div>
            <div class="font-semibold text-sm text-surface-900 dark:text-surface-100">{{ agentProfile?.businessName || 'Agent' }}</div>
            <div class="text-xs text-surface-500 dark:text-surface-400 mt-0.5">{{ senderCountry }} &middot; {{ senderCurrency }}</div>
          </div>
        </div>
        <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Sending To</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div>
            <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Destination Country</label>
            <select [(ngModel)]="receiverCountry" (ngModelChange)="onReceiverCountryChange()" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors">
              <option value="">Select destination country</option>
              <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Receiver Currency</label>
            <input type="text" [value]="receiverCurrency || '\u2014'" readonly class="w-full px-3 py-2.5 rounded-lg border border-surface-200 dark:border-surface-700 text-sm bg-surface-50 dark:bg-surface-900 text-surface-500 cursor-not-allowed" />
          </div>
        </div>
        <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Payment Method</div>
        <div class="mb-5">
          <select [(ngModel)]="selectedPaymentMethodId" (ngModelChange)="onPaymentMethodChange()" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors">
            <option [ngValue]="null">Select payment method</option>
            <option *ngFor="let m of paymentMethods" [ngValue]="m.id">{{ m.name }}</option>
          </select>
        </div>
        <div *ngIf="routeError" class="flex items-center gap-2 p-3 mb-4 rounded-lg bg-warning-50 dark:bg-warning-700/15 border border-warning-200 dark:border-warning-700/30 text-warning-700 dark:text-warning-400 text-sm">
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>
          <span>{{ routeError }}</span>
        </div>
        <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Amount</div>
        <div class="relative max-w-[400px]">
          <input type="number" [(ngModel)]="sendAmount" (ngModelChange)="onAmountChange()" min="0" placeholder="0.00" class="w-full px-3 py-2.5 pr-16 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-surface-500">{{ senderCurrency || '---' }}</span>
        </div>
      </div>

      <!-- Right: Live Calculation -->
      <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft sticky top-20">
        <h3 class="flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-surface-50 mb-5">
          <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"/></svg>
          Calculation
        </h3>
        <div *ngIf="loadingCalc" class="my-3">
          <div class="w-full h-1.5 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden"><div class="h-full bg-brand-500 rounded-full animate-pulse-soft" style="width:60%"></div></div>
          <span class="block text-center text-xs text-surface-500 mt-2">Calculating...</span>
        </div>
        <div *ngIf="calcError" class="flex items-center gap-2 p-3 my-2 rounded-lg bg-warning-50 dark:bg-warning-700/15 text-warning-700 dark:text-warning-400 text-sm">
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
          <span>{{ calcError }}</span>
        </div>
        <div *ngIf="!loadingCalc && !calcError">
          <div class="my-3.5"><span class="block text-xs text-surface-500 mb-1">Send Amount</span><span class="block text-2xl font-bold text-surface-900 dark:text-surface-50">{{ sendAmount | number:'1.2-2' }} {{ senderCurrency }}</span></div>
          <hr class="border-surface-100 dark:border-surface-700" />
          <div class="my-3.5"><span class="block text-xs text-surface-500 mb-1">Exchange Rate</span>
            <span *ngIf="exchangeRate > 0" class="block text-base font-semibold text-surface-900 dark:text-surface-50">1 {{ senderCurrency }} = {{ exchangeRate | number:'1.4-4' }} {{ receiverCurrency }}</span>
            <span *ngIf="exchangeRate === 0 && !calculationDone" class="block text-sm text-surface-400 italic">\u2014</span>
          </div>
          <div class="my-3.5"><span class="block text-xs text-surface-500 mb-1">Receive Amount</span><span class="block text-2xl font-bold text-success-600 dark:text-success-400">{{ receiveAmount | number:'1.2-2' }} {{ receiverCurrency }}</span></div>
          <hr class="border-surface-100 dark:border-surface-700" />
          <div class="flex justify-between items-center py-2 text-sm text-surface-700 dark:text-surface-300"><span>Service Charge</span><span class="font-semibold">{{ serviceCharge | number:'1.2-2' }} {{ senderCurrency }}</span></div>
          <hr class="border-surface-100 dark:border-surface-700" />
          <div class="flex justify-between items-center pt-3 text-base font-bold text-surface-900 dark:text-surface-50"><span>Customer Pays</span><span>{{ totalPayable | number:'1.2-2' }} {{ senderCurrency }}</span></div>
          <div *ngIf="balanceWarning" class="flex items-center gap-2 p-3 mt-3 rounded-lg bg-danger-50 dark:bg-danger-700/20 text-danger-700 dark:text-danger-400 text-sm">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6"/></svg>
            <span>{{ balanceWarning }}</span>
          </div>
          <div *ngIf="complianceViolations.length > 0" class="mt-3 space-y-2">
            <div *ngFor="let v of complianceViolations" class="flex items-center gap-2 p-3 rounded-lg text-sm" [ngClass]="v.action === 'Block' ? 'bg-danger-50 dark:bg-danger-700/20 text-danger-700 dark:text-danger-400' : 'bg-warning-50 dark:bg-warning-700/15 text-warning-700 dark:text-warning-400'">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>
              <span><strong>{{ v.ruleName }}</strong>: {{ v.description }}</span>
            </div>
          </div>
          <div *ngIf="calculationDone && !complianceBlocked && !balanceWarning" class="flex items-center gap-2 mt-4 p-3 rounded-lg bg-success-50 dark:bg-success-700/15 text-success-700 dark:text-success-400 text-sm font-medium">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg> Ready to proceed
          </div>
          <div *ngIf="complianceBlocked" class="flex items-center gap-2 mt-4 p-3 rounded-lg bg-danger-50 dark:bg-danger-700/20 text-danger-700 dark:text-danger-400 text-sm">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"/></svg>
            <span>Transaction blocked by compliance rules. Cannot proceed.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between pt-2">
      <button (click)="prevStep()" class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/></svg> Back
      </button>
      <button (click)="nextStep()" [disabled]="!canProceedStep2()" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        Next: Select Receiver <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
      </button>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- STEP 2: Receiver Selection / Creation                             -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="step === 2" class="animate-slide-up space-y-5">
    <div class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <div class="flex items-center justify-between mb-5">
        <h3 class="flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-surface-50">
          <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
          Select or Create Receiver
        </h3>
        <button (click)="toggleCreateReceiver()" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-brand-300 dark:border-brand-700 text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors">
          <svg *ngIf="!showCreateReceiver" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"/></svg>
          <svg *ngIf="showCreateReceiver" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
          {{ showCreateReceiver ? 'Cancel' : 'New Receiver' }}
        </button>
      </div>

      <!-- Selected Receiver -->
      <div *ngIf="selectedReceiver && !showCreateReceiver" class="flex items-center justify-between p-4 mb-4 rounded-xl bg-purple-50 dark:bg-purple-900/15 border border-purple-200 dark:border-purple-700/30">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">{{ selectedReceiver.fullName.charAt(0) }}</div>
          <div>
            <div class="font-semibold text-surface-900 dark:text-surface-50">{{ selectedReceiver.fullName }}</div>
            <div class="text-sm text-surface-500 mt-0.5">
              <span *ngIf="selectedReceiver.phone">{{ selectedReceiver.phone }}</span>
              <span *ngIf="selectedReceiver.country"> &middot; {{ selectedReceiver.country }}</span>
              <span *ngIf="selectedReceiver.bankName"> &middot; {{ selectedReceiver.bankName }}</span>
            </div>
          </div>
        </div>
        <button (click)="clearSelectedReceiver()" class="p-1.5 rounded-lg text-danger-500 hover:bg-danger-50 dark:hover:bg-danger-700/20 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Create Receiver Form -->
      <div *ngIf="showCreateReceiver" class="space-y-4">
        <div *ngIf="receiverFormError" class="flex items-center gap-2 p-3 rounded-lg bg-danger-50 dark:bg-danger-700/20 text-danger-700 dark:text-danger-400 text-sm">
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
          {{ receiverFormError }}
        </div>
        <form [formGroup]="receiverForm">
          <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Receiver Information</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Full Name *</label>
              <input formControlName="fullName" type="text" placeholder="Enter full name" class="w-full px-3 py-2.5 rounded-lg border text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" [ngClass]="receiverFormErrors['fullName'] ? 'border-danger-400' : 'border-surface-300 dark:border-surface-600'" />
              <p *ngIf="receiverFormErrors['fullName']" class="text-xs text-danger-500 mt-1">{{ receiverFormErrors['fullName'] }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Phone *</label>
              <input formControlName="phone" type="text" placeholder="+1 234 567 890" class="w-full px-3 py-2.5 rounded-lg border text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" [ngClass]="receiverFormErrors['phone'] ? 'border-danger-400' : 'border-surface-300 dark:border-surface-600'" />
              <p *ngIf="receiverFormErrors['phone']" class="text-xs text-danger-500 mt-1">{{ receiverFormErrors['phone'] }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Email</label>
              <input formControlName="email" type="email" placeholder="email@example.com" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
            </div>
          </div>
          <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Location</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            <div><label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Country</label>
              <select formControlName="country" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors"><option value="">Select country</option><option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option></select>
            </div>
            <div><label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">City</label><input formControlName="city" type="text" placeholder="City" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" /></div>
            <div><label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Relationship</label>
              <select formControlName="relationship" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors"><option value="">Select</option><option value="Family">Family</option><option value="Friend">Friend</option><option value="Business">Business</option><option value="Other">Other</option></select>
            </div>
          </div>
          <!-- Bank Transfer -->
          <ng-container *ngIf="isBankTransfer()">
            <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Bank Details</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div class="flex gap-2">
                <div class="flex-1"><label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Bank</label>
                  <select [(ngModel)]="selectedBankId" [ngModelOptions]="{standalone: true}" (ngModelChange)="onBankSelected()" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors"><option [ngValue]="null">Select bank</option><option *ngFor="let b of payoutBanks" [ngValue]="b.id">{{ b.bankName }}</option></select>
                </div>
                <button (click)="openBranchPopup()" [disabled]="!selectedBankId" title="Select Branch" class="mt-6 p-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Z"/></svg>
                </button>
              </div>
              <div><label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Account Number</label><input formControlName="accountNumber" type="text" placeholder="Account number" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" /></div>
            </div>
            <div *ngIf="selectedBranch" class="flex items-center gap-2 p-3 mb-4 rounded-lg bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-700/30 text-brand-700 dark:text-brand-300 text-sm">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21"/></svg>
              <span class="flex-1">Branch: <strong>{{ selectedBranch.branchName }}</strong><span *ngIf="selectedBranch.branchCode"> ({{ selectedBranch.branchCode }})</span></span>
              <button (click)="selectedBranch = null" class="p-1 rounded text-surface-400 hover:text-surface-600"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg></button>
            </div>
          </ng-container>
          <!-- Cash -->
          <ng-container *ngIf="isCashTransfer()">
            <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Pickup Location</div>
            <div class="mb-5"><select [(ngModel)]="selectedLocationId" [ngModelOptions]="{standalone: true}" (ngModelChange)="onLocationSelected()" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors"><option [ngValue]="null">Select location</option><option *ngFor="let l of payoutLocations" [ngValue]="l.id">{{ l.locationName }}</option></select></div>
          </ng-container>
          <!-- Wallet -->
          <ng-container *ngIf="isWalletTransfer()">
            <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 pb-1 border-b border-surface-100 dark:border-surface-700">Wallet Details</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div><label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Wallet</label><select [(ngModel)]="selectedLocationId" [ngModelOptions]="{standalone: true}" (ngModelChange)="onLocationSelected()" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors"><option [ngValue]="null">Select wallet</option><option *ngFor="let l of payoutLocations" [ngValue]="l.id">{{ l.locationName }}</option></select></div>
              <div><label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Wallet Number</label><input formControlName="accountNumber" type="text" placeholder="Wallet number" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" /></div>
            </div>
          </ng-container>
        </form>
        <div class="flex justify-end gap-3 pt-2">
          <button (click)="toggleCreateReceiver()" class="px-4 py-2.5 text-sm font-medium rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">Cancel</button>
          <button (click)="saveNewReceiver()" [disabled]="savingReceiver" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <svg *ngIf="savingReceiver" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
            Save Receiver
          </button>
        </div>
      </div>

      <!-- Receiver Search & List -->
      <div *ngIf="!showCreateReceiver && !selectedReceiver">
        <div class="relative mb-4">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
          <input type="text" [(ngModel)]="receiverSearch" (ngModelChange)="filterReceivers()" placeholder="Search receivers by name or phone..." class="w-full pl-10 pr-9 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
          <button *ngIf="receiverSearch" (click)="receiverSearch = ''; filterReceivers()" class="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-surface-400 hover:text-surface-600"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg></button>
        </div>
        <div class="max-h-[400px] overflow-y-auto rounded-lg border border-surface-200 dark:border-surface-700">
          <div *ngIf="filteredReceivers.length === 0" class="flex flex-col items-center gap-2 py-10 text-surface-400"><svg class="w-10 h-10 opacity-50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg><span class="text-sm">No receivers found for {{ receiverCountry }}. Create a new one above.</span></div>
          <div *ngFor="let r of filteredReceivers" class="flex items-center gap-3 px-4 py-3 cursor-pointer border-b border-surface-100 dark:border-surface-700/50 last:border-b-0 hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors" [ngClass]="{'bg-brand-50 dark:bg-brand-900/20 border-l-[3px] border-l-brand-600': selectedReceiverId === r.id}" (click)="selectReceiver(r)">
            <div class="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold flex-shrink-0">{{ r.fullName.charAt(0) }}</div>
            <div class="flex-1 min-w-0"><div class="font-semibold text-sm text-surface-900 dark:text-surface-100">{{ r.fullName }}</div><div class="text-xs text-surface-500 truncate mt-0.5">{{ r.phone }}<span *ngIf="r.bankName"> &middot; {{ r.bankName }}</span></div></div>
            <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-100 dark:bg-surface-700 text-surface-500 whitespace-nowrap">{{ r.country }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Transaction Summary -->
    <div *ngIf="selectedReceiver" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
      <h3 class="flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-surface-50 mb-4">
        <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>
        Transaction Summary
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
        <div><span class="block text-xs text-surface-500 font-medium">Sender</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ selectedCustomer?.fullName }}</span></div>
        <div><span class="block text-xs text-surface-500 font-medium">Receiver</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ selectedReceiver.fullName }}</span></div>
        <div><span class="block text-xs text-surface-500 font-medium">From</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ senderCountry }} ({{ senderCurrency }})</span></div>
        <div><span class="block text-xs text-surface-500 font-medium">To</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ receiverCountry }} ({{ receiverCurrency }})</span></div>
        <div><span class="block text-xs text-surface-500 font-medium">Send Amount</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ sendAmount | number:'1.2-2' }} {{ senderCurrency }}</span></div>
        <div><span class="block text-xs text-surface-500 font-medium">Receive Amount</span><span class="text-sm font-semibold text-success-600 dark:text-success-400">{{ receiveAmount | number:'1.2-2' }} {{ receiverCurrency }}</span></div>
        <div><span class="block text-xs text-surface-500 font-medium">Exchange Rate</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ exchangeRate | number:'1.4-4' }}</span></div>
        <div><span class="block text-xs text-surface-500 font-medium">Service Charge</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ serviceCharge | number:'1.2-2' }} {{ senderCurrency }}</span></div>
        <div><span class="block text-xs text-surface-500 font-medium">Payout Mode</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ getPayoutModeName() }}</span></div>
        <div><span class="block text-xs text-surface-500 font-medium">Total Payable</span><span class="text-base font-bold text-brand-600 dark:text-brand-400">{{ totalPayable | number:'1.2-2' }} {{ senderCurrency }}</span></div>
      </div>
    </div>

    <div class="flex items-center justify-between pt-2">
      <button (click)="prevStep()" class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/></svg> Back
      </button>
      <button (click)="submitTransaction()" [disabled]="!canProceedStep3() || submitting" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        <svg *ngIf="submitting" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
        <svg *ngIf="!submitting" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/></svg>
        Submit Transaction
      </button>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- STEP 3: Success                                                   -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="step === 3 && successResult" class="animate-slide-up">
    <div class="max-w-[600px] mx-auto rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-10 shadow-soft text-center">
      <svg class="w-[72px] h-[72px] mx-auto text-success-500 mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
      <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-50 mb-1">Transaction Submitted!</h2>
      <p class="text-base text-surface-500 mb-7">Reference: <strong class="text-brand-600 dark:text-brand-400 text-lg">{{ successResult.referenceNumber }}</strong></p>
      <div class="text-left bg-surface-50 dark:bg-surface-900 rounded-xl p-5 mb-7 divide-y divide-surface-100 dark:divide-surface-700">
        <div class="flex justify-between items-center py-2.5"><span class="text-sm text-surface-500 font-medium">Status</span><span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-warning-100 dark:bg-warning-700/20 text-warning-700 dark:text-warning-400">{{ getStatusLabel(successResult.status) }}</span></div>
        <div class="flex justify-between items-center py-2.5"><span class="text-sm text-surface-500 font-medium">Send Amount</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ successResult.sendAmount | number:'1.2-2' }} {{ successResult.sendCurrency }}</span></div>
        <div class="flex justify-between items-center py-2.5"><span class="text-sm text-surface-500 font-medium">Exchange Rate</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">1 {{ successResult.sendCurrency }} = {{ successResult.exchangeRateApplied | number:'1.4-4' }} {{ successResult.receiveCurrency }}</span></div>
        <div class="flex justify-between items-center py-2.5"><span class="text-sm text-surface-500 font-medium">Receive Amount</span><span class="text-sm font-bold text-success-600 dark:text-success-400">{{ successResult.receiveAmount | number:'1.2-2' }} {{ successResult.receiveCurrency }}</span></div>
        <div class="flex justify-between items-center py-2.5"><span class="text-sm text-surface-500 font-medium">Service Charge</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ successResult.totalCommission | number:'1.2-2' }} {{ successResult.sendCurrency }}</span></div>
        <div class="flex justify-between items-center py-2.5"><span class="text-sm text-surface-500 font-medium">Sender</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ successResult.senderName }}</span></div>
        <div class="flex justify-between items-center py-2.5"><span class="text-sm text-surface-500 font-medium">Receiver</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ successResult.receiverName }}</span></div>
        <div class="flex justify-between items-center py-2.5"><span class="text-sm text-surface-500 font-medium">Date</span><span class="text-sm font-semibold text-surface-900 dark:text-surface-100">{{ successResult.createdAt | date:'medium' }}</span></div>
      </div>
      <div class="flex items-center justify-center gap-3">
        <button (click)="downloadReceipt()" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg> Download Receipt
        </button>
        <button (click)="startNewTransaction()" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg> New Transaction
        </button>
      </div>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- Transaction PIN Dialog                                            -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div *ngIf="showPinDialog" class="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-xs animate-fade-in" (click)="closePinDialog()"></div>
<div *ngIf="showPinDialog" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-[400px] max-w-[90vw] bg-white dark:bg-surface-800 rounded-2xl shadow-dialog animate-slide-up">
  <div class="flex items-center justify-between px-6 pt-5 pb-3 border-b border-surface-100 dark:border-surface-700">
    <h3 class="flex items-center gap-2 text-lg font-semibold text-brand-600 dark:text-brand-400">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>
      {{ pinMode === 'set' ? 'Set Transaction PIN' : 'Enter Transaction PIN' }}
    </h3>
    <button (click)="closePinDialog()" class="p-1.5 rounded-lg text-surface-400 hover:text-surface-600 hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg></button>
  </div>
  <div class="px-6 py-5 space-y-4">
    <p *ngIf="pinMode === 'set'" class="text-sm text-surface-500 leading-relaxed">Create a 4-6 digit PIN to authorize transactions.</p>
    <p *ngIf="pinMode === 'verify'" class="text-sm text-surface-500 leading-relaxed">Enter your transaction PIN to confirm this transfer.</p>
    <div *ngIf="pinError" class="flex items-center gap-2 p-3 rounded-lg bg-danger-50 dark:bg-danger-700/20 text-danger-600 dark:text-danger-400 text-sm">
      <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
      {{ pinError }}
    </div>
    <div><label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">{{ pinMode === 'set' ? 'New PIN' : 'Transaction PIN' }}</label><input type="password" [(ngModel)]="pinInput" maxlength="6" placeholder="Enter PIN" autocomplete="off" (keydown.enter)="onPinSubmit()" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" /></div>
    <div *ngIf="pinMode === 'set'"><label class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Confirm PIN</label><input type="password" [(ngModel)]="pinConfirm" maxlength="6" placeholder="Confirm PIN" autocomplete="off" (keydown.enter)="onPinSubmit()" class="w-full px-3 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" /></div>
  </div>
  <div class="flex justify-end gap-3 px-6 pb-5">
    <button (click)="closePinDialog()" class="px-4 py-2.5 text-sm font-medium rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">Cancel</button>
    <button (click)="onPinSubmit()" [disabled]="pinLoading" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px] justify-center">
      <svg *ngIf="pinLoading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
      {{ pinMode === 'set' ? 'Set PIN' : 'Confirm & Send' }}
    </button>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- Branch Search Popup                                               -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div *ngIf="showBranchPopup" class="fixed inset-0 z-[1000] bg-black/40 animate-fade-in" (click)="closeBranchPopup()"></div>
<div *ngIf="showBranchPopup" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-[560px] max-w-[90vw] max-h-[80vh] bg-white dark:bg-surface-800 rounded-2xl shadow-dialog flex flex-col overflow-hidden animate-slide-up">
  <div class="flex items-center justify-between px-5 py-4 border-b border-surface-100 dark:border-surface-700">
    <h3 class="flex items-center gap-2 text-base font-semibold text-surface-900 dark:text-surface-50">
      <svg class="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21"/></svg>
      Select Branch &mdash; {{ branchBank?.bankName }}
    </h3>
    <button (click)="closeBranchPopup()" class="p-1.5 rounded-lg text-surface-400 hover:text-surface-600 hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg></button>
  </div>
  <div class="px-5 pt-3">
    <div class="relative">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
      <input type="text" [(ngModel)]="branchSearch" (ngModelChange)="filterBranches()" placeholder="Search by name, code, or address..." class="w-full pl-10 pr-9 py-2.5 rounded-lg border border-surface-300 dark:border-surface-600 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors" />
      <button *ngIf="branchSearch" (click)="branchSearch = ''; filterBranches()" class="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-surface-400 hover:text-surface-600"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg></button>
    </div>
  </div>
  <div class="flex-1 overflow-y-auto max-h-[400px] px-2 pb-3 mt-2">
    <div *ngIf="filteredBranches.length === 0" class="flex flex-col items-center gap-2 py-10 text-surface-400"><svg class="w-8 h-8 opacity-50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg><span class="text-sm">No branches found.</span></div>
    <div *ngFor="let br of filteredBranches" class="flex items-center gap-3 px-3.5 py-3 mx-1 my-0.5 rounded-lg cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-700/30 transition-colors" [ngClass]="{'bg-brand-50 dark:bg-brand-900/20 border-l-[3px] border-l-brand-600': selectedBranch?.id === br.id}" (click)="selectBranch(br)">
      <div class="w-9 h-9 rounded-lg bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"/></svg></div>
      <div class="flex-1 min-w-0"><div class="font-semibold text-sm text-surface-900 dark:text-surface-100">{{ br.branchName }}</div><div class="text-xs text-surface-500 truncate mt-0.5"><span *ngIf="br.branchCode">Code: {{ br.branchCode }}</span><span *ngIf="br.address"> &middot; {{ br.address }}</span><span *ngIf="br.contactPhone"> &middot; {{ br.contactPhone }}</span></div></div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/agent/send-money/send-money.component.scss */\n:host {\n  display: block;\n}\n:host a {\n  text-decoration: none;\n  color: inherit;\n}\n.no-underline {\n  text-decoration: none;\n}\n/*# sourceMappingURL=send-money.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: Router }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SendMoneyComponent, { className: "SendMoneyComponent", filePath: "src/app/pages/agent/send-money/send-money.component.ts", lineNumber: 75 });
})();
export {
  CustomerFormSchema,
  ReceiverFormSchema,
  SendMoneyComponent
};
//# sourceMappingURL=chunk-WON5ACJI.js.map
