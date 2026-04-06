import {
  BaseComponent,
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  SpinnerIcon,
  TimesIcon,
  zindexutils
} from "./chunk-GHC7U5KS.js";
import {
  BaseStyle
} from "./chunk-W7U77T6R.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-IDEGBNL2.js";
import {
  OverlayService,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  absolutePosition,
  addClass,
  addStyle,
  appendChild,
  blockBodyScroll,
  find,
  findSingle,
  getFocusableElements,
  getHeight,
  getIndex,
  getOffset,
  getOuterHeight,
  getOuterWidth,
  getWidth,
  hasClass,
  isDate,
  isEmpty,
  isNotEmpty,
  isTouchDevice,
  relativePosition,
  remove,
  removeClass,
  setAttribute,
  unblockBodyScroll,
  uuid
} from "./chunk-4QJW7WCY.js";
import {
  NG_VALUE_ACCESSOR,
  NgModel
} from "./chunk-2KFDOCEQ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-L5OKKIXL.js";
import {
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-ZSYLPKXT.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  contentChild,
  effect,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-WKSQZMM4.js";
import "./chunk-QO67QQ3F.js";
import "./chunk-WMWTRTCA.js";
import "./chunk-PADBOZH3.js";
import "./chunk-S5KMCARS.js";

// node_modules/primeng/fesm2022/primeng-dom.mjs
var DomHandler = class _DomHandler {
  static zindex = 1e3;
  static calculatedScrollbarWidth = null;
  static calculatedScrollbarHeight = null;
  static browser;
  static addClass(element, className) {
    if (element && className) {
      if (element.classList) element.classList.add(className);
      else element.className += " " + className;
    }
  }
  static addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.trim().split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.className += " " + styles[i];
        }
      }
    }
  }
  static removeClass(element, className) {
    if (element && className) {
      if (element.classList) element.classList.remove(className);
      else element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  static removeMultipleClasses(element, classNames) {
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
    }
  }
  static hasClass(element, className) {
    if (element && className) {
      if (element.classList) return element.classList.contains(className);
      else return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  }
  static siblings(element) {
    return Array.prototype.filter.call(element.parentNode.children, function(child) {
      return child !== element;
    });
  }
  static find(element, selector) {
    return Array.from(element.querySelectorAll(selector));
  }
  static findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  }
  static index(element) {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element) return num;
      if (children[i].nodeType == 1) num++;
    }
    return -1;
  }
  static indexWithinGroup(element, attributeName) {
    let children = element.parentNode ? element.parentNode.childNodes : [];
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element) return num;
      if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1) num++;
    }
    return -1;
  }
  static appendOverlay(overlay, target, appendTo = "self") {
    if (appendTo !== "self" && overlay && target) {
      this.appendChild(overlay, target);
    }
  }
  static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
    if (overlay && target) {
      if (calculateMinWidth) {
        overlay.style.minWidth = `${_DomHandler.getOuterWidth(target)}px`;
      }
      if (appendTo === "self") {
        this.relativePosition(overlay, target);
      } else {
        this.absolutePosition(overlay, target);
      }
    }
  }
  static relativePosition(element, target, gutter = true) {
    const getClosestRelativeElement = (el) => {
      if (!el) return;
      return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
    };
    const elementDimensions = element.offsetParent ? {
      width: element.offsetWidth,
      height: element.offsetHeight
    } : this.getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    const relativeElement = getClosestRelativeElement(element);
    const relativeElementOffset = relativeElement?.getBoundingClientRect() || {
      top: -1 * windowScrollTop,
      left: -1 * windowScrollLeft
    };
    let top, left;
    if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
      top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
      element.style.transformOrigin = "bottom";
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight + targetOffset.top - relativeElementOffset.top;
      element.style.transformOrigin = "top";
    }
    const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
    const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
    if (elementDimensions.width > viewport.width) {
      left = (targetOffset.left - relativeElementOffset.left) * -1;
    } else if (horizontalOverflow > 0) {
      left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
    } else {
      left = targetOffset.left - relativeElementOffset.left;
    }
    element.style.top = top + "px";
    element.style.left = left + "px";
    gutter && (element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
  }
  static absolutePosition(element, target, gutter = true) {
    const elementDimensions = element.offsetParent ? {
      width: element.offsetWidth,
      height: element.offsetHeight
    } : this.getHiddenElementDimensions(element);
    const elementOuterHeight = elementDimensions.height;
    const elementOuterWidth = elementDimensions.width;
    const targetOuterHeight = target.offsetHeight;
    const targetOuterWidth = target.offsetWidth;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    let top, left;
    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      element.style.transformOrigin = "bottom";
      if (top < 0) {
        top = windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
      element.style.transformOrigin = "top";
    }
    if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
    else left = targetOffset.left + windowScrollLeft;
    element.style.top = top + "px";
    element.style.left = left + "px";
    gutter && (element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
  }
  static getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  }
  static getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  }
  static getHiddenElementOuterHeight(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementHeight = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementHeight;
  }
  static getHiddenElementOuterWidth(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementWidth = element.offsetWidth;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementWidth;
  }
  static getHiddenElementDimensions(element) {
    let dimensions = {};
    element.style.visibility = "hidden";
    element.style.display = "block";
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return dimensions;
  }
  static scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  }
  static fadeIn(element, duration) {
    element.style.opacity = 0;
    let last = +/* @__PURE__ */ new Date();
    let opacity = 0;
    let tick = function() {
      opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
      element.style.opacity = opacity;
      last = +/* @__PURE__ */ new Date();
      if (+opacity < 1) {
        window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
      }
    };
    tick();
  }
  static fadeOut(element, ms) {
    var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
    let fading = setInterval(() => {
      opacity = opacity - gap;
      if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
      }
      element.style.opacity = opacity;
    }, interval);
  }
  static getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  static getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }
  static matches(element, selector) {
    var p = Element.prototype;
    var f = p["matches"] || p.webkitMatchesSelector || p["mozMatchesSelector"] || p["msMatchesSelector"] || function(s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(element, selector);
  }
  static getOuterWidth(el, margin) {
    let width = el.offsetWidth;
    if (margin) {
      let style2 = getComputedStyle(el);
      width += parseFloat(style2.marginLeft) + parseFloat(style2.marginRight);
    }
    return width;
  }
  static getHorizontalPadding(el) {
    let style2 = getComputedStyle(el);
    return parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
  }
  static getHorizontalMargin(el) {
    let style2 = getComputedStyle(el);
    return parseFloat(style2.marginLeft) + parseFloat(style2.marginRight);
  }
  static innerWidth(el) {
    let width = el.offsetWidth;
    let style2 = getComputedStyle(el);
    width += parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
    return width;
  }
  static width(el) {
    let width = el.offsetWidth;
    let style2 = getComputedStyle(el);
    width -= parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
    return width;
  }
  static getInnerHeight(el) {
    let height = el.offsetHeight;
    let style2 = getComputedStyle(el);
    height += parseFloat(style2.paddingTop) + parseFloat(style2.paddingBottom);
    return height;
  }
  static getOuterHeight(el, margin) {
    let height = el.offsetHeight;
    if (margin) {
      let style2 = getComputedStyle(el);
      height += parseFloat(style2.marginTop) + parseFloat(style2.marginBottom);
    }
    return height;
  }
  static getHeight(el) {
    let height = el.offsetHeight;
    let style2 = getComputedStyle(el);
    height -= parseFloat(style2.paddingTop) + parseFloat(style2.paddingBottom) + parseFloat(style2.borderTopWidth) + parseFloat(style2.borderBottomWidth);
    return height;
  }
  static getWidth(el) {
    let width = el.offsetWidth;
    let style2 = getComputedStyle(el);
    width -= parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight) + parseFloat(style2.borderLeftWidth) + parseFloat(style2.borderRightWidth);
    return width;
  }
  static getViewport() {
    let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
    return {
      width: w,
      height: h
    };
  }
  static getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  static replaceElementWith(element, replacementElement) {
    let parentNode = element.parentNode;
    if (!parentNode) throw `Can't replace element`;
    return parentNode.replaceChild(replacementElement, element);
  }
  static getUserAgent() {
    if (navigator && this.isClient()) {
      return navigator.userAgent;
    }
  }
  static isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      return true;
    }
    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      var rv = ua.indexOf("rv:");
      return true;
    }
    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      return true;
    }
    return false;
  }
  static isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  }
  static isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  }
  static isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  static appendChild(element, target) {
    if (this.isElement(target)) target.appendChild(element);
    else if (target && target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);
    else throw "Cannot append " + target + " to " + element;
  }
  static removeChild(element, target) {
    if (this.isElement(target)) target.removeChild(element);
    else if (target.el && target.el.nativeElement) target.el.nativeElement.removeChild(element);
    else throw "Cannot remove " + element + " from " + target;
  }
  static removeElement(element) {
    if (!("remove" in Element.prototype)) element.parentNode.removeChild(element);
    else element.remove();
  }
  static isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  }
  static calculateScrollbarWidth(el) {
    if (el) {
      let style2 = getComputedStyle(el);
      return el.offsetWidth - el.clientWidth - parseFloat(style2.borderLeftWidth) - parseFloat(style2.borderRightWidth);
    } else {
      if (this.calculatedScrollbarWidth !== null) return this.calculatedScrollbarWidth;
      let scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }
  static calculateScrollbarHeight() {
    if (this.calculatedScrollbarHeight !== null) return this.calculatedScrollbarHeight;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarHeight;
    return scrollbarHeight;
  }
  static invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  }
  static clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  }
  static getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  }
  static resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  }
  static isInteger(value) {
    if (Number.isInteger) {
      return Number.isInteger(value);
    } else {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }
  }
  static isHidden(element) {
    return !element || element.offsetParent === null;
  }
  static isVisible(element) {
    return element && element.offsetParent != null;
  }
  static isExist(element) {
    return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
  }
  static focus(element, options) {
    element && document.activeElement !== element && element.focus(options);
  }
  static getFocusableSelectorString(selector = "") {
    return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`;
  }
  static getFocusableElements(element, selector = "") {
    let focusableElements = this.find(element, this.getFocusableSelectorString(selector));
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden") visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  }
  static getFocusableElement(element, selector = "") {
    let focusableElement = this.findSingle(element, this.getFocusableSelectorString(selector));
    if (focusableElement) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden") return focusableElement;
    }
    return null;
  }
  static getFirstFocusableElement(element, selector = "") {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  }
  static getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  }
  static getNextFocusableElement(element, reverse = false) {
    const focusableElements = _DomHandler.getFocusableElements(element);
    let index = 0;
    if (focusableElements && focusableElements.length > 0) {
      const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
      if (reverse) {
        if (focusedIndex == -1 || focusedIndex === 0) {
          index = focusableElements.length - 1;
        } else {
          index = focusedIndex - 1;
        }
      } else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) {
        index = focusedIndex + 1;
      }
    }
    return focusableElements[index];
  }
  static generateZIndex() {
    this.zindex = this.zindex || 999;
    return ++this.zindex;
  }
  static getSelection() {
    if (window.getSelection) return window.getSelection().toString();
    else if (document.getSelection) return document.getSelection().toString();
    else if (document["selection"]) return document["selection"].createRange().text;
    return null;
  }
  static getTargetElement(target, el) {
    if (!target) return null;
    switch (target) {
      case "document":
        return document;
      case "window":
        return window;
      case "@next":
        return el?.nextElementSibling;
      case "@prev":
        return el?.previousElementSibling;
      case "@parent":
        return el?.parentElement;
      case "@grandparent":
        return el?.parentElement.parentElement;
      default:
        const type = typeof target;
        if (type === "string") {
          return document.querySelector(target);
        } else if (type === "object" && target.hasOwnProperty("nativeElement")) {
          return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
        }
        const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
        const element = isFunction(target) ? target() : target;
        return element && element.nodeType === 9 || this.isExist(element) ? element : null;
    }
  }
  static isClient() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  static getAttribute(element, name) {
    if (element) {
      const value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === "true" || value === "false") {
        return value === "true";
      }
      return value;
    }
    return void 0;
  }
  static calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  }
  static blockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
    this.addClass(document.body, className);
  }
  static unblockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.removeProperty("--scrollbar-width");
    this.removeClass(document.body, className);
  }
  static createElement(type, attributes = {}, ...children) {
    if (type) {
      const element = document.createElement(type);
      this.setAttributes(element, attributes);
      element.append(...children);
      return element;
    }
    return void 0;
  }
  static setAttribute(element, attribute = "", value) {
    if (this.isElement(element) && value !== null && value !== void 0) {
      element.setAttribute(attribute, value);
    }
  }
  static setAttributes(element, attributes = {}) {
    if (this.isElement(element)) {
      const computedStyles = (rule, value) => {
        const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];
        return [value].flat().reduce((cv, v) => {
          if (v !== null && v !== void 0) {
            const type = typeof v;
            if (type === "string" || type === "number") {
              cv.push(v);
            } else if (type === "object") {
              const _cv = Array.isArray(v) ? computedStyles(rule, v) : Object.entries(v).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : !!_v ? _k : void 0);
              cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== void 0 && value !== null) {
          const matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === "pBind") {
            this.setAttributes(element, value);
          } else {
            value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  }
  static isFocusableElement(element, selector = "") {
    return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
  }
};
var ConnectedOverlayScrollHandler = class {
  element;
  listener;
  scrollableParents;
  constructor(element, listener = () => {
  }) {
    this.element = element;
    this.listener = listener;
  }
  bindScrollListener() {
    this.scrollableParents = DomHandler.getScrollableParents(this.element);
    for (let i = 0; i < this.scrollableParents.length; i++) {
      this.scrollableParents[i].addEventListener("scroll", this.listener);
    }
  }
  unbindScrollListener() {
    if (this.scrollableParents) {
      for (let i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].removeEventListener("scroll", this.listener);
      }
    }
  }
  destroy() {
    this.unbindScrollListener();
    this.element = null;
    this.listener = null;
    this.scrollableParents = null;
  }
};

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class _AutoFocus extends BaseComponent {
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @deprecated use [pAutoFocus]="true"
   * @group Props
   */
  autofocus = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  _autofocus = false;
  focused = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  host = inject(ElementRef);
  ngAfterContentChecked() {
    if (this.autofocus === false) {
      this.host.nativeElement.removeAttribute("autofocus");
    } else {
      this.host.nativeElement.setAttribute("autofocus", true);
    }
    if (!this.focused) {
      this.autoFocus();
    }
  }
  ngAfterViewChecked() {
    if (!this.focused) {
      this.autoFocus();
    }
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this._autofocus) {
      setTimeout(() => {
        const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      });
    }
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAutoFocus_BaseFactory;
    return function AutoFocus_Factory(__ngFactoryType__) {
      return (ɵAutoFocus_BaseFactory || (ɵAutoFocus_BaseFactory = ɵɵgetInheritedFactory(_AutoFocus)))(__ngFactoryType__ || _AutoFocus);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    inputs: {
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      _autofocus: [0, "pAutoFocus", "_autofocus"]
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true
    }]
  }], null, {
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }]
  });
})();
var AutoFocusModule = class _AutoFocusModule {
  static ɵfac = function AutoFocusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoFocusModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AutoFocusModule,
    imports: [AutoFocus],
    exports: [AutoFocus]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-badge.mjs
var theme = ({
  dt
}) => `
.p-badge {
    display: inline-flex;
    border-radius: ${dt("badge.border.radius")};
    justify-content: center;
    padding: ${dt("badge.padding")};
    background: ${dt("badge.primary.background")};
    color: ${dt("badge.primary.color")};
    font-size: ${dt("badge.font.size")};
    font-weight: ${dt("badge.font.weight")};
    min-width: ${dt("badge.min.width")};
    height: ${dt("badge.height")};
    line-height: ${dt("badge.height")};
}

.p-badge-dot {
    width: ${dt("badge.dot.size")};
    min-width: ${dt("badge.dot.size")};
    height: ${dt("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${dt("badge.secondary.background")};
    color: ${dt("badge.secondary.color")};
}

.p-badge-success {
    background: ${dt("badge.success.background")};
    color: ${dt("badge.success.color")};
}

.p-badge-info {
    background: ${dt("badge.info.background")};
    color: ${dt("badge.info.color")};
}

.p-badge-warn {
    background: ${dt("badge.warn.background")};
    color: ${dt("badge.warn.color")};
}

.p-badge-danger {
    background: ${dt("badge.danger.background")};
    color: ${dt("badge.danger.color")};
}

.p-badge-contrast {
    background: ${dt("badge.contrast.background")};
    color: ${dt("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${dt("badge.sm.font.size")};
    min-width: ${dt("badge.sm.min.width")};
    height: ${dt("badge.sm.height")};
    line-height: ${dt("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${dt("badge.lg.font.size")};
    min-width: ${dt("badge.lg.min.width")};
    height: ${dt("badge.lg.height")};
    line-height: ${dt("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${dt("badge.xl.font.size")};
    min-width: ${dt("badge.xl.min.width")};
    height: ${dt("badge.xl.height")};
    line-height: ${dt("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`;
var classes = {
  root: ({
    props,
    instance
  }) => ["p-badge p-component", {
    "p-badge-circle": isNotEmpty(props.value) && String(props.value).length === 1,
    "p-badge-dot": isEmpty(props.value) && !instance.$slots.default,
    "p-badge-sm": props.size === "small",
    "p-badge-lg": props.size === "large",
    "p-badge-xl": props.size === "xlarge",
    "p-badge-info": props.severity === "info",
    "p-badge-success": props.severity === "success",
    "p-badge-warn": props.severity === "warn",
    "p-badge-danger": props.severity === "danger",
    "p-badge-secondary": props.severity === "secondary",
    "p-badge-contrast": props.severity === "contrast"
  }]
};
var BadgeStyle = class _BadgeStyle extends BaseStyle {
  name = "badge";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵBadgeStyle_BaseFactory;
    return function BadgeStyle_Factory(__ngFactoryType__) {
      return (ɵBadgeStyle_BaseFactory || (ɵBadgeStyle_BaseFactory = ɵɵgetInheritedFactory(_BadgeStyle)))(__ngFactoryType__ || _BadgeStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _BadgeStyle,
    factory: _BadgeStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeStyle, [{
    type: Injectable
  }], null, null);
})();
var BadgeClasses;
(function(BadgeClasses2) {
  BadgeClasses2["root"] = "p-badge";
})(BadgeClasses || (BadgeClasses = {}));
var BadgeDirective = class _BadgeDirective extends BaseComponent {
  /**
   * When specified, disables the component.
   * @group Props
   */
  disabled;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   * @deprecated use badgeSize instead.
   */
  set size(value) {
    this._size = value;
    console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
  }
  get size() {
    return this._size;
  }
  _size;
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value;
  /**
   * Inline style of the element.
   * @group Props
   */
  badgeStyle;
  /**
   * Class of the element.
   * @group Props
   */
  badgeStyleClass;
  id;
  badgeEl;
  _componentStyle = inject(BadgeStyle);
  get activeElement() {
    return this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
  }
  get canUpdateBadge() {
    return this.id && !this.disabled;
  }
  constructor() {
    super();
  }
  ngOnChanges({
    value,
    size,
    severity,
    disabled,
    badgeStyle,
    badgeStyleClass
  }) {
    super.ngOnChanges({
      value,
      size,
      severity,
      disabled
    });
    if (disabled) {
      this.toggleDisableState();
    }
    if (!this.canUpdateBadge) {
      return;
    }
    if (severity) {
      this.setSeverity(severity.previousValue);
    }
    if (size) {
      this.setSizeClasses();
    }
    if (value) {
      this.setValue();
    }
    if (badgeStyle || badgeStyleClass) {
      this.applyStyles();
    }
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.id = uuid("pn_id_") + "_badge";
    this.renderBadgeContent();
  }
  setValue(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.value != null) {
      if (hasClass(badge, "p-badge-dot")) {
        removeClass(badge, "p-badge-dot");
      }
      if (this.value && String(this.value).length === 1) {
        addClass(badge, "p-badge-circle");
      } else {
        removeClass(badge, "p-badge-circle");
      }
    } else {
      if (!hasClass(badge, "p-badge-dot")) {
        addClass(badge, "p-badge-dot");
      }
      removeClass(badge, "p-badge-circle");
    }
    badge.innerHTML = "";
    const badgeValue = this.value != null ? String(this.value) : "";
    this.renderer.appendChild(badge, this.document.createTextNode(badgeValue));
  }
  setSizeClasses(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.badgeSize) {
      if (this.badgeSize === "large") {
        addClass(badge, "p-badge-lg");
        removeClass(badge, "p-badge-xl");
      }
      if (this.badgeSize === "xlarge") {
        addClass(badge, "p-badge-xl");
        removeClass(badge, "p-badge-lg");
      }
    } else if (this.size && !this.badgeSize) {
      if (this.size === "large") {
        addClass(badge, "p-badge-lg");
        removeClass(badge, "p-badge-xl");
      }
      if (this.size === "xlarge") {
        addClass(badge, "p-badge-xl");
        removeClass(badge, "p-badge-lg");
      }
    } else {
      removeClass(badge, "p-badge-lg");
      removeClass(badge, "p-badge-xl");
    }
  }
  renderBadgeContent() {
    if (this.disabled) {
      return null;
    }
    const el = this.activeElement;
    const badge = this.document.createElement("span");
    badge.id = this.id;
    badge.className = "p-badge p-component";
    this.setSeverity(null, badge);
    this.setSizeClasses(badge);
    this.setValue(badge);
    addClass(el, "p-overlay-badge");
    this.renderer.appendChild(el, badge);
    this.badgeEl = badge;
    this.applyStyles();
  }
  applyStyles() {
    if (this.badgeEl && this.badgeStyle && typeof this.badgeStyle === "object") {
      for (const [key, value] of Object.entries(this.badgeStyle)) {
        this.renderer.setStyle(this.badgeEl, key, value);
      }
    }
    if (this.badgeEl && this.badgeStyleClass) {
      this.badgeEl.classList.add(...this.badgeStyleClass.split(" "));
    }
  }
  setSeverity(oldSeverity, element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.severity) {
      addClass(badge, `p-badge-${this.severity}`);
    }
    if (oldSeverity) {
      removeClass(badge, `p-badge-${oldSeverity}`);
    }
  }
  toggleDisableState() {
    if (!this.id) {
      return;
    }
    if (this.disabled) {
      const badge = this.activeElement?.querySelector(`#${this.id}`);
      if (badge) {
        this.renderer.removeChild(this.activeElement, badge);
      }
    } else {
      this.renderBadgeContent();
    }
  }
  static ɵfac = function BadgeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BadgeDirective,
    selectors: [["", "pBadge", ""]],
    inputs: {
      disabled: [0, "badgeDisabled", "disabled"],
      badgeSize: "badgeSize",
      size: "size",
      severity: "severity",
      value: "value",
      badgeStyle: "badgeStyle",
      badgeStyleClass: "badgeStyleClass"
    },
    features: [ɵɵProvidersFeature([BadgeStyle]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeDirective, [{
    type: Directive,
    args: [{
      selector: "[pBadge]",
      providers: [BadgeStyle],
      standalone: true
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: ["badgeDisabled"]
    }],
    badgeSize: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    badgeStyle: [{
      type: Input
    }],
    badgeStyleClass: [{
      type: Input
    }]
  });
})();
var Badge = class _Badge extends BaseComponent {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass = input();
  /**
   * Inline style of the element.
   * @group Props
   */
  style = input();
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize = input();
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  size = input();
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity = input();
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value = input();
  /**
   * When specified, disables the component.
   * @group Props
   */
  badgeDisabled = input(false, {
    transform: booleanAttribute
  });
  _componentStyle = inject(BadgeStyle);
  /**
   * Computes the container class for the badge element based on its properties.
   * @returns An object representing the CSS classes to be applied to the badge container.
   */
  containerClass = computed(() => {
    let classes6 = "p-badge p-component";
    if (isNotEmpty(this.value()) && String(this.value()).length === 1) {
      classes6 += " p-badge-circle";
    }
    if (this.badgeSize() === "large") {
      classes6 += " p-badge-lg";
    } else if (this.badgeSize() === "xlarge") {
      classes6 += " p-badge-xl";
    } else if (this.badgeSize() === "small") {
      classes6 += " p-badge-sm";
    }
    if (isEmpty(this.value())) {
      classes6 += " p-badge-dot";
    }
    if (this.styleClass()) {
      classes6 += ` ${this.styleClass()}`;
    }
    if (this.severity()) {
      classes6 += ` p-badge-${this.severity()}`;
    }
    return classes6;
  });
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵBadge_BaseFactory;
    return function Badge_Factory(__ngFactoryType__) {
      return (ɵBadge_BaseFactory || (ɵBadge_BaseFactory = ɵɵgetInheritedFactory(_Badge)))(__ngFactoryType__ || _Badge);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Badge,
    selectors: [["p-badge"]],
    hostVars: 6,
    hostBindings: function Badge_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleMap(ctx.style());
        ɵɵclassMap(ctx.containerClass());
        ɵɵstyleProp("display", ctx.badgeDisabled() ? "none" : null);
      }
    },
    inputs: {
      styleClass: [1, "styleClass"],
      style: [1, "style"],
      badgeSize: [1, "badgeSize"],
      size: [1, "size"],
      severity: [1, "severity"],
      value: [1, "value"],
      badgeDisabled: [1, "badgeDisabled"]
    },
    features: [ɵɵProvidersFeature([BadgeStyle]), ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    template: function Badge_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtext(0);
      }
      if (rf & 2) {
        ɵɵtextInterpolate(ctx.value());
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Badge, [{
    type: Component,
    args: [{
      selector: "p-badge",
      template: `{{ value() }}`,
      standalone: true,
      imports: [CommonModule, SharedModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BadgeStyle],
      host: {
        "[class]": "containerClass()",
        "[style.display]": 'badgeDisabled() ? "none" : null',
        "[style]": "style()"
      }
    }]
  }], null, null);
})();
var BadgeModule = class _BadgeModule {
  static ɵfac = function BadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BadgeModule,
    imports: [Badge, BadgeDirective, SharedModule],
    exports: [Badge, BadgeDirective, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Badge, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      imports: [Badge, BadgeDirective, SharedModule],
      exports: [Badge, BadgeDirective, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-ripple.mjs
var theme2 = ({
  dt
}) => `
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${dt("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`;
var classes2 = {
  root: "p-ink"
};
var RippleStyle = class _RippleStyle extends BaseStyle {
  name = "ripple";
  theme = theme2;
  classes = classes2;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRippleStyle_BaseFactory;
    return function RippleStyle_Factory(__ngFactoryType__) {
      return (ɵRippleStyle_BaseFactory || (ɵRippleStyle_BaseFactory = ɵɵgetInheritedFactory(_RippleStyle)))(__ngFactoryType__ || _RippleStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _RippleStyle,
    factory: _RippleStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleStyle, [{
    type: Injectable
  }], null, null);
})();
var RippleClasses;
(function(RippleClasses2) {
  RippleClasses2["root"] = "p-ink";
})(RippleClasses || (RippleClasses = {}));
var Ripple = class _Ripple extends BaseComponent {
  zone = inject(NgZone);
  _componentStyle = inject(RippleStyle);
  animationListener;
  mouseDownListener;
  timeout;
  constructor() {
    super();
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.config.ripple()) {
          this.zone.runOutsideAngular(() => {
            this.create();
            this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
          });
        } else {
          this.remove();
        }
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  onMouseDown(event2) {
    let ink = this.getInk();
    if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") {
      return;
    }
    removeClass(ink, "p-ink-active");
    if (!getHeight(ink) && !getWidth(ink)) {
      let d = Math.max(getOuterWidth(this.el.nativeElement), getOuterHeight(this.el.nativeElement));
      ink.style.height = d + "px";
      ink.style.width = d + "px";
    }
    let offset = getOffset(this.el.nativeElement);
    let x = event2.pageX - offset.left + this.document.body.scrollTop - getWidth(ink) / 2;
    let y = event2.pageY - offset.top + this.document.body.scrollLeft - getHeight(ink) / 2;
    this.renderer.setStyle(ink, "top", y + "px");
    this.renderer.setStyle(ink, "left", x + "px");
    addClass(ink, "p-ink-active");
    this.timeout = setTimeout(() => {
      let ink2 = this.getInk();
      if (ink2) {
        removeClass(ink2, "p-ink-active");
      }
    }, 401);
  }
  getInk() {
    const children = this.el.nativeElement.children;
    for (let i = 0; i < children.length; i++) {
      if (typeof children[i].className === "string" && children[i].className.indexOf("p-ink") !== -1) {
        return children[i];
      }
    }
    return null;
  }
  resetInk() {
    let ink = this.getInk();
    if (ink) {
      removeClass(ink, "p-ink-active");
    }
  }
  onAnimationEnd(event2) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    removeClass(event2.currentTarget, "p-ink-active");
  }
  create() {
    let ink = this.renderer.createElement("span");
    this.renderer.addClass(ink, "p-ink");
    this.renderer.appendChild(this.el.nativeElement, ink);
    this.renderer.setAttribute(ink, "aria-hidden", "true");
    this.renderer.setAttribute(ink, "role", "presentation");
    if (!this.animationListener) {
      this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
    }
  }
  remove() {
    let ink = this.getInk();
    if (ink) {
      this.mouseDownListener && this.mouseDownListener();
      this.animationListener && this.animationListener();
      this.mouseDownListener = null;
      this.animationListener = null;
      remove(ink);
    }
  }
  ngOnDestroy() {
    if (this.config && this.config.ripple()) {
      this.remove();
    }
    super.ngOnDestroy();
  }
  static ɵfac = function Ripple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Ripple)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Ripple,
    selectors: [["", "pRipple", ""]],
    hostAttrs: [1, "p-ripple"],
    features: [ɵɵProvidersFeature([RippleStyle]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ripple, [{
    type: Directive,
    args: [{
      selector: "[pRipple]",
      host: {
        class: "p-ripple"
      },
      standalone: true,
      providers: [RippleStyle]
    }]
  }], () => [], null);
})();
var RippleModule = class _RippleModule {
  static ɵfac = function RippleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RippleModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RippleModule,
    imports: [Ripple],
    exports: [Ripple]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleModule, [{
    type: NgModule,
    args: [{
      imports: [Ripple],
      exports: [Ripple]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-button.mjs
var _c0 = ["content"];
var _c1 = ["loadingicon"];
var _c2 = ["icon"];
var _c3 = ["*"];
var _c4 = (a0) => ({
  class: a0
});
function Button_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Button_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.iconClass());
    ɵɵattribute("aria-hidden", true)("data-pc-section", "loadingicon");
  }
}
function Button_ng_container_3_ng_container_1_SpinnerIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SpinnerIcon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("styleClass", ctx_r0.spinnerIconClass())("spin", true);
    ɵɵattribute("aria-hidden", true)("data-pc-section", "loadingicon");
  }
}
function Button_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Button_ng_container_3_ng_container_1_span_1_Template, 1, 3, "span", 6)(2, Button_ng_container_3_ng_container_1_SpinnerIcon_2_Template, 1, 4, "SpinnerIcon", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.loadingIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.loadingIcon);
  }
}
function Button_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Button_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Button_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Button_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 2)(2, Button_ng_container_3_2_Template, 1, 1, null, 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c4, ctx_r0.iconClass()));
  }
}
function Button_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.icon);
    ɵɵproperty("ngClass", ctx_r0.iconClass());
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Button_ng_container_4_2_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_4_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Button_ng_container_4_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r0.icon && (ctx_r0.iconTemplate || ctx_r0._iconTemplate));
  }
}
function Button_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Button_ng_container_4_span_1_Template, 1, 4, "span", 11)(2, Button_ng_container_4_2_Template, 1, 1, null, 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.icon && !ctx_r0.iconTemplate && !ctx_r0._iconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c4, ctx_r0.iconClass()));
  }
}
function Button_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("aria-hidden", ctx_r0.icon && !ctx_r0.label)("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.label);
  }
}
function Button_p_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-badge", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r0.badge)("severity", ctx_r0.badgeSeverity);
  }
}
var theme3 = ({
  dt
}) => `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${dt("button.primary.color")};
    background: ${dt("button.primary.background")};
    border: 1px solid ${dt("button.primary.border.color")};
    padding-block: ${dt("button.padding.y")};
    padding-inline: ${dt("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${dt("button.transition.duration")}, color ${dt("button.transition.duration")}, border-color ${dt("button.transition.duration")},
            outline-color ${dt("button.transition.duration")}, box-shadow ${dt("button.transition.duration")};
    border-radius: ${dt("button.border.radius")};
    outline-color: transparent;
    gap: ${dt("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${dt("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${dt("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${dt("button.sm.font.size")};
    padding-block: ${dt("button.sm.padding.y")};
    padding-inline: ${dt("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${dt("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${dt("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${dt("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${dt("button.lg.font.size")};
    padding-block: ${dt("button.lg.padding.y")};
    padding-inline: ${dt("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${dt("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${dt("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${dt("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${dt("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${dt("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${dt("button.primary.hover.background")};
    border: 1px solid ${dt("button.primary.hover.border.color")};
    color: ${dt("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${dt("button.primary.active.background")};
    border: 1px solid ${dt("button.primary.active.border.color")};
    color: ${dt("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${dt("button.primary.focus.ring.shadow")};
    outline: ${dt("button.focus.ring.width")} ${dt("button.focus.ring.style")} ${dt("button.primary.focus.ring.color")};
    outline-offset: ${dt("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${dt("button.badge.size")};
    height: ${dt("button.badge.size")};
    line-height: ${dt("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${dt("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${dt("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${dt("button.secondary.background")};
    border: 1px solid ${dt("button.secondary.border.color")};
    color: ${dt("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${dt("button.secondary.hover.background")};
    border: 1px solid ${dt("button.secondary.hover.border.color")};
    color: ${dt("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${dt("button.secondary.active.background")};
    border: 1px solid ${dt("button.secondary.active.border.color")};
    color: ${dt("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${dt("button.secondary.focus.ring.color")};
    box-shadow: ${dt("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${dt("button.success.background")};
    border: 1px solid ${dt("button.success.border.color")};
    color: ${dt("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${dt("button.success.hover.background")};
    border: 1px solid ${dt("button.success.hover.border.color")};
    color: ${dt("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${dt("button.success.active.background")};
    border: 1px solid ${dt("button.success.active.border.color")};
    color: ${dt("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${dt("button.success.focus.ring.color")};
    box-shadow: ${dt("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${dt("button.info.background")};
    border: 1px solid ${dt("button.info.border.color")};
    color: ${dt("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${dt("button.info.hover.background")};
    border: 1px solid ${dt("button.info.hover.border.color")};
    color: ${dt("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${dt("button.info.active.background")};
    border: 1px solid ${dt("button.info.active.border.color")};
    color: ${dt("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${dt("button.info.focus.ring.color")};
    box-shadow: ${dt("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${dt("button.warn.background")};
    border: 1px solid ${dt("button.warn.border.color")};
    color: ${dt("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${dt("button.warn.hover.background")};
    border: 1px solid ${dt("button.warn.hover.border.color")};
    color: ${dt("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${dt("button.warn.active.background")};
    border: 1px solid ${dt("button.warn.active.border.color")};
    color: ${dt("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${dt("button.warn.focus.ring.color")};
    box-shadow: ${dt("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${dt("button.help.background")};
    border: 1px solid ${dt("button.help.border.color")};
    color: ${dt("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${dt("button.help.hover.background")};
    border: 1px solid ${dt("button.help.hover.border.color")};
    color: ${dt("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${dt("button.help.active.background")};
    border: 1px solid ${dt("button.help.active.border.color")};
    color: ${dt("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${dt("button.help.focus.ring.color")};
    box-shadow: ${dt("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${dt("button.danger.background")};
    border: 1px solid ${dt("button.danger.border.color")};
    color: ${dt("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${dt("button.danger.hover.background")};
    border: 1px solid ${dt("button.danger.hover.border.color")};
    color: ${dt("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${dt("button.danger.active.background")};
    border: 1px solid ${dt("button.danger.active.border.color")};
    color: ${dt("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${dt("button.danger.focus.ring.color")};
    box-shadow: ${dt("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${dt("button.contrast.background")};
    border: 1px solid ${dt("button.contrast.border.color")};
    color: ${dt("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${dt("button.contrast.hover.background")};
    border: 1px solid ${dt("button.contrast.hover.border.color")};
    color: ${dt("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${dt("button.contrast.active.background")};
    border: 1px solid ${dt("button.contrast.active.border.color")};
    color: ${dt("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${dt("button.contrast.focus.ring.color")};
    box-shadow: ${dt("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${dt("button.outlined.primary.border.color")};
    color: ${dt("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${dt("button.outlined.primary.hover.background")};
    border-color: ${dt("button.outlined.primary.border.color")};
    color: ${dt("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${dt("button.outlined.primary.active.background")};
    border-color: ${dt("button.outlined.primary.border.color")};
    color: ${dt("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${dt("button.outlined.secondary.border.color")};
    color: ${dt("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${dt("button.outlined.secondary.hover.background")};
    border-color: ${dt("button.outlined.secondary.border.color")};
    color: ${dt("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${dt("button.outlined.secondary.active.background")};
    border-color: ${dt("button.outlined.secondary.border.color")};
    color: ${dt("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${dt("button.outlined.success.border.color")};
    color: ${dt("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${dt("button.outlined.success.hover.background")};
    border-color: ${dt("button.outlined.success.border.color")};
    color: ${dt("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${dt("button.outlined.success.active.background")};
    border-color: ${dt("button.outlined.success.border.color")};
    color: ${dt("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${dt("button.outlined.info.border.color")};
    color: ${dt("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${dt("button.outlined.info.hover.background")};
    border-color: ${dt("button.outlined.info.border.color")};
    color: ${dt("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${dt("button.outlined.info.active.background")};
    border-color: ${dt("button.outlined.info.border.color")};
    color: ${dt("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${dt("button.outlined.warn.border.color")};
    color: ${dt("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${dt("button.outlined.warn.hover.background")};
    border-color: ${dt("button.outlined.warn.border.color")};
    color: ${dt("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${dt("button.outlined.warn.active.background")};
    border-color: ${dt("button.outlined.warn.border.color")};
    color: ${dt("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${dt("button.outlined.help.border.color")};
    color: ${dt("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${dt("button.outlined.help.hover.background")};
    border-color: ${dt("button.outlined.help.border.color")};
    color: ${dt("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${dt("button.outlined.help.active.background")};
    border-color: ${dt("button.outlined.help.border.color")};
    color: ${dt("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${dt("button.outlined.danger.border.color")};
    color: ${dt("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${dt("button.outlined.danger.hover.background")};
    border-color: ${dt("button.outlined.danger.border.color")};
    color: ${dt("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${dt("button.outlined.danger.active.background")};
    border-color: ${dt("button.outlined.danger.border.color")};
    color: ${dt("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${dt("button.outlined.contrast.border.color")};
    color: ${dt("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${dt("button.outlined.contrast.hover.background")};
    border-color: ${dt("button.outlined.contrast.border.color")};
    color: ${dt("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${dt("button.outlined.contrast.active.background")};
    border-color: ${dt("button.outlined.contrast.border.color")};
    color: ${dt("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${dt("button.outlined.plain.border.color")};
    color: ${dt("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${dt("button.outlined.plain.hover.background")};
    border-color: ${dt("button.outlined.plain.border.color")};
    color: ${dt("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${dt("button.outlined.plain.active.background")};
    border-color: ${dt("button.outlined.plain.border.color")};
    color: ${dt("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${dt("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${dt("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${dt("button.text.primary.active.background")};
    border-color: transparent;
    color: ${dt("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${dt("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${dt("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${dt("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${dt("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${dt("button.text.success.hover.background")};
    border-color: transparent;
    color: ${dt("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${dt("button.text.success.active.background")};
    border-color: transparent;
    color: ${dt("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${dt("button.text.info.hover.background")};
    border-color: transparent;
    color: ${dt("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${dt("button.text.info.active.background")};
    border-color: transparent;
    color: ${dt("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${dt("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${dt("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${dt("button.text.warn.active.background")};
    border-color: transparent;
    color: ${dt("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${dt("button.text.help.hover.background")};
    border-color: transparent;
    color: ${dt("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${dt("button.text.help.active.background")};
    border-color: transparent;
    color: ${dt("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${dt("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${dt("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${dt("button.text.danger.active.background")};
    border-color: transparent;
    color: ${dt("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${dt("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${dt("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${dt("button.text.plain.active.background")};
    border-color: transparent;
    color: ${dt("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${dt("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${dt("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${dt("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${dt("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${dt("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`;
