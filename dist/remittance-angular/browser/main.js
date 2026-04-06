import {
  BaseComponent,
  BaseIcon,
  BaseStyle,
  TimesIcon,
  providePrimeNG,
  zindexutils
} from "./chunk-5WEXKBPK.js";
import {
  animate,
  animateChild,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-3CFLOBS2.js";
import {
  provideEchartsCore
} from "./chunk-SIY2OY4I.js";
import {
  DomRendererFactory2,
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-ZQKQC2T6.js";
import {
  MessageService,
  PrimeTemplate,
  SharedModule,
  isEmpty,
  setAttribute,
  uuid
} from "./chunk-TLG473HR.js";
import {
  AuthStateService
} from "./chunk-LDWTK5YJ.js";
import {
  environment
} from "./chunk-R63TWOS6.js";
import {
  CommonModule,
  DOCUMENT,
  HttpClient,
  HttpErrorResponse,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  provideHttpClient,
  withInterceptors
} from "./chunk-WBW3ZP3W.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  RendererFactory2,
  RuntimeError,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  catchError,
  filter,
  inject,
  makeEnvironmentProviders,
  numberAttribute,
  performanceMarkFeature,
  provideZoneChangeDetection,
  setClassMetadata,
  switchMap,
  take,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-EU7HC72Q.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-S5KMCARS.js";

// node_modules/primeng/fesm2022/primeng-icons-check.mjs
var CheckIcon = class _CheckIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckIcon_BaseFactory;
    return function CheckIcon_Factory(__ngFactoryType__) {
      return (\u0275CheckIcon_BaseFactory || (\u0275CheckIcon_BaseFactory = \u0275\u0275getInheritedFactory(_CheckIcon)))(__ngFactoryType__ || _CheckIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CheckIcon,
    selectors: [["CheckIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z", "fill", "currentColor"]],
    template: function CheckIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckIcon, [{
    type: Component,
    args: [{
      selector: "CheckIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-exclamationtriangle.mjs
var ExclamationTriangleIcon = class _ExclamationTriangleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExclamationTriangleIcon_BaseFactory;
    return function ExclamationTriangleIcon_Factory(__ngFactoryType__) {
      return (\u0275ExclamationTriangleIcon_BaseFactory || (\u0275ExclamationTriangleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ExclamationTriangleIcon)))(__ngFactoryType__ || _ExclamationTriangleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ExclamationTriangleIcon,
    selectors: [["ExclamationTriangleIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 8,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z", "fill", "currentColor"], ["d", "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z", "fill", "currentColor"], ["d", "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ExclamationTriangleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1)(3, "path", 2)(4, "path", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "defs")(6, "clipPath", 4);
        \u0275\u0275element(7, "rect", 5);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(5);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExclamationTriangleIcon, [{
    type: Component,
    args: [{
      selector: "ExclamationTriangleIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z"
                    fill="currentColor"
                />
                <path
                    d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z"
                    fill="currentColor"
                />
                <path
                    d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-infocircle.mjs
var InfoCircleIcon = class _InfoCircleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InfoCircleIcon_BaseFactory;
    return function InfoCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275InfoCircleIcon_BaseFactory || (\u0275InfoCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_InfoCircleIcon)))(__ngFactoryType__ || _InfoCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InfoCircleIcon,
    selectors: [["InfoCircleIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function InfoCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCircleIcon, [{
    type: Component,
    args: [{
      selector: "InfoCircleIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs
var TimesCircleIcon = class _TimesCircleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesCircleIcon_BaseFactory;
    return function TimesCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesCircleIcon_BaseFactory || (\u0275TimesCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesCircleIcon)))(__ngFactoryType__ || _TimesCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesCircleIcon,
    selectors: [["TimesCircleIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function TimesCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesCircleIcon, [{
    type: Component,
    args: [{
      selector: "TimesCircleIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-toast.mjs
var _c0 = ["container"];
var _c1 = (a0, a1, a210, a310) => ({
  showTransformParams: a0,
  hideTransformParams: a1,
  showTransitionParams: a210,
  hideTransitionParams: a310
});
var _c2 = (a0) => ({
  value: "visible",
  params: a0
});
var _c3 = (a0, a1) => ({
  $implicit: a0,
  closeFn: a1
});
var _c4 = (a0) => ({
  $implicit: a0
});
function ToastItem_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c3, ctx_r1.message, ctx_r1.onCloseIconClick));
  }
}
function ToastItem_Conditional_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("messageIcon"));
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "InfoCircleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesCircleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ExclamationTriangleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "InfoCircleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_span_2_Case_1_Template, 1, 2, "CheckIcon")(2, ToastItem_Conditional_3_ng_container_1_span_2_Case_2_Template, 1, 2, "InfoCircleIcon")(3, ToastItem_Conditional_3_ng_container_1_span_2_Case_3_Template, 1, 2, "TimesCircleIcon")(4, ToastItem_Conditional_3_ng_container_1_span_2_Case_4_Template, 1, 2, "ExclamationTriangleIcon")(5, ToastItem_Conditional_3_ng_container_1_span_2_Case_5_Template, 1, 2, "InfoCircleIcon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.message.severity) === "success" ? 1 : tmp_7_0 === "info" ? 2 : tmp_7_0 === "error" ? 3 : tmp_7_0 === "warn" ? 4 : 5);
  }
}
function ToastItem_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_span_1_Template, 1, 1, "span", 6)(2, ToastItem_Conditional_3_ng_container_1_span_2_Template, 6, 4, "span", 6);
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.message.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.message.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("messageText"));
    \u0275\u0275attribute("data-pc-section", "text");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("summary"));
    \u0275\u0275attribute("data-pc-section", "summary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message.summary, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("detail"));
    \u0275\u0275attribute("data-pc-section", "detail");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.message.detail);
  }
}
function ToastItem_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.cx("closeIcon"));
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template, 1, 1, "span", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.message.closeIcon);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("closeIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "closeicon");
  }
}
function ToastItem_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 7);
    \u0275\u0275listener("click", function ToastItem_Conditional_3_Conditional_3_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCloseIconClick($event));
    })("keydown.enter", function ToastItem_Conditional_3_Conditional_3_Template_button_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCloseIconClick($event));
    });
    \u0275\u0275template(2, ToastItem_Conditional_3_Conditional_3_Conditional_2_Template, 1, 1, "span", 4)(3, ToastItem_Conditional_3_Conditional_3_Conditional_3_Template, 1, 3, "TimesIcon", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ariaLabel", ctx_r1.closeAriaLabel);
    \u0275\u0275attribute("class", ctx_r1.cx("closeButton"))("data-pc-section", "closebutton");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.message.closeIcon ? 2 : 3);
  }
}
function ToastItem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_Template, 8, 10, "ng-container", 5)(2, ToastItem_Conditional_3_ng_container_2_Template, 1, 0, "ng-container", 3)(3, ToastItem_Conditional_3_Conditional_3_Template, 4, 4, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.message == null ? null : ctx_r1.message.contentStyleClass);
    \u0275\u0275property("ngClass", ctx_r1.cx("messageContent"));
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c4, ctx_r1.message));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.message == null ? null : ctx_r1.message.closable) !== false ? 3 : -1);
  }
}
var _c5 = ["message"];
var _c6 = ["headless"];
function Toast_p_toastItem_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-toastItem", 3);
    \u0275\u0275listener("onClose", function Toast_p_toastItem_2_Template_p_toastItem_onClose_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMessageClose($event));
    })("@toastAnimation.start", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@toastAnimation.done", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("message", msg_r3)("index", i_r4)("life", ctx_r1.life)("template", ctx_r1.template || ctx_r1._template)("headlessTemplate", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("@toastAnimation", void 0)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions);
  }
}
var theme = ({
  dt
}) => `
.p-toast {
    width: ${dt("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${dt("toast.icon.size")};
    width: ${dt("toast.icon.size")};
    height: ${dt("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${dt("toast.content.padding")};
    gap: ${dt("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${dt("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${dt("toast.summary.font.weight")};
    font-size: ${dt("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${dt("toast.detail.font.weight")};
    font-size: ${dt("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${dt("toast.transition.duration")}, color ${dt("toast.transition.duration")}, outline-color ${dt("toast.transition.duration")}, box-shadow ${dt("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${dt("toast.close.button.width")};
    height: ${dt("toast.close.button.height")};
    border-radius: ${dt("toast.close.button.border.radius")};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${dt("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${dt("toast.blur")});
    border-radius: ${dt("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${dt("toast.close.icon.size")};
    width: ${dt("toast.close.icon.size")};
    height: ${dt("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${dt("focus.ring.width")};
    outline-style: ${dt("focus.ring.style")};
    outline-offset: ${dt("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${dt("toast.info.background")};
    border-color: ${dt("toast.info.border.color")};
    color: ${dt("toast.info.color")};
    box-shadow: ${dt("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${dt("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.info.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${dt("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${dt("toast.success.background")};
    border-color: ${dt("toast.success.border.color")};
    color: ${dt("toast.success.color")};
    box-shadow: ${dt("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${dt("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.success.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${dt("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${dt("toast.warn.background")};
    border-color: ${dt("toast.warn.border.color")};
    color: ${dt("toast.warn.color")};
    box-shadow: ${dt("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${dt("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${dt("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${dt("toast.error.background")};
    border-color: ${dt("toast.error.border.color")};
    color: ${dt("toast.error.color")};
    box-shadow: ${dt("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${dt("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.error.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${dt("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${dt("toast.secondary.background")};
    border-color: ${dt("toast.secondary.border.color")};
    color: ${dt("toast.secondary.color")};
    box-shadow: ${dt("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${dt("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${dt("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${dt("toast.contrast.background")};
    border-color: ${dt("toast.contrast.border.color")};
    color: ${dt("toast.contrast.color")};
    box-shadow: ${dt("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${dt("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${dt("toast.contrast.close.button.hover.background")};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`;
var inlineStyles = {
  root: ({
    instance
  }) => {
    const {
      _position
    } = instance;
    return {
      position: "fixed",
      top: _position === "top-right" || _position === "top-left" || _position === "top-center" ? "20px" : _position === "center" ? "50%" : null,
      right: (_position === "top-right" || _position === "bottom-right") && "20px",
      bottom: (_position === "bottom-left" || _position === "bottom-right" || _position === "bottom-center") && "20px",
      left: _position === "top-left" || _position === "bottom-left" ? "20px" : _position === "center" || _position === "top-center" || _position === "bottom-center" ? "50%" : null
    };
  }
};
var classes = {
  root: ({
    instance
  }) => ({
    "p-toast p-component": true,
    [`p-toast-${instance._position}`]: !!instance._position
  }),
  message: ({
    instance
  }) => ({
    "p-toast-message": true,
    "p-toast-message-info": instance.message.severity === "info" || instance.message.severity === void 0,
    "p-toast-message-warn": instance.message.severity === "warn",
    "p-toast-message-error": instance.message.severity === "error",
    "p-toast-message-success": instance.message.severity === "success",
    "p-toast-message-secondary": instance.message.severity === "secondary",
    "p-toast-message-contrast": instance.message.severity === "contrast"
  }),
  messageContent: "p-toast-message-content",
  messageIcon: ({
    instance
  }) => ({
    "p-toast-message-icon": true,
    [`pi ${instance.message.icon}`]: !!instance.message.icon
  }),
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: ({
    instance
  }) => ({
    "p-toast-close-icon": true,
    [`pi ${instance.message.closeIcon}`]: !!instance.message.closeIcon
  })
};
var ToastStyle = class _ToastStyle extends BaseStyle {
  name = "toast";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToastStyle_BaseFactory;
    return function ToastStyle_Factory(__ngFactoryType__) {
      return (\u0275ToastStyle_BaseFactory || (\u0275ToastStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToastStyle)))(__ngFactoryType__ || _ToastStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastStyle,
    factory: _ToastStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastStyle, [{
    type: Injectable
  }], null, null);
})();
var ToastClasses;
(function(ToastClasses2) {
  ToastClasses2["root"] = "p-toast";
  ToastClasses2["message"] = "p-toast-message";
  ToastClasses2["messageContent"] = "p-toast-message-content";
  ToastClasses2["messageIcon"] = "p-toast-message-icon";
  ToastClasses2["messageText"] = "p-toast-message-text";
  ToastClasses2["summary"] = "p-toast-summary";
  ToastClasses2["detail"] = "p-toast-detail";
  ToastClasses2["closeButton"] = "p-toast-close-button";
  ToastClasses2["closeIcon"] = "p-toast-close-icon";
})(ToastClasses || (ToastClasses = {}));
var ToastItem = class _ToastItem extends BaseComponent {
  zone;
  message;
  index;
  life;
  template;
  headlessTemplate;
  showTransformOptions;
  hideTransformOptions;
  showTransitionOptions;
  hideTransitionOptions;
  onClose = new EventEmitter();
  containerViewChild;
  _componentStyle = inject(ToastStyle);
  timeout;
  constructor(zone) {
    super();
    this.zone = zone;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.initTimeout();
  }
  initTimeout() {
    if (!this.message?.sticky) {
      this.zone.runOutsideAngular(() => {
        this.timeout = setTimeout(() => {
          this.onClose.emit({
            index: this.index,
            message: this.message
          });
        }, this.message?.life || this.life || 3e3);
      });
    }
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onMouseEnter() {
    this.clearTimeout();
  }
  onMouseLeave() {
    this.initTimeout();
  }
  onCloseIconClick = (event) => {
    this.clearTimeout();
    this.onClose.emit({
      index: this.index,
      message: this.message
    });
    event.preventDefault();
  };
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  ngOnDestroy() {
    this.clearTimeout();
    super.ngOnDestroy();
  }
  static \u0275fac = function ToastItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastItem)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastItem,
    selectors: [["p-toastItem"]],
    viewQuery: function ToastItem_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      message: "message",
      index: [2, "index", "index", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      template: "template",
      headlessTemplate: "headlessTemplate",
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 15,
    consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "mouseenter", "mouseleave", "ngClass"], [3, "ngClass", "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["type", "button", "autofocus", "", 3, "click", "keydown.enter", "ariaLabel"]],
    template: function ToastItem_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onMouseEnter());
        })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onMouseLeave());
        });
        \u0275\u0275template(2, ToastItem_Conditional_2_Template, 1, 5, "ng-container")(3, ToastItem_Conditional_3_Template, 4, 10, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.message == null ? null : ctx.message.styleClass);
        \u0275\u0275property("ngClass", ctx.cx("message"))("@messageState", \u0275\u0275pureFunction1(13, _c2, \u0275\u0275pureFunction4(8, _c1, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)));
        \u0275\u0275attribute("id", ctx.message == null ? null : ctx.message.id)("data-pc-name", "toast")("data-pc-section", "root");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toastItem",
      standalone: true,
      imports: [CommonModule, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule],
      template: `
        <div
            #container
            [attr.id]="message?.id"
            [class]="message?.styleClass"
            [ngClass]="cx('message')"
            [@messageState]="{
                value: 'visible',
                params: {
                    showTransformParams: showTransformOptions,
                    hideTransformParams: hideTransformOptions,
                    showTransitionParams: showTransitionOptions,
                    hideTransitionParams: hideTransitionOptions
                }
            }"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-pc-name]="'toast'"
            [attr.data-pc-section]="'root'"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [ngClass]="cx('messageContent')" [class]="message?.contentStyleClass" [attr.data-pc-section]="'content'">
                    <ng-container *ngIf="!template">
                        <span *ngIf="message.icon" [ngClass]="cx('messageIcon')"></span>
                        <span [ngClass]="cx('messageIcon')" *ngIf="!message.icon" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'">
                            @switch (message.severity) {
                                @case ('success') {
                                    <CheckIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('info') {
                                    <InfoCircleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('error') {
                                    <TimesCircleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('warn') {
                                    <ExclamationTriangleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @default {
                                    <InfoCircleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                            }
                        </span>
                        <div [ngClass]="cx('messageText')" [attr.data-pc-section]="'text'">
                            <div [ngClass]="cx('summary')" [attr.data-pc-section]="'summary'">
                                {{ message.summary }}
                            </div>
                            <div [ngClass]="cx('detail')" [attr.data-pc-section]="'detail'">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button type="button" [attr.class]="cx('closeButton')" (click)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" [ariaLabel]="closeAriaLabel" [attr.data-pc-section]="'closebutton'" autofocus>
                                @if (message.closeIcon) {
                                    <span *ngIf="message.closeIcon" [ngClass]="cx('closeIcon')"></span>
                                } @else {
                                    <TimesIcon [ngClass]="cx('closeIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'closeicon'" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `,
      animations: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ToastStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    message: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    template: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
var Toast = class _Toast extends BaseComponent {
  /**
   * Key of the message in case message is targeted to a specific toast component.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * The default time to display messages for in milliseconds.
   * @group Props
   */
  life = 3e3;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Position of the toast in viewport.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    this.cd.markForCheck();
  }
  /**
   * It does not add the new message if there is already a toast displayed with the same content
   * @group Props
   */
  preventOpenDuplicates = false;
  /**
   * Displays only once a message with the same content.
   * @group Props
   */
  preventDuplicates = false;
  /**
   * Transform options of the show animation.
   * @group Props
   */
  showTransformOptions = "translateY(100%)";
  /**
   * Transform options of the hide animation.
   * @group Props
   */
  hideTransformOptions = "translateY(-100%)";
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = "250ms ease-in";
  /**
   * Object literal to define styles per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Callback to invoke when a message is closed.
   * @param {ToastCloseEvent} event - custom close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Custom template of message.
   * @group Templates
   */
  template;
  /**
   * Custom headless template.
   * @group Templates
   */
  headlessTemplate;
  containerViewChild;
  messageSubscription;
  clearSubscription;
  messages;
  messagesArchieve;
  _position = "top-right";
  messageService = inject(MessageService);
  _componentStyle = inject(ToastStyle);
  styleElement;
  id = uuid("pn_id_");
  templates;
  ngOnInit() {
    super.ngOnInit();
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m4) => this.canAdd(m4));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key === key) {
          this.messages = null;
        }
      } else {
        this.messages = null;
      }
      this.cd.markForCheck();
    });
  }
  _template;
  _headlessTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "message":
          this._template = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
        default:
          this._template = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
    }
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key === message.key;
    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }
    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) {
      return false;
    }
    return collection.find((m4) => {
      return m4.summary === message.summary && m4.detail == message.detail && m4.severity === message.severity;
    }) != null;
  }
  onMessageClose(event) {
    this.messages?.splice(event.index, 1);
    this.onClose.emit({
      message: event.message
    });
    this.cd.detectChanges();
  }
  onAnimationStart(event) {
    if (event.fromState === "void") {
      this.renderer.setAttribute(this.containerViewChild?.nativeElement, this.id, "");
      if (this.autoZIndex && this.containerViewChild?.nativeElement.style.zIndex === "") {
        zindexutils.set("modal", this.containerViewChild?.nativeElement, this.baseZIndex || this.config.zIndex.modal);
      }
    }
  }
  onAnimationEnd(event) {
    if (event.toState === "void") {
      if (this.autoZIndex && isEmpty(this.messages)) {
        zindexutils.clear(this.containerViewChild?.nativeElement);
      }
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = "";
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
        }
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.containerViewChild && this.autoZIndex) {
      zindexutils.clear(this.containerViewChild.nativeElement);
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.destroyStyle();
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Toast_BaseFactory;
    return function Toast_Factory(__ngFactoryType__) {
      return (\u0275Toast_BaseFactory || (\u0275Toast_BaseFactory = \u0275\u0275getInheritedFactory(_Toast)))(__ngFactoryType__ || _Toast);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toast,
    selectors: [["p-toast"]],
    contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c5, 5);
        \u0275\u0275contentQuery(dirIndex, _c6, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Toast_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      style: "style",
      styleClass: "styleClass",
      position: "position",
      preventOpenDuplicates: [2, "preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute],
      preventDuplicates: [2, "preventDuplicates", "preventDuplicates", booleanAttribute],
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      breakpoints: "breakpoints"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 7,
    consts: [["container", ""], [3, "ngClass", "ngStyle"], [3, "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose", 4, "ngFor", "ngForOf"], [3, "onClose", "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275template(2, Toast_p_toastItem_2_Template, 1, 10, "p-toastItem", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.cx("root"))("ngStyle", ctx.sx("root"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.messages);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgStyle, ToastItem, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      standalone: true,
      imports: [CommonModule, ToastItem, SharedModule],
      template: `
        <div #container [ngClass]="cx('root')" [ngStyle]="sx('root')" [style]="style" [class]="styleClass">
            <p-toastItem
                *ngFor="let msg of messages; let i = index"
                [message]="msg"
                [index]="i"
                [life]="life"
                (onClose)="onMessageClose($event)"
                [template]="template || _template"
                [headlessTemplate]="headlessTemplate || _headlessTemplate"
                @toastAnimation
                (@toastAnimation.start)="onAnimationStart($event)"
                (@toastAnimation.done)="onAnimationEnd($event)"
                [showTransformOptions]="showTransformOptions"
                [hideTransformOptions]="hideTransformOptions"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
            ></p-toastItem>
        </div>
    `,
      animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToastStyle]
    }]
  }], null, {
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    preventOpenDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: ["message"]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToastModule = class _ToastModule {
  static \u0275fac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastModule,
    imports: [Toast, SharedModule],
    exports: [Toast, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Toast, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [Toast, SharedModule],
      exports: [Toast, SharedModule]
    }]
  }], null, null);
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor(auth) {
    this.auth = auth;
  }
  ngOnInit() {
    this.auth.loadFromSession();
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(AuthStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["position", "top-right"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "p-toast", 0)(1, "router-outlet");
      }
    }, dependencies: [RouterOutlet, ToastModule, Toast], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet, ToastModule],
      template: `
    <p-toast position="top-right" />
    <router-outlet></router-outlet>
  `
    }]
  }], () => [{ type: AuthStateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 15 });
})();

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-6GRRUDNB.js").then((m4) => m4);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e58) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e58) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/@primeuix/themes/dist/aura/accordion/index.mjs
var o = {
  transitionDuration: "{transition.duration}"
};
var r = {
  borderWidth: "0 0 1px 0",
  borderColor: "{content.border.color}"
};
var t = {
  color: "{text.muted.color}",
  hoverColor: "{text.color}",
  activeColor: "{text.color}",
  activeHoverColor: "{text.color}",
  padding: "1.125rem",
  fontWeight: "600",
  borderRadius: "0",
  borderWidth: "0",
  borderColor: "{content.border.color}",
  background: "{content.background}",
  hoverBackground: "{content.background}",
  activeBackground: "{content.background}",
  activeHoverBackground: "{content.background}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "-1px",
    shadow: "{focus.ring.shadow}"
  },
  toggleIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{text.color}",
    activeHoverColor: "{text.color}"
  },
  first: {
    topBorderRadius: "{content.border.radius}",
    borderWidth: "0"
  },
  last: {
    bottomBorderRadius: "{content.border.radius}",
    activeBottomBorderRadius: "0"
  }
};
var e = {
  borderWidth: "0",
  borderColor: "{content.border.color}",
  background: "{content.background}",
  color: "{text.color}",
  padding: "0 1.125rem 1.125rem 1.125rem"
};
var c = {
  root: o,
  panel: r,
  header: t,
  content: e
};

