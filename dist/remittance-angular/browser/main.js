import {
  animate,
  animateChild,
  query,
  sequence,
  state,
  style,
  transition,
  trigger
} from "./chunk-3CFLOBS2.js";
import {
  Router,
  RouterOutlet,
  provideRouter
} from "./chunk-ZMWNDU6W.js";
import {
  EventBus,
  FilterMatchMode,
  MessageService,
  PrimeTemplate,
  SharedModule,
  getKeyValue,
  isArray,
  isEmpty,
  isNotEmpty,
  isNumber,
  isObject,
  isString,
  matchRegex,
  minifyCSS,
  resolve,
  setAttribute,
  setAttributes,
  toKebabCase,
  toTokenKey,
  uuid
} from "./chunk-BEKM3RIS.js";
import {
  AuthStateService,
  environment
} from "./chunk-MKKXXFYO.js";
import {
  CommonModule,
  DOCUMENT,
  DomRendererFactory2,
  HttpClient,
  HttpErrorResponse,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  bootstrapApplication,
  isPlatformServer,
  provideHttpClient,
  withInterceptors
} from "./chunk-DBW47J2B.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  ViewChild,
  ViewEncapsulation,
  __spreadValues,
  booleanAttribute,
  catchError,
  effect,
  filter,
  inject,
  makeEnvironmentProviders,
  numberAttribute,
  performanceMarkFeature,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  switchMap,
  take,
  throwError,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
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
} from "./chunk-J3ROLHMS.js";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id2, _renderer) {
    super();
    this._id = _id2;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// node_modules/@primeuix/styled/index.mjs
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source) if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source)) {
    if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
  }
  return target;
};
var ThemeService = EventBus();
var service_default = ThemeService;
function merge(value1, value2) {
  if (isArray(value1)) {
    value1.push(...value2 || []);
  } else if (isObject(value1)) {
    Object.assign(value1, value2);
  }
}
function toValue(value) {
  return isObject(value) && value.hasOwnProperty("value") && value.hasOwnProperty("type") ? value.value : value;
}
function toNormalizePrefix(prefix) {
  return prefix.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function toNormalizeVariable(prefix = "", variable = "") {
  return toNormalizePrefix(`${isString(prefix, false) && isString(variable, false) ? `${prefix}-` : prefix}${variable}`);
}
function getVariableName(prefix = "", variable = "") {
  return `--${toNormalizeVariable(prefix, variable)}`;
}
function hasOddBraces(str = "") {
  const openBraces = (str.match(/{/g) || []).length;
  const closeBraces = (str.match(/}/g) || []).length;
  return (openBraces + closeBraces) % 2 !== 0;
}
function getVariableValue(value, variable = "", prefix = "", excludedKeyRegexes = [], fallback) {
  if (isString(value)) {
    const regex = /{([^}]*)}/g;
    const val = value.trim();
    if (hasOddBraces(val)) {
      return void 0;
    } else if (matchRegex(val, regex)) {
      const _val = val.replaceAll(regex, (v) => {
        const path = v.replace(/{|}/g, "");
        const keys = path.split(".").filter((_v) => !excludedKeyRegexes.some((_r) => matchRegex(_v, _r)));
        return `var(${getVariableName(prefix, toKebabCase(keys.join("-")))}${isNotEmpty(fallback) ? `, ${fallback}` : ""})`;
      });
      const calculationRegex = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
      const cleanedVarRegex = /var\([^)]+\)/g;
      return matchRegex(_val.replace(cleanedVarRegex, "0"), calculationRegex) ? `calc(${_val})` : _val;
    }
    return val;
  } else if (isNumber(value)) {
    return value;
  }
  return void 0;
}
function setProperty(properties, key, value) {
  if (isString(key, false)) {
    properties.push(`${key}:${value};`);
  }
}
function getRule(selector, properties) {
  if (selector) {
    return `${selector}{${properties}}`;
  }
  return "";
}
var dt = (...args) => {
  return dtwt(config_default.getTheme(), ...args);
};
var dtwt = (theme3 = {}, tokenPath, fallback, type) => {
  if (tokenPath) {
    const {
      variable: VARIABLE,
      options: OPTIONS
    } = config_default.defaults || {};
    const {
      prefix,
      transform
    } = (theme3 == null ? void 0 : theme3.options) || OPTIONS || {};
    const regex = /{([^}]*)}/g;
    const token = matchRegex(tokenPath, regex) ? tokenPath : `{${tokenPath}}`;
    const isStrictTransform = type === "value" || isEmpty(type) && transform === "strict";
    return isStrictTransform ? config_default.getTokenValue(tokenPath) : getVariableValue(token, void 0, prefix, [VARIABLE.excludedKeyRegex], fallback);
  }
  return "";
};
function toVariables_default(theme3, options = {}) {
  const VARIABLE = config_default.defaults.variable;
  const {
    prefix = VARIABLE.prefix,
    selector = VARIABLE.selector,
    excludedKeyRegex = VARIABLE.excludedKeyRegex
  } = options;
  const _toVariables = (_theme, _prefix = "") => {
    return Object.entries(_theme).reduce((acc, [key, value]) => {
      const px = matchRegex(key, excludedKeyRegex) ? toNormalizeVariable(_prefix) : toNormalizeVariable(_prefix, toKebabCase(key));
      const v = toValue(value);
      if (isObject(v)) {
        const {
          variables: variables2,
          tokens: tokens2
        } = _toVariables(v, px);
        merge(acc["tokens"], tokens2);
        merge(acc["variables"], variables2);
      } else {
        acc["tokens"].push((prefix ? px.replace(`${prefix}-`, "") : px).replaceAll("-", "."));
        setProperty(acc["variables"], getVariableName(px), getVariableValue(v, px, prefix, [excludedKeyRegex]));
      }
      return acc;
    }, {
      variables: [],
      tokens: []
    });
  };
  const {
    variables,
    tokens
  } = _toVariables(theme3, prefix);
  return {
    value: variables,
    tokens,
    declarations: variables.join(""),
    css: getRule(selector, variables.join(""))
  };
}
var themeUtils_default = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(value) {
          return {
            type: "class",
            selector: value,
            matched: this.pattern.test(value.trim())
          };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(value) {
          return {
            type: "attr",
            selector: `:root${value}`,
            matched: this.pattern.test(value.trim())
          };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(value) {
          return {
            type: "media",
            selector: `${value}{:root{[CSS]}}`,
            matched: this.pattern.test(value.trim())
          };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(value) {
          return {
            type: "system",
            selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}",
            matched: this.pattern.test(value.trim())
          };
        }
      },
      custom: {
        resolve(value) {
          return {
            type: "custom",
            selector: value,
            matched: true
          };
        }
      }
    },
    resolve(value) {
      const rules = Object.keys(this.rules).filter((k) => k !== "custom").map((r) => this.rules[r]);
      return [value].flat().map((v) => {
        var _a;
        return (_a = rules.map((r) => r.resolve(v)).find((rr) => rr.matched)) != null ? _a : this.rules.custom.resolve(v);
      });
    }
  },
  _toVariables(theme3, options) {
    return toVariables_default(theme3, {
      prefix: options == null ? void 0 : options.prefix
    });
  },
  getCommon({
    name = "",
    theme: theme3 = {},
    params,
    set,
    defaults
  }) {
    var _e, _f, _g, _h, _i, _j, _k;
    const {
      preset,
      options
    } = theme3;
    let primitive_css, primitive_tokens, semantic_css, semantic_tokens, global_css, global_tokens, style2;
    if (isNotEmpty(preset) && options.transform !== "strict") {
      const {
        primitive,
        semantic,
        extend
      } = preset;
      const _a = semantic || {}, {
        colorScheme
      } = _a, sRest = __objRest(_a, ["colorScheme"]);
      const _b = extend || {}, {
        colorScheme: eColorScheme
      } = _b, eRest = __objRest(_b, ["colorScheme"]);
      const _c = colorScheme || {}, {
        dark
      } = _c, csRest = __objRest(_c, ["dark"]);
      const _d = eColorScheme || {}, {
        dark: eDark
      } = _d, ecsRest = __objRest(_d, ["dark"]);
      const prim_var = isNotEmpty(primitive) ? this._toVariables({
        primitive
      }, options) : {};
      const sRest_var = isNotEmpty(sRest) ? this._toVariables({
        semantic: sRest
      }, options) : {};
      const csRest_var = isNotEmpty(csRest) ? this._toVariables({
        light: csRest
      }, options) : {};
      const csDark_var = isNotEmpty(dark) ? this._toVariables({
        dark
      }, options) : {};
      const eRest_var = isNotEmpty(eRest) ? this._toVariables({
        semantic: eRest
      }, options) : {};
      const ecsRest_var = isNotEmpty(ecsRest) ? this._toVariables({
        light: ecsRest
      }, options) : {};
      const ecsDark_var = isNotEmpty(eDark) ? this._toVariables({
        dark: eDark
      }, options) : {};
      const [prim_css, prim_tokens] = [(_e = prim_var.declarations) != null ? _e : "", prim_var.tokens];
      const [sRest_css, sRest_tokens] = [(_f = sRest_var.declarations) != null ? _f : "", sRest_var.tokens || []];
      const [csRest_css, csRest_tokens] = [(_g = csRest_var.declarations) != null ? _g : "", csRest_var.tokens || []];
      const [csDark_css, csDark_tokens] = [(_h = csDark_var.declarations) != null ? _h : "", csDark_var.tokens || []];
      const [eRest_css, eRest_tokens] = [(_i = eRest_var.declarations) != null ? _i : "", eRest_var.tokens || []];
      const [ecsRest_css, ecsRest_tokens] = [(_j = ecsRest_var.declarations) != null ? _j : "", ecsRest_var.tokens || []];
      const [ecsDark_css, ecsDark_tokens] = [(_k = ecsDark_var.declarations) != null ? _k : "", ecsDark_var.tokens || []];
      primitive_css = this.transformCSS(name, prim_css, "light", "variable", options, set, defaults);
      primitive_tokens = prim_tokens;
      const semantic_light_css = this.transformCSS(name, `${sRest_css}${csRest_css}`, "light", "variable", options, set, defaults);
      const semantic_dark_css = this.transformCSS(name, `${csDark_css}`, "dark", "variable", options, set, defaults);
      semantic_css = `${semantic_light_css}${semantic_dark_css}`;
      semantic_tokens = [.../* @__PURE__ */ new Set([...sRest_tokens, ...csRest_tokens, ...csDark_tokens])];
      const global_light_css = this.transformCSS(name, `${eRest_css}${ecsRest_css}color-scheme:light`, "light", "variable", options, set, defaults);
      const global_dark_css = this.transformCSS(name, `${ecsDark_css}color-scheme:dark`, "dark", "variable", options, set, defaults);
      global_css = `${global_light_css}${global_dark_css}`;
      global_tokens = [.../* @__PURE__ */ new Set([...eRest_tokens, ...ecsRest_tokens, ...ecsDark_tokens])];
      style2 = resolve(preset.css, {
        dt
      });
    }
    return {
      primitive: {
        css: primitive_css,
        tokens: primitive_tokens
      },
      semantic: {
        css: semantic_css,
        tokens: semantic_tokens
      },
      global: {
        css: global_css,
        tokens: global_tokens
      },
      style: style2
    };
  },
  getPreset({
    name = "",
    preset = {},
    options,
    params,
    set,
    defaults,
    selector
  }) {
    var _e, _f, _g;
    let p_css, p_tokens, p_style;
    if (isNotEmpty(preset) && options.transform !== "strict") {
      const _name = name.replace("-directive", "");
      const _a = preset, {
        colorScheme,
        extend,
        css: css22
      } = _a, vRest = __objRest(_a, ["colorScheme", "extend", "css"]);
      const _b = extend || {}, {
        colorScheme: eColorScheme
      } = _b, evRest = __objRest(_b, ["colorScheme"]);
      const _c = colorScheme || {}, {
        dark
      } = _c, csRest = __objRest(_c, ["dark"]);
      const _d = eColorScheme || {}, {
        dark: ecsDark
      } = _d, ecsRest = __objRest(_d, ["dark"]);
      const vRest_var = isNotEmpty(vRest) ? this._toVariables({
        [_name]: __spreadValues2(__spreadValues2({}, vRest), evRest)
      }, options) : {};
      const csRest_var = isNotEmpty(csRest) ? this._toVariables({
        [_name]: __spreadValues2(__spreadValues2({}, csRest), ecsRest)
      }, options) : {};
      const csDark_var = isNotEmpty(dark) ? this._toVariables({
        [_name]: __spreadValues2(__spreadValues2({}, dark), ecsDark)
      }, options) : {};
      const [vRest_css, vRest_tokens] = [(_e = vRest_var.declarations) != null ? _e : "", vRest_var.tokens || []];
      const [csRest_css, csRest_tokens] = [(_f = csRest_var.declarations) != null ? _f : "", csRest_var.tokens || []];
      const [csDark_css, csDark_tokens] = [(_g = csDark_var.declarations) != null ? _g : "", csDark_var.tokens || []];
      const light_variable_css = this.transformCSS(_name, `${vRest_css}${csRest_css}`, "light", "variable", options, set, defaults, selector);
      const dark_variable_css = this.transformCSS(_name, csDark_css, "dark", "variable", options, set, defaults, selector);
      p_css = `${light_variable_css}${dark_variable_css}`;
      p_tokens = [.../* @__PURE__ */ new Set([...vRest_tokens, ...csRest_tokens, ...csDark_tokens])];
      p_style = resolve(css22, {
        dt
      });
    }
    return {
      css: p_css,
      tokens: p_tokens,
      style: p_style
    };
  },
  getPresetC({
    name = "",
    theme: theme3 = {},
    params,
    set,
    defaults
  }) {
    var _a;
    const {
      preset,
      options
    } = theme3;
    const cPreset = (_a = preset == null ? void 0 : preset.components) == null ? void 0 : _a[name];
    return this.getPreset({
      name,
      preset: cPreset,
      options,
      params,
      set,
      defaults
    });
  },
  getPresetD({
    name = "",
    theme: theme3 = {},
    params,
    set,
    defaults
  }) {
    var _a;
    const dName = name.replace("-directive", "");
    const {
      preset,
      options
    } = theme3;
    const dPreset = (_a = preset == null ? void 0 : preset.directives) == null ? void 0 : _a[dName];
    return this.getPreset({
      name: dName,
      preset: dPreset,
      options,
      params,
      set,
      defaults
    });
  },
  applyDarkColorScheme(options) {
    return !(options.darkModeSelector === "none" || options.darkModeSelector === false);
  },
  getColorSchemeOption(options, defaults) {
    var _a;
    return this.applyDarkColorScheme(options) ? this.regex.resolve(options.darkModeSelector === true ? defaults.options.darkModeSelector : (_a = options.darkModeSelector) != null ? _a : defaults.options.darkModeSelector) : [];
  },
  getLayerOrder(name, options = {}, params, defaults) {
    const {
      cssLayer
    } = options;
    if (cssLayer) {
      const order = resolve(cssLayer.order || "primeui", params);
      return `@layer ${order}`;
    }
    return "";
  },
  getCommonStyleSheet({
    name = "",
    theme: theme3 = {},
    params,
    props = {},
    set,
    defaults
  }) {
    const common = this.getCommon({
      name,
      theme: theme3,
      params,
      set,
      defaults
    });
    const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
    return Object.entries(common || {}).reduce((acc, [key, value]) => {
      if (value == null ? void 0 : value.css) {
        const _css = minifyCSS(value == null ? void 0 : value.css);
        const id = `${key}-variables`;
        acc.push(`<style type="text/css" data-primevue-style-id="${id}" ${_props}>${_css}</style>`);
      }
      return acc;
    }, []).join("");
  },
  getStyleSheet({
    name = "",
    theme: theme3 = {},
    params,
    props = {},
    set,
    defaults
  }) {
    var _a;
    const options = {
      name,
      theme: theme3,
      params,
      set,
      defaults
    };
    const preset_css = (_a = name.includes("-directive") ? this.getPresetD(options) : this.getPresetC(options)) == null ? void 0 : _a.css;
    const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
    return preset_css ? `<style type="text/css" data-primevue-style-id="${name}-variables" ${_props}>${minifyCSS(preset_css)}</style>` : "";
  },
  createTokens(obj = {}, defaults, parentKey = "", parentPath = "", tokens = {}) {
    Object.entries(obj).forEach(([key, value]) => {
      const currentKey = matchRegex(key, defaults.variable.excludedKeyRegex) ? parentKey : parentKey ? `${parentKey}.${toTokenKey(key)}` : toTokenKey(key);
      const currentPath = parentPath ? `${parentPath}.${key}` : key;
      if (isObject(value)) {
        this.createTokens(value, defaults, currentKey, currentPath, tokens);
      } else {
        tokens[currentKey] || (tokens[currentKey] = {
          paths: [],
          computed(colorScheme, tokenPathMap = {}) {
            var _a, _b;
            if (this.paths.length === 1) {
              return (_a = this.paths[0]) == null ? void 0 : _a.computed(this.paths[0].scheme, tokenPathMap["binding"]);
            } else if (colorScheme && colorScheme !== "none") {
              return (_b = this.paths.find((p) => p.scheme === colorScheme)) == null ? void 0 : _b.computed(colorScheme, tokenPathMap["binding"]);
            }
            return this.paths.map((p) => p.computed(p.scheme, tokenPathMap[p.scheme]));
          }
        });
        tokens[currentKey].paths.push({
          path: currentPath,
          value,
          scheme: currentPath.includes("colorScheme.light") ? "light" : currentPath.includes("colorScheme.dark") ? "dark" : "none",
          computed(colorScheme, tokenPathMap = {}) {
            const regex = /{([^}]*)}/g;
            let computedValue = value;
            tokenPathMap["name"] = this.path;
            tokenPathMap["binding"] || (tokenPathMap["binding"] = {});
            if (matchRegex(value, regex)) {
              const val = value.trim();
              const _val = val.replaceAll(regex, (v) => {
                var _a;
                const path = v.replace(/{|}/g, "");
                const computed = (_a = tokens[path]) == null ? void 0 : _a.computed(colorScheme, tokenPathMap);
                return isArray(computed) && computed.length === 2 ? `light-dark(${computed[0].value},${computed[1].value})` : computed == null ? void 0 : computed.value;
              });
              const calculationRegex = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g;
              const cleanedVarRegex = /var\([^)]+\)/g;
              computedValue = matchRegex(_val.replace(cleanedVarRegex, "0"), calculationRegex) ? `calc(${_val})` : _val;
            }
            isEmpty(tokenPathMap["binding"]) && delete tokenPathMap["binding"];
            return {
              colorScheme,
              path: this.path,
              paths: tokenPathMap,
              value: computedValue.includes("undefined") ? void 0 : computedValue
            };
          }
        });
      }
    });
    return tokens;
  },
  getTokenValue(tokens, path, defaults) {
    var _a;
    const normalizePath = (str) => {
      const strArr = str.split(".");
      return strArr.filter((s) => !matchRegex(s.toLowerCase(), defaults.variable.excludedKeyRegex)).join(".");
    };
    const token = normalizePath(path);
    const colorScheme = path.includes("colorScheme.light") ? "light" : path.includes("colorScheme.dark") ? "dark" : void 0;
    const computedValues = [(_a = tokens[token]) == null ? void 0 : _a.computed(colorScheme)].flat().filter((computed) => computed);
    return computedValues.length === 1 ? computedValues[0].value : computedValues.reduce((acc = {}, computed) => {
      const _a2 = computed, {
        colorScheme: cs
      } = _a2, rest = __objRest(_a2, ["colorScheme"]);
      acc[cs] = rest;
      return acc;
    }, void 0);
  },
  getSelectorRule(selector1, selector2, type, css22) {
    return type === "class" || type === "attr" ? getRule(isNotEmpty(selector2) ? `${selector1}${selector2},${selector1} ${selector2}` : selector1, css22) : getRule(selector1, isNotEmpty(selector2) ? getRule(selector2, css22) : css22);
  },
  transformCSS(name, css22, mode, type, options = {}, set, defaults, selector) {
    if (isNotEmpty(css22)) {
      const {
        cssLayer
      } = options;
      if (type !== "style") {
        const colorSchemeOption = this.getColorSchemeOption(options, defaults);
        css22 = mode === "dark" ? colorSchemeOption.reduce((acc, {
          type: type2,
          selector: _selector
        }) => {
          if (isNotEmpty(_selector)) {
            acc += _selector.includes("[CSS]") ? _selector.replace("[CSS]", css22) : this.getSelectorRule(_selector, selector, type2, css22);
          }
          return acc;
        }, "") : getRule(selector != null ? selector : ":root", css22);
      }
      if (cssLayer) {
        const layerOptions = {
          name: "primeui",
          order: "primeui"
        };
        isObject(cssLayer) && (layerOptions.name = resolve(cssLayer.name, {
          name,
          type
        }));
        if (isNotEmpty(layerOptions.name)) {
          css22 = getRule(`@layer ${layerOptions.name}`, css22);
          set == null ? void 0 : set.layerNames(layerOptions.name);
        }
      }
      return css22;
    }
    return "";
  }
};
var config_default = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(newValues = {}) {
    const {
      theme: theme3
    } = newValues;
    if (theme3) {
      this._theme = __spreadProps(__spreadValues2({}, theme3), {
        options: __spreadValues2(__spreadValues2({}, this.defaults.options), theme3.options)
      });
      this._tokens = themeUtils_default.createTokens(this.preset, this.defaults);
      this.clearLoadedStyleNames();
    }
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var _a;
    return ((_a = this.theme) == null ? void 0 : _a.preset) || {};
  },
  get options() {
    var _a;
    return ((_a = this.theme) == null ? void 0 : _a.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(newValue) {
    this.update({
      theme: newValue
    });
    service_default.emit("theme:change", newValue);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(newValue) {
    this._theme = __spreadProps(__spreadValues2({}, this.theme), {
      preset: newValue
    });
    this._tokens = themeUtils_default.createTokens(newValue, this.defaults);
    this.clearLoadedStyleNames();
    service_default.emit("preset:change", newValue);
    service_default.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(newValue) {
    this._theme = __spreadProps(__spreadValues2({}, this.theme), {
      options: newValue
    });
    this.clearLoadedStyleNames();
    service_default.emit("options:change", newValue);
    service_default.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(layerName) {
    this._layerNames.add(layerName);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(tokenPath) {
    return themeUtils_default.getTokenValue(this.tokens, tokenPath, this.defaults);
  },
  getCommon(name = "", params) {
    return themeUtils_default.getCommon({
      name,
      theme: this.theme,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    });
  },
  getComponent(name = "", params) {
    const options = {
      name,
      theme: this.theme,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    };
    return themeUtils_default.getPresetC(options);
  },
  getDirective(name = "", params) {
    const options = {
      name,
      theme: this.theme,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    };
    return themeUtils_default.getPresetD(options);
  },
  getCustomPreset(name = "", preset, selector, params) {
    const options = {
      name,
      preset,
      options: this.options,
      selector,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    };
    return themeUtils_default.getPreset(options);
  },
  getLayerOrderCSS(name = "") {
    return themeUtils_default.getLayerOrder(name, this.options, {
      names: this.getLayerNames()
    }, this.defaults);
  },
  transformCSS(name = "", css22, type = "style", mode) {
    return themeUtils_default.transformCSS(name, css22, mode, type, this.options, {
      layerNames: this.setLayerNames.bind(this)
    }, this.defaults);
  },
  getCommonStyleSheet(name = "", params, props = {}) {
    return themeUtils_default.getCommonStyleSheet({
      name,
      theme: this.theme,
      params,
      props,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    });
  },
  getStyleSheet(name, params, props = {}) {
    return themeUtils_default.getStyleSheet({
      name,
      theme: this.theme,
      params,
      props,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    });
  },
  onStyleMounted(name) {
    this._loadingStyles.add(name);
  },
  onStyleUpdated(name) {
    this._loadingStyles.add(name);
  },
  onStyleLoaded(event, {
    name
  }) {
    if (this._loadingStyles.size) {
      this._loadingStyles.delete(name);
      service_default.emit(`theme:${name}:load`, event);
      !this._loadingStyles.size && service_default.emit("theme:load");
    }
  }
};

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var UseStyle = class _UseStyle {
  document = inject(DOCUMENT);
  use(css3, options = {}) {
    let isLoaded = false;
    let cssRef = css3;
    let styleRef = null;
    const {
      immediate = true,
      manual = false,
      name = `style_${++_id}`,
      id = void 0,
      media = void 0,
      nonce = void 0,
      first = false,
      props = {}
    } = options;
    if (!this.document) return;
    styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
    if (!styleRef.isConnected) {
      cssRef = css3;
      const HEAD = this.document.head;
      first && HEAD.firstChild ? HEAD.insertBefore(styleRef, HEAD.firstChild) : HEAD.appendChild(styleRef);
      setAttributes(styleRef, {
        type: "text/css",
        media,
        nonce,
        "data-primeng-style-id": name
      });
    }
    if (styleRef.textContent !== cssRef) {
      styleRef.textContent = cssRef;
    }
    return {
      id,
      name,
      el: styleRef,
      css: cssRef
    };
  }
  static \u0275fac = function UseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UseStyle,
    factory: _UseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-base.mjs
var base = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
var theme = ({
  dt: dt2
}) => `
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${dt2("disabled.opacity")};
}

.pi {
    font-size: ${dt2("icon.size")};
}

.p-icon {
    width: ${dt2("icon.size")};
    height: ${dt2("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${dt2("mask.background")};
    color: ${dt2("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${dt2("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${dt2("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${dt2("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${dt2("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`;
var css = ({
  dt: dt2
}) => `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${dt2("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`;
var BaseStyle = class _BaseStyle {
  name = "base";
  useStyle = inject(UseStyle);
  theme = void 0;
  css = void 0;
  classes = {};
  inlineStyles = {};
  load = (style2, options = {}, transform = (cs) => cs) => {
    const computedStyle = transform(resolve(style2, {
      dt
    }));
    return computedStyle ? this.useStyle.use(minifyCSS(computedStyle), __spreadValues({
      name: this.name
    }, options)) : {};
  };
  loadCSS = (options = {}) => {
    return this.load(this.css, options);
  };
  loadTheme = (options = {}, style2 = "") => {
    return this.load(this.theme, options, (computedStyle = "") => config_default.transformCSS(options.name || this.name, `${computedStyle}${style2}`));
  };
  loadGlobalCSS = (options = {}) => {
    return this.load(css, options);
  };
  loadGlobalTheme = (options = {}, style2 = "") => {
    return this.load(theme, options, (computedStyle = "") => config_default.transformCSS(options.name || this.name, `${computedStyle}${style2}`));
  };
  getCommonTheme = (params) => {
    return config_default.getCommon(this.name, params);
  };
  getComponentTheme = (params) => {
    return config_default.getComponent(this.name, params);
  };
  getDirectiveTheme = (params) => {
    return config_default.getDirective(this.name, params);
  };
  getPresetTheme = (preset, selector, params) => {
    return config_default.getCustomPreset(this.name, preset, selector, params);
  };
  getLayerOrderThemeCSS = () => {
    return config_default.getLayerOrderCSS(this.name);
  };
  getStyleSheet = (extendedCSS = "", props = {}) => {
    if (this.css) {
      const _css = resolve(this.css, {
        dt
      });
      const _style = minifyCSS(`${_css}${extendedCSS}`);
      const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
      return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
    }
    return "";
  };
  getCommonThemeStyleSheet = (params, props = {}) => {
    return config_default.getCommonStyleSheet(this.name, params, props);
  };
  getThemeStyleSheet = (params, props = {}) => {
    let css3 = [config_default.getStyleSheet(this.name, params, props)];
    if (this.theme) {
      const name = this.name === "base" ? "global-style" : `${this.name}-style`;
      const _css = resolve(this.theme, {
        dt
      });
      const _style = minifyCSS(config_default.transformCSS(name, _css));
      const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
      css3.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
    }
    return css3.join("");
  };
  static \u0275fac = function BaseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseStyle,
    factory: _BaseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class _ThemeProvider {
  // @todo define type for theme
  theme = signal(void 0);
  csp = signal({
    nonce: void 0
  });
  isThemeChanged = false;
  document = inject(DOCUMENT);
  baseStyle = inject(BaseStyle);
  constructor() {
    effect(() => {
      service_default.on("theme:change", (newTheme) => {
        untracked(() => {
          this.isThemeChanged = true;
          this.theme.set(newTheme);
        });
      });
    });
    effect(() => {
      const themeValue = this.theme();
      if (this.document && themeValue) {
        if (!this.isThemeChanged) {
          this.onThemeChange(themeValue);
        }
        this.isThemeChanged = false;
      }
    });
  }
  ngOnDestroy() {
    config_default.clearLoadedStyleNames();
    service_default.clear();
  }
  onThemeChange(value) {
    config_default.setTheme(value);
    if (this.document) {
      this.loadCommonTheme();
    }
  }
  loadCommonTheme() {
    if (this.theme() === "none") return;
    if (!config_default.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style2
      } = this.baseStyle.getCommonTheme?.() || {};
      const styleOptions = {
        nonce: this.csp?.()?.nonce
      };
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, styleOptions));
      this.baseStyle.loadGlobalTheme(__spreadValues({
        name: "global-style"
      }, styleOptions), style2);
      config_default.setLoadedStyleName("common");
    }
  }
  setThemeConfig(config) {
    const {
      theme: theme3,
      csp
    } = config || {};
    if (theme3) this.theme.set(theme3);
    if (csp) this.csp.set(csp);
  }
  static \u0275fac = function ThemeProvider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeProvider)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ThemeProvider,
    factory: _ThemeProvider.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var PrimeNG = class _PrimeNG extends ThemeProvider {
  ripple = signal(false);
  platformId = inject(PLATFORM_ID);
  inputStyle = signal(null);
  inputVariant = signal(null);
  overlayOptions = {};
  csp = signal({
    nonce: void 0
  });
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "Search results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    fileChosenMessage: "Files",
    noFileChosenMessage: "No file chosen",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  setConfig(config) {
    const {
      csp,
      ripple,
      inputStyle,
      inputVariant,
      theme: theme3,
      overlayOptions,
      translation,
      filterMatchModeOptions
    } = config || {};
    if (csp) this.csp.set(csp);
    if (ripple) this.ripple.set(ripple);
    if (inputStyle) this.inputStyle.set(inputStyle);
    if (inputVariant) this.inputVariant.set(inputVariant);
    if (overlayOptions) this.overlayOptions = overlayOptions;
    if (translation) this.setTranslation(translation);
    if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
    if (theme3) this.setThemeConfig({
      theme: theme3,
      csp
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PrimeNG_BaseFactory;
    return function PrimeNG_Factory(__ngFactoryType__) {
      return (\u0275PrimeNG_BaseFactory || (\u0275PrimeNG_BaseFactory = \u0275\u0275getInheritedFactory(_PrimeNG)))(__ngFactoryType__ || _PrimeNG);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PrimeNG,
    factory: _PrimeNG.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");

// node_modules/primeng/fesm2022/primeng-basecomponent.mjs
var BaseComponentStyle = class _BaseComponentStyle extends BaseStyle {
  name = "common";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseComponentStyle_BaseFactory;
    return function BaseComponentStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseComponentStyle_BaseFactory || (\u0275BaseComponentStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BaseComponentStyle)))(__ngFactoryType__ || _BaseComponentStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseComponentStyle,
    factory: _BaseComponentStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponentStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BaseComponent = class _BaseComponent {
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);
  el = inject(ElementRef);
  injector = inject(Injector);
  cd = inject(ChangeDetectorRef);
  renderer = inject(Renderer2);
  config = inject(PrimeNG);
  baseComponentStyle = inject(BaseComponentStyle);
  baseStyle = inject(BaseStyle);
  scopedStyleEl;
  rootEl;
  dt;
  get styleOptions() {
    return {
      nonce: this.config?.csp().nonce
    };
  }
  get _name() {
    return this.constructor.name.replace(/^_/, "").toLowerCase();
  }
  get componentStyle() {
    return this["_componentStyle"];
  }
  attrSelector = uuid("pc");
  themeChangeListeners = [];
  _getHostInstance(instance) {
    if (instance) {
      return instance ? this["hostName"] ? instance["name"] === this["hostName"] ? instance : this._getHostInstance(instance.parentInstance) : instance.parentInstance : void 0;
    }
  }
  _getOptionValue(options, key = "", params = {}) {
    return getKeyValue(options, key, params);
  }
  ngOnInit() {
    if (this.document) {
      this._loadStyles();
    }
  }
  ngAfterViewInit() {
    this.rootEl = this.el?.nativeElement;
    if (this.rootEl) {
      this.rootEl?.setAttribute(this.attrSelector, "");
    }
  }
  ngOnChanges(changes) {
    if (this.document && !isPlatformServer(this.platformId)) {
      const {
        dt: dt2
      } = changes;
      if (dt2 && dt2.currentValue) {
        this._loadScopedThemeStyles(dt2.currentValue);
        this._themeChangeListener(() => this._loadScopedThemeStyles(dt2.currentValue));
      }
    }
  }
  ngOnDestroy() {
    this._unloadScopedThemeStyles();
    this.themeChangeListeners.forEach((callback) => service_default.off("theme:change", callback));
  }
  _loadStyles() {
    const _load = () => {
      if (!base.isStyleNameLoaded("base")) {
        this.baseStyle.loadGlobalCSS(this.styleOptions);
        base.setLoadedStyleName("base");
      }
      this._loadThemeStyles();
    };
    _load();
    this._themeChangeListener(() => _load());
  }
  _loadCoreStyles() {
    if (!base.isStyleNameLoaded("base") && this._name) {
      this.baseComponentStyle.loadCSS(this.styleOptions);
      this.componentStyle && this.componentStyle?.loadCSS(this.styleOptions);
      base.setLoadedStyleName(this.componentStyle?.name);
    }
  }
  _loadThemeStyles() {
    if (!config_default.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style2
      } = this.componentStyle?.getCommonTheme?.() || {};
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, this.styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, this.styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, this.styleOptions));
      this.baseStyle.loadGlobalTheme(__spreadValues({
        name: "global-style"
      }, this.styleOptions), style2);
      config_default.setLoadedStyleName("common");
    }
    if (!config_default.isStyleNameLoaded(this.componentStyle?.name) && this.componentStyle?.name) {
      const {
        css: css3,
        style: style2
      } = this.componentStyle?.getComponentTheme?.() || {};
      this.componentStyle?.load(css3, __spreadValues({
        name: `${this.componentStyle?.name}-variables`
      }, this.styleOptions));
      this.componentStyle?.loadTheme(__spreadValues({
        name: `${this.componentStyle?.name}-style`
      }, this.styleOptions), style2);
      config_default.setLoadedStyleName(this.componentStyle?.name);
    }
    if (!config_default.isStyleNameLoaded("layer-order")) {
      const layerOrder = this.componentStyle?.getLayerOrderThemeCSS?.();
      this.baseStyle.load(layerOrder, __spreadValues({
        name: "layer-order",
        first: true
      }, this.styleOptions));
      config_default.setLoadedStyleName("layer-order");
    }
    if (this.dt) {
      this._loadScopedThemeStyles(this.dt);
      this._themeChangeListener(() => this._loadScopedThemeStyles(this.dt));
    }
  }
  _loadScopedThemeStyles(preset) {
    const {
      css: css3
    } = this.componentStyle?.getPresetTheme?.(preset, `[${this.attrSelector}]`) || {};
    const scopedStyle = this.componentStyle?.load(css3, __spreadValues({
      name: `${this.attrSelector}-${this.componentStyle?.name}`
    }, this.styleOptions));
    this.scopedStyleEl = scopedStyle?.el;
  }
  _unloadScopedThemeStyles() {
    this.scopedStyleEl?.remove();
  }
  _themeChangeListener(callback = () => {
  }) {
    base.clearLoadedStyleNames();
    service_default.on("theme:change", callback);
    this.themeChangeListeners.push(callback);
  }
  cx(arg, rest) {
    const classes2 = this.parent ? this.parent.componentStyle?.classes?.[arg] : this.componentStyle?.classes?.[arg];
    if (typeof classes2 === "function") {
      return classes2({
        instance: this
      });
    }
    return typeof classes2 === "string" ? classes2 : arg;
  }
  sx(arg) {
    const styles = this.componentStyle?.inlineStyles?.[arg];
    if (typeof styles === "function") {
      return styles({
        instance: this
      });
    }
    if (typeof styles === "string") {
      return styles;
    } else {
      return __spreadValues({}, styles);
    }
  }
  // cx(key = '', params = {}) {
  //     const classes = this.parent ? this.parent.componentStyle?.classes : this.componentStyle?.classes;
  //     return this._getOptionValue(classes({ instance: this._getHostInstance(this) }), key, { ...params });
  // }
  get parent() {
    return this["parentInstance"];
  }
  static \u0275fac = function BaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseComponent,
    inputs: {
      dt: "dt"
    },
    features: [\u0275\u0275ProvidersFeature([BaseComponentStyle, BaseStyle]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponent, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [BaseComponentStyle, BaseStyle]
    }]
  }], null, {
    dt: [{
      type: Input
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-baseicon.mjs
var _c0 = ["*"];
var css2 = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`;
var BaseIconStyle = class _BaseIconStyle extends BaseStyle {
  name = "baseicon";
  inlineStyles = css2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseIconStyle_BaseFactory;
    return function BaseIconStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseIconStyle_BaseFactory || (\u0275BaseIconStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BaseIconStyle)))(__ngFactoryType__ || _BaseIconStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseIconStyle,
    factory: _BaseIconStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIconStyle, [{
    type: Injectable
  }], null, null);
})();
var BaseIconClasses;
(function(BaseIconClasses2) {
  BaseIconClasses2["root"] = "p-icon";
})(BaseIconClasses || (BaseIconClasses = {}));
var BaseIcon = class _BaseIcon extends BaseComponent {
  label;
  spin = false;
  styleClass;
  role;
  ariaLabel;
  ariaHidden;
  ngOnInit() {
    super.ngOnInit();
    this.getAttributes();
  }
  getAttributes() {
    const isLabelEmpty = isEmpty(this.label);
    this.role = !isLabelEmpty ? "img" : void 0;
    this.ariaLabel = !isLabelEmpty ? this.label : void 0;
    this.ariaHidden = isLabelEmpty;
  }
  getClassNames() {
    return `p-icon ${this.styleClass ? this.styleClass + " " : ""}${this.spin ? "p-icon-spin" : ""}`;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseIcon_BaseFactory;
    return function BaseIcon_Factory(__ngFactoryType__) {
      return (\u0275BaseIcon_BaseFactory || (\u0275BaseIcon_BaseFactory = \u0275\u0275getInheritedFactory(_BaseIcon)))(__ngFactoryType__ || _BaseIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BaseIcon,
    selectors: [["ng-component"]],
    hostAttrs: [1, "p-component", "p-iconwrapper"],
    inputs: {
      label: "label",
      spin: [2, "spin", "spin", booleanAttribute],
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([BaseIconStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BaseIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIcon, [{
    type: Component,
    args: [{
      template: ` <ng-content></ng-content> `,
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BaseIconStyle],
      host: {
        class: "p-component p-iconwrapper"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }],
    spin: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }]
  });
})();

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

// node_modules/primeng/fesm2022/primeng-icons-times.mjs
var TimesIcon = class _TimesIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesIcon_BaseFactory;
    return function TimesIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesIcon_BaseFactory || (\u0275TimesIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesIcon)))(__ngFactoryType__ || _TimesIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesIcon,
    selectors: [["TimesIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z", "fill", "currentColor"]],
    template: function TimesIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesIcon, [{
    type: Component,
    args: [{
      selector: "TimesIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
                fill="currentColor"
            />
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

// node_modules/primeng/fesm2022/primeng-utils.mjs
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : {
      key,
      value: baseZIndex
    };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({
      key,
      value: newZIndex
    });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex(),
    generateZIndex,
    revertZIndex
  };
}
var zindexutils = ZIndexUtils();

// node_modules/primeng/fesm2022/primeng-toast.mjs
var _c02 = ["container"];
var _c1 = (a0, a1, a2, a3) => ({
  showTransformParams: a0,
  hideTransformParams: a1,
  showTransitionParams: a2,
  hideTransitionParams: a3
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
var theme2 = ({
  dt: dt2
}) => `
.p-toast {
    width: ${dt2("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${dt2("toast.icon.size")};
    width: ${dt2("toast.icon.size")};
    height: ${dt2("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${dt2("toast.content.padding")};
    gap: ${dt2("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${dt2("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${dt2("toast.summary.font.weight")};
    font-size: ${dt2("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${dt2("toast.detail.font.weight")};
    font-size: ${dt2("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${dt2("toast.transition.duration")}, color ${dt2("toast.transition.duration")}, outline-color ${dt2("toast.transition.duration")}, box-shadow ${dt2("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${dt2("toast.close.button.width")};
    height: ${dt2("toast.close.button.height")};
    border-radius: ${dt2("toast.close.button.border.radius")};
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
    border-width: ${dt2("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${dt2("toast.blur")});
    border-radius: ${dt2("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${dt2("toast.close.icon.size")};
    width: ${dt2("toast.close.icon.size")};
    height: ${dt2("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${dt2("focus.ring.width")};
    outline-style: ${dt2("focus.ring.style")};
    outline-offset: ${dt2("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${dt2("toast.info.background")};
    border-color: ${dt2("toast.info.border.color")};
    color: ${dt2("toast.info.color")};
    box-shadow: ${dt2("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${dt2("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${dt2("toast.info.close.button.focus.ring.color")};
    box-shadow: ${dt2("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${dt2("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${dt2("toast.success.background")};
    border-color: ${dt2("toast.success.border.color")};
    color: ${dt2("toast.success.color")};
    box-shadow: ${dt2("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${dt2("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${dt2("toast.success.close.button.focus.ring.color")};
    box-shadow: ${dt2("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${dt2("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${dt2("toast.warn.background")};
    border-color: ${dt2("toast.warn.border.color")};
    color: ${dt2("toast.warn.color")};
    box-shadow: ${dt2("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${dt2("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${dt2("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${dt2("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${dt2("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${dt2("toast.error.background")};
    border-color: ${dt2("toast.error.border.color")};
    color: ${dt2("toast.error.color")};
    box-shadow: ${dt2("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${dt2("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${dt2("toast.error.close.button.focus.ring.color")};
    box-shadow: ${dt2("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${dt2("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${dt2("toast.secondary.background")};
    border-color: ${dt2("toast.secondary.border.color")};
    color: ${dt2("toast.secondary.color")};
    box-shadow: ${dt2("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${dt2("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${dt2("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${dt2("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${dt2("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${dt2("toast.contrast.background")};
    border-color: ${dt2("toast.contrast.border.color")};
    color: ${dt2("toast.contrast.color")};
    box-shadow: ${dt2("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${dt2("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${dt2("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${dt2("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${dt2("toast.contrast.close.button.hover.background")};
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
  theme = theme2;
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
        \u0275\u0275viewQuery(_c02, 5);
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
          const filteredMessages = messages.filter((m) => this.canAdd(m));
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
    return collection.find((m) => {
      return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
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
        \u0275\u0275viewQuery(_c02, 5);
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
    const loadFn = () => this.moduleImpl ?? import("./chunk-S5KFA2J3.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
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
    }).catch((e) => {
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
      const hasAccess = privileges.some((p) => p.url && url.startsWith(p.url));
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
    loadComponent: () => import("./chunk-5G2NVD4I.js").then((m) => m.LoginLayoutComponent),
    children: [
      { path: "login", loadComponent: () => import("./chunk-KXUO57PE.js").then((m) => m.LoginComponent) },
      { path: "", redirectTo: "login", pathMatch: "full" }
    ]
  },
  // Admin Portal
  {
    path: "admin",
    loadComponent: () => import("./chunk-7WTIJI6T.js").then((m) => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-PPOPRPJZ.js").then((m) => m.AdminDashboardComponent) },
      { path: "agents", loadComponent: () => import("./chunk-JTV7ZDZM.js").then((m) => m.AgentManagementComponent) },
      { path: "static-values", loadComponent: () => import("./chunk-DWYT5MVT.js").then((m) => m.SetupFieldsComponent) },
      { path: "transactions", loadComponent: () => import("./chunk-GSO6LZN4.js").then((m) => m.AdminTransactionsComponent) },
      { path: "transactions/:id", loadComponent: () => import("./chunk-FHZXJQGU.js").then((m) => m.TransactionDetailComponent) },
      { path: "customer-register", loadComponent: () => import("./chunk-5XCGNAJK.js").then((m) => m.CustomerRegisterComponent) },
      { path: "customer-report", loadComponent: () => import("./chunk-FOUDD4DE.js").then((m) => m.CustomerReportComponent) },
      { path: "receivers", loadComponent: () => import("./chunk-XRO2Q6KD.js").then((m) => m.ReceiversComponent) },
      { path: "rates", loadComponent: () => import("./chunk-2NJRRDSZ.js").then((m) => m.ExchangeRatesComponent) },
      { path: "commissions", loadComponent: () => import("./chunk-ALSDME3J.js").then((m) => m.CommissionsComponent) },
      { path: "routing", loadComponent: () => import("./chunk-FQ5NL2VS.js").then((m) => m.RoutingComponent) },
      { path: "accounting", loadComponent: () => import("./chunk-WBBU6CKH.js").then((m) => m.AccountingComponent) },
      { path: "compliance", loadComponent: () => import("./chunk-EUUUO73Y.js").then((m) => m.ComplianceComponent) },
      { path: "compliance-setup", loadComponent: () => import("./chunk-EVHQC5QX.js").then((m) => m.ComplianceSetupComponent) },
      { path: "reports/agent-statement", loadComponent: () => import("./chunk-AYQ3MEPA.js").then((m) => m.AgentStatementComponent) },
      { path: "reports/transactions", loadComponent: () => import("./chunk-AH65SCXZ.js").then((m) => m.TransactionReportComponent) },
      { path: "reports/commissions", loadComponent: () => import("./chunk-I46TG6FA.js").then((m) => m.CommissionReportComponent) },
      { path: "reports/revenue", loadComponent: () => import("./chunk-HFAXYMQO.js").then((m) => m.RevenueReportComponent) },
      { path: "reports/settlement", loadComponent: () => import("./chunk-HJ4CVL6J.js").then((m) => m.SettlementReportComponent) },
      { path: "user-management/roles", loadComponent: () => import("./chunk-UBLTEU7D.js").then((m) => m.RolesComponent) },
      { path: "user-management/users", loadComponent: () => import("./chunk-U2TRGHT6.js").then((m) => m.UsersComponent) },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  // Agent Portal
  {
    path: "agent",
    loadComponent: () => import("./chunk-JI2E4BXD.js").then((m) => m.AgentLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-HHPUSQXB.js").then((m) => m.AgentDashboardComponent) },
      { path: "send", loadComponent: () => import("./chunk-7LMF2YN2.js").then((m) => m.SendMoneyComponent) },
      { path: "transactions", loadComponent: () => import("./chunk-TMGGC2LH.js").then((m) => m.AgentTransactionsComponent) },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  // Customer Portal
  {
    path: "customer",
    loadComponent: () => import("./chunk-3GO7KHYR.js").then((m) => m.CustomerLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-SQWI2C67.js").then((m) => m.CustomerDashboardComponent) },
      { path: "send", loadComponent: () => import("./chunk-LQJO7ZY4.js").then((m) => m.CustomerSendComponent) },
      { path: "transactions", loadComponent: () => import("./chunk-UCOOUUH2.js").then((m) => m.CustomerTransactionsComponent) },
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
    MessageService
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v19.2.20
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