var classes3 = {
  root: ({
    instance,
    props
  }) => ["p-button p-component", {
    "p-button-icon-only": instance.hasIcon && !props.label && !props.badge,
    "p-button-vertical": (props.iconPos === "top" || props.iconPos === "bottom") && props.label,
    "p-button-loading": props.loading,
    "p-button-link": props.link,
    [`p-button-${props.severity}`]: props.severity,
    "p-button-raised": props.raised,
    "p-button-rounded": props.rounded,
    "p-button-text": props.text,
    "p-button-outlined": props.outlined,
    "p-button-sm": props.size === "small",
    "p-button-lg": props.size === "large",
    "p-button-plain": props.plain,
    "p-button-fluid": props.fluid
  }],
  loadingIcon: "p-button-loading-icon",
  icon: ({
    props
  }) => ["p-button-icon", {
    [`p-button-icon-${props.iconPos}`]: props.label
  }],
  label: "p-button-label"
};
var ButtonStyle = class _ButtonStyle extends BaseStyle {
  name = "button";
  theme = theme3;
  classes = classes3;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵButtonStyle_BaseFactory;
    return function ButtonStyle_Factory(__ngFactoryType__) {
      return (ɵButtonStyle_BaseFactory || (ɵButtonStyle_BaseFactory = ɵɵgetInheritedFactory(_ButtonStyle)))(__ngFactoryType__ || _ButtonStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _ButtonStyle,
    factory: _ButtonStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ButtonClasses;
(function(ButtonClasses2) {
  ButtonClasses2["root"] = "p-button";
  ButtonClasses2["loadingIcon"] = "p-button-loading-icon";
  ButtonClasses2["icon"] = "p-button-icon";
  ButtonClasses2["label"] = "p-button-label";
})(ButtonClasses || (ButtonClasses = {}));
var INTERNAL_BUTTON_CLASSES = {
  button: "p-button",
  component: "p-component",
  iconOnly: "p-button-icon-only",
  disabled: "p-disabled",
  loading: "p-button-loading",
  labelOnly: "p-button-loading-label-only"
};
var ButtonLabel = class _ButtonLabel extends BaseComponent {
  _componentStyle = inject(ButtonStyle);
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵButtonLabel_BaseFactory;
    return function ButtonLabel_Factory(__ngFactoryType__) {
      return (ɵButtonLabel_BaseFactory || (ɵButtonLabel_BaseFactory = ɵɵgetInheritedFactory(_ButtonLabel)))(__ngFactoryType__ || _ButtonLabel);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _ButtonLabel,
    selectors: [["", "pButtonLabel", ""]],
    hostVars: 2,
    hostBindings: function ButtonLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-button-label", true);
      }
    },
    features: [ɵɵProvidersFeature([ButtonStyle]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonLabel, [{
    type: Directive,
    args: [{
      selector: "[pButtonLabel]",
      providers: [ButtonStyle],
      standalone: true,
      host: {
        "[class.p-button-label]": "true"
      }
    }]
  }], null, null);
})();
var ButtonIcon = class _ButtonIcon extends BaseComponent {
  _componentStyle = inject(ButtonStyle);
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵButtonIcon_BaseFactory;
    return function ButtonIcon_Factory(__ngFactoryType__) {
      return (ɵButtonIcon_BaseFactory || (ɵButtonIcon_BaseFactory = ɵɵgetInheritedFactory(_ButtonIcon)))(__ngFactoryType__ || _ButtonIcon);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _ButtonIcon,
    selectors: [["", "pButtonIcon", ""]],
    hostVars: 2,
    hostBindings: function ButtonIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-button-icon", true);
      }
    },
    features: [ɵɵProvidersFeature([ButtonStyle]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonIcon, [{
    type: Directive,
    args: [{
      selector: "[pButtonIcon]",
      providers: [ButtonStyle],
      standalone: true,
      host: {
        "[class.p-button-icon]": "true"
      }
    }]
  }], null, null);
})();
var ButtonDirective = class _ButtonDirective extends BaseComponent {
  /**
   * Position of the icon.
   * @deprecated utilize pButtonIcon and pButtonLabel directives.
   * @group Props
   */
  iconPos = "left";
  /**
   * Uses to pass attributes to the loading icon's DOM element.
   * @deprecated utilize pButonIcon instead.
   * @group Props
   */
  loadingIcon;
  set label(val) {
    this._label = val;
    if (this.initialized) {
      this.updateLabel();
      this.updateIcon();
      this.setStyleClass();
    }
  }
  set icon(val) {
    this._icon = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  _buttonProps;
  iconSignal = contentChild(ButtonIcon);
  labelSignal = contentChild(ButtonLabel);
  isIconOnly = computed(() => !!(!this.labelSignal() && this.iconSignal()));
  set buttonProps(val) {
    this._buttonProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  _severity;
  /**
   * Defines the style of the button.
   * @group Props
   */
  get severity() {
    return this._severity;
  }
  set severity(value) {
    this._severity = value;
    if (this.initialized) {
      this.setStyleClass();
    }
  }
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size = null;
  /**
   * Add a plain textual class to the button without a background initially.
   * @deprecated use variant property instead.
   * @group Props
   */
  plain = false;
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid;
  _label;
  _icon;
  _loading = false;
  initialized;
  get htmlElement() {
    return this.el.nativeElement;
  }
  _internalClasses = Object.values(INTERNAL_BUTTON_CLASSES);
  isTextButton = computed(() => !!(!this.iconSignal() && this.labelSignal() && this.text));
  /**
   * Text of the button.
   * @deprecated use pButtonLabel directive instead.
   * @group Props
   */
  get label() {
    return this._label;
  }
  /**
   * Name of the icon.
   * @deprecated use pButtonIcon directive instead
   * @group Props
   */
  get icon() {
    return this._icon;
  }
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @deprecated assign props directly to the button element.
   * @group Props
   */
  get buttonProps() {
    return this._buttonProps;
  }
  spinnerIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;
  _componentStyle = inject(ButtonStyle);
  ngAfterViewInit() {
    super.ngAfterViewInit();
    addClass(this.htmlElement, this.getStyleClass().join(" "));
    this.createIcon();
    this.createLabel();
    this.initialized = true;
  }
  ngOnChanges(simpleChanges) {
    super.ngOnChanges(simpleChanges);
    const {
      buttonProps
    } = simpleChanges;
    if (buttonProps) {
      const props = buttonProps.currentValue;
      for (const property in props) {
        this[property] = props[property];
      }
    }
  }
  getStyleClass() {
    const styleClass = [INTERNAL_BUTTON_CLASSES.button, INTERNAL_BUTTON_CLASSES.component];
    if (this.icon && !this.label && isEmpty(this.htmlElement.textContent)) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
    }
    if (this.loading) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.disabled, INTERNAL_BUTTON_CLASSES.loading);
      if (!this.icon && this.label) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.labelOnly);
      }
      if (this.icon && !this.label && !isEmpty(this.htmlElement.textContent)) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
      }
    }
    if (this.text) {
      styleClass.push("p-button-text");
    }
    if (this.severity) {
      styleClass.push(`p-button-${this.severity}`);
    }
    if (this.plain) {
      styleClass.push("p-button-plain");
    }
    if (this.raised) {
      styleClass.push("p-button-raised");
    }
    if (this.size) {
      styleClass.push(`p-button-${this.size}`);
    }
    if (this.outlined) {
      styleClass.push("p-button-outlined");
    }
    if (this.rounded) {
      styleClass.push("p-button-rounded");
    }
    if (this.size === "small") {
      styleClass.push("p-button-sm");
    }
    if (this.size === "large") {
      styleClass.push("p-button-lg");
    }
    if (this.hasFluid) {
      styleClass.push("p-button-fluid");
    }
    return styleClass;
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return isEmpty(this.fluid) ? !!fluidComponent : this.fluid;
  }
  setStyleClass() {
    const styleClass = this.getStyleClass();
    this.removeExistingSeverityClass();
    this.htmlElement.classList.remove(...this._internalClasses);
    this.htmlElement.classList.add(...styleClass);
  }
  removeExistingSeverityClass() {
    const severityArray = ["success", "info", "warn", "danger", "help", "primary", "secondary", "contrast"];
    const existingSeverityClass = this.htmlElement.classList.value.split(" ").find((cls) => severityArray.some((severity) => cls === `p-button-${severity}`));
    if (existingSeverityClass) {
      this.htmlElement.classList.remove(existingSeverityClass);
    }
  }
  createLabel() {
    const created = findSingle(this.htmlElement, ".p-button-label");
    if (!created && this.label) {
      let labelElement = this.document.createElement("span");
      if (this.icon && !this.label) {
        labelElement.setAttribute("aria-hidden", "true");
      }
      labelElement.className = "p-button-label";
      labelElement.appendChild(this.document.createTextNode(this.label));
      this.htmlElement.appendChild(labelElement);
    }
  }
  createIcon() {
    const created = findSingle(this.htmlElement, ".p-button-icon");
    if (!created && (this.icon || this.loading)) {
      let iconElement = this.document.createElement("span");
      iconElement.className = "p-button-icon";
      iconElement.setAttribute("aria-hidden", "true");
      let iconPosClass = this.label ? "p-button-icon-" + this.iconPos : null;
      if (iconPosClass) {
        addClass(iconElement, iconPosClass);
      }
      let iconClass = this.getIconClass();
      if (iconClass) {
        addClass(iconElement, iconClass);
      }
      if (!this.loadingIcon && this.loading) {
        iconElement.innerHTML = this.spinnerIcon;
      }
      this.htmlElement.insertBefore(iconElement, this.htmlElement.firstChild);
    }
  }
  updateLabel() {
    let labelElement = findSingle(this.htmlElement, ".p-button-label");
    if (!this.label) {
      labelElement && this.htmlElement.removeChild(labelElement);
      return;
    }
    labelElement ? labelElement.textContent = this.label : this.createLabel();
  }
  updateIcon() {
    let iconElement = findSingle(this.htmlElement, ".p-button-icon");
    let labelElement = findSingle(this.htmlElement, ".p-button-label");
    if (this.loading && !this.loadingIcon && iconElement) {
      iconElement.innerHTML = this.spinnerIcon;
    } else if (iconElement?.innerHTML) {
      iconElement.innerHTML = "";
    }
    if (iconElement) {
      if (this.iconPos) {
        iconElement.className = "p-button-icon " + (labelElement ? "p-button-icon-" + this.iconPos : "") + " " + this.getIconClass();
      } else {
        iconElement.className = "p-button-icon " + this.getIconClass();
      }
    } else {
      this.createIcon();
    }
  }
  getIconClass() {
    return this.loading ? "p-button-loading-icon " + (this.loadingIcon ? this.loadingIcon : "p-icon") : this.icon || "p-hidden";
  }
  ngOnDestroy() {
    this.initialized = false;
    super.ngOnDestroy();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵButtonDirective_BaseFactory;
    return function ButtonDirective_Factory(__ngFactoryType__) {
      return (ɵButtonDirective_BaseFactory || (ɵButtonDirective_BaseFactory = ɵɵgetInheritedFactory(_ButtonDirective)))(__ngFactoryType__ || _ButtonDirective);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _ButtonDirective,
    selectors: [["", "pButton", ""]],
    contentQueries: function ButtonDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuerySignal(dirIndex, ctx.iconSignal, ButtonIcon, 5);
        ɵɵcontentQuerySignal(dirIndex, ctx.labelSignal, ButtonLabel, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance(2);
      }
    },
    hostVars: 4,
    hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-button-icon-only", ctx.isIconOnly())("p-button-text", ctx.isTextButton());
      }
    },
    inputs: {
      iconPos: "iconPos",
      loadingIcon: "loadingIcon",
      loading: "loading",
      severity: "severity",
      raised: [2, "raised", "raised", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      text: [2, "text", "text", booleanAttribute],
      outlined: [2, "outlined", "outlined", booleanAttribute],
      size: "size",
      plain: [2, "plain", "plain", booleanAttribute],
      fluid: [2, "fluid", "fluid", booleanAttribute],
      label: "label",
      icon: "icon",
      buttonProps: "buttonProps"
    },
    features: [ɵɵProvidersFeature([ButtonStyle]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[pButton]",
      standalone: true,
      providers: [ButtonStyle],
      host: {
        "[class.p-button-icon-only]": "isIconOnly()",
        "[class.p-button-text]": "isTextButton()"
      }
    }]
  }], null, {
    iconPos: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }]
  });
})();
var Button = class _Button extends BaseComponent {
  /**
   * Type of the button.
   * @group Props
   */
  type = "button";
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Name of the icon.
   * @group Props
   */
  icon;
  /**
   * Value of the badge.
   * @group Props
   */
  badge;
  /**
   * Uses to pass attributes to the label's DOM element.
   * @group Props
   */
  label;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a plain textual class to the button without a background initially.
   * @deprecated use variant property instead.
   * @group Props
   */
  plain = false;
  /**
   * Defines the style of the button.
   * @group Props
   */
  severity;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Add a link style to the button.
   * @group Props
   */
  link = false;
  /**
   * Add a tabindex to the button.
   * @group Props
   */
  tabindex;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size;
  /**
   * Specifies the variant of the component.
   * @group Props
   */
  variant;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the badge.
   * @group Props
   * @deprecated use badgeSeverity instead.
   */
  badgeClass;
  /**
   * Severity type of the badge.
   * @group Props
   * @defaultValue secondary
   */
  badgeSeverity = "secondary";
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid;
  /**
   * Callback to execute when button is clicked.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to execute when button is focused.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to execute when button loses focus.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Template of the content.
   * @group Templates
   **/
  contentTemplate;
  /**
   * Template of the loading.
   * @group Templates
   **/
  loadingIconTemplate;
  /**
   * Template of the icon.
   * @group Templates
   **/
  iconTemplate;
  _buttonProps;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  get buttonProps() {
    return this._buttonProps;
  }
  set buttonProps(val) {
    this._buttonProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return isEmpty(this.fluid) ? !!fluidComponent : this.fluid;
  }
  _componentStyle = inject(ButtonStyle);
  templates;
  _contentTemplate;
  _iconTemplate;
  _loadingIconTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChanges) {
    super.ngOnChanges(simpleChanges);
    const {
      buttonProps
    } = simpleChanges;
    if (buttonProps) {
      const props = buttonProps.currentValue;
      for (const property in props) {
        this[property] = props[property];
      }
    }
  }
  spinnerIconClass() {
    return Object.entries(this.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
  }
  iconClass() {
    return {
      [`p-button-loading-icon pi-spin ${this.loadingIcon ?? ""}`]: this.loading,
      "p-button-icon": true,
      "p-button-icon-left": this.iconPos === "left" && this.label,
      "p-button-icon-right": this.iconPos === "right" && this.label,
      "p-button-icon-top": this.iconPos === "top" && this.label,
      "p-button-icon-bottom": this.iconPos === "bottom" && this.label
    };
  }
  get buttonClass() {
    return {
      "p-button p-component": true,
      "p-button-icon-only": (this.icon || this.iconTemplate || this._iconTemplate || this.loadingIcon || this.loadingIconTemplate || this._loadingIconTemplate) && !this.label,
      "p-button-vertical": (this.iconPos === "top" || this.iconPos === "bottom") && this.label,
      "p-button-loading": this.loading,
      "p-button-loading-label-only": this.loading && !this.icon && this.label && !this.loadingIcon && this.iconPos === "left",
      "p-button-link": this.link,
      [`p-button-${this.severity}`]: this.severity,
      "p-button-raised": this.raised,
      "p-button-rounded": this.rounded,
      "p-button-text": this.text || this.variant == "text",
      "p-button-outlined": this.outlined || this.variant == "outlined",
      "p-button-sm": this.size === "small",
      "p-button-lg": this.size === "large",
      "p-button-plain": this.plain,
      "p-button-fluid": this.hasFluid,
      [`${this.styleClass}`]: this.styleClass
    };
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵButton_BaseFactory;
    return function Button_Factory(__ngFactoryType__) {
      return (ɵButton_BaseFactory || (ɵButton_BaseFactory = ɵɵgetInheritedFactory(_Button)))(__ngFactoryType__ || _Button);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Button,
    selectors: [["p-button"]],
    contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 5);
        ɵɵcontentQuery(dirIndex, _c1, 5);
        ɵɵcontentQuery(dirIndex, _c2, 5);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      type: "type",
      iconPos: "iconPos",
      icon: "icon",
      badge: "badge",
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      raised: [2, "raised", "raised", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      text: [2, "text", "text", booleanAttribute],
      plain: [2, "plain", "plain", booleanAttribute],
      severity: "severity",
      outlined: [2, "outlined", "outlined", booleanAttribute],
      link: [2, "link", "link", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      size: "size",
      variant: "variant",
      style: "style",
      styleClass: "styleClass",
      badgeClass: "badgeClass",
      badgeSeverity: "badgeSeverity",
      ariaLabel: "ariaLabel",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      fluid: [2, "fluid", "fluid", booleanAttribute],
      buttonProps: "buttonProps"
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([ButtonStyle]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 7,
    vars: 14,
    consts: [["pRipple", "", 3, "click", "focus", "blur", "ngStyle", "disabled", "ngClass", "pAutoFocus"], [4, "ngTemplateOutlet"], [4, "ngIf"], ["class", "p-button-label", 4, "ngIf"], [3, "value", "severity", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass", 4, "ngIf"], [3, "styleClass", "spin", 4, "ngIf"], [3, "ngClass"], [3, "styleClass", "spin"], [3, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [1, "p-button-label"], [3, "value", "severity"]],
    template: function Button_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function Button_Template_button_click_0_listener($event) {
          return ctx.onClick.emit($event);
        })("focus", function Button_Template_button_focus_0_listener($event) {
          return ctx.onFocus.emit($event);
        })("blur", function Button_Template_button_blur_0_listener($event) {
          return ctx.onBlur.emit($event);
        });
        ɵɵprojection(1);
        ɵɵtemplate(2, Button_ng_container_2_Template, 1, 0, "ng-container", 1)(3, Button_ng_container_3_Template, 3, 5, "ng-container", 2)(4, Button_ng_container_4_Template, 3, 5, "ng-container", 2)(5, Button_span_5_Template, 2, 3, "span", 3)(6, Button_p_badge_6_Template, 1, 2, "p-badge", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.style)("disabled", ctx.disabled || ctx.loading)("ngClass", ctx.buttonClass)("pAutoFocus", ctx.autofocus);
        ɵɵattribute("type", ctx.type)("aria-label", ctx.ariaLabel)("data-pc-name", "button")("data-pc-section", "root")("tabindex", ctx.tabindex);
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.loading);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.loading);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && ctx.label);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && ctx.badge);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, AutoFocus, SpinnerIcon, BadgeModule, Badge, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Button, [{
    type: Component,
    args: [{
      selector: "p-button",
      standalone: true,
      imports: [CommonModule, Ripple, AutoFocus, SpinnerIcon, BadgeModule, SharedModule],
      template: `
        <button
            [attr.type]="type"
            [attr.aria-label]="ariaLabel"
            [ngStyle]="style"
            [disabled]="disabled || loading"
            [ngClass]="buttonClass"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.data-pc-name]="'button'"
            [attr.data-pc-section]="'root'"
            [attr.tabindex]="tabindex"
            [pAutoFocus]="autofocus"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [ngClass]="iconClass()" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'"></span>
                    <SpinnerIcon *ngIf="!loadingIcon" [styleClass]="spinnerIconClass()" [spin]="true" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: iconClass() }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!loading">
                <span *ngIf="icon && !iconTemplate && !_iconTemplate" [class]="icon" [ngClass]="iconClass()" [attr.data-pc-section]="'icon'"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: iconClass() }"></ng-template>
            </ng-container>
            <span class="p-button-label" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate && !_contentTemplate && label" [attr.data-pc-section]="'label'">{{ label }}</span>
            <p-badge *ngIf="!contentTemplate && !_contentTemplate && badge" [value]="badge" [severity]="badgeSeverity"></p-badge>
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ButtonStyle]
    }]
  }], null, {
    type: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    badge: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    severity: [{
      type: Input
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    link: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    badgeClass: [{
      type: Input
    }],
    badgeSeverity: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon"]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon"]
    }],
    buttonProps: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ButtonModule = class _ButtonModule {
  static ɵfac = function ButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ButtonModule,
    imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
    exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, Button, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
      exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
var theme4 = ({
  dt
}) => `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${dt("inputtext.color")};
    background: ${dt("inputtext.background")};
    padding-block: ${dt("inputtext.padding.y")};
    padding-inline: ${dt("inputtext.padding.x")};
    border: 1px solid ${dt("inputtext.border.color")};
    transition: background ${dt("inputtext.transition.duration")}, color ${dt("inputtext.transition.duration")}, border-color ${dt("inputtext.transition.duration")}, outline-color ${dt("inputtext.transition.duration")}, box-shadow ${dt("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${dt("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${dt("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${dt("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${dt("inputtext.focus.border.color")};
    box-shadow: ${dt("inputtext.focus.ring.shadow")};
    outline: ${dt("inputtext.focus.ring.width")} ${dt("inputtext.focus.ring.style")} ${dt("inputtext.focus.ring.color")};
    outline-offset: ${dt("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${dt("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${dt("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${dt("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${dt("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${dt("inputtext.disabled.background")};
    color: ${dt("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${dt("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${dt("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${dt("inputtext.sm.font.size")};
    padding-block: ${dt("inputtext.sm.padding.y")};
    padding-inline: ${dt("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${dt("inputtext.lg.font.size")};
    padding-block: ${dt("inputtext.lg.padding.y")};
    padding-inline: ${dt("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`;
var classes4 = {
  root: ({
    instance,
    props
  }) => ["p-inputtext p-component", {
    "p-filled": instance.filled,
    "p-inputtext-sm": props.size === "small",
    "p-inputtext-lg": props.size === "large",
    "p-invalid": props.invalid,
    "p-variant-filled": props.variant === "filled",
    "p-inputtext-fluid": props.fluid
  }]
};
var InputTextStyle = class _InputTextStyle extends BaseStyle {
  name = "inputtext";
  theme = theme4;
  classes = classes4;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputTextStyle_BaseFactory;
    return function InputTextStyle_Factory(__ngFactoryType__) {
      return (ɵInputTextStyle_BaseFactory || (ɵInputTextStyle_BaseFactory = ɵɵgetInheritedFactory(_InputTextStyle)))(__ngFactoryType__ || _InputTextStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _InputTextStyle,
    factory: _InputTextStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextStyle, [{
    type: Injectable
  }], null, null);
})();
var InputTextClasses;
(function(InputTextClasses2) {
  InputTextClasses2["root"] = "p-inputtext";
})(InputTextClasses || (InputTextClasses = {}));
var InputText = class _InputText extends BaseComponent {
  ngModel;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid;
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  filled;
  _componentStyle = inject(InputTextStyle);
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return isEmpty(this.fluid) ? !!fluidComponent : this.fluid;
  }
  constructor(ngModel) {
    super();
    this.ngModel = ngModel;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.updateFilledState();
    this.cd.detectChanges();
  }
  ngDoCheck() {
    this.updateFilledState();
  }
  onInput() {
    this.updateFilledState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length || this.ngModel && this.ngModel.model;
  }
  static ɵfac = function InputText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputText)(ɵɵdirectiveInject(NgModel, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _InputText,
    selectors: [["", "pInputText", ""]],
    hostAttrs: [1, "p-inputtext", "p-component"],
    hostVars: 14,
    hostBindings: function InputText_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("input", function InputText_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        let tmp_1_0;
        ɵɵclassProp("p-filled", ctx.filled)("p-variant-filled", ((tmp_1_0 = ctx.variant) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ctx.config.inputStyle() || ctx.config.inputVariant()) === "filled")("p-inputtext-fluid", ctx.hasFluid)("p-inputtext-sm", ctx.pSize === "small")("p-inputfield-sm", ctx.pSize === "small")("p-inputtext-lg", ctx.pSize === "large")("p-inputfield-lg", ctx.pSize === "large");
      }
    },
    inputs: {
      variant: "variant",
      fluid: [2, "fluid", "fluid", booleanAttribute],
      pSize: "pSize"
    },
    features: [ɵɵProvidersFeature([InputTextStyle]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputText, [{
    type: Directive,
    args: [{
      selector: "[pInputText]",
      standalone: true,
      host: {
        class: "p-inputtext p-component",
        "[class.p-filled]": "filled",
        "[class.p-variant-filled]": '(variant ?? (config.inputStyle() || config.inputVariant())) === "filled"',
        "[class.p-inputtext-fluid]": "hasFluid",
        "[class.p-inputtext-sm]": 'pSize === "small"',
        "[class.p-inputfield-sm]": 'pSize === "small"',
        "[class.p-inputtext-lg]": 'pSize === "large"',
        "[class.p-inputfield-lg]": 'pSize === "large"'
      },
      providers: [InputTextStyle]
    }]
  }], () => [{
    type: NgModel,
    decorators: [{
      type: Optional
    }]
  }], {
    variant: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pSize: [{
      type: Input,
      args: ["pSize"]
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var InputTextModule = class _InputTextModule {
  static ɵfac = function InputTextModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputTextModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputTextModule,
    imports: [InputText],
    exports: [InputText]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextModule, [{
    type: NgModule,
    args: [{
      imports: [InputText],
      exports: [InputText]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-datepicker.mjs
var _c02 = ["date"];
var _c12 = ["header"];
var _c22 = ["footer"];
var _c32 = ["disabledDate"];
var _c42 = ["decade"];
var _c5 = ["previousicon"];
var _c6 = ["nexticon"];
var _c7 = ["triggericon"];
var _c8 = ["clearicon"];
var _c9 = ["decrementicon"];
var _c10 = ["incrementicon"];
var _c11 = ["inputicon"];
var _c122 = ["container"];
var _c13 = ["inputfield"];
var _c14 = ["contentWrapper"];
var _c15 = [[["p-header"]], [["p-footer"]]];
var _c16 = ["p-header", "p-footer"];
var _c17 = (a0) => ({
  clickCallBack: a0
});
var _c18 = (a0) => ({
  "p-datepicker-input-icon": a0
});
var _c19 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c20 = (a0) => ({
  value: "visible",
  params: a0
});
var _c21 = (a0) => ({
  visibility: a0
});
var _c222 = (a0) => ({
  $implicit: a0
});
var _c23 = (a0, a1) => ({
  "p-datepicker-day-cell": true,
  "p-datepicker-other-month": a0,
  "p-datepicker-today": a1
});
var _c24 = (a0, a1) => ({
  "p-datepicker-month": true,
  "p-datepicker-month-selected": a0,
  "p-disabled": a1
});
var _c25 = (a0, a1) => ({
  "p-datepicker-year": true,
  "p-datepicker-year-selected": a0,
  "p-disabled": a1
});
function DatePicker_ng_template_2_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 11);
    ɵɵlistener("click", function DatePicker_ng_template_2_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵclassMap("p-datepicker-clear-icon");
  }
}
function DatePicker_ng_template_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_ng_template_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_ng_template_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_ng_template_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 12);
    ɵɵlistener("click", function DatePicker_ng_template_2_ng_container_2_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.clear());
    });
    ɵɵtemplate(1, DatePicker_ng_template_2_ng_container_2_span_2_1_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function DatePicker_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DatePicker_ng_template_2_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 9)(2, DatePicker_ng_template_2_ng_container_2_span_2_Template, 2, 1, "span", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.clearIconTemplate && !ctx_r1._clearIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function DatePicker_ng_template_2_button_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r1.icon);
  }
}
function DatePicker_ng_template_2_button_3_ng_container_2_CalendarIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CalendarIcon");
  }
}
function DatePicker_ng_template_2_button_3_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function DatePicker_ng_template_2_button_3_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_ng_template_2_button_3_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_ng_template_2_button_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DatePicker_ng_template_2_button_3_ng_container_2_CalendarIcon_1_Template, 1, 0, "CalendarIcon", 7)(2, DatePicker_ng_template_2_button_3_ng_container_2_2_Template, 1, 0, null, 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.triggerIconTemplate && !ctx_r1._triggerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.triggerIconTemplate || ctx_r1._triggerIconTemplate);
  }
}
function DatePicker_ng_template_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function DatePicker_ng_template_2_button_3_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      ɵɵnextContext();
      const inputfield_r6 = ɵɵreference(1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onButtonClick($event, inputfield_r6));
    });
    ɵɵtemplate(1, DatePicker_ng_template_2_button_3_span_1_Template, 1, 1, "span", 15)(2, DatePicker_ng_template_2_button_3_ng_container_2_Template, 3, 2, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵattribute("aria-label", ctx_r1.iconButtonAriaLabel)("aria-expanded", (tmp_6_0 = ctx_r1.overlayVisible) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : false)("aria-controls", ctx_r1.overlayVisible ? ctx_r1.panelId : null);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.icon);
  }
}
function DatePicker_ng_template_2_ng_container_4_CalendarIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "CalendarIcon", 20);
    ɵɵlistener("click", function DatePicker_ng_template_2_ng_container_4_CalendarIcon_2_Template_CalendarIcon_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c18, ctx_r1.showOnFocus));
  }
}
function DatePicker_ng_template_2_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 17);
    ɵɵtemplate(2, DatePicker_ng_template_2_ng_container_4_CalendarIcon_2_Template, 1, 3, "CalendarIcon", 18)(3, DatePicker_ng_template_2_ng_container_4_ng_container_3_Template, 1, 0, "ng-container", 19);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.inputIconTemplate && !ctx_r1._inputIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.inputIconTemplate || ctx_r1._inputIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c17, ctx_r1.onButtonClick.bind(ctx_r1)));
  }
}
function DatePicker_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 6, 1);
    ɵɵlistener("focus", function DatePicker_ng_template_2_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputFocus($event));
    })("keydown", function DatePicker_ng_template_2_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputKeydown($event));
    })("click", function DatePicker_ng_template_2_Template_input_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputClick());
    })("blur", function DatePicker_ng_template_2_Template_input_blur_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputBlur($event));
    })("input", function DatePicker_ng_template_2_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onUserInput($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, DatePicker_ng_template_2_ng_container_2_Template, 3, 2, "ng-container", 7)(3, DatePicker_ng_template_2_button_3_Template, 3, 6, "button", 8)(4, DatePicker_ng_template_2_ng_container_4_Template, 4, 5, "ng-container", 7);
  }
  if (rf & 2) {
    let tmp_18_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.inputStyleClass);
    ɵɵproperty("pSize", ctx_r1.size)("value", ctx_r1.inputFieldValue)("readonly", ctx_r1.readonlyInput)("ngStyle", ctx_r1.inputStyle)("ngClass", "p-datepicker-input")("placeholder", ctx_r1.placeholder || "")("disabled", ctx_r1.disabled)("pAutoFocus", ctx_r1.autofocus)("variant", ctx_r1.variant)("fluid", ctx_r1.hasFluid);
    ɵɵattribute("id", ctx_r1.inputId)("name", ctx_r1.name)("required", ctx_r1.required)("aria-required", ctx_r1.required)("aria-expanded", (tmp_18_0 = ctx_r1.overlayVisible) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : false)("aria-controls", ctx_r1.overlayVisible ? ctx_r1.panelId : null)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-label", ctx_r1.ariaLabel)("tabindex", ctx_r1.tabindex)("inputmode", ctx_r1.touchUI ? "off" : null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.showClear && !ctx_r1.disabled && ctx_r1.value != null);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showIcon && ctx_r1.iconDisplay === "button");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.iconDisplay === "input" && ctx_r1.showIcon);
  }
}
function DatePicker_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_div_3_ng_container_4_div_2_ChevronLeftIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronLeftIcon");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_4_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_ng_container_4_div_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_3_ng_container_4_div_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, DatePicker_div_3_ng_container_4_div_2_span_4_1_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.previousIconTemplate || ctx_r1._previousIconTemplate);
  }
}
function DatePicker_div_3_ng_container_4_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 37);
    ɵɵlistener("click", function DatePicker_div_3_ng_container_4_div_2_button_6_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.switchToMonthView($event));
    })("keydown", function DatePicker_div_3_ng_container_4_div_2_button_6_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r11 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r1.switchViewButtonDisabled());
    ɵɵattribute("aria-label", ctx_r1.getTranslation("chooseMonth"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getMonthName(month_r11.month), " ");
  }
}
function DatePicker_div_3_ng_container_4_div_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38);
    ɵɵlistener("click", function DatePicker_div_3_ng_container_4_div_2_button_7_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.switchToYearView($event));
    })("keydown", function DatePicker_div_3_ng_container_4_div_2_button_7_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r11 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r1.switchViewButtonDisabled());
    ɵɵattribute("aria-label", ctx_r1.getTranslation("chooseYear"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getYear(month_r11), " ");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵtextInterpolate2("", ctx_r1.yearPickerValues()[0], " - ", ctx_r1.yearPickerValues()[ctx_r1.yearPickerValues().length - 1], "");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 39);
    ɵɵtemplate(1, DatePicker_div_3_ng_container_4_div_2_span_8_ng_container_1_Template, 2, 2, "ng-container", 7)(2, DatePicker_div_3_ng_container_4_div_2_span_8_ng_container_2_Template, 1, 0, "ng-container", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.decadeTemplate && !ctx_r1._decadeTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.decadeTemplate || ctx_r1._decadeTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c222, ctx_r1.yearPickerValues));
  }
}
function DatePicker_div_3_ng_container_4_div_2_ChevronRightIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_11_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_ng_container_4_div_2_span_11_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_3_ng_container_4_div_2_span_11_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, DatePicker_div_3_ng_container_4_div_2_span_11_1_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_th_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 44)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.getTranslation("weekHeader"));
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_th_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 45)(1, "span", 46);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const weekDay_r13 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(weekDay_r13);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 49)(1, "span", 50);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const j_r14 = ɵɵnextContext().index;
    const month_r11 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", month_r11.weekNumbers[j_r14], " ");
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(date_r16.day);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.dateTemplate || ctx_r1._dateTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c222, date_r16));
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.disabledDateTemplate || ctx_r1._disabledDateTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c222, date_r16));
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 53);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const date_r16 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", date_r16.day, " ");
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 51);
    ɵɵlistener("click", function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template_span_click_1_listener($event) {
      ɵɵrestoreView(_r15);
      const date_r16 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.onDateSelect($event, date_r16));
    })("keydown", function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template_span_keydown_1_listener($event) {
      ɵɵrestoreView(_r15);
      const date_r16 = ɵɵnextContext().$implicit;
      const i_r17 = ɵɵnextContext(3).index;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onDateCellKeydown($event, date_r16, i_r17));
    });
    ɵɵtemplate(2, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 7)(3, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_Template, 2, 4, "ng-container", 7)(4, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_Template, 2, 4, "ng-container", 7);
    ɵɵelementEnd();
    ɵɵtemplate(5, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_div_5_Template, 2, 1, "div", 52);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.dayClass(date_r16));
    ɵɵattribute("data-date", ctx_r1.formatDateKey(ctx_r1.formatDateMetaToDate(date_r16)));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.dateTemplate && !ctx_r1._dateTemplate && (date_r16.selectable || !ctx_r1.disabledDateTemplate && !ctx_r1._disabledDateTemplate));
    ɵɵadvance();
    ɵɵproperty("ngIf", date_r16.selectable || !ctx_r1.disabledDateTemplate && !ctx_r1._disabledDateTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !date_r16.selectable);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isSelected(date_r16));
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 16);
    ɵɵtemplate(1, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template, 6, 6, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const date_r16 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c23, date_r16.otherMonth, date_r16.today));
    ɵɵattribute("aria-label", date_r16.day);
    ɵɵadvance();
    ɵɵproperty("ngIf", date_r16.otherMonth ? ctx_r1.showOtherMonths : true);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_1_Template, 3, 1, "td", 47)(2, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_Template, 2, 6, "td", 48);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const week_r18 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showWeek);
    ɵɵadvance();
    ɵɵproperty("ngForOf", week_r18);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 40)(1, "thead")(2, "tr");
    ɵɵtemplate(3, DatePicker_div_3_ng_container_4_div_2_table_12_th_3_Template, 3, 1, "th", 41)(4, DatePicker_div_3_ng_container_4_div_2_table_12_th_4_Template, 3, 1, "th", 42);
    ɵɵelementEnd()();
    ɵɵelementStart(5, "tbody");
    ɵɵtemplate(6, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_Template, 3, 2, "tr", 43);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const month_r11 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.showWeek);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.weekDays);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", month_r11.dates);
  }
}
function DatePicker_div_3_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 28)(1, "div", 29)(2, "p-button", 30);
    ɵɵlistener("keydown", function DatePicker_div_3_ng_container_4_div_2_Template_p_button_keydown_2_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_3_ng_container_4_div_2_Template_p_button_onClick_2_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onPrevButtonClick($event));
    });
    ɵɵtemplate(3, DatePicker_div_3_ng_container_4_div_2_ChevronLeftIcon_3_Template, 1, 0, "ChevronLeftIcon", 7)(4, DatePicker_div_3_ng_container_4_div_2_span_4_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 31);
    ɵɵtemplate(6, DatePicker_div_3_ng_container_4_div_2_button_6_Template, 2, 3, "button", 32)(7, DatePicker_div_3_ng_container_4_div_2_button_7_Template, 2, 3, "button", 33)(8, DatePicker_div_3_ng_container_4_div_2_span_8_Template, 3, 5, "span", 34);
    ɵɵelementEnd();
    ɵɵelementStart(9, "p-button", 35);
    ɵɵlistener("keydown", function DatePicker_div_3_ng_container_4_div_2_Template_p_button_keydown_9_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_3_ng_container_4_div_2_Template_p_button_onClick_9_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onNextButtonClick($event));
    });
    ɵɵtemplate(10, DatePicker_div_3_ng_container_4_div_2_ChevronRightIcon_10_Template, 1, 0, "ChevronRightIcon", 7)(11, DatePicker_div_3_ng_container_4_div_2_span_11_Template, 2, 1, "span", 7);
    ɵɵelementEnd()();
    ɵɵtemplate(12, DatePicker_div_3_ng_container_4_div_2_table_12_Template, 7, 3, "table", 36);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r17 = ctx.index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(12, _c21, i_r17 === 0 ? "visible" : "hidden"))("ariaLabel", ctx_r1.prevIconAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.previousIconTemplate && !ctx_r1._previousIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.previousIconTemplate || ctx_r1._previousIconTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.currentView === "date");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentView !== "year");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentView === "year");
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(14, _c21, i_r17 === ctx_r1.months.length - 1 ? "visible" : "hidden"))("ariaLabel", ctx_r1.nextIconAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.nextIconTemplate && !ctx_r1._nextIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentView === "date");
  }
}
function DatePicker_div_3_ng_container_4_div_3_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 53);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const m_r21 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", m_r21, " ");
  }
}
function DatePicker_div_3_ng_container_4_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 56);
    ɵɵlistener("click", function DatePicker_div_3_ng_container_4_div_3_span_1_Template_span_click_0_listener($event) {
      const i_r20 = ɵɵrestoreView(_r19).index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onMonthSelect($event, i_r20));
    })("keydown", function DatePicker_div_3_ng_container_4_div_3_span_1_Template_span_keydown_0_listener($event) {
      const i_r20 = ɵɵrestoreView(_r19).index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onMonthCellKeydown($event, i_r20));
    });
    ɵɵtext(1);
    ɵɵtemplate(2, DatePicker_div_3_ng_container_4_div_3_span_1_div_2_Template, 2, 1, "div", 52);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const m_r21 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c24, ctx_r1.isMonthSelected(i_r20), ctx_r1.isMonthDisabled(i_r20)));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", m_r21, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isMonthSelected(i_r20));
  }
}
function DatePicker_div_3_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 54);
    ɵɵtemplate(1, DatePicker_div_3_ng_container_4_div_3_span_1_Template, 3, 6, "span", 55);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.monthPickerValues());
  }
}
function DatePicker_div_3_ng_container_4_div_4_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 53);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const y_r23 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", y_r23, " ");
  }
}
function DatePicker_div_3_ng_container_4_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 56);
    ɵɵlistener("click", function DatePicker_div_3_ng_container_4_div_4_span_1_Template_span_click_0_listener($event) {
      const y_r23 = ɵɵrestoreView(_r22).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onYearSelect($event, y_r23));
    })("keydown", function DatePicker_div_3_ng_container_4_div_4_span_1_Template_span_keydown_0_listener($event) {
      const y_r23 = ɵɵrestoreView(_r22).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onYearCellKeydown($event, y_r23));
    });
    ɵɵtext(1);
    ɵɵtemplate(2, DatePicker_div_3_ng_container_4_div_4_span_1_div_2_Template, 2, 1, "div", 52);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const y_r23 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c25, ctx_r1.isYearSelected(y_r23), ctx_r1.isYearDisabled(y_r23)));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", y_r23, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isYearSelected(y_r23));
  }
}
function DatePicker_div_3_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 57);
    ɵɵtemplate(1, DatePicker_div_3_ng_container_4_div_4_span_1_Template, 3, 6, "span", 55);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.yearPickerValues());
  }
}
function DatePicker_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 24);
    ɵɵtemplate(2, DatePicker_div_3_ng_container_4_div_2_Template, 13, 16, "div", 25);
    ɵɵelementEnd();
    ɵɵtemplate(3, DatePicker_div_3_ng_container_4_div_3_Template, 2, 1, "div", 26)(4, DatePicker_div_3_ng_container_4_div_4_Template, 2, 1, "div", 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.months);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentView === "month");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentView === "year");
  }
}
function DatePicker_div_3_div_5_ChevronUpIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon");
  }
}
function DatePicker_div_3_div_5_4_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_3_div_5_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "0");
    ɵɵelementContainerEnd();
  }
}
function DatePicker_div_3_div_5_ChevronDownIcon_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function DatePicker_div_3_div_5_10_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_3_div_5_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_ChevronUpIcon_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon");
  }
}
function DatePicker_div_3_div_5_17_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_3_div_5_17_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "0");
    ɵɵelementContainerEnd();
  }
}
function DatePicker_div_3_div_5_ChevronDownIcon_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function DatePicker_div_3_div_5_ng_container_23_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_ng_container_23_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_3_div_5_ng_container_23_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DatePicker_div_3_div_5_ng_container_23_1_Template, 1, 0, null, 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_3_div_5_div_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 61)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.timeSeparator);
  }
}
function DatePicker_div_3_div_5_div_25_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon");
  }
}
function DatePicker_div_3_div_5_div_25_3_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_div_25_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_3_div_5_div_25_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_div_25_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "0");
    ɵɵelementContainerEnd();
  }
}
function DatePicker_div_3_div_5_div_25_ChevronDownIcon_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function DatePicker_div_3_div_5_div_25_9_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_div_25_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_3_div_5_div_25_9_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 66)(1, "p-button", 60);
    ɵɵlistener("keydown", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.incrementSecond($event));
    })("keydown.space", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_space_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.incrementSecond($event));
    })("mousedown", function DatePicker_div_3_div_5_div_25_Template_p_button_mousedown_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 2, 1));
    })("mouseup", function DatePicker_div_3_div_5_div_25_Template_p_button_mouseup_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_div_25_Template_p_button_keyup_enter_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_div_25_Template_p_button_keyup_space_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_div_25_Template_p_button_mouseleave_1_listener() {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(2, DatePicker_div_3_div_5_div_25_ChevronUpIcon_2_Template, 1, 0, "ChevronUpIcon", 7)(3, DatePicker_div_3_div_5_div_25_3_Template, 1, 0, null, 13);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtemplate(5, DatePicker_div_3_div_5_div_25_ng_container_5_Template, 2, 0, "ng-container", 7);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "p-button", 60);
    ɵɵlistener("keydown", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_enter_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.decrementSecond($event));
    })("keydown.space", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_space_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.decrementSecond($event));
    })("mousedown", function DatePicker_div_3_div_5_div_25_Template_p_button_mousedown_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 2, -1));
    })("mouseup", function DatePicker_div_3_div_5_div_25_Template_p_button_mouseup_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_div_25_Template_p_button_keyup_enter_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_div_25_Template_p_button_keyup_space_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_div_25_Template_p_button_mouseleave_7_listener() {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(8, DatePicker_div_3_div_5_div_25_ChevronDownIcon_8_Template, 1, 0, "ChevronDownIcon", 7)(9, DatePicker_div_3_div_5_div_25_9_Template, 1, 0, null, 13);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵattribute("aria-label", ctx_r1.getTranslation("nextSecond"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.currentSecond < 10);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.currentSecond);
    ɵɵadvance();
    ɵɵattribute("aria-label", ctx_r1.getTranslation("prevSecond"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_3_div_5_div_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 61)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.timeSeparator);
  }
}
function DatePicker_div_3_div_5_div_27_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon");
  }
}
function DatePicker_div_3_div_5_div_27_3_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_div_27_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_3_div_5_div_27_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_div_27_ChevronDownIcon_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function DatePicker_div_3_div_5_div_27_8_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_div_27_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_3_div_5_div_27_8_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 67)(1, "p-button", 68);
    ɵɵlistener("keydown", function DatePicker_div_3_div_5_div_27_Template_p_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_3_div_5_div_27_Template_p_button_onClick_1_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleAMPM($event));
    })("keydown.enter", function DatePicker_div_3_div_5_div_27_Template_p_button_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleAMPM($event));
    });
    ɵɵtemplate(2, DatePicker_div_3_div_5_div_27_ChevronUpIcon_2_Template, 1, 0, "ChevronUpIcon", 7)(3, DatePicker_div_3_div_5_div_27_3_Template, 1, 0, null, 13);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "p-button", 69);
    ɵɵlistener("keydown", function DatePicker_div_3_div_5_div_27_Template_p_button_keydown_6_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("click", function DatePicker_div_3_div_5_div_27_Template_p_button_click_6_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleAMPM($event));
    })("keydown.enter", function DatePicker_div_3_div_5_div_27_Template_p_button_keydown_enter_6_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleAMPM($event));
    });
    ɵɵtemplate(7, DatePicker_div_3_div_5_div_27_ChevronDownIcon_7_Template, 1, 0, "ChevronDownIcon", 7)(8, DatePicker_div_3_div_5_div_27_8_Template, 1, 0, null, 13);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵattribute("aria-label", ctx_r1.getTranslation("am"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.pm ? "PM" : "AM");
    ɵɵadvance();
    ɵɵattribute("aria-label", ctx_r1.getTranslation("pm"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 58)(1, "div", 59)(2, "p-button", 60);
    ɵɵlistener("keydown", function DatePicker_div_3_div_5_Template_p_button_keydown_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_Template_p_button_keydown_enter_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.incrementHour($event));
    })("keydown.space", function DatePicker_div_3_div_5_Template_p_button_keydown_space_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.incrementHour($event));
    })("mousedown", function DatePicker_div_3_div_5_Template_p_button_mousedown_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 0, 1));
    })("mouseup", function DatePicker_div_3_div_5_Template_p_button_mouseup_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_Template_p_button_keyup_enter_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_Template_p_button_keyup_space_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_Template_p_button_mouseleave_2_listener() {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(3, DatePicker_div_3_div_5_ChevronUpIcon_3_Template, 1, 0, "ChevronUpIcon", 7)(4, DatePicker_div_3_div_5_4_Template, 1, 0, null, 13);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span");
    ɵɵtemplate(6, DatePicker_div_3_div_5_ng_container_6_Template, 2, 0, "ng-container", 7);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "p-button", 60);
    ɵɵlistener("keydown", function DatePicker_div_3_div_5_Template_p_button_keydown_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_Template_p_button_keydown_enter_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.decrementHour($event));
    })("keydown.space", function DatePicker_div_3_div_5_Template_p_button_keydown_space_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.decrementHour($event));
    })("mousedown", function DatePicker_div_3_div_5_Template_p_button_mousedown_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 0, -1));
    })("mouseup", function DatePicker_div_3_div_5_Template_p_button_mouseup_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_Template_p_button_keyup_enter_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_Template_p_button_keyup_space_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_Template_p_button_mouseleave_8_listener() {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(9, DatePicker_div_3_div_5_ChevronDownIcon_9_Template, 1, 0, "ChevronDownIcon", 7)(10, DatePicker_div_3_div_5_10_Template, 1, 0, null, 13);
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 61)(12, "span");
    ɵɵtext(13);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 62)(15, "p-button", 60);
    ɵɵlistener("keydown", function DatePicker_div_3_div_5_Template_p_button_keydown_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_Template_p_button_keydown_enter_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.incrementMinute($event));
    })("keydown.space", function DatePicker_div_3_div_5_Template_p_button_keydown_space_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.incrementMinute($event));
    })("mousedown", function DatePicker_div_3_div_5_Template_p_button_mousedown_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 1, 1));
    })("mouseup", function DatePicker_div_3_div_5_Template_p_button_mouseup_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_Template_p_button_keyup_enter_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_Template_p_button_keyup_space_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_Template_p_button_mouseleave_15_listener() {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(16, DatePicker_div_3_div_5_ChevronUpIcon_16_Template, 1, 0, "ChevronUpIcon", 7)(17, DatePicker_div_3_div_5_17_Template, 1, 0, null, 13);
    ɵɵelementEnd();
    ɵɵelementStart(18, "span");
    ɵɵtemplate(19, DatePicker_div_3_div_5_ng_container_19_Template, 2, 0, "ng-container", 7);
    ɵɵtext(20);
    ɵɵelementEnd();
    ɵɵelementStart(21, "p-button", 60);
    ɵɵlistener("keydown", function DatePicker_div_3_div_5_Template_p_button_keydown_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_Template_p_button_keydown_enter_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.decrementMinute($event));
    })("keydown.space", function DatePicker_div_3_div_5_Template_p_button_keydown_space_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.decrementMinute($event));
    })("mousedown", function DatePicker_div_3_div_5_Template_p_button_mousedown_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 1, -1));
    })("mouseup", function DatePicker_div_3_div_5_Template_p_button_mouseup_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_Template_p_button_keyup_enter_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_Template_p_button_keyup_space_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_Template_p_button_mouseleave_21_listener() {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(22, DatePicker_div_3_div_5_ChevronDownIcon_22_Template, 1, 0, "ChevronDownIcon", 7)(23, DatePicker_div_3_div_5_ng_container_23_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd()();
    ɵɵtemplate(24, DatePicker_div_3_div_5_div_24_Template, 3, 1, "div", 63)(25, DatePicker_div_3_div_5_div_25_Template, 10, 8, "div", 64)(26, DatePicker_div_3_div_5_div_26_Template, 3, 1, "div", 63)(27, DatePicker_div_3_div_5_div_27_Template, 9, 7, "div", 65);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ctx_r1.getTranslation("nextHour"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.currentHour < 10);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.currentHour);
    ɵɵadvance();
    ɵɵattribute("aria-label", ctx_r1.getTranslation("prevHour"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.timeSeparator);
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ctx_r1.getTranslation("nextMinute"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.currentMinute < 10);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.currentMinute);
    ɵɵadvance();
    ɵɵattribute("aria-label", ctx_r1.getTranslation("prevMinute"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showSeconds);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showSeconds);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hourFormat == "12");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hourFormat == "12");
  }
}
function DatePicker_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 70)(1, "p-button", 71);
    ɵɵlistener("keydown", function DatePicker_div_3_div_6_Template_p_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_3_div_6_Template_p_button_onClick_1_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTodayButtonClick($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "p-button", 72);
    ɵɵlistener("keydown", function DatePicker_div_3_div_6_Template_p_button_keydown_2_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_3_div_6_Template_p_button_onClick_2_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClearButtonClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("label", ctx_r1.getTranslation("today"))("ngClass", ctx_r1.todayButtonStyleClass);
    ɵɵadvance();
    ɵɵproperty("label", ctx_r1.getTranslation("clear"))("ngClass", ctx_r1.clearButtonStyleClass);
  }
}
function DatePicker_div_3_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21, 2);
    ɵɵlistener("@overlayAnimation.start", function DatePicker_div_3_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function DatePicker_div_3_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationDone($event));
    })("click", function DatePicker_div_3_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    });
    ɵɵprojection(2);
    ɵɵtemplate(3, DatePicker_div_3_ng_container_3_Template, 1, 0, "ng-container", 13)(4, DatePicker_div_3_ng_container_4_Template, 5, 3, "ng-container", 7)(5, DatePicker_div_3_div_5_Template, 28, 21, "div", 22)(6, DatePicker_div_3_div_6_Template, 3, 4, "div", 23);
    ɵɵprojection(7, 1);
    ɵɵtemplate(8, DatePicker_div_3_ng_container_8_Template, 1, 0, "ng-container", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.panelStyleClass);
    ɵɵproperty("ngStyle", ctx_r1.panelStyle)("ngClass", ctx_r1.panelClass)("@overlayAnimation", ɵɵpureFunction1(18, _c20, ɵɵpureFunction2(15, _c19, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.inline === true);
    ɵɵattribute("id", ctx_r1.panelId)("aria-label", ctx_r1.getTranslation("chooseDate"))("role", ctx_r1.inline ? null : "dialog")("aria-modal", ctx_r1.inline ? null : "true");
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.timeOnly);
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r1.showTime || ctx_r1.timeOnly) && ctx_r1.currentView === "date");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showButtonBar);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
var theme5 = ({
  dt
}) => `
.p-datepicker {
    position: relative;
    display: inline-flex;
    max-width: 100%;
}

.p-datepicker-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-datepicker-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${dt("datepicker.dropdown.width")};
    border-start-end-radius: ${dt("datepicker.dropdown.border.radius")};
    border-end-end-radius: ${dt("datepicker.dropdown.border.radius")};
    background: ${dt("datepicker.dropdown.background")};
    border: 1px solid ${dt("datepicker.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${dt("datepicker.dropdown.color")};
    transition: background ${dt("datepicker.transition.duration")}, color ${dt("datepicker.transition.duration")}, border-color ${dt("datepicker.transition.duration")}, outline-color ${dt("datepicker.transition.duration")};
    outline-color: transparent;
}

.p-datepicker-dropdown:not(:disabled):hover {
    background: ${dt("datepicker.dropdown.hover.background")};
    border-color: ${dt("datepicker.dropdown.hover.border.color")};
    color: ${dt("datepicker.dropdown.hover.color")};
}

.p-datepicker-dropdown:not(:disabled):active {
    background: ${dt("datepicker.dropdown.active.background")};
    border-color: ${dt("datepicker.dropdown.active.border.color")};
    color: ${dt("datepicker.dropdown.active.color")};
}

.p-datepicker-dropdown:focus-visible {
    box-shadow: ${dt("datepicker.dropdown.focus.ring.shadow")};
    outline: ${dt("datepicker.dropdown.focus.ring.width")} ${dt("datepicker.dropdown.focus.ring.style")} ${dt("datepicker.dropdown.focus.ring.color")};
    outline-offset: ${dt("datepicker.dropdown.focus.ring.offset")};
}

.p-datepicker:has(.p-datepicker-input-icon-container) {
    position: relative;
}

.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
    padding-inline-end: calc((${dt("form.field.padding.x")} * 2) + ${dt("icon.size")});
}

.p-datepicker-input-icon-container {
    cursor: pointer;
    position: absolute;
    top: 50%;
    inset-inline-end: ${dt("form.field.padding.x")};
    margin-top: calc(-1 * (${dt("icon.size")} / 2));
    color: ${dt("datepicker.input.icon.color")};
    line-height: 1;
}

.p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-clear-icon,
.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-clear-icon {
    inset-inline-end: calc(${dt("datepicker.dropdown.width")} + ${dt("form.field.padding.x")});
}

.p-datepicker-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    color: ${dt("form.field.icon.color")};
    inset-inline-end: ${dt("form.field.padding.x")};
}

.p-datepicker-fluid {
    display: flex;
}

.p-datepicker-fluid .p-datepicker-input {
    width: 1%;
}

.p-datepicker .p-datepicker-panel {
    min-width: 100%;
}

.p-datepicker-panel {
    width: auto;
    padding: ${dt("datepicker.panel.padding")};
    background: ${dt("datepicker.panel.background")};
    color: ${dt("datepicker.panel.color")};
    border: 1px solid ${dt("datepicker.panel.border.color")};
    border-radius: ${dt("datepicker.panel.border.radius")};
    box-shadow: ${dt("datepicker.panel.shadow")};
}

.p-datepicker-panel-inline {
    display: inline-block;
    overflow-x: auto;
    box-shadow: none;
}

.p-datepicker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${dt("datepicker.header.padding")};
    background: ${dt("datepicker.header.background")};
    color: ${dt("datepicker.header.color")};
    border-bottom: 1px solid ${dt("datepicker.header.border.color")};
}

.p-datepicker-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-datepicker-prev-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-datepicker-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${dt("datepicker.title.gap")};
    font-weight: ${dt("datepicker.title.font.weight")};
}

.p-datepicker-select-year,
.p-datepicker-select-month {
    border: none;
    background: transparent;
    margin: 0;
    cursor: pointer;
    font-weight: inherit;
    transition: background ${dt("datepicker.transition.duration")}, color ${dt("datepicker.transition.duration")}, border-color ${dt("datepicker.transition.duration")}, outline-color ${dt("datepicker.transition.duration")}, box-shadow ${dt("datepicker.transition.duration")};
}

.p-datepicker-select-month {
    padding: ${dt("datepicker.select.month.padding")};
    color: ${dt("datepicker.select.month.color")};
    border-radius: ${dt("datepicker.select.month.border.radius")};
}

.p-datepicker-select-year {
    padding: ${dt("datepicker.select.year.padding")};
    color: ${dt("datepicker.select.year.color")};
    border-radius: ${dt("datepicker.select.year.border.radius")};
}

.p-datepicker-select-month:enabled:hover {
    background: ${dt("datepicker.select.month.hover.background")};
    color: ${dt("datepicker.select.month.hover.color")};
}

.p-datepicker-select-year:enabled:hover {
    background: ${dt("datepicker.select.year.hover.background")};
    color: ${dt("datepicker.select.year.hover.color")};
}

.p-datepicker-calendar-container {
    display: flex;
}

.p-datepicker-calendar-container .p-datepicker-calendar {
    flex: 1 1 auto;
    border-inline-start: 1px solid ${dt("datepicker.group.border.color")};
    padding-inline: ${dt("datepicker.group.gap")};
}

.p-datepicker-calendar-container .p-datepicker-calendar:first-child {
    padding-inline-start: 0;
    border-inline-start: 0 none;
}

.p-datepicker-calendar-container .p-datepicker-calendar:last-child {
    padding-inline-end: 0;
}

.p-datepicker-day-view {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: ${dt("datepicker.day.view.margin")};
}

.p-datepicker-weekday-cell {
    padding: ${dt("datepicker.week.day.padding")};
}

.p-datepicker-weekday {
    font-weight: ${dt("datepicker.week.day.font.weight")};
    color: ${dt("datepicker.week.day.color")};
}

.p-datepicker-day-cell {
    padding: ${dt("datepicker.date.padding")};
}

.p-datepicker-day {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: ${dt("datepicker.date.width")};
    height: ${dt("datepicker.date.height")};
    border-radius: ${dt("datepicker.date.border.radius")};
    transition: background ${dt("datepicker.transition.duration")}, color ${dt("datepicker.transition.duration")}, border-color ${dt("datepicker.transition.duration")},
        box-shadow ${dt("datepicker.transition.duration")}, outline-color ${dt("datepicker.transition.duration")};
    border: 1px solid transparent;
    outline-color: transparent;
    color: ${dt("datepicker.date.color")};
}

.p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
    background: ${dt("datepicker.date.hover.background")};
    color: ${dt("datepicker.date.hover.color")};
}

.p-datepicker-day:focus-visible {
    box-shadow: ${dt("datepicker.date.focus.ring.shadow")};
    outline: ${dt("datepicker.date.focus.ring.width")} ${dt("datepicker.date.focus.ring.style")} ${dt("datepicker.date.focus.ring.color")};
    outline-offset: ${dt("datepicker.date.focus.ring.offset")};
}

.p-datepicker-day-selected {
    background: ${dt("datepicker.date.selected.background")};
    color: ${dt("datepicker.date.selected.color")};
}

.p-datepicker-day-selected-range {
    background: ${dt("datepicker.date.range.selected.background")};
    color: ${dt("datepicker.date.range.selected.color")};
}

.p-datepicker-today > .p-datepicker-day {
    background: ${dt("datepicker.today.background")};
    color: ${dt("datepicker.today.color")};
}

.p-datepicker-today > .p-datepicker-day-selected {
    background: ${dt("datepicker.date.selected.background")};
    color: ${dt("datepicker.date.selected.color")};
}

.p-datepicker-today > .p-datepicker-day-selected-range {
    background: ${dt("datepicker.date.range.selected.background")};
    color: ${dt("datepicker.date.range.selected.color")};
}

.p-datepicker-weeknumber {
    text-align: center
}

.p-datepicker-month-view {
    margin: ${dt("datepicker.month.view.margin")};
}

.p-datepicker-month {
    width: 33.3%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: ${dt("datepicker.month.padding")};
    transition: background ${dt("datepicker.transition.duration")}, color ${dt("datepicker.transition.duration")}, border-color ${dt("datepicker.transition.duration")}, box-shadow ${dt("datepicker.transition.duration")}, outline-color ${dt("datepicker.transition.duration")};
    border-radius: ${dt("datepicker.month.border.radius")};
    outline-color: transparent;
    color: ${dt("datepicker.date.color")};
}

.p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
    color:  ${dt("datepicker.date.hover.color")};
    background: ${dt("datepicker.date.hover.background")};
}

.p-datepicker-month-selected {
    color: ${dt("datepicker.date.selected.color")};
    background: ${dt("datepicker.date.selected.background")};
}

.p-datepicker-month:not(.p-disabled):focus-visible {
    box-shadow: ${dt("datepicker.date.focus.ring.shadow")};
    outline: ${dt("datepicker.date.focus.ring.width")} ${dt("datepicker.date.focus.ring.style")} ${dt("datepicker.date.focus.ring.color")};
    outline-offset: ${dt("datepicker.date.focus.ring.offset")};
}

.p-datepicker-year-view {
    margin: ${dt("datepicker.year.view.margin")};
}

.p-datepicker-year {
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: ${dt("datepicker.year.padding")};
    transition: background ${dt("datepicker.transition.duration")}, color ${dt("datepicker.transition.duration")}, border-color ${dt("datepicker.transition.duration")}, box-shadow ${dt("datepicker.transition.duration")}, outline-color ${dt("datepicker.transition.duration")};
    border-radius: ${dt("datepicker.year.border.radius")};
    outline-color: transparent;
    color: ${dt("datepicker.date.color")};
}

.p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
    color: ${dt("datepicker.date.hover.color")};
    background: ${dt("datepicker.date.hover.background")};
}

.p-datepicker-year-selected {
    color: ${dt("datepicker.date.selected.color")};
    background: ${dt("datepicker.date.selected.background")};
}

.p-datepicker-year:not(.p-disabled):focus-visible {
    box-shadow: ${dt("datepicker.date.focus.ring.shadow")};
    outline: ${dt("datepicker.date.focus.ring.width")} ${dt("datepicker.date.focus.ring.style")} ${dt("datepicker.date.focus.ring.color")};
    outline-offset: ${dt("datepicker.date.focus.ring.offset")};
}

.p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  ${dt("datepicker.buttonbar.padding")};
    border-top: 1px solid ${dt("datepicker.buttonbar.border.color")};
}

.p-datepicker-buttonbar .p-button {
    width: auto;
}

.p-datepicker-time-picker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${dt("datepicker.time.picker.border.color")};
    padding: 0;
    gap: ${dt("datepicker.time.picker.gap")};
}

.p-datepicker-calendar-container + .p-datepicker-time-picker {
    padding: ${dt("datepicker.time.picker.padding")};
}

.p-datepicker-time-picker > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${dt("datepicker.time.picker.button.gap")};
}

.p-datepicker-time-picker span {
    font-size: 1rem;
}

.p-datepicker-timeonly .p-datepicker-time-picker {
    border-top: 0 none;
}

.p-datepicker-calendar:not(:first-child):not(:last-child) .p-datepicker-header {
    justify-content: center;
}

.p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {
    width: ${dt("datepicker.dropdown.sm.width")};
}

.p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,
.p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {
    font-size: ${dt("form.field.sm.font.size")};
    width: ${dt("form.field.sm.font.size")};
    height: ${dt("form.field.sm.font.size")};
}

.p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {
    width: ${dt("datepicker.dropdown.lg.width")};
}

.p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,
.p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {
    font-size: ${dt("form.field.lg.font.size")};
    width: ${dt("form.field.lg.font.size")};
    height: ${dt("form.field.lg.font.size")};
}

/* For PrimeNG */

p-calendar.ng-invalid.ng-dirty .p-datepicker.p-inputwrapper .p-inputtext{
    border-color: ${dt("inputtext.invalid.border.color")};
}

p-datePicker.ng-invalid.ng-dirty .p-datepicker.p-inputwrapper .p-inputtext,
p-date-picker.ng-invalid.ng-dirty .p-datepicker.p-inputwrapper .p-inputtext,
p-datepicker.ng-invalid.ng-dirty .p-datepicker.p-inputwrapper .p-inputtext {
    border-color: ${dt("inputtext.invalid.border.color")};
}

`;
var inlineStyles = {
  root: ({
    props
  }) => ({
    position: props.appendTo === "self" ? "relative" : void 0
  })
};
var classes5 = {
  root: ({
    instance
  }) => ({
    "p-datepicker p-component p-inputwrapper": true,
    "p-datepicker-fluid": instance.hasFluid,
    "p-inputwrapper-filled": instance.filled,
    "p-variant-filled": instance.variant === "filled" || instance.config.inputVariant() === "filled" || instance.config.inputStyle() === "filled",
    "p-inputwrapper-focus": instance.focus,
    "p-focus": instance.focus || instance.overlayVisible
  }),
  pcInput: "p-datepicker-input",
  dropdown: "p-datepicker-dropdown",
  inputIconContainer: "p-datepicker-input-icon-container",
  inputIcon: "p-datepicker-input-icon",
  panel: ({
    instance
  }) => ({
    "p-datepicker-panel p-component": true,
    "p-datepicker-panel-inline": instance.inline,
    "p-disabled": instance.disabled,
    "p-datepicker-timeonly": instance.timeOnly
  }),
  calendarContainer: "p-datepicker-calendar-container",
  calendar: "p-datepicker-calendar",
  header: "p-datepicker-header",
  pcPrevButton: "p-datepicker-prev-button",
  title: "p-datepicker-title",
  selectMonth: "p-datepicker-select-month",
  selectYear: "p-datepicker-select-year",
  decade: "p-datepicker-decade",
  pcNextButton: "p-datepicker-next-button",
  dayView: "p-datepicker-day-view",
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-datepicker-weeklabel-container p-disabled",
  weekDayCell: "p-datepicker-weekday-cell",
  weekDay: "p-datepicker-weekday",
  dayCell: ({
    date
  }) => ["p-datepicker-day-cell", {
    "p-datepicker-other-month": date.otherMonth,
    "p-datepicker-today": date.today
  }],
  day: ({
    instance,
    date
  }) => {
    let selectedDayClass = "";
    if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
      const startDate = instance.value[0];
      const endDate = instance.value[1];
      const isStart = startDate && date.year === startDate.getFullYear() && date.month === startDate.getMonth() && date.day === startDate.getDate();
      const isEnd = endDate && date.year === endDate.getFullYear() && date.month === endDate.getMonth() && date.day === endDate.getDate();
      selectedDayClass = isStart || isEnd ? "p-datepicker-day-selected" : "p-datepicker-day-selected-range";
    }
    return {
      "p-datepicker-day": true,
      "p-datepicker-day-selected": !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
      "p-disabled": instance.disabled || !date.selectable,
      [selectedDayClass]: true
    };
  },
  monthView: "p-datepicker-month-view",
  month: ({
    instance,
    props,
    month,
    index
  }) => ["p-datepicker-month", {
    "p-datepicker-month-selected": instance.isMonthSelected(index),
    "p-disabled": props.disabled || !month.selectable
  }],
  yearView: "p-datepicker-year-view",
  year: ({
    instance,
    props,
    year
  }) => ["p-datepicker-year", {
    "p-datepicker-year-selected": instance.isYearSelected(year.value),
    "p-disabled": props.disabled || !year.selectable
  }],
  timePicker: "p-datepicker-time-picker",
  hourPicker: "p-datepicker-hour-picker",
  pcIncrementButton: "p-datepicker-increment-button",
  pcDecrementButton: "p-datepicker-decrement-button",
  separator: "p-datepicker-separator",
  minutePicker: "p-datepicker-minute-picker",
  secondPicker: "p-datepicker-second-picker",
  ampmPicker: "p-datepicker-ampm-picker",
  buttonbar: "p-datepicker-buttonbar",
  pcTodayButton: "p-datepicker-today-button",
  pcClearButton: "p-datepicker-clear-button"
};
var DatePickerStyle = class _DatePickerStyle extends BaseStyle {
  name = "datepicker";
  theme = theme5;
  classes = classes5;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵDatePickerStyle_BaseFactory;
    return function DatePickerStyle_Factory(__ngFactoryType__) {
      return (ɵDatePickerStyle_BaseFactory || (ɵDatePickerStyle_BaseFactory = ɵɵgetInheritedFactory(_DatePickerStyle)))(__ngFactoryType__ || _DatePickerStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _DatePickerStyle,
    factory: _DatePickerStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerStyle, [{
    type: Injectable
  }], null, null);
})();
var DatePickerClasses;
(function(DatePickerClasses2) {
  DatePickerClasses2["root"] = "p-datepicker";
  DatePickerClasses2["pcInput"] = "p-datepicker-input";
  DatePickerClasses2["dropdown"] = "p-datepicker-dropdown";
  DatePickerClasses2["inputIconContainer"] = "p-datepicker-input-icon-container";
  DatePickerClasses2["inputIcon"] = "p-datepicker-input-icon";
  DatePickerClasses2["panel"] = "p-datepicker-panel";
  DatePickerClasses2["calendarContainer"] = "p-datepicker-calendar-container";
  DatePickerClasses2["calendar"] = "p-datepicker-calendar";
  DatePickerClasses2["header"] = "p-datepicker-header";
  DatePickerClasses2["pcPrevButton"] = "p-datepicker-prev-button";
  DatePickerClasses2["title"] = "p-datepicker-title";
  DatePickerClasses2["selectMonth"] = "p-datepicker-select-month";
  DatePickerClasses2["selectYear"] = "p-datepicker-select-year";
  DatePickerClasses2["decade"] = "p-datepicker-decade";
  DatePickerClasses2["pcNextButton"] = "p-datepicker-next-button";
  DatePickerClasses2["dayView"] = "p-datepicker-day-view";
  DatePickerClasses2["weekHeader"] = "p-datepicker-weekheader";
  DatePickerClasses2["weekNumber"] = "p-datepicker-weeknumber";
  DatePickerClasses2["weekLabelContainer"] = "p-datepicker-weeklabel-container";
  DatePickerClasses2["weekDayCell"] = "p-datepicker-weekday-cell";
  DatePickerClasses2["weekDay"] = "p-datepicker-weekday";
  DatePickerClasses2["dayCell"] = "p-datepicker-day-cell";
  DatePickerClasses2["day"] = "p-datepicker-day";
  DatePickerClasses2["monthView"] = "p-datepicker-month-view";
  DatePickerClasses2["month"] = "p-datepicker-month";
  DatePickerClasses2["yearView"] = "p-datepicker-year-view";
  DatePickerClasses2["year"] = "p-datepicker-year";
  DatePickerClasses2["timePicker"] = "p-datepicker-time-picker";
  DatePickerClasses2["hourPicker"] = "p-datepicker-hour-picker";
  DatePickerClasses2["pcIncrementButton"] = "p-datepicker-increment-button";
  DatePickerClasses2["pcDecrementButton"] = "p-datepicker-decrement-button";
  DatePickerClasses2["separator"] = "p-datepicker-separator";
  DatePickerClasses2["minutePicker"] = "p-datepicker-minute-picker";
  DatePickerClasses2["secondPicker"] = "p-datepicker-second-picker";
  DatePickerClasses2["ampmPicker"] = "p-datepicker-ampm-picker";
  DatePickerClasses2["buttonbar"] = "p-datepicker-buttonbar";
  DatePickerClasses2["pcTodayButton"] = "p-datepicker-today-button";
  DatePickerClasses2["pcClearButton"] = "p-datepicker-clear-button";
})(DatePickerClasses || (DatePickerClasses = {}));
var DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePicker),
  multi: true
};
var DatePicker = class _DatePicker extends BaseComponent {
  zone;
  overlayService;
  iconDisplay = "button";
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Placeholder text for the input.
   * @group Props
   */
  placeholder;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the icon button for accessibility.
   * @group Props
   */
  iconAriaLabel;
  /**
   * When specified, disables the component.
   * @group Props
   */
  disabled;
  /**
   * Format of the date which can also be defined at locale settings.
   * @group Props
   */
  get dateFormat() {
    return this._dateFormat;
  }
  set dateFormat(value) {
    this._dateFormat = value;
    if (this.initialized) {
      this.updateInputfield();
    }
  }
  /**
   * Separator for multiple selection mode.
   * @group Props
   */
  multipleSeparator = ",";
  /**
   * Separator for joining start and end dates on range selection mode.
   * @group Props
   */
  rangeSeparator = "-";
  /**
   * When enabled, displays the datepicker as inline. Default is false for popup mode.
   * @group Props
   */
  inline = false;
  /**
   * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
   * @group Props
   */
  showOtherMonths = true;
  /**
   * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
   * @group Props
   */
  selectOtherMonths;
  /**
   * When enabled, displays a button with icon next to input.
   * @group Props
   */
  showIcon;
  /**
   * Whether the component should span the full width of its parent.
   * @group Props
   */
  fluid;
  /**
   * Icon of the datepicker button.
   * @group Props
   */
  icon;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having#mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * When specified, prevents entering the date manually with keyboard.
   * @group Props
   */
  readonlyInput;
  /**
   * The cutoff year for determining the century for a date.
   * @group Props
   */
  shortYearCutoff = "+10";
  /**
   * Whether the month should be rendered as a dropdown instead of text.
   * @group Props
   * @deprecated Navigator is always on.
   */
  monthNavigator;
  /**
   * Whether the year should be rendered as a dropdown instead of text.
   * @group Props
   * @deprecated  Navigator is always on.
   */
  yearNavigator;
  /**
   * Specifies 12 or 24 hour format.
   * @group Props
   */
  get hourFormat() {
    return this._hourFormat;
  }
  set hourFormat(value) {
    this._hourFormat = value;
    if (this.initialized) {
      this.updateInputfield();
    }
  }
  /**
   * Whether to display timepicker only.
   * @group Props
   */
  timeOnly;
  /**
   * Hours to change per step.
   * @group Props
   */
  stepHour = 1;
  /**
   * Minutes to change per step.
   * @group Props
   */
  stepMinute = 1;
  /**
   * Seconds to change per step.
   * @group Props
   */
  stepSecond = 1;
  /**
   * Whether to show the seconds in time picker.
   * @group Props
   */
  showSeconds = false;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * When disabled, datepicker will not be visible with input focus.
   * @group Props
   */
  showOnFocus = true;
  /**
   * When enabled, datepicker will show week numbers.
   * @group Props
   */
  showWeek = false;
  /**
   * When enabled, datepicker will start week numbers from first day of the year.
   * @group Props
   */
  startWeekFromFirstDayOfYear = false;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * Type of the value to write back to ngModel, default is date and alternative is string.
   * @group Props
   */
  dataType = "date";
  /**
   * Defines the quantity of the selection, valid values are "single", "multiple" and "range".
   * @group Props
   */
  selectionMode = "single";
  /**
   * Maximum number of selectable dates in multiple mode.
   * @group Props
   */
  maxDateCount;
  /**
   * Whether to display today and clear buttons at the footer
   * @group Props
   */
  showButtonBar;
  /**
   * Style class of the today button.
   * @group Props
   */
  todayButtonStyleClass;
  /**
   * Style class of the clear button.
   * @group Props
   */
  clearButtonStyleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
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
   * Style class of the datetimepicker container element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Inline style of the datetimepicker container element.
   * @group Props
   */
  panelStyle;
  /**
   * Keep invalid value when input blur.
   * @group Props
   */
  keepInvalid = false;
  /**
   * Whether to hide the overlay on date selection.
   * @group Props
   */
  hideOnDateTimeSelect = true;
  /**
   * When enabled, datepicker overlay is displayed as optimized for touch devices.
   * @group Props
   */
  touchUI;
  /**
   * Separator of time selector.
   * @group Props
   */
  timeSeparator = ":";
  /**
   * When enabled, can only focus on elements inside the datepicker.
   * @group Props
   */
  focusTrap = true;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * The minimum selectable date.
   * @group Props
   */
  get minDate() {
    return this._minDate;
  }
  set minDate(date) {
    this._minDate = date;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * The maximum selectable date.
   * @group Props
   */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(date) {
    this._maxDate = date;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Array with dates that should be disabled (not selectable).
   * @group Props
   */
  get disabledDates() {
    return this._disabledDates;
  }
  set disabledDates(disabledDates) {
    this._disabledDates = disabledDates;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Array with weekday numbers that should be disabled (not selectable).
   * @group Props
   */
  get disabledDays() {
    return this._disabledDays;
  }
  set disabledDays(disabledDays) {
    this._disabledDays = disabledDays;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * The range of years displayed in the year drop-down in (nnnn:nnnn) format such as (2000:2020).
   * @group Props
   * @deprecated Years are based on decades by default.
   */
  get yearRange() {
    return this._yearRange;
  }
  set yearRange(yearRange) {
    this._yearRange = yearRange;
    if (yearRange) {
      const years = yearRange.split(":");
      const yearStart = parseInt(years[0]);
      const yearEnd = parseInt(years[1]);
      this.populateYearOptions(yearStart, yearEnd);
    }
  }
  /**
   * Whether to display timepicker.
   * @group Props
   */
  get showTime() {
    return this._showTime;
  }
  set showTime(showTime) {
    this._showTime = showTime;
    if (this.currentHour === void 0) {
      this.initTime(this.value || /* @__PURE__ */ new Date());
    }
    this.updateInputfield();
  }
  /**
   * An array of options for responsive design.
   * @group Props
   */
  get responsiveOptions() {
    return this._responsiveOptions;
  }
  set responsiveOptions(responsiveOptions) {
    this._responsiveOptions = responsiveOptions;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  /**
   * Number of months to display.
   * @group Props
   */
  get numberOfMonths() {
    return this._numberOfMonths;
  }
  set numberOfMonths(numberOfMonths) {
    this._numberOfMonths = numberOfMonths;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  /**
   * Defines the first of the week for various date calculations.
   * @group Props
   */
  get firstDayOfWeek() {
    return this._firstDayOfWeek;
  }
  set firstDayOfWeek(firstDayOfWeek) {
    this._firstDayOfWeek = firstDayOfWeek;
    this.createWeekDays();
  }
  /**
   * Option to set datepicker locale.
   * @group Props
   * @deprecated Locale property has no effect, use new i18n API instead.
   */
  set locale(newLocale) {
    console.log("Locale property has no effect, use new i18n API instead.");
  }
  /**
   * Type of view to display, valid values are "date" for datepicker and "month" for month picker.
   * @group Props
   */
  get view() {
    return this._view;
  }
  set view(view) {
    this._view = view;
    this.currentView = this._view;
  }
  /**
   * Set the date to highlight on first opening if the field is blank.
   * @group Props
   */
  get defaultDate() {
    return this._defaultDate;
  }
  set defaultDate(defaultDate) {
    this._defaultDate = defaultDate;
    if (this.initialized) {
      const date = defaultDate || /* @__PURE__ */ new Date();
      this.currentMonth = date.getMonth();
      this.currentYear = date.getFullYear();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Callback to invoke on focus of input field.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke on blur of input field.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when date panel closed.
   * @param {Event} event - Mouse event
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke on date select.
   * @param {Date} date - date value.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when input field cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when input field is being typed.
   * @param {Event} event - browser event
   * @group Emits
   */
  onInput = new EventEmitter();
  /**
   * Callback to invoke when today button is clicked.
   * @param {Date} date - today as a date instance.
   * @group Emits
   */
  onTodayClick = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onClearClick = new EventEmitter();
  /**
   * Callback to invoke when a month is changed using the navigators.
   * @param {DatePickerMonthChangeEvent} event - custom month change event.
   * @group Emits
   */
  onMonthChange = new EventEmitter();
  /**
   * Callback to invoke when a year is changed using the navigators.
   * @param {DatePickerYearChangeEvent} event - custom year change event.
   * @group Emits
   */
  onYearChange = new EventEmitter();
  /**
   * Callback to invoke when clicked outside of the date panel.
   * @group Emits
   */
  onClickOutside = new EventEmitter();
  /**
   * Callback to invoke when datepicker panel is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  containerViewChild;
  inputfieldViewChild;
  set content(content) {
    this.contentViewChild = content;
    if (this.contentViewChild) {
      if (this.isMonthNavigate) {
        Promise.resolve(null).then(() => this.updateFocus());
        this.isMonthNavigate = false;
      } else {
        if (!this.focus && !this.inline) {
          this.initFocusableCell();
        }
      }
    }
  }
  _componentStyle = inject(DatePickerStyle);
  contentViewChild;
  value;
  dates;
  months;
  weekDays;
  currentMonth;
  currentYear;
  currentHour;
  currentMinute;
  currentSecond;
  pm;
  mask;
  maskClickListener;
  overlay;
  responsiveStyleElement;
  overlayVisible;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  calendarElement;
  timePickerTimer;
  documentClickListener;
  animationEndListener;
  ticksTo1970;
  yearOptions;
  focus;
  isKeydown;
  filled;
  inputFieldValue = null;
  _minDate;
  _maxDate;
  _dateFormat;
  _hourFormat = "24";
  _showTime;
  _yearRange;
  preventDocumentListener;
  dayClass(date) {
    return this._componentStyle.classes.day({
      instance: this,
      date
    });
  }
  /**
   * Custom template for date cells.
   * @group Templates
   */
  dateTemplate;
  /**
   * Custom template for header section.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom template for footer section.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom template for disabled date cells.
   * @group Templates
   */
  disabledDateTemplate;
  /**
   * Custom template for decade view.
   * @group Templates
   */
  decadeTemplate;
  /**
   * Custom template for previous month icon.
   * @group Templates
   */
  previousIconTemplate;
  /**
   * Custom template for next month icon.
   * @group Templates
   */
  nextIconTemplate;
  /**
   * Custom template for trigger icon.
   * @group Templates
   */
  triggerIconTemplate;
  /**
   * Custom template for clear icon.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Custom template for decrement icon.
   * @group Templates
   */
  decrementIconTemplate;
  /**
   * Custom template for increment icon.
   * @group Templates
   */
  incrementIconTemplate;
  /**
   * Custom template for input icon.
   * @group Templates
   */
  inputIconTemplate;
  _dateTemplate;
  _headerTemplate;
  _footerTemplate;
  _disabledDateTemplate;
  _decadeTemplate;
  _previousIconTemplate;
  _nextIconTemplate;
  _triggerIconTemplate;
  _clearIconTemplate;
  _decrementIconTemplate;
  _incrementIconTemplate;
  _inputIconTemplate;
  _disabledDates;
  _disabledDays;
  selectElement;
  todayElement;
  focusElement;
  scrollHandler;
  documentResizeListener;
  navigationState = null;
  isMonthNavigate;
  initialized;
  translationSubscription;
  _locale;
  _responsiveOptions;
  currentView;
  attributeSelector;
  panelId;
  _numberOfMonths = 1;
  _firstDayOfWeek;
  _view = "date";
  preventFocus;
  _defaultDate;
  _focusKey = null;
  window;
  get locale() {
    return this._locale;
  }
  get iconButtonAriaLabel() {
    return this.iconAriaLabel ? this.iconAriaLabel : this.getTranslation("chooseDate");
  }
  get prevIconAriaLabel() {
    return this.currentView === "year" ? this.getTranslation("prevDecade") : this.currentView === "month" ? this.getTranslation("prevYear") : this.getTranslation("prevMonth");
  }
  get nextIconAriaLabel() {
    return this.currentView === "year" ? this.getTranslation("nextDecade") : this.currentView === "month" ? this.getTranslation("nextYear") : this.getTranslation("nextMonth");
  }
  get rootClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  get panelClass() {
    return this._componentStyle.classes.panel({
      instance: this
    });
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  constructor(zone, overlayService) {
    super();
    this.zone = zone;
    this.overlayService = overlayService;
    this.window = this.document.defaultView;
  }
  ngOnInit() {
    super.ngOnInit();
    this.attributeSelector = uuid("pn_id_");
    this.panelId = this.attributeSelector + "_panel";
    const date = this.defaultDate || /* @__PURE__ */ new Date();
    this.createResponsiveStyle();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.yearOptions = [];
    this.currentView = this.view;
    if (this.view === "date") {
      this.createWeekDays();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
      this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7;
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.createWeekDays();
      this.cd.markForCheck();
    });
    this.initialized = true;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.inline) {
      this.contentViewChild && this.contentViewChild.nativeElement.setAttribute(this.attributeSelector, "");
      if (!this.disabled && !this.inline) {
        this.initFocusableCell();
        if (this.numberOfMonths === 1) {
          if (this.contentViewChild && this.contentViewChild.nativeElement) {
            this.contentViewChild.nativeElement.style.width = getOuterWidth(this.containerViewChild?.nativeElement) + "px";
          }
        }
      }
    }
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "date":
          this._dateTemplate = item.template;
          break;
        case "decade":
          this._decadeTemplate = item.template;
          break;
        case "disabledDate":
          this._disabledDateTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "inputicon":
          this._inputIconTemplate = item.template;
          break;
        case "previousicon":
          this._previousIconTemplate = item.template;
          break;
        case "nexticon":
          this._nextIconTemplate = item.template;
          break;
        case "triggericon":
          this._triggerIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "decrementicon":
          this._decrementIconTemplate = item.template;
          break;
        case "incrementicon":
          this._incrementIconTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        default:
          this._dateTemplate = item.template;
          break;
      }
    });
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  populateYearOptions(start, end) {
    this.yearOptions = [];
    for (let i = start; i <= end; i++) {
      this.yearOptions.push(i);
    }
  }
  createWeekDays() {
    this.weekDays = [];
    let dayIndex = this.getFirstDateOfWeek();
    let dayLabels = this.getTranslation(TranslationKeys.DAY_NAMES_MIN);
    for (let i = 0; i < 7; i++) {
      this.weekDays.push(dayLabels[dayIndex]);
      dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
    }
  }
  monthPickerValues() {
    let monthPickerValues = [];
    for (let i = 0; i <= 11; i++) {
      monthPickerValues.push(this.config.getTranslation("monthNamesShort")[i]);
    }
    return monthPickerValues;
  }
  yearPickerValues() {
    let yearPickerValues = [];
    let base = this.currentYear - this.currentYear % 10;
    for (let i = 0; i < 10; i++) {
      yearPickerValues.push(base + i);
    }
    return yearPickerValues;
  }
  createMonths(month, year) {
    this.months = this.months = [];
    for (let i = 0; i < this.numberOfMonths; i++) {
      let m = month + i;
      let y = year;
      if (m > 11) {
        m = m % 12;
        y = year + Math.floor((month + i) / 12);
      }
      this.months.push(this.createMonth(m, y));
    }
  }
  getWeekNumber(date) {
    let checkDate = new Date(date.getTime());
    if (this.startWeekFromFirstDayOfYear) {
      let firstDayOfWeek = +this.getFirstDateOfWeek();
      checkDate.setDate(checkDate.getDate() + 6 + firstDayOfWeek - checkDate.getDay());
    } else {
      checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    }
    let time = checkDate.getTime();
    checkDate.setMonth(0);
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate.getTime()) / 864e5) / 7) + 1;
  }
  createMonth(month, year) {
    let dates = [];
    let firstDay = this.getFirstDayOfMonthIndex(month, year);
    let daysLength = this.getDaysCountInMonth(month, year);
    let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
    let dayNo = 1;
    let today = /* @__PURE__ */ new Date();
    let weekNumbers = [];
    let monthRows = Math.ceil((daysLength + firstDay) / 7);
    for (let i = 0; i < monthRows; i++) {
      let week = [];
      if (i == 0) {
        for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
          let prev = this.getPreviousMonthAndYear(month, year);
          week.push({
            day: j,
            month: prev.month,
            year: prev.year,
            otherMonth: true,
            today: this.isToday(today, j, prev.month, prev.year),
            selectable: this.isSelectable(j, prev.month, prev.year, true)
          });
        }
        let remainingDaysLength = 7 - week.length;
        for (let j = 0; j < remainingDaysLength; j++) {
          week.push({
            day: dayNo,
            month,
            year,
            today: this.isToday(today, dayNo, month, year),
            selectable: this.isSelectable(dayNo, month, year, false)
          });
          dayNo++;
        }
      } else {
        for (let j = 0; j < 7; j++) {
          if (dayNo > daysLength) {
            let next = this.getNextMonthAndYear(month, year);
            week.push({
              day: dayNo - daysLength,
              month: next.month,
              year: next.year,
              otherMonth: true,
              today: this.isToday(today, dayNo - daysLength, next.month, next.year),
              selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
            });
          } else {
            week.push({
              day: dayNo,
              month,
              year,
              today: this.isToday(today, dayNo, month, year),
              selectable: this.isSelectable(dayNo, month, year, false)
            });
          }
          dayNo++;
        }
      }
      if (this.showWeek) {
        weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
      }
      dates.push(week);
    }
    return {
      month,
      year,
      dates,
      weekNumbers
    };
  }
  initTime(date) {
    this.pm = date.getHours() > 11;
    if (this.showTime) {
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
      this.setCurrentHourPM(date.getHours());
    } else if (this.timeOnly) {
      this.currentMinute = 0;
      this.currentHour = 0;
      this.currentSecond = 0;
    }
  }
  navBackward(event2) {
    if (this.disabled) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === "month") {
      this.decrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === "year") {
      this.decrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.decrementYear();
      } else {
        this.currentMonth--;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  navForward(event2) {
    if (this.disabled) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === "month") {
      this.incrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === "year") {
      this.incrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.incrementYear();
      } else {
        this.currentMonth++;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  decrementYear() {
    this.currentYear--;
    let _yearOptions = this.yearOptions;
    if (this.yearNavigator && this.currentYear < _yearOptions[0]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] - difference, _yearOptions[_yearOptions.length - 1] - difference);
    }
  }
  decrementDecade() {
    this.currentYear = this.currentYear - 10;
  }
  incrementDecade() {
    this.currentYear = this.currentYear + 10;
  }
  incrementYear() {
    this.currentYear++;
    let _yearOptions = this.yearOptions;
    if (this.yearNavigator && this.currentYear > _yearOptions[_yearOptions.length - 1]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] + difference, _yearOptions[_yearOptions.length - 1] + difference);
    }
  }
  switchToMonthView(event2) {
    this.setCurrentView("month");
    event2.preventDefault();
  }
  switchToYearView(event2) {
    this.setCurrentView("year");
    event2.preventDefault();
  }
  onDateSelect(event2, dateMeta) {
    if (this.disabled || !dateMeta.selectable) {
      event2.preventDefault();
      return;
    }
    if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
      this.value = this.value.filter((date, i) => {
        return !this.isDateEquals(date, dateMeta);
      });
      if (this.value.length === 0) {
        this.value = null;
      }
      this.updateModel(this.value);
    } else {
      if (this.shouldSelectDate(dateMeta)) {
        this.selectDate(dateMeta);
      }
    }
    if (this.hideOnDateTimeSelect && (this.isSingleSelection() || this.isRangeSelection() && this.value[1])) {
      setTimeout(() => {
        event2.preventDefault();
        this.hideOverlay();
        if (this.mask) {
          this.disableModality();
        }
        this.cd.markForCheck();
      }, 150);
    }
    this.updateInputfield();
    event2.preventDefault();
  }
  shouldSelectDate(dateMeta) {
    if (this.isMultipleSelection()) return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;
    else return true;
  }
  onMonthSelect(event2, index) {
    if (this.view === "month") {
      this.onDateSelect(event2, {
        year: this.currentYear,
        month: index,
        day: 1,
        selectable: true
      });
    } else {
      this.currentMonth = index;
      this.createMonths(this.currentMonth, this.currentYear);
      this.setCurrentView("date");
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  onYearSelect(event2, year) {
    if (this.view === "year") {
      this.onDateSelect(event2, {
        year,
        month: 0,
        day: 1,
        selectable: true
      });
    } else {
      this.currentYear = year;
      this.setCurrentView("month");
      this.onYearChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  updateInputfield() {
    let formattedValue = "";
    if (this.value) {
      if (this.isSingleSelection()) {
        formattedValue = this.formatDateTime(this.value);
      } else if (this.isMultipleSelection()) {
        for (let i = 0; i < this.value.length; i++) {
          let dateAsString = this.formatDateTime(this.value[i]);
          formattedValue += dateAsString;
          if (i !== this.value.length - 1) {
            formattedValue += this.multipleSeparator + " ";
          }
        }
      } else if (this.isRangeSelection()) {
        if (this.value && this.value.length) {
          let startDate = this.value[0];
          let endDate = this.value[1];
          formattedValue = this.formatDateTime(startDate);
          if (endDate) {
            formattedValue += " " + this.rangeSeparator + " " + this.formatDateTime(endDate);
          }
        }
      }
    }
    this.inputFieldValue = formattedValue;
    this.updateFilledState();
    if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
      this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
    }
  }
  formatDateTime(date) {
    let formattedValue = this.keepInvalid ? date : null;
    const isDateValid = this.isValidDateForTimeConstraints(date);
    if (this.isValidDate(date)) {
      if (this.timeOnly) {
        formattedValue = this.formatTime(date);
      } else {
        formattedValue = this.formatDate(date, this.getDateFormat());
        if (this.showTime) {
          formattedValue += " " + this.formatTime(date);
        }
      }
    } else if (this.dataType === "string") {
      formattedValue = date;
    }
    formattedValue = isDateValid ? formattedValue : "";
    return formattedValue;
  }
  formatDateMetaToDate(dateMeta) {
    return new Date(dateMeta.year, dateMeta.month, dateMeta.day);
  }
  formatDateKey(date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }
  setCurrentHourPM(hours) {
    if (this.hourFormat == "12") {
      this.pm = hours > 11;
      if (hours >= 12) {
        this.currentHour = hours == 12 ? 12 : hours - 12;
      } else {
        this.currentHour = hours == 0 ? 12 : hours;
      }
    } else {
      this.currentHour = hours;
    }
  }
  setCurrentView(currentView) {
    this.currentView = currentView;
    this.cd.detectChanges();
    this.alignOverlay();
  }
  selectDate(dateMeta) {
    let date = this.formatDateMetaToDate(dateMeta);
    if (this.showTime) {
      if (this.hourFormat == "12") {
        if (this.currentHour === 12) date.setHours(this.pm ? 12 : 0);
        else date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
      } else {
        date.setHours(this.currentHour);
      }
      date.setMinutes(this.currentMinute);
      date.setSeconds(this.currentSecond);
    }
    if (this.minDate && this.minDate > date) {
      date = this.minDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.maxDate && this.maxDate < date) {
      date = this.maxDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.isSingleSelection()) {
      this.updateModel(date);
    } else if (this.isMultipleSelection()) {
      this.updateModel(this.value ? [...this.value, date] : [date]);
    } else if (this.isRangeSelection()) {
      if (this.value && this.value.length) {
        let startDate = this.value[0];
        let endDate = this.value[1];
        if (!endDate && date.getTime() >= startDate.getTime()) {
          endDate = date;
        } else {
          startDate = date;
          endDate = null;
        }
        this.updateModel([startDate, endDate]);
      } else {
        this.updateModel([date, null]);
      }
    }
    this.onSelect.emit(date);
  }
  updateModel(value) {
    this.value = value;
    if (this.dataType == "date") {
      this.onModelChange(this.value);
    } else if (this.dataType == "string") {
      if (this.isSingleSelection()) {
        this.onModelChange(this.formatDateTime(this.value));
      } else {
        let stringArrValue = null;
        if (Array.isArray(this.value)) {
          stringArrValue = this.value.map((date) => this.formatDateTime(date));
        }
        this.onModelChange(stringArrValue);
      }
    }
  }
  getFirstDayOfMonthIndex(month, year) {
    let day = /* @__PURE__ */ new Date();
    day.setDate(1);
    day.setMonth(month);
    day.setFullYear(year);
    let dayIndex = day.getDay() + this.getSundayIndex();
    return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
  }
  getDaysCountInMonth(month, year) {
    return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
  }
  getDaysCountInPrevMonth(month, year) {
    let prev = this.getPreviousMonthAndYear(month, year);
    return this.getDaysCountInMonth(prev.month, prev.year);
  }
  getPreviousMonthAndYear(month, year) {
    let m, y;
    if (month === 0) {
      m = 11;
      y = year - 1;
    } else {
      m = month - 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getNextMonthAndYear(month, year) {
    let m, y;
    if (month === 11) {
      m = 0;
      y = year + 1;
    } else {
      m = month + 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getSundayIndex() {
    let firstDayOfWeek = this.getFirstDateOfWeek();
    return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
  }
  isSelected(dateMeta) {
    if (this.value) {
      if (this.isSingleSelection()) {
        return this.isDateEquals(this.value, dateMeta);
      } else if (this.isMultipleSelection()) {
        let selected = false;
        for (let date of this.value) {
          selected = this.isDateEquals(date, dateMeta);
          if (selected) {
            break;
          }
        }
        return selected;
      } else if (this.isRangeSelection()) {
        if (this.value[1]) return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
        else return this.isDateEquals(this.value[0], dateMeta);
      }
    } else {
      return false;
    }
  }
  isComparable() {
    return this.value != null && typeof this.value !== "string";
  }
  isMonthSelected(month) {
    if (!this.isComparable()) return false;
    if (this.isMultipleSelection()) {
      return this.value.some((currentValue) => currentValue.getMonth() === month && currentValue.getFullYear() === this.currentYear);
    } else if (this.isRangeSelection()) {
      if (!this.value[1]) {
        return this.value[0]?.getFullYear() === this.currentYear && this.value[0]?.getMonth() === month;
      } else {
        const currentDate = new Date(this.currentYear, month, 1);
        const startDate = new Date(this.value[0].getFullYear(), this.value[0].getMonth(), 1);
        const endDate = new Date(this.value[1].getFullYear(), this.value[1].getMonth(), 1);
        return currentDate >= startDate && currentDate <= endDate;
      }
    } else {
      return this.value.getMonth() === month && this.value.getFullYear() === this.currentYear;
    }
  }
  isMonthDisabled(month, year) {
    const yearToCheck = year ?? this.currentYear;
    for (let day = 1; day < this.getDaysCountInMonth(month, yearToCheck) + 1; day++) {
      if (this.isSelectable(day, month, yearToCheck, false)) {
        return false;
      }
    }
    return true;
  }
  isYearDisabled(year) {
    return Array(12).fill(0).every((v, month) => this.isMonthDisabled(month, year));
  }
  isYearSelected(year) {
    if (this.isComparable()) {
      let value = this.isRangeSelection() ? this.value[0] : this.value;
      return !this.isMultipleSelection() ? value.getFullYear() === year : false;
    }
    return false;
  }
  isDateEquals(value, dateMeta) {
    if (value && isDate(value)) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
    else return false;
  }
  isDateBetween(start, end, dateMeta) {
    let between = false;
    if (isDate(start) && isDate(end)) {
      let date = this.formatDateMetaToDate(dateMeta);
      return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
    }
    return between;
  }
  isSingleSelection() {
    return this.selectionMode === "single";
  }
  isRangeSelection() {
    return this.selectionMode === "range";
  }
  isMultipleSelection() {
    return this.selectionMode === "multiple";
  }
  isToday(today, day, month, year) {
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  }
  isSelectable(day, month, year, otherMonth) {
    let validMin = true;
    let validMax = true;
    let validDate = true;
    let validDay = true;
    if (otherMonth && !this.selectOtherMonths) {
      return false;
    }
    if (this.minDate) {
      if (this.minDate.getFullYear() > year) {
        validMin = false;
      } else if (this.minDate.getFullYear() === year && this.currentView != "year") {
        if (this.minDate.getMonth() > month) {
          validMin = false;
        } else if (this.minDate.getMonth() === month) {
          if (this.minDate.getDate() > day) {
            validMin = false;
          }
        }
      }
    }
    if (this.maxDate) {
      if (this.maxDate.getFullYear() < year) {
        validMax = false;
      } else if (this.maxDate.getFullYear() === year) {
        if (this.maxDate.getMonth() < month) {
          validMax = false;
        } else if (this.maxDate.getMonth() === month) {
          if (this.maxDate.getDate() < day) {
            validMax = false;
          }
        }
      }
    }
    if (this.disabledDates) {
      validDate = !this.isDateDisabled(day, month, year);
    }
    if (this.disabledDays) {
      validDay = !this.isDayDisabled(day, month, year);
    }
    return validMin && validMax && validDate && validDay;
  }
  isDateDisabled(day, month, year) {
    if (this.disabledDates) {
      for (let disabledDate of this.disabledDates) {
        if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
          return true;
        }
      }
    }
    return false;
  }
  isDayDisabled(day, month, year) {
    if (this.disabledDays) {
      let weekday = new Date(year, month, day);
      let weekdayNumber = weekday.getDay();
      return this.disabledDays.indexOf(weekdayNumber) !== -1;
    }
    return false;
  }
  onInputFocus(event2) {
    this.focus = true;
    if (this.showOnFocus) {
      this.showOverlay();
    }
    this.onFocus.emit(event2);
  }
  onInputClick() {
    if (this.showOnFocus && !this.overlayVisible) {
      this.showOverlay();
    }
  }
  onInputBlur(event2) {
    this.focus = false;
    this.onBlur.emit(event2);
    if (!this.keepInvalid) {
      this.updateInputfield();
    }
    this.onModelTouched();
  }
  onButtonClick(event2, inputfield = this.inputfieldViewChild?.nativeElement) {
    if (this.disabled) {
      return;
    }
    if (!this.overlayVisible) {
      inputfield.focus();
      this.showOverlay();
    } else {
      this.hideOverlay();
    }
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.updateInputfield();
    this.onClear.emit();
  }
  onOverlayClick(event2) {
    this.overlayService.add({
      originalEvent: event2,
      target: this.el.nativeElement
    });
  }
  getMonthName(index) {
    return this.config.getTranslation("monthNames")[index];
  }
  getYear(month) {
    return this.currentView === "month" ? this.currentYear : month.year;
  }
  switchViewButtonDisabled() {
    return this.numberOfMonths > 1 || this.disabled;
  }
  onPrevButtonClick(event2) {
    this.navigationState = {
      backward: true,
      button: true
    };
    this.navBackward(event2);
  }
  onNextButtonClick(event2) {
    this.navigationState = {
      backward: false,
      button: true
    };
    this.navForward(event2);
  }
  onContainerButtonKeydown(event2) {
    switch (event2.which) {
      //tab
      case 9:
        if (!this.inline) {
          this.trapFocus(event2);
        }
        if (this.inline) {
          const headerElements = findSingle(this.containerViewChild?.nativeElement, ".p-datepicker-header");
          const element = event2.target;
          if (this.timeOnly) {
            return;
          } else {
            if (element == headerElements.children[headerElements?.children?.length - 1]) {
              this.initFocusableCell();
            }
          }
        }
        break;
      //escape
      case 27:
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      default:
        break;
    }
  }
  onInputKeydown(event2) {
    this.isKeydown = true;
    if (event2.keyCode === 40 && this.contentViewChild) {
      this.trapFocus(event2);
    } else if (event2.keyCode === 27) {
      if (this.overlayVisible) {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
      }
    } else if (event2.keyCode === 13) {
      if (this.overlayVisible) {
        this.overlayVisible = false;
        event2.preventDefault();
      }
    } else if (event2.keyCode === 9 && this.contentViewChild) {
      getFocusableElements(this.contentViewChild.nativeElement).forEach((el) => el.tabIndex = "-1");
      if (this.overlayVisible) {
        this.overlayVisible = false;
      }
    }
  }
  onDateCellKeydown(event2, dateMeta, groupIndex) {
    const cellContent = event2.currentTarget;
    const cell = cellContent.parentElement;
    const currentDate = this.formatDateMetaToDate(dateMeta);
    switch (event2.which) {
      //down arrow
      case 40: {
        cellContent.tabIndex = "-1";
        let cellIndex = getIndex(cell);
        let nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
          let focusCell = nextRow.children[cellIndex].children[0];
          if (hasClass(focusCell, "p-disabled")) {
            this.navigationState = {
              backward: false
            };
            this.navForward(event2);
          } else {
            nextRow.children[cellIndex].children[0].tabIndex = "0";
            nextRow.children[cellIndex].children[0].focus();
          }
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //up arrow
      case 38: {
        cellContent.tabIndex = "-1";
        let cellIndex = getIndex(cell);
        let prevRow = cell.parentElement.previousElementSibling;
        if (prevRow) {
          let focusCell = prevRow.children[cellIndex].children[0];
          if (hasClass(focusCell, "p-disabled")) {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event2);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cellContent.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          let focusCell = prevCell.children[0];
          if (hasClass(focusCell, "p-disabled") || hasClass(focusCell.parentElement, "p-datepicker-weeknumber")) {
            this.navigateToMonth(true, groupIndex);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigateToMonth(true, groupIndex);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cellContent.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          let focusCell = nextCell.children[0];
          if (hasClass(focusCell, "p-disabled")) {
            this.navigateToMonth(false, groupIndex);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigateToMonth(false, groupIndex);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onDateSelect(event2, dateMeta);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        if (!this.inline) {
          this.trapFocus(event2);
        }
        break;
      }
      // page up
      case 33: {
        cellContent.tabIndex = "-1";
        const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        const focusKey = this.formatDateKey(dateToFocus);
        this.navigateToMonth(true, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
        event2.preventDefault();
        break;
      }
      // page down
      case 34: {
        cellContent.tabIndex = "-1";
        const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
        const focusKey = this.formatDateKey(dateToFocus);
        this.navigateToMonth(false, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
        event2.preventDefault();
        break;
      }
      //home
      case 36:
        cellContent.tabIndex = "-1";
        const firstDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const firstDayDateKey = this.formatDateKey(firstDayDate);
        const firstDayCell = findSingle(cellContent.offsetParent, `span[data-date='${firstDayDateKey}']:not(.p-disabled):not(.p-ink)`);
        if (firstDayCell) {
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        }
        event2.preventDefault();
        break;
      //end
      case 35:
        cellContent.tabIndex = "-1";
        const lastDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const lastDayDateKey = this.formatDateKey(lastDayDate);
        const lastDayCell = findSingle(cellContent.offsetParent, `span[data-date='${lastDayDateKey}']:not(.p-disabled):not(.p-ink)`);
        if (lastDayDate) {
          lastDayCell.tabIndex = "0";
          lastDayCell.focus();
        }
        event2.preventDefault();
        break;
      default:
        break;
    }
  }
  onMonthCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      //arrows
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = getIndex(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 3 : cellIndex - 3];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onMonthSelect(event2, index);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        if (!this.inline) {
          this.trapFocus(event2);
        }
        break;
      }
      default:
        break;
    }
  }
  onYearCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      //arrows
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = getIndex(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 2 : cellIndex - 2];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onYearSelect(event2, index);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        this.trapFocus(event2);
        break;
      }
      default:
        break;
    }
  }
  navigateToMonth(prev, groupIndex, focusKey) {
    if (prev) {
      if (this.numberOfMonths === 1 || groupIndex === 0) {
        this.navigationState = {
          backward: true
        };
        this._focusKey = focusKey;
        this.navBackward(event);
      } else {
        let prevMonthContainer = this.contentViewChild.nativeElement.children[groupIndex - 1];
        if (focusKey) {
          const firstDayCell = findSingle(prevMonthContainer, focusKey);
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        } else {
          let cells = find(prevMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          let focusCell = cells[cells.length - 1];
          focusCell.tabIndex = "0";
          focusCell.focus();
        }
      }
    } else {
      if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
        this.navigationState = {
          backward: false
        };
        this._focusKey = focusKey;
        this.navForward(event);
      } else {
        let nextMonthContainer = this.contentViewChild.nativeElement.children[groupIndex + 1];
        if (focusKey) {
          const firstDayCell = findSingle(nextMonthContainer, focusKey);
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        } else {
          let focusCell = findSingle(nextMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          focusCell.tabIndex = "0";
          focusCell.focus();
        }
      }
    }
  }
  updateFocus() {
    let cell;
    if (this.navigationState) {
      if (this.navigationState.button) {
        this.initFocusableCell();
        if (this.navigationState.backward) findSingle(this.contentViewChild.nativeElement, ".p-datepicker-prev-button").focus();
        else findSingle(this.contentViewChild.nativeElement, ".p-datepicker-next-button").focus();
      } else {
        if (this.navigationState.backward) {
          let cells;
          if (this.currentView === "month") {
            cells = find(this.contentViewChild.nativeElement, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
          } else if (this.currentView === "year") {
            cells = find(this.contentViewChild.nativeElement, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
          } else {
            cells = find(this.contentViewChild.nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          }
          if (cells && cells.length > 0) {
            cell = cells[cells.length - 1];
          }
        } else {
          if (this.currentView === "month") {
            cell = findSingle(this.contentViewChild.nativeElement, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
          } else if (this.currentView === "year") {
            cell = findSingle(this.contentViewChild.nativeElement, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
          } else {
            cell = findSingle(this.contentViewChild.nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          }
        }
        if (cell) {
          cell.tabIndex = "0";
          cell.focus();
        }
      }
      this.navigationState = null;
      this._focusKey = null;
    } else {
      this.initFocusableCell();
    }
  }
  initFocusableCell() {
    const contentEl = this.contentViewChild?.nativeElement;
    let cell;
    if (this.currentView === "month") {
      let cells = find(contentEl, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
      let selectedCell = findSingle(contentEl, ".p-datepicker-month-view .p-datepicker-month.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = find(contentEl, '.p-datepicker-month-view .p-datepicker-month.p-disabled[tabindex = "0"]');
        disabledCells.forEach((cell2) => cell2.tabIndex = -1);
      }
    } else if (this.currentView === "year") {
      let cells = find(contentEl, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
      let selectedCell = findSingle(contentEl, ".p-datepicker-year-view .p-datepicker-year.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = find(contentEl, '.p-datepicker-year-view .p-datepicker-year.p-disabled[tabindex = "0"]');
        disabledCells.forEach((cell2) => cell2.tabIndex = -1);
      }
    } else {
      cell = findSingle(contentEl, "span.p-highlight");
      if (!cell) {
        let todayCell = findSingle(contentEl, "td.p-datepicker-today span:not(.p-disabled):not(.p-ink)");
        if (todayCell) cell = todayCell;
        else cell = findSingle(contentEl, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
      }
    }
    if (cell) {
      cell.tabIndex = "0";
      if (!this.preventFocus && (!this.navigationState || !this.navigationState.button)) {
        setTimeout(() => {
          if (!this.disabled) {
            cell.focus();
          }
        }, 1);
      }
      this.preventFocus = false;
    }
  }
  trapFocus(event2) {
    let focusableElements = getFocusableElements(this.contentViewChild.nativeElement);
    if (focusableElements && focusableElements.length > 0) {
      if (!focusableElements[0].ownerDocument.activeElement) {
        focusableElements[0].focus();
      } else {
        let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
        if (event2.shiftKey) {
          if (focusedIndex == -1 || focusedIndex === 0) {
            if (this.focusTrap) {
              focusableElements[focusableElements.length - 1].focus();
            } else {
              if (focusedIndex === -1) return this.hideOverlay();
              else if (focusedIndex === 0) return;
            }
          } else {
            focusableElements[focusedIndex - 1].focus();
          }
        } else {
          if (focusedIndex == -1) {
            if (this.timeOnly) {
              focusableElements[0].focus();
            } else {
              let spanIndex = 0;
              for (let i = 0; i < focusableElements.length; i++) {
                if (focusableElements[i].tagName === "SPAN") spanIndex = i;
              }
              focusableElements[spanIndex].focus();
            }
          } else if (focusedIndex === focusableElements.length - 1) {
            if (!this.focusTrap && focusedIndex != -1) return this.hideOverlay();
            focusableElements[0].focus();
          } else {
            focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    }
    event2.preventDefault();
  }
  onMonthDropdownChange(m) {
    this.currentMonth = parseInt(m);
    this.onMonthChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  onYearDropdownChange(y) {
    this.currentYear = parseInt(y);
    this.onYearChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  convertTo24Hour(hours, pm) {
    if (this.hourFormat == "12") {
      if (hours === 12) {
        return pm ? 12 : 0;
      } else {
        return pm ? hours + 12 : hours;
      }
    }
    return hours;
  }
  constrainTime(hour, minute, second, pm) {
    let returnTimeTriple = [hour, minute, second];
    let minHoursExceeds12;
    let value = this.value;
    const convertedHour = this.convertTo24Hour(hour, pm);
    const isRange = this.isRangeSelection(), isMultiple = this.isMultipleSelection(), isMultiValue = isRange || isMultiple;
    if (isMultiValue) {
      if (!this.value) {
        this.value = [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()];
      }
      if (isRange) {
        value = this.value[1] || this.value[0];
      }
      if (isMultiple) {
        value = this.value[this.value.length - 1];
      }
    }
    const valueDateString = value ? value.toDateString() : null;
    let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
    let isMaxDate = this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString;
    if (isMinDate) {
      minHoursExceeds12 = this.minDate.getHours() >= 12;
    }
    switch (true) {
      case (isMinDate && minHoursExceeds12 && this.minDate.getHours() === 12 && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = 11;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && !minHoursExceeds12 && this.minDate.getHours() - 1 === convertedHour && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = 11;
        this.pm = true;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && minHoursExceeds12 && this.minDate.getHours() > convertedHour && convertedHour !== 12):
        this.setCurrentHourPM(this.minDate.getHours());
        returnTimeTriple[0] = this.currentHour;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = this.minDate.getHours();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMaxDate && this.maxDate.getHours() < convertedHour):
        returnTimeTriple[0] = this.maxDate.getHours();
      case (isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() < minute):
        returnTimeTriple[1] = this.maxDate.getMinutes();
      case (isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() === minute && this.maxDate.getSeconds() < second):
        returnTimeTriple[2] = this.maxDate.getSeconds();
        break;
    }
    return returnTimeTriple;
  }
  incrementHour(event2) {
    const prevHour = this.currentHour ?? 0;
    let newHour = (this.currentHour ?? 0) + this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == "24") newHour = newHour >= 24 ? newHour - 24 : newHour;
    else if (this.hourFormat == "12") {
      if (prevHour < 12 && newHour > 11) {
        newPM = !this.pm;
      }
      newHour = newHour >= 13 ? newHour - 12 : newHour;
    }
    this.toggleAMPMIfNotMinDate(newPM);
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
    event2.preventDefault();
  }
  toggleAMPMIfNotMinDate(newPM) {
    let value = this.value;
    const valueDateString = value ? value.toDateString() : null;
    let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
    if (isMinDate && this.minDate.getHours() >= 12) {
      this.pm = true;
    } else {
      this.pm = newPM;
    }
  }
  onTimePickerElementMouseDown(event2, type, direction) {
    if (!this.disabled) {
      this.repeat(event2, null, type, direction);
      event2.preventDefault();
    }
  }
  onTimePickerElementMouseUp(event2) {
    if (!this.disabled) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  onTimePickerElementMouseLeave() {
    if (!this.disabled && this.timePickerTimer) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  repeat(event2, interval, type, direction) {
    let i = interval || 500;
    this.clearTimePickerTimer();
    this.timePickerTimer = setTimeout(() => {
      this.repeat(event2, 100, type, direction);
      this.cd.markForCheck();
    }, i);
    switch (type) {
      case 0:
        if (direction === 1) this.incrementHour(event2);
        else this.decrementHour(event2);
        break;
      case 1:
        if (direction === 1) this.incrementMinute(event2);
        else this.decrementMinute(event2);
        break;
      case 2:
        if (direction === 1) this.incrementSecond(event2);
        else this.decrementSecond(event2);
        break;
    }
    this.updateInputfield();
  }
  clearTimePickerTimer() {
    if (this.timePickerTimer) {
      clearTimeout(this.timePickerTimer);
      this.timePickerTimer = null;
    }
  }
  decrementHour(event2) {
    let newHour = (this.currentHour ?? 0) - this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == "24") newHour = newHour < 0 ? 24 + newHour : newHour;
    else if (this.hourFormat == "12") {
      if (this.currentHour === 12) {
        newPM = !this.pm;
      }
      newHour = newHour <= 0 ? 12 + newHour : newHour;
    }
    this.toggleAMPMIfNotMinDate(newPM);
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
    event2.preventDefault();
  }
  incrementMinute(event2) {
    let newMinute = (this.currentMinute ?? 0) + this.stepMinute;
    newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, newMinute, this.currentSecond, this.pm);
    event2.preventDefault();
  }
  decrementMinute(event2) {
    let newMinute = (this.currentMinute ?? 0) - this.stepMinute;
    newMinute = newMinute < 0 ? 60 + newMinute : newMinute;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, newMinute, this.currentSecond, this.pm);
    event2.preventDefault();
  }
  incrementSecond(event2) {
    let newSecond = this.currentSecond + this.stepSecond;
    newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, newSecond, this.pm);
    event2.preventDefault();
  }
  decrementSecond(event2) {
    let newSecond = this.currentSecond - this.stepSecond;
    newSecond = newSecond < 0 ? 60 + newSecond : newSecond;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, newSecond, this.pm);
    event2.preventDefault();
  }
  updateTime() {
    let value = this.value;
    if (this.isRangeSelection()) {
      value = this.value[1] || this.value[0];
    }
    if (this.isMultipleSelection()) {
      value = this.value[this.value.length - 1];
    }
    value = value ? new Date(value.getTime()) : /* @__PURE__ */ new Date();
    if (this.hourFormat == "12") {
      if (this.currentHour === 12) value.setHours(this.pm ? 12 : 0);
      else value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
    } else {
      value.setHours(this.currentHour);
    }
    value.setMinutes(this.currentMinute);
    value.setSeconds(this.currentSecond);
    if (this.isRangeSelection()) {
      if (this.value[1]) value = [this.value[0], value];
      else value = [value, null];
    }
    if (this.isMultipleSelection()) {
      value = [...this.value.slice(0, -1), value];
    }
    this.updateModel(value);
    this.onSelect.emit(value);
    this.updateInputfield();
  }
  toggleAMPM(event2) {
    const newPM = !this.pm;
    this.pm = newPM;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, this.currentSecond, newPM);
    this.updateTime();
    event2.preventDefault();
  }
  onUserInput(event2) {
    if (!this.isKeydown) {
      return;
    }
    this.isKeydown = false;
    let val = event2.target.value;
    try {
      let value = this.parseValueFromString(val);
      if (this.isValidSelection(value)) {
        this.updateModel(value);
        this.updateUI();
      } else if (this.keepInvalid) {
        this.updateModel(value);
      }
    } catch (err) {
      let value = this.keepInvalid ? val : null;
      this.updateModel(value);
    }
    this.filled = val != null && val.length;
    this.onInput.emit(event2);
  }
  isValidSelection(value) {
    if (this.isSingleSelection()) {
      return this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false);
    }
    let isValid = value.every((v) => this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false));
    if (isValid && this.isRangeSelection()) {
      isValid = value.length === 1 || value.length > 1 && value[1] >= value[0];
    }
    return isValid;
  }
  parseValueFromString(text) {
    if (!text || text.trim().length === 0) {
      return null;
    }
    let value;
    if (this.isSingleSelection()) {
      value = this.parseDateTime(text);
    } else if (this.isMultipleSelection()) {
      let tokens = text.split(this.multipleSeparator);
      value = [];
      for (let token of tokens) {
        value.push(this.parseDateTime(token.trim()));
      }
    } else if (this.isRangeSelection()) {
      let tokens = text.split(" " + this.rangeSeparator + " ");
      value = [];
      for (let i = 0; i < tokens.length; i++) {
        value[i] = this.parseDateTime(tokens[i].trim());
      }
    }
    return value;
  }
  parseDateTime(text) {
    let date;
    let parts = text.split(" ");
    if (this.timeOnly) {
      date = /* @__PURE__ */ new Date();
      this.populateTime(date, parts[0], parts[1]);
    } else {
      const dateFormat = this.getDateFormat();
      if (this.showTime) {
        let ampm = this.hourFormat == "12" ? parts.pop() : null;
        let timeString = parts.pop();
        date = this.parseDate(parts.join(" "), dateFormat);
        this.populateTime(date, timeString, ampm);
      } else {
        date = this.parseDate(text, dateFormat);
      }
    }
    return date;
  }
  populateTime(value, timeString, ampm) {
    if (this.hourFormat == "12" && !ampm) {
      throw "Invalid Time";
    }
    this.pm = ampm === "PM" || ampm === "pm";
    let time = this.parseTime(timeString);
    value.setHours(time.hour);
    value.setMinutes(time.minute);
    value.setSeconds(time.second);
  }
  isValidDate(date) {
    return isDate(date) && isNotEmpty(date);
  }
  updateUI() {
    let propValue = this.value;
    if (Array.isArray(propValue)) {
      propValue = propValue.length === 2 ? propValue[1] : propValue[0];
    }
    let val = this.defaultDate && this.isValidDate(this.defaultDate) && !this.value ? this.defaultDate : propValue && this.isValidDate(propValue) ? propValue : /* @__PURE__ */ new Date();
    this.currentMonth = val.getMonth();
    this.currentYear = val.getFullYear();
    this.createMonths(this.currentMonth, this.currentYear);
    if (this.showTime || this.timeOnly) {
      this.setCurrentHourPM(val.getHours());
      this.currentMinute = val.getMinutes();
      this.currentSecond = val.getSeconds();
    }
  }
  showOverlay() {
    if (!this.overlayVisible) {
      this.updateUI();
      if (!this.touchUI) {
        this.preventFocus = true;
      }
      this.overlayVisible = true;
    }
  }
  hideOverlay() {
    this.inputfieldViewChild?.nativeElement.focus();
    this.overlayVisible = false;
    this.clearTimePickerTimer();
    if (this.touchUI) {
      this.disableModality();
    }
    this.cd.markForCheck();
  }
  toggle() {
    if (!this.inline) {
      if (!this.overlayVisible) {
        this.showOverlay();
        this.inputfieldViewChild?.nativeElement.focus();
      } else {
        this.hideOverlay();
      }
    }
  }
  onOverlayAnimationStart(event2) {
    switch (event2.toState) {
      case "visible":
      case "visibleTouchUI":
        if (!this.inline) {
          this.overlay = event2.element;
          this.overlay?.setAttribute(this.attributeSelector, "");
          const styles = !this.inline ? {
            position: "absolute",
            top: "0",
            left: "0"
          } : void 0;
          addStyle(this.overlay, styles);
          this.appendOverlay();
          this.updateFocus();
          if (this.autoZIndex) {
            if (this.touchUI) zindexutils.set("modal", this.overlay, this.baseZIndex || this.config.zIndex.modal);
            else zindexutils.set("overlay", this.overlay, this.baseZIndex || this.config.zIndex.overlay);
          }
          this.alignOverlay();
          this.onShow.emit(event2);
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onClose.emit(event2);
        break;
    }
  }
  onOverlayAnimationDone(event2) {
    switch (event2.toState) {
      case "visible":
      case "visibleTouchUI":
        if (!this.inline) {
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
        }
        break;
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event2.element);
        }
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.document.body.appendChild(this.overlay);
      else appendChild(this.appendTo, this.overlay);
    }
  }
  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }
  alignOverlay() {
    if (this.touchUI) {
      this.enableModality(this.overlay);
    } else if (this.overlay) {
      if (this.appendTo) {
        if (this.view === "date") {
          if (!this.overlay.style.width) {
            this.overlay.style.width = getOuterWidth(this.overlay) + "px";
          }
          if (!this.overlay.style.minWidth) {
            this.overlay.style.minWidth = getOuterWidth(this.inputfieldViewChild?.nativeElement) + "px";
          }
        } else {
          if (!this.overlay.style.width) {
            this.overlay.style.width = getOuterWidth(this.inputfieldViewChild?.nativeElement) + "px";
          }
        }
        absolutePosition(this.overlay, this.inputfieldViewChild?.nativeElement);
      } else {
        relativePosition(this.overlay, this.inputfieldViewChild?.nativeElement);
      }
    }
  }
  enableModality(element) {
    if (!this.mask && this.touchUI) {
      this.mask = this.renderer.createElement("div");
      this.renderer.setStyle(this.mask, "zIndex", String(parseInt(element.style.zIndex) - 1));
      let maskStyleClass = "p-overlay-mask p-datepicker-mask p-datepicker-mask-scrollblocker p-overlay-mask p-overlay-mask-enter";
      addClass(this.mask, maskStyleClass);
      this.maskClickListener = this.renderer.listen(this.mask, "click", (event2) => {
        this.disableModality();
        this.overlayVisible = false;
      });
      this.renderer.appendChild(this.document.body, this.mask);
      blockBodyScroll();
    }
  }
  disableModality() {
    if (this.mask) {
      addClass(this.mask, "p-overlay-mask-leave");
      if (!this.animationEndListener) {
        this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyMask.bind(this));
      }
    }
  }
  destroyMask() {
    if (!this.mask) {
      return;
    }
    this.renderer.removeChild(this.document.body, this.mask);
    let bodyChildren = this.document.body.children;
    let hasBlockerMasks;
    for (let i = 0; i < bodyChildren.length; i++) {
      let bodyChild = bodyChildren[i];
      if (hasClass(bodyChild, "p-datepicker-mask-scrollblocker")) {
        hasBlockerMasks = true;
        break;
      }
    }
    if (!hasBlockerMasks) {
      unblockBodyScroll();
    }
    this.unbindAnimationEndListener();
    this.unbindMaskClickListener();
    this.mask = null;
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  writeValue(value) {
    this.value = value;
    if (this.value && typeof this.value === "string") {
      try {
        this.value = this.parseValueFromString(this.value);
      } catch {
        if (this.keepInvalid) {
          this.value = value;
        }
      }
    }
    this.updateInputfield();
    this.updateUI();
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  getDateFormat() {
    return this.dateFormat || this.getTranslation("dateFormat");
  }
  getFirstDateOfWeek() {
    return this._firstDayOfWeek || this.getTranslation(TranslationKeys.FIRST_DAY_OF_WEEK);
  }
  // Ported from jquery-ui datepicker formatDate
  formatDate(date, format) {
    if (!date) {
      return "";
    }
    let iFormat;
    const lookAhead = (match) => {
      const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, formatNumber = (match, value, len) => {
      let num = "" + value;
      if (lookAhead(match)) {
        while (num.length < len) {
          num = "0" + num;
        }
      }
      return num;
    }, formatName = (match, value, shortNames, longNames) => {
      return lookAhead(match) ? longNames[value] : shortNames[value];
    };
    let output = "";
    let literal = false;
    if (date) {
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            output += format.charAt(iFormat);
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
              output += formatNumber("d", date.getDate(), 2);
              break;
            case "D":
              output += formatName("D", date.getDay(), this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
              break;
            case "o":
              output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              output += formatNumber("m", date.getMonth() + 1, 2);
              break;
            case "M":
              output += formatName("M", date.getMonth(), this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
              break;
            case "y":
              output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
              break;
            case "@":
              output += date.getTime();
              break;
            case "!":
              output += date.getTime() * 1e4 + this.ticksTo1970;
              break;
            case "'":
              if (lookAhead("'")) {
                output += "'";
              } else {
                literal = true;
              }
              break;
            default:
              output += format.charAt(iFormat);
          }
        }
      }
    }
    return output;
  }
  formatTime(date) {
    if (!date) {
      return "";
    }
    let output = "";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (this.hourFormat == "12" && hours > 11 && hours != 12) {
      hours -= 12;
    }
    if (this.hourFormat == "12") {
      output += hours === 0 ? 12 : hours < 10 ? "0" + hours : hours;
    } else {
      output += hours < 10 ? "0" + hours : hours;
    }
    output += ":";
    output += minutes < 10 ? "0" + minutes : minutes;
    if (this.showSeconds) {
      output += ":";
      output += seconds < 10 ? "0" + seconds : seconds;
    }
    if (this.hourFormat == "12") {
      output += date.getHours() > 11 ? " PM" : " AM";
    }
    return output;
  }
  parseTime(value) {
    let tokens = value.split(":");
    let validTokenLength = this.showSeconds ? 3 : 2;
    if (tokens.length !== validTokenLength) {
      throw "Invalid time";
    }
    let h = parseInt(tokens[0]);
    let m = parseInt(tokens[1]);
    let s = this.showSeconds ? parseInt(tokens[2]) : null;
    if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == "12" && h > 12 || this.showSeconds && (isNaN(s) || s > 59)) {
      throw "Invalid time";
    } else {
      if (this.hourFormat == "12") {
        if (h !== 12 && this.pm) {
          h += 12;
        } else if (!this.pm && h === 12) {
          h -= 12;
        }
      }
      return {
        hour: h,
        minute: m,
        second: s
      };
    }
  }
  // Ported from jquery-ui datepicker parseDate
  parseDate(value, format) {
    if (format == null || value == null) {
      throw "Invalid arguments";
    }
    value = typeof value === "object" ? value.toString() : value + "";
    if (value === "") {
      return null;
    }
    let iFormat, dim, extra, iValue = 0, shortYearCutoff = typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(this.shortYearCutoff, 10), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = (match) => {
      let matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, getNumber = (match) => {
      let isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
      if (!num) {
        throw "Missing number at position " + iValue;
      }
      iValue += num[0].length;
      return parseInt(num[0], 10);
    }, getName = (match, shortNames, longNames) => {
      let index = -1;
      let arr = lookAhead(match) ? longNames : shortNames;
      let names = [];
      for (let i = 0; i < arr.length; i++) {
        names.push([i, arr[i]]);
      }
      names.sort((a, b) => {
        return -(a[1].length - b[1].length);
      });
      for (let i = 0; i < names.length; i++) {
        let name = names[i][1];
        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
          index = names[i][0];
          iValue += name.length;
          break;
        }
      }
      if (index !== -1) {
        return index + 1;
      } else {
        throw "Unknown name at position " + iValue;
      }
    }, checkLiteral = () => {
      if (value.charAt(iValue) !== format.charAt(iFormat)) {
        throw "Unexpected literal at position " + iValue;
      }
      iValue++;
    };
    if (this.view === "month") {
      day = 1;
    }
    for (iFormat = 0; iFormat < format.length; iFormat++) {
      if (literal) {
        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
          literal = false;
        } else {
          checkLiteral();
        }
      } else {
        switch (format.charAt(iFormat)) {
          case "d":
            day = getNumber("d");
            break;
          case "D":
            getName("D", this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
            break;
          case "o":
            doy = getNumber("o");
            break;
          case "m":
            month = getNumber("m");
            break;
          case "M":
            month = getName("M", this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
            break;
          case "y":
            year = getNumber("y");
            break;
          case "@":
            date = new Date(getNumber("@"));
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "!":
            date = new Date((getNumber("!") - this.ticksTo1970) / 1e4);
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "'":
            if (lookAhead("'")) {
              checkLiteral();
            } else {
              literal = true;
            }
            break;
          default:
            checkLiteral();
        }
      }
    }
    if (iValue < value.length) {
      extra = value.substr(iValue);
      if (!/^\s+/.test(extra)) {
        throw "Extra/unparsed characters found in date: " + extra;
      }
    }
    if (year === -1) {
      year = (/* @__PURE__ */ new Date()).getFullYear();
    } else if (year < 100) {
      year += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
    }
    if (doy > -1) {
      month = 1;
      day = doy;
      do {
        dim = this.getDaysCountInMonth(year, month - 1);
        if (day <= dim) {
          break;
        }
        month++;
        day -= dim;
      } while (true);
    }
    if (this.view === "year") {
      month = month === -1 ? 1 : month;
      day = day === -1 ? 1 : day;
    }
    date = this.daylightSavingAdjust(new Date(year, month - 1, day));
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
      throw "Invalid date";
    }
    return date;
  }
  daylightSavingAdjust(date) {
    if (!date) {
      return null;
    }
    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
    return date;
  }
  updateFilledState() {
    this.filled = this.inputFieldValue && this.inputFieldValue != "";
  }
  isValidDateForTimeConstraints(selectedDate) {
    if (this.keepInvalid) {
      return true;
    }
    return (!this.minDate || selectedDate >= this.minDate) && (!this.maxDate || selectedDate <= this.maxDate);
  }
  onTodayButtonClick(event2) {
    const date = /* @__PURE__ */ new Date();
    const dateMeta = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
      today: true,
      selectable: true
    };
    this.createMonths(date.getMonth(), date.getFullYear());
    this.onDateSelect(event2, dateMeta);
    this.onTodayClick.emit(date);
  }
  onClearButtonClick(event2) {
    this.updateModel(null);
    this.updateInputfield();
    this.hideOverlay();
    this.onClearClick.emit(event2);
  }
  createResponsiveStyle() {
    if (this.numberOfMonths > 1 && this.responsiveOptions) {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = this.renderer.createElement("style");
        this.responsiveStyleElement.type = "text/css";
        this.renderer.appendChild(this.document.body, this.responsiveStyleElement);
      }
      let innerHTML = "";
      if (this.responsiveOptions) {
        let responsiveOptions = [...this.responsiveOptions].filter((o) => !!(o.breakpoint && o.numMonths)).sort((o1, o2) => -1 * o1.breakpoint.localeCompare(o2.breakpoint, void 0, {
          numeric: true
        }));
        for (let i = 0; i < responsiveOptions.length; i++) {
          let {
            breakpoint,
            numMonths
          } = responsiveOptions[i];
          let styles = `
                        .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {
                            display: inline-flex !important;
                        }
                    `;
          for (let j = numMonths; j < this.numberOfMonths; j++) {
            styles += `
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {
                                display: none !important;
                            }
                        `;
          }
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            ${styles}
                        }
                    `;
        }
      }
      this.responsiveStyleElement.innerHTML = innerHTML;
      setAttribute(this.responsiveStyleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyResponsiveStyleElement() {
    if (this.responsiveStyleElement) {
      this.responsiveStyleElement.remove();
      this.responsiveStyleElement = null;
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.zone.runOutsideAngular(() => {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        this.documentClickListener = this.renderer.listen(documentTarget, "mousedown", (event2) => {
          if (this.isOutsideClicked(event2) && this.overlayVisible) {
            this.zone.run(() => {
              this.hideOverlay();
              this.onClickOutside.emit(event2);
              this.cd.markForCheck();
            });
          }
        });
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener && !this.touchUI) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild?.nativeElement, () => {
        if (this.overlayVisible) {
          this.hideOverlay();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  isOutsideClicked(event2) {
    return !(this.el.nativeElement.isSameNode(event2.target) || this.isNavIconClicked(event2) || this.el.nativeElement.contains(event2.target) || this.overlay && this.overlay.contains(event2.target));
  }
  isNavIconClicked(event2) {
    return hasClass(event2.target, "p-datepicker-prev-button") || hasClass(event2.target, "p-datepicker-prev-icon") || hasClass(event2.target, "p-datepicker-next-button") || hasClass(event2.target, "p-datepicker-next-icon");
  }
  onWindowResize() {
    if (this.overlayVisible && !isTouchDevice()) {
      this.hideOverlay();
    }
  }
  onOverlayHide() {
    this.currentView = this.view;
    if (this.mask) {
      this.destroyMask();
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.overlay && this.autoZIndex) {
      zindexutils.clear(this.overlay);
    }
    this.destroyResponsiveStyleElement();
    this.clearTimePickerTimer();
    this.restoreOverlayAppend();
    this.onOverlayHide();
    super.ngOnDestroy();
  }
  static ɵfac = function DatePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePicker)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DatePicker,
    selectors: [["p-datePicker"], ["p-datepicker"], ["p-date-picker"]],
    contentQueries: function DatePicker_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c02, 4);
        ɵɵcontentQuery(dirIndex, _c12, 4);
        ɵɵcontentQuery(dirIndex, _c22, 4);
        ɵɵcontentQuery(dirIndex, _c32, 4);
        ɵɵcontentQuery(dirIndex, _c42, 4);
        ɵɵcontentQuery(dirIndex, _c5, 4);
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, _c8, 4);
        ɵɵcontentQuery(dirIndex, _c9, 4);
        ɵɵcontentQuery(dirIndex, _c10, 4);
        ɵɵcontentQuery(dirIndex, _c11, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dateTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.disabledDateTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.decadeTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.previousIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.triggerIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clearIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.decrementIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.incrementIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function DatePicker_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c122, 5);
        ɵɵviewQuery(_c13, 5);
        ɵɵviewQuery(_c14, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputfieldViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      iconDisplay: "iconDisplay",
      style: "style",
      styleClass: "styleClass",
      inputStyle: "inputStyle",
      inputId: "inputId",
      name: "name",
      inputStyleClass: "inputStyleClass",
      placeholder: "placeholder",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      iconAriaLabel: "iconAriaLabel",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      dateFormat: "dateFormat",
      multipleSeparator: "multipleSeparator",
      rangeSeparator: "rangeSeparator",
      inline: [2, "inline", "inline", booleanAttribute],
      showOtherMonths: [2, "showOtherMonths", "showOtherMonths", booleanAttribute],
      selectOtherMonths: [2, "selectOtherMonths", "selectOtherMonths", booleanAttribute],
      showIcon: [2, "showIcon", "showIcon", booleanAttribute],
      fluid: [2, "fluid", "fluid", booleanAttribute],
      icon: "icon",
      appendTo: "appendTo",
      readonlyInput: [2, "readonlyInput", "readonlyInput", booleanAttribute],
      shortYearCutoff: "shortYearCutoff",
      monthNavigator: [2, "monthNavigator", "monthNavigator", booleanAttribute],
      yearNavigator: [2, "yearNavigator", "yearNavigator", booleanAttribute],
      hourFormat: "hourFormat",
      timeOnly: [2, "timeOnly", "timeOnly", booleanAttribute],
      stepHour: [2, "stepHour", "stepHour", numberAttribute],
      stepMinute: [2, "stepMinute", "stepMinute", numberAttribute],
      stepSecond: [2, "stepSecond", "stepSecond", numberAttribute],
      showSeconds: [2, "showSeconds", "showSeconds", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      showOnFocus: [2, "showOnFocus", "showOnFocus", booleanAttribute],
      showWeek: [2, "showWeek", "showWeek", booleanAttribute],
      startWeekFromFirstDayOfYear: "startWeekFromFirstDayOfYear",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      dataType: "dataType",
      selectionMode: "selectionMode",
      maxDateCount: [2, "maxDateCount", "maxDateCount", numberAttribute],
      showButtonBar: [2, "showButtonBar", "showButtonBar", booleanAttribute],
      todayButtonStyleClass: "todayButtonStyleClass",
      clearButtonStyleClass: "clearButtonStyleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      panelStyleClass: "panelStyleClass",
      panelStyle: "panelStyle",
      keepInvalid: [2, "keepInvalid", "keepInvalid", booleanAttribute],
      hideOnDateTimeSelect: [2, "hideOnDateTimeSelect", "hideOnDateTimeSelect", booleanAttribute],
      touchUI: [2, "touchUI", "touchUI", booleanAttribute],
      timeSeparator: "timeSeparator",
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      variant: "variant",
      size: "size",
      minDate: "minDate",
      maxDate: "maxDate",
      disabledDates: "disabledDates",
      disabledDays: "disabledDays",
      yearRange: "yearRange",
      showTime: "showTime",
      responsiveOptions: "responsiveOptions",
      numberOfMonths: "numberOfMonths",
      firstDayOfWeek: "firstDayOfWeek",
      locale: "locale",
      view: "view",
      defaultDate: "defaultDate"
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClose: "onClose",
      onSelect: "onSelect",
      onClear: "onClear",
      onInput: "onInput",
      onTodayClick: "onTodayClick",
      onClearClick: "onClearClick",
      onMonthChange: "onMonthChange",
      onYearChange: "onYearChange",
      onClickOutside: "onClickOutside",
      onShow: "onShow"
    },
    features: [ɵɵProvidersFeature([DATEPICKER_VALUE_ACCESSOR, DatePickerStyle]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c16,
    decls: 4,
    vars: 6,
    consts: [["container", ""], ["inputfield", ""], ["contentWrapper", ""], [3, "ngClass", "ngStyle"], [3, "ngIf"], [3, "class", "ngStyle", "ngClass", "click", 4, "ngIf"], ["pInputText", "", "type", "text", "role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "dialog", "autocomplete", "off", 3, "focus", "keydown", "click", "blur", "input", "pSize", "value", "readonly", "ngStyle", "ngClass", "placeholder", "disabled", "pAutoFocus", "variant", "fluid"], [4, "ngIf"], ["type", "button", "aria-haspopup", "dialog", "class", "p-datepicker-dropdown", "tabindex", "0", 3, "disabled", "click", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], ["class", "p-datepicker-clear-icon", 3, "click", 4, "ngIf"], [3, "click"], [1, "p-datepicker-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["type", "button", "aria-haspopup", "dialog", "tabindex", "0", 1, "p-datepicker-dropdown", 3, "click", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "p-datepicker-input-icon-container"], [3, "ngClass", "click", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "click", "ngClass"], [3, "click", "ngStyle", "ngClass"], ["class", "p-datepicker-time-picker", 4, "ngIf"], ["class", "p-datepicker-buttonbar", 4, "ngIf"], [1, "p-datepicker-calendar-container"], ["class", "p-datepicker-calendar", 4, "ngFor", "ngForOf"], ["class", "p-datepicker-month-view", 4, "ngIf"], ["class", "p-datepicker-year-view", 4, "ngIf"], [1, "p-datepicker-calendar"], [1, "p-datepicker-header"], ["size", "small", "rounded", "", "text", "", "styleClass", "p-datepicker-prev-button p-button-icon-only", "type", "button", 3, "keydown", "onClick", "ngStyle", "ariaLabel"], [1, "p-datepicker-title"], ["type", "button", "class", "p-datepicker-select-month", "pRipple", "", 3, "disabled", "click", "keydown", 4, "ngIf"], ["type", "button", "class", "p-datepicker-select-year", "pRipple", "", 3, "disabled", "click", "keydown", 4, "ngIf"], ["class", "p-datepicker-decade", 4, "ngIf"], ["rounded", "", "text", "", "size", "small", "styleClass", "p-datepicker-next-button p-button-icon-only", 3, "keydown", "onClick", "ngStyle", "ariaLabel"], ["class", "p-datepicker-day-view", "role", "grid", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-datepicker-select-month", 3, "click", "keydown", "disabled"], ["type", "button", "pRipple", "", 1, "p-datepicker-select-year", 3, "click", "keydown", "disabled"], [1, "p-datepicker-decade"], ["role", "grid", 1, "p-datepicker-day-view"], ["class", "p-datepicker-weekheader p-disabled", 4, "ngIf"], ["class", "p-datepicker-weekday-cell", "scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "p-datepicker-weekheader", "p-disabled"], ["scope", "col", 1, "p-datepicker-weekday-cell"], [1, "p-datepicker-weekday"], ["class", "p-datepicker-weeknumber", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-datepicker-weeknumber"], [1, "p-datepicker-weeklabel-container", "p-disabled"], ["draggable", "false", "pRipple", "", 3, "click", "keydown", "ngClass"], ["class", "p-hidden-accessible", "aria-live", "polite", 4, "ngIf"], ["aria-live", "polite", 1, "p-hidden-accessible"], [1, "p-datepicker-month-view"], ["pRipple", "", 3, "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], ["pRipple", "", 3, "click", "keydown", "ngClass"], [1, "p-datepicker-year-view"], [1, "p-datepicker-time-picker"], [1, "p-datepicker-hour-picker"], ["rounded", "", "text", "", "size", "small", "styleClass", "p-datepicker-increment-button p-button-icon-only", 3, "keydown", "keydown.enter", "keydown.space", "mousedown", "mouseup", "keyup.enter", "keyup.space", "mouseleave"], [1, "p-datepicker-separator"], [1, "p-datepicker-minute-picker"], ["class", "p-datepicker-separator", 4, "ngIf"], ["class", "p-datepicker-second-picker", 4, "ngIf"], ["class", "p-datepicker-ampm-picker", 4, "ngIf"], [1, "p-datepicker-second-picker"], [1, "p-datepicker-ampm-picker"], ["size", "small", "text", "", "rounded", "", "styleClass", "p-datepicker-increment-button p-button-icon-only", 3, "keydown", "onClick", "keydown.enter"], ["size", "small", "text", "", "rounded", "", "styleClass", "p-datepicker-increment-button p-button-icon-only", 3, "keydown", "click", "keydown.enter"], [1, "p-datepicker-buttonbar"], ["size", "small", "styleClass", "p-datepicker-today-button", 3, "keydown", "onClick", "label", "ngClass"], ["size", "small", "styleClass", "p-datepicker-clear-button", 3, "keydown", "onClick", "label", "ngClass"]],
    template: function DatePicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c15);
        ɵɵelementStart(0, "span", 3, 0);
        ɵɵtemplate(2, DatePicker_ng_template_2_Template, 5, 25, "ng-template", 4)(3, DatePicker_div_3_Template, 9, 20, "div", 5);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.rootClass)("ngStyle", ctx.style);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.inline);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.inline || ctx.overlayVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Button, Ripple, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon, AutoFocus, InputText, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [state("visibleTouchUI", style({
        transform: "translate(-50%,-50%)",
        opacity: 1
      })), transition("void => visible", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}", style({
        opacity: 1,
        transform: "*"
      }))]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))]), transition("void => visibleTouchUI", [style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }), animate("{{showTransitionParams}}")]), transition("visibleTouchUI => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePicker, [{
    type: Component,
    args: [{
      selector: "p-datePicker, p-datepicker, p-date-picker",
      standalone: true,
      imports: [CommonModule, Button, Ripple, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon, AutoFocus, InputText, SharedModule],
      template: `
        <span #container [ngClass]="rootClass" [ngStyle]="style" [class]="styleClass">
            <ng-template [ngIf]="!inline">
                <input
                    #inputfield
                    pInputText
                    [pSize]="size"
                    type="text"
                    role="combobox"
                    [attr.id]="inputId"
                    [attr.name]="name"
                    [attr.required]="required"
                    [attr.aria-required]="required"
                    aria-autocomplete="none"
                    aria-haspopup="dialog"
                    [attr.aria-expanded]="overlayVisible ?? false"
                    [attr.aria-controls]="overlayVisible ? panelId : null"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [value]="inputFieldValue"
                    (focus)="onInputFocus($event)"
                    (keydown)="onInputKeydown($event)"
                    (click)="onInputClick()"
                    (blur)="onInputBlur($event)"
                    [readonly]="readonlyInput"
                    (input)="onUserInput($event)"
                    [ngStyle]="inputStyle"
                    [class]="inputStyleClass"
                    [ngClass]="'p-datepicker-input'"
                    [placeholder]="placeholder || ''"
                    [disabled]="disabled"
                    [attr.tabindex]="tabindex"
                    [attr.inputmode]="touchUI ? 'off' : null"
                    autocomplete="off"
                    [pAutoFocus]="autofocus"
                    [variant]="variant"
                    [fluid]="hasFluid"
                />
                <ng-container *ngIf="showClear && !disabled && value != null">
                    <TimesIcon *ngIf="!clearIconTemplate && !_clearIconTemplate" [class]="'p-datepicker-clear-icon'" (click)="clear()" />
                    <span *ngIf="clearIconTemplate || _clearIconTemplate" class="p-datepicker-clear-icon" (click)="clear()">
                        <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
                    </span>
                </ng-container>
                <button
                    type="button"
                    [attr.aria-label]="iconButtonAriaLabel"
                    aria-haspopup="dialog"
                    [attr.aria-expanded]="overlayVisible ?? false"
                    [attr.aria-controls]="overlayVisible ? panelId : null"
                    *ngIf="showIcon && iconDisplay === 'button'"
                    (click)="onButtonClick($event, inputfield)"
                    class="p-datepicker-dropdown"
                    [disabled]="disabled"
                    tabindex="0"
                >
                    <span *ngIf="icon" [ngClass]="icon"></span>
                    <ng-container *ngIf="!icon">
                        <CalendarIcon *ngIf="!triggerIconTemplate && !_triggerIconTemplate" />
                        <ng-template *ngTemplateOutlet="triggerIconTemplate || _triggerIconTemplate"></ng-template>
                    </ng-container>
                </button>
                <ng-container *ngIf="iconDisplay === 'input' && showIcon">
                    <span class="p-datepicker-input-icon-container">
                        <CalendarIcon
                            (click)="onButtonClick($event)"
                            *ngIf="!inputIconTemplate && !_inputIconTemplate"
                            [ngClass]="{
                                'p-datepicker-input-icon': showOnFocus
                            }"
                        />

                        <ng-container *ngTemplateOutlet="inputIconTemplate || _inputIconTemplate; context: { clickCallBack: onButtonClick.bind(this) }"></ng-container>
                    </span>
                </ng-container>
            </ng-template>
            <div
                #contentWrapper
                [attr.id]="panelId"
                [class]="panelStyleClass"
                [ngStyle]="panelStyle"
                [ngClass]="panelClass"
                [@overlayAnimation]="{
                    value: 'visible',
                    params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
                }"
                [attr.aria-label]="getTranslation('chooseDate')"
                [attr.role]="inline ? null : 'dialog'"
                [attr.aria-modal]="inline ? null : 'true'"
                [@.disabled]="inline === true"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationDone($event)"
                (click)="onOverlayClick($event)"
                *ngIf="inline || overlayVisible"
            >
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                <ng-container *ngIf="!timeOnly">
                    <div class="p-datepicker-calendar-container">
                        <div class="p-datepicker-calendar" *ngFor="let month of months; let i = index">
                            <div class="p-datepicker-header">
                                <p-button
                                    size="small"
                                    rounded
                                    text
                                    (keydown)="onContainerButtonKeydown($event)"
                                    styleClass="p-datepicker-prev-button p-button-icon-only"
                                    (onClick)="onPrevButtonClick($event)"
                                    [ngStyle]="{ visibility: i === 0 ? 'visible' : 'hidden' }"
                                    type="button"
                                    [ariaLabel]="prevIconAriaLabel"
                                >
                                    <ChevronLeftIcon *ngIf="!previousIconTemplate && !_previousIconTemplate" />
                                    <span *ngIf="previousIconTemplate || _previousIconTemplate">
                                        <ng-template *ngTemplateOutlet="previousIconTemplate || _previousIconTemplate"></ng-template>
                                    </span>
                                </p-button>
                                <div class="p-datepicker-title">
                                    <button
                                        *ngIf="currentView === 'date'"
                                        type="button"
                                        (click)="switchToMonthView($event)"
                                        (keydown)="onContainerButtonKeydown($event)"
                                        class="p-datepicker-select-month"
                                        [disabled]="switchViewButtonDisabled()"
                                        [attr.aria-label]="this.getTranslation('chooseMonth')"
                                        pRipple
                                    >
                                        {{ getMonthName(month.month) }}
                                    </button>
                                    <button
                                        *ngIf="currentView !== 'year'"
                                        type="button"
                                        (click)="switchToYearView($event)"
                                        (keydown)="onContainerButtonKeydown($event)"
                                        class="p-datepicker-select-year"
                                        [disabled]="switchViewButtonDisabled()"
                                        [attr.aria-label]="getTranslation('chooseYear')"
                                        pRipple
                                    >
                                        {{ getYear(month) }}
                                    </button>
                                    <span class="p-datepicker-decade" *ngIf="currentView === 'year'">
                                        <ng-container *ngIf="!decadeTemplate && !_decadeTemplate">{{ yearPickerValues()[0] }} - {{ yearPickerValues()[yearPickerValues().length - 1] }}</ng-container>
                                        <ng-container *ngTemplateOutlet="decadeTemplate || _decadeTemplate; context: { $implicit: yearPickerValues }"></ng-container>
                                    </span>
                                </div>
                                <p-button
                                    rounded
                                    text
                                    size="small"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    styleClass="p-datepicker-next-button p-button-icon-only"
                                    (onClick)="onNextButtonClick($event)"
                                    [ngStyle]="{ visibility: i === months.length - 1 ? 'visible' : 'hidden' }"
                                    [ariaLabel]="nextIconAriaLabel"
                                >
                                    <ChevronRightIcon *ngIf="!nextIconTemplate && !_nextIconTemplate" />

                                    <span *ngIf="nextIconTemplate || _nextIconTemplate">
                                        <ng-template *ngTemplateOutlet="nextIconTemplate || _nextIconTemplate"></ng-template>
                                    </span>
                                </p-button>
                            </div>
                            <table class="p-datepicker-day-view" role="grid" *ngIf="currentView === 'date'">
                                <thead>
                                    <tr>
                                        <th *ngIf="showWeek" class="p-datepicker-weekheader p-disabled">
                                            <span>{{ getTranslation('weekHeader') }}</span>
                                        </th>
                                        <th class="p-datepicker-weekday-cell" scope="col" *ngFor="let weekDay of weekDays; let begin = first; let end = last">
                                            <span class="p-datepicker-weekday">{{ weekDay }}</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr *ngFor="let week of month.dates; let j = index">
                                        <td *ngIf="showWeek" class="p-datepicker-weeknumber">
                                            <span class="p-datepicker-weeklabel-container p-disabled">
                                                {{ month.weekNumbers[j] }}
                                            </span>
                                        </td>
                                        <td
                                            *ngFor="let date of week"
                                            [attr.aria-label]="date.day"
                                            [ngClass]="{
                                                'p-datepicker-day-cell': true,
                                                'p-datepicker-other-month': date.otherMonth,
                                                'p-datepicker-today': date.today
                                            }"
                                        >
                                            <ng-container *ngIf="date.otherMonth ? showOtherMonths : true">
                                                <span
                                                    [ngClass]="dayClass(date)"
                                                    (click)="onDateSelect($event, date)"
                                                    draggable="false"
                                                    [attr.data-date]="formatDateKey(formatDateMetaToDate(date))"
                                                    (keydown)="onDateCellKeydown($event, date, i)"
                                                    pRipple
                                                >
                                                    <ng-container *ngIf="!dateTemplate && !_dateTemplate && (date.selectable || (!disabledDateTemplate && !_disabledDateTemplate))">{{ date.day }}</ng-container>
                                                    <ng-container *ngIf="date.selectable || (!disabledDateTemplate && !_disabledDateTemplate)">
                                                        <ng-container *ngTemplateOutlet="dateTemplate || _dateTemplate; context: { $implicit: date }"></ng-container>
                                                    </ng-container>
                                                    <ng-container *ngIf="!date.selectable">
                                                        <ng-container *ngTemplateOutlet="disabledDateTemplate || _disabledDateTemplate; context: { $implicit: date }"></ng-container>
                                                    </ng-container>
                                                </span>
                                                <div *ngIf="isSelected(date)" class="p-hidden-accessible" aria-live="polite">
                                                    {{ date.day }}
                                                </div>
                                            </ng-container>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="p-datepicker-month-view" *ngIf="currentView === 'month'">
                        <span
                            *ngFor="let m of monthPickerValues(); let i = index"
                            (click)="onMonthSelect($event, i)"
                            (keydown)="onMonthCellKeydown($event, i)"
                            [ngClass]="{
                                'p-datepicker-month': true,
                                'p-datepicker-month-selected': isMonthSelected(i),
                                'p-disabled': isMonthDisabled(i)
                            }"
                            pRipple
                        >
                            {{ m }}
                            <div *ngIf="isMonthSelected(i)" class="p-hidden-accessible" aria-live="polite">
                                {{ m }}
                            </div>
                        </span>
                    </div>
                    <div class="p-datepicker-year-view" *ngIf="currentView === 'year'">
                        <span
                            *ngFor="let y of yearPickerValues()"
                            (click)="onYearSelect($event, y)"
                            (keydown)="onYearCellKeydown($event, y)"
                            [ngClass]="{
                                'p-datepicker-year': true,
                                'p-datepicker-year-selected': isYearSelected(y),
                                'p-disabled': isYearDisabled(y)
                            }"
                            pRipple
                        >
                            {{ y }}
                            <div *ngIf="isYearSelected(y)" class="p-hidden-accessible" aria-live="polite">
                                {{ y }}
                            </div>
                        </span>
                    </div>
                </ng-container>
                <div class="p-datepicker-time-picker" *ngIf="(showTime || timeOnly) && currentView === 'date'">
                    <div class="p-datepicker-hour-picker">
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementHour($event)"
                            (keydown.space)="incrementHour($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 0, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('nextHour')"
                        >
                            <ChevronUpIcon *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />

                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </p-button>
                        <span><ng-container *ngIf="currentHour < 10">0</ng-container>{{ currentHour }}</span>
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementHour($event)"
                            (keydown.space)="decrementHour($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 0, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('prevHour')"
                        >
                            <ChevronDownIcon *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />

                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </p-button>
                    </div>
                    <div class="p-datepicker-separator">
                        <span>{{ timeSeparator }}</span>
                    </div>
                    <div class="p-datepicker-minute-picker">
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementMinute($event)"
                            (keydown.space)="incrementMinute($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 1, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('nextMinute')"
                        >
                            <ChevronUpIcon *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />

                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </p-button>
                        <span><ng-container *ngIf="currentMinute < 10">0</ng-container>{{ currentMinute }}</span>
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementMinute($event)"
                            (keydown.space)="decrementMinute($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 1, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('prevMinute')"
                        >
                            <ChevronDownIcon *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-container *ngIf="decrementIconTemplate || _decrementIconTemplate">
                                <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                            </ng-container>
                        </p-button>
                    </div>
                    <div class="p-datepicker-separator" *ngIf="showSeconds">
                        <span>{{ timeSeparator }}</span>
                    </div>
                    <div class="p-datepicker-second-picker" *ngIf="showSeconds">
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementSecond($event)"
                            (keydown.space)="incrementSecond($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 2, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('nextSecond')"
                        >
                            <ChevronUpIcon *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />

                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </p-button>
                        <span><ng-container *ngIf="currentSecond < 10">0</ng-container>{{ currentSecond }}</span>
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementSecond($event)"
                            (keydown.space)="decrementSecond($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 2, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('prevSecond')"
                        >
                            <ChevronDownIcon *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />

                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </p-button>
                    </div>
                    <div class="p-datepicker-separator" *ngIf="hourFormat == '12'">
                        <span>{{ timeSeparator }}</span>
                    </div>
                    <div class="p-datepicker-ampm-picker" *ngIf="hourFormat == '12'">
                        <p-button
                            size="small"
                            text
                            rounded
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (onClick)="toggleAMPM($event)"
                            (keydown.enter)="toggleAMPM($event)"
                            [attr.aria-label]="getTranslation('am')"
                        >
                            <ChevronUpIcon *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </p-button>
                        <span>{{ pm ? 'PM' : 'AM' }}</span>
                        <p-button
                            size="small"
                            text
                            rounded
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (click)="toggleAMPM($event)"
                            (keydown.enter)="toggleAMPM($event)"
                            [attr.aria-label]="getTranslation('pm')"
                        >
                            <ChevronDownIcon *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </p-button>
                    </div>
                </div>
                <div class="p-datepicker-buttonbar" *ngIf="showButtonBar">
                    <p-button size="small" styleClass="p-datepicker-today-button" [label]="getTranslation('today')" (keydown)="onContainerButtonKeydown($event)" (onClick)="onTodayButtonClick($event)" [ngClass]="todayButtonStyleClass" />
                    <p-button size="small" styleClass="p-datepicker-clear-button" [label]="getTranslation('clear')" (keydown)="onContainerButtonKeydown($event)" (onClick)="onClearButtonClick($event)" [ngClass]="clearButtonStyleClass" />
                </div>
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </span>
    `,
      animations: [trigger("overlayAnimation", [state("visibleTouchUI", style({
        transform: "translate(-50%,-50%)",
        opacity: 1
      })), transition("void => visible", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}", style({
        opacity: 1,
        transform: "*"
      }))]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))]), transition("void => visibleTouchUI", [style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }), animate("{{showTransitionParams}}")]), transition("visibleTouchUI => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }))])])],
      providers: [DATEPICKER_VALUE_ACCESSOR, DatePickerStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: NgZone
  }, {
    type: OverlayService
  }], {
    iconDisplay: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    iconAriaLabel: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dateFormat: [{
      type: Input
    }],
    multipleSeparator: [{
      type: Input
    }],
    rangeSeparator: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showOtherMonths: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOtherMonths: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    readonlyInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    shortYearCutoff: [{
      type: Input
    }],
    monthNavigator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    yearNavigator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hourFormat: [{
      type: Input
    }],
    timeOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stepHour: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    stepMinute: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    stepSecond: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showSeconds: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showWeek: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    startWeekFromFirstDayOfYear: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dataType: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    maxDateCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showButtonBar: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    todayButtonStyleClass: [{
      type: Input
    }],
    clearButtonStyleClass: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    panelStyleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    keepInvalid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnDateTimeSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    touchUI: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    timeSeparator: [{
      type: Input
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    disabledDates: [{
      type: Input
    }],
    disabledDays: [{
      type: Input
    }],
    yearRange: [{
      type: Input
    }],
    showTime: [{
      type: Input
    }],
    responsiveOptions: [{
      type: Input
    }],
    numberOfMonths: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    view: [{
      type: Input
    }],
    defaultDate: [{
      type: Input
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onInput: [{
      type: Output
    }],
    onTodayClick: [{
      type: Output
    }],
    onClearClick: [{
      type: Output
    }],
    onMonthChange: [{
      type: Output
    }],
    onYearChange: [{
      type: Output
    }],
    onClickOutside: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container", {
        static: false
      }]
    }],
    inputfieldViewChild: [{
      type: ViewChild,
      args: ["inputfield", {
        static: false
      }]
    }],
    content: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: false
      }]
    }],
    dateTemplate: [{
      type: ContentChild,
      args: ["date", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    disabledDateTemplate: [{
      type: ContentChild,
      args: ["disabledDate", {
        descendants: false
      }]
    }],
    decadeTemplate: [{
      type: ContentChild,
      args: ["decade", {
        descendants: false
      }]
    }],
    previousIconTemplate: [{
      type: ContentChild,
      args: ["previousicon", {
        descendants: false
      }]
    }],
    nextIconTemplate: [{
      type: ContentChild,
      args: ["nexticon", {
        descendants: false
      }]
    }],
    triggerIconTemplate: [{
      type: ContentChild,
      args: ["triggericon", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    decrementIconTemplate: [{
      type: ContentChild,
      args: ["decrementicon", {
        descendants: false
      }]
    }],
    incrementIconTemplate: [{
      type: ContentChild,
      args: ["incrementicon", {
        descendants: false
      }]
    }],
    inputIconTemplate: [{
      type: ContentChild,
      args: ["inputicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DatePickerModule = class _DatePickerModule {
  static ɵfac = function DatePickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePickerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DatePickerModule,
    imports: [DatePicker, SharedModule],
    exports: [DatePicker, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [DatePicker, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerModule, [{
    type: NgModule,
    args: [{
      imports: [DatePicker, SharedModule],
      exports: [DatePicker, SharedModule]
    }]
  }], null, null);
})();
export {
  DATEPICKER_VALUE_ACCESSOR,
  DatePicker,
  DatePickerClasses,
  DatePickerModule,
  DatePickerStyle
};
//# sourceMappingURL=primeng_datepicker.js.map
