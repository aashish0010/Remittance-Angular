import {
  MatSortModule
} from "./chunk-GAAPRGBK.js";
import {
  MatPaginatorModule
} from "./chunk-37IS6HQJ.js";
import {
  SearchableSelectDirective
} from "./chunk-SPE5Y2T4.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-E6522ZUU.js";
import "./chunk-KZEP64CQ.js";
import {
  MatChipsModule
} from "./chunk-VUXSNQV7.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-YGDTJNE7.js";
import {
  NotificationService
} from "./chunk-YVJ6TWB2.js";
import "./chunk-S5Y76ZQA.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-N4KLCW3D.js";
import "./chunk-RYR4NCTK.js";
import "./chunk-4ICNUTBP.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-7GR7IV7E.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  Overlay,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayRef,
  PortalModule,
  TemplatePortal
} from "./chunk-NNRSADKN.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-NF2W6NXA.js";
import {
  ApiService,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-IPUKUTHA.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-SKGBRZ6H.js";
import {
  AuthStateService
} from "./chunk-T6M7P6K3.js";
import {
  CdkScrollable
} from "./chunk-3TORE4W6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RequiredValidator
} from "./chunk-5RGUSOA3.js";
import {
  A11yModule,
  Directionality,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  MatCommonModule,
  MatIcon,
  MatIconModule,
  Platform,
  _IdGenerator,
  _getFocusedElementPierceShadowDom,
  coerceNumberProperty,
  hasModifierKey
} from "./chunk-BPDBYDBO.js";
import {
  CommonModule,
  DOCUMENT,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-Y4TRFXTA.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  defer,
  filter,
  inject,
  merge,
  of,
  setClassMetadata,
  startWith,
  take,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7WRAX6BO.js";

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
}
var DialogConfig = class {
  /**
   * Where the attached component should live in Angular's *logical* component tree.
   * This affects what is available for injection and the change detection order for the
   * component instantiated inside of the dialog. This does not affect where the dialog
   * content will be rendered.
   */
  viewContainerRef;
  /**
   * Injector used for the instantiation of the component to be attached. If provided,
   * takes precedence over the injector indirectly provided by `ViewContainerRef`.
   */
  injector;
  /** ID for the dialog. If omitted, a unique one will be generated. */
  id;
  /** The ARIA role of the dialog element. */
  role = "dialog";
  /** Optional CSS class or classes applied to the overlay panel. */
  panelClass = "";
  /** Whether the dialog has a backdrop. */
  hasBackdrop = true;
  /** Optional CSS class or classes applied to the overlay backdrop. */
  backdropClass = "";
  /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
  disableClose = false;
  /** Width of the dialog. */
  width = "";
  /** Height of the dialog. */
  height = "";
  /** Min-width of the dialog. If a number is provided, assumes pixel units. */
  minWidth;
  /** Min-height of the dialog. If a number is provided, assumes pixel units. */
  minHeight;
  /** Max-width of the dialog. If a number is provided, assumes pixel units. */
  maxWidth;
  /** Max-height of the dialog. If a number is provided, assumes pixel units. */
  maxHeight;
  /** Strategy to use when positioning the dialog. Defaults to centering it on the page. */
  positionStrategy;
  /** Data being injected into the child component. */
  data = null;
  /** Layout direction for the dialog's content. */
  direction;
  /** ID of the element that describes the dialog. */
  ariaDescribedBy = null;
  /** ID of the element that labels the dialog. */
  ariaLabelledBy = null;
  /** Dialog label applied via `aria-label` */
  ariaLabel = null;
  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal = false;
  /**
   * Where the dialog should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus = "first-tabbable";
  /**
   * Whether the dialog should restore focus to the previously-focused element upon closing.
   * Has the following behavior based on the type that is passed in:
   * - `boolean` - when true, will return focus to the element that was focused before the dialog
   *    was opened, otherwise won't restore focus at all.
   * - `string` - focus will be restored to the first element that matches the CSS selector.
   * - `HTMLElement` - focus will be restored to the specific element.
   */
  restoreFocus = true;
  /**
   * Scroll strategy to be used for the dialog. This determines how
   * the dialog responds to scrolling underneath the panel element.
   */
  scrollStrategy;
  /**
   * Whether the dialog should close when the user navigates backwards or forwards through browser
   * history. This does not apply to navigation via anchor element unless using URL-hash based
   * routing (`HashLocationStrategy` in the Angular router).
   */
  closeOnNavigation = true;
  /**
   * Whether the dialog should close when the dialog service is destroyed. This is useful if
   * another service is wrapping the dialog and is managing the destruction instead.
   */
  closeOnDestroy = true;
  /**
   * Whether the dialog should close when the underlying overlay is detached. This is useful if
   * another service is wrapping the dialog and is managing the destruction instead. E.g. an
   * external detachment can happen as a result of a scroll strategy triggering it or when the
   * browser location changes.
   */
  closeOnOverlayDetachments = true;
  /**
   * Alternate `ComponentFactoryResolver` to use when resolving the associated component.
   * @deprecated No longer used. Will be removed.
   * @breaking-change 20.0.0
   */
  componentFactoryResolver;
  /**
   * Providers that will be exposed to the contents of the dialog. Can also
   * be provided as a function in order to generate the providers lazily.
   */
  providers;
  /**
   * Component into which the dialog content will be rendered. Defaults to `CdkDialogContainer`.
   * A configuration object can be passed in to customize the providers that will be exposed
   * to the dialog container.
   */
  container;
  /**
   * Context that will be passed to template-based dialogs.
   * A function can be passed in to resolve the context lazily.
   */
  templateContext;
};
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _config;
  _interactivityChecker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _overlayRef = inject(OverlayRef);
  _focusMonitor = inject(FocusMonitor);
  _renderer = inject(Renderer2);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _platform = inject(Platform);
  _document = inject(DOCUMENT, {
    optional: true
  });
  /** The portal outlet inside of this container into which the dialog content will be loaded. */
  _portalOutlet;
  _focusTrapped = new Subject();
  /** The class that traps and manages focus within the dialog. */
  _focusTrap = null;
  /** Element that was focused before the dialog was opened. Save this to restore upon close. */
  _elementFocusedBeforeDialogWasOpened = null;
  /**
   * Type of interaction that led to the dialog being closed. This is used to determine
   * whether the focus style will be applied when returning focus to its original location
   * after the dialog is closed.
   */
  _closeInteractionType = null;
  /**
   * Queue of the IDs of the dialog's label element, based on their definition order. The first
   * ID will be used as the `aria-labelledby` value. We use a queue here to handle the case
   * where there are two or more titles in the DOM at a time and the first one is destroyed while
   * the rest are present.
   */
  _ariaLabelledByQueue = [];
  _isDestroyed = false;
  constructor() {
    super();
    this._config = inject(DialogConfig, {
      optional: true
    }) || new DialogConfig();
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._handleBackdropClicks();
    this._captureInitialFocus();
  }
  /**
   * Can be used by child classes to customize the initial focus
   * capturing behavior (e.g. if it's tied to an animation).
   */
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._focusTrapped.complete();
    this._isDestroyed = true;
    this._restoreFocus();
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attaches a DOM portal to the dialog container.
   * @param portal Portal to be attached.
   * @deprecated To be turned into a method.
   * @breaking-change 10.0.0
   */
  attachDomPortal = (portal) => {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachDomPortal(portal);
    this._contentAttached();
    return result;
  };
  // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
  /** Captures focus if it isn't already inside the dialog. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          deregisterBlur();
          deregisterMousedown();
          element.removeAttribute("tabindex");
        };
        const deregisterBlur = this._renderer.listen(element, "blur", callback);
        const deregisterMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus(options) {
    if (this._isDestroyed) {
      return;
    }
    afterNextRender(() => {
      const element = this._elementRef.nativeElement;
      switch (this._config.autoFocus) {
        case false:
        case "dialog":
          if (!this._containsFocus()) {
            element.focus(options);
          }
          break;
        case true:
        case "first-tabbable":
          const focusedSuccessfully = this._focusTrap?.focusInitialElement(options);
          if (!focusedSuccessfully) {
            this._focusDialogContainer(options);
          }
          break;
        case "first-heading":
          this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', options);
          break;
        default:
          this._focusByCssSelector(this._config.autoFocus, options);
          break;
      }
      this._focusTrapped.next();
    }, {
      injector: this._injector
    });
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === "string") {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === "boolean") {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer(options) {
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus(options);
    }
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
  /** Sets up the focus trap. */
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
      }
    }
  }
  /** Sets up the listener that handles clicks on the dialog backdrop. */
  _handleBackdropClicks() {
    this._overlayRef.backdropClick().subscribe(() => {
      if (this._config.disableClose) {
        this._recaptureFocus();
      }
    });
  }
  static \u0275fac = function CdkDialogContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDialogContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkDialogContainer,
    selectors: [["cdk-dialog-container"]],
    viewQuery: function CdkDialogContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkPortalOutlet, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalOutlet = _t.first);
      }
    },
    hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
    hostVars: 6,
    hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function CdkDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDialogContainer, [{
    type: Component,
    args: [{
      selector: "cdk-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkPortalOutlet],
      host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"]
    }]
  }], () => [], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var DialogRef = class {
  overlayRef;
  config;
  /**
   * Instance of component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentInstance;
  /**
   * `ComponentRef` of the component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentRef;
  /** Instance of the container that is rendering out the dialog content. */
  containerInstance;
  /** Whether the user is allowed to close the dialog. */
  disableClose;
  /** Emits when the dialog has been closed. */
  closed = new Subject();
  /** Emits when the backdrop of the dialog is clicked. */
  backdropClick;
  /** Emits when on keyboard events within the dialog. */
  keydownEvents;
  /** Emits on pointer events that happen outside of the dialog. */
  outsidePointerEvents;
  /** Unique ID for the dialog. */
  id;
  /** Subscription to external detachments of the dialog. */
  _detachSubscription;
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  /**
   * Close the dialog.
   * @param result Optional result to return to the dialog opener.
   * @param options Additional options to customize the closing behavior.
   */
  close(result, options) {
    if (this.containerInstance) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  /** Updates the position of the dialog based on the current position strategy. */
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
};
var DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var DIALOG_DATA = new InjectionToken("DialogData");
var DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
var Dialog = class _Dialog {
  _overlay = inject(Overlay);
  _injector = inject(Injector);
  _defaultOptions = inject(DEFAULT_DIALOG_CONFIG, {
    optional: true
  });
  _parentDialog = inject(_Dialog, {
    optional: true,
    skipSelf: true
  });
  _overlayContainer = inject(OverlayContainer);
  _idGenerator = inject(_IdGenerator);
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  _ariaHiddenElements = /* @__PURE__ */ new Map();
  _scrollStrategy = inject(DIALOG_SCROLL_STRATEGY);
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  /**
   * Stream that emits when all open dialog have finished closing.
   * Will emit on subscribe if there are no open dialogs to begin with.
   */
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  constructor() {
  }
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = __spreadValues(__spreadValues({}, defaults), config);
    config.id = config.id || this._idGenerator.getId("cdk-dialog-");
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = this._overlay.create(overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    if (!this.openDialogs.length) {
      const overlayContainer = this._overlayContainer.getContainerElement();
      if (dialogContainer._focusTrapped) {
        dialogContainer._focusTrapped.pipe(take(1)).subscribe(() => {
          this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
        });
      } else {
        this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
      }
    }
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    reverseForEach(this.openDialogs, (dialog) => dialog.close());
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param config The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(config) {
    const state = new OverlayConfig({
      positionStrategy: config.positionStrategy || this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation
    });
    if (config.backdropClass) {
      state.backdropClass = config.backdropClass;
    }
    return state;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachContainer(overlay, dialogRef, config) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === "function") {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({
      parent: userInjector || this._injector,
      providers
    }));
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param config Configuration used to open the dialog.
   */
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
      }
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
   * dialog injector, if the user didn't provide a custom one.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === "function") {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: Directionality,
        useValue: {
          value: config.direction,
          change: of()
        }
      });
    }
    return Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   * @param emitEvent Whether to emit an event if this is the last dialog.
   */
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  /** Hides all of the content that isn't an overlay from assistive technology. */
  _hideNonDialogContentFromAssistiveTechnology(overlayContainer) {
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  static \u0275fac = function Dialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dialog)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Dialog,
    factory: _Dialog.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var DialogModule = class _DialogModule {
  static \u0275fac = function DialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DialogModule,
    imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
    exports: [
      // Re-export the PortalModule so that people extending the `CdkDialogContainer`
      // don't have to remember to import it or be faced with an unhelpful error.
      PortalModule,
      CdkDialogContainer
    ]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [Dialog],
    imports: [
      OverlayModule,
      PortalModule,
      A11yModule,
      // Re-export the PortalModule so that people extending the `CdkDialogContainer`
      // don't have to remember to import it or be faced with an unhelpful error.
      PortalModule
    ]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
      exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ],
      providers: [Dialog]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/module-BnDTus5c.mjs
