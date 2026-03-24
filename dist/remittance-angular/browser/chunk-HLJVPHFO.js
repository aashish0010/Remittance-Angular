import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  provideNativeDateAdapter
} from "./chunk-3R4NSCNF.js";
import "./chunk-XGQ7D33P.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-GFHCDV2J.js";
import {
  SearchableSelectDirective
} from "./chunk-VOSK6FN3.js";
import {
  MatTabsModule
} from "./chunk-JZTA2E7Q.js";
import {
  Router,
  RouterModule
} from "./chunk-32GPHBG7.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-6JH6Y4IN.js";
import {
  MatOption
} from "./chunk-4RZM2DGZ.js";
import "./chunk-IOMUWKJD.js";
import "./chunk-Q6H4NCRS.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-4T44KS6V.js";
import {
  CdkPortalOutlet,
  PortalModule,
  TemplatePortal
} from "./chunk-BE35DT6E.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-GT44UNPC.js";
import {
  NotificationService
} from "./chunk-474OV5BS.js";
import "./chunk-P4ZST5AN.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WB3VPGLQ.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-JCOTY37K.js";
import "./chunk-UIJ624TU.js";
import {
  ErrorStateMatcher,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-ZCHVZ7GG.js";
import {
  ApiService
} from "./chunk-2RUHVO6L.js";
import {
  ControlContainer,
  DefaultValueAccessor,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatIconButton,
  MatRipple,
  MatRippleModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  _StructuralStylesLoader
} from "./chunk-WDVIFEQ7.js";
import {
  BidiModule,
  Directionality,
  ENTER,
  FocusKeyManager,
  FocusMonitor,
  MatCommonModule,
  MatIcon,
  MatIconModule,
  Platform,
  SPACE,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _VisuallyHiddenLoader,
  _getFocusedElementPierceShadowDom,
  hasModifierKey
} from "./chunk-MK4SB477.js";
import {
  AuthStateService
} from "./chunk-GPY2JV2J.js";
import {
  CommonModule,
  DOCUMENT,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-MZ37WZKD.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  QueryList,
  Renderer2,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  debounceTime,
  inject,
  map,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BKSYICRS.js";

// node_modules/@angular/cdk/fesm2022/stepper.mjs
var _c0 = ["*"];
function CdkStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var CdkStepHeader = class _CdkStepHeader {
  _elementRef = inject(ElementRef);
  constructor() {
  }
  /** Focuses the step header. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  static \u0275fac = function CdkStepHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepHeader)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepHeader,
    selectors: [["", "cdkStepHeader", ""]],
    hostAttrs: ["role", "tab"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepHeader, [{
    type: Directive,
    args: [{
      selector: "[cdkStepHeader]",
      host: {
        "role": "tab"
      }
    }]
  }], () => [], null);
})();
var CdkStepLabel = class _CdkStepLabel {
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkStepLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepLabel,
    selectors: [["", "cdkStepLabel", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepLabel, [{
    type: Directive,
    args: [{
      selector: "[cdkStepLabel]"
    }]
  }], () => [], null);
})();
var STEP_STATE = {
  NUMBER: "number",
  EDIT: "edit",
  DONE: "done",
  ERROR: "error"
};
var STEPPER_GLOBAL_OPTIONS = new InjectionToken("STEPPER_GLOBAL_OPTIONS");
var CdkStep = class _CdkStep {
  _stepperOptions;
  _stepper = inject(CdkStepper);
  _displayDefaultIndicatorType;
  /** Template for step label if it exists. */
  stepLabel;
  /** Forms that have been projected into the step. */
  _childForms;
  /** Template for step content. */
  content;
  /** The top level abstract control of the step. */
  stepControl;
  /** Whether user has attempted to move away from the step. */
  interacted = false;
  /** Emits when the user has attempted to move away from the step. */
  interactedStream = new EventEmitter();
  /** Plain text label of the step. */
  label;
  /** Error message to display when there's an error. */
  errorMessage;
  /** Aria label for the tab. */
  ariaLabel;
  /**
   * Reference to the element that the tab is labelled by.
   * Will be cleared if `aria-label` is set at the same time.
   */
  ariaLabelledby;
  /** State of the step. */
  state;
  /** Whether the user can return to this step once it has been marked as completed. */
  editable = true;
  /** Whether the completion of step is optional. */
  optional = false;
  /** Whether step is marked as completed. */
  get completed() {
    return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
  }
  set completed(value) {
    this._completedOverride = value;
  }
  _completedOverride = null;
  _getDefaultCompleted() {
    return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
  }
  /** Whether step has an error. */
  get hasError() {
    return this._customError == null ? this._getDefaultError() : this._customError;
  }
  set hasError(value) {
    this._customError = value;
  }
  _customError = null;
  _getDefaultError() {
    return this.stepControl && this.stepControl.invalid && this.interacted;
  }
  constructor() {
    const stepperOptions = inject(STEPPER_GLOBAL_OPTIONS, {
      optional: true
    });
    this._stepperOptions = stepperOptions ? stepperOptions : {};
    this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
  }
  /** Selects this step component. */
  select() {
    this._stepper.selected = this;
  }
  /** Resets the step to its initial state. Note that this includes resetting form data. */
  reset() {
    this.interacted = false;
    if (this._completedOverride != null) {
      this._completedOverride = false;
    }
    if (this._customError != null) {
      this._customError = false;
    }
    if (this.stepControl) {
      this._childForms?.forEach((form) => form.resetForm?.());
      this.stepControl.reset();
    }
  }
  ngOnChanges() {
    this._stepper._stateChanged();
  }
  _markAsInteracted() {
    if (!this.interacted) {
      this.interacted = true;
      this.interactedStream.emit(this);
    }
  }
  /** Determines whether the error state can be shown. */
  _showError() {
    return this._stepperOptions.showError ?? this._customError != null;
  }
  static \u0275fac = function CdkStep_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStep)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkStep,
    selectors: [["cdk-step"]],
    contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkStepLabel, 5);
        \u0275\u0275contentQuery(
          dirIndex,
          // Note: we look for `ControlContainer` here, because both `NgForm` and `FormGroupDirective`
          // provides themselves as such, but we don't want to have a concrete reference to both of
          // the directives. The type is marked as `Partial` in case we run into a class that provides
          // itself as `ControlContainer` but doesn't have the same interface as the directives.
          ControlContainer,
          5
        );
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._childForms = _t);
      }
    },
    viewQuery: function CdkStep_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      stepControl: "stepControl",
      label: "label",
      errorMessage: "errorMessage",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      state: "state",
      editable: [2, "editable", "editable", booleanAttribute],
      optional: [2, "optional", "optional", booleanAttribute],
      completed: [2, "completed", "completed", booleanAttribute],
      hasError: [2, "hasError", "hasError", booleanAttribute]
    },
    outputs: {
      interactedStream: "interacted"
    },
    exportAs: ["cdkStep"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CdkStep_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStep, [{
    type: Component,
    args: [{
      selector: "cdk-step",
      exportAs: "cdkStep",
      template: "<ng-template><ng-content/></ng-template>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [], {
    stepLabel: [{
      type: ContentChild,
      args: [CdkStepLabel]
    }],
    _childForms: [{
      type: ContentChildren,
      args: [
        // Note: we look for `ControlContainer` here, because both `NgForm` and `FormGroupDirective`
        // provides themselves as such, but we don't want to have a concrete reference to both of
        // the directives. The type is marked as `Partial` in case we run into a class that provides
        // itself as `ControlContainer` but doesn't have the same interface as the directives.
        ControlContainer,
        {
          descendants: true
        }
      ]
    }],
    content: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    stepControl: [{
      type: Input
    }],
    interactedStream: [{
      type: Output,
      args: ["interacted"]
    }],
    label: [{
      type: Input
    }],
    errorMessage: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    state: [{
      type: Input
    }],
    editable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optional: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    completed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasError: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkStepper = class _CdkStepper {
  _dir = inject(Directionality, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Used for managing keyboard focus. */
  _keyManager;
  /** Full list of steps inside the stepper, including inside nested steppers. */
  _steps;
  /** Steps that belong to the current stepper, excluding ones from nested steppers. */
  steps = new QueryList();
  /** The list of step headers of the steps in the stepper. */
  _stepHeader;
  /** List of step headers sorted based on their DOM order. */
  _sortedHeaders = new QueryList();
  /** Whether the validity of previous steps should be checked or not. */
  linear = false;
  /** The index of the selected step. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(index) {
    if (this._steps) {
      if (!this._isValidIndex(index) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.");
      }
      if (this._selectedIndex !== index) {
        this.selected?._markAsInteracted();
        if (!this._anyControlsInvalidOrPending(index) && (index >= this._selectedIndex || this.steps.toArray()[index].editable)) {
          this._updateSelectedItemIndex(index);
        }
      }
    } else {
      this._selectedIndex = index;
    }
  }
  _selectedIndex = 0;
  /** The step that is selected. */
  get selected() {
    return this.steps ? this.steps.toArray()[this.selectedIndex] : void 0;
  }
  set selected(step) {
    this.selectedIndex = step && this.steps ? this.steps.toArray().indexOf(step) : -1;
  }
  /** Event emitted when the selected step has changed. */
  selectionChange = new EventEmitter();
  /** Output to support two-way binding on `[(selectedIndex)]` */
  selectedIndexChange = new EventEmitter();
  /** Used to track unique ID for each stepper component. */
  _groupId = inject(_IdGenerator).getId("cdk-stepper-");
  /** Orientation of the stepper. */
  get orientation() {
    return this._orientation;
  }
  set orientation(value) {
    this._orientation = value;
    if (this._keyManager) {
      this._keyManager.withVerticalOrientation(value === "vertical");
    }
  }
  _orientation = "horizontal";
  constructor() {
  }
  ngAfterContentInit() {
    this._steps.changes.pipe(startWith(this._steps), takeUntil(this._destroyed)).subscribe((steps) => {
      this.steps.reset(steps.filter((step) => step._stepper === this));
      this.steps.notifyOnChanges();
    });
  }
  ngAfterViewInit() {
    this._stepHeader.changes.pipe(startWith(this._stepHeader), takeUntil(this._destroyed)).subscribe((headers) => {
      this._sortedHeaders.reset(headers.toArray().sort((a, b) => {
        const documentPosition = a._elementRef.nativeElement.compareDocumentPosition(b._elementRef.nativeElement);
        return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      }));
      this._sortedHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === "vertical");
    this._keyManager.updateActiveItem(this.selectedIndex);
    (this._dir ? this._dir.change : of()).pipe(startWith(this._layoutDirection()), takeUntil(this._destroyed)).subscribe((direction) => this._keyManager?.withHorizontalOrientation(direction));
    this._keyManager.updateActiveItem(this._selectedIndex);
    this.steps.changes.subscribe(() => {
      if (!this.selected) {
        this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
      }
    });
    if (!this._isValidIndex(this._selectedIndex)) {
      this._selectedIndex = 0;
    }
    if (this.linear && this._selectedIndex > 0) {
      const visitedSteps = this.steps.toArray().slice(0, this._selectedIndex);
      for (const step of visitedSteps) {
        step._markAsInteracted();
      }
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this.steps.destroy();
    this._sortedHeaders.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Selects and focuses the next step in list. */
  next() {
    this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
  }
  /** Selects and focuses the previous step in list. */
  previous() {
    this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
  }
  /** Resets the stepper to its initial state. Note that this includes clearing form data. */
  reset() {
    this._updateSelectedItemIndex(0);
    this.steps.forEach((step) => step.reset());
    this._stateChanged();
  }
  /** Returns a unique id for each step label element. */
  _getStepLabelId(i) {
    return `${this._groupId}-label-${i}`;
  }
  /** Returns unique id for each step content element. */
  _getStepContentId(i) {
    return `${this._groupId}-content-${i}`;
  }
  /** Marks the component to be change detected. */
  _stateChanged() {
    this._changeDetectorRef.markForCheck();
  }
  /** Returns position state of the step with the given index. */
  _getAnimationDirection(index) {
    const position = index - this._selectedIndex;
    if (position < 0) {
      return this._layoutDirection() === "rtl" ? "next" : "previous";
    } else if (position > 0) {
      return this._layoutDirection() === "rtl" ? "previous" : "next";
    }
    return "current";
  }
  /** Returns the type of icon to be displayed. */
  _getIndicatorType(index, state = STEP_STATE.NUMBER) {
    const step = this.steps.toArray()[index];
    const isCurrentStep = this._isCurrentStep(index);
    return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
  }
  _getDefaultIndicatorLogic(step, isCurrentStep) {
    if (step._showError() && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (!step.completed || isCurrentStep) {
      return STEP_STATE.NUMBER;
    } else {
      return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
    }
  }
  _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE.NUMBER) {
    if (step._showError() && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (step.completed && !isCurrentStep) {
      return STEP_STATE.DONE;
    } else if (step.completed && isCurrentStep) {
      return state;
    } else if (step.editable && isCurrentStep) {
      return STEP_STATE.EDIT;
    } else {
      return state;
    }
  }
  _isCurrentStep(index) {
    return this._selectedIndex === index;
  }
  /** Returns the index of the currently-focused step header. */
  _getFocusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
  }
  _updateSelectedItemIndex(newIndex) {
    const stepsArray = this.steps.toArray();
    this.selectionChange.emit({
      selectedIndex: newIndex,
      previouslySelectedIndex: this._selectedIndex,
      selectedStep: stepsArray[newIndex],
      previouslySelectedStep: stepsArray[this._selectedIndex]
    });
    if (this._keyManager) {
      this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
    }
    this._selectedIndex = newIndex;
    this.selectedIndexChange.emit(this._selectedIndex);
    this._stateChanged();
  }
  _onKeydown(event) {
    const hasModifier = hasModifierKey(event);
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    if (manager?.activeItemIndex != null && !hasModifier && (keyCode === SPACE || keyCode === ENTER)) {
      this.selectedIndex = manager.activeItemIndex;
      event.preventDefault();
    } else {
      manager?.setFocusOrigin("keyboard").onKeydown(event);
    }
  }
  _anyControlsInvalidOrPending(index) {
    if (this.linear && index >= 0) {
      return this.steps.toArray().slice(0, index).some((step) => {
        const control = step.stepControl;
        const isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
        return isIncomplete && !step.optional && !step._completedOverride;
      });
    }
    return false;
  }
  _layoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Checks whether the stepper contains the focused element. */
  _containsFocus() {
    const stepperElement = this._elementRef.nativeElement;
    const focusedElement = _getFocusedElementPierceShadowDom();
    return stepperElement === focusedElement || stepperElement.contains(focusedElement);
  }
  /** Checks whether the passed-in index is a valid step index. */
  _isValidIndex(index) {
    return index > -1 && (!this.steps || index < this.steps.length);
  }
  static \u0275fac = function CdkStepper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepper)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepper,
    selectors: [["", "cdkStepper", ""]],
    contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkStep, 5);
        \u0275\u0275contentQuery(dirIndex, CdkStepHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._steps = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._stepHeader = _t);
      }
    },
    inputs: {
      linear: [2, "linear", "linear", booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute],
      selected: "selected",
      orientation: "orientation"
    },
    outputs: {
      selectionChange: "selectionChange",
      selectedIndexChange: "selectedIndexChange"
    },
    exportAs: ["cdkStepper"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepper, [{
    type: Directive,
    args: [{
      selector: "[cdkStepper]",
      exportAs: "cdkStepper"
    }]
  }], () => [], {
    _steps: [{
      type: ContentChildren,
      args: [CdkStep, {
        descendants: true
      }]
    }],
    _stepHeader: [{
      type: ContentChildren,
      args: [CdkStepHeader, {
        descendants: true
      }]
    }],
    linear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selected: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    selectedIndexChange: [{
      type: Output
    }],
    orientation: [{
      type: Input
    }]
  });
})();
var CdkStepperNext = class _CdkStepperNext {
  _stepper = inject(CdkStepper);
  /** Type of the next button. Defaults to "submit" if not specified. */
  type = "submit";
  constructor() {
  }
  static \u0275fac = function CdkStepperNext_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepperNext)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepperNext,
    selectors: [["button", "cdkStepperNext", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkStepperNext_click_HostBindingHandler() {
          return ctx._stepper.next();
        });
      }
      if (rf & 2) {
        \u0275\u0275hostProperty("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperNext, [{
    type: Directive,
    args: [{
      selector: "button[cdkStepperNext]",
      host: {
        "[type]": "type",
        "(click)": "_stepper.next()"
      }
    }]
  }], () => [], {
    type: [{
      type: Input
    }]
  });
})();
var CdkStepperPrevious = class _CdkStepperPrevious {
  _stepper = inject(CdkStepper);
  /** Type of the previous button. Defaults to "button" if not specified. */
  type = "button";
  constructor() {
  }
  static \u0275fac = function CdkStepperPrevious_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepperPrevious)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepperPrevious,
    selectors: [["button", "cdkStepperPrevious", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkStepperPrevious_click_HostBindingHandler() {
          return ctx._stepper.previous();
        });
      }
      if (rf & 2) {
        \u0275\u0275hostProperty("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperPrevious, [{
    type: Directive,
    args: [{
      selector: "button[cdkStepperPrevious]",
      host: {
        "[type]": "type",
        "(click)": "_stepper.previous()"
      }
    }]
  }], () => [], {
    type: [{
      type: Input
    }]
  });
})();
var CdkStepperModule = class _CdkStepperModule {
  static \u0275fac = function CdkStepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepperModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkStepperModule,
    imports: [BidiModule, CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
    exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
      exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/stepper.mjs
function MatStepHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
  }
}
function MatStepHeader_Conditional_4_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.completedLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.editableLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatStepHeader_Conditional_4_Case_1_Conditional_0_Template, 2, 1, "span", 8)(1, MatStepHeader_Conditional_4_Case_1_Conditional_1_Template, 2, 1, "span", 8);
    \u0275\u0275elementStart(2, "mat-icon", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.state === "done" ? 0 : ctx_r0.state === "edit" ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatStepHeader_Conditional_4_Case_0_Template, 2, 1, "span", 7)(1, MatStepHeader_Conditional_4_Case_1_Template, 4, 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.state) === "number" ? 0 : 1);
  }
}
function MatStepHeader_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx.template);
  }
}
function MatStepHeader_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function MatStepHeader_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.optionalLabel);
  }
}
function MatStepHeader_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var _c02 = ["*"];
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) {
}
function MatStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("cdkPortalOutlet", ctx_r0._portal);
  }
}
var _c1 = ["animatedContainer"];
var _c2 = (a0, a1) => ({
  step: a0,
  i: a1
});
function MatStepper_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatStepper_Case_1_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function MatStepper_Case_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
    \u0275\u0275template(1, MatStepper_Case_1_For_3_Conditional_1_Template, 1, 0, "div", 7);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const \u0275$index_8_r3 = ctx.$index;
    const \u0275$count_8_r4 = ctx.$count;
    \u0275\u0275nextContext(2);
    const stepTemplate_r5 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", stepTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c2, step_r1, $index_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_8_r3 === \u0275$count_8_r4 - 1) ? 1 : -1);
  }
}
function MatStepper_Case_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8, 1);
    \u0275\u0275elementContainer(2, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const $index_r7 = ctx.$index;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("mat-horizontal-stepper-content-" + ctx_r7._getAnimationDirection($index_r7));
    \u0275\u0275property("id", ctx_r7._getStepContentId($index_r7));
    \u0275\u0275attribute("aria-labelledby", ctx_r7._getStepLabelId($index_r7))("inert", ctx_r7.selectedIndex === $index_r7 ? null : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", step_r6.content);
  }
}
function MatStepper_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275repeaterCreate(2, MatStepper_Case_1_For_3_Template, 2, 6, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275repeaterCreate(5, MatStepper_Case_1_For_6_Template, 3, 6, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r7.steps);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r7.steps);
  }
}
function MatStepper_Case_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275elementContainer(1, 6);
    \u0275\u0275elementStart(2, "div", 11, 1)(4, "div", 12)(5, "div", 13);
    \u0275\u0275elementContainer(6, 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const step_r9 = ctx.$implicit;
    const $index_r10 = ctx.$index;
    const \u0275$index_22_r11 = ctx.$index;
    const \u0275$count_22_r12 = ctx.$count;
    const ctx_r7 = \u0275\u0275nextContext(2);
    const stepTemplate_r5 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", stepTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction2(10, _c2, step_r9, $index_r10));
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-stepper-vertical-line", !(\u0275$index_22_r11 === \u0275$count_22_r12 - 1))("mat-vertical-content-container-active", ctx_r7.selectedIndex === $index_r10);
    \u0275\u0275attribute("inert", ctx_r7.selectedIndex === $index_r10 ? null : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r7._getStepContentId($index_r10));
    \u0275\u0275attribute("aria-labelledby", ctx_r7._getStepLabelId($index_r10));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", step_r9.content);
  }
}
function MatStepper_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatStepper_Case_2_For_1_Template, 7, 13, "div", 10, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r7.steps);
  }
}
function MatStepper_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-step-header", 14);
    \u0275\u0275listener("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() {
      const step_r14 = \u0275\u0275restoreView(_r13).step;
      return \u0275\u0275resetView(step_r14.select());
    })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7._onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r14 = ctx.step;
    const i_r15 = ctx.i;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-horizontal-stepper-header", ctx_r7.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r7.orientation === "vertical");
    \u0275\u0275property("tabIndex", ctx_r7._getFocusIndex() === i_r15 ? 0 : -1)("id", ctx_r7._getStepLabelId(i_r15))("index", i_r15)("state", ctx_r7._getIndicatorType(i_r15, step_r14.state))("label", step_r14.stepLabel || step_r14.label)("selected", ctx_r7.selectedIndex === i_r15)("active", ctx_r7._stepIsNavigable(i_r15, step_r14))("optional", step_r14.optional)("errorMessage", step_r14.errorMessage)("iconOverrides", ctx_r7._iconOverrides)("disableRipple", ctx_r7.disableRipple || !ctx_r7._stepIsNavigable(i_r15, step_r14))("color", step_r14.color || ctx_r7.color);
    \u0275\u0275attribute("aria-posinset", i_r15 + 1)("aria-setsize", ctx_r7.steps.length)("aria-controls", ctx_r7._getStepContentId(i_r15))("aria-selected", ctx_r7.selectedIndex == i_r15)("aria-label", step_r14.ariaLabel || null)("aria-labelledby", !step_r14.ariaLabel && step_r14.ariaLabelledby ? step_r14.ariaLabelledby : null)("aria-disabled", ctx_r7._stepIsNavigable(i_r15, step_r14) ? null : true);
  }
}
var MatStepLabel = class _MatStepLabel extends CdkStepLabel {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStepLabel_BaseFactory;
    return function MatStepLabel_Factory(__ngFactoryType__) {
      return (\u0275MatStepLabel_BaseFactory || (\u0275MatStepLabel_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepLabel)))(__ngFactoryType__ || _MatStepLabel);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepLabel,
    selectors: [["", "matStepLabel", ""]],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepLabel, [{
    type: Directive,
    args: [{
      selector: "[matStepLabel]"
    }]
  }], null, null);
})();
var MatStepperIntl = class _MatStepperIntl {
  /**
   * Stream that emits whenever the labels here are changed. Use this to notify
   * components if the labels have changed after initialization.
   */
  changes = new Subject();
  /** Label that is rendered below optional steps. */
  optionalLabel = "Optional";
  /** Label that is used to indicate step as completed to screen readers. */
  completedLabel = "Completed";
  /** Label that is used to indicate step as editable to screen readers. */
  editableLabel = "Editable";
  static \u0275fac = function MatStepperIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepperIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatStepperIntl,
    factory: _MatStepperIntl.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatStepperIntl();
}
var MAT_STEPPER_INTL_PROVIDER = {
  provide: MatStepperIntl,
  deps: [[new Optional(), new SkipSelf(), MatStepperIntl]],
  useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};