// node_modules/@primeuix/themes/dist/aura/autocomplete/index.mjs
var o2 = {
  background: "{form.field.background}",
  disabledBackground: "{form.field.disabled.background}",
  filledBackground: "{form.field.filled.background}",
  filledHoverBackground: "{form.field.filled.hover.background}",
  filledFocusBackground: "{form.field.filled.focus.background}",
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.hover.border.color}",
  focusBorderColor: "{form.field.focus.border.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  color: "{form.field.color}",
  disabledColor: "{form.field.disabled.color}",
  placeholderColor: "{form.field.placeholder.color}",
  invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
  shadow: "{form.field.shadow}",
  paddingX: "{form.field.padding.x}",
  paddingY: "{form.field.padding.y}",
  borderRadius: "{form.field.border.radius}",
  focusRing: {
    width: "{form.field.focus.ring.width}",
    style: "{form.field.focus.ring.style}",
    color: "{form.field.focus.ring.color}",
    offset: "{form.field.focus.ring.offset}",
    shadow: "{form.field.focus.ring.shadow}"
  },
  transitionDuration: "{form.field.transition.duration}"
};
var r2 = {
  background: "{overlay.select.background}",
  borderColor: "{overlay.select.border.color}",
  borderRadius: "{overlay.select.border.radius}",
  color: "{overlay.select.color}",
  shadow: "{overlay.select.shadow}"
};
var d = {
  padding: "{list.padding}",
  gap: "{list.gap}"
};
var e2 = {
  focusBackground: "{list.option.focus.background}",
  selectedBackground: "{list.option.selected.background}",
  selectedFocusBackground: "{list.option.selected.focus.background}",
  color: "{list.option.color}",
  focusColor: "{list.option.focus.color}",
  selectedColor: "{list.option.selected.color}",
  selectedFocusColor: "{list.option.selected.focus.color}",
  padding: "{list.option.padding}",
  borderRadius: "{list.option.border.radius}"
};
var l = {
  background: "{list.option.group.background}",
  color: "{list.option.group.color}",
  fontWeight: "{list.option.group.font.weight}",
  padding: "{list.option.group.padding}"
};
var i = {
  width: "2.5rem",
  sm: {
    width: "2rem"
  },
  lg: {
    width: "3rem"
  },
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.border.color}",
  activeBorderColor: "{form.field.border.color}",
  borderRadius: "{form.field.border.radius}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var c2 = {
  borderRadius: "{border.radius.sm}"
};
var f = {
  padding: "{list.option.padding}"
};
var s = {
  light: {
    chip: {
      focusBackground: "{surface.200}",
      focusColor: "{surface.800}"
    },
    dropdown: {
      background: "{surface.100}",
      hoverBackground: "{surface.200}",
      activeBackground: "{surface.300}",
      color: "{surface.600}",
      hoverColor: "{surface.700}",
      activeColor: "{surface.800}"
    }
  },
  dark: {
    chip: {
      focusBackground: "{surface.700}",
      focusColor: "{surface.0}"
    },
    dropdown: {
      background: "{surface.800}",
      hoverBackground: "{surface.700}",
      activeBackground: "{surface.600}",
      color: "{surface.300}",
      hoverColor: "{surface.200}",
      activeColor: "{surface.100}"
    }
  }
};
var a = {
  root: o2,
  overlay: r2,
  list: d,
  option: e2,
  optionGroup: l,
  dropdown: i,
  chip: c2,
  emptyMessage: f,
  colorScheme: s
};

// node_modules/@primeuix/themes/dist/aura/avatar/index.mjs
var e3 = {
  width: "2rem",
  height: "2rem",
  fontSize: "1rem",
  background: "{content.border.color}",
  color: "{content.color}",
  borderRadius: "{content.border.radius}"
};
var r3 = {
  size: "1rem"
};
var o3 = {
  borderColor: "{content.background}",
  offset: "-0.75rem"
};
var t2 = {
  width: "3rem",
  height: "3rem",
  fontSize: "1.5rem",
  icon: {
    size: "1.5rem"
  },
  group: {
    offset: "-1rem"
  }
};
var i2 = {
  width: "4rem",
  height: "4rem",
  fontSize: "2rem",
  icon: {
    size: "2rem"
  },
  group: {
    offset: "-1.5rem"
  }
};
var n = {
  root: e3,
  icon: r3,
  group: o3,
  lg: t2,
  xl: i2
};

// node_modules/@primeuix/themes/dist/aura/badge/index.mjs
var r4 = {
  borderRadius: "{border.radius.md}",
  padding: "0 0.5rem",
  fontSize: "0.75rem",
  fontWeight: "700",
  minWidth: "1.5rem",
  height: "1.5rem"
};
var o4 = {
  size: "0.5rem"
};
var e4 = {
  fontSize: "0.625rem",
  minWidth: "1.25rem",
  height: "1.25rem"
};
var c3 = {
  fontSize: "0.875rem",
  minWidth: "1.75rem",
  height: "1.75rem"
};
var a2 = {
  fontSize: "1rem",
  minWidth: "2rem",
  height: "2rem"
};
var n2 = {
  light: {
    primary: {
      background: "{primary.color}",
      color: "{primary.contrast.color}"
    },
    secondary: {
      background: "{surface.100}",
      color: "{surface.600}"
    },
    success: {
      background: "{green.500}",
      color: "{surface.0}"
    },
    info: {
      background: "{sky.500}",
      color: "{surface.0}"
    },
    warn: {
      background: "{orange.500}",
      color: "{surface.0}"
    },
    danger: {
      background: "{red.500}",
      color: "{surface.0}"
    },
    contrast: {
      background: "{surface.950}",
      color: "{surface.0}"
    }
  },
  dark: {
    primary: {
      background: "{primary.color}",
      color: "{primary.contrast.color}"
    },
    secondary: {
      background: "{surface.800}",
      color: "{surface.300}"
    },
    success: {
      background: "{green.400}",
      color: "{green.950}"
    },
    info: {
      background: "{sky.400}",
      color: "{sky.950}"
    },
    warn: {
      background: "{orange.400}",
      color: "{orange.950}"
    },
    danger: {
      background: "{red.400}",
      color: "{red.950}"
    },
    contrast: {
      background: "{surface.0}",
      color: "{surface.950}"
    }
  }
};
var d2 = {
  root: r4,
  dot: o4,
  sm: e4,
  lg: c3,
  xl: a2,
  colorScheme: n2
};

// node_modules/@primeuix/themes/dist/aura/base/index.mjs
var r5 = {
  borderRadius: {
    none: "0",
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  },
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  }
};
var o5 = {
  transitionDuration: "0.2s",
  focusRing: {
    width: "1px",
    style: "solid",
    color: "{primary.color}",
    offset: "2px",
    shadow: "none"
  },
  disabledOpacity: "0.6",
  iconSize: "1rem",
  anchorGutter: "2px",
  primary: {
    50: "{emerald.50}",
    100: "{emerald.100}",
    200: "{emerald.200}",
    300: "{emerald.300}",
    400: "{emerald.400}",
    500: "{emerald.500}",
    600: "{emerald.600}",
    700: "{emerald.700}",
    800: "{emerald.800}",
    900: "{emerald.900}",
    950: "{emerald.950}"
  },
  formField: {
    paddingX: "0.75rem",
    paddingY: "0.5rem",
    sm: {
      fontSize: "0.875rem",
      paddingX: "0.625rem",
      paddingY: "0.375rem"
    },
    lg: {
      fontSize: "1.125rem",
      paddingX: "0.875rem",
      paddingY: "0.625rem"
    },
    borderRadius: "{border.radius.md}",
    focusRing: {
      width: "0",
      style: "none",
      color: "transparent",
      offset: "0",
      shadow: "none"
    },
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "0.25rem 0.25rem",
    gap: "2px",
    header: {
      padding: "0.5rem 1rem 0.25rem 1rem"
    },
    option: {
      padding: "0.5rem 0.75rem",
      borderRadius: "{border.radius.sm}"
    },
    optionGroup: {
      padding: "0.5rem 0.75rem",
      fontWeight: "600"
    }
  },
  content: {
    borderRadius: "{border.radius.md}"
  },
  mask: {
    transitionDuration: "0.3s"
  },
  navigation: {
    list: {
      padding: "0.25rem 0.25rem",
      gap: "2px"
    },
    item: {
      padding: "0.5rem 0.75rem",
      borderRadius: "{border.radius.sm}",
      gap: "0.5rem"
    },
    submenuLabel: {
      padding: "0.5rem 0.75rem",
      fontWeight: "600"
    },
    submenuIcon: {
      size: "0.875rem"
    }
  },
  overlay: {
    select: {
      borderRadius: "{border.radius.md}",
      shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
    },
    popover: {
      borderRadius: "{border.radius.md}",
      padding: "0.75rem",
      shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
    },
    modal: {
      borderRadius: "{border.radius.xl}",
      padding: "1.25rem",
      shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
    },
    navigation: {
      shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
    }
  },
  colorScheme: {
    light: {
      surface: {
        0: "#ffffff",
        50: "{slate.50}",
        100: "{slate.100}",
        200: "{slate.200}",
        300: "{slate.300}",
        400: "{slate.400}",
        500: "{slate.500}",
        600: "{slate.600}",
        700: "{slate.700}",
        800: "{slate.800}",
        900: "{slate.900}",
        950: "{slate.950}"
      },
      primary: {
        color: "{primary.500}",
        contrastColor: "#ffffff",
        hoverColor: "{primary.600}",
        activeColor: "{primary.700}"
      },
      highlight: {
        background: "{primary.50}",
        focusBackground: "{primary.100}",
        color: "{primary.700}",
        focusColor: "{primary.800}"
      },
      mask: {
        background: "rgba(0,0,0,0.4)",
        color: "{surface.200}"
      },
      formField: {
        background: "{surface.0}",
        disabledBackground: "{surface.200}",
        filledBackground: "{surface.50}",
        filledHoverBackground: "{surface.50}",
        filledFocusBackground: "{surface.50}",
        borderColor: "{surface.300}",
        hoverBorderColor: "{surface.400}",
        focusBorderColor: "{primary.color}",
        invalidBorderColor: "{red.400}",
        color: "{surface.700}",
        disabledColor: "{surface.500}",
        placeholderColor: "{surface.500}",
        invalidPlaceholderColor: "{red.600}",
        floatLabelColor: "{surface.500}",
        floatLabelFocusColor: "{primary.600}",
        floatLabelActiveColor: "{surface.500}",
        floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
        iconColor: "{surface.400}",
        shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
      },
      text: {
        color: "{surface.700}",
        hoverColor: "{surface.800}",
        mutedColor: "{surface.500}",
        hoverMutedColor: "{surface.600}"
      },
      content: {
        background: "{surface.0}",
        hoverBackground: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{text.color}",
        hoverColor: "{text.hover.color}"
      },
      overlay: {
        select: {
          background: "{surface.0}",
          borderColor: "{surface.200}",
          color: "{text.color}"
        },
        popover: {
          background: "{surface.0}",
          borderColor: "{surface.200}",
          color: "{text.color}"
        },
        modal: {
          background: "{surface.0}",
          borderColor: "{surface.200}",
          color: "{text.color}"
        }
      },
      list: {
        option: {
          focusBackground: "{surface.100}",
          selectedBackground: "{highlight.background}",
          selectedFocusBackground: "{highlight.focus.background}",
          color: "{text.color}",
          focusColor: "{text.hover.color}",
          selectedColor: "{highlight.color}",
          selectedFocusColor: "{highlight.focus.color}",
          icon: {
            color: "{surface.400}",
            focusColor: "{surface.500}"
          }
        },
        optionGroup: {
          background: "transparent",
          color: "{text.muted.color}"
        }
      },
      navigation: {
        item: {
          focusBackground: "{surface.100}",
          activeBackground: "{surface.100}",
          color: "{text.color}",
          focusColor: "{text.hover.color}",
          activeColor: "{text.hover.color}",
          icon: {
            color: "{surface.400}",
            focusColor: "{surface.500}",
            activeColor: "{surface.500}"
          }
        },
        submenuLabel: {
          background: "transparent",
          color: "{text.muted.color}"
        },
        submenuIcon: {
          color: "{surface.400}",
          focusColor: "{surface.500}",
          activeColor: "{surface.500}"
        }
      }
    },
    dark: {
      surface: {
        0: "#ffffff",
        50: "{zinc.50}",
        100: "{zinc.100}",
        200: "{zinc.200}",
        300: "{zinc.300}",
        400: "{zinc.400}",
        500: "{zinc.500}",
        600: "{zinc.600}",
        700: "{zinc.700}",
        800: "{zinc.800}",
        900: "{zinc.900}",
        950: "{zinc.950}"
      },
      primary: {
        color: "{primary.400}",
        contrastColor: "{surface.900}",
        hoverColor: "{primary.300}",
        activeColor: "{primary.200}"
      },
      highlight: {
        background: "color-mix(in srgb, {primary.400}, transparent 84%)",
        focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)",
        color: "rgba(255,255,255,.87)",
        focusColor: "rgba(255,255,255,.87)"
      },
      mask: {
        background: "rgba(0,0,0,0.6)",
        color: "{surface.200}"
      },
      formField: {
        background: "{surface.950}",
        disabledBackground: "{surface.700}",
        filledBackground: "{surface.800}",
        filledHoverBackground: "{surface.800}",
        filledFocusBackground: "{surface.800}",
        borderColor: "{surface.600}",
        hoverBorderColor: "{surface.500}",
        focusBorderColor: "{primary.color}",
        invalidBorderColor: "{red.300}",
        color: "{surface.0}",
        disabledColor: "{surface.400}",
        placeholderColor: "{surface.400}",
        invalidPlaceholderColor: "{red.400}",
        floatLabelColor: "{surface.400}",
        floatLabelFocusColor: "{primary.color}",
        floatLabelActiveColor: "{surface.400}",
        floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
        iconColor: "{surface.400}",
        shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
      },
      text: {
        color: "{surface.0}",
        hoverColor: "{surface.0}",
        mutedColor: "{surface.400}",
        hoverMutedColor: "{surface.300}"
      },
      content: {
        background: "{surface.900}",
        hoverBackground: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{text.color}",
        hoverColor: "{text.hover.color}"
      },
      overlay: {
        select: {
          background: "{surface.900}",
          borderColor: "{surface.700}",
          color: "{text.color}"
        },
        popover: {
          background: "{surface.900}",
          borderColor: "{surface.700}",
          color: "{text.color}"
        },
        modal: {
          background: "{surface.900}",
          borderColor: "{surface.700}",
          color: "{text.color}"
        }
      },
      list: {
        option: {
          focusBackground: "{surface.800}",
          selectedBackground: "{highlight.background}",
          selectedFocusBackground: "{highlight.focus.background}",
          color: "{text.color}",
          focusColor: "{text.hover.color}",
          selectedColor: "{highlight.color}",
          selectedFocusColor: "{highlight.focus.color}",
          icon: {
            color: "{surface.500}",
            focusColor: "{surface.400}"
          }
        },
        optionGroup: {
          background: "transparent",
          color: "{text.muted.color}"
        }
      },
      navigation: {
        item: {
          focusBackground: "{surface.800}",
          activeBackground: "{surface.800}",
          color: "{text.color}",
          focusColor: "{text.hover.color}",
          activeColor: "{text.hover.color}",
          icon: {
            color: "{surface.500}",
            focusColor: "{surface.400}",
            activeColor: "{surface.400}"
          }
        },
        submenuLabel: {
          background: "transparent",
          color: "{text.muted.color}"
        },
        submenuIcon: {
          color: "{surface.500}",
          focusColor: "{surface.400}",
          activeColor: "{surface.400}"
        }
      }
    }
  }
};
var e5 = {
  primitive: r5,
  semantic: o5
};

// node_modules/@primeuix/themes/dist/aura/blockui/index.mjs
var r6 = {
  borderRadius: "{content.border.radius}"
};
var o6 = {
  root: r6
};