function MatDialogContainer_ng_template_2_Template(rf, ctx) {
}
var MatDialogConfig = class {
  /**
   * Where the attached component should live in Angular's *logical* component tree.
   * This affects what is available for injection and the change detection order for the
   * component instantiated inside of the dialog. This does not affect where the dialog
   * content will be rendered.
   */
  viewContainerRef;
  /**
   * Injector used for the instantiation of the component to be attached. If provided,
   * takes precedence over the injector indirectly provided by `ViewContainerRef`.
   */
  injector;
  /** ID for the dialog. If omitted, a unique one will be generated. */
  id;
  /** The ARIA role of the dialog element. */
  role = "dialog";
  /** Custom class for the overlay pane. */
  panelClass = "";
  /** Whether the dialog has a backdrop. */
  hasBackdrop = true;
  /** Custom class for the backdrop. */
  backdropClass = "";
  /** Whether the user can use escape or clicking on the backdrop to close the modal. */
  disableClose = false;
  /** Width of the dialog. */
  width = "";
  /** Height of the dialog. */
  height = "";
  /** Min-width of the dialog. If a number is provided, assumes pixel units. */
  minWidth;
  /** Min-height of the dialog. If a number is provided, assumes pixel units. */
  minHeight;
  /** Max-width of the dialog. If a number is provided, assumes pixel units. */
  maxWidth;
  /** Max-height of the dialog. If a number is provided, assumes pixel units. */
  maxHeight;
  /** Position overrides. */
  position;
  /** Data being injected into the child component. */
  data = null;
  /** Layout direction for the dialog's content. */
  direction;
  /** ID of the element that describes the dialog. */
  ariaDescribedBy = null;
  /** ID of the element that labels the dialog. */
  ariaLabelledBy = null;
  /** Aria label to assign to the dialog element. */
  ariaLabel = null;
  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal = false;
  /**
   * Where the dialog should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus = "first-tabbable";
  /**
   * Whether the dialog should restore focus to the
   * previously-focused element, after it's closed.
   */
  restoreFocus = true;
  /** Whether to wait for the opening animation to finish before trapping focus. */
  delayFocusTrap = true;
  /** Scroll strategy to be used for the dialog. */
  scrollStrategy;
  /**
   * Whether the dialog should close when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */
  closeOnNavigation = true;
  /**
   * Alternate `ComponentFactoryResolver` to use when resolving the associated component.
   * @deprecated No longer used. Will be removed.
   * @breaking-change 20.0.0
   */
  componentFactoryResolver;
  /**
   * Duration of the enter animation in ms.
   * Should be a number, string type is deprecated.
   * @breaking-change 17.0.0 Remove string signature.
   */
  enterAnimationDuration;
  /**
   * Duration of the exit animation in ms.
   * Should be a number, string type is deprecated.
   * @breaking-change 17.0.0 Remove string signature.
   */
  exitAnimationDuration;
};
var OPEN_CLASS = "mdc-dialog--open";
var OPENING_CLASS = "mdc-dialog--opening";
var CLOSING_CLASS = "mdc-dialog--closing";
var OPEN_ANIMATION_DURATION = 150;
var CLOSE_ANIMATION_DURATION = 75;
var MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
  _animationMode = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  /** Emits when an animation state changes. */
  _animationStateChanged = new EventEmitter();
  /** Whether animations are enabled. */
  _animationsEnabled = this._animationMode !== "NoopAnimations";
  /** Number of actions projected in the dialog. */
  _actionSectionCount = 0;
  /** Host element of the dialog container component. */
  _hostElement = this._elementRef.nativeElement;
  /** Duration of the dialog open animation. */
  _enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
  /** Duration of the dialog close animation. */
  _exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
  /** Current timer for dialog animations. */
  _animationTimer = null;
  _contentAttached() {
    super._contentAttached();
    this._startOpenAnimation();
  }
  /** Starts the dialog open animation if enabled. */
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: "opening",
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  /**
   * Starts the exit animation of the dialog if enabled. This method is
   * called by the dialog ref.
   */
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: "closing",
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  /**
   * Updates the number action sections.
   * @param delta Increase/decrease in the number of sections.
   */
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Completes the dialog open by clearing potential animation classes, trapping
   * focus and emitting an opened event.
   */
  _finishDialogOpen = () => {
    this._clearAnimationClasses();
    this._openAnimationDone(this._enterAnimationDuration);
  };
  /**
   * Completes the dialog close by clearing potential animation classes, restoring
   * focus and emitting a closed event.
   */
  _finishDialogClose = () => {
    this._clearAnimationClasses();
    this._animationStateChanged.emit({
      state: "closed",
      totalTime: this._exitAnimationDuration
    });
  };
  /** Clears all dialog animation classes. */
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    this._animationTimer = setTimeout(callback, duration);
  }
  /** Runs a callback in `requestAnimationFrame`, if available. */
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  /**
   * Callback for when the open dialog animation has finished. Intended to
   * be called by sub-classes that use different animation implementations.
   */
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: "opened",
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
    return ref;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogContainer_BaseFactory;
    return function MatDialogContainer_Factory(__ngFactoryType__) {
      return (\u0275MatDialogContainer_BaseFactory || (\u0275MatDialogContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogContainer)))(__ngFactoryType__ || _MatDialogContainer);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDialogContainer,
    selectors: [["mat-dialog-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
    hostVars: 10,
    hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275hostProperty("id", ctx._config.id);
        \u0275\u0275attribute("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        \u0275\u0275classProp("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 0,
    consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
    template: function MatDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mdc-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContainer, [{
    type: Component,
    args: [{
      selector: "mat-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      },
      template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
      styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mdc-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n']
    }]
  }], null, null);
})();
var TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
var MatDialogState;
(function(MatDialogState2) {
  MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
  MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
  MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
var MatDialogRef = class {
  _ref;
  _containerInstance;
  /** The instance of component opened into the dialog. */
  componentInstance;
  /**
   * `ComponentRef` of the component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentRef;
  /** Whether the user is allowed to close the dialog. */
  disableClose;
  /** Unique ID for the dialog. */
  id;
  /** Subject for notifying the user that the dialog has finished opening. */
  _afterOpened = new Subject();
  /** Subject for notifying the user that the dialog has started closing. */
  _beforeClosed = new Subject();
  /** Result to be passed to afterClosed. */
  _result;
  /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
  _closeFallbackTimeout;
  /** Current state of the dialog. */
  _state = MatDialogState.OPEN;
  // TODO(crisbeto): we shouldn't have to declare this property, because `DialogRef.close`
  // already has a second `options` parameter that we can use. The problem is that internal tests
  // have assertions like `expect(MatDialogRef.close).toHaveBeenCalledWith(foo)` which will break,
  // because it'll be called with two arguments by things like `MatDialogClose`.
  /** Interaction that caused the dialog to close. */
  _closeInteractionType;
  constructor(_ref, config, _containerInstance) {
    this._ref = _ref;
    this._containerInstance = _containerInstance;
    this.disableClose = config.disableClose;
    this.id = _ref.id;
    _ref.addPanelClass("mat-mdc-dialog-panel");
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */
  close(dialogResult) {
    this._result = dialogResult;
    this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */
  afterClosed() {
    return this._ref.closed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */
  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this._ref.updateSize(width, height);
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */
  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
};
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var MatDialog = class _MatDialog {
  _overlay = inject(Overlay);
  _defaultOptions = inject(MAT_DIALOG_DEFAULT_OPTIONS, {
    optional: true
  });
  _scrollStrategy = inject(MAT_DIALOG_SCROLL_STRATEGY);
  _parentDialog = inject(_MatDialog, {
    optional: true,
    skipSelf: true
  });
  _idGenerator = inject(_IdGenerator);
  _dialog = inject(Dialog);
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  dialogConfigClass = MatDialogConfig;
  _dialogRefConstructor;
  _dialogContainerType;
  _dialogDataToken;
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  /**
   * Stream that emits when all open dialog have finished closing.
   * Will emit on subscribe if there are no open dialogs to begin with.
   */
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  constructor() {
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  open(componentOrTemplateRef, config) {
    let dialogRef;
    config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
    config.id = config.id || this._idGenerator.getId("mat-mdc-dialog-");
    config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on destroy, because this service cleans up its open dialogs as well.
      // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
      // the dialogs immediately whereas we want it to wait for the animations to finish.
      closeOnDestroy: false,
      // Disable closing on detachments so that we can sync up the animation.
      // The Material dialog ref handles this manually.
      closeOnOverlayDetachments: false,
      container: {
        type: this._dialogContainerType,
        providers: () => [
          // Provide our config as the CDK config as well since it has the same interface as the
          // CDK one, but it contains the actual values passed in by the user for things like
          // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
          {
            provide: this.dialogConfigClass,
            useValue: config
          },
          {
            provide: DialogConfig,
            useValue: config
          }
        ]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
        dialogRef.updatePosition(config?.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];
      }
    }));
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
  static \u0275fac = function MatDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialog)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatDialog,
    factory: _MatDialog.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var MatDialogClose = class _MatDialogClose {
  dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  /** Screen-reader label for the button. */
  ariaLabel;
  /** Default to "button" to prevents accidental form submits. */
  type = "button";
  /** Dialog close input. */
  dialogResult;
  _matDialogClose;
  constructor() {
  }
  ngOnInit() {
    if (!this.dialogRef) {
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
  static \u0275fac = function MatDialogClose_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogClose)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogClose,
    selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
    hostVars: 2,
    hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatDialogClose_click_HostBindingHandler($event) {
          return ctx._onButtonClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      type: "type",
      dialogResult: [0, "mat-dialog-close", "dialogResult"],
      _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
    },
    exportAs: ["matDialogClose"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogClose, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-close], [matDialogClose]",
      exportAs: "matDialogClose",
      host: {
        "(click)": "_onButtonClick($event)",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.type]": "type"
      }
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    type: [{
      type: Input
    }],
    dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }],
    _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }]
  });
})();
var MatDialogLayoutSection = class _MatDialogLayoutSection {
  _dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  constructor() {
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    const instance = this._dialogRef?._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
  static \u0275fac = function MatDialogLayoutSection_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogLayoutSection)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogLayoutSection
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogLayoutSection, [{
    type: Directive
  }], () => [], null);
})();
var MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
  id = inject(_IdGenerator).getId("mat-mdc-dialog-title-");
  _onAdd() {
    this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
  }
  _onRemove() {
    this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogTitle_BaseFactory;
    return function MatDialogTitle_Factory(__ngFactoryType__) {
      return (\u0275MatDialogTitle_BaseFactory || (\u0275MatDialogTitle_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogTitle)))(__ngFactoryType__ || _MatDialogTitle);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogTitle,
    selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
    hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
    hostVars: 1,
    hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275hostProperty("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matDialogTitle"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogTitle, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-title], [matDialogTitle]",
      exportAs: "matDialogTitle",
      host: {
        "class": "mat-mdc-dialog-title mdc-dialog__title",
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatDialogContent = class _MatDialogContent {
  static \u0275fac = function MatDialogContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogContent,
    selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
    hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
    features: [\u0275\u0275HostDirectivesFeature([CdkScrollable])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContent, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        "class": "mat-mdc-dialog-content mdc-dialog__content"
      },
      hostDirectives: [CdkScrollable]
    }]
  }], null, null);
})();
var MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
  /**
   * Horizontal alignment of action buttons.
   */
  align;
  _onAdd() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
  }
  _onRemove() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogActions_BaseFactory;
    return function MatDialogActions_Factory(__ngFactoryType__) {
      return (\u0275MatDialogActions_BaseFactory || (\u0275MatDialogActions_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogActions)))(__ngFactoryType__ || _MatDialogActions);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogActions,
    selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
    hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
    hostVars: 6,
    hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogActions, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      host: {
        "class": "mat-mdc-dialog-actions mdc-dialog__actions",
        "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
        "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
        "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
var MatDialogModule = class _MatDialogModule {
  static \u0275fac = function MatDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatDialogModule,
    imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
    exports: [MatCommonModule, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatDialog],
    imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, ...DIRECTIVES],
      exports: [MatCommonModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();

// src/app/pages/admin/agent-management/agent-management.component.ts
var _c0 = (a0, a1, a2) => ({ "chip-success": a0, "chip-error": a1, "chip-warning": a2 });
var _c1 = () => ["locationName", "locationCode", "countryCity", "users", "status", "actions"];
var _c2 = () => ["fullName", "email", "userName", "phone", "role", "isDefault", "actions"];
var _c3 = () => ["bankName", "paymentMode", "bankCode", "swiftCode", "branches", "status", "actions"];
var _c4 = () => ["branchName", "branchCode", "swiftCode", "address", "phone", "actions"];
function AgentManagementComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_8_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Business Name");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_8_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agent_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(agent_r3.businessName);
  }
}
function AgentManagementComponent_mat_card_8_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_8_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agent_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(agent_r4.country);
  }
}
function AgentManagementComponent_mat_card_8_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_8_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const agent_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", agent_r5.agentType === "SendingAgent" ? "chip-info" : "chip-tertiary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", agent_r5.agentType === "SendingAgent" ? "Sending" : "Payout", " ");
  }
}
function AgentManagementComponent_mat_card_8_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_8_td_17_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 36);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_8_td_17_ng_container_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const agent_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unblockAgent(agent_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 37);
    \u0275\u0275text(3, "lock_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function AgentManagementComponent_mat_card_8_td_17_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 38);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_8_td_17_ng_container_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const agent_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveAgent(agent_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 37);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_8_td_17_ng_container_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const agent_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectAgent(agent_r7));
    });
    \u0275\u0275elementStart(5, "mat-icon", 40);
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function AgentManagementComponent_mat_card_8_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "div", 34)(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AgentManagementComponent_mat_card_8_td_17_ng_container_4_Template, 4, 0, "ng-container", 35)(5, AgentManagementComponent_mat_card_8_td_17_ng_container_5_Template, 7, 0, "ng-container", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const agent_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(4, _c0, agent_r7.status === "Approved", agent_r7.status === "Blocked" || agent_r7.status === "Rejected", agent_r7.status !== "Approved" && agent_r7.status !== "Blocked" && agent_r7.status !== "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(agent_r7.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r7.status === "Blocked");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r7.status !== "Approved" && agent_r7.status !== "Blocked" && agent_r7.status !== "Rejected");
  }
}
function AgentManagementComponent_mat_card_8_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_8_td_20_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_8_td_20_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const agent_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openLocationManagement(agent_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 50);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd()();
  }
}
function AgentManagementComponent_mat_card_8_td_20_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_8_td_20_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const agent_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openBankManagement(agent_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 42);
    \u0275\u0275text(2, "account_balance");
    \u0275\u0275elementEnd()();
  }
}
function AgentManagementComponent_mat_card_8_td_20_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_8_td_20_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const agent_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.blockAgent(agent_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon", 48);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd()();
  }
}
function AgentManagementComponent_mat_card_8_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 41);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_8_td_20_Template_button_click_1_listener() {
      const agent_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(agent_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon", 42);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AgentManagementComponent_mat_card_8_td_20_button_4_Template, 3, 0, "button", 43)(5, AgentManagementComponent_mat_card_8_td_20_button_5_Template, 3, 0, "button", 44)(6, AgentManagementComponent_mat_card_8_td_20_button_6_Template, 3, 0, "button", 45);
    \u0275\u0275elementStart(7, "button", 46);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_8_td_20_Template_button_click_7_listener() {
      const agent_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit(agent_r10));
    });
    \u0275\u0275elementStart(8, "mat-icon", 42);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 47);
    \u0275\u0275listener("click", function AgentManagementComponent_mat_card_8_td_20_Template_button_click_10_listener() {
      const agent_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteAgent(agent_r10));
    });
    \u0275\u0275elementStart(11, "mat-icon", 48);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const agent_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", agent_r10.agentType === "SendingAgent");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r10.agentType === "PayoutAgent");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", agent_r10.status === "Approved");
  }
}
function AgentManagementComponent_mat_card_8_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function AgentManagementComponent_mat_card_8_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function AgentManagementComponent_mat_card_8_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " No agents found. ");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_mat_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 16)(1, "mat-form-field", 17)(2, "mat-icon", 18);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_mat_card_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AgentManagementComponent_mat_card_8_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 20);
    \u0275\u0275elementContainerStart(6, 21);
    \u0275\u0275template(7, AgentManagementComponent_mat_card_8_th_7_Template, 2, 0, "th", 22)(8, AgentManagementComponent_mat_card_8_td_8_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 24);
    \u0275\u0275template(10, AgentManagementComponent_mat_card_8_th_10_Template, 2, 0, "th", 22)(11, AgentManagementComponent_mat_card_8_td_11_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 25);
    \u0275\u0275template(13, AgentManagementComponent_mat_card_8_th_13_Template, 2, 0, "th", 22)(14, AgentManagementComponent_mat_card_8_td_14_Template, 3, 2, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 26);
    \u0275\u0275template(16, AgentManagementComponent_mat_card_8_th_16_Template, 2, 0, "th", 22)(17, AgentManagementComponent_mat_card_8_td_17_Template, 6, 8, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 27);
    \u0275\u0275template(19, AgentManagementComponent_mat_card_8_th_19_Template, 2, 0, "th", 22)(20, AgentManagementComponent_mat_card_8_td_20_Template, 13, 3, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(21, AgentManagementComponent_mat_card_8_tr_21_Template, 1, 0, "tr", 28)(22, AgentManagementComponent_mat_card_8_tr_22_Template, 1, 0, "tr", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AgentManagementComponent_mat_card_8_div_23_Template, 2, 0, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.filteredAgents);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredAgents.length && !ctx_r1.loading);
  }
}
function AgentManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function AgentManagementComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_10_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 62)(2, "span", 63);
    \u0275\u0275text(3, "Funding Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 62)(7, "span", 63);
    \u0275\u0275text(8, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 65);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 62)(13, "span", 63);
    \u0275\u0275text(14, "Current Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 65);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.fundingType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 3, ctx_r1.detailAgent.creditLimit, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 6, ctx_r1.detailAgent.currentBalance, "1.2-2"));
  }
}
function AgentManagementComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "h3")(3, "mat-icon", 59);
    \u0275\u0275text(4, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Agent Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 61)(10, "div", 62)(11, "span", 63);
    \u0275\u0275text(12, "Business Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 62)(16, "span", 63);
    \u0275\u0275text(17, "Contact Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 62)(21, "span", 63);
    \u0275\u0275text(22, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 62)(26, "span", 63);
    \u0275\u0275text(27, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 62)(31, "span", 63);
    \u0275\u0275text(32, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 62)(36, "span", 63);
    \u0275\u0275text(37, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 62)(41, "span", 63);
    \u0275\u0275text(42, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, AgentManagementComponent_div_10_ng_container_45_Template, 18, 9, "ng-container", 35);
    \u0275\u0275elementStart(46, "div", 62)(47, "span", 63);
    \u0275\u0275text(48, "License Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 62)(52, "span", 63);
    \u0275\u0275text(53, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 33);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 64)(57, "span", 63);
    \u0275\u0275text(58, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 62)(62, "span", 63);
    \u0275\u0275text(63, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.businessName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.agentType === "SendingAgent" ? "Sending Agent" : "Payout Agent");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.detailAgent.country, " - ", ctx_r1.detailAgent.city, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.currency || ctx_r1.getCurrencyForCountry(ctx_r1.detailAgent.country));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailAgent.agentType === "SendingAgent");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.licenseNumber || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(17, _c0, ctx_r1.detailAgent.status === "Approved", ctx_r1.detailAgent.status === "Blocked", ctx_r1.detailAgent.status !== "Approved" && ctx_r1.detailAgent.status !== "Blocked"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailAgent.address || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 14, ctx_r1.detailAgent.createdAt, "yyyy-MM-dd"));
  }
}
function AgentManagementComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function AgentManagementComponent_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreatePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.createError);
  }
}
function AgentManagementComponent_div_12_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 86);
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
function AgentManagementComponent_div_12_mat_option_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275property("value", c_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r19);
  }
}
function AgentManagementComponent_div_12_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-form-field", 75)(2, "mat-label");
    \u0275\u0275text(3, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_ng_container_69_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.creditLimit, $event) || (ctx_r1.newAgent.creditLimit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 75)(6, "mat-label");
    \u0275\u0275text(7, "Funding Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_ng_container_69_Template_mat_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.fundingType, $event) || (ctx_r1.newAgent.fundingType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "mat-option", 89);
    \u0275\u0275text(10, "PreFunding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 90);
    \u0275\u0275text(12, "PostFunding");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.creditLimit);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.fundingType);
  }
}
function AgentManagementComponent_div_12_mat_spinner_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 91);
  }
}
function AgentManagementComponent_div_12_mat_icon_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "person_add");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 58)(2, "h3")(3, "mat-icon", 59);
    \u0275\u0275text(4, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Create New Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreatePopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_12_div_9_Template, 2, 1, "div", 67);
    \u0275\u0275elementStart(10, "div", 68)(11, "mat-form-field", 69)(12, "mat-label");
    \u0275\u0275text(13, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-select", 70);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_Template_mat_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.agentType, $event) || (ctx_r1.newAgent.agentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "mat-option", 71);
    \u0275\u0275text(16, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 72);
    \u0275\u0275text(18, "Payout Agent");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 68)(20, "h4", 73);
    \u0275\u0275text(21, "Company Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 74)(23, "mat-form-field", 75)(24, "mat-label");
    \u0275\u0275text(25, "Business Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.businessName, $event) || (ctx_r1.newAgent.businessName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 75)(28, "mat-label");
    \u0275\u0275text(29, "License Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.licenseNumber, $event) || (ctx_r1.newAgent.licenseNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 69)(32, "mat-label");
    \u0275\u0275text(33, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.address, $event) || (ctx_r1.newAgent.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 68)(36, "h4", 73);
    \u0275\u0275text(37, "Authorized Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 74)(39, "mat-form-field", 75)(40, "mat-label");
    \u0275\u0275text(41, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.fullName, $event) || (ctx_r1.newAgent.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "mat-form-field", 75)(44, "mat-label");
    \u0275\u0275text(45, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.email, $event) || (ctx_r1.newAgent.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "mat-form-field", 75)(48, "mat-label");
    \u0275\u0275text(49, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.phone, $event) || (ctx_r1.newAgent.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 68)(52, "h4", 73);
    \u0275\u0275text(53, "Accounting Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 74)(55, "mat-form-field", 75)(56, "mat-label");
    \u0275\u0275text(57, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-select", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_Template_mat_select_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.country, $event) || (ctx_r1.newAgent.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(59, AgentManagementComponent_div_12_mat_option_59_Template, 2, 2, "mat-option", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "mat-form-field", 75)(61, "mat-label");
    \u0275\u0275text(62, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.city, $event) || (ctx_r1.newAgent.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "mat-form-field", 75)(65, "mat-label");
    \u0275\u0275text(66, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "mat-select", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_12_Template_mat_select_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAgent.currency, $event) || (ctx_r1.newAgent.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(68, AgentManagementComponent_div_12_mat_option_68_Template, 2, 2, "mat-option", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, AgentManagementComponent_div_12_ng_container_69_Template, 13, 2, "ng-container", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 81)(71, "button", 82);
    \u0275\u0275listener("click", function AgentManagementComponent_div_12_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreatePopup());
    });
    \u0275\u0275elementStart(72, "mat-icon");
    \u0275\u0275text(73, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 83);
    \u0275\u0275listener("click", function AgentManagementComponent_div_12_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createAgent());
    });
    \u0275\u0275template(76, AgentManagementComponent_div_12_mat_spinner_76_Template, 1, 0, "mat-spinner", 84)(77, AgentManagementComponent_div_12_mat_icon_77_Template, 2, 0, "mat-icon", 35);
    \u0275\u0275text(78, " Create Agent ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.createError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.agentType);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.businessName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.licenseNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.address);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.phone);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAgent.currency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newAgent.agentType === "SendingAgent");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.creating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.creating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.creating);
  }
}
function AgentManagementComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function AgentManagementComponent_div_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editError);
  }
}
function AgentManagementComponent_div_14_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r23 = ctx.$implicit;
    \u0275\u0275property("value", c_r23.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r23.name);
  }
}
function AgentManagementComponent_div_14_mat_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r24 = ctx.$implicit;
    \u0275\u0275property("value", c_r24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r24);
  }
}
function AgentManagementComponent_div_14_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-form-field", 75)(2, "mat-label");
    \u0275\u0275text(3, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_14_ng_container_58_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.creditLimit, $event) || (ctx_r1.editAgent.creditLimit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 75)(6, "mat-label");
    \u0275\u0275text(7, "Funding Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_14_ng_container_58_Template_mat_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.fundingType, $event) || (ctx_r1.editAgent.fundingType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "mat-option", 89);
    \u0275\u0275text(10, "PreFunding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 90);
    \u0275\u0275text(12, "PostFunding");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.creditLimit);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.fundingType);
  }
}
function AgentManagementComponent_div_14_mat_spinner_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 91);
  }
}
function AgentManagementComponent_div_14_mat_icon_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 58)(2, "h3")(3, "mat-icon", 59);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Edit Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_14_div_9_Template, 2, 1, "div", 67);
    \u0275\u0275elementStart(10, "div", 68)(11, "h4", 73);
    \u0275\u0275text(12, "Company Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 74)(14, "mat-form-field", 75)(15, "mat-label");
    \u0275\u0275text(16, "Business Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_14_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.businessName, $event) || (ctx_r1.editAgent.businessName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 75)(19, "mat-label");
    \u0275\u0275text(20, "License Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_14_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.licenseNumber, $event) || (ctx_r1.editAgent.licenseNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-form-field", 69)(23, "mat-label");
    \u0275\u0275text(24, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_14_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.address, $event) || (ctx_r1.editAgent.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 68)(27, "h4", 73);
    \u0275\u0275text(28, "Authorized Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 74)(30, "div", 92)(31, "span", 63);
    \u0275\u0275text(32, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 92)(36, "span", 63);
    \u0275\u0275text(37, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 68)(41, "h4", 73);
    \u0275\u0275text(42, "Accounting Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 74)(44, "mat-form-field", 75)(45, "mat-label");
    \u0275\u0275text(46, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_14_Template_mat_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.country, $event) || (ctx_r1.editAgent.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(48, AgentManagementComponent_div_14_mat_option_48_Template, 2, 2, "mat-option", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "mat-form-field", 75)(50, "mat-label");
    \u0275\u0275text(51, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_14_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.city, $event) || (ctx_r1.editAgent.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "mat-form-field", 75)(54, "mat-label");
    \u0275\u0275text(55, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_14_Template_mat_select_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.currency, $event) || (ctx_r1.editAgent.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(57, AgentManagementComponent_div_14_mat_option_57_Template, 2, 2, "mat-option", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, AgentManagementComponent_div_14_ng_container_58_Template, 13, 2, "ng-container", 35);
    \u0275\u0275elementStart(59, "mat-form-field", 75)(60, "mat-label");
    \u0275\u0275text(61, "Agent Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "mat-select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_14_Template_mat_select_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAgent.agentType, $event) || (ctx_r1.editAgent.agentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(63, "mat-option", 71);
    \u0275\u0275text(64, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "mat-option", 72);
    \u0275\u0275text(66, "Payout Agent");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 81)(68, "button", 82);
    \u0275\u0275listener("click", function AgentManagementComponent_div_14_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditPopup());
    });
    \u0275\u0275elementStart(69, "mat-icon");
    \u0275\u0275text(70, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 83);
    \u0275\u0275listener("click", function AgentManagementComponent_div_14_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateAgent());
    });
    \u0275\u0275template(73, AgentManagementComponent_div_14_mat_spinner_73_Template, 1, 0, "mat-spinner", 84)(74, AgentManagementComponent_div_14_mat_icon_74_Template, 2, 0, "mat-icon", 35);
    \u0275\u0275text(75, " Save Changes ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.editError);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.businessName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.licenseNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.address);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.editAgentFullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.editAgentEmail);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.currency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currencies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editAgent.agentType === "SendingAgent");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAgent.agentType);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.updating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.updating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.updating);
  }
}
function AgentManagementComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function AgentManagementComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_16_table_14_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Location");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_16_table_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r28 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r28.locationName);
  }
}
function AgentManagementComponent_div_16_table_14_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Code");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_16_table_14_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r29.locationCode || "-");
  }
}
function AgentManagementComponent_div_16_table_14_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Country / City");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_16_table_14_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r30 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", loc_r30.country || "-", " / ", loc_r30.city || "-", "");
  }
}
function AgentManagementComponent_div_16_table_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Users");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_16_table_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loc_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r31.users.length);
  }
}
function AgentManagementComponent_div_16_table_14_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_16_table_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loc_r32 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", loc_r32.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r32.isActive ? "Active" : "Inactive");
  }
}
function AgentManagementComponent_div_16_table_14_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_16_table_14_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 103);
    \u0275\u0275listener("click", function AgentManagementComponent_div_16_table_14_td_18_Template_button_click_1_listener() {
      const loc_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openUserManagement(loc_r34));
    });
    \u0275\u0275elementStart(2, "mat-icon", 42);
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function AgentManagementComponent_div_16_table_14_td_18_Template_button_click_4_listener() {
      const loc_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openLocationForm(loc_r34));
    });
    \u0275\u0275elementStart(5, "mat-icon", 104);
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 105);
    \u0275\u0275listener("click", function AgentManagementComponent_div_16_table_14_td_18_Template_button_click_7_listener() {
      const loc_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleLocation(loc_r34.id));
    });
    \u0275\u0275elementStart(8, "mat-icon", 106);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 47);
    \u0275\u0275listener("click", function AgentManagementComponent_div_16_table_14_td_18_Template_button_click_10_listener() {
      const loc_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteLocation(loc_r34.id));
    });
    \u0275\u0275elementStart(11, "mat-icon", 48);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loc_r34 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", loc_r34.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", loc_r34.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r34.isActive ? "toggle_on" : "toggle_off");
  }
}
function AgentManagementComponent_div_16_table_14_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function AgentManagementComponent_div_16_table_14_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function AgentManagementComponent_div_16_table_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 97);
    \u0275\u0275elementContainerStart(1, 98);
    \u0275\u0275template(2, AgentManagementComponent_div_16_table_14_th_2_Template, 2, 0, "th", 22)(3, AgentManagementComponent_div_16_table_14_td_3_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 99);
    \u0275\u0275template(5, AgentManagementComponent_div_16_table_14_th_5_Template, 2, 0, "th", 22)(6, AgentManagementComponent_div_16_table_14_td_6_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 100);
    \u0275\u0275template(8, AgentManagementComponent_div_16_table_14_th_8_Template, 2, 0, "th", 22)(9, AgentManagementComponent_div_16_table_14_td_9_Template, 2, 2, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 101);
    \u0275\u0275template(11, AgentManagementComponent_div_16_table_14_th_11_Template, 2, 0, "th", 22)(12, AgentManagementComponent_div_16_table_14_td_12_Template, 3, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 26);
    \u0275\u0275template(14, AgentManagementComponent_div_16_table_14_th_14_Template, 2, 0, "th", 22)(15, AgentManagementComponent_div_16_table_14_td_15_Template, 3, 2, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 27);
    \u0275\u0275template(17, AgentManagementComponent_div_16_table_14_th_17_Template, 2, 0, "th", 22)(18, AgentManagementComponent_div_16_table_14_td_18_Template, 13, 3, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(19, AgentManagementComponent_div_16_table_14_tr_19_Template, 1, 0, "tr", 28)(20, AgentManagementComponent_div_16_table_14_tr_20_Template, 1, 0, "tr", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dataSource", ctx_r1.agentLocations);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(4, _c1));
  }
}
function AgentManagementComponent_div_16_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1, "No locations configured yet.");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 58)(2, "h3")(3, "mat-icon", 59);
    \u0275\u0275text(4, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_16_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 94)(10, "button", 1);
    \u0275\u0275listener("click", function AgentManagementComponent_div_16_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openLocationForm(null));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Location ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AgentManagementComponent_div_16_table_14_Template, 21, 5, "table", 95)(15, AgentManagementComponent_div_16_div_15_Template, 2, 0, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Locations \u2014 ", ctx_r1.locationAgent == null ? null : ctx_r1.locationAgent.businessName, "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.agentLocations.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.agentLocations.length);
  }
}
function AgentManagementComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function AgentManagementComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.locationFormError);
  }
}
function AgentManagementComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 58)(2, "h3")(3, "mat-icon", 59);
    \u0275\u0275text(4, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationForm());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_18_div_9_Template, 2, 1, "div", 67);
    \u0275\u0275elementStart(10, "div", 74)(11, "mat-form-field", 75)(12, "mat-label");
    \u0275\u0275text(13, "Location Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_18_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locName, $event) || (ctx_r1.locName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 75)(16, "mat-label");
    \u0275\u0275text(17, "Location Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_18_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locCode, $event) || (ctx_r1.locCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 75)(20, "mat-label");
    \u0275\u0275text(21, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_18_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locCountry, $event) || (ctx_r1.locCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 75)(24, "mat-label");
    \u0275\u0275text(25, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_18_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locCity, $event) || (ctx_r1.locCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 69)(28, "mat-label");
    \u0275\u0275text(29, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_18_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locAddress, $event) || (ctx_r1.locAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 75)(32, "mat-label");
    \u0275\u0275text(33, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_18_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locPhone, $event) || (ctx_r1.locPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "mat-form-field", 75)(36, "mat-label");
    \u0275\u0275text(37, "Contact Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_18_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locEmail, $event) || (ctx_r1.locEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "mat-form-field", 69)(40, "mat-label");
    \u0275\u0275text(41, "Operating Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_18_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.locHours, $event) || (ctx_r1.locHours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 81)(44, "button", 82);
    \u0275\u0275listener("click", function AgentManagementComponent_div_18_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocationForm());
    });
    \u0275\u0275elementStart(45, "mat-icon");
    \u0275\u0275text(46, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 1);
    \u0275\u0275listener("click", function AgentManagementComponent_div_18_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveLocation());
    });
    \u0275\u0275elementStart(49, "mat-icon");
    \u0275\u0275text(50, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingLocationId != null ? "Edit Location" : "Add New Location", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.locationFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locCountry);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locCity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locAddress);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locHours);
  }
}
function AgentManagementComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function AgentManagementComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_20_table_14_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Full Name");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_20_table_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r39 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r39.fullName);
  }
}
function AgentManagementComponent_div_20_table_14_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_20_table_14_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r40 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r40.email);
  }
}
function AgentManagementComponent_div_20_table_14_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Username");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_20_table_14_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r41 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r41.userName || "-");
  }
}
function AgentManagementComponent_div_20_table_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_20_table_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r42 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r42.phone || "-");
  }
}
function AgentManagementComponent_div_20_table_14_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Role");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_20_table_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r43 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r43.role || "-");
  }
}
function AgentManagementComponent_div_20_table_14_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_20_table_14_td_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 119);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_20_table_14_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275template(1, AgentManagementComponent_div_20_table_14_td_18_span_1_Template, 2, 0, "span", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r44 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r44.isDefault);
  }
}
function AgentManagementComponent_div_20_table_14_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_20_table_14_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 46);
    \u0275\u0275listener("click", function AgentManagementComponent_div_20_table_14_td_21_Template_button_click_1_listener() {
      const u_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openUserForm(u_r46));
    });
    \u0275\u0275elementStart(2, "mat-icon", 42);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 47);
    \u0275\u0275listener("click", function AgentManagementComponent_div_20_table_14_td_21_Template_button_click_4_listener() {
      const u_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteUser(u_r46.id));
    });
    \u0275\u0275elementStart(5, "mat-icon", 48);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function AgentManagementComponent_div_20_table_14_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function AgentManagementComponent_div_20_table_14_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function AgentManagementComponent_div_20_table_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 97);
    \u0275\u0275elementContainerStart(1, 112);
    \u0275\u0275template(2, AgentManagementComponent_div_20_table_14_th_2_Template, 2, 0, "th", 22)(3, AgentManagementComponent_div_20_table_14_td_3_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 113);
    \u0275\u0275template(5, AgentManagementComponent_div_20_table_14_th_5_Template, 2, 0, "th", 22)(6, AgentManagementComponent_div_20_table_14_td_6_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 114);
    \u0275\u0275template(8, AgentManagementComponent_div_20_table_14_th_8_Template, 2, 0, "th", 22)(9, AgentManagementComponent_div_20_table_14_td_9_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 115);
    \u0275\u0275template(11, AgentManagementComponent_div_20_table_14_th_11_Template, 2, 0, "th", 22)(12, AgentManagementComponent_div_20_table_14_td_12_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 116);
    \u0275\u0275template(14, AgentManagementComponent_div_20_table_14_th_14_Template, 2, 0, "th", 22)(15, AgentManagementComponent_div_20_table_14_td_15_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 117);
    \u0275\u0275template(17, AgentManagementComponent_div_20_table_14_th_17_Template, 2, 0, "th", 22)(18, AgentManagementComponent_div_20_table_14_td_18_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 27);
    \u0275\u0275template(20, AgentManagementComponent_div_20_table_14_th_20_Template, 2, 0, "th", 22)(21, AgentManagementComponent_div_20_table_14_td_21_Template, 7, 0, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(22, AgentManagementComponent_div_20_table_14_tr_22_Template, 1, 0, "tr", 28)(23, AgentManagementComponent_div_20_table_14_tr_23_Template, 1, 0, "tr", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dataSource", ctx_r1.userLocation.users);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(3, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(4, _c2));
  }
}
function AgentManagementComponent_div_20_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1, 'No users yet. Click "Add User" to add one.');
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 58)(2, "h3")(3, "mat-icon", 59);
    \u0275\u0275text(4, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 94)(10, "button", 1);
    \u0275\u0275listener("click", function AgentManagementComponent_div_20_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUserForm(null));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add User");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AgentManagementComponent_div_20_table_14_Template, 24, 5, "table", 95)(15, AgentManagementComponent_div_20_div_15_Template, 2, 0, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Users \u2014 ", ctx_r1.userLocation.locationName, "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.userLocation.users.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.userLocation.users.length);
  }
}
function AgentManagementComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275listener("click", function AgentManagementComponent_div_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r47);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_22_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.userFormError);
  }
}
function AgentManagementComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 58)(2, "h3")(3, "mat-icon", 59);
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_22_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserForm());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_22_div_9_Template, 2, 1, "div", 67);
    \u0275\u0275elementStart(10, "div", 74)(11, "mat-form-field", 75)(12, "mat-label");
    \u0275\u0275text(13, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_22_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userFullName, $event) || (ctx_r1.userFullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 75)(16, "mat-label");
    \u0275\u0275text(17, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_22_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userEmail, $event) || (ctx_r1.userEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 75)(20, "mat-label");
    \u0275\u0275text(21, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_22_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userUserName, $event) || (ctx_r1.userUserName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 75)(24, "mat-label");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_22_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userPassword, $event) || (ctx_r1.userPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 75)(28, "mat-label");
    \u0275\u0275text(29, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_22_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userPhone, $event) || (ctx_r1.userPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 75)(32, "mat-label");
    \u0275\u0275text(33, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-select", 70);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_22_Template_mat_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userRole, $event) || (ctx_r1.userRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(35, "mat-option", 123);
    \u0275\u0275text(36, "Operator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-option", 124);
    \u0275\u0275text(38, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-option", 125);
    \u0275\u0275text(40, "Cashier");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "mat-checkbox", 126);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_22_Template_mat_checkbox_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userIsDefault, $event) || (ctx_r1.userIsDefault = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(42, "Default User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 81)(44, "button", 82);
    \u0275\u0275listener("click", function AgentManagementComponent_div_22_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserForm());
    });
    \u0275\u0275elementStart(45, "mat-icon");
    \u0275\u0275text(46, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 1);
    \u0275\u0275listener("click", function AgentManagementComponent_div_22_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275elementStart(49, "mat-icon");
    \u0275\u0275text(50, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingUserId != null ? "Edit User" : "Add User", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.userFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userFullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userUserName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingUserId != null ? "New Password (leave blank to keep)" : "Password *");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userRole);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userIsDefault);
  }
}
function AgentManagementComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function AgentManagementComponent_div_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_24_table_14_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Bank Name");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_24_table_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r51 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r51.bankName);
  }
}
function AgentManagementComponent_div_24_table_14_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Payment Mode");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_24_table_14_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r52 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r52.paymentMethodName || "-");
  }
}
function AgentManagementComponent_div_24_table_14_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Code");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_24_table_14_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r53 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r53.bankCode || "-");
  }
}
function AgentManagementComponent_div_24_table_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "SWIFT");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_24_table_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r54 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r54.swiftCode || "-");
  }
}
function AgentManagementComponent_div_24_table_14_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Branches");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_24_table_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r55 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r55.branches.length);
  }
}
function AgentManagementComponent_div_24_table_14_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_24_table_14_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r56 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", b_r56.isActive ? "chip-success" : "chip-default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r56.isActive ? "Active" : "Inactive");
  }
}
function AgentManagementComponent_div_24_table_14_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_24_table_14_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 132);
    \u0275\u0275listener("click", function AgentManagementComponent_div_24_table_14_td_21_Template_button_click_1_listener() {
      const b_r58 = \u0275\u0275restoreView(_r57).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBankBranchManagement(b_r58));
    });
    \u0275\u0275elementStart(2, "mat-icon", 42);
    \u0275\u0275text(3, "account_tree");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function AgentManagementComponent_div_24_table_14_td_21_Template_button_click_4_listener() {
      const b_r58 = \u0275\u0275restoreView(_r57).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBankForm(b_r58));
    });
    \u0275\u0275elementStart(5, "mat-icon", 104);
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 105);
    \u0275\u0275listener("click", function AgentManagementComponent_div_24_table_14_td_21_Template_button_click_7_listener() {
      const b_r58 = \u0275\u0275restoreView(_r57).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleBank(b_r58.id));
    });
    \u0275\u0275elementStart(8, "mat-icon", 106);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 47);
    \u0275\u0275listener("click", function AgentManagementComponent_div_24_table_14_td_21_Template_button_click_10_listener() {
      const b_r58 = \u0275\u0275restoreView(_r57).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteBank(b_r58.id));
    });
    \u0275\u0275elementStart(11, "mat-icon", 48);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r58 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", b_r58.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", b_r58.isActive ? "text-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r58.isActive ? "toggle_on" : "toggle_off");
  }
}
function AgentManagementComponent_div_24_table_14_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function AgentManagementComponent_div_24_table_14_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function AgentManagementComponent_div_24_table_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 97);
    \u0275\u0275elementContainerStart(1, 127);
    \u0275\u0275template(2, AgentManagementComponent_div_24_table_14_th_2_Template, 2, 0, "th", 22)(3, AgentManagementComponent_div_24_table_14_td_3_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 128);
    \u0275\u0275template(5, AgentManagementComponent_div_24_table_14_th_5_Template, 2, 0, "th", 22)(6, AgentManagementComponent_div_24_table_14_td_6_Template, 3, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 129);
    \u0275\u0275template(8, AgentManagementComponent_div_24_table_14_th_8_Template, 2, 0, "th", 22)(9, AgentManagementComponent_div_24_table_14_td_9_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 130);
    \u0275\u0275template(11, AgentManagementComponent_div_24_table_14_th_11_Template, 2, 0, "th", 22)(12, AgentManagementComponent_div_24_table_14_td_12_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 131);
    \u0275\u0275template(14, AgentManagementComponent_div_24_table_14_th_14_Template, 2, 0, "th", 22)(15, AgentManagementComponent_div_24_table_14_td_15_Template, 3, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 26);
    \u0275\u0275template(17, AgentManagementComponent_div_24_table_14_th_17_Template, 2, 0, "th", 22)(18, AgentManagementComponent_div_24_table_14_td_18_Template, 3, 2, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 27);
    \u0275\u0275template(20, AgentManagementComponent_div_24_table_14_th_20_Template, 2, 0, "th", 22)(21, AgentManagementComponent_div_24_table_14_td_21_Template, 13, 3, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(22, AgentManagementComponent_div_24_table_14_tr_22_Template, 1, 0, "tr", 28)(23, AgentManagementComponent_div_24_table_14_tr_23_Template, 1, 0, "tr", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dataSource", ctx_r1.agentBanks);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(3, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(4, _c3));
  }
}
function AgentManagementComponent_div_24_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1, "No banks configured yet.");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 58)(2, "h3")(3, "mat-icon", 59);
    \u0275\u0275text(4, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_24_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 94)(10, "button", 1);
    \u0275\u0275listener("click", function AgentManagementComponent_div_24_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBankForm(null));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Bank");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AgentManagementComponent_div_24_table_14_Template, 24, 5, "table", 95)(15, AgentManagementComponent_div_24_div_15_Template, 2, 0, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Banks \u2014 ", ctx_r1.bankAgent == null ? null : ctx_r1.bankAgent.businessName, "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.agentBanks.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.agentBanks.length);
  }
}
function AgentManagementComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function AgentManagementComponent_div_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_26_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.bankFormError);
  }
}
function AgentManagementComponent_div_26_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r61 = ctx.$implicit;
    \u0275\u0275property("value", pm_r61.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r61.name);
  }
}
function AgentManagementComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 58)(2, "h3")(3, "mat-icon", 59);
    \u0275\u0275text(4, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_26_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankForm());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_26_div_9_Template, 2, 1, "div", 67);
    \u0275\u0275elementStart(10, "div", 74)(11, "mat-form-field", 75)(12, "mat-label");
    \u0275\u0275text(13, "Bank Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_26_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankName, $event) || (ctx_r1.bankName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 75)(16, "mat-label");
    \u0275\u0275text(17, "Payment Mode *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_26_Template_mat_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankPaymentMethodId, $event) || (ctx_r1.bankPaymentMethodId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(19, AgentManagementComponent_div_26_mat_option_19_Template, 2, 2, "mat-option", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 75)(21, "mat-label");
    \u0275\u0275text(22, "Bank Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_26_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankCode, $event) || (ctx_r1.bankCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-form-field", 75)(25, "mat-label");
    \u0275\u0275text(26, "SWIFT Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_26_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankSwift, $event) || (ctx_r1.bankSwift = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "mat-form-field", 75)(29, "mat-label");
    \u0275\u0275text(30, "Routing Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_26_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankRouting, $event) || (ctx_r1.bankRouting = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "mat-form-field", 75)(33, "mat-label");
    \u0275\u0275text(34, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_26_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankCountry, $event) || (ctx_r1.bankCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "mat-form-field", 75)(37, "mat-label");
    \u0275\u0275text(38, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_26_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankCity, $event) || (ctx_r1.bankCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "mat-form-field", 69)(41, "mat-label");
    \u0275\u0275text(42, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_26_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankAddress, $event) || (ctx_r1.bankAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "mat-form-field", 75)(45, "mat-label");
    \u0275\u0275text(46, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_26_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankPhone, $event) || (ctx_r1.bankPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "mat-form-field", 75)(49, "mat-label");
    \u0275\u0275text(50, "Contact Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_26_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankEmail, $event) || (ctx_r1.bankEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "mat-form-field", 69)(53, "mat-label");
    \u0275\u0275text(54, "Additional Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "textarea", 133);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_26_Template_textarea_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankAdditionalInfo, $event) || (ctx_r1.bankAdditionalInfo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 81)(57, "button", 82);
    \u0275\u0275listener("click", function AgentManagementComponent_div_26_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankForm());
    });
    \u0275\u0275elementStart(58, "mat-icon");
    \u0275\u0275text(59, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 1);
    \u0275\u0275listener("click", function AgentManagementComponent_div_26_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveBank());
    });
    \u0275\u0275elementStart(62, "mat-icon");
    \u0275\u0275text(63, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingBankId != null ? "Edit Bank" : "Add New Bank", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.bankFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankPaymentMethodId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankSwift);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankRouting);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankCountry);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankCity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankAddress);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankAdditionalInfo);
  }
}
function AgentManagementComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function AgentManagementComponent_div_27_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_28_table_14_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Branch Name");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_28_table_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r64 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(br_r64.branchName);
  }
}
function AgentManagementComponent_div_28_table_14_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Code");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_28_table_14_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r65 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(br_r65.branchCode || "-");
  }
}
function AgentManagementComponent_div_28_table_14_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "SWIFT");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_28_table_14_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r66 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(br_r66.swiftCode || "-");
  }
}
function AgentManagementComponent_div_28_table_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Address");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_28_table_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r67 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(br_r67.address || "-");
  }
}
function AgentManagementComponent_div_28_table_14_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_28_table_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r68 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(br_r68.contactPhone || "-");
  }
}
function AgentManagementComponent_div_28_table_14_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_28_table_14_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 46);
    \u0275\u0275listener("click", function AgentManagementComponent_div_28_table_14_td_18_Template_button_click_1_listener() {
      const br_r70 = \u0275\u0275restoreView(_r69).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBankBranchForm(br_r70));
    });
    \u0275\u0275elementStart(2, "mat-icon", 42);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 47);
    \u0275\u0275listener("click", function AgentManagementComponent_div_28_table_14_td_18_Template_button_click_4_listener() {
      const br_r70 = \u0275\u0275restoreView(_r69).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteBankBranch(br_r70.id));
    });
    \u0275\u0275elementStart(5, "mat-icon", 48);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function AgentManagementComponent_div_28_table_14_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function AgentManagementComponent_div_28_table_14_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function AgentManagementComponent_div_28_table_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 97);
    \u0275\u0275elementContainerStart(1, 135);
    \u0275\u0275template(2, AgentManagementComponent_div_28_table_14_th_2_Template, 2, 0, "th", 22)(3, AgentManagementComponent_div_28_table_14_td_3_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 136);
    \u0275\u0275template(5, AgentManagementComponent_div_28_table_14_th_5_Template, 2, 0, "th", 22)(6, AgentManagementComponent_div_28_table_14_td_6_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 130);
    \u0275\u0275template(8, AgentManagementComponent_div_28_table_14_th_8_Template, 2, 0, "th", 22)(9, AgentManagementComponent_div_28_table_14_td_9_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 137);
    \u0275\u0275template(11, AgentManagementComponent_div_28_table_14_th_11_Template, 2, 0, "th", 22)(12, AgentManagementComponent_div_28_table_14_td_12_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 115);
    \u0275\u0275template(14, AgentManagementComponent_div_28_table_14_th_14_Template, 2, 0, "th", 22)(15, AgentManagementComponent_div_28_table_14_td_15_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 27);
    \u0275\u0275template(17, AgentManagementComponent_div_28_table_14_th_17_Template, 2, 0, "th", 22)(18, AgentManagementComponent_div_28_table_14_td_18_Template, 7, 0, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(19, AgentManagementComponent_div_28_table_14_tr_19_Template, 1, 0, "tr", 28)(20, AgentManagementComponent_div_28_table_14_tr_20_Template, 1, 0, "tr", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dataSource", ctx_r1.bankBranchBank.branches);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(3, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(4, _c4));
  }
}
function AgentManagementComponent_div_28_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1, "No branches yet.");
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 58)(2, "h3")(3, "mat-icon", 59);
    \u0275\u0275text(4, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_28_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r63);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 94)(10, "button", 1);
    \u0275\u0275listener("click", function AgentManagementComponent_div_28_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r63);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBankBranchForm(null));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Branch");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AgentManagementComponent_div_28_table_14_Template, 21, 5, "table", 95)(15, AgentManagementComponent_div_28_div_15_Template, 2, 0, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Branches \u2014 ", ctx_r1.bankBranchBank.bankName, "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.bankBranchBank.branches.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.bankBranchBank.branches.length);
  }
}
function AgentManagementComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275listener("click", function AgentManagementComponent_div_29_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r71);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AgentManagementComponent_div_30_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.bankBranchFormError);
  }
}
function AgentManagementComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 58)(2, "h3")(3, "mat-icon", 59);
    \u0275\u0275text(4, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AgentManagementComponent_div_30_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchForm());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AgentManagementComponent_div_30_div_9_Template, 2, 1, "div", 67);
    \u0275\u0275elementStart(10, "div", 74)(11, "mat-form-field", 75)(12, "mat-label");
    \u0275\u0275text(13, "Branch Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_30_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbName, $event) || (ctx_r1.bbName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 75)(16, "mat-label");
    \u0275\u0275text(17, "Branch Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_30_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbCode, $event) || (ctx_r1.bbCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 75)(20, "mat-label");
    \u0275\u0275text(21, "SWIFT Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_30_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbSwift, $event) || (ctx_r1.bbSwift = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 75)(24, "mat-label");
    \u0275\u0275text(25, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_30_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbPhone, $event) || (ctx_r1.bbPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 69)(28, "mat-label");
    \u0275\u0275text(29, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AgentManagementComponent_div_30_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bbAddress, $event) || (ctx_r1.bbAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 81)(32, "button", 82);
    \u0275\u0275listener("click", function AgentManagementComponent_div_30_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBankBranchForm());
    });
    \u0275\u0275elementStart(33, "mat-icon");
    \u0275\u0275text(34, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 1);
    \u0275\u0275listener("click", function AgentManagementComponent_div_30_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r72);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveBankBranch());
    });
    \u0275\u0275elementStart(37, "mat-icon");
    \u0275\u0275text(38, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingBankBranchId != null ? "Edit Branch" : "Add Branch", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.bankBranchFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bbName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bbCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bbSwift);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bbPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bbAddress);
  }
}
function emptyCreateForm() {
  return { fullName: "", email: "", phone: "", businessName: "", agentType: "SendingAgent", country: "", city: "", currency: "USD", creditLimit: 0, licenseNumber: "", address: "", fundingType: "PreFunding" };
}
function emptyEditForm() {
  return { businessName: "", agentType: "SendingAgent", country: "", city: "", creditLimit: 0, licenseNumber: "", address: "", currency: "USD", fundingType: "PreFunding" };
}
var AgentManagementComponent = class _AgentManagementComponent {
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.agents = [];
    this.filteredAgents = [];
    this.displayedColumns = ["businessName", "country", "type", "status", "actions"];
    this.searchString = "";
    this.loading = true;
    this.countries = [];
    this.currencies = [];
    this.paymentMethods = [];
    this.showDetail = false;
    this.detailAgent = null;
    this.showCreatePopup = false;
    this.creating = false;
    this.createError = "";
    this.newAgent = emptyCreateForm();
    this.showEditPopup = false;
    this.updating = false;
    this.editError = "";
    this.editAgentId = 0;
    this.editAgentFullName = "";
    this.editAgentEmail = "";
    this.editAgent = emptyEditForm();
    this.showLocationPopup = false;
    this.showLocationForm = false;
    this.locationAgent = null;
    this.agentLocations = [];
    this.locationFormError = "";
    this.editingLocationId = null;
    this.locName = "";
    this.locCode = null;
    this.locCountry = null;
    this.locCity = null;
    this.locAddress = null;
    this.locPhone = null;
    this.locEmail = null;
    this.locHours = null;
    this.showUserPopup = false;
    this.showUserForm = false;
    this.userLocation = null;
    this.userFormError = "";
    this.editingUserId = null;
    this.userFullName = "";
    this.userEmail = "";
    this.userUserName = null;
    this.userPassword = null;
    this.userPhone = null;
    this.userRole = "Operator";
    this.userIsDefault = false;
    this.showBankPopup = false;
    this.showBankForm = false;
    this.bankAgent = null;
    this.agentBanks = [];
    this.bankFormError = "";
    this.editingBankId = null;
    this.bankName = "";
    this.bankPaymentMethodId = null;
    this.bankCode = null;
    this.bankSwift = null;
    this.bankRouting = null;
    this.bankCountry = null;
    this.bankCity = null;
    this.bankAddress = null;
    this.bankPhone = null;
    this.bankEmail = null;
    this.bankAdditionalInfo = null;
    this.showBankBranchPopup = false;
    this.showBankBranchForm = false;
    this.bankBranchBank = null;
    this.bankBranchFormError = "";
    this.editingBankBranchId = null;
    this.bbName = "";
    this.bbCode = null;
    this.bbSwift = null;
    this.bbAddress = null;
    this.bbPhone = null;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadReferenceData();
    this.loadAgents();
  }
  // ---------------------------------------------------------------------------
  // Reference data
  // ---------------------------------------------------------------------------
  loadReferenceData() {
    this.api.getCountries().subscribe((r) => {
      if (r?.success && r.data)
        this.countries = r.data;
    });
    this.api.getCurrencies().subscribe((r) => {
      if (r?.success && r.data)
        this.currencies = r.data;
    });
  }
  getCurrencyForCountry(country) {
    const c = this.countries.find((x) => x.name.toLowerCase() === country?.toLowerCase());
    return c?.currency ?? "USD";
  }
  // ---------------------------------------------------------------------------
  // Agents CRUD
  // ---------------------------------------------------------------------------
  loadAgents() {
    this.loading = true;
    this.api.getAgents().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.agents = res.data;
          this.applyFilter();
        } else {
          this.agents = [];
          this.filteredAgents = [];
          this.notify.error(res?.message || "Failed to load agents.");
        }
        this.loading = false;
      },
      error: () => {
        this.agents = [];
        this.filteredAgents = [];
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const s = this.searchString.toLowerCase();
    this.filteredAgents = !s ? [...this.agents] : this.agents.filter((a) => a.businessName.toLowerCase().includes(s) || a.fullName.toLowerCase().includes(s));
  }
  // ---------------------------------------------------------------------------
  // Detail
  // ---------------------------------------------------------------------------
  viewDetail(agent) {
    this.detailAgent = agent;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
  }
  // ---------------------------------------------------------------------------
  // Status actions
  // ---------------------------------------------------------------------------
  approveAgent(agent) {
    this.api.approveAgent(agent.id).subscribe((r) => {
      if (r?.success) {
        agent.status = "Approved";
        agent.isApproved = true;
        this.notify.success(`Agent '${agent.businessName}' approved.`);
      } else {
        this.notify.error(r?.message || "Failed to approve agent.");
      }
    });
  }
  rejectAgent(agent) {
    this.api.rejectAgent(agent.id).subscribe((r) => {
      if (r?.success) {
        agent.status = "Rejected";
        agent.isApproved = false;
        agent.isActive = false;
        this.notify.warn(`Agent '${agent.businessName}' rejected.`);
      } else {
        this.notify.error(r?.message || "Failed to reject agent.");
      }
    });
  }
  blockAgent(agent) {
    this.api.blockAgent(agent.id).subscribe((r) => {
      if (r?.success) {
        agent.status = "Blocked";
        agent.isActive = false;
        this.notify.warn(`Agent '${agent.businessName}' blocked.`);
      } else {
        this.notify.error(r?.message || "Failed to block agent.");
      }
    });
  }
  unblockAgent(agent) {
    this.api.unblockAgent(agent.id).subscribe((r) => {
      if (r?.success) {
        agent.status = "Approved";
        agent.isActive = true;
        this.notify.success(`Agent '${agent.businessName}' unblocked.`);
      } else {
        this.notify.error(r?.message || "Failed to unblock agent.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Create Agent
  // ---------------------------------------------------------------------------
  openCreatePopup() {
    this.newAgent = emptyCreateForm();
    this.createError = "";
    this.showCreatePopup = true;
  }
  closeCreatePopup() {
    this.showCreatePopup = false;
    this.newAgent = emptyCreateForm();
  }
  createAgent() {
    this.createError = "";
    const a = this.newAgent;
    const isSending = a.agentType === "SendingAgent";
    if (!a.fullName || !a.email || !a.phone || !a.businessName || !a.country || !a.city) {
      this.createError = "Please fill in all required fields.";
      return;
    }
    if (isSending && a.creditLimit <= 0) {
      this.createError = "Credit limit must be greater than zero.";
      return;
    }
    this.creating = true;
    const dto = {
      fullName: a.fullName,
      email: a.email,
      phoneNumber: a.phone,
      businessName: a.businessName,
      agentType: a.agentType,
      country: a.country,
      city: a.city,
      creditLimit: isSending ? a.creditLimit : 0,
      licenseNumber: a.licenseNumber,
      address: a.address,
      currency: a.currency,
      fundingType: isSending ? a.fundingType : null
    };
    this.api.createAgent(dto).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success("Agent created successfully!");
          this.newAgent = emptyCreateForm();
          this.showCreatePopup = false;
          this.loadAgents();
        } else {
          this.createError = res?.message || "Failed.";
        }
        this.creating = false;
      },
      error: () => {
        this.createError = "Server error.";
        this.creating = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Edit Agent
  // ---------------------------------------------------------------------------
  startEdit(agent) {
    this.editAgentId = agent.id;
    this.editAgentFullName = agent.fullName;
    this.editAgentEmail = agent.email;
    this.editAgent = {
      businessName: agent.businessName,
      agentType: agent.agentType,
      country: agent.country,
      city: agent.city,
      creditLimit: agent.creditLimit,
      licenseNumber: agent.licenseNumber ?? "",
      address: agent.address ?? "",
      currency: agent.currency ?? this.getCurrencyForCountry(agent.country),
      fundingType: agent.fundingType ?? "PreFunding"
    };
    this.editError = "";
    this.showEditPopup = true;
  }
  closeEditPopup() {
    this.showEditPopup = false;
  }
  updateAgent() {
    this.editError = "";
    const e = this.editAgent;
    if (!e.businessName || !e.country) {
      this.editError = "Please fill in all required fields.";
      return;
    }
    if (e.agentType === "SendingAgent" && e.creditLimit <= 0) {
      this.editError = "Credit limit must be greater than zero.";
      return;
    }
    this.updating = true;
    const dto = {
      businessName: e.businessName,
      country: e.country,
      city: e.city,
      agentType: e.agentType,
      creditLimit: e.creditLimit,
      licenseNumber: e.licenseNumber,
      address: e.address,
      currency: e.currency,
      fundingType: e.fundingType
    };
    this.api.updateAgent(this.editAgentId, dto).subscribe({
      next: (res) => {
        if (res?.success) {
          this.notify.success(`Agent '${e.businessName}' updated.`);
          this.showEditPopup = false;
          this.loadAgents();
        } else {
          this.editError = res?.message || "Failed.";
        }
        this.updating = false;
      },
      error: (err) => {
        this.editError = `Error: ${err.message || "Server error"}`;
        this.updating = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Delete Agent
  // ---------------------------------------------------------------------------
  deleteAgent(agent) {
    this.api.deleteAgent(agent.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success(`Agent '${agent.businessName}' deleted.`);
        this.loadAgents();
      } else {
        this.notify.error(r?.message || "Failed to delete agent.");
      }
    });
  }
  // ===========================================================================
  // Location Management
  // ===========================================================================
  openLocationManagement(agent) {
    this.locationAgent = agent;
    this.loadPaymentMethods();
    this.loadAgentLocations(agent.id);
    this.showLocationPopup = true;
  }
  closeLocationPopup() {
    this.showLocationPopup = false;
  }
  loadPaymentMethods() {
    if (this.paymentMethods.length)
      return;
    this.api.getPaymentMethods().subscribe((r) => {
      if (r?.success && r.data)
        this.paymentMethods = r.data;
    });
  }
  loadAgentLocations(agentId) {
    this.api.getAgentLocations(agentId).subscribe((r) => {
      if (r?.success && r.data)
        this.agentLocations = r.data;
      else
        this.agentLocations = [];
    });
  }
  openLocationForm(existing) {
    this.locationFormError = "";
    if (existing) {
      this.editingLocationId = existing.id;
      this.locName = existing.locationName;
      this.locCode = existing.locationCode ?? null;
      this.locCountry = existing.country ?? null;
      this.locCity = existing.city ?? null;
      this.locAddress = existing.address ?? null;
      this.locPhone = existing.contactPhone ?? null;
      this.locEmail = existing.contactEmail ?? null;
      this.locHours = existing.operatingHours ?? null;
    } else {
      this.editingLocationId = null;
      this.locName = "";
      this.locCode = null;
      this.locCountry = this.locationAgent?.country ?? null;
      this.locCity = null;
      this.locAddress = null;
      this.locPhone = null;
      this.locEmail = null;
      this.locHours = null;
    }
    this.showLocationForm = true;
  }
  closeLocationForm() {
    this.showLocationForm = false;
  }
  saveLocation() {
    this.locationFormError = "";
    if (!this.locName?.trim()) {
      this.locationFormError = "Location name is required.";
      return;
    }
    const pmId = this.paymentMethods[0]?.id ?? 1;
    const payload = {
      agentId: this.locationAgent?.id,
      paymentMethodId: pmId,
      locationName: this.locName,
      locationCode: this.locCode,
      country: this.locCountry,
      city: this.locCity,
      address: this.locAddress,
      contactPhone: this.locPhone,
      contactEmail: this.locEmail,
      operatingHours: this.locHours
    };
    if (this.editingLocationId != null) {
      this.api.updateAgentLocation(this.editingLocationId, payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Location updated.");
          this.showLocationForm = false;
          if (this.locationAgent)
            this.loadAgentLocations(this.locationAgent.id);
        } else {
          this.locationFormError = r?.message || "Failed.";
        }
      });
    } else {
      this.api.createAgentLocation(payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Location added.");
          this.showLocationForm = false;
          if (this.locationAgent)
            this.loadAgentLocations(this.locationAgent.id);
        } else {
          this.locationFormError = r?.message || "Failed.";
        }
      });
    }
  }
  toggleLocation(id) {
    this.api.toggleAgentLocation(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success(r.message || "Location toggled.");
        if (this.locationAgent)
          this.loadAgentLocations(this.locationAgent.id);
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  deleteLocation(id) {
    this.api.deleteAgentLocation(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Location deleted.");
        if (this.locationAgent)
          this.loadAgentLocations(this.locationAgent.id);
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  // ===========================================================================
  // User Management (Location Users)
  // ===========================================================================
  openUserManagement(loc) {
    this.userLocation = loc;
    this.showUserPopup = true;
  }
  closeUserPopup() {
    this.showUserPopup = false;
  }
  openUserForm(existing) {
    this.userFormError = "";
    if (existing) {
      this.editingUserId = existing.id;
      this.userFullName = existing.fullName;
      this.userEmail = existing.email;
      this.userUserName = existing.userName ?? null;
      this.userPassword = null;
      this.userPhone = existing.phone ?? null;
      this.userRole = existing.role ?? "Operator";
      this.userIsDefault = existing.isDefault;
    } else {
      this.editingUserId = null;
      this.userFullName = "";
      this.userEmail = "";
      this.userUserName = null;
      this.userPassword = null;
      this.userPhone = null;
      this.userRole = "Operator";
      this.userIsDefault = false;
    }
    this.showUserForm = true;
  }
  closeUserForm() {
    this.showUserForm = false;
  }
  saveUser() {
    this.userFormError = "";
    if (!this.userFullName?.trim()) {
      this.userFormError = "Full name is required.";
      return;
    }
    if (!this.userEmail?.trim()) {
      this.userFormError = "Email is required.";
      return;
    }
    if (this.editingUserId == null && !this.userPassword?.trim()) {
      this.userFormError = "Password is required.";
      return;
    }
    if (this.editingUserId != null) {
      const dto = {
        fullName: this.userFullName,
        email: this.userEmail,
        userName: this.userUserName ?? void 0,
        password: this.userPassword ?? void 0,
        phone: this.userPhone ?? void 0,
        role: this.userRole,
        isDefault: this.userIsDefault
      };
      this.api.updateLocationUser(this.editingUserId, dto).subscribe((r) => {
        if (r?.success) {
          this.notify.success("User updated.");
          this.showUserForm = false;
          this.refreshUserLocation();
        } else {
          this.userFormError = r?.message || "Failed.";
        }
      });
    } else {
      const dto = {
        agentLocationId: this.userLocation?.id ?? 0,
        fullName: this.userFullName,
        email: this.userEmail,
        userName: this.userUserName ?? void 0,
        password: this.userPassword ?? void 0,
        phone: this.userPhone ?? void 0,
        role: this.userRole,
        isDefault: this.userIsDefault
      };
      this.api.createLocationUser(dto).subscribe((r) => {
        if (r?.success) {
          this.notify.success("User added.");
          this.showUserForm = false;
          this.refreshUserLocation();
        } else {
          this.userFormError = r?.message || "Failed.";
        }
      });
    }
  }
  deleteUser(id) {
    this.api.deleteLocationUser(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("User deleted.");
        this.refreshUserLocation();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  refreshUserLocation() {
    if (!this.locationAgent)
      return;
    this.api.getAgentLocations(this.locationAgent.id).subscribe((r) => {
      if (r?.success && r.data) {
        this.agentLocations = r.data;
        if (this.userLocation) {
          this.userLocation = this.agentLocations.find((l) => l.id === this.userLocation.id) ?? null;
        }
      }
    });
  }
  // ===========================================================================
  // Bank Management
  // ===========================================================================
  openBankManagement(agent) {
    this.bankAgent = agent;
    this.api.getAgentBanks(agent.id).subscribe((r) => {
      if (r?.success && r.data)
        this.agentBanks = r.data;
      else
        this.agentBanks = [];
      this.showBankPopup = true;
    });
  }
  closeBankPopup() {
    this.showBankPopup = false;
  }
  openBankForm(existing) {
    this.bankFormError = "";
    if (existing) {
      this.editingBankId = existing.id;
      this.bankName = existing.bankName;
      this.bankPaymentMethodId = existing.paymentMethodId ?? null;
      this.bankCode = existing.bankCode ?? null;
      this.bankSwift = existing.swiftCode ?? null;
      this.bankRouting = existing.routingNumber ?? null;
      this.bankCountry = existing.country ?? null;
      this.bankCity = existing.city ?? null;
      this.bankAddress = existing.address ?? null;
      this.bankPhone = existing.contactPhone ?? null;
      this.bankEmail = existing.contactEmail ?? null;
      this.bankAdditionalInfo = existing.additionalInfo ?? null;
    } else {
      this.editingBankId = null;
      this.bankName = "";
      this.bankPaymentMethodId = null;
      this.bankCode = null;
      this.bankSwift = null;
      this.bankRouting = null;
      this.bankCountry = this.bankAgent?.country ?? null;
      this.bankCity = null;
      this.bankAddress = null;
      this.bankPhone = null;
      this.bankEmail = null;
      this.bankAdditionalInfo = null;
    }
    this.showBankForm = true;
  }
  closeBankForm() {
    this.showBankForm = false;
  }
  saveBank() {
    this.bankFormError = "";
    if (!this.bankName?.trim()) {
      this.bankFormError = "Bank name is required.";
      return;
    }
    if (!this.bankPaymentMethodId) {
      this.bankFormError = "Payment mode is required.";
      return;
    }
    const payload = {
      bankName: this.bankName,
      paymentMethodId: this.bankPaymentMethodId,
      bankCode: this.bankCode,
      swiftCode: this.bankSwift,
      routingNumber: this.bankRouting,
      country: this.bankCountry,
      city: this.bankCity,
      address: this.bankAddress,
      contactPhone: this.bankPhone,
      contactEmail: this.bankEmail,
      additionalInfo: this.bankAdditionalInfo
    };
    if (this.editingBankId != null) {
      this.api.updateAgentBank(this.editingBankId, payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Bank updated.");
          this.showBankForm = false;
          this.refreshBanks();
        } else {
          this.bankFormError = r?.message || "Failed.";
        }
      });
    } else {
      payload.agentId = this.bankAgent?.id;
      this.api.createAgentBank(payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Bank added.");
          this.showBankForm = false;
          this.refreshBanks();
        } else {
          this.bankFormError = r?.message || "Failed.";
        }
      });
    }
  }
  toggleBank(id) {
    this.api.toggleAgentBank(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success(r.message || "Bank toggled.");
        this.refreshBanks();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  deleteBank(id) {
    this.api.deleteAgentBank(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Bank deleted.");
        this.refreshBanks();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  refreshBanks() {
    if (!this.bankAgent)
      return;
    this.api.getAgentBanks(this.bankAgent.id).subscribe((r) => {
      if (r?.success && r.data)
        this.agentBanks = r.data;
    });
  }
  // ===========================================================================
  // Bank Branch Management
  // ===========================================================================
  openBankBranchManagement(bank) {
    this.bankBranchBank = bank;
    this.showBankBranchPopup = true;
  }
  closeBankBranchPopup() {
    this.showBankBranchPopup = false;
  }
  openBankBranchForm(existing) {
    this.bankBranchFormError = "";
    if (existing) {
      this.editingBankBranchId = existing.id;
      this.bbName = existing.branchName;
      this.bbCode = existing.branchCode ?? null;
      this.bbSwift = existing.swiftCode ?? null;
      this.bbAddress = existing.address ?? null;
      this.bbPhone = existing.contactPhone ?? null;
    } else {
      this.editingBankBranchId = null;
      this.bbName = "";
      this.bbCode = null;
      this.bbSwift = null;
      this.bbAddress = null;
      this.bbPhone = null;
    }
    this.showBankBranchForm = true;
  }
  closeBankBranchForm() {
    this.showBankBranchForm = false;
  }
  saveBankBranch() {
    this.bankBranchFormError = "";
    if (!this.bbName?.trim()) {
      this.bankBranchFormError = "Branch name is required.";
      return;
    }
    const payload = {
      branchName: this.bbName,
      branchCode: this.bbCode,
      swiftCode: this.bbSwift,
      address: this.bbAddress,
      contactPhone: this.bbPhone
    };
    if (this.editingBankBranchId != null) {
      this.api.updateBankBranch(this.editingBankBranchId, payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Branch updated.");
          this.showBankBranchForm = false;
          this.refreshBankBranches();
        } else {
          this.bankBranchFormError = r?.message || "Failed.";
        }
      });
    } else {
      payload.agentBankId = this.bankBranchBank?.id;
      this.api.createBankBranch(payload).subscribe((r) => {
        if (r?.success) {
          this.notify.success("Branch added.");
          this.showBankBranchForm = false;
          this.refreshBankBranches();
        } else {
          this.bankBranchFormError = r?.message || "Failed.";
        }
      });
    }
  }
  deleteBankBranch(id) {
    this.api.deleteBankBranch(id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Branch deleted.");
        this.refreshBankBranches();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  refreshBankBranches() {
    if (!this.bankAgent)
      return;
    this.api.getAgentBanks(this.bankAgent.id).subscribe((r) => {
      if (r?.success && r.data) {
        this.agentBanks = r.data;
        if (this.bankBranchBank) {
          this.bankBranchBank = this.agentBanks.find((b) => b.id === this.bankBranchBank.id) ?? null;
        }
      }
    });
  }
  static {
    this.\u0275fac = function AgentManagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentManagementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentManagementComponent, selectors: [["app-agent-management"]], decls: 31, vars: 24, consts: [[1, "page-header"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-md", 4, "ngIf"], ["class", "popup popup-lg", 4, "ngIf"], ["class", "popup popup-xl", 4, "ngIf"], ["class", "overlay overlay-upper", 3, "click", 4, "ngIf"], ["class", "popup popup-md popup-upper", 4, "ngIf"], ["class", "popup popup-xl popup-upper", 4, "ngIf"], ["class", "overlay overlay-top", 3, "click", 4, "ngIf"], ["class", "popup popup-md popup-top", 4, "ngIf"], ["class", "popup popup-lg popup-upper", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search agents...", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "agent-table", 3, "dataSource"], ["matColumnDef", "businessName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "country"], ["matColumnDef", "type"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", 3, "ngClass"], [1, "status-cell"], [4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Unblock", 1, "action-btn", 3, "click"], [1, "text-success"], ["mat-icon-button", "", "matTooltip", "Approve", 1, "action-btn", 3, "click"], ["mat-icon-button", "", "matTooltip", "Reject", 1, "action-btn", 3, "click"], [1, "text-error"], ["mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Locations", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Banks", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Block", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"], ["mat-icon-button", "", "matTooltip", "Locations", 3, "click"], [1, "text-tertiary"], ["mat-icon-button", "", "matTooltip", "Banks", 3, "click"], ["mat-icon-button", "", "matTooltip", "Block", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-md"], [1, "popup-header"], [1, "header-icon"], ["mat-icon-button", "", 3, "click"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-item", "full-width"], [1, "text-bold"], [1, "popup", "popup-lg"], ["class", "alert-banner alert-error inline-alert", 4, "ngIf"], [1, "form-section"], ["appearance", "outline", 1, "full-width"], [3, "ngModelChange", "ngModel"], ["value", "SendingAgent"], ["value", "PayoutAgent"], [1, "section-title"], [1, "form-grid"], ["appearance", "outline"], ["matInput", "", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "email", "required", "", 3, "ngModelChange", "ngModel"], ["searchable", "", "required", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [1, "alert-banner", "alert-error", "inline-alert"], [3, "value"], ["matInput", "", "type", "number", "required", "", 3, "ngModelChange", "ngModel"], ["required", "", 3, "ngModelChange", "ngModel"], ["value", "PreFunding"], ["value", "PostFunding"], ["diameter", "18", 1, "inline-spinner"], [1, "readonly-field"], [1, "popup", "popup-xl"], [1, "popup-toolbar"], ["mat-table", "", "class", "inner-table", 3, "dataSource", 4, "ngIf"], ["class", "empty-state-info", 4, "ngIf"], ["mat-table", "", 1, "inner-table", 3, "dataSource"], ["matColumnDef", "locationName"], ["matColumnDef", "locationCode"], ["matColumnDef", "countryCity"], ["matColumnDef", "users"], [1, "chip", "chip-info"], ["mat-icon-button", "", "matTooltip", "Manage Users", 3, "click"], [1, "text-warning"], ["mat-icon-button", "", 3, "click", "matTooltip"], [3, "ngClass"], [1, "empty-state-info"], [1, "overlay", "overlay-upper", 3, "click"], [1, "popup", "popup-md", "popup-upper"], ["matInput", "", "placeholder", "e.g. Mon-Fri 9AM-5PM", 3, "ngModelChange", "ngModel"], [1, "popup", "popup-xl", "popup-upper"], ["matColumnDef", "fullName"], ["matColumnDef", "email"], ["matColumnDef", "userName"], ["matColumnDef", "phone"], ["matColumnDef", "role"], ["matColumnDef", "isDefault"], ["class", "chip chip-success", 4, "ngIf"], [1, "chip", "chip-success"], [1, "overlay", "overlay-top", 3, "click"], [1, "popup", "popup-md", "popup-top"], ["matInput", "", "type", "password", 3, "ngModelChange", "ngModel"], ["value", "Operator"], ["value", "Manager"], ["value", "Cashier"], ["color", "primary", 1, "mb-16", 3, "ngModelChange", "ngModel"], ["matColumnDef", "bankName"], ["matColumnDef", "paymentMode"], ["matColumnDef", "bankCode"], ["matColumnDef", "swiftCode"], ["matColumnDef", "branches"], ["mat-icon-button", "", "matTooltip", "Manage Branches", 3, "click"], ["matInput", "", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "popup", "popup-lg", "popup-upper"], ["matColumnDef", "branchName"], ["matColumnDef", "branchCode"], ["matColumnDef", "address"]], template: function AgentManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Agent Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 1);
        \u0275\u0275listener("click", function AgentManagementComponent_Template_button_click_3_listener() {
          return ctx.openCreatePopup();
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " New Agent ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, AgentManagementComponent_div_7_Template, 2, 0, "div", 2)(8, AgentManagementComponent_mat_card_8_Template, 24, 5, "mat-card", 3)(9, AgentManagementComponent_div_9_Template, 1, 0, "div", 4)(10, AgentManagementComponent_div_10_Template, 67, 21, "div", 5)(11, AgentManagementComponent_div_11_Template, 1, 0, "div", 4)(12, AgentManagementComponent_div_12_Template, 79, 17, "div", 6)(13, AgentManagementComponent_div_13_Template, 1, 0, "div", 4)(14, AgentManagementComponent_div_14_Template, 76, 16, "div", 6)(15, AgentManagementComponent_div_15_Template, 1, 0, "div", 4)(16, AgentManagementComponent_div_16_Template, 16, 3, "div", 7)(17, AgentManagementComponent_div_17_Template, 1, 0, "div", 8)(18, AgentManagementComponent_div_18_Template, 52, 10, "div", 9)(19, AgentManagementComponent_div_19_Template, 1, 0, "div", 8)(20, AgentManagementComponent_div_20_Template, 16, 3, "div", 10)(21, AgentManagementComponent_div_21_Template, 1, 0, "div", 11)(22, AgentManagementComponent_div_22_Template, 52, 10, "div", 12)(23, AgentManagementComponent_div_23_Template, 1, 0, "div", 4)(24, AgentManagementComponent_div_24_Template, 16, 3, "div", 7)(25, AgentManagementComponent_div_25_Template, 1, 0, "div", 8)(26, AgentManagementComponent_div_26_Template, 65, 14, "div", 9)(27, AgentManagementComponent_div_27_Template, 1, 0, "div", 8)(28, AgentManagementComponent_div_28_Template, 16, 3, "div", 13)(29, AgentManagementComponent_div_29_Template, 1, 0, "div", 11)(30, AgentManagementComponent_div_30_Template, 40, 7, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailAgent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailAgent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCreatePopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCreatePopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showLocationPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showLocationPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showLocationForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showLocationForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showUserPopup && ctx.userLocation);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showUserPopup && ctx.userLocation);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showUserForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showUserForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankBranchPopup && ctx.bankBranchBank);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankBranchPopup && ctx.bankBranchBank);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankBranchForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBankBranchForm);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      DecimalPipe,
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      RequiredValidator,
      NgModel,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatPaginatorModule,
      MatSortModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip,
      MatChipsModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatCheckboxModule,
      MatCheckbox,
      MatCardModule,
      MatCard,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatDialogModule,
      SearchableSelectDirective
    ], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  margin: 0;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 14px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.alert-banner.alert-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.alert-banner.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.alert-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.alert-banner.alert-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.alert-banner.inline-alert[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 16px;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 320px;\n  margin-bottom: 8px;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.agent-table[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.agent-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 8px 12px;\n}\n.agent-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%], \n.inner-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 8px 12px;\n  vertical-align: middle;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.empty-state-info[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: rgba(0, 0, 0, 0.5);\n  background: #f8fafc;\n  border: 1px dashed rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  font-size: 13px;\n  margin-top: 8px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n  white-space: nowrap;\n}\n.chip.chip-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-tertiary[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.chip.chip-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.status-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 28px !important;\n  height: 28px !important;\n  line-height: 28px !important;\n}\n.action-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #2e7d32 !important;\n}\n.text-error[_ngcontent-%COMP%] {\n  color: #c62828 !important;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #e65100 !important;\n}\n.text-tertiary[_ngcontent-%COMP%] {\n  color: #7b1fa2 !important;\n}\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.overlay.overlay-upper[_ngcontent-%COMP%] {\n  z-index: 10010;\n}\n.overlay.overlay-top[_ngcontent-%COMP%] {\n  z-index: 10020;\n}\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n.popup.popup-sm[_ngcontent-%COMP%] {\n  width: 480px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-md[_ngcontent-%COMP%] {\n  width: 600px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-lg[_ngcontent-%COMP%] {\n  width: 720px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-xl[_ngcontent-%COMP%] {\n  width: 820px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-upper[_ngcontent-%COMP%] {\n  z-index: 10011;\n}\n.popup.popup-top[_ngcontent-%COMP%] {\n  z-index: 10021;\n}\n.popup[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #1565c0;\n}\n.popup-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n.popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n  padding-top: 12px;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  padding: 14px 16px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  background: #fafbfc;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  margin: 0 0 10px;\n  color: rgba(0, 0, 0, 0.65);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.readonly-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 6px 0;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  margin-top: 4px;\n}\n.inline-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.inner-table[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.inner-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  font-size: 11px;\n  padding: 6px 10px;\n}\n.inner-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  padding: 6px 10px;\n}\n.inner-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%] {\n  height: 36px;\n}\n.inner-table[_ngcontent-%COMP%]   tr.mat-mdc-header-row[_ngcontent-%COMP%] {\n  height: 34px;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .popup[_ngcontent-%COMP%] {\n    left: 50%;\n    padding: 16px;\n    max-height: 92vh;\n    width: calc(100vw - 16px) !important;\n    max-width: calc(100vw - 16px) !important;\n  }\n}\n/*# sourceMappingURL=agent-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentManagementComponent, [{
    type: Component,
    args: [{ selector: "app-agent-management", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatChipsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCheckboxModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      DecimalPipe,
      DatePipe,
      SearchableSelectDirective
    ], template: `<!-- Page Header -->\r
<div class="page-header">\r
  <h2>Agent Management</h2>\r
  <button mat-raised-button color="primary" (click)="openCreatePopup()">\r
    <mat-icon>person_add</mat-icon> New Agent\r
  </button>\r
</div>\r
\r
<!-- Loading -->\r
<div *ngIf="loading" class="loading-container">\r
  <mat-spinner diameter="40"></mat-spinner>\r
</div>\r
\r
<!-- Search + Table -->\r
<mat-card *ngIf="!loading" class="table-card">\r
  <mat-form-field appearance="outline" class="search-field">\r
    <mat-icon matPrefix>search</mat-icon>\r
    <input matInput placeholder="Search agents..." [(ngModel)]="searchString" (ngModelChange)="applyFilter()" />\r
  </mat-form-field>\r
\r
  <table mat-table [dataSource]="filteredAgents" class="agent-table">\r
    <!-- Business Name -->\r
    <ng-container matColumnDef="businessName">\r
      <th mat-header-cell *matHeaderCellDef>Business Name</th>\r
      <td mat-cell *matCellDef="let agent">{{ agent.businessName }}</td>\r
    </ng-container>\r
\r
    <!-- Country -->\r
    <ng-container matColumnDef="country">\r
      <th mat-header-cell *matHeaderCellDef>Country</th>\r
      <td mat-cell *matCellDef="let agent">{{ agent.country }}</td>\r
    </ng-container>\r
\r
    <!-- Type -->\r
    <ng-container matColumnDef="type">\r
      <th mat-header-cell *matHeaderCellDef>Type</th>\r
      <td mat-cell *matCellDef="let agent">\r
        <span class="chip" [ngClass]="agent.agentType === 'SendingAgent' ? 'chip-info' : 'chip-tertiary'">\r
          {{ agent.agentType === 'SendingAgent' ? 'Sending' : 'Payout' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Status -->\r
    <ng-container matColumnDef="status">\r
      <th mat-header-cell *matHeaderCellDef>Status</th>\r
      <td mat-cell *matCellDef="let agent">\r
        <div class="status-cell">\r
          <span class="chip" [ngClass]="{\r
            'chip-success': agent.status === 'Approved',\r
            'chip-error': agent.status === 'Blocked' || agent.status === 'Rejected',\r
            'chip-warning': agent.status !== 'Approved' && agent.status !== 'Blocked' && agent.status !== 'Rejected'\r
          }">{{ agent.status }}</span>\r
\r
          <ng-container *ngIf="agent.status === 'Blocked'">\r
            <button mat-icon-button matTooltip="Unblock" class="action-btn" (click)="unblockAgent(agent)">\r
              <mat-icon class="text-success">lock_open</mat-icon>\r
            </button>\r
          </ng-container>\r
\r
          <ng-container *ngIf="agent.status !== 'Approved' && agent.status !== 'Blocked' && agent.status !== 'Rejected'">\r
            <button mat-icon-button matTooltip="Approve" class="action-btn" (click)="approveAgent(agent)">\r
              <mat-icon class="text-success">check_circle</mat-icon>\r
            </button>\r
            <button mat-icon-button matTooltip="Reject" class="action-btn" (click)="rejectAgent(agent)">\r
              <mat-icon class="text-error">cancel</mat-icon>\r
            </button>\r
          </ng-container>\r
        </div>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Actions -->\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let agent">\r
        <button mat-icon-button matTooltip="View Details" (click)="viewDetail(agent)">\r
          <mat-icon color="primary">visibility</mat-icon>\r
        </button>\r
        <button *ngIf="agent.agentType === 'SendingAgent'" mat-icon-button matTooltip="Locations" (click)="openLocationManagement(agent)">\r
          <mat-icon class="text-tertiary">location_on</mat-icon>\r
        </button>\r
        <button *ngIf="agent.agentType === 'PayoutAgent'" mat-icon-button matTooltip="Banks" (click)="openBankManagement(agent)">\r
          <mat-icon color="primary">account_balance</mat-icon>\r
        </button>\r
        <button *ngIf="agent.status === 'Approved'" mat-icon-button matTooltip="Block" (click)="blockAgent(agent)">\r
          <mat-icon color="warn">block</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Edit" (click)="startEdit(agent)">\r
          <mat-icon color="primary">edit</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deleteAgent(agent)">\r
          <mat-icon color="warn">delete</mat-icon>\r
        </button>\r
      </td>\r
    </ng-container>\r
\r
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
  </table>\r
\r
  <div *ngIf="!filteredAgents.length && !loading" class="empty-state">\r
    No agents found.\r
  </div>\r
</mat-card>\r
\r
<!-- ============================================================ -->\r
<!-- Agent Detail Popup                                           -->\r
<!-- ============================================================ -->\r
<div *ngIf="showDetail && detailAgent" class="overlay" (click)="closeDetail()"></div>\r
<div *ngIf="showDetail && detailAgent" class="popup popup-md">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">badge</mat-icon> Agent Details</h3>\r
    <button mat-icon-button (click)="closeDetail()"><mat-icon>close</mat-icon></button>\r
  </div>\r
  <div class="detail-grid">\r
    <div class="detail-item"><span class="detail-label">Business Name</span><span>{{ detailAgent.businessName }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Contact Person</span><span>{{ detailAgent.fullName }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Email</span><span>{{ detailAgent.email }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Phone</span><span>{{ detailAgent.phoneNumber }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Agent Type</span><span>{{ detailAgent.agentType === 'SendingAgent' ? 'Sending Agent' : 'Payout Agent' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Country</span><span>{{ detailAgent.country }} - {{ detailAgent.city }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Currency</span><span>{{ detailAgent.currency || getCurrencyForCountry(detailAgent.country) }}</span></div>\r
    <ng-container *ngIf="detailAgent.agentType === 'SendingAgent'">\r
      <div class="detail-item"><span class="detail-label">Funding Type</span><span>{{ detailAgent.fundingType }}</span></div>\r
      <div class="detail-item"><span class="detail-label">Credit Limit</span><span class="text-bold">{{ detailAgent.creditLimit | number:'1.2-2' }}</span></div>\r
      <div class="detail-item"><span class="detail-label">Current Balance</span><span class="text-bold">{{ detailAgent.currentBalance | number:'1.2-2' }}</span></div>\r
    </ng-container>\r
    <div class="detail-item"><span class="detail-label">License Number</span><span>{{ detailAgent.licenseNumber || '-' }}</span></div>\r
    <div class="detail-item">\r
      <span class="detail-label">Status</span>\r
      <span class="chip" [ngClass]="{\r
        'chip-success': detailAgent.status === 'Approved',\r
        'chip-error': detailAgent.status === 'Blocked',\r
        'chip-warning': detailAgent.status !== 'Approved' && detailAgent.status !== 'Blocked'\r
      }">{{ detailAgent.status }}</span>\r
    </div>\r
    <div class="detail-item full-width"><span class="detail-label">Address</span><span>{{ detailAgent.address || '-' }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Created</span><span>{{ detailAgent.createdAt | date:'yyyy-MM-dd' }}</span></div>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Create Agent Popup                                           -->\r
<!-- ============================================================ -->\r
<div *ngIf="showCreatePopup" class="overlay" (click)="closeCreatePopup()"></div>\r
<div *ngIf="showCreatePopup" class="popup popup-lg">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">person_add</mat-icon> Create New Agent</h3>\r
    <button mat-icon-button (click)="closeCreatePopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="createError" class="alert-banner alert-error inline-alert">{{ createError }}</div>\r
\r
  <!-- Agent Type -->\r
  <div class="form-section">\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Agent Type</mat-label>\r
      <mat-select [(ngModel)]="newAgent.agentType">\r
        <mat-option value="SendingAgent">Sending Agent</mat-option>\r
        <mat-option value="PayoutAgent">Payout Agent</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
  </div>\r
\r
  <!-- Company Info -->\r
  <div class="form-section">\r
    <h4 class="section-title">Company Information</h4>\r
    <div class="form-grid">\r
      <mat-form-field appearance="outline">\r
        <mat-label>Business Name</mat-label>\r
        <input matInput [(ngModel)]="newAgent.businessName" required />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>License Number</mat-label>\r
        <input matInput [(ngModel)]="newAgent.licenseNumber" />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline" class="full-width">\r
        <mat-label>Address</mat-label>\r
        <input matInput [(ngModel)]="newAgent.address" />\r
      </mat-form-field>\r
    </div>\r
  </div>\r
\r
  <!-- Authorized Person -->\r
  <div class="form-section">\r
    <h4 class="section-title">Authorized Person</h4>\r
    <div class="form-grid">\r
      <mat-form-field appearance="outline">\r
        <mat-label>Full Name</mat-label>\r
        <input matInput [(ngModel)]="newAgent.fullName" required />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Email</mat-label>\r
        <input matInput type="email" [(ngModel)]="newAgent.email" required />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Phone</mat-label>\r
        <input matInput [(ngModel)]="newAgent.phone" required />\r
      </mat-form-field>\r
    </div>\r
  </div>\r
\r
  <!-- Accounting Details -->\r
  <div class="form-section">\r
    <h4 class="section-title">Accounting Details</h4>\r
    <div class="form-grid">\r
      <mat-form-field appearance="outline">\r
        <mat-label>Country</mat-label>\r
        <mat-select searchable [(ngModel)]="newAgent.country" required>\r
          <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>City</mat-label>\r
        <input matInput [(ngModel)]="newAgent.city" required />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Currency</mat-label>\r
        <mat-select searchable [(ngModel)]="newAgent.currency" required>\r
          <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <ng-container *ngIf="newAgent.agentType === 'SendingAgent'">\r
        <mat-form-field appearance="outline">\r
          <mat-label>Credit Limit</mat-label>\r
          <input matInput type="number" [(ngModel)]="newAgent.creditLimit" required />\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Funding Type</mat-label>\r
          <mat-select [(ngModel)]="newAgent.fundingType" required>\r
            <mat-option value="PreFunding">PreFunding</mat-option>\r
            <mat-option value="PostFunding">PostFunding</mat-option>\r
          </mat-select>\r
        </mat-form-field>\r
      </ng-container>\r
    </div>\r
  </div>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeCreatePopup()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="createAgent()" [disabled]="creating">\r
      <mat-spinner *ngIf="creating" diameter="18" class="inline-spinner"></mat-spinner>\r
      <mat-icon *ngIf="!creating">person_add</mat-icon> Create Agent\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Edit Agent Popup                                             -->\r
<!-- ============================================================ -->\r
<div *ngIf="showEditPopup" class="overlay" (click)="closeEditPopup()"></div>\r
<div *ngIf="showEditPopup" class="popup popup-lg">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">edit</mat-icon> Edit Agent</h3>\r
    <button mat-icon-button (click)="closeEditPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div *ngIf="editError" class="alert-banner alert-error inline-alert">{{ editError }}</div>\r
\r
  <!-- Company Info -->\r
  <div class="form-section">\r
    <h4 class="section-title">Company Information</h4>\r
    <div class="form-grid">\r
      <mat-form-field appearance="outline">\r
        <mat-label>Business Name</mat-label>\r
        <input matInput [(ngModel)]="editAgent.businessName" required />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>License Number</mat-label>\r
        <input matInput [(ngModel)]="editAgent.licenseNumber" />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline" class="full-width">\r
        <mat-label>Address</mat-label>\r
        <input matInput [(ngModel)]="editAgent.address" />\r
      </mat-form-field>\r
    </div>\r
  </div>\r
\r
  <!-- Authorized Person (read-only) -->\r
  <div class="form-section">\r
    <h4 class="section-title">Authorized Person</h4>\r
    <div class="form-grid">\r
      <div class="readonly-field">\r
        <span class="detail-label">Full Name</span>\r
        <span>{{ editAgentFullName }}</span>\r
      </div>\r
      <div class="readonly-field">\r
        <span class="detail-label">Email</span>\r
        <span>{{ editAgentEmail }}</span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Accounting Details -->\r
  <div class="form-section">\r
    <h4 class="section-title">Accounting Details</h4>\r
    <div class="form-grid">\r
      <mat-form-field appearance="outline">\r
        <mat-label>Country</mat-label>\r
        <mat-select [(ngModel)]="editAgent.country" required>\r
          <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>City</mat-label>\r
        <input matInput [(ngModel)]="editAgent.city" required />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Currency</mat-label>\r
        <mat-select [(ngModel)]="editAgent.currency" required>\r
          <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <ng-container *ngIf="editAgent.agentType === 'SendingAgent'">\r
        <mat-form-field appearance="outline">\r
          <mat-label>Credit Limit</mat-label>\r
          <input matInput type="number" [(ngModel)]="editAgent.creditLimit" required />\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Funding Type</mat-label>\r
          <mat-select [(ngModel)]="editAgent.fundingType" required>\r
            <mat-option value="PreFunding">PreFunding</mat-option>\r
            <mat-option value="PostFunding">PostFunding</mat-option>\r
          </mat-select>\r
        </mat-form-field>\r
      </ng-container>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Agent Type</mat-label>\r
        <mat-select [(ngModel)]="editAgent.agentType" required>\r
          <mat-option value="SendingAgent">Sending Agent</mat-option>\r
          <mat-option value="PayoutAgent">Payout Agent</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
    </div>\r
  </div>\r
\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeEditPopup()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="updateAgent()" [disabled]="updating">\r
      <mat-spinner *ngIf="updating" diameter="18" class="inline-spinner"></mat-spinner>\r
      <mat-icon *ngIf="!updating">save</mat-icon> Save Changes\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Location Management Popup                                    -->\r
<!-- ============================================================ -->\r
<div *ngIf="showLocationPopup" class="overlay" (click)="closeLocationPopup()"></div>\r
<div *ngIf="showLocationPopup" class="popup popup-xl">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">location_on</mat-icon> Locations &mdash; {{ locationAgent?.businessName }}</h3>\r
    <button mat-icon-button (click)="closeLocationPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div class="popup-toolbar">\r
    <button mat-raised-button color="primary" (click)="openLocationForm(null)">\r
      <mat-icon>add</mat-icon> Add Location\r
    </button>\r
  </div>\r
\r
  <table *ngIf="agentLocations.length" mat-table [dataSource]="agentLocations" class="inner-table">\r
    <ng-container matColumnDef="locationName">\r
      <th mat-header-cell *matHeaderCellDef>Location</th>\r
      <td mat-cell *matCellDef="let loc">{{ loc.locationName }}</td>\r
    </ng-container>\r
    <ng-container matColumnDef="locationCode">\r
      <th mat-header-cell *matHeaderCellDef>Code</th>\r
      <td mat-cell *matCellDef="let loc">{{ loc.locationCode || '-' }}</td>\r
    </ng-container>\r
    <ng-container matColumnDef="countryCity">\r
      <th mat-header-cell *matHeaderCellDef>Country / City</th>\r
      <td mat-cell *matCellDef="let loc">{{ loc.country || '-' }} / {{ loc.city || '-' }}</td>\r
    </ng-container>\r
    <ng-container matColumnDef="users">\r
      <th mat-header-cell *matHeaderCellDef>Users</th>\r
      <td mat-cell *matCellDef="let loc"><span class="chip chip-info">{{ loc.users.length }}</span></td>\r
    </ng-container>\r
    <ng-container matColumnDef="status">\r
      <th mat-header-cell *matHeaderCellDef>Status</th>\r
      <td mat-cell *matCellDef="let loc">\r
        <span class="chip" [ngClass]="loc.isActive ? 'chip-success' : 'chip-default'">{{ loc.isActive ? 'Active' : 'Inactive' }}</span>\r
      </td>\r
    </ng-container>\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let loc">\r
        <button mat-icon-button matTooltip="Manage Users" (click)="openUserManagement(loc)"><mat-icon color="primary">people</mat-icon></button>\r
        <button mat-icon-button matTooltip="Edit" (click)="openLocationForm(loc)"><mat-icon class="text-warning">edit</mat-icon></button>\r
        <button mat-icon-button [matTooltip]="loc.isActive ? 'Deactivate' : 'Activate'" (click)="toggleLocation(loc.id)">\r
          <mat-icon [ngClass]="loc.isActive ? 'text-success' : ''">{{ loc.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deleteLocation(loc.id)"><mat-icon color="warn">delete</mat-icon></button>\r
      </td>\r
    </ng-container>\r
    <tr mat-header-row *matHeaderRowDef="['locationName','locationCode','countryCity','users','status','actions']"></tr>\r
    <tr mat-row *matRowDef="let row; columns: ['locationName','locationCode','countryCity','users','status','actions'];"></tr>\r
  </table>\r
\r
  <div *ngIf="!agentLocations.length" class="empty-state-info">No locations configured yet.</div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Location Add/Edit Form                                       -->\r
<!-- ============================================================ -->\r
<div *ngIf="showLocationForm" class="overlay overlay-upper" (click)="closeLocationForm()"></div>\r
<div *ngIf="showLocationForm" class="popup popup-md popup-upper">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">location_on</mat-icon> {{ editingLocationId != null ? 'Edit Location' : 'Add New Location' }}</h3>\r
    <button mat-icon-button (click)="closeLocationForm()"><mat-icon>close</mat-icon></button>\r
  </div>\r
  <div *ngIf="locationFormError" class="alert-banner alert-error inline-alert">{{ locationFormError }}</div>\r
  <div class="form-grid">\r
    <mat-form-field appearance="outline">\r
      <mat-label>Location Name *</mat-label>\r
      <input matInput [(ngModel)]="locName" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Location Code</mat-label>\r
      <input matInput [(ngModel)]="locCode" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Country</mat-label>\r
      <input matInput [(ngModel)]="locCountry" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>City</mat-label>\r
      <input matInput [(ngModel)]="locCity" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Address</mat-label>\r
      <input matInput [(ngModel)]="locAddress" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Contact Phone</mat-label>\r
      <input matInput [(ngModel)]="locPhone" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Contact Email</mat-label>\r
      <input matInput [(ngModel)]="locEmail" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Operating Hours</mat-label>\r
      <input matInput placeholder="e.g. Mon-Fri 9AM-5PM" [(ngModel)]="locHours" />\r
    </mat-form-field>\r
  </div>\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeLocationForm()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="saveLocation()"><mat-icon>save</mat-icon> Save</button>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- User Management Popup                                        -->\r
<!-- ============================================================ -->\r
<div *ngIf="showUserPopup && userLocation" class="overlay overlay-upper" (click)="closeUserPopup()"></div>\r
<div *ngIf="showUserPopup && userLocation" class="popup popup-xl popup-upper">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">people</mat-icon> Users &mdash; {{ userLocation.locationName }}</h3>\r
    <button mat-icon-button (click)="closeUserPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div class="popup-toolbar">\r
    <button mat-raised-button color="primary" (click)="openUserForm(null)"><mat-icon>person_add</mat-icon> Add User</button>\r
  </div>\r
\r
  <table *ngIf="userLocation.users.length" mat-table [dataSource]="userLocation.users" class="inner-table">\r
    <ng-container matColumnDef="fullName"><th mat-header-cell *matHeaderCellDef>Full Name</th><td mat-cell *matCellDef="let u">{{ u.fullName }}</td></ng-container>\r
    <ng-container matColumnDef="email"><th mat-header-cell *matHeaderCellDef>Email</th><td mat-cell *matCellDef="let u">{{ u.email }}</td></ng-container>\r
    <ng-container matColumnDef="userName"><th mat-header-cell *matHeaderCellDef>Username</th><td mat-cell *matCellDef="let u">{{ u.userName || '-' }}</td></ng-container>\r
    <ng-container matColumnDef="phone"><th mat-header-cell *matHeaderCellDef>Phone</th><td mat-cell *matCellDef="let u">{{ u.phone || '-' }}</td></ng-container>\r
    <ng-container matColumnDef="role"><th mat-header-cell *matHeaderCellDef>Role</th><td mat-cell *matCellDef="let u">{{ u.role || '-' }}</td></ng-container>\r
    <ng-container matColumnDef="isDefault">\r
      <th mat-header-cell *matHeaderCellDef>Default</th>\r
      <td mat-cell *matCellDef="let u"><span *ngIf="u.isDefault" class="chip chip-success">Default</span></td>\r
    </ng-container>\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let u">\r
        <button mat-icon-button matTooltip="Edit" (click)="openUserForm(u)"><mat-icon color="primary">edit</mat-icon></button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deleteUser(u.id)"><mat-icon color="warn">delete</mat-icon></button>\r
      </td>\r
    </ng-container>\r
    <tr mat-header-row *matHeaderRowDef="['fullName','email','userName','phone','role','isDefault','actions']"></tr>\r
    <tr mat-row *matRowDef="let row; columns: ['fullName','email','userName','phone','role','isDefault','actions'];"></tr>\r
  </table>\r
\r
  <div *ngIf="!userLocation.users.length" class="empty-state-info">No users yet. Click "Add User" to add one.</div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- User Add/Edit Form                                           -->\r
<!-- ============================================================ -->\r
<div *ngIf="showUserForm" class="overlay overlay-top" (click)="closeUserForm()"></div>\r
<div *ngIf="showUserForm" class="popup popup-md popup-top">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">person</mat-icon> {{ editingUserId != null ? 'Edit User' : 'Add User' }}</h3>\r
    <button mat-icon-button (click)="closeUserForm()"><mat-icon>close</mat-icon></button>\r
  </div>\r
  <div *ngIf="userFormError" class="alert-banner alert-error inline-alert">{{ userFormError }}</div>\r
  <div class="form-grid">\r
    <mat-form-field appearance="outline">\r
      <mat-label>Full Name *</mat-label>\r
      <input matInput [(ngModel)]="userFullName" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Email *</mat-label>\r
      <input matInput [(ngModel)]="userEmail" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Username</mat-label>\r
      <input matInput [(ngModel)]="userUserName" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>{{ editingUserId != null ? 'New Password (leave blank to keep)' : 'Password *' }}</mat-label>\r
      <input matInput type="password" [(ngModel)]="userPassword" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Phone</mat-label>\r
      <input matInput [(ngModel)]="userPhone" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Role</mat-label>\r
      <mat-select [(ngModel)]="userRole">\r
        <mat-option value="Operator">Operator</mat-option>\r
        <mat-option value="Manager">Manager</mat-option>\r
        <mat-option value="Cashier">Cashier</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
  </div>\r
  <mat-checkbox [(ngModel)]="userIsDefault" color="primary" class="mb-16">Default User</mat-checkbox>\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeUserForm()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="saveUser()"><mat-icon>save</mat-icon> Save</button>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Bank Management Popup                                        -->\r
<!-- ============================================================ -->\r
<div *ngIf="showBankPopup" class="overlay" (click)="closeBankPopup()"></div>\r
<div *ngIf="showBankPopup" class="popup popup-xl">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">account_balance</mat-icon> Banks &mdash; {{ bankAgent?.businessName }}</h3>\r
    <button mat-icon-button (click)="closeBankPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div class="popup-toolbar">\r
    <button mat-raised-button color="primary" (click)="openBankForm(null)"><mat-icon>add</mat-icon> Add Bank</button>\r
  </div>\r
\r
  <table *ngIf="agentBanks.length" mat-table [dataSource]="agentBanks" class="inner-table">\r
    <ng-container matColumnDef="bankName"><th mat-header-cell *matHeaderCellDef>Bank Name</th><td mat-cell *matCellDef="let b">{{ b.bankName }}</td></ng-container>\r
    <ng-container matColumnDef="paymentMode"><th mat-header-cell *matHeaderCellDef>Payment Mode</th><td mat-cell *matCellDef="let b"><span class="chip chip-info">{{ b.paymentMethodName || '-' }}</span></td></ng-container>\r
    <ng-container matColumnDef="bankCode"><th mat-header-cell *matHeaderCellDef>Code</th><td mat-cell *matCellDef="let b">{{ b.bankCode || '-' }}</td></ng-container>\r
    <ng-container matColumnDef="swiftCode"><th mat-header-cell *matHeaderCellDef>SWIFT</th><td mat-cell *matCellDef="let b">{{ b.swiftCode || '-' }}</td></ng-container>\r
    <ng-container matColumnDef="branches">\r
      <th mat-header-cell *matHeaderCellDef>Branches</th>\r
      <td mat-cell *matCellDef="let b"><span class="chip chip-info">{{ b.branches.length }}</span></td>\r
    </ng-container>\r
    <ng-container matColumnDef="status">\r
      <th mat-header-cell *matHeaderCellDef>Status</th>\r
      <td mat-cell *matCellDef="let b"><span class="chip" [ngClass]="b.isActive ? 'chip-success' : 'chip-default'">{{ b.isActive ? 'Active' : 'Inactive' }}</span></td>\r
    </ng-container>\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let b">\r
        <button mat-icon-button matTooltip="Manage Branches" (click)="openBankBranchManagement(b)"><mat-icon color="primary">account_tree</mat-icon></button>\r
        <button mat-icon-button matTooltip="Edit" (click)="openBankForm(b)"><mat-icon class="text-warning">edit</mat-icon></button>\r
        <button mat-icon-button [matTooltip]="b.isActive ? 'Deactivate' : 'Activate'" (click)="toggleBank(b.id)">\r
          <mat-icon [ngClass]="b.isActive ? 'text-success' : ''">{{ b.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>\r
        </button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deleteBank(b.id)"><mat-icon color="warn">delete</mat-icon></button>\r
      </td>\r
    </ng-container>\r
    <tr mat-header-row *matHeaderRowDef="['bankName','paymentMode','bankCode','swiftCode','branches','status','actions']"></tr>\r
    <tr mat-row *matRowDef="let row; columns: ['bankName','paymentMode','bankCode','swiftCode','branches','status','actions'];"></tr>\r
  </table>\r
\r
  <div *ngIf="!agentBanks.length" class="empty-state-info">No banks configured yet.</div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Bank Add/Edit Form                                           -->\r
<!-- ============================================================ -->\r
<div *ngIf="showBankForm" class="overlay overlay-upper" (click)="closeBankForm()"></div>\r
<div *ngIf="showBankForm" class="popup popup-md popup-upper">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">account_balance</mat-icon> {{ editingBankId != null ? 'Edit Bank' : 'Add New Bank' }}</h3>\r
    <button mat-icon-button (click)="closeBankForm()"><mat-icon>close</mat-icon></button>\r
  </div>\r
  <div *ngIf="bankFormError" class="alert-banner alert-error inline-alert">{{ bankFormError }}</div>\r
  <div class="form-grid">\r
    <mat-form-field appearance="outline">\r
      <mat-label>Bank Name *</mat-label>\r
      <input matInput [(ngModel)]="bankName" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Payment Mode *</mat-label>\r
      <mat-select searchable [(ngModel)]="bankPaymentMethodId" required>\r
        <mat-option *ngFor="let pm of paymentMethods" [value]="pm.id">{{ pm.name }}</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Bank Code</mat-label>\r
      <input matInput [(ngModel)]="bankCode" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>SWIFT Code</mat-label>\r
      <input matInput [(ngModel)]="bankSwift" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Routing Number</mat-label>\r
      <input matInput [(ngModel)]="bankRouting" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Country</mat-label>\r
      <input matInput [(ngModel)]="bankCountry" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>City</mat-label>\r
      <input matInput [(ngModel)]="bankCity" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Address</mat-label>\r
      <input matInput [(ngModel)]="bankAddress" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Contact Phone</mat-label>\r
      <input matInput [(ngModel)]="bankPhone" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Contact Email</mat-label>\r
      <input matInput [(ngModel)]="bankEmail" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Additional Info</mat-label>\r
      <textarea matInput rows="2" [(ngModel)]="bankAdditionalInfo"></textarea>\r
    </mat-form-field>\r
  </div>\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeBankForm()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="saveBank()"><mat-icon>save</mat-icon> Save</button>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Bank Branch Management Popup                                 -->\r
<!-- ============================================================ -->\r
<div *ngIf="showBankBranchPopup && bankBranchBank" class="overlay overlay-upper" (click)="closeBankBranchPopup()"></div>\r
<div *ngIf="showBankBranchPopup && bankBranchBank" class="popup popup-lg popup-upper">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">account_tree</mat-icon> Branches &mdash; {{ bankBranchBank.bankName }}</h3>\r
    <button mat-icon-button (click)="closeBankBranchPopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
\r
  <div class="popup-toolbar">\r
    <button mat-raised-button color="primary" (click)="openBankBranchForm(null)"><mat-icon>add</mat-icon> Add Branch</button>\r
  </div>\r
\r
  <table *ngIf="bankBranchBank.branches.length" mat-table [dataSource]="bankBranchBank.branches" class="inner-table">\r
    <ng-container matColumnDef="branchName"><th mat-header-cell *matHeaderCellDef>Branch Name</th><td mat-cell *matCellDef="let br">{{ br.branchName }}</td></ng-container>\r
    <ng-container matColumnDef="branchCode"><th mat-header-cell *matHeaderCellDef>Code</th><td mat-cell *matCellDef="let br">{{ br.branchCode || '-' }}</td></ng-container>\r
    <ng-container matColumnDef="swiftCode"><th mat-header-cell *matHeaderCellDef>SWIFT</th><td mat-cell *matCellDef="let br">{{ br.swiftCode || '-' }}</td></ng-container>\r
    <ng-container matColumnDef="address"><th mat-header-cell *matHeaderCellDef>Address</th><td mat-cell *matCellDef="let br">{{ br.address || '-' }}</td></ng-container>\r
    <ng-container matColumnDef="phone"><th mat-header-cell *matHeaderCellDef>Phone</th><td mat-cell *matCellDef="let br">{{ br.contactPhone || '-' }}</td></ng-container>\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let br">\r
        <button mat-icon-button matTooltip="Edit" (click)="openBankBranchForm(br)"><mat-icon color="primary">edit</mat-icon></button>\r
        <button mat-icon-button matTooltip="Delete" (click)="deleteBankBranch(br.id)"><mat-icon color="warn">delete</mat-icon></button>\r
      </td>\r
    </ng-container>\r
    <tr mat-header-row *matHeaderRowDef="['branchName','branchCode','swiftCode','address','phone','actions']"></tr>\r
    <tr mat-row *matRowDef="let row; columns: ['branchName','branchCode','swiftCode','address','phone','actions'];"></tr>\r
  </table>\r
\r
  <div *ngIf="!bankBranchBank.branches.length" class="empty-state-info">No branches yet.</div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!-- Bank Branch Add/Edit Form                                    -->\r
<!-- ============================================================ -->\r
<div *ngIf="showBankBranchForm" class="overlay overlay-top" (click)="closeBankBranchForm()"></div>\r
<div *ngIf="showBankBranchForm" class="popup popup-md popup-top">\r
  <div class="popup-header">\r
    <h3><mat-icon class="header-icon">account_tree</mat-icon> {{ editingBankBranchId != null ? 'Edit Branch' : 'Add Branch' }}</h3>\r
    <button mat-icon-button (click)="closeBankBranchForm()"><mat-icon>close</mat-icon></button>\r
  </div>\r
  <div *ngIf="bankBranchFormError" class="alert-banner alert-error inline-alert">{{ bankBranchFormError }}</div>\r
  <div class="form-grid">\r
    <mat-form-field appearance="outline">\r
      <mat-label>Branch Name *</mat-label>\r
      <input matInput [(ngModel)]="bbName" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Branch Code</mat-label>\r
      <input matInput [(ngModel)]="bbCode" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>SWIFT Code</mat-label>\r
      <input matInput [(ngModel)]="bbSwift" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Contact Phone</mat-label>\r
      <input matInput [(ngModel)]="bbPhone" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Address</mat-label>\r
      <input matInput [(ngModel)]="bbAddress" />\r
    </mat-form-field>\r
  </div>\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeBankBranchForm()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="saveBankBranch()"><mat-icon>save</mat-icon> Save</button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/admin/agent-management/agent-management.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header h2 {\n  font-weight: 700;\n  font-size: 20px;\n  margin: 0;\n}\n.alert-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 14px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.alert-banner.alert-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.alert-banner.alert-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.alert-banner.alert-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.alert-banner.alert-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.alert-banner.inline-alert {\n  margin-bottom: 12px;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card {\n  border-radius: 10px;\n  padding: 16px;\n}\n.search-field {\n  width: 320px;\n  margin-bottom: 8px;\n}\n.search-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.agent-table,\n.inner-table {\n  width: 100%;\n}\n.agent-table th.mat-mdc-header-cell,\n.inner-table th.mat-mdc-header-cell {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 8px 12px;\n}\n.agent-table td.mat-mdc-cell,\n.inner-table td.mat-mdc-cell {\n  font-size: 13px;\n  padding: 8px 12px;\n  vertical-align: middle;\n}\n.empty-state {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.empty-state-info {\n  text-align: center;\n  padding: 20px;\n  color: rgba(0, 0, 0, 0.5);\n  background: #f8fafc;\n  border: 1px dashed rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  font-size: 13px;\n  margin-top: 8px;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n  white-space: nowrap;\n}\n.chip.chip-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-tertiary {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.chip.chip-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.status-cell {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.action-btn {\n  width: 28px !important;\n  height: 28px !important;\n  line-height: 28px !important;\n}\n.action-btn .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.text-success {\n  color: #2e7d32 !important;\n}\n.text-error {\n  color: #c62828 !important;\n}\n.text-warning {\n  color: #e65100 !important;\n}\n.text-tertiary {\n  color: #7b1fa2 !important;\n}\n.text-bold {\n  font-weight: 600;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.overlay.overlay-upper {\n  z-index: 10010;\n}\n.overlay.overlay-top {\n  z-index: 10020;\n}\n.popup {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n.popup.popup-sm {\n  width: 480px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-md {\n  width: 600px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-lg {\n  width: 720px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-xl {\n  width: 820px;\n  max-width: calc(100vw - 300px);\n}\n.popup.popup-upper {\n  z-index: 10011;\n}\n.popup.popup-top {\n  z-index: 10021;\n}\n.popup ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.popup-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.header-icon {\n  font-size: 22px;\n  color: #1565c0;\n}\n.popup-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n.popup-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n  padding-top: 12px;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n}\n.detail-grid .detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-grid .detail-item.full-width {\n  grid-column: 1/-1;\n}\n.detail-label {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.form-section {\n  margin-bottom: 14px;\n  padding: 14px 16px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  background: #fafbfc;\n}\n.section-title {\n  font-weight: 600;\n  font-size: 13px;\n  margin: 0 0 10px;\n  color: rgba(0, 0, 0, 0.65);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-grid .full-width {\n  grid-column: 1/-1;\n}\n.readonly-field {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 6px 0;\n}\n.full-width {\n  width: 100%;\n}\n.mb-16 {\n  margin-bottom: 14px;\n  margin-top: 4px;\n}\n.inline-spinner {\n  display: inline-block;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.inner-table {\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.inner-table th.mat-mdc-header-cell {\n  background: #f8fafc;\n  font-size: 11px;\n  padding: 6px 10px;\n}\n.inner-table td.mat-mdc-cell {\n  font-size: 12.5px;\n  padding: 6px 10px;\n}\n.inner-table tr.mat-mdc-row {\n  height: 36px;\n}\n.inner-table tr.mat-mdc-header-row {\n  height: 34px;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .search-field {\n    width: 100%;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .popup {\n    left: 50%;\n    padding: 16px;\n    max-height: 92vh;\n    width: calc(100vw - 16px) !important;\n    max-width: calc(100vw - 16px) !important;\n  }\n}\n/*# sourceMappingURL=agent-management.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentManagementComponent, { className: "AgentManagementComponent", filePath: "src/app/pages/admin/agent-management/agent-management.component.ts", lineNumber: 99 });
})();
export {
  AgentManagementComponent
};
//# sourceMappingURL=chunk-KGE74O6W.js.map