var MatStepHeader = class _MatStepHeader extends CdkStepHeader {
  _intl = inject(MatStepperIntl);
  _focusMonitor = inject(FocusMonitor);
  _intlSubscription;
  /** State of the given step. */
  state;
  /** Label of the given step. */
  label;
  /** Error message to display when there's an error. */
  errorMessage;
  /** Overrides for the header icons, passed in via the stepper. */
  iconOverrides;
  /** Index of the given step. */
  index;
  /** Whether the given step is selected. */
  selected;
  /** Whether the given step label is active. */
  active;
  /** Whether the given step is optional. */
  optional;
  /** Whether the ripple should be disabled. */
  disableRipple;
  /**
   * Theme color of the step header. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  constructor() {
    super();
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_StructuralStylesLoader);
    styleLoader.load(_VisuallyHiddenLoader);
    const changeDetectorRef = inject(ChangeDetectorRef);
    this._intlSubscription = this._intl.changes.subscribe(() => changeDetectorRef.markForCheck());
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    this._intlSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Focuses the step header. */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }
  /** Returns string label of given step if it is a text label. */
  _stringLabel() {
    return this.label instanceof MatStepLabel ? null : this.label;
  }
  /** Returns MatStepLabel if the label of given step is a template label. */
  _templateLabel() {
    return this.label instanceof MatStepLabel ? this.label : null;
  }
  /** Returns the host HTML element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Template context variables that are exposed to the `matStepperIcon` instances. */
  _getIconContext() {
    return {
      index: this.index,
      active: this.active,
      optional: this.optional
    };
  }
  _getDefaultTextForState(state) {
    if (state == "number") {
      return `${this.index + 1}`;
    }
    if (state == "edit") {
      return "create";
    }
    if (state == "error") {
      return "warning";
    }
    return state;
  }
  static \u0275fac = function MatStepHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatStepHeader,
    selectors: [["mat-step-header"]],
    hostAttrs: ["role", "tab", 1, "mat-step-header"],
    hostVars: 2,
    hostBindings: function MatStepHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
      }
    },
    inputs: {
      state: "state",
      label: "label",
      errorMessage: "errorMessage",
      iconOverrides: "iconOverrides",
      index: "index",
      selected: "selected",
      active: "active",
      optional: "optional",
      disableRipple: "disableRipple",
      color: "color"
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 10,
    vars: 17,
    consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-step-label"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"], ["aria-hidden", "true"], [1, "cdk-visually-hidden"], [3, "ngTemplateOutlet"]],
    template: function MatStepHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
        \u0275\u0275elementStart(1, "div")(2, "div", 1);
        \u0275\u0275template(3, MatStepHeader_Conditional_3_Template, 1, 2, "ng-container", 2)(4, MatStepHeader_Conditional_4_Template, 2, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275template(6, MatStepHeader_Conditional_6_Template, 2, 1, "div", 4)(7, MatStepHeader_Conditional_7_Template, 2, 1, "div", 4)(8, MatStepHeader_Conditional_8_Template, 2, 1, "div", 5)(9, MatStepHeader_Conditional_9_Template, 2, 1, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_8_0;
        \u0275\u0275property("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("mat-step-icon-state-", ctx.state, " mat-step-icon");
        \u0275\u0275classProp("mat-step-icon-selected", ctx.selected);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.iconOverrides && ctx.iconOverrides[ctx.state] ? 3 : 4);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_8_0 = ctx._templateLabel()) ? 6 : ctx._stringLabel() ? 7 : -1, tmp_8_0);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.optional && ctx.state != "error" ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.state === "error" ? 9 : -1);
      }
    },
    dependencies: [MatRipple, NgTemplateOutlet, MatIcon],
    styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-inverse-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-inverse-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepHeader, [{
    type: Component,
    args: [{
      selector: "mat-step-header",
      host: {
        "class": "mat-step-header",
        "[class]": '"mat-" + (color || "primary")',
        "role": "tab"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, NgTemplateOutlet, MatIcon],
      template: `<div class="mat-step-header-ripple mat-focus-indicator" matRipple
     [matRippleTrigger]="_getHostElement()"
     [matRippleDisabled]="disableRipple"></div>

<div class="mat-step-icon-state-{{state}} mat-step-icon" [class.mat-step-icon-selected]="selected">
  <div class="mat-step-icon-content">
    @if (iconOverrides && iconOverrides[state]) {
      <ng-container
        [ngTemplateOutlet]="iconOverrides[state]"
        [ngTemplateOutletContext]="_getIconContext()"></ng-container>
    } @else {
      @switch (state) {
        @case ('number') {
          <span aria-hidden="true">{{_getDefaultTextForState(state)}}</span>
        }

        @default {
          @if (state === 'done') {
            <span class="cdk-visually-hidden">{{_intl.completedLabel}}</span>
          } @else if (state === 'edit') {
            <span class="cdk-visually-hidden">{{_intl.editableLabel}}</span>
          }

          <mat-icon aria-hidden="true">{{_getDefaultTextForState(state)}}</mat-icon>
        }
      }
    }
  </div>
</div>
<div class="mat-step-label"
     [class.mat-step-label-active]="active"
     [class.mat-step-label-selected]="selected"
     [class.mat-step-label-error]="state == 'error'">
  @if (_templateLabel(); as templateLabel) {
    <!-- If there is a label template, use it. -->
    <div class="mat-step-text-label">
      <ng-container [ngTemplateOutlet]="templateLabel.template"></ng-container>
    </div>
  } @else if (_stringLabel()) {
    <!-- If there is no label template, fall back to the text label. -->
    <div class="mat-step-text-label">{{label}}</div>
  }

  @if (optional && state != 'error') {
    <div class="mat-step-optional">{{_intl.optionalLabel}}</div>
  }

  @if (state === 'error') {
    <div class="mat-step-sub-label-error">{{errorMessage}}</div>
  }
</div>

`,
      styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-inverse-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-inverse-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}\n']
    }]
  }], () => [], {
    state: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    errorMessage: [{
      type: Input
    }],
    iconOverrides: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    optional: [{
      type: Input
    }],
    disableRipple: [{
      type: Input
    }],
    color: [{
      type: Input
    }]
  });
})();
var MatStepperIcon = class _MatStepperIcon {
  templateRef = inject(TemplateRef);
  /** Name of the icon to be overridden. */
  name;
  constructor() {
  }
  static \u0275fac = function MatStepperIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepperIcon)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepperIcon,
    selectors: [["ng-template", "matStepperIcon", ""]],
    inputs: {
      name: [0, "matStepperIcon", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperIcon, [{
    type: Directive,
    args: [{
      selector: "ng-template[matStepperIcon]"
    }]
  }], () => [], {
    name: [{
      type: Input,
      args: ["matStepperIcon"]
    }]
  });
})();
var MatStepContent = class _MatStepContent {
  _template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function MatStepContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepContent,
    selectors: [["ng-template", "matStepContent", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matStepContent]"
    }]
  }], () => [], null);
})();
var MatStep = class _MatStep extends CdkStep {
  _errorStateMatcher = inject(ErrorStateMatcher, {
    skipSelf: true
  });
  _viewContainerRef = inject(ViewContainerRef);
  _isSelected = Subscription.EMPTY;
  /** Content for step label given by `<ng-template matStepLabel>`. */
  // We need an initializer here to avoid a TS error.
  stepLabel = void 0;
  /**
   * Theme color for the particular step. This API is supported in M2 themes
   * only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Content that will be rendered lazily. */
  _lazyContent;
  /** Currently-attached portal containing the lazy content. */
  _portal;
  ngAfterContentInit() {
    this._isSelected = this._stepper.steps.changes.pipe(switchMap(() => {
      return this._stepper.selectionChange.pipe(map((event) => event.selectedStep === this), startWith(this._stepper.selected === this));
    })).subscribe((isSelected) => {
      if (isSelected && this._lazyContent && !this._portal) {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      }
    });
  }
  ngOnDestroy() {
    this._isSelected.unsubscribe();
  }
  /** Custom error state matcher that additionally checks for validity of interacted form. */
  isErrorState(control, form) {
    const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
    const customErrorState = !!(control && control.invalid && this.interacted);
    return originalErrorState || customErrorState;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStep_BaseFactory;
    return function MatStep_Factory(__ngFactoryType__) {
      return (\u0275MatStep_BaseFactory || (\u0275MatStep_BaseFactory = \u0275\u0275getInheritedFactory(_MatStep)))(__ngFactoryType__ || _MatStep);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatStep,
    selectors: [["mat-step"]],
    contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatStepLabel, 5);
        \u0275\u0275contentQuery(dirIndex, MatStepContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lazyContent = _t.first);
      }
    },
    hostAttrs: ["hidden", ""],
    inputs: {
      color: "color"
    },
    exportAs: ["matStep"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: ErrorStateMatcher,
      useExisting: _MatStep
    }, {
      provide: CdkStep,
      useExisting: _MatStep
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    consts: [[3, "cdkPortalOutlet"]],
    template: function MatStep_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
      }
    },
    dependencies: [CdkPortalOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStep, [{
    type: Component,
    args: [{
      selector: "mat-step",
      providers: [{
        provide: ErrorStateMatcher,
        useExisting: MatStep
      }, {
        provide: CdkStep,
        useExisting: MatStep
      }],
      encapsulation: ViewEncapsulation.None,
      exportAs: "matStep",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [CdkPortalOutlet],
      host: {
        "hidden": ""
        // Hide the steps so they don't affect the layout.
      },
      template: '<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n</ng-template>\n'
    }]
  }], null, {
    stepLabel: [{
      type: ContentChild,
      args: [MatStepLabel]
    }],
    color: [{
      type: Input
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatStepContent, {
        static: false
      }]
    }]
  });
})();
var MatStepper = class _MatStepper extends CdkStepper {
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _animationsModule = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _cleanupTransition;
  _isAnimating = signal(false);
  /** The list of step headers of the steps in the stepper. */
  _stepHeader = void 0;
  /** Elements hosting the step animations. */
  _animatedContainers;
  /** Full list of steps inside the stepper, including inside nested steppers. */
  _steps = void 0;
  /** Steps that belong to the current stepper, excluding ones from nested steppers. */
  steps = new QueryList();
  /** Custom icon overrides passed in by the consumer. */
  _icons;
  /** Event emitted when the current step is done transitioning in. */
  animationDone = new EventEmitter();
  /** Whether ripples should be disabled for the step headers. */
  disableRipple;
  /**
   * Theme color for all of the steps in stepper. This API is supported in M2
   * themes only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /**
   * Whether the label should display in bottom or end position.
   * Only applies in the `horizontal` orientation.
   */
  labelPosition = "end";
  /**
   * Position of the stepper's header.
   * Only applies in the `horizontal` orientation.
   */
  headerPosition = "top";
  /** Consumer-specified template-refs to be used to override the header icons. */
  _iconOverrides = {};
  /** Duration for the animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    this._animationDuration = /^\d+$/.test(value) ? value + "ms" : value;
  }
  _animationDuration = "";
  /** Whether the stepper is rendering on the server. */
  _isServer = !inject(Platform).isBrowser;
  constructor() {
    super();
    const elementRef = inject(ElementRef);
    const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
    this.orientation = nodeName === "mat-vertical-stepper" ? "vertical" : "horizontal";
  }
  ngAfterContentInit() {
    super.ngAfterContentInit();
    this._icons.forEach(({
      name,
      templateRef
    }) => this._iconOverrides[name] = templateRef);
    this.steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this._stateChanged());
    this.selectedIndexChange.pipe(takeUntil(this._destroyed)).subscribe(() => {
      const duration = this._getAnimationDuration();
      if (duration === "0ms" || duration === "0s") {
        this._onAnimationDone();
      } else {
        this._isAnimating.set(true);
      }
    });
    this._ngZone.runOutsideAngular(() => {
      if (this._animationsModule !== "NoopAnimations") {
        setTimeout(() => {
          this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled");
          this._cleanupTransition = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionend);
        }, 200);
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (typeof queueMicrotask === "function") {
      let hasEmittedInitial = false;
      this._animatedContainers.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => queueMicrotask(() => {
        if (!hasEmittedInitial) {
          hasEmittedInitial = true;
          this.animationDone.emit();
        }
        this._stateChanged();
      }));
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTransition?.();
  }
  _stepIsNavigable(index, step) {
    return step.completed || this.selectedIndex === index || !this.linear;
  }
  _getAnimationDuration() {
    if (this._animationsModule === "NoopAnimations") {
      return "0ms";
    }
    if (this.animationDuration) {
      return this.animationDuration;
    }
    return this.orientation === "horizontal" ? "500ms" : "225ms";
  }
  _handleTransitionend = (event) => {
    const target = event.target;
    if (!target) {
      return;
    }
    const isHorizontalActiveElement = this.orientation === "horizontal" && event.propertyName === "transform" && target.classList.contains("mat-horizontal-stepper-content-current");
    const isVerticalActiveElement = this.orientation === "vertical" && event.propertyName === "grid-template-rows" && target.classList.contains("mat-vertical-content-container-active");
    const shouldEmit = (isHorizontalActiveElement || isVerticalActiveElement) && this._animatedContainers.find((ref) => ref.nativeElement === target);
    if (shouldEmit) {
      this._onAnimationDone();
    }
  };
  _onAnimationDone() {
    this._isAnimating.set(false);
    this.animationDone.emit();
  }
  static \u0275fac = function MatStepper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepper)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatStepper,
    selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]],
    contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatStep, 5);
        \u0275\u0275contentQuery(dirIndex, MatStepperIcon, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._steps = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._icons = _t);
      }
    },
    viewQuery: function MatStepper_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatStepHeader, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._stepHeader = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._animatedContainers = _t);
      }
    },
    hostAttrs: ["role", "tablist"],
    hostVars: 15,
    hostBindings: function MatStepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-orientation", ctx.orientation);
        \u0275\u0275styleProp("--mat-stepper-animation-duration", ctx._getAnimationDuration());
        \u0275\u0275classProp("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom")("mat-stepper-header-position-bottom", ctx.headerPosition === "bottom")("mat-stepper-animating", ctx._isAnimating());
      }
    },
    inputs: {
      disableRipple: "disableRipple",
      color: "color",
      labelPosition: "labelPosition",
      headerPosition: "headerPosition",
      animationDuration: "animationDuration"
    },
    outputs: {
      animationDone: "animationDone"
    },
    exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkStepper,
      useExisting: _MatStepper
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 5,
    vars: 2,
    consts: [["stepTemplate", ""], ["animatedContainer", ""], [1, "mat-horizontal-stepper-wrapper"], [1, "mat-horizontal-stepper-header-container"], [1, "mat-horizontal-content-container"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id", "class"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "click", "keydown", "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color"]],
    template: function MatStepper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, MatStepper_Conditional_0_Template, 1, 0)(1, MatStepper_Case_1_Template, 7, 0, "div", 2)(2, MatStepper_Case_2_Template, 2, 0)(3, MatStepper_ng_template_3_Template, 1, 23, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275conditional(ctx._isServer ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_2_0 = ctx.orientation) === "horizontal" ? 1 : tmp_2_0 === "vertical" ? 2 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, MatStepHeader],
    styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepper, [{
    type: Component,
    args: [{
      selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]",
      exportAs: "matStepper, matVerticalStepper, matHorizontalStepper",
      host: {
        "[class.mat-stepper-horizontal]": 'orientation === "horizontal"',
        "[class.mat-stepper-vertical]": 'orientation === "vertical"',
        "[class.mat-stepper-label-position-end]": 'orientation === "horizontal" && labelPosition == "end"',
        "[class.mat-stepper-label-position-bottom]": 'orientation === "horizontal" && labelPosition == "bottom"',
        "[class.mat-stepper-header-position-bottom]": 'headerPosition === "bottom"',
        "[class.mat-stepper-animating]": "_isAnimating()",
        "[style.--mat-stepper-animation-duration]": "_getAnimationDuration()",
        "[attr.aria-orientation]": "orientation",
        "role": "tablist"
      },
      providers: [{
        provide: CdkStepper,
        useExisting: MatStepper
      }],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgTemplateOutlet, MatStepHeader],
      template: `<!--
  We need to project the content somewhere to avoid hydration errors. Some observations:
  1. This is only necessary on the server.
  2. We get a hydration error if there aren't any nodes after the \`ng-content\`.
  3. We get a hydration error if \`ng-content\` is wrapped in another element.
-->
@if (_isServer) {
  <ng-content/>
}

@switch (orientation) {
  @case ('horizontal') {
    <div class="mat-horizontal-stepper-wrapper">
      <div class="mat-horizontal-stepper-header-container">
        @for (step of steps; track step) {
          <ng-container
            [ngTemplateOutlet]="stepTemplate"
            [ngTemplateOutletContext]="{step, i: $index}"/>
          @if (!$last) {
            <div class="mat-stepper-horizontal-line"></div>
          }
        }
      </div>

      <div class="mat-horizontal-content-container">
        @for (step of steps; track step) {
          <div
            #animatedContainer
            class="mat-horizontal-stepper-content"
            role="tabpanel"
            [id]="_getStepContentId($index)"
            [attr.aria-labelledby]="_getStepLabelId($index)"
            [class]="'mat-horizontal-stepper-content-' + _getAnimationDirection($index)"
            [attr.inert]="selectedIndex === $index ? null : ''">
            <ng-container [ngTemplateOutlet]="step.content"/>
          </div>
        }
      </div>
    </div>
  }

  @case ('vertical') {
    @for (step of steps; track step) {
      <div class="mat-step">
        <ng-container
          [ngTemplateOutlet]="stepTemplate"
          [ngTemplateOutletContext]="{step, i: $index}"/>
        <div
          #animatedContainer
          class="mat-vertical-content-container"
          [class.mat-stepper-vertical-line]="!$last"
          [class.mat-vertical-content-container-active]="selectedIndex === $index"
          [attr.inert]="selectedIndex === $index ? null : ''">
          <div class="mat-vertical-stepper-content"
            role="tabpanel"
            [id]="_getStepContentId($index)"
            [attr.aria-labelledby]="_getStepLabelId($index)">
            <div class="mat-vertical-content">
              <ng-container [ngTemplateOutlet]="step.content"/>
            </div>
          </div>
        </div>
      </div>
    }
  }
}

<!-- Common step templating -->
<ng-template let-step="step" let-i="i" #stepTemplate>
  <mat-step-header
    [class.mat-horizontal-stepper-header]="orientation === 'horizontal'"
    [class.mat-vertical-stepper-header]="orientation === 'vertical'"
    (click)="step.select()"
    (keydown)="_onKeydown($event)"
    [tabIndex]="_getFocusIndex() === i ? 0 : -1"
    [id]="_getStepLabelId(i)"
    [attr.aria-posinset]="i + 1"
    [attr.aria-setsize]="steps.length"
    [attr.aria-controls]="_getStepContentId(i)"
    [attr.aria-selected]="selectedIndex == i"
    [attr.aria-label]="step.ariaLabel || null"
    [attr.aria-labelledby]="(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null"
    [attr.aria-disabled]="_stepIsNavigable(i, step) ? null : true"
    [index]="i"
    [state]="_getIndicatorType(i, step.state)"
    [label]="step.stepLabel || step.label"
    [selected]="selectedIndex === i"
    [active]="_stepIsNavigable(i, step)"
    [optional]="step.optional"
    [errorMessage]="step.errorMessage"
    [iconOverrides]="_iconOverrides"
    [disableRipple]="disableRipple || !_stepIsNavigable(i, step)"
    [color]="step.color || color"/>
</ng-template>
`,
      styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}\n']
    }]
  }], () => [], {
    _stepHeader: [{
      type: ViewChildren,
      args: [MatStepHeader]
    }],
    _animatedContainers: [{
      type: ViewChildren,
      args: ["animatedContainer"]
    }],
    _steps: [{
      type: ContentChildren,
      args: [MatStep, {
        descendants: true
      }]
    }],
    _icons: [{
      type: ContentChildren,
      args: [MatStepperIcon, {
        descendants: true
      }]
    }],
    animationDone: [{
      type: Output
    }],
    disableRipple: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }]
  });
})();
var MatStepperNext = class _MatStepperNext extends CdkStepperNext {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStepperNext_BaseFactory;
    return function MatStepperNext_Factory(__ngFactoryType__) {
      return (\u0275MatStepperNext_BaseFactory || (\u0275MatStepperNext_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepperNext)))(__ngFactoryType__ || _MatStepperNext);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepperNext,
    selectors: [["button", "matStepperNext", ""]],
    hostAttrs: [1, "mat-stepper-next"],
    hostVars: 1,
    hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275hostProperty("type", ctx.type);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperNext, [{
    type: Directive,
    args: [{
      selector: "button[matStepperNext]",
      host: {
        "class": "mat-stepper-next",
        "[type]": "type"
      }
    }]
  }], null, null);
})();
var MatStepperPrevious = class _MatStepperPrevious extends CdkStepperPrevious {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStepperPrevious_BaseFactory;
    return function MatStepperPrevious_Factory(__ngFactoryType__) {
      return (\u0275MatStepperPrevious_BaseFactory || (\u0275MatStepperPrevious_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepperPrevious)))(__ngFactoryType__ || _MatStepperPrevious);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepperPrevious,
    selectors: [["button", "matStepperPrevious", ""]],
    hostAttrs: [1, "mat-stepper-previous"],
    hostVars: 1,
    hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275hostProperty("type", ctx.type);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperPrevious, [{
    type: Directive,
    args: [{
      selector: "button[matStepperPrevious]",
      host: {
        "class": "mat-stepper-previous",
        "[type]": "type"
      }
    }]
  }], null, null);
})();
var MatStepperModule = class _MatStepperModule {
  static \u0275fac = function MatStepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepperModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatStepperModule,
    imports: [MatCommonModule, PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
    exports: [MatCommonModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher],
    imports: [MatCommonModule, PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStepper, MatStepHeader, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      exports: [MatCommonModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
});
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var MatProgressBar = class _MatProgressBar {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  _animationMode = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  constructor() {
    const defaults = inject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._isNoopAnimation = this._animationMode === "NoopAnimations";
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  /** Flag that indicates whether NoopAnimations mode is set to true. */
  _isNoopAnimation = false;
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the progress bar. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/progress-bar/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _value = 0;
  /** Buffer value of the progress bar. Defaults to zero. */
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _bufferValue = 0;
  /**
   * Event emitted when animation of the primary progress bar completes. This event will not
   * be emitted when animations are disabled, nor will it be emitted for modes with continuous
   * animations (indeterminate and query).
   */
  animationEnd = new EventEmitter();
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  _mode = "determinate";
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._cleanupTransitionEnd?.();
  }
  /** Gets the transform style that should be applied to the primary bar. */
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  /** Gets the `flex-basis` value that should be applied to the buffer bar. */
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  /** Returns whether the progress bar is indeterminate. */
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  /** Event handler for `transitionend` events. */
  _transitionendHandler = (event) => {
    if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
      return;
    }
    if (this.mode === "determinate" || this.mode === "buffer") {
      this._ngZone.run(() => this.animationEnd.next({
        value: this.value
      }));
    }
  };
  static \u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressBar,
    selectors: [["mat-progress-bar"]],
    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
    hostVars: 10,
    hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
      }
    },
    inputs: {
      color: "color",
      value: [2, "value", "value", numberAttribute],
      bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
      mode: "mode"
    },
    outputs: {
      animationEnd: "animationEnd"
    },
    exportAs: ["matProgressBar"],
    decls: 7,
    vars: 5,
    consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
    template: function MatProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275template(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275element(6, "span", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
      }
    },
    styles: [`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height, 4px),var(--mdc-linear-progress-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mdc-linear-progress-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height, 4px);border-radius:var(--mdc-linear-progress-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color, var(--mat-sys-surface-variant))}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}
`],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height, 4px),var(--mdc-linear-progress-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mdc-linear-progress-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height, 4px);border-radius:var(--mdc-linear-progress-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color, var(--mat-sys-surface-variant))}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}
`]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static \u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressBarModule,
    imports: [MatProgressBar],
    exports: [MatProgressBar, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/pages/agent/send-money/send-money.component.ts
function SendMoneyComponent_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
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
function SendMoneyComponent_mat_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
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
function SendMoneyComponent_mat_icon_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
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
function SendMoneyComponent_mat_icon_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
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
function SendMoneyComponent_div_29_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "mat-icon");
    \u0275\u0275text(2, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Your available balance is 0. You cannot send transactions until your balance is topped up. Please contact admin.");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_29_div_13_span_8_Template(rf, ctx) {
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
function SendMoneyComponent_div_29_div_13_span_9_Template(rf, ctx) {
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
function SendMoneyComponent_div_29_div_13_span_10_Template(rf, ctx) {
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
function SendMoneyComponent_div_29_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 31);
    \u0275\u0275template(8, SendMoneyComponent_div_29_div_13_span_8_Template, 2, 1, "span", 7)(9, SendMoneyComponent_div_29_div_13_span_9_Template, 2, 1, "span", 7)(10, SendMoneyComponent_div_29_div_13_span_10_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 32);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_div_13_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSelectedCustomer());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "close");
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
function SendMoneyComponent_div_29_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "mat-icon");
    \u0275\u0275text(2, "gpp_bad");
    \u0275\u0275elementEnd();
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
function SendMoneyComponent_div_29_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "mat-icon");
    \u0275\u0275text(2, "cake");
    \u0275\u0275elementEnd();
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
function SendMoneyComponent_div_29_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "mat-icon");
    \u0275\u0275text(2, "error");
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
function SendMoneyComponent_div_29_div_16_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
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
function SendMoneyComponent_div_29_div_16_mat_option_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
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
function SendMoneyComponent_div_29_div_16_mat_option_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
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
function SendMoneyComponent_div_29_div_16_mat_spinner_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 59);
  }
}
function SendMoneyComponent_div_29_div_16_mat_icon_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_29_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, SendMoneyComponent_div_29_div_16_div_1_Template, 4, 1, "div", 34);
    \u0275\u0275elementStart(2, "div", 35);
    \u0275\u0275text(3, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "mat-form-field", 37)(6, "mat-label");
    \u0275\u0275text(7, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.fullName, $event) || (ctx_r1.newCustomer.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 37)(10, "mat-label");
    \u0275\u0275text(11, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.phone, $event) || (ctx_r1.newCustomer.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 37)(14, "mat-label");
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.email, $event) || (ctx_r1.newCustomer.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 37)(18, "mat-label");
    \u0275\u0275text(19, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.dateOfBirth, $event) || (ctx_r1.newCustomer.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "mat-datepicker-toggle", 42)(22, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 37)(25, "mat-label");
    \u0275\u0275text(26, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-select", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_mat_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.gender, $event) || (ctx_r1.newCustomer.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(28, "mat-option", 44);
    \u0275\u0275text(29, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-option", 45);
    \u0275\u0275text(31, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-option", 46);
    \u0275\u0275text(33, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "mat-form-field", 37)(35, "mat-label");
    \u0275\u0275text(36, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.nationality, $event) || (ctx_r1.newCustomer.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 35);
    \u0275\u0275text(39, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 36)(41, "mat-form-field", 37)(42, "mat-label");
    \u0275\u0275text(43, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_mat_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.country, $event) || (ctx_r1.newCustomer.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(45, SendMoneyComponent_div_29_div_16_mat_option_45_Template, 2, 2, "mat-option", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "mat-form-field", 37)(47, "mat-label");
    \u0275\u0275text(48, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.city, $event) || (ctx_r1.newCustomer.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "mat-form-field", 37)(51, "mat-label");
    \u0275\u0275text(52, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.address, $event) || (ctx_r1.newCustomer.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 35);
    \u0275\u0275text(55, "Identification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 36)(57, "mat-form-field", 37)(58, "mat-label");
    \u0275\u0275text(59, "ID Document Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "mat-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_mat_select_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.idDocumentType, $event) || (ctx_r1.newCustomer.idDocumentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(61, SendMoneyComponent_div_29_div_16_mat_option_61_Template, 2, 2, "mat-option", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "mat-form-field", 37)(63, "mat-label");
    \u0275\u0275text(64, "ID Document Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.idDocumentNumber, $event) || (ctx_r1.newCustomer.idDocumentNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "mat-form-field", 37)(67, "mat-label");
    \u0275\u0275text(68, "Issuing Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "mat-select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_mat_select_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.docIssuingCountry, $event) || (ctx_r1.newCustomer.docIssuingCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(70, SendMoneyComponent_div_29_div_16_mat_option_70_Template, 2, 2, "mat-option", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "mat-form-field", 37)(72, "mat-label");
    \u0275\u0275text(73, "Issue Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.docIssueDate, $event) || (ctx_r1.newCustomer.docIssueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "mat-datepicker-toggle", 42)(76, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "mat-form-field", 37)(79, "mat-label");
    \u0275\u0275text(80, "Expiry Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_16_Template_input_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCustomer.docExpiryDate, $event) || (ctx_r1.newCustomer.docExpiryDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "mat-datepicker-toggle", 42)(83, "mat-datepicker", null, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 54)(86, "button", 55);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_div_16_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCreateCustomer());
    });
    \u0275\u0275text(87, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "button", 25);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_div_16_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveNewCustomer());
    });
    \u0275\u0275template(89, SendMoneyComponent_div_29_div_16_mat_spinner_89_Template, 1, 0, "mat-spinner", 56)(90, SendMoneyComponent_div_29_div_16_mat_icon_90_Template, 2, 0, "mat-icon", 7);
    \u0275\u0275text(91, " Save Customer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dobPicker_r8 = \u0275\u0275reference(23);
    const issuePicker_r9 = \u0275\u0275reference(77);
    const expiryPicker_r10 = \u0275\u0275reference(84);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerFormError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", dobPicker_r8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.dateOfBirth);
    \u0275\u0275advance();
    \u0275\u0275property("for", dobPicker_r8);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.gender);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.nationality);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.address);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.idDocumentType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.idTypes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.idDocumentNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.docIssuingCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", issuePicker_r9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.docIssueDate);
    \u0275\u0275advance();
    \u0275\u0275property("for", issuePicker_r9);
    \u0275\u0275advance(6);
    \u0275\u0275property("matDatepicker", expiryPicker_r10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCustomer.docExpiryDate);
    \u0275\u0275advance();
    \u0275\u0275property("for", expiryPicker_r10);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.savingCustomer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingCustomer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.savingCustomer);
  }
}
function SendMoneyComponent_div_29_div_17_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_div_17_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.customerSearch = "";
      return \u0275\u0275resetView(ctx_r1.filterCustomers());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_29_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "mat-icon");
    \u0275\u0275text(2, "person_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No customers found. Create a new one above.");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_29_div_17_div_10_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", c_r14.email, "");
  }
}
function SendMoneyComponent_div_29_div_17_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_div_17_div_10_Template_div_click_0_listener() {
      const c_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCustomer(c_r14));
    });
    \u0275\u0275elementStart(1, "div", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71)(4, "div", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 73);
    \u0275\u0275text(7);
    \u0275\u0275template(8, SendMoneyComponent_div_29_div_17_div_10_span_8_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 74);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.selectedCustomerId === c_r14.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r14.fullName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r14.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r14.phone, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r14.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r14.country);
  }
}
function SendMoneyComponent_div_29_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "mat-form-field", 60)(2, "mat-label");
    \u0275\u0275text(3, "Search customers by name, email, or phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 61);
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_29_div_17_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerSearch, $event) || (ctx_r1.customerSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_29_div_17_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterCustomers());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SendMoneyComponent_div_29_div_17_button_7_Template, 3, 0, "button", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 64);
    \u0275\u0275template(9, SendMoneyComponent_div_29_div_17_div_9_Template, 5, 0, "div", 65)(10, SendMoneyComponent_div_29_div_17_div_10_Template, 11, 7, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
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
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-card", 17)(2, "mat-card-content")(3, "div", 18)(4, "h3")(5, "mat-icon");
    \u0275\u0275text(6, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Select or Create Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 19);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateCustomer());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, SendMoneyComponent_div_29_div_12_Template, 5, 0, "div", 20)(13, SendMoneyComponent_div_29_div_13_Template, 14, 5, "div", 21)(14, SendMoneyComponent_div_29_div_14_Template, 5, 1, "div", 20)(15, SendMoneyComponent_div_29_div_15_Template, 5, 1, "div", 20)(16, SendMoneyComponent_div_29_div_16_Template, 92, 27, "div", 22)(17, SendMoneyComponent_div_29_div_17_Template, 11, 4, "div", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 23);
    \u0275\u0275element(19, "span", 24);
    \u0275\u0275elementStart(20, "button", 25);
    \u0275\u0275listener("click", function SendMoneyComponent_div_29_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(21, " Next: Calculate Amount ");
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "arrow_forward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.showCreateCustomer ? "close" : "person_add");
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
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.canProceedStep1());
  }
}
function SendMoneyComponent_div_30_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
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
function SendMoneyComponent_div_30_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r17 = ctx.$implicit;
    \u0275\u0275property("value", m_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r17.name);
  }
}
function SendMoneyComponent_div_30_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "mat-icon");
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
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
function SendMoneyComponent_div_30_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275element(1, "mat-progress-bar", 96);
    \u0275\u0275elementStart(2, "span", 97);
    \u0275\u0275text(3, "Calculating...");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_30_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
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
function SendMoneyComponent_div_30_div_56_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" 1 ", ctx_r1.senderCurrency, " = ", \u0275\u0275pipeBind2(2, 3, ctx_r1.exchangeRate, "1.4-4"), " ", ctx_r1.receiverCurrency, " ");
  }
}
function SendMoneyComponent_div_30_div_56_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_30_div_56_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "mat-icon");
    \u0275\u0275text(3, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.balanceWarning);
  }
}
function SendMoneyComponent_div_30_div_56_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r18 = ctx.$implicit;
    \u0275\u0275classMap(v_r18.action === "Block" ? "compliance-block" : "compliance-warn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r18.action === "Block" ? "block" : "warning");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r18.ruleName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(": ", v_r18.description, "");
  }
}
function SendMoneyComponent_div_30_div_56_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275template(1, SendMoneyComponent_div_30_div_56_div_34_div_1_Template, 7, 5, "div", 114);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.complianceViolations);
  }
}
function SendMoneyComponent_div_30_div_56_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ready to proceed ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_30_div_56_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "mat-icon");
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Transaction blocked by compliance rules. Cannot proceed.");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_30_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 99)(2, "span", 100);
    \u0275\u0275text(3, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 101);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "mat-divider");
    \u0275\u0275elementStart(8, "div", 99)(9, "span", 100);
    \u0275\u0275text(10, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SendMoneyComponent_div_30_div_56_span_11_Template, 3, 6, "span", 102)(12, SendMoneyComponent_div_30_div_56_span_12_Template, 2, 0, "span", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 99)(14, "span", 100);
    \u0275\u0275text(15, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 104);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "mat-divider");
    \u0275\u0275elementStart(20, "div", 105)(21, "span");
    \u0275\u0275text(22, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 106);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "mat-divider");
    \u0275\u0275elementStart(27, "div", 107)(28, "span");
    \u0275\u0275text(29, "Customer Pays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, SendMoneyComponent_div_30_div_56_div_33_Template, 6, 1, "div", 108)(34, SendMoneyComponent_div_30_div_56_div_34_Template, 2, 1, "div", 108)(35, SendMoneyComponent_div_30_div_56_div_35_Template, 4, 0, "div", 109)(36, SendMoneyComponent_div_30_div_56_div_36_Template, 5, 0, "div", 93);
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
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 75)(2, "mat-card", 17)(3, "mat-card-content")(4, "h3", 76)(5, "mat-icon");
    \u0275\u0275text(6, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Transfer Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 35);
    \u0275\u0275text(9, "Sending From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 77)(11, "mat-icon");
    \u0275\u0275text(12, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 78)(14, "span", 79);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 80);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 35);
    \u0275\u0275text(19, "Sending To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 81)(21, "mat-form-field", 37)(22, "mat-label");
    \u0275\u0275text(23, "Destination Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-select", 82);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_30_Template_mat_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.receiverCountry, $event) || (ctx_r1.receiverCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function SendMoneyComponent_div_30_Template_mat_select_selectionChange_24_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReceiverCountryChange());
    });
    \u0275\u0275template(25, SendMoneyComponent_div_30_mat_option_25_Template, 2, 2, "mat-option", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 37)(27, "mat-label");
    \u0275\u0275text(28, "Receiver Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 35);
    \u0275\u0275text(31, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 84)(33, "mat-form-field", 37)(34, "mat-label");
    \u0275\u0275text(35, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_30_Template_mat_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedPaymentMethodId, $event) || (ctx_r1.selectedPaymentMethodId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function SendMoneyComponent_div_30_Template_mat_select_selectionChange_36_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPaymentMethodChange());
    });
    \u0275\u0275template(37, SendMoneyComponent_div_30_mat_option_37_Template, 2, 2, "mat-option", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, SendMoneyComponent_div_30_div_38_Template, 5, 1, "div", 86);
    \u0275\u0275elementStart(39, "div", 35);
    \u0275\u0275text(40, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 84)(42, "mat-form-field", 87)(43, "mat-label");
    \u0275\u0275text(44, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_30_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sendAmount, $event) || (ctx_r1.sendAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_30_Template_input_ngModelChange_45_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAmountChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 89);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(48, "mat-card", 90)(49, "mat-card-content")(50, "h3", 91)(51, "mat-icon");
    \u0275\u0275text(52, "calculate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Calculation ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, SendMoneyComponent_div_30_div_54_Template, 4, 0, "div", 92)(55, SendMoneyComponent_div_30_div_55_Template, 5, 1, "div", 93)(56, SendMoneyComponent_div_30_div_56_Template, 37, 26, "div", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 23)(58, "button", 55);
    \u0275\u0275listener("click", function SendMoneyComponent_div_30_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275elementStart(59, "mat-icon");
    \u0275\u0275text(60, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "span", 24);
    \u0275\u0275elementStart(63, "button", 25);
    \u0275\u0275listener("click", function SendMoneyComponent_div_30_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(64, " Next: Select Receiver ");
    \u0275\u0275elementStart(65, "mat-icon");
    \u0275\u0275text(66, "arrow_forward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate((ctx_r1.agentProfile == null ? null : ctx_r1.agentProfile.businessName) || "Agent");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.senderCountry, " \xB7 ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.receiverCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.receiverCurrency || "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedPaymentMethodId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.routeError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sendAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.senderCurrency || "---");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.loadingCalc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.calcError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingCalc && !ctx_r1.calcError);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", !ctx_r1.canProceedStep2());
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
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 28)(2, "div", 119);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 31);
    \u0275\u0275template(8, SendMoneyComponent_div_31_div_12_span_8_Template, 2, 1, "span", 7)(9, SendMoneyComponent_div_31_div_12_span_9_Template, 2, 1, "span", 7)(10, SendMoneyComponent_div_31_div_12_span_10_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 32);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_12_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSelectedReceiver());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "close");
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
    \u0275\u0275elementStart(0, "div", 57)(1, "mat-icon");
    \u0275\u0275text(2, "error");
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
function SendMoneyComponent_div_31_div_13_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r22 = ctx.$implicit;
    \u0275\u0275property("value", c_r22.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r22.name);
  }
}
function SendMoneyComponent_div_31_div_13_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "Bank Details");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_31_div_13_div_42_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r24 = ctx.$implicit;
    \u0275\u0275property("value", b_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r24.bankName);
  }
}
function SendMoneyComponent_div_31_div_13_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 128)(2, "mat-form-field", 37)(3, "mat-label");
    \u0275\u0275text(4, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 129);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_div_42_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedBankId, $event) || (ctx_r1.selectedBankId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function SendMoneyComponent_div_31_div_13_div_42_Template_mat_select_selectionChange_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onBankSelected());
    });
    \u0275\u0275template(6, SendMoneyComponent_div_31_div_13_div_42_mat_option_6_Template, 2, 2, "mat-option", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 130);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_13_div_42_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBranchPopup());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "account_tree");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "mat-form-field", 37)(11, "mat-label");
    \u0275\u0275text(12, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 131);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_div_42_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReceiver.accountNumber, $event) || (ctx_r1.newReceiver.accountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedBankId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.payoutBanks);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.newReceiver.bankName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReceiver.accountNumber);
  }
}
function SendMoneyComponent_div_31_div_13_div_43_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.selectedBranch.branchCode, ")");
  }
}
function SendMoneyComponent_div_31_div_13_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "mat-icon");
    \u0275\u0275text(2, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Branch: ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SendMoneyComponent_div_31_div_13_div_43_span_7_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 133);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_13_div_43_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedBranch = null);
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedBranch.branchName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBranch.branchCode);
  }
}
function SendMoneyComponent_div_31_div_13_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "Locations");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_31_div_13_div_45_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r27 = ctx.$implicit;
    \u0275\u0275property("value", l_r27.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r27.locationName);
  }
}
function SendMoneyComponent_div_31_div_13_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "mat-form-field", 37)(2, "mat-label");
    \u0275\u0275text(3, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 134);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_div_45_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLocationId, $event) || (ctx_r1.selectedLocationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function SendMoneyComponent_div_31_div_13_div_45_Template_mat_select_selectionChange_4_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onLocationSelected());
    });
    \u0275\u0275template(5, SendMoneyComponent_div_31_div_13_div_45_mat_option_5_Template, 2, 2, "mat-option", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLocationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.payoutLocations);
  }
}
function SendMoneyComponent_div_31_div_13_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "Wallet Details");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_31_div_13_div_47_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r29 = ctx.$implicit;
    \u0275\u0275property("value", l_r29.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r29.locationName);
  }
}
function SendMoneyComponent_div_31_div_13_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "mat-form-field", 37)(2, "mat-label");
    \u0275\u0275text(3, "Wallet Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 135);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_div_47_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLocationId, $event) || (ctx_r1.selectedLocationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function SendMoneyComponent_div_31_div_13_div_47_Template_mat_select_selectionChange_4_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onLocationSelected());
    });
    \u0275\u0275template(5, SendMoneyComponent_div_31_div_13_div_47_mat_option_5_Template, 2, 2, "mat-option", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 37)(7, "mat-label");
    \u0275\u0275text(8, "Wallet Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 136);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_div_47_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReceiver.accountNumber, $event) || (ctx_r1.newReceiver.accountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLocationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.payoutLocations);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReceiver.accountNumber);
  }
}
function SendMoneyComponent_div_31_div_13_mat_spinner_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 59);
  }
}
function SendMoneyComponent_div_31_div_13_mat_icon_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_31_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, SendMoneyComponent_div_31_div_13_div_1_Template, 4, 1, "div", 34);
    \u0275\u0275elementStart(2, "div", 35);
    \u0275\u0275text(3, "Receiver Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "mat-form-field", 37)(6, "mat-label");
    \u0275\u0275text(7, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReceiver.fullName, $event) || (ctx_r1.newReceiver.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 37)(10, "mat-label");
    \u0275\u0275text(11, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReceiver.phone, $event) || (ctx_r1.newReceiver.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 37)(14, "mat-label");
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReceiver.email, $event) || (ctx_r1.newReceiver.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 35);
    \u0275\u0275text(18, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 36)(20, "mat-form-field", 37)(21, "mat-label");
    \u0275\u0275text(22, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_Template_mat_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReceiver.country, $event) || (ctx_r1.newReceiver.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(24, SendMoneyComponent_div_31_div_13_mat_option_24_Template, 2, 2, "mat-option", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-form-field", 37)(26, "mat-label");
    \u0275\u0275text(27, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReceiver.city, $event) || (ctx_r1.newReceiver.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-form-field", 37)(30, "mat-label");
    \u0275\u0275text(31, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-select", 120);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_13_Template_mat_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReceiver.relationship, $event) || (ctx_r1.newReceiver.relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "mat-option", 121);
    \u0275\u0275text(34, "Family");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-option", 122);
    \u0275\u0275text(36, "Friend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-option", 123);
    \u0275\u0275text(38, "Business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-option", 46);
    \u0275\u0275text(40, "Other");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(41, SendMoneyComponent_div_31_div_13_div_41_Template, 2, 0, "div", 124)(42, SendMoneyComponent_div_31_div_13_div_42_Template, 14, 4, "div", 125)(43, SendMoneyComponent_div_31_div_13_div_43_Template, 11, 2, "div", 126)(44, SendMoneyComponent_div_31_div_13_div_44_Template, 2, 0, "div", 124)(45, SendMoneyComponent_div_31_div_13_div_45_Template, 6, 2, "div", 127)(46, SendMoneyComponent_div_31_div_13_div_46_Template, 2, 0, "div", 124)(47, SendMoneyComponent_div_31_div_13_div_47_Template, 10, 3, "div", 125);
    \u0275\u0275elementStart(48, "div", 54)(49, "button", 55);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_13_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCreateReceiver());
    });
    \u0275\u0275text(50, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 25);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_13_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveNewReceiver());
    });
    \u0275\u0275template(52, SendMoneyComponent_div_31_div_13_mat_spinner_52_Template, 1, 0, "mat-spinner", 56)(53, SendMoneyComponent_div_31_div_13_mat_icon_53_Template, 2, 0, "mat-icon", 7);
    \u0275\u0275text(54, " Save Receiver ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverFormError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReceiver.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReceiver.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReceiver.email);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReceiver.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReceiver.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReceiver.relationship);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.isBankTransfer());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBankTransfer());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBankTransfer() && ctx_r1.selectedBranch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCashTransfer());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCashTransfer());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isWalletTransfer());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isWalletTransfer());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.savingReceiver);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingReceiver);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.savingReceiver);
  }
}
function SendMoneyComponent_div_31_div_14_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_14_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.receiverSearch = "";
      return \u0275\u0275resetView(ctx_r1.filterReceivers());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_31_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "mat-icon");
    \u0275\u0275text(2, "person_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("No receivers found for ", ctx_r1.receiverCountry, ". Create a new one above.");
  }
}
function SendMoneyComponent_div_31_div_14_div_10_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", r_r33.bankName, "");
  }
}
function SendMoneyComponent_div_31_div_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_div_14_div_10_Template_div_click_0_listener() {
      const r_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectReceiver(r_r33));
    });
    \u0275\u0275elementStart(1, "div", 137);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71)(4, "div", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 73);
    \u0275\u0275text(7);
    \u0275\u0275template(8, SendMoneyComponent_div_31_div_14_div_10_span_8_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 74);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r33 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.selectedReceiverId === r_r33.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r33.fullName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r33.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r33.phone, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r33.bankName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r33.country);
  }
}
function SendMoneyComponent_div_31_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "mat-form-field", 60)(2, "mat-label");
    \u0275\u0275text(3, "Search receivers by name or phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 61);
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_31_div_14_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.receiverSearch, $event) || (ctx_r1.receiverSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_31_div_14_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterReceivers());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SendMoneyComponent_div_31_div_14_button_7_Template, 3, 0, "button", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 64);
    \u0275\u0275template(9, SendMoneyComponent_div_31_div_14_div_9_Template, 5, 1, "div", 65)(10, SendMoneyComponent_div_31_div_14_div_10_Template, 11, 7, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.receiverSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.receiverSearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filteredReceivers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredReceivers);
  }
}
function SendMoneyComponent_div_31_mat_card_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 138)(1, "mat-card-content")(2, "h3", 76)(3, "mat-icon");
    \u0275\u0275text(4, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Transaction Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 139)(7, "div", 140)(8, "span", 141);
    \u0275\u0275text(9, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 142);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 140)(13, "span", 141);
    \u0275\u0275text(14, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 142);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 140)(18, "span", 141);
    \u0275\u0275text(19, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 142);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 140)(23, "span", 141);
    \u0275\u0275text(24, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 142);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 140)(28, "span", 141);
    \u0275\u0275text(29, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 142);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 140)(34, "span", 141);
    \u0275\u0275text(35, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 143);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 140)(40, "span", 141);
    \u0275\u0275text(41, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 142);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 140)(46, "span", 141);
    \u0275\u0275text(47, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 142);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 140)(52, "span", 141);
    \u0275\u0275text(53, "Payout Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 142);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 140)(57, "span", 141);
    \u0275\u0275text(58, "Total Payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 144);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.selectedCustomer == null ? null : ctx_r1.selectedCustomer.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedReceiver.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.senderCountry, " (", ctx_r1.senderCurrency, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.receiverCountry, " (", ctx_r1.receiverCurrency, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(32, 16, ctx_r1.sendAmount, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(38, 19, ctx_r1.receiveAmount, "1.2-2"), " ", ctx_r1.receiverCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 22, ctx_r1.exchangeRate, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(50, 25, ctx_r1.serviceCharge, "1.2-2"), " ", ctx_r1.senderCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getPayoutModeName());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(61, 28, ctx_r1.totalPayable, "1.2-2"), " ", ctx_r1.senderCurrency, "");
  }
}
function SendMoneyComponent_div_31_mat_spinner_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 59);
  }
}
function SendMoneyComponent_div_31_mat_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-card", 17)(2, "mat-card-content")(3, "div", 18)(4, "h3")(5, "mat-icon");
    \u0275\u0275text(6, "person_pin");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Select or Create Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 19);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateReceiver());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, SendMoneyComponent_div_31_div_12_Template, 14, 5, "div", 116)(13, SendMoneyComponent_div_31_div_13_Template, 55, 18, "div", 22)(14, SendMoneyComponent_div_31_div_14_Template, 11, 4, "div", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, SendMoneyComponent_div_31_mat_card_15_Template, 62, 31, "mat-card", 117);
    \u0275\u0275elementStart(16, "div", 23)(17, "button", 55);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "span", 24);
    \u0275\u0275elementStart(22, "button", 25);
    \u0275\u0275listener("click", function SendMoneyComponent_div_31_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitTransaction());
    });
    \u0275\u0275template(23, SendMoneyComponent_div_31_mat_spinner_23_Template, 1, 0, "mat-spinner", 56)(24, SendMoneyComponent_div_31_mat_icon_24_Template, 2, 0, "mat-icon", 7);
    \u0275\u0275text(25, " Submit Transaction ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.showCreateReceiver ? "close" : "person_add");
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
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", !ctx_r1.canProceedStep3() || ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitting);
  }
}
function SendMoneyComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-card", 145)(2, "mat-card-content")(3, "div", 146)(4, "mat-icon");
    \u0275\u0275text(5, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2", 147);
    \u0275\u0275text(7, "Transaction Submitted!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 148);
    \u0275\u0275text(9, "Reference: ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 149)(13, "div", 150)(14, "span");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 151);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "mat-divider");
    \u0275\u0275elementStart(19, "div", 150)(20, "span");
    \u0275\u0275text(21, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 150)(26, "span");
    \u0275\u0275text(27, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 150)(32, "span");
    \u0275\u0275text(33, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 152);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 150)(38, "span");
    \u0275\u0275text(39, "Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "mat-divider");
    \u0275\u0275elementStart(44, "div", 150)(45, "span");
    \u0275\u0275text(46, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 150)(50, "span");
    \u0275\u0275text(51, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 150)(55, "span");
    \u0275\u0275text(56, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 153)(61, "button", 55);
    \u0275\u0275listener("click", function SendMoneyComponent_div_32_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadReceipt());
    });
    \u0275\u0275elementStart(62, "mat-icon");
    \u0275\u0275text(63, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Download Receipt ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 154);
    \u0275\u0275listener("click", function SendMoneyComponent_div_32_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startNewTransaction());
    });
    \u0275\u0275elementStart(66, "mat-icon");
    \u0275\u0275text(67, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " New Transaction ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.successResult.referenceNumber);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(ctx_r1.successResult.status));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(24, 14, ctx_r1.successResult.sendAmount, "1.2-2"), " ", ctx_r1.successResult.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("1 ", ctx_r1.successResult.sendCurrency, " = ", \u0275\u0275pipeBind2(30, 17, ctx_r1.successResult.exchangeRateApplied, "1.4-4"), " ", ctx_r1.successResult.receiveCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(36, 20, ctx_r1.successResult.receiveAmount, "1.2-2"), " ", ctx_r1.successResult.receiveCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(42, 23, ctx_r1.successResult.totalCommission, "1.2-2"), " ", ctx_r1.successResult.sendCurrency, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.successResult.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.successResult.receiverName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 26, ctx_r1.successResult.createdAt, "medium"));
  }
}
function SendMoneyComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275listener("click", function SendMoneyComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePinDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_34_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 166);
    \u0275\u0275text(1, " Create a 4\u20136 digit PIN to authorize transactions. You'll need this PIN every time you send money. ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_34_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 166);
    \u0275\u0275text(1, " Enter your transaction PIN to confirm this transfer. ");
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_34_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "mat-icon");
    \u0275\u0275text(2, "error");
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
function SendMoneyComponent_div_34_mat_form_field_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 162)(1, "mat-label");
    \u0275\u0275text(2, "Confirm PIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 168);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_34_mat_form_field_19_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pinConfirm, $event) || (ctx_r1.pinConfirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SendMoneyComponent_div_34_mat_form_field_19_Template_input_keydown_enter_3_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPinSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 61);
    \u0275\u0275text(5, "lock");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pinConfirm);
  }
}
function SendMoneyComponent_div_34_mat_spinner_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 59);
  }
}
function SendMoneyComponent_div_34_mat_icon_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pinMode === "set" ? "lock" : "send");
  }
}
function SendMoneyComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 156)(1, "div", 157)(2, "h3")(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 158);
    \u0275\u0275listener("click", function SendMoneyComponent_div_34_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePinDialog());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 159);
    \u0275\u0275template(10, SendMoneyComponent_div_34_p_10_Template, 2, 0, "p", 160)(11, SendMoneyComponent_div_34_p_11_Template, 2, 0, "p", 160)(12, SendMoneyComponent_div_34_div_12_Template, 4, 1, "div", 161);
    \u0275\u0275elementStart(13, "mat-form-field", 162)(14, "mat-label");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 163);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_34_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pinInput, $event) || (ctx_r1.pinInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SendMoneyComponent_div_34_Template_input_keydown_enter_16_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPinSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-icon", 61);
    \u0275\u0275text(18, "lock");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, SendMoneyComponent_div_34_mat_form_field_19_Template, 6, 1, "mat-form-field", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 165)(21, "button", 55);
    \u0275\u0275listener("click", function SendMoneyComponent_div_34_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePinDialog());
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 25);
    \u0275\u0275listener("click", function SendMoneyComponent_div_34_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPinSubmit());
    });
    \u0275\u0275template(24, SendMoneyComponent_div_34_mat_spinner_24_Template, 1, 0, "mat-spinner", 56)(25, SendMoneyComponent_div_34_mat_icon_25_Template, 2, 1, "mat-icon", 7);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.pinMode === "set" ? "lock" : "vpn_key");
    \u0275\u0275advance();
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
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.pinMode === "set");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.pinLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pinLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pinLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pinMode === "set" ? "Set PIN" : "Confirm & Send", " ");
  }
}
function SendMoneyComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275listener("click", function SendMoneyComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBranchPopup());
    });
    \u0275\u0275elementEnd();
  }
}
function SendMoneyComponent_div_36_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function SendMoneyComponent_div_36_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.branchSearch = "";
      return \u0275\u0275resetView(ctx_r1.filterBranches());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_36_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "mat-icon");
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No branches found.");
    \u0275\u0275elementEnd()();
  }
}
function SendMoneyComponent_div_36_div_18_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Code: ", br_r42.branchCode, "");
  }
}
function SendMoneyComponent_div_36_div_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", br_r42.address, "");
  }
}
function SendMoneyComponent_div_36_div_18_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const br_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", br_r42.contactPhone, "");
  }
}
function SendMoneyComponent_div_36_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275listener("click", function SendMoneyComponent_div_36_div_18_Template_div_click_0_listener() {
      const br_r42 = \u0275\u0275restoreView(_r41).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectBranch(br_r42));
    });
    \u0275\u0275elementStart(1, "div", 177)(2, "mat-icon");
    \u0275\u0275text(3, "location_city");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 178)(5, "div", 179);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 180);
    \u0275\u0275template(8, SendMoneyComponent_div_36_div_18_span_8_Template, 2, 1, "span", 7)(9, SendMoneyComponent_div_36_div_18_span_9_Template, 2, 1, "span", 7)(10, SendMoneyComponent_div_36_div_18_span_10_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const br_r42 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", (ctx_r1.selectedBranch == null ? null : ctx_r1.selectedBranch.id) === br_r42.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(br_r42.branchName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", br_r42.branchCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", br_r42.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", br_r42.contactPhone);
  }
}
function SendMoneyComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 170)(1, "div", 171)(2, "h3")(3, "mat-icon");
    \u0275\u0275text(4, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 158);
    \u0275\u0275listener("click", function SendMoneyComponent_div_36_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBranchPopup());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-form-field", 172)(10, "mat-label");
    \u0275\u0275text(11, "Search branches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-icon", 61);
    \u0275\u0275text(13, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 173);
    \u0275\u0275twoWayListener("ngModelChange", function SendMoneyComponent_div_36_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.branchSearch, $event) || (ctx_r1.branchSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SendMoneyComponent_div_36_Template_input_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterBranches());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SendMoneyComponent_div_36_button_15_Template, 3, 0, "button", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 174);
    \u0275\u0275template(17, SendMoneyComponent_div_36_div_17_Template, 5, 0, "div", 65)(18, SendMoneyComponent_div_36_div_18_Template, 11, 6, "div", 175);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Select Branch \u2014 ", ctx_r1.branchBank == null ? null : ctx_r1.branchBank.bankName, "");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.branchSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.branchSearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filteredBranches.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredBranches);
  }
}
var SendMoneyComponent = class _SendMoneyComponent {
  constructor(api, auth, router, notify) {
    this.api = api;
    this.auth = auth;
    this.router = router;
    this.notify = notify;
    this.step = 0;
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
    this.countries = [];
    this.paymentMethods = [];
    this.allCorridors = [];
    this.customers = [];
    this.filteredCustomers = [];
    this.customerSearch = "";
    this.selectedCustomerId = null;
    this.selectedCustomer = null;
    this.showCreateCustomer = false;
    this.newCustomer = this.emptyCustomerForm();
    this.customerFormError = "";
    this.savingCustomer = false;
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
    this.newReceiver = this.emptyReceiverForm();
    this.receiverFormError = "";
    this.savingReceiver = false;
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
  }
  clearSelectedCustomer() {
    this.selectedCustomerId = null;
    this.selectedCustomer = null;
    this.kycWarning = "";
    this.dobWarning = "";
  }
  toggleCreateCustomer() {
    this.showCreateCustomer = !this.showCreateCustomer;
    this.customerFormError = "";
    if (this.showCreateCustomer) {
      this.newCustomer = this.emptyCustomerForm();
    }
  }
  saveNewCustomer() {
    this.customerFormError = "";
    if (!this.newCustomer.fullName?.trim()) {
      this.customerFormError = "Full name is required.";
      return;
    }
    if (!this.newCustomer.phone?.trim()) {
      this.customerFormError = "Phone is required.";
      return;
    }
    if (!this.newCustomer.country?.trim()) {
      this.customerFormError = "Country is required.";
      return;
    }
    this.savingCustomer = true;
    this.api.createAgentCustomer(this.newCustomer).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.customers.push(res.data);
          this.filteredCustomers = [...this.customers];
          this.selectCustomer(res.data);
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
  emptyCustomerForm() {
    return {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      country: "",
      city: "",
      state: "",
      postalCode: "",
      address: "",
      idDocumentType: "",
      idDocumentNumber: "",
      docIssueDate: "",
      docExpiryDate: "",
      docIssuingCountry: ""
    };
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
    this.findRoute();
    this.triggerCalculation();
  }
  onAmountChange() {
    this.triggerCalculation();
  }
  triggerCalculation() {
    this.calculationDone = false;
    this.calcError = "";
    this.complianceViolations = [];
    this.complianceBlocked = false;
    this.balanceWarning = "";
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
  /**
   * Call backend to calculate exchange rate, receive amount, service charge, and total payable.
   */
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
        } else {
          this.calcError = res?.message || "Calculation failed.";
          this.calculationDone = false;
        }
        this.loadingCalc = false;
      },
      error: (err) => {
        this.calcError = err?.error?.message || "Failed to calculate. Please try again.";
        this.calculationDone = false;
        this.loadingCalc = false;
      }
    });
  }
  /**
   * Auto-find corridor and payout partner based on:
   * - Sender country/currency (from agent profile)
   * - Receiver country/currency (from selection)
   * - Selected payment method
   */
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
    } else {
      this.routeError = `The selected payment method is not available for ${this.receiverCountry}. Please choose a different method.`;
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
  }
  clearSelectedReceiver() {
    this.selectedReceiverId = null;
    this.selectedReceiver = null;
  }
  toggleCreateReceiver() {
    this.showCreateReceiver = !this.showCreateReceiver;
    this.receiverFormError = "";
    if (this.showCreateReceiver) {
      this.newReceiver = this.emptyReceiverForm();
      this.newReceiver.country = this.receiverCountry;
    }
  }
  saveNewReceiver() {
    this.receiverFormError = "";
    if (!this.newReceiver.fullName?.trim()) {
      this.receiverFormError = "Full name is required.";
      return;
    }
    if (!this.newReceiver.phone?.trim()) {
      this.receiverFormError = "Phone is required.";
      return;
    }
    this.savingReceiver = true;
    const selBank = this.selectedBankId ? this.payoutBanks.find((b) => b.id === this.selectedBankId) : null;
    if (selBank) {
      this.newReceiver.bankCode = selBank.bankCode || "";
      this.newReceiver.bankId = selBank.id;
    }
    if (this.selectedBranch) {
      this.newReceiver.branchName = this.selectedBranch.branchName;
      this.newReceiver.branchCode = this.selectedBranch.branchCode || "";
      this.newReceiver.branchId = this.selectedBranch.id;
    }
    const dto = __spreadProps(__spreadValues({}, this.newReceiver), { customerId: this.selectedCustomerId });
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
  emptyReceiverForm() {
    return {
      fullName: "",
      phone: "",
      email: "",
      country: "",
      city: "",
      bankName: "",
      bankCode: "",
      accountNumber: "",
      branchName: "",
      branchCode: "",
      bankId: null,
      branchId: null,
      relationship: ""
    };
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
      this.newReceiver.bankName = bank.bankName;
      this.newReceiver.bankCode = bank.bankCode || "";
      this.newReceiver.bankId = bank.id;
    }
  }
  onLocationSelected() {
    const loc = this.payoutLocations.find((l) => l.id === this.selectedLocationId);
    if (loc) {
      this.newReceiver.bankName = loc.locationName;
      this.newReceiver.bankCode = loc.locationCode || "";
      this.newReceiver.bankId = loc.id;
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
    this.step++;
  }
  prevStep() {
    if (this.step > 0)
      this.step--;
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
        this.pinError = "PIN must be 4\u20136 digits.";
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
        this.pinError = "Enter your 4\u20136 digit PIN.";
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
          this.step = 3;
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
    this.step = 0;
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SendMoneyComponent, selectors: [["app-send-money"]], features: [\u0275\u0275ProvidersFeature([provideNativeDateAdapter()])], decls: 37, vars: 36, consts: [["dobPicker", ""], ["issuePicker", ""], ["expiryPicker", ""], [1, "send-money"], [1, "steps-header"], [1, "step-indicator", 3, "click"], [1, "step-circle"], [4, "ngIf"], [1, "step-text"], [1, "step-line"], [1, "step-indicator"], ["class", "step-panel", 4, "ngIf"], ["class", "pin-overlay", 3, "click", 4, "ngIf"], ["class", "pin-dialog", 4, "ngIf"], ["class", "branch-overlay", 3, "click", 4, "ngIf"], ["class", "branch-popup", 4, "ngIf"], [1, "step-panel"], ["appearance", "outlined", 1, "panel-card"], [1, "panel-header"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["class", "warn-alert warn-alert--block", 4, "ngIf"], ["class", "selected-banner", 4, "ngIf"], ["class", "create-form", 4, "ngIf"], [1, "step-actions"], [1, "spacer"], ["mat-flat-button", "", "color", "primary", 3, "click", "disabled"], [1, "warn-alert", "warn-alert--block"], [1, "selected-banner"], [1, "selected-info"], [1, "selected-avatar"], [1, "selected-name"], [1, "selected-detail"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove selection", 3, "click"], [1, "create-form"], ["class", "form-error", 4, "ngIf"], [1, "form-section-label"], [1, "form-grid", "cols-3"], ["appearance", "outline"], ["matInput", "", "placeholder", "Enter full name", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "+1 234 567 890", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "email", "placeholder", "email@example.com", 3, "ngModelChange", "ngModel"], ["matInput", "", "readonly", "", "placeholder", "Select date", 3, "ngModelChange", "matDatepicker", "ngModel"], ["matSuffix", "", 3, "for"], ["placeholder", "Select gender", 3, "ngModelChange", "ngModel"], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["matInput", "", "placeholder", "Nationality", 3, "ngModelChange", "ngModel"], ["searchable", "", "placeholder", "Select country", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "City", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "Street address", 3, "ngModelChange", "ngModel"], ["placeholder", "Select type", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "Document number", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["mat-stroked-button", "", 3, "click"], ["diameter", "18", "class", "btn-spinner", 4, "ngIf"], [1, "form-error"], [3, "value"], ["diameter", "18", 1, "btn-spinner"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Type to search...", 3, "ngModelChange", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], [1, "customer-list"], ["class", "empty-state", 4, "ngIf"], ["class", "list-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "empty-state"], [1, "list-item", 3, "click"], [1, "list-avatar"], [1, "list-info"], [1, "list-name"], [1, "list-detail"], [1, "list-badge"], [1, "calc-layout"], [1, "panel-title"], [1, "agent-info-bar"], [1, "agent-info-text"], [1, "agent-info-name"], [1, "agent-info-detail"], [1, "form-grid", "cols-2"], ["searchable", "", "placeholder", "Select destination country", 3, "ngModelChange", "selectionChange", "ngModel"], ["matInput", "", "readonly", "", 3, "value"], [1, "form-grid", "cols-1"], ["placeholder", "Select payment method", 3, "ngModelChange", "selectionChange", "ngModel"], ["class", "warn-alert", 4, "ngIf"], ["appearance", "outline", 1, "amount-field"], ["matInput", "", "type", "number", "min", "0", "placeholder", "0.00", 3, "ngModelChange", "ngModel"], ["matSuffix", "", 1, "currency-suffix"], ["appearance", "outlined", 1, "calc-card"], [1, "calc-title"], ["class", "calc-loading", 4, "ngIf"], ["class", "calc-error", 4, "ngIf"], [1, "warn-alert"], [1, "calc-loading"], ["mode", "indeterminate"], [1, "calc-loading-text"], [1, "calc-error"], [1, "calc-row"], [1, "calc-label"], [1, "calc-value-lg"], ["class", "calc-value-rate", 4, "ngIf"], ["class", "calc-no-rate", 4, "ngIf"], [1, "calc-value-receive"], [1, "calc-detail-row"], [1, "calc-detail-value"], [1, "calc-total-row"], ["class", "compliance-warnings", 4, "ngIf"], ["class", "calc-ready", 4, "ngIf"], [1, "calc-value-rate"], [1, "calc-no-rate"], [1, "compliance-warnings"], [1, "compliance-block"], [3, "class", 4, "ngFor", "ngForOf"], [1, "calc-ready"], ["class", "selected-banner receiver-banner", 4, "ngIf"], ["class", "summary-card", "appearance", "outlined", 4, "ngIf"], [1, "selected-banner", "receiver-banner"], [1, "selected-avatar", "receiver-avatar"], ["placeholder", "Select relationship", 3, "ngModelChange", "ngModel"], ["value", "Family"], ["value", "Friend"], ["value", "Business"], ["class", "form-section-label", 4, "ngIf"], ["class", "form-grid cols-2", 4, "ngIf"], ["class", "branch-selected-bar", 4, "ngIf"], ["class", "form-grid cols-1", 4, "ngIf"], [1, "field-with-action"], ["searchable", "", "placeholder", "Select bank", 3, "ngModelChange", "selectionChange", "ngModel"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Select Branch", 3, "click", "disabled"], ["matInput", "", "placeholder", "Account number", 3, "ngModelChange", "ngModel"], [1, "branch-selected-bar"], ["mat-icon-button", "", "matTooltip", "Remove branch", 3, "click"], ["searchable", "", "placeholder", "Select location", 3, "ngModelChange", "selectionChange", "ngModel"], ["searchable", "", "placeholder", "Select wallet", 3, "ngModelChange", "selectionChange", "ngModel"], ["matInput", "", "placeholder", "Wallet number", 3, "ngModelChange", "ngModel"], [1, "list-avatar", "receiver-avatar"], ["appearance", "outlined", 1, "summary-card"], [1, "summary-grid"], [1, "summary-item"], [1, "summary-label"], [1, "summary-value"], [1, "summary-value", "highlight"], [1, "summary-value", "total"], ["appearance", "outlined", 1, "success-card"], [1, "success-icon"], [1, "success-title"], [1, "success-ref"], [1, "success-details"], [1, "success-row"], [1, "status-badge"], [1, "success-amount"], [1, "success-actions"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "pin-overlay", 3, "click"], [1, "pin-dialog"], [1, "pin-dialog-header"], ["mat-icon-button", "", 3, "click"], [1, "pin-dialog-body"], ["class", "pin-hint", 4, "ngIf"], ["class", "pin-error", 4, "ngIf"], ["appearance", "outline", 1, "pin-field"], ["matInput", "", "type", "password", "maxlength", "6", "placeholder", "Enter PIN", "autocomplete", "off", 3, "ngModelChange", "keydown.enter", "ngModel"], ["appearance", "outline", "class", "pin-field", 4, "ngIf"], [1, "pin-dialog-actions"], [1, "pin-hint"], [1, "pin-error"], ["matInput", "", "type", "password", "maxlength", "6", "placeholder", "Confirm PIN", "autocomplete", "off", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "branch-overlay", 3, "click"], [1, "branch-popup"], [1, "branch-popup-header"], ["appearance", "outline", 1, "branch-search-field"], ["matInput", "", "placeholder", "Search by name, code, or address...", 3, "ngModelChange", "ngModel"], [1, "branch-list"], ["class", "branch-list-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "branch-list-item", 3, "click"], [1, "branch-list-icon"], [1, "branch-list-info"], [1, "branch-list-name"], [1, "branch-list-detail"]], template: function SendMoneyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
        \u0275\u0275listener("click", function SendMoneyComponent_Template_div_click_2_listener() {
          return ctx.step > 0 ? ctx.step = 0 : null;
        });
        \u0275\u0275elementStart(3, "div", 6);
        \u0275\u0275template(4, SendMoneyComponent_mat_icon_4_Template, 2, 0, "mat-icon", 7)(5, SendMoneyComponent_span_5_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 8);
        \u0275\u0275text(7, "Customer");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(8, "div", 9);
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275listener("click", function SendMoneyComponent_Template_div_click_9_listener() {
          return ctx.step > 1 ? ctx.step = 1 : null;
        });
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275template(11, SendMoneyComponent_mat_icon_11_Template, 2, 0, "mat-icon", 7)(12, SendMoneyComponent_span_12_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Calculate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(15, "div", 9);
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 6);
        \u0275\u0275template(18, SendMoneyComponent_mat_icon_18_Template, 2, 0, "mat-icon", 7)(19, SendMoneyComponent_span_19_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 8);
        \u0275\u0275text(21, "Receiver");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(22, "div", 9);
        \u0275\u0275elementStart(23, "div", 10)(24, "div", 6);
        \u0275\u0275template(25, SendMoneyComponent_mat_icon_25_Template, 2, 0, "mat-icon", 7)(26, SendMoneyComponent_span_26_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 8);
        \u0275\u0275text(28, "Done");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(29, SendMoneyComponent_div_29_Template, 24, 9, "div", 11)(30, SendMoneyComponent_div_30_Template, 67, 15, "div", 11)(31, SendMoneyComponent_div_31_Template, 26, 9, "div", 11)(32, SendMoneyComponent_div_32_Template, 69, 29, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, SendMoneyComponent_div_33_Template, 1, 0, "div", 12)(34, SendMoneyComponent_div_34_Template, 27, 12, "div", 13)(35, SendMoneyComponent_div_35_Template, 1, 0, "div", 14)(36, SendMoneyComponent_div_36_Template, 19, 5, "div", 15);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.step === 0)("done", ctx.step > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.step > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step <= 0);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("done", ctx.step > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.step === 1)("done", ctx.step > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.step > 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step <= 1);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("done", ctx.step > 1);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.step === 2)("done", ctx.step > 2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.step > 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step <= 2);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("done", ctx.step > 2);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.step === 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.step > 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step <= 2);
        \u0275\u0275advance(3);
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
      NgForOf,
      NgIf,
      DecimalPipe,
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      MaxLengthValidator,
      MinValidator,
      NgModel,
      RouterModule,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatStepperModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatProgressBarModule,
      MatProgressBar,
      MatDividerModule,
      MatDivider,
      MatTabsModule,
      MatTooltipModule,
      MatTooltip,
      MatDatepickerModule,
      MatDatepicker,
      MatDatepickerInput,
      MatDatepickerToggle,
      SearchableSelectDirective
    ], styles: ["\n\n.send-money[_ngcontent-%COMP%] {\n  padding: 0;\n  max-width: 1200px;\n}\n.steps-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  margin-bottom: 28px;\n  padding: 0 20px;\n}\n.step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  cursor: default;\n  min-width: 70px;\n}\n.step-indicator.done[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.step-circle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  background: #e0e0e0;\n  color: rgba(0, 0, 0, 0.6);\n  transition: all 0.2s;\n}\n.step-circle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: #1a56db;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(26, 86, 219, 0.35);\n}\n.done[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: #2e7d32;\n  color: #fff;\n}\n.step-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n}\n.active[_ngcontent-%COMP%]   .step-text[_ngcontent-%COMP%] {\n  color: #1a56db;\n  font-weight: 600;\n}\n.done[_ngcontent-%COMP%]   .step-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 3px;\n  background: #e0e0e0;\n  margin: 0 4px;\n  margin-bottom: 22px;\n  border-radius: 2px;\n  max-width: 120px;\n  transition: background 0.3s;\n}\n.step-line.done[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.error-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.875rem;\n}\n.error-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.error-alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.error-alert[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #d32f2f;\n}\n.warn-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-top: 12px;\n  background: #fff3e0;\n  border: 1px solid #ffe0b2;\n  border-radius: 8px;\n  color: #ed6c02;\n  font-size: 0.875rem;\n}\n.warn-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.warn-alert--block[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.info-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  background: #e8eefb;\n  border: 1px solid #c3d4f7;\n  border-radius: 8px;\n  color: #1a56db;\n  font-size: 0.875rem;\n}\n.info-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.step-panel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.panel-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n.panel-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a56db;\n}\n.panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 20px 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a56db;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px 16px;\n}\n.form-grid.cols-1[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.form-grid.cols-2[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n.form-grid.cols-3[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr 1fr;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-section-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #1a56db;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 12px 0 8px;\n  padding-bottom: 4px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.form-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  margin-bottom: 12px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.85rem;\n}\n.form-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.agent-info-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  background: #e8eefb;\n  border: 1px solid #c3d4f7;\n  border-radius: 10px;\n  margin-bottom: 16px;\n}\n.agent-info-bar[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #1a56db;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.agent-info-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.agent-info-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.agent-info-detail[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 1px;\n}\n.receiver-banner[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  border-color: #d8b4fe;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 16px;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.amount-field[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.currency-suffix[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\n.customer-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background 0.15s;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.list-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.list-item[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n}\n.list-item.selected[_ngcontent-%COMP%] {\n  background: #e8eefb;\n  border-left: 3px solid #1a56db;\n}\n.list-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #1a56db;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.receiver-avatar[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.list-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.list-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.list-detail[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.list-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 12px;\n  background: #f0f0f0;\n  color: rgba(0, 0, 0, 0.6);\n  white-space: nowrap;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 40px 20px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.selected-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n  border-radius: 10px;\n  margin-bottom: 12px;\n}\n.selected-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.selected-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #2e7d32;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 18px;\n}\n.selected-avatar.receiver-avatar[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.selected-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.selected-detail[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 2px;\n}\n.calc-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr;\n  gap: 24px;\n  align-items: start;\n}\n.route-matched-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  margin: 8px 0 4px;\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n  border-radius: 8px;\n  color: #2e7d32;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.route-matched-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.calc-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  position: sticky;\n  top: 80px;\n}\n.calc-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.calc-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.calc-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a56db;\n}\n.calc-row[_ngcontent-%COMP%] {\n  margin: 14px 0;\n}\n.calc-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 4px;\n}\n.calc-value-lg[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.calc-value-rate[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.calc-no-rate[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-style: italic;\n}\n.calc-value-receive[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #2e7d32;\n}\n.calc-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.7);\n}\n.calc-detail-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.calc-earning[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.calc-total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.calc-ready[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 16px;\n  padding: 10px 14px;\n  background: #e8f5e9;\n  border-radius: 8px;\n  color: #2e7d32;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.calc-ready[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.calc-loading[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n.calc-loading-text[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 0.82rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 8px;\n}\n.calc-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 14px;\n  margin: 8px 0;\n  background: #fff3e0;\n  border: 1px solid #ffe0b2;\n  border-radius: 8px;\n  color: #ed6c02;\n  font-size: 0.85rem;\n}\n.calc-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.compliance-warnings[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.compliance-warn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #fff3e0;\n  border: 1px solid #ffe0b2;\n  border-radius: 8px;\n  color: #ed6c02;\n  font-size: 0.85rem;\n}\n.compliance-warn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.compliance-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #ffebee;\n  border: 1px solid #ffcdd2;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.85rem;\n}\n.compliance-block[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 20px;\n  padding-top: 16px;\n}\n.step-actions[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.step-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n}\n.payout-details[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.wallet-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  background: #f3e8ff;\n  border: 1px solid #d8b4fe;\n  border-radius: 8px;\n  color: #6b21a8;\n  font-size: 0.875rem;\n}\n.wallet-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #7c3aed;\n}\n.summary-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-top: 16px;\n}\n.summary-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 24px;\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 500;\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.summary-value.highlight[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-size: 1.05rem;\n}\n.summary-value.total[_ngcontent-%COMP%] {\n  color: #1a56db;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.success-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.success-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 40px !important;\n  text-align: center;\n}\n.success-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 72px;\n  width: 72px;\n  height: 72px;\n  color: #2e7d32;\n}\n.success-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n  margin: 12px 0 4px;\n}\n.success-ref[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 28px;\n}\n.success-ref[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a56db;\n  font-size: 1.1rem;\n}\n.success-details[_ngcontent-%COMP%] {\n  text-align: left;\n  background: #fafafa;\n  border-radius: 10px;\n  padding: 16px 20px;\n  margin-bottom: 28px;\n}\n.success-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.success-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 500;\n}\n.success-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 600;\n}\n.success-amount[_ngcontent-%COMP%] {\n  color: #2e7d32 !important;\n  font-size: 1.05rem !important;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 3px 12px;\n  border-radius: 12px;\n  background: #fff3e0;\n  color: #ed6c02;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.success-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.field-with-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n}\n.field-with-action[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.field-with-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.branch-selected-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  margin-bottom: 12px;\n  background: #e8eefb;\n  border: 1px solid #c3d4f7;\n  border-radius: 8px;\n  color: #1a56db;\n  font-size: 0.85rem;\n}\n.branch-selected-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:first-child {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.branch-selected-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.branch-selected-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: rgba(0, 0, 0, 0.6);\n}\n.branch-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.branch-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 560px;\n  max-width: 90vw;\n  max-height: 80vh;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.branch-popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.branch-popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.branch-popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a56db;\n}\n.branch-search-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 20px 0;\n  box-sizing: border-box;\n}\n.branch-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  max-height: 400px;\n  padding: 0 8px 12px;\n}\n.branch-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  margin: 2px 0;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 0.15s;\n}\n.branch-list-item[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n}\n.branch-list-item.selected[_ngcontent-%COMP%] {\n  background: #e8eefb;\n  border-left: 3px solid #1a56db;\n}\n.branch-list-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #e8eefb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.branch-list-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a56db;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.branch-list-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.branch-list-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.branch-list-detail[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 1024px) {\n  .calc-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .calc-card[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n@media (max-width: 768px) {\n  .steps-header[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .step-line[_ngcontent-%COMP%] {\n    max-width: 60px;\n  }\n  .form-grid.cols-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .success-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding: 24px !important;\n  }\n}\n.dark-mode[_nghost-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .panel-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .panel-title[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .calc-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .calc-title[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .calc-value-lg[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .calc-value-lg[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .calc-value-rate[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .calc-value-rate[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .calc-total-row[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .calc-total-row[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .list-name[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .list-name[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .selected-name[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .selected-name[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .success-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .success-title[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .success-row[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .success-row[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .branch-popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .branch-popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .branch-list-name[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .branch-list-name[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .summary-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .calc-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .calc-label[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .calc-no-rate[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .calc-no-rate[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .calc-detail-row[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .calc-detail-row[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .calc-loading-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .calc-loading-text[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .form-section-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .form-section-label[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .agent-info-detail[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .agent-info-detail[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .list-detail[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .list-detail[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .selected-detail[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .selected-detail[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .summary-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .summary-label[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .success-ref[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .success-ref[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .branch-list-detail[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .branch-list-detail[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .currency-suffix[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .currency-suffix[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .step-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .step-text[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .form-section-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .form-section-label[_ngcontent-%COMP%] {\n  border-bottom-color: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .step-circle[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .step-line[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .step-line[_ngcontent-%COMP%] {\n  background: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .agent-info-bar[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .agent-info-bar[_ngcontent-%COMP%] {\n  background: rgba(26, 86, 219, 0.12);\n  border-color: rgba(26, 86, 219, 0.25);\n}\n.dark-mode[_nghost-%COMP%]   .agent-info-name[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .agent-info-name[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .customer-list[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .customer-list[_ngcontent-%COMP%] {\n  border-color: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .list-item[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  border-bottom-color: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark-mode[_nghost-%COMP%]   .list-item.selected[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .list-item.selected[_ngcontent-%COMP%] {\n  background: rgba(26, 86, 219, 0.15);\n  border-left-color: #60a5fa;\n}\n.dark-mode[_nghost-%COMP%]   .list-badge[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .list-badge[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .selected-banner[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .selected-banner[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 50, 0.12);\n  border-color: rgba(46, 125, 50, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .receiver-banner[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .receiver-banner[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .success-details[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .success-details[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark-mode[_nghost-%COMP%]   .success-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child, .dark-mode   [_nghost-%COMP%]   .success-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .branch-popup[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .branch-popup[_ngcontent-%COMP%] {\n  background: #1e293b;\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);\n}\n.dark-mode[_nghost-%COMP%]   .branch-popup-header[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .branch-popup-header[_ngcontent-%COMP%] {\n  border-bottom-color: #334155;\n}\n.dark-mode[_nghost-%COMP%]   .branch-list-item[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .branch-list-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark-mode[_nghost-%COMP%]   .branch-list-item.selected[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .branch-list-item.selected[_ngcontent-%COMP%] {\n  background: rgba(26, 86, 219, 0.15);\n  border-left-color: #60a5fa;\n}\n.dark-mode[_nghost-%COMP%]   .branch-list-icon[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .branch-list-icon[_ngcontent-%COMP%] {\n  background: rgba(26, 86, 219, 0.12);\n}\n.dark-mode[_nghost-%COMP%]   .branch-selected-bar[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .branch-selected-bar[_ngcontent-%COMP%] {\n  background: rgba(26, 86, 219, 0.12);\n  border-color: rgba(26, 86, 219, 0.25);\n}\n.dark-mode[_nghost-%COMP%]   .calc-ready[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .calc-ready[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 50, 0.12);\n  color: #4ade80;\n}\n.dark-mode[_nghost-%COMP%]   .error-alert[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .error-alert[_ngcontent-%COMP%] {\n  background: rgba(211, 47, 47, 0.12);\n  border-color: rgba(211, 47, 47, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .warn-alert[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .warn-alert[_ngcontent-%COMP%] {\n  background: rgba(237, 108, 2, 0.12);\n  border-color: rgba(237, 108, 2, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .info-alert[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .info-alert[_ngcontent-%COMP%] {\n  background: rgba(26, 86, 219, 0.12);\n  border-color: rgba(26, 86, 219, 0.25);\n}\n.dark-mode[_nghost-%COMP%]   .form-error[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  background: rgba(211, 47, 47, 0.12);\n  border-color: rgba(211, 47, 47, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .calc-error[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .calc-error[_ngcontent-%COMP%] {\n  background: rgba(237, 108, 2, 0.12);\n  border-color: rgba(237, 108, 2, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .compliance-warn[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .compliance-warn[_ngcontent-%COMP%] {\n  background: rgba(237, 108, 2, 0.12);\n  border-color: rgba(237, 108, 2, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .compliance-block[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .compliance-block[_ngcontent-%COMP%] {\n  background: rgba(211, 47, 47, 0.12);\n  border-color: rgba(211, 47, 47, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .wallet-info[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .wallet-info[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  border-color: rgba(124, 58, 237, 0.3);\n  color: #c4b5fd;\n}\n.dark-mode[_nghost-%COMP%]   .status-badge[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: rgba(237, 108, 2, 0.15);\n  color: #fbbf24;\n}\n@media (max-width: 600px) {\n  .form-grid.cols-2[_ngcontent-%COMP%], \n   .form-grid.cols-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: flex-start;\n  }\n  .step-text[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .step-circle[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 12px;\n  }\n  .step-indicator[_ngcontent-%COMP%] {\n    min-width: 50px;\n  }\n  .selected-banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    align-items: flex-start;\n  }\n  .success-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .success-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .calc-value-lg[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .calc-value-receive[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n.pin-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.pin-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  z-index: 1001;\n  width: 400px;\n  max-width: 90vw;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n}\n.pin-dialog[_ngcontent-%COMP%]   .pin-dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.pin-dialog[_ngcontent-%COMP%]   .pin-dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #1a56db;\n}\n.pin-dialog[_ngcontent-%COMP%]   .pin-dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.pin-dialog[_ngcontent-%COMP%]   .pin-dialog-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.pin-dialog[_ngcontent-%COMP%]   .pin-dialog-body[_ngcontent-%COMP%]   .pin-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.6);\n  margin: 0 0 16px;\n  line-height: 1.5;\n}\n.pin-dialog[_ngcontent-%COMP%]   .pin-dialog-body[_ngcontent-%COMP%]   .pin-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #fdeded;\n  color: #d32f2f;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.pin-dialog[_ngcontent-%COMP%]   .pin-dialog-body[_ngcontent-%COMP%]   .pin-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.pin-dialog[_ngcontent-%COMP%]   .pin-dialog-body[_ngcontent-%COMP%]   .pin-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.pin-dialog[_ngcontent-%COMP%]   .pin-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 12px 24px 20px;\n}\n.pin-dialog[_ngcontent-%COMP%]   .pin-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.pin-dialog[_ngcontent-%COMP%]   .pin-dialog-actions[_ngcontent-%COMP%]   .btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -45%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n.dark-mode[_nghost-%COMP%]   .pin-dialog[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .pin-dialog[_ngcontent-%COMP%] {\n  background: #1e293b;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);\n}\n.dark-mode[_nghost-%COMP%]   .pin-dialog[_ngcontent-%COMP%]   .pin-dialog-header[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .pin-dialog[_ngcontent-%COMP%]   .pin-dialog-header[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .pin-dialog[_ngcontent-%COMP%]   .pin-dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .pin-dialog[_ngcontent-%COMP%]   .pin-dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #93b4ff;\n}\n.dark-mode[_nghost-%COMP%]   .pin-dialog[_ngcontent-%COMP%]   .pin-dialog-body[_ngcontent-%COMP%]   .pin-hint[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .pin-dialog[_ngcontent-%COMP%]   .pin-dialog-body[_ngcontent-%COMP%]   .pin-hint[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.dark-mode[_nghost-%COMP%]   .pin-dialog[_ngcontent-%COMP%]   .pin-dialog-body[_ngcontent-%COMP%]   .pin-error[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .pin-dialog[_ngcontent-%COMP%]   .pin-dialog-body[_ngcontent-%COMP%]   .pin-error[_ngcontent-%COMP%] {\n  background: rgba(211, 47, 47, 0.15);\n  color: #ff6b6b;\n}\n/*# sourceMappingURL=send-money.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SendMoneyComponent, [{
    type: Component,
    args: [{ selector: "app-send-money", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatCardModule,
      MatStepperModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatDividerModule,
      MatTabsModule,
      MatTooltipModule,
      MatDatepickerModule,
      DecimalPipe,
      SearchableSelectDirective
    ], providers: [provideNativeDateAdapter()], template: `<div class="send-money">

  <!-- Progress Steps Header -->
  <div class="steps-header">
    <div class="step-indicator" [class.active]="step === 0" [class.done]="step > 0"
      (click)="step > 0 ? step = 0 : null">
      <div class="step-circle">
        <mat-icon *ngIf="step > 0">check</mat-icon>
        <span *ngIf="step <= 0">1</span>
      </div>
      <span class="step-text">Customer</span>
    </div>
    <div class="step-line" [class.done]="step > 0"></div>
    <div class="step-indicator" [class.active]="step === 1" [class.done]="step > 1"
      (click)="step > 1 ? step = 1 : null">
      <div class="step-circle">
        <mat-icon *ngIf="step > 1">check</mat-icon>
        <span *ngIf="step <= 1">2</span>
      </div>
      <span class="step-text">Calculate</span>
    </div>
    <div class="step-line" [class.done]="step > 1"></div>
    <div class="step-indicator" [class.active]="step === 2" [class.done]="step > 2">
      <div class="step-circle">
        <mat-icon *ngIf="step > 2">check</mat-icon>
        <span *ngIf="step <= 2">3</span>
      </div>
      <span class="step-text">Receiver</span>
    </div>
    <div class="step-line" [class.done]="step > 2"></div>
    <div class="step-indicator" [class.active]="step === 3">
      <div class="step-circle">
        <mat-icon *ngIf="step > 2">check</mat-icon>
        <span *ngIf="step <= 2">4</span>
      </div>
      <span class="step-text">Done</span>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- STEP 0: Customer Selection / Creation                                   -->
  <!-- ======================================================================= -->
  <div *ngIf="step === 0" class="step-panel">
    <mat-card class="panel-card" appearance="outlined">
      <mat-card-content>
        <div class="panel-header">
          <h3><mat-icon>person_search</mat-icon> Select or Create Customer</h3>
          <button mat-stroked-button color="primary" (click)="toggleCreateCustomer()">
            <mat-icon>{{ showCreateCustomer ? 'close' : 'person_add' }}</mat-icon>
            {{ showCreateCustomer ? 'Cancel' : 'New Customer' }}
          </button>
        </div>

        <!-- Agent Balance Zero Warning -->
        <div *ngIf="agentBalanceZero" class="warn-alert warn-alert--block">
          <mat-icon>account_balance_wallet</mat-icon>
          <span>Your available balance is 0. You cannot send transactions until your balance is topped up. Please contact admin.</span>
        </div>

        <!-- Selected Customer Banner -->
        <div *ngIf="selectedCustomer && !showCreateCustomer" class="selected-banner">
          <div class="selected-info">
            <div class="selected-avatar">{{ selectedCustomer.fullName.charAt(0) }}</div>
            <div>
              <div class="selected-name">{{ selectedCustomer.fullName }}</div>
              <div class="selected-detail">
                <span *ngIf="selectedCustomer.phone">{{ selectedCustomer.phone }}</span>
                <span *ngIf="selectedCustomer.email"> &middot; {{ selectedCustomer.email }}</span>
                <span *ngIf="selectedCustomer.country"> &middot; {{ selectedCustomer.country }}</span>
              </div>
            </div>
          </div>
          <button mat-icon-button color="warn" (click)="clearSelectedCustomer()" matTooltip="Remove selection">
            <mat-icon>close</mat-icon>
          </button>
        </div>

        <!-- KYC Warning -->
        <div *ngIf="kycWarning" class="warn-alert warn-alert--block">
          <mat-icon>gpp_bad</mat-icon>
          <span>{{ kycWarning }}</span>
        </div>

        <!-- DOB Warning -->
        <div *ngIf="dobWarning" class="warn-alert warn-alert--block">
          <mat-icon>cake</mat-icon>
          <span>{{ dobWarning }}</span>
        </div>

        <!-- Create Customer Form -->
        <div *ngIf="showCreateCustomer" class="create-form">
          <div *ngIf="customerFormError" class="form-error">
            <mat-icon>error</mat-icon> {{ customerFormError }}
          </div>

          <div class="form-section-label">Personal Information</div>
          <div class="form-grid cols-3">
            <mat-form-field appearance="outline">
              <mat-label>Full Name *</mat-label>
              <input matInput [(ngModel)]="newCustomer.fullName" placeholder="Enter full name" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Phone *</mat-label>
              <input matInput [(ngModel)]="newCustomer.phone" placeholder="+1 234 567 890" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput [(ngModel)]="newCustomer.email" type="email" placeholder="email@example.com" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Date of Birth</mat-label>
              <input matInput [matDatepicker]="dobPicker" [(ngModel)]="newCustomer.dateOfBirth" readonly
                placeholder="Select date" />
              <mat-datepicker-toggle matSuffix [for]="dobPicker"></mat-datepicker-toggle>
              <mat-datepicker #dobPicker></mat-datepicker>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Gender</mat-label>
              <mat-select [(ngModel)]="newCustomer.gender" placeholder="Select gender">
                <mat-option value="Male">Male</mat-option>
                <mat-option value="Female">Female</mat-option>
                <mat-option value="Other">Other</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Nationality</mat-label>
              <input matInput [(ngModel)]="newCustomer.nationality" placeholder="Nationality" />
            </mat-form-field>
          </div>

          <div class="form-section-label">Address</div>
          <div class="form-grid cols-3">
            <mat-form-field appearance="outline">
              <mat-label>Country *</mat-label>
              <mat-select [(ngModel)]="newCustomer.country" searchable placeholder="Select country">
                <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>City</mat-label>
              <input matInput [(ngModel)]="newCustomer.city" placeholder="City" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Address</mat-label>
              <input matInput [(ngModel)]="newCustomer.address" placeholder="Street address" />
            </mat-form-field>
          </div>

          <div class="form-section-label">Identification</div>
          <div class="form-grid cols-3">
            <mat-form-field appearance="outline">
              <mat-label>ID Document Type</mat-label>
              <mat-select [(ngModel)]="newCustomer.idDocumentType" placeholder="Select type">
                <mat-option *ngFor="let t of idTypes" [value]="t">{{ t }}</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>ID Document Number</mat-label>
              <input matInput [(ngModel)]="newCustomer.idDocumentNumber" placeholder="Document number" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Issuing Country</mat-label>
              <mat-select [(ngModel)]="newCustomer.docIssuingCountry" searchable placeholder="Select country">
                <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Issue Date</mat-label>
              <input matInput [matDatepicker]="issuePicker" [(ngModel)]="newCustomer.docIssueDate" readonly
                placeholder="Select date" />
              <mat-datepicker-toggle matSuffix [for]="issuePicker"></mat-datepicker-toggle>
              <mat-datepicker #issuePicker></mat-datepicker>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Expiry Date</mat-label>
              <input matInput [matDatepicker]="expiryPicker" [(ngModel)]="newCustomer.docExpiryDate" readonly
                placeholder="Select date" />
              <mat-datepicker-toggle matSuffix [for]="expiryPicker"></mat-datepicker-toggle>
              <mat-datepicker #expiryPicker></mat-datepicker>
            </mat-form-field>
          </div>

          <div class="form-actions">
            <button mat-stroked-button (click)="toggleCreateCustomer()">Cancel</button>
            <button mat-flat-button color="primary" (click)="saveNewCustomer()" [disabled]="savingCustomer">
              <mat-spinner *ngIf="savingCustomer" diameter="18" class="btn-spinner"></mat-spinner>
              <mat-icon *ngIf="!savingCustomer">save</mat-icon>
              Save Customer
            </button>
          </div>
        </div>

        <!-- Customer Search & List -->
        <div *ngIf="!showCreateCustomer && !selectedCustomer">
          <mat-form-field appearance="outline" class="search-field">
            <mat-label>Search customers by name, email, or phone</mat-label>
            <mat-icon matPrefix>search</mat-icon>
            <input matInput [(ngModel)]="customerSearch" (ngModelChange)="filterCustomers()"
              placeholder="Type to search..." />
            <button *ngIf="customerSearch" mat-icon-button matSuffix (click)="customerSearch = ''; filterCustomers()">
              <mat-icon>close</mat-icon>
            </button>
          </mat-form-field>

          <div class="customer-list">
            <div *ngIf="filteredCustomers.length === 0" class="empty-state">
              <mat-icon>person_off</mat-icon>
              <span>No customers found. Create a new one above.</span>
            </div>
            <div *ngFor="let c of filteredCustomers" class="list-item" (click)="selectCustomer(c)"
              [class.selected]="selectedCustomerId === c.id">
              <div class="list-avatar">{{ c.fullName.charAt(0) }}</div>
              <div class="list-info">
                <div class="list-name">{{ c.fullName }}</div>
                <div class="list-detail">
                  {{ c.phone }}
                  <span *ngIf="c.email"> &middot; {{ c.email }}</span>
                </div>
              </div>
              <div class="list-badge">{{ c.country }}</div>
            </div>
          </div>
        </div>
      </mat-card-content>
    </mat-card>

    <!-- Step Actions -->
    <div class="step-actions">
      <span class="spacer"></span>
      <button mat-flat-button color="primary" (click)="nextStep()" [disabled]="!canProceedStep1()">
        Next: Calculate Amount
        <mat-icon>arrow_forward</mat-icon>
      </button>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- STEP 1: Amount & Calculation                                            -->
  <!-- ======================================================================= -->
  <div *ngIf="step === 1" class="step-panel">
    <div class="calc-layout">

      <!-- Left: Form Fields -->
      <mat-card class="panel-card" appearance="outlined">
        <mat-card-content>
          <h3 class="panel-title"><mat-icon>swap_horiz</mat-icon> Transfer Details</h3>

          <!-- Sending Side (read-only from agent profile) -->
          <div class="form-section-label">Sending From</div>
          <div class="agent-info-bar">
            <mat-icon>store</mat-icon>
            <div class="agent-info-text">
              <span class="agent-info-name">{{ agentProfile?.businessName || 'Agent' }}</span>
              <span class="agent-info-detail">{{ senderCountry }} &middot; {{ senderCurrency }}</span>
            </div>
          </div>

          <!-- Destination Country -->
          <div class="form-section-label">Sending To</div>
          <div class="form-grid cols-2">
            <mat-form-field appearance="outline">
              <mat-label>Destination Country</mat-label>
              <mat-select [(ngModel)]="receiverCountry" (selectionChange)="onReceiverCountryChange()" searchable
                placeholder="Select destination country">
                <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Receiver Currency</mat-label>
              <input matInput [value]="receiverCurrency || '\u2014'" readonly />
            </mat-form-field>
          </div>

          <!-- Payment Method -->
          <div class="form-section-label">Payment Method</div>
          <div class="form-grid cols-1">
            <mat-form-field appearance="outline">
              <mat-label>Payment Method</mat-label>
              <mat-select [(ngModel)]="selectedPaymentMethodId" (selectionChange)="onPaymentMethodChange()"
                placeholder="Select payment method">
                <mat-option *ngFor="let m of paymentMethods" [value]="m.id">{{ m.name }}</mat-option>
              </mat-select>
            </mat-form-field>
          </div>

          <!-- Route status messages -->
          <div *ngIf="routeError" class="warn-alert">
            <mat-icon>warning</mat-icon>
            <span>{{ routeError }}</span>
          </div>

          <!-- <div *ngIf="selectedPartner && !routeError" class="route-matched-bar">
            <mat-icon>check_circle</mat-icon>
            <span>Route found via <strong>{{ selectedPartner.payoutAgentName }}</strong></span>
          </div> -->

          <!-- Amount -->
          <div class="form-section-label">Amount</div>
          <div class="form-grid cols-1">
            <mat-form-field appearance="outline" class="amount-field">
              <mat-label>Send Amount</mat-label>
              <input matInput type="number" [(ngModel)]="sendAmount" (ngModelChange)="onAmountChange()" min="0"
                placeholder="0.00" />
              <span matSuffix class="currency-suffix">{{ senderCurrency || '---' }}</span>
            </mat-form-field>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Right: Live Calculation Sidebar -->
      <mat-card class="calc-card" appearance="outlined">
        <mat-card-content>
          <h3 class="calc-title">
            <mat-icon>calculate</mat-icon>
            Calculation
          </h3>

          <div *ngIf="loadingCalc" class="calc-loading">
            <mat-progress-bar mode="indeterminate"></mat-progress-bar>
            <span class="calc-loading-text">Calculating...</span>
          </div>

          <div *ngIf="calcError" class="calc-error">
            <mat-icon>error_outline</mat-icon>
            <span>{{ calcError }}</span>
          </div>

          <div *ngIf="!loadingCalc && !calcError">
            <div class="calc-row">
              <span class="calc-label">Send Amount</span>
              <span class="calc-value-lg">{{ sendAmount | number:'1.2-2' }} {{ senderCurrency }}</span>
            </div>

            <mat-divider></mat-divider>

            <div class="calc-row">
              <span class="calc-label">Exchange Rate</span>
              <span *ngIf="exchangeRate > 0" class="calc-value-rate">
                1 {{ senderCurrency }} = {{ exchangeRate | number:'1.4-4' }} {{ receiverCurrency }}
              </span>
              <span *ngIf="exchangeRate === 0 && !calculationDone" class="calc-no-rate">\u2014</span>
            </div>

            <div class="calc-row">
              <span class="calc-label">Receive Amount</span>
              <span class="calc-value-receive">{{ receiveAmount | number:'1.2-2' }} {{ receiverCurrency }}</span>
            </div>

            <mat-divider></mat-divider>

            <div class="calc-detail-row">
              <span>Service Charge</span>
              <span class="calc-detail-value">{{ serviceCharge | number:'1.2-2' }} {{ senderCurrency }}</span>
            </div>

            <mat-divider></mat-divider>

            <div class="calc-total-row">
              <span>Customer Pays</span>
              <span>{{ totalPayable | number:'1.2-2' }} {{ senderCurrency }}</span>
            </div>

            <!-- Balance Warning -->
            <div *ngIf="balanceWarning" class="compliance-warnings">
              <div class="compliance-block">
                <mat-icon>account_balance_wallet</mat-icon>
                <span>{{ balanceWarning }}</span>
              </div>
            </div>

            <!-- Compliance Violations -->
            <div *ngIf="complianceViolations.length > 0" class="compliance-warnings">
              <div *ngFor="let v of complianceViolations"
                   [class]="v.action === 'Block' ? 'compliance-block' : 'compliance-warn'">
                <mat-icon>{{ v.action === 'Block' ? 'block' : 'warning' }}</mat-icon>
                <span><strong>{{ v.ruleName }}</strong>: {{ v.description }}</span>
              </div>
            </div>

            <div *ngIf="calculationDone && !complianceBlocked && !balanceWarning" class="calc-ready">
              <mat-icon>check_circle</mat-icon> Ready to proceed
            </div>
            <div *ngIf="complianceBlocked" class="calc-error">
              <mat-icon>block</mat-icon>
              <span>Transaction blocked by compliance rules. Cannot proceed.</span>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>

    <!-- Step Actions -->
    <div class="step-actions">
      <button mat-stroked-button (click)="prevStep()">
        <mat-icon>arrow_back</mat-icon> Back
      </button>
      <span class="spacer"></span>
      <button mat-flat-button color="primary" (click)="nextStep()" [disabled]="!canProceedStep2()">
        Next: Select Receiver
        <mat-icon>arrow_forward</mat-icon>
      </button>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- STEP 2: Receiver Selection / Creation                                   -->
  <!-- ======================================================================= -->
  <div *ngIf="step === 2" class="step-panel">
    <mat-card class="panel-card" appearance="outlined">
      <mat-card-content>
        <div class="panel-header">
          <h3><mat-icon>person_pin</mat-icon> Select or Create Receiver</h3>
          <button mat-stroked-button color="primary" (click)="toggleCreateReceiver()">
            <mat-icon>{{ showCreateReceiver ? 'close' : 'person_add' }}</mat-icon>
            {{ showCreateReceiver ? 'Cancel' : 'New Receiver' }}
          </button>
        </div>

        <!-- Selected Receiver Banner -->
        <div *ngIf="selectedReceiver && !showCreateReceiver" class="selected-banner receiver-banner">
          <div class="selected-info">
            <div class="selected-avatar receiver-avatar">{{ selectedReceiver.fullName.charAt(0) }}</div>
            <div>
              <div class="selected-name">{{ selectedReceiver.fullName }}</div>
              <div class="selected-detail">
                <span *ngIf="selectedReceiver.phone">{{ selectedReceiver.phone }}</span>
                <span *ngIf="selectedReceiver.country"> &middot; {{ selectedReceiver.country }}</span>
                <span *ngIf="selectedReceiver.bankName"> &middot; {{ selectedReceiver.bankName }}</span>
              </div>
            </div>
          </div>
          <button mat-icon-button color="warn" (click)="clearSelectedReceiver()" matTooltip="Remove selection">
            <mat-icon>close</mat-icon>
          </button>
        </div>

        <!-- Create Receiver Form -->
        <div *ngIf="showCreateReceiver" class="create-form">
          <div *ngIf="receiverFormError" class="form-error">
            <mat-icon>error</mat-icon> {{ receiverFormError }}
          </div>

          <div class="form-section-label">Receiver Information</div>
          <div class="form-grid cols-3">
            <mat-form-field appearance="outline">
              <mat-label>Full Name *</mat-label>
              <input matInput [(ngModel)]="newReceiver.fullName" placeholder="Enter full name" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Phone *</mat-label>
              <input matInput [(ngModel)]="newReceiver.phone" placeholder="+1 234 567 890" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput [(ngModel)]="newReceiver.email" type="email" placeholder="email@example.com" />
            </mat-form-field>
          </div>

          <div class="form-section-label">Location</div>
          <div class="form-grid cols-3">
            <mat-form-field appearance="outline">
              <mat-label>Country</mat-label>
              <mat-select [(ngModel)]="newReceiver.country" searchable placeholder="Select country">
                <mat-option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>City</mat-label>
              <input matInput [(ngModel)]="newReceiver.city" placeholder="City" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Relationship</mat-label>
              <mat-select [(ngModel)]="newReceiver.relationship" placeholder="Select relationship">
                <mat-option value="Family">Family</mat-option>
                <mat-option value="Friend">Friend</mat-option>
                <mat-option value="Business">Business</mat-option>
                <mat-option value="Other">Other</mat-option>
              </mat-select>
            </mat-form-field>
          </div>

          <!-- Bank Transfer Details -->
          <div *ngIf="isBankTransfer()" class="form-section-label">Bank Details</div>
          <div *ngIf="isBankTransfer()" class="form-grid cols-2">
            <div class="field-with-action">
              <mat-form-field appearance="outline">
                <mat-label>Bank Name</mat-label>
                <mat-select [(ngModel)]="selectedBankId" (selectionChange)="onBankSelected()" searchable placeholder="Select bank">
                  <mat-option *ngFor="let b of payoutBanks" [value]="b.id">{{ b.bankName }}</mat-option>
                </mat-select>
              </mat-form-field>
              <button mat-icon-button color="primary" matTooltip="Select Branch" (click)="openBranchPopup()"
                [disabled]="!newReceiver.bankName">
                <mat-icon>account_tree</mat-icon>
              </button>
            </div>
            <mat-form-field appearance="outline">
              <mat-label>Account Number</mat-label>
              <input matInput [(ngModel)]="newReceiver.accountNumber" placeholder="Account number" />
            </mat-form-field>
          </div>
          <div *ngIf="isBankTransfer() && selectedBranch" class="branch-selected-bar">
            <mat-icon>account_tree</mat-icon>
            <span>Branch: <strong>{{ selectedBranch.branchName }}</strong>
              <span *ngIf="selectedBranch.branchCode"> ({{ selectedBranch.branchCode }})</span>
            </span>
            <button mat-icon-button (click)="selectedBranch = null" matTooltip="Remove branch">
              <mat-icon>close</mat-icon>
            </button>
          </div>

          <!-- Cash Transfer Details -->
          <div *ngIf="isCashTransfer()" class="form-section-label">Locations</div>
          <div *ngIf="isCashTransfer()" class="form-grid cols-1">
            <mat-form-field appearance="outline">
              <mat-label>Location</mat-label>
              <mat-select [(ngModel)]="selectedLocationId" (selectionChange)="onLocationSelected()" searchable placeholder="Select location">
                <mat-option *ngFor="let l of payoutLocations" [value]="l.id">{{ l.locationName }}</mat-option>
              </mat-select>
            </mat-form-field>
          </div>

          <!-- Wallet Transfer Details -->
          <div *ngIf="isWalletTransfer()" class="form-section-label">Wallet Details</div>
          <div *ngIf="isWalletTransfer()" class="form-grid cols-2">
            <mat-form-field appearance="outline">
              <mat-label>Wallet Name</mat-label>
              <mat-select [(ngModel)]="selectedLocationId" (selectionChange)="onLocationSelected()" searchable placeholder="Select wallet">
                <mat-option *ngFor="let l of payoutLocations" [value]="l.id">{{ l.locationName }}</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Wallet Number</mat-label>
              <input matInput [(ngModel)]="newReceiver.accountNumber" placeholder="Wallet number" />
            </mat-form-field>
          </div>

          <div class="form-actions">
            <button mat-stroked-button (click)="toggleCreateReceiver()">Cancel</button>
            <button mat-flat-button color="primary" (click)="saveNewReceiver()" [disabled]="savingReceiver">
              <mat-spinner *ngIf="savingReceiver" diameter="18" class="btn-spinner"></mat-spinner>
              <mat-icon *ngIf="!savingReceiver">save</mat-icon>
              Save Receiver
            </button>
          </div>
        </div>

        <!-- Receiver Search & List -->
        <div *ngIf="!showCreateReceiver && !selectedReceiver">
          <mat-form-field appearance="outline" class="search-field">
            <mat-label>Search receivers by name or phone</mat-label>
            <mat-icon matPrefix>search</mat-icon>
            <input matInput [(ngModel)]="receiverSearch" (ngModelChange)="filterReceivers()"
              placeholder="Type to search..." />
            <button *ngIf="receiverSearch" mat-icon-button matSuffix (click)="receiverSearch = ''; filterReceivers()">
              <mat-icon>close</mat-icon>
            </button>
          </mat-form-field>

          <div class="customer-list">
            <div *ngIf="filteredReceivers.length === 0" class="empty-state">
              <mat-icon>person_off</mat-icon>
              <span>No receivers found for {{ receiverCountry }}. Create a new one above.</span>
            </div>
            <div *ngFor="let r of filteredReceivers" class="list-item" (click)="selectReceiver(r)"
              [class.selected]="selectedReceiverId === r.id">
              <div class="list-avatar receiver-avatar">{{ r.fullName.charAt(0) }}</div>
              <div class="list-info">
                <div class="list-name">{{ r.fullName }}</div>
                <div class="list-detail">
                  {{ r.phone }}
                  <span *ngIf="r.bankName"> &middot; {{ r.bankName }}</span>
                </div>
              </div>
              <div class="list-badge">{{ r.country }}</div>
            </div>
          </div>
        </div>

      </mat-card-content>
    </mat-card>

    <!-- Transaction Summary Before Submit -->
    <mat-card *ngIf="selectedReceiver" class="summary-card" appearance="outlined">
      <mat-card-content>
        <h3 class="panel-title"><mat-icon>summarize</mat-icon> Transaction Summary</h3>
        <div class="summary-grid">
          <div class="summary-item">
            <span class="summary-label">Sender</span>
            <span class="summary-value">{{ selectedCustomer?.fullName }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Receiver</span>
            <span class="summary-value">{{ selectedReceiver.fullName }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">From</span>
            <span class="summary-value">{{ senderCountry }} ({{ senderCurrency }})</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">To</span>
            <span class="summary-value">{{ receiverCountry }} ({{ receiverCurrency }})</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Send Amount</span>
            <span class="summary-value">{{ sendAmount | number:'1.2-2' }} {{ senderCurrency }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Receive Amount</span>
            <span class="summary-value highlight">{{ receiveAmount | number:'1.2-2' }} {{ receiverCurrency }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Exchange Rate</span>
            <span class="summary-value">{{ exchangeRate | number:'1.4-4' }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Service Charge</span>
            <span class="summary-value">{{ serviceCharge | number:'1.2-2' }} {{ senderCurrency }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Payout Mode</span>
            <span class="summary-value">{{ getPayoutModeName() }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Total Payable</span>
            <span class="summary-value total">{{ totalPayable | number:'1.2-2' }} {{ senderCurrency }}</span>
          </div>
        </div>
      </mat-card-content>
    </mat-card>

    <!-- Step Actions -->
    <div class="step-actions">
      <button mat-stroked-button (click)="prevStep()">
        <mat-icon>arrow_back</mat-icon> Back
      </button>
      <span class="spacer"></span>
      <button mat-flat-button color="primary" (click)="submitTransaction()"
        [disabled]="!canProceedStep3() || submitting">
        <mat-spinner *ngIf="submitting" diameter="18" class="btn-spinner"></mat-spinner>
        <mat-icon *ngIf="!submitting">send</mat-icon>
        Submit Transaction
      </button>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- STEP 3: Success                                                         -->
  <!-- ======================================================================= -->
  <div *ngIf="step === 3 && successResult" class="step-panel">
    <mat-card class="success-card" appearance="outlined">
      <mat-card-content>
        <div class="success-icon">
          <mat-icon>check_circle</mat-icon>
        </div>
        <h2 class="success-title">Transaction Submitted!</h2>
        <p class="success-ref">Reference: <strong>{{ successResult.referenceNumber }}</strong></p>

        <div class="success-details">
          <div class="success-row">
            <span>Status</span>
            <span class="status-badge">{{ getStatusLabel(successResult.status) }}</span>
          </div>
          <mat-divider></mat-divider>
          <div class="success-row">
            <span>Send Amount</span>
            <span>{{ successResult.sendAmount | number:'1.2-2' }} {{ successResult.sendCurrency }}</span>
          </div>
          <div class="success-row">
            <span>Exchange Rate</span>
            <span>1 {{ successResult.sendCurrency }} = {{ successResult.exchangeRateApplied | number:'1.4-4' }} {{
              successResult.receiveCurrency }}</span>
          </div>
          <div class="success-row">
            <span>Receive Amount</span>
            <span class="success-amount">{{ successResult.receiveAmount | number:'1.2-2' }} {{
              successResult.receiveCurrency }}</span>
          </div>
          <div class="success-row">
            <span>Service Charge</span>
            <span>{{ successResult.totalCommission | number:'1.2-2' }} {{ successResult.sendCurrency }}</span>
          </div>
          <mat-divider></mat-divider>
          <div class="success-row">
            <span>Sender</span>
            <span>{{ successResult.senderName }}</span>
          </div>
          <div class="success-row">
            <span>Receiver</span>
            <span>{{ successResult.receiverName }}</span>
          </div>
          <div class="success-row">
            <span>Date</span>
            <span>{{ successResult.createdAt | date:'medium' }}</span>
          </div>
        </div>

        <div class="success-actions">
          <button mat-stroked-button (click)="downloadReceipt()">
            <mat-icon>download</mat-icon>
            Download Receipt
          </button>
          <button mat-flat-button color="primary" (click)="startNewTransaction()">
            <mat-icon>add</mat-icon>
            New Transaction
          </button>
        </div>
      </mat-card-content>
    </mat-card>
  </div>

</div>

<!-- ======================================================================= -->
<!-- Transaction PIN Dialog                                                  -->
<!-- ======================================================================= -->
<div *ngIf="showPinDialog" class="pin-overlay" (click)="closePinDialog()"></div>
<div *ngIf="showPinDialog" class="pin-dialog">
  <div class="pin-dialog-header">
    <h3>
      <mat-icon>{{ pinMode === 'set' ? 'lock' : 'vpn_key' }}</mat-icon>
      {{ pinMode === 'set' ? 'Set Transaction PIN' : 'Enter Transaction PIN' }}
    </h3>
    <button mat-icon-button (click)="closePinDialog()"><mat-icon>close</mat-icon></button>
  </div>

  <div class="pin-dialog-body">
    <p *ngIf="pinMode === 'set'" class="pin-hint">
      Create a 4\u20136 digit PIN to authorize transactions. You'll need this PIN every time you send money.
    </p>
    <p *ngIf="pinMode === 'verify'" class="pin-hint">
      Enter your transaction PIN to confirm this transfer.
    </p>

    <div *ngIf="pinError" class="pin-error">
      <mat-icon>error</mat-icon> {{ pinError }}
    </div>

    <mat-form-field appearance="outline" class="pin-field">
      <mat-label>{{ pinMode === 'set' ? 'New PIN' : 'Transaction PIN' }}</mat-label>
      <input matInput type="password" [(ngModel)]="pinInput" maxlength="6"
        placeholder="Enter PIN" autocomplete="off" (keydown.enter)="onPinSubmit()" />
      <mat-icon matPrefix>lock</mat-icon>
    </mat-form-field>

    <mat-form-field *ngIf="pinMode === 'set'" appearance="outline" class="pin-field">
      <mat-label>Confirm PIN</mat-label>
      <input matInput type="password" [(ngModel)]="pinConfirm" maxlength="6"
        placeholder="Confirm PIN" autocomplete="off" (keydown.enter)="onPinSubmit()" />
      <mat-icon matPrefix>lock</mat-icon>
    </mat-form-field>
  </div>

  <div class="pin-dialog-actions">
    <button mat-stroked-button (click)="closePinDialog()">Cancel</button>
    <button mat-flat-button color="primary" (click)="onPinSubmit()" [disabled]="pinLoading">
      <mat-spinner *ngIf="pinLoading" diameter="18" class="btn-spinner"></mat-spinner>
      <mat-icon *ngIf="!pinLoading">{{ pinMode === 'set' ? 'lock' : 'send' }}</mat-icon>
      {{ pinMode === 'set' ? 'Set PIN' : 'Confirm & Send' }}
    </button>
  </div>
</div>

<!-- ======================================================================= -->
<!-- Branch Search Popup                                                     -->
<!-- ======================================================================= -->
<div *ngIf="showBranchPopup" class="branch-overlay" (click)="closeBranchPopup()"></div>
<div *ngIf="showBranchPopup" class="branch-popup">
  <div class="branch-popup-header">
    <h3><mat-icon>account_tree</mat-icon> Select Branch &mdash; {{ branchBank?.bankName }}</h3>
    <button mat-icon-button (click)="closeBranchPopup()"><mat-icon>close</mat-icon></button>
  </div>

  <mat-form-field appearance="outline" class="branch-search-field">
    <mat-label>Search branches</mat-label>
    <mat-icon matPrefix>search</mat-icon>
    <input matInput [(ngModel)]="branchSearch" (ngModelChange)="filterBranches()" placeholder="Search by name, code, or address..." />
    <button *ngIf="branchSearch" mat-icon-button matSuffix (click)="branchSearch = ''; filterBranches()">
      <mat-icon>close</mat-icon>
    </button>
  </mat-form-field>

  <div class="branch-list">
    <div *ngIf="filteredBranches.length === 0" class="empty-state">
      <mat-icon>search_off</mat-icon>
      <span>No branches found.</span>
    </div>
    <div *ngFor="let br of filteredBranches" class="branch-list-item"
      [class.selected]="selectedBranch?.id === br.id" (click)="selectBranch(br)">
      <div class="branch-list-icon">
        <mat-icon>location_city</mat-icon>
      </div>
      <div class="branch-list-info">
        <div class="branch-list-name">{{ br.branchName }}</div>
        <div class="branch-list-detail">
          <span *ngIf="br.branchCode">Code: {{ br.branchCode }}</span>
          <span *ngIf="br.address"> &middot; {{ br.address }}</span>
          <span *ngIf="br.contactPhone"> &middot; {{ br.contactPhone }}</span>
        </div>
      </div>
    </div>
  </div>
</div>`, styles: ["/* src/app/pages/agent/send-money/send-money.component.scss */\n.send-money {\n  padding: 0;\n  max-width: 1200px;\n}\n.steps-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  margin-bottom: 28px;\n  padding: 0 20px;\n}\n.step-indicator {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  cursor: default;\n  min-width: 70px;\n}\n.step-indicator.done {\n  cursor: pointer;\n}\n.step-circle {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  background: #e0e0e0;\n  color: rgba(0, 0, 0, 0.6);\n  transition: all 0.2s;\n}\n.step-circle mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.active .step-circle {\n  background: #1a56db;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(26, 86, 219, 0.35);\n}\n.done .step-circle {\n  background: #2e7d32;\n  color: #fff;\n}\n.step-text {\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n}\n.active .step-text {\n  color: #1a56db;\n  font-weight: 600;\n}\n.done .step-text {\n  color: #2e7d32;\n}\n.step-line {\n  flex: 1;\n  height: 3px;\n  background: #e0e0e0;\n  margin: 0 4px;\n  margin-bottom: 22px;\n  border-radius: 2px;\n  max-width: 120px;\n  transition: background 0.3s;\n}\n.step-line.done {\n  background: #2e7d32;\n}\n.error-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.875rem;\n}\n.error-alert mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.error-alert span {\n  flex: 1;\n}\n.error-alert .close-btn {\n  margin-left: auto;\n  color: #d32f2f;\n}\n.warn-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-top: 12px;\n  background: #fff3e0;\n  border: 1px solid #ffe0b2;\n  border-radius: 8px;\n  color: #ed6c02;\n  font-size: 0.875rem;\n}\n.warn-alert mat-icon {\n  flex-shrink: 0;\n}\n.warn-alert--block {\n  background: #fef2f2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.info-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  background: #e8eefb;\n  border: 1px solid #c3d4f7;\n  border-radius: 8px;\n  color: #1a56db;\n  font-size: 0.875rem;\n}\n.info-alert mat-icon {\n  flex-shrink: 0;\n}\n.step-panel {\n  animation: fadeSlideIn 0.3s ease;\n}\n@keyframes fadeSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.panel-card {\n  border-radius: 12px !important;\n}\n.panel-card mat-card-content {\n  padding: 24px !important;\n}\n.panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.panel-header h3 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.panel-header h3 mat-icon {\n  color: #1a56db;\n}\n.panel-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 20px 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.panel-title mat-icon {\n  color: #1a56db;\n}\n.form-grid {\n  display: grid;\n  gap: 8px 16px;\n}\n.form-grid.cols-1 {\n  grid-template-columns: 1fr;\n}\n.form-grid.cols-2 {\n  grid-template-columns: 1fr 1fr;\n}\n.form-grid.cols-3 {\n  grid-template-columns: 1fr 1fr 1fr;\n}\n.form-grid mat-form-field {\n  width: 100%;\n}\n.form-section-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #1a56db;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 12px 0 8px;\n  padding-bottom: 4px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.form-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  margin-bottom: 12px;\n  background: #fdeded;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.85rem;\n}\n.form-error mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.agent-info-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  background: #e8eefb;\n  border: 1px solid #c3d4f7;\n  border-radius: 10px;\n  margin-bottom: 16px;\n}\n.agent-info-bar > mat-icon {\n  color: #1a56db;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.agent-info-text {\n  display: flex;\n  flex-direction: column;\n}\n.agent-info-name {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.agent-info-detail {\n  font-size: 0.82rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 1px;\n}\n.receiver-banner {\n  background: #f3e8ff;\n  border-color: #d8b4fe;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 16px;\n}\n.search-field {\n  width: 100%;\n}\n.amount-field {\n  max-width: 400px;\n}\n.currency-suffix {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\n.customer-list {\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.list-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background 0.15s;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.list-item:last-child {\n  border-bottom: none;\n}\n.list-item:hover {\n  background: #f5f7fa;\n}\n.list-item.selected {\n  background: #e8eefb;\n  border-left: 3px solid #1a56db;\n}\n.list-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #1a56db;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.receiver-avatar {\n  background: #7c3aed;\n}\n.list-info {\n  flex: 1;\n  min-width: 0;\n}\n.list-name {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.list-detail {\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.list-badge {\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 12px;\n  background: #f0f0f0;\n  color: rgba(0, 0, 0, 0.6);\n  white-space: nowrap;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 40px 20px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.empty-state mat-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  opacity: 0.5;\n}\n.empty-state span {\n  font-size: 0.875rem;\n}\n.selected-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n  border-radius: 10px;\n  margin-bottom: 12px;\n}\n.selected-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.selected-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #2e7d32;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 18px;\n}\n.selected-avatar.receiver-avatar {\n  background: #7c3aed;\n}\n.selected-name {\n  font-weight: 600;\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.selected-detail {\n  font-size: 0.85rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 2px;\n}\n.calc-layout {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr;\n  gap: 24px;\n  align-items: start;\n}\n.route-matched-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  margin: 8px 0 4px;\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n  border-radius: 8px;\n  color: #2e7d32;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.route-matched-bar mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.calc-card {\n  border-radius: 12px !important;\n  position: sticky;\n  top: 80px;\n}\n.calc-card mat-card-content {\n  padding: 24px !important;\n}\n.calc-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.calc-title mat-icon {\n  color: #1a56db;\n}\n.calc-row {\n  margin: 14px 0;\n}\n.calc-label {\n  display: block;\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 4px;\n}\n.calc-value-lg {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.calc-value-rate {\n  display: block;\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.calc-no-rate {\n  display: block;\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-style: italic;\n}\n.calc-value-receive {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #2e7d32;\n}\n.calc-detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.7);\n}\n.calc-detail-value {\n  font-weight: 600;\n}\n.calc-earning {\n  color: #2e7d32;\n}\n.calc-total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n.calc-ready {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 16px;\n  padding: 10px 14px;\n  background: #e8f5e9;\n  border-radius: 8px;\n  color: #2e7d32;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.calc-ready mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.calc-loading {\n  margin: 12px 0;\n}\n.calc-loading-text {\n  display: block;\n  text-align: center;\n  font-size: 0.82rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 8px;\n}\n.calc-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 14px;\n  margin: 8px 0;\n  background: #fff3e0;\n  border: 1px solid #ffe0b2;\n  border-radius: 8px;\n  color: #ed6c02;\n  font-size: 0.85rem;\n}\n.calc-error mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.compliance-warnings {\n  margin: 10px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.compliance-warn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #fff3e0;\n  border: 1px solid #ffe0b2;\n  border-radius: 8px;\n  color: #ed6c02;\n  font-size: 0.85rem;\n}\n.compliance-warn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.compliance-block {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #ffebee;\n  border: 1px solid #ffcdd2;\n  border-radius: 8px;\n  color: #d32f2f;\n  font-size: 0.85rem;\n}\n.compliance-block mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.step-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 20px;\n  padding-top: 16px;\n}\n.step-actions .spacer {\n  flex: 1;\n}\n.step-actions button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-spinner {\n  display: inline-block;\n  margin-right: 8px;\n}\n.payout-details {\n  margin-top: 16px;\n}\n.wallet-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  background: #f3e8ff;\n  border: 1px solid #d8b4fe;\n  border-radius: 8px;\n  color: #6b21a8;\n  font-size: 0.875rem;\n}\n.wallet-info mat-icon {\n  flex-shrink: 0;\n  color: #7c3aed;\n}\n.summary-card {\n  border-radius: 12px !important;\n  margin-top: 16px;\n}\n.summary-card mat-card-content {\n  padding: 24px !important;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 24px;\n}\n.summary-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.summary-label {\n  font-size: 0.78rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 500;\n}\n.summary-value {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.summary-value.highlight {\n  color: #2e7d32;\n  font-size: 1.05rem;\n}\n.summary-value.total {\n  color: #1a56db;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.success-card {\n  border-radius: 12px !important;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.success-card mat-card-content {\n  padding: 40px !important;\n  text-align: center;\n}\n.success-icon mat-icon {\n  font-size: 72px;\n  width: 72px;\n  height: 72px;\n  color: #2e7d32;\n}\n.success-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n  margin: 12px 0 4px;\n}\n.success-ref {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 28px;\n}\n.success-ref strong {\n  color: #1a56db;\n  font-size: 1.1rem;\n}\n.success-details {\n  text-align: left;\n  background: #fafafa;\n  border-radius: 10px;\n  padding: 16px 20px;\n  margin-bottom: 28px;\n}\n.success-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.success-row span:first-child {\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 500;\n}\n.success-row span:last-child {\n  font-weight: 600;\n}\n.success-amount {\n  color: #2e7d32 !important;\n  font-size: 1.05rem !important;\n}\n.status-badge {\n  padding: 3px 12px;\n  border-radius: 12px;\n  background: #fff3e0;\n  color: #ed6c02;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.success-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.field-with-action {\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n}\n.field-with-action mat-form-field {\n  flex: 1;\n}\n.field-with-action button {\n  margin-top: 8px;\n}\n.branch-selected-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  margin-bottom: 12px;\n  background: #e8eefb;\n  border: 1px solid #c3d4f7;\n  border-radius: 8px;\n  color: #1a56db;\n  font-size: 0.85rem;\n}\n.branch-selected-bar mat-icon:first-child {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.branch-selected-bar span {\n  flex: 1;\n}\n.branch-selected-bar button {\n  margin-left: auto;\n  color: rgba(0, 0, 0, 0.6);\n}\n.branch-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.branch-popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 560px;\n  max-width: 90vw;\n  max-height: 80vh;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.branch-popup-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.branch-popup-header h3 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.branch-popup-header h3 mat-icon {\n  color: #1a56db;\n}\n.branch-search-field {\n  width: 100%;\n  padding: 12px 20px 0;\n  box-sizing: border-box;\n}\n.branch-list {\n  flex: 1;\n  overflow-y: auto;\n  max-height: 400px;\n  padding: 0 8px 12px;\n}\n.branch-list-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  margin: 2px 0;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 0.15s;\n}\n.branch-list-item:hover {\n  background: #f5f7fa;\n}\n.branch-list-item.selected {\n  background: #e8eefb;\n  border-left: 3px solid #1a56db;\n}\n.branch-list-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #e8eefb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.branch-list-icon mat-icon {\n  color: #1a56db;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.branch-list-info {\n  flex: 1;\n  min-width: 0;\n}\n.branch-list-name {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.87);\n}\n.branch-list-detail {\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 1024px) {\n  .calc-layout {\n    grid-template-columns: 1fr;\n  }\n  .calc-card {\n    position: static;\n  }\n}\n@media (max-width: 768px) {\n  .steps-header {\n    padding: 0;\n  }\n  .step-line {\n    max-width: 60px;\n  }\n  .form-grid.cols-3 {\n    grid-template-columns: 1fr 1fr;\n  }\n  .summary-grid {\n    grid-template-columns: 1fr;\n  }\n  .success-card mat-card-content {\n    padding: 24px !important;\n  }\n}\n:host-context(.dark-mode) .panel-header h3,\n:host-context(.dark-mode) .panel-title,\n:host-context(.dark-mode) .calc-title,\n:host-context(.dark-mode) .calc-value-lg,\n:host-context(.dark-mode) .calc-value-rate,\n:host-context(.dark-mode) .calc-total-row,\n:host-context(.dark-mode) .list-name,\n:host-context(.dark-mode) .selected-name,\n:host-context(.dark-mode) .success-title,\n:host-context(.dark-mode) .success-row,\n:host-context(.dark-mode) .branch-popup-header h3,\n:host-context(.dark-mode) .branch-list-name,\n:host-context(.dark-mode) .summary-value {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .calc-label,\n:host-context(.dark-mode) .calc-no-rate,\n:host-context(.dark-mode) .calc-detail-row,\n:host-context(.dark-mode) .calc-loading-text,\n:host-context(.dark-mode) .form-section-label,\n:host-context(.dark-mode) .agent-info-detail,\n:host-context(.dark-mode) .list-detail,\n:host-context(.dark-mode) .selected-detail,\n:host-context(.dark-mode) .summary-label,\n:host-context(.dark-mode) .success-ref,\n:host-context(.dark-mode) .branch-list-detail,\n:host-context(.dark-mode) .currency-suffix,\n:host-context(.dark-mode) .step-text,\n:host-context(.dark-mode) .empty-state {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .form-section-label {\n  border-bottom-color: #334155;\n}\n:host-context(.dark-mode) .step-circle {\n  background: #334155;\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .step-line {\n  background: #334155;\n}\n:host-context(.dark-mode) .agent-info-bar {\n  background: rgba(26, 86, 219, 0.12);\n  border-color: rgba(26, 86, 219, 0.25);\n}\n:host-context(.dark-mode) .agent-info-name {\n  color: #e2e8f0;\n}\n:host-context(.dark-mode) .customer-list {\n  border-color: #334155;\n}\n:host-context(.dark-mode) .list-item {\n  border-bottom-color: #334155;\n}\n:host-context(.dark-mode) .list-item:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark-mode) .list-item.selected {\n  background: rgba(26, 86, 219, 0.15);\n  border-left-color: #60a5fa;\n}\n:host-context(.dark-mode) .list-badge {\n  background: #334155;\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .selected-banner {\n  background: rgba(46, 125, 50, 0.12);\n  border-color: rgba(46, 125, 50, 0.3);\n}\n:host-context(.dark-mode) .receiver-banner {\n  background: rgba(124, 58, 237, 0.12);\n  border-color: rgba(124, 58, 237, 0.3);\n}\n:host-context(.dark-mode) .success-details {\n  background: #1e293b;\n}\n:host-context(.dark-mode) .success-row span:first-child {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .branch-popup {\n  background: #1e293b;\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);\n}\n:host-context(.dark-mode) .branch-popup-header {\n  border-bottom-color: #334155;\n}\n:host-context(.dark-mode) .branch-list-item:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark-mode) .branch-list-item.selected {\n  background: rgba(26, 86, 219, 0.15);\n  border-left-color: #60a5fa;\n}\n:host-context(.dark-mode) .branch-list-icon {\n  background: rgba(26, 86, 219, 0.12);\n}\n:host-context(.dark-mode) .branch-selected-bar {\n  background: rgba(26, 86, 219, 0.12);\n  border-color: rgba(26, 86, 219, 0.25);\n}\n:host-context(.dark-mode) .calc-ready {\n  background: rgba(46, 125, 50, 0.12);\n  color: #4ade80;\n}\n:host-context(.dark-mode) .error-alert {\n  background: rgba(211, 47, 47, 0.12);\n  border-color: rgba(211, 47, 47, 0.3);\n}\n:host-context(.dark-mode) .warn-alert {\n  background: rgba(237, 108, 2, 0.12);\n  border-color: rgba(237, 108, 2, 0.3);\n}\n:host-context(.dark-mode) .info-alert {\n  background: rgba(26, 86, 219, 0.12);\n  border-color: rgba(26, 86, 219, 0.25);\n}\n:host-context(.dark-mode) .form-error {\n  background: rgba(211, 47, 47, 0.12);\n  border-color: rgba(211, 47, 47, 0.3);\n}\n:host-context(.dark-mode) .calc-error {\n  background: rgba(237, 108, 2, 0.12);\n  border-color: rgba(237, 108, 2, 0.3);\n}\n:host-context(.dark-mode) .compliance-warn {\n  background: rgba(237, 108, 2, 0.12);\n  border-color: rgba(237, 108, 2, 0.3);\n}\n:host-context(.dark-mode) .compliance-block {\n  background: rgba(211, 47, 47, 0.12);\n  border-color: rgba(211, 47, 47, 0.3);\n}\n:host-context(.dark-mode) .wallet-info {\n  background: rgba(124, 58, 237, 0.12);\n  border-color: rgba(124, 58, 237, 0.3);\n  color: #c4b5fd;\n}\n:host-context(.dark-mode) .status-badge {\n  background: rgba(237, 108, 2, 0.15);\n  color: #fbbf24;\n}\n@media (max-width: 600px) {\n  .form-grid.cols-2,\n  .form-grid.cols-3 {\n    grid-template-columns: 1fr;\n  }\n  .panel-header {\n    flex-direction: column;\n    gap: 12px;\n    align-items: flex-start;\n  }\n  .step-text {\n    font-size: 10px;\n  }\n  .step-circle {\n    width: 30px;\n    height: 30px;\n    font-size: 12px;\n  }\n  .step-indicator {\n    min-width: 50px;\n  }\n  .selected-banner {\n    flex-direction: column;\n    gap: 8px;\n    align-items: flex-start;\n  }\n  .success-actions {\n    flex-direction: column;\n    width: 100%;\n  }\n  .success-actions button {\n    width: 100%;\n  }\n  .calc-value-lg {\n    font-size: 1.25rem;\n  }\n  .calc-value-receive {\n    font-size: 1.25rem;\n  }\n}\n.pin-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  animation: fadeIn 0.2s ease;\n}\n.pin-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  z-index: 1001;\n  width: 400px;\n  max-width: 90vw;\n  animation: slideUp 0.25s ease;\n}\n.pin-dialog .pin-dialog-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.pin-dialog .pin-dialog-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #1a56db;\n}\n.pin-dialog .pin-dialog-header h3 mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.pin-dialog .pin-dialog-body {\n  padding: 20px 24px;\n}\n.pin-dialog .pin-dialog-body .pin-hint {\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.6);\n  margin: 0 0 16px;\n  line-height: 1.5;\n}\n.pin-dialog .pin-dialog-body .pin-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #fdeded;\n  color: #d32f2f;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.pin-dialog .pin-dialog-body .pin-error mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.pin-dialog .pin-dialog-body .pin-field {\n  width: 100%;\n}\n.pin-dialog .pin-dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 12px 24px 20px;\n}\n.pin-dialog .pin-dialog-actions button {\n  min-width: 120px;\n}\n.pin-dialog .pin-dialog-actions .btn-spinner {\n  display: inline-block;\n  margin-right: 8px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -45%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n:host-context(.dark-mode) .pin-dialog {\n  background: #1e293b;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);\n}\n:host-context(.dark-mode) .pin-dialog .pin-dialog-header {\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark-mode) .pin-dialog .pin-dialog-header h3 {\n  color: #93b4ff;\n}\n:host-context(.dark-mode) .pin-dialog .pin-dialog-body .pin-hint {\n  color: rgba(255, 255, 255, 0.6);\n}\n:host-context(.dark-mode) .pin-dialog .pin-dialog-body .pin-error {\n  background: rgba(211, 47, 47, 0.15);\n  color: #ff6b6b;\n}\n/*# sourceMappingURL=send-money.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: Router }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SendMoneyComponent, { className: "SendMoneyComponent", filePath: "src/app/pages/agent/send-money/send-money.component.ts", lineNumber: 59 });
})();
export {
  SendMoneyComponent
};
//# sourceMappingURL=chunk-HLJVPHFO.js.map