// node_modules/@primeuix/themes/dist/aura/breadcrumb/index.mjs
var o7 = {
  padding: "1rem",
  background: "{content.background}",
  gap: "0.5rem",
  transitionDuration: "{transition.duration}"
};
var r7 = {
  color: "{text.muted.color}",
  hoverColor: "{text.color}",
  borderRadius: "{content.border.radius}",
  gap: "{navigation.item.gap}",
  icon: {
    color: "{navigation.item.icon.color}",
    hoverColor: "{navigation.item.icon.focus.color}"
  },
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var i3 = {
  color: "{navigation.item.icon.color}"
};
var t3 = {
  root: o7,
  item: r7,
  separator: i3
};

// node_modules/@primeuix/themes/dist/aura/button/index.mjs
var r8 = {
  borderRadius: "{form.field.border.radius}",
  roundedBorderRadius: "2rem",
  gap: "0.5rem",
  paddingX: "{form.field.padding.x}",
  paddingY: "{form.field.padding.y}",
  iconOnlyWidth: "2.5rem",
  sm: {
    fontSize: "{form.field.sm.font.size}",
    paddingX: "{form.field.sm.padding.x}",
    paddingY: "{form.field.sm.padding.y}",
    iconOnlyWidth: "2rem"
  },
  lg: {
    fontSize: "{form.field.lg.font.size}",
    paddingX: "{form.field.lg.padding.x}",
    paddingY: "{form.field.lg.padding.y}",
    iconOnlyWidth: "3rem"
  },
  label: {
    fontWeight: "500"
  },
  raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    offset: "{focus.ring.offset}"
  },
  badgeSize: "1rem",
  transitionDuration: "{form.field.transition.duration}"
};
var o8 = {
  light: {
    root: {
      primary: {
        background: "{primary.color}",
        hoverBackground: "{primary.hover.color}",
        activeBackground: "{primary.active.color}",
        borderColor: "{primary.color}",
        hoverBorderColor: "{primary.hover.color}",
        activeBorderColor: "{primary.active.color}",
        color: "{primary.contrast.color}",
        hoverColor: "{primary.contrast.color}",
        activeColor: "{primary.contrast.color}",
        focusRing: {
          color: "{primary.color}",
          shadow: "none"
        }
      },
      secondary: {
        background: "{surface.100}",
        hoverBackground: "{surface.200}",
        activeBackground: "{surface.300}",
        borderColor: "{surface.100}",
        hoverBorderColor: "{surface.200}",
        activeBorderColor: "{surface.300}",
        color: "{surface.600}",
        hoverColor: "{surface.700}",
        activeColor: "{surface.800}",
        focusRing: {
          color: "{surface.600}",
          shadow: "none"
        }
      },
      info: {
        background: "{sky.500}",
        hoverBackground: "{sky.600}",
        activeBackground: "{sky.700}",
        borderColor: "{sky.500}",
        hoverBorderColor: "{sky.600}",
        activeBorderColor: "{sky.700}",
        color: "#ffffff",
        hoverColor: "#ffffff",
        activeColor: "#ffffff",
        focusRing: {
          color: "{sky.500}",
          shadow: "none"
        }
      },
      success: {
        background: "{green.500}",
        hoverBackground: "{green.600}",
        activeBackground: "{green.700}",
        borderColor: "{green.500}",
        hoverBorderColor: "{green.600}",
        activeBorderColor: "{green.700}",
        color: "#ffffff",
        hoverColor: "#ffffff",
        activeColor: "#ffffff",
        focusRing: {
          color: "{green.500}",
          shadow: "none"
        }
      },
      warn: {
        background: "{orange.500}",
        hoverBackground: "{orange.600}",
        activeBackground: "{orange.700}",
        borderColor: "{orange.500}",
        hoverBorderColor: "{orange.600}",
        activeBorderColor: "{orange.700}",
        color: "#ffffff",
        hoverColor: "#ffffff",
        activeColor: "#ffffff",
        focusRing: {
          color: "{orange.500}",
          shadow: "none"
        }
      },
      help: {
        background: "{purple.500}",
        hoverBackground: "{purple.600}",
        activeBackground: "{purple.700}",
        borderColor: "{purple.500}",
        hoverBorderColor: "{purple.600}",
        activeBorderColor: "{purple.700}",
        color: "#ffffff",
        hoverColor: "#ffffff",
        activeColor: "#ffffff",
        focusRing: {
          color: "{purple.500}",
          shadow: "none"
        }
      },
      danger: {
        background: "{red.500}",
        hoverBackground: "{red.600}",
        activeBackground: "{red.700}",
        borderColor: "{red.500}",
        hoverBorderColor: "{red.600}",
        activeBorderColor: "{red.700}",
        color: "#ffffff",
        hoverColor: "#ffffff",
        activeColor: "#ffffff",
        focusRing: {
          color: "{red.500}",
          shadow: "none"
        }
      },
      contrast: {
        background: "{surface.950}",
        hoverBackground: "{surface.900}",
        activeBackground: "{surface.800}",
        borderColor: "{surface.950}",
        hoverBorderColor: "{surface.900}",
        activeBorderColor: "{surface.800}",
        color: "{surface.0}",
        hoverColor: "{surface.0}",
        activeColor: "{surface.0}",
        focusRing: {
          color: "{surface.950}",
          shadow: "none"
        }
      }
    },
    outlined: {
      primary: {
        hoverBackground: "{primary.50}",
        activeBackground: "{primary.100}",
        borderColor: "{primary.200}",
        color: "{primary.color}"
      },
      secondary: {
        hoverBackground: "{surface.50}",
        activeBackground: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.500}"
      },
      success: {
        hoverBackground: "{green.50}",
        activeBackground: "{green.100}",
        borderColor: "{green.200}",
        color: "{green.500}"
      },
      info: {
        hoverBackground: "{sky.50}",
        activeBackground: "{sky.100}",
        borderColor: "{sky.200}",
        color: "{sky.500}"
      },
      warn: {
        hoverBackground: "{orange.50}",
        activeBackground: "{orange.100}",
        borderColor: "{orange.200}",
        color: "{orange.500}"
      },
      help: {
        hoverBackground: "{purple.50}",
        activeBackground: "{purple.100}",
        borderColor: "{purple.200}",
        color: "{purple.500}"
      },
      danger: {
        hoverBackground: "{red.50}",
        activeBackground: "{red.100}",
        borderColor: "{red.200}",
        color: "{red.500}"
      },
      contrast: {
        hoverBackground: "{surface.50}",
        activeBackground: "{surface.100}",
        borderColor: "{surface.700}",
        color: "{surface.950}"
      },
      plain: {
        hoverBackground: "{surface.50}",
        activeBackground: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.700}"
      }
    },
    text: {
      primary: {
        hoverBackground: "{primary.50}",
        activeBackground: "{primary.100}",
        color: "{primary.color}"
      },
      secondary: {
        hoverBackground: "{surface.50}",
        activeBackground: "{surface.100}",
        color: "{surface.500}"
      },
      success: {
        hoverBackground: "{green.50}",
        activeBackground: "{green.100}",
        color: "{green.500}"
      },
      info: {
        hoverBackground: "{sky.50}",
        activeBackground: "{sky.100}",
        color: "{sky.500}"
      },
      warn: {
        hoverBackground: "{orange.50}",
        activeBackground: "{orange.100}",
        color: "{orange.500}"
      },
      help: {
        hoverBackground: "{purple.50}",
        activeBackground: "{purple.100}",
        color: "{purple.500}"
      },
      danger: {
        hoverBackground: "{red.50}",
        activeBackground: "{red.100}",
        color: "{red.500}"
      },
      contrast: {
        hoverBackground: "{surface.50}",
        activeBackground: "{surface.100}",
        color: "{surface.950}"
      },
      plain: {
        hoverBackground: "{surface.50}",
        activeBackground: "{surface.100}",
        color: "{surface.700}"
      }
    },
    link: {
      color: "{primary.color}",
      hoverColor: "{primary.color}",
      activeColor: "{primary.color}"
    }
  },
  dark: {
    root: {
      primary: {
        background: "{primary.color}",
        hoverBackground: "{primary.hover.color}",
        activeBackground: "{primary.active.color}",
        borderColor: "{primary.color}",
        hoverBorderColor: "{primary.hover.color}",
        activeBorderColor: "{primary.active.color}",
        color: "{primary.contrast.color}",
        hoverColor: "{primary.contrast.color}",
        activeColor: "{primary.contrast.color}",
        focusRing: {
          color: "{primary.color}",
          shadow: "none"
        }
      },
      secondary: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.600}",
        borderColor: "{surface.800}",
        hoverBorderColor: "{surface.700}",
        activeBorderColor: "{surface.600}",
        color: "{surface.300}",
        hoverColor: "{surface.200}",
        activeColor: "{surface.100}",
        focusRing: {
          color: "{surface.300}",
          shadow: "none"
        }
      },
      info: {
        background: "{sky.400}",
        hoverBackground: "{sky.300}",
        activeBackground: "{sky.200}",
        borderColor: "{sky.400}",
        hoverBorderColor: "{sky.300}",
        activeBorderColor: "{sky.200}",
        color: "{sky.950}",
        hoverColor: "{sky.950}",
        activeColor: "{sky.950}",
        focusRing: {
          color: "{sky.400}",
          shadow: "none"
        }
      },
      success: {
        background: "{green.400}",
        hoverBackground: "{green.300}",
        activeBackground: "{green.200}",
        borderColor: "{green.400}",
        hoverBorderColor: "{green.300}",
        activeBorderColor: "{green.200}",
        color: "{green.950}",
        hoverColor: "{green.950}",
        activeColor: "{green.950}",
        focusRing: {
          color: "{green.400}",
          shadow: "none"
        }
      },
      warn: {
        background: "{orange.400}",
        hoverBackground: "{orange.300}",
        activeBackground: "{orange.200}",
        borderColor: "{orange.400}",
        hoverBorderColor: "{orange.300}",
        activeBorderColor: "{orange.200}",
        color: "{orange.950}",
        hoverColor: "{orange.950}",
        activeColor: "{orange.950}",
        focusRing: {
          color: "{orange.400}",
          shadow: "none"
        }
      },
      help: {
        background: "{purple.400}",
        hoverBackground: "{purple.300}",
        activeBackground: "{purple.200}",
        borderColor: "{purple.400}",
        hoverBorderColor: "{purple.300}",
        activeBorderColor: "{purple.200}",
        color: "{purple.950}",
        hoverColor: "{purple.950}",
        activeColor: "{purple.950}",
        focusRing: {
          color: "{purple.400}",
          shadow: "none"
        }
      },
      danger: {
        background: "{red.400}",
        hoverBackground: "{red.300}",
        activeBackground: "{red.200}",
        borderColor: "{red.400}",
        hoverBorderColor: "{red.300}",
        activeBorderColor: "{red.200}",
        color: "{red.950}",
        hoverColor: "{red.950}",
        activeColor: "{red.950}",
        focusRing: {
          color: "{red.400}",
          shadow: "none"
        }
      },
      contrast: {
        background: "{surface.0}",
        hoverBackground: "{surface.100}",
        activeBackground: "{surface.200}",
        borderColor: "{surface.0}",
        hoverBorderColor: "{surface.100}",
        activeBorderColor: "{surface.200}",
        color: "{surface.950}",
        hoverColor: "{surface.950}",
        activeColor: "{surface.950}",
        focusRing: {
          color: "{surface.0}",
          shadow: "none"
        }
      }
    },
    outlined: {
      primary: {
        hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
        borderColor: "{primary.700}",
        color: "{primary.color}"
      },
      secondary: {
        hoverBackground: "rgba(255,255,255,0.04)",
        activeBackground: "rgba(255,255,255,0.16)",
        borderColor: "{surface.700}",
        color: "{surface.400}"
      },
      success: {
        hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
        borderColor: "{green.700}",
        color: "{green.400}"
      },
      info: {
        hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
        borderColor: "{sky.700}",
        color: "{sky.400}"
      },
      warn: {
        hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
        borderColor: "{orange.700}",
        color: "{orange.400}"
      },
      help: {
        hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
        borderColor: "{purple.700}",
        color: "{purple.400}"
      },
      danger: {
        hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
        borderColor: "{red.700}",
        color: "{red.400}"
      },
      contrast: {
        hoverBackground: "{surface.800}",
        activeBackground: "{surface.700}",
        borderColor: "{surface.500}",
        color: "{surface.0}"
      },
      plain: {
        hoverBackground: "{surface.800}",
        activeBackground: "{surface.700}",
        borderColor: "{surface.600}",
        color: "{surface.0}"
      }
    },
    text: {
      primary: {
        hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
        color: "{primary.color}"
      },
      secondary: {
        hoverBackground: "{surface.800}",
        activeBackground: "{surface.700}",
        color: "{surface.400}"
      },
      success: {
        hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
        color: "{green.400}"
      },
      info: {
        hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
        color: "{sky.400}"
      },
      warn: {
        hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
        color: "{orange.400}"
      },
      help: {
        hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
        color: "{purple.400}"
      },
      danger: {
        hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
        activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
        color: "{red.400}"
      },
      contrast: {
        hoverBackground: "{surface.800}",
        activeBackground: "{surface.700}",
        color: "{surface.0}"
      },
      plain: {
        hoverBackground: "{surface.800}",
        activeBackground: "{surface.700}",
        color: "{surface.0}"
      }
    },
    link: {
      color: "{primary.color}",
      hoverColor: "{primary.color}",
      activeColor: "{primary.color}"
    }
  }
};
var e6 = {
  root: r8,
  colorScheme: o8
};

// node_modules/@primeuix/themes/dist/aura/card/index.mjs
var o9 = {
  background: "{content.background}",
  borderRadius: "{border.radius.xl}",
  color: "{content.color}",
  shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
};
var r9 = {
  padding: "1.25rem",
  gap: "0.5rem"
};
var t4 = {
  gap: "0.5rem"
};
var e7 = {
  fontSize: "1.25rem",
  fontWeight: "500"
};
var a3 = {
  color: "{text.muted.color}"
};
var d3 = {
  root: o9,
  body: r9,
  caption: t4,
  title: e7,
  subtitle: a3
};

// node_modules/@primeuix/themes/dist/aura/carousel/index.mjs
var r10 = {
  transitionDuration: "{transition.duration}"
};
var o10 = {
  gap: "0.25rem"
};
var a4 = {
  padding: "1rem",
  gap: "0.5rem"
};
var i4 = {
  width: "2rem",
  height: "0.5rem",
  borderRadius: "{content.border.radius}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var c4 = {
  light: {
    indicator: {
      background: "{surface.200}",
      hoverBackground: "{surface.300}",
      activeBackground: "{primary.color}"
    }
  },
  dark: {
    indicator: {
      background: "{surface.700}",
      hoverBackground: "{surface.600}",
      activeBackground: "{primary.color}"
    }
  }
};
var t5 = {
  root: r10,
  content: o10,
  indicatorList: a4,
  indicator: i4,
  colorScheme: c4
};

// node_modules/@primeuix/themes/dist/aura/cascadeselect/index.mjs
var o11 = {
  background: "{form.field.background}",
  disabledBackground: "{form.field.disabled.background}",
  filledBackground: "{form.field.filled.background}",
  filledHoverBackground: "{form.field.filled.hover.background}",
  filledFocusBackground: "{form.field.filled.focus.background}",
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.hover.border.color}",
  focusBorderColor: "{form.field.focus.border.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  color: "{form.field.color}",
  disabledColor: "{form.field.disabled.color}",
  placeholderColor: "{form.field.placeholder.color}",
  invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
  shadow: "{form.field.shadow}",
  paddingX: "{form.field.padding.x}",
  paddingY: "{form.field.padding.y}",
  borderRadius: "{form.field.border.radius}",
  focusRing: {
    width: "{form.field.focus.ring.width}",
    style: "{form.field.focus.ring.style}",
    color: "{form.field.focus.ring.color}",
    offset: "{form.field.focus.ring.offset}",
    shadow: "{form.field.focus.ring.shadow}"
  },
  transitionDuration: "{form.field.transition.duration}",
  sm: {
    fontSize: "{form.field.sm.font.size}",
    paddingX: "{form.field.sm.padding.x}",
    paddingY: "{form.field.sm.padding.y}"
  },
  lg: {
    fontSize: "{form.field.lg.font.size}",
    paddingX: "{form.field.lg.padding.x}",
    paddingY: "{form.field.lg.padding.y}"
  }
};
var r11 = {
  width: "2.5rem",
  color: "{form.field.icon.color}"
};
var d4 = {
  background: "{overlay.select.background}",
  borderColor: "{overlay.select.border.color}",
  borderRadius: "{overlay.select.border.radius}",
  color: "{overlay.select.color}",
  shadow: "{overlay.select.shadow}"
};
var l2 = {
  padding: "{list.padding}",
  gap: "{list.gap}",
  mobileIndent: "1rem"
};
var e8 = {
  focusBackground: "{list.option.focus.background}",
  selectedBackground: "{list.option.selected.background}",
  selectedFocusBackground: "{list.option.selected.focus.background}",
  color: "{list.option.color}",
  focusColor: "{list.option.focus.color}",
  selectedColor: "{list.option.selected.color}",
  selectedFocusColor: "{list.option.selected.focus.color}",
  padding: "{list.option.padding}",
  borderRadius: "{list.option.border.radius}",
  icon: {
    color: "{list.option.icon.color}",
    focusColor: "{list.option.icon.focus.color}",
    size: "0.875rem"
  }
};
var i5 = {
  color: "{form.field.icon.color}"
};
var f2 = {
  root: o11,
  dropdown: r11,
  overlay: d4,
  list: l2,
  option: e8,
  clearIcon: i5
};

// node_modules/@primeuix/themes/dist/aura/checkbox/index.mjs
var r12 = {
  borderRadius: "{border.radius.sm}",
  width: "1.25rem",
  height: "1.25rem",
  background: "{form.field.background}",
  checkedBackground: "{primary.color}",
  checkedHoverBackground: "{primary.hover.color}",
  disabledBackground: "{form.field.disabled.background}",
  filledBackground: "{form.field.filled.background}",
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.hover.border.color}",
  focusBorderColor: "{form.field.border.color}",
  checkedBorderColor: "{primary.color}",
  checkedHoverBorderColor: "{primary.hover.color}",
  checkedFocusBorderColor: "{primary.color}",
  checkedDisabledBorderColor: "{form.field.border.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  shadow: "{form.field.shadow}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  },
  transitionDuration: "{form.field.transition.duration}",
  sm: {
    width: "1rem",
    height: "1rem"
  },
  lg: {
    width: "1.5rem",
    height: "1.5rem"
  }
};
var o12 = {
  size: "0.875rem",
  color: "{form.field.color}",
  checkedColor: "{primary.contrast.color}",
  checkedHoverColor: "{primary.contrast.color}",
  disabledColor: "{form.field.disabled.color}",
  sm: {
    size: "0.75rem"
  },
  lg: {
    size: "1rem"
  }
};
var e9 = {
  root: r12,
  icon: o12
};

// node_modules/@primeuix/themes/dist/aura/chip/index.mjs
var o13 = {
  borderRadius: "16px",
  paddingX: "0.75rem",
  paddingY: "0.5rem",
  gap: "0.5rem",
  transitionDuration: "{transition.duration}"
};
var r13 = {
  width: "2rem",
  height: "2rem"
};
var e10 = {
  size: "1rem"
};
var c5 = {
  size: "1rem",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{form.field.focus.ring.shadow}"
  }
};
var i6 = {
  light: {
    root: {
      background: "{surface.100}",
      color: "{surface.800}"
    },
    icon: {
      color: "{surface.800}"
    },
    removeIcon: {
      color: "{surface.800}"
    }
  },
  dark: {
    root: {
      background: "{surface.800}",
      color: "{surface.0}"
    },
    icon: {
      color: "{surface.0}"
    },
    removeIcon: {
      color: "{surface.0}"
    }
  }
};
var s2 = {
  root: o13,
  image: r13,
  icon: e10,
  removeIcon: c5,
  colorScheme: i6
};

// node_modules/@primeuix/themes/dist/aura/colorpicker/index.mjs
var r14 = {
  transitionDuration: "{transition.duration}"
};
var o14 = {
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: "{form.field.border.radius}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var e11 = {
  shadow: "{overlay.popover.shadow}",
  borderRadius: "{overlay.popover.borderRadius}"
};
var a5 = {
  light: {
    panel: {
      background: "{surface.800}",
      borderColor: "{surface.900}"
    },
    handle: {
      color: "{surface.0}"
    }
  },
  dark: {
    panel: {
      background: "{surface.900}",
      borderColor: "{surface.700}"
    },
    handle: {
      color: "{surface.0}"
    }
  }
};
var s3 = {
  root: r14,
  preview: o14,
  panel: e11,
  colorScheme: a5
};

// node_modules/@primeuix/themes/dist/aura/confirmdialog/index.mjs
var o15 = {
  size: "2rem",
  color: "{overlay.modal.color}"
};
var e12 = {
  gap: "1rem"
};
var r15 = {
  icon: o15,
  content: e12
};

// node_modules/@primeuix/themes/dist/aura/confirmpopup/index.mjs
var o16 = {
  background: "{overlay.popover.background}",
  borderColor: "{overlay.popover.border.color}",
  color: "{overlay.popover.color}",
  borderRadius: "{overlay.popover.border.radius}",
  shadow: "{overlay.popover.shadow}",
  gutter: "10px",
  arrowOffset: "1.25rem"
};
var r16 = {
  padding: "{overlay.popover.padding}",
  gap: "1rem"
};
var e13 = {
  size: "1.5rem",
  color: "{overlay.popover.color}"
};
var p = {
  gap: "0.5rem",
  padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
};
var a6 = {
  root: o16,
  content: r16,
  icon: e13,
  footer: p
};

// node_modules/@primeuix/themes/dist/aura/contextmenu/index.mjs
var o17 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  color: "{content.color}",
  borderRadius: "{content.border.radius}",
  shadow: "{overlay.navigation.shadow}",
  transitionDuration: "{transition.duration}"
};
var i7 = {
  padding: "{navigation.list.padding}",
  gap: "{navigation.list.gap}"
};
var n3 = {
  focusBackground: "{navigation.item.focus.background}",
  activeBackground: "{navigation.item.active.background}",
  color: "{navigation.item.color}",
  focusColor: "{navigation.item.focus.color}",
  activeColor: "{navigation.item.active.color}",
  padding: "{navigation.item.padding}",
  borderRadius: "{navigation.item.border.radius}",
  gap: "{navigation.item.gap}",
  icon: {
    color: "{navigation.item.icon.color}",
    focusColor: "{navigation.item.icon.focus.color}",
    activeColor: "{navigation.item.icon.active.color}"
  }
};
var a7 = {
  mobileIndent: "1rem"
};
var t6 = {
  size: "{navigation.submenu.icon.size}",
  color: "{navigation.submenu.icon.color}",
  focusColor: "{navigation.submenu.icon.focus.color}",
  activeColor: "{navigation.submenu.icon.active.color}"
};
var r17 = {
  borderColor: "{content.border.color}"
};
var c6 = {
  root: o17,
  list: i7,
  item: n3,
  submenu: a7,
  submenuIcon: t6,
  separator: r17
};

// node_modules/@primeuix/themes/dist/aura/datatable/index.mjs
var o18 = {
  transitionDuration: "{transition.duration}"
};
var r18 = {
  background: "{content.background}",
  borderColor: "{datatable.border.color}",
  color: "{content.color}",
  borderWidth: "0 0 1px 0",
  padding: "0.75rem 1rem",
  sm: {
    padding: "0.375rem 0.5rem"
  },
  lg: {
    padding: "1rem 1.25rem"
  }
};
var e14 = {
  background: "{content.background}",
  hoverBackground: "{content.hover.background}",
  selectedBackground: "{highlight.background}",
  borderColor: "{datatable.border.color}",
  color: "{content.color}",
  hoverColor: "{content.hover.color}",
  selectedColor: "{highlight.color}",
  gap: "0.5rem",
  padding: "0.75rem 1rem",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "-1px",
    shadow: "{focus.ring.shadow}"
  },
  sm: {
    padding: "0.375rem 0.5rem"
  },
  lg: {
    padding: "1rem 1.25rem"
  }
};
var d5 = {
  fontWeight: "600"
};
var t7 = {
  background: "{content.background}",
  hoverBackground: "{content.hover.background}",
  selectedBackground: "{highlight.background}",
  color: "{content.color}",
  hoverColor: "{content.hover.color}",
  selectedColor: "{highlight.color}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "-1px",
    shadow: "{focus.ring.shadow}"
  }
};
var l3 = {
  borderColor: "{datatable.border.color}",
  padding: "0.75rem 1rem",
  sm: {
    padding: "0.375rem 0.5rem"
  },
  lg: {
    padding: "1rem 1.25rem"
  }
};
var c7 = {
  background: "{content.background}",
  borderColor: "{datatable.border.color}",
  color: "{content.color}",
  padding: "0.75rem 1rem",
  sm: {
    padding: "0.375rem 0.5rem"
  },
  lg: {
    padding: "1rem 1.25rem"
  }
};
var a8 = {
  fontWeight: "600"
};
var n4 = {
  background: "{content.background}",
  borderColor: "{datatable.border.color}",
  color: "{content.color}",
  borderWidth: "0 0 1px 0",
  padding: "0.75rem 1rem",
  sm: {
    padding: "0.375rem 0.5rem"
  },
  lg: {
    padding: "1rem 1.25rem"
  }
};
var i8 = {
  color: "{primary.color}"
};
var s4 = {
  width: "0.5rem"
};
var g = {
  width: "1px",
  color: "{primary.color}"
};
var u = {
  color: "{text.muted.color}",
  hoverColor: "{text.hover.muted.color}",
  size: "0.875rem"
};
var b = {
  size: "2rem"
};
var p2 = {
  hoverBackground: "{content.hover.background}",
  selectedHoverBackground: "{content.background}",
  color: "{text.muted.color}",
  hoverColor: "{text.color}",
  selectedHoverColor: "{primary.color}",
  size: "1.75rem",
  borderRadius: "50%",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var m = {
  inlineGap: "0.5rem",
  overlaySelect: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  overlayPopover: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    borderRadius: "{overlay.popover.border.radius}",
    color: "{overlay.popover.color}",
    shadow: "{overlay.popover.shadow}",
    padding: "{overlay.popover.padding}",
    gap: "0.5rem"
  },
  rule: {
    borderColor: "{content.border.color}"
  },
  constraintList: {
    padding: "{list.padding}",
    gap: "{list.gap}"
  },
  constraint: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    separator: {
      borderColor: "{content.border.color}"
    },
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  }
};
var h = {
  borderColor: "{datatable.border.color}",
  borderWidth: "0 0 1px 0"
};
var k = {
  borderColor: "{datatable.border.color}",
  borderWidth: "0 0 1px 0"
};
var f3 = {
  light: {
    root: {
      borderColor: "{content.border.color}"
    },
    row: {
      stripedBackground: "{surface.50}"
    },
    bodyCell: {
      selectedBorderColor: "{primary.100}"
    }
  },
  dark: {
    root: {
      borderColor: "{surface.800}"
    },
    row: {
      stripedBackground: "{surface.950}"
    },
    bodyCell: {
      selectedBorderColor: "{primary.900}"
    }
  }
};
var css = "\n    .p-datatable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var v = {
  root: o18,
  header: r18,
  headerCell: e14,
  columnTitle: d5,
  row: t7,
  bodyCell: l3,
  footerCell: c7,
  columnFooter: a8,
  footer: n4,
  dropPoint: i8,
  columnResizer: s4,
  resizeIndicator: g,
  sortIcon: u,
  loadingIcon: b,
  rowToggleButton: p2,
  filter: m,
  paginatorTop: h,
  paginatorBottom: k,
  colorScheme: f3,
  css
};

// node_modules/@primeuix/themes/dist/aura/dataview/index.mjs
var o19 = {
  borderColor: "transparent",
  borderWidth: "0",
  borderRadius: "0",
  padding: "0"
};
var r19 = {
  background: "{content.background}",
  color: "{content.color}",
  borderColor: "{content.border.color}",
  borderWidth: "0 0 1px 0",
  padding: "0.75rem 1rem",
  borderRadius: "0"
};
var d6 = {
  background: "{content.background}",
  color: "{content.color}",
  borderColor: "transparent",
  borderWidth: "0",
  padding: "0",
  borderRadius: "0"
};
var e15 = {
  background: "{content.background}",
  color: "{content.color}",
  borderColor: "{content.border.color}",
  borderWidth: "1px 0 0 0",
  padding: "0.75rem 1rem",
  borderRadius: "0"
};
var t8 = {
  borderColor: "{content.border.color}",
  borderWidth: "0 0 1px 0"
};
var n5 = {
  borderColor: "{content.border.color}",
  borderWidth: "1px 0 0 0"
};
var c8 = {
  root: o19,
  header: r19,
  content: d6,
  footer: e15,
  paginatorTop: t8,
  paginatorBottom: n5
};

// node_modules/@primeuix/themes/dist/aura/datepicker/index.mjs
var o20 = {
  transitionDuration: "{transition.duration}"
};
var r20 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  color: "{content.color}",
  borderRadius: "{content.border.radius}",
  shadow: "{overlay.popover.shadow}",
  padding: "{overlay.popover.padding}"
};
var e16 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  color: "{content.color}",
  padding: "0 0 0.5rem 0"
};
var c9 = {
  gap: "0.5rem",
  fontWeight: "500"
};
var d7 = {
  width: "2.5rem",
  sm: {
    width: "2rem"
  },
  lg: {
    width: "3rem"
  },
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.border.color}",
  activeBorderColor: "{form.field.border.color}",
  borderRadius: "{form.field.border.radius}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var n6 = {
  color: "{form.field.icon.color}"
};
var t9 = {
  hoverBackground: "{content.hover.background}",
  color: "{content.color}",
  hoverColor: "{content.hover.color}",
  padding: "0.25rem 0.5rem",
  borderRadius: "{content.border.radius}"
};
var a9 = {
  hoverBackground: "{content.hover.background}",
  color: "{content.color}",
  hoverColor: "{content.hover.color}",
  padding: "0.25rem 0.5rem",
  borderRadius: "{content.border.radius}"
};
var i9 = {
  borderColor: "{content.border.color}",
  gap: "{overlay.popover.padding}"
};
var l4 = {
  margin: "0.5rem 0 0 0"
};
var u2 = {
  padding: "0.25rem",
  fontWeight: "500",
  color: "{content.color}"
};
var s5 = {
  hoverBackground: "{content.hover.background}",
  selectedBackground: "{primary.color}",
  rangeSelectedBackground: "{highlight.background}",
  color: "{content.color}",
  hoverColor: "{content.hover.color}",
  selectedColor: "{primary.contrast.color}",
  rangeSelectedColor: "{highlight.color}",
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
  padding: "0.25rem",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var g2 = {
  margin: "0.5rem 0 0 0"
};
var f4 = {
  padding: "0.375rem",
  borderRadius: "{content.border.radius}"
};
var h2 = {
  margin: "0.5rem 0 0 0"
};
var b2 = {
  padding: "0.375rem",
  borderRadius: "{content.border.radius}"
};
var m2 = {
  padding: "0.5rem 0 0 0",
  borderColor: "{content.border.color}"
};
var p3 = {
  padding: "0.5rem 0 0 0",
  borderColor: "{content.border.color}",
  gap: "0.5rem",
  buttonGap: "0.25rem"
};
var v2 = {
  light: {
    dropdown: {
      background: "{surface.100}",
      hoverBackground: "{surface.200}",
      activeBackground: "{surface.300}",
      color: "{surface.600}",
      hoverColor: "{surface.700}",
      activeColor: "{surface.800}"
    },
    today: {
      background: "{surface.200}",
      color: "{surface.900}"
    }
  },
  dark: {
    dropdown: {
      background: "{surface.800}",
      hoverBackground: "{surface.700}",
      activeBackground: "{surface.600}",
      color: "{surface.300}",
      hoverColor: "{surface.200}",
      activeColor: "{surface.100}"
    },
    today: {
      background: "{surface.700}",
      color: "{surface.0}"
    }
  }
};
var k2 = {
  root: o20,
  panel: r20,
  header: e16,
  title: c9,
  dropdown: d7,
  inputIcon: n6,
  selectMonth: t9,
  selectYear: a9,
  group: i9,
  dayView: l4,
  weekDay: u2,
  date: s5,
  monthView: g2,
  month: f4,
  yearView: h2,
  year: b2,
  buttonbar: m2,
  timePicker: p3,
  colorScheme: v2
};

// node_modules/@primeuix/themes/dist/aura/dialog/index.mjs
var o21 = {
  background: "{overlay.modal.background}",
  borderColor: "{overlay.modal.border.color}",
  color: "{overlay.modal.color}",
  borderRadius: "{overlay.modal.border.radius}",
  shadow: "{overlay.modal.shadow}"
};
var a10 = {
  padding: "{overlay.modal.padding}",
  gap: "0.5rem"
};
var d8 = {
  fontSize: "1.25rem",
  fontWeight: "600"
};
var r21 = {
  padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
};
var l5 = {
  padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
  gap: "0.5rem"
};
var e17 = {
  root: o21,
  header: a10,
  title: d8,
  content: r21,
  footer: l5
};

// node_modules/@primeuix/themes/dist/aura/divider/index.mjs
var r22 = {
  borderColor: "{content.border.color}"
};
var o22 = {
  background: "{content.background}",
  color: "{text.color}"
};
var n7 = {
  margin: "1rem 0",
  padding: "0 1rem",
  content: {
    padding: "0 0.5rem"
  }
};
var e18 = {
  margin: "0 1rem",
  padding: "0.5rem 0",
  content: {
    padding: "0.5rem 0"
  }
};
var t10 = {
  root: r22,
  content: o22,
  horizontal: n7,
  vertical: e18
};

// node_modules/@primeuix/themes/dist/aura/dock/index.mjs
var r23 = {
  background: "rgba(255, 255, 255, 0.1)",
  borderColor: "rgba(255, 255, 255, 0.2)",
  padding: "0.5rem",
  borderRadius: "{border.radius.xl}"
};
var o23 = {
  borderRadius: "{content.border.radius}",
  padding: "0.5rem",
  size: "3rem",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var d9 = {
  root: r23,
  item: o23
};

// node_modules/@primeuix/themes/dist/aura/drawer/index.mjs
var o24 = {
  background: "{overlay.modal.background}",
  borderColor: "{overlay.modal.border.color}",
  color: "{overlay.modal.color}",
  shadow: "{overlay.modal.shadow}"
};
var a11 = {
  padding: "{overlay.modal.padding}"
};
var d10 = {
  fontSize: "1.5rem",
  fontWeight: "600"
};
var r24 = {
  padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
};
var l6 = {
  padding: "{overlay.modal.padding}"
};
var e19 = {
  root: o24,
  header: a11,
  title: d10,
  content: r24,
  footer: l6
};

// node_modules/@primeuix/themes/dist/aura/editor/index.mjs
var o25 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  borderRadius: "{content.border.radius}"
};
var r25 = {
  color: "{text.muted.color}",
  hoverColor: "{text.color}",
  activeColor: "{primary.color}"
};
var e20 = {
  background: "{overlay.select.background}",
  borderColor: "{overlay.select.border.color}",
  borderRadius: "{overlay.select.border.radius}",
  color: "{overlay.select.color}",
  shadow: "{overlay.select.shadow}",
  padding: "{list.padding}"
};
var t11 = {
  focusBackground: "{list.option.focus.background}",
  color: "{list.option.color}",
  focusColor: "{list.option.focus.color}",
  padding: "{list.option.padding}",
  borderRadius: "{list.option.border.radius}"
};
var d11 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  color: "{content.color}",
  borderRadius: "{content.border.radius}"
};
var l7 = {
  toolbar: o25,
  toolbarItem: r25,
  overlay: e20,
  overlayOption: t11,
  content: d11
};

// node_modules/@primeuix/themes/dist/aura/fieldset/index.mjs
var o26 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  borderRadius: "{content.border.radius}",
  color: "{content.color}",
  padding: "0 1.125rem 1.125rem 1.125rem",
  transitionDuration: "{transition.duration}"
};
var r26 = {
  background: "{content.background}",
  hoverBackground: "{content.hover.background}",
  color: "{content.color}",
  hoverColor: "{content.hover.color}",
  borderRadius: "{content.border.radius}",
  borderWidth: "1px",
  borderColor: "transparent",
  padding: "0.5rem 0.75rem",
  gap: "0.5rem",
  fontWeight: "600",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var t12 = {
  color: "{text.muted.color}",
  hoverColor: "{text.hover.muted.color}"
};
var n8 = {
  padding: "0"
};
var e21 = {
  root: o26,
  legend: r26,
  toggleIcon: t12,
  content: n8
};

// node_modules/@primeuix/themes/dist/aura/fileupload/index.mjs
var r27 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  color: "{content.color}",
  borderRadius: "{content.border.radius}",
  transitionDuration: "{transition.duration}"
};
var o27 = {
  background: "transparent",
  color: "{text.color}",
  padding: "1.125rem",
  borderColor: "unset",
  borderWidth: "0",
  borderRadius: "0",
  gap: "0.5rem"
};
var e22 = {
  highlightBorderColor: "{primary.color}",
  padding: "0 1.125rem 1.125rem 1.125rem",
  gap: "1rem"
};
var t13 = {
  padding: "1rem",
  gap: "1rem",
  borderColor: "{content.border.color}",
  info: {
    gap: "0.5rem"
  }
};
var a12 = {
  gap: "0.5rem"
};
var n9 = {
  height: "0.25rem"
};
var d12 = {
  gap: "0.5rem"
};
var i10 = {
  root: r27,
  header: o27,
  content: e22,
  file: t13,
  fileList: a12,
  progressbar: n9,
  basic: d12
};

// node_modules/@primeuix/themes/dist/aura/floatlabel/index.mjs
var o28 = {
  color: "{form.field.float.label.color}",
  focusColor: "{form.field.float.label.focus.color}",
  activeColor: "{form.field.float.label.active.color}",
  invalidColor: "{form.field.float.label.invalid.color}",
  transitionDuration: "0.2s",
  positionX: "{form.field.padding.x}",
  positionY: "{form.field.padding.y}",
  fontWeight: "500",
  active: {
    fontSize: "0.75rem",
    fontWeight: "400"
  }
};
var i11 = {
  active: {
    top: "-1.25rem"
  }
};
var r28 = {
  input: {
    paddingTop: "1.5rem",
    paddingBottom: "{form.field.padding.y}"
  },
  active: {
    top: "{form.field.padding.y}"
  }
};
var a13 = {
  borderRadius: "{border.radius.xs}",
  active: {
    background: "{form.field.background}",
    padding: "0 0.125rem"
  }
};
var d13 = {
  root: o28,
  over: i11,
  in: r28,
  on: a13
};

// node_modules/@primeuix/themes/dist/aura/galleria/index.mjs
var o29 = {
  borderWidth: "1px",
  borderColor: "{content.border.color}",
  borderRadius: "{content.border.radius}",
  transitionDuration: "{transition.duration}"
};
var r29 = {
  background: "rgba(255, 255, 255, 0.1)",
  hoverBackground: "rgba(255, 255, 255, 0.2)",
  color: "{surface.100}",
  hoverColor: "{surface.0}",
  size: "3rem",
  gutter: "0.5rem",
  prev: {
    borderRadius: "50%"
  },
  next: {
    borderRadius: "50%"
  },
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var e23 = {
  size: "1.5rem"
};
var t14 = {
  background: "{content.background}",
  padding: "1rem 0.25rem"
};
var c10 = {
  size: "2rem",
  borderRadius: "{content.border.radius}",
  gutter: "0.5rem",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var n10 = {
  size: "1rem"
};
var a14 = {
  background: "rgba(0, 0, 0, 0.5)",
  color: "{surface.100}",
  padding: "1rem"
};
var s6 = {
  gap: "0.5rem",
  padding: "1rem"
};
var u3 = {
  width: "1rem",
  height: "1rem",
  activeBackground: "{primary.color}",
  borderRadius: "50%",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var i12 = {
  background: "rgba(0, 0, 0, 0.5)"
};
var d14 = {
  background: "rgba(255, 255, 255, 0.4)",
  hoverBackground: "rgba(255, 255, 255, 0.6)",
  activeBackground: "rgba(255, 255, 255, 0.9)"
};
var g3 = {
  size: "3rem",
  gutter: "0.5rem",
  background: "rgba(255, 255, 255, 0.1)",
  hoverBackground: "rgba(255, 255, 255, 0.2)",
  color: "{surface.50}",
  hoverColor: "{surface.0}",
  borderRadius: "50%",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var f5 = {
  size: "1.5rem"
};
var h3 = {
  light: {
    thumbnailNavButton: {
      hoverBackground: "{surface.100}",
      color: "{surface.600}",
      hoverColor: "{surface.700}"
    },
    indicatorButton: {
      background: "{surface.200}",
      hoverBackground: "{surface.300}"
    }
  },
  dark: {
    thumbnailNavButton: {
      hoverBackground: "{surface.700}",
      color: "{surface.400}",
      hoverColor: "{surface.0}"
    },
    indicatorButton: {
      background: "{surface.700}",
      hoverBackground: "{surface.600}"
    }
  }
};
var l8 = {
  root: o29,
  navButton: r29,
  navIcon: e23,
  thumbnailsContent: t14,
  thumbnailNavButton: c10,
  thumbnailNavButtonIcon: n10,
  caption: a14,
  indicatorList: s6,
  indicatorButton: u3,
  insetIndicatorList: i12,
  insetIndicatorButton: d14,
  closeButton: g3,
  closeButtonIcon: f5,
  colorScheme: h3
};

// node_modules/@primeuix/themes/dist/aura/iconfield/index.mjs
var o30 = {
  color: "{form.field.icon.color}"
};
var r30 = {
  icon: o30
};

// node_modules/@primeuix/themes/dist/aura/iftalabel/index.mjs
var o31 = {
  color: "{form.field.float.label.color}",
  focusColor: "{form.field.float.label.focus.color}",
  invalidColor: "{form.field.float.label.invalid.color}",
  transitionDuration: "0.2s",
  positionX: "{form.field.padding.x}",
  top: "{form.field.padding.y}",
  fontSize: "0.75rem",
  fontWeight: "400"
};
var l9 = {
  paddingTop: "1.5rem",
  paddingBottom: "{form.field.padding.y}"
};
var i13 = {
  root: o31,
  input: l9
};

// node_modules/@primeuix/themes/dist/aura/image/index.mjs
var o32 = {
  transitionDuration: "{transition.duration}"
};
var r31 = {
  icon: {
    size: "1.5rem"
  },
  mask: {
    background: "{mask.background}",
    color: "{mask.color}"
  }
};
var a15 = {
  position: {
    left: "auto",
    right: "1rem",
    top: "1rem",
    bottom: "auto"
  },
  blur: "8px",
  background: "rgba(255,255,255,0.1)",
  borderColor: "rgba(255,255,255,0.2)",
  borderWidth: "1px",
  borderRadius: "30px",
  padding: ".5rem",
  gap: "0.5rem"
};
var i14 = {
  hoverBackground: "rgba(255,255,255,0.1)",
  color: "{surface.50}",
  hoverColor: "{surface.0}",
  size: "3rem",
  iconSize: "1.5rem",
  borderRadius: "50%",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var e24 = {
  root: o32,
  preview: r31,
  toolbar: a15,
  action: i14
};

// node_modules/@primeuix/themes/dist/aura/imagecompare/index.mjs
var o33 = {
  size: "15px",
  hoverSize: "30px",
  background: "rgba(255,255,255,0.3)",
  hoverBackground: "rgba(255,255,255,0.3)",
  borderColor: "unset",
  hoverBorderColor: "unset",
  borderWidth: "0",
  borderRadius: "50%",
  transitionDuration: "{transition.duration}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "rgba(255,255,255,0.3)",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var r32 = {
  handle: o33
};

// node_modules/@primeuix/themes/dist/aura/inlinemessage/index.mjs
var r33 = {
  padding: "{form.field.padding.y} {form.field.padding.x}",
  borderRadius: "{content.border.radius}",
  gap: "0.5rem"
};
var o34 = {
  fontWeight: "500"
};
var e25 = {
  size: "1rem"
};
var n11 = {
  light: {
    info: {
      background: "color-mix(in srgb, {blue.50}, transparent 5%)",
      borderColor: "{blue.200}",
      color: "{blue.600}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
    },
    success: {
      background: "color-mix(in srgb, {green.50}, transparent 5%)",
      borderColor: "{green.200}",
      color: "{green.600}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
    },
    warn: {
      background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
      borderColor: "{yellow.200}",
      color: "{yellow.600}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
    },
    error: {
      background: "color-mix(in srgb, {red.50}, transparent 5%)",
      borderColor: "{red.200}",
      color: "{red.600}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
    },
    secondary: {
      background: "{surface.100}",
      borderColor: "{surface.200}",
      color: "{surface.600}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
    },
    contrast: {
      background: "{surface.900}",
      borderColor: "{surface.950}",
      color: "{surface.50}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
    }
  },
  dark: {
    info: {
      background: "color-mix(in srgb, {blue.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
      color: "{blue.500}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
    },
    success: {
      background: "color-mix(in srgb, {green.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
      color: "{green.500}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
    },
    warn: {
      background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
      color: "{yellow.500}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
    },
    error: {
      background: "color-mix(in srgb, {red.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
      color: "{red.500}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
    },
    secondary: {
      background: "{surface.800}",
      borderColor: "{surface.700}",
      color: "{surface.300}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
    },
    contrast: {
      background: "{surface.0}",
      borderColor: "{surface.100}",
      color: "{surface.950}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
    }
  }
};
var a16 = {
  root: r33,
  text: o34,
  icon: e25,
  colorScheme: n11
};

// node_modules/@primeuix/themes/dist/aura/inplace/index.mjs
var o35 = {
  padding: "{form.field.padding.y} {form.field.padding.x}",
  borderRadius: "{content.border.radius}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  },
  transitionDuration: "{transition.duration}"
};
var r34 = {
  hoverBackground: "{content.hover.background}",
  hoverColor: "{content.hover.color}"
};
var n12 = {
  root: o35,
  display: r34
};

// node_modules/@primeuix/themes/dist/aura/inputchips/index.mjs
var o36 = {
  background: "{form.field.background}",
  disabledBackground: "{form.field.disabled.background}",
  filledBackground: "{form.field.filled.background}",
  filledFocusBackground: "{form.field.filled.focus.background}",
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.hover.border.color}",
  focusBorderColor: "{form.field.focus.border.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  color: "{form.field.color}",
  disabledColor: "{form.field.disabled.color}",
  placeholderColor: "{form.field.placeholder.color}",
  shadow: "{form.field.shadow}",
  paddingX: "{form.field.padding.x}",
  paddingY: "{form.field.padding.y}",
  borderRadius: "{form.field.border.radius}",
  focusRing: {
    width: "{form.field.focus.ring.width}",
    style: "{form.field.focus.ring.style}",
    color: "{form.field.focus.ring.color}",
    offset: "{form.field.focus.ring.offset}",
    shadow: "{form.field.focus.ring.shadow}"
  },
  transitionDuration: "{form.field.transition.duration}"
};
var r35 = {
  borderRadius: "{border.radius.sm}"
};
var d15 = {
  light: {
    chip: {
      focusBackground: "{surface.200}",
      color: "{surface.800}"
    }
  },
  dark: {
    chip: {
      focusBackground: "{surface.700}",
      color: "{surface.0}"
    }
  }
};
var f6 = {
  root: o36,
  chip: r35,
  colorScheme: d15
};

// node_modules/@primeuix/themes/dist/aura/inputgroup/index.mjs
var r36 = {
  background: "{form.field.background}",
  borderColor: "{form.field.border.color}",
  color: "{form.field.icon.color}",
  borderRadius: "{form.field.border.radius}",
  padding: "0.5rem",
  minWidth: "2.5rem"
};
var o37 = {
  addon: r36
};

// node_modules/@primeuix/themes/dist/aura/inputnumber/index.mjs
var r37 = {
  transitionDuration: "{transition.duration}"
};
var o38 = {
  width: "2.5rem",
  borderRadius: "{form.field.border.radius}",
  verticalPadding: "{form.field.padding.y}"
};
var e26 = {
  light: {
    button: {
      background: "transparent",
      hoverBackground: "{surface.100}",
      activeBackground: "{surface.200}",
      borderColor: "{form.field.border.color}",
      hoverBorderColor: "{form.field.border.color}",
      activeBorderColor: "{form.field.border.color}",
      color: "{surface.400}",
      hoverColor: "{surface.500}",
      activeColor: "{surface.600}"
    }
  },
  dark: {
    button: {
      background: "transparent",
      hoverBackground: "{surface.800}",
      activeBackground: "{surface.700}",
      borderColor: "{form.field.border.color}",
      hoverBorderColor: "{form.field.border.color}",
      activeBorderColor: "{form.field.border.color}",
      color: "{surface.400}",
      hoverColor: "{surface.300}",
      activeColor: "{surface.200}"
    }
  }
};
var a17 = {
  root: r37,
  button: o38,
  colorScheme: e26
};

// node_modules/@primeuix/themes/dist/aura/inputotp/index.mjs
var r38 = {
  gap: "0.5rem"
};
var t15 = {
  width: "2.5rem",
  sm: {
    width: "2rem"
  },
  lg: {
    width: "3rem"
  }
};
var e27 = {
  root: r38,
  input: t15
};

// node_modules/@primeuix/themes/dist/aura/inputtext/index.mjs
var o39 = {
  background: "{form.field.background}",
  disabledBackground: "{form.field.disabled.background}",
  filledBackground: "{form.field.filled.background}",
  filledHoverBackground: "{form.field.filled.hover.background}",
  filledFocusBackground: "{form.field.filled.focus.background}",
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.hover.border.color}",
  focusBorderColor: "{form.field.focus.border.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  color: "{form.field.color}",
  disabledColor: "{form.field.disabled.color}",
  placeholderColor: "{form.field.placeholder.color}",
  invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
  shadow: "{form.field.shadow}",
  paddingX: "{form.field.padding.x}",
  paddingY: "{form.field.padding.y}",
  borderRadius: "{form.field.border.radius}",
  focusRing: {
    width: "{form.field.focus.ring.width}",
    style: "{form.field.focus.ring.style}",
    color: "{form.field.focus.ring.color}",
    offset: "{form.field.focus.ring.offset}",
    shadow: "{form.field.focus.ring.shadow}"
  },
  transitionDuration: "{form.field.transition.duration}",
  sm: {
    fontSize: "{form.field.sm.font.size}",
    paddingX: "{form.field.sm.padding.x}",
    paddingY: "{form.field.sm.padding.y}"
  },
  lg: {
    fontSize: "{form.field.lg.font.size}",
    paddingX: "{form.field.lg.padding.x}",
    paddingY: "{form.field.lg.padding.y}"
  }
};
var d16 = {
  root: o39
};

// node_modules/@primeuix/themes/dist/aura/knob/index.mjs
var o40 = {
  transitionDuration: "{transition.duration}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var r39 = {
  background: "{primary.color}"
};
var t16 = {
  background: "{content.border.color}"
};
var n13 = {
  color: "{text.muted.color}"
};
var c11 = {
  root: o40,
  value: r39,
  range: t16,
  text: n13
};

// node_modules/@primeuix/themes/dist/aura/listbox/index.mjs
var o41 = {
  background: "{form.field.background}",
  disabledBackground: "{form.field.disabled.background}",
  borderColor: "{form.field.border.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  color: "{form.field.color}",
  disabledColor: "{form.field.disabled.color}",
  shadow: "{form.field.shadow}",
  borderRadius: "{form.field.border.radius}",
  transitionDuration: "{form.field.transition.duration}"
};
var r40 = {
  padding: "{list.padding}",
  gap: "{list.gap}",
  header: {
    padding: "{list.header.padding}"
  }
};
var d17 = {
  focusBackground: "{list.option.focus.background}",
  selectedBackground: "{list.option.selected.background}",
  selectedFocusBackground: "{list.option.selected.focus.background}",
  color: "{list.option.color}",
  focusColor: "{list.option.focus.color}",
  selectedColor: "{list.option.selected.color}",
  selectedFocusColor: "{list.option.selected.focus.color}",
  padding: "{list.option.padding}",
  borderRadius: "{list.option.border.radius}"
};
var i15 = {
  background: "{list.option.group.background}",
  color: "{list.option.group.color}",
  fontWeight: "{list.option.group.font.weight}",
  padding: "{list.option.group.padding}"
};
var t17 = {
  color: "{list.option.color}",
  gutterStart: "-0.375rem",
  gutterEnd: "0.375rem"
};
var e28 = {
  padding: "{list.option.padding}"
};
var l10 = {
  light: {
    option: {
      stripedBackground: "{surface.50}"
    }
  },
  dark: {
    option: {
      stripedBackground: "{surface.900}"
    }
  }
};
var n14 = {
  root: o41,
  list: r40,
  option: d17,
  optionGroup: i15,
  checkmark: t17,
  emptyMessage: e28,
  colorScheme: l10
};

// node_modules/@primeuix/themes/dist/aura/megamenu/index.mjs
var o42 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  borderRadius: "{content.border.radius}",
  color: "{content.color}",
  gap: "0.5rem",
  verticalOrientation: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  horizontalOrientation: {
    padding: "0.5rem 0.75rem",
    gap: "0.5rem"
  },
  transitionDuration: "{transition.duration}"
};
var n15 = {
  borderRadius: "{content.border.radius}",
  padding: "{navigation.item.padding}"
};
var i16 = {
  focusBackground: "{navigation.item.focus.background}",
  activeBackground: "{navigation.item.active.background}",
  color: "{navigation.item.color}",
  focusColor: "{navigation.item.focus.color}",
  activeColor: "{navigation.item.active.color}",
  padding: "{navigation.item.padding}",
  borderRadius: "{navigation.item.border.radius}",
  gap: "{navigation.item.gap}",
  icon: {
    color: "{navigation.item.icon.color}",
    focusColor: "{navigation.item.icon.focus.color}",
    activeColor: "{navigation.item.icon.active.color}"
  }
};
var a18 = {
  padding: "0",
  background: "{content.background}",
  borderColor: "{content.border.color}",
  borderRadius: "{content.border.radius}",
  color: "{content.color}",
  shadow: "{overlay.navigation.shadow}",
  gap: "0.5rem"
};
var r41 = {
  padding: "{navigation.list.padding}",
  gap: "{navigation.list.gap}"
};
var t18 = {
  padding: "{navigation.submenu.label.padding}",
  fontWeight: "{navigation.submenu.label.font.weight}",
  background: "{navigation.submenu.label.background}",
  color: "{navigation.submenu.label.color}"
};
var e29 = {
  size: "{navigation.submenu.icon.size}",
  color: "{navigation.submenu.icon.color}",
  focusColor: "{navigation.submenu.icon.focus.color}",
  activeColor: "{navigation.submenu.icon.active.color}"
};
var c12 = {
  borderColor: "{content.border.color}"
};
var d18 = {
  borderRadius: "50%",
  size: "1.75rem",
  color: "{text.muted.color}",
  hoverColor: "{text.hover.muted.color}",
  hoverBackground: "{content.hover.background}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var g4 = {
  root: o42,
  baseItem: n15,
  item: i16,
  overlay: a18,
  submenu: r41,
  submenuLabel: t18,
  submenuIcon: e29,
  separator: c12,
  mobileButton: d18
};

// node_modules/@primeuix/themes/dist/aura/menu/index.mjs
var o43 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  color: "{content.color}",
  borderRadius: "{content.border.radius}",
  shadow: "{overlay.navigation.shadow}",
  transitionDuration: "{transition.duration}"
};
var n16 = {
  padding: "{navigation.list.padding}",
  gap: "{navigation.list.gap}"
};
var a19 = {
  focusBackground: "{navigation.item.focus.background}",
  color: "{navigation.item.color}",
  focusColor: "{navigation.item.focus.color}",
  padding: "{navigation.item.padding}",
  borderRadius: "{navigation.item.border.radius}",
  gap: "{navigation.item.gap}",
  icon: {
    color: "{navigation.item.icon.color}",
    focusColor: "{navigation.item.icon.focus.color}"
  }
};
var i17 = {
  padding: "{navigation.submenu.label.padding}",
  fontWeight: "{navigation.submenu.label.font.weight}",
  background: "{navigation.submenu.label.background}",
  color: "{navigation.submenu.label.color}"
};
var t19 = {
  borderColor: "{content.border.color}"
};
var r42 = {
  root: o43,
  list: n16,
  item: a19,
  submenuLabel: i17,
  separator: t19
};

// node_modules/@primeuix/themes/dist/aura/menubar/index.mjs
var o44 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  borderRadius: "{content.border.radius}",
  color: "{content.color}",
  gap: "0.5rem",
  padding: "0.5rem 0.75rem",
  transitionDuration: "{transition.duration}"
};
var i18 = {
  borderRadius: "{content.border.radius}",
  padding: "{navigation.item.padding}"
};
var n17 = {
  focusBackground: "{navigation.item.focus.background}",
  activeBackground: "{navigation.item.active.background}",
  color: "{navigation.item.color}",
  focusColor: "{navigation.item.focus.color}",
  activeColor: "{navigation.item.active.color}",
  padding: "{navigation.item.padding}",
  borderRadius: "{navigation.item.border.radius}",
  gap: "{navigation.item.gap}",
  icon: {
    color: "{navigation.item.icon.color}",
    focusColor: "{navigation.item.icon.focus.color}",
    activeColor: "{navigation.item.icon.active.color}"
  }
};
var r43 = {
  padding: "{navigation.list.padding}",
  gap: "{navigation.list.gap}",
  background: "{content.background}",
  borderColor: "{content.border.color}",
  borderRadius: "{content.border.radius}",
  shadow: "{overlay.navigation.shadow}",
  mobileIndent: "1rem",
  icon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  }
};
var a20 = {
  borderColor: "{content.border.color}"
};
var t20 = {
  borderRadius: "50%",
  size: "1.75rem",
  color: "{text.muted.color}",
  hoverColor: "{text.hover.muted.color}",
  hoverBackground: "{content.hover.background}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var e30 = {
  root: o44,
  baseItem: i18,
  item: n17,
  submenu: r43,
  separator: a20,
  mobileButton: t20
};

// node_modules/@primeuix/themes/dist/aura/message/index.mjs
var o45 = {
  borderRadius: "{content.border.radius}",
  borderWidth: "1px",
  transitionDuration: "{transition.duration}"
};
var r44 = {
  padding: "0.5rem 0.75rem",
  gap: "0.5rem",
  sm: {
    padding: "0.375rem 0.625rem"
  },
  lg: {
    padding: "0.625rem 0.875rem"
  }
};
var e31 = {
  fontSize: "1rem",
  fontWeight: "500",
  sm: {
    fontSize: "0.875rem"
  },
  lg: {
    fontSize: "1.125rem"
  }
};
var n18 = {
  size: "1.125rem",
  sm: {
    size: "1rem"
  },
  lg: {
    size: "1.25rem"
  }
};
var l11 = {
  width: "1.75rem",
  height: "1.75rem",
  borderRadius: "50%",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    offset: "{focus.ring.offset}"
  }
};
var s7 = {
  size: "1rem",
  sm: {
    size: "0.875rem"
  },
  lg: {
    size: "1.125rem"
  }
};
var c13 = {
  root: {
    borderWidth: "1px"
  }
};
var a21 = {
  content: {
    padding: "0"
  }
};
var d19 = {
  light: {
    info: {
      background: "color-mix(in srgb, {blue.50}, transparent 5%)",
      borderColor: "{blue.200}",
      color: "{blue.600}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{blue.100}",
        focusRing: {
          color: "{blue.600}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{blue.600}",
        borderColor: "{blue.600}"
      },
      simple: {
        color: "{blue.600}"
      }
    },
    success: {
      background: "color-mix(in srgb, {green.50}, transparent 5%)",
      borderColor: "{green.200}",
      color: "{green.600}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{green.100}",
        focusRing: {
          color: "{green.600}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{green.600}",
        borderColor: "{green.600}"
      },
      simple: {
        color: "{green.600}"
      }
    },
    warn: {
      background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
      borderColor: "{yellow.200}",
      color: "{yellow.600}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{yellow.100}",
        focusRing: {
          color: "{yellow.600}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{yellow.600}",
        borderColor: "{yellow.600}"
      },
      simple: {
        color: "{yellow.600}"
      }
    },
    error: {
      background: "color-mix(in srgb, {red.50}, transparent 5%)",
      borderColor: "{red.200}",
      color: "{red.600}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{red.100}",
        focusRing: {
          color: "{red.600}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{red.600}",
        borderColor: "{red.600}"
      },
      simple: {
        color: "{red.600}"
      }
    },
    secondary: {
      background: "{surface.100}",
      borderColor: "{surface.200}",
      color: "{surface.600}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{surface.200}",
        focusRing: {
          color: "{surface.600}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{surface.500}",
        borderColor: "{surface.500}"
      },
      simple: {
        color: "{surface.500}"
      }
    },
    contrast: {
      background: "{surface.900}",
      borderColor: "{surface.950}",
      color: "{surface.50}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
      closeButton: {
        hoverBackground: "{surface.800}",
        focusRing: {
          color: "{surface.50}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{surface.950}",
        borderColor: "{surface.950}"
      },
      simple: {
        color: "{surface.950}"
      }
    }
  },
  dark: {
    info: {
      background: "color-mix(in srgb, {blue.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
      color: "{blue.500}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "rgba(255, 255, 255, 0.05)",
        focusRing: {
          color: "{blue.500}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{blue.500}",
        borderColor: "{blue.500}"
      },
      simple: {
        color: "{blue.500}"
      }
    },
    success: {
      background: "color-mix(in srgb, {green.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
      color: "{green.500}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "rgba(255, 255, 255, 0.05)",
        focusRing: {
          color: "{green.500}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{green.500}",
        borderColor: "{green.500}"
      },
      simple: {
        color: "{green.500}"
      }
    },
    warn: {
      background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
      color: "{yellow.500}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "rgba(255, 255, 255, 0.05)",
        focusRing: {
          color: "{yellow.500}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{yellow.500}",
        borderColor: "{yellow.500}"
      },
      simple: {
        color: "{yellow.500}"
      }
    },
    error: {
      background: "color-mix(in srgb, {red.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
      color: "{red.500}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "rgba(255, 255, 255, 0.05)",
        focusRing: {
          color: "{red.500}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{red.500}",
        borderColor: "{red.500}"
      },
      simple: {
        color: "{red.500}"
      }
    },
    secondary: {
      background: "{surface.800}",
      borderColor: "{surface.700}",
      color: "{surface.300}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{surface.700}",
        focusRing: {
          color: "{surface.300}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{surface.400}",
        borderColor: "{surface.400}"
      },
      simple: {
        color: "{surface.400}"
      }
    },
    contrast: {
      background: "{surface.0}",
      borderColor: "{surface.100}",
      color: "{surface.950}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
      closeButton: {
        hoverBackground: "{surface.100}",
        focusRing: {
          color: "{surface.950}",
          shadow: "none"
        }
      },
      outlined: {
        color: "{surface.0}",
        borderColor: "{surface.0}"
      },
      simple: {
        color: "{surface.0}"
      }
    }
  }
};
var u4 = {
  root: o45,
  content: r44,
  text: e31,
  icon: n18,
  closeButton: l11,
  closeIcon: s7,
  outlined: c13,
  simple: a21,
  colorScheme: d19
};

// node_modules/@primeuix/themes/dist/aura/metergroup/index.mjs
var e32 = {
  borderRadius: "{content.border.radius}",
  gap: "1rem"
};
var r45 = {
  background: "{content.border.color}",
  size: "0.5rem"
};
var a22 = {
  gap: "0.5rem"
};
var o46 = {
  size: "0.5rem"
};
var l12 = {
  size: "1rem"
};
var t21 = {
  verticalGap: "0.5rem",
  horizontalGap: "1rem"
};
var b3 = {
  root: e32,
  meters: r45,
  label: a22,
  labelMarker: o46,
  labelIcon: l12,
  labelList: t21
};

// node_modules/@primeuix/themes/dist/aura/multiselect/index.mjs
var o47 = {
  background: "{form.field.background}",
  disabledBackground: "{form.field.disabled.background}",
  filledBackground: "{form.field.filled.background}",
  filledHoverBackground: "{form.field.filled.hover.background}",
  filledFocusBackground: "{form.field.filled.focus.background}",
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.hover.border.color}",
  focusBorderColor: "{form.field.focus.border.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  color: "{form.field.color}",
  disabledColor: "{form.field.disabled.color}",
  placeholderColor: "{form.field.placeholder.color}",
  invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
  shadow: "{form.field.shadow}",
  paddingX: "{form.field.padding.x}",
  paddingY: "{form.field.padding.y}",
  borderRadius: "{form.field.border.radius}",
  focusRing: {
    width: "{form.field.focus.ring.width}",
    style: "{form.field.focus.ring.style}",
    color: "{form.field.focus.ring.color}",
    offset: "{form.field.focus.ring.offset}",
    shadow: "{form.field.focus.ring.shadow}"
  },
  transitionDuration: "{form.field.transition.duration}",
  sm: {
    fontSize: "{form.field.sm.font.size}",
    paddingX: "{form.field.sm.padding.x}",
    paddingY: "{form.field.sm.padding.y}"
  },
  lg: {
    fontSize: "{form.field.lg.font.size}",
    paddingX: "{form.field.lg.padding.x}",
    paddingY: "{form.field.lg.padding.y}"
  }
};
var d20 = {
  width: "2.5rem",
  color: "{form.field.icon.color}"
};
var r46 = {
  background: "{overlay.select.background}",
  borderColor: "{overlay.select.border.color}",
  borderRadius: "{overlay.select.border.radius}",
  color: "{overlay.select.color}",
  shadow: "{overlay.select.shadow}"
};
var l13 = {
  padding: "{list.padding}",
  gap: "{list.gap}",
  header: {
    padding: "{list.header.padding}"
  }
};
var i19 = {
  focusBackground: "{list.option.focus.background}",
  selectedBackground: "{list.option.selected.background}",
  selectedFocusBackground: "{list.option.selected.focus.background}",
  color: "{list.option.color}",
  focusColor: "{list.option.focus.color}",
  selectedColor: "{list.option.selected.color}",
  selectedFocusColor: "{list.option.selected.focus.color}",
  padding: "{list.option.padding}",
  borderRadius: "{list.option.border.radius}",
  gap: "0.5rem"
};
var e33 = {
  background: "{list.option.group.background}",
  color: "{list.option.group.color}",
  fontWeight: "{list.option.group.font.weight}",
  padding: "{list.option.group.padding}"
};
var f7 = {
  color: "{form.field.icon.color}"
};
var a23 = {
  borderRadius: "{border.radius.sm}"
};
var c14 = {
  padding: "{list.option.padding}"
};
var n19 = {
  root: o47,
  dropdown: d20,
  overlay: r46,
  list: l13,
  option: i19,
  optionGroup: e33,
  chip: a23,
  clearIcon: f7,
  emptyMessage: c14
};

// node_modules/@primeuix/themes/dist/aura/orderlist/index.mjs
var r47 = {
  gap: "1.125rem"
};
var a24 = {
  gap: "0.5rem"
};
var o48 = {
  root: r47,
  controls: a24
};

// node_modules/@primeuix/themes/dist/aura/organizationchart/index.mjs
var o49 = {
  gutter: "0.75rem",
  transitionDuration: "{transition.duration}"
};
var r48 = {
  background: "{content.background}",
  hoverBackground: "{content.hover.background}",
  selectedBackground: "{highlight.background}",
  borderColor: "{content.border.color}",
  color: "{content.color}",
  selectedColor: "{highlight.color}",
  hoverColor: "{content.hover.color}",
  padding: "0.75rem 1rem",
  toggleablePadding: "0.75rem 1rem 1.25rem 1rem",
  borderRadius: "{content.border.radius}"
};
var e34 = {
  background: "{content.background}",
  hoverBackground: "{content.hover.background}",
  borderColor: "{content.border.color}",
  color: "{text.muted.color}",
  hoverColor: "{text.color}",
  size: "1.5rem",
  borderRadius: "50%",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var t22 = {
  color: "{content.border.color}",
  borderRadius: "{content.border.radius}",
  height: "24px"
};
var n20 = {
  root: o49,
  node: r48,
  nodeToggleButton: e34,
  connector: t22
};

// node_modules/@primeuix/themes/dist/aura/overlaybadge/index.mjs
var o50 = {
  outline: {
    width: "2px",
    color: "{content.background}"
  }
};
var t23 = {
  root: o50
};

// node_modules/@primeuix/themes/dist/aura/paginator/index.mjs
var o51 = {
  padding: "0.5rem 1rem",
  gap: "0.25rem",
  borderRadius: "{content.border.radius}",
  background: "{content.background}",
  color: "{content.color}",
  transitionDuration: "{transition.duration}"
};
var r49 = {
  background: "transparent",
  hoverBackground: "{content.hover.background}",
  selectedBackground: "{highlight.background}",
  color: "{text.muted.color}",
  hoverColor: "{text.hover.muted.color}",
  selectedColor: "{highlight.color}",
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var t24 = {
  color: "{text.muted.color}"
};
var e35 = {
  maxWidth: "2.5rem"
};
var n21 = {
  root: o51,
  navButton: r49,
  currentPageReport: t24,
  jumpToPageInput: e35
};

// node_modules/@primeuix/themes/dist/aura/panel/index.mjs
var r50 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  color: "{content.color}",
  borderRadius: "{content.border.radius}"
};
var o52 = {
  background: "transparent",
  color: "{text.color}",
  padding: "1.125rem",
  borderColor: "{content.border.color}",
  borderWidth: "0",
  borderRadius: "0"
};
var e36 = {
  padding: "0.375rem 1.125rem"
};
var d21 = {
  fontWeight: "600"
};
var t25 = {
  padding: "0 1.125rem 1.125rem 1.125rem"
};
var n22 = {
  padding: "0 1.125rem 1.125rem 1.125rem"
};
var a25 = {
  root: r50,
  header: o52,
  toggleableHeader: e36,
  title: d21,
  content: t25,
  footer: n22
};

// node_modules/@primeuix/themes/dist/aura/panelmenu/index.mjs
var o53 = {
  gap: "0.5rem",
  transitionDuration: "{transition.duration}"
};
var r51 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  borderWidth: "1px",
  color: "{content.color}",
  padding: "0.25rem 0.25rem",
  borderRadius: "{content.border.radius}",
  first: {
    borderWidth: "1px",
    topBorderRadius: "{content.border.radius}"
  },
  last: {
    borderWidth: "1px",
    bottomBorderRadius: "{content.border.radius}"
  }
};
var n23 = {
  focusBackground: "{navigation.item.focus.background}",
  color: "{navigation.item.color}",
  focusColor: "{navigation.item.focus.color}",
  gap: "0.5rem",
  padding: "{navigation.item.padding}",
  borderRadius: "{content.border.radius}",
  icon: {
    color: "{navigation.item.icon.color}",
    focusColor: "{navigation.item.icon.focus.color}"
  }
};
var i20 = {
  indent: "1rem"
};
var t26 = {
  color: "{navigation.submenu.icon.color}",
  focusColor: "{navigation.submenu.icon.focus.color}"
};
var a26 = {
  root: o53,
  panel: r51,
  item: n23,
  submenu: i20,
  submenuIcon: t26
};

// node_modules/@primeuix/themes/dist/aura/password/index.mjs
var r52 = {
  background: "{content.border.color}",
  borderRadius: "{content.border.radius}",
  height: ".75rem"
};
var o54 = {
  color: "{form.field.icon.color}"
};
var e37 = {
  background: "{overlay.popover.background}",
  borderColor: "{overlay.popover.border.color}",
  borderRadius: "{overlay.popover.border.radius}",
  color: "{overlay.popover.color}",
  padding: "{overlay.popover.padding}",
  shadow: "{overlay.popover.shadow}"
};
var a27 = {
  gap: "0.5rem"
};
var d22 = {
  light: {
    strength: {
      weakBackground: "{red.500}",
      mediumBackground: "{amber.500}",
      strongBackground: "{green.500}"
    }
  },
  dark: {
    strength: {
      weakBackground: "{red.400}",
      mediumBackground: "{amber.400}",
      strongBackground: "{green.400}"
    }
  }
};
var n24 = {
  meter: r52,
  icon: o54,
  overlay: e37,
  content: a27,
  colorScheme: d22
};

// node_modules/@primeuix/themes/dist/aura/picklist/index.mjs
var r53 = {
  gap: "1.125rem"
};
var a28 = {
  gap: "0.5rem"
};
var o55 = {
  root: r53,
  controls: a28
};

// node_modules/@primeuix/themes/dist/aura/popover/index.mjs
var o56 = {
  background: "{overlay.popover.background}",
  borderColor: "{overlay.popover.border.color}",
  color: "{overlay.popover.color}",
  borderRadius: "{overlay.popover.border.radius}",
  shadow: "{overlay.popover.shadow}",
  gutter: "10px",
  arrowOffset: "1.25rem"
};
var r54 = {
  padding: "{overlay.popover.padding}"
};
var e38 = {
  root: o56,
  content: r54
};

// node_modules/@primeuix/themes/dist/aura/progressbar/index.mjs
var r55 = {
  background: "{content.border.color}",
  borderRadius: "{content.border.radius}",
  height: "1.25rem"
};
var o57 = {
  background: "{primary.color}"
};
var e39 = {
  color: "{primary.contrast.color}",
  fontSize: "0.75rem",
  fontWeight: "600"
};
var t27 = {
  root: r55,
  value: o57,
  label: e39
};

// node_modules/@primeuix/themes/dist/aura/progressspinner/index.mjs
var o58 = {
  light: {
    root: {
      colorOne: "{red.500}",
      colorTwo: "{blue.500}",
      colorThree: "{green.500}",
      colorFour: "{yellow.500}"
    }
  },
  dark: {
    root: {
      colorOne: "{red.400}",
      colorTwo: "{blue.400}",
      colorThree: "{green.400}",
      colorFour: "{yellow.400}"
    }
  }
};
var r56 = {
  colorScheme: o58
};

// node_modules/@primeuix/themes/dist/aura/radiobutton/index.mjs
var o59 = {
  width: "1.25rem",
  height: "1.25rem",
  background: "{form.field.background}",
  checkedBackground: "{primary.color}",
  checkedHoverBackground: "{primary.hover.color}",
  disabledBackground: "{form.field.disabled.background}",
  filledBackground: "{form.field.filled.background}",
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.hover.border.color}",
  focusBorderColor: "{form.field.border.color}",
  checkedBorderColor: "{primary.color}",
  checkedHoverBorderColor: "{primary.hover.color}",
  checkedFocusBorderColor: "{primary.color}",
  checkedDisabledBorderColor: "{form.field.border.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  shadow: "{form.field.shadow}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  },
  transitionDuration: "{form.field.transition.duration}",
  sm: {
    width: "1rem",
    height: "1rem"
  },
  lg: {
    width: "1.5rem",
    height: "1.5rem"
  }
};
var r57 = {
  size: "0.75rem",
  checkedColor: "{primary.contrast.color}",
  checkedHoverColor: "{primary.contrast.color}",
  disabledColor: "{form.field.disabled.color}",
  sm: {
    size: "0.5rem"
  },
  lg: {
    size: "1rem"
  }
};
var e40 = {
  root: o59,
  icon: r57
};

// node_modules/@primeuix/themes/dist/aura/rating/index.mjs
var o60 = {
  gap: "0.25rem",
  transitionDuration: "{transition.duration}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var r58 = {
  size: "1rem",
  color: "{text.muted.color}",
  hoverColor: "{primary.color}",
  activeColor: "{primary.color}"
};
var i21 = {
  root: o60,
  icon: r58
};

// node_modules/@primeuix/themes/dist/aura/ripple/index.mjs
var r59 = {
  light: {
    root: {
      background: "rgba(0,0,0,0.1)"
    }
  },
  dark: {
    root: {
      background: "rgba(255,255,255,0.3)"
    }
  }
};
var o61 = {
  colorScheme: r59
};

// node_modules/@primeuix/themes/dist/aura/scrollpanel/index.mjs
var r60 = {
  transitionDuration: "{transition.duration}"
};
var o62 = {
  size: "9px",
  borderRadius: "{border.radius.sm}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var s8 = {
  light: {
    bar: {
      background: "{surface.100}"
    }
  },
  dark: {
    bar: {
      background: "{surface.800}"
    }
  }
};
var a29 = {
  root: r60,
  bar: o62,
  colorScheme: s8
};

// node_modules/@primeuix/themes/dist/aura/select/index.mjs
var o63 = {
  background: "{form.field.background}",
  disabledBackground: "{form.field.disabled.background}",
  filledBackground: "{form.field.filled.background}",
  filledHoverBackground: "{form.field.filled.hover.background}",
  filledFocusBackground: "{form.field.filled.focus.background}",
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.hover.border.color}",
  focusBorderColor: "{form.field.focus.border.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  color: "{form.field.color}",
  disabledColor: "{form.field.disabled.color}",
  placeholderColor: "{form.field.placeholder.color}",
  invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
  shadow: "{form.field.shadow}",
  paddingX: "{form.field.padding.x}",
  paddingY: "{form.field.padding.y}",
  borderRadius: "{form.field.border.radius}",
  focusRing: {
    width: "{form.field.focus.ring.width}",
    style: "{form.field.focus.ring.style}",
    color: "{form.field.focus.ring.color}",
    offset: "{form.field.focus.ring.offset}",
    shadow: "{form.field.focus.ring.shadow}"
  },
  transitionDuration: "{form.field.transition.duration}",
  sm: {
    fontSize: "{form.field.sm.font.size}",
    paddingX: "{form.field.sm.padding.x}",
    paddingY: "{form.field.sm.padding.y}"
  },
  lg: {
    fontSize: "{form.field.lg.font.size}",
    paddingX: "{form.field.lg.padding.x}",
    paddingY: "{form.field.lg.padding.y}"
  }
};
var r61 = {
  width: "2.5rem",
  color: "{form.field.icon.color}"
};
var d23 = {
  background: "{overlay.select.background}",
  borderColor: "{overlay.select.border.color}",
  borderRadius: "{overlay.select.border.radius}",
  color: "{overlay.select.color}",
  shadow: "{overlay.select.shadow}"
};
var l14 = {
  padding: "{list.padding}",
  gap: "{list.gap}",
  header: {
    padding: "{list.header.padding}"
  }
};
var i22 = {
  focusBackground: "{list.option.focus.background}",
  selectedBackground: "{list.option.selected.background}",
  selectedFocusBackground: "{list.option.selected.focus.background}",
  color: "{list.option.color}",
  focusColor: "{list.option.focus.color}",
  selectedColor: "{list.option.selected.color}",
  selectedFocusColor: "{list.option.selected.focus.color}",
  padding: "{list.option.padding}",
  borderRadius: "{list.option.border.radius}"
};
var e41 = {
  background: "{list.option.group.background}",
  color: "{list.option.group.color}",
  fontWeight: "{list.option.group.font.weight}",
  padding: "{list.option.group.padding}"
};
var f8 = {
  color: "{form.field.icon.color}"
};
var c15 = {
  color: "{list.option.color}",
  gutterStart: "-0.375rem",
  gutterEnd: "0.375rem"
};
var a30 = {
  padding: "{list.option.padding}"
};
var n25 = {
  root: o63,
  dropdown: r61,
  overlay: d23,
  list: l14,
  option: i22,
  optionGroup: e41,
  clearIcon: f8,
  checkmark: c15,
  emptyMessage: a30
};

// node_modules/@primeuix/themes/dist/aura/selectbutton/index.mjs
var r62 = {
  borderRadius: "{form.field.border.radius}"
};
var o64 = {
  light: {
    root: {
      invalidBorderColor: "{form.field.invalid.border.color}"
    }
  },
  dark: {
    root: {
      invalidBorderColor: "{form.field.invalid.border.color}"
    }
  }
};
var d24 = {
  root: r62,
  colorScheme: o64
};

// node_modules/@primeuix/themes/dist/aura/skeleton/index.mjs
var r63 = {
  borderRadius: "{content.border.radius}"
};
var a31 = {
  light: {
    root: {
      background: "{surface.200}",
      animationBackground: "rgba(255,255,255,0.4)"
    }
  },
  dark: {
    root: {
      background: "rgba(255, 255, 255, 0.06)",
      animationBackground: "rgba(255, 255, 255, 0.04)"
    }
  }
};
var o65 = {
  root: r63,
  colorScheme: a31
};

// node_modules/@primeuix/themes/dist/aura/slider/index.mjs
var o66 = {
  transitionDuration: "{transition.duration}"
};
var r64 = {
  background: "{content.border.color}",
  borderRadius: "{content.border.radius}",
  size: "3px"
};
var n26 = {
  background: "{primary.color}"
};
var t28 = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  background: "{content.border.color}",
  hoverBackground: "{content.border.color}",
  content: {
    borderRadius: "50%",
    hoverBackground: "{content.background}",
    width: "16px",
    height: "16px",
    shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"
  },
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var e42 = {
  light: {
    handle: {
      content: {
        background: "{surface.0}"
      }
    }
  },
  dark: {
    handle: {
      content: {
        background: "{surface.950}"
      }
    }
  }
};
var a32 = {
  root: o66,
  track: r64,
  range: n26,
  handle: t28,
  colorScheme: e42
};

// node_modules/@primeuix/themes/dist/aura/speeddial/index.mjs
var t29 = {
  gap: "0.5rem",
  transitionDuration: "{transition.duration}"
};
var a33 = {
  root: t29
};

// node_modules/@primeuix/themes/dist/aura/splitbutton/index.mjs
var r65 = {
  borderRadius: "{form.field.border.radius}",
  roundedBorderRadius: "2rem",
  raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
};
var d25 = {
  root: r65
};

// node_modules/@primeuix/themes/dist/aura/splitter/index.mjs
var o67 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  color: "{content.color}",
  transitionDuration: "{transition.duration}"
};
var r66 = {
  background: "{content.border.color}"
};
var n27 = {
  size: "24px",
  background: "transparent",
  borderRadius: "{content.border.radius}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var t30 = {
  root: o67,
  gutter: r66,
  handle: n27
};

// node_modules/@primeuix/themes/dist/aura/stepper/index.mjs
var o68 = {
  transitionDuration: "{transition.duration}"
};
var r67 = {
  background: "{content.border.color}",
  activeBackground: "{primary.color}",
  margin: "0 0 0 1.625rem",
  size: "2px"
};
var e43 = {
  padding: "0.5rem",
  gap: "1rem"
};
var t31 = {
  padding: "0",
  borderRadius: "{content.border.radius}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  },
  gap: "0.5rem"
};
var n28 = {
  color: "{text.muted.color}",
  activeColor: "{primary.color}",
  fontWeight: "500"
};
var a34 = {
  background: "{content.background}",
  activeBackground: "{content.background}",
  borderColor: "{content.border.color}",
  activeBorderColor: "{content.border.color}",
  color: "{text.muted.color}",
  activeColor: "{primary.color}",
  size: "2rem",
  fontSize: "1.143rem",
  fontWeight: "500",
  borderRadius: "50%",
  shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
};
var c16 = {
  padding: "0.875rem 0.5rem 1.125rem 0.5rem"
};
var d26 = {
  background: "{content.background}",
  color: "{content.color}",
  padding: "0",
  indent: "1rem"
};
var i23 = {
  root: o68,
  separator: r67,
  step: e43,
  stepHeader: t31,
  stepTitle: n28,
  stepNumber: a34,
  steppanels: c16,
  steppanel: d26
};

// node_modules/@primeuix/themes/dist/aura/steps/index.mjs
var o69 = {
  transitionDuration: "{transition.duration}"
};
var r68 = {
  background: "{content.border.color}"
};
var t32 = {
  borderRadius: "{content.border.radius}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  },
  gap: "0.5rem"
};
var e44 = {
  color: "{text.muted.color}",
  activeColor: "{primary.color}",
  fontWeight: "500"
};
var n29 = {
  background: "{content.background}",
  activeBackground: "{content.background}",
  borderColor: "{content.border.color}",
  activeBorderColor: "{content.border.color}",
  color: "{text.muted.color}",
  activeColor: "{primary.color}",
  size: "2rem",
  fontSize: "1.143rem",
  fontWeight: "500",
  borderRadius: "50%",
  shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
};
var c17 = {
  root: o69,
  separator: r68,
  itemLink: t32,
  itemLabel: e44,
  itemNumber: n29
};

// node_modules/@primeuix/themes/dist/aura/tabmenu/index.mjs
var o70 = {
  transitionDuration: "{transition.duration}"
};
var r69 = {
  borderWidth: "0 0 1px 0",
  background: "{content.background}",
  borderColor: "{content.border.color}"
};
var t33 = {
  background: "transparent",
  hoverBackground: "transparent",
  activeBackground: "transparent",
  borderWidth: "0 0 1px 0",
  borderColor: "{content.border.color}",
  hoverBorderColor: "{content.border.color}",
  activeBorderColor: "{primary.color}",
  color: "{text.muted.color}",
  hoverColor: "{text.color}",
  activeColor: "{primary.color}",
  padding: "1rem 1.125rem",
  fontWeight: "600",
  margin: "0 0 -1px 0",
  gap: "0.5rem",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var e45 = {
  color: "{text.muted.color}",
  hoverColor: "{text.color}",
  activeColor: "{primary.color}"
};
var c18 = {
  height: "1px",
  bottom: "-1px",
  background: "{primary.color}"
};
var n30 = {
  root: o70,
  tablist: r69,
  item: t33,
  itemIcon: e45,
  activeBar: c18
};

// node_modules/@primeuix/themes/dist/aura/tabs/index.mjs
var o71 = {
  transitionDuration: "{transition.duration}"
};
var r70 = {
  borderWidth: "0 0 1px 0",
  background: "{content.background}",
  borderColor: "{content.border.color}"
};
var t34 = {
  background: "transparent",
  hoverBackground: "transparent",
  activeBackground: "transparent",
  borderWidth: "0 0 1px 0",
  borderColor: "{content.border.color}",
  hoverBorderColor: "{content.border.color}",
  activeBorderColor: "{primary.color}",
  color: "{text.muted.color}",
  hoverColor: "{text.color}",
  activeColor: "{primary.color}",
  padding: "1rem 1.125rem",
  fontWeight: "600",
  margin: "0 0 -1px 0",
  gap: "0.5rem",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "-1px",
    shadow: "{focus.ring.shadow}"
  }
};
var n31 = {
  background: "{content.background}",
  color: "{content.color}",
  padding: "0.875rem 1.125rem 1.125rem 1.125rem",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "inset {focus.ring.shadow}"
  }
};
var c19 = {
  background: "{content.background}",
  color: "{text.muted.color}",
  hoverColor: "{text.color}",
  width: "2.5rem",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "-1px",
    shadow: "{focus.ring.shadow}"
  }
};
var e46 = {
  height: "1px",
  bottom: "-1px",
  background: "{primary.color}"
};
var a35 = {
  light: {
    navButton: {
      shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
    }
  },
  dark: {
    navButton: {
      shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
    }
  }
};
var i24 = {
  root: o71,
  tablist: r70,
  tab: t34,
  tabpanel: n31,
  navButton: c19,
  activeBar: e46,
  colorScheme: a35
};

// node_modules/@primeuix/themes/dist/aura/tabview/index.mjs
var o72 = {
  transitionDuration: "{transition.duration}"
};
var r71 = {
  background: "{content.background}",
  borderColor: "{content.border.color}"
};
var t35 = {
  borderColor: "{content.border.color}",
  activeBorderColor: "{primary.color}",
  color: "{text.muted.color}",
  hoverColor: "{text.color}",
  activeColor: "{primary.color}"
};
var n32 = {
  background: "{content.background}",
  color: "{content.color}"
};
var a36 = {
  background: "{content.background}",
  color: "{text.muted.color}",
  hoverColor: "{text.color}"
};
var c20 = {
  light: {
    navButton: {
      shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
    }
  },
  dark: {
    navButton: {
      shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
    }
  }
};
var e47 = {
  root: o72,
  tabList: r71,
  tab: t35,
  tabPanel: n32,
  navButton: a36,
  colorScheme: c20
};

// node_modules/@primeuix/themes/dist/aura/tag/index.mjs
var r72 = {
  fontSize: "0.875rem",
  fontWeight: "700",
  padding: "0.25rem 0.5rem",
  gap: "0.25rem",
  borderRadius: "{content.border.radius}",
  roundedBorderRadius: "{border.radius.xl}"
};
var o73 = {
  size: "0.75rem"
};
var a37 = {
  light: {
    primary: {
      background: "{primary.100}",
      color: "{primary.700}"
    },
    secondary: {
      background: "{surface.100}",
      color: "{surface.600}"
    },
    success: {
      background: "{green.100}",
      color: "{green.700}"
    },
    info: {
      background: "{sky.100}",
      color: "{sky.700}"
    },
    warn: {
      background: "{orange.100}",
      color: "{orange.700}"
    },
    danger: {
      background: "{red.100}",
      color: "{red.700}"
    },
    contrast: {
      background: "{surface.950}",
      color: "{surface.0}"
    }
  },
  dark: {
    primary: {
      background: "color-mix(in srgb, {primary.500}, transparent 84%)",
      color: "{primary.300}"
    },
    secondary: {
      background: "{surface.800}",
      color: "{surface.300}"
    },
    success: {
      background: "color-mix(in srgb, {green.500}, transparent 84%)",
      color: "{green.300}"
    },
    info: {
      background: "color-mix(in srgb, {sky.500}, transparent 84%)",
      color: "{sky.300}"
    },
    warn: {
      background: "color-mix(in srgb, {orange.500}, transparent 84%)",
      color: "{orange.300}"
    },
    danger: {
      background: "color-mix(in srgb, {red.500}, transparent 84%)",
      color: "{red.300}"
    },
    contrast: {
      background: "{surface.0}",
      color: "{surface.950}"
    }
  }
};
var n33 = {
  root: r72,
  icon: o73,
  colorScheme: a37
};

// node_modules/@primeuix/themes/dist/aura/terminal/index.mjs
var r73 = {
  background: "{form.field.background}",
  borderColor: "{form.field.border.color}",
  color: "{form.field.color}",
  height: "18rem",
  padding: "{form.field.padding.y} {form.field.padding.x}",
  borderRadius: "{form.field.border.radius}"
};
var o74 = {
  gap: "0.25rem"
};
var d27 = {
  margin: "2px 0"
};
var e48 = {
  root: r73,
  prompt: o74,
  commandResponse: d27
};

// node_modules/@primeuix/themes/dist/aura/textarea/index.mjs
var o75 = {
  background: "{form.field.background}",
  disabledBackground: "{form.field.disabled.background}",
  filledBackground: "{form.field.filled.background}",
  filledHoverBackground: "{form.field.filled.hover.background}",
  filledFocusBackground: "{form.field.filled.focus.background}",
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.hover.border.color}",
  focusBorderColor: "{form.field.focus.border.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  color: "{form.field.color}",
  disabledColor: "{form.field.disabled.color}",
  placeholderColor: "{form.field.placeholder.color}",
  invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
  shadow: "{form.field.shadow}",
  paddingX: "{form.field.padding.x}",
  paddingY: "{form.field.padding.y}",
  borderRadius: "{form.field.border.radius}",
  focusRing: {
    width: "{form.field.focus.ring.width}",
    style: "{form.field.focus.ring.style}",
    color: "{form.field.focus.ring.color}",
    offset: "{form.field.focus.ring.offset}",
    shadow: "{form.field.focus.ring.shadow}"
  },
  transitionDuration: "{form.field.transition.duration}",
  sm: {
    fontSize: "{form.field.sm.font.size}",
    paddingX: "{form.field.sm.padding.x}",
    paddingY: "{form.field.sm.padding.y}"
  },
  lg: {
    fontSize: "{form.field.lg.font.size}",
    paddingX: "{form.field.lg.padding.x}",
    paddingY: "{form.field.lg.padding.y}"
  }
};
var d28 = {
  root: o75
};

// node_modules/@primeuix/themes/dist/aura/tieredmenu/index.mjs
var o76 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  color: "{content.color}",
  borderRadius: "{content.border.radius}",
  shadow: "{overlay.navigation.shadow}",
  transitionDuration: "{transition.duration}"
};
var i25 = {
  padding: "{navigation.list.padding}",
  gap: "{navigation.list.gap}"
};
var n34 = {
  focusBackground: "{navigation.item.focus.background}",
  activeBackground: "{navigation.item.active.background}",
  color: "{navigation.item.color}",
  focusColor: "{navigation.item.focus.color}",
  activeColor: "{navigation.item.active.color}",
  padding: "{navigation.item.padding}",
  borderRadius: "{navigation.item.border.radius}",
  gap: "{navigation.item.gap}",
  icon: {
    color: "{navigation.item.icon.color}",
    focusColor: "{navigation.item.icon.focus.color}",
    activeColor: "{navigation.item.icon.active.color}"
  }
};
var a38 = {
  mobileIndent: "1rem"
};
var t36 = {
  size: "{navigation.submenu.icon.size}",
  color: "{navigation.submenu.icon.color}",
  focusColor: "{navigation.submenu.icon.focus.color}",
  activeColor: "{navigation.submenu.icon.active.color}"
};
var r74 = {
  borderColor: "{content.border.color}"
};
var c21 = {
  root: o76,
  list: i25,
  item: n34,
  submenu: a38,
  submenuIcon: t36,
  separator: r74
};

// node_modules/@primeuix/themes/dist/aura/timeline/index.mjs
var e49 = {
  minHeight: "5rem"
};
var r75 = {
  eventContent: {
    padding: "1rem 0"
  }
};
var o77 = {
  eventContent: {
    padding: "0 1rem"
  }
};
var n35 = {
  size: "1.125rem",
  borderRadius: "50%",
  borderWidth: "2px",
  background: "{content.background}",
  borderColor: "{content.border.color}",
  content: {
    borderRadius: "50%",
    size: "0.375rem",
    background: "{primary.color}",
    insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
  }
};
var t37 = {
  color: "{content.border.color}",
  size: "2px"
};
var d29 = {
  event: e49,
  horizontal: r75,
  vertical: o77,
  eventMarker: n35,
  eventConnector: t37
};

// node_modules/@primeuix/themes/dist/aura/toast/index.mjs
var o78 = {
  width: "25rem",
  borderRadius: "{content.border.radius}",
  borderWidth: "1px",
  transitionDuration: "{transition.duration}"
};
var r76 = {
  size: "1.125rem"
};
var e50 = {
  padding: "{overlay.popover.padding}",
  gap: "0.5rem"
};
var n36 = {
  gap: "0.5rem"
};
var a39 = {
  fontWeight: "500",
  fontSize: "1rem"
};
var s9 = {
  fontWeight: "500",
  fontSize: "0.875rem"
};
var c22 = {
  width: "1.75rem",
  height: "1.75rem",
  borderRadius: "50%",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    offset: "{focus.ring.offset}"
  }
};
var l15 = {
  size: "1rem"
};
var t38 = {
  light: {
    root: {
      blur: "1.5px"
    },
    info: {
      background: "color-mix(in srgb, {blue.50}, transparent 5%)",
      borderColor: "{blue.200}",
      color: "{blue.600}",
      detailColor: "{surface.700}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{blue.100}",
        focusRing: {
          color: "{blue.600}",
          shadow: "none"
        }
      }
    },
    success: {
      background: "color-mix(in srgb, {green.50}, transparent 5%)",
      borderColor: "{green.200}",
      color: "{green.600}",
      detailColor: "{surface.700}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{green.100}",
        focusRing: {
          color: "{green.600}",
          shadow: "none"
        }
      }
    },
    warn: {
      background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
      borderColor: "{yellow.200}",
      color: "{yellow.600}",
      detailColor: "{surface.700}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{yellow.100}",
        focusRing: {
          color: "{yellow.600}",
          shadow: "none"
        }
      }
    },
    error: {
      background: "color-mix(in srgb, {red.50}, transparent 5%)",
      borderColor: "{red.200}",
      color: "{red.600}",
      detailColor: "{surface.700}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{red.100}",
        focusRing: {
          color: "{red.600}",
          shadow: "none"
        }
      }
    },
    secondary: {
      background: "{surface.100}",
      borderColor: "{surface.200}",
      color: "{surface.600}",
      detailColor: "{surface.700}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{surface.200}",
        focusRing: {
          color: "{surface.600}",
          shadow: "none"
        }
      }
    },
    contrast: {
      background: "{surface.900}",
      borderColor: "{surface.950}",
      color: "{surface.50}",
      detailColor: "{surface.0}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
      closeButton: {
        hoverBackground: "{surface.800}",
        focusRing: {
          color: "{surface.50}",
          shadow: "none"
        }
      }
    }
  },
  dark: {
    root: {
      blur: "10px"
    },
    info: {
      background: "color-mix(in srgb, {blue.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
      color: "{blue.500}",
      detailColor: "{surface.0}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "rgba(255, 255, 255, 0.05)",
        focusRing: {
          color: "{blue.500}",
          shadow: "none"
        }
      }
    },
    success: {
      background: "color-mix(in srgb, {green.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
      color: "{green.500}",
      detailColor: "{surface.0}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "rgba(255, 255, 255, 0.05)",
        focusRing: {
          color: "{green.500}",
          shadow: "none"
        }
      }
    },
    warn: {
      background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
      color: "{yellow.500}",
      detailColor: "{surface.0}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "rgba(255, 255, 255, 0.05)",
        focusRing: {
          color: "{yellow.500}",
          shadow: "none"
        }
      }
    },
    error: {
      background: "color-mix(in srgb, {red.500}, transparent 84%)",
      borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
      color: "{red.500}",
      detailColor: "{surface.0}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "rgba(255, 255, 255, 0.05)",
        focusRing: {
          color: "{red.500}",
          shadow: "none"
        }
      }
    },
    secondary: {
      background: "{surface.800}",
      borderColor: "{surface.700}",
      color: "{surface.300}",
      detailColor: "{surface.0}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
      closeButton: {
        hoverBackground: "{surface.700}",
        focusRing: {
          color: "{surface.300}",
          shadow: "none"
        }
      }
    },
    contrast: {
      background: "{surface.0}",
      borderColor: "{surface.100}",
      color: "{surface.950}",
      detailColor: "{surface.950}",
      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
      closeButton: {
        hoverBackground: "{surface.100}",
        focusRing: {
          color: "{surface.950}",
          shadow: "none"
        }
      }
    }
  }
};
var u5 = {
  root: o78,
  icon: r76,
  content: e50,
  text: n36,
  summary: a39,
  detail: s9,
  closeButton: c22,
  closeIcon: l15,
  colorScheme: t38
};

// node_modules/@primeuix/themes/dist/aura/togglebutton/index.mjs
var r77 = {
  padding: "0.25rem",
  borderRadius: "{content.border.radius}",
  gap: "0.5rem",
  fontWeight: "500",
  disabledBackground: "{form.field.disabled.background}",
  disabledBorderColor: "{form.field.disabled.background}",
  disabledColor: "{form.field.disabled.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  },
  transitionDuration: "{form.field.transition.duration}",
  sm: {
    fontSize: "{form.field.sm.font.size}",
    padding: "0.25rem"
  },
  lg: {
    fontSize: "{form.field.lg.font.size}",
    padding: "0.25rem"
  }
};
var o79 = {
  disabledColor: "{form.field.disabled.color}"
};
var e51 = {
  padding: "0.25rem 0.75rem",
  borderRadius: "{content.border.radius}",
  checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
  sm: {
    padding: "0.25rem 0.75rem"
  },
  lg: {
    padding: "0.25rem 0.75rem"
  }
};
var d30 = {
  light: {
    root: {
      background: "{surface.100}",
      checkedBackground: "{surface.100}",
      hoverBackground: "{surface.100}",
      borderColor: "{surface.100}",
      color: "{surface.500}",
      hoverColor: "{surface.700}",
      checkedColor: "{surface.900}",
      checkedBorderColor: "{surface.100}"
    },
    content: {
      checkedBackground: "{surface.0}"
    },
    icon: {
      color: "{surface.500}",
      hoverColor: "{surface.700}",
      checkedColor: "{surface.900}"
    }
  },
  dark: {
    root: {
      background: "{surface.950}",
      checkedBackground: "{surface.950}",
      hoverBackground: "{surface.950}",
      borderColor: "{surface.950}",
      color: "{surface.400}",
      hoverColor: "{surface.300}",
      checkedColor: "{surface.0}",
      checkedBorderColor: "{surface.950}"
    },
    content: {
      checkedBackground: "{surface.800}"
    },
    icon: {
      color: "{surface.400}",
      hoverColor: "{surface.300}",
      checkedColor: "{surface.0}"
    }
  }
};
var c23 = {
  root: r77,
  icon: o79,
  content: e51,
  colorScheme: d30
};

// node_modules/@primeuix/themes/dist/aura/toggleswitch/index.mjs
var r78 = {
  width: "2.5rem",
  height: "1.5rem",
  borderRadius: "30px",
  gap: "0.25rem",
  shadow: "{form.field.shadow}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  },
  borderWidth: "1px",
  borderColor: "transparent",
  hoverBorderColor: "transparent",
  checkedBorderColor: "transparent",
  checkedHoverBorderColor: "transparent",
  invalidBorderColor: "{form.field.invalid.border.color}",
  transitionDuration: "{form.field.transition.duration}",
  slideDuration: "0.2s"
};
var o80 = {
  borderRadius: "50%",
  size: "1rem"
};
var e52 = {
  light: {
    root: {
      background: "{surface.300}",
      disabledBackground: "{form.field.disabled.background}",
      hoverBackground: "{surface.400}",
      checkedBackground: "{primary.color}",
      checkedHoverBackground: "{primary.hover.color}"
    },
    handle: {
      background: "{surface.0}",
      disabledBackground: "{form.field.disabled.color}",
      hoverBackground: "{surface.0}",
      checkedBackground: "{surface.0}",
      checkedHoverBackground: "{surface.0}",
      color: "{text.muted.color}",
      hoverColor: "{text.color}",
      checkedColor: "{primary.color}",
      checkedHoverColor: "{primary.hover.color}"
    }
  },
  dark: {
    root: {
      background: "{surface.700}",
      disabledBackground: "{surface.600}",
      hoverBackground: "{surface.600}",
      checkedBackground: "{primary.color}",
      checkedHoverBackground: "{primary.hover.color}"
    },
    handle: {
      background: "{surface.400}",
      disabledBackground: "{surface.900}",
      hoverBackground: "{surface.300}",
      checkedBackground: "{surface.900}",
      checkedHoverBackground: "{surface.900}",
      color: "{surface.900}",
      hoverColor: "{surface.800}",
      checkedColor: "{primary.color}",
      checkedHoverColor: "{primary.hover.color}"
    }
  }
};
var c24 = {
  root: r78,
  handle: o80,
  colorScheme: e52
};

// node_modules/@primeuix/themes/dist/aura/toolbar/index.mjs
var o81 = {
  background: "{content.background}",
  borderColor: "{content.border.color}",
  borderRadius: "{content.border.radius}",
  color: "{content.color}",
  gap: "0.5rem",
  padding: "0.75rem"
};
var r79 = {
  root: o81
};

// node_modules/@primeuix/themes/dist/aura/tooltip/index.mjs
var r80 = {
  maxWidth: "12.5rem",
  gutter: "0.25rem",
  shadow: "{overlay.popover.shadow}",
  padding: "0.5rem 0.75rem",
  borderRadius: "{overlay.popover.border.radius}"
};
var o82 = {
  light: {
    root: {
      background: "{surface.700}",
      color: "{surface.0}"
    }
  },
  dark: {
    root: {
      background: "{surface.700}",
      color: "{surface.0}"
    }
  }
};
var e53 = {
  root: r80,
  colorScheme: o82
};

// node_modules/@primeuix/themes/dist/aura/tree/index.mjs
var o83 = {
  background: "{content.background}",
  color: "{content.color}",
  padding: "1rem",
  gap: "2px",
  indent: "1rem",
  transitionDuration: "{transition.duration}"
};
var r81 = {
  padding: "0.25rem 0.5rem",
  borderRadius: "{content.border.radius}",
  hoverBackground: "{content.hover.background}",
  selectedBackground: "{highlight.background}",
  color: "{text.color}",
  hoverColor: "{text.hover.color}",
  selectedColor: "{highlight.color}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "-1px",
    shadow: "{focus.ring.shadow}"
  },
  gap: "0.25rem"
};
var e54 = {
  color: "{text.muted.color}",
  hoverColor: "{text.hover.muted.color}",
  selectedColor: "{highlight.color}"
};
var t39 = {
  borderRadius: "50%",
  size: "1.75rem",
  hoverBackground: "{content.hover.background}",
  selectedHoverBackground: "{content.background}",
  color: "{text.muted.color}",
  hoverColor: "{text.hover.muted.color}",
  selectedHoverColor: "{primary.color}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var n37 = {
  size: "2rem"
};
var c25 = {
  margin: "0 0 0.5rem 0"
};
var css2 = "\n    .p-tree-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var d31 = {
  root: o83,
  node: r81,
  nodeIcon: e54,
  nodeToggleButton: t39,
  loadingIcon: n37,
  filter: c25,
  css: css2
};

// node_modules/@primeuix/themes/dist/aura/treeselect/index.mjs
var o84 = {
  background: "{form.field.background}",
  disabledBackground: "{form.field.disabled.background}",
  filledBackground: "{form.field.filled.background}",
  filledHoverBackground: "{form.field.filled.hover.background}",
  filledFocusBackground: "{form.field.filled.focus.background}",
  borderColor: "{form.field.border.color}",
  hoverBorderColor: "{form.field.hover.border.color}",
  focusBorderColor: "{form.field.focus.border.color}",
  invalidBorderColor: "{form.field.invalid.border.color}",
  color: "{form.field.color}",
  disabledColor: "{form.field.disabled.color}",
  placeholderColor: "{form.field.placeholder.color}",
  invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
  shadow: "{form.field.shadow}",
  paddingX: "{form.field.padding.x}",
  paddingY: "{form.field.padding.y}",
  borderRadius: "{form.field.border.radius}",
  focusRing: {
    width: "{form.field.focus.ring.width}",
    style: "{form.field.focus.ring.style}",
    color: "{form.field.focus.ring.color}",
    offset: "{form.field.focus.ring.offset}",
    shadow: "{form.field.focus.ring.shadow}"
  },
  transitionDuration: "{form.field.transition.duration}",
  sm: {
    fontSize: "{form.field.sm.font.size}",
    paddingX: "{form.field.sm.padding.x}",
    paddingY: "{form.field.sm.padding.y}"
  },
  lg: {
    fontSize: "{form.field.lg.font.size}",
    paddingX: "{form.field.lg.padding.x}",
    paddingY: "{form.field.lg.padding.y}"
  }
};
var r82 = {
  width: "2.5rem",
  color: "{form.field.icon.color}"
};
var d32 = {
  background: "{overlay.select.background}",
  borderColor: "{overlay.select.border.color}",
  borderRadius: "{overlay.select.border.radius}",
  color: "{overlay.select.color}",
  shadow: "{overlay.select.shadow}"
};
var l16 = {
  padding: "{list.padding}"
};
var e55 = {
  padding: "{list.option.padding}"
};
var i26 = {
  borderRadius: "{border.radius.sm}"
};
var f9 = {
  color: "{form.field.icon.color}"
};
var a40 = {
  root: o84,
  dropdown: r82,
  overlay: d32,
  tree: l16,
  emptyMessage: e55,
  chip: i26,
  clearIcon: f9
};

// node_modules/@primeuix/themes/dist/aura/treetable/index.mjs
var o85 = {
  transitionDuration: "{transition.duration}"
};
var r83 = {
  background: "{content.background}",
  borderColor: "{treetable.border.color}",
  color: "{content.color}",
  borderWidth: "0 0 1px 0",
  padding: "0.75rem 1rem"
};
var e56 = {
  background: "{content.background}",
  hoverBackground: "{content.hover.background}",
  selectedBackground: "{highlight.background}",
  borderColor: "{treetable.border.color}",
  color: "{content.color}",
  hoverColor: "{content.hover.color}",
  selectedColor: "{highlight.color}",
  gap: "0.5rem",
  padding: "0.75rem 1rem",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "-1px",
    shadow: "{focus.ring.shadow}"
  }
};
var t40 = {
  fontWeight: "600"
};
var c26 = {
  background: "{content.background}",
  hoverBackground: "{content.hover.background}",
  selectedBackground: "{highlight.background}",
  color: "{content.color}",
  hoverColor: "{content.hover.color}",
  selectedColor: "{highlight.color}",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "-1px",
    shadow: "{focus.ring.shadow}"
  }
};
var n38 = {
  borderColor: "{treetable.border.color}",
  padding: "0.75rem 1rem",
  gap: "0.5rem"
};
var l17 = {
  background: "{content.background}",
  borderColor: "{treetable.border.color}",
  color: "{content.color}",
  padding: "0.75rem 1rem"
};
var d33 = {
  fontWeight: "600"
};
var a41 = {
  background: "{content.background}",
  borderColor: "{treetable.border.color}",
  color: "{content.color}",
  borderWidth: "0 0 1px 0",
  padding: "0.75rem 1rem"
};
var i27 = {
  width: "0.5rem"
};
var g5 = {
  width: "1px",
  color: "{primary.color}"
};
var s10 = {
  color: "{text.muted.color}",
  hoverColor: "{text.hover.muted.color}",
  size: "0.875rem"
};
var u6 = {
  size: "2rem"
};
var b4 = {
  hoverBackground: "{content.hover.background}",
  selectedHoverBackground: "{content.background}",
  color: "{text.muted.color}",
  hoverColor: "{text.color}",
  selectedHoverColor: "{primary.color}",
  size: "1.75rem",
  borderRadius: "50%",
  focusRing: {
    width: "{focus.ring.width}",
    style: "{focus.ring.style}",
    color: "{focus.ring.color}",
    offset: "{focus.ring.offset}",
    shadow: "{focus.ring.shadow}"
  }
};
var h4 = {
  borderColor: "{content.border.color}",
  borderWidth: "0 0 1px 0"
};
var m3 = {
  borderColor: "{content.border.color}",
  borderWidth: "0 0 1px 0"
};
var f10 = {
  light: {
    root: {
      borderColor: "{content.border.color}"
    },
    bodyCell: {
      selectedBorderColor: "{primary.100}"
    }
  },
  dark: {
    root: {
      borderColor: "{surface.800}"
    },
    bodyCell: {
      selectedBorderColor: "{primary.900}"
    }
  }
};
var css3 = "\n    .p-treetable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var k3 = {
  root: o85,
  header: r83,
  headerCell: e56,
  columnTitle: t40,
  row: c26,
  bodyCell: n38,
  footerCell: l17,
  columnFooter: d33,
  footer: a41,
  columnResizer: i27,
  resizeIndicator: g5,
  sortIcon: s10,
  loadingIcon: u6,
  nodeToggleButton: b4,
  paginatorTop: h4,
  paginatorBottom: m3,
  colorScheme: f10,
  css: css3
};

// node_modules/@primeuix/themes/dist/aura/virtualscroller/index.mjs
var o86 = {
  mask: {
    background: "{content.background}",
    color: "{text.muted.color}"
  },
  icon: {
    size: "2rem"
  }
};
var e57 = {
  loader: o86
};

// node_modules/@primeng/themes/aura/index.mjs
var km = __spreadProps(__spreadValues({}, e5), {
  components: {
    accordion: c,
    autocomplete: a,
    avatar: n,
    badge: d2,
    blockui: o6,
    breadcrumb: t3,
    button: e6,
    datepicker: k2,
    card: d3,
    carousel: t5,
    cascadeselect: f2,
    checkbox: e9,
    chip: s2,
    colorpicker: s3,
    confirmdialog: r15,
    confirmpopup: a6,
    contextmenu: c6,
    dataview: c8,
    datatable: v,
    dialog: e17,
    divider: t10,
    dock: d9,
    drawer: e19,
    editor: l7,
    fieldset: e21,
    fileupload: i10,
    iftalabel: i13,
    floatlabel: d13,
    galleria: l8,
    iconfield: r30,
    image: e24,
    imagecompare: r32,
    inlinemessage: a16,
    inplace: n12,
    inputchips: f6,
    inputgroup: o37,
    inputnumber: a17,
    inputotp: e27,
    inputtext: d16,
    knob: c11,
    listbox: n14,
    megamenu: g4,
    menu: r42,
    menubar: e30,
    message: u4,
    metergroup: b3,
    multiselect: n19,
    orderlist: o48,
    organizationchart: n20,
    overlaybadge: t23,
    popover: e38,
    paginator: n21,
    password: n24,
    panel: a25,
    panelmenu: a26,
    picklist: o55,
    progressbar: t27,
    progressspinner: r56,
    radiobutton: e40,
    rating: i21,
    ripple: o61,
    scrollpanel: a29,
    select: n25,
    selectbutton: d24,
    skeleton: o65,
    slider: a32,
    speeddial: a33,
    splitter: t30,
    splitbutton: d25,
    stepper: i23,
    steps: c17,
    tabmenu: n30,
    tabs: i24,
    tabview: e47,
    textarea: d28,
    tieredmenu: c21,
    tag: n33,
    terminal: e48,
    timeline: d29,
    togglebutton: c23,
    toggleswitch: c24,
    tree: d31,
    treeselect: a40,
    treetable: k3,
    toast: u5,
    toolbar: r79,
    tooltip: e53,
    virtualscroller: e57
  }
});

// src/app/core/guards/auth.guard.ts
var authGuard = (route, state2) => {
  const authState = inject(AuthStateService);
  const router = inject(Router);
  if (!authState.isAuthenticated) {
    router.navigate(["/auth/login"], { queryParams: { returnUrl: state2.url } });
    return false;
  }
  const requiredRoles = route.data?.["roles"];
  if (requiredRoles && requiredRoles.length > 0) {
    const userRoles = authState.roles;
    const hasRequiredRole = requiredRoles.some((role) => userRoles.includes(role));
    if (!hasRequiredRole) {
      router.navigate(["/admin/dashboard"]);
      return false;
    }
  }
  const url = state2.url.split("?")[0];
  if (url.startsWith("/admin/") && url !== "/admin/dashboard") {
    if (authState.isSystemAdmin)
      return true;
    const privileges = authState.privileges;
    if (privileges.length > 0) {
      const hasAccess = privileges.some((p4) => p4.url && url.startsWith(p4.url));
      if (!hasAccess) {
        router.navigate(["/admin/dashboard"]);
        return false;
      }
    }
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  // Login (uses LoginLayout)
  {
    path: "auth",
    loadComponent: () => import("./chunk-FQBGHK23.js").then((m4) => m4.LoginLayoutComponent),
    children: [
      { path: "login", loadComponent: () => import("./chunk-ZK2C2LWE.js").then((m4) => m4.LoginComponent) },
      { path: "", redirectTo: "login", pathMatch: "full" }
    ]
  },
  // Admin Portal
  {
    path: "admin",
    loadComponent: () => import("./chunk-AP2RHE67.js").then((m4) => m4.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-CZFM42U5.js").then((m4) => m4.AdminDashboardComponent) },
      { path: "agents", loadComponent: () => import("./chunk-7DQ56GXO.js").then((m4) => m4.AgentManagementComponent) },
      { path: "static-values", loadComponent: () => import("./chunk-LTHTNE56.js").then((m4) => m4.SetupFieldsComponent) },
      { path: "transactions", loadComponent: () => import("./chunk-VOLG4KT4.js").then((m4) => m4.AdminTransactionsComponent) },
      { path: "transactions/:id", loadComponent: () => import("./chunk-G3XZ674D.js").then((m4) => m4.TransactionDetailComponent) },
      { path: "customer-register", loadComponent: () => import("./chunk-O3FNGUSU.js").then((m4) => m4.CustomerRegisterComponent) },
      { path: "customer-report", loadComponent: () => import("./chunk-TPL3PWVH.js").then((m4) => m4.CustomerReportComponent) },
      { path: "receivers", loadComponent: () => import("./chunk-OG2NHOCE.js").then((m4) => m4.ReceiversComponent) },
      { path: "rates", loadComponent: () => import("./chunk-IGWL2CWE.js").then((m4) => m4.ExchangeRatesComponent) },
      { path: "commissions", loadComponent: () => import("./chunk-XL7WS4MI.js").then((m4) => m4.CommissionsComponent) },
      { path: "routing", loadComponent: () => import("./chunk-EUK5R2GJ.js").then((m4) => m4.RoutingComponent) },
      { path: "accounting", loadComponent: () => import("./chunk-IN7ZMMH7.js").then((m4) => m4.AccountingComponent) },
      { path: "compliance", loadComponent: () => import("./chunk-KKYJ4437.js").then((m4) => m4.ComplianceComponent) },
      { path: "compliance-setup", loadComponent: () => import("./chunk-TPU7Q4HF.js").then((m4) => m4.ComplianceSetupComponent) },
      { path: "sanctions", loadComponent: () => import("./chunk-4XFHPEWA.js").then((m4) => m4.SanctionsComponent) },
      { path: "reports/agent-statement", loadComponent: () => import("./chunk-H25QMFZM.js").then((m4) => m4.AgentStatementComponent) },
      { path: "reports/transactions", loadComponent: () => import("./chunk-IZ6YP3CM.js").then((m4) => m4.TransactionReportComponent) },
      { path: "reports/commissions", loadComponent: () => import("./chunk-XDJPTDEN.js").then((m4) => m4.CommissionReportComponent) },
      { path: "reports/revenue", loadComponent: () => import("./chunk-LIFLUAJO.js").then((m4) => m4.RevenueReportComponent) },
      { path: "reports/settlement", loadComponent: () => import("./chunk-54HBIXLU.js").then((m4) => m4.SettlementReportComponent) },
      { path: "user-management/roles", loadComponent: () => import("./chunk-SRNUQ6NU.js").then((m4) => m4.RolesComponent) },
      { path: "user-management/users", loadComponent: () => import("./chunk-RDMCQKZK.js").then((m4) => m4.UsersComponent) },
      { path: "settings", loadComponent: () => import("./chunk-UVO4OQIF.js").then((m4) => m4.SettingsComponent) },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  // Agent Portal
  {
    path: "agent",
    loadComponent: () => import("./chunk-ZRJ7QTZ2.js").then((m4) => m4.AgentLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-ACTMK2JV.js").then((m4) => m4.AgentDashboardComponent) },
      { path: "send", loadComponent: () => import("./chunk-GLNHFTDS.js").then((m4) => m4.SendMoneyComponent) },
      { path: "transactions", loadComponent: () => import("./chunk-MDUN4FDY.js").then((m4) => m4.AgentTransactionsComponent) },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  // Customer Portal
  {
    path: "customer",
    loadComponent: () => import("./chunk-5MQANJR7.js").then((m4) => m4.CustomerLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-CKY7I5LX.js").then((m4) => m4.CustomerDashboardComponent) },
      { path: "send", loadComponent: () => import("./chunk-A7C4GU4Q.js").then((m4) => m4.CustomerSendComponent) },
      { path: "transactions", loadComponent: () => import("./chunk-PIIYM4ZZ.js").then((m4) => m4.CustomerTransactionsComponent) },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  // Default redirect
  { path: "", redirectTo: "auth/login", pathMatch: "full" },
  { path: "**", redirectTo: "auth/login" }
];

// src/app/core/interceptors/auth.interceptor.ts
var isRefreshing = false;
var refreshTokenSubject = new BehaviorSubject(null);
var authInterceptor = (req, next) => {
  const authState = inject(AuthStateService);
  const router = inject(Router);
  const http = inject(HttpClient);
  const isAuthEndpoint = req.url.includes("/auth/login") || req.url.includes("/auth/refresh");
  let authReq = req;
  if (authState.isAuthenticated && !isAuthEndpoint) {
    authReq = addToken(req, authState.token);
  }
  return next(authReq).pipe(catchError((error) => {
    if (error instanceof HttpErrorResponse && error.status === 401 && !isAuthEndpoint) {
      return handle401Error(authReq, next, authState, router, http);
    }
    return throwError(() => error);
  }));
};
function addToken(request, token) {
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
}
function handle401Error(request, next, authState, router, http) {
  if (!isRefreshing) {
    isRefreshing = true;
    refreshTokenSubject.next(null);
    const currentRefreshToken = authState.refreshToken;
    if (!currentRefreshToken) {
      isRefreshing = false;
      authState.logout();
      router.navigate(["/auth/login"]);
      return throwError(() => new HttpErrorResponse({ status: 401 }));
    }
    return http.post(`${environment.apiUrl}api/auth/refresh`, { refreshToken: currentRefreshToken }).pipe(switchMap((response) => {
      isRefreshing = false;
      if (response?.success && response.data) {
        authState.updateTokens(response.data.token, response.data.refreshToken);
        refreshTokenSubject.next(response.data.token);
        return next(addToken(request, response.data.token));
      }
      authState.logout();
      router.navigate(["/auth/login"]);
      return throwError(() => new HttpErrorResponse({ status: 401 }));
    }), catchError((err) => {
      isRefreshing = false;
      authState.logout();
      router.navigate(["/auth/login"]);
      return throwError(() => err);
    }));
  }
  return refreshTokenSubject.pipe(filter((token) => token !== null), take(1), switchMap((token) => next(addToken(request, token))));
}

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: km,
        options: { darkModeSelector: ".dark" }
      }
    }),
    provideEchartsCore({ echarts: () => import("./chunk-73NSNWLR.js").then((m4) => m4.default) }),
    MessageService
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v19.2.20
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
